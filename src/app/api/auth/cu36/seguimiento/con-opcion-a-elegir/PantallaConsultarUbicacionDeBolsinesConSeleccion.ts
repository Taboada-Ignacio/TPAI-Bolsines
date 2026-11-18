import { modeloGpsSchema } from "@/dtos/seguimiento-bolsin.dto";
import { z } from "zod";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { ErrorEnvioCorreo } from "@/services/ServicioCorreo";
import { SolicitudNotificacionInvalida } from "@/services/GestorNotificarUbicacionBolsin";
import {
  ErrorSeguimientoConSeleccion,
  type GestorConsultarUbicacionesDeBolsinConSeleccion,
} from "@/services/GestorConsultarUbicacionesDeBolsinConSeleccion";

const seleccion = z.strictObject({
  bolsinId: z.number().int().positive().max(2147483647),
});

export class PantallaConsultarUbicacionDeBolsinesConSeleccion {
  constructor(
    private readonly gestor: GestorConsultarUbicacionesDeBolsinConSeleccion,
  ) {}

  solicitarTipoTracker(idSesion: number) {
    return this.responder(() => this.gestor.solicitarTipoTracker(idSesion));
  }

  tomarTipoTracker(idSesion: number, valor: string) {
    const modelo = modeloGpsSchema.safeParse(valor);
    if (!modelo.success)
      return this.json({ error: "Indicá un modelo de GPS válido." }, 400);
    this.gestor.tomarTipoTracker(modelo.data);
    return this.responder(() =>
      this.gestor.opcConsultarUbicacionDeBolsines(idSesion),
    );
  }

  tomarSeleccionDeBolsin(idSesion: number, request: Request) {
    return this.atenderSeleccion(request, async (id) => {
      const seleccionado = await this.gestor.tomarSeleccionDeBolsin(
        idSesion,
        id,
      );
      return this.solicitarOpcEnviarCorreoGCM(seleccionado.id);
    });
  }

  async tomarConfirmacionOpcEnviarCorreoGCM(
    idSesion: number,
    request: Request,
  ) {
    const datos = seleccion
      .extend({ modeloGps: modeloGpsSchema })
      .safeParse(await request.json().catch(() => null));
    if (!datos.success)
      return this.json(
        { error: "Indicá el bolsín y un modelo de GPS válido." },
        400,
      );
    this.gestor.tomarTipoTracker(datos.data.modeloGps);
    return this.responder(() =>
      this.gestor.tomarConfirmacionOpcEnviarCorreoGCM(
        idSesion,
        datos.data.bolsinId,
      ),
    );
  }

  private solicitarOpcEnviarCorreoGCM(seleccionado: number) {
    return { seleccionado, confirmarNotificacion: true as const };
  }

  private async atenderSeleccion(
    request: Request,
    operar: (id: number) => Promise<object>,
  ) {
    const datos = seleccion.safeParse(await request.json().catch(() => null));
    if (!datos.success)
      return this.json(
        { error: "Indicá un identificador de bolsín válido." },
        400,
      );
    return this.responder(() => operar(datos.data.bolsinId));
  }

  private json(datos: object, status = 200) {
    return Response.json(datos, {
      status,
      headers: { "Cache-Control": "no-store" },
    });
  }

  private async responder(operar: () => Promise<object>) {
    try {
      return this.json(await operar());
    } catch (error) {
      if (error instanceof ErrorSeguimientoConSeleccion)
        return this.json({ error: error.message }, error.estado);
      if (error instanceof ErrorGPSTracker)
        return this.json(
          { error: "No se pudieron obtener las ubicaciones GPS." },
          503,
        );
      if (error instanceof ErrorEnvioCorreo)
        return this.json(
          { error: "El servicio de correo no pudo enviar la notificación." },
          503,
        );
      if (error instanceof SolicitudNotificacionInvalida)
        return this.json(
          {
            error:
              "Los datos del gerente o del GPS no permiten enviar la notificación.",
          },
          409,
        );
      throw error;
    }
  }
}
