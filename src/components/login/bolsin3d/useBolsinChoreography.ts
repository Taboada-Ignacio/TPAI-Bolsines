"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useSyncExternalStore, type RefObject } from "react";
import * as THREE from "three";
import type { LoginState } from "@/hooks/useLoginFlow";
import type { BolsinSceneHandle } from "./BolsinScene";

gsap.registerPlugin(useGSAP);

export interface UseBolsinChoreographyOptions {
  containerRef: RefObject<HTMLElement | null>;
  sceneHandle: BolsinSceneHandle | null;
  loginState: LoginState;
  fieldFocused: boolean;
  onEnterComplete: () => void;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useBolsinChoreography({
  containerRef,
  sceneHandle,
  loginState,
  fieldFocused,
  onEnterComplete,
}: UseBolsinChoreographyOptions) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  const submitTweenRef = useRef<gsap.core.Tween | null>(null);
  const enterTlRef = useRef<gsap.core.Timeline | null>(null);
  const entranceDoneRef = useRef(false);

  // §5.1 Entrada DOM (inmediata al montar, no bloquea el formulario)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const isReduced = Boolean(ctx.conditions?.reduce);
          if (isReduced) {
            gsap.set(
              "[data-login-stage], [data-login-title-line], [data-login-stagger]",
              { autoAlpha: 1, y: 0, scale: 1 },
            );
            return;
          }

