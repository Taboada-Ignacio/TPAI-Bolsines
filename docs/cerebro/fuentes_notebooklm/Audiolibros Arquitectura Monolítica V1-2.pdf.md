# Audiolibros Arquitectura Monolítica V1-2.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta un 
caso de estudio técnico
 enfocado en el diseño del software para una plataforma digital de audiolibros, detallando tanto las reglas de negocio como los requerimientos del sistema. Su propósito principal es guiar la creación de la arquitectura de la aplicación mediante la 
definición de vistas funcionales
, de diseño y de despliegue en la nube. A través de este análisis, se establecen elementos clave como la 
gestión de membresías
, los catálogos de contenido y las interacciones de los usuarios a través de dispositivos móviles o portales web. En resumen, funciona como una guía integral para estructurar un 
sistema informático escalable
 que equilibre la experiencia del usuario con la seguridad de los datos y los procesos de pago.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qQCfRc7PcOrge_YnJGkl98LR13uFdz8U1UMu4ajl1QgLhiwkBONK8cUvANy0-jD3ubS7YvKku_LnJNEqqJWQImsxJqgNnsodtiUkB0Ggty36NN3J54U-oAFZa_M1KiQ6mBjMFBA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18zorfVO3WBjxPFSMGnUVSxNeM4u1IENdJekWlgT3qHLOZUGyjr1Qxe0Dpi1WdVRPUcrGWx5fGs5gDDg8RNb1vTcYuzBWfwQc-i8S58M55kGr6ANx16lfsawFRkMu3ygqXmNQd=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Considerando la situación planteada, se pide:
1. Construir las siguientes vistas arquitectónicas: a. Vista arquitectónica de la funcionalidad, utilizando un diagrama de casos de uso. Justificar la elección de los
casos de uso que incluya en la vista. b. Vista arquitectónica del diseño, utilizando un diagrama de componentes para visualizar los subsistemas,
componentes e interfaces. c. Vista arquitectónica del despliegue – distribución de software en hardware.
2. Mencionar los estilos arquitectónicos aplicados.
Audiolibros
Glosario: Término Descripción
Miembro También llamado usuario del servicio. Es la persona que tiene una membresía para utilizar la aplicación.
Crédito El crédito es un beneficio que permite elegir y descargar un libro independientemente de su precio.
Tecnología Cloud Este tipo de implementación donde se ofrece servicio de procesamiento y almacenamiento, en servidores alojados en forma remota, a los que se accede través de una red, que usualmente es Internet.
Notificaciones push La tecnología Push es una forma de comunicación en la que una aplicación servidora envía un mensaje a un cliente-consumidor. Es decir, es un mensaje que un servidor envía a una persona alertándolo de que tiene una información nueva. Lo que caracteriza esta tecnología es que es siempre el servidor el que inicia esta comunicación, aunque el cliente no tenga interés en saber si hay algo nuevo. Lo comunica siempre. Lo que más destaca de las notificaciones push es su inmediatez, ya que no hace falta estar ejecutando la aplicación para que llegue la notificación. Aunque la aplicación esté cerrada o en segundo plano, cada vez que el servidor reciba una información nueva avisará de su existencia, es decir, las notificaciones push activan el dispositivo móvil esté o no ejecutándose la aplicación.
AP Actor Principal
AS Actor Secundario
SPA Significativo para la arquitectura
Descripción del Domino Un grupo de emprendedores quiere crear una aplicación que brinde un servicio de entretenimiento de audio de
palabra hablada digital, ofreciendo a sus miembros la posibilidad de adquirir audiolibros en distintos idiomas y
escucharlos desde su dispositivo móvil en el momento que lo desee. Los libros deberían poder ser escuchados en
dispositivos iOS (Apple iPhone, iPad) y Android.
Para poder comenzar a utilizar la app, el interesado deberá crearse un usuario de servicio en la plataforma, en dónde
además de incluir sus datos (nombre, apellido y dirección de e-mail), elegir un nombre de usuario y contraseña (al
menos 8 caracteres siendo al menos uno numérico y uno en mayúsculas), deberá incluir los datos de una tarjeta de
crédito para el pago; estos datos serán validados en línea. La idea es que toda la interacción del usuario de servicio se
realice desde la app.
Si el miembro ya se registró como usuario y olvidó su contraseña, el sistema debe permitirle recuperarla.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mLWTYpVcWQMyfF2STBHbG9XGvLJqPX8gFMyj6H7CcORN7OsN6tMYTFPLtxWKTDHswgPt0WfYTzJP_zqB9nEKoQcJFBmrOLVwsCPBxoRQskP_tz3SG8CTRzm_71XdTnxcVw1bBmA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24C6rowEZfXKTKpTjk1aBMYAJpxlxdyDiCkDQrPQuPRWrqRdAv56cSgWGBkHYwHVS7zu_TcqK8Ezl3EGmjDamLKm4B8w76oPfkBawuovsyofl6HLcbbGXOB6n5-h3VIoJH4V4M=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c7RQb3soJ-nPELJFDlbhABfWuncnPlq-oQ1xJ0bceqpCGOJMKJQuj_2RDJZg7v_GDIhvOytBJjnt2vh2eFi-gcYG2JBBhvl2QWcOMJW5m3qnQGtiiT55WlldjoJQQfGrprx33Pg=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

