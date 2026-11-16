"use client";

import { RotateCcw } from "lucide-react";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";

export default function PerfilError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageBody variant="padded">
      <PageHeading rotulo="Error de carga">
        No pudimos cargar tu perfil.
      </PageHeading>
      <p className="mt-4 text-[15px] text-muted max-w-md">
        Hubo un problema al consultar tus datos o los catálogos. Podés
        reintentar ahora o volver más tarde.
      </p>
      <div className="mt-6">
        <Button
          type="button"
          variant="primary"
          onClick={reset}
          leftIcon={<RotateCcw className="size-4" />}
          className="rounded-full px-6"
        >
          Reintentar
        </Button>
      </div>
    </PageBody>
  );
}
