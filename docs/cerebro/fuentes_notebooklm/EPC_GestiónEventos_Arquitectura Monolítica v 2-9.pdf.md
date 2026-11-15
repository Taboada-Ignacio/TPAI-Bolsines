# EPC_GestiónEventos_Arquitectura Monolítica v 2-9.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla la 
arquitectura de software
 y el 
diseño del sistema
 para una plataforma de gestión de eventos académicos o corporativos, estructurando tanto los requerimientos funcionales como los no funcionales. Su 
propósito principal
 es guiar el desarrollo técnico mediante la definición de casos de uso, modelos visuales y vistas arquitectónicas que abarcan desde la interfaz web hasta aplicaciones móviles y pasarelas de pago externas. La solución se fundamenta en un 
modelo multicapas y cliente-servidor
, priorizando la adaptabilidad, la seguridad y una 
alta disponibilidad 7x24
 mediante bases de datos replicadas. En conjunto, la guía funciona como una hoja de ruta integral para ingenieros y diseñadores de sistemas que buscan construir una infraestructura tecnológica robusta, escalable y conectada con servicios de terceros.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hgkkH5gpsBxUcUOLInJEpYQmbhesZJ8LEaQ6WzszqM9Hsijnl5esuZavRugkgbP6oz7FEkcWqr2TDeyfWD6BlwDG8But526PHiA9kXLXjQSgnCcqoFWdWBcSHcYsaca9mZsEt=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AMwZIOyK8s0FdU4VOo1rOqG3Ik5OiHBUYgievSJS5MYcyVgnkVzKq19jWBmsJdByuYzdjO7n7UTt2OjtGx-UKTFhkip5iSB3kl6lOLB_ARUP_kJ99mVr4ZdEFJYL3-2_8Qd17dA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
