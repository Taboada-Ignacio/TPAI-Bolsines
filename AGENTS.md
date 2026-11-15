# AGENTS.md — Activador del Segundo Cerebro (TPAI-Bolsines)

Si sos un agente trabajando en este repositorio, **antes de escribir código o responder**, cargá el contexto del Segundo Cerebro de Diseño (`DSI - UTN FRC / PPAI Bolsines`):

1. **Índice y grafo completo:** leé [`docs/cerebro/README.md`](docs/cerebro/README.md).
2. **Manual de Marca y Design System:** leé [`docs/brand-guidelines.md`](docs/brand-guidelines.md) (paleta `#F3F2EE` / `#1447E6` / `#B8E62E`, botones 3D, *frosted glass*, `SplitFlap`, patrón `Costado` y reglas GSAP).
3. **Nodos de conocimiento:** están en [`docs/cerebro/nodos/`](docs/cerebro/nodos/).
   - Empezá siempre por:
     - [`PPAI-CU-36.md`](docs/cerebro/nodos/PPAI-CU-36.md) (Caso de Uso 36).
     - [`PPAI-DOM-BOLSIN.md`](docs/cerebro/nodos/PPAI-DOM-BOLSIN.md) (Dominio y máquina de estados).
     - [`PPAI-PAT-ADAPTER-GPS.md`](docs/cerebro/nodos/PPAI-PAT-ADAPTER-GPS.md) (Patrón Adapter para GPS Trackers).
     - [`PPAI-IMPL-BACKEND-REVISION.md`](docs/cerebro/nodos/PPAI-IMPL-BACKEND-REVISION.md) (Estado actual del backend y puntos `P1`–`P5` a revisar).
     - [`PPAI-UX-MANUAL-MARCA.md`](docs/cerebro/nodos/PPAI-UX-MANUAL-MARCA.md) (Manual de marca, Rumbo/Costado y motion).
     - [`DSI-00-CONVENCIONES.md`](docs/cerebro/nodos/DSI-00-CONVENCIONES.md) (Convenciones de modelado de la cátedra).
4. **Guía de colaboración y etiquetado:** leé [`docs/cerebro/GUIA-AGENTE.md`](docs/cerebro/GUIA-AGENTE.md).

## Skills recomendadas por área (si están disponibles en tu entorno)

- **UI / Frontend / Craftwork:** `antislop`, `design-taste-frontend`, `hallmark`, `ui-ux-pro-max`, `shadcn`, `stageshow`, `gsap-core`, `gsap-react`, `brand`, `design-system`.
- **Arquitectura / Specs:** `spec-backend-flow`, `spec-frontend-craft-flow`.

## Regla obligatoria para aportes de Nacho (`NACHO`)

Para diferenciar lo que ya estaba en el cerebro base de los cambios y agregados de **Nacho (Ignacio Taboada)**:

- **En nodos nuevos** que cree Nacho/su agente dentro de `docs/cerebro/nodos/`:
  - Incluir `autor: NACHO` en el frontmatter YAML.
  - Incluir `nacho` dentro de `tags: [...]` en el frontmatter YAML.

- **En nodos existentes** que edite Nacho/su agente (por ejemplo, `PPAI-IMPL-BACKEND-REVISION.md`):
  - Agregar `nacho` en `tags: [...]`.
  - Encabezar o marcar cada sección/comentario agregado con **`[NACHO]`** (ejemplo: `### [NACHO] Avance en feature/backend`).
  - Preservar los contenidos y la autoría preexistentes.

- **Después de crear o editar nodos:** ejecutar:

  ```bash
  python scripts/generate_graph.py
  ```

  Esto mantiene actualizado `docs/cerebro/README.md`.

---

## Actualización obligatoria del Segundo Cerebro después de cambios de código

**Esta regla es obligatoria para todos los agentes que realicen implementaciones, modificaciones, correcciones o refactorizaciones dentro del proyecto.**

El Segundo Cerebro debe mantenerse sincronizado con el estado real del código fuente.

### 1. Registro de cambios

Después de cada tarea que modifique el código, el agente debe:

1. Identificar los componentes modificados.
2. Determinar qué nodos del Segundo Cerebro están relacionados con esos componentes.
3. Actualizar los nodos existentes con la información correspondiente.
4. Crear nuevos nodos cuando se incorporen conceptos, componentes, patrones o decisiones que todavía no estén documentados.
5. Registrar las decisiones técnicas tomadas durante la implementación.
6. Registrar las relaciones entre los componentes cuando hayan cambiado.
7. Registrar los resultados de las verificaciones y pruebas realizadas.

No es necesario crear un nodo nuevo por cada archivo modificado. Se deben actualizar los nodos que correspondan conceptualmente al cambio.

### 2. Información que debe conservarse

Cada actualización relevante debe documentar, según corresponda:

