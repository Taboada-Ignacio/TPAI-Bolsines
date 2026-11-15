import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { AdaptadorMTR900 } from "@/adapters/AdaptadorMTR900";
import { AdaptadorQX7A } from "@/adapters/AdaptadorQX7A";
import { AdaptadorXTR4500L } from "@/adapters/AdaptadorXTR4500L";
import type { IAdaptadorLocalizacionBolsines } from "@/adapters/IAdaptadorLocalizacionBolsines";
import { InterfazGPSTracker } from "@/adapters/InterfazGPSTracker";
import { ServicioGPSTrackerMTR900 } from "@/infrastructure/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/infrastructure/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/infrastructure/ServicioGPSTrackerXTR4500L";
import { TransporteHTTPGPS } from "@/infrastructure/TransporteHTTPGPS";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";

const clave = "clave de prueba +&";
const fecha = "2026-11-15T18:30:00.125Z";
const fila = ["42", "-31.42", "-64.18", fecha];
const fila43 = ["43", "-31.42", "-64.18", fecha];
const solicitudes: Parameters<
  InterfazGPSTracker["obtenerLocalizacionDeBolsines"]
>[] = [
  ["XTR-4500L", [42], ["ORIG-1"], []],
  ["QX-7A", [42], [], ["DEST-1"]],
  ["MTR-900", [42], [], []],
];

function jsonXtr(nroBolsin: number) {
  return {
    numeroBolsin: nroBolsin,
    latitud: -31.42,
    longitud: -64.18,
    fechaHoraActualizacion: fecha,
  };
}

function crearServicios(transporte?: TransporteHTTPGPS) {
  return {
    xtr: new ServicioGPSTrackerXTR4500L(transporte),
    qx: new ServicioGPSTrackerQX7A(transporte),
    mtr: new ServicioGPSTrackerMTR900(transporte),
  };
}

