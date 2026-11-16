"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  panelRef?: RefObject<HTMLDivElement | null>;
}

/** Panel modal anclado al borde inferior con entrada/salida GSAP y swipe-to-dismiss táctil. */
export function BottomSheet({
  open,
  onClose,
  labelledBy,
  children,
  className,
  panelRef,
}: BottomSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const internalPanelRef = useRef<HTMLDivElement>(null);
  const resolvedPanelRef = panelRef ?? internalPanelRef;
  const touchStartY = useRef<number | null>(null);
  const dragOffsetY = useRef(0);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open]);

  useGSAP(
    () => {
      const dialog = dialogRef.current;
      const panel = resolvedPanelRef.current;
      if (!dialog || !panel) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduced = Boolean(context.conditions?.reduce);

          if (open) {
            if (!dialog.open) {
              dialog.showModal();
            }
            gsap.killTweensOf(panel);

            if (reduced) {
              gsap.set(panel, { yPercent: 0, y: 0, autoAlpha: 1 });
              return;
            }

            gsap.fromTo(
              panel,
              { yPercent: 100, y: 0, autoAlpha: 0.7 },
              {
                yPercent: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.42,
                ease: "expo.out",
                clearProps: "transform,opacity,visibility",
              },
            );
            return;
          }

          if (dialog.open) {
            gsap.killTweensOf(panel);

            if (reduced) {
              dialog.close();
              gsap.set(panel, { clearProps: "transform,opacity,visibility" });
              return;
            }

            gsap.to(panel, {
              yPercent: 100,
              autoAlpha: 0.5,
              duration: 0.24,
              ease: "power3.in",
              onComplete: () => {
                if (dialog.open) dialog.close();
                gsap.set(panel, { clearProps: "transform,opacity,visibility" });
              },
            });
          }
        },
      );
    },
    { scope: dialogRef, dependencies: [open] },
  );

  function handleTouchMove(clientY: number) {
    const panel = resolvedPanelRef.current;
    if (!panel || touchStartY.current === null) return;
    const delta = clientY - touchStartY.current;
    if (delta > 0) {
      dragOffsetY.current = delta;
      gsap.set(panel, { y: delta });
    }
  }

  function handleTouchEnd() {
    const panel = resolvedPanelRef.current;
    if (touchStartY.current === null) return;
    const dragged = dragOffsetY.current;
    touchStartY.current = null;
    dragOffsetY.current = 0;

    if (dragged > 80) {
      onClose();
      return;
    }

    if (panel && dragged > 0) {
      gsap.to(panel, {
        y: 0,
        duration: 0.28,
        ease: "expo.out",
        clearProps: "transform",
      });
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
      className={cn(
        "fixed inset-0 z-50 m-0 max-h-none max-w-none h-dvh w-dvw bg-transparent p-0",
        "backdrop:bg-brand-ink/45 backdrop:backdrop-blur-[3px]",
        "open:flex open:items-end open:justify-center",
      )}
    >
      <div
        ref={resolvedPanelRef}
        onTouchStart={(event) => {
          const panel = resolvedPanelRef.current;
          if (panel && panel.scrollTop > 0) return;
          touchStartY.current = event.touches[0]?.clientY ?? null;
          dragOffsetY.current = 0;
        }}
        onTouchMove={(event) => {
          const y = event.touches[0]?.clientY;
          if (typeof y === "number") handleTouchMove(y);
        }}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "w-full max-w-lg max-h-[88dvh] overflow-y-auto overscroll-contain",
          "rounded-t-[24px] border-t border-x border-edge bg-surface text-fg",
          "px-5 pt-3 pb-[max(24px,env(safe-area-inset-bottom))]",
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-fg/20"
        />
        {children}
      </div>
    </dialog>
  );
}
