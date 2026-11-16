import { NextResponse, type NextRequest } from "next/server";
import {
  SESSION_COOKIE_NAME,
  verifySessionCookie,
} from "@/services/auth/session-cookie";

const PUBLIC_BYPASS_PREFIXES = [
  "/_next/",
  "/api/",
  "/models/",
  "/maplibre/",
  "/seguimiento/",
  "/.well-known/",
];

function shouldBypassProxy(pathname: string): boolean {
  if (pathname === "/favicon.ico") return true;
  return PUBLIC_BYPASS_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (shouldBypassProxy(pathname)) {
    return NextResponse.next();
  }

  const rawCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const hasSession = verifySessionCookie(rawCookie) !== null;

  if (!hasSession && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (hasSession && pathname === "/login") {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|\\.well-known/|models/|maplibre/|seguimiento/|api/).*)",
  ],
};
