export class Usuario {
  private nombre: string;
  private contrasena: string;

  constructor(nombre: string, contrasena: string) {
    this.nombre = nombre;
    this.contrasena = contrasena;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getContrasena(): string {
    return this.contrasena;
  }

  setContrasena(contrasena: string): void {
    this.contrasena = contrasena;
  }
}
