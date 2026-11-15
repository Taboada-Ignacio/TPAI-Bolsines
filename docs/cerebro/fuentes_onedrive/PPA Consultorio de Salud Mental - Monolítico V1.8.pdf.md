# PPA Consultorio de Salud Mental - Monolítico V1.8.pdf

- **Ruta OneDrive:** `Casos Practicos\ppai 2 salud mental\PPA Consultorio de Salud Mental - Monolítico V1.8.pdf`
- **Páginas totales:** 30 (extraídas: 30)

---

## Página 1

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 1 de 31 
 
 
Proyecto Práctico de Aplicación (PPA) 
Nombre del Proyecto Práctico de Aplicación: Consultorio de Salud Mental 
Objetivo del Proyecto Práctico de Aplicación (PPA): 
 
El objetivo del proyecto es desarrollar el modelado de un software para un consultorio de salud mental, a partir de 
una descripción del dominio. Sólo se muestran algunos artefactos resultantes de los procesos de requerimientos, 
análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se 
construirá. 
Objetivos de la Asignatura con respecto al PPA:  
 
● Analizar el sistema de información con la perspectiva del paradigma de Orientación a Objetos. 
● Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura robusta 
del sistema. 
● Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución (Análisis 
y Diseño) a partir del Modelo de Requerimientos 
● Modelar la arquitectura del producto utilizando estilos/patrones arquitectónicos. 
● Resolver situaciones problemáticas del diseño con patrones de diseño. 
● Mapear diagramas de clases a BDR. 
● Analizar y modelar cambios en los requerimientos y su impacto en los modelos existentes. 
Contenidos de la Asignatura que se abordarán en el PPA: 
● Modelo de Requerimientos como punto de partida para el modelado de la solución. 
● Modelado del Comportamiento en el Análisis 
●  Patrones de Principios generales para asignar responsabilidades (GRASP). 
● Modelado de la Estructura en el Análisis 
● Diseño Arquitectónico – Estilos/ Patrones Arquitectónicos; Vistas Arquitectónicas 
● Diseño de la Estructura del software y del Comportamiento del Software utilizando patrones de diseño.

## Página 2

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 2 de 31 
 
 
Consigna asociada al Proyecto Práctico de Aplicación:  
1. Elabore para el caso de uso “Solicitar Turno” la realización de casos de uso de análisis aplicando patrones 
GRASP de análisis. 
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. 
b. Estructura con diagrama de clases. 
2. Elabore para el caso de uso “Registrar aceptación de solicitud de ausencia de profesional” la realización de 
casos de uso de análisis aplicando patrones GRASP de análisis. 
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. 
b. Estructura con diagrama de clases. 
3. Construya la máquina de estados de la clase Turno, utilizando un diagrama de máquina de estados. Especifique 
asociado a las transiciones: los métodos y cuando aplique, las condiciones de control. 
4. Identificar al menos 2 patrones arquitectónicos relevantes y construir una representación gráfica de los 
mismos.  
5. Utilizando un estilo arquitectónico monolítico, construir las siguientes vistas arquitectónicas, definiendo para 
cada vista el punto de vista asociado: 
○ Vista Arquitectónica de la funcionalidad. 
○ Vista Arquitectónica de Diseño: Componentes e Interfaces 
○ Vista Arquitectónica del Despliegue: Nodos y subsistemas principales 
6. Rediseña las realizaciones de casos de uso de análisis utilizando el patrón de diseño que considere adecuado 
para resolver los problemas de diseño descritos a continuación. Modele la vista de la estructura utilizando un 
diagrama de clases; la vista dinámica utilizando un diagrama de secuencia y el pseudocódigo o una explicación 
textual que muestre la implementación de los métodos involucrados: 
a. Realizar el rediseño necesario para crear una solución que flexibilice el modelo permitiendo informar 
a los pacientes vía correo y sms cuando se haya aceptado la ausencia de un profesional. 
b. Realizar el rediseño necesario para modelar una solución que resuelva en forma flexible el manejo del 
comportamiento variable del turno según la situación en la que se encuentre. Utilice el patrón State. 
 
Glosario: 
Término  Descripción 
Agenda de Profesional Es una diagramación que define para un mes los turnos disponibles de un profesional, 
que se genera a partir de la definición de horarios (días y rangos horarios para cada día 
en los que podrá atender), informados por cada profesional. 
Servicio reCHAPTCHA reCAPTCHA es un servicio de Google diseñado para proteger los sitios web contra 
actividades maliciosas o automatizadas, como el spam y los ataques de bots. El nombre 
"reCAPTCHA" proviene de "Completely Automated Public Turing test to tell Computers 
and Humans Apart" (Prueba de Turing pública completamente automatizada para 
diferenciar entre computadoras y humanos).

