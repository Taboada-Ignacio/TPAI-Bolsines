import { NextRequest } from "next/server";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { POST as login } from "@/app/api/auth/login/route";
import { GET as me } from "@/app/api/auth/me/route";
import { POST as logout } from "@/app/api/auth/logout/route";
import { GET as limpiarSesion } from "@/app/api/auth/limpiar-sesion/route";
import { Sesion } from "@/domain/Sesion";
import { Usuario } from "@/domain/Usuario";
import { Empleado } from "@/domain/Empleado";
import { Rol } from "@/domain/Rol";
import { ComisionMedica } from "@/domain/ComisionMedica";

const db = vi.hoisted(() => ({
  usuario: { findUnique: vi.fn() },
  empleado: { findUnique: vi.fn() },
  sesion: { create: vi.fn(), findUnique: vi.fn(), updateMany: vi.fn() },
}));
vi.mock("@/persistence/prisma", () => ({ getPrisma: () => db }));

const credenciales = { nombre: "bolsines.demo", contrasena: "123456" };
const usuario = { id: 31, ...credenciales };
const rol = {
  id: 21,
  nombre: "Encargado de Bolsines",
  descripcion: "Bolsines",
};
const comision = {
  id: 42,
  codigo: "CM-CBA",
  nombre: "Córdoba",
  direccion: "Sede",
  telefono: "0000000000",
  email: "cm@example.com",
};
const empleado = {
  id: 19,
  nombre: "Nicolás",
  apellido: "Rodríguez",
  email: "bolsines.demo@example.com",
  usuario,
  rolId: rol.id,
  comisionMedicaId: comision.id,
  rol,
  comisionMedica: comision,
};

