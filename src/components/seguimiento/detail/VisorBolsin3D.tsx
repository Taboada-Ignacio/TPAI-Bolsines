"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Package } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { BolsinProcedural } from "@/components/login/bolsin3d/BolsinProcedural";
import { cn } from "@/lib/cn";

export interface VisorBolsin3DProps {
  nroBolsin: number;
  sinCobertura: boolean;
  className?: string;
}

function soportaWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
}

function leerTokenCss(nombre: string, respaldo: string): string {
  if (typeof document === "undefined") return respaldo;
  const valor = getComputedStyle(document.documentElement)
    .getPropertyValue(nombre)
    .trim();
  return valor || respaldo;
}

function EscenaBolsin({
  sinCobertura,
  haloColor,
}: {
  sinCobertura: boolean;
  haloColor: string;
}) {
  const { invalidate } = useThree();

  const handleReady = useCallback(() => {
    invalidate();
  }, [invalidate]);

  useEffect(() => {
    invalidate();
  }, [haloColor, invalidate, sinCobertura]);

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[2.4, 3.2, 2.2]} intensity={1.4} />
      <directionalLight position={[-2, 1.5, -1.8]} intensity={0.45} />

      <group position={[0, -0.04, 0]} rotation={[0.12, -0.45, 0]}>
        <BolsinProcedural onReady={handleReady} />
      </group>

      {/* Halo de estado Volt Lime (vivo) o Ámbar (A3) */}
      <mesh position={[0, -0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.56, 0.68, 48]} />
        <meshBasicMaterial
          color={haloColor}
          transparent
          opacity={sinCobertura ? 0.72 : 0.88}
        />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </>
  );
}

/**
 * Visor 3D procedural acotado al panel de detalle, con frameloop="demand"
 * para minimizar consumo de GPU junto al mapa MapLibre.
 */
export function VisorBolsin3D({
  nroBolsin,
  sinCobertura,
  className,
}: VisorBolsin3DProps) {
  const [webglOk, setWebglOk] = useState<boolean>(() => soportaWebGL());
  const haloColor = sinCobertura
    ? leerTokenCss("--amber", "#f59e0b")
    : leerTokenCss("--lime", "#d1ff42");

  return (
    <div
      aria-label={`Vista 3D del bolsín #${nroBolsin}`}
      className={cn(
        "relative h-44 w-full shrink-0 overflow-hidden rounded-xl border border-hair bg-raised",
        className,
      )}
    >
      {webglOk ? (
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [0.25, 0.5, 1.75], fov: 36 }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", () => {
              setWebglOk(false);
            });
          }}
        >
          <EscenaBolsin sinCobertura={sinCobertura} haloColor={haloColor} />
        </Canvas>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
          <div
            className={cn(
              "grid size-12 place-items-center rounded-2xl border",
              sinCobertura
                ? "border-amber/50 bg-amber/15 text-amber-ink"
                : "border-lime-edge bg-lime/25 text-fg",
            )}
          >
            <Package aria-hidden="true" className="size-6" />
          </div>
          <span className="font-mono text-[11px] font-medium">
            Bolsín #{nroBolsin} · Arrastrá en navegadores con WebGL
          </span>
        </div>
      )}

      <span className="pointer-events-none absolute bottom-2 right-2.5 rounded-full border border-edge bg-glass px-2 py-0.5 font-mono text-[10px] font-medium text-muted backdrop-blur-md">
        3D · Arrastrá para girar
      </span>
    </div>
  );
}
