# PPA Consultorio de Salud Mental - Microservicios V1.8.pdf

- **Ruta OneDrive:** `Casos Practicos\ppai 2 salud mental\PPA Consultorio de Salud Mental - Microservicios V1.8.pdf`
- **Páginas totales:** 16 (extraídas: 16)

---

## Página 1

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
	Proyecto	Práctico	de	Aplicación	
 Nombre del Proyecto Práctico de Aplicación:  Consultorio de Salud Mental 
 Objetivo del Proyecto Práctico de Aplicación (PPA): 
 El objetivo del proyecto es desarrollar el modelado de un software para un consultorio de salud mental, a partir de 
 una descripción del dominio. Sólo se muestran algunos artefactos resultantes de los procesos de requerimientos, 
 análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se 
 construirá. 
 ●  Analizar el sistema de información con la perspectiva del paradigma de Orientación a Objetos. 
 ●  Realizar  la  construcción  de  un  Modelo  de  Análisis  como  base  para  la  construcción  de  una  arquitectura 
 robusta del sistema. 
 ●  Manejar  las  herramientas  de  modelado  que  brinda  UML  para  la  construcción  de  Modelos  de  Solución 
 (Análisis y Diseño) a partir del Modelo de Requerimientos 
 ●  Modelar la arquitectura del producto utilizando estilos/patrones arquitectónicos. 
 ●  Resolver situaciones problemáticas del diseño con patrones de diseño. 
 ●  Mapear diagramas de clases a BDR. 
 ●  Analizar y modelar cambios en los requerimientos y su impacto en los modelos existentes. 
 Contenidos de la Asignatura que se abordarán en el PPA: 
 ●  Modelo de Requerimientos como punto de partida para el modelado de la solución. 
 ●  Modelado del Comportamiento en el Análisis 
 ●  Patrones de Principios generales para asignar responsabilidades (GRASP). 
 ●  Modelado de la Estructura en el Análisis 
 ●  Diseño Arquitectónico – Estilos/ Patrones Arquitectónicos; Vistas Arquitectónicas 
 ●  Diseño de la Estructura del software y del Comportamiento del Software utilizando patrones de diseño. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  1  de  17

## Página 2

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Consigna asociada al Proyecto Práctico de Aplicación: 
 1.  Elabore  para  el  caso  de  uso  “  Solicitar  Turno  ”  la  realización  de  casos  de  uso  de  análisis  aplicando  patrones 
 GRASP de análisis. 
 a.  Dinámica con diagrama de Secuencia: Escenario del curso normal. 
 b.  Estructura con diagrama de clases. 
 2.  Elabore  para  el  caso  de  uso  “  Registrar  aceptación  de  solicitud  de  ausencia  de  profesional  ”  la  realización  de 
 casos de uso de análisis aplicando patrones GRASP de análisis. 
 a.  Dinámica con diagrama de Secuencia: Escenario del curso normal. 
 b.  Estructura con diagrama de clases. 
 3.  Construya  la  máquina  de  estados  de  la  clase  Turno  ,  utilizando  un  diagrama  de  máquina  de  estados. 
 Especiﬁque  asociado  a  las  transiciones:  el  o  los  casos  de  uso,  los  métodos  y  cuando  aplique,  las  condiciones 
 de control. 
 4.  Realizar la identiﬁcación de los subdominios, utilizando el patrón de descomposición en subdominios. 
 5.  Utilizando  un  estilo  arquitectónico  de  microservicios  ,  construir  las  siguientes  vistas  arquitectónicas, 
 deﬁniendo para cada vista el punto de vista asociado: 
 o  Vista Arquitectónica de la funcionalidad. 
 o  Vista Arquitectónica de Diseño global. 
 o  Vista Arquitectónica de Diseño detallada. 
 o  Vista Arquitectónica del Despliegue. 
 6.  Rediseña  las  realizaciones  de  casos  de  uso  de  análisis  utilizando  el  patrón  de  diseño  que  considere  adecuado 
 para  resolver  los  problemas  de  diseño  descritos  a  continuación.  Modele  la  vista  de  la  estructura  utilizando  un 
 diagrama  de  clases;  la  vista  dinámica  utilizando  un  diagrama  de  secuencia  y  el  pseudocódigo  o  una 
 explicación textual que muestre la implementación de los métodos involucrados: 
 a.  Realizar  el  rediseño  necesario  para  crear  una  solución  que  ﬂexibilice  el  modelo  permitiendo  informar 
 a los pacientes vía correo y sms cuando se haya aceptado la petición de ausencia de un profesional. 
 b.  Realizar  el  rediseño  necesario  para  modelar  una  solución  que  resuelva  en  forma  ﬂexible  el  manejo 
 del comportamiento variable del turno según la situación en la que se encuentre. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  2  de  17

