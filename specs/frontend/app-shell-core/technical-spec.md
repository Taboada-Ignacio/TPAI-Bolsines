# Technical Spec — Núcleo de la App en Islas

> **Feature ID:** `app-shell-core`
> **Flujo:** `spec-frontend-craft-flow` — Gate 2 (Tokens, Arquitectura y Coreografía GSAP)
> **Stack:** Next.js `16.4.6` (App Router) · React `19.3.1` · TypeScript `5.9.3` · Tailwind CSS `4.3.5` · GSAP `3.15.1` + `@gsap/react` · `lucide-react`
> **Dependencias nuevas:** ninguna.
> **Maqueta aprobable:** `app-shell-islas-b72e.html` (vista previa v2).

---

## 0. Decisiones de base

| Tema                  | Decisión                                                                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estética**          | Rumbo (`UI-05`) adaptado al moodboard: islas con borde de 1px, sin sombras; lima como única señal de "activo"; títulos gigantes; solapas mecánicas; cortina `clip-path`; grano animado. |
| **Temas**             | Claro y oscuro obligatorios en todo componente. Tokens **semánticos**; ningún componente usa hex ni colores de marca crudos para superficies o texto.                                   |
| **Responsive sin JS** | La isla lateral y la píldora inferior se renderizan siempre y se muestran u ocultan por CSS (`md:`). No hay `matchMedia` para decidir qué montar: evita saltos de hidratación.          |
| **Manual de marca**   | Esta feature lo lleva a la **v2.1**: tema oscuro, shell en islas y nivel de motion "firma" (ver §5). El manual v2.0 decía "sin modo oscuro" y "riel Tinta pegado": queda reemplazado.   |
| **Sesión**            | El núcleo necesita saber quién es el empleado. Usa `getSesionActual()`; mientras el login (`login-bolsin-3d`) no esté implementado, devuelve la sesión demo de Marcelo Gómez.           |

---

## 1. Sistema de temas

### 1.1 Mecanismo

- El tema vive en el atributo `data-theme="light" | "dark"` de `<html>`.
- **Sin atributo** = seguir al dispositivo: los tokens oscuros se aplican dentro de `@media (prefers-color-scheme: dark)` sobre `:root:not([data-theme="light"])`, y también sobre `:root[data-theme="dark"]`.
- La elección se guarda en la cookie `bolsines_tema` (`light` | `dark`, 1 año, `path=/`, `sameSite=lax`). El `RootLayout` (servidor) la lee con `cookies()` y escribe el atributo en el HTML inicial: **no hay parpadeo ni script inline**.
- `ThemeToggle` (cliente) cambia el atributo, actualiza la cookie y ajusta `<meta name="theme-color">`.
- `color-scheme: light dark` en `:root` (y fijo según `data-theme`) para que scrollbars y controles nativos acompañen.
- Tailwind: `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));` solo para excepciones puntuales; la regla es usar tokens semánticos, no `dark:`.

### 1.2 Tokens semánticos

Se definen como variables en `:root` y se exponen a Tailwind con `@theme inline { --color-canvas: var(--canvas); … }`.

