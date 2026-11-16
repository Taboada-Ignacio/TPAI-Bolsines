# Especificación Técnica — Gestión de Empleados (CRUD)

> **Feature ID:** `empleados-crud`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 2 (`technical-spec.md`)  
> **Ruta:** `src/app/(app)/empleados/page.tsx`  
> **Vista cliente:** `src/components/empleados/EmpleadosView.tsx`

---

## 1. Tokens de Diseño y Sistema Visual

Todos los estilos se apoyan exclusivamente en los tokens semánticos definidos en `src/app/globals.css` para garantizar compatibilidad total en **tema claro** y **tema oscuro** (`[data-theme="dark"]` y `prefers-color-scheme: dark`):

| Categoría | Token CSS / Tailwind | Uso en `empleados-crud` |
| :--- | :--- | :--- |
| **Superficies** | `--canvas`, `--surface`, `--raised` (`bg-surface`, `bg-raised`, `bg-hover`) | Fondo de isla contenedora (`bg-surface`), fila seleccionada (`bg-raised/90`), badge `"Vos"` y avatar de iniciales. |
| **Texto** | `--fg`, `--muted` (`text-fg`, `text-muted`) | Nombres y valores (`text-fg`), `@usuario`, emails y subtítulos (`text-muted`). |
| **Bordes (sin sombras)** | `--edge`, `--hair`, `--line` (`border-edge`, `border-hair`, `border-line`) | Contenedor isla (`rounded-[20px] border border-edge`), divisores internos (`divide-hair`, `border-hair`). Cero `box-shadow` en islas. |
| **Acento y Peligro** | `--accent`, `--primary`, `--on-primary`, `--danger`, `--danger-ink` | Indicador lateral de fila activa (`border-l-accent`), botón primario, botón de baja y alertas (`text-danger-ink`, `border-danger/25`, `bg-danger/5`). |
| **Tipografía** | `font-display` (títulos/nombres), `font-serif` (subtítulo itálica), `font-mono` (`@usuario`, código de CM, email, contador) | Jerarquía editorial técnica consistente con el App Shell. |
| **Geometría** | `rounded-[20px]` (isla lista), `rounded-[14px]` (avatar), `rounded-[6px]` (código CM), `rounded-full` (inputs, selects y botones) | Radios amplios del sistema Rumbo; alertas de error multi-línea en mobile deben usar `rounded-[16px]` para evitar distorsión en `360px`. |

---

## 2. Arquitectura de Componentes y Gestión de Estado

### 2.1. Árbol de Componentes

```text
src/app/(app)/empleados/page.tsx (Server Component, force-dynamic)
 ├── getPerfilActual()
 ├── [Guardia: perfil.sesion.rol !== ROL_ADMIN] → PageBody + PageHeading("Acceso restringido") + Link(/inicio)
 └── [Rol autorizado] → Promise.all([empleadoService.listar(), rolService.listar(), comisionMedicaService.listar()])
      └── <EmpleadosView empleadosIniciales roles comisiones empleadoActualId />
           ├── Cabecera: PageHeading + Marker + Button("Nuevo empleado")
           ├── Buscador: Input[type="search"] + MicroLabel(contador)
           ├── <MasterDetailSplit storageKey="bolsines:empleados:panel-ancho">
           │    ├── master: Isla listado (grid @md / @lg, cards en < @md, acciones Editar/Eliminar)
           │    └── detail: Ficha de detalle (<dl> Email, Rol, Comisión médica + Editar/Eliminar)
           ├── <ResponsiveSheet size="md"> (Crear / Editar empleado + usuario atómico)
           └── <ResponsiveSheet size="sm"> (Confirmar eliminación)
```

### 2.2. Contratos de Datos y Validación

- **Entrada SSR (`EmpleadosViewProps`):**
  - `empleadosIniciales: RegistroEmpleado[]`
  - `roles: CatalogoOpcion[]` (`{ id, nombre }`)
  - `comisiones: CatalogoOpcion[]` (`{ id, nombre, codigo }`)
  - `empleadoActualId: number`
