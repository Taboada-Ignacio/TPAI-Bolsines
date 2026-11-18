"use client";

import {
  LngLatBounds,
  Map as MapLibreMap,
  setWorkerUrl,
  type GeoJSONSource,
  type LineLayerSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LocateFixed, MapPinOff, Minus, Plus, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { cn } from "@/lib/cn";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
} from "@/dtos/seguimiento-bolsin.dto";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  calcularRutaGeodesicaEnvio,
  obtenerCoordenadaCm,
  resolverRutaEnvio,
  type RutaEnvioResuelta,
} from "@/lib/seguimiento/rutas-envio";
import { MarcadorMapa } from "./MarcadorMapa";
import { MarcadorBolsin } from "./MarcadorBolsin";

gsap.registerPlugin(useGSAP);

const CENTRO_ARGENTINA = { lat: -32.2, lng: -63.8 };
const ZOOM_INICIAL = 5;

function estiloMapa(oscuro: boolean): string {
  return oscuro
    ? "https://tiles.openfreemap.org/styles/dark"
    : "https://tiles.openfreemap.org/styles/bright";
}

function coordenadasMapa(punto: {
  lat: number;
  lng: number;
}): [number, number] {
  return [punto.lng, punto.lat];
}

export interface MapaLibreSeguimientoProps {
  bolsines: BolsinSeguimiento[];
  estiloBase?: string;
  seleccionadoNro: number | null;
  hoveredBolsinNro?: number | null;
  onHoverBolsin?: (nroBolsin: number | null) => void;
  onSeleccionar: (nroBolsin: number) => void;
  cmOrigen?: CmOrigenSeguimiento | null;
  loading?: boolean;
  filtroActivo?: boolean;
  detalleMovilMinimizado?: boolean;
}

