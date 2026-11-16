import type { Metadata } from "next";
import Link from "next/link";
import {
  comisionMedicaService,
  rolService,
} from "@/app/api/_catalogos/servicios";
import { empleadoService } from "@/app/api/empleados/servicio";
import { EmpleadosView } from "@/components/empleados/EmpleadosView";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { comisionMedicaRespuesta } from "@/dtos/comision-medica.dto";
import { rolRespuesta } from "@/dtos/rol.dto";
import { ROL_ADMIN } from "@/lib/navigation";
import { getPerfilActual } from "@/services/auth/sesion-actual";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Empleados · Sistema de Bolsines",
  description: "Administración de empleados, roles y comisiones médicas.",
};

export default async function EmpleadosPage() {
  const perfil = await getPerfilActual();

  if (perfil.sesion.rol !== ROL_ADMIN) {
    return (
      <PageBody variant="padded">
        <PageHeading rotulo="Acceso restringido">
          Solo administración
        </PageHeading>
        <p className="mt-3 text-[15px] text-muted max-w-[48ch]">
          La gestión de empleados está habilitada únicamente para el rol{" "}
          <strong className="text-fg">{ROL_ADMIN}</strong>.
        </p>
        <div className="mt-6">
          <Link
            href="/inicio"
            className="inline-flex h-10 items-center rounded-full border border-edge bg-surface px-5 text-[14px] font-semibold text-fg hover:bg-hover transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </PageBody>
    );
  }

  const [empleados, roles, comisiones] = await Promise.all([
    empleadoService.listar(),
    rolService.listar(),
    comisionMedicaService.listar(),
  ]);

  return (
    <EmpleadosView
      empleadosIniciales={empleados}
      empleadoActualId={perfil.empleadoId}
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
