# Plan de Tareas — Perfil de Usuario (`/perfil`)

**Feature ID:** `perfil-usuario`  
**Archivos base auditados:** `src/app/(app)/perfil/page.tsx`, `src/components/perfil/PerfilView.tsx`, `src/components/ui/actions/Button.tsx`, `src/components/ui/forms/Field.tsx`, `src/services/auth/sesion-actual.ts`.

---

## Capa 1 — Estructura Base, Datos SSR y Tokens Claro/Oscuro

- [x] **[P-01] Ruta SSR `/perfil` con carga paralela de perfil y catálogos**
  - **Archivos:** `src/app/(app)/perfil/page.tsx`, `src/services/auth/sesion-actual.ts`
  - **Depends on:** Ninguna · **Parallelizable:** `true`
  - **Criterio de salida:** `PerfilPage` (`force-dynamic`) obtiene en paralelo `getPerfilActual()`, `rolService.listar()` y `comisionMedicaService.listar()` y pasa los DTOs mapeados a `PerfilView`.

- [x] **[P-02] Maquetación en islas sin sombras y tipografía del sistema**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-01]` · **Parallelizable:** `false`
  - **Criterio de salida:** Cabecera con `PageHeading` + subtítulo `font-serif italic` + grilla de dos islas (`Resumen de sesión` y `Editar datos personales`) con `rounded-[20px] border border-edge bg-surface` sin `box-shadow`, usando tokens semánticos (`fg`, `muted`, `raised`, `hair`, `edge`).

- [x] **[P-03] Corregir contraste en tema oscuro de `Button` (`variant="secondary"`)**
  - **Archivos:** `src/components/ui/actions/Button.tsx`
  - **Depends on:** Ninguna · **Parallelizable:** `true`
  - **Brecha detectada:** `variant="secondary"` usa `hover:bg-white` con `text-ink` (`--fg`), provocando texto blanco sobre fondo blanco al pasar el cursor en tema oscuro sobre el botón *"Cerrar sesión"*.
  - **Criterio de salida:** Reemplazar `hover:bg-white` (y colores fijos equivalentes en variantes) por tokens semánticos (`hover:bg-raised` / `border-edge`) verificando contraste AA en tema claro y oscuro.

- [x] **[P-04] Agregar estados `loading.tsx` y `error.tsx` para la ruta `/perfil`**
  - **Archivos:** `src/app/(app)/perfil/loading.tsx`, `src/app/(app)/perfil/error.tsx`
  - **Depends on:** `[P-01]` · **Parallelizable:** `true`
  - **Brecha detectada:** Actualmente `src/app/(app)/perfil/` solo contiene `page.tsx`; no hay esqueleto de carga SSR ni límite de error recuperable si falla la consulta de sesión o catálogos.
  - **Criterio de salida:** Esqueleto de dos islas respetando tokens claro/oscuro en `loading.tsx` y pantalla de error con botón de reintento en voseo rioplatense en `error.tsx`.

---

## Capa 2 — Lógica de Formulario, Validaciones y Manejo de Errores

- [x] **[P-05] Flujo de actualización (`PUT /api/empleados/[id]`) y cierre de sesión (`POST /api/auth/logout`)**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-02]` · **Parallelizable:** `false`
  - **Criterio de salida:** Envío validado con `empleadoEdicionSchema.safeParse`, bloqueo de concurrencia (`saving`, `loggingOut`), cápsula de feedback (`Datos actualizados.` / error) y `router.refresh()` al guardar; redirección a `/login` al cerrar sesión.

- [x] **[P-06] Completar limpieza de errores en selects y refinar mensajes de validación**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-05]` · **Parallelizable:** `false`
  - **Brecha detectada:**
    - Los `onChange` de `rolId` y `comisionMedicaId` no limpian `fieldErrors.rolId` ni `fieldErrors.comisionMedicaId`.
    - Todos los errores no-email de `empleadoEdicionSchema` se colapsan en `"Completá este campo."`, incluso si la falla corresponde a un selector inválido o validación de servidor por campo.
  - **Criterio de salida:** Limpiar el error del campo al cambiar cualquiera de los dos `<Select>`, diferenciar mensajes de validación por tipo de campo y manejar el caso de catálogos vacíos sin romper el formulario.

---

## Capa 3 — Coreografía GSAP y Movimiento Reducido

- [x] **[P-07] Implementar entrada escalonada con `gsap.matchMedia()` y respaldo `prefers-reduced-motion`**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-02]` · **Parallelizable:** `true`
  - **Brecha detectada:** `PerfilView.tsx` no posee ninguna animación GSAP ni manejo de `prefers-reduced-motion: reduce`.
  - **Criterio de salida:** Cabecera y ambas islas (`[data-perfil-reveal]`) entran con `autoAlpha` y `y` (`duration: 0.55`, `stagger: 0.08`, `ease: "power3.out"`) dentro de `gsap.matchMedia()` para `(prefers-reduced-motion: no-preference)`, y visibilidad inmediata (`duration: 0`) cuando `(prefers-reduced-motion: reduce)`.

---

## Capa 4 — Pulido Responsivo (`360px` / `768px` / `1280px`)

- [x] **[P-08] Ajustes responsivos para `360px`, `768px` y `1280px`**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-02]` · **Parallelizable:** `true`
  - **Brecha detectada:**
    - En `360px`, `<dd>` de Comisión en el `<dl>` tiene `text-right` sin `min-w-0 break-words`, pudiendo apretar el `<dt>` con nombres largos.
    - El botón *"Guardar cambios"* no ocupa ancho completo en mobile (`w-full sm:w-auto`).
  - **Criterio de salida:** Sin desborde horizontal ni compresión de etiquetas en `360px`; apilado limpio en `768px`; grilla asimétrica `0.9fr / 1.4fr` equilibrada en `1280px`; botón primario `w-full sm:w-auto`.

---

## Capa 5 — Auditoría de Accesibilidad (a11y) y Verificación Final

- [x] **[P-09] Landmarks semánticos, jerarquía de encabezados y regiones vivas básicas**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`, `src/components/layout/PageBody.tsx`
  - **Depends on:** `[P-02]` · **Parallelizable:** `false`
  - **Criterio de salida:** `<main id="contenido">`, `<section aria-label="...">` en ambas islas, `<h1>` único + `<h2>` por isla, `role="alert"` / `role="status"` en feedback y `aria-busy` durante envío.

- [x] **[P-10] Vincular `aria-describedby` en errores de campo y foco al primer campo inválido**
  - **Archivos:** `src/components/perfil/PerfilView.tsx`
  - **Depends on:** `[P-06]` · **Parallelizable:** `false`
  - **Brecha detectada:** `Input` y `Select` no reciben `aria-describedby="perfil-<campo>-error"` cuando existe error en `Field`, y al fallar la validación en submit el foco no se traslada al primer control inválido.
  - **Criterio de salida:** Todos los controles con error exponen `aria-describedby` apuntando al `id` del mensaje en `Field`, y al fallar la validación se enfoca el primer campo con error.

- [ ] **[P-11] Verificación integral (checks + navegador en claro/oscuro y 3 viewports)**
  - **Archivos:** Verificación en `TPAI-Bolsines`
  - **Depends on:** `[P-03]`, `[P-04]`, `[P-06]`, `[P-07]`, `[P-08]`, `[P-10]` · **Parallelizable:** `false`
  - **Criterio de salida:** `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build` en verde; inspección visual de `/perfil` en tema claro y oscuro a `360px`, `768px` y `1280px`, y prueba de teclado + `prefers-reduced-motion: reduce`.
