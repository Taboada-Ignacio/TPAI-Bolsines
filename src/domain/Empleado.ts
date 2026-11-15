import type { ComisionMedica } from "./ComisionMedica";
import type { Rol } from "./Rol";
import type { Usuario } from "./Usuario";

export class Empleado {
  private nombre: string;
  private apellido: string;
  private email: string;
  private usuario: Usuario;
  private rol: Rol;
  private comisionMedica: ComisionMedica;

  constructor(
    nombre: string,
    apellido: string,
    email: string,
    usuario: Usuario,
    rol: Rol,
    comisionMedica: ComisionMedica,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.usuario = usuario;
    this.rol = rol;
    this.comisionMedica = comisionMedica;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getApellido(): string {
    return this.apellido;
  }

  setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  esTuUsuario(usuario: Usuario): boolean {
    return this.usuario.getNombre() === usuario.getNombre();
  }

  setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
  }

  getRol(): Rol {
    return this.rol;
  }

  setRol(rol: Rol): void {
    this.rol = rol;
  }

  getComisionMedica(): ComisionMedica {
    return this.comisionMedica;
  }

  setComisionMedica(comisionMedica: ComisionMedica): void {
    this.comisionMedica = comisionMedica;
  }
}
