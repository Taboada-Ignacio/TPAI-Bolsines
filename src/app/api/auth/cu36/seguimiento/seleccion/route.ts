import type { NextRequest } from "next/server";
import { atenderSeguimiento, pantalla } from "../servicio";

export function POST(request: NextRequest) {
  return atenderSeguimiento(request, (id) =>
    pantalla.tomarSeleccionDeBolsin(id, request),
  );
}
