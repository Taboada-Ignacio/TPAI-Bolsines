import {
  InterfazGPSTracker,
  type ModeloGPSTracker,
} from "@/adapters/InterfazGPSTracker";
import type { InterfazGoogleMaps } from "@/adapters/InterfazGoogleMaps";
import { obtenerCoordenadaCm } from "@/lib/seguimiento/rutas-envio";
import type { Bolsin } from "@/domain/Bolsin";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import type { Empleado } from "@/domain/Empleado";
import type {
  PuntoBolsin,
  RemitoResumen,
} from "@/dtos/seguimiento-bolsines.dto";
import type { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";
import type { EmpleadoRepositoryPrisma } from "@/infrastructure/EmpleadoRepositoryPrisma";
import type { GestorNotificarUbicacionBolsin } from "./GestorNotificarUbicacionBolsin";
import type { SesionService } from "./SesionService";

// Mapeo 1:1 entre códigos locales de CM (init.sql) y códigos oficiales de sede del GPS tracker.
const sedesOficialesPorCM = new Map<string, string>([
  ["CM-CBA", "CM-CBA-01"],
  ["CM-SF", "CM-ROS-02"],
  ["CM-MZA", "CM-MDZ-03"],
  ["CM-BA", "CM-BA-01"],
  ["CM-TUC", "CM-TUC-01"],
  ["CM-SAL", "CM-SLA-01"],
  ["CM-JUJ", "CM-JUJ-01"],
  ["CM-NEU", "CM-NQN-01"],
]);

// Overrides específicos para los fixtures 101..110 que comparten CM local (p.ej. 110 en CM-CBA-02).
const origenesOficialesPorFixture = new Map<string, string>([
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

const destinosOficialesPorFixture = new Map<string, string>([
  ["CM-BA:107", "CM-MDQ-01"],
]);

function resolverSedeOficialOrigen(codOrigen: string, numero: number): string {
  return (
    origenesOficialesPorFixture.get(`${codOrigen}:${numero}`) ??
    sedesOficialesPorCM.get(codOrigen) ??
    codOrigen
  );
}

function resolverSedeOficialDestino(
  codDestino: string,
  numero: number,
): string {
  return (
    destinosOficialesPorFixture.get(`${codDestino}:${numero}`) ??
    sedesOficialesPorCM.get(codDestino) ??
    codDestino
  );
}

type BolsinConRemitoOpcional = Bolsin & {
  getRemito?: () => RemitoResumen | null | undefined;
  remito?: RemitoResumen | null;
};

function extraerRemitoOpcional(bolsin: Bolsin): RemitoResumen | null | undefined {
  const candidato = bolsin as BolsinConRemitoOpcional;
  const valor =
    typeof candidato.getRemito === "function"
      ? candidato.getRemito()
      : candidato.remito;
  if (!valor || typeof valor !== "object") return undefined;
  if (
    typeof valor.numero === "string" &&
    typeof valor.asunto === "string" &&
    typeof valor.tipoDocumento === "string"
  ) {
    return {
      numero: valor.numero,
      asunto: valor.asunto,
      tipoDocumento: valor.tipoDocumento,
    };
  }
  return undefined;
}

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

  async opcConsultarUbicacionDeBolsines(
    idSesion: number,
    modeloGps: ModeloGPSTracker = "XTR-4500L",
  ) {
    const { empleado, comisionMedicaId } =
      await this.buscarEmpleadoLogueado(idSesion);
    const { cm, descripcion } = this.buscarCMDeLogueado(empleado);
    const enviados =
      await this.buscarBolsinesEnviadosConCMOrigenIgualACMLogueado(
        comisionMedicaId,
        cm,
      );
    const emailsGcm = await this.resolverEmailsGcmPorDestino(enviados);
    const puntos = await this.solicitarDatosDeLocalizacionDeBolsines(
      enviados,
      modeloGps,
      emailsGcm,
    );
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

  private obtenerDatosConsultaGps(registros: RegistroBolsin[]) {
    return registros.map((registro) => {
      const numero = registro.bolsin.getNumeroBolsin();
      const codOrigen = registro.bolsin.obtenerCodCMOrigen();
      const codDestino = registro.bolsin.obtenerCodCMDestino();
      return {
        ...registro,
        numero,
        origen: resolverSedeOficialOrigen(codOrigen, numero),
        destino: resolverSedeOficialDestino(codDestino, numero),
      };
    });
  }

  private async resolverEmailsGcmPorDestino(registros: RegistroBolsin[]) {
    const codigosUnicos = Array.from(
      new Set(registros.map(({ bolsin }) => bolsin.obtenerCodCMDestino())),
    );
    const mapa = new Map<string, string | null>();
    await Promise.all(
      codigosUnicos.map(async (codigo) => {
        try {
          const candidatos = await this.empleados.listarDeComision(codigo);
          const gerentes = candidatos.filter(
            (empleado) =>
              empleado.getComisionMedica().getCodigo() === codigo &&
              empleado.sosGCM(),
          );
          mapa.set(
            codigo,
            gerentes.length === 1 ? gerentes[0].getEmail() : null,
          );
        } catch {
          mapa.set(codigo, null);
        }
      }),
    );
    return mapa;
  }

  private construirPuntoBolsin(
    registro: RegistroBolsin,
    latitud: number,
    longitud: number,
    actualizado: string,
    emailsGcmPorDestino?: Map<string, string | null>,
  ): PuntoBolsin {
    const destino = this.obtenerCMDestino(registro.bolsin);
    const codigoDestino = destino.getCodigo();
    const peso = registro.bolsin.getPeso();
    const remito = extraerRemitoOpcional(registro.bolsin);
    return {
      id: registro.id,
      numero: registro.bolsin.getNumeroBolsin(),
      precinto: registro.bolsin.getNumeroPrecinto(),
      destino: destino.getNombre(),
      codigoDestino,
      latitud,
      longitud,
      actualizado,
      ...(Number.isFinite(peso) && peso > 0 ? { pesoKg: peso } : {}),
      emailGcm: emailsGcmPorDestino?.get(codigoDestino) ?? null,
      estadoCobertura: "vivo",
      ...(remito !== undefined ? { remito } : {}),
    };
  }

  private async solicitarDatosDeLocalizacionDeBolsines(
    registros: RegistroBolsin[],
    modeloGps: ModeloGPSTracker = "XTR-4500L",
    emailsGcmPorDestino?: Map<string, string | null>,
  ): Promise<PuntoBolsin[]> {
    const consultables = this.obtenerDatosConsultaGps(registros);
    if (!consultables.length) return [];

    let ubicaciones: string[][];
    try {
      ubicaciones = await this.crearTracker().obtenerLocalizacionDeBolsines(
        modeloGps,
        consultables.map(({ numero }) => numero),
        modeloGps === "XTR-4500L"
          ? consultables.map(({ origen }) => origen)
          : [],
        modeloGps === "QX-7A"
          ? consultables.map(({ destino }) => destino)
          : [],
      );
    } catch (error) {
      if (process.env.USE_PG_MEM !== "true") throw error;
      const ahora = new Date().toISOString();
      return consultables.map((registro) => {
        const origenCoord = obtenerCoordenadaCm(
          registro.bolsin.obtenerCodCMOrigen(),
        );
        const destino = this.obtenerCMDestino(registro.bolsin);
        const destinoCoord = obtenerCoordenadaCm(destino.getCodigo());
        return this.construirPuntoBolsin(
          registro,
          (origenCoord.lat + destinoCoord.lat) / 2,
          (origenCoord.lng + destinoCoord.lng) / 2,
          ahora,
          emailsGcmPorDestino,
        );
      });
    }
    const porNumero = new Map(
      consultables.map((registro) => [String(registro.numero), registro]),
    );
    return ubicaciones.flatMap(([numero, latitud, longitud, actualizado]) => {
      const registro = porNumero.get(numero);
      if (!registro) return [];
      return [
        this.construirPuntoBolsin(
          registro,
          Number(latitud),
          Number(longitud),
          actualizado,
          emailsGcmPorDestino,
        ),
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
    const destinatarioNombre =
      `${gerente.getNombre()} ${gerente.getApellido()}`.trim();
    const [punto] = await this.solicitarDatosDeLocalizacionDeBolsines(
      [registro],
      "XTR-4500L",
      new Map([[destino.getCodigo(), email]]),
    );
    if (!punto)
      throw new ErrorSeguimientoBolsines(
        503,
        "El GPS no informó una ubicación para el bolsín.",
      );
    const cmOrigen = registro.bolsin.getCmOrigen();
    await this.llamarCU31NotificarUbicacionDeBolsin(
      email,
      punto,
      `${cmOrigen.getNombre()} (${cmOrigen.getCodigo()})`,
    );
    return this.finCU(email, destinatarioNombre, new Date().toISOString());
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
    cmOrigen?: string,
  ) {
    return this.cu31.notificarUbicacionDeBolsin({
      emailDestino,
      nroBolsin: punto.numero,
      latitud: String(punto.latitud),
      longitud: String(punto.longitud),
      fechaHoraActualizacion: punto.actualizado,
      nroPrecinto: punto.precinto,
      cmOrigen,
      cmDestino: `${punto.destino} (${punto.codigoDestino})`,
      remito: punto.remito ?? null,
    });
  }

  private finCU(
    destinatarioEmail: string,
    destinatarioNombre: string,
    fechaEnvio: string,
  ) {
    return {
      aceptada: true as const,
      destinatarioEmail,
      destinatarioNombre,
      fechaEnvio,
    };
  }
}
