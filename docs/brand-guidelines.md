# Manual de Marca & Design System — Sistema de Bolsines (PPAI DSI)

> **Versión:** 2.1 — tema claro y oscuro con tokens semánticos, App Shell en islas flotantes, inventario de componentes base y motion Rumbo (niveles control y firma)
> **Fecha:** 2026-11-15
> **Estado:** Vigente para `feature/frontend`. Reemplaza por completo a la v2.0 (tema único y riel Tinta pegado).
> **Usuario objetivo (Proto-Persona):** Marcelo Gómez (31 años), Encargado de Despacho y Logística de Bolsines (depósito de alto volumen, uso en escritorio, tablet y, de forma ocasional, celular).

### Cambios respecto de la v2.0

- **Tema claro y oscuro:** reemplaza la restricción de tema único por un sistema de tokens semánticos (`canvas`, `surface`, `raised`, `glass`, `fg`, `muted`, `edge`, `hair`, `hover`, `line`, `accent`, `primary`, `lime`, `lime-edge`, `mech`, `amber`, `danger`) con `data-theme="light" | "dark"` en `<html>` y cookie `bolsines_tema` (sin atributo sigue al dispositivo).
- **App Shell en islas:** reemplaza el riel Tinta pegado + Header barra por islas flotantes (`SideIsland`, `DockPill`, `IdentityIsland`, `ActionsIsland`) con borde de `1px` (`edge`), sin sombras, pegadas a `8px` del borde.
- **Nivel de motion "firma":** se mantiene `100–280ms` en controles e interacciones directas, y se habilita hasta `600ms` (`expo.out`) para navegación y revelado de firma (gota líquida, cortina `clip-path`, persiana de entrada).
- **Tokens Tailwind v4 (§10):** actualizados a variables semánticas en `:root` + `@theme inline` + `@custom-variant dark`.

---

## 1. Propósito de la Marca y Personalidad Visual

El **Sistema de Seguimiento de Bolsines** traduce la presión operativa de un depósito real en una interfaz **táctil, minimalista, directa y de alta certeza**.

- **Lo que siente Marcelo:** presión por horarios estrictos, miedo a traspapelar documentación o perder un bolsín, necesidad de control absoluto en un vistazo.
- **Principios de Craftwork (Anti-Slop + `stageshow` + Rumbo):**
  1. **Fondo técnico frío (no blanco clínico) + Film Grain:** canvas _Blue Mist_ `#C7D1DD` con micro-textura SVG (`opacity: 0.03`). Las tarjetas claras `#EEF2F6` se despegan del fondo sin necesidad de sombras grandes.
  2. **Restraint (Restricción de texto):** mostrar únicamente los 4–6 datos críticos que Marcelo necesita en 1 segundo (Nro. Bolsín, Precinto, CM Destino, Estado GPS, Última Actualización, Remitos). Cero ruido decorativo.
  3. **Contraste de autoridad + acción:** Tinta `#0B1220` y Verde Bosque `#073B31` dan solidez; **Elite Blue `#0251B0`** marca rutas, confianza y la acción principal; **Volt Lime `#D1FF42`** marca movimiento, telemetría viva y el ítem activo.
  4. **Tactilidad 3D (_Keycaps_):** botones con sombra sólida inferior de `4px` que se hunden al clic (`+2px`), pensados para mouse y para dedo en tablet.
  5. **Difuminado (_Frosted Glass_):** paneles flotantes sobre el mapa (`backdrop-blur`) con contraste WCAG AA garantizado.

**Tono de voz:** directo, operativo, sin jerga técnica (_"Bolsín 8420 en tránsito hacia CM Rosario"_, nunca _"Error 500"_).

**Temas claro y oscuro:** la app soporta ambos temas desde el primer día mediante tokens semánticos (`data-theme="light" | "dark"` en `<html>`, guardado en la cookie `bolsines_tema`, o siguiendo `prefers-color-scheme` cuando no hay elección). En tema claro, el fondo es Blue Mist `#C7D1DD` con islas `#EEF2F6` y el lima lleva borde `lime-edge` (`#0B1220`) para garantizar contraste; en tema oscuro, el fondo es `#0A0F1A` con islas `#121927` y el lima brilla a pleno. Ningún componente usa hex crudos para superficies o texto.

---

## 2. Color

### 2.1 Tokens semánticos (claro y oscuro)

