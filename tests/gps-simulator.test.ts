import { readFile } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GET as geoPulse } from "@/app/api/gps-simulator/mtr-900/fetchCargoPositions/route";
import { GET as navTrack } from "@/app/api/gps-simulator/qx-7a/retrieveTrackingData/route";
import { GET as xtr } from "@/app/api/gps-simulator/xtr-4500l/getBolsinLocation/route";
import { localizarBolsin } from "@/lib/gps-simulator/localizador";
import { obtenerRutas } from "@/lib/gps-simulator/rutas";

const modelos = [
  ["xtr-4500l/getBolsinLocation", xtr, { codCMOrigen: "CM-CBA" }],
  ["qx-7a/retrieveTrackingData", navTrack, { codCMDestino: "CM-SF" }],
  ["mtr-900/fetchCargoPositions", geoPulse, {}],
] as const;

function solicitud(ruta: string, parametros: Record<string, string>) {
  const query = new URLSearchParams(parametros);
  return new Request(`http://localhost/api/gps-simulator/${ruta}?${query}`);
}

const parametrosBase = { apiKey: "simulador-local", nroBolsin: "42" };
const ahora = new Date("2026-11-15T18:30:00.000Z").getTime();
const unaHoraEnMilisegundos = 3_600_000;

function verificarCampos(campos: string[]) {
  expect(campos).toHaveLength(4);
  const [numero, latitud, longitud, fecha] = campos;
  expect(numero).toBe("42");
  expect(Number(latitud)).toBeGreaterThanOrEqual(-90);
  expect(Number(latitud)).toBeLessThanOrEqual(90);
  expect(Number(longitud)).toBeGreaterThanOrEqual(-180);
  expect(Number(longitud)).toBeLessThanOrEqual(180);
  expect(new Date(fecha).toISOString()).toBe(fecha);
  expect(Date.parse(fecha)).toBe(ahora - 1_800_000);
}

