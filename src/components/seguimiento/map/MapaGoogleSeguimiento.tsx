"use client";

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LocateFixed, MapPinOff, Minus, Plus, RefreshCw } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import type {
  BolsinSeguimiento,
  CmOrigenSeguimiento,
} from "@/dtos/seguimiento-bolsin.dto";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { obtenerEstilosGoogleMaps } from "@/lib/seguimiento/google-maps-styles";
import {
  calcularRutaGeodesicaEnvio,
  obtenerCoordenadaCm,
  resolverRutaEnvio,
  type RutaEnvioResuelta,
} from "@/lib/seguimiento/rutas-envio";
import { GoogleMarkerOverlay } from "./GoogleMarkerOverlay";
import { MarcadorBolsin } from "./MarcadorBolsin";

gsap.registerPlugin(useGSAP);

const CENTRO_ARGENTINA = { lat: -32.2, lng: -63.8 };
const ZOOM_INICIAL = 5;

let googleOptionsConfiguradas = false;

export interface MapaGoogleSeguimientoProps {
  bolsines: BolsinSeguimiento[];
  seleccionadoNro: number | null;
  hoveredBolsinNro?: number | null;
  onHoverBolsin?: (nroBolsin: number | null) => void;
  onSeleccionar: (nroBolsin: number) => void;
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

function crearIconoPunteado(color: string, opacidad = 0.9): google.maps.IconSequence {
  return {
    icon: {
      path: "M 0,-1 0,1",
      strokeOpacity: opacidad,
      strokeColor: color,
      scale: 3,
    },
    offset: "0",
    repeat: "14px",
  };
}

export function MapaGoogleSeguimiento({
  bolsines,
  seleccionadoNro,
  hoveredBolsinNro = null,
  onHoverBolsin,
  onSeleccionar,
  cmOrigen = null,
  loading = false,
  filtroActivo = false,
}: MapaGoogleSeguimientoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapStageRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const polylinesRef = useRef<google.maps.Polyline[]>([]);
  const rutasCacheRef = useRef<Map<string, RutaEnvioResuelta>>(new Map());
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [temaOscuro, setTemaOscuro] = useState<boolean>(() => esTemaOscuroActivo());
  const [mapInstancia, setMapInstancia] = useState<google.maps.Map | null>(null);
  const [errorMapa, setErrorMapa] = useState<boolean>(false);
  const [reintentoTick, setReintentoTick] = useState<number>(0);
  const [rutasResueltas, setRutasResueltas] = useState<Map<number, RutaEnvioResuelta>>(
    () => new Map(),
  );

  const enModoFoco = seleccionadoNro !== null;

  const bolsinSeleccionado = useMemo(
    () =>
      seleccionadoNro === null
        ? null
        : bolsines.find((b) => b.nroBolsin === seleccionadoNro) ?? null,
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

  // Inicializar Google Maps JS API
  useEffect(() => {
    const stage = mapStageRef.current;
    if (!stage) return;

    let cancelado = false;
    const prevAuthFailure = (window as Window & { gm_authFailure?: () => void })
      .gm_authFailure;

    (window as Window & { gm_authFailure?: () => void }).gm_authFailure = () => {
      if (!cancelado) {
        setErrorMapa(true);
      }
      prevAuthFailure?.();
    };

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;

    if (!googleOptionsConfiguradas) {
      setOptions({
        ...(apiKey ? { key: apiKey } : {}),
        v: "weekly",
        language: "es",
        region: "AR",
      });
      googleOptionsConfiguradas = true;
    }

    Promise.all([
      importLibrary("maps"),
      apiKey ? importLibrary("routes").catch(() => null) : Promise.resolve(null),
    ])
      .then(([mapsLib, routesLib]) => {
        if (cancelado || !mapStageRef.current) return;

        const centroInicial =
          bolsines.length === 0 && cmOrigen
            ? obtenerCoordenadaCm(cmOrigen.codigo, CENTRO_ARGENTINA)
            : CENTRO_ARGENTINA;

        const mapOptions: google.maps.MapOptions = {
          center: centroInicial,
          zoom: ZOOM_INICIAL,
          disableDefaultUI: true,
          gestureHandling: "greedy",
          clickableIcons: false,
          ...(mapId
            ? { mapId }
            : { styles: obtenerEstilosGoogleMaps(esTemaOscuroActivo()) }),
        };

        const map = new mapsLib.Map(mapStageRef.current, mapOptions);
        mapRef.current = map;

        if (routesLib?.DirectionsService) {
          directionsServiceRef.current = new routesLib.DirectionsService();
        }

        setErrorMapa(false);
        setMapInstancia(map);
      })
      .catch(() => {
        if (!cancelado) {
          setErrorMapa(true);
        }
      });

    return () => {
      cancelado = true;
      polylinesRef.current.forEach((p) => p.setMap(null));
      polylinesRef.current = [];
      mapRef.current = null;
      setMapInstancia(null);
      (window as Window & { gm_authFailure?: () => void }).gm_authFailure =
        prevAuthFailure;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reintentoTick]);

  // Actualizar estilos claro/oscuro en vivo sin destruir el mapa
  useEffect(() => {
    const map = mapRef.current;
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
    if (!map || mapId) return;

    map.setOptions({
      styles: obtenerEstilosGoogleMaps(temaOscuro),
    });
  }, [temaOscuro]);

  // Resolver rutas por envío (CM Origen -> Posición -> CM Destino)
  // Primero asigna el trazado vial síncrono para render instantáneo y luego refina con Directions / OSRM
  useEffect(() => {
    let cancelado = false;

    const iniciales = new Map<number, RutaEnvioResuelta>();
    const pendientes: BolsinSeguimiento[] = [];

    for (const bolsin of bolsines) {
      const cacheKey = `${bolsin.nroBolsin}:${bolsin.ubicacion?.latitud ?? "none"}:${bolsin.ubicacion?.longitud ?? "none"}:${bolsin.cmDestino.codigo}`;
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

    if (pendientes.length === 0) {
      return () => {
        cancelado = true;
      };
    }

    async function resolverPendientes() {
      const resueltas = new Map<number, RutaEnvioResuelta>(iniciales);

      await Promise.all(
        pendientes.map(async (bolsin) => {
          const cacheKey = `${bolsin.nroBolsin}:${bolsin.ubicacion?.latitud ?? "none"}:${bolsin.ubicacion?.longitud ?? "none"}:${bolsin.cmDestino.codigo}`;
          const ruta = await resolverRutaEnvio(
            bolsin,
            cmOrigen,
            directionsServiceRef.current,
          );
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
  }, [bolsines, cmOrigen, mapInstancia]);

  // Dibujar polilíneas: vista general vs Modo Foco
  useEffect(() => {
    const map = mapRef.current;
    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    if (!map || typeof google === "undefined" || !google.maps?.Polyline) {
      return;
    }

    const colorPrimario = leerTokenCss("--primary", "#0251b0");
    const colorLima = leerTokenCss("--lime", "#d1ff42");
    const colorAmbar = leerTokenCss("--amber", "#f59e0b");

    if (bolsinSeleccionado) {
      const ruta =
        rutasResueltas.get(bolsinSeleccionado.nroBolsin) ??
        calcularRutaGeodesicaEnvio(bolsinSeleccionado, cmOrigen);

      const esA3 =
        bolsinSeleccionado.ubicacion === null ||
        bolsinSeleccionado.ubicacion.estadoCobertura === "sin_cobertura";

      const polyHalo = new google.maps.Polyline({
        path: ruta.rutaCompleta,
        geodesic: true,
        strokeColor: temaOscuro ? "#0b1220" : "#0f172a",
        strokeOpacity: temaOscuro ? 0.28 : 0.16,
        strokeWeight: 7,
        zIndex: 20,
        map,
      });

      const polyRecorrido = new google.maps.Polyline({
        path: ruta.tramoRecorrido,
        geodesic: true,
        strokeColor: esA3 ? colorAmbar : colorLima,
        strokeOpacity: esA3 ? 0 : 0.95,
        strokeWeight: 4,
        icons: esA3 ? [crearIconoPunteado(colorAmbar, 0.95)] : undefined,
        zIndex: 30,
        map,
      });

      const polyRestante = new google.maps.Polyline({
        path: ruta.tramoRestante,
        geodesic: true,
        strokeColor: colorPrimario,
        strokeOpacity: 0,
        strokeWeight: 3,
        icons: [crearIconoPunteado(colorPrimario, 0.8)],
        zIndex: 25,
        map,
      });

      polylinesRef.current.push(polyHalo, polyRecorrido, polyRestante);
      return;
    }

    // Vista general: rutas individuales de cada envío en trazo suave
    for (const bolsin of bolsines) {
      const ruta =
        rutasResueltas.get(bolsin.nroBolsin) ??
        calcularRutaGeodesicaEnvio(bolsin, cmOrigen);

      const polyBase = new google.maps.Polyline({
        path: ruta.rutaCompleta,
        geodesic: true,
        strokeColor: colorPrimario,
        strokeOpacity: 0.28,
        strokeWeight: 2,
        zIndex: 10,
        map,
      });
      polylinesRef.current.push(polyBase);
    }
  }, [bolsinSeleccionado, bolsines, cmOrigen, mapInstancia, rutasResueltas, temaOscuro]);

  // Encuadrar cámara en Modo Foco al seleccionar un bolsín
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !bolsinSeleccionado) return;

    const ruta =
      rutasResueltas.get(bolsinSeleccionado.nroBolsin) ??
      calcularRutaGeodesicaEnvio(bolsinSeleccionado, cmOrigen);

    const reduced = prefiereMovimientoReducido();

    if (typeof google !== "undefined" && google.maps?.LatLngBounds) {
      const bounds = new google.maps.LatLngBounds();
      for (const punto of ruta.rutaCompleta) {
        bounds.extend(punto);
      }
      bounds.extend(ruta.origen);
      bounds.extend(ruta.posicionActual);
      bounds.extend(ruta.destino);

      const padding = isDesktop
        ? { top: 88, right: 410, bottom: 88, left: 400 }
        : { top: 84, right: 24, bottom: 260, left: 24 };

      map.fitBounds(bounds, padding);

      const listener = map.addListener("idle", () => {
        listener.remove();
        const currentZoom = map.getZoom();
        if (typeof currentZoom === "number" && currentZoom > 11) {
          map.setZoom(11);
        }
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
        if (mapId && !reduced) {
          map.setTilt(45);
        }
      });
    } else {
      map.panTo(ruta.posicionActual);
      map.setZoom(Math.max(map.getZoom() ?? ZOOM_INICIAL, 8));
    }
  }, [bolsinSeleccionado, cmOrigen, isDesktop, rutasResueltas]);

  const rutaFoco = useMemo(() => {
    if (!bolsinSeleccionado) return null;
    return (
      rutasResueltas.get(bolsinSeleccionado.nroBolsin) ??
      calcularRutaGeodesicaEnvio(bolsinSeleccionado, cmOrigen)
    );
  }, [bolsinSeleccionado, cmOrigen, rutasResueltas]);

  // Marcadores individuales por bolsín (1 marcador = 1 bolsín = 1 viaje/ruta)
  const itemsMarcadores = useMemo(() => {
    if (enModoFoco && bolsinSeleccionado && rutaFoco) {
      const posReal = bolsinSeleccionado.ubicacion
        ? {
            lat: bolsinSeleccionado.ubicacion.latitud,
            lng: bolsinSeleccionado.ubicacion.longitud,
          }
        : rutaFoco.posicionActual;

      return [
        {
          id: `bolsin-${bolsinSeleccionado.nroBolsin}`,
          coordenadas: posReal,
          bolsin: bolsinSeleccionado,
        },
      ];
    }

    return bolsines.map((b) => {
      const ruta =
        rutasResueltas.get(b.nroBolsin) ??
        calcularRutaGeodesicaEnvio(b, cmOrigen);
      const coordenadas = b.ubicacion
        ? { lat: b.ubicacion.latitud, lng: b.ubicacion.longitud }
        : ruta.posicionActual;

      return {
        id: `bolsin-${b.nroBolsin}`,
        coordenadas,
        bolsin: b,
      };
    });
  }, [
    bolsines,
    bolsinSeleccionado,
    cmOrigen,
    enModoFoco,
    rutaFoco,
    rutasResueltas,
  ]);

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

  const handleRecentrar = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    const centro =
      bolsines.length === 0 && cmOrigen
        ? obtenerCoordenadaCm(cmOrigen.codigo, CENTRO_ARGENTINA)
        : CENTRO_ARGENTINA;

    if (prefiereMovimientoReducido()) {
      map.setCenter(centro);
      map.setZoom(ZOOM_INICIAL);
    } else {
      map.panTo(centro);
      map.setZoom(ZOOM_INICIAL);
    }
    map.setTilt(0);
  }, [bolsines.length, cmOrigen]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Mapa de seguimiento de bolsines en Google Maps"
      className="relative h-full w-full overflow-hidden bg-canvas select-none"
    >
      {!errorMapa ? (
        <div ref={mapStageRef} className="h-full w-full" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-raised px-6 text-center">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-edge bg-surface text-muted">
            <MapPinOff aria-hidden="true" className="size-5" />
          </div>
          <p className="font-display text-base font-bold text-fg">
            No pudimos conectar con Google Maps
          </p>
          <p className="max-w-md text-xs text-muted">
            Podés seguir consultando los bolsines en tránsito, revisar coordenadas
            y avisar la ubicación al gerente desde la lista lateral.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setErrorMapa(false);
              setReintentoTick((n) => n + 1);
            }}
            leftIcon={<RefreshCw className="size-3.5" />}
          >
            Reintentar mapa
          </Button>
        </div>
      )}

      {/* Marcadores individuales por bolsín en Google Maps vía OverlayView + React Portal */}
      {mapInstancia &&
        !errorMapa &&
        itemsMarcadores.map((item) => {
          const b = item.bolsin;
          const seleccionado = b.nroBolsin === seleccionadoNro;
          const hovered = b.nroBolsin === hoveredBolsinNro;
          const zIndex = seleccionado ? 60 : hovered ? 50 : 25;

          return (
            <GoogleMarkerOverlay
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
            </GoogleMarkerOverlay>
          );
        })}

      {/* Marcadores discretos de CM Origen y CM Destino en Modo Foco */}
      {mapInstancia && !errorMapa && bolsinSeleccionado && rutaFoco ? (
        <>
          <GoogleMarkerOverlay
            map={mapInstancia}
            position={rutaFoco.origen}
            zIndex={20}
          >
            <span className="inline-flex items-center gap-1 rounded-full border border-edge bg-glass px-2.5 py-0.5 font-mono text-[10px] font-semibold text-fg backdrop-blur-[12px]">
              <span className="size-1.5 rounded-full bg-lime" />
              {bolsinSeleccionado.cmOrigen?.codigo ?? cmOrigen?.codigo ?? "Origen"}
            </span>
          </GoogleMarkerOverlay>
          <GoogleMarkerOverlay
            map={mapInstancia}
            position={rutaFoco.destino}
            zIndex={20}
          >
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/50 bg-glass px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary backdrop-blur-[12px]">
              <span className="size-1.5 rounded-full bg-primary" />
              {bolsinSeleccionado.cmDestino.codigo}
            </span>
          </GoogleMarkerOverlay>
        </>
      ) : null}

      {/* Controles de zoom/recentrado y leyenda compacta (respetando atribución inferior de Google) */}
      <div className="pointer-events-none fixed bottom-[var(--shell-bottom)] right-4 z-10 flex flex-col items-end gap-2 md:bottom-7">
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
            aria-label="Recentrar mapa en la comisión"
            title="Centrar en la comisión"
            onClick={handleRecentrar}
            disabled={errorMapa || !mapInstancia || loading}
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
            {enModoFoco
              ? `Foco #${bolsinSeleccionado?.nroBolsin ?? ""}`
              : `${bolsines.length} ${bolsines.length === 1 ? "bolsín" : "bolsines"}`}
          </MicroLabel>
        </div>
      </div>
    </div>
  );
}
