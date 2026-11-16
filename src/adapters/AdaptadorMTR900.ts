import type { ServicioGPSTrackerMTR900 } from "@/infrastructure/ServicioGPSTrackerMTR900";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorMTR900 implements IAdaptadorLocalizacionBolsines {
  private readonly nrosBolsines: number[];
  private matricesBolsines: Array<string[] | null> = [];
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
    this.datosLocalizacionAdaptado = this.matricesBolsines.flatMap((fila, i) =>
      fila === null ? [] : [validarFilaGps(fila, this.nrosBolsines[i])],
    );
  }

  private async solicitarLote(): Promise<void> {
    this.datosLocalizacionAdaptado = [];
    try {
      const filas: Array<string[] | null> = [];
      for (const numero of this.nrosBolsines) {
        try {
          const matriz = await this.servicio.fetchCargoPositions(
            this.apiKey,
            numero,
          );
          if (matriz.length !== 1)
            throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
          filas.push([...matriz[0]]);
        } catch (error) {
          // A3: un 404 individual significa que ese bolsín no tiene cobertura en el tracker;
          // no debe abortar el resto del lote.
          if (
            error instanceof ErrorGPSTracker &&
            error.tipo === "HTTP" &&
            error.estadoHttp === 404
          ) {
            filas.push(null);
            continue;
          }
          throw error;
        }
      }
      this.matricesBolsines = filas;
    } catch (error) {
      this.matricesBolsines = [];
      throw error;
    }
  }
}
