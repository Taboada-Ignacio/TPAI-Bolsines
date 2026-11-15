# PPA Consultorio de Salud Mental - Monolítico - V1.4.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento describe un 
proyecto práctico de aplicación para un consultorio de salud mental
, enfocado en el desarrollo de un 
sistema informático basado en la orientación a objetos
 y un 
diseño arquitectónico monolítico
. Su propósito central es 
gestionar eficientemente las agendas de los profesionales, la asignación de turnos y las asistencias
, implementando además reglas de negocio claras para manejar ausencias y notificaciones a los pacientes. Para lograrlo, la propuesta detalla 
casos de uso esenciales
, como la solicitud de citas y la administración de inasistencias, apoyándose en 
patrones de diseño avanzados
 como 
Observer
 y 
State
 para garantizar una arquitectura de software robusta y flexible.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14XVikOpUur8t92lsmduLeTfHvIvlvAynboB9rAkasyk_KSv4xKRObRTHwuqM0dxJ9abwQtLkfcYHpWXZJJfWbGxXsUib-js9_pCaRnqb35e68qHFbFLqkdu2lVPbIzAl2Q1YdEg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EXUYszZlBqVqar1pOKYv2gCCB4JOjPSCSW2SnXaf5PqSoOu1h44HShSV_daGQvb6IjswRndTwgRMr8UqkxZV0B3Bs3XgyDLvIp7ixk-bpp5ulVIHK7iYxaymZqezGxqRPmugxEA=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2W2RhE2DNZDssBYPHNoblA0eNM_6YeYeOkWBQ-yaqeOSvVJZHena9u1_aZKTHAgOLyzku6widH10OXPNffIfU8IpcNj5puuv9eJMbYmcgdljkDWLinTnjezzHLnkl2IGir-zVE=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1H8TbXA-g90S1HCqf66XpVppRUDiUQm-I9mPdk34cOnEVjo2XeVTeqGb5WwXPYlCfdNjvge6ldFpHiGtYejmhJhAom5dYUKSloBi5Sy7r1jyNQQotuMGGpoRU3GBnXaKxSRPmryg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aqAjATazEX6F7Zn3gdevHou_cy-3vv4F4HmZczYLlphAD_NYNfQICMMhivcIiIJ-h3BjUX7Disn_gnL2KOt9OYTMDwLLfdPGnLJ2Cahdd6K9JIREf1UDj21pT6XJTVaIzPoCMcg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pTq_iL5yFl6tIIM6VxUtctk1_8QXJwHoyTG-QXv28vb_VwMuMbPy4aLRIFuPJSabtQBx1fmXuqJA-BMlDVgpLhwI-yHFAjunMuWKCXFSxWrSHGdlwdtUcTlsZAvu26_wYWDbj=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XE9Y7FWMFbKBd8ttd1ZwjN9YI8KuDVJ47yzuN9-GLXCtp1ytMdh1oNHXwpKXr2AiQujGTV-idK2JrWl5fQeFdSqq1up4xQlEXH8_6GVhCs2Wce5PAsyRnsBYTH6RZx8WoCA6hfw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-II2Bw18gq4nQMPF-M1AvDi1qchd1b2sI9kJglWwyTYIIsWTne6Arn2VWBzdMafavAdYQ6_o9urVu6cpRDzVmv3DKTNmoE5VdTgM_l17QAkBqdKJrSpZ1EM_cOyf-H34SG8enPw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0i0q4eJrG42U4VXW_CeBEVKnY9T8FcLbJoFOZQuHmY5BWgo0EQQsBtQKpSxpuX0EA0EudfOKyCneyOMZV2Ho6a3qZG2u2NqLnVaP0GIzJmlyk8RZzdYZ8uM-pOoxGQs_xaFrTMOg=w740-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_kSXT3I29POghwCGwU-ItqnsRFH3JcRG0WzyB7IuRxj-wbEkTQdKnVANfm5anLsmOdutsiyMHhwqTgA5jZkZyp36DbyGLL83zM9zdJiJ9uY13tADwcn5cpNSbVaegiDg5vsly=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11DLdKN-MZs7ESCvV9b2V5je1cESK_KrQst_s0vN6AFHo6FvqsAcFXYJk0HxYc5410vSoc_kk2N1erbJwdaPA0j33I3zMixIWuTQLGBYKrRIGUEYonEU2uqz2d4x_B0kvw0BEsmQ=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_057xr9tEII5nDlbTrc77H1Fyyr2hzvZ0lApuHz07R1J4IUWnPSkTLqAdTwPmXdbIcq8xg3VtipIqatYGhf73rbseoxBkbc1vK1V3NVTVKYk80Bx9nMDdKmhEs-5FSO2OVNPl=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2le_YYqJ927YGtRrkgAN7oqPocL_n_MKUktO8T7sgTarAQYYarz8sD1X2_nUn31qVOJCKhwdw_l8RP6f91y4wC-nt282fJwYyiIRt3lFJj2WU6dUhWvVyxkbrzOoc0AOyzeCrX=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WBzxCsfs7_k4pOfNAd5qzybQHCxHzCbLxxZu-nNnxnm4BtvldJ4SI-zSax9yIdATpO1PSQ1atw6I2a3rR8UU_6Bq_cprmXmi_hDpb8p7S0vQA3-N1RZCLtxUgHSY29nhZrzvVzg=w740-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1RvdXVbSxS1OpYDGKlI_aDwWedsmHBxNUfNHxjVXlNqNnRz4-XdtsDd79ZyDvFm-44rXKSS7vESkzGTMXQ8Ew5vpPUxnBB-q7fyx8XeB_61rtOjKzZx6ZbO_TPmV_0ZsNBgjlVrQ=w740-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aD2MveOjkvoL4LUBcgPSqL0JqfixMySlRv4Tayin07B5pIp90-_ZESzMin12zvzx-d4hd8PJGM3wZfCqUOP-rybL7jMazEgaylZ3RrIGEe9gRSyNxp1lj6fNdiS68tq6amSuRfw=w740-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GvB7kx2dg_RztyWxL2ocseK137nOgUP-jmmyTXpoXT96KrAgeN5-sLZ5t3ly5rjaLJ374NkDNliw4rXnkiXK9S-SFkwlKFTJTTdtW2VVBfv8xpkN3XiggOch8MbN8DsHzBws6Vg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fsXcuGAytED_7HnyZw97jruuO9QiGFc7drzgLZMkmthSBwsrcukQb5s433nY_BxvCmwSMpGkiF8VAaNjdR3r7oB1aKdXyAVIK_vQ5cjAGVM2bvBKHdHAipaf-V_-3D16-RJSBqg=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NXZD5K2keNHUE-RHDVSs52T2XxRDvJXDxPwJiLABWa_y4Z_zJ-TI66TF4LUlFDPwvwQuOXxIjEmf0qlnBNmIQ9J0p1LC8CaB4Us3SxvRgiJsdjgOUHM3GacYvNnWZSmXrcyzl7g=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Xa3IrytmPMKwCWBIGz_FSiK2DeObS82m53FapxS3wuszNXgSPBsD7z3qjjDSj2B9ReWPkOY0US8Zwmroyy5pfrrpHJMZi3yLxfeRVW0RqJQcG1STXVC6bdMmpw5wySrXcIAP0jA=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2D9Zv5u36G9whjGcqqDWEopek19P4OtppOrYcn75DNac9JHMotR03dgUqa4Ijw3b__mw3q2R3_In7sjICrS1qevQ1PpUWpHaN2GB5g-BW_prUraxPsYdZiVunFwkuqn5KWkLzf=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1p2HSgzMrW1W2QFp44pBjADA9TSC7mpIoZN1fg5hfBBQLX-tV6hg0okyla8rt3zrV-vZd4b0tpoyrhp_3GVPqOdZNLRwmvpmx7Y8cHpUOHLbmhQNMCN9zlgb63A4Usx_Vam-Bt=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XXj_GA_fWKNayj6QXVpTUncWHrsopR5c5O_vfoGDFvTdSjpzSxvPOeyRCQlfsRYiwVswpX-v-qgpax1esJQid6gZFqCxJRxcimeozlaNOWcvRyTbV0IQytLlvnVcE_yhWuxST8g=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xn_8lVqmM8xrIW7VzGB80xcUjbBx2I2nqpNCdgL3PuWwgTldvx9WqA5dT5g7GfrsT0Uz3NzuJK5EXVAy6-iE08w5SStceZ5LqJMOJDtXPpH3RMsRJJqa4he2jraDOnt05wxZE=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0F8sWfsGRoMKN2hU3skyTy0RCGcTWXEG-Mi7Huhpdk7jVBGvOJQxjonWdM9gxXFyYM-jSevdkeNPpDnnj5OA2wAbgc06gb8kEFeidssdnKjK8e1CpnmyqVoCpO51tUaMPCO3EO=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FDY7XF7zCrxKhlaiWqV035xmT-jN5ajTsteIsvGUG5SA6N4ZPuBKWfKoJICRgK2pspLfvKMUu9s6RSJq8S4n5l7Y_VEettDHdgQiOLXa2ypYGtoT5jdaPyKoWm5G5PKMOzudG9w=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Drh-DoG6BCSBXcLChP0Cd91qxMIexfI0E-oarlRdSaQ6fOkMpUZOQekENuqoP6dO1jcnfBKaZMpReNtYa51WYLZM_aH94mpUD4HRDf0ldyfbWpjFPl6_Vv3c2eLSf7n_CytPwWg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19RxaySfbopUGX4mQySMp_3f_esWINw5EjH2PpSHpLpQG-XU3OItYaGZuzENZ1W3e0xBIIYv2NGExnYisdzV6S9FiuFmpIxNJDQi9JOA7Wj8_-OS7Q1p2T41bOaSWp2Pvx6_fHXg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CO3rubrLVh70tpRnDY55pzBfj92wLonJTD89h1GPfExThOqP1g-KMn5ZgkiegKlyhj6_91-2k49diS_cq7N62Ns4UwSX_bRd_FUok_1YKl-HmYQ_We_-wPljcYOYcSNm61VLckg=w760-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LLiLKzAGSuV2cOddX4YTBnHejOnRyl2w2x0Yt_1Yx8LXMcP18hwasyAvofNTSOCho5OFL3k1mAzYKooCikktBHQLx-7NY8QC8jFAWHUZ5WMAQGdUhudfsVqCjYcpZHYZSXyBQ=w760-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XEVnQXSymbeN5ckRZRmX5nd7UKKE_jWxsJteQs3ZSRnyXo24jM8Cr3_bwIU2VcVQbmUL3TnoglXTtZrDxAsEMwpgD78jl5piC26sAdAh_go89DjRtPAgilBPm6DRAifbA5BgB6A=w760-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv051qx7iHPRHkK3nmSh9FWknimgktCo8-psv-u_mzAOw6FWTnphHslrGT1T2_-mkTBiO-wtFbjF9do10tG3Evoposv2dWfw8BDORU7aCcR3TrAUsHUjFdEer4JYIc1lca8tavJqFQ=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WyXN97f3ThBUA2EoKXKxwRBY0MdEo9B2Hl0WwhdljE30We3yzeh-BlqSykivYTlYtemn-dElqBVdCL8WNszYWIMaUrbGXS3jFimWD2zlPru9mxV77DY7ckVTGouAyKuOj6AtS=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IR-bGZ0svLxltoganuXX-YXFqi-Hy0vTYsJeusr1xOjIgL7nVGlPhH67dXXufyEMindLpKpMF7HbrljCh4J6Zgl6_vzpMyj5qSz6Ytr95Sua1311mcrQV0-EAkvCFhl0XSVv9Ig=w760-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3woSaiesXKAswBCw6cIRdvCF_S05NBlPcXgDFN4mZodHHpsXksq5lkRzvlgjuy_91pIiSWkRghYEA0wqZ7huClsl4s4lSOIcEkFV4k6Xf2dZp75UAxZKKRWILLf1PQpXgyNdhgEQ=w760-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Jrc5vpXqTBT5Sh1rOcGhGUccwtYJlIOWFaNDZUaFq1mQVjVvpZmEUi5SSDiRTfOgkCF9H8KMyes9iXdW9MIt0G_m9Uqu1_6fNkbWlOHm_POdP6KXqGJSEJwwD0fSglkcnMJzqAA=w760-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13j2A2ZWlJZxbGCkGCtQfs2Nbbjsz--Hnu_rXROYU8ek7U5JHZeVqre02v8-Zcjbw9UE6DomdF3X1HTM-b7NiBFbRH1wq7xjHbypAZE6fFidBim47A1ps1qQWbVAEz4I-EHNz_=w760-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ErY15zqVH5BqYGCY4VnIcJVZPT50B_PSprsOO4mchrRgC3Ut7bV-RjFQmsH2TDejv-ZGBdQGy--thIH5gKCv4IBLay-vORBMtQ47Ti-smYZ1x3JpKaPjKMkTOj1QDho-Ozlt3=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PraqMeDKqA0naYmcKVgoCT_2v9C__emWBXlpmHdkSTahTuW3eCNP2vdNY03ZgdRCy6SKW-SFLbsnUQvteE8IDXt3BRscNKz5jUJbquK_oNZMgXWKZH4UVQLsqb84GQXsSbufqsw=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Oft8heap9PSGZBuEShK4_0Xm7Kg-afCB8XU798tU4yaPssRbvIooLs9mS7yF9lUcj3pWOHKbH3vGLWxzUgwVrEJuqWkL2fr2PLvvtxf1VDOIU0daA8gK8L1mUHSdmx2PcloV5Tw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36xasNwsy1jN69P8JSRsQieaoti2Lal8ZkKdF_oG7gn0H2il0TB42f68vprj12DcUHJVZ1pLsWqILmvKPBJ_v2i8sSFKvVnnqFImzZ4120wocs5-o5ZCZzAxYOU1z78E5VHbE_fg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22wHl9nmFk0VHMRNOEWBcdqzwCwPnzAxWamgJn3jhnkqA-rsmm6r2XtkFtA5AH4LbeGNj64Q2gF_jEgh3If9MsDdhCBcbDwhXHklCnK_2GEXtEIaKPJb48T7LOK2Ag8lCWe0st=w761-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JDVUnn9vGmIDy09pl6_AmZmSVFw203_ZDwAh2QfiJW_BCnjD34H3ubvVoD1liJPFLnfY_CtE902at2lIy4s4fp8muFlFCYc3-z1m3JwICriCvaPmG2Z2UeJIilRFLIZTWt6EP-A=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eiyZh5AXeGWuGmO1J-hwjTmVqVlkjYvmIevwbCDqd_2SzwmZNxVuIlJ7wKlpvhYeSmXHfjIkVBBgO7j_Rdi-9xpqgB-nrPnL-iSfgiIxhleBqMHc9ZLRGFBkqt9IMTCka4PnNFg=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kmF91oxR3dnfisNS1eMQI9GTrgT13QQKXbJFU3hf5W5wDK9er3RQxdQKQib1NHLPNcB0isFHIrfWTyrwuoQ3SAZUgEagBqRZLMVChbps8fqAarz5asNGajxrrfufHTVfg8riIKg=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EdUxFXeFEGfFWBfiM_Ht6o03XIhAieAWdPSzKgZFY4PhbmhEVBlwBX-bDJSPzYbG5oMrsSnEgt7ZvW4gAlwPi9WRfcRI4wxZp3v98ULMVANMJD9yvR1NbBzVLqZNbCQfjsw0JJQ=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv256mgtCCkj9Vy50Sxri9mdsXdRNle3-TB5tT--1Sd7BVVxS2tA2CsNSpstaXmz5EhYsEeJYAaaRvmAawu5ulI0RXyTKmSdeaRvyCWCbqjBx_94c1QfWl9_ynL2kLozqDjaGkoDVw=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vLyGQuNKUV_7ghYjoBrZmkrhids_4AZB97djfjjRRpVdeUGoTCLZr9nDcSfhqfXL-LtMNF43WAuTOxnXKQMyxIITBL05QOkvNvq_-nVV2LFz3cEyh8IDjOeWSVwdXfXCWs4rhhg=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12cUIdNgm-KNvsMzvMCFaxvLr65feqVsrydq4A_hRc2ezu6HQZb0_q6BySYwmVZu31GN0aj7Ky6RqMMv6b--qTYv93RS05ku6FjG_9QFlPKmiSbC0c4W1LUIWmy2s21rNZG1-T=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FIcGLyenrzJbTeoO1a666UcCn1IAT1L4rDYXs388TwTtaQVGupefYgFHcVzDJ1FMbUvV2Kbz9zLqN_uVDj_g4IT7S5IbTrySCZLcu9oJUdZdGhj_zplr9pJ1crUyM4vdmKDCF=w761-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oGIBN4XC0t0gh1Yxrff3cTtuIv6ittb5HvREhcSPNRUicMVz4nv6p5uiAnRjtwFpgEsBTjgEgC-qyu0FZN-_551Inc16-I6IEqKg7o0G7-qYgp9j6cfXwkqnNwFrcNBriYDZwTQ=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MbhRGu-cMVJMd7zOoHsSqgtOyyb_DA406uveUNuW1MjZbd3jQT1uZIwCq_EFgzXoUvkcoR5jjB0alDJvZFieOUQnVg7vXaiqKBJQ5CuFnwC7IOIT3mA1znJF05Lt2LyGKgh8q2A=w761-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qEUFhJ-XXWTafgDoaqu1UiwYeQxtsyXI-MDQpXNGNFm5DpJNbOInteIm6zgmX9VITeL70VlBqVq6d3DFPXaUMggT1xwrE5SsIEW2XwErGudL7YqWqo_erSrS1lYP4vnuzEEVhTw=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04oCW3BPQBGUDlyfhTNz3pvSjRAMI9w5WFYconESey1Gh3-a8EgSDNsR39P4vJgL0DgfffTwEmejtv9VQ-ND_0tpMP_2L0ohxkj9pP6oEKUhbVcZft_G5wAuPyUMxSvdC7jZ39ZA=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RGjUqqtboX09qg9eaADgWi1zxXmtsYUSrCDS6jAbFJwR2leYyXf7fznUK15MNYoh84tIMXMbTES-78tkjUrzgLyKKtoM4L2w9-VHBaHHd7iYNpxB4AqLJdGwhx36vmt0UpcuERw=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1C79OZvMGyFGcGWhpRzJWgoIkbNe0qVtrfkisUBgOwkAHQKyS1tsretNU3nxjuif74qRdL3HHPLkP0aNgfl1M2ITWm92_fdnhQW7g1HtQ3nFPiN3knRi7mncg_5kghIHpp-YzM=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3x49W118H3bCfpOoL2LcDgYVD2c0GeAHRV4l3meGT8bUekeULtJ63q3CoSktc8tX4jisDU9K4L6mdXYYdPNfKP_FJWInW3H_2rVOMJt_4E-L_lg_wxdb3QtoPgj5gE-xiv4JXrOQ=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FgqGIHfj15N6C1U0h_eKMz6ejhbIBMKsK7VNQE44ZDk5Fk8YIuag_ezEB-GItfdyM90ngDq83l6H_d3dVBFPGDHPmoM3LJ4Iqc2VB0qzalAw60RufErQNUtw3MOt7EDwrC7zGQw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1R94VeEDHioZdKPQw9F2ta34QZUx2Hd64EhXqFBfeE3wbSav3SFMf1RRI2gdtDHr3hwU38kLQ50w_hwovvbZ1R5ANBTgIxY3jvgHsru0F9SX7TZCmsnXyxMxgH_llGqcIRGAKU=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3faG5ZMFJ50Mr4nSdZ2i59XOMEAjl_UcL7H69OFnlWODGhtRnhLwsEXY22FUPT_KXtDja6Yg6hhuKEAzT2Kv71rJ9lRoiIK0yD7nXeb5TH3kvsj-Jw-JJYwqNcNXUn9TkP5zcOdw=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32nh4hKy6BqvPN9Bf5cdYInvLzWvmf-GXgCwM1vZVnSiZeWzpjQ7QsQPRzRcAQhDkJLGjZOtiCoF0PCvkArxCYOXYlvHLZLGzfCmHTmaJobMiJTa9ZMpLTOpF3R-LHg0RuYT0hrw=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YfL7M1-BXqM9LJSDuFoi9YKTN6_VDMdb57fXrKpiqAXtfB-Ympea-LM0PTI7kqdu7s2Q1yfjIhtOcNvLG_Se6rD8aTBNo2iygal8i7fpj76GZsdTI-dCZ-k_RTUc_0vyA77QLug=w761-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25XKGt3QSGu6HUOsJeLXdk4U89lSNMLmdKxZU8PwX1WChpFzD-3MOhj__ACppOVyIiWnQ3hI04u4U61aCpm11_ZQKKfbyksmVTMYgqQm3rQKANoGuy6BfOjSrG1g1eaWnShuFn=w761-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oqw7lMr3szeQ_YjcjQgGy-9n7eNwjG4ZIQpTn6ekXe4sAvWFPwb5mVNJDgaQH8Mv0_n3ySKyjn_ap90qDE7_P4613BlwXVbc6lymKPHW7JAIqscfXd0RGI8x71RLbNmqXXCblsg=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01m9voiiA3SbSG3FafN1Rw9Iq391i1DUWz0V5rBKzkZG0dIu4pGOcXF5nlOwWMT961KoZAd1zoupo3Xx4XzMDdvIbKvUoQGr1aPgIpwgbkc3e-4kuT_m02OO9u52zo5ZC-LSMH=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Lhev08wFjcwI9kgyHJV3CKiYzoeiB_k7Z6lrVBJK_uMMUli3egnV2qS8xYa2xeC8bnEIUdCm1ugjsgcYqr_QJNDAPwJrRCROO4nZ7mELqTEcDEiAXnkjhrt3-pVtk47T7pExeNQ=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PPYEgBVvU7Bup5QuiY4WF_LUKTAGtLLiebas--JKwze0gW9pwQC2kNmdMZDnbAhYYJQg2T4iVy1dOyON8a_mmKgTEMoPzv74EVX83QIl9vIljKfMWBr0DWfXyTjOvWvVBvtNCag=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36etvjUmANJxJ2ZGwkJ5Y9OueNcYU9x0ud1ChrY2Auqm2cMlE_MEStORgzMblELEELIo8s-1tryKmFcN7pIfQJbzWmX7iVUhi5MCiEIaoGFdGWiTDXwhRgcyT-M0VOvQj9bz-TJQ=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jbRDeZWpJetk47-lssg5B6JXUiL-IuvCpV34oqMZ-2KtBk6sXVoSx_3guFrLF4QU1ZIohCP59dUvEsna2RAyXPmHqA707tRY9Bvdaitqm5lBgRvfZRz03RPz8MkOsvfHuWJ4zSg=w761-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nc-yxARCGMK13n18jsx5b3y_vCxf_KJP1v8ltoIdyZY8kby7MjeK8FhEmf8cO8nlb8M0iga_aruZcqDpQjN3q8ClYDdbtcInMZ17-uStSYutugTqz7rd3qanNvfSKmxnyN5AKgg=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21I_r2ntywEHiF4aTjWFRJH8oUBAKHSVqeMUb3p1vgENUXsv-tNZ0N84ni6eTHWPSnxMfHZsUgGZ-racD-m5iN4kLVDK66xUvQXjAJaAYqr2BLiIwsaSSaJSMn9zRjx3ktxKUP_A=w761-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LSh60hQ86YisYOaQPTtgXpyLfw8s-2w6xXLvQqsk99Z6t1o7J5VdieRp9SWRXh8Dosv7ErPSKKxSqgMPXrxzOfYsEJg0A85USnrto0OeswUikpaJUR_HHYmUoxEwI1hHQRat9Dw=w761-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36TfVgtrX8fC5YfVbl3uXDgi-XK7ekujq9pskjnVK0n1swcrPagLAvXW5QdlP2khveaqrrbCEn73CeLWOyOPcpkIuXw-7sU9zVuZ00tY5F6sMzRSbNWWpVg8a35esOInV6kH8wsw=w49-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HeD8lU-uGvMrlCEPbs9eXeks2sjsiUDeNzRzeR8s2IjYtpwqLujg-DA_AIF9w_nWoOMF_7u7zFFsQXRr5ZHK5-f3fZB8SmvhqGJ_Si9kc11eV8uWR-Pg36a4O6KBbuv6pf3-trw=w159-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18zB0TVUiX0D9td7h1n1VmInlswCRBSU3OXJpRiGGQeG_Y-tfZ6uOAdgFhNVw67v3QhvvpexCxpOPEDPUnPp3QS8soyU4sMTVM5IxP4kRiVAni8qB3z4pf9bdjTWaoVNwkvQBQ=w339-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QRnUm2tWjaxI4E3TJueiRzvwmakYKtPrbrSMtigA40RhP4di267mNoSw-_BvujbV54FDHAQmUM1zFoQB2r2XSnMsiAFgRL1ipb1ZxU5tPemcSK8_oHADV192Oi4QcXck1Tt-1hQ=w209-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Pe5zR_Exum1LpQFpW7P5_xv917rt1JlsWtMxiAMNyVosjPF22_GBQXVHY3mguREz-RNQ-bAm7yhLiW-jhlwyOeultGDIBN1qLDeWnmP1Yc3JcHMqbpoVra8mfFed2liDuY_1_ww=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2v2ml-KJgaHVdexci_gXdiXFVZgU37HmGvm_4BgM2KPhGVP-rTtwCLONz29AOssmYY0k81h0-oQePFlQOMtZgQAe9L0EJpr7TH_85a85l95Z7z56uWbO5ZkbbvBSvdy0Di9LQIUQ=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QNRksKw4speI97FvYuCnbx78cf9bz-xsDA3mOQ_h9kUJhRd9t-N_mBWm3_t4qC-wfEWcMMFAOjpVopc7l5FMXje2HNpKAmIW7luRnwRt9JqVQVvM4ALsYXGRqRaOyMxS7IecG=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32JaaoG3tKirKIlKe_VwxH0UkO7QqjxyVsnCRfxbcIAd2WadwMmROKr1reLRvMWJ4ebrXTwtpZsFywQOfVec5BC5Rht2RdYMn4h_i93J0o6FZ2v6qKF8LVt8K9ulRb-r33QWdlxQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VKWRWgMfgto8TaCtlLqFnXo1S6jyvk_YXvIJi-xwBoEY3RJGJZENQ_Eh85acmYmREzoWt3Fq9YGusTqfZ_8ZCLSHS7dxvDiJi2uJ9OV5MOFvZfQ5PdCfylMRXkmF2sjA5H_bFkg=w751-h57-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZGuy-NIVkH6DyufRyUtymvxRmTVsAFur_egWi6j-3bVZTJ0cz5g8gEWn3r-x9a6ubW09OO6L587pmtBgJ0DqO7E2XyL5nQghM-CS7llW2-HaBHRatbJugJQA8pdDMIg2T9ch_ow=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ANwK0KUBe8eMNdaP3Pin_UG3WwUETQvATR15ZUJHFiDGyd0RJJ8dMEEDLM4qqrAM3SrcICIcD6akOBXAq-e6PyIq1698mwHnC3wvNpom5Dawu_8hJ--OWHzDpgUro_4Ob39o1sQ=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Cu6EAaR-B4w7YvN2BiF3k4KIubvyIpNZ_A4_KHOGDxokHkmAZAeRGBqyY4RB-l_ruAsFm9Rv2Q3cr09-prAu_MOoH-fEBfEEvdwF1kit7XWCYo7qlSa3wtLrpro0Ipjr2j6TYCw=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-Op8Fh6cVGfxIFOhdZwpZfi9bMUalhw4EhqLhtN1LAczjBVIT-nAeVbcnnP_ylETohw2p-K_8cc7xwY6hUFmhb5FdboOouNAJXDVLX02NZO_xfE57rolVOveNPjqBUgqTEA1SzA=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3k5vkRWQ8f_b2_5-e2NiCE_F0cvI824Yaj0glm2OygEdgfwZ3e9CnsPH4GNRNJbPqVjKKM7j7g09ZK3EPnGSQ-SlFA8Rb4IfAckzm9BIAzAXZWolAGmAi0Nzi9ke5ROfXKvyDCCg=w751-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CGf8h0YRxVCrK7Qcj54mILPe4L95tWIlwazh0JUQXG3o3N2x5qx8eYbhmModZrtJmUAFkfDjNhAfFUHh_d_eeXNMz0psO7Ndh0E9RhoiVJi3aKrBjSspVinloHjw6athPfJYXbw=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wp2dUMQPr-2KSq5YYZTKskT0cW0gnK2MeVW-tD7un9dj8w9_eAxV6KgaQUdSilqUbwufFINOQPHHXEF4TCaToC6d5dj-hPAOFpVf-ZqWtLK-OtfBk6xkI9DNFkals3Obko8V7-g=w751-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Jt_i62gtqK1hi5K37Vb4IBh1fPbOfKkaN8r5lsH0jrSaowLUnG9WD8KAwupAr72yUUuSnOBCCN2fh-mr4Vja8ZmYdK6VjHyVia_cyE4i1AzHGELMhhUcmLRtaz14WJdHicT2tgw=w751-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17u95QfeOddkr5O-U4cT5ZE1Z2O1OxIqIhsuhcnSvOcfcCSZSDH7AU4xuJFk7_gN_wBmBJz6XqNyfzOlM4NynHWGApl28obYxT80gG05HlJfkRbf7s97ipzZMN4SuUaAkWsUPnjw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36H1P3B6A2xXKyywSEw5vwxAJDxa-3tGe3IROW5476YbF8SWTkf5GvTJVgWb7K2b1rbbL04E27LyndoMhq-6tocLIZhqdmjmgVJpm9GWRhmUDOPyHDcGcUKTsq3C_bqfoZVu2SdQ=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Nro. Nombre Descripción SPA Justificación 11. Lector QR Para agilizar el registro de
