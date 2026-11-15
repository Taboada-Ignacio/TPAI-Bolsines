# DSI 2026 Ejercicio tipo Parcial 3 FIA Formula 1.pdf

- **Ruta OneDrive:** `Casos Practicos\parcial3\DSI 2026 Ejercicio tipo Parcial 3 FIA Formula 1.pdf`
- **Páginas totales:** 9 (extraídas: 9)

---

## Página 1

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 1 de 15 
 
 
Se pide al Estudiante que lea y analice atentamente la situación planteada y en base a ello: 
Rediseñe la realización de caso de uso de análisis presentada aplicando los patrones de diseño adecuados a 
cada situación, para resolver las siguientes problemáticas de diseño:  
1. Utilizando el patrón Observer , diseñar una manera flexible de informar al Jefe de Equipo 
cuando se registra una nueva Orden de Traslado . Modelar la dinámica relacionada al 
escenario del caso de uso descripto. 
2.  Diseñar una forma de implementar un mecanismo que permita modificar el comportamiento 
variable de la clase Orden de Traslado, de acuerdo con la situación en la que se encuentra. 
Modelar la dinámica relacionada al escenario del caso de uso descripto. 
 
Para los puntos 1 y 2, se espera que el estudiante plantee: 
Consigna 
A. La vista de diseño de la estructura utilizando un diagrama de clases que incluya la signatura 
completa de los métodos utilizados y la especificación completa de los atributos, que 
muestre el rediseño resultante de la aplicación del patrón que resuelve el problema de 
diseño. 
B. La vista dinámica utilizando un diagrama de secuencia, que modele el comportamiento 
resultante al rediseño aplicando el patrón. 
C. La especificación del comportamiento de los métodos utilizados en la dinámica con una 
descripción textual o pseudocódigo

## Página 2

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 2 de 15 
 
Dominio: FIA Formula 1 
Glosario 
Concepto Definición 
Gran Premio, GP, 
Grand Prix 
Una competencia de automovilismo celebrada durante un fin de semana en un circuito 
específico. 
 
Escudería Es un equipo de pilotos con licencia para disputar la competencia de Fórmula 1. Cada 
escudería cuenta con 2 pilotos titulares que corren todos los Grandes Premios. 
Monoplaza Un monoplaza es el auto que utilizan los pilotos de la Fórmula 1. Llamado así porque solo 
hay lugar para una sola persona. 
F1 Acrónimo de Fórmula 1. 
FIA Acrónimo de Federación Internacional del Automóvil. 
GP Acrónimo de Gran Premio. 
Grand Prix Gran Premio. 
Tracker GPS Rastreador GPS. 
OT Orden de traslado 
 
Descripción del Dominio 
La Federación Internacional del Automóvil, también llamada FIA, es una organización sin fines de lucro que reúne 
268 organizaciones automovilísticas de 143 países. La FIA regula a nivel mundial las competiciones de automovilismo más 
importantes del mundo e ntre ellas la Fórmula 1. La Fórmula 1, también conocida como F1, es conocida como la 
“competición reina del automovilismo” y es la principal competición de automovilismo internacional y el campeonato de 
deportes de motor más prestigioso del mundo. La FIA r equiere un software para gestionar la organización de la 
competencia de forma exitosa. 
La competencia de Fórmula 1 es un evento anual en donde se corren distintas carreras, denominadas Gran Premio 
o GP. La FIA anuncia el Calendario de Carreras de la Fórmula 1 para ese año, que incluye las fechas de los Grandes Premios, 
determinando donde se correrá y cuando.  
Cada Grand Prix se celebra en un circuito particular, cada circuito tiene una sede (que puede ser un autódromo o 
un circuito callejero), una longitud de vuelta, una distancia total, una cantidad de vueltas y una traza que indica el 
recorrido que realiza. Cada circuito debe negociar con la FIA un contrato para ser parte del calendario de la Fórmula 1, 
dicho contrato dura una cierta cantidad de años según las negociaciones alcanzadas, dependiendo si el circuito es popular 
entre los fanáticos y es un circuito histórico puede ser un contrato año a año o incluso a 10 o 20 años. A la FIA le interesa 
saber si un circuito estará disponible un año dado para armar el calendario. Por ejemplo, el famoso Gran Premio de Italia 
se celebra todos los años en el Autódromo Nazionale di Monza en Monza, Italia. Este circuito tiene una longitud de vuelta 
de 5,793 kilómetros, una distancia total de 306,720 kilómetros y 53 vueltas y la traza puede verse en la imagen adjunta. 
En el 2025, el Gran Premio de Italia se celebra el fin de semana del 5 al 7 de septiembre y tiene un contrato vigente hasta 
el año 2035. Cuando la FIA anuncia un calendario debe anunciar el Gran Premio que se correrá, la fecha del fin de semana 
y debe decidir en qué orden se correrán los Grandes Premios.   
La FIA quiere que el producto de software que ayude con el armado del calendario y el mantenimiento de la 
información de los campeonatos en curso y pasados, y quiere que las distintas escuderías utilicen este software para la 
logística relacionada a moverse de un país anfitrión de Gran Premio a otro. Hay 3 tipos de elementos que las escuderías 
pueden desear trasladar: elementos de “Hospitality”, que es el área designada para cada escudería donde los pilotos y el 
resto del equipo se relajan antes y después de la carrera sin la intromisión de los fanáticos; “Herramientas y piezas”, que

