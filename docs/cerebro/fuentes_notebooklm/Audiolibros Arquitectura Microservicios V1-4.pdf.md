# Audiolibros Arquitectura Microservicios V1-4.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento de diseño de sistemas presenta una 
arquitectura de microservicios
 para una aplicación móvil y web de audiolibros, detallando tanto las necesidades funcionales como los requerimientos no funcionales de la plataforma. Su propósito principal es estructurar la solución técnica mediante la 
descomposición del dominio del problema
, dividiendo el sistema en subsistemas centrales, de soporte y genéricos. Para lograrlo, la propuesta integra 
vistas arquitectónicas
 que abarcan la funcionalidad, el diseño global, el diseño detallado y el despliegue del software en servidores en la nube. Asimismo, el texto define la implementación de 
patrones de microservicios
 específicos, tales como bases de datos independientes por servicio y pasarelas de interfaz, garantizando así un sistema modular, seguro y escalable.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tBHBMVxt1_Fk0K45jED5wnJ6iSgd65XJAs4eDIH6xcKy_vKF3O_5vBywkFe68Jah6ACKPo-yT76alvJmk8M2p2vxJMD4deP4AqNCNW01Nc0dlS5vkks-5yMB5uFto0u6STPQNpA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J_Gau367270-sDz3J37tf9I8kintSwb6fK-E7l6Zwb-hjVHriziGeoAw39C71_cIJdw17bwryvKhseEx4Rn27fz0YRvvAiUVRpk4zsYdqhJ0G_fjr3aVLEvjTTL8FxzlpDpAY=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Consigna de trabajo:
1. Identificar los subdominios en los que se descompone el dominio del problema 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. (Esta en este caso ya está hecha) b. De Diseño global presentando la estructura general basada un estilo arquitectónico de microservicios c. De Diseño utilizando un estilo arquitectónico de microservicios. d. De Despliegue: Distribución de software en hardware (Nodos y Componentes).
3. Mencionar los patrones arquitectónicos para microservicios aplicados.
Audiolibros Glosario:
Término Descripción
Miembro También llamado usuario del servicio. Es la persona que tiene una membresía para utilizar la aplicación.
Crédito El crédito es un beneficio que permite elegir y descargar un libro independientemente de su precio.
Tecnología Cloud Este tipo de implementación donde se ofrece servicio de procesamiento y almacenamiento, en servidores alojados en forma remota, a los que se accede través de una red, que usualmente es Internet.
Notificaciones push La tecnología Push es una forma de comunicación en la que una aplicación servidora envía un mensaje a un cliente-consumidor. Es decir, es un mensaje que un servidor envía a una persona alertándolo de que tiene una información nueva. Lo que caracteriza esta tecnología es que es siempre el servidor el que inicia esta comunicación, aunque el cliente no tenga interés en saber si hay algo nuevo. Lo comunica siempre. Lo que más destaca de las notificaciones push es su inmediatez, ya que no hace falta estar ejecutando la aplicación para que llegue la notificación. Aunque la aplicación esté cerrada o en segundo plano, cada vez que el servidor reciba una información nueva avisará de su existencia, es decir, las notificaciones push activan el dispositivo móvil esté o no ejecutándose la aplicación.
AP Actor Principal
AS Actor Secundario
SPA Significativo para la arquitectura
Descripción del Domino Un grupo de emprendedores quiere crear una aplicación que brinde un servicio de entretenimiento de audio de palabra hablada
digital, ofreciendo a sus miembros la posibilidad de adquirir audiolibros en distintos idiomas y escucharlos desde su dispositivo
móvil en el momento que lo desee. Los libros deberían poder ser escuchados en dispositivos iOS (Apple iPhone, iPad) y Android.
Para poder comenzar a utilizar la app, el interesado deberá crearse un usuario de servicio en la plataforma, en dónde además de
incluir sus datos (nombre, apellido y dirección de e-mail), elegir un nombre de usuario y contraseña (al menos 8 caracteres siendo
al menos uno numérico y uno en mayúsculas), deberá incluir los datos de una tarjeta de crédito para el pago; estos datos serán
validados en línea. La idea es que toda la interacción del usuario de servicio se realice desde la app.
Si el miembro ya se registró como usuario y olvidó su contraseña, el sistema debe permitirle recuperarla.
La idea es que el usuario del servicio pueda elegir entre distintos tipos de membresía, de acuerdo con el uso que le pretenda dar
a la aplicación. Por ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0N-oGUkFKzBtGfuu3ClQiaG4NGMRMTa07yJx9PllARteVs_kpU3VxIqv7T7xvPu6o7fbxdvBcLIUN7OBZW_h0pqIfp6WlqjeXSPPYpPz4fgKLGDalm7q0Hlu3CzhL26-5Aqo0lJw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VnGO_nxKd0J7IfcptDj6WG5D8q332s6yUDU1TvsQv9IpezvjA1l4FM0moxCHtXdSMLlgCudPUxZWVUtZ5b7plt5xH1OITPUpQb8K6ogbOGHiWwrXB0fYu6JJImsMjScOnuDC0BQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1roX6KY9wMRSZmsYQ1vX12BGTAxYytBVUsGW-L7J4iqQOhzAkuO5k41ErZfWXx0-5ImJzeIji_yPhbm1An43Im8XUA87UWQaPLWLEW-nBfqg5a5-b7VtbWK583Nu1XV-3tvRdU1Q=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Membresía Plata: Con un abono bimestral y un crédito cada 2 meses
Membresía Oro: Con un abono mensual y un crédito por mes
Membresía Platino: Con un abono mensual y 2 créditos al mes
Los tipos de membresía tienen una vigencia, independientemente de las modificaciones que puedan realizarse a sus características
(período de abono, abono y cantidad de créditos). Por ejemplo:
Tipo de Membresía: Plata Fecha Vigencia Desde: 01/01/2018 Fecha Vigencia Hasta: --
Detalles del Tipo de Membresía: Plata Periodo Abono: bimestral Cantidad Créditos: 1 Fecha Vigencia Desde: 01/01/2018 Fecha Vigencia Hasta: 31/12/2021
Detalles del Tipo de Membresía: Plata Periodo Abono: mensual Cantidad Créditos: 1 Fecha Vigencia Desde: 01/01/2022 Fecha Vigencia Hasta: --
En cualquier momento las características de un tipo de membresía pueden cambiar, ante lo cual se informa a los suscriptores
asociados, enviando un correo electrónico automático informando dichos cambios.
La suscripción ya contratada no se modifica, independientemente que cambien las características del Tipo de Membresía es decir,
la suscripción sigue vigente hasta su fecha vigencia hasta, la cual se define al momento del pago. Por ejemplo, para una suscripción
de la Membresía Plata contratada el 10/12/2021 tendrá las siguientes fechas de vigencia:
Fecha de suscripción: 10/12/2021 Fecha de vigencia desde: 10/12/2021 Fecha de vigencia hasta: --
Cada crédito servirá para comprar un audiolibro, cualquiera sea su precio. También pueden comprarse audiolibros sin usar
créditos, pagando por ellos el precio establecido.
Una vez comprado un libro el mismo deberá ser descargado para poder escucharlo y podrá ser descargado en los dispositivos que
se desee. El audiolibro pasa a ser propiedad del usuario del servicio aun cuando decida dar de baja su membresía. Es decir, si el
miembro termina (da de baja) su membresía, podrá seguir escuchando los audiolibros que compró hasta ese momento (ya sea
con créditos o pesos) cuando la membresía estaba activa.
Para promocionar la app se ofrecerá a los miembros nuevos una prueba por 30 días, que incluirá 1 audiolibro a elección. Luego de
pasado el período de prueba y si el usuario del servicio no dio de baja su suscripción 5 días antes de la finalización de esta, se
considerará que le interesa mantener su cuenta y se aplicará el pago de la membresía Oro, adquiriendo los beneficios de esta.
Todas las semanas se subirán libros nuevos y también puede ocurrir que algunos se quiten.
Los administradores de la plataforma accederán a través de un portal web que deberá funcionar en los navegadores web Internet
Explorer Versión 11.0 y Google Chrome 80. El acceso web solo será utilizado por los administradores de la plataforma.
Luego de que los emprendedores transmitieron la idea al equipo de trabajo, les surgieron las siguientes preguntas:
¿Cómo busco un audiolibro para comprar?
Desde la app se podrá acceder a una Tienda en línea, que permitirá realizar búsqueda de libros por género, por autor, por título
del libro, por más vendidos o por recomendaciones en función de los libros comprados anteriormente.
Para comprar un libro podrá consumirse un crédito o bien pagar el precio con el que dicho libro se vende en la tienda, en este
último caso la cobro es por medio de tarjeta de crédito.
Adicionalmente existirá una Wish List (Lista de Deseos) para ir dejando seleccionados los libros que en algún momento podría
decidir comprar.
A continuación, se muestra un ejemplo de cómo se visualizaría el catálogo desde la app:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KOpofQnR1uUluwM7teZCqMc4x3jlkCTsss28IN4ZMLYZB0WlLZzMt7sso0_Rm1IYa8kx3v4elIzdn_iLf0nSBo5JNkcqIfOlosGLqSPBXvFPWKzEUq1vWO9Rg48zlOY1Tgk9hfg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bosC5Ga84Bc5rZUYahlBTXbDfl6cOwb4rXlEX6r30_V4JA1ZJihaOfcJQe8XqKQsFhBCEXadAxKVkyek59lSL7iyZRyJ0vwRBj-fMwLLlagpmYQfoaeWoUuT_R3GpIjyzVjp7=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3f5K83kAnFZXPeX8ZiJaAM6HTjsqCAvkXyxxOE1baQiRm4Zb2o7Br_Ck-44gopETBFc33ZPJzNUDPWN50T7lLS-SmIXPfWMvcM6qmMS48Ms3gS_vNjS87PE4W831QFkgGTkGXEBA=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SBtXDUr2wt2jZUrFguNPHwU8Qphhuw_jClnEkxVCXjONi_YhmJ2LKNYW-EDzS2dvbR32-YRtojRTXeKV-zalq-jFXCIE8q22atvI5WpBwIwKqrLh0eSFN_yKozBzP_y-hkifRGQ=w343-h589-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

