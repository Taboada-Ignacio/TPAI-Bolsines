# Revisión del examen teórico

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto analiza la retroalimentación de un profesor o tutor sobre las respuestas de un examen parcial de arquitectura de software, abordando dos problemáticas de diseño fundamentales. En primer lugar, evalúa de forma positiva una solución basada en 
microservicios
, 
comunicación mediante broker
 y 
arquitectura hexagonal
 para organizar equipos independientes, descentralizar la creación de pedidos y aislar la lógica interna de los negocios. En segundo lugar, corrige el concepto erróneo de 
conflicto arquitectónico
, aclarando que no es una simple consecuencia de diseño, sino una 
pugna entre requerimientos contradictorios
 —como la urgencia comercial de una startup por salir al mercado frente a la exigencia técnica de alta disponibilidad—. Finalmente, valida la propuesta de utilizar un 
monolito modular evolutivo
 como estrategia intermedia y coherente para equilibrar la simplicidad inicial del negocio con la futura escalabilidad del sistema.
Timestamp
: 2026-09-26 14:54:57
User
:
Hola, chat, ¿cómo estás? Tengo preguntas del teórico de mi parcial para responder. Tenía situaciones problemáticas en las que me decían, tenía un equipo destinado a cada área del negocio, un equipo individual a cada área del negocio. Necesitamos que el módulo de servicio sea independiente y que los otros módulos interactúen de forma independiente cuando se crea un pedido. Y yo puse microservicios, broker y hexagonal como justificación.
Gemini
:
Tu propuesta de combinar 
Microservicios
, 
Broker
 y 
Arquitectura Hexagonal
 es sólida y coherente con el marco teórico de la materia, ya que aborda el problema desde tres niveles complementarios del diseño arquitectónico[cite: 3]:
--------------------------------------------------------------------------------

#### 1. Microservicios (Estilo de Descomposición / Macro-sistema)

Alineación con los equipos de trabajo:
 El enunciado plantea 
“un equipo destinado a cada área del negocio”
. Los microservicios están organizados por 
capacidades de negocio / dominios
 y resultan propicios para el desarrollo y evolución independiente a cargo de equipos pequeños[cite: 1, 3, 6].
Independencia funcional y de despliegue:
 Cada microservicio actúa como una unidad independiente, poco acoplada y con su propia base de datos o almacenamiento, asegurando que ninguna interdependencia obligue a desplegar varios servicios de forma simultánea[cite: 1, 3].
--------------------------------------------------------------------------------

#### 2. Broker (Estilo de Comunicación / Event-Driven Architecture)

Interacción desacoplada ante la creación del pedido:
 Para cumplir con que 
“los otros módulos interactúen de forma independiente cuando se crea un pedido”
, el patrón 
Broker
 (dentro de las arquitecturas guiadas por eventos o EDA) es la solución indicada[cite: 3].
Dinámica asíncrona:
 Cuando el módulo/servicio de pedidos crea un nuevo pedido, publica un evento en el Broker[cite: 3]. Los demás servicios (envíos, facturación, notificaciones, etc.) consumen dicho mensaje y reaccionan asíncronamente según su propia lógica, sin que el emisor conozca ni dependa directamente de ellos[cite: 2, 3].
--------------------------------------------------------------------------------

#### 3. Arquitectura Hexagonal (Estilo de Estructura Interna / Backend)

Aislamiento del núcleo de negocio:
 Aplica al diseño interno de cada microservicio[cite: 3]. Permite que la lógica de negocio permanezca pura e independiente de frameworks, bases de datos o clientes externos mediante 
Puertos y Adaptadores
[cite: 3].
Integración tecnológica limpia:
 La conexión con el Broker de mensajería se modela simplemente como un puerto de salida con su correspondiente adaptador de infraestructura (por ejemplo, un adaptador de colas/mensajería tipo RabbitMQ), garantizando que las modificaciones de infraestructura no alteren el dominio[cite: 3].
--------------------------------------------------------------------------------

#### Evaluación de la respuesta

Tu respuesta abarca integralmente el problema:
Microservicios
 resuelve la organización por equipos y la descomposición del macro-sistema[cite: 1, 3].
Broker
 resuelve el desacoplamiento en la comunicación ante eventos de negocio[cite: 3].
Hexagonal
 resuelve la independencia y calidad de la estructura interna del código[cite: 3].
