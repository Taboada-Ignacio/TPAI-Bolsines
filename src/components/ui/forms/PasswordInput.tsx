"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Input, type InputProps } from "./Input";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  id: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput({ id, className, disabled, readOnly, ...props }, ref) {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          id={id}
          type={visible ? "text" : "password"}
          disabled={disabled}
          readOnly={readOnly}
          className={cn("pr-11", className)}
          {...props}
        />
        <button
          type="button"
          aria-pressed={visible}
          aria-controls={id}
          aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
          disabled={disabled}
          onClick={() => setVisible((prev) => !prev)}
          className={cn(
            "absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex size-8 items-center justify-center rounded-full text-muted",
            "hover:text-ink hover:bg-ink/5 transition-colors duration-[var(--dur-instant)]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt",
            "disabled:opacity-40 disabled:pointer-events-none cursor-pointer",
          )}
        >
          {visible ? (
            <EyeOff className="size-[18px]" aria-hidden="true" />
          ) : (
            <Eye className="size-[18px]" aria-hidden="true" />
          )}
        </button>
      </div>
    );
  },
);
