"use client";

import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import type * as THREE from "three";
import * as THREE_NS from "three";
import type { BolsinNodes } from "./bolsin-nodes";
import { BolsinProcedural } from "./BolsinProcedural";

export const BOLSIN_MODEL_SOURCE: "procedural" | "glb" = "procedural";

export type BolsinSceneHandle = {
  nodes: BolsinNodes;
  camera: THREE.PerspectiveCamera;
  invalidate: () => void;
};

export interface BolsinSceneProps {
  reducedMotion?: boolean;
  isEntering?: boolean;
  onSceneReady?: (handle: BolsinSceneHandle) => void;
  onFirstFrame?: () => void;
}

function SceneRig({
  reducedMotion,
  isEntering,
  onSceneReady,
  onFirstFrame,
}: {
  reducedMotion: boolean;
  isEntering: boolean;
  onSceneReady?: (handle: BolsinSceneHandle) => void;
  onFirstFrame?: () => void;
}) {
  const { camera, invalidate, gl } = useThree();
  const nodesRef = useRef<BolsinNodes | null>(null);
  const rigGroupRef = useRef<THREE.Group>(null);
  const firstFrameFiredRef = useRef(false);
  const pointerStateRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    hovered: false,
    bolsinHovered: false,
  });
  const physicsRef = useRef({
    // Cierre: posición sobre la curva [0..0.42] y velocidad
    zipPos: 0,
    zipVel: 0,
    // Péndulo del tirador + cordón bajo gravedad (radianes)
    cordAngleZ: 0,
    cordVelZ: 0,
    cordAngleX: 0,
    cordVelX: 0,
    // Péndulo de la argolla en D bajo gravedad
    ringAngleZ: 0,
    ringVelZ: 0,
    // Velocidad previa del cuerpo para acoplar inercia
    prevRotY: 0.54,
    prevRotX: 0.14,
  });

  useEffect(() => {
    const dom = gl.domElement;

    const onWindowPointerMove = (e: PointerEvent) => {
      const rect = dom.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const nx = Math.max(
        -1.25,
        Math.min(1.25, ((e.clientX - rect.left) / rect.width) * 2 - 1),
      );
      const ny = Math.max(
        -1.1,
        Math.min(1.1, -(((e.clientY - rect.top) / rect.height) * 2 - 1)),
      );
      const dx = nx - pointerStateRef.current.x;
      const dy = ny - pointerStateRef.current.y;
      pointerStateRef.current.x = nx;
      pointerStateRef.current.y = ny;
      pointerStateRef.current.vx = Math.max(-0.35, Math.min(0.35, dx));
      pointerStateRef.current.vy = Math.max(-0.35, Math.min(0.35, dy));
      pointerStateRef.current.hovered =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // Impulso físico directo al pasar el mouse por encima del bolsín/cierre
      if (pointerStateRef.current.bolsinHovered) {
        const p = physicsRef.current;
        const speed = Math.hypot(dx, dy);
        // Rozar el cierre lo empuja hacia arriba contra la gravedad
        p.zipVel += Math.max(0, dy) * 5.2 + speed * 1.4;
        // Golpe lateral al péndulo del tirador y cordón
        p.cordVelZ += dx * 24;
        p.cordVelX += -dy * 18;
        p.ringVelZ += dx * 14;
      }
    };

    const onWindowPointerLeave = () => {
      pointerStateRef.current.x = 0;
      pointerStateRef.current.y = 0;
      pointerStateRef.current.vx = 0;
      pointerStateRef.current.vy = 0;
      pointerStateRef.current.hovered = false;
      pointerStateRef.current.bolsinHovered = false;
    };

    window.addEventListener("pointermove", onWindowPointerMove, {
      passive: true,
    });
    document.addEventListener("mouseleave", onWindowPointerLeave);
    return () => {
      window.removeEventListener("pointermove", onWindowPointerMove);
      document.removeEventListener("mouseleave", onWindowPointerLeave);
    };
  }, [gl]);

  const handleModelReady = useCallback(
    (nodes: BolsinNodes) => {
      nodesRef.current = nodes;
      if (onSceneReady) {
        onSceneReady({
          nodes,
          camera: camera as THREE.PerspectiveCamera,
          invalidate,
        });
      }
      invalidate();
    },
    [camera, invalidate, onSceneReady],
  );

  useFrame((_, delta) => {
    if (!firstFrameFiredRef.current && nodesRef.current) {
      firstFrameFiredRef.current = true;
      onFirstFrame?.();
      if (process.env.NODE_ENV === "development") {
        // Presupuesto de escena en dev: <= 60 draw calls, <= 30k triángulos
        const info = gl.info.render;
        if (info.calls > 60 || info.triangles > 30000) {
          console.warn(
            `[BolsinScene] Presupuesto excedido: ${info.calls} draw calls, ${info.triangles} triángulos`,
          );
        }
      }
    }

    if (!reducedMotion && !isEntering && rigGroupRef.current) {
      const { x, y, hovered } = pointerStateRef.current;

      const intensity = hovered ? 1.25 : 0.75;
      const targetRotY = 0.54 + x * 0.36 * intensity;
      const targetRotX = 0.14 - y * 0.22 * intensity;
      const targetRotZ = -x * 0.07 * intensity;
      const targetScale = hovered ? 1.05 : 1.0;
      const targetPosZ = hovered ? 0.22 : 0.0;

      const speed = 7.5;
      const nextRotY = THREE_NS.MathUtils.damp(
        rigGroupRef.current.rotation.y,
        targetRotY,
        speed,
        delta,
      );
      const nextRotX = THREE_NS.MathUtils.damp(
        rigGroupRef.current.rotation.x,
        targetRotX,
        speed,
        delta,
      );
      const nextRotZ = THREE_NS.MathUtils.damp(
        rigGroupRef.current.rotation.z,
        targetRotZ,
        speed,
        delta,
      );
      const nextPosZ = THREE_NS.MathUtils.damp(
        rigGroupRef.current.position.z,
        targetPosZ,
        speed,
        delta,
      );
      const nextScale = THREE_NS.MathUtils.damp(
        rigGroupRef.current.scale.x,
        targetScale,
        speed,
        delta,
      );

      rigGroupRef.current.rotation.y = nextRotY;
      rigGroupRef.current.rotation.x = nextRotX;
      rigGroupRef.current.rotation.z = nextRotZ;
      rigGroupRef.current.position.z = nextPosZ;
      rigGroupRef.current.scale.setScalar(nextScale);

      if (
        Math.abs(targetRotY - nextRotY) > 0.0005 ||
        Math.abs(targetRotX - nextRotX) > 0.0005 ||
        Math.abs(targetScale - nextScale) > 0.0005
      ) {
        invalidate();
      }

      // Simulación física con gravedad real para el cierre, el cordón y la argolla
      if (!isEntering && nodesRef.current) {
        const dt = Math.min(delta, 0.033);
        const p = physicsRef.current;

        // Acoplar inercia del movimiento del cuerpo del bolsín al péndulo
        const bodyVelY = (nextRotY - p.prevRotY) / Math.max(dt, 0.001);
        const bodyVelX = (nextRotX - p.prevRotX) / Math.max(dt, 0.001);
        p.prevRotY = nextRotY;
        p.prevRotX = nextRotX;

        // 1. Gravedad sobre el cursor metálico del cierre (tira hacia abajo a 0)
        // Si está en hover, un leve sostén magnético/fricción; la gravedad siempre lo hace caer
        const gravitySlope = -3.4;
        const zipFriction = 4.2;
        p.zipVel += (gravitySlope - zipFriction * p.zipVel) * dt;
        p.zipPos += p.zipVel * dt;

        // Tope inferior (choca suave contra el tope cerrado y rebota apenas)
        if (p.zipPos <= 0) {
          p.zipPos = 0;
          if (p.zipVel < -0.15) {
            p.zipVel = -p.zipVel * 0.25;
          } else {
            p.zipVel = 0;
          }
        }
        // Tope superior en hover
        if (p.zipPos > 0.42) {
          p.zipPos = 0.42;
          p.zipVel = Math.min(0, -p.zipVel * 0.3);
        }

        // 2. Péndulo con gravedad para Pull_Cord / Pull_Tab (g/L ≈ 26 rad/s²)
        const gOverLCord = 28;
        const cordDamping = 3.2;
        const accCordZ =
          -gOverLCord * Math.sin(p.cordAngleZ) -
          cordDamping * p.cordVelZ -
          bodyVelY * 0.65;
        const accCordX =
          -gOverLCord * Math.sin(p.cordAngleX) -
          cordDamping * p.cordVelX +
          bodyVelX * 0.55;

        p.cordVelZ += accCordZ * dt;
        p.cordAngleZ = Math.max(-0.85, Math.min(0.85, p.cordAngleZ + p.cordVelZ * dt));
        p.cordVelX += accCordX * dt;
        p.cordAngleX = Math.max(-0.7, Math.min(0.7, p.cordAngleX + p.cordVelX * dt));

        // 3. Péndulo con gravedad para D_Ring (más corto y rápido: g/L ≈ 38)
        const gOverLRing = 38;
        const ringDamping = 3.8;
        const accRingZ =
          -gOverLRing * Math.sin(p.ringAngleZ) -
          ringDamping * p.ringVelZ -
          bodyVelY * 0.45;
        p.ringVelZ += accRingZ * dt;
        p.ringAngleZ = Math.max(-0.6, Math.min(0.6, p.ringAngleZ + p.ringVelZ * dt));

        // Aplicar transformaciones físicas
        nodesRef.current.setZipperProgress?.(p.zipPos);
        nodesRef.current.lidL.rotation.z = p.zipPos * 0.3;
        nodesRef.current.lidR.rotation.z = -p.zipPos * 0.3;

        if (nodesRef.current.pullCord) {
          nodesRef.current.pullCord.rotation.z = p.cordAngleZ;
          nodesRef.current.pullCord.rotation.x = p.cordAngleX;
        }
        if (nodesRef.current.pullTab) {
          nodesRef.current.pullTab.rotation.z = p.cordAngleZ * 0.55;
          nodesRef.current.pullTab.rotation.x = p.cordAngleX * 0.55;
        }
        if (nodesRef.current.dRing) {
          nodesRef.current.dRing.rotation.z = p.ringAngleZ;
        }

        const isActive =
          p.zipPos > 0.001 ||
          Math.abs(p.zipVel) > 0.005 ||
          Math.abs(p.cordAngleZ) > 0.002 ||
          Math.abs(p.cordVelZ) > 0.005 ||
          Math.abs(p.cordAngleX) > 0.002 ||
          Math.abs(p.cordVelX) > 0.005 ||
          Math.abs(p.ringAngleZ) > 0.002 ||
          Math.abs(p.ringVelZ) > 0.005;

        if (isActive) {
          invalidate();
        }
      }
    }
  });

  useEffect(() => {
    camera.lookAt(0, 0.05, 0);
  }, [camera]);

  const handleHoverChange = useCallback((over: boolean) => {
    pointerStateRef.current.bolsinHovered = over;
  }, []);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[-3, 5, 4]} intensity={1.35} castShadow />
      <directionalLight
        position={[4, 2, -3]}
        intensity={0.55}
        color="#C7D1DD"
      />

      {/* Environment 100% local con Lightformers (sin descargas HDR de CDN) */}
      <Environment resolution={128}>
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#FFFFFF"
          position={[-3, 4, 3]}
          scale={[6, 4, 1]}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.1}
          color="#C7D1DD"
          position={[4, 1.5, -2]}
          scale={[5, 3, 1]}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={0.65}
          color="#EEF2F6"
          position={[0, -3, 2]}
          scale={[6, 4, 1]}
          target={[0, 0, 0]}
        />
      </Environment>

      {/* Ángulo tres cuartos fiel al moodboard */}
      <group
        ref={rigGroupRef}
        rotation={[0.14, 0.54, 0]}
        position={[0, 0.02, 0]}
      >
        <BolsinProcedural
          onReady={handleModelReady}
          onHoverChange={handleHoverChange}
        />
      </group>

      <ContactShadows
        frames={1}
        position={[0, -0.62, 0]}
        opacity={0.35}
        scale={4.2}
        blur={2.4}
        far={2.2}
        color="#0B1220"
      />
    </>
  );
}

export function BolsinScene({
  reducedMotion = false,
  isEntering = false,
  onSceneReady,
  onFirstFrame,
}: BolsinSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={isEntering && !reducedMotion ? "always" : "demand"}
      camera={{ fov: 32, position: [0, 0.95, 5.8], near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <SceneRig
        reducedMotion={reducedMotion}
        isEntering={isEntering}
        onSceneReady={onSceneReady}
        onFirstFrame={onFirstFrame}
      />
    </Canvas>
  );
}
