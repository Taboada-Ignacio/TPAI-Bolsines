import { Empleado } from "@/domain/Empleado";
import { Usuario } from "@/domain/Usuario";
import type { Rol } from "@/domain/Rol";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import {
  mensajeUsuarioDuplicado,
  type DatosEmpleado,
  type RepositorioEmpleado,
} from "@/domain/RepositorioEmpleado";
import {
  catalogoNoEncontrado,
  ErrorCatalogo,
  type RepositorioCrud,
} from "@/domain/RepositorioCrud";

export class EmpleadoService {
  constructor(
    private readonly empleados: RepositorioEmpleado,
    private readonly roles: Pick<RepositorioCrud<Rol>, "buscarPorId">,
    private readonly comisiones: Pick<
      RepositorioCrud<ComisionMedica>,
      "buscarPorId"
    >,
  ) {}

  private async buscarAsociaciones({ rolId, comisionMedicaId }: DatosEmpleado) {
    const [rol, comision] = await Promise.all([
      this.roles.buscarPorId(rolId),
      this.comisiones.buscarPorId(comisionMedicaId),
    ]);
    if (!rol)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "El rol seleccionado no existe.",
      );
    if (!comision)
      throw new ErrorCatalogo(
        "NO_ENCONTRADO",
        "La comisión médica seleccionada no existe.",
      );
    return { rol: rol.entidad, comision: comision.entidad };
  }

  async crear(
    datos: DatosEmpleado & { usuario: { nombre: string; contrasena: string } },
  ) {
    if (await this.empleados.existeNombreUsuario(datos.usuario.nombre)) {
      throw new ErrorCatalogo("DUPLICADO", mensajeUsuarioDuplicado);
    }
    const { rol, comision } = await this.buscarAsociaciones(datos);
    const usuario = new Usuario(datos.usuario.nombre, datos.usuario.contrasena);
    const empleado = new Empleado(
      datos.nombre,
      datos.apellido,
      datos.email,
      usuario,
      rol,
      comision,
    );
    return this.empleados.crear(empleado, {
      rolId: datos.rolId,
      comisionMedicaId: datos.comisionMedicaId,
    });
  }

  listar() {
    return this.empleados.listar();
  }

  async buscarPorId(id: number) {
    const empleado = await this.empleados.buscarPorId(id);
    if (!empleado) throw catalogoNoEncontrado();
    return empleado;
  }

  async actualizar(id: number, datos: DatosEmpleado) {
    await this.buscarPorId(id);
    await this.buscarAsociaciones(datos);
    return this.empleados.actualizar(id, datos);
  }

  eliminar(id: number) {
    return this.empleados.eliminar(id);
  }
}