Los componentes usan siempre **tokens semánticos** expuestos vía `@theme inline`. Los colores de marca fijos (`brand-ink #0B1220`, `brand-cobalt #0251B0`, `brand-cobalt-deep #01397D`) se reservan para piezas de marca como el isotipo keycap y la persiana de entrada.

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

**Regla de oro del lima:** en tema claro, `lime` lleva borde `lime-edge` (`#0B1220`) porque su contraste sobre `canvas` / `surface` es bajo (`1.2:1`). En tema oscuro (`15.2:1`) `lime-edge` es `transparent`.

### 2.2 Colores de señal y estado (CU 36)

| Situación                        | Fondo              | Texto                  | Uso                                                                                             |
| -------------------------------- | ------------------ | ---------------------- | ----------------------------------------------------------------------------------------------- |
| **En tránsito / GPS activo**     | `lime` `#D1FF42`   | `ink` `#0B1220`        | Pill `En tránsito`, marcador activo en el mapa.                                                 |
| **Notificado al GCM (CU 30/31)** | `cobalt` `#0251B0` | `surface` `#EEF2F6`    | Pill y toast de confirmación de correo enviado.                                                 |
| **GPS sin respuesta (Flujo A3)** | `amber` `#F59E0B`  | `ink` `#0B1220`        | Badge _"GPS sin cobertura"_ y marcador estático. El ámbar **nunca** se usa como color de texto. |
| **Texto de advertencia**         | —                  | `amber-ink` `#92400E`  | Marca temporal de última posición conocida en A3.                                               |
| **Error / bloqueo**              | `danger` `#BE123C` | blanco `#FFFFFF`       | Botón `danger`, fallo de envío. Nunca oculta el mapa.                                           |
| **Texto de error**               | —                  | `danger-ink` `#9F1239` | Mensaje de validación debajo de un input.                                                       |
| **Texto secundario**             | —                  | `muted` `#475569`      | Etiquetas auxiliares, timestamps, placeholders.                                                 |
| **Borde de control**             | —                  | `line` `#64748B`       | Borde de inputs y selects (≥ 3:1, WCAG 1.4.11).                                                 |
| **Borde fantasma**               | —                  | `ink/10`               | Contorno decorativo de cards y separadores (estilo Rumbo).                                      |

> **Nota de dominio:** el CU 36 solo lista bolsines en estado `Enviado`, por eso no existe un badge `Entregado` en esta pantalla. `Recibido en destino` llegará con el CU 28 y usará el par cobalt/surface.

### 2.3 Pares de contraste verificados (WCAG 2.2)

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

**Prohibido:** `amber` como texto, `lime` sobre superficies claras sin `lime-edge`, hex crudos en componentes de UI.

---

## 3. Tipografía Dual de Alta Densidad (Rumbo `UI-05`)

Titulares geométricos condensados + micro-etiquetas monoespaciadas expandidas.

| Familia               | Rol                                                        | Carga                                                                       |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Space Grotesk**     | Display y títulos                                          | `next/font/google`, variable `--font-space-grotesk`, pesos 500–700          |
| **Plus Jakarta Sans** | UI general, cuerpo, botones                                | `--font-plus-jakarta`, pesos 400–700                                        |
| **Instrument Serif**  | Acento editorial en itálica (solo wordmark y login)        | `--font-instrument-serif`, `weight: "400"`, `style: "italic"` (obligatorio) |
| **JetBrains Mono**    | Micro-labels, precintos, números, coordenadas, `SplitFlap` | `--font-jetbrains-mono`, pesos 500–600                                      |

| Nivel         | Uso                                                | Fuente            | Tamaño    | Peso / tracking               |
| ------------- | -------------------------------------------------- | ----------------- | --------- | ----------------------------- |
| `Display`     | Ruta `ORIGEN → DESTINO`, título de login           | Space Grotesk     | `28–36px` | `700`, `-0.035em`             |
| `H1`          | Título de página (`Seguimiento`)                   | Space Grotesk     | `22–24px` | `700`, `-0.03em`              |
| `H2`          | Secciones, título de modal                         | Space Grotesk     | `18–20px` | `700`, `-0.025em`             |
| `Micro-label` | `CM ORIGEN`, `PRECINTO`, `GPS`, ítems de BottomNav | JetBrains Mono    | `10–11px` | `600`, `uppercase`, `+0.14em` |
| `Editorial`   | _sistema de bolsines_                              | Instrument Serif  | `16–18px` | `400`, itálica                |
| `Body`        | Nombres de CM, mensajes, botones                   | Plus Jakarta Sans | `14–15px` | `500`                         |
| `Data`        | `Nº 8420`, precinto, lat/lng, hora                 | JetBrains Mono    | `13–14px` | `600`, `tabular-nums`         |

