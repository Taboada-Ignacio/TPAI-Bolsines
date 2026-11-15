import { TransporteHTTPGPS } from "./TransporteHTTPGPS";

export class ServicioGPSTrackerQX7A {
  constructor(private readonly transporte = new TransporteHTTPGPS()) {}

  retrieveTrackingData(
    apiKey: string,
    nroBolsin: number,
    codCMDestino: string,
  ): Promise<string> {
    return this.transporte.consultar(
      "qx-7a/retrieveTrackingData",
      apiKey,
      nroBolsin,
      { codCMDestino },
    );
  }
}