## Página 3

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 3 de 31 
 
 
Protocolo OAuth OAuth es un mecanismo que permite a una aplicación o servicio solicitar permiso al 
usuario para acceder a sus datos en otro servicio en línea (como Facebook, Google, 
Twitter, etc.) en nombre del usuario, sin que la aplicación tenga acceso a las credenciales 
de inicio de sesión del usuario. 
Certificado SSL (Secure 
Sockets Layer) 
Su función principal es cifrar los datos transmitidos entre el navegador del usuario y el 
servidor web, lo que garantiza que la información sensible, como contraseñas, números 
de tarjetas de crédito y otra información personal, se mantenga confidencial y segura 
durante la transmisión. 
Se instala este certificado SSL en el web server, subiéndolo en una carpeta en dicho 
servidor. Se suele subir con programas que automatizan este proceso. 
Web responsive El diseño web responsive (o adaptativo) es una técnica de desarrollo que permite que 
una sistema web ajuste automáticamente su contenido, estructura e imágenes según el 
tamaño de pantalla del dispositivo desde el cual se accede. Esto garantiza que el sitio sea 
legible y fácil de usar, ya sea en un smartphone, tablet, computadora de escritorio, 
notebook o televisor, eliminando la necesidad de crear versiones independientes para 
cada dispositivo. 
AP Actor Principal 
AS Actor Secundario 
SPA Significativo para la arquitectura 
N/A No aplica 
 
Descripción del Caso 
Los responsables de la gestión del consultorio de salud mental han requerido un sistema informático que permita 
llevar el registro de los psicólogos y psiquiatras que atienden en el consultorio y para cada uno administrar sus agendas 
(días y horarios) para la asignación de turnos para los pacientes.  
Profesionales 
De cada profesional se registra su nombre, apellido, teléfono, correo electrónico, tipo y número de documento y 
matrícula. Se registrará el servicio en el que atenderá psicología o psiquiatría. Un profesional trabaja en un solo servicio 
simultáneamente que puede cambiar. 
Agenda de Turnos 
Por cada profesional, se establece la definición de su agenda con la duración de los turnos, intervalo entre turnos para 
su descanso, los días de la semana que atenderá, su hora de inicio de atención y su hora de fin de atención. Para cada 
mes, se basa en esa definición para determinar la agenda del mes siguiente y se crean todos los turnos como libres 
inicialmente. Se puede usar la misma definición de horarios para varias agendas. Las agendas se generan respetando 
los horarios definidos. 
Antes de la generación de la agenda, cada profesional debe informar los días y/u horarios en los que no puedan asistir 
al consultorio, para inhabilitar los turnos que corresponden a ese periodo de tiempo. 
Las agendas y turnos del mes siguiente deben ya estar especificados, de manera que, a la tercera semana del mes en 
curso, se habilite la agenda del mes siguiente. De esta forma se permite a los pacientes que puedan solicitar turnos.

## Página 4

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 4 de 31 
 
 
Si luego de que la agenda esté generada, un profesional necesita unos días libres o unas horas de un día, puede pedirle 
al encargado de personal, con dos semanas de anticipación. 
El encargado de personal analiza el caso y si es autorizado, registra el rango permitido en que no estará presente el 
profesional para indicar los turnos afectados como no disponibles en caso de que estén libres. Si hubieran turnos que 
estaban solicitados, deberán cancelarse. 
Ahora bien, en una situación de urgencia como enfermedad o situaciones de familia de último momento, se pueden 
cancelar turnos que han sido solicitados u ocupados siempre y cuando el paciente no esté presente. Si fuera el caso 
de que por fuerza mayor el profesional no puede asistir y el paciente está en el consultorio, se lo derivará a otro 
profesional lo que no afectará la situación del turno y la atención del paciente. 
Turnos 
Para la solicitud de turnos, el paciente puede comunicarse por teléfono o WhatsApp con la secretaria o pedirlo 
directamente por la página web. Si es por este último medio, deberá estar registrado el paciente con sus datos: 
Nombre, apellido, correo electrónico, teléfono y obra social si posee. Una vez ingresado, podrá solicitar el turno por 
dos caminos: Puede comenzar eligiendo el profesional por apellido o seleccionando el servicio. Una vez seleccionado, 
el usuario elige el día y horario de un turno de todos los que se tienen disponibles y finaliza con la confirmación de la 
solicitud del turno y el envío de un e-mail con los datos del turno otorgado. 
Tres días antes del turno se envía un correo al paciente para recordarle los detalles del turno y solicitarle la 
confirmación o no asistencia al turno. Si confirma, el turno se registra como ocupado. Si indica que no podrá asistir el 
turno se libera, quedando disponible nuevamente. Si no realiza ninguna acción el turno no cambia su situación hasta 
el día del turno, donde se registra como ocupado. El paciente puede liberar el turno hasta antes de confirmar, en ese 
caso el turno quedará disponible. 
El correo que se envía debe de tener un encabezado con el logo del consultorio y el nombre en forma de imagen y 
como pie del correo, los datos de contacto del consultorio. 
Cuando el paciente asiste al turno le indica a la secretaría su nombre y apellido o muestra su QR para que sea 
escaneado con un lector y automáticamente se marque su asistencia. Para ello, se deberá validar que sea el día y el 
horario del turno para registrar dicha asistencia. En caso contrario, cuando se haya escaneado el QR se avisará a la 
secretaria por un mensaje en pantalla que no corresponde el día y/u horario del turno que indica el código QR. 
Es esencial marcar los turnos como asistidos o no, para poder analizar posteriormente no sólo información del 
profesional, si no de los pacientes. En el horario correspondiente al turno, se considera sólo 30 minutos de tolerancia 
para la llegada del paciente, si no el turno se marca como no asistido.  
 
