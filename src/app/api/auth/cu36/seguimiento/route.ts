import type { NextRequest } from "next/server";
import { modeloGpsSchema } from "@/dtos/seguimiento-bolsin.dto";
import { atenderSeguimiento, pantalla } from "./servicio";

export function GET(request: NextRequest) {
  return atenderSeguimiento(request, async (id) => {
    const param = request.nextUrl.searchParams.get("modeloGps");
    if (param?.trim() && !modeloGpsSchema.safeParse(param).success) {
      return Response.json(
        { error: "Indicá un modelo de GPS válido." },
        { status: 400, headers: { "Cache-Control": "no-store" } },
      );
    }
    return pantalla.habilitarPantalla(id);
  });
}

export function POST(request: NextRequest) {
  return atenderSeguimiento(request, (id) =>
    pantalla.tomarConfirmacionOpcEnviarCorreoGCM(id, request),
  );
}
