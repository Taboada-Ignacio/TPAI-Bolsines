import { PageBody } from "@/components/layout/PageBody";
import { SeguimientoWorkspace } from "@/components/seguimiento/SeguimientoWorkspace";

export default function SeguimientoPage() {
  return (
    <PageBody variant="bleed">
      <h1 className="sr-only">Seguimiento de bolsines</h1>
      <SeguimientoWorkspace />
    </PageBody>
  );
}