Timestamp
: 2026-09-26 15:01:05
User
:
Hay otra pregunta que me preguntaron qué pingo era un conflicto arquitectónico. Yo puse que era la consecuencia de tomar una decisión arquitectónica. Nos dieron una situación problemática en la cual planteaba de que era una disponibilidad del 99%. Lo que quiero saber es si está bien mi definición de qué es una consecuencia de una decisión arquitectónica de tener una disponibilidad del 99%. Y nos daba también la información que era una startup. Por lo tanto, una startup está comenzando. Yo le dije de que tendría que hacer un monolito modular para después escalarlo a microservicios para cumplir con esto de la disponibilidad y justamente monolito modular para su fácil implementación y que después pueda recaudar clientes lo más rápido posible.
Gemini
:
Tu definición de 
conflicto arquitectónico
 fue conceptualmente imprecisa para el marco teórico de la materia: lo que describiste se acerca más a las 
consecuencias
 de un patrón o decisión de diseño (sus costos y beneficios)[cite: 2], mientras que un conflicto arquitectónico es la 
pugna o contraposición entre requerimientos
[cite: 1, 5].
--------------------------------------------------------------------------------

#### 1. ¿Qué es exactamente un Conflicto Arquitectónico?

En el marco de la cátedra (basado en Ian Sommerville y Len Bass), un 
conflicto arquitectónico
 ocurre cuando 
dos o más requerimientos (habitualmente no funcionales o atributos de calidad) o metas de negocio se contradicen entre sí
, de modo que satisfacer uno perjudica o degrada directamente al otro[cite: 1, 5].
Por esta razón, la teoría señala que 
"la priorización es engañosa dado que los requerimientos entran en conflicto entre sí"
[cite: 1]:
Desempeño vs. Mantenibilidad:
 Usar componentes de granularidad alta reduce la comunicación y mejora la performance, pero empeora la mantenibilidad del sistema[cite: 1].
Disponibilidad vs. Seguridad:
 Introducir datos y componentes redundantes mejora la disponibilidad, pero complica la consistencia y la seguridad[cite: 1].
Entrega rápida vs. Evolución:
 La necesidad del negocio de salir rápido a producción entra en conflicto directo con diseñar una estructura fácilmente extensible y mantenible a futuro[cite: 5].
--------------------------------------------------------------------------------

#### 2. El conflicto arquitectónico en el caso de la Startup

En el problema que te plantearon, el conflicto no era la disponibilidad en sí, sino el choque de intereses contrapuestos entre las metas del negocio y los atributos de calidad requeridos[cite: 1, 5]:
Tiempo al mercado / Presupuesto limitado (Startup):
 Necesidad de simplicidad técnica, desarrollo ágil, bajo costo operativo y salida rápida para captar clientes[cite: 3, 5].
Disponibilidad (99%):
 La teoría establece que 
"si la disponibilidad es crítica, debe diseñarse una arquitectura que incluya componentes redundantes de tal forma que puedan reemplazarse y actualizarse sin detener el sistema"
[cite: 1].
El conflicto:
 Lograr alta tolerancia a fallos y actualizaciones sin caída de servicio suele requerir mayor infraestructura, desacoplamiento y redundancia, lo cual choca frontalmente con la necesidad de una startup de mantener costos bajos y desarrollo simple[cite: 1, 3, 5].
--------------------------------------------------------------------------------

#### 3. Evaluación de tu propuesta: Monolito Modular evolutivo

Tu decisión de proponer un 
Monolito Modular con camino evolutivo a Microservicios
 está conceptualmente justificada por el material de la materia[cite: 3]:
Alineación con la Startup:
 El monolito modular ofrece menor complejidad operativa, no genera sobrecarga de red en las comunicaciones internas y acelera la velocidad de desarrollo al mantener un único repositorio y despliegue simple[cite: 3].
Camino de evolución:
 La teoría lo define como el 
"paso intermedio ideal hacia microservicios"
[cite: 3]. Al mantener los límites de negocio estrictos y encapsulados a nivel de código, permite extraer módulos a servicios independientes cuando el volumen de clientes y la necesidad de escalabilidad o despliegues autónomos realmente lo demanden[cite: 3].
El detalle de la Disponibilidad:
 El punto débil del monolito respecto a la disponibilidad es que, al ser una unidad de despliegue única, una falla no controlada o una actualización sin estrategia adecuada puede afectar al sistema completo[cite: 3]. No obstante, una disponibilidad del 99% (que tolera aproximadamente 7 horas de indisponibilidad mensual) se puede mitigar en un monolito modular implementando instancias redundantes balanceadas, sin necesidad de asumir de entrada la sobrecarga operacional de una arquitectura distribuida de microservicios[cite: 1, 3].