Administración de Usuarios 
Toda persona (paciente, personal de consultorio, administrador del sistema) que quiera utilizar el sistema, deberá 
tener un usuario. Deberá registrarse con un correo, teléfono, usuario y contraseña. Para iniciar sesión se deberá 
completar un captcha para asegurar que es un humano. Para eso, se utilizará el producto reCAPTCHA de Google.

## Página 5

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 5 de 31 
 
 
Además, los usuarios tendrán la comodidad de ingresar al sistema mediante Google al utilizar la tecnología de 
seguridad OAuth 2.0 de la que ya se hay disponible licencia paga. 
Infraestructura 
Se pide que el sistema tenga dos presentaciones: web y escritorio. Los módulos que deben poder accederse web son: 
La gestión de turnos y administración de pacientes para que el paciente pueda acceder de manera remota, es decir, 
podrá ser accedido a través de un navegador con conexión a internet. Además, debe ser web-responsive para que 
pueda accederse desde cualquier dispositivo. Y la funcionalidad relacionada a la administración general del consultorio 
como la gestión de turnos deberá ser una app escritorio ya que las computadoras no tienen internet. 
Se deberá instalar un certificado SSL que el consultorio ya ha comprado como medida de seguridad para proteger la 
información de sus pacientes cuando accede de manera remota. 
Las interfaces del sistema deben incluir la visualización permanente del logo del consultorio y sus colores, que son 
celeste oscuro y gris claro. 
Definición del Producto 
Objetivo 
Gestionar la atención de salud mental del consultorio mediante turnos, definición de calendarios, el registro de obras 
sociales y generación de informes relacionados a turnos, profesionales, atención de pacientes. 
Alcances 
● Administración de Servicios ofrecidos. 
● Administración de Pacientes. 
● Administración de Profesionales. 
● Administración de Obras sociales. 
● Gestión de Turnos. 
● Administración de usuarios con perfiles y permisos. 
● Generación de informes sobre asistencia de turnos. 
● Generación de informes de profesionales registrados. 
● Generación de estadísticas del tiempo en cada estado de todos los turnos.

## Página 6

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 6 de 31 
 
 
Reglas de Negocio 
Nombre de la RN Descripción de la RN 
Ausencia de 
profesional 
En caso de que un profesional tenga alguna complicación y afecte al menos un turno solicitado u 
ocupado, deberá cancelarlos y notificar a los pacientes afectados por mails y por SMS. Debe, 
además, especificar uno motivo contenido dentro de los motivos permitidos para la cancelación. 
En caso de que afecte turnos libres, estos quedarán como no disponibles. 
Solicitud de turno Para solicitar un turno el paciente puede comunicarse por teléfono o WhatsApp con la secretaria 
o acceder al sistema para tomar el turno.  
Se podrá buscar el turno por apellido de profesional o seleccionando el servicio. Una vez 
seleccionado, el usuario elige el día y horario de un turno de todos los que se tienen disponibles 
y finaliza con la confirmación de la solicitud del turno y el envío de un e-mail con los datos del 
turno otorgado. 
Asistencia del 
paciente 
Cuando el paciente asiste al turno le indica a la secretaria su nombre y apellido o muestra su QR 
para que sea escaneado con un lector y automáticamente se marque su asistencia. Para ello, se 
deberá validar que sea el día y el horario del turno para registrar dicha asistencia. 
Liberación de 
turno 
Un paciente que ha solicitado un turno y desee indicar que no asistirá al mismo, puede ingresar 
al sistema para liberar su turno. Si el turno fue solicitado por teléfono o WhatsApp, debe informar 
la liberación del turno el mismo medio que lo pidió. 
Sólo puede indicar que no asistirá a un turno que esté solicitado u ocupado. En ese caso, el turno 
se libera. 
Ocupación del 
turno 
Tres días antes del turno se envía un correo al paciente para recordarle los detalles del turno y 
solicitarle la confirmación de asistencia o no concurrencia al turno. Si confirma, el turno se 
registra como ocupado. Si indica que no podrá asistir el turno se libera. Si no realiza ninguna 
acción el turno no cambia su situación hasta el día del turno, donde se registra como ocupado. 
El paciente puede liberar el turno hasta antes de confirmar. 
Definición de la 
Agenda 
Cada profesional debe informar la duración de los turnos, los días de la semana que atenderá, su 
hora de inicio y fin. Esta definición de disponibilidad se utilizará para generar la agenda con los 
turnos disponibles del mes de cada profesional. Este proceso se debe hacer cada mes y en el caso 
de que el profesional no pueda asistir algún/os días al consultorio, los turnos afectados quedarán 
como no disponibles. 
Información sobre 
los turnos 
Es necesario mantener información de la evolución de estados por los que pasaron los turnos a 
lo largo del tiempo, para luego generar los informes correspondientes. 
Tolerancia de 
asistencia 
Es esencial marcar los turnos como asistidos o no, para su próximo análisis no sólo del 
profesional, sino también de los pacientes. Para ello, se considera 30 minutos de tolerancia, si no 
el turno se marca como no asistido.  
Disposición de la 
Agenda del 
próximo mes 
Las agendas con turnos del mes siguiente al actual pueden ya estar generadas y no mostradas a 
los pacientes.  
En forma programada, la tercera semana del mes se habilita para los pacientes la agenda del mes 
siguiente para que se puedan solicitar turnos. 
Servicio que brinda 
un profesional. 
Un profesional puede estar asociado a un único servicio en forma simultánea. Si desea cambiar 
el servicio que brinda, debe notificarlo para que se actualice le información en el sistema.

