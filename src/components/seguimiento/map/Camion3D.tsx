"use client";

import { Truck } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import { cn } from "@/lib/cn";
import { isWebGLSupported } from "@/lib/webgl";

const emptySubscribe = () => () => {};

export type EstadoCamion3D = "vivo" | "alerta_a3" | "seleccionado";

export interface Camion3DProps {
  estado: EstadoCamion3D;
  activo?: boolean;
  rumboGrados?: number;
  className?: string;
}

const RENDER_SIZE_PX = 144;
const RENDER_PIXEL_RATIO = 2;
const PASO_RUMBO_GRADOS = 15;

interface PaletaCamion {
  chasis: string;
  cabina: string;
  caja: string;
  nervadura: string;
  parabrisas: string;
  llanta: string;
  neumatico: string;
  acento: string;
}

interface MaterialesCamion {
  cabina: THREE.MeshStandardMaterial;
  caja: THREE.MeshStandardMaterial;
  nervadura: THREE.MeshStandardMaterial;
  acento: THREE.MeshStandardMaterial;
  baliza: THREE.MeshStandardMaterial;
  parabrisas: THREE.MeshStandardMaterial;
  chasis: THREE.MeshStandardMaterial;
  neumatico: THREE.MeshStandardMaterial;
  llanta: THREE.MeshStandardMaterial;
}

interface SingletonRenderer {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  truckPivot: THREE.Group;
  materiales: MaterialesCamion;
}

let singleton: SingletonRenderer | null = null;
const spriteCache = new Map<string, string>();

function leerTokenCss(nombre: string, respaldo: string): string {
  if (typeof document === "undefined") return respaldo;
  const valor = getComputedStyle(document.documentElement)
    .getPropertyValue(nombre)
    .trim();
  return valor || respaldo;
}

