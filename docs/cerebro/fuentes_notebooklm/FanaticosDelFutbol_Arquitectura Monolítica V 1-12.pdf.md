# FanaticosDelFutbol_Arquitectura Monolítica V 1-12.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta la 
arquitectura de software de la aplicación Fanáticos del Fútbol (APP FF)
, diseñada para conectar a los hinchas y socios con las actividades de su club deportivo. Su propósito principal es detallar tanto los 
requerimientos funcionales y no funcionales
 como los distintos 
roles de usuario
, incluyendo administradores y miembros del personal que gestionan contenidos, sorteos y solicitudes de membresía. Asimismo, expone el 
diseño estructurado en capas
 y la 
distribución de hardware y despliegue
 para garantizar la correcta comunicación entre plataformas móviles, interfaces web y servicios externos como pasarelas de pago y proveedores de datos en tiempo real.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mrPDZg1xUNpSlHp0l6xAmdvsbvU-Xl3OCJX-wSnBjw_y_qEi0m2s_SBX2weDLx0Yrw4FW08iYH_xGmFbiCKDgvcD9L5sVhgvL9cPSF8LWHu_YFXiRcytuEOsUE25QNCNEJFYyMw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QHPnvaoHDwckK4dvHJvMtSPyDo3ZMSa7aBqeb7n3M2Ls-9s5dkjSu-IJyx4BstZVdCzYikdkt-NFHtMh6DRjT3pOtPT6ucgTVeKCN6Esm-f_06jooQlgQlh5U8XUZluj6C98ybA=w225-h225-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lQGeCMJwzNYMFrJPtnrawSAw3WkoymIhC204EDjKeYMBFvY4L6_-wIYzWpcpIZ--1qFzvQvM3ZGTGVB0UIm6h2Am1REjY0kHXRo8z4axoHGXMzcdfXjuEXth-YH8RNHloxTbu=w194-h259-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PtisOTmJvi1ZhbXx2J8fKGEOED_iCg_YePHRg635wx-vteCH_VZ95QteIbfZWYphDMtPF7ctb-KdShZThugcgOp9KRP1SwwbdTgECGvWKsPy15RMI3gn9GXqtaNXgy6uMmTDS=w183-h275-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 1
