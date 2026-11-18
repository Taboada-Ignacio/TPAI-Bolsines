import { Estado } from "@/domain/Estado";
import type { Registro, RepositorioCrud } from "@/domain/RepositorioCrud";
import type { Estado as FilaEstado } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const duplicado = "Ya existe un estado con ese nombre y ámbito.";

function datos(entidad: Estado) {
  return {
    nombre: entidad.getNombre(),
    descripcion: entidad.getDescripcion(),
    ambito: entidad.getAmbito(),
  };
}

function registro(fila: FilaEstado): Registro<Estado> {
  return {
    id: fila.id,
    entidad: new Estado(fila.nombre, fila.descripcion, fila.ambito),
  };
}

export class EstadoRepositoryPrisma implements RepositorioCrud<Estado> {
  async crear(entidad: Estado): Promise<Registro<Estado>> {
    const fila = await escrituraCatalogo(
      () => getPrisma().estado.create({ data: datos(entidad) }),
      duplicado,
    );
    return registro(fila);
  }

  async listar(): Promise<Registro<Estado>[]> {
    const filas = await getPrisma().estado.findMany({ orderBy: { id: "asc" } });
    return filas.map(registro);
  }

  async buscarPorId(id: number): Promise<Registro<Estado> | null> {
    const fila = await getPrisma().estado.findUnique({ where: { id } });
    return fila ? registro(fila) : null;
  }

  async actualizar(id: number, entidad: Estado): Promise<Registro<Estado>> {
    const fila = await escrituraCatalogo(
      () => getPrisma().estado.update({ where: { id }, data: datos(entidad) }),
      duplicado,
    );
    return registro(fila);
  }

  async eliminar(id: number): Promise<void> {
    await escrituraCatalogo(
      () => getPrisma().estado.delete({ where: { id } }),
      duplicado,
    );
  }
}
