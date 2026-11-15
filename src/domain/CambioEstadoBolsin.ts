import type { Empleado } from "./Empleado";
import type { Estado } from "./Estado";

export class CambioEstadoBolsin {
  private fechaHoraInicio: Date;
  private fechaHoraFin: Date | null;
  private estado: Estado;
  private responsableCE: Empleado;

  constructor(
    fechaHoraInicio: Date,
    fechaHoraFin: Date | null,
    estado: Estado,
    responsableCE: Empleado,
  ) {
    this.fechaHoraInicio = fechaHoraInicio;
    this.fechaHoraFin = fechaHoraFin;
    this.estado = estado;
    this.responsableCE = responsableCE;
  }

  getFechaHoraInicio(): Date {
    return this.fechaHoraInicio;
  }

  setFechaHoraInicio(fechaHoraInicio: Date): void {
    this.fechaHoraInicio = fechaHoraInicio;
  }

  getFechaHoraFin(): Date | null {
    return this.fechaHoraFin;
  }

  setFechaHoraFin(fechaHoraFin: Date | null): void {
    this.fechaHoraFin = fechaHoraFin;
  }

  getEstado(): Estado {
    return this.estado;
  }

  sosActual(): boolean {
    return this.fechaHoraFin === null;
  }

  esAmbitoBolsin(): boolean {
    return this.estado.esAmbitoBolsin();
  }

  esEnviado(): boolean {
    return this.estado.esEnviado();
  }

  setEstado(estado: Estado): void {
    this.estado = estado;
  }

  getResponsableCE(): Empleado {
    return this.responsableCE;
  }

  setResponsableCE(responsableCE: Empleado): void {
    this.responsableCE = responsableCE;
  }
}
