# Plan de Ejecución — Login con Bolsín 3D (CU 5, mockeado)

> **Feature ID:** `login-bolsin-3d`
> **Flujo:** `spec-frontend-craft-flow` — Gate 3 (`todos.md`)
> **Rama:** `feature/frontend`
> **Specs:** [`functional-spec.md`](./functional-spec.md) · [`technical-spec.md`](./technical-spec.md)
> **Pieza central:** copia 3D fiel del bolsín del moodboard ([`ref-bolsin-moodboard.png`](../../../docs/referencias/login/ref-bolsin-moodboard.png)).

---

## Capa 1: Tokens, Dependencias y Layout Base

- [ ] **`[L-01]` Instalar dependencias 3D**
  - **Archivos:** `package.json`, `package-lock.json`
  - **Detalle:** `three@0.187.0`, `@react-three/fiber@9.8.2`, `@react-three/drei@10.7.9` y, en dev, `@types/three@0.187.0`, con versión exacta.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** `npm run typecheck` y `npm run build` sin errores.

- [ ] **`[L-02]` Tokens del manual v2.0 en CSS**
  - **Archivos:** `src/app/globals.css`, `src/lib/cn.ts`
  - **Detalle:** Copiar los bloques `@theme`, `@theme inline` y `:root` de la §10 del manual, más los tokens propios del login (§1 de la spec técnica), la capa de grano (`body::before`) y los `@keyframes` base. `cn()` con `clsx` + `tailwind-merge`.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** Clases `bg-canvas`, `bg-surface`, `text-ink`, `bg-cobalt`, `bg-lime`, `font-display`, `font-mono`, `rounded-card`, `shadow-key-cobalt` generan CSS.

- [ ] **`[L-03]` Fuentes, viewport y redirección raíz**
  - **Archivos:** `src/app/layout.tsx`, `src/app/page.tsx`
  - **Detalle:** `next/font/google` con las 4 familias y sus variables (`--font-space-grotesk`, `--font-plus-jakarta`, `--font-instrument-serif` con `weight: "400"` y `style: "italic"`, `--font-jetbrains-mono`); `viewport.interactiveWidget = "resizes-content"`; `/` hace `redirect("/inicio")`.
  - **Depends on:** `[L-02]` | **Parallelizable:** `false`
  - **Criterio de salida:** Las 4 familias se aplican; el fondo es `surface`/`canvas` con grano, nunca blanco puro.

---

## Capa 2: Lógica, Mock y Componentes de Interfaz

- [ ] **`[L-04]` Contrato y mock de autenticación**
  - **Archivos:** `src/dtos/auth.dto.ts`, `src/services/auth/mock-users.ts`, `src/services/auth/session-cookie.ts`, `src/app/api/auth/login/route.ts`, `src/app/api/auth/logout/route.ts`, `tests/auth.dto.test.ts`, `tests/auth-route.test.ts`
  - **Detalle:** Schemas Zod del contrato; respuestas `200` / `400` / `401` / `503` con latencia de `600–900ms`; cookie `bolsines_sesion` httpOnly; logout borra la cookie.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** Tests de los 4 casos y de la cookie en verde.

- [ ] **`[L-05]` Protección de rutas con `proxy.ts`**
  - **Archivos:** `src/proxy.ts`, `tests/proxy.test.ts`
  - **Detalle:** Sin cookie → `/login`; con cookie en `/login` → `/inicio`; `matcher` que excluye estáticos, `models/` y `api/auth/`.
  - **Depends on:** `[L-04]` | **Parallelizable:** `true`
  - **Criterio de salida:** Tests de las dos redirecciones y de una ruta excluida en verde.

- [ ] **`[L-06]` Máquina de estados `useLoginFlow`**
  - **Archivos:** `src/hooks/useLoginFlow.ts`, `tests/login-flow.test.ts`
  - **Detalle:** Reducer puro con `idle | submitting | invalid | rejected | unreachable | entering`; `submit()` valida con Zod antes de la red y usa `AbortController`; `rejected` limpia la contraseña.
  - **Depends on:** `[L-04]` | **Parallelizable:** `true`
  - **Criterio de salida:** Test de cada transición en verde.

