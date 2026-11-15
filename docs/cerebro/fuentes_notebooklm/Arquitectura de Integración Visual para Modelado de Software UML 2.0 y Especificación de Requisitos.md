# Arquitectura de Integración Visual para Modelado de Software UML 2.0 y Especificación de Requisitos bajo el Protocolo de Contexto de Modelo de Lucidchart: Directrices Metodológicas de Cátedra

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta unas 
directrices metodológicas para el modelado de software
 y la 
especificación de requisitos
, enfocándose en alinear las abstracciones visuales con los estándares de ingeniería. Su propósito principal es describir cómo 
conectar la inteligencia artificial con herramientas de diagramación
 mediante un servidor especializado, utilizando un protocolo de contexto que automatiza la creación de artefactos técnicos. Asimismo, el texto detalla el uso de 
marcos doctrinales y plantillas normalizadas
 —como UML 2.0 y el estándar IEEE 830— para estructurar casos de uso, máquinas de estados y diagramas de clases con rigor académico. Finalmente, destaca la importancia de establecer una 
gobernanza del diseño y trazabilidad estricta
, asegurando que los modelos generados de forma automatizada mantengan consistencia teórica y eviten desviaciones conceptuales durante todo el ciclo de vida del desarrollo.

## Arquitectura de Integración Visual para Modelado de Software UML 2.0 y Especificación de Requisitos bajo el Protocolo de Contexto de Modelo de Lucidchart: Directrices Metodológicas de Cátedra


### Fundamentos Teóricos de Cátedra para el Modelado de Software

El diseño y la especificación de sistemas de software en el ámbito académico y profesional exigen una adhesión rigurosa a marcos metodológicos consolidados. Las cátedras universitarias de ingeniería de software adoptan enfoques estructurados para garantizar que las abstracciones visuales se traduzcan de manera unívoca en sistemas ejecutables y mantenibles [cite: 1, 2]. Entre las referencias doctrinales más influyentes se encuentran el análisis y diseño de sistemas propuesto por Kendall y Kendall [cite: 1], las guías de modelado conceptual de la Universidad de los Andes [cite: 1], las especificaciones de casos de uso de Manuel Vega en la Universidad de Granada [cite: 1, 3], y el enfoque práctico para la exploración de requisitos desarrollado por Claudio Ceria en la Universidad de Buenos Aires [cite: 3]. Estos marcos se complementan con las metodologías de asignación de responsabilidades de Craig Larman [cite: 2] y el modelado de interacción de Alistair Cockburn [cite: 4, 5].
El propósito fundamental de un modelo visual basado en el Lenguaje Unificado de Modelado (UML 2.0) es reducir la brecha de comunicación entre los interesados del negocio y el equipo de desarrollo técnico [cite: 6, 7]. La cátedra enfatiza que los diagramas no son meros dibujos estáticos, sino planos de ingeniería que deben mantener una consistencia matemática e informática estricta con la especificación de requisitos [cite: 8, 9, 10]. El uso de herramientas de colaboración visual como Lucidchart, integradas con agentes de inteligencia artificial a través del Protocolo de Contexto de Modelo (MCP), permite automatizar la generación de estos artefactos respetando las restricciones semánticas de la teoría de objetos [cite: 11, 12, 13].

### Especificación Global de Requisitos de Software bajo el Estándar IEEE 830

La transición desde la comprensión del problema del negocio hacia el diseño técnico requiere la redacción de un documento de Especificación de Requisitos de Software (ERS) bajo el estándar internacional IEEE 830-1998 [cite: 14, 15]. Este estándar proporciona una estructura sistemática que documenta los acuerdos contractuales y operativos del sistema, asegurando que los requisitos sean verificables, atómicos, consistentes y priorizados [cite: 14, 15, 16]. La cátedra prescribe la división clara entre requisitos funcionales globales detallados (DFR) y requisitos no funcionales (NFR) [cite: 14, 17].
Los requisitos funcionales definen los servicios de software específicos que el sistema debe ejecutar en respuesta a estímulos del usuario o del entorno [cite: 3, 7]. Por el contrario, los requisitos no funcionales establecen las restricciones cualitativas y de rendimiento bajo las cuales opera el sistema, impactando directamente en la experiencia del usuario y la arquitectura de despliegue [cite: 6, 18].
Categoría NFR
Definición de Cátedra (IEEE 830)
Métrica de Aceptación Cuantitativa
Método de Verificación de Calidad
Rendimiento
Establece los límites de tiempo de respuesta, capacidad de procesamiento y uso de recursos del hardware [cite: 17, 18].
El tiempo de respuesta de transacciones críticas debe ser inferior a 
 con 
 peticiones simultáneas [cite: 18, 19].
Pruebas de carga automatizadas mediante simulación de concurrencia extrema [cite: 18].
Fiabilidad
Mide la probabilidad de funcionamiento sin fallos del sistema durante un intervalo de tiempo específico [cite: 15, 18].
Tasa de fallos inferior a 
 evento imprevisto por cada 
 de operación continua (
 de disponibilidad) [cite: 18].
Monitoreo continuo de logs de producción y cálculo del tiempo medio entre fallos (MTBF) [cite: 18].
Seguridad
Regula los mecanismos de autenticación, autorización, confidencialidad y protección de datos sensibles [cite: 17, 18].
Cifrado AES-256 para persistencia de datos y autenticación de doble factor obligatoria para roles administrativos [cite: 18].
Auditorías externas de penetración y escaneo dinámico de vulnerabilidades (DAST) [cite: 18, 20].
Portabilidad
Evalúa la facilidad con la que el sistema se adapta a diferentes entornos operativos o navegadores [cite: 15, 18].
Compatibilidad total demostrada en entornos Chromium, WebKit y Gecko sin alteración de la maquetación [cite: 15, 18].
Ejecución de pruebas de interfaz de usuario de extremo a extremo en granjas de dispositivos virtuales [cite: 18].
Mantenibilidad
Mide el esfuerzo requerido para diagnosticar fallos, corregir errores o incorporar mejoras evolutivas [cite: 15, 18].
Cobertura de pruebas unitarias superior al 
 y deuda técnica estimada inferior al 
 del esfuerzo de desarrollo [cite: 18].