Reglas: tamaño mínimo de texto legible `13px` (las micro-labels de `10–11px` van siempre en mayúsculas y con tracking amplio); máximo dos pesos por componente; nunca Instrument Serif dentro de la operación diaria (lista, detalle, modal).

---

## 4. Espaciado, Radios, Sombras, Capas y Breakpoints

### 4.1 Espaciado

Escala base de `4px` (la de Tailwind). Ritmo de uso: `4 · 8 · 12 · 16 · 24 · 32`. Gutter de página `16px` en mobile y `24px` desde tablet. Área táctil mínima `44×44px` en todo control interactivo (uso en tablet con guantes o apuro).

### 4.2 Radios

| Token             | Valor   | Uso                                               |
| ----------------- | ------- | ------------------------------------------------- |
| `rounded-control` | `10px`  | Botones, inputs, selects                          |
| `rounded-card`    | `16px`  | Cards, paneles, modal, sheet                      |
| `rounded-pill`    | `999px` | Badges, pill activo de BottomNav, chips de filtro |

### 4.3 Sombras

| Token               | Valor                                   | Uso                                           |
| ------------------- | --------------------------------------- | --------------------------------------------- |
| `shadow-key-cobalt` | `0 4px 0 #01397D`                       | Botón primario en reposo                      |
| `shadow-key-lime`   | `0 4px 0 #9EC91E`                       | Botón lima en reposo                          |
| `shadow-key-ink`    | `0 4px 0 #0B1220`                       | Botón secundario (surface con borde tinta)    |
| `shadow-float`      | `0 16px 40px -16px rgba(11,18,32,0.45)` | Paneles flotantes sobre el mapa, modal, sheet |

En `:active` la sombra 3D baja a `2px` y el botón se traslada `2px`. Las cards **no** llevan sombra: se separan del canvas por color y borde fantasma.

### 4.4 Capas (`z-index`)

| Capa                     | Valor |
| ------------------------ | ----- |
| Mapa                     | `0`   |
| Lista / panel de filtros | `10`  |
| Panel `Costado`          | `20`  |
| Header                   | `30`  |
| SideNav / BottomNav      | `40`  |
| Sheet mobile             | `50`  |
| Modal + overlay          | `60`  |
| Toast                    | `70`  |

### 4.5 Breakpoints

| Rango        | Nombre  | Navegación                           | Layout de `/seguimiento`                                                                              |
| ------------ | ------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `< 768px`    | Mobile  | `BottomNav`                          | Mapa a pantalla completa + lista en `Sheet` inferior; el detalle abre como sheet a pantalla completa. |
| `768–1279px` | Tablet  | `SideNav` riel (`72px`)              | Lista `320px` + mapa; el detalle `Costado` flota sobre el mapa (frosted).                             |
| `≥ 1280px`   | Desktop | `SideNav` riel, expandible a `232px` | Lista `360px` + mapa + `Costado` `400px` anclado a la derecha.                                        |

---

## 5. App Shell y Navegación en Islas

El shell es igual para todas las pantallas autenticadas. `/login` no lo usa. Las piezas de navegación y cabecera son **islas flotantes** (`bg-glass backdrop-blur-[14px] border border-edge`, **sin `box-shadow`**), pegadas a `8px` (`--isle-gap`) de los bordes. El contenido pasa por debajo.

### 5.1 `AppShell` y fondo (`canvas` + grano)

- `bg-canvas` en `body` + capa fija `pointer-events-none` con `--grain-svg` a `opacity: 0.045`, animada con `steps(6)` cada `0.9s` (estática con `prefers-reduced-motion`).
- Geometría: `--isle-gap: 8px`, `--side-w: 60px`, `--side-w-open: 206px`, `--isle-r: 24px`, `--top-h: 50px`, `--top-r: 18px`, `--dock-h: 52px`.

### 5.2 `SideIsland` (tablet y desktop, `md+`)

