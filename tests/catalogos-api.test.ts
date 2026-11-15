import { beforeEach, describe, expect, it, vi } from "vitest";
import * as comisionesPorId from "@/app/api/comisiones-medicas/[id]/route";
import * as comisiones from "@/app/api/comisiones-medicas/route";
import * as estadosPorId from "@/app/api/estados/[id]/route";
import * as estados from "@/app/api/estados/route";
import * as rolesPorId from "@/app/api/roles/[id]/route";
import * as roles from "@/app/api/roles/route";
import { Prisma } from "../prisma/generated/client";

const prisma = vi.hoisted(() => {
  function delegado() {
    return {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    };
  }
  return { rol: delegado(), comisionMedica: delegado(), estado: delegado() };
});

vi.mock("@/infrastructure/prisma", () => ({ getPrisma: () => prisma }));

const datosRol = { nombre: "Administrador", descripcion: "Rol administrativo" };
const datosComision = {
  codigo: "CM001",
  nombre: "Comisión Médica Córdoba",
  direccion: "Calle 123",
  email: "cordoba@example.com",
  telefono: "3511234567",
};
const datosEstado = {
  nombre: "En tránsito",
  descripcion: "En traslado",
  ambito: "BOLSIN",
};

function contexto(id = "7") {
  return { params: Promise.resolve({ id }) };
}

function solicitud(metodo: string, cuerpo?: string) {
  return new Request("http://localhost", {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: cuerpo,
  });
}

function errorPrisma(code: string) {
  return new Prisma.PrismaClientKnownRequestError(
    "Detalle privado de la base de datos",
    {
      code,
      clientVersion: "7.10.1",
    },
  );
}

beforeEach(() => vi.resetAllMocks());

