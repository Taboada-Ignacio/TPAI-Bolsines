"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LocateFixed, Minus, Plus } from "lucide-react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
} from "@/dtos/seguimiento-bolsin.dto";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import {
  agruparEnUnidadesTransporte,
  type UnidadTransporte,
} from "@/lib/seguimiento/agrupador-unidades";
import { MarcadorCamion } from "./MarcadorCamion";

gsap.registerPlugin(useGSAP);

const WORKER_URL = "/maplibre/maplibre-gl-worker.mjs";
const STYLE_LIGHT = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
const STYLE_DARK = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const GEOJSON_RUTAS_URL = "/seguimiento/rutas-nacionales.geojson";

const CENTRO_ARGENTINA: [number, number] = [-63.8, -32.2];
const ZOOM_INICIAL = 4.6;
const PITCH_INICIAL = 40;
const ZOOM_DESAGRUPAR_MOBILE = 7.5;

export interface Mapa3DSeguimientoProps {
  bolsines: BolsinSeguimiento[];
  unidades?: UnidadTransporte[];
  seleccionadoNro: number | null;
  hoveredBolsinNro?: number | null;
  onHoverBolsin?: (nroBolsin: number | null) => void;
  onSeleccionar: (nroBolsin: number) => void;
  onTapUnidadMobile?: (unidad: UnidadTransporte) => void;
  cmOrigen?: CmOrigenSeguimiento | null;
  loading?: boolean;
  filtroActivo?: boolean;
}

