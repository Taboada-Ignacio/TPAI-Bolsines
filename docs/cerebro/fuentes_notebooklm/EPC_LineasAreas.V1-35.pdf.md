# EPC_LineasAreas.V1-35.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla un 
ejercicio práctico de aplicación sobre gestión de líneas aéreas
, enfocado en el desarrollo de software mediante el uso de 
modelos UML
, diagramas de comportamiento y 
patrones de diseño
. Su propósito principal es guiar a los estudiantes en la creación de una arquitectura robusta capaz de administrar aeropuertos, aeronaves, reservas y el 
seguimiento del ciclo de vida de los vuelos
. Para lograr una solución flexible ante eventos críticos, la guía implementa el 
patrón Observer en su variante Push
, permitiendo que el sistema 
notifique automáticamente a múltiples pantallas y sitios web
 cuando un vuelo es cancelado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PTNlJGWvgG0ynfy9Wtrbi8QbNlKELUYVIGG_HEDQ8qHXoKUnCj3jU1YQRuuPe-cZ0AMTBekP3hPVWfrYYGV3SgVT-zrjeXE_jj7sJ_FAFiS8g9qFq-iEQFsS4Kp8DFaFImyhcHA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tIXdXVCn7fvXMMVwSoMUTTRY0qZq4uDo2_ctBpxuBxXxIacp70LiC7-S8_KJM9evV5bv_ooIIfdRbNqekSwxcgWQBuEtER9l7_Yu8niHjtzYaHsIGUORW8dfP6QHeJMoNJh8xxA=w163-h170-v0?authuser=0)
Líneas Aéreas

## Ejercicio Prá ctico Complementário

