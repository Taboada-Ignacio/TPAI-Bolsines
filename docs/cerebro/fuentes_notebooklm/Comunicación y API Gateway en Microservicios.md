# Comunicación y API Gateway en Microservicios

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto detalla las 
reglas arquitectónicas para el diseño de microservicios
, centrándose en cómo estructurar la comunicación interna frente al tráfico externo. Explica que el 
API Gateway actúa exclusivamente como puerta de entrada para los clientes externos
, mientras que la colaboración entre componentes internos se realiza de forma directa mediante 
interfaces requeridas y provistas
. Asimismo, enfatiza que las interfaces deben definirse según el 
propósito del negocio y no por el canal tecnológico o la cantidad de destinatarios
, evitando así duplicaciones innecesarias de código. Finalmente, recalca que los 
servicios de dominio genérico centralizan las capacidades de notificación
, obligando a que los contratos de diseño reflejen claramente el flujo funcional específico que los origina.
Timestamp
: 2026-09-25 23:01:54
User
:
Chat, necesito que me ayudes a entender cómo es la comunicación en la vista de diseño detallada en microservicios, porque cómo es el tema de la interfaz provista y la interfaz requerida con referencia a los API Gateway, por ejemplo, ¿por qué no se hace directamente por medio del API Gateway eh las notificaciones email eh y se tienen que poner interfaces requeridas de microservicios? Por ejemplo, yo estoy en la aplicación de reclamos en la arquitectura de microservicios y yo tengo y enviador notificaciones push o y integración y enviador mail API Rest eh del servicio de eventos y cliente. ¿Por qué no lo hace directamente a través de la del API Gateway como, por ejemplo, se hace en el inicio de sesión con la autenticación de usuario?
Gemini
:
La diferencia en el modelado responde al propósito de cada componente y al rol del 
API Gateway
 frente a la comunicación interna entre microservicios:
--------------------------------------------------------------------------------

#### 1. El rol del API Gateway: Tráfico Externo vs. Tráfico Interno

Punto de entrada único (Norte-Sur):
 El API Gateway está diseñado exclusivamente como la puerta de acceso para los clientes externos (App Móvil, Web) hacia el backend[cite: 2]. Por eso, acciones como el inicio de sesión o consultar datos entran desde la app hacia el API Gateway[cite: 2].
No contiene lógica interna ni orquestación:
 El API Gateway rutea solicitudes o realiza composición de respuestas de cara al cliente, pero se abstiene de albergar lógica interna del dominio de negocio[cite: 2].
El envío de mails/push es tráfico Este-Oeste (entre servicios):
 El usuario final no presiona un botón para "enviar un mail directamente a un servidor SMTP". El usuario realiza una acción funcional en el dominio (por ejemplo, registrar o resolver un reclamo/evento)[cite: 9]. Es el microservicio de negocio (
Reclamos
 o 
Eventos
) el que decide, tras procesar sus reglas, que corresponde disparar una notificación[cite: 9].
--------------------------------------------------------------------------------

#### 2. ¿Por qué no pasa por el API Gateway?

Si el microservicio de 
Reclamos/Eventos
 llamara al API Gateway para que este llame al microservicio de 
Notificaciones
, se generaría un salto de red innecesario, latencia adicional e inversión indebida de dependencias[cite: 2]. Los microservicios colaboran entre sí directamente mediante sus propias APIs[cite: 2, 5].
--------------------------------------------------------------------------------

#### 3. Reglas de Interfaz Provista y Requerida en la Vista de Diseño

Siguiendo las convenciones de modelado de la cátedra:
Servicios de dominio genéricos proveen la interfaz:
 Microservicios como el de 
Notificaciones
 ofrecen capacidades compartidas (enviar mail, enviar push)[cite: 1, 3, 5]. Por lo tanto, el componente de integración/envío de notificaciones expone una 
interfaz provista
 (el "lollipop" o círculo)[cite: 1].
