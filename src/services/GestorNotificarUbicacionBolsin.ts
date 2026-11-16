import {
  solicitudNotificacionUbicacionSchema,
  type SolicitudNotificacionUbicacion,
} from "@/dtos/notificacion-ubicacion.dto";
import { formatearCorreoUbicacion } from "./formatearCorreoUbicacion";
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

    const { emailDestino, nroBolsin } = resultado.data;
    const asunto = `Notificación de ubicación del bolsín N.º ${nroBolsin}`;
    const { texto, html } = formatearCorreoUbicacion(resultado.data);
    await this.correo.enviarCorreo(emailDestino, asunto, texto, html);
  }
}
