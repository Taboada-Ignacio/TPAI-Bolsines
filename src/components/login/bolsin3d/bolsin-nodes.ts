import type { Object3D } from "three";

export const REQUIRED_BOLSIN_NODES = [
  "Bolsin",
  "Body",
  "Lid_L",
  "Lid_R",
  "Zipper_Track",
  "Zipper_Pull",
  "Strap_L",
  "Strap_R",
  "Buckle_L",
  "Buckle_R",
  "Patch",
  "End_L",
  "End_R",
  "D_Ring",
  "Pull_Tab",
  "Pull_Cord",
  "Interior",
  "Camera_Target",
] as const;

export type BolsinNodeName = (typeof REQUIRED_BOLSIN_NODES)[number];

export type BolsinNodes = {
  root: Object3D;
  lidL: Object3D;
  lidR: Object3D;
  zipperPull: Object3D;
  pullTab?: Object3D;
  pullCord?: Object3D;
  dRing?: Object3D;
  interior: Object3D;
  cameraTarget: Object3D;
  zipperTrackLength: number;
  setZipperProgress?: (t: number) => void;
};

export function validateBolsinNodes(root: Object3D): BolsinNodes | null {
  const missing: string[] = [];

  for (const name of REQUIRED_BOLSIN_NODES) {
    if (name === "Bolsin") {
      if (root.name !== "Bolsin" && !root.getObjectByName("Bolsin")) {
        missing.push(name);
      }
      continue;
    }
    if (!root.getObjectByName(name)) {
      missing.push(name);
    }
  }

  if (missing.length > 0) {
    console.warn(
      `[BolsinModel] Faltan nodos requeridos en el modelo 3D: ${missing.join(", ")}`,
    );
    return null;
  }

  const bolsinRoot =
    root.name === "Bolsin" ? root : root.getObjectByName("Bolsin")!;
  const lidL = bolsinRoot.getObjectByName("Lid_L")!;
  const lidR = bolsinRoot.getObjectByName("Lid_R")!;
  const zipperPull = bolsinRoot.getObjectByName("Zipper_Pull")!;
  const pullTab = bolsinRoot.getObjectByName("Pull_Tab") ?? undefined;
  const pullCord = bolsinRoot.getObjectByName("Pull_Cord") ?? undefined;
  const dRing = bolsinRoot.getObjectByName("D_Ring") ?? undefined;
  const interior = bolsinRoot.getObjectByName("Interior")!;
  const cameraTarget = bolsinRoot.getObjectByName("Camera_Target")!;

  return {
    root: bolsinRoot,
    lidL,
    lidR,
    zipperPull,
    pullTab,
    pullCord,
    dRing,
    interior,
    cameraTarget,
    zipperTrackLength: 0.9,
  };
}