| Token                    | Uso                                       | Claro                   | Oscuro                   |
| ------------------------ | ----------------------------------------- | ----------------------- | ------------------------ |
| `canvas`                 | Fondo de la app                           | `#C7D1DD`               | `#0A0F1A`                |
| `surface`                | Islas, tarjetas, inputs                   | `#EEF2F6`               | `#121927`                |
| `raised`                 | Superficie sobre superficie, hover sólido | `#E1E8F0`               | `#1B2433`                |
| `glass`                  | Fondo translúcido de islas                | `rgb(238 242 246 / .9)` | `rgb(18 25 39 / .9)`     |
| `fg`                     | Texto principal                           | `#0B1220`               | `#EEF2F6`                |
| `muted`                  | Texto secundario                          | `#475569`               | `#94A3B8`                |
| `edge`                   | Borde de islas (1px)                      | `rgb(11 18 32 / .16)`   | `rgb(238 242 246 / .14)` |
| `hair`                   | Separadores de filas                      | `rgb(11 18 32 / .09)`   | `rgb(238 242 246 / .08)` |
| `hover`                  | Fondo de hover                            | `rgb(11 18 32 / .05)`   | `rgb(238 242 246 / .05)` |
| `line`                   | Borde de inputs (≥ 3:1)                   | `#64748B`               | `#7487A0`                |
| `accent`                 | Links, rutas, foco                        | `#0251B0`               | `#7FB2FF`                |
| `primary` / `on-primary` | Relleno y texto del botón principal       | `#0251B0` / `#EEF2F6`   | `#5B9BFF` / `#0A0F1A`    |
| `primary-deep`           | Sombra 3D del botón principal             | `#01397D`               | `#2F6FD6`                |
| `lime` / `on-lime`       | Activo, en tránsito                       | `#D1FF42` / `#0B1220`   | igual                    |
| `lime-edge`              | Borde del lima                            | `#0B1220`               | `transparent`            |
| `mech` / `mech-fg`       | Celdas del `SplitFlap`                    | `#161E2E` / `#EEF2F6`   | igual                    |
| `amber` / `amber-ink`    | A3: fondo / texto                         | `#F59E0B` / `#92400E`   | `#F59E0B` / `#FBBF24`    |
| `danger` / `danger-ink`  | Error: relleno / texto                    | `#BE123C` / `#9F1239`   | `#F43F5E` / `#FDA4AF`    |

Colores de marca fijos (no cambian con el tema, solo para piezas de marca): `brand-ink #0B1220` (persiana de entrada), `brand-cobalt #0251B0` + `brand-cobalt-deep #01397D` (isotipo keycap).

### 1.3 Contraste verificado

| Par                                        | Claro                             | Oscuro      |
| ------------------------------------------ | --------------------------------- | ----------- |
| `fg` sobre `canvas` / `surface`            | 12.1 / 16.5                       | 17.0 / 15.6 |
| `muted` sobre `canvas` / `surface`         | 4.9 / 6.7                         | 7.5 / 6.9   |
| `accent` sobre `canvas` / `surface`        | 4.8 / 6.7                         | 8.9 / 8.1   |
| `on-primary` sobre `primary`               | 6.7                               | 6.9         |
| `on-lime` sobre `lime`                     | 16.1                              | 16.1        |
| `lime` contra el fondo de la isla          | 1.2 → **lleva borde `lime-edge`** | 15.2        |
| `line` sobre `surface`                     | 4.2                               | 4.8         |
| `amber-ink` / `danger-ink` sobre `surface` | 6.3 / 7.1                         | 10.5 / 9.3  |

---

## 2. Geometría del núcleo

| Variable                     | Valor                                                                                | Qué es                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `--isle-gap`                 | `8px`                                                                                | Separación de las islas respecto de los bordes ("bien pegadas") |
| `--side-w` / `--side-w-open` | `60px` / `206px`                                                                     | Isla lateral cerrada / abierta                                  |
| `--isle-r`                   | `24px`                                                                               | Radio de la isla lateral                                        |
| `--top-h` / `--top-r`        | `50px` / `18px`                                                                      | Alto y radio de las islas superiores                            |
| `--dock-h`                   | `52px`                                                                               | Alto de la píldora inferior (radio `999px`)                     |
| `--shell-left`               | `0` en mobile; `calc(var(--side-w) + var(--isle-gap) * 2)` desde `md`                | Zona reservada a la izquierda                                   |
| `--shell-top`                | `calc(var(--top-h) + var(--isle-gap) * 2)`                                           | Zona reservada arriba                                           |
| `--shell-bottom`             | `calc(var(--dock-h) + 20px + env(safe-area-inset-bottom))` en mobile; `0` desde `md` | Zona reservada abajo                                            |