## Página 7

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 7 de 31 
 
 
Casos de Uso 
Nro. Nombre Objetivo/Breve descripción Actores 
1 Registrar no asistencia 
de turno. 
Liberar un turno indicando que el paciente no 
asistirá. 
AP: Solicitante de Turno. 
2 Solicitar turno. Solicitar un turno para un profesional de un servicio, 
eligiendo desde un agenda habilitada. 
AP: Paciente. 
AS: Servidor Correo. 
3 Registrar aceptación 
de solicitud de 
ausencia de 
profesional. 
Registrar las fechas y/u horas en que el profesional 
estará ausente y notificar a los pacientes a los cuales 
afecte su turno en el caso que los turnos no 
estuvieran disponibles. 
AP: Encargado de personal. 
AS: Servidor SMS. 
AS: Servidor Correo. 
4 Generar agenda de 
profesional. 
Generar la agenda de un profesional que delinea los 
turnos en los que podrá atender pacientes en un 
mes elegido, en función de la disponibilidad 
definida en su definición de agenda. 
AP: Encargado de personal. 
 
5 Habilitar agenda de 
profesionales. 
Proceso programado para que la tercer semana del 
mes se habilite la agenda de los profesionales para 
el mes siguiente, habilitando a partir de ese 
momento que los pacientes puedan solicitar turnos. 
N/A 
6 Registrar un 
profesional. 
Registrar los datos de un profesional que comenzará 
a atender en el consultorio. 
AP: Encargado de personal. 
 
7 Dar de baja un 
profesional. 
Eliminar un profesional que dejará de brindar su 
servicio dentro del consultorio. 
AP: Encargado de personal. 
 
8 Modificar profesional. Modificar los datos permitidos de un profesional. AP: Encargado de personal. 
 
9 Consultar profesional. Visualizar los datos de uno o más profesionales 
según criterios predefinidos. 
AP: Encargado de personal. 
 
10 Solicitar confirmación 
de turnos. 
Enviar a los pacientes un recordatorio y solicitar la 
confirmación de los turnos cuya fecha de turno 
corresponde dentro de tres días desde la fecha 
actual. 
AS: Servidor de correo. 
11 Confirmar turno. Registrar la confirmación de asistencia a un turno. AP: Paciente. 
12 Verificar turnos 
notificados. 
Controlar los turnos ya notificados para los que no 
se registró confirmación o cancelación del turno por 
parte del cliente. Este proceso actualiza el estado 
del turno cuando llega su fecha y lo registra como 
ocupado. 
N/A 
13 Registrar solicitud de 
ausencia. 
Registrar días y/u horas de ausencia informados por 
un profesional. 
AP: Profesional 
14 Registrar asistencia de 
paciente. 
Registrar la asistencia de un paciente a un turno. AP: Secretaria 
AS: Lector QR 
15 Validar asistencia de 
paciente. 
Verificar los turnos ocupados y registrar la 
inasistencia de aquellos que se les ha vencido el 
intervalo de tolerancia y los pacientes no 
concurrieron. 
N/A 
16 Iniciar sesión Iniciar una sesión en el sistema mediante una 
cuenta con nombre de usuario y contraseña y 
utilizando el recaptcha para validación de usuario 
AP: Usuario. 
AS:  reCaptcha Google. 
AS: Autenticación Google

## Página 8

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 8 de 31 
 
 
humano. Otra alternativa para iniciar una sesión es 
el uso de una cuenta de Google. 
17 Cerrar sesión. Cerrar la sesión actual del usuario en el sistema. AP: Usuario. 
18 Registrar servicio. Registrar los datos de un servicio que se brindará en 
el consultorio. 
AP: Encargado de personal. 
19 Eliminar servicio. Dar de baja un servicio. AP: Encargado de personal. 
20 Consultar servicio. Visualizar los datos registrados de un servicio. AP: Encargado de personal. 
21 Modificar servicio. Modificar los datos permitidos de un servicio. AP: Encargado de personal. 
26 Generar informe de 
turnos asistidos por 
profesional. 
Generar un informe con la cantidad de turnos 
asistidos y no asistidos en un rango de días para un 
profesional seleccionado. 
AP: Encargado de personal. 
 
27 Generar listado de 
profesionales. 
Generar un informe con todos los profesionales 
registrados en el sistema con sus datos en el rango 
temporal solicitado. 
AP: Encargado de personal. 
 
28 Generar estadística de 
turnos por estado. 
Generar un informe estadístico con el tiempo 
promedio de los turnos en cada estado, ya sea para 
todos los profesionales, para un servicio o un 
profesional en el rango temporal solicitado. 
AP: Encargado de personal. 
 
29 Registrar motivo de 
cancelación. 
Registrar los datos correspondientes a un motivo de 
cancelación de turno válido. 
AP: Encargado de personal. 
 
30 Eliminar motivo de 
cancelación. 
Dar de baja un motivo de cancelación. AP: Encargado de personal. 
 
31 Modificar motivo de 
cancelación. 
Actualizar los datos de un motivo de cancelación. AP: Encargado de personal. 
 
32 Consultar motivo de 
cancelación. 
Visualizar los datos registrados de un motivo de 
cancelación. 
AP: Encargado de personal. 
 
