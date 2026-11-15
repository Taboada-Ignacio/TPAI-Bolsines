# EPC Estrella de la Muerte - Patrones de Diseño.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presentado describe un 
ejercicio práctico complementario de diseño de sistemas de información
 contextualizado en el universo de Star Wars, específicamente en la estación espacial de la 
Estrella de la Muerte
. Su propósito principal es guiar a los estudiantes en el 
rediseño orientado a objetos
 para solucionar requerimientos complejos, como la gestión de 
órdenes de reubicación
 y la generación de 
informes de cumplimiento
. Para lograrlo, la guía propone el uso de 
patrones de diseño
 reconocidos, destacando la implementación del 
patrón Strategy
 para manejar de forma flexible diversos métodos de cálculo estadístico y el 
patrón Builder
 para la construcción de reportes visuales en múltiples formatos. Asimismo, se detallan las especificaciones técnicas necesarias mediante 
diagramas de clases y de secuencia
, evaluando tanto la 
vista estática como la dinámica
 del software requerido por el Imperio Galáctico.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QcE3fH99kmflsrqm34pdpu_xuoko5-PjVZjA4FuwJjSq-15HyV7URr5_B-GYa6x31_yOiZBva-su2jr2oIAHyXS4qR-rLOcrlrHJBeTx9wdCLJh6SvII0Ydr-HRnqfEeSYUa7wg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv216KOw2OQUEEIHHL0kr00fG-PLfXUep-JGoX7dIYgFmadrYQCInXQ7zAtPGOua5Cs77NA4TxGcJlNtt66n1PEYHSTA6XMAVqeWYQCmYhV6pe2CozggvjrDJeE9mKhDp5ErQhjFPg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Apellido y Nombre: Legajo:
