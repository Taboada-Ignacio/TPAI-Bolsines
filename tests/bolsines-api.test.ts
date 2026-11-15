import { beforeEach, expect, it, vi } from "vitest";
import * as coleccion from "@/app/api/bolsines/route";
import * as recurso from "@/app/api/bolsines/[id]/route";
import { Prisma } from "../prisma/generated/client";

const db = vi.hoisted(() => ({
  bolsin: {
    create: vi.fn(),
    findMany: vi.fn(),
    findUnique: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  cambioEstadoBolsin: { deleteMany: vi.fn() },
  empleado: { findUnique: vi.fn() },
  estado: { findUnique: vi.fn() },
  comisionMedica: { findUnique: vi.fn() },
  $transaction: vi.fn(),
}));
vi.mock("@/infrastructure/prisma", () => ({ getPrisma: () => db }));

const url = "http://localhost/api/bolsines";
const estados = [
  "Creado",
  "Cerrado",
  "Enviado",
  "RecibidoEnCMDestino",
  "DeBaja",
];
const datos = {
  fecha: "2026-11-15T12:00:00.000Z",
  numeroBolsin: 1001,
  numeroPrecinto: 50001,
  peso: 850.5,
  cmOrigenId: 2,
  cmDestinoId: 3,
};
const alta = { ...datos, estadoId: 4, responsableCEId: 5 };
const id = 6;
const comision = (id: number) => ({
  id,
  codigo: `CM-${id}`,
  nombre: "Comisión ficticia",
  direccion: "Sede ficticia",
  email: "cm@example.com",
  telefono: "0000000000",
});
const estado = {
  id: alta.estadoId,
  nombre: "Enviado",
  ambito: "BOLSIN",
  descripcion: "Enviado",
};
const responsableCE = {
  id: alta.responsableCEId,
  nombre: "Ana",
  apellido: "Pérez",
};
const cambio = {
  id: 7,
  fechaHoraInicio: new Date(),
  fechaHoraFin: null,
  estado: { id: estado.id, nombre: estado.nombre },
  responsableCE,
};
const fila = {
  id,
  fecha: new Date(datos.fecha),
  numeroBolsin: datos.numeroBolsin,
  numeroPrecinto: datos.numeroPrecinto,
  peso: datos.peso,
  cmOrigen: comision(datos.cmOrigenId),
  cmDestino: comision(datos.cmDestinoId),
  cambiosEstado: [cambio],
};
const contexto = (valor = String(id)) => ({
  params: Promise.resolve({ id: valor }),
});
const solicitud = (method: string, body: unknown) =>
  new Request(url, { method, body: JSON.stringify(body) });
const prismaError = (code: string) =>
  new Prisma.PrismaClientKnownRequestError("Detalle interno", {
    code,
    clientVersion: "7",
  });

beforeEach(() => {
  vi.resetAllMocks();
  db.comisionMedica.findUnique.mockImplementation(async ({ where }) =>
    comision(where.id),
  );
  db.estado.findUnique.mockResolvedValue(estado);
  db.empleado.findUnique.mockResolvedValue({
    ...responsableCE,
    email: "ana@example.com",
    usuario: { nombre: "ana", contrasena: "demo" },
    rol: { nombre: "Encargado", descripcion: "Bolsines" },
    comisionMedica: fila.cmOrigen,
  });
  db.bolsin.findUnique.mockImplementation(async ({ where }) =>
    where.id === id ? fila : null,
  );
  db.bolsin.create.mockResolvedValue(fila);
  db.bolsin.update.mockResolvedValue(fila);
  db.$transaction.mockImplementation((operacion) => operacion(db));
});

it.each(estados)(
  "acepta %s y crea el cambio en la misma escritura",
  async (nombre) => {
    db.estado.findUnique.mockResolvedValue({ ...estado, nombre });
    db.bolsin.create.mockResolvedValue({
      ...fila,
      cambiosEstado: [{ estado: { id: estado.id, nombre } }],
    });
    const antes = Date.now();
    const respuesta = await coleccion.POST(solicitud("POST", alta));
    expect(respuesta.status).toBe(201);
    expect((await respuesta.json()).estadoActual).toEqual({
      id: estado.id,
      nombre,
    });
    const escritura = db.bolsin.create.mock.calls[0][0].data;
    expect(escritura).toMatchObject({
      fecha: new Date(datos.fecha),
      cmOrigen: { connect: { id: datos.cmOrigenId } },
      cmDestino: { connect: { id: datos.cmDestinoId } },
      cambiosEstado: {
        create: {
          fechaHoraFin: null,
          estado: { connect: { id: alta.estadoId, ambito: "BOLSIN" } },
          responsableCE: { connect: { id: alta.responsableCEId } },
        },
      },
    });
    expect(
      escritura.cambiosEstado.create.fechaHoraInicio.getTime(),
    ).toBeGreaterThanOrEqual(antes);
  },
);

it.each([
  { fecha: "2026-02-30T00:00:00Z" },
  { numeroBolsin: null },
  { numeroPrecinto: null },
  { cmOrigenId: 0 },
])("rechaza un alta inválida %j", async (ajuste) => {
  expect(
    (await coleccion.POST(solicitud("POST", { ...alta, ...ajuste }))).status,
  ).toBe(400);
  expect(db.bolsin.create).not.toHaveBeenCalled();
});

it.each(["comisionMedica", "estado", "empleado"] as const)(
  "devuelve 404 sin insertar cuando falta %s",
  async (asociacion) => {
    db[asociacion].findUnique.mockResolvedValue(null);
    expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(404);
    expect(db.bolsin.create).not.toHaveBeenCalled();
  },
);

it("rechaza estados de otro ámbito", async () => {
  db.estado.findUnique.mockResolvedValue({ ...estado, ambito: "OTRO" });
  expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(400);
  expect(db.bolsin.create).not.toHaveBeenCalled();
});

it("detecta el duplicado por origen y número antes de escribir", async () => {
  db.bolsin.findUnique.mockResolvedValue({ id: id + 1 });
  expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(409);
  expect(db.bolsin.findUnique).toHaveBeenCalledWith({
    where: {
      cmOrigenId_numeroBolsin: {
        cmOrigenId: datos.cmOrigenId,
        numeroBolsin: datos.numeroBolsin,
      },
    },
    select: { id: true },
  });
  expect(db.bolsin.create).not.toHaveBeenCalled();
});

it.each([
  ["P2002", 409],
  ["P2025", 404],
] as const)(
  "propaga %s al fallar la escritura anidada",
  async (codigo, status) => {
    db.bolsin.create.mockRejectedValue(prismaError(codigo));
    expect((await coleccion.POST(solicitud("POST", alta))).status).toBe(status);
    expect(db.bolsin.create).toHaveBeenCalledTimes(1);
  },
);

it("lista por ID, selecciona solo el cambio vigente y admite lista vacía", async () => {
  db.bolsin.findMany.mockResolvedValueOnce([fila]).mockResolvedValueOnce([]);
  expect(await (await coleccion.GET()).json()).toMatchObject([
    { id, estadoActual: cambio.estado },
  ]);
  expect(await (await coleccion.GET()).json()).toEqual([]);
  expect(db.bolsin.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      orderBy: { id: "asc" },
      select: expect.objectContaining({
        cambiosEstado: expect.objectContaining({
          where: { fechaHoraFin: null },
          orderBy: [{ fechaHoraInicio: "desc" }, { id: "desc" }],
          take: 1,
        }),
      }),
    }),
  );
});