- **Posición:** `fixed`, pegada a `8px` de izquierda/arriba/abajo, radio `24px`, ancho `60px` cerrada / `206px` abierta (overlay por encima del contenido, sin desplazarlo).
- **Apertura:** en escritorio se abre al pasar el mouse (`@media (hover: hover) and (pointer: fine)`); en tablet y escritorio también por `:focus-within` o con el botón **Fijar abierta** (`aria-pressed`).
- **Gota líquida:** un único indicador `lime` (con borde `lime-edge`) viaja al destino activo con `expo.out` (`0.42s`) y estiramiento vertical.
- **Pie de isla:** botón Fijar + avatar con iniciales que abre `UserMenu` (nombre, comisión y **Cerrar sesión**).
- **Elemento semántico:** `<nav aria-label="Navegación principal">`.

### 5.3 `DockPill` (mobile, `< 768px`)

- Píldora flotante centrada abajo (`bottom: max(10px, env(safe-area-inset-bottom))`), radio `999px`, alto `52px`.
- Máximo 3 destinos + botón **Más** (que abre `MoreSheet` sobre `<dialog>` con usuario, cambio de tema, destinos extra si hubiera y **Cerrar sesión**).
- **Gota líquida:** pill `lime` (con borde `lime-edge`) detrás del ítem activo, texto `on-lime`.
- Se oculta automáticamente cuando el teclado virtual está abierto (`visualViewport`).

### 5.4 Destinos de navegación

Definidos en un único arreglo de configuración (`src/lib/navigation.ts`). **Solo se muestran los destinos con ruta implementada**; nunca ítems deshabilitados o "próximamente".

| Destino     | Ruta           | Ícono       | Estado          |
| ----------- | -------------- | ----------- | --------------- |
| Inicio      | `/inicio`      | `House`     | Núcleo          |
| Seguimiento | `/seguimiento` | `MapPinned` | Primera entrega |

### 5.5 Islas superiores (`IdentityIsland` + `ActionsIsland`)

- **Izquierda (`IdentityIsland`):** alto `50px`, radio `18px`, `SplitFlap` con la sigla de 3 letras de la Comisión Médica (`COR`), micro-label `CM ORIGEN · <nombre>` y título de la pantalla activa.
- **Derecha (`ActionsIsland`):** slot portal `#page-actions` (para acciones específicas de cada pantalla vía `<PageActions>`), `ThemeToggle` (sol/luna) y avatar en mobile.

### 5.6 `PageBody`

- `<main id="contenido" tabIndex={-1}>` (destino del `SkipLink` y foco tras navegar).
- Variantes: `padded` (deja libres las zonas `--shell-top`, `--shell-left`, `--shell-bottom`, `max-w-[940px]`) y `bleed` (`absolute inset-0` a pantalla completa para el mapa).

### 5.7 `/login`

Fuera del shell. Canvas + grano, `Card` surface centrada (`max-w-sm`), isotipo keycap "B", wordmark _Sistema de Bolsines_ en Space Grotesk con tag _sistema de bolsines_ en Instrument Serif itálica. Botón primario a todo el ancho. Al entrar desde `/login` con la cookie efímera `bolsines_entrada`, `EnterCurtain` levanta una persiana `brand-ink` y las islas entran desde sus bordes.

---

## 6. Inventario de Componentes Base

Un archivo `.tsx` por componente, Tailwind puro, `cn()` (`clsx` + `tailwind-merge`) para combinar clases. Todos aceptan `className` y reenvían `ref` cuando envuelven un elemento nativo.

### 6.1 Shell (`src/components/layout/`)

| Componente      | Responsabilidad                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `AppShell`      | Compone SideNav/BottomNav + Header + PageBody según el breakpoint. Incluye el link _Saltar al contenido_. |
| `AppBackground` | Canvas + grano global.                                                                                    |
| `SideNav`       | Riel / expandido, indicador activo animado.                                                               |
| `BottomNav`     | Navegación mobile.                                                                                        |
| `Header`        | CM origen, contador y acciones globales.                                                                  |
| `PageBody`      | Contenedor `<main>` con variantes `default` / `bleed`.                                                    |
| `BrandMark`     | Isotipo keycap "B" + wordmark (tamaños `sm` / `md`).                                                      |

### 6.2 Acciones (`ui/actions/`)

**`Button`** — _keycap_.

| Variante    | Fondo        | Texto     | Borde    | Sombra                  |
| ----------- | ------------ | --------- | -------- | ----------------------- |
| `primary`   | `cobalt`     | `surface` | `ink/20` | `key-cobalt`            |
| `lime`      | `lime`       | `ink`     | `ink`    | `key-lime`              |
| `secondary` | `surface`    | `ink`     | `ink`    | `key-ink`               |
| `ghost`     | transparente | `ink`     | ninguno  | ninguna (hover `ink/5`) |
| `danger`    | `danger`     | blanco    | `ink/20` | `0 4px 0 #881337`       |

