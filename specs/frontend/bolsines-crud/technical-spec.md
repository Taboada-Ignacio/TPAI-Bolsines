# Technical Spec — Bolsines (Listado CRUD & Detalle con Historial)

**Feature ID:** `bolsines-crud`  
**Flujo:** `spec-frontend-craft-flow` — Gate 2 (`technical-spec.md`)  
**Spec funcional:** [`functional-spec.md`](./functional-spec.md)  
**Regla transversal:** Todos los componentes y estados deben funcionar en **tema claro y tema oscuro** usando tokens semánticos.

---

## 1. Design Tokens & System

Se utilizan exclusivamente los tokens semánticos ya definidos en `src/app/globals.css` (`:root`, `[data-theme="dark"]` y `@theme inline`):

- **Tipografía:**
  - `--font-display` (`Space Grotesk`): título `Bolsines.`, número de bolsín en detalle y encabezados de Sheet.
  - `--font-sans` (`Plus Jakarta Sans`): nombres de comisiones, responsables, mensajes y labels de acción.
  - `--font-serif` (`Instrument Serif`, italic): acento editorial en subtítulos/notas operativas.
  - `--font-mono` (`JetBrains Mono`, `tabular-nums`): rótulos `MicroLabel`, precintos, pesos, fechas, timestamps de historial y `SplitFlap`.
- **Superficies, bordes y texto:**
  - `bg-canvas` / `bg-surface` / `bg-raised` / `bg-glass`
  - `text-fg` / `text-muted`
  - `border-edge` (1px estructural) / `border-hair` (divisores de filas y línea de tiempo) / `border-line` (controles de formulario `>= 3:1`)
  - Sin sombras pesadas en listas o tarjetas; tactilidad 3D reservada a `Button` (`shadow-key-*`).
- **Mapeo semántico de estados de bolsín (`BolsinEstadoBadge`):**
  - **En preparación / Pendiente:** `bg-raised text-fg border border-edge`
  - **Enviado / En tránsito:** `bg-lime text-on-lime border border-lime-edge`
  - **Recibido / Entregado:** `bg-primary text-on-primary border border-transparent`
  - **Con demora / Sin cobertura / Observado:** `bg-amber text-brand-ink border border-transparent`
  - **Cancelado / Extraviado:** `bg-danger text-white border border-transparent`

---

## 2. Component Architecture & State

### 2.1 Navegación global
- **`src/lib/navigation.ts`:** Agregar el destino `bolsines` a `DESTINOS`:
  - `id: "bolsines"`, `href: "/bolsines"`, `nombre: "Bolsines"`, `nombreCorto: "Bolsines"`
  - `detalle: "Listado general, alta, edición e historial de cada bolsín"`
  - `icono: Package` (`lucide-react`), `cuerpo: "padded"`, `enTablero: true`
  - Al tener `MAX_DESTINOS_PILDORA = 3`, `repartirDestinosPildora()` lo ubicará automáticamente en **"Más"** (`MoreSheet`) en móvil y en la lista principal de `SideIsland` en escritorio. `esDestinoActivo("/bolsines/12", destino)` mantendrá resaltado el ítem activo.

### 2.2 Primitiva nueva de formulario
- **`src/components/ui/forms/Select.tsx`:**
  - Props: `SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean; variant?: "sans" | "mono" }` con `forwardRef`.
  - Estética alineada a `Input.tsx` usando tokens semánticos (`h-11 w-full rounded-control border border-line bg-surface px-3.5 text-[15px] text-fg`, estados `hover`, `focus-visible:outline-accent`, `invalid` en `border-danger`).