function esTemaOscuroActivo(): boolean {
  if (typeof document === "undefined") return false;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return true;
  if (attr === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function cuantizarRumbo(rumboGrados: number): number {
  const norm = ((rumboGrados % 360) + 360) % 360;
  return (
    (Math.round(norm / PASO_RUMBO_GRADOS) * PASO_RUMBO_GRADOS) % 360
  );
}

function obtenerPaletaCamion(
  estado: EstadoCamion3D,
  temaOscuro: boolean,
): PaletaCamion {
  const acento =
    estado === "seleccionado"
      ? leerTokenCss("--primary", "#0251b0")
      : estado === "alerta_a3"
        ? leerTokenCss("--amber", "#f59e0b")
        : leerTokenCss("--lime", "#d1ff42");

  return {
    chasis: "#141c2b",
    cabina: leerTokenCss("--primary-deep", "#01397d"),
    caja: temaOscuro ? "#e8eef5" : "#f6f8fb",
    nervadura: temaOscuro ? "#cbd5e1" : "#dde5ef",
    parabrisas: "#7dd3fc",
    llanta: "#cbd5e1",
    neumatico: "#0f172a",
    acento,
  };
}

function crearTexturaSombraContacto(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(64, 64, 10, 64, 64, 60);
  grad.addColorStop(0, "rgba(8, 13, 24, 0.52)");
  grad.addColorStop(0.55, "rgba(8, 13, 24, 0.24)");
  grad.addColorStop(1, "rgba(8, 13, 24, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function construirModeloCamion(
  materiales: MaterialesCamion,
): { root: THREE.Group; truckPivot: THREE.Group } {
  const root = new THREE.Group();
  const truckPivot = new THREE.Group();
  root.add(truckPivot);

  // Sombra de contacto suave debajo del camión (no rota con el pivote o acompaña al chasis)
  const sombraTex = crearTexturaSombraContacto();
  if (sombraTex) {
    const sombraMat = new THREE.MeshBasicMaterial({
      map: sombraTex,
      transparent: true,
      depthWrite: false,
    });
    const sombra = new THREE.Mesh(
      new THREE.PlaneGeometry(2.05, 1.18),
      sombraMat,
    );
    sombra.rotation.x = -Math.PI / 2;
    sombra.position.set(-0.02, -0.39, 0);
    truckPivot.add(sombra);
  }

  // 1. Chasis longitudinal + paragolpes delantero y trasero
  const chasis = new THREE.Mesh(
    new THREE.BoxGeometry(1.56, 0.09, 0.54),
    materiales.chasis,
  );
  chasis.position.set(-0.02, -0.21, 0);
  truckPivot.add(chasis);

  const paragolpesDelantero = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.11, 0.68),
    materiales.chasis,
  );
  paragolpesDelantero.position.set(0.75, -0.2, 0);
  truckPivot.add(paragolpesDelantero);

  const paragolpesTrasero = new THREE.Mesh(
    new THREE.BoxGeometry(0.07, 0.1, 0.68),
    materiales.chasis,
  );
  paragolpesTrasero.position.set(-0.79, -0.2, 0);
  truckPivot.add(paragolpesTrasero);

  // Faros delanteros (izquierdo y derecho)
  const matFaroDelantero = new THREE.MeshStandardMaterial({
    color: "#fef9c3",
    emissive: "#fde047",
    emissiveIntensity: 0.85,
    roughness: 0.2,
  });
  for (const zSign of [-1, 1]) {
    const faro = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.07, 0.11),
      matFaroDelantero,
    );
    faro.position.set(0.78, -0.09, zSign * 0.23);
    truckPivot.add(faro);
  }

  // Faros traseros (izquierdo y derecho)
  const matFaroTrasero = new THREE.MeshStandardMaterial({
    color: "#ef4444",
    emissive: "#dc2626",
    emissiveIntensity: 0.75,
    roughness: 0.25,
  });
  for (const zSign of [-1, 1]) {
    const piloto = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.06, 0.11),
      matFaroTrasero,
    );
    piloto.position.set(-0.81, -0.18, zSign * 0.24);
    truckPivot.add(piloto);
  }

  // 2. Ejes y 6 ruedas con llantas metálicas (1 eje delantero + 2 ejes traseros)
  const posicionesEjesX = [0.51, -0.35, -0.64];
  const geoNeumatico = new THREE.CylinderGeometry(0.135, 0.135, 0.095, 20);
  const geoLlanta = new THREE.CylinderGeometry(0.075, 0.075, 0.104, 14);
  const geoEje = new THREE.CylinderGeometry(0.025, 0.025, 0.7, 10);

  for (const ejeX of posicionesEjesX) {
    const eje = new THREE.Mesh(geoEje, materiales.chasis);
    eje.rotation.x = Math.PI / 2;
    eje.position.set(ejeX, -0.26, 0);
    truckPivot.add(eje);

    for (const zSign of [-1, 1]) {
      const neumatico = new THREE.Mesh(geoNeumatico, materiales.neumatico);
      neumatico.rotation.x = Math.PI / 2;
      neumatico.position.set(ejeX, -0.26, zSign * 0.34);
      truckPivot.add(neumatico);

      const llanta = new THREE.Mesh(geoLlanta, materiales.llanta);
      llanta.rotation.x = Math.PI / 2;
      llanta.position.set(ejeX, -0.26, zSign * 0.34);
      truckPivot.add(llanta);
    }
  }

  // 3. Furgón térmico con nervaduras laterales, franja superior y logo lateral
  const furgon = new THREE.Mesh(
    new THREE.BoxGeometry(1.02, 0.64, 0.7),
    materiales.caja,
  );
  furgon.position.set(-0.26, 0.15, 0);
  truckPivot.add(furgon);

  // Nervaduras laterales (4 por lado)
  const nervadurasX = [-0.62, -0.38, -0.14, 0.1];
  for (const nx of nervadurasX) {
    for (const zSign of [-1, 1]) {
      const nervadura = new THREE.Mesh(
        new THREE.BoxGeometry(0.032, 0.56, 0.02),
        materiales.nervadura,
      );
      nervadura.position.set(nx, 0.14, zSign * 0.356);
      truckPivot.add(nervadura);
    }
  }

  // Franja superior indicadora de estado
  const franjaSuperior = new THREE.Mesh(
    new THREE.BoxGeometry(0.98, 0.055, 0.64),
    materiales.acento,
  );
  franjaSuperior.position.set(-0.26, 0.485, 0);
  truckPivot.add(franjaSuperior);

  // Logo / insignia lateral con el color de estado en ambos flancos
  for (const zSign of [-1, 1]) {
    const logoLateral = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.16, 0.022),
      materiales.acento,
    );
    logoLateral.position.set(-0.26, 0.17, zSign * 0.358);
    truckPivot.add(logoLateral);
  }

  // 4. Cabina aerodinámica inclinada (ExtrudeGeometry)
  const formaCabina = new THREE.Shape();
  formaCabina.moveTo(-0.46, 0);
  formaCabina.lineTo(0.02, 0);
  formaCabina.lineTo(0.02, 0.22);
  formaCabina.lineTo(-0.14, 0.49);
  formaCabina.lineTo(-0.46, 0.49);
  formaCabina.closePath();

  const geoCabina = new THREE.ExtrudeGeometry(formaCabina, {
    depth: 0.58,
    bevelEnabled: true,
    bevelThickness: 0.025,
    bevelSize: 0.02,
    bevelSegments: 2,
  });
  geoCabina.translate(0, 0, -0.29);

  const cabina = new THREE.Mesh(geoCabina, materiales.cabina);
  cabina.position.set(0.73, -0.17, 0);
  truckPivot.add(cabina);

  // Parabrisas reflectivo inclinado
  const parabrisas = new THREE.Mesh(
    new THREE.BoxGeometry(0.035, 0.25, 0.51),
    materiales.parabrisas,
  );
  parabrisas.position.set(0.675, 0.19, 0);
  parabrisas.rotation.z = 0.54;
  truckPivot.add(parabrisas);

  // Ventanillas laterales de cabina
  for (const zSign of [-1, 1]) {
    const ventanilla = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.17, 0.022),
      materiales.parabrisas,
    );
    ventanilla.position.set(0.47, 0.19, zSign * 0.305);
    truckPivot.add(ventanilla);
  }

  // Visera aerodinámica sobre parabrisas
  const visera = new THREE.Mesh(
    new THREE.BoxGeometry(0.09, 0.03, 0.56),
    materiales.chasis,
  );
  visera.position.set(0.62, 0.32, 0);
  visera.rotation.z = -0.18;
  truckPivot.add(visera);

  // Espejos laterales con soporte
  for (const zSign of [-1, 1]) {
    const brazo = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.025, 0.1),
      materiales.chasis,
    );
    brazo.position.set(0.57, 0.16, zSign * 0.35);
    truckPivot.add(brazo);

    const espejo = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.12, 0.03),
      materiales.chasis,
    );
    espejo.position.set(0.58, 0.18, zSign * 0.395);
    truckPivot.add(espejo);
  }

  // Baliza luminosa en el techo de la cabina
  const baliza = new THREE.Mesh(
    new THREE.CylinderGeometry(0.065, 0.075, 0.065, 16),
    materiales.baliza,
  );
  baliza.position.set(0.43, 0.37, 0);
  truckPivot.add(baliza);

  return { root, truckPivot };
}

