"use client";

import { AlertCircle, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import type { BolsinListadoItem } from "@/lib/bolsines";

export interface BolsinDeleteSheetProps {
  bolsin: BolsinListadoItem | null;
  onClose: () => void;
  onDeleted: (id: number) => void;
}

/** Confirmación adaptativa para eliminar un bolsín mediante DELETE /api/bolsines/[id]. */
export function BolsinDeleteSheet({
  bolsin,
  onClose,
  onDeleted,
}: BolsinDeleteSheetProps) {
  return (
    <ResponsiveSheet
      open={Boolean(bolsin)}
      onClose={onClose}
      labelledBy="bolsin-delete-title"
      size="sm"
    >
      {bolsin ? (
        <BolsinDeleteContent
          key={bolsin.id}
          bolsin={bolsin}
          onClose={onClose}
          onDeleted={onDeleted}
        />
      ) : null}
    </ResponsiveSheet>
  );
}

function BolsinDeleteContent({
  bolsin,
  onClose,
  onDeleted,
}: {
  bolsin: BolsinListadoItem;
  onClose: () => void;
  onDeleted: (id: number) => void;
}) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConfirm() {
    if (!bolsin || deleting) return;
    setDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/bolsines/${bolsin.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          body?.error ||
            "No se pudo eliminar el bolsín. Intentá nuevamente en unos segundos.",
        );
        return;
      }

      onDeleted(bolsin.id);
    } catch {
      setError("Error de conexión con el servidor al intentar eliminar.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 sm:px-6">
        <div>
          <MicroLabel className="block text-danger-ink">Baja definitiva</MicroLabel>
          <h2
            id="bolsin-delete-title"
            className="mt-1 font-display text-xl font-bold tracking-tight text-fg"
          >
            Eliminar bolsín
          </h2>
        </div>
        <IconButton
          aria-label="Cerrar confirmación"
          onClick={onClose}
          disabled={deleting}
        >
          <X className="size-4" aria-hidden="true" />
        </IconButton>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6">
        {bolsin ? (
          <div className="rounded-control border border-edge bg-raised/60 p-4">
            <p className="font-mono text-sm font-semibold text-fg">
              Bolsín #{bolsin.numeroBolsin} · Precinto {bolsin.numeroPrecinto}
            </p>
            <p className="mt-1 text-sm text-muted">
              {bolsin.cmOrigen.codigo} {bolsin.cmOrigen.nombre} →{" "}
              {bolsin.cmDestino.codigo} {bolsin.cmDestino.nombre}
            </p>
          </div>
        ) : null}

        <p className="text-sm leading-relaxed text-muted">
          Esta acción eliminará el bolsín y todo su historial de cambios de
          estado de forma permanente.
        </p>

        {error ? (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-control border border-danger/40 bg-danger/10 p-3 text-sm text-danger-ink"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </div>
        ) : null}

        <div className="flex flex-col-reverse gap-2.5 border-t border-hair pt-4 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={deleting}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            variant="danger"
            loading={deleting}
            onClick={handleConfirm}
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Confirmar baja
          </Button>
        </div>
      </div>
    </>
  );
}
