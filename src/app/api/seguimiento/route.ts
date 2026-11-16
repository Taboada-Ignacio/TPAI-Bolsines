import { type NextRequest, NextResponse } from "next/server";
import {
  MODELOS_GPS,
  modeloGpsSchema,
  seguimientoResponseSchema,
} from "@/dtos/seguimiento-bolsin.dto";
import {
  BOLSINES_DEMO,
  CM_ORIGEN_DEMO,
} from "@/services/seguimiento/seguimiento-cliente";

/**
 * Route Handler de respaldo controlado para CU 36 hasta que GestorSeguimientoBolsines
 * esté conectado en backend.
 */
export async function GET(request: NextRequest) {
  const modeloParam =
    request.nextUrl.searchParams.get("modelo") ?? MODELOS_GPS[0];
  const parsedModelo = modeloGpsSchema.safeParse(modeloParam);

  if (!parsedModelo.success) {
    return NextResponse.json(
      { error: "Modelo GPS inválido." },
      { status: 400 },
    );
  }

  const respuesta = seguimientoResponseSchema.parse({
    cmOrigen: CM_ORIGEN_DEMO,
    modeloGps: parsedModelo.data,
    bolsines: BOLSINES_DEMO,
  });

  return NextResponse.json(respuesta, { status: 200 });
}
