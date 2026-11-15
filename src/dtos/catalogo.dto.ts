import { z } from "zod";

export const textoObligatorio = z.string().trim().min(1);

// PostgreSQL INTEGER es un entero con signo de 32 bits.
export const idCatalogoSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .transform(Number)
  .pipe(z.number().int().min(1).max(2_147_483_647));