- Islas: `position: fixed`, `bg-glass backdrop-blur-[14px] border border-edge`, **sin `box-shadow`**.
- Capas: contenido `0` · islas de pantalla `10–20` · islas superiores `30` · isla lateral y píldora `40` · hoja "Más" y menús `50` · modal `60` · toast `70` · persiana de entrada `80`.
- Breakpoints: mobile `< 768px` (píldora), tablet `768–1279px` (isla lateral, se abre con botón), escritorio `≥ 1280px` (se abre además con hover).
- Hover solo en dispositivos que lo soportan: `@media (hover: hover) and (pointer: fine)`.

---

## 3. Component Architecture & State

```text
src/
├── app/
│   ├── globals.css                    # Tokens claro/oscuro, geometría, grano, keyframes
│   ├── layout.tsx                     # Lee cookie de tema → <html data-theme>; fuentes
│   └── (app)/                         # Grupo de rutas con núcleo
│       ├── layout.tsx                 # Servidor: sesión + cookie de entrada → <AppShell>
│       ├── template.tsx               # Cliente: cortina del contenido en cada navegación
│       ├── loading.tsx                # Esqueleto de pantalla
│       ├── error.tsx                  # "No pudimos cargar esta pantalla" + Reintentar
│       ├── not-found.tsx              # "Esta pantalla no existe" + Ir a Inicio
│       ├── [...resto]/page.tsx        # notFound() para que el 404 se vea dentro del núcleo
│       ├── inicio/page.tsx            # Saludo gigante + tablero de destinos + datos de sesión
│       └── seguimiento/page.tsx       # Pantalla base a sangre
├── lib/
│   ├── navigation.ts                  # DESTINOS: única fuente de la navegación
│   ├── theme.ts                       # Nombre de cookie, tipo Tema, parseo
│   └── cn.ts
├── services/auth/
│   └── sesion-actual.ts               # getSesionActual(): cookie de sesión o sesión demo
├── hooks/
│   ├── useDestinoActivo.ts            # Destino activo según pathname
│   └── useLiquidIndicator.ts          # Mide el ítem activo y anima la gota (GSAP)
└── components/
    ├── layout/
    │   ├── AppShell.tsx               # Compone islas + PageBody + persiana de entrada
    │   ├── SideIsland.tsx             # Isla lateral (md+)
    │   ├── DockPill.tsx               # Píldora inferior (mobile)
    │   ├── IdentityIsland.tsx         # SplitFlap CM + rótulo + título de pantalla
    │   ├── ActionsIsland.tsx          # Slot de acciones + ThemeToggle + usuario
    │   ├── PageActions.tsx            # Portal: una pantalla inyecta sus acciones en la isla
    │   ├── ThemeToggle.tsx            # Sol/luna
    │   ├── UserMenu.tsx               # Menú de usuario + Cerrar sesión (md+)
    │   ├── MoreSheet.tsx              # Hoja "Más" (mobile): usuario, tema, cerrar sesión
    │   ├── PageBody.tsx               # <main>: variantes "padded" | "bleed"
    │   ├── PageHeading.tsx            # Rótulo + título gigante con marcador
    │   ├── EnterCurtain.tsx           # Persiana de Tinta al venir del login
    │   ├── SkipLink.tsx               # Saltar al contenido
    │   └── BrandMark.tsx              # Isotipo keycap "B" + wordmark
    └── ui/
        ├── surfaces/Island.tsx        # Primitiva de isla (as, radius, className)
        ├── surfaces/Sheet.tsx         # Hoja inferior sobre <dialog>
        ├── actions/IconButton.tsx     # 40–44px, aria-label obligatorio
        ├── display/SplitFlap.tsx      # Solapas mecánicas (adaptado del kit Rumbo)
        ├── display/MicroLabel.tsx     # Rótulo mono 10px, +0.14em
        ├── display/Marker.tsx         # Resaltador lima sobre una palabra
        ├── display/BoardRow.tsx       # Fila de tablero: número, título, detalle, flecha
        └── feedback/Skeleton.tsx      # Bloques de carga
```

### 3.1 Fuente única de navegación (`lib/navigation.ts`)