## Página 3

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 3 de 15 
 
son las herramientas utilizadas para el trabajo en los monoplazas y las partes extra para los mismo en caso de una avería 
o rotura; y finalmente los “Monoplazas”, siendo que cada monoplaza entra en un contenedor. Para trasladar los 
elementos de un lugar a otro, la FIA utiliza órdenes de traslado. 
 Estas órdenes de traslado pueden realizarse para trasladar los elementos desde un circuito de un Grand Prix a 
otro o pueden utilizarse para enviar elementos a la fábrica de cada escudería, para ser estudiados por los ingenieros, o 
desde la fábrica para enviar partes y herramientas nuevas a un circuito de un Grand Prix. La FIA da hasta 10 contenedores 
para cada escudería y además de esto, la FIA instala un rastreador en cada contenedor para saber a dónde se encuentra 
en todo momento, y los programa con un código alfanumérico único para distinguirlos fácilmente.  
Para cada Orden de Traslado se debe especificar su lugar de origen y su lugar de destino. Estos lugares de origen 
y destino pueden ser algún circuito en particular o la fábrica de la escudería. Quien crea la Orden de Traslado debe 
especificar la fecha en l a que se necesita que los contenedores lleguen al destino. También debe especificarse los 
elementos que deben enviarse en la Orden de Traslado, eligiendo los elementos correspondientes.  
 
Definición del Producto de Software a construir: 
Objetivo del Producto de Software: 
Gestionar el calendario de carreras, el campeonato de constructores y el campeonato de pilotos y la 
logística de traslado de elementos de escudería de un lugar a otro, generando información relacionada a la 
logística y a los campeonatos. 
Alcances del producto de software: 
● Gestión del calendario de carreras 
● Administración de escuderías y pilotos de las escuderías 
● Administración de usuarios 
● Gestión de Órdenes de Traslado 
● Administración de Contenedores 
● Generación de reportes de campeonatos y logística de contenedores 
No contempla:  
● Gestión de Contratos de los circuitos 
● Administracion de neumáticos Pirelli 
● Administración de paquetes de mejoras 
 
 
Reglas de Negocio 
 
Nro. 
RN 
Nombre de la 
RN 
Descripción 
1.  Contenedores 
que provee la 
FIA 
Según las reglas de la FIA, cada contenedor puede contener un tipo de elemento a la vez. Por 
ejemplo, no pueden mezclarse elementos del Hospitality con herramientas en un mismo 
contenedor que será asignado a una OT. 
2.  Traslados que 
pueden 
Se pueden realizar traslados de elementos desde de un circuito de un Grand Prix a otro; desde 
un circuito de un Grand Prix a la fábrica de cada escudería; o desde la fábrica a un circuito de 
un Grand Prix.

## Página 4

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 4 de 15 
 
