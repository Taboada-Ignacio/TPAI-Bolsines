# EPC Gestion de eventos- Análisis-PD-V1.0.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta un 
ejercicio práctico complementario para el diseño de sistemas de información
, enfocado en la 
gestión integral de eventos
 organizados por empresas. Su propósito principal es guiar a los estudiantes en la aplicación de 
patrones de diseño de software
, como Strategy y Observer, para resolver problemáticas específicas de arquitectura y comportamiento. A través de diagramas de clases, secuencias dinámicas y especificaciones de código, se abordan requerimientos funcionales cruciales como la 
generación flexible de URLs
, la 
acreditación de participantes
 y el 
envío automatizado de notificaciones
.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hL8mSrKHtAxsdzgZ0etJf9lC4cw2LJGU1cfDTtmigFPKcDcQcWZLog5yKu8InUkaxoN-2iNNVlTJ7_2S3ZP3v9DbcweKmLcGZW2QKV9ZtquS3gX4cI-IcDMEhlyccNRDdbPhM=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24VyqC8g1wZ6hs9Yp3_hoQIwpi-NGcDIQQ4HQtqhJ14jbS2bgPnm-aJEPMDEylYXrXmz_mGwqCuYda231KThUQONvBGPhwbRlMBRGj-NGoESlZVHK5yf_jtFBT5UGyhqkswxcxvw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iVEhHcxfISRZzi35NLCtjvB4kTlHa0smobUdd_aOytaHHVFhvRPUBgfrujXK7_F7nCG3cQ1vgPuDD5nJN4wrC5QvIocOQkCWzkRxUZLENCCh8jbLnwICM2JVDrePqCazov-YM5Q=w122-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wz5dFBp1fkJTPsV7QRW55ryNvdSrWLxbiCnRveu7uf2NYaCrStl1NntoP9DMBEeCpPSIARELYJQK4Lxgl7Iimw8QMpfYG65lNGHOKqbhaTOljKNOW70ZI67r_k-lVgLvsxP6klw=w184-h163-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZTnEyyhGNlE1-qO3x2KFY8sfWyfhzSnHpemRdLKYGHYliwZ4nTpY7lfbr9kLJ1A-Mbps5Mc27dA9JhAkCDEL_lPT88NYc6TNHb3S3pAGKPnYKRtEPuBFER6vddnOpf4G5KK4tug=w170-h157-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD V1 P á g i n a | 1
Dominio: Gestión de eventos Una empresa cordobesa dedicada a la organización de eventos de todo tipo, por ejemplo, congresos, conferencias, eventos culturales, deportivos, cursos, etc.; desea crear un software que permita a sus clientes empresariales gestionar de manera integral sus eventos.
Roles de Usuario principales
Organizador
Rol de Usuario responsable de crear un evento y de publicitarlo enviando invitaciones por mail, también es quién recibirá el cobro de las inscripciones de los participantes al evento que creó.
Invitado
Rol de usuario que recibe mails de invitación a eventos. Puede acceder al link del evento y al formulario de inscripción.
Participante
Rol de usuario que se inscribe a un evento. Puede pagar la entrada de manera online y acceder al link del evento.
Definición del Producto de Software a construir: Objetivo del Producto de Software:
Gestión integral de eventos e inscripciones de los participantes a esos eventos, considerando el cobro y el envío de notificaciones si correspondiera. Emisión de informes resultantes de la gestión de eventos, de las inscripciones y de participantes y su nivel de asistencia a los eventos. Alcances del producto de software:
Administración de destinatarios de invitaciones
Administración de tipos y categorías de eventos
Administración de organizadores y sus cuentas bancarias
Administración de usuarios y perfiles
Gestión de eventos
Gestión de invitaciones para un evento
Gestión de entradas y promociones
Gestión de inscripciones de participantes a eventos
Gestión de pago a organizadores
Generación de reportes de montos recaudados y pagos realizados por transferencias y generación de estadísticas de eventos e inscripciones de participantes que incluyan el análisis de evolución de los eventos y de las inscripciones a esos eventos a lo largo del tiempo y su permanencia en los diferentes estados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EEQjM7l528EQs0yVWzv6Ji0CBuhcHIR1Wa-mX_YV5mA7N6t0l4Rfyyob3_p3175c1MQ5Ha8Np06D-kfeLTyymHUa1UgKUiaWOcTDjdjHCCM_Nok2deRtZ7Taf5jo6eqpRkFDWXQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2K4kwK-RHYUXy8FoZtPm0OBIjRMf7CCgbIEDBSqmV8GaUdQtXijKO0Wqb6tC3xmto0y2CZO2uI7RJ-qavxNJGBla2todXa6CFVpCEf-Ivnd572wL5836fgwuer-GR4iB2ipdANKw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Hvncm2h-8QvhIF2OLXG3vfqK6nDrViiNh42JhSI7jLrFBkx_IBFb3cBjfRIuxu_3Ln_942jauZlHyMoksRHEqiIGcHGExGTG6p27LBgFxPBhc6Qx2oJXfgymvaNbgOi7aTrmY=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 2
Reglas de Negocio para el Producto de Software de Gestión de Eventos
Nombre de la RN Descripción de la RN
Creación de un evento
Los datos mínimos para crear un evento son: nombre, fecha de inicio, fecha de fin y una ubicación. El evento permanecerá en edición mientras el organizador complete la información necesaria para ser publicado. También debe indicarse el momento (que debe ser anterior al inicio del evento) a partir del cual las inscripciones de participantes no podrán ser canceladas.
Tipos de eventos Un evento puede ser de tipo Gratuito o Pago.
Categorías de eventos
Un evento puede asociarse a una de las categorías predefinidas, por ejemplo: Tecnología, Cultura, Economía.
Cancelación de evento
El organizador podrá cancelar el evento antes de que se cumpla la fecha de inicio. Si tuviera participantes inscriptos, esas inscripciones serán rechazadas devolviéndoles la totalidad del precio de la entrada. Los participantes pre-inscriptos, cuando se cancele el evento, verán su inscripción rechazada.
Tipos de entradas para un evento
Si el evento es pago, se podrán crear diferentes tipos de entradas. Las entradas pueden ser grupales o individuales. También debe definirse un precio (el precio indicado siempre es individual) y un período de vigencia del precio.
Entradas grupales Implica la compra de más de una entrada al mismo tiempo. Se debe definir una cantidad máxima y mínima de entradas que se podrá comprar.
Descuento por pago anticipado
Se puede asignar a una entrada un descuento por pago anticipado, indicando el monto a descontar y la fecha límite, este descuento puede aplicarse a entradas grupales o individuales.
Códigos de promoción
Los códigos de promoción se pueden aplicar a las entradas con un periodo de vigencia y un precio diferenciado, que el organizador puede distribuir entre los invitados que desee. Los códigos de promoción son únicos.
Formulario de Inscripción
El formulario de inscripción tendrá algunos campos mínimos (nombre y apellido, email y DNI) y otros que puedan ser configurables por el organizador para cada evento, pudiendo crear campos de tipo texto, numérico y lista de opciones, de esta forma el organizador podrá requerir al participante, por ejemplo, que ingrese su título universitario si se trata de un evento académico.
Publicación de Formulario de Inscripción
Cuando organizador termine de configurar el formulario de inscripción, deberá publicarlo, generando una url bajo el path del portal web para que cada evento cuente con un sitio web exclusivo donde se encontrará la información. A partir de ese momento el evento estará disponible para abrir la inscripción.
Apertura de inscripciones a un evento
El organizador podrá abrir las inscripciones dando acceso desde el sitio web al formulario de inscripción.
Publicación de Novedades de un evento
Estará permitido que el organizador publique novedades, suba fotos y/o videos relacionados al evento mientras el evento no haya finalizado.
Invitaciones para un evento
Las invitaciones deben incluir: link al sitio del evento; link al formulario de inscripción, podrá agregar imágenes o textos relacionados al evento.
Inscripción a eventos pagos
Una persona para inscribirse debe completar el formulario de inscripción, y y pagar utilizando las redes Mercado de Pago o Visa.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02i2j3M8Aiq8rxad-mljFguoC2uRiobQ9keOieWJyjKSY0ScrNtT5m96v308K9dPuNzxaIthqs3KP_QATiq3atvUhbCo3YkQl7fe6cJnwENQ_Q2A8_cTb5VOlAcNcpKFU7n1tVDA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sfptaR3e9yRzZYzPQ6W5zdqyWCqrXTPL-4qx3pWH5GRDdsA6xcAMd5Jvy8jQ-4UnAxJBQtXTg9jFNoX-_jgpftoDpGgxe0GNeUPwl02JKO7SmgTDN-EE5lsVLe3TaqMVZ2koKDA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1flKZi6VK9jS6bVj4BzptLkOrk3CoJzDTy9cekrPkBLwiZ0WLU5rZMt__WgUWf-5KIT1wPl3KCxxlPGmIE9cVlg38_QS7FczDZ7ggW8XNjk29d5366vcKZvADJAeY_7jKoDHf-9w=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Nombre de la RN Descripción de la RN
La persona queda preinscripto hasta tanto realiza el pago, momento en el cual la persona se convierte en participante del evento. Si al momento de la fecha de cierre de inscripción no ha pagado, se anula su inscripción.
Inscripción a eventos no pagos
Una persona para inscribirse debe completar el formulario de inscripción y desde ese momento se considera inscripto al participante.
Cupos de participantes para un evento
Cada evento debe tener definido un cupo máximo de participantes.
Inscripción a un evento
La inscripciones a un evento permanecerá abiertas hasta que se complete el cupo máximo de participantes o se alcance la fecha de cierre de inscripciones, lo que suceda primero.
Cancelación de inscripción de un participantes a un evento
Un participante estando inscripto o preinscripto, podrá cancelar su inscripción según estos criterios:
Si el evento no es pago puede cancelar la inscripción mientras no haya comenzado el evento.
Si el participante inscripto no ha realizado el pago aún para un evento pago, podrá cancelar la inscripción sin costo alguno.
Si el inscripto ya pagó la entrada, puede cancelar la inscripción anulando el total del pago antes de la fecha de cierre de inscripción. Si la fecha de cierre de inscripción ya pasó, se realizará un descuento al monto abonado, devolviendo un porcentaje del pago realizado.
Una vez que iniciado el evento, las inscripciones ya no serán cancelables, aunque estén pagadas.
Transferencias para pago a organizadores
Hay dos modalidades de pago: automática o manual ( a solicitud del organizador). La transferencia automática, la configura el organizador antes de publicar el evento La transferencia manual, el organizador deberá crear una solicitud de transferencia. En ambos casos las transferencias se efectuarán una vez que el evento haya finalizado.
Acreditación de participantes
En necesario indicar cuando el participante asista al evento, para conocer cuánto tiempo pasa entre que se inició el evento y cada participante se acredita.
Finalización de Inscripciones
Las transferencias de pago dan la inscripción por finalizada, hayan asistido o no los participantes. Para los eventos gratuitos la inscripción finaliza cuando se termina el evento, hayan asistido los participantes o no.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3P4RO8eiQoknymPuJ6OSNQ7u13lrq1m3_1oDHA6DxfZzHow4FGJ2jojj-NlskKLOWEeS3dKoFRSrToh7DsFhdhJX2MhdL9c1u-uvLkTGxzWQpZ1buY4jXshJCDulh8XV2-ZM7L=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1086s8jk6tGW-G4pvbyuP6dqwgSSVSxHM_LFFnewqHpx79-cC74EXVyGCnhHW_J-PMgTfDGo2aOX0yYEVTC-RN4Nm6GPhMPFxUm4c4m9s-QiJy98hfJydZGZ6MKj2RKJPtxm5V=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PpIFSEuIvuJa2R5xK6jV4u9GxB6KfF4aEDx9BIPUpZCfz-u1MgMxKJrZTyxwUhUP0xQfsQ5iD_2hsx9hVl0-sCbS-f2ub6XZFi9pnThb-2Ma4zlYM2hp4dkNLZuQS-m5XCzE4UA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 4
Nombre del Caso de uso: Registrar acreditación de participantes Nro. de orden: 25
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Organizador Actor Secundario: Servidor de Correo / Servidor SMS
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Registrar la acreditación de los participantes a un evento.
Flujo básico
1. Organizador: El organizador selecciona la opción “Registrar acreditación a Evento”.
2. Sistema: Busca y muestra el nombre de usuario del usuario logueado y todos los eventos del organizador que
estén en estado “En Curso”, mostrando el nombre del evento y solicita que se seleccione para cual se desea
registrar acreditaciones.
3. Organizador: El organizador selecciona un evento.
4. Sistema: El sistema busca para el evento seleccionado todas las inscripciones en estado “No Cancelable”. Para
cada inscripción obtiene el nombre apellido y DNI del participante. Muestra el listado de participantes.
5. Organizador: selecciona cada participante que desea acreditar.
6. Sistema: solicita confirmación para registrar la acreditación de los participantes seleccionados.
7. Organizador: confirma la acreditación de los participantes seleccionados.
8. Sistema: Para cada participante seleccionado, cambia el estado de su inscripción a “Acreditada” registrando
fecha, hora y usuario que realizó la acreditación. Fin del CU.
Flujos Alternativos
A1: El organizador no tiene eventos en estado “En Curso”.
A2: El organizador no confirma la acreditación.
A3: El organizador ingresa un DNI que no pertenece a un participante.
A4: Los participantes no tienen configuradas notificaciones.
A5: El organizador cancela la operación.
A7: Registrar acreditación de participantes con notificación
Observación 1: El organizador puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0suytBMZzTYGL0TD32R-eMv8jDik1uV83geG9QtSRBySKkC2BwnBZcHFhIPXwU8xwa2ORsfjr6R_58iEiOw5Iumuc5FgDYJIIvHfsoolSVz5lqTwLbaDyBr_2UdGzKRcKWNhM0=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3n684c1jIP-37QvOFWaBw98MpKUPR4J-u6H_VpiWwJHFKQXbSg1r1cxmz7DrWCXcXgluQUXLAC5BWwVE66Y2OJkySs2gIHDOIG-8p-ljIc69P0fO0cKUaKE3qjYchx_G7MyhZQfQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vIueuKRoFA_D4nMMfYU5OXXzcLSss8Pd4EpfMxQhqBGoL3VnL6MHBlkDYXimYRiBsjQ3CHm0SzmT7y2EoF8PY8asDxa4x4UotkfgzgeJGqIb8LPXvUgHvM8KF-oZ-yd7ajhvSnA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Nombre del Caso de uso: Registrar acreditación de participantes Nro. de orden: 25
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Organizador Actor Secundario: Sistema de correo electrónico, sistema de envío de SMS.
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Registrar la acreditación de los participantes a un evento.
Flujo: Registrar acreditación de participantes con notificación
1. Organizador: El organizador selecciona la opción “Registrar acreditación a Evento”.
2. Sistema: Busca y muestra el nombre de usuario del usuario logueado y todos los eventos del organizador que
estén en estado “En Curso” y solicita que se seleccione para cual se desea registrar acreditaciones.
3. Organizador: El organizador selecciona un evento.
4. Sistema: El sistema busca para el evento seleccionado todas las inscripciones en estado “No Cancelable”. Para
cada inscripción obtiene el nombre, apellido y DNI del participante. Muestra el listado de participantes y
habilita la opción para buscar por DNI.
5. Organizador: selecciona cada participante que desea acreditar.
6. Sistema: solicita confirmación para registrar la acreditación de los participantes seleccionados.
7. Organizador: confirma la acreditación de los participantes seleccionados.
8. Sistema: Para cada participante seleccionado, cambia el estado de su inscripción a “Acreditada” registrando
fecha, hora y usuario que realizó la acreditación.
9. Sistema: para cada participante que ha sido acreditado, busca su configuración respecto de las notificaciones,
su email y/o su teléfono y notifica según la preferencia con un mensaje “Ud. ha sido correctamente acreditado
al evento [nombre del evento]” y la fecha y hora de acreditación. Fin del CU.
Flujos Alternativos
A1: El organizador no tiene eventos en estado “En Curso”.
A2: El organizador no confirma la acreditación.
A3: El organizador ingresa un DNI que no pertenece a un participante.
A4: Los participantes no tienen configuradas notificaciones.
A5: El organizador cancela la operación.
A6: Flujo básico
Observación 1: El organizador puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aalgsjY1KDW9O2HpZYy8dcogXwFZ_L_e0_FTYjYz4SPKGx0WCCJhMyJlRpqYuGzOfz4N5Yk75pmJtWVjXSKg8MGe9ViHjpxrTiy-yZK8loXuEx116T7DS6GFP47t37DXL5Usm5A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lNcGvX5Q6veaOciw_jEruPoXG1VVUg7cGw3QX4TwS8JMEvdmjgdSFoHNVcZ0GjstC8HTHximtRL3ZKnkvsbvwoGf4zQdWtgROZbTQsRUBBdkJhT-zKcsfqGGtsURmujAYcABoPQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VRBkFTbCmPddYizUFy7MLn3bZgJRt6od3IHz0CrtklKPKR6Bia8GqmggIwX1ZeFlHn0ELyCtNUxrgS6XW4om22aDjJ9U_Zbvp5QRxvYB-9hSDnmUTjDmcymhTa7HYvRNdxxlJow=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 6
Nombre del Caso de uso: Publicar Evento Nro. de orden: 7
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Organizador Actor Secundario: no aplica
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Generar dirección pública para el evento y deshabilitar la modificación de su configuración.
Flujo: Publicación de evento – Generación de URL pública
1. Organizador: El organizador selecciona la opción “Publicar Evento”.
2. Sistema: Busca y muestra el nombre de usuario del usuario logueado y todos los eventos del organizador que
estén en estado “Listo para Publicar” (mostrando la descripción del evento), y solicita que se seleccione cual
evento se desea publicar.
3. Organizador: El organizador selecciona un evento.
4. Sistema: El sistema busca y muestra los siguientes datos del evento: nombre, descripción, foto, ubicación,
fecha de inicio, fecha de fin, tipo de evento, categorías, medios de pago habilitados, tipos de entradas con su
precio y para los tipos de entrada grupales muestra cantidad máxima y mínima de personas en el grupo.
5. Sistema: Solicita confirmación de la publicación del evento.
6. Organizador: Confirma la publicación del evento.
7. Sistema: Genera la URL pública del evento combinando el nombre del evento y la fecha.
8. Sistema: Cambia el estado del evento a “Publicado” registrando el link del evento, fecha, hora y usuario que
realizó la publicación. Fin del CU.
Flujos Alternativos
A1: El organizador no tiene eventos en estado “Listo para Publicar”.
A2: El organizador no confirma la publicación.
A3: No hay tipos de entrada grupales para mostrar datos de cantidad máxima y mínima de personas en el grupo.
A4: Se publica el evento con la inscripción abierta.
A4: El organizador cancela la operación.
Observación 1: El organizador puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YAN5yGVPKdbLOLMInXUPwln4Mo-X8bxenBBw8rWRsdlDxObTQJWm6atDHKbnOhKSbfKD6T215I4NA5vwSblEjsc1f0o7bsVem6aUBTa2--CTEUExrNYzkEG4Dd18j-EeulzZMZA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NtM35Eg1Pc5AXzrLBG7UH60L2uO-UtKYyEBXs2_4PjLgjN4YPxBjc6Of7ytnN7rz50lDxWsrr3bUnuPmyuMTsnqQsdxHH-uaU5TuHSIq6g9yH30FWKNh4vuWXodSK9bpcHD_C5Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tKT1aw8zshNMWC1E-Uc2lIXL7boD3fgbq52PHDmuPs_kmE8kRYpw8DFjp8yVJRYPu-FPkydD0LthzvcsQAl1O5q4fx5Wd4MkeFBUZAMVjTM6U7i7facVtfeWnZKusYoCpPTRe=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Nombre del Caso de uso: Publicar Evento Nro. de orden: 7
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Organizador Actor Secundario: no aplica
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Generar dirección pública para el evento y deshabilitar la modificación de su configuración.
Flujo básico
1. Organizador: selecciona la opción “Publicar Evento”.
2. Sistema: Busca y muestra el nombre de usuario del usuario logueado y todos los eventos del organizador que
estén en estado “Listo para Publicar” (mostrando su descripción), y solicita que se seleccione cual se desea
publicar.
3. Organizador: selecciona un evento.
4. Sistema: busca y muestra los siguientes datos del evento: nombre, descripción, foto, ubicación, fecha de inicio,
fecha de fin, tipo de evento, categorías, medios de pago habilitados (porque el evento es de tipo pago), tipos
de entradas con su precio y para los tipos de entrada grupales mostrar cantidad máxima y mínima de personas
en el grupo (porque existen entradas grupales).
5. Sistema: Solicita confirmación de la publicación del evento.
6. Organizador: Confirma la publicación del evento.
7. Sistema: Genera la URL pública del evento combinando el nombre del evento, la fecha de inicio del evento y
la forma de pago (si corresponde). Ver Observación 2
8. Sistema: Cambia el estado del evento a “Publicado” registrando fecha, hora y usuario que realizó la
publicación.
9. Sistema: Permite pre-visualizar la página del evento, solicitando seleccionar la forma de visualización:
generando una página, generando un pdf, o generando una imagen.
10. Organizador: Selecciona la opción para generar una página.
11. Sistema: Muestra la página del evento publicado. La página está formada por 3 secciones: datos generales
del evento: nombre del evento, descripción, fecha inicio y fecha fin, datos descriptivos del evento: foto,
ubicación, categoría, y tipo de evento y los datos referentes al pago: que son medios de pago disponibles, el
precio para cada tipo de entrada y la cantidad máxima y mínima de personas para las entradas grupales. Fin
del CU.
Flujos Alternativos
A1: El organizador no tiene eventos en estado “Listo para Publicar”.
A2: El organizador no confirma la publicación.
A3: No hay tipos de entrada grupales para mostrar datos de cantidad máxima y mínima de personas en el grupo.
A4: El evento es de tipo NO pago.
A5: El organizador no desea pre-visualizar.
A6: El organizador selecciona la opción para pre-visualizar en un pdf.
A7: El organizador selecciona la opción para pre-visualizar en una imagen.
A8: El organizador cancela la operación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SmpIqk3ViZXsTrwIUZ1rYXMquB0T7cp67luE98oImnUI0JOz4zt3ODs_YxzixlyxlQA2SvJYBA1kRsLiVjPDDD64KKGpaBxmNuhgEUrFEUNCf_8B-KdXBhQ0qkv0CBGKCM0wu=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HQHln5o6wUoOBWCzMIMfLcjbXBrv3OufSh_KoOg9B9wgpCpp-w4kSt2s0aPkaxZf7Y1jptXQusBKGjmEYSOj3E5VmXUWVfuTTeidbQ65SrHVDMkh48uV1juj4xC53S1541lNWVA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XewQbpDKQ40jskESOEie2C1dHnN6W0NEU4Ygb1yUFvjjBQFJG5vf8ggH5OG9wG2HxUKQHf7ECmDKk80DGPAg3p2U_bpZoCVnzQdJhzyJ3MrX0NyQRhCk4Wg1BNv5Yj_rkQAfCNg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 8
Observación 1: El organizador puede cancelar la operación en cualquier momento.
Observación 2: La url generada será diferente en función a las características del evento:
Si el evento no es pago la url incluye nombre del evento y fecha.
Si el evento es pago la url incluye nombre del evento, fecha y formas de pago. Las formas de pago deberán estar
encriptadas utilizando el método AES con clave de 256-bit.
Nombre del Caso de uso: Enviar notificación Nro. de Orden: 29
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: No aplica Actor Secundario: No Aplica
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Enviar una notificación vía e-mail y/o aplicación mobile al organizador confirmando que se registró una nueva inscripción y/o pago.
Flujo Básico
1. Sistema: Determina que es momento de enviar una notificación.
2. Sistema: Valida qué notificación corresponde y corresponde notificar una inscripción y su pago asociado.
3. Sistema: Busca el organizador del evento para el cual se debe notificar la inscripción y su pago.
4. Sistema: Busca descripción del evento, fecha y hora de inicio, nombre y apellido del participante y monto abonado.
5. Sistema: Arma los mensajes de notificación de inscripción y pago y notifica vía e-mail y vía aplicación mobile al organizador del evento que existe una nueva inscripción y un pago asociado. Fin del CU.
Flujos Alternativos
A1: Sistema: Enviar notificación por inscripción. A2: Sistema: Enviar notificación por pago.
Observaciones: 1. El sistema recibe por parámetro la inscripción y su pago asociado para obtener los datos correspondientes y enviar
las notificaciones.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fH7VtuuPHjXEDz_kk84AJpvtPz2d65JNJ_JVgTQzMeICZ90u7R5XhnuhaZQAfl34Qu96jY1yvibPZ0Fzg2hWRNyoGXYl502DO51AAsUIeTpH2aPzbzbpvQPrfgG06FYAoUYqm=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Txo-1Z1NSbFdKJBvZdPpB3Rs53KGWufTNTnCvv8KZVy3-kvhX4fU-a-sOarbqGpmHDW9Y1oe33BUfTgMnlfiVWFg3XMXJzlLn54yGH1khPs0QKewiUuaK4Kh3mo08tpVYcfL5iA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv007d3_m0SyJ70bn-ytTixdRcz_lJtn5hiqqLJIlMDEpsdatUQhg2m-Ruw423Dg8JLs8T2ntnW4fvh5QtaKPz8Rn8XjfSnCUY4B2PWIaeLiWdxffCHq68giUiZi-1l9H2aU4wCtGg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MSXMSat6Sp6e4iAVY-IDsU0OTkqvc9RI1Emg0a63NCxyzpji92Ao4PvjB3UH7hq6hCEcACr50Cltiy2ARUGj9jvrYqZDBZn_G94xMVyb5aBdkjG_L6WtRrvmMweXgGnBUXnFa=w1280-h938-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Solución Propuesta
Máquina de estados de la clase “Inscripción”, con diagrama de máquina de estados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JuuYPb8m0dSbckIqhAQ7lDBD4NuF7vp-MRIPmT5rRFRq8uS-uDnGcaYK2Lb0_andEcgPfro2MhpVics2fs7fhv9BYyR5qwXLcrKXh0QixTh2Y9M2ktza-5Es5Ira9cqFGPIu2bg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_lprEs2eojN1wbzz1f5zSSwki4e9_J0NuVwwXYkcKuaxFrtoHtEyOydCAUU06uaXMqmmE-cHEyrZko5gYMTfc280EndK_ykEnhvMvdvIIbGIb1bJqOLA0-e170VVTaaJHhoX_tg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xJAFKGvm8i7G-q3TJIAGXNi9gpWc-tJgptQwxVQQZaDNrO9o_PPtoplVXou19jNNNmwya9IY12uU17yojB-JkYc03RZAgFQo1QoIyjeDnaYY2fjsWViaK2unUqqXj9ZFpKSWJ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv007eUxc2bkwLnMSSp88MqBMoziGkfD4eu23MKk6f41GLxpNY1PYCJsOabnG4zy_TPVvfYJ6Kd__RU2KzchBnwzkPaXUUBEP3IK10fXY5QTtT3FZyr53TIojoP99yfNeqXc2Ood=w1025-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 10
Máquina de Estados de la clase Evento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-VqWhGq_ISIJbXkpAVKpRHL0lUoxUiG8zolVM7ISijtUfavObB3X0XUjGSth0ZLAJkSXlnLTDPnJ-uKbnuN2-fQXZ4VX53rSeXSp7nw1-nuILRMdRP45eEF2lQWxBPsyvruhRiw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ik4IFgBfO-lF7P6Bgrvfa-T48blsrq5bERmCEkjVrCuo3oBzGFGL8pkM9ScW5gEra1munSdN83AF57zNjzHrGfGT8XeTHQR4ElwQ3Po8YFGSWUtVrSqmoDjOgfeURfeh_3u7J4A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3A_ql4qwoeKG5kIyxwyGZ7V8-VyXBZGe91J3R5zrD-Po2vLYZNAyFXi7983QYhuSRdKcHWUQATyrIMPM8tv0zjFZ2dwUxqJ6Nx3Cfu2GeFEiHUK5EEL9fLbk0YVyTe4hIbvM1e=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NyE9BxCbA9b9G6ksKsS0y_f58W53jjOrnPMMSu091181wR15jul3zjCKDqNu0_p8Uy24XYwNbBODrVEaMyEjkrCGfAuPcZmk-aTL6ka47JcY7xxE5OuU-L46PsHAFdi9WWCuP6w=w1132-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Realización de CU de Análisis 25 Registrar Acreditación de Participantes – Flujo básico -
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kjhcMd0RG7fxYmQ7a1RHd799K3QzDh2eONTvD70KM6kL7dnyox8nFMH009IzhwdPwZQP3YqFKfM8h4INyAWTRkfJseRkYXW2QarLtuxsiFKKEJMNfQx3cTmM1qjd-8Leq4qOijA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv313Te4b8EprTbFmRhm8g963YdyOHOQQ87uKc7YU0lrOgTjEr_O_Yy3aefgg5cJghTT3UF1wFAP-0fQp1pcGppS3JIb2RRbadquNCdsYseolr4oOhP-P0cJ5ht7YKBNh8lwJKgJbA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3X1qdg2uZUoqw3JfhAFrDqplcATwq07mlsVWMtTxB7RdD7k_P3HKnwPzIyO3EEEdz2CFa059yFKzcsBvOeA2MxDTCWrPDlmRBl-8LHnmvNux0ykxilWb1ZVCfYVqqDddPZcIOr=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GpAo1Jo5HmhVcwXGMbOEDL9krQ2cH71soKbhQC6ADswd4ZXeGpiGuecBy1WLD77T2-UHrQgVhhpuxyNW_8xE2UB96M67_rw1Pj4Uk1hZ0zbsf5NPYs5QqMb4GFvepJA6OsRtymw=w1180-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 12
Realización de CU de Análisis 25 Registrar Acreditación de Participantes – Flujo básico -
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pV_2lQZ9JPt4r_UHLZ81dNNzKlvZLe59ZslEM1Lj0iozFcbPDX7TCSUYanf6tvQkDpwaxrQWgRc7lDOdVviibCBIrQS5iD5qLYziEmc7NnhPc2q6TzJF650JEQybDOZTHLanjIg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DHzprFKvFhEBQrtXlE9YtQDJJ6JDBCSnHIxKbIo7-WyC6J7hrPmRM9xHDfumvDkDiaFmbIzVaSF7-_WaYZCJBeaEEmITnJ9BItTu3e-ka0iGRGtuN2Q1AR0h6sROM8OMSwBaSTg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UWAzyTFsRtD82CT9_U7_Og2Dfxy-AvHr6HjOx1dWJRp7E02xBSMtl-HDwqOcrcL2mrFLYA5TbzbiGpPkON-EDZjJr0ZL_1EUKAjEB-8QdSifs72luIelgvhCoHwrIG0mLWSVq=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26tiveADY46YmMX_-olVZS6yv7-XOXixW1ZSkjWsNBT7EZX9lsQvE1EM_k8O-Lb5OW4hn7R5Nc8kyOcwlrpYKPnzVVr-whhZdTeHqDC-xBzXImauVo7XmXEpxc-QmyheBipxuCvQ=w1271-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Realización con notificación de CU de Análisis 25 Registrar Acreditación de Participantes – Flujo: Registrar acreditación de participantes con notificación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21HYRn-Sr4zCf9zhNhz2qYTtLdrcUvrwTnyfaWgS4Xi5L01TfrpiE0nYljVRMlrkgXWFVnvrwRYNOvCmKRiv8_nAcNGR7Jw567wbkd5slDfYeGw6svV1IQkPWxsaZBOXFO8SE_dw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1395yYfxFEmBhkVQf_X_uwlbfM2P_c-v0ehfVwz3-VWIuBfa5j0c7FxXu5gGNjhcntPbjkbGhovf7UAsqU1GokjgFg-2mtz8FM_x0eLHZ6YrgrUhS-ejV9WXZubyAdaWCoN1u45g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14K1lQsT3WMCLb3DO-wORrJqlGRDaSWpToJWVCA-v0psktEf0TFPdBXJ4m-vw1dvLrhXRyRBx0VgcrLpmd5IX8eWGYOpnBuxIDjkt2rLEN5eIYmdVYKogl76au8fCG8YHRoAkNCg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gl1ZjdJd-2DS-SoKn2j9at04hS8Tdh1YQDQtCJLub-_6vAIf4nj2hDoK6OOQT2uSucx4nS8n-6ILGLTrZFjYu2oePxcgxMmJKRqDk5O9OmhTkMoijmoyAz7djVZNo0QVboevh=w1125-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 14
Realización de CU de Análisis 25 Registrar Acreditación de Participantes – Flujo: Registrar acreditación de participantes con notificación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04ylA4vWZvw_v1LZWuXLtMV5ZbpMdOOz1gVULjy5WHtLYGQpgpHcJpOggu0CUwIAYVbly-fjb5YaGnruIbvg7ENohDEtgZrcSO8K6XIxfVzxFpJqTgAwos8AM6fn0PIajpzIyJ5w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VGFciLdeoHw5YoLLNlhiQ7UUA9vaZGsA-Yzv9tbgIuvIz3TlJEJOZlwJx8HX2tbD0TnsJ5Vx7_MiWm7QsGD-kTFwnzicHoQ3LOnCVIQAP7pZyQ9iW1FWpk5fUPN33CI1zyGgi=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23LJfGa4_ye_7jsy3aF5lJ9vuqMVlbCJVhaOpD9Yn7yK4DFWG0Mpsvzwk6sc7BobaD4-GqlMOiM1RgYe62dAXJ3Btxft9fql4DRC01Huk3e1bJ0K5lAbjDa47Fr2akksbjZkKFAw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29t29yKpCkUvTLJ_2VqXAEoS4gGXrJf0nxaF3t2xRw61g5PakvmwiEPr5gSg2R1JZZeSqOh_glb8G1LT3f9zeB3_w-VDJ9Z5Igdl5xqS9Gt3JV8FhYAr4DhUUBLySwVyYemkgkLQ=w1238-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Realización de Análisis del CU 7 Publicar evento – Flujo Publicación de evento – Generación de URL pública Estructura con diagrama de clases
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00un8NVZZe5RUJMLHkY79KpsBe9VvUJMiusOPDgRCLdXWKStjTniAdaXftJ_RSX2Xwhnz7Xc7R59LQYn0twLG53ngA7yplrLtR_ie_DBSj02oy6Ju453Epf-ujwHJhwD7UfR96kQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-eeNjcPAIwNNFIlCNT40wrJSXXK_bWyoCYCl0jz3OraFdVIfFIkIcszlVLuitCL4ortpgIGcYUJkrNS7wuIRgIl9gkma_qaQJDBZVgfQRvByWFeOf0c3poAvZcDWPkmNxOaxPEA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AhoZUgfDpD3vwX8apGVhlROSO7iTizQgRjwzbcN31Q8XA2x6vHFRK1cgohD6ZhC6kNob28oB_QCA8dWob4cusAm6bEOeA8pGnON7--Qxd5xM3NYpAZXfC78NKM5_dkR9fY9J9=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nhiwAI-EAlcFVH4h1ej_lrO8ntcNagvZ8q9itlwm-O2LG7E7xD9XPfmG5S3EET-FGcDCMkqpHLMue1ShkZdUe6Nzdq90OvMfYzJOdtsZi7H1fZTf2TJNjfP-F0G79SQ-GUAtCrw=w1169-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 16
Realización de Análisis del CU 7 Publicar evento – Flujo Publicación de evento – Generación de URL pública Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hMlLho7aG8b-2dOicgK6P1sgMONSaT59x4YjFKrDKm6R7ZY4XqCuKOgxS_gSlCWncXU8pnhHs6N0CO1iW7hxM3r7MMj3m_vUa6BAPOf3wgH9AfQWR6cCfzx7SZNd_bE7PVXXdmA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vW4QVkwA9FS7tIKsFu-wxr9A9VIhUCdkknHfrMRuINpNcb_6ddjBYNZCJS9BFZSy9xDG10SnWt0lxeHOKZdX-rStwoxtj3a6hsRlHkMXMt0iEsUudHNNe82fIyWxJ8hMUPpXD=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NlGnxkFZT5r7V3wADi3sqTaU2WhjLTT0CgyaAzFaPqKXoPZCLhCPuoLS-iSiZYqGWiqoT4eBFkRlXS9Gd9JC3LGweK9Q8BygYwNiHvgWWuyQzhy8vMG6PMg6og7GJnLAQxOj2=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0X8ozSsA9DrUpo_Zvj6upFw_UrfoGSOIdgDGqPbDYh5iDCMXlsg_xo0tSWrTgFQy4BH0d-rANBlUqv-pLYMmPIpPKZ71u5GbzpNgZiWNkJHD0AryNS4GJb-KyZlxYSWqAg689lRg=w1159-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Realización de Análisis del CU 7 Publicar evento – Flujo básico -Estructura con diagrama de clases
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bdT1JMDbXaUE2Yiqdn17ZAZ6dVAImchmrJcCeJh33l7WfeGM7QdyNYq899QzjnvggF_xtrQnAvEV5tUYGNJMa86XOHUpi8PoMlTt3wHtghgGHwuOpHVvIbmsnM5BXIhdkUt1_lA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv255psJzFxuSqMBX99IfzQtEEoyYOmc9AxImmDHhS3jEVi4wd-QSVXkxn206ATwouUNZjgHZHUcy9Wi9lhYwyDPYGtrCdnuL1nuG-PksOL2PaT0xOP_sx3c3bC5izP9UPGKXaF4DA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zY44hDkdqN7Kczann3YJ3AceBzZRfm7qZfhGhhZ70Cque83DyqNyteGrtWOP5Dd89axlKFg9-fXQxLqv6bEID5h1Zih83L1S4JbEFnsh1MtwArOX9T6pVL-I5vOZ9hz9gGZCRSQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TFj2u7bPC4cu4bfPZGC0HEvHOb0W_mdzRYCURA-TMex9b5Xne4iY-v-s2aoceVFZg8jSC19SfNH06VZa7FscwqMiA9KJJmSlz__4kfP430eVYiqO90LtHE-bBFKazNSTPc7Fs=w1157-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 18
Realización de Análisis del CU 7 Publicar evento – Flujo Básico -Dinámica con secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03VoZ0n_3YMPWG0yf-4B3CYCKMkinmcfCXrTsGWy9VJfHlcKAqoa0bxn5Bh51nevJRsSf2tYpC0xAhgRfhyU-1lOLmn79SrnQWzdvOHRczSRcW_XQcho3uunCOM1QV1g2K60TNNw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02wL0lzpHQOXY5aj9J0MW--ALzjeH1mJDFU4K8wyYLuYoDet2exw6yjfV5bQPAQYmYQpUnXO4PtPlmxpgi71EowQu9tv-HOLUsFbl-lMKqB23N7E9n7f0YIWYzn0p7uw7ECfvA0g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YC9m5Iu9fSpfqm0D66o996lIeMHtAt4MGbV3uuzGK8DXq0141yiJLhPjbRqse2vR9XUXILfp2kNnMYyPlxUzIm__cex_y3czoth-y4f2mQhixhAfT38rnJnzJwCAMJfZBwWE7ug=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jphjiEsadZxKc7JDjyY4brkGIpvQ7HZ-pHa03XbIg09hTNrWwP9zNB7tmsXMyJwK9br_prS5DSBJdeGru9KgEipo6pn_xzgKjp9J-nxH36V8aEi_OWx-Tuf4jHn2x0jyxQmXd4A=w1190-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Realización de Análisis del CU 29 Enviar notificación– Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BguMgKjg2wSeI0SuxNbKUTp9spPuFk8wJXO0NXpiQ-9dy6HmeGU9bGdjP5XK4JPp43diMGROM2ZW-zvUVQCj54_w_-ZV636Cq-gKWDQnE-z-Htx2F3iSUOPw5yxs15CnYyMFLAw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Xwk4nryqbz6K6psRAluFUGuKRId8yTos-1lZJO_vPROwM-8cVoZOAYPL57bnHm7MaCF6LStmgOJvkqE3ZNKOL3yWCwRBtA2X6EB40crZZtd1owJTc-vKwWmsq5vOLfMP7SeiX=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hjDkDLJ-QkR8BwRrWpuN_fOI9xBPSv2o4zABrs8xdAHwEk9amoov8ZR5oTiHea0YJho3WuJUjNG_kMRE5ID-vkxIrX69iuehsiZg47nEvW1DxbGO1cpiFCotLYw1NXnHDouPQeA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iDgs6iAMR0bqGDn18YKqFBaV7j6EdirDwJg_MjsjvBEW_dhI1HXcuCzIBzQXzqj0e-WJgubUWPWQIc72xDHAvP719mok9YfvOtO0cmL3zqPXd9TJ7YkNEihQ22ruMGMEMVJiFpQ=w1280-h1084-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 20
Realización de Análisis del CU 29 Enviar notificación– Flujo Básico -Dinámica con Diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05WnnQSRM_wjkTG1gyDFErymZosziXxWsBx2WFo8hCxmAxNyiyNwbiHuKgjHiFbswSADo0ZC3-c-YD83674WWdF9Y19NtxDYz8QO1gpwLlAxam45yJgXZhG__4AViSU-sy822r=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30R4LwrwfdTOUm9BWUoTt134HMzQZfhAe5tUU_9mawl5TDj6MklpG92WJOkw4Tcsm5EXwMEe7jUDL7RMm-vVo_0J6Qw5dvAI7LiY9e5NS0UqhvSm8NaYvcwvJGW6EHGftVM24Gfw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05Yz6Vu4RbbAiVfNEsn1kXb4vM0mIvhQol41PxcZ9y_MiNJQ8rB7zV7sVbf2ZIpYoezogT6gP3Xo1WbRMmjlBYhJYeQZwnbT65Wt2S6zh_BsS8wvAIThzByIW2uYjqUPoB0GY2dA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Patrones de Diseño – Consigna
Considerando la situación planteada, se pide al Estudiante:
Que rediseñe la realización de caso de uso de análisis del caso de uso Publicar evento – Flujo básico aplicando el patrón de diseño adecuado a la situación, para resolver las siguientes problemáticas de diseño:
Problemas de Diseño a resolver
1. Flexibilizar el algoritmo de generación de la url en función de las situaciones a considerar: a. Si el evento no es pago la url se genera incluyendo nombre del evento y fecha b. Si el evento es pago la url se genera incluyendo nombre del evento, fecha y formas de pago Modelar la dinámica de generación de la url con nombre del evento, fecha y formas de pago.
Que rediseñe la realización de caso de uso de análisis del caso de uso Registrar acreditación de participantes – Flujo notificación; aplicando los patrones de diseño adecuados a cada situación, para resolver las siguientes problemáticas de diseño:
Problemas de Diseño a resolver
2. Implementar un mecanismo que permita modificar el comportamiento de la inscripción de acuerdo con la situación en la que se encuentra . Modelar la dinámica para el momento de acreditación de los participantes al evento. Resolver el problema aplicando el patrón State
3. Diseñar una manera de notificar a los participantes que así lo quisieran por email o por SMS, la correcta acreditación al evento que está iniciando.
Que rediseñe la realización de caso de uso de análisis del caso de uso 29 Enviar notificación– Flujo básico; aplicando el patrón de diseño adecuado, para resolver la siguiente problemática de diseño:
Problemas de Diseño a resolver
4. Necesidad de notificar mediante el envío de un email y generando una alerta en el sistema Mobile del organizador, de la ocurrencia de una nueva inscripción y/o su pago asociado.
Se espera que el estudiante realice:
a. La vista de diseño de la estructura utilizando un diagrama de clases que incluya la signatura completa de los
métodos utilizados y la especificación completa de los atributos.
b. La vista dinámica utilizando un diagrama de secuencia, de la parte del escenario que se ve afectada con el rediseño.
c. La especificación del comportamiento de los métodos utilizados en la dinámica con una descripción textual o
pseudocódigo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3R44OheKuYoTK5bK_Rh-KgeQeYDwRJUwyEWH5oyWPz2St2__sZs7NeF5wNStODSs1l4n77P4qO2-WBz4-SXoxqxgJtyC_FIpXTUadHN91jlEOTDD3SKFshvDtGuP_3RXLPH_ULsA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QsEOsVefXnpJB6jxRbuGe49MDDk9p7XpjNXICm16NlKQCHmmt1vdNOjW0899SlOoUIhWdB5fEpyhOhtvZwuhN747sSMu0wfCv_u3qitWNUSrXsoqEg5GTEBqMK9_oJ1oN8DqbmA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18BYkG6XSvxZ1sGZH5-lpLHbvEBOvkD80IuRSDrm3tI-g1IuhGjxRQtO1JF-UxT6Sv9Q2ipK7JraNxwIqfmCBda9u6RIot6q9cYOSzAFOLIqkdC44uvjzZ4aPTD5fzElfaGJUI6g=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yypZ6HqfrEftIGVjAkTDTsTJzQoDCzs0a5l_4D1bLEBt76_gKRWsxR0BnB6mM_ZkJDtHK1xCj9nRbjuHTWJ8d3wa1YgmXkvEPcxtbrdNXpVY_zaLJwvOcZ_9egCFAtphgAg3Q=w1167-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 22
Patrón de Diseño: Strategy – Rediseño de la realización del caso de uso CU 7 Publicar evento – Flujo Básico
Strategy – Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ki3aM7hj_z1rWZCe8IicGTBo8ky1jDrBvX97-51ddiWDoR8nmymLt-RMmPi0AMq7hJLnLjtL686Oe0GZOFuyTbmbTXCLSdJ22PL1C0Sd8NHKrb7DFaGFDJpfNSVOSbRyEtS4k=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IvFqq0ymgIWvJaYa0a8K9fJAW1oBIKevQCTH1tX_M3L7THA0EcJIYiN3GenANcRFJkc2-HAZcLdM5hrS1FdhQKdOl9NVNiNmVEN19fyd8lhI4AdOAA7Y_iAWoCZ8BwjJgMre7=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J3j4AEz6R5uU7Ilp0_FO_XzpOEtpM2wQ0ngXtxVpED_NGvbK4K6uLXXxGuWumaYcRAZoLl-cR36zFDHARXhfq929opqop2TPmIC0zQz7ufDE_-9lW2IkB4I7E9W_OMxuSUwlN=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fGS95iZ22OC5VoQtKNXF9szFNbTNjF6E97t56H0dybs2jcBtSFEh70NJxjq4ehZtNOAibr_cQXH6fgQ7Xyz9foiH0LlJoYRvqTTSzH6hM1JlL6ypA6K2CugBTtnsQhjytZBO1UQ=w1280-h1153-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Strategy – Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sZQYPl3NNuaGCssDLw9wblYcG1xivlHpTedkJnxrSLYq_wlp7hPi0kn2dP8ZKqklrbtRlPEho9pXMTrLsdj1QNrluvvkJTm1KfyM7iQmqp4fDeChyWnwBx-LYQbbu5ORdp0-P=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EusgbSTFVClMYwGgE1h7gDm3HoL_j6wkNM09Nl4BK3O0zCXWj0qsgPcKtFueYFdzX0qZ9swI_s0vvCv_gHo_yEM09qW6Z7eFMvrOHN1EuiYlfLRwL2Am2VoiK9a_Uoek-P12XDw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19cbfddebycYb7ab_GUE3veYb7w0CvQbGg3L1hGsRIujlGEyK9-HJc1702tgzlI6t5JLunQFLmhPh0mi0WjgNZ_z-SITi_kgwaDq5ZV3yt7GqqSw552ZvRQZ-bzKCR-MdiGzMnIg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J10S1JpHpzHTYkxqizYfyCV_EHFtjLD1SdP5WqxOFJzGqihplP6RaAd7MeU4OJbbs_j1QTv_48tIgPFZn4p6MBpWaXtxEfpDXcgrfCliUjbe0CHsFJRK-mGrhAPRJTipLcELF=w1280-h990-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 24
Patrón de Diseño: State – Rediseño de la realización del caso de uso 25 Registrar Acreditación de
Participantes
State- Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uX2icOssnnHqEu8imocj4te6Kuvj2osdPxno7C6E6z7yJdyZTFNDORdwuT9DzR7lB1p2qysb_KFLkdQgQJtl78M3IXXFvEwf7GkZ-9f9d1ERtMLTPhVFZCG7cRJLHbdxlw6ozYw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WNubrpnCYGTWXEZ3N3kaWtP3JxONZSGuNTEgbQYvOD6yW_bHExbGyt4-DeXbTnimFUUY-obLf7MpYDh6YFQh1tDX89nP8LN_cdQ8Qe-ocC0BM9DMEMGN2FupeHCy1Sw_B6ECG9A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CGXIDmUsXYQeYf60honS37zuZDw4Xn--DLy3GC-WgUV-JFy71FOct-5nYuDgRYO9LHf5Kz_eBytWBt4_e_h2U_XSX2t2_dMx0JfleHMgOGzWOuajwq7mBcfCt6KzODR94kTmFpQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RO2gVZMS3J91EKcoeIWyTYs9FvPnFgoRV3awHFjxVAyJCqfum3xuUS_XTKuMvdmVSUEWsIFH39m92KftHwFqqqDuEcDolXuquMZ6X8e8O6C_x531DFYcD94fF_DgS0AEgp-Et4g=w1280-h1172-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
State- Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dXkTH5cwV_xaeiKLuezXPWxv23owywsPFyLmeAHza6aWJaBvNDsxfmzJu5vqEWwaTjhVbRrvm40R6IGbaWHZK_7ez4lDYMNlUftrhaEFaO9EasP8x_JUVP4KerRai1YNREFHnlA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BLVLReX0XUX2wY3WD5AeQCQ2pFo2ecdI0qBMUyyHhzagFpXhuoS614rMiAWMYO0rH0CN-kdr5-itK6q2r8pbl20cKyn_Ra50v4WR1db3OrHIL6vzUtqd6DK9kolqK7UxoUv4p7w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3m1KH14iiEkF--WTCZGwbc7a8rspJHjcAJgBfAUeEggiQ6L5VX5pNF5TDAk04t4A7f_MSKm48_ENrE4b04h1Y_kc4HNwMdZtQ2Exq1G0qu43ca0H-Bn-AgJoHW9abqLYANGwwcnw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NY3DtIHygoQjaoL0SqE1UZX3U_8u3V2N72FD3dIlnJ1FwBl9g83Hiiz9C9OVMvlrpuvqVLXezZXm3U7iMoCQDbQJG-vZGcvsqgyr6oJDdlrnlygcMWMzpaeRH7y6l495d_yq45w=w1280-h1232-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 26
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso 25 Registrar Acreditación de
Participantes – Flujo: Registrar acreditación de participantes con notificación
Observer – Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nVbu4W50wtaIAW48I_7cFyxkAYsHvRABglMfIB6eeEQ2ez4zddGAPS7MygEWKNbdtDhyYI_vprknGCEsyVVQUfRac4dWP6NEQSI6DZHq13zYXqOfr7iETLO6lyV3phlDr88loIg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20XzCOSozOiZxaYZHxZ_WGvqfmN8_NKYZceVEUMV2sTGHvbxDZBxkfq5-RbuJwULEdtwscw5ffa-jxganOKOKA-KyHGhy8IomU__t5gQjlQ4-yIDrLPcBdMrpQQrDJbBCEXwZj=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36U4MBrPX81PcVK7duLFRUfwHp-F9R7AYrH_27fwB2lW6FRq9fIRb2UvSuhEOXk8wkzFRZfSSgjdKc5uZYlTP51Zjoqc-YDJ8wR5jb6RATK5WCS8_xOenirQq8iJWAFE4XtzkV6w=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZAPzkr6SofQbAJeEVQTNUlnYJKQXBfhr2ffcd1CQQBQEX-kxXB8rXKZJURDr4X2qS9iCBj4_94L9KnE2BGBDdEHlAMAhe9eiqEbGOnPDsT-mpHVXPbjZk0A_MPbZlxjFaAwjo-A=w1219-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Observer – Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z6jTY6v3I2x5Lx-fxXpcYugDFg0d0Y-vigTTVvBTVmzOXgLNit1a8Xducb_wevfbs_92YanZH1aZriRDf_aurWX6yOPvaQ4HdwY_U4vKpvyXp-NRX2Ei49wTUL7jnexIrJRInMg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IdO1YDg0LaGoIvPKYwwRc9EwWAtHt3CNaNAgzw-lgC5m6rIYZMoa1Wxz9yvPB5ghw8zjwxzW2EqvfXBgrx5afWfD4uYAPZFcIwJaP5Vraappjhv7hN1LpaDFwS_6R4V3QYh3J_w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RwsMWzp6LcitDFObD-dBJ6qxg9CXnVNIojt-kzmb7555ePXEoVDGyLlENRF0ZDpIj9QXD2AlQVZH9b66HQr48-V14azqFRz9BpqoZaGyFJ8j3wDqbyRQXAYgjU4_qfeW36X5kxA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bY7h3pwjbSt7KE9LB9hf5c0YBB0wGIoedQHqiO33EBalcWMNXkeinFQhcyrRps0vo6buGplYvvpN2WhtPsWQd1-SV0kjYmxdEceuxPwZ6eALhADWoYuEHH2am3MedNDt9t2EKAw=w1280-h578-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 28
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso CU 29 Enviar notificación.
Observer – Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nITu00j8Ef2aWYR9YAOz46Eq1XemyPVzaeIKaSNds4WKGXoBlRdqMN6r_6FVdP3POJFhR2C4IVv5dsRI49V8ffRr3OjuwX3GfOjA8vk1xbxwlIhZBmkaJIrZbDbQs5srHCcZ1=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KuLGMwn9SQdIti-KZk7aN44SSRYAfojmDpdrUAYTjr_8iMWaGhuHGbvawatR_0xlRktf9fwR1Ap4-gc4HWYkCvAoFkRX4Uk_gdMWpgGl4iUKI5IeBkQZZX4pnHd5-MPBymsbG=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zj-XH0DGxSbMgjBaoCsvlvM19YOZ8ZLo3pGCo1LOtV2uzaJKpplTuHyXdLR-ju5eOetVtUq_mR_jY2Gsq4YjPRJ8FmCe-_p5abPhnW3Dj4bUi9DwpTGpCVRN3w4468YqG-eXaog=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k7sRwQ4o0MA28i_vsWPF1fV1VGJLGD_UWpus6sXTvfFL7c1D2gPRodjXQTlrV6bU1bl3HKifbg7n5ptlPDDMgjn4QT4FkScSqcFAt_YHrLYn0sE-BWN6MbfL1GU_VxtoYE-4K5w=w1280-h962-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
Observer – Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OL6Txs7HawnG8XSv2wuq7-goz3OiJ0MmdHWJs70YTzaOeiiLdfrUFeN1JXmg8wf5J4XrNLr1rkYrcprYamz3wSbpCJQKyMZHctkhtlYjDe6UMvP6tEJEwlkrr7Rl1XYPXpWcZMQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pMANAmHp5DQUfFRsc2QPJzz0uZ0OTnbd-pg2dTWa5FM3QcE2s_8YPKgK85IKxZawcYyj9ABGKba-SsSYJburKQiyBGGEJhyYsDDe1riQpElWBcSrCA0iEQYXVG_BPiTjhyHbkmw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZdWWK06cgZu4ntLE3F7DlBqMySZVVKKmBqalmgk4xuNwGzK17BhKQUbQPE2Nm-zfgRJyxKD3xaK-VVpm32jSJPZAJSpGN7CUnJylg4aO4ppZPOVYtkdTi_crKlAucpe7QJdiMaw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Gestión de Eventos Ejercicio práctico complementario
EPC Gestion de eventos- Análisis-PD– Versión 1.0 Página 30
1- Pseudocódigo. Métodos de las interfaces sólo definidos, sin implementación. Método polimórfico: actualizar, (también enviarEmail y enviarNotificación podrían ser polimórficos)
Clase Gestor public void suscribir (obs:IObservadorInscripción) { // si explican que suscribir suscribe los obs > 0 ptos while(obs.size > i){ observadores.add(obs[i]); i++; } } public void notificar(){ // si explican que notificar notifica a los obs > 0 ptos while(observadores.size > i){ observadores[i].actualizar(evento:String, inicio:DateTime, particip:String, montoAbonado:Float); i++; } }
Clase InterfazEmail - // si explican que actualizar actualiza los obs > 0 ptos public void actualizar (evento:String, inicio:DateTime, particip:String, montoAbonado: Float){ String msj = String.concat(evento, incio, participante, monto); this.enviarEmail(msj:String); } public void enviarEmail(msj:String){ // resuelve la comunicacion con el servidor de correo, genera y envia el email }
Clase InterfazAplicaciónMobile - // si explican que actualizar actualiza los obs > 0 ptos public void actualizar (evento:String, inicio:DateTime, particip:String, montoAbonado: Float){ String notificación = String.concat(evento, incio, participante, monto); this.enviarNotificaciónl(notificación:String); } public void enviarNotificación(msj:String){ // resuelve la comunicacion con la app mobile, envía la notificación a la app}
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rEyoXPH34vmtIdC5kQkuvYpbOWoNbaV8-YVG4Em2Mi_9v99Kq8R2169eGIrg85AVL9m5_Q_PI5y19TxqC1sJWHouVAiwxkzqsFC-9LLe9KGJ18f57LyNJba0d6HQ3vKHh9HnoOA=w839-h1187-v0?authuser=0)
