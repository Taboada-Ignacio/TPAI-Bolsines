import { localizacionXtr } from "@/dtos/localizacion-gps.dto";
import { ServicioGPSTrackerXTR4500L } from "@/integrations/gpsTracker/ServicioGPSTrackerXTR4500L";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarCodigosCM, validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorXTR4500L implements IAdaptadorLocalizacionBolsines {
  private apiKey = "";
  private nrosBolsines: number[] = [];
  private readonly codigosCMOrigen: string[];
  private jsonBolsines: string[] = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private recepcionEnCurso = false;

  constructor(
    codigosCMOrigen: string[],
    private readonly servicio = new ServicioGPSTrackerXTR4500L(),
  ) {
    this.codigosCMOrigen = [...codigosCMOrigen];
  }

  async recibirLocalizacionBolsines(
    apiKey: string,
    nrosBolsines: number[],
  ): Promise<string[][]> {
    // 1. Validar el lote antes de guardar los datos de la consulta.
    if (this.recepcionEnCurso || (nrosBolsines.length > 0 && !apiKey.trim())) {
      throw new ErrorGPSTracker("CONFIGURACION");
    }
    validarCodigosCM(this.codigosCMOrigen, nrosBolsines.length);
    // 2. Reservar la instancia y copiar los números del lote.
    this.recepcionEnCurso = true;
    this.apiKey = apiKey;
    this.nrosBolsines = [...nrosBolsines];
    try {
      // 3. Solicitar las ubicaciones y esperar las respuestas del proveedor.
      await this.solicitarLocalizacionBolsines();
      // 4. Convertir las respuestas al formato común y devolver una copia.
      this.adaptarLocalizacionBolsines();
      return this.datosLocalizacionAdaptado.map((fila) => [...fila]);
    } finally {
      // 5. Limpiar la clave y liberar la instancia incluso si hubo un error.
      this.apiKey = "";
      this.recepcionEnCurso = false;
    }
  }

  async solicitarLocalizacionBolsines(): Promise<void> {
    this.jsonBolsines = [];
    this.datosLocalizacionAdaptado = [];
    const respuestas: string[] = [];
    // Pedir un JSON por bolsín usando su código de CM origen.
    for (const [i, numero] of this.nrosBolsines.entries()) {
      respuestas.push(
        await this.servicio.getBolsinLocation(
          this.apiKey,
          numero,
          this.codigosCMOrigen[i],
        ),
      );
    }
    this.jsonBolsines = respuestas;
  }

  adaptarLocalizacionBolsines(): void {
    if (this.jsonBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    // Interpretar cada JSON, validar su esquema y comprobar la fila contra el bolsín solicitado.
    this.datosLocalizacionAdaptado = this.jsonBolsines.map((respuesta, i) => {
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
      const fila = [
        String(numeroBolsin),
        String(latitud),
        String(longitud),
        fechaHoraUltimaActualizacion,
      ];
      return validarFilaGps(fila, this.nrosBolsines[i]);
    });
  }
}
