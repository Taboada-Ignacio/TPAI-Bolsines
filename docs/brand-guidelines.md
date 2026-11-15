# Manual de Marca & Design System — Sistema de Bolsines (PPAI DSI)

> **Versión:** 1.0  
> **Fecha:** 2026-11-14  
> **Estado:** Aprobado para implementación en `feature/frontend`  
> **Usuario objetivo (Proto-Persona):** Marcelo Gómez (31 años), Encargado de Despacho y Logística de Bolsines (depósito de alto volumen, uso en escritorio y tablet).

---

## 1. Propósito de la Marca y Personalidad Visual

El **Sistema de Seguimiento de Bolsines** traduce la presión operativa de un depósito real en una interfaz **táctil, minimalista, directa y de alta certeza**.

- **Lo que siente Marcelo:** presión por horarios estrictos, miedo a traspapelar documentación o perder un bolsín, necesidad de control absoluto en un vistazo.
- **Lo que responde la marca:**
  1. **Fondo cálido editorial (no blanco clínico):** reduce la fatiga visual en jornadas largas y hace que los estados críticos salten a la vista.
  2. **Contraste de autoridad + acción:** Negro tinta y Verde Bosque Profundo dan solidez institucional; Azul Cobalto y Verde Lima marcan rutas, estados vivos y acciones clave.
  3. **Tactilidad 3D:** botones inspirados en teclas físicas (*keycaps* 3D del moodboard) que responden físicamente al clic o toque en tablet, dando certeza inmediata de acción ejecutada.
  4. **Difuminado / Frosted Glass:** capas translúcidas sobre el mapa y tarjetas de resumen que dejan ver el contexto geográfico detrás sin perder legibilidad.

**Tono de voz:** Directo, operativo, sin jerga técnica (*"Bolsín #8420-B en tránsito hacia CM Córdoba"*, nunca *"Error 500"*).

---

## 2. Arquitectura de Colores (Tokens Primitivos → Semánticos)

### 2.1 Paleta Principal y Superficies

| Rol | Token | Hex | Significado y Uso para el Encargado |
|---|---|---|---|
| **Fondo Base (No blanco)** | `--bg-canvas` | `#F3F2EE` | Papel técnico cálido. Descansa la vista en turnos largos y separa las tarjetas sin ruido. |
| **Superficie Tarjeta** | `--bg-surface` | `#FAF9F6` | Tarjetas de bolsines, inputs y paneles de detalle. |
| **Negro Tinta (Contraste)** | `--bg-ink` | `#0F1412` | Bloques de ruta (`ORIGEN → DESTINO`), cabeceras de remito, texto principal. |
| **Verde Bosque Profundo** | `--brand-forest` | `#073B31` | Contenedores institucionales y base para tarjetas *frosted glass*. |
| **Azul Cobalto Fuerte** | `--brand-blue` | `#1447E6` | **Confianza y ruta:** trayectos en mapa, estado `Entregado`, acción principal (*Notificar al GCM*). |
| **Azul Cobalto Sombra 3D** | `--brand-blue-deep` | `#0E32A6` | Borde inferior 3D del botón primario. |
| **Verde Lima Operativo** | `--brand-lime` | `#B8E62E` | **Movimiento y prioridad:** estado `En Tránsito`, badge `Urgente`, indicadores GPS activos. |
| **Verde Lima Sombra 3D** | `--brand-lime-deep` | `#8AB516` | Borde inferior 3D de botones secundarios/táctiles en lima. |

### 2.2 Colores Semánticos de Estado (CU 36)

| Estado / Situación | Color | Hex | Uso en UI |
|---|---|---|---|
| **En Tránsito / GPS Activo** | Verde Lima + Tinta | `#B8E62E` / `#0F1412` | Pill `En Tránsito` y marcador activo en mapa. |
| **Entregado / Confirmado** | Azul Cobalto + Blanco | `#1447E6` / `#FFFFFF` | Pill `Entregado` y confirmación de correo enviado (CU 30/31). |
| **GPS Sin Respuesta (Flujo A3)** | Ámbar Alerta | `#F59E0B` | Aviso de última posición conocida sin telemetría reciente. |
| **Error Crítico / Bloqueo** | Rojo Señal | `#E11D48` | Fallo de envío o precinto inválido; nunca ocultar el resto del mapa. |
| **Texto Secundario / Muted** | Gris Grafito | `#575B58` | Etiquetas auxiliares, timestamps secundarios, placeholders. |
| **Borde Sutil** | Gris Piedra | `#DCDAD3` | Divisores de tarjetas y contorno de inputs. |

---

## 3. Tipografía Fuerte y Escala

Combinación de **Display geométrico fuerte** (autoridad operativa) + **Sans legible** (formularios/tablas) + **Serif itálica editorial** (detalle de marca) + **Monospace** (códigos de precinto y coordenadas).

