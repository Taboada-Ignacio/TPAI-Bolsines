import type { Metadata } from "next";
import Link from "next/link";
import { comisionMedicaService } from "@/app/api/_catalogos/servicios";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { SeguimientoWorkspace } from "@/components/seguimiento/SeguimientoWorkspace";
import { comisionMedicaRespuesta } from "@/dtos/comision-medica.dto";
import { ROL_ENCARGADO_BOLSINES } from "@/lib/navigation";
import { getPerfilActual } from "@/services/auth/sesion-actual";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Seguimiento · Sistema de Bolsines",
  description: "Seguimiento en tiempo real de bolsines enviados en tránsito.",
};

export default async function SeguimientoPage() {
  const perfil = await getPerfilActual();

  if (perfil.sesion.rol !== ROL_ENCARGADO_BOLSINES) {
    return (
      <PageBody variant="padded">
        <PageHeading rotulo="Acceso restringido">
          Solo Encargado de Bolsines
        </PageHeading>
        <p className="mt-3 max-w-[48ch] text-[15px] text-muted">
          No tenés permisos para operar el seguimiento de bolsines. Esta vista
          está habilitada únicamente para el rol{" "}
          <strong className="text-fg">{ROL_ENCARGADO_BOLSINES}</strong>.
        </p>
        <div className="mt-6">
          <Link
            href="/inicio"
            className="inline-flex h-10 items-center rounded-full border border-edge bg-surface px-5 text-[14px] font-semibold text-fg transition-colors hover:bg-hover"
          >
            Volver al inicio
          </Link>
        </div>
      </PageBody>
    );
  }

  const comisiones = await comisionMedicaService.listar();
  const cmActual = comisiones
    .map(comisionMedicaRespuesta)
    .find((c) => c.id === perfil.comisionMedicaId);

  const cmOrigenInicial = {
    codigo: cmActual?.codigo ?? perfil.sesion.cm.codigo,
    nombre: cmActual?.nombre ?? perfil.sesion.cm.nombre,
    direccion: cmActual?.direccion ?? perfil.sesion.cm.nombre,
  };

  return (
    <PageBody variant="bleed">
      <h1 className="sr-only">Seguimiento de bolsines</h1>
      <SeguimientoWorkspace cmOrigenInicial={cmOrigenInicial} />
    </PageBody>
  );
}
