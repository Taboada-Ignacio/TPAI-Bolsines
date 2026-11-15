---
id: DSI-U1-GRASP-FUNDAMENTALES
titulo: Patrones GRASP Fundamentales (Asignación de Responsabilidades)
tipo: patron-grasp
unidad: Unidad 1
categoria: Analisis
tags: [grasp, patrones, responsabilidades, experto, creador, controlador, cohesion, acoplamiento]
conectado_con: [DSI-00-CONVENCIONES, DSI-U1-REALIZACIONES-CU, DSI-U1-GRASP-AVANZADOS, DSI-U2-PRINCIPIOS-SOLID]
depende_de: [DSI-00-CONVENCIONES]
---

# Patrones GRASP Fundamentales

Los patrones **GRASP** (*General Responsibility Assignment Software Patterns*, de Craig Larman) guían el razonamiento mental para asignar responsabilidades a clases y objetos durante el análisis y diseño orientado a objetos.

## 1. Experto en Información (Information Expert)
- **Problema**: ¿Cuál es el principio más general para asignar responsabilidades a los objetos?
- **Solución**: Asignar la responsabilidad a la clase que posee la **información necesaria** para llevarla a cabo.
- **En el PPAI**: 
  - La clase `Bolsin` conoce sus remitos, su fecha, su peso, su precinto y su estado. Por lo tanto, `Bolsin` es el Experto para responder si está en estado enviado (`estaEnviado()`), obtener sus remitos (`obtenerRemitos()`) o validar si su CM de origen coincide (`esDeCMOrigen(cm)`).
  - La clase `ComisionMedica` conoce su nombre, código y dirección de correo de su Gerente (`obtenerEmailGCM()`).

## 2. Creador (Creator)
- **Problema**: ¿Quién debe ser responsable de crear una nueva instancia de alguna clase?
- **Solución**: Asignar a la clase `B` la responsabilidad de crear una instancia de la clase `A` si una o varias de las siguientes condiciones son verdaderas:
  1. `B` contiene o agrega por composición a `A`.
  2. `B` registra o almacena instancias de `A`.
  3. `B` utiliza estrechamente a `A`.
  4. `B` tiene los datos de inicialización que se pasarán a `A` al crearlo (es Experto respecto a la creación).
- **En el PPAI**:
  - `Bolsin` es Creador de sus asociaciones con `Remito`.
  - El `GestorSeguimientoBolsines` crea el objeto DTO o VO `UbicacionBolsinDTO` para enviarlo a la capa de presentación.

## 3. Controlador (Controller)
- **Problema**: ¿Quién debe recibir o gestionar el primer mensaje que llega desde la capa de interfaz de usuario al sistema?
- **Solución**: Asignar la responsabilidad a una clase que represente:
  - Todo el sistema, negocio o subsistema (Controlador fachada).
  - Un escenario de caso de uso donde se realiza la operación del sistema (Controlador de caso de uso).
- **En el PPAI**:
  - `GestorSeguimientoBolsines` actúa como Controlador de Caso de Uso para el CU 36, orquestando las llamadas entre la UI, los repositorios, las entidades y los adaptadores de GPS.

## 4. Bajo Acoplamiento (Low Coupling)
- **Problema**: ¿Cómo soportar una baja dependencia, bajo impacto al cambio y mayor reutilización?
- **Solución**: Asignar responsabilidades de modo que el acoplamiento (dependencias entre clases) se mantenga lo más bajo posible.
- **En el PPAI**:
  - La clase `GestorSeguimientoBolsines` no se acopla directamente a las clases concretas de GPS (`XTR4500L`, `NavTrackQX7A`, `GeoPulseMTR900`), sino que interactúa con la interfaz abstracta `IGPSTrackerAdapter`.

## 5. Alta Cohesión (High Cohesion)
- **Problema**: ¿Cómo mantener la complejidad manejable y los objetos enfocados?
- **Solución**: Asignar responsabilidades de modo que la cohesión permanezca alta. Una clase altamente cohesiva tiene un conjunto pequeño de responsabilidades estrechamente relacionadas y no realiza tareas ajenas a su propósito conceptual.
- **En el PPAI**:
  - El `GestorSeguimientoBolsines` solo coordina el CU 36. No valida tokens de bajo nivel, no hace parsing de JSON crudo de GPS ni envía sockets de red directamente (eso lo delega a los Adapters y al Gateway).
