import { NextResponse } from "next/server";
import { loginRequestSchema } from "@/dtos/auth.dto";
import { authenticateMockUser } from "@/services/auth/mock-users";
import {
  SESSION_COOKIE_NAME,
  SESSION_COOKIE_OPTIONS,
  serializeSessionCookie,
} from "@/services/auth/session-cookie";

function simulateLatency(): Promise<void> {
  const delay = 600 + Math.floor(Math.random() * 300);
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ codigo: "DATOS_INVALIDOS" }, { status: 400 });
  }

  const parsed = loginRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ codigo: "DATOS_INVALIDOS" }, { status: 400 });
  }

  await simulateLatency();

  const outcome = authenticateMockUser(
    parsed.data.usuario,
    parsed.data.contrasena,
  );

  if (outcome.status === 200) {
    const response = NextResponse.json(outcome.data, { status: 200 });
    response.cookies.set(
      SESSION_COOKIE_NAME,
      serializeSessionCookie(outcome.data),
      SESSION_COOKIE_OPTIONS,
    );
    return response;
  }

  return NextResponse.json(
    { codigo: outcome.codigo },
    { status: outcome.status },
  );
}