Considerando la situación planteada, se pide construya las siguientes vistas arquitectónicas:
a. Construir la vista arquitectónica de la funcionalidad utilizando un diagrama de casos de uso. Justifique la selección de los casos de uso incluidos.
b. Construir la vista arquitectónica del diseño, utilizando un diagrama de componentes para visualizar los subsistemas, componentes e interfaces.
c. Construir la vista arquitectónica del despliegue: hardware d. Construir la vista arquitectónica del despliegue mostrando la distribución de componentes en Nodos,
utilizando un diagrama de despliegue.
Aplicación Oficial para un Club de Fútbol: Aplicación Fanáticos del Fútbol (APP FF)
Un importante club desea contar con una plataforma de comunicación que le permita aumentar el número de socios y acercar sus socios/hinchas a la institución. Los principales roles de usuario para la aplicación se muestran a continuación:
Hincha
Rol de Usuario que quiere utilizar la aplicación desde su Smartphone para asociarse al Club, para lo cual deberá subir documentación personal y eventualmente pagar su solicitud de adhesión. También recibirá mails con información del estado de su solicitud de adhesión y con el comprobante de cobro en caso de que la solicitud de adhesión haya sido aprobada.
Usuario de App FF (Fanáticos del Fútbol)
Socio y/o Hincha del Club que descarga la aplicación para acceder a las noticias y beneficios que está la brinda, desde su Smartphone. Si está asociado al Club podrá acceder a mayores beneficios en los sorteos y a descuentos en comercios adheridos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RNtil2gxgv-T763GkAC1U0Y9CQhvadSjwDGBzqhoMsL9ERpBY9CbXUgIlP4srS4WWpWPvrA2YaHoiP53-wYc0H3JBRnpry8k5fuZAQBC8S2mmWm23zpTAe9R9Jk8_sht2tyckrQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Lsx4h9-cdAUnVAEwbVJP-VmJNynEY2nzM5zk0rgjuFkwi8pAmEVpU5l09eaQoGw_PBmUOYkO9iTlTaXvJLM90GK_pGelvKV1e-_opmvldtmYXCnvRP7smxGn7FCIno036nGg0UQ=w264-h173-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25v4RM7AD8DMEmoRC-rrhu_GG1Fnv8R1UCYUknaQDY39JuJAvytttJSizSXMMAoobISLJ4sMHASBU3xeZYowX23_hehpT4dr7ZFP25l6Ytaj6WSJu7GSgAl0aXqJFAFcu5ZhLg=w169-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eUGwm82Tal8enjsVu1uQkrzhEwkCCO9VqRxUrYl-nKFZvKfVUp7bxYTTWdYXcgXhVebd8zuLEtWYPVaWeTgg53N6XFflRJ5Rhrc7bNl4kX2WXafY-q1UNSDKu1jpFZw0pIC-FyA=w229-h220-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 2
Responsable de Socios
Rol de Usuario responsable de la evaluación de las Solicitudes de Adhesión de los Hinchas que desean convertirse en socios. También de la administración de los socios.
Debe enviar las notificaciones con los resultados de las evaluaciones y el comprobante de cobro para que el hincha pueda completar su trámite de asociación al club.
Administrador del Club
Rol de usuario responsable de administrar los campeonatos en los que el Club va a participar, como así también de los clubes con los que jugará.
Administrador de Redes Sociales (Community Manager)
Rol de usuario responsable de administrar los beneficios que el club ofrece a través de la aplicación y de administrar los comercios adheridos en los que obtienen beneficios dichos usuarios y la administración de los sorteos. También será responsable de la publicación de las noticias del club y de los eventos del minuto a minuto de los partidos que esté jugando el club.
La intención es que el usuario de la aplicación Fanáticos del Fútbol (APP FF) pueda acceder a todas las noticias del club por esa aplicación antes que por otros medios, seguir en vivo los eventos de los partidos y disfrutar de cientos de beneficios exclusivos, como accesos a entrenamientos, sorteos de entradas preferenciales a partidos, fotos con el plantel, camisetas firmadas por los ídolos, descuentos especiales en comercios adheridos, entre otros beneficios exclusivos, sólo disponibles para quienes integren la comunidad virtual del club. Los usuarios de la APP FF podrán visualizar un catálogo de beneficios de descuentos que el club ofrece. Estos beneficios pueden ser 2x1 o un porcentaje de descuento en algún comercio con el cual el club tenga convenio. Por ejemplo: 20% o 30% de descuento en indumentaria deportiva, o bien, 2x1 en entradas para un recital que se realiza en la cancha del club. Cabe destacar que algunos beneficios son accesibles para todos los usuarios de la APP FF y otros únicamente para aquellos que son socios del club, por consiguiente, es necesario que se indique en cada beneficio para quienes está dirigido, es decir si es para cualquier usuario de la APP FF o sólo para los usuarios de la APP FF que además son socios. Con esta herramienta de comunicación el usuario de la APP FF podrá seguir a su club desde su Smartphone en cualquier lugar del mundo en el que se esté y vivir desde adentro toda la pasión por su Club y por el fútbol. También, podrá en la misma aplicación, asociarse al club. El hincha podrá asociarse al club completando un formulario de solicitud de adhesión al club, con una serie de datos y adjuntando una foto carnet 4x4 y una fotocopia de su documento de identidad. El Responsable de Socios revisará los datos proporcionados y las imágenes adjuntas. Si detecta alguna anomalía, rechazará la solicitud o la devolverá al usuario para solicitarle que adjunte alguna información o corrija algún dato. El Responsable de Socios ha manifestado su necesidad de mantener información de cada cambio de estado realizado a la solicitud, y de notificarlo a los involucrados, que según sea el caso serán el hincha y/o el Responsable de Socios. Si todos los datos de la Solicitud son correctos, se generará un comprobante con el costo de asociación que el hincha,
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gjat1Sxu-5fGx4BHpEscGHnuEQ3aSwoBorCbU6Or9zUGDpP2iImG-NTD3XoLTTQohwqOUat5S39z2z-w1mz_5imqQxaBCo9kc4EuRbJoJGsBYise8P89XV-ZIrU2mfizpoqRvvw=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 3
futuro socio deberá pagar, para poder completar su trámite de asociación. El hincha tendrá 72hs para abonar el comprobante de inscripción generado, por cualquiera de los medios habilitados. Las modalidades de pago disponibles para los hinchas serán dos: una en línea (on line) (significa que puede pagar desde su dispositivo) y la otra fuera de línea (off line) (significa que el pago se hace en una entidad que luego deriva la información por algún medio al Club). Para el caso de cobro fuera de línea, diariamente las entidades que trabajan con esa modalidad envían la información de los cobros realizados. Una vez transcurrido ese tiempo, si no se informó el cobro, el comprobante de pago y la solicitud para asociarse quedan anuladas. El responsable de la gestión de las noticias, los beneficios y los sorteos, es el Administrador de Redes Sociales (Community Manager). También será responsable de la publicación de los eventos de cada partido (inicio/fin de primer/segundo tiempo, goles, tarjetas amarillas/rojas, cambios, etc.) en tiempo real. La administración de los campeonatos y clubes contra los que jugará el club, los diferentes partidos, será realizada por el Administrador del Club. El club ha informado que cuenta con un servidor que podrá utilizarse en forma dedicada para la base de datos y otro donde se instalarán la capa de aplicación y la capa web.
Listado de Casos de uso Este listado si bien no está completo, describe parte de la funcionalidad que será suficiente para comprender el alcance de la aplicación.
Nro. Nombre del Caso de Uso Objetivo Actor
1. Registrar campeonato Registrar los datos de un campeonato de fútbol en el que el club va a participar.
AP: Administrador del Club
2. Modificar campeonato Modificar los datos permitidos de un campeonato de
fútbol
en el que el club va a participar.
AP: Administrador del Club
3. Consultar campeonato Consultar los datos de uno o más campeonatos de
fútbol
en los que el club participó o va a participar
AP: Administrador del Club
4. Eliminar campeonato Borrar los datos de un campeonato. AP: Administrador del
Club
5. Publicar noticias Publicar para los usuarios de APP FF noticias
relacionadas al
club y enviar notificaciones a sus dispositivos móviles.
AP: Administrador de
Redes Sociales AS: X
AS: Instagram
6. Visualizar lista de noticias Mostrar la lista de noticias disponibles en un
momento
determinado.
AP: Administrador de
Redes Sociales
7. Consultar noticias Consultar los detalles de una noticia publicada. AP: Usuario APP FF
8. Iniciar sesión Registrar el inicio de una sesión en la aplicación por parte de un usuario registrado, validando su password y permisos.
AP: Usuario
9. Cerrar sesión Cerrar una sesión en la aplicación. AP: Usuario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BMIQz6E_DR9YDNKh8uFlYGUStLDWkNNRvMVrJgEjZk7WWag7Lw1fVed2_T4CKut1pjSQ0zZQZrrJVuUiuSuyqcyldI5TmxLHXJOC6n6lbDQSTKISg15hWIamS4qAHWUY6eWnd=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 4
Nro. Nombre del Caso de Uso Objetivo Actor
10. Cambiar password
Registrar el cambio de palabra clave por parte de un
usuario de la aplicación.
AP: Usuario
11. Registrar club
Registrar los datos de un club de fútbol contra el que
nuestro club jugará en algún campeonato.
AP: Administrador
del Club
12. Modificar club
Modificar los datos permitidos de un club con el que va a
competir nuestro club.
AP: Administrador
del Club
13. Consultar club Consultar los datos de uno o más clubes registrados en la
aplicación.
AP: Administrador
del Club
14. Eliminar club Borrar los datos de un club. AP: Administrador
del Club
15. Registrar solicitud de asociación a club
Registrar el pedido de asociación de un hincha al club, permitiendo adjuntar la documentación requerida (foto y fotocopia del documento de identidad)
AP: Hincha
16.
Evaluar solicitud de asociación
Validar los datos ingresados por un usuario para asociarse al club, registrando el resultado de la validación que puede ser positiva.
AP: Responsable de Socios
17.
Notificar actualización de solicitud
Enviar emails al Hincha y/o al Responsable de Socios, ante un cambio de estado de la Solicitud de Adhesión.
AP: Responsable de Socios AS: Servidor de Correo
18.
Enviar comprobante de inscripción
Generar y enviar al socio el comprobante con el costo de asociación para ser pagado.
AP: Responsable de Socios AS: Servidor de
Correo
19. Anular Solicitud de Asociación
Controlar solicitudes cuyo cobro no se ha registrado y anular el comprobante de cobro y la solicitud de asociación.
Tiempo
20. Diagramar fixture de
campeonato
Registrar cada uno de los partidos en los que el club jugará
en un campeonato ya registrado en el sistema.
AP: Administrador
del Club
21. Registrar Sorteo Registrar los datos de un sorteo que se realizará entre los usuarios de la APP FF que decidan inscribirse para participar.
AP: Administrador de Redes Sociales
22. Modificar Sorteo Modificar los datos permitidos de un sorteo que se realizará, antes de llegada la fecha de sustanciación es decir de hacer efectivo el sorteo.
AP: Administrador de Redes Sociales
23. Consultar Sorteo Consultar los datos de uno o más sorteos según criterios
predefinidos.
AP: Administrador
de Redes Sociales
24. Cancelar Sorteo Cancelar un sorteo para impedir su realización, debe ser
antes de la fecha de sustanciación.
AP: Administrador
de Redes Sociales
25. Registrar inscripción a
sorteo
Registrar la inscripción de un usuario de APP FF para que
pueda participar de un sorteo vigente.
AP: Usuario APP FF
26. Calcular ganadores de
sorteo
Obtener ganadores de un sorteo en particular, eligiendo de
los usuarios de la APP FF que se inscribieron.
Tiempo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2O2tJW7ytFjPbRn5VnzpdWh3LNSvz69SEewfN0Op1ITKfOckepASokAekS1LM0k8fWgzL45ci2c0HpU7huL9i_cLPM8Z47Q5pi9j_6QF06VvSxnyRTr6YXQxMMNeXjzKY2OMadnQ=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 5
Nro. Nombre del Caso de Uso Objetivo Actor
27. Importar minuto a minuto Importar en tiempo real la información de los sucesos de un partido jugado.
AP: Servidor Data Factory
28. Visualizar información de
sucesos de un partido
Visualizar los eventos importados relacionados a un partido
en el que el club está jugando en ese momento.
AP: Usuario APP FF
29. Registrar beneficio Registrar los datos de un beneficio que se ofrecerá a un
usuario de la APP FF, ingresando las características del beneficio, el comercio adherido si aplica, si el beneficio es para todos los usuarios de la APP FF o sólo para los socios del club o si el beneficio es diferenciado, por ejemplo 10 % para usuarios APP FF y 20 % para usuarios de la APP FF que además son socios del club.
AP: Administrador de Redes Sociales
30. Modificar beneficio Modificar los datos permitidos de un beneficio que se
ofrecerá a un usuario de la APP FF.
AP: Administrador
de Redes Sociales
31. Consultar Beneficio Consultar los datos de uno o más beneficios en función de
criterios predeterminados.
AP: Administrador
de Redes Sociales
32. Anular Beneficio Anular un beneficio dejando constancia de la fecha de
anulación y el motivo.
AP: Administrador
de Redes Sociales
33. Publicar beneficios Poner a disposición uno o más beneficios registrados para
los usuarios de la APP FF y enviar notificaciones a sus dispositivos móviles.
AP: Administrador
de Redes Sociales
34. Registrar Comercio
Adherido
Registrar los datos de un comercio adherido que estará
vinculado con algún beneficio que ofrecerá la APP FF.
AP: Administrador
de Redes Sociales
35. Modificar Comercio
Adherido
Modificar los datos permitidos de un comercio adherido. AP: Administrador
de Redes Sociales
36. Consultar Comercio
Adherido
Consultar los datos de uno o más comercios adheridos en
función de criterios predeterminados.
AP: Administrador
de Redes Sociales
37. Eliminar Comercio
Adherido
Borrar los datos de un comercio adherido. AP: Administrador
de Redes Sociales
38. Registrar Noticia de Club Registrar una noticia relacionada con el club, que luego podrá ser publicada para que los usuarios de APP FF puedan verla.
AP: Administrador
de Redes Sociales
39. Registrar Entrega de Premios y/o beneficios
Dejar constancia de la entrega de un premio o beneficio al usuario de la APP FF que salió beneficiado, registrando sus datos y la fecha de entrega.
AP: Administrador
de Redes Sociales
40.
Procesar comprobantes de cobro
Proceso responsable de la actualización de cada uno de los cobros de solicitudes de adhesión realizados por los hinchas en entidades de cobro fuera de línea (Rapipago / Pago Fácil)
AP: Administrador del Club
41. Registrar Confirmación de
Cobro Inscripción
Registrar confirmación de cobro de inscripción a través de
sistemas de pago on line. (Mercado de Pago) AP: Mercado de
Pago
42. Registrar cobro de
solicitud de adhesión
Informar el cobro de la solicitud de adhesión al club. AP: Hincha
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vWJgf8TgxIy6Ng6lpV01JmR7Blptz7Pwbkl-KN91yE5qgSxuIehbHDH2JVDj6PGKWhKzauotC6EfqlK5m949W3ItSoQPv3kD3w91YqeJOGwbdgRir3NRW-sDFQefqJh2jq8Ye=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 6
43. Modificar Socio Actualizar datos permitidos de un socio registrado en el
Club.
AP: Responsable
de Socios
Nro. Nombre del Caso de Uso Objetivo Actor
44. Consultar Socio Consultar los datos de uno o más socios en función de
criterios predeterminados.
AP: Responsable
de Socios
45. Enviar notificaciones a usuarios de la APP FF
Generar e enviar notificaciones sobre las noticias del club, sorteos, beneficios y también sobre los eventos minuto a minuto de los partidos que juega el club a los usuarios de la APPFF.
Tiempo
Requerimientos no funcionales
Nro. Nombre Descripción SPA Explicación
1 Autenticación de usuarios
La aplicación debe tener un módulo de autenticación de usuarios, que permita su administración y la asignación de permisos de acceso a las distintas funciones de la aplicación
SI Este módulo de seguridad afecta la arquitectura ya que debe controlar el acceso de cada usuario únicamente a las funciones y los datos a los que tenga permiso, cuestión que debe considerarse desde el primer momento.
2 Password Se deberá requerir un password al momento de la creación del usuario, que tenga entre 8- 12 caracteres alfanuméricos. Comenzando siempre con números y no aceptando cadenas consecutivas, por ejemplo: 123 o abc.
No Se define como parte de la política de seguridad para la aplicación las características que se validarán para los passwords definidos por los usuarios de la aplicación.
3 Lenguaje de programación sin licencia
Deberá utilizarse un lenguaje de programación de software libre que no tenga costos de licenciamiento.
No Es una decisión de negocio que debe ser considerada, aunque no impacta en la arquitectura del producto.
4 Módulo Web La aplicación tendrá parte de la funcionalidad, específicamente los módulos de administración que utilizarán el Administrador del Club, el Responsable de socios y el Administrador de redes sociales, que deben ser desarrollados con tecnología Web.
SI El Lenguaje de Programación a utilizar deberá soportar desarrollo web.
5 Módulo Mobile La parte de la aplicación que utilizarán los usuarios de la APP FF debe desarrollarse para tecnología mobile. Compatible con Android e IOS(Apple).
SI El Lenguaje de Programación a utilizar deberá soportar desarrollo mobile compatible con los sistemas operativos indicados.
6 Cobro Online El sistema debe proveer una interfaz para realizar el cobro a través de las redes de Mercado Pago (Sistema de Pago Online)
SI Debe desarrollarse un componente que resuelva la comunicación con las redes de Mercado Pago.
7 Cobro por Rapipago y Pago fácil
Se acepta pago a través de estas redes para lo cual el sistema deberá procesar archivos .txt provistos por estas entidades para actualizar los cobros realizados.
SI Debe desarrollarse un componente que importe a la aplicación, la información de cobros realizados por Rapipago o Pago fácil que son fuera de línea.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kRMQRXUHq356H5b95h3hoxQa6aZtQUKObuSOp70QOg_N1hmSjP_XveHgX4kmiUQspdItI1S7Fq35IsJCsTuM7MgBXPObxtay0ov7LdUJxEY7cJlCgxexe5g0evi93F8jGzKuM=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 7
Nro. Nombre Descripción SPA Explicación
8 Envío de mail con comprobante de inscripción y pago
El sistema debe poder enviar los comprobantes de inscripción y comprobantes pago generados por mail para la opción de pago diferido o fuera de línea adjuntos en el mail
SI Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail es necesario un servidor de Mail como ser Exchange o Mercury.
9 Formato y tamaño de adjuntos
Las fotos carnet de los socios y la fotocopia de documento de identidad deben tener formato jpg, .png o .gif y no pueden superar los 50 KB.
NO Al no superar los 50KB las imágenes se guardarán en la misma base de datos como un campo más y será utilizado por el componente de HTML, sin afectar la arquitectura de la aplicación.
10 Importación de eventos del partido
La información en tiempo real de los eventos de cada partido que juegue el club será contratada a la empresa Data Factory que es la que registra, minuto a minuto, los sucesos de cada partido jugado del campeonato y los disponibiliza en tiempo real a través de un servicio web de arquitectura API Rest
SI Debe desarrollarse un componente encargado de comunicarse con la API Rest de Data Factory para tomar la información de los sucesos de cada partido en tiempo real e importarla a la aplicación.
11 Notificaciones push
El sistema permitirá enviar información sobre los eventos del club, noticias, beneficios, sorteos y enviar notificaciones push a los dispositivos móviles de los clientes.
SI Desarrollar componentes que permitan resolver el envío de notificaciones a los dispositivos móviles de los usuarios de la APP FF.
12 Publicación en redes sociales
El sistema debe permitir publicar desde la aplicación en las diferentes redes sociales (Instagram y X) las noticias, beneficios y sorteos, así como los diferentes eventos de un partido en tiempo real.
SI Se deberá desarrollar una interfaz de software mediante diferentes APIs para publicar en las redes sociales los distintos sucesos (noticias, beneficios, sorteos y eventos de partidos). La API Rest de publicación de eventos de un partido debe considerar el asegurar que los eventos de se publiquen en tiempo real.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aJkr4OoAoKgBdyMZ3NfFSACb7SWidlKcnaCtImpW0d4XWMGN44SUcIg1Rzx3R4MtKBb_vttORaM5pIK40cKdSpzio9pwuw1-nzbmWvPtDqgQKMj9_okDcqYTJHW_1K2Pmw6kBSQ=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 8
Solución Propuesta
Aplicación: Se utiliza el patrón para organizarla implementación de este sistema en capas de servicios auto-contenidos, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable.
Motivación:
Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios de
código a la capa a modificar.
Reutilización de servicios brindados por la interfaz brindada por cada capa.
Mejorar la portabilidad. Los cambios de hardware, del sistema operativo y todo lo que afecta solamente a
una capa, se puede modificar sin alterar al resto de las capas.
Capa Presentación Web Capa Presentación Mobile
Capa Servicios Web
Capa Lógica de Negocios
Capa de Persistencia
Capa Administración de Datos
Aplicación: Se utiliza el patrón para implementar la App Fanáticos del Fútbol. Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de la arquitectura.
Motivación: Dividir el sistema en capas que se comuniquen entre sí únicamente con las capas continuas, disminuyendo el acoplamiento y aumentando el encapsulamiento en cada capa.
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad requerida.
Posibilidad de utilizar clientes Web livianos, que no impliquen instalaciones de software sobre el hardware del cliente y por consiguiente, no demanda requerimientos adicionales sobre el hardware.
Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y extensibilidad del sistema.
El patrón presenta una solución arquitectónica para toda la aplicación.
Arquitectura en Capas (Layered)
Patrón N-Tier Client Server
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MRpyB5jHC8iiX3gWIQv0ye8XIQg33ilCUBlI4DB7fXLbvL0kyvyqLDXKD9DZf-uLifoYMcLJoKO0Zio8UUiJR-Bcs77mbx8ZgFPFPQG1LSya38FvSVL4jvd8KnkMae8CH5XhISA=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hObcMx4c0h5gBbmq0esEAJX6HPZq87pnLQP4AF6C6CqsRc0yZQwMxY1N-uLEl6EG9RYKnMA6DqhwjIFD_p-7k1Xq-Eo8RZVYmevYQbYuQdYWaP2FEwEejkPmCfBJW5Z2fWu5H_A=w957-h527-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MEOhLrtpDZg2Aeq_xYEbkjBnUt2VPnzZDdsKMrTvUX9NDT4rPTEnO7mLi47z2yE2-zAueQIMuvaFE9gP_akX4wc29ZWkxPvnkB63k0OtKZ9vOJzLM9Rih1x8dA0mthZwClZEocg=w926-h41-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZYELJ2p9GqyUaHUOuIU_s3Q9MdPysk3L0Z3GN2ERwWDR0gM_CBHgctCLJYvDymnohT7WLetTuNR1Muqb6LdRXqlS_1IlstetfKkmbOlWShFiIbkvLIkyEZFXSyZgtKHY2tFLbPQ=w278-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Hv8weeN19KZXYzWSM7b743emT-6aIRUGqvP8JEaU4ACLFKd-iqiDrUS-hngksQtyhQ5SG4N3Wha0Pi1EAqVuLEI7vOlBi5sisTPzs_C2ztf_-BNuqPHDgC1-Fe_HN-yfJT1Px=w278-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BR_CrP6tZDzXOgduiueKTMWyarMuG_fUOAB33HujUC7PEZSNBQHVAaLCS60BgwEfqA8WfQnoQ4vRazO21FRAg1yozJWdBqfUcwVMwAuq_o1xFzjBamLi165FPcvEBgiEov_Jd=w304-h69-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3b_5g5A3LZ114yuaJP7hFt_gB-1t7ZVWe13HaOla12BSRHdCfoqfT7FRQU7gB4k5met9jFSbrp0V2-Qa-_EGaeosYdHeXnmWs9TKV8tVTvaPxh4Iitvb23wXXE6fqcxkSUfQPZMw=w920-h78-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GtrSPBRpXfNR7ixbl2ly2YBoXL-n00DlVZZ3Ym_r2B_XblQXt174sQuEk8tREPzBc4_Bu5vIZ_sDm7Rxo0y0pcWIdBYuExSF6wqN5VgfAUXex_q74vai_MB1eInzFrSdevqU_Sw=w920-h40-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33HsSPt6k1p1zZrHul8uWRYyL8RuI0K0X3tSPVYOWPIUFFmNzXOfavPQhodLr8woBbJdi4nkw6lh3QmhH8JcdMWpEg2sgLWXxweZvnMWiSvpAcqBbDNFPH0xLYkm9aNjUu1d8a=w1126-h385-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nZOnUhjCPF5zili1h3CfXR5qPjo7YpUsGUxC_BURHhZwqdsXcVBQCcHW6VkpqyljKzVaCB892NyPz7QWgIeg5q1-BNL1GD2fAqkoPXwFbR2lu-S0tRTk_zxtGRnK1g2KqcpgPfQ=w199-h116-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FYmwRA6Y5RDyCICiyfQ25uyddEmSN37lifBHmXIH5jm3YwdsxYqDpZ-TNajm6bauNIKB6y6rTHbO9ROofKG_4Ca58Blr2iQTFJYPHbT72_gmatHkAoP3oVLai6ptqIbs9UWWS=w368-h36-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UUIQCVQHUPXCOiHqfd7DUr5l049VdXAcBnp5yrWxjhL0dxPQtusQglN1W-Ydjpl9eKtEIXnwXMBs7RjA1Ge1E6QxOB-h7fqq6p4y7A6EHL3OKgkucAaLgAKKrJOqd6uDRSlIduA=w314-h77-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lgn_pctAtGNeS4RiEUq2iy_43jUMYKP2B8wKaesL7M9ubFYI-FRrvGme_rW0xYh0gXFj6dbz-ksrHMc0N-LhTe1_wNAl4Ft8elqKNk8RMHvpSnGP6G4lmaYp0vEgN5uGW1j4wJw=w251-h139-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BtJ-HUgPEt8kJGem7YN4wX7jGdKVs3JPSeHA41EE_QoUyJ8f9oQekMjG7npuKfMfz64SlAGszkhEbo1ZtIaelj4x-Q_WotoDdkvKxALoqU9BL6BWwTjq7RL20K20tKg3q57SG=w198-h98-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SDxn3cf47KJoAzwGcGSFox3psaSufVP9UedprJZ_xQ_4C61shcpZf713DNlLMzRYg-rEsyKAzpEmF2niDa5yCWaa8-nC1o-OTu6ppJxdQ-BP8svbYLqgG0vFGxT9Yy436rF5WTw=w198-h98-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 9
Capa de Presentación
(browsers)
Capa de Servicios Web
Capa de Lógica de
Negocio
Capa de Administración de
Datos
Aplicación: Se propone este patrón para resolver el envío de notificaciones por un evento generado por la organización a los Smartphone de un grupo de clientes. Los clientes destinatarios de las notificaciones serán seleccionados dependiendo de si son o no impactados por el evento que se notifica.
Motivación:
Se utilizará para la publicación de las noticias y eventos del club y de los eventos del minuto a minuto de los
partidos que esté jugando el club.
El componente que contempla el envío de notificaciones que actualizan el tópico correspondiente.
Los suscriptores son los smarthphones de los usarios de la APP FF, que necesitan publicar la notificación para
que cada cliente pueda visualizarla.
En todos los casos, la notificación refleja la suscripción de los Smartphone de los usarios de la APP FF
impactados por el evento.
Servidor Web
SW para
Cliente Mobile
IOS
SW para Cliente
Mobile Android
Clientes Web
(Navegador)
Servidor de Bases de Datos App FF
Servidor de Aplicaciones App FF
Patrón Publish and Suscribe
TÓPICO: Notificación
de eventos de minuto
a minutos
APP Fanáticos del Fútbol - IOS
APP Fanáticos del Fútbol - Android
TÓPICO: Eventos del club
Componente Eventos del Club
Componente Minuto a Minuto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19ylTvYI5bC1ToJRpViPxxrBFciyAPvu9GV-hsWnrRxFrlTC9Onlu4CNtkdG-wS-svaZCBhwJBXB3EDJZv7Vx9bW7sU0vnUqi3lMpzhGrXIwR-lxmG3E-a83ba1UPzvxcdQVIjpQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32GqumR8gpDotel7Msdzu5OQfYytRPxweMIAi25Lk7gbURZXRHdroxDm5PlWhWU3SgTA12Zp8wE8LUZ4-8kEdv9HjiWaed1wJrTjVk-vkk4PeX3yCrvozzt7gvfYubiso_jsoB4Q=w1280-h328-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YOjt_592tD4xNTGIw1GTLEfKrsx6c0eWH5P7LTIL-1kWGpUhgmjZ4_VetZF_v-hznPqLjjgfs3bYjPz7InrFO107NuiDodMozL8VRC8W7L6Bouf4_PxUyiZBrhCl9fpdKPf3Qug=w1280-h288-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 10
Aplicación 1: Se propone este patrón para resolver el requerimiento no funcional de importación del minuto a minuto de los eventos del partido, previendo la posibilidad de que se incluyan otros formatos.
Motivaciones:
El Agente se ocupa de transformar la información importada desde la empresa DataFactory que es la que registra, minuto a minuto, los sucesos de cada partido jugado del campeonato y los disponibiliza en tiempo real.
Aplicación 2: Se propone este patrón para resolver el requerimiento del cobro off line con Rapipago y PagoFacil (RNF7), previendo que cada proveedor entregará la información en formatos diferentes, que además eventualmente pueden ser modificados o el Club decidir trabajar con otras empresas de pago.
Motivaciones:
El Agente se ocupa de transformar la información contenida en archivos, importada desde cada
empresa cobradora (Rapipago, Pago Fácil) para procesar en batch y actualizar el sistema con los cobros que cada socio/hincha realiza en esas entidades.
Patrón Broker (Agente)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3B6jN5ckk8zIbtghIUNCcGoRipSNfmCUkso4eTLX1p11yj7IZacTwVzZomAfbglJoi-2D-9wQUAJidViaiN2-J93xlmr3tC0LuFmDyVeTbE4sum-y-xuhPb9Jx22VsaXIKujS6fw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BIpPJLFEY3mzou6b69IqeF7WDrUSUWN-AZujJEcl0DrNuXIhDLuIQpQFzrd9JglMlIAWgO6Q8Qzr6JXd1ntglgjH-Ysppwx7H7SQjVfWgrLxbc5ngVDAmvQqZsw0xTmd0WPhWsg=w1280-h748-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 11
Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XQlViNhcOgkYqJqP1KiR46eT7uk0ZDuYcPiJyuwvJAZmW6CJenY7en60_vsJQIIennycx971RPQkmTGvpOgDpsPFey6ETCBqiAju1lDqc8kzcCNgno0s5SI8jvOzT1yzPyVEizQ=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 12
Justificaciones de los casos de uso incluidos en la vista:
Casos de uso Justificación
1 Registrar campeonato, 2 Modificar campeonato, 3 Eliminar campeonato, 4 Consultar campeonato
ABMC elegido para resolver aspectos de acceso a base de datos, interfaz de usuario, algoritmos de programación básicos. Resuelve el RNF 4 Módulo web.
40 Procesar comprobantes de
cobro offline
Caso de uso donde se resuelve el RNF significativo para
la arquitectura 7 Cobro por Rapipago y Pago Fácil
15 Registrar solicitud de
asociación a club
Transacción mobile compleja, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario. Asociado al RNF significativo para la arquitectura 5 Módulo Mobile
8 Iniciar sesión Caso de uso donde se resuelve la problemática del manejo de sesión en un sistema web, validación de permisos de usuario, referente al RNF significativo para la arquitectura 1 Autenticación de usuarios.
26 Calcular ganadores del
sorteo
Proceso automático. Debe resolver el momento de ejecución, asegurar una buena performance, minimizar acceso a base de datos y afectación a usuarios que estén utilizando la aplicación.
5 Publicar noticias Funcionalidad vinculada con una de las características más importantes de la APP FF, que se utiliza para resolver la forma de actualizar las noticias para los usuarios, donde se resuelve el RNF 12 significativo para la arquitectura Publicación en redes sociales.
18 Enviar comprobante de
inscripción
Resuelve el RNF 8 Envío de mail con comprobante de
inscripción y pago.
41 Registrar confirmación
cobro, 42 Registrar cobro de
solicitud de adhesión
Casos de uso que resuelven el RNF significativo para la
arquitectura 5 Cobro Online.
20 Diagramar fixture de
campeonato
Transacción web compleja que requiere definir los algoritmos de programación a utilizar para estructurar la diagramación del campeonato, también debe definir aspectos de interfaz de usuario, acceso a base de datos y granularidad de los componentes. Asociado al RNF 4 Módulo web.
27 Importar minuto a minuto Resuelve el RNF significativo para la arquitectura 10
Importación de eventos del partido 45. Enviar notificaciones a
usuarios de la APP FF
Resuelve el RNF significativo para la arquitectura 11 Notificaciones push. Utilizando los componentes que implementan el Publish and suscribe.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3v1ydU2xjeYMunZNg851HG78GsKNS83sn0yv7wnOWV0klTX7dsrjbcyLat8hmOS7B8n-3bqzQndUcgGVggzsxc-t8Jn0PbZIuCVGMm0Q6-TyjZeYYVSOlkrUNtLtK0F5O4v-HGdQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gcG_eJ8WR5Sd8DLZXCQGyOVza9oWBOWbh2QxqSS76D1XzR-fotEFpArYB56ZyYO8jPDgcn9zYMM-7JWGM5OC0VHBW3DpAbMIOfdzA3EeFaxIGchM_-aDXrCNKwDShTl3XFWoOTg=w1279-h620-v0?authuser=0)
Universidad Tecnológica Nacional
Ing. en Sistemas de Información
Cátedra de Diseño de Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 13
b) Vista Arquitectónica del Diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kPWJngXm7aZKdhNPzSxtqlhPkgbeotRkxGdL7gKKIuGXyZViNvmGDrAlWLjyojoqEpPUCFgNWGcrPrhQZtRmQCsTfW1IuD6t6zB84SrCu6ZfV7tBvXEQ04O9Ee3jJ0i1GWaPEbg=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pvR6_tofqi5yVK6d_vqJYpP3XwiJoaQbkYLcF-4VUQjp70Usce2Jh5qTAnKGP3187Ol3nvRGVB3VvlrG-x0UTLCS7vMS4KFTTF0Rj0rQws3hjjiJQt6lTyI7vsQwfX4ZDGzfuZA=w1280-h879-v0?authuser=0)
Universidad Tecnológica Nacional
Ing. en Sistemas de Información
Cátedra de Diseño de Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 14
b) Vista Arquitectónica del Despliegue: Hardware
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lhLIBlQswzkCerNmGgoZMKbnjhWgVRVCEM_qDgqhg1-_i1_y0FnOfDaNp4foIyK0691eiBk9xe3oZo8ZeDnk8d-rvV-9BFQIyCnvi6MQ5D77KuG0UkRohoIRbALkklE3ns60nsw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hADMLEMsZKJiSiy-UcEAyTIypOq862DjtmLnjWnF3Rj60E_jikChrSpXIT_j5CQsilzB2f0XQxlSBp9ictqFhKTKV_eWDLFrDxgdnaFlmz2q0ZyCDe5KOgt6i6NhvaF3vY50f=w1280-h978-v0?authuser=0)
Universidad Tecnológica Nacional
Ing. en Sistemas de Información
Cátedra de Diseño de Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 15
b) Vista Arquitectónica del Despliegue: Distribución de Software en Hardware
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36dWNKqnVGASUE5FgjjyLbyCnykCgOuAW0JOWx60bnYujplC7XxWY4Iw7gWHd8yqrGoucI-hcPsuJnrTb3gB1fwIwQWtDwVir2QNXFe5lELcbUM3ePXedwLC22H9mskVhck-0X=w41-h51-v0?authuser=0)
Ing. en Sistemas de Información
App Fanáticos de Fútbol Arquitectura
Versión 1.12 Página | 16
Historia de Cambios
Fecha Versión Descripción Autor
1.0 Versión para examen final Gerardo Boiero
2018 1.1 Armado de EPC Judith Meles
09/08/2021 1.6 Se corrigen nombres de subsistemas y se agrega una interfaz requerida para
MinutoAMinuto
Se agrega subsistema de capa de lógica de negocios no persistente para abarcar los dos subsistemas no persistentes que quedaron sueltos, para que se refuerce que son lógica
de negocios también
Cecilia Massano Judith Meles
10/08/2021 1.7 Corrección del número del caso de uso 44 por 45. Corrección del nombre de una
interfaz por consistencia
Judith Meles
10/03/2024 1.8 Corrección de la vista de diseño y de despliegue por tema de redes sociales
Judith Meles
30/03/2024 1.9 Se agregan clasificación de AP y AS en el listado de CU y se agregan los actores de
redes sociales al CU 5
Judith Meles
28/06/2024 1.10 Se cambia el nombre del componente notificador de mails y se unifica en un solo
componente y se agrega la interfaz requerida para conectar con el servidor de
correo.
Judith Meles
02/06/2025 1.11 Se modifican las justificaciones de los casos de uso 15 y 20 en la vista de funcionalidad
Judith Meles
27/06/2025 1.12 Se arregla una referencia al estilo Publish and suscribe que estaba mal, decía Broker
Judith Meles
