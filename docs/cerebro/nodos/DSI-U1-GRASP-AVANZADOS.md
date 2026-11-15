---
id: DSI-U1-GRASP-AVANZADOS
titulo: Patrones GRASP Avanzados (Polimorfismo, Fabricación Pura, Indirección, Variaciones Protegidas)
tipo: patron-grasp
unidad: Unidad 1
categoria: Analisis
tags: [grasp, polimorfismo, fabricacion-pura, indireccion, variaciones-protegidas]
conectado_con: [DSI-U1-GRASP-FUNDAMENTALES, DSI-U2-PRINCIPIOS-SOLID, DSI-U2-PATRONES-ESTRUCTURALES, PPAI-PAT-ADAPTER-GPS]
depende_de: [DSI-U1-GRASP-FUNDAMENTALES]
---

# Patrones GRASP Avanzados

Los 4 patrones GRASP avanzados resuelven problemas de flexibilidad arquitectónica, variación de comportamiento y aislamiento frente a cambios en subsistemas externos.

## 1. Polimorfismo (Polymorphism)
- **Problema**: ¿Cómo manejar alternativas basadas en tipo? ¿Cómo crear componentes de software conectables (*pluggable*)?
- **Solución**: Cuando el comportamiento varía según el tipo (categoría, protocolo, dispositivo), asignar la responsabilidad del comportamiento mediante **operaciones polimórficas** a las clases para las cuales varía el comportamiento, utilizando interfaces o jerarquías de herencia.
- **En el PPAI**:
  - Existen 3 dispositivos GPS Tracker distintos (`XTR-4500L`, `NavTrack QX-7A`, `GeoPulse MTR-900`). En lugar de usar condicionales `switch (modeloGPS)` en el Gestor, se define la operación polimórfica `obtenerUbicacion()` en la interfaz `IGPSTrackerAdapter`, implementada por cada adaptador concreto.

## 2. Fabricación Pura (Pure Fabrication)
- **Problema**: ¿Qué objeto debe tener la responsabilidad cuando asignar la responsabilidad al Experto en Información viola la Alta Cohesión o el Bajo Acoplamiento, o no existe una entidad del dominio conceptual adecuada?
- **Solución**: Asignar un conjunto altamente cohesivo de responsabilidades a una clase artificial o de conveniencia que no existe en el dominio del problema conceptual del mundo real.
- **En el PPAI**:
  - `GestorSeguimientoBolsines` es una Fabricación Pura.
  - Los Adaptadores (`XTR4500LAdapter`, `NavTrackQX7AAdapter`, `GeoPulseMTR900Adapter`) y los Repositorios de Persistencia (`BolsinRepository`) son Fabricaciones Puras que permiten que las entidades de dominio permanezcan limpias de detalles tecnológicos.

## 3. Indirección (Indirection)
- **Problema**: ¿Dónde asignar una responsabilidad para evitar el acoplamiento directo entre dos o más elementos?
- **Solución**: Asignar la responsabilidad a un objeto intermediario para que medie entre los componentes o servicios, desacoplándolos directamente.
- **En el PPAI**:
  - El Adapter actúa como objeto de indirección entre el Gestor del PPAI y los SDKs/Endpoints propietarios de los fabricantes de hardware GPS.
  - La interfaz de Microsoft Graph actúa como objeto de indirección para el envío de correos electrónicos.

## 4. Variaciones Protegidas (Protected Variations)
- **Problema**: ¿Cómo diseñar objetos, subsistemas y sistemas de modo que las variaciones o inestabilidad en estos elementos no tengan un impacto perjudicial en otros elementos?
- **Solución**: Identificar los puntos de variación previsible o inestabilidad; asignar responsabilidades para crear una interfaz estable alrededor de ellos.
- **En el PPAI**:
  - Es el principio arquitectónico fundamental detrás de la Observación 1 del CU 36. Si mañana el Organismo Contralor compra un cuarto modelo de GPS Tracker (`GarminFleet-500`), el Gestor y la UI no se modifican en una sola línea de código; únicamente se crea un nuevo Adapter que implementa `IGPSTrackerAdapter`.
