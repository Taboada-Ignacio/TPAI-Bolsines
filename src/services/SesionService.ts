import { Sesion } from "@/domain/Sesion";
import type { RepositorioSesion } from "@/domain/RepositorioSesion";

export class SesionInvalida extends Error {}

export class SesionService {
  constructor(private readonly repositorio: RepositorioSesion) {}

  async iniciar(nombre: string, contrasena: string) {
    const registro = await this.repositorio.buscarUsuario(nombre);
    if (!registro || registro.usuario.getContrasena() !== contrasena)
      throw new SesionInvalida();
    const sesion = new Sesion(new Date(), null, registro.usuario);
    const perfil = await this.perfil(registro.id, sesion);
    return {
      ...perfil,
      sesion: {
        id: await this.repositorio.crear(registro.id, sesion),
        fechaHoraInicio: sesion.getFechaHoraInicio(),
      },
    };
  }

  async consultar(id: number) {
    const registro = await this.repositorio.buscarAbierta(id);
    if (!registro) throw new SesionInvalida();
    const perfil = await this.perfil(registro.usuarioId, registro.sesion);
    return {
      ...perfil,
      sesion: { id, fechaHoraInicio: registro.sesion.getFechaHoraInicio() },
    };
  }

  async cerrar(id: number) {
    if (!(await this.repositorio.cerrar(id, new Date())))
      throw new SesionInvalida();
  }

  private async perfil(usuarioId: number, sesion: Sesion) {
    const usuario = sesion.getUsuario();
    const registro = await this.repositorio.buscarEmpleado(usuarioId);
    if (!registro || !registro.empleado.esTuUsuario(usuario))
      throw new SesionInvalida();
    const { empleado } = registro;
    const comision = empleado.getComisionMedica();
    return {
      usuario: { id: usuarioId, nombre: usuario.getNombre() },
      empleado: {
        id: registro.id,
        nombre: empleado.getNombre(),
        apellido: empleado.getApellido(),
      },
      rol: { id: registro.rolId, nombre: empleado.getRol().getNombre() },
      comisionMedica: {
        id: registro.comisionMedicaId,
        codigo: comision.getCodigo(),
        nombre: comision.getNombre(),
      },
    };
  }
}