### 2.3 Tipos, helpers y validación
- **`src/lib/bolsines.ts`:**
  - Tipos alineados con la API real:
    - `BolsinListadoItem` (equivalente JSON de `RegistroBolsin`: `fecha` como ISO string, `cmOrigen`, `cmDestino`, `estadoActual`).
    - `BolsinDetalleItem` (equivalente JSON de `DetalleBolsin`: incluye `cambiosEstado[]` con `fechaHoraInicio`, `fechaHoraFin`, `estado`, `responsableCE`).
    - `CatalogoComision`, `CatalogoEstado` (con `ambito`), `CatalogoEmpleado`.
  - Schemas Zod cliente (`bolsinEdicionFormSchema` y `bolsinAltaFormSchema`) para validar antes de enviar:
    - `numeroBolsin` y `numeroPrecinto`: enteros positivos.
    - `peso`: número positivo (`> 0`).
    - `cmOrigenId`, `cmDestinoId`: IDs positivos (validando que origen y destino no sean idénticos si aplica, o delegando unicidad al backend).
    - Solo en alta: `estadoId` (ámbito `BOLSIN`) y `responsableCEId`.
  - Formateadores: `formatFechaCorta`, `formatFechaHora`, `formatPesoKg`, `formatDuracion(inicio, fin)` para calcular el tiempo transcurrido en cada etapa del historial.

### 2.4 Rutas y árbol de componentes
- **`src/app/(app)/bolsines/page.tsx`**
  - Renderiza `<PageBody variant="padded"><BolsinesView /></PageBody>`.
- **`src/app/(app)/bolsines/[id]/page.tsx`**
  - Lee `params` (`await params`), valida entero positivo y renderiza `<PageBody variant="padded"><BolsinDetalleView id={bolsinId} /></PageBody>`.
- **`src/components/bolsines/`**
  - **`BolsinesView.tsx` (`"use client"`):**
    - Estado: `bolsines[]`, `catalogos` (`comisiones`, `estadosBolsin`, `empleados`), `loading`, `error`, `busqueda`, `filtroEstadoId`, `page` (`PAGE_SIZE = 10`), `sheetMode` (`null | { tipo: "crear" } | { tipo: "editar"; bolsin } | { tipo: "eliminar"; bolsin }`).
    - Carga inicial en paralelo (`Promise.all`) contra `/api/bolsines`, `/api/comisiones-medicas`, `/api/estados` (filtrando `ambito === "BOLSIN"`) y `/api/empleados`, con `AbortController` en desmontaje/reintento.
    - En `< 640px`: tarjetas táctiles (`rounded-[18px] border border-edge bg-raised/50 p-4`) con enlace a `/bolsines/[id]` y botones Editar/Eliminar.
    - En `>= 640px`: filas de tablero (`border-b border-hair`) con `SplitFlap` del `numeroBolsin`, ruta `Origen → Destino`, precinto/peso/fecha, `BolsinEstadoBadge` y acciones.
    - Controles: `PageHeading`, botón primario **"Nuevo bolsín"** (`rounded-full`) + `PageActions` (`IconButton` `+`), buscador `rounded-full`, selector de filtro por estado, `Pagination`.
  - **`BolsinFormSheet.tsx` (`"use client"`):**
    - Envuelto en `ResponsiveSheet` (`size="md"`).
    - Recibe `mode: "crear" | "editar"`, `bolsin?: BolsinListadoItem | BolsinDetalleItem`, catálogos, `onSuccess(bolsinGuardado)` y `onClose()`.
    - **Diferencia Alta vs. Edición:**
      - `mode === "crear"`: envía `POST /api/bolsines` con todos los campos, incluyendo `Select` de **Estado inicial** (solo `ambito === "BOLSIN"`) y **Responsable**.
      - `mode === "editar"`: envía `PUT /api/bolsines/[id]` con `fecha`, `numeroBolsin`, `numeroPrecinto`, `peso`, `cmOrigenId`, `cmDestinoId`. Oculta los selectores de estado y responsable y muestra un aviso informativo (`MicroLabel` + texto `muted`): *"El estado actual se gestiona desde el historial de cambios."*
    - Muestra errores por campo (Zod cliente) y errores del backend (`400` / `409` duplicado / `500`) en `role="alert"` sin cerrar el sheet.
  - **`BolsinDeleteSheet.tsx` (`"use client"`):**
    - Envuelto en `ResponsiveSheet` (`size="sm"`).
    - Muestra resumen del bolsín (`N.º`, precinto, ruta) y ejecuta `DELETE /api/bolsines/[id]` con estado `deleting` y manejo de errores.
  - **`BolsinEstadoBadge.tsx`:**
    - Pill compacta con tokens semánticos según el nombre del estado.
  - **`BolsinDetalleView.tsx` (`"use client"`):**
    - Carga `GET /api/bolsines/[id]` + catálogos (para poder editar sin salir del detalle).
    - Estados dedicados: Skeleton de ficha + línea de tiempo, `404` amigable (*"No encontramos ese bolsín"*) con enlace a `/bolsines`, y error de red con botón **"Reintentar"**.
    - **Cabecera:** enlace *"← Volver a bolsines"*, `PageHeading` con `SplitFlap` del número de bolsín y `BolsinEstadoBadge`, más acciones **Editar** y **Eliminar** (`PageActions` y botones visibles).
    - **Ficha operativa:** grilla de datos clave (`CM Origen` con código y nombre, `CM Destino` con código y nombre, `N.º Precinto`, `Peso`, `Fecha de registro`, `Cantidad de cambios`).
    - **Historial de cambios de estado (`<ol>`):** línea de tiempo vertical conectada por línea `border-hair`. Cada `CambioEstadoBolsin` muestra:
      - Indicador circular (relleno `bg-lime border-lime-edge` para el actual `fechaHoraFin === null`; `bg-surface border-line` para los cerrados).
      - Nombre del estado + badge *"Actual"* si `fechaHoraFin === null`.
      - Rango `Inicio → Fin` (o *"En curso desde …"*) y duración calculada (`formatDuracion`).
      - Responsable (`responsableCE.nombre` + `responsableCE.apellido`).