## Página 3

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Glosario  : 
 Término  Descripción 
 Agenda de Profesional  Es una diagramación que deﬁne para un mes los turnos disponibles de un profesional, 
 que se genera a partir de la deﬁnición de horarios (días y rangos horarios para cada día 
 en los que podrá atender), informados por cada profesional. 
 Servicio reCHAPTCHA  reCAPTCHA  es  un  servicio  de  Google  diseñado  para  proteger  los  sitios  web  contra 
 actividades  maliciosas  o  automatizadas,  como  el  spam  y  los  ataques  de  bots.  El  nombre 
 "reCAPTCHA"  proviene  de  "Completely  Automated  Public  Turing  test  to  tell  Computers 
 and  Humans  Apart"  (Prueba  de  Turing  pública  completamente  automatizada  para 
 diferenciar entre computadoras y humanos). 
 Protocolo OAuth  OAuth es un mecanismo que permite a una aplicación o servicio solicitar permiso al 
 usuario para acceder a sus datos en otro servicio en línea (como Facebook, Google, 
 Twitter, etc.) en nombre del usuario, sin que la aplicación tenga acceso a las 
 credenciales de inicio de sesión del usuario. 
 Certiﬁcado SSL (Secure 
 Sockets Layer) 
 Su  función  principal  es  cifrar  los  datos  transmitidos  entre  el  navegador  del  usuario  y  el 
 servidor  web,  lo  que  garantiza  que  la  información  sensible,  como  contraseñas,  números 
 de  tarjetas  de  crédito  y  otra  información  personal,  se  mantenga  conﬁdencial  y  segura 
 durante la transmisión. 
 Se instala este certiﬁcado SSL en el web server, subiéndolo en una carpeta en dicho 
 servidor. Se suele subir con programas que automatizan este proceso. 
 Web responsive  El  diseño  web  responsive  (o  adaptativo)  es  una  técnica  de  desarrollo  que  permite  que 
 una  sistema  web  ajuste  automáticamente  su  contenido,  estructura  e  imágenes  según  el 
 tamaño  de  pantalla  del  dispositivo  desde  el  cual  se  accede.  Esto  garantiza  que  el  sitio 
 sea  legible  y  fácil  de  usar,  ya  sea  en  un  smartphone,  tablet,  computadora  de  escritorio, 
 notebook  o  televisor,  eliminando  la  necesidad  de  crear  versiones  independientes  para 
 cada dispositivo. 
 AP  Actor Principal 
 AS  Actor Secundario 
 SPA  Signiﬁcativo para la arquitectura 
 N/A  No aplica 
 Descripción del Caso 
 Los  responsables  de  la  gestión  del  consultorio  de  salud  mental  han  requerido  un  sistema  informático  que  permita 
 llevar  el  registro  de  los  psicólogos  y  psiquiatras  que  atienden  en  el  consultorio  y  para  cada  uno  administrar  sus 
 agendas (días y horarios) para la asignación de turnos para los pacientes. 
 Profesionales 
 De  cada  profesional  se  registra  su  nombre,  apellido,  teléfono,  correo  electrónico,  tipo  y  número  de  documento  y 
 matrícula.  Se  registrará  el  servicio  en  el  que  atenderá  psicología  o  psiquiatría.  Un  profesional  trabaja  en  un  solo 
 servicio simultáneamente que puede cambiar. 
 Agenda de Turnos 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  3  de  17

