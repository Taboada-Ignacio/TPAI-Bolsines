"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLoginFlow } from "@/hooks/useLoginFlow";
import { type BolsinSceneHandle } from "./bolsin3d/BolsinScene";
import { useBolsinChoreography } from "./bolsin3d/useBolsinChoreography";
import { EnterTransition } from "./EnterTransition";
import { LoginForm } from "./LoginForm";
import { LoginStage } from "./LoginStage";

export function LoginView() {
  const router = useRouter();
  const containerRef = useRef<HTMLElement>(null);
  const [sceneHandle, setSceneHandle] = useState<BolsinSceneHandle | null>(
    null,
  );
  const [fieldFocused, setFieldFocused] = useState(false);

  const {
    state,
    usuario,
    contrasena,
    setUsuario,
    setContrasena,
    submit,
    usuarioRef,
    contrasenaRef,
  } = useLoginFlow();

  useEffect(() => {
    router.prefetch("/inicio");
  }, [router]);

  const handleEnterComplete = useCallback(() => {
    router.replace("/inicio");
  }, [router]);

  const { reducedMotion } = useBolsinChoreography({
    containerRef,
    sceneHandle,
    loginState: state,
    fieldFocused,
    onEnterComplete: handleEnterComplete,
  });

  return (
    <main
      ref={containerRef}
      id="contenido"
      className="@container relative min-h-dvh w-full overflow-x-hidden bg-[var(--login-page-bg)] lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      {/* Visual Stage (en teclado virtual <560px de alto pasa a 24dvh) */}
      <section aria-hidden="true" className="relative lg:p-4">
        <LoginStage
          reducedMotion={reducedMotion}
          isEntering={state.status === "entering"}
          onSceneReady={setSceneHandle}
          className="h-[var(--login-stage-h-mobile)] [@media(max-height:560px)_and_(max-width:1023px)]:h-[24dvh] [@media(max-height:560px)_and_(max-width:1023px)]:min-h-[140px] lg:h-[calc(100dvh-32px)] lg:rounded-card"
        />
      </section>

      {/* Form Column */}
      <section
        aria-labelledby="login-title"
        className="relative z-10 -mt-5 flex flex-col justify-center rounded-t-[24px] border-t border-edge bg-[var(--login-page-bg)] px-5 pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_32px_-16px_rgb(11_18_32/0.18)] lg:mt-0 lg:rounded-none lg:border-t-0 lg:bg-transparent lg:px-12 lg:py-12 lg:shadow-none"
      >
        <div
          data-login-form-col
          className="mx-auto w-full max-w-[var(--login-form-w)]"
        >
          <div className="mb-7">
            <h1
              id="login-title"
              data-login-title-line
              className="font-display text-[clamp(2.25rem,4vw,3.1rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink"
            >
              Iniciar sesión
            </h1>
          </div>

          <LoginForm
            state={state}
            usuario={usuario}
            contrasena={contrasena}
            onUsuarioChange={setUsuario}
            onContrasenaChange={setContrasena}
            onSubmit={submit}
            onFieldFocusChange={setFieldFocused}
            usuarioRef={usuarioRef}
            contrasenaRef={contrasenaRef}
          />
        </div>
      </section>

      <EnterTransition />
    </main>
  );
}
