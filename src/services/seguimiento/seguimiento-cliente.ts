import type { z } from "zod";
import {
  type BolsinSeguimiento,
  type Cu36BackendResponse,
  type ModeloGps,
  type NotificarUbicacionRequest,
  type NotificarUbicacionResponse,
  type SeguimientoResponse,
  cu31BackendResponseSchema,
  cu36BackendResponseSchema,
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
  codigo: "CM-CBA",
  nombre: "Comisión Médica Córdoba",
  direccion: "Av. Vélez Sarsfield 2311, Córdoba",
} as const;

export const BOLSINES_DEMO: BolsinSeguimiento[] = [
  {
    nroBolsin: 104,
    numeroPrecinto: "P-9021",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-SF",
      nombre: "Comisión Médica Santa Fe",
      emailGcm: "gcm.cm-sf@example.test",
    },
    ubicacion: {
      latitud: -32.9468,
      longitud: -60.6393,
      fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
      estadoCobertura: "vivo",
    },
    pesoKg: 4.2,
    remito: {
      numero: "REM-4401",
      asunto: "Dictamen Junta Médica #882",
      tipoDocumento: "Expediente médico",
    },
  },
  {
    nroBolsin: 108,
    numeroPrecinto: "P-9034",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-BA",
      nombre: "Comisión Médica Buenos Aires",
      emailGcm: "gcm.cm-ba@example.test",
    },
    ubicacion: {
      latitud: -34.6037,
      longitud: -58.3816,
      fechaHoraActualizacion: "2026-11-15T14:19:00.000Z",
      estadoCobertura: "vivo",
    },
    pesoKg: 2.8,
    remito: {
      numero: "REM-4410",
      asunto: "Oficio judicial SRT 192/26",
      tipoDocumento: "Nota legal",
    },
  },
  {
    nroBolsin: 112,
    numeroPrecinto: "P-9047",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-MZA",
      nombre: "Comisión Médica Mendoza",
      emailGcm: "gcm.cm-mza@example.test",
    },
    ubicacion: {
      latitud: -32.8895,
      longitud: -68.8458,
      fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
      estadoCobertura: "sin_cobertura",
    },
    pesoKg: 5.1,
    remito: {
      numero: "REM-4415",
      asunto: "Historia clínica certificada",
      tipoDocumento: "Documentación clínica",
    },
  },
  {
    nroBolsin: 119,
    numeroPrecinto: "P-9052",
    cmOrigen: CM_ORIGEN_DEMO,
    cmDestino: {
      codigo: "CM-TUC",
      nombre: "Comisión Médica Tucumán",
      emailGcm: "gcm.cm-tuc@example.test",
    },
    ubicacion: {
      latitud: -26.8083,
      longitud: -65.2176,
      fechaHoraActualizacion: "2026-11-15T14:24:00.000Z",
      estadoCobertura: "vivo",
    },
    pesoKg: 3.5,
    remito: {
      numero: "REM-4421",
      asunto: "Legajo médico laboral #310",
      tipoDocumento: "Expediente médico",
    },
  },
];

