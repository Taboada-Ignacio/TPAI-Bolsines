# PPA_Administración de Campos V1-15.pdf

- **Ruta OneDrive:** `Casos Practicos\PPA_Administración de Campos V1-15.pdf`
- **Páginas totales:** 70 (extraídas: 70)

---

## Página 1

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 1 
 
Proyecto Práctico de Aplicación 
Nombre del Proyecto Práctico de Aplicación: Administración de Campos 
Objetivo del Proyecto Práctico de Aplicación (PPA): 
 
El objetivo del proyecto es desarrollar el modelado de un software de administración de campos, a partir de una 
descripción del dominio. Sólo se muestran algunas vistas de los procesos de requerimientos, análisis y diseño 
del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se construirá. 
Objetivos de la Asignatura con respecto al PPA:  
 
● Analizar los sistemas de información mediante el paradigma de Orientación a Objetos. 
● Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura 
robusta del sistema. 
● Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución 
(Análisis y Diseño) a partir del Modelo de Requerimientos 
● Modelar la arquitectura del producto utilizando patrones arquitectónicos. 
● Resolver situaciones problemáticas del diseño con patrones de diseño. 
● Mapear diagramas de clases a BDR. 
● Analizar y modelar cambios en los requerimientos y su impacto en los modelos existentes. 
Contenidos de la Asignatura que se abordarán en el PPA: 
● Modelado del Comportamiento en el Análisis 
● Modelado de la Estructura en el Análisis 
● Diseño Arquitectónico – Patrones Arquitectónicos 
● Patrones de Diseño 
● Mapeo de estructuras de clases a bases de datos relacionales. 
● Diseño de Interfaces de Usuario 
● Requerimientos de Cambio.

## Página 2

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 2 
Consigna asociada al Proyecto Práctico de Aplicación:  
 
1- Construya para el caso de uso “ Registrar Laboreos en Lotes ” la realización de casos de uso de análisis 
aplicando patrones GRASP de análisis. 
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. 
b. Estructura con diagrama de clases. 
2- Construya para el caso de uso “Generar Reporte de Proyectos de Cultivo” la realización de casos de uso de 
análisis aplicando patrones GRASP de análisis. 
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. 
b. Estructura con diagrama de clases. 
3- Construya la máquina de estado para la clase “Proyecto de Cultivo”, utilizando un diagrama de máquina de 
estados. 
4- Identificar al menos 2 patrones arquitectónicos relevantes y construir una representación gráfica de los 
mismos.  
5- Utilizando un estilo arquitectónico monolítico, construir las siguientes vistas arquitectónicas, definiendo para 
cada vista el punto de vista asociado: 
 Vista Arquitectónica de la funcionalidad. 
 Vista Arquitectónica de Diseño: Componentes e Interfaces 
 Vista Arquitectónica del Despliegue: Nodos y subsistemas principales 
  
6- Rediseña las realizaciones de casos de uso de análisis utilizando el patrón de diseño que considere adecuado 
para resolver los problemas de diseño descriptos a continuación. Modele la vista de la estructura utilizando 
un diagrama de clases; la vista dinámi ca utilizando un diagrama de secuencia y el pseudocódigo o una 
explicación textual que muestre la implementación de los métodos involucrados: 
 
a) Resuelva de manera efectiva y eficiente las siguientes búsquedas en el sistema: 
● Búsqueda de los campos que están habilitados  
● Búsqueda de los lotes pertenecientes al campo seleccionado que tengan proyectos de cultivo vigente 
● Búsqueda de Proyectos de Cultivos Vigentes de cada Lote del Campo seleccionado 
 
b) Resolver la problemática vinculada a la obtención del reporte de proyectos en las diferentes formas de 
visualización que el sistema ofrece, es decir: pantalla, archivo o impreso. Resuelva la forma de creación del 
reporte teniendo en cuenta la estructura del reporte: un encabezado, la grilla de proyectos (detalle) y pie de 
página.  
NOTA: Modelar la dinámica sólo para la generación del reporte en forma impresa. 
 
c) Asegurar evitar colisiones y conflictos al momento que los diferentes usuarios de la Administración Central 
de Agro S.R.L requieran imprimir desde el sistema por ejemplo reportes de cultivo. 
 
d) Resolver la problemática de la recepción de datos de rendimiento de las cosechas provenientes de los 
monitores de las cosechadoras mientras efectúan la cosecha en los lotes, asegurando que será posible 
interpretar la información, sin importar el formato de  la información generada en cada monitor. Los 
monitores con los que se trabaja son AGCO, Case IH y Topcon. Considerar en la vista dinámica del patrón el 
Servicio de Monitor AGCO. 
 
Servicio de Monitor AGCO: recibe la Clave de API (*) de autenticación en formato binario y devuelve un 
vector de String que contiene: la identificación del monitor, fecha y hora, coordenadas geográficas 
(latitud y longitud), nombre del campo y Nº de lote, los datos relevados: velocidad de la cosechadora (en 
Km/hora), nivel de combustible de la cosechadora (en litros), temperatura del motor (en °C), rendimiento 
(en toneladas por hectárea), humedad del grano (en °C), contenido de impurezas (en %).

## Página 3

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 3 
Servicio de Monitor Case IH:  recibe la Clave de API de autenticación en formato String y devuelve un 
único String con los siguientes datos separados por comas: la identificación del monitor, fecha y hora, 
coordenadas geográficas (latitud y longitud), nombre del campo y Nº de lote, lo s datos relevados: 
velocidad de la cosechadora (en metros/segundo), nivel de combustible de la cosechadora (en litros), 
rendimiento (en quintales por hectárea), humedad del grano (en °C), contenido de impurezas (en %), 
temperatura ambiente (en °C). 
 
Servicio de Monitor Topcon:  recibe la Clave de API de autenticación en formato String y devuelve un 
vector de String con los siguientes datos en hexadecimal, ordenados así como se menciona: fecha y hora, 
la identificación del monitor, el modelo de este, nombre del campo y Nº de lote, coordenadas geográficas 
(latitud y longitud), los datos relevados: velocidad de la cosechadora (en km/hora), nivel de combustible 
de la cosechadora (en litros), rendimiento (en quintales/hectárea), humedad del grano (en °C), contenido 
de impurezas (en %), temperatura ambiente (en °C). 
 
El sistema recibirá la misma información que proporciona el Servicio de Monitor AGCO, con el mismo 
orden; cada dato en formato texto, decimal o datetime según corresponda. Los datos relevados 
(velocidad de la cosechadora, rendimiento, humedad del grano, et c.) se deben agrupar en una matriz 
String que contenga una fila por cada tipo de dato relevado, asignando en la primera columna el nombre 
del tipo de dato relevado, en la segunda el valor recibido y en la tercera la abreviatura de la unidad de 
medida. Se d ebe considerar que la velocidad de la cosechadora deberá expresarse en km/hora, y el 
rendimiento en quintales por hectárea, debiendo realizar las conversiones de unidades en los casos en 
que el monitor los proporcione en unidades diferentes. En aquellos ca sos en que los monitores envían 
información adicional a la requerida por el gestor, la misma debe ser descartada. 
 
 
(*) Clave de API, es una clave que sirve como identificador único que se utiliza para autenticar las 
solicitudes asociadas entre diferentes aplicaciones. Considerar que cada monitor de cosechadora tiene su 
propia clave de API para autenticar sus requests y en el sistema se guardarán  las claves de API de cada 
monito. 
 
 
7- Diseñe las interfaces de usuario asociadas a los casos de uso descriptos a trazo fino utilizando prototipos. 
8- Construir el Modelo de Datos relacional a partir del mapeo de las clases persistentes del modelo de clases, 
utilizando como herramienta el DER (Diagrama de Entidad Relación).  
9- Dado el requerimiento de cambio que se describe a continuación, realizar un análisis del impacto de cambio 
en los modelos y luego 
a. Modificar el modelo de dominio para incluir los cambios requeridos. 
b. Identificar los casos de uso que se agregar y/o modifican como consecuencia del cambio solicitado 
 
El cliente ha solicitado que el sistema: 
● administre las restricciones de siembra relacionadas con los cultivos y la cantidad y frecuencia 
de veces que un cultivo puede sembrarse en un mismo lote. 
●  informe de estas restricciones al momento de crear un proyecto de cultivo. 
● genere un reporte de proyectos de cultivo que no cumplen con las restricciones de cultivo para 
un período de tiempo.

## Página 4

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 4 
Criterios de evaluación del PPA (Si aplica): no aplica 
Descripción del Dominio asociado al Proyecto Práctico de Aplicación 
 
Agro SRL es una empresa que tiene varios campos ubicados en la zona de la provincia de Córdoba. La Administración 
central de la empresa está localizada en uno de esos campos, donde deberá instalarse el servidor del sistema, y los 
demás campos funcionarán como estaciones de trabajo remotas. Para establecer la comunicación entre el servidor 
y las estaciones de trabajo de deberá realizar una red privada virtual (VPN). Se requiere para los puestos de trabajo 
en los campos que cuenten únicamente con una conexión de internet y que la aplicación, desarrollada con tecnología 
Web, pueda operar bajo cualquiera de los siguientes navegadores: Internet Explorer 11, Mozilla Firefox 51.0.1 y 
Google Chrome v56.0 (y versiones superiores). 
Cada uno de los campos de la empresa está compuesto por lotes que se identifican con un número de lote y cuya 
superficie se expresa en hectáreas (has.). Cada lote tiene asignado un Tipo de Suelo. Los Tipos de Suelo se identifican 
con números (desde el 1 al  5) y están definidos a nivel nacional (de acuerdo con los porcentajes de minerales, 
existencias de lagunas, etc.). De acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 
apto para Soja, Maní, Girasol).  Cuando se decide s embrar un cultivo en un lote (comienza un nuevo proyecto de 
cultivo para ese lote) deben realizarse una serie de laboreos en éste, antes y después de efectuar la siembra hasta el 
momento de la cosecha. Tanto los laboreos como los momentos de laboreo y el o rden en el que los momentos de 
laboreo se realizan, dependen del cultivo (Ej.: para Soja los laboreos son Arar, Rastrillar, Sembrar, Escardillar, 
Cosechar). La división del campo en lotes puede modificarse, es decir subdividir en más lotes un campo o unir lotes 
en uno sólo, esto último siempre que tengan el mismo tipo de suelo. 
 
