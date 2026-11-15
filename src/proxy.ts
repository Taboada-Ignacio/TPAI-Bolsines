import { NextResponse, type NextRequest } from "next/server";
import {
  parseSessionCookie,
  SESSION_COOKIE_NAME,
} from "@/services/auth/session-cookie";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rawCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const hasSession = parseSessionCookie(rawCookie) !== null;

  if (!hasSession && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (hasSession && pathname === "/login") {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|models/|api/auth/).*)"],
};
