# PPA Consultorio de Salud Mental - Monolítico - V1.4 (1).pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla un 
Proyecto Práctico de Aplicación
 para el diseño de software de un 
consultorio de salud mental
, enfocado en la 
orientación a objetos
 y la 
arquitectura monolítica
. Su propósito principal es modelar requerimientos y soluciones para administrar profesionales, agendas mensuales, obras sociales y la 
gestión de turnos
 de los pacientes mediante diagramas UML y patrones de diseño como 
Observer y State
. Además, establece pautas estrictas de 
seguridad y usabilidad
, incorporando autenticación de usuarios, validación con reCAPTCHA, certificados SSL y adaptabilidad web.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rmK-AbCCUQkUSJGbrixELZ7sMh3f-4eqIWkmjp32o8tQLr_bSxgyhgWF4MvZK7KzbYMDico2uFRIfHP_rUQPADHjmOJl5U90E2GCVZdZ3cDTItM58t_QNZoUeP04doiKIyhOYNw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nFlZNKiqIHHHRkCFLlH-XehcsppQF-Sli9rHAATZJq4itK8fLnMohtHqRbVpFO20SjqTYPNk8CVosYHpoT0zmkCXtNNgXjZAwAtRzhsQTBXk5i5PhtzpjYBu5cZnufxN66kwTow=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


#### Proyecto Práctico de Aplicación (PPA)


#### Nombre del Proyecto Práctico de Aplicación: Consultorio de Salud Mental

Objetivo del Proyecto Práctico de Aplicación (PPA): El objetivo del proyecto es desarrollar el modelado de un software para un consultorio de salud mental, a partir de una descripción del dominio. Sólo se muestran algunos artefactos resultantes de los procesos de requerimientos, análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se construirá.
Objetivos de la Asignatura con respecto al PPA:
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0r2D2uDylbeOrT7Yk8TmL4xeDlVSTXb9cWhF95a2ksiYZ1OIR5izmuwurKONJE-S5hU6nM3rxGdqRgD-6ue0abAiGNvu9u5LeE8w9_cUWVNwzBp5jgHmrOSQK3TAmaXV0uf8v8qg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3d1nA6IZT9-lixhO4ijD907A2GH1WrusSBIRbSKU2Bl5HIHB4NUi-DKWoS29oLueS0naxR5w0aDIBQewLRUTCD9juE1oFte-zGf89GSpCYyxzWnIvNve0GwjDPSgW3Tj8Whd_mUg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SWPHQ4APj5taEUgn4RPiLFiwvIDO_Sc5VYAXvgQW75LewovoRnRVhKRQP97UUFiTvsvG3QNHAyK9u14jyTdJgOsP9aiZuOF_oGlmbsIQ3sLDk9Jngi0t2mgAnpbpYTsAKjxl3=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZhfrhqDGRmMiQOYSvYUAZlBsZYBQ0NqjInNrK-ikGGnoE0dZKn94SoJ9V0_wLrAQ2gn5GVUBWEhiU_jBjAQK3Z1fKQTIAHPgC-VPrPP-D3ol-igv7yTOsCJafJADaRUxszqGU4Q=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Consigna asociada al Proyecto Práctico de Aplicación: 1. Elabore para el caso de uso “Solicitar Turno” la realización de casos de uso de análisis aplicando patrones
GRASP de análisis.
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
2. Elabore para el caso de uso “Registrar aceptación de solicitud de ausencia de profesional” la realización de casos de uso de análisis aplicando patrones GRASP de análisis.
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
3. Construya la máquina de estados de la clase Turno, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones: los métodos y cuando aplique, las condiciones de control.
4. Identificar al menos 2 patrones arquitectónicos relevantes y construir una representación gráfica de los mismos.
5. Utilizando un estilo arquitectónico monolítico, construir las siguientes vistas arquitectónicas, definiendo para cada vista el punto de vista asociado:
Vista Arquitectónica de la funcionalidad.
Vista Arquitectónica de Diseño: Componentes e Interfaces
Vista Arquitectónica del Despliegue: Nodos y subsistemas principales
6. Rediseña las realizaciones de casos de uso de análisis utilizando el patrón de diseño que considere adecuado para resolver los problemas de diseño descritos a continuación. Modele la vista de la estructura utilizando un diagrama de clases; la vista dinámica utilizando un diagrama de secuencia y el pseudocódigo o una explicación textual que muestre la implementación de los métodos involucrados:
a. Realizar el rediseño necesario para crear una solución que flexibilice el modelo permitiendo informar a los pacientes vía correo y sms cuando se haya aceptado la ausencia de un profesional.
b. Realizar el rediseño necesario para modelar una solución que resuelva en forma flexible el manejo del comportamiento variable del turno según la situación en la que se encuentre. Utilice el patrón State.

### Glosario:

Término Descripción Agenda de Profesional Es una diagramación que define para un mes los turnos disponibles de un profesional,
que se genera a partir de la definición de horarios (días y rangos horarios para cada día en los que podrá atender), informados por cada profesional.
Servicio reCHAPTCHA reCAPTCHA es un servicio de Google diseñado para proteger los sitios web contra actividades maliciosas o automatizadas, como el spam y los ataques de bots. El nombre "reCAPTCHA" proviene de "Completely Automated Public Turing test to tell Computers and Humans Apart" (Prueba de Turing pública completamente automatizada para diferenciar entre computadoras y humanos).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YgT5dXAW_1H_bmZvS7S7G0pPLZUXI2yCS-gnU9ppGeytvC-7EJTcKy9eRU3EbvEaDF_ARlYSwQiSnqGh9WhCj0TgkcPAEix-imDdaTF0DJH0mLVsUEvt3yS03G1iUEkOla9OqzQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LwLjPv7a9brADjIpODZSWCYsxUVZvdwl_1fQ3j59M-XPAxYhkJiMyvfiOWUkyLICIf1tMNlH9ZW7v9sPVIoG5OmbyvJ8SrrnulKwtut8OaWWd4JqR3c5AY9gUPcE8nvQgviR_=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KitSIWmemAEGwuNYx2tNkjpwLEMZJU1Qv8trshO05HiO3X4yZax33y8DH18FnelmaFhUdzLQgzQWlFeVqpt-i8O3D3VYhUzWGOFb3MkXjznsV-xVSNjNE4r369pD5LQspyJXO=w740-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19aKowh2wP_7u2chQrlT0_QiDvWYG83kTQqdRe9Vki48fy0L_iJPnq-9nNAM7Log73hyvbuJRwNEjWfIsNj0NylY6qcjX-XuY7eeECsTVcvXS__-Z_5ybZJdEQ2ea90YpwtUze=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07d_Okj-NSMCBDl_1re-4ySi0ukVYOp-7f5gTQA8WDuDjp7tRCiw877-N6Yqjtlf_VhkK4wb1oeiWwqntzqX-0XCcN5Cbi737bQ097E6KkQXHxW3btI64UIadl8lXt2XG1-IvPgA=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Protocolo OAuth OAuth es un mecanismo que permite a una aplicación o servicio solicitar permiso al usuario para acceder a sus datos en otro servicio en línea (como Facebook, Google, Twitter, etc.) en nombre del usuario, sin que la aplicación tenga acceso a las credenciales de inicio de sesión del usuario.
Certificado SSL (Secure Sockets Layer)
Su función principal es cifrar los datos transmitidos entre el navegador del usuario y el servidor web, lo que garantiza que la información sensible, como contraseñas, números de tarjetas de crédito y otra información personal, se mantenga confidencial y segura durante la transmisión. Se instala este certificado SSL en el web server, subiéndolo en una carpeta en dicho servidor. Se suele subir con programas que automatizan este proceso.
Web responsive El diseño web responsive (o adaptativo) es una técnica de desarrollo que permite que una sistema web ajuste automáticamente su contenido, estructura e imágenes según el tamaño de pantalla del dispositivo desde el cual se accede. Esto garantiza que el sitio sea legible y fácil de usar, ya sea en un smartphone, tablet, computadora de escritorio, notebook o televisor, eliminando la necesidad de crear versiones independientes para cada dispositivo.
AP Actor Principal AS Actor Secundario SPA Significativo para la arquitectura N/A No aplica

### Descripción del Caso

Los responsables de la gestión del consultorio de salud mental han requerido un sistema informático que permita llevar el registro de los psicólogos y psiquiatras que atienden en el consultorio y para cada uno administrar sus agendas (días y horarios) para la asignación de turnos para los pacientes.
Profesionales
De cada profesional se registra su nombre, apellido, teléfono, correo electrónico, tipo y número de documento y matrícula. Se registrará el servicio en el que atenderá psicología o psiquiatría. Un profesional trabaja en un solo servicio simultáneamente que puede cambiar.
Agenda de Turnos
Por cada profesional, se establece la definición de su agenda con la duración de los turnos, intervalo entre turnos para su descanso, los días de la semana que atenderá, su hora de inicio de atención y su hora de fin de atención. Para cada mes, se basa en esa definición para determinar la agenda del mes siguiente y se crean todos los turnos como libres inicialmente. Se puede usar la misma definición de horarios para varias agendas. Las agendas se generan respetando los horarios definidos.
Antes de la generación de la agenda, cada profesional debe informar los días y/u horarios en los que no puedan asistir al consultorio, para inhabilitar los turnos que corresponden a ese periodo de tiempo.
Las agendas y turnos del mes siguiente deben ya estar especificados, de manera que, a la tercera semana del mes en curso, se habilite la agenda del mes siguiente. De esta forma se permite a los pacientes que puedan solicitar turnos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv214C636Jy3U0u75HcL9KwKQ_MA7QHXDMEbfyT6Il2buV6GlLH0VCfySCnxC6alnaV_dV0UGQ2kLJx0OmN6VcZ1QHrzMVaFex6NBlRDYGzlU3QXvk6SQiyz6pdjyyaz9-STXRqb=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QDKJYgcVhV7Hqa1e7HPYbaGPOtRIzGpTjucyCIq6fuGXxbNWRxQqZEr_xQIQfSJSM1dzdNYFdU58pHWEc8fNAcRFj6r3bv8p-M_ta8HcldckCX8HZzN5QTu5ONn1Z9mQN9GVQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0v5owOm6-QcyqAAjbsHzNRDH6HUb0_IQPoWyqOXfIvcSdz6Lq_dT4RI-Kyf341K-D5G-nVeej3E1U9X7aTbMmYjqnHDi1rlqEbLm3Igkz8iMFUcBlTwn0mDcYpfSS2WwpmPeexUg=w740-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_JlgdKM66QbtYEtNrB0s5L787AFsgcdghK7HhpE4nLhYKC391BFeEs7D3erNn0Q-4CMf2V-dASTl3ki8iUoKRYgLaO3thaP28RShR3AuAjE0Gaup6TfxgYKzYecJ8BNKtISxV=w740-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv149FB7W-nY8JOLxk95NGvouXdMUwc0sElzH9fS--C3Fjyk3y1TKNVnm4HKscAxbqtUNDTpsgkygf19XghOopDtSV_XibbYKkCxW6uFAUKse_w3TxQ5TZTDr-aKjIJ9PhsabA2z=w740-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JxMVPf-O7Jo3lJtJwSbJGRmul_MslWFjyh5S5Rio94BBQ03WjrFioMhqgQMcnLl1jmur_R6pF-Q8la_eCG2UBMBi2HLvqDDYcN9T7go3opDTgRUUDwTMhFBQhM9kIKmUSU0f7Wg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hy5yCfdgQrJnczB5YzlsSoCr13bBGTcy9uEJTBPwKkLvgTOVvfnBXLz3-toMKcQsPlEQVj0dZ6lybacbb__w6hAvwlImJgXL69TcCrA4DxF_qpM5BuUc2OVmvBj2D4H8UQzbd=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Si luego de que la agenda esté generada, un profesional necesita unos días libres o unas horas de un día, puede pedirle al encargado de personal, con dos semanas de anticipación.
El encargado de personal analiza el caso y si es autorizado, registra el rango permitido en que no estará presente el profesional para indicar los turnos afectados como no disponibles en caso de que estén libres. Si hubieran turnos que estaban solicitados, deberán cancelarse.
Ahora bien, en una situación de urgencia como enfermedad o situaciones de familia de último momento, se pueden cancelar turnos que han sido solicitados u ocupados siempre y cuando el paciente no esté presente. Si fuera el caso de que por fuerza mayor el profesional no puede asistir y el paciente está en el consultorio, se lo derivará a otro profesional lo que no afectará la situación del turno y la atención del paciente.
Turnos
Para la solicitud de turnos, el paciente puede comunicarse por teléfono o WhatsApp con la secretaria o pedirlo directamente por la página web. Si es por este último medio, deberá estar registrado el paciente con sus datos: Nombre, apellido, correo electrónico, teléfono y obra social si posee. Una vez ingresado, podrá solicitar el turno por dos caminos: Puede comenzar eligiendo el profesional por apellido o seleccionando el servicio. Una vez seleccionado, el usuario elige el día y horario de un turno de todos los que se tienen disponibles y finaliza con la confirmación de la solicitud del turno y el envío de un e-mail con los datos del turno otorgado.
Tres días antes del turno se envía un correo al paciente para recordarle los detalles del turno y solicitarle la confirmación o no concurrencia al turno. Si confirma, el turno se registra como ocupado. Si indica que no podrá asistir el turno se libera, quedando disponible nuevamente. Si no realiza ninguna acción el turno no cambia su situación hasta el día del turno, donde se registra como ocupado. El paciente puede liberar el turno hasta antes de confirmar, en ese caso el turno quedará disponible.
El correo que se envía debe de tener un encabezado con el logo del consultorio y el nombre en forma de imagen y como pie del correo, los datos de contacto del consultorio.
Cuando el paciente asiste al turno le indica a la secretaría su nombre y apellido o muestra su QR para que sea escaneado con un lector y automáticamente se marque su asistencia. Para ello, se deberá validar que sea el día y el horario del turno para registrar dicha asistencia. En caso contrario, cuando se haya escaneado el QR se avisará a la secretaria por un mensaje en pantalla que no corresponde el día y/u horario del turno que indica el código QR.
Es esencial marcar los turnos como asistidos o no, para poder analizar posteriormente no sólo información del profesional, si no de los pacientes. En el horario correspondiente al turno, se considera sólo 30 minutos de tolerancia para la llegada del paciente, si no el turno se marca como no asistido.
Administración de Usuarios
Toda persona (paciente, personal de consultorio, administrador del sistema) que quiera utilizar el sistema, deberá tener un usuario. Deberá registrarse con un correo, teléfono, usuario y contraseña. Para iniciar sesión se deberá completar un captcha para asegurar que es un humano. Para eso, se utilizará el producto reCAPTCHA de Google.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1A3PI9G2uWxy9YjKZ7zLjnZJFJRpfxQnIias42lQDjykm94lfCGS7kXYgyd6Vi9yx4GHs0xMbQXQUEhc25-6p3Ia7s9F_ohtl0cvqcrg84q74dyNtLOZKHVcCn6yh_9eHcyCh0=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H6Y9LHvAJxVjDkQAQhwMChQW4vo0D-ncZIlALka_y5kmMl7rJewuJc4ooW7175vcjuwKBBMjed4yV540pgtPYuQNB6IlwbE0S193NAHRxFM_zX6VMvQZM3Hl38uUWuL93weD4iA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TbGJKZCch0u07JmdP2vivMDTcE3UX_uLA-2_6fALmCh9-gIWu3K3uwk5mWzQAXmfmi3m_1IgJnWzDxjPoO5PAh_y0c4dazMmIpPjZXmldVbpKf021AeCmiO8bpVF3zrz2uGHD=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H_oriYQLBer2_DeeMWcZ6qNMB5x3m-26SlMapMFrKr4lm-Nf4IF_7HxNkrK_WCvhRsKVViFPrJbMB4oaaqHifMIjyf7plzVCe7xDLyMpySA9N2GHqkmYnVgBG5oS1vqSNdbf_BQ=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Además, los usuarios tendrán la comodidad de ingresar al sistema mediante Google al utilizar la tecnología de seguridad OAuth 2.0 de la que ya se hay disponible licencia paga.
Infraestructura
Se pide que el sistema sea, en su totalidad, web. Es decir, la administración general del consultorio como la gestión de turnos del lado de los pacientes podrá ser accedido a través de un navegador con conexión a internet. Además, debe ser web-responsive para que pueda accederse desde cualquier dispositivo.
Se deberá instalar un certificado SSL que el consultorio ya ha comprado como medida de seguridad para proteger la información de sus pacientes.
Las interfaces del sistema deben incluir la visualización permanente del logo del consultorio y sus colores, que son celeste oscuro y gris claro.

