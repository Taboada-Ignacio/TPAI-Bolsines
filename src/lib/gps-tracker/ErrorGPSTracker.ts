type TipoErrorGps =
  "CONFIGURACION" | "CONEXION" | "TIMEOUT" | "HTTP" | "RESPUESTA_INVALIDA";

const mensajes: Record<TipoErrorGps, string> = {
  CONFIGURACION: "Configuración de GPS inválida o incompleta.",
  CONEXION: "No se pudo completar la comunicación con el GPS.",
  TIMEOUT: "Se agotó el tiempo de espera del GPS.",
  HTTP: "El GPS devolvió un error HTTP.",
  RESPUESTA_INVALIDA: "El GPS devolvió una localización inválida.",
};

export class ErrorGPSTracker extends Error {
  constructor(
    public readonly tipo: TipoErrorGps,
    public readonly estadoHttp?: number,
  ) {
    super(mensajes[tipo]);
    this.name = "ErrorGPSTracker";
  }
}