asistencia de los pacientes, la secretaria puede escanear un código QR con un lector que permita registrar la asistencia de un turno.
No El sistema debe permitir la lectura del código QR, lo cual únicamente implica soportar el protocolo correspondiente, que es accesible de forma pública por lo que no impacta en decisiones respecto a la estructura del software.
12. Disponibilidad de los datos del sistema
Para disponibilizar alta disponibilidad de los datos del sistema, se espejarán las bases de datos en la nube.
Si Se requiere que el software contemple los aspectos de seguridad lógica necesarios para que el despliegue espejado se realice en la nube.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Iq4VQvRfugNbii5Foyyp-Ul8aVewcgVH5ggwtMBabRnRGflthQ2Lp3sy-YgkI5ZAokAXkDcYEGX9QVfsgW2HUT30aMOLbWoLN3hXCa2J7hBS8BuU-2vMbFHAJiYo6KwqZwDWKLA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv363goA_dodNsA3JAZmRgSpre2Oz84vc7qWpFrPVZjzzxL0hRCxRRAYqJ40hcFcTlK-pI5PIdj7706ONbvW1rArZQW72sKR1ynD2_9guC_1SfzE0jNJDIEE2CEoc6CdW2yY9ToCEw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35CJtEN89I9YeNNAoosTg6ZsCoo6sopj1herqWM6rmZynSaPNeh2eaqJ-C5tk-F3c1cJN-jHhw6b0O1xBl01Jihifkhj78EPnNVV0ac1OyWRC5tjdS1FUGrEqablCLUvMRNw5qzw=w751-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0M0zSgscOXfrb9EdnQgkncQbj09Z41IlLPDC6KvV0_Q08o4R3GFWhHHc_5PcfLTwM9_Wy4_dw3wMkkLffoPTs7pVTxSMnDsDoZ81HywMyPUHOHmt51ipKIOymy8leDfRGvuGGGhw=w43-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GPBZzYgBbkbzyAvzpWRySrHWKAyP2aFHnc_k27tMS2e1xaEH2u16nmnSIw-jVEURGvi-sDpO8NNBtWKnf9RHiNdkUXemNiUlVGR9NZSVYKhMX8vdfjS6HnTmHKv9SBCywDRtQRQ=w135-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nIgiyvBsnccXlLLyyeYOGSXCMhrQf3K3k87rS_PeKGXp6i5eVJqWfZr5RyKcEYTtgdsqJ81e_P-4C-VGQpCYFtFY3rHBKzc_5AfziKi1RDbMp886k7vlO1yORxaDIyDCXDtHlGA=w229-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06ISW6nsiPjMtFSxPUdIPs8W_G4ez9L-uYtAXboWmZ_dxfTV63_rJz91sSB499SdEvGS5WVSPPwPOYF4kqpCHCOyJNzuLHLRIutRDrr6OQsHBRzcPbWILE9BsrYZFK2MSQLplQ=w55-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24OpogUZgMDk-istIKfKKl4aIk_dOdKsvGn5pOe_0M-Ao80_ABf2J_rinJNkFLkxGBF9a7f2FmC0FTvRsKSFtrV8hIjBfXZlqclSGKB0fbaV-4jKFr5kUc3B9Z1kTyiadwcPJUYw=w284-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a4-hNnvAMkFd_HN1RLnKKVOWCrtPiWTrUZ__GmLJNZo1SiSc6bGd_YWp6bJV_qdQghlf9FngRl1coTFj6GifUPC8uT149qzloBgzRZ_KPc1x2wzWt-Xju1itxnLlvPgsE61QRKQ=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zgsjneJ4ZeWh7bAuxAiQNEGmlpQ8clvl87Zcudo7_cxSEWpnh1TTppoKHezBMbXlJ1eWkuheGEyI21SU14UqF7VOBRExSfFGM_XPIhsxrboc_I4IaYmtSdLPpAKQ4_enXS2-BYw=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bD8iFtZ_T3EyJLp-cAn5ZIb3ZGao3OLxaNkSCX_geq5WSTdGSKXDyoOrue0R8862Jy4COEj1eLM12SEXbsuSmTV8zfj2a-jhhYKM1NRKx8pRKtMLtpJ6BPtY4grSgcCzGtlgvYw=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xDJF2t1CIqS-WlMez4xPzagv1NQd0CTR8p1rF080Hisnq9p3q1lx_Fnvp4_FrYt3DprDmAmIaUWGsfkmwhKyxzkv6lOgxoDYWOef-r0XfbMKg4RAYTtdpdTQ5qHY5cbkSEL7i8Q=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3S6hy6sQI4kiruo3k0F6aAMjlE-dPcZOfZ8i54isF41RFrt323bhOFSUct507z78jPfhSXPGR64eNzJfySAPrccXSaHfHpcDOiuZYOelCsV7W6Xi9EVIQX80-EM0jttQ7yp8e3=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0q8OwFm9ycKwVr39yGJYQxREU_e39xOz8MJpvzb5Ra3xHB_zwFPypY8EENdjONpmvZGo64v0cnSO18W3dyj6U8368dUAUr7gkHNfLxEbw01VhOTOyKa3G9Ge_djtoyUA7mUi6_fQ=w1280-h306-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1d3oYQgR4E1zJLNy54F8dhfWXcjWcLnxacWLYnjcDKaTIeK5uDzOf7j0bOl6ZuZOQULbCVjlSV8q3rK1EVOVrn8lC7_HONZhiX-ECgh7UcclumK5Z2efd2HvvfR3JYXapO12sKgg=w1280-h306-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista esencial de casos de uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2B404jhfwSoyvYIoYcaMvl6O4ZNsJvU9f6EuVPu-F3mZ26aTOg9DLQJuq0P-d1zLcgA_wGTJjDua6kitp3LUrccZHgzVP0Q2_tuw6RtfnfI79emwR7hkbu_GjcOUSsSWSCl1vRxQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ogX-41ayroqFTx0--ia70wpG4gUauZh91Hgr2Q4w_ahX97uQLR3TBXhFMj_d5CUYvgCup7CsfalP7MqHy0sUa_NUvyyjXBT-4nKJeu11yToSkspWVcW1-V_RCVSxNX-C7_cLl8g=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2k9wkSteMMNewXda4WKrh9TTbvhiJnt5X0wZJXPlGipYpifZubzZPCq3vNdixrrcYRetbw9UCnHajYLAN6BlJIcrEUtY9w6c32D9anTqHugZ8WjgqmnGzFYa7AGZS23guZxMPE=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2owDo32pao80XhBGAhOLudZt743YPFM9dkaMFm0vCYkvr1jm3fmSf8ZhceHZ8rj98Ut0E_1qae6k9RBxtdihY5qO1Lvn5No16gZINjoP705b9PuQtU8siZ0CHBszYX-a1-wD-g1A=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mjEniUSE8tM9dOWSM7P3FovpCrSYEbOVa7rebGxpyt0wHNnTvWqDssaq2nGDbDXY8IL2Enz_NVOeo6PISseY-ALoSEidQdryb5ajxkKQQxCbNUqLMeh41e2XpnoUA_l7F7mCx=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19wNwy3wYUIildK93MUO1r3Rn4jei2RCt4YILEadrIYRfQuU7fO4NWj_7mOqN6CTxqIYHMN9FAprzqwEjuF-i2QrB_kHYfErBhwEXyyiVdatDwY7DeKNoxzEf7rPknRHeQGEdcbg=w738-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0F8XqePkEiIHEAI9NXhtS-MS-LRWhIOfysxfUO1gs3TuRKYNJpBjUdRxFu76HjtKP4YbaFBQh1BF3UuiX7QIHqmBcyncrBdZmQL4P4OUPFc1KRTO76tEB8DbFX35RLm-tg16U0Fg=w738-h176-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xDP_qqPbE_vtDfFQv3X9PTkor2r9UqR4XHiGg044Zk3cB_BT2BimpoFZuT1GqbtQI6e_L8K9pt5BZvjJICH2FLhaaOufZ_6fFWIi-OcKmMnBP1hwCwCNpPwUVgcTfjGk_al_cFw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XPxgeSO2FYK8k2oZQ2NhafDBcFIco_34HwEm9ztLgaLv3aGzzQ4r4O0Si59egUaLHa4uxs0Bt1BmZIaEIFuArZDSg2gQCxpRKzQcDuTm_9yD9JZzJKMvdnSX6nzzIzHREy627Wg=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R4qEKNGIqUnooBpWOpPyeDTOAJOKy1YDWp5DgYK2CB06D3K7meY9oJzd_aT1zCuPG_k3-GjR0J7hzLWu4SI9AcNpxo8q_cm88JwiPORks79g9diYi-qGkNbD7kkjGYZOKHKhGYQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TZNo6VTXq3KJM43_IIXR1qxLx3ClfZ26ptXGi2AEX5ybjO4noZYqN8ZwcobPO7bJKI_1dNQpvfavrK2kKX7Td5RKZa2n2MDtCN_cSmLIu86Kbjd2fTaikdwz1LIv7_-6yFibIpQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27UMT15Cd_rdjqOZYOkQvTcH_d_ehKEbnhY6Js-acwKNMutrA3Nf5GW37LUv5rB8CWePUwVqne1nlDEG8D-6kVCttS7fvkAXeo4m4cGmdeamcIX5uWOE6sAP4NuahxzlvWRRop=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pww8TpSC9DKlGSE4CWpw1LzFCjXaDWGULCzMOGs4e3qvhXa29Bu1jZM9IenFdE1VKXQ5l8vLGSmaBIGygCRyBiyverVsvuEaTybRW7Ajwx7WN1hHNakZtf5lVrk4G6FhiKASlyA=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3as2Z9HOePd9Y2ZxnCJr2dqPH-PnjgNNUcgCD16eys-6acoPXYqiA7hMCQbQ2ntVZDk4UWa4i_yIScDiPaigSdAw9DMrAmqdOZE3gdSgKdZeZCb02qLONQNKb2O-id2IOOhwfXKg=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1at7GBrzWeSZEalic8ORyf1D4GP7_-bl94YPUy1oPL55t9fET18agEOlmX7Pks2BEPSwNOZ-IToAeqso1Os2HO_chHI7msmlY3iAO541JGdINxZj-qacqCPlSLFSDs30klLi7H=w750-h134-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-RRdV62J56yUiVYEB4gD5P4ETzaHvRWmmncUDOuWYrF1IOmkhLP-KOIeNaDkK1bFqjpmTJDYc21QkAps5IFMnlj1EontBhl54ETTaDmyKi9Icj4X_IfGAfRNMUwv2geY9U7fgcw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jBoFON21_qiCKM-H2_cMhyB7Y8W8qs1Of4KXEQuPQMQ_iMh94NIOyvUQi8Fg36oVNjU-q1kc-2iflOwumqDqe2RUUD3HdKFTm2PBB5JRZA2i-eBWqxASFZ0mFryNP1kKL0QvsJQ=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xrb618JPzfhEhSYap1t4X1WXi4RK-7zsn_-Hf2JGNfa8KPjzqJLPg6fLeczf0x8vgnzo55S9Ry9cnd5j8Ml7GCEnMv8cirOcvvEP4CHj1afDEIZpNwxixRxGYTJPVXC40AWPi=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-RPLScY6qsredR9wW5tj4DDlRROGLqzXEVJTPlFeEU2QRAwk4OOmM5bu0xSgcAUg9SPr39KKQP9yMEaEUAX5JA0tOmfmSYQdvzcLnlWRn3lMcWZ7OdE63V7GZEGByEaioIBshNw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Q4QMIrjy0reychW5hABW9TYQWwExGTVvorsLDGqcSr3mc0Y_LyfWPDfHZZlEICeZUaRI_-IAc0GBGpFtCO3PQUSwcqq-jGSeS2oOlmxjJJDlnvlIKHHex1vDqJRO0HwhfSh6oqA=w750-h42-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Kh-3HnqeVt6dpxOI3bvtuCTaPQuDk2ZrwEkR_YWOZsH0jmntyWRoLa2_g9l4IQuJ4GixfeWpDn0oschRo9tqQxgTcVzS8tqpNW0jRCgufqlW0-tK4LjPkiUt8zh32bgOiB997=w750-h42-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LOp39tH2_4-8HXpjLQObA555Pm2pVeV2Kal-TisMBaXyHp5K0jGYyq7QvKshOiX4QTMdVMfzyVYM2-_I_jymvKox92LxAz8ZJ_W7wd4b5nlETGTX5bQwYPLdrylFy5YSexPPp4g=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09b5SdXhRvC1_4Bn3wjl0kevYEqYoKtLHsm8XVbYBxSS4BoZDf3Xg306ID4WGhDL5qgoNKVC3UYCsgCVga1v2mvYI1WWdZxJv5mE6jTzdnntC7UX8R3IbCmV42o9kEvspgu2YQ=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vyL7BxHpSy515kRfynHvCkQD89r2ufTLWTF0lPCWz1NtaV7Ha2MC5OWvqoIDp0wVTmSnd5W88bboYMH43G1BuaxGFePNuaejCFC7JLu7JZtuMVsfMPuAQTqCHgkJxFn-Kq7yL=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NqgDZPX8JaRizpL16OKUAE1Rn0VzuQNYp2dSk610Ry7Js_BCLUGbd0vhR0rz_AKc1Vkeets8ZtZS0RbhW10M5bCR0_OWgMgbJ29U3U-ZyGQvkgEjAH0DWHgFgiQLEh0SgrTKU-Q=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00etDvIVfjhhz8cznxMpbg7Q6rf6zmufDZmhgBAVXSlghs67i2F6e6TsXj6zE-ukK4SVRlBd_tv3HZrVqLxOrirXZYe-prxy6gT7xULU34RBvB4maJygN_mvARY5Ecr8_rJiV87A=w750-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2l5GCB0WvNdvEy7ibIs4LQYrrd6LwQ88QC1PBesfKWeKwQbC9pDNmq0jBqG-f4gJkNeGfEZ6weJlmokrW1ecE1T38j1FjIlNk03xrMAALMtflxH_rqm0BO04bX--XZ364DlI-x1g=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv094e9nKCtXq-5mP8HnD-K-PbnlVcAafzbBUvYgMzBawVWuqF71arcuG4zTHesObWyBcA4R7cK8xMNwiqaaYfINZG1QY9kiUFGD2d_wvSJWsbOEWkLA3whVR4KjMQ9-Kb0q4uLfjQ=w750-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv109p9RqbxS_6_tUtW7unwxbUxjEArGAc4-EY2JO8jYsxx9EHe6ViO4pce1Y6HSDSYTIRqFE5B9lJJBzFOh5wv7_hBPxU7AxFolyqSSPgSbADKdjXjYzU8ecYsHP_1oIYwS_6-u=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hfNTiIsK14Df_C8vdB8Lz04wbrHwuY0itj1J64sqK1zN6afiyhCnalOBy9oXgerNic2hyb0A3hQGh8VtY3BhKN6AO8u2bAZstYzfcH20T5SF3-OQqbZLyrLfItqoG9-3tnGFM=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qZ8UcUObepTcsKZfvyWdXCEJJbRUtqF8gbPvhUZKt3ZpOkdU5gDjjN_XTFiflzeEylAzj5H7FmGxLGccqLUXWYNLLi8LJDMF6nEUTtb2ssb-ZzOMNYwOZbBCUcw2fsYkeep9u4g=w1280-h723-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OUs1hXZf4OD3ssaYE2-LwrVKGEHuWZ78E3_T2G-AsnjEuIhMvqE1Az4LzqSAgCLD0Bf_G8axPGPVVPFkkHnNTXT584CqNo3AMMIexB7Qpcsquxxq06PNfLtfTXRmRmj0B-wlt=w1280-h481-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Modelo de Dominio
A7. Hay turnos ocupados. A8. Hay turnos disponibles, ocupados y solicitados. A9. Existen pacientes a los que ya se les canceló 3 veces un turno.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IVyCxl7DHCJn8Ryef6qtBv9AsLnwbHOarytPqbiLrrfoQSCbIWbDKZeUe_y1-27WmnWwiDHn8vDgNdfDHEbm8u3asnnZLlG32zp_s5PP79BdVWPTh_qSezElnAt7FcQES_DCtbA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3k3hxPrbPZKVHHAUFDoLfp6brJniQVdXDKgdanuBWuHM6E4kqhzc5tMuhluGwMcZJVGV3dIc86VvOXJchaqYp97rcXhDh_7XU35CKPuf5XFXACGEpgZ8rT4jDpBHdRpGzd75x7rQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2e4wF6EEaf0FDm45v76xHEXGz-3yfIidJUT16UsQ20ZWjSKcZhR9tXwsS_3a27axegY9S5q5CcKnLYTqMc9cjxmMnroDYsOptGMeEkkNPubCkRKVMxgIvlajPXw472DvCvNR3OkA=w738-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IUC3S1woIMVBwA0EPhIPOalSYGHnX3CS9cxlkDjI7TddSJv785Laqi_1qpZ3BLrx23UEy867ca2nVKscA2Q77LnkVCcUOPNM8aOpdMZ5p3Z64g9t85QATIEgOy9saCfVk1yafDg=w738-h277-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y4C1kC8i4AICVkxs5KnYKJwfC0l4Fvp8qneLuQb19QCP4JHzSAO2VUSo2VUnHlIQcUGUY_rXSGT5hZe9hANs6Hqmtkp6azRBdTo1gqXfmN8fwLfOTEnrvo39lw8aPLpt3fHX-=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wG3B15saR55Fa5qoOmbKBvPgNcl5juN-iofgNzmA12pUJ4okoZ9yVntT01afOJJjnDfFbSWriFUd_ysvs5DS9TT_dULDOKfbJq2D2e29Vbp_KOcL16J1iMcu4vB4JAzByh_gYRw=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hq05zVAzSK-PgYBq4mfrU6Y8wW-qMa0pxUgdycZsw5tM3VAJRoJx7XoXzzlblkEvhfeodBUQ04_CLVlAUBH4S4VxTaj5ZQxttZu7Jrx7vXQvx0oaBSR6h0pWMGNAKNyQh7gj1=w1280-h357-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DkUaE6GcwGK6D5AUPDYv2bAsT056P0qsAfBiYXwXR50rLMKPjYWcRS56wc5zfTgTlhNVY2sFGP1GxSI7YIYL6Ddh0wZ4bI0IykiT3kVWu38cebXIxZxjBlaJhpeM60v-dRXUKaQ=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03tWgr1HSEGbueDD3IVmrimL_93qiIzQxCeT_-5PJkPIl6cC5dmxSKS4DIZRwsnTYggLNJdzcaql0_WGog-BWmxfnyF0HyWCOIYJW_BOi93NV7YXPN1pLpLx1EELUmRj0Vkj8G5Q=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02K0W1HuTQHBT8y5-a_be_q8ybSxWvSvJ92CpXKXWJAw9xIz0NPPrh9ZZYq1vVn-jjY5C3V9pF4jXwVOPSU8XITqTjq8spmreS25wspwd4N1uWnfdizg-0FChcVGwu0WLBL36nNA=w1280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3g_QnLrUqyu75-Phpn4loqUHpaOIUQre-5rsaITn7-DmOj4mBhWt4kH6ZE9q766jLBpJF1rMhtRj47q2eY6SCqhTDubOcsfDiOOPlNSk-IKLFdbioHLax-0kLXjbNs8rjAZNs67Q=w1280-h176-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Realización de Análisis del CU 2 Solicitar Turno – Vista Estática:

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uBYEJVZpClqFEpZwk2TQvDCve-wbHBlc44dfoO5TPV2WJ80G5TNfebC0hCXTZboNnDhrEN9WcTJtnINdO4OTPFc2tivyKxGZzzC1aFwcICxyeK44lEFZvK_bRchSHXXdjwKeN_Q=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1K_-KIpB-VQhNZDQMRWdigK1t20LrFbEVwCUEJ5DpJRS_qiK8CuZZXJ1wg4K_jBj_j5bcA9PFADvd17vF6wt9yOrb4LNe03HCkZ6FEnNerFW1TDv6Kqx5arOuVnskJU4J5XkhFQQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3naN9EzuETD4URGA48AqHBvuuMYfqVHRVtsziBBCBJ69kGD8dTTMz99loF4NjKn3-JO2p_7NIGHZaPbrDRPKN5Z4JiTHdAunOrww5eOtjeTy2bs0a5qjk02m39s1y9HyNqyowhEg=w775-h274-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2y3lKv7OBIeWQM1OLQyWzTOxeuxMUcUYV52ebHWICFdc8B7KvrB9jtEnYuSiR-wsUV9Q2h1xGxABMI7uRkYMSnLGiqYqpIDGZExgNYQL5gRlfIsAhv4bRu4ngIkb_aAmCNj6hc=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ue0OAgBT9nx3PUmtPsm3IlN7v3mIzVTB6KSnYgmduXoXmBNb6_3aQj-61qbp47D21QokVMr_JhpG0KpJDuMjNWc8mn2gzM3esJf0-MpOOrEvUYsgJHyvF5Se6gv3g8HLzYW1a6g=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OUh92PPxzCu3qCxisTxjfHFnNRhkk86TDV90dyE1iXLEuj65KVURl8LG8fcm-Aiclqn75VRDAN3PK1lAgAQo6BuzrtxeRIrOUeGdeB27ZgzrOD9s68K6tEznx1RbM-Q8Py7mTNQ=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Uo43SLpkE-9xZ0UmRM5wtgJR4HAHOS04tODbc0iWQzQCXwaOGRqrVOiOocAEyshEd5yyrUUA2x7gU6Vh-C2Pu2R7_puL6oAdXtIT26jGA1UCj4Iw2saoijNsMDvI05yhbliRyVw=w775-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IhKcOHZzVk8rskruTup1eC2goGWu-YUvFSzMQFffAfMcm1kajM9fia63qYnkcqRzmG5sULjSnofIybcSNbN3RSo_N13byRiYZZSoCkINx_nCzIKjokELolZ3ahrgPC5MpZ4PB=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jxaSYPrtYJNHUywdXbEznEZg3zka72Ew659pp6d3fWNrr6t10Y-vPxfuppXHfVWctypSmlX6Khqw7iBuUY7pnzRL8nOZ376x6lUtzVdcjkkgm0pLvbWm2cDxavJpeCAAVvH3umg=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vswgozSHVXjEOMtpDRr50LTxmOh73pWlzlzZJ_qfDWkmbI6fxParMGVZb2T-iESOlbi7mIJfjubR_nS-GPqdg-2vWLggudJW19M2sxQ-JHMIe3nnZwyBjLKL44xuil7wb5Fjp=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VeZLUmREFhINOH5qXXkxCSS3iQLXzvcZ1BLUUpB89F-sYeLsoOX2rVkxG1J39X5UbZfHzNsVtcu5bUH92xcGwx5y_vD_O7bkAnRUPvzZ11eVSMuiIMJ2Be9FXziEGcUepmsV8=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09kvj533CYZEX3x_6iYg67pf--TKFz9cV9ddk2fpEfVRGemwvFCBkvCLJztIokimDrmL5Nrn5Te8m--BkhlEVrVG_7ij525QbZFqKDd5ju0afUkpJCywjfl_w9kxBXT5Bp63FAZA=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AAKsswhbLCTYh6-yQAnUoVsYPqtI38ESYZ8vHFYkEJHPXMKvqAWt0Ur4eAmNUoo2JuzW2NIA_KHnvP_TKOe34wO1Jhr6RRzCdRDQ8YmQ0KPeRFjnqsMoBfbF9dX_an7UluSu67w=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K5Rud_kkp-Zhl9qoihphE_ibAkOzgCbcxsXZEFSQn81oXE3pHxxtbvpO0pjmPGQ_XQwQOAD1qV90PFm6RtvJnEJXnP3XV7xVlmJN_io6bncjnLbkpZJBiDZt_UgdSkOYkZl_Fwg=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D1FZkMA6YopTQxXqCNVB3rG8cxO3tQShnukFGJCemLFFc3uXy5efm5XiHyn8y14L96iyNC5GHsKQMiQ9vbeAaD78c7YNxHpEjs0WxotlaYNFI2GVCW0La9OYb-i3X1n6yF8Nv=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MJpjDr3XwGZ_zUbC1FfC_Qaz0q8XpFUwIVEZinVZr-bKYSmhYFRNPRewmpWjfZ1i-mvBVdhIOBgzopUcqsJ2iHMyRZctXYuFJLUolNDzV3TaFw2nW5oz1-BdP8SgyEd6j4G989Q=w1280-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PdngCRRk1WNMXLF4lThjfsGc42S0ITT3bo7W96Kh86roqNBzw2NGQAMuW-4qG2wTFVfK2IscjQ5WTm-g6Kdi7dCSbP_1WA1RMujbG3wFRC28Wd9f0tUNbY21NDVkMvKqRC0BNeg=w1280-h383-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1y_dkzd35Ku6tlhVRBLynQ-haBJmaOIlUq9m1fEkf3KyS9I2BA5kRyNwM_jcLB5wCmipM2fgULPvPT9nNLewXxKHO9-i1i-ubmJuSgZYe_zS7VxrWhNymdmUlMsmd55j8cgNeG6A=w1280-h189-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Realización de Análisis del CU 2 Solicitar Turno – Vista Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_q-tzs0BpvqfnKP16EySdDzEoIeMHdH1B_DZkM53UDSFhLXGuKlkgTcLk6UPhTYcU9N8GLnQOk08xbsaOUceoAO_VqOeR35ogK-OG0smt0eYKb9ukC31k2WcsRX2mKxLf26_lpA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SFQIfDOi5XkeXEPlFTz5OS6kq0QFN_PuSQOCl7LxaCIh99RG0j0Tdkvcc6822dhqAsuRz3CX2yATk48jsWMJ5ecBY7xAQcSvDPC5a7FofMdR-b90hiQdeR-PrhSdneOM7CAxvcQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0W4O1DrpwzUQlPKLr53gg4kgsaxUrFrWbCrDFILSdRD5_W8gBZnY42WtV-iRiSysO6-GOV69eJHBaYj3wW3Vv0BIR6PGepiLWNtXdczGoU15apwPpN1x3B6FyAJ5lJqqWFoZZ2Ug=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1S8ctuUsOoMbLA3MRaIepYYlp7ahDJM13cYu669qdiLvZRtzky9kqQEHJ5IDHlphlbhWzrI7d7FOqNhnbN7K7JLS3uZWuGduqga5HQ03ZBKFrPzAU0TxYhWJRzsjZDfbeZQiWN2Q=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZLJ16qagEiWVEljoaHxgC4V9qhXNWg0-dDYYYwD9YxRJ7y078EB5kOl3GvEETJa3F5eKBbFHZkgERtNRNjeLZaXiLC4JiyzV_GZy0v6AIifkUf4IGN0ssS5Cu93kGab7fJdNS=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23Z2boXzixX0lvlywN28TUg0idB8vqw0dhzaDuTL413qMqpFDP74VpCiJlXQEq89Wb0p_a8J5IAPcXDFD8CzNHDMJ65IHYrpVcRSpW-U0eP2W_Qaxn26KYd-2Ipl_hTaRHOEs1Lg=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tyWcNgzsqQDfaJmzTWfIcbgGFfp3-Ew0PgRBaMap5fLzfU1ZB95kTdOTqn_z_2k7CzqxI-STNCvwlU-wy2b6F3Q74qNNRWQkHhmDgjP9EyQgZPlcLVsN2vFjs8u1fzJ8XMVrUAw=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13R-qJ4oVv-uR1SnSMuSrwL6PdCwZMwK9f55_tp9-QhoJmhJcRm0rAHN-hhtrP8Vh-X28cGr7g9HRIDLHgBqVNuFM3w2G9b311_ZoHg1szv0ts26NLUTMdQ2rJXwVf5VRIDeyezg=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27o2eQGbdoQAxCjRs50zSr8--hHThgQIS_9wOtekvy9ejGNZSi20T81yLqM-Z13Lr9gVZ-kF8JZaeQSnfAMvr1xVdFWwEQN6Z-08g-kuC63Rc3hGQ15WUwMHTU_4_W2EMUlhLk=w751-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Xupp2wweQM4LyZBpx68DO6wUWc-P3A3p4mKCxiONfO7KwG88LX83SEh-GAuJDu7oCXcN9dMgTVbkGdINKLcrhsvy8G6UbbIJfxkkyhPD7yZhzB3e-9l8nAUmuMrUwZNMWNEOD=w751-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pAB1h52g6tDy_SzqKYBtTEtGU7umons9-8ar6qfPe-8YS7uB8BMHprPSNwJH8uofBRnVl0T10sq8Y31bs1tUVlg_YAoMolWcE6Ihf70oSgv3ukwXllkmtO2xcJssamLTezsrp=w751-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31jWsjb6ZwHbr4h8s-wlYC-a3pRZ6zdSDAp_pQ5yBREexlF8F_lNxDtonEhVSM3Y1B6tyFn551JkXlLSuQRcOoAAcZIYgELA056mbMnxEglcOD3IjTdOBUs40tVovCaf2u5dIGyw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11VgCETJiwCTDex22iqc54YAvHLWIV9Mdo7vLf7hK9iF6L-9VbMYLcsAEtfq7Z-oCglsz57roWd-5_uqnmmXrr7x3ged8WqMSLsMb5kMZkDon2wXA0XE0RI6kiHqpOiD0IKztraQ=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ww6rMdb-oTUOOjSaKq6nZf45V9u_J0Nej2KdEMaq4uTI9jNKANU2SF76qZajHM-fE1vn8DgYEfSITbTJfqZTQZb-c_5iwIqAPz4YdJDUXuzTgCwAIZqMVtAnRCMh8MqVsGr0-=w1280-h626-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fBZSJohBzxe9IAaakECihsWzriEBwhE82JLYUqKavuBsHQd-psFkbUH4tKVhcpVXR5jA5AE92sdAnF_NKtWktUpNgVztIrZdRt8N-A0b_Usst8jahw_1Mue13DUJXUnLmq672Tw=w1280-h626-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RCHtg5Uo1eUG3cMaGG_qV3FblxkfsAEjbfnBdGSfocNvZ4YYSEpmR18UV_K8MyXc1s1N4cMWnjNgQLxcU9nULS2JwvB-JLGJggKyspaZbrnGqE_9DkrdRchrx1W8lldjZZCaQyA=w1280-h312-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Realización de Análisis del CU 3 Registrar aceptación de solicitud de ausencia de profesional – Vista Estática

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eiHIDp74JdrlyU6u2aWNDlOlmAmn1HdGy3ol2Ry-qFG3-2QcItz7WRTuALBJIGXDz4ZwDRJV-7rYM7Dg8y1WTDoDcWm-NSnqz1hkRV66sVNL6Kw3MZdssnVnL-Kh2BS3NJ-sQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zbQ46O0RE6JqJmFvJ0Wunad0Nv4DaVCmEAkSYHd2ElqSn3CTNOyS8SEjvFl14_qgrUFeZfDCy-vJbFVrJKi6VzkfFDXzKHyMfz41-FArCWBlQENsONQhiq9U3P0HmFLVuCNb71w=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09VRD4xKedONTLbcjWbvELK5FxZ-ECE90jXZb0QTstMbREv3LLyGCLm2KPubffdCJa2VcqOHKUEKEf2-xmxIZewKmjQsPsPaE0V7kgliG8pQVjpClJsn6UaQvqpoDgqqLfNqhpXw=w689-h337-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pfya0Yri7hFKeLR33fzh4MraxlSvdEFtnAE1rvz6vb39cuwroiPxQsVdLMekJMQiaoG1bSxgjBgHD4siA-rc1kvJQs3f0Wk3HzUpoBMbxfGuz7qQgGTAzO1LYvDxVsj3TCWOcWA=w689-h337-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3plPILmJHCzJOMNKsp9Jy3B7fH8LKOCkdJXTAnEgzF1Uf7vfJKZ8QCQUB4l0s-sB4CdIo-2dk43ZoJGEYEylGgPLB9cQZJ5muvvsc9tx0fOkhQdoW42-SUarbBWrKGImZh80WyzQ=w689-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E9Fbkt6iBQ17wmQx3_eq0P2AysUHuOZGQ06ACrpnyqMorITL5d2p4fMTUwSiVHV5G-SR5tQ_oX9thPUI4RQx5jUoW29rtSSq9DrEIyCu472N3fazs1XaPq8mO5_o3GtKGAOSF=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SFXGJM1Cp3v7SKsOczU0lg1E88HrKku1bF93Axg0yOfcVm9w2zi79Hm9T4FqITkdq9eXQZi6vPC2XCBIHQH9t_xSc2xUIXk-tcDRHkV6AkbJ-OYmDtDEa_azWmnz7LkZ8-1-F=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09qTGnFS1iyHd1z44buFvlF9epBUTVRFSF4bsKITfYHTxT0MI7VUZCpB8fzJWx8KGggGZqZvizafVwJRIuIJ5tuu-T04dku1VJJOXVYi8cVGPFmGKUIT8q6icxY5bKWF4UsxUXdQ=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fBbjBGecTDxwtjrFiEBWV_6JVTwHme-5k4vl5JYKhWB6v1-sI3x5XbUmUAdohPjA6Ch-bXz4m13yQAfE_vb4ceePo3tCsXv81Sg2l6q_nBh6LsLDaRdeb8azRnTA66XN0er3CYQ=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QXHCjslGrJAtzdpeU49izaAUwDAPIryiceclsMV3vw7NMJb-te5oUrC1IdwW2ZQiRqpxg6ZB3a6RHDsN484zIPQUjWqegiIpg_xAq1XfCpjVNZXClQZukoZiOlQHGFqANU9-Btw=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aKiYAlNbEs6OmbXTkoUL3ghYprtRX2LLYAuyYsCs3D8cziVjsSVCbJBlUqJuBZjM07ZFkdYpnwPcU5jBi2u_XerdLEHk7mFShJ4BMVATmWFd23bf24bfQ2qcm-BigU2yNrtGNRA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16642S7Usl6qArL-o3uPweJMQ4Nk8f9Q7K4g6Nt1XE6dJCMrDgewJo9ARGVlSnViTt2CrGhb3Jr5KRaSs7-zv8Qmo7aSkN6SDgRLp7bPnahEgFC4UeLlxfGpSy4dwc2ui250NrWg=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EOI5-3NZmaVnenrJvpYTFgxTlBDWA_KYYRHSDe1HXS1sH_sJeuhFlfXZ3R-MmvSwyd_VmUKyV534_lRc9dSvHlfxU3REf54lpKHkpnZYMqeTOCRrL7hmoxiOe1y40nZ38VTvdSQ=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3l-w2jvMtw4QBfoX33L4P8HcbWzI2xRR6wp-OkFxuIuBFE9pGN9REZqME6tpaYtH6BOARSu5A0C9MTm2pIFsX8_y1RsSaEvTk-RBWygcgnkQxdREznGmbEKf4BUXt-7wx5eyPCQQ=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BBtwgbpEpmYESDd636Tg-8RKv_pNVLRVeNh0F_CQ8QbC1b2KfgPyUZ6qGnmghN2x-iyF8gafcSli0-64iiGprfI8aR_fmFhwiN3bNNUZ34YcVu8mzZOC359rQ9HRQiy8l6pGdGQ=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3R12Gr-dmv_wjpqtCKMolvXiFJAkV5HF1uU8SoPLV2c-2sBepQ4n1kfgReGeatdEsZOwaQ1AEtDouXYJ-CyWWvxu58m7stj0bnFr7iStUb_O6x7GZdKRstYbe9JnfZCGsAEE4d3A=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WZHo4M7lj1IyEEIDwTS4XhgguIJ4W_AoCeVlDn0n4sIBzKE9ZJo0BgTLNuwFALEAEslMDMk1njCSV9cye6ciUgF75-A5tr1we0lP54H0m9vHLu5bcuaQu1BWYQTj-vE8-q0VQiA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qwnYJ3u8M-nr7nva-ig4Idtj_T26CNU4-x8zpc5n5ukue9vt8QVrdByqwOwelvOB_KTPGjJ7bHcexjqadD3YQvW_XmfDNWdWt_3S8wvyz0Y_poE9m0-xJlWsZHVWsz-3IaTfyTg=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lr5x5AO8sWgdEYzkzeZk-dJZg8L6_l1aYQmZ5gdQCRBIyOyW6PXz60TEYdkeizRqqZ8vP9q5OVaSi1E-BWMcKQCrLGl7k09sWpoteg0yaOurd20tEHd4QawotJ3Wp-ZUNXAn6PA=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3myQQu80iC5qRuLGt4jwA9b9Y78hj-iRp85n99o379wUcXxbbllxseRs12HDkR7RooTNTMMEopz8UskBJWAup4_G0AwdsGifVlx895HyU0a7C6AatdhnQJOEvx-uBKwWqAk-83=w1280-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JfNV0PlxaLe2pcx27mQNoIyrfhw4LjwcEUXkap9LU4HO-zN7CRuE8HFAz48tPnu0FoA2nHp21lHFeTx7xZCAfZd3kpnuber4VaObquO9Od4YGpTTn83eK5CYvFSSNf3m2dHoA=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PBI2uaGsHJWEVjEN-aS_3qg-IYrdrj9QcVhgBD8ZZVtvINjHrpfhlARnH7UbWi8UeTOMbrp-xAub3KDowBh_FK6tVOR40hQaHy24nz224Ndhbv_YLzeD87tzmxaXu6XuEtwsrsA=w1280-h227-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iU6n-dkmCLKpdVwQXFO86Sjcw_OTkV0RYjcK4K4Hhy6Wvb0sAPFBA4EUcpxOc1JynbUtr3sN2FWHNH9VCg0rudCa-acp7XnOOfTTpDG4tC7f7kloq58EOueSH6CX1vuNUPNU2DA=w1280-h107-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LSme1MVzuFx-1oSWrzwJAgJuyHi1efQQ1vi7w59gs035WDxmsArAehf_ei1vgC9oR9N7zy9n0yaSaT77bnV8RZpw3iyRKxT7c3JrCtAFVGoWXhE378s0FPEnOGAjZYftEY3nbEg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2al5mMHgQ0j-mIpjzypj8-AdYWfVApGY0RTYUrJvfgwiqJJt6NwhBbbwoYM9tv9W8vpnQ445G4Sk9zHQA1nPDTu6kSG68eGXJip0uisk6j7L5Vh5iYlwznS69iSduhtyyplrHHCg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lqiWQ38tqfdBDBuaFDlGIJuFErky6pwbkBZqnGXpYXKucEkhtAyUV9AZPy46VOkYnIAc_NGKB-F8L5JBUHKV5kFhO5tDVuC1_0XsU4qWBhVjd3gwlbbk8OAImdbpam7oDdouHFA=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YZhb0hBWrD61nx2gsCCXUfpkZ3lS2LR7TlyAtituOTvPKaMO2RFbcvskILIKMYnLmAFYy4V6kH6_PVvEIRiRUwuI5zRi6UOzGQWLITUKW39v26FZa2arafQKfdSesA7SwjtlO4A=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv349igILZryTJn5JWx6_uBXaVeCLVyem8nH98gAEa9lSJ9Rjvr_SpE4l4Kp3nMmAEXCOz17u2tEoxLJm1HqMF0fNUeE48XIEzJq7Is3qPQeZ0R22DdcxZ5OS2mrXJryC-CMAH9oxQ=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h1PvVirLRs7TVfc8WsfJP1CbzT_yZr7UmeiaAQjbv_iiw0SeU807bx0p3u3CJyaeip-dO4lkOSkFtzZgMx-zTw7J_eel979S8Za2y6cH7L0YklN5I4MWfHkbcU2RX1F0Zy02puA=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r0kFt9rMxL3QOjtno_L1DlW_kJKGP4RrFSw9slHskHXyhlp5J3raJWhmg7ccHvuc5Q004RUTF1XvaEi5V_fAehHITADYuU-ZgxkF_TUZchi3uNTNqpjt0ltYvokvspdEsIGUH1A=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UWf7lv1XD_-Fsb8Iri-do7lJQJARi4isp0_8SLWEbOPXhv8esmZ-Cu5NiEER-bn0WnE50VEbpI_po-LFHMs4CtzhBcKaZ9JorFTlaWoL01E-V_YB8huA2B8B39ixrpzmAb0Tlkw=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30ZtLXgyPzinDL2LXIJzci-bkmoJLEjAu-RiIqdAZd84Wp7UnLXbtF3L0faA2Ox89nWcA_nS5Nq0n795OHQlZkqXU62jsBzXZwZ4utLIiM1rFEAGKkHBYbmsNEMFgdYmXGJQX0zQ=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZLHKb_z81iBRD2hQL9Hj6lmLiHiE2dDGTV0tFMtvv_RRi17XdIpPPUGSkLgbG--zCElzSQX59wv_H4_eVkyfyStgmhLHaanufRGOc2L31aXZ9UDY0_4iTq5B08K8RZsPxTIK0=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-vgw6pS9lOAuYyRoeEO5G0tNFaR75cPgy3FeRDI3UbN9jf6N65jpV0J-lcWtdYh0myL7gppU93h3zbeMZkMa0aGu-bHLc0mERWBmsbiZkQJSsjk4VrBbxx7rzGBNSvVITqghO=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0I1Xk_-phPA05zk0mValK7dEZnaTK5Pn10kGgQx-K57J8fl5zIVisvp_WLwKJTUeRwTlFJkdPj6b8xP6PbPHN4SfLAotgxzygNArvG_vAxqLarbXBTyHuNjdNLgX3CHZBpN_SL2Q=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lWAQrathNkeBqMomYP6pTWuFrcfGB2Ms2PvZ3BfwFWSTAyWLMplV2M2gcFMWb3veceKA2peruZbU1qkyPNAbEGhNYEowpslm9yZsn_GBVEpzQHKGue5h9sfx3E6pQlPB1Pb-T=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23ddAaUuoW_0XV9_sP0RwIQClMBoq-B5Ki8l0xp25gPTfFr8TyS36pGhJA76erEUVDkLHDwf3G8XnMV4d-eHf4w6OOey4bQgufa-8iRHyja4G2O-Q6fovl-kL6Hn5tseoz6vGMQA=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GvQWSkOjnQlQ5g4l-hCMD37JxMmLLP3rrqVLE6owFFKgWk9wD8hI6E6O6dXKsOl8KNyQ-UiMKzt5JA_sN3ID-TlSFqE8d_y-pVpGKWhmhoYE0QDSJTjw7ok1cKpIS8o6pv4OX=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27jEYlppJyau8Mjy_16EmsOcbaJD1feU_P8SpO9qkwpHDZoWuoBRrI4RS34XiO6s_Us6Uoc-wQKJOVVJAesWn7tB_hhDqhH-wcaCIKxzxNjBO_zcgLUIH7E2JR9VxSchWz4nOC=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gqCkT3rvOMIV7u50uouDHsa0lkchIko-0mnYJpyOvkeiiBwxVwtlqq6ksFbpaP001vJYJJPCaBsVprUAHqHZDRiGu3NanTtLAzKHEeto1ERiblnhRIQNifq-l56TqN9BMd1yPIw=w792-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ps1Zo1CusR30NgkxOcbZdTYYvZqG3ZRa6vxsn7UmpVtY1JM9Y7OEOyGvqbQJWkOU6bAn8ECl0o_oZbQoJE_DhoHK1MYw7VxrpnWn_HwNDLFm3l8fPowZEnluzfCT-wArum9SI=w792-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15rqKeJSqLATFImqqdsFSxy-2z6ZLs_N8LJXXJZVg1P6b1DFQoKTyqg9da-o7IEPVZLeCIhkJeGBcUqVm6R3uTf9I7kElQDy40BL1du72zMVt7wCSvy5tbbUIv1kK09J9TMlwdxA=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qaLzdJWHDd271TNRjvPFYV07I1mnGX8yDnNcmU5-F-BrOV1xO7eI7NHcU52US1p8mTJnaWsQ6UDONog2A6cLeX1yTVl4TL3aXmu9Ojy2hFHFh0GBzr95zAc_kbYN4O4o6IcBeXg=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HMrQbMljDnx1tLYBd2xbhaYlI6_fV9bV7L-sxkIgvdkAZie0VLud5oIyhrh_G9bFWWDKBlbNlyC9h7qFOl_umL00axlXF1CDBS9yn3QitMKXVNaEQ9uxTswdrSxC_f8XGGqXEZQ=w1280-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EYPvFF4xOaw2Hin7hd0w17yp-o9t8UOlzZhjTcC8q3iWC-JMEgbgd-TLOt5Fr25lSYhafPMbwJQcrJ1hrwCTTvIMPaVFqg4aysxnZ3aBybLXrXMmOZwtc9iAxDt6UrliG_eVyJw=w1280-h207-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Máquina de Estado de la Clase Turno

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nPgaqlSBUI9S5fLxkKBHBiteLgPULwKwPp0yFDbmmNIqS-7fToMIta0GmfzfedQASQIO4OCNazkVqLK35r0Xr1k0NKffzEs8RKufOoL570opi7Dp0utvnnpxVxRtkWdnGoB0g=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xjdCiUEvhjdkK0PqUoHGz57pfjU13jFti1qaui0DQ-_vy65DtkhWu4SNGPYY5fLnlje7l8ASeBcDpbZQja9pa0H7OxHOEDCxSbycIAhQAqfp9gNtb9BaaKWdumTutm5_q0Jwy=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jjWw4Qhf1FfuqO52i41RWcBurTqdefYfXnXR5h9biVlxnZNy8Iqmu0EdY-8SivSeXGO4vG2YxVh3yR5IkMn70vh6riBSyMLpQ9MVIXt5CXz2uv4GN2mqORZnfHYjqceKCkXfKGg=w791-h287-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p7mK2y9qOe1-AmUlZTJzDeuQJmBYiyByGrT5VKol4v2B0U1JPwohLkgUqx64t4GTra39WeNefG_PD4o0snTb7R77EXpId8s6b1T2HQupU9ww4AqN75aDwCHVLt2SfgwemVMiWVA=w791-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FksWodS-m7FToV5vo9n-wrgaqdN0TrcoxF3lp5QSECO7e_G9MpycJFRl8SGqcPF4oiYHvlQWzf5wukBaBb9qSoFzbad4js-GgjcKveAUReIu6540ubtdDvBPyLdtYBSBXfU1DSw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FzYcfYSaPucnnyU6bmwSDjYojd1_j5hfpBIRzRMEehgSfvLrqCkf-tgtTu3No-PUNhlW0WSMoeCtGHC7fxU-QzvIaC0VZnaMRMfL1uCF3DetSxcPhmxckjlSypXKMu1yvVxHsOg=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MfZA82101TN93VIZFm5E_vhGe6ZIemn56-9DPH0Q-QM3kX5c6mr8Brk-3braQ60_jhnib4DCu4PvB0JcBJvmN05ZNB5w1tcANElaXDF_DeOp9I443lc76so_12CgIk6KA8ZBpzw=w1280-h428-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wm3mP35_CPeDdGBFE5WI_Mc3qrZbGuzHT8ZK7W9YFjuSgrCOTSbxxh-EyWlyyNWbc21EhF3mPbGx6hRQCvSZd0bjeq_7YYYRHJSpyAIV81aIKVK97ltGCrYkbwlVN1xVng9k6=w1280-h214-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vS-YsmhHXxSXRCY2gvRu3Ky6L4_imoJoTC8fOGeMG0ZjA1Ubu3qlIgRuQdI75frGEd1LRaKEDgQB58eoYHyeGfbAziEHd4m539kNAPJYeXt8qq7S2dZe5u-v9_wLvIqOMfOukUg=w1280-h214-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Rk7e_daA4emoApPQyyPdiT2WiLU7FZNkwfYhHgAaw7viDmIU6AzNsqRdk2E3Cc224ILHNOwVDnyB31TUcLuOWFvFb0VlvPvF-KiUD-fdeI5WjnrnyeUuTqa8-hqRrZLwygqZW=w1280-h214-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico


### Vistas Arquitectónicas

Vista Arquitectónica de la funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YZHbr2iKMhUBnoUJ-GITZy4jRztIYL1qkVHOZVvZKEQW-KHULnpEcVX54ULk001cgMHocpse2r272eLhUT-UJMgB7ikFFNVD4so9xJLijrZPd2n1bn5BFmjRQoC9d9cVMiR31vg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eUd8QAs5KSuX8OZjkzAQEZZuAhFIahA8xPnikb7_3wWA6rcL-pzbq9TszDsYjA4O2kzTzCAkkZ3O6Zu_Q8pocaN3bnsLE6A0P5DDsHEfPhpiYpsFn7_Jg1G8I9TtF1UC6-OMS=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LYezcZRc5ezr3pBwpQoWfZsAAn-wHD6_hyYs1CZVY8sHsZtiGkCE2DsYmTFl5FLmfHxPDg_t_pn5cYwXolOzLe0ojHzHIRs4FSekX--zOy5Zw4yvKaNzOyQWN0UTrLZQAbkq3=w738-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rogUHzRdE_ObKxlEROyfUJZjmFLWimtvM4luAXyMrCUzSCsUgsEFoUzcTNCTDFjkFqv4OYu7BgLQ0hgK6f6zfwGCkkjnLMDkbuHaLBmfCLIMbKQPQyFrWAnLtWkPxMgUnZ8Tq9Q=w738-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qFfd9lmJvPXJ7bEwjY-Y1L4dpcKv-OiL-CBQB9Kp3ojhJ8OIsvTdu0VeAnI33i3NLPDGdpxc15o5sPykAaOZthsgPym-rPZ6utjeA4_05j43HHl0Syc2JophqvhwJzMZwfOGWnA=w738-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20R1FXVA1FhARShFnzVDI6_NBhT9wScF0_t0hbKgQrU5tnqK4af033NyBy_ddlS40KU_JgNohyuirGmDl0HYNx_nAPXHldn52TDwttUvOFI0JwwtXKIO8ti6ygTvYvIEfRB_G1HA=w738-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06NDvhtL2-Pt1xqQFqQU-TX1KSCic04mde2ze8GozjEOyRUf_fzjPNomo69YL2j2M6ReN4C4TX0S7vk59sTYr0-I2tAys4yDV7nQSAimL4mTZT9sLMfDmszBYPSK6IVTNqRI1XNw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36a3YnpzNWhkxZphgM69u8vV2fXckQQ3382rrFxxfwVGVbsOpOn0fFSN0HdaJfDoxFGIR9nP1sSIm5H2WYoXQz8660antW7jxRRPfsRb4gXR0VvoGLnMlbrgxRyadV2OTCBe-0qg=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OHh2P1a2F5em7M9_GgooX9ObGigDYDPFqtY_qMnwRSr-CNFBS7ADj9cynBGs061GqEzcoHC_jNsgxw3pIkfXmxUt0kZXLKj7bBOADJgPbB5oj9FaeVeBZFhkKpPKo3W13Qv2EbQ=w1280-h313-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vdYNh9_MWWCa_i-5s-AedLMCXs42wrKQKr3oZa4PvS2haiPWpRVsF1nDRAngliSxmdp8Hqz-yp_A-_YxdqpwXMEzJu3sLvmEz9iBHjpjHZkJEkiQiXZjILoaewiO5f0GTE6wwEg=w1280-h313-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QuHG9izY62AstHKi5JSSsHjhRBdjcGWmKGZPynX4lVna1xXZq6M7SYdhiohy4RRQVqO8ZLvzeUx0aNeuavBfTV2AdlN2OCDBYhNWf-nMHPisbi3YqwrQSgQc5L6hwgLD4Dk7DQw=w1280-h156-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4
Página 21 de 29
Vista Arquitectónica de diseño:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hPRIKUV9-6zuiUjtdwNlYMnUdrL_5tfLvXFX0cfvsWFic1VqMHCE4ggLEUTH0iDNB0XPpIAU0FAGgmS9edfQf639t12TiIqjiH3tdnueqE2NOSNGGYEK0ph_2OHn3jVenueI7Zw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vGut1rQmXsAWhuc6qOX5CzmTvVjoAb2w7ra23MqUiHVrZK2_-yUoQ-endZODKpJC3ZEJ16dHRhy89lO5q06oXiIkOM1ln_Px_0dc1dDsUu25yjiBnY6BtllGcTP6HXdkuXC3W=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X5aYMm2IAbY21Lx76QULHbyG8fGtVrnuEoP2zy8DEZLXoCSyjgDFBbYycjnMIBuUgtlCq5wIfvSMx0PXcRcS-Dc-xAw8j0Q5DfIxkDfgT8jWAzBo36_OuqRSa6--YygKWZLvJfA=w944-h231-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GV4s9UeNoloYA-pt43kl3m5moubyldXN4lncCKwTEEYt7muFB7fLOraCokQ6CkrVZEpgBCcgUCPfLPq9VBXMvee_AgAHZlM67ekaRwj_uW7-ir-b6OxRcxYg-XD8Wq_AYsYJXdA=w944-h231-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16zaUXcukJEq6Hft0MVDAR8hQ3RHuRV_kQgFgrKbzd1sQY5YwMT57b2MhCjz-5RTkP5dPacniULc2kVhLhbzid1yim9dlx_8n-jJPOr02m-W6Qfo5SHljW7IxJlD44tSrUX3KNnw=w944-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xdtS_OuYz38-T5p4DUbGoOtFAOdUH5cvx2DK00ak_1RQeXbInBySbb8Tc_UrrsPZAZrff3hTC9HEh_Kw1hky69iU74dN8yrdmqdrfZdPEhpK_vUJRye3fOtAfZnxE28on_JoYjA=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_DFuDlI7-TTsKcw_VrIEaox_LSCaHIc6hZ6ywVEZZOZ_6ARm9BFzrsPStKsH59LnyXs554-XObJW75s-qRoy6ISeNrNbTpXvld05YFqaNVe8Xn6ZcvkzFp2P3tZU2Eo5Qf7Ui=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EMoTpcVd66nl06Byt6gOZniIsdGrEfcb-UBDXzdyiB1lMFKdODZcASltnPr5nwBVujADLTBKHx8c7MQMCdBXKtbQgJjmrV5vGpoGslIp2vkpWlv1DqeETXpJhVf1IHayonah6yw=w1280-h838-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m8fLEgtScUoEdJlFXz7VZUgWmT-dr-cxEQhO8tv6I49EyvUTMOWDY9sSdoLOMnvvavKjircnBVq37N_8DEPejT-hkY-lUqR5xP4hdtag89ILkIO458s52YHfJQIYs9BqnqaknqA=w1280-h279-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Vista Arquitectónica del despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18SUx-RaZSooh76cKGfWE08inSeuvea6tKiv_-ACd-ljUWMpaTz43sIEnR2VJj54VLYNnmpVSx2SYqeR4Qt8rmknOh50Dv7vIGMhHQ1H5HDDCwF7fTYa-9kTdcBRUtD-eSnaLZ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LT9giDB21Tjq9lXU47bdhksbYq0k0jCF8TOXcv3u3EPqS3cdO31ZjjaLLcoF8bpHdHwLU4xtdfvLL5eaMFNlx4ssaa5D78JAKbhxdVHt8_L-ItHHdPGU6eOJzghtUOYiXVC8D=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FI-veo92g_gfaBO9nReJ0tOqCj92UHLxndnGX3RHyYWhnAjWz_cURBmZ_9qJ1gHceHNvbzLHcnPLZwxYntxs0MKkwcmcDLsUWrV7gv40H75SebjDo7W89aM_CSq-854_V8cuo9Q=w738-h483-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wQB1mhqRy3QDKH0BMOgEMh3LR4pFyTbWKHuns1KhcQ9TIQgKPz4tPU1-Xq6TNUz0kR3WkMLCNZjnbs7raYnYI6oVK9UkpWT5N4sV_DeGLM-6qznmV-20hIfUtq4OvNpLcfPBg=w738-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1txhVuTZm4mvECI-GwvgeuXyLPVDHNvia1w2lLgB67RoM09tofcuBk6VgF5qQiyqnpZeNgPgjRl77FlTCkMFBzJi333iZ7rse_ZWJwGOtfYf_hGBu6p7WjD8WregBqMDtergNtVg=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sj2fAI2sja5uucE_dRGnQ7u7-HKIVI6CDveXgnHtYAmj23dhWNGe5tYVqSaGnahH3gDcR7LOXAbQm0pTNt1fFkU5cp-o1Z0FpaJU_9Py_ETCLUfTGkLsl4pvfjvn_D2S7ibonsw=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_VnWTj3RJCv7Cb_0ZGi1PAJTXHpRuNi997n_YQF0acDRFN5thWVlxV0EQwGAADZFJM3xOSViqsPaJpRh-eOu2DG0vI3EzV6cAkxX5tUfPn3qsYngxWTw5bW3rFq3H2fLCfAvIig=w1280-h179-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dhlV3TIXSMTrBywyFqjX84GdwqSMS1Xl7iHAyaIqoLxZzoJR9mqYxHEPxBp0QW2QQmqPc1TgNq7GC2sCLKmLYyf_JxOafUspKESr2nP6b_TXe6z8tQGz3Hfuc4vmIQwUVUnWcrg=w1280-h179-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv138ADn0jgcVqjAXW61A9YrVGMv09l63-P9iT9vAF7eUD3yosp7oewasDuFpcVOFMzlK0uRlhjACkWuIFkF4E_suckPYzg2ASIiFx9b2OODIC-C6s4k7iPT4AsCx8TUrEyy7UP0=w1280-h179-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

