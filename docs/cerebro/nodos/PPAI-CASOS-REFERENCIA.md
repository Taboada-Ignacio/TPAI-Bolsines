---
id: PPAI-CASOS-REFERENCIA
titulo: Casos Prácticos de Referencia de la Cátedra DSI (Salud Mental, Campos, F1, Reclamos)
tipo: referencia
unidad: Metodologia
categoria: Catedra
tags: [ppa, epc, casos-practicos, salud-mental, administracion-campos, fia-f1, app-reclamos, audiolibros]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-ARQ-MONOLITICA, DSI-U3-ARQ-MICROSERVICIOS, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-00-CONVENCIONES]
---

# Síntesis de Casos Prácticos de Referencia (OneDrive + NotebookLM)

Este nodo indexa los documentos oficiales resueltos de la cátedra UTN-FRC DSI disponibles en `docs/cerebro/fuentes_onedrive/` y `docs/cerebro/fuentes_notebooklm/`, indicando qué parte consultar según la duda del PPAI Bolsines.

## 1. Casos Completos de PPA (PPAI Anteriores)
- **PPA Consultorio de Salud Mental (`V1.8` Monolítico y Microservicios)**:
  - *Ubicación*: [`fuentes_onedrive/PPA Consultorio de Salud Mental - Monolítico V1.8.pdf.md`](../fuentes_onedrive/PPA%20Consultorio%20de%20Salud%20Mental%20-%20Monol%C3%ADtico%20V1.8.pdf.md) y [`Microservicios V1.8`](../fuentes_onedrive/PPA%20Consultorio%20de%20Salud%20Mental%20-%20Microservicios%20V1.8.pdf.md).
  - *Para qué usarlo*: Referencia directa más actualizada (2025/2026) de cómo diagramar la **Vista de Funcionalidad**, **Vista de Componentes** (con `ILogica...`, `IPersistencia...`), **Vista de Diseño Global** y **Despliegue con Mirroring**.
- **PPA Administración de Campos (`V1-15` y Microservicios `V1-1`)**:
  - *Ubicación*: [`fuentes_onedrive/PPA_Administración de Campos V1-15.pdf.md`](../fuentes_onedrive/PPA_Administraci%C3%B3n%20de%20Campos%20V1-15.pdf.md).
  - *Para qué usarlo*: Documento extenso (70 páginas) con modelo de dominio completo, realizaciones de CU de análisis y diseño, máquinas de estado y persistencia.

## 2. Casos de Arquitectura (Monolítica vs Microservicios)
- **App de Reclamos** (`Monolítica V1-22` / `Microservicios V 1-12`): Excelente ejemplo de transición de capas monolíticas a descomposición DDD por subdominios (Core, Soporte, Genérico).
- **Audiolibros** (`Monolítica V1-3` / `Microservicios V1-4`): Ejemplo limpio de API Gateway + Database per Service + integración con servicios externos.
- **EPC Gestión de Eventos / Líneas Aéreas / Estrella de la Muerte**: Ejercicios prácticos de clase para aplicar **Patrones de Diseño GoF** (Strategy, Observer, State, Adapter, Factory).

## 3. Ejercicios Tipo Parcial 2026
- **FIA Formula 1 (`Parcial 1` y `Parcial 3`)**: Ejercita máquina de estados de `OrdenTraslado` (`Patrón State` con `CambioEstado`), notificación multicanal (`Patrón Observer` Modelo Push) y arquitectura.
- **Venta Cambalache Solidario (`Parcial 2`)** y **CreditIn (`Parcial 1`)**: Casos recientes del ciclo lectivo 2026.
