import { Rol } from "@/domain/Rol";
import type { Registro, RepositorioCrud } from "@/domain/RepositorioCrud";
import type { Rol as FilaRol } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const duplicado = "Ya existe un rol con ese nombre.";

function datos(entidad: Rol) {
  return {
    nombre: entidad.getNombre(),
    descripcion: entidad.getDescripcion(),
  };
}

function registro(fila: FilaRol): Registro<Rol> {
  return {
    id: fila.id,
    entidad: new Rol(fila.nombre, fila.descripcion),
  };
}

export class RolRepositoryPrisma implements RepositorioCrud<Rol> {
  async crear(entidad: Rol): Promise<Registro<Rol>> {
    const fila = await escrituraCatalogo(
      () => getPrisma().rol.create({ data: datos(entidad) }),
      duplicado,
    );
    return registro(fila);
  }

  async listar(): Promise<Registro<Rol>[]> {
    const filas = await getPrisma().rol.findMany({ orderBy: { id: "asc" } });
    return filas.map(registro);
  }

  async buscarPorId(id: number): Promise<Registro<Rol> | null> {
    const fila = await getPrisma().rol.findUnique({ where: { id } });
    return fila ? registro(fila) : null;
  }

  async actualizar(id: number, entidad: Rol): Promise<Registro<Rol>> {
    const fila = await escrituraCatalogo(
      () => getPrisma().rol.update({ where: { id }, data: datos(entidad) }),
      duplicado,
    );
    return registro(fila);
  }

  async eliminar(id: number): Promise<void> {
    await escrituraCatalogo(
      () => getPrisma().rol.delete({ where: { id } }),
      duplicado,
    );
  }
}