Nro. 
RN 
Nombre de la 
RN 
Descripción 
realizarse con 
una OT 
3.  Preparación y 
entrega de 
Contenedores 
Cuando la FIA termina de preparar los contenedores, los marca como Preparados para 
Escudería hasta que sean entregados. Cuando son entregados, los contenedores se marcan 
como Ociosos hasta que se los asigne a una Orden de Traslado, quedando allí en estado 
Asignado a OT. 
4.  Tratamiento 
de una Orden 
de Traslado 
Una Orden de Traslado puede ser creada por el Jefe de Equipo o por alguno de los Jefes de 
Mecánica de las escuderías. 
Si a una Orden de Traslado la crea un Jefe de Mecánica, debe ser aprobada por el Jefe de Equipo. 
Si la Orden de Traslado la crea un Jefe de Equipo queda aprobada directamente. 
El Jefe de Equipo puede aprobar una Orden de Traslado creada por un Jefe de Mecánica o puede 
rechazarla, si no está de acuerdo con el destino de la orden. Una vez que la Orden de Traslado 
está aprobada, comienza la preparación de la Orden de Traslado, lo q ue implica el inicio del 
armado de los contenedores. 
Cuando se finaliza el armado de un contenedor, este se marca como Armado. Cuando el 
Encargado de Logística finaliza el armado de todos los contenedores de una Orden de Traslado, 
marca esa Orden de Traslado como Lista para envío. Cuando los contenedores se envían a su 
lugar de destino, se debe marcar la Orden de Traslado y los contenedores como En Traslado. 
5.  Tratamiento 
de un 
Contenedor 
Cuando el/los contenedor/es llegan a destino se marcan como Para Verificar y la Orden de 
Traslado debe quedar En Destino. El Encargado de Logística del lugar de destino (Próximo Grand 
Prix o Fábrica) debe revisar cada contenedor para ver si contiene todo lo que se solicitó 
originalmente, y ver que no tenga roturas, abolladuras u otros inconvenientes.  
Si los contenedores tienen todo lo que se pidió y están en buenas condiciones, la Orden de 
Traslado se actualiza a Exitosa y el contenedor se actualiza a Ocioso. Si algún contenedor de 
una orden de traslado está incompleto, se debe marcar la orden de traslado como Incompleta 
y se debe crear una nueva Orden de Traslado solicitando lo que falta, marcando al contenedor 
como Ocioso también en este caso.  
Independientemente de si llega todo lo pedido en la Orden de Traslado o no, si el contenedor 
tiene algún tipo de problema o daño, se lo marca como Dañado para que se le realice una 
inspección. Si los daños no son sustanciales y no comprometen la integridad del contenedor, se 
lo marca como Ocioso, en caso contrario se lo da De baja. 
6.  Notificaciones 
para una 
Orden de 
Traslado 
Se debe notificar vía mail WhatsApp y/o SMS al Jefe de Equipo cada vez que un Jefe de Mecánica 
crear una Orden de Traslado. 
Si no se ha aprobado la Orden de Traslado dentro de las 12 horas de su creación, se deben 
enviar las notificaciones nuevamente. 
 Cuando se aprueba una Orden de Traslado se deberá enviar una notificación al Encargado de 
Logística asignado de armar los contenedores para que sean armados dentro de las 12 horas 
de la aprobación de la Orden de Traslado.  
7.  Rechazo 
automático de 
una Orden de 
Traslado 
Si pasan 24 horas desde que se creó una Orden de Traslado y no se ha aprobado, la misma se 
rechaza de forma automática. 
8.  Cancelación 
de una Orden 
de Traslado 
Una Orden de Traslado puede ser cancelada en tanto no se haya iniciado el traslado de los 
contenedores. A partir de ese punto ya no puede ser cancelada.

## Página 5

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 5 de 15 
 
Descripción de Caso de Uso 
Nombre del Caso de Uso: Generar Orden de Traslado ID: 14 
Prioridad:                ☒ Esencial                                       ☐ Útil                                           ☐ Deseable          
Categoría:     ☒ Esencial    ☐ Soporte            
Complejidad:   ☐ Simple   ☒ Mediano   ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Generador de Orden de Traslado (GOT) Actor Secundario: Servidor de Correo 
                                  Servidor de SMS - WhatsApp 
