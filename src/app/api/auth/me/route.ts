import { type NextRequest, NextResponse } from "next/server";
import { leerSesion, nombreCookie, responderSesion, servicio } from "../sesion";

export function GET(request: NextRequest) {
  return responderSesion(async () => {
    const id = leerSesion(request.cookies.get(nombreCookie)?.value);
    return NextResponse.json(await servicio.consultar(id), {
      headers: { "Cache-Control": "no-store" },
    });
  });
}
