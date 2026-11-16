import type {
  RespuestaNotificacionUbicacion,
  SolicitudNotificacionUbicacion,
} from "@/dtos/notificacion-ubicacion.dto";
import {
  SolicitudNotificacionInvalida,
  type GestorNotificarUbicacionBolsin,
} from "@/services/GestorNotificarUbicacionBolsin";
import { ErrorEnvioCorreo } from "@/services/ServicioCorreo";

function responder(respuesta: RespuestaNotificacionUbicacion, status: number) {
  return Response.json(respuesta, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export class PantNotificarUbicacionBolsin {
  constructor(private readonly gestor: GestorNotificarUbicacionBolsin) {}

  async atender(request: Request): Promise<Response> {
    try {
      // El Gestor comprueba en ejecución el contrato de los datos HTTP.
      const solicitud = (await request.json().catch(() => {
        throw new SolicitudNotificacionInvalida(
          "El cuerpo debe contener JSON válido.",
        );
      })) as SolicitudNotificacionUbicacion;
      await this.gestor.notificarUbicacionDeBolsin(solicitud);
      return responder({ aceptada: true }, 200);
    } catch (error) {
      if (error instanceof SolicitudNotificacionInvalida)
        return responder({ error: error.message }, 400);
      if (error instanceof ErrorEnvioCorreo)
        return responder(
          {
            error:
              "El servicio de correo local no pudo aceptar la notificación.",
          },
          503,
        );
      throw error;
    }
  }
}