Ciclo lectivo 2026 - Versión 1.4 Página 23 de 29

### Rediseño

Patrón Observer - Vista Estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Mw7dgERZBXJWQoR8r39-NjDnZkfXIoslOJrkWVu2DR0oJQyH70RyXL2byHylxHE77n1KlX2efUWX6Vqos2g9W1ov8dzd_EyE7FjVvtprB3IrFbA416GhHGuvIjV5_mQ0-ayAyBg=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e6_TtvV1w4YDYEExzSVlY7P5kfOmaGAaaYmHsPTD4K_UUZacqCrkz6wr81VKAlWJSiZ61-uiUy9pGCteiLZPBekqNj5v7QeCRfqWZvuZe4eJ_kMKGCfak04RA0QKjz5ntDewhFw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10K-yEnjVxU-7KUuF0wE8YR-2ZQGrgXMmcV6UdwHkTsnUUOK2wZgkOHZXQqPAFRJ6vXBJ-fKU7A6jRfvbzb7DvniS_XIuVIQ4sTbnl8by_MPnzMyK3EuT1oO-IGaIpoxWkCKy0=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2enQ8_mYx_iMqu5rj0RZq-KSwrV3DqSz-4IShYEnkJsjfk-5faErMd557shipXw4RfduIM75lp3y1mcO-y-0L92AP4tKOWYRpTEcWxmFS_2t6Qi73yObI0Ufiakb5MkyMvcqecdA=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36qWF2u1T7RKycfl9LkQb52DQx-5zpdR9dzZm95ngS1RAt8OwnGJ9MuTgTzNFfxW0oNdnwF_37fB7DgkhNL3nBoQs45j7DWoyL4ifmsUiKrUgdISgQHtJl7vOdFQR8ax2HumVxaQ=w1086-h152-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QoaTGFlYw1KcF0IkzXL4ADh4c4jaNTtfOJtllQoZaEYVVcTRIPKe5GQ7vliSmXxz_DXc-urGjvnem0KAW-RXP9R3LTyRiPhAwhc-MZUPVqPkkHT5FyeeZoTLqBzhljPK1lNAKFQ=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QMaSgioCCQPz4GdvI4K_KtEBCe47hspYdn-qM9VZoTKktPIwfmJnw_ujd0sPa3oXux7I4sCD6GwUtSww-Aks3y6iF4BvjcJd58VuudUQ1mfFmdPaOXyLn-7RBM_AE8Atw95CfxA=w247-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XwK0koF6AdZJL--UfCK7KIdNI2VFoqPcvOKr05LsCQ578fhqvf2mO0RlcO6fQ3RJdq-3SH9qqC3WnN6nGoRATfnUs4UX_eGl_XJ8K8RaAw1bHRlE54s8io7YVhYcrjQcdg7DX=w1280-h378-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ql3mzK7t8mT5gRhI0cKvG-3fjuMkAoQAcbpz6acrd0f6YN-AmJOtl8mY8q1WlZHFn3pGVb0wqMPyiOi4QYZyswW2LFz4fZkuZEI_ijiFbyzF0H4uwp9Rkx50MHmxwkhay2Xt3=w1280-h189-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uOzb5R_vtF-v2YDVgBnZzOSvnYxNRo8RamkW6vBDaKXH8lthNjuUMd6CwponWIA4QgZK4UZAuGbw9N2Y0FkQbwb1Y3Fq4F7V9hWTx49uzzvcP58-Bcd87y6MFKUDz69yQ0hVozg=w1280-h189-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D8QKjUEiuEdGFTnafEHuNlrQmuDkSlP5X9BR9-dpBnwbfcHQxhHVbq2cSgMYgBxeQYbSF8JEluzq0OHxzAaXt10Vhy-gDskv9CsClgzSalvVvvLychZtH8j15mKBT8zHEIh31=w1280-h187-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-1OyD4LfYgwWtverrtHrqx6f2xkL3g4R1m3g4j8s6o1divuNPtkjEH46lBfl7fyqrR0N7fyjyYA_cZNuui5EuhuBqOoxPHtYwCOPYrTkFELPGp378dKOotwKB6hqCOjJ6om-BrQ=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tP35dPjfc4X-etokpN3ZBs6dO4VjNfJ_R1w7NjbngG3ola7ECO_spAhysOaY3yKKI2N0vg_3fvD-iYhAFKXxsDYB2zYxisYYoYQGttVxYc2ls30g-yC93YXhztiXnV5JG-_kRgQ=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lZeGWGTzIVDpOMzgHM1ldme80ovthT9_E_zeioAELqUF3JRNr1t6PhuBcIoPHiHaHOgWKINtKv5qzSPjKDOmw5ntJwb3MQMjlB8LbzDAmKXv2RfJwtlL1zLGcNsmzjRU40JFJ=w738-h218-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PH98HmzD8unIz-N9ttvr1tXpeoI2iBau7LakPp6Y6ciQA_Dg1uvKIh_rjCICF-qjNbLVMjpexKo_d0MfrYb62mpecZrfni5rbFbgK1aRN-8FzAI_oOy7SMo7WkPTMkXNqY4aBmA=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BytP5CPXRqYa8TnCYS7Zf-327WpwWBsTRHce8VdXxJgw3VRTzrxg5WyrNnntamDzM2UHtAKmWvoprvLAFtE5eJRl525apE3LgNfcyHzi3O10d_tIQlhXtsR-419KvUsVdB7s39A=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lOKupsLx1BlaIOYNQfAVzY7_vZ0FuDwgMnYLChs8WRcE3FaXwpWb5RdXp84umtAB13Y2VuH5tb_zSxj9zwcS0QlyUxvRMPjh-H4-v99d6hS2Vj8q_XdyrbQwKHNdtVZvWO6_4=w738-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IYwaS1cZfm5tUHUiZRoKj80S8lf5uGwNl1NzEpryRPNuDkZnI6cxEm-YB-nW8yUfXJu9DZiQE1DZEHfeUQlgsGXg1ZQZD0D8nzMcWRlnVYTd8gmcK18m2zD8SQhp0kKC702bb0A=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02-MLkLiosmw_GMhxGNiocnMtNat0uRcgXyFRCWeLvIXPA36PLBsmm3k8Cm56Wjc6jriAHD5U9PB2W38VhMjUkeSFapIUl7Z-BBvz_FVNu7DMh9b6XOvf8zCF0ZyzSFZpR01PA=w247-h258-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4

