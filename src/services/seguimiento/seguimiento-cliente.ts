import type { z } from "zod";
import {
  type BolsinSeguimiento,
  type ModeloGps,
  type NotificarUbicacionRequest,
  type NotificarUbicacionResponse,
  type SeguimientoResponse,
  modeloGpsSchema,
  notificarUbicacionRequestSchema,
  notificarUbicacionResponseSchema,
  seguimientoResponseSchema,
} from "@/dtos/seguimiento-bolsin.dto";

export type SeguimientoResultado = SeguimientoResponse & {
  esModoDemo: boolean;
};

export type NotificarUbicacionResultado = NotificarUbicacionResponse & {
  esModoDemo: boolean;
};

export class ErrorSeguimientoCliente extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ErrorSeguimientoCliente";
    this.status = status;
  }
}

export const CM_ORIGEN_DEMO = {
  codigo: "CM-01",
  nombre: "CM-01 Córdoba",
  direccion: "Av. Vélez Sarsfield 2311, Córdoba",
} as const;

export const BOLSINES_DEMO: BolsinSeguimiento[] = [
  {
    nroBolsin: 104,
    numeroPrecinto: "P-9021",
    cmOrigen: CM_ORIGEN_DEMO,
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
    pesoKg: 4.2,
    remitos: [
      {
        numero: "REM-4401",
        asunto: "Dictamen Junta Médica #882",
        tipoDocumento: "Expediente médico",
      },
      {
        numero: "REM-4402",
        asunto: "Estudios complementarios lote B",
        tipoDocumento: "Documentación clínica",
      },
    ],
  },
  {
    nroBolsin: 108,
    numeroPrecinto: "P-9034",
    cmOrigen: CM_ORIGEN_DEMO,
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
    pesoKg: 2.8,
    remitos: [
      {
        numero: "REM-4410",
        asunto: "Oficio judicial SRT 192/26",
        tipoDocumento: "Nota legal",
      },
    ],
  },
  {
    nroBolsin: 112,
    numeroPrecinto: "P-9047",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-04",
      nombre: "CM-04 Mendoza",
      emailGcm: "gcm.mendoza@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -32.8895,
      longitud: -68.8458,
      fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
      estadoCobertura: "sin_cobertura",
    },
    pesoKg: 5.1,
    remitos: [
      {
        numero: "REM-4415",
        asunto: "Historia clínica certificada",
        tipoDocumento: "Documentación clínica",
      },
      {
        numero: "REM-4416",
        asunto: "Constancia de traslado inter-CM",
        tipoDocumento: "Remito interno",
      },
    ],
  },
  {
    nroBolsin: 119,
    numeroPrecinto: "P-9052",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-05",
      nombre: "CM-05 Tucumán",
      emailGcm: "gcm.tucuman@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -26.8083,
      longitud: -65.2176,
      fechaHoraActualizacion: "2026-11-15T14:24:00.000Z",
      estadoCobertura: "vivo",
    },
    pesoKg: 3.5,
    remitos: [
      {
        numero: "REM-4421",
        asunto: "Legajo médico laboral #310",
        tipoDocumento: "Expediente médico",
      },
    ],
  },
];

export function construirRespaldoSeguimiento(
  modelo: ModeloGps,
): SeguimientoResultado {
  const validado = seguimientoResponseSchema.parse({
    cmOrigen: CM_ORIGEN_DEMO,
    modeloGps: modelo,
    bolsines: BOLSINES_DEMO,
  });

  return {
    ...validado,
    esModoDemo: true,
  };
}

export function construirRespaldoNotificacion(
  payload: NotificarUbicacionRequest,
): NotificarUbicacionResultado {
  const bolsin = BOLSINES_DEMO.find((b) => b.nroBolsin === payload.nroBolsin);
  const validado = notificarUbicacionResponseSchema.parse({
    enviado: true,
    destinatarioEmail:
      bolsin?.cmDestino.emailGcm ?? "gcm.destino@art-bolsines.gob.ar",
    destinatarioNombre: bolsin
      ? `Gerente ${bolsin.cmDestino.nombre}`
      : `Gerente CM destino (Bolsín #${payload.nroBolsin})`,
    fechaEnvio: new Date().toISOString(),
  });

  return {
    ...validado,
    esModoDemo: true,
  };
}

