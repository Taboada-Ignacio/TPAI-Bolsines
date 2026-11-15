---
id: PPAI-UX-MANUAL-MARCA
titulo: Manual de Marca, Tokens Visuales y Estrategia de Motion (CU 36)
tipo: convencion
unidad: PPAI
categoria: UX
tags: [ux, ui, brand, tokens, tailwind, gsap, botones-3d, frosted-glass, marcelo]
conectado_con: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES, PPAI-CU-36, PPAI-CU-30]
depende_de: [PPAI-UX-EMPATIA, DSI-00-UX-INTERFACES]
---

# Manual de Marca y Sistema Visual — PPAI Bolsines

Referencia operativa del lenguaje visual definido a partir del **Mapa de Empatía de Marcelo Gómez** y el **Moodboard "Sistema de Envíos / Sistema de Bolsines"**. El documento fuente completo vive en [`docs/brand-guidelines.md`](../../brand-guidelines.md).

## 1. Decisiones Visuales Clave
- **Fondo no blanco (`#F3F2EE`):** superficie cálida tipo papel técnico para reducir fatiga visual en jornadas de depósito y resaltar tarjetas (`#FAF9F6`) y bloques de alto contraste (`#0F1412`).
- **Paleta de alto contraste:**
  - **Azul Cobalto (`#1447E6`):** confianza, rutas en mapa, estado `Entregado` y CTA principal (*Notificar al GCM*).
  - **Verde Lima (`#B8E62E`):** movimiento, estado `En Tránsito`, urgencias operativas y señal GPS activa.
  - **Verde Bosque (`#073B31`):** base institucional para contenedores *frosted glass* (`backdrop-blur`).
  - **Rojo Señal (`#E11D48`) / Ámbar (`#F59E0B`):** fallos de comunicación GPS (Flujo A3) o errores de validación.
- **Tipografía:** `Space Grotesk` (títulos fuertes), `Plus Jakarta Sans` (UI legible), `Instrument Serif` italic (acento editorial) y `JetBrains Mono` (precintos, remitos, coordenadas).
- **Botones 3D (Keycap Style):** bordes/sombras inferiores sólidas (`4px`) con hundimiento físico en `:active` (`+2px`) para dar certeza táctil en escritorio y tablet.
- **Difuminado (*Frosted Glass*):** paneles flotantes sobre el mapa con `backdrop-filter: blur(14px)` manteniendo contraste WCAG AA.

## 2. Regla de Animaciones (GSAP + CSS)
- **Velocidad operativa (`100ms–280ms`):** las animaciones informan y confirman acciones sin frenar al Encargado de Bolsines.
- **Uso de GSAP (`gsap.matchMedia()`):** entradas escalonadas rápidas en filtros (`stagger: 0.04s`), transición de detalle del bolsín y confirmación de envío de correo (CU 30/31), respetando `prefers-reduced-motion`.