#### Página 25 de 29

Date[[]], nombreApellidoProf: String[[]], servicio: String[[]])” es polimórfico, es decir, dependiendo del objeto que se le ejecute este mensaje, es la respuesta que tendrá. Contiene como parámetro todos los datos que se necesitan para enviar el mensaje y el correo.
En el parámetro de contactos se pasará ya sea los números de teléfono como el correo electrónico de un grupo de pacientes.
Clases concretas InterfazSMS e InterfazCorreo
Estas clases implementan la intefaz IObservadorTurno dándole funcionalidad a los métodos que obliga a que definan. Además, tienen sus métodos particulares para cumplir con la funcionalidad de notificar a los contactos recibidos por parámetro. Estos métodos son “enviarSMS()” y “enviarCorreo()” de la InterfazSMS y la InterfazCorreo respectivamente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zwPsHhsZ_4zVxe-1T3b9EAU_6CwYK_ntIfkTPo4sWAu9ub5kRVAdDl616Beck3VpnnRaPGB23r9En5NdSZpm32iS_k6PaQBMjyxITkgJKuCPbUZq10izMA1WJWeNyYO5wTJP4=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0t_LecvvOMSlk5pJiOI5RB8MRqG7ql8OG2aVfDt5NF7J9-A-VS2hrt3CM3R5J58shFlayHtxpA9ANUWwxHYLoftEmpGQW2kYNl4VJN-WWBQuaJcPX1xDSt4FwYKgqU0TPQU7oOyw=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vaq9DiY_2e_gRckWJAWl44-h0X9QiPzfCmdI-MXoFTSb-xv9Vj-oUKU4V3nRBD5dhvP_Il2MURBOwiMshy8XYkWnAARYhppn8AzzDB5iQX-Q1dbA04uJ6AWH46U-js-aHldJTsw=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yM-2Cr_RDTilLssMExizuf_6FREIvbEoQ_tfsa6fI8YFn2q7pWoZjFVwD8PFmp8U5BHl2kTiVmnahqkh1aSKIpQhVsrhZVhYqUrxv5mWnKu69tBdONLCyaoWBVcFNQZK-wIEvQg=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eDwQmJfMvusjoftp1mJ0yjAD77N9AwzdYlEoz3hal9sSwzR5LRV_OGKtTj23L4ssq8AZz-Q_f0vMhHUlfaOyrF7OmPOQBKGeRRZva1GvUBPDjEMLzekZtEjn8DzhdzaE98zLuGA=w1280-h399-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2E47hjW9M0oujkFCehWuSthHlKBStVDudUp3LX1hHn13S2ePodO1-OiWao1T9Xn61iteQlKskKKsVucJvMyH54VmIoTWt96E2NgJ2qOMltNxanw8ZUcVPx5TKMg8HQQwJC2hlWwQ=w1280-h399-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4 Página 26 de 29
Patrón State - Vista Estática
Vista del comportamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZeWKtDfyEY6h21siCDa6nUOxZhn1o1qR0GLqdKpYH0Cfp98l5eyromWZJ1lFidYpKHMinf-iNbbsZWuiDIkCA-1k-XjOd-sEjAZmYHrKghdXZDw8pUlX1pmgtBH3-p290Zty-5Q=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UGVpPsmjrDXhUfpkAMc6jWa5pJ--dQYbmnUL0Yi-uwGe7EQkx5bYJ7NY-lRF38M9L5bTKtSwZjhprNJqa1K4UE4znR_CZr5S_P_voFn4jWSFKYq0w7H13Mtg0XzMiW9f1DwtZ2g=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YA1p-NHtk21AT8CE-0lJMcY8GGJlme8vrjRhLHXbO0IDe9qVeMj5C8IIIaDStml8KGCBHcIRV9Ogno08SIMAes-U_ibIVHK9u69EYfoge3QrKY-OUiqyFGrYUEUYBn4Jx9BPx=w1086-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dfDr_7lcyXDHYxMzgkoB6YwbR6ZLwuirrP-vVp4ecAu5QgMpQLP2TnjRPuynCYMiJT0LdgnB0jbQM0dn5oofn0YnTTirgGq54rrS1Xfa8hxcPPw6A0FXKQ2CTzP8pkhOL0EWvww=w1086-h241-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MeGDx1QtKqnq4eMiJ-Fg7LVC_lSgXJt5AsPptvKrdgHELYN4AWsuFVLinqBzNwI7IlSTAfjYZfXQyeu3pP7vJVwZhFwZOs5kvjgsM5SpudMXDN8fEi-XnAsDG24MvDBdyBDSJZA=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3c-BZWLReKOvsV-qDi3EliYTJfM8ua_k4bXWVnX_3j-y6x7gwe_GaTCVEZL6UaMZ_X6k0KfmEycZ0CAmz0LQDKsMyqHwzRwI-EZMfxhbh-Di1dsJjnefC2vt170xaiqmvdx8Z79g=w248-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xA0L50dWKv_W3RP5J9ION8e6HoqBYpDdbb8LsVvg0DYPMLONBYMEf14uaHV64d1yywgNSms4bQ_ZqRrGdFBTzofS8NiQKjDKShjAlqYG_sI3xAHg0T7NAfi-UU-A6VPBIjjRIHg=w1280-h187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0N-fsfR_5ewyxxsnECfmMg4z26qcTZnhQxYtl2CvzjyuB3mTaDDyUKaTQTQNmU-rigzv8XB4RHmSvs8UbrOkceXA2d1hpTd-xlhpfxYgx2SZOGL9fYNX2Y0AlXRjDZHFTTDDrXDQ=w1280-h187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vDsUBp2-fSIeNB6UfYkDATI0MoOzQq56EFJloAUhZiZGJWEvljG9M8K-qsQmmvbGAPfl9TVmNFH7nDmvmpfJjOkZX7yeB-ZlZQRoCkffWkz0ZF0edyG5kT16_i6XknjN3HJ9-vw=w1280-h373-v0?authuser=0)

