# PPA Consultorio de Salud Mental - Microservicios V1.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento detalla el 
Proyecto Práctico de Aplicación
 para el diseño de un software informático destinado a un 
consultorio de salud mental
, utilizando el paradigma de 
orientación a objetos
 y una 
arquitectura de microservicios
. Su finalidad principal es modelar la solución tecnológica para gestionar de forma eficiente la 
agenda de profesionales
, el 
registro de pacientes
 y la 
asignación de turnos
, abarcando tanto procesos internos como herramientas de seguridad externas. Además, presenta de manera estructurada los 
requisitos funcionales y no funcionales
, las vistas arquitectónicas de funcionalidad, diseño global, diseño detallado y despliegue, junto con su respectiva justificación técnica.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14xrZfjQQTcqVJ1y2IVVlMgJlsAJuGPX8mqrBAf7XjA0ct8V9sbH9mx-jEYWI3Hpc3t4UW-izu2cqxgzak_mkv7XrlBDf3DcrDaUlYRwTmO5Dd5S-QHH2L-aTPulEfgW8SGK6SCQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2682cc03cWCtw_Jji3vz1ODcCfHvLg82l-jb957eslVuyBfYMx73nJH2GITS6VoO7zkVWInWPbrH_CWdBTBoJzdRZvRX-On5egSpPk336uAO8bXGNW8rtviVpDqW3AwwvssPrF2Q=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Proyecto Práctico de Aplicación
Nombre del Proyecto Práctico de Aplicación: Consultorio de Salud Mental
Objetivo del Proyecto Práctico de Aplicación (PPA): El objetivo del proyecto es desarrollar el modelado de un software para un consultorio de salud mental, a partir de
una descripción del dominio. Sólo se muestran algunos artefactos resultantes de los procesos de requerimientos,
análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se
construirá.
Analizar el sistema de información con la perspectiva del paradigma de Orientación a Objetos.
Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura robusta
del sistema.
Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución (Análisis
y Diseño) a partir del Modelo de Requerimientos
Modelar la arquitectura del producto utilizando estilos/patrones arquitectónicos.
Resolver situaciones problemáticas del diseño con patrones de diseño.
Mapear diagramas de clases a BDR.
Analizar y modelar cambios en los requerimientos y su impacto en los modelos existentes.
Contenidos de la Asignatura que se abordarán en el PPA:
Modelo de Requerimientos como punto de partida para el modelado de la solución.
Modelado del Comportamiento en el Análisis
Patrones de Principios generales para asignar responsabilidades (GRASP).
Modelado de la Estructura en el Análisis
Diseño Arquitectónico – Estilos/ Patrones Arquitectónicos; Vistas Arquitectónicas
Diseño de la Estructura del software y del Comportamiento del Software utilizando patrones de diseño.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V08zZW7mbjObaB7ZX8cQYYf6jmFre8NCt28pnYE3BNQZbYB-ZfK_mK6l3Sw5LUXqyckkTZ2v1mWYNY1nhdpV0qpYiToWgO19qO9g8JDdmFS42fUd8UP9GgC8e4X-TiYzAzRtC=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11RfDV3eDVEyRQDw3dcg77uGhc-Ly2e3YQzwI6uTK63rQFDvhrkhtddCmxgh-mi0Qok5MIUPf3662sY7uBIErOXAb49bwKWIKLVNLTTtK9qFqpCM487VXOLVDvOcKIvKErjoZurw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Sj3YE1qwvc0Yxm_kQJCOV2qffeGhHxmHkHO2YuyiDbBUxVw41dUzu-P-9vJnrp2cPeNjdjn-VrbAS_j8s09BemwW64_EdiGbWSKbeYPNs_InWhkflEqgzpZ3GoSkmEEoXDuZ-=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Consigna asociada al Proyecto Práctico de Aplicación:
1. Elabore para el caso de uso “Solicitar Turno” la realización de casos de uso de análisis aplicando patrones GRASP de análisis.
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
2. Elabore para el caso de uso “Registrar aceptación de solicitud de ausencia de profesional” la realización de casos de uso de análisis aplicando patrones GRASP de análisis.
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
3. Construya la máquina de estados de la clase Turno, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones: el o los casos de uso, los métodos y cuando aplique, las condiciones de control.
4. Realizar la identificación de los subdominios, utilizando el patrón de descomposición en subdominios.
5. Utilizando un estilo arquitectónico de microservicios, construir las siguientes vistas arquitectónicas, definiendo para cada vista el punto de vista asociado:
o Vista Arquitectónica de la funcionalidad. o Vista Arquitectónica de Diseño global. o Vista Arquitectónica de Diseño detallada. o Vista Arquitectónica del Despliegue.
6. Rediseña las realizaciones de casos de uso de análisis utilizando el patrón de diseño que considere adecuado para resolver los problemas de diseño descritos a continuación. Modele la vista de la estructura utilizando un diagrama de clases; la vista dinámica utilizando un diagrama de secuencia y el pseudocódigo o una explicación textual que muestre la implementación de los métodos involucrados:
a. Realizar el rediseño necesario para crear una solución que flexibilice el modelo permitiendo informar a los pacientes vía correo y sms cuando se haya aceptado la petición de ausencia de un profesional.
b. Realizar el rediseño necesario para modelar una solución que resuelva en forma flexible el manejo del comportamiento variable del turno según la situación en la que se encuentre.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29aueWpOT7yDJbbLMUcEZsXcs4IL9etreb8Bu422SBtcNOR7v2ddwdFEJZk4g21l_yKY4mucLsXmv8pRmLAGu621URfGu25KfSqNFxa2XPZTpHrRlSnPsPmnkuh8yxXXw9L-_g_Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv327rIJ1bRXwairifM-mGcHfPww0qPUsBdmTks-OeCEbvVHhUtB0JGIm5EwRYLqCLu7wQYyZCsGMqqxnQm0AdHdG3YMLZ9tf28BZw5a92Xrw2P77X97nV7YqzOD9l8aDGr0lZ_v=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hyAHjpkPvXNyqQ29bx6m1qK-z9wbc1FHdAqh53vIxLma2AeoRMx1Rh-O1CxrQm9rJYd-KKsUgoKO0a0GOzWpBoEis-8oC6ItMOQ3u_8smzp8g1mUTBvl5Y8u2IXQAP6gkHZTFtw=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Glosario:
Término Descripción
Agenda de Profesional Es una diagramación que define para un mes los turnos disponibles de un profesional, que se genera a partir de la definición de horarios (días y rangos horarios para cada día en los que podrá atender), informados por cada profesional.
Servicio reCHAPTCHA reCAPTCHA es un servicio de Google diseñado para proteger los sitios web contra actividades maliciosas o automatizadas, como el spam y los ataques de bots. El nombre "reCAPTCHA" proviene de "Completely Automated Public Turing test to tell Computers and Humans Apart" (Prueba de Turing pública completamente automatizada para diferenciar entre computadoras y humanos).
Protocolo OAuth OAuth es un mecanismo que permite a una aplicación o servicio solicitar permiso al usuario para acceder a sus datos en otro servicio en línea (como Facebook, Google, Twitter, etc.) en nombre del usuario, sin que la aplicación tenga acceso a las credenciales de inicio de sesión del usuario.
Certificado SSL (Secure Sockets Layer)
Su función principal es cifrar los datos transmitidos entre el navegador del usuario y el servidor web, lo que garantiza que la información sensible, como contraseñas, números de tarjetas de crédito y otra información personal, se mantenga confidencial y segura durante la transmisión. Se instala este certificado SSL en el web server, subiéndolo en una carpeta en dicho servidor. Se suele subir con programas que automatizan este proceso.
Web responsive El diseño web responsive (o adaptativo) es una técnica de desarrollo que permite que una sistema web ajuste automáticamente su contenido, estructura e imágenes según el tamaño de pantalla del dispositivo desde el cual se accede. Esto garantiza que el sitio sea legible y fácil de usar, ya sea en un smartphone, tablet, computadora de escritorio, notebook o televisor, eliminando la necesidad de crear versiones independientes para cada dispositivo.
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
Por cada profesional, se establece la definición de su agenda con la duración de los turnos, los días de la semana que
atenderán, su hora de inicio de atención y su hora de fin de atención. Para cada mes, se basa en esa definición para
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YSV5z9UhlSEOvY9OrUOqZpoa06GTcRSrnPdlKINKm69xqSs7VTtVoQCUFBn-yMw59W7zrX_XNT5IOCHMRkzJdldZlfK0ISVRD24Uo4jGUVEvBSqxKzCCWhujmhItOpeDUINkG_w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VjAphXh7RsHmI3PUE2VFk9Q9AHhDe7f9w5w5wf9d-UaBhJz4IgYRuJFStLj5edT5XmAE2TbQrhdQdZ_n9EgQfGQzQhOUIUDN3gAjWTejBVsEsSqiM0wKVzJIKdTbHH16oB0mAhw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33IN5ff9YPvaLdiVRTBqlRLqM044T513cIbcOlpNdZjjsjfv1YHmWOH4_7j9oIYdfluiGF0GzkyUTmAKYn5ARdOmpRCv2SCbG5ibDP_n3qnFtys98CJj0wyvKXYiQb387yJyD-2Q=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
determinar el agenda del mes siguiente y se crean todos los turnos como libres inicialmente. Se puede usar la misma
definición de horarios para varias agendas. Las agendas se generan respetando los horarios definidos.
Antes de la generación de la agenda, cada profesional debe informar los días y/u horarios en los que no puedan asistir
al consultorio, para inhabilitar los turnos que corresponden a ese periodo de tiempo.
Las agendas y turnos del mes siguiente deben ya estar especificados, de manera que, a la tercera semana del mes en
curso, se habilite la agenda del mes siguiente. De esta forma se permite a los pacientes que puedan solicitar turnos.
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
confirmación o no concurrencia al turno. Si confirma, el turno se registra como ocupado. Si indica que no podrá asistir
el turno se libera, quedando disponible nuevamente. Si no realiza ninguna acción el turno no cambia su situación hasta
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aDn91g4H10vDXaIGqL8BskeTCJ5wA32-eWe7GT7BRCtWTcaDi1HjH8laXHNBkOT5QdRa7r7_gkq4K5Ro1g8s5vAfh61UDtcSOwWt93SaUE8OzA6XiigoPu1VyihK3HdPzxQHy3A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yMy9PwJQuT5l3JKskaydeW6b8UybJzTHv7EYkPYqV3gzWK9ddkYDQm_3ypj0ajXOoWJ5P3inaNrtnq0D2oC2GsotJxl06HiaXfvlSqgYmVuDemGHsDJ7EOXKnJYDES5aOSTc9zw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PUqcM2MiCzvsbtxE2iVKZ-WefR-voPVg0DL89t7PteZOhtxPvlq-RNeB4tYURvPCHHxC0kL9omgW86zYfrJC4rg-07h5oKo7TJIxhQ_nUaLqqFgnzDK4s4VXD51AyT4d9IyCk=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Toda persona (paciente, personal de consultorio, administrador del sistema) que quiera utilizar el sistema, deberá
tener un usuario. Deberá registrarse con un correo, teléfono, usuario y contraseña. Para iniciar sesión se deberá
completar un captcha para asegurar que es un humano. Para eso, se utilizará el producto reCAPTCHA de Google.
Además, los usuarios tendrán la comodidad de ingresar al sistema mediante Google al utilizar la tecnología de
seguridad OAuth 2.0 de la que ya se hay disponible licencia paga.
Infraestructura
Se pide que el sistema sea, en su totalidad, web. Es decir, la administración general del consultorio como la gestión
de turnos del lado de los pacientes podrá ser accedido a través de un navegador con conexión a internet. Además,
debe ser web-responsive para que pueda accederse desde cualquier dispositivo.
Se deberá instalar un certificado SSL que el consultorio ya ha comprado como medida de seguridad para proteger la
información de sus pacientes.
Las interfaces del sistema deben incluir la visualización permanente del logo del consultorio y sus colores, que son
celeste oscuro y gris claro.
Definición del Producto
Objetivo
Gestionar la atención de salud mental del consultorio mediante turnos, definición de calendarios, el registro de obras
sociales y generación de informes relacionados a turnos, profesionales, atención de pacientes.
Alcances
Administración de Servicios ofrecidos.
Administración de Pacientes.
Administración de Profesionales.
Administración de Obras sociales.
Gestión de Turnos.
Administración de usuarios con perfiles y permisos.
Generación de informes sobre asistencia de turnos.
Generación de informes de profesionales registrados.
Generación de estadísticas del tiempo en cada estado de todos los turnos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2egNSi1LHFcxjj9JxLz1r5El1vuqggFy4ZRP8Om0WXQmYrda2-WtEKSV2J7npwjy9VXYRD40vpmZ5lGZ5kFFXNTGaMWTZTKyK2Z5HmfrQAypJ8ef6ftvfQpZtqC-cw1Zk1diHE=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YkR2xapM8wC4pRDV0ioTUazFOvfxtNaplrnwjwWCk0IrhPZpTcnDDuAws0QlErqPw2MjgQQ2leoktMHCKe_GJ42X9iy5ETcjV7f0j-6hr7RuS3AaeH2XZoc2P22nc6RJKheopwQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv016E2-HVFqbdBjUaMFoIbGWelHf6rm6ZnDobzG6fne7VwsP_s24Hx2W_4rwYccBVcuuy7l1XzpD7KZUdkTuJ7AW249Os_iKqB8RcZ8-odG-M1rNSEd48YlXfs83inhEuzs47jxGg=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Reglas de Negocio
Nombre de la RN Descripción de la RN
Ausencia de profesional
En caso de que un profesional tenga alguna complicación y afecte al menos un turno solicitado u ocupado, deberá cancelarlos y notificar a los pacientes afectados por mails y por SMS. Debe, además, especificar uno motivo contenido dentro de los motivos permitidos para la cancelación. En caso de que afecte turnos libres, estos quedarán como no disponibles.
Solicitud de turno Para solicitar un turno el paciente puede comunicarse por teléfono o WhatsApp con la secretaria o acceder al sistema para tomar el turno. Se podrá buscar el turno por apellido de profesional o seleccionando el servicio. Una vez seleccionado, el usuario elige el día y horario de un turno de todos los que se tienen disponibles y finaliza con la confirmación de la solicitud del turno y el envío de un e-mail con los datos del turno otorgado.
Asistencia del paciente
Cuando el paciente asiste al turno le indica a la secretaria su nombre y apellido o muestra su QR para que sea escaneado con un lector y automáticamente se marque su asistencia. Para ello, se deberá validar que sea el día y el horario del turno para registrar dicha asistencia.
Liberación de turno
Un paciente que ha solicitado un turno y desee indicar que no asistirá al mismo, puede ingresar al sistema liberar su turno. Si el turno fue solicitado por teléfono o WhatsApp, debe informar la liberación del turno el mismo medio que lo pidió. Sólo puede indicar que no asistirá a un turno que esté solicitado u ocupado. En ese caso, el turno se libera.
Ocupación del turno
Tres días antes del turno se envía un correo al paciente para recordarle los detalles del turno y solicitarle la confirmación de asistencia o no concurrencia al turno. Si confirma, el turno se registra como ocupado. Si indica que no podrá asistir el turno se libera. Si no realiza ninguna acción el turno no cambia su situación hasta el día del turno, donde se registra como ocupado. El paciente puede liberar el turno hasta antes de confirmar.
Definición de la Agenda
Cada profesional debe informar duración de los turnos, los días de la semana que atenderá, su hora de inicio y fin. Esta definición de disponibilidad se utilizará para generar la agenda con los turnos disponibles del mes de cada. Este proceso se debe hacer cada mes y en el caso de que el profesional no puede asistir algún/os días al consultorio, los turnos afectados quedarán como no disponibles.
Información sobre los turnos
Es necesario mantener información de la evolución de estados por los que pasaron los turnos a lo largo del tiempo, para luego generar los informes correspondientes.
Tolerancia de asistencia
Es esencial marcar los turnos como asistidos o no, para su próximo análisis no sólo del profesional, sino también de los pacientes. Para ello, se considera 30 minutos de tolerancia, si no el turno se marca como no asistido.
Disposición de la Agenda del próximo mes
Las agendas con turnos del mes siguiente al actual pueden ya estar generadas y no mostrados a los pacientes. En forma programada, la tercera semana del mes se habilita para los pacientes la agenda del mes siguiente para que se puedan solicitar turnos.
Servicio que brinda un profesional.
Un profesional puede estar asociado a un único servicio en forma simultánea. Si desea cambiar el servicio que brinda, debe notificarlo para que se actualice le información en el sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z0ONijHM4ggGCxSbvjgbzPdWgtgb-hVMw_9pXm-xyxAnG6hqpZDV9Dvy-IIvCpNjsYXaaOn3KeQjVRdBPPZw5mdND0nPTk6IqcpJZWGB1SIdic1pLWsCChs0WZBU0yREaLICo9A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yPcqCThFFCu1cqDh49ymoEhaj5hOyt8jNhCfnMshqucpHIie7yqLk9Uyfsczv7XGSAxvqWQwtOYah7YlIz8HE29gi5-haF2gvgcrZlqQbECvk7WQgFCeXuDy56DoHHfsMz1T4=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TJLWk9AVfPWcMG8_pv7Jii0X_ZYpBcPlL4Vcs9Sp-z7XaDkGYY6qFQgAG17ifOiO4gOhsp04P45dNaEZoAb1xXTXC0CeJ_dA6jRfg2MqI-kAGY_RTjimFq4DyM65-BjoK20K82w=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Casos de Uso
Nro Nombre Objetivo/Breve descripción Actores
1 Registrar no asistencia de turno.
Liberar un turno indicando que el paciente no asistirá.
AP: Solicitante de Turno.
2 Solicitar turno. Solicitar un turno para un profesional de un servicio, eligiendo desde un agenda habilitada.
AP: Paciente. AS: Servidor Correo.
3 Registrar aceptación de solicitud de ausencia de profesional.
Registrar las fechas y/u horas en que el profesional estará ausente y notificar a los pacientes a los cuales afecte su turno en el caso que los turnos no estuvieran disponibles.
AP: Encargado de personal. AS: Servidor SMS. AS: Servidor Correo.
4 Generar agenda de profesional.
Generar la agenda de un profesional que delinea los turnos en los que podrá atender pacientes en un mes elegido, en función de la disponibilidad definida en su definición de agenda.
AP: Encargado de personal.
5 Habilitar agenda de profesionales.
Proceso programado para que la tercer semana del mes se habilite la agenda de los profesionales para el mes siguiente, habilitando a partir de ese momento que los pacientes puedan solicitar turnos.
N/A
6 Registrar un profesional.
Registrar los datos de un profesional que comenzará a atender en el consultorio.
AP: Encargado de personal.
7 Dar de baja un profesional.
Eliminar un profesional que dejará de brindar su servicio dentro del consultorio.
AP: Encargado de personal.
8 Modificar profesional. Modificar los datos permitidos de un profesional. AP: Encargado de personal.
9 Consultar profesional. Visualizar los datos de uno o más profesionales según criterios predefinidos.
AP: Encargado de personal.
10 Solicitar confirmación de turnos.
Enviar a los pacientes un recordatorio y solicitar la confirmación de los turnos cuya fecha de turno corresponde dentro de tres días desde la fecha actual.
AS: Servidor de correo.
11 Confirmar turno. Registrar la confirmación de asistencia a un turno. AP: Paciente.
12 Verificar turnos notificados.
Controlar los turnos ya notificados para los que no se registró confirmación o cancelación del turno por parte del cliente. Este proceso actualiza el estado del turno cuando llega su fecha y lo registra como ocupado.
N/A
13 Registrar solicitud de ausencia.
Registrar días y/u horas de ausencia informados por un profesional.
AP: Profesional
14 Registrar asistencia de paciente.
Registrar la asistencia de un paciente a un turno. AP: Secretaria AS: Lector QR
15 Validar asistencia de paciente.
Diariamente verificar los turnos ocupados y registrar la inasistencia de aquellos que se les ha vencido el intervalo de tolerancia y los pacientes no concurrieron.
N/A
16 Iniciar sesión Iniciar una sesión en el sistema mediante una cuenta con nombre de usuario y contraseña y utilizando el recaptcha para validación de usuario
AP: Usuario. AS: reCaptcha Google. AS: Autenticación Google
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Jo-GIAhe74ZH1hmoCmvuzsYJjSRff9ORH-C-lxSq_FL_TkXFyb9oKSfIDKQHFG2G0mcfBwRWoPa4HC9kJ6uxesay-bxNPCfFSL7Uj7AKe4wd8Bo0Xy5wbf_27iqGGxGExvcO2=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lNd0K5mZ9IAfow_8tZDZYe4ft8uHRpqjOQ1F7GPmHdSUoGsoPG1AoXAsqDzzKrXnxh5AG6UXFz4zSneAAEi71sZN-hOjbbr_t7BxY0IOAnwZCM1OY68do8iR8BVIq5I1Hhr6G=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2K0Hvr_qz919NffTAyTvhmR_T_fS-jxfehlqpibc_I8cR1VqLielNwNjUkOn5Cqyk2Ay8JEyEvahOfLn9bEhF8CyevtqrDHKUbZb7H_4WLNqJFSbUfU6T6qan4Y5RHtr9swXeW=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Nro Nombre Objetivo/Breve descripción Actores
humano. Otra alternativa para iniciar una sesión es el uso de una cuenta de Google.
17 Cerrar sesión. Cerrar la sesión actual del usuario en el sistema. AP: Usuario.
18 Registrar servicio. Registrar los datos de un servicio que se brindará en el consultorio.
AP: Encargado de personal.
19 Eliminar servicio. Dar de baja un servicio. AP: Encargado de personal.
20 Consultar servicio. Visualizar los datos registrados de un servicio. AP: Encargado de personal.
21 Modificar servicio. Modificar los datos permitidos de un servicio. AP: Encargado de personal.
26 Generar informe de turnos asistidos por profesional.
Generar un informe con la cantidad de turnos asistidos y no asistidos en un rango de días para un profesional seleccionado.
AP: Encargado de personal.
27 Generar listado de profesionales.
Generar un informe con todos los profesionales registrados en el sistema con sus datos en el rango temporal solicitado.
AP: Encargado de personal.
28 Generar estadística de turnos por estado.
Generar un informe estadístico con el tiempo promedio de los turnos en cada estado, ya sea para todos los profesionales, para un servicio o un profesional en el rango temporal solicitado.
AP: Encargado de personal.
29 Registrar motivo de cancelación.
Registrar los datos correspondientes a un motivo de cancelación de turno válido.
AP: Encargado de personal.
30 Eliminar motivo de cancelación.
Dar de baja un motivo de cancelación. AP: Encargado de personal.
31 Modificar motivo de cancelación.
Actualizar los datos de un motivo de cancelación. AP: Encargado de personal.
32 Consultar motivo de cancelación.
Visualizar los datos registrados de un motivo de cancelación.
AP: Encargado de personal.
33 Registrar turno para paciente
Registrar la solicitud de turno de un paciente, enviando mail de confirmación del turno asignado.
AP: Encargado de Turnos. AS: Servidor Correo.
34 Registrar la definición de agenda de un profesional
Crear la definición de agenda para un profesional, registrando su disponibilidad de trabajo en términos de días y rangos horarios de atención, duración de cada turno e intervalos.
AP: Encargado de personal.
35 Modificar la definición de agenda de un profesional
Modificar la definición de agenda para un profesional, actualizando los días y rangos horarios de atención, duración de cada turno e intervalos, según se requiera.
AP: Encargado de personal.
36 Consultar la definición de agenda de un profesional
Consultar la definición de agenda de un profesional, visualizando los días y rangos horarios de atención, duración de cada turno e intervalos.
AP: Encargado de personal.
37 Eliminar la definición de agenda para profesional
Eliminar la definición de agenda de un profesional, actualizando los días y rangos horarios de atención, duración de cada turno e intervalos, siempre que esta definición de agenda no se haya utilizado para generar una agenda.
AP: Encargado de personal.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Wpyvp4OWNt_FjKsd-t7qXNuume5rOgLs6bfBpn4LjppjCHIpXc-JBavLSzOQ6Tx6DQqPZIMq1V5HELojJH7QHAtkRNyILVp4jpHri4GD61hhqNkfqeVAz5GUn26fwBqcx7h887A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gg3sHi25CESJ5Z2VwJY4D7ppfS4gpmXhkxGpFxR_Y4NwEP6ndW5dkkE59NHs8sYKxnK978vEtuhBSRm1laWyy03fG7_HJf46zViZKlcD5wRXzHobTbKhOwvfNRAYL3UU-PHjYWA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dYgLrH289Zi0arGsK82l0REX0YePdCHsQ1ontPKiIZcP7nYtH77wZ9Wh_7qPwRIJLi9tL5EszKX3vmru6FyuFnrXHATa3hbtNitmsvlKRsP7pOm5wMnWgVwftJH851g5f0X_KNw=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Requerimientos No Funcionales
Nro. Nombre Descripción SPA Justificación
1. 2 Tecnología web Todo el producto se deberá utilizar en un entorno web.
Si El sistema deberá desarrollarse con un lenguaje de programación compatible con la tecnología web.
2. 3 Notificaciones mediante correo electrónico.
Se requiere notificar mediante el envío de correos electrónicos a pacientes y a profesionales diferentes situaciones relacionadas con los turnos.
Si Se debe desarrollar un componente encargado de comunicarse con el servidor de correo y así enviar los correos electrónicos a pacientes y/o profesionales.
3. 4 Notificación SMS Al aceptar la ausencia de un profesional, se debe notificar la cancelación de un conjunto de turnos, enviando mensajes de texto a los pacientes afectados.
Si Se debe desarrollar un componente que se encargue de generar los mensajes de texto y se comunique con el servidor de SMS para enviarlos.
4. 6 Logo del consultorio
Se deberá integrar en todas las interfaces de usuario y formas de salida del sistema el logo del consultorio.
No No afecta las decisiones significativas para el sistema ya que el lenguaje de programación permite la publicación de imágenes.
5. 7 Colores del consultorio
El sistema deberá tener los colores del consultorio: celeste oscuro y gris claro.
No No afecta las decisiones significativas para el sistema ya que se asume un lenguaje de programación visual que soporte al menos 16 bits.
6. 8 Web-responsive El sistema debe poder adaptarse al tamaño y orientación del cualquier dispositivo móvil.
SI Se utilizará una tecnología para el desarrollo de la interfaz gráfica que sea web-responsive.
7. 9 reCAPTCHA para inicio de sesión
Se deberá verificar que toda persona que ingrese al sistema sea un ser humano.
Si Se deberá desarrollar un componente que se comunique con la API expuesta de Google correspondiente de reCAPTCHA para que se realice la validación de usuario humano/a.
8. 1
0
Seguridad de usuarios
El sistema debe validar el ingreso de usuarios mediante un usuario y contraseña.
Si Se deberá desarrollar un módulo para autenticar el acceso de los usuarios a las distintas funcionalidades del sistema, y controlar permisos y gestionar sesiones.
9. 1
1
OAuth con Google Se permite como método alternativo de logueo la utilización de una cuenta de Google, evitando la generación de un usuario y contraseña.
Si Se deberá integrar la librería necesaria de OAuth 2.0 de Google para poder comunicarse con la API expuesta que tendrá Google en su servidor.
10. 1
2
Certificado SSL Se deberá activar el protocolo HTTPS al instalar el certificado SSL en el servidor web del sistema.
Si Se deberá proveer conexión segura al realizar la instalación en el servidor web que protegerá la comunicación. Es un archivo que se debe disponibilizar en el servidor web para permitir la comunicación segura, con protocolo HTTPS.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PtXUGFIwz8_7wC-FYMSFQsJjcdwWci2XVFLExABi8214paiSLNmKyF7sqa8O69c7Rb6RYHiHRKXgS_zlpeEJrNYUxaHTGtOcIJ_3omULBikCT5_x_ifIY-deO7UxqDvWfl7f20A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2myLaTId8aQs0L_0WNO10p1M0cynaPZN6RaGgBveDJR1jxt_-qGdMB4nO3S_X0U5Jvx9Y9DWrYy5IiYd5OhyQ94J6l0js8gOo2RphuPmhHxuZxhTLbOckYpm0j_rpflH2pvltG=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0x1SN57SdYOfj5qmYEMPQjIWhdgTQH0OqfFPyOC1F1anLQs11zh7C-p8d7HtyoCDSgmutw7aF5WkV0Pb17Ql8Iqxm0kAgEYdJI3AtJdecO1t11UjgTgN9iJVOpijhGymgfs9jG=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Nro. Nombre Descripción SPA Justificación
11. 1
3
Lector QR Para agilizar el registro de asistencia de los pacientes, la secretaria puede escanear un código QR con un lector que permita registrar la asistencia de un turno.
No El sistema debe permitir la lectura del código QR, lo cual únicamente implica soportar el protocolo correspondiente, que es accesible de forma pública por lo que no impacta en decisiones respecto a la estructura del software.
12. Disponibilidad de servicios de atención de pacientes, pacientes y profesionales
Para asegurar alta disponibilidad de los servicios relacionados con atención de pacientes, información de pacientes y profesionales, se espejarán las bases de datos en la nube.
Si Se requiere que el software contemple los aspectos de seguridad lógica necesarios para que el despliegue espejado de los servicios relacionados con pacientes, su atención y profesionales se realice en la nube.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DIs5-wZ_JJ4wb-yVrDSXjL-MPuppXzWJotqdWAAk7BWGgPLoT_VHdiOsp0WnlZj6_9MLPNtgsFAPClymYdd5n2skZYUtUo5gKw-FHq1rbvCtqr9V74tl_ZAXcH1-PWQUlvRPRww=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Cp8ta6QUWoFklbvGEK8JTuE3g6nztTQ9wbleUMBYq-An6252TxgUecG7QO9gUvELXdG6DXuRo3AD3IgtiI-1IVHbltZjOhs35b60QAKVULpRFsGgjIqKX7kxBnAKs_MPw1XN3Rw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3arBtPtwmYYphDnwj0kZ8h-JqS_dtr51og26RxmeBqpOH1YPSgMHcWp8HocEFDBBJF6MfUmeEfExckAs_WqnnjI2dYM2ke66j_Zn2rZX2n31vOc4k0CB1n5oxwYMY1QiSP6-Y8=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wq_JzsojO68fDEGT9JVtm5pqlCsfbKZidB9hQPYwqtnz-VOOtNtjFFXV6KfcLOI8segJGQoTBHnGcdV99OogRcb12RdSiZpwqn9MlOm3uYV0fXDNA5rhlNUO0gcIDJZG_iwXuvw=w1280-h787-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Solución Propuesta
Descomposición del dominio del problema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Y7Qd366DBQ15j3mE9kp7SjpPe5cYak5PNCUVy-MwjRQpX9N1yAsujD-6cZ7mso21w9c2pc03AvHrWIx-ruktV3IYYSbIdMMiddIFev0nHqC_I8SaNMe28lneyP8A033-5RKU5=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kbCjlgV4VUz-ZBgdY2cXNsmQ3ji7e3q-mdMYniabjbyTz6PlnI8EmcHpW5oVW-W5jGxusqWrdvSrg0bGSxOhVc_Ns115g8ICWfl847uRuH0NiNYQaDJDSKIWKUrlcu7Ykx8IOhw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03oCK-lPOCU8wncw4zyYofc7LKsYNWZLDI9CHNucC1CdKlxBb5hRT4zYHLzsQYWvBUbJCyksYv2zeAUz565Qi9GAkBTNkr-DDEKpiybgRWV5lYqKOHPah1MQQOEFN6y36enX6S=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jx3P06BIj-kKqcj2DtBgaA_1-vOUtGYhBPo1_cE0GMndP-F87Q6SedmI2ogEc-xp5GDsKKrEvLi8V5_vaKEIiIkKqMCyvTdyZYMOfByV_6GpXOvQzMJtsynIpE5GHl8T5O-K1Fw=w1280-h1202-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
Vista Arquitectónica de la funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JJpK5qVGb8saJoDYFibwXAs4olRMUIHNec26KPMhspzcSUYIEBuSRgBa7OAKChxodFnreY_goIFPaHeYwJqbvQNoCXbfYSLUBq6mFEGyQnvNAIvEI0VtEyzH2KlPjuJYPcdCfkQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pHWoiXPkRRNOJJBiyJfef0uGx30C8Y2HvwLHyiI1CVuOILLqpj4iSJ4FX0CILwhWqDcvWxFoSfP22phN2x7DEcwgf0zkpAMz-ks_d6HIqfkQQlktXUZjsFb_1GmLKv2tOMkXx4Q=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m5LjEdIT43jT79R4hQ2Y2gfczJSypen2KzpboodOTBaHcsnSkuu8UyA1UvhWd7PoMYmwn7rfAJRdprIvnwgsHDBAmpB2e7j1B6NlOvnmQW6QzrzwV5YnSkltYeYlDDmoUp3w3oQ=w163-h170-v0?authuser=0)
Consultorio de Salud Mental
Diseño arquitectónico con Microservicios
PPA Consultorio de Salud Mental - Microservicios.docx– V 1.5
CU Justificación
6. Registrar profesional 7. Dar de baja profesional 8. Modificar profesional 9. Consultar profesional
Son casos de uso que describen entidades con ABMC representativos, determinando los lineamientos para la interfaz e interacción de usuario respecto a la definición de ubicación de botones, validaciones de los datos que deberá ingresar, entre otros. Determina decisiones para el acceso a la base de datos para la consulta, modificación y baja de datos, como también algoritmos de programación simples para lograr manejar la lógica de dichas funcionalidades y la correcta sanitización de los datos que se registran. Cumple con los RNF 1 Tecnología Web y RNF 6 Web responsive ya que se deberá utilizar un lenguaje de programación web y establecer la estructura del software acorde. Y cubre el RNF 12 Despliegue espejado de bases de datos en la nube ya que se debe resolver la comunicación con el servidor que se va a desplegar en la nube.
2. Solicitar turno Modela una transacción web representativa, ya que determina la manera en que se define la interfaz e interacción con el usuario, algoritmos de programación complejos, acceso atómico a la base de datos para su registración, definición de rollbacks y registro de un log transaccional. Cumple con los RNF 1 Tecnología web ya que se deberá utilizar un lenguaje de programación web, RNF 6 Web responsive, RNF 2 Notificaciones mediante correo electrónico para resolver el envío de mails con la información del turno y RNF 10 Certificado SSL para levantar la plataforma web.
16. Iniciar sesión Da lugar a establecer las decisiones respecto a la autenticación y autorización de los usuarios dentro del sistema, como definición de perfiles y visualización de la información dependiendo de sus permisos. Cumple con los RNF 7 reCAPTCHA para inicio de sesión al deber resolver la manera de desarrolla la interfaz para poder comunicarse con la API expuesta, RNF 8 Seguridad de usuarios y RNF 9 OAuth con Google determinando la manera de integrar la librería necesaria para intercambiar requests con la provista por Google.
3. Registrar aceptación de solicitud de ausencia de profesional
Actualiza los turnos en función de la aceptación de una inasistencia de un profesional Da soporte al RNF 3 Notificación SMS ya que se debe desarrollar el componente que hace posible el envío de mensajes de texto y al RNF 2 Notificaciones mediante correo electrónico.
26. Generar informe de turnos asistidos por profesional
Es un informe representativo que permite definir para la lógica de reportes y estadísticas la interfaz de usuario, predisposición de los datos en términos de grillas, el acceso y procesamiento de una gran cantidad de datos en base a los filtros determinados por el usuario.
28. Generar estadística de turnos por estado
Es una estadística representativa que define para la lógica de reportes y estadísticas, la visualización de los datos en formato de tabla, la generación de gráficas y el cálculo de métricas de una gran cantidad de datos en base a los parámetros indicados por el usuario.
15. Validar asistencia de pacientes
Caso de uso elegido por ser el que se instancia con el tiempo como disparador y desde el punto de vista arquitectónico es necesario definir cómo se controlará el tiempo, para iniciar el proceso que verificará los turnos ocupados y registrar la inasistencia de aquellos que se les ha vencido el intervalo de tolerancia.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kOO5LsoZJVPQY47aA00Og91Qd92B9ecMAT-fbFxaR323LdfM4vat0vKNG05XFbxLm-xC8NIMcfplm22mG6IEOwbufo23JAxsZQ64hhzH0G1VRBbRARpemm_iym7qlozcy5wotfA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HuFTjcyfnUzeJjTl72T9mwdUOy6xLmD-BIdLgre0egX3sA70srxPooQerVAMuDg3inzUetHqhSl7Qz4JCbrJszHCp_WxUgpC5wtBNuOaeoSv8pxFxrkXTTDStAvMpG9lpdQhmoA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2q_92a4XF7MmXofpOBQK3FusKaSELEoWMWOF3DgWVTWTBxrnKn0tm82E6DKg3waQXp_u7b9ZOO-LjyD7QUphcoAOCbQEHIqCNZitQVSsinJQ7jPM1Ly5UdmUfFC85AGsdDODTZQA=w180-h257-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0509QJT1XABcH9rJkS7gikoA3c5tWcm8-d6yN90Kh9_rQfljzkuvpax7Lr224WYRQLVgNfGjXQD5gHPdCxZQ-JZULI4lpklzNdl_80dtcTVSiXqnI6bdhHebGvZJD1KNRFic_5ig=w1280-h1156-v0?authuser=0)