## Página 4

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Por  cada  profesional,  se  establece  la  deﬁnición  de  su  agenda  con  la  duración  de  los  turnos,  los  días  de  la  semana  que 
 atenderán,  su  hora  de  inicio  de  atención  y  su  hora  de  ﬁn  de  atención.  Para  cada  mes,  se  basa  en  esa  deﬁnición  para 
 determinar  el  agenda  del  mes  siguiente  y  se  crean  todos  los  turnos  como  libres  inicialmente.  Se  puede  usar  la  misma 
 deﬁnición de horarios para varias agendas. Las agendas se generan respetando los horarios deﬁnidos. 
 Antes  de  la  generación  de  la  agenda,  cada  profesional  debe  informar  los  días  y/u  horarios  en  los  que  no  puedan 
 asistir al consultorio, para inhabilitar los turnos que corresponden a ese periodo de tiempo. 
 Las  agendas  y  turnos  del  mes  siguiente  deben  ya  estar  especiﬁcados,  de  manera  que,  a  la  tercera  semana  del  mes  en 
 curso, se habilite la agenda del mes siguiente. De esta forma se permite a los pacientes que puedan solicitar turnos. 
 Si  luego  de  que  la  agenda  esté  generada,  un  profesional  necesita  unos  días  libres  o  unas  horas  de  un  día,  puede 
 pedirle al encargado de personal, con dos semanas de anticipación. 
 El  encargado  de  personal  analiza  el  caso  y  si  es  autorizado,  registra  el  rango  permitido  en  que  no  estará  presente  el 
 profesional  para  indicar  los  turnos  afectados  como  no  disponibles  en  caso  de  que  estén  libres.  Si  hubieran  turnos  que 
 estaban solicitados, deberán cancelarse. 
 Ahora  bien,  en  una  situación  de  urgencia  como  enfermedad  o  situaciones  de  familia  de  último  momento,  se  pueden 
 cancelar  turnos  que  han  sido  solicitados  u  ocupados  siempre  y  cuando  el  paciente  no  esté  presente.  Si  fuera  el  caso 
 de  que  por  fuerza  mayor  el  profesional  no  puede  asistir  y  el  paciente  está  en  el  consultorio,  se  lo  derivará  a  otro 
 profesional lo que no afectará la situación del turno y la atención del paciente. 
 Turnos 
 Para  la  solicitud  de  turnos,  el  paciente  puede  comunicarse  por  teléfono  o  WhatsApp  con  la  secretaria  o  pedirlo 
 directamente  por  la  página  web.  Si  es  por  este  último  medio,  deberá  estar  registrado  el  paciente  con  sus  datos: 
 Nombre,  apellido,  correo  electrónico,  teléfono  y  obra  social  si  posee.  Una  vez  ingresado,  podrá  solicitar  el  turno  por 
 dos  caminos:  Puede  comenzar  eligiendo  el  profesional  por  apellido  o  seleccionando  el  servicio.  Una  vez  seleccionado, 
 el  usuario  elige  el  día  y  horario  de  un  turno  de  todos  los  que  se  tienen  disponibles  y  ﬁnaliza  con  la  conﬁrmación  de  la 
 solicitud del turno y el envío de un e-mail con los datos del turno otorgado. 
 Tres  días  antes  del  turno  se  envía  un  correo  al  paciente  para  recordarle  los  detalles  del  turno  y  solicitarle  la 
 conﬁrmación  o  no  concurrencia  al  turno.  Si  conﬁrma,  el  turno  se  registra  como  ocupado.  Si  indica  que  no  podrá 
 asistir  el  turno  se  libera,  quedando  disponible  nuevamente.  Si  no  realiza  ninguna  acción  el  turno  no  cambia  su 
 situación  hasta  el  día  del  turno,  donde  se  registra  como  ocupado.  El  paciente  puede  liberar  el  turno  hasta  antes  de 
 conﬁrmar, en ese caso el turno quedará disponible. 
 El  correo  que  se  envía  debe  de  tener  un  encabezado  con  el  logo  del  consultorio  y  el  nombre  en  forma  de  imagen  y 
 como pie del correo, los datos de contacto del consultorio. 
 Cuando  el  paciente  asiste  al  turno  le  indica  a  la  secretaría  su  nombre  y  apellido  o  muestra  su  QR  para  que  sea 
 escaneado  con  un  lector  y  automáticamente  se  marque  su  asistencia.  Para  ello,  se  deberá  validar  que  sea  el  día  y  el 
 horario  del  turno  para  registrar  dicha  asistencia.  En  caso  contrario,  cuando  se  haya  escaneado  el  QR  se  avisará  a  la 
 secretaria por un mensaje en pantalla que no corresponde el día y/u horario del turno que indica el código QR. 
 Es  esencial  marcar  los  turnos  como  asistidos  o  no,  para  poder  analizar  posteriormente  no  sólo  información  del 
 profesional,  si  no  de  los  pacientes.  En  el  horario  correspondiente  al  turno,  se  considera  sólo  30  minutos  de  tolerancia 
 para la llegada del paciente, si no el turno se marca como no asistido. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  4  de  17

