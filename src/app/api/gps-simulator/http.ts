import type { z } from "zod";
import type { ParametrosGps } from "@/dtos/gps-simulator.dto";
import { localizarBolsin } from "@/lib/gps-simulator/localizador";

type Ubicacion = Awaited<ReturnType<typeof localizarBolsin>>;

const cacheControl = "no-store";

function errorGps(status: number, error: string): Response {
  return Response.json(
    { error },
    { status, headers: { "Cache-Control": cacheControl } },
  );
}

export function camposGps(ubicacion: Ubicacion): string[] {
  return [
    String(ubicacion.numeroBolsin),
    String(ubicacion.latitud),
    String(ubicacion.longitud),
    ubicacion.fechaHoraActualizacion,
  ];
}

export async function responderGps(
  request: Request,
  schema: z.ZodType<ParametrosGps>,
  formato: (ubicacion: Ubicacion) => Response,
): Promise<Response> {
  const parametros = new URL(request.url).searchParams;
  const datos = schema.safeParse(Object.fromEntries(parametros));
  if (!datos.success) {
    return errorGps(400, "Parámetros obligatorios ausentes o inválidos.");
  }

  const apiKey = process.env.GPS_SIMULADOR_API_KEY;
  if (!apiKey?.trim()) {
    return errorGps(503, "Simulador GPS no disponible.");
  }
  if (datos.data.apiKey !== apiKey) {
    return errorGps(401, "API Key incorrecta.");
  }
  if (
    process.env.NODE_ENV === "development" &&
    datos.data.simularFallo === "1"
  ) {
    return errorGps(503, "Simulador GPS no disponible.");
  }

  let ubicacion: Ubicacion;
  try {
    ubicacion = await localizarBolsin(datos.data.nroBolsin);
  } catch {
    return errorGps(503, "Simulador GPS no disponible.");
  }
  const respuesta = formato(ubicacion);
  respuesta.headers.set("Cache-Control", cacheControl);
  return respuesta;
}
