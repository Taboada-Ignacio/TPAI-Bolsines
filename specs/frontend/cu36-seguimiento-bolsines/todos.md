# Plan de Ejecución Frontend — Seguimiento de Bolsines (CU 36 + CU 30/31)

> **Feature ID:** `cu36-seguimiento-bolsines`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 3 (`todos.md`)  
> **Rama:** `feature/frontend`

---

## Capa 1: Tokens, Dependencias y Layout Base

- [ ] **`[F-01]` Inicializar dependencias frontend en `feature/frontend`**
  - **Archivos:** `package.json`, `postcss.config.mjs`
  - **Detalle:** Traer la base de configuración de `feature/backend` (o alinear `package.json`) e instalar `tailwindcss`, `@tailwindcss/postcss`, `gsap`, `@gsap/react`, `lucide-react` y `clsx`/`tailwind-merge`.
  - **Depends on:** `—` | **Parallelizable:** `false`
  - **Criterio de salida:** `npm run typecheck` y `npm run build` ejecutan sin errores.

- [ ] **`[F-02]` Configurar Design Tokens y Film Grain en CSS**
  - **Archivos:** `src/app/globals.css`, `src/lib/cn.ts`, `src/lib/formatters.ts`
  - **Detalle:** Definir `@theme` con `#C7D1DD` (Blue Mist), `#EEF2F6` (Surface), `#0251B0` (Elite Blue), `#D1FF42` (Volt Lime), `#073B31` (Forest), sombras 3D y `--grain-svg`.
  - **Depends on:** `[F-01]` | **Parallelizable:** `true`
  - **Criterio de salida:** Clases utilitarias (`bg-canvas`, `bg-cobalt`, `bg-lime`, `font-display`, `font-mono`) disponibles en Tailwind v4.

- [ ] **`[F-03]` Configurar Tipografía Dual y Shell Raíz**
  - **Archivos:** `src/app/layout.tsx`, `src/app/page.tsx`
  - **Detalle:** Cargar `Space Grotesk`, `Plus Jakarta Sans`, `Instrument Serif` y `JetBrains Mono` vía `next/font/google`, aplicar fondo `bg-canvas` + overlay `Film Grain` y redirección base.
  - **Depends on:** `[F-02]` | **Parallelizable:** `false`
  - **Criterio de salida:** Tipografías activas en variables CSS y layout renderizando sin blanco clínico.

---

## Capa 2: Primitivas UI, Lógica de Dominio y Vistas

- [ ] **`[F-04]` Primitivas de Acción, Superficie y Display (`ui/`)**
  - **Archivos:** `src/components/ui/actions/Button.tsx`, `src/components/ui/surfaces/Card.tsx`, `src/components/ui/display/SplitFlap.tsx`
  - **Detalle:** Botones 3D táctiles (`primary` Elite Blue, `lime` Volt Lime, `ghost`, `danger`), tarjetas `surface` / `frosted` y tablero `SplitFlap` con flip en `#D1FF42`.
  - **Depends on:** `[F-02]` | **Parallelizable:** `true`
  - **Criterio de salida:** Componentes autocontenidos (1 `.tsx` cada uno) con estados `hover`, `active` y `focus-visible`.

- [ ] **`[F-05]` Primitivas de Formulario y Feedback (`ui/`)**
  - **Archivos:** `src/components/ui/forms/Input.tsx`, `src/components/ui/forms/Select.tsx`, `src/components/ui/feedback/Badge.tsx`, `src/components/ui/feedback/EmptyState.tsx`, `src/components/ui/feedback/Modal.tsx`
  - **Detalle:** Badges semánticos (`En Tránsito`, `Entregado`, `GPS Sin Respuesta`), estados vacíos A1/A2 y modal accesible con `Esc` y trap de foco.
  - **Depends on:** `[F-02]` | **Parallelizable:** `true`
  - **Criterio de salida:** Todos los controles cumplen contraste WCAG AA sobre `#C7D1DD` y `#EEF2F6`.

