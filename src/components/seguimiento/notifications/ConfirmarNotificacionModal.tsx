"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  MapPin,
  Send,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
  ModeloGps,
} from "@/dtos/seguimiento-bolsin.dto";
import {
  ErrorSeguimientoCliente,
  notificarUbicacionGerente,
  type NotificarUbicacionResultado,
} from "@/services/seguimiento/seguimiento-cliente";

type EstadoEnvio = "confirmacion" | "enviando" | "exito" | "error";

export interface ConfirmarNotificacionModalProps {
  abierto: boolean;
  bolsin: BolsinSeguimiento | null;
  cmOrigen?: CmOrigenSeguimiento | null;
  modeloGps: ModeloGps;
  onCerrar: () => void;
  onNotificacionEnviada?: (resultado: NotificarUbicacionResultado) => void;
}

const formateadorFechaHora = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "short",
  timeStyle: "short",
});

function formatearFechaHora(iso: string | undefined | null): string {
  if (!iso) return "Sin actualización registrada";
  const fecha = new Date(iso);
  if (Number.isNaN(fecha.getTime())) return "Fecha inválida";
  return formateadorFechaHora.format(fecha);
}

function formatearCoordenadas(bolsin: BolsinSeguimiento): {
  texto: string;
  nota?: string;
} {
  if (!bolsin.ubicacion) {
    return { texto: "Sin coordenadas registradas" };
  }
  const lat = bolsin.ubicacion.latitud.toFixed(4);
  const lng = bolsin.ubicacion.longitud.toFixed(4);
  return {
    texto: `${lat}, ${lng}`,
    nota:
      bolsin.ubicacion.estadoCobertura === "sin_cobertura"
        ? "Sin cobertura · Última posición conocida"
        : undefined,
  };
}