### Proyecto Práctico de Aplicación Consultorio de Salud Mental


### Diseño arquitectónico con Monolítico

PPA Consultorio de Salud Mental - Monolítico.docx -Versión 1.4 Página 27 de 29
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GG2KUlL8J_9Y1Ht8Fo5xveF-tzDY0PKDyp2UJU2eLfl-JwQ2MPB43wKY_iqswXvJqfNeyf3TsWraN4fhldj4ZPFPpiF6MB7KAhBfY1p3MQC7RqDqZ3PIOSsTxoMhipPpu78JYRA=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bN9Kh_D9ecnWJfp_qiDvVyDCTZV1T40g9TC2utAiYADxnncf9UwuZ7ihT5tZUk55No4bPV8rAGJEmYmVgYngyKvddwICnZqcbwsstPOtqjsOauhjMWoxOouP1vTzAwZF60w3OFg=w84-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZgXirlsAYWcLM2a6NdPzBzA4ypNPLM5R0OiB-V7G7uionCGzaog7GwCRerGC0aXpRA0J3pUOoKoXi4NPEJl5cgooddBfRMZvT6_lDSlvDCiblwTxc4lwOp0F2-1m_K40IMN7xog=w1086-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gr7-xTJJ32vGr_i4CrPYbhZIS11q8cyPIqdx5ULi2iGbmcEJwRT6VpOSFda1XdjEMGZiojWvvR-1oSnE_B-o-UV1se4s0GsabMKBtG3sjoTXZmkWPmitdjkAt1SlSXvIln3gatQ=w1086-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0It5W8iHSeYstflNSo7II43CRLYkflcgpUomS-mJ_KNujJBr8s8M0qWeUw1da94_MuaBi0aQZjCR14WWd_0TJgPRcor-9Gc8fkjHNXqYgoyEJ_vpmUcnCKPEYU1rqta04wcmf0eg=w1086-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39H-IXwk2byOcbKu1KbNpXXHE4r0dLrRWZtfwQ8e0yvgkqzDZL9KieKjDH5hCTZIvlG8jnO00D_76eiKGMVSw_sSZn-RTlzdE7nSYpqnhiMcMUIaqEyEHDrluBr0fzsJinO64q=w245-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g-NrVHV9KXns2S5L6FddCbjlrtTnnzXjq7lbes0AxShsB_h0MRJn8wctCocUlQg0bcw6cGyX8fP6Gz-NFv7t_lHwhSPfFhDT6FbiFXFZqmLv8DtS6napPK2GtGdQSd538YztagA=w247-h258-v0?authuser=0)

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0K7dGcm9-EOp_ALCHKg7aGd1bXD0imuFKN1PLu3Oszau7RxhZx41XgCxnikS5q0xHz6gXusIvqOUYAaAXJmzKeMp8qw5QPPaAZ5OhmWnZYbSwiwWTdKCHlP8v8zxp_p9ips3Pigw=w83-h92-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2P-Zw982Ii5uDZ8SSb4rStQe3e2hFITlFrLPnyjMfkA2-EqPqWO3ElG_L7CPBrZIqMeM-BvdfZg8viYEr6qiu07PCBotO0zqagHlpgdy5yack64K5Clqzzu7NkRdlSzg50C5gWOA=w84-h87-v0?authuser=0)
