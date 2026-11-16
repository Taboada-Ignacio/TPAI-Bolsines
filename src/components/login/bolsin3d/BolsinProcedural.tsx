"use client";

import { RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { type BolsinNodes, validateBolsinNodes } from "./bolsin-nodes";

export interface BolsinProceduralProps {
  onReady: (nodes: BolsinNodes) => void;
  onHoverChange?: (hovered: boolean) => void;
}

const FABRIC_COLOR = "#0251B0";
const FABRIC_SHEEN = "#4D8BE0";
const ZIPPER_TEETH_COLOR = "#4D8BE0";
const LIME_COLOR = "#D1FF42";
const SILVER_COLOR = "#C7D1DD";
const INK_COLOR = "#0B1220";

/**
 * Genera una textura procedural de micro-tejido (neopreno / felpa) sin red.
 */
function createFabricBumpTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
      const checker = ((x + y) / 2) % 2 === 0;
      const noise = ((x * 37 + y * 17) % 19) - 9;
      const v = Math.max(0, Math.min(255, (checker ? 142 : 114) + noise));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, y, 2, 2);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Curva 3D que recorre la parte superior del bolsín desde atrás (-Z)
 * hacia adelante (+Z) y baja por el alero frontal.
 */
function createZipperCurve(): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.16, -0.45),
    new THREE.Vector3(0, 0.37, -0.36),
    new THREE.Vector3(0, 0.485, -0.17),
    new THREE.Vector3(0, 0.505, 0.03),
    new THREE.Vector3(0, 0.465, 0.25),
    new THREE.Vector3(0, 0.34, 0.43),
    new THREE.Vector3(0, 0.15, 0.485),
  ]);
}

/**
 * Perfil redondeado en el plano YZ para extruir cada mitad de la tapa con alero frontal.
 */
function createLidHalfGeometry(width: number): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(-0.42, -0.28);
  shape.quadraticCurveTo(-0.44, -0.04, -0.32, 0.04);
  shape.quadraticCurveTo(0.0, 0.085, 0.33, 0.03);
  shape.quadraticCurveTo(0.46, -0.04, 0.465, -0.32);
  shape.quadraticCurveTo(0.455, -0.38, 0.38, -0.36);
  shape.quadraticCurveTo(0.0, -0.15, -0.36, -0.32);
  shape.quadraticCurveTo(-0.42, -0.34, -0.42, -0.28);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width,
    bevelEnabled: true,
    bevelThickness: 0.038,
    bevelSize: 0.035,
    bevelSegments: 6,
    curveSegments: 16,
  });

  geo.rotateY(Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Panel lateral redondeado y al ras para End_L / End_R (sin sobresalir como bolsillo).
 */
function createEndPanelGeometry(
  w: number,
  h: number,
  r: number,
): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  const hw = w / 2;
  const hh = h / 2;
  shape.moveTo(-hw + r, -hh);
  shape.lineTo(hw - r, -hh);
  shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
  shape.lineTo(hw, hh - r);
  shape.quadraticCurveTo(hw, hh, hw - r, hh);
  shape.lineTo(-hw + r, hh);
  shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
  shape.lineTo(-hw, -hh + r);
  shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.014,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 3,
    curveSegments: 10,
  });
  geo.rotateY(Math.PI / 2);
  geo.center();
  geo.computeVertexNormals();
  return geo;
}

