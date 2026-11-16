"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

export type SideSheetSide = "right" | "left";
export type SideSheetSize = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<SideSheetSize, string> = {
  sm: "max-w-[380px]",
  md: "max-w-[440px]",
  lg: "max-w-[540px]",
};

export interface SideSheetProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  side?: SideSheetSide;
  size?: SideSheetSize;
  className?: string;
  panelRef?: RefObject<HTMLDivElement | null>;
}

/** Panel modal lateral en estilo isla con entrada/salida GSAP para escritorio. */
export function SideSheet({
  open,
  onClose,
  labelledBy,
  children,
  side = "right",
  size = "md",
  className,
  panelRef,
}: SideSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const internalPanelRef = useRef<HTMLDivElement>(null);
  const resolvedPanelRef = panelRef ?? internalPanelRef;
  const offscreenX = side === "left" ? -100 : 100;

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
              gsap.set(panel, { xPercent: 0, autoAlpha: 1 });
              return;
            }

            gsap.fromTo(
              panel,
              { xPercent: offscreenX, autoAlpha: 0.6 },
              {
                xPercent: 0,
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
              xPercent: offscreenX,
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
    { scope: dialogRef, dependencies: [open, offscreenX] },
  );

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
        "open:flex open:items-stretch",
        side === "left" ? "open:justify-start" : "open:justify-end",
      )}
    >
      <div
        ref={resolvedPanelRef}
        className={cn(
          "w-full m-3 rounded-[var(--isle-r)] border border-edge bg-surface text-fg p-6 overflow-y-auto overscroll-contain",
          SIZE_CLASSES[size],
          className,
        )}
      >
        {children}
      </div>
    </dialog>
  );
}
