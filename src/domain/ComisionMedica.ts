export class ComisionMedica {
  private codigo: string;
  private direccion: string;
  private email: string;
  private nombre: string;
  private telefono: string;

  constructor(
    codigo: string,
    direccion: string,
    email: string,
    nombre: string,
    telefono: string,
  ) {
    this.codigo = codigo;
    this.direccion = direccion;
    this.email = email;
    this.nombre = nombre;
    this.telefono = telefono;
  }

  getCodigo(): string {
    return this.codigo;
  }

  setCodigo(codigo: string): void {
    this.codigo = codigo;
  }

  getDireccion(): string {
    return this.direccion;
  }

  setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getTelefono(): string {
    return this.telefono;
  }

  setTelefono(telefono: string): void {
    this.telefono = telefono;
  }
}