export function BolsinProcedural({
  onReady,
  onHoverChange,
}: BolsinProceduralProps) {
  const rootRef = useRef<THREE.Group>(null);
  const teethMeshRef = useRef<THREE.InstancedMesh>(null);
  const tapeMeshRef = useRef<THREE.Mesh>(null);

  const bumpTexture = useMemo(() => createFabricBumpTexture(), []);

  const materials = useMemo(() => {
    const fabric = new THREE.MeshPhysicalMaterial({
      color: FABRIC_COLOR,
      roughness: 0.78,
      metalness: 0.0,
      sheen: 1.0,
      sheenColor: new THREE.Color(FABRIC_SHEEN),
      sheenRoughness: 0.52,
      bumpMap: bumpTexture,
      bumpScale: 0.008,
    });

    const fabricSeam = new THREE.MeshPhysicalMaterial({
      color: "#024599",
      roughness: 0.82,
      sheen: 0.8,
      sheenColor: new THREE.Color(FABRIC_SHEEN),
      sheenRoughness: 0.6,
      bumpMap: bumpTexture,
      bumpScale: 0.006,
    });

    const zipperTapeMat = new THREE.MeshPhysicalMaterial({
      color: "#024599",
      roughness: 0.82,
      sheen: 0.8,
      sheenColor: new THREE.Color(FABRIC_SHEEN),
      sheenRoughness: 0.6,
      transparent: true,
      opacity: 1,
    });

    const zipperTeeth = new THREE.MeshStandardMaterial({
      color: ZIPPER_TEETH_COLOR,
      roughness: 0.42,
      metalness: 0.12,
    });

    const lime = new THREE.MeshStandardMaterial({
      color: LIME_COLOR,
      roughness: 0.52,
      metalness: 0.02,
      bumpMap: bumpTexture,
      bumpScale: 0.004,
    });

    const silver = new THREE.MeshStandardMaterial({
      color: SILVER_COLOR,
      metalness: 0.94,
      roughness: 0.24,
    });

    const grayPatch = new THREE.MeshStandardMaterial({
      color: SILVER_COLOR,
      roughness: 0.62,
      metalness: 0.05,
    });

    const interior = new THREE.MeshBasicMaterial({
      color: INK_COLOR,
    });

    return {
      fabric,
      fabricSeam,
      zipperTapeMat,
      zipperTeeth,
      lime,
      silver,
      grayPatch,
      interior,
    };
  }, [bumpTexture]);

  const geometries = useMemo(() => {
    const lidHalf = createLidHalfGeometry(0.6);
    const endPanel = createEndPanelGeometry(0.56, 0.56, 0.16);
    const endPiping = createEndPanelGeometry(0.585, 0.585, 0.17);
    const zipperCurve = createZipperCurve();
    const zipperTape = new THREE.TubeGeometry(
      zipperCurve,
      42,
      0.048,
      10,
      false,
    );
    const tooth = new THREE.BoxGeometry(0.068, 0.026, 0.022);
    return { lidHalf, endPanel, endPiping, zipperCurve, zipperTape, tooth };
  }, []);

  const toothCount = 36;

  useEffect(() => {
    const mesh = teethMeshRef.current;
    if (!mesh) return;

    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3(1, 0, 0);

    for (let i = 0; i < toothCount; i++) {
      const t = i / (toothCount - 1);
      const pos = geometries.zipperCurve.getPointAt(t);
      const tangent = geometries.zipperCurve.getTangentAt(t).normalize();
      const normal = new THREE.Vector3()
        .crossVectors(tangent, right)
        .normalize();

      const xOffset = (i % 2 === 0 ? -1 : 1) * 0.015;
      dummy.position
        .copy(pos)
        .addScaledVector(normal, 0.036)
        .add(new THREE.Vector3(xOffset, 0, 0));

      dummy.quaternion.setFromUnitVectors(up, tangent);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, [geometries.zipperCurve]);

  useEffect(() => {
    if (!rootRef.current) return;
    const nodes = validateBolsinNodes(rootRef.current);
    if (!nodes) return;

    const right = new THREE.Vector3(1, 0, 0);
    const forward = new THREE.Vector3(0, 0, 1);
    const up = new THREE.Vector3(0, 1, 0);
    const dummy = new THREE.Object3D();

    nodes.setZipperProgress = (progress: number) => {
      const clamped = Math.max(0, Math.min(1, progress));
      // 0 = frente cerrado (u=1), 1 = abierto hacia atrás (u=0.05)
      const u = 1 - clamped * 0.95;
      const pos = geometries.zipperCurve.getPointAt(u);
      const tangent = geometries.zipperCurve.getTangentAt(u).normalize();
      const normal = new THREE.Vector3()
        .crossVectors(tangent, right)
        .normalize();

      nodes.zipperPull.position.copy(pos).addScaledVector(normal, 0.028);
      nodes.zipperPull.quaternion.setFromUnitVectors(forward, normal);

      // Ocultar progresivamente los dientes por delante del tirador (u_i > u)
      const mesh = teethMeshRef.current;
      if (mesh) {
        for (let i = 0; i < toothCount; i++) {
          const ui = i / (toothCount - 1);
          const tPos = geometries.zipperCurve.getPointAt(ui);
          const tTan = geometries.zipperCurve.getTangentAt(ui).normalize();
          const tNorm = new THREE.Vector3()
            .crossVectors(tTan, right)
            .normalize();
          const xOffset = (i % 2 === 0 ? -1 : 1) * 0.015;

          dummy.position
            .copy(tPos)
            .addScaledVector(tNorm, 0.036)
            .add(new THREE.Vector3(xOffset, 0, 0));
          dummy.quaternion.setFromUnitVectors(up, tTan);
          const visibleScale = ui <= u + 0.02 ? 1 : 0.0001;
          dummy.scale.setScalar(visibleScale);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      }

      // Desvanecer y ocultar la cinta central para que no quede un puente sobre el interior negro
      materials.zipperTapeMat.opacity = Math.max(0, 1 - clamped * 1.45);
      if (tapeMeshRef.current) {
        tapeMeshRef.current.visible = clamped < 0.72;
      }
      nodes.zipperPull.visible = clamped < 0.94;
    };

    onReady(nodes);
  }, [geometries.zipperCurve, materials.zipperTapeMat, onReady]);

  useEffect(() => {
    return () => {
      geometries.lidHalf.dispose();
      geometries.endPanel.dispose();
      geometries.endPiping.dispose();
      geometries.zipperTape.dispose();
      geometries.tooth.dispose();
      bumpTexture?.dispose();
      Object.values(materials).forEach((m) => m.dispose());
    };
  }, [bumpTexture, geometries, materials]);

  return (
    <group
      ref={rootRef}
      name="Bolsin"
      position={[0, 0, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHoverChange?.(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onHoverChange?.(false);
      }}
    >
      {/* Cuerpo principal acolchado (1.45 W : 1.0 H : 0.9 D) */}
      <group name="Body">
        <RoundedBox
          args={[1.38, 0.72, 0.86]}
          radius={0.14}
          smoothness={8}
          position={[0, -0.13, 0]}
          material={materials.fabric}
          castShadow
          receiveShadow
        />

        {/* Boca interior negro tinta, visible al abrir las tapas desde el centro */}
        <mesh
          name="Interior"
          position={[0, 0.228, 0]}
          material={materials.interior}
        >
          <boxGeometry args={[1.18, 0.04, 0.68]} />
        </mesh>
      </group>

      {/* Testa lateral izquierda (-X) al ras con vivo de costura */}
      <group name="End_L" position={[-0.688, -0.06, 0]}>
        <mesh
          geometry={geometries.endPiping}
          material={materials.fabricSeam}
          position={[0.008, 0, 0]}
        />
        <mesh
          geometry={geometries.endPanel}
          material={materials.fabric}
          castShadow
          receiveShadow
        />
      </group>

      {/* Argolla en D plateada en el lateral izquierdo */}
      <group name="D_Ring" position={[-0.715, -0.04, 0.04]}>
        <RoundedBox
          args={[0.036, 0.09, 0.075]}
          radius={0.012}
          smoothness={3}
          position={[0.006, 0.045, 0]}
          material={materials.fabricSeam}
        />
        <mesh
          position={[-0.018, -0.015, 0]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          material={materials.silver}
        >
          <torusGeometry args={[0.068, 0.015, 12, 24, Math.PI]} />
        </mesh>
        <mesh
          position={[-0.018, -0.015, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.silver}
        >
          <cylinderGeometry args={[0.014, 0.014, 0.136, 10]} />
        </mesh>
      </group>

      {/* Testa lateral derecha (+X) al ras con vivo de costura */}
      <group name="End_R" position={[0.688, -0.06, 0]}>
        <mesh
          geometry={geometries.endPiping}
          material={materials.fabricSeam}
          position={[-0.008, 0, 0]}
        />
        <mesh
          geometry={geometries.endPanel}
          material={materials.fabric}
          castShadow
          receiveShadow
        />
      </group>

      {/* Tapa mitad izquierda (pivote en hombro izquierdo para abrir desde el cierre central) */}
      <group name="Lid_L" position={[-0.66, 0.14, 0]}>
        <mesh
          geometry={geometries.lidHalf}
          material={materials.fabric}
          position={[0.01, 0.3, 0]}
          castShadow
          receiveShadow
        />
      </group>

      {/* Tapa mitad derecha (pivote en hombro derecho para abrir desde el cierre central) */}
      <group name="Lid_R" position={[0.66, 0.14, 0]}>
        <mesh
          geometry={geometries.lidHalf}
          material={materials.fabric}
          position={[-0.61, 0.3, 0]}
          castShadow
          receiveShadow
        />
      </group>

      {/* Cremallera gruesa de atrás hacia adelante y bajando por el alero */}
      <group name="Zipper_Track">
        <mesh
          ref={tapeMeshRef}
          geometry={geometries.zipperTape}
          material={materials.zipperTapeMat}
        />
        <instancedMesh
          ref={teethMeshRef}
          args={[geometries.tooth, materials.zipperTeeth, toothCount]}
        />
      </group>

      {/* Tirador plateado + lengüeta lima + cordón con anilla */}
      <group name="Zipper_Pull" position={[0, 0.15, 0.505]}>
        <RoundedBox
          args={[0.088, 0.11, 0.055]}
          radius={0.018}
          smoothness={3}
          material={materials.silver}
          castShadow
        />
        <RoundedBox
          args={[0.06, 0.11, 0.022]}
          radius={0.008}
          smoothness={2}
          position={[0, -0.09, 0.022]}
          material={materials.silver}
        />

        <group name="Pull_Tab" position={[0, -0.165, 0.03]}>
          <RoundedBox
            args={[0.145, 0.048, 0.055]}
            radius={0.012}
            smoothness={3}
            material={materials.lime}
          />
        </group>

        <group name="Pull_Cord" position={[0, -0.25, 0.035]}>
          <mesh scale={[0.7, 1.35, 0.7]} material={materials.silver}>
            <torusGeometry args={[0.048, 0.006, 8, 24]} />
          </mesh>
        </group>
      </group>

      {/* Correa izquierda (bajo el tirador) */}
      <group name="Strap_L" position={[0.07, -0.2, 0.438]}>
        <RoundedBox
          args={[0.11, 0.54, 0.03]}
          radius={0.01}
          smoothness={3}
          material={materials.lime}
          castShadow
        />
      </group>

      {/* Hebilla izquierda */}
      <group name="Buckle_L" position={[0.07, 0.05, 0.448]}>
        <RoundedBox
          args={[0.14, 0.11, 0.048]}
          radius={0.015}
          smoothness={3}
          material={materials.lime}
        />
        <RoundedBox
          args={[0.07, 0.03, 0.054]}
          radius={0.008}
          smoothness={2}
          position={[0, -0.01, 0]}
          material={materials.fabricSeam}
        />
      </group>

      {/* Correa derecha */}
      <group name="Strap_R" position={[0.43, -0.2, 0.438]}>
        <RoundedBox
          args={[0.11, 0.54, 0.03]}
          radius={0.01}
          smoothness={3}
          material={materials.lime}
          castShadow
        />
      </group>

      {/* Hebilla derecha */}
      <group name="Buckle_R" position={[0.43, 0.05, 0.448]}>
        <RoundedBox
          args={[0.14, 0.11, 0.048]}
          radius={0.015}
          smoothness={3}
          material={materials.lime}
        />
        <RoundedBox
          args={[0.07, 0.03, 0.054]}
          radius={0.008}
          smoothness={2}
          position={[0, -0.01, 0]}
          material={materials.fabricSeam}
        />
      </group>

      {/* Parches apilados abajo a la izquierda (lima arriba, gris abajo) */}
      <group name="Patch" position={[-0.35, -0.27, 0.435]}>
        <RoundedBox
          args={[0.15, 0.075, 0.025]}
          radius={0.012}
          smoothness={3}
          position={[0, 0.052, 0]}
          material={materials.lime}
        />
        <RoundedBox
          args={[0.15, 0.075, 0.025]}
          radius={0.012}
          smoothness={3}
          position={[0, -0.045, 0]}
          material={materials.grayPatch}
        />
      </group>

      {/* Empty destino de la cámara al entrar */}
      <group name="Camera_Target" position={[0, 0.28, 0.05]} />
    </group>
  );
}