describe("Simulador GPS", () => {
  beforeEach(() => {
    vi.stubEnv("GPS_SIMULADOR_API_KEY", "simulador-local");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("entrega JSON, CSV y matriz con el número solicitado y fecha UTC, sin usar fetch", async () => {
    vi.spyOn(Date, "now").mockReturnValue(ahora);
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    const fetch = vi.fn(() =>
      Promise.reject(new Error("HTTP externo no permitido")),
    );
    vi.stubGlobal("fetch", fetch);
    const [xtrResponse, qxResponse, mtrResponse] = await Promise.all(
      modelos.map(([ruta, consultar, extra]) =>
        consultar(solicitud(ruta, { ...parametrosBase, ...extra })),
      ),
    );

    for (const respuesta of [xtrResponse, qxResponse, mtrResponse]) {
      expect(respuesta.status).toBe(200);
      expect(respuesta.headers.get("cache-control")).toBe("no-store");
    }

    expect(xtrResponse.headers.get("content-type")).toContain(
      "application/json",
    );
    const json = await xtrResponse.json();
    expect(json).toEqual({
      numeroBolsin: 42,
      latitud: expect.any(Number),
      longitud: expect.any(Number),
      fechaHoraActualizacion: expect.any(String),
    });
    verificarCampos([
      String(json.numeroBolsin),
      String(json.latitud),
      String(json.longitud),
      json.fechaHoraActualizacion,
    ]);

    expect(qxResponse.headers.get("content-type")).toContain("text/csv");
    verificarCampos((await qxResponse.text()).split(","));

    expect(mtrResponse.headers.get("content-type")).toContain(
      "application/json",
    );
    const matriz = await mtrResponse.json();
    expect(matriz).toHaveLength(1);
    expect(matriz[0]).toEqual(Array(4).fill(expect.any(String)));
    verificarCampos(matriz[0]);
    expect(fetch).not.toHaveBeenCalled();
  });

  it.each(modelos)(
    "%s valida la clave, el número y el fallo simulado",
    async (ruta, consultar, extra) => {
      vi.stubEnv("NODE_ENV", "development");
      expect(
        (
          await consultar(
            solicitud(ruta, { ...parametrosBase, ...extra, apiKey: "otra" }),
          )
        ).status,
      ).toBe(401);
      expect((await consultar(solicitud(ruta, extra))).status).toBe(400);
      expect(
        (
          await consultar(
            solicitud(ruta, { ...parametrosBase, ...extra, nroBolsin: "1.5" }),
          )
        ).status,
      ).toBe(400);
      const fallo = await consultar(
        solicitud(ruta, { ...parametrosBase, ...extra, simularFallo: "1" }),
      );
      expect(fallo.status).toBe(503);
      expect(await fallo.json()).toEqual({
        error: "Simulador GPS no disponible.",
      });
    },
  );

  it("requiere el código de comisión correcto para XTR y QX", async () => {
    expect(
      (
        await xtr(
          solicitud(modelos[0][0], {
            ...parametrosBase,
            codCMDestino: "CM-SF",
          }),
        )
      ).status,
    ).toBe(400);
    expect(
      (
        await navTrack(
          solicitud(modelos[1][0], {
            ...parametrosBase,
            codCMOrigen: "CM-CBA",
          }),
        )
      ).status,
    ).toBe(400);
  });

  it("ignora la simulación de fallos en producción", async () => {
    vi.stubEnv("NODE_ENV", "production");
    const respuesta = await geoPulse(
      solicitud(modelos[2][0], { ...parametrosBase, simularFallo: "1" }),
    );
    expect(respuesta.status).toBe(200);
  });

  it("devuelve 503 cuando falta configurar la clave", async () => {
    vi.stubEnv("GPS_SIMULADOR_API_KEY", undefined);
    expect(
      (await geoPulse(solicitud(modelos[2][0], parametrosBase))).status,
    ).toBe(503);
  });

  it("genera distintos retrasos con ambos límites incluidos y sin fechas futuras", async () => {
    const reloj = vi.spyOn(Date, "now").mockReturnValue(ahora);
    const azar = vi.spyOn(Math, "random");
    const casos = [
      [0, 0],
      [0.25, 900_000],
      [0.75, 2_700_000],
      [1 - Number.EPSILON, unaHoraEnMilisegundos],
    ];

    for (const [aleatorio, retraso] of casos) {
      azar.mockReturnValue(aleatorio);
      const { fechaHoraActualizacion } = await localizarBolsin(42);
      expect(fechaHoraActualizacion).toBe(
        new Date(ahora - retraso).toISOString(),
      );
      expect(Date.parse(fechaHoraActualizacion)).toBeGreaterThanOrEqual(
        ahora - unaHoraEnMilisegundos,
      );
      expect(Date.parse(fechaHoraActualizacion)).toBeLessThanOrEqual(ahora);
    }

    expect(reloj).toHaveBeenCalledTimes(casos.length);
  });

  it("carga los tramos oficiales de las tres rutas preservando sus cortes", async () => {
    const contenido = await readFile(
      "src/lib/gps-simulator/rutas-nacionales.geojson",
      "utf8",
    );
    const datos = JSON.parse(contenido) as {
      type: string;
      features: {
        properties: { ruta: string };
        geometry: { type: string; coordinates: [number, number][][] };
      }[];
    };
    expect(datos.type).toBe("FeatureCollection");
    expect(datos.features.map(({ properties }) => properties.ruta)).toEqual([
      "RN7",
      "RN9",
      "RN40",
    ]);

    const rutas = await obtenerRutas();
    const segmentosPorRuta = [9_591, 17_389, 44_324];
    for (const [i, { geometry }] of datos.features.entries()) {
      expect(geometry.type).toBe("MultiLineString");
      const tramos = geometry.coordinates;
      const coordenadasValidas = tramos.every(
        (tramo) =>
          tramo.length >= 2 &&
          tramo.every(
            ([longitud, latitud]) =>
              longitud >= -74 &&
              longitud <= -52 &&
              latitud >= -56 &&
              latitud <= -21,
          ),
      );
      expect(coordenadasValidas).toBe(true);
      const segmentos = tramos.flatMap((tramo) =>
        tramo.slice(1).map((fin, j) => [tramo[j], fin]),
      );
      expect(segmentos).toHaveLength(segmentosPorRuta[i]);
      expect(rutas[i]).toEqual(segmentos);
    }
  });

  it.each([0, 1, 2])(
    "integra los tramos del GeoJSON y mantiene la ruta del bolsín %i",
    async (numero) => {
      const rutas = await obtenerRutas();
      const segmentos = rutas[numero];
      vi.spyOn(Math, "random")
        .mockReturnValue(0.5)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(1 - Number.EPSILON)
        .mockReturnValueOnce(0.75);

      const primera = await localizarBolsin(numero);
      const segunda = await localizarBolsin(numero);
      for (const [ubicacion, segmento] of [
        [primera, segmentos[0]],
        [segunda, segmentos.at(-1)!],
      ] as const) {
        const [[ax, ay], [bx, by]] = segmento;
        const { longitud: x, latitud: y } = ubicacion;
        expect(x).toBeGreaterThanOrEqual(Math.min(ax, bx));
        expect(x).toBeLessThanOrEqual(Math.max(ax, bx));
        expect(y).toBeGreaterThanOrEqual(Math.min(ay, by));
        expect(y).toBeLessThanOrEqual(Math.max(ay, by));
        expect((x - ax) * (by - ay) - (y - ay) * (bx - ax)).toBeCloseTo(0, 10);
      }
      expect([primera.longitud, primera.latitud]).not.toEqual([
        segunda.longitud,
        segunda.latitud,
      ]);
    },
  );
});
