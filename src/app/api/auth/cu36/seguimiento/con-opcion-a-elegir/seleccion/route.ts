import type { NextRequest } from "next/server";
import { atenderSeguimiento, crearPantalla } from "../servicio";

export function POST(request: NextRequest) {
  return atenderSeguimiento(request, (id) =>
    crearPantalla().tomarSeleccionDeBolsin(id, request),
  );
}
