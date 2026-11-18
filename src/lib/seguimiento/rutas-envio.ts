import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
} from "@/dtos/seguimiento-bolsin.dto";

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

export interface RutaEnvioResuelta {
  nroBolsin: number;
  origen: LatLngLiteral;
  posicionActual: LatLngLiteral;
  destino: LatLngLiteral;
  tramoRecorrido: LatLngLiteral[];
  tramoRestante: LatLngLiteral[];
  rutaCompleta: LatLngLiteral[];
  fuente: "directions" | "osrm" | "geodesica";
}

/** Coordenadas de referencia de las Comisiones Médicas argentinas (códigos reales + demo). */
export const COORDENADAS_CM_ARGENTINA: Record<string, LatLngLiteral> = {
  // Códigos de demo
  "CM-01": { lat: -31.4201, lng: -64.1888 }, // Córdoba
  "CM-02": { lat: -32.9468, lng: -60.6393 }, // Rosario
  "CM-03": { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
  "CM-04": { lat: -32.8895, lng: -68.8458 }, // Mendoza
  "CM-05": { lat: -26.8083, lng: -65.2176 }, // Tucumán
  // Códigos oficiales del catálogo en BD (24 Comisiones Médicas)
  "CM-BA": { lat: -34.9214, lng: -57.9545 }, // La Plata, Buenos Aires
  // Coordenadas de referencia para las sedes del seed GPS.
  "CM-CBA-01": { lat: -31.4201, lng: -64.1888 },
  "CM-CBA-02": { lat: -31.378, lng: -64.218 },
  "CM-ROS-02": { lat: -32.9468, lng: -60.6393 },
  "CM-MDZ-03": { lat: -32.8895, lng: -68.8458 },
  "CM-BA-01": { lat: -34.6037, lng: -58.3816 },
  "CM-TUC-01": { lat: -26.8083, lng: -65.2176 },
  "CM-SLA-01": { lat: -24.7821, lng: -65.4232 },
  "CM-JUJ-01": { lat: -24.1858, lng: -65.2995 },
  "CM-NQN-01": { lat: -38.9516, lng: -68.0591 },
  "CM-MDQ-01": { lat: -38.0055, lng: -57.5426 },
  "CM-LPL-01": { lat: -34.9214, lng: -57.9545 },
  "CM-CABA": { lat: -34.6037, lng: -58.3816 }, // CABA
  "CM-CAT": { lat: -28.4696, lng: -65.7852 }, // San Fernando del Valle de Catamarca
  "CM-CBA": { lat: -31.4201, lng: -64.1888 }, // Córdoba Capital
  "CM-CHA": { lat: -27.4514, lng: -58.9867 }, // Resistencia, Chaco
  "CM-CHU": { lat: -43.3002, lng: -65.1023 }, // Rawson, Chubut
  "CM-COR": { lat: -27.4692, lng: -58.8306 }, // Corrientes Capital
  "CM-ER": { lat: -31.732, lng: -60.5238 }, // Paraná, Entre Ríos
  "CM-FOR": { lat: -26.1849, lng: -58.1731 }, // Formosa Capital
  "CM-JUJ": { lat: -24.1858, lng: -65.2995 }, // San Salvador de Jujuy
  "CM-LP": { lat: -36.6167, lng: -64.2833 }, // Santa Rosa, La Pampa
  "CM-LR": { lat: -29.4131, lng: -66.8558 }, // La Rioja Capital
  "CM-MIS": { lat: -27.3671, lng: -55.8961 }, // Posadas, Misiones
  "CM-MZA": { lat: -32.8895, lng: -68.8458 }, // Mendoza Capital
  "CM-NEU": { lat: -38.9516, lng: -68.0591 }, // Neuquén Capital
  "CM-RN": { lat: -40.8135, lng: -62.9967 }, // Viedma, Río Negro
  "CM-SAL": { lat: -24.7821, lng: -65.4232 }, // Salta Capital
  "CM-SC": { lat: -51.6226, lng: -69.2181 }, // Río Gallegos, Santa Cruz
  "CM-SDE": { lat: -27.7834, lng: -64.2642 }, // Santiago del Estero
  "CM-SF": { lat: -31.6107, lng: -60.6973 }, // Santa Fe Capital
  "CM-SJ": { lat: -31.5375, lng: -68.5364 }, // San Juan Capital
  "CM-SL": { lat: -33.3017, lng: -66.3378 }, // San Luis Capital
  "CM-TDF": { lat: -54.8019, lng: -68.303 }, // Ushuaia, Tierra del Fuego
  "CM-TUC": { lat: -26.8083, lng: -65.2176 }, // San Miguel de Tucumán
};

const CENTRO_ARGENTINA_DEFAULT: LatLngLiteral = { lat: -32.2, lng: -63.8 };

/**
 * Trazados viales reales entre Comisiones Médicas argentinas (fallback síncrono
 * instantáneo cuando Directions API u OSRM no están disponibles).
 */
const TRAMO_RN9_CORDOBA_ROSARIO: LatLngLiteral[] = [
  { lat: -31.4201, lng: -64.1888 }, // Córdoba
  { lat: -31.5485, lng: -64.0412 }, // Toledo
  { lat: -31.6815, lng: -63.8825 }, // Pilar
  { lat: -31.8384, lng: -63.6716 }, // Oncativo
  { lat: -32.0411, lng: -63.5698 }, // Oliva
  { lat: -32.2389, lng: -63.4015 }, // Tío Pujio
  { lat: -32.4075, lng: -63.2402 }, // Villa María
  { lat: -32.5512, lng: -62.9418 }, // Ballesteros
  { lat: -32.6259, lng: -62.6887 }, // Bell Ville
  { lat: -32.6889, lng: -62.3574 }, // Leones
  { lat: -32.6978, lng: -62.1067 }, // Marcos Juárez
  { lat: -32.7495, lng: -61.8122 }, // Tortugas / Armstrong
  { lat: -32.8164, lng: -61.3949 }, // Cañada de Gómez
  { lat: -32.8456, lng: -61.1581 }, // Carcarañá
  { lat: -32.8992, lng: -60.8752 }, // Roldán / Funes
  { lat: -32.9468, lng: -60.6393 }, // Rosario
];

const TRAMO_RN9_ROSARIO_BA: LatLngLiteral[] = [
  { lat: -32.9468, lng: -60.6393 }, // Rosario
  { lat: -33.1518, lng: -60.5064 }, // Arroyo Seco
  { lat: -33.2286, lng: -60.3283 }, // Villa Constitución
  { lat: -33.3358, lng: -60.2252 }, // San Nicolás
  { lat: -33.4892, lng: -60.0085 }, // Ramallo
  { lat: -33.6793, lng: -59.6669 }, // San Pedro
  { lat: -33.8091, lng: -59.5056 }, // Baradero
  { lat: -34.0981, lng: -59.0286 }, // Zárate
  { lat: -34.1687, lng: -58.9591 }, // Campana
  { lat: -34.3489, lng: -58.7924 }, // Escobar
  { lat: -34.4552, lng: -58.6518 }, // Pacheco
  { lat: -34.5186, lng: -58.5234 }, // San Isidro / Panamericana
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
];

const TRAMO_RN8_RN7_CORDOBA_MENDOZA: LatLngLiteral[] = [
  { lat: -31.4201, lng: -64.1888 }, // Córdoba
  { lat: -31.6529, lng: -64.4283 }, // Alta Gracia
  { lat: -31.8945, lng: -64.3912 }, // Despeñaderos / San Agustín
  { lat: -32.1924, lng: -64.2555 }, // Almafuerte
  { lat: -32.4265, lng: -64.2741 }, // Berrotarán
  { lat: -32.7812, lng: -64.3248 }, // Alcira Gigena
  { lat: -33.1232, lng: -64.3493 }, // Río Cuarto (RN8)
  { lat: -33.2491, lng: -64.5345 }, // Holmberg
  { lat: -33.3842, lng: -64.7222 }, // Sampacho
  { lat: -33.5418, lng: -65.0725 }, // Justo Daract / Límite SL
  { lat: -33.6757, lng: -65.4578 }, // Villa Mercedes (RN7)
  { lat: -33.4821, lng: -65.9134 }, // Fraga
  { lat: -33.3017, lng: -66.3378 }, // San Luis
  { lat: -33.3562, lng: -66.7945 }, // Alto Pencoso
  { lat: -33.4006, lng: -67.1489 }, // Desaguadero
  { lat: -33.4658, lng: -67.5514 }, // La Paz
  { lat: -33.2614, lng: -68.0085 }, // Santa Rosa
  { lat: -33.081, lng: -68.4681 }, // San Martín
  { lat: -32.9685, lng: -68.6742 }, // Maipú
  { lat: -32.8895, lng: -68.8458 }, // Mendoza
];

const TRAMO_RN9_RN60_CORDOBA_TUCUMAN: LatLngLiteral[] = [
  { lat: -31.4201, lng: -64.1888 }, // Córdoba
  { lat: -31.1862, lng: -64.1325 }, // Juárez Celman / Est. General Paz
  { lat: -30.9815, lng: -64.0942 }, // Jesús María
  { lat: -30.8128, lng: -63.9892 }, // Villa del Totoral (bifurcación RN60)
  { lat: -30.5842, lng: -64.1658 }, // Sarmiento / Avellaneda
  { lat: -30.4214, lng: -64.3497 }, // Deán Funes (RN60)
  { lat: -30.0895, lng: -64.5412 }, // Quilino
  { lat: -29.7418, lng: -64.8124 }, // San José de las Salinas
  { lat: -29.2817, lng: -65.0608 }, // Recreo
  { lat: -28.9412, lng: -65.1045 }, // San Antonio de La Paz
  { lat: -28.6367, lng: -65.1286 }, // Frías
  { lat: -28.1986, lng: -65.1114 }, // Lavalle
  { lat: -27.7815, lng: -65.3612 }, // La Cocha
  { lat: -27.5194, lng: -65.4982 }, // Juan Bautista Alberdi
  { lat: -27.3458, lng: -65.5886 }, // Concepción
  { lat: -27.1684, lng: -65.4812 }, // Monteros
  { lat: -27.0185, lng: -65.3624 }, // Famaillá
  { lat: -26.8083, lng: -65.2176 }, // San Miguel de Tucumán
];

const TRAMO_RN19_CORDOBA_SANTAFE: LatLngLiteral[] = [
  { lat: -31.4201, lng: -64.1888 }, // Córdoba Capital
  { lat: -31.4167, lng: -64.0833 }, // Malvinas Argentinas
  { lat: -31.3667, lng: -63.8833 }, // Monte Cristo
  { lat: -31.3001, lng: -63.6167 }, // Río Primero
  { lat: -31.3519, lng: -63.3636 }, // Santiago Temple
  { lat: -31.4178, lng: -63.0489 }, // Arroyito
  { lat: -31.4042, lng: -62.7858 }, // La Francia
  { lat: -31.4167, lng: -62.45 }, // Devoto
  { lat: -31.428, lng: -62.0828 }, // San Francisco
  { lat: -31.5036, lng: -61.8122 }, // Angélica (RN19)
  { lat: -31.5867, lng: -61.3667 }, // Sa Pereira
  { lat: -31.6083, lng: -61.0333 }, // Franck / San Agustín
  { lat: -31.6333, lng: -60.8167 }, // Santo Tomé
  { lat: -31.6107, lng: -60.6973 }, // Santa Fe Capital
];

const RUTAS_VIALES_POR_PAR: Record<string, LatLngLiteral[]> = {
  "CM-01->CM-02": TRAMO_RN9_CORDOBA_ROSARIO,
  "CM-02->CM-01": [...TRAMO_RN9_CORDOBA_ROSARIO].reverse(),
  "CM-02->CM-03": TRAMO_RN9_ROSARIO_BA,
  "CM-03->CM-02": [...TRAMO_RN9_ROSARIO_BA].reverse(),
  "CM-01->CM-03": [
    ...TRAMO_RN9_CORDOBA_ROSARIO,
    ...TRAMO_RN9_ROSARIO_BA.slice(1),
  ],
  "CM-03->CM-01": [
    ...TRAMO_RN9_CORDOBA_ROSARIO,
    ...TRAMO_RN9_ROSARIO_BA.slice(1),
  ].reverse(),
  "CM-01->CM-04": TRAMO_RN8_RN7_CORDOBA_MENDOZA,
  "CM-04->CM-01": [...TRAMO_RN8_RN7_CORDOBA_MENDOZA].reverse(),
  "CM-01->CM-05": TRAMO_RN9_RN60_CORDOBA_TUCUMAN,
  "CM-05->CM-01": [...TRAMO_RN9_RN60_CORDOBA_TUCUMAN].reverse(),
  // Pares oficiales de BD
  "CM-CBA->CM-SF": TRAMO_RN19_CORDOBA_SANTAFE,
  "CM-SF->CM-CBA": [...TRAMO_RN19_CORDOBA_SANTAFE].reverse(),
  "CM-CBA->CM-CABA": [
    ...TRAMO_RN9_CORDOBA_ROSARIO,
    ...TRAMO_RN9_ROSARIO_BA.slice(1),
  ],
  "CM-CABA->CM-CBA": [
    ...TRAMO_RN9_CORDOBA_ROSARIO,
    ...TRAMO_RN9_ROSARIO_BA.slice(1),
  ].reverse(),
  "CM-CBA->CM-MZA": TRAMO_RN8_RN7_CORDOBA_MENDOZA,
  "CM-MZA->CM-CBA": [...TRAMO_RN8_RN7_CORDOBA_MENDOZA].reverse(),
  "CM-CBA->CM-TUC": TRAMO_RN9_RN60_CORDOBA_TUCUMAN,
  "CM-TUC->CM-CBA": [...TRAMO_RN9_RN60_CORDOBA_TUCUMAN].reverse(),
};

const OSRM_BASE_URL = "https://router.project-osrm.org/route/v1/driving";
const OSRM_TIMEOUT_MS = 2500;
const osrmCache = new Map<string, LatLngLiteral[]>();
const osrmInFlight = new Map<string, Promise<LatLngLiteral[] | null>>();

/** Obtiene las coordenadas de una Comisión Médica a partir de su código. */
export function obtenerCoordenadaCm(
  codigo: string | undefined | null,
  respaldo: LatLngLiteral = CENTRO_ARGENTINA_DEFAULT,
): LatLngLiteral {
  if (!codigo) return respaldo;
  const normalizado = codigo.trim().toUpperCase();
  return COORDENADAS_CM_ARGENTINA[normalizado] ?? respaldo;
}

function normalizarCodigoCm(codigo: string | undefined | null): string | null {
  if (!codigo) return null;
  const norm = codigo.trim().toUpperCase();
  return norm in COORDENADAS_CM_ARGENTINA ? norm : null;
}

function sonPuntosIguales(a: LatLngLiteral, b: LatLngLiteral): boolean {
  return Math.abs(a.lat - b.lat) < 1e-6 && Math.abs(a.lng - b.lng) < 1e-6;
}

/** Calcula el rumbo en grados (0° Norte, 90° Este) entre dos coordenadas. */
export function calcularRumboGrados(
  desde: LatLngLiteral,
  hasta: LatLngLiteral,
): number {
  if (sonPuntosIguales(desde, hasta)) return 0;
  const lat1 = (desde.lat * Math.PI) / 180;
  const lat2 = (hasta.lat * Math.PI) / 180;
  const dLng = ((hasta.lng - desde.lng) * Math.PI) / 180;
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

/** Interpola un segmento en pasos suaves para trazado geodésico sin billing. */
export function interpolarSegmento(
  desde: LatLngLiteral,
  hasta: LatLngLiteral,
  pasos = 10,
): LatLngLiteral[] {
  if (sonPuntosIguales(desde, hasta) || pasos <= 1) {
    return [desde, hasta];
  }

  const puntos: LatLngLiteral[] = [];
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    puntos.push({
      lat: desde.lat + (hasta.lat - desde.lat) * t,
      lng: desde.lng + (hasta.lng - desde.lng) * t,
    });
  }
  return puntos;
}

function obtenerTrazadoVialFallback(
  codigoOrigen: string | null,
  codigoDestino: string | null,
  origen: LatLngLiteral,
  destino: LatLngLiteral,
): LatLngLiteral[] {
  if (codigoOrigen && codigoDestino) {
    const clave = `${codigoOrigen}->${codigoDestino}`;
    const waypoints = RUTAS_VIALES_POR_PAR[clave];
    if (waypoints && waypoints.length >= 2) {
      return waypoints.map((pt) => ({ ...pt }));
    }
  }
  return interpolarSegmento(origen, destino, 16);
}

function distanciaCuadradaPuntoASegmento(
  p: LatLngLiteral,
  a: LatLngLiteral,
  b: LatLngLiteral,
): number {
  const dLat = b.lat - a.lat;
  const dLng = b.lng - a.lng;
  const lenSq = dLat * dLat + dLng * dLng;
  if (lenSq === 0) {
    const pLat = p.lat - a.lat;
    const pLng = p.lng - a.lng;
    return pLat * pLat + pLng * pLng;
  }
  const t = Math.max(
    0,
    Math.min(1, ((p.lat - a.lat) * dLat + (p.lng - a.lng) * dLng) / lenSq),
  );
  const projLat = a.lat + t * dLat;
  const projLng = a.lng + t * dLng;
  const pLat = p.lat - projLat;
  const pLng = p.lng - projLng;
  return pLat * pLat + pLng * pLng;
}

/**
 * Divide una polilínea vial en tramo recorrido y tramo restante exactamente
 * en el segmento más cercano a `posicionActual`, evitando saltos o retrocesos.
 */
export function dividirRutaEnPosicion(
  path: LatLngLiteral[],
  origen: LatLngLiteral,
  posicionActual: LatLngLiteral,
  destino: LatLngLiteral,
): { tramoRecorrido: LatLngLiteral[]; tramoRestante: LatLngLiteral[] } {
  if (path.length < 2) {
    return {
      tramoRecorrido: [origen, posicionActual],
      tramoRestante: [posicionActual, destino],
    };
  }

  let mejorSegmentoIdx = 0;
  let mejorDist = Number.POSITIVE_INFINITY;
  for (let i = 0; i < path.length - 1; i++) {
    const dist = distanciaCuadradaPuntoASegmento(
      posicionActual,
      path[i]!,
      path[i + 1]!,
    );
    if (dist < mejorDist) {
      mejorDist = dist;
      mejorSegmentoIdx = i;
    }
  }

  const recorrido = path.slice(0, mejorSegmentoIdx + 1);
  if (!sonPuntosIguales(recorrido[recorrido.length - 1]!, posicionActual)) {
    recorrido.push(posicionActual);
  }

  const restante = [posicionActual, ...path.slice(mejorSegmentoIdx + 1)];
  if (!sonPuntosIguales(restante[restante.length - 1]!, destino)) {
    restante.push(destino);
  }

  return {
    tramoRecorrido: recorrido,
    tramoRestante: restante,
  };
}

/**
 * Calcula de forma síncrona la ruta vial (`CM Origen → Posición actual → CM Destino`)
 * usando los corredores viales argentinos reales entre CMs (RN9, RN8/RN7, RN9/RN60)
 * o interpolación geodésica como respaldo para pares desconocidos.
 */
export function calcularRutaGeodesicaEnvio(
  bolsin: BolsinSeguimiento,
  cmOrigenFallback?: CmOrigenSeguimiento | null,
): RutaEnvioResuelta {
  const codigoOrigenRaw =
    bolsin.cmOrigen?.codigo ?? cmOrigenFallback?.codigo ?? "CM-01";
  const codigoDestinoRaw = bolsin.cmDestino.codigo;

  const origen = obtenerCoordenadaCm(
    codigoOrigenRaw,
    COORDENADAS_CM_ARGENTINA["CM-01"],
  );
  const destino = obtenerCoordenadaCm(codigoDestinoRaw, origen);

  const posicionActual: LatLngLiteral = bolsin.ubicacion
    ? { lat: bolsin.ubicacion.latitud, lng: bolsin.ubicacion.longitud }
    : origen;

  const trazadoBase = obtenerTrazadoVialFallback(
    normalizarCodigoCm(codigoOrigenRaw),
    normalizarCodigoCm(codigoDestinoRaw),
    origen,
    destino,
  );

  const { tramoRecorrido, tramoRestante } = dividirRutaEnPosicion(
    trazadoBase,
    origen,
    posicionActual,
    destino,
  );

  const rutaCompleta = [...tramoRecorrido, ...tramoRestante.slice(1)];

  return {
    nroBolsin: bolsin.nroBolsin,
    origen,
    posicionActual,
    destino,
    tramoRecorrido,
    tramoRestante,
    rutaCompleta,
    fuente: "geodesica",
  };
}

function claveParOrigenDestino(
  origen: LatLngLiteral,
  destino: LatLngLiteral,
): string {
  return `${origen.lat.toFixed(4)},${origen.lng.toFixed(4)}->${destino.lat.toFixed(4)},${destino.lng.toFixed(4)}`;
}

export async function consultarOsrmRuta(
  origen: LatLngLiteral,
  destino: LatLngLiteral,
): Promise<LatLngLiteral[] | null> {
  if (sonPuntosIguales(origen, destino) || typeof fetch !== "function") {
    return null;
  }

  const cacheKey = claveParOrigenDestino(origen, destino);
  const enCache = osrmCache.get(cacheKey);
  if (enCache) return enCache;

  const enVuelo = osrmInFlight.get(cacheKey);
  if (enVuelo) return enVuelo;

  const promesa = (async (): Promise<LatLngLiteral[] | null> => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), OSRM_TIMEOUT_MS);

    try {
      const url = `${OSRM_BASE_URL}/${origen.lng},${origen.lat};${destino.lng},${destino.lat}?overview=simplified&geometries=geojson`;
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) return null;

      const data = (await response.json()) as {
        code?: string;
        routes?: Array<{
          geometry?: {
            coordinates?: Array<[number, number]>;
          };
        }>;
      };

      const coords = data.routes?.[0]?.geometry?.coordinates;
      if (data.code !== "Ok" || !Array.isArray(coords) || coords.length < 2) {
        return null;
      }

      if (
        coords.some(
          (coord) =>
            !Array.isArray(coord) ||
            !Number.isFinite(coord[0]) ||
            Math.abs(coord[0]) > 180 ||
            !Number.isFinite(coord[1]) ||
            Math.abs(coord[1]) > 90,
        )
      )
        return null;
      const path: LatLngLiteral[] = coords.map(([lng, lat]) => ({ lat, lng }));
      osrmCache.set(cacheKey, path);
      return path;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
      osrmInFlight.delete(cacheKey);
    }
  })();

  osrmInFlight.set(cacheKey, promesa);
  return promesa;
}