export function ConfirmarNotificacionModal({
  abierto,
  bolsin,
  cmOrigen,
  modeloGps,
  onCerrar,
  onNotificacionEnviada,
}: ConfirmarNotificacionModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const ultimoFocoRef = useRef<HTMLElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [estado, setEstado] = useState<EstadoEnvio>("confirmacion");
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
  const [resultado, setResultado] =
    useState<NotificarUbicacionResultado | null>(null);

  const titleId = useId();
  const descriptionId = useId();

  const estaEnviando = estado === "enviando";
  const hayBolsin = Boolean(bolsin);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (abierto && hayBolsin) {
      if (!dialog.open) {
        ultimoFocoRef.current =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [abierto, hayBolsin]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const restaurarFoco = useCallback(() => {
    const destino = ultimoFocoRef.current;
    ultimoFocoRef.current = null;
    if (destino && destino.isConnected) {
      destino.focus();
    }
  }, []);

  const handleClose = useCallback(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setEstado("confirmacion");
    setErrorMensaje(null);
    setResultado(null);
    restaurarFoco();
    if (abierto) {
      onCerrar();
    }
  }, [abierto, onCerrar, restaurarFoco]);

  const handleCancel = useCallback(
    (event: SyntheticEvent<HTMLDialogElement>) => {
      if (estaEnviando) {
        event.preventDefault();
      }
    },
    [estaEnviando],
  );

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDialogElement>) => {
      if (estaEnviando) return;
      if (event.target === dialogRef.current) {
        dialogRef.current?.close();
      }
    },
    [estaEnviando],
  );

  const solicitarCierre = useCallback(() => {
    if (estaEnviando) return;
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    } else {
      onCerrar();
    }
  }, [estaEnviando, onCerrar]);

  const handleEnviar = useCallback(async () => {
    if (!bolsin || estaEnviando) return;

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setEstado("enviando");
    setErrorMensaje(null);

    try {
      const respuesta = await notificarUbicacionGerente(
        {
          bolsinId: bolsin.id,
          nroBolsin: bolsin.nroBolsin,
          modeloGps,
          emailDestino: bolsin.cmDestino.emailGcm ?? undefined,
          latitud: bolsin.ubicacion?.latitud,
          longitud: bolsin.ubicacion?.longitud,
          fechaHoraActualizacion: bolsin.ubicacion?.fechaHoraActualizacion,
        },
        controller.signal,
      );

      if (controller.signal.aborted) return;
      setResultado(respuesta);
      setEstado("exito");
      onNotificacionEnviada?.(respuesta);
    } catch (error) {
      if (controller.signal.aborted) return;
      const mensaje =
        error instanceof ErrorSeguimientoCliente
          ? error.message
          : "No pudimos enviar el aviso al gerente. Intentá de nuevo en unos instantes.";
      setErrorMensaje(mensaje);
      setEstado("error");
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  }, [bolsin, estaEnviando, modeloGps, onNotificacionEnviada]);

  const origenResuelto = cmOrigen ?? bolsin?.cmOrigen ?? null;
  const coordenadas = bolsin ? formatearCoordenadas(bolsin) : null;
  const anuncioScreenReader =
    estado === "exito" && resultado
      ? `Aviso enviado a ${resultado.destinatarioEmail} el ${formatearFechaHora(resultado.fechaEnvio)}.`
      : estado === "error" && errorMensaje
        ? `Error al enviar el aviso: ${errorMensaje}`
        : "";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={handleClose}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="m-auto w-[calc(100%-24px)] max-w-[540px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-[var(--isle-r)] border border-edge bg-surface p-0 text-fg shadow-none backdrop:bg-ink/45 backdrop:backdrop-blur-[6px]"
    >
      {bolsin ? (
        <div className="flex flex-col">
          <div className="sr-only" aria-live="assertive" aria-atomic="true">
            {anuncioScreenReader}
          </div>

          <header className="flex items-start justify-between gap-3 border-b border-hair px-5 py-4">
            <div className="min-w-0">
              <MicroLabel className="block">
                Notificación CU 30/31 · Correo corporativo
              </MicroLabel>
              <h2
                id={titleId}
                className="mt-1 font-display text-lg font-bold tracking-[-0.02em] text-fg"
              >
                {estado === "exito"
                  ? "Aviso enviado al gerente"
                  : `Avisar ubicación del bolsín #${bolsin.nroBolsin}`}
              </h2>
              <p id={descriptionId} className="mt-0.5 text-sm text-muted">
                {estado === "exito"
                  ? "Registramos el envío del correo con el detalle de ruta y documentación."
                  : "Revisá los datos que se van a enviar al Gerente de la Comisión Médica destino."}
              </p>
            </div>

            <IconButton
              aria-label="Cerrar ventana"
              disabled={estaEnviando}
              onClick={solicitarCierre}
              className="shrink-0 -mr-1 -mt-1"
            >
              <X className="size-4" />
            </IconButton>
          </header>

          <div className="flex flex-col gap-4 px-5 py-4">
            {estado === "exito" && resultado ? (
              <div className="rounded-[var(--radius-card)] border border-edge bg-raised p-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-control bg-lime text-on-lime border border-lime-edge">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-semibold text-fg">
                      Correo despachado correctamente
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      El gerente de destino ya recibió el estado actual y la
                      documentación del bolsín #{bolsin.nroBolsin}.
                    </p>
                  </div>
                </div>

                <dl className="mt-4 grid gap-3 border-t border-hair pt-3 sm:grid-cols-2">
                  <div>
                    <dt>
                      <MicroLabel className="block">Destinatario</MicroLabel>
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-fg">
                      {resultado.destinatarioNombre}
                    </dd>
                    <dd className="font-mono text-xs text-muted break-all">
                      {resultado.destinatarioEmail}
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <MicroLabel className="block">
                        Fecha y hora de envío
                      </MicroLabel>
                    </dt>
                    <dd className="mt-1 font-mono text-sm text-fg tabular-nums">
                      {formatearFechaHora(resultado.fechaEnvio)}
                    </dd>
                  </div>
                </dl>
              </div>
            ) : (
              <>
                {estado === "error" && errorMensaje ? (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-[var(--radius-card)] border border-danger/30 bg-danger/10 px-3.5 py-3 text-sm text-danger-ink"
                  >
                    <AlertCircle
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    <p>{errorMensaje}</p>
                  </div>
                ) : null}

                <dl className="grid grid-cols-1 gap-3 rounded-[var(--radius-card)] border border-edge bg-raised p-3.5 sm:grid-cols-2">
                  <div>
                    <dt>
                      <MicroLabel className="block">N.º de bolsín</MicroLabel>
                    </dt>
                    <dd className="mt-0.5 font-mono text-sm font-semibold text-fg tabular-nums">
                      #{bolsin.nroBolsin}
                    </dd>
                  </div>

                  <div>
                    <dt>
                      <MicroLabel className="block">N.º de precinto</MicroLabel>
                    </dt>
                    <dd className="mt-0.5 font-mono text-sm font-semibold text-fg">
                      {bolsin.numeroPrecinto}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt>
                      <MicroLabel className="block">
                        CM origen → CM destino
                      </MicroLabel>
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-fg">
                      {origenResuelto?.nombre ?? "CM origen no informada"}{" "}
                      <span className="text-muted" aria-hidden="true">
                        →
                      </span>{" "}
                      {bolsin.cmDestino.nombre}
                    </dd>
                  </div>

                  <div>
                    <dt>
                      <MicroLabel className="block">Coordenadas GPS</MicroLabel>
                    </dt>
                    <dd className="mt-0.5 flex items-center gap-1.5 font-mono text-xs text-fg tabular-nums">
                      <MapPin
                        className="size-3.5 shrink-0 text-muted"
                        aria-hidden="true"
                      />
                      <span>{coordenadas?.texto}</span>
                    </dd>
                    {coordenadas?.nota ? (
                      <dd className="mt-1 text-xs text-amber-ink">
                        {coordenadas.nota}
                      </dd>
                    ) : null}
                  </div>

                  <div>
                    <dt>
                      <MicroLabel className="block">
                        Última actualización
                      </MicroLabel>
                    </dt>
                    <dd className="mt-0.5 font-mono text-xs text-fg tabular-nums">
                      {formatearFechaHora(
                        bolsin.ubicacion?.fechaHoraActualizacion,
                      )}
                    </dd>
                  </div>
                </dl>

                <section aria-label="Detalle del remito incluido">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <MicroLabel>Detalle del remito</MicroLabel>
                  </div>

                  {bolsin.remito ? (
                    <div className="flex items-start gap-2.5 rounded-control border border-hair bg-raised/70 px-3 py-2">
                      <FileText
                        className="mt-0.5 size-4 shrink-0 text-muted"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span className="font-mono text-xs font-semibold text-fg">
                            {bolsin.remito.numero}
                          </span>
                          <span className="text-xs text-muted">
                            · {bolsin.remito.tipoDocumento}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-fg">
                          {bolsin.remito.asunto}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="rounded-control border border-hair bg-raised/70 px-3 py-2.5 text-sm text-muted">
                      Este bolsín no registra remito asociado.
                    </p>
                  )}
                </section>
              </>
            )}
          </div>

          <footer className="flex flex-wrap items-center justify-end gap-2.5 border-t border-hair px-5 py-3.5">
            {estado === "exito" ? (
              <Button variant="primary" onClick={solicitarCierre}>
                Listo
              </Button>
            ) : (
              <>
                <Button
                  variant="secondary"
                  disabled={estaEnviando}
                  onClick={solicitarCierre}
                >
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  loading={estaEnviando}
                  leftIcon={<Send className="size-4" />}
                  onClick={handleEnviar}
                >
                  {estado === "error" ? "Reintentar" : "Enviar aviso"}
                </Button>
              </>
            )}
          </footer>
        </div>
      ) : null}
    </dialog>
  );
}