function esErrorAborto(error: unknown, signal?: AbortSignal): boolean {
  if (signal?.aborted) return true;
  return error instanceof DOMException && error.name === "AbortError";
}

function mensajePorEstadoHttp(status: number): string {
  if (status === 401 || status === 403) {
    return "Tu sesión venció o no tenés permisos para realizar esta acción. Volvé a iniciar sesión.";
  }
  if (status === 503) {
    return "El servicio de seguimiento no está disponible en este momento. Probá de nuevo en unos instantes.";
  }
  if (status >= 500) {
    return "Ocurrió un problema en el servidor al procesar el seguimiento. Probá de nuevo en unos segundos.";
  }
  return "No pudimos completar la solicitud de seguimiento. Revisá los datos e intentá otra vez.";
}

async function consultarJsonConRespaldo<T>(
  url: string,
  init: RequestInit,
  schema: z.ZodType<T>,
  construirDemo: () => T & { esModoDemo: boolean },
  signal?: AbortSignal,
): Promise<T & { esModoDemo: boolean }> {
  let respuesta: Response;

  try {
    respuesta = await fetch(url, { ...init, signal });
  } catch (error) {
    if (esErrorAborto(error, signal)) {
      throw error;
    }
    throw new ErrorSeguimientoCliente(
      "No pudimos conectarnos con el servidor. Revisá tu conexión y probá de nuevo.",
    );
  }

  if (respuesta.status === 404 || respuesta.status === 501) {
    return construirDemo();
  }

  if (!respuesta.ok) {
    throw new ErrorSeguimientoCliente(
      mensajePorEstadoHttp(respuesta.status),
      respuesta.status,
    );
  }

  const contentType =
    respuesta.headers?.get?.("content-type")?.toLowerCase() ?? null;
  if (contentType !== null && !contentType.includes("application/json")) {
    return construirDemo();
  }

  let cuerpo: unknown;
  try {
    cuerpo = await respuesta.json();
  } catch {
    throw new ErrorSeguimientoCliente(
      "Recibimos una respuesta inválida del servidor. Probá actualizar en unos segundos.",
      respuesta.status,
    );
  }

  const parsed = schema.safeParse(cuerpo);
  if (!parsed.success) {
    throw new ErrorSeguimientoCliente(
      "Los datos recibidos del servidor no tienen el formato esperado. Probá actualizar en unos segundos.",
      respuesta.status,
    );
  }

  return {
    ...parsed.data,
    esModoDemo: false,
  };
}

/**
 * Consulta la ubicación actual de los bolsines en tránsito para el modelo GPS seleccionado.
 * Si el endpoint aún no existe en backend (404/501), devuelve un respaldo controlado de demostración.
 */
export async function obtenerSeguimientoBolsines(
  modelo: ModeloGps,
  signal?: AbortSignal,
): Promise<SeguimientoResultado> {
  const modeloValidado = modeloGpsSchema.parse(modelo);
  const url = `/api/seguimiento?modelo=${encodeURIComponent(modeloValidado)}`;

  return consultarJsonConRespaldo(
    url,
    { method: "GET" },
    seguimientoResponseSchema,
    () => construirRespaldoSeguimiento(modeloValidado),
    signal,
  );
}

/**
 * Envía el aviso de ubicación al gerente de la comisión médica destino (CU 30/31).
 * Si el endpoint aún no existe en backend (404/501), simula la confirmación con datos de demostración.
 */
export async function notificarUbicacionGerente(
  payload: NotificarUbicacionRequest,
  signal?: AbortSignal,
): Promise<NotificarUbicacionResultado> {
  const payloadValidado = notificarUbicacionRequestSchema.parse(payload);

  return consultarJsonConRespaldo(
    "/api/seguimiento/notificar",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadValidado),
    },
    notificarUbicacionResponseSchema,
    () => construirRespaldoNotificacion(payloadValidado),
    signal,
  );
}
