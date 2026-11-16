import { describe, expect, it } from "vitest";
import { crearPrismaEnMemoria } from "@/infrastructure/pg-mem-prisma";

describe("pg-mem + Prisma", () => {
  it("inicializa tablas, seeds y soporta login, registro y actualización de perfil", async () => {
    const prisma = crearPrismaEnMemoria();

    const roles = await prisma.rol.findMany();
    const comisiones = await prisma.comisionMedica.findMany();
    expect(roles).toHaveLength(4);
    expect(comisiones).toHaveLength(24);

    const usuarioDemo = await prisma.usuario.findUnique({
      where: { nombre: "bolsines.demo" },
      include: { empleado: true },
    });
    expect(usuarioDemo?.contrasena).toBe("123456");
    expect(usuarioDemo?.empleado?.nombre).toBe("Nicolás");

    const sesion = await prisma.sesion.create({
      data: {
        usuarioId: usuarioDemo!.id,
        fechaHoraInicio: new Date(),
      },
    });
    expect(sesion.id).toBeGreaterThan(0);

    const nuevoUsuario = await prisma.usuario.create({
      data: { nombre: "sofia.test", contrasena: "secreto123" },
    });
    const nuevoEmpleado = await prisma.empleado.create({
      data: {
        nombre: "Sofía",
        apellido: "Acosta",
        email: "sofia@example.com",
        usuarioId: nuevoUsuario.id,
        rolId: roles[0]!.id,
        comisionMedicaId: comisiones[0]!.id,
      },
    });
    expect(nuevoEmpleado.nombre).toBe("Sofía");

    const actualizado = await prisma.empleado.update({
      where: { id: nuevoEmpleado.id },
      data: { nombre: "Sofía Belén" },
    });
    expect(actualizado.nombre).toBe("Sofía Belén");

    // Verificar creación de bolsín con cambio de estado anidado (usa transacción)
    const bolsinDirecto = await prisma.bolsin.create({
      data: {
        fecha: new Date("2026-11-15T00:00:00.000Z"),
        numeroBolsin: 9991,
        numeroPrecinto: 8881,
        peso: 2.5,
        cmOrigen: { connect: { id: comisiones[0]!.id } },
        cmDestino: { connect: { id: comisiones[1]!.id } },
        cambiosEstado: {
          create: {
            fechaHoraInicio: new Date(),
            fechaHoraFin: null,
            estado: { connect: { id: 1, ambito: "BOLSIN" } },
            responsableCE: { connect: { id: nuevoEmpleado.id } },
          },
        },
      },
      select: {
        id: true,
        fecha: true,
        numeroBolsin: true,
        numeroPrecinto: true,
        peso: true,
        cmOrigen: { select: { id: true, codigo: true, nombre: true } },
        cmDestino: { select: { id: true, codigo: true, nombre: true } },
        cambiosEstado: {
          where: { fechaHoraFin: null },
          orderBy: [{ fechaHoraInicio: "desc" }, { id: "desc" }],
          take: 1,
          select: { estado: { select: { id: true, nombre: true } } },
        },
      },
    });
    expect(bolsinDirecto.numeroBolsin).toBe(9991);
    expect(bolsinDirecto.cambiosEstado[0]?.estado.id).toBe(1);

    await prisma.$transaction(async (tx) => {
      await tx.cambioEstadoBolsin.deleteMany({
        where: { bolsinId: bolsinDirecto.id },
      });
      await tx.bolsin.delete({ where: { id: bolsinDirecto.id } });
    });

    await prisma.$disconnect();
  });
});
