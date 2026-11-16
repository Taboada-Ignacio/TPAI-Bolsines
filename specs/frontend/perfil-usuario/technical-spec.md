# Especificación Técnica — Perfil de Usuario (`/perfil`)

**Feature ID:** `perfil-usuario`  
**Rama:** `feature/frontend`  
**Referencias:** `docs/cerebro/nodos/PPAI-IMPL-FRONTEND-HANDOFF.md`, `specs/frontend/app-shell-core/technical-spec.md`, `src/app/globals.css`.

---

## 1. Sistema de Diseño y Tokens

Toda la interfaz de `/perfil` debe consumir exclusivamente tokens semánticos definidos en `src/app/globals.css` para garantizar paridad total entre **tema claro** (`:root` / `[data-theme="light"]`) y **tema oscuro** (`[data-theme="dark"]` / `prefers-color-scheme: dark`).

### 1.1 Tipografía
- **Display (`--font-display`):** Space Grotesk — títulos de página (`PageHeading`) y títulos de sección (`h2`).
- **Cuerpo (`--font-sans`):** Plus Jakarta Sans — textos de formulario, etiquetas de valores y mensajes de estado.
- **Editorial (`--font-serif`):** Instrument Serif (`italic`, `20px`) — subtítulo descriptivo bajo el `PageHeading`.
- **Técnica / Rótulos (`--font-mono`):** JetBrains Mono — `MicroLabel`, `@usuario`, iniciales, códigos de comisión médica y hora de ingreso.

### 1.2 Colores Semánticos y Superficies
- **Lienzo y superficies:** `--canvas`, `--surface`, `--raised`.
- **Texto:** `--fg` (primario), `--muted` (secundario), `--danger-ink` (mensajes de error).
- **Bordes y divisores:** `--edge` (`1px solid var(--edge)` para contornos de islas), `--hair` (divisores internos en `<dl>` y cabeceras de isla), `--line` (contornos de `Input` y `Select`).
- **Acentos y estados:** `--accent`, `--primary` / `--on-primary`, `--danger`.

### 1.3 Regla de Islas sin Sombras
- Las islas de contenido (`Resumen de sesión` y `Editar datos personales`) usan `rounded-[20px] border border-edge bg-surface p-6` **sin `box-shadow`**.
- **Brecha detectada en componentes base:** `Button` (`src/components/ui/actions/Button.tsx`) en su variante `secondary` (usada por *"Cerrar sesión"*) aplica `hover:bg-white` con `text-ink` (`--fg`), lo cual en tema oscuro genera texto claro (`#eef2f6`) sobre fondo blanco puro (`#ffffff`). Debe corregirse usando tokens semánticos (`hover:bg-raised` o `hover:bg-hover`) y evaluar la remoción de `shadow-key-*` si se exige cero sombras en toda la vista.

---

## 2. Arquitectura de Componentes y Estado

### 2.1 Árbol de Componentes
```text
src/app/(app)/perfil/page.tsx (Server Component, dynamic = "force-dynamic")
├── getPerfilActual()          -> src/services/auth/sesion-actual.ts
├── rolService.listar()        -> src/app/api/_catalogos/servicios.ts
├── comisionMedicaService.listar()
└── <PerfilView perfil roles comisiones /> ("use client")
    └── <PageBody variant="padded">
        ├── <PageHeading rotulo={`${perfil.sesion.rol} · cuenta`} />
        ├── Subtítulo editorial (<p className="font-serif italic ...">)
        └── Grid asimétrico (1 col < 1024px | 0.9fr / 1.4fr >= 1024px)
            ├── <section aria-label="Resumen de sesión"> (Isla 1)
            │   ├── Avatar iniciales + Nombre + @usuario
            │   ├── <dl> (Comisión, Rol asignado, Ingreso de turno)
            │   └── <Button variant="secondary"> Cerrar sesión </Button>
            └── <section aria-label="Editar datos personales"> (Isla 2)
                ├── Cabecera interna (MicroLabel + h2)
                └── <form noValidate aria-busy={saving || undefined}>
                    ├── Grid sm:grid-cols-2: Field(nombre) + Field(apellido)
                    ├── Field(email)
                    ├── Grid sm:grid-cols-2: Field(rolId) + Field(comisionMedicaId)
                    ├── Cápsula de feedback (role="alert" | role="status")
                    └── <Button type="submit" variant="primary"> Guardar cambios </Button>
```

### 2.2 Contrato de Props y Datos
- `PerfilViewProps`:
  - `perfil: PerfilActual` (`sesion`, `empleadoId`, `email`, `rolId`, `comisionMedicaId`)
  - `roles: CatalogoOpcion[]` (`{ id: number; nombre: string }`)
  - `comisiones: CatalogoOpcion[]` (`{ id: number; nombre: string; codigo?: string }`)
- `GET /api/auth/me` (`src/app/api/auth/me/route.ts`): endpoint con `Cache-Control: no-store` que consulta `servicio.consultar(id)` a partir de la cookie de sesión.

