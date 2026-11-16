"use client";

import { RotateCcw } from "lucide-react";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";

export default function AppError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageBody variant="padded">
      <PageHeading rotulo="Error de carga">
        No pudimos cargar esta pantalla.
      </PageHeading>
      <p className="mt-4 text-[15px] text-muted max-w-md">
        Podés reintentar ahora o usar la navegación para ir a otra sección.
      </p>
      <div className="mt-6">
        <Button type="button" variant="primary" onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Reintentar
        </Button>
      </div>
    </PageBody>
  );
}
