---
id: DSI-00-CONVENCIONES
titulo: Convenciones Oficiales de Modelado DSI v1.5
tipo: convencion
unidad: Metodologia
categoria: Catedra
version: 1.5
autores: [Judith Meles, Cecilia Massano, Maria Sanchez, Laura Covaro]
tags: [convenciones, modelado, uml, dsi, utn-frc]
conectado_con: [DSI-U1-REALIZACIONES-CU, DSI-U1-MAQUINA-ESTADOS, DSI-U2-COMPONENTES, DSI-U3-ARQ-MONOLITICA, DSI-U3-ARQ-MICROSERVICIOS]
depende_de: []
---

# Convenciones de Modelado de la Cátedra de DSI (Versión 1.5)

Las convenciones de modelado establecen las reglas y pautas oficiales adoptadas por la cátedra de **Diseño de Sistemas de Información (UTN - FRC)** para unificar el lenguaje visual y conceptual entre estudiantes, docentes y arquitectos.

## 1. Definición del Sistema y Nomenclatura de Alcances

### 1.1 Verbos Operacionales
- **Administrar**: Se reserva exclusivamente para casos de uso de soporte o mantenimiento de entidades maestras (**ABMC**: Registrar, Modificar, Consultar, Eliminar).
  - *Ejemplo*: `Administrar Cultivo` abarca: `Registrar Cultivo`, `Modificar Cultivo`, `Eliminar Cultivo`, `Consultar Cultivo`.
- **Gestionar**: Se utiliza para transacciones nucleares del negocio que involucran ciclo de vida y múltiples entidades.
  - *Ejemplo*: `Gestionar Reservas`, `Gestionar Envío de Bolsines`.

### 1.2 Nomenclatura de Casos de Uso
- Todo caso de uso debe comenzar con un verbo en infinitivo representativo desde la **perspectiva del sistema** (e.g., `Registrar Venta`, `Consultar Seguimiento de Bolsines`).
- Se debe respetar rigurosamente el **vocabulario del dominio** (si el cliente habla de "Bolsín", "Remito" o "Precinto", no usar "Paquete", "Factura" o "Candado").

---

## 2. Convenciones para Modelado de Dominio

- **Diagrama de Clases UML**:
  - Atributos: **Sin visibilidad (`+`, `-`) ni tipo de dato**.
  - Métodos: **Sin visibilidad, ni parámetros, ni tipos de retorno**.
  - Atributos por referencia: **Se modelan sobre la relación de asociación**, nunca como atributo escalar dentro de la caja de la clase.
  - Constructores y destructores: `new()` y `delete()` se especifican en **una única clase de referencia** con una nota aclaratoria ("En las demás clases se asumen implícitos").

---

## 3. Realizaciones de Casos de Uso (Análisis y Diseño)

### 3.1 Vista Estática
- Atributos en clases de Fabricación Pura: incluir al menos 5 atributos representativos.
- Dependencias: relación de dependencia (`..>`) entre clases de control y clases de entidad.
- Notación: representación etiquetada con estereotipos `<<boundary>>` (o `<<interfaz>>`), `<<control>>`, `<<entity>>`.

### 3.2 Vista Dinámica (Secuencia y Comunicación)
- **Representación icónica** de los objetos en diagramas de secuencia/comunicación.
- **Nombrado de instancias**:
  - Solo se nombran instancias **únicas** (`nuevo : Campo`, `actual : Sesion`).
  - Las colecciones o subconjuntos iterados no llevan nombre previo a los dos puntos (`: Lote`).
- **Iteraciones**:
  - En diagramas de comunicación: asterisco `*` en el número de secuencia (e.g., `1.3* : obtenerCoordenadas()`).
  - En diagramas de secuencia: fragmento combinado con operador **`loop`**, reservando el asterisco únicamente cuando es un solo método simple.

---

## 4. Convenciones de Arquitectura y Componentes

### 4.1 Nomenclatura de Interfaces
- Toda interfaz formal debe comenzar con el prefijo **`I`** mayúscula:
  - *Ejemplos*: `ILogicaBolsin`, `IAutenticacion`, `IGPSTracker`, `IServidorCorreo`.
- Coincidencia exacta de nombres: la interfaz provista (lollipop/piruleta) y la interfaz requerida (socket/media luna) deben compartir el **mismo nombre**.
- Interfaces solas: únicamente permitidas cuando conectan con servicios externos de terceros (e.g., Google Maps API, Microsoft Graph).

### 4.2 Despliegue y Alta Disponibilidad (RNF Mirroring)
- Bases de datos con requerimiento de **Mirroring / Base de datos espejada**:
  - Se debe desplegar un segundo nodo de hardware independiente (`<<device>> Servidor BD Espejo`).
  - El servidor de aplicaciones se vincula con la BD primaria y con la BD espejo para conmutación transparente (Failover).