- Tamaños: `sm` (`36px`, solo en desktop con mouse), `md` (`44px`, default), `lg` (`52px`, CTA en mobile).
- Estados: `hover` (`-1px`), `active` (`+2px`, sombra a `2px`), `focus-visible` (outline `2px` cobalt, offset `2px`; sobre fondos oscuros, outline `lime`), `disabled` (`opacity-50`, sin sombra ni movimiento, `aria-disabled`), `loading` (spinner de `16px`, el texto se mantiene para no cambiar el ancho, `aria-busy`).
- Ícono opcional a izquierda (`lucide`, `18px`).

**`IconButton`** — mismo sistema, cuadrado `44×44`, obligatorio `aria-label`. Variantes `ghost` (default) y `secondary`.

### 6.3 Formularios (`ui/forms/`)

**`Field`** — envuelve label + control + ayuda/error. Label en micro-label mono arriba del control (nunca _floating label_). Error en `danger-ink` `13px` con ícono `AlertCircle`, vinculado vía `aria-describedby`.

**`Input`** — alto `44px`, `bg-surface`, borde `1px line`, `rounded-control`, texto Plus Jakarta `15px`; variante `mono` para precintos y números. Estados: `hover` borde `ink/60`; `focus` borde `cobalt` + ring `2px cobalt/25`; `invalid` borde `danger` + `aria-invalid`; `disabled` fondo `canvas`.

**`SearchInput`** — `Input` + ícono `Search` a la izquierda + botón limpiar (`X`) a la derecha cuando hay valor. Usado para buscar por precinto. Admite `autoFocus` y lectores de código de barras (envían Enter al final).

**`Select`** — `<select>` nativo estilizado (accesible y con buen comportamiento en tablet) con chevron `ChevronDown`. Para CM destino.

### 6.4 Superficies (`ui/surfaces/`)

**`Card`**

| Variante       | Estilo                                                             | Uso                                                 |
| -------------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| `surface`      | `bg-surface`, borde `ink/10`, `rounded-card`                       | Tarjeta de bolsín, login, bloques de contenido      |
| `frosted`      | `bg-surface/85 backdrop-blur-md`, borde `ink/10`, `shadow-float`   | Paneles claros sobre el mapa                        |
| `frosted-dark` | `bg-forest/85 backdrop-blur-md`, borde `white/15`, texto `surface` | `Costado` sobre el mapa en tablet                   |
| `ink`          | `bg-ink`, texto `canvas`                                           | Bloque de ruta, cabecera de detalle con `SplitFlap` |

`Card` interactiva (`as="button"` o con `onSelect`): hover `-1px` + borde `ink/25`; seleccionada: barra `lime` de `3px` a la izquierda + borde `ink`; `aria-pressed` o `aria-current` según el caso.

**`Sheet`** — panel inferior en mobile. Alturas: `peek` (`120px`, muestra el contador), `half` (`50dvh`) y `full`. Asa visible de `36×4px`. Cierre con `Esc`, botón y arrastre hacia abajo.

### 6.5 Feedback (`ui/feedback/`)

| Componente   | Detalle                                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Badge`      | Variantes `transit`, `notified`, `warning`, `danger`, `neutral` (colores de §2.2). Pill, micro-label mono `11px`, punto de estado opcional.                              |
| `StatusDot`  | Punto `8px`; variante `live` con anillo de pulso (solo GPS reciente).                                                                                                    |
| `EmptyState` | Ícono `32px` en keycap `secondary`, título H2, una línea de explicación, una acción. Casos A1 y A2.                                                                      |
| `Skeleton`   | Bloques `ink/8` con `rounded-control`; imita la forma exacta de `BolsinCard`.                                                                                            |
| `Modal`      | `<dialog>` nativo (`showModal()`): trap de foco y `Esc` nativos, overlay `ink/50` con `backdrop-blur-sm`, `Card` surface `max-w-md`. Devuelve el foco al disparador.     |
| `Toast`      | Abajo a la derecha (desktop) / arriba del BottomNav (mobile). `role="status"` + `aria-live="polite"`; errores con `role="alert"`. Autocierre a los `5s`, pausa al hover. |
| `Spinner`    | Anillo de `16–20px`, `border-current`; usado dentro de botones e IconButton.                                                                                             |

### 6.6 Display (`ui/display/`)

| Componente   | Detalle                                                                                                                                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SplitFlap`  | Tablero mecánico: celdas `ink-mech` sobre bloque `ink`, ranura central `1px` `ink`, caracteres JetBrains Mono `600`. Al cambiar el valor, cada carácter rota en `lime` y fija en `surface`. Muestra `COR → ROS` o `Nº 8420`. `aria-label` con el valor final; las celdas son `aria-hidden`. |
| `MicroLabel` | Texto mono `10–11px`, `uppercase`, `+0.14em`, color `muted` (o `canvas/70` sobre fondos oscuros).                                                                                                                                                                                           |
| `DataValue`  | Valor mono `tabular-nums` con micro-label arriba (precinto, peso, lat/lng, hora).                                                                                                                                                                                                           |
| `Kbd`        | Tecla visible (`j`, `k`, `Esc`) en la ayuda de atajos.                                                                                                                                                                                                                                      |

