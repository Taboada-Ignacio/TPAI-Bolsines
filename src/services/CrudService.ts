import {
  catalogoNoEncontrado,
  type RepositorioCrud,
} from "@/domain/RepositorioCrud";

export class CrudService<T, Datos> {
  constructor(
    private readonly repositorio: RepositorioCrud<T>,
    private readonly construirEntidad: (datos: Datos) => T,
  ) {}

  crear(datos: Datos) {
    return this.repositorio.crear(this.construirEntidad(datos));
  }

  listar() {
    return this.repositorio.listar();
  }

  async buscarPorId(id: number) {
    const registro = await this.repositorio.buscarPorId(id);
    if (!registro) {
      throw catalogoNoEncontrado();
    }
    return registro;
  }

  actualizar(id: number, datos: Datos) {
    return this.repositorio.actualizar(id, this.construirEntidad(datos));
  }

  eliminar(id: number) {
    return this.repositorio.eliminar(id);
  }
}
