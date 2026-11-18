import { NextResponse } from "next/server";
import { SesionRepositoryPrisma } from "@/persistence/SesionRepositoryPrisma";
import {
  getSigningKey,
  SESSION_COOKIE_NAME,
  SESSION_COOKIE_OPTIONS,
  signSessionId,
  verifySessionCookie,
} from "@/services/auth/session-cookie";
import { SesionInvalida, SesionService } from "@/services/SesionService";
import { responder } from "../_catalogos/http";

export const servicio = new SesionService(new SesionRepositoryPrisma());
export const nombreCookie = SESSION_COOKIE_NAME;
export const opcionesCookie = SESSION_COOKIE_OPTIONS;
export const claveFirma = getSigningKey;
export const firmarSesion = signSessionId;

export function leerSesion(cookie: string | undefined) {
  const id = verifySessionCookie(cookie);
  if (id === null) {
    throw new SesionInvalida();
  }
  return id;
}

export function responderSesion(operacion: () => Promise<Response>) {
  return responder(async () => {
    try {
      return await operacion();
    } catch (error) {
      if (!(error instanceof SesionInvalida)) throw error;
      return NextResponse.json(
        { error: "Credenciales o sesión inválidas." },
        { status: 401, headers: { "Cache-Control": "no-store" } },
      );
    }
  });
}
