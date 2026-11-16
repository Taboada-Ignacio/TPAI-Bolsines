"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useSyncExternalStore } from "react";
import type * as THREE from "three";
import { BolsinProcedural } from "@/components/login/bolsin3d/BolsinProcedural";
import { cn } from "@/lib/cn";
import { isWebGLSupported } from "@/lib/webgl";

const emptySubscribe = () => () => {};

const BASE_ROT_X = 0.24;
const BASE_ROT_Y = 0.55;
const BASE_ROT_Z = -0.06;

function MiniBolsinMesh({
  pointerRef,
}: {
  pointerRef: React.RefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targetY = reduced
      ? BASE_ROT_Y
      : BASE_ROT_Y + pointerRef.current.x * 0.55;
    const targetX = reduced
      ? BASE_ROT_X
      : BASE_ROT_X - pointerRef.current.y * 0.35;

    const alpha = reduced ? 1 : 1 - Math.exp(-delta * 10);
    group.rotation.y += (targetY - group.rotation.y) * alpha;
    group.rotation.x += (targetX - group.rotation.x) * alpha;
  });

  return (
    <group
      ref={groupRef}
      rotation={[BASE_ROT_X, BASE_ROT_Y, BASE_ROT_Z]}
      scale={0.92}
      position={[0, -0.04, 0]}
    >
      <BolsinProcedural onReady={() => {}} />
    </group>
  );
}

export interface BolsinMini3DProps {
  className?: string;
}

export function BolsinMini3D({ className }: BolsinMini3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const canUseWebGL = useSyncExternalStore(
    emptySubscribe,
    () => isWebGLSupported(),
    () => false,
  );

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = Math.max(-1, Math.min(1, (event.clientX - cx) / 260));
      const ny = Math.max(-1, Math.min(1, -(event.clientY - cy) / 260));
      pointerRef.current.x = nx;
      pointerRef.current.y = ny;
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  if (!canUseWebGL) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "flex-none size-[42px] rounded-[13px] bg-brand-cobalt/15 border border-edge grid place-items-center",
          className,
        )}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <path d="M6 7h12l1 13H5L6 7Z" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
        </svg>
      </span>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "flex-none size-[42px] rounded-[13px] overflow-hidden",
        className,
      )}
    >
      <Canvas
        camera={{ position: [0, 0.22, 2.35], fov: 36 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.05} />
        <directionalLight position={[2.5, 3.5, 3]} intensity={1.9} />
        <directionalLight position={[-2, 1.5, -2]} intensity={0.8} />
        <Environment resolution={64}>
          <Lightformer
            form="rect"
            intensity={2}
            position={[2, 3, 2]}
            scale={[4, 4, 1]}
          />
          <Lightformer
            form="rect"
            intensity={1.1}
            position={[-3, 1, -2]}
            scale={[4, 4, 1]}
          />
        </Environment>
        <MiniBolsinMesh pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
}
