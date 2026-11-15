import { z } from "zod";
import { textoObligatorio } from "./catalogo.dto";
import type { RegistroEmpleado } from "@/domain/RepositorioEmpleado";

const id = z.number().int().positive().max(2_147_483_647);

export const empleadoEdicionSchema = z.object({
  nombre: textoObligatorio,
  apellido: textoObligatorio,
  email: z.email(),
  rolId: id,
  comisionMedicaId: id,
});

export const empleadoAltaSchema = empleadoEdicionSchema.extend({
  usuario: z.object({
    nombre: textoObligatorio,
    contrasena: z.string().refine((valor) => valor.trim().length > 0),
  }),
});

export type EmpleadoAltaDto = z.infer<typeof empleadoAltaSchema>;
export type EmpleadoRespuestaDto = RegistroEmpleado;
