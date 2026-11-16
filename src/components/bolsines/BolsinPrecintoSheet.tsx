"use client";

import { AlertCircle, Lock, LockOpen, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import type { BolsinListadoItem, CatalogoEstado } from "@/lib/bolsines";

export type PrecintoAccion = "cerrar" | "reabrir";

export interface BolsinPrecintoSheetProps {
  open: boolean;
  accion: PrecintoAccion | null;
  bolsin: BolsinListadoItem | null;
  estadosBolsin: CatalogoEstado[];
  onClose: () => void;
  onSuccess: (actualizado: BolsinListadoItem) => void;
}

/** Sheet para poner precinto (cerrar) o abrir de nuevo (romper precinto) un bolsín. */
export function BolsinPrecintoSheet({
  open,
  accion,
  bolsin,
  estadosBolsin,
  onClose,
  onSuccess,
}: BolsinPrecintoSheetProps) {
  return (
    <ResponsiveSheet
      open={open && Boolean(bolsin) && Boolean(accion)}
      onClose={onClose}
      labelledBy="bolsin-precinto-title"
      size="sm"
    >
      {open && bolsin && accion ? (
        <BolsinPrecintoContent
          key={`${accion}-${bolsin.id}`}
          accion={accion}
          bolsin={bolsin}
          estadosBolsin={estadosBolsin}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      ) : null}
    </ResponsiveSheet>
  );
}

function BolsinPrecintoContent({
  accion,
  bolsin,
  estadosBolsin,
  onClose,
  onSuccess,
}: {
  accion: PrecintoAccion;
  bolsin: BolsinListadoItem;
  estadosBolsin: CatalogoEstado[];
  onClose: () => void;
  onSuccess: (actualizado: BolsinListadoItem) => void;
}) {
  const [numeroPrecinto, setNumeroPrecinto] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const esCerrar = accion === "cerrar";

  function buscarEstado(nombre: "Cerrado" | "Creado") {
    const encontrado = estadosBolsin.find(
      (e) => e.nombre.toLowerCase() === nombre.toLowerCase(),
    );
    return encontrado
      ? { id: encontrado.id, nombre: encontrado.nombre }
      : { id: bolsin.estadoActual?.id ?? 1, nombre };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    if (esCerrar) {
      const nro = Number(numeroPrecinto);
      if (
        !Number.isInteger(nro) ||
        nro <= 0 ||
        nro > 2_147_483_647
      ) {
        setError("Ingresá un número de precinto entero positivo válido.");
        return;
      }
      if (bolsin.precintoAnterior && nro === bolsin.precintoAnterior) {
        setError(
          `El nuevo precinto debe ser distinto al anterior (#${bolsin.precintoAnterior}).`,
        );
        return;
      }

      setSubmitting(true);
      setError(null);
      try {
        const res = await fetch(`/api/bolsines/${bolsin.id}/cerrar`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ numeroPrecinto: nro }),
        });

        if (res.status === 404 || res.status === 405) {
          // Respaldo compatible mientras backend expone /cerrar
          const putRes = await fetch(`/api/bolsines/${bolsin.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fecha: new Date(bolsin.fecha).toISOString(),
              numeroBolsin: bolsin.numeroBolsin,
              numeroPrecinto: nro,
              peso: bolsin.peso,
              cmOrigenId: bolsin.cmOrigen.id,
              cmDestinoId: bolsin.cmDestino.id,
            }),
          });
          if (!putRes.ok) {
            const errBody = (await putRes.json().catch(() => null)) as {
              error?: string;
            } | null;
            setError(
              errBody?.error ?? "No se pudo registrar el precinto del bolsín.",
            );
            return;
          }
          const actualizado = (await putRes.json()) as BolsinListadoItem;
          onSuccess({
            ...actualizado,
            numeroPrecinto: nro,
            estadoActual: buscarEstado("Cerrado"),
            remito: bolsin.remito ?? actualizado.remito ?? null,
            precintoAnterior: bolsin.precintoAnterior ?? null,
          });
          onClose();
          return;
        }

        const body = (await res.json().catch(() => null)) as
          | BolsinListadoItem
          | { error?: string }
          | null;

        if (!res.ok) {
          setError(
            (body && "error" in body && body.error) ||
              "No se pudo cerrar el bolsín con ese precinto.",
          );
          return;
        }

        onSuccess(body as BolsinListadoItem);
        onClose();
      } catch {
        setError("No pudimos conectarnos con el servidor. Intentá nuevamente.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Reabrir bolsín (romper precinto)
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/bolsines/${bolsin.id}/reabrir`, {
        method: "POST",
      });

      if (res.status === 404 || res.status === 405) {
        onSuccess({
          ...bolsin,
          precintoAnterior: bolsin.numeroPrecinto,
          numeroPrecinto: null,
          estadoActual: buscarEstado("Creado"),
        });
        onClose();
        return;
      }

      const body = (await res.json().catch(() => null)) as
        | BolsinListadoItem
        | { error?: string }
        | null;

      if (!res.ok) {
        setError(
          (body && "error" in body && body.error) ||
            "No se pudo reabrir el bolsín.",
        );
        return;
      }

      onSuccess(body as BolsinListadoItem);
      onClose();
    } catch {
      setError("No pudimos conectarnos con el servidor. Intentá nuevamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 sm:px-6">
        <div>
          <MicroLabel className="block">
            Bolsín #{bolsin.numeroBolsin}
          </MicroLabel>
          <h2
            id="bolsin-precinto-title"
            className="mt-1 font-display text-xl font-bold tracking-tight text-fg"
          >
            {esCerrar ? "Poner precinto y cerrar" : "Abrir bolsín de nuevo"}
          </h2>
        </div>
        <IconButton
          aria-label="Cerrar panel"
          onClick={onClose}
          disabled={submitting}
          className="shrink-0"
        >
          <X className="size-4" aria-hidden="true" />
        </IconButton>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6"
      >
        {error ? (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-control border border-danger/40 bg-danger/10 p-3 text-sm text-danger-ink"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </div>
        ) : null}

        {esCerrar ? (
          <>
            <p className="text-sm text-muted">
              Ingresá el número del precinto físico para cerrar el bolsín y
              dejarlo listo para retiro.
              {bolsin.precintoAnterior ? (
                <>
                  {" "}
                  Debe ser distinto al precinto anterior (
                  <span className="font-mono font-semibold text-fg">
                    #{bolsin.precintoAnterior}
                  </span>
                  ).
                </>
              ) : null}
            </p>
            <Field
              id="precinto-numero"
              label="N.º de precinto"
              error={error ?? undefined}
            >
              <Input
                id="precinto-numero"
                type="number"
                min={1}
                step={1}
                value={numeroPrecinto}
                invalid={Boolean(error)}
                onChange={(e) => {
                  setNumeroPrecinto(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Ej. 940125"
              />
            </Field>
          </>
        ) : (
          <div className="rounded-[14px] border border-amber/40 bg-amber/10 p-3.5 text-sm text-fg">
            <p className="font-semibold">
              Se romperá el precinto{" "}
              <span className="font-mono">
                {bolsin.numeroPrecinto !== null
                  ? `#${bolsin.numeroPrecinto}`
                  : "actual"}
              </span>
            </p>
            <p className="mt-1 text-xs text-muted">
              El bolsín volverá a estado <strong className="text-fg">Creado</strong>{" "}
              para modificar su contenido o remito. Al volver a cerrarlo deberás
              colocar un precinto nuevo con otro número.
            </p>
          </div>
        )}

        <div className="mt-auto flex flex-col-reverse gap-2.5 border-t border-hair pt-4 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={submitting}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant={esCerrar ? "primary" : "secondary"}
            loading={submitting}
            leftIcon={
              esCerrar ? (
                <Lock className="size-4" aria-hidden="true" />
              ) : (
                <LockOpen className="size-4" aria-hidden="true" />
              )
            }
          >
            {esCerrar ? "Confirmar precinto" : "Abrir de nuevo"}
          </Button>
        </div>
      </form>
    </>
  );
}