---

## 7. Motion — Rumbo adaptado a GSAP + CSS

Marcelo trabaja **contra reloj**. El movimiento confirma acciones y orienta; nunca hace esperar.

### 7.1 Principios (Niveles Control y Firma)

1. **Dos velocidades según el rol:**
   - **Nivel Control (`100–280ms`):** botones, inputs, hover, foco, cierres rápidos. Nunca hace esperar en la operación diaria.
   - **Nivel Firma (`420–600ms`, `expo.out`):** navegación y revelado característico de Rumbo (gota líquida `0.42s`, cortina `clip-path` `0.5s`, persiana de entrada `0.6s`, entrada de islas `0.5s`). Arrancan explosivas y son siempre interrumpibles sin bloquear clics.
2. **Salida más rápida que entrada:** las salidas duran ~65% de la entrada.
3. **Propiedades permitidas:** `transform`, `opacity` y `clip-path`. Excepciones acotadas a elementos `fixed` chicos que no provocan reflujo del contenido: `width` de `SideIsland` y `width` de la gota de `DockPill`. Nunca animar el contenedor del mapa.
4. **Nunca bloquear clics:** ningún elemento queda con `pointer-events: none` esperando que termine una animación.
5. **Una vez por montaje:** las entradas corren al montar o cuando cambia el dato relevante, no en cada render (`useGSAP` con `scope` y `dependencies`).
6. **Reduced motion obligatorio:** todo timeline GSAP se crea dentro de `gsap.matchMedia()` con condiciones `motion` y `reduce`. Con `(prefers-reduced-motion: reduce)` → `gsap.set` directo, sin `stagger`, sin cortinas ni persiana, grano estático, transiciones CSS en `0s`, el `SplitFlap` muestra el valor final directo.

### 7.2 Tokens de motion

| Token           | Valor                            | CSS                       | GSAP           |
| --------------- | -------------------------------- | ------------------------- | -------------- |
| `--dur-instant` | `100ms`                          | presión de botón, hover   | —              |
| `--dur-fast`    | `160ms`                          | fades, salidas            | `0.16`         |
| `--dur-base`    | `220ms`                          | paneles, indicador de nav | `0.22`         |
| `--dur-slow`    | `280ms`                          | sheet, entrada de página  | `0.28`         |
| `--ease-expo`   | `cubic-bezier(0.16, 1, 0.3, 1)`  | entradas                  | `"expo.out"`   |
| `--ease-firm`   | `cubic-bezier(0.33, 1, 0.68, 1)` | elementos chicos          | `"power3.out"` |
| `--ease-exit`   | `cubic-bezier(0.32, 0, 0.67, 0)` | salidas                   | `"power2.in"`  |

`springTap` de Rumbo (`stiffness 420 / damping 16`) se reemplaza por CSS: `transform` con `--dur-instant` al presionar y `--ease-expo` al soltar.

### 7.3 Coreografía por componente

