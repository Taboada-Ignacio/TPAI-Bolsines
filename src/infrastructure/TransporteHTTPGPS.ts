import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";

export class TransporteHTTPGPS {
  constructor(
    private readonly baseUrl = process.env.GPS_SIMULADOR_BASE_URL ??
      "http://127.0.0.1:3000",
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
      apiKey,
      nroBolsin: String(nroBolsin),
      ...parametros,
    }).toString();
    const signal = AbortSignal.timeout(5000);
    try {
      const respuesta = await this.solicitar(url, {
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
    return new URL(`/api/gps-simulator/${ruta}`, base);
  }
}
