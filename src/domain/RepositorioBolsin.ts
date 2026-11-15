import type { Bolsin } from "./Bolsin";
import type { CambioEstadoBolsin } from "./CambioEstadoBolsin";
import type { Empleado } from "./Empleado";

export interface DatosBolsin {
  fecha: Date;
  numeroBolsin: number;
  numeroPrecinto: number;
  peso: number;
  cmOrigenId: number;
  cmDestinoId: number;
}

type Comision = { id: number; codigo: string; nombre: string };
type Estado = { id: number; nombre: string };

export interface RegistroBolsin extends Omit<
  DatosBolsin,
  "cmOrigenId" | "cmDestinoId"
> {
  id: number;
  cmOrigen: Comision;
  cmDestino: Comision;
  estadoActual: Estado | null;
}

export interface DetalleBolsin extends RegistroBolsin {
  cambiosEstado: {
    id: number;
    fechaHoraInicio: Date;
    fechaHoraFin: Date | null;
    estado: Estado;
    responsableCE: { id: number; nombre: string; apellido: string };
  }[];
}

export interface RepositorioBolsin {
  buscarResponsable(id: number): Promise<Empleado | null>;
  buscarIdPorOrigenYNumero(
    origen: number,
    numero: number,
  ): Promise<number | null>;
  crear(
    bolsin: Bolsin,
    cambio: CambioEstadoBolsin,
    ids: Pick<DatosBolsin, "cmOrigenId" | "cmDestinoId"> & {
      estadoId: number;
      responsableCEId: number;
    },
  ): Promise<RegistroBolsin>;
  listar(): Promise<RegistroBolsin[]>;
  buscarPorId(id: number): Promise<DetalleBolsin | null>;
  existe(id: number): Promise<boolean>;
  actualizar(id: number, datos: DatosBolsin): Promise<RegistroBolsin>;
  eliminar(id: number): Promise<void>;
}

export class AmbitoBolsinInvalido extends Error {}

export const mensajeBolsinDuplicado =
  "Ya existe un bolsín con ese número en la comisión médica de origen.";
