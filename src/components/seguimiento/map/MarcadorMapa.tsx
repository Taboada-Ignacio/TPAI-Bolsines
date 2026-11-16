"use client";

import { Marker, type Map } from "maplibre-gl";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface MarcadorMapaProps {
  map: Map;
  position: { lat: number; lng: number };
  zIndex: number;
  children: ReactNode;
}

export function MarcadorMapa({ map, position, zIndex, children }: MarcadorMapaProps) {
  const [elemento] = useState(() => document.createElement("div"));
  const [marker] = useState(() => new Marker({ element: elemento, anchor: "bottom" }));

  useEffect(() => {
    marker.setLngLat([position.lng, position.lat]);
    elemento.style.zIndex = String(zIndex);
  }, [elemento, marker, position.lat, position.lng, zIndex]);

  useEffect(() => {
    marker.addTo(map);
    return () => { marker.remove(); };
  }, [map, marker]);

  return createPortal(children, elemento);
}
