import { type NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/dtos/login.dto";
import { leerEntrada } from "../../_catalogos/http";
import {
  claveFirma,
  firmarSesion,
  nombreCookie,
  opcionesCookie,
  responderSesion,
  servicio,
} from "../sesion";

export function POST(request: NextRequest) {
  return responderSesion(async () => {
    const { nombre, contrasena } = await leerEntrada(request, loginSchema);
    const clave = claveFirma();
    const perfil = await servicio.iniciar(nombre, contrasena);
    const respuesta = NextResponse.json(perfil, {
      headers: { "Cache-Control": "no-store" },
    });
    respuesta.cookies.set(nombreCookie, firmarSesion(perfil.sesion.id, clave), {
      ...opcionesCookie,
      secure: request.nextUrl.protocol === "https:",
    });
    return respuesta;
  });
}
