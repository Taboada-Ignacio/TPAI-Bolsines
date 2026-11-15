"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  memo,
  useCallback,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import { isWebGLSupported } from "@/lib/webgl";
import type { BolsinSceneHandle } from "./bolsin3d/BolsinScene";

const BolsinScene = dynamic(
  () => import("./bolsin3d/BolsinScene").then((m) => m.BolsinScene),
  { ssr: false },
);

export interface LoginStageProps {
  className?: string;
  reducedMotion?: boolean;
  isEntering?: boolean;
  onSceneReady?: (handle: BolsinSceneHandle) => void;
}

const emptySubscribe = () => () => {};

export const LoginStage = memo(function LoginStage({
  className,
  reducedMotion = false,
  isEntering = false,
  onSceneReady,
}: LoginStageProps) {
  const canUseWebGL = useSyncExternalStore(
    emptySubscribe,
    () => isWebGLSupported(),
    () => false,
  );
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [posterMissing, setPosterMissing] = useState(false);

  const handleFirstFrame = useCallback(() => {
    setFirstFrameReady(true);
  }, []);

  return (
    <div
      data-login-stage
      className={cn(
        "relative w-full overflow-hidden bg-[var(--login-stage-bg)]",
        "flex items-center justify-center",
        className,
      )}
    >
      {/* Fondo técnico sutil + grano */}
      <div
        data-login-stage-hud
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-200",
          isEntering && "opacity-0",
        )}
      >
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(11 18 32 / 0.14) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "var(--grain-svg)" }}
        />
      </div>

      {/* Respaldo estático solo cuando WebGL no está disponible */}
      {!canUseWebGL && !posterMissing ? (
        <Image
          src="/models/bolsin-poster.webp"
          alt=""
          fill
          unoptimized
          sizes="(min-width: 1024px) 45vw, 100vw"
          onError={() => setPosterMissing(true)}
          className="object-contain p-6 select-none pointer-events-none"
        />
      ) : null}

      {/* Escena 3D siempre montada cuando hay WebGL */}
      {canUseWebGL ? (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            firstFrameReady ? "opacity-100" : "opacity-0",
          )}
        >
          <BolsinScene
            reducedMotion={reducedMotion}
            isEntering={isEntering}
            onSceneReady={onSceneReady}
            onFirstFrame={handleFirstFrame}
          />
        </div>
      ) : null}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] border border-ink/10 transition-opacity duration-200",
          isEntering && "opacity-0",
        )}
      />
    </div>
  );
});
