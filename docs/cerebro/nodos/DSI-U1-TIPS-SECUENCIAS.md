---
id: DSI-U1-TIPS-SECUENCIAS
titulo: Tips y Reglas de Cátedra para Modelado de Realizaciones de CU (Secuencias)
tipo: convencion
unidad: Unidad 1
categoria: Analisis
tags: [tips, secuencias, realizacion-cu, creacion-objetos, iteraciones, dsi]
conectado_con: [DSI-00-CONVENCIONES, DSI-U1-REALIZACIONES-CU, DSI-U1-GRASP-FUNDAMENTALES, PPAI-CU-36]
depende_de: [DSI-00-CONVENCIONES, DSI-U1-REALIZACIONES-CU]
---

# Tips para el Modelado de Realizaciones de Caso de Uso (Secuencias)

Síntesis de `06 Tips para el Modelado de Realizaciones de Caso - Secuencias.pdf` de la cátedra DSI. Reúne los errores más frecuentes y las reglas exactas de corrección.

## 1. Búsqueda y Filtrado de Objetos
- **Dónde empieza**: El Gestor (`<<control>>`) necesita recuperar una colección de objetos de dominio (por ejemplo, todos los `Bolsin` en estado `Enviado` de una CM origen).
- **Regla de cátedra**:
  - Se representa un único objeto anónimo `: Bolsin` (sin nombre delante de los dos puntos) que simboliza a la **colección** de objetos de esa clase.
  - Si hay un fragmento **`loop`** para filtrar o consultar cada objeto:
    - El mensaje entra dentro del bloque `loop [para cada bolsin]`.
    - El propio objeto `Bolsin` actúa como **Experto en Información** respondiendo `esTuCMOrigen(cm)`, `estaEnviado()`, `obtenerNumeroPrecinto()`, etc.
  - **Prohibido en análisis**: No modelar consultas SQL, `Repository` o `SELECT *` en el diagrama de secuencia de *análisis*; los objetos entidad ya "viven" en memoria desde la perspectiva conceptual del análisis. (En *diseño* sí se agregan capas de persistencia o se adaptan según arquitectura).

---

## 2. Creación de Objetos (Únicos vs Múltiples)
Al crear un objeto nuevo mediante `new()`:
1. **Atributos por valor propios**:
   - Ingresados por el actor (ej. `peso`, `asunto`).
   - Asignados por el sistema (ej. `fechaCreacion`, `numeroSecuencial`).
2. **Atributos por referencia**:
   - Elegidos por el actor (ej. `cmDestino`, `remitos`). Se pasan las referencias previamente seleccionadas.
   - Asignados por el sistema (ej. `estadoInicial`, `empleadoResponsable` desde `Sesion`).
3. **Nombrado en el diagrama**:
   - **Creación única** (1 objeto): lleva nombre delante de `:` (ej. `nuevo : Bolsin` o `nuevoCE : CambioEstadoBolsin`).
   - **Creación múltiple** (N objetos en un `loop`): **NO** lleva nombre delante de `:` (ej. `: DetalleRemito`).

---

## 3. Reglas sobre Objetos Frontera y Actores Secundarios
- La `Pantalla` (`<<boundary>>`) **nunca** habla directamente con las entidades (`<<entity>>`) ni con servicios externos de hardware/APIs: siempre pasa por el `Gestor` (`<<control>>`).
- Excepción común en interfaces de correo/mapas de diseño: los actores secundarios de software (`GPS Tracker`, `Google Maps`, `Servidor de Correo`) interactúan mediante clases frontera/adaptadores específicas (`InterfazGPSTracker`, `InterfazGoogleMaps`, `InterfazMail`) invocadas por el `Gestor`.
- **Fecha y hora actual**: En DSI, si el gestor necesita la fecha/hora del sistema, usa un automensaje `obtenerFechaHoraActual()` sobre el propio `Gestor` (no se modela una clase `DateTime` ni `Reloj` salvo indicación explícita).
- **Usuario logueado**: Se obtiene a través de la cadena `Sesion` -> `getUsuario()` -> `getEmpleado()` -> `getComisionMedica()`, respetando **Experto** y **Ley de Demeter** (o encapsulando `sesion.obtenerCMUsuario()`).
