export class Estado {
  private nombre: string;
  private descripcion: string;
  private ambito: string;

  constructor(nombre: string, descripcion: string, ambito: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.ambito = ambito;
  }

  getNombre(): string {
    return this.nombre;
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

  getAmbito(): string {
    return this.ambito;
  }

  setAmbito(ambito: string): void {
    this.ambito = ambito;
  }
}
