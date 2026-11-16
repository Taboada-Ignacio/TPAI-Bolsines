import Link from "next/link";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";

export default function AppNotFound() {
  return (
    <PageBody variant="padded">
      <PageHeading rotulo="Ruta desconocida">
        Esta pantalla no existe.
      </PageHeading>
      <p className="mt-4 text-[15px] text-muted max-w-md">
        Verificá la dirección o volvé al tablero principal para seguir operando.
      </p>
      <div className="mt-6">
        <Link
          href="/inicio"
          className="inline-flex items-center justify-center rounded-[12px] bg-primary text-on-primary px-5 py-2.5 text-sm font-semibold shadow-[0_3px_0_var(--primary-deep)] active:translate-y-[2px] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Ir a Inicio
        </Link>
      </div>
    </PageBody>
  );
}