33 Registrar turno para 
paciente 
Registrar la solicitud de turno de un paciente, 
enviando mail de confirmación del turno asignado. 
AP: Encargado de Turnos. 
AS: Servidor Correo. 
34 Registrar la definición 
de agenda de un 
profesional 
Crear la definición de agenda para un profesional, 
registrando su disponibilidad de trabajo en 
términos de días y rangos horarios de atención, 
duración de cada turno e intervalos. 
AP: Encargado de personal. 
 
35 Modificar la definición 
de agenda de un 
profesional 
Modificar la definición de agenda para un 
profesional, actualizando los días y rangos horarios 
de atención, duración de cada turno e intervalos, 
según se requiera. 
AP: Encargado de personal. 
 
36 Consultar la definición 
de agenda de un 
profesional 
Consultar la definición de agenda de un profesional, 
visualizando los días y rangos horarios de atención, 
duración de cada turno e intervalos. 
AP: Encargado de personal. 
 
37 Eliminar la definición 
de agenda para 
profesional 
Eliminar la definición de agenda de un profesional, 
actualizando los días y rangos horarios de atención, 
duración de cada turno e intervalos, siempre que 
esta definición de agenda no se haya utilizado para 
generar una agenda. 
AP: Encargado de personal. 
 
Requerimientos No Funcionales

## Página 9

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 9 de 31 
 
 
Nro. Nombre Descripción SPA Justificación 
1. Notificaciones 
mediante correo 
electrónico. 
Se requiere notificar mediante el 
envío de correos electrónicos a 
pacientes y a profesionales 
diferentes situaciones 
relacionadas con los turnos. 
Si Se debe desarrollar un componente 
encargado de comunicarse con el servidor 
de correo y así enviar los correos 
electrónicos a pacientes y/o profesionales. 
2. Notificación SMS Al aceptar la ausencia de un 
profesional, se debe notificar la 
cancelación de un conjunto de 
turnos, enviando mensajes de 
texto a los pacientes afectados. 
Si Se debe desarrollar un componente que se 
encargue de generar los mensajes de texto 
y se comunique con el servidor de SMS 
para enviarlos. 
3. Logo del 
consultorio 
Se deberá integrar en todas las 
interfaces de usuario y formas de 
salida del sistema el logo del 
consultorio. 
No No afecta las decisiones significativas para 
el sistema ya que el lenguaje de 
programación permite la publicación de 
imágenes. 
4. Colores del 
consultorio 
La presentación del sistema 
deberá tener los colores del 
consultorio: celeste oscuro y gris 
claro. 
No No afecta las decisiones significativas para 
el sistema ya que se asume un lenguaje de 
programación visual que soporte al menos 
16 bits.  
5. Web-responsive Los módulos web deben poder 
adaptarse al tamaño y orientación 
del cualquier dispositivo móvil. 
SI Se utilizará una tecnología para el 
desarrollo de la interfaz gráfica que sea 
web-responsive.  
6. reCAPTCHA para 
inicio de sesión 
Se deberá verificar que toda 
persona que ingrese al sistema 
sea un ser humano. 
Si Se deberá desarrollar un componente que 
se comunique con la API expuesta de 
Google correspondiente de reCAPTCHA 
para que se realice la validación de usuario 
humano/a. 
7. Seguridad de 
usuarios 
El sistema debe validar el ingreso 
de usuarios mediante un usuario y 
contraseña. 
Si Se deberá desarrollar un módulo para 
autenticar el acceso de los usuarios a las 
distintas funcionalidades del sistema, y 
controlar permisos y gestionar sesiones. 
8. OAuth con Google Se permite como método 
alternativo de logueo la utilización 
de una cuenta de Google, 
evitando la generación de un 
usuario y contraseña. 
Si Se deberá integrar la librería necesaria de 
OAuth 2.0 de Google para poder 
comunicarse con la API expuesta que 
tendrá Google en su servidor. 
9. Certificado SSL Se deberá activar el protocolo 
HTTPS al instalar el certificado SSL 
en el servidor web del sistema. 
Si Se deberá proveer conexión segura al 
realizar la instalación en el servidor web 
que protegerá la comunicación. 
Es un archivo que se debe disponibilizar en 
el servidor web para permitir la 
comunicación segura, con protocolo 
HTTPS. 
10. Lector QR Para agilizar el registro de 
asistencia de los pacientes, la 
secretaria puede escanear un 
código QR con un lector que 
No El sistema debe permitir la lectura del 
código QR, lo cual únicamente implica 
soportar el protocolo correspondiente, que 
es accesible de forma pública por lo que no

## Página 10

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 10 de 31 
 
 
Nro. Nombre Descripción SPA Justificación 
permita registrar la asistencia de 
un turno. 
impacta en decisiones respecto a la 
estructura del software. 
11. Disponibilidad de 
los datos del 
sistema 
Para disponer de alta 
disponibilidad de los datos del 
sistema, se espejan las bases de 
datos en la nube. 
Si Se requiere que el software contemple los 
aspectos de seguridad lógica necesarios 
para que el despliegue espejado se realice 
en la nube. 
 
 
 
