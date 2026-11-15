import { z } from "zod";

const textoObligatorio = z.string().trim().min(1);
const parametrosGps = z.object({
  apiKey: z.string().refine((clave) => clave.trim().length > 0),
  nroBolsin: z
    .string()
    .regex(/^-?\d+$/)
    .transform(Number)
    .pipe(z.number().int().min(-2_147_483_648).max(2_147_483_647)),
  simularFallo: z.enum(["0", "1"]).optional(),
});

export const parametrosXtr = parametrosGps.extend({
  codCMOrigen: textoObligatorio,
});
export const parametrosQx = parametrosGps.extend({
  codCMDestino: textoObligatorio,
});
export const parametrosMtr = parametrosGps;

export type ParametrosGps = z.output<typeof parametrosGps>;