function esTemaOscuroActivo(): boolean {
  if (typeof document === "undefined") return false;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return true;
  if (attr === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function soportaWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
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
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

interface MarcadorPortalEntry {
  id: string;
  element: HTMLDivElement;
  coordenadas: [number, number];
}

export function Mapa3DSeguimiento({
  bolsines,
  unidades: unidadesProp,
  seleccionadoNro,
  hoveredBolsinNro = null,
  onHoverBolsin,
  onSeleccionar,
  onTapUnidadMobile,
  loading = false,
  filtroActivo = false,
}: Mapa3DSeguimientoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapStageRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<Map<string, maplibregl.Marker>>(new Map());
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [temaOscuro, setTemaOscuro] = useState<boolean>(() => esTemaOscuroActivo());
  const [webglDisponible, setWebglDisponible] = useState<boolean>(() => soportaWebGL());
  const [mapaListo, setMapaListo] = useState(false);
  const [zoomActual, setZoomActual] = useState(ZOOM_INICIAL);
  const [camionAbiertoId, setCamionAbiertoId] = useState<string | null>(null);
  const [portales, setPortales] = useState<MarcadorPortalEntry[]>([]);

  const unidades = useMemo(
    () => unidadesProp ?? agruparEnUnidadesTransporte(bolsines),
    [unidadesProp, bolsines],
  );

  const desagruparMobile = !isDesktop && zoomActual >= ZOOM_DESAGRUPAR_MOBILE;

  const rutasActivas = useMemo(
    () =>
      Array.from(
        new Set(
          unidades
            .filter((u) => !u.tieneA3 && u.coincidenciasFiltro > 0 && u.ruta !== "OTRA")
            .map((u) => u.ruta),
        ),
      ),
    [unidades],
  );

  const rutasA3 = useMemo(
    () =>
      Array.from(
        new Set(
          unidades
            .filter((u) => u.tieneA3 && u.ruta !== "OTRA")
            .map((u) => u.ruta),
        ),
      ),
    [unidades],
  );

  const rutasActivasRef = useRef(rutasActivas);
  const rutasA3Ref = useRef(rutasA3);
  useEffect(() => {
    rutasActivasRef.current = rutasActivas;
    rutasA3Ref.current = rutasA3;
  }, [rutasActivas, rutasA3]);

  const inyectarCapasRutas = useCallback((map: maplibregl.Map) => {
    const colorPrimario = leerTokenCss("--primary", "#0251b0");
    const colorLima = leerTokenCss("--lime", "#d1ff42");
    const colorAmbar = leerTokenCss("--amber", "#f59e0b");

    if (!map.getSource("rutas-nacionales")) {
      map.addSource("rutas-nacionales", {
        type: "geojson",
        data: GEOJSON_RUTAS_URL,
      });
    }

    if (!map.getLayer("rutas-nacionales-base")) {
      map.addLayer({
        id: "rutas-nacionales-base",
        type: "line",
        source: "rutas-nacionales",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": colorPrimario,
          "line-width": 2.4,
          "line-opacity": 0.65,
        },
      });
    }

    const filtroActivas: maplibregl.FilterSpecification =
      rutasActivasRef.current.length > 0
        ? ["in", ["get", "ruta"], ["literal", rutasActivasRef.current]]
        : ["==", ["get", "ruta"], "__ninguna__"];

    if (!map.getLayer("rutas-nacionales-activa")) {
      map.addLayer({
        id: "rutas-nacionales-activa",
        type: "line",
        source: "rutas-nacionales",
        filter: filtroActivas,
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": colorLima,
          "line-width": 3.2,
          "line-opacity": 0.9,
        },
      });
    }

    const filtroA3: maplibregl.FilterSpecification =
      rutasA3Ref.current.length > 0
        ? ["in", ["get", "ruta"], ["literal", rutasA3Ref.current]]
        : ["==", ["get", "ruta"], "__ninguna__"];

    if (!map.getLayer("rutas-nacionales-a3")) {
      map.addLayer({
        id: "rutas-nacionales-a3",
        type: "line",
        source: "rutas-nacionales",
        filter: filtroA3,
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": colorAmbar,
          "line-width": 3,
          "line-dasharray": [2, 2],
          "line-opacity": 0.95,
        },
      });
    }
  }, []);

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

  // Inicializar instancia MapLibre GL
  useEffect(() => {
    const stage = mapStageRef.current;
    if (!stage || !webglDisponible) return;

    maplibregl.setWorkerUrl(WORKER_URL);

    let map: maplibregl.Map;
    try {
      map = new maplibregl.Map({
        container: stage,
        style: esTemaOscuroActivo() ? STYLE_DARK : STYLE_LIGHT,
        center: CENTRO_ARGENTINA,
        zoom: ZOOM_INICIAL,
        pitch: PITCH_INICIAL,
        bearing: 0,
        attributionControl: false,
      });
    } catch {
      queueMicrotask(() => setWebglDisponible(false));
      return;
    }

    mapRef.current = map;

    const handleStyleLoad = () => {
      try {
        map.setProjection({ type: "globe" });
      } catch {
        try {
          map.setProjection({ type: "mercator" });
        } catch {
          // Proyección plana por defecto
        }
      }
      inyectarCapasRutas(map);
      setMapaListo(true);
    };

    const handleZoom = () => {
      setZoomActual(map.getZoom());
    };

    const handleError = (event: maplibregl.ErrorEvent) => {
      const msg = event.error?.message?.toLowerCase() ?? "";
      if (msg.includes("webgl")) {
        setWebglDisponible(false);
      }
    };

    map.on("style.load", handleStyleLoad);
    map.on("zoom", handleZoom);
    map.on("error", handleError);

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(stage);

    const markers = markersRef.current;

    return () => {
      resizeObserver.disconnect();
      map.off("style.load", handleStyleLoad);
      map.off("zoom", handleZoom);
      map.off("error", handleError);
      markers.forEach((m) => m.remove());
      markers.clear();
      map.remove();
      mapRef.current = null;
      setMapaListo(false);
    };
  }, [inyectarCapasRutas, webglDisponible]);

  // Cambiar estilo Carto claro/oscuro en vivo sin destruir el mapa
  const temaInicialRef = useRef(temaOscuro);
  useEffect(() => {
    if (temaInicialRef.current === temaOscuro) return;
    temaInicialRef.current = temaOscuro;

    const map = mapRef.current;
    if (!map) return;
    map.setStyle(temaOscuro ? STYLE_DARK : STYLE_LIGHT, { diff: false });
  }, [temaOscuro]);

  // Actualizar filtros de capas activas/A3 cuando cambian unidades o tema
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapaListo) return;

    if (map.getLayer("rutas-nacionales-activa")) {
      map.setFilter(
        "rutas-nacionales-activa",
        rutasActivas.length > 0
          ? ["in", ["get", "ruta"], ["literal", rutasActivas]]
          : ["==", ["get", "ruta"], "__ninguna__"],
      );
    }
    if (map.getLayer("rutas-nacionales-a3")) {
      map.setFilter(
        "rutas-nacionales-a3",
        rutasA3.length > 0
          ? ["in", ["get", "ruta"], ["literal", rutasA3]]
          : ["==", ["get", "ruta"], "__ninguna__"],
      );
    }
  }, [mapaListo, rutasActivas, rutasA3]);

  // Sincronizar marcadores MapLibre con portales React
  const itemsMarcadores = useMemo(() => {
    if (desagruparMobile) {
      return bolsines
        .filter((b) => b.ubicacion !== null)
        .map((b) => ({
          id: `bolsin-${b.nroBolsin}`,
          coordenadas: [b.ubicacion!.longitud, b.ubicacion!.latitud] as [
            number,
            number,
          ],
          tipo: "bolsin" as const,
          bolsin: b,
        }));
    }

    return unidades.map((u) => ({
      id: `unidad-${u.id}`,
      coordenadas: u.coordenadas,
      tipo: "unidad" as const,
      unidad: u,
    }));
  }, [bolsines, desagruparMobile, unidades]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !webglDisponible) {
      setPortales([]);
      return;
    }

    const markersMap = markersRef.current;
    const idsVigentes = new Set(itemsMarcadores.map((i) => i.id));

    for (const [id, marker] of markersMap.entries()) {
      if (!idsVigentes.has(id)) {
        marker.remove();
        markersMap.delete(id);
      }
    }

    const nuevosPortales: MarcadorPortalEntry[] = [];

    for (const item of itemsMarcadores) {
      let marker = markersMap.get(item.id);
      if (!marker) {
        const el = document.createElement("div");
        el.className = "maplibre-unidad-portal";
        el.setAttribute("data-map-marker", "");
        marker = new maplibregl.Marker({
          element: el,
          anchor: "center",
        })
          .setLngLat(item.coordenadas)
          .addTo(map);
        markersMap.set(item.id, marker);
      } else {
        marker.setLngLat(item.coordenadas);
      }

      nuevosPortales.push({
        id: item.id,
        element: marker.getElement() as HTMLDivElement,
        coordenadas: item.coordenadas,
      });
    }

    setPortales(nuevosPortales);
  }, [itemsMarcadores, webglDisponible]);

  // Animación de entrada de marcadores con GSAP + matchMedia
  useGSAP(
    () => {
      const stage = mapStageRef.current;
      if (!stage || portales.length === 0) return;
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
            { scale: 0.6, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.42,
              stagger: 0.05,
              ease: "power3.out",
            },
          );
        },
      );
    },
    { scope: mapStageRef, dependencies: [portales.length] },
  );

  // Centrar cámara al seleccionar un bolsín
  useEffect(() => {
    const map = mapRef.current;
    if (!map || seleccionadoNro === null) return;

    const bolsin = bolsines.find((b) => b.nroBolsin === seleccionadoNro);
    if (!bolsin?.ubicacion) return;

    const center: [number, number] = [
      bolsin.ubicacion.longitud,
      bolsin.ubicacion.latitud,
    ];

    if (prefiereMovimientoReducido()) {
      map.jumpTo({ center, zoom: 8.5, pitch: 45 });
    } else {
      map.flyTo({ center, zoom: 8.5, pitch: 45, duration: 900 });
    }
  }, [bolsines, seleccionadoNro]);

  function handleZoomIn() {
    const map = mapRef.current;
    if (!map) return;
    if (prefiereMovimientoReducido()) {
      map.jumpTo({ zoom: Math.min(14, map.getZoom() + 1) });
    } else {
      map.zoomIn({ duration: 220 });
    }
  }

  function handleZoomOut() {
    const map = mapRef.current;
    if (!map) return;
    if (prefiereMovimientoReducido()) {
      map.jumpTo({ zoom: Math.max(3, map.getZoom() - 1) });
    } else {
      map.zoomOut({ duration: 220 });
    }
  }

  function handleRecentrar() {
    const map = mapRef.current;
    if (!map) return;
    if (prefiereMovimientoReducido()) {
      map.jumpTo({
        center: CENTRO_ARGENTINA,
        zoom: ZOOM_INICIAL,
        pitch: PITCH_INICIAL,
        bearing: 0,
      });
    } else {
      map.flyTo({
        center: CENTRO_ARGENTINA,
        zoom: ZOOM_INICIAL,
        pitch: PITCH_INICIAL,
        bearing: 0,
        duration: 700,
      });
    }
  }

  const portalesPorId = useMemo(() => {
    const mapa = new Map<string, HTMLDivElement>();
    for (const p of portales) {
      mapa.set(p.id, p.element);
    }
    return mapa;
  }, [portales]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Mapa 3D de seguimiento de bolsines"
      className="relative h-full w-full overflow-hidden bg-canvas select-none"
    >
      {webglDisponible ? (
        <div ref={mapStageRef} className="h-full w-full" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-raised px-6 text-center">
          <p className="font-display text-base font-bold text-fg">
            Vista de mapa 3D no disponible en este navegador
          </p>
          <p className="max-w-md text-xs text-muted">
            Tu dispositivo no expone aceleración WebGL. Podés seguir operando con
            la lista de bolsines en tránsito y el panel de detalle.
          </p>
        </div>
      )}

      {/* Portales de marcadores en MapLibre */}
      {itemsMarcadores.map((item) => {
        const portalEl = portalesPorId.get(item.id);
        if (!portalEl) return null;

        if (item.tipo === "bolsin") {
          const b = item.bolsin;
          const enVivo = b.ubicacion?.estadoCobertura === "vivo";
          const seleccionado = b.nroBolsin === seleccionadoNro;
          return createPortal(
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSeleccionar(b.nroBolsin);
              }}
              aria-label={`Bolsín #${b.nroBolsin}, ${b.cmDestino.nombre}, ${enVivo ? "en vivo" : "sin cobertura"}`}
              className={cn(
                "inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border px-2.5 font-mono text-xs font-bold tabular-nums cursor-pointer",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                seleccionado
                  ? "border-primary bg-primary text-on-primary"
                  : enVivo
                    ? "border-lime-edge bg-lime text-on-lime"
                    : "border-amber/60 bg-surface text-amber-ink",
              )}
            >
              #{b.nroBolsin}
            </button>,
            portalEl,
            item.id,
          );
        }

        const unidad = item.unidad;
        return createPortal(
          <MarcadorCamion
            unidad={unidad}
            isDesktop={isDesktop}
            filtroActivo={filtroActivo}
            seleccionadoNro={seleccionadoNro}
            hoveredBolsinNro={hoveredBolsinNro}
            abierto={camionAbiertoId === unidad.id}
            onAbrirChange={(abierto) =>
              setCamionAbiertoId(abierto ? unidad.id : null)
            }
            onHoverBolsin={(nro) => onHoverBolsin?.(nro)}
            onSeleccionarBolsin={onSeleccionar}
            onTapMobile={(u) => {
              if (u.bolsines.length === 1 && u.bolsines[0]) {
                onSeleccionar(u.bolsines[0].nroBolsin);
              } else {
                onTapUnidadMobile?.(u);
              }
            }}
          />,
          portalEl,
          item.id,
        );
      })}

      {/* Controles de zoom/recentrado y leyenda compacta */}
      <div className="pointer-events-none fixed bottom-[var(--shell-bottom)] right-4 z-10 flex flex-col items-end gap-2 md:bottom-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-[var(--isle-r)] border border-edge bg-glass p-1.5 backdrop-blur-[16px]">
          <IconButton
            aria-label="Acercar mapa"
            title="Acercar"
            onClick={handleZoomIn}
            disabled={!webglDisponible || loading}
            className="size-9 rounded-[10px]"
          >
            <Plus className="size-4" aria-hidden="true" />
          </IconButton>
          <IconButton
            aria-label="Alejar mapa"
            title="Alejar"
            onClick={handleZoomOut}
            disabled={!webglDisponible || loading}
            className="size-9 rounded-[10px]"
          >
            <Minus className="size-4" aria-hidden="true" />
          </IconButton>
          <IconButton
            aria-label="Recentrar mapa en Argentina"
            title="Recentrar"
            onClick={handleRecentrar}
            disabled={!webglDisponible || loading}
            className="size-9 rounded-[10px]"
          >
            <LocateFixed className="size-4" aria-hidden="true" />
          </IconButton>
        </div>

        <div className="pointer-events-auto hidden items-center gap-3 rounded-[var(--isle-r)] border border-edge bg-glass px-3.5 py-2 backdrop-blur-[16px] sm:flex">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg">
            <span className="size-2 rounded-full border border-lime-edge bg-lime" />
            En vivo
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg">
            <span className="size-2 rounded-full bg-amber" />
            Sin cobertura (A3)
          </span>
          <MicroLabel className="text-[10px]">
            {unidades.length} {unidades.length === 1 ? "unidad" : "unidades"}
          </MicroLabel>
        </div>
      </div>
    </div>
  );
}