- **Validación cliente (`src/dtos/empleado.dto.ts`):**
  - Alta: `empleadoAltaSchema` (`nombre`, `apellido`, `email`, `rolId`, `comisionMedicaId`, `usuario: { nombre, contrasena }`).
  - Edición: `empleadoEdicionSchema` (`nombre`, `apellido`, `email`, `rolId`, `comisionMedicaId`).
- **Endpoints API consumidos:**
  - `POST /api/empleados` → `201 Created` (`RegistroEmpleado`) | `409 Conflict` (mapeado a `errors.usuario`) | `400/500` (`serverError`).
  - `PUT /api/empleados/[id]` → `200 OK` (`RegistroEmpleado`) | `400/404/409/500`.
  - `DELETE /api/empleados/[id]` → `204 No Content` | `400/409/500` (`deleteError`).
- **Estado local vs. servidor:**
  - Estado optimista/local en `empleados` tras respuesta `ok` + `router.refresh()` para sincronizar con el Server Component.
  - Al eliminar el ítem seleccionado (`deleteTarget.id === selectedId`), se debe limpiar `selectedId` (`setSelectedId(null)`).
  - Filtro reactivo `useMemo` sobre `busqueda` y `empleados`.

---

## 3. Coreografía de Movimiento GSAP

Siguiendo `spec-frontend-craft-flow` y `gsap-core`:

1. **Entrada escalonada de ítems (`[data-empleado-item]`):**
   - Contexto encapsulado con `gsap.matchMedia()` dentro de `useEffect` (con `ctx.revert()` en cleanup).
   - Rama estándar `(prefers-reduced-motion: no-preference)`:
     - Propiedades GPU: `autoAlpha: 0, y: 12` → `autoAlpha: 1, y: 0`.
     - Duración: `0.45s`, `stagger: 0.035s` (tope para listas largas), `ease: "power3.out"`, `clearProps: "transform,opacity,visibility"`.
   - Rama accesible `(prefers-reduced-motion: reduce)`:
     - `gsap.set("[data-empleado-item]", { autoAlpha: 1, y: 0 })` con duración `0` (visibilidad inmediata, cero desplazamiento).
2. **Transición de detalle y hojas (`MasterDetailSplit` / `ResponsiveSheet`):**
   - `ResponsiveSheet` delega en `SideSheet` (`>= 768px`) y `BottomSheet` (`< 768px`), que ya implementan GSAP + `prefers-reduced-motion`.
   - Al cambiar `selectedId` en el panel de detalle, aplicar una transición sutil (`autoAlpha: 0, y: 6` → `1, 0`, `0.22s`, `power2.out`) respetando `prefers-reduced-motion: reduce`.

---

## 4. Accesibilidad (a11y) y Marcado Semántico

- **Landmarks y encabezados:** Contenido envuelto en `PageBody` dentro del `<main>` del App Shell; jerarquía única `<h1>` (`PageHeading`) → `<h2>` (títulos de `ResponsiveSheet`) → `<h3>` (nombre en detalle).
- **Navegación por teclado en el listado maestro:**
  - Cada fila seleccionable debe ser operable por teclado: `role="button"`, `tabIndex={0}`, `aria-pressed={estaSeleccionado}` (o patrón `listbox`/`option`), y manejador `onKeyDown` para `Enter` y `Space` (`e.preventDefault()`).
  - Los botones internos **Editar** y **Eliminar** mantienen `e.stopPropagation()` para no disparar la selección accidentalmente al activarse por clic o teclado.
- **Regiones vivas (`aria-live`):**
  - El contador de resultados y los avisos de estado tras crear, editar o eliminar un empleado deben anunciarse mediante `aria-live="polite"`.
  - Los errores de servidor (`serverError`, `deleteError`) usan `role="alert"`.
- **Foco visible:** Todos los elementos interactivos conservan anillos de foco (`focus-visible:outline-2 focus-visible:outline-accent`).
- **Breakpoints objetivo:** Verificación explícita en **`360px`** (mobile cards, `BottomSheet`, sin overflow horizontal), **`768px`** (tablet / `@md` grid, `SideSheet`) y **`1280px`** (desktop `@lg` grid + `MasterDetailSplit` redimensionable).