Ejercicio Práctico Complementario
Nombre del Ejercicio Práctico Complementario: Gestión de Eventos
Objetivo del Ejercicio Práctico Complementario (EPC): Desarrollar el planteo arquitectónico de un software partiendo de sus requerimientos y modelando la
solución propuesta con diferentes vistas arquitectónicas creadas con diagramas de UML, partiendo de un framework arquitectónico definido.
Objetivos de la Asignatura con respecto al EPC:
❖ Reconocer la importancia y la incidencia del diseño arquitectónico en el producto de software que se obtiene. ❖ Desarrollar la habilidad para adaptar el resultado del proceso de análisis a las restricciones de implementación
impuestas por el entorno.
Contenidos de la Asignatura que se abordarán en el EPC:
▪ Análisis y priorización de RNF significativos para la arquitectura ▪ Diseño Arquitectónico
o Patrones arquitectónicos o Vistas arquitectónicas
Consigna asociada al Ejercicio Práctico de Aplicación: 1. Identificar los patrones arquitectónicos más relevantes y construir una representación gráfica de los
mismos. 2. Construir las siguientes vistas arquitectónicas, definiendo para cada vista el punto de vista asociado:
a. Vista Arquitectónica de la funcionalidad, justificando b. Vista Arquitectónica de Diseño: Componentes e Interfaces c. Vista Arquitectónica del Despliegue: Nodos y subsistemas principales d. Vista Arquitectónica del Despliegue. Hardware
Criterios de evaluación del EPC (Si aplica): Sobre los prácticos que la cátedra utilizará se evaluarán los siguientes aspectos, vinculados al cumplimiento de los objetivos de la asignatura:
1. Trabajo acorde a las consignas presentadas 2. Que resuelva correctamente el problema que el Ejercicio presenta y cumpla los objetivos definidos para
éste 3. Consistencia de cada uno de los modelos que se van desarrollando 4. Aspecto formal de la presentación del práctico 5. Cumplimiento de la fecha acordada 6. Integración del grupo en la realización del trabajo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tl3azJ910_kHQjx4JZxXu2hLASqKzhmu3YZzOHUcVGsbDQ1x0RKLt-Y0sZrfIGyZgMWikfRBN9-ar3vkFfucEMUXK2oyMYrhjy_I43FViLk9psvrKRuAdDRG0DWr_tBW_j0C3fw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05IPDyp0eIT5Ovm5YkXV5snvoTnZVUy9ShVWp7vcSnJo4UdoGGgstYhn2516VjvOrCz9D--HX0IH1aLgbdEMqAlHTpkc2Kf-MbNnoRdQPiAuBeuz7AJDJ7UCFBjN5B5BL3k61I=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ado410xHIWKX_JmnZgy-aiu5a8ASBxsCJP81Z5Xq0Es-bQ4-ch9HUjeAFQW3Uo-xVrelCGDCFChTQgLmNkAoZst8HmbR7v2nFiR50svwGs7mle1I4irtcAwz22XtN3d8g6CNu=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
Descripción del Dominio asociado al Ejercicio Práctico Complementario
Gestión de eventos
Una empresa cordobesa dedicada a la organización de eventos de todo tipo, por ejemplo, congresos, conferencias, eventos culturales, deportivos, cursos, etc.; desea crear un software que permita a sus clientes empresariales gestionar de manera integral sus eventos por medio de un portal web que deberá funcionar en los navegadores web Internet Explorer Versión 8.0 y Google Chrome 35.
El software debe dar soporte a las siguientes funcionalidades: inscripción de participantes, gestión del cobro de las inscripciones, la acreditación de participantes y envío de mails o notificaciones a los participantes.
Cuando se crea un evento se solicita completar al menos: nombre, fecha de inicio, fecha de fin y una ubicación y permanecerá en edición mientras el organizador complete la información necesaria para ser publicado. La ubicación de un evento debe poder visualizarse a través de google maps y se encuentran precargadas ya que suelen usarse para más de un evento. El evento puede ser de tipo Gratuito o Pago y se puede clasificar dentro de ciertas categorías predefinidas, por ejemplo, Tecnología, Cultura, Economía etc.
En caso de que el evento sea de tipo Pago, el sistema debe permitir crear diferentes tipos de entradas. Las entradas pueden ser grupales (comprar más de una entrada al mismo tiempo) donde se indica una cantidad máxima y mínima del grupo; o individuales, y se definen por un precio (el precio indicado siempre es individual) y un período de vigencia del precio. Además, para cada entrada puede asignarse un descuento por pago anticipado, indicando el monto a descontar y la fecha límite, este descuento puede aplicarse a entradas grupales o individuales. De manera adicional el sistema debe generar códigos de promoción que se puedan aplicar a las entradas con un periodo de vigencia y un precio diferenciado, que el organizador puede distribuir entre los invitados que desee. Los códigos de promoción deben ser alfanuméricos de hasta 10 caracteres generado por un algoritmo que evite duplicaciones.
Para poder gestionar las inscripciones al evento, el sistema debe soportar el diseño de un formulario de inscripción con campos mínimos (nombre y apellido, email y dni) y otros que sean configurables por el organizador para cada evento, permitiendo crear campos de tipo texto, numérico y lista de opciones, de esta forma el organizador podrá requerir al participante, por ejemplo, que ingrese su título universitario si se trata de un evento académico.
Al crearse el formulario de inscripción, el evento estará listo para publicarse, pero el formulario se mantiene oculto al público, hasta que el organizador termine su configuración y desee abrir la inscripción.
Cuando el organizador decida, se publicará el evento, generándose una url bajo el path del portal web para que cada evento cuente con un sitio web exclusivo donde se encontrará la información. En el mismo momento o cuando el organizador considere se podrán abrir las inscripciones, es decir, se agregará al sitio web del evento el acceso al formulario de inscripción. Mientras el evento no haya finalizado el organizador podrá publicar novedades, subir fotos y/o videos relacionados al evento, con formato.jpg, .png o .gif que no superen los 50 KB.
Para difundir el evento, se debe permitir la creación de invitaciones. El sistema generará automáticamente las invitaciones (con formato HTML o de texto plano) incluyendo información, link al sitio del evento y link al formulario de inscripción, además permitirá agregar imágenes o texto relacionados al evento. Estas invitaciones podrán ser enviadas por e-mail a uno o más invitados. Para eso se debe poder registrar invitados de manera individual o importarlos desde un archivo .csv (generados desde Excel, o desde un listado de contactos de Outlook o Gmail) que debe adaptarse al formato definido por la empresa que nos solicitó el software. El organizador debe poder reenviar invitaciones cuando así lo desee.
Una vez enviadas las invitaciones, el sistema debe realizarles seguimiento de manera que se pueda obtener información en tiempo real, obtenida del servidor de correo, sobre la cantidad de personas que abrieron el mail, la cantidad que hizo clic al link de inscripción o al sitio del evento y la cantidad que finalmente se inscribió. Para esto se debe desarrollar un web service que detecte las acciones realizadas a partir de los mails enviados y registre la operación en el sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv360VcPIqUPwfURAFQI_SDT64AZL7Bi6Q_HLw3cgwVeOb2uP5kcFxUSRdq3BLPb-R35HWzxKjou-utaGG4rKPyNjUnqtVQ9P7SuWcjVYRTzqB_rnIV4sEKUVotIykpmfC69eclW=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RpBv46apw7cPLwBSSdkYugL9R14GgMYQXjO_4t2ForKVIyEt3zu3tB6SnHtIY86VyOB6YLkxamOskDHZcrMT99J0UkhKg98eqJS7bPtgC8i-4lY3Hz1BVW94-2Un3IrR3sf4hWw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32SIUmF0svSOt6GQmEGOx7CvdWYvdqIewyTasP62BgAV_7qJVL-sTaodKSvaaGLjbTy9-nWVixepfFG8JsDrlfgeH5qkpgm9KtDNJIJluCtTdiL1ltR-N82nBboLD0_QfUvuE4OQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
Cuando una persona desea inscribirse, debe completar el formulario de inscripción, y si la entrada es paga, el
sistema deberá proveer una interfaz para realizar cobro utilizando las redes Mercado de Pago o Visa. Al efectuarse la inscripción el sistema lo registra como pre-inscripto hasta tanto realiza el pago, momento en el cual la persona se convierte en participante del evento y el organizador podrá verlo en el listado de participantes y consultar la información ingresada a través del formulario de inscripción. Cabe aclarar que el participante puede pre-inscribirse sin abonar hasta la fecha de cierre de inscripción, momento en el cual se anula su inscripción sino se realizó el pago correspondiente. Cabe aclarar que si el evento no es pago se considera inscripto al participante cuando completa el formulario. En el momento de la inscripción y en el momento del pago se enviará un mail automáticamente al organizador, informando que hay una nueva inscripción, o que se ha registrado un pago. Cada evento tendrá un cupo máximo de participantes, las inscripciones al evento permanecerán abiertas hasta que se complete el cupo o se alcance la fecha de cierre de inscripciones, lo que suceda primero, es requerido conocer para cada evento el tiempo que sucede hasta que esto ocurra.
Debido a que el periodo de inscripción a un evento suele extenderse por semanas o meses antes de producirse el evento, una persona inscripta o preinscripta puede cancelar su inscripción. Es necesario marcar el momento a partir del cual la inscripción no será susceptible de ser cancelada, esto se produce al iniciarse el evento, ya que una vez iniciado el organizador espera cobrar el valor de la inscripción tanto si el participante asiste como si no.
Con respecto a la cancelación pueden ocurrir diferentes situaciones:
Si el evento no es pago puede cancelar la inscripción mientras no haya comenzado el evento.
Si el inscripto no ha realizado el pago aún para un evento pago, podrá cancelar la inscripción sin costo alguno.
Si el inscripto ya pago la entrada, puede cancelar la inscripción anulando el total del pago antes de la fecha de cierre de inscripción. Si la fecha de cierre de inscripción ya paso, se realizará un descuento al monto abonado, devolviendo un porcentaje del pago realizado.
Una vez que el evento comienza su curso, es decir se alcanza la fecha hora de inicio, las inscripciones ya no serán cancelables, aunque estén pagadas, en ese caso el organizador cobrará la inscripción asista o no el participante al evento.
Para recibir el monto de las inscripciones, el usuario organizador debe asociar una o más cuentas bancarias donde recibirá las transferencias. El sistema se encargará de realizar las transferencias según dos modalidades de pago: automática o cada vez que el organizador lo solicite. Para hacerlo de manera automática, antes de publicar el evento, el organizador deberá configurar la opción automática indicando la cuenta a la que se realizará la transferencia al cobrar cada entrada. Si no configura la opción automática, el organizador deberá registrar una solicitud de transferencia indicando el monto a transferir y la cuenta a la que desea realizar la transferencia para que el sistema efectúe la transferencia. Las transferencias automáticas o no, se efectuarán una vez que el evento haya finalizado.
Para la acreditación de los participantes, se debe desarrollar un módulo mobile compatible con Android 4.3 que permita al organizador consultar el listado de inscriptos e indicar los que asistieron el día del evento por medio de Smartphone, laptops y/o tablets y un webservice para obtener en la aplicación mobile la información en línea de los participantes a acreditar. En el caso de que el participante asista al evento, su inscripción deberá marcarse como acreditada, es necesario conocer cuánto tiempo pasa entre que se inició el evento y cada participante se acredita.
El organizador podrá cancelar el evento antes de que se cumpla la fecha de inicio. En caso de cancelarse, si tuviera participantes inscriptos, esas inscripciones serán rechazadas devolviéndoles la totalidad del
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1okB0OMyHfXmrZrMCoDz4bKBy8buhaRW5EV4-6jCrjRNnVMw5es_dln8du5TxXC9bc75FfVMRptVFbyDKG0rc0KqpwRrHL5vc6z2p-g_rAFXSlpr3WvRVxYZ44MsXEDctf-BOMjA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nE6Y__niYb6RWqMvcLclEUl8wIrXynAIzUpliD8yKhduD3SXTUjQUV09iYzwF-pZ8dr-VltLA33pE_lhfUkpZ8m9gtmN6mBT2aN0LvMFmEDDbQn-Qb4Qmb_dNZq0tN8rQ7YrxUA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tnui4KkPARn8ii7LI-3C8YhnHZvRFBbPiTMPKYbCIBoHlvSCbRUOandbSIRH1855FkTY2Gjky__V1Lxqf5NRjBwzEotMvpd2sqiFgdlpTBFLG9-UdBXLVjMzQODiLdWoDtl1Czg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
precio de la entrada. Para aquellos participantes que solo estén pre-inscriptos, cuando se cancele el evento, verán su inscripción rechazada. En ambos casos se les enviara un mail informándoles la situación de su inscripción.
Por último, el sistema deberá generar reportes sobre el monto recaudado, las transferencias realizadas, así como también los impuestos y comisiones aplicadas. Para evaluar la concurrencia del evento, el organizador debe poder obtener estadísticas que muestren de manera gráfica la cantidad de invitados, los que se inscribieron y los
que finalmente asistieron al evento. También se requiere para facilitar el análisis de los eventos, conocer la evolución de cada evento en el tiempo y los estados por los que pasó el evento y cuánto tiempo estuvieron los eventos en cada estado. El mismo análisis se ha requerido para las inscripciones de los participantes a los eventos.
Es requerido que el sistema esté disponible 7x24, por lo que se definió utilizar bases de datos espejadas (Database Mirroring).
Listado de casos de Uso Nro. Nombre del Caso de Uso Objetivo
1 Registrar evento. Registrar los datos de un evento.
2 Modificar Evento. Modificar los datos de un evento.
3 Consultar Evento Visualizar los datos públicos de un evento.
4 Terminar Evento Registrar el fin de un evento al cumplirse la fecha de fin.
5 Eliminar Evento Eliminar un evento siempre que aún no haya sido publicado.
6 Registrar Organizador. Registrar persona que actuará como organizador así como sus cuentas bancarias asociadas.
7 Publicar Evento. Generar dirección pública para el evento y deshabilitar la modificación de su configuración.
8 Configurar Tipo de Entrada. Registrar un tipo de entrada individual o grupal para un evento.
9 Registrar Descuento para evento. Registrar un descuento por pago anticipado hasta una fecha límite para un evento.
10 Generar Promoción para evento. Generar un código de promoción con su período de vigencia, para un evento.
11 Generar Invitación para evento. Generar una invitación con la información registrada del evento, incluyendo links al evento y formulario de inscripción.
12 Modificar Invitación para evento. Agregar texto o imágenes a la invitación.
13 Registrar Invitado. Registrar nombre, apellido e email de un invitado del evento.
14 Importar Invitados. Crear uno o más invitados desde un archivo que respete el formato estándar.
15 Enviar Invitación a evento. Enviar mail de invitación para uno o más invitados seleccionados.
16 Registrar acción sobre invitación a evento.
Recibir notificación de acción sobre mail de invitación y actualizar los contadores de acción sobre la invitación.
17 Generar Formulario de Inscripción. Generar formulario de inscripción con campos obligatorios y permitir incluir campos personalizados.
18 Registrar Inscripción a evento. Registrar inscripción de un participante a un evento y realizar transferencia automática si se cumplen las condiciones configuradas por el organizador.
19 Registrar Confirmación de Cobro Inscripción.
Registrar confirmación de cobro de inscripción a través de sistemas habilitados.
20 Registrar Participante. Registrar datos de participante.
21 Consultar listado de participantes de evento.
Consultar listado de personas inscriptas a evento.
22 Registrar Solicitud de transferencia. Registrar solicitud de transferencia por el pago de inscripciones a cuenta bancaria.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fo-CCk3HfQyqmIelqxZeDEGaHBUoBLUz4h1ZYqsy4bAWf-OMZMWLjljcUJ_xPelJy6eG6LbmKylUTlBelKI3cGMLiVeQNfoLzm1Le4xW7hao-5bWRdUIAtUmB5qCUfstgcE3xvQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ViAEajLmj33n_3tM-44mWcxfNp6OrqS1qTy2BEJr6jlnCtesEJZf1iO29RCJU5qQblASagmNZrJuR2Vc8bDFroVNnHBrwR9r_A5_dZkKftHCjcj9jshKiMqlP7VaQTZGv3m8OHA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28w4XX4N9ls969OyKdKmvp3b9hYuJZGsLmGNh-FbKcok7HHbTyS5dfde4r4kSyf2JRoBulCGPViwFFT9LJt5TqkAtDIn9ToTwxvTLVFpoxmL7l0MHrAAiVZ1wlEojZtKO-DeeOLQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
Nro. Nombre del Caso de Uso Objetivo
23 Realizar transferencia a cuenta. Realizar transferencia de pago de inscripciones a un evento, descontando impuestos y comisiones, a cuenta bancaria.
24 Configurar transferencias automáticas Registrar la configuración de las transferencias automáticas con las que se pagará a los Organizadores de eventos.
25 Registrar Acreditación de participantes.
Registrar la acreditación de uno o más participantes al evento.
26 Generar reporte recaudación de evento.
Generar reporte inscripciones cobradas, discriminando comisiones e impuestos para un evento.
27 Generar estadística de invitaciones y participantes a evento.
Generar estadística de acciones sobre invitaciones a evento comparando con participantes inscriptos y acreditados a evento.
28 Generar reporte transferencias. Generar reporte de transferencias efectuadas agrupando por evento y cuenta bancaria.
29 Iniciar Sesión Registrar el inicio de una sesión de trabajo de un usuario registrado, validando sus permisos de acceso.
30 Cerrar Sesión Registrar el cierre de una sesión de trabajo de un usuario registrado.
31 Registrar Ubicación Registrar datos de la ubicación de un evento indicando nombre y seleccionando las coordenadas de un mapa.
32 Cancelar evento Cancelar un evento que no será realizado, en cualquier momento. Si se cancela una vez que exista alguna inscripción se debe notificar a todos los invitados.
33 Abrir inscripción Registrar el inicio del período en que un participante puede inscribirse en un evento.
34 Validar cierre de inscripción Validar si se llegó a la fecha de cierre de inscripción, o si se llenó el cupo del evento, para actualizar el evento como CupoLleno o InscripciónCerrada actualizando las inscripciones que no hayan sido abonadas.
35 Iniciar evento Registrar el inicio de un evento cuando llega la fecha y hora definida.
36 Finalizar evento Registrar el fin de un evento cuando llega la fecha y hora definida.
37 Modificar Organizador Modificar alguno de los datos permitidos del organizador
38 Consultar Organizador Visualizar los datos del organizador.
39 Eliminar Organizador Eliminar un organizador siempre que aún no haya sido asociado a un evento.
Nota: El listado de casos de uso no es exhaustivo, se incluye a los fines de una mejor comprensión de la
funcionalidad del producto.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TGpt17jZyJ3mwh569pUUdqSOrNRgRtnVXb2K8LH6O5LD5pJJKctGCIr-n1rqjqVm-ubeJkUInUJ1Z6a_aSWwwTdQgzFnit9AlRceVh9-BKoVD1_fuiZejogmeAK3hQk_QjHbOZw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SmggjmAAi-yzgpovF9afw9gVfWI4K7REChj5IZlg38ECGfzll1rTAd8aZDakViioh5RvE1HnAc-G7bCefRC5BRcABBniE3PVD-_Cbl5rJw88x_XxZdYgrQLeGsBif8ga1pc2KbA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qoiu0eBF180pVQCZDEn5EJNbOkX2HrPXVqqEvrjm_T9wh8AWbUr8vb4vBCOiUwu0i3hN-lJfO3aCusj700ON_2ZJeUaAhH4p1TWQ5cDNPTVH9tsYfvAiuzmq5Lh7eY4KQXXertg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ee0doqle7RryfmaSLksis1fv0dDeF4itHOwxwRw17Y9oQkauX0hj0f50gQ_P49V_jNSMHhYeCJbhl6jOqjVNwFd0wPlrccmk7ByqbHU9utMSgM8e-0QubTcMhtdhBRHYheOV_8g=w122-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NwIQ0yaYqkMpT4a2E__lfgSalvod4CKvOLMx0vG9CiOmZli5yqQy9nW-3_woAjzSoBx243_A5NaePN-4W-dPdpGi1YYx22sNZfLyFFdZIiAP-VVjZFymNh45JcwxMQtZRyE0KsA=w184-h163-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gGXZKFcNKyBieFpiCwbFHVK0naUurcTgblQydjaBVjrQ7JhkpR82GcdXcsn7SS_Z0sPT_idzvwOd581yDWn_omES2i9DHoVvS-Mrsc6YCJXoIdmNnxP0MzAEd-dNM-Fldvkr9yA=w170-h157-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9
Roles de usuario principales A continuación, se describen en términos generales las responsabilidades de los roles de usuario que se vincularán con el software:
Organizador
Rol de Usuario responsable de crear un evento y de publicitarlo enviando invitaciones por mail, también es quién recibirá el cobro de las inscripciones de los participantes al evento que creó.
Invitado
Rol de usuario que recibe mails de invitación a eventos. Puede acceder al link del evento y al formulario de inscripción.
Participante
Rol de usuario que se inscribe a un evento. Puede pagar la entrada de manera online y acceder al link del evento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zKdTv7YNRKlSbZAOlzGobJrOzuzItKJcr1ohiJs-viwj-bD2lSf4_HDpH3-jIi4fY6hgec1IvfGpBbCMnJrP1lSkI58ZpataQVXy8r7cnQH9WfhfwN5RwHHdZaBVw3OhXodU_=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YJGMmKwjRqSaPEwbYv9BdZl51PpXv4gi5xaMM9Ve9GAfiMStNWwqzFInyXlkg7EXmUT1x-eEjC6r9E4ai-vBi6Xm6_3TCcZADT2KLdiKjAOvILMRkcCbnzE7rE5UQQjVujJVTMg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ynMS5TuQlysYVhlD9UeUFs_qIv5UkQHUr_bhyfGcD2slDNZgcMZQIBf0jyU7xKNNdbqSH5Y_unkzQbNh0E-fn48WC-t-NDUWLnaf8RH2_P9vCaB_r2chgaeJ7idSzkOCosMD2=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 7
Análisis de los Requerimientos No Funcionales Nº Nombre Descripción Característica según
ISO 25000 SPA Prioridad Justificación
1 Ubicación del evento.
La ubicación de un evento debe poder visualizarse a través de Google maps.
Usabilidad
SI Alta Requerimiento de interfaz de software que requiere utilizar los servicios de la API expuesta por Google Maps para mostrar el mapa y mostrar la ubicación del evento.
2 Códigos de promoción.
Los códigos de promoción deben ser alfanuméricos de hasta 10 caracteres generado por un algoritmo que evite duplicaciones.
Seguridad NO - Se resuelve utilizando algún algoritmo generador de código lineal.
3 Campos personalizables.
Los campos personalizables de un formulario de inscripción son de tipo texto, numérico y lista de opciones.
Usabilidad SI Alta Se debe elegir un framework que permita la creación de estos campos dinámicos y un componente que resuelva la forma de almacenar estos datos dinámicos en las tablas.
4 Formato de fotos y videos
Las fotos a publicar en un evento pueden ser .jpg, .png o .gif y no pueden superar los 50 KB.
Compatibilidad NO - Al no superar los 50KB las imágenes se guardarán en la misma base de datos como un campo más y será utilizado por el componente de HTML, sin afectar la arquitectura de la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21Oo6kgi-iTPRMIPOaBO5QwL5l1826Gb9RzP_h2L-0lemxaebajMg1GNY-9BIiZXAps8ujTu18G_w7r7bNyz2ajgrYTe48X9mztLzGNp4k1tVkfUE8c2drP53tgPJP-Lr5IQFcCg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kirM4ZkjR7xMntimohhiGnG4rdfjdjRforObH_ySmIfQb7c97FSY8CreUvH8XwTJQQW_tG9giWwlriHGVpcU789FuT0ZeND5-C0OzQs1Mp2C6sJjTu7wGE1UMdcFt1K0DmxvdgQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 8
Nº Nombre Descripción Característica según ISO 25000
SPA Prioridad Justificación
5 Importación de invitados
El sistema debe ser capaz de interpretar archivos .csv (generados desde Excel, o desde un listado de contactos de Outlook o Gmail) que respeten el formato estándar definido por la empresa para importar invitados.
Usabilidad SI Media Debe existir un componente que se encargue de interpretar el archivo .cvs y realice la creación de los invitados según la información del archivo.
6 Envío de invitaciones.
El sistema debe poder enviar invitaciones por mail a cada invitado en formato HTML o de texto plano.
Compatibilidad SI Alta Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail es necesario un servidor de Mail como ser Exchange o Mercury.
7 Disponibilidad de acceso en tiempo real, a las acciones realizadas a partir de los mails enviados.
El sistema debe implementar un servicio que esté disponible en tiempo real, que reciba información desde el servidor de correo, al producirse una acción predefinida sobre cada mail de invitación enviado, identifique el mail origen y actualice los contadores por cada invitación.
Compatibilidad SI Baja Debe desarrollarse un web service que detecte las acciones realizadas a partir de los mails enviados y registre la operación en el sistema. Estas acciones son:
cantidad de personas que abrieron el mail,
cantidad de personas que hizo clic al link de inscripción
cantidad de personas que hizo clic al sitio del evento
cantidad que finalmente se inscribió.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jR2V6RM-pVPWZvRlr9uAz97u4ERCXNI98M0Xv5SjojUUL6E26ual3bonaqIMHrp3i4c13PII7KzYEC9ftvSjZkJnlApVZOizWmLzGLhTjAXDT4ChFsy2hW1nV_0rSRb_KGFPnKA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0v009OJZua4UG8rmXJ4omUl2ddScioaxSih0rqRWkzXx6C1RcthFZdssGcr0SePgCt28tpsZq6q9cXzFR1MTauBImRQkqtoxkXdpkMxtTJXPbTefyv43aBn7YbPtv_SKQm3nrWsg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 9
Nº Nombre Descripción Característica según ISO 25000
SPA Prioridad Justificación
8 Cobro Online El sistema debe proveer una interfaz para realizar el cobro a través de las redes de Mercado de Pago o Visa (Sistema de Pago Online)
Compatibilidad SI Alta Debe desarrollarse un componente que resuelva la comunicación con las redes de Mercado de Pago o Visa.
9 Acreditación de participantes.
Se debe desarrollar una aplicación mobile para realizar la acreditación de los participantes el día del evento por medio de smartphones, laptops y/o tablets.
Compatibilidad SI Baja La elección del lenguaje de programación para desarrollar la aplicación mobile, en este caso, el sistema operativo Android 4.3.
10 Comunicación con aplicación Androide
La aplicación Android desarrollada para smartphones, laptops y/o tablets, debe comunicarse con la aplicación web para obtener la información en línea del evento al que se quiere acreditar a los participantes.
Compatibilidad SI Baja Se debe desarrollar un web service que resuelva la comunicación con la aplicación instalada en los dispositivos mobile para registrar la acreditación de participantes.
11 Disponibilidad A los fines de asegurar alta disponibilidad (7x24) del sistema se requiere la utilización de bases de datos espejadas (Data base Mirroring).
Confiabilidad SI Media Deben utilizarse 2 servidores donde se duplique la base de datos para asegurar que ante la caída eventual de uno de ellos, la otra pueda brindar el servicio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3m2QcpcVfZ-Yi9bWTWn2Esqu4WcEYqehoMFY8-lZO4ZcWFUvPcEfu5NyJLxPLRrFrhEcuAXanl_gDWeK1SYZMaKxITNSQNHXbUsRU8QgGnxEEq4dfOSJAJWIJT1oohPzRX-BiHAQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fmfxnyd6xxmjFzfgtClULb6ayVLZ_nz9PcwjeP2KlMOz-GsJ881z-UEHE8Y8ZAGfhS8hv6rPRYO7nz_zFi55sXBBjWCRZhpGvmzqVTHZ8Hqc5GledcPShZ-6EpaBO8cbeUeKkHQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 10
Nº Nombre Descripción Característica según ISO 25000
SPA Prioridad Justificación
12 Navegador Web El producto funcionará en los Navegadores WEB Internet Explorer Versión 8.0 y Google Chrome 35.
Compatibilidad NO - No es significativo ya que al utilizar un lenguaje de programación web, se resuelve la generación de las páginas que serán interpretadas por el explorador.
13 Sistema Web La aplicación debe ser programada con tecnología Web.
Compatibilidad SI Alta El lenguaje de programación a utilizar deberá soportar desarrollo web.
14 Pago por medio de transferencia bancaria.
El sistema debe efectuar los pagos a los organizadores de los eventos a través de transferencia bancarias.
Compatibilidad SI Media Debe desarrollarse el componente de integración con el software del sistema bancario que se ocupa de las transferencias (por ejemplo: Data Net)
15 URL pública del evento
Al publicarse un evento se le debe asignar una url pública.
Compatibilidad NO Como el sistema es web, se le asigna una url que se conforma utilizando la url del sistema de gestión de evento
16 Imágenes de reportes y estadísticas
Los reportes deben tener gráficos que reflejen las estadísticas del evento.
Usabilidad NO Los gráficos son estáticos y se generan utilizando una librería de código.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CyFxW03voc8QcPdGQxJULTtl-P1yuVYRqZjn0Ab5a6rhGzLhuDLzmu4YRQOa0HNlaZ2SHSdsnDgJUxGaAff55_eUNUQjcV6PNqlzztwvItlzkjRTH3E39GDXHQgkZT78SCOTSiw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QIWIi6VldjdQPfBtRScC52kkPqDFEMIuMQj15aB9uNaUvh-tM7HLeY_iYruEJy3SMlxdNO_g9CAgAoFKoBpf-zBDxT_8CVI2jhPHLF4pM6DFGS8M25HbrMByBF54jgYs0axo7=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 11
Solución Propuesta
Estilos Arquitectónicos
Arquitectura en Capas (Layered)
Aplicación: Se utiliza el patrón para organizarla implementación de este sistema en capas de servicios autocontenidos, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable. Motivaciones:
Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios de código a la capa a modificar.
Reutilización de servicios brindados por la interfaz brindada por cada capa.
Mejorar la portabilidad. Los cambios de hardware, del sistema operativo y todo lo que afecta solamente a una capa, se puede modificar sin alterar al resto de las capas.
Capa Presentación Web
Capa Servicios Web
Capa Administración de Datos
Capa Lógica de Negocios
Capa Presentación Mobile
Capa de Persistencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eis1oDlRVb4m6crOJ1Y2zaDMcCfTKKvzn7tpkHMdwHnGdTbWOBdZnCSCNb03AdElBEIfYweEVlb_8yA05u37EsuY0-0tyUKzampyUdtgnj4AlXbUmkqz4rrVQTEz50xaGzXJnFA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv336qeQ3FOSspl5a32cvSK17-uoaxhA0TCpX_ATsoNdFK3EqlKB_hOIEKof_Y0bX1c1_ptacBnrPHRPwPKhmiMr_iglo0hOudwJFh4kqlN3puwPAwlOW7ipOkti8wqAoicqJ9rVUw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lxPTnC9FPB89fueWwnnJb1eKU8kSyRunkVS_hlQzKlVdiicRtUyn0DgnTDW2301gSPP9_gJq4riJNP69BWI2oFigBRQgD3WyP5oM4YH4JcK5uH7o_y6E1U9vCuT5e3xZbrT0A=w258-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3q9TUpoW7b50Wqm1tpvujURwjsvria2-_i-AV2KMhL-r7Hre7gaXMHCuc--0NC9427AxBnNdhJ3hVeGg8J2Z-fKVXT5KUmaDz_YeweHPYZju1gpNUOkR-MUVlxqYOv3Mheku8hYQ=w497-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PiHr6UzDykDJdVch_8_OtFmeI9CdGkRhTLJdSUs2qOU6ivkAQ0dVmUV8JgW8TifdHZhfMEedmv7uneu6TBWFPEoIbKptC6-JefVT7O2JO4iZrIF-_TR4O8oi1eLmN1dxjtfwUCA=w824-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3x26igCerpsyaJGOpNYEagUpFwKSFzW2g_X-ABpygMk4hBIsQY4UJVbLdyLhfr0UN4ZqvZvEZnP644FDanJupc2e-CZs29QURTxwYG9z6bS0-QSPlkbenWIjmNMvIZ-acxva4F=w824-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UzgsyfkuW1WKKTjOpnJQioBR1d-kiSufIRZzMeTsXgeZDP2qRyjflYhd1noJKWyvA0Ay0bLfAEmKEGfXnChFaSIxDJqvsai2WWH9S6D3t6SSslMvXUVMv4NZ-fTDBtV9YhS2kpw=w824-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-LIl_lsdpE6oDLq24y8i0xy0olrMPd5lkTDVRdqTWXNAUbEIX_78xTPluYvL01tSdfrlwa_u82gDnyvgEmZ3gsUqi631eIE1-5ud_O6PwVvyeDqr9UytvlcN6rHmINo_WyvAHHg=w345-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1E6JlS2Gd2s5hauJynWHiNeghhF7hDGKj5e9iekS1bkaZNSLRM1bgX9SWnzJRP3W32WMO-1X3T8mgC5i5hWJQ1f8PqaPn9fpI6xe3CCVBe71tUzEOMKdg2Ner2aSrCi3fi_DQllw=w345-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sK_fxi9scGwlNjXq2lFpOyQ4Uq_J5uWxC_FUgAJvyneUuuCQMocqdmDTS4l2dAtx4nJvj52qrMJ09X53T2vIy1iB6P4Pp4JrGnbVL125aqiYWLt4t08xfqNzL_jZRH5OgqvUI=w345-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fclG0JoEGNW0Yyn_cPqEGtaShdqhIbJx_i28DnvJkeYLqiakOvwK-2XFgUfF1NhiJRME1PM4ltd-qoeNVRCjInHN8IZwHQQ1_cKNVqm_S3iHrJgKQ6_yd2n-z4CWOZMDvuoCswg=w410-h38-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 12
Arquitectura N-Tier Client Server
Aplicación: Se utiliza el patrón para implementar el sistema Gestión de Eventos web. Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de la arquitectura. Motivaciones:
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad requerida.
Posibilidad de utilizar clientes Web delgados, que no requieran demasiado hardware.
Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y extensibilidad del sistema.
Sw para Cliente Mobile Cliente Web (Navegadores)
Servidor Web
Servidor de Base de Datos
Servidor de Aplicaciones
Capa de presentación
Capa de servicios web
Capa de lógica de negocio
Capa de administración de datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Fdckr3E4COxgBjUxGOzqbivsDV7Q7MvfhV_-m3gsY82A3_Bheo-h752bZe3IggojI9HODOT4cqzHyMWaABNkOksx1D_G9i_RM0yIT-yVTQbgF1K9nEXvaJKeZNpM8v0_urSBg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xFFTR095SnSxZGA3azy0LItuLW-7pDWHimQ6lIOFt24Ay0nRej-CLz6D-HwqqvfP-VX1Ak-xdt1J_Ey0OxCxNCaNiKoxXajWF3Y9a6DRKcB6mMxRBPdh4_j4plY9EyrMhAWXE=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv285-oq9bFbivgl6T4CbZ2WDEAKtYOgPlxagPZe7L0csGlufCRNubkzxZVS76tvy6ZdG_rOgh_Wnk2l8buMonp3ptWM_azZVR9PAa71xwH8EYw1ap5pmmwF2ulou44lETMWxGamiQ=w217-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GI_E3cpPR9A_6rNDdNMhjRUmobMOE8pVzc6z7AhrND0e7JQ1BmxKYzMnfKySNdVb_U4dufYviUb_4s0M0S1GqCV9a5qsqI1sfpx6WM2zt5V39vqen18-tGkZS9ahChQ-Z8N2y6Q=w319-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NzisM-U4utXmanBBz5ZIznY4Fr_b3zEyUfjXocVOGHwaQ5L1ouwORBr3ZqhYMukqXHwRUPdqrHAZTXkLk-5QI4zLWUBMjH0IYOBJwYxTFYmc1GIQ6Nke6wgsb1M3PFcG1_tuYcQ=w135-h52-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hxWDKd8P1k0SS65_P9N4zlQs4EnH2NqvXsqQBOazHJmSsXe2J-Z_CYvSuZDD_J63K1sxhzU2dNes38iuzRcM-sa_5uhEOTCV0m4mI0E38xJbLItP6aLzW4hpuzjBBjUzNDvxNog=w192-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0365ZHz8z5wfB8he8mUOEHcOUBB_fkfCQqiDTJZgb7QBbid7x86lUP72djXcOglbmSp38WQ2rRDqvEhoGeXA7nCTkeF9LpKhYhXmB400YEcSA6rwxFNXj8gEoBl_mo7-6a4Wwmqg=w207-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fV3R0J_A1AT1wPVTmA9aPrrJythvV28RMmI5c9jOR7hRWTJZrQ6qm3fXylI1lvaojmi6zR4YXUrLKN4JpOD3gA45otf2wSlCSLINipecenTeTM_pXwt3h9ZCLx903fAsC6XSfOQ=w272-h75-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 13
Messaging
Aplicación: Se propone este patrón para resolver el envío de invitaciones a un grupo de invitados, aprovechando la potencialidad del patrón y la comunicación asíncrona que soporta la falta eventual de comunicación. Motivaciones:
A medida que el sistema genera las invitaciones los mails se van encolando, de esta manera se envían a un grupo de invitados al mismo tiempo evitando que lleguen como spam al agrupar como máximo 10 mensajes a ser enviados.
Componente
Generador
de
Invitaciones
Servidor de Mail Cola
Generar
Invitación
Consumir
Invitación
Invitaciones
FIFO (cola < 10)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CqFiz2LwOICQ-aAg4K_pP_QL4eqBPFoS6qS_En6zkkGx4S6a6fgSl9Iro4SiwevjjxwuYvLXr1mDWBy98g815VJgiHNJ2hsYZafFGjOegRqStCbOCu7qhacQInsfwdZ0ZyUgv5w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EohUHQf85iHZznJN_VUg9Pl0S4hCq8Zh_0rNyAmW327B4uPq5w2qAGg8EqsmjOugbZ77q2l0JDplz7baNkwBKmvI7Y1s98z0r-4GxIpYWqszfti4t_FixSSMGDbX_67asiUdZiQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2twZBYCG82aDuITW4n9ezPrAVEXUMTl3oUmoG7Z5KGNj4RABkW8zE77yohp5WY3i_DPD_-qMQmTAYaTOhUIxQMzFLpNWtS_hjC9LbpFf9FobJG3LmooYUDAHoI0A8uoLr8praU=w217-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gohbcNXR_q_KAlom5-TrgFM192tmS9Mw_IsoC4Ni7b4kC1rTv6W1ilIg6so1ZDLgXsxLcjtWF3RXKK7PbTULwsw2bCOyE4RDoPIZMhskqkltnRAcIuHM4XJFxkhPwF_UMRS7uYg=w257-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HCXyhjdmlZYwynFwZIxyc9IwOd3SPRhrJnk6q_VdtCfIGBr707RDzWL4_yNcuB4ihYsx8L3oaUtVWCdsxyxHa74BlOQl2A6uYtHYXOmqAQcMYAKWsCCPomDjw7IGOnZjd3dmP=w236-h85-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 14
Broker (Agente)
Aplicación: Se propone este patrón para resolver el requerimiento no funcional de importar la lista de contacto en formato .csv, previendo la posibilidad de que se incluyan otros formatos. Motivaciones:
El Agente se ocupa de transformar cada línea del archivo .csv en un invitado del evento, proporcionando la información al puerto que incluyen la lógica de transformación para cada receptor específico.
Componente
Importador
Invitados
Componente
Invitados BROKER
(AGENTE)
Puerto de
Salida 1
Puerto de
Entrada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv172CkSk6Nm_TfYA51ifm6f3TBlUB3rO0FuqliVH5timKQ1vT9nQJtmw6PwXHoGZt6vqKp_2F_bS3dPmV6AyS-qt0dPXDR5QvUPkYyHclnukLikWfLbrQLydbAOZ8lLuxFwZq6_7g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zMgyIQIBN-yiYv8O8vHFuyFXWFWSmhS8CTDAJ7WFe51XUtYSouEB98u7POin8LVHA_RQE-f_11lHG6wWZ4kuX1uIVrVQqfsF1ch70Yt6nonIyvxtSVE3eCY-Y1uDLso_-tGTBsA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DB0N1Ih7AYnJcnlSCpi0iJZDD3HAMT-ebIh9pl06TUNFn6hyKQOVGvsJ10xXE5FPjpBIYLzCC6kV01SDA3-FuX2TZrrYHIog7tTUwaWg0G_evz0OlBOaY2iPmOcZuukteX7Rz=w1280-h585-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 15
Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2odMN7_2F-zFJKXiM3IKJqRN_9InAaaARCFlhQov9PrDgPLL3Y_K3FDZw6w_igxSNCfwrdwcwgGSxMR295ultGnqZMJZs0uRYG4PzbGKVxhlD7QxJ_LszzDxgy1R1XPANUBO7Igw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3voyi1KiZnliAxJ4mMPAUDFabNVW5SZGDa0nCWrHsyZwTO8z7IDg1XJMB9036mbRD2QGzkF1ZVUFRektQ3Tf3Hc69gQjoKZ-sPl6uVeWrcBWoXhaAFjrgPWEOf8SFR19KuBrxr0g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 16
Justificación de la elección de cada caso de uso.
Casos de uso Justificación
6 Registrar Organizador, 37 Modificar Organizador, 38 Consultar Organizador, 39 Eliminar Organizador.
ABM representativo que soporta la arquitectura del resto de los ABM, resolviendo forma de acceso a base de datos, algoritmos de registro, actualización, búsqueda y consulta, definiciones respecto a las bajas y diseño de interfaz de usuario. Se asocia el RNF 13: Sistema web, que puede estar asociado a cualquier caso de uso de la vista, que sea web. Se asocia el RNF 11 Disponibilidad, pero en realidad eso se visualiza en la vista de despliegue, es un RNF transversal a toda la funcionalidad del producto.
7 Publicar Evento Vinculado al RNF 1: Ubicación del Evento; RNF 15 y es el CU donde ser resuelve la publicación del evento.
14 Importar Invitado Es el que implementa el patrón Broker, importando los invitados que se utilizarán para enviar las invitaciones. Resuelve el RNF 5: Importación de invitados.
15 Enviar Invitación a Evento Vinculado al RNF 6 su arquitectura resuelve la comunicación con un servidor de correo y aplica el patrón Messaging.
16 Registrar Acción sobre Invitación a eventos
Vinculado al RNF 7, su arquitectura implica el desarrollo de un web service para la comunicación con el software Invocador de Acciones.
17 Generar Formulario de Inscripción Vinculado al RNF 3 su arquitectura implica la utilización de formularios dinámicos. Además debe resolver aspectos funcionales relacionados al manejo de formularios dinámicos y su forma de almacenarlos en la base de datos.
18 Registrar Inscripción a Evento Transacción representativa del sistema, implica la creación de un nuevo participante a un evento. Debe resolverse manejo de las transacciones, la gestión del log transaccional para auditorías de la transacción; también definiciones respecto a la persistencia y el manejo de la base de datos.
19 Registrar Confirmación de Cobro Inscripción
Vinculado al RNF 8 Cobro Online, su arquitectura requiere la comunicación con los sistemas externos de pago online (MercadoPago y/o Visa).
23 Realizar Transferencia a cuenta Vinculado al RNF 14 Pago por medio de transferencia bancaria, su arquitectura resuelve la interacción con el sistema bancario que efectúa la transferencia.
25 Registrar Acreditación de participante
Vinculado al RNF 9, su arquitectura implica el desarrollo de la aplicación Mobile y RNF 10 para la comunicación con el sistema web.
27 Generar Estadísticas de Invitaciones 26 Generar Reporte Recaudación Evento
Resuelve la arquitectura para los reportes y estadísticas. Vinculado al RNF 16. Debe definir criterios para aspectos como acceso a volumen de datos, paginación, interacción con el usuario.
29 Iniciar Sesión Resuelve la seguridad de acceso a funcionalidad de acuerdo al perfil de usuario, como así también el registro y duración de la sesión.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bCTZS8lmZUJPPG0A8LMdgiHNyGPrIS71lYreM73dPxx1YkYx1Og4cVGmG7OlrTJOShKioPiteloIBei79_IPcfO8l6zwdBQzcY3pa0JnAMuDvLSBJ5Fe1G85Afg1zAYNR7gn3HQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Cy5_-k57XtcUUy5PgwjSYtOx3MtUq2a2iMRBsqObtIcsxR3V0aTwZYymiSjAawwroyyWs_AisTUVIr094SH_QVjMijNTedGg0u3u1ShyR692Ox3gjakei877YbSk-iTv8SnDhFw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m1hjtD2Lw6x2GQdezRTlfx_q7fSBHFARcBVLVzlfkqREX7XvaRGGYCsEc71TmGcdBLAsnRcOsvpd7Q7DDcQQuWm4tlBB3pH5xbGkRl6jqIIW3uKPt2Ed-qraHz7wEtq0MOldHRw=w1280-h768-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 17
Vista Arquitectónica de Diseño: Subsistemas e Interfaces
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-y4cHu9GDmDD-RyqvoAJIXJNJP3s7k4oTijz_Q8sNK7ZByjfB3Cyu1ex-KDuTlvNlPA9pla5zvE_AAczxY615T5MwKrShF8RsCNpI44WEkoFFbsvLHTJN40nVj5-ii77oKwqFYg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06-AP_k0ffq31wg806HDJ4xJuaf0xuQxG7df6aOQUcl1awkXXdydpB_1R2vNS3oHUJ0Lfs5CiyfRfO-nZaFhOL2icK7FR7ccO-P5K35cq3xvFk8aVv4sVEEczxiwHDHBJJROFH4A=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eYcbZHji1z9to665MCW9jnh5JLkvDY1SXLAYNtXL1E2kiOixFqsNwhyzXFFd5T-HNFvtpjT9Y0CIEVj6FZJS4ciqtAyh0SKngbZ3OjMEgx1oHJ7v6xjWB-MdH1sWHWTYN45QApw=w1280-h732-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 18
Vista Arquitectónica de Despliegue: Nodos y Componentes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2z7AhYdCd0you4QSJ9i1UYPPh8QwGcyhq9-r2NWDKr8VNXeCRWOI_dMCSdFxV35LVGcmVDP5mhM_d12QIz808kmFN86CtDD7OpgqeozneK8lzAVyh0P2lPygsHmv9IgIYiEtVDww=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1C9Erqsny0EZ9dYh2k6tVIb_nWqxYVAKtlsm-KtPrX4GIpWjegdI-Bi1nwcH7qKVRgf8XtinCle27LpM6KfonxvqwRVd-dyKMFSLpg1VE7w0NZR5JsCI7k5F3H4n_gsGl7V323mw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1w-EDET_jQUcT65SQm3uq61yyPFHXyTEM8BqN6DNBjk3PA0DdXHxDLwzp5isOfNWEg4KxZ7qGmh9u_4fg64IezBA2f89ZQeb85rJwZDJqLsIK9KV8CYh21KMPRYWreWq1Ke_9x=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lB3TDaxWZePqTGHjt0UUHxzz8b5GAVDNreQraqYCP7ba3L9DktCOmNk0Kf1IgqUBY1yRwG2VYkNTy6oyTK42NxevEbGO2YfvgqEBzkLhb0I0dt35MxiqR_PSFXwYAgbgPLuikiw=w112-h112-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mKxcwRp7_uUG29ujPmFj3_N6A234A973vM-h3GJTwL5xOFPkjlUuL0IzA8-Up0nlesVAMS7LGg3LpSKP_TeSR_FexKbsYcQxNKAdnGVNpiH-7VpqA1s0HnB8k_1i4SMUHEClD=w83-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iui0l2COkIoMIQYiIYw1RQ002Qhzt47rJ68CoAO9nzFNoXsnqSzbDnXKpQ9E8ljT2Wwkup4j1USo6hJLt1CDUWGLrxloEPhbLMPkOrDynSIFcjwX_3ATACAoqX2i0mXDt-09AsA=w169-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zwdf2rR1rt6mEe_fWRfIppkjQxMEfVpxPYHyJWmkZpOkKVnqTIk_u3_10__lx-4xwxAYlQDKX9fnmZ4iSEme_PTKRjFYnmeGmFP5B2FUaYT5N8PS6EU8w1esElyWXjvB5cag6=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Vw3TDxWAD6yM5OMcQ_OGhayKAW5Y4h_sEF7edx-6MPhINl9f8hnYe9BrURcuAqrmrCccosa_sa3HBWIC6SPL0cZv0cvdDRPmXR4dCcYMkaB7Gt7u7VuT12yA43mpP8gug-tFsPA=w161-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ID_JsPQHmE6AnkF27O6-ewIgn6dReztUEF6H3tuz6KA9EdCqSC6FSEYXI4YKlvrGMNNK0hZ2CM8vXmKYjkrll1GkNUIsSp00eofTCtgw-kokeT3mFp6xIP465dLQPb-h3X4faIQ=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kNUltrcN3NtcbpEXLhZ5b_m9LZUPFy4ql7KcA0ZerdcO9i44CLMhR676f2sHBDAzYxYBzRKfujB54p624RK0gtKMA53jjpHd7VAnD8Pu33GB4k-Q_gQdnyLAT59QE_huFOgaHxw=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sz-5jxm3Jeub0Mvi9DYUccW3MmNOajbZIyewsT7s4KXH1O_nGO7shdpPpKXR_kdiQQv_wnLnCq3AAzO3HVwujqRcji-lw0cR1PtWhgJMQIUMToEh4uSjqoHT2Zs65pT_xfVjz=w193-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uIxBre1DPnru5TRBgF31oP0-NkclUy6IFAQWesW6mEKwXCMAhOKAnKpLYgbFaC1tWdYrLXDyEuUHh6cpYoJdpBcVjkR5CPveDOGkPAP6gW8YOTdBBBJsFw-gwPwGfMPAwfnkU9g=w494-h78-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IzpwtjA1asumOvJMMbJxqMhzLlNyAdSiOG08ih0jRc0QVfVlVe-vfHG2n8V8nlyChr7Y4_uoq7giXvc5Mjn-JT7uGpzNP3G__2ok6T5C6uMWo1v1ziU6j1x2KnTxR9QaicysHvA=w432-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14AKdGox3BNpVHj2A-e1Nnpf2jNA_bkzNejEHXfvrmBh9j47B5riDJaLUlwPAW-Xemg6SPMiEERrugKccGFbv7UeU9Ih-vHFNpj8Ge5xm_SJOyIxfhpgb0bAnBWnTfCmODrAwoEw=w544-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pcteJ19lJ8Hp4fZMnIhf7l__9KrQooj096v72C5cnhk7JWSC8uSXsh6P2UXXHQU0gpAW2tPMYF_hJsF5Y38d5alrfyBweIN2FsYXpA2zRK8HBYTWMuF0yRNBM3vCP8pWwKsb5gg=w135-h64-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12PM1inLqWtlcmPowK-eZwvPzCsYdMnqovdLGzWBTbHs4cW4ELAuZP8Dmz-KS92ssrW0iDdTN8sADdn-WHgZXa9KzEHmO_uhCvL9oDyqrUOIr4YpYlPj3OA2Wf-KmntPXhFV1__A=w135-h96-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TIlofRcLSVbnq89qPw3LS88xOu4NjFFrrEzbYLQD-O9rQaUzG0_OMMFNgTUWxDEqHfJKwBlRQEQ41D5Gke3weAyrLESS5eJ7lJmLo_ssiUMQ_Pe1DVw3loQT5lPtKngU2KbJy=w343-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29RkCc4PdxLs_-S2-Ysi2ew-xJvVNAEdjmDSuE_G_iHAVn0Qn6A7YCrGVlGT_JAm5dOHz3-5wUjD-AJPGoshcP9b7x4ZSldROV5Oa8wWE1k0e5kIl9MsMOWFGNW0MEyQT4EKkP3Q=w359-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mxyWSye0wmk0A_y73ToJStRuPufeuCaFvIx2M74kJ5XZxDLxqNZS666XnfeX6fFRB2waKiF_d8DZjHK7mVGO0ahFaVGDe0zCyjczEivQoaWvQIDnCoEB6KiV6go9aqFZDQ3EEmA=w327-h54-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv119ttun0puJunVcrIjjkmRQIfmHxchyj7GkLv8Q99l-SjDTlaf5lJQk1hYqkFMs9z6MQxlRVTJwbX-evpWiqKRl7FrHPYvWN2QYcUUztC-IgS_oq_suCWPqevohXjO8YcRFTtTZg=w327-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iy_65mHVkyBLF7-F7F7PfXqxQWjFrtwSssXYKRU1vLFd558q1YZRZ0Et-LM5hswlGiRS35F1XFDmOTmf64W1AAXu6C1jKQLdjc0IlKjNpJz-yjJh9fLUo87Iq0UoY0N-cGlODWw=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lS-Vb37zsd9TeaF7DOAT3Sy0MWMH5MYpPvk4IYfnereTr_VqgTN_I_zqrMAiqxXmhEhYJLzbrrgZOQfvF_WbEyAU7iO8OUkheyDkYBloXqBCvIBDbwYeceR2TNu77ux9la6cixA=w113-h113-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FyxAzLU7gE1YQBLa08HhS53_p9lXnc_Kv7tOjKpONWUg9bZKpx5N3_OKqTV51r_FfII-xVmFXZd6o9FI9tPdbybk4WXkAzMaAokvaAMuhArAlneRj_Uhw9oRJs7pald9mqyQbuw=w310-h79-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CfJ5jMbYVsWr1GkTmjpWnb-8wdkoaUseeNL9gZqJegdDRisCS98IMTFjLLoy-3y2ythYwb4s6kybjZ5dN85B1PpFQvDzjN7HZNMoIqAByn5Xbk_d2qpx-2Fp1GSQerMg_H-wS2Q=w325-h40-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jXngILdhH8YgJ2VRvP1-lKL5-ZdV7j1JS6AZQ0BMbTutzNC13mI9JFTEsZIWrY9ZTlAGuZbMG5NaifDeP3aYJp-IfBCYGImpX_7JP6CuJ7JTkebbwzhv_6JI0mPMbB1v4zkfc-g=w194-h33-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nDEKRaT20cItOp7lYWaI4xmdSh-6SXx7YrYL_jx0AME-eRkKN3MNCeHMNTr5o7xtAaLM0sDuS874RR-2JZ5Wo48FQHnndoAe8y7bFkczIo_MOfkzC5XHY_POL5-dZufFNGzPBWw=w185-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qyfZ5zp7m7Lm_9Dq3ZhWdy1mwMR25Ow5n5tqdTVbIOWSRHi6AoSFDW8L0qJX64w0UpluA97k7GMRMtYNF2ppDmh4dBz8Wr84cYcI66QFkAVY92QnSYPRTtf34YfKm-h_ShulF=w174-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv070fTk55JBZ30HieCoKB8QPTn4zvcFYAQYNUZxA0kn_Y5zp61KTRLH1Z3IYwvEybocoBfbDaHV_EZ5TujNZ_cB1RWySltQHV9K7kRjf7hS7UUCbWX58ltLIrwOXi6ebGQe4S9TWg=w327-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zJC2RTNMPPXtBut95rvdx5fmijSUcXgpleEBwL-ef67k4MIGiOLseuoFFnqBkA-uF919BDUKjsqLACqy02t8AvEAAjYde_6X9n4qqyO9nCEROcvN4IFmOGRdt1dJDYC8iOxpTDw=w231-h41-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WJotGSoMEjgqvNHbVvKrE_JPHFurHF7tHmjTJdp9umHci8VFRVaBg2-ZVkxg0koR9_SM0O8GR_VZv7rhZObyXgYOzP9M1a0ZWX3ESOKBWSir020RXjijR-peG0V7Zc2N-qQOAjA=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dp3FlQJI1QnigSSpQhJssBEqJTmydxsLWbTAzbOOcJkAGzDQSZhO9m5ZAyAP14fMjsO0GkLUpIOSjJ_EmVDTLQmAzGkaKqow7mWfj1GxpnNWShA_tRiN5ZOWaamccVzEXrTb3BA=w343-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3olIBOG2IABq_0UFExkmmEJdPaR4X7CTAawArwOQGOHWDiE3d1so0zNMCNxeimbTG_0vHvu_5YqEe2BafRIRBUGUNvf9yeFYdWR2n93MCAkp6IEQYro-7YBi-rBsY8DQQdfgjVFA=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AvfEXBiX0esxP92q-ffJK7ZQAQSxFsQaIo5BXTZoKSNSAmI3nSsScm0Dov3dj-dmZeOknyaMr3GG_0GDJ9xWgR-LgEFMNN38sE88oyQ-OLU3s617PvzRKCGfpY-y_0x4bJSEOMQ=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AoGFJYx7Ts_gzYGYbXzma0XS9NuxubA1VyjnciqlwSd1My1XKZQ-PsJ9KWrGJqdfIlqljUx2mxlzu6sW-tvOAJPSwILKQ9XUgs7HfU4cJB_oYA46t3mA__36P-_LdrQDCZjDpFg=w175-h90-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-Yb7KWEqvT8zWYFV4aUTqpetHhZo4uTXqVYPGB4Ig5UV6TCv2NF_uinfhPy_G6OIxhFJBOkwvrq2HHdQX-iG3YfYS9q0pPcKa0VCR9jfqxowMajDxI4Jzyv3a1qTpX2efh3NG8g=w161-h106-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YnZSA6XSMpHZYGHL8A7aQmQJ0k0I-AC1bbai7sihxmwRfLOgu92Fj6bLAZ5A0JBwji1q2vcQPcgHU_ABlD9dPrn6D26gJrgf8ZVZhxWeLx2zlgq6S2BzQfIaXp05brpzJeXh_Tw=w327-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11cQS9RY1ZAIfVZ_OVrCGKwUNTSy0wwFnv4EbtX8Us3qV1aZ06T0UF36uMx4cSYNIGeb78lgewAL06Q9g-qqZFTeSSZEUqGUQW_WKTTZ_cHDkmv0y8eRqNpWYy95ebhGLCKPFd5w=w327-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28Ydb751hocJJRINZ6KXrTej5A-WO1lmIxBtzSYqpDJWts8jvMuTmXoJpL81_M0CCr6Nv5i-B3qiIjLYNRK-KFic7-IqT212hID8n7D9d0ORwl-LiwwXvb2_vmklEDhVgm6-kw_Q=w327-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZourxvsAYlez5TSmvbpFyRQ_c2IVtA4lBnE5CfJ-TGF-VE6khGHmXVDMH02wdM7MEF4jefTNhas9kbYq1WjRylaNjRYYFhBt2l3U58o5f31oecZ1zgOlgyEc1I7mJr3PcZm8FZg=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cAryCtMNnVqQOyeYNX_R8hSl722rYhVIlj9VBCEW-6Q-QJuKmelwhZzZad0ZyssdZrTDuiOd2vDgSVIZzwilOq4IPtsHAdz_0-YPXXzJJZbhE9QEP2FOKdKqtE1Hyld1EqtXhrg=w161-h106-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hG5nUnPWhPoP8Oic52BIzdXWJPGYMF4RUZp9-fFFvWdNWtD4Ii6jQnOci_YSOxbxkdxdoQEdUj0J1g5bQzXbLGdYtTuEEqMhq3AGTr88bQqwGJdwKb6JeJ4133u21ugnucojcsg=w161-h106-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20Q7o4zgoiMl4Ee7b2dYyxfouodPFPEmSggzKLjyzi0TPPzsBdQPkM9Z6iCcg4s31G4a0RG5oHE8vrskt26kUlG2ffoLfBiJy_0JPfrPecKa9r5bCVIhScHv5fQnJewSHjXqM0ew=w327-h45-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Gestión de Eventos
EPC_GestiónEventos_Arquitectura.docx– Versión 2.9 Autor/es: Florencia Bene Página 19
Vista Arquitectónica del Despliegue: Niveles de Hardware
WWW
Servidor WEB Gestión de
Eventos Servidor de Aplicaciones
Servidor de base de datos espejado
<<Giga Ethernet>> <<Giga Ethernet>> <<Giga Ethernet>>
<<Giga Ethernet>>
Servidor Exchange
de Mail
<<Giga Ethernet>>
Cliente
Web
<<4G>>
<<Wifi>
>
<<Fast Ethernet>>
Cliente
Mobile
switch
Servidor Google Maps
Sistema
Bancario
Mercado
Pago
<<Fast Ethernet>>
<<Fast Ethernet>>
<<Fast Ethernet>>
Visa
<<Fast Ethernet>>