describe("Adaptadores GPS", () => {
  it("tipa cada asociación con la clase de servicio del mismo proveedor", () => {
    expectTypeOf<
      Pick<AdaptadorXTR4500L, keyof IAdaptadorLocalizacionBolsines>
    >().toEqualTypeOf<IAdaptadorLocalizacionBolsines>();
    expectTypeOf<
      Pick<AdaptadorQX7A, keyof IAdaptadorLocalizacionBolsines>
    >().toEqualTypeOf<IAdaptadorLocalizacionBolsines>();
    expectTypeOf<
      Pick<AdaptadorMTR900, keyof IAdaptadorLocalizacionBolsines>
    >().toEqualTypeOf<IAdaptadorLocalizacionBolsines>();
    expectTypeOf<InterfazGPSTracker["crearAdaptador"]>().toEqualTypeOf<
      () => void
    >();
    for (const Adaptador of [
      AdaptadorXTR4500L,
      AdaptadorQX7A,
      AdaptadorMTR900,
    ]) {
      expect(Object.getPrototypeOf(Adaptador.prototype)).toBe(Object.prototype);
      for (const operacion of [
        "recibirLocalizacionBolsines",
        "solicitarLocalizacionBolsines",
        "adaptarLocalizacionBolsines",
      ]) {
        expect(Object.hasOwn(Adaptador.prototype, operacion)).toBe(true);
      }
    }
    expectTypeOf<
      ConstructorParameters<typeof AdaptadorXTR4500L>[3]
    >().toEqualTypeOf<ServicioGPSTrackerXTR4500L>();
    expectTypeOf<
      ConstructorParameters<typeof AdaptadorQX7A>[3]
    >().toEqualTypeOf<ServicioGPSTrackerQX7A>();
    expectTypeOf<
      ConstructorParameters<typeof AdaptadorMTR900>[2]
    >().toEqualTypeOf<ServicioGPSTrackerMTR900>();
    expectTypeOf<
      ServicioGPSTrackerXTR4500L["getBolsinLocation"]
    >().toEqualTypeOf<
      (key: string, nro: number, origen: string) => Promise<string>
    >();
    expectTypeOf<
      ServicioGPSTrackerQX7A["retrieveTrackingData"]
    >().toEqualTypeOf<
      (key: string, nro: number, destino: string) => Promise<string>
    >();
    expectTypeOf<
      ServicioGPSTrackerMTR900["fetchCargoPositions"]
    >().toEqualTypeOf<(key: string, nro: number) => Promise<string[][]>>();
    expect(new InterfazGPSTracker()).toBeInstanceOf(InterfazGPSTracker);
  });

  it("usa la interfaz común para los tres adaptadores y conserva el orden del lote", async () => {
    const servicios = crearServicios();
    const getBolsinLocation = vi
      .spyOn(servicios.xtr, "getBolsinLocation")
      .mockImplementation(async (_key, nro) => JSON.stringify(jsonXtr(nro)));
    const retrieveTrackingData = vi
      .spyOn(servicios.qx, "retrieveTrackingData")
      .mockImplementation(async (_key, nro) =>
        [nro, ...fila.slice(1)].join(","),
      );
    const fetchCargoPositions = vi
      .spyOn(servicios.mtr, "fetchCargoPositions")
      .mockImplementation(async (_key, nro) => [
        [String(nro), ...fila.slice(1)],
      ]);
    const frontera = new InterfazGPSTracker(servicios, clave);

    const adaptadores: IAdaptadorLocalizacionBolsines[] = [
      new AdaptadorXTR4500L(
        clave,
        [42, 43],
        ["ORIG-1", "ORIG-2"],
        servicios.xtr,
      ),
      new AdaptadorQX7A(clave, [42, 43], ["DEST-1", "DEST-2"], servicios.qx),
      new AdaptadorMTR900(clave, [42, 43], servicios.mtr),
    ];

    for (const adaptador of adaptadores) {
      const resultado: Promise<string[][]> =
        adaptador.recibirLocalizacionBolsines();
      await expect(resultado).resolves.toEqual([fila, fila43]);
    }
    expect(getBolsinLocation.mock.calls).toEqual([
      [clave, 42, "ORIG-1"],
      [clave, 43, "ORIG-2"],
    ]);
    expect(retrieveTrackingData.mock.calls).toEqual([
      [clave, 42, "DEST-1"],
      [clave, 43, "DEST-2"],
    ]);
    expect(fetchCargoPositions.mock.calls).toEqual([
      [clave, 42],
      [clave, 43],
    ]);
    for (const solicitud of solicitudes) {
      await expect(
        frontera.obtenerLocalizacionDeBolsines(...solicitud),
      ).resolves.toEqual([fila]);
    }
  });

  it.each([
    { formato: "XTR sin JSON", indice: 0, cuerpo: "incompleto{" },
    {
      formato: "XTR con coordenada inválida",
      indice: 0,
      cuerpo: JSON.stringify({ ...jsonXtr(42), latitud: 91 }),
    },
    {
      formato: "XTR con tipos incorrectos",
      indice: 0,
      cuerpo: JSON.stringify({ ...jsonXtr(42), latitud: "-31.42" }),
    },
    { formato: "QX con tres campos", indice: 1, cuerpo: "42,-31.42,-64.18" },
    {
      formato: "QX con cinco campos",
      indice: 1,
      cuerpo: `${fila.join(",")},extra`,
    },
    {
      formato: "QX con coordenada hexadecimal",
      indice: 1,
      cuerpo: `42,0x20,-64.18,${fecha}`,
    },
    {
      formato: "QX con fecha inexistente",
      indice: 1,
      cuerpo: "42,-31.42,-64.18,2026-02-30T18:30:00Z",
    },
    {
      formato: "QX con fecha sin UTC",
      indice: 1,
      cuerpo: "42,-31.42,-64.18,2026-11-15T15:30:00-03:00",
    },
    { formato: "MTR sin JSON", indice: 2, cuerpo: "[" },
    {
      formato: "MTR con valores numéricos",
      indice: 2,
      cuerpo: JSON.stringify([[42, -31.42, -64.18, fecha]]),
    },
    { formato: "MTR sin filas", indice: 2, cuerpo: "[]" },
    {
      formato: "MTR con más de una fila",
      indice: 2,
      cuerpo: JSON.stringify([fila, fila]),
    },
    {
      formato: "MTR con número de bolsín incorrecto",
      indice: 2,
      cuerpo: JSON.stringify([fila43]),
    },
  ])("rechaza $formato", async ({ indice, cuerpo }) => {
    const transporte = new TransporteHTTPGPS(
      "http://localhost",
      async () => new Response(cuerpo),
    );
    const frontera = new InterfazGPSTracker(crearServicios(transporte), clave);
    const resultado = frontera.obtenerLocalizacionDeBolsines(
      ...solicitudes[indice],
    );
    await expect(resultado).rejects.toBeInstanceOf(ErrorGPSTracker);
    await expect(resultado).rejects.toMatchObject({
      tipo: "RESPUESTA_INVALIDA",
    });
  });

  it("propaga el error del lote y permite volver a consultar sin posiciones anteriores", async () => {
    const servicio = new ServicioGPSTrackerXTR4500L();
    const getBolsinLocation = vi
      .spyOn(servicio, "getBolsinLocation")
      .mockResolvedValueOnce(JSON.stringify(jsonXtr(42)))
      .mockRejectedValueOnce(new ErrorGPSTracker("HTTP", 503))
      .mockResolvedValueOnce(JSON.stringify(jsonXtr(42)))
      .mockResolvedValueOnce(JSON.stringify(jsonXtr(43)));
    const adaptador = new AdaptadorXTR4500L(
      clave,
      [42, 43],
      ["ORIG-1", "ORIG-2"],
      servicio,
    );
    await expect(adaptador.recibirLocalizacionBolsines()).rejects.toMatchObject(
      { tipo: "HTTP", estadoHttp: 503 },
    );
    await expect(adaptador.recibirLocalizacionBolsines()).resolves.toEqual([
      fila,
      fila43,
    ]);
    expect(getBolsinLocation).toHaveBeenCalledTimes(4);
  });

  it("devuelve un lote vacío sin hacer consultas", async () => {
    const servicio = new ServicioGPSTrackerMTR900();
    const fetchCargoPositions = vi.spyOn(servicio, "fetchCargoPositions");
    const adaptador = new AdaptadorMTR900(clave, [], servicio);
    await expect(adaptador.recibirLocalizacionBolsines()).resolves.toEqual([]);
    expect(fetchCargoPositions).not.toHaveBeenCalled();
  });

  it("comparte la solicitud simultánea del mismo adaptador y devuelve matrices independientes", async () => {
    const servicio = new ServicioGPSTrackerXTR4500L();
    const consulta = vi
      .spyOn(servicio, "getBolsinLocation")
      .mockResolvedValue(JSON.stringify(jsonXtr(42)));
    const adaptador = new AdaptadorXTR4500L(clave, [42], ["ORIG-1"], servicio);
    const [primera, segunda] = await Promise.all([
      adaptador.recibirLocalizacionBolsines(),
      adaptador.recibirLocalizacionBolsines(),
    ]);
    primera[0][0] = "modificado";
    expect(segunda).toEqual([fila]);
    expect(consulta).toHaveBeenCalledTimes(1);
  });
});

