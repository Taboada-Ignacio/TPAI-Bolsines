"use client";

import { AlertTriangle } from "lucide-react";
import { type FormEvent, type RefObject, useState } from "react";
import { Button } from "@/components/ui/actions/Button";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { PasswordInput } from "@/components/ui/forms/PasswordInput";
import type { LoginState } from "@/hooks/useLoginFlow";

export interface LoginFormProps {
  state: LoginState;
  usuario: string;
  contrasena: string;
  onUsuarioChange: (value: string) => void;
  onContrasenaChange: (value: string) => void;
  onSubmit: () => void;
  onFieldFocusChange?: (focused: boolean) => void;
  usuarioRef: RefObject<HTMLInputElement | null>;
  contrasenaRef: RefObject<HTMLInputElement | null>;
}

function leerErrorGoogleInicial(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const err = params.get("error");
  const email = params.get("email");
  if (!err) return null;
  if (err === "google_no_registrado") {
    return email
      ? `La cuenta ${email} no está vinculada a ningún empleado. Creá un empleado con ese email o ingresá con tu usuario.`
      : "Tu cuenta de Google no está vinculada a ningún empleado.";
  }
  if (err === "google_no_configurado") {
    return "El acceso con Google no está configurado en el servidor.";
  }
  if (err === "google_cancelado") {
    return "Se canceló el inicio de sesión con Google.";
  }
  if (err === "google_error") {
    return "No pudimos validar tu cuenta con Google. Probá de nuevo.";
  }
  return null;
}

export function LoginForm({
  state,
  usuario,
  contrasena,
  onUsuarioChange,
  onContrasenaChange,
  onSubmit,
  onFieldFocusChange,
  usuarioRef,
  contrasenaRef,
}: LoginFormProps) {
  const [googleError, setGoogleError] = useState<string | null>(
    leerErrorGoogleInicial,
  );
  const isSubmitting = state.status === "submitting";
  const isEntering = state.status === "entering";
  const isLocked = isSubmitting || isEntering;

  const usuarioError =
    state.status === "invalid" ? state.campos.usuario : undefined;
  const contrasenaError =
    state.status === "invalid" ? state.campos.contrasena : undefined;

  const generalError =
    state.status === "rejected"
      ? "Usuario o contraseña incorrectos."
      : state.status === "unreachable"
        ? "No pudimos conectar con el servidor. Probá de nuevo."
        : null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGoogleError(null);
    onSubmit();
  }

  function handleGoogleClick() {
    setGoogleError(null);
    window.location.href = "/api/auth/google";
  }

  return (
    <form
      noValidate
      aria-busy={isSubmitting || undefined}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-4" data-login-stagger>
        <button
          type="button"
          disabled={isLocked}
          onClick={handleGoogleClick}
          className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-line/70 bg-surface px-5 font-display text-[15px] font-semibold tracking-[-0.01em] text-ink shadow-[0_1px_2px_rgb(11_18_32/0.06)] transition-[transform,background-color,border-color,box-shadow] duration-[var(--dur-instant)] ease-[var(--ease-firm)] hover:bg-raised hover:border-ink/40 active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt disabled:opacity-55 disabled:pointer-events-none cursor-pointer"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-[18px] shrink-0"
          >
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
            />
          </svg>
          <span>Continuar con Google</span>
        </button>

        {googleError ? (
          <p
            role="alert"
            className="text-center text-[12.5px] font-medium text-danger-ink"
          >
            {googleError}
          </p>
        ) : null}

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-hair" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            o
          </span>
          <span className="h-px flex-1 bg-hair" />
        </div>
      </div>

      <div className="flex flex-col gap-4" data-login-stagger>
        <Field id="usuario" label="Usuario" error={usuarioError}>
          <Input
            ref={usuarioRef}
            id="usuario"
            name="usuario"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoFocus
            placeholder="bolsines.demo"
            value={usuario}
            readOnly={isLocked}
            invalid={Boolean(usuarioError)}
            aria-describedby={usuarioError ? "usuario-error" : undefined}
            className="h-12 rounded-full px-5"
            onChange={(e) => onUsuarioChange(e.target.value)}
            onFocus={() => onFieldFocusChange?.(true)}
            onBlur={() => onFieldFocusChange?.(false)}
          />
        </Field>

        <Field id="contrasena" label="Contraseña" error={contrasenaError}>
          <PasswordInput
            ref={contrasenaRef}
            id="contrasena"
            name="contrasena"
            autoComplete="current-password"
            placeholder="••••••••"
            value={contrasena}
            readOnly={isLocked}
            invalid={Boolean(contrasenaError)}
            aria-describedby={contrasenaError ? "contrasena-error" : undefined}
            className="h-12 rounded-full pl-5 pr-12"
            onChange={(e) => onContrasenaChange(e.target.value)}
            onFocus={() => onFieldFocusChange?.(true)}
            onBlur={() => onFieldFocusChange?.(false)}
          />
        </Field>
      </div>

      {generalError ? (
        <div
          role="alert"
          data-login-error
          className="flex items-start gap-2 rounded-full border border-danger/25 bg-danger/5 px-4 py-2.5 text-[13.5px] font-medium text-danger-ink"
        >
          <AlertTriangle
            className="size-4 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span>{generalError}</span>
        </div>
      ) : null}

      <div data-login-stagger>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isEntering}
          className="w-full rounded-full"
        >
          {isSubmitting ? "Ingresando…" : "Ingresar"}
        </Button>
      </div>
    </form>
  );
}