## Página 5

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Administración de Usuarios 
 Toda  persona  (paciente,  personal  de  consultorio,  administrador  del  sistema)  que  quiera  utilizar  el  sistema,  deberá 
 tener  un  usuario.  Deberá  registrarse  con  un  correo,  teléfono,  usuario  y  contraseña.  Para  iniciar  sesión  se  deberá 
 completar un captcha para asegurar que es un humano. Para eso, se utilizará el producto reCAPTCHA de Google. 
 Además,  los  usuarios  tendrán  la  comodidad  de  ingresar  al  sistema  mediante  Google  al  utilizar  la  tecnología  de 
 seguridad OAuth 2.0 de la que ya se hay disponible licencia paga. 
 Infraestructura 
 Se pide que el sistema sea, en su totalidad, web. Es decir, tanto la administración general del consultorio como la 
 gestión de turnos del lado de los pacientes podrá ser accedido a través de un navegador con conexión a internet. 
 Además, debe ser web-responsive para que pueda accederse desde cualquier dispositivo. 
 Se  deberá  instalar  un  certiﬁcado  SSL  que  el  consultorio  ya  ha  comprado  como  medida  de  seguridad  para  proteger  la 
 información de sus pacientes. 
 Las  interfaces  del  sistema  deben  incluir  la  visualización  permanente  del  logo  del  consultorio  y  sus  colores,  que  son 
 celeste oscuro y gris claro. 
 Definición del Producto 
 Objetivo 
 Gestionar  la  atención  de  salud  mental  del  consultorio  mediante  turnos,  deﬁnición  de  calendarios,  el  registro  de  obras 
 sociales y generación de informes relacionados a turnos, profesionales, atención de pacientes. 
 Alcances 
 ●  Administración de Servicios ofrecidos. 
 ●  Administración de Pacientes. 
 ●  Administración de Profesionales. 
 ●  Administración de Obras sociales. 
 ●  Gestión de Turnos. 
 ●  Administración de usuarios con perﬁles y permisos. 
 ●  Generación de informes sobre asistencia de turnos. 
 ●  Generación de informes de profesionales registrados. 
 ●  Generación de estadísticas del tiempo en cada estado de todos los turnos. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  5  de  17

## Página 6

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Reglas de Negocio 
 Nombre de la RN  Descripción de la RN 
 Ausencia de 
 profesional 
 En  caso  de  que  un  profesional  tenga  alguna  complicación  y  afecte  al  menos  un  turno  solicitado 
 u  ocupado,  deberá  cancelarlos  y  notiﬁcar  a  los  pacientes  afectados  por  mails  y  por  SMS.  Debe, 
 además,  especiﬁcar  uno  motivo  contenido  dentro  de  los  motivos  permitidos  para  la 
 cancelación. En caso de que afecte turnos libres, estos quedarán como no disponibles. 
 Solicitud de turno  Para  solicitar  un  turno  el  paciente  puede  comunicarse  por  teléfono  o  WhatsApp  con  la 
 secretaria o acceder al sistema para tomar el turno. 
 Se  podrá  buscar  el  turno  por  apellido  de  profesional  o  seleccionando  el  servicio.  Una  vez 
 seleccionado,  el  usuario  elige  el  día  y  horario  de  un  turno  de  todos  los  que  se  tienen  disponibles 
 y  ﬁnaliza  con  la  conﬁrmación  de  la  solicitud  del  turno  y  el  envío  de  un  e-mail  con  los  datos  del 
 turno otorgado. 
 Asistencia del 
 paciente 
 Cuando  el  paciente  asiste  al  turno  le  indica  a  la  secretaria  su  nombre  y  apellido  o  muestra  su  QR 
 para  que  sea  escaneado  con  un  lector  y  automáticamente  se  marque  su  asistencia.  Para  ello,  se 
 deberá validar que sea el día y el horario del turno para registrar dicha asistencia. 
 Liberación de 
 turno 
 Un  paciente  que  ha  solicitado  un  turno  y  desee  indicar  que  no  asistirá  al  mismo,  puede  ingresar 
 al  sistema  liberar  su  turno.  Si  el  turno  fue  solicitado  por  teléfono  o  WhatsApp,  debe  informar  la 
 liberación del turno el mismo medio que lo pidió. 
 Sólo  puede  indicar  que  no  asistirá  a  un  turno  que  esté  solicitado  u  ocupado.  En  ese  caso,  el 
 turno se libera. 
 Ocupación del 
 turno 
 Tres  días  antes  del  turno  se  envía  un  correo  al  paciente  para  recordarle  los  detalles  del  turno  y 
 solicitarle  la  conﬁrmación  de  asistencia  o  no  concurrencia  al  turno.  Si  conﬁrma,  el  turno  se 
 registra  como  ocupado.  Si  indica  que  no  podrá  asistir  el  turno  se  libera.  Si  no  realiza  ninguna 
 acción  el  turno  no  cambia  su  situación  hasta  el  día  del  turno,  donde  se  registra  como  ocupado. 
 El paciente puede liberar el turno hasta antes de conﬁrmar. 
 Deﬁnición de la 
 Agenda 
 Cada  profesional  debe  informar  duración  de  los  turnos,  los  días  de  la  semana  que  atenderá,  su 
 hora  de  inicio  y  ﬁn.  Esta  deﬁnición  de  disponibilidad  se  utilizará  para  generar  la  agenda  con  los 
 turnos  disponibles  del  mes  de  cada.  Este  proceso  se  debe  hacer  cada  mes  y  en  el  caso  de  que  el 
 profesional  no  puede  asistir  algún/os  días  al  consultorio,  los  turnos  afectados  quedarán  como 
 no disponibles. 
 Información sobre 
 los turnos 
 Es  necesario  mantener  información  de  la  evolución  de  estados  por  los  que  pasaron  los  turnos  a 
 lo largo del tiempo, para luego generar los informes correspondientes. 
 Tolerancia de 
 asistencia 
 Es  esencial  marcar  los  turnos  como  asistidos  o  no,  para  su  próximo  análisis  no  sólo  del 
 profesional,  sino  también  de  los  pacientes.  Para  ello,  se  considera  30  minutos  de  tolerancia,  si 
 no el turno se marca como no asistido. 
 Disposición de la 
 Agenda del 
 próximo mes 
 Las  agendas  con  turnos  del  mes  siguiente  al  actual  pueden  ya  estar  generadas  y  no  mostrados  a 
 los pacientes. 
 En  forma  programada,  la  tercera  semana  del  mes  se  habilita  para  los  pacientes  la  agenda  del 
 mes siguiente para que se puedan solicitar turnos. 
 Servicio que brinda 
 un profesional. 
 Un  profesional  puede  estar  asociado  a  un  único  servicio  en  forma  simultánea.  Si  desea  cambiar 
 el servicio que brinda, debe notiﬁcarlo para que se actualice le información en el sistema. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  6  de  17

