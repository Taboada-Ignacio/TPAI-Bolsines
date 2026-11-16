import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { config, proxy } from "@/proxy";
import {
  SESSION_COOKIE_NAME,
  signSessionId,
} from "@/services/auth/session-cookie";

const SIGNING_KEY = "clave-de-prueba-no-usar-en-entornos-reales";

describe("proxy.ts", () => {
  beforeEach(() => {
    vi.stubEnv("SESSION_SIGNING_KEY", SIGNING_KEY);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("redirige a /login cuando no hay cookie en una ruta protegida", () => {
    const request = new NextRequest("http://localhost/inicio");
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/login");
  });

  it("redirige a /login cuando la cookie está adulterada", () => {
    const signed = signSessionId(73, SIGNING_KEY);
    const request = new NextRequest("http://localhost/inicio", {
      headers: {
        cookie: `${SESSION_COOKIE_NAME}=${signed.replace("73.", "74.")}`,
      },
    });
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

  it("redirige /empleados y /perfil a /login cuando no hay cookie", () => {
    for (const ruta of ["/empleados", "/perfil"]) {
      const request = new NextRequest(`http://localhost${ruta}`);
      const response = proxy(request);
      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe("http://localhost/login");
    }
  });

  it("redirige a /inicio cuando ya hay cookie válida en /login", () => {
    const signed = signSessionId(73, SIGNING_KEY);
    const request = new NextRequest("http://localhost/login", {
      headers: {
        cookie: `${SESSION_COOKIE_NAME}=${signed}`,
      },
    });
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/inicio");
  });

  it("permite /inicio cuando hay cookie válida", () => {
    const signed = signSessionId(73, SIGNING_KEY);
    const request = new NextRequest("http://localhost/inicio", {
      headers: {
        cookie: `${SESSION_COOKIE_NAME}=${signed}`,
      },
    });
    const response = proxy(request);
    expect(response.status).toBe(200);
  });

  it("excluye estáticos, .well-known, favicon, models/ y api/ en el matcher y en proxy()", () => {
    const pattern = config.matcher[0];
    const regex = new RegExp(`^${pattern}$`);
    expect(regex.test("/inicio")).toBe(true);
    expect(regex.test("/login")).toBe(true);
    expect(regex.test("/_next/static/chunk.js")).toBe(false);
    expect(regex.test("/favicon.ico")).toBe(false);
    expect(
      regex.test("/.well-known/appspecific/com.chrome.devtools.json"),
    ).toBe(false);
    expect(regex.test("/models/bolsin-poster.webp")).toBe(false);
    expect(regex.test("/maplibre/maplibre-gl-worker.mjs")).toBe(false);
    expect(regex.test("/seguimiento/rutas-nacionales.geojson")).toBe(false);
    expect(regex.test("/api/auth/login")).toBe(false);
    expect(regex.test("/api/comisiones-medicas")).toBe(false);

    for (const bypassed of [
      "/favicon.ico",
      "/.well-known/appspecific/com.chrome.devtools.json",
      "/maplibre/maplibre-gl-worker.mjs",
      "/seguimiento/rutas-nacionales.geojson",
    ]) {
      const response = proxy(new NextRequest(`http://localhost${bypassed}`));
      expect(response.status).toBe(200);
      expect(response.headers.get("location")).toBeNull();
    }
  });
});