### Definición del Producto

Objetivo
Gestionar la atención de salud mental del consultorio mediante turnos, definición de calendarios, el registro de obras sociales y generación de informes relacionados a turnos, profesionales, atención de pacientes.
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MlmDnx25iN_7ZK1WnmQVDY1FiT3ruZ2StFkdgq2p31P6ckWsm7MFbKJZ9WZ84PtC5Pgf7G-9BRjFpy_QJsN_DT1IQvw7ehqo4-855Se4Ye5HMQRqt3JwCGNyAZ_8odVL6CXvURQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gjkvMTbTGqL6HH1XF3P_QFb72MhPGXrp04s2LGvVnT3GcZ3sv8EkIpNTe1vubtuUBFS-QL3earOJmsNlUty7scYpmvNP_CL3dnuzcVlvQ6zSWRj1g1mwGTt9eBqipSrVaDxFACQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jsqgevTfxJp1aqF1xkA-vJhNlWDmF_jZ8xoPhmTsz4wtkEBGpqX7wKR_HjXMCz25Opu106RLXWQcK-zEGrvK9bvVYnHuQ4CFLL2B7QaaNirgG2CNwJcOvJukIDHL3fiS66DSj9g=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZwyRBsg3kUNK4LDd_5aqvoTpg5PMlbtTAUqEy9uqXudR7MQgKCz9gKEuTp78d7oACjRS36Wxf5MSDs1DIcwznPIiue4hER11Xpbx0vBrZQrvJyLUulwVh3n3kaPQFE3N8ePoWzA=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Reglas de Negocio
Nombre de la RN Descripción de la RN Ausencia de profesional
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1St-3kWS8JfMfb3H_iiKJWgHUGDT544-9sLvGzM8Nbt4_dQGiOl9a0V4DzHyswrVwSCt5GKlNnk_YZo5OYwuz9DzNXhEASIPxmF-gBD2XqUUnOAV5h7L3yWYE1jx4HJu7B3tXe=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PBM_fZY7QMR72zdWlb1lGXTRKcdX4MT1TkBM4clVeALa2N2L0dkeeNSwVZe92hwNZrka4jiDOnXr09TG4qJBjMh-FMyFmjUDxgosgk0F3VXZDdv4lQtVjjGbETo9q-sLtz8X91A=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16my9uPsnLBMVsPKgxm3IbMqVEErlPxfE4uNJ5CThQGzhMRzKzJLcz5yHr8h6MyXS0VSgBWf_drgCHIc1zi6CfAg-Ggi6gw3UTsBwAiKlpJvIvqhH1-yF1AJKceGTwoRMW8DR4ug=w760-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3asyn5iUv-r40hJ_zT3XkXdOXq4s-qhiIio59WmEyrGWV_6lupDDkfovZ-3RzBfoFNoPuYIIJliAtbOSa8LRQIH9_zGkc23YEz-n_1NeyBZMjQTHP0njYfv-xy5zsizbKFp0HFIw=w760-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1012ltWtflmJXIypzWBmvG0KHaLkKAq7k6UPVM0VrXO3svplKcV31rp2vP1JAsrYxweoPwLGLMnA5UeHqWAOVlMI7atXP6Mv1xltapCG-YM1oVh1uW6ikQJRreiClzgiwBMiscGw=w760-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mI-Maw2Jmjk8PUAfmkin2cJDA8iPHUYxXirD55g2iFboiq42onv2zc-yA6RbE2jztb-GXDZnLMrb90qO69kL6Ci9yAkHPPlcsvyaXgsx4yfPzD3orXwluKWM_wWbce7c_9CF3fA=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ShaqRj8c9ISLyYv9FQWIIFM4W3rVg95teTHwQzHYjituaBx5itt_6eyuxovPPzk0X8FU689-ZBFQtd4ph8F2iYBeMFBZKn_u-lw1SAMCOE3Qk36WcPRLAOSWxIIKIHlbMK7aGrA=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19kM1Fs2Bld_e-JdvqlRfeu-ZJ8jas1iGj60ttgBovH15Pj5MfOuh99SuG0PDkkjhfnYuguD54FcMLS4y-ogrQPUK_NQqdbEvhcPSCTZAQCyYSWygWGss1An461H7UV0RBdGMfVg=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dIFBMlqsUuCSRYSa-Ue8P6Lkgt_xw-e-2PFsK4g0fL5RH-8NSAIwI9nLlb5spOfU5rdqb9TdSI0KX-19kMXVongQJ_59Ze3qZRXZVPlTHNJv4AYLmeWsoDhfK0Qu5iEnPoXjw7w=w760-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22Apsxf8LzhDjMQpL9xMEhNyuBugVVG_KAlMgwoFIUg-CHaksERbuQSSk-W9npZBdsxiNZqZx6npiwJ4qC5y7WKX6T5WK9EllIL0m5EIpK9XD0sAsUOTdc_D_43J1EO_99JKqxAA=w760-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Q3319389uoMp2OvkPqySXAFYyJgO5TLrwcTzcPazw5icjKHGKfJDSfi7NE5MyTK-n7EeSx4z9ybE6o58uUM8qEjLOTltfJ1-ZrLH657r9G56zCWDV56IKrTgJ9pTwCijx_PpuKw=w760-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Hn9rELAij_xXf8I_jC61qtYtJunFfwIySeGiF0rfcqlHqYeX-wt6OCxB4xFt7P-ED32T_kcKkw4L6AFX2XMZ5CWMxjYoBBvr8IOBjLrGmN2Dd2uHTdlvy2hcN7lbHFcb0mNto6w=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zkWMpjtP6TebDO9SWNst7F-3dr9Jd0g0IMFDzLI8YPUJ_ojV993P-DDf8L6vXWY_fFty32Yj8AWpEXHhENbB0ViTchr8RgytOeSo3kvrnduREh9UxFgMaRiGZFGBw4u_nxQPZ=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Casos de Uso

Nro. Nombre Objetivo/Breve descripción Actores 1 Registrar no asistencia
de turno. Liberar un turno indicando que el paciente no asistirá.
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
11 Confirmar turno. Registrar la confirmación de asistencia a un turno. AP: Paciente. 12 Verificar turnos
notificados. Controlar los turnos ya notificados para los que no se registró confirmación o cancelación del turno por parte del cliente. Este proceso actualiza el estado del turno cuando llega su fecha y lo registra como ocupado.
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jGD8NizeFrbEtTjQU51udwaw-fz8M3domt0TayM6OTpqwG-zjd_JZKlSyBPml6vlAh941Ds6jI8Y5q38jpRsnCMIPQyshlDEZ-KPeBDQroRWSxMvLxm2xr2HyQtkRzrnG2gAqvA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21pd-tn2UyuvCp-eo2NiZpINM5OFn-nDSe-w2-v4G3KCSOX_LfjMgWyZwG5bsNZns1yz2MY9xqFqec4pEe2RoFzZ1_yQAhbzJ1pQZtxwHtJrokDtgxn6KzgBASofvc9uGyjonA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0moluxpKu42gKpQv4DvdXbuMWxpcDQE2fy8EI2yPn4Pz8Exj6VQyuYvAWzQixchcjHYP1ZJWnIC5tjlqxw7M928QsjTjEhkqnwytEw--p4_L4y5YyznbRC78IqnkE9ZCdDdgku4A=w761-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YiIKkWajW5-h5XkIQUrmhnVIkD2q6ZV1gUaRRZ72_fuUx4i0VpaJ5QS2Ub_e0UrFr4t42d2uzSpmfjvp539ZEILFzBy6_i4iOw7PVODgmbvFiieo1ulf8aRnYbLumibcI6K5d=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DjDMzItFPUBEZTbq_9JHbdk79NFOtf1ECz9LEUQR0vl9-dlsF96p7dcbcdPl54rMywzznviPZCuaO8kcLwaRWAWOw7K_dwwdld-RNkyX5xLc4LVd2-Dq1jhOJeiGRyzHk75amXQ=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RwohtDmiQTgv3CK8aSxfmiadRmbQ6wXEcnlN03kxPMpvTeNdjQHHn5Fotu3xu6-UWBfJ0woKj5jaJIiq86ApwdQL8HkAEs5WJvuUmABRy0TYbTQtk6wf8J0D1uLWwgOPvwR9S7A=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lhxaLaqHglziArDx7pj2kR8A6pILrgavHzTVEaX8CZadkd4aTD53oxDFNsbWGvKxfS7plTE4Uz4HLjDXmJoyNZu-uMHe8DaMgRgzATd9U5VBqnFf-TP-xudGtq_8a7A8dYn8hmw=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37iujqd6l4rDpXVyKazGj9y1qGnMmIYYDS1XoXKl2iDCsYFBz3LSJCoRKQQisr8WiYeyIfm8MdESAAg01wswrgQ5xI993SxeD56AANtczR4kGDazOvcjPCJS5mbOtsdh4DLxLHhQ=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ti1_9lIQ-KJ4XJz5mbUXqrNz-YBTzhBy63q4X9ktM9-bq1B0ZYhFNNILywGstYtnILr9yYIZtxxCcFI0TZQW0DS_vuonQ0TLQo-SCpGwTzIyaE8tXhLMoBgkvUZeh9p0ql2JyQA=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JvhW6YDPgNKcBU45hHqwjI9zAf9kNmri5dPSsL4pmincUHvs3UqNmrQE0FazvvQuZgzgdu5t5fr3q6g9KgN5F6ZEYwhruvVv-S8Co74HCtEiBKkD1_jt1dPRJzTZISKiIvZOY5A=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MwQpFg8Tkd2x32ZR-vYns48nDS1NGH9U-HLhgkR1cHT-GKTPOj5AAr-Os3fa_9QNlLfLTYm-4yNN1JDvE4BLfIr1ajQ5bU9r-nG2J4dAuulMbFLZzJTkoc1BXLiskUSVmgIeIaA=w761-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HwclY09zKSjWO8lvh7Fep1BkQKZf0jI9XS5YENxlpHx2VxpwRxgVij0mUrAA3emEHuycWzsQ51lbFiy4KozHTG9a2czhlzob-jy5RAHDZl2rHK44Y4fNpAVyFqYd-wYsuMjWPlQ=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CuoXWge_Wss2hP36IVIoFOo_CacvdMFQI4yUZmCnE8ziNx0DaaDqrytZVxHsCr3_UIp2QL8OGLqZgb-azKwegOzKgcdRdJMNamAQYLlyBlKMg--ngO8W9xz0R2Ro-1magx-6C=w761-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qRysgXpKPezQ9_cGJ8_af-XACYiqryUqUXVmxGC-ZjhSVbxdU-o5ohZ-l0MBae_HKRH-A4o8bIgBpo4o_nLFmrDM1xO1nHfkpCHIS3jDIEuZJegKWfvScHEvTRHW42RZQZL8kpg=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kqfn-3_IGSxHtSh3i5qaIhNPQVzNqvG2YUxhqJb0fQZvmRCAIwvCUBFBspHB0uq4mD98ZWljpTuzhQJICtASCllyh_1rVDxWfbeyJ1P-CfbQrowd-BuuF_Gj2HFuLOBtWkrq13A=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JhXJM6cEckqOQTKxKF2d7wlpsmnwmZwyY6fdofmtDQIwWLAKL47UJad3YCSwyDLy89z6hzs0PIK2xWJItXWZjJn3eV61vO22mmyGpsB7XMmB0cVYSCJyZDmgnARK_n7Kl-zXIEg=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IFNWLQMqvZqD5gMybEIWdXnDWMas_ERsQhaYi0C-_XWzDGyZPUORoJZXTiuA5l1lVTWD6qnVpAZl9uHAn_RErY_2RPm9HiC1GUYv7htZnYLglrnHEbEoO1vC4R_uR224I_NgsPw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0r-KKwOJ1ELvrwTPjuO00BBELPnobWsQAUWh2BBcsBwBMALjrsuree5Ur6EfUiAaYiXc8v8iPIu9JIfDjuUEGDYb72XK2q2DtFmEGrwWbjq2FQXu2cLP7F8npT1QkfacH9IO_6Ng=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

