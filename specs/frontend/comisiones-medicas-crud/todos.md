# Plan de Tareas — Comisiones Médicas (CRUD) & Sheets Reutilizables

**Feature ID:** `comisiones-medicas-crud`

---

## Capa 1 — Superficies Reutilizables y Paginación

- [x] **[CM-01] Extraer `BottomSheet` general reutilizable y mantener alias `Sheet`**
  - **Archivos:** `src/components/ui/surfaces/BottomSheet.tsx`, `src/components/ui/surfaces/Sheet.tsx`
  - **Depends on:** Ninguna · **Parallelizable:** `true`
  - **Criterio de salida:** `BottomSheet` exporta el componente modal inferior con swipe-to-dismiss, animación GSAP y `prefers-reduced-motion`; `Sheet.tsx` re-exporta `BottomSheet` como `Sheet` sin romper `MoreSheet.tsx`.

- [x] **[CM-02] Crear `SideSheet` general reutilizable para desktop**
  - **Archivos:** `src/components/ui/surfaces/SideSheet.tsx`
  - **Depends on:** Ninguna · **Parallelizable:** `true`
  - **Criterio de salida:** `<dialog>` nativo anclado a la derecha en estilo isla (`rounded-[var(--isle-r)] border border-edge bg-surface`), scroll interno cuando el contenido excede la altura, cierre por `Escape`/backdrop y entrada GSAP desde `xPercent: 100` con respaldo `prefers-reduced-motion`.

- [x] **[CM-03] Crear `useMediaQuery` y `ResponsiveSheet` adaptativo**
  - **Archivos:** `src/hooks/useMediaQuery.ts`, `src/components/ui/surfaces/ResponsiveSheet.tsx`
  - **Depends on:** `[CM-01]`, `[CM-02]` · **Parallelizable:** `false`
  - **Criterio de salida:** `useMediaQuery` usa `useSyncExternalStore` sin errores de hidratación SSR; `ResponsiveSheet` renderiza `SideSheet` en `>= 768px` y `BottomSheet` en `< 768px`.

- [x] **[CM-04] Crear componente `Pagination` reutilizable**
  - **Archivos:** `src/components/ui/navigation/Pagination.tsx`
  - **Depends on:** Ninguna · **Parallelizable:** `true`
  - **Criterio de salida:** Renderiza `<nav aria-label="Paginación">` con botones Anterior/Siguiente, números de página (`aria-current="page"` en la activa con estilo `bg-lime text-on-lime`), rango actual (`X–Y de Z`) y estados deshabilitados en extremos.

---

## Capa 2 — Vista CRUD Comisiones Médicas & Estado

- [x] **[CM-05] Actualizar `ComisionesMedicasView` con cards en mobile, buscador/botón `rounded-full`, paginado y `ResponsiveSheet`**
  - **Archivos:** `src/components/comisiones-medicas/ComisionesMedicasView.tsx`
  - **Depends on:** `[CM-03]`, `[CM-04]` · **Parallelizable:** `false`
  - **Criterio de salida:**
    - Buscador y botón **"Nueva comisión"** con `rounded-full`.
    - En `< 640px`, cada comisión se renderiza como **card** (`rounded-[18px] border border-edge bg-raised/50 p-4`); en `>= 640px`, como fila de tablero.
    - Paginado activo (`PAGE_SIZE = 8`) sincronizado con el filtro de búsqueda y con ajuste automático al eliminar ítems.
    - Formularios Crear/Editar y confirmación Eliminar montados dentro de `ResponsiveSheet` (`SideSheet` en desktop, `BottomSheet` en mobile).

---

## Capa 3 — Coreografía GSAP y Pulido Visual

- [x] **[CM-06] Agregar animación de entrada GSAP a las cards/filas de `ComisionesMedicasView`**
  - **Archivos:** `src/components/comisiones-medicas/ComisionesMedicasView.tsx`
  - **Depends on:** `[CM-05]` · **Parallelizable:** `false`
  - **Criterio de salida:** Al montar y al cambiar de página, los ítems `[data-cm-item]` entran con stagger suave (`power3.out`) usando `gsap.matchMedia()` y fallback inmediato en `prefers-reduced-motion: reduce`.

- [x] **[CM-07] Pulido claro/oscuro, accesibilidad y tests unitarios**
  - **Archivos:** `tests/pagination.test.ts` (o lógica de paginación), verificación en `TPAI-Bolsines`
  - **Depends on:** `[CM-06]` · **Parallelizable:** `false`
  - **Criterio de salida:** `npm run typecheck`, `npm run lint` y `npm run test:run` pasan sin errores; contraste y bordes verificados en tema claro y oscuro.

- [x] **[CM-08] Conectar CRUD de Comisiones Médicas a la API real**
  - **Archivos:** `src/components/comisiones-medicas/ComisionesMedicasView.tsx`, `src/app/(app)/comisiones-medicas/page.tsx`
  - **Depends on:** `[CM-07]` · **Parallelizable:** `false`
  - **Criterio de salida:** Reemplazado `COMISIONES_MEDICAS_SEED` por lectura de `GET /api/comisiones-medicas`, alta con `POST /api/comisiones-medicas`, edición con `PUT /api/comisiones-medicas/[id]` y baja con `DELETE /api/comisiones-medicas/[id]`; estados `loading` (`Skeleton`), `error` recuperable, `saving`/`deleting` y errores HTTP (`400`, `409`, `404`) mostrados sin cerrar `ResponsiveSheet`, en tema claro/oscuro y voseo rioplatense.
