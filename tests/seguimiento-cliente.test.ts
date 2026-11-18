import { afterEach, describe, expect, it, vi } from "vitest";
import { filtrarBolsinesSeguimiento } from "@/components/seguimiento/SeguimientoWorkspace";
import {
  MODELOS_GPS,
  type BolsinSeguimiento,
  type ModeloGps,
} from "@/dtos/seguimiento-bolsin.dto";
import {
  ErrorSeguimientoCliente,
  notificarUbicacionGerente,
  obtenerSeguimientoBolsines,
  seleccionarBolsinSeguimiento,
} from "@/services/seguimiento/seguimiento-cliente";

const BOLSINES_FIXTURE: BolsinSeguimiento[] = [
  {
    nroBolsin: 104,
    numeroPrecinto: "P-9021",
    cmOrigen: {
      codigo: "CM-01",
      nombre: "CM-01 Córdoba",
      direccion: "Av. Vélez Sarsfield 2311, Córdoba",
    },
    cmDestino: {
      codigo: "CM-02",
      nombre: "CM-02 Rosario",
      emailGcm: "gcm.rosario@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -32.9468,
      longitud: -60.6393,
      fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
      estadoCobertura: "vivo",
    },
    remito: {
      numero: "REM-4401",
      asunto: "Dictamen Junta Médica #882",
      tipoDocumento: "Expediente médico",
    },
  },
  {
    nroBolsin: 108,
    numeroPrecinto: "P-9034",
    cmOrigen: {
      codigo: "CM-01",
      nombre: "CM-01 Córdoba",
      direccion: "Av. Vélez Sarsfield 2311, Córdoba",
    },
    cmDestino: {
      codigo: "CM-03",
      nombre: "CM-03 Buenos Aires",
      emailGcm: "gcm.caba@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -34.6037,
      longitud: -58.3816,
      fechaHoraActualizacion: "2026-11-15T14:19:00.000Z",
      estadoCobertura: "vivo",
    },
    remito: null,
  },
  {
    nroBolsin: 112,
    numeroPrecinto: 9047,
    cmOrigen: {
      codigo: "CM-01",
      nombre: "CM-01 Córdoba",
      direccion: "Av. Vélez Sarsfield 2311, Córdoba",
    },
    cmDestino: {
      codigo: "CM-02",
      nombre: "CM-02 Rosario",
      emailGcm: "gcm.rosario@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -32.8895,
      longitud: -68.8458,
      fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
      estadoCobertura: "sin_cobertura",
    },
    remito: null,
  },
];

function mockFetchResponse(
  status: number,
  body?: unknown,
  ok = status >= 200 && status < 300,
  contentType: string | null = "application/json; charset=utf-8",
): Response {
  return {
    ok,
    status,
    headers: new Headers(
      contentType ? { "content-type": contentType } : undefined,
    ),
    json: async () => body,
  } as Response;
}

describe("filtrarBolsinesSeguimiento", () => {
  it("devuelve todos los bolsines cuando ambos filtros están vacíos", () => {
    expect(filtrarBolsinesSeguimiento(BOLSINES_FIXTURE, "", "")).toEqual(
      BOLSINES_FIXTURE,
    );
    expect(filtrarBolsinesSeguimiento(BOLSINES_FIXTURE, "   ", "  ")).toEqual(
      BOLSINES_FIXTURE,
    );
  });

  it("filtra por N.º de precinto (insensible a mayúsculas y con precintos numéricos)", () => {
    const porTexto = filtrarBolsinesSeguimiento(
      BOLSINES_FIXTURE,
      "  p-9021 ",
      "",
    );
    expect(porTexto).toHaveLength(1);
    expect(porTexto[0]?.nroBolsin).toBe(104);

    const porNumero = filtrarBolsinesSeguimiento(BOLSINES_FIXTURE, "9047", "");
    expect(porNumero).toHaveLength(1);
    expect(porNumero[0]?.nroBolsin).toBe(112);
  });

  it("filtra por código de CM destino", () => {
    const rosario = filtrarBolsinesSeguimiento(BOLSINES_FIXTURE, "", "CM-02");
    expect(rosario.map((b) => b.nroBolsin)).toEqual([104, 112]);

    const caba = filtrarBolsinesSeguimiento(BOLSINES_FIXTURE, "", "CM-03");
    expect(caba.map((b) => b.nroBolsin)).toEqual([108]);
  });

  it("combina filtro de precinto y CM destino (incluyendo resultado vacío)", () => {
    const combinado = filtrarBolsinesSeguimiento(
      BOLSINES_FIXTURE,
      "9047",
      "CM-02",
    );
    expect(combinado.map((b) => b.nroBolsin)).toEqual([112]);

    const sinCoincidencias = filtrarBolsinesSeguimiento(
      BOLSINES_FIXTURE,
      "P-9021",
      "CM-03",
    );
    expect(sinCoincidencias).toEqual([]);
  });
});

