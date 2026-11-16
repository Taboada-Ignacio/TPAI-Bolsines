# Technical Spec — Seguimiento de Bolsines en Mapa (CU 36 + CU 30/31)

> **Feature ID:** `cu36-seguimiento-bolsines`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 2 (Especificación Técnica, Tokens y Coreografía GSAP)  
> **Stack:** Next.js `16.4.6` (App Router) · React `19.3.1` · TypeScript `5.9.3` · Tailwind CSS v4 · GSAP + `@gsap/react` · Zod `4.6.7`

---

## 1. Design Tokens & System (`src/app/globals.css`)

Paleta oficial (fuente de verdad: `docs/brand-guidelines.md` v2.0; radios, sombras y tokens de motion completos en su §10) basada en la referencia aprobada (**Elite Blue `#0251B0`**, **Volt Lime `#D1FF42`**, **Blue Mist `#C7D1DD`**):

```css
@import "tailwindcss";

@theme {
  /* Paleta Principal (Referencia Aprobada) */
  --color-canvas: #C7D1DD;       /* Blue Mist — fondo base no blanco */
  --color-surface: #EEF2F6;      /* Superficie elevada clara para tarjetas e inputs */
  --color-ink: #0B1220;          /* Tinta oscura de alto contraste */
  --color-ink-mech: #161E2E;     /* Celdas del tablero SplitFlap */
  --color-forest: #073B31;       /* Base institucional para paneles frosted glass */

  --color-cobalt: #0251B0;       /* Elite Blue — CTA primario, rutas, estado Entregado */
  --color-cobalt-deep: #01397D;  /* Sombra 3D inferior del botón primario */
  --color-lime: #D1FF42;         /* Volt Lime — En Tránsito, Urgente, GPS vivo, SplitFlap */
  --color-lime-deep: #9EC91E;    /* Sombra 3D inferior del botón Volt Lime */

  /* Semánticos (contraste verificado, ver brand-guidelines §2.3) */
  --color-amber: #F59E0B;        /* solo fondo de badge A3, texto ink */
  --color-amber-ink: #92400E;    /* texto de advertencia */
  --color-danger: #BE123C;
  --color-danger-ink: #9F1239;
  --color-muted: #475569;
  --color-line: #64748B;         /* borde de inputs (≥ 3:1) */
}

/* Fuentes vía next/font → @theme inline */
@theme inline {
  /* Tipografía Dual de Alta Densidad */
  --font-display: var(--font-space-grotesk), system-ui, sans-serif;
  --font-sans: var(--font-plus-jakarta), system-ui, sans-serif;
  --font-serif: var(--font-instrument-serif), Georgia, serif;
  --font-mono: var(--font-jetbrains-mono), monospace;
}
```

### Reglas de Superficie, Bordes y Contraste
- **Pareo de contraste oficial:**
  - Sobre **Elite Blue (`#0251B0`)** → texto `#EEF2F6` / `#C7D1DD` o `#FFFFFF`.
  - Sobre **Volt Lime (`#D1FF42`)** → texto `#0251B0` (Elite Blue) o `#0B1220` (Tinta).
  - Sobre **Blue Mist (`#C7D1DD`)** → texto `#0251B0` o `#0B1220`.
- **Botones 3D (`Keycap`):** `border border-ink/20 shadow-[0_4px_0_var(--btn-shadow)] hover:-translate-y-px active:translate-y-[2px] active:shadow-[0_2px_0_var(--btn-shadow)] transition-transform duration-100`.
- **Frosted Glass:** `bg-forest/85 backdrop-blur-md border border-white/15` (oscuro) o `bg-surface/85 backdrop-blur-md border border-ink/10` (claro).
- **Film Grain:** pseudo-capa fija `pointer-events-none opacity-[0.03]` con SVG `feTurbulence`.

---

