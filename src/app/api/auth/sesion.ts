import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { SesionRepositoryPrisma } from "@/infrastructure/SesionRepositoryPrisma";
import { SesionInvalida, SesionService } from "@/services/SesionService";
import { responder } from "../_catalogos/http";

export const servicio = new SesionService(new SesionRepositoryPrisma());
export const nombreCookie = "bolsines_sesion";
export const opcionesCookie = {
  httpOnly: true,
  sameSite: "lax",
  path: "/api/auth",
} as const;

export function claveFirma() {
  const clave = process.env.SESSION_SIGNING_KEY;
  if (!clave || Buffer.byteLength(clave) < 32)
    throw new Error("Falta una clave de sesión de al menos 32 bytes.");
  return clave;
}

function firma(id: string, clave: string) {
  return createHmac("sha256", clave).update(id).digest();
}

export function firmarSesion(id: number, clave: string) {
  return `${id}.${firma(String(id), clave).toString("hex")}`;
}

export function leerSesion(cookie: string | undefined) {
  const partes = cookie?.match(/^([1-9][0-9]{0,9})\.([a-f0-9]{64})$/);
  if (
    !partes ||
    Number(partes[1]) > 2_147_483_647 ||
    !timingSafeEqual(
      Buffer.from(partes[2], "hex"),
      firma(partes[1], claveFirma()),
    )
  ) {
    throw new SesionInvalida();
  }
  return Number(partes[1]);
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