Una de las necesidades que plantea la empresa respecto del software que se 
debe construir es que debe permitir visualizar para cada cultivo cuales son 
los laboreos ideales que deben llevarse a cabo y el momento en que deben 
realizarse. Para los cultivos qu e necesitan fumigaciones el sistema debe 
sugerir posibles tratamientos a aplicar de acuerdo con la plaga (langosta, 
hongo, etc.) que se quiere combatir. Estos tratamientos pueden incluir uno o 
más agroquímicos indicando para cada uno la dosis a aplicar por hectárea.  
Otro de los requerimientos planteados apunta a que se pueda saber para 
cada lote cuáles fueron los proyectos de cultivo efectuados y los laboreos 
realizados en cada uno. 
Cuando se inicia un proyecto de cultivo en un lote se realizan una serie de 
laboreos (arar, rastrillar, rolar, fumigar, dependiendo del cultivo), en ese 
momento el proyecto está en preparación. Luego se realiza la siembra del 
cultivo. Si por alguna razón el cultivo no nace, puede sembrarse nuevamente 
o bien abandonarse (cancelarse) el proyecto de cultivo. Luego de que el 
cultivo ha nacido, también deben efectuarse una serie de laboreos (fumigar, 
escardillar, etc.), se dice que el proyecto está en la etapa d e laboreo post 
siembra. Cuando el cultivo está maduro, se lo cosecha, de este modo finaliza 
el proyecto. En cualquier momento, por alguna situación anormal (incendio, 
inundación, piedra, sequía) el cultivo puede llegar a dañarse al punto de tener que cancelar el proyecto de cultivo. 
Para todos los reportes e informes estadísticos que emitirá el sistema, se requiere que sean visualizados tanto en 
formato de grilla como en formato gráfico, y que puedan ser exportarlos a Excel y Archivo.  
El sistema deberá contemplar que cada usuario acceda mediante una clave, la misma deberá contener como mínimo 
6 caracteres alfanuméricos y deberá estar encriptada.  
A los usuarios se les asignarán perfiles que determinarán a qué funcionalidades tendrá acceso y esto debe verificarse 
en el momento del logueo.

## Página 5

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 5 
Se deberá desarrollar un Módulo Mobile que permita enviar información de los proyectos de cultivos a dispositivos 
móviles (tablets y smartphones) y también mediante los mismos actualizar el estado de las labores realizadas. El 
Módulo Mobile deberá comunica rse con el Servidor Web de las Administración Central mediante el protocolo de 
comunicación HTTP, como si fuera un sitio WEB. Además, el sistema deberá procesar diferentes tipos de datos de 
rendimientos enviados en tiempo real desde los monitores de rendimiento (AGCO, Case IH, Topcon), ubicados en las 
cosechadoras. Estos dispositivos pueden enviar, a una determinada frecuencia (que es configurada desde el monitor) 
datos acerca del rendimiento, humedad y porcentaje de impurezas del cultivo, como así también del estado actual 
de la cosechadora (nivel de combustible, presión del motor, porcentaje de aceite, etc.). Estos datos permiten generar 
mapas de rendimiento de cada lote, en los cuales se resaltan con diferentes colores las zonas que más producen y 
las que están dando peor resultado. Con esta información es posible tomar acciones correctivas para mejorar el 
rendimiento en próximas campañas, por ejemplo, colocando mayor cantidad de abono en las zonas donde el 
rendimiento ha sido más pobre.  
Agro SRL ha requerido que la base de datos de la aplicación sea desarrollada en Oracle 12c debido a que cuentan con 
licencias de ese motor de base de datos. 
 
Glosario 
 
Término Definición 
Sistema Término utilizado en forma indistinta con el término producto o producto de software, para 
referir al sistema de información que se espera que se diseñe. 
 
Tipo de Laboreo Define cada uno de los trabajos que deben realizarse para poder obtener la cosecha de un 
cultivo durante la vigencia de un proyecto de cultivo iniciado en un lote. Los tipos de 
laboreos dependen del cultivo. 
Momento de 
Laboreo 
Instante de tiempo en el que se recomienda realizar un tipo de laboreo. Los tipos de laboreo 
pueden variar de momento y orden, de acuerdo al cultivo. 
(Ej.: para Trigo escardillar a 1 mes de sembrado) 
Proyecto de Cultivo Conjunto de actividades coordinadas y organizadas con fechas de inicio y fin definidas cuyo 
propósito es la obtención de la cosecha de un determinado cultivo en un lote determinado. 
Quintal (qq) Unidad de medida que se utiliza en la agricultura, 1 quintal equivale a 100 kilos. 
Monitor de 
rendimiento 
● Dispositivo instalado en la cosechadora que mide el rendimiento y la humedad del grano a 
medida que se va cosechando un cultivo. También puede proporcionar datos sobre el 
estado de la cosechadora (cantidad de combustible, presión del motor, temperatura del 
motor, etc.). 
Mapa de 
rendimiento 
● Un mapa de rendimiento es una sucesión de puntos geo posicionados que muestran una 
escala de colores que indican patrones de comportamiento dentro del lote.  
 
Definición del Producto afectado al desarrollo del proyecto 
Objetivo del Producto 
Administrar un conjunto de campos y los proyectos de cultivos que se realizan en cada uno de sus lotes, como 
así también los laboreos que se realizan en el contexto de cada proyecto; brindando información vinculada a la 
gestión de proyectos de cultivo, campos y lotes. 
Requerimientos Funcionales (Alcances) 
🢚 Administración de Campos y Lotes 
🢚 Administración de Tipos de Suelo 
🢚 Administración de Cultivos 
🢚 Administración de Tipos y Momentos de Laboreo 
🢚 Administración de Plagas y tratamientos

## Página 6

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 6 
🢚 Administración de Agroquímicos 
🢚 Gestión de los Proyectos de Cultivo y Laboreos 
🢚 Exportación de datos de cosechas desde las cosechadoras. 
🢚 Administración de usuarios, perfiles y permisos de usuario 
🢚 Generación y emisión de estadísticas de rendimiento de cultivos 
🢚 Generación y emisión de reportes vinculados a campos, lotes y proyectos de cultivo 
 
No contempla 
🢚 Gestión de compras de semillas y agroquímicos 
 
Reglas de Negocio 
Reglas de Negocio 
Nº Nombre Regla de Negocio – Descripción 
1 Tratamiento de 
Plagas 
Una plaga se puede combatir con varios tratamientos. Cada tratamiento implica una dosis 
específica de un agroquímico.  
2 Cultivos para Tipos 
de Suelo 
Los cultivos que pueden sembrarse en cada lote dependen del tipo de suelo que este 
tenga. 
3 Laboreos para 
Cultivo 
Tanto los laboreos como los momentos de laboreo y el orden en el que los momentos de 
laboreo se realizan, dependen del cultivo (Ej.: para Soja los laboreos son Arar, Rastrillar, 
Sembrar, Escardillar, Cosechar). 
 
4 Estados del 
Proyecto 
Un proyecto de cultivo puede estar en un único estado en un momento determinado y sus 
cambios de estado dependen de los laboreos que se realizan en el lote. 
5 Proyectos de 
Cultivo 
Un proyecto de cultivo está asociado a un único lote. Un Lote sólo puede tener un solo 
proyecto de cultivo que esté en estado Vigente en un momento del tiempo. 
6 Relación 
Campo/Lote 
Un campo está compuesto por uno o más lotes. Los lotes pueden cambiar su configuración 
uniéndose unos con otros o dividiéndose. Se debe controlar que la superficie del campo 
sea la correcta al momento de la creación y/o modificación de los lotes que lo componen. 
7 Lotes y tipos de 
suelo Un lote tiene un único tipo de suelo. 
8 Tipos de Suelo 
Los Tipos de Suelo se identifican con números (desde el 1 al 5) y están definidos a nivel 
nacional (de acuerdo con los porcentajes de minerales, existencias de lagunas, etc.). De 
acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 apto 
para Soja, Maní, Girasol).

## Página 7

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 7 
Listado de Casos de Uso 
(Los casos de uso sombreados están especificados) 
Nro. CU Nombre Objetivo 
1.  Registrar Laboreos en Lotes Registrar uno o más laboreos realizados para cada Lote 
seleccionado de un campo. 
2.  Generar Reporte de Proyectos de 
Cultivo 
Generar un reporte de los proyectos de cultivo en función 
de un conjunto de filtros aplicados 
3.  Modificar Laboreos en Lotes Modificar uno o más laboreos realizados a un lote 
seleccionado de un campo. 
4.  Consultar Laboreos en Lotes Consultar uno o más laboreos realizados para cada lote 
seleccionado de un campo. 
5.  Cancelar Laboreos en Lotes Registrar la cancelación de uno o más laboreos realizados 
para cada lote seleccionado de un campo. 
6.  Registrar Usuario Registrar los datos de una persona que tendrá acceso al 
sistema. 
7.  Iniciar Sesión Crear una sesión de trabajo para un usuario registrado en 
el sistema y verificar los permisos de acceso a las 
funcionalidades del software. 
8.  Cerrar Sesión Cerrar una sesión de trabajo iniciada por un usuario 
registrado en el sistema. 
9.  Modificar Usuario Modificar los datos permitidos de un usuario. 
10.  Eliminar Usuario Eliminar un usuario y sus permisos asociados. 
11.  Consultar Usuario Brindar información sobre uno o más usuarios y sus 
permisos asignados 
12.  Registrar Campo Registrar los datos de un campo y todos los lotes que este 
contiene. 
13.  Modificar Campo Modificar los datos permitidos de un campo y/o de los 
lotes que este contiene. 
14.  Consultar Campo Consultar los datos de uno o más campos y de todos los 
lotes que este contiene. 
15.  Eliminar Campo Eliminar un campo y todos los lotes que este contiene. 
16.  Registrar Tipo de Suelo Registrar los datos asociados a un tipo de suelo. 
17.  Modificar Tipo de Suelo Modificar los datos permitidos de un tipo de suelo. 
18.  Consultar Tipo de Suelo Consultar los datos de uno o más tipos de suelo. 
19.  Eliminar Tipo de Suelo Eliminar de un tipo de suelo. 
20.  Registrar Estado Registrar las características de un estado. 
21.  Modificar Estado Modificar los datos permitidos de un estado. 
22.  Eliminar Estado Eliminar un estado registrado. 
23.  Consultar Estado Consultar información sobre uno o más estados 
registrados. 
24.  Registrar Cultivo Registrar las características de un cultivo 
25.  Modificar Cultivo Modificar los datos permitidos de un cultivo. 
26.  Eliminar Cultivo Eliminar un cultivo registrado. 
27.  Consultar Cultivo Consultar los datos de uno o más cultivos. 
28.  Registrar Empleado Registrar los datos personales de un empleado. 
29.  Modificar Empleado Modificar los datos permitidos de un empleado. 
30.  Eliminar Empleado Eliminar un empleado registrado. 
31.  Consultar Empleado Consultar información sobre uno o más empleados 
registrados. 
32.  Registrar Tipo de Laboreo Registrar los datos de un tipo de laboreo.

