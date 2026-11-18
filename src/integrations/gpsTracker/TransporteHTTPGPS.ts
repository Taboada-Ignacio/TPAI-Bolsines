import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";

/**
 * Centraliza las solicitudes HTTP a los servicios GPS. Incorpora las credenciales,
 * controla los tiempos de espera y traduce los errores de comunicación.
 * Los servicios comparten este transporte y los adaptadores interpretan los datos.
 */
export class TransporteHTTPGPS {
  constructor(
    private readonly baseUrl = process.env.GPS_TRACKER_BASE_URL ??
      "http://127.0.0.1:8080",
    private readonly solicitar: typeof fetch = fetch,
  ) {}

  async consultar(
    ruta: string,
    apiKey: string,
    nroBolsin: number,
    parametros: Record<string, string> = {},
  ): Promise<string> {
    const url = this.urlPara(ruta);
    if (!apiKey.trim()) throw new ErrorGPSTracker("CONFIGURACION");
    url.search = new URLSearchParams({
      numeroBolsin: String(nroBolsin),
      ...parametros,
    }).toString();
    const signal = AbortSignal.timeout(5000);
    try {
      const respuesta = await this.solicitar(url, {
        method: "GET",
        headers: { "X-API-Key": apiKey },
        cache: "no-store",
        redirect: "error",
        signal,
      });
      if (!respuesta.ok) {
        void respuesta.body?.cancel().catch(() => {});
        throw new ErrorGPSTracker("HTTP", respuesta.status);
      }
      return await respuesta.text();
    } catch (error) {
      if (error instanceof ErrorGPSTracker) throw error;
      throw new ErrorGPSTracker(signal.aborted ? "TIMEOUT" : "CONEXION");
    }
  }

  private urlPara(ruta: string): URL {
    const base = URL.parse(this.baseUrl);
    if (
      !base ||
      !["http:", "https:"].includes(base.protocol) ||
      base.username ||
      base.password
    ) {
      throw new ErrorGPSTracker("CONFIGURACION");
    }
    return new URL(`/api/${ruta}`, base);
  }
}