Análisis estático de código fuente mediante herramientas automatizadas de calidad de software [cite: 18, 20].

### Metodología Estructurada para la Identificación y Modelado de Casos de Uso

La identificación de casos de uso constituye el mecanismo preferido por la cátedra para capturar los requisitos funcionales desde la perspectiva del usuario final [cite: 1, 6, 7]. Según las directrices de Alistair Cockburn y Claudio Ceria, un caso de uso debe representar un objetivo completo y valioso que un actor logra interactuar con el sistema en una sesión de trabajo acotada temporalmente [cite: 3, 4, 9]. La cátedra distingue explícitamente entre el objetivo del negocio (asociado a la cadena de valor) y el caso de uso del sistema (asociado a la interacción técnica directa) [cite: 7].
Para descubrir sistemáticamente los casos de uso y delimitar el alcance del sistema, se deben formular preguntas específicas basadas en los actores identificados [cite: 4, 8].
¿Cuáles son las tareas generales que un actor debe llevar a cabo en su jornada diaria? [cite: 4]
¿Necesita el actor consultar, modificar o eliminar información almacenada en el sistema? [cite: 4]
¿Debe el sistema notificar al actor sobre eventos o cambios de estado imprevistos? [cite: 4]
¿Interactúa el sistema con pasarelas de pago, bases de datos heredadas u otras APIs de terceros? [cite: 4, 8]
El modelado gráfico de estas interacciones se realiza en el diagrama de casos de uso, utilizando asociaciones sencillas y relaciones estereotipadas de inclusión (
<<include>>
) y extensión (
<<extend>>
) [cite: 8, 10]. Sin embargo, la verdadera profundidad del modelado reside en la especificación textual detallada o formato "completamente vestido" [cite: 4, 9, 10]. A continuación se detalla la plantilla clásica oficial exigida por la cátedra para la descripción exhaustiva de casos de uso.
Campo de Plantilla
Definición Semántica de Cátedra
Ejemplo de Aplicación Práctica
Identificador
Código único de control jerárquico para el seguimiento del requisito [cite: 19].
CU-04
 [cite: 19].
Nombre Descriptivo
Frase verbal activa que representa el objetivo del actor principal [cite: 9, 19].
Procesar Pedido de Compra
 [cite: 9].
Descripción
Resumen corto del propósito del caso de uso, detallando quién lo inicia y qué obtiene [cite: 19].
El cliente confirma los artículos del carrito para realizar el pago electrónico y registrar el pedido en el inventario [cite: 7, 19].
Actores
Clasificación de actores involucrados: principales (inician) y secundarios (sistemas externos) [cite: 8, 19].
Principal: Cliente de Compras. Secundarios: Pasarela de Pagos, Sistema de Inventario [cite: 7, 8, 19].
Precondiciones
Estado del entorno requerido antes de iniciar la ejecución del flujo [cite: 4, 5, 19].
El usuario debe estar autenticado en su cuenta y tener al menos un artículo válido en su carrito de compras [cite: 7, 19].
Postcondiciones
Estado de éxito garantizado por el sistema al finalizar correctamente la interacción [cite: 5, 19].
El pedido se registra como pagado, se reduce el stock en el inventario y se envía un comprobante de pago al cliente [cite: 5, 7, 19].
Secuencia Normal
Flujo paso a paso de las interacciones ideales entre el actor y el sistema (happy path) [cite: 10, 19].
1. El cliente solicita finalizar la compra.
<br>
2. El sistema muestra el resumen de la orden.
<br>
3. El cliente ingresa la tarjeta y confirma.
<br>
4. El sistema procesa el pago con la pasarela.
<br>
5. El sistema confirma la transacción al usuario [cite: 5, 7, 19].
Flujos Alternativos
Variaciones de comportamiento exitosas basadas en decisiones válidas [cite: 19].
3.1. Si el cliente selecciona pago con transferencia, el sistema genera el código de barra y el flujo continúa con éxito condicional [cite: 19].
Excepciones
Comportamientos correctivos ante fallos del sistema o validaciones de negocio erróneas [cite: 7, 19].
4.a. Si la pasarela de pagos rechaza la transacción por fondos insuficientes, el sistema debe notificar el error y regresar al paso 2 [cite: 7, 19].
Rendimiento
Restricciones de tiempo asociadas a pasos específicos del flujo [cite: 19].
El sistema de procesamiento de pagos debe validar la transacción en un máximo de 
 en el paso 4 [cite: 18, 19].
Frecuencia
Estimación del volumen de uso esperado para la planificación de infraestructura [cite: 19].
Se estima una media de 
 por hora durante el periodo de alta demanda estacional [cite: 19].
Importancia
Nivel de criticidad para los objetivos centrales del negocio [cite: 19].
Vital (bloqueante para el despliegue inicial del software) [cite: 9, 19].
Urgencia
Necesidad temporal de implementación en los ciclos de sprint de desarrollo [cite: 19].
Alta (debe completarse en la primera iteración de desarrollo activo) [cite: 19].

### Modelado de Dinámica de Sistemas mediante Máquinas de Estados UML 2.0

