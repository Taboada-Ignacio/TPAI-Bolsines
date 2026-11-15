import { Estado } from "@/domain/Estado";
import type { RepositorioCrud } from "@/domain/RepositorioCrud";
import type { EstadoEntrada } from "@/dtos/estado.dto";
import { CrudService } from "./CrudService";

export class EstadoService extends CrudService<Estado, EstadoEntrada> {
  constructor(repositorio: RepositorioCrud<Estado>) {
    super(
      repositorio,
      ({ nombre, descripcion, ambito }) =>
        new Estado(nombre, descripcion, ambito),
    );
  }
}
