import { InterfazGPSTracker } from "@/adapters/InterfazGPSTracker";
import type { InterfazGoogleMaps } from "@/adapters/InterfazGoogleMaps";
import type { Bolsin } from "@/domain/Bolsin";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import type { Empleado } from "@/domain/Empleado";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import type { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";
import type { EmpleadoRepositoryPrisma } from "@/infrastructure/EmpleadoRepositoryPrisma";
import type { GestorNotificarUbicacionBolsin } from "./GestorNotificarUbicacionBolsin";
import type { SesionService } from "./SesionService";

// Sedes XTR de los fixtures del seed, por identidad local del bolsín.
const origenesOficiales = new Map([
  ["CM-CBA:101", "CM-CBA-01"],
  ["CM-SF:102", "CM-ROS-02"],
  ["CM-MZA:103", "CM-MDZ-03"],
  ["CM-BA:104", "CM-BA-01"],
  ["CM-TUC:105", "CM-TUC-01"],
  ["CM-SAL:106", "CM-SLA-01"],
  ["CM-NEU:107", "CM-NQN-01"],
  ["CM-BA:108", "CM-MDQ-01"],
  ["CM-BA:109", "CM-LPL-01"],
  ["CM-CBA:110", "CM-CBA-02"],
]);

type RegistroBolsin = { id: number; bolsin: Bolsin };

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

  async opcConsultarUbicacionDeBolsines(idSesion: number) {
    const { empleado, comisionMedicaId } =
      await this.buscarEmpleadoLogueado(idSesion);
    const { cm, descripcion } = this.buscarCMDeLogueado(empleado);
    const enviados =
      await this.buscarBolsinesEnviadosConCMOrigenIgualACMLogueado(
        comisionMedicaId,
        cm,
      );
    const puntos = await this.solicitarDatosDeLocalizacionDeBolsines(enviados);
    return {
      comision: descripcion,
      mapa: this.solicitarMapaConPosicionDeBolsines(puntos),
      sinUbicacion: enviados.length - puntos.length,
    };
  }

  private async buscarEmpleadoLogueado(idSesion: number) {
    const registro = await this.sesiones.buscarEmpleadoLogueado(idSesion);
    if (registro.empleado.getRol().getNombre() !== "Encargado de Bolsines")
      throw new ErrorSeguimientoBolsines(
        403,
        "El seguimiento requiere el rol Encargado de Bolsines.",
      );
    return registro;
  }

  private buscarCMDeLogueado(empleado: Empleado) {
    return {
      cm: empleado.getComisionMedica(),
      descripcion: empleado.obtenerCM(),
    };
  }

  private async buscarBolsinesEnviadosConCMOrigenIgualACMLogueado(
    id: number,
    cm: ComisionMedica,
  ) {
    const registros = await this.bolsines.listarEnviados(id);
    return registros.filter(
      ({ bolsin }) =>
        bolsin.esCMOrigenIgualCMLogueado(cm) &&
        this.buscarEstadoActualBolsin(bolsin),
    );
  }

  private buscarEstadoActualBolsin(bolsin: Bolsin) {
    const cambio = bolsin.buscarEstadoActualBolsin();
    return cambio?.esAmbitoBolsin() && cambio.esEnviado();
  }

  private obtenerNroBolsinYCodCMOrigen(registros: RegistroBolsin[]) {
    return registros.flatMap((registro) => {
      const numero = registro.bolsin.getNumeroBolsin();
      const origen = origenesOficiales.get(
        `${registro.bolsin.obtenerCodCMOrigen()}:${numero}`,
      );
      return origen ? [{ ...registro, numero, origen }] : [];
    });
  }

  private async solicitarDatosDeLocalizacionDeBolsines(
    registros: RegistroBolsin[],
  ): Promise<PuntoBolsin[]> {
    const consultables = this.obtenerNroBolsinYCodCMOrigen(registros);
    if (!consultables.length) return [];
    const ubicaciones = await this.crearTracker().obtenerLocalizacionDeBolsines(
      "XTR-4500L",
      consultables.map(({ numero }) => numero),
      consultables.map(({ origen }) => origen),
      [],
    );
    const porNumero = new Map(
      consultables.map((registro) => [String(registro.numero), registro]),
    );
    return ubicaciones.flatMap(([numero, latitud, longitud, actualizado]) => {
      const registro = porNumero.get(numero);
      if (!registro) return [];
      const destino = this.obtenerCMDestino(registro.bolsin);
      return [
        {
          id: registro.id,
          numero: registro.bolsin.getNumeroBolsin(),
          precinto: registro.bolsin.getNumeroPrecinto(),
          destino: destino.getNombre(),
          codigoDestino: destino.getCodigo(),
          latitud: Number(latitud),
          longitud: Number(longitud),
          actualizado,
        },
      ];
    });
  }

  private solicitarMapaConPosicionDeBolsines(puntos: PuntoBolsin[]) {
    return this.mapas.obtenerMapaConPosicionDeBolsines(puntos);
  }

  async tomarSeleccionDeBolsin(idSesion: number, idBolsin: number) {
    const { empleado } = await this.buscarEmpleadoLogueado(idSesion);
    const registro = await this.bolsines.buscarParaSeguimiento(idBolsin);
    if (!registro)
      throw new ErrorSeguimientoBolsines(404, "El bolsín no existe.");
    if (
      !registro.bolsin.esCMOrigenIgualCMLogueado(
        this.buscarCMDeLogueado(empleado).cm,
      )
    )
      throw new ErrorSeguimientoBolsines(
        403,
        "El bolsín pertenece a otra comisión de origen.",
      );
    if (!this.buscarEstadoActualBolsin(registro.bolsin))
      throw new ErrorSeguimientoBolsines(409, "El bolsín ya no está Enviado.");
    return registro;
  }

  async tomarConfirmacionOpcEnviarCorreoGCM(
    idSesion: number,
    idBolsin: number,
  ) {
    const registro = await this.tomarSeleccionDeBolsin(idSesion, idBolsin);
    const destino = this.obtenerCMDestino(registro.bolsin);
    const gerente =
      await this.buscarGCMDeCMDestinoDeBolsinSeleccionado(destino);
    const email = this.obtenerEmailDeGCM(gerente);
    const [punto] = await this.solicitarDatosDeLocalizacionDeBolsines([
      registro,
    ]);
    if (!punto)
      throw new ErrorSeguimientoBolsines(
        503,
        "El GPS no informó una ubicación para el bolsín.",
      );
    await this.llamarCU31NotificarUbicacionDeBolsin(email, punto);
    return this.finCU();
  }

  private obtenerCMDestino(bolsin: Bolsin) {
    return bolsin.getCmDestino();
  }

  private async buscarGCMDeCMDestinoDeBolsinSeleccionado(cm: ComisionMedica) {
    const candidatos = await this.empleados.listarDeComision(cm.getCodigo());
    const gerentes = candidatos.filter(
      (empleado) => empleado.esTuCM(cm) && empleado.sosGCM(),
    );
    if (gerentes.length !== 1)
      throw new ErrorSeguimientoBolsines(
        409,
        "La comisión de destino debe tener exactamente un gerente.",
      );
    return gerentes[0];
  }

  private obtenerEmailDeGCM(gerente: Empleado) {
    return gerente.getEmail();
  }

  private llamarCU31NotificarUbicacionDeBolsin(
    emailDestino: string,
    punto: PuntoBolsin,
  ) {
    return this.cu31.notificarUbicacionDeBolsin({
      emailDestino,
      nroBolsin: punto.numero,
      latitud: String(punto.latitud),
      longitud: String(punto.longitud),
      fechaHoraActualizacion: punto.actualizado,
    });
  }

  private finCU() {
    return { aceptada: true as const };
  }
}
