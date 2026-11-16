import { afterEach, describe, expect, it, vi } from "vitest";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import {
  COORDENADAS_CM_ARGENTINA,
  calcularRumboGrados,
  calcularRutaGeodesicaEnvio,
  dividirRutaEnPosicion,
  limpiarCacheOsrm,
  obtenerCoordenadaCm,
  resolverRutaEnvio,
} from "@/lib/seguimiento/rutas-envio";

const CM_ORIGEN = {
  codigo: "CM-01",
  nombre: "CM-01 Córdoba",
  direccion: "Av. Vélez Sarsfield 2311, Córdoba",
};

const BOLSIN_EN_VIVO: BolsinSeguimiento = {
  nroBolsin: 104,
  numeroPrecinto: "P-9021",
  cmOrigen: CM_ORIGEN,
  cmDestino: {
    codigo: "CM-02",
    nombre: "CM-02 Rosario",
    emailGcm: "gcm.rosario@art-bolsines.gob.ar",
  },
  ubicacion: {
    latitud: -32.2,
    longitud: -62.4,
    fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
    estadoCobertura: "vivo",
  },
  remitos: [],
};

afterEach(() => {
  limpiarCacheOsrm();
  vi.unstubAllGlobals();
});

describe("rutas-envio", () => {
  it("resuelve coordenadas de CM argentinas conocidas e insensibles a mayúsculas", () => {
    expect(obtenerCoordenadaCm("cm-01")).toEqual(
      COORDENADAS_CM_ARGENTINA["CM-01"],
    );
    expect(obtenerCoordenadaCm(" CM-04 ")).toEqual(
      COORDENADAS_CM_ARGENTINA["CM-04"],
    );

    const respaldo = { lat: -30, lng: -60 };
    expect(obtenerCoordenadaCm("CM-99", respaldo)).toEqual(respaldo);
  });

  it("calcula trazados viales reales con múltiples waypoints entre CMs argentinas", () => {
    const destinos = ["CM-02", "CM-03", "CM-04", "CM-05"] as const;

    for (const codigoDestino of destinos) {
      const ruta = calcularRutaGeodesicaEnvio({
        ...BOLSIN_EN_VIVO,
        cmDestino: {
          ...BOLSIN_EN_VIVO.cmDestino,
          codigo: codigoDestino,
        },
      });

      expect(ruta.fuente).toBe("geodesica");
      expect(ruta.origen).toEqual(COORDENADAS_CM_ARGENTINA["CM-01"]);
      expect(ruta.destino).toEqual(COORDENADAS_CM_ARGENTINA[codigoDestino]);
      expect(ruta.rutaCompleta.length).toBeGreaterThan(10);
      expect(ruta.tramoRecorrido[0]).toEqual(ruta.origen);
      expect(ruta.tramoRecorrido.at(-1)).toEqual(ruta.posicionActual);
      expect(ruta.tramoRestante[0]).toEqual(ruta.posicionActual);
      expect(ruta.tramoRestante.at(-1)).toEqual(ruta.destino);
      expect(ruta.rutaCompleta.length).toBe(
        ruta.tramoRecorrido.length + ruta.tramoRestante.length - 1,
      );
    }
  });

  it("usa CM origen como posición de respaldo si el bolsín A3 no tiene ubicación", () => {
    const sinUbicacion: BolsinSeguimiento = {
      ...BOLSIN_EN_VIVO,
      nroBolsin: 199,
      ubicacion: null,
    };

    const ruta = calcularRutaGeodesicaEnvio(sinUbicacion, CM_ORIGEN);
    expect(ruta.posicionActual).toEqual(COORDENADAS_CM_ARGENTINA["CM-01"]);
    expect(ruta.tramoRestante.at(-1)).toEqual(COORDENADAS_CM_ARGENTINA["CM-02"]);
  });

  it("divide una polilínea en tramo recorrido y restante sobre el segmento más cercano sin retrocesos", () => {
    const path = [
      { lat: -31.42, lng: -64.18 },
      { lat: -32.0, lng: -63.0 },
      { lat: -32.5, lng: -61.8 },
      { lat: -32.94, lng: -60.63 },
    ];
    // Posición entre el segundo y tercer punto, más cerca del tercero
    const posicion = { lat: -32.35, lng: -62.1 };
    const { tramoRecorrido, tramoRestante } = dividirRutaEnPosicion(
      path,
      path[0]!,
      posicion,
      path[3]!,
    );

    expect(tramoRecorrido).toEqual([path[0], path[1], posicion]);
    expect(tramoRestante).toEqual([posicion, path[2], path[3]]);
  });

  it("consulta OSRM público en modo keyless y cachea la geometría por par origen->destino", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        code: "Ok",
        routes: [
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [-64.1888, -31.4201],
                [-63.2402, -32.4075],
                [-61.3949, -32.8164],
                [-60.6393, -32.9468],
              ],
            },
          },
        ],
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const primera = await resolverRutaEnvio(BOLSIN_EN_VIVO, CM_ORIGEN, null);
    expect(primera.fuente).toBe("osrm");
    expect(primera.tramoRecorrido.at(-1)).toEqual({ lat: -32.2, lng: -62.4 });
    expect(primera.tramoRestante[0]).toEqual({ lat: -32.2, lng: -62.4 });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    // Segundo bolsín en el mismo par CM-01 -> CM-02 reutiliza caché OSRM sin re-fetchear
    const segunda = await resolverRutaEnvio(
      {
        ...BOLSIN_EN_VIVO,
        nroBolsin: 105,
        ubicacion: {
          latitud: -32.6,
          longitud: -61.9,
          fechaHoraActualizacion: "2026-11-15T14:25:00.000Z",
          estadoCobertura: "vivo",
        },
      },
      CM_ORIGEN,
      null,
    );
    expect(segunda.fuente).toBe("osrm");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("hace fallback vial síncrono si DirectionsService y OSRM fallan", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("OSRM_DOWN")));

    const sinDirections = await resolverRutaEnvio(BOLSIN_EN_VIVO, CM_ORIGEN, null);
    expect(sinDirections.fuente).toBe("geodesica");
    expect(sinDirections.rutaCompleta.length).toBeGreaterThan(10);

    vi.stubGlobal("google", {
      maps: {
        TravelMode: { DRIVING: "DRIVING" },
      },
    });

    const failingService = {
      route: vi.fn().mockRejectedValue(new Error("REQUEST_DENIED")),
    } as unknown as google.maps.DirectionsService;

    const conError = await resolverRutaEnvio(
      BOLSIN_EN_VIVO,
      CM_ORIGEN,
      failingService,
    );
    expect(conError.fuente).toBe("geodesica");
    expect(conError.rutaCompleta.length).toBeGreaterThan(10);
  });

  it("usa DirectionsService cuando devuelve overview_path válido", async () => {
    vi.stubGlobal("google", {
      maps: {
        TravelMode: { DRIVING: "DRIVING" },
      },
    });

    const mockPath = [
      { lat: () => -31.4201, lng: () => -64.1888 },
      { lat: () => -32.2, lng: () => -62.4 },
      { lat: () => -32.9468, lng: () => -60.6393 },
    ];

    const okService = {
      route: vi.fn().mockResolvedValue({
        routes: [{ overview_path: mockPath }],
      }),
    } as unknown as google.maps.DirectionsService;

    const resuelta = await resolverRutaEnvio(BOLSIN_EN_VIVO, CM_ORIGEN, okService);
    expect(resuelta.fuente).toBe("directions");
    expect(resuelta.tramoRecorrido.at(-1)).toEqual({ lat: -32.2, lng: -62.4 });
    expect(resuelta.tramoRestante[0]).toEqual({ lat: -32.2, lng: -62.4 });
  });

  it("calcula el rumbo en grados hacia el destino", () => {
    const norte = calcularRumboGrados(
      { lat: -32, lng: -64 },
      { lat: -31, lng: -64 },
    );
    expect(norte).toBeCloseTo(0, 0);

    const este = calcularRumboGrados(
      { lat: -32, lng: -64 },
      { lat: -32, lng: -63 },
    );
    expect(este).toBeCloseTo(90, 0);
  });
});
