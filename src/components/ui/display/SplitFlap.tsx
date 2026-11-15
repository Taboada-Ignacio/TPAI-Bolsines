"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type SplitFlapSize = "xs" | "sm" | "md" | "lg";

export interface SplitFlapProps {
  text: string;
  size?: SplitFlapSize;
  flipTrigger?: string | number;
  variant?: "tiles" | "inline";
  className?: string;
}

const SIZE_CLASSES: Record<SplitFlapSize, string> = {
  xs: "w-[19px] h-[28px] text-[12px] rounded-[4px]",
  sm: "w-[23px] h-[34px] text-[15px] rounded-[5px]",
  md: "w-[30px] h-[44px] text-[19px] rounded-[6px]",
  lg: "h-[1.5em] w-[1.05em] text-[clamp(1.4rem,2.6vw,2.2rem)] rounded-[6px]",
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function SplitFlap({
  text,
  size = "sm",
  flipTrigger,
  variant = "tiles",
  className,
}: SplitFlapProps) {
  const chars = text
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split("");

  return (
    <span
      className={cn(
        "inline-flex select-none",
        variant === "tiles" ? "gap-[3px]" : "font-mono",
        className,
      )}
      aria-label={text}
    >
      {chars.map((char, index) => (
        <SplitFlapChar
          key={`${index}-${char}`}
          char={char}
          index={index}
          size={size}
          variant={variant}
          flipTrigger={flipTrigger}
        />
      ))}
    </span>
  );
}

function SplitFlapChar({
  char,
  index,
  size,
  variant,
  flipTrigger,
}: {
  char: string;
  index: number;
  size: SplitFlapSize;
  variant: "tiles" | "inline";
  flipTrigger?: string | number;
}) {
  const [display, setDisplay] = useState<{ char: string; flipping: boolean }>({
    char,
    flipping: false,
  });

  useEffect(() => {
    if (char === " ") {
      return;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let step = 0;
    const maxSteps = 5 + index * 2;

    const timer = window.setInterval(() => {
      step += 1;
      if (step >= maxSteps) {
        setDisplay({ char, flipping: false });
        window.clearInterval(timer);
      } else {
        const nextChar =
          ALPHABET[Math.floor(Math.random() * ALPHABET.length)] ?? char;
        setDisplay({ char: nextChar, flipping: true });
      }
    }, 45);

    return () => {
      window.clearInterval(timer);
    };
  }, [char, index, flipTrigger]);

  if (variant === "inline") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-block transition-colors duration-75",
          display.flipping ? "text-lime" : "text-current",
        )}
      >
        {display.char === " " ? "\u00A0" : display.char}
      </span>
    );
  }

  const sizeClass = SIZE_CLASSES[size];

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid place-items-center overflow-hidden bg-mech font-mono font-semibold",
        sizeClass,
      )}
    >
      <span
        className={cn(
          "transition-colors duration-75",
          display.flipping ? "text-lime" : "text-mech-fg",
        )}
      >
        {display.char === " " ? "\u00A0" : display.char}
      </span>
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/60" />
    </span>
  );
}
