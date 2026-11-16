import { z } from "zod";

function coordenada(limite: number) {
  return z
    .string()
    .regex(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i)
    .refine((valor) => Math.abs(Number(valor)) <= limite);
}

export const solicitudNotificacionUbicacionSchema = z.object({
  emailDestino: z.email(),
  nroBolsin: z.int().positive(),
  latitud: coordenada(90),
  longitud: coordenada(180),
  fechaHoraActualizacion: z.iso.datetime({ offset: true }),
});

export type SolicitudNotificacionUbicacion = z.infer<
  typeof solicitudNotificacionUbicacionSchema
>;

export type RespuestaNotificacionUbicacion =
  { aceptada: true } | { error: string };
