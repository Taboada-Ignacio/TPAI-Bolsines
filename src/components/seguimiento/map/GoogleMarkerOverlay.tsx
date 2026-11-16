"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { LatLngLiteral } from "@/lib/seguimiento/rutas-envio";

export interface GoogleMarkerOverlayProps {
  map: google.maps.Map | null;
  position: LatLngLiteral;
  zIndex?: number;
  children: ReactNode;
}

interface OverlayInstancia {
  overlay: google.maps.OverlayView;
  actualizarPosicion: (pos: LatLngLiteral) => void;
  actualizarZIndex: (z: number) => void;
}

/**
 * Puente React Portal sobre `google.maps.OverlayView` (`floatPane`).
 * Funciona con y sin `mapId` / Billing, permitiendo elevar `zIndex` en hover/focus
 * para que el abanico de bolsines nunca quede recortado.
 */
export function GoogleMarkerOverlay({
  map,
  position,
  zIndex = 10,
  children,
}: GoogleMarkerOverlayProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const instanciaRef = useRef<OverlayInstancia | null>(null);
  const positionRef = useRef<LatLngLiteral>(position);
  const zIndexRef = useRef<number>(zIndex);

  useEffect(() => {
    positionRef.current = position;
    instanciaRef.current?.actualizarPosicion(position);
  }, [position]);

  useEffect(() => {
    zIndexRef.current = zIndex;
    instanciaRef.current?.actualizarZIndex(zIndex);
  }, [zIndex]);

  useEffect(() => {
    if (!map || typeof google === "undefined" || !google.maps?.OverlayView) {
      return;
    }

    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.transform = "translate(-50%, -50%)";
    el.style.zIndex = String(zIndexRef.current);
    el.style.pointerEvents = "auto";
    el.setAttribute("data-map-marker", "");

    class ReactPortalOverlay extends google.maps.OverlayView {
      private currentPos: LatLngLiteral;

      constructor(initialPos: LatLngLiteral) {
        super();
        this.currentPos = initialPos;
      }

      onAdd() {
        const panes = this.getPanes();
        panes?.floatPane.appendChild(el);
        if (
          typeof google.maps.OverlayView.preventMapHitsFrom === "function"
        ) {
          google.maps.OverlayView.preventMapHitsFrom(el);
        }
        setContainer(el);
      }

      draw() {
        const projection = this.getProjection();
        if (!projection) return;
        const point = projection.fromLatLngToDivPixel(
          new google.maps.LatLng(this.currentPos.lat, this.currentPos.lng),
        );
        if (!point) return;
        el.style.left = `${Math.round(point.x)}px`;
        el.style.top = `${Math.round(point.y)}px`;
      }

      onRemove() {
        setContainer(null);
        el.remove();
      }

      setPosition(nextPos: LatLngLiteral) {
        this.currentPos = nextPos;
        this.draw();
      }
    }

    const overlay = new ReactPortalOverlay(positionRef.current);
    overlay.setMap(map);

    instanciaRef.current = {
      overlay,
      actualizarPosicion: (pos) => overlay.setPosition(pos),
      actualizarZIndex: (z) => {
        el.style.zIndex = String(z);
      },
    };

    return () => {
      instanciaRef.current = null;
      overlay.setMap(null);
    };
  }, [map]);

  if (!container) return null;

  return createPortal(children, container);
}
