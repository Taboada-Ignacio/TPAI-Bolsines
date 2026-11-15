import { z } from "zod";
import type { ComisionMedica } from "@/domain/ComisionMedica";
import type { Registro } from "@/domain/RepositorioCrud";
import { textoObligatorio } from "./catalogo.dto";

export const comisionMedicaEntradaSchema = z.object({
  codigo: textoObligatorio,
  nombre: textoObligatorio,
  direccion: textoObligatorio,
  email: textoObligatorio.pipe(z.email()),
  telefono: textoObligatorio,
});

export type ComisionMedicaEntrada = z.infer<typeof comisionMedicaEntradaSchema>;
export type ComisionMedicaRespuesta = ComisionMedicaEntrada & { id: number };

export function comisionMedicaRespuesta({
  id,
  entidad,
}: Registro<ComisionMedica>): ComisionMedicaRespuesta {
  return {
    id,
    codigo: entidad.getCodigo(),
    nombre: entidad.getNombre(),
    direccion: entidad.getDireccion(),
    email: entidad.getEmail(),
    telefono: entidad.getTelefono(),
  };
}
