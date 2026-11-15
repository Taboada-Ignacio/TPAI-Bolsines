import { z } from "zod";
import { textoObligatorio } from "./catalogo.dto";

export const loginSchema = z.object({
  nombre: textoObligatorio,
  contrasena: z.string().refine((valor) => valor.trim().length > 0),
});