### Ejercicio práctico tipo parcial 2


### Consultorio de Salud Mental

Vista Arquitectónica de diseño - Diseño Global
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05b4jw9KjjnwUjpivFb-Rb-6RjJyxbYAvZf8SD02m-upik7ebjn1RqBuXe2zeyJdaaAwIiE4x5SA9SHy2RpnjjgWtiaMTtLGrFDExxo6bg2-EJHNw9hoGsdgphZozKgxkdArfRIw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zMkm_sQRRhfVzgPCGAH4Dc7vokWOClFCHsHKfk4OeZYvPpSKXfGUCZjrRTZ9z6HDMg4-phgrblJKMXgF2iL6GrAl8g1FLps61hpUB_g1PV7yzbAE872YzrwuIIGIWLCjUq69IpA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2S2UXZcX-_aAq6HQLqtuSbhkcpRigRJfL9a0j0PFRvD3VmMeKsD5LCnqDJVid6c2j_7E_Yas_LuoAPr4YvUpwg0orlSM7jy1px8eccvW-mdqnEHWtr4ZJ8yR0UCqLVP0tN0OJY=w180-h257-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fMX1r4MQ0Bf7w4JSrKIOJUfT2RPOGnVtOMbHgW2W0qA1IsvW4xa_ldnQ0VB_lZJ4FUI7pDJudYnok6AdGTok4O77WM__zL65dc-vZbrBURJ6M-Ln6Q8vghDimfQo25IDTWPUg=w1280-h610-v0?authuser=0)

