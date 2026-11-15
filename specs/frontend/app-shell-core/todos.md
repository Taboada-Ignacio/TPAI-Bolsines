# Plan de Ejecución — Núcleo de la App en Islas

> **Feature ID:** `app-shell-core`
> **Flujo:** `spec-frontend-craft-flow` — Gate 3 (`todos.md`)
> **Rama:** `feature/frontend`
> **Specs:** [`functional-spec.md`](./functional-spec.md) · [`technical-spec.md`](./technical-spec.md)
> **Regla transversal:** toda tarea se da por terminada solo si funciona en **tema claro y oscuro**.

---

## Capa 1: Tokens, Temas y Layout Base

- [x] **`[S-01]` Manual de marca v2.1**
  - **Archivos:** `docs/brand-guidelines.md`, `docs/cerebro/nodos/PPAI-UX-MANUAL-MARCA.md`, `AGENTS.md`
  - **Detalle:** Reemplazar "sin modo oscuro" por el sistema de temas (§1 de la spec técnica: tokens semánticos claro/oscuro y contrastes); reescribir la §5 (App Shell) como islas; agregar el nivel de motion "firma" a la §7; actualizar la §10 con los tokens nuevos. Regenerar el grafo del cerebro.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** El manual no contradice a esta spec; `python scripts/generate_graph.py` corre sin errores.

- [x] **`[S-02]` Tokens claro/oscuro, geometría y grano**
  - **Archivos:** `src/app/globals.css`, `src/lib/cn.ts`
  - **Detalle:** Variables de `:root` para claro, bloque oscuro (por `prefers-color-scheme` y por `data-theme`), `@theme inline` con los colores semánticos, variables de geometría (`--isle-gap`, `--side-w`, `--shell-*`…), `@custom-variant dark`, capa de grano animada, `@media (prefers-reduced-motion)`. `cn()` con `clsx` + `tailwind-merge`.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** `bg-canvas`, `bg-glass`, `text-fg`, `text-muted`, `border-edge`, `bg-lime`, `text-accent` generan CSS y cambian al alternar `data-theme` a mano en DevTools.

- [x] **`[S-03]` Fuentes, tema sin parpadeo y sesión actual**
  - **Archivos:** `src/app/layout.tsx`, `src/lib/theme.ts`, `src/services/auth/sesion-actual.ts`, `tests/theme.test.ts`, `tests/sesion-actual.test.ts`
  - **Detalle:** `next/font` con las 4 familias; `RootLayout` lee `bolsines_tema` y escribe `data-theme`; `getSesionActual()` con sesión demo de Marcelo y derivación de sigla.
  - **Depends on:** `[S-02]` | **Parallelizable:** `false`
  - **Criterio de salida:** Recargar con tema oscuro elegido no muestra un cuadro en claro; tests en verde.

---

## Capa 2: Componentes y Estructura

- [x] **`[S-04]` Navegación como dato**
  - **Archivos:** `src/lib/navigation.ts`, `src/hooks/useDestinoActivo.ts`, `tests/navigation.test.ts`
  - **Detalle:** `DESTINOS` (Inicio, Seguimiento), función de destino activo y reparto píldora / "Más".
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** Tests de coincidencia exacta, subruta y reparto en verde.

- [x] **`[S-05]` Primitivas de interfaz**
  - **Archivos:** `src/components/ui/surfaces/Island.tsx`, `src/components/ui/surfaces/Sheet.tsx`, `src/components/ui/actions/IconButton.tsx`, `src/components/ui/display/SplitFlap.tsx`, `src/components/ui/display/MicroLabel.tsx`, `src/components/ui/display/Marker.tsx`, `src/components/ui/display/BoardRow.tsx`, `src/components/ui/feedback/Skeleton.tsx`, `src/components/layout/BrandMark.tsx`
  - **Detalle:** Según §3.2 y §4 de la spec técnica. `SplitFlap` adaptado del kit Rumbo (`C:/Users/pepep/OCHO/recursos/ui/rumbo-craft-kit/SplitFlap.tsx`) a los tokens `mech` / `lime`. `Sheet` sobre `<dialog>`.
  - **Depends on:** `[S-02]` | **Parallelizable:** `true`
  - **Criterio de salida:** Cada primitiva se ve correcta en claro y oscuro, con `hover`, `active` y `focus-visible`.

- [x] **`[S-06]` Isla lateral y píldora inferior**
  - **Archivos:** `src/components/layout/SideIsland.tsx`, `src/components/layout/DockPill.tsx`, `src/components/layout/UserMenu.tsx`, `src/components/layout/MoreSheet.tsx`
  - **Detalle:** Isla `fixed` con `--isle-gap`, borde 1px, sin sombra; abre con hover (puntero fino), `:focus-within` o botón fijar. Píldora flotante centrada con ícono + nombre y **Más**. Gota lima presente pero todavía sin animación (posición directa). Menú de usuario y hoja "Más" con cierre de sesión.
  - **Depends on:** `[S-04]`, `[S-05]` | **Parallelizable:** `true`
  - **Criterio de salida:** En `md+` solo se ve la isla; en mobile solo la píldora; `aria-current` correcto; todo operable con teclado.