Para modelar de forma exhaustiva el comportamiento dinámico y reactivo de un objeto de software a lo largo de su ciclo de vida, la cátedra exige el uso de Diagramas de Máquinas de Estados bajo la especificación UML 2.0 [cite: 21, 22]. La máquina de estados describe la evolución de una única entidad de software en respuesta a estímulos externos, permitiendo mapear estados lógicos estables y controlando las transiciones bajo restricciones estrictas [cite: 21, 22, 23].
Una transición de estado se formaliza matemáticamente bajo el predicado:
Donde se establece que la transición desde un estado de origen activo 
 hacia un estado de destino 
 está condicionada por la ocurrencia de un evento desencadenante 
 (Trigger) y la evaluación de una guarda booleana 
 (Guard) sobre las variables del sistema 
 [cite: 21, 24, 25]. Si se cumplen ambas condiciones, se dispara la transición, ejecutándose la acción instantánea 
 (Action/Effect) antes de cambiar la activación al nuevo estado [cite: 24, 25, 26].
La validación semántica de este comportamiento reactivo se modela mediante la siguiente expresión lógica de primer orden:
Si la guarda se evalúa como falsa en el instante 
, la transición permanece deshabilitada y el evento se descarta sin alterar el estado del sistema ni ejecutar la acción asociada [cite: 24, 25].
La representación de estos componentes de comportamiento dinámico en diagramas de código de Lucidchart puede realizarse de manera eficiente utilizando la sintaxis normalizada de Mermaid o mediante el marcado PlantUML [cite: 27, 28, 29].
Elemento de Comportamiento
Concepto Teórico de Cátedra
Notación de Código en Mermaid
Notación de Código en PlantUML
Estado Inicial
Punto de entrada unívoco por defecto a la máquina de estados [cite: 21, 22].
[*] --> EstadoInicial
 [cite: 26, 30].
[*] --> EstadoInicial
 [cite: 21, 29].
Estado Simple
Condición estable donde el objeto espera un estímulo o realiza una actividad continua [cite: 21, 22].
state "Texto Descriptivo" as ID
 [cite: 26, 30].
state "Texto Descriptivo" as ID
 [cite: 21, 29].
Transición de Estado
Cambio de estado controlado desencadenado por un evento [cite: 21, 25].
Origen --> Destino : Trigger
 [cite: 30, 31].
Origen --> Destino : Trigger
 [cite: 21, 29].
Condición de Guarda
Expresión booleana que habilita o restringe el disparo de la transición [cite: 21, 24].
Origen --> Destino : Trigger [Guard]
 [cite: 26].
Origen --> Destino : Trigger [Guard]
 [cite: 24, 29].
Acción de Efecto
Comportamiento computable ejecutado durante la transición de estado [cite: 24, 25].
Origen --> Destino : Trigger / Action
 [cite: 26].
Origen --> Destino : Trigger / Action
 [cite: 24, 29].
Pseudoestado Choice
Bifurcación condicional dinámica con evaluación de guardas excluyentes [cite: 21, 30].
state DecisionID <<choice>>
 [cite: 30, 31].
state DecisionID <<choice>>
 [cite: 21, 29].
Estados Concurrentes
Regiones paralelas de comportamiento de estados autónomos [cite: 22, 23].
Separación lógica interna mediante el operador 
--
 [cite: 30].
