"use client";

import dynamic from "next/dynamic";
import type { MapaGoogleSeguimientoProps } from "./MapaGoogleSeguimiento";

export type MapaSeguimientoProps = MapaGoogleSeguimientoProps;

const MapaGoogleSeguimientoDinamico = dynamic(
  () =>
    import("./MapaGoogleSeguimiento").then(
      (mod) => mod.MapaGoogleSeguimiento,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        role="region"
        aria-label="Mapa de seguimiento de bolsines en Google Maps"
        className="h-full w-full bg-canvas"
      />
    ),
  },
);

/** Adaptador público estable hacia MapaGoogleSeguimiento (carga solo en cliente). */
export function MapaSeguimiento(props: MapaSeguimientoProps) {
  return <MapaGoogleSeguimientoDinamico {...props} />;
}
