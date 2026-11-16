import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";

export type RutaNacional = "RN7" | "RN9" | "RN40" | "OTRA";
export type SentidoCirculacion = "ida" | "vuelta";
export type EstadoUnidad = "vivo" | "alerta_a3";

export interface UnidadTransporte {
  id: string;
  ruta: RutaNacional;
  sentido: SentidoCirculacion;
  etiqueta: string;
  coordenadas: [number, number];
  rumboGrados: number;
  bolsines: BolsinSeguimiento[];
  bolsinesCoincidentes: BolsinSeguimiento[];
  coincidenciasFiltro: number;
  tieneA3: boolean;
  estado: EstadoUnidad;
}

export interface AgruparUnidadesOpciones {
  /** Subconjunto de bolsines que cumplen los filtros activos. */
  bolsinesFiltrados?: BolsinSeguimiento[];
}

type PuntoRuta = readonly [lng: number, lat: number];

const PUNTOS_CORREDOR: Record<Exclude<RutaNacional, "OTRA">, PuntoRuta[]> = {
  RN9: [
    [-58.3816, -34.6037], // Buenos Aires
    [-60.6393, -32.9468], // Rosario
    [-64.1888, -31.4201], // Córdoba
    [-64.2642, -27.7834], // Santiago del Estero
    [-65.2176, -26.8083], // Tucumán
    [-65.2995, -24.1858], // Jujuy
  ],
  RN7: [
    [-58.3816, -34.6037], // Buenos Aires
    [-60.943, -34.585], // Junín
    [-63.39, -34.145], // Laboulaye / Vicuña Mackenna
    [-65.4578, -33.6757], // Villa Mercedes
    [-66.3378, -33.3017], // San Luis
    [-68.8458, -32.8895], // Mendoza
  ],
  RN40: [
    [-65.5961, -22.1044], // La Quiaca
    [-65.976, -26.0729], // Cafayate
    [-67.4983, -29.1667], // Chilecito
    [-68.5364, -31.5375], // San Juan
    [-68.8458, -32.8895], // Mendoza
    [-70.27, -37.382], // Chos Malal
    [-71.3103, -41.1335], // Bariloche
  ],
};

const RUMBO_POR_CORREDOR: Record<
  RutaNacional,
  Record<SentidoCirculacion, number>
> = {
  RN9: { ida: 135, vuelta: 315 },
  RN7: { ida: 258, vuelta: 78 },
  RN40: { ida: 190, vuelta: 10 },
  OTRA: { ida: 90, vuelta: 270 },
};

const COORDENADAS_CM_FALLBACK: Record<string, PuntoRuta> = {
  "CM-01": [-64.1888, -31.4201],
  "CM-02": [-60.6393, -32.9468],
  "CM-03": [-58.3816, -34.6037],
  "CM-04": [-68.8458, -32.8895],
  "CM-05": [-65.2176, -26.8083],
};

function distanciaCuadradaPuntoSegmento(
  p: PuntoRuta,
  a: PuntoRuta,
  b: PuntoRuta,
): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) {
    const px = p[0] - a[0];
    const py = p[1] - a[1];
    return px * px + py * py;
  }
  const t = Math.max(
    0,
    Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / lenSq),
  );
  const projX = a[0] + t * dx;
  const projY = a[1] + t * dy;
  const px = p[0] - projX;
  const py = p[1] - projY;
  return px * px + py * py;
}

function distanciaMinimaCorredor(
  punto: PuntoRuta,
  ruta: Exclude<RutaNacional, "OTRA">,
): number {
  const nodos = PUNTOS_CORREDOR[ruta];
  let min = Number.POSITIVE_INFINITY;
  for (let i = 1; i < nodos.length; i++) {
    const dist = distanciaCuadradaPuntoSegmento(punto, nodos[i - 1]!, nodos[i]!);
    if (dist < min) min = dist;
  }
  return min;
}

/** Infiere el corredor nacional más cercano para un bolsín según su destino o coordenadas. */
export function inferirCorredorBolsin(bolsin: BolsinSeguimiento): RutaNacional {
  const codigoDestino = bolsin.cmDestino.codigo.toUpperCase();
  if (codigoDestino === "CM-04") {
    // Mendoza: si está más al sur/oeste sobre cordillera, RN40; si no, RN7.
    if (bolsin.ubicacion && bolsin.ubicacion.latitud < -34.5) {
      return "RN40";
    }
    return "RN7";
  }
  if (
    codigoDestino === "CM-02" ||
    codigoDestino === "CM-03" ||
    codigoDestino === "CM-05"
  ) {
    return "RN9";
  }

  const punto: PuntoRuta | null = bolsin.ubicacion
    ? [bolsin.ubicacion.longitud, bolsin.ubicacion.latitud]
    : (COORDENADAS_CM_FALLBACK[codigoDestino] ?? null);

  if (!punto) return "OTRA";

  const candidatos: Array<Exclude<RutaNacional, "OTRA">> = ["RN7", "RN9", "RN40"];
  let mejorRuta: RutaNacional = "OTRA";
  let mejorDist = 12; // ~3.4 grados cuadráticos de tolerancia

  for (const ruta of candidatos) {
    const dist = distanciaMinimaCorredor(punto, ruta);
    if (dist < mejorDist) {
      mejorDist = dist;
      mejorRuta = ruta;
    }
  }

  return mejorRuta;
}