## Página 7

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Casos de Uso 
 Nro  Nombre  Objetivo/Breve descripción  Actores 
 1  Registrar no asistencia 
 de turno. 
 Liberar un turno indicando que el paciente no 
 asistirá. 
 AP: Solicitante de Turno. 
 2  Solicitar turno.  Solicitar un turno para un profesional de un 
 servicio, eligiendo desde una agenda habilitada. 
 AP: Paciente. 
 AS: Servidor Correo. 
 3  Registrar aceptación 
 de solicitud de 
 ausencia de 
 profesional. 
 Registrar las fechas y/u horas en que el profesional 
 estará ausente y notiﬁcar a los pacientes a los 
 cuales afecte su turno en el caso que los turnos no 
 estuvieran disponibles. 
 AP: Encargado de personal. 
 AS: Servidor SMS. 
 AS: Servidor Correo. 
 4  Generar agenda de 
 profesional. 
 Generar la agenda de un profesional que delinea 
 los turnos en los que podrá atender pacientes en 
 un mes elegido, en función de la disponibilidad 
 deﬁnida en su deﬁnición de agenda. 
 AP: Encargado de personal. 
 5  Habilitar agenda de 
 profesionales. 
 Proceso programado para que la tercer semana del 
 mes se habilite la agenda de los profesionales para 
 el mes siguiente, habilitando a partir de ese 
 momento que los pacientes puedan solicitar 
 turnos. 
 N/A 
 6  Registrar un 
 profesional. 
 Registrar los datos de un profesional que 
 comenzará a atender en el consultorio. 
 AP: Encargado de personal. 
 7  Dar de baja un 
 profesional. 
 Eliminar un profesional que dejará de brindar su 
 servicio dentro del consultorio. 
 AP: Encargado de personal. 
 8  Modiﬁcar profesional.  Modiﬁcar los datos permitidos de un profesional.  AP: Encargado de personal. 
 9  Consultar profesional.  Visualizar los datos de uno o más profesionales 
 según criterios predeﬁnidos. 
 AP: Encargado de personal. 
 10  Solicitar conﬁrmación 
 de turnos. 
 Enviar a los pacientes un recordatorio y solicitar la 
 conﬁrmación de los turnos cuya fecha de turno 
 corresponde dentro de tres días desde la fecha 
 actual. 
 AS: Servidor de correo. 
 11  Conﬁrmar turno.  Registrar la conﬁrmación de asistencia a un turno.  AP: Paciente. 
 12  Veriﬁcar turnos 
 notiﬁcados. 
 Controlar los turnos ya notiﬁcados para los que no 
 se registró conﬁrmación o cancelación del turno 
 por parte del cliente. Este proceso actualiza el 
 estado del turno cuando llega su fecha y lo registra 
 como ocupado. 
 N/A 
 13  Registrar solicitud de 
 ausencia. 
 Registrar días y/u horas de ausencia informados 
 por un profesional. 
 AP: Profesional 
 14  Registrar asistencia de 
 paciente. 
 Registrar la asistencia de un paciente a un turno.  AP: Secretaria 
 AS: Lector QR 
 15  Validar asistencia de 
 paciente. 
 Diariamente veriﬁcar los turnos ocupados y 
 registrar la inasistencia de aquellos que se les ha 
 vencido el intervalo de tolerancia y los pacientes no 
 concurrieron. 
 N/A 
 16  Iniciar sesión  Iniciar una sesión en el sistema mediante una 
 cuenta con nombre de usuario y contraseña y 
 utilizando el recaptcha para validación de usuario 
 AP: Usuario. 
 AS:  reCaptcha Google. 
 AS: Autenticación Google 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  7  de  17

