import type { Empleado } from "./Empleado";

export interface DatosEmpleado {
  nombre: string;
  apellido: string;
  email: string;
  rolId: number;
  comisionMedicaId: number;
}

export interface RegistroEmpleado {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  usuario: { id: number; nombre: string };
  rol: { id: number; nombre: string };
  comisionMedica: { id: number; codigo: string; nombre: string };
}

export interface RepositorioEmpleado {
  crear(
    empleado: Empleado,
    asociaciones: Pick<DatosEmpleado, "rolId" | "comisionMedicaId">,
  ): Promise<RegistroEmpleado>;
  listar(): Promise<RegistroEmpleado[]>;
  buscarPorId(id: number): Promise<RegistroEmpleado | null>;
  actualizar(id: number, datos: DatosEmpleado): Promise<RegistroEmpleado>;
  eliminar(id: number): Promise<void>;
}