- [ ] **`[L-07]` Primitivas de interfaz**
  - **Archivos:** `src/components/ui/actions/Button.tsx`, `src/components/ui/forms/Field.tsx`, `src/components/ui/forms/Input.tsx`, `src/components/ui/forms/PasswordInput.tsx`, `src/components/layout/BrandMark.tsx`
  - **Detalle:** Según la §6 del manual: `Button` keycap con variantes, tamaños y `loading`; `Field` con label micro-mono y error `aria-describedby`; `Input` de `44px`; `PasswordInput` con `aria-pressed`; `BrandMark` con isotipo keycap "B" en Elite Blue y wordmark.
  - **Depends on:** `[L-02]` | **Parallelizable:** `true`
  - **Criterio de salida:** Estados `hover`, `active`, `focus-visible`, `disabled`, `invalid` y `loading` visibles; contrastes de la tabla §2.3 del manual.

- [ ] **`[L-08]` Pantalla `/login` y página temporal `/inicio`**
  - **Archivos:** `src/app/login/page.tsx`, `src/components/login/LoginView.tsx`, `src/components/login/LoginForm.tsx`, `src/components/login/LoginStage.tsx`, `src/app/inicio/page.tsx`
  - **Detalle:** Layout dividido (`≥ 1024px`) y apilado (`< 1024px`) de la §4 de la spec técnica, con el stage vacío (todavía sin 3D); formulario conectado a `useLoginFlow`; mensajes de A1, A2 y A3; `/inicio` muestra empleado y CM de la sesión con botón _Cerrar sesión_.
  - **Depends on:** `[L-03]`, `[L-05]`, `[L-06]`, `[L-07]` | **Parallelizable:** `false`
  - **Criterio de salida:** Login con `mgomez` / `bolsines` llega a `/inicio`; los usuarios `error` y uno inválido muestran sus mensajes; cerrar sesión vuelve a `/login`.

---

## Capa 3: El Bolsín 3D (copia del moodboard)

- [ ] **`[L-09]` Modelo procedural fiel al moodboard**
  - **Archivos:** `src/components/login/bolsin3d/BolsinProcedural.tsx`, `src/components/login/bolsin3d/bolsin-nodes.ts`
  - **Detalle:** Construir el bolsín pieza por pieza siguiendo la tabla _Referencia de fidelidad_ de la spec técnica: cuerpo acolchado muy redondeado (`1.45 : 1 : 0.9`); tapa en dos mitades (`Lid_L` / `Lid_R`) con alero frontal y lateral; cremallera de dientes instanciados de atrás hacia adelante; tirador plateado con lengüeta lima y cordón con anilla; dos correas lima con hebillas lima; parches lima + gris abajo a la izquierda; testas laterales con costura y argolla en D plateada; interior tinta. Materiales de la §1 (tela con `sheen`). Pivotes de las tapas sobre la línea del cierre. `bolsin-nodes.ts` define el tipo `BolsinNodes` y la validación del contrato.
  - **Depends on:** `[L-01]` | **Parallelizable:** `true`
  - **Criterio de salida:** Captura de la escena en el ángulo tres cuartos del moodboard, puesta al lado de `ref-bolsin-moodboard.png`: están **todos** los elementos de la tabla en su lugar y proporción. Rotar `Lid_L` / `Lid_R` abre la boca y muestra el interior sin que las piezas se atraviesen.

- [ ] **`[L-10]` Escena, carga diferida y respaldo**
  - **Archivos:** `src/components/login/bolsin3d/BolsinScene.tsx`, `src/lib/webgl.ts`, `src/components/login/LoginStage.tsx`
  - **Detalle:** `<Canvas>` con cámara, `Environment` de `Lightformer` locales (sin descargas), `ContactShadows`, `dpr [1, 2]`, frameloop según visibilidad; `next/dynamic({ ssr: false })`; detección de WebGL; fundido póster → canvas al `onReady`; descarte de la escena si el primer frame tarda más de `2.5s`. `BOLSIN_MODEL_SOURCE = "procedural"`.
  - **Depends on:** `[L-08]`, `[L-09]` | **Parallelizable:** `false`
  - **Criterio de salida:** El bolsín aparece en el stage en desktop y mobile; sin WebGL queda el póster; ninguna petición de red a CDNs de HDR.

- [ ] **`[L-11]` Póster estático del bolsín**
  - **Archivos:** `public/models/bolsin-poster.webp`
  - **Detalle:** Capturar la escena (fondo transparente sobre canvas, mismo encuadre que el stage) a `1200×1200` y exportar a WebP.
  - **Depends on:** `[L-10]` | **Parallelizable:** `true`
  - **Criterio de salida:** Archivo ≤ `60 KB`; el cambio póster → 3D no produce saltos de posición ni de tamaño.

---

## Capa 4: Coreografía GSAP