function solicitud(ruta: string, body?: unknown, cookie?: string) {
  return new NextRequest(`http://localhost/api/auth/${ruta}`, {
    method: ruta === "me" ? "GET" : "POST",
    headers: cookie ? { cookie } : undefined,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

beforeEach(() => {
  vi.resetAllMocks();
  vi.stubEnv(
    "SESSION_SIGNING_KEY",
    "clave-de-prueba-no-usar-en-entornos-reales",
  );
  db.usuario.findUnique.mockResolvedValue(usuario);
  db.empleado.findUnique.mockResolvedValue(empleado);
  db.sesion.create.mockResolvedValue({ id: 73 });
});

afterEach(() => vi.unstubAllEnvs());

it("reconoce la identidad de dominio por el nombre único, sin comparar contraseñas", () => {
  const u = new Usuario(credenciales.nombre, credenciales.contrasena);
  const sesion = new Sesion(new Date(), null, u);
  const e = new Empleado(
    empleado.nombre,
    empleado.apellido,
    empleado.email,
    u,
    new Rol(rol.nombre, rol.descripcion),
    new ComisionMedica(
      comision.codigo,
      comision.direccion,
      comision.email,
      comision.nombre,
      comision.telefono,
    ),
  );
  expect(sesion.getUsuario()).toBe(u);
  expect(e.esTuUsuario(u)).toBe(true);
  expect(e.esTuUsuario(new Usuario("otro", credenciales.contrasena))).toBe(
    false,
  );
  expect(e.esTuUsuario(new Usuario(credenciales.nombre, "otra"))).toBe(true);
});

it("persiste la sesión abierta y entrega una cookie firmada; me y logout respetan el cierre", async () => {
  const antes = Date.now();
  const respuesta = await login(solicitud("login", credenciales));
  expect(respuesta.status).toBe(200);
  const perfil = await respuesta.json();
  expect(perfil).toEqual({
    usuario: { id: usuario.id, nombre: usuario.nombre },
    empleado: {
      id: empleado.id,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
    },
    rol: { id: rol.id, nombre: rol.nombre },
    comisionMedica: {
      id: comision.id,
      codigo: comision.codigo,
      nombre: comision.nombre,
    },
    sesion: { id: 73, fechaHoraInicio: expect.any(String) },
  });
  expect(db.usuario.findUnique).toHaveBeenCalledWith({
    where: { nombre: usuario.nombre },
  });
  const inicio = new Date(perfil.sesion.fechaHoraInicio);
  expect(inicio.getTime()).toBeGreaterThanOrEqual(antes);
  expect(inicio.getTime()).toBeLessThanOrEqual(Date.now());
  expect(db.sesion.create).toHaveBeenCalledWith({
    data: {
      usuarioId: usuario.id,
      fechaHoraInicio: inicio,
      fechaHoraFin: null,
    },
    select: { id: true },
  });
  const setCookie = respuesta.headers.get("set-cookie")!;
  expect(setCookie).toContain("HttpOnly");
  expect(setCookie).toContain("SameSite=lax");
  const cookie = setCookie.split(";")[0];
  expect(cookie).toMatch(/^bolsines_sesion=73\.[a-f0-9]{64}$/);
  db.sesion.findUnique
    .mockResolvedValueOnce({
      usuarioId: usuario.id,
      usuario,
      fechaHoraInicio: inicio,
      fechaHoraFin: null,
    })
    .mockResolvedValueOnce(null);
  expect(await (await me(solicitud("me", undefined, cookie))).json()).toEqual(
    perfil,
  );
  db.sesion.updateMany.mockResolvedValue({ count: 1 });
  const cierre = await logout(solicitud("logout", undefined, cookie));
  expect(cierre.status).toBe(204);
  expect(cierre.headers.get("set-cookie")).toContain("Max-Age=0");
  expect(db.sesion.updateMany).toHaveBeenCalledWith({
    where: { id: 73, fechaHoraFin: null },
    data: { fechaHoraFin: expect.any(Date) },
  });
  expect((await me(solicitud("me", undefined, cookie))).status).toBe(401);
  expect(db.sesion.findUnique).toHaveBeenCalledWith(
    expect.objectContaining({ where: { id: 73, fechaHoraFin: null } }),
  );
});

it.each([null, { ...usuario, contrasena: "distinta" }])(
  "rechaza credenciales inválidas sin persistir sesión",
  async (registro) => {
    db.usuario.findUnique.mockResolvedValue(registro);
    expect((await login(solicitud("login", credenciales))).status).toBe(401);
    expect(db.sesion.create).not.toHaveBeenCalled();
  },
);

it("rechaza campos faltantes y cookies ausentes, numéricas o adulteradas", async () => {
  expect(
    (await login(solicitud("login", { nombre: usuario.nombre }))).status,
  ).toBe(400);
  const respuesta = await login(solicitud("login", credenciales));
  const cookie = respuesta.headers.get("set-cookie")!.split(";")[0];
  for (const valor of [
    undefined,
    "bolsines_sesion=73",
    cookie.replace("=73.", "=74."),
  ]) {
    expect((await me(solicitud("me", undefined, valor))).status).toBe(401);
  }
  expect(db.sesion.findUnique).not.toHaveBeenCalled();
});

it("no inicia sesión cuando falta el empleado o la clave de firma", async () => {
  db.empleado.findUnique.mockResolvedValueOnce(null);
  expect((await login(solicitud("login", credenciales))).status).toBe(401);
  vi.stubEnv("SESSION_SIGNING_KEY", "");
  expect((await login(solicitud("login", credenciales))).status).toBe(500);
  expect(db.sesion.create).not.toHaveBeenCalled();
});

it("limpia la cookie de sesión y redirige a /login", async () => {
  const respuesta = await limpiarSesion(
    new NextRequest("http://localhost/api/auth/limpiar-sesion"),
  );
  expect(respuesta.status).toBe(307);
  expect(respuesta.headers.get("location")).toBe("http://localhost/login");
  expect(respuesta.headers.get("cache-control")).toBe("no-store");
  expect(respuesta.headers.get("set-cookie")).toContain("bolsines_sesion=;");
  expect(respuesta.headers.get("set-cookie")).toContain("Max-Age=0");
});
