import { z } from "zod";

export const localizacionXtr = z.object({
  numeroBolsin: z.int32(),
  latitud: z.number(),
  longitud: z.number(),
  fechaHoraActualizacion: z.string(),
});

export const matrizGps = z.array(z.array(z.string()));

const numeroDeBolsin = z
  .string()
  .regex(/^-?\d+$/)
  .transform(Number)
  .pipe(z.int32());

function coordenada(limite: number) {
  return z
    .string()
    .regex(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i)
    .transform(Number)
    .pipe(z.number().min(-limite).max(limite));
}

export const filaGps = z.tuple([
  numeroDeBolsin,
  coordenada(90),
  coordenada(180),
  z.iso.datetime(),
]);
