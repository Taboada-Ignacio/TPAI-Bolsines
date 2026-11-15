# PPA_Festival de Folklore_Completo V1-37.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla la 
especificación integral de un proyecto académico
 centrado en el diseño y la ingeniería de un 
sistema de información para la gestión de un festival de folklore
. Su propósito principal es guiar a los estudiantes en la aplicación práctica de conceptos de 
análisis y diseño orientado a objetos
, utilizando herramientas de modelado como 
diagramas UML
 y patrones arquitectónicos. A lo largo del texto se establecen los 
requerimientos funcionales y no funcionales
, abarcando desde la programación de la grilla artística y la 
venta simultánea de entradas con manejo de concurrencia
, hasta la estructuración de la base de datos relacional y las 
vistas de despliegue y arquitectura en capas
. En definitiva, la fuente funciona como una 
guía técnica exhaustiva
 que conecta los requisitos del negocio municipal con soluciones de software robustas, escalables y seguras.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1H1mpJw4gjzrq66Rn_zJtwhpnHk4PRk6ZGnmYesataIrMvEA5Fy1mHGixKJiV_TMQUekP98XrkDOiCwFj3tGLst8_oswrg2dPYR_9-mO6RUtjGfiuuuQdQxEWXbb4fYk9PEfV0NA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02BCFK5h8xPf7zE4zlXltkk54B9k-f2qnnCJATQPQoLx9yrp477lsvH2JL24HSvlHjTUsYQ2hS8zxIjy-kqSAhYaYTsRXQBfjtPobZLYP4rLo_mrx9Ys_n1vM_ffghtfaUWOEcsQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37

## Proyecto Prá ctico de Aplicácio n