Nro. Nombre Descripción SPA Justificación 
12. Tecnología web Parte del producto se deberá 
utilizar en un entorno web, 
considerando la funcionalidad de 
pacientes y turnos para los 
usuarios tipo pacientes. 
Si  Dicha funcionalidad deberá desarrollarse 
con un lenguaje de programación 
compatible con la tecnología web. 
13. Tecnología de 
Escritorio 
El resto del sistema se necesita 
que sea una aplicación escritorio 
ya que las máquinas no tendrán 
acceso a internet. Será la 
administración de usuarios, 
reportes, profesionales, turnos y 
pacientes. 
Si Dichos módulos se tienen que desarrollar 
en un lenguaje de programación de 
escritorios. Se elige Win Forms con .NET 
4.1

## Página 11

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 11 de 31 
 
 
Vista esencial de casos de uso

## Página 12

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 12 de 31 
 
 
Descripción del Caso de Uso 
Nombre del Caso de Uso: Solicitar Turno Número: 2 
Categoría:     ☒ Esencial    ☐ Soporte            Prioridad:     ☒ Esencial      ☐ Útil        ☐ Deseable           
Complejidad:   ☐ Simple   ☒ Mediano   ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Paciente Actor Secundario: Servidor de Correo 
Tipo de Use Case:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Solicitar un turno (día y hora) para un profesional que atiende en un servicio. 
Flujo Descripto: El Paciente solicita un turno para un profesional se genera PDF y se envía mail 
1. Paciente: Selecciona la opción “Solicitar un turno” 
2. Sistema: Solicita que seleccione si desea elegir el turno por profesional o por servicio. 
3. Paciente: Selecciona la opción por servicio. 
4. Sistema: Busca los servicios y los muestra. Solicita que se seleccione uno. 
5. Paciente: Selecciona un servicio. 
6. Sistema: Solicita que si quiere elegir un profesional del servicio. 
7. Paciente: Selecciona elegir profesional. 
8. Sistema: Solicita ingresar el apellido del profesional. 
9. Paciente: Ingresa un apellido. 
10. Sistema: Busca y muestra los profesionales con ese apellido y servicio seleccionado, y solicita seleccionar uno. 
11. Paciente: Selecciona un profesional. 
12. Sistema: Busca y muestra las agendas con turnos disponibles para pacientes del profesional seleccionado. (Ver 
observación 1)  
13. Sistema: Solicita que se seleccione un día disponible. 
14. Paciente: Selecciona un día del mes vigente. 
15. Sistema: Muestra los horarios de los turnos disponibles para esa fecha y los destaca con un color, según si está 
libre o no. (Ver observación 2). 
16. Paciente: Selecciona un turno. 
17. Sistema: Pide la confirmación de solicitud del turno. 
18. Paciente: Confirma la solicitud del turno. 
19. Sistema: le asigna el turno seleccionado al paciente, cambia su estado a “Solicitado”, envía un correo electrónico 
al paciente con el comprobante de solicitud de turno con los detalles del turno y la fecha y hora de obtención del 
turno y genera un archivo PDF con los datos del turno. 
20. Paciente: Selecciona la opción para descargar el archivo PDF. Fin del CU. 
Flujos Alternativos 
A1. El usuario cancela la solicitud de turno. 
A2. Se selecciona elegir turno por profesional. 
A3. No hay turnos disponibles para ningún cronograma disponible. 
A4. No se encuentra un profesional con el apellido ingresado. 
A5. El usuario no confirma la solicitud del turno.       
A6. NO se pudo generar PDF 
A7. NO se pudo enviar mail con confirmación de turno 
Observación 1: Se muestra la agenda en formato calendario y marca con color los días según si tiene turnos disponibles 
o no. Los días con al menos un turno libre se marcan con verde, en caso contrario con color gris. 
Observación 2: Los turnos libres se muestran con el color verde y los que no con color gris.