---

## 3. GSAP Motion Choreography

Se utiliza `useGSAP` + `gsap.matchMedia()` en cada vista con la condición explícita `"(prefers-reduced-motion: reduce)"`:

- **Listado (`/bolsines` — `BolsinesView.tsx`):**
  - Al completar la carga inicial o al cambiar de `page`:
    - `gsap.from("[data-bolsin-item]", { autoAlpha: 0, y: 10, duration: 0.28, stagger: 0.04, ease: "power3.out", clearProps: "transform,opacity,visibility" })`
  - **Reduced motion:** visibilidad inmediata sin desplazamiento (`gsap.set("[data-bolsin-item]", { autoAlpha: 1, y: 0 })`).
- **Detalle (`/bolsines/[id]` — `BolsinDetalleView.tsx`):**
  - Al cargar el detalle:
    - Timeline única:
      1. `[data-detalle-card]`: `autoAlpha: 0, y: 12`, `duration: 0.32`, `stagger: 0.05`, `ease: "power3.out"`.
      2. `[data-historial-item]`: `autoAlpha: 0, x: -10`, `duration: 0.28`, `stagger: 0.06`, `ease: "power2.out"`, solapado `-=0.14`.
  - **Reduced motion:** todos los elementos visibles de inmediato con duración `0`.
- **Sheets (`ResponsiveSheet`):**
  - Reutiliza la coreografía ya implementada en `SideSheet` (`xPercent: 100 → 0`, `0.26s`, `power3.out`) y `BottomSheet` (`yPercent: 100 → 0`).

---

## 4. Accessibility (a11y) & Semantic Markup

- **Landmarks y semántica:** `<header>` interno para cabecera de vista, `<section aria-labelledby="...">` para ficha operativa e historial, `<ol aria-label="Historial de cambios de estado">` para la secuencia cronológica, y `<nav aria-label="Paginación">` vía `Pagination`.
- **Regiones vivas:** `aria-live="polite"` en el contador de resultados del listado y en mensajes de carga; `role="alert"` en errores de formulario y fallos de red.
- **Teclado y foco:**
  - Enlaces claros al detalle (`<Link href="/bolsines/[id]">`) independientes de los botones de acción `Editar` / `Eliminar` (sin botones anidados dentro de enlaces ni `div` clicables inaccesibles).
  - Anillo de foco consistente `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`.
  - Cierre con `Escape` y trampa/retorno de foco manejados por el `<dialog>` nativo de `SideSheet` / `BottomSheet`.