## Página 8

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 8 
Nro. CU Nombre Objetivo 
33.  Modificar Tipo de Laboreo Modificar los datos permitidos de un tipo de laboreo 
34.  Eliminar Tipo de Laboreo Eliminar un tipo de laboreo registrado. 
35.  Consultar Tipo de Laboreo Brindar información sobre uno o más tipos de laboreo 
36.  Asignar Laboreos para Cultivo Realizar la asignación de laboreos y los momentos de 
laboreo apropiados para un cultivo. 
37.  Consultar Asignación de Laboreos 
para Cultivo 
Consultar las asignaciones de laboreos registradas para 
un cultivo. 
38.  Registrar Momento de Laboreo Registrar los datos de un momento de laboreo. 
39.  Modificar Momento de Laboreo Modificar los datos permitidos de un momento de 
laboreo. 
40.  Eliminar Momento de Laboreo Eliminar un momento de laboreo registrado. 
41.  Consultar Momento de Laboreo Brindar información sobre uno o más momentos de 
laboreo. 
42.  Registrar Plaga Registrar los datos de una plaga. 
43.  Modificar Plaga Modificar los datos permitidos de una plaga. 
44.  Consultar Plaga Consultar información sobre una o más plagas. 
45.  Eliminar Plaga Eliminar los datos de una plaga 
46.  Registrar Agroquímico Registrar los datos de un agroquímico para el tratamiento 
de plagas. 
47.  Modificar Agroquímico Modificar los datos permitidos de un agroquímico. 
48.  Consultar Agroquímico Consultar información sobre uno o más agroquímicos. 
49.  Eliminar Agroquímico Eliminar los datos de un agroquímico. 
50.  Registrar Tratamiento para Plaga Registrar los datos de un tratamiento para una plaga en 
un determinado cultivo. 
51.  Modificar Tratamiento para Plaga Modificar los datos permitidos de un tratamiento para 
plagas. 
52.  Consultar Tratamiento para Plaga Consultar información sobre uno o más tratamientos 
para plagas. 
53.  Eliminar Tratamiento para Plaga Eliminar los datos de un tratamiento para plagas. 
54.  Registrar Permiso Registrar un permiso que se asociará a un usuario. 
55.  Modificar Permiso Modificar los datos permitidos de un permiso. 
56.  Eliminar Permiso Eliminar un permiso registrado. 
57.  Consultar Permiso Consultar información sobre uno o más permisos 
registrados en el sistema. 
58.  Registrar Asignación de Permisos a 
Usuario 
Registrar la asignación de permisos a un usuario. 
59.  Consultar Permisos de Usuario Consultar información sobre uno o más permisos 
asignados a un usuario. 
60.  Eliminar Permisos de Usuario Realizar la eliminación lógica de los permisos de un 
usuario. 
61.  Generar Reporte de Tratamientos 
para Plagas 
Generar un informe de tratamientos disponibles para 
una o más plagas. 
62.  Generar Histórico de Proyectos de 
Cultivo por Campo/Lote 
Generar un reporte que muestre para un período de 
tiempo, los proyectos de cultivo realizados para un 
campo/lote 
63.  Registrar Rol Registrar un rol que se asociará a los usuarios del sistema. 
64.  Modificar Rol Modificar los datos permitidos de un rol. 
65.  Eliminar Rol Eliminar un rol registrado.

## Página 9

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 9 
Nro. CU Nombre Objetivo 
66.  Consultar Rol Consultar información sobre uno o más roles registrados 
en el sistema. 
67.  Registrar Proyecto de Cultivo Registrar los datos de un proyecto de cultivo que se 
realizará en un lote de un campo. 
68.  Modificar Proyecto de Cultivo Modificar los datos permitidos de un proyecto de cultivo 
que se realizará en un lote de un campo. 
69.  Consultar Proyecto de Cultivo Consultar los datos de uno o más proyectos de cultivo. 
 
70.  Cambiar Password Registrar un cambio de palabra clave realizado por un 
usuario. 
71.  Cancelar Proyecto de Cultivo Registrar la situación de abandono de un proyecto de 
cultivo. 
72.  Importar datos relevados por Monitor Importar y registrar los datos de cosecha relevados y 
enviados por un monitor de rendimiento en un instante 
de tiempo. 
73.  Generar Estadística de Rendimiento 
de Lotes 
Generar estadística comparativa que muestre para un 
período de tiempo, el rendimiento de los cultivos 
cosechados en los campos/lotes. 
74.  Generar Reporte de Laboreos en 
Proyectos 
Generar un reporte de laboreos realizados en uno o más 
proyectos de cultivo.

## Página 10

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 10 
Diagramas de Casos de Uso – Vista esencial

## Página 11

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 11 
Diagramas de Casos de Uso – Vista por alcances 
 
Administración de Tipos y Momentos de Laboreo

## Página 12

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 12 
 
Administración de Cultivos 
 
Administración de Tipos de Suelo 
 
 
 
Administración de Plagas y Tratamientos 
 
 
 
 
 
 
 
 
Gestión de Proyectos de Cultivo y Laboreo

## Página 13

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 13 
 
 
 
Generación de Reportes 
 
 
 
 
 
 
 
 
 
 
 
Administración de Usuarios y Permisos

## Página 14

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 14 
 
 
 
Administración de Campos

## Página 15

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 15 
Especificación de Casos de Uso 
 
Nombre del Caso de Uso: Registrar Laboreos en Lotes Nro. De Orden: 1 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☒ Mediano    ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Encargado de Laboreos (EL) Actor Secundario: No Aplica 
Tipo de Caso de Uso:  ☒ Concreto ☐ Abstracto 
Objetivo: Registrar uno o más laboreos realizados para cada Lote seleccionado de un campo. 
Precondiciones: usuario logueado 
Post- Condiciones:  Éxito: Laboreo/s realizado/s registrado/s. 
Fracaso 1: No existe ningún proyecto de cultivo vigente para los lotes seleccionados. 
Fracaso 2: El EL cancela el caso de uso. 
Fracaso 3: El EL no confirma la registración del/los laboreo/s. 
Fracaso 4: No existe ningún campo habilitado. 
Curso Normal Alternativas 
1. EL: Comienza cuando selecciona la opción Registrar 
Laboreos en un Lote 
 
2. Sistema: muestra el nombre de todos los campos 
habilitados y solicita se seleccione uno. 
2.A. Sistema: no encuentra campos habilitados. 
2.A.1. Sistema: informa la situación  
2.A.2. Sistema: se cancela el caso de uso. 
3. EL: selecciona el campo para el cual quiere registrar el 
laboreo. 
 
4. Sistema: busca los lotes que corresponden a ese campo 
que tengan Proyecto de Cultivo vigente (significa que no 
esté en estado final) y encuentra al menos uno. De cada 
uno de ellos muestra el número de lote y la fecha de 
Inicio del proyecto vigente y solicita que se seleccionen 
los lotes para los que quiere registrar laboreos. 
4.A. Sistema: busca lotes que corresponden a ese 
campo que tengan Proyecto de Cultivo vigente 
(significa que no esté en estado final) y no encuentra 
ninguno. 
4.A.1. Sistema: muestra un mensaje informando la 
situación 
4.A.2. Se cancela el caso de uso 
5. EL: selecciona uno o más lotes.  
6. Sistema: Para cada lote elegido muestra el nombre del 
cultivo y los laboreos efectuados en ese lote, 
correspondientes al proyecto vigente. 
 
7. Sistema: busca y muestra los tipos de laboreo aplicables 
al cultivo. 
 
8. Sistema: Para cada laboreo que se ha realizado y se 
desea registrar solicita que seleccione un tipo de 
laboreo. 
 
9. EL: selecciona un laboreo.  
10. Sistema: solicita se ingrese la fecha y hora de comienzo, 
fecha y hora de fin del laboreo. 
 
11. EL: ingresa la fecha y hora de comienzo, fecha y hora de 
fin del laboreo. 
  
12. Sistema: valida las fechas y horas de inicio y fin del 
laboreo y son correctos. (ver observación 2) 
12.A. Sistema: Las fechas y/u horas no son correctas. 
12.A.1. Sistema: muestra un mensaje informando la 
situación y solicita que se ingresen nuevamente. 
12.A.2. EL: ingresa nuevamente los datos.

## Página 16

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 16 
Nombre del Caso de Uso: Registrar Laboreos en Lotes Nro. De Orden: 1 
13. Sistema: muestra los empleados y solicita se seleccione 
el empleado que efectuó el laboreo. 
 
14. EL: selecciona el empleado.  
15. Sistema: Para cada laboreo a registrar solicita 
confirmación para efectuar el registro. 
 
16. EL: confirma el registro. 16.A. EL: no confirma el registro. 
16.A.1. Sistema: Se cancela el caso de uso. 
17. Sistema: registra el laboreo realizado con los siguientes 
datos: fecha comienzo, hora comienzo, fecha fin, hora 
fin, empleado que lo efectuó, laboreo realizado. 
 
18. Sistema: Valida el tipo de laboreo, y NO es siembra ni 
cosecha. 
18.A. Sistema: El tipo de laboreo es siembra. 
18.A.1. Sistema: Actualiza el estado del proyecto de 
cultivo a En Siembra. 
 
18.B. Sistema: El tipo de laboreo es cosecha. 
18.B.1. Sistema: Actualiza el estado del proyecto de 
cultivo a Cosechado. 
19. EL: Selecciona la opción para finalizar el registro de 
laboreos. 
 
20. Fin del caso de uso.  
Observaciones: 
1. El EL puede cancelar el caso de uso en cualquier momento eligiendo la opción para tal fin. 
2. Valida fecha de inicio menor que la fecha de fin y que no sean mayores a la fecha del día. 
Asociaciones de Extensión: No aplica 
Asociaciones de Inclusión: No aplica 
Asociaciones de Generalización: No aplica

