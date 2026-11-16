import { type NextRequest, NextResponse } from "next/server";
import {
  notificarUbicacionRequestSchema,
  notificarUbicacionResponseSchema,
} from "@/dtos/seguimiento-bolsin.dto";
import { BOLSINES_DEMO } from "@/services/seguimiento/seguimiento-cliente";

/**
 * Route Handler de respaldo controlado para CU 30/31 hasta que el envío real
 * de correo esté conectado en backend.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El cuerpo de la solicitud no es JSON válido." },
      { status: 400 },
    );
  }

  const parsed = notificarUbicacionRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos para notificar ubicación." },
      { status: 400 },
    );
  }

  const bolsin = BOLSINES_DEMO.find(
    (item) => item.nroBolsin === parsed.data.nroBolsin,
  );

  const respuesta = notificarUbicacionResponseSchema.parse({
    enviado: true,
    destinatarioEmail:
      bolsin?.cmDestino.emailGcm ?? "gcm.destino@art-bolsines.gob.ar",
    destinatarioNombre: bolsin
      ? `Gerente ${bolsin.cmDestino.nombre}`
      : `Gerente CM destino (Bolsín #${parsed.data.nroBolsin})`,
    fechaEnvio: new Date().toISOString(),
  });

  return NextResponse.json(respuesta, { status: 200 });
}