Separación lógica interna mediante el operador `

### Diseño de Clases según las Reglas Académicas de Asignación de Responsabilidades

El Diagrama de Clases de Diseño (DCD) traduce el modelo de dominio en componentes estructurados de software [cite: 2, 32]. Siguiendo las directrices de Craig Larman, cada clase debe modelar explícitamente sus responsabilidades utilizando la notación estándar de tres compartimentos establecida por UML 2.0 [cite: 2, 32, 33].
El compartimento superior contiene el nombre de la clase, centrado y en negrita, con la inicial en mayúscula, acompañado de anotaciones de estereotipo (
<<Interface>>
, 
<<Abstract>>
, 
<<Service>>
) cuando corresponda [cite: 32, 33].
El compartimento medio contiene los atributos de la clase, alineados a la izquierda, indicando obligatoriamente su visibilidad y tipo de dato [cite: 32, 33].
El compartimento inferior define las operaciones o métodos ejecutables de la clase, indicando firmas completas con parámetros, tipos de datos y retornos explícitos [cite: 32, 33].
La visibilidad de los miembros debe cumplir de forma taxativa los estándares de seguridad y encapsulamiento de la programación orientada a objetos de la cátedra [cite: 32, 33]. Los atributos deben ser estrictamente privados para proteger el estado interno del objeto, exponiéndose únicamente a través de la interfaz pública de la clase [cite: 32, 33].
Carácter UML
Tipo de Visibilidad
Significado Semántico en la Cátedra
Ámbito de Acceso en Código
+
Pública
Permite el acceso libre a cualquier otra clase del sistema [cite: 32, 33].
Acceso global sin restricciones.
-
Privada
Restringe el acceso únicamente a los métodos internos de la propia clase [cite: 32, 33].
Encapsulado dentro del alcance de la clase.
#
Protegida
Permite el acceso a la propia clase y a todas sus subclases descendientes [cite: 17, 34].
Limitado a jerarquías de herencia.
~
Paquete
Permite el acceso únicamente a clases dentro del mismo paquete o namespace [cite: 32, 34].
Limitado al alcance del módulo de software.
La cátedra exige que los miembros de clase especiales utilicen la sintaxis nativa de UML 2.0 para su visualización [cite: 32]. Las variables y métodos estáticos se diferencian agregando el sufijo 
$
 en Mermaid o mediante el estereotipo 
{static}
 en diagramas formales de Lucidchart, mientras que los métodos abstractos se especifican con el sufijo 
*
 o 
{abstract}
 [cite: 32, 34, 35]. Las relaciones entre clases deben ser modeladas respetando de forma precisa la dirección y semántica de los conectores de asociación, herencia y composición [cite: 33, 35, 36].

### Arquitectura de Integración Visual de Lucidchart mediante el Servidor MCP

La automatización de la diagramación de software se implementa de manera nativa mediante el servidor del Protocolo de Contexto de Modelo (MCP) de Lucid, el cual actúa como una pasarela segura entre los modelos de lenguaje de gran tamaño (LLM) y la API REST de la suite de Lucidchart [cite: 11, 12, 37]. Este protocolo expone un conjunto de herramientas estructuradas de descubrimiento, lectura y creación de diagramas a las que el agente de inteligencia artificial puede acceder en tiempo real, operando con un flujo de autenticación seguro basado en OAuth 2.0 o claves API de desarrollador [cite: 11, 27, 38].
El servidor MCP de Lucid es compatible con cualquier cliente compatible con el protocolo y se encuentra localizado de manera remota en el endpoint unificado de comunicación [cite: 11, 38]:
A través de esta dirección de transporte por HTTP con flujo de datos (streamable), el agente de inteligencia artificial invoca de forma determinista operaciones de diagramación [cite: 11, 38].
Nombre de la Herramienta MCP
Parámetros Requeridos
Operación Técnica Ejecutada en Lucidchart
Tipo de Retorno
search-documents
keyword
 (string) [cite: 27]
Realiza búsquedas de documentos en el área de trabajo según palabras clave [cite: 27].
Lista de metadatos de documentos, IDs y URLs de edición [cite: 27, 37].
get-document
documentId
 (string), 
analyzeImage
 (boolean) [cite: 37]
Recupera la estructura lógica interna del diagrama u opcionalmente exporta la vista como PNG para visión por computadora [cite: 27, 37].
Esquema JSON o imagen codificada en formato base64 para interpretación directa de la IA [cite: 27, 37].
get-document-tabs
documentId
 (string) [cite: 37]
Consulta los metadatos de las pestañas activas del documento sin requerir la carga del peso del canvas [cite: 37].
Listado de identificadores y nombres de páginas del documento [cite: 37].
create-diagram
title
 (string), 
standardImportJson
 (string), 
product
 (string) [cite: 37]
Construye un nuevo diagrama nativo y editable utilizando el formato de importación estándar JSON de Lucid [cite: 27, 37].
URL de edición directa del documento generado [cite: 37].
Create UML Sequence Diagram
plantUmlMarkup
 (string) [cite: 27]
Genera un diagrama de secuencia de Lucidchart procesando marcas formales de PlantUML de forma automatizada [cite: 13, 27].
Documento de secuencia editable con formas vectoriales nativas en el lienzo [cite: 27, 29].
La creación de diagramas enriquecidos mediante 
create-diagram
 requiere que la inteligencia artificial construya el payload siguiendo de forma exacta la sintaxis del Standard Import JSON de Lucid [cite: 37]. Este formato exige la definición de un esquema JSON estructurado con un campo de versión obligatoria (
version
), un arreglo de páginas (
pages
) conteniendo formas lógicas (
shapes
), conectores lineales (
lines
) y propiedades opcionales de capas [cite: 37, 39].
El tamaño del archivo de definición 
document.json
 no debe exceder de 
 para evitar la degradación del rendimiento de renderizado en el navegador web del usuario final [cite: 39, 40]. Para diagramas más complejos que requieran la inclusión de librerías personalizadas, plantillas o imágenes asociadas a las formas, Lucidchart permite empaquetar la especificación comprimiendo el payload estructurado dentro de un archivo ZIP, el cual debe renombrarse con la extensión de archivo unificada 
.lucid
 [cite: 39, 41].
Alternativamente, el agente de modelado puede aprovechar la compatibilidad nativa de importación de código de Lucidchart para generar diagramas totalmente editables pegando sintaxis Mermaid directamente sobre el lienzo de trabajo, facilitando flujos ágiles de diseño sin requerir estructuraciones manuales de coordenadas de dibujo [cite: 42, 43].

### Guía de Estructuración de Skills para Agentes de Ingeniería de Software

La automatización exitosa del modelado de software por parte de un agente de inteligencia artificial no depende únicamente de la existencia de APIs, sino del diseño robusto de sus directrices de comportamiento lógico [cite: 44, 45]. Para ello, se deben configurar "skills" en el servidor MCP [cite: 46]. Estas skills actúan como plantillas de prompts de ingeniería parametrizadas y gobernadas por el usuario, determinando qué tipos de documentos deben crearse, cuál debe ser su estructura teórica y cómo coordinar la generación paso a paso de los artefactos de desarrollo [cite: 20, 46, 47].
El flujo de orquestación de la inteligencia artificial para construir la documentación técnica de un nuevo sistema de software debe seguir una secuencia determinista para evitar derivas conceptuales en tareas de larga duración [cite: 45, 48].
La skill inicial que se debe registrar en el servidor MCP tiene como objetivo instruir al modelo sobre cómo procesar una descripción vaga de negocio y determinar con exactitud el inventario de documentos técnicos requeridos para el proyecto.
Una vez que el plan de documentación ha sido aprobado por el ingeniero de software humano, el agente de IA utiliza la skill especializada de diagramación de clases para interactuar directamente con Lucidchart, convirtiendo las responsabilidades lógicas en clases físicas con atributos encapsulados y métodos consistentes.
El uso de estas plantillas de prompts de MCP proporciona una barrera de control semántico para la inteligencia artificial [cite: 47, 49]. Al guiar de manera explícita la estructura del resultado, se asegura de que el agente técnico de software no genere código de diagramación inválido, inconsistente o alejado de las convenciones pedagógicas que regulan la evaluación y auditoría de la calidad del software en la organización [cite: 20, 49].

### Conclusiones y Recomendaciones Operativas

La implementación de un sistema de desarrollo de software asistido por inteligencia artificial que automatice la diagramación y documentación técnica exige un equilibrio riguroso entre la potencia tecnológica y la consistencia teórica. El análisis metodológico del modelado UML 2.0 y la integración de herramientas de colaboración visual mediante el Protocolo de Contexto de Modelo (MCP) permiten consolidar las siguientes conclusiones técnicas y recomendaciones de despliegue operacional:
Sustitución de Modelos Manuales:
 La adopción del servidor MCP de Lucidchart elimina el cuello de botella tradicional de la diagramación manual de software, permitiendo que la inteligencia artificial actúe directamente sobre el lienzo colaborativo, asegurando que los planos visuales se actualicen de manera consistente en consonancia con la evolución del código fuente de la aplicación [cite: 12, 20, 50].
Gobernanza del Diseño:
 El diseño de "skills" y plantillas estructuradas de prompts en el servidor MCP es un requisito indispensable para mitigar las desviaciones conceptuales y las alucinaciones de los modelos de lenguaje [cite: 46, 47, 49]. Estas skills actúan como restrictores lógicos que garantizan que el contenido producido cumpla estrictamente con las directrices académicas de análisis y diseño [cite: 20, 47].
Trazabilidad de Requisitos:
 La correspondencia directa entre los casos de uso documentados bajo la plantilla "completamente vestida" de Cockburn y Larman, los requisitos específicos de la norma IEEE 830, y las clases de implementación del DCD permite mantener una trazabilidad técnica de extremo a extremo, facilitando las fases de auditoría de código, diseño de casos de prueba y mantenimiento del ciclo de vida del software [cite: 6, 8, 9].
Estandarización de Transiciones:
 En sistemas con alta complejidad interactiva, el modelado dinámico mediante diagramas de máquina de estados de UML 2.0 debe seguir la rigurosa nomenclatura transaccional de cátedra 
 para evitar fallos de comportamiento lógico en entornos reactivos, aprovechando la versatilidad de Lucidchart para renderizar sintaxis Mermaid y PlantUML de forma editable [cite: 24, 29, 43].
Entornos de Simulación Seguros:
 Se recomienda establecer entornos de prueba o espacios de trabajo aislados (workspaces) dedicados para que los agentes MCP operen de manera segura, reduciendo los riesgos asociados con la edición o alteración imprevista de la documentación maestra de arquitectura de la organización [cite: 44, 51].
--------------------------------------------------------------------------------
1
.
Diagramas de casos de uso | Ingenieria en Software, 
[https://ingenieriaensoftwarenathalyalava.wordpress.com/2015/06/01/diagramas-de-casos-de-uso/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fingenieriaensoftwarenathalyalava.wordpress.com%2F2015%2F06%2F01%2Fdiagramas-de-casos-de-uso%2F)
https://ingenieriaensoftwarenathalyalava.wordpress.com/2015/06/01/diagramas-de-casos-de-uso/
2
.
Diseño de Software guiado por Casos de Uso. Aplicación práctica basada en un proceso de enseñanza-aprendizaje propuesto - 43 jaiio, 
[https://43jaiio.sadio.org.ar/proceedings/ASSE/01-08-899-2533-1-DR.pdf](https://www.google.com/url?sa=E&q=https%3A%2F%2F43jaiio.sadio.org.ar%2Fproceedings%2FASSE%2F01-08-899-2533-1-DR.pdf)
https://43jaiio.sadio.org.ar/proceedings/ASSE/01-08-899-2533-1-DR.pdf
3
.
Plantilla de casos de uso - La Oficina de Proyectos de Informática - PMOInformatica, 
[https://www.pmoinformatica.com/2014/07/plantilla-de-casos-de-uso.html](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.pmoinformatica.com%2F2014%2F07%2Fplantilla-de-casos-de-uso.html)
https://www.pmoinformatica.com/2014/07/plantilla-de-casos-de-uso.html
4
.
Diagramas de casos de uso. Para qué sirven y cómo hacerlos correctamente. - Medium, 
[https://medium.com/@g1tbl4nc/diagramas-de-casos-de-uso-para-qu%C3%A9-sirven-y-c%C3%B3mo-hacerlos-correctamente-ce62722bf4ce](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmedium.com%2F%40g1tbl4nc%2Fdiagramas-de-casos-de-uso-para-qu%25C3%25A9-sirven-y-c%25C3%25B3mo-hacerlos-correctamente-ce62722bf4ce)
https://medium.com/@g1tbl4nc/diagramas-de-casos-de-uso-para-qu%C3%A9-sirven-y-c%C3%B3mo-hacerlos-correctamente-ce62722bf4ce
5
.
Una guía completa sobre el modelado de casos de uso - Visual Paradigm Guides Spanish, 
[https://guides.visual-paradigm.com/es/a-comprehensive-guide-to-use-case-modeling/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fguides.visual-paradigm.com%2Fes%2Fa-comprehensive-guide-to-use-case-modeling%2F)
https://guides.visual-paradigm.com/es/a-comprehensive-guide-to-use-case-modeling/
6
.
Plantillas de Diagrama de Caso de Uso para Análisis de Sistemas Efectivo | Miro, 
[https://miro.com/es/plantillas/diagrama-de-caso-de-uso/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmiro.com%2Fes%2Fplantillas%2Fdiagrama-de-caso-de-uso%2F)
https://miro.com/es/plantillas/diagrama-de-caso-de-uso/
7
.
Qué es un caso de uso y cómo redactarlo - Wrike, 
[https://www.wrike.com/es/blog/que-es-un-caso-de-uso/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.wrike.com%2Fes%2Fblog%2Fque-es-un-caso-de-uso%2F)
https://www.wrike.com/es/blog/que-es-un-caso-de-uso/
8
.
Como usar diagramas de casos de uso con ejemplos - Canva, 
[https://www.canva.com/es_mx/pizarra-digital/diagrama-caso-de-uso/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.canva.com%2Fes_mx%2Fpizarra-digital%2Fdiagrama-caso-de-uso%2F)
https://www.canva.com/es_mx/pizarra-digital/diagrama-caso-de-uso/
9
.
El enfoque de casos de uso: una guía completa para capturar los requisitos funcionales en la ingeniería de software - Cybermedian, 
[https://www.cybermedian.com/es/the-use-case-approach-a-comprehensive-guide-to-capturing-functional-requirements-in-software-engineering/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.cybermedian.com%2Fes%2Fthe-use-case-approach-a-comprehensive-guide-to-capturing-functional-requirements-in-software-engineering%2F)
https://www.cybermedian.com/es/the-use-case-approach-a-comprehensive-guide-to-capturing-functional-requirements-in-software-engineering/
10
.
Casos de uso y diagramas de casos de uso | 1/26 | UPV - YouTube, 
[https://www.youtube.com/watch?v=iFcDoP6jEeE](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiFcDoP6jEeE)
https://www.youtube.com/watch?v=iFcDoP6jEeE
11
.
Integrate Lucid with AI tools using the Lucid MCP server, 
[https://help.lucid.co/hc/en-us/articles/42578801807508-Integrate-Lucid-with-AI-tools-using-the-Lucid-MCP-server](https://www.google.com/url?sa=E&q=https%3A%2F%2Fhelp.lucid.co%2Fhc%2Fen-us%2Farticles%2F42578801807508-Integrate-Lucid-with-AI-tools-using-the-Lucid-MCP-server)
https://help.lucid.co/hc/en-us/articles/42578801807508-Integrate-Lucid-with-AI-tools-using-the-Lucid-MCP-server
12
.
Lucid MCP server: Connect the visual power of Lucid with your AI tools, 
[https://lucid.co/blog/lucid-mcp-server](https://www.google.com/url?sa=E&q=https%3A%2F%2Flucid.co%2Fblog%2Flucid-mcp-server)
https://lucid.co/blog/lucid-mcp-server
13
.
Introducing the Lucid Model Context Protocol (MCP) server | Community, 
[https://community.lucid.co/community-news-and-announcements-9/introducing-the-lucid-model-context-protocol-mcp-server-12230](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcommunity.lucid.co%2Fcommunity-news-and-announcements-9%2Fintroducing-the-lucid-model-context-protocol-mcp-server-12230)
https://community.lucid.co/community-news-and-announcements-9/introducing-the-lucid-model-context-protocol-mcp-server-12230
14
.
Plantilla formato ieee830 | DOC - Slideshare, 
[https://es.slideshare.net/slideshow/plantilla-formato-ieee830/231060689](https://www.google.com/url?sa=E&q=https%3A%2F%2Fes.slideshare.net%2Fslideshow%2Fplantilla-formato-ieee830%2F231060689)
https://es.slideshare.net/slideshow/plantilla-formato-ieee830/231060689
15
.
NORMA IEEE830 - Especificacion de Requerimientos de Software - YouTube, 
[https://www.youtube.com/watch?v=ZUVDkSXRt5I](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZUVDkSXRt5I)
https://www.youtube.com/watch?v=ZUVDkSXRt5I
16
.
Aplicación del estándar IEEE 830 Parte 1 - YouTube, 
[https://www.youtube.com/watch?v=4q2yBHjceLQ](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4q2yBHjceLQ)
https://www.youtube.com/watch?v=4q2yBHjceLQ
17
.
Formato de documentacion ieee 830 | DOCX - Slideshare, 
[https://es.slideshare.net/slideshow/formato-de-documentacion-ieee-830/12085267](https://www.google.com/url?sa=E&q=https%3A%2F%2Fes.slideshare.net%2Fslideshow%2Fformato-de-documentacion-ieee-830%2F12085267)
https://es.slideshare.net/slideshow/formato-de-documentacion-ieee-830/12085267
18
.
¿Qué son los requisitos no funcionales? Tipos, ejemplos y enfoques - Visure Solutions, 
[https://visuresolutions.com/es/alm-guide/non-functional-requirements/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvisuresolutions.com%2Fes%2Falm-guide%2Fnon-functional-requirements%2F)
https://visuresolutions.com/es/alm-guide/non-functional-requirements/
19
.
Plantilla de Descripción de Caso de Uso - Google Docs, 
[https://docs.google.com/document/d/1_ojY17kZOzU0u8P1t1kQjD5Bqp97H4EP2duA4TotYMc/edit?usp=sharing](https://www.google.com/url?sa=E&q=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1_ojY17kZOzU0u8P1t1kQjD5Bqp97H4EP2duA4TotYMc%2Fedit%3Fusp%3Dsharing)
https://docs.google.com/document/d/1_ojY17kZOzU0u8P1t1kQjD5Bqp97H4EP2duA4TotYMc/edit?usp=sharing
20
.
Ingeniería Agéntica: La guía completa para el desarrollo… - NxCode, 
[https://www.nxcode.io/es/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.nxcode.io%2Fes%2Fresources%2Fnews%2Fagentic-engineering-complete-guide-vibe-coding-ai-agents-2026)
https://www.nxcode.io/es/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026
21
.
State Machine Diagram - UML 2 Tutorial - Sparx Systems, 
[https://sparxsystems.com/resources/tutorials/uml2/state-diagram.html](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsparxsystems.com%2Fresources%2Ftutorials%2Fuml2%2Fstate-diagram.html)
https://sparxsystems.com/resources/tutorials/uml2/state-diagram.html
22
.
Mermaid State Diagram Guide: Model System Behavior with Code - Mermaid2Img Blog, 
[https://mermaid2img.com/blog/mermaid-state-diagram-guide](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmermaid2img.com%2Fblog%2Fmermaid-state-diagram-guide)
https://mermaid2img.com/blog/mermaid-state-diagram-guide
23
.
State Machine DNA, 
[https://cage.ugent.be/~bdeleeuw/researchSCDNA.html](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcage.ugent.be%2F~bdeleeuw%2FresearchSCDNA.html)
https://cage.ugent.be/~bdeleeuw/researchSCDNA.html
24
.
Transitions in UML state charts: better to use triggers or guards? - Stack Overflow, 
[https://stackoverflow.com/questions/29993065/transitions-in-uml-state-charts-better-to-use-triggers-or-guards](https://www.google.com/url?sa=E&q=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F29993065%2Ftransitions-in-uml-state-charts-better-to-use-triggers-or-guards)
https://stackoverflow.com/questions/29993065/transitions-in-uml-state-charts-better-to-use-triggers-or-guards
25
.
Triggers and Transitions | Enterprise Architect User Guide - Sparx Systems, 
[https://sparxsystems.com/enterprise_architect_user_guide/17.1/guide_books/triggers_and_transtns.html](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsparxsystems.com%2Fenterprise_architect_user_guide%2F17.1%2Fguide_books%2Ftriggers_and_transtns.html)
https://sparxsystems.com/enterprise_architect_user_guide/17.1/guide_books/triggers_and_transtns.html
26
.
Designing State Diagrams with Mermaid - Grasp, 
[https://paths.grasp.study/modules/02dd77f8-ed86-4e6c-b13f-97aa19825123/lessons/d996f052-91e8-4164-ae21-937923c77243](https://www.google.com/url?sa=E&q=https%3A%2F%2Fpaths.grasp.study%2Fmodules%2F02dd77f8-ed86-4e6c-b13f-97aa19825123%2Flessons%2Fd996f052-91e8-4164-ae21-937923c77243)
https://paths.grasp.study/modules/02dd77f8-ed86-4e6c-b13f-97aa19825123/lessons/d996f052-91e8-4164-ae21-937923c77243
27
.
Lucid MCP Server - Connectors - Microsoft Learn, 
[https://learn.microsoft.com/en-us/connectors/lucidmcpserver/](https://www.google.com/url?sa=E&q=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fconnectors%2Flucidmcpserver%2F)
https://learn.microsoft.com/en-us/connectors/lucidmcpserver/
28
.
Diagram as code with Mermaid in Lucidchart - Lucid Help Center, 
[https://help.lucid.co/hc/en-us/articles/29549366940948-Diagram-as-code-with-Mermaid-in-Lucidchart](https://www.google.com/url?sa=E&q=https%3A%2F%2Fhelp.lucid.co%2Fhc%2Fen-us%2Farticles%2F29549366940948-Diagram-as-code-with-Mermaid-in-Lucidchart)
https://help.lucid.co/hc/en-us/articles/29549366940948-Diagram-as-code-with-Mermaid-in-Lucidchart
29
.
How To Insert PlantUML In Lucidchart (Easy Step-By-Step Guide) - YouTube, 
[https://www.youtube.com/watch?v=VDBWpy3gDTI](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVDBWpy3gDTI)
https://www.youtube.com/watch?v=VDBWpy3gDTI
30
.
State Diagram - Mermaid Flow, 
[https://www.mermaidflow.app/docs/syntax/state-diagram](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.mermaidflow.app%2Fdocs%2Fsyntax%2Fstate-diagram)
https://www.mermaidflow.app/docs/syntax/state-diagram
31
.
State Diagram - Mermaid Studio, 
[https://mermaidstudio.dev/docs/diagram-types/state/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmermaidstudio.dev%2Fdocs%2Fdiagram-types%2Fstate%2F)
https://mermaidstudio.dev/docs/diagram-types/state/
32
.
Class diagrams | Mermaid, 
[https://mermaid.ai/open-source/syntax/classDiagram.html](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmermaid.ai%2Fopen-source%2Fsyntax%2FclassDiagram.html)
https://mermaid.ai/open-source/syntax/classDiagram.html
33
.
mermaidjs.github.io/classDiagram.md at master · mermaidjs/mermaidjs.github.io · GitHub, 
[https://github.com/mermaidjs/mermaidjs.github.io/blob/master/classDiagram.md](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fmermaidjs%2Fmermaidjs.github.io%2Fblob%2Fmaster%2FclassDiagram.md)
https://github.com/mermaidjs/mermaidjs.github.io/blob/master/classDiagram.md
34
.
Mermaid vs PlantUML Class Diagrams for Formal UML Models - OnUML, 
[https://onuml.com/blog/mermaid-vs-plantuml-class-diagram](https://www.google.com/url?sa=E&q=https%3A%2F%2Fonuml.com%2Fblog%2Fmermaid-vs-plantuml-class-diagram)
https://onuml.com/blog/mermaid-vs-plantuml-class-diagram
35
.
Mermaid Class Diagram Syntax: 8 Relationships, Examples - MacMD Viewer, 
[https://macmdviewer.com/blog/mermaid-class-diagram-guide](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmacmdviewer.com%2Fblog%2Fmermaid-class-diagram-guide)
https://macmdviewer.com/blog/mermaid-class-diagram-guide
36
.
Mermaid.js Tutorial: Flowcharts, Sequence Diagrams & Syntax Guide (2026) - Starmorph, 
[https://blog.starmorph.com/blog/mermaid-js-tutorial](https://www.google.com/url?sa=E&q=https%3A%2F%2Fblog.starmorph.com%2Fblog%2Fmermaid-js-tutorial)
https://blog.starmorph.com/blog/mermaid-js-tutorial
37
.
smartzan63/lucid-mcp-server - GitHub, 
[https://github.com/smartzan63/lucid-mcp-server](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fsmartzan63%2Flucid-mcp-server)
https://github.com/smartzan63/lucid-mcp-server
38
.
Lucid MCP Server - GitHub, 
[https://github.com/mcp/app.lucid.mcp/lucid](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fmcp%2Fapp.lucid.mcp%2Flucid)
https://github.com/mcp/app.lucid.mcp/lucid
39
.
Overview - Lucid Developer Documentation, 
[https://developer.lucid.co/v1.0/docs/overview-si](https://www.google.com/url?sa=E&q=https%3A%2F%2Fdeveloper.lucid.co%2Fv1.0%2Fdocs%2Foverview-si)
https://developer.lucid.co/v1.0/docs/overview-si
40
.
Lucid Standard Import (a.k.a. JSON Import) API FAQ | Community, 
[https://community.lucid.co/developer-community-6/lucid-standard-import-a-k-a-json-import-api-faq-5982](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcommunity.lucid.co%2Fdeveloper-community-6%2Flucid-standard-import-a-k-a-json-import-api-faq-5982)
https://community.lucid.co/developer-community-6/lucid-standard-import-a-k-a-json-import-api-faq-5982
41
.
New JSON Standard Import API - Lucid Community, 
[https://community.lucid.co/developer-community-6/new-json-standard-import-api-5658](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcommunity.lucid.co%2Fdeveloper-community-6%2Fnew-json-standard-import-api-5658)
https://community.lucid.co/developer-community-6/new-json-standard-import-api-5658
42
.
Copy/paste Mermaid syntax for editable diagrams - Lucid Community, 
[https://community.lucid.co/community-news-and-announcements-9/copy-paste-mermaid-syntax-for-editable-diagrams-13659](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcommunity.lucid.co%2Fcommunity-news-and-announcements-9%2Fcopy-paste-mermaid-syntax-for-editable-diagrams-13659)
https://community.lucid.co/community-news-and-announcements-9/copy-paste-mermaid-syntax-for-editable-diagrams-13659
43
.
Workarounds for creating editable diagrams with AI - Lucid Community, 
[https://community.lucid.co/inspiration-5/workarounds-for-creating-editable-diagrams-with-ai-13344](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcommunity.lucid.co%2Finspiration-5%2Fworkarounds-for-creating-editable-diagrams-with-ai-13344)
https://community.lucid.co/inspiration-5/workarounds-for-creating-editable-diagrams-with-ai-13344
44
.
KISS Sorcar: A Stupidly-Simple General-Purpose and Software Engineering AI Assistant, 
[https://arxiv.org/html/2604.23822v2](https://www.google.com/url?sa=E&q=https%3A%2F%2Farxiv.org%2Fhtml%2F2604.23822v2)
https://arxiv.org/html/2604.23822v2
45
.
keyuchen21/agentic-engineering-handbook: The definitive OpenAI, Claude, MCP, Harness, Evals, and Production Agent Systems learning roadmap. - GitHub, 
[https://github.com/keyuchen21/agentic-engineering-handbook](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fkeyuchen21%2Fagentic-engineering-handbook)
https://github.com/keyuchen21/agentic-engineering-handbook
46
.
“Building MCP Servers: Part 3 — Adding Prompts | by Christopher Strolia-Davis | Medium, 
[https://medium.com/@cstroliadavis/building-mcp-servers-13570f347c74](https://www.google.com/url?sa=E&q=https%3A%2F%2Fmedium.com%2F%40cstroliadavis%2Fbuilding-mcp-servers-13570f347c74)
https://medium.com/@cstroliadavis/building-mcp-servers-13570f347c74
47
.
MCP Prompts and Resources: The Primitives You're Not Using - DEV Community, 
[https://dev.to/aws-heroes/mcp-prompts-and-resources-the-primitives-youre-not-using-3oo1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fdev.to%2Faws-heroes%2Fmcp-prompts-and-resources-the-primitives-youre-not-using-3oo1)
https://dev.to/aws-heroes/mcp-prompts-and-resources-the-primitives-youre-not-using-3oo1
48
.
Tesleum/Claude-Agent - Ollama, 
[https://ollama.com/Tesleum/Claude-Agent:latest](https://www.google.com/url?sa=E&q=https%3A%2F%2Follama.com%2FTesleum%2FClaude-Agent%3Alatest)
https://ollama.com/Tesleum/Claude-Agent:latest
49
.
¿Qué es la Ingeniería Rápida? - Databricks, 
[https://www.databricks.com/es/blog/what-is-prompt-engineering](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.databricks.com%2Fes%2Fblog%2Fwhat-is-prompt-engineering)
https://www.databricks.com/es/blog/what-is-prompt-engineering
50
.
Lucid MCP for Github and VS Code Copilot, 
[https://lucid.co/marketplace/367fc988/lucid-mcp-for-github-and-vs-code-copilot](https://www.google.com/url?sa=E&q=https%3A%2F%2Flucid.co%2Fmarketplace%2F367fc988%2Flucid-mcp-for-github-and-vs-code-copilot)
https://lucid.co/marketplace/367fc988/lucid-mcp-for-github-and-vs-code-copilot
51
.
How to effectively use prompts, resources, and tools in MCP - Composio, 
[https://composio.dev/content/how-to-effectively-use-prompts-resources-and-tools-in-mcp](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcomposio.dev%2Fcontent%2Fhow-to-effectively-use-prompts-resources-and-tools-in-mcp)
https://composio.dev/content/how-to-effectively-use-prompts-resources-and-tools-in-mcp
