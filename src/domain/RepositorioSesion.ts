import type { Usuario } from "./Usuario";
import type { Empleado } from "./Empleado";
import type { Sesion } from "./Sesion";

export interface RepositorioSesion {
  buscarUsuario(
    nombre: string,
  ): Promise<{ id: number; usuario: Usuario } | null>;
  buscarEmpleado(
    usuarioId: number,
  ): Promise<{
    id: number;
    empleado: Empleado;
    rolId: number;
    comisionMedicaId: number;
  } | null>;
  crear(usuarioId: number, sesion: Sesion): Promise<number>;
  buscarAbierta(
    id: number,
  ): Promise<{ usuarioId: number; sesion: Sesion } | null>;
  cerrar(id: number, fecha: Date): Promise<boolean>;
}
