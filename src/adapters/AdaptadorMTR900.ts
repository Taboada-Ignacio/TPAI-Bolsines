import type { ServicioGPSTrackerMTR900 } from "@/infrastructure/ServicioGPSTrackerMTR900";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorMTR900 implements IAdaptadorLocalizacionBolsines {
  private readonly nrosBolsines: number[];
  private matricesBolsines: string[][] = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private solicitudEnCurso?: Promise<void>;

  constructor(
    private readonly apiKey: string,
    nrosBolsines: number[],
    private readonly servicio: ServicioGPSTrackerMTR900,
  ) {
    this.nrosBolsines = [...nrosBolsines];
  }

  async recibirLocalizacionBolsines(): Promise<string[][]> {
    await this.solicitarLocalizacionBolsines();
    this.adaptarLocalizacionBolsines();
    return this.datosLocalizacionAdaptado.map((fila) => [...fila]);
  }

  solicitarLocalizacionBolsines(): Promise<void> {
    this.solicitudEnCurso ??= this.solicitarLote().finally(() => {
      this.solicitudEnCurso = undefined;
    });
    return this.solicitudEnCurso;
  }

  adaptarLocalizacionBolsines(): void {
    if (this.matricesBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    this.datosLocalizacionAdaptado = this.matricesBolsines.map((fila, i) =>
      validarFilaGps(fila, this.nrosBolsines[i]),
    );
  }

  private async solicitarLote(): Promise<void> {
    this.datosLocalizacionAdaptado = [];
    try {
      const filas: string[][] = [];
      for (const numero of this.nrosBolsines) {
        const matriz = await this.servicio.fetchCargoPositions(
          this.apiKey,
          numero,
        );
        if (matriz.length !== 1)
          throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
        filas.push([...matriz[0]]);
      }
      this.matricesBolsines = filas;
    } catch (error) {
      this.matricesBolsines = [];
      throw error;
    }
  }
}
