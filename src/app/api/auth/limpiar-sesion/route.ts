import { type NextRequest, NextResponse } from "next/server";
import { nombreCookie, opcionesCookie } from "../sesion";

export function GET(request: NextRequest) {
  const respuesta = NextResponse.redirect(new URL("/login", request.url));
  respuesta.headers.set("Cache-Control", "no-store");
  respuesta.cookies.set(nombreCookie, "", {
    ...opcionesCookie,
    secure: request.nextUrl.protocol === "https:",
    maxAge: 0,
  });
  return respuesta;
}
