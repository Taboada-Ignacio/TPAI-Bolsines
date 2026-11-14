import type { Usuario } from "./Usuario";

export class Sesion {
  private fechaHoraInicio: Date;
  private fechaHoraFin: Date | null;
  private usuario: Usuario;

  constructor(
    fechaHoraInicio: Date,
    fechaHoraFin: Date | null,
    usuario: Usuario,
  ) {
    this.fechaHoraInicio = fechaHoraInicio;
    this.fechaHoraFin = fechaHoraFin;
    this.usuario = usuario;
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

  getUsuario(): Usuario {
    return this.usuario;
  }

  setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
  }
}
