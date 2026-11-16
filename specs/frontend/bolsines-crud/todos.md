# Plan de Ejecución — Bolsines (Listado CRUD & Detalle con Historial)

> **Feature ID:** `bolsines-crud`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 3 (`todos.md`)  
> **Specs:** [`functional-spec.md`](./functional-spec.md) · [`technical-spec.md`](./technical-spec.md)  
> **Regla transversal:** Toda tarea se da por terminada solo si funciona en **tema claro y oscuro** y conectada a la API real.

---

## Capa 1: Navegación, Primitiva `Select` y Contratos de Cliente

- [x] **`[B-01]` Registrar `Bolsines` en la navegación global**
  - **Archivos:** `src/lib/navigation.ts`, `tests/navigation.test.ts`
  - **Detalle:** Agregar destino `{ id: "bolsines", href: "/bolsines", nombre: "Bolsines", nombreCorto: "Bolsines", icono: Package, cuerpo: "padded", enTablero: true }` en `DESTINOS` y actualizar tests de navegación si validan cantidad o reparto de píldora / "Más".
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** El ítem aparece en `SideIsland` (desktop), en el tablero de `/inicio` y en `MoreSheet` (mobile), manteniéndose activo en `/bolsines` y `/bolsines/[id]`.

- [x] **`[B-02]` Crear primitiva `Select` accesible con tokens semánticos**
  - **Archivos:** `src/components/ui/forms/Select.tsx`
  - **Detalle:** `forwardRef<HTMLSelectElement>` con soporte `invalid`, `variant: "sans" | "mono"`, altura `h-11`, `rounded-control`, `border-line`, `bg-surface`, `text-fg`, `focus-visible:outline-accent` y estados `disabled`/`invalid` compatibles con claro y oscuro.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** Se integra dentro de `Field` sin desbordes ni errores de contraste en claro/oscuro.

- [x] **`[B-03]` Tipos, schemas Zod y formateadores de bolsines**
  - **Archivos:** `src/lib/bolsines.ts`, `tests/bolsines-helpers.test.ts`
  - **Detalle:** Tipos `BolsinListadoItem`, `BolsinDetalleItem`, `CatalogoComision`, `CatalogoEstado`, `CatalogoEmpleado`; schemas `bolsinEdicionFormSchema` y `bolsinAltaFormSchema` alineados con `src/dtos/bolsin.dto.ts`; formateadores `formatFechaCorta`, `formatFechaHora`, `formatPesoKg`, `formatDuracion` y mapeo de variantes de estado.
  - **Depends on:** `—` | **Parallelizable:** `true`
  - **Criterio de salida:** Tests unitarios de validación (Alta vs. Edición) y formateo de duración en verde.

---

## Capa 2: Componentes de Dominio, CRUD con Sheet y Vistas

- [x] **`[B-04]` Badge semántico de estado y Sheets reutilizables (`BolsinEstadoBadge`, `BolsinFormSheet`, `BolsinDeleteSheet`)**
  - **Archivos:** `src/components/bolsines/BolsinEstadoBadge.tsx`, `src/components/bolsines/BolsinFormSheet.tsx`, `src/components/bolsines/BolsinDeleteSheet.tsx`
  - **Detalle:** `BolsinFormSheet` sobre `ResponsiveSheet` (`size="md"`), diferenciando modo `"crear"` (`POST /api/bolsines` con `estadoId` filtrado a `ambito === "BOLSIN"` y `responsableCEId`) de modo `"editar"` (`PUT /api/bolsines/[id]` sin estado/responsable y con nota informativa). `BolsinDeleteSheet` sobre `ResponsiveSheet` (`size="sm"`) ejecutando `DELETE /api/bolsines/[id]` con manejo de errores `400`/`409`/`500`.
  - **Depends on:** `[B-02]`, `[B-03]` | **Parallelizable:** `false`
  - **Criterio de salida:** Alta, Edición y Baja persisten en la API real y muestran errores de validación o duplicado (`409`) sin cerrar el Sheet.