- [ ] **`[L-12]` Entrada, reposo y micro-interacciones**
  - **Archivos:** `src/components/login/bolsin3d/useBolsinChoreography.ts`, `src/components/login/LoginView.tsx`, `src/components/login/LoginForm.tsx`
  - **Detalle:** §5.1 (caída del bolsín + entrada escalonada del formulario), §5.2 (flotación y giro, pausados con la pestaña oculta) y §5.3 (mirar al formulario con el foco, tirador durante el envío, gesto de "no" en A2), todo dentro de `gsap.matchMedia()`.
  - **Depends on:** `[L-10]` | **Parallelizable:** `false`
  - **Criterio de salida:** El formulario se puede usar desde el primer instante; el foco inicial está en Usuario; ninguna animación bloquea clics.

- [ ] **`[L-13]` Entrada al bolsín al iniciar sesión**
  - **Archivos:** `src/components/login/bolsin3d/useBolsinChoreography.ts`, `src/components/login/EnterTransition.tsx`, `src/components/login/LoginView.tsx`, `src/app/inicio/page.tsx`
  - **Detalle:** Timeline `enter` de la §5.4: el cierre se abre, las tapas giran, el formulario sale, la cámara entra hasta `Camera_Target`, el overlay tinta cubre la pantalla y se hace `router.replace("/inicio")`. Salteable con `pointerdown` / `keydown`. `router.prefetch("/inicio")` al montar. Entrada de `/inicio` desde tinta.
  - **Depends on:** `[L-12]` | **Parallelizable:** `false`
  - **Criterio de salida:** Duración total ≤ `1.4s`; saltear la completa al instante; sin parpadeos blancos entre el overlay y `/inicio`.

- [ ] **`[L-14]` Movimiento reducido**
  - **Archivos:** `src/components/login/bolsin3d/useBolsinChoreography.ts`, `src/components/login/bolsin3d/BolsinScene.tsx`
  - **Detalle:** Rama `reduce` de la §5.5: escena con `frameloop="demand"` y un solo cuadro, sin movimiento del bolsín, éxito con fundido tinta de `0.2s`.
  - **Depends on:** `[L-13]` | **Parallelizable:** `false`
  - **Criterio de salida:** Con _Emular prefers-reduced-motion_ en DevTools no hay movimiento y el login funciona igual.

---

## Capa 5: Pulido y Responsive

- [ ] **`[L-15]` Ajuste fino visual y mobile**
  - **Archivos:** `src/app/globals.css`, `src/components/login/LoginView.tsx`, `src/components/login/LoginStage.tsx`
  - **Detalle:** Grano y bordes fantasma; encuadre del bolsín en desktop, tablet vertical y mobile (`360px`); con el teclado virtual abierto el stage pasa a `24dvh` y el CTA sigue visible; `safe-area-inset`.
  - **Depends on:** `[L-14]` | **Parallelizable:** `false`
  - **Criterio de salida:** Sin scroll horizontal en `360px`; el bolsín nunca queda cortado; comparación visual con las referencias de login desktop y mobile.

---

## Capa 6: Auditoría a11y, Reduced Motion y Build

- [ ] **`[L-16]` Verificación integral**
  - **Archivos:** `—` (verificación sobre `src/`)
  - **Detalle:** Recorrido solo con teclado (Tab, Enter, saltear transición); lector de pantalla anuncia errores (`role="alert"`) y el estado de carga; canvas y póster `aria-hidden`; presupuesto de escena (≤ 60 draw calls, ≤ 30k triángulos con `renderer.info`); `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build`.
  - **Depends on:** `[L-15]` | **Parallelizable:** `false`
  - **Criterio de salida:** Todos los checks en verde y el flujo completo funcionando en desktop y mobile.

---

## Fase 2 (fuera de esta entrega): Bolsín GLB

- [ ] **`[L-17]` Modelo GLB del moodboard**
  - **Archivos:** `assets-src/bolsin.src.blend` (fuera de `public/`), `public/models/bolsin.glb`, `src/components/login/bolsin3d/BolsinGlb.tsx`
  - **Detalle:** Modelar en Blender respetando la tabla de fidelidad y los nombres de nodo de la §2; optimizar con `@gltf-transform/cli` (meshopt + texturas WebP ≤ `1024px`); `BolsinGlb` valida el contrato y cae a `BolsinProcedural` si falta un nodo; cambiar `BOLSIN_MODEL_SOURCE` a `"glb"` y regenerar el póster.
  - **Depends on:** `[L-16]` | **Parallelizable:** `—`
  - **Criterio de salida:** `.glb` ≤ `400 KB`; las timelines funcionan sin cambios.