describe("Frontera GPS", () => {
  it("crea el adaptador, delega la consulta XTR y devuelve un lote vacío sin HTTP", async () => {
    const servicios = crearServicios();
    const xtr = vi
      .spyOn(servicios.xtr, "getBolsinLocation")
      .mockResolvedValue(JSON.stringify(jsonXtr(42)));
    const qx = vi.spyOn(servicios.qx, "retrieveTrackingData");
    const mtr = vi.spyOn(servicios.mtr, "fetchCargoPositions");
    const frontera = new InterfazGPSTracker(servicios, clave);
    const crear = vi.spyOn(frontera, "crearAdaptador");
    await expect(
      frontera.obtenerLocalizacionDeBolsines("XTR-4500L", [42], ["ORIG-1"], []),
    ).resolves.toEqual([fila]);
    expect(crear).toHaveBeenCalledWith();
    expect(crear).toHaveReturnedWith(undefined);
    await expect(
      frontera.obtenerLocalizacionDeBolsines("XTR-4500L", [], [], []),
    ).resolves.toEqual([]);
    expect(xtr.mock.calls).toEqual([[clave, 42, "ORIG-1"]]);
    expect(qx).not.toHaveBeenCalled();
    expect(mtr).not.toHaveBeenCalled();
  });

  it.each([
    ["XTR-4500L", [42, 43], ["ORIG-1"], []],
    ["XTR-4500L", [42], ["ORIG-1"], ["DEST-1"]],
    ["QX-7A", [42], [], []],
    ["QX-7A", [42], [], [" "]],
    ["MTR-900", [42], ["ORIG-1"], []],
  ] satisfies Parameters<
    InterfazGPSTracker["obtenerLocalizacionDeBolsines"]
  >[])(
    "rechaza datos de CM incompatibles para %s antes de crear el adaptador",
    async (modelo, numeros, origenes, destinos) => {
      const frontera = new InterfazGPSTracker();
      const crear = vi.spyOn(frontera, "crearAdaptador");
      await expect(
        frontera.obtenerLocalizacionDeBolsines(
          modelo,
          numeros,
          origenes,
          destinos,
        ),
      ).rejects.toMatchObject({ tipo: "CONFIGURACION" });
      expect(crear).not.toHaveBeenCalled();
    },
  );
});