describe.each([
  {
    ruta: "/api/roles",
    coleccion: roles,
    detalle: rolesPorId,
    db: prisma.rol,
    datos: datosRol,
  },
  {
    ruta: "/api/comisiones-medicas",
    coleccion: comisiones,
    detalle: comisionesPorId,
    db: prisma.comisionMedica,
    datos: datosComision,
  },
  {
    ruta: "/api/estados",
    coleccion: estados,
    detalle: estadosPorId,
    db: prisma.estado,
    datos: datosEstado,
  },
])("$ruta", ({ coleccion, detalle, db, datos }) => {
  const fila = { id: 7, ...datos };

  it("crea y devuelve 201 con el ID generado y los campos editables", async () => {
    db.create.mockResolvedValueOnce(fila);

    const respuesta = await coleccion.POST(
      solicitud("POST", JSON.stringify({ ...datos, id: 99 })),
    );

    expect(respuesta.status).toBe(201);
    expect(db.create).toHaveBeenCalledExactlyOnceWith({ data: datos });
    await expect(respuesta.json()).resolves.toEqual(fila);
  });

  it("lista por ID ascendente y devuelve 200", async () => {
    db.findMany.mockResolvedValueOnce([fila, { ...fila, id: 8 }]);

    const respuesta = await coleccion.GET();

    expect(respuesta.status).toBe(200);
    expect(db.findMany).toHaveBeenCalledExactlyOnceWith({
      orderBy: { id: "asc" },
    });
    await expect(respuesta.json()).resolves.toEqual([fila, { ...fila, id: 8 }]);
  });

  it("devuelve 200 y un arreglo vacío cuando la colección está vacía", async () => {
    db.findMany.mockResolvedValueOnce([]);

    const respuesta = await coleccion.GET();

    expect(respuesta.status).toBe(200);
    await expect(respuesta.json()).resolves.toEqual([]);
  });

  it("consulta por ID y devuelve 200 con el registro", async () => {
    db.findUnique.mockResolvedValueOnce(fila);

    const respuesta = await detalle.GET(solicitud("GET"), contexto());

    expect(respuesta.status).toBe(200);
    expect(db.findUnique).toHaveBeenCalledExactlyOnceWith({ where: { id: 7 } });
    await expect(respuesta.json()).resolves.toEqual(fila);
  });

  it("devuelve 404 al consultar, modificar o eliminar un ID inexistente", async () => {
    db.findUnique.mockResolvedValueOnce(null);
    db.update.mockRejectedValueOnce(errorPrisma("P2025"));
    db.delete.mockRejectedValueOnce(errorPrisma("P2025"));

    const respuestas = [
      await detalle.GET(solicitud("GET"), contexto()),
      await detalle.PUT(solicitud("PUT", JSON.stringify(datos)), contexto()),
      await detalle.DELETE(solicitud("DELETE"), contexto()),
    ];

    for (const respuesta of respuestas) {
      expect(respuesta.status).toBe(404);
      await expect(respuesta.json()).resolves.toEqual({
        error: "El registro solicitado no existe.",
      });
    }
  });

  it("actualiza todos los campos editables, conserva el ID y devuelve 200", async () => {
    const modificados = { ...datos, nombre: "  Modificado  " };
    const persistidos = { ...datos, nombre: "Modificado" };
    db.update.mockResolvedValueOnce({ id: 7, ...persistidos });

    const respuesta = await detalle.PUT(
      solicitud("PUT", JSON.stringify({ ...modificados, id: 99 })),
      contexto(),
    );

    expect(respuesta.status).toBe(200);
    expect(db.update).toHaveBeenCalledExactlyOnceWith({
      where: { id: 7 },
      data: persistidos,
    });
    await expect(respuesta.json()).resolves.toEqual({ id: 7, ...persistidos });
  });

  it("elimina únicamente el registro solicitado y devuelve 204 sin cuerpo", async () => {
    db.delete.mockResolvedValueOnce(fila);

    const respuesta = await detalle.DELETE(solicitud("DELETE"), contexto());

    expect(respuesta.status).toBe(204);
    expect(db.delete).toHaveBeenCalledExactlyOnceWith({ where: { id: 7 } });
    expect(respuesta.body).toBeNull();
  });

  it("devuelve 409 al crear o actualizar con la clave única duplicada", async () => {
    db.create.mockRejectedValueOnce(errorPrisma("P2002"));
    db.update.mockRejectedValueOnce(errorPrisma("P2002"));

    const respuestas = [
      await coleccion.POST(solicitud("POST", JSON.stringify(datos))),
      await detalle.PUT(solicitud("PUT", JSON.stringify(datos)), contexto()),
    ];

    for (const respuesta of respuestas) {
      expect(respuesta.status).toBe(409);
      await expect(respuesta.json()).resolves.toEqual({
        error: expect.stringMatching(/^Ya existe/),
      });
    }
  });

  it("devuelve 409 si una clave foránea impide la eliminación", async () => {
    db.delete.mockRejectedValueOnce(errorPrisma("P2003"));

    const respuesta = await detalle.DELETE(solicitud("DELETE"), contexto());

    expect(respuesta.status).toBe(409);
    await expect(respuesta.json()).resolves.toEqual({
      error: "El registro está en uso y no se puede eliminar.",
    });
  });

  it.each([
    ["JSON malformado", "{"],
    ["JSON vacío", ""],
    ["campos faltantes", JSON.stringify({ nombre: "Incompleto" })],
    ["campos en blanco", JSON.stringify({ ...datos, nombre: " \t " })],
    ["tipo incorrecto", JSON.stringify({ ...datos, nombre: 123 })],
  ])("devuelve 400 sin acceder a la base con %s", async (_caso, cuerpo) => {
    const alta = await coleccion.POST(solicitud("POST", cuerpo));
    const cambio = await detalle.PUT(solicitud("PUT", cuerpo), contexto());

    expect(alta.status).toBe(400);
    expect(cambio.status).toBe(400);
    expect(db.create).not.toHaveBeenCalled();
    expect(db.update).not.toHaveBeenCalled();
  });

  it.each(["-1", "0", "abc", "1.5", "1e2", "2147483648"])(
    "devuelve 400 para el ID %s sin consultar la base",
    async (id) => {
      const ruta = contexto(id);
      const respuestas = [
        await detalle.GET(solicitud("GET"), ruta),
        await detalle.PUT(solicitud("PUT", JSON.stringify(datos)), ruta),
        await detalle.DELETE(solicitud("DELETE"), ruta),
      ];

      expect(respuestas.map(({ status }) => status)).toEqual([400, 400, 400]);
      expect(db.findUnique).not.toHaveBeenCalled();
      expect(db.update).not.toHaveBeenCalled();
      expect(db.delete).not.toHaveBeenCalled();
    },
  );

  it("devuelve 500 sin exponer detalles internos para errores inesperados", async () => {
    db.findMany.mockRejectedValueOnce(
      new Error("Detalle privado de la base de datos"),
    );

    const respuesta = await coleccion.GET();

    expect(respuesta.status).toBe(500);
    await expect(respuesta.json()).resolves.toEqual({
      error: "Ocurrió un error interno.",
    });
  });
});

it("rechaza un correo de comisión médica inválido en POST y PUT", async () => {
  const cuerpo = JSON.stringify({ ...datosComision, email: "sin-arroba" });
  const alta = await comisiones.POST(solicitud("POST", cuerpo));
  const cambio = await comisionesPorId.PUT(
    solicitud("PUT", cuerpo),
    contexto(),
  );

  expect(alta.status).toBe(400);
  expect(cambio.status).toBe(400);
  expect(prisma.comisionMedica.create).not.toHaveBeenCalled();
  expect(prisma.comisionMedica.update).not.toHaveBeenCalled();
});

it("envía el mismo nombre de Estado con ámbitos distintos como registros independientes", async () => {
  const otroAmbito = { ...datosEstado, ambito: "OTRO_AMBITO" };
  prisma.estado.create
    .mockResolvedValueOnce({ id: 7, ...datosEstado })
    .mockResolvedValueOnce({ id: 8, ...otroAmbito });

  const primero = await estados.POST(
    solicitud("POST", JSON.stringify(datosEstado)),
  );
  const segundo = await estados.POST(
    solicitud("POST", JSON.stringify(otroAmbito)),
  );

  expect(primero.status).toBe(201);
  expect(segundo.status).toBe(201);
  expect(prisma.estado.create).toHaveBeenNthCalledWith(1, {
    data: datosEstado,
  });
  expect(prisma.estado.create).toHaveBeenNthCalledWith(2, { data: otroAmbito });
  await expect(segundo.json()).resolves.toEqual({ id: 8, ...otroAmbito });
});
