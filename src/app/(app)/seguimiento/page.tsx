"use client";

import { RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageActions } from "@/components/layout/PageActions";
import { PageBody } from "@/components/layout/PageBody";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { Island } from "@/components/ui/surfaces/Island";
import { MapaBolsines } from "@/components/seguimiento/map/MapaBolsines";
import type { SeguimientoBolsines } from "@/dtos/seguimiento-bolsines.dto";
import { filtrarPuntos } from "@/components/seguimiento/filters/filtrarPuntos";
import { cn } from "@/lib/cn";

type Estado =
  | { tipo: "cargando" | "sesion" }
  | { tipo: "error"; mensaje: string }
  | {
      tipo: "listo";
      datos: SeguimientoBolsines;
    };

const horaLocal = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

async function solicitar<T>(
  sufijo: string,
  bolsinId: number,
  signal: AbortSignal,
) {
  const respuesta = await fetch(`/api/auth/cu36/seguimiento${sufijo}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bolsinId }),
    signal,
  });
  if (!respuesta.ok) {
    const datos = await respuesta.json().catch(() => null);
    throw new Error(datos?.error ?? "No se pudo completar la operación.");
  }
  return (await respuesta.json()) as T;
}

export default function SeguimientoPage() {
  const [estado, setEstado] = useState<Estado>({ tipo: "cargando" });
  const [consulta, setConsulta] = useState(0);
  const [seleccionado, seleccionar] = useState<number | null>(null);
  const [actualizando, setActualizando] = useState(false);
  const [precinto, setPrecinto] = useState("");
  const [destino, setDestino] = useState("");
  const [envio, setEnvio] = useState<
    "pendiente" | "enviando" | "enviada" | "omitida"
  >("pendiente");
  const [mensaje, setMensaje] = useState("");
  const seleccionActual = useRef<AbortController | null>(null);
  const envioActual = useRef<AbortController | null>(null);
  useEffect(
    () => () => {
      seleccionActual.current?.abort();
      envioActual.current?.abort();
    },
    [],
  );
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

  function cerrarSeleccion() {
    seleccionActual.current?.abort();
    seleccionar(null);
    setEnvio("pendiente");
    setMensaje("");
  }

  function actualizar() {
    cerrarSeleccion();
    setActualizando(true);
    setConsulta((anterior) => anterior + 1);
  }

  const datos = estado.tipo === "listo" ? estado.datos : null;
  const puntos = datos?.mapa.puntos;
  const visibles = useMemo(
    () => filtrarPuntos(puntos ?? [], precinto, destino),
    [puntos, precinto, destino],
  );
  const destinos = [
    ...new Map(puntos?.map((punto) => [punto.codigoDestino, punto.destino])),
  ].sort(([, a], [, b]) => a.localeCompare(b, "es-AR"));
  const detalle = visibles.find(({ id }) => id === seleccionado);

  function cambiarFiltros(nuevoPrecinto: string, nuevoDestino: string) {
    seleccionActual.current?.abort();
    setPrecinto(nuevoPrecinto);
    setDestino(nuevoDestino);
    if (
      detalle &&
      !filtrarPuntos([detalle], nuevoPrecinto, nuevoDestino).length
    )
      cerrarSeleccion();
  }

  async function seleccionarBolsin(bolsinId: number) {
    if (envioActual.current || cargando) return;
    cerrarSeleccion();
    const control = new AbortController();
    seleccionActual.current = control;
    try {
      const resultado = await solicitar<{
        seleccionado: number;
        confirmarNotificacion: boolean;
      }>("/seleccion", bolsinId, control.signal);
      if (!control.signal.aborted && resultado.confirmarNotificacion)
        seleccionar(resultado.seleccionado);
    } catch (error) {
      if (!control.signal.aborted)
        setMensaje(
          error instanceof Error
            ? error.message
            : "No se pudo seleccionar el bolsín.",
        );
    }
  }

  async function confirmarEnvio() {
    if (!detalle || envioActual.current || envio !== "pendiente") return;
    const control = new AbortController();
    envioActual.current = control;
    setEnvio("enviando");
    setMensaje("");
    try {
      await solicitar("", detalle.id, control.signal);
      if (!control.signal.aborted) setEnvio("enviada");
    } catch (error) {
      if (!control.signal.aborted) {
        setEnvio("pendiente");
        setMensaje(
          error instanceof Error
            ? error.message
            : "No se pudo enviar la notificación.",
        );
      }
    } finally {
      envioActual.current = null;
    }
  }

  return (
    <PageBody variant="bleed" className="bg-canvas">
      <PageActions>
        <IconButton
          aria-label="Actualizar ubicaciones"
          onClick={actualizar}
          disabled={
            cargando || estado.tipo === "sesion" || envio === "enviando"
          }
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
          {envio !== "enviando" && (
            <Link href="/inicio" className="text-sm underline">
              Salir del seguimiento
            </Link>
          )}
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
        {mensaje && <p role="alert">{mensaje}</p>}
        {datos && (
          <>
            {datos.sinUbicacion > 0 && (
              <p className="mb-3 text-sm" role="status">
                Bolsines enviados sin ubicación GPS: {datos.sinUbicacion}.
              </p>
            )}
            {datos.mapa.puntos.length === 0 ? (
              <p>
                {datos.sinUbicacion
                  ? "No hay ubicaciones para mostrar."
                  : "No hay bolsines enviados desde tu comisión."}
              </p>
            ) : (
              <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_20rem]">
                <MapaBolsines
                  puntos={visibles}
                  estilo={datos.mapa.estilo}
                  seleccionado={seleccionado}
                  seleccionar={seleccionarBolsin}
                />
                <Island
                  as="aside"
                  className="min-w-0 self-start rounded-[var(--isle-r)] p-4"
                  onKeyDown={(evento) => {
                    if (evento.key === "Escape" && envio !== "enviando")
                      cerrarSeleccion();
                  }}
                >
                  <fieldset
                    className="mb-4 grid gap-2"
                    disabled={envio === "enviando"}
                  >
                    <label className="grid gap-1 text-sm">
                      Número de precinto
                      <input
                        className="rounded-control border border-edge bg-surface px-2 py-1"
                        inputMode="numeric"
                        value={precinto}
                        onChange={(e) =>
                          cambiarFiltros(e.target.value, destino)
                        }
                      />
                    </label>
                    <label className="grid gap-1 text-sm">
                      Comisión Médica destino
                      <select
                        className="rounded-control border border-edge bg-surface px-2 py-1"
                        value={destino}
                        onChange={(e) =>
                          cambiarFiltros(precinto, e.target.value)
                        }
                      >
                        <option value="">Todas</option>
                        {destinos.map(([codigo, nombre]) => (
                          <option key={codigo} value={codigo}>
                            {nombre}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => cambiarFiltros("", "")}
                    >
                      Limpiar filtros
                    </Button>
                  </fieldset>
                  <h2 className="font-display font-semibold">
                    Bolsines ubicados ({visibles.length})
                  </h2>
                  {!visibles.length && (
                    <p role="status">
                      No hay bolsines que coincidan con los filtros.
                    </p>
                  )}
                  <ul className="my-2 max-h-52 space-y-1 overflow-y-auto">
                    {visibles.map((punto) => (
                      <li key={punto.id}>
                        <button
                          type="button"
                          className="flex w-full cursor-pointer gap-3 rounded-control px-3 py-2 text-left text-sm hover:bg-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cobalt aria-pressed:bg-lime aria-pressed:text-on-lime"
                          aria-pressed={punto.id === seleccionado}
                          disabled={envio === "enviando"}
                          onClick={() => void seleccionarBolsin(punto.id)}
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
                      {envio === "enviada" ? (
                        <p role="status">
                          Notificación enviada al gerente de destino.
                        </p>
                      ) : envio === "omitida" ? (
                        <p role="status">
                          Consulta finalizada sin enviar correo.
                        </p>
                      ) : (
                        <div className="grid gap-2">
                          <p className="text-sm">
                            ¿Querés notificar la ubicación al gerente de
                            destino?
                          </p>
                          <Button
                            size="sm"
                            loading={envio === "enviando"}
                            onClick={() => void confirmarEnvio()}
                          >
                            Confirmar notificación
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            disabled={envio === "enviando"}
                            onClick={() => setEnvio("omitida")}
                          >
                            No enviar correo
                          </Button>
                        </div>
                      )}
                      <Button
                        disabled={envio === "enviando"}
                        size="sm"
                        variant="ghost"
                        onClick={cerrarSeleccion}
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
