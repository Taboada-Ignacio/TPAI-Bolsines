import { ServicioGPSTrackerMTR900 } from "@/integrations/gpsTracker/ServicioGPSTrackerMTR900";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import type { IAdaptadorLocalizacionBolsines } from "./IAdaptadorLocalizacionBolsines";
import { validarFilaGps } from "./validacionLocalizacionGps";

export class AdaptadorMTR900 implements IAdaptadorLocalizacionBolsines {
  private apiKey = "";
  private nrosBolsines: number[] = [];
  private matricesBolsines: string[][] = [];
  private datosLocalizacionAdaptado: string[][] = [];
  private recepcionEnCurso = false;

  constructor(private readonly servicio = new ServicioGPSTrackerMTR900()) {}

  async recibirLocalizacionBolsines(
    apiKey: string,
    nrosBolsines: number[],
  ): Promise<string[][]> {
    // 1. Validar el lote antes de guardar los datos de la consulta.
    if (this.recepcionEnCurso || (nrosBolsines.length > 0 && !apiKey.trim())) {
      throw new ErrorGPSTracker("CONFIGURACION");
    }
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
    this.matricesBolsines = [];
    this.datosLocalizacionAdaptado = [];
    const respuestas: string[][] = [];
    // Pedir una matriz por bolsín y guardar su única fila.
    for (const numero of this.nrosBolsines) {
      const matriz = await this.servicio.fetchCargoPositions(
        this.apiKey,
        numero,
      );
      if (matriz.length !== 1) throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
      respuestas.push(matriz[0]);
    }
    this.matricesBolsines = respuestas;
  }

  adaptarLocalizacionBolsines(): void {
    if (this.matricesBolsines.length !== this.nrosBolsines.length) {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    // Validar y normalizar cada fila y comprobar que corresponde al bolsín solicitado.
    this.datosLocalizacionAdaptado = this.matricesBolsines.map((respuesta, i) =>
      validarFilaGps(respuesta, this.nrosBolsines[i]),
    );
  }
}