## Página 8

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Nro  Nombre  Objetivo/Breve descripción  Actores 
 humano. Otra alternativa para iniciar una sesión es 
 el uso de una cuenta de Google. 
 17  Cerrar sesión.  Cerrar la sesión actual del usuario en el sistema.  AP: Usuario. 
 18  Registrar servicio.  Registrar los datos de un servicio que se brindará 
 en el consultorio. 
 AP: Encargado de personal. 
 19  Eliminar servicio.  Dar de baja un servicio.  AP: Encargado de personal. 
 20  Consultar servicio.  Visualizar los datos registrados de un servicio.  AP: Encargado de personal. 
 21  Modiﬁcar servicio.  Modiﬁcar los datos permitidos de un servicio.  AP: Encargado de personal. 
 26  Generar informe de 
 turnos asistidos por 
 profesional. 
 Generar un informe con la cantidad de turnos 
 asistidos y no asistidos en un rango de días para un 
 profesional seleccionado. 
 AP: Encargado de personal. 
 27  Generar listado de 
 profesionales. 
 Generar un informe con todos los profesionales 
 registrados en el sistema con sus datos en el rango 
 temporal solicitado. 
 AP: Encargado de personal. 
 28  Generar estadística de 
 turnos por estado. 
 Generar un informe estadístico con el tiempo 
 promedio de los turnos en cada estado, ya sea para 
 todos los profesionales, para un servicio o un 
 profesional en el rango temporal solicitado. 
 AP: Encargado de personal. 
 29  Registrar motivo de 
 cancelación. 
 Registrar los datos correspondientes a un motivo 
 de cancelación de turno válido. 
 AP: Encargado de personal. 
 30  Eliminar motivo de 
 cancelación. 
 Dar de baja un motivo de cancelación.  AP: Encargado de personal. 
 31  Modiﬁcar motivo de 
 cancelación. 
 Actualizar los datos de un motivo de cancelación.  AP: Encargado de personal. 
 32  Consultar motivo de 
 cancelación. 
 Visualizar los datos registrados de un motivo de 
 cancelación. 
 AP: Encargado de personal. 
 33  Registrar turno para 
 paciente 
 Registrar la solicitud de turno de un paciente, 
 enviando mail de conﬁrmación del turno asignado. 
 AP: Encargado de Turnos. 
 AS: Servidor Correo. 
 34  Registrar la deﬁnición 
 de agenda de un 
 profesional 
 Crear la deﬁnición de agenda para un profesional, 
 registrando su disponibilidad de trabajo en 
 términos de días y rangos horarios de atención, 
 duración de cada turno e intervalos. 
 AP: Encargado de personal. 
 35  Modiﬁcar la deﬁnición 
 de agenda de un 
 profesional 
 Modiﬁcar  la  deﬁnición  de  agenda  para  un 
 profesional,  actualizando  los  días  y  rangos  horarios 
 de  atención,  duración  de  cada  turno  e  intervalos, 
 según se requiera. 
 AP: Encargado de personal. 
 36  Consultar la deﬁnición 
 de agenda de un 
 profesional 
 Consultar la deﬁnición de agenda de un 
 profesional, visualizando los días y rangos horarios 
 de atención, duración de cada turno e intervalos. 
 AP: Encargado de personal. 
 37  Eliminar la deﬁnición 
 de agenda para 
 profesional 
 Eliminar la deﬁnición de agenda de un profesional, 
 actualizando los días y rangos horarios de atención, 
 duración de cada turno e intervalos, siempre que 
 esta deﬁnición de agenda no se haya utilizado para 
 generar una agenda. 
 AP: Encargado de personal. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  8  de  17

