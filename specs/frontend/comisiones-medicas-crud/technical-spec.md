# Technical Spec — Comisiones Médicas (CRUD) & Sheets Reutilizables

**Feature ID:** `comisiones-medicas-crud`  
**Stack:** Next.js 16.4.6 (App Router) · React 19.3.1 · Tailwind CSS v4 · GSAP 3.15.1 (`@gsap/react`) · Zod 4.6.7 · Lucide React

---

## 1. Design Tokens & System

Todos los componentes consumen exclusivamente los tokens semánticos ya definidos en `src/app/globals.css` (soporte automático para tema claro y oscuro):

- **Tipografía:**
  - `--font-display` (`Space Grotesk`): títulos de página, encabezados de sheets, nombres de comisiones.
  - `--font-sans` (`Plus Jakarta Sans`): direcciones, textos de soporte, mensajes de confirmación.
  - `--font-mono` (`JetBrains Mono`): códigos (`CM-CBA`), `SplitFlap`, email, teléfono, etiquetas `MicroLabel` y controles numéricos del paginado.
- **Superficies y bordes:**
  - `--surface` / `--raised` para fondos de tarjetas en mobile y sheets.
  - `--edge` (`1px solid`) para bordes de tarjetas mobile, `SideSheet` y `BottomSheet` (sin sombras pesadas).
  - `--hair` (`1px solid`) para divisores entre filas en desktop y separadores internos.
- **Acentos y estados:**
  - `--lime` + `--on-lime` para el CTA principal **"Nueva comisión"** (`rounded-full`) y página activa en el paginado.
  - `--primary` (`cobalt`) para guardar formularios y anillos de foco (`focus-visible:outline-accent`).
  - `--danger` / `--danger-ink` para confirmación de baja y errores de validación / conflicto `409`.
- **Radios clave:**
  - Buscador y botón **"Nueva comisión"**: `rounded-full` (`999px`).
  - Cards en mobile: `rounded-[18px]` (`border border-edge bg-raised/55`).
  - `SideSheet` (desktop): `rounded-[var(--isle-r)]` (`24px`), flotando con margen `m-2.5` respecto al borde derecho.
  - `BottomSheet` (mobile): `rounded-t-[24px]`.

---

## 2. Component Architecture & State

### 2.1 Superficies reutilizables (`src/components/ui/surfaces/`)

1. **`BottomSheet.tsx`** *(generalización del `Sheet` actual)*
   - Props: `{ open, onClose, labelledBy, children, className?, panelRef? }`
   - `<dialog>` nativo con `showModal()` / `close()`, cierre por `Escape`, clic en backdrop y gesto táctil `swipe down > 60px`.
   - `Sheet.tsx` re-exporta `BottomSheet` como `Sheet` para mantener compatibilidad con `MoreSheet.tsx`.

2. **`SideSheet.tsx`** *(nuevo, general para desktop)*
   - Props: `{ open, onClose, labelledBy, children, className?, panelRef? }`
   - `<dialog>` nativo con `open:flex open:items-stretch open:justify-end`.
   - Panel derecho: `w-full max-w-[440px] m-3 rounded-[var(--isle-r)] border border-edge bg-surface text-fg flex flex-col overflow-hidden`.
   - Contenido interno con `overflow-y-auto` para soportar formularios largos sin desbordar `100dvh`.

3. **`ResponsiveSheet.tsx`** *(adaptador general mobile/desktop)*
   - Usa un hook `useMediaQuery("(min-width: 768px)")` basado en `useSyncExternalStore` (sin mismatch de hidratación SSR).
   - Renderiza `<SideSheet>` cuando `isDesktop === true` y `<BottomSheet>` en caso contrario.

### 2.2 Paginación reutilizable (`src/components/ui/navigation/Pagination.tsx`)

- Props: `{ page: number; totalPages: number; totalItems: number; pageSize: number; onPageChange: (page: number) => void; className?: string }`
- Calcula rango visible (`inicio–fin de totalItems`).
- Botones Anterior / Siguiente (`IconButton` o `Button` `rounded-full`) + botones de página con `aria-current="page"` en la página activa (`bg-lime text-on-lime font-semibold`).
- Se oculta automáticamente si `totalPages <= 1` (pero mantiene el contador de sedes arriba).

