import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { config, proxy } from "@/proxy";
import {
  serializeSessionCookie,
  SESSION_COOKIE_NAME,
} from "@/services/auth/session-cookie";

const VALID_SESSION = serializeSessionCookie({
  sesion: { fechaHoraInicio: "2026-11-15T03:00:00.000Z" },
  empleado: {
    nombre: "Marcelo",
    apellido: "Gómez",
    rol: { nombre: "Encargado de Bolsines" },
    comisionMedica: { codigo: "COR", nombre: "CM Córdoba" },
  },
});

describe("proxy.ts", () => {
  it("redirige a /login cuando no hay cookie en una ruta protegida", () => {
    const request = new NextRequest("http://localhost/inicio");
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/login");
  });

  it("permite /login cuando no hay cookie", () => {
    const request = new NextRequest("http://localhost/login");
    const response = proxy(request);
    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
  });

  it("redirige a /inicio cuando ya hay cookie válida en /login", () => {
    const request = new NextRequest("http://localhost/login", {
      headers: {
        cookie: `${SESSION_COOKIE_NAME}=${VALID_SESSION}`,
      },
    });
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/inicio");
  });

  it("permite /inicio cuando hay cookie válida", () => {
    const request = new NextRequest("http://localhost/inicio", {
      headers: {
        cookie: `${SESSION_COOKIE_NAME}=${VALID_SESSION}`,
      },
    });
    const response = proxy(request);
    expect(response.status).toBe(200);
  });

  it("excluye estáticos, models/ y api/auth/ en el matcher", () => {
    const pattern = config.matcher[0];
    // Convert Next.js negative lookahead matcher to RegExp check
    const regex = new RegExp(`^${pattern}$`);
    expect(regex.test("/inicio")).toBe(true);
    expect(regex.test("/login")).toBe(true);
    expect(regex.test("/_next/static/chunk.js")).toBe(false);
    expect(regex.test("/models/bolsin-poster.webp")).toBe(false);
    expect(regex.test("/api/auth/login")).toBe(false);
  });
});
