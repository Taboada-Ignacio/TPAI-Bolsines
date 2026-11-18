import { ServicioGPSTrackerMTR900 } from "@/integrations/gpsTracker/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/integrations/gpsTracker/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/integrations/gpsTracker/ServicioGPSTrackerXTR4500L";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { AdaptadorMTR900 } from "./AdaptadorMTR900";
import { AdaptadorQX7A } from "./AdaptadorQX7A";
import { AdaptadorXTR4500L } from "./AdaptadorXTR4500L";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarCodigosCM } from "./validacionLocalizacionGps";

export type ModeloGPSTracker = "XTR-4500L" | "QX-7A" | "MTR-900";

type ServiciosGPSTracker = {
  xtr: ServicioGPSTrackerXTR4500L;
  qx: ServicioGPSTrackerQX7A;
  mtr: ServicioGPSTrackerMTR900;
};

export class InterfazGPSTracker {
  private readonly apisKeys: string[];
  private listadoBolsines: string[][] = [];
  private nrosBolsines: number[] = [];
  private codigosCMOrigen: string[] = [];
  private codigosCMDestino: string[] = [];
  private modelo?: ModeloGPSTracker;
  private adaptador?: IAdaptadorLocalizacionBolsines;

  constructor(
    private readonly servicios: ServiciosGPSTracker = {
      xtr: new ServicioGPSTrackerXTR4500L(),
      qx: new ServicioGPSTrackerQX7A(),
      mtr: new ServicioGPSTrackerMTR900(),
    },
    apisKeys: readonly [string, string, string] = [
      process.env.GPS_TRACKER_XTR_API_KEY ?? "",
      process.env.GPS_TRACKER_NAVTRACK_API_KEY ?? "",
      process.env.GPS_TRACKER_GEOPULSE_API_KEY ?? "",
    ],
  ) {
    this.apisKeys = [...apisKeys];
  }

  crearAdaptador(): void {
    switch (this.modelo) {
      case "XTR-4500L":
        this.adaptador = new AdaptadorXTR4500L(
          this.codigosCMOrigen,
          this.servicios.xtr,
        );
        break;
      case "QX-7A":
        this.adaptador = new AdaptadorQX7A(
          this.codigosCMDestino,
          this.servicios.qx,
        );
        break;
      case "MTR-900":
        this.adaptador = new AdaptadorMTR900(this.servicios.mtr);
        break;
      default:
        throw new ErrorGPSTracker("CONFIGURACION");
    }
  }

  // Sobrecargas de TypeScript: cada firma define los argumentos de un modelo.
  // Las tres comparten el cuerpo del método async declarado debajo.
  obtenerLocalizacionDeBolsines(
    modelo: "XTR-4500L",
    nrosBolsines: number[],
    codigosCMOrigen: string[],
  ): Promise<string[][]>;
  obtenerLocalizacionDeBolsines(
    modelo: "QX-7A",
    nrosBolsines: number[],
    codigosCMDestino: string[],
  ): Promise<string[][]>;
  obtenerLocalizacionDeBolsines(
    modelo: "MTR-900",
    nrosBolsines: number[],
  ): Promise<string[][]>;
  async obtenerLocalizacionDeBolsines(
    modelo: ModeloGPSTracker,
    nrosBolsines: number[],
    codigosCM?: string[],
  ): Promise<string[][]> {
    // 1. Identificar el modelo y validar los códigos de CM requeridos.
    const indiceClave = { "XTR-4500L": 0, "QX-7A": 1, "MTR-900": 2 }[modelo];
    if (
      indiceClave === undefined ||
      (modelo === "MTR-900" ? codigosCM !== undefined : codigosCM === undefined)
    ) {
      throw new ErrorGPSTracker("CONFIGURACION");
    }
    const codigos = codigosCM ?? [];
    validarCodigosCM(codigos, modelo === "MTR-900" ? 0 : nrosBolsines.length);

    // 2. Devolver un resultado vacío si el lote no tiene bolsines.
    if (nrosBolsines.length === 0) return [];

    // 3. Guardar el modelo, copiar el lote y reiniciar el resultado.
    this.modelo = modelo;
    this.nrosBolsines = [...nrosBolsines];
    this.codigosCMOrigen = modelo === "XTR-4500L" ? [...codigos] : [];
    this.codigosCMDestino = modelo === "QX-7A" ? [...codigos] : [];
    this.listadoBolsines = [];

    // 4. Crear el adaptador concreto para el modelo seleccionado.
    this.crearAdaptador();
    if (!this.adaptador) throw new ErrorGPSTracker("CONFIGURACION");

    // 5. Consultar al adaptador con la clave del modelo y esperar la matriz.
    const adaptador = this.adaptador;
    const listado = await adaptador.recibirLocalizacionBolsines(
      this.apisKeys[indiceClave],
      this.nrosBolsines,
    );

    // 6. Devolver el resultado y guardarlo si su adaptador sigue vigente.
    if (this.adaptador !== adaptador) return listado;
    this.listadoBolsines = listado;
    return this.listadoBolsines;
  }
}