humano. Otra alternativa para iniciar una sesión es el uso de una cuenta de Google.
17 Cerrar sesión. Cerrar la sesión actual del usuario en el sistema. AP: Usuario. 18 Registrar servicio. Registrar los datos de un servicio que se brindará en
el consultorio. AP: Encargado de personal.
19 Eliminar servicio. Dar de baja un servicio. AP: Encargado de personal. 20 Consultar servicio. Visualizar los datos registrados de un servicio. AP: Encargado de personal. 21 Modificar servicio. Modificar los datos permitidos de un servicio. AP: Encargado de personal. 26 Generar informe de
turnos asistidos por profesional.
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VS3iJ50gNpR5jzb_vne4OVJiZug3uw82ORJeaWZVScjrLkQJfjYyGKsXill2mxrgdIBnkDBvO-tM8KerxRXQQpusm1uh4a36gwcrqaGajwOfakZRvR5qM2G1M6JKcOG9RClTWuw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02Fh8SOW2FB2lHvXLZIyfmB_9H3tTu_TJYhoqXxxqQ7iP-Iz9glq0rR-ySpT4v1_tJBcPl5hdtbD3Qq7LSx6JaKOmLCPQ49q5EqwRS3yczIHuqRsOYp2YNQNS7dgYHOgXFTokDQw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wWfHwiS8Mngo-CvlevSPZUhXwpHWnH254RREcBQnfS_YkEzaC6jBLiprkc6qrQfKgaly8pmPcgAARXxMEKcD0F2ChZL292mwE-lkxviyVg3X1RKf4h5dIev0DIQfjbzzMUmie=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bL7wpue5Jkv6-D5lB3in8rj3Ob2vlNjoFKuvJZqFcjt9Qdvz7Le6JlyXc-Oi4AqNCMfLznIz2LkhsSeHIU20znwZu2Pe1mN3Ks2SQJGfeGshI-UcIFZgRabG-D9a6-bXRczvC=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aI2HbCfoG8tlPtixW9wRTyofqHGv71jJqMK5UArldHJXfGjVYVmnn8SfF1Q_hrGlvrH3XS2twmSBtxYn_l1UhYTeYTFmFKt5kgmE_A_7sb_2ij4mLbKhrZR16b7dUbZhY1z9pLg=w761-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fZ3-Ktj6_7GAW41QG4XfS9I5nJ9KY1pMnQE24SxZ6lOapxVqKUvs1ocBsDXhykCK57cO-CjiHfO4mdg6Vv_baiTfugsM51wNOoPwn18yFAIoqOd6OzV2hv4CYRFIMcfs-nxY67g=w761-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nb5Q06HyGbZtERoCGSRlAC3sy7PJu4ucaZkEfA3HI9UUEhPM6xb7-2gal5LmzQvDcfzO7h2LTYvdyD5xIHd9CXAsnn6TcOle3J0ayZlWykD9aduc9RZZLqceo293KvnQ7eifk=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xUrIPvFHggA1pFi9j0Wr1iJegDk2t9AZAWQBd6ANBq3mPgkgpQg9nQgHV2YS-rnWTrv5SRdvsZlK-zFP6I2jfREbsYe2FrAk1YsVtzuTIiXJtklOZ-4Jv2SPl8eWB_FXjLB8i5A=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DctyA7gvT7FZ-rJk26rUSVINM26nU_CgVgj5aIPeAEvMkfJZW_jksRfsbmetUlAx2a_loKFaJ_gZOVUksULb8CZU6N_Gqy7M1HLS3tK-48vq9idhmH_zZQas8E5X88fAcvAgu1Q=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yMWMkjChUVGebqMZT8QMDAmAVl9jNneeA0NchrBTipt8qpPBHrmJueiemkfadYtZZ0rZeyF-ZV6teChA3diwa3gT3p0ENtAWRNA6gADSbnQ8tsNB-QV0Wb67mSjTavASb75iS=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_m18nZ-mEWQyBDb8BJ0wZzojyFbkSufLQUJOkpDoeStavrD7Xcd2UKw2-IzWGtIdxwaTWlQSHkx3aNbqzxyeFiJIkepyN9Ao4jbj7z2xVGugWH84rBVOiTU4W9phlTIFtAVGYTw=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28BHBYrf0RwkvMEn3017ty3xsKJmyeUqkYRw3boa364Ysn5Mv43KKRGKY_tg4ee066781vQiKiDXWeWaUy_gwx4zM4Zkl6kwSd2netmjoaxJysu1T6z7HkApFMUzRkN4pafll7=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21d1bBJmAZ6aoNEFcbaZz5lFiuR1aGsOlsNKoH-IWPm1tcyHqCqpdIkdtZcRXhYqmmuiosDSxYOIieUQ67FGV4MzGGXJbDtOmMGiB0--Q66grHUkwvG1-XwRR2aKzP9pSB-yZkHA=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Cl4iffMNk7F_oZYIYUJNY2-fYpTLT1ZSn40TY7iRwOZCOUfzdpLtAj2bbDCDKBfmtH31QxiErQNf0YtWGS6Q3jL8QFkfM_Q9yrSTJXreOhGEECRaOO4-krHHnyFU6ifMOtaSW=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GCIvuM8eRiC6V1ri5mvSO91vC6jZAqPE9-XNZizKF4FlQa3vbz9tNWNru3Wt2utQj5bMFi3YWWOYGCZEnIxhK0yd5bymmyO1bVivgE64y1c52zB3dGINowoIM_SSAlj5cRnET=w761-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iJv3l5k-ha1W4FQdiASFyEbfWlpBdcESuEpEVH7Y5gxlgschk-Vl6MZ12e5PjqtP34PJFNnf4T76IZmCXEWMsSI95qDkT7ke5yx1Ga6tbN2VXGNYAtO4QPRod7_jDp_RyMtl2=w49-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ufkyzS_-B_PggDmTzmi7JfwfH3qFsXSC36EKdLgYpSYmUuULwJ3ruD_8_lEMK6bZASKsHO_S8iEyN5RhU43Gu4jvh9Sf6o03UkAQsjGQEtCov_MPZOhYTTevph0OYrVYE_G54cw=w159-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06LElsdkI4TDS45g3nW3mGIsmgP_dxv9kzh8lkSZIp0mytObnL6vC7OHcngVcQt9nUTbsfTm_mMlXJn1px4niRpll4qc5N9iX2ga5UrDL9RaJVACXgiYQJDF197wtFPmK2xIUCAg=w339-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04PY4IyJw14icSqEfF6xAbLFfQSou8KEM1LBklHvYIvnp6kjgZL9W0uQ5ZD0bzB5pyNAazgYAfS7ZobBJTqYw8mTF16oPeUAaCpwOOyt8uctepGVC8cMS2qWgsiKplufKcYxmEqg=w209-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sCMelAqqu5bxYBwOfBc34dDEc7qU2YWq8S3XaJT5tcFfYX3cIais7Jvcay6VH8KFq55jheOQZxDkt_becVX1p6Qj9G7m_2FbJpNqtRChNG1mI0R8Uw6eyhrmHsUSGqNfSRbYDwA=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xZby1qiyeSPHVBDTGktvj2zIGkGAtqqiG7pVzRp4tKRolxJMlE7Srt2Hd6nBUQO6E3UpBo_iGk88Kx1HTPG2JFtZlbHK3NitvKlw5JSiVQlnZsi4sTQEjDi9AJZeKYnK-bzQoQQ=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Requerimientos No Funcionales

Nro. Nombre Descripción SPA Justificación 1. Tecnología web Todo el producto se deberá
utilizar en un entorno web. Si El sistema deberá desarrollarse con un
lenguaje de programación compatible con la tecnología web.
2. Notificaciones mediante correo electrónico.
Se requiere notificar mediante el envío de correos electrónicos a pacientes y a profesionales diferentes situaciones relacionadas con los turnos.
Si Se debe desarrollar un componente encargado de comunicarse con el servidor de correo y así enviar los correos electrónicos a pacientes y/o profesionales.
3. Notificación SMS Al aceptar la ausencia de un profesional, se debe notificar la cancelación de un conjunto de turnos, enviando mensajes de texto a los pacientes afectados.
Si Se debe desarrollar un componente que se encargue de generar los mensajes de texto y se comunique con el servidor de SMS para enviarlos.
4. Logo del consultorio
Se deberá integrar en todas las interfaces de usuario y formas de salida del sistema el logo del consultorio.
No No afecta las decisiones significativas para el sistema ya que el lenguaje de programación permite la publicación de imágenes.
5. Colores del consultorio
El sistema deberá tener los colores del consultorio: celeste oscuro y gris claro.
No No afecta las decisiones significativas para el sistema ya que se asume un lenguaje de programación visual que soporte al menos 16 bits.
6. Web-responsive El sistema debe poder adaptarse al tamaño y orientación del cualquier dispositivo móvil.
SI Se utilizará una tecnología para el desarrollo de la interfaz gráfica que sea web-responsive.
7. reCAPTCHA para inicio de sesión
Se deberá verificar que toda persona que ingrese al sistema sea un ser humano.
Si Se deberá desarrollar un componente que se comunique con la API expuesta de Google correspondiente de reCAPTCHA para que se realice la validación de usuario humano/a.
8. Seguridad de usuarios
El sistema debe validar el ingreso de usuarios mediante un usuario y contraseña.
Si Se deberá desarrollar un módulo para autenticar el acceso de los usuarios a las distintas funcionalidades del sistema, y controlar permisos y gestionar sesiones.
9. OAuth con Google Se permite como método alternativo de logueo la utilización de una cuenta de Google, evitando la generación de un usuario y contraseña.
Si Se deberá integrar la librería necesaria de OAuth 2.0 de Google para poder comunicarse con la API expuesta que tendrá Google en su servidor.
10. Certificado SSL Se deberá activar el protocolo HTTPS al instalar el certificado SSL en el servidor web del sistema.
Si Se deberá proveer conexión segura al realizar la instalación en el servidor web que protegerá la comunicación. Es un archivo que se debe disponibilizar en el servidor web para permitir la comunicación segura, con protocolo HTTPS.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IvzYqbzYgG4GqjwIpUHq6xGNTvSMHpLY_38I1MFlLM8BoNt2qIO9SCG-QXXBrtgPVxlMwV4G9rK8DlYsIWB3w1Z_bELAeG3TW2Cmjc2D0tjzKZfKElh3BPnFIEMuc6Ja-melZ_w=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AG_CeVIzSueaMfPlBWB6e-0K_FqN7hCyrgCGAMVVbBPapGgc92s6IiGTVP4Aoam-LgCn_XCopwRp0EMv718G7ZXYPuz8PmQLwz8YfEOBUAY10Ea1YtSWZdGZH_AGzZufAdSbeMA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DidQWTLnsHMmByc3RLcbk9VEQJnm4spZV-_lk_-cxwjArD-lTOKwnTV3BB6ASduwXqXGL0MJN1QHcSv2Zo3rmgi1dxRukWoAgZQ1AWsv6BuUkSebQtFt_pxqtk0d2pJgQbfaS=w751-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZSoqn9bE-b9E41F2UrBOWWGJW43HHzI_DJkKu-EHsCwUtVbi2BbksGORQxevS3wKs5Yqcbi6ehDQAgpPMMhvFZjB0HgtgA8r0BYWb8yqlePU0HF1dCajaIdJIAxuEooNrWEvVwA=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2v9vCrAVBAzYzSPUWGVTxLecGFB-IxX5iYIbNyCoIeFGCtreVEQzLVZ84rtGckZXjFrtrqIFQc6C7LCOp37ELYY7a2aJPn3jQZqvIv24fG_HfZ2Y8RUyZP4nIO3BY9tPoTV7xn8w=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2brgo8sa6ma4_bGGpUIYqUaR744qGIRT9kcLptno1R9G34n6R-Rl64-nrGjyJ2zE0pDEUtJZUGcnaj9qGtlkWL5ZohHcaoGRA3qaSMDwz-PG0ebgLenwDuPSweKb2o29Eg5dY87w=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14lAola6fFh8IBwsAbrZ6Y5tPCl_fBM1B-mC_uYIYrx4a2NfLqq31jxBunDosrQaNT5R4Hw8nnNSRjlfbOF-CBBhpJPQsg4jlzofboPhlLg6EMfsqmwnoqhG4Z_t6kXFmJmgAr5g=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yBkraiHr-pf8izziaungwxSVRHmASIpPg_FQ_hNflLdxXaeGHQj5GMf9bgfesmzbxBt0Lq3mcXeLCWHox8R3g-Uve7yrlEnQzR4xk_UFo1Nr3F8ZPk1ywsK-Q-VqfShgra9HmNw=w751-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J416yT5hz3-ub3nq5dPgFB-viukCcN13b9WdWarInxGl6i6TV07V4DvNRXACraHXg4cYeEQKHJO4JFv3SaFF9CrHI5LCywJUQCfmsi4n93M9zKyIRQAbi0DQlK12VUuBEDcyd1w=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EMuajJEwj91Y8hTTUF4SJmgXg9Le1USxiXdvvbrd9Iex1-JMNYyDu14RzTrqUZfgTdT9Sg6hCakcOrdYClwSA8HmJTG0x7SmnnC_Ff94wpWqf0UI53O6V-O7FEZwBUFxvZDY3=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m6SqERsuwaWF0rihdX-52e27PCO3F1feVm9zHiu6qUREt_78Rvkz2Ub7po64CChOVx2MbbArcix4dkWycsH5mAGhuvFtyWr4d-7mVfY-2xoykKGtoRuk4-nBfWsxOoi6SkrFEfA=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2308-LE1RUBv3KbPOx0EIfD7l-qpqLvE1JFvttfVNELRW1ynnNd6Flihb6G_534gR1CwYNtz8GvhcfCNCqTfrMQAQ-vCQ2uEUGyGAzAyWqtXt3CRw9-6aLGF8prldnZMuXAaW-RA=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv281gwmyV90j130AA23oia-e9oIke344QG0bkQMxPSuywI79iJ1u2mAGFXCokDuukT62WXyIIY-r9FXJNlW6hnnMDmHLJmE4jnPaIMHCTCGmWXKWOAY9TtYw6b_iqsDbIy9WqWx=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Nro. Nombre Descripción SPA Justificación 11. Lector QR Para agilizar el registro de
asistencia de los pacientes, la secretaria puede escanear un código QR con un lector que permita registrar la asistencia de un turno.
No El sistema debe permitir la lectura del código QR, lo cual únicamente implica soportar el protocolo correspondiente, que es accesible de forma pública por lo que no impacta en decisiones respecto a la estructura del software.
12. Disponibilidad de los datos del sistema
Para disponibilizar alta disponibilidad de los datos del sistema, se espejarán las bases de datos en la nube.
Si Se requiere que el software contemple los aspectos de seguridad lógica necesarios para que el despliegue espejado se realice en la nube.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oATFPq7mG9YnapwpAJyB6uH92_zyiPvKfDT7bzr3xFL3IRluO9k88fp3J0BVqDcboiRGtf8adIm-wVM6C4MwagpHAptF90EJAkUkGdIqFez8sZgnh5nVrGxHNPWtMRmkCCsEtqQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fj6OAwDnYRBt39Gj229_3HlLkyOsFhpJbQbkD3WIyj0yRvoLajq03yC7NLBhLOBO13SlkC98eWgCverF17evVDTpvlHOQyNKtx89RzwG1pJtQgmclJ9gPC919IY2mMvSqqMuUQA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AcqWTNjiGgyxYQvxZD-YwE2ivQQyKFQJg8vjZO-muGrSZTnfFjhorirlqLyfm3Bdlkw2Xd2AKduvLbgVyvVBBnHVqxV31wAavpKAuyymSUo28tL1FEx5rIPAMzkHrgMuQrbvBHQ=w751-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QAnN8kCoK9X4Fo8hhXdhmLxOTh_4Bg0dHG0fGYfjvkBFrg-toDYptHZqhjnjpKRodzap6yKslqjjHdm9NhXTbaNGrzeLGbqIdwQryLGAhI_djiYx4d7K_wj17iM_8Ijfercp89Q=w43-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19nAYap4l1LJlRGOkSrqZ4jdTVHZ-Y6Yl5bqg50-SDWUWOCABWR2uXglO20nqPfTwb6XAk7oXAf-VP9MyEKaTQAmO4xeqJQau38J_fIs-9Hc3gno5ZKBn4BdIdOm9UREMa_yvv2w=w135-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZLO8JDWVRzzUsGioQhU35t2Otg3UV8J7llw6hlAE6MXKtc1fjlJWGPeUBy1SdfuQOYRxny0N_aVxhgxE1JwRyXwTnHTdBLCFXRLXMFpdWeAEULaiAlEk5zCIx3N5_aJsLSXOwqg=w229-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UkvBPPZReR0ssUJ6Gh1-H3bl9Bwx_QUXYtqvj7aXT1XG7W6q9FY6bsBmTrGNVwmY5sDigspH7I3p4yEaVKRQ4RE6W5vbisRcII3naXN79lme6D_F-XHMehQBoM2i4F9EvCxF92A=w55-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D6u8sLSI4Bq_WDyLyaPdy7OKK2WVy4EN-3cXocFkSJsHwamJM_62-zPKIIAFZ_5Xrn5qVu1equAZAoo5SIDdCmy98XN0pJe-2XlXK2hnSw6ymOD07cYxhfQ0ZdeRxy3XO9ggV-w=w284-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv392WgUYYYrrU_VjIb2J3KrWl6Eti3m7J9sAn6fSc6C8DaOqZf1EL6xBKTH2m5BqKyZ4TD35zVed_F5uuaAJ6c2T0lMPLWiX2rcHVUfi2OQVQKRKN-XvawJmKwexDdndpslzwc7=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AwvNj_323y-IlkxQs-aDeK1x-UD5RhiNKa-WZiShXxZrUcWV_7zrdLgrPPo6j6UwJ8BBVghtnAeqpsGPo-W5C_aoM5gzULRfpqhuBJjSTbcyOlVy-TO7e3IyQCDc-9OnPOfjF=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37m6_EpZZlUHm_Vcp7GRNz0clQEq4rk9Bm-gcvNRVrSZXwM48nPuOn8hHS933JGPadz6OGEqN8ax0WUa5V5QLYznThPQ5rFx6si3ZXCDsYXr3i3T4DcM5e2xe9OVlXUBZMt2sU5A=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kEVPio_hgQ_iobNhljJ0XkspUnYQaEImqELTRPZWRifEcPBIVJhTtrQy7X4iB0-F-n5At7nPpLxW8RejnH3MoB9dL39_ax6K3ue2n1DD6GgmmQ1tyAu7yXigdsWLKzKzvMTPa=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17jiZ3Ti8Fwe0w-LwLZe7Ee4AD0nvIzcMyhbp3FmPJNU2-w-RQ8qvYssriSx2nQa9I5OxknDiYaQIgZcUrB3EUOwfgJQVXAEg6Pk-Z6Bp63XfybtJrsauKTlw5QPLZzX-QHMQH=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IqNpOmx1UqlNKCfAOcbYMkumq5ANqIqxITPdjUJkJwb2e_sWU7bYOoiIWlIqJXCGi7A3az3oW32hhXnAnzAwRzje6_nLcZWjoFKc9P1YrcQ2Cw10eAL8Yol4SVvMaiDKWw2N12Q=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eYpvfgXOW9XqO5JvsJuioR7hvYrM1v-IXQg1w4SnBLX8EmKq2b5i3mSs78mAOXr6KdoTSLD0Rb3e7MdM2iPbhDXc3IhpryuPhGZpEmCt9-d1_iyASJmdi9I8NPlbqkNOAboyt0g=w1280-h306-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista esencial de casos de uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CKDuGBjg8f0qvZPFIgzoAZaW4xzCzPMPaD7QYytIsmHWj82SxtJ6CHmrrVCDZ6BEpaQbxsuQz-8icGRBoD7tBAJsaHu1fTib-5XRAN8qe4g3Td0kjK0XkuGarkAaB3HcrD_Cm=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1X17cCNO8QbklDkRItJMfwPcUkQKgzAn15qSWZFglPIEfR6-8B9xro8LMDG2-Ai5ZBYKzIqjNOCKY32dDPVfRpM7ddTnXuORhxhSdicxI0tRQ4vhpmZAAdgle3sx6NJbyfm0CE=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LHGysa4Lnz-_YtqYvb9lncygsbUYkmBHG-ZhQBgchklsm6HmSZXBTOIIyQFy5vUaQqIIRFmCm45HIu7nJvR0VWPpz4_OZF03OWYvIY8DtUb0u8ZuPnJ4vohXL_MdATgT8r7I7=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1upbkvvzow--Mn6nzlNFJjhaH51HN7Vwju2skG8-6oaNso_Y-IrtjOlDC2ofo-BRuzrY5fZEbnTqBqzVx1bXW9312IXhYgbM7nYR0BTCbiBjifkurQp1yCUAtRw2xYkJvBOvkyMg=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tAyS0N3qKNSFJICro69V1VUGgaf5MAJt_ikyOoYpXSI7pqAoJFNRBtXWNYpAL26wJU4dOX1NDfEsXyOKB3GvzsujUMbzO3hvv3FQPktRJHONt_NrUfVfgBRzAnx7A7w5JoiJfWw=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32Jts8lB9IhMhgr1CAE_X1VTQgRPP4moA28hCIvcaGi36yCWQpzyfp5d0Az4ZiImZZBlDq7-3-5V3U8gHEV5VVGoqStszRfXwV8rTKS6hz135Ja7Th6yfmyxG4RATxfAgXJxguXw=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0n9dGP1n4PMJBCqXUlMAX26p9U1maHghWEBPASJEP4Qx55kf7Sy4jW1TI1WtYyTwXnmD0-VXhMF5VGdQZeuVhUWORYb573klJjrbOf-4G2WJ5aeDdoppdgovTN1ula1Ysq8Rqqlw=w738-h176-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uhFEMSri2sdMhV__RI_GgM3cO3yZX7nhrF_EJDkBbKnAkAHJQC3o-iZAb90XcDeY0ys7FyycUIcZHuEWt1G877ywA6EwHAY5LSPRj2AU60EKTaHrJR9Kk-Sp-dvv4gmih282O=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3S1KK2TGcm1o-dUbEF-9bwOSkP1Ku4mkE1iRAh3M0JRRjDQHKms9sr7zv2LvgqmqFG8nx3Y-yiEN36U9kBPjy9DjnGNEmIpnxQu3acVk2NcqdPOFDMDF4Si1xe0H1t4jHAiynx=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