### Ejercicio práctico tipo parcial 2


### Consultorio de Salud Mental

Ciclo lectivo 2026 – V 1.5 Página 15 de 17
Vista Arquitectónica de diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SUoxIDH8yibksRbuGkK6GlZAGjas4UFkaSNoTQlItLhsiclas-LoDhj2i355tDs8CXdqGIZzaBLz7UfGQ38JEtQKbBGrMJOZ3hFBEID7FcUJ0D6bs4j2AVYG1VSUT_FDQIBmk=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kTEWu-nr29TS7S7_pqFZjNpmcnFyUmxXC_uoxJ_aL7EeduSsKiT0LQJscsGR5VGeUPXALwLrnfpXtGqribCF8jG64xdb_ixwte9A53pIRsI6np1HNP3GaHBfRe4AqU3nELagbDQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m2qUMm_1nBCjYqNpruUxyEH6jkbnGLXNrJIHenugCFHkxrtrft9phl-Nk8lcHlFsrB5skNdGIQ48esIFuUyceVIGNwGQUubiEfjP5L_XB_6HQWMdtmYScKZWkUDf-Lcezm6jQRA=w180-h257-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-66GvHD9jyhei4_EQWgwV56k0saBduOLS8WRHh8DN9l1NCF7iNQRptRC-SZq1V8gPYmDcPp1jVxB22hclx_YAT39pumcQcMQEOsjtg8hAKognwWluuL0DXXd0W7H7ZkqV0VuC=w1280-h615-v0?authuser=0)

### Ejercicio práctico tipo parcial 2


### Consultorio de Salud Mental

Ciclo lectivo 2026 – V 1.5 Página 16 de 17
Vista Arquitectónica del despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sCAzXrRJVHr8fgdVkdWpHhBQ3_86OSWj-yuqoSh9UuCvhgFPNLAF3glDa6v4oBEt-AXRRZZqN_J3yZEl8UGsAgJ_LQgmoX_mIVG1iphM7sF85XHOR9RF7BXYeFNX28EQcXvWn=w1187-h839-v0?authuser=0)