```css
--font-display: 'Space Grotesk', system-ui, sans-serif;   /* Titulares fuertes: tracking -0.03em, weight 700-800 */
--font-body:    'Plus Jakarta Sans', system-ui, sans-serif; /* UI general, labels, botones */
--font-serif:   'Instrument Serif', Georgia, serif;       /* Acentos editoriales en itálica ("sistema de bolsines") */
--font-mono:    'JetBrains Mono', monospace;              /* Nro. Bolsín, Precinto, Remitos, Lat/Lng */
```

| Nivel | Uso | Fuente | Tamaño | Peso |
|---|---|---|---|---|
| `Display / H1` | Título principal / Ruta `ORIGEN → DESTINO` | Space Grotesk | `28px–36px` | `700–800` |
| `H2` | Secciones (`Bolsines en Tránsito`, Modal GCM) | Space Grotesk | `20px–24px` | `700` |
| `Editorial Tag` | Subtítulo de marca (*sistema de bolsines*) | Instrument Serif (italic) | `16px–18px` | `400` |
| `Body` | Descripciones, nombres de CM, mensajes | Plus Jakarta Sans | `14px–15px` | `500` |
| `Code / IDs` | `Nº 8420-B`, Precinto, Coordenadas | JetBrains Mono | `13px–14px` | `600` |

---

## 4. Componentes Firma (Estética del Moodboard)

### 4.1 Botones 3D Táctiles (Keycap Style)
Pensados para que Marcelo sienta confirmación física tanto con mouse como en **tablet** dentro del depósito:
- **Default:** fondo sólido (`#1447E6` o `#B8E62E`), borde superior/lateral fino (`1.5px` `#0F1412`), borde/sombra inferior sólida de `4px` (`box-shadow: 0 4px 0 #0E32A6` o `#0F1412`).
- **Hover (`100ms`):** elevación sutil (`translateY(-1px)`).
- **Active / Click:** hundimiento físico (`translateY(2px)`, sombra reducida a `0 2px 0 ...`).

### 4.2 Tarjetas y Paneles con Efecto Difuminado (*Frosted Glass*)
Inspirado en la carpeta verde translúcida del moodboard:
- **Sobre mapa / overlays:** `background: rgba(7, 59, 49, 0.82)` (o `rgba(250, 249, 246, 0.84)` en modo claro), `backdrop-filter: blur(14px)`, borde `1px solid rgba(255, 255, 255, 0.18)`, radios amplios (`16px–20px`).
- **Regla de legibilidad:** nunca usar blur si compromete el contraste del texto (`>= 4.5:1` WCAG AA).

### 4.3 Pills de Estado
- Bordes completamente redondeados (`9999px`), tipografía `Plus Jakarta Sans` `600`, padding compacto (`4px 12px`) replicando las etiquetas `"Urgente"`, `"En Tránsito"`, `"Entregado"`, `"Documentación"`.

---

## 5. Estrategia de Animaciones (GSAP + Micro-interacciones para Marcelo)

Marcelo trabaja **contra reloj** y con transportistas esperando. Por eso las animaciones siguen dos reglas estrictas:
1. **Velocidad operativa (`100ms–280ms`):** ninguna animación puede retrasar un clic ni bloquear la lectura.
2. **Accesibilidad (`gsap.matchMedia()`):** respetar siempre `(prefers-reduced-motion: reduce)` reduciendo duraciones a `0`.

| Momento / Interacción | Tecnología | Comportamiento y Duración | Qué transmite al Encargado |
|---|---|---|---|
| **Clic en Botón 3D** | CSS Transition | `translateY(+2px)` + compresión de sombra (`100ms`, `ease-out`). | Certeza física de que la orden se disparó. |
| **Carga / Filtrado de Lista** | GSAP (`gsap.from`) | Entrada vertical sutil `y: 10 -> 0`, `autoAlpha: 0 -> 1`, `stagger: 0.04s`, `duration: 0.24s`, `power2.out`. | Orden y respuesta instantánea al tipear un precinto. |
| **Selección de Bolsín en Mapa** | GSAP (`gsap.to`) | Deslizamiento suave del panel *frosted glass* (`x: 16 -> 0`, `autoAlpha`, `0.22s`, `power3.out`). | Foco claro sin perder la referencia del mapa detrás. |
| **Marcador GPS en Tránsito** | CSS Keyframes | Anillo de pulso lento (`2.4s`, baja opacidad) **solo** si el GPS reportó reciente; estático en ámbar si falló (A3). | Diferencia en 1 segundo qué bolsín tiene señal viva y cuál no. |
| **Confirmación Email CU 30/31** | GSAP Timeline | Modal entra con `scale: 0.96 -> 1` (`180ms`); al confirmar, badge azul `Entregado / Notificado` con micro-rebote (`back.out(1.7)`). | Tranquilidad de que el GCM destino fue avisado sin errores. |

---

## 6. Tokens CSS Listos para Tailwind v4 (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-canvas: #F3F2EE;
  --color-surface: #FAF9F6;
  --color-ink: #0F1412;
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
```