```ts
export type Destino = {
  id: string;
  href: string;
  nombre: string; // "Seguimiento"
  nombreCorto: string; // para la píldora inferior
  detalle: string; // línea del tablero de Inicio
  icono: LucideIcon;
  cuerpo: "padded" | "bleed";
  enTablero: boolean; // si aparece como fila en Inicio
};

export const DESTINOS: Destino[] = [
  {
    id: "inicio",
    href: "/inicio",
    nombre: "Inicio",
    nombreCorto: "Inicio",
    detalle: "",
    icono: House,
    cuerpo: "padded",
    enTablero: false,
  },
  {
    id: "seguimiento",
    href: "/seguimiento",
    nombre: "Seguimiento",
    nombreCorto: "Seguimiento",
    detalle: "Dónde está cada bolsín que salió de tu comisión",
    icono: MapPinned,
    cuerpo: "bleed",
    enTablero: true,
  },
];
```

- Isla lateral, píldora, título de la isla de identidad y tablero de Inicio leen de acá. Agregar una pantalla = una entrada + su carpeta en `(app)/`.
- La píldora muestra como máximo 3 destinos + **Más**; si hay más de 3, el resto se lista dentro de la hoja "Más".
- Activo: `pathname === href || pathname.startsWith(href + "/")`.

### 3.2 Contratos de componentes

| Componente       | Props                                                 | Notas                                                                                           |
| ---------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `AppShell`       | `sesion: SesionVista`, `entrada: boolean`, `children` | Cliente. `SesionVista = { nombre, apellido, iniciales, rol, cm: { codigo, nombre, sigla } }`.   |
| `SideIsland`     | `destinos`, `sesion`                                  | Estado local `fijada: boolean`. Abierta si `fijada`, `:hover` (puntero fino) o `:focus-within`. |
| `DockPill`       | `destinos`                                            | Abre `MoreSheet`. Se oculta con `visualViewport` reducido (teclado).                            |
| `IdentityIsland` | `sigla`, `cmNombre`, `titulo`                         | `SplitFlap` con la sigla (`COR`).                                                               |
| `ActionsIsland`  | `sesion`                                              | Contiene `<div id="page-actions">` para el portal.                                              |
| `PageActions`    | `children`                                            | `createPortal` al slot; cada pantalla lo usa para sus botones.                                  |
| `PageBody`       | `variant`, `children`                                 | `padded`: padding con `--shell-*` + `max-w-[940px]`. `bleed`: `absolute inset-0`.               |
| `PageHeading`    | `rotulo`, `children`                                  | Título `clamp(2.5rem, 6vw, 4rem)`, `-0.05em`, `leading-[.94]`.                                  |
| `SplitFlap`      | `text`, `size`                                        | `aria-label` con el valor; celdas `aria-hidden`.                                                |
| `Island`         | `as`, `className`                                     | Solo estilo; sin lógica.                                                                        |

### 3.3 Estado y datos

- **Servidor:** `(app)/layout.tsx` obtiene la sesión (`getSesionActual()`) y lee la cookie efímera `bolsines_entrada` (la escribe el login justo antes de navegar). Pasa `entrada` a `AppShell`, que al montar reproduce la entrada y borra la cookie. Así la persiana ya viene pintada en el HTML y no hay un cuadro de la app visible antes.
- **Cliente:** tema (atributo + cookie), isla fijada (estado local, no se persiste), hoja y menú abiertos (estado local).
- **Sigla de la CM:** `sigla` de 3 letras derivada del nombre de la comisión en `sesion-actual.ts` (`Córdoba → COR`) hasta que el backend la provea.
- **Cerrar sesión:** `POST /api/auth/logout` y `router.replace("/login")`. Mientras el login no exista, el botón está presente y navega a `/login`.

---

## 4. Tipografía y detalles de craft