function esTemaOscuroActivo(): boolean {
  if (typeof document === "undefined") return false;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return true;
  if (attr === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function leerTokenCss(nombre: string, respaldo: string): string {
  if (typeof document === "undefined") return respaldo;
  const valor = getComputedStyle(document.documentElement)
    .getPropertyValue(nombre)
    .trim();
  return valor || respaldo;
}

function prefiereMovimientoReducido(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );
}

export function MapaLibreSeguimiento({
  bolsines,
  estiloBase,
  seleccionadoNro,
  hoveredBolsinNro = null,
  onHoverBolsin,
  onSeleccionar,
  cmOrigen = null,
  loading = false,
  filtroActivo = false,
  detalleMovilMinimizado = false,
}: MapaLibreSeguimientoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapStageRef = useRef<HTMLDivElement>(null);
  const controlesRef = useRef<HTMLDivElement>(null);
  const centroInicial = useRef(
    bolsines.length === 0 && cmOrigen
      ? obtenerCoordenadaCm(cmOrigen.codigo, CENTRO_ARGENTINA)
      : CENTRO_ARGENTINA,
  );
  const mapRef = useRef<MapLibreMap | null>(null);
  const rutasCacheRef = useRef<Map<string, RutaEnvioResuelta>>(new Map());
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [temaOscuro, setTemaOscuro] = useState<boolean>(() =>
    esTemaOscuroActivo(),
  );
  const [mapInstancia, setMapInstancia] = useState<MapLibreMap | null>(null);
  const [errorMapa, setErrorMapa] = useState<boolean>(false);
  const [reintentoTick, setReintentoTick] = useState<number>(0);
  const [rutasResueltas, setRutasResueltas] = useState<
    Map<number, RutaEnvioResuelta>
  >(() => new Map());

  const enModoFoco = seleccionadoNro !== null;

  const bolsinSeleccionado = useMemo(
    () =>
      seleccionadoNro === null
        ? null
        : (bolsines.find((b) => b.nroBolsin === seleccionadoNro) ?? null),
    [bolsines, seleccionadoNro],
  );

  // Observar cambios de tema en vivo (<html data-theme="..."> o prefers-color-scheme)
  useEffect(() => {
    const actualizarTema = () => setTemaOscuro(esTemaOscuroActivo());
    actualizarTema();

    const observer = new MutationObserver(actualizarTema);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    media?.addEventListener("change", actualizarTema);

    return () => {
      observer.disconnect();
      media?.removeEventListener("change", actualizarTema);
    };
  }, []);

  useEffect(() => {
    const stage = mapStageRef.current;
    if (!stage) return;

    const frame = requestAnimationFrame(() => {
      let map: MapLibreMap;
      try {
        setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
        map = new MapLibreMap({
          container: stage,
          center: coordenadasMapa(centroInicial.current),
          zoom: ZOOM_INICIAL,
          minZoom: 3,
          maxZoom: 16,
          maplibreLogo: false,
        });
      } catch {
        setMapInstancia(null);
        setErrorMapa(true);
        return;
      }

      let estiloCargado = false;
      map.on("style.load", () => {
        estiloCargado = true;
      });
      map.on("error", () => {
        if (!estiloCargado) setErrorMapa(true);
      });
      mapRef.current = map;
      setMapInstancia(map);
    });

    return () => {
      cancelAnimationFrame(frame);
      const map = mapRef.current;
      mapRef.current = null;
      map?.remove();
    };
  }, [reintentoTick]);

  useEffect(() => {
    if (!mapInstancia || mapRef.current !== mapInstancia) return;
    mapInstancia.setStyle(
      temaOscuro ? estiloMapa(true) : (estiloBase ?? estiloMapa(false)),
      { diff: false },
    );
  }, [estiloBase, mapInstancia, temaOscuro]);

  // El modo demo y los contratos anteriores todavía resuelven sus rutas en el cliente.
  useEffect(() => {
    let cancelado = false;

    const iniciales = new Map<number, RutaEnvioResuelta>();
    const pendientes: BolsinSeguimiento[] = [];

    for (const bolsin of bolsines) {
      if (bolsin.recorrido !== undefined) continue;
      const cacheKey = `${bolsin.nroBolsin}:${bolsin.ubicacion?.latitud ?? "none"}:${bolsin.ubicacion?.longitud ?? "none"}:${bolsin.cmOrigen?.codigo ?? cmOrigen?.codigo}:${bolsin.cmDestino.codigo}`;
      const enCache = rutasCacheRef.current.get(cacheKey);
      if (enCache) {
        iniciales.set(bolsin.nroBolsin, enCache);
      } else {
        iniciales.set(
          bolsin.nroBolsin,
          calcularRutaGeodesicaEnvio(bolsin, cmOrigen),
        );
        pendientes.push(bolsin);
      }
    }

    async function resolverPendientes() {
      const resueltas = new Map<number, RutaEnvioResuelta>(iniciales);

      await Promise.all(
        pendientes.map(async (bolsin) => {
          const cacheKey = `${bolsin.nroBolsin}:${bolsin.ubicacion?.latitud ?? "none"}:${bolsin.ubicacion?.longitud ?? "none"}:${bolsin.cmOrigen?.codigo ?? cmOrigen?.codigo}:${bolsin.cmDestino.codigo}`;
          const ruta = await resolverRutaEnvio(bolsin, cmOrigen);
          rutasCacheRef.current.set(cacheKey, ruta);
          resueltas.set(bolsin.nroBolsin, ruta);
        }),
      );

      if (!cancelado) {
        setRutasResueltas(resueltas);
      }
    }

    void resolverPendientes();

    return () => {
      cancelado = true;
    };
  }, [bolsines, cmOrigen]);

  const recorridoDe = useCallback(
    (bolsin: BolsinSeguimiento) => {
      if (bolsin.recorrido) return bolsin.recorrido;
      const ruta =
        rutasResueltas.get(bolsin.nroBolsin) ??
        calcularRutaGeodesicaEnvio(bolsin, cmOrigen);
      return {
        origen: ruta.origen,
        destino: ruta.destino,
        trazado: ruta.rutaCompleta,
      };
    },
    [cmOrigen, rutasResueltas],
  );

  const rutaFoco = useMemo(
    () => (bolsinSeleccionado ? recorridoDe(bolsinSeleccionado) : null),
    [bolsinSeleccionado, recorridoDe],
  );

  useEffect(() => {
    const map = mapInstancia;
    if (!map || mapRef.current !== map) return;

    const pintarRutas = () => {
      const primaria = leerTokenCss("--primary", "#0251b0");
      const lima = leerTokenCss("--lime", "#d1ff42");
      const dibujar = (
        tramo: string,
        rutas: RutaEnvioResuelta["rutaCompleta"][],
        paint: LineLayerSpecification["paint"],
      ) => {
        const id = `seguimiento-${tramo}`;
        const data = {
          type: "MultiLineString" as const,
          coordinates: rutas
            .filter((ruta) => ruta.length >= 2)
            .map((ruta) => ruta.map(coordenadasMapa)),
        };
        const source = map.getSource<GeoJSONSource>(id);
        if (source) {
          source.setData(data);
          for (const [propiedad, valor] of Object.entries(paint ?? {})) {
            map.setPaintProperty(id, propiedad, valor);
          }
        } else {
          map.addSource(id, { type: "geojson", data });
          map.addLayer({ id, type: "line", source: id, paint });
        }
      };

      const generales = bolsines
        .filter((bolsin) => bolsin !== bolsinSeleccionado)
        .flatMap((bolsin) => {
          const trazado = recorridoDe(bolsin).trazado;
          return trazado ? [trazado] : [];
        });
      dibujar("general", generales, {
        "line-color": primaria,
        "line-opacity": bolsinSeleccionado ? 0.14 : 0.45,
        "line-width": 2,
      });
      dibujar("seleccion", rutaFoco?.trazado ? [rutaFoco.trazado] : [], {
        "line-color": lima,
        "line-width": 4,
      });
    };

    map.on("style.load", pintarRutas);
    if (map.getSource("seguimiento-general") || map.isStyleLoaded())
      pintarRutas();
    return () => {
      map.off("style.load", pintarRutas);
    };
  }, [
    bolsinSeleccionado,
    bolsines,
    mapInstancia,
    recorridoDe,
    rutaFoco,
    temaOscuro,
  ]);

  const itemsMarcadores = useMemo(
    () =>
      bolsines.flatMap((bolsin) => {
        if (!bolsin.ubicacion) return [];
        return [
          {
            id: `bolsin-${bolsin.nroBolsin}`,
            coordenadas: {
              lat: bolsin.ubicacion.latitud,
              lng: bolsin.ubicacion.longitud,
            },
            bolsin,
          },
        ];
      }),
    [bolsines],
  );

  // Animación de entrada de marcadores con GSAP + matchMedia
  useGSAP(
    () => {
      const stage = mapStageRef.current;
      if (!stage || itemsMarcadores.length === 0) return;
      const markers = stage.querySelectorAll<HTMLElement>("[data-map-marker]");
      if (markers.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(markers, { scale: 1, autoAlpha: 1, duration: 0 });
            return;
          }
          gsap.fromTo(
            markers,
            { scale: 0.72, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.36,
              stagger: 0.04,
              ease: "power3.out",
            },
          );
        },
      );
    },
    { scope: mapStageRef, dependencies: [itemsMarcadores.length, enModoFoco] },
  );

  const handleZoomIn = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setZoom(Math.min(16, (map.getZoom() ?? ZOOM_INICIAL) + 1));
  }, []);

  const handleZoomOut = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setZoom(Math.max(3, (map.getZoom() ?? ZOOM_INICIAL) - 1));
  }, []);

  const limites = useMemo(() => {
    const bounds = new LngLatBounds();
    for (const { bolsin, coordenadas } of itemsMarcadores) {
      if (!bolsinSeleccionado || bolsin === bolsinSeleccionado) {
        bounds.extend(coordenadasMapa(coordenadas));
      }
    }
    if (rutaFoco) {
      for (const punto of [
        rutaFoco.origen,
        ...(rutaFoco.trazado ?? []),
        rutaFoco.destino,
      ]) {
        if (punto) bounds.extend(coordenadasMapa(punto));
      }
    } else {
      for (const bolsin of bolsines) {
        for (const punto of recorridoDe(bolsin).trazado ?? []) {
          bounds.extend(coordenadasMapa(punto));
        }
      }
    }
    return bounds;
  }, [bolsinSeleccionado, bolsines, itemsMarcadores, recorridoDe, rutaFoco]);

  const encuadrarMapa = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

    const duration = prefiereMovimientoReducido() ? 0 : 500;
    if (limites.isEmpty()) {
      const centro = cmOrigen
        ? obtenerCoordenadaCm(cmOrigen.codigo, CENTRO_ARGENTINA)
        : CENTRO_ARGENTINA;
      map.easeTo({
        center: coordenadasMapa(centro),
        zoom: ZOOM_INICIAL,
        duration,
      });
      return;
    }

    const vista = map.getContainer().getBoundingClientRect();
    if (!vista.width || !vista.height) return;

    const workspace = containerRef.current?.closest("[data-seg-workspace]");
    const rect = (borde: string) => {
      const panel = workspace?.querySelector(`[data-seg-map-edge="${borde}"]`);
      return panel?.getClientRects().length
        ? panel.getBoundingClientRect()
        : null;
    };

    const margen = isDesktop ? 42 : 32;
    const izquierda = rect("left");
    const derecha = rect("right");
    const superior = rect("top");
    const inferior = rect("bottom");
    const controles = controlesRef.current?.getBoundingClientRect();

    const top = Math.max(
      superior ? superior.bottom - vista.top + margen : 0,
      isDesktop ? 88 : margen,
    );
    const bottom = Math.max(
      margen,
      inferior ? vista.bottom - inferior.top + margen : 0,
      controles ? vista.bottom - controles.top + margen : 0,
    );
    map.fitBounds(limites, {
      padding: {
        left: izquierda
          ? Math.max(margen, izquierda.right - vista.left + margen)
          : margen,
        right: derecha
          ? Math.max(margen, vista.right - derecha.left + margen)
          : margen,
        top,
        bottom: Math.min(bottom, Math.max(margen, vista.height - top - 60)),
      },
      maxZoom: enModoFoco ? 11 : 12,
      duration,
    });
  }, [cmOrigen, enModoFoco, isDesktop, limites]);

  useEffect(() => {
    if (!mapInstancia || mapRef.current !== mapInstancia) return;

    const stage = mapInstancia.getContainer();
    const workspace = containerRef.current?.closest("[data-seg-workspace]");
    const paneles = Array.from(
      workspace?.querySelectorAll("[data-seg-map-edge]") ?? [],
    );
    let frame = 0;
    const ajustarEncuadre = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        mapInstancia.resize();
        encuadrarMapa();
      });
    };

    const alMoverPanel = (event: Event) => {
      if (
        event.target === event.currentTarget &&
        (event as TransitionEvent).propertyName === "left"
      ) {
        ajustarEncuadre();
      }
    };
    const observer = new ResizeObserver(ajustarEncuadre);
    observer.observe(stage);
    if (controlesRef.current) observer.observe(controlesRef.current);
    for (const panel of paneles) {
      observer.observe(panel);
      panel.addEventListener("transitionend", alMoverPanel);
    }
    ajustarEncuadre();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      for (const panel of paneles) {
        panel.removeEventListener("transitionend", alMoverPanel);
      }
    };
  }, [detalleMovilMinimizado, encuadrarMapa, mapInstancia]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Mapa de seguimiento de bolsines"
      className="relative h-full w-full overflow-hidden bg-canvas select-none"
    >
      <div ref={mapStageRef} className="relative isolate h-full w-full" />
      {errorMapa && (
        <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center gap-3 bg-raised px-6 text-center">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-edge bg-surface text-muted">
            <MapPinOff aria-hidden="true" className="size-5" />
          </div>
          <p className="font-display text-base font-bold text-fg">
            No pudimos cargar el mapa
          </p>
          <p className="max-w-md text-xs text-muted">
            Podés seguir consultando los bolsines en tránsito, revisar
            coordenadas y avisar la ubicación al gerente desde la lista lateral.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setMapInstancia(null);
              setErrorMapa(false);
              setReintentoTick((n) => n + 1);
            }}
            leftIcon={<RefreshCw className="size-3.5" />}
          >
            Reintentar mapa
          </Button>
        </div>
      )}

      {/* Marcadores con la última posición reportada por GPS. */}
      {mapInstancia &&
        !errorMapa &&
        itemsMarcadores.map((item) => {
          const b = item.bolsin;
          const seleccionado = b.nroBolsin === seleccionadoNro;
          const hovered = b.nroBolsin === hoveredBolsinNro;
          const zIndex = seleccionado ? 60 : hovered ? 50 : 25;

          return (
            <MarcadorMapa
              key={item.id}
              map={mapInstancia}
              position={item.coordenadas}
              zIndex={zIndex}
            >
              <MarcadorBolsin
                bolsin={b}
                isDesktop={isDesktop}
                filtroActivo={filtroActivo}
                coincideFiltro={true}
                seleccionado={seleccionado}
                hovered={hovered}
                onHoverChange={(next) =>
                  onHoverBolsin?.(next ? b.nroBolsin : null)
                }
                onSeleccionar={onSeleccionar}
              />
            </MarcadorMapa>
          );
        })}

      {/* Marcadores discretos de CM Origen y CM Destino en Modo Foco */}
      {mapInstancia && !errorMapa && bolsinSeleccionado && rutaFoco ? (
        <>
          {rutaFoco.origen && (
            <MarcadorMapa
              map={mapInstancia}
              position={rutaFoco.origen}
              zIndex={20}
            >
              <span className="inline-flex items-center gap-1 rounded-full border border-edge bg-glass px-2.5 py-0.5 font-mono text-[10px] font-semibold text-fg backdrop-blur-[12px]">
                <span className="size-1.5 rounded-full bg-lime" />
                Origen ·{" "}
                {bolsinSeleccionado.cmOrigen?.codigo ?? cmOrigen?.codigo}
              </span>
            </MarcadorMapa>
          )}
          {rutaFoco.destino && (
            <MarcadorMapa
              map={mapInstancia}
              position={rutaFoco.destino}
              zIndex={20}
            >
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/50 bg-glass px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary backdrop-blur-[12px]">
                <span className="size-1.5 rounded-full bg-primary" />
                Destino · {bolsinSeleccionado.cmDestino.codigo}
              </span>
            </MarcadorMapa>
          )}
        </>
      ) : null}

      {/* Controles de zoom/recentrado y leyenda compacta (respetando atribución cartográfica) */}
      <div
        ref={controlesRef}
        className={cn(
          "pointer-events-none fixed right-4 z-10 flex flex-col items-end gap-2 md:bottom-7",
          detalleMovilMinimizado
            ? "bottom-[calc(var(--shell-bottom)+68px)]"
            : "bottom-[var(--shell-bottom)]",
          enModoFoco && "md:right-[calc(var(--seg-detail-width)+28px)]",
        )}
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-[var(--isle-r)] border border-edge bg-glass p-1.5 backdrop-blur-[16px]">
          <IconButton
            aria-label="Acercar mapa"
            title="Acercar"
            onClick={handleZoomIn}
            disabled={errorMapa || !mapInstancia || loading}
            className="size-9 rounded-[10px]"
          >
            <Plus className="size-4" aria-hidden="true" />
          </IconButton>
          <IconButton
            aria-label="Alejar mapa"
            title="Alejar"
            onClick={handleZoomOut}
            disabled={errorMapa || !mapInstancia || loading}
            className="size-9 rounded-[10px]"
          >
            <Minus className="size-4" aria-hidden="true" />
          </IconButton>
          <IconButton
            aria-label="Recentrar mapa de seguimiento"
            title="Recentrar seguimiento"
            onClick={encuadrarMapa}
            disabled={errorMapa || !mapInstancia || loading}
            className="size-9 rounded-[10px]"
          >
            <LocateFixed className="size-4" aria-hidden="true" />
          </IconButton>
        </div>

        <div
          className={cn(
            "pointer-events-auto hidden items-center gap-3 rounded-[var(--isle-r)] border border-edge bg-glass px-3.5 py-2 backdrop-blur-[16px]",
            enModoFoco ? "xl:flex" : "sm:flex",
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg">
            <span className="size-2 rounded-full border border-lime-edge bg-lime" />
            Última actualización
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg">
            <span className="size-2 rounded-full bg-amber" />
            Sin cobertura (A3)
          </span>
          <MicroLabel className="text-[10px]">
            {enModoFoco
              ? `Foco #${bolsinSeleccionado?.nroBolsin ?? ""}`
              : `${bolsines.length} ${bolsines.length === 1 ? "bolsín" : "bolsines"}`}
          </MicroLabel>
        </div>
      </div>
    </div>
  );
}
