---
id: PPAI-UX-MANUAL-MARCA
titulo: Manual de Marca, Craft Kit (Rumbo/Costado) y Estrategia de Motion (CU 36)
tipo: convencion
unidad: PPAI
categoria: UX
tags:
  [
    ux,
    ui,
    brand,
    tokens,
    tailwind,
    gsap,
    botones-3d,
    frosted-glass,
    split-flap,
    costado,
    rumbo,
    marcelo,
    app-shell,
    sidenav,
    bottomnav,
    tema-oscuro,
    islas,
    nacho,
  ]
conectado_con: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES, PPAI-CU-36, PPAI-CU-30, PPAI-UX-APP-SHELL]
depende_de: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES]
---

# Manual de Marca y Sistema Visual — PPAI Bolsines (v2.1)

Resumen operativo del lenguaje visual definido a partir del **Mapa de Empatía de Marcelo Gómez**, el **Moodboard "Sistema de Envíos / Sistema de Bolsines"** y los patrones de **Rumbo (`UI-05`)**, **Costado (`UI-02`)** y **`stageshow`**. El documento fuente completo (con tokens semánticos claro/oscuro listos para Tailwind v4) vive en [`docs/brand-guidelines.md`](../../brand-guidelines.md). La v2.0 (tema único y riel Tinta pegado) quedó **reemplazada** por el diseño en islas de [`PPAI-UX-APP-SHELL`](./PPAI-UX-APP-SHELL.md).

## 1. Decisiones Visuales Clave

- **Temas claro y oscuro con tokens semánticos:** `data-theme="light" | "dark"` en `<html>` (cookie `bolsines_tema`, o sigue `prefers-color-scheme`). En claro: canvas Blue Mist `#C7D1DD`, islas `#EEF2F6`, texto `#0B1220`. En oscuro: canvas `#0A0F1A`, islas `#121927`, texto `#EEF2F6`.
- **Paleta de acción:**
  - **Accent / Primary (`#0251B0` claro / `#7FB2FF`–`#5B9BFF` oscuro):** CTA principal (_Notificar al GCM_), rutas, links, anillo de foco.
  - **Volt Lime (`#D1FF42`):** estado `En tránsito`, GPS vivo, gota activa de navegación, flip del `SplitFlap`. En claro lleva borde `lime-edge` (`#0B1220`).
  - **Señales:** ámbar `#F59E0B` solo como fondo (A3) con texto `amber-ink`; rojo `danger` / texto `danger-ink`.
- **Contraste verificado (WCAG 2.2 AA):** tabla de pares claro/oscuro en §2.3 del manual.
- **Tipografía dual:** Space Grotesk condensada + JetBrains Mono en micro-labels (`10–11px`, `+0.14em`), Plus Jakarta Sans para UI, Instrument Serif solo en wordmark/login/subtítulo de Inicio.
- **Islas sin profundidad:** borde de `1px` (`edge`), sin sombras (`box-shadow`), pegadas a `8px` del borde (`bg-glass backdrop-blur-[14px]`). Botones 3D (keycap) solo en acciones primarias y el isotipo "B".

## 2. App Shell (Islas)

- **Mobile (`< 768px`):** `DockPill` flotante inferior centrada con gota lima y botón **Más** (`MoreSheet` sobre `<dialog>`); dos islas superiores compactas.
- **Tablet (`768–1279px`):** `SideIsland` de `60px` (solo íconos) con botón Fijar (`206px` overlay).
- **Desktop (`≥ 1280px`):** `SideIsland` expandible a `206px` por hover, foco de teclado o botón Fijar (overlay sobre el contenido).
- **Islas superiores:** `IdentityIsland` (`SplitFlap` con sigla + CM origen + título de pantalla) y `ActionsIsland` (portal `#page-actions` + `ThemeToggle` + avatar). **`PageBody`:** `<main>` con variantes `padded` / `bleed`.
- Solo se muestran destinos de navegación con ruta implementada (`Inicio`, `Seguimiento`).

## 3. Componentes Base

Shell (`AppShell`, `SideIsland`, `DockPill`, `IdentityIsland`, `ActionsIsland`, `PageActions`, `ThemeToggle`, `UserMenu`, `MoreSheet`, `PageBody`, `PageHeading`, `EnterCurtain`, `SkipLink`, `BrandMark`) · Acciones (`Button`, `IconButton`) · Formularios (`Field`, `Input`, `SearchInput`, `Select`) · Superficies (`Island`, `Card`, `Sheet`) · Feedback (`Badge`, `StatusDot`, `EmptyState`, `Skeleton`, `Modal` sobre `<dialog>`, `Toast`, `Spinner`) · Display (`SplitFlap`, `MicroLabel`, `Marker`, `BoardRow`, `DataValue`, `Kbd`).

## 4. Regla de Animaciones (Rumbo → GSAP + CSS)

- **Nivel Control (`100–280ms`):** botones, inputs, hover, foco, cierres rápidos.
- **Nivel Firma (`420–600ms`, `expo.out`):** gota líquida (`0.42s`), cortina `clip-path` (`0.5s`), persiana de entrada (`0.6s`), entrada de islas (`0.5s`), siempre interrumpibles sin bloquear clics.
- `springTap` de Rumbo se traduce a transición CSS / GSAP (`scale 0.95`, `0.12s`).
- Todo dentro de `useGSAP` + `gsap.matchMedia()` con fallback instantáneo para `prefers-reduced-motion: reduce`.