/** Limpia la caché en memoria de OSRM (útil en tests). */
export function limpiarCacheOsrm(): void {
  osrmCache.clear();
  osrmInFlight.clear();
}

/**
 * Resuelve la ruta vial del envío:
 * 1. Si `DirectionsService` está disponible (Google Maps con API key), lo consulta.
 * 2. En modo keyless (sin `DirectionsService`), consulta OSRM público con timeout de 2.5s
 *    y caché en memoria por par `origen->destino`.
 * 3. Si ambos fallan o tardan, retorna el trazado vial síncrono de waypoints argentinos.
 */
export async function resolverRutaEnvio(
  bolsin: BolsinSeguimiento,
  cmOrigenFallback?: CmOrigenSeguimiento | null,
  directionsService?: google.maps.DirectionsService | null,
): Promise<RutaEnvioResuelta> {
  const respaldoVial = calcularRutaGeodesicaEnvio(bolsin, cmOrigenFallback);

  if (directionsService && typeof google !== "undefined" && google.maps) {
    try {
      const result = await directionsService.route({
        origin: respaldoVial.origen,
        destination: respaldoVial.destino,
        waypoints: [
          {
            location: respaldoVial.posicionActual,
            stopover: false,
          },
        ],
        travelMode: google.maps.TravelMode.DRIVING,
      });

      const route = result.routes[0];
      if (route?.overview_path && route.overview_path.length >= 2) {
        const path = route.overview_path.map((pt) => ({
          lat: pt.lat(),
          lng: pt.lng(),
        }));

        const { tramoRecorrido, tramoRestante } = dividirRutaEnPosicion(
          path,
          respaldoVial.origen,
          respaldoVial.posicionActual,
          respaldoVial.destino,
        );

        return {
          ...respaldoVial,
          tramoRecorrido,
          tramoRestante,
          rutaCompleta: [...tramoRecorrido, ...tramoRestante.slice(1)],
          fuente: "directions",
        };
      }
    } catch {
      // Continúa hacia OSRM / respaldo vial
    }
  }

  const osrmPath = await consultarOsrmRuta(
    respaldoVial.origen,
    respaldoVial.destino,
  );

  if (osrmPath && osrmPath.length >= 2) {
    const { tramoRecorrido, tramoRestante } = dividirRutaEnPosicion(
      osrmPath,
      respaldoVial.origen,
      respaldoVial.posicionActual,
      respaldoVial.destino,
    );

    return {
      ...respaldoVial,
      tramoRecorrido,
      tramoRestante,
      rutaCompleta: [...tramoRecorrido, ...tramoRestante.slice(1)],
      fuente: "osrm",
    };
  }

  return respaldoVial;
}