#### Descripción del Caso de Uso

Nombre del Caso de Uso: Solicitar Turno Número: 2
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Esencial ☐ Útil ☐ Deseable
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo Actor Principal: Paciente Actor Secundario: Servidor de Correo
Tipo de Use Case: ☒ Concreto ☐ Abstracto Objetivo: Solicitar un turno (día y hora) para un profesional que atiende en un servicio. Flujo Descripto: El Paciente solicita un turno para un profesional se genera PDF y se envía mail 1. Paciente: Selecciona la opción “Solicitar un turno” 2. Sistema: Solicita que seleccione si desea elegir el turno por profesional o por servicio. 3. Paciente: Selecciona la opción por servicio. 4. Sistema: Busca los servicios y los muestra. Solicita que se seleccione uno. 5. Paciente: Selecciona un servicio. 6. Sistema: Solicita que si quiere elegir un profesional del servicio. 7. Paciente: Selecciona elegir profesional. 8. Sistema: Solicita ingresar el apellido del profesional. 9. Paciente: Ingresa un apellido. 10. Sistema: Busca y muestra los profesionales con ese apellido y servicio seleccionado, y solicita seleccionar uno. 11. Paciente: Selecciona un profesional. 12. Sistema: Busca y muestra las agendas con turnos disponibles para pacientes del profesional seleccionado. (Ver
observación 1) 13. Sistema: Solicita que se seleccione un día disponible. 14. Paciente: Selecciona un día del mes vigente. 15. Sistema: Muestra los horarios de los turnos disponibles para esa fecha y los destaca con un color, según si está
libre o no. (Ver observación 2). 16. Paciente: Selecciona un turno. 17. Sistema: Pide la confirmación de solicitud del turno. 18. Paciente: Confirma la solicitud del turno. 19. Sistema: le asigna el turno seleccionado al paciente, cambia su estado a “Solicitado”, envía un correo electrónico
al paciente con el comprobante de solicitud de turno con los detalles del turno y la fecha y hora de obtención del turno y genera un archivo PDF con los datos del turno.
20. Paciente: Selecciona la opción para descargar el archivo PDF. Fin del CU. Flujos Alternativos A1. El usuario cancela la solicitud de turno. A2. Se selecciona elegir turno por profesional. A3. No hay turnos disponibles para ningún cronograma disponible. A4. No se encuentra un profesional con el apellido ingresado. A5. El usuario no confirma la solicitud del turno. A6. NO se pudo generar PDF A7. NO se pudo enviar mail con confirmación de turno Observación 1: Se muestra la agenda en formato calendario y marca con color los días según si tiene turnos disponibles o no. Los días con al menos un turno libre se marcan con verde, en caso contrario con color gris. Observación 2: Los turnos libres se muestran con el color verde y los que no con color gris.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lO5fOu57NloHdNLgdnZSZ7Ydytc-IqNyxipQ2Qc6uirTvpgquYfxa_ev29Bl2RA2n9MbgztQypUfxEjsk7qCiZ1EpKxd7BDyYU0NLn-_d5aFQsF4V4WxSWpLlnRvtjyUasigrFQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uXD2TsdAqUl6SombuyEQ5k7HWbznu5HHjgqFsqvYKOBvuCu4E5y3J4xzUNA0GefRbe0j5oul8QJXoTLSkyTKcO0TBbBri_wajsZzwzQYObzgEQUQs9tpOeSTZZ9qXEJZnjaetww=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ShYqIDPmfzhlbjo0n3DQRylv0xXcgKmM6rT5Jws9SH7sT8s25S2LT9uEb5yFgNF-NeSVUZYpUyWFEh2gw1u02fckh18Gz-2ZKvKB12mvBeslexGl9SM2mVGXzpWNCBl1YGAJ3Dg=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2a-WdX-EF-6ucS3YByHll1RBvTrs85ChXT65QDA_syAHt41bC_uCP3gxWcitB4JRvtxt-YRevLSAqSBwNTLbjnYfyUZpi8C8HfIg34wsCcOYhMjD-BquEjFz6wwGf_Vnyi1Btk2Q=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zz_quzTjrsLhokfAsYFiRZb7noQhSfZwntGByvV1UMWuTMaXrHeX4mbsXx29AmBF4OYy7xN0MZBDYaP5CA4HGQ463eM7AT6YVvA9H7a45gU_CRZ9P0Th-ojb9SZPLj5Dn3Rimmw=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DqGia77GASXst2LvLMdWb4cD0k0GAXJh_b1eZfZe-IWiRv2nVurECfdN4rtJw4WdOKy5iQExCyLyHk6pk2Ao1aZbT7hstwFMQV1WECjueV9mZRaoAQhvo6orHMCJ6Ds0Jkx2L6w=w750-h134-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Kq9NasHQYQ7TuB1ntnYK9jI3mrOorHtDHeqrVJh8_Cav1bHOmDc01IvP1ElwN6q3yxy5yirw3f4ddrGB0fqW5T5Fw9YgWe1fhLl0AlAPvYuT-8eS_ne-4w3IWtZpTzjLjQyy8=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3T9iIjMo38vgSJlAB0bycUq74QreXtgb3fY5u70B-ilTb0k5uwIzLGvBvtLZemngp98y-q8t4ZkIkb0JB0-Nk-6wEQ7tD7n-xfO1soeQUNTmgtUgQ6xP6mHRZO3fo4j4shrjVxVw=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Nombre del Caso de Uso: Registrar aceptación de solicitud de ausencia de profesional Número: 3
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Esencial ☐ Útil ☐ Deseable
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Personal Actor Secundario: Servidor SMS /Servidor Correo Tipo de Use Case: ☒ Concreto ☐ Abstracto Objetivo: Registrar las fechas y/u horas en que el profesional estará ausente y notificar a los pacientes a los cuales afecte su turno en el caso que los turnos no estuvieran libres. Flujo Descripto: El Encargado de Personal cancela los turnos de un profesional para un rango de días y notifica a los pacientes afectados. 1. EP: Selecciona la opción “Registrar aceptación de solicitud de ausencia de un profesional”. 2. Sistema: Solicita que seleccione si desea buscar las solicitudes de ausencia por nombre y apellido o matrícula
del profesional. 3. EP: Selecciona la opción por matrícula. 4. Sistema: Solicita el ingreso de la matrícula. 5. EP: Ingresa la matrícula del profesional. 6. Sistema: Busca, encuentra un profesional con la matrícula ingresada y muestra sus datos: nombre, apellido y
nombre del servicio que brinda. Luego, muestra todas las solicitudes de ausencia pendientes de dicho profesional con su fecha de creación.
7. EP: Selecciona la solicitud de ausencia. 8. Sistema: Muestra los datos de la solicitud de ausencia con su rango de fechas y/u horarios solicitados, fecha de
creación y motivo de ausencia. 9. Sistema: solicita confirmación respecto del rango en que el profesional estará ausente o desea modificarlo. 10. EP: Acepta el rango registrado. 11. Sistema: Verifica si el rango afecta un solo mes y es así. Valida que la agenda del mes está generada con sus
turnos. Busca y muestra la cantidad de turnos libres / solicitados / ocupados afectados. Todos los turnos afectados están en estado Solicitado.
12. Sistema: Busca y muestra los motivos de cancelación y solicita la selección de un motivo de cancelación. 13. EP: Selecciona el motivo de cancelación de turnos. 14. Sistema: Solicita confirmación de cancelación de turnos. 15. EP: Confirma la cancelación de turnos. 16. Sistema: Acepta la solicitud de ausencia. 17. Sistema: Para todos los pacientes cuyos turnos serán cancelados, se verifica que si se le han cancelado tres veces
un turno y ninguno cumple esta condición. 18. Sistema: Todos los turnos afectados de dicho rango pasan al estado “Cancelado”, indicando el motivo y
registrando fecha y hora de la cancelación. Se le suma uno al contador de cantidad de veces que se le cancela un turno de cada paciente.
19. Sistema: Busca los correos y teléfonos de los pacientes y notifica a los pacientes sobre la cancelación del turno por medio de correo y mensaje SMS con la siguiente información: fecha y hora del turno, nombre, apellido y servicio que brinda el profesional. Fin CU.
Flujos Alternativos A1. No existe una agenda para ese rango de fechas. A2. El usuario no confirma la cancelación de turnos. A3. El usuario cancela la ejecución del CU. A4. No existe un profesional con la matrícula ingresada. A5. La fecha hasta es antes que la fecha desde. A6. Hay turnos disponibles.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nV02zszQlK42ZaaNl7mXD5ok_rco1urftshybyay3a3Kyg3irsrNG4cCKXCHJfCESM2-FNBUpqX33gAqphb2ynZeRnE5fT4VlhifyKttu9WI1AVv8lCakIh-7ZeYrM7sIAL0ppg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QDJA64GxR028yDhbU9mQ4fgWeXLQbWL_1fGddfEZLsmRLvN6j3NEkj7gUiuiM9BmzuvSP2BnIkLuS-TvX5YRhaVAqVPV2NSGokihEat-6FIQWCgbIGZuOc8JlzDq72e3HldXXEA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3T_FgcND8WT_nkfAu1UrsXdjNvYFHTXmTY7_lXmrmKims4QfMOtOAsY05-NKJvYKZtNK2iXVDqLd1dngNS5UKmGPJ9uzoPbIaCW76ikd6ZGVTEN663oAKmwCjhLY_2ildBFv6lCg=w750-h42-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00GHZdOytgBDvXr6pMVoSabo9nAS1HUdRYmkpDKy4fqcauwsiTR0EhJ7IeWRK-rvIz-doLTj35p0mPVX9HfGyTP6LWYuIpNFd5ESsNL_wZ_WqIGbla6HTrshHwfZGtOrL8wvW4zg=w750-h42-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Z2Rm0UM3gtgNAUYOYiZ8Ed-kQZmfn_0sAZzZDEmugX4pJP1DrXuz-epyBTlRwIh30Q947pO93IcQOaWB3X4hQwoa6CytztTJgxatANLkvqdLbpZUMuAQDCgthlLpmWS-1CwcU1A=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WxSEPhptA_1DKuujgI1_fHe31sH8YmWFZK3Kaq2l7yIO2U_ZF0F_lln32Eps01aLrA6S_0q-uRVsldipsQaol9iBCp3Q5ZZThZ_cfrthHZOBijX8WHwDhkh7YQ3M3BxBMvpRAkw=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_tjsN_meQgttFAGKoXvgAC6qU4Bzq_ZvY1tn97q75kh8offld_pZxU1GkfASW4niRAw1H5zwxyCJCWTsJPhsTtJL95koOy2IPJw1i3bmxR_kCKUJGSKuTxsmPJuZ5HHvHCoDN=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Zrn67D-sLXscbMxPmbKqgFW-0IbN2TPBi5l8tn9DoLefhUfN83m7QBl_3SHd_2QvOFH89CT_yNBhWAIaO5cCKfjhete84zTzarGK_0Qxy_qJ103lpzrAIn0NL7t90NZrSTF7Olg=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1f6dekuv4pcDsTqPcWexRlFLlXdRmjhOaxi7JJi0azKK5md-bJwBRw4Y7a5MsTO9D4PTTJkxifIqV57KpIj4jXjRwBWF1IvHEICQyvcbtCwBay_22MyvYWk4QkYn4gKbdKrftuig=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vJTHrzWvEnNxoQJSD1WgGStlQEshBn34e8Gf2R3Mw8yLmafw1gGDbdAr10--bGZXlKWoAJFi-3agxkio52hF-J9EEQsn4P8-L5NfvEU6b5dgR05MnOvPJKw15J2Dt0CWxTpLa=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XOvwF7inE7IXDE8kD4jzWaaqpN4Vz5VsFQ5ToSv7OYBLD2jtYKzOQScNAge4EHuVZO5WM7a4LLwWos9aELkU93f_PF87cK3GKB1TR7CjeXKLGEXnCAb3qdPfhk-3Qphk8XGf5pA=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-uW63fyLPUaDhS9ryf6tXYFV7MJa0-zmjP7tY03AtXZkK9d67FOKL2CknBwj4Q8OjvEhF5X59Q34pV1Ho-uwE1zdONV-fzLpXqYu0NKwJr9YiYclFKqQBCXiPFotHyeAmdy8M=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lvD5SQlJGNCO0Wkbtw8I9EX7AXA-wfWBG5aXgX7NdOpjtUs-Ch8zCm8JVsN0FvBPe7a_N8s5bCPd6Tsbsa6Wm_7JPo73lceOBUtu8e749SWqSRoXIdxrsbwBy8sjfS8mrp3ImWA=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qaEQaounO62Ex13rWStosqhbkDhyc9IQro1tnDkBTwfY9Zbaj9L0cZqQtCF7Tx0Ea1uLDTyGOYi-aiukkHaeQKigbe1lzzOxDOOhpsD1-ul9SKopT0bC7oEM_4HD6Ha_TeGfz=w1280-h723-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m-MNb31tUk61xyFEzP1c62lELoNG5-aG-cj-CqA1KVsXOv6OHw8dR10kqUa_xQ-LkwYT9d6ZbUNXh-70yGo8quiLCS9BVwDMtaHZnvRy5r9NgfTdK9TXBaE8uDZHhC_psb7hXUA=w1280-h481-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Modelo de Dominio
A7. Hay turnos ocupados. A8. Hay turnos disponibles, ocupados y solicitados. A9. Existen pacientes a los que ya se les canceló 3 veces un turno.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QOVI5_f68IMUPfHK1LTuDp70kHB52upYAYM8LIN1aa_15pkWagi5a0Lt_Y7emfCB1smBT0ldc8zBnOIgFChALpx0TtJk4RPpxr9PQxjFvWew-tSQ_Bn4eTZYueFSsJLYKBWGe9g=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0d6485p3GRfFHt45Q92pGwb_RaZknVO7_wDfqvyHe_5PGt_feBadmkfA1BFeCbKg3q684pjYqY8y7ItNiBhGCpP6MaEXKKxuvz1r2UZdXIWgyi9VFnCjOLi1JO63hB51qyhP_K=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CTfZyQ_-RyMYheLgokCPf5aZaaCNVZVrswC7ouEM5ejjoUP2bqSbKPcjgBVx3GXcoh63wwFR-diM1I6EIqSNXkI2Wz7nJs1JyGH0z1lck9_Zbdmxxu9NKe1y0tnQQcbRgKDII=w738-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yNaRskdy_KvDJB9ieEa6Jwx6IeWbsLQoa8meY1EFbLjXnl-RdjsqftYFTN1yqyMIS9NeSEpR-4RchPbzgbqXU-l4SyGv3C-NiVzdY3YbfVptphRNmd4K89LVzl9TEY4-DNsDQeg=w738-h277-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3w_fOtk4mwWHmCIauhcTQq6vcSUDNwQPPJbePoaqDyBwawHEUg_vNZ9RKIw4ngJh3ZiTroVWTBuPB3UyRYMsdGRerwLcoYhyU7EoJWvplGSQ1U8O98zxnla4ZQWFstMXlXfz2i=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Gl27Wlyg6vcD4cqXdmlbE9OQzrbqJA17lig0K39KDWYDCBRmzdKqc3Qo8ysXxEKBmdtV6PepfcH0KKuTTNGpJ_2_ilhy3l9r9JcuusOJ3-fKaZG6b3TNbeZrngXZRVC5FWseA=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XENBoQVJFnz3s9K65ChfGpqZtLgmlcP87pvSw8A0KmxH8ipa15PCl9VufpHSQW1h4aQrNN9OX50WdQ0l4G0KZfnu6UPzwfBkXJsq2JF4Xjy-GjAC-EYB-qEDf-nkVs2Azt8zP=w1280-h357-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20vhszoss9bKhdtlODrFvdmno9V_bh2o1_pe7PjRF_akm3gtKS6ofooZAPIgdYTbTdA-wbiHrZRooFM1J_C689Qy3_mx_geuPUIUE-NLArimTU2GrIDe6dGFoh2E2n_EeCeI-2sw=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xwFgiC6Gbbr75cB1GKyG3TwBWfmauhn2RmS3yrrpNUWbdDTO1izO5aLfYNwtrVaphIXbF4oTC0pUoenJyBXLAqFAmLaIecn3UWXP6Lq2ZJoAES1ijEvOiJ52L7dktOTScK9tQ=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UDWRZdyFA8TmPXrMyZI_eqkOuAdFnlf0CWq9LYXHj5CrSgepOxLb_0VIsIA4Q3z-2UqiLP3NS0P8LFij-dzLfVKrfGkrGwiZI8CxTNzasjuRq8z49WEy2tHolZ4w_Dkcq4O5ZXw=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jngY21U4QgKWMjQmV6D-EvTh3cqaBQ04LzqUWa95XAZJHk5YWKwk2jnIMVUUA8SfD1lmekIRp2ZoirVCKWZoh3aQeZu7T0yvbFh8klVmeCzf5ipvHvFjKjG0jeschuHR_ie8YgQ=w1280-h176-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Realización de Análisis del CU 2 Solicitar Turno – Vista Estática:

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NKTqMOEZ_b0alk_946SL--dYj5z1Tphc7CF5oTDsqVtvZ0E7gA3svV4gZO0kvuZlM3vdJJm8v4ovChoq4V_bR2Yw6zYvpn4eHT3fpzT_gRBCT_QDR294UojtcQ9Uqtnt77nhcpA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rW30GJGnaByhgacOajXx0kBp2PTwZbEUj4RfOBmQlih5a2qoVSdUVjvsdaiqT2LUkoc7T-uFRyj-_BUFxwoPMgXMcf6mfe3ODHeOihPlZCFQHvOaKuNi0010FSFRDnkR51FsK=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DNaufjBO-bSvLYnq-QJ58uoBX1EiWZKJOnhQZ7Q1AtCfRdXXo1wW8g7hR-L7b5Eon4vc3JOC4MFN966A3FDkmOW4d6qtaR0i2r7rSWmBKdOGe-blWIYMr2fLPGV2Ac25hsxoN7w=w775-h274-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AbtVwtIP_yo4T79xIBx-VbEnUZ1p2H1SxVZaGKABD5da8kzsBxPOXOtym5JhWaMXad3-02S9s79TJpkkGS9EZai0rU0kyVFYBxGAJjOU6rPWJFSAudrJ5Gn0yr_MTuY7c5YdZgg=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0t54PkVCxMvi-Jgd5dAzk6OCjlXPijePChsl8KN25NUPyfQZEZi33sHL-sYsl4idhFBdC5pCXiQCGMVHLEmvDx_ttIZ5ZjQad1tcQi0uA5yJQFpFQsvtKE0gFZm7lovndN_K-BqQ=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KaTsCPx9jOj2R_E2hINRUfykwNbKA09DTgIzhPAq3Uzct-wNNNRxqK2OsOs-632ylzoW5dwevfsiNMHVcf33gK8wy2z0_lynYiaN36uhO6MvsW6DE_P72V8PZ68jo-9ZcJeDO=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YwCx2UW37y1cKThEGesdVd5CcyIT3m_0tb2qWiaZQ12SY2qvIt8g-PHLFug1MXrIdRJCMKkllBd_cmZcH6KvFBpRllbI0U5enjj8F4jYv43dlqhjSsyWv3oqs6Bel0u26JEGQnQ=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-Ue5R3w3MkexDyA4YEjUKoSv7i48LTiLW1Lfja12HKiJcv-Rl5kblP9UYjRcbHBD8gkHodF6t83SmVgzUIaptqcHHtJ4SLKRZNP699s9bDRe9f8OedukhX-8Tyrj_IVSbUZAnJg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UBG-0U5eoqu0I496HZ7IMO_wau_FJUjvsFH8wd759nKsEVMuhOCuPF2-Mpp5GsOmf7J7YUNtgLnCfqrXGNfQuVcLaT5lc5J6YFHMWfl_mdYrGhAhtdbhkFxooXFkS4ugHeCoekQ=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nl8GDYDTew2pBE2ncUcg65rE0zJdo2hh_p4W2YQ6p2Pl3x2utsxxttRplA5tnOsQDiD2qltVaHAlss6y36HDsXdQz9NfwPRuHhX5jmZYzwwrSkNpwaZu2bwxbM6uHxmfTQJEbJA=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aVvuCHjOhEpz2rebl8w-Ok8UfQRvY5VgwOCyOAGC-J_eUj2q7NrE2E9VhoC3RGSNzTPwjXlJs3wHzQmpYbCzbr7D_Q4_E_u5FhE7S80lEZlJ4Rcqk_jHa2MwASpneS_Wyebdo=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19WuAgoslC3-fZCwFG68qOUsfXe5pVwQq-Iqt7sgdr3zUVLc57t0uG8abm3GaoWwvGPUwYQuJwKyJDLJ-WJoIMzbIUvkPbAWYy137h9OnF5ovFcIWVLzK3lP5su4tDrAdcFhhesg=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CIfymex3A6SgIDOHPAcojLOVv1mDAl_U0Ugp4QZiZgB0fpQiwTlshHIYOk0XfLwQmsKUYK8VVNNE4aMD5tlyLBs_TIENnVAQVUr-eVV63oZkGFxUrNIEw7V9kGmcmWqHqzCwofQ=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sUAHbV9fqc321CSpYyjNDxVnsuBJ4zdTtNvCWFfCuHN-Yhr5KT460F93RVf3Q1R7hHYQW7iMn8YhlQLvLXOXm3jFjFsQwOopqB1rx9gfX6CEJR6QLf9qr03Y4RBMNSMFt11LhFg=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aSgsBTdf86kj_nZ9virhgOaqsNIqonvpX46OJ2jojTGNIJ9qUolGHWVz-U_sbAXKYUS4bvJ3K0cDTrQP9x2sNl_khKr9cDfHzJzHuYy-ORAtjvRY8RfwIrQuvXpyuZqvAWDbPlw=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OyJ8oyt8WXgNkTcC78a2oCC12Bv4ExDiHAjevSk99Jod7ora4tTI52o5Ob5CG9GD0N6aH5WRcPi1C3rnLD9Hsn9nDFpZUhS4J5uHKz4MpSEHJCCuh9wAOHObPV6KMKeGRdn92yg=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09pKZyJKNoRbQ4Ta3rykTmv7zG9ruuE5yc3LRJ07TnbKbH_GOojUEbeNAcE0I8h1Ts-VBNbpPk5k35Rc8g_S1xZS50Ou49ItW9qbcQr2uJ9XPJVXjbndSvLMDn3qwlsn0UZYPqSQ=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FJ2Nwh2btCm5qfWa3H9BJaakIoTP8BQQhdZha-8ZFx9dBkAawmcAJ-gSXMYtRa7hiKmvwEu0gcEF3dK5fkDeegMhO6HgBfPnq1njwtBoHlvfkIE2oPPPcoKpWq3EL0FdYXYkJ=w1280-h189-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Realización de Análisis del CU 2 Solicitar Turno – Vista Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m7WsOXUxenffMUiioqzLdyqqq7saJvMUqf3kgTYUwt9gSEhoI-zrrPDwLHN2mWQuBiafa39TRYs4rCsbHuHcMUj6QlbvCuPIBYAI_IqqB5X29otvZX1ovrCRTKmwzB3oTqZxuig=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mtUeuL_zSZJXY-MefG9IfWSHchY7mNAyd-RZAQnMWcFBfxgdvzxkLmqlCEtF1lilqcUZtrUQB0ZIssf_3XMD7xnQpRr6su0qBXab5P7CB-J3O6jW915msEpMvYs8s4G4MnWkTcQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3f8jQ0_VTc8UUIZKK-EMfuzxlMvEM13xqCAUaJxy3srO23KSpwgt3-vJyqHOkAmlJ5JdmCBaTFnLlDNgi_-wPaLqQLKsm28Qf617xWpmHxa1ovYMmLpRaaIB-AVxw2tGM4WwbiRA=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gCdSVUeTZ_a5bQQtoVTUR7MXF1s9B8aRD9c_cowvjt53F7sftf_gcZ47NROZnUStsLItXS-hIZPTK9rQXzAoMcb5v5wMoqsTF_be5xowHxs-no6t0DBy4E2bKBL2RRQzXs6VKdQ=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TuTpZjEYGek6XxLkISAOI4vkNI1EJZjeouuddXjPSfLxDilASzU1R9_5LdGBRmZ5kzEUcSjR3ZXd1eUBJ3-eGDSp9l4VHxR5lfFCuP4rTRhMFcO3GQkoqhjn_-GyOHwyTyPyA=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30OJu6y8_Dq6npL84WMHhrT3QkW1lG0Eq6_zdTori7YJ39AUxvpgrlvUD4ebP2Opf1lJtk6VIBuBgDzATSO6Rf7EmvvbdYt6AZjI2zB_Qkh_TFbgxoGCb4WYF2OE6Dc9J_r6jCaw=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jAeUg48wlbfvyKj8qjhfoYZIJWG7l2eTr5sihCIh5xLbXu6ht8HCrDzAa_yJ0q8MoKVchDpJfwmhMCsRJUSmNupjftF78a9txCUz9ITC3Z5eBnTrXsZ5jZntBcPwIrD8ihAsVTg=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y7yapj4C9y3cpxL71WoZsLdAHseOfh1iQgSsbivi44Yk4ntwfamVyxzZLPS7rnMv8EP_jN4nIvCxTKpLKD9n31Y5qwTVOtPduxaWYVNsR4oJeC0hMYVy4pDSbZVhSX4NSxrWBeQ=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0d4LR6L2I86udF34--ruNsP2QZwxiPbx69RJd4liyRKG511DeF2d6r5V2vRADZ_4OdS5oIrUL3G4Tuz7zjRs5MAevEkv4pXfmmNI4DKE2mROpDA_Lk-w_BvL6evuLfIOblCXdaVg=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2O1Q00MCHDAvbU0o-ffIr_U8k-kkKlbSzogL6homvJhzoQ2iW8EQH539wlcWU3xaK3_dcvJJ85x_PZAR1qsl938_76tDNBNYl_DIHLx-LlK87eA-z4WHchOgRoHqg17jZl4rVW=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1azZsstkrP4kSQCEJfWx-8xqP0LUsxO1ITeP3PWCEQHn2dKpkPz4MAGQfATP3Ny6bEh22PQOvX4jMF1EZCjnEJEOcdOH6EBuLjVkfURDavrCGnksNEXqmE6MCPzjgUUkq95gk0=w751-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bMIuUNEHg6F-faAS15kuuM7cKqb7rkvSQuJF7XSYo12-IBXX_6lSs782omnc-diaOGOHeN1ufUif0ekAyohed10r5DtOmtxJChOAjJRY7ONIUYNtG_jQSN213rNdS29tHQfravw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ukdrixu7uqcuq_KnRWimWjTD9k_W2evNTVGLemQQkXtM8sSJyQ-LChFlVdyjPrIKhbqVQ6Mn0TGKpVkQKlXiuzWt71tsAw4E3yw-E-m6z5VqYbEo1FjD9xCzhgbf8T-riSjmRxQ=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VBB9rtffVw06ZsKdeBapFPgUta8DP0mq25pCI-TkM8ymiBt3_kurf0BvtT5DlltdBve4T0qyLrD6ScP5t7y_4CO3MfwMs13uU1DShI3w1Set4A4hld3heYbXkMezPia1l8xHW=w1280-h626-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OSlNxPf7x2h_cxJJX3lsyekay7C2Ez6JawFVBms0Bed5mNemRMb-c8UT4J1Q_MIwf4OFYTCjFzGW0wPMAonHwKKw_RBqo_DEjqr_lMpH_RYBlI4qMaeMj3bn7ki6TMY2xCev0=w1280-h626-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1z8GVAZ_a0b1BX3R2S8l1ZihC5Z7hFAk2PkHAsDzN8mCHYcwvbfcAHj60UJWh6fMCdVQet7UWxRc15yzOl4xuQy9DhGOvzON1KwC9D30xnEnpqfhxXublnnKMOpDtfVZeFXnH2hw=w1280-h312-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Realización de Análisis del CU 3 Registrar aceptación de solicitud de ausencia de profesional – Vista Estática

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SQwtMpTOis2jAxd4axtVK5jICud2JlIhhsl4vUmj1ZKofF77pOFbfnMxgJiZ53_rMO7ns03Ci5TwdEDT-Bbsy-Izzt4yKGdIv1R4sh7d7IN_BMZ09SZoT8iRYt6vfL6TRl-zA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NAqZ58HkCSO3dWnTR7IGs8iB8skFdSVJOXxtCBqFTcU2xYExz-DRdmnktktzSi_MTEEVeNZ1fumpfw0ovF9dnVDvQkA01JEkyfxYI1TgG_QFrJ6ut6Dlapn4KXNuurvf4XVd90A=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DKyVtZapcurGIuhXI11hJSx3eoJn4vS1fdpdtEXBawKkImtkInKaQZ00MATB0OkM8dG4-okAZbxU-_635AOA_DsMCxU2WMIGuJa9k7xdTwlb1hw2NxzpRbFod6Zk9Jxfp9M4QkA=w689-h337-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZKY3G_0yBFbUVLJ147xrcTuavhr7rn6cxFURqFUmbI16__2tfpL-9ggjLPw1tekeMkuB5El3KeIhU48T6Zj22GR5CUvXO_KNZunVhF07ve66mZlXmUKuGbNGsZ158XJokLV5S=w689-h337-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MnLbkSd-CgGGWEdfELcwt_Y21ABxwCiUSLDDzCJ66EeQN-qteg3B-oJd0mUwW1SEkFLUKP2EmtIpeRvOpI5vyFI4mFMjq4J5ojrzRYdq5a3PnYUUBD6-U80rG2xft6jqSfyoGLQ=w689-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CxgYu-oTHCZePaKyDjqrFs6IBOD0vk6KdcT8XzKzHpQOVBUr5QxMPXhqJUgRybvbeK5oRzq0BI_vbASCK6O4JUZJA9-CddTQwXf2mzbFd6XyqNOb4OtdQzRYmA-Wne6xvu3ir=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ff1SYHbozcjLyuFjEU7c7Cpd5Bj7yKTsINO9nM3pTv0zNEtPN7lnj2y57Pj3OaS-CHRyl9g90pHRUmnUDO9ASqkykzT7CUBmeVNGRflpu46ny45WsTxRiiZ0Neg4QzSMzXh12Tw=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bkaYn_iDPrV2sQ-E1K1qxEa6IW0I7NHlpC39ECPwWAl9SqlLK3IMWDIM3yUPFZ0ZjjyQtLxI0xsEMfqewG9qmmsI-Pnw08pE5cbVxlbkSsqaDuRnokkxiJ5zR6T8eX2gLevnfyw=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OaYdUCUf8Rkdd3SsxmQykRH112B5ySeARmAuWTKun3wtp01i3SlWd-TJPN1XMwW_jitmLiPoei8lw56DjMEL3nTdOXSlRdzd7qZoGmSafZN4_i6YNWiNRk3y1YRgffAQaO-uiCw=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FuCbxB2aDbnPObFYeaXGFMQ1uAhtGARlxai3dGwo2bKBXLaNfy-CbjUCnePEo6RlJOLaphIMivL6VukGibATVfuQMXJggxXcamPnWAH2r-1jnVkQ0UfwGUsZYMx--a4mspUfaWA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ev82YZFYm6aYBj4Fx566J8CVq7Y0XSbcu3vxSjoE3zkSO3FJslbI_BkiVKjuoZexECxHPUK_7Wuciv7UKtfQqfMRGNs77mdZSCqVlz5pzSemQUGohd7Nzz4e0p60xn-PMdAs9VA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VsuAc84VQc53KQ0g8p3b1JmZvpplGr7Tx3ZpU5aW3k61bGeyWscfBR809nFpOrsJ_rW9s99xSFatuVvRtsy8TbZb2XteUy20V7tyDFa4DuPdOVPf9tKdNtD3_HtkidSzeviUMxQ=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26ryaahnpA2mYxKAIUAUE4kqhpe5NRH5y4t4L39NDViw8aXgF098tc8P4eCaevQlvOnVXtassxvclq_n4P_AZ2nYDL3NmD5u4KgCrLRJfMbPYZDFcb_TgcVnhB00nyPCqtm9L6Ng=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2d8sQFu5kpoc_E0GEvuNFZhgvSlRoOV9hric7YhSKarRIQa9amTktBA-AN9C2D9ywijJfntvXBsn4n1w4Upxqjhl8eUEpvXgsJQMm0mKygil6YnrjYyu95MhJDTLZd71uk7pwI=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26Dc6mg5O-3dOMVVSw_vzZF47sn9PInlnJkI8qYQlZokQwEpylqRypubF3V37ddazqba22iFQdUs7Fq0kR-MOXo5T_V99cteVG-moJsJOKc-MP4NsFOIXMHz75LjoaNh2sFCausA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2apOyXf8oo8itaGCCTMki_9tvIvpwgUrANAaF921unM6MhvxmO1QkXHaLkESqn0Fc8bIhlDt26iFn-CKcSTbePt_JLhOq0l-sMQAAJPtF8D44LV4dfUyWCS1NgCoPr4Mduzr_a=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ROl6lwJBVn6RzsuwD0a4k3Q91EeZ_sNm_zcVicYvnsznhpiSP5xMvtDqAf5gQpy5lsdJVVGZVuEOgSm_4oopTcb-gpmGIkMK6H9pbGFIvrJeYJMT54qNCGwgPhfc0vQ3LOiltiA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2z9Td70vX-YDenEjoTSGarO1vYVVa8Sl6dxf614rdn08H8TqUGkR8mKYBeIh36n7LbAFDuP7Xy6vvOCBcuQv8VR1yOTjRCgu419-XFubvTNSQUmkP6OITyKo29bFKsRXc8xYoeSA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cXpGvDPjjntAGL_5j_okrCEdsmcTo6U3xWbAvV-BF5Us2RU78n0v-eaIUHVVlNwVnh758rnGje6oVKjENifS5A7omrQDjLzwRQgMmUeEY3dX3edJhjlJ2srx0mVhVOCwL-TXsSg=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3t8EnHK0fCisI3y2ShBf0ggmbeV19D1Q_iIe6LLyguyb7sQ9F-gxfl_5OEg3UzjOg69aybvLDcgpXMw9QLS8JeWlu7qinWXkUkGZu5Zl0DrzQlhsz-77-Mq87NHGmFm6j-uDgI=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WMktXNdvkrCYyNQ6Y38zprWGFHRd2UeZmi-cva0bEN81uUUCmE23ViWCjzhV4k27eLjN42b--ET-owJMwcco10UI0tWGHASJU3egHH6rAZGH9Cr-dszJ-y93xcjJe8G3pKnTpvQ=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IPTg6Co3yj9VIiQLkbQzZ-_pfKEs9cijeZXP25K6uZOIeS6mGhnL7TEh2NunIPnweet0V1BTbACHnTvOSDgu6dxba8-4nvbDq03WJFCoqzAmmj3-VNSxwslJYgLDeafyohevl=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cFJWrP0iisXy-RxDNgT8RqtVjCttRXd46wSm7mIb755M01aAqjvib53A3Ftz5UtGjJ8iXU3fAu_rgd5F2ntajMGgIqfILDOxdki3l0q7yvcu777hPqvke9bkso1I1n8g6Awp6=w1280-h107-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2af39xjDanegEDBiGw-vpk4t8DPPxyixu2lgE0dbf59lYVBfDRwv9jMUHGQwAnlxdQwIgtwbF0273tU_4DOb8FwfVHqmUwQvLpgmWCxkOUvC5FhTFlLzsw_fcEldLi06wzwuxtxA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EbYiqg5jCihuv_NSax-wjZ8TEzNhCmB-MgvlGNp37brQS4Y8zuiVb0rO_6zLaXlj9GC1hPFoSXHNY2ImA3tXxLzILhbUO9BJlvOZH3yqcRptR7lrjEXpbgyX48dbuoJI4I4j4fA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sfeOC5uIXt8iRFaT4ZO7mQbfGF5kP3bTnadvHwbQf6c_3IX5F_CnqRbA0aTWAaCclGAvpt8zYMJDY8d-j64kbTk4MsZEhUm1WWh6Ztqs1xKywny_k_A4uKt3PD1wFRnlF2fv8bQ=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sDK4xQGbI1t7Z8NbPlJxqOLz-8m0jap2l3o_uaUSquI1tubLRyrS5mmEzpBeHvTANkddkHUN8pFsXg3EQ5lr2CyvHeEsf1-gZIWPU26MXPioLELDl93NHNbkzkd4E1hamG3p9=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n2X3zeG_ki0d-RqRKXAdypnHIG6H7vesZM4evr59AVfHu-_Yzag632gSeKKlXx5QceJC-XpC_bE4ym3O8GHOzs1qOETEaoFpvdu05AsWx0Ker5lLUlZnL11toSpbPPgqDGrMQdg=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1slh6iAJXBJcDzmsedkEjgLTp1rVxAtBTxP52NWAVyjPr4jLddcQ4LmiIxGh2guL9m_jawhR4jtUbLmZSmgX_xhJkCns6AlaGdF5BazslbgDWpU02P5TIJudCRnL0kpwZVVPLhSQ=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nQAAt2bMVwBpcn9NQqCym-GRNC9_cpaBdu8vhzTkGmyl8PDhYl8MBLlQ1BDcyP2VYUKDxbsLpyKGwGrIWHdOqOG-Zjo4P5hU3W4ipFQRy1Z-TBSqj2tdQjAiSvAQ1RTi4P4De4g=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv395_jMcBt9MGCnFwRZkG6ePvDqnxyyzgrcarEKur6piyc6FEm8gZnHGfUrkdRvyr-O7Iuh-hvXusGjNB3Yz0MTTs_ZlGuhY43p0r6d_UL1ssvA2wEZy9ZZ_DONXaGdcjjuymcT=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1o3vfLDql0BeA2jEnXMlaL1UaZPYcD3D5yNI4nqe9TejpwM03IqLamxgy_YrnrRv-HDBTZh119P8EF9SbZzsgfr8qp2ph5oRY55M9pnJWUxBEA6DAnpm6l_7pKKvEVcU15EeyIsg=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Feb6RlMDvBVAQdHnNREsot8WZSMPAsmNwj3fQqThTK5zgRAeOQOIoqFvha4OYdd76RpOH8jljSqgdmXb9dK-Yu26jkBiUdHea84DLBTIRvlLxmIAWnYUpSMcfAbYK2GwPgnOz=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kUeAAs6MDdwQNj-JXk2fIAOaHoGP9aM0EpxD-Oo36s1KsmhDqSmUFebZQrDKBkAaTTZ11qSa3KckbJ8vMQROi3-qMcldz2JCraczL6EpPsLUR-QtMxgd8W0Za_aLlXrDO9t-QwQ=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15T0uUlS_AoYNMjjmBYtvduZNoB3DZCqNwR73aLTpSu9oFIaWCDHySG35cKxRn4ikVn1F1zCiOFNCY-FQyfrw92PoJviC6iADdKv9FJ8_IkHHqedb-5olUBRP88ahLYgbefMN3=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HZ6xoMWaOD6Wjpi3bWfYe3qHRBMAJNiWkRGzmfs_AXJ2PSi95QgpPqBBF2a-zo9wbojdjE5nhOuZGEYEnRejBKt-KahLWm7_3IcaCOuv8L2ar5ysWCTVdPhdUvSJIdZQ3kw3k=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1N-gjjt6XatM7wkmutf3ocdbmtEuOHfNop0QnwVhDPMfuqFq7-Une93AmjiS2elsz3qeRkBGTiQoQBlNACfd-Fzqav9Za0zlCm0BIxioLO3Asb_Tu561_0Nzej82aP5Ikd74N_=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MkpHrVI7JFGVV3yvu2GvOXL2i43EcIjzS61VBqqjMrOT-OKKeebe3ECoUe1E0ANELXx9XT50vMbzwhe8iGmjTu1O7ywa2WtiNZNDYagIX29_MPEhg1LCJ2fe1vqOYcI73p_Bq9Q=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HuTWxdFQtISuKovjtbn6myKdkNq2d97Y7v04THceyEvda2XUbtZJZcM0YQhQG3oDv25u47s9gcomOsRG_ao5sKdGTAuAralik3ABALRuRYhSBc2v9nZpjLMWQQ7hbjMIFvxOZ=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15GeCxv8wuaRQuYdsoKNApphhvHXsqKIXKaP0ByTIHQzDoAqpjygfx2UtY6LiNO_9IEX7CtRI9JDO4KT-L6IXut_epxEBUQT2Fj_9cqI1_2E5dnTpkTGxtakr2aIh5_T3UcMae=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LKevNfZ5WkNvkhYzOJgx5qZ9ZavbBW9i4ayTFaggi-HytBIkkpY5bJVayKSPtmMq2Bc_gRBacbkHVhnQEC1V24sZaPFIHC2SY7uqKkHvhz_aVQlXvcMLVb0CRwz54oTejp0CC=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2no8u0VNLGNsDElq2D_pk6Ji1H0U6j_FY9Zq-_jNwtwVNr1wB8LucaW7floBlOcx75n91hqIGUq0_xE7J9vEMaIqdAT1H-_dciAj-t749aRMXIonBL1qMH3_ft3blOgtYTwRbB=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nRGxgoibO76p56ae1-DKkUmyoaXTQ7RUwibBJFNgXNPR_-9e6mHOrEqI3MYVkWEGUUfhe8NArXReJRxj04oCmtLWptZkUu_aGL0UrAdy-FXWrRkwxynNb5iN3RZa7yYXCQwazIg=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29BKvDrSW4qUi9ycNaEOTL38ru6V7zdAzvHGWgVdAsSRvtoiJcWsqxCRTboF3mwQ8D0oAjGJmgLSmHpMrOduAIrS6l75uJfz2itpi3IF5tM0n77C7aPlKP6C1BE43hIu2iBvF94A=w1280-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lZvCv9oQDXVZshJGQLDaZ_RQsBxqiZRYn9GxumAdkWefEH65H8ixWEnpWsiZ99Baf8i7Iwehrh1p-4UPLZ6DEQBvhaNlihwaYzrHuGnFS6ZrauRpAib4rDW2H95ELPI8M-N3p0Q=w1280-h207-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Máquina de Estado de la Clase Turno

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rz_oRhmz37nqCu3MbMYkZlH8EiYdBDRSADPG21p6OHbfswfV3prIQYmZ3BzEtzu87Ckyv4_l_uJLrn-ACy-bzDCuIF_TL6tw_IxTLs0jMiL-uCu0SWB3cnL88a4Ogytv7PrWqJQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2688hV-8ARjAdPjxV1AJhFN5E-z-tDRPZ9MVZ6gvka9_Bq5XNMnvv9s9ZNhg1IX4iX1ezW2dyeO4kG60W-XDKRr62jpYBGn8J8sTsWhfMCdgK1uBHE1iMytbl_GC0MsYqhTZ-g=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0POm2X-uuKIItD7_63Q3_EBcEpckicxVISi6eNWJjqz2Fgs260whFZhv_P8ZOGfg4GKI-RBeuNS1ST4O0rywCdkYTwcixVNeHrwnkR3N-ehM52JegIOlGeyTC5XdYi1eOfmIXS=w791-h287-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qaiezUGYa8DVvWF9GiGwW0PDPEovpimdumvz9JPbRU_Alzpo_6HwqHB4bR2Dn0ACBmGKFoynPH2pu_8_H2lGw734gOcOIQ-KT77G1cMDychqkVBWVDB7QZk9upO58etYgQfCiTQ=w791-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2biQPe2lVmEHgMbRLgb4ok9DnGn6L0Q-jmQspXS1AkdKfCrCJ5kmGqofMtxqsSVG6Zo9tjEvH2068U4JdHTyS98UUsCkFDP0DvaoWXrR32IgofG5U0Mbv-_PYIB0H2GXQ6KvL2Jg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lsalDUi5r3oeuec-7OfpxTyy57CiA6QtiqixxshlW1_QgT9EbcFO9mRQ5MpGmUGvsXsHey7o0OHwflyrhjXtxLE5Lb48x53bEseXIA_41hWMrQozEuFF-jndkHm_tGpKFrSEeoA=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv035brTSUprP2y6sGAHmV_-o3igMPwK3JhXdejZil4VwR_gm3koGyXMqSlTFQxHUz2lqBWfDYXTOA_zOvhkIawV5vuZSWQASlWxrI64GVbbWJmS5Ix9ReqqbbNOhK_awEVIkO6k=w1280-h428-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_ryeho-9Cf-IshMCm5y-3NEnWLn21fct8uihMMJ2-k3meNOtkfPc6Czu3CIlN4vIyb0LrTTB3oP4PZ5GcM-pdP6yKnqrhh-YEyEUAgQceV_zVL6BWu7IuAHrB2Gl6crkK__Yh5w=w1280-h214-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1C4w3gw_Dk2tC87DEecUE6k5Y6k8NhXRXH8YRfHn9gckFPVgJuzZLC7yx1Q8AQI5teUT1vBakFfVcgF04bgqmHvNV4REntwM69gqCvuehhoUpSdl2j4Qovd_qGNnAfocEfV3cPfQ=w1280-h214-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05mPV4DI9h5KmtQId4u43HpONogGQktkDhMK9Y2Vr6kJbLIUjuCE6qt6Lz2C0kTDH7CcUOcO0mCc5q3BfUSvOl8iPAyzVGvcM20kgIuR6iqyrIywGnv9CuZzQABcFCQUYV2AwLug=w1280-h214-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Vistas Arquitectónicas

