import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import type { Estado } from "@/domain/Estado";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import {
  AmbitoBolsinInvalido,
  mensajeBolsinDuplicado,
  type DatosBolsin,
  type RepositorioBolsin,
} from "@/domain/RepositorioBolsin";
import {
  catalogoNoEncontrado,
  ErrorCatalogo,
  type RepositorioCrud,
} from "@/domain/RepositorioCrud";

export class BolsinService {
  constructor(
    private readonly bolsines: RepositorioBolsin,
    private readonly comisiones: Pick<
      RepositorioCrud<ComisionMedica>,
      "buscarPorId"
    >,
    private readonly estados: Pick<RepositorioCrud<Estado>, "buscarPorId">,
  ) {}

  private async buscarComisiones(datos: DatosBolsin) {
    const [origen, destino] = await Promise.all([
      this.comisiones.buscarPorId(datos.cmOrigenId),
      this.comisiones.buscarPorId(datos.cmDestinoId),
    ]);
    if (!origen)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "La comisión médica de origen no existe.",
      );
    if (!destino)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "La comisión médica de destino no existe.",
      );
    return { origen: origen.entidad, destino: destino.entidad };
  }

  private async verificarUnicidad(datos: DatosBolsin, id?: number) {
    const existente = await this.bolsines.buscarIdPorOrigenYNumero(
      datos.cmOrigenId,
      datos.numeroBolsin,
    );
    if (existente !== null && existente !== id) {
      throw new ErrorCatalogo("DUPLICADO", mensajeBolsinDuplicado);
    }
  }

  async crear(
    datos: DatosBolsin & { estadoId: number; responsableCEId: number },
  ) {
    const { origen, destino } = await this.buscarComisiones(datos);
    const estado = await this.estados.buscarPorId(datos.estadoId);
    if (!estado)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "El estado seleccionado no existe.",
      );
    if (estado.entidad.getAmbito() !== "BOLSIN") {
      throw new AmbitoBolsinInvalido(
        "El estado debe pertenecer al ámbito BOLSIN.",
      );
    }
    const responsable = await this.bolsines.buscarResponsable(
      datos.responsableCEId,
    );
    if (!responsable)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "El empleado responsable no existe.",
      );
    await this.verificarUnicidad(datos);
    const cambio = new CambioEstadoBolsin(
      new Date(),
      null,
      estado.entidad,
      responsable,
    );
    const bolsin = new Bolsin(
      datos.fecha,
      datos.numeroBolsin,
      datos.numeroPrecinto,
      datos.peso,
      origen,
      destino,
      [cambio],
    );
    return this.bolsines.crear(bolsin, cambio, datos);
  }

  listar() {
    return this.bolsines.listar();
  }

  async buscarPorId(id: number) {
    const bolsin = await this.bolsines.buscarPorId(id);
    if (!bolsin) throw catalogoNoEncontrado();
    return bolsin;
  }

  async actualizar(id: number, datos: DatosBolsin) {
    if (!(await this.bolsines.existe(id))) throw catalogoNoEncontrado();
    await this.buscarComisiones(datos);
    await this.verificarUnicidad(datos, id);
    return this.bolsines.actualizar(id, datos);
  }

  eliminar(id: number) {
    return this.bolsines.eliminar(id);
  }
}
