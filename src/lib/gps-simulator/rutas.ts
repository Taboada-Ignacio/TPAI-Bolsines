import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { z } from "zod";

const coordenada = z.tuple([
  z.number().min(-180).max(180),
  z.number().min(-90).max(90),
]);
const linea = z.array(coordenada).min(2);
const rutaNacional = z.enum(["RN7", "RN9", "RN40"]);
const geoJson = z.object({
  type: z.literal("FeatureCollection"),
  features: z.array(
    z.object({
      type: z.literal("Feature"),
      properties: z.object({ ruta: rutaNacional }),
      geometry: z.discriminatedUnion("type", [
        z.object({ type: z.literal("LineString"), coordinates: linea }),
        z.object({
          type: z.literal("MultiLineString"),
          coordinates: z.array(linea).min(1),
        }),
      ]),
    }),
  ),
});

type Coordenada = z.output<typeof coordenada>;
type Segmento = [inicio: Coordenada, fin: Coordenada];

async function cargarRutas(): Promise<Segmento[][]> {
  const archivo = resolve(
    process.cwd(),
    "src/lib/gps-simulator/rutas-nacionales.geojson",
  );
  const datos = geoJson.parse(JSON.parse(await readFile(archivo, "utf8")));
  const rutas: Record<z.output<typeof rutaNacional>, Segmento[]> = {
    RN7: [],
    RN9: [],
    RN40: [],
  };

  for (const { properties, geometry } of datos.features) {
    const lineas =
      geometry.type === "LineString"
        ? [geometry.coordinates]
        : geometry.coordinates;
    for (const puntos of lineas) {
      for (let i = 1; i < puntos.length; i++) {
        const inicio = puntos[i - 1];
        const fin = puntos[i];
        if (inicio[0] !== fin[0] || inicio[1] !== fin[1]) {
          rutas[properties.ruta].push([inicio, fin]);
        }
      }
    }
  }

  const rutasOrdenadas = [rutas.RN7, rutas.RN9, rutas.RN40];
  if (rutasOrdenadas.some((segmentos) => segmentos.length === 0)) {
    throw new Error("Hay rutas nacionales sin segmentos utilizables.");
  }

  return rutasOrdenadas;
}

let carga: ReturnType<typeof cargarRutas> | undefined;

export function obtenerRutas(): ReturnType<typeof cargarRutas> {
  carga ??= cargarRutas().catch((error) => {
    carga = undefined;
    throw error;
  });
  return carga;
}