Nombre del Proyecto Práctico de Aplicación: Festival del Folklore
Objetivo del Proyecto Práctico de Aplicación (PPA): El objetivo del proyecto es desarrollar el modelado de un software de administración de ventas para Festivales Musicales, a partir de una descripción del negocio. Sólo se muestran algunas vistas de los procesos de requerimientos, análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto.
Objetivos de la Asignatura con respecto al PPA:
Analizar los sistemas de información mediante el paradigma de Orientación a Objetos.
Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura robusta
del sistema.
Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución (Análisis
y Diseño) a partir del Modelo de Requerimientos
Identificar requerimientos no funcionales y su impacto en la arquitectura.
Modelar la arquitectura del producto utilizando patrones arquitectónicos.
Resolver situaciones problemáticas del diseño utilizando patrones de diseño.
Diseñar artefactos de prueba que permitan validar los requerimientos definidos.
Contenidos de la Asignatura que se abordarán en el PPA:
Modelado de Dominio.
Modelado de la funcionalidad
Diseño de Interfaces de Usuario
Modelado del Comportamiento en el Análisis
Modelado de la Estructura en el Análisis
Mapeo de estructuras de clases a bases de datos relacionales.
Diseño Arquitectónico – Patrones Arquitectónicos
Modelo de Despliegue
Modelo de Prueba
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv040XvHzpjs5Sq35Y9Rj-wQPgG68jn5Q1i3jkQ7qtWWtj6PKyc3Jw3liJYZLhJrh9jDnlWgEkHt9y6leOQGeIyo-HamU1RlZHERBdBJionevEvpxDenwrgp4kIVfbKMuyF-YSMG=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yajgk7uzTUalAhQMDOqkqXcuehzFw5QehWiWoro-ZiOp--wMRbisJhJVap908WLVBitk4tEuBDhkRRKKgm2NPN8-UJ4Z4wDdsz25PlJ6dPib6Op2VMBfG2mR1AvOqGIbRJS9x9A=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Consigna asociada al Proyecto Práctico de Aplicación:
1- Establezca los requerimientos del proyecto: Requerimientos funcionales, reglas de negocio y requerimientos no funcionales.
2- Construya Vista esencial de casos de uso, el listado de casos de uso del producto. Especifique los casos de uso “Registrar venta de Entradas”, “Generar diagramación” y “Registrar Festival”. Construya los prototipos del primer caso de uso.
3- Construya el modelo de dominio utilizando un diagrama de clases, especificando clases con sus atributos, métodos y relaciones con su multiplicidad y navegabilidad.
4- Construya las realizaciones de análisis para los casos de uso “Registrar venta de Entradas”, “Generar diagramación” y “Registrar Festival” utilizando diagramas de comunicación y de secuencia para la parte dinámica, para los escenarios de curso normal y la vista de estructura con diagrama de clases.
5- Construya la máquina de estado para la clase “ButacaParaDiaFestival” 6- Identificar los requerimientos no funcionales y especificar la información solicitada, en función de la siguiente
tabla:
Requerimientos No Funcionales
Nº Nombre Descripción Categoría Subcategoría Significativo para la Arquitectura
Prioridad Explicación
7- Identificar patrones arquitectónicos relevantes y construir una representación gráfica de los mismos. 8- Describir las vistas arquitectónicas del proyecto: vista de la funcionalidad, de diseño y de despliegue. 9- Construir el diagrama de despliegue correspondiente. 10- Realizar la vista de la estructura y la vista de la dinámica de los patrones de diseño que usted crea aplicables
para resolver las siguientes problemáticas: a. Resolver la forma de asegurar que exista una única cola de impresión por centro de venta, para enviar
las impresiones de las entradas vendidas. b. Proponer una forma de resolver el comportamiento de la butaca, en función de su disponibilidad para
ser vendida en una noche de festival en particular, teniendo en cuenta que la butaca puede estar vendida, habilitada para la venta, bloqueada momentáneamente para ser vendida, etc. Resuelva la dinámica para el bloqueo de una butaca al momento de registrar una venta de entrada.
11- Realice el Mapeo de estructuras de clases a bases de datos relacionales y construya el diagrama de Entidad Relación.
12- Construir los artefactos de prueba para el caso de uso nro. 1 Registrar venta de Entrada: grafo de caminos, caminos posibles y 1 caso de prueba.
Criterios de Evaluación del PPA (Si aplica):No Aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EmwhL4qoAjV9NfsBEUOklrWt8q-DqoK7CMLUUXgxx5s9B1w-s4P_B7dI8Wuxi9EnRWv6fnn5-A_r1xj5ZV49wVkOonV5Zo5VJjlx6a_xT74xIu88-3V-t5mwxIbgbWWdqNLQy_A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KtGRrHW_XRGeZgJUa2ji6UAy7xAfKG8VWmWQa6SMWtSE37nOfpxmO2tZ0rLg81yDZnO8l0DZX72Mt00qzDo3ZyhwzfVa3RG2kVVfxVmtc4EyZUvWdmEvihl0HkZ1dCo0YD1p-Vw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Anualmente la Dirección de Cultura de la Municipalidad de una localidad de la provincia, organiza uno o más festivales de folklore. Por lo general los festivales tienen una duración de cinco noches, aunque esto puede variar de año en año. En cada una de las noches actúan distintos grupos folklóricos con reconocimiento regional, provincial y nacional. Cada festival se prepara con mucha anticipación y se realiza la diagramación para determinar qué grupos actúan en cada noche y el orden en el que los mismos realizarán sus presentaciones, teniendo en cuenta que los horarios de presentación de los grupos no pueden superponerse y que no pueden quedar espacios sin ninguna presentación entre medio de dos grupos. Considerar que no puede incluirse la participación de un grupo más de una vez para un mismo festival, en una misma noche. En cada noche se define la hora de inicio de la misma, pero no se determina la hora de fin, ya que esta puede variar según si las presentaciones se extienden más de lo previsto. Los Festivales se realiza en un único Predio, que está dividido en sectores (A, B, C, etc.), que se identifican con colores diferentes, y cada sector se compone de filas (1, 2, 3, etc.), cada fila, a su vez, está conformada por butacas, las cuales están numeradas. La venta de entradas se realiza en cinco centros de venta (Predio donde se realizará el festival, tres centros comerciales de la ciudad capital y un centro comercial de la localidad donde se realiza el festival), cada uno de estos puede poseer hasta 3 puntos de venta para el expendio de las entradas que se encuentran en funcionamiento simultáneamente. No se debe permitir que se venda una misma entrada (una misma butaca de un festival en una misma fecha) en dos puntos de venta diferentes. Todas las entradas de un centro de venta se envían a imprimir en una misma impresora fiscal. Existen distintos tipos de entradas para el público (mayores, menores, jubilados, etc.). El precio de las entradas depende del tipo de entrada y del sector donde se encuentre la butaca, además puede variar de una noche a otra, dependiendo de los grupos musicales que actúan. Por ejemplo, una entrada para mayores en el sector A, que está cerca del escenario, será más costosa que una para mayores en el sector E que está más alejado del mismo y a su vez puede variar de noche en noche el precio de la entrada en la misma ubicación. Las butacas se venden para una noche en particular así es que una misma butaca puede estar disponible, por ejemplo, para la noche 1 y 3, y ocupada para la noche 2, 4 y 5. También se habilita la venta anticipada de las entradas a un precio menor, un porcentaje de descuento que la Dirección de Cultura determina, al igual que la fecha de vencimiento de ese beneficio, por ejemplo, venta anticipada con un descuento del 10 % hasta un mes antes del día del festival para el que se sea comprar la entrada. La forma de venta de entradas es únicamente de contado en efectivo. Si un cliente solicita la anulación de la entrada sólo se le reintegra el 50% del monto abonado. Esto se puede hacer hasta 10 días antes del inicio del espectáculo (día del festival), para el que se compró la entrada. La entrada tiene un código de barras para evitar falsificaciones. Además, hay que tener en cuenta que la misma entrada cumple la función de factura, por lo que debe tener los datos requeridos por la ley de facturación, y debe asegurarse de que el número de factura sea único. La Dirección de Cultura de la Municipalidad ha solicitado a su Área de Sistemas el desarrollo de un sistema de información que le ayude con la administración de los festivales que organiza, la diagramación de la programación y la venta de entradas y brinde información que ayude a la organización de próximos festivales. La Dirección de Cultura de la Municipalidad tiene licencias para realizar la aplicación con una base de datos Oracle. Debido a que en las horas pico se suele generar cola en los puntos de venta, es necesario que el sistema genere una entrada en no más de 6 segundos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31t-735jKFq_q2idljGrxlQTOctVuIkB49hENYU3vUOxpMdtoojK2_lSABHxBtiJPmjzEdnCeVCsW1x0g84U45P5SwFzmguc9yrd1VW5mLi7RF0nryjf_hS5e_kw3wlSAYPb4ypQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1o7durifS5Wha4eC4W-IXLT3MUqQecNTgsREOImp0O5sIGA9OTsPGgIoEpCGVS4weLPo2Yw2A9LcFMewUQqKsW6g9pbRRhCN-C93tKtnKg-cTv2PmmQAnImZUwJqarQDp2Gb_k=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Requerimientos del producto Objetivo: Dar soporte a la diagramación de festivales, a la venta y cobro de entradas para los mismos, brindando información vinculada a la gestión. Requerimientos Funcionales (Alcances):
Administrar festivales
Administrar grupos musicales
Administrar puntos de venta
Administrar centros de venta
Gestionar la diagramación de la programación de los festivales
Administrar tipos de entrada
Administrar precios de entradas para el festival
Administrar ubicaciones
Gestionar venta de entradas
Brindar información relacionada a la venta de entradas. No contempla:
Control de entradas al ingreso de cada noche del festival.
Contratación y Pago a artistas y/o proveedores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XtFv87zyw6kRGcZx9VnA3t3HrG_A16vdZn0GGtltsJ5I6BdtXVAMCXZmf-rDJCdqoNW5xAn5ohmJMw4oXOeqEHOfSt3RRcMLxRa4FNj9dLBrv0-dklyHL3r0nbpKZS8JA_UgwSA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2a2dN0H3cbWK_SpzZGD9a2aB5HyJoeh5IQrfCgz20nKNnNvKICbpap1ROOq6rjGQ_G8AQQ7KQmUYpVR6jh8tgBnrjWm6v6Vzpb9VIqLmVpuT7HndR6e2fShLdT7-n_KHv2S8PW=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Reglas de Negocio
Reglas de Negocio
Nº Nombre Regla de Negocio – Descripción
1 Formas de Pago La única forma de pago aceptada es de contado efectivo.
2 Anulación de Entradas
Se deberá definir el porcentaje de devolución al realizarse una anulación de una entrada cuando el Cliente lo requiera y la cantidad de días antes del inicio Día del Festival para el que corresponde la entrada en el cual el Cliente estará habilitado para anular la misma.
3 Venta Anticipada Se debe poder definir el porcentaje de descuento y fecha límite de venta anticipada de entradas.
4 Precio de Entrada El precio de la entrada depende del tipo de entrada, el sector y el día, y es determinado para cada festival.
5 Estados de la Butaca
Debe poder determinarse la situación de una butaca para cada noche del festival, distinguiendo si la misma está vendida o disponible.
6 Diagramación
Se debe determinar el orden en que se presentarán los grupos musicales en cada noche, teniendo en cuenta que no se pueden superponer los horarios de las presentaciones y que no pueden quedar espacios sin presentación entre dos grupos. Un grupo musical no puede presentarse más de una vez en la misma noche del festival. Para cada noche además se debe definir la hora de inicio pero no se define una hora de fin de la noche.
7 Festival Vigente Puede haber más de un festival vigente y habilitado para la venta de entradas al mismo tiempo
8 Predio para el festival
Cada festival se realizará en un único predio.
9 Estructura del predio
La estructura del predio donde se realiza el festival puede tener una configuración de filas y butacas variable, que se debe poder modificar para cada festival. Una vez que el festival está programado y se inicia la venta de entradas, la estructura del predio no se puede modificar para ese festival.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WJR0leJeF2sYR1Hpuibek6FChPJWVwFFnK42tx-Q432eLNsf_EBseyO_Jzct8lsi0cLwzF7HSod0fApOO6v5dnJbjSXtTCqgs_tkgZiM3d3TFC7yWdIAdhq1Z373QQtuYwMoYvg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2elHFE7YRW7bHGkj_zkUtyToxRqJdeK0pn6xFZzFxV34I8QKKhZfJQCfbOAyHmdQi7B29kgDfoE9yBOPwMt0YkzR2sN25_ptNAav_FvH8q3oewgeULDbM1DgclRjXhieBU7t6VJQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DWVVyYFOd_Opl8afYziRmSiqm60vrADcmcckddo-sA-DNJT1qRZbR28-kKkp50dTEQh1waGdwJb_6-U8JcXH10RbswgYdqOWs_FSzraSRfRVz0sWAodmgKVp5epm98WfL1cFC=w1280-h965-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Especificación de los Casos de Uso esenciales Vista Esencial de Casos de Uso del Sistema de Información
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TOtArtO8YKMZQJb8ffOfsGildTyWJpgswjr8CqEoGuGALIyeo4GkTF1Cf1EIGrPgA0Ggt9wuCeVy3uWLrIZ0yNyK8iVQsqn-MJuEdLGLVnGawMAtYyQ7wj-lmuJuMx-Q_c737CA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_848Xwa0rHqHhGzELiON8l9fFGB3A21sthSMNOOE5gs-ZMifbPOplX21byPhQqcmhNk9A5Yx9rNXKm8WRvNI9SuO-wH3Xm_doIYrQErZ46-c6UQYlvS-DID3GulFe9fP0WgcF3g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Listado de Casos de Uso
Nro. de Caso de Uso Nombre del Caso de Uso
1 Registrar venta de entradas
2 Registrar grupo musical
3 Generar diagramación
4 Generar reporte de venta de entradas
5 Registrar festival
6 Generar estadística de asistencia por día de Festival
7 Registrar Precios de Entradas
8 Registrar Ubicaciones del Predio
9 Habilitar Butacas para Festival
10 Eliminar Grupo Musical
11 Modificar Grupo Musical
12 Consultar Grupo Musical
13 Eliminar Festival
14 Modificar Festival
15 Consultar Festival
16 Eliminar Ubicaciones del Predio
17 Modificar Ubicaciones del Predio
18 Consultar Ubicaciones del Predio
19 Eliminar Precios de Entradas
20 Modificar Precios de Entradas
21 Consultar Precios de Entradas
22 Eliminar Punto de Venta
23 Modificar Punto de Venta
24 Consultar Punto de Venta
25 Eliminar Diagramación
26 Modificar Diagramación
27 Consultar Diagramación
28 Eliminar Tipos de Entrada
29 Modificar Tipos de Entrada
30 Consultar Tipos de Entrada
31 Registrar Tipo de Entrada
32 Registrar Anulación de Venta de Entrada
33 Registrar Usuario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BVGoVS9vTooj4ObERze9ewgt2b0J-r3nMjvSTTicblqLUrMA_TVg7J_E56J_AzigmW4kGm-HGoWjhSLUzYOnqEs1WeXCKfGVByrMT2MAoxySkDmRQJI3qSew1CMP8YdLkZqoyjQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SCLrNbWP3kSsA2I_giIbl8w34R7hhYHeNj7fIVS16LY_S_aIxTVWR9UetkwPbWd0DBIZg9IxfYY3qaXOTiyszk1Tq7x59meZpzrdYZFK08WGn_seWycO61wpz_qT8Ir41-bqxOA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Nro. de Caso de Uso Nombre del Caso de Uso
34 Consultar Usuario
35 Modificar Usuario
36 Eliminar Usuario
37 Iniciar Sesión
38 Cerrar Sesión
39 Cambiar palabra clave
40 Registrar permisos para usuario
41 Modificar permisos para usuario
42 Registrar Grupo de Usuario
43 Eliminar Grupo de Usuario
44 Registrar Habilitación de venta
45 Consultar Grupo de Usuario
46 Modificar Grupo de Usuario
47 Validar Fin de Día de Festival
48 Validar Fin de Período de Anulación de Venta
49 Registrar Punto de Venta
50 Registrar Centro de Venta
51 Consultar Centro de Venta
52 Modificar Centro de Venta
53 Eliminar Centro de Venta
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hldI0zBPVKon6F-mKGs85KthO-oATfdM2J5GkE2oL8cEcasvspQhe0rRE5T-TG63478HdVNWZb9-pd6jfDYDEhOX6E8VYxS-VuZQvTaN1SK5uz7Rn1Hh7lcHPch9baEQ_zuL2=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ov54gnINHJVi0ID6jn1INQJzWAvkJu9lIyv3JDEBVANsqEJY1jpsJjdnbangW_-QsnrWQavy_bldFmYTb4LH1jLi5M1EwohZ1NRWGy4JoP_mqDeTQ8xeP3FOVfRDxkBgCJ-t3ig=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Descripción de Casos de Uso–
Trazo Fino o Completamente Descripto
Paquete: no aplica
Nombre del Use Case: Registrar Venta de Entradas ID: 01
Prioridad: ☒ Alta ☐ Media ☐ Baja
Categoría: ☒ Esencial ☐ Soporte Significativo para la Arquitectura: N/E
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Ventas (EV) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar la venta de una o más entradas para una o más noches de un festival e imprimirlas.
Precondiciones: no aplica
Post- Condiciones
Éxito:Entrada/s generada/s e impresa/s, disponibilidad de butacas actualizada. Fracaso 1: No hay festivales vigentes. Fracaso 2: No se corrige la selección de butacas. Fracaso 3: No se confirma la generación de las entradas. Fracaso 4: El RF decide cancelar la ejecución del caso de uso.
Fracaso 5: No se pudieron imprimir las entradas.
Curso Normal Alternativas
1. EV: selecciona opción Registrar Venta de Entradas
2. SI: muestra los festivales vigentes y solicita se seleccione uno.(Ver RN 7. Festival Vigente)
2.A. SI: NO hay festivales vigentes. Informa la situación y se cancela el caso de uso.
3. EV: selecciona festival.
4. SI: muestra las fechas asociadas al festival seleccionado y solicita que se seleccione una o más fechas.
5. EV: selecciona una o más fechas del festival. 6. SI: para cada fecha seleccionada, busca los sectores que
tienen ubicaciones disponibles y, por cada uno, muestra: letra y color del sector, números de filas y butacas disponibles. Solicita que se seleccionen las ubicaciones y el tipo de entrada para cada una. (Ver RNF 7. Colores en los sectores)
6.A.SI:NO encuentra sectores con ubicaciones disponibles para esa fecha, informa la situación y permite seleccionar otra fecha.
7. EV: selecciona las ubicaciones deseadas indicando el tipo de entrada para cada una.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dz4xIkIUXOycTO8KbBK--X0xG4XaS--EO48sv9AmPpTkbG6No4EaNrsrVcW7p_qZxKO287lAEYuay9KTmIryq73pRhbiCzMvrXeI6iXeSYseGy7F1of4kY2cdv-Mo82bVCGfM3A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IAwFf0foYmwrFSkk7WSiwwOp_P1iGxDkwGrt7Iwk-5fMCAF8PsmKAiZC0rP4__QUsbdS_FtOpLO6lN87uvTjPbt7uDoB9tTDV7nU5C-QtMV5tfWAjt73Gpz-QclWZUB4Z7Nyulw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
8. SI: bloquea temporalmente cada una de las butacas indicadas para el festival y fecha seleccionados. (Ver RNF 6 Manejo de concurrencia)
8.A. SI: No pudo bloquear las butacas seleccionadas, informa la situación y permite seleccionar otra ubicación.
9. SI: valida que la fecha actual sea mayor a la fecha de vencimiento de venta anticipada. (Ver RN 3 Venta Anticipada)
9.A. SI: valida que la fecha actual sea menor o igual a la fecha de vencimiento de venta anticipada.
9.A.1. SI: calcula el descuento correspondiente. (Ver RN 3 Venta Anticipada)
10. SI: calcula y visualiza el subtotal por tipo de entrada y el importe total de la venta.
11. SI: solicita confirmación para generar cada una de las entradas. (VER RN 4 Precio de Entrada)
12. EV: confirma la generación. 12.A.RF: no confirma la generación. 12.A.1. SI: libera el bloqueo de las butacas seleccionadas y cancela el Caso de Uso. (Ver RNF 6 Manejo de concurrencia)
13. SI: genera e imprime cada una de las entradas con la siguiente información:
nº entrada,
fecha y hora de venta,
tipo de entrada,
precio,
sector,
fila,
Nº butaca,
fecha del Evento y
n° de punto de venta.
Centro de venta
(RNF 2: Código de Barras, RNF 3: Ley de Facturación y RNF5 Generación de Entradas)
13.A.SI: no pudo imprimir la/s entrada/S 13.A.1 SI: informa la situación y solicita se verifique el problema. 13.A.2. EV: pudo resolver el problema.
13.A.2.A EV: NO pudo resolver el problema. 13.A.2.A.1 SI: libera el bloqueo de las butacas seleccionadas y cancela el caso de uso (Ver RNF 6 Manejo de concurrencia)
13.A.3. SI: imprime las entradas.
14. SI: actualiza la disponibilidad de cada una de las butacas a VENDIDA. (VER RN 5: Estados de la butaca y RNF 6 Manejo de concurrencia )
15. Fin del Caso de Uso. Observaciones:
1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33agRVsou56EWwbNdiMoPlzRo9aJk3RK8kAC4O-mTaJ5C-QLxfh979MpapfLW7jxA2HUkODywC7VMmabqnXe9zKWOwg2IOz8Vi0rgNaF88T3VzAW1c8S2bpNsCXioqd74tl6_6_A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05LIFXNpA_KLIJjeoBqUEJ36BE5X2qkJWBuiMRTQ7jMsoWqOFkZUpZ9gXstUsagBp0slyHMb-nAE2Smp_Ue99xtq4sSCbTvc0fn2FzJTH5knHLf42VB5XtRP5vIWQg1syj0vsInQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Reglas de Negocio Asociadas: 1- Formas de Pago 3- Venta Anticipada 4- Precio de Entrada
5- Estados de la Butaca 7- Festival Vigente
Requerimientos no Funcionales Asociados: RNF1: Simultaneidad de puntos de venta RNF 2: Código de Barras RNF 3: Ley de Facturación RNF5 : Generación de Entradas RNF 6 Manejo de concurrencia RNF 7. Colores en los sectores
Fuente(Reunión, entrevista, documento, etc) :Enunciado Referencia Fuente: Enunciado de Festival de Folklore
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OZQDUoINHdnclBp-FfwbkcwJzwLJgtlhsO6PBpCAyfIRWi5uI8iQhTy_BtlHkCsg30EkZ1raAzvqWJC-At8QV_g2wrsrFDxEylXTsMDUCDO22hAji1q_6jDlKtCtWzeGN8-7TNQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qjMWmKteDQ9NPHbslZ1VXREZVAg5XZz3WFuDm3_LJGVM92bA2NARFIeV0p9WC0SCKdKqiae-sJAUTqUH_VEtDfBJPGNKVIDlKMe_gTOVwb930gq8U22BtCyay-kHOS5gov_Dx9Q=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Resumen Esencial o Trazo Medio Nombre del Use Case: Registrar Venta de Entradas ID: 01
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple (1) ☐ Mediano (3) ☒ Complejo (5) ☐ Muy Complejo (8) ☐ Extremadamente Complejo (13)
Actor Principal: Encargado de Ventas (EV) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar la venta de una o más entradas para una o más noches de un festival e imprimirlas.
Precondiciones: no aplica
Flujo Básico (Curso Normal)
1. EV: seleccionar opción Registrar Venta de Entradas
2. SI: mostrar festivales vigentes
3. EV: seleccionar festival.
4. SI: mostrar fechas del festival seleccionado.
5. EV: seleccionar una fecha.
6. SI: para cada fecha seleccionada, buscar sectores con ubicaciones disponibles y mostrarlos.
7. EV: seleccionar las ubicaciones deseadas, indicar tipo de entrada para cada una.
8. SI: bloquear temporalmente cada una de las butacas indicadas.
9. SI: validar si aplica venta anticipada. 10. SI: calcular y visualizar subtotal por tipo de entrada y el importe total de la venta. 11. SI: solicitar confirmación para generar cada una de las entradas.
12. EV: confirmar la generación. 13. SI: generar e imprimir cada una de las entradas con la siguiente información: nº entrada, fecha de venta, tipo de entrada, precio, sector, fila, nº butaca, fecha del Evento, punto de venta y centro de venta
14. SI: actualizar la disponibilidad de cada una de las butacas a VENDIDA.
Flujos Alternativos
A1. No hay festivales vigentes A2. No hay butacas disponibles para las fechas del festival ingresadas A3. No hay butacas disponibles en los sectores elegidos. A4. No se confirma la generación de las entradas.
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BzkBhc7um4DQf3yPXToJF1FPtDjqd6Cuw_WS63EbkZuNyBbpoYccwaUKlMOfd-rAnhdQVXYsLqdINwf-b6O5iHSk4UxrsODifeEYz160JlcqTJAqMP-CqNgxte2DrwI29vR2BQA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30_cWpF4yfX3dIqsR81EjxjtsEd83WfuqxsS9MkyD-QRQ9fPavO2GRFvuZZ5tkp_V1B5UbIJ4_Ozz6XjXdf-NRvK96Y1TNzjzdujF4CKPZeaL5Ffvu6Z5FtOkFiPy9Zb2JL7h3=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Trazo Fino o Completamente Descripto
Paquete: no aplica
Nombre del Use Case: Generar Diagramación ID: 3
Prioridad: ☒ Alta ☐ Media ☐ Baja
Categoría: ☒ Esencial ☐ Soporte Significativo para la Arquitectura: E/F
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Festival (RF) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Generar la diagramación de las actuaciones que tendrán lugar en cada noche de un festival.
Precondiciones: no aplica
Post- Condiciones
Éxito 1: Diagramación generada en forma completa Éxito 2: Diagramación generada en forma incompleta Fracaso 1: No hay festivales sin diagramar. Fracaso 2: No confirma el registro de la diagramación.
Fracaso 3: El RF cancela la operación
Curso Normal Alternativas
1. RF: selecciona opción Generar Diagramación
2. SI: muestra los festivales que no tienen diagramación y solicita seleccionar uno
2.A. No hay festivales sin diagramar 2.A.1. Se cancela el caso de uso
3. RF: selecciona el festival al que le desea generar la diagramación
4. SI: muestra las fechas de realización del mismo y solicita seleccionar un día para diagramar
5. RF: Para cada día que desee diagramar, lo selecciona
6. SI: muestra la fecha, el día, la hora de inicio de la programación de esa noche del festival. Solicita seleccionar los grupos de artistas que participarán y permite registrar nuevos artistas
7. RF: No desea registrar Grupos Musicales 7.A.RF: Desea registrar un grupo musical que no está registrado, 7.A.1. SI: Se llama al caso de uso 2. Registrar Grupo Musical y se ejecuta con éxito. 7.A.1.A. SI: El caso de uso no se ejecuta con éxito. 7.A.1.A.1. SI: Informa la situación y permite cancelar o continuar con la operación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08ohoABn7GPhEXkY_wiN_WD2vVq87nuuhX_AYYFR19b5vilxLDCOzb6tUz5KmN_W4rG2P0l6AZxhu24VilCB5y75WRntJy8SLe48DL2hGjR0kabYu4NnGbSNEd9m0fDOpOtpzl=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ThkGLaBUssPTc-d9JDwXxZm2EPWdJ0LG9ONFQGitbsm_jISSPd9YIUOfpFfqNotlcwwqJvtzD_aReubMVXbid5mjK95Q5aMgEgbTxLOjJWV025uFw_DUdk638O_FRnIRQuA5L9w=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
8. RF: Selecciona los grupos que participarán
9. SI: Para cada grupo que participará, solicita ingresar el número de orden de actuación, duración del espectáculo y hora de inicio estimada
10. RF: Ingresa los datos solicitados
11. SI: solicita confirmar la diagramación e informa si la diagramación está completa o incompleta
12. RF: Confirma el registro de la diagramación como completa 12.A. El EV confirma la diagramación como incompleta.
12.A.1. El sistema registra la diagramación en ese estado. Fin del caso de uso.
12.B. EV: No confirma la diagramación. 12.B.1. Se cancela el caso de uso
13. SI: verifica que se cumplan todas las restricciones planteadas para la diagramación y se cumplen. (Ver RN 6 Diagramación
13.A. No se cumplen las restricciones planteadas para la diagramación (Ver RN 6 Diagramación 13.A.1. SI: Muestra un mensaje informando la
situación y permite corregirlas o cancelar la diagramación.
14. SI: registra la diagramación como completa
15. Fin del Caso de Uso
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente
Reglas de Negocio Asociadas: RN 6 Diagramación
Fuente(Reunión, entrevista, documento, etc.) :Enunciado Referencia Fuente: Enunciado de Festival de Folklore
Asociaciones de Extensión: 2. Registrar Grupo Musical
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P0ZT2CyQGJ4xYfYwpsYvnThicl0AQ5Fg4FDcSH2OloUWFlLh12_HhVrYyD50w4ZR6K5feSfIf0_soZQzx29C7FBxtMAnvrnJsWtBc2ZN51WQxzlifc1dGDG8V_VMbKW8s_dCHKg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BcxzlZ2YCu86gQtPBCWP7KG7y6qUIbi6CCr37wZj0Ta9pMYHmQ3Pszo4itL9KkFzdAQVpO_mAhKAlxykfmmCH5uHM7VK7SJOv6364qwhcMBsQLtsXUUr1WQZfxGmQht60sS9L3g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Resumen Esencial o Trazo Medio
Nombre del Use Case: Generar Diagramación ID: 3
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple (1) ☐ Mediano (3) ☒ Complejo (5) ☐ Muy Complejo (8) ☐ Extremadamente Complejo (13)
Actor Principal: Responsable de Festival (RF) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Generar la diagramación de las actuaciones que tendrán lugar en cada noche de un festival.
Precondiciones: no aplica
Flujo Básico (Curso Normal)
1. RF: selecciona opción Generar Diagramación
2. SI: muestra los festivales que no tienen diagramación y solicita seleccionar uno
3. RF: selecciona el festival al que le desea generar la diagramación
4. SI: muestra las fechas de realización del mismo y solicita seleccionar un día para diagramar
5. RF: Para cada día que desee diagramar, lo selecciona
6. SI: muestra la fecha, el día, la hora de inicio de la programación de esa noche del festival. Solicita seleccionar los grupos de artistas que participarán.
7. RF: Selecciona los grupos que participarán
8. SI: Para cada grupo que participará, solicita ingresar el número de orden de actuación, duración del espectáculo y hora de inicio estimada
9. RF: Ingresa los datos solicitados
10. SI: solicita confirmar la diagramación e informa si la diagramación está completa o incompleta
11. RF: Confirma el registro de la diagramación como completa
12. SI: verifica que se cumplan todas las restricciones planteadas para la diagramación y se cumplen.
13. SI: registra la diagramación como completa
Flujos Alternativos
A1. NO hay festivales sin diagramación A2. Crear grupo musical que se desea incluir, llamando al CU Registrar grupa musical A3. Guardar diagramación incompleta A4. Hay superposición de grupos en la diagramación A5. No se confirma registración de diagramación
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yvCLXVZp0iDQ-qNCBsecwNeQsht6RM7xGa4lg3Sy_YCMm0CbHdWHjALkX65ds2-YgU7HwfrM5Y_IaTOEWFxUsYkV_LoFTAxnghjo16M19b7H6bUWftYxxexUv433jbU_JiJESqg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r7f0qrxbwnK_gPfh14Yf1k3Q5dGbs63VdoN7Lvg7JlFcKzeWzrXB0CwjhWFNQE-UFJQCXhaXuOvtP5byk7NMlycJU46aTjX5d04pMMgYEJXGATegwFRJDVdPJoQkoXgZjSbMY=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Trazo Fino o Completamente Descripto
Paquete: no aplica
Nombre del Use Case: Registrar Festival ID: 05
Prioridad: ☒ Alta ☐ Media ☐ Baja
Categoría: ☒ Esencial ☐ Soporte Significativo para la Arquitectura: N/E
Complejidad: ☒ Simple ☐ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable Festival (RF) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar los datos de un festival y los días que durará.
Precondiciones: no aplica
Post- Condiciones
Éxito: Festival registrado. Fracaso 1: El RF no confirma la registración del festival. Fracaso 2: El RF decide cancelar la ejecución del caso de uso.
Curso Normal Alternativas
1. RF: selecciona opción Registrar Festival
2. SI: solicita se ingresen los siguientes datos para el festival: año de edición, fecha de inicio, nombre
3. RF: ingresa los datos 4. SI: valida que no haya registrado en el sistema un festival
con el mismo nombre y fecha de inicio, para el año de edición ingresado y no hay.
4.A. SI: valida que no haya registrado en el sistema un festival con el mismo nombre y fecha de inicio, para el año de edición ingresado y hay un festival registrado. 4.A.1: SI: informa la situación y permite reingresar los datos.
5. SI: solicita se ingresen los demás datos para el festival: descuento por venta anticipada y porcentaje de devolución por anulación
6. RF: ingresa los datos
7. SI: para cada día que integrará el festival se solicita se ingrese: fecha, hora de presentación, fecha límite para anulación de entrada y fecha de vencimiento de venta anticipada
8. RF: ingresa los datos requeridos 9. SI: valida que no haya superposición de fechas para los
días del festival ingresados y no hay. 9.A. SI: valida que no haya superposición de fechas para los días del festival ingresados y hay.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fgOx-sNVbY5jn9oOiTffeZ9SN8R9Dzfe4_Xa-raWNRvjIOHWDInQvDq-UCH5us8NbQRkq6iHNoD4TtetFMQsy-DhX1x0mPK4d5-nJ_0WrA0QIYBEl8Vo7gr_yrHsZfcTdmDQTwA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2W9drCgG0piobZEgtzebPMrX9wY2sjUL_wEnIu3HhmJTLykyROP_be1llwfMBIgv0gC_FOsrcsxJwFVQMBl8jnxo0i6GUmyFSDORWwzbrFL4Y_13UaOP0b4OttsaBhNZGZ5C6N-w=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
9.A.1. SI: informa la situación y permite reingresar fecha.
10. SI: solicita confirmación para registrar el festival con sus días
11. RF: confirma la registración. 11.A.RF: no confirma la registración. 11.A.1 Se cancela el caso de uso.
12. SI: registra el festival como no vigente y registra cada uno de los días del festival.
13. Fin del Caso de Uso. Observaciones:
1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
Reglas de Negocio Asociadas: 2- Anulación de Venta 3- Venta Anticipada
Fuente(Reunión, entrevista, documento, etc.) :Enunciado Referencia Fuente: Enunciado de Festival de Folklore
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dscdLxgMtdTAQ0Bdc3FdZjmE1O8ZKS8twevUmJoZqNo39qDtkPN3MOf4QOJELpenBw7iexLYj_luNEP4aIKqPtdkS4QlA1htJzXSSjsAgzO6cWtpe1BFn5A_nbnpEEcpsixPp5A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z4p7g2kJytMmTaIALZa-2A7xkmDcaKZzrCgXHM2s-tfChelM7CTa_Fh44d-TI9Gv46zD6wg3a12JxPPnkCeihiJTxoBg4wC1fBpkZf3wqAFhZCl1F2mSw90JJSSDe00czBhot_g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Resumen Esencial o Trazo Medio
Nombre del Use Case: Registrar Festival ID: 05
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple (1) ☐ Mediano (3) ☒ Complejo (5) ☐ Muy Complejo (8) ☐ Extremadamente Complejo (13)
Actor Principal: Responsable Festival (RF) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar los datos de un festival y los días que durará.
Flujo Básico (Curso Normal)
1. RF: selecciona opción Registrar Festival
2. SI: solicita se ingresen los siguientes datos para el festival: año de edición, fecha de inicio, nombre
3. RF: ingresa los datos
4. SI: valida que no haya registrado en el sistema un festival con el mismo nombre y fecha de inicio, para el año de edición ingresado y no hay.
5. SI: solicita se ingresen los demás datos para el festival: descuento por venta anticipada y porcentaje de devolución por anulación
6. RF: ingresa los datos
7. SI: para cada día que integrará el festival se solicita se ingrese: fecha, hora de presentación, fecha límite para anulación de entrada y fecha de vencimiento de venta anticipada
8. RF: ingresa los datos requeridos
9. SI: valida que no haya superposición de fechas para los días del festival ingresados y no hay. 10. SI: solicita confirmación para registrar el festival con sus días 11. RF: confirma la registración. 12. SI: registra el festival como no vigente y registra cada uno de los días del festival. Fin del caso de uso
Flujos Alternativos
A1. Existe festival registrado con los mismos datos. A2. Existe superposición de fecha de días de festival. A3. NO se confirma registración del festival.
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AZ8JoOs81wQtNnXs6ezG6T0XvVEV-WdKqUTOBLyQGiSiO1ScYHAZPJcSfuKShq0ZPzi_Oab7swK1jKQden_Uw1tUYkS9WaCRzdRRjovapgn2K5R4dVqgDx4T9dws3i89JHtv6=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3eTdxTyxpj15UvctTdjwLnXJGKSn_hi1FNlkfD1JAtW8x8g0EZLTqjMJn7cYTX9o3-6AcbpUH3vixRaEhKyY7FgGerZlP1PM0yiuhvWWmBr8psGC44V89VZr_ChuL7uFfODD0P_g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Nombre del Use Case: Registrar Festival ID: 05
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple (1) ☐ Mediano (3) ☒ Complejo (5) ☐ Muy Complejo (8) ☐ Extremadamente Complejo (13)
Actor Principal: Responsable Festival (RF) Actor Secundario: no aplica
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: Registrar los datos de un festival y los días que durará.
Precondiciones: no aplica
Flujo Existe festival registrado con los mismos datos.
1. RF: selecciona opción Registrar Festival
2. SI: solicita se ingresen los siguientes datos para el festival: año de edición, fecha de inicio, nombre
3. RF: ingresa los datos
4. SI: valida que no haya registrado en el sistema un festival con el mismo nombre y fecha de inicio, para el año de edición ingresado y encuentra un festival registrado con esos datos de identificación
5. SI: informa que existe un festival registrado con esos datos. Se cancela el caso de uso
Flujos Alternativos
A1. Flujo básico – Registración de un festival con sus días de festival A2. Existe superposición de fecha de días de festival. A3. NO se confirma registración del festival.
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv155Ty-cMxoPKOfPrpk54sckHvK5Yb9xZHCAectzBVqL776jjOlyeQvNo74q-NB5dEjKrPLvpA5sY_RyVc6sPbNRu-tVVPCdVXp7syPw-jXfn9mcWT9KMdP3UhH0sJss4KangvV=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bjnPtXEoNF4Vn66w3FnLOq2NTquMtq4XpXtEvV77iG9kPHB5b5eEMxq1s9OGl6HouEPBvt2YYJP1UDpxrklb8Hv2Dx-meuC1ZPQCP5UIaZ_qQhzZCM-gaO-DS8m4GYcmD9TQP=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yHBf5vPgKP8GWp5mQKLzbwDLNLHsLYOM8aMRHBteJxzmHkouwxgMWMiTKa4KqyGFKmA2UEKW7qMzs_Ns3koydMfi3e7tuGqMUcFoUpzTmurweMb6nh49O1P345wEKWYw0-WXUag=w1278-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p2ZN1F6BGJAPggRiihGy9miLNGdZdurLhZA4M4W41imEvefADP8edHk3O_REP1Gr_P2I1NB9jKN7x99tKoHOpvuY7Rqrixmox9Sg1ioQGK5YSiYDfAdYDIeQXlpAbSRMLMizmag=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Je9hWVYkol3d1HNTSUF5EoEchCpvbyQ4wt13xZGt-n-A9ScjjEnxpMbk94TwiB5w53Rt8W5GfJLY5AVX12ckKK6tPJ861R9zNI3pHMurhzBmDNCC9iQruHQXZoREGFsWgzZnCVw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kzTY1gCaTgcLwCCLQ-72dJPU9wTBAwWkzbPsgVUkfvOyu79ZkzfGlgKvN4z6BaoXYAtDiCtKRACIE6Un-jCReAR8Lk6u1d9Ds_c-ZyydnZhbPtw8SDuedoY0u52ZAndjPw0s7OA=w1280-h1102-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Realizaciones de Casos de Uso de Análisis Vista dinámica con Diagrama de Comunicación para el escenario del curso normal del Caso de uso 1 Registrar Venta de Entrada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ln4ayZSp9UQtAmPlGARjQoH9ARz0XDvSQw4msPgoRWEqoI-K3m1ll_QVTbE00hwkG_PoOZ7UiLiUtJciV_zHpcf8DFbEQStEzMwQeUBMNNuHnzcdx9FBirbMAMC901fdvMKAheQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00z4Oa11cjqRNGHgXUaeocKDk2cHdQ6pTOBOyMvNa4Al4lqzm-YOMN4OnG6efY8Q2QLur4SnKGnHUx2Vv53kwR-86IpnpGOf84oXyUdmIlz2lzqatEonpGMpCv2DAtra_mynhiqA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0piHEByblRDDN3Jr7U7iSf81CFW3q7_ieawq7KojdvIsc_Ga8d2YDA_JVeg5d8ap0KJ5CyXTAFQ1KKX3WUx40vBjnLNfaUi_cvBnfrGRBUuuIotve9yjU8hJ7M2RedGwiWqgnVOQ=w1253-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con Diagrama de Secuencia para el escenario del curso normal del Caso de uso 1 Registrar Venta de Entrada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1du1ZbOGgELzGIg9qmoE4bLXyBztXUDXezhCUH0Q9yNi4TtVEBwqOTv11mkj1iT7EDi7Py5dQnhjlijMSK0RLtYaddlrB5_jRKBQIKufeOV-VE9_eTzI98yVTKAE6pTBHAyfE0Mw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RQS3U56wlHk2JtRGqKsK06DCyQdMe4yksqj9ZgR6dQXB5MNqhdoJk4v1BiugqJgrl9tPL1nUCfeS7Ef6FujIPQ5lu439c7zkIS3TrBIDJkDnhFm4qZQ_6BG08Mq3KynCNExm9Vw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1i5m5O3vRl9AAeIKQ5bZOC04mJkPyAiurJwKTOUebtqwpI8A_MBAEuVw8YmnhWm8hm0aXzMgeKf_guHb5LeEl_Pt5F_nDyr0y86IWsMsVEICSuY2jJsnSvapwHyW18CZyHQlJ0SQ=w1280-h1273-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista de estructura de clases de análisis para la realización del caso de uso Registrar Venta de Entrada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04da8FmCkDaXMBntUGA9bOO91G1XV538QbAmofv6kLYFurbk-V2Guv8GkgrTQiEJzLK9XiG1QkLlwEQ12SMNA_yjZRcsz3v1YSFs01o-RIFBonndaBNZh0ENnVuf1HW4hDrPaMVw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cOLAPi5ZSXOK8TeGWeRPu39FJns1ZGv7VhYhfQZQrWczF7i0GKZXeqMv8DiSddyYGzm-Rt92_hhTDY2PYxXwMPFo2tAUGfvvM-jJlqe1fD5FGZYDz7Vn_5cBJmQxXJLjP63CVEQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aWMdO2_UJmhtPzelzJXxQ-Gpx8UI66F523WK5rQYyDw1DpyOqG-1OUZsA5u8VDcSRXRhcpV6J18Yr-f85pTHI6LCmw3AH0rqURl_GN0BMErhms4cMKs0kfjsytFKQY2jF73HqdQ=w1280-h631-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Autor: Judith Meles Página 24
Vista dinámica con Diagrama de Comunicación para el escenario del curso normal del Caso de uso 3 Generar Diagramación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZzzCRsqK3dj7TpIAL1pF1k7KvRSonXGql9oIkooc9y8ExLLhI6TJjke8IOKlBSk9MVB2Mj2rHZObFAUJUCWKzV3FQeH1I3QYplrP-wbKiLFMreBe6R_hfxFzImMcXzabdgaUokg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3p0mlwoI4M1z68OuoRvxlsnUtEEfc8xftCY2j4TAdHwCdTbBMfZsASTw3MYTLlcFdbUBsZ5wf_z_CawXHzcRHPrZTKJkvj697cEQeEooosOwWAKnE6ACJYX_qDLad8nrQH_xXEvA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Rv0xlDQlv4z9suWy5HcOBO1DdtZ9tgamlc_eoi5NY7ppxg_mXBowK07CgaZU-ILhwjY-0AaF_EgDIS42ekcsLvE7dMspYpHryis3-dL9Wj6JtSWX5gg_PXnxgZtUA0ba-__LG6Q=w1280-h1170-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con Diagrama de Secuencia del escenario del curso normal Caso de uso 3 Generar Diagramación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m5MIvdxosVCnyNpPnqHU7Lxo5FYeCYEej4-Cogb-YiT8U7QgGmM3o9VQC0AY391Wh0N21K7RkPDdGt-ydq7_q18VtA-jJ4koXI5obHPoFATpzRw43ylP7poaLG-jpOojZ2ZWB=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3g8KaCpw5iwntGrkGLs2QZUwUlmO2mkVi05AtPDhqw-jguNey0jB9k8tudDIaqLiIq6l4aNZUIL4e0lNdaLJFfnhjxauPwzGiv-GK1eTIkHchpmqwMHG30kKyIw5GJ4hb1LwnI-Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dfczb--jag5pu77LZXp3u2vqWsyS4zlWMBEaKqNG_W2mJdnza7urQd47udsypMSUc-bTg5Yv-7HRGHDv13YVyAfAg5esrsJGu--lfqQCdicNfJ85_pX_OR2am6RoAdVrZpLte-g=w1262-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista de estructura de clases de Análisis para la realización del caso de uso Generación de Programación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19zVeByi_ZlPUChowvsUIiKOgJmtkWXUK9Yl5-KuypBbMBqXsbojVckMRoTeSDWhR36V0Ttx80KMXTH-79N7gt2OWHhcSGBNXBc8ENOoDFWZLr1AWy55M2vMenjR_CExWHoZ1c=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11wJY6P_gnVOLpjDH6Bh6kC2rWSrSTQ8rzfdUBYRgAxNt2tXZi5fKlr3af15iB1zh9SQ-b2XmAExUTW3-yu1HohD3M-fseCpV3vqKOb94r4r5mNB73oK142rmWZbTee8Tv3CFY-w=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10GftJ2cKkmYt0Jnesgpl3yMiSMjw3JYx_dGl4CoLWHtfcLFdbFE0Vonk-b2X7qEwry8tGsLqpEUOwXcn3i_AIP76QlapxczzgQmQU5e5W0tl7_6qdJL7k8zRsj1f7HqOj0Rvg1g=w1280-h720-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con Diagrama de Comunicación para el escenario del curso normal del Caso de uso 5 Registrar Festival
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OSQnO_OrVZAj1xtNr5G1fVIMxh4kVB0zNIVrtywTQEtlDMCJ40QVAx_BfOi4EekJTpIYf6CaI_6RgxF4Ve2jptP8fHGxi9BitqT9Zy1CJSV-V0rlcunHKffStjs2LN1sQfL_w7w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TWgP_cT0FlWvhc-2gmw_j6fwrhBPUSSvanwO-jfCOWxQux3PU7I9DQlLNd70WYh6l1OGgbbXasg_khu3yYR1jPCJqkcngIXrCHHANCQsljHzZuVyXrROlbN71JVLp5UBSHAnb=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3c5aaZyx8r8Z6TyPyKksMvavZqsC9LpwF1JBANoNbC-pb8hFTDY4neDqMhqMjZB28yLCI0Uf0faFOKcBVIgm3lBKtRFP8uM7Gymtk7N19-j3jVIQWay0HvxDXJDUzeoGflsyLQ=w1280-h929-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con diagrama de Secuencia para el escenario del curso normal del Caso de uso 5 Registrar Festival
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SFbGu0YDdDn0-QYO7tWdb1jMmMGTrlgTFlNjTlerQ_Iuqc1w-gSp9jVEhGdKOYR_2RJfZ12392Qqqt-r6Ah9AtVqwSwIO1JBVmk0hlgRdkeMBfKzAQMrVbC4JDexYAg5cl38jjw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jT7JjDCkk7leUHCPf-FGPBSlGn-N08gkdZ6YXDlBuWMuc4sKqkVub9yEr50_VQmPv2FpjxBty3UYlflyGCh4VaIeu5-oohTsmOiTJnOrWww69ZaY5gjxs1UjXH-cqMwOl4Ypt=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34WYF2KCbmYjVR4OovtJyJPO9U0nVDLrdblmrn7S4TYLibHqc2YQe4Hc3JIvn9KDL7fkJi3PcgFNk1_LjZjeyLHbXCHXFNav7yBQ9uwEM0W0nq22u15W2LLgj56d2fuDE_T6NNEw=w1280-h1231-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con diagrama de Secuencia (con fragmentos sin asteriscos) para el escenario del curso normal del Caso de uso 5 Registrar Festival
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nJeQkFM43XzB2JhqtdLUTfg5Rgw8wQSOYwZyY1-9yAalfqPRwyYbRO9Bu6R3ejdXs6_6D8j0ajjMLGsNI4n-hDjKFM1Bunx6DsCIEy8vQ81HMN5cBHh9Drqcq-4-dfbAwC_UGtA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PI9Rqow9jBSVOKbubG6hh2rMoH1gWQIzxiDO4DLCZQ8YQqRrP8XkK_Dx9W3SYDs65-1a1zAGQxoDXm7i8bpQpTqH6vVXv3d3b2ipIQN9P8kgqeKk7iL40feSHazrSZgCI2tFV=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LgeafGKoBYRmHYI_dCrUJvebkupaJZpXvjTP0OkcD0PLHJfGbAYIuWuS-mISbwANLvlraU4f9Qahzr2cztcO-eY7TYHKoG19Ri3IK48zw9mCR3-Z7aVCK2CUzbrBy7PVBq5raPg=w1280-h1114-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista dinámica con diagrama de Secuencia para el escenario del Caso de uso 5 Registrar Festival- Existe Festival registrado con los datos identificatorios ingresados
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rlcZXGiVLO6M7vwe164sp7Pea5ZsiWwnM5HSuu4TlzuTmeymzL0dcJnmvrWpg_9uzNvJH9kZ4BePmJOHVhfK76hTO8tcTGHTIXJCWctesNlfR5QWOwVg-vuUbtugIuqPa2pWPFQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3O7jOWk0WPgOXRxAuI4HVvRSMhHGY2O6mINXkGBXKiFBcLyhMBqIbIvOVQD6E2VB50ltUggWyg8OXlzNyukiC-rcByGFsgUKarQBBAAQ-t6oKNVHAvOCe3JTNw2DqwR8C4XgOx=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KpcjoNdGxs3t56n6Z9q4Ow8O3z6IHpNAxYic9I1fIwDV-e1qNy5IDChYt-U4MBHJPGPekC2MYiPKLkh4tT-yLD3sFpO_Qnn2mEUUzgAElGJM6k5irKf939dSoUy2ZFeGVxjLLXw=w1280-h957-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Vista de la estructura de Análisis para el caso de uso Administración de Festival
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14vd1D2kPYNTOsGQd3ZTjJFet6IBoGXAj_phT5cXXwFzRHN9xLVc9z6TgtLRJg_k97WFt1kwxlu_M93qV0i0O5NHp9EbFzL6fYPpZApPsR374qRmjyZbqOENWx_Ea_PfLvR32wnQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3laRyFU0e-DC9jvjSLv9knU4givpDWQPMM1fkP-TkO9fWsSQee0AGwqcfnDbY5gS9t4RSW8ne2DEAQRubYggAb_nt8DjtXUPITy5SwNBxO2qnHYAzMrZ-tGAq136YzyerWj0zAZQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fEYYXJfeiABugsT55ZNErHPfVgkTi8kXL5R9jOO9pkpXWZbo__raVBcmTnlLWka11Phqo1jotnOmMMfKBiPdwEgOb0zdUfs7CnqNrSyI-Fo9E72U3XWhFDUJ1kkQ2Wt5M0bu9Wg=w1280-h747-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Máquina de Estados para la Clase ButacaParaDiaFestival
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IoSGn08KtnY4JOPRI4Cx3FKkxzjwzv_VQYPnJLolTMRIDasRWaALr26U8HjVFiybzZ30FPgvDbHbxwnFbNAnk_y0bmwH-0Cevwfq3-k5bMX5dOTTI4FtlchT8iVI_V4s7joL3eg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HeJtqAKYfVY9lYja8ESFplkiZxzx-nP58OA2RGrhcvcxUFbiEZc8rGmpvl9LzCU9JJ3a6clcpPiSge5qKUoXMjmxvdu9d_aMdF3evmkNJcDV7ti7pdGQiOPVqAYObyQrouYs89A=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Requerimientos No Funcionales – Decisión Arquitectónica
Requerimientos No Funcionales
Nº Nombre Descripción Característica según ISO
25000
Significativo para la
Arquitectura Prioridad Decisión Arquitectónica
1 Simultaneidad de puntos de venta
Funcionamiento simultáneo de hasta 15 puntos de venta
Eficiencia de Desempeño SI Alta
La base de datos debe soportar este mecanismo.
2 Código de barras Código de Barras en la entrada que permita identificarla unívocamente
Usabilidad
NO N/A
Se resuelve imprimiendo con una fuente de código de barra que transforma un numero en un código, no representa un componente arquitectónico.
3 Resolución General sobre facturación
Cumplimiento de la Resolución General de la AFIP, número 1415/2003 y sus complementarias para la generación de la entrada como comprobante de venta.
Usabilidad
NO N/A Se resuelve imprimiendo en la entrada los datos solicitados por la Ley 1415/2003.
4 Base de datos Base de datos de la aplicación en Oracle 8i
Compatibilidad
SI Alta
La base de datos debe ser relacional y resolver el esquema de encriptación y las auditorías de transacciones.
5 Generación de entradas
Generación de entrada en un máximo de 6 segundos
Eficiencia de Desempeño SI Baja
El módulo de software que emita la entrada debe asegurar esta performance
6 Manejo de Concurrencia
Manejo de concurrencia de puntos de venta bloqueando la butaca para un festival en una fecha en el momento en que se está realizando la venta, liberando la misma si la venta no se concreta y ocupándola si la venta se realiza.
Eficiencia de Desempeño
Si Media
Si lo resuelve el motor de base de datos, vinculado al RNF 4 Si no fuera así deberíamos manejarlo desde la aplicación, en ese caso la prioridad sería alta.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3d7rV7NvM8L-G3sX3dat1h-q9xUSvOMsVRD9q8zf7OZkpSIjXcAg43BufqZ9hzeNWzFJZREG58h6MZawYux9bk3fjVhAIAWQFHI5nRxOnC6FbKb29WwBQxN71p8JsinGpfXm7h1A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Id-klXY4g3hLI30_r0uWcAT4R1ER0m1tku5UzNidwlg9g81NphI2ImWSLMvtdmWd3F8BZSqxUtCE8Hv5Tyx4UCrAlvpPplM5B_a6_oOBe_gHjM2RDmbrgSV2x-yUUoYfKXtLlNg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
PPA_Festival de Folklore_Completo.docx, Versión 1.37
Requerimientos No Funcionales
Nº Nombre Descripción Característica según ISO
25000
Significativo para la
Arquitectura Prioridad Decisión Arquitectónica
7 Colores de sectores
Visualización de los sectores en la interfaz gráfica de usuario, con un color diferente para cada uno, asociado el nombre del sector al color correspondiente.
Usabilidad
NO N/A Se resuelve utilizando los colores de la escala RGB hexadecimal estándar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UwaAOMCZAQCMjgxxrPoQExp4iVdfnP5xq_lWLfHkDlP1EqatF47K4cAZ-rbaXN3HnGO7vo0WU4u0Qc8DDcQ2sYNint6oStKAkMmATvPX9rhIMTzH4bG5ZirYvh-6KCIHEYm9C=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FI8Dr3Bh8kHGsOJzvfxkpkBHoi3Quc4EUTW3-7035qWiiGpHyTkbR2OnNbCblFCM1jhHF5tEwt3RBFQu9x4gEUX6W9gUfftG-cfdiniEETcL3KzLDpssM5mYNaAv4TucItu-EOg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3E7_tEe1YS3KrT5Nh8vbT-Yh5mdnEHwqGSxZwihDfPIu4TRc-M07KU3OX9PES6MikzAkwCnTPPbeu5f0tKAPe6eDQXnLPsXOGbYlmhDVY4F8_h9ECqC2Isl4y4r32zcJtFYGF3=w1280-h574-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K4rsofUz_x9PA4R9hLmr5gAt-hNn5N9WxilIUazUB2t-AdNq3adIQ9PF2CW3f6DDnwHIVO5wjDLYJfommhY_zrilOPI_ZDmlQ8m7W-JKGkMYdtOK_QwdNwgnAmB6PwPV-3gWTPA=w1280-h142-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lmvaET63zDkORgUSh4Ca5xMC2_gTlCjhpFi4peGsyKZB8w1p8IuYT77WJhRUZuHmirZtr6RcAnJtMKvdQRWMLGuxMK2sXImqT7MSkB8g8hE98xG9j8fZdo3A1Q0ZZVf5_MN0lag=w1280-h43-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uxzAsj7_1s8vForAkbRaPTjJHYZE63NU4xjqFbBi8PBn9geEQkrTrRLre7z_7_LMyaIIn4m9-KEcwLHdPv7LQ10t-nVaO5gN5He6UL3IO2clDxWl1IkrUQ3DeiNn6OROgjxeb=w1280-h36-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20D7YueKUhRCifBM1Z4uutTFwsPp1sXQZBTzzYj9QF_YEeJ8QdeiDQsvjC29K6AJB7soymYUJoFOGlARRh9rifEuK6Se0A5DfpuE18mZ83LR4yyzVhphQ79vcyVUF8_zgjcbWEEQ=w1280-h36-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Estilos Arquitectónicos Los siguientes patrones corresponden a los que se consideraron aplicables para la solución de la aplicación: Layered Aplicación: Este patrón se corresponde con el tipo de vista de módulo, por lo tanto es estático. Se utiliza el patrón para organizar la implementación de este sistema en capas de servicios auto contenidas, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable. Motivaciones:
Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios de código a la capa a modificar.
Cohesión alta en las capas que contienen componentes relacionados a una única responsabilidad.
Reutilización de servicios brindados por la interfaz brindada por cada capa.
Mejorar la portabilidad. Los cambios de hardware, del sistema operativo, se puede modificar afectando
solamente a la capa afectada.
N-TierClient Server
Capa de Presentación Escritorio Festival Folklore
Capa de Lógica de Negocios
Capa de Administración de Base de Datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2flvxqqM-j8cPj4LsqWTbG4wv59WOkwObkziErVP7XK3Qh7l-dc9qhAbdXlULcVLpBjJuSwQkdKwbjPJtuzMAXSRdqZF_6YnzEiVk4uJarKI4U9GBE1GEV56eqeImfqoMrJvg0=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DP6V5LU_Mdcvdn_0g-NCy6mwOhVkmdA7t5n2dKQOQ9yStDjKiWgmZWSRsAu_mwVVRtgbvwHHTubJyUIgrahlrvKco3WI-5ioJqo67CoUH6LCVX7DWicZz5yDqhQfS7RnB4kglvg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Aplicación: Se utiliza este patrón para implementar el sistema de Festival de Folklore. Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de la arquitectura. Motivaciones:
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad
requerida.
Utilización de puestos de trabajo livianos (clientes web) que no tienen exigencias de hardware a excepción de
la conexión a Internet.
Separación de los distintos intereses en varios capas lógicas, facilitando las modificaciones y extensibilidad del
sistema.
Los PDV (puntos de venta) corresponden a los Clientes, realizan peticiones a la Capa de Aplicaciones para solicitar por ejemplo una venta. La Capa de Aplicaciones resuelve la lógica de la petición que se le ha realizado y accede a la base de datos cada vez que sea necesario. Esta capa, para el caso de la venta, debe tener en cuenta el cumplimiento de las reglas de negocio asociadas: los precios por sector, el bloqueo de butacas (para evitar la venta de una misma butaca para un mismo día de festival), etc. Además esta capa puede resolver la concurrencia de múltiples puntos de venta accediendo en un mismo instante. Finalmente la Capa de Administración de Datos mantiene la persistencia de los objetos o entidades que manipula la Capa de Aplicaciones, respondiendo a las peticiones que le realiza la capa adyacente. Messaging
Servidor de Impresión
PDV 1
PDV2
PDVn
C o la
d e
Im p re
si o
n e s
Imprimir Entrada
Verificar Impresiones
Pendientes
Aplicación: Se utiliza el patrón para administrar la cola de impresión de entradas. Corresponde al tipo de vista de Ejecución (Runtime).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15D6_oc9U7nmyzYVmzQz9uuztIS8fz1eUripZxvNy3BBB7Rx9Q2H72w4TuODw_bzDDvA0s3Ra7SNEGKlFAjadKKrf2deFWeQRqzi59856ZGgRdwgCUzpq1i4WZR8MKQA_Ao-Q1=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yxr6I4d47REqmIVslL1TOJpWfBiSV_2K9UY_A2dX15lnAr4a5OjZglXDcbiDw9UjiJ61VcEx7pYsVSnRR_97E8_OKr79mfEispreVLMeObymVUoFxFE-wwVhDjNrzWR_cPu1HeQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2S64Z2FhU0w4zbevaufpNnBxiQP0Er7FxK9rlOD_bAjq-Xejf8Rz7SiQj46UD8Dy94mXlKLFhPGn52NWtSl2IFbR_VH-HVWrhHVNGeZwwPnpaIRK9v7L0XR9m-kgTJ91sx1eACGg=w1280-h967-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Motivaciones:
Diferentes puntos de venta envían sus entradas a imprimir al Servidor de Impresión a través de la cola que
tiene una configuración tipo FIFO.
Trabaja con comunicaciones asincrónicas, por lo que soporta bien la falta de conectividad en caso que
ocurriera.
Los PDV corresponden a los clientes, que en este caso utilizan la cola para “depositar” sus entradas pendientes
de impresión.
Vistas Arquitectónicas Vista Arquitectónica de Funcionalidad – Diagrama de Casos de Uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26QBXwP37LWHrrGQVzYbPiYL5dIGL6kDQ7h6TLLr0a9piVuSgkyyKs_FaiSPH80O8_rLueWONan4ou0MW4UVjv7qdsLG9fSscbzv7KsVwRyhSD_ZQUMPzhtkV337DY7jFmiotNPA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vcZ8n8IexdYVG-3f_cOk5snGBm61HvBw6YH2LLexv4qnvvpJAoia52T-sISSDIuIvLzgGAN5GTQ830xFWbvJdFkAAMp5N2TQmk4Cur9hSeJiVItBY6KDpb8VGIBclBvsic4Qe=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Consideraciones para la inclusión de los casos de uso en la vista:
Número Nombre del Caso de Uso Justificación
1 Registrar Venta de Entradas Relacionado al RNF 1 de simultaneidad de puntos de venta, al RNF 2 de códigos de barra para la entrada al RNF, al RNF 5 de performance en la generación de entradas al RNF 6 de manejo de concurrencia para las butacas y el 7 de colores para los sectores.
3 Generar Diagramación Representa la transacción más compleja.
4 Generar Reporte de Venta de Entradas
Incluidos porque resuelven la funcionalidad vinculada a los tipos de informes (estadísticas y reportes)
6 Generar Estadística de Asistencia por Día de Festival
5 Registrar Festival Acá se resuelve la manera en que se plantean las funciones de alta, baja, modificación y consulta de datos en el sistema. Elegido por ser considerado representativo de la complejidad existente en los ABMC que tiene la aplicación.
14 Modificar Festival
13 Eliminar Festival
15 Consultar Festival
37 Iniciar Sesión Vinculado con la implementación de los permisos de usuario y los niveles de acceso de los mismos a las funcionalidades del sistema
47 Validar Fin de Día de Festival Es uno de los procesos automáticos de la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TF5ms9wMZeZuGh5mU-xi1wKcRU9LSX2fKCNEA8Pck2ZOf7bvVF3OSoPJRNevMknvOj6M-hoAqJPuzP1dvEJfTXeElkEJU-Oi6magpd-BLrKUtfTlFCDVSEU0sUlW3cxafsEBVYw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16Er3z3D8Q4PtV3Y6nLEhblDH6YUmoXqW_zqw93sLrroT_kMfuFA67omhG0AnEZmT3tGtMbUh3kWHzL9LlsjMvYpRP5gLoaM_IkrTyQqkdRq-ee-CAItE3t6ApcqUroWehZJuntw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1686DrCz_Qp9SnVYFe35StDDIYtWa1bENG_nA9JVwUdDXN336ykvnshmlieSWN0y-Auyu2Q6iLXtJH9pi3RQQJfV9SOV7At07Tk-qWcoou1EkOW4_9KN1_3WWXmwUYpMbVWaMlbw=w1280-h1019-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Vista Arquitectónica del Diseño – Subsistemas / Interfaces
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KDsqhyZ0NWuAoNwQ-X0k78i3bbqDNIFVoez2HuGTfgT2pReRmMhEVTie6zM48_0iOawF-Z4j0fVEhdYpNhUxP9YBP_8yf87jarJxOeARoV447teD_OU2PSgZwyUyRHLFBXAAR=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17Yn3Zz6lK8mp1ycsF7i9sGsVsXBDDaKtKgyu6s7O7sj7cq3HOYYj_1CR5FMyKUL0gpXaiMoZ0omzmdlCHQTCYlJSeWlzQ8p_Ii5qiJ4PYPJvZJ9BtWXO-AHFBxf2CCDorH-aw8A=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MqQwqskrfOed9Hocdm342u18mHDCMaO9jHcT-kQqPgbHR0U61Kjs7c5AMh39RpGjHCWxWppHeyaJ_NYFWMDoDYWKBvpz2yDpcNn9JjFgpjBjOkUiCpmkT3HFFIdBh9bpdTmtW6g=w1280-h635-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Vista Arquitectónica de Despliegue – Nodos y Componentes Principales
Vista Arquitectónica de Despliegue – Nodos y Hardware
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20MsWAXL-lIPAAFATguo4k4JqY61K1s5W_XZ4kqH9a036P1GFFfJJdneRYMem9dsgmiyRCu1e1ZhZx1bwTKKZ3pm5q9pS1c_qgj8ViMZFbXi63ls5OwEMIkTawjkTH_VVEU525-g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kno9MFQ7P3Hj8ENxAnROMsflW3tx_MlOlXwnBbQ4pUPG00Xn-WSnE-O_ukD5R59mmSfbWjez7KbIuSovgghAY47er5h2r5CCqphIaItj3tJa5vafS3QlvqZpEKPxobtuwibqL=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
VPN
<<servidor>>
ServidorDeAplicaciones
<<cliente >
PDV-Estadio
<<cliente>>
PDVn-CentroComercialn
<<servidor>>
ServidorDeDatos
UTP – Ethernet 100Mb
<<impresora>>
Impresora-Estadio
<<RS 232>>
<<impresora>>
Impresora-CentroComercial
<<cliente>>
PDV-CentroComercialn
<<switch>>
Switch Estadio
<<RS 232>>
<<cliente>>
CentroDeDiagramacion
<<router>>
< < R
S 2
3 2 > >
< < R
S 2
3 2 > >
UTP – Ethernet 100Mb
Fibra Optica
<<switch>>
SwitchCentroComercial
<<RS 232>>
Fibra Optica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0w_XvvP6hPq2SZflNKuWUUTdGNI5UJdQXDkLLm3ZyS4Jjm8PbUCDU5SROoEzpdREp5UO6Re1p5wwXKgm2abuE7MRlopq7x7TVGjME-D7WD4dsvjHRh2w54cpTvb-JrB-mc1f5ycw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Gzuwp9scru_NNkB-IJEvfkGmCGxtXkb6sZTXo3Tp-UBfkIi2r24KSyTOKK9tbeOBv-mxTy5yvEKAv1V2f-yymQRykg6qN1iMFwPaHyX0dmH-aYpV31hjlnm9dmH_06uCIBZQb_w=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02cKCt8YcKTH7zLRh99bFFvgLSmbNXQq8hBm1ucINnVI_LQbebkkPtmSd3OoUb7ZguZ_dtEcaH7ICKwQTqjwtXiAc_mlNIJDEloadHRpVTZDi53AWIKg7TOkN7gXNPpvNxL4yJWQ=w741-h725-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Prototipos de Interfaz de Usuario
Tipo de Entrada Precìo
Entradas
Cantidad Descuento SubTotalFecha
Total:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fDxC8J2n-PKwT48Q92AR6Re4NbfG-VP5BOWpnF8GmvmWByCoJlB-wVWDUMtCYJ5qatz8-D8ihqVBSSg7frLkrJYUAJ08JcCi7RfuSCiDmK4db6_-NWcGcrzUgwor7IfV5ie2fXw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kPGEM65G7oIIiq1riSqoanARGvBjmEbNu0jwDf9_NtRxF2eUIzWJiTQzcQAc3FzSaOAXcmhZp3Rz1Kg4JzNyLZmucjt4wj_CEhqgdpjHOQe9aQfMj2qBDW40uyCAGXjneUJPG=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eeqKHundbm2G_jUwRZRNVpD8eXQ16PAkTvJdEhC6bY_jljuLTpWdNBN6PFEQMuVJxGQlzexlHMUd4utzugFxnUrDtn6hOS8Vn3qrtes-YQ-IRRtSoVjq6dLP9w22NGWOnjvQOGA=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mNuQN99ZND6KcEFTtt2M5sgWWK2w9mrAQZfh7vNApeFhqJHKYtMhR7LBmheDocu4A3ALfYQUYSUenRRh3bYuAv37VJ-Qeolr-Exc1wOeZ7aeN8THlaCS91ByXNf5Eplb-LYe8DA=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3W-CX_QlHRAtMoPt_VX_ijZKqCdZzeDq-98wp0obQ8qctRCYgBLYI5cqXzZE9P3cN7VJvzX3zfKoVyY2-JSwBwiz7sbpHss1yNjnuo_c7ZzcJM4FZKMI_26PRf6skaKdIpqNkAXQ=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1b9wpopFFE-oJyTlYtmS4BrsRJMSF73QYRB3fu52BzhV769m6_SakjtK--0gJB5ZxnDruw3oph_SIokODYCdKAMG0xNMAKngiq72a4gMw7ZcIu_S3MQw4v6Gv-upFFbMPGxeHZ=w418-h127-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Ubicación seleccionada
EstudiantesIndique el tipo de entrada:
A – F2 - 15
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14KPsiL7lDK179O1R3OGu_pARAH_XNtf7sl5QkiMecjcZy-eMRgMI3he-vRRa9CUQV58hWH142YAxVc3sZz3xazQYMhA8dcSCwVg3xGmQU3abuD6iWuTUwputh-C-l-gl9837d=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YlrgpMhogcVItilj6eKyIlzyX0Ka5syOQOt_Gp9aGg0PIYHWyYFVyJLu5lQZzL_18uzQkihSIvquGF9rQY8japck0LBC1jty-MWWQm--5Dh0dkARoDCrBYaxrB-3xbvon8PdWXg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XL9L8_RCOaVUesddGFsnbyfTjiJ0_HXvumBZ8B2QV2YTKefHdJnXlOceCSo3-f-V3c08ZhRyO4ZxnTJ85KbaLPA7efucBHrUQWR82oa-1mNT-OHFMCT93C_2K2pGdgL7e8cHMmQ=w1164-h859-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Patrones de Diseño
Singleton
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M3w4HeAVRPhWFlQQNqmx9ULjcAOp2Mp2-BonPZgDO0d_CLL8z5uHsaKzjbc7QP6WXJbBhUxTocRxtRKoavgjmKAcA6V8NSXWFJ7H9f_NnfzqThKZr4HtCOMX-losl2Lu5mFww=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fYn_XWANORxq-mNHnPIBe7TL86YDq5Xw9ylQhqyottzIGXQA6ZhTsOoGPZtC54h5YycVh6aOdrwGpALU0S29FBZMTV6OlefvLAsC6oXlNVE-2ESkVh3M76rk6p7g_EQnvpuHocg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0G4L3vVtgkoxJy5zw64JYjLg8Bhu4MicDovDBL8FIvBcPmmj1fiYmKjC99kCl8o1MOMNTSQ3bU_lthT-zO8WkMAriu4nRx7Yy0-zxNkdFth1viLw_6uAE-QGdEPvy8KkQEkZQ-FQ=w1280-h619-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pJjwCD4-ixB9ZLs1v_xTawyXLBrapnRsNkng3PwwsTPI38ajD7H_RAerlrQMLndvR7xNL0n0kbYB_nLZa0hsSehisSAXUyqCFXuUgI-i7rLH820UwSBNxfHLXQ2J_uUdlNMKO=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2j_LXuU_H_e08lvjFwNErvlN9qoJV9VMzfurQEK3mPxdXs749HLmZbWP4lDXyNckWjIAh4Msz8ThdsQmyHfCq0t-hr29PYmytqqFRSLwkOiBfLAkHCcuCwUzZV60YqfNbGm23OMw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JKKluLK5Hodakctd3KQabtrFBxD0__1iuybKS2iKT9XA9WFTByA_sNcntHXc5NnpQBNgEi9k7EBDF638kOGWQ9c4tKhAZMY48AxvYL5xrSbqVOxrVDbxMZ5j6nIg3nXHxPm10_g=w1280-h636-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
State
Estructura
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DAnFsd2IYcWxYi2CsTy6TZ4glmr2rjt0hIXuDDo00V-xQ5vK2TpQ6pDCPdWorSrwu_2-B3YjTQDDkmRERS1iHINZUbpd6zStZmA1iAPdlVmUiO0Q9TBoPu_XiRttgBBfOjO9xhg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3llvOGRp74GYjLQZtMtiUaocXaXAVX_zXErZ3OmJGqC1qWtg6-Z3RtB67OGYVsYTarrgymWUb2nRVgohu4KEIG4HSJ6NuoZSx2ymmdXXFivecj8rtODKEaCnERnaOpSZinXCKD=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv317cm1B-YPYJAs0q-aFR5to3cnyICxk-Ph9KQ1ks2I73OeORjJvYCDS4_NbDylr7DtQSomBmVgAgpFjO2sg39JSRz8OjUZO6kRLXILUD1tcJkCBuE0wot7K3dQSAPHgmdODDgS=w1280-h1004-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Festival de Folklore
Diagrama de Entidad Relación
TIPO_ENTRADA
@id_tipo_entrada
descripcion
SECTOR
@id_sector
color_identificacion
ubicacion
BUTACA
@id_butaca
#nro_fila
DIA_DE_FESTIVAL
@id_día_festival
#id_festival
fecha
hora_inicio
fecha_vto_desc_antic
porcentaje_desc_antic
GRUPO_MUSICAL
@id_grupo
nombre
cant_integrantes
FESTIVAL
@id_festival
nombre
edicion
fecha_inicio
PRECIO
@id_día_festival
@id_tipo_entrada
@#id_sector
tarifa
ENTRADA
@nro_entrada
fecha
hora
importe
#id_día_fetival
#id_butaca
DIAGRAMACION
@#id_día_festival
@orden
hora_presentacion
duracion_presentacion
#id_grupo
DISPONIBILIDAD_
BUTACA
@id_día_festival
@id_butaca
#id_estado
FILA
@nro_fila
@#id_sector
ESTADO
@id_estado
descripcion