La idea es que el usuario del servicio pueda elegir entre distintos tipos de membresía, de acuerdo con el uso que le
pretenda dar a la aplicación. Por ejemplo:
Membresía Plata: Con un abono bimestral y un crédito cada 2 meses
Membresía Oro: Con un abono mensual y un crédito por mes
Membresía Platino: Con un abono mensual y 2 créditos al mes
En cualquier momento el miembro puede cambiar su membresía, recibiendo un correo electrónico automático como
prueba de los cambios en el plan. Estos tipos de membresías y sus características podrán variar en el tiempo.
Cada crédito servirá para comprar un audiolibro, cualquiera sea su precio. También pueden comprarse audiolibros sin
usar créditos, pagando por ellos el precio establecido.
Una vez comprado un libro el mismo deberá ser descargado para poder escucharlo y podrá ser descargado en los
dispositivos que se desee. El audiolibro pasa a ser propiedad del usuario del servicio aun cuando decida dar de baja su
membresía. Es decir, si el miembro termina (da de baja) su membresía, podrá seguir escuchando los audiolibros que
compró hasta ese momento (ya sea con créditos o pesos) cuando la membresía estaba activa.
Para promocionar la app se ofrecerá a los miembros nuevos una prueba por 30 días, que incluirá 1 audiolibro a
elección. Luego de pasado el período de prueba y si el usuario del servicio no dio de baja su suscripción 5 días antes
de la finalización de esta, se considerará que le interesa mantener su cuenta y se aplicará el pago de la membresía
Oro, adquiriendo los beneficios de esta.
Para mejorar la experiencia los audiolibros que se ofrezcan serán los narrados por actores, los cuales son ofrecidos por
distintas editoriales. Todas las semanas se subirán libros nuevos y también puede ocurrir que algunos se quiten.
Los administradores de la plataforma accederán a través de un portal web que deberá funcionar en los navegadores
web Internet Explorer Versión 11.0 y Google Chrome 80. El acceso web solo será utilizado por los administradores de
la plataforma.
Luego de que los emprendedores transmitieron la idea al equipo de trabajo, les surgieron las siguientes preguntas:
¿Cómo busco un audiolibro para comprar?
Desde la app se podrá acceder a una Tienda en línea, que permitirá realizar búsqueda de libros por género, por autor,
por título del libro, por más vendidos o por recomendaciones en función de los libros comprados anteriormente.
Para comprar un libro podrá consumirse un crédito o bien pagar el precio con el que dicho libro se vende en la tienda,
en este último caso la cobro es por medio de tarjeta de crédito.
Adicionalmente existirá una Wish List (Lista de Deseos) para ir dejando seleccionados los libros que en algún momento
podría decidir comprar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2U8B8ShnzpuqKRvKhR_2tYEqMgTofPZpwwMhC-ArojOH9x7b5IOT9Bv7RkiYr-5RdpgtU3butuvuoNqG81-08tzcsxMKQRPZyMLY78z0zMXHA29NAoCnDd7ZK_mqBYUoucgTf8Rw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CYagjgTcxZHrLMkSoNdn1wf3354GdVqktBUkv8ETKrn32MEg6GV9PgHimkxla5vHTgio589TjiX62090MBp-C5bYrl1tPq4l9jfN26YUZOFf0m4dFqEXtxhjIw6VfflbWWzBYzg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IZS8QuQfuPGHZHZ8_CbmrgkO-ZGkIBGglWLDaxYrmmCA-kBX2Rq2_GUVQ2lE7oh8e7N-bL7Yrk0lStH3DtNiQ8AtWuF5obCDEsfI2KZFVoc1zyEyHrORz6ZUejSwIE3j5b4g3=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07XQbjqUQfsW3j6WSvsddXLQ6-YS5ntrRfDT7UakGtyx_wCChAocrlwZCFulCOSKAyUdkaqZLDh8S9Q_ckH32V8fjCzzksKJzemJmGCipmsteNkDeuXonI31Jb-udq1C_iYn4AxQ=w343-h589-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

