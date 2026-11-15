import { describe, expect, it } from "vitest";
import { POST as loginPost } from "@/app/api/auth/login/route";
import { POST as logoutPost } from "@/app/api/auth/logout/route";
import {
  parseSessionCookie,
  SESSION_COOKIE_NAME,
} from "@/services/auth/session-cookie";

function makeLoginRequest(body: unknown) {
  return new Request("http://localhost/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("API /api/auth/*", () => {
  it("devuelve 200 y setea cookie bolsines_sesion para mgomez / bolsines", async () => {
    const response = await loginPost(
      makeLoginRequest({ usuario: "mgomez", contrasena: "bolsines" }),
    );
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.empleado.nombre).toBe("Marcelo");
    expect(data.empleado.comisionMedica.codigo).toBe("COR");

    const cookie = response.cookies.get(SESSION_COOKIE_NAME);
    expect(cookie).toBeDefined();
    expect(cookie?.httpOnly).toBe(true);
    expect(cookie?.sameSite).toBe("lax");
    expect(cookie?.path).toBe("/");

    const parsed = parseSessionCookie(cookie?.value);
    expect(parsed?.empleado.apellido).toBe("Gómez");
  });

  it("devuelve 400 DATOS_INVALIDOS cuando el body no pasa Zod", async () => {
    const response = await loginPost(
      makeLoginRequest({ usuario: "", contrasena: "" }),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ codigo: "DATOS_INVALIDOS" });
  });

  it("devuelve 401 CREDENCIALES_INVALIDAS para credenciales incorrectas", async () => {
    const response = await loginPost(
      makeLoginRequest({ usuario: "mgomez", contrasena: "otra" }),
    );
    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ codigo: "CREDENCIALES_INVALIDAS" });
  });

  it("devuelve 503 ERROR_INTERNO para el usuario error", async () => {
    const response = await loginPost(
      makeLoginRequest({ usuario: "error", contrasena: "cualquiera" }),
    );
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ codigo: "ERROR_INTERNO" });
  });

  it("logout borra la cookie bolsines_sesion", async () => {
    const response = await logoutPost();
    expect(response.status).toBe(200);
    const cookie = response.cookies.get(SESSION_COOKIE_NAME);
    expect(cookie?.value).toBe("");
    expect(cookie?.maxAge).toBe(0);
  });
});
