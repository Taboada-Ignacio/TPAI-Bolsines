# Rumbo Craft Kit (Recursos Reutilizables)

Este paquete contiene los componentes y estilos clave extraídos de la ingeniería inversa a [https://rumbo.iman.ar/demo](https://rumbo.iman.ar/demo), adaptados como primitivas reutilizables para React + Tailwind / CSS.

## Contenido

- **`SplitFlap.reference.txt`**: Componente de tablero de salidas de aeropuerto con solapas mecánicas y ranura de 1px.
- **`tokens.css`**: Definición de tokens de color OLED (`#0a0a0a`), blanco suave (`#f5f5f5`), lima eléctrico (`#d4ff3a`), grano analógico SVG y clases `.glass` y `.marcador`.

## Cómo Utilizar

1. Importar `tokens.css` en tu hoja de estilos principal (`globals.css` o `index.css`).
2. Importar `SplitFlap` en tus vistas:
   ```tsx
   import { SplitFlap } from "./SplitFlap";

   <SplitFlap text="BUE · MAD" size="lg" />
   ```
3. Documentación y arquitectura detallada en el Cerebro: `docs/cerebro/nodos/UI-05-frontend-craft-stageshow-rumbo-benjitaylor.md`.
