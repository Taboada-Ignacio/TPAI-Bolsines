import { ExternalLink } from "lucide-react";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { BoardRow } from "@/components/ui/display/BoardRow";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { getDestinosTablero } from "@/lib/navigation";
import { getSesionActual } from "@/services/auth/sesion-actual";

export default async function InicioPage() {
  const sesion = await getSesionActual();
  const destinos = getDestinosTablero();
  const cmCorta = sesion.cm.nombre.replace(/^CM\s+/i, "");

  return (
    <PageBody variant="padded">
      <PageHeading rotulo={`${sesion.rol} · turno`}>
        Buen turno,
        <br />
        <Marker>{sesion.nombre}.</Marker>
      </PageHeading>

      <p className="font-serif italic text-[21px] text-muted mt-2.5 mb-[26px]">
        sistema de bolsines
      </p>

      <div className="border-t border-hair">
        {destinos.map((destino, index) => (
          <BoardRow
            key={destino.id}
            href={destino.href}
            index={index + 1}
            title={destino.nombre}
            detail={destino.detalle}
          />
        ))}

        <div data-reveal="" className="border-b border-hair px-2.5 py-4">
          <a
            href="http://localhost:8025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-control border border-lime-edge bg-lime px-4 font-display text-sm font-semibold text-on-lime shadow-key-lime transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0.5"
          >
            Abrir Mailpit
            <ExternalLink aria-hidden="true" size={16} />
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
        </div>

        <div
          data-reveal=""
          className="grid grid-cols-1 sm:grid-cols-3 border-b border-hair"
        >
          <div className="py-3.5 px-2.5">
            <MicroLabel className="block">Comisión</MicroLabel>
            <strong className="block mt-1.5 font-mono text-sm font-semibold text-fg">
              {sesion.cm.codigo} {cmCorta}
            </strong>
          </div>
          <div className="py-3.5 px-2.5 border-t sm:border-t-0 sm:border-l border-hair">
            <MicroLabel className="block">Usuario</MicroLabel>
            <strong className="block mt-1.5 font-mono text-sm font-semibold text-fg">
              {sesion.usuario}
            </strong>
          </div>
          <div className="py-3.5 px-2.5 border-t sm:border-t-0 sm:border-l border-hair">
            <MicroLabel className="block">Ingreso</MicroLabel>
            <strong className="block mt-1.5 font-mono text-sm font-semibold text-fg">
              {sesion.horaIngreso}
            </strong>
          </div>
        </div>
      </div>
    </PageBody>
  );
}