          const tl = gsap.timeline();
          tl.fromTo(
            "[data-login-stage]",
            { autoAlpha: 0, scale: 0.985 },
            { autoAlpha: 1, scale: 1, duration: 0.36, ease: "expo.out" },
            0,
          )
            .fromTo(
              "[data-login-title-line]",
              { autoAlpha: 0, y: 12 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.32,
                ease: "expo.out",
              },
              0.08,
            )
            .fromTo(
              "[data-login-stagger]",
              { autoAlpha: 0, y: 10 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.28,
                stagger: 0.05,
                ease: "expo.out",
              },
              0.14,
            );
        },
      );
    },
    { scope: containerRef },
  );

  // §5.1 + §5.2 Entrada 3D + Status Quo polirrítmico orgánico
  useGSAP(
    () => {
      if (!sceneHandle || reducedMotion) return;
      if (entranceDoneRef.current) return;
      entranceDoneRef.current = true;

      const { nodes, invalidate } = sceneHandle;
      const root = nodes.root;

      gsap.set(root.position, { y: 0.45 });
      gsap.set(root.rotation, { z: -0.06 });

      // Entrada con peso y propósito; luego reposa calmo (0% GPU en idle) hasta que el usuario interactúa
      gsap.to(root.position, {
        y: 0,
        duration: 0.72,
        delay: 0.08,
        ease: "expo.out",
        onUpdate: invalidate,
      });

      gsap.to(root.rotation, {
        z: 0,
        duration: 0.72,
        delay: 0.08,
        ease: "expo.out",
        onUpdate: invalidate,
      });

      if (nodes.pullCord) {
        gsap.fromTo(
          nodes.pullCord.rotation,
          { x: 0.2 },
          {
            keyframes: [
              { x: -0.08, duration: 0.24 },
              { x: 0.04, duration: 0.18 },
              { x: 0, duration: 0.18 },
            ],
            delay: 0.22,
            ease: "sine.inOut",
            onUpdate: invalidate,
          },
        );
      }
    },
    { dependencies: [sceneHandle, reducedMotion] },
  );

  // §5.3 Foco en campos
  useGSAP(
    () => {
      if (!sceneHandle || reducedMotion || loginState.status === "entering") {
        return;
      }
      const { nodes, invalidate } = sceneHandle;
      const isDesktop = window.innerWidth >= 1024;

      if (fieldFocused) {
        gsap.to(nodes.root.rotation, {
          y: isDesktop ? 0.32 : 0,
          x: isDesktop ? 0 : 0.12,
          duration: 0.45,
          ease: "expo.out",
          overwrite: "auto",
          onUpdate: invalidate,
        });
      } else {
        gsap.to(nodes.root.rotation, {
          y: 0,
          x: 0,
          duration: 0.45,
          ease: "expo.out",
          overwrite: "auto",
          onUpdate: invalidate,
        });
      }
    },
    {
      dependencies: [
        fieldFocused,
        sceneHandle,
        reducedMotion,
        loginState.status,
      ],
    },
  );

  // §5.3 Envío / Errores A2 y A3
  useGSAP(
    () => {
      if (
        loginState.status === "rejected" ||
        loginState.status === "unreachable"
      ) {
        gsap.fromTo(
          "[data-login-error]",
          { autoAlpha: 0, y: reducedMotion ? 0 : 4 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0 : 0.16,
            ease: "power2.out",
          },
        );
      }

      if (!sceneHandle || reducedMotion) return;
      const { nodes, invalidate } = sceneHandle;

      if (loginState.status === "submitting") {
        submitTweenRef.current?.kill();
        if (nodes.setZipperProgress) {
          const proxy = { t: 0 };
          submitTweenRef.current = gsap.to(proxy, {
            t: 0.14,
            duration: 0.35,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            onUpdate: () => {
              nodes.setZipperProgress?.(proxy.t);
              invalidate();
            },
          });
        } else {
          submitTweenRef.current = gsap.to(nodes.zipperPull.position, {
            z: 0.39,
            duration: 0.35,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            onUpdate: invalidate,
          });
        }
      } else {
        submitTweenRef.current?.kill();
        submitTweenRef.current = null;
        if (loginState.status !== "entering") {
          if (nodes.setZipperProgress) {
            const proxy = { t: 0.08 };
            gsap.to(proxy, {
              t: 0,
              duration: 0.18,
              ease: "power2.out",
              onUpdate: () => {
                nodes.setZipperProgress?.(proxy.t);
                invalidate();
              },
            });
          } else {
            gsap.to(nodes.zipperPull.position, {
              z: 0.495,
              duration: 0.2,
              ease: "power2.out",
              onUpdate: invalidate,
            });
          }
        }
      }

      if (loginState.status === "rejected") {
        gsap.to(nodes.root.rotation, {
          keyframes: [
            { y: 0.07, duration: 0.1 },
            { y: -0.07, duration: 0.1 },
            { y: 0, duration: 0.1 },
          ],
          ease: "power2.out",
          onUpdate: invalidate,
        });
        if (nodes.pullCord) {
          gsap.to(nodes.pullCord.rotation, {
            keyframes: [
              { z: -0.22, duration: 0.1 },
              { z: 0.16, duration: 0.12 },
              { z: 0, duration: 0.14 },
            ],
            ease: "sine.out",
            onUpdate: invalidate,
          });
        }
      }
    },
    {
      scope: containerRef,
      dependencies: [loginState.status, sceneHandle, reducedMotion],
    },
  );

  // §5.4 + §5.5 Éxito: transición continua y directa al interior del bolsín (sin resize del canvas)
  useGSAP(
    () => {
      if (loginState.status !== "entering") return;

      submitTweenRef.current?.kill();

      if (reducedMotion || !sceneHandle) {
        const tl = gsap.timeline({ onComplete: onEnterComplete });
        enterTlRef.current = tl;
        tl.to("[data-enter-overlay]", {
          autoAlpha: 1,
          duration: reducedMotion ? 0.2 : 0.25,
          ease: "power2.in",
        });
        return;
      }

      const { nodes, camera, invalidate } = sceneHandle;
      const targetWorld = new THREE.Vector3();
      nodes.cameraTarget.getWorldPosition(targetWorld);

      const lookTarget = new THREE.Vector3(
        targetWorld.x,
        targetWorld.y - 0.14,
        targetWorld.z,
      );

      const tl = gsap.timeline({ onComplete: onEnterComplete });
      enterTlRef.current = tl;

      const zipProxy = { t: 0 };

      // Movimiento único continuo estilo Rumbo (0 -> 0.54s): arranque explosivo expo.out + inmersión expo.inOut
      tl.to(
        "[data-login-form-col]",
        { autoAlpha: 0, duration: 0.14, ease: "power2.out" },
        0,
      )
        .to(
          nodes.root.rotation,
          {
            x: 0.22,
            y: 0,
            z: 0,
            duration: 0.28,
            ease: "expo.out",
            onUpdate: invalidate,
          },
          0,
        )
        .to(
          nodes.setZipperProgress ? zipProxy : nodes.zipperPull.position,
          nodes.setZipperProgress
            ? {
                t: 1,
                duration: 0.28,
                ease: "expo.out",
                onUpdate: () => {
                  nodes.setZipperProgress?.(zipProxy.t);
                  invalidate();
                },
              }
            : {
                z: -0.42,
                y: 0.34,
                duration: 0.28,
                ease: "expo.out",
                onUpdate: invalidate,
              },
          0,
        )
        .to(
          nodes.lidL.rotation,
          {
            z: 1.35,
            duration: 0.34,
            ease: "expo.out",
            onUpdate: invalidate,
          },
          0.04,
        )
        .to(
          nodes.lidR.rotation,
          {
            z: -1.35,
            duration: 0.34,
            ease: "expo.out",
            onUpdate: invalidate,
          },
          0.04,
        )
        .to(
          camera.position,
          {
            x: targetWorld.x,
            y: targetWorld.y + 0.42,
            z: targetWorld.z + 0.14,
            duration: 0.48,
            ease: "expo.inOut",
            onUpdate: () => {
              camera.lookAt(lookTarget);
              invalidate();
            },
          },
          0.04,
        )
        .to(
          camera,
          {
            fov: 18,
            duration: 0.48,
            ease: "expo.inOut",
            onUpdate: () => {
              camera.updateProjectionMatrix();
              invalidate();
            },
          },
          0.04,
        )
        .to(
          "[data-enter-overlay]",
          { autoAlpha: 1, duration: 0.2, ease: "power2.inOut" },
          0.34,
        );

      const skip = () => {
        enterTlRef.current?.progress(1);
      };

      window.addEventListener("pointerdown", skip, { once: true });
      window.addEventListener("keydown", skip, { once: true });

      return () => {
        window.removeEventListener("pointerdown", skip);
        window.removeEventListener("keydown", skip);
      };
    },
    {
      scope: containerRef,
      dependencies: [loginState.status, sceneHandle, reducedMotion],
    },
  );

  return { reducedMotion };
}
