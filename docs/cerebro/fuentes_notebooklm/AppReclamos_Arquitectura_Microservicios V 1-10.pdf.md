# AppReclamos_Arquitectura_Microservicios V 1-10.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3w4v-jeRphgJkYcvQlxYj0FTsyL7aVfJzrkMxrdtjspg7lq0-7pdLquKjbz6M-xlpBKMG3czhs1AfouJcNWBrOulHrVxUyKKA6Dz7yPwFVTBZgsiOK2imIqZO9IBj_MVTrz14t=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 1 de 17
Consigna de trabajo:
1. Identificar los subdominios en los que se descompone el dominio del problema 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. b. De Diseño utilizando un estilo arquitectónico de microservicios. c. De Despliegue: Distribución de software en hardware (Nodos y Componentes).
3. Mencionar los patrones arquitectónicos para microservicios aplicados.
App Mobile para Reclamos Glosario:
SaaS (Software como un Servicio): es un modelo de distribución de software donde el soporte lógico y los datos que maneja se alojan en servidores de una compañía de tecnologías de información y comunicación (TIC), a los que se accede vía Internet desde un cliente. La empresa proveedora TIC se ocupa del servicio de mantenimiento, de la operación diaria y del soporte del software usado por el cliente. Regularmente el software puede ser consultado en cualquier computadora, se encuentre presente en la empresa o no. Se deduce que la información, el procesamiento, los insumos, y los resultados de la lógica de negocio del software, están alojados en la compañía de TIC.
Tecnología Cloud: es tipo de implementación donde se ofrece servicio de procesamiento y almacenamiento, en servidores alojados en forma remota, a los que se accede través de una red, que usualmente es Internet.
Notificaciones push: La tecnología push es una forma de comunicación en la que una aplicación servidora envía un mensaje a un cliente-consumidor. Es decir, es un mensaje que un servidor envía a una persona alertándolo de que tiene una información nueva. Lo que caracteriza esta tecnología es que es siempre el servidor el que inicia esta comunicación, aunque el cliente no tenga interés en saber si hay algo nuevo. Lo comunica siempre. Lo que más destaca de las notificaciones push es su inmediatez, ya que no hace falta estar ejecutando la aplicación para que nos llegue. Aunque la tengamos apagada o en segundo plano, cada vez que el servidor reciba una información nueva nos avisará de su
existencia, es decir, las notificaciones push despiertan al móvil esté o no ejecutando la aplicación.
Descripción del Domino
Una empresa dedicada al desarrollo de software quiere construir un producto destinado a Municipios y Empresas de Servicios Públicos que les permita recibir información organizada y en tiempo real de eventos reportados por sus clientes (reclamos, trámites, quejas, denuncias y/o consultas, comunicaciones), gestionarlos y comunicar su resolución. De cara al cliente brinda la posibilidad de generar eventos a todas las entidades adheridas y conocer en línea el estado de estos, a través de una única aplicación, disponible en dispositivos móviles y a través de su versión web. A partir de la carga del evento la organización a la que va dirigido lo gestiona y, una vez resuelto, el aplicativo comunica la solución y finalización al cliente, quien también puede monitorear desde la aplicación el estado de sus eventos cargados.
La aplicación permitirá al cliente interactuar con las organizaciones adheridas enviando avisos de una manera muy simple: Una vez descargada la aplicación, frente a un evento, el cliente podrá tomar una fotografía con su celular, geo-referenciar 1el mismo, seleccionar el tipo de evento y describir el motivo de su reporte. Para aquellos que no posean un Smartphone, se puede ingresar desde la PC a la versión web.
La solución se ofrecerá como servicio “SaaS” (Software as a Service) y Tecnología Cloud (la nube). La empresa u organismo público que contrata el producto recibirá información organizada y en tiempo real de los eventos que desea
1 La georreferenciación es la técnica de posicionamiento espacial de una entidad en una localización geográfica única y bien definida en un sistema de coordenadas y datum específicos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZrnG8AoO9xG3_erxRHxV1sKw_8AZaqvv6hv11Omo_jIiL-1RxgGU6MPSX1GzlCnnFASndc39K0xuVw-gMb-LPo6LwhyPItVNF1OPQ7YhI-uQC62hMyD2RiHwn09axELTsnJl5fw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Xi2y4Muk1f1kMx3oSLMqlMpDIyQVb_mcNOpNzTGuB_xwM9zZrdCnm81gJGNLYhCHJTUkdPtJ1O-wZ3BZd_QJiRcHXody99O5YzM3P9LRB1u5GX2CRhSpQ9ISr-z5QAIspPlOPYA=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 2 de 17
gestionar, pudiendo configurar cuáles son los tipos de eventos que gestiona y que datos solicitarle al cliente para cada uno de ellos. A su vez el sistema le permite configurar de manera simple y rápida el proceso interno de resolución por cada tipo de evento y una vez resuelto, la aplicación se encargará de informar la resolución al cliente.
Cualquier organización pública o privada podrá acceder ya que no requiere inversión previa. Gracias a la tecnología Cloud (la nube) tampoco demanda equipos especiales para su funcionamiento.
El aplicativo se integrará con las redes sociales Instagram y Facebook y contará con un módulo de notificaciones push a través del cual es posible enviar mensajes masivos a la comunidad de usuarios o delimitados por zona según el objetivo de la comunicación, informando la resolución de eventos o cualquier otro mensaje que se considere relevante para el público seleccionado.
El sistema deberá ser compatible con plataforma web HTML 5 y sistemas IOS, Android, últimas versiones liberadas al mercado. El despliegue será en la nube, la empresa que desarrolla el producto de software desplegará en un host todos los servicios.
Luego de que uno de los socios de la consultora (que es quién tiene la idea de negocio) bajó estos lineamientos, al equipo de trabajo le surgieron las siguientes preguntas:
¿Cómo carga un evento un cliente o usuario?
Para comenzar a utilizarlo sólo es necesario descargar la aplicación y registrarse como usuario, con una dirección de e-mail y una contraseña de al menos 6 caracteres. Para aquellos usuarios que no posean Smartphone, existe la posibilidad de poder registrar los eventos ingresando al sitio web de la aplicación mediante una PC, también a través de un usuario registrado. Si el cliente ya se registró como usuario y olvidó su contraseña, el sistema debe permitirle recuperarla.
Al instalar la aplicación, el usuario debe aceptar el acuerdo de usuario que define las condiciones del servicio y política de privacidad, permitiendo al sistema acceder a su ubicación por medio del GPS, conocer su IP, gestionar el uso de WIFI e intercambio de archivos (recibir y enviar datos). Un usuario puede darse de baja en cualquier momento que lo desee.
Frente a un evento, puede tomar una fotografía con su celular (opcional y no mayor a 3 Gb), georreferenciarla2, seleccionar un tipo de evento y describir el motivo del reporte, como se muestra a continuación:
Al momento de la carga de datos, el sistema solicitará ingresar primero la organización o entidad a la que se le desea enviar el evento y a partir de allí se mostrará la pantalla de carga, en donde el Tipo de Evento será definido por cada organización, pudiendo agregarse nuevos Tipos de eventos una vez que el aplicativo ya se encuentra en uso.
Log in y carga de datos
Captura de imagen con una foto
Georreferenciación Reporte del Evento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TsJPy1u5APK2_cLO3_4Npqc_T_jzF4OlCO05wH0nV_qNEX-xN-T3B8rUwg-i0bAN-XMHnxAJOFnNpZ0Zesx40AzF1-Y3DSWgpjGoERgAQb_FiqQA7RuGoD9dfJbYoiYAuipyQXA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RjlTwG0z7FqHOKiYbNL-0ukEFPlfKkjIzfTr6nFXrMnjmwLW-KFc7lMIdWQQ18XjP0MMZ6EufzX4rLr2M9xr04fxukpW06WXJbr3Ig_Jp5wwo89Y-f8_LNVo83Z0QcLn_1H6xHQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IV3cM6TqIRl4dF48Bp9eo_XX_qIpgkU9UvmE_BaAs3N6TJ2zS06i-GycFNaGfNIrelKKq274jI4P1TRgrUy-MkC_nT1c2U06ZsLuGiTvTBBdEJLXke7Il423ob6Psx0tFIBRRiw=w196-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Rzrd-iYeLM4COA3OzaqTWDpcojOQP11FBB9hg-EhKcCtYhCJQqlHtx-Y81w2LNOreKpXaLL8k2rlgajroHIDpf3tuWj8l57Zg6bAyTqFxaJSomzAy4th19Li6jK5-XpNoGRvnhQ=w341-h540-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BncHr2rKUZ-IaBKF3PrprtwjZ0tzVOubo2wCw0BC_zxlsQiqfUsOIPU2qS-GwvbiBOjtSmA8VE9neghIvVt8u2AV3QR60h12vUaBWLbP0M45qZX_u7U0D3EeM8RRsZu1yIfAU=w231-h237-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Vy7A8TkFnhpO_3MqZ0Ka1pbezUbYoFZYrTq2sz1_b3V21JB4P6c5zIR6fRlb7sMmz8TOCCuRE-F1gqs8PhJBs34NR9BCRg7vOVwDrpdD3-yt1Bj4ipyGNWns9nUe2QfPN7asnkw=w178-h237-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0t66kCAiBDE527rXTeUXCDOj0lb8cZcIyY88h56EnduukSZsucFtQaJQSKcu6aZoUDtq8cy-YRSlhTkP87z2UBFOMJtEDarM4AOrzrhGKTWmWfM6bP5UM2pXaxCLzBWr9LXpoDMQ=w180-h226-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36ikExbv38EyO3PLi0Ehj0XpuY5Xwpff8EfUvSbD8yHXOPtm8e7Z8D5OOfG0p9SUuGpaMTowr1JxdxX7YhUKC3lCRKBDj_Jk3qmLOtdQDzypOWGexJ17uisARTQLuNPxlWMmTSfA=w510-h105-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 3 de 17
¿Cómo se entera la organización a la que va destinado el evento?
Las organizaciones adheridas a esta comunidad accederán a la aplicación en la nube, a través de un portal web que deberá funcionar en los navegadores web Microsoft Edge y Google Chrome últimas versiones liberadas al mercado.
Los colaboradores del área de Atención de Incidencias de la organización a la que está destinado el evento recibirán una notificación (por mail y un alerta visual y sonoro si están logueados en la aplicación) indicando que se ha generado un nuevo evento. Desde el área de Atención de incidencias se revisa el evento, determina si corresponde una acción y si este es el caso se asigna a un Resolutor; caso contrario se desestima indicando el motivo.
¿Cómo se gestiona la resolución del evento?
Los Resolutores que se encuentren en la vía pública contarán con un Smartphone en el cual instalarán una aplicación (distinta a la de los clientes) a través de la cual podrán recibir los eventos que les son asignados. El Resolutor recibirá una notificación sonora y podrá visualizar el evento en la pantalla, con información detallada para acudir a la dirección desde donde se reporta el mismo. Es importante destacar que los eventos estarán geo-referenciados, por lo cual el Resolutor tendrá la ubicación precisa del reclamo. Una vez en el lugar registrará el trabajo realizado mediante evidencias digitales como fotos y videos, que servirán para respaldar la resolución del evento. Finalizada la tarea del resolutor, la aplicación notificará al área de Atención de Incidencias, para que el personal valide los trabajos cargados y proceda registrar el cierre del evento. Al cerrar el evento, el sistema enviará automáticamente un e-mail informando la resolución al cliente que generó el evento y enviará una notificación a su Smartphone.
Esquema simplificado de la gestión del evento
Los colaboradores del Área de Atención de Incidencias podrán visualizar los eventos a través del mapa de reclamos. Allí podrán visualizarse todos los eventos georreferenciados, los cuales pueden filtrarse por diferentes criterios como: fecha, estado, tipo de evento, área geográfica específica. La ubicación del evento se visualizará a través de Google Maps, tal como se muestra a continuación:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09ZN4RD3V2-28r9M9TgjnsVss5Ue18p5hm-j7dwdAWnnvgJXcEWUfcrGOcWHUT1jO-f7EZ1T-c4H4KrHML0dsOrSH8k5HzEi6OTI5VAbWMkWRxd8AcFExmvw1fAMDI6KXy7wGNHg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yIOHGTXgsud2gaBHklIXZqgAD-dxKUJzFuR6bLP3ZERj_eVX8Bm33XGpuspHnUK5VH0K6UPRmENCMhJ0sbV3fgAYkVjVWM_3ypwjm8yx-F1Ri9vIGcu5zH4ESXxZLC1eMaZpQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Dtyqt-8Is39vCfBOlyOlM9J1LUFKRsIr8Qss9d6ZXUU3BkW4eztvuKWyd6o64CWg5DuZaL5EywieG8lCSVqMbxpPJ-dnEWXbu4t_ofQlsVGgToSJXbyrRk6XHgpWRUrEIoQr-Zg=w474-h308-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gcK_8zV7c3H1Glwj_JnfJ5EzGSIliPpkhjzYGy7-RRMetdig_HHUy6aCIzisf8W2YsTrHYMOJgGOpJot3Wpkp4zrgg3Y-zWnOzmfEkWNmttFCRu9nIbqYYS6BQDr0Pl0jR7raPw=w643-h424-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 4 de 17
¿La organización puede emitir notificaciones acerca de un evento de manera “proactiva”?
El aplicativo permitirá comunicar a grupos de clientes sobre el estado o resolución de un evento generado desde la organización, como se muestra a continuación:
El sistema permitirá dibujar zonas dentro del mapa, agrupando reclamos a partir de una lógica determinada y enviar notificaciones push a los dispositivos móviles de los clientes. También existirá la posibilidad de publicar información sobre los eventos gestionados en las redes sociales (Instagram y Facebook). Otra de las alternativas es que el mismo cliente realice el seguimiento de los eventos reportados, pudiendo realizar filtros por organización a la que van dirigidos, por número de evento o por estado. El aplicativo podrá adaptarse a la imagen corporativa de cada organización (logo y colores).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mQH-YAoXSPh0Px5OBPJHsT5AXUpkBssBondkmShavVsRiEvk6-6TsaFv6X0IbdHWQJ0Dd0iiByKgGAWPbkY5Ne3tl7CwbRtYN3QlTznja6OQTIK6ypJEYYLGbJwv1YSt5cQe7oA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Y5Lrm7TzwutEyTu0eAHKkdht3W98oTJtsfSC_k8Qy1Fiyqw3CeTiSVB23SQFIrvtaLuHVUDyL4nA0J74_jUOZJHyQ76LBa8zCRe3MZsIgirmLBOSdiSRmF9HfjHfiHR4SuD32Wg=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 5 de 17
Identificación de Casos de Uso:
Nota: El listado de casos de uso no es exhaustivo, se incluye a los fines de una mejor comprensión de la funcionalidad del producto.
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
1 Seguimiento Móvil de Eventos
Registrar evento Registrar los datos de un evento, detectado por un cliente de una organización adherida al servicio, georreferenciándolo.
AP: Cliente AS: GPS
2 Seguimiento Móvil de Eventos
Modificar evento Modificar los datos permitidos de un evento por parte de un cliente de una organización adherida al servicio.
AP: Cliente AS: GPS
3 Seguimiento Móvil de Eventos
Consultar evento Consultar los datos de un evento por parte de un cliente de una organización adherida al servicio.
AP: Cliente AS: GPS
4 Seguimiento Móvil de Eventos
Eliminar evento Eliminar un evento por parte del cliente que lo solicitó siempre que aún no haya sido asignado para su resolución.
AP: Cliente
5 Administración de usuarios móviles
Registrar usuario móvil
Registrar un usuario del sistema para hacer uso del aplicativo móvil
AP: Usuario
6 Administración de usuarios móviles
Modificar usuario móvil
Modificar los datos permitidos de un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
7 Administración de usuarios móviles
Consultar usuario móvil
Consultar los datos de un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
8 Administración de usuarios móviles
Eliminar usuario móvil
Dar de baja un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
9 Administración de usuarios móviles
Asignar perfil usuario móvil
Asignar datos del perfil al usuario móvil AP: Administrador de App Reclamos
10 Administración de usuarios móviles
Recuperar contraseña
Informar a un usuario móvil su contraseña. AP: Usuario
11 Gestión de organizaciones adheridas
Registrar organización
Registrar los datos de una organización adherida al servicio.
AP: Responsable de Organizaciones
12 Gestión de organizaciones adheridas
Modificar organización
Modificar los datos permitidos de una organización adherida al servicio.
AP: Responsable de Organizaciones
13 Gestión de organizaciones adheridas
Consultar organización
Consultar los datos de una organización adherida al servicio.
AP: Responsable de Organizaciones
14 Gestión de organizaciones adheridas
Eliminar organización
Dar de baja una organización que no desea estar más adherida al servicio.
AP: Responsable de Organizaciones
15 Gestión de organizaciones adheridas
Registrar tipo de evento
Registrar un tipo de evento para una determinada organización, indicando los datos que se solicitarán al cliente.
AP: Administrador de App Reclamos
16 Gestión de organizaciones adheridas
Consultar tipo de evento
Consultar los datos de un tipo de evento para una determinada organización.
AP: Administrador de App Reclamos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DSwY-hx3bWt896soSgiOLwDCdviE51UPURlip-kuZq2Bv14pPfGifd_1ZYFJpNB2QTi-7iZKA_gSuN1f3lrpPCVAt5_2gqVd7X4ODGsjmL8bkE773UNf1-K-65FREuiFG4pJu4w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv003n-wH-xGtg8Q2eCsKAgKfWiQakKpoCH2A24s14q_qK2EiA37o3oQWBPl4wYI-y5SUdY-oKGKRpqpeMUKehV09owPzaKTnFwLVvSZijBNa4nx-S-JhWZQ4fMletm8T0S24fRVsA=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 6 de 17
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
17 Gestión de organizaciones adheridas
Eliminar tipo de evento
Dar de baja un tipo de evento para una organización.
AP: Administrador de App Reclamos
18 Gestión de organizaciones adheridas
Modificar tipo de evento
Modificar los datos permitidos de un tipo de evento para una organización
AP: Administrador de App Reclamos
19 Gestión de usuarios de la organización
Registrar usuario web
Registrar un usuario web para un colaborador de la organización.
AP: Responsable de Organizaciones
20 Gestión de usuarios de la organización
Modificar usuario web
Modificar los datos permitidos de un usuario web.
AP: Responsable de Organizaciones
21 Gestión de usuarios de la organización
Consultar usuario web
Visualizar los datos de un usuario web. AP: Responsable de Organizaciones
22 Gestión de usuarios de la organización
Eliminar usuario web
Dar de baja un usuario web AP: Responsable de Organizaciones
23 Gestión de usuarios de la organización
Registrar perfil Registrar un perfil de usuario organizacional. AP: Administrador de App Reclamos
24 Gestión de usuarios de la organización
Modificar perfil Modificar los datos permitidos de un perfil de usuario organizacional.
AP: Administrador de App Reclamos
25 Gestión de usuarios de la organización
Consultar perfil Visualizar los datos de un perfil de usuario organizacional.
AP: Administrador de App Reclamos
26 Gestión de usuarios de la organización
Eliminar perfil Dar de baja un perfil de usuario organizacional.
AP: Administrador de App Reclamos
27 Gestión de usuarios de la organización
Asignar perfiles a usuario organizacional
Registrar la asignación de uno o más perfiles a un usuario de la organización.
AP: Administrador de App Reclamos
28 Gestión de usuarios de la organización
Iniciar sesión Iniciar una sesión de trabajo en el sistema ingresando un nombre de usuario y una contraseña y validando los permisos para ese usuario.
AP: Usuario
29 Gestión de usuario de la organización
Cerrar sesión Cerrar una sesión de trabajo en el sistema cuando el usuario así lo requiera
AP: Usuario
30 Gestión de usuario de la organización
Caducar sesión Cerrar una sesión de trabajo porque ha transcurrido el tiempo definido de inactividad.
N/A
31 Gestión de eventos
Visualizar mapa de eventos
Visualizar en el mapa eventos generados para la organización, aplicando filtros de estado, fechas, tipos de eventos y ubicación.
AP: Colaborador AS: Google Maps
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NhjU5k-gTii6mShYQwJZR1YZAGaTnWoIBcE6EDq40yhX5hTsteG2D6efJDw8Yq4oSkePBK0Y8v9Qw9nMBVPK17c0O5XH8ylyIYa41wePlSvRTLD9AN7zTfI4R5gxH8oAxTBMmqg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lERjSgEqoAx21OSwK3oX5ock7tGQjQSVWumN8licXSKupsvxfoKZfCvZ-pSFX8HptUADdI-t7_9HvuVIFvgMN8BKqOdsq-GxVW27QkX1JsOOwlX6q2xbZSewtMetyE0k4L5kmMg=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 7 de 17
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
32 Gestión de eventos
Asignar resolutor a evento
Asignar un evento en estado Pendiente de Asignación a un Resolutor de la organización.
AP: Colaborador AAI
33 Gestión de eventos
Desestimar evento
Desestimar un evento al que no le corresponden acciones para su resolución, informando el motivo.
AP: Colaborador AAI
34 Gestión de eventos
Registrar trabajo realizado
Registrar el trabajo realizado para resolver un evento por parte del Resolutor, adjuntando fotos y/o videos si así se requiere. Utiliza el servicio de GPS para geolocalizar el evento y poder registrar el trabajo realizado.
AP: Resolutor AS: GPS
35 Gestión de eventos
Registrar cierre de evento
Registrar el cierre de un evento resuelto, con la opción de publicarlo en redes sociales y notificando por mail.
AP: Colaborador AAI AS: Facebook AS: Instagram
AS: Servidor de Correo
36 Seguimiento móvil de eventos
Realizar seguimiento de evento
Consultar los datos de un evento, los trabajos realizados y la fecha y hora de cada acción.
AP: Colaborador AAI
38 Gestión de eventos
Enviar notificaciones a clientes en forma masiva
Enviar notificaciones a los dispositivos móviles de grupos de clientes y notificaciones por mail, sobre un evento generado desde la organización.
AP: Colaborador AAI AS: Servidor de
Correo
39 Gestión de eventos
Enviar notificación a cliente acerca de la resolución de un evento
Enviar notificación al dispositivo móvil de un cliente sobre el estado o resolución de un evento.
N/A
40 Gestión de eventos
Enviar notificación a colaborador ante evento nuevo
Enviar notificación a los colaboradores de la organización ante un evento nuevo generado por el cliente.
N/A
41 Gestión de eventos
Enviar notificación a resolutor
Enviar notificación al dispositivo móvil de un cliente sobre el estado o resolución de un evento.
N/A
42 Gestión de organizaciones adheridas
Configurar imagen de aplicativo para organización
Configurar logo y colores del aplicativo para la organización.
N/A
43 Gestión de eventos
Generar Evento Masivo
Generar un evento que afectará a una cantidad de personas en una zona determinada de la ciudad. Se puede extender con otro caso de uso que enviará notificaciones masivas utilizando correo electrónico y enviará notificaciones push a los dispositivos móviles de los clientes.
AP: Colaborador AAI
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0T0K9UCFe9OGlIKNVUfBUpu9emo-ER4nMi7z1-P2ZrILebUYaDDvYnVivIB-uJ5j9lYV_Nf32Vqcr1L1SVmEYkEi6KK_ph6ops-x6JENAVXalMtbqbOb3k5WQDV3FWY8eciq4l-g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fkM9FEchoDBWSSq2fpNkwS0VW4xvJvFRc_eA8u011M75mqC_mK3XnQ6Cn-6fJrx-aXadJVpsKKrz7hv2bMFmhr6a3B9snKtgXG8EFJNw85-yVwAjBpKIeQpWNbrlAIQlSQeAEuQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jeDJnQ4vOUIZzw_-ukiRpS9lOI9d4kDCvwXCzByLyr-rGVTzeIcHqJ_V4GncGL7zKSpp_0RxhoScHTogxHxYRZ2KZAgml8cXCNF42Dq-FmnPr2qH4cLN7lAuDVaguVA2wB_NxWA=w244-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FbKjD8vmti79ZSdOE29tgVQXuzCDIgRFGyhh65xONk6OMOm5kr33smBjBGxdSlysYAAwoAXt2KfcBeQ1yyFy4vHUpbH5g8v7Rf8sLsKLud-wq2aKXuecgZkId8r-xfsX98zLJrQ=w256-h256-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UFRttoMS982HqMIczc9NE0PT9OKeSeUVM069TDc5gWvoNNXgeIyh0PKSJ5hObrU3IfMuMLx7my_jlI6tijAZdMEneksHAFc0qggL9tP3KqHB2V2JICk53ajt7Mp2e-uppQqwz5w=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13fxrFGqOT1B3ZL6Dne515JYhg6tVbHmkHnEcHcyoFZJhaNVkjNPWvugIFq-AUifw4eQeId-s9o-rqHXvZ8ayzudluSkA8mJJ66KqFB8bHUhvJ9fqj2NbgsLRZvwda8JKV0mn6NA=w264-h241-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 8 de 17
Roles de usuario principales
A continuación se describen en términos generales las responsabilidades de los roles de usuario que se vincularán con el software:
Cliente
Persona que va a utilizar la aplicación para registrar un evento.
Está familiarizado con el uso de Smartphone y puede instalar la aplicación.
Su expectativa es que la organización responsable resuelva el evento lo antes posible y lo mantenga informado.
Administrador de
Aplicación Reclamos Persona de la consultora que va a configurar y personalizar el aplicativo para cada una de las organizaciones adheridas.
Debe estar familiarizado con el uso de aplicaciones WEB.
Colaborador de Área de Atención de Incidentes
Colaborador de la organización que va a gestionar los eventos reportados por los clientes, utilizando la versión web de la aplicación.
Debe interactuar con el sistema para asignar los eventos a los resolutores y validar los trabajos realizados para dar cierre al evento.
Debe estar familiarizado con el uso de aplicaciones WEB.
Resolutor
Está familiarizado con el uso de Smartphone.
Debe utilizar la aplicación (distinta de la del cliente) mientras está trabajando en la vía pública, por eso necesita recibir los eventos que se le asignan con notificaciones sonoras.
Necesita visualizar la geoposición del evento para poder localizarlo y necesita minimizar la cantidad de interacciones con el celular al momento de registrar los trabajos realizados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OhhDVlM4b2jDg8RwfRAfwp466bzbJwv1528HnS1Z0ZdZ8UPQgRKCLZ9tDMDah-EO4-Tn7UuBsd2vV3V9rd9_hoN0ufgM8YE2WdQD9V5mo6fcJZRlYpNjzaB5nY0oHZ097RrNnBA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BKg3sPZ550BUgYIgdEaNXa_2ByO2JF5DkAzxYw6qye2CB7XlkSuMkZ3y5wbd8MDT0dHbHnCnPa3tY9pmntjpGwJra-4qDPBjcWyiX67bFAhyLlZ4msl5GqS4Xe4TpXeKmGwjwBg=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 9 de 17
Requerimientos No Funcionales
Nº Nombre Descripción SPA Priori dad
Justificación
1 Aplicación Mobile
Los módulos para el cliente y el Resolutor deben poder ejecutarse en Smartphone con acceso a internet y al sistema de geoposicionamiento.
Si Alta La aplicación está pensada para ser ejecutada en dispositivos móviles compatibles con el uso de GPS.
2 Sistemas operativos móviles
La aplicación debe ser compatible con los sistemas operativos móviles IOS 17.3.1 y Android 14.
Si Alta El lenguaje de desarrollo de los módulos Mobile debe ser compatible con los sistemas operativos móviles solicitados. Los componentes de código serán los mismos que se especializarán al SO en el momento del despliegue.
3 Sistema Web La aplicación debe ser programada con tecnología Web y compatible con HTML 5
SI Alta El Lenguaje de Programación a utilizar deberá soportar desarrollo web y ser compatible con plataforma HTML 5.
4 Navegador Web El producto funcionará en los Navegadores WEB Microsoft Edge 120.0.2210.167 y Google Chrome 121.0.6167.139.
SI Alta Se considera significativo porque el uso del lenguaje de programación web puede tener variantes para distintos navegadores o distintas versiones del mismo navegador.
5 Servicio en la nube
La solución se ofrecerá como servicio SaaS y Tecnología Cloud
SI Alta Se requiere que el sistema se realice en un lenguaje web y distribuido para ser ejecutado en la nube y accedido desde cualquier ubicación con conexión a Internet.
El despliegue será en un único servidor.
6 Redes sociales Integración con las redes sociales Instagram y Facebook
SI Media Se debe desarrollar web-services que permitan publicar contenidos en las redes sociales Instagram y Facebook.
7 Ubicación del evento
La ubicación de un evento debe poder visualizarse a través de Google maps.
SI Alta Se resuelve insertando una librería provista por Google Maps que se comunica con la API de Google Map que brinda el servicio.
Los aspectos arquitectónicos están cubiertos por el RNF 16.
8 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos vinculados a las acciones que pueden realizar los clientes y colaboradores de cada organización adherida así como
Si Media Se debe desarrollar un módulo que permita autenticar usuarios y sus permisos, tanto de los usuarios de la organización como de los usuarios móviles asociados a clientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cgOLk8UCw5tOwhTRUQFg6xPdvBK0y_TrbsOUn7KHGS6gwy7OhxuPB7l_6EIT4tfhJ81HExiKownqB4Oi1nAHg11cqtiim6mp5_G_Kmmump0YJ3by2p_Ma30HeK1OX766WxTgn9Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ebOFI8F6vY1sKExVwzYWIxIevJslFn2GJsKPPG3OhOP8yQ6552NJ4qWBQFeynW2Z_3zu9eGEIuSBMcnNPN6FgVkPYVwiMUY_FbrTuyBnOqfAEZHxD8CwdrHVrZlqAgJuv5ASZ=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 10 de 17
Nº Nombre Descripción SPA Priori dad
Justificación
también gestionar la seguridad de los usuarios móviles asociados a clientes.
9 Notificaciones sonoras
El sistema debe generar notificaciones sonoras al momento del ingreso de una evento para el resolutor y cuando el evento ha sido cerrado para el caso del cliente
NO
10 Campos personalizables
Los campos personalizables de un tipo de evento para una organización son de tipo texto, numérico y lista de opciones.
SI Alta Se debe elegir un framework que permita la creación de estos campos dinámicos y un componente que resuelva la forma de almacenar estos datos dinámicos en las tablas.
11 Formato de fotos y videos
Las fotos a publicar en un evento pueden ser .jpg, .png o .gif y no pueden superar los 3 Gb.
Si Alta Al ser de hasta 3 Gb las imágenes o videos deberá analizarse el impacto en la arquitectura de la aplicación, debiendo decidirse si se almacenan en la BD o en un File Server.
12 Interface con GPS
El sistema utiliza el sistema de geoposicionamiento de los teléfonos para su funcionalidad.
Si Media Se debe desarrollar un componente que interprete las coordenadas del GPS.
13 Envío de notificaciones por mail.
El sistema debe poder enviar notificaciones por mail a los clientes.
SI Alta Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail se utilizará un servidor de Mail externo, Exchange.
14 Notificaciones push
El sistema permitirá dibujar zonas dentro del mapa, agrupando reclamos a partir de una lógica determinada y enviar notificaciones push a los dispositivos móviles de los clientes.
Si Alta Desarrollar componentes que permitan resolver el envío de notificaciones a un grupo de clientes en particular.
15 Logo y colores El aplicativo podrá adaptarse a la imagen corporativa de cada organización (logo y colores).
No - La inclusión de imágenes con los logos y cambios de colores no condicionan la estructura de software.
16 Interfaz con Google maps
El sistema debe establecer una interfaz con Google maps para aplicaciones mobile y web
Si Alta Se integrará una librería que provee Google Maps, que provee el servicio de visualización, tomando las coordenadas de GPS para armar el mapa que se necesite. Esta librería es la que se comunica con la API de Google Map que brinda el servicio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-8I-Wxaup24MGUH6q_Z50NWzfmexiPiKax1eBT60WuNd7X-9su9LmV9ACPRvi08TzydtI2nEPMgcEy9rfswg7VMJ2C4CX-hhlkZWh5SBRvespHW-lSNFrWNOr8ZKIv9kPyS3PfQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24mvzpE5u0DyAMoJOC-AA0RMNA6S0dGaBJZh61ecvMnmu0GgZoRBjziyc_Bz73bEIbTbAdKMpP4mFyUvvBcuGdLTZRCPkyCWm4tU-hfVi9Z9UjGC9YEce4g0PMIqH9wQNqXPcq7Q=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pXDMUPXNidHqxBskmOc6FVrxEBiSklKti0bntSflchw1j3w8EpBBy_dnnOEBtE5z14RHCMoQ6RnzPfDfeHpDMTd4SikENlTnRK9_ZaJM-AJBbDWqBPfY-HrCgxeZaRc4ZyUk89w=w1280-h934-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 11 de 17
Solución Propuesta
Descomposición del dominio del problema:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2N_DYrFH4oRYP1BbcPZ83rf-dP1IwndxE9yjiMU01K0wpuRnMTj2VOIV2o4PEjrRO2jX5TAJ2Z49h5TWK-lZPnym1W6kQ1qAepI1t7B_7sny5KOaoo6z4fqXMRDf79U0b4yoNzYw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KadnzBgM_ga2cZaCcsAF_gKoNJmXUWfzVM0nOdSPoeKSsVbSEVOQ9-I8v5BLhAlLm9LioR2Y9x4Rr5vrmeaRBaZVQRSA0ZD4K3r9TxvQaEatfg9Ntv7YSWsOViWXGxLmVeZUn=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1R8QuzqZwM3q6G9W2Pmdk4K4ruHylPHo-_0NeZAWvaRRtl9mT-BKLGTHVBu3d7NRSJ6yYmAVoRCCx7wsIWoR8WhxmgceZYxLStZFU3YbHw1pVAEXivh6MOJlbBw-BwDoH6u19Y=w1280-h1103-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 12 de 17
Vistas arquitectónicas:
1. Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UDQgoFhaDiw9SZjVyKotkvkhNZMMLLxLVUb3PqAUG9oiQNHQJjeL8gzfVBGVxDNLbDSVjdBpzo7EzOGBIZnpZWqDVnZ-aK7_xY8VZiAS7j0c9V2BCGJAWXhJBvtUyRMgpLw4jSw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BjAAcqJSxuwTRShmaQ7zJP5WQkyOMNYkroDoPzUHq8lkldb4uCb4Z4AMsprbWVS62bwstgPr0TjcVnwDi9twiu5gyznm9Y80Nk-u5DTIvkZTLlACVc0c_dDzE9jJg-Wj4NB2BkA=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 13 de 17
Justificación de la inclusión de cada caso de uso en la vista:
Casos de uso Justificación
15. Registrar tipo de evento, 16. Consultar tipo de evento, 17. Eliminar tipo de evento, 18. Modificar tipo de evento
ABMC representativo, elegido para resolver aspectos relacionados al acceso a base de datos, diseño de interfaz de usuario, algoritmos de programación, que define la arquitectura del resto de los ABMC. Vinculado al RNF 10 de Campos personalizables; al RNF 3 Sistema Web; al RNF 4 Navegador Web. También se asocia el RNF 15 Logo y Colores (aunque no sea SPA).
1. Registrar evento Transacción mobile compleja representativa, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario, implica la creación de un nuevo evento desde la aplicación móvil para uso de los clientes. Vinculada con los RNF1 Aplicación Mobile; RNF2 Sistemas operativos móviles; RNF 16 Interfaz con Google maps; Vinculado con el RNF 11 Formato de fotos y videos, ya que el cliente puede subir fotos y videos y debe resolverse en la arquitectura como se realizará el almacenamiento de estos archivos. Resuelve el RNF 12 Interface con GPS, debiendo interpretarse las coordenadas del GPS para geo posicionar el reclamo al momento del alta. Se asocia también el RNF 5 Servicio en la nube.
28. Iniciar sesión Caso de uso donde se resuelve la problemática del manejo de sesión, validación de permisos de usuario, la seguridad de la información en la sesión, y la visualización de datos en función del usuario logueado, asociado al RNF 8 Seguridad de usuarios Autenticación de usuarios.
31. Visualizar mapa de eventos Representa los aspectos arquitectónicos tales como performance de acceso a los datos, tiempos de respuesta en la generación de reporte, formas de visualización, entre otros que hacen a la generación de los reportes. Resuelve la arquitectura para el RNF16 Interfaz con Google maps en su versión web.
34. Registrar trabajo realizado Transacción representativo de la aplicación móvil para la organización, donde se resuelven aspectos vinculados al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario. Vinculado con el RNF 11 Formato de fotos y videos, ya que el resolutor puede subir fotos y videos y se debe resolver en la arquitectura como se realizará el almacenamiento de estos archivos. Resuelve el RNF 12 Interface con GPS, debiendo interpretarse las coordenadas del GPS para geo posicionar el reclamo al momento de registrar el trabajo.
35. Registrar cierre de evento Registrar el cierre de un evento resuelto, con la opción de publicarlo en redes sociales, notificando por mail. Vinculado al RNF 6 Redes sociales, que permita publicar contenidos en las redes sociales; al RNF 13 Envío de notificaciones por mail. Implementa el RNF 9 Notificaciones sonoras, ya que al cierre del evento debe resolverse como enviar notificaciones sonoras a los clientes. Relacionado también al RNF 3 Sistema Web; al RNF 4 Navegador Web.
38. Enviar notificaciones a clientes en forma masiva
Se elige este caso de uso para resolver el RNF 13 Envío de notificaciones por mail, en donde debe enviarse notificaciones por mail a los clientes y al RNF 14 Notificaciones push, que se resuelve aplicando el patrón Publish and Suscribe.
43. Generar evento masivo Transacción web compleja representativa, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario, implica la creación de un evento masivo, que luego será notificada masivamente a un grupo de clientes, desde el caso de uso 38. Relacionado con los RNF3 Sistema Web, RNF4 Navegador Web y RNF5 Servicio en la nube, ya que la transacción debe ejecutarse en el entorno web y ofrecerse como un servicio en la nube.
Nota: se asocian más de una vez algunos RNF para dar opciones no es necesario que los estudiantes lo hagan.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rp1SHz6EjtjIW-vCSscYvSpzghQoP3ABEJqX0XVR46MUvmfTBPUOHeSUpZsWnrEnA-FDhLEuXx76dJYtkP94C5sDCW4Zr0txoWZM6uNwMsLNccvKpYDmpZJ0yNLb2o-405CYv=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24lkh1s6HrdvMOmcygG-j82qCzK1ZChWEhyOwn4iqMWhiI9eqWtuz10xFUsZmDcxxsM6LXoSS5tmVi5m1nF96H61I6L7J73biejC-AYNnODB2sZeAXGjs-oq17A3dcSrg9hnJo4g=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2D2xIPScMt6B6rRBQfX46wnp0mCLHrtIEntXyuQKUDxbkmbSiaEV-dKU1YB9roLrb4OXys9UFNKUMTMEQYNwnBQMhu_ijrYPoVcSNL5wwg8Cn4CiuzeMmaoFc5dzM793zJiUI7ow=w1124-h1280-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx Versión 1.10 Hoja: 14 de 17
Vista Arquitectónica del diseño – Diseño Global
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EIYSVHC5ezfZGxgToO311_vVhzuCHHy61ZdEvzBlRQDR_LWSXv2pj477jEfErYRLXwKFWhryHqTJykoLp0Qoz3SBSPbP6ZFqT8ZCEq1SmfWJCWmNBy22g9yup_TT6VrDHny7G=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30WxPLT5WFWfpLbVFyxZvYbpVvwIt1zqlqKw5Veyn-683e344caz3Li_9_rHETu43zCS6fL6e5qyGoygolZnWkXT5GkAhUMClhJNrtUNdmq5K2KFokfVoT6bXSpGlb45olu53owQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PdtFFVnWvMm1NNazcZDdRivsutdbr-zkY9oBhxxy1NDeAhgTMbfGP_c4tPAi2sB77Gn-X_Jde1FjUDeGhBcWKIgStXch8kQIba0vOtH8fMoqPQZX6FwtiAaLOxxHlLUL5SikK=w1280-h684-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx – Versión 1.10 Hoja: 15 de 17
Vista de Diseño Detallada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3My7FPXpWDCCOR_oRNjkR5VGK0dzPz-YvGr2akM2ck-mL7ge4sG4bgZcZzUQpkc_0OL9XOQxFt1eF2TBZh6gVnbrK5vyZClNs70iesHQqN_2zdsDPTa-BYXXgJGxuG7HRxu1uuzw=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yYGjq-2ooPFUAA0EC07Y9hAB0G0rac4F-tmcJShlEUQUwIydDvoxCH_ZfD6_i4R0QCiwknYlqmWvVuva074Ez4nZi5YeV3WOhjm-QhC50qm0Ofc3I8wKtawjYYHBhwj64y7cvWg=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05yvmwHsKrX0FSygWtkwPyByMBSGs8PCsfBV2X0fvdZWjIEpt8_1IWYl1HSfm-9k-LMCmSP3rgIfNFn9izjmDE1-g-xrOonZmjCnKzfJcBvTtwWxp5uZu7PCxja1a6ruhC3r4P=w1280-h1150-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Microservicios
AppReclamos_Arquitectura_Microservicios.docx – Versión 1.10 Hoja: 16 de 17
2. Vista Arquitectónica de Despliegue
3. Patrones de microservicio aplicados:
Descompose by subdomain: para la identificación de los servicios.
Database per Service: para estructurar los datos asignando a cada servicio su base de datos.
Backends for Frontends: para estructurar el producto y como los servicios interactuarán con los clientes.
Multiple Servicies per Host: para realizar el despliegue de los servicios en la nube
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Yezmfn9OfArvdC-RnsMlLLAjKaeeo_aJh4K9n91RXw8XGX3XSwSnD5le4P4NhL2gpoWhUdYPmvjoSOUM6WyPBuGH15r9z3uQjZM1ivAJ8dLctdS4LWDyRzweYkOWtsirSgXOfYg=w839-h1187-v0?authuser=0)
