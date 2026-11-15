# Guía Operativa del Segundo Cerebro Compartido

Este directorio (`docs/cerebro/`) contiene el **Segundo Cerebro de Diseño de Sistemas de Información (DSI)** y la especificación viva del **PPAI - Sistema de Bolsines (CU 36 y CU 30/31)**.

## Estructura

- `README.md`: Grafo Mermaid completo e índice de todos los nodos (autogenerado por `scripts/generate_graph.py`).
- `nodos/`: Nodos atómicos en Markdown con frontmatter YAML (`id`, `titulo`, `tipo`, `unidad`, `categoria`, `tags`, `conectado_con`, `depende_de`).
- `fuentes_notebooklm/` y `fuentes_onedrive/`: Material fuente de cátedra, ERS, descripciones de caso y resúmenes.

## Cómo diferenciar autoría (`NACHO` vs Base)

- **Cerebro base:** Los nodos originales de arquitectura, teoría DSI y revisión inicial no llevan el tag `nacho`.
- **Aportes de Nacho:** Todo nodo nuevo o modificación hecha desde el entorno de Nacho debe incluir:
  1. `autor: NACHO` (si el nodo es nuevo) y `nacho` en `tags: [...]`.
  2. Prefijo `[NACHO]` en los bloques agregados dentro de nodos compartidos como `nodos/PPAI-IMPL-BACKEND-REVISION.md`.
  3. Regeneración del grafo con:
     ```bash
     python scripts/generate_graph.py
     ```
