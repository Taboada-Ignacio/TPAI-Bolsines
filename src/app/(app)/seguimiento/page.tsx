"use client";

import { RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PageActions } from "@/components/layout/PageActions";
import { PageBody } from "@/components/layout/PageBody";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { Island } from "@/components/ui/surfaces/Island";
import { MapaBolsines } from "@/components/seguimiento/map/MapaBolsines";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import { cn } from "@/lib/cn";

type Estado =
  | { tipo: "cargando" | "sesion" }
  | { tipo: "error"; mensaje: string }
  | {
      tipo: "listo";
      datos: { comision: string; puntos: PuntoBolsin[]; sinUbicacion: number };
    };

const horaLocal = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

export default function SeguimientoPage() {
  const [estado, setEstado] = useState<Estado>({ tipo: "cargando" });
  const [consulta, setConsulta] = useState(0);
  const [seleccionado, seleccionar] = useState<number | null>(null);
  const [actualizando, setActualizando] = useState(false);
  const cargando = estado.tipo === "cargando" || actualizando;

  useEffect(() => {
    const control = new AbortController();
    async function cargar() {
      try {
        const respuesta = await fetch("/api/auth/cu36/seguimiento", {
          signal: control.signal,
          cache: "no-store",
        });
        if (control.signal.aborted) return;
        if (respuesta.status === 401) {
          setEstado({ tipo: "sesion" });
          return;
        }
        const datos = await respuesta.json();
        if (control.signal.aborted) return;
        setEstado(
          respuesta.ok
            ? { tipo: "listo", datos }
            : { tipo: "error", mensaje: datos.error },
        );
      } catch {
        if (!control.signal.aborted)
          setEstado({
            tipo: "error",
            mensaje: "No se pudo consultar el seguimiento.",
          });
      } finally {
        if (!control.signal.aborted) setActualizando(false);
      }
    }
    void cargar();
    return () => control.abort();
  }, [consulta]);

  function actualizar() {
    seleccionar(null);
    setActualizando(true);
    setConsulta((anterior) => anterior + 1);
  }

  const datos = estado.tipo === "listo" ? estado.datos : null;
  const detalle = datos?.puntos.find(({ id }) => id === seleccionado);

  return (
    <PageBody variant="bleed" className="bg-canvas">
      <PageActions>
        <IconButton
          aria-label="Actualizar ubicaciones"
          onClick={actualizar}
          disabled={cargando || estado.tipo === "sesion"}
        >
          <RefreshCw
            className={cn(
              "size-[18px]",
              cargando && "motion-safe:animate-spin",
            )}
            aria-hidden="true"
          />
        </IconButton>
      </PageActions>
      <div className="absolute inset-x-0 top-[var(--shell-top)] bottom-[max(var(--isle-gap),var(--shell-bottom))] mx-[var(--isle-gap)] overflow-y-auto md:ml-[var(--shell-left)]">
        <header className="mb-3">
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Seguimiento de bolsines
          </h1>
          {datos && <p className="text-sm text-muted">{datos.comision}</p>}
        </header>
        {cargando && <p role="status">Consultando ubicaciones…</p>}
        {estado.tipo === "error" && <p role="alert">{estado.mensaje}</p>}
        {estado.tipo === "sesion" && (
          <p role="status">
            Para consultar el seguimiento,{" "}
            <Link href="/login" className="underline">
              iniciá sesión
            </Link>
            .
          </p>
        )}
        {datos && (
          <>
            {datos.sinUbicacion > 0 && (
              <p className="mb-3 text-sm" role="status">
                Bolsines enviados sin ubicación GPS: {datos.sinUbicacion}.
              </p>
            )}
            {datos.puntos.length === 0 ? (
              <p>
                {datos.sinUbicacion
                  ? "No hay ubicaciones para mostrar."
                  : "No hay bolsines enviados desde tu comisión."}
              </p>
            ) : (
              <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_20rem]">
                <MapaBolsines
                  puntos={datos.puntos}
                  seleccionado={seleccionado}
                  seleccionar={seleccionar}
                />
                <Island
                  as="aside"
                  className="min-w-0 self-start rounded-[var(--isle-r)] p-4"
                  onKeyDown={(evento) => {
                    if (evento.key === "Escape") seleccionar(null);
                  }}
                >
                  <h2 className="font-display font-semibold">
                    Bolsines ubicados ({datos.puntos.length})
                  </h2>
                  <ul className="my-2 max-h-52 space-y-1 overflow-y-auto">
                    {datos.puntos.map((punto) => (
                      <li key={punto.id}>
                        <button
                          type="button"
                          className="flex w-full cursor-pointer gap-3 rounded-control px-3 py-2 text-left text-sm hover:bg-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cobalt aria-pressed:bg-lime aria-pressed:text-on-lime"
                          aria-pressed={punto.id === seleccionado}
                          onClick={() => seleccionar(punto.id)}
                        >
                          <strong className="font-mono">#{punto.numero}</strong>
                          <span>{punto.destino}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {detalle && (
                    <section
                      className="border-t border-edge pt-3"
                      aria-label="Bolsín seleccionado"
                    >
                      <h3 className="font-display font-semibold">
                        Bolsín #{detalle.numero}
                      </h3>
                      <dl className="my-3 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-2 text-sm">
                        <dt className="text-muted">Precinto</dt>
                        <dd>{detalle.precinto ?? "Sin precinto"}</dd>
                        <dt className="text-muted">Destino</dt>
                        <dd>{detalle.destino}</dd>
                        <dt className="text-muted">Última ubicación</dt>
                        <dd>
                          {horaLocal.format(new Date(detalle.actualizado))}
                        </dd>
                        <dt className="text-muted">Coordenadas</dt>
                        <dd>
                          {detalle.latitud}, {detalle.longitud}
                        </dd>
                      </dl>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => seleccionar(null)}
                      >
                        Cerrar detalle
                      </Button>
                    </section>
                  )}
                </Island>
              </div>
            )}
          </>
        )}
      </div>
    </PageBody>
  );
}