describe("Cliente HTTP GPS", () => {
  afterEach(() => vi.restoreAllMocks());

  it("forma las URLs y envía únicamente los parámetros del contrato de cada proveedor", async () => {
    const fetchHttp = vi.fn<typeof fetch>(async (url) => {
      const path = String(url);
      if (path.includes("getBolsinLocation")) return Response.json(jsonXtr(42));
      if (path.includes("retrieveTrackingData"))
        return new Response(fila.join(","));
      return Response.json([fila]);
    });
    const servicios = crearServicios(
      new TransporteHTTPGPS("http://127.0.0.1:3200", fetchHttp),
    );
    const resultados = await Promise.all(
      solicitudes.map((solicitud) =>
        new InterfazGPSTracker(servicios, clave).obtenerLocalizacionDeBolsines(
          ...solicitud,
        ),
      ),
    );
    expect(resultados).toEqual([[fila], [fila], [fila]]);
    expect(
      fetchHttp.mock.calls.map(([url]) => {
        const { origin, pathname, searchParams } = new URL(String(url));
        return [origin, pathname, Object.fromEntries(searchParams)];
      }),
    ).toEqual([
      [
        "http://127.0.0.1:3200",
        "/api/gps-simulator/xtr-4500l/getBolsinLocation",
        { apiKey: clave, nroBolsin: "42", codCMOrigen: "ORIG-1" },
      ],
      [
        "http://127.0.0.1:3200",
        "/api/gps-simulator/qx-7a/retrieveTrackingData",
        { apiKey: clave, nroBolsin: "42", codCMDestino: "DEST-1" },
      ],
      [
        "http://127.0.0.1:3200",
        "/api/gps-simulator/mtr-900/fetchCargoPositions",
        { apiKey: clave, nroBolsin: "42" },
      ],
    ]);
    for (const [, opciones] of fetchHttp.mock.calls) {
      expect(opciones).toMatchObject({
        cache: "no-store",
        redirect: "error",
        signal: expect.any(AbortSignal),
      });
    }
  });

  it.each([400, 401, 503])(
    "propaga el estado HTTP %i sin exponer el cuerpo ni la clave en logs",
    async (estadoHttp) => {
      const log = vi.spyOn(console, "log");
      const warn = vi.spyOn(console, "warn");
      const error = vi.spyOn(console, "error");
      const transporte = new TransporteHTTPGPS(
        "http://localhost",
        async () => new Response(clave, { status: estadoHttp }),
      );
      const operacion = new ServicioGPSTrackerXTR4500L(
        transporte,
      ).getBolsinLocation(clave, 42, "ORIG-1");
      await expect(operacion).rejects.toMatchObject({
        tipo: "HTTP",
        estadoHttp,
      });
      await expect(operacion).rejects.not.toThrow(clave);
      expect(
        [log.mock.calls, warn.mock.calls, error.mock.calls]
          .flat(2)
          .map(String)
          .join(" "),
      ).not.toContain(clave);
    },
  );

  it("distingue timeout de un error de conexión sin exponer la clave", async () => {
    const transporte = new TransporteHTTPGPS("http://localhost", async () => {
      throw new Error(clave);
    });
    const servicio = new ServicioGPSTrackerMTR900(transporte);
    const operacion = servicio.fetchCargoPositions(clave, 42);
    await expect(operacion).rejects.toMatchObject({ tipo: "CONEXION" });
    await expect(operacion).rejects.not.toThrow(clave);

    vi.spyOn(AbortSignal, "timeout").mockReturnValue(AbortSignal.abort());
    await expect(servicio.fetchCargoPositions(clave, 42)).rejects.toMatchObject(
      {
        tipo: "TIMEOUT",
      },
    );
  });

  it("rechaza una clave ausente o una URL inválida antes de usar fetch", async () => {
    const fetchHttp = vi.fn<typeof fetch>();
    await expect(
      new ServicioGPSTrackerMTR900(
        new TransporteHTTPGPS("file:///tmp", fetchHttp),
      ).fetchCargoPositions(clave, 42),
    ).rejects.toMatchObject({ tipo: "CONFIGURACION" });
    await expect(
      new ServicioGPSTrackerMTR900(
        new TransporteHTTPGPS("http://localhost", fetchHttp),
      ).fetchCargoPositions("", 42),
    ).rejects.toMatchObject({ tipo: "CONFIGURACION" });
    expect(fetchHttp).not.toHaveBeenCalled();
  });
});
