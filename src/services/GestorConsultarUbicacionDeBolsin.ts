import { InterfazGPSTracker } from "@/externalInterfaces/gpsTracker/InterfazGPSTracker";
import type { InterfazGoogleMaps } from "@/externalInterfaces/maps/InterfazGoogleMaps";
import type { Bolsin } from "@/domain/Bolsin";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import type { Empleado } from "@/domain/Empleado";
import type {
  SeguimientoBolsines,
  UbicacionGpsBolsin,
} from "@/dtos/seguimiento-bolsines.dto";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";
import type { EmpleadoRepositoryPrisma } from "@/persistence/EmpleadoRepositoryPrisma";
import type { GestorNotificarUbicacionBolsin } from "./GestorNotificarUbicacionBolsin";
import type { SesionService } from "./SesionService";

const MODELO_GPS_TRACKER = "XTR-4500L" as const;

export class ErrorSeguimientoBolsines extends Error {
  constructor(
    readonly estado: 403 | 404 | 409 | 503,
    mensaje: string,
  ) {
    super(mensaje);
  }
}

export class GestorConsultarUbicacionDeBolsin {
  constructor(
    private readonly sesiones: Pick<SesionService, "buscarEmpleadoLogueado">,
    private readonly bolsines: Pick<
      BolsinRepositoryPrisma,
      "listarEnviados" | "buscarParaSeguimiento"
    >,
    private readonly empleados: Pick<
      EmpleadoRepositoryPrisma,
      "listarDeComision"
    >,
    private readonly mapas: InterfazGoogleMaps,
    private readonly cu31: Pick<
      GestorNotificarUbicacionBolsin,
      "notificarUbicacionDeBolsin"
    >,
    private readonly crearTracker: () => Pick<
      InterfazGPSTracker,
      "obtenerLocalizacionDeBolsines"
    > = () => new InterfazGPSTracker(),
  ) {}

  async opcConsultarUbicacionDeBolsines(
    idSesion: number,
  ): Promise<SeguimientoBolsines> {
    const { empleado, comisionMedicaId } =
      await this.buscarEmpleadoLogueado(idSesion);
    const { cm, descripcion } = this.buscarCMDeLogueado(empleado);
    const enviados =
      await this.buscarBolsinesEnviadosConCMOrigenIgualACMLogueado(
        comisionMedicaId,
        cm,
      );
    const ubicaciones = await this.solicitarDatosDeLocalizacionDeBolsines(
      enviados.map(({ bolsin }) => bolsin),
    );
    const mapa = await this.solicitarMapaConPosicionDeBolsines(ubicaciones);
    const idsPorNumero = new Map(
      enviados.map(({ id, bolsin }) => [bolsin.getNumeroBolsin(), id]),
    );
    return {
      comision: descripcion,
      mapa: {
        ...mapa,
        comisionOrigen: {
          codigo: cm.getCodigo(),
          nombre: cm.getNombre(),
          direccion: cm.getDireccion(),
        },
        puntos: mapa.puntos.filter(
          ({ id, numero }) =>
            id === undefined || idsPorNumero.get(numero) === id,
        ),
      },
      sinUbicacion: enviados.length - ubicaciones.length,
    };
  }

  private async buscarEmpleadoLogueado(idSesion: number) {
    // SesionService identifica al empleado mediante Sesion.getUsuario y Empleado.esTuUsuario.
    const registro = await this.sesiones.buscarEmpleadoLogueado(idSesion);
    if (registro.empleado.getRol().getNombre() !== "Encargado de Bolsines") {
      throw new ErrorSeguimientoBolsines(
        403,
        "El seguimiento requiere el rol Encargado de Bolsines.",
      );
    }
    return registro;
  }

  private buscarCMDeLogueado(empleado: Empleado) {
    return {
      cm: empleado.getComisionMedica(),
      descripcion: empleado.obtenerCM(),
    };
  }

  private async buscarBolsinesEnviadosConCMOrigenIgualACMLogueado(
    idCm: number,
    cm: ComisionMedica,
  ) {
    const enviados = await this.bolsines.listarEnviados(idCm);
    return enviados.filter(
      ({ bolsin }) =>
        bolsin.esCMOrigenIgualCMLogueado(cm) &&
        this.buscarEstadoActualBolsin(bolsin),
    );
  }

  private buscarEstadoActualBolsin(bolsin: Bolsin) {
    const cambio = bolsin.buscarEstadoActualBolsin();
    return cambio?.esAmbitoBolsin() && cambio.esEnviado();
  }

  private obtenerNumerosBolsines(bolsines: Bolsin[]): number[] {
    return bolsines.map((bolsin) => bolsin.getNumeroBolsin());
  }

  private obtenerCMOrigenesBolsines(bolsines: Bolsin[]): string[] {
    return bolsines.map((bolsin) => bolsin.getCmOrigen().getCodigo());
  }