- [x] **`[B-05]` Vista de listado paginado `/bolsines`**
  - **Archivos:** `src/components/bolsines/BolsinesView.tsx`, `src/app/(app)/bolsines/page.tsx`
  - **Detalle:** Carga real en paralelo (`/api/bolsines`, `/api/comisiones-medicas`, `/api/estados`, `/api/empleados`) con `AbortController`; búsqueda por N.º bolsín/precinto/CM y filtro por estado actual; paginado (`PAGE_SIZE = 10`) con `Pagination`; filas de tablero en `>= 640px` con `SplitFlap` y tarjetas táctiles en `< 640px`; skeleton, estado vacío y error con reintento; enlace al detalle `/bolsines/[id]` y acciones Editar/Eliminar vía Sheets.
  - **Depends on:** `[B-01]`, `[B-04]` | **Parallelizable:** `true`
  - **Criterio de salida:** Lista los 35+ bolsines reales paginados, filtra en vivo, ajusta página tras eliminar y permite navegar a `/bolsines/[id]`.

- [x] **`[B-06]` Vista de detalle `/bolsines/[id]` con ficha completa e historial de cambios de estado**
  - **Archivos:** `src/components/bolsines/BolsinDetalleView.tsx`, `src/app/(app)/bolsines/[id]/page.tsx`
  - **Detalle:** Carga `GET /api/bolsines/[id]` + catálogos; skeleton, estado `404` amigable y error con reintento; cabecera con `SplitFlap`, `BolsinEstadoBadge` y acciones Editar/Eliminar (`BolsinFormSheet` / `BolsinDeleteSheet` que redirige a `/bolsines` al borrar); ficha operativa completa; línea de tiempo cronológica `<ol>` de `cambiosEstado` destacando el estado vigente (`fechaHoraFin === null`), rango horario, duración y responsable.
  - **Depends on:** `[B-04]` | **Parallelizable:** `true`
  - **Criterio de salida:** Muestra ficha completa y el historial ordenado de cambios de estado; editar actualiza la ficha en vivo y eliminar vuelve a `/bolsines`.

---

## Capa 3: Coreografía GSAP y Reduced Motion

- [x] **`[B-07]` Animaciones GSAP con `gsap.matchMedia()` en listado y detalle**
  - **Archivos:** `src/components/bolsines/BolsinesView.tsx`, `src/components/bolsines/BolsinDetalleView.tsx`
  - **Detalle:** Entrada escalonada `[data-bolsin-item]` (`power3.out`, `stagger: 0.04s`) al cargar y cambiar de página; timeline de detalle (`[data-detalle-card]` + `[data-historial-item]`) en `/bolsines/[id]`; rama `(prefers-reduced-motion: reduce)` con visibilidad inmediata (`duration: 0`).
  - **Depends on:** `[B-05]`, `[B-06]` | **Parallelizable:** `false`
  - **Criterio de salida:** Transiciones fluidas en GPU (`autoAlpha`, `x`, `y`) sin bloquear clics y cero movimiento bajo `prefers-reduced-motion: reduce`.

---

## Capa 4: Pulido Craft, Responsive y Temas

- [ ] **`[B-08]` Revisión visual en claro/oscuro y tres tamaños (`360px`, `768px`, `1280px`)**
  - **Archivos:** `src/components/bolsines/*.tsx`, `src/components/ui/forms/Select.tsx`
  - **Detalle:** Verificar bordes `1px` (`edge`/`hair`/`line`), contraste del `lime` (`border-lime-edge` en claro), ausencia de scroll horizontal en `360px` y legibilidad de la línea de tiempo en mobile y desktop.
  - **Depends on:** `[B-07]` | **Parallelizable:** `false`
  - **Criterio de salida:** Ambos temas y los 3 breakpoints consistentes con el manual de marca v2.1.

---

## Capa 5: Auditoría a11y y Build

- [ ] **`[B-09]` Verificación integral de accesibilidad, tests y compilación**
  - **Archivos:** `—` (verificación sobre `src/` y `tests/`)
  - **Detalle:** Recorrido por teclado (`Tab`, `Enter`, `Escape` en Sheets), `aria-live` y `role="alert"`, y ejecución de `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build`.
  - **Depends on:** `[B-08]` | **Parallelizable:** `false`
  - **Criterio de salida:** Todos los checks en verde sin errores de tipos, lint o tests.