/** Infiere el sentido de circulación ("ida" | "vuelta") dentro del corredor. */
export function inferirSentidoBolsin(
  bolsin: BolsinSeguimiento,
  ruta: RutaNacional,
): SentidoCirculacion {
  const destino = bolsin.cmDestino.codigo.toUpperCase();
  const origen = bolsin.cmOrigen?.codigo.toUpperCase() ?? "CM-01";

  if (ruta === "RN9") {
    // Norte (Tucumán/Jujuy) vs Centro-Sur (Córdoba -> Rosario -> CABA)
    if (destino === "CM-05") return "vuelta";
    if (origen === "CM-03" && (destino === "CM-01" || destino === "CM-02")) {
      return "vuelta";
    }
    return "ida";
  }

  if (ruta === "RN7") {
    if (origen === "CM-04") return "vuelta";
    return "ida";
  }

  if (ruta === "RN40") {
    if (bolsin.ubicacion && bolsin.ubicacion.latitud > -29) return "vuelta";
    return "ida";
  }

  return "ida";
}

function obtenerCoordenadasBolsin(bolsin: BolsinSeguimiento): PuntoRuta {
  if (bolsin.ubicacion) {
    return [bolsin.ubicacion.longitud, bolsin.ubicacion.latitud];
  }
  const dest = COORDENADAS_CM_FALLBACK[bolsin.cmDestino.codigo.toUpperCase()];
  if (dest) return dest;
  const orig =
    bolsin.cmOrigen &&
    COORDENADAS_CM_FALLBACK[bolsin.cmOrigen.codigo.toUpperCase()];
  return orig ?? [-64.1888, -31.4201];
}

/**
 * Agrupa bolsines en tránsito en unidades de transporte (`UnidadTransporte`)
 * por corredor nacional (`RN7`, `RN9`, `RN40`, `OTRA`) y sentido (`ida` / `vuelta`).
 */
export function agruparEnUnidadesTransporte(
  bolsines: BolsinSeguimiento[],
  opciones: AgruparUnidadesOpciones = {},
): UnidadTransporte[] {
  if (bolsines.length === 0) return [];

  const filtradosSet = opciones.bolsinesFiltrados
    ? new Set(opciones.bolsinesFiltrados.map((b) => b.nroBolsin))
    : null;

  const grupos = new Map<
    string,
    {
      ruta: RutaNacional;
      sentido: SentidoCirculacion;
      bolsines: BolsinSeguimiento[];
    }
  >();

  for (const bolsin of bolsines) {
    const ruta = inferirCorredorBolsin(bolsin);
    const sentido = inferirSentidoBolsin(bolsin, ruta);
    const id = `${ruta}-${sentido}`;
    const existente = grupos.get(id);
    if (existente) {
      existente.bolsines.push(bolsin);
    } else {
      grupos.set(id, { ruta, sentido, bolsines: [bolsin] });
    }
  }

  const unidades: UnidadTransporte[] = [];

  for (const [id, grupo] of grupos.entries()) {
    const conUbicacion = grupo.bolsines.filter((b) => b.ubicacion !== null);
    const fuenteCoords =
      conUbicacion.length > 0 ? conUbicacion : grupo.bolsines;

    let sumLng = 0;
    let sumLat = 0;
    for (const bolsin of fuenteCoords) {
      const [lng, lat] = obtenerCoordenadasBolsin(bolsin);
      sumLng += lng;
      sumLat += lat;
    }

    const coordenadas: [number, number] = [
      sumLng / fuenteCoords.length,
      sumLat / fuenteCoords.length,
    ];

    const bolsinesCoincidentes = filtradosSet
      ? grupo.bolsines.filter((b) => filtradosSet.has(b.nroBolsin))
      : grupo.bolsines;

    const tieneA3 = grupo.bolsines.some(
      (b) => b.ubicacion === null || b.ubicacion.estadoCobertura === "sin_cobertura",
    );

    const etiquetaSentido = grupo.sentido === "ida" ? "Ida" : "Vuelta";

    unidades.push({
      id,
      ruta: grupo.ruta,
      sentido: grupo.sentido,
      etiqueta: `${grupo.ruta} · ${etiquetaSentido}`,
      coordenadas,
      rumboGrados: RUMBO_POR_CORREDOR[grupo.ruta][grupo.sentido],
      bolsines: grupo.bolsines,
      bolsinesCoincidentes,
      coincidenciasFiltro: bolsinesCoincidentes.length,
      tieneA3,
      estado: tieneA3 ? "alerta_a3" : "vivo",
    });
  }

  return unidades.sort((a, b) => a.id.localeCompare(b.id, "es-AR"));
}
