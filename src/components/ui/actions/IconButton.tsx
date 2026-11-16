import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  children: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, children, type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "size-10 rounded-[13px] grid place-items-center text-fg cursor-pointer",
          "transition-[background-color,transform] duration-100",
          "hover:bg-hover active:scale-90",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          "disabled:opacity-50 disabled:pointer-events-none",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
