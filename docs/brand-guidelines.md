# Manual de Marca & Design System — Sistema de Bolsines (PPAI DSI)

> **Versión:** 1.1 (Actualizado con Craft Kit Rumbo `UI-05`, Costado `UI-02` y Benji Taylor `stageshow`)  
> **Fecha:** 2026-11-14  
> **Estado:** Aprobado para implementación en `feature/frontend`  
> **Usuario objetivo (Proto-Persona):** Marcelo Gómez (31 años), Encargado de Despacho y Logística de Bolsines (depósito de alto volumen, uso en escritorio y tablet).

---

## 1. Propósito de la Marca y Personalidad Visual

El **Sistema de Seguimiento de Bolsines** traduce la presión operativa de un depósito real en una interfaz **táctil, minimalista, directa y de alta certeza**.

- **Lo que siente Marcelo:** presión por horarios estrictos, miedo a traspapelar documentación o perder un bolsín, necesidad de control absoluto en un vistazo.
- **Principios de Craftwork (Anti-Slop + `stageshow` + Rumbo):**
  1. **Fondo cálido editorial (no blanco clínico) + Film Grain:** superficie `#F3F2EE` con micro-textura SVG analógica (`opacity: 0.03`) que elimina el aspecto plástico digital y reduce la fatiga visual.
  2. **Restraint (Restricción de texto):** mostrar únicamente los 4–6 datos críticos que Marcelo necesita en 1 segundo (Nro. Bolsín, Precinto, CM Destino, Estado GPS, Última Actualización, Remitos). Cero ruido decorativo.
  3. **Contraste de autoridad + acción:** Negro Tinta (`#0F1412`) y Verde Bosque (`#073B31`) dan solidez; Azul Cobalto (`#1447E6`) y Verde Lima (`#B8E62E`) marcan rutas, telemetría viva y acciones clave.
  4. **Tactilidad 3D (*Keycaps*):** botones con sombra sólida inferior de `4px` que se hunden al clic (`+2px`), ideales para mouse y tablet en depósito.
  5. **Difuminado (*Frosted Glass*):** paneles flotantes sobre el mapa (`backdrop-blur`) con contraste WCAG AA garantizado.

**Tono de voz:** Directo, operativo, sin jerga técnica (*"Bolsín #8420-B en tránsito hacia CM Córdoba"*, nunca *"Error 500"*).

---

## 2. Arquitectura de Colores (Tokens Primitivos → Semánticos)

### 2.1 Paleta Principal y Superficies

| Rol | Token | Hex | Significado y Uso para el Encargado |
|---|---|---|---|
| **Fondo Base (No blanco)** | `--bg-canvas` | `#F3F2EE` | Papel técnico cálido. Descansa la vista en turnos largos y separa las tarjetas sin ruido. |
| **Superficie Tarjeta** | `--bg-surface` | `#FAF9F6` | Tarjetas de bolsines, inputs y paneles de detalle. |
| **Negro Tinta (Contraste)** | `--bg-ink` | `#0F1412` | Bloques de ruta (`ORIGEN → DESTINO`), tablero `SplitFlap`, cabeceras de remito, texto principal. |
| **Carbón Mecánico** | `--bg-ink-mech` | `#1C1C1C` | Celdas individuales del tablero mecánico `SplitFlap`. |
| **Verde Bosque Profundo** | `--brand-forest` | `#073B31` | Contenedores institucionales y base para tarjetas *frosted glass*. |
| **Azul Cobalto Fuerte** | `--brand-blue` | `#1447E6` | **Confianza y ruta:** trayectos en mapa, estado `Entregado`, acción principal (*Notificar al GCM*). |
| **Azul Cobalto Sombra 3D** | `--brand-blue-deep` | `#0E32A6` | Borde inferior 3D del botón primario. |
| **Verde Lima Operativo** | `--brand-lime` | `#B8E62E` | **Movimiento y prioridad:** estado `En Tránsito`, badge `Urgente`, caracteres en flip y señal GPS viva. |
| **Verde Lima Sombra 3D** | `--brand-lime-deep` | `#8AB516` | Borde inferior 3D de botones secundarios/táctiles en lima. |