## Página 13

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 13 de 31 
 
 
Nombre del Caso de Uso: Registrar aceptación de solicitud de ausencia de profesional Número: 3 
Categoría:     ☒ Esencial    ☐ Soporte            Prioridad:     ☒ Esencial      ☐ Útil        ☐ Deseable           
Complejidad:   ☐ Simple   ☒ Mediano   ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Encargado de Personal Actor Secundario: Servidor SMS /Servidor Correo 
Tipo de Use Case:                  ☒  Concreto                                       ☐   Abstracto 
Objetivo: Registrar las fechas y/u horas en que el profesional estará ausente y notificar a los pacientes a los cuales 
afecte su turno en el caso que los turnos no estuvieran libres. 
Flujo Descripto: El Encargado de Personal cancela los turnos de un profesional para un rango de días y notifica a 
los pacientes afectados. 
1. EP: Selecciona la opción “Registrar aceptación de solicitud de ausencia de un profesional”. 
2. Sistema: Solicita que seleccione si desea buscar las solicitudes de ausencia por nombre y apellido o matrícula 
del profesional. 
3. EP: Selecciona la opción por matrícula. 
4. Sistema: Solicita el ingreso de la matrícula. 
5. EP: Ingresa la matrícula del profesional. 
6. Sistema: Busca, encuentra un profesional con la matrícula ingresada y muestra sus datos: nombre, apellido y 
nombre del servicio que brinda. Luego, muestra todas las solicitudes de ausencia pendientes de dicho profesional 
con su fecha de creación. 
7. EP: Selecciona la solicitud de ausencia. 
8. Sistema: Muestra los datos de la solicitud de ausencia con su rango de fechas y/u horarios solicitados, fecha de 
creación y motivo de ausencia.  
9. Sistema: solicita confirmación respecto del rango en que el profesional estará ausente o desea modificarlo. 
10. EP: Acepta el rango registrado. 
11. Sistema: Verifica si el rango afecta un solo mes y es así. Valida que la agenda del mes está generada con sus 
turnos. Busca y muestra la cantidad de turnos libres / solicitados / ocupados afectados. Todos los turnos afectados 
están en estado Solicitado. 
12. Sistema: Busca y muestra los motivos de cancelación y solicita la selección de un motivo de cancelación. 
13. EP: Selecciona el motivo de cancelación de turnos. 
14. Sistema: Solicita confirmación de cancelación de turnos. 
15. EP: Confirma la cancelación de turnos.  
16. Sistema: Acepta la solicitud de ausencia. 
17. Sistema: Para todos los pacientes cuyos turnos serán cancelados, se verifica que si se le han cancelado tres veces 
un turno y ninguno cumple esta condición. 
18. Sistema: Todos los turnos afectados de dicho rango pasan al estado “Cancelado”, indicando el motivo y 
registrando fecha y hora de la cancelación. Se le suma uno al contador de cantidad de veces que se le cancela 
un turno de cada paciente. 
19. Sistema: Busca los correos y teléfonos de los pacientes y notifica a los pacientes sobre la cancelación del turno 
por medio de correo y mensaje SMS con la siguiente información: fecha y hora del turno, nombre, apellido y 
servicio que brinda el profesional. Fin CU.  
Flujos Alternativos 
A1. No existe una agenda para ese rango de fechas. 
A2. El usuario no confirma la cancelación de turnos. 
A3. El usuario cancela la ejecución del CU. 
A4. No existe un profesional con la matrícula ingresada. 
A5. La fecha hasta es antes que la fecha desde. 
A6. Hay turnos disponibles.

## Página 14

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 14 de 31 
 
 
Modelo de Dominio 
  
A7. Hay turnos ocupados. 
A8. Hay turnos disponibles, ocupados y solicitados. 
A9. Existen pacientes a los que ya se les canceló 3 veces un turno.

## Página 15

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 15 de 31 
 
 
Realización de Análisis del CU 2 Solicitar Turno – Vista Estática:

## Página 16

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 16 de 31 
 
 
Realización de Análisis del CU 2 Solicitar Turno – Vista Dinámica

## Página 17

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 17 de 31

## Página 18

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 18 de 31 
 
 
Realización de Análisis del CU 3 Registrar aceptación de solicitud de ausencia de 
profesional – Vista Estática

## Página 19

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 19 de 31 
 
 
Vista Dinámica

## Página 20

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 20 de 31 
 
 
Máquina de Estado de la Clase Turno

## Página 21

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 21 de 31 
 
 
Vistas Arquitectónicas 
Vista Arquitectónica de la funcionalidad

## Página 22

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 22 de 31 
 
 
CU Justificación 
6. Registrar profesional 
7. Dar de baja 
profesional 
8. Modificar profesional 
9. Consultar profesional 
Son casos de uso que describen entidades con ABMC representativos, determinando los 
lineamientos para la interfaz e interacción de usuario respecto a la definición de 
ubicación de botones, validaciones de los datos que deberá ingresar, entre otros. 
Determina decisiones para el acceso a la base de datos para la consulta, modificación y 
baja de datos, como también algoritmos de programación simples para lograr manejar la 
lógica de dichas funcionalidades y la correcta sanitización de los datos que se registran. 
Cumple con los RNF 13 Tecnología de Escritorio ya que se deberá utilizar un lenguaje de 
programación de escritorio solicitado (Win Forms con NET 4.1) y establecer la estructura 
del software acorde. 
Y cubre el RNF 11 Despliegue espejado de bases de datos en la nube ya que se debe 
resolver la comunicación con el servidor que se va a desplegar en la nube. 
4. Generar Agenda de 
profesional 
Modela una transacción representativa con objetivo de definir la lógica compleja de la 
generación de una agenda y sus turnos. Se implementan algoritmos complejos de 
programación, aplicación de rollbacks y logs de transacciones.  
2. Solicitar turno Modela una transacción web representativa, ya que determina la manera en que se 
define la interfaz e interacción con el usuario principalmente por la muestra de la agenda 
en formato calendario, filtros y grilla de los turnos. Se define el acceso atómico a la base 
de datos para su registración, definición de rollbacks y registro de un log transaccional. 
Cumple con los RNF 12 Tecnología web y RNF 5 Web responsive ya que se deberá 
utilizar un lenguaje de programación web, RNF 1 Notificaciones mediante correo 
electrónico para resolver el envío de correos con la información del turno y RNF 9 
Certificado SSL para levantar la plataforma web. 
16. Iniciar sesión Da lugar a establecer las decisiones respecto a la autenticación y autorización de los 
usuarios dentro del sistema, como definición de perfiles y visualización de la información 
dependiendo de sus permisos. 
Cumple con los RNF 6 reCAPTCHA para inicio de sesión al deber resolver la manera de 
desarrollar la interfaz para poder comunicarse con la API expuesta, RNF 7 Seguridad de 
usuarios y RNF 8 OAuth con Google determinando la manera de integrar la librería 
necesaria para intercambiar requests con la provista por Google. 
3. Registrar aceptación 
de solicitud de ausencia 
de profesional 
Actualiza los turnos en función de la aceptación de una inasistencia de un profesional 
Da soporte al RNF 2 Notificación SMS ya que se debe desarrollar el componente que 
hace posible el envío de mensajes de texto y al RNF 1 Notificaciones mediante correo 
electrónico. 
26. Generar informe de 
turnos asistidos por 
profesional 
Es un informe representativo que permite definir para la lógica de reportes y estadísticas 
la interfaz de usuario, predisposición de los datos en términos de grillas, el acceso y 
procesamiento de una gran cantidad de datos en base a los filtros determinados por el 
usuario. 
28. Generar estadística 
de turnos por estado 
Es una estadística representativa que define para la lógica de reportes y estadísticas, la 
visualización de los datos en formato de tabla, la generación de gráficas y el cálculo de 
métricas de una gran cantidad de datos en base a los parámetros indicados por el 
usuario. 
15. Validar asistencia de 
pacientes 
Caso de uso elegido por ser el que se instancia con el tiempo como disparador y desde el 
punto de vista arquitectónico es necesario definir cómo se controlará el tiempo, para 
iniciar el proceso que verificará los turnos ocupados y registrar la inasistencia de aquellos 
que se les ha vencido el intervalo de tolerancia.