Nro. de orden en la planilla de asistencia Curso: Se pide al Estudiante que lea y analice atentamente la situación planteada y en base a ello: 1. Realizar el rediseño necesario para modelar una solución que resuelva en forma flexible
el cálculo de ejecución de las órdenes de Reubicación de acuerdo con el método seleccionado por el actor. (60 puntos)
2. Rediseñe el proceso de creación del Informe de Ejecución de Ordenes de Reubicación en sus diferentes formas de visualización (Impreso, PDF, Excel, Pantallas Holográficas); utilizando el patrón Builder. (40 puntos)
Para los puntos 1 y 2, se espera que el estudiante plantee:
A. La vista de diseño de la estructura utilizando un diagrama de clases que incluya la signatura completa de los métodos utilizados y la especificación completa de los atributos, que muestre el rediseño resultante de la aplicación del patrón que resuelve el problema de diseño.
B. La vista dinámica utilizando un diagrama de secuencia, que modele el comportamiento resultante al rediseño aplicando el patrón.
C. La especificación del comportamiento de los métodos utilizados en la dinámica con una descripción textual o pseudocódigo.
Dominio: La Estrella de la Muerte
Glosario:
Droides: Robots que poseen inteligencia artificial. El imperio utiliza estos robots para todas las operaciones que pueden ser peligrosas para otros soldados. También para dar soporte en operaciones militares complicadas.
DS-MK: Nombre clave que utiliza el imperio de manera oficial para referirse al proyecto de construcción de la estación espacial de gran tamaño conocida por los soldados del imperio como “Estrella de la Muerte”
Unidad Militar: Es un elemento organizacional dentro de las fuerzas armadas bajo el mando de un líder o jefe. La unidad militar básica es un escuadrón que está compuesto por entre 7 y 15 soldados.
Tipo de Unidad Militar: El tipo de una Unidad Militar se refiere al lugar que la Unidad Militar ocupa en la jerarquía. Estos tipos pueden ser: escuadrón, pelotón, compañía, batallón, brigada, división o cuerpo armado.
Son tiempos de guerra civil en la galaxia. Un grupo armado clandestino llamado “Alianza Rebelde” ha atacado
diversas bases de operaciones del Imperio Galáctico. El Emperador Palpatine ha ordenado a su comandante en jefe de
las fuerzas armadas, Darth Vader, que se encargue de los rebeldes para traer paz y estabilidad a la galaxia. Darth Vader
ha comisionado una estación espacial de gran tamaño para transportar tropas más rápida y cómodamente a lo largo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21przNTIGxf8jR-72kzqqKa_4CXc6eq_3E8p_crEWburiwv15w9AusxLJQQbWl7ki-uMXFI-PSt00RDiazsZ6K722lJhBhOKdhfjg1EvSwB3OHQd_48Rklxm9hnKoyNii2mJmqKQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vxxaLJRSseoeWQu4oaZB2IGVBD8-Jg7m2jd5N_V4xQd-c6F6ZQLKh5A87FNVA7wtN-KDXxGV1Obq7E0xYXDqQjLK_TEJ-i7TJ2RBugcIZzrUsiv-D7J_SW4OYCx_7AREN094lWA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ss4NqWpMx2q75lSwCPIOFTRZXf_te57_3EeOoP7GnVK8Lh-tk-cdT42_5SPeDDaYj6gaE8c3W5RDZJDr4Xnj7lKMUHd82s2123f80FU95KIilMh3xl5ovFnhJrZF93MhkojCszw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 2 de 10
de la galaxia, esta estación espacial también estará armada para permitir tomar acciones defensivas y ofensivas contra
la Alianza Rebelde. Esta estación espacial es conocida con el nombre clave DS-MK, pero los soldados del imperio la
llaman “Death Star” o “Estrella de la Muerte”. La Estrella de la Muerte puede transportar entre 1 y 1.5 millones de
personas (Entre las cuales se encuentran soldados de diversos rangos, médicos, cocineros, etc.). Se necesita un
software especializado que controle todos los aspectos de la estación, desde los accesos a las distintas áreas hasta las
raciones y suministros que se encuentran en la misma.
La armada imperial tiene su propia organización militar avanzada ya que deben patrullar y proteger toda la
galaxia. Dentro de la Estrella de la Muerte se maneja una jerarquía similar a la que suele manejar el resto de la armada
imperial. La unidad más pequeña es un Escuadrón compuesto por entre 7 y 15 soldados (llamados Stormtroopers) y
liderado por un teniente. Estas unidades militares son de un tipo dado (Infantería, Artillería, Unidades Especiales,
Paracaidistas, Pilotos, etc.) y todos los miembros del escuadrón tienen el mismo entrenamiento y habilidades de
combate. Además de esto, cada Escuadrón cuenta con al menos un soldado con entrenamiento como médico de
campo, (cumple su función de médico sólo durante una misión) y un soldado con entrenamiento de cocina de campo,
(cumple su función de cocinero sólo durante una misión). A su vez un grupo de 4 o 5 escuadrones componen un Pelotón
que es liderado por un comandante. Todos los escuadrones de un pelotón son del mismo tipo. Un grupo de 2 a 4
pelotones componen una Compañía que es liderada por un capitán. Los pelotones dentro de una compañía pueden
tener distintos tipos de unidad para lograr misiones más completas. De esta forma, si se debe realizar un ataque a gran
escala se puede utilizar diversas habilidades de combate. Además se puede planificar misiones pequeñas que requieran
de distintos escuadrones para complementar habilidades. Un grupo de 2 a 5 compañías forman un Batallón que es
liderado por un comodoro. Un grupo de 2 a 6 batallones forman una brigada que es liderada por un Vice Almirante.
Un grupo de 4 a 5 brigadas forman una división que es liderada por un Almirante. Finalmente un grupo de 2 a 7
divisiones forman un cuerpo armado, que es liderado por un Gran Almirante. Debería haber al menos 2 cuerpos
armados completos en la Estrella de la Muerte en todo momento. Toda esta estructura se encuentra al mando de
Darth Vader, que ocupa el cargo de Comandante en Jefe de las Fuerzas Imperiales. Darth Vader responde solo ante la
autoridad del Comandante Supremo, Darth Sidious.
Por esta razón el Imperio permite que se creen nuevas unidades militares de cualquier tipo correspondientes
a una unidad de orden superior ya existente. También está permitido mover una unidad militar para que pertenezca a
cualquier otra. Esta flexibilidad es la que permite que el Imperio responda de forma rápida y eficiente a las diversas
necesidades de los ciudadanos del imperio.
Para mover unidades militares de una base militar a otra se utiliza una Orden de Reubicación. El oficial debe
indicar que unidad militar desea reubicar, que oficial se hará cargo ahora de la unidad, el lugar o base al cual se
reubicará a la unidad militar, el motivo por el que se reubica a esa unidad y una fecha óptima para que las tropas
ocupen su nuevo puesto. Para que una Orden de Reubicación sea ejecutada, debe ser aprobada por al menos un oficial
de rango superior al que generó la orden. Una vez que la Orden ha sido aprobada, la misma debe ser comunicada a las
tropas afectadas para que puedan prepararse para el movimiento, esta comunicación debe incluir el motivo de la
Reubicación, la base a donde han sido asignados y la fecha de salida de la base actual. Una vez comunicada la orden y
llegada la fecha de salida, las tropas salen de su base actual camino a la nueva base. Cuando las tropas llegan a la nueva
base militar y han sido acomodadas en sus habitaciones se considera que la Orden de Reubicación fue ejecutada. Darth
Vader desea obtener estadísticas respecto al cumplimiento de las órdenes, es por eso por lo que es de extrema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31PDKtqg_ktCoj4kDRioghtmEEq4TQihRYOVoS4_dWNM3ytZCX8gRj6xbZjYlsvFT9KNzhwFBszLXCHCD3A2v-34mg81iErIv3neu810lefIVpWtg0F6e4HSHfCRXess5rFIv2jA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AtwA16aL27yxAZc3Rn-lQdv24VgK9QyQyf1tNTEOOHj454jRRdGWXFLAe9cfspF2xz2hJc3Il79WrJnkP3YAYFAdfpktZ7ICwNxo_0hDRhyLrSCIyMVx8p4PNxueODx40JyiN=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RGqo1aqMFI96UaRh0LIxr33xEggiuE2sH7ksEmhlHXr_FungOLkKyWxd7c92fF3UE1Ibo8zFyfX2pNfOzDh1Sg-eZXF8E1waLJHD_80TFLVLKL5mOceWJGQFs3BsxMKdE05thVQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 3 de 10
importancia diferencias las ordenes que se Ejecutaron satisfactoriamente (Es decir, las que cumplieron con todas las
fechas óptimas) y las que se Ejecutaron insatisfactoriamente (Es decir, las ordenes en las que las tropas llegaron luego
de la fecha optima de llegada). Para simplificar la mejora del proceso de ejecución de órdenes, Darth Vader ha pedido
que se registren todas las fechas de actividad de una Orden de Reubicación.
Darth Vader quiere que el software de la Estrella de la Muerte pueda manejar el hospedaje de todo aquel que
habite la estación espacial, la gestión de expediciones y misiones militares que salgan de la misma y la gestión de los
suministros necesarios para mantener a todos los habitantes de la Estrella de la Muerte.
Definición del Producto de Software a construir:
Objetivo del Producto de Software:
Gestionar el hospedaje del personal militar de la Estrella de la Muerte, las expediciones militares y
los suministros necesarios para su mantención, generando información relacionada a las expediciones y el
consumo de suministros militares.
Alcances del producto de software:
Administración de unidades militares y personal auxiliar (Médicos, cocineros, etc.)
Administración de droides
Reglas de Negocio para el Producto de Software Gestión de personal militar de La Estrella de La
Muerte Nombre de la RN Descripción de la RN
Creación de la Orden de Reubicación
Un oficial con rango de comandante o superior puede crear una Orden de Reubicación para una unidad militar inferior a su rango en la jerarquía. Debe indicar las unidades militares a reubicar, el oficial que estará a cargo de las unidades a mover, la nueva base de la unidad militar, el motivo de la Reubicación y la fecha óptima de ejecución de la orden.
Aprobación de una orden de Reubicación
Para que una orden sea ejecutada, debe ser aprobada por al menos un oficial de rango superior al que generó la orden. La orden puede ser aceptada o rechazada. Si la orden se rechaza se debe comunicar la situación al oficial que la creó.
Excepción en la creación de órdenes de reubicación
Las órdenes de reubicación creadas por Darth Vader o un Gran Almirante no necesitan ser aprobadas. Están aprobadas desde su creación.
Comunicación de una orden de reubicación
Una vez que la Orden ha sido aprobada, la misma debe ser comunicada a las tropas afectadas para que puedan prepararse para el movimiento, esta comunicación debe incluir el motivo de la Reubicación, la base a donde han sido asignados y la fecha de salida de la base actual.
Vencimiento de órdenes de reubicación
Si la aprobación y comunicación no se realiza antes de la fecha de vencimiento de la orden de reubicación, entonces la misma se considera como vencida y no puede ejecutarse. En ese caso debe comunicarse al oficial que la creó mediante un correo electrónico.
Salida de la base actual Una vez comunicada la orden de reubicación y llegada la fecha de salida, las tropas salen de su base militar actual camino a la nueva base militar. En este punto se considera que la orden reubicación está En Proceso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32ybKgMamNPTng5ZikYjxkVtQjPRiUfmytqy7bnmkG4lydSZ1HnF5qeZKKGxpgfL65kxD41krxTvPt-SEPpPsP26ezyn6f-1VpZWtaKstPXUar5oCvy7lih9HNtiOoNlepUERb=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hIjWr2aJdqogRzG8vS61narpYVJmzyg_WQS47DQiONUmKA3yfjG7eg5sNmXzYRIezAOVeShtvUd6nwI42A2DKszaYEf35pHn4vcb2Zt064N2xJyPlZ8Apa0D6bkSJiAHlTU0J2Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ny5SlgYRLUFqkvPvv_EwYhGZsbMeEUPovKge8X5ZK_j9lnXrmKrViccRebX2Hsvh6SYbHoWotLyP13QmFtthWUfOpy1jKb5cZ8TQCvaiPL5_ZnnmVHF0UBERYefkfKHneWciAYQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 4 de 10
Nombre de la RN Descripción de la RN
Finalización de una Orden de Reubicación
Cuando las tropas llegan a la nueva base militar y han sido acomodadas en sus habitaciones se considera que la orden de reubicación fue ejecutada. Una orden de reubicación puede ser ejecutada satisfactoriamente si se cumplió con la fecha optima de ejecución o ejecutada insatisfactoriamente si no se cumplió con la fecha óptima de ejecución.
Cancelación de una Orden de Reubicación.
El oficial que creó la Orden de Reubicación puede cancelarla hasta antes de que haya sido aprobada.
Rangos Militares de los soldados
Darth Vader ha especificado que es muy importante mantener un registro de los cambios de rango de cada soldado ya que algunas de las misiones planeadas sólo pueden ser asignadas a soldados y/o líderes con mayor experiencia.
Nombre del Use Case: Generar Informe de cumplimiento de Orden de Reubicación Número: 38
Categoría: Esencial Soporte Prioridad: Esencial Útil Deseable
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Oficial Actor Secundario:
Tipo de Use Case: Concreto Abstracto
Objetivo: Generar un informe de cumplimiento de órdenes de reubicación según el método de cálculo seleccionado
y la forma de visualización elegida.
Flujo Descripto: Generar un informe de cumplimiento de OR con método Ejecución satisfactoria en PDF
1. Oficial: Selecciona la opción “Generar informe de cumplimento de OR”
2. Sistema: Solicita que se seleccione el periodo del informe.
3. Oficial: Selecciona fecha desde y fecha hasta para el informe.
4. Sistema: Valida que el periodo seleccionado sea correcto. (Fecha desde menor que fecha hasta y ambas menores a la fecha del día)
5. Sistema: Busca todas las bases militares registradas y solicita que se seleccione una o más bases militares de origen de las órdenes de reubicación.
6. Oficial: Selecciona todas las bases militares.
7. Sistema: Solicita que se seleccione el método de cálculo de cumplimento de las órdenes de reubicación.
8. Oficial: Selecciona el método de porcentaje de ejecución satisfactorio por base militar de origen. (Ver Observación 1)
9. Sistema: Solicita confirmación para generar el informe.
10. Oficial: Confirma la generación del informe.
11. Sistema: Busca para cada base militar seleccionada todas las Órdenes de Reubicación que se hayan creado dentro del periodo seleccionado.
12. Sistema: Busca para cada base militar seleccionada todas las Órdenes de Reubicación que se hayan creado dentro del periodo seleccionado y cuyo estado actual sea Ejecutada Satisfactoriamente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv373kVIkI2S_Uh5R6SsNmgSOo2Vzov8GVSBqKDQIkcjdbdU7uxclV4B05At7I_0T-1Mc5_PuEGK66TIPq3vexSImD4Ft_TZtt0JX2v2hoPqTTMZEogUVJ8ykwbeeflfIpn2CwY0Dw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IAeE2U1f7umjuSUqQiWgQuM2q0sIU2zRdiS5SchK6OwCMA7RerdNm5Wns1RpkDHrssoPNgP71y8PAQ6EzyfV5IbTHbWHm3MsN6BiwCMSCDyLwh0Q-OD5HVgMBkHlGexAd_B9R7g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DD7PN3yHLm5uiphuVxoR7vaiJSyoiTWE_wC-evSNqgPpASC_ynJ-enOqERDgUVlJ3CmNOBs7oFkDGagAJKV0HFpIQ8MYA6oH9cJ7kLbcK-ZPQAlpSbOduKNnbJBqvZ0LJrqU0CA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 5 de 10
13. Sistema: Calcula por cada base seleccionada el porcentaje de ejecución satisfactoria de órdenes de reubicación.
14. Sistema: Solicita que se selecciona una forma de visualización del reporte. (Ver Observación 2)
15. Oficial: Selecciona exportar a PDF.
16. Sistema: Genera el informe en formato PDF. (Ver Observación 3). Fin del CU.
Flujos Alternativos
A1. El oficial selecciona exportar a Excel A2. El oficial selecciona imprimir informe A3. El oficial selecciona visualizar mediante tablero holográfico.
Observación 1: Los métodos de cálculo de cumplimento de OR pueden ser:
A. Por porcentaje de ejecución satisfactoria por base militar de origen:
B. Por porcentaje de OR ejecutadas por base militar de origen:
C. Por porcentaje de OR no ejecutadas por base militar de origen:
Observación 2: El reporte puede visualizarse mediante la pantalla holográfica, puede exportarse a PDF, puede
exportarse a un archivo de Excel o puede ser impreso en papel.
Observación 3: El informe en PDF está compuesto por una carátula que contiene el logo del imperio, el lema imperial,
el nombre del informe que se está generando como título, el método de cálculo como subtítulo, el período del
informe y el apellido y nombre del usuario que lo genera. En el cuerpo del informe debe mostrarse un listado de
todas las bases seleccionadas junto con el porcentaje obtenido en el cálculo y al final de la tabla un gráfico de barras
mostrando la información de la tabla. En cada hoja debe haber un pie de página que contenga el logo del imperio, la
fecha en la que se generó el informe, el periodo del informe y el número de página con el formato “Pagina X de Y”
donde X es la página actual e Y es la cantidad total de páginas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08dF2F0U-DUZmj1aEcrgRBF4b9Wgwc2kgYCno8iuNwM5Nqtlyn3hKYGO6WEj2MO3theCdAAvvKkAFJ1KqSNA0x-0FlAEiHSdg4iUyklCKAw-4etNJxNtrR3oylcck3-xjJ6Xb4cA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2T5CbY7gETQmySJzOQsP84D_22gAQ9k93XA-aUuRBORD4PbX4WWVSTZZraRJ9MJNNG1wUV05NHSOqw0MQkA7m9kVjtsbBfy5ESskNc0dwae79b5ha_Vp2ESw45juZRSl3VYhxA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cx5qlCC8n-diGxI4cC1PyDAuhJQSPXsb2r0ISZoCbNMxtrjM3Sh9OKAebh1KEYeK_1D5eSWArgTS-SqZZHndjy_jXJG6z0ktE1e0-2vroCeeLtKiQsTVkw1kk7vH_0LFUYCl_ZQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DOYwrJv1_29vg2TDZe_n6rBCcBcYjhyKwxOxikQwYQYmlASt8aRFK27kRhD2YM04pT8zfUc-_buq7csmZxmjd9g-Abzns3jDU3cUs0PGOjv6sPCU7J8XS0dIDfSXFRlH6vjrtug=w1280-h1263-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 6 de 10
Realización de Análisis del Caso de Uso Generar Informe de Ejecución de OR - Vista de estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MMWCQmEqStVb0pYcm_z3RRHg0Czadu6jyjdHQ25t8Nl4G6himETk0yiHHEWqI9Mtm3iGein44VGpNI-JhO384Fz06rS0TroIp_tFpfzRVMkyNw81f5Myk1kocEKEE2UzkaCpUCA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e3mIVhO9BCSSOkgEt22PPA0XuhEROgbf8xTbw5K25KzOmBxnZhNIfng4cyiZW9SJFKCAvfLG2N1hPngMOolr6qlx7UlrrD5g-9Iuwvg7eMdaIW2oyRPa0xPVee6u6msOzwSuwPA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aRecJman5_e1KQ5kenfjApzU7lbX4VGVRtA1O_THeZ1nfAlSrCDeKvYxdktUxnXwSw-xon5cSjNQgo0IFJw3FFtFW4CGeuimmIPPdXPKA1Z6I98grHIevuIiN87ZuJLu4me2gWw=w1078-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 7 de 10
Realización de Análisis del Caso de Uso Generar Informe de Ejecución de OR - Vista Dinámica con Diagrama de Secuencia – Flujo generación de un
informe con método de Ejecución Satisfactoria en PDF
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ikx8lH5aowojpa6X6JspAm8HU6lDx-w5NokQcpjMHoH2AD7QbtRcL8SPuiMidMSY3nDDaoWateitLdVFEhGChLfffDTMhxCQTrT-YvA7AZi7R0lLbIg-WmrCx7mFIQYjUuRPfUA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zKlPhe_4umWQWX7XUVQRBid3j4-J5JtljLNyBdmKmomzaenN7j0F-b2FjeiS3b8pB68K7QcVaj14KVxe_LcteIwtf5hOi_ggEMIkwbHF10piMRfj3I9f2dcJ5KtN3R76ZIs8F=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JYhDRnQUPoWuXWQR4irkGoY8gQ1l06deifBNDoB944srS-71Y4_aQpu1K3AFW31QySLmcC0vt0GjIIeAv1mAArFLy9ZeWS-c1VECxjeLNEmUCKwjzQyK1G8EATjxOKsvlI2uKEQ=w1280-h526-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 8 de 10
Solución Propuesta
Patrón Strategy - Vista Estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jLoZlL_4zIOvu3lWLIAFzf15QV49MAQKLbbaUeVSgsQYh09NNSAufy1Dr6gyLE3ZSYzPRgbZa5y4_sJmJhSx3CZ6ygyIGneQeylyfroYZx9xmhhHpsCmI_l0K95v_NMsisyVjgA=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Mm_fKhVwEKEhi0gRZ1GHnZDf_RS7RZd9e-Zxc_-bWPC8dadmtDJbJezVziiAjV826CQkSGp1TaXL4yR0RolDZuefA59cwWRBw2RXvhlqV2K0mlLxVzXzTVYAzgdd3QIma50Lm0g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ck5vKeTQpSFNTwiWPqsU6I1ZEkS5EqFiA_lyTAB0rvDNKFqAd6VGW9qHNKsMSrG2F7y1ohVre2FE3TNS8YhLtyJO7_6JObIHGtKvmDkaHkpy3Jf8k51abY6Wrlx8BApjkhvbk-Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xGiY9gvr_0bcNynIP2kPM6kP9r5BSPGahtJTv017BB0p4GkK3y1dEFWm1M13xzyfW9qsiveYhYE6PS5h5yLOjSbKRWQSdRYV-TqCNu4KGqd6KgyqA3gM3BuT87OG87F7nNeHxHA=w1280-h1088-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 9 de 10
Stategy - Vista Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3P0XHGjZ_QzVO2NrCtG_-esvoeayO6_05lM2sO2QbJh7tnDzct0FqzC3bxh-odLir_R056wneFAjEYBLJESkuyQj4JsjyLuuUHmC7ekRf9O17EJq8ybrf0ADWUZZbulTU34GmrTQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RPVvOrziRtWNjQOH03upXwPWEe45EqUHuYs7jsBu8dfYWPP-dWIsv27C2l3bv_61_oxstD47PrlGWMauzAWrWQJjFAjTYBQIaQDQRZg-dEyU7fKMcPQt28GAKWqBuxjVyj2xNCw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1asg-F71Sh3aHbg7uZZ0maHwpAJQCmPAPLv6tNc41UtKbYNaL1cphx-2k31XKwq4OVD5k3T4M4IRAFovpySPugc3ttcvPVwqBiGZ8sSzRE1gQp_muj8p6wkTYCPnfsSexLtugu=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: La Estrella de la Muerte
Ejercicio práctico complementario
Ciclo lectivo 2026 Hoja: 10 de 10
Explicación GestorInformeCumplimientoOR
tomarMetodoCalculo(): método de enganche que se encarga de crear la estrategia concreta. Con este método nos
damos cuenta de que necesitamos instanciar la estrategia EstrategiaEjecucionSatisfactoria
IEstrategiaEjecucionOR
calcularEjecucionesOR(): método polimórfico que se usa para delegar el comportamiento de búsqueda de información
necesaria para el informe y el cálculo del informe. Este método es definido en cada estrategia concreta ya que tiene
comportamiento variable. Recibe los siguientes parámetros:
BaseMilitar BaseMilitar[]: vector de las bases seleccionadas. Filtro del reporte
fechaDesde DateTime: fecha de inicio del periodo en el que deben ser creadas las OR. Filtro del reporte.
fechaHasta DateTime: fecha de fin del periodo en el que deben ser creadas las OR. Filtro del reporte.
ordenesReubicacion OrdenReubicacion[]: vector de las órdenes de Reubicación que deben filtrarse.
Estrategia Concreta: EstrategiaEjecucionSatisfactoria
calcularEjecucionesOR(): implementa el método polimórfico. Itera el vector de bases militares que le llega por
parámetro y busca todas las OR de esa base militar que fueron creadas dentro del período que le llega por parámetro
con el método contarORDeBaseMilitar(). Luego recorre las OR buscando las OR de la base Militar en cuestión, que
fueron creadas en el periodo ingresado por parámetro y cuyo estado actual es EjecutadaSatisfactoriamente con el
método contarORSatisfactoriasDeBaseMilitar(), que recibe como parámetros las OR filtradas anteriormente para las
BM y el periodo selecciondo.
calcularEjecucionesPorBaseMilitar(): calcula el porcentaje de ordenes ejecutadas satisfactoriamente por base.
Retorna una matriz que tiene la base militar en la posición 0 y el porcentaje de ejecuciones satisfactorias en la posición
1.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dVEvzQh84v__SPSUYtcCXMO6Ze-ofMwoad7gXllH8EfuJcJw4aBQGAGKLVzkMQBhuURA9H3oTgKW8Gvoih2_PjnVUN59v7ujwfIH9v7aO1IQChoKKsmNxmlijkbtQir5OmXtMTQ=w839-h1187-v0?authuser=0)
