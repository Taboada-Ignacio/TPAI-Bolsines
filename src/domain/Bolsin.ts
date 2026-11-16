import type { CambioEstadoBolsin } from "./CambioEstadoBolsin";
import type { ComisionMedica } from "./ComisionMedica";
import type { Remito } from "./Remito";

export class Bolsin {
  private fecha: Date;
  private numeroBolsin: number;
  private numeroPrecinto: number | null;
  private peso: number;
  private cmOrigen: ComisionMedica;
  private cmDestino: ComisionMedica;
  // La multiplicidad UML es 1..*. Su validación queda para las reglas de negocio.
  private cambiosEstado: CambioEstadoBolsin[];
  private remitoAsociado: Remito | null;

  constructor(
    fecha: Date,
    numeroBolsin: number,
    numeroPrecinto: number | null,
    peso: number,
    cmOrigen: ComisionMedica,
    cmDestino: ComisionMedica,
    cambiosEstado: CambioEstadoBolsin[],
    remito: Remito | null = null,
  ) {
    this.fecha = fecha;
    this.numeroBolsin = numeroBolsin;
    this.numeroPrecinto = numeroPrecinto;
    this.peso = peso;
    this.cmOrigen = cmOrigen;
    this.cmDestino = cmDestino;
    this.cambiosEstado = [...cambiosEstado];
    this.remitoAsociado = remito;
  }

  getFecha(): Date {
    return this.fecha;
  }

  setFecha(fecha: Date): void {
    this.fecha = fecha;
  }

  getNumeroBolsin(): number {
    return this.numeroBolsin;
  }

  setNumeroBolsin(numeroBolsin: number): void {
    this.numeroBolsin = numeroBolsin;
  }

  getNumeroPrecinto(): number | null {
    return this.numeroPrecinto;
  }

  setNumeroPrecinto(numeroPrecinto: number | null): void {
    this.numeroPrecinto = numeroPrecinto;
  }

  getPeso(): number {
    return this.peso;
  }

  setPeso(peso: number): void {
    this.peso = peso;
  }

  getCmOrigen(): ComisionMedica {
    return this.cmOrigen;
  }

  obtenerCodCMOrigen(): string {
    return this.getCmOrigen().getCodigo();
  }

  esCMOrigenIgualCMLogueado(cmLogueado: ComisionMedica): boolean {
    return this.cmOrigen.getCodigo() === cmLogueado.getCodigo();
  }

  setCmOrigen(cmOrigen: ComisionMedica): void {
    this.cmOrigen = cmOrigen;
  }

  getCmDestino(): ComisionMedica {
    return this.cmDestino;
  }

  obtenerCodCMDestino(): string {
    return this.getCmDestino().getCodigo();
  }

  setCmDestino(cmDestino: ComisionMedica): void {
    this.cmDestino = cmDestino;
  }

  getCambiosEstado(): CambioEstadoBolsin[] {
    return [...this.cambiosEstado];
  }

  buscarEstadoActualBolsin(): CambioEstadoBolsin | null {
    let actual: CambioEstadoBolsin | null = null;
    for (const cambio of this.cambiosEstado) {
      if (!cambio.sosActual()) continue;
      if (actual !== null) {
        throw new Error("El bolsín tiene más de un cambio de estado actual.");
      }
      actual = cambio;
    }
    return actual;
  }

  setCambiosEstado(cambiosEstado: CambioEstadoBolsin[]): void {
    this.cambiosEstado = [...cambiosEstado];
  }

  getRemito(): Remito | null {
    return this.remitoAsociado;
  }

  setRemito(remito: Remito | null): void {
    this.remitoAsociado = remito;
  }
}