## Página 17

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 17 
Paquete: N/A 
Nombre del Caso de uso: Registrar Laboreos en Lotes Nro. de Orden: 1 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☒ Mediano    ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Encargado de Laboreos (EL) Actor Secundario: no aplica 
Tipo de Caso de uso:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Registrar uno o más laboreos realizados para cada Lote seleccionado de un campo. 
Flujo Básico 
1.  EL: selecciona la opción Registrar Laboreos en un Lote 
2. Sistema: muestra el nombre de todos los campos habilitados y solicita se seleccione uno. 
3. EL: selecciona el campo para el cual quiere registrar el laboreo 
4. Sistema: busca los lotes que corresponden a ese campo que tengan Proyecto de Cultivo vigente (significa que no 
esté en estado final) y encuentra al menos uno. De cada uno de ellos muestra el número de lote y la fecha de 
Inicio del proyecto vigente. Se solicita que se seleccionen los lotes para los que quiere registrar laboreos. 
5. EL: selecciona uno o más lotes. 
6. Sistema: Para cada lote elegido muestra el nombre del cultivo y los laboreos efectuados en ese lote, 
correspondientes al proyecto vigente. 
7. Sistema: busca y muestra los tipos de laboreo aplicables al cultivo. 
8. Sistema: Para cada laboreo que se ha realizado y se desea registrar solicita que seleccione un tipo de laboreo. 
9. EL: selecciona un laboreo. 
10. Sistema: solicita se ingrese la fecha y hora de comienzo, fecha y hora de fin del laboreo. 
11. EL: ingresa la fecha y hora de comienzo, fecha y hora de fin del laboreo. 
12. Sistema: valida las fechas y horas de inicio y fin del laboreo y son correctos. (ver observación 2) 
13. Sistema: muestra los empleados y solicita se seleccione el empleado que efectuó el laboreo. 
14. EL: selecciona el empleado. 
15. Sistema: Para cada laboreo a registrar solicita confirmación para efectuar el registro. 
16. EL: confirma el registro. 
17. Sistema: registra el laboreo realizado con los siguientes datos: fecha comienzo, hora comienzo, fecha fin, hora 
fin, empleado que lo efectuó, laboreo realizado. 
18. Sistema: Valida que el tipo de laboreo no sea siembra ni cosecha. 
19. EL: Selecciona la opción para finalizar el registro de laboreos. Fin del caso de uso. 
Flujos Alternativos 
A1: No existe ningún proyecto de cultivo vigente para los lotes seleccionados. 
A2: El actor decide cancelar el caso de uso. 
A3: El actor no confirma registro de laboreos. 
A4: El tipo de laboreo es siembra. 
A5: El tipo de laboreo es cosecha. 
A6: Las fechas y/u horas de inicio y fin de laboreo no son correctas. 
Observaciones: 
1. El actor puede cancelar el caso de uso en cualquier momento eligiendo la opción para tal fin. 
2. Valida fecha de inicio menor que la fecha de fin y que no sean mayores a la fecha del día.

## Página 18

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 18 
Nombre del Caso de Uso: Generar Reporte de Proyectos de Cultivo Nro. De Orden: 2 
Prioridad:                  ☐ Alta                                ☒ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☐ Mediano    ☒ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Proyectos (ADM) Actor Secundario: No Aplica 
Tipo de Caso de Uso:  ☒ Concreto ☐ Abstracto 
Objetivo: Generar un reporte de los proyectos de cultivo en función de un conjunto de filtros aplicados. 
Precondiciones: usuario logueado. 
Post- Condiciones:  Éxito 1: Reporte de Proyectos generado e impreso. 
Éxito 2: Reporte de Proyectos generado y visualizado en pantalla. 
Éxito 3: Reporte de Proyectos generado y archivo guardado. 
Éxito 4: Informe de Reporte de Proyectos sin datos encontrados para los filtros 
seleccionados. 
Fracaso 1: El ADM no confirma los filtros aplicados. 
Fracaso 2: El ADM cancela la operación. 
Curso Normal Alternativas 
1. ADM: Comienza cuando selecciona la opción Generar 
Reporte de Proyectos. 
 
2. Sistema: Busca los campos habilitados, los muestra, y 
solicita al usuario que seleccione los campos para los que 
quiere generar el reporte. 
 
3. ADM: Selecciona los campos para los que se quiere 
generar el reporte (pueden seleccionarse todos los 
campos). 
 
4. Sistema: Busca los lotes asociados a los campos 
seleccionados y los muestra, solicitando que se 
seleccionen los lotes para los que se quiere generar el 
reporte (pueden seleccionarse todos). 
 
5. ADM: Selecciona los lotes para los que quiere generar el 
reporte. 
 
6. Sistema: Busca los cultivos y tipos de suelos existentes y 
solicita que se seleccionen. 
 
7. ADM: Selecciona los cultivos y tipos de suelo para los que 
quiere generar el reporte. 
 
8. Sistema: Solicita el periodo para el cual se desea generar 
el reporte. 
  
9. ADM: Ingresa el período.  
10. Sistema: Valida que se ingrese un período y que sea 
válido (la fecha desde sea menor que la fecha hasta) y lo 
es. 
10.A. Sistema: El período ingresado no es válido. 
10.A.1. Sistema: Solicita se ingrese nuevamente el 
período. 
10.A.2. ADM: Ingresa el período. 
 
10.B. Sistema: Verifica que no se ingresó período. 
10.B.1. Sistema: Solicita que se ingrese el período. 
10.B.2. ADM: Ingresa el período. 
11. Sistema: Solicita confirmación de los filtros aplicados.  
12. ADM: Confirma la generación del reporte con los filtros 
aplicados. 
12.A. ADM: No confirma la generación del reporte 
con los filtros aplicados. 
12.A.1. Sistema: Se cancela el caso de uso.

## Página 19

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 19 
13. Sistema: Busca en función de los filtros y el período 
seleccionado la siguiente información: para cada lote del 
campo muestra el tipo de suelo, los cultivos de los 
proyectos de cultivo que se han aplicado en el periodo 
solicitado, el estado de cada proyecto de cultivo, la fecha 
de inicio y fin de cada proyecto de cultivo, y encuentra 
datos que cumplan el criterio. 
13.A. Sistema: No encuentra datos que cumplan 
con el criterio. 
13.A.1. Sistema: Genera el reporte sin datos e 
informa la situación. 
13.A.2. Sistema: Fin del caso de uso. 
14. Sistema: Solicita se seleccione la forma de visualización 
para el reporte. 
 
15. ADM: selecciona la opción de visualización impresión en 
papel 
15.A. ADM: Selecciona la opción de visualización 
por pantalla. 
15.A.1. Sistema: Muestra la información. 
15.A.2 Fin del caso de uso. 
 
15.B. ADM: Selecciona la opción de visualización en 
archivo. 
15.B.1. Sistema: solicita se ingrese el nombre para 
el archivo y seleccione el lugar para almacenarlo. 
15.B.2. ADM: Ingresa nombre de archivo y 
selecciona el lugar para almacenarlo. 
15.B.3 Sistema: genera el archivo. 
15.B.4. Sistema: Fin del caso de uso. 
16. Sistema: Imprime el Reporte de Proyectos.  
17. Sistema: Fin de caso de uso.  
Observación: El ADM puede cancelar la operación seleccionando la opción correspondiente en cualquier 
momento. 
Asociaciones de Extensión, Inclusión y Generalización: No aplican

## Página 20

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 20 
Paquete: n/a 
Nombre del Caso de Uso: Generar Reporte de Proyectos de Cultivo Nro. De Orden: 2 
Prioridad:                  ☐ Alta                                ☒ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☐ Mediano    ☒ Complejo  ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Proyectos (ADM) Actor Secundario: No Aplica 
Tipo de Caso de Uso:  ☒ Concreto ☐ Abstracto 
Objetivo: Generar un reporte de los proyectos de cultivo en función de un conjunto de filtros aplicados. 
Flujo Básico 
1. ADM: Comienza cuando selecciona la opción Generar Reporte de Proyectos. 
2. Sistema: Busca los campos habilitados, los muestra, y solicita al usuario que seleccione los campos para los que 
quiere generar el reporte. 
3. ADM: Selecciona los campos para los que se quiere generar el reporte (pueden seleccionarse todos los campos). 
4. Sistema: Busca los lotes asociados a los campos seleccionados y los muestra, solicitando que se seleccionen los 
lotes para los que se quiere generar el reporte (pueden seleccionarse todos). 
5. ADM: Selecciona los lotes para los que quiere generar el reporte. 
6. Sistema: Busca los cultivos y tipos de suelos existentes y solicita que se seleccionen. 
7. ADM: Selecciona los cultivos y tipos de suelo para los que quiere generar el reporte. 
8. Sistema: Solicita el periodo para el cual se desea generar el reporte.  
9. ADM: Ingresa el período. 
10. Sistema: Valida que se ingrese un período y que sea válido (la fecha desde sea menor que la fecha hasta) y lo es. 
11. Sistema: Solicita confirmación de los filtros aplicados. 
12. ADM: Confirma la generación del reporte con los filtros aplicados. 
13. Sistema: Busca en función de los filtros y el período seleccionado la siguiente información: para cada lote del 
campo muestra el tipo de suelo, los cultivos de los proyectos de cultivo que se han aplicado en el periodo 
solicitado, el estado de cada proyecto de cultivo, la fecha de inicio y fin de cada proyecto de cultivo, y encuentra 
datos que cumplan el criterio. 
14. Sistema: Solicita se seleccione la forma de visualización para el reporte. 
15. ADM: selecciona la opción de visualización impresión en papel 
16. Sistema: Imprime el Reporte de Proyectos. Fin del Caso de Uso. 
Flujos Alternativos 
A1. El período ingresado no es válido. 
A2. No se ingresó período. 
A.3 El Actor no confirma la generación del reporte con los filtros aplicados. 
A.4. No se encuentran datos que cumplan con el criterio de filtro aplicado. 
A.5. Opción de visualización del reporte por pantalla. 
A.6. Opción de visualización del reporte en archivo. 
Observaciones:  
1. El ADM puede cancelar la operación seleccionando la opción correspondiente en cualquier momento.

## Página 21

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 21 
 
