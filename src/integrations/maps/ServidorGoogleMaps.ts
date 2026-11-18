import { z } from "zod";
import type {
  MapaConPosiciones,
  PuntoBolsin,
  UbicacionGpsBolsin,
} from "@/dtos/seguimiento-bolsines.dto";
import {
  COORDENADAS_CM_ARGENTINA,
  consultarOsrmRuta,
  type LatLngLiteral,
} from "@/lib/seguimiento/rutas-envio";
import { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";

const respuestaPhoton = z.object({
  features: z.array(
    z.object({
      geometry: z.object({
        type: z.literal("Point"),
        coordinates: z.tuple([
          z.number().min(-180).max(180),
          z.number().min(-90).max(90),
        ]),
      }),
      properties: z.object({ countrycode: z.string() }),
    }),
  ),
});

async function resolverCoordenadas(comision: {
  codigo: string;
  direccion: string;
}): Promise<LatLngLiteral | null> {
  // Las sedes ficticias del seed tienen coordenadas de referencia por localidad.
  if (comision.direccion.startsWith("Sede ficticia - ")) {
    return COORDENADAS_CM_ARGENTINA[comision.codigo] ?? null;
  }

  const direccion = comision.direccion.trim();
  if (!direccion) return null;
  try {
    const url = new URL(
      process.env.MAPAS_GEOCODIFICADOR_URL ?? "https://photon.komoot.io/api/",
    );
    url.search = new URLSearchParams({ q: direccion, limit: "5" }).toString();
    const respuesta = await fetch(url, {
      signal: AbortSignal.timeout(2500),
      next: { revalidate: 86400 },
    });
    if (!respuesta.ok) return null;
    const resultado = respuestaPhoton.safeParse(await respuesta.json());
    if (!resultado.success) return null;
    const sede = resultado.data.features.find(
      ({ properties }) => properties.countrycode.toUpperCase() === "AR",
    );
    if (!sede) return null;
    const [lng, lat] = sede.geometry.coordinates;
    return { lat, lng };
  } catch {
    return null;
  }
}

export class ServidorGoogleMaps {
  constructor(
    private readonly bolsines: Pick<
      BolsinRepositoryPrisma,
      "buscarParaMapa"
    > = new BolsinRepositoryPrisma(),
    private readonly resolverSede = resolverCoordenadas,
    private readonly resolverRuta = consultarOsrmRuta,
  ) {}

  async getMapaLocation(
    ubicaciones: UbicacionGpsBolsin[],
  ): Promise<MapaConPosiciones> {
    const numeros = [...new Set(ubicaciones.map(({ numero }) => numero))];
    const registros = await this.bolsines.buscarParaMapa(numeros);
    const porNumero = new Map<number, (typeof registros)[number] | null>();
    for (const registro of registros) {
      const numero = registro.numeroBolsin;
      porNumero.set(numero, porNumero.has(numero) ? null : registro);
    }

    const sedes = new Map<number, Promise<LatLngLiteral | null>>();
    const rutas = new Map<string, Promise<LatLngLiteral[] | null>>();
    const coordenadasDe = (
      comision: (typeof registros)[number]["cmOrigen"],
    ) => {
      const guardada = sedes.get(comision.id);
      if (guardada) return guardada;
      const pendiente = this.resolverSede(comision).catch(() => null);
      sedes.set(comision.id, pendiente);
      return pendiente;
    };

    const puntos = await Promise.all(
      ubicaciones.map(async (gps): Promise<PuntoBolsin> => {
        const registro = porNumero.get(gps.numero);
        if (!registro) {
          return {
            ...gps,
            precinto: null,
            destino: "Destino sin datos",
            estadoCobertura: "vivo",
            recorrido: { origen: null, destino: null, trazado: null },
          };
        }
        const [origen, destino] = await Promise.all([
          coordenadasDe(registro.cmOrigen),
          coordenadasDe(registro.cmDestino),
        ]);
        let trazado: LatLngLiteral[] | null = null;
        if (
          origen &&
          destino &&
          registro.cmOrigen.id !== registro.cmDestino.id
        ) {
          const par = `${registro.cmOrigen.id}:${registro.cmDestino.id}`;
          const pendiente =
            rutas.get(par) ??
            this.resolverRuta(origen, destino).catch(() => null);
          rutas.set(par, pendiente);
          trazado = await pendiente;
        }
        return {
          ...gps,
          id: registro.id,
          precinto: registro.numeroPrecinto,
          destino: registro.cmDestino.nombre,
          codigoDestino: registro.cmDestino.codigo,
          direccionDestino: registro.cmDestino.direccion || undefined,
          cmOrigen: {
            codigo: registro.cmOrigen.codigo,
            nombre: registro.cmOrigen.nombre,
            direccion: registro.cmOrigen.direccion,
          },
          remito: registro.remito,
          pesoKg: registro.peso > 0 ? registro.peso : undefined,
          estadoCobertura: "vivo",
          recorrido: { origen, destino, trazado },
        };
      }),
    );

    return { estilo: "https://tiles.openfreemap.org/styles/bright", puntos };
  }
}