describe("seguimiento-cliente (CU 36 + CU 30/31)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each<ModeloGps>(MODELOS_GPS)(
    "obtenerSeguimientoBolsines consulta /api/auth/cu36/seguimiento con el modelo %s y adapta la respuesta real del backend",
    async (modelo) => {
      const fetchMock = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValueOnce(
          mockFetchResponse(200, {
            comision: "Comisión Médica Córdoba",
            puntos: [
              {
                id: 1,
                numero: 101,
                precinto: 9001,
                destino: "Comisión Médica Rosario",
                latitud: -32.9468,
                longitud: -60.6393,
                actualizado: "2026-11-15T14:22:00.000Z",
              },
            ],
            sinUbicacion: 0,
          }),
        )
        .mockResolvedValueOnce(
          mockFetchResponse(200, [
            {
              id: 5,
              codigo: "CM-CBA",
              nombre: "Comisión Médica Córdoba",
              direccion: "Córdoba Capital",
              email: "cm-cordoba@example.com",
              telefono: "0351-400-0005",
            },
            {
              id: 2,
              codigo: "CM-ROS",
              nombre: "Comisión Médica Rosario",
              direccion: "Rosario",
              email: "cm-rosario@example.com",
              telefono: "0341-400-0002",
            },
          ]),
        );

      const res = await obtenerSeguimientoBolsines(modelo);

      expect(fetchMock).toHaveBeenCalledWith(
        `/api/auth/cu36/seguimiento?modeloGps=${modelo}`,
        expect.objectContaining({ method: "GET" }),
      );
      expect(res.esModoDemo).toBe(false);
      expect(res.modeloGps).toBe(modelo);
      expect(res.cmOrigen.codigo).toBe("CM-CBA");
      expect(res.bolsines).toHaveLength(1);
      expect(res.bolsines[0]?.cmDestino.codigo).toBe("CM-ROS");
      expect(res.bolsines[0]?.cmDestino.emailGcm).toBe(
        "cm-rosario@example.com",
      );
    },
  );

  it("entrega al mapa las rutas y fechas del backend sin consultar el catalogo", async () => {
    const origen = {
      codigo: "CM-CBA",
      nombre: "Cordoba",
      direccion: "Origen 1",
    };
    const recorrido = {
      origen: { lat: -31, lng: -64 },
      destino: { lat: -32, lng: -60 },
      trazado: [
        { lat: -31, lng: -64 },
        { lat: -32, lng: -60 },
      ],
    };
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(200, {
        comision: "Cordoba",
        mapa: {
          estilo: "https://tiles.openfreemap.org/styles/bright",
          comisionOrigen: origen,
          puntos: [
            {
              id: 1,
              numero: 101,
              precinto: 123,
              latitud: -30,
              longitud: -62,
              actualizado: "2026-11-15T14:22:00.000Z",
              cmOrigen: origen,
              destino: "Santa Fe",
              codigoDestino: "CM-SF",
              direccionDestino: "Destino 1",
              recorrido,
            },
          ],
        },
        sinUbicacion: 0,
      }),
    );

    const resultado = await obtenerSeguimientoBolsines("XTR-4500L");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(resultado.estiloMapa).toBe(
      "https://tiles.openfreemap.org/styles/bright",
    );
    expect(resultado.bolsines[0]).toMatchObject({
      recorrido,
      cmOrigen: origen,
      cmDestino: { direccion: "Destino 1" },
      ubicacion: {
        latitud: -30,
        longitud: -62,
        fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
      },
    });
  });

  it.each<ModeloGps>(MODELOS_GPS)(
    "notificarUbicacionGerente envía al endpoint real /api/auth/cu31/notificar-ubicacion y retorna confirmación",
    async (modelo) => {
      const fetchMock = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValueOnce(mockFetchResponse(200, { aceptada: true }));

      const res = await notificarUbicacionGerente({
        nroBolsin: 112,
        modeloGps: modelo,
        emailDestino: "gcm.rosario@art-bolsines.gob.ar",
        latitud: -32.8895,
        longitud: -68.8458,
        fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
      });

      expect(fetchMock).toHaveBeenCalledWith(
        "/api/auth/cu31/notificar-ubicacion",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            emailDestino: "gcm.rosario@art-bolsines.gob.ar",
            nroBolsin: 112,
            latitud: "-32.8895",
            longitud: "-68.8458",
            fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
          }),
        }),
      );
      expect(res.esModoDemo).toBe(false);
      expect(res.enviado).toBe(true);
    },
  );

  it("obtenerSeguimientoBolsines activa respaldo demo con A3 cuando el backend devuelve 404/501", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(404, { error: "Not found" }, false),
    );

    const res = await obtenerSeguimientoBolsines("XTR-4500L");
    expect(res.esModoDemo).toBe(true);
    expect(
      res.bolsines.some(
        (b) => b.ubicacion?.estadoCobertura === "sin_cobertura",
      ),
    ).toBe(true);
  });

  it("notificarUbicacionGerente lanza ErrorSeguimientoCliente ante 503", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(503, { error: "Servicio no disponible" }, false),
    );

    await expect(
      notificarUbicacionGerente({ nroBolsin: 104, modeloGps: "MTR-900" }),
    ).rejects.toSatisfy(
      (err: unknown) =>
        err instanceof ErrorSeguimientoCliente && err.status === 503,
    );
  });

  it("obtenerSeguimientoBolsines activa respaldo demo ante 200 OK con HTML ([...resto])", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
      json: async () => {
        throw new SyntaxError("Unexpected token '<'");
      },
    } as unknown as Response);

    const res = await obtenerSeguimientoBolsines("XTR-4500L");
    expect(res.esModoDemo).toBe(true);
    expect(res.bolsines.length).toBeGreaterThan(0);
  });

  it("notificarUbicacionGerente activa respaldo demo ante 200 OK con text/html", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
      json: async () => {
        throw new SyntaxError("Unexpected token '<'");
      },
    } as unknown as Response);

    const res = await notificarUbicacionGerente({
      nroBolsin: 104,
      modeloGps: "QX-7A",
    });
    expect(res.esModoDemo).toBe(true);
    expect(res.enviado).toBe(true);
  });

  it("seleccionarBolsinSeguimiento invoca POST /api/auth/cu36/seguimiento/seleccion", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(200, {
        seleccionado: 7,
        confirmarNotificacion: true,
      }),
    );

    const res = await seleccionarBolsinSeguimiento(7);
    expect(res).toEqual({
      seleccionado: 7,
      confirmarNotificacion: true,
      esModoDemo: false,
    });
    expect(fetchSpy).toHaveBeenCalledWith(
      "/api/auth/cu36/seguimiento/seleccion",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ bolsinId: 7 }),
      }),
    );
  });

  it("conserva el error real cuando el bolsín de CU 36 ya no existe", async () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(async () =>
      mockFetchResponse(404, { error: "El bolsín no existe." }),
    );

    const error = { status: 404, message: "El bolsín no existe." };
    await expect(seleccionarBolsinSeguimiento(7)).rejects.toMatchObject(error);
    await expect(
      notificarUbicacionGerente({
        bolsinId: 7,
        nroBolsin: 101,
        modeloGps: "XTR-4500L",
      }),
    ).rejects.toMatchObject(error);
  });

  it("notificarUbicacionGerente consume la respuesta enriquecida de CU 36", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(200, {
        aceptada: true,
        destinatarioEmail: "gcm.sf@example.test",
        destinatarioNombre: "Carolina Martínez",
        fechaEnvio: "2026-11-16T12:00:00.000Z",
      }),
    );

    const res = await notificarUbicacionGerente({
      bolsinId: 1,
      nroBolsin: 101,
      modeloGps: "XTR-4500L",
    });
    expect(res).toEqual({
      enviado: true,
      destinatarioEmail: "gcm.sf@example.test",
      destinatarioNombre: "Carolina Martínez",
      fechaEnvio: "2026-11-16T12:00:00.000Z",
      esModoDemo: false,
    });
  });

  it("obtenerSeguimientoBolsines adapta pesoKg, emailGcm, estadoCobertura y remito", async () => {
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        mockFetchResponse(200, {
          comision: "Comisión Médica Córdoba",
          mapa: {
            estilo: "mapbox",
            puntos: [
              {
                id: 1,
                numero: 101,
                precinto: 940101,
                destino: "Comisión Médica Santa Fe",
                codigoDestino: "CM-SF",
                emailGcm: "gcm.cm-sf@example.test",
                pesoKg: 4.2,
                remito: {
                  numero: "REM-4101",
                  asunto: "Dictamen Junta Médica #101",
                  tipoDocumento: "Expediente médico",
                },
                latitud: -31.6,
                longitud: -60.7,
                actualizado: "2026-11-16T11:55:00.000Z",
                estadoCobertura: "sin_cobertura",
              },
            ],
          },
          sinUbicacion: 0,
        }),
      )
      .mockResolvedValueOnce(mockFetchResponse(200, []));

    const res = await obtenerSeguimientoBolsines("XTR-4500L");
    expect(res.esModoDemo).toBe(false);
    expect(res.bolsines[0]).toMatchObject({
      id: 1,
      nroBolsin: 101,
      pesoKg: 4.2,
      cmDestino: {
        codigo: "CM-SF",
        emailGcm: "gcm.cm-sf@example.test",
      },
      ubicacion: {
        estadoCobertura: "sin_cobertura",
      },
      remito: {
        numero: "REM-4101",
        asunto: "Dictamen Junta Médica #101",
        tipoDocumento: "Expediente médico",
      },
    });
  });
});