A continuación, se muestra un ejemplo de cómo se visualizaría el catálogo desde la app:
¿Habrá alguna manera de probar el audiolibro antes de comprarlo?
Si, la idea es que pueda escucharse una pequeña porción del audiolibro
(entre 2 y 5 minutos) para ver si al usuario le gusta como está narrado,
antes de comprarlo.
También se ofrecerá la posibilidad de devolver el libro, siempre que no
pasen más de 365 días desde la compra original. Esto permitirá a los
miembros activos probar un nuevo narrador o una nueva historia sin
perder ningún crédito. A fin de continuar ofreciendo este beneficio, los
miembros deben aprovecharlo sólo para este propósito. Debe ser posible
devolver una cierta cantidad de títulos, para que no se haga un mal uso de
este beneficio. Sólo podrán devolver o cambiar libros los usuarios que
tengan una membresía activa.
¿Qué tipo de reembolso se recibirá al devolver un audiolibro?
El usuario del servicio recibirá un reembolso con el mismo método de pago
que usó para comprar el título. Por ejemplo:
Los títulos comprados con créditos se reembolsarán con créditos,
inmediatamente, para que pueda utilizarlo en una compra posterior.
Los miembros que compren un título con tarjeta de crédito recibirán
su reembolso en aproximadamente 7 a 10 días hábiles, según la institución
financiera emisora.
¿Qué pasa si se da de baja en el catálogo un libro que fue comprado por el usuario del servicio?
Si el libro fue descargado antes de la baja del catálogo, el usuario seguirá teniéndolo disponible. Por esto se sugerirá
que los libros se descarguen al poco tiempo de realizada la compra.
¿Pueden adquirirse créditos para la compra posterior de libros?
Si el usuario del servicio se queda sin créditos de su membresía antes de su renovación podrá comprar créditos
adicionales.
¿Cómo se paga la membresía?
Una vez que se vence la membresía vigente automáticamente se genera el pago de un nuevo período de esta. Por
ejemplo, si la membresía es Oro (con vencimiento mensual) y su próximo vencimiento es el 03/05/2020, el 03/05/2020
se realizará automáticamente el cobro de un nuevo período, con vencimiento 03/06/2020.
En caso de que la tarjeta de crédito asociada al cobro de la membresía no esté vigente (por estar de baja, o vencida o
cualquier otra causa) se deberá avisar al usuario para que la reemplace, de lo contrario pasado el periodo de tiempo
de aviso se revocará la membresía.
Otro motivo de revocación de la membresía será que el período de tiempo de la suspensión exceda los 3 meses y el
cliente no la haya reactivado.
¿Cuál será la validez de los créditos que otorga la membresía?
Los créditos sólo podrán canjearse por audiolibros, no tendrán valor en efectivo, no serán transferibles ni
reembolsables. Todos los créditos serán válidos por un tiempo limitado (1 año desde su adquisición) y caducarán
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pL_XHQjQTENTMvBcaq9BboxyO96bJXO4zpxrepfS03SZpQV-93Bvvha9UPJBUpy2ozA0h8dqdyXvKgGaUyZM8_v8npL5lWOHVk0XNYc2wyMs1JymjtocPbzcySa-wZJedmp5u=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RcMRgwWn_2KUyHU75FP2jGbzzY2O3MBJz5CApzOLGHQVfs1d7qM5tm_cRvhijy4iT6qXU-kBj0CS_aXTfGbKuMGfBzDmiTqSOkf-EmdcruzyZY8RRFUYf8OjnNX1sb-ZPzBcVAg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09cQRMc1WVtd8AIiV1c3FM0AIPZcZzKH7MMd-iF5VFsHXt4yDtkYIlHu5pnqQz0-ce7_rQuQu8b6cjyhmZdzvciBQyPyMLWv9afwDfcTBABQ5VzLeUbzJPboNgl1OFI5JGWWrYNA=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mkszT6oJvWTk1mP9NKney8-MnNfapxA1Yz67zqUrObKrTLfP_Qr2ovFOQZXFNM0fy8xT3Biu_UjPrrCZhZL19p-n0XSmralAwurvDvMrfcnv2_grA0BTacmdP_nJWECvVXBAKbA=w343-h590-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

