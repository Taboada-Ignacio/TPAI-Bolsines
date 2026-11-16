"use client";

import dynamic from "next/dynamic";
import type { MapaLibreSeguimientoProps } from "./MapaLibreSeguimiento";

export type MapaSeguimientoProps = MapaLibreSeguimientoProps;

const MapaLibreSeguimientoDinamico = dynamic(
  () =>
    import("./MapaLibreSeguimiento").then(
      (mod) => mod.MapaLibreSeguimiento,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        role="region"
        aria-label="Mapa de seguimiento de bolsines"
        className="h-full w-full bg-canvas"
      />
    ),
  },
);

/** Adaptador público estable hacia MapaLibreSeguimiento (carga solo en cliente). */
export function MapaSeguimiento(props: MapaSeguimientoProps) {
  return <MapaLibreSeguimientoDinamico {...props} />;
}
