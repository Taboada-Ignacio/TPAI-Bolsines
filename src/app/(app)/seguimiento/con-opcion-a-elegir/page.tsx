import { PageBody } from "@/components/layout/PageBody";
import { SeguimientoWorkspace } from "@/components/seguimiento/SeguimientoWorkspace";

export default function SeguimientoConSeleccionPage() {
  return (
    <PageBody variant="bleed">
      <h1 className="sr-only">Seguimiento con selección de GPS</h1>
      <SeguimientoWorkspace conSeleccion />
    </PageBody>
  );
}