Nombre del Caso de Uso: Registrar Campo Nro. De Orden: 12 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☒ Mediano    ☐ Complejo  ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Campos (AC) Actor Secundario: No Aplica 
Tipo de Caso de Uso:  ☒ Concreto ☐ Abstracto 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Categoría:     ☒ Esencial                ☐ Soporte            Significativo para la Arquitectura:  ☒ Si   ☐No 
Complejidad:   ☐ Simple   ☒ Mediano   ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Objetivo: Registrar los datos de un campo y todos los lotes que este contiene. 
Precondiciones: Usuario logueado con perfil de administrador 
Post- Condiciones:  Éxito 1: Campo y al menos un lote registrados. 
Fracaso 1: El AC selecciona la opción cancelar. 
Fracaso 2: El AC no confirma los datos. 
Curso Normal Alternativas 
1. El caso de uso comienza cuando el AC selecciona la opción 
“Registrar Campo”. 
 
2. Sistema: Solicita se ingrese el nombre del Campo.  
3. AC: Ingresa el nombre del Campo.  
4. Sistema: Valida que el nombre del Campo no se repita para 
otro Campo ya registrado, y no se repite. 
4.A. Sistema: Valida que el nombre del Campo no se 
repita para otro Campo ya registrado, y se repite. 
4.A.1. Sistema: Informa la situación y permite el 
ingreso de otro nombre para el Campo. 
5. Sistema: Solicita se ingrese la superficie del Campo ( ver 
observación 2). 
 
6. AC: Ingresa la superficie del Campo.  
7. Sistema: Para cada lote solicita el ingreso de los datos del 
lote (ver observación 3). 
 
8. AC. Ingresa el número de lote  
9. Sistema: valida que el número de lote no se repita con otro 
ingresado previamente para ese campo y no se repite. 
9.A. Sistema: valida que el número de lote no se 
repita con otro ingresado previamente para ese 
campo y se repite. 
9.A.1 Sistema:  Informa la situación y permite el 
ingreso de otro número para el lote. 
10. Sistema: solicita se ingrese la superficie del lote.  
11. AC: ingresa la superficie del lote. (ver observación 2).  
12. Sistema: solicita se seleccione el tipo de suelo del lote  
13. AC: selecciona el tipo de suelo  
14. Sistema: Muestra los datos de cada lote registrado para ese 
Campo y solicita se informe fin de ingreso de lotes. 
 
15. AC: informa fin de ingreso de lotes  
16. Sistema:  valida que la suma de todas las superficies de los 
lotes coincida con la superficie total del campo y coincide 
18.A. Sistema: valida que la sume de todas las 
superficies de los lotes coincida con la superficie total 
del campo y NO coincide. 
18.A.1. Sistema:  informa la situación y permite se 
corrija la superficie de los lotes. 
17. Sistema: solicita confirmación para registrar campo

## Página 22

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 22 
18. AC: confirma el registro del campo y sus lotes 20.A. AC: No confirma el registro del campo y sus 
lotes. 
20.A.1. Sistema: Cancela caso de uso 
19. Sistema: Valida la existencia de los datos obligatorios y 
registra un nuevo Campo con los siguientes datos: 
a. Nombre (obligatorio). 
b. Superficie (obligatorio). 
c. Lote/s (obligatorio al menos uno). 
i. Número (obligatorio) 
ii. Superficie (obligatorio) 
iii. Tipo de Suelo (obligatorio) 
21.A. Sistema: valida la existencia de datos 
requeridos y falta alguno. 
21.A.1. Sistema:  informa la situación y permite se 
ingresen los datos obligatorios faltantes. 
20. Fin del caso de uso.  
Observaciones:  
1. El AC puede cancelar la operación en cualquier momento. 
2. La superficie está en hectáreas, no se aceptan nulos. 
3. Se debe ingresar al menos un lote. 
Requerimientos no Funcionales Asociados: No Aplica 
Reglas de Negocio Asociadas:  
6. Relación Campo/Lote 
7. Lotes y tipos de suelo 
Asociaciones de Inclusión: No Aplica 
Asociaciones de Extensión:  No Aplica 
Use case donde se incluye:  No Aplica 
Use Case al que extiende:  No Aplica 
Use Case de Generalización:  No Aplica

## Página 23

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 23 
Nombre del Caso de uso: Registrar Campo Nro. de Orden: 12 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☒ Mediano    ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica 
Tipo de Caso de uso:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Registrar los datos de un campo y todos los lotes que este contiene. 
Flujo Básico 
1.  AC: selecciona la opción “Registrar Campo”. 
2. Sistema: Solicita se ingrese el nombre del Campo. 
3. AC: Ingresa el nombre del Campo. 
4. Sistema: Valida que el nombre del Campo no se repita para otro Campo ya registrado, y no se repite. 
5. Sistema: Solicita se ingrese la superficie del Campo (ver observación 2). 
6. AC: Ingresa la superficie del Campo. 
7. Sistema: Para cada lote solicita el ingreso de los datos del lote (ver observación 3). 
8. AC. Ingresa el número de lote 
9. Sistema: valida que el número de lote no se repita con otro ingresado previamente para ese campo y no se 
repite. 
10.  Sistema: solicita se ingrese la superficie del lote. 
11.  AC: ingresa la superficie del lote. (ver observación 2) 
12.  Sistema: solicita se seleccione el tipo de suelo del lote 
13.  AC: selecciona el tipo de suelo 
14.  Sistema: Muestra los datos de cada lote registrado para ese Campo y solicita se informe fin de ingreso de lotes. 
15.  AC: informa fin de ingreso de lotes 
16.  Sistema:  valida que la suma de todas las superficies de los lotes coincida con la superficie total del campo y 
coincide 
17.  Sistema: solicita confirmación para registrar campo 
18.  AC: confirma el registro del campo y sus lotes 
19.  Sistema: Valida la existencia de los datos obligatorios y registra un nuevo Campo con los siguientes datos: 
1. Nombre y Superficie (obligatorios). 
2. Lote/s (obligatorio al menos uno) con: Número, superficie y tipo de suelo obligatorios. 
Fin del caso de uso. 
Flujos Alternativos 
A1: El nombre del Campo se repita para otro Campo ya registrado. 
A2: El número de lote se repita con otro ingresado previamente para ese campo. 
A3: La suma de las superficies de los lotes no coincide con la superficie total del campo. 
A4: El AC no confirma la registración del campo y sus lotes. 
A5: Faltan datos mínimos requeridos. 
Observaciones: 
1. El AC puede cancelar la operación en cualquier momento. 
2. La superficie está en hectáreas, no se aceptan nulos. 
3. Se debe ingresar al menos un lote.

## Página 24

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 24 
Nombre del Caso de uso: Registrar Tratamiento para Plaga Nro. de Orden: 50 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☒ Mediano    ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica 
Tipo de Caso de uso:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Registrar los datos de un tratamiento para una plaga en un cultivo determinado. 
Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un 
archivo en formato PDF con los detalles del mismo. 
1. AC: selecciona la opción “Registrar Tratamiento para Plaga”. 
2. Sistema: Muestra los cultivos registrados y solicita la selección de un cultivo. 
3. AC: Selecciona un cultivo. 
4. Sistema: Muestra las plagas registradas y solicita la selección de una plaga. 
5. AC: Selecciona una plaga. 
6. Sistema: Valida la existencia de tratamientos registrados para el cultivo seleccionado y existen 
tratamientos; se verifica si alguno de ellos corresponde a la plaga seleccionada y no existe ninguno que cumpla 
esta condición. 
7. Sistema: Solicita se ingrese nombre y descripción para el tratamiento que se desea registrar. 
8. AC: ingresa el nombre del tratamiento y la descripción. 
9. Sistema: Muestra los agroquímicos registrados, solicitando que para cada agroquímico que deba emplearse se 
seleccione el agroquímico correspondiente 
10. AC: selecciona uno o más agroquímicos 
11. Sistema: Para cada agroquímico seleccionado solicita que se ingrese la dosis y se seleccione la unidad de medida 
(litros, gramos, etc.). 
12. AC: Para cada agroquímico seleccionado ingresa la dosis y selecciona la unidad de medida. 
13. Sistema: solicita confirmación para registrar el tratamiento. 
14. AC: confirma el registro del tratamiento 
15. Sistema: Valida que se haya ingresado un nombre para el tratamiento y que se haya seleccionado al menos un 
agroquímico con su dosis y unidad de medida, y es correcto. 
16. Sistema: Registra el nuevo tratamiento para el cultivo y plaga seleccionados con los siguientes datos: nombre, 
descripción y para cada agroquímico a aplicar registra la correspondiente dosis y unidad de medida.  
17. Sistema: Permite las siguientes opciones de visualización del tratamiento registrado: formato PDF, Excel o 
impreso  
18. AC: selecciona formato PDF 
19. Sistema: Genera un archivo en formato PDF con los datos del tratamiento, detallando para cada agroquímico 
utilizado (nombre, dosis y unidad de medida) agregando la fecha y hora actual. Fin del caso de uso. 
Flujos Alternativos 
A1: El cultivo seleccionado no posee tratamientos asignados.  
A2: El cultivo seleccionado posee tratamientos asignados y por lo menos uno de ellos pertenece a la plaga elegida. 
A3: El AC no ingresa los datos mínimos. 
A4: El AC no confirma la registración del tratamiento. 
A5: El AC selecciona la opción de impresión. 
A6: El AC selecciona la opción de generación en formato Excel. 
Observaciones: El AC puede cancelar la operación en cualquier momento.