Vista Arquitectónica de la funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IgWrwRAMk6UFnP8n2FYpemEz2heRiXvloF5TkhnPaZny4J3-cNZijYUw_7K7qu_kuzRMXSzDqrEEv1rghXjKh-Grta61wtRSGGv21zgBUrxqgwidC0V7UHkbRAafi2s9_pTZpiw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tudF_3Rtcu9wUTvDnbxoPtXymfT_qX-VEAt8EBKeT6tphszSx4gqL3kLKG4VpX6fdK3VnjGnpSAo53F5FW1GMoPL9GuIfxQEdr7IeVE1eNQsoZZkQMwkXse1beICabyDcX5bk=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1arlrKRBS06EcG85N1KQof9-QxeQ4lBDR3FqOIuc-aJL0Zjx3gPX5S72ABJz6xmSuybeT4OAyP9l3DQHwtpjMB_32gH0-tIuLmbuYyAhUPZsCQWvZ7r6mRX5zK6epgPXPjdsM7Cw=w738-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kn9zR9ih-FRdn4bzjLPS6KYJFH5kPnKSRhfSGUZi97OGD5UJfDW8NNXqtyQp-AJY6tTXqIumdughs8zu9Y_jdmMR4izevu4e9mKAiAV67Qgh9SbxaTwEtNlJkLK3GABzbHiUFWA=w738-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YqqeCNPx1JZnEiLjz3a95RCXzZlmIIpe75Cn7_c5QWVfnq3OJlzxl056JslLM5PR37z0TFLKT3pJmme0w-JwRetJJYi7nOboHjEQDb8knquM_w_9G0RWj4lqVLIBkH0l-swmcng=w738-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ahVDxu272irIRZkdp22s27qLlPpSt7Xc2dCDXylEl_hHTsUy9T4HotZ3yr590va83NDsxdGsfhZAQJ00r3PX4N0dkv0DiTqC9I8V0uMW74UJmNhIDpcEQmjTmrISz0eq3lTcLbQ=w738-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CY1GQTi7sOEHKzpaMBdMkNAMTdgHL5JxdPJeEOwY9KI_2vkVHkJJGkc3tSqYCuN38YfjuXIps9yoSGVEobdZnf_kuEqcir3BL82QKfr612LMv-AcNN15tZbIiRXtf57GSx8_L=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TjvPGEyCT_YMhdRaojAyMvcIxRs45CBYRZfW3ywMxMn_cS0FpSJIOlHTD8EWkkof1i3AP7IuK0u2Ckc3dzF-TAUkzyqJMUGSvZLhAmsvQ8v_w3vDn7W77WvSs1ODiU0T_uzSM=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lSgxDiUqBsvjHMLmcioFX7RMTJtGnrBXtsXjRfdvZRYItJvxLRXJL--OkyHVwyijx1HR8sFty_D_AeAG-AReaPrvcq08Cb0X3p4Qqa3_Mzm2ejesVr72b8GViU7K8k8n0fvVKRg=w1280-h313-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YwwuIF1v7hpUPN97bycdyIoWBVcw6u0ZhtOwMwZ6XH3EcEDXHha08eckAvSIZVPCVNaB0WH5WTaiJz7e6zDhcQ6UhNqiQ55B8POoiZkUwtemTPSHLe6ZEC3rzpan6T9PfSJP1hg=w1280-h313-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LZp64D6birEzOGtei0pDwc92GD3UBCrt8H7ur1OdJe5qIll_dkVEjEkdLPMyGO6F2tosNKt0OBvG19nr24yKj1xOghI-uuyDgJT6Vg_B7TBD4CsdtH7jtLX-nDBX0uBRJWXZb=w1280-h156-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4
Página 21 de 29
Vista Arquitectónica de diseño:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V-IT-m4v1zu8IKbZZRZyV8lrcYk7WCq5neQ-jiZIapamSv2no_Lb6Y4KHzbV2wdcqx_0o12Q1OnGej_GW3mMRP3MC7rH8MMsOYT4t6fOesUNhw3tCfmW1RnP17_0VipdC_yERvg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3A82-dQ3MfYcTC1zDXY05s-lYR8Uccjiqj19a3YN6BSEa5QrrhsWBwyqjE4PF1lc9I3j0GU_YVoACwjJSfZ4NaMpyfJ8q0Tmmo-DzQhSTVA-_E9AP2qPTsjSBFNMnS4YxglF5-dg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xR-VcKCGAch6C5iobmp9CC5ROiT1sco56XO045uQ3PgaxFY4rz40WsERUTYJqwLgf053ApUGLbVCrBnM5UhffH_L_1hpYGCuMhGmpZsbStPakGdWuOcrUpEQ6tQHwccZWFbFPAw=w944-h231-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nPbq4udqfX7N5BvrK0ySF1Wxef4hvt89mpYSz2qpq8bcn83ss51YTz2Rp6kvqDuBobtawJ7oC_49xAD1PoUOhpj1VQi75FIfS-zWSWIWGXJ9m0UgNJ3NnR_uXpUHrRgvIyxXj5g=w944-h231-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zeXLAKkilwOs4OcDfa_NA3UH3Hs6kq_mGumjVwOTLB5VTYx-55c62JrAHEQ2eY1mKRhrAon3sVUpOyuGTp3PlmIoorWlfHbAmukJbJJOfsGyhIYUMaByz_AWl76SPsLKvvEfhmA=w944-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Hk1jVobnwdTDj8YovGoUc_RtW9ZQIqhpnnx9webd_ORz3OzXAzr0MfZU6jNKiaa8ZT5MxL12oTIgu4aZpYsR2ML5YPjnzIBozACUtc2pqx6QtwHthimp0q6-jNNtDn8b7ws5bxg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EnzK0H9DzMdIiuerWWk61n96adwfGUXeUPo9zWCLs_5M2XxPw0Oap9azx11GfJRvDhvSfrIaOhDU6MR4iE4iR6ordtw2MDsTvoA6xBeUyE0NIjW3gW5UutmwQd-cP2jjnZHvmwA=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FZwAum-TZbfSkiLNRqfguIG0e8XeeZZJh-piykw4hWhxlKTJ5qIKL1QkqPfrarwChZh-sXp-_x60wE_9ZK3P2ZfQ1m3o2qUPB8VyOf947cS_CZhAw8k6qAKLXhfVLZrdg3dSNow=w1280-h838-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jRiELBoa8ghu5wCXeK4lAfYJJ7sJ6YKjOdpUB2SKUpOQyII-3XrH4Vjxie7x6qs7jW1Ikm-nutCt-Jd18O8O-D-DORg0H_aDrcbqwF7wfdoAYYNX7TXa_52KowsYdVg0xm6-V-Q=w1280-h279-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista Arquitectónica del despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26opviq7y21Z4BU5AEBofmqY38e5_QT2m00-AtmDOb3CnOwchjXz0GWafi46NZoKwjFT5-wG37bQK-3TYmdBhIkYcFYeFI8lUo2MLJX70y_AQcLrTHhs0fV6TKGOwplpTjfbRP=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GhJdL5mwKtSvdsiI-YTTs7Iu1vjKxljLgU3XZZtxvX3WacKgYK_Qnwz4tCnD12XbGdXcePlcsgDMz4O-Mj3UHiHXI-CZK0FTHwG-RPtTz30WieUn5v1TVtgf8dx_purvqzQmDhA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1L08eXbbrRVyKeahRl7lwMFoFa6hXyfq0MdyP6QuItE4ie1tYrQx8INZvwbZRsZCPtLvdLgIXZz9ntQtjy8cFUOIdQNRU25Ubqg0W2UCIYEDESxuXJBQRU47DOjJO2VIc5EgY2Iw=w738-h483-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_-tlSie-IiiEyPZyOOr6uC-NSceuLiIkTZw2-oJD7fUVJY6GibDOewN5OhR_v7B9ghIcJP4_A65gXy1fyzOK0Syb4zfVEjKHveaYyIDUnE6DE5y1KlmTKJsHUEGLcAdeyLd7R3A=w738-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HUKh6Z7KznASgPCnqk5SIH_YUDouMlORv0YzB8vPWh80Srpy9w6sbfd2AqFONxbMENGkGGLe6-pxvlCEkS4H1uCcMbXUvRXQPhKsh2g7SpcUt4OhKxDuskez7u8TBO_2ieWZM=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ruwAVSAMprZk0Or5A8TEM8hlFIkj2rJuAM3dIgIznzbzsmfRYeW2J59Svw38blUdRmYA_E8SeWDw_VSZsQFuwpqp5bdW-oKzTB8c5wex8sYNwbgkWp7RTf8md0WCjryZYMue1nA=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3F-H3r7lipn0M31VbIkmgLobBoQ-4G1dsL8K0fCwNJ6Gmma5rWzhn2WLCa4WOxsj79w8hw418SlSg80lyvdWS66xlZxtNIEGp7wGkKLtWw_UVMIAIg0h58o2_NmMksqOmtbCPm=w1280-h179-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qwEJdMjJSOZXJPRlI0dAj2HMDjYvK5BBvTw9sQx-jRqFzwvjKcTkw_XVKbJ-qrbtF2RJMbng_s-SWax-2jORl0FeNgPIeQTch1otMC-QTcpTvN7HApxTRhjp_DpT8hAR5DCUbjw=w1280-h179-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2v36kTwF3-EWJMzFfQSYtEUaMLuWSIE9sHZjz1wzveX5xnCliVpGhES57tI2mbqncMRgoaV6Cm1ZCqUQ-xI9yUzNcX48uEoifuto85AsqLLupXS68brIVRXcoHQNIPXK4kj6hhaA=w1280-h179-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Ciclo lectivo 2026 - Versión 1.4 Página 23 de 29

