---
id: PPAI-UX-COMISIONES-CRUD
titulo: UX PPAI - Breadcrumb URL SplitFlap, Sheets Reutilizables y CRUD Comisiones Médicas
tipo: convencion
unidad: PPAI
categoria: UX
tags:
  [
    ux,
    ui,
    frontend,
    crud,
    comisiones-medicas,
    breadcrumb,
    split-flap,
    bottom-sheet,
    side-sheet,
    paginado,
    aprobado,
    nacho,
  ]
archivos_front:
  - TPAI-Bolsines/src/components/layout/IdentityIsland.tsx
  - TPAI-Bolsines/src/components/ui/display/SplitFlap.tsx
  - TPAI-Bolsines/src/components/ui/surfaces/BottomSheet.tsx
  - TPAI-Bolsines/src/components/ui/surfaces/SideSheet.tsx
  - TPAI-Bolsines/src/components/ui/surfaces/ResponsiveSheet.tsx
  - TPAI-Bolsines/src/components/ui/navigation/Pagination.tsx
  - TPAI-Bolsines/src/components/comisiones-medicas/ComisionesMedicasView.tsx
  - TPAI-Bolsines/src/app/(app)/comisiones-medicas/page.tsx
conectado_con:
  [
    PPAI-UX-APP-SHELL,
    PPAI-UX-MANUAL-MARCA,
    PPAI-IMPL-FRONTEND-HANDOFF,
    PPAI-IMPL-BACKEND-REVISION,
  ]
depende_de: [PPAI-UX-APP-SHELL, PPAI-UX-MANUAL-MARCA]
---

# Breadcrumb URL, Sheets Reutilizables y CRUD Comisiones Médicas

Decisiones aprobadas sobre el prototipo y maqueta en `feature/frontend` (2026-11-15), alineadas con los endpoints de catálogos agregados en `feature/backend`.

Specs completas: [`specs/frontend/comisiones-medicas-crud/`](../../../specs/frontend/comisiones-medicas-crud/) (`functional-spec.md`, `technical-spec.md`, `todos.md`).

---

## 1. Header con Breadcrumb tipo URL (`IdentityIsland` + `SplitFlap inline`)

- Cada bloque oscuro (`bg-mech`, línea divisoria al medio, tipografía `font-mono`) representa un segmento navegable de la URL actual separado por `/`: `[COR] / [COMISIONES MEDICAS]`.
- `SplitFlap` incorpora `variant="inline"` para animar las letras al cambiar de ruta (`flipTrigger={pathname}`) dentro de un único bloque oscuro por pestaña, sin punto verde indicador.
- La construcción de segmentos vive en `getBreadcrumbSegments(pathname)` en `src/lib/navigation.ts`.

---

## 2. Superficies y Controles Reutilizables

- **`BottomSheet`** (`src/components/ui/surfaces/BottomSheet.tsx`): modal inferior general para móvil con gesto *swipe-down* y GSAP (`yPercent: 100 → 0`). `Sheet.tsx` se mantiene como alias compatible.
- **`SideSheet`** (`src/components/ui/surfaces/SideSheet.tsx`): panel lateral derecho general para escritorio en estilo isla (`rounded-[var(--isle-r)]`, borde `1px`, GSAP `xPercent: 100 → 0`).
- **`ResponsiveSheet`** (`src/components/ui/surfaces/ResponsiveSheet.tsx`): adaptador que usa `SideSheet` en `>= 768px` y `BottomSheet` en `< 768px`.
- **`Pagination`** (`src/components/ui/navigation/Pagination.tsx`): paginado reutilizable con rango visible, botones Anterior/Siguiente y página activa en `bg-lime text-on-lime`.

---

## 3. Página `/comisiones-medicas` (Rol: Parametrizador del sistema)

- **Qué NO lleva:** ni bolsín 3D (exclusivo del login) ni mapa falso (las comisiones no tienen coordenadas).
- **Encabezado y filtros:** título `Comisiones médicas.`, buscador y botón **"Nueva comisión"** con bordes `rounded-full` (estilo píldora).
- **Vista responsiva:**
  - **Mobile (`< 640px`):** tarjetas (`rounded-[18px] border border-edge bg-raised/50 p-4`).
  - **Desktop (`>= 640px`):** filas continuas de tablero con `SplitFlap` para la sigla, datos de contacto y acciones Editar/Eliminar.
- **Datos y validación:** alineados 1:1 con `comisionMedicaEntradaSchema` y los 24 registros de `prisma/seeds/init.sql` (`CM-BA` a `CM-CABA`), listos para conectar `/api/comisiones-medicas` al mergear `feature/backend`.
- **Campo Código:** prefijo fijo `CM-` no editable + input restringido a un máximo de 3 letras en mayúsculas (`CM-<SIGLA>`).

---

## 4. Cómo usar los componentes reutilizables

### `ResponsiveSheet` / `SideSheet` / `BottomSheet`
```tsx
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";

<ResponsiveSheet
  open={abierto}
  onClose={() => setAbierto(false)}
  labelledBy="titulo-sheet"
  size="md" // "sm" | "md" | "lg" (solo desktop)
  side="right" // "right" | "left" (solo desktop)
>
  <h2 id="titulo-sheet">Título</h2>
</ResponsiveSheet>
```
- `ResponsiveSheet` renderiza `SideSheet` en `>= 768px` y `BottomSheet` en `< 768px`. Ambos animan entrada y salida con GSAP y respetan `prefers-reduced-motion`.

### `Pagination`
```tsx
import { Pagination } from "@/components/ui/navigation/Pagination";

<Pagination
  page={page}
  totalPages={Math.max(1, Math.ceil(items.length / pageSize))}
  totalItems={items.length}
  pageSize={8}
  onPageChange={setPage}
/>
```

### `SplitFlap` (`variant="inline"`)
```tsx
import { SplitFlap } from "@/components/ui/display/SplitFlap";

<SplitFlap text="Comisiones" variant="inline" flipTrigger={pathname} />
```

---

## 5. Estado actual — Dónde quedamos (2026-11-15)

- **Implementado en `feature/frontend` y mergeado a `main`:**
  - App Shell completo en islas (`app-shell-core`) + Login 3D mock (`login-bolsin-3d`).
  - Header con breadcrumb tipo URL en `SplitFlap variant="inline"` (`[COR] / [COMISIONES MEDICAS]`).
  - Componentes globales reutilizables: `BottomSheet`, `SideSheet`, `ResponsiveSheet`, `Pagination`.
  - Pantalla `/comisiones-medicas` funcional con datos mock de `init.sql`, búsqueda redondeada, cards en mobile, filas en desktop, paginado y CRUD completo (con código `CM-` + hasta 3 letras).
- **Próximos pasos:**
  1. Mergear `feature/backend` y conectar `ComisionesMedicasView` a `/api/comisiones-medicas` (`GET`, `POST`, `PUT`, `DELETE`, manejando error `409` en baja/duplicado).
  2. Implementar `/estados` y `/roles` si se requieren en el alcance final reutilizando `ResponsiveSheet` y `Pagination`.
  3. Rehacer la spec de `cu36-seguimiento-bolsines` para el mapa a sangre sobre el esquema de islas.

### [NACHO] Presentación de sedes con los códigos de la API GPS

Las tarjetas móviles ajustan el nombre, la dirección y el correo al ancho disponible. El tablero abre las columnas de contacto y ubicación según el ancho real del listado. El formulario conserva sufijos como CBA-01 y CBA-02 al editar las sedes.