- [x] **`[S-07]` Islas superiores y cambio de tema**
  - **Archivos:** `src/components/layout/IdentityIsland.tsx`, `src/components/layout/ActionsIsland.tsx`, `src/components/layout/PageActions.tsx`, `src/components/layout/ThemeToggle.tsx`
  - **Detalle:** Isla de identidad con `SplitFlap` de la sigla, rótulo de CM y título según `DESTINOS`; isla de acciones con slot de portal, `ThemeToggle` (atributo + cookie + `theme-color`) y usuario en mobile.
  - **Depends on:** `[S-03]`, `[S-05]` | **Parallelizable:** `true`
  - **Criterio de salida:** El tema cambia al instante, persiste al recargar y respeta el del dispositivo si no hay elección.

- [x] **`[S-08]` `AppShell`, área de pantallas y rutas**
  - **Archivos:** `src/components/layout/AppShell.tsx`, `src/components/layout/PageBody.tsx`, `src/components/layout/PageHeading.tsx`, `src/components/layout/SkipLink.tsx`, `src/app/(app)/layout.tsx`, `src/app/(app)/inicio/page.tsx`, `src/app/(app)/seguimiento/page.tsx`, `src/app/(app)/loading.tsx`, `src/app/(app)/error.tsx`, `src/app/(app)/not-found.tsx`, `src/app/(app)/[...resto]/page.tsx`, `src/app/page.tsx`
  - **Detalle:** Composición del núcleo; `PageBody` `padded` / `bleed` con las variables `--shell-*`; Inicio con saludo gigante, marcador y tablero de destinos; Seguimiento a sangre con su isla de aviso y una acción de ejemplo vía `PageActions`; estados de carga, error y 404 dentro del núcleo; `/` redirige a `/inicio`.
  - **Depends on:** `[S-06]`, `[S-07]` | **Parallelizable:** `false`
  - **Criterio de salida:** Se navega entre Inicio y Seguimiento sin que las islas se desmonten; una ruta inexistente muestra el 404 dentro del núcleo; el contenido nunca queda tapado por una isla.

---

## Capa 3: Coreografía GSAP

- [x] **`[S-09]` Gota líquida**
  - **Archivos:** `src/hooks/useLiquidIndicator.ts`, `src/components/layout/SideIsland.tsx`, `src/components/layout/DockPill.tsx`
  - **Detalle:** §5.2: viaje con `expo.out` y `keyframes` de estiramiento; `ResizeObserver` y recolocación al cargar fuentes; primera colocación instantánea.
  - **Depends on:** `[S-08]` | **Parallelizable:** `true`
  - **Criterio de salida:** La gota viaja y se estira en ambas navegaciones; no queda desalineada al redimensionar ni al abrir la isla.

- [x] **`[S-10]` Cortina del contenido, solapas e islas**
  - **Archivos:** `src/app/(app)/template.tsx`, `src/components/layout/IdentityIsland.tsx`, `src/components/layout/MoreSheet.tsx`, `src/components/layout/UserMenu.tsx`
  - **Detalle:** §5.3 (cortina `clip-path` + `data-reveal` con stagger), §5.4 (giro del `SplitFlap` y título), §5.6 (hoja y menú).
  - **Depends on:** `[S-08]` | **Parallelizable:** `true`
  - **Criterio de salida:** Cada cambio de pestaña reproduce cortina y giro; el contenido se puede clicar durante la animación.

- [x] **`[S-11]` Entrada desde el login y movimiento reducido**
  - **Archivos:** `src/components/layout/EnterCurtain.tsx`, `src/components/layout/AppShell.tsx`, `src/app/(app)/layout.tsx`
  - **Detalle:** §5.7 con la cookie efímera `bolsines_entrada` (se puede probar creándola a mano); §5.9 para `reduce` en todas las timelines.
  - **Depends on:** `[S-09]`, `[S-10]` | **Parallelizable:** `false`
  - **Criterio de salida:** Con la cookie, la persiana se levanta sin que se vea la app antes; sin la cookie, todo aparece armado; con movimiento reducido no hay animaciones.

---

## Capa 4: Pulido Craft y Responsive

- [x] **`[S-12]` Ajuste fino en tres tamaños y dos temas**
  - **Archivos:** `src/app/globals.css`, `src/components/layout/*.tsx`
  - **Detalle:** Comparar contra la maqueta `app-shell-islas-b72e.html`; revisar `360px`, `768px`, `1280px` y `1440px`; `safe-area-inset`; ocultar la píldora con el teclado virtual; borde del lima en claro; grano; transición de tema de `0.25s`.
  - **Depends on:** `[S-11]` | **Parallelizable:** `false`
  - **Criterio de salida:** Sin scroll horizontal ni islas superpuestas entre sí en ningún tamaño; ambos temas coinciden con la maqueta.

---

## Capa 5: Auditoría a11y y Build

- [ ] **`[S-13]` Verificación integral**
  - **Archivos:** `—` (verificación sobre `src/`)
  - **Detalle:** Recorrido solo con teclado (saltar al contenido, isla, islas superiores, hoja, menú, `Esc`); foco a `<main>` al navegar; contraste en ambos temas; `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build`.
  - **Depends on:** `[S-12]` | **Parallelizable:** `false`
  - **Criterio de salida:** Todos los checks en verde.