it("devuelve el historial ordenado y el último estado abierto", async () => {
  const anterior = {
    ...cambio,
    id: cambio.id - 1,
    fechaHoraFin: new Date(),
    estado: { id: estado.id - 1, nombre: "Creado" },
  };
  db.bolsin.findUnique.mockResolvedValue({
    ...fila,
    cambiosEstado: [anterior, cambio],
  });
  const respuesta = await recurso.GET(new Request(url), contexto());
  expect(respuesta.status).toBe(200);
  expect(await respuesta.json()).toMatchObject({
    id,
    cmOrigen: { id: datos.cmOrigenId },
    cmDestino: { id: datos.cmDestinoId },
    estadoActual: cambio.estado,
    cambiosEstado: [
      expect.objectContaining({ id: anterior.id }),
      expect.objectContaining({ id: cambio.id, responsableCE }),
    ],
  });
  expect(db.bolsin.findUnique).toHaveBeenCalledWith(
    expect.objectContaining({
      select: expect.objectContaining({
        cambiosEstado: expect.objectContaining({
          orderBy: [{ fechaHoraInicio: "asc" }, { id: "asc" }],
        }),
      }),
    }),
  );
});

it("distingue un ID inválido de un bolsín inexistente", async () => {
  expect((await recurso.GET(new Request(url), contexto("0"))).status).toBe(400);
  expect(
    (await recurso.GET(new Request(url), contexto(String(id + 1)))).status,
  ).toBe(404);
});