- Fuentes del manual vía `next/font`: Space Grotesk (títulos), Plus Jakarta Sans (UI), JetBrains Mono (rótulos y solapas), Instrument Serif itálica (solo wordmark y subtítulo de Inicio).
- **Marcador:** `background: linear-gradient(var(--lime), var(--lime)) no-repeat 0 62% / 100% 74%`, texto siempre `#0B1220`, `box-decoration-break: clone`.
- **Grano:** capa fija `pointer-events-none` sobre todo (`z` por encima de islas, debajo de modales), `opacity .045`, animada con `steps(6)` cada `0.9s`.
- **Isotipo:** keycap "B" `brand-cobalt` con sombra sólida `0 3px 0 brand-cobalt-deep` (la única sombra del núcleo: es un objeto, no una superficie).
- **Foco:** `outline-2 outline-offset-2 outline-accent` en ambos temas.
- **Áreas táctiles:** ítems de navegación `42px` de alto con `6px` de separación (zona efectiva ≥ 44px); botones de la píldora `42px` de alto.

---

## 5. GSAP Motion Choreography

Todo dentro de `useGSAP` + `gsap.matchMedia()` con las condiciones `motion: "(prefers-reduced-motion: no-preference)"` y `reduce: "(prefers-reduced-motion: reduce)"`.

### 5.1 Nivel de motion "firma" (cambio al manual → v2.1)

El manual v2.0 limitaba todo a `100–280ms`. Rumbo usa curvas exponenciales más largas (`0.42–0.6s`) que **no hacen esperar** porque arrancan explosivas y el contenido es usable desde el primer cuadro. Regla nueva:

- **Controles** (botones, inputs, hover, foco): `100–280ms`, como antes.
- **Navegación y revelado** (gota, cortina, persiana, islas): hasta `600ms` con `expo.out`, siempre interrumpibles y sin bloquear clics.
- **Propiedades permitidas:** `transform`, `opacity` y `clip-path`. Dos excepciones acotadas a elementos `fixed` chicos que no provocan reflujo del contenido: el `width` de la isla lateral y el `width` de la gota de la píldora.

Curvas: `expo = "expo.out"` (equivale a `cubic-bezier(0.16, 1, 0.3, 1)`); presión táctil `scale 0.95`, `0.12s`, `power2.out`.

### 5.2 Gota líquida (cambio de pestaña)

Un único elemento por navegación, `position: absolute`, detrás de los ítems.

| Navegación       | Animación                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Isla lateral     | `y` hasta el `offsetTop` del ítem activo, `0.42s`, `expo.out`. En paralelo, `keyframes` de forma: `scaleY 1 → 1.28 → 1`, `scaleX 1 → 0.94 → 1` (pico al 35%). |
| Píldora inferior | `x` y `width` hasta el ítem activo, `0.42s`, `expo.out`; forma: `scaleX 1 → 1.14 → 1`, `scaleY 1 → 0.9 → 1`.                                                  |

- `useLiquidIndicator` mide con `offsetTop/offsetLeft/offsetWidth`; recalcula con `ResizeObserver` y al cargar fuentes. La primera colocación es instantánea (`gsap.set`).
- El color del ícono/texto activo cambia a `on-lime` con una transición CSS de `0.2s`.

### 5.3 Contenido (cada navegación, en `(app)/template.tsx`)

| Elemento                                                 | Animación                                                                                                      |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Contenedor de la pantalla                                | `clipPath: "inset(0 100% 0 0)" → "inset(0 0% 0 0)"`, `0.5s`, `expo.out`; `clearProps: "clipPath"` al terminar. |
| Elementos con `data-reveal` (filas del tablero, bloques) | Misma cortina, `stagger 0.1`, desde `0.12s`.                                                                   |

### 5.4 Isla de identidad

- `SplitFlap`: al cambiar el `pathname`, cada solapa recorre caracteres al azar cada `45ms`, `5 + índice × 2` pasos, en `lime`, y fija en `mech-fg`.
- Título: `autoAlpha 0 → 1`, `y 6 → 0`, `0.24s`, `power3.out`.

### 5.5 Isla lateral abrir/cerrar

- CSS: `transition: width 0.32s cubic-bezier(0.16, 1, 0.3, 1)`.
- Nombres: `opacity 0 → 1` y `translateX(-6px → 0)`, `0.28s`, con `0.05s` de retraso al abrir; al cerrar, `0.12s` sin retraso.

### 5.6 Hoja "Más" y menú de usuario