  private async solicitarDatosDeLocalizacionDeBolsines(
    bolsines: Bolsin[],
  ): Promise<UbicacionGpsBolsin[]> {
    if (bolsines.length === 0) return [];
    // 1. Obtener los números de los bolsines.
    const nrosBolsines = this.obtenerNumerosBolsines(bolsines);

    // 2. Obtener sus códigos de CM origen en el mismo orden.
    const codigosCMOrigen = this.obtenerCMOrigenesBolsines(bolsines);
    const tracker = this.crearTracker();
    let localizaciones: string[][];
    try {
      // 3. Consultar al GPS con ambos arreglos alineados por índice.
      localizaciones = await tracker.obtenerLocalizacionDeBolsines(
        MODELO_GPS_TRACKER,
        nrosBolsines,
        codigosCMOrigen,
      );
    } catch (error) {
      if (!this.esUbicacionNoDisponible(error)) throw error;
      if (nrosBolsines.length === 1) return [];

      // XTR aborta el lote ante el primer 404. Recuperar los puntos de los demás bolsines.
      localizaciones = [];
      for (const [indice, numero] of nrosBolsines.entries()) {
        try {
          const filas = await tracker.obtenerLocalizacionDeBolsines(
            MODELO_GPS_TRACKER,
            [numero],
            [codigosCMOrigen[indice]],
          );
          localizaciones.push(...filas);
        } catch (errorIndividual) {
          if (!this.esUbicacionNoDisponible(errorIndividual))
            throw errorIndividual;
        }
      }
    }

    const porNumero = new Map(
      localizaciones.map(([numero, latitud, longitud, actualizado]) => [
        Number(numero),
        {
          numero: Number(numero),
          latitud: Number(latitud),
          longitud: Number(longitud),
          actualizado,
        },
      ]),
    );
    return nrosBolsines.flatMap((numero) => {
      const ubicacion = porNumero.get(numero);
      return ubicacion ? [ubicacion] : [];
    });
  }

  private esUbicacionNoDisponible(error: unknown): boolean {
    return (
      error instanceof ErrorGPSTracker &&
      error.tipo === "HTTP" &&
      error.estadoHttp === 404
    );
  }

  private solicitarMapaConPosicionDeBolsines(
    ubicaciones: UbicacionGpsBolsin[],
  ) {
    return this.mapas.obtenerMapaConPosicionDeBolsines(ubicaciones);
  }

  async tomarSeleccionDeBolsin(idSesion: number, idBolsin: number) {
    const { empleado } = await this.buscarEmpleadoLogueado(idSesion);
    const registro = await this.bolsines.buscarParaSeguimiento(idBolsin);
    if (!registro)
      throw new ErrorSeguimientoBolsines(404, "El bolsín no existe.");
    if (
      !registro.bolsin.esCMOrigenIgualCMLogueado(empleado.getComisionMedica())
    ) {
      throw new ErrorSeguimientoBolsines(
        403,
        "El bolsín pertenece a otra comisión de origen.",
      );
    }
    if (!this.buscarEstadoActualBolsin(registro.bolsin)) {
      throw new ErrorSeguimientoBolsines(409, "El bolsín ya no está Enviado.");
    }
    return registro;
  }

  async tomarConfirmacionOpcEnviarCorreoGCM(
    idSesion: number,
    idBolsin: number,
  ) {
    const { bolsin } = await this.tomarSeleccionDeBolsin(idSesion, idBolsin);
    const destino = this.obtenerCMDestino(bolsin);
    const gerente =
      await this.buscarGCMDeCMDestinoDeBolsinSeleccionado(destino);
    const email = this.obtenerEmailDeGCM(gerente);
    const [ubicacion] = await this.solicitarDatosDeLocalizacionDeBolsines([
      bolsin,
    ]);
    if (!ubicacion) {
      throw new ErrorSeguimientoBolsines(
        503,
        "El GPS no informó una ubicación para el bolsín.",
      );
    }
    await this.llamarCU31NotificarUbicacionDeBolsin(
      bolsin,
      destino,
      email,
      ubicacion,
    );
    return this.finCU(
      email,
      `${gerente.getNombre()} ${gerente.getApellido()}`.trim(),
    );
  }

  private obtenerCMDestino(bolsin: Bolsin) {
    return bolsin.getCmDestino();
  }

  private async buscarGCMDeCMDestinoDeBolsinSeleccionado(cm: ComisionMedica) {
    const empleados = await this.empleados.listarDeComision(cm.getCodigo());
    const gerentes = empleados.filter(
      (empleado) => empleado.esTuCM(cm) && empleado.sosGCM(),
    );
    if (gerentes.length !== 1) {
      throw new ErrorSeguimientoBolsines(
        409,
        "La comisión de destino debe tener exactamente un gerente.",
      );
    }
    return gerentes[0];
  }

  private obtenerEmailDeGCM(gerente: Empleado) {
    return gerente.getEmail();
  }

  private llamarCU31NotificarUbicacionDeBolsin(
    bolsin: Bolsin,
    destino: ComisionMedica,
    emailDestino: string,
    ubicacion: UbicacionGpsBolsin,
  ) {
    const origen = bolsin.getCmOrigen();
    const remito = bolsin.getRemito();
    return this.cu31.notificarUbicacionDeBolsin({
      emailDestino,
      nroBolsin: ubicacion.numero,
      latitud: String(ubicacion.latitud),
      longitud: String(ubicacion.longitud),
      fechaHoraActualizacion: ubicacion.actualizado,
      nroPrecinto: bolsin.getNumeroPrecinto(),
      cmOrigen: `${origen.getNombre()} (${origen.getCodigo()})`,
      cmDestino: `${destino.getNombre()} (${destino.getCodigo()})`,
      remito: remito
        ? {
            numero: remito.getNumero(),
            asunto: remito.getAsunto(),
            tipoDocumento: remito.getTipoDocumento(),
          }
        : null,
    });
  }

  private finCU(destinatarioEmail: string, destinatarioNombre: string) {
    return {
      aceptada: true as const,
      destinatarioEmail,
      destinatarioNombre,
      fechaEnvio: new Date().toISOString(),
    };
  }
}