it("modifica los atributos y ambas comisiones sin escribir el historial", async () => {
  const edicion = {
    ...datos,
    numeroPrecinto: 50002,
    cmOrigenId: datos.cmDestinoId,
    cmDestinoId: datos.cmOrigenId,
    estadoId: 50,
  };
  db.bolsin.update.mockResolvedValue({
    ...fila,
    numeroPrecinto: edicion.numeroPrecinto,
  });
  const respuesta = await recurso.PUT(solicitud("PUT", edicion), contexto());
  expect(respuesta.status).toBe(200);
  expect(await respuesta.json()).toMatchObject({
    numeroPrecinto: edicion.numeroPrecinto,
    estadoActual: cambio.estado,
  });
  expect(db.bolsin.update.mock.calls[0][0].data).toEqual({
    fecha: new Date(datos.fecha),
    numeroBolsin: datos.numeroBolsin,
    numeroPrecinto: edicion.numeroPrecinto,
    peso: datos.peso,
    cmOrigen: { connect: { id: edicion.cmOrigenId } },
    cmDestino: { connect: { id: edicion.cmDestinoId } },
  });
});

it("rechaza edición incompleta, inexistencia y duplicados", async () => {
  expect((await recurso.PUT(solicitud("PUT", {}), contexto())).status).toBe(
    400,
  );
  expect(
    (await recurso.PUT(solicitud("PUT", datos), contexto(String(id + 1))))
      .status,
  ).toBe(404);
  db.bolsin.update.mockRejectedValue(prismaError("P2002"));
  expect((await recurso.PUT(solicitud("PUT", datos), contexto())).status).toBe(
    409,
  );
});

it("borra solo el historial del bolsín y el bolsín dentro de una transacción", async () => {
  const respuesta = await recurso.DELETE(new Request(url), contexto());
  expect(respuesta.status).toBe(204);
  expect(await respuesta.text()).toBe("");
  expect(db.$transaction).toHaveBeenCalledTimes(1);
  expect(db.cambioEstadoBolsin.deleteMany).toHaveBeenCalledWith({
    where: { bolsinId: id },
  });
  expect(db.bolsin.delete).toHaveBeenCalledWith({ where: { id } });
  expect(
    db.cambioEstadoBolsin.deleteMany.mock.invocationCallOrder[0],
  ).toBeLessThan(db.bolsin.delete.mock.invocationCallOrder[0]);
});

it.each([
  ["P2003", 409],
  ["P2025", 404],
] as const)(
  "propaga %s fuera de la transacción para que Prisma revierta el historial",
  async (codigo, status) => {
    const error = prismaError(codigo);
    db.bolsin.delete.mockRejectedValue(error);
    db.$transaction.mockImplementation(async (operacion) => {
      const resultado = operacion(db);
      await expect(resultado).rejects.toBe(error);
      return resultado;
    });
    expect((await recurso.DELETE(new Request(url), contexto())).status).toBe(
      status,
    );
  },
);
