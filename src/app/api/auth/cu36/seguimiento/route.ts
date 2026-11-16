import type { NextRequest } from "next/server";
import { atenderSeguimiento, pantalla } from "./servicio";

export function GET(request: NextRequest) {
  return atenderSeguimiento(request, (id) => pantalla.habilitarPantalla(id));
}

export function POST(request: NextRequest) {
  return atenderSeguimiento(request, (id) =>
    pantalla.tomarConfirmacionOpcEnviarCorreoGCM(id, request),
  );
}