## Página 25

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 25 
Nombre del Caso de uso: Registrar proyecto de cultivo  Nro. de Orden: 67 
Prioridad:                  ☐ Alta                                ☒ Media                                  ☐ Baja            
Complejidad:   ☒ Simple    ☐ Mediano    ☐ Complejo   ☐ Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica 
Tipo de Caso de uso:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Registrar un nuevo proyecto de cultivo para un lote determinado. 
Flujo Básico 
1.  AC: selecciona la opción “Registrar proyecto de cultivo”. 
2. Sistema: Muestra los campos habilitados y solicita la selección de un campo. 
3. AC: Selecciona un campo. 
4. Sistema: Muestra los lotes pertenecientes al campo elegido con su tipo de suelo y solicita la selección de uno. 
5. AC: Selecciona un lote. 
6. Sistema: Valida que el lote elegido no posea ningún proyecto de cultivo vigente (que no esté en estado final) y 
no existen proyectos vigentes. 
7. Sistema: Solicita se seleccione la fecha de inicio y la fecha de fin del proyecto. 
8.  AC: selecciona las fechas requeridas. 
9.  Sistema: valida que la fecha de fin sea superior a la fecha de inicio y a la fecha actual y es correcto. 
10.  Sistema: permite ingresar observaciones para el nuevo proyecto. 
11.  AC: ingresa las observaciones correspondientes. 
12.  Sistema: muestra los cultivos que pueden plantarse en ese lote en función del tipo de suelo del lote elegido y 
solicita que se seleccione uno. 
13.  AC: selecciona un cultivo. 
14.  Sistema: solicita confirmación para registrar el proyecto de cultivo. 
15.  AC: confirma el registro. 
16. Sistema: Valida que se hayan ingresado al menos las fechas de inicio y fin del proyecto y que se haya 
seleccionado un cultivo, y es correcto. 
17. Sistema: Registra el nuevo proyecto de cultivo para el lote elegido con los siguientes datos: fecha inicio, fecha fin, 
cultivo, observaciones, en el estado “EnPreparación”. Fin del caso de uso. 
Flujos Alternativos 
A1: El lote seleccionado posee un proyecto de cultivo vigente. 
A2: Las fechas ingresadas no son correctas. 
A3: El AC no confirma la registración del proyecto. 
A4: Falta completar datos mínimos. 
Observaciones: 
El AC puede cancelar la operación en cualquier momento.

## Página 26

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 26 
 
Nombre del Caso de uso: Importar datos relevados por Monitor Nro. de Orden: 72 
Prioridad:                  ☒ Alta                                ☐ Media                                  ☐ Baja            
Complejidad:   ☐ Simple    ☐ Mediano    ☒ Complejo   ☐Muy Complejo   ☐ Extremadamente Complejo   
Actor Principal: Monitor de Rendimiento Actor Secundario: no aplica 
Tipo de Caso de uso:                  ☒ Concreto                                       ☐   Abstracto 
Objetivo: Importar y registrar los datos de cosecha relevados y enviados por un monitor de rendimiento en un 
instante de tiempo. 
Flujo Básico 
1. Monitor de Rendimiento: Comienza cuando un monitor de rendimiento ubicado en una cosechadora envía datos 
relevados de la cosecha que está realizando en un lote en un instante de tiempo.  
2. Sistema: a partir de los datos recibidos busca el campo y el respectivo lote, y luego el proyecto de cultivo vigente 
(que no esté en estado final) de ese lote. 
3. Sistema: busca el monitor al cual pertenece la identificación de monitor recibida con los datos. 
4. Sistema: valida si ya existen datos relevados para este proyecto de cultivo vigente y monitor, para la misma fecha 
y hora, y no es así. 
5. Sistema: Registra los datos recibidos para el proyecto de cultivo: fecha y hora de relevamiento, latitud, longitud, y 
para cada uno de los tipos de datos relevados registra el valor recibido con su respectiva unidad de medida. Se 
asigna fecha y hora actual y el monitor que envió los datos. Fin del caso de uso. 
Flujos Alternativos 
A1. Existen datos relevados para el proyecto de cultivo vigente y monitor desde donde se envían los datos. 
A2. Existen datos relevados para el proyecto de cultivo vigente, pero desde otro monitor. 
A3. No existe un monitor con la identificación recibida. 
A4. No existe un campo con el nombre de campo recibido. 
A5. No existe un lote con el número de lote recibido. 
A6. No existe ningún proyecto de cultivo para el lote referenciado. 
A7. No existe ningún proyecto de cultivo vigente para el lote referenciado. 
Observaciones: no aplica

## Página 27

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 27 
Modelo de Dominio:

## Página 28

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 28 
Vista de Estructura de Análisis para la realización del Caso de Uso 01 Registrar Laboreos en Lotes.

## Página 29

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 29 
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - Escenario 
del Curso Normal o Flujo Básico – Parte 1

## Página 30

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 30 
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - Escenario 
del Curso Normal o Flujo Básico – Parte 2

## Página 31

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Monolítico  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 31 
Vista de Análisis para la realización del Caso de Uso 02 Generar Reporte de Proyectos de Cultivo. Escenario del 
Curso Normal o Flujo Básico

## Página 32

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 32 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 02: Generar Reporte de Proyectos de Cultivo- Escenario del Curso Normal o Flujo Básico

## Página 33

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 33 
Vista de Modelo de Clases de Análisis Administración de Campo

## Página 34

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 34 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 12: Registrar Campo. Escenario del Curso 
Normal o Flujo Básico

## Página 35

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 35 
Realización de Análisis con Diagrama de secuencia del Caso de Uso 12: Registrar Campo. Escenario del Curso 
Normal o Flujo Básico

## Página 36

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 36 
Vista de Análisis para la realización del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: Nuevo 
tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en 
formato PDF con los detalles del mismo.

## Página 37

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 37 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 50: Registrar Tratamiento para Plaga. 
Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un 
archivo en formato PDF con los detalles de este.

## Página 38

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 38 
Vista de Análisis para la realización del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico

## Página 39

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 39 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo 
básico

## Página 40

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 40 
Vista de Análisis para la realización del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: Se reciben y 
registran los datos relevados.

## Página 41

Proyecto Práctico de Aplicación  
Administración de Campos 
Diseño arquitectónico con Microservicios  
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   Página 41 
Realización de Análisis con Diagrama de Secuencia del Caso de Uso 72: Importar datos relevados por Monitor. 
Flujo: Se reciben y registran los datos relevados.

## Página 42

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15  
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel     Página 42 
 
Máquina de Estados para la Clase Proyecto de Cultivo

## Página 43

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 43 
 
 
Requerimientos No Funcionales 
Nº Nombre Descripción Características Sign. 
para 
la 
Arq. 
Prioridad Explicación 
1 Comunicación 
mediante VPN 
Se deberá utilizar 
una red privada 
virtual (VPN) para 
establecer la 
comunicación entre 
el campo en que 
funciona la 
Administración y los 
demás Campos   
Compatibilidad NO No 
aplica. 
Esta forma de 
comunicación no 
afecta la 
arquitectura del 
software. 
2 Requerimientos 
para puestos de 
trabajo 
El producto de 
software no debe 
demandar ninguna 
instalación en las 
máquinas de los 
puestos de trabajo. 
Únicamente 
deberán tener una 
conexión de 
internet. 
Compatibilidad SI Alta La arquitectura del 
sistema debe ser 
distribuida de 
manera que los 
puestos de trabajo 
sean livianos es 
decir, no se 
deberá realizar 
ningún 
procesamiento 
vinculado a lógica 
de negocio y 
administración de 
datos. Se 
desarrollará un 
producto web. 
3 Lenguaje de 
Programación 
El lenguaje de 
programación debe 
permitir el 
desarrollo de 
productos utilizables 
en internet. 
Compatibilidad SI Alta El lenguaje de 
programación a 
utilizar deberá 
soportar el 
desarrollo de 
componentes de 
software web. 
4 Visualización de 
Reportes e 
Informes 
Estadísticos 
Todos los reportes e 
informes 
estadísticos deberán 
mostrarse tanto en 
formato de grilla 
como en formato 
gráfico. 
Usabilidad NO No aplica El formato de 
visualización no 
afecta la 
arquitectura del 
software.

## Página 44

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 44 
 
5 Clave de acceso 
al sistema 
La clave de acceso al 
sistema deberá 
contener como 
mínimo 6 caracteres 
alfanuméricos y 
estar encriptados. 
Seguridad SI Baja Se deben 
desarrollar 
algoritmos de 
encriptación que 
contemplen las 
condiciones 
mencionadas. 
6 Utilización de 
Dispositivos 
Móviles 
Permitir la carga de 
proyectos de cultivo 
y la actualización de 
las labores 
realizadas mediante 
dispositivos Móviles: 
tablets y teléfonos 
inteligentes. 
Compatibilidad SI Media Para ser 
compatible con 
dispositivos 
móviles, el 
desarrollo web 
debe realizarse en 
HTML5 que es un 
lenguaje de 
arquitectura web 
responsive y se 
adapta a las 
diferentes 
características de 
los dispositivos. 
7 Importación de 
datos 
Realizar la 
importación de 
datos de diferentes 
tipos de formatos 
desde los distintos 
Monitores. 
Compatibilidad SI Media Debe construirse 
un componente 
de software para 
gestionar la 
importación de los 
datos de 
diferentes tipos de 
formatos 
registrados en los 
distintos 
Monitores. 
8 Base de Datos La base de datos de 
la aplicación deberá 
ser en Oracle 12c. 
Compatibilidad SI Alta La base de datos 
debe ser 
relacional y 
resolver el 
esquema de 
encriptación y las 
auditorías de 
transacciones. 
9 Exportación de 
Reportes a PDF 
y Excel 
Se debe permitir la 
exportación de los 
reportes y 
estadísticas a 
formato PDF y Excel 
(XLS y XLSX) 
Usabilidad No No Aplica No se requiere 
ningún módulo o 
aspecto 
arquitectónico 
diferencial para 
resolver la 
exportación a 
formatos de 
archivo Excel y 
pdf.

## Página 45

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 45 
 
10 Exploradores 
habilitados 
El sistema se debe 
utilizar con alguno 
de los siguientes 
exploradores: 
Internet Explorer 11, 
Mozilla Firefox 
51.0.1 y Google 
Chrome v56.0 (y 
versiones 
superiores) 
Compatibilidad No No Aplica La utilización de 
un determinado 
explorador no 
define aspectos 
arquitectónicos 
del software.

## Página 46

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 46 
 
Patrones Arquitectónicos 
 
Estilo de Arquitectura en Capas (Layered) 
 
 
 
 
 
 
 
 
Aplicación: Este patrón se corresponde con el tipo de vista de módulo, por lo tanto, es estático. Se utiliza el 
patrón para organizar la implementación de este sistema complejo en capas de servicios auto contenidas, para 
logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable. 
Motivaciones: 
● Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios 
de código a la capa a modificar. 
● Cohesión alta en las capas que contienen componentes relacionados a una única responsabilidad. 
● Reutilización de servicios brindados por la interfaz brindada por cada capa. 
● Mejorar la portabilidad. Los cambios de hardware, del sistema operativo, se puede modificar afectando 
solamente a la capa afectada. 
 
Estilo N-Tier Client Server 
 
Aplicación: Se utiliza este patrón para implementar el sistema de administración de campos de AGRO SRL. 
Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las 
comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de 
la arquitectura.  
 
