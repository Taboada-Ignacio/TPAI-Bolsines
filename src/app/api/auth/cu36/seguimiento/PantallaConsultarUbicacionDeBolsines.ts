import { z } from "zod";
import type {
  MapaConPosiciones,
  SeguimientoBolsines,
} from "@/dtos/seguimiento-bolsines.dto";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { ErrorEnvioCorreo } from "@/services/ServicioCorreo";
import { SolicitudNotificacionInvalida } from "@/services/GestorNotificarUbicacionBolsin";
import {
  ErrorSeguimientoBolsines,
  type GestorConsultarUbicacionDeBolsin,
} from "@/services/GestorConsultarUbicacionDeBolsin";

const seleccion = z.strictObject({
  bolsinId: z.number().int().positive().max(2147483647),
});

export class PantallaConsultarUbicacionDeBolsines {
  constructor(private readonly gestor: GestorConsultarUbicacionDeBolsin) {}

  habilitarPantalla(idSesion: number) {
    return this.opcConsultarUbicacionDeBolsines(idSesion);
  }

  opcConsultarUbicacionDeBolsines(idSesion: number) {
    return this.responder(async () => {
      const { comision, mapa, sinUbicacion } =
        await this.gestor.opcConsultarUbicacionDeBolsines(idSesion);
      return {
        ...this.mostrarCMDeLogueado(comision),
        ...this.mostrarPosicionDeBolsines(mapa),
        sinUbicacion,
      } satisfies SeguimientoBolsines;
    });
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

  tomarConfirmacionOpcEnviarCorreoGCM(idSesion: number, request: Request) {
    return this.atenderSeleccion(request, (id) =>
      this.gestor.tomarConfirmacionOpcEnviarCorreoGCM(idSesion, id),
    );
  }

  private mostrarCMDeLogueado(comision: string) {
    return { comision };
  }

  private mostrarPosicionDeBolsines(mapa: MapaConPosiciones) {
    return {
      mapa: {
        estilo: mapa.estilo,
        ...this.mostrarOpcionesDeSeleccionBolsin(mapa),
      },
    };
  }

  private mostrarOpcionesDeSeleccionBolsin(mapa: MapaConPosiciones) {
    return { puntos: mapa.puntos };
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
      if (error instanceof ErrorSeguimientoBolsines)
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
