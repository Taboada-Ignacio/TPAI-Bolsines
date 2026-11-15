import type { Metadata } from "next";
import {
  comisionMedicaService,
  rolService,
} from "@/app/api/_catalogos/servicios";
import { PerfilView } from "@/components/perfil/PerfilView";
import { comisionMedicaRespuesta } from "@/dtos/comision-medica.dto";
import { rolRespuesta } from "@/dtos/rol.dto";
import { getPerfilActual } from "@/services/auth/sesion-actual";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mi perfil · Sistema de Bolsines",
  description: "Datos de usuario, rol y comisión médica asignada.",
};

export default async function PerfilPage() {
  const [perfil, roles, comisiones] = await Promise.all([
    getPerfilActual(),
    rolService.listar(),
    comisionMedicaService.listar(),
  ]);

  return (
    <PerfilView
      perfil={perfil}
      roles={roles.map((r) => {
        const dto = rolRespuesta(r);
        return { id: dto.id, nombre: dto.nombre };
      })}
      comisiones={comisiones.map((c) => {
        const dto = comisionMedicaRespuesta(c);
        return { id: dto.id, nombre: dto.nombre, codigo: dto.codigo };
      })}
    />
  );
}
