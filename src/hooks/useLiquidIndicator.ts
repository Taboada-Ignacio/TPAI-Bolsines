"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type RefObject } from "react";

gsap.registerPlugin(useGSAP);

export interface UseLiquidIndicatorOptions {
  axis: "x" | "y";
  activeId: string | undefined;
  containerRef: RefObject<HTMLElement | null>;
  blobRef: RefObject<HTMLElement | null>;
  itemRefs: RefObject<Record<string, HTMLElement | null>>;
  paddingOffset?: number;
}

export function useLiquidIndicator({
  axis,
  activeId,
  containerRef,
  blobRef,
  itemRefs,
  paddingOffset = 0,
}: UseLiquidIndicatorOptions) {
  const isFirstPlacement = useRef(true);
  const lastActiveId = useRef<string | undefined>(undefined);
  const hasVisibleBlob = useRef(false);

  function placeInstant() {
    const blob = blobRef.current;
    const item = activeId ? itemRefs.current[activeId] : null;
    if (!blob) return;
    if (!item) {
      gsap.set(blob, { autoAlpha: 0 });
      hasVisibleBlob.current = false;
      return;
    }

    if (axis === "y") {
      gsap.set(blob, { autoAlpha: 1, y: item.offsetTop, scaleX: 1, scaleY: 1 });
    } else {
      gsap.set(blob, {
        autoAlpha: 1,
        x: item.offsetLeft - paddingOffset,
        width: item.offsetWidth,
        scaleX: 1,
        scaleY: 1,
      });
    }
    hasVisibleBlob.current = true;
  }

  useGSAP(
    () => {
      const blob = blobRef.current;
      const item = activeId ? itemRefs.current[activeId] : null;
      if (!blob) return;
      if (!item) {
        gsap.set(blob, { autoAlpha: 0 });
        hasVisibleBlob.current = false;
        lastActiveId.current = activeId;
        return;
      }

      const shouldAnimate =
        !isFirstPlacement.current &&
        hasVisibleBlob.current &&
        lastActiveId.current !== activeId;
      isFirstPlacement.current = false;
      lastActiveId.current = activeId;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const isReduced = Boolean(context.conditions?.reduce);

          if (!shouldAnimate || isReduced) {
            placeInstant();
            return;
          }

          gsap.set(blob, { autoAlpha: 1 });
          hasVisibleBlob.current = true;

          if (axis === "y") {
            gsap.to(blob, {
              y: item.offsetTop,
              duration: 0.42,
              ease: "expo.out",
              overwrite: "auto",
            });
            gsap.to(blob, {
              keyframes: [
                {
                  scaleY: 1.28,
                  scaleX: 0.94,
                  duration: 0.42 * 0.35,
                  ease: "power2.out",
                },
                {
                  scaleY: 1,
                  scaleX: 1,
                  duration: 0.42 * 0.65,
                  ease: "expo.out",
                },
              ],
              overwrite: false,
            });
          } else {
            gsap.to(blob, {
              x: item.offsetLeft - paddingOffset,
              width: item.offsetWidth,
              duration: 0.42,
              ease: "expo.out",
              overwrite: "auto",
            });
            gsap.to(blob, {
              keyframes: [
                {
                  scaleX: 1.14,
                  scaleY: 0.9,
                  duration: 0.42 * 0.35,
                  ease: "power2.out",
                },
                {
                  scaleX: 1,
                  scaleY: 1,
                  duration: 0.42 * 0.65,
                  ease: "expo.out",
                },
              ],
              overwrite: false,
            });
          }
        },
      );
    },
    { scope: containerRef, dependencies: [activeId, axis, paddingOffset] },
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      placeInstant();
    });
    ro.observe(container);

    let active = true;
    document.fonts?.ready.then(() => {
      if (active) placeInstant();
    });

    return () => {
      active = false;
      ro.disconnect();
    };
  });
}