### Rediseño

Patrón Observer - Vista Estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01QNJvdcn1pgu40ATkSibEiyNtMEma3nTDl63d3AHpBQVmoe5m7m2WocdD5XJFSsUbnoregcXCKTCmlDaIEKTD8oTku_xibhdqzeA44ZCT129Tn25Xq-Yod5ZvXfNnDDyLqURBKg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2w5U3IHu304eyBG7Y-qTzlT1mUA6Z6q3gBTjv1TO7Gw8wnAMdtCESDn5n0KdfuTfMoIIBzoZ1uQhrLapY8D2z10iiD3f93glJjRR1L412VVwt0RV5pUj4aV4OGN8M8PXU53qNCoA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LbUzx2GdB5xR5PSbZPgaCuY2dMo0idjOqAK21zRGZzIEDrsIdQ2PCJ19HdYMqE2ByqU0C5Kx8G_pG3h6PuNKSIleWQuIOkXAkToe2m2i0aCfpv-G8iDLdUYKsQNqQgBKd5FDzsA=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D6d0igx-HDoO9oDqmFIP8ZihhcbAEFIqBwBJOW2qSC4pU2ll9h4YaLcudeQqyYQdZ_MYAN-Eig1VQ7jZR8HquLoJS2foeEtE9n5kGSEBZkNTFuJDXlVAaWPIW6HCrZBYOwl_Y_w=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pfV16YW9WdIWrEFumgoBAoFNBsKR9TNnT8z3g9yX32PDBqIT4-ivIc71pVbhxl6eYdrtZP-N6ReZHXwdeBEIy7l0iCHdCbSJHzJ5ROXyZ1gGjedXfG7zYBCu64_tFvNJyGeN0nQ=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mnfoG0vqwY0mmpfCylGKrsnQaavkG9EfRpQpPBn9nG3F04FK5hHkC_2wjUp92VanZ3dN5V7u8PHlnEDmUPxRrbINx67Kke1LmAxutQFhRKCdXmsOHNZhCwsqO0guoTW0Rbg6VAg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QDkg1qaCTvjg7optWztxx4VOj6-GzUU4qBUBIN8eD1Z-t6ci9MzvCafY-Y0jOU4P-xE1QQBU6Z1l1M0F015c-thp05gGElu3wmi1ijmqPXYZSLeQ3J8Jq0pXILqrzlnOYYLtQ2g=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HwNI-UqBnGuVNFq-PO94WTyiHyxZMcGMqtU9DkJVAnu6PlQx1icszuArzE3TnRpKP8YtDf1YenUARRxdtkotuJA7cks2c4o3Eb9TglTHwdCXdQFPMZPpbJL0sFZ0OttLA7uVuAw=w1280-h378-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv258c41SRu2yKZieGdyG7scwxPI7TwRFt9k_CqiMN_1YdP7Z07I_6kPd6m8iux0Se4DJ7J3ozNUwdoEiFZNalgaemVTPL6jiTNOHFeZfOvPXskNCrV2C41nmOicOmNBfRl7u5cruA=w1280-h189-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1t-znL2jvppM9Moo8Wf3GRwdqwhHSv0PUBp7Z3fmQ4u0kecLCOjfBxICXxsRqB9w0Tp146yWlSej_uwKMtm9m_fU9qC0SyWTl5Nj-CMfFumTsHvJ89haylgslzC-FHjcRmzvm-dw=w1280-h189-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1roljU4HSPkpZy1MC_2XV4VZgwYANmvEnhEEFY9NP8rBJ0lV_oFZBjyn2y1i57WXtmhEbKKxr62q7GPQXYn9n2A-mP0aGBc5b2ckkC2_K7CrIX6snz_K-yIkwpUg1DFqhuDulRGg=w1280-h187-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4