Motivaciones: 
● Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad 
requerida. 
● Utilización de puestos de trabajo livianos (clientes web) que no tienen exigencias de hardware a excepción 
de la conexión a Internet. 
Capa Presentación Web 
Capa Servicios Web 
Capa Lógica de Negocios 
Capa Acceso a Datos

## Página 47

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 47 
 
● Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y extensibilidad 
del sistema. 
Estilo Broker (Agente) 
 
Aplicación: Este patrón pertenece a la vista de ejecución (runtime). Se utiliza para resolver el requerimiento no 
funcional de importar los datos en diferentes tipos de formatos (de acuerdo al Sistema de Monitor utilizado) y 
realizar la transformación de los mismos al formato específico que necesite la aplicación para la generación de 
informes.  
 
Motivaciones: 
● El Agente se ocupa de leer los datos recibidos y generar un formato adecuado que necesita el sistema de 
administración de campos para procesar la información. 
 
Monitor 1
BROKER
Sistema de 
Administración de 
Campos
Monitor 2
Monitor n
. . .

## Página 48

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 48 
 
Vista Arquitectónica de la Funcionalidad 
 
 
 
 
El Punto de Vista para la Vista Arquitectónica de la Funcionalidad define los casos de uso de la Administradora 
de Campos que son significativos para la arquitectura del software.

## Página 49

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 49 
 
Consideraciones para la inclusión de los casos de uso en la vista: 
 
Número Nombre del Caso de Uso Justificación 
1 Registrar Laboreos en un Lote Este caso de uso representa una transacción del sistema, 
con esta se resuelven también los RNF 1, 6 y 8 
07 Iniciar Sesión Vinculado con la implementación de los permisos de 
usuario y los niveles de acceso de los mismos a las 
funcionalidades del sistema. 
Vinculado al RNF 5. 
66 Generar Histórico de Proyectos de 
Cultivo por Campo/Lote 
Representa la funcionalidad de generación de reportes y 
cómo resolver con componentes, los algoritmos de cálculo, 
paginación y visualización, así como también los 
requerimientos no funcionales de exportación y 
visualización. 
Vinculado al RNF 4 y 9 
76 Importar datos relevados por 
Monitor 
Vinculado al RNF 7 
77 Generar Estadística de Rendimiento 
de Lotes 
Vinculado al RNF 4 y 9 
Representa la funcionalidad de generación de estadísticas 
y cómo resolver con componentes, los algoritmos de 
cálculo, paginación y visualización, así como también los 
requerimientos no funcionales de exportación y 
visualización. 
12 Registrar Campo Representativo de las funciones de alta, baja, modificación 
y consulta de datos en el sistema. 
Elegido por ser considerado en más complejo de todos los 
ABMC que tiene la aplicación ya que debe resolver la 
creación de los lotes que integran el campo. 
Ejemplo de resolución del RNF 2, 3 y 10 
13 Modificar Campo 
15 Eliminar Campo 
14 Consultar Campo

## Página 50

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 50 
 
Vista Arquitectónica del Diseño: Subsistemas/ Interfaces 
 
 
 
El Punto de Vista para la Vista Arquitectónica del Diseño comprende los Subsistemas que son significativos para 
la arquitectura del software de la Administradora de Campos y las relaciones que existen entre ellos.

## Página 51

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 51 
 
 
Vista Arquitectónica del Despliegue: Nodos/ Componentes Principales 
 
 
 
 
El Punto de Vista para la Vista Arquitectónica del Despliegue comprende los componentes que son significativos 
para la arquitectura del software de la Administradora de Campos y su distribución en los nodos.

## Página 52

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 52 
 
Vista Arquitectónica del Despliegue 🡪 Niveles de Hardware 
 
Internet
Dispositivo Móvil
Router en 
Campo Administración Central
Switch
Intranet
Servidor Web
Servidor de Base de Datos
Servidor de AplicacionesEstación de Trabajo 1 
en Administración
Estación de Trabajo N
 en Administración
Giga Ethernet
Giga Ethernet
Giga Ethernet
Giga Ethernet
Router
en Campo 1
Estación de Trabajo 1 
en Campo 1
Dispositivo Móvil
USB /
 Lector Tarjeta Memoria
USB /
 Lector Tarjeta Memoria
USB /
 Lector Tarjeta Memoria
Estación de Trabajo N 
en Campo 1
USB /
 Lector Tarjeta Memoria
Estructura aplicable a 
cada uno de los 
Campos

## Página 53

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 53 
 
Patrones de Diseño - Iterator: Estructura

## Página 54

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 54 
 
Iterator: Dinámica

## Página 55

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15  
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel      Página 55 
Builder: Estructura

## Página 56

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel           
 Página 56 
 
Builder: Dinámica

## Página 57

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15  
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   
 Página 57 
 
Explicación/Pseudocódigo 
GestorReporteProyectos 
tomarFormaDeVisualización(): de acuerdo a la forma de visualización seleccionada, la cual es un parámetro de este 
método, el gestor crea una instancia del ConstructorReporteProyectos. En este escenario se crea un objeto 
ConstructorImpresiónReporteProyectos. 
 
ConstructorReporteProyectos (interface) 
Se listan los métodos abstractos: 
construirReporteProyectos() 
construirEncabezado(encabezado:String) 
construirGrillaProyectos(proyectos: String) 
construirPieDePagina(pieDePagina: String) 
 
DirectorConstructorReporteProyectos 
Construir(): este método va invocando a los métodos de construcción del Constructor que corresponda de forma 
ordenada como se muestra a continuación: 
construirReporteProyectos() 
construirEncabezado(encabezado:String) 
construirGrillaProyectos(proyectos: String) 
construirPieDePagina(pieDePagina: String) 
 
ConstructorImpresiónReporteProyectos 
Los métodos a ejecutarse son los siguientes: 
● construirReporteProyectos(): para crear el producto, en este caso un ReporteProyectoImpreso. 
new(); al objeto ReporteProyectoImpreso 
● construirEncabezado(encabezado: String): para construir el encabezado con los filtros y período 
seleccionado. 
● construirGrillaProyectos(proyectos: String): para construir la grilla de los proyectos encontrados. 
● construirPieDePagina(pieDePagina: String): para construir el pie de página 
● obtenerReporteDeProyectos():object : este método permite al GestorReporteProyectos obtener el producto 
(ReporteProyectoImpreso)

## Página 58

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15  
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   
 Página 58 
 
Resolver mediante la aplicación de un patrón de diseño, la forma de asegurar que exista una única cola de 
impresión en la Administración Central de Agro S.R.L para evitar problemas al imprimir los reportes de cultivo. 
 
Singleton: Estructura

## Página 59

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15  
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel   
 Página 59 
 
Singleton: Dinámica

## Página 60

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel          
 Página 60 
 
 
Adapter: Estructura

## Página 61

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 61 
Adapter: Dinámica 
 
 
Pseudocódigo 
El servicio externo del monitor AGCO, es decir del monitor que envía el vector de datos de relevamiento, invoca el 
método enviarDatosRelevamiento() de InterfazMonitorRendimiento cuando tiene nuevos datos relevados para 
enviar. 
La InterfazMonitorRendimiento crea el adaptador concreto AdaptadorDatosRelevamAGCO, invocando el método 
new() y pasando como parámetro la clave API correspondiente al monitor que envía (en este caso la claveAPI del 
monitor AGCO). Cabe mencionar que la InterfazMonitorRendimiento tiene las claves API de los monitores en una 
cadena de string, con lo cual sabe qué clave API tiene que enviar como parámetro de creación del adaptador 
concreto. La InterfazMonitorRendimiento envía la clave API como parámetro de creación del adaptador concreto, 
AdaptadorDatosRelevamAGCO, porque después va a ser el adaptador concreto quien se va a comunicar con el 
servicio externo monitor AGCO para pedirle los nuevos datos relevados. 
La InterfazMonitorRendimiento delega al adaptador concreto AdaptadorDatosRelevamAGCO que se encarga de 
interactuar con el servicio externo de monitor AGCO para pedirle los datos relevados, los interprete y cambie el 
formato tal como lo necesita el gestor. 
El AdaptadorDatosRelevamAGCO implementa la Interface IAdaptadorDatosRelevamiento 
La InterfazMonitorRendimiento invoca el método polimórfico recibirDatosRelevamiento():String[][] del 
AdaptadorDatosRelevamAGCO que retorna los datos adaptados, es decir, retorna una matriz de String. 
El método recibirDatosRelevamiento(): String[][] invoca a: 
● solicitarDatosRelevamiento(): Método polimórfico que: 
1. Recibe por parámetro la clave API en formato String y la transforma en código Binario tal 
como la necesita el Servicio de Monitor AGCO.  
2. Desencadena la llamada o comunicación con el servicio externo del monitor AGCO.  Para 
ello invoca el método enviarDatosRelevamiento(claveAPI:Varbinary): String[] del servicio

## Página 62

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 62 
externo del monitor AGCO, enviándole la clave API en bi nario, que es el dato que espera 
recibir el servicio externo de monitor AGCO. El valor de retorno de este método es un 
vector de String, que contiene los datos de relevamiento del monitor en un instante de 
tiempo. 
Luego el AdaptadorDatosRelevamAGCO, adaptador concreto, ejecuta: 
● El método adaptarValorRendimiento(): que convierte el valor de rendimiento recibido en toneladas por 
hectárea a quintales por hectárea mediante el respectivo cálculo. 
● El método polimórfico adaptarDatosRelevamiento() que: 
o Toma cada elemento del vector string recibido del servicio externo del monitor AGCO y comienza 
a interpretarlos y adaptarlos para devolver una matriz de datos de relevamiento, que es lo que 
necesita el gestor 
▪ Transforma la fecha hora a formato datetime. 
▪ Transforma la latitud y longitud a formato double. 
▪ Transforma el nroLote a integer. 
▪ Agrupa los datos relevados en una matriz String que contenga una fila por cada tipo de 
dato relevado, asignando en la primera columna el nombre del tipo de dato relevado, en 
la segunda el valor recibido y en la tercera la abreviatura de la unidad de medida. 
Por último, la InterfazMonitorRendimiento envía los datos de relevamiento transformados y adaptados al gestor, 
invocando el método enviarDatosRelevamiento (identMonitor:String, fechaHora:Datetime, latitud:Double, 
longitud:Double, nombreCampo:String, nroLore:Int, datosRelevados:String[][])  pasándole los parámetros 
mencionados.