## Página 9

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Requerimientos No Funcionales 
 Nro.  Nombre  Descripción  SPA  Justiﬁcación 
 1.  Tecnología web  Todo el producto se deberá 
 utilizar en un entorno web. 
 Si  El sistema deberá desarrollarse con un 
 lenguaje de programación compatible con 
 la tecnología web. 
 2.  Notiﬁcaciones 
 mediante correo 
 electrónico. 
 Se requiere notiﬁcar mediante el 
 envío de correos electrónicos a 
 pacientes y a profesionales 
 diferentes situaciones 
 relacionadas con los turnos. 
 Si  Se debe desarrollar un componente 
 encargado de comunicarse con el servidor 
 de correo y así enviar los correos 
 electrónicos a pacientes y/o profesionales. 
 3.  Notiﬁcación SMS  Al aceptar la ausencia de un 
 profesional, se debe notiﬁcar la 
 cancelación de un conjunto de 
 turnos, enviando mensajes de 
 texto a los pacientes afectados. 
 Si  Se debe desarrollar un componente que se 
 encargue de generar los mensajes de texto 
 y se comunique con el servidor de SMS 
 para enviarlos. 
 4.  Logo del 
 consultorio 
 Se deberá integrar en todas las 
 interfaces de usuario y formas de 
 salida del sistema el logo del 
 consultorio. 
 No  No afecta las decisiones signiﬁcativas para 
 el sistema ya que el lenguaje de 
 programación permite la publicación de 
 imágenes. 
 5.  Colores del 
 consultorio 
 El sistema deberá tener los 
 colores del consultorio: celeste 
 oscuro y gris claro. 
 No  No afecta las decisiones signiﬁcativas para 
 el sistema ya que se asume un lenguaje de 
 programación visual que soporte al menos 
 16 bits. 
 6.  Web-responsive  El sistema debe poder adaptarse 
 al tamaño y orientación del 
 cualquier dispositivo móvil. 
 SI  Se utilizará una tecnología para el 
 desarrollo de la interfaz gráﬁca que sea 
 web-responsive. 
 7.  reCAPTCHA para 
 inicio de sesión 
 Se deberá veriﬁcar que toda 
 persona que ingrese al sistema 
 sea un ser humano. 
 Si  Se deberá desarrollar un componente que 
 se comunique con la API expuesta de 
 Google correspondiente de reCAPTCHA 
 para que se realice la validación de usuario 
 humano/a. 
 8.  Seguridad de 
 usuarios 
 El sistema debe validar el ingreso 
 de usuarios mediante un usuario 
 y contraseña. 
 Si  Se deberá desarrollar un módulo para 
 autenticar el acceso de los usuarios a las 
 distintas funcionalidades del sistema, y 
 controlar permisos y gestionar sesiones. 
 9.  OAuth con Google  Se permite como método 
 alternativo de logueo la 
 utilización de una cuenta de 
 Google, evitando la generación de 
 un usuario y contraseña. 
 Si  Se deberá integrar la librería necesaria de 
 OAuth 2.0 de Google para poder 
 comunicarse con la API expuesta que 
 tendrá Google en su servidor. 
 10.  Certiﬁcado SSL  Se deberá activar el protocolo 
 HTTPS al instalar el certiﬁcado SSL 
 en el servidor web del sistema. 
 Si  Se deberá proveer conexión segura al 
 realizar la instalación en el servidor web 
 que protegerá la comunicación. 
 Es un archivo que se debe disponibilizar en 
 el servidor web para permitir la 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  9  de  17

## Página 10

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Nro.  Nombre  Descripción  SPA  Justiﬁcación 
 comunicación segura, con protocolo 
 HTTPS. 
 11.  Lector QR  Para agilizar el registro de 
 asistencia de los pacientes, la 
 secretaria puede escanear un 
 código QR con un lector que 
 permita registrar la asistencia de 
 un turno. 
 No  El sistema debe permitir la lectura del 
 código QR, lo cual únicamente implica 
 soportar el protocolo correspondiente, 
 que es accesible de forma pública por lo 
 que no impacta en decisiones respecto a 
 la estructura del software. 
 12.  Disponibilidad de 
 servicios de 
 atención de 
 pacientes, 
 pacientes y 
 profesionales 
 Para asegurar alta disponibilidad 
 de los servicios relacionados con 
 atención de pacientes, 
 información de pacientes y 
 profesionales, se espejarán las 
 bases de datos en la nube. 
 Si  Se requiere que el software contemple los 
 aspectos de seguridad lógica necesarios 
 para que el despliegue espejado de los 
 servicios relacionados con pacientes, su 
 atención y profesionales se realice en la 
 nube. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  10  de  17

## Página 11

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Solución Propuesta 
 Descomposición del dominio del problema 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  11  de  17

## Página 12

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 Vista Arquitectónica de la funcionalidad 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  12  de  17

## Página 13

