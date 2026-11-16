# Plan de Tareas — Gestión de Empleados (CRUD)

> **Feature ID:** `empleados-crud`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 3 (`todos.md`)  
> **Specs:** [`functional-spec.md`](./functional-spec.md) · [`technical-spec.md`](./technical-spec.md)  
> **Regla transversal:** Toda tarea se da por terminada solo si funciona en **tema claro y oscuro**, sin sombras en islas y con texto en voseo rioplatense.

---

## Capa 1 — Ruta, Guardia de Rol y Contrato de Datos

- [x] **`[E-01]` Registrar `/empleados` en navegación global con restricción por rol**
  - **Archivos:** `src/lib/navigation.ts`
  - **Depends on:** `—` · **Parallelizable:** `true`
  - **Criterio de salida:** El destino `empleados` está registrado en `DESTINOS` con `roles: [ROL_ADMIN]` (`"Parametrizador del sistema"`), visible solo para ese rol en `SideIsland` y `MoreSheet`.

- [x] **`[E-02]` Implementar Server Component `/empleados` con guardia de acceso y carga paralela**
  - **Archivos:** `src/app/(app)/empleados/page.tsx`
  - **Depends on:** `[E-01]` · **Parallelizable:** `false`
  - **Criterio de salida:** Verifica `perfil.sesion.rol === ROL_ADMIN`; si no coincide, renderiza pantalla *"Acceso restringido / Solo administración"* con enlace a `/inicio`. Si coincide, carga `empleadoService.listar()`, `rolService.listar()` y `comisionMedicaService.listar()` en paralelo y pasa los datos a `EmpleadosView`.

- [x] **`[E-03]` Definir DTOs y esquemas Zod de alta atómica y edición**
  - **Archivos:** `src/dtos/empleado.dto.ts`, `src/app/api/empleados/route.ts`, `src/app/api/empleados/[id]/route.ts`
  - **Depends on:** `—` · **Parallelizable:** `true`
  - **Criterio de salida:** `empleadoAltaSchema` valida empleado + `usuario: { nombre, contrasena }`; `empleadoEdicionSchema` valida datos editables sin credenciales; endpoints `GET/POST /api/empleados` y `GET/PUT/DELETE /api/empleados/[id]` operativos.

---

## Capa 2 — Vista Principal, Maestro-Detalle y Formularios CRUD

- [x] **`[E-04]` Construir listado maestro-detalle y buscador en `EmpleadosView`**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`
  - **Depends on:** `[E-02]` · **Parallelizable:** `false`
  - **Criterio de salida:** Cabecera con `PageHeading`, subtítulo serif, botón `"Nuevo empleado"`, buscador en tiempo real, contador de resultados, isla `rounded-[20px] border border-edge bg-surface` integrada con `MasterDetailSplit`, badge `"Vos"` e inhibición de autoeliminación.

- [x] **`[E-05]` Implementar `ResponsiveSheet` de Alta atómica, Edición y Baja**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`
  - **Depends on:** `[E-03]`, `[E-04]` · **Parallelizable:** `false`
  - **Criterio de salida:** Alta (`POST /api/empleados`), edición (`PUT /api/empleados/[id]`) y confirmación de baja (`DELETE /api/empleados/[id]`) funcionando con validación Zod en cliente, manejo de `409` en campo `usuario`, estados `saving`/`deleting` y `router.refresh()`.

- [x] **`[E-06]` Pulir estado post-baja, estado vacío con limpieza de filtro y manejo de errores en edición**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`
  - **Depends on:** `[E-05]` · **Parallelizable:** `false`
  - **Criterio de salida:**
    - Al confirmar eliminación del empleado seleccionado, limpiar `selectedId` (`setSelectedId(null)`).
    - En estado vacío por búsqueda sin coincidencias (`busqueda.trim().length > 0`), ofrecer botón `"Limpiar búsqueda"` junto al mensaje; diferenciar si no hay empleados cargados.
    - Ajustar alertas de error dentro de los sheets (`rounded-[16px]` en lugar de `rounded-full`) para evitar deformación en textos largos en mobile.

---

## Capa 3 — Coreografía GSAP y Reduced Motion

- [x] **`[E-07]` Agregar animación de entrada GSAP con `gsap.matchMedia()` en `EmpleadosView`**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`
  - **Depends on:** `[E-04]` · **Parallelizable:** `true`
  - **Criterio de salida:** Las filas/cards (`[data-empleado-item]`) y el panel de detalle animan entrada suave con propiedades GPU (`autoAlpha`, `y`, `power3.out`) dentro de `gsap.matchMedia()`, con rama `(prefers-reduced-motion: reduce)` que fuerza visibilidad inmediata (`duration: 0`) y limpieza en unmount.

---

## Capa 4 — Pulido Craft, Responsive y Temas

- [x] **`[E-08]` Revisión visual en tema claro/oscuro y breakpoints `360px`, `768px`, `1280px`**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`, `src/app/(app)/empleados/page.tsx`
  - **Depends on:** `[E-06]`, `[E-07]` · **Parallelizable:** `false`
  - **Criterio de salida:** Sin scroll horizontal en `360px`, transición correcta entre cards (`< @md`), grilla `@md` (`768px`) y grilla `@lg` + `MasterDetailSplit` (`1280px`); contraste y bordes `1px` (`edge`/`hair`) verificados en ambos temas.

---

## Capa 5 — Auditoría a11y, Tests y Build

- [x] **`[E-09]` Hacer operables por teclado las filas del listado y agregar anuncios `aria-live`**
  - **Archivos:** `src/components/empleados/EmpleadosView.tsx`
  - **Depends on:** `[E-04]` · **Parallelizable:** `true`
  - **Criterio de salida:** Cada fila de empleado tiene `role="button"`, `tabIndex={0}`, `aria-pressed`, `focus-visible:outline-accent` y soporte `Enter`/`Space` sin interferir con los botones internos **Editar**/**Eliminar**; existe región `aria-live="polite"` para feedback de acciones (alta, edición, baja y conteo filtrado).

- [x] **`[E-10]` Agregar tests de `EmpleadosView` / guardia de rol y correr verificación completa**
  - **Archivos:** `tests/` (nuevo test unitario/componente para `/empleados`)
  - **Depends on:** `[E-08]`, `[E-09]` · **Parallelizable:** `false`
  - **Criterio de salida:** Tests cubriendo restricción por rol `ROL_ADMIN`, filtro de búsqueda, protección de autoeliminación y flujos CRUD; `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build` pasan en verde.