export function construirRespaldoSeguimiento(
  modelo: ModeloGps,
): SeguimientoResultado {
  const validado = seguimientoResponseSchema.parse({
    cmOrigen: CM_ORIGEN_DEMO,
    modeloGps: modelo,
    bolsines: BOLSINES_DEMO,
    sinUbicacion: 0,
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

async function leerMensajeError(respuesta: Response): Promise<string | null> {
  const contentType =
    respuesta.headers?.get?.("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) return null;
  try {
    const body = (await respuesta.json()) as { error?: unknown };
    return typeof body?.error === "string" && body.error.trim().length > 0
      ? body.error
      : null;
  } catch {
    return null;
  }
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
    const detalle = await leerMensajeError(respuesta);
    throw new ErrorSeguimientoCliente(
      detalle ?? mensajePorEstadoHttp(respuesta.status),
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

type ComisionCatalogo = {
  codigo: string;
  nombre: string;
  direccion: string;
  email: string;
};

async function cargarCatalogoComisiones(
  signal?: AbortSignal,
): Promise<Map<string, ComisionCatalogo>> {
  try {
    const res = await fetch("/api/comisiones-medicas", {
      method: "GET",
      signal,
    });
    if (!res.ok) return new Map();
    const ct = res.headers?.get?.("content-type")?.toLowerCase() ?? "";
    if (!ct.includes("application/json")) return new Map();
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data)) return new Map();
    const mapa = new Map<string, ComisionCatalogo>();
    for (const item of data) {
      if (
        item &&
        typeof item === "object" &&
        typeof (item as ComisionCatalogo).nombre === "string"
      ) {
        const cm = item as ComisionCatalogo;
        mapa.set(cm.nombre.trim().toLowerCase(), cm);
      }
    }
    return mapa;
  } catch {
    return new Map();
  }
}

function adaptarCu36Backend(
  backend: Cu36BackendResponse,
  modelo: ModeloGps,
  comisionesPorNombre: Map<string, ComisionCatalogo>,
): SeguimientoResponse {
  const origenCat = comisionesPorNombre.get(
    backend.comision.trim().toLowerCase(),
  );
  const cmOrigen = {
    codigo: origenCat?.codigo ?? "CM-ORIGEN",
    nombre: backend.comision,
    direccion: origenCat?.direccion ?? backend.comision,
  };

  const puntos = "mapa" in backend ? backend.mapa.puntos : backend.puntos;

  const bolsines: BolsinSeguimiento[] = puntos.map((punto) => {
    const destCat = comisionesPorNombre.get(
      punto.destino.trim().toLowerCase(),
    );
    const tieneUbicacion =
      punto.latitud !== null &&
      punto.longitud !== null &&
      punto.actualizado !== null;
    return {
      id: punto.id,
      nroBolsin: punto.numero,
      numeroPrecinto: punto.precinto,
      cmOrigen,
      cmDestino: {
        codigo:
          punto.codigoDestino ??
          punto.destinoCodigo ??
          destCat?.codigo ??
          punto.destino,
        nombre: punto.destino,
        emailGcm: punto.emailGcm ?? destCat?.email ?? null,
      },
      ubicacion: tieneUbicacion
        ? {
            latitud: punto.latitud!,
            longitud: punto.longitud!,
            fechaHoraActualizacion: punto.actualizado!,
            estadoCobertura: punto.estadoCobertura ?? "vivo",
          }
        : null,
      pesoKg: punto.pesoKg,
      remito: punto.remito ?? null,
    };
  });

  return seguimientoResponseSchema.parse({
    cmOrigen,
    modeloGps: modelo,
    bolsines,
    sinUbicacion: backend.sinUbicacion,
  });
}

/**
 * Consulta la ubicación actual de los bolsines en tránsito en el backend real (CU 36).
 * Si el endpoint no está disponible (404/501), devuelve un respaldo controlado de demostración.
 */
export async function obtenerSeguimientoBolsines(
  modelo: ModeloGps,
  signal?: AbortSignal,
): Promise<SeguimientoResultado> {
  const modeloValidado = modeloGpsSchema.parse(modelo);
  const url = `/api/auth/cu36/seguimiento?modeloGps=${encodeURIComponent(modeloValidado)}`;

  const [seguimientoRes, comisionesPorNombre] = await Promise.all([
    consultarJsonConRespaldo<SeguimientoResponse | Cu36BackendResponse>(
      url,
      { method: "GET" },
      seguimientoResponseSchema.or(cu36BackendResponseSchema),
      () => construirRespaldoSeguimiento(modeloValidado),
      signal,
    ),
    cargarCatalogoComisiones(signal),
  ]);

  if ("bolsines" in seguimientoRes) {
    return seguimientoRes;
  }

  return {
    ...adaptarCu36Backend(seguimientoRes, modeloValidado, comisionesPorNombre),
    esModoDemo: seguimientoRes.esModoDemo,
  };
}

/**
 * Envía el aviso de ubicación al gerente de la comisión médica destino (CU 36 -> CU 31).
 * Si recibe `bolsinId`, usa `POST /api/auth/cu36/seguimiento` (el backend resuelve el GCM en BD y consulta GPS).
 * Caso contrario (demo o compatibilidad directa), usa `POST /api/auth/cu31/notificar-ubicacion`.
 */
export async function notificarUbicacionGerente(
  payload: NotificarUbicacionRequest,
  signal?: AbortSignal,
): Promise<NotificarUbicacionResultado> {
  const payloadValidado = notificarUbicacionRequestSchema.parse(payload);

  const usaCu36 = typeof payloadValidado.bolsinId === "number";
  const endpoint = usaCu36
    ? "/api/auth/cu36/seguimiento"
    : "/api/auth/cu31/notificar-ubicacion";

  const fechaHoraActualizacion =
    payloadValidado.fechaHoraActualizacion ?? new Date().toISOString();
  const bodyBackend = usaCu36
    ? { bolsinId: payloadValidado.bolsinId }
    : {
        ...(payloadValidado.emailDestino
          ? { emailDestino: payloadValidado.emailDestino }
          : {}),
        nroBolsin: payloadValidado.nroBolsin,
        latitud: String(payloadValidado.latitud ?? 0),
        longitud: String(payloadValidado.longitud ?? 0),
        fechaHoraActualizacion,
      };

  const resultado = await consultarJsonConRespaldo<
    NotificarUbicacionResponse | { aceptada: true }
  >(
    endpoint,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyBackend),
    },
    notificarUbicacionResponseSchema.or(cu31BackendResponseSchema),
    () => construirRespaldoNotificacion(payloadValidado),
    signal,
  );

  if (!resultado.esModoDemo && !usaCu36 && !payloadValidado.emailDestino) {
    throw new ErrorSeguimientoCliente(
      "La comisión médica destino no tiene un correo electrónico configurado para recibir la notificación.",
    );
  }

  if ("enviado" in resultado) {
    return resultado;
  }

  return {
    enviado: true,
    destinatarioEmail: payloadValidado.emailDestino!,
    destinatarioNombre: `Gerente CM destino (Bolsín #${payloadValidado.nroBolsin})`,
    fechaEnvio: new Date().toISOString(),
    esModoDemo: resultado.esModoDemo,
  };
}