| Componente              | Momento                | Animación                                                                                                                           | Tecnología    |
| ----------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `Button` / `IconButton` | Hover / presión        | `-1px` / `+2px` + sombra `4px → 2px`, `100ms`                                                                                       | CSS           |
| `Header`                | Montaje inicial        | `y: -8 → 0`, `autoAlpha 0 → 1`, `0.28s`, `expo.out`                                                                                 | GSAP          |
| `SideNav`               | Cambio de ítem activo  | La barra lima se desliza al nuevo ítem: un único indicador con `y` animado, `0.22s`, `expo.out`                                     | GSAP          |
| `SideNav`               | Expandir / colapsar    | Panel overlay `x: -16 → 0` + labels `autoAlpha` con `0.04s` de retraso; colapso `0.16s`                                             | GSAP          |
| `BottomNav`             | Cambio de destino      | Pill lima `scaleX 0.6 → 1` + `autoAlpha`, `0.16s`, `power3.out`                                                                     | GSAP          |
| `PageBody`              | Cambio de ruta         | Contenido `y: 8 → 0`, `autoAlpha`, `0.22s`                                                                                          | GSAP          |
| `BolsinCard[]`          | Carga y filtrado       | `y: 10 → 0`, `autoAlpha`, `stagger 0.04`, `0.24s`, `power2.out`; el stagger se aplica solo a las primeras 8 cards (resto inmediato) | GSAP          |
| `Card` interactiva      | Hover / selección      | `-1px` + borde; la barra lima entra con `scaleY 0 → 1`, `0.16s`                                                                     | CSS           |
| `Costado`               | Abrir / cerrar         | `x: 16 → 0`, `autoAlpha`, `0.22s`, `power3.out`; cierre `0.14s`, `power2.in`                                                        | GSAP          |
| `Sheet`                 | Abrir / cambiar altura | `y` hasta la altura destino, `0.28s`, `expo.out`; cierre `0.18s`                                                                    | GSAP          |
| `Modal`                 | Abrir / cerrar         | Overlay `autoAlpha 0.16s`; diálogo `scale 0.96 → 1` + `autoAlpha`, `0.18s`; cierre `0.12s`                                          | GSAP          |
| `Badge` `Notificado`    | Confirmación CU 30/31  | `scale 0.8 → 1`, `0.24s`, `back.out(1.7)` (único rebote permitido)                                                                  | GSAP          |
| `Toast`                 | Entrada / salida       | `y: 12 → 0`, `autoAlpha`, `0.22s`; salida `0.14s`                                                                                   | GSAP          |
| `SplitFlap`             | Cambio de valor        | `45ms` por paso, máximo 6 pasos por carácter, caracteres en `lime` hasta fijar                                                      | React + CSS   |
| `StatusDot live`        | GPS reciente           | Anillo de pulso `2.4s` en loop, `opacity 0.5 → 0`; estático en ámbar si A3                                                          | CSS keyframes |
| `Skeleton`              | Cargando               | Pulso de opacidad `1.6s` (`0.6 ↔ 1`); sin shimmer diagonal                                                                          | CSS keyframes |
| `Input`                 | Foco / error           | El anillo de foco aparece **sin animación**; el mensaje de error entra con `autoAlpha 0.16s` (sin sacudida)                         | CSS           |
| `IconButton` refrescar  | Cargando               | Ícono `rotate 360°` en loop `0.8s linear` mientras dura la petición                                                                 | CSS           |

---

## 8. Voz y Microcopy

| Situación                  | Texto                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| A1 — sin bolsines          | **No hay bolsines en tránsito.** Ningún bolsín despachado desde CM Córdoba está en camino. · _Actualizar_ |
| A2 — filtro sin resultados | **Ningún bolsín coincide.** Revisá el precinto o la CM destino. · _Restablecer filtros_                   |
| A3 — GPS sin respuesta     | **GPS sin cobertura.** Última posición conocida: 14:32.                                                   |
| Cargando                   | Consultando ubicación de los bolsines…                                                                    |
| Confirmación CU 30/31      | ¿Avisar al gerente de CM Rosario dónde está el bolsín 8420?                                               |
| Éxito CU 30/31             | Aviso enviado a gerencia de CM Rosario.                                                                   |
| Error de envío             | No pudimos enviar el aviso. Tu selección sigue guardada. · _Reintentar_                                   |

Reglas: voseo rioplatense; verbos concretos en los botones (_Notificar_, _Restablecer_, _Actualizar_), nunca _Aceptar_ / _OK_; sin signos de exclamación; sin códigos técnicos.

---

## 9. Lo que no se hace (Anti-Slop)

- Gradientes decorativos, glows, glassmorphism sobre fondos sin contenido detrás (el frosted solo existe sobre el mapa).
- Sombras difusas grandes en cards.
- Íconos de colores múltiples o emojis en la interfaz.
- Texto centrado en bloques largos; títulos con mayúscula en cada palabra.
- Ítems de navegación deshabilitados o "próximamente".
- Animaciones de más de `280ms` en interacciones, parallax, o animar al hacer scroll.
- Mezclar más de una variante `primary` visible en la misma vista.

