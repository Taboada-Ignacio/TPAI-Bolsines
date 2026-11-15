import { TransporteHTTPGPS } from "./TransporteHTTPGPS";

export class ServicioGPSTrackerXTR4500L {
  constructor(private readonly transporte = new TransporteHTTPGPS()) {}

  getBolsinLocation(
    apiKey: string,
    nroBolsin: number,
    codCMOrigen: string,
  ): Promise<string> {
    return this.transporte.consultar(
      "xtr-4500l/getBolsinLocation",
      apiKey,
      nroBolsin,
      { codCMOrigen },
    );
  }
}
