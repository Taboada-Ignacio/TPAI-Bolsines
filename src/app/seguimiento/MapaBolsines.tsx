"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import estilos from "./seguimiento.module.css";

type Coordenada = [number, number];
type Mapa = {
  fitBounds(
    bounds: [Coordenada, Coordenada],
    options: { padding: number; maxZoom: number; duration: number },
  ): void;
  resize(): void;
  remove(): void;
  addControl(control: object, position: "top-right"): void;
};
type Marcador = {
  setLngLat(coordenada: Coordenada): Marcador;
  addTo(mapa: Mapa): Marcador;
};
type MapLibre = {
  Map: new (options: {
    container: HTMLElement;
    style: string;
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
  const encuadrar = useRef<() => void>(null);
  const botones = useRef(new Map<number, HTMLButtonElement>());
  const [listo, setListo] = useState(false);
  const [fallo, setFallo] = useState(false);

  useEffect(() => {
    const maplibre = (window as Window & { maplibregl?: MapLibre }).maplibregl;
    const nodo = contenedor.current;
    if (!listo || !nodo || puntos.length === 0) return;

    let mapa: Mapa;
    try {
      if (!maplibre) throw new Error("MapLibre no está disponible.");
      mapa = new maplibre.Map({
        container: nodo,
        style: "https://tiles.openfreemap.org/styles/bright",
        renderWorldCopies: false,
      });
    } catch {
      queueMicrotask(() => setFallo(true));
      return;
    }

    mapa.addControl(
      new maplibre.NavigationControl({ showCompass: false }),
      "top-right",
    );
    const registrados = botones.current;
    const [primero] = puntos;
    const suroeste: Coordenada = [primero.longitud, primero.latitud];
    const noreste: Coordenada = [...suroeste];
    for (const punto of puntos) {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = estilos.marcador;
      boton.textContent = String(punto.numero);
      boton.setAttribute("aria-label", `Seleccionar bolsín ${punto.numero}`);
      boton.onclick = () => seleccionar(punto.id);
      registrados.set(punto.id, boton);
      new maplibre.Marker({ element: boton })
        .setLngLat([punto.longitud, punto.latitud])
        .addTo(mapa);
      suroeste[0] = Math.min(suroeste[0], punto.longitud);
      suroeste[1] = Math.min(suroeste[1], punto.latitud);
      noreste[0] = Math.max(noreste[0], punto.longitud);
      noreste[1] = Math.max(noreste[1], punto.latitud);
    }
    encuadrar.current = () =>
      mapa.fitBounds([suroeste, noreste], {
        padding: 56,
        maxZoom: 12,
        duration: 0,
      });
    encuadrar.current();
    let ancho = nodo.clientWidth;
    let alto = nodo.clientHeight;
    const observador = new ResizeObserver(() => {
      if (ancho === nodo.clientWidth && alto === nodo.clientHeight) return;
      ancho = nodo.clientWidth;
      alto = nodo.clientHeight;
      mapa.resize();
      encuadrar.current?.();
    });
    observador.observe(nodo);
    return () => {
      observador.disconnect();
      encuadrar.current = null;
      registrados.clear();
      mapa.remove();
    };
  }, [listo, puntos, seleccionar]);

  useEffect(() => {
    for (const [id, boton] of botones.current) {
      boton.setAttribute("aria-pressed", String(id === seleccionado));
    }
  }, [listo, puntos, seleccionado]);

  return (
    <section className={estilos.mapa} aria-label="Mapa de ubicaciones GPS">
      <link
        rel="stylesheet"
        href={cdn + "maplibre-gl.css"}
        precedence="default"
      />
      <Script
        src={cdn + "maplibre-gl.js"}
        onReady={() => setListo(true)}
        onError={() => setFallo(true)}
      />
      <div className={estilos.superficieMapa} ref={contenedor} />
      {fallo ? (
        <p className={estilos.mensajeMapa} role="status">
          El mapa no está disponible. Podés seleccionar un bolsín desde la
          lista.
        </p>
      ) : (
        <button
          className={estilos.reencuadrar}
          disabled={!listo}
          onClick={() => encuadrar.current?.()}
        >
          Ver todos los puntos
        </button>
      )}
    </section>
  );
}