## Página 63

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 63 
Mapeo de Clases a BDR - Diagrama de Entidad Relación

## Página 64

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 64 
Diseño de Interfaz de Usuario 
CU: Registrar Laboreo en Lotes  
 
Registrar Laboreos en LotesRegistrar Laboreos en Lotes
A1-124
A1-123
Nº Lote
20/02/2011
15/02/2011
Fecha de Inicio
Rastrillar
Arar
 Laboreo Realizado
SojaCultivo:
Lotes con Proyecto VigenteCampos Habilitados
2
1
Orden
17/02/2011
15/02/2011
Fecha Inicio
08:00
10:30
Hora Inicio
17/02/2011
16/02/2011
Fecha Fin
20:00
21:00
Hora Fin
López
Raimondi
Empleado
Información de Laboreos Efectuados
Información del Lote
Tipo de Laboreo
Escardillar Fecha Inicio 21/02/2011
Fecha Fin 21/02/2011
Hora Inicio 06:00
Hora Fin 20:00Empleado Responsable
López CancelarAgregar Laboreo
Seleccione un Campo ...
Sol de Mayo
La Patriada
Los Pinos

## Página 65

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 65 
Laboreos en LotesLaboreos en Lotes
El sistema no encuentra campos 
HABILITADOS para comenzar a registrar 
laboreos en lotes
Aceptar
Laboreos en LotesLaboreos en Lotes
El sistema no encuentra lotes que 
correspondan al campo seleccionado, que 
tengan Proyecto de Cultivo VIGENTE.
Aceptar
Laboreos en LotesLaboreos en Lotes
La Fecha de Inicio es mayor a la Fecha de Fin.
Ingrese las Fechas nuevamente.
Aceptar
Laboreos en LotesLaboreos en Lotes
La Hora de Inicio es mayor a la Hora de Fin. 
Ingrese las Horas nuevamente.
Aceptar
Laboreos en LotesLaboreos en Lotes
¿Está seguro que desea CANCELAR la 
Registración de los Laboreos para los lotes 
seleccionados?
Aceptar Cancelar

## Página 66

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 66 
Generar Reporte de Proyectos de Cultivo 
Generar Reporte de Proyectos de CultivoGenerar Reporte de Proyectos de Cultivo
Sol de Mayo
Los Pinos
La Patriada
Nombre
Campos
Marcar Todos Desmarcar Todos
Lotes 
A1-124
A1-123
Nº Lote
Marcar Todos Desmarcar Todos
Fecha Desde: 01/01/2010
Fecha Hasta: 01/03/2011
Generar Reporte
Cancelar Reporte
Período
Visualizar
Imprimir
Guardar
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
El sistema no encuentra datos que cumplan 
con los criterios seleccionados.
Aceptar
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
¿Está seguro que desea CANCELAR la 
Generación del Reporte de Proyectos de 
Cultivos?
Aceptar Cancelar
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
El período ingresado no es válido.
Por favor reingrese las fechas.
Aceptar
Trigo
Soja
Maíz
Nombre
Cutivos
Marcar Todos Desmarcar Todos
Tipos de Suelo
Tipo de Suelo B
Tipo de Suelo A
Nombre
Marcar Todos Desmarcar Todos
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
B1-100
A1-123
A1-123
Lote
Tipo Suelo A
Tipo Suelo A
Tipo Suelo A
Tipo Suelo
Soja
Maíz
Soja
Cultivos
05/01/2011
10/09/2010
25/02/2010
Inicio Proyecto
25/04/2011
15/12/2010
25/05/2010
Fin Proyecto
En Post Siembra
Cosechado
Cosechado
Estado Proyecto
Reporte de Proyectos de Cultivo
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
Seleccione el nombre para el archivo y la ubicación 
para almacenar el Reporte.
Cancelar
Nombre Archivo: Ingrese un nombre para el archivo
     Escritorio
Ubicación:
Guardar
Reporte de Proyectos de CultivoReporte de Proyectos de Cultivo
Seleccione la impresora en la que desea imprimir el 
Reporte.
Cancelar
Nombre ImpresoraNombre
Imprimir
Impresora

## Página 67

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 67 
Requerimiento de Cambio 
 
El cliente ha solicitado que el sistema: 
● administre las restricciones de siembra relacionadas con los cultivos y la cantidad y frecuencia de veces 
que un cultivo puede sembrarse en un mismo lote. También se debe registrar si existe alguna 
recomendación de que cultivos sembrar después.  
● informe de estas restricciones al momento de crear un proyecto de cultivo. 
● Generar un reporte de proyectos de cultivo que no cumplen con las restricciones de cultivo para un 
período de tiempo. 
 
Regla de Negocio que se agrega: 
 
Nº Nombre Regla de Negocio – Descripción 
8 Restricciones de 
Siembra de Cultivos 
Existen restricciones para algunos cultivos respecto de cuántas veces se puede sembrar 
de manera consecutiva el mismo cultivo en el mismo lote. Por ejemplo: se puede sembrar 
dos veces seguidas soja y luego hay que sembrar maíz.  
 
Casos de Uso que se Agregan: 
 
75. Registrar restricciones de siembra 
para el cultivo 
Registrar las restricciones de temporalidad de siembra para un cultivo. 
76. Modificar restricciones de siembra 
para el cultivo 
Modificar los datos permitidos a las restricciones de temporalidad de 
siembra registradas para un cultivo. 
77. Eliminar restricciones de siembra 
para el cultivo 
Borrar las restricciones de temporalidad de siembra para un cultivo 
existentes en el sistema. 
78. Consultar restricciones de siembra 
para el cultivo 
Consultar las restricciones de temporalidad de siembra para un cultivo 
en función de criterios definidos. 
79. Generar reporte de 
quebrantamiento de las 
restricciones de cultivo 
Generar un reporte que informe las situaciones en las que uno o más 
proyectos de cultivo no han respetado las restricciones de temporalidad 
de siembra 
 
Casos de Uso que se Modifican: 
 
24. Registrar Cultivo Registrar las características de un cultivo 
25. Modificar Cultivo Modificar los datos permitidos de un cultivo. 
26. Eliminar Cultivo Eliminar un cultivo registrado. 
27. Consultar Cultivo Consultar los datos de un cultivo. 
67. Registrar Proyecto de Cultivo Registrar los datos de un proyecto de cultivo que se realizará en un lote 
de un campo. 
68. Modificar Proyecto de Cultivo Modificar los datos permitidos de un proyecto de cultivo que se 
realizará en un lote de un campo. 
69. Consultar Proyecto de Cultivo Consultar los datos de uno o más proyectos de cultivo.

## Página 68

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 68 
Administración de Restricciones 
 
 
 
Modelo de Dominio- Vista de Clases afectadas al requerimiento de cambio

## Página 69

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 69 
Tabla de contenido 
 
Contenido 
Proyecto Práctico de Aplicación ................................................................................................................... 1 
Nombre del Proyecto Práctico de Aplicación: Administración de Campos.................................................. 1 
Objetivo del Proyecto Práctico de Aplicación (PPA): ................................................................................ 1 
Objetivos de la Asignatura con respecto al PPA: ...................................................................................... 1 
Contenidos de la Asignatura que se abordarán en el PPA: ...................................................................... 1 
Consigna asociada al Proyecto Práctico de Aplicación: ............................................................................ 2 
Criterios de evaluación del PPA (Si aplica): no aplica ............................................................................... 4 
Descripción del Dominio asociado al Proyecto Práctico de Aplicación .................................................... 4 
Definición del Producto afectado al desarrollo del proyecto................................................................... 5 
Vista de Análisis para la realización del Caso de Uso 01 Registrar Laboreos en Lotes. ......................... 28 
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - 
Escenario del Curso Normal o Flujo Básico ............................................................................................ 29 
Vista de Análisis para la realización del Caso de Uso 02 Generar Reporte de Proyectos de Cultivo. 
Escenario del Curso Normal o Flujo Básico ............................................................................................ 30 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 02: Generar Reporte de 
Proyectos de Cultivo- Escenario del Curso Normal o Flujo Básico ......................................................... 32 
Vista de Modelo de Clases de Análisis Administración de Campo ......................................................... 33 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 12: Registrar Campo. 
Escenario del Curso Normal o Flujo Básico ............................................................................................ 34 
Realización de Análisis con Diagrama de secuencia del Caso de Uso 12: Registrar Campo. Escenario 
del Curso Normal o Flujo Básico ............................................................................................................. 35 
Vista de Análisis para la realización del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: 
Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando 
un archivo en formato PDF con los detalles del mismo. ........................................................................ 36 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 50: Registrar Tratamiento 
para Plaga. Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga 
seleccionada, generando un archivo en formato PDF con los detalles de este. .................................... 37 
Vista de Análisis para la realización del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico .. 38 
Realización de Análisis con Diagrama de comunicación del Caso de Uso 67: Registrar Proyecto de 
Cultivo. Flujo básico ................................................................................................................................ 39 
Vista de Análisis para la realización del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: 
Se reciben y registran los datos relevados. ............................................................................................ 40 
Realización de Análisis con Diagrama de Secuencia del Caso de Uso 72: Importar datos relevados por 
Monitor. Flujo: Se reciben y registran los datos relevados. ................................................................... 41

## Página 70

Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María 
Cátedra de Diseño de Sistemas de Información 
 
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 
Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel  Página 70 
Máquina de Estados para la Clase Proyecto de Cultivo ........................................................................ 42 
Patrones Arquitectónicos ....................................................................................................................... 46 
Vista Arquitectónica de la Funcionalidad ............................................................................................... 48 
Vista Arquitectónica del Diseño: Subsistemas/ Interfaces ..................................................................... 50 
Vista Arquitectónica del Despliegue: Nodos/ Componentes Principales ............................................... 51 
Vista Arquitectónica del Despliegue 🡪 Niveles de Hardware ................................................................. 52 
Patrones de Diseño - Iterator: Estructura............................................................................................... 53 
Iterator: Dinámica ................................................................................................................................... 54 
Builder: Estructura .................................................................................................................................. 55 
Builder: Dinámica .................................................................................................................................... 56 
Adapter: Estructura ................................................................................................................................ 60 
Adapter: Dinámica .................................................................................................................................. 61 
Mapeo de Clases a BDR - Diagrama de Entidad Relación ....................................................................... 63 
Diseño de Interfaz de Usuario ................................................................................................................ 64 
Tabla de contenido ...................................................................................................................................... 69