inmediatamente después de la cancelación o finalización de la membresía, a menos que se utilicen antes para comprar
un audiolibro.
¿Cómo se descargarán los audiolibros?
Para descargar un audiolibro, se necesitará la aplicación. Podrá obtenerse en la tienda de aplicaciones del dispositivo.
Al instalar la aplicación, el usuario debe aceptar el acuerdo de usuario que define las condiciones del servicio y política
de privacidad.
Podrán descargarse los libros en varios dispositivos y durante la lectura, si el usuario utiliza más de un dispositivo,
cuando lo cambie, retomará el libro en el mismo lugar donde lo dejó.
¿Dónde podrán verse los libros disponibles?
Habrá una opción de menú denominada “Biblioteca” donde el usuario podrá ver y escuchar los libros que tiene
comprados, tanto si han sido descargados como si no, tal como se muestra a continuación:
Allí podrá visualizarse si el libro está pendiente de descarga, listo para iniciar la
lectura, en proceso de lectura o finalizado. Los libros que han sido descargados
pueden borrarse del dispositivo y volverse a descargar cuando se desee.
¿Qué opciones mostrará la interfaz de reproducción?
Durante la escucha el usuario del servicio podrá pausar la reproducción,
adelantarla o retrocederla. Cada capítulo está identificado, con lo cual se puede
acceder a un capítulo en particular y además setear marcadores de lectura. La
reproducción siempre retoma desde el lugar en que se dejó.
La velocidad de reproducción puede configurarse desde la APP, para adaptarla
a las preferencias de cada usuario del servicio.
¿Cómo podrán los miembros cancelar su membresía?
El miembro podrá cancelar su suscripción en cualquier momento, recibiendo un
correo electrónico automático como prueba.
La eliminación de la aplicación en el dispositivo no cancela el plan.
Luego de la cancelación se conservarán los libros que se hayan comprado.
¿Se puede suspender la membresía?
Sí, los miembros pueden suspender su cuenta una vez cada 12 meses. Dicha suspensión puede durar entre uno a tres
meses.
Por ejemplo: Juan decide suspender su plan por un mes a partir del 1 de junio. Cuando su plan se reinicie nuevamente
el 1 de julio, no puede suspenderlo otra vez durante 12 meses completos hasta el próximo 1 de julio. El reinicio de la
activación de la membresía requiere confirmación del usuario.
¿Cómo se realizará la comunicación de la empresa con el usuario del servicio?
Se contará con un módulo de notificaciones push a través del cual es posible enviar notificaciones a los usuarios a
través de la app o la dirección de mail informada (Por ejemplo: cuando se compre un nuevo libro, cambien las
condiciones del plan, se disponga de un nuevo crédito).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2S3dR6lX_HEItO7-tFF1BXqFG0k_r-qL3hoiNlkmDV9L2yKyIUp35Z1DvrFQIHMAgflEXLP_PQk0cewCECMEzvvn6HujiYcR4gXiUy1bH5iO2StxDw0sCwx0nri5VXdij0XY0F=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DfGgj1uLvbI4648_uMh5E6MrdB5gRVJFbTDbiTom_curmGRO6zUksGI1lNS99jYlk956sct8qhr1PkF_NJh8L8q3NCDYsAMmG8x6vTunwLrwN47epp32jNgP8ubm8UwTy_JjASA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wHL9wtTz6A-X1yOhn0AlkOKeOyoXtg6UHAlLzICF-xjMJXGqGcd9j2Uo688O2MTtSlequQCqdM3RfY1j6CsP9NV8C4Tux1Vsx4NWxxMmSgXpCq-IqU5C0AceewwVDkaM0LEcu1g=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

