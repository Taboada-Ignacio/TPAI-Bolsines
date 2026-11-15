---
id: DSI-U2-PRINCIPIOS-SOLID
titulo: Principios de Diseño Orientado a Objetos (SOLID y Buenas Prácticas)
tipo: teoria
unidad: Unidad 2
categoria: Diseño
tags: [solid, srp, ocp, lsp, isp, dip, dry, tell-dont-ask, law-of-demeter]
conectado_con: [DSI-00-CONVENCIONES, DSI-U1-GRASP-FUNDAMENTALES, DSI-U1-GRASP-AVANZADOS, DSI-U2-PATRONES-ESTRUCTURALES]
depende_de: [DSI-U1-GRASP-AVANZADOS]
---

# Principios de Diseño Orientado a Objetos (SOLID)

Los principios SOLID formalizados por Robert C. Martin establecen las directrices para construir sistemas orientados a objetos robustos, legibles y mantenibles.

## 1. Los 5 Principios SOLID

### 1.1 SRP - Single Responsibility Principle (Principio de Responsabilidad Única)
- *"Una clase debe tener una, y solo una, razón para cambiar"*.
- Cada clase debe encapsular una única funcionalidad coherente.
- *Violación típica*: Un controlador o entidad que además calcula rutas, renderiza HTML y ejecuta queries SQL a la base de datos.
- *Aplicación*: Separar `Bolsin` (reglas de estado), `BolsinRepository` (persistencia) y `IGPSTrackerAdapter` (comunicación con hardware).

### 1.2 OCP - Open/Closed Principle (Principio Abierto/Cerrado)
- *"Las entidades de software deben estar abiertas para su extensión, pero cerradas para su modificación"*.
- Se deben poder agregar nuevas funcionalidades sin alterar el código existente ya testeado y puesto en producción.
- *Aplicación*: Se añaden nuevos modelos de GPS implementando `IGPSTrackerAdapter` sin modificar el `GestorSeguimientoBolsines`.

### 1.3 LSP - Liskov Substitution Principle (Principio de Sustitución de Liskov)
- *"Los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa"*.
- Las subclases o implementaciones deben respetar el contrato y los invariantes de la clase base o interfaz (no lanzar excepciones inesperadas o relajar precondiciones).
- *Aplicación*: Tanto `XTR4500LAdapter`, `NavTrackQX7AAdapter` como `GeoPulseMTR900Adapter` devuelven una instancia consistente de `UbicacionNormalizada` que el Gestor puede consumir indistintamente.

### 1.4 ISP - Interface Segregation Principle (Principio de Segregación de Interfaces)
- *"Los clientes no deberían verse forzados a depender de interfaces que no utilizan"*.
- Es preferible tener interfaces específicas y pequeñas en lugar de interfaces monolíticas y sobrecargadas ("interfaces gordas").
- *Aplicación*: No mezclar en una sola interfaz métodos de tracking GPS (`obtenerUbicacion`) con métodos de gestión de precintos o impresión de remitos.

### 1.5 DIP - Dependency Inversion Principle (Principio de Inversión de Dependencias)
- *"Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones"*.
- *Aplicación*: `GestorSeguimientoBolsines` (alto nivel) depende de la abstracción `IGPSTrackerAdapter`, mientras que los adaptadores concretos de bajo nivel implementan dicha interfaz.

---

## 2. Otros Principios Fundamentales de la Cátedra
- **DRY (Don't Repeat Yourself)**: Toda pieza de conocimiento debe tener una representación única e inequívoca en el sistema.
- **Tell, Don't Ask**: Decirle a los objetos qué hacer en lugar de pedirles sus datos internos para tomar decisiones fuera de ellos.
- **Ley de Demeter (Principio del Menor Conocimiento - No hables con extraños)**: Un método de un objeto solo debe invocar métodos de:
  1. Sí mismo.
  2. Los objetos pasados como parámetros.
  3. Los objetos que crea o instancia.
  4. Sus atributos directos.
  *(Evitar encadenamientos: `bolsin.getRemito().getDocumento().getCM().getGerente().getEmail()`)*.
- **KISS (Keep It Simple, Stupid)** & **YAGNI (You Aren't Gonna Need It)**.
