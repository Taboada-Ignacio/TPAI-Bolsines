import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface PageBodyProps {
  variant?: "padded" | "bleed";
  children: ReactNode;
  className?: string;
}

export function PageBody({
  variant = "padded",
  children,
  className,
}: PageBodyProps) {
  if (variant === "bleed") {
    return (
      <main
        id="contenido"
        tabIndex={-1}
        className={cn("fixed inset-0 overflow-hidden outline-none", className)}
      >
        {children}
      </main>
    );
  }

  return (
    <main
      id="contenido"
      tabIndex={-1}
      className={cn(
        "min-h-dvh outline-none pt-[var(--shell-top)]",
        "pb-[max(var(--isle-gap),var(--shell-bottom))] pl-[var(--isle-gap)] pr-[var(--isle-gap)] md:pl-[var(--shell-left)]",
        "transition-[padding-left] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        className,
      )}
    >
      <div className="min-h-[calc(100dvh-var(--shell-top)-max(var(--isle-gap),var(--shell-bottom)))] w-full rounded-[var(--isle-r)] border border-edge bg-surface/90 p-5 sm:p-7 md:p-8 backdrop-blur-sm">
        <div className="max-w-[940px]">{children}</div>
      </div>
    </main>
  );
}
