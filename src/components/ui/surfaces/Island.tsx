import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IslandProps<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export function Island<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: IslandProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "bg-glass backdrop-blur-[16px] border border-edge transition-[background-color,border-color] duration-250",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