## 2. Component Architecture & State (1 archivo `.tsx` = 1 componente)

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx                   # Carga next/font/google (Space Grotesk, Plus Jakarta, Instrument Serif, JetBrains Mono) + Film Grain
│   ├── page.tsx                     # Redirección /seguimiento o /login
│   ├── login/page.tsx               # Autenticación Empleado/Usuario
│   └── seguimiento/page.tsx         # Vista principal CU 36 (Two-Panel + Costado)
├── components/
│   ├── ui/                          # Primitivas agnósticas (1 archivo = 1 componente, Tailwind puro)
│   │   ├── actions/
│   │   │   └── Button.tsx           # variant: "primary" | "lime" | "ghost" | "danger", efecto 3D táctil
│   │   ├── display/
│   │   │   └── SplitFlap.tsx        # Tablero mecánico (de rumbo-craft-kit adaptado a #161E2E y #D1FF42)
│   │   ├── feedback/
│   │   │   ├── Badge.tsx            # variant: "transit" (#D1FF42/#0B1220) | "notified" (#0251B0/#EEF2F6) | "warning" | "danger" | "neutral"
│   │   │   ├── EmptyState.tsx       # Estados A1 y A2 con CTA de recuperación
│   │   │   └── Modal.tsx            # Diálogo accesible con trap de foco y Esc
│   │   ├── forms/
│   │   │   ├── Input.tsx            # Con autofocus y soporte lector de precinto
│   │   │   └── Select.tsx           # Selector de CM Destino
│   │   └── surfaces/
│   │       └── Card.tsx             # surface | frosted
│   ├── layout/
│   │   └── Topbar.tsx               # CM Origen logueada + contador en tránsito + botón refrescar + logout
│   └── seguimiento/                 # Componentes de dominio agrupados por módulo funcional
│       ├── filters/
│       │   └── BolsinFilters.tsx    # Precinto + CM Destino + Limpiar filtros
│       ├── list/
│       │   ├── BolsinList.tsx       # Lista con soporte @container y navegación j/k
│       │   └── BolsinCard.tsx       # Solo 4 datos críticos (restraint stageshow)
│       ├── map/
│       │   └── BolsinesMap.tsx      # Mapa interactivo con marcadores diferenciados (activo vs A3 sin señal)
│       ├── detail/
│       │   └── BolsinDetailPanel.tsx # Patrón Costado (frosted glass, SplitFlap, remitos, CTA Notificar GCM)
│       └── notifications/
│           └── NotifyGcmModal.tsx   # Confirmación explícita CU 30/31
├── hooks/
│   └── useSeguimientoBolsines.ts    # Filtros, selección, navegación j/k, AbortController y sync ?bolsin=...
└── lib/
    ├── cn.ts
    └── formatters.ts
```

### Gestión de Estado (Client vs Server/Async)
- **Server / API State:** `useSeguimientoBolsines` consume `GET /api/seguimiento/bolsines` y `POST /api/seguimiento/notificar` validando respuestas con Zod (`src/dtos/`).
- **Prevención de Race Conditions:** cada cambio rápido de bolsín cancela el fetch de telemetría previo con `AbortController`.
- **Deep Linking:** `history.replaceState` actualiza `?bolsin=<numeroBolsin>` al navegar con `j`/`k` para no ensuciar el historial del botón Atrás.

---

## 3. GSAP Motion Choreography (con `@gsap/react` y `gsap.matchMedia()`)

1. **Entrance Timeline (carga inicial de `/seguimiento`):**
   - `Topbar` y `BolsinFilters`: `autoAlpha: 0 -> 1, y: -8 -> 0`, `duration: 0.3s`, `ease: "power2.out"`.
   - `BolsinCard[]`: `gsap.from(".bolsin-card", { autoAlpha: 0, y: 12, stagger: 0.04, duration: 0.28, ease: "power2.out" })`.
2. **Panel `Costado` (`BolsinDetailPanel`):**
   - Entrada: `gsap.fromTo(panelRef, { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 0.22, ease: "power3.out" })`.
3. **Micro-interacciones:**
   - Botones 3D: transición CSS de `100ms` (`translateY(+2px)` en `:active`) para respuesta instantánea sin overhead JS.
   - `SplitFlap`: rotación de caracteres en `#D1FF42` cada `45ms` al cambiar de bolsín seleccionado.
   - Confirmación CU 30/31: `scale: 0.96 -> 1, autoAlpha: 0 -> 1` (`0.18s`, `power2.out`) y micro-rebote en badge `Notificado` (`ease: "back.out(1.7)"`).
4. **Reduced Motion Fallback (Obligatorio):**
   - Envuelto en `gsap.matchMedia()` con condición `reduceMotion: "(prefers-reduced-motion: reduce)"`: cuando aplica, `duration: 0`, `stagger: 0`, visibilidad inmediata (`autoAlpha: 1`).

---

## 4. Accessibility (a11y) & Semantic Markup

- **Landmarks:** `<header>` (`Topbar`), `<aside aria-label="Listado y filtros de bolsines">`, `<main aria-label="Mapa de seguimiento">`, `<section aria-label="Detalle de bolsín">`.
- **Teclado:** `j`/`↓` siguiente bolsín, `k`/`↑` bolsín anterior, `Esc` cierra panel `Costado` o modal `NotifyGcmModal` devolviendo el foco a la tarjeta origen.
- **Atributo `inert`:** aplicado al panel de detalle cuando está cerrado para excluirlo del tab-order y lectores de pantalla.
- **Live Regions:** `aria-live="polite"` para anunciar resultados de filtrado, fallos de GPS (A3) y confirmación de correo enviado al GCM.
- **Focus Ring:** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt` sobre superficies claras y `outline-lime` sobre superficies oscuras.
