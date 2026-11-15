import { type NextRequest, NextResponse } from "next/server";
import {
  leerSesion,
  nombreCookie,
  opcionesCookie,
  responderSesion,
  servicio,
} from "../sesion";

export function POST(request: NextRequest) {
  return responderSesion(async () => {
    const id = leerSesion(request.cookies.get(nombreCookie)?.value);
    await servicio.cerrar(id);
    const respuesta = new NextResponse(null, {
      status: 204,
      headers: { "Cache-Control": "no-store" },
    });
    respuesta.cookies.set(nombreCookie, "", {
      ...opcionesCookie,
      secure: request.nextUrl.protocol === "https:",
      maxAge: 0,
    });
    return respuesta;
  });
}
