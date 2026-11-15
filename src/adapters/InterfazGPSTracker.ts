import { ServicioGPSTrackerMTR900 } from "@/infrastructure/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/infrastructure/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/infrastructure/ServicioGPSTrackerXTR4500L";
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
    apiKey = process.env.GPS_SIMULADOR_API_KEY ?? "",
  ) {
    this.apisKeys = [apiKey, apiKey, apiKey];
  }

  crearAdaptador(): void {
    switch (this.modelo) {
      case "XTR-4500L":
        this.adaptador = new AdaptadorXTR4500L(
          this.apisKeys[0],
          this.nrosBolsines,
          this.codigosCMOrigen,
          this.servicios.xtr,
        );
        break;
      case "QX-7A":
        this.adaptador = new AdaptadorQX7A(
          this.apisKeys[1],
          this.nrosBolsines,
          this.codigosCMDestino,
          this.servicios.qx,
        );
        break;
      case "MTR-900":
        this.adaptador = new AdaptadorMTR900(
          this.apisKeys[2],
          this.nrosBolsines,
          this.servicios.mtr,
        );
        break;
      default:
        throw new ErrorGPSTracker("CONFIGURACION");
    }
  }

  async obtenerLocalizacionDeBolsines(
    modelo: ModeloGPSTracker,
    nrosBolsines: number[],
    codigosCMOrigen: string[],
    codigosCMDestino: string[],
  ): Promise<string[][]> {
    validarCodigosCM(
      codigosCMOrigen,
      modelo === "XTR-4500L" ? nrosBolsines.length : 0,
    );
    validarCodigosCM(
      codigosCMDestino,
      modelo === "QX-7A" ? nrosBolsines.length : 0,
    );
    this.modelo = modelo;
    this.nrosBolsines = [...nrosBolsines];
    this.codigosCMOrigen = [...codigosCMOrigen];
    this.codigosCMDestino = [...codigosCMDestino];
    this.listadoBolsines = [];
    this.crearAdaptador();
    if (!this.adaptador) throw new ErrorGPSTracker("CONFIGURACION");
    this.listadoBolsines = await this.adaptador.recibirLocalizacionBolsines();
    return this.listadoBolsines;
  }
}