La aplicación deberá implementarse para uso con tecnología cloud, con servidores distintos para la BD, la capa de
Aplicaciones y la capa de servicios web.
Definición del Producto de Software a construir
Objetivo:
Gestionar la escucha de audiolibros, las membresías para el acceso a bibliotecas de audiolibros y el cobro de las
membresías.
Alcances:
Administración de audiolibros.
Administración de tipos de membresías.
Administración de catálogos y secciones de audiolibros.
Administración de usuarios y permisos.
Gestión de membresías
Gestión de biblioteca de usuarios de servicio.
Gestión de preferencias de usuarios de servicio.
Gestión de cobro de membresías.
Gestión de escucha de audiolibros.
Identificación de Casos de Uso:
Nota: El listado de casos de uso no es exhaustivo, se incluye a los fines de una mejor comprensión de la funcionalidad del
producto.
Paquete Nro. Nombre del Caso de Uso Objetivo/Breve descripción Actor
Administración de usuarios
1 Registrar usuario Registrar un nuevo usuario. AP: Usuario
Administración de usuarios
2 Modificar usuario Modificar los datos permitidos de un usuario. AP: Usuario
Administración de usuarios
3 Consultar usuario Consultar los datos de un usuario. AP: Usuario
Administración de usuarios
4 Recuperar contraseña Informar a un usuario su contraseña enviándole un mail a su cuenta registrada.
AP: Usuario AS: Servidor de Email
Administración de usuarios
5 Eliminar usuario Dar de baja un usuario. AP: Usuario
Administración de usuarios
6 Registrar perfil Registrar un perfil de usuario administrador. AP: Administrador plataforma de libros
Administración de usuarios
7 Modificar perfil Modificar los datos permitidos de un perfil de usuario administrador.
AP: Administrador plataforma de libros
Administración de usuarios
8 Consultar perfil Visualizar los datos de un perfil de usuario administrador.
AP: Administrador plataforma de libros
Administración de usuarios
9 Eliminar perfil Dar de baja un perfil de usuario administrador. AP: Administrador plataforma de libros
Administración de catálogo
10 Crear catálogo Registrar un catálogo de libros. AP: Administrador plataforma de libros
Administración de catálogo
11 Modificar catálogo Modificar los datos de un catálogo vigente. AP: Administrador plataforma de libros
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mAPvwheZ56lCYgPbAIQ8xCLrDCUGkhecer9rn-9uC_E-XYpvf4-3PEEwjqlNkCLGqOBmd4eJoIUP6PiwQfnRV7anVR4oSsH6lMZEceFy388vCo8JEcQioxgBLTjVKC0wg5k28rw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_jccZvhGxOgLBbwveIN1EoY3BDznJalMn85ShWO4fl6A-dQxtPDLwk5Gxa48YVd7_KR-Y9TrVX4QK5mTmL6wvO9pQgX8TCL5e6BhFBNtqbZwFqGSJ03nI2T_A_wy_w4_bsRqFCg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UrUaJvZdsaE06pfZXaIcTnQscyvl40w-Gl3sFKqQE_PblpRE1QbGQMpTA2XdZN5eeLWqpBUZoXsutR3IPF-x4P8BdO_gFyf8NPJU92e5c-hj4g2BvtZySMEjae1sOpzAsFjD-Qg=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Paquete Nro. Nombre del Caso de Uso Objetivo/Breve descripción Actor
Administración de catálogo
12 Eliminar catálogo Dar de baja un catálogo vigente. AP: Administrador plataforma de libros
Administración de catálogo
13 Consultar catálogo Consultar los datos de un catálogo existente. AP: Administrador plataforma de libros
Administración de membresías
14 Registrar tipo de membresía
Dar de alta un nuevo tipo de membresía AP: Administrador plataforma de libros
Administración de membresías
15 Consultar tipo de membresía
Consultar los datos de un tipo de membresía AP: Administrador plataforma de libros
Administración de membresías
16 Modificar tipo de membresía
Modificar los datos de un tipo de membresía, con una vigencia futura.
AP: Administrador plataforma de libros
Administración de membresías
17 Eliminar tipo de membresía
Dar de baja un tipo de membresía, con una vigencia futura
AP: Administrador plataforma de libros
Administración de usuarios
18 Asignar perfiles a usuario administrador
Registrar la asignación de uno o más perfiles a un usuario administrador.
AP: Administrador plataforma de libros
Administración de catálogo
19 Agregar sección al catálogo
Agregar una sección a un catálogo vigente. AP: Administrador plataforma de libros
Administración de catálogo
20 Eliminar sección del catálogo
Eliminar una sección de un catálogo vigente. AP: Administrador plataforma de libros
Administración de catálogo
21 Modificar sección del catálogo
Modificar una sección de un catálogo vigente. AP: Administrador plataforma de libros
Administración de catálogo
22 Asignar audiolibro a sección.
Asignar un audiolibro a una sección del catálogo o modificar la sección a la que estaba asignado.
AP: Administrador plataforma de libros
Administración de catálogo
23 Agregar audiolibro al catálogo
Registrar un nuevo audiolibro en un catálogo, informando las secciones a las que pertenece.
AP: Administrador plataforma de libros
Administración de catálogo
24 Eliminar audiolibro del catálogo
Dar de baja un audiolibro del catálogo. AP: Administrador plataforma de libros
Gestión de cuenta
25 Configurar preferencias de reproducción
Configurar preferencias individuales en la app del usuario de servicio, como la velocidad de lectura.
AP: Usuario servicio
Gestión de biblioteca
26 Buscar audiolibro Consultar catálogos vigentes para buscar un audiolibro.
AP: Usuario servicio
Administración de membresías
27 Registrar pago de membresía
Proceso automático que registrar el pago de membresía cuando llega el momento del vencimiento
AS: ATC
Administración de usuarios
28 Iniciar sesión Iniciar una sesión en el sistema ingresando un nombre de usuario y una contraseña y aplicando las preferencias del usuario.
AP: Usuario
Administración de usuarios
29 Cerrar sesión Cerrar una sesión en el sistema cuando el usuario así lo requiera
AP: Usuario
Gestión de biblioteca
30 Agregar audiolibro a la wish list (lista de deseos)
Incluir en la wish list (lista de deseos) un nuevo audiolibro.
AP: Usuario servicio
Gestión de biblioteca
31 Consultar biblioteca Consultar en la biblioteca los audiolibros comprados, visualizando el estado de este.
AP: Usuario servicio
Gestión de biblioteca
32 Comprar audiolibro Comprar un audiolibro de un catálogo vigente, con créditos o pagando con tarjeta de crédito.
AP: Usuario servicio
Gestión de cuenta
33 Modificar membresía Modificar membresía vigente, realizando el pago de la nueva membresía.
AP: Usuario servicio
Gestión de cuenta
34 Cancelar membresía Cancelar membresía vigente por parte del usuario de servicio
AP: Usuario servicio
Gestión de biblioteca
35 Descargar audiolibro Descargar un audiolibro que se encuentra pendiente de descarga.
AP: Usuario servicio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02tAhb48g0f0M18eYvaMOSnKsh3ODyllPbG-jLtNLvc0aG3iApxMNscLaix0OCaUpratKpQwovqrnGCIHG-LS_5cmdUXrTiJcbF9L7xp3OgtXLvjhjYcxLfS1fnssUDU0wl632hA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Z7YdD39mTGLY3hvuiUZIEnaQIFN42iWUGE-Rdzk-aUj28c8u9TdtzkSyxh9btHABkVuX8nBX5Nsc9i65O2cxdCTDPzUBaf-J2839J07WSieJDDbvlLnW550oEigWTzBo4FdDU=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0S3Bup9tjpLvOGS81oY7arRzIl-06pK2tXJB4a-YFdnknZLeZ3MqBApFNoXLp9hI-sIAPVbrH0E_N-rV3a-9wcuzRUx6zDk_OXssb6sI_gciGuSiM5ydcOPSg-roHIY0rGnQSCGg=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Paquete Nro. Nombre del Caso de Uso Objetivo/Breve descripción Actor
Gestión de biblioteca
36 Escuchar audiolibro Escuchar un audiolibro descargado, pudiendo pausar la escucha, avanzar o retroceder; o acceder a un capítulo específico.
AP: Usuario servicio
Gestión de cuenta
37 Suspender membresía Suspender membresía vigente. AP: Usuario servicio
Gestión de biblioteca
38 Devolver audiolibro Registrar devolución de audiolibro. AP: Usuario servicio
Gestión de notificaciones
39 Enviar notificación a usuarios del servicio
Enviar notificación al dispositivo móvil de un usuario y/o por email, según esté configurado para cada usuario; para confirmar una acción realizada (por ejemplo, pago de membresía)
AS: Servidor de Email
Gestión de cuenta
40 Informar TC no vigente Informar al usuario de servicio que los datos de su Tarjeta de Crédito no son válidos para el pago de la membresía mediante mail o mensaje push, según la configuración correspondiente.
AS: Servidor de Email
Gestión de cuenta
41 Revocar membresía por falta de pago
Cancelar membresía por no poder hacerse efectivo el pago de esta o por vencimiento de suspensión.
N/A
Gestión de cuenta
42 Confirmar el reinicio de membresía
Confirmar el reinicio de una membresía luego de una suspensión.
AP: Usuario
Requerimientos No Funcionales
Nº Nombre Descripción Característica ISO 25000
SPA Prioridad Justificación
1 Aplicación Mobile
La app debe poder ejecutarse en dispositivos móviles con acceso a internet.
Compatibilidad Si Alta La funcionalidad para el usuario final se utilizará en dispositivos móviles, por esta razón es requerido este RNF desde la primera iteración.
2 Sistemas operativos
La aplicación debe ser compatible con los sistemas operativos móviles IOS (8 o superior), Android (6 o superior)
Portabilidad Si Alta El lenguaje de desarrollo de los módulos Mobile debe ser compatible con los sistemas operativos móviles solicitados.
Y por la misma razón que el RNF 1 es de prioridad alta dado que debe resolverse desde la primera iteración.
3 Tecnología Web
El sistema debe implementarse en tecnología web
Compatibilidad SI Alta Restricción técnica de implementación, que afecta a la arquitectura. Se debe utilizar un lenguaje de desarrollo web para la plataforma de administración.
4 Navegador Web
El producto funcionará en los Navegadores WEB Internet Explorer Versión 11.0 y Google Chrome 80.
Compatibilidad SI Alta Puede ser significativo porque el uso del lenguaje de programación web puede tener variantes para distintos navegadores o distintas versiones del mismo navegador.
5 Servicio en la nube
La solución se desarrollará con Tecnología Cloud
Seguridad SI Alta Se requiere que el sistema contemple los aspectos de seguridad necesarios para que sea ejecutado en la nube y accedido desde cualquier ubicación con conexión a Internet.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zNqBIyjzJ7BAuIn9tjTmZf9J4mwolqzMLbvQ-fP_ufJXak-EiVmY9QkT4p3F6nJzY3bk2fVzk3iGhQhbWfnzkTkb71baoPWomQ7F0BlNMrkwUpu9Tsrr3subJee7PHVHkzLrXLQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LBcKZm5ze-LtpfPmZhp0THzXLzu_b4JWzrwA7HtTubihSXA_4GdfjNxu6zYosXUU1SJyaiQCYcQGA0bjq8wPBcgZzrpRNEzRhXtkt9Yx48D9-TJ56danePx3Kq3eZYkzWeVJCOw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zZdSzZUFNn4YYG1xcdwgYktirtW5cmakNkJ3ODFJZoBaCrPt_MW2sL_fHH3OpunrDMGI2rcRSbRuQZbmXK8txjp2AYyeR_lGVaTUknX3ihwoWkOSNQ0Qvcqy4E8Pv9PIp759q7g=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Nº Nombre Descripción Característica ISO 25000
SPA Prioridad Justificación
6 Seguridad de servidores
El sistema deberá ser desplegado de manera segura y resguardando los datos de posibles accesos malintencionados.
Seguridad Si Media Requerimiento de seguridad lógica significativo para la arquitectura, se deberá desplegar el sistema distribuyendo las capas lógicas en 3 niveles de servidores diferentes, facilitando la protección, la integridad y el acceso a los datos.
7 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos
Seguridad Si Alta Requerimiento de seguridad lógica, significativo para la arquitectura, implica desarrollar un módulo que permita autenticar usuarios y controlar las sesiones (que cada usuario tengo una única sesión activa por vez, la duración de las sesiones inactivas, entro otros aspectos).
8 Característi cas de contraseña
La contraseña de cada usuario debe tener al menos 8 caracteres e incluir al menos una letra mayúscula y un número
Seguridad No No significativo para la arquitectura ya que se resuelve funcionalmente a partir de la validación de estas características
9 Envío de notificacio nes por mail.
El sistema debe permitir enviar notificaciones por mail a los usuarios de la app.
Compatibilidad SI Media Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail es necesario un servidor de Mail como Exchange.
10 Notificacio nes push
El sistema permitirá enviar notificaciones push a los dispositivos móviles de los clientes.
Usabilidad Si Media Desarrollar componentes que permitan resolver el envío de notificaciones a un grupo de clientes en particular.
11 Cobro de suscripcio-nes
El sistema debe proveer interactuar con los sistemas externos de las Administradoras de Tarjeta de Crédito (ATC) para el cobro de las suscripciones
Compatibilidad SI Alta Debe desarrollarse un componente web service que resuelva la comunicación con las ATC
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jNe0PNIAqbawMrGgnLxWt8kLoGiLAukWx5zzBvSFrqwDScLUekMyyVDEQlVEDZEjhR4kwwo0VTe-RIi4syQBJSsC2HKW9hpwL_Ky6g-DZSMyZ0o8speOzgPW3r0bHngwjGf-m=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_jF7RYFIhdh_qpFlNLTN-FjPuBvuPBJrh1Gat5Og1iZgXBucIf3ZYWvE09FnHUtzvUWfDS2u1ZprvUzHqQl76qTmvmfkHz-3psLkDyGKkC54Wql1nD_R6sm9iDQIqVuXquZnIFQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dh5MtxjD2Di13ktgKu-md4-AxsCe3_JEN3NJe0ZDWra3dsHeC6ya3iWXeKG785fSf8djH7Jg-J7vVDazm7AjO0jCgyCLCD7Qv0TugfGcmseIa29BBztbZJV5ETTdh7eFSUgiL=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30lrAe3J911T5e6doDJp3CcMK1yahmakVhB5GK4b64UyhNOfjis7OaQVY0PdRJe9RbtJBqs1NQyZ1gV8kF_H5wMYyci72JaGneZ3lCh5RhutejffqKpHYS1_47l9Ys3-qfLXJOkQ=w1280-h631-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Solución propuesta
Vistas Arquitectónicas: Vista de Funcionalidad:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cIHmMPhbnGWvFsw9SMWBooDIkfI9BM2cFZLWonlQV1MztRok9x4YQEWjB-U_fuyjMzEe36jWfBE3iFLmVpOdCIMPjHnTAhKMB6I9uj7N0r-65mDc8RdOLm5oA9S_Dl1tSEMhZKQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XuKXt27bgcPmQSAgfEtF7mfxQ6-lSlhnBKsziazKSddvM4Wi78SuZCtUDIjIHV_9gDDFHczr1JpqFKQI_MYO-9Pg1OuL3H88Ea3Mja1VMszOJWpnPCb2m7E1xt51-RWbxZtZlUw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TWbWlSJ62Tk-Upw9BwdS4zCLzkNTpukO38cIlNSAWDyDHso85LLXOxvOcjY8Fzn2ZlwVJhqey0NZuXeOsLvr8pHXhxrRGuyVV-oq643QxcnhHKOAHJvsokchAShYcsRWvahqs=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Justificación de la elección de cada caso de uso
Casos de uso Justificación
14. Registrar tipo de membresía 15. Consultar tipo de membresía 16. Modificar tipo de membresía 17. Eliminar tipo de membresía
Representa un ABM de la plataforma web, en dónde se define cómo resolver aspectos arquitectónicos tales como forma de búsqueda, inserción y actualización de datos, visualización de datos, conexión de datos. Vinculado a los RNF3 Tecnología web y RNF4 Navegador web Relacionado también el RNF5 Servicio en la nube, ya que la aplicación se ofrece con Tecnología Cloud
27. Registrar pago de membresía Caso de uso que representa una funcionalidad que se ejecuta con el tiempo como disparador y desde el punto de vista arquitectónico es necesario definir cómo se realizará. Es una transacción importante realizada desde la plataforma web, además está Vinculado al RNF 11 que resuelve la comunicación con las ATC con las que se realiza el cobro de las suscripciones.
28. Iniciar sesión Caso de uso afectado por el RNF7 Seguridad de usuarios. Se debe resolver el problema de seguridad de la información en la sesión, y la visualización de datos y preferencias en función del usuario logueado.
32. Comprar audiolibro Transacción ejecutada desde la app por el usuario de servicio, dónde se establecen aspectos arquitectónicos vinculados a definiciones respecto al control transaccional. En esta transacción se realiza la compra de un audiolibro, utilizando créditos disponibles o pagando el precio establecido, en este último caso se vincula con el RNF 11 que resuelve la comunicación con las ATC con las que se realiza el cobro. También está vinculada al RNF1 Aplicación Mobile y RNF2 Sistemas Operativos. Relacionado también el RNF5 Servicio en la nube, ya que la aplicación se ofrece con Tecnología Cloud También este caso de uso se vincula con el RNF6 Seguridad en servidores, ya que el sistema deberá estar distribuido en diferentes capas y la app sólo se comunicará con la capa web y está será la encargada de brindar servicio a la app, pidiendo servicio a la capa de lógica de negocios.
36. Escuchar audiolibro Funcionalidad que implica resolver los mecanismos para reproducir el audiolibro de acuerdo con las preferencias del usuario del servicio. También está vinculada al RNF1 Aplicación Mobile y RNF2 Sistemas Operativos.
39. Enviar notificación a usuarios del servicio
Vinculado al RNF9 Envío de notificaciones por mail y RNF10 Notificaciones push, ya que implica enviar la notificación al usuario de servicio a la app y a la dirección de e-mail que tenga registrada.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-vHyZKXtaLkn-RoqkrK58Y0RbeE3dm03f0xSHf39qf6AjwerHWizCmwn59inB9dTk_d1qxvuwsP5zu6lPyclvgjWVNDE6J14mGneUqVbBAzPGDkdaK73RFRfg5CR3RCyVWabn1g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mLFNakPQWkIh_GhQN5WJwlIl_-XaFlRR2M5kgmyKTvJVgM-0wi_x46bl66MXchFBFWESnHNXR_howE0RpIBC0xaex1GcZ8IuKtPu-8OWxCXi_SMc-MWWnk36_B2fp9EI34oiu=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zo1ZBzW1_K-2HsXgkAHeVYhckF-LcoRdjadLlXOHQ9MyN5Y9VC-b2I4E5rCvcJiXE_66oUFWxjzWGmOG7PS3RjbzXiZmOyMrDnuBpjf8I8MtIlWZNBwkNyp2DwdXBWQ8YpmJkXg=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Aei4VZpRvjHwrclhA99nNirvybGPPIDlY33_M_XG1slA0rtvkOTC8ldrDgEtoowGFnZKCFMbjgZWmNd375nywoPKM1O_c-WE6C1m_-UV2RBVo6I_9bLOJtEfG6AXvc-REu8fDMA=w1280-h1261-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Vista de Diseño: Subsistemas y Componentes:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OeTwlTPtWtiRDbaU6zpqGlSM7Pm8_-F2-KyyD-vGKYpaxT-HirWCRy6zd8QNyLy3sRTzJAynRDaFdPzx8ENf5COzH_TtofkL8E-dFpv8uVi55E1RmN076ktps_TBIfOaar-VoKA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iUDTxSbtfI_oqleyY7jRDn_alqI1hr0rv9EM_COrXNTuyIRmTwgC37XwnmUvUeiQ-V4GQJ_Cn4osKSkibXG_HT2twfEG7bEErJIYRlCB6WAd4P2O-4LzEeJ2e6xqPX8a1gijZbg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a-1Fmob8sW4tCFqVPVtYwk2yR6vSf06vXLwF4wYRoKz81cvMTVVeDfHfNUiKsMaapCp9RlUpSXHHKptCjwUadNEcdOSxpbToEVWHET5F8GZVV7Tb7tHr8Muym42VmGqB9LS3OyA=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qP7zFaqWCKsaBPftGtXQNNKb-g6bhfjfOuQ0THkhDzMKJW-NMEXTc8U4xg5hrZadsT_JTRf0T8nKVu6wJ_OO4mFBQZ0UNr92_56pMRzAlOdtJEWb7N7gkzk4JEecdMWOV74IGQA=w1280-h1000-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura Monolítica

Vista de Despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vE1WjjXZUUgQDOgILRmOvMqBz4z93rRFShqZE9xP9RCJpT0AMXR-hMH_yk2E94Xev25lH-fGbMmdG4bZ_MVslBBwx-mtOdMRs5eKq7rt6iwcZRBM0BZJJkwxK-ZTCbHER65wc5Q=w839-h1187-v0?authuser=0)
