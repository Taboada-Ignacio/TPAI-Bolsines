import { loginResponseSchema, type LoginResponse } from "@/dtos/auth.dto";

export const SESSION_COOKIE_NAME = "bolsines_sesion";

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 8,
};

export function serializeSessionCookie(session: LoginResponse): string {
  return Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
}

export function parseSessionCookie(
  raw: string | undefined,
): LoginResponse | null {
  if (!raw) return null;
  try {
    const decoded = Buffer.from(raw, "base64url").toString("utf8");
    const json: unknown = JSON.parse(decoded);
    const parsed = loginResponseSchema.safeParse(json);
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}
