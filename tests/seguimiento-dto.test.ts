import { afterEach, describe, expect, it, vi } from "vitest";
import {
  modeloGpsSchema,
  notificarUbicacionRequestSchema,
  notificarUbicacionResponseSchema,
  seguimientoResponseSchema,
  ubicacionBolsinSchema,
} from "@/dtos/seguimiento-bolsin.dto";
import {
  ErrorSeguimientoCliente,
  notificarUbicacionGerente,
  obtenerSeguimientoBolsines,
} from "@/services/seguimiento/seguimiento-cliente";

function mockFetchResponse(
  status: number,
  body?: unknown,
  ok = status >= 200 && status < 300,
): Response {
  return {
    ok,
    status,
    json: async () => body,
  } as Response;
}

describe("seguimiento-bolsin.dto", () => {
  it("valida los tres modelos de GPS Tracker soportados y rechaza otros", () => {
    expect(modeloGpsSchema.parse("XTR-4500L")).toBe("XTR-4500L");
    expect(modeloGpsSchema.parse("QX-7A")).toBe("QX-7A");
    expect(modeloGpsSchema.parse("MTR-900")).toBe("MTR-900");
    expect(modeloGpsSchema.safeParse("OTRO-100").success).toBe(false);
  });

  it("valida seguimientoResponseSchema con estado vivo, A3 sin_cobertura y ubicacion null", () => {
    const parsed = seguimientoResponseSchema.safeParse({
      cmOrigen: {
        codigo: "CM-01",
        nombre: "CM-01 Córdoba",
        direccion: "Av. Vélez Sarsfield 2311, Córdoba",
      },
      modeloGps: "XTR-4500L",
      bolsines: [
        {
          nroBolsin: 104,
          numeroPrecinto: "P-9021",
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
          pesoKg: 4.2,
        },
        {
          nroBolsin: 112,
          numeroPrecinto: 9047,
          cmDestino: {
            codigo: "CM-04",
            nombre: "CM-04 Mendoza",
            emailGcm: null,
          },
          ubicacion: {
            latitud: -32.8895,
            longitud: -68.8458,
            fechaHoraActualizacion: "2026-11-15T11:04:00-03:00",
            estadoCobertura: "sin_cobertura",
          },
          remitos: [],
        },
        {
          nroBolsin: 120,
          numeroPrecinto: "P-9060",
          cmDestino: {
            codigo: "CM-05",
            nombre: "CM-05 Tucumán",
          },
          ubicacion: null,
          remitos: [],
        },
      ],
    });

    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.bolsines[1]?.ubicacion?.estadoCobertura).toBe(
        "sin_cobertura",
      );
      expect(parsed.data.bolsines[2]?.ubicacion).toBeNull();
    }
  });

  it("rechaza coordenadas inválidas (fuera de rango o no finitas) y fechas no ISO", () => {
    const base = {
      latitud: -32.9468,
      longitud: -60.6393,
      fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
      estadoCobertura: "vivo" as const,
    };

    expect(ubicacionBolsinSchema.safeParse(base).success).toBe(true);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, latitud: -90.01 }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, latitud: 90.01 }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, longitud: -180.5 }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, longitud: 180.5 }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, latitud: Number.NaN }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({ ...base, longitud: Number.POSITIVE_INFINITY })
        .success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({
        ...base,
        fechaHoraActualizacion: "15/11/2026 14:22",
      }).success,
    ).toBe(false);
    expect(
      ubicacionBolsinSchema.safeParse({
        ...base,
        estadoCobertura: "desconocido",
      }).success,
    ).toBe(false);
  });

  it("valida notificarUbicacionRequestSchema y notificarUbicacionResponseSchema", () => {
    expect(
      notificarUbicacionRequestSchema.safeParse({
        nroBolsin: 104,
        modeloGps: "QX-7A",
      }).success,
    ).toBe(true);

    expect(
      notificarUbicacionRequestSchema.safeParse({
        nroBolsin: 0,
        modeloGps: "QX-7A",
      }).success,
    ).toBe(false);

    expect(
      notificarUbicacionRequestSchema.safeParse({
        nroBolsin: 104,
        modeloGps: "INVALIDO",
      }).success,
    ).toBe(false);

    expect(
      notificarUbicacionResponseSchema.safeParse({
        enviado: true,
        destinatarioEmail: "gcm.rosario@art-bolsines.gob.ar",
        destinatarioNombre: "Gerente CM-02 Rosario",
        fechaEnvio: "2026-11-15T14:30:00.000Z",
      }).success,
    ).toBe(true);

    expect(
      notificarUbicacionResponseSchema.safeParse({
        enviado: true,
        destinatarioEmail: "no-es-un-email",
        destinatarioNombre: "Gerente",
        fechaEnvio: "2026-11-15T14:30:00.000Z",
      }).success,
    ).toBe(false);
  });
});

