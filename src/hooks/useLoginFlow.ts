"use client";

import { useCallback, useReducer, useRef, useState } from "react";
import {
  authErrorSchema,
  loginRequestSchema,
  loginResponseSchema,
  type LoginResponse,
} from "@/dtos/auth.dto";

export type LoginFieldErrors = {
  usuario?: string;
  contrasena?: string;
};

export type LoginState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "invalid"; campos: LoginFieldErrors }
  | { status: "rejected" }
  | { status: "unreachable" }
  | { status: "entering"; sesion: LoginResponse };

export type LoginAction =
  | { type: "SUBMIT" }
  | { type: "INVALID"; campos: LoginFieldErrors }
  | { type: "REJECTED" }
  | { type: "UNREACHABLE" }
  | { type: "SUCCESS"; sesion: LoginResponse }
  | { type: "CLEAR_ERROR" };

export function loginFlowReducer(
  state: LoginState,
  action: LoginAction,
): LoginState {
  switch (action.type) {
    case "SUBMIT":
      return { status: "submitting" };
    case "INVALID":
      return { status: "invalid", campos: action.campos };
    case "REJECTED":
      return { status: "rejected" };
    case "UNREACHABLE":
      return { status: "unreachable" };
    case "SUCCESS":
      return { status: "entering", sesion: action.sesion };
    case "CLEAR_ERROR":
      if (
        state.status === "invalid" ||
        state.status === "rejected" ||
        state.status === "unreachable"
      ) {
        return { status: "idle" };
      }
      return state;
    default:
      return state;
  }
}

export function useLoginFlow() {
  const [state, dispatch] = useReducer(loginFlowReducer, { status: "idle" });
  const [usuario, setUsuarioValue] = useState("");
  const [contrasena, setContrasenaValue] = useState("");

  const usuarioRef = useRef<HTMLInputElement | null>(null);
  const contrasenaRef = useRef<HTMLInputElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const setUsuario = useCallback((value: string) => {
    setUsuarioValue(value);
    dispatch({ type: "CLEAR_ERROR" });
  }, []);

  const setContrasena = useCallback((value: string) => {
    setContrasenaValue(value);
    dispatch({ type: "CLEAR_ERROR" });
  }, []);

  const submit = useCallback(async () => {
    if (state.status === "entering") return;

    const parsed = loginRequestSchema.safeParse({ usuario, contrasena });
    if (!parsed.success) {
      const campos: LoginFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key === "usuario" && !campos.usuario) {
          campos.usuario = issue.message;
        }
        if (key === "contrasena" && !campos.contrasena) {
          campos.contrasena = issue.message;
        }
      }
      dispatch({ type: "INVALID", campos });

      if (campos.usuario) {
        usuarioRef.current?.focus();
      } else if (campos.contrasena) {
        contrasenaRef.current?.focus();
      }
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    dispatch({ type: "SUBMIT" });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });

      if (response.ok) {
        const json: unknown = await response.json();
        const sessionParsed = loginResponseSchema.safeParse(json);
        if (!sessionParsed.success) {
          dispatch({ type: "UNREACHABLE" });
          return;
        }
        dispatch({ type: "SUCCESS", sesion: sessionParsed.data });
        return;
      }

      if (response.status === 401 || response.status === 400) {
        let isInvalidCredentials = response.status === 401;
        try {
          const errJson: unknown = await response.json();
          const errParsed = authErrorSchema.safeParse(errJson);
          if (
            errParsed.success &&
            errParsed.data.codigo === "CREDENCIALES_INVALIDAS"
          ) {
            isInvalidCredentials = true;
          }
        } catch {
          // ignore parse error
        }

        if (isInvalidCredentials) {
          dispatch({ type: "REJECTED" });
          setContrasenaValue("");
          requestAnimationFrame(() => {
            contrasenaRef.current?.focus();
          });
          return;
        }
      }

      dispatch({ type: "UNREACHABLE" });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      dispatch({ type: "UNREACHABLE" });
    }
  }, [contrasena, state.status, usuario]);

  return {
    state,
    usuario,
    contrasena,
    setUsuario,
    setContrasena,
    submit,
    usuarioRef,
    contrasenaRef,
  };
}
