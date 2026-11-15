import type { Empleado } from "@/domain/Empleado";
import {
  mensajeUsuarioDuplicado,
  type DatosEmpleado,
  type RepositorioEmpleado,
} from "@/domain/RepositorioEmpleado";
import type { Prisma } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const select = {
  id: true,
  nombre: true,
  apellido: true,
  email: true,
  usuario: { select: { id: true, nombre: true } },
  rol: { select: { id: true, nombre: true } },
  comisionMedica: { select: { id: true, codigo: true, nombre: true } },
} satisfies Prisma.EmpleadoSelect;

const conflicto = "La operación entra en conflicto con un registro existente.";

function asociar({
  rolId,
  comisionMedicaId,
}: Pick<DatosEmpleado, "rolId" | "comisionMedicaId">) {
  return {
    rol: { connect: { id: rolId } },
    comisionMedica: { connect: { id: comisionMedicaId } },
  };
}

export class EmpleadoRepositoryPrisma implements RepositorioEmpleado {
  async existeNombreUsuario(nombre: string) {
    return (
      (await getPrisma().usuario.findUnique({
        where: { nombre },
        select: { id: true },
      })) !== null
    );
  }

  crear(
    empleado: Empleado,
    asociaciones: Pick<DatosEmpleado, "rolId" | "comisionMedicaId">,
  ) {
    const usuario = empleado.getUsuario();
    return escrituraCatalogo(
      () =>
        getPrisma().empleado.create({
          data: {
            nombre: empleado.getNombre(),
            apellido: empleado.getApellido(),
            email: empleado.getEmail(),
            usuario: {
              create: {
                nombre: usuario.getNombre(),
                contrasena: usuario.getContrasena(),
              },
            },
            ...asociar(asociaciones),
          },
          select,
        }),
      mensajeUsuarioDuplicado,
    );
  }

  listar() {
    return getPrisma().empleado.findMany({ orderBy: { id: "asc" }, select });
  }

  buscarPorId(id: number) {
    return getPrisma().empleado.findUnique({ where: { id }, select });
  }

  actualizar(id: number, datos: DatosEmpleado) {
    const { nombre, apellido, email } = datos;
    return escrituraCatalogo(
      () =>
        getPrisma().empleado.update({
          where: { id },
          data: { nombre, apellido, email, ...asociar(datos) },
          select,
        }),
      conflicto,
    );
  }

  eliminar(id: number): Promise<void> {
    return escrituraCatalogo(
      () =>
        getPrisma().$transaction(async (tx) => {
          const { usuarioId } = await tx.empleado.delete({
            where: { id },
            select: { usuarioId: true },
          });
          await tx.usuario.delete({ where: { id: usuarioId } });
        }),
      conflicto,
    );
  }
}
