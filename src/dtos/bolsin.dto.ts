import { z } from "zod";

const entero = z.number().int().min(-2_147_483_648).max(2_147_483_647);
const id = entero.positive();

export const bolsinEdicionSchema = z.object({
  fecha: z.iso.datetime({ offset: true }).transform((fecha) => new Date(fecha)),
  numeroBolsin: entero,
  numeroPrecinto: entero,
  peso: z.number(),
  cmOrigenId: id,
  cmDestinoId: id,
});

export const bolsinAltaSchema = bolsinEdicionSchema.extend({
  estadoId: id,
  responsableCEId: id,
});
