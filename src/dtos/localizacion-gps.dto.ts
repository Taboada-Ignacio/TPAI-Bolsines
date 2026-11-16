import { z } from "zod";

const itemXtr = z.object({
  numeroBolsin: z.int32(),
  latitud: z.number(),
  longitud: z.number(),
  fechaHoraUltimaActualizacion: z.string(),
});

export const localizacionXtr = z.object({ items: z.tuple([itemXtr]) });

export const matrizGps = z
  .array(z.tuple([z.int32(), z.number(), z.number(), z.string()]))
  .transform((filas) => filas.map((fila) => fila.map(String)));

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
