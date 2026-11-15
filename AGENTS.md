# AGENTS.md — Activador del Segundo Cerebro (TPAI-Bolsines)

Si sos un agente trabajando en este repositorio, **antes de escribir código o responder**, cargá el contexto del Segundo Cerebro de Diseño (`DSI - UTN FRC / PPAI Bolsines`):

1. **Índice y grafo completo:** leé [`docs/cerebro/README.md`](docs/cerebro/README.md).
2. **Manual de Marca y Design System:** leé [`docs/brand-guidelines.md`](docs/brand-guidelines.md) (paleta `#F3F2EE` / `#1447E6` / `#B8E62E`, botones 3D, *frosted glass*, `SplitFlap`, patrón `Costado` y reglas GSAP).
3. **Nodos de conocimiento:** están en [`docs/cerebro/nodos/`](docs/cerebro/nodos/).
   - Empezá siempre por:
     - [`PPAI-CU-36.md`](docs/cerebro/nodos/PPAI-CU-36.md) (Caso de Uso 36)
     - [`PPAI-DOM-BOLSIN.md`](docs/cerebro/nodos/PPAI-DOM-BOLSIN.md) (Dominio y máquina de estados)
     - [`PPAI-PAT-ADAPTER-GPS.md`](docs/cerebro/nodos/PPAI-PAT-ADAPTER-GPS.md) (Patrón Adapter para GPS Trackers)
     - [`PPAI-IMPL-BACKEND-REVISION.md`](docs/cerebro/nodos/PPAI-IMPL-BACKEND-REVISION.md) (Estado actual del backend y puntos `P1`–`P5` a revisar)
     - [`PPAI-UX-MANUAL-MARCA.md`](docs/cerebro/nodos/PPAI-UX-MANUAL-MARCA.md) (Manual de marca, Rumbo/Costado y motion)
     - [`DSI-00-CONVENCIONES.md`](docs/cerebro/nodos/DSI-00-CONVENCIONES.md) (Convenciones de modelado de la cátedra)
4. **Guía de colaboración y etiquetado:** leé [`docs/cerebro/GUIA-AGENTE.md`](docs/cerebro/GUIA-AGENTE.md).

## Skills recomendadas por área (si están disponibles en tu entorno)

- **UI / Frontend / Craftwork:** `antislop`, `design-taste-frontend`, `hallmark`, `ui-ux-pro-max`, `shadcn`, `stageshow`, `gsap-core`, `gsap-react`, `brand`, `design-system`.
- **Arquitectura / Specs:** `spec-backend-flow`, `spec-frontend-craft-flow`.

## Regla obligatoria para aportes de Nacho (`NACHO`)

Para diferenciar lo que ya estaba en el cerebro base de los cambios y agregados de **Nacho (Ignacio Taboada)**:
- **En nodos nuevos** que cree Nacho/su agente dentro de `docs/cerebro/nodos/`:
  - Incluir `autor: NACHO` en el frontmatter YAML.
  - Incluir `nacho` dentro de `tags: [...]` en el frontmatter YAML.
- **En nodos existentes** que edite Nacho/su agente (por ejemplo `PPAI-IMPL-BACKEND-REVISION.md`):
  - Agregar `nacho` en `tags: [...]`.
  - Encabezar o marcar cada sección/comentario agregado con **`[NACHO]`** (ej. `### [NACHO] Avance en feature/backend`).
- **Después de crear o editar nodos:** ejecutar `python scripts/generate_graph.py` para mantener actualizado `docs/cerebro/README.md`.
