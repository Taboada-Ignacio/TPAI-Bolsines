import {
  solicitudNotificacionUbicacionSchema,
  type SolicitudNotificacionUbicacion,
} from "@/dtos/notificacion-ubicacion.dto";
import type { ServicioCorreo } from "./ServicioCorreo";

export class SolicitudNotificacionInvalida extends Error {}

export class GestorNotificarUbicacionBolsin {
  constructor(private readonly correo: ServicioCorreo) {}

  async notificarUbicacionDeBolsin(
    solicitud: SolicitudNotificacionUbicacion,
  ): Promise<void> {
    const resultado = solicitudNotificacionUbicacionSchema.safeParse(solicitud);
    if (!resultado.success)
      throw new SolicitudNotificacionInvalida(
        "Los datos de notificación son inválidos.",
      );

    const {
      emailDestino,
      nroBolsin,
      latitud,
      longitud,
      fechaHoraActualizacion,
    } = resultado.data;
    const asunto = `Notificación de ubicación del bolsín N.º ${nroBolsin}`;
    const contenido = [
      "Estimado/a Gerente de Comisión Médica:",
      "",
      `Se informa la última ubicación registrada del bolsín N.º ${nroBolsin}.`,
      "",
      `Número de bolsín: ${nroBolsin}`,
      `Latitud: ${latitud}`,
      `Longitud: ${longitud}`,
      `Fecha y hora de última actualización: ${fechaHoraActualizacion}`,
      "",
      "Ubicación en Google Maps:",
      `https://www.google.com/maps?q=${latitud},${longitud}`,
      "",
      "Sistema de Gestión de Bolsines.",
    ].join("\n");
    await this.correo.enviarCorreo(emailDestino, asunto, contenido);
  }
}
