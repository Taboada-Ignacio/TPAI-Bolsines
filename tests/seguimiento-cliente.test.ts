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
    remitos: [
      {
        numero: "REM-4401",
        asunto: "Dictamen Junta Médica #882",
        tipoDocumento: "Expediente médico",
      },
    ],
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
    remitos: [],
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
    remitos: [],
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
    "obtenerSeguimientoBolsines soporta el modelo %s y preserva estado A3 sin_cobertura",
    async (modelo) => {
      const fetchMock = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValueOnce(
          mockFetchResponse(200, {
            cmOrigen: {
              codigo: "CM-01",
              nombre: "CM-01 Córdoba",
              direccion: "Av. Vélez Sarsfield 2311, Córdoba",
            },
            modeloGps: modelo,
            bolsines: BOLSINES_FIXTURE,
          }),
        );

      const res = await obtenerSeguimientoBolsines(modelo);

      expect(fetchMock).toHaveBeenCalledWith(
        `/api/seguimiento?modelo=${encodeURIComponent(modelo)}`,
        expect.objectContaining({ method: "GET" }),
      );
      expect(res.esModoDemo).toBe(false);
      expect(res.modeloGps).toBe(modelo);
      expect(
        res.bolsines.find((b) => b.nroBolsin === 112)?.ubicacion?.estadoCobertura,
      ).toBe("sin_cobertura");
    },
  );

  it.each<ModeloGps>(MODELOS_GPS)(
    "notificarUbicacionGerente envía el modelo %s y retorna confirmación",
    async (modelo) => {
      const fetchMock = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValueOnce(
          mockFetchResponse(200, {
            enviado: true,
            destinatarioEmail: "gcm.rosario@art-bolsines.gob.ar",
            destinatarioNombre: "Gerente CM-02 Rosario",
            fechaEnvio: "2026-11-15T15:30:00.000Z",
          }),
        );

      const res = await notificarUbicacionGerente({
        nroBolsin: 112,
        modeloGps: modelo,
      });

      expect(fetchMock).toHaveBeenCalledWith(
        "/api/seguimiento/notificar",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nroBolsin: 112, modeloGps: modelo }),
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
      res.bolsines.some((b) => b.ubicacion?.estadoCobertura === "sin_cobertura"),
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
});
