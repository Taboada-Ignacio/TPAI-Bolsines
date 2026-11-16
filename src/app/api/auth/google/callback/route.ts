import { type NextRequest, NextResponse } from "next/server";
import { SesionInvalida } from "@/services/SesionService";
import {
  claveFirma,
  firmarSesion,
  nombreCookie,
  opcionesCookie,
  servicio,
} from "../../sesion";

const OAUTH_STATE_COOKIE = "bolsines_oauth_state";

function redirigirConError(request: NextRequest, codigo: string, email?: string) {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", codigo);
  if (email) {
    url.searchParams.set("email", email);
  }
  const response = NextResponse.redirect(url);
  response.cookies.delete(OAUTH_STATE_COOKIE);
  return response;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) {
    return redirigirConError(request, "google_no_configurado");
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get(OAUTH_STATE_COOKIE)?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return redirigirConError(request, "google_cancelado");
  }

  let emailGoogle: string | undefined;
  try {
    const redirectUri = new URL(
      "/api/auth/google/callback",
      request.url,
    ).toString();

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
      cache: "no-store",
    });

    if (!tokenRes.ok) {
      return redirigirConError(request, "google_error");
    }

    const tokens = (await tokenRes.json()) as { access_token?: string };
    if (!tokens.access_token) {
      return redirigirConError(request, "google_error");
    }

    const userRes = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
        cache: "no-store",
      },
    );

    if (!userRes.ok) {
      return redirigirConError(request, "google_error");
    }

    const profile = (await userRes.json()) as {
      email?: string;
      email_verified?: boolean;
    };

    if (!profile.email || profile.email_verified === false) {
      return redirigirConError(request, "google_error");
    }

    emailGoogle = profile.email;
    const clave = claveFirma();
    const perfil = await servicio.iniciarPorEmail(profile.email);

    const response = NextResponse.redirect(new URL("/inicio", request.url));
    response.cookies.delete(OAUTH_STATE_COOKIE);
    response.cookies.set(nombreCookie, firmarSesion(perfil.sesion.id, clave), {
      ...opcionesCookie,
      secure: request.nextUrl.protocol === "https:",
    });
    return response;
  } catch (error) {
    if (error instanceof SesionInvalida) {
      return redirigirConError(request, "google_no_registrado", emailGoogle);
    }
    return redirigirConError(request, "google_error");
  }
}
