import type { RepositorioSesion } from "@/domain/RepositorioSesion";
import { Usuario } from "@/domain/Usuario";
import { Empleado } from "@/domain/Empleado";
import { Rol } from "@/domain/Rol";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Sesion } from "@/domain/Sesion";
import { getPrisma } from "./prisma";

export class SesionRepositoryPrisma implements RepositorioSesion {
  async buscarUsuario(nombre: string) {
    const fila = await getPrisma().usuario.findUnique({ where: { nombre } });
    return fila
      ? { id: fila.id, usuario: new Usuario(fila.nombre, fila.contrasena) }
      : null;
  }

  async buscarEmpleado(usuarioId: number) {
    const fila = await getPrisma().empleado.findUnique({
      where: { usuarioId },
      include: {
        usuario: { select: { nombre: true } },
        rol: true,
        comisionMedica: true,
      },
    });
    if (!fila) return null;
    const cm = fila.comisionMedica;
    return {
      id: fila.id,
      rolId: fila.rolId,
      comisionMedicaId: fila.comisionMedicaId,
      empleado: new Empleado(
        fila.nombre,
        fila.apellido,
        fila.email,
        new Usuario(fila.usuario.nombre, ""),
        new Rol(fila.rol.nombre, fila.rol.descripcion),
        new ComisionMedica(
          cm.codigo,
          cm.direccion,
          cm.email,
          cm.nombre,
          cm.telefono,
        ),
      ),
    };
  }

  async crear(usuarioId: number, sesion: Sesion) {
    const fila = await getPrisma().sesion.create({
      data: {
        usuarioId,
        fechaHoraInicio: sesion.getFechaHoraInicio(),
        fechaHoraFin: sesion.getFechaHoraFin(),
      },
      select: { id: true },
    });
    return fila.id;
  }

  async buscarAbierta(id: number) {
    const fila = await getPrisma().sesion.findUnique({
      where: { id, fechaHoraFin: null },
      include: { usuario: { select: { nombre: true } } },
    });
    return fila
      ? {
          usuarioId: fila.usuarioId,
          sesion: new Sesion(
            fila.fechaHoraInicio,
            fila.fechaHoraFin,
            new Usuario(fila.usuario.nombre, ""),
          ),
        }
      : null;
  }

  async cerrar(id: number, fechaHoraFin: Date) {
    const { count } = await getPrisma().sesion.updateMany({
      where: { id, fechaHoraFin: null },
      data: { fechaHoraFin },
    });
    return count === 1;
  }
}