Servicios de negocio requieren la interfaz:
 El microservicio que origina la acción (
Reclamos
 o 
Eventos
) necesita ese servicio para completar su proceso[cite: 1, 9]. Por ello, contiene la 
interfaz requerida
 (el semicírculo/socket)[cite: 1].
En el API Gateway:
 En las convenciones de la materia, las interfaces de comunicación en los gateways se modelan como 
requeridas
 hacia los microservicios que consumen, mientras que los servicios internos tienen las interfaces 
provistas
 que el gateway invoca al enrutar[cite: 1].
El inicio de sesión pasa por el API Gateway porque la solicitud proviene del cliente externo (la app)[cite: 2], mientras que el envío de emails o notificaciones push es una interacción de servicio a servicio generada internamente por la lógica de negocio, conectándose directamente mediante interfaz requerida y provista[cite: 1, 2].
Timestamp
: 2026-09-25 23:06:15
User
:
Y por qué, por ejemplo, en el otro ejemplo que tenemos de audiolibros, nosotros hacemos eh el tema de las notificaciones distinguidas en el microservicio de audiolibros, de microservicios. El servicio biblioteca suscriptor usa muchas requeridas y usa muchas propuestas para hacer distintas acciones. ¿Por qué no usa eh las dos que tenemos puestas nosotros, que es de una para que sea una para que la use los microservicios y una para la pide gateway para el tema de la integración con el servicio de correo? Eh, ¿por qué en esta vista se hace la distinción entre las interfaces requeridas, como por ejemplo, notificación mail info de compra y notificación mail info de pago?
Gemini
:
La distinción entre interfaces como 
InfoCompra
, 
InfoPago
 e 
InfoDevolucion
 en lugar de una única interfaz genérica responde a las reglas de modelado arquitectónico de la cátedra:
--------------------------------------------------------------------------------

#### 1. El principio de diseño: interfaces "por propósito" y cohesión

Diseño orientado a la intención:
 Las interfaces se definen 
por propósito de negocio
 y no por el canal tecnológico[cite: 7].
Distintos datos y contratos:
Al notificar una compra (
InfoCompra
), se transfieren datos del libro adquirido, el precio o el consumo de créditos[cite: 1, 4].
Al registrar un pago (
InfoPago
), intervienen datos de facturación, tarjeta y membresía[cite: 1, 4].
Al devolver un libro (
InfoDevolucion
), se remiten motivos, libro reintegrado y devolución de créditos[cite: 1, 4].
Evitar interfaces genéricas:
 Si se utilizara una única interfaz para todo, se caería en una interfaz "monolítica" o sobrecargada, violentando el principio de segregación de interfaces (
Interface Segregation Principle
), que busca que un consumidor no dependa de métodos o datos que no utiliza[cite: 7].
--------------------------------------------------------------------------------

#### 2. Regla de coincidencia de nombres (Lollipop y Socket)

Según las 
Convenciones de Modelado de la cátedra
:
"Al modelar con interfaces expuestas debe coincidir el nombre de la interfaz provista con el de la interfaz requerida..."
[cite: 2].
Por lo tanto, si el componente emisor (por ejemplo, 
CompraAudiolibro
 dentro de 
Gestión de Biblioteca
) necesita disparar la notificación de compra, declara la interfaz requerida 
InfoCompra
[cite: 4].
El subsistema/microservicio de notificaciones expone esa misma interfaz provista con idéntico nombre (
InfoCompra
), permitiendo que el diagrama exprese explícitamente qué flujo de negocio atiende cada conexión[cite: 2, 4].
--------------------------------------------------------------------------------

#### 3. El rol del API Gateway y por qué no reemplaza estas interfaces

El API Gateway no es un bus de orquestación interna:
 En las convenciones de la cátedra, los API Gateways (Web, Mobile o Público) resuelven la entrada desde los clientes externos hacia el sistema, o la salida hacia servicios externos (como el 
ServidorDeCorreo
 o pasarelas de cobro a través del 
PublicAPIGateway
)[cite: 1, 2].
Servicio interno a servicio interno:
 La comunicación de negocio entre microservicios del producto ocurre entre ellos[cite: 2]. La cátedra establece la regla de que los 