Proyecto Práctico de Aplicación 
 Consultorio de Salud Mental 
 Diseño arquitectónico con Microservicios 
 CU  Justiﬁcación 
 6. Registrar 
 profesional 
 7. Dar de baja 
 profesional 
 8. Modiﬁcar 
 profesional 
 9. Consultar 
 profesional 
 Son casos de uso que describen entidades con ABMC representativos, determinando los 
 lineamientos para la interfaz e interacción de usuario respecto a la deﬁnición de ubicación de 
 botones, validaciones de los datos que deberá ingresar, entre otros. Determina decisiones para 
 el acceso a la base de datos para la consulta, modiﬁcación y baja de datos, como también 
 algoritmos de programación simples para lograr manejar la lógica de dichas funcionalidades y la 
 correcta sanitización de los datos que se registran. 
 Cumple con los  RNF 1 Tecnología Web y RNF 6 Web responsive  ya que se deberá utilizar un 
 lenguaje de programación web y establecer la estructura del software acorde. 
 Y cubre el  RNF 12 Despliegue espejado de bases de  datos en la nube  ya que se debe resolver la 
 comunicación con el servidor que se va a desplegar en la nube. 
 4. Generar 
 Agenda de 
 profesional 
 Modela una transacción representativa con objetivo de deﬁnir la lógica compleja de la 
 generación de una agenda y sus turnos. Se implementan algoritmos complejos de 
 programación, aplicación de rollbacks y logs de transacciones. 
 2. Solicitar turno  Modela una transacción web representativa, ya que determina la manera en que se deﬁne la 
 interfaz e interacción con el usuario principalmente por la muestra de la agenda en formato 
 calendario, ﬁltros y grilla de los turnos. Se deﬁne el acceso atómico a la base de datos para su 
 registración, deﬁnición de rollbacks y registro de un log transaccional. 
 Cumple con los  RNF 1 Tecnología web  ya que se deberá  utilizar un lenguaje de programación 
 web,  RNF 6 Web responsive  ,  RNF 2 Notiﬁcaciones mediante  correo  electrónico  para resolver el 
 envío de mails con la información del turno y  RNF  10 Certiﬁcado SSL  para levantar la plataforma 
 web. 
 16. Iniciar sesión  Da lugar a establecer las decisiones respecto a la autenticación y autorización de los usuarios 
 dentro del sistema, como deﬁnición de perﬁles y visualización de la información dependiendo 
 de sus permisos. 
 Cumple con los  RNF 7 reCAPTCHA para inicio de sesión  al deber resolver la manera de 
 desarrolla la interfaz para poder comunicarse con la API expuesta,  RNF 8 Seguridad de usuarios 
 y  RNF 9 OAuth con Google  determinando la manera de  integrar la librería necesaria para 
 intercambiar requests con la provista por Google. 
 3. Registrar 
 aceptación de 
 solicitud de 
 ausencia de 
 profesional 
 Actualiza los turnos en función de la aceptación de una inasistencia de un profesional 
 Da soporte al  RNF 3 Notiﬁcación SMS  ya que se debe  desarrollar el componente que hace 
 posible el envío de mensajes de texto y al  RNF 2 Notiﬁcaciones  mediante correo electrónico. 
 26. Generar 
 informe de turnos 
 asistidos por 
 profesional 
 Es un informe representativo que permite deﬁnir para la lógica de reportes y estadísticas la 
 interfaz de usuario, predisposición de los datos en términos de grillas, el acceso y 
 procesamiento de una gran cantidad de datos en base a los ﬁltros determinados por el usuario. 
 28. Generar 
 estadística de 
 turnos por estado 
 Es una estadística representativa que deﬁne para la lógica de reportes y estadísticas, la 
 visualización de los datos en formato de tabla, la generación de gráﬁcas y el cálculo de métricas 
 de una gran cantidad de datos en base a los parámetros indicados por el usuario. 
 15. Validar 
 asistencia de 
 pacientes 
 Caso de uso elegido por ser el que se instancia con el tiempo como disparador y desde el punto 
 de vista arquitectónico es necesario deﬁnir cómo se controlará el tiempo, para iniciar el proceso 
 que veriﬁcará los turnos ocupados y registrar la inasistencia de aquellos que se les ha vencido el 
 intervalo de tolerancia. 
 PPA Consultorio de Salud Mental - Microservicios.docx– V 1.8 
 Autor:  María Sánchez Cassia  Página  13  de  17

## Página 14

Ejercicio práctico tipo parcial 2 
 Consultorio de Salud Mental 
 Vista Arquitectónica de diseño - Diseño Global 
 Ciclo lectivo 2026 – V 1.8  Página  14  de  17

## Página 15

Ejercicio práctico tipo parcial 2 
 Consultorio de Salud Mental 
 Vista Arquitectónica de diseño 
 Ciclo lectivo 2026 – V 1.8  Página  15  de  17

## Página 16

Ejercicio práctico tipo parcial 2 
 Consultorio de Salud Mental 
 Vista Arquitectónica del despliegue 
 Ciclo lectivo 2026 – V 1.8  Página  16  de  17