### 2.3 Estado Cliente vs Servidor
- **Estado servidor:** `PerfilPage` resuelve en paralelo `getPerfilActual()`, `rolService.listar()` y `comisionMedicaService.listar()`. Tras un `PUT` exitoso, `router.refresh()` revalida el Server Component.
- **Estado cliente (`PerfilView`):**
  - Valores controlados: `nombre`, `apellido`, `email`, `rolId`, `comisionMedicaId`.
  - Estados asíncronos: `saving`, `loggingOut`.
  - Validación y feedback: `fieldErrors` (validación previa con `empleadoEdicionSchema.safeParse` de `src/dtos/empleado.dto.ts`) y `feedback` (`{ tipo: "ok" | "error"; mensaje: string } | null`).
- **Validaciones y manejo de errores:**
  - `empleadoEdicionSchema` exige `nombre` y `apellido` (`textoObligatorio`), `email` (`z.email()`), `rolId` y `comisionMedicaId` (`z.number().int().positive().max(2_147_483_647)`).
  - En `PUT /api/empleados/[id]` (`src/app/api/empleados/[id]/route.ts`), el servidor valida con el mismo schema y responde JSON o error HTTP.
  - **Brechas actuales:**
    1. Los `<Select>` de `rolId` y `comisionMedicaId` no limpian `fieldErrors.rolId` / `fieldErrors.comisionMedicaId` en `onChange`.
    2. Todos los errores no-email de Zod se mapean genéricamente a `"Completá este campo."`, sin distinguir mensajes específicos si el schema falla por longitud o formato de ID.
    3. Faltan `src/app/(app)/perfil/loading.tsx` y `src/app/(app)/perfil/error.tsx` para cubrir estados de carga y fallo SSR.

---

## 3. Coreografía de Movimiento GSAP

Actualmente `PerfilView.tsx` **no implementa animación de entrada GSAP**. Se especifica la coreografía obligatoria alineada con `spec-frontend-craft-flow` y `app-shell-core`:

- **Contenedor:** `useRef<HTMLDivElement>(null)` envolviendo el contenido interno de `PageBody` en `PerfilView`.
- **Atributos target:** `data-perfil-reveal` en el bloque de cabecera (`PageHeading` + subtítulo) y en ambas islas (`section`).
- **Timeline de entrada (con `gsap.matchMedia()`):**
  - Condición `(prefers-reduced-motion: no-preference)`:
    - Estado inicial (`gsap.set`): `{ autoAlpha: 0, y: 18 }`.
    - Secuencia (`gsap.to`): `{ autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out", clearProps: "transform,opacity,visibility" }`.
  - Condición `(prefers-reduced-motion: reduce)`:
    - Sin desplazamiento ni retardo: `gsap.set("[data-perfil-reveal]", { autoAlpha: 1, y: 0 })` (duración `0`).
- **Limpieza:** `mm.revert()` en el cleanup de `useEffect` / `useGSAP`.
- **Propiedades animadas:** únicamente `autoAlpha` y `y` (aceleradas por GPU).

---

## 4. Diseño Responsivo (`360px` / `768px` / `1280px`)

| Breakpoint | Comportamiento de Layout | Reglas y Ajustes |
| --- | --- | --- |
| **`360px` (Mobile)** | 1 columna apilada (`grid-cols-1`). Campos Nombre/Apellido y Rol/Comisión en 1 columna. | Los `<dd>` del `<dl>` deben permitir `min-w-0 break-words` para no comprimir `<dt>` con nombres largos de comisión. El botón *"Guardar cambios"* debe ocupar `w-full sm:w-auto` para facilitar el toque. |
| **`768px` (Tablet)** | 1 columna apilada dentro del área útil descontando la isla lateral (`--shell-left`). Campos del formulario en 2 columnas (`sm:grid-cols-2`). | Verificar que los paddings de `PageBody` (`p-5 sm:p-7`) y de las islas (`p-6`) mantengan márgenes equilibrados sin desborde horizontal. |
| **`1280px` (Desktop)** | Grilla asimétrica de 2 columnas: `lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]`. | Isla de resumen a la izquierda con `justify-between` alineada en altura con la isla del formulario a la derecha; botón *"Guardar cambios"* alineado a la derecha (`sm:w-auto`). |

---

## 5. Accesibilidad (a11y) y Marcado Semántico

- **Landmarks:** `<main id="contenido" tabIndex={-1}>` provisto por `PageBody`; dos `<section>` con `aria-label` descriptivos (`"Resumen de sesión"` y `"Editar datos personales"`).
- **Jerarquía de encabezados:** Un único `<h1>` en `PageHeading` y dos `<h2>` (uno por isla).
- **Asociación de errores en formularios (Brecha):** `Field` renderiza el mensaje de error con `id={`${id}-error`}` y `role="alert"`, pero `PerfilView` aún no pasa `aria-describedby={fieldErrors.<campo> ? `${id}-error` : undefined}` a los `Input` y `Select`, ni mueve el foco al primer campo inválido al fallar el submit.
- **Regiones vivas:** La cápsula de resultado usa `role="alert"` para errores y `role="status"` para confirmaciones (`Datos actualizados.`).
- **Estados ocupados y deshabilitados:** `<form aria-busy={saving || undefined}>`, botones con `aria-busy={loading || undefined}` y `aria-disabled`.
- **Contraste y foco:** Foco visible (`focus-visible:outline-2 focus-visible:outline-offset-2`) en todos los controles interactivos y verificación de contraste AA en ambos temas (corrigiendo `Button` `variant="secondary"` en modo oscuro).
