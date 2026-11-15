import { z } from "zod";
import type { Estado } from "@/domain/Estado";
import type { Registro } from "@/domain/RepositorioCrud";
import { textoObligatorio } from "./catalogo.dto";

export const estadoEntradaSchema = z.object({
  nombre: textoObligatorio,
  descripcion: textoObligatorio,
  ambito: textoObligatorio,
});

export type EstadoEntrada = z.infer<typeof estadoEntradaSchema>;
export type EstadoRespuesta = EstadoEntrada & { id: number };

export function estadoRespuesta({
  id,
  entidad,
}: Registro<Estado>): EstadoRespuesta {
  return {
    id,
    nombre: entidad.getNombre(),
    descripcion: entidad.getDescripcion(),
    ambito: entidad.getAmbito(),
  };
}
