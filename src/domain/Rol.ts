export class Rol {
  private nombre: string;
  private descripcion: string;

  constructor(nombre: string, descripcion: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  getNombre(): string {
    return this.nombre;
  }

  esGCM(): boolean {
    return this.nombre === "Gerente de Comisión Médica";
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }
}
