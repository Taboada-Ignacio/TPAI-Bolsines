export class Remito {
  public numero: string;
  public asunto: string;
  public tipoDocumento: string;

  constructor(numero: string, asunto: string, tipoDocumento: string) {
    this.numero = numero;
    this.asunto = asunto;
    this.tipoDocumento = tipoDocumento;
  }

  getNumero(): string {
    return this.numero;
  }

  setNumero(numero: string): void {
    this.numero = numero;
  }

  getAsunto(): string {
    return this.asunto;
  }

  setAsunto(asunto: string): void {
    this.asunto = asunto;
  }

  getTipoDocumento(): string {
    return this.tipoDocumento;
  }

  setTipoDocumento(tipoDocumento: string): void {
    this.tipoDocumento = tipoDocumento;
  }
}