function obtenerOCrearSingleton(): SingletonRenderer | null {
  if (singleton) return singleton;
  if (typeof document === "undefined" || !isWebGLSupported()) return null;

  try {
    const renderer = new THREE.WebGLRenderer({
      preserveDrawingBuffer: true,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(RENDER_PIXEL_RATIO);
    renderer.setSize(RENDER_SIZE_PX, RENDER_SIZE_PX, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    renderer.domElement.addEventListener(
      "webglcontextlost",
      (event) => {
        event.preventDefault();
        singleton = null;
      },
      { once: true },
    );

    const scene = new THREE.Scene();

    const hemiLight = new THREE.HemisphereLight("#ffffff", "#334155", 1.25);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight("#ffffff", 1.75);
    keyLight.position.set(3.2, 5.2, 3.8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight("#cbd5e1", 0.85);
    rimLight.position.set(-3.0, 2.2, -3.2);
    scene.add(rimLight);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 20);
    camera.position.set(0, 1.95, 2.55);
    camera.lookAt(0, 0.04, 0);

    const materiales: MaterialesCamion = {
      cabina: new THREE.MeshStandardMaterial({
        color: "#01397d",
        roughness: 0.36,
        metalness: 0.18,
      }),
      caja: new THREE.MeshStandardMaterial({
        color: "#f6f8fb",
        roughness: 0.35,
        metalness: 0.08,
      }),
      nervadura: new THREE.MeshStandardMaterial({
        color: "#dde5ef",
        roughness: 0.4,
        metalness: 0.1,
      }),
      acento: new THREE.MeshStandardMaterial({
        color: "#d1ff42",
        emissive: "#d1ff42",
        emissiveIntensity: 0.32,
        roughness: 0.3,
      }),
      baliza: new THREE.MeshStandardMaterial({
        color: "#d1ff42",
        emissive: "#d1ff42",
        emissiveIntensity: 0.72,
        roughness: 0.2,
      }),
      parabrisas: new THREE.MeshStandardMaterial({
        color: "#7dd3fc",
        emissive: "#1e3a8a",
        emissiveIntensity: 0.25,
        roughness: 0.12,
        metalness: 0.65,
      }),
      chasis: new THREE.MeshStandardMaterial({
        color: "#141c2b",
        roughness: 0.62,
        metalness: 0.35,
      }),
      neumatico: new THREE.MeshStandardMaterial({
        color: "#0f172a",
        roughness: 0.88,
        metalness: 0.05,
      }),
      llanta: new THREE.MeshStandardMaterial({
        color: "#cbd5e1",
        roughness: 0.24,
        metalness: 0.78,
      }),
    };

    const { root, truckPivot } = construirModeloCamion(materiales);
    scene.add(root);

    singleton = {
      renderer,
      scene,
      camera,
      truckPivot,
      materiales,
    };

    return singleton;
  } catch {
    return null;
  }
}

function renderizarSpriteCamion(
  estado: EstadoCamion3D,
  rumboCuantizado: number,
  temaOscuro: boolean,
): string | null {
  const cacheKey = `${estado}|${rumboCuantizado}|${temaOscuro ? "dark" : "light"}`;
  const enCache = spriteCache.get(cacheKey);
  if (enCache) return enCache;

  const ctx = obtenerOCrearSingleton();
  if (!ctx) return null;

  const paleta = obtenerPaletaCamion(estado, temaOscuro);
  const { materiales, truckPivot, renderer, scene, camera } = ctx;

  materiales.cabina.color.set(paleta.cabina);
  materiales.caja.color.set(paleta.caja);
  materiales.nervadura.color.set(paleta.nervadura);
  materiales.acento.color.set(paleta.acento);
  materiales.acento.emissive.set(paleta.acento);
  materiales.baliza.color.set(paleta.acento);
  materiales.baliza.emissive.set(paleta.acento);

  // Rumbo 90° (Este) corresponde a +X en el modelo; 0° (Norte) apunta hacia -Z
  const rotY = ((90 - rumboCuantizado) * Math.PI) / 180;
  truckPivot.rotation.set(0, rotY, 0);

  renderer.render(scene, camera);
  const dataUrl = renderer.domElement.toDataURL("image/png");
  spriteCache.set(cacheKey, dataUrl);
  return dataUrl;
}

/**
 * Camión 3D procedural renderizado mediante un **renderer offscreen singleton**
 * (`THREE.WebGLRenderer` único reutilizable, 144x144px @2x) con caché de sprites
 * por `(estado, rumboCuantizado, temaOscuro)` y cero contextos WebGL adicionales.
 * Hace fallback a `<Truck />` únicamente si WebGL no existe en el navegador.
 */
export function Camion3D({
  estado,
  activo = false,
  rumboGrados = 0,
  className,
}: Camion3DProps) {
  const [temaOscuro, setTemaOscuro] = useState<boolean>(() =>
    esTemaOscuroActivo(),
  );

  const webglDisponible = useSyncExternalStore(
    emptySubscribe,
    () => isWebGLSupported(),
    () => false,
  );

  useEffect(() => {
    const actualizarTema = () => setTemaOscuro(esTemaOscuroActivo());
    actualizarTema();

    const observer = new MutationObserver(actualizarTema);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    media?.addEventListener("change", actualizarTema);

    return () => {
      observer.disconnect();
      media?.removeEventListener("change", actualizarTema);
    };
  }, []);

  const rumboCuantizado = cuantizarRumbo(rumboGrados);
  const spriteUrl = webglDisponible
    ? renderizarSpriteCamion(estado, rumboCuantizado, temaOscuro)
    : null;

  if (!spriteUrl) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-full border border-edge bg-surface/95 shadow-sm",
          className,
        )}
      >
        <Truck className="size-5 shrink-0" strokeWidth={2} />
      </span>
    );
  }

  return (
    <img
      src={spriteUrl}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={cn(
        "pointer-events-none size-[64px] shrink-0 select-none object-contain drop-shadow-[0_4px_10px_rgba(8,13,24,0.28)] transition-transform duration-200",
        activo && "brightness-105",
        className,
      )}
    />
  );
}
