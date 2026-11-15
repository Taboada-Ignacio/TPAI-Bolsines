---
id: DSI-U1-REALIZACIONES-CU
titulo: Realizaciones de Casos de Uso con Diagramas de Secuencia y Comunicación
tipo: teoria
unidad: Unidad 1
categoria: Analisis
tags: [realizacion-cu, secuencia, comunicacion, uml2, interaccion]
conectado_con: [DSI-00-CONVENCIONES, DSI-U1-GRASP-FUNDAMENTALES, DSI-U1-GRASP-AVANZADOS, PPAI-CU-36]
depende_de: [DSI-00-CONVENCIONES]
---

# Realizaciones de Casos de Uso en DSI

Una **Realización de Caso de Uso** describe cómo un caso de uso particular se ejecuta internamente mediante la colaboración de un conjunto de objetos de software que interactúan enviándose mensajes.

## 1. Estructura Tripartita de Análisis (BCE - Boundary, Control, Entity)

La cátedra adopta el patrón arquitectónico conceptual **Frontera-Control-Entidad** (proveniente de RUP/Jacobson):

1. **Objetos Frontera (`<<boundary>>` / `<<pantalla>>` / `<<interfaz>>`)**:
   - Mediatizan la interacción entre el actor externo y el sistema.
   - Capturan eventos del usuario (clics, ingresos de datos) y muestran información.
   - En nuestro CU 36: `PantallaSeguimientoBolsines`.
2. **Objetos Control (`<<control>>` / `<<gestor>>`)**:
   - Coordinan la lógica de la transacción, el flujo secuencial y la orquestación entre entidades.
   - No representan datos persistentes del dominio ni widgets visuales.
   - En nuestro CU 36: `GestorSeguimientoBolsines`.
3. **Objetos Entidad (`<<entity>>`)**:
   - Representan la información nuclear y el comportamiento persistente del negocio.
   - En nuestro CU 36: `Bolsin`, `ComisionMedica`, `Remito`, `Documentacion`, `Empleado`.

---

## 2. Diagrama de Secuencia UML 2.0

El diagrama de secuencia enfatiza la **ordenación temporal** de los mensajes intercambiados:

### 2.1 Notación y Fragmentos Combinados
- **Líneas de Vida (`Lifelines`)**: Representan la existencia del objeto a lo largo del tiempo.
- **Focos de Control (`Activation Bars`)**: Rectángulos delgados sobre la línea de vida que denotan ejecución activa.
- **Fragmento `loop`**: Especifica bucles o iteraciones sobre colecciones de objetos.
  - *Condición*: `[para cada bolsín en estado enviado]`.
- **Fragmento `alt` (Alternativa)**: Modela caminos condicionales mutuamente excluyentes (equivalente a `if-else`).
- **Fragmento `opt` (Opcional)**: Modela un flujo que se ejecuta solo si se cumple una guarda (e.g., `[si el EB confirma el envío de correo]`).
- **Fragmento `ref` (Referencia)**: Permite incluir o delegar la ejecución a otro diagrama de secuencia (e.g., `ref: CU 30/31 Notificar ubicación de bolsín`).

---

## 3. Diagrama de Comunicación UML 2.0

Enfatiza la **organización estructural** de los objetos que colaboran:
- Los enlaces (`links`) conectan objetos que tienen visibilidad mutua.
- Los mensajes se numeran jerárquicamente con números de secuencia anidados:
  - `1: consultarUbicacionBolsines()`
  - `1.1: obtenerCMUsuario()`
  - `1.2: buscarBolsinesEnviados()`
  - `1.3*: obtenerUbicacionActual()` (el asterisco denota iteración según convención DSI).