servicios de dominio genérico
 (como 
Notificaciones
) son los que ofrecen las interfaces provistas, y los servicios de dominio que los necesitan ubican las interfaces requeridas[cite: 2].
El microservicio de Notificaciones es el encargado de interactuar con el servidor de correo a través del gateway público[cite: 1, 2]. Sin embargo, de cara a los servicios core (
Biblioteca
, 
Membresías
), Notificaciones expone contratos específicos (
InfoCompra
, 
InfoPago
, 
InfoDevolucion
) para recibir exactamente el contexto y la información de la operación realizada[cite: 4].
Timestamp
: 2026-09-25 23:07:58
User
:
Y bueno, siguiendo esto que vos me decís, en la aplicación de app de reclamos de microservicios, no tendríamos que tener un notificador push para individual y otro notificador push para masivos o o viceversa, el de los de los mails, no tendría que tener uno para el mail masivo y uno para el mail individual.
Gemini
:
En el modelado arquitectónico de la cátedra para la 
App de Reclamos
, la distinción no se basa en crear componentes separados por cantidad de destinatarios ("individual" vs. "masivo"), sino en el 
propósito de negocio del caso de uso
 y en la 
tecnología de entrega
:
--------------------------------------------------------------------------------

#### 1. El alcance de la notificación depende de la regla del caso de uso

Notificaciones Push (Masivas por Zona):
 El enunciado y el diseño establecen que las notificaciones push nacen a partir de dibujar una zona en el mapa o agrupar reclamos para impactar a un conjunto de clientes afectados por un evento[cite: 3, 6]. La lista de destinatarios o el criterio de agrupación lo calcula el microservicio de negocio (
Reclamos
 o 
Eventos
)[cite: 3].
Notificaciones por Mail (Eventos o Reclamos puntuales):
 El envío de correo responde a hitos funcionales (por ejemplo, recepción de reclamo, cambio de estado, asignación) dirigidos al cliente del reclamo[cite: 1, 3].
La cantidad de destinatarios (un 
ID_Cliente
 o una lista de 
IDs_Cliente
) es simplemente un parámetro del contrato de datos de la interfaz, no un motivo para duplicar el microservicio o el componente ejecutor.
--------------------------------------------------------------------------------

#### 2. Por qué no se separa el componente "enviador" en individual y masivo

Responsabilidad Única Técnica:
 El componente que envía push (
EnviadorNotificacionesPush
) o el que envía mails (
EnviadorMail
) tiene una sola responsabilidad técnica: encapsular la integración con el proveedor externo (el servicio de mensajería push o el servidor Exchange)[cite: 3].
Reutilización:
 Si se duplicara el enviador en "individual" y "masivo", ambos componentes tendrían exactamente el mismo código de integración con el servicio externo, violando la cohesión y generando duplicación innecesaria.
Manejo en lote (
Batch
):
 Un único enviador puede recibir tanto una solicitud puntual como una colección de destinatarios para procesar.
--------------------------------------------------------------------------------

#### 3. Cómo se refleja esto en las interfaces requeridas y provistas

Siguiendo las convenciones de la cátedra, lo que sí debe reflejar claramente el caso de uso es la 
interfaz
 según la acción que dispara la comunicación[cite: 4]:
