import { matrizGps } from "@/dtos/localizacion-gps.dto";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { TransporteHTTPGPS } from "./TransporteHTTPGPS";

export class ServicioGPSTrackerMTR900 {
  constructor(private readonly transporte = new TransporteHTTPGPS()) {}

  async fetchCargoPositions(
    apiKey: string,
    nroBolsin: number,
  ): Promise<string[][]> {
    const cuerpo = await this.transporte.consultar(
      "mtr-900/fetchCargoPositions",
      apiKey,
      nroBolsin,
    );
    let matriz: unknown;
    try {
      matriz = JSON.parse(cuerpo);
    } catch {
      throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    }
    const resultado = matrizGps.safeParse(matriz);
    if (!resultado.success) throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
    return resultado.data;
  }
}