- [ ] **`[F-06]` Hook de Estado Maestro-Detalle y Navegación**
  - **Archivos:** `src/hooks/useSeguimientoBolsines.ts`
  - **Detalle:** Filtrado en vivo por precinto y CM destino, selección con atajos `j`/`k`/`Esc`, cancelación de fetches GPS con `AbortController`, y sync de URL (`?bolsin=...`) con `history.replaceState`.
  - **Depends on:** `[F-01]` | **Parallelizable:** `true`
  - **Criterio de salida:** Navegación por teclado fluida sin race conditions de red.

- [ ] **`[F-07]` Módulos de Dominio CU 36 (`seguimiento/` y `layout/`)**
  - **Archivos:** `src/components/layout/Topbar.tsx`, `src/components/seguimiento/filters/BolsinFilters.tsx`, `src/components/seguimiento/list/BolsinCard.tsx`, `src/components/seguimiento/list/BolsinList.tsx`, `src/components/seguimiento/map/BolsinesMap.tsx`, `src/components/seguimiento/detail/BolsinDetailPanel.tsx`, `src/components/seguimiento/notifications/NotifyGcmModal.tsx`
  - **Detalle:** Layout Two-Panel + patrón `Costado` *frosted glass*, indicadores A3 de GPS sin cobertura y modal de confirmación CU 30/31.
  - **Depends on:** `[F-04]`, `[F-05]`, `[F-06]` | **Parallelizable:** `false`
  - **Criterio de salida:** Flujo completo navegable con datos tipados y estados A1, A2, A3 cubiertos.

- [ ] **`[F-08]` Vistas `/login` y `/seguimiento`**
  - **Archivos:** `src/app/login/page.tsx`, `src/app/seguimiento/page.tsx`
  - **Detalle:** Pantalla de acceso del Encargado de Bolsines y tablero principal de seguimiento en mapa.
  - **Depends on:** `[F-03]`, `[F-07]` | **Parallelizable:** `false`
  - **Criterio de salida:** Rutas funcionales integradas con el layout y el hook principal.

---

## Capa 3: Coreografía de Animaciones GSAP

- [ ] **`[F-09]` Implementar Timelines GSAP con `gsap.matchMedia()`**
  - **Archivos:** `src/app/seguimiento/page.tsx`, `src/components/seguimiento/list/BolsinList.tsx`, `src/components/seguimiento/detail/BolsinDetailPanel.tsx`, `src/components/seguimiento/notifications/NotifyGcmModal.tsx`
  - **Detalle:** Entrada escalonada (`stagger: 0.04s`, `0.24s`), deslizamiento del panel `Costado` (`0.22s`, `power3.out`), modal CU 30/31 (`0.18s`) y fallback instantáneo para `(prefers-reduced-motion: reduce)`.
  - **Depends on:** `[F-08]` | **Parallelizable:** `false`
  - **Criterio de salida:** Animaciones de `100ms–280ms` fluidas en GPU (`autoAlpha`, `x`, `y`, `scale`) sin bloquear clics.

---

## Capa 4: Pulido Craft & Responsividad

- [ ] **`[F-10]` Ajuste Visual, Tablet & Micro-detalles**
  - **Archivos:** `src/app/globals.css`, `src/components/seguimiento/list/BolsinList.tsx`, `src/components/seguimiento/detail/BolsinDetailPanel.tsx`
  - **Detalle:** Verificación de bordes fantasma (`1px`), contraste *frosted glass*, `@container` queries en lista y áreas táctiles cómodas para tablet en depósito.
  - **Depends on:** `[F-09]` | **Parallelizable:** `false`
  - **Criterio de salida:** Sin desbordamientos horizontales ni pérdida de legibilidad en desktop y tablet.

---

## Capa 5: Auditoría a11y, Reduced-Motion y Build

- [ ] **`[F-11]` Verificación Integral de Calidad y Accesibilidad**
  - **Archivos:** `—` (verificación sobre todo `src/`)
  - **Detalle:** Prueba de teclado (`j`/`k`/`Esc`/`Tab`), `inert` en panel cerrado, `aria-live` en filtros/notificaciones, y ejecución de `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test:run` y `npm run build`.
  - **Depends on:** `[F-10]` | **Parallelizable:** `false`
  - **Criterio de salida:** Todos los checks verdes y cero errores de compilación o accesibilidad.
