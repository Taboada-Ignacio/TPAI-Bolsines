# FanáticosDelFútbol_Arquitectura de Microservicios V1-9.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla el 
diseño arquitectónico basado en microservicios
 para la aplicación oficial de un club de fútbol, llamada "Fanáticos del Fútbol", con el propósito de conectar a los simpatizantes con la institución. El texto se estructura dividiendo el sistema en diferentes subdominios que agrupan funcionalidades clave como la gestión de socios, campeonatos, noticias y pagos. Asimismo, presenta las vistas arquitectónicas de funcionalidad, diseño global, diseño detallado y despliegue físico utilizando un 
patrón de un solo servicio por host
 para garantizar la seguridad externa. Finalmente, la documentación incorpora los requerimientos no funcionales necesarios para integrar pasarelas de pago, redes sociales y servicios de terceros que operan en plataformas móviles y web.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04AZkoZWlkps_W5n7rD--wY0Ap5WZ6JqKhlmADiXwIAAyRsyc5aSROz5uADv8UXh8mcPRTdFx5DBEr4vBp4QzZg7R4EaZGzpKxU9mWZlWcpXRe2cPmzskKjznKBYdMCTSujlGN9w=w105-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35ND8lWH8_amuwO0RJgvDrBDeeEPT9RFbcm3hmNBUwrmLgbJNkhiZdZI73L18PxoVn9HCxH6mYihZRK3G6KbUxtBntpdybTIJt21indVc0RYmZNfP-c6tTaD0J3_IZWv_5YfWT=w1280-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rPgOk7cDgsEXIiV7WSNAOyQ-oiCkiPrTKf0ARS-askIPx373-f8ICVCWXIV_s7TiSvPfF5ZodCAzomBTGNZfZrkDtIv4GofuAndvlQlbJC9m5apjaUu4gWSziNvYIxT8deBEu=w225-h225-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2niK1m6U9BGPV2QXBEcKl0b7PhBSzPPmJLrn6wYBzKtCaN72LJG4a3_TI4x0Tn9c-04Zq1sygPV9Les-1P1WQjkmMAJCFIvYOvKAcEc9f3Ajuz-fcCpnpVVznZQZZzPiPPIpD1dw=w599-h385-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hm5ZcHTYjSL0-oCXcMNcB9LjqR_G7kSYVbuOwn38jjoUfMlrJkie0a6MrB-GUAiRvTDwlTyKmx_KWJJ_vg3nTJG7EH4W3oK5a82CvKtqRcqRnYUgo7QFC_niXl1PQk5TGC-Vx3A=w194-h259-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12Rn_qDe3jzK9BbBGcZEAwWvFy_hA5X0ac0_TiJdtA_KPY63-Ql3vxXyKRdzm6GBD2E_I4CYygbBRX8kG0nTvcFXdD0wwlVSXPx_vPJ0S0FycZJmk_wOcE_K_QuRKBBxYk07ec=w183-h275-v0?authuser=0)
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 1
Diseño Arquitectónico con Microservicios
Consigna de trabajo: 1. Identificar los subdominios en los que se descompone el dominio del problema 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. (Esta en este caso ya está hecha) b. De Diseño global presentando la estructura general basada un estilo arquitectónico de microservicios c. De Diseño utilizando un estilo arquitectónico de microservicios. d. De Despliegue: Distribución de software en hardware (Nodos y Componentes).
3. Mencionar los patrones arquitectónicos para microservicios aplicados.
Aplicación Oficial para un Club de Fútbol: Aplicación Fanáticos del Fútbol (APP FF)
Un importante club desea contar con una plataforma de comunicación que le permita aumentar el número de socios y acercar sus socios/hinchas a la institución. Los principales roles de usuario para la aplicación se muestran a continuación:
Hincha
Rol de Usuario que quiere utilizar la aplicación desde su Smartphone para asociarse al Club, para lo cual deberá subir documentación personal y eventualmente pagar su solicitud de adhesión. También recibirá mails con información del estado de su solicitud de adhesión y con el comprobante de cobro en caso de que la solicitud de adhesión haya sido aprobada.
Usuario de App FF (Fanáticos del Fútbol)
Socio y/o Hincha del Club que descarga la aplicación para acceder a las noticias y beneficios que está la brinda, desde su Smartphone. Si está asociado al Club podrá acceder a mayores beneficios en los sorteos y a descuentos en comercios adheridos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GcdkHOf-YvEyj70S69vCawg0ceo6SBXJBCeyQA1DQs-TLvrwxNNRGsytb3LvGe3MjuQe3XY6YLQE_Kc19TKFfLw_zOafpOaNVczZM4gyvwkabiBiTPLkFoklUjCpJj5_9b9RBqQ=w105-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dFCBhZTtoJAq3P5tK7DwskamjmHbuByd3roHEX1RroPTni6IrcwW_5-FCJI7qUPR_qt0_20pVQuQmB3shsjiFD_DnRSqmE01YKjBLYiPdku1NZyzOOUh_PNZvDvPUJOh9s-xQOw=w1280-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zKQ5Txb-xu9ZZcubxH-Y_Y5saxu9mk9qEFlU_KXM4vEA9X7TAELlwbe40l0YqhJxukQEXE_3R7bW_vexGdVwV2DFD86Izyar4jUrV6sVVxGOSo7HNZB0uagl_n45wGjNk_AmGNw=w264-h173-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36x3R7ZWD85nsbRy8rFdo_Gz_xTSgPcjWRW67y-5pB5-DTnaj9LTzYf3AGEcSvOMum2syk1-4ul7Ml9SF2ShrAoM4jzOiZDzkcHSlY11F92RyAtpRW-j5EAM-dJ5Sq2mZYUMgx=w169-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gC6jWzBRqnkuVMrJDq4SOHbMcd-aUY18o5diRSpF6MwSw3VrGaw-vlCb-3mZM2kppal0wqHYteYNGUV2jMOgG3jFt_uRx3GkmlMHFeIXNYM5ennhHqzk6Vggl655NLghiUYXc=w229-h220-v0?authuser=0)
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 2
Diseño Arquitectónico con Microservicios
Responsable de Socios
Rol de Usuario responsable de la evaluación de las Solicitudes de Adhesión de los Hinchas que desean convertirse en socios. También de la administración de los socios.
Debe enviar las notificaciones con los resultados de las evaluaciones y el comprobante de cobro para que el hincha pueda completar su trámite de asociación al club.
Administrador del Club
Rol de usuario responsable de administrar los campeonatos en los que el Club va a participar, como así también de los clubes con los que jugará.
Administrador de Redes Sociales (Community Manager)
Rol de usuario responsable de administrar los beneficios que el club ofrece a través de la aplicación y de administrar los comercios adheridos en los que obtienen beneficios dichos usuarios y la administración de los sorteos. También será responsable de la publicación de las noticias del club y de los eventos del minuto a minuto de los partidos que esté jugando el club en las redes
sociales de Instagram y X.
La intención es que el usuario de la aplicación Fanáticos del Fútbol (APP FF) pueda acceder a todas las noticias del club por esa aplicación antes que por otros medios, seguir en vivo los eventos de los partidos y disfrutar de cientos de beneficios exclusivos, como accesos a entrenamientos, sorteos de entradas preferenciales a partidos, fotos con el plantel, camisetas firmadas por los ídolos, descuentos especiales en comercios adheridos, entre otros beneficios exclusivos, sólo disponibles para quienes integren la comunidad virtual del club. Los usuarios de la APP FF podrán visualizar un catálogo de beneficios de descuentos que el club ofrece. Estos beneficios pueden ser 2x1 o un porcentaje de descuento en algún comercio con el cual el club tenga convenio. Por ejemplo: 20% o 30% de descuento en indumentaria deportiva, o bien, 2x1 en entradas para un recital que se realiza en la cancha del club. Cabe destacar que algunos beneficios son accesibles para todos los usuarios de la APP FF y otros únicamente para aquellos que son socios del club, por consiguiente, es necesario que se indique en cada beneficio para quienes está dirigido, es decir si es para cualquier usuario de la APP FF o sólo para los usuarios de la APP FF que además son socios. Con esta herramienta de comunicación el usuario de la APP FF podrá seguir a su club desde su Smartphone en cualquier lugar del mundo en el que se esté y vivir desde adentro toda la pasión por su Club y por el fútbol. También, podrá en la misma aplicación, asociarse al club. El hincha podrá asociarse al club completando un formulario de solicitud de adhesión al club, con una serie de datos y adjuntando una foto carnet 4x4 y una fotocopia de su documento de identidad. El Responsable de Socios revisará los datos proporcionados y las imágenes adjuntas. Si detecta alguna anomalía, rechazará la solicitud o la devolverá al usuario para solicitarle que adjunte alguna información o corrija algún dato. El Responsable de Socios ha manifestado
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kRl6Gy5NCg3-RVQJFlAWGHm0jLfc-0iRMvc4ZRV6aEyYtLTYbKJBOBnBkCnAUm6unkiGq42Gokmm10Nf6218SW3XtsVUm4nvTlu_R3t9g52nQ6S8h7EYg4aDfd5f1jw3GiQ52=w105-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0w9NMxskTRvCgiyLsJTm0fg9ZeQz5VWrPHziSpJlxAvhMlvEOEqx6fcuxzePJW82e1A_KLUkmVatAUUEnfIXrRTclLYGw7pTHHX-Zi3DPtKOHp1UaiUeFbpXnzJOXmKWW27VtM=w1280-h160-v0?authuser=0)
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 3
su necesidad de mantener información de cada cambio de estado realizado a la solicitud, y de notificarlo a los involucrados, que según sea el caso serán el hincha y/o el Responsable de Socios. Si todos los datos de la Solicitud son correctos, se generará un comprobante con el costo de asociación que el hincha, futuro socio deberá pagar, para poder completar su trámite de asociación. El hincha tendrá 72hs para abonar el comprobante de inscripción generado, por cualquiera de los medios habilitados. Las modalidades de pago disponibles para los hinchas serán dos: una en línea (on line) (significa que puede pagar desde su dispositivo) y la otra fuera de línea (off line) (significa que el pago se hace en una entidad que luego deriva la información por algún medio al Club). Para el caso de cobro fuera de línea, diariamente las entidades que trabajan con esa modalidad envían la información de los cobros realizados. Una vez transcurrido ese tiempo, si no se informó el cobro, el comprobante de pago y la solicitud para asociarse quedan anuladas. El responsable de la gestión de las noticias, los beneficios y los sorteos, es el Administrador de Redes Sociales (Community Manager). También será responsable de la publicación de los eventos de cada partido (inicio/fin de primer/segundo tiempo, goles, tarjetas amarillas/rojas, cambios, etc.) en tiempo real. La administración de los campeonatos y clubes contra los que jugará el club, los diferentes partidos, será realizada por el Administrador del Club. Por cuestiones de seguridad ya que algunos servicios requieren acceso externo se definió que cada servicio tenga su propio host. Respecto al control de acceso de usuarios se ha decidido utilizar un software tercerizado para que realice ese servicio, importando las librerías necesarias para ser desplegadas en nuestro hardware.
Listado de Casos de uso Este listado si bien no está completo, describe parte de la funcionalidad que será suficiente para comprender el alcance de la aplicación.
Nro. Nombre del Caso de Uso Objetivo Actor
1. Registrar campeonato Registrar los datos de un campeonato de fútbol en el que el club va a participar.
AP: Administrador del Club
2. Modificar campeonato Modificar los datos permitidos de un campeonato de fútbol en el que el club va a participar.
AP: Administrador del Club
3. Consultar campeonato Consultar los datos de uno o más campeonatos de fútbol en los que el club participó o va a participar
AP: Administrador del Club
4. Eliminar campeonato Borrar los datos de un campeonato. AP: Administrador del
Club
5. Publicar noticias Publicar para los usuarios de APP FF noticias relacionadas al club y enviar notificaciones a sus dispositivos móviles.
AP: Administrador de Redes Sociales AS: X AS: Instagram
6. Visualizar lista de noticias Mostrar la lista de noticias disponibles en un momento determinado.
AP: Administrador de Redes Sociales
7. Consultar noticias Consultar los detalles de una noticia publicada. AP: Usuario APP FF
8. Iniciar sesión Registrar el inicio de una sesión en la aplicación por parte de un usuario registrado, validando su password y permisos.
AP: Usuario
9. Cerrar sesión Cerrar una sesión en la aplicación. AP: Usuario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nHja9OAyTf4xspFOI1hj_xQoWnMVPnmOmChSD34smbWgAqM6X6FPDOF-3HNF4j69kzGtkG6wBBHYNSo7aAFv4Nt9uG0r-DQczXecDIOf69a00yzzDuC3tMfQdJ9VjZUAX80Ia7w=w105-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M8V_usQ9B5-0UR4rvO_amq2vWIJm2PxkLyVLjB6D2ly4eON8FCsOmnxSXvmOnQHRUNR9iSaB674vaInlExvO2jRQH461RLf-YZp43s6BMTG6vGGSmSRopPwrWpuPpZNW2G3981Q=w1280-h160-v0?authuser=0)
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 4
Nro. Nombre del Caso de Uso Objetivo Actor
10. Cambiar password Registrar el cambio de palabra clave por parte de un usuario de la aplicación.
AP: Usuario
11. Registrar club Registrar los datos de un club de fútbol contra el que nuestro club jugará en algún campeonato.
AP: Administrador del Club
12. Modificar club Modificar los datos permitidos de un club con el que va a competir nuestro club.
AP: Administrador del Club
13. Consultar club Consultar los datos de uno o más clubes registrados en la aplicación.
AP: Administrador del Club
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
AP: Responsable de Socios AS: Servidor de Correo
19. Anular Solicitud de Asociación
Controlar solicitudes cuyo cobro no se ha registrado y anular el comprobante de cobro y la solicitud de asociación.
Tiempo
20. Diagramar fixture de campeonato
Registrar cada uno de los partidos en los que el club jugará en un campeonato ya registrado en el sistema.
AP: Administrador del Club
21. Registrar Sorteo Registrar los datos de un sorteo que se realizará entre los usuarios de la APP FF que decidan inscribirse para participar.
AP: Administrador de Redes Sociales
22. Modificar Sorteo Modificar los datos permitidos de un sorteo que se realizará, antes de llegada la fecha de sustanciación es decir de hacer efectivo el sorteo.
AP: Administrador de Redes Sociales
23. Consultar Sorteo Consultar los datos de uno o más sorteos según criterios predefinidos.
AP: Administrador de Redes Sociales
24. Cancelar Sorteo Cancelar un sorteo para impedir su realización, debe ser antes de la fecha de sustanciación.
AP: Administrador de Redes Sociales
25. Registrar inscripción a sorteo
Registrar la inscripción de un usuario de APP FF para que pueda participar de un sorteo vigente.
AP: Usuario APP FF
26. Calcular ganadores de sorteo
Obtener ganadores de un sorteo en particular, eligiendo de los usuarios de la APP FF que se inscribieron.
Tiempo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09HiQbfUTLb_LYz6un1m8DNU_mjxQCtVcJYj5c99vIOVauF84yiHiysfOgMHluQntcTd6v6FTuFDkbfcOfo7qs22Y9GYutVqfObR0YcSVwvIlxeOJMMADH4m5rssq-rr3qgAeU=w41-h51-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 5
Nro. Nombre del Caso de Uso Objetivo Actor
27. Importar minuto a minuto Importar en tiempo real la información de los sucesos de
un partido jugado.
AP: Servidor Data
Factory
28. Visualizar información de
sucesos de un partido
Visualizar los eventos importados relacionados a un partido
en el que el club está jugando en ese momento.
AP: Usuario APP FF
29. Registrar beneficio Registrar los datos de un beneficio que se ofrecerá a un
usuario de la APP FF, ingresando las características del beneficio, el comercio adherido si aplica, si el beneficio es para todos los usuarios de la APP FF o sólo para los socios del club o si el beneficio es diferenciado, por ejemplo 10 % para usuarios APP FF y 20 % para usuarios de la APP FF que
además son socios del club.
AP: Administrador de Redes Sociales
30. Modificar beneficio Modificar los datos permitidos de un beneficio que se
ofrecerá a un usuario de la APP FF.
AP: Administrador de Redes Sociales
31. Consultar Beneficio Consultar los datos de uno o más beneficios en función de
criterios predeterminados.
AP: Administrador de Redes Sociales
32. Anular Beneficio Anular un beneficio dejando constancia de la fecha de
anulación y el motivo.
AP: Administrador de Redes Sociales
33. Publicar beneficios Poner a disposición uno o más beneficios registrados para
los usuarios de la APP FF y enviar notificaciones a sus dispositivos móviles.
AP: Administrador de Redes Sociales
34. Registrar Comercio Adherido
Registrar los datos de un comercio adherido que estará vinculado con algún beneficio que ofrecerá la APP FF.
AP: Administrador de Redes Sociales
35. Modificar Comercio Adherido
Modificar los datos permitidos de un comercio adherido. AP: Administrador de Redes Sociales
36. Consultar Comercio Adherido
Consultar los datos de uno o más comercios adheridos en función de criterios predeterminados.
AP: Administrador de Redes Sociales
37. Eliminar Comercio Adherido
Borrar los datos de un comercio adherido. AP: Administrador de Redes Sociales
38. Registrar Noticia de Club Registrar una noticia relacionada con el club, que luego podrá ser publicada para que los usuarios de APP FF puedan verla.
AP: Administrador de Redes Sociales
39. Registrar Entrega de Premios y/o beneficios
Dejar constancia de la entrega de un premio o beneficio al usuario de la APP FF que salió beneficiado, registrando sus datos y la fecha de entrega.
AP: Administrador de Redes Sociales
40.
Procesar comprobantes de cobro
Proceso responsable de la actualización de cada uno de los cobros de solicitudes de adhesión realizados por los hinchas en entidades de cobro fuera de línea (Rapipago / Pago Fácil)
AP: Administrador del Club
41. Registrar Confirmación de Cobro Inscripción
Registrar confirmación de cobro de inscripción a través de sistemas de pago on line. (Mercado de Pago)
AP: Mercado de Pago
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xELfLauHMph29zlDz-LeeFyVqdad81IvvlmJuwNYQluLvUU9lZsBiInKDwGre4aZ5y7A6n23WGx5ckSYxgl_6TMxNlWKIJBn22roYezPF7lBfXw9xXCLBdIFdn6VsNC85i8Oz=w41-h51-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 6
Nro. Nombre del Caso de Uso Objetivo Actor
42. Registrar cobro de solicitud de adhesión
Informar el cobro de la solicitud de adhesión al club. AP: Hincha
43. Modificar Socio Actualizar datos permitidos de un socio registrado en el
Club.
AP: Responsable de Socios
44. Consultar Socio Consultar los datos de uno o más socios en función de
criterios predeterminados. AP: Responsable de Socios
45. Enviar notificaciones a usuarios de la APP FF
Generar e enviar notificaciones sobre las noticias del club, sorteos, beneficios y también sobre los eventos minuto a minuto de los partidos que juega el club a los usuarios de la APPFF.
Tiempo
Requerimientos no funcionales
Nro. Nombre Descripción SPA Explicación
1 Autenticación de usuarios
La aplicación debe tener un módulo de autenticación de usuarios, que permita su administración y la asignación de permisos de acceso a las distintas funciones de la aplicación
SI Este módulo de seguridad afecta la arquitectura ya que debe controlar el acceso de cada usuario únicamente a las funciones y los datos a los que tenga permiso, cuestión que debe considerarse desde el primer momento. Se resolverá con un servicio tercerizado llave en mano, lo que significa que no tenemos acceso a ver el código. Este servicio se integrará a nuestro producto.
2 Password Se deberá requerir un password al momento de la creación del usuario, que tenga entre 8- 12 caracteres alfanuméricos. Comenzando siempre con números y no aceptando cadenas consecutivas, por ejemplo: 123 o abc.
N0 Se define como parte de la política de seguridad para la aplicación las características que se validarán para los passwords definidos por los usuarios de la aplicación.
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_5GN-i7gc3fnIOFpplcAiT6pHDfQlJZopZvxwmO39DiQQaFsOfX9GhqgK4GV7RndyCr9PrwhBzns21kxkfMKnyMkobjXz_P4sWFjPmnRxbqHeBsiECltzAOKb3Z7xLjotiuKi=w41-h51-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 7
Nro. Nombre Descripción SPA Explicación
8 Envío de mail con comprobante de inscripción y pago
El sistema debe poder enviar los comprobantes de inscripción y comprobantes de pago generados por mail para la opción de pago diferido o fuera de línea adjuntos en el mail
SI Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail es necesario un servidor de Mail como ser Exchange o Mercury.
9 Formato y tamaño de adjuntos
Las fotos carnet de los socios y la fotocopia de documento de identidad deben tener formato jpg, .png o .gif y no pueden superar los 50 KB.
NO Al no superar los 50KB las imágenes se guardarán en la misma base de datos como un campo más y será utilizado por el componente de HTML, sin afectar la arquitectura de la aplicación.
10 Importación de eventos del partido
La información en tiempo real de los eventos de cada partido que juegue el club será contratada a la empresa Data Factory que es la que registra, minuto a minuto, los sucesos de cada partido jugado del campeonato y los disponibiliza en tiempo real a través de un servicio web de arquitectura API Rest.
SI Debe desarrollarse un componente encargado de comunicarse con la API Rest de Data Factory para tomar la información de los sucesos de cada partido en tiempo real e importarla a la aplicación.
11 Notificaciones push
El sistema permitirá enviar información sobre los eventos del club, noticias, beneficios, sorteos y enviar notificaciones push a los dispositivos móviles de los clientes.
SI Desarrollar componentes que permitan resolver el envío de notificaciones a los dispositivos móviles de los usuarios de la APP FF.
12 Publicación en redes sociales
El sistema debe permitir publicar desde la aplicación en las diferentes redes sociales (Instagram y X) las noticias, beneficios y sorteos, así como los diferentes eventos de un partido en tiempo real.
SI Se deberá desarrollar una interfaz de software mediante diferentes Api’s para publicar en las redes sociales los distintos sucesos (noticias, beneficios, sorteos y eventos de partidos). La API Rest de publicación de eventos de un partido debe considerar el asegurar que los eventos de se publiquen en tiempo real.
13 Seguridad en el despliegue de los servicios
Por cuestiones de seguridad ya que algunos servicios requieren acceso externo se definió que cada servicio tenga su propio host.
SI Se aplica el patrón de Single Service per Host para realizar el despliegue de los servicios en la nube
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18Y5zXuxNMnY9-nr8i8Vjvp3x7b2EsqOP78uJBwrHtKXhRBE0JJ65L0GPw32j3COSwunmXj9xCD4YEm2s_n4bXRxO6lEh-Dna6CsUmMO1NUjeWN_YoKuiygswrv1hpyOTyzQCnoQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r_7tOq-3T-gD3WFvgx3TG-mG8BddFOA_dUD2nftZEVedJoGehEnUSK__HgtSAGF0_I5D0j_mBeC_FUBRVSZXBPCwlOnwHxWiLDuGgJiKlcdlJgLDJsdTC4zCDwqBZpzaF8I6tkw=w1231-h724-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 8
Identificación de subdominios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QMlRyXq4cVoDHvwDTay4yf7mpsJK-kDF9RJum8hZbxj_uNgTPVzlLHhKcoMYg5CFN2Z2t2rY9pw4VEjxh5ByozWSK3w-yeJ-Xun_Qcrg5HQ4_vwSii31u6AG4dg_3KDlIsaX82g=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UKLoDUVWZ9A1s3qDBwvTk7RnG__K5PXCYhl9Yf57JrSUbGu_J_k4CKSwOtK5udnBKO8yKA-4oJteUentU8akk8gV2Td_dBp6emkWH_FlC5XW4JjWh_c6b9I2LteosT7PgMBu_MQ=w1280-h748-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 9
Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0n8HmLaPJ4BQ_VrUSwqJOXtzSqMTP0BA6iKdGujC-EeK5tonr7bXEsV35rbL9ZB0mHb-DhjZpoWaKM7xKpXb7ANglwyZgh9xHHuMwlrgC477Fqq-AR4GLvapj3mXNqM4rKxLmwXg=w41-h51-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 10
Justificación de los casos de uso incluidos en la vista:
Casos de uso Justificación
1 Registrar campeonato, 2 Modificar campeonato, 3 Eliminar campeonato, 4 Consultar campeonato
ABMC elegido para resolver aspectos de acceso a base de datos, interfaz de usuario, algoritmos de programación básicos. Resuelve el RNF 4 Módulo web.
Asociado el RNF 13 Seguridad en el despliegue de los servicios
40 Procesar comprobantes de cobro
offline
Caso de uso donde se resuelve el RNF significativo para
la arquitectura 7 Cobro por Rapipago y Pago Fácil
15 Registrar solicitud de asociación a club Transacción mobile compleja, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario. Asociado al RNF significativo para la arquitectura 5 Módulo Mobile
8 Iniciar sesión Caso de uso donde se resuelve la problemática del manejo de sesión en un sistema web, validación de permisos de usuario, referente al RNF significativo para la arquitectura 1 Autenticación de usuarios.
26 Calcular ganadores del sorteo Proceso automático. Debe resolver el momento de ejecución, asegurar una buena performance, minimizar acceso a base de datos y afectación a usuarios que estén utilizando la aplicación.
5 Publicar noticias Funcionalidad vinculada con una de las características más importantes de la APP FF, que se utiliza para resolver la forma de actualizar las noticias para los usuarios, donde se resuelve el RNF 12 significativo para la arquitectura Publicación en redes sociales.
18 Enviar comprobante de inscripción Resuelve el RNF 8 Envío de mail con comprobante de
inscripción y pago.
41 Registrar confirmación cobro, 42
Registrar cobro de
solicitud de adhesión
Casos de uso que resuelven el RNF significativo para la
arquitectura 5 Cobro Online.
20 Diagramar fixture de campeonato Transacción web compleja que requiere definir los algoritmos de programación a utilizar para estructurar la diagramación del campeonato, también debe definir aspectos de interfaz de usuario, acceso a base de datos y granularidad de los componentes. Asociado al RNF 4 Módulo web.
27 Importar minuto a minuto Resuelve el RNF significativo para la arquitectura 10
Importación de eventos del partido
45. Enviar notificaciones a usuarios de la
APP FF
Resuelve el RNF significativo para la arquitectura 11 Notificaciones push. Utilizando los componentes que implementan el Publish and suscribe.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M6inSe7Z7hK4NIakwr5inE3Mr2BmxS2WSrv899bo-CRehuYHQpCor2Yel_E-3iGEyI7pjpccmbw3xOiS_HgPplE9zeSzLs3uVuYVu_o8qHhVfg-s10soStBU1i3d4DuWlnV7rpw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rAhTH6kImxRI0KiVA8LBgBX5kCbBSmuqdosjonp4uGl9Dki6dDsuVLmAH3RP-9BnBU9-UTlFelRsnFS23M3NCqYrD93QJv1W7qS05J3stn6O53re-m6QIvd8mkB1S_rEqleW6=w1039-h1280-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
Vista de Diseño Global
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0acn7k2kfeKbyYDAybIbJo5Lk1BaJO98mnnnlL13zf9s2_rEXB91eJU4cg-0Gd1rLEqR_EW7h4oB9TuT_i1Mmm9s_QfMOtqXTp7eb7UnNTni6FgZkDCbUfBtDH_7GCeQEYWWGXvw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3C7nxh274I-9tndmdkunRfOW7Gj8EtF2uJ7Yr-vtxekYct8IvXrp7T7PH2i2vfXhJWR4TJDVT9qTjvwmbPbHE71oUFv2vQp8cGFAfDhnZOEInGivAXd2J3r0httK4rii1fNmjMKg=w1280-h684-v0?authuser=0)
Cátedra de Diseño de Sistemas de Información
App Fanáticos de Fútbol Arquitectura Universidad Tecnológica Nacional
Ing. en Sistemas de Información
FanáticosDelFútbol_Arquitectura de Microservicios.docx - Versión 1.9 P á g i n a | 12
Vista Arquitectónica de Diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00MXjVy05pdHgxYs6RlnDPSiBAq-cX-jR4Cd4647zCDucG0vmG71CDAbum0z0seK336WqNUdWUugEGstdB3FmsNQ7e8Sy7kvERLpk9OKI5fWSPsfs33Yq0ElOe5BRqMzvQ64YMFw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E1b2aqMsgXKSis49KZwE7PJsrzEN5DCKOrC9MV4QhAwMTiFa-D1QzcDmHtWAF5GfRQwmC7OYnFr_hl19iYF4SBFI5to5Xjc4ESGQZHZHRIthpz17LuSkYc9Cfc7rCKExD7uTVVA=w1279-h1280-v0?authuser=0)
App Fanáticos de Fútbol Arquitectura
Ing. en Sistemas de Información
Vista de Despliegue