---

## 10. Tokens CSS para Tailwind v4 (`src/app/globals.css`)

Las fuentes se cargan con `next/font` en `layout.tsx` y exponen variables CSS; por eso las familias y los tokens semánticos van en `@theme inline`. Los tokens cambian automáticamente según `prefers-color-scheme` y `data-theme="light" | "dark"` en `<html>`.

```css
@import "tailwindcss";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  color-scheme: light dark;
  --canvas: #c7d1dd;
  --surface: #eef2f6;
  --raised: #e1e8f0;
  --glass: rgb(238 242 246 / 0.9);
  --fg: #0b1220;
  --muted: #475569;
  --edge: rgb(11 18 32 / 0.16);
  --hair: rgb(11 18 32 / 0.09);
  --hover: rgb(11 18 32 / 0.05);
  --line: #64748b;
  --accent: #0251b0;
  --primary: #0251b0;
  --on-primary: #eef2f6;
  --primary-deep: #01397d;
  --lime: #d1ff42;
  --on-lime: #0b1220;
  --lime-edge: #0b1220;
  --mech: #161e2e;
  --mech-fg: #eef2f6;
  --amber: #f59e0b;
  --amber-ink: #92400e;
  --danger: #be123c;
  --danger-ink: #9f1239;

  --isle-gap: 8px;
  --side-w: 60px;
  --side-w-open: 206px;
  --isle-r: 24px;
  --top-h: 50px;
  --top-r: 18px;
  --dock-h: 52px;
  --shell-left: 0px;
  --shell-top: calc(var(--top-h) + var(--isle-gap) * 2);
  --shell-bottom: calc(var(--dock-h) + 20px + env(safe-area-inset-bottom));
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --canvas: #0a0f1a;
    --surface: #121927;
    --raised: #1b2433;
    --glass: rgb(18 25 39 / 0.9);
    --fg: #eef2f6;
    --muted: #94a3b8;
    --edge: rgb(238 242 246 / 0.14);
    --hair: rgb(238 242 246 / 0.08);
    --hover: rgb(238 242 246 / 0.05);
    --line: #7487a0;
    --accent: #7fb2ff;
    --primary: #5b9bff;
    --on-primary: #0a0f1a;
    --primary-deep: #2f6fd6;
    --lime-edge: transparent;
    --amber-ink: #fbbf24;
    --danger: #f43f5e;
    --danger-ink: #fda4af;
  }
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --canvas: #0a0f1a;
  --surface: #121927;
  --raised: #1b2433;
  --glass: rgb(18 25 39 / 0.9);
  --fg: #eef2f6;
  --muted: #94a3b8;
  --edge: rgb(238 242 246 / 0.14);
  --hair: rgb(238 242 246 / 0.08);
  --hover: rgb(238 242 246 / 0.05);
  --line: #7487a0;
  --accent: #7fb2ff;
  --primary: #5b9bff;
  --on-primary: #0a0f1a;
  --primary-deep: #2f6fd6;
  --lime-edge: transparent;
  --amber-ink: #fbbf24;
  --danger: #f43f5e;
  --danger-ink: #fda4af;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-surface: var(--surface);
  --color-raised: var(--raised);
  --color-glass: var(--glass);
  --color-fg: var(--fg);
  --color-muted: var(--muted);
  --color-edge: var(--edge);
  --color-hair: var(--hair);
  --color-hover: var(--hover);
  --color-line: var(--line);
  --color-accent: var(--accent);
  --color-primary: var(--primary);
  --color-on-primary: var(--on-primary);
  --color-primary-deep: var(--primary-deep);
  --color-lime: var(--lime);
  --color-on-lime: var(--on-lime);
  --color-lime-edge: var(--lime-edge);
  --color-mech: var(--mech);
  --color-mech-fg: var(--mech-fg);
  --color-amber: var(--amber);
  --color-amber-ink: var(--amber-ink);
  --color-danger: var(--danger);
  --color-danger-ink: var(--danger-ink);

  --font-display: var(--font-space-grotesk), system-ui, sans-serif;
  --font-sans: var(--font-plus-jakarta), system-ui, sans-serif;
  --font-serif: var(--font-instrument-serif), Georgia, serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
}
```
