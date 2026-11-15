import type { RepositorioCrud } from "@/domain/RepositorioCrud";
import { Rol } from "@/domain/Rol";
import type { RolEntrada } from "@/dtos/rol.dto";
import { CrudService } from "./CrudService";

export class RolService extends CrudService<Rol, RolEntrada> {
  constructor(repositorio: RepositorioCrud<Rol>) {
    super(
      repositorio,
      ({ nombre, descripcion }) => new Rol(nombre, descripcion),
    );
  }
}
