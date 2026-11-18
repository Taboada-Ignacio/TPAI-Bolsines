import { ServicioGPSTrackerQX7A } from "@/integrations/gpsTracker/ServicioGPSTrackerQX7A";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarCodigosCM, validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorQX7A implements IAdaptadorLocalizacionBolsines {
  private apiKey = "";
  private nrosBolsines: number[] = [];
  private readonly codigosCMDestino: string[];
  private stringBolsines: string[] = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private recepcionEnCurso = false;

  constructor(
    codigosCMDestino: string[],
    private readonly servicio = new ServicioGPSTrackerQX7A(),
  ) {
    this.codigosCMDestino = [...codigosCMDestino];
  }

  async recibirLocalizacionBolsines(
    apiKey: string,
    nrosBolsines: number[],
  ): Promise<string[][]> {
    // 1. Validar el lote antes de guardar los datos de la consulta.
    if (this.recepcionEnCurso || (nrosBolsines.length > 0 && !apiKey.trim())) {
      throw new ErrorGPSTracker("CONFIGURACION");
    }
    validarCodigosCM(this.codigosCMDestino, nrosBolsines.length);
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
    this.stringBolsines = [];
    this.datosLocalizacionAdaptado = [];
    const respuestas: string[] = [];
    // Pedir una respuesta CSV por bolsín usando su código de CM destino.
    for (const [i, numero] of this.nrosBolsines.entries()) {
      respuestas.push(
        await this.servicio.retrieveTrackingData(
          this.apiKey,
          numero,
          this.codigosCMDestino[i],
        ),
      );
    }
    this.stringBolsines = respuestas;
  }

  adaptarLocalizacionBolsines(): void {
    if (this.stringBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    // Separar y limpiar los campos del CSV y validar la fila contra el bolsín solicitado.
    this.datosLocalizacionAdaptado = this.stringBolsines.map((respuesta, i) =>
      validarFilaGps(
        respuesta.split(",").map((campo) => campo.trim()),
        this.nrosBolsines[i],
      ),
    );
  }
}