¿Habrá alguna manera de probar el audiolibro antes de comprarlo?
Si, la idea es que pueda escucharse una pequeña porción del audiolibro (entre 2 y 5 minutos)
para ver si al usuario le gusta como está narrado, antes de comprarlo.
También se ofrecerá la posibilidad de devolver el libro, siempre que no pasen más de 365 días
desde la compra original. Esto permitirá a los miembros activos probar un nuevo narrador o
una nueva historia sin perder ningún crédito. A fin de continuar ofreciendo este beneficio, los
miembros deben aprovecharlo sólo para este propósito. Debe ser posible devolver una cierta
cantidad de títulos, para que no se haga un mal uso de este beneficio. Sólo podrán devolver o
cambiar libros los usuarios que tengan una membresía activa.
¿Qué tipo de reembolso se recibirá al devolver un audiolibro?
El usuario del servicio recibirá un reembolso con el mismo método de pago que usó para
comprar el título. Por ejemplo:
Los títulos comprados con créditos se reembolsarán con créditos, inmediatamente,
para que pueda utilizarlo en una compra posterior.
Los miembros que compren un título con tarjeta de crédito recibirán su reembolso en
aproximadamente 7 a 10 días hábiles, según la institución financiera emisora.
¿Qué pasa si se da de baja en el catálogo un libro que fue comprado por el usuario del servicio?
Si el libro fue descargado antes de la baja del catálogo, el usuario seguirá teniéndolo disponible. Por esto se sugerirá que los libros
se descarguen al poco tiempo de realizada la compra.
¿Pueden adquirirse créditos para la compra posterior de libros?
Si el usuario del servicio se queda sin créditos de su membresía antes de su renovación podrá comprar créditos adicionales.
¿Cómo se paga la membresía?
Una vez que se vence la membresía vigente automáticamente se genera el pago de un nuevo período de esta. Por ejemplo, si la
membresía es Oro (con vencimiento mensual) y su próximo vencimiento es el 03/05/2020, el 03/05/2020 se realizará
automáticamente el cobro de un nuevo período, con vencimiento 03/06/2020.
En caso de que la tarjeta de crédito asociada al cobro de la membresía no esté vigente (por estar de baja, o vencida o cualquier
otra causa) se deberá avisar al usuario para que la reemplace, de lo contrario pasado el periodo de tiempo de aviso se revocará
la membresía.
Otro motivo de revocación de la membresía será que el período de tiempo de la suspensión exceda los 3 meses y el cliente no la
haya reactivado.
¿Cuál será la validez de los créditos que otorga la membresía?
Los créditos sólo podrán canjearse por audiolibros, no tendrán valor en efectivo, no serán transferibles ni reembolsables. Todos
los créditos serán válidos por un tiempo limitado (1 año desde su adquisición) y caducarán inmediatamente después de la
cancelación o finalización de la membresía, a menos que se utilicen antes para comprar un audiolibro.
¿Cómo se descargarán los audiolibros?
Para descargar un audiolibro, se necesitará la aplicación. Podrá obtenerse en la tienda de aplicaciones del dispositivo. Al instalar
la aplicación, el usuario debe aceptar el acuerdo de usuario que define las condiciones del servicio y política de privacidad.
Podrán descargarse los libros en varios dispositivos y durante la lectura, si el usuario utiliza más de un dispositivo, cuando lo
cambie, retomará el libro en el mismo lugar donde lo dejó.
¿Dónde podrán verse los libros disponibles?
Habrá una opción de menú denominada “Biblioteca” donde el usuario podrá ver y escuchar los libros que tiene comprados, tanto
si han sido descargados como si no, tal como se muestra a continuación:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26DuLfDYCiWPcvhoWHdy088NQaj8C8XbAkHu1gg58XTv4Ele5ayhrZQftaDnmq3WDknFL6iNrTuyhYgGSktO62GOIochMkDiM_kRcPrWfLlRD6zy7zPWM2M-qONjKsyfVIKCgl=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2D2tp1_g2W-XpRH7XtcEbxtjVJvDGjXL2ryIgLrg3P1SPKmi-XUgIKtbTJUN2lsmBPWb_UbEqd9M_SRlOC5aI5YsturROVddtdELszJjhY2d_UmimykNtkaPBmX4MMEZDaZ29reA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A3PTScP-FdmCR72xh0WxGLIfjYwivlq82nMXgqkXS8AmOwdGWqHX0npi9QYM_dZ2aMupILO_6iSTKjl4XF9iYU1tiCW_I5qiAb4jI9j9AnKQkxydctXzBxB-Ha1pio6sEgPZXnw=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wnOTuempg8boIqhHv-KFcKCDJfSq5T6tRtOTb7fHPraG0lLuIlkMQvDhiy9Tf0gVzn16lPUQ1TuLOEygFQnpBFxhtDX9oRgfqK6-S7tH7WQywbkyJil71sHAqiPU9J_mcicIB5Q=w343-h590-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Allí podrá visualizarse si el libro está pendiente de descarga, listo para iniciar la lectura,
en proceso de lectura o finalizado. Los libros que han sido descargados pueden borrarse
del dispositivo y volverse a descargar cuando se desee.
¿Qué opciones mostrará la interfaz de reproducción?
Durante la escucha el usuario del servicio podrá pausar la reproducción, adelantarla o
retrocederla. Cada capítulo está identificado, con lo cual se puede acceder a un capítulo
en particular y además setear marcadores de lectura. La reproducción siempre retoma
desde el lugar en que se dejó.
La velocidad de reproducción puede configurarse desde la APP, para adaptarla a las
preferencias de cada usuario del servicio.
¿Cómo podrán los miembros cancelar su membresía?
El miembro podrá cancelar su suscripción en cualquier momento, recibiendo un correo
electrónico automático como prueba.
La eliminación de la aplicación en el dispositivo no cancela el plan.
Luego de la cancelación se conservarán los libros que se hayan comprado, no así los
créditos sin uso.
¿Se puede suspender la membresía?
Sí, los miembros pueden suspender su cuenta una vez cada 12 meses. Dicha suspensión puede durar entre uno a tres meses.
Por ejemplo: Juan decide suspender su plan por un mes a partir del 1 de junio. Cuando su plan se reinicie nuevamente el 1 de
julio, no puede suspenderlo otra vez durante 12 meses completos hasta el próximo 1 de julio. El reinicio de la activación de la
membresía requiere confirmación del usuario.
¿Cómo se realizará la comunicación de la empresa con el usuario del servicio?
Se contará con un módulo de notificaciones push a través del cual es posible enviar notificaciones a los usuarios a través de la app
o la dirección de mail informada (Por ejemplo: cuando se compre un nuevo libro, cambien las condiciones del plan, se disponga
de un nuevo crédito).
La aplicación deberá implementarse para uso con tecnología cloud, con servidores distintos para la BD, la capa de Aplicaciones y
la capa de servicios web.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zb-7HNh6x_A14jIZdsJjwhqBKohxN6wgaSjzLVC-kI_PzK_wS2S2thFToPlvE_gP8NMryHD_RLcsY2zBBABTc8hc9cPfFEPAMHl7U9M-NmSfx1xWsS4CA5BDlAzVCm1CVJmtT3A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NnLcXTypBdv1tmECCWDf2RopFRUdN72riarQ7F_HFLhy8Vo_d-x-HUSGTUma-l62pidIDWGqFdZn4yg2VJtz1AiVmZbvh-TjJju3WMAbMB6GRC2_kL1tFILl1kspfwHznTimhcg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ouG3_Zps0AhMFP_rWaETzyh3Db-NnbwPegcXpmhsmVCPhv0RMsuyDRLI14gcHEERrSbj3CGWadkJ3DAsFuTn5IQfHjONjdRJGaIZhLtV8cWSUCxLB9FqqF91pizqLUHSgW4xJYQ=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

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
Paquete Nro. Nombre del Caso de Uso
Objetivo/Breve descripción Actor
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
Administración de catálogo
12 Eliminar catálogo Dar de baja un catálogo vigente. AP: Administrador plataforma de libros
Administración de catálogo
13 Consultar catálogo Consultar los datos de un catálogo existente. AP: Administrador plataforma de libros
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FlAj0XpjDYSU5tLmGx_ORaLWtpn9q9X8U9LcGsfNn3R5DNhtww50YsLauOjTbEDExFU_V-RBuvMeWzBfox9MDxF4nYcM_ClDgVV1U0x8trZZpHhvZado2CiIVN4Pu5JHHJAb-0A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13Hk-u6hS1dPsJ_06EVT1MrO4jb4AKDFzhWxrjQHylDPZjWDOiFj3AXcp697cDEClRkwu5wXtBjZlipueWxuh579eQDYC1Jj9zbm4y0HBlB02G4PUYnEtj29VlLaNfrrFrk-EN=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vsXyXWkIsG_vF3e8C84hw9EHf2tTqZLmwTG0V3Vf5eLbQR7nIu83V2FgVFC01u4K8ABfeyaWTQjCL60h93SKomcZO0uF2Peg3-qQd6zokMc1FDnpxjsz0iVV_GXtxLJUAdvEBZw=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Paquete Nro. Nombre del Caso de Uso
Objetivo/Breve descripción Actor
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
AP: Usuario servicio AS: ATC
Gestión de cuenta
33 Modificar membresía Modificar membresía vigente, realizando el pago de la nueva membresía.
AP: Usuario servicio
Gestión de cuenta
34 Cancelar membresía Cancelar membresía vigente por parte del usuario de servicio
AP: Usuario servicio
Gestión de biblioteca
35 Descargar audiolibro Descargar un audiolibro que se encuentra pendiente de descarga.
AP: Usuario servicio
Gestión de biblioteca
36 Escuchar audiolibro Escuchar un audiolibro descargado, pudiendo pausar la escucha, avanzar o retroceder; o acceder a un capítulo específico.
AP: Usuario servicio
Gestión de cuenta
37 Suspender membresía Suspender membresía vigente. AP: Usuario servicio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hUbDx4FdL9K2bbB_tcY04UuybauqlV-DOCNQzYI7aECeaTF82CttHREuGA8rA0rPTp-Zs7ws6c6Eze0c98reGF81Bt6t5N-Pio8ys5Vsz8ZjqV736TuTjpT4V4QFh32TNhz9B=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xZRxcexEieWm-YqoEA3RzaSotCMHc5f78tIxnROcpru6CCshtnhPqe0IQtQzGYNgM7uD9ApKnL7dU3lyCSju_fNvaEJR1ijUnV_98TE5-uQanw_MG844bWBMU8Y4CdMgK7tB-jQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BaBz6R2n9_Q9LJKKQ3bHFIhZ-koS7DsQl6iWae9gE3Ov0hhbKxbU9uT44tR1dKzyR5crS766aOKJMXadQIO-NqvnF70VS8tn0ZBjzgDQqW5_NZDgyFjYFjauciOWaAH_vrLhdXw=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06749kzTTwmunb63zEIybLGGXvg_BbpFsRl4CoFjEMPCOmfHfPmTlrpyIl34Q_dY68gjDOMNWFU1ybPN1OmdY_0xwYWspcZhyNKR3fySD_qaEQO95h-O8-b82fdNTE6A7XPtgZew=w244-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18jxCkfMQ0oyn1nimUEeTVGy4qN_YJsn84qxfH7sCEKBGjQyvdwgfiktbrLB_Yt1W6A2W1rY9L2QSkfmM6AZOnMwUlXMAMiBMjdncTJ5eSd4pOC1CY90MnwBjpdPDTQtLy_WTL5g=w377-h283-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hfQW1qx4WBMMV2tTuJNdxx_Offsfgetyqu_DghJzQdBeCm7YFuaheg1L8yQ8EPz-F-jmPeeeni7JM4f4TXcDqpanveoDiQtQiHhQzd7hRhwq9IwnIDut9uBEOWH5KXSUJ2-2Hdw=w256-h256-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Paquete Nro. Nombre del Caso de Uso
Objetivo/Breve descripción Actor
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
Roles de usuario principales
A continuación, se describen en términos generales las responsabilidades de los roles de usuario que se vincularán
con el software:
Usuario
Rol de Usuario que quiere utilizar la app desde su Smartphone, para lo cual deberá crearse un usuario de servicio en la plataforma.
Usuario Servicio - Miembro
Persona que va a utilizar la aplicación para escuchar los audiolibros.
Está familiarizado con el uso de Smartphone y puede instalar la aplicación.
Administrador Plataforma de Libros
Persona de la empresa que va a configurar el aplicativo y gestionar los audiolibros disponibles.
Debe estar familiarizado con el uso de aplicaciones WEB.
Requerimientos No Funcionales Nº Nombre Descripción Característica
Según ISO 25000
SPA Prioridad Justificación
1 Aplicación Mobile
La app debe poder ejecutarse en dispositivos móviles con acceso a internet.
Compatibilidad Si Alta La funcionalidad para el usuario final se utilizará en dispositivos móviles, por esta razón es requerido este RNF desde la primera iteración.
2 Sistemas operativos
La aplicación debe ser compatible con los sistemas operativos móviles IOS (8 o superior), Android (6 o superior)
Portabilidad Si Alta El lenguaje de desarrollo de los módulos Mobile debe ser compatible con los sistemas operativos móviles solicitados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv273hlgOQJxfpbeBCpP-RnOx7OQYk2R464dHolIzypUat-_MC9az0rTOXyGANEMbuIYyx8S2M0tjRn1JwFOkg5H1eC7mjllCcYQyA9WkE0Iu2Xzbw32IqlhgoLgrAa_94tvWzeS=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LwTpPXxSxNbpsldSiBQ8sODfFP5hVdIWUlrpkWneX4VPzL5lLA6rff5BvRIFWJKZRhrYCGMn_84AA-rNUfNJVYxRsPssxDBBUYoob6uXQEQ-NjtQS0JfPRQWtn5k4VfK5av5k0A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SsRpcWwWiFL_YDVVzcZ3-2p7KmndAcpkKwufpFQa0n2VlDDIGSzwIriUG3iCb5oGw5ETZoMS3xFVPf7_eoSQCwP6Aj5kk3MMYC6B_GVPzzMn9-CZvzRo7oETkd4zF0cPeL1SbwQ=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Nº Nombre Descripción Característica Según ISO
25000
SPA Prioridad Justificación
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
6 Seguridad de servidores
El sistema deberá ser desplegado de manera segura y resguardando los datos de posibles accesos malintencionados.
Seguridad Si Media Requerimiento de seguridad lógica significativo para la arquitectura, se deberá desplegar los servicios aplicando el patrón Múltiples servicios por Host, facilitando la protección, la integridad y la seguridad.
7 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos
Seguridad Si Alta Requerimiento de seguridad lógica, significativo para la arquitectura, implica desarrollar un módulo que permita autenticar usuarios y controlar las sesiones (que cada usuario tengo una única sesión activa por vez, la duración de las sesiones inactivas, entro otros aspectos).
8 Característ icas de contraseñ a
La contraseña de cada usuario debe tener al menos 8 caracteres e incluir al menos una letra mayúscula y un número
Seguridad No No significativo para la arquitectura ya que se resuelve funcionalmente a partir de la validación de estas características
9 Envío de notificacio nes por mail.
El sistema debe permitir enviar notificaciones por mail a los usuarios de la app.
Compatibilidad SI Media Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail es necesario un servidor de Mail como Exchange.
10 Notificacio nes push
El sistema permitirá enviar notificaciones push a los dispositivos móviles de los clientes.
Usabilidad Si Media Desarrollar componentes que permitan resolver el envío de notificaciones a un grupo de clientes en particular.
11 Cobro de suscripcio nes
El sistema debe proveer interactuar con los sistemas externos de las Administradoras de Tarjeta de Crédito (ATC) para el cobro de las suscripciones
Compatibilidad SI Alta Debe desarrollarse un componente web service que resuelva la comunicación con las ATC
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oweisMp4FEvkITdzElZ8axShuuK2japJfTX97A_GdobVRVb1D6xCy_8x2dORmnQvC1vdE-I4lEMuTBF1keYRmMLBciNKXCxIPrRCYaAdbjWunuyeI9uyLNlp8a7uww14ThYOdTg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18QSJKqphTBaw4YjmFy6sq15zqfF5K4fh8IcnB4LZdyFG9B0GHPEjKJ5Tt_-L2FUuax76GMmb5m2AuHbR2bvyZ0Je1Sp0vHMH6XCJOdspfvraIGG9XrbAbW52ZaFVO5Ke5hGa51g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hxT_GLIzwk-rGBmO65UbNJ1DG-xewNYlvB6nf1IyNlpLlzVnJrLukLNzPl-wwnxS9KLqutcUP6pATrAIraLpSER2f4Ef2SzU4z7BRGw-bd_Flb9JbieQfAxbr8HeUU7Ua5mCi=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1p7mWLD7jth8V8-nz3Zhz6hhwneBJ76r7biV5op67Q9O3SpFZ-r0p2hLJgix-DloxrKwjxpmHhCC9E7pNh2mO_x5blBEumqwSz_AsKe0CuBEaCaQJPw_ZpBFrAsM4OdV-_ogRb=w1107-h494-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MuBOQ7Rd8Xj8jB5h8sXQOC2RtSZYfq6VaAxflPhWZ8mkNCqaHslqh_5fPeGz1vtKVgvZC09py05h83YEF8XttZ5kwlOs-ZrKA-IL0h5ti2qhThhG18XCnm2InD5JCok4daRTvQA=w1280-h635-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Solución Propuesta Descomposición del dominio del problema:
Vistas Arquitectónicas:
Vista de Funcionalidad:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FFlm20Et1AxH9NPnUHJj_bVploea8b1xcAS4uxhQrGc2vT3326m8y9RBO8-lqod1SrfMlRDPkB1GRH4FTLWya_K8xkNct913YLgni6ZclFGshc_4h6yhooZ3SlYf7TzpaZO7w0Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tfD9H4Jkhv2LpBMuQ9mapihn2F6DEs1PUoQjfk-CRyM92TMN3DA5vO6Xx7r6EnWCVYiEDKNlfBQDU585W6GynSon-lKNjCl-aKm48jTH2NWjvTTqg8xl1etrcIh5Oo97FFt3MtQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Z_y56HfjXk3bYgvYvAdxmi8-EgyF8L2X40Xjmjp7QeCEqYz2TrJ-QVl9QaxvinfiIJQd6Sw5Ta3O2gXNPI9o8NgQEcAWj0CG-ZOtXPrlBlBtTD7-bDkHKvjwVUPJO5PX4285m=w175-h250-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Justificación de la elección de cada caso de uso
Casos de uso Justificación
14. Registrar tipo de membresía 15. Consultar tipo de membresía 16. Modificar tipo de membresía 17. Eliminar tipo de membresía
Representa un ABM de la plataforma web, en dónde se define cómo resolver aspectos arquitectónicos tales como forma de búsqueda, inserción y actualización de datos, visualización de datos, conexión de datos. Vinculado a los RNF3 Tecnología web y RNF4 Navegador web Relacionado también el RNF5 Servicio en la nube, ya que la aplicación se ofrece con Tecnología Cloud
27. Registrar pago de membresía Caso de uso que representa una funcionalidad que se ejecuta con el tiempo como disparador y desde el punto de vista arquitectónico es necesario definir cómo se realizará. Es una transacción importante realizada desde la plataforma web, además está Vinculado al RNF 11 que resuelve la comunicación con las ATC con las que se realiza el cobro de las suscripciones.
28. Iniciar sesión Caso de uso afectado por el RNF7 Seguridad de usuarios. Se debe resolver el problema de seguridad de la información en la sesión, y la visualización de datos y preferencias en función del usuario logueado.
32. Comprar audiolibro Transacción ejecutada desde la app por el usuario de servicio, dónde se establecen aspectos arquitectónicos vinculados a definiciones respecto al control transaccional. En esta transacción se realiza la compra de un audiolibro, utilizando créditos disponibles o pagando el precio establecido, en este último caso se vincula con el RNF 11 que resuelve la comunicación con las ATC con las que se realiza el cobro. También está vinculada al RNF1 Aplicación Mobile y RNF2 Sistemas Operativos. Relacionado también el RNF5 Servicio en la nube, ya que la aplicación se ofrece con Tecnología Cloud También este caso de uso se vincula con el RNF6 Seguridad en servidores, ya que el sistema deberá estar distribuido en diferentes capas y la app sólo se comunicará con la capa web y está será la encargada de brindar servicio a la app, pidiendo servicio a la capa de lógica de negocios.
36. Escuchar audiolibro Funcionalidad que implica resolver los mecanismos para reproducir el audiolibro de acuerdo con las preferencias del usuario del servicio. También está vinculada al RNF1 Aplicación Mobile y RNF2 Sistemas Operativos.
41. Enviar notificación a usuarios del servicio
Vinculado al RNF9 Envío de notificaciones por mail y RNF10 Notificaciones push, ya que implica enviar la notificación al usuario de servicio a la app y a la dirección de e-mail que tenga registrada.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kCegrmhVPQt34AtKWOsltpTfrCTpa7N3S1M0cah2ZOV6DxYWCWZllticH0MYf3XdnIBG88804_uvlD5zagrL7wtRsH-yjLjCJn7libHsXojbquqrCDwLZyEbHWGoNkk1o-8Nddg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zLvu07_qUdrLg33ikb3s1n7696g2DkmSRwWFnAljcQW3tuo0PcQhO8d6QXFumwFFtk3RWU_4cVTUAlM9aC9HPByYBpLGNPZ-IbveWKaD4nXW5yZFk5JXFZTXtbwjXc0UB3r1JEw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VoIQrj7RQ_vR2eFMUbgoX2jNvRCesr6o_Xu0j1LyejO2uojPk7Li4EIhnhPSt87LLMFrBtbmBn7bMSiMMERuHE02-x9aCrgMpcwe4y-feeyS4jIsKSreFWhYhWBdpVxQY2V87-A=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv188w50TPL_CuQdpRFINl-b2DrFK-MHz3YFw-Eu9rqsSvsqe15votQfpfxLKq8QvQv6GCjuPntYjdW9Y3JU6tGsHOAa7Xj1sj_Ei7_3GMl_gsU9YcO3XybiEl-P4G2GGArMSz2KeQ=w1196-h1280-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Vista de Diseño Global
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jTnQ03YezslMJAMRjVgPgpRBD2WTC0y8i1x6zoW9hT7A7I9fSEH-AO4RT_LBG2p1SfghHNkAbsbcXwUH84suZkYFGJ5HtVceTW_-4NcuM2BwJAbbIrW7JphZEH8b-nNl2F9ihhQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pqkE5oJ1ut9eZgAvo-z9tz55DGfvpQjUBSzCoRN7cYPmFpBnUxuBAliaXJAe4O7MeFCNNrbVRAPqeTsRYpdr9QczeJWBYpjfiuvD-szvnIyD_DkgVlmX8UkhSXBp6OT-yXw6YpA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Fft1PaDOoWT_7RBP81KzCljY-bt9Bz9sWJTgTpVwLSSxHQPwoZ7zmtiSn29lFKDRGZ0jU8ajzUXZqqvU0LRTsRtC6ar2YhpmZtder_6dO1kJnZM3oddMwqHVxidGF505dFIXvXg=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hv4n-gYo-RFWpMKAzA32IoT9t9LotnSivcdc9xJADGelzDq93YfZtZNs9pqMqnN7YbolQnFRn3y9uBg-v4LkUUPP7j6K9EuQOaGawBnsv3SLmkGwizV6IlPPOlhJBtIKKYExu9g=w1280-h741-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Vista Arquitectónica de Diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03zPojhixSWWpfOIEQKLzOi5TegaKt1YTpgvt6jSQQGS4_59dbj-M9Sch32W_Db93XUuP3AgcW26tcc9D_g8omUEtYswRtdtbLrHOFh0i49RO67zg-nsF-hvxLxaJHSnj42ZpaoA=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_1wozoTIaslbF9DPtkHi3GCsmMggGO1GcRgyK8zx0DlEOcHVEFiVODq4_Ma5lxKHAY3DBjaXkLeFPxqMonTh0yl-Jgt7vqnUTuQV1h7Z-pKGXWSO0Xmye5dvS89lrIMsu5nU3VQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zv1FxrndUy1-_oeE5h_4Uug9ZNZndV9hdlHF2rfQiyJOTvf6N0lMPtIxovJYhlha05qk6hAA4CLtS8NCQBEpn93WZbFhrMPTk7nJN_4pzM5QD9Foa_I_K-lQGNuXnHwI2FYTRhA=w175-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PWQeuOBHQnDjWxIqz--jOgtTV0qQPoQ9FzHx5VfOsfIQ08EzezfYMNzgrIfoZJgOFPqYHPzt6iuXz0SnZQTy1T1m3QE7EfC1L2RHbVMMYpoQiuWhHeUeH1t9dV85CsS8WzZYPiA=w1147-h1280-v0?authuser=0)

### Caso de Estudio: Audiolibro Arquitectura de Microservicios

Vista de Despliegue
Patrones de microservicio aplicados: Descompose by subdomain: para la identificación de los servicios. Database per Service: para estructurar los datos asignando a cada servicio su base de datos. Backends for Frontends: para estructurar el producto y como los servicios interactuarán con los clientes. Multiple Servicies per Host: para realizar el despliegue de los servicios en la nube
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12IfnpTYZBSHBvwGN2sfjVVJ47sdbWcw_WFKuS8gL_OH0CjA5WgSzHsSg0mehPBUt4uUA_USGOnSb5aiAW-4AT8bLpdKEVQ9uYXg_3zJgoWtoOs1PJaV8EcR4Lr-Am-bqYgYnqCA=w839-h1187-v0?authuser=0)
