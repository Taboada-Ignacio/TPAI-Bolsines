import type { NextRequest } from "next/server";
import { atenderSeguimiento, crearPantalla } from "./servicio";

export function GET(request: NextRequest) {
  return atenderSeguimiento(request, async (id) => {
    const pantalla = crearPantalla();
    const modelo = request.nextUrl.searchParams.get("modeloGps");
    return modelo === null
      ? pantalla.solicitarTipoTracker(id)
      : pantalla.tomarTipoTracker(id, modelo);
  });
}

export function POST(request: NextRequest) {
  return atenderSeguimiento(request, (id) =>
    crearPantalla().tomarConfirmacionOpcEnviarCorreoGCM(id, request),
  );
}