| Elemento        | Abrir                                                                        | Cerrar               |
| --------------- | ---------------------------------------------------------------------------- | -------------------- |
| Velo de la hoja | `autoAlpha 0 → 1`, `0.2s`                                                    | `0.14s`              |
| Hoja            | `yPercent 100 → 0`, `0.42s`, `expo.out`                                      | `0.22s`, `power2.in` |
| Menú de usuario | `autoAlpha` + `scale 0.96 → 1` (origen en las iniciales), `0.2s`, `expo.out` | `0.12s`              |

### 5.7 Entrada desde el login (`entrada = true`)

| t (s)  | Elemento                                 | Animación                                                               |
| ------ | ---------------------------------------- | ----------------------------------------------------------------------- |
| `0`    | `EnterCurtain` (`brand-ink`, cubre todo) | `clipPath: "inset(0 0 0% 0)" → "inset(0 0 100% 0)"`, `0.6s`, `expo.out` |
| `0.12` | Isla lateral                             | `x -18 → 0`, `autoAlpha 0 → 1`, `0.5s`, `expo.out`                      |
| `0.2`  | Islas superiores / píldora               | `y -14 → 0` / `y 18 → 0`, `autoAlpha`, `0.5s`, `expo.out`               |
| `0.2`  | `SplitFlap`                              | Giro completo                                                           |
| `0.25` | Contenido                                | Cortina de §5.3                                                         |

Total `≈ 0.9s`. Las islas nunca tienen `pointer-events: none`.

### 5.8 Cambio de tema

Transición CSS de `background-color`, `border-color` y `color` en `0.25s` sobre `body`, islas y superficies. Sin GSAP.

### 5.9 Reduced motion

- Gota: `gsap.set` directo a la posición.
- Sin cortina, sin persiana, sin entrada de islas, `SplitFlap` muestra el valor final, grano estático, hoja y menú aparecen sin desplazamiento.
- Las transiciones CSS quedan en `0s` vía `@media (prefers-reduced-motion: reduce)`.

---

## 6. Accessibility (a11y) & Semantic Markup

- **Estructura:** `SkipLink` → `<nav aria-label="Navegación principal">` (isla lateral y píldora: solo una visible; la oculta lleva `display: none`, por lo que no se duplica para lectores) → `<header>` (islas superiores) → `<main id="contenido" tabIndex={-1}>`.
- **Destinos:** `<Link>` con `aria-current="page"` en el activo. En la isla cerrada, el nombre sigue en el DOM (visible para lectores) aunque esté transparente.
- **Isla lateral:** se abre con `:focus-within`, así el teclado siempre ve los nombres. El botón de fijar usa `aria-pressed`.
- **Tema:** `<button aria-label="Cambiar a tema oscuro|claro">`.
- **Menú de usuario:** botón con `aria-haspopup="menu"` y `aria-expanded`; `Esc` y clic fuera cierran y devuelven el foco.
- **Hoja "Más":** `<dialog>` con `showModal()` (trap de foco y `Esc` nativos), `aria-labelledby`.
- **SplitFlap:** `aria-label` estable; el giro no se anuncia.
- **Título de pantalla:** cada pantalla tiene un único `<h1>` (el gigante en `padded`; visualmente oculto en `bleed`). El título de la isla de identidad no es encabezado.
- **Cambio de ruta:** tras navegar, foco a `<main>` para que el lector anuncie la pantalla nueva.
- **Contraste:** tabla §1.3 en ambos temas.

---

## 7. Testing

| Qué                                                                              | Tipo                |
| -------------------------------------------------------------------------------- | ------------------- |
| `lib/navigation.ts`: destino activo (exacto y subrutas), reparto píldora / "Más" | Unit (Vitest)       |
| `lib/theme.ts`: parseo de cookie (valores válidos, inválidos, ausente)           | Unit                |
| `sesion-actual.ts`: sesión demo y derivación de sigla (`Córdoba → COR`)          | Unit                |
| Núcleo en claro y oscuro, tres tamaños, teclado, reduced motion                  | Manual en navegador |
