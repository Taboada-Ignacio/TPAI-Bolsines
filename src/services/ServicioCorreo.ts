export class ErrorEnvioCorreo extends Error {}

export interface ServicioCorreo {
  enviarCorreo(
    destinatario: string,
    asunto: string,
    contenido: string,
    html?: string,
  ): Promise<void>;
}
