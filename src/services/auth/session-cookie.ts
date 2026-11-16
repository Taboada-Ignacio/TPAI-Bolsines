import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE_NAME = "bolsines_sesion";

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
};

export function getSigningKey(): string {
  const key = process.env.SESSION_SIGNING_KEY;
  if (!key || Buffer.byteLength(key) < 32) {
    throw new Error("Falta una clave de sesión de al menos 32 bytes.");
  }
  return key;
}

function computeHmac(id: string, key: string): Buffer {
  return createHmac("sha256", key).update(id).digest();
}

export function signSessionId(id: number, key: string): string {
  return `${id}.${computeHmac(String(id), key).toString("hex")}`;
}

export function verifySessionCookie(raw: string | undefined): number | null {
  if (!raw) return null;
  const parts = raw.match(/^([1-9][0-9]{0,9})\.([a-f0-9]{64})$/);
  if (!parts) return null;

  const id = Number(parts[1]);
  if (id > 2_147_483_647) return null;

  try {
    const expected = computeHmac(parts[1], getSigningKey());
    if (!timingSafeEqual(Buffer.from(parts[2], "hex"), expected)) {
      return null;
    }
    return id;
  } catch {
    return null;
  }
}
