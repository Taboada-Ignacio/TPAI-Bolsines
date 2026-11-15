---
id: UI-05
titulo: Frontend Craft Kit (Skills de Benji Taylor, Stageshow y Anatomía Estética de Rumbo)
tipo: ui
estado: Activo
fecha: 2026-11-12
tags: [frontend, benjitaylor, stageshow, agentation, rumbo-demo, taste, anti-slop, micro-interactions, split-flap, spring-physics, fast-track-6h]
depende_de: [UI-03]
conectado_con: [ARQ-00, UI-03, UI-04, UI-01, UI-02]
archivos_relacionados:
  - docs/cerebro/nodos/UI-03-ecosistema-skills-diseno-con-gusto.md
  - docs/cerebro/nodos/UI-04-frontend-kit-hackatwin-ascii-sculptures.md
  - C:/Users/pepep/.gemini/config/skills/stageshow/SKILL.md
  - C:/Users/pepep/.gemini/config/skills/agentation/SKILL.md
---

# UI-05: Frontend Craft Kit (Skills de Benji Taylor, Stageshow y Anatomía de Rumbo)

> **Inspiración y Caso de Estudio:**
> - **Skills del Ecosistema:** `stageshow`, `agentation`, `agentation-self-driving` por **Benji Taylor** ([github.com/benjitaylor/skills](https://github.com/benjitaylor/skills)).
> - **Referencia Visual y Fluidez:** [https://rumbo.iman.ar/demo](https://rumbo.iman.ar/demo) (Prototipo interactivo de viajes de alto pulido construido en 6 horas).
> - **Ubicación Local de las Skills:** Instaladas y activas en `C:\Users\pepep\.gemini\config\skills\`.

---

## 1. Cómo pedirle al Agente que active este kit en futuros chats

Para que Antigravity o cualquier agente aplique de inmediato esta estética y active las skills correspondientes, basta con usar alguna de estas instrucciones clave en tu prompt:

* *"Usá la skill `stageshow` de Benji Taylor y la dirección estética de Rumbo (`UI-05`) para maquetar esta pantalla."*
* *"Diseñá este flujo con el estándar `UI-05`: paleta OLED tinta/carbón, acento lima neón, fuentes Geist Mono e Inter Tight, micro-físicas de resorte y componentes mecánicos como el Split-Flap."*
* *"Armá una demo interactiva con estado reactivo local estilo hackathon de 6 horas, siguiendo el playbook de `UI-05`."*

---

## 2. Las Skills de Benji Taylor instaladas en el sistema

### A. `stageshow` (`C:\Users\pepep\.gemini\config\skills\stageshow`)
* **Qué hace:** Enseña al agente a construir interfaces en miniatura realistas (*faux UI*), demos animadas con cursos guiados, ventanas y bento grids en React y CSS sin caer en los clichés de la IA.
* **Principios inquebrantables de Stageshow:**
  1. **Restraint (Restricción de texto):** Contar las cadenas de texto reales (de 3 a 7 strings clave que cuenten la historia). El resto usa líneas o barras placeholder elegantes. Llenar cada celda con texto inventado hace que parezca generado por IA.
  2. **Unframed Ground:** Las ventanas de producto no flotan en el centro de una caja gris con márgenes iguales en 4 lados. Llenan al menos 2/3 del viewport y sangran intencionalmente por los bordes.
  3. **Motion with Cause:** Cada movimiento tiene un motivo. Nada de transiciones genéricas continuas que distraigan del foco.

### B. `agentation` y `agentation-self-driving` (`C:\Users\pepep\.gemini\config\skills\agentation`)
* **Qué hace:** Toolbar de feedback visual para Next.js y React. Permite que el agente o el diseñador anote la pantalla en tiempo real y el agente ajuste márgenes, colores y tipografías directamente sobre el navegador.

---

## 3. Anatomía Forense de Rumbo (`https://rumbo.iman.ar/demo`)

A partir de la ingeniería inversa de los bundles Vite + React de Rumbo (`App.js`, `ui.js`, `Tablero.js`, `SplitFlap.js`), se extrajeron los secretos técnicos de por qué se siente tan limpia y fluida:

### A. Paleta "Tinta Carbón & Lima Neón" (OLED Depth)
No usa negro puro (`#000000`) de fondo ni blanco puro (`#ffffff`) para el texto:
```css
:root {
  --color-ink:   #0a0a0a; /* Fondo principal: negro carbón */
  --color-ink-2: #121212; /* Tarjetas y superficies elevadas (.glass) */
  --color-ink-3: #1c1c1c; /* Elementos mecánicos / fondos de solapas */
  
  --color-fg:    #f5f5f5; /* Texto primario: blanco hueso suave */
  --color-mute:  #8a8a8a; /* Texto secundario (60% luminancia) */
  --color-dim:   #7d7d7d; /* Separadores, flechas y detalles menores */

  --color-accent: #d4ff3a; /* Verde lima fluorescente eléctrico */
  --color-on-accent: #0a0a0a; /* Texto oscuro sobre acento */
}
```

### B. Micro-textura analógica (Film Grain)
Un filtro SVG turbulento animado a 6 pasos elimina la sensación estéril de pantalla digital:
```css
--grano: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
--grano-opacidad: 0.035;
--grano-anim: grain .9s steps(6) infinite;
```

### C. Bordes Fantasma (Ghost Borders de 1px)
Bordes de 1 píxel al 10% de opacidad blanca (`border: 1px solid rgb(var(--fg-rgb) / .1)` en CSS o `border-fg/10` en Tailwind). En hover, se aplica un cambio casi subliminal: `hover:bg-fg/[0.03]`.

### D. Tipografía Dual de Alta Densidad
* **Títulos y lectura:** `Inter Tight Variable` con tracking condensado (`letter-spacing: -0.045em`) en tamaños grandes (`text-[5.5rem]`).
* **Etiquetas y datos técnicos:** `Geist Mono Variable` en tamaños pequeños (`10px` o `11px`) con **tracking expandido** (`letter-spacing: 0.14em` o `0.16em`) y en mayúsculas (`uppercase`).

### E. Curvas Bézier y Físicas de Resorte (Framer Motion)
```javascript
// Curva exponencial tipo Apple/Vercel (arranque explosivo, frenada suave)
export const easeExpo = [0.16, 1, 0.3, 1];

// Resorte para clics táctiles firmes (sin efecto gelatina)
export const springTap = { type: "spring", stiffness: 420, damping: 16 };

// Resorte para paneles flotantes
export const springSmooth = { type: "spring", stiffness: 80, damping: 20 };
```

---

## 4. Componentes Clave Reutilizables

### 1. El componente `SplitFlap` (Tablero Mecánico de Aeropuerto)
Renderiza números o letras que rotan a gran velocidad en verde lima y tienen una ranura física de 1px en el medio:
```tsx
import React, { useState, useEffect } from "react";

export function SplitFlap({ text, size = "lg" }: { text: string; size?: "sm" | "lg" }) {
  const chars = text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
  return (
    <span className="inline-flex flex-wrap gap-[3px]" aria-label={text}>
      {chars.map((char, i) => (
        <SplitFlapChar key={`${i}-${char}`} char={char} delay={i * 40} size={size} />
      ))}
    </span>
  );
}

function SplitFlapChar({ char, delay = 0, size = "lg" }: { char: string; delay?: number; size?: "sm" | "lg" }) {
  const [current, setCurrent] = useState(char);
  const isFlipping = current !== char;

  useEffect(() => {
    let count = 0;
    const max = 6 + Math.floor(delay / 40);
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·";
    const timer = setInterval(() => {
      count++;
      if (count >= max) {
        setCurrent(char);
        clearInterval(timer);
      } else {
        setCurrent(alphabet[Math.floor(Math.random() * alphabet.length)]);
      }
    }, 45);
    return () => clearInterval(timer);
  }, [char, delay]);

  const sizeClass = size === "lg" 
    ? "h-[1.5em] w-[1.05em] text-[clamp(1.4rem,2.6vw,2.2rem)]" 
    : "h-[1.6em] w-[1.15em] text-[14px]";

  return (
    <span className={`relative inline-grid place-items-center overflow-hidden rounded-[2px] bg-[#1c1c1c] font-mono font-semibold ${sizeClass}`}>
      <span className={`transition-all duration-75 ${isFlipping ? "-translate-y-[3%] text-[#d4ff3a]" : "text-[#f5f5f5]"}`}>
        {current === " " ? "\u00A0" : current}
      </span>
      <span className="absolute inset-x-0 top-1/2 h-px bg-black/60 pointer-events-none" />
    </span>
  );
}
```

### 2. Cortina Horizontal (`clipPath`) e Indicador Líquido (`layoutId`)
Para filas de tablas o listas seleccionables:
```tsx
import { motion } from "framer-motion";

export function TableroFila({ item, isSelected, onSelect, index }: any) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.98 }}
      className={`relative grid w-full grid-cols-[120px_1fr_auto] items-center gap-4 border-t border-white/[0.07] px-4 py-3 text-left transition-colors ${
        isSelected ? "bg-[#d4ff3a]/[0.08]" : "hover:bg-white/[0.03]"
      }`}
    >
      {/* Indicador líquido que se desliza entre filas */}
      {isSelected && (
        <motion.span
          layoutId="indicador-fila"
          className="absolute inset-y-0 left-0 w-[3px] bg-[#d4ff3a]"
        />
      )}
      <SplitFlap text={item.codigo} size="sm" />
      <div>
        <span className="block font-mono text-[14px] text-[#f5f5f5]">{item.titulo}</span>
        <span className="block text-[12px] text-[#8a8a8a]">{item.subtitulo}</span>
      </div>
      <span className="font-mono text-[14px] text-[#f5f5f5]">{item.valor}</span>
    </motion.button>
  );
}
```

### 3. El Efecto Resaltador (`.marcador`)
Un trazo de resaltador dibujado dinámicamente:
```css
.marcador {
  color: #0a0a0a;
  background: linear-gradient(#d4ff3a, #d4ff3a) no-repeat 0 62% / 100% 76%;
  box-decoration-break: clone;
}
```

---

## 5. El Playbook de 6 Horas: Cómo construir una demo de este nivel en tiempo récord

1. **Hora 0–1 (Cero Parálisis Visual):** Configurar tokens fijos (`#0a0a0a`, `#121212`, `#1c1c1c`, `#d4ff3a`, bordes `border-fg/10`). Prohibido debatir colores o fuentes.
2. **Hora 1–2 (Cero Backend):** Crear un archivo `state.ts` con estado reactivo puro en memoria y 3 a 5 datos simulados hiper-realistas. Cero latencia, cero bases de datos.
3. **Hora 2–4 (Componentes con Identidad Física):** Implementar la columna izquierda deslizable y la columna derecha `sticky` con el contador odómetro y el `SplitFlap`.
4. **Hora 4–5 (Coreografía y Resortes):** Reemplazar transiciones CSS por curvas `[0.16, 1, 0.3, 1]`, `whileTap: { scale: 0.94 }`, `layoutId` y `clipPath`.
5. **Hora 5–6 (Textura y Pulido):** Inyectar el overlay de ruido fractal y el linter visual antes del despliegue.