#### Página 24 de 29

Vista del comportamiento
Explicación
GestorAusenciaProfesional
Es el sujeto, quien implementa la interfaz ISujeto y tiene los métodos requeridos para manejar los observadores.
Primero, crea sus observadores y los agrega a su array de observadores mediante el método “suscribir” cuyo parámetro es un observador y el del tipo abstracto IObservadorTurno.
Ya tiene la información de los contactos de los pacientes a notificar y los otros datos necesarios a ubicar en el mensaje. Dentro el método “notificar()” se disparan los métodos necesarios de sus observadores para que se realice la notificación a cada interfaz correspondiente.
IObservadorTurno
Es una clase abstracta cuyos métodos no tienen código y obliga a las clases que implementan esta interfaz que le dé un desarrollo con la signatura definida. El método “enviarNotificación (contactos: String[[]], fechaHoraTurno:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QitiomUpfizue2q7k_FX-ufzpa8tvn7g3DccKw6OsJ4AKsFbr9L3nKTAGNAKUnUA3_bSQW0wlD4Q72vX2eD3pn7ahvMXDiek_3hXlAgsgvfUwzmyi3xRvZ3CtEhiUviv0SEesrA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RlEfVmp2VScvqAq8fdjjSmpNSLsZDgl8kX53O5I0Dm1Ar5xy00v4x4mKdnUEPyOFmuU_cUdvVuxxlrez7mIye_-ORLXXoxECJ8vbYuirZc2NlcGiLurDBO2CEXfb_WnjusrYe=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27Nc9cjpLODhMCC7Gg_4OQbPG0yIjKtLyDg317UqSojuYNvrAkVjYxSo28QblzfAdh83e_aKg27__wTk2JNBiywaXVaTFezllReu5AbVurKcvy627f3MpncLYpvfgX9gbdZYYwzQ=w738-h218-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15C_kr2KZaxwkPx2zHozhcf4cc9tJSHB1O_IOBjPDx2R6b3l-56Du2dxRTbderGyrW6O44YWeacrnaqL6JhjUyIedHx2ZYmod9-Jh2J5rO6Z9I-fhmj025HM-HAAAN6sBauFTg=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36OaaP_b98jvqmRfrWtC9N6ikXVaqoxjWUPiwgSyggm9zVX7W8I7zB7HSjv4UwmlmPinQkdFNspy_vXwU8q6kK4shVEWfFAVEhaxXP9NpuaDG-DbTY2Z4HoAFgXof1jfO512BFMQ=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QIEvV4UepIpyFI-ky0TIQO8fMz1rPymn6K5nXaAL0QG7u1y2s7gpItm78ikFaxdxEvcW8OyUVHCgDdHInFxmIzTXhld4LciQa5ztnuuNKQXmquP0KcUOIbeYudi4wt-zkKKwPHw=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ty2F_ydnFHMDGI6mb1sRKVKooQDNFN2ICV8PHHyMkRBEuV8wEtu01MShtb-lXmuu_jlYF30wij0ibJYWcamG17WYaV9W2D_MIQU5upz2Q80Cntxod4-tNWeheKFkKHh8pZ024Rg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Vz-1Kk_YqT-SXwvoJy2Tkzvo-YxmupYrKQHH_TllVFqlSFzcb_HI_bEXdxXvUts-g-joZD15UJOrUAXbzX4bMfSMhCu0CjOxMvZFYPcljVDZ4Dzfo6FwKrF0oBXOSGduo2vI5eQ=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4

#### Página 25 de 29

Date[[]], nombreApellidoProf: String[[]], servicio: String[[]])” es polimórfico, es decir, dependiendo del objeto que se le ejecute este mensaje, es la respuesta que tendrá. Contiene como parámetro todos los datos que se necesitan para enviar el mensaje y el correo.
En el parámetro de contactos se pasará ya sea los números de teléfono como el correo electrónico de un grupo de pacientes.
Clases concretas InterfazSMS e InterfazCorreo
Estas clases implementan la intefaz IObservadorTurno dándole funcionalidad a los métodos que obliga a que definan. Además, tienen sus métodos particulares para cumplir con la funcionalidad de notificar a los contactos recibidos por parámetro. Estos métodos son “enviarSMS()” y “enviarCorreo()” de la InterfazSMS y la InterfazCorreo respectivamente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29TDpYFff1AiIXcG4phDnJ_sWegrem1XuHlOv5wOndJzpvVX0a1OcPAM6IdElBHXKWy4VMoq78tSe6qkPG_s7jPp_GytFj724HhHWwDgqbehEzQHzbssoRhkC2-Fc7nkjKmpp3=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1im3LOoiXfUhnnEBBRxVr7dQri_LooAMP4W329gnO9-oJCf-PUmfzTsk1wbn5C5gOQNarhu-Lx92Ekji09VDVg52BWDtseSioAhcmY7c_6U24ZbDdzeRQF05-KMgg2YGbOW6RWFQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28I9N0aT1hL9BcyYzxambVfCu8kb0wWdPQPUOzBM1uBtPuC_VRZuqfIfLNLPjCVFkdKQZcZp1U5JNxEN50eRtZHUG0sXhY-WC2nnd8jiXtz5kERx6yKZE43OJjlKyPD000uhc1lQ=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18Mm44pwhnfsMigpdUDj3RU-ZGywxLwYeBZe8zxA-tiJWSpwmdQLYWbGRltd9qdAXvznc7xtBEBfYOy2VpYu6QrYCs47mMsYDIKfhWwOj4Ko-sUNjdnnOkT6ETaINa6k5jn_sK=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2icemAKmdVynZkO5DSxDmhf6xHM_r_FuekXrKmzVyd8X95Hd-vY3LPk2RG2YaXpRiaM6yDPgzxn9E1YRe7lMx6nCvML0sHM9-jwCBaViMw2rgBmcIMk2TwR4xS1kBCKIrDdRqkpg=w1280-h399-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Idqkqj4JVSBlVTHs0lhiswiq9rqKsgMm08Yv4R_rx1Q-_Bnu8ydbObjNqmqE28WhcbiVN6UWsL5tLbGQya4EGmZNrgaWwWeDT0-fPBcV7rIXqbc_HHDF67pYX4RzwgyQ579mUOQ=w1280-h399-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4 Página 26 de 29
Patrón State - Vista Estática
Vista del comportamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qEN_jsp5Plz7L_800vdLr93vl6FTX8b7LCJbWMz5b1jZhS32_FrWZ7QR2znbDGn5_fmhBJT1RcwDpanJBpNqFk6D7_YMSDsCLGzvdpKbd8KzwZ3FnEY0F-BjoZ8nq6zWGVDT27A=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27cFbGmYlSDmymfsCvR1x2W_gO1LATuuV9uQvQq0k50MbT8Dt1k-RfJZNSIVEbiXUzsRNahh2XlB6oVK1QmOHROPjLIU8_l6NeuWGD3m_HPWNFj2EhJdfm_vdj3oqVqKdfWi5X=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jSmfnPAJy75LAHN0AJ42ICc5PEtnQ8AnDeBqeaG4zpW0bHGmhFc0DwV1-utEkLLlGlyd6b9Yrm9IJqWY2ymU-M9l4lQlnFG3IiPmd-TNn5LxdUMKl_ygg0Phr0PgP-Lvod7LFKg=w1086-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K3WZEfecwU9Qrg2esOyYIYk-gS8Gt-r4jG-PH7iLDd1uiyj52Ybl5fnGI-6jQs6VJ3DVeQrYndxQpAs6XMUFiqFFXhTpNIkACsjAKVT0pYMW5NIpXLg5kEJ5vLl12s7TFpF43CA=w1086-h241-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qmQ7pLQOridLDnTCls6Up5ZmhHjYGfzoGGzpkujey2yhIXa7wwgR-VBgCOnsHezmoIihbdsKKyxap53dgELYRHHGdCUiwOy5Uf1gErL41kBqLwAMjYvgR1HYNC9O3C60PjOvQBQ=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sTUlDrW8kGM9AIZOHBd6XWoQd05-kT_D3mwPPQuR3c4Oh52N_nuhT76CZuSK86dVlamGV_9Tp4A3J0zn45L8GJm1op7BsHS-4XM9a-DO_7xqDRXZJdeu4LQDnTXUfWo3yKChkyw=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34u9lCaLvBNpyXpovIxIzYsvmryl8QqTEtjio8m09VbCj_2cOr3UKyBJN3651DGoZrWMMBco5WvhAnUs4aLZIHbXerEmzO2rUDc9VlNy0XeD3BBtH8pwxWxZGMDKGYXByU4CwL8g=w1280-h187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZJRLaC3qEF5zBF92YAOGNZ3sHTZiB3c6Yg6Fd_Af78MDOHsvbARziG_Tazr94wMQYDUw9l4KrHpmIJNpQ9wkGuy-PhBR8Md44Zmnfh-BCiFZNMg9CW1ut4Hvh29KF2FqZhoEj3Q=w1280-h187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bUWMu6i9gn1XopnZZaKCZ5RSu8vYA1UQv5A1B6_DY7TF73wGh4cDhOymDLSv232Zr-MpXkmAoxNZIL0OdQ3bby-hvudoHy2PUWtRXaJli9kO-uJ4zEhd7jUinzCV4KmIIf3F7sg=w1280-h373-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4 Página 27 de 29
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gc8TSHXk6Kpw4qVBSaTPzlHLu-YP75bxgJwfICLBK3eb94bWIWKvOVPBgvTLmXOHujRsB4knmUUVI-GDpr8Xa43bj77LIs8SgKyGrRu4RV6Nt32ZVRlMRDOvNAZeZrdLjCyPQIw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CQcvQBHuCCCFbdom8UlIEagemu9N9p9dDYcPgynQqKv12iLaEpkgP6rtmrGk1RKpmk2UDXEgtJbwsk171e8PUO-iqCvVJ33DbxuCMomxCiY8IyJG4OMOwV0M1vCE-cQX6F8Z9nw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pXLv6vuVkqmNnCTPwZfUPtHQScGi5qTeEHndUcVm7IOQDzg7WSfCPjwSiNXkFpKnJ3DrmqvwAPjnZD8AIFPDxIXUDZsoqw9NsODpi2qlCSPgIrIQzp0Yf-ArDmlZeF8rkCPsr=w1086-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MDaPd8A1t8CxgLxTEcX9Wf5NoJuIAl6D_5IaPslRNuywLlgfJuEuRtapZkQw_2jxI79l9LZXccKIDgowYuvuZBMXMYV_dCzAyNTZJ5Z5pyTq4qMfeXE1eB60YvSiuu2Ctrd4RbQ=w1086-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KtFisBIrNj3T6JfWmGxWud2brELttSvUISNzn3Z2PmyNu-I1JZ60OZPekqh8eUj2UxGfp9SCoL-YwiqBiMAJQf9cb513ugPOR6JV1JEhsQsDN67quu5A1NsNNAZ_10gCTpgKEFg=w1086-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0exzcnCbsoZwZiSYbPw7GrM_xsd3NAKUPSIOIK9NooADZNFES3HzqdXqNK2kOtz50rrh6WxQWUlUG-Ggn2l8zMu9TNYI40GW3WUomCiRseSI0TcC4CDdtwhelfAkG1WnjlnZCp=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qgJDqPIj8iWpoAo931hJqxh7_DslPi7hqdKNZYmB7DMJEyxYskmvMOjP4RxmeFyb99u27CITLpYIi7Nx-Qj2y0TPVPBP1cxtIBzWEeI559otuRK2YSchvMHEz1BXt9H-TRYPkwg=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4