### 2.3 Módulo Comisiones Médicas (`src/components/comisiones-medicas/`)

- **`ComisionesMedicasView.tsx`** (`"use client"`):
  - **Estado cliente:**
    - `comisiones: ComisionMedica[]` (inicializado con `COMISIONES_MEDICAS_SEED`).
    - `busqueda: string` (al cambiar, resetea `page` a `1`).
    - `page: number` (`PAGE_SIZE = 8`, ajustada automáticamente si `page > totalPages` tras eliminar).
    - `formOpen: boolean`, `editando: ComisionMedica | null`, `eliminando: ComisionMedica | null`.
    - `isLoading: boolean` (opcional para transición al conectar API real; skeleton listo).
  - **Layout responsivo de ítems:**
    - **Mobile (`< 640px`):** `grid-cols-1 gap-3` de **cards** (`rounded-[18px] border border-edge bg-raised/50 p-4`), con cabecera (`SplitFlap` + código + acciones) y cuerpo (nombre, dirección, email, teléfono).
    - **Desktop (`>= 640px`):** filas continuas estilo tablero (`border-b border-hair px-2.5 py-4 hover:bg-hover`) con `SplitFlap` a la izquierda, datos al centro y acciones a la derecha.
  - **Buscador y CTA:**
    - `Input` con `rounded-full` (`h-11 pl-10 pr-9`), ícono `Search` y botón limpiar `X`.
    - `Button` **"Nueva comisión"** con `variant="lime"` y `className="rounded-full text-on-lime"`.
  - **Formularios dentro de `ResponsiveSheet`:**
    - Crear / Editar (`POST` / `PUT` DTO): validación con `comisionMedicaEntradaSchema` + chequeo de código duplicado (`409`).
    - Confirmación Eliminar (`DELETE`): manejo de error `general` por conflicto si el servidor responde `409`.

---

## 3. GSAP Motion Choreography

- **Entrada de lista / cards:**
  - `gsap.from("[data-cm-item]", { y: 10, autoAlpha: 0, duration: 0.35, stagger: 0.04, ease: "power3.out", clearProps: "transform,opacity,visibility" })` al montar o cambiar de página.
- **BottomSheet (mobile):**
  - `gsap.fromTo(panel, { yPercent: 100 }, { yPercent: 0, duration: 0.42, ease: "expo.out", clearProps: "transform" })`.
- **SideSheet (desktop):**
  - `gsap.fromTo(panel, { xPercent: 100, autoAlpha: 0.6 }, { xPercent: 0, autoAlpha: 1, duration: 0.42, ease: "expo.out", clearProps: "transform,opacity,visibility" })`.
- **Reduced Motion Fallback:**
  - Todo bloque GSAP envuelto en `gsap.matchMedia()` con condición `(prefers-reduced-motion: reduce)` que ejecuta `gsap.set(..., { xPercent: 0, yPercent: 0, autoAlpha: 1 })` de forma inmediata (`duration: 0`).

---

## 4. Accessibility (a11y) & Semantic Markup

- **Landmarks:** `<main id="contenido">` via `PageBody`, `<nav aria-label="Paginación">` en `Pagination`.
- **Modales (`BottomSheet` / `SideSheet`):** `<dialog>` nativo con `aria-labelledby`, foco atrapado por el navegador en `showModal()`, cierre por `Escape` y foco restaurado al elemento disparador al cerrar.
- **Paginado:** `aria-label="Página anterior"`, `aria-label="Página siguiente"`, `aria-current="page"` en el botón de la página actual, `disabled` explícito en los extremos.
- **Errores:** `aria-invalid` en `Input` y `role="alert"` en mensajes de error de `Field` y en el bloque de error general del sheet.
- **Tap targets:** Mínimo `40px × 40px` (`size-10` / `h-11`) en botones de acción, paginado y buscador.
