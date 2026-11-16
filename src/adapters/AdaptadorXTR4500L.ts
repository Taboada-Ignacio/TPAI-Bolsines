import { localizacionXtr } from "@/dtos/localizacion-gps.dto";
import type { ServicioGPSTrackerXTR4500L } from "@/infrastructure/ServicioGPSTrackerXTR4500L";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarCodigosCM, validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorXTR4500L implements IAdaptadorLocalizacionBolsines {
  private readonly nrosBolsines: number[];
  private readonly codigosCMOrigen: string[];
  private jsonBolsines: Array<string | null> = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private solicitudEnCurso?: Promise<void>;

  constructor(
    private readonly apiKey: string,
    nrosBolsines: number[],
    codigosCMOrigen: string[],
    private readonly servicio: ServicioGPSTrackerXTR4500L,
  ) {
    validarCodigosCM(codigosCMOrigen, nrosBolsines.length);
    this.nrosBolsines = [...nrosBolsines];
    this.codigosCMOrigen = [...codigosCMOrigen];
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
    if (this.jsonBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    this.datosLocalizacionAdaptado = this.jsonBolsines.flatMap((respuesta, i) =>
      respuesta === null
        ? []
        : [validarFilaGps(this.adaptarRespuesta(respuesta), this.nrosBolsines[i])],
    );
  }

  private async solicitarLote(): Promise<void> {
    this.datosLocalizacionAdaptado = [];
    try {
      const respuestas: Array<string | null> = [];
      for (const [i, numero] of this.nrosBolsines.entries()) {
        try {
          respuestas.push(
            await this.servicio.getBolsinLocation(
              this.apiKey,
              numero,
              this.codigosCMOrigen[i],
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
      this.jsonBolsines = respuestas;
    } catch (error) {
      this.jsonBolsines = [];
      throw error;
    }
  }

  private adaptarRespuesta(respuesta: string): string[] {
    let cuerpo: unknown;
    try {
      cuerpo = JSON.parse(respuesta);
    } catch {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    const resultado = localizacionXtr.safeParse(cuerpo);
    if (!resultado.success) throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    const { numeroBolsin, latitud, longitud, fechaHoraUltimaActualizacion } =
      resultado.data.items[0];
    return [
      String(numeroBolsin),
      String(latitud),
      String(longitud),
      fechaHoraUltimaActualizacion,
    ];
  }
}