#### Página 28 de 29

Explicación
Clase concreta Turno
Esta clase es el contexto del patrón, cuyo comportamiento cambia según el estado en el que está. En el momento que se le indica que será cancelado, delega la responsabilidad de dicho cambio de estado a su estado actual, que en términos de ejecución es “Solicitado”.
Clase abstracta Estado
Es una clase cuyo método “cancelar (this: Turno, fechaHoraActual: DateTime, motivo: MotivoCancelacion, historiales: CambioEstado[])” es polimórfico porque cada una de sus clases hijas (que heredan de la misma) le darán una implementación de acuerdo al comportamiento en cada estado. Se le pasa el turno para indicarle el cambio realizado, la fechaHoraActual y el motivo para el cambio de estado y los historiales para que el estado en ese momento pueda finalizar el cambio de estado de ese momento.
Clase concreta Solicitado
Hereda de la clase “Estado” y le da una implementación al método “cancelar()”. Dentro del mismo suma uno al cantidad de cancelaciones de turnos al paciente afectado y le guarda la fecha hora fin en el cambio de estado actual, luego crea el nuevo estado “Cancelado”, crea el nuevo cambio estado mandándole por parámetro su fecha de inicio, el estado correspondiente y el motivo. Por último, le indica a su turno que se tiene un nuevo estado y que agregue a su array el nuevo cambio de estado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PLf8aqEr5ahxpkG3uG5jXbV-FSAzTaTn0vqQabDkX9_HVsQBC2dVSajz5cfTLM9yry_aXGCTkwUpt0_J6ZlwVm3gr4UTI2vzB7-KO7lOjKbDrpZpSXiNGUWqzd5Di5-9jrlaP=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1b7J0Qqi7SaeWL2cYtfq0eKzEf_l1KhbzMf9DbplWxzcKBCy_6cxyZnGmWcahGEV7zjB-mjQe_MbbUHFLz7UDiAz3oNay10F1NhOT4ygC-lOggyqr2C7pS2BrpYQ7eFNV17rnuAw=w84-h87-v0?authuser=0)
