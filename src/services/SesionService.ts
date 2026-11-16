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

  async iniciarPorEmail(email: string) {
    const buscarPorEmail = (
      this.repositorio as RepositorioSesion & {
        buscarUsuarioPorEmail?: (
          email: string,
        ) => ReturnType<RepositorioSesion["buscarUsuario"]>;
      }
    ).buscarUsuarioPorEmail;
    if (!buscarPorEmail) throw new SesionInvalida();
    const registro = await buscarPorEmail.call(this.repositorio, email);
    if (!registro) throw new SesionInvalida();
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
    const registro = await this.buscarEmpleadoLogueado(id);
    const perfil = this.datosPerfil(
      registro.usuarioId,
      registro.sesion,
      registro,
    );
    return {
      ...perfil,
      sesion: { id, fechaHoraInicio: registro.sesion.getFechaHoraInicio() },
    };
  }

  async cerrar(id: number) {
    if (!(await this.repositorio.cerrar(id, new Date())))
      throw new SesionInvalida();
  }

  async buscarEmpleadoLogueado(id: number) {
    const registro = await this.repositorio.buscarAbierta(id);
    if (!registro) throw new SesionInvalida();
    const empleado = await this.identificarEmpleado(
      registro.usuarioId,
      registro.sesion,
    );
    return { ...registro, ...empleado };
  }

  private async identificarEmpleado(usuarioId: number, sesion: Sesion) {
    const registro = await this.repositorio.buscarEmpleado(usuarioId);
    if (!registro || !registro.empleado.esTuUsuario(sesion.getUsuario()))
      throw new SesionInvalida();
    return registro;
  }

  private async perfil(usuarioId: number, sesion: Sesion) {
    return this.datosPerfil(
      usuarioId,
      sesion,
      await this.identificarEmpleado(usuarioId, sesion),
    );
  }

  private datosPerfil(
    usuarioId: number,
    sesion: Sesion,
    registro: NonNullable<
      Awaited<ReturnType<RepositorioSesion["buscarEmpleado"]>>
    >,
  ) {
    const usuario = sesion.getUsuario();
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
