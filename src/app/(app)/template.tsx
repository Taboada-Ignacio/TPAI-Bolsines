"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP);

export default function AppTemplate({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            return;
          }

          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.5,
              ease: "expo.out",
              clearProps: "clipPath",
            },
          );

          const reveals = el.querySelectorAll("[data-reveal]");
          if (reveals.length > 0) {
            gsap.fromTo(
              reveals,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 0.5,
                ease: "expo.out",
                stagger: 0.1,
                delay: 0.12,
                clearProps: "clipPath",
              },
            );
          }
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} data-page-curtain="">
      {children}
    </div>
  );
}