En el servicio de origen (quien requiere):
Si 
Gestión de Eventos
 necesita alertar a los afectados de una zona, expone una interfaz requerida orientada al caso de uso (por ejemplo, 
NotificarEventoZona
 o 
NotificarClientesAfectados
)[cite: 3, 4].
Si 
Gestión de Reclamos
 necesita avisar el cambio de estado a un usuario puntual, declara la interfaz requerida correspondiente (por ejemplo, 
NotificarCambioEstadoReclamo
)[cite: 1, 4].
En el servicio de notificaciones (quien provee):
Provee esas interfaces de negocio (
NotificarEventoZona
, 
NotificarCambioEstadoReclamo
) garantizando que coincidan nombre a nombre según la convención[cite: 4].
Internamente, delega en sus conectores/enviadores hacia la infraestructura externa (Exchange para mail, o el gateway de push)[cite: 3].
La separación no se hace creando enviadores distintos para uno o muchos destinatarios, sino manteniendo componentes de envío técnicos unificados por canal (Mail y Push) y diferenciando, a nivel de 
interfaces requeridas/provistas
, el evento funcional de negocio que detonó el mensaje[cite: 3, 4].
Timestamp
: 2026-09-25 23:09:48
User
:
Bueno, te pongo otro ejemplo. Nosotros cuando tenemos envío de notificaciones individuales eh no solamente por el seguimiento de de un evento, sino también por los trabajos de los eventos que se van haciendo. Y en en el servicio de eventos de clientes ya tenemos un enviador de notificaciones push y en servicio de resolución de eventos tenemos un enviador push, o sea, utiliza la misma interfaz para referirnos a cosas distintas.
Gemini
:
Tener un componente enviador en dos servicios distintos usando la misma interfaz para propósitos de negocio diferentes constituye un error conceptual respecto a las 
Convenciones de Modelado de la cátedra
[cite: 1]:
--------------------------------------------------------------------------------

#### 1. Duplicación innecesaria de componentes

Si tanto el servicio de 
Eventos de Clientes
 como el de 
Resolución de Eventos
 tienen embebido un componente enviador push propio, se produce una duplicación de código e infraestructura técnica.
En arquitectura de microservicios y según los criterios de diseño, el envío de notificaciones push hacia el servicio externo es una capacidad genérica o de soporte[cite: 1, 3].
La responsabilidad técnica de conectarse a la plataforma de push (Firebase/APNs) debe estar centralizada en un único microservicio/componente integrador de notificaciones, evitando repetir conectores push en cada microservicio de negocio[cite: 1].
--------------------------------------------------------------------------------

#### 2. Violación de la regla de coincidencia de nombres e intención

La convención de la materia establece:
"Al modelar con interfaces expuestas debe coincidir el nombre de la interfaz provista con el de la interfaz requerida..."
[cite: 1].
"Utilizar nombres descriptivos y coherentes... de modo que sea fácil entender su propósito y función"
[cite: 1].
El contrato debe reflejar el caso de uso:
 Si ambas interfaces se llaman igual (por ejemplo, 
IEnviarPush
), se está modelando una interfaz técnica genérica en lugar de una interfaz orientada al propósito funcional[cite: 1].
Diferente información transferida:
El 
seguimiento de un evento
 hacia el cliente maneja datos como ID de evento, estado del reclamo y mensaje al usuario.
El 
avance/trabajo de resolución
 maneja cuadrilla asignada, tareas técnicas realizadas o tiempos estimados de reparación.
Al tener datos y fines distintos, representan contratos diferentes[cite: 1].
--------------------------------------------------------------------------------

#### 3. Cómo debe quedar el modelado en la Vista de Diseño

Para alinearse con las pautas de diseño:
1
.
Un solo componente/servicio que provee:
 El subsistema de 
Notificaciones
 (o el componente integrador) es el único que contiene los lollipops (interfaces provistas)[cite: 1].
2
.
Interfaces explícitas por caso de uso:
El servicio de 
Eventos de Clientes
 expone una interfaz requerida: 
INotificacionSeguimientoEvento
 (o nombre afín al caso de uso)[cite: 1].
El servicio de 
Resolución de Eventos
 expone una interfaz requerida: 
INotificacionTrabajoEvento
 (o 
INotificacionAvanceResolucion
)[cite: 1].
3
.
Coincidencia socket-lollipop:
 El servicio de notificaciones expone como provistas exactamente esas dos interfaces con los mismos nombres, resolviendo internamente el envío push al cliente[cite: 1].
De esta forma, se mantiene el principio de baja dependencia y alta cohesión, garantizando que el diagrama exprese con claridad qué acción de negocio está desencadenando cada notificación[cite: 1, 5].
