import { z } from "zod";
import type { Registro } from "@/domain/RepositorioCrud";
import type { Rol } from "@/domain/Rol";
import { textoObligatorio } from "./catalogo.dto";

export const rolEntradaSchema = z.object({
  nombre: textoObligatorio,
  descripcion: textoObligatorio,
});

export type RolEntrada = z.infer<typeof rolEntradaSchema>;
export type RolRespuesta = RolEntrada & { id: number };

export function rolRespuesta({ id, entidad }: Registro<Rol>): RolRespuesta {
  return {
    id,
    nombre: entidad.getNombre(),
    descripcion: entidad.getDescripcion(),
  };
}