Nombre del Ejercicio Práctico Complementario (EPC): Líneas Aéreas
Objetivo del EPC: El objetivo del ejercicio es desarrollar modelos específicos de un software que permite consulta, reserva y cancelación de vuelos de una línea aérea, a partir de una descripción del negocio. La particularidad de este ejercicio es que su alcance está planteado en términos de cubrir los contenidos que se evalúan en los exámenes parciales de la asignatura y por lo tanto está diseñado de manera similar a la que se presentan las consignas en dichas instancias de evaluación.
Objetivos de la Asignatura con respecto al ECP:
Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura
robusta del sistema.
Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución
(Análisis y Diseño) a partir del Modelo de Requerimientos
Resolver situaciones problemáticas del diseño utilizando patrones de diseño.
Contenidos de la Asignatura que se abordarán en el EPC:
Modelado del Comportamiento en el Análisis
Modelado de la Estructura en el Análisis
Modelado del Comportamiento en el Diseño
Modelado de la Estructura en el Diseño
Patrones de diseño
Consigna asociada al EPC:
1. Construya la realización de caso de uso de análisis del escenario del curso normal del caso de uso planteado. 2. Construya la vista Realice el diagrama de clases de análisis incluyendo las clases del diagrama de
comunicación del punto anterior. Incluir atributos y métodos de las clases, navegabilidad y multiplicidad en todas las relaciones.
3. Respecto de la Clase “VUELO”: a. Construir el DTE, indicando: estados, transiciones, métodos asociados a las transiciones y
condiciones de control si aplica. b. Listar los casos de uso asociados a las transiciones.
4. Realice la vista de la estructura (diagrama de clases de diseño) y la vista dinámica (diagrama de secuencia)
implementando el patrón de diseño que resuelva la siguiente consideración. Incluir el pseudo-código o una explicación textual que muestre el funcionamiento de la solución construida (20 pts.):
Al cancelarse un vuelo el sistema deberá notificar automáticamente esta situación a los distintos interesados (cartelera de publicación de vuelos o pantalla de consulta del Sitio WEB de la aerolínea). Para ello tendrá que diseñarse un esquema de notificación que sea genérico y flexible para permitir informar en tiempo real y simultáneamente a los distintos interesados. A su vez, este esquema tendrá que proporcionar la información referente a la cancelación (nro. de vuelo, estado, fecha y hora) para los interesados que lo requieran.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OM5OTFvF8Vt8nI4MgC8wYcb8KwOuqfe5ibb4dXewD7tevSFmh4GPWp6oK1wixl0UaVyNB1R_NQLA85j_fVbb0HEUriGig_hnDmFkkHj5XQEhgOtlgsr2Hu4CGR_tpA-qLgBldrQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Jj-0I9rVH68gNjzBBLQiQUaB-9t6CsGjLdQCLHGOiSJXKwBSl3Zeu7JcMK3k2kGq2CUBikc3eIeZrEro4cRQzYx2McXfg5851cb36Bf1Qx68eVdddaPw9b9XctM9CeD8EKYBU9w=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ymyWJbxwxUMSuGOKWBlXR_mUg6B6V3QJXFJyDYv7fZqPp-199jM7_wmqpVkXdRDJIwRCcPmdzFWLNh4nLTmVUlNRQLcIlP5OJ7HYDUloul_Dyez7kuq8e7BL42ZgxIMnYKbAV4g=w163-h170-v0?authuser=0)
Líneas Aéreas
Criterios de evaluación del EPC (Si aplica): no aplica
Descripción del Dominio asociado al Ejercicio Práctico Complementario Una línea área desea incorporar un sistema de información accesible por web, para brindar a sus potenciales pasajeros la posibilidad de consultar la disponibilidad de vuelos a los diferentes destinos que ofrece la compañía y eventualmente reservar lugares en uno o más vuelos. La definición de los vuelos que ofrece la empresa se diagrama determinando el número de vuelo, el o los días de la semana y el horario de partida, la duración, el aeropuerto de origen y el aeropuerto de destino y las tarifas de los pasajes. Estas tarifas dependen del destino, del tipo de clase que se desee (básica, turista, negocio reducida, negocio, primera clase) y del tipo de aeronave. Cabe destacar que las ciudades pueden tener más de un Aeropuerto, por lo tanto los vuelos están diagramados para un aeropuerto específico. Tanto las ciudades como los aeropuertos tienen un código que los identifica, por ejemplo: Buenos Aires, código BUE; Aeropuerto Jorge Newbery, código (AEP). La disponibilidad depende de las reservas que cada vuelvo posea, entendiendo que las ventas de los pasajes se concretan siempre a partir de las reservas. Las reservas pertenecen a un pasajero, poseen una fecha y hora de vencimiento y también el detalle del tipo de clase solicitada. La capacidad de las aeronaves está limitada por el tipo de clase que admitan (algunas solo tienen clase turista y otras una combinatoria por ejemplo.) La aerolínea permite realizar vuelos de distintos tipos: solo ida (origen-destino) ó ida y vuelta (origen-destino-origen). Las consultas en la web deben solicitar que se indique el tipo de vuelo y además si el pasajero desea un horario específico o es flexible. La flexibilidad de horarios permitirá que el sistema busque todos aquellos vuelos disponibles en una fecha durante las 24 horas de esa fecha. Además el sistema debe ofrecer un seguimiento de los vuelos, ya que los mismos una vez programados pueden concretarse, demorarse o cancelarse. Si para un vuelo programado ha llegado el momento de embarque, el sistema debe informarlo para permitir registrar si el embarque se ha concretado o no. Si esto fue posible, el sistema informará que se está embarcando o de lo contrario informará que el mismo se encuentra demorado. El sistema debe permitir reprogramar un vuelo programado o un vuelo demorado. Cuando un vuelo por diferentes motivos no pueda concretarse, el mismo debe registrarse como cancelado. Esta situación es posible para aquellos vuelos que se encuentren en estado no final. Se debe registrar el empleado responsable de cada cambio de estado que se realice al vuelo, como así también el día y la hora en que se realizó el cambio de estado. Para el caso de las cancelaciones se debe indicar el motivo de cancelación. Una vez que todos los pasajeros han embarcado se cierra el vuelo, no pudiendo subir más pasajeros al mismo. Luego, el vuelo se considera en ejecución, a partir de que el avión despega. Cuando el avión alcanza la altura de viaje, el vuelo asume el estado “EnAire” hasta que se encuentra en la zona previa al aterrizaje y, finalmente, aterrizado. Dado que es necesario informar la situación por la que pasa cada vuelo en todo momento y a través del tiempo, debemos mantener dicha información en el sistema. Finalmente el vuelo se considera finalizado cuando todos los pasajeros se encuentran en zona de retiro de equipaje. Consideraciones sobre el dominio: Para simplificar el problema, no se tienen en cuenta en el modelado:
⮲ Las escalas intermedias entre los destinos disponibles.
⮲ La variación en las tarifas de las reservas de los pasajes en función de: o la fecha de compra (que es más económica la tarifa si se compra con mayor anticipación). o la reserva de vuelos habilitando la modificación de fechas y horarios (en ocasiones las aerolíneas
permiten este tipo de reservas con un costo extra). o Si se trata de un tipo de vuelo sólo ida o un vuelo ida y vuelta (en este último caso serían en realidad
dos reservas, una de un vuelo de ida y otra en el vuelo de vuelta).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kEhyeA1r5iVrcj96_CXqN8TSDPp2wwS6IJDKdcObfA5kgqc565-wZ9he8nEv77kClwVGM7K1BCC_5cJj21zDFXPHl5rYZS9tNEyX5b-pkOvjhOGA0WvD0UwaYL_NM-0J2jKdFmQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lusU8GNEGDHVmpNDohU-YXjbPvtxnCq2qHKdnN_VD6He76cUgcDoKxNP4XA9sAvkmcs8US0dTaZnvRgZKUD1PIEja_lHgL7L9703wXLYsomZCExEZRxH4Jjmbqyx_4dhCt0mhEw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0w6K0sqCnF-D54seqsXUT0CHCCRwY2vemjeJopPpswcO7e4x-oOxDKO7kEy_ZHxJQlaW5HUCBzinGoXt-HDDwQawd38hK7aG1hn_YFl_2rMw6euJSNjJGXiauYCQ3bwb3NoaX3sw=w163-h170-v0?authuser=0)
Líneas Aéreas
Objetivo del Producto
Gestión de reservas y seguimiento de vuelos de una aerolínea, administrando la definición de vuelos, aeropuertos vinculados en los itinerarios y aeronaves; brindando información vinculada a la gestión.
Requerimientos Funcionales (Alcances)
🢚 Administración de Aeropuertos
🢚 Administración de Aeronaves
🢚 Administración de Definiciones de Vuelos
🢚 Administración de Países, Provincias y Ciudades
🢚 Gestión de Vuelos
🢚 Gestión de Reservas
🢚 Generación y Emisión de Reportes vinculados a vuelos, reservas y tarifas
No contempla
🢚 Gestión de ventas y cobros de vuelos reservados
🢚 Variación de tarifas por compra anticipada, tipo de vuelo (sólo ida o ida y vuelta) y con posibilidad de cambio de fecha y horario
Reglas de Negocio
Reglas de Negocio
Nº Nombre Regla de Negocio – Descripción
1 Escalas Intermedias No se consideran vuelos con escalas en destinos intermedios.
2 Itinerario de Vuelo Los vuelos tienen un único aeropuerto de origen y un único aeropuerto de destino.
3 Definición de vuelos La definición de los vuelos se diagrama determinando el número de vuelo, el o los días de la semana y el horario de partida, la duración, aeropuerto de origen y destino y las tarifas de los pasajes.
4 Tarifas de vuelo
Las tarifas de los vuelos dependen del destino, del tipo de clase que se desee (básica, turista, negocio reducida, negocio, primera clase) y del tipo de aeronave. No se consideran variaciones por fecha de compra anticipada, tipo de vuelo (sólo ida o ida y vuelta) ni reserva con posibilidad de cambio de horario y fecha.
5 Estados del vuelo Un vuelo puede encontrarse en varios estados a través del tiempo, pero en un único estado en un momento de tiempo particular. Se necesita informar la situación por la que pasa cada vuelo en todo momento y a través del tiempo.
6 Reservas de Vuelo Las reservas tienen fecha y hora de vencimiento.
7 Cancelación del Vuelo Un vuelo puede ser cancelado en cualquier momento, hasta tanto no aterrice. Una vez aterrizado no se puede cancelar.
8 Ventas de pasajes Las ventas de los pasajes se concretan siempre a partir de las reservas. Es decir, no se puede vender un pasaje directamente, primero se reserva, luego se vende.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cYjK4MeviIAwF0jE9eQl-ouaoXm-QA55il9KrPSTb8_CziI48NnpUmEOkHcrlo0SAz_FGZAzCZlEmLc0Qq7YXJ-kpTGg2-mCFvjAf5KvATW5zw_m9Sq19I-1ROn4tcdvX15jFSg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nEkbRiHA67c0DtlVC1M6vhtuDAH7uCOqQxb_WoxZGNFOluJdRHJzLipTecsnNdhngCuw2dseoJfNPcMlMj0KwcSPyP3xTmPiT7ZBTIYp3Tjl9_Z_2VnIaQqqQxElGJ_T8U0ElJg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02qpXsS2HbqR9AnwtZ2nQ_vZUwR4dzcg78-MRJC9FH6Ghrq7HfJputPRvn0HwORMUjnLxWwKkS5XSLvVPNqQq5bqNEx3lzQW3DR-C6Vj-I5s2K7P_EaDp4cyd3PHmNY_QoVTsS=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Nombre del Use Case: Consultar disponibilidad de vuelos ID: 1
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Pasajero Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Obtener información de los vuelos disponibles según los criterios especificados.
Precondiciones: No aplica.
Post- Condiciones Éxito 1: Vuelos obtenidos.
Fracaso 1: El Actor no confirma la búsqueda de vuelos. Fracaso 2: No existen vuelos disponibles según los criterios especificados.
Curso Normal Alternativas
1- Pasajero: El caso de uso comienza cuando selecciona la opción “Consultar disponibilidad de vuelos”
2- Sistema: requiere que se indique el Tipo de Vuelo a consultar.
3- Pasajero: selecciona un Tipo de Vuelo.
4- Sistema: requiere que se indique el País de Origen y el de Destino.
5- Pasajero: selecciona un País de Origen y uno de Destino.
6- Sistema: obtiene las Provincias de los Países seleccionados y requiere la selección de una Provincia de Origen y una de Destino.
7- Pasajero: selecciona una Provincia de Origen y una de Destino.
8- Sistema: muestra Ciudades asociadas a las Provincias seleccionadas, y requiere la selección de una Ciudad de Origen y una de Destino.
9- Pasajero: selecciona una Ciudad de Origen y una de Destino.
10- Sistema: solicita que se indique si admite flexibilidad en horarios habilitando el ingreso de una fecha.
11- Pasajero: indica que es flexible en horarios y como previamente indicó el tipo de vuelo “Sólo Ida”, indica una fecha.
11.A. Pasajero: indica que no es flexible en horarios. 11.A.1. Sistema: verifica que el tipo de vuelo seleccionado es “Solo Ida”, requiere que se indique la Fecha y Horario de Salida.
11.A.1.A. Sistema: verifica que el tipo de vuelo seleccionado es “Ida y vuelta”, requiere que se indique la Fecha y Horario de Salida (Ida), y la Fecha y Horario de Regreso (Vuelta)
11.A.2. Pasajero: ingresa los horarios solicitados. 11.B. Pasajero: indica que es flexible en horarios y como previamente indicó el tipo de vuelo “Ida y vuelta”, indica una fecha de ida y una de vuelta.
12- Sistema: solicita que se indique la Cantidad de Pasajeros por Tipo de Clase.
13- Pasajero: indica la Cantidad de Pasajeros por cada Tipo de Clase.
14- Sistema: permite confirmar la búsqueda.
15- Pasajero: confirma la búsqueda. 15.A. Pasajero: no confirma la búsqueda. 15.A.1. Sistema: cancela el caso de uso.
16- Sistema: verifica que los datos requeridos hayan sido completados y así es.
16.A. Sistema: el sistema verifica que los datos requeridos hayan sido completados y no es así.
16.A.1. Sistema: informa los datos requeridos faltantes. 16.A.2. Pasajero: completa los datos requeridos y confirma la búsqueda.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y5m3p2MdBixVHO3jKoK7mGigVzeN14bv41Sz2PKkJO0GtI60rpDEYkjgkbDuQy2URhrvDLhGkMCh1svKsra3BfFYl3AsAwNfXNfx8upk-uqATz5VQBYGmQx6uB4va0WZZMA7B=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rCgGoEikBikr8yw4EyAED1MSh2xb7f4mr-x5xg-oiqUmuf-c5lF8ReT78MxWp7d5RcmQP47DqoXGYcoMlwVKeS3TJSkg9iHaDSUrKLx2G6wXTVH6n554-Ip6Hrn7M2_-n7WCU=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TTCN5d5orhXRp-8Fg1M8cgJYOXMjdPKrwNAx3YE35au3-pLN2ajEvhw25Bn3OjaP9G060IOLBAkfQ3R6GuAZnSCbA-GPrBR5lv5VTyKI1pEgpLg9bFlvJS__dXh-n3vMsbb2trg=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
17- Sistema: Verifica si se seleccionó flexibilidad, y es así, y realiza las búsquedas sobre los siguientes horarios para la fecha indicada:
HorarioDesde = 0:00
HorarioHasta = 23:59
17.A. Sistema: Verifica si se seleccionó flexibilidad, y se seleccionó horarios requeridos, y determina sobre qué horarios debe realizar la búsqueda para las fechas indicadas:
HorarioDesde = horario indicado
HorarioHasta = horario indicado
18- Sistema: verifica que se indicó “Solo Ida”, busca los vuelos que correspondan:
A la ciudad de origen y destino indicadas,
A la fecha indicada,
Al horario: HorarioDesde y HorarioHasta determinado
Y que posean butacas para la cantidad de pasajeros y tipo
de clase indicados, verificando las reservas vigentes y la capacidad de la aeronave asignada al vuelo.
18.A. Sistema: verifica que se indicó “Ida y Vuelta”, 18.A.1. Sistema: busca los vuelos de Ida que correspondan:
A la ciudad de origen y destino indicadas,
A la fecha indicada de salida (Ida)
Al horario: HorarioDesde y HorarioHasta
determinado de salida (Ida)
Y que posean butacas para la cantidad de pasajeros
y tipo de clase indicados, verificando las reservas vigentes y la capacidad de la aeronave asignada al vuelo.
18.A.2. Sistema: busca los vuelos de Vuelta que correspondan:
A la ciudad de origen y destino indicadas (ver
Observación 1),
A la fecha indicada de regreso (Vuelta)
Al horario: HorarioDesde y HorarioHasta
determinado de regreso (Vuelta)
Y que posean butacas para la cantidad de pasajeros
y tipo de clase indicados, verificando las reservas vigentes y la capacidad de la aeronave asignada al vuelo.
19- Sistema: encuentra vuelos disponibles y muestra para cada uno:
Horario de salida
Aeropuerto de salida
Horario de llegada
Aeropuerto de llegada
Número de Vuelo
Duración
Importe Total
19.A. Sistema: no encuentra vuelos disponibles. 19.A.1. Sistema: informa la situación. 19.A.2. Se cancela el caso de uso.
20- Fin del caso de uso.
Observaciones: 1. Cuando se selecciona vuelos Ida y Vuelta debe tenerse en cuenta: si se ha seleccionado Córdoba (Origen) – Buenos Aires
(Destino), la búsqueda para el vuelo de Ida se efectúa por Origen y Destino como se indicó; pero para la búsqueda de vuelos de Vuelta se tiene en cuenta para el Origen, el destino indicado anteriormente, y para el Destino, el origen indicado anteriormente, es decir, Buenos Aires (Origen) – Córdoba (Destino) para el vuelo de Vuelta.
2. El Pasajero puede cancelar el caso de uso en cualquier momento.
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case de Generalización: no aplica
Nombre del Caso de uso: Consultar disponibilidad de vuelos Nro. de Orden: 1
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31tWMlbujylPGd9oyAgzv2vaNCVE09JL0fRrmbEMK_K4TdU9SpkxcHt4bdiGy4EJfjU-AJ3sMDNDLePHepioCMSRmGiIVLwQbvt4kX4FVRoaXi3UDQOmwvJAZ7MpwQHHvr85C2sQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QUy7lxdALExzbMAhyqBr8Dg_rRJfYTWHdc0-RTSRc73dGw72ev7PC8xovrq1EJ6yMxciaO8vY6Fxl13KufXGqiHfJU1YW3xieD1APfr5c7e9snYoiMQP9m53Bp-9qlJCneXLTaQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hQsyRXFvWU8DYJhliPb9kZ-7Fl-WBef-4_c8a4c7PTFnjQTFaradCJyG2N5KbX4O074ftIRki4VWxa5XEJavV2FHCkaC9SV2CGoQ5sAg-uqOMLU7HcncvgIxDxfcYMU4Ty4c_4A=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Actor Principal: Pasajero Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Obtener información de los vuelos disponibles según los criterios especificados.
Flujo Básico
1. Pasajero: selecciona la opción “Consultar disponibilidad de vuelos”.
2. Sistema: requiere que se indique el Tipo de Vuelo (Ida y Vuelta o Solo Ida) a consultar.
3. Pasajero: selecciona un Tipo de Vuelo = SOLO IDA.
4. Sistema: requiere que se indique el País de Origen y el de Destino.
5. Pasajero: selecciona un País de Origen y uno de Destino.
6. Sistema: obtiene las Provincias de los Países seleccionados y requiere la selección de una Provincia de Origen y una de Destino.
7. Pasajero: selecciona una Provincia de Origen y una de Destino.
8. Sistema: muestra Ciudades asociadas a las Provincias seleccionadas, y requiere la selección de una Ciudad de Origen y una de Destino.
9. Pasajero: selecciona una Ciudad de Origen y una de Destino.
10. Sistema: solicita que se indique si admite flexibilidad en horarios habilitando el ingreso de una fecha.
11. Pasajero: indica que es flexible en horarios y como previamente indicó el tipo de vuelo “Sólo Ida”, indica una fecha.
12. Sistema: solicita que se indique la cantidad de pasajeros por Tipo de Clase.
13. Pasajero: indica la cantidad de pasajeros por cada Tipo de Clase.
14. Sistema: permite confirmar la búsqueda.
15. Pasajero: confirma la búsqueda.
16. Sistema: verifica que los datos requeridos hayan sido completados y así es.
17. Sistema: Verifica si se seleccionó flexibilidad, y es así, y realiza las búsquedas sobre los siguientes horarios para la fecha indicada:
Horario Desde = 0:00
Horario Hasta = 23:59
18. Sistema: verifica que se indicó “Solo Ida”, busca los vuelos que correspondan:
A la ciudad de origen y destino indicadas,
A la fecha indicada,
Al horario: Horario Desde y Horario Hasta determinado
Y que posean butacas para la cantidad de pasajeros y tipo de clase indicados, verificando las reservas vigentes y la
capacidad de la aeronave asignada al vuelo.
19. Sistema: encuentra vuelos disponibles y muestra para cada uno:
Horario de salida
Aeropuerto de salida
Horario de llegada
Aeropuerto de llegada
Número de Vuelo
Duración
Importe Total
Fin del caso de uso
Flujos Alternativos
A1: Pasajero selecciona Tipo de Viaje= IDA y VUELTA A2: Pasajero selecciona horarios NO flexibles A3: Pasajero no confirma la búsqueda A4: Faltan datos obligatorios para hacer la consulta A5: No se encuentran vuelos que cumplan con el criterio de búsqueda A6: Pasajero decide cancelar el caso de uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vFueuIgEgFyXwCT42LHlaXg0cAq4g7bOnmTsUTdW68NefLo-kMm7ywfBwYr-na55JaPPLVJUbN895syG-zVBZ_9FKBF20_hzgYzdn85Bfy2JtxSwRXUMCd5nM8K2fKKkGDVH9Yg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GaIjf_XqggBkwFxStYfOSUlJF8Iv1HjmEElJTdT89wCcJ3-MRl_dPaW9c6NoHOPHLkqSJ7jkE50POl_P6AUCTB5F3PtclsemI3fxQ1X_vjPBopGIxrTYoQq7NLHSsLC5cymchuQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tcaw6j5yIwcKnqMyZNmBQV5jjhPrln38MU-fLCSU5Q5PpNkOte4T5OlkLSYMA-06goVIr19bFB6h-X45peh7ipk2Tp8-P2HPhQW9oMOiAF-WUDHDE6TBYKZ260Mb7FF82TOIucg=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Observaciones: 1. Cuando se selecciona vuelos Ida y Vuelta debe tenerse en cuenta: si se ha seleccionado Córdoba (Origen) – Buenos Aires
(Destino), la búsqueda para el vuelo de Ida se efectúa por Origen y Destino como se indicó; pero para la búsqueda de vuelos de Vuelta se tiene en cuenta para el Origen, el destino indicado anteriormente, y para el Destino, el origen indicado anteriormente, es decir, Buenos Aires (Origen) – Córdoba (Destino) para el vuelo de Vuelta.
2. El Pasajero puede cancelar el caso de uso en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_vKSV875EzMIzvJyvFTgRomcJ-T6usAZghI1hztVASl9791TDArlsgw-lgd0-zKNxjadQ0YXmfyvyZXxev9LEJUX_LL9SVz5EXolyhaD4NVsfyFxkIQpU1gh1GPf-Y1IP3uEwfA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2O_7dIkdr68Co7e7LW0nM8ZEPI004dGyzv1cU0km4FrBrWMsQmdwh4eMR45MJKEVHSBPlqmF48kcl60Y8ry2dHv5Xi6bMiVDhyBwUCRkZDJ9yFs0tIHy1IFHb5cRXsZPNaUCD6=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Pe_rppvPHSoledBSJfnjpvz_kg47YwAnWTSsAcbO9eSwkrbAMqYthEfAf612YKExCZ_A-z-U2ZCBBLV0U7K1c1pZO3yglkbHIj9gHTQxz5dMR79G6iVCQE3XTk_66zfZMfh8JSA=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Nombre del Use Case: Cancelar Vuelo ID: 2
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☒ Simple ☐ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Navegación (EN) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar la cancelación de un vuelo.
Precondiciones: El usuario posee los permisos para acceder a esta funcionalidad.
Post- Condiciones Éxito 1: vuelo cancelado.
Fracaso 1: El Encargado de Navegación (EN) no confirma la cancelación del vuelo. Fracaso 2: No existen vuelos factibles de ser cancelados. Fracaso 3: El Encargado de Navegación (EN) decide cancelar la ejecución del caso de uso.
Curso Normal Alternativas
1- EN: El caso de uso comienza cuando selecciona la opción “Cancelar Vuelo”.
2- Sistema: muestra todos los vuelos posibles de cancelar (número vuelo, origen, destino y horario) que se encuentren demorados, programados, en embarque y reprogramados.
2.A. Sistema: No existen vuelos posibles de cancelar. 2.A.1. Se cancela el caso de uso.
3- EN: selecciona un Vuelo.
4- Sistema: requiere seleccionar un motivo de cancelación.
5- EN: seleccionar un motivo de la cancelación.
6- Sistema: solicita ingresar una descripción sobre la cancelación.
7- EN: ingresa la descripción de la cancelación.
8- Sistema: solicita confirmar la cancelación del vuelo.
9- EN: confirma la cancelación del vuelo. 9.A. EN: No confirma la cancelación del vuelo. 9.A.1. Se cancela el caso de uso.
10- Sistema: registra el motivo, descripción, fecha, hora y usuario responsable de la cancelación del vuelo. Además, actualiza el estado del vuelo a Cancelado y notifica a los interesados (ver Observación 1.).
11- Fin del caso de uso.
Observaciones: 1. Los “interesados” son las pantallas informativas que están instaladas en el aeropuerto y la pantalla de la consulta de
disponibilidad de vuelos del sitio web, que muestra el estado de los vuelos. 2. El Encargado de Navegación (EN) decide cancelar la ejecución del caso de uso.
Requerimientos no Funcionales Asociados: no aplica
Fuente: no aplica Referencia Fuente: no aplica
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K9HuI8U9fufm0tMiqvEH8cD10tLP4cfsN8y2I-odpGta_w5xCGppLLlFmpTJYk-tx6RZKq_lREtmbmNVjEbi8ZS-o7NI46NAuuQS6Mu6nOXoavrlGjUkmAXxYR3a4VL1KdSbU=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0luEINTJB9ZLfS_1YlfH2aa9P8juRVEjQD-IBeN4q9EIHAW-lXtqjsokOnT7Lx3Lr5_L2dQXDTAoUH7lzByvauEBwEzN0mRkYqt6oZpK3S-wW0d-1l2LXOi99JLBXKe62LhFN7=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2y1V9d_cV92U6BYHRA-7b-qBGRE3Sqx0hn5fYYVycKeMqYTHKVkNa7WBBVvkkTc5imgw2QhmuVfrb9FDJ184UVL061q4AUw4BYgE135dfR4KQvT1pshTluTzgC7FO2yQh7TfLX=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Nombre del Caso de uso: Cancelar Vuelo Nro. de Orden: 2
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☒ Simple ☐ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Navegación (EN) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar la cancelación de un vuelo.
Flujo Básico
1. EN: selecciona la opción “Cancelar Vuelo”.
2. Sistema: muestra todos los vuelos posibles de cancelar (número vuelo, origen, destino y horario) que se encuentren demorados, programados, en embarque, reprogramados y/o en ejecución.
3. EN: selecciona un Vuelo
4. Sistema: requiere seleccionar un motivo de cancelación
5. EN: seleccionar un motivo de la cancelación
6. Sistema: solicita ingresar una descripción sobre la cancelación
7. EN: ingresa la descripción de la cancelación
8. Sistema: solicita confirmar la cancelación del vuelo
9. EN: confirma la cancelación del vuelo
10. Sistema: registra el motivo, descripción, fecha, hora y usuario responsable de la cancelación del vuelo. Además, actualiza el estado del vuelo a Cancelado y notifica a los interesados (ver Observación 1.). Fin del caso de uso
Flujos Alternativos
A1: No existen vuelos posibles de cancelar. A2: No confirma la cancelación del vuelo. A3: El EN decide cancelar la ejecución del caso de uso.
Observaciones: 1. Los “interesados” son las pantallas informativas que están instaladas en el aeropuerto y la pantalla de la consulta de
disponibilidad de vuelos del sitio web, que muestra el estado de los vuelos. 2. El Encargado de Navegación (EN) decide cancelar la ejecución del caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2D_Rmk0CH0drVYvf66Sxcoi6k7DIO9i5Po8Tf0X1UJnTFAws6AzN3JXpykOXu4C2mM8h29CtQqwzVEl_PuDEe2ZNMR529pghskNxMvIc2Qi0HLUJcVuzPcrcnP6j2wqwhNcoagag=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lVAusRW8g5-QG3EbzTW2UsmjKQLMTCKr7FbNZ4cL1NqJz1irxtKmY2RpFWOISwBuqSFBTCnXd-RiEE-Qz1bfEfyhbC_HRc1_I673Q0Xigoq3k7nX8tXZotqiCcm7qguITep2oqQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32SV1xCJEiAIAbb41PCZA9urH8UqR8RRh98osLVSXUPZb0V9DVIwTmJnz5ThTDdbXTwpsrhE834UKwcyVCR4pww5gRXaxMWfw4E7LTekF-LyVqL10Gqb4ZnACFX1hhCXRXdDWc=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Nombre del Caso de uso: Actualizar situación de Vuelo Nro. de Orden: 3
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Navegación (EN) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: registrar la actualización de estado de uno o más vuelos de la aerolínea.
Flujo escenario que informa que el aterrizaje de un vuelo.
1. EN: selecciona la opción “Actualizar situación de Vuelo”.
2. Sistema: busca y muestra las opciones de actualización de estado de vuelos (vuelos en estado no final) y solicita se seleccione que estado de vuelo quiere actualizar.
3. EN: selecciona opción Aterrizar Vuelo
4. Sistema: busca todos los vuelos en condiciones de aterrizar, es decir, vuelos que están “en zona” y muestra de cada uno de los vuelos (número de vuelo y fecha y hora de partida programada). Solicita se seleccione el o los vuelos a los que desea actualizarles el estado.
5. EN: selecciona un vuelo para aterrizar.
6. Sistema: solicita confirmación para marcar el vuelo como aterrizado.
7. EN: confirma la actualización del estado del vuelo
8. Sistema: registra fecha y hora y usuario responsable de la actualización del vuelo, actualizando el estado del vuelo a aterrizado y notifica a los interesados (ver Observación 1.). Fin del caso de uso
Flujos Alternativos
A1: No existen vuelos en el estado buscado. A2: Selecciona todos los vuelos para actualizar. A3: Selecciona varios vuelos para actualizar. A4: Escenario que informa el despegue de un vuelo, para vuelos en estado cerrado. A5: Escenario que informa que el vuelo está en aire, para vuelos en estado en despegue. A6: Escenario que informa que el vuelo está en zona, para vuelos en estado en aire. A7: Escenario que informar que el vuelo está demorado, para vuelos en estado programado o reprogramado. A8: Escenario que informar que el vuelo está embarcando, para vuelos en estado demorado, programado o reprogramado. A9: Escenario que informar que el vuelo está cerrado, para vuelos en estado en embarque. A11: Escenario que informar que el vuelo está finalizado, para vuelos en estado aterrizado. A12: El EN decide cancelar la ejecución del caso de uso.
Observaciones: 1. Los “interesados” son las pantallas informativas que están instaladas en el aeropuerto y la pantalla de la consulta de
disponibilidad de vuelos del sitio web, que muestra el estado de los vuelos. Muestra para cada vuelo (número de vuelo, fecha y hora de partida programada y fecha y hora de aterrizaje).
2. El Encargado de Navegación (EN) decide cancelar la ejecución del caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ij8GRn5-7Asw-2tPzJIQD654ebQI1B0gBn1tqMMx3YmZ6LsNP9yZUBBHiJMfo0TXSjkMu57_-fy58lkIB3Pm5c5BMHKJE6j6-bQFzencfJGl5l5MxVWhBxj1HySFd-rvjWj7TQA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06692zx4qn_sOMxo_2vZDrfr1ya9cOSYXkWMZBDtocB2b2rQ9m-aeSS6rPl_IkgxO2nf3BhSUvT1aOh0aEW_aQKH_MggSCZ5lrJ1_o2cm9AYR1m_AwnfIw3KSTC_WxbHhVq-Q-Vg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ch_AO29lQ1DG3NCqw3SCkv8yfYzuaueylN6kZQhsqfZAAMDTwHfCv504Py5IbpeuV1tBhdNzvOo1wMKjzGuDnkaRMIUwvhndAunr7C8p8b6pyjPeB0MAWbF6-P4WAhZoFJeib5w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35_lxxuDADsKw7R81H4HXWbF0OhUPw7lzrpB72J8RFaBx3J-rivCHTBUSk-UiFp9zHdXexP8cQecsx8L-T65x1PDa2tSSb3cDryBOOe3FIPPzghmcSYy-8s6YCcs09gViLd3V5=w1280-h1115-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0f9OZ6F9QrYgHyTzd_dvUXaN8JN0OQQNKOkuXcnN0fuF8tbcvoWzF6Y44S9SI8wysC39dV7B3vSbEmLIL-pXuyPXYGkHGJCr_R5ryeJ103oR6jP2Ucv2s0zMVon1OFxV0WBP79-w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39jdQnKtxsjniput3ml-Fj7yfX9fX9EnyrD62Gz_zNsLr51QgpwIMU2GC37eEpcOOFrVunB-pm4rNclvLhn59Tku8ltWJF2jDqE3PjkCqXAuxw8U5K7mz-27xUwOtfKNAkcYvKGQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08nxDSRyn262OGLFbqs5BQhRC2nqK-Mm_j2jU9P6NI6qIzg3dz68PHIy6BTQ5_xvdGovloYnY04-TQDdmsIXoJo96LYkZDas8e4WK2mVh7M-pRAWV2C-yoB5K8ZQKX-vMyTmfyzA=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35 Autor/es: Laura Alarcón – Gerardo Boiero Página 12
Realización de Análisis para el caso de uso Consultar Disponibilidad de Vuelos – Curso Normal con diagrama de comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cCaHFygUAtjhQH-WBCNpBpeys9QfaTMshR5TcZUKuYVF_T5q0W46UzRdkmiEkCKOGGGPNdQBzlggEHcpPUZUN_eZR9bteFpc7sSm-0RFCu0Bmt3tIw0vwGHg25eALCClrP0k53A=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jQnbC7E1xsTff2XHdgbKnOJDRjwQkOgCXRhMOj66QVxJhaBfHGc32N1sQHPv886YO7CEevogCtKSf23KY0vNbpTjZUVQjfbOiFXUinxpgFKpO7IDRgGaMJ_Dsog__liWO5CVe=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NZs4JHz0heQlBn1sT1PZA0gUTFEqhqmYnyyiPRNE2ReyrAp1YhUzIAGPyVCjAByOqCD3QOZsSj6Zl5C1qSQUbd5q8KdjZUzCDjLvvGqY79lIEktlXlZeG3WvdLhKKDymLePf9TA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JHLOjQxEQJyFf7u5tibQakOj3FDhWFMEZc9sGmc2LixRNKcp_Cf_Cbp937UowfIYY3OPHM6N-DOgSNBMc4kGVByx7A7yAT33USt6wPDdIQCoysZLHcwfNVASC1dki_LHJxKC1sw=w1280-h652-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35 Autor/es: Laura Alarcón – Gerardo Boiero Página 13
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1R7w52y2umwYTzLGrbbdHc4E6DRuMmWklkU1wI3fqEznzvS7H2FbBOK_sP86rjSfFWpx63WfABih3oc4ZqlRK1XH5yFOUURmWLdC2mhWTBxy6xA7LUs2MdSRrKBkFH5kp1uvnM=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LI774JgTo6CXzmEtrbLkE0htousy3jz-BEthkmAnwJETV0_OaR_EAphUeBLMigcVD036aoKw40Xzh1M1vvt-udLkmStXhqshQU5NySysAPRx1N2GfsmzgKe-3Aij_195ew55_=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X_vWVtylDCbctntfcEveQMxA3b74DU_hzU3sL-GIPiTMlUnmKLuOy590nCZYiNbm2F7wWYcx1rv9b5VQkBrpC_jVHofLtWQTt8Rm99GoQvjtgrMCffUqJkPYbF-sULEu6v6UbTw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VqfXDknQ0XvZUi00hRxhQB7cdu-a_dFYrBum_dxSp13yN79e9p7-x6dJOjFX3sgeONknxql05vOYBPa01hHugHlDHabaJJ-i0IxQ2-nMCObmZjJjoWHnR51RgfZpIB4BUl8XyrQ=w1273-h1280-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Vista de Clases de Análisis asociado a la realización del caso de uso Consultar Disponibilidad de Vuelos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dIWwwv9F9e7StM-M1o6P2oztFk0bNM7kHKWg6YxHPo9EvaiSBQYtmzIi_dYoZF1IPHNjun6v8nmv-CCkCKQQ3MMmUO8wzelY5TrGaGXZSKGSlBMVANhkNSgxGUFToFXrreGhZ8Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Q8EaPLPVJ4g6CmAH4UChFRbk1R_pML3p_Mg6fPDFB_GBqYeBmJh2d073H4UqKe3XES6SrYwknqtitGhEEZHW-Wj9a81m6dc38Fix3I8HFZebf_j2mIljwF_YXlaM65Q1vr5pcgw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PLYp9PG0nHw9s8ZJhhv5SviP3pJw0I5Rmc20QWPiN3Mbq2xFlyEBCDgcUmhUYwJgzidfNa1XHsQHDHK51RaQqVzg3qWZFV0xPGUxGf1A-61YYkl5_qD5GOv_BLeamnkyV-yjp=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OFRdwU_4JaRyMOQAD-2krIELFN35NcNP_MegCIdXEbXklsaSQNwiS2SWI6dhgnKc-YllsQ1c9b8hz7ZfoJLqk_NZNDW-SrD23BsIL-PG4POUm4anyQMGJC4Czr5GvSxVGM8r1Dw=w1280-h661-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35 Autor/es: Laura Alarcón – Gerardo Boiero Página 15
Realización de análisis para el CU Cancelar Vuelo – Curso Normal con diagrama de comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26tWmTX0L_tB-JES5aSr3iMqRJmTg2IboIhueKPiK1b9kw51kCyiz6h_wTqAwADD5gv5PG3PGDOTl-dqznxZt9jQqVpiiI15HS9qiY8-ETmlydTaMPITmGWoyAshvcCn7-h3kyqQ=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J51JoAIGJP3g2Y7aCKkwvX0XYTPYn-xiH416jodiC-jjnw5PsP-nclBxASPCNAm_iFSIGq5ZotOLElbJzNT8Hw6GrFHk3QIjditpzllMjGxJKH7XypiQ6vWknutFWhwCsJ2KsKg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oVqL2aTjxIlLa0XAeApCzYEh2N6rk_vzbcNuyD2_KjG810ndcxovaQ7N8eCeO4W5syVw5sgZaATqemMkySdWbNgARNtBumiHoxpOIlwg9ZGOKMrYVnM81bMhQjlDNPa7WLg3mGA=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35 Autor/es: Laura Alarcón – Gerardo Boiero Página 16
Realización de análisis para el CU Cancelar Vuelo – Curso Normal con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kL_qT5wtxG65XhinQ-T9fVO36CAfZ6QEJvVc59ZlhdhQ2IbujnoPBFZRoncLi7WGOc4y2NIh_q0QMCvNXyjbGphS8y3my9VekSrZ_j_HxKVRiNFpn2fLsWQBTnuopElmROwFA=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OjgfXxLHU2_BcZZtuCES3b_PwGWFR5MJ3Ygmhesk7JmhigwT0yWZmwebm_bQamOJHmgtpY2HAsW_uAGej353kXZ8L-AFcQiMmASioXhlmzwYHPXnEVTiyc_uj31puq35_p26H=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qV5fSkn1rfsvkGGWz9wb_xmZRfBkJHnOgwX6MvLC1n7rJCqKqLXx3vsqeBgPojo23f5QDjAE88PRR7lI_SJrV07wn2mSsXwTrhX7NyBC0Othw6-0y23qiwxoXRTxBNi24zVK1=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25Kvg2ihpfrSIafzPXxuBgZUR3ux0pWrdimQsjO8askHRKH6Hrk3j4n-Pc4xSugfKOzZ9kqKRbTDNEtqDZ9a8FuErJ4-A4tMLT4vl-d0T2Ig6lRL01Vi1LOzaciRP95HZu77_eMQ=w1280-h725-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35 Autor/es: Laura Alarcón – Gerardo Boiero Página 17
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ij-l4NgGQpU6QTI5fbcHUq-ovmLqUzCgk0-QYABRNyAJW1cSxJuYqfMcVQVVkt9-s5Rv8hstAiJnwtqozccDMUPaiiFzy3wv28H_7IN7rmaIts9Cfs-UN493x2ZnPuqNMdC5u_g=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gzXg3Iji4dihGvHWJJnQTr1FRE96pcjaBvNu2H5RqROhHMsOcZQQFr0FgWE3WuZn3jMWp5qx96eZdSrN7aXI6eUXjED5v22WAfDPvskMWHQsS7vVE1iBK0HKusnlE1YHcODYuuA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fWA_pt3KJ8RA136VFaPigVRTF84ulZrPAa_h4Ltkvn98gB4QJvh9TTCFhZOD7DxUJQJlRJ_JkQ9azeqZdBKhkKvhgaQuPnmOtmhHqmC7ZKYasqTU8Ovq_w5MUb6_vyqVXFteErQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TC72AKyByzW_kOuytzTdjzYbu4D0klyleoIcDyb2R6SHgtf9lsvbXCobdXZ2eTwXuLUfXyFTiv6Jg-XLY2oa5Lqb6q87er06O6ZYirBY1Vqr22T8ZVpIUgcnfLqZBOA32XO_ITg=w1160-h1280-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Vista de Clases de Análisis para el CU Cancelar Vuelo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EXxuEBQ7XDiNeB52sF5vOu1a1Rho_DarlN8i0KsCH28FK95DnO2EFhrrTerQbd70skO-gBpu4yZR1oYOY5IbmnQpawUkBrVQQ2EcmgD-DzVbgi776yK0dlGP-e1WUB5qiow4eWg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gDwqBaom2BCh2Y-9z7cnMAl2qJ27RPeucN9tIlcAAAPuAvD01CAASf2Hg9tXdsFdJ0taY1UqUH5nZriRkxZf7Lfa_-VXZM-g1Yo5If2gXvKKuXKYKFHrQ88gzfAwz5KHL7SAa=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ikKbiCoT4eVfYTjea5nl9DnYM06JseNLkr_zSYPDcTE55Z9BlJHUInF0Uso9qZRUui6VSHIYnF6Z3Y3MD79HGBp1kZqZhL-yQRkrnEn_F8swEIix1Zn6G90eKCzhuDTkLg_ODCA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24DBISoQJWDkLdRY55x846xcet_bIRDxMd0E-baRCowInizvY20J9hETJfNW7CtQYTtDRxenfm_Jif4h4Zmru1Lmz0ZuOoQe0QV2WJ78ALdh_iAFv2vC5t73hlrLmhhlgJgie17Q=w1090-h1280-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Realización de análisis para el CU Actualizar Situación de Vuelo – Escenario aterrizar vuelo, con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0u0F37CGJnpSwW6IDXr-cMje9cJC-OAuX3tSYKeQ7tM3AohjLccjSm-ihNiPIkacY225pFevdoXQe9YWKzAFQUsPfYcUaCxICmUz-D81lC0hD6P6d6-IpH32hF4HRM6YC87aWTvA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00P_at_5Is_J7pVoOdWoq27w-VYwkR8aFvmW2vYifY3b5BCmS3U1jW8MWKif0Y4iUe-qRBz7eA1Z1c3UndNV2uU5rgVjEonLUYmvhLx3PeSnP5Qlw-GkHUhvHIVkACKWQzOb8jaw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zlRzfo1LRqxD-n8oRVbc-hp2Z_SmoNjmClWgi0DIAInJdLgbOj6sbzKqDY8VLtc2C7kFwfbtyUtEnLRxn6Rp2CCfTxJUxG9ps3cMtwFrvDWat8q083w_YUIzvFTWk3hR0dWmFgg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nxZg9h640VsD5hFRLiOx9mM7D-6AivvaYzrmKNhW6sLIwrDa9Lv1gvBnt45vD7UG3hgpEbbBlQhrs7wUyO3ujn7G2NKKgMCkC3Yhz6SFwxUI7G_9QBOXliyHUa7E6hKVHVnN4Vg=w1190-h1280-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Vista de Clases de Análisis para el CU Actualizar Situación de Vuelo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zZzgcRxN7VeS0piJogv5D4gww90ODXqlPUnhor9A9jcVTtSnXNOwTZ7GrNdI8HMsbxXzhnDmdZyZnT4m_Rl-Zptx9deH3z8dPso11chkWWDeOK5oaHJxaki7Kkyb7wQZKNAXbYg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lubJBw3d9znQwLi-8kjAGXEqyrYhnuWszKOpcmrYjK-vXjnZLvRG-UWb5gdOpP85BK9QdpmmZ-GoJqs15TFQ42EaM2MSd6QVPkg_1Fkmurn0N2pfOgWH5cm2Jkjq1_vqAXKgqZQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3F99ldJ8bd92ou-A-hMoKlkQ0HbF7FTaJKLQ-RSdNPSatc2CDO_y5v_DycIOHUO8pImLPzGnjP_MNP2BTTPg0IUuAlQB_2Lb8bVwqk2giXUIfHwwUt2dYGvAUWdKXLj7a1dfLjdQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02knzO3HWK2feSbgxjreDxlfB_XWb04I-irpwADPZ4BsA0AM6MP9pwZ4KtC07co7PfyEjxIFss5RdOdTxpDGGK-9L24bT5EBKwQl3NECuXec8r1RcTIeIq3bxojcmFop9rzFgtVA=w1280-h860-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Máquina de Estados de la Clase VUELO
Máquina de Estados del Estado Compuesto EnEjecución
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yB5S_fjRKTi9HZAPUa9f2Ai2fhbhD9YROaXfMHHuz4GlD4zd2ZR0jJD5CfBDCrserpCsx61F9CzPoNAsQKKYO1YwQotTvuyc-xAnvFDwRMasFHF-ldosDW_EnwjAmF-hLobVrGw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rYxup-0ZJbjaba0jgH-P9zRjHvhBRIDlJDuI0OFpAIwBHbyPRTr8yk4EQM7oV1EisRcO2gT0TY0SccbxiE-EO-kNeeaQfwDvaWSHazsdwf0pOshIsbpTRJr0hvgGq5v5ehexPjA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BNaXtwc8bAwPoDincd6Zqs9wLK3c1k5EDEzfTYCC8mSZ4ctlyV0LOs_5rOGGs19a6-5RQgulF0SfS2ElBynAQ7A5Q2suS4cDhqwKzKGCohjV7USOiLJ74jglzBa4CZwKYqcULTw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0W9elZisnogOAEME9Scp9OpGJarhyDvakgSQJCbpzzw3cY5Cpy5mv5iiDZqpxNHSu6G9Qtg0eie5lFB-Ec8K7ndIE_dvWlSlTfoBzMz4T3zkXW5jtrzDKGlDfvUNVEWosBUi3FZA=w1068-h632-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv128xLa7M9SBpZJLw_JRGvVBoOQB3bPVogzvjm6Z617U0yiu0tk-uZOUKNLLmId3Kl3iWvZsnK17dscWYZj7g7JErPIhqSLtyHLaPlPQ1YED5VHCoGd-oxGgWD4fzlf000C6kWb=w1280-h725-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Patrón a implementar Observer basado en implementación Push Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wuLEjMjBisvuYNOdi9Z9O1KNdcJw5HI-KqnQnuXIh1AW24PgiNi4yUOoP6pG5UZU4Z7stz2SD2fj7X3JWeOwCcJF4P-7EaitsTRHU43qbyRuHS7uhQIlrvEAV0l2SHHXSGb5IWA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h-X4I3N2rd0fGsSrgjAEiUTUbeqrlx4RIxhmX4uctWPxEX31EFAAXjkzYYVNhJKHg2jtCXdKSrEZyaqtkVwHyNC9_rUosljDHi2d1H9bDZGjk2Xn3hWGJGxq4Rr04qB4_eiDj_g=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QPQnkgCXpco6QEVALPpreg4cT8vqFpJPkNIX40H3Et1wY1-p0c7MMLYBm9X3liXnjvVZp1b1HFVNxHmUxpjoeQGCHdMQ31OQznukoXwN-e9q2Wj5pNKJtkZt1VvNrUYMkRZTY_g=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CNZsnb7EmXQF9Wa2FgpVENhkoTbK4IuENzLaZDdZQgZKsJt1ZkFCLCpx4qQS5E5QAmOe6dGwpQkaKM1HImlFx70bB5peIXTLaY2qXJQcfOu8LmyVi2QndTvwc6YfSMsj5YpYLbw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mlTEo7nfOccTqEt6LLSrgDXL84fNo1dEbJRlPdkpmV7-lUQiCsl3F9fBGK6RHFT4OBvEBptez6cTHGLUD0RRZkA97Tgbh6rphC6GA32HR-9Zqv4ySE-FCvASsExzns7fSqfMU=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_ZKJfzmXFi5CRFm0coYH-OmjbFBfM3j4OFlZUHqx8TGGUjhAL8ii-r4FyLlVs4xZtbNSwm4nOuF7c6o6crgpfygiQ5PCIPfPpoJD6UOQE_egQuG2-SfnXFt1AQ73tbEUnLAn4LA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hr2Mhb4iT8FbfSuHxJ4ZSrLqNVNpU9e2TnxDt_o6nkCh7mgQGi5AFBPSH49_kQC8F4cNllmlKr_ku8bbRhllIWFKuRiYx9tS_DIBpihJx1fkLRcAUuoh6wxP-W1IWMag_9ieI1w=w1280-h1073-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23qDygZcgpQnWwn7sEGLDV6RMITwFWvLtarNprThKViOp-bQ_Kc_t4lB5CGFEb2r2V4tsCl5mZ8hhzgYYUlDRndHjhvpLEcveCfO8RYwZFrzvS-3elnSxRLdJX993qZRHXvYTyGw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1atmMMmJPJXhgFHsDuIquDB89Z44XMXSxF9PiHgZHEA5HiSorS_yNg329xoFunM46gAOFpbdtz-tlZpyEVYVdTXdfZPVjJv5Zga1kO19RUYfPXMOHYhQ6zW5nDhFI98GVfEU4AWA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FW8JmotB0KMi9XKqM6-Ua17LE6GdTlmWLVMykSG7gw6ojqSMFQxRGb4myA2UQKUWS1aGEwPzkhn0kLi6JDb9fbQsHbOj7JiFNpLthIuJgrbfTB_0_HAa1CSmDnL3vkUQ9dpTR8A=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
Pseudocódigo
//Sujeto Abstracto
interface ISujetoVuelo{ //atributos
private IObservadorVuelo[] observadores; //gestiona un Vector de
IObservadorVuelo
//métodos
public void suscribir(IObservadorVuelo observador);
public void quitar(IObservadorVuelo observador);
public void notificar();
}
//Observador Abstracto
interface IObservadorVuelo{
//métodos
public void actualizar(String nroVuelo, String estado, Date fecha, Time hora);
}
//Sujeto Concreto
public class GestorCancelacionVuelo implements ISujetoVuelo{
//atributos
private Vuelo vuelo;
private String estado; //información a pasar a los Observadores
...
//métodos
public void cancelarVuelo(){
vuelo.cancelar(...)
//Notificar a los Oyentes sobre el cambio de estado
this.notificar();
}
public void suscribir(IObservadorVuelo observador){
observadores.add(observador);
}
public void quitar(IObservadorVuelo observador){
observadores.remove(observador);
}
public void notificar(){
//Por cada Observador se actualiza su estado
for(int i=0; i < observadores.lengh(); i++){
//actualización de los Observadores
observadores[i].actualizar(vuelo.getNumero(), estado, new Date(),
new Time());
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0R0I8-3DP4SshuClG548ExNB6tWlH5VODBttWqu3d8unZAq7jAjXLB0MZBJZmjvyRx7yUZlaj1HyEmPvBy9lHgkZRE-TgK30CTtj2Ht9XkgXGwgRIbO0hVdYVfY61eR8Sg-VWQCA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1c496lcjr0oNL7BpdxMjWqSCkz_U9HANB_IGM1X4KDaBpOdIyXNfsjeRgbHnkI5Jf7mIYXiX-dJNFG85Nc4iEDwnTvYo7IxECItjzB7dCFI0EaCjBh3YP_i-RfBQm0TWGZwertdw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iRDnMqkbgnwUDDcgOatgHDYETcp_SXXPFew8RrxhavRYfXqYQPdaIWPDKayD3bp_Ma-wtjbDx9YHPKhV6XH0KRAncHrxW7Dx8vPzK8qqC-i4YdRTUPQy4JQvgfRDVAPtFn4RdbQ=w163-h170-v0?authuser=0)
Ejercicio Práctico de Aplicación Líneas Aéreas
EPC_LíneasAereas– Versión 1.35
}
}
}
//Observador Concreto
public class PantallaEstadoDeVuelo implements IObservadorVuelo{ private String [][]infoVuelos;
//métodos
public void actualizar(String nroVuelo, String estado, Date fecha, Time hora){
// implementar la funcionalidad específica de la pantalla para
actualizar el estado del vuelo
String[] vuelo=buscarVuelo(nroVuelo);
setFecha(fecha);
setHora(hora)
setEstado(estado);
}
}
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AjDb0IYocTELNnxGXsJEXRqC29iZyaioFVLbmo3JHktdIp76b1Ooc4Cg-qa16I7HPgDypfHHgc3ppdv7kEdjxCyCFl9qs2F8vm1CJS0E-pISU5L3QhEon-JKUAse6HTtCtCJJlQ=w839-h1187-v0?authuser=0)
