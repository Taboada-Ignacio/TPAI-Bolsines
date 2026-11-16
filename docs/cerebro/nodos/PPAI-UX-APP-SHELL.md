---
id: PPAI-UX-APP-SHELL
titulo: UX PPAI - Núcleo de la App en Islas (navegación, cabecera, temas claro/oscuro y motion Rumbo)
tipo: convencion
unidad: PPAI
categoria: UX
tags:
  [
    ux,
    ui,
    app-shell,
    islas,
    sidenav,
    bottomnav,
    tema-oscuro,
    rumbo,
    gsap,
    split-flap,
    frontend,
    aprobado,
    nacho,
  ]
archivos_front:
  - TPAI-Bolsines/src/app/(app)/layout.tsx
  - TPAI-Bolsines/src/app/globals.css
  - TPAI-Bolsines/src/components/layout/AppShell.tsx
  - TPAI-Bolsines/src/components/layout/SideIsland.tsx
  - TPAI-Bolsines/src/components/layout/PageBody.tsx
conectado_con:
  [
    PPAI-UX-MANUAL-MARCA,
    PPAI-UX-LOGIN,
    PPAI-UX-EMPATIA,
    PPAI-CU-36,
    DSI-00-UX-INTERFACES,
    PPAI-IMPL-FRONTEND-HANDOFF,
  ]
depende_de: [PPAI-UX-MANUAL-MARCA, PPAI-UX-EMPATIA]
---

# Núcleo de la App en Islas — Diseño aprobado

Marco fijo donde se enchufa cada pantalla del sistema. **Estética aprobada por el usuario el 2026-11-15** sobre la maqueta [`docs/referencias/app-shell/maqueta-aprobada-islas.html`](../../referencias/app-shell/maqueta-aprobada-islas.html) (abrirla en un navegador: tiene selector de pantalla, de tema y repetición de la entrada).

Specs completas: [`specs/frontend/app-shell-core/`](../../../specs/frontend/app-shell-core/) (`functional-spec.md`, `technical-spec.md`, `todos.md`).

## 1. Historia de la decisión (para no repetir errores)

- **Versión 1, rechazada** ("no me gusta para nada"): riel oscuro pegado al borde + barra de header de lado a lado + tarjetas. Se veía como un panel de administración genérico. **No volver a ese esquema.**
- **Versión 2, aprobada** ("me encanta esta estética"): islas flotantes con la estética de **Rumbo** (`rumbo.iman.ar/demo`) adaptada al moodboard.
- Referencias que pidió el usuario:
  - **Rumbo:** anatomía en [`docs/referencias/rumbo/UI-05-anatomia-rumbo.md`](../../referencias/rumbo/UI-05-anatomia-rumbo.md) y kit (`SplitFlap`, tokens) en la misma carpeta.
  - **Píldora inferior:** `D:/github desktop/AASSSSSSSIIIIIIIII/Proyecto-Seminario/front/shared/components/layout/BottomNav.tsx` (píldora flotante, ícono + nombre, activo relleno). El sidenav de ese proyecto **no** le gusta.
  - **Moodboard:** [`docs/referencias/moodboard-sistema-bolsines.jpeg`](../../referencias/moodboard-sistema-bolsines.jpeg).

## 2. Reglas de diseño que definió el usuario

1. **Islas, no barras:** navegación y cabecera son piezas sueltas, **bien pegadas** al borde (`8px`), **muy redondeadas**, **sin profundidad**: solo borde de `1px`, sin sombras.
2. **Animación en el cambio de pestaña:** obligatoria y con carácter (gota lima líquida + cortina + solapas).
3. **Tema claro y oscuro en todos los componentes**, con control para cambiarlo.
4. **Vista previa antes de implementar:** el usuario quiere ver una maqueta de cada pantalla antes de que se codifique de verdad.
5. Estética "novedosa", no de sistema de gestión clásico.

## 3. Composición

| Tamaño                  | Navegación                                                                                                              | Cabecera                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Celular (`< 768px`)     | Píldora flotante abajo, centrada; activo relleno en lima; último ítem **Más** (hoja con usuario, tema y cerrar sesión). | Dos islas compactas arriba.                                 |
| Tablet (`768–1279px`)   | Isla lateral de `60px`, solo íconos; botón al pie para fijarla abierta (`206px`).                                       | Isla de identidad (izquierda) + isla de acciones (derecha). |
| Escritorio (`≥ 1280px`) | La misma isla; además se abre sola con hover o foco de teclado, por encima del contenido.                               | Igual.                                                      |