describe("seguimiento-cliente", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("obtenerSeguimientoBolsines consulta el endpoint y retorna esModoDemo=false en 200", async () => {
    const payloadBackend = {
      cmOrigen: {
        codigo: "CM-01",
        nombre: "CM-01 Córdoba",
        direccion: "Av. Vélez Sarsfield 2311, Córdoba",
      },
      modeloGps: "QX-7A",
      bolsines: [
        {
          nroBolsin: 201,
          numeroPrecinto: "P-7701",
          cmDestino: {
            codigo: "CM-02",
            nombre: "CM-02 Rosario",
            emailGcm: "gcm.rosario@art-bolsines.gob.ar",
          },
          ubicacion: {
            latitud: -32.9468,
            longitud: -60.6393,
            fechaHoraActualizacion: "2026-11-15T15:00:00.000Z",
            estadoCobertura: "vivo",
          },
          remitos: [],
        },
      ],
    };

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(mockFetchResponse(200, payloadBackend));

    const controller = new AbortController();
    const res = await obtenerSeguimientoBolsines("QX-7A", controller.signal);

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/auth/cu36/seguimiento",
      expect.objectContaining({
        method: "GET",
        signal: controller.signal,
      }),
    );
    expect(res.esModoDemo).toBe(false);
    expect(res.modeloGps).toBe("QX-7A");
    expect(res.bolsines).toHaveLength(1);
    expect(res.bolsines[0]?.nroBolsin).toBe(201);
  });

  it.each([404, 501])(
    "obtenerSeguimientoBolsines usa respaldo demo tipado con A3 cuando el backend responde %i",
    async (status) => {
      vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
        mockFetchResponse(status, { error: "No implementado" }, false),
      );

      const res = await obtenerSeguimientoBolsines("MTR-900");

      expect(res.esModoDemo).toBe(true);
      expect(res.modeloGps).toBe("MTR-900");
      expect(seguimientoResponseSchema.safeParse(res).success).toBe(true);
      expect(
        res.bolsines.some((b) => b.ubicacion?.estadoCobertura === "sin_cobertura"),
      ).toBe(true);
    },
  );

  it.each([500, 503])(
    "obtenerSeguimientoBolsines propaga error amigable en voseo ante HTTP %i",
    async (status) => {
      vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
        mockFetchResponse(status, { error: "Error interno" }, false),
      );

      await expect(
        obtenerSeguimientoBolsines("XTR-4500L"),
      ).rejects.toSatisfy((err: unknown) => {
        return (
          err instanceof ErrorSeguimientoCliente &&
          err.status === status &&
          /probá/i.test(err.message)
        );
      });
    },
  );

  it("obtenerSeguimientoBolsines propaga error amigable ante falla de red real", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(
      new TypeError("Failed to fetch"),
    );

    await expect(
      obtenerSeguimientoBolsines("XTR-4500L"),
    ).rejects.toSatisfy((err: unknown) => {
      return (
        err instanceof ErrorSeguimientoCliente &&
        err.status === undefined &&
        /revisá tu conexión/i.test(err.message)
      );
    });
  });

  it("notificarUbicacionGerente envía POST y usa respaldo demo en 404/501", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        mockFetchResponse(200, {
          enviado: true,
          destinatarioEmail: "gcm.rosario@art-bolsines.gob.ar",
          destinatarioNombre: "Laura Méndez",
          fechaEnvio: "2026-11-15T15:10:00.000Z",
        }),
      )
      .mockResolvedValueOnce(mockFetchResponse(404, {}, false));

    const okRes = await notificarUbicacionGerente({
      nroBolsin: 104,
      modeloGps: "XTR-4500L",
      emailDestino: "gcm.rosario@art-bolsines.gob.ar",
      latitud: -32.9468,
      longitud: -60.6393,
      fechaHoraActualizacion: "2026-11-15T15:10:00.000Z",
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "/api/auth/cu31/notificar-ubicacion",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailDestino: "gcm.rosario@art-bolsines.gob.ar",
          nroBolsin: 104,
          latitud: "-32.9468",
          longitud: "-60.6393",
          fechaHoraActualizacion: "2026-11-15T15:10:00.000Z",
        }),
      }),
    );
    expect(okRes.esModoDemo).toBe(false);
    expect(okRes.enviado).toBe(true);

    const demoRes = await notificarUbicacionGerente({
      nroBolsin: 112,
      modeloGps: "XTR-4500L",
    });
    expect(demoRes.esModoDemo).toBe(true);
    expect(demoRes.enviado).toBe(true);
    expect(demoRes.destinatarioEmail).toBe("gcm.mendoza@art-bolsines.gob.ar");
  });

  it("notificarUbicacionGerente propaga error amigable en voseo ante 500", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      mockFetchResponse(500, { error: "SMTP caído" }, false),
    );

    await expect(
      notificarUbicacionGerente({ nroBolsin: 104, modeloGps: "XTR-4500L" }),
    ).rejects.toThrow(ErrorSeguimientoCliente);
  });
});
