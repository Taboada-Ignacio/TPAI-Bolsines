---
id: PPAI-UX-MANUAL-MARCA
titulo: Manual de Marca, Craft Kit (Rumbo/Costado) y Estrategia de Motion (CU 36)
tipo: convencion
unidad: PPAI
categoria: UX
tags: [ux, ui, brand, tokens, tailwind, gsap, botones-3d, frosted-glass, split-flap, costado, rumbo, marcelo]
conectado_con: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES, PPAI-CU-36, PPAI-CU-30]
depende_de: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES]
---

# Manual de Marca y Sistema Visual — PPAI Bolsines (v1.1)

Referencia operativa del lenguaje visual definido a partir del **Mapa de Empatía de Marcelo Gómez**, el **Moodboard "Sistema de Envíos / Sistema de Bolsines"** y los patrones de alto impacto de **Rumbo (`UI-05`)**, **Costado (`UI-02`)** y **`stageshow`**. El documento fuente completo vive en [`docs/brand-guidelines.md`](../../brand-guidelines.md).

## 1. Decisiones Visuales Clave
- **Fondo no blanco (`#F3F2EE`) + Film Grain:** superficie cálida tipo papel técnico con micro-textura SVG sutil (`opacity: 0.03`) para reducir fatiga visual en jornadas de depósito y resaltar tarjetas (`#FAF9F6`) y bloques de alto contraste (`#0F1412`).
- **Paleta de alto contraste:**
  - **Azul Cobalto (`#1447E6`):** confianza, rutas en mapa, estado `Entregado` y CTA principal (*Notificar al GCM*).
  - **Verde Lima (`#B8E62E`):** movimiento, estado `En Tránsito`, urgencias operativas, caracteres en flip del `SplitFlap` y señal GPS activa.
  - **Verde Bosque (`#073B31`):** base institucional para contenedores *frosted glass* (`backdrop-blur`).
  - **Rojo Señal (`#E11D48`) / Ámbar (`#F59E0B`):** fallos de comunicación GPS (Flujo A3) o errores de validación.
- **Tipografía Dual de Alta Densidad:** `Space Grotesk` condensada (`-0.035em`) para titulares fuertes + `JetBrains Mono` chica (`10px–11px`) en mayúsculas con tracking expandido (`+0.14em`) para rótulos técnicos, `Plus Jakarta Sans` para lectura general e `Instrument Serif` italic para acentos de marca.
- **Botones 3D (Keycap Style):** bordes/sombras inferiores sólidas (`4px`) con hundimiento físico en `:active` (`+2px`) para dar certeza táctil en escritorio y tablet.
- **Difuminado (*Frosted Glass*):** paneles flotantes sobre el mapa con `backdrop-filter: blur(14px)` y bordes fantasma (`1px`, 10% opacidad) manteniendo contraste WCAG AA.

## 2. Patrones de Alto Impacto Integrados (Rumbo + Costado)
- **`SplitFlap` mecánico:** cabecera de detalle (`ORIGEN → DESTINO` / `PRECINTO Nº`) con rotación rápida en Verde Lima al cambiar de bolsín.
- **Patrón Maestro-Detalle `Costado`:** el panel de detalle entra sin tapar la lista, soporta navegación rápida por teclado (`j` / `k`, `Esc`), cancela fetches viejos con `AbortController` y sincroniza la URL (`?bolsin=...`).
- **Restraint (`stageshow`):** mostrar solo los 4–6 datos críticos del bolsín; cero texto relleno ni tablas sobrecargadas.

## 3. Regla de Animaciones (GSAP + CSS)
- **Velocidad operativa (`100ms–280ms`):** físicas firmes (`easeExpo`, `springTap`) sin efecto gelatina.
- **Uso de GSAP (`gsap.matchMedia()`):** entradas escalonadas rápidas en filtros (`stagger: 0.04s`), transición del panel `Costado` y confirmación de envío de correo (CU 30/31), respetando `prefers-reduced-motion`.
