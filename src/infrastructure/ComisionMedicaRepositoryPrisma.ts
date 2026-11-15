import { ComisionMedica } from "@/domain/ComisionMedica";
import type { Registro, RepositorioCrud } from "@/domain/RepositorioCrud";
import type { ComisionMedica as FilaComisionMedica } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const duplicado = "Ya existe una comisión médica con ese código.";

function datos(entidad: ComisionMedica) {
  return {
    codigo: entidad.getCodigo(),
    direccion: entidad.getDireccion(),
    email: entidad.getEmail(),
    nombre: entidad.getNombre(),
    telefono: entidad.getTelefono(),
  };
}

function registro(fila: FilaComisionMedica): Registro<ComisionMedica> {
  return {
    id: fila.id,
    entidad: new ComisionMedica(
      fila.codigo,
      fila.direccion,
      fila.email,
      fila.nombre,
      fila.telefono,
    ),
  };
}

export class ComisionMedicaRepositoryPrisma implements RepositorioCrud<ComisionMedica> {
  async crear(entidad: ComisionMedica): Promise<Registro<ComisionMedica>> {
    const fila = await escrituraCatalogo(
      () => getPrisma().comisionMedica.create({ data: datos(entidad) }),
      duplicado,
    );
    return registro(fila);
  }

  async listar(): Promise<Registro<ComisionMedica>[]> {
    const filas = await getPrisma().comisionMedica.findMany({
      orderBy: { id: "asc" },
    });
    return filas.map(registro);
  }

  async buscarPorId(id: number): Promise<Registro<ComisionMedica> | null> {
    const fila = await getPrisma().comisionMedica.findUnique({ where: { id } });
    return fila ? registro(fila) : null;
  }

  async actualizar(
    id: number,
    entidad: ComisionMedica,
  ): Promise<Registro<ComisionMedica>> {
    const fila = await escrituraCatalogo(
      () =>
        getPrisma().comisionMedica.update({
          where: { id },
          data: datos(entidad),
        }),
      duplicado,
    );
    return registro(fila);
  }

  async eliminar(id: number): Promise<void> {
    await escrituraCatalogo(
      () => getPrisma().comisionMedica.delete({ where: { id } }),
      duplicado,
    );
  }
}
