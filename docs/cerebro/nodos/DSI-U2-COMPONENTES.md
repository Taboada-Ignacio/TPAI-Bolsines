---
id: DSI-U2-COMPONENTES
titulo: Diseño de Componentes de Software e Interfaces
tipo: teoria
unidad: Unidad 2
categoria: Diseño
tags: [componentes, interfaces, granularidad, encapsulamiento, uml2, dsi]
conectado_con: [DSI-00-CONVENCIONES, DSI-U2-PERSISTENCIA, DSI-U3-ARQ-MONOLITICA, DSI-U3-ARQ-MICROSERVICIOS]
depende_de: [DSI-00-CONVENCIONES, DSI-U2-PRINCIPIOS-SOLID]
---

# Diseño de Componentes de Software

Síntesis de `15 Diseño de Componentes.pdf` y las convenciones oficiales de la cátedra DSI.

## 1. Definición y Granularidad
- Un **componente** es una parte modular, encapsulada y reemplazable de un sistema que oculta su implementación interna y expone un conjunto explícito de servicios a través de interfaces bien definidas.
- **Granularidad**: Decisión arquitectónica que define el tamaño y responsabilidad de cada componente (desde componentes de dominio finos hasta subsistemas o microservicios completos).
- Son más abstractos que las clases individuales: un componente agrupa internamente clases de control, entidades, adaptadores o repositorios altamente cohesionados.

---

## 2. Reglas Oficiales de Cátedra para Diagramas de Componentes

1. **Prefijo `I` Obligatorio**: Toda interfaz debe comenzar con la letra `I` mayúscula (`ILogicaBolsin`, `IGPSTracker`, `IServidorCorreo`, `IPersistenciaBolsin`).
2. **Coincidencia Exacta de Nombres**: La interfaz provista (círculo / *lollipop*) y la interfaz requerida (semicírculo / *socket*) que se conectan deben tener exactamente el **mismo nombre**.
3. **Ubicación de Interfaces en Subsistemas**:
   - Si más de un componente dentro de un subsistema provee o requiere la funcionalidad, la interfaz se asocia al borde del **subsistema completo**.
   - Si corresponde a un componente específico (como `IMaterializacion` o `IDesmaterializacion`), se asocia al **componente puntual**.
4. **Componentes de Presentación**: Se identifica un componente de presentación por cada tecnología (`PresWeb...`, `PresMobile...`) por subsistema, conectado mediante interfaz requerida hacia la interfaz provista de la lógica de negocio.
5. **Solo Desarrollo Propio**: En la vista arquitectónica de diseño monolítica se modelan únicamente los componentes desarrollados por el equipo, no librerías internas de terceros; las interfaces requeridas hacia sistemas externos (Google Maps, Outlook Graph, GPS Trackers, Power BI) pueden quedar abiertas sin interfaz provista interna o conectadas en la Vista de Diseño Global.
