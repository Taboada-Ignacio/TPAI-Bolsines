import { BolsinDetalleView } from "@/components/bolsines/BolsinDetalleView";
import { PageBody } from "@/components/layout/PageBody";

export default async function BolsinDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsedId = Number(id);

  return (
    <PageBody variant="padded">
      <BolsinDetalleView id={Number.isInteger(parsedId) ? parsedId : -1} />
    </PageBody>
  );
}