Tipo de Use Case:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Crear una Orden de Traslado para uno o más contenedores de una escudería  
Flujo:  Creación de una Orden de Traslado por un Jefe Mecánico y hay suficientes contenedores disponibles con notificación 
por email. 
1. GOT: Selecciona la opción para generar una Orden de Traslado. 
2. Sistema: Valida si el GOT logueado es Jefe de Equipo y no lo es. 
3. Sistema: Busca y muestra los circuitos activos de la F1 y la fábrica de la escudería del usuario logueado. (Leer 
Observación 1). Solicita que se seleccione un origen y un destino para la OT. (Leer la RN 2 Traslados que 
pueden realizarse con una OT). 
4. GOT: Selecciona un origen y un destino para el traslado. 
5. Sistema: Busca y muestra los elementos pertenecientes a la escudería del usuario logueado. Para cada 
elemento muestra su nombre, código y tipo de elemento. Solicita que se seleccionen todos los elementos a 
trasladar. 
6. GOT: Selecciona cada uno de los elementos a trasladar. 
7. Sistema: Calcula cuántos contenedores se necesitan para los elementos seleccionados. Verifica si hay 
suficientes contenedores disponibles de la escudería y los hay. (Leer observación 2). Asigna los elementos a un 
contenedor. (Leer RN 1 Contenedores que provee la FIA). 
8. Sistema: Solicita que se seleccione la fecha en la que se necesitan los elementos en el destino. 
9. GOT: Ingresa la fecha en la que se necesitan los elementos en el destino. 
10. Sistema: Calcula la última fecha de salida posible y valida si es igual o posterior a la fecha actual y lo es. (Leer 
Observaciones 3 y 7) 
11. Sistema: Solicita la confirmación de la orden de traslado. 
12. GOT: Confirma la orden de traslado. 
13. Sistema: Genera la orden de traslado en estado Creada conteniendo los elementos que se van a trasladar y en 
qué contenedor se trasladará cada elemento. Actualiza el estado de los contenedores a AsignadoAOrden (Leer 
Observación 4), la fecha de llegada esperada, la última fecha de salida posible, el origen y destino, la fecha de 
creación de la orden y el responsable de crearla.  
14. Sistema: Valida si el Jefe de Equipo tiene activas y tiene activas las de mail y SMS. Envía la notificación por email 
y SMS al Jefe de Equipo indicando que se ha creado una Orden de Traslado que necesita su aprobación, con 
todos los detalles de la OT. (Leer Observación 5). Fin de Caso de uso. 
Flujos Alternativos 
A1.  El Generador de OT es el Jefe de Equipo. 
A2. No hay circuitos activos. 
A3.  No hay elementos a trasladar. 
A4. No hay contenedores suficientes disponibles. 
A5. No es posible enviar los elementos y que lleguen en la fecha necesaria. 
A6. No confirma la Orden de Traslado.

## Página 6

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 6 de 15 
 
Observaciones 
1. Los circuitos activos de la F1 son aquellos que se encuentran en el calendario del año actual y asignados a un 
Gran Premio. 
2. Para verificar contenedores disponibles se debe ver si la cantidad de contenedores necesarios se encuentran en 
estado Ocioso. 
3. La última fecha de salida posible se calcula en base a la distancia del destino y del origen considerando un viaje 
sin contratiempos. Es la última fecha en la que se puede enviar un contenedor desde ese origen hacia ese 
destino y que lleguen para la fecha necesaria. 
4. El sistema debe asignar los elementos a trasladar a un contenedor separándolos por tipo y según el espacio 
disponible en cada contenedor. Si los elementos de un tipo no entran en un solo contenedor, el sistema debe 
asignar algunos elementos a un contenedor y otros elementos a otro contenedor; ambos contenedores del 
mismo tipo. 
5. El Jefe de Equipo puede recibir notificaciones por WhatsApp, SMS y/o Mail. 
6. El rol de Generador de Orden de Traslado puede asumirlo el Jefe de Mecánica o el Jefe de Equipo. 
7. Para el cálculo de distancia se utilizarán las coordenadas de ubicación de la locación de origen y de la locación 
de destino, ya sean Circuito y/o Fábrica. 
Máquina de Estado de la clase Orden de Traslado

## Página 7

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 7 de 15 
 
Realización de Caso de Uso de Análisis: CU 14 Generar Orden de Traslado - Vista de Estructura

## Página 8

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 8 de 15 
 
Vista Dinámica de la Realización de análisis del CU 14 Generar OT - Flujo:  Creación de una Orden de Traslado por un Jefe 
Mecánico y hay suficientes contenedores disponibles con notificación por email y por SMS.

## Página 9

Diseño de Sistemas de Información 
Caso de Estudio: FIA F1 
Ejercicio práctico tipo tercer parcial 
 
 
 
Ciclo lectivo 2026 Turnos: Todos Hoja: Página 9 de 15
