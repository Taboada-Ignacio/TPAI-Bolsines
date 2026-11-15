import { beforeEach, describe, expect, it, vi } from "vitest";
import * as coleccion from "@/app/api/empleados/route";
import * as recurso from "@/app/api/empleados/[id]/route";
import { Prisma } from "../prisma/generated/client";

const db = vi.hoisted(() => ({
  empleado: {
    create: vi.fn(),
    findMany: vi.fn(),
    findUnique: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  usuario: { delete: vi.fn(), findUnique: vi.fn() },
  rol: { findUnique: vi.fn() },
  comisionMedica: { findUnique: vi.fn() },
  $transaction: vi.fn(),
}));
vi.mock("@/infrastructure/prisma", () => ({ getPrisma: () => db }));

const id = 23;
const rol = { id: 31, nombre: "Encargado", descripcion: "Bolsines" };
const comision = {
  id: 42,
  nombre: "Córdoba",
  codigo: "CM-CBA",
  email: "cm@example.com",
  direccion: "Sede ficticia",
  telefono: "0000000000",
};
const datos = {
  nombre: "Ana",
  apellido: "Pérez",
  email: "ana@example.com",
  rolId: rol.id,
  comisionMedicaId: comision.id,
};
const alta = { ...datos, usuario: { nombre: "ana", contrasena: " prueba " } };
const registro = {
  id,
  nombre: datos.nombre,
  apellido: datos.apellido,
  email: datos.email,
  usuario: { id: 54, nombre: "ana" },
  rol: { id: rol.id, nombre: rol.nombre },
  comisionMedica: {
    id: comision.id,
    codigo: comision.codigo,
    nombre: comision.nombre,
  },
};
const url = "http://localhost/api/empleados";
const contexto = (valor = String(id)) => ({
  params: Promise.resolve({ id: valor }),
});
const solicitud = (method: string, body: unknown) =>
  new Request(url, { method, body: JSON.stringify(body) });
const errorPrisma = (code: string) =>
  new Prisma.PrismaClientKnownRequestError("Detalle interno", {
    code,
    clientVersion: "7",
  });

beforeEach(() => {
  vi.resetAllMocks();
  db.usuario.findUnique.mockResolvedValue(null);
  db.rol.findUnique.mockResolvedValue(rol);
  db.comisionMedica.findUnique.mockResolvedValue(comision);
  db.empleado.create.mockResolvedValue(registro);
  db.empleado.findUnique.mockResolvedValue(registro);
  db.empleado.update.mockResolvedValue(registro);
  db.empleado.delete.mockResolvedValue({ usuarioId: registro.usuario.id });
  db.$transaction.mockImplementation((operacion) => operacion(db));
});

describe("API de empleados", () => {
  it("crea empleado y usuario con una escritura anidada y rechaza un nombre repetido", async () => {
    const primera = await coleccion.POST(solicitud("POST", alta));
    expect(primera.status).toBe(201);
    expect(await primera.json()).toEqual(registro);
    expect(db.empleado.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          usuario: { create: alta.usuario },
          rol: { connect: { id: rol.id } },
          comisionMedica: { connect: { id: comision.id } },
        }),
        select: expect.objectContaining({
          usuario: { select: { id: true, nombre: true } },
        }),
      }),
    );
    db.usuario.findUnique.mockResolvedValue({ id: registro.usuario.id });
    expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(409);
    expect(db.empleado.create).toHaveBeenCalledTimes(1);
  });

  it("traduce una violación UNIQUE concurrente sin crear el empleado por separado", async () => {
    db.empleado.create.mockRejectedValue(errorPrisma("P2002"));
    expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(409);
    expect(db.empleado.create).toHaveBeenCalledTimes(1);
  });

  it.each([
    { ...alta, email: "invalido" },
    { ...alta, rolId: 0 },
    { ...alta, usuario: { ...alta.usuario, contrasena: " " } },
  ])("rechaza un alta inválida", async (entrada) => {
    expect((await coleccion.POST(solicitud("POST", entrada))).status).toBe(400);
    expect(db.empleado.create).not.toHaveBeenCalled();
  });

  it.each(["rol", "comisionMedica"] as const)(
    "rechaza una asociación inexistente (%s)",
    async (asociacion) => {
      db[asociacion].findUnique.mockResolvedValue(null);
      expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(404);
      expect(db.empleado.create).not.toHaveBeenCalled();
      expect(
        (await recurso.PUT(solicitud("PUT", datos), contexto())).status,
      ).toBe(404);
      expect(db.empleado.update).not.toHaveBeenCalled();
    },
  );

  it("traduce un fallo de la escritura anidada sin reintentar por separado", async () => {
    db.empleado.create.mockRejectedValue(errorPrisma("P2025"));
    expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(404);
    expect(db.empleado.create).toHaveBeenCalledTimes(1);
  });

  it("lista empleados por ID y devuelve un arreglo vacío cuando corresponde", async () => {
    db.empleado.findMany
      .mockResolvedValueOnce([registro])
      .mockResolvedValueOnce([]);
    expect(await (await coleccion.GET()).json()).toEqual([registro]);
    expect(await (await coleccion.GET()).json()).toEqual([]);
    expect(db.empleado.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ orderBy: { id: "asc" } }),
    );
  });

  it("consulta el empleado por ID con sus asociaciones", async () => {
    const respuesta = await recurso.GET(new Request(url), contexto());
    expect(respuesta.status).toBe(200);
    expect(await respuesta.json()).toEqual(registro);
  });

  it.each(["0", "-1", "abc"])("rechaza el ID inválido %s", async (valor) => {
    expect((await recurso.GET(new Request(url), contexto(valor))).status).toBe(
      400,
    );
    expect(db.empleado.findUnique).not.toHaveBeenCalled();
  });

  it("devuelve 404 al consultar, actualizar o eliminar un empleado inexistente", async () => {
    db.empleado.findUnique.mockResolvedValue(null);
    db.empleado.delete.mockRejectedValue(errorPrisma("P2025"));
    expect((await recurso.GET(new Request(url), contexto())).status).toBe(404);
    expect(
      (await recurso.PUT(solicitud("PUT", datos), contexto())).status,
    ).toBe(404);
    expect((await recurso.DELETE(new Request(url), contexto())).status).toBe(
      404,
    );
    expect(db.usuario.delete).not.toHaveBeenCalled();
  });

  it("actualiza atributos y asociaciones sin escribir el usuario", async () => {
    const cambios = {
      ...datos,
      nombre: "Elena",
      rolId: rol.id + 1,
      comisionMedicaId: comision.id + 1,
    };
    db.rol.findUnique.mockResolvedValue({ ...rol, id: cambios.rolId });
    db.comisionMedica.findUnique.mockResolvedValue({
      ...comision,
      id: cambios.comisionMedicaId,
    });
    db.empleado.update.mockResolvedValue({
      ...registro,
      nombre: cambios.nombre,
      rol: { ...registro.rol, id: cambios.rolId },
      comisionMedica: {
        ...registro.comisionMedica,
        id: cambios.comisionMedicaId,
      },
    });
    const respuesta = await recurso.PUT(solicitud("PUT", cambios), contexto());
    expect(respuesta.status).toBe(200);
    expect((await respuesta.json()).usuario).toEqual(registro.usuario);
    expect(db.empleado.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id },
        data: {
          nombre: cambios.nombre,
          apellido: cambios.apellido,
          email: cambios.email,
          rol: { connect: { id: cambios.rolId } },
          comisionMedica: { connect: { id: cambios.comisionMedicaId } },
        },
      }),
    );
    expect(
      (await recurso.PUT(solicitud("PUT", { nombre: "" }), contexto())).status,
    ).toBe(400);
    expect(db.empleado.update).toHaveBeenCalledTimes(1);
  });

  it("elimina empleado y usuario dentro de una transacción y devuelve 204", async () => {
    const respuesta = await recurso.DELETE(new Request(url), contexto());
    expect(respuesta.status).toBe(204);
    expect(await respuesta.text()).toBe("");
    expect(db.$transaction).toHaveBeenCalledTimes(1);
    expect(db.empleado.delete).toHaveBeenCalledWith({
      where: { id },
      select: { usuarioId: true },
    });
    expect(db.usuario.delete).toHaveBeenCalledWith({
      where: { id: registro.usuario.id },
    });
  });

  it.each(["empleado", "usuario"] as const)(
    "propaga el fallo de %s fuera de la transacción y devuelve 409",
    async (entidad) => {
      const error = errorPrisma("P2003");
      db[entidad].delete.mockRejectedValue(error);
      db.$transaction.mockImplementation(async (operacion) => {
        const resultado = operacion(db);
        await expect(resultado).rejects.toBe(error);
        return resultado;
      });
      expect((await recurso.DELETE(new Request(url), contexto())).status).toBe(
        409,
      );
      expect(db.$transaction).toHaveBeenCalledTimes(1);
      if (entidad === "empleado")
        expect(db.usuario.delete).not.toHaveBeenCalled();
    },
  );
});