- **Isla de identidad:** solapas `SplitFlap` con la sigla de la Comisión Médica (`COR`), rótulo `CM ORIGEN · Córdoba` y nombre de la pantalla.
- **Isla de acciones:** acciones de la pantalla (portal), cambio de tema, usuario.
- **Contenido y sincronización con `SideIsland` (actualizado 2026-11-15):**
  - En pantallas `padded` ([`PageBody.tsx`](../../../src/components/layout/PageBody.tsx)), el core vive dentro de una card tipo isla (`rounded-[var(--isle-r)] border border-edge bg-surface/90 backdrop-blur-sm`) alineada al `isle-gap` (`8px`).
  - Al hacer hover o focus en `SideIsland` (`60px → 206px`), [`globals.css`](../../../src/app/globals.css) actualiza `--shell-left` vía `:has()` (`76px → 222px`), de modo que la card del core y la cabecera superior se achican y se vuelven a expandir en sincronía exacta (`320ms cubic-bezier(0.16, 1, 0.3, 1)`).
  - Pantallas `bleed` (`/seguimiento`) mantienen el mapa a pantalla completa detrás de las islas.
- **Frosted glass visible en `SideIsland` (`stageshow/backgrounds.md`):**
  - [`SideIsland.tsx`](../../../src/components/layout/SideIsland.tsx) usa `bg-surface/65 backdrop-blur-[22px] backdrop-saturate-150` con borde especular superior (`inset 0 1px 0`).
  - [`AppShell.tsx`](../../../src/components/layout/AppShell.tsx) proyecta bandas diagonales nítidas en cobalto y lima (`-z-10`) detrás del rail izquierdo para que el vidrio esmerilado difumine contraste real al estar colapsado y al expandirse.
- **Inicio:** saludo gigante + tablero de destinos (filas numeradas con flecha lima) + tres datos de sesión.
- **Destinos:** un único arreglo (`src/lib/navigation.ts`); solo se muestran pantallas que existen.

## 4. Temas

| Token                    | Claro                 | Oscuro                |
| ------------------------ | --------------------- | --------------------- |
| `canvas`                 | `#C7D1DD`             | `#0A0F1A`             |
| `surface`                | `#EEF2F6`             | `#121927`             |
| `fg`                     | `#0B1220`             | `#EEF2F6`             |
| `muted`                  | `#475569`             | `#94A3B8`             |
| `accent`                 | `#0251B0`             | `#7FB2FF`             |
| `primary` / `on-primary` | `#0251B0` / `#EEF2F6` | `#5B9BFF` / `#0A0F1A` |
| `lime` / `on-lime`       | `#D1FF42` / `#0B1220` | igual                 |
| borde de isla (`edge`)   | tinta 16%             | blanco 14%            |

- Tabla completa y contrastes en la §1 de la spec técnica.
- `data-theme` en `<html>`, cookie `bolsines_tema`, sin atributo = tema del dispositivo. Sin parpadeo al recargar.
- En claro, el lima lleva borde tinta (sobre superficies claras no contrasta).
- Los componentes usan **tokens semánticos**, nunca hex.

## 5. Motion (Rumbo → GSAP)

- **Gota líquida:** viaja al destino nuevo en `0.42s` `expo.out` y se estira (`scaleY 1.28` en la isla, `scaleX 1.14` en la píldora).
- **Cortina:** el contenido se revela con `clip-path` de izquierda a derecha, `0.5s`; las filas con `stagger 0.1`.
- **Solapas:** giran `45ms` por paso en lima al cambiar de pantalla.
- **Entrada desde el login:** persiana de Tinta que se levanta (`0.6s`), islas que entran desde sus bordes.
- **Nivel "firma":** navegación y revelado pueden durar hasta `600ms` (el manual v2.0 decía `280ms`; cambia en la v2.1). Controles siguen en `100–280ms`.
- **Movimiento reducido:** todo instantáneo, grano quieto.

## 6. Pendiente de alinear

El manual [`docs/brand-guidelines.md`](../../brand-guidelines.md) está en v2.0 y **todavía dice "sin modo oscuro" y describe un riel Tinta pegado**. Eso quedó reemplazado por este nodo; la tarea `S-01` lo lleva a v2.1. Ante contradicción, **manda este nodo y la spec `app-shell-core`**.

### [NACHO] Accesos rápidos del tablero de Inicio

El acceso «Seguimiento» mantiene su ruta `/seguimiento` y muestra «Consultar ubicación de bolsines». En `/inicio`, **Abrir Mailpit** usa el estilo de botón lima y abre `http://localhost:8025` en otra pestaña para consultar las notificaciones del entorno local.

### [NACHO] Hidratación del tablero de inicio

El template conserva la cortina de página con GSAP sobre su propio contenedor.
Las filas `data-reveal` usan keyframes CSS con la entrada escalonada del tablero.
Así, la animación evita escribir estilos inline sobre los descendientes durante
la hidratación. CSS respeta la preferencia de movimiento reducido. En navegadores
sin `sibling-index()`, las filas conservan la animación con un retraso común.

La comprobación en navegador queda pendiente en este entorno.
