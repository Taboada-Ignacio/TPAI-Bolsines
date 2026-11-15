import { ComisionMedica } from "@/domain/ComisionMedica";
import type { RepositorioCrud } from "@/domain/RepositorioCrud";
import type { ComisionMedicaEntrada } from "@/dtos/comision-medica.dto";
import { CrudService } from "./CrudService";

export class ComisionMedicaService extends CrudService<
  ComisionMedica,
  ComisionMedicaEntrada
> {
  constructor(repositorio: RepositorioCrud<ComisionMedica>) {
    super(
      repositorio,
      ({ codigo, direccion, email, nombre, telefono }) =>
        new ComisionMedica(codigo, direccion, email, nombre, telefono),
    );
  }
}
