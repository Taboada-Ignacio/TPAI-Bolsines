"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/actions/Button";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import { programarMontajeMapa } from "./cicloMapa";
import estilos from "./seguimiento.module.css";

type Coordenada = [number, number];
type Mapa = {
  fitBounds(
    bounds: [Coordenada, Coordenada],
    options: {
      padding: { top: number; right: number; bottom: number; left: number };
      maxZoom: number;
      duration: number;
    },
  ): void;
  resize(): void;
  remove(): void;
  on(evento: "error", recibir: (evento: { error: Error }) => void): void;
  addControl(control: object, position: "top-right"): void;
};
type Marcador = {
  setLngLat(coordenada: Coordenada): Marcador;
  addTo(mapa: Mapa): Marcador;
  remove(): void;
};
type MapLibre = {
  Map: new (options: {
    container: HTMLElement;
    style: string;
    pitch: number;
    bearing: number;
    renderWorldCopies: boolean;
  }) => Mapa;
  Marker: new (options: { element: HTMLElement }) => Marcador;
  NavigationControl: new (options: { showCompass: boolean }) => object;
};

const cdn = "https://cdn.jsdelivr.net/npm/maplibre-gl@5.6.1/dist/";

export function MapaBolsines({
  puntos,
  seleccionado,
  seleccionar,
}: {
  puntos: PuntoBolsin[];
  seleccionado: number | null;
  seleccionar: (id: number) => void;
}) {
  const contenedor = useRef<HTMLDivElement>(null);
  const limpiarMarcadores = useRef<() => void>(null);
  const encuadrar = useRef<() => void>(null);
  const instancia = useRef<{ mapa: Mapa; biblioteca: MapLibre } | null>(null);
  const [listo, setListo] = useState(false);
  const [mapaActivo, setMapaActivo] = useState<Mapa | null>(null);
  const [fallo, setFallo] = useState(false);

  useEffect(() => {
    const nodo = contenedor.current;
    if (!listo || !nodo) return;
    let observador: ResizeObserver | undefined;
    // El primer setup de Strict Mode se limpia antes de iniciar peticiones.
    return programarMontajeMapa(
      (estaDescartado) => {
        const biblioteca = (window as Window & { maplibregl?: MapLibre })
          .maplibregl;
        try {
          if (!biblioteca) throw new Error("MapLibre no está disponible.");
          const mapa = new biblioteca.Map({
            container: nodo,
            style: "https://tiles.openfreemap.org/styles/bright",
            renderWorldCopies: false,
            pitch: 0,
            bearing: 0,
          });
          instancia.current = { mapa, biblioteca };
          mapa.on("error", ({ error }) => {
            if (estaDescartado() && error.name === "AbortError") return;
            console.error(error);
          });
          mapa.addControl(
            new biblioteca.NavigationControl({ showCompass: false }),
            "top-right",
          );
          observador = new ResizeObserver(() => {
            if (estaDescartado()) return;
            mapa.resize();
            encuadrar.current?.();
          });
          observador.observe(nodo);
          setMapaActivo(mapa);
        } catch (error) {
          console.error(error);
          setFallo(true);
        }
      },
      () => {
        observador?.disconnect();
        limpiarMarcadores.current?.();
        const actual = instancia.current;
        instancia.current = null;
        if (actual) actual.mapa.remove();
      },
    );
  }, [listo]);

  const botones = useRef(new Map<number, HTMLButtonElement>());
  const seleccionarRef = useRef(seleccionar);
  useEffect(() => {
    seleccionarRef.current = seleccionar;
  }, [seleccionar]);

  useEffect(() => {
    const actual = instancia.current;
    if (!actual || actual.mapa !== mapaActivo || !puntos.length) return;
    const { mapa, biblioteca } = actual;
    const registrados = botones.current;
    const marcadores: Marcador[] = [];
    const [primero] = puntos;
    const suroeste: Coordenada = [primero.longitud, primero.latitud];
    const noreste: Coordenada = [...suroeste];
    for (const punto of puntos) {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = estilos.marcador;
      boton.textContent = String(punto.numero);
      boton.setAttribute("aria-label", `Seleccionar bolsín ${punto.numero}`);
      boton.onclick = () => seleccionarRef.current(punto.id);
      registrados.set(punto.id, boton);
      marcadores.push(
        new biblioteca.Marker({ element: boton })
          .setLngLat([punto.longitud, punto.latitud])
          .addTo(mapa),
      );
      suroeste[0] = Math.min(suroeste[0], punto.longitud);
      suroeste[1] = Math.min(suroeste[1], punto.latitud);
      noreste[0] = Math.max(noreste[0], punto.longitud);
      noreste[1] = Math.max(noreste[1], punto.latitud);
    }
    encuadrar.current = () =>
      mapa.fitBounds([suroeste, noreste], {
        padding: { top: 80, right: 56, bottom: 56, left: 56 },
        maxZoom: 12,
        duration: 0,
      });
    encuadrar.current();
    const limpiar = () => {
      if (limpiarMarcadores.current !== limpiar) return;
      limpiarMarcadores.current = null;
      encuadrar.current = null;
      for (const boton of registrados.values()) boton.onclick = null;
      registrados.clear();
      for (const marcador of marcadores) marcador.remove();
    };
    limpiarMarcadores.current = limpiar;
    return limpiar;
  }, [mapaActivo, puntos]);

  useEffect(() => {
    for (const [id, boton] of botones.current) {
      boton.setAttribute("aria-pressed", String(id === seleccionado));
    }
  }, [mapaActivo, puntos, seleccionado]);

  return (
    <section className={estilos.mapa} aria-label="Mapa de ubicaciones GPS">
      <link
        rel="stylesheet"
        href={cdn + "maplibre-gl.css"}
        precedence="default"
      />
      <Script
        src={cdn + "maplibre-gl.js"}
        onReady={() => {
          if (contenedor.current) setListo(true);
        }}
        onError={() => {
          if (contenedor.current) setFallo(true);
        }}
      />
      <div className={estilos.superficieMapa} ref={contenedor} />
      {fallo ? (
        <p className={estilos.mensajeMapa} role="status">
          El mapa no está disponible. Podés seleccionar un bolsín desde la
          lista.
        </p>
      ) : (
        <Button
          size="sm"
          className={estilos.reencuadrar}
          disabled={!mapaActivo}
          onClick={() => encuadrar.current?.()}
        >
          Ver todos los puntos
        </Button>
      )}
    </section>
  );
}