### 2.2 Colores Semánticos de Estado (CU 36)

| Estado / Situación | Color | Hex | Uso en UI |
|---|---|---|---|
| **En Tránsito / GPS Activo** | Verde Lima + Tinta | `#B8E62E` / `#0F1412` | Pill `En Tránsito`, marcador activo en mapa y flip del `SplitFlap`. |
| **Entregado / Confirmado** | Azul Cobalto + Blanco | `#1447E6` / `#FFFFFF` | Pill `Entregado` y confirmación de correo enviado (CU 30/31). |
| **GPS Sin Respuesta (Flujo A3)** | Ámbar Alerta | `#F59E0B` | Aviso de última posición conocida sin telemetría reciente. |
| **Error Crítico / Bloqueo** | Rojo Señal | `#E11D48` | Fallo de envío o precinto inválido; nunca ocultar el resto del mapa. |
| **Texto Secundario / Muted** | Gris Grafito | `#575B58` | Etiquetas auxiliares, timestamps secundarios, placeholders. |
| **Borde Fantasma (1px)** | Tinta al 10% | `rgba(15, 20, 18, 0.10)` | Contornos sutiles inspirados en Rumbo (`border-ink/10`). |

---

## 3. Tipografía Dual de Alta Densidad (Inspirada en Rumbo `UI-05`)

Combinamos **titulares geométricos condensados** con **micro-etiquetas monoespaciadas expandidas** para lograr lectura instantánea de despacho:

```css
--font-display: 'Space Grotesk', system-ui, sans-serif;   /* Títulos fuertes: tracking -0.035em, weight 700-800 */
--font-sans:    'Plus Jakarta Sans', system-ui, sans-serif; /* UI general, labels, botones */
--font-serif:   'Instrument Serif', Georgia, serif;       /* Acentos editoriales en itálica ("sistema de bolsines") */
--font-mono:    'JetBrains Mono', monospace;              /* Tablero SplitFlap, Precintos, Remitos, Lat/Lng */
```

| Nivel | Uso | Fuente | Tamaño | Tracking / Estilo |
|---|---|---|---|---|
| `Display / H1` | Título principal / Ruta `ORIGEN → DESTINO` | Space Grotesk | `28px–36px` | `700–800`, `-0.035em` (condensado) |
| `H2` | Secciones (`Bolsines en Tránsito`, Modal GCM) | Space Grotesk | `20px–24px` | `700`, `-0.025em` |
| `Micro-Label` | Rótulos técnicos (`CM ORIGEN`, `PRECINTO`, `GPS`) | JetBrains Mono | `10px–11px` | `600`, `uppercase`, `+0.14em` (expandido) |
| `Editorial Tag` | Subtítulo de marca (*sistema de bolsines*) | Instrument Serif | `16px–18px` | `400`, `italic` |
| `Body` | Descripciones, nombres de CM, mensajes | Plus Jakarta Sans | `14px–15px` | `500`, normal |
| `Code / IDs` | `Nº 8420-B`, Precinto, Coordenadas | JetBrains Mono | `13px–14px` | `600`, `tabular-nums` |

---

## 4. Componentes Firma y Patrones de Arquitectura UI

### 4.1 Tablero Mecánico `SplitFlap` (de Rumbo `UI-05`)
- Muestra la ruta **`COR → CABA`** o el **número de bolsín / precinto activo** en la cabecera de detalle sobre bloque Negro Tinta (`#0F1412`) con celdas `#1C1C1C` y ranura central de `1px`.
- Al cambiar de bolsín, los caracteres rotan brevemente en **Verde Lima (`#B8E62E`)** y fijan en blanco hueso (`#FAF9F6`), evocando un tablero real de despacho/aeropuerto.

### 4.2 Patrón Maestro-Detalle `Costado` (`UI-02`)
- Al seleccionar un bolsín (desde la lista o el mapa), el panel de detalle *frosted glass* se abre sin tapar ni hacer perder el scroll de la lista.
- **Atajos de teclado para velocidad en depósito:** `j` / `k` (o `↓` / `↑`) para recorrer bolsines sin soltar el teclado, `Esc` para cerrar detalle.
- **Estabilidad de red:** uso de `AbortController` al cambiar rápido entre bolsines para descartar respuestas GPS viejas y sincronización limpia de URL (`?bolsin=8420`) con `history.replaceState`.