- Funcionalidad implementada.
- Clases creadas o modificadas.
- Atributos y métodos incorporados.
- Relaciones entre clases.
- Interfaces implementadas.
- Patrones de diseño utilizados.
- Decisiones arquitectónicas.
- Endpoints y contratos de comunicación.
- Reglas de negocio implementadas.
- Cambios de persistencia.
- Dependencias incorporadas o eliminadas.
- Pruebas realizadas.
- Errores detectados y corregidos.
- Limitaciones conocidas.
- Funcionalidades pendientes.

No registrar contraseñas, tokens, API Keys reales ni otros secretos.

### 3. Correspondencia entre UML y código

Para los componentes relacionados con el PPAI de Diseño de Sistemas de Información, **los diagramas UML aprobados deben considerarse la referencia principal del diseño**.

Después de implementar o modificar componentes representados en UML, verificar:

1. Existencia de las clases definidas.
2. Correspondencia de atributos y métodos.
3. Correspondencia de interfaces.
4. Relaciones entre clases.
5. Navegabilidad y multiplicidades.
6. Responsabilidades asignadas.
7. Aplicación de los patrones de diseño.

Si existen diferencias entre el diseño aprobado y el código, registrarlas explícitamente.

No modificar unilateralmente el diseño UML para justificar una implementación diferente.

Si una incompatibilidad técnica requiere modificar el diseño, solicitar aprobación antes de introducir una desviación estructural.

### 4. Etiquetado de aportes

Todos los cambios realizados por Nacho o sus agentes deben respetar las convenciones de autoría definidas anteriormente.

**Nodos nuevos:**

- `autor: NACHO`.
- Etiqueta `nacho` en el frontmatter.

**Nodos existentes:**

- Conservar la autoría original.
- Incorporar la etiqueta `nacho`.
- Identificar las contribuciones mediante `[NACHO]`.

No eliminar contribuciones de otros participantes.

### 5. Actualización del estado de implementación

Después de cada tarea de desarrollo, revisar el nodo:

`docs/cerebro/nodos/PPAI-IMPL-BACKEND-REVISION.md`

Actualizarlo cuando existan cambios relevantes en el estado del backend.

Registrar:

- Funcionalidades completadas.
- Componentes implementados.
- Pruebas ejecutadas.
- Resultados de compilación.
- Problemas pendientes.
- Próximos pasos técnicos.

Evitar duplicar innecesariamente información que ya esté documentada en nodos especializados.

### 6. Regeneración obligatoria del grafo

Después de crear o modificar cualquier nodo, ejecutar:

```bash
python scripts/generate_graph.py
```

Verificar que:

1. El comando finalice correctamente.
2. `docs/cerebro/README.md` se haya actualizado cuando corresponda.
3. Los nodos nuevos aparezcan en el índice.
4. Las relaciones existentes continúen siendo válidas.
5. No se hayan eliminado accidentalmente nodos o conexiones preexistentes.

Si la regeneración falla, informar el error y dejar constancia de que el grafo no pudo actualizarse.

No afirmar que el Segundo Cerebro está sincronizado si el proceso de actualización no finalizó correctamente.

### 7. Verificación antes de finalizar una tarea

Antes de dar por terminada una tarea que modifique archivos del proyecto, el agente debe comprobar:

- [ ] Se implementaron los cambios solicitados.
- [ ] Se ejecutaron las verificaciones técnicas disponibles.
- [ ] Se identificaron los nodos relacionados.
- [ ] Se actualizaron los nodos que correspondan.
- [ ] Se respetaron las reglas de etiquetado y autoría.
- [ ] Se regeneró el grafo si se modificaron nodos.
- [ ] Se verificó el resultado de la regeneración.
- [ ] Se documentaron los problemas o tareas pendientes.

Si alguna comprobación no pudo completarse, indicarlo expresamente.

### 8. Informe final del agente

Al finalizar una tarea de implementación, incluir:

1. Resumen de los cambios realizados.
2. Archivos de código creados o modificados.
3. Nodos del Segundo Cerebro creados o actualizados.
4. Decisiones técnicas registradas.
5. Resultado de la regeneración del grafo.
6. Pruebas ejecutadas y resultados.
7. Problemas encontrados.
8. Tareas pendientes.

### 9. Regla de cierre

**Ninguna tarea de implementación, corrección o refactorización debe considerarse completamente finalizada sin revisar la necesidad de actualizar el Segundo Cerebro.**

La documentación debe representar fielmente el estado del proyecto.

El objetivo es que cualquier integrante del equipo o agente que consulte posteriormente el Segundo Cerebro pueda comprender:

- Qué se implementó.
- Cómo funciona.
- Por qué se tomaron determinadas decisiones.
- Qué relaciones existen entre los componentes.
- Qué falta desarrollar.

**El código fuente es la referencia del comportamiento implementado; el Segundo Cerebro documenta y explica ese comportamiento, sus decisiones y su relación con el diseño aprobado.**