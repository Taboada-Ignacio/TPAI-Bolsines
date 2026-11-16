import type { ServicioGPSTrackerQX7A } from "@/infrastructure/ServicioGPSTrackerQX7A";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarCodigosCM, validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorQX7A implements IAdaptadorLocalizacionBolsines {
  private readonly nrosBolsines: number[];
  private readonly codigosCMDestino: string[];
  private stringBolsines: Array<string | null> = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private solicitudEnCurso?: Promise<void>;

  constructor(
    private readonly apiKey: string,
    nrosBolsines: number[],
    codigosCMDestino: string[],
    private readonly servicio: ServicioGPSTrackerQX7A,
  ) {
    validarCodigosCM(codigosCMDestino, nrosBolsines.length);
    this.nrosBolsines = [...nrosBolsines];
    this.codigosCMDestino = [...codigosCMDestino];
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
    if (this.stringBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    this.datosLocalizacionAdaptado = this.stringBolsines.flatMap(
      (respuesta, i) => {
        if (respuesta === null) return [];
        const fila = respuesta.split(",").map((campo) => campo.trim());
        return [validarFilaGps(fila, this.nrosBolsines[i])];
      },
    );
  }

  private async solicitarLote(): Promise<void> {
    this.datosLocalizacionAdaptado = [];
    try {
      const respuestas: Array<string | null> = [];
      for (const [i, numero] of this.nrosBolsines.entries()) {
        try {
          respuestas.push(
            await this.servicio.retrieveTrackingData(
              this.apiKey,
              numero,
              this.codigosCMDestino[i],
            ),
          );
        } catch (error) {
          // A3: un 404 individual significa que ese bolsín no tiene cobertura en el tracker;
          // no debe abortar el resto del lote.
          if (
            error instanceof ErrorGPSTracker &&
            error.tipo === "HTTP" &&
            error.estadoHttp === 404
          ) {
            respuestas.push(null);
            continue;
          }
          throw error;
        }
      }
      this.stringBolsines = respuestas;
    } catch (error) {
      this.stringBolsines = [];
      throw error;
    }
  }
}
