"use client";

import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPinned,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
} from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";

export interface BolsinDetallePanelProps {
  bolsin: BolsinSeguimiento;
  cmOrigen?: CmOrigenSeguimiento | null;
  onNotificarClick: () => void;
  onVerEnMapa?: () => void;
  onCerrar?: () => void;
  onAnterior?: () => void;
  onSiguiente?: () => void;
  puedeAnterior?: boolean;
  puedeSiguiente?: boolean;
  className?: string;
}

const FORMATO_FECHA_AR = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const FORMATO_PESO_AR = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 2,
});

function formatearFechaRioplatense(isoDate: string): string {
  const fecha = new Date(isoDate);
  if (Number.isNaN(fecha.getTime())) {
    return isoDate;
  }
  return FORMATO_FECHA_AR.format(fecha);
}

export function BolsinDetallePanel({
  bolsin,
  cmOrigen,
  onNotificarClick,
  onVerEnMapa,
  onCerrar,
  onAnterior,
  onSiguiente,
  puedeAnterior = true,
  puedeSiguiente = true,
  className,
}: BolsinDetallePanelProps) {
  const origen = cmOrigen ?? bolsin.cmOrigen ?? null;
  const codigoOrigen = origen?.codigo ?? "ORIGEN";
  const codigoDestino = bolsin.cmDestino.codigo;
  const ubicacion = bolsin.ubicacion;
  const sinCobertura =
    ubicacion === null || ubicacion.estadoCobertura === "sin_cobertura";
  const nroFormateado = String(bolsin.nroBolsin).padStart(4, "0");
  const tieneControlesNav = Boolean(onAnterior || onSiguiente || onCerrar);

  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      {/* Encabezado con N.º de bolsín, ruta SplitFlap y controles de navegación */}
      <div className="flex flex-col gap-3 border-b border-hair px-4 py-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <MicroLabel>Bolsín en seguimiento</MicroLabel>
            <SplitFlap
              text={nroFormateado}
              size="md"
              flipTrigger={bolsin.nroBolsin}
            />
          </div>

          {tieneControlesNav ? (
            <div className="flex items-center gap-1">
              {onAnterior ? (
                <IconButton
                  onClick={onAnterior}
                  disabled={!puedeAnterior}
                  aria-label="Bolsín anterior"
                  title="Anterior"
                  className="size-8 rounded-[10px] border border-edge bg-surface"
                >
                  <ChevronUp className="size-4" aria-hidden="true" />
                </IconButton>
              ) : null}
              {onSiguiente ? (
                <IconButton
                  onClick={onSiguiente}
                  disabled={!puedeSiguiente}
                  aria-label="Bolsín siguiente"
                  title="Siguiente"
                  className="size-8 rounded-[10px] border border-edge bg-surface"
                >
                  <ChevronDown className="size-4" aria-hidden="true" />
                </IconButton>
              ) : null}
              {onCerrar ? (
                <IconButton
                  onClick={onCerrar}
                  aria-label="Cerrar detalle"
                  title="Cerrar"
                  className="size-8 rounded-[10px] border border-edge bg-surface"
                >
                  <X className="size-4" aria-hidden="true" />
                </IconButton>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <SplitFlap
            text={codigoOrigen}
            size="xs"
            flipTrigger={`${bolsin.nroBolsin}-${codigoOrigen}`}
          />
          <span
            aria-hidden="true"
            className="font-mono text-xs font-semibold text-muted"
          >
            →
          </span>
          <SplitFlap
            text={codigoDestino}
            size="xs"
            flipTrigger={`${bolsin.nroBolsin}-${codigoDestino}`}
          />
        </div>
      </div>

      {/* Cuerpo desplazable */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
        {sinCobertura ? (
          <div
            role="status"
            className="flex items-start gap-2.5 rounded-xl border border-amber/40 bg-amber/15 px-3 py-2.5 text-xs leading-relaxed text-amber-ink"
          >
            <AlertTriangle
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">
                GPS sin cobertura · Última posición conocida
              </p>
              <p className="mt-0.5 opacity-90">
                {ubicacion === null
                  ? "Todavía no recibimos coordenadas de este dispositivo."
                  : "Mostramos la última ubicación registrada antes de perder señal."}
              </p>
            </div>
          </div>
        ) : null}

        {/* Grilla de datos clave */}
        <dl className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-hair bg-surface px-3 py-2.5">
            <dt>
              <MicroLabel>N.º de precinto</MicroLabel>
            </dt>
            <dd className="mt-1 font-mono text-[13px] font-bold text-fg">
              {String(bolsin.numeroPrecinto)}
            </dd>
          </div>

          <div className="rounded-xl border border-hair bg-surface px-3 py-2.5">
            <dt>
              <MicroLabel>Estado de señal</MicroLabel>
            </dt>
            <dd className="mt-1">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold",
                  sinCobertura
                    ? "border-amber/40 bg-amber/15 text-amber-ink"
                    : "border-lime-edge bg-lime text-on-lime",
                )}
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-current"
                />
                {sinCobertura ? "Sin cobertura" : "En vivo"}
              </span>
            </dd>
          </div>

          <div className="col-span-2 rounded-xl border border-hair bg-surface px-3 py-2.5">
            <dt>
              <MicroLabel>Recorrido</MicroLabel>
            </dt>
            <dd className="mt-1 text-[13px] font-bold text-fg">
              {origen
                ? `${origen.codigo} · ${origen.nombre}`
                : "CM Origen"}{" "}
              → {bolsin.cmDestino.codigo} · {bolsin.cmDestino.nombre}
            </dd>
          </div>

          <div className="rounded-xl border border-hair bg-surface px-3 py-2.5">
            <dt>
              <MicroLabel>Coordenadas</MicroLabel>
            </dt>
            <dd className="mt-1 font-mono text-[12.5px] font-semibold tabular-nums text-fg">
              {ubicacion
                ? `${ubicacion.latitud.toFixed(4)}, ${ubicacion.longitud.toFixed(4)}`
                : "Sin datos"}
            </dd>
          </div>

          <div className="rounded-xl border border-hair bg-surface px-3 py-2.5">
            <dt>
              <MicroLabel>Última actualización</MicroLabel>
            </dt>
            <dd className="mt-1 font-mono text-[12.5px] font-semibold tabular-nums text-fg">
              {ubicacion
                ? formatearFechaRioplatense(ubicacion.fechaHoraActualizacion)
                : "Sin registro"}
            </dd>
          </div>

          {bolsin.pesoKg !== undefined ? (
            <div className="col-span-2 rounded-xl border border-hair bg-surface px-3 py-2.5">
              <dt>
                <MicroLabel>Peso declarado</MicroLabel>
              </dt>
              <dd className="mt-1 font-mono text-[13px] font-bold tabular-nums text-fg">
                {FORMATO_PESO_AR.format(bolsin.pesoKg)} kg
              </dd>
            </div>
          ) : null}
        </dl>

        {/* Remito asociado (máx. 1 por bolsín; oculto si no hay remito en CU 36) */}
        {bolsin.remito ? (
          <section
            aria-label="Remito asociado"
            className="flex flex-col gap-2 border-t border-hair pt-3"
          >
            <MicroLabel>Remito asociado</MicroLabel>
            <div className="flex items-center justify-between gap-2 rounded-[10px] border border-hair bg-surface px-3 py-2">
              <div className="min-w-0">
                <p className="truncate text-[12.5px] font-semibold text-fg">
                  {bolsin.remito.asunto}
                </p>
                <p className="truncate text-[11px] text-muted">
                  {bolsin.remito.tipoDocumento}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[11px] font-medium text-muted">
                {bolsin.remito.numero}
              </span>
            </div>
          </section>
        ) : null}
      </div>

      {/* Pie con acción primaria */}
      <div className="flex flex-col gap-2 border-t border-hair bg-surface/90 px-4 py-3.5 backdrop-blur-md">
        {onVerEnMapa ? (
          <Button
            variant="secondary"
            size="md"
            onClick={onVerEnMapa}
            leftIcon={<MapPinned className="size-4" />}
            className="w-full"
          >
            Ver ruta en mapa
          </Button>
        ) : null}
        <Button
          variant="primary"
          size="md"
          onClick={onNotificarClick}
          disabled={ubicacion === null}
          leftIcon={<Mail className="size-4" />}
          className="w-full"
        >
          Avisar ubicación al gerente
        </Button>
        {ubicacion === null ? (
          <p className="mt-1.5 text-center text-[11px] text-muted">
            Necesitás una ubicación registrada para avisar al gerente.
          </p>
        ) : null}
      </div>
    </div>
  );
}