## Página 23

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 23 de 31 
 
 
Vista Arquitectónica de diseño:

## Página 24

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
Ciclo lectivo 2026 - Versión 1.8  Página 24 de 31 
 
 
Vista Arquitectónica del despliegue

## Página 25

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
Ciclo lectivo 2026 - Versión 1.8  Página 25 de 31 
 
 
Rediseño 
Patrón Observer - Vista Estática

## Página 26

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8   Página 26 de 31 
 
 
Vista del comportamiento 
 
Explicación 
GestorAusenciaProfesional 
Es el sujeto, quien implementa la interfaz ISujeto y tiene los métodos requeridos para manejar los observadores.  
Primero, crea sus observadores y los agrega a su array de observadores mediante el método “suscribir” cuyo 
parámetro es un observador y el del tipo abstracto IObservadorTurno.  
Ya tiene la información de los contactos de los pacientes a notificar y los otros datos necesarios a ubicar en el 
mensaje. Dentro el método “notificar()” se disparan los métodos necesarios de sus observadores para que se realice 
la notificación a cada interfaz correspondiente. 
 
IObservadorTurno

## Página 27

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8   Página 27 de 31 
 
 
Es una clase abstracta cuyos métodos no tienen código y obliga a las clases que implementan esta interfaz que le dé 
un desarrollo con la signatura definida. El método “enviarNotificación (contactos: String[[]], fechaHoraTurno: 
Date[[]], nombreApellidoProf: String[[]], servicio: String[[]])” es polimórfico, es decir, dependiendo del objeto que 
se le ejecute este mensaje, es la respuesta que tendrá. Contiene como parámetro todos los datos que se necesitan 
para enviar el mensaje y el correo. 
En el parámetro de contactos se pasará ya sea los números de teléfono como el correo electrónico de un grupo de 
pacientes. 
Clases concretas InterfazSMS e InterfazCorreo 
Estas clases implementan la intefaz IObservadorTurno dándole funcionalidad a los métodos que obliga a que 
definan. Además, tienen sus métodos particulares para cumplir con la funcionalidad de notificar a los contactos 
recibidos por parámetro. Estos métodos son “enviarSMS()” y “enviarCorreo()” de la InterfazSMS y la InterfazCorreo 
respectivamente.

## Página 28

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.8  Página 28 de 31 
 
 
Patrón State - Vista Estática

## Página 29

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.8  Página 29 de 31 
 
 
Vista del comportamiento

## Página 30

Proyecto Práctico de Aplicación  
Consultorio de Salud Mental 
Diseño arquitectónico con Monolítico  
 
 
PPA Consultorio de Salud Mental - Monolítico.docx - Versión 1.8 
 
 Página 30 de 31 
 
 
Explicación 
Clase concreta Turno 
Esta clase es el contexto del patrón, cuyo comportamiento cambia según el estado en el que está. En el momento 
que se le indica que será cancelado, delega la responsabilidad de dicho cambio de estado a su estado actual, que en 
términos de ejecución es “Solicitado”. 
Clase abstracta Estado 
Es una clase cuyo método “cancelar (this: Turno, fechaHoraActual: DateTime, motivo: MotivoCancelacion, 
historiales: CambioEstado[])” es polimórfico porque cada una de sus clases hijas (que heredan de la misma) le darán 
una implementación de acuerdo al comportamiento en cada estado. Se le pasa el turno para indicarle el cambio 
realizado, la fechaHoraActual y el motivo para el cambio de estado y los historiales para que el estado en ese 
momento pueda finalizar el cambio de estado de ese momento. 
Clase concreta Solicitado 
Hereda de la clase “Estado” y le da una implementación al método “cancelar()”. Dentro del mismo suma uno al 
cantidad de cancelaciones de turnos al paciente afectado y le guarda la fecha hora fin en el cambio de estado actual, 
luego crea el nuevo estado “Cancelado”, crea el nuevo cambio estado mandándole por parámetro su fecha de inicio, 
el estado correspondiente y el motivo. Por último, le indica a su turno que se tiene un nuevo estado y que agregue a 
su array el nuevo cambio de estado.