### 4.3 Botones 3D Táctiles (*Keycap Style*)
- **Default:** fondo sólido (`#1447E6` o `#B8E62E`), borde fino `#0F1412`, sombra inferior sólida de `4px` (`0 4px 0 #0E32A6` / `0 4px 0 #0F1412`).
- **Hover (`100ms`):** elevación sutil (`translateY(-1px)`).
- **Active / Click:** hundimiento físico (`translateY(2px)`, sombra reducida a `0 2px 0 ...`).

### 4.4 Paneles *Frosted Glass* + Micro-textura *Film Grain*
- **Frosted Glass:** `background: rgba(7, 59, 49, 0.84)` (oscuro) o `rgba(250, 249, 246, 0.86)` (claro), `backdrop-filter: blur(14px)`, borde fantasma `1px solid rgba(255, 255, 255, 0.18)`.
- **Film Grain:** overlay `pointer-events-none` fijo sobre `--bg-canvas` con ruido SVG fractal sutil (`opacity: 0.03`).

---

## 5. Estrategia de Animaciones (GSAP + Físicas Firmes)

Marcelo trabaja **contra reloj**. Todas las animaciones son **rápidas (`100ms–280ms`)**, con físicas firmes sin gelatina (`easeExpo = [0.16, 1, 0.3, 1]`, `springTap: stiffness 420 / damping 16`) y respetan `(prefers-reduced-motion: reduce)` mediante `gsap.matchMedia()`.

| Momento / Interacción | Tecnología | Comportamiento y Duración | Qué transmite al Encargado |
|---|---|---|---|
| **Clic en Botón 3D** | CSS Transition | `translateY(+2px)` + compresión de sombra (`100ms`, `ease-out`). | Certeza física de que la orden se disparó. |
| **Cambio en `SplitFlap`** | React + CSS | Rotación rápida (`45ms/step`) en `#B8E62E` al cambiar de bolsín o ruta. | Sensación de terminal logística viva en tiempo real. |
| **Carga / Filtrado de Lista** | GSAP (`gsap.from`) | Entrada vertical sutil `y: 10 -> 0`, `autoAlpha: 0 -> 1`, `stagger: 0.04s`, `duration: 0.24s`, `power2.out`. | Orden y respuesta instantánea al tipear un precinto. |
| **Apertura Panel `Costado`** | GSAP (`gsap.to`) | Deslizamiento *frosted glass* (`x: 16 -> 0`, `autoAlpha`, `0.22s`, `power3.out`). | Foco claro sin perder la referencia del mapa detrás. |
| **Marcador GPS en Tránsito** | CSS Keyframes | Anillo de pulso lento (`2.4s`, baja opacidad) **solo** si el GPS reportó reciente; estático en ámbar si falló (A3). | Diferencia en 1 segundo qué bolsín tiene señal viva y cuál no. |
| **Confirmación Email CU 30/31** | GSAP Timeline | Modal entra con `scale: 0.96 -> 1` (`180ms`); al confirmar, badge azul `Notificado` con micro-rebote (`back.out(1.7)`). | Tranquilidad de que el GCM destino fue avisado sin errores. |

---

## 6. Tokens CSS Listos para Tailwind v4 (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-canvas: #F3F2EE;
  --color-surface: #FAF9F6;
  --color-ink: #0F1412;
  --color-ink-mech: #1C1C1C;
  --color-forest: #073B31;
  --color-cobalt: #1447E6;
  --color-cobalt-deep: #0E32A6;
  --color-lime: #B8E62E;
  --color-lime-deep: #8AB516;
  --color-signal-red: #E11D48;
  --color-signal-amber: #F59E0B;
  --color-muted: #575B58;
  --color-border: #DCDAD3;

  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
  --font-mono: "JetBrains Mono", monospace;
}

:root {
  --grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
```
