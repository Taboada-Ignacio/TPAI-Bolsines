# PPA_Administración de Campos V1-15.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento describe el 
diseño de un sistema de información
 para la 
administración de campos agrícolas
, detallando tanto sus objetivos académicos como sus especificaciones técnicas. Su propósito principal es guiar la creación de una 
arquitectura de software robusta
 utilizando 
patrones de diseño
 y 
patrones arquitectónicos
 en capas. Asimismo, incluye aspectos operativos clave como el 
mapeo de clases a bases de datos relacionales
, la 
gestión de reportes
 y la 
integración con dispositivos externos
 mediante adaptadores. De este modo, la obra funciona como una guía técnica integral para resolver situaciones problemáticas de desarrollo en el sector agropecuario.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3daJeGFGHK8_nOqGXvDKZlqhtZkyVwOHjwHAhW-Nn19YVNQjUQi6fe6lgqiLYna4kI-HDgZJSBUiI8egl0X6Mt4Qdd_tlSO9qJwuLOWQmSGVdwpiVOEK73YfSat7k77lgIKz8mLg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qirh8hHQhB8J3BNgoBS-CWbUDNOwl8IXfpPveA6-n5R21Q7kbY5907ld1N5TUSbmkfTDgQTbCgpA0IcolYSZ2O3UYdamypjrz7w-eJ1v2ddcOTZiD85LhcVkv75mALXFh4BVStw=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Proyecto Práctico de Aplicación Nombre del Proyecto Práctico de Aplicación: Administración de Campos
Objetivo del Proyecto Práctico de Aplicación (PPA): El objetivo del proyecto es desarrollar el modelado de un software de administración de campos, a partir de una
descripción del dominio. Sólo se muestran algunas vistas de los procesos de requerimientos, análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se construirá.
Objetivos de la Asignatura con respecto al PPA:
Analizar los sistemas de información mediante el paradigma de Orientación a Objetos.
Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura
robusta del sistema.
Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución
(Análisis y Diseño) a partir del Modelo de Requerimientos
Modelar la arquitectura del producto utilizando patrones arquitectónicos.
Resolver situaciones problemáticas del diseño con patrones de diseño.
Mapear diagramas de clases a BDR.
Analizar y modelar cambios en los requerimientos y su impacto en los modelos existentes.
Contenidos de la Asignatura que se abordarán en el PPA:
Modelado del Comportamiento en el Análisis
Modelado de la Estructura en el Análisis
Diseño Arquitectónico – Patrones Arquitectónicos
Patrones de Diseño
Mapeo de estructuras de clases a bases de datos relacionales.
Diseño de Interfaces de Usuario
Requerimientos de Cambio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yKTJiUK3zyB31WC6Ttbj93brxA60xtBcCPi4BhuGOFgfON6sBgyIO7IzMgKYxiMgTnG-FAOwE4CiVJIgJXtuM1iznmwSkt-mf-VX-NGZ9jzlVInTph5k_EZ-ijYnQYHA4NrMQyw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1s6s_bWJqJpN5PbnG_jdHFVMP-4qX-yS34mdI1DRkiFfdovQs3-yPNZhxR6IgKm0UnNZn5RABK1CRj44TE8rD1rGGVvCb20XrcCzWA3w5PRqrmFTlq-_4TPx-GjNGF176sM8AAIw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xC_3JQRLgjLYAaFQNXb5B-XRp61zJ5i8bCkDr0JyB13K96cG8eltfxQbvuoUfLbTRGULan9LeHUCRP6pm0_5_uBvcpxeq7yHoFMZDD4DlSDnmO08T9Kqfd69TqC3bCr5qvGHA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Consigna asociada al Proyecto Práctico de Aplicación:
1- Construya para el caso de uso “Registrar Laboreos en Lotes” la realización de casos de uso de análisis aplicando patrones GRASP de análisis. a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
2- Construya para el caso de uso “Generar Reporte de Proyectos de Cultivo” la realización de casos de uso de análisis aplicando patrones GRASP de análisis.
a. Dinámica con diagrama de Secuencia: Escenario del curso normal. b. Estructura con diagrama de clases.
3- Construya la máquina de estado para la clase “Proyecto de Cultivo”, utilizando un diagrama de máquina de estados.
4- Identificar al menos 2 patrones arquitectónicos relevantes y construir una representación gráfica de los mismos.
5- Utilizando un estilo arquitectónico monolítico, construir las siguientes vistas arquitectónicas, definiendo para cada vista el punto de vista asociado:
Vista Arquitectónica de la funcionalidad. Vista Arquitectónica de Diseño: Componentes e Interfaces Vista Arquitectónica del Despliegue: Nodos y subsistemas principales
6- Rediseña las realizaciones de casos de uso de análisis utilizando el patrón de diseño que considere adecuado para resolver los problemas de diseño descriptos a continuación. Modele la vista de la estructura utilizando un diagrama de clases; la vista dinámica utilizando un diagrama de secuencia y el pseudocódigo o una explicación textual que muestre la implementación de los métodos involucrados:
a) Resuelva de manera efectiva y eficiente las siguientes búsquedas en el sistema:
Búsqueda de los campos que están habilitados
Búsqueda de los lotes pertenecientes al campo seleccionado que tengan proyectos de cultivo vigente
Búsqueda de Proyectos de Cultivos Vigentes de cada Lote del Campo seleccionado
b) Resolver la problemática vinculada a la obtención del reporte de proyectos en las diferentes formas de
visualización que el sistema ofrece, es decir: pantalla, archivo o impreso. Resuelva la forma de creación del reporte teniendo en cuenta la estructura del reporte: un encabezado, la grilla de proyectos (detalle) y pie de página. NOTA: Modelar la dinámica sólo para la generación del reporte en forma impresa.
c) Asegurar evitar colisiones y conflictos al momento que los diferentes usuarios de la Administración Central
de Agro S.R.L requieran imprimir desde el sistema por ejemplo reportes de cultivo.
d) Resolver la problemática de la recepción de datos de rendimiento de las cosechas provenientes de los monitores de las cosechadoras mientras efectúan la cosecha en los lotes, asegurando que será posible interpretar la información, sin importar el formato de la información generada en cada monitor. Los monitores con los que se trabaja son AGCO, Case IH y Topcon. Considerar en la vista dinámica del patrón el Servicio de Monitor AGCO.
Servicio de Monitor AGCO: recibe la Clave de API (*) de autenticación en formato binario y devuelve un vector de String que contiene: la identificación del monitor, fecha y hora, coordenadas geográficas (latitud y longitud), nombre del campo y Nº de lote, los datos relevados: velocidad de la cosechadora (en Km/hora), nivel de combustible de la cosechadora (en litros), temperatura del motor (en °C), rendimiento (en toneladas por hectárea), humedad del grano (en °C), contenido de impurezas (en %).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04pBZJu7papTLCAOEldZF4y1eqlMAuQIS5PtOc9o__w_XOUNMLxBT_nSzfdOK301Lgf4-ymruLLKyE9ikKG-PzqLAHDBZbAyGhYnrhw5lXNWYLbsm0Dt-9mVhYoVRtvZTkyzUs=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3clKGsWN8Qd1iwkyLufrf66JuMXHe61Og3y-hg_qvlV5Scdg_DTtpDaPgn3ynWGJeVdJ7EoY4WBqQLic3JgMwD4QnI4RqkUZY9oJVRUyMHOWwuI1OYEZBVUZ1R30AgblsPiJ4_dg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZEcOcWQ-aNJ05cuXIUEs0ovTkfsLYTzOhhjprdCJZkC8V6aqr4lWQ4Ga71-7Nifc4UT-EwIcpnuEES7aOfdfmFua2ifMfoQ9OwifREBQeISyBA6ZmhqMXTS-T7OPxx3DC1kop=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Servicio de Monitor Case IH: recibe la Clave de API de autenticación en formato String y devuelve un único String con los siguientes datos separados por comas: la identificación del monitor, fecha y hora, coordenadas geográficas (latitud y longitud), nombre del campo y Nº de lote, los datos relevados: velocidad de la cosechadora (en metros/segundo), nivel de combustible de la cosechadora (en litros), rendimiento (en quintales por hectárea), humedad del grano (en °C), contenido de impurezas (en %), temperatura ambiente (en °C). Servicio de Monitor Topcon: recibe la Clave de API de autenticación en formato String y devuelve un vector de String con los siguientes datos en hexadecimal, ordenados así como se menciona: fecha y hora, la identificación del monitor, el modelo de este, nombre del campo y Nº de lote, coordenadas geográficas (latitud y longitud), los datos relevados: velocidad de la cosechadora (en km/hora), nivel de combustible de la cosechadora (en litros), rendimiento (en quintales/hectárea), humedad del grano (en °C), contenido de impurezas (en %), temperatura ambiente (en °C). El sistema recibirá la misma información que proporciona el Servicio de Monitor AGCO, con el mismo orden; cada dato en formato texto, decimal o datetime según corresponda. Los datos relevados (velocidad de la cosechadora, rendimiento, humedad del grano, etc.) se deben agrupar en una matriz String que contenga una fila por cada tipo de dato relevado, asignando en la primera columna el nombre del tipo de dato relevado, en la segunda el valor recibido y en la tercera la abreviatura de la unidad de medida. Se debe considerar que la velocidad de la cosechadora deberá expresarse en km/hora, y el rendimiento en quintales por hectárea, debiendo realizar las conversiones de unidades en los casos en que el monitor los proporcione en unidades diferentes. En aquellos casos en que los monitores envían información adicional a la requerida por el gestor, la misma debe ser descartada.
(*) Clave de API, es una clave que sirve como identificador único que se utiliza para autenticar las solicitudes asociadas entre diferentes aplicaciones. Considerar que cada monitor de cosechadora tiene su propia clave de API para autenticar sus requests y en el sistema se guardarán las claves de API de cada monito.
7- Diseñe las interfaces de usuario asociadas a los casos de uso descriptos a trazo fino utilizando prototipos. 8- Construir el Modelo de Datos relacional a partir del mapeo de las clases persistentes del modelo de clases,
utilizando como herramienta el DER (Diagrama de Entidad Relación). 9- Dado el requerimiento de cambio que se describe a continuación, realizar un análisis del impacto de cambio
en los modelos y luego a. Modificar el modelo de dominio para incluir los cambios requeridos. b. Identificar los casos de uso que se agregar y/o modifican como consecuencia del cambio solicitado
El cliente ha solicitado que el sistema:
administre las restricciones de siembra relacionadas con los cultivos y la cantidad y frecuencia
de veces que un cultivo puede sembrarse en un mismo lote.
informe de estas restricciones al momento de crear un proyecto de cultivo.
genere un reporte de proyectos de cultivo que no cumplen con las restricciones de cultivo para
un período de tiempo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SsS8ydjY-RPldHpS4M1dsskuJp-BMbz48ZSMv2E-pHVRapJUTl4TqhNaqCmah1Qf5Gs5dtk_T8OZEYDe1bLAtT9qFCNmR8yEjFOSoNXpf-rh9ldhKQZ6J4ztYZDqLMg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06C8mUbGuyKct7Lk6MmQurIigaa0RqlAVdBv85RnWdaJ25mEIj8jJaP3sfZDXOnTneKfKP7iGDGnUvvL1EixWldNQ-oxSGzuNseeZx_4XELo1vS1ph0--FH0dQIBjVBQ2egyPrgQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Us2nrvUq_PGY8DkqBbltf7bj8PSSBsunAAffIJ-SPGCfTMqnLO1rSVE0hs08ztAg2NkdTje2Zwup2mEp7OnD6toJivqMcon-RT5Al6FSCzSH6Y5tPcZNnmtwgE8U9mH08i7sJvw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dc13w4C1VAhzGmT_IOaGJt-qo934VquENPZCAGmmnittpUh1SXlrmfBVgglo9rFrZA7BP34EirT1fEadWnjgcNBeT67yCTcZg3kfTHNuf5fv4sjwWDjNnTSC9ATvCY7jnaei98w=w462-h689-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Criterios de evaluación del PPA (Si aplica): no aplica
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Agro SRL es una empresa que tiene varios campos ubicados en la zona de la provincia de Córdoba. La Administración central de la empresa está localizada en uno de esos campos, donde deberá instalarse el servidor del sistema, y los demás campos funcionarán como estaciones de trabajo remotas. Para establecer la comunicación entre el servidor y las estaciones de trabajo de deberá realizar una red privada virtual (VPN). Se requiere para los puestos de trabajo en los campos que cuenten únicamente con una conexión de internet y que la aplicación, desarrollada con tecnología Web, pueda operar bajo cualquiera de los siguientes navegadores: Internet Explorer 11, Mozilla Firefox 51.0.1 y Google Chrome v56.0 (y versiones superiores).
Cada uno de los campos de la empresa está compuesto por lotes que se identifican con un número de lote y cuya superficie se expresa en hectáreas (has.). Cada lote tiene asignado un Tipo de Suelo. Los Tipos de Suelo se identifican con números (desde el 1 al 5) y están definidos a nivel nacional (de acuerdo con los porcentajes de minerales, existencias de lagunas, etc.). De acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 apto para Soja, Maní, Girasol). Cuando se decide sembrar un cultivo en un lote (comienza un nuevo proyecto de cultivo para ese lote) deben realizarse una serie de laboreos en éste, antes y después de efectuar la siembra hasta el momento de la cosecha. Tanto los laboreos como los momentos de laboreo y el orden en el que los momentos de laboreo se realizan, dependen del cultivo (Ej.: para Soja los laboreos son Arar, Rastrillar, Sembrar, Escardillar, Cosechar). La división del campo en lotes puede modificarse, es decir subdividir en más lotes un campo o unir lotes en uno sólo, esto último siempre que tengan el mismo tipo de suelo.
Una de las necesidades que plantea la empresa respecto del software que se debe construir es que debe permitir visualizar para cada cultivo cuales son los laboreos ideales que deben llevarse a cabo y el momento en que deben realizarse. Para los cultivos que necesitan fumigaciones el sistema debe sugerir posibles tratamientos a aplicar de acuerdo con la plaga (langosta, hongo, etc.) que se quiere combatir. Estos tratamientos pueden incluir uno o más agroquímicos indicando para cada uno la dosis a aplicar por hectárea.
Otro de los requerimientos planteados apunta a que se pueda saber para cada lote cuáles fueron los proyectos de cultivo efectuados y los laboreos realizados en cada uno.
Cuando se inicia un proyecto de cultivo en un lote se realizan una serie de laboreos (arar, rastrillar, rolar, fumigar, dependiendo del cultivo), en ese momento el proyecto está en preparación. Luego se realiza la siembra del cultivo. Si por alguna razón el cultivo no nace, puede sembrarse nuevamente o bien abandonarse (cancelarse) el proyecto de cultivo. Luego de que el cultivo ha nacido, también deben efectuarse una serie de laboreos (fumigar, escardillar, etc.), se dice que el proyecto está en la etapa de laboreo post siembra. Cuando el cultivo está maduro, se lo cosecha, de este modo finaliza el proyecto. En cualquier momento, por alguna situación anormal (incendio,
inundación, piedra, sequía) el cultivo puede llegar a dañarse al punto de tener que cancelar el proyecto de cultivo.
Para todos los reportes e informes estadísticos que emitirá el sistema, se requiere que sean visualizados tanto en formato de grilla como en formato gráfico, y que puedan ser exportarlos a Excel y Archivo.
El sistema deberá contemplar que cada usuario acceda mediante una clave, la misma deberá contener como mínimo 6 caracteres alfanuméricos y deberá estar encriptada.
A los usuarios se les asignarán perfiles que determinarán a qué funcionalidades tendrá acceso y esto debe verificarse en el momento del logueo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2grb4zai05NN1dzD1uTUjxCHCeAKYROSxSa9dJFfQ7TaINFQJe_ty2D1U5OCIaQAJp-bLBdxvOSHgH9YwQCd7nwusS9rnR0ZJK_9U5jUhHHaxq9OPnpGRkBFopUcGhzT7IBQH9RA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16sQIoxw3jzrzMxCqICrAwJ1V5S9rOHqLnZqumtmfsDbmB2dhY5fJRQVi1sXEUp4HYVJgtf2xmFp-oP2nVcGoNEQCIdyJMGEPywmD_TCK733ssp9JvW3Nan3hqEMBWuFkrNaqkPg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rN_bPSw_1gYv_jaJqT-ibCFdW0D2RMdAYsQI0truApBulnl8mmhbKkCp0TiOjgABdbIkzgb-AenmRzfM9vhLB6-Xr9cQs-h8nVpDjgYNz-aYbYzLRRNiF5yiuICq4lxnJ4fdWhg=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Se deberá desarrollar un Módulo Mobile que permita enviar información de los proyectos de cultivos a dispositivos móviles (tablets y smartphones) y también mediante los mismos actualizar el estado de las labores realizadas. El Módulo Mobile deberá comunicarse con el Servidor Web de las Administración Central mediante el protocolo de comunicación HTTP, como si fuera un sitio WEB. Además, el sistema deberá procesar diferentes tipos de datos de rendimientos enviados en tiempo real desde los monitores de rendimiento (AGCO, Case IH, Topcon), ubicados en las cosechadoras. Estos dispositivos pueden enviar, a una determinada frecuencia (que es configurada desde el monitor) datos acerca del rendimiento, humedad y porcentaje de impurezas del cultivo, como así también del estado actual de la cosechadora (nivel de combustible, presión del motor, porcentaje de aceite, etc.). Estos datos permiten generar mapas de rendimiento de cada lote, en los cuales se resaltan con diferentes colores las zonas que más producen y las que están dando peor resultado. Con esta información es posible tomar acciones correctivas para mejorar el rendimiento en próximas campañas, por ejemplo, colocando mayor cantidad de abono en las zonas donde el rendimiento ha sido más pobre.
Agro SRL ha requerido que la base de datos de la aplicación sea desarrollada en Oracle 12c debido a que cuentan con licencias de ese motor de base de datos.
Glosario
Término Definición
Sistema Término utilizado en forma indistinta con el término producto o producto de software, para referir al sistema de información que se espera que se diseñe.
Tipo de Laboreo Define cada uno de los trabajos que deben realizarse para poder obtener la cosecha de un cultivo durante la vigencia de un proyecto de cultivo iniciado en un lote. Los tipos de laboreos dependen del cultivo.
Momento de Laboreo
Instante de tiempo en el que se recomienda realizar un tipo de laboreo. Los tipos de laboreo pueden variar de momento y orden, de acuerdo al cultivo. (Ej.: para Trigo escardillar a 1 mes de sembrado)
Proyecto de Cultivo Conjunto de actividades coordinadas y organizadas con fechas de inicio y fin definidas cuyo propósito es la obtención de la cosecha de un determinado cultivo en un lote determinado.
Quintal (qq) Unidad de medida que se utiliza en la agricultura, 1 quintal equivale a 100 kilos.
Monitor de rendimiento
Dispositivo instalado en la cosechadora que mide el rendimiento y la humedad del grano a medida que se va cosechando un cultivo. También puede proporcionar datos sobre el estado de la cosechadora (cantidad de combustible, presión del motor, temperatura del motor, etc.).
Mapa de rendimiento
Un mapa de rendimiento es una sucesión de puntos geo posicionados que muestran una escala de colores que indican patrones de comportamiento dentro del lote.
Definición del Producto afectado al desarrollo del proyecto
Objetivo del Producto
Administrar un conjunto de campos y los proyectos de cultivos que se realizan en cada uno de sus lotes, como así también los laboreos que se realizan en el contexto de cada proyecto; brindando información vinculada a la gestión de proyectos de cultivo, campos y lotes.
Requerimientos Funcionales (Alcances)
🢚 Administración de Campos y Lotes
🢚 Administración de Tipos de Suelo
🢚 Administración de Cultivos
🢚 Administración de Tipos y Momentos de Laboreo
🢚 Administración de Plagas y tratamientos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2t6qn1XUe3IDs--wbEYnb4M2O7RSf1_AD7r4wK1Ijt1vnhyKXrOqUIY8oMtRhQ0xQB-iQfGKeQPfr2KyWhg6-92_6eDVAMdS9Ol-OKE-DE224y8mqQVS7xRffe1N-1u3mSiKEl=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3noeONjdTRzL5yItGB1O_2Q33DQB2hHtkDvxjIjtKcOeV3q6xYDpmMSMx17YjKd_cE3bS4_8EBDKp8bE6j9_ZDu45tAwanDv0JXn_UNp783kxeh2kKcbpi8gBmVLHYgUTTuANRSA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AZb9jEyx3RIG-MnkHZ0GKKluD6gAECEwTmvXsQYyhkzLSDwX5wd6ID6jI4tlvMBfq5w6Me5-3F5mhQ2UweZSPTLB26g1yGYMDUgNLWcueoEl_cG6WaJdspgY0g7_Oi4A4gtNjyw=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
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
1 Tratamiento de Plagas
Una plaga se puede combatir con varios tratamientos. Cada tratamiento implica una dosis específica de un agroquímico.
2 Cultivos para Tipos de Suelo
Los cultivos que pueden sembrarse en cada lote dependen del tipo de suelo que este tenga.
3 Laboreos para Cultivo
Tanto los laboreos como los momentos de laboreo y el orden en el que los momentos de laboreo se realizan, dependen del cultivo (Ej.: para Soja los laboreos son Arar, Rastrillar, Sembrar, Escardillar, Cosechar).
4 Estados del Proyecto
Un proyecto de cultivo puede estar en un único estado en un momento determinado y sus cambios de estado dependen de los laboreos que se realizan en el lote.
5 Proyectos de Cultivo
Un proyecto de cultivo está asociado a un único lote. Un Lote sólo puede tener un solo proyecto de cultivo que esté en estado Vigente en un momento del tiempo.
6 Relación Campo/Lote
Un campo está compuesto por uno o más lotes. Los lotes pueden cambiar su configuración uniéndose unos con otros o dividiéndose. Se debe controlar que la superficie del campo sea la correcta al momento de la creación y/o modificación de los lotes que lo componen.
7 Lotes y tipos de suelo
Un lote tiene un único tipo de suelo.
8 Tipos de Suelo
Los Tipos de Suelo se identifican con números (desde el 1 al 5) y están definidos a nivel nacional (de acuerdo con los porcentajes de minerales, existencias de lagunas, etc.). De acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 apto para Soja, Maní, Girasol).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u8ExydgiGgExvT2lDXGQbIu3s5DrI7RnthnBXFa8ml9EDnZFaDdzBtCOSn5f8AtXC-lE80hCa6fH0gKJf5eEvURDQyyTGejKpbYMnmyKHYJrdrfy3comkgtJKUahn-Af0EjRQvA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3o7pR9pqZYCjVi-xOM3tw6pgtI2UJac8U5u5i-6cxR6N-Vz74s4DUuGbCjCyE2EJ6SLzSkgFF1PF0yUPN3NHwdz0jbfC4G1fzsgrgXn5jiNkDJ2YCGVVsdnEdxepdXpF-B_vYw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nHh081FWNH-gLBuxBfBndAzyRlUTOlMqr81gYRHP5xUwOnCgKRc5HMFgEisooHl0alUAbfmIc_rkq9yf_QEJ3R9YQgH6nmiN9x4EiN-ToWryZJSVQMlzdNrLzr-svshtYKPFVMQ=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Listado de Casos de Uso
(Los casos de uso sombreados están especificados)
Nro. CU Nombre Objetivo
1. Registrar Laboreos en Lotes Registrar uno o más laboreos realizados para cada Lote seleccionado de un campo.
2. Generar Reporte de Proyectos de Cultivo
Generar un reporte de los proyectos de cultivo en función de un conjunto de filtros aplicados
3. Modificar Laboreos en Lotes Modificar uno o más laboreos realizados a un lote seleccionado de un campo.
4. Consultar Laboreos en Lotes Consultar uno o más laboreos realizados para cada lote seleccionado de un campo.
5. Cancelar Laboreos en Lotes Registrar la cancelación de uno o más laboreos realizados para cada lote seleccionado de un campo.
6. Registrar Usuario Registrar los datos de una persona que tendrá acceso al sistema.
7. Iniciar Sesión Crear una sesión de trabajo para un usuario registrado en el sistema y verificar los permisos de acceso a las funcionalidades del software.
8. Cerrar Sesión Cerrar una sesión de trabajo iniciada por un usuario registrado en el sistema.
9. Modificar Usuario Modificar los datos permitidos de un usuario.
10. Eliminar Usuario Eliminar un usuario y sus permisos asociados.
11. Consultar Usuario Brindar información sobre uno o más usuarios y sus permisos asignados
12. Registrar Campo Registrar los datos de un campo y todos los lotes que este contiene.
13. Modificar Campo Modificar los datos permitidos de un campo y/o de los lotes que este contiene.
14. Consultar Campo Consultar los datos de uno o más campos y de todos los lotes que este contiene.
15. Eliminar Campo Eliminar un campo y todos los lotes que este contiene.
16. Registrar Tipo de Suelo Registrar los datos asociados a un tipo de suelo.
17. Modificar Tipo de Suelo Modificar los datos permitidos de un tipo de suelo.
18. Consultar Tipo de Suelo Consultar los datos de uno o más tipos de suelo.
19. Eliminar Tipo de Suelo Eliminar de un tipo de suelo.
20. Registrar Estado Registrar las características de un estado.
21. Modificar Estado Modificar los datos permitidos de un estado.
22. Eliminar Estado Eliminar un estado registrado.
23. Consultar Estado Consultar información sobre uno o más estados registrados.
24. Registrar Cultivo Registrar las características de un cultivo
25. Modificar Cultivo Modificar los datos permitidos de un cultivo.
26. Eliminar Cultivo Eliminar un cultivo registrado.
27. Consultar Cultivo Consultar los datos de uno o más cultivos.
28. Registrar Empleado Registrar los datos personales de un empleado.
29. Modificar Empleado Modificar los datos permitidos de un empleado.
30. Eliminar Empleado Eliminar un empleado registrado.
31. Consultar Empleado Consultar información sobre uno o más empleados registrados.
32. Registrar Tipo de Laboreo Registrar los datos de un tipo de laboreo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aSLsx9g-3pucDRBSiD5u3aJWHGGEPJsTtIFeyY8eU1cziyGseqI6vnM5ZXXUppCF_IXwR54nIacLhg1py1P4RWZJwWn8LZzwnARIqnQOrM_NCu15yIhTgk0tdSrQGEG7T5hZjbw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PfIjnwlgYbqFi5TNXpCUU8j56mgm-zgX5PVUPeSSgwEgDs8Bn4qGsr8I6pil0E7CD1VOuB15vEEMDthnndlQHcmgZ3hWIsAQ5sCw_rNm60lsWG5eK5KEvyDJ8L0ZiHG7wswMxgw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19w3W-Wd4TGXm2qLY36LsiHrfSKeXFuhiEkbUf74OHNRLctDtFeM7edNVxHKOEv4iohegmomcl_70J2DktxJb92Agyn3xdO_1x837oahz7d9X4T_Y7zmkezCgAETJR_5o-pD4YQQ=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nro. CU Nombre Objetivo
33. Modificar Tipo de Laboreo Modificar los datos permitidos de un tipo de laboreo
34. Eliminar Tipo de Laboreo Eliminar un tipo de laboreo registrado.
35. Consultar Tipo de Laboreo Brindar información sobre uno o más tipos de laboreo
36. Asignar Laboreos para Cultivo Realizar la asignación de laboreos y los momentos de laboreo apropiados para un cultivo.
37. Consultar Asignación de Laboreos para Cultivo
Consultar las asignaciones de laboreos registradas para un cultivo.
38. Registrar Momento de Laboreo Registrar los datos de un momento de laboreo.
39. Modificar Momento de Laboreo Modificar los datos permitidos de un momento de laboreo.
40. Eliminar Momento de Laboreo Eliminar un momento de laboreo registrado.
41. Consultar Momento de Laboreo Brindar información sobre uno o más momentos de laboreo.
42. Registrar Plaga Registrar los datos de una plaga.
43. Modificar Plaga Modificar los datos permitidos de una plaga.
44. Consultar Plaga Consultar información sobre una o más plagas.
45. Eliminar Plaga Eliminar los datos de una plaga
46. Registrar Agroquímico Registrar los datos de un agroquímico para el tratamiento de plagas.
47. Modificar Agroquímico Modificar los datos permitidos de un agroquímico.
48. Consultar Agroquímico Consultar información sobre uno o más agroquímicos.
49. Eliminar Agroquímico Eliminar los datos de un agroquímico.
50. Registrar Tratamiento para Plaga Registrar los datos de un tratamiento para una plaga en un determinado cultivo.
51. Modificar Tratamiento para Plaga Modificar los datos permitidos de un tratamiento para plagas.
52. Consultar Tratamiento para Plaga Consultar información sobre uno o más tratamientos para plagas.
53. Eliminar Tratamiento para Plaga Eliminar los datos de un tratamiento para plagas.
54. Registrar Permiso Registrar un permiso que se asociará a un usuario.
55. Modificar Permiso Modificar los datos permitidos de un permiso.
56. Eliminar Permiso Eliminar un permiso registrado.
57. Consultar Permiso Consultar información sobre uno o más permisos registrados en el sistema.
58. Registrar Asignación de Permisos a Usuario
Registrar la asignación de permisos a un usuario.
59. Consultar Permisos de Usuario Consultar información sobre uno o más permisos asignados a un usuario.
60. Eliminar Permisos de Usuario Realizar la eliminación lógica de los permisos de un usuario.
61. Generar Reporte de Tratamientos para Plagas
Generar un informe de tratamientos disponibles para una o más plagas.
62. Generar Histórico de Proyectos de Cultivo por Campo/Lote
Generar un reporte que muestre para un período de tiempo, los proyectos de cultivo realizados para un campo/lote
63. Registrar Rol Registrar un rol que se asociará a los usuarios del sistema.
64. Modificar Rol Modificar los datos permitidos de un rol.
65. Eliminar Rol Eliminar un rol registrado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gpcWYzSTZCrWtyKgmt3r8iG-W5D9SYpl7Ujtj1sVUgR0yFHBQHmUCKdLS_uDGkQQ2hawv0o6V9cSL7i5QkdLDM5V6dtFsY-jkeDUCFPsLSH90_6WDOD-WNv7BKZmfxATtIdqusg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Bs5O5rw3gqYAseZZGDuYqUkP2c7GfEW5yyAdGGREslaBcgBafYVsyfxWpLgrPci6FssvizVEkSGwUtRZWhm7uFRSc6AROb7xuSf_Cg0TVB38y1u3_QZO52hpLSgKC7iqHMnUl_A=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2F49mS7XeY-BjWVAVClPMKJXbCKD-Vuqx06MaE6NKwPGg1coqhzh2gfjEPw-oO4_quUhMzNyjs83LAQ5y442rWsGr81hT6B1tAyBsTaE3HJ-N99aN93CjDcs-I0QZjmlmm6iqfZA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nro. CU Nombre Objetivo
66. Consultar Rol Consultar información sobre uno o más roles registrados en el sistema.
67. Registrar Proyecto de Cultivo Registrar los datos de un proyecto de cultivo que se realizará en un lote de un campo.
68. Modificar Proyecto de Cultivo Modificar los datos permitidos de un proyecto de cultivo que se realizará en un lote de un campo.
69. Consultar Proyecto de Cultivo Consultar los datos de uno o más proyectos de cultivo.
70. Cambiar Password Registrar un cambio de palabra clave realizado por un usuario.
71. Cancelar Proyecto de Cultivo Registrar la situación de abandono de un proyecto de cultivo.
72. Importar datos relevados por Monitor Importar y registrar los datos de cosecha relevados y enviados por un monitor de rendimiento en un instante de tiempo.
73. Generar Estadística de Rendimiento de Lotes
Generar estadística comparativa que muestre para un período de tiempo, el rendimiento de los cultivos cosechados en los campos/lotes.
74. Generar Reporte de Laboreos en Proyectos
Generar un reporte de laboreos realizados en uno o más proyectos de cultivo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AXGg-RPEjY6BaiWqB2t59YHqEz4vcgJPiHOED91mvzLP--LM_snL0UnVagRePjBJy2b_ebvqHiAXQU8W1oXQuZGxgoW_Hewn7qlIogtLHPYyj9oJK89nDvt01Pa_3gTxIFOL3Yw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DEp6FUMmqdxgQZZqAAYuxOGSvUEB2K3mUxveACEjdl4kaahUa0Ym_NwRSumDWP6OPvFZHzfygYIgBOnkeAvJvHMFCjiCsJ3EvWWIYaF5l4ugrM4Qlwjf3mjeEBWWJ_iFVjCvu=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cv32Se7qX6J2IJs2tBEpBWwCRWHa6UGQwgvWjKUJBlZs7QksfrlxYQ5kzLYJgnK4Erm4SFFftuKVSiyXRLJWFbGbWrzubK51nH11UYCVATH31H8C6YMbfsZDZmpUCHXsJgY-L=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XQ3pNL98m_rWjqutg5Lq1vM_Bn2axy1YZTJhKA0W6qanU-YzbOPuQHZf0Zi2sQSkPQTsUIzSDoW1wL8VHzIOJHOqvR4Wf5ZhsLsqfX-wKDuKZbNOGrnGO9YyMhT3kMwyROjnKyg=w1280-h1011-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Diagramas de Casos de Uso – Vista esencial
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K0xYBlwr6VNqLLQ4NvxJT6fsbIRgOrddp1z009waxsrCjlx2CKY4bzrmPiwtTLftmyF6AeuClsZsc5C8ggHDIUWVQnAleFuBWjRaUEUy3pNI3nyMnV_JCGzudTFe1-zNPWgIw2g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Z-u1c-dwpveygSVU2mOSqWHJsBOdjaPx38g2ZK9afCefSs2nKbNkvDHSLHowIIjrJO_N8cFKA7dXsVjj__gLi1cYQMV2pOfBt4-Y8526VQuEh1Clas6ZosYHp83jVz_S8-adWtg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mTuGDoGqKxWiOf2N6zuEKIVoTIl1xXg2EjtmA3EHFvMv3VebX8xW7pkqAEy5UwUWX9Jjss85_4Et6aF0IcASAvVlu-XFTzJgmHYMBBnIAsofGfwfatnNSoZx7xO1_lX7Qbfg3Ig=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QLU9NhtbADW8OXw31pW6G-1anNhYio5-B7nJ6z2MskTMtY1wLCdPDiG6wwhu7JTpgol9KwDtj2lxPiUwHAvfnAIgruXs711gcXBkEXLz4MbJOrrPvFZYI7nHJRhq8m6s9_cVv=w810-h679-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Diagramas de Casos de Uso – Vista por alcances Administración de Tipos y Momentos de Laboreo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-EP6cOgvK5ZOWbZJu7nWPWhYwLd_ON47ilfPzI8tZE1Bvrhb9DsLZ12afURChytUuUO0eF1rjoV4k-1xmPMKS5xrbIr3lw66ET5fRQimr7gMgMTwZxNOvUVAS_mRFeAjv97ZHLg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1G8PaXK5DPckwN9Z92ZTp93aKSUCNo-s3-vEt8pg3Akn379EohKKfhxHJaTdk8OcapXpuN3Ls64oK4yBVqFkaju5Hc-TLlLo-e1pJKhuKALAEBLMs4uI6SoS16YGHHSUqfexwzBQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0x3pWxFTzEeEOj1h9N8a7Cy3Tv8pQBSE-Pv0WLzH0F0_JhLitjRRjY5Pf9nNMJIIuiduJEsu2ugJx5RxZnuzIwtYPYNERyQStURsXrxdNuuGSKmrqUzb1CHcf34nf6uzK_vIdgWw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Mhuy2EqNmDzB2IyW6gM2SMm9tUszjHbOZhnDMBzNFkdGmcoHVIM5AusZ4hTqYgvmPohTm464TQNp7Cz3fkQWfwsOZ0tpiK7iZcklJ0DuRsEsq8neDdqa85JiUn3rNNX2gEtuG=w455-h481-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24iS2B1_UdW688ujG65YNiZbEn5TVBMrOfz24Yy8MVviWBmI48vsABEJg0HTO2WzTVHu476eGKvWsLVjUa3tJdIaQhDc8zDVPSwykC8RSP_2kCoSgN4z5I4SiO2ZnLn99CcLDDPw=w573-h617-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HHcseIgLMu6DE7REWPVPm_n-kra7Sw6AdV5l4PyBzinp0HDafI58FAAPigR03qrDEB6FnU1vT5zJgsmWgsSjw2Uv2bRnIpCYi8QSGBo60adPvgTDSjUKBEUC00MkH89G--t3rgA=w1116-h787-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Administración de Cultivos
Administración de Tipos de Suelo
Administración de Plagas y Tratamientos
Gestión de Proyectos de Cultivo y Laboreo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wqgWaj_bJ-e3UPTUunfXdMVFj3_8TX2tlsxjz9u7VwzCprD53ri3QdfbfA7iRKzCAsOwNP-XG5kMoM0YJjPQzAiM0UtEYCnY8wvCvjUu02Ova79xg8pS_hNRfI1LzlzfK54iWww=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZFBtOpUYf5k9AARazWWBlKRF66khKRtp-l-ZBm2r_90GVe4vHAyRe3fIbs0b8NMLWfPjmaaPVqzAh8aoCZYYAJ5JmPuDXGZIuHh_WGZ4ucPQ6P90y0yEIp8f0UWxDuTYhYbvJ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04AKqJqdbBDWfJ3PHeczEVZoYJzbghEzYfHpNxvlluumivJsLOVf4fFJ9cLhODxOPNlXfD-leWsOcFP5zD1n3HfEJAj_lYF40ghQzS5QOQyuVbpmAR4gr_BOVXpanHJDQLh_jZ_w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tg6SwZn1x8k_bjMO-fzLJGMt31XZS18y4ZUbmmGwJaqvKdD2DAWedcMdiihWTw-f832KGoq98cr1mJ5Y2ilRfKC9hJYEqd2xYqoBzdkGqEt_Xm6hg_zWhWowNMxml9XfsIJhkeg=w1128-h654-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XTSyLRmn3LNlxCdihGUeTqaBYJQhw5HUi6KoWutNTB91k8PiHa7NWhuCQDUaKkOrhcah4Pkf_8q0Dlon3_UtVghf2cGd_dUeJe5GSWJ_zbNDUu9CO8nmKKjhnbGM424tIkogUkg=w1280-h574-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Generación de Reportes
Administración de Usuarios y Permisos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hpT-61RUnwhsMydr5gIij9RptgbRxWGMhkDY9othG5VvX-oHnajjpPexusCbBVRJbqUen3DA4oIu2X3e5zAEYT3zsEvQsCC4n3rNF8ZZKFK38anUsUQlpBVn1sISihzOMq05O4g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-PjFRWuNCYHiFbCB_HOFYU5aMTRbf0gpouBW0AQTO28IQiTVOLiK9BppkhtqPo4al4SlN1pF3fwHN8F5JYKryRXVY2oueLPikA-L2QOZh6qHP8ICXrEPhQ13uNBMD8Tpg2kGoiQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07dVlWY2a-_LA4CEY5_2Jox0-VoDQHmNhPz77jJ_eXVtgnW0ZVV94bdv3fu3z26_naHdg9THEyU-Gty0aL8n-HH-ESsruZI7PP5D2YTug5FEnkg3pWf2B5c6HVtLQGS6A9iI5CRA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xnWSrBghCwIa7SbhBZ37pBnW4YxdYX88XIQUqGsYZ0eR4P6qXCAW6jYBnZxivDFIKr-bYe5kqoWNUje2_6ZVTJKfdsGthXqovzophhDqPCtwozxh04QNtw8B7Crtw6bG-NqmzuA=w1280-h1005-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Sv2o_FfhuxYTnElPM76QJ1sjtJR4w0HXfDq8ZpQu_BhfAPgN1O5g6UnJSPiICYmfTT-ReJCKQIT54_LO6OZxw-G4aI0doReH5RoFwZQ9q1JyN7l94CGCwDTyu1hgaTnzw_8rSYw=w1137-h595-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Administración de Campos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CAjNF3vXOKyfEm5rjuQ5vDC1rBu_GY-z7ZI3NixVY68PlbOp_K822PoMmPGYjk3QDsjplJZM-OpzN73_eWXOxdoFkLassEfgP5mwBZGlvwkO0102o0cMm7M1KSh0POHW52sDP9g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv259Kz85df08e521HdnVWXnGIp4Kiy28PmIhK3Gd5emfktLkdJMLTLcEJq4rNnY3wpyRK-VRwQ2PpYbOvhoHE_2qcl-DzOCKQzpVkRuy4Rc6sQTHihu85T-x08Y9mBDpk1aWDe1=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IjOBWAWQQNQ5JvVHIIwTgpMx7l_Q1aFZCtlH58tZXcA12KXWe3c9ZmbJBH-81jK4kD9zmhg9YjS6uPsWxFLpwY6rSZX6ia8q_u327dZc8sK8HzIfU49ctze9iJ-o_MNfpgusM=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Especificación de Casos de Uso
Nombre del Caso de Uso: Registrar Laboreos en Lotes Nro. De Orden: 1
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Laboreos (EL) Actor Secundario: No Aplica
Tipo de Caso de Uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar uno o más laboreos realizados para cada Lote seleccionado de un campo.
Precondiciones: usuario logueado
Post- Condiciones: Éxito: Laboreo/s realizado/s registrado/s.
Fracaso 1: No existe ningún proyecto de cultivo vigente para los lotes seleccionados. Fracaso 2: El EL cancela el caso de uso. Fracaso 3: El EL no confirma la registración del/los laboreo/s. Fracaso 4: No existe ningún campo habilitado.
Curso Normal Alternativas
1. EL: Comienza cuando selecciona la opción Registrar Laboreos en un Lote
2. Sistema: muestra el nombre de todos los campos habilitados y solicita se seleccione uno.
2.A. Sistema: no encuentra campos habilitados. 2.A.1. Sistema: informa la situación 2.A.2. Sistema: se cancela el caso de uso.
3. EL: selecciona el campo para el cual quiere registrar el laboreo.
4. Sistema: busca los lotes que corresponden a ese campo que tengan Proyecto de Cultivo vigente (significa que no esté en estado final) y encuentra al menos uno. De cada uno de ellos muestra el número de lote y la fecha de Inicio del proyecto vigente y solicita que se seleccionen los lotes para los que quiere registrar laboreos.
4.A. Sistema: busca lotes que corresponden a ese campo que tengan Proyecto de Cultivo vigente (significa que no esté en estado final) y no encuentra ninguno. 4.A.1. Sistema: muestra un mensaje informando la situación 4.A.2. Se cancela el caso de uso
5. EL: selecciona uno o más lotes.
6. Sistema: Para cada lote elegido muestra el nombre del cultivo y los laboreos efectuados en ese lote, correspondientes al proyecto vigente.
7. Sistema: busca y muestra los tipos de laboreo aplicables al cultivo.
8. Sistema: Para cada laboreo que se ha realizado y se desea registrar solicita que seleccione un tipo de laboreo.
9. EL: selecciona un laboreo.
10. Sistema: solicita se ingrese la fecha y hora de comienzo, fecha y hora de fin del laboreo.
11. EL: ingresa la fecha y hora de comienzo, fecha y hora de fin del laboreo.
12. Sistema: valida las fechas y horas de inicio y fin del laboreo y son correctos. (ver observación 2)
12.A. Sistema: Las fechas y/u horas no son correctas. 12.A.1. Sistema: muestra un mensaje informando la situación y solicita que se ingresen nuevamente. 12.A.2. EL: ingresa nuevamente los datos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OuSubm1J9px6PvmxrLsfAsuoYItJJBIA5nrqJxC0kqt7S9qDu-1k58zZSwOC17QE22figLB9ZgbaBX8TrTE4dAIiZkmCH_6lN_l5P5AfGG-s2ANyoBG4JFPillElgcne3XWQl=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gz7ly7rumvBH4YvZPv_IW5DI4RHNOZKIiyrJwnLGjkqX1_bqDTB43AfFS9-mDIODUWhKnRXmeqTkzJQOWZMHvlG2ArUVH4aFUVG2QwWw_UmTbODS8ocRCEOMrMx2k7Mg8LA8QMQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0szdaG2qgeQD8Tk-brxjcyOx_4W9lEJX_Ea7tp3RlypHSkvvVbWW_8gJfHqfGheNbqOJNKY3EkXr8Eot84TcIwTz8kzpNwMJtCReyhopIP_CvLjAnEQz0CBhkUnap2ESvyVKCr_w=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de Uso: Registrar Laboreos en Lotes Nro. De Orden: 1
13. Sistema: muestra los empleados y solicita se seleccione el empleado que efectuó el laboreo.
14. EL: selecciona el empleado.
15. Sistema: Para cada laboreo a registrar solicita confirmación para efectuar el registro.
16. EL: confirma el registro. 16.A. EL: no confirma el registro. 16.A.1. Sistema: Se cancela el caso de uso.
17. Sistema: registra el laboreo realizado con los siguientes datos: fecha comienzo, hora comienzo, fecha fin, hora fin, empleado que lo efectuó, laboreo realizado.
18. Sistema: Valida el tipo de laboreo, y NO es siembra ni cosecha.
18.A. Sistema: El tipo de laboreo es siembra. 18.A.1. Sistema: Actualiza el estado del proyecto de cultivo a En Siembra. 18.B. Sistema: El tipo de laboreo es cosecha. 18.B.1. Sistema: Actualiza el estado del proyecto de cultivo a Cosechado.
19. EL: Selecciona la opción para finalizar el registro de laboreos.
20. Fin del caso de uso.
Observaciones: 1. El EL puede cancelar el caso de uso en cualquier momento eligiendo la opción para tal fin. 2. Valida fecha de inicio menor que la fecha de fin y que no sean mayores a la fecha del día.
Asociaciones de Extensión: No aplica
Asociaciones de Inclusión: No aplica
Asociaciones de Generalización: No aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iLlNQqsBagFlwTjzYpO-XUW-_CDHW7CI9zfwKQAElaw10wUl57DXWIJPn9tTk3LRVub-JMWRG8-3eB7b-CxSlAPcgCTAUyrjdVZwb4djst1B_PCPz7uIWDlftEab1-vH4AQMnhA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vSLQuqLYxzGNs3YrwU24fMLZNY47wLK-5XgNA7bkthBPlzrmMUg6YFkTVEh9GL_GvynXQHI0jCEP9JEjxbimpPHZ1Tjcf749VuCP1N42TEOIfTgJuWxJTBx8RsMc30DFl6V5H=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37RWu3HHQ-ZaIVw54zRqKBpRQ2XRw40GWZL1zQ-3npJZOcqkXfb7NANQUsjUBKOaZFQFNv4rTgMShlhu-Mpk8Ki-KlaAASrRs9t_WRl6zslzeUFm3JI4buHMEq3WiqKxx0onKMCA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Paquete: N/A
Nombre del Caso de uso: Registrar Laboreos en Lotes Nro. de Orden: 1
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de Laboreos (EL) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar uno o más laboreos realizados para cada Lote seleccionado de un campo.
Flujo Básico
1. EL: selecciona la opción Registrar Laboreos en un Lote
2. Sistema: muestra el nombre de todos los campos habilitados y solicita se seleccione uno.
3. EL: selecciona el campo para el cual quiere registrar el laboreo
4. Sistema: busca los lotes que corresponden a ese campo que tengan Proyecto de Cultivo vigente (significa que no esté en estado final) y encuentra al menos uno. De cada uno de ellos muestra el número de lote y la fecha de Inicio del proyecto vigente. Se solicita que se seleccionen los lotes para los que quiere registrar laboreos.
5. EL: selecciona uno o más lotes.
6. Sistema: Para cada lote elegido muestra el nombre del cultivo y los laboreos efectuados en ese lote, correspondientes al proyecto vigente.
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
17. Sistema: registra el laboreo realizado con los siguientes datos: fecha comienzo, hora comienzo, fecha fin, hora fin, empleado que lo efectuó, laboreo realizado.
18. Sistema: Valida que el tipo de laboreo no sea siembra ni cosecha.
19. EL: Selecciona la opción para finalizar el registro de laboreos. Fin del caso de uso.
Flujos Alternativos
A1: No existe ningún proyecto de cultivo vigente para los lotes seleccionados. A2: El actor decide cancelar el caso de uso. A3: El actor no confirma registro de laboreos. A4: El tipo de laboreo es siembra. A5: El tipo de laboreo es cosecha. A6: Las fechas y/u horas de inicio y fin de laboreo no son correctas.
Observaciones: 1. El actor puede cancelar el caso de uso en cualquier momento eligiendo la opción para tal fin. 2. Valida fecha de inicio menor que la fecha de fin y que no sean mayores a la fecha del día.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LK0Zg6oU_Clvaxyb-1a1LPd8ZMVljepZjWgy1R3V1_ZKBm_1vi7UmYGuPMrRAM3PpdXnw3CtKr1mf5wB0M4XyOvNKbJPe0z38dqxeHqv093h5fbaegBdLAoJfWV3_pSUSli1_mg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv242KWQu2uvH0vn5I0mWgWIixOgp9KqWN0r-1yZUJSGXVhzhINZqLzzO2bPm4ynimahEosm7jYWxaxUvZHoJ7riRzaFK2K9t7xtAPbiZR6W72sffmgwzSxOupGvQzEOmgkhPviaUA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BqYhxlS-tnU8ViBFahRnVW961ORmC--KM2m-McG8SEDnvYgS7oLo6EhTkd1BkRKi36otocHk-n7oQv2veEr40dB_VJ8PUeS6zk2DwCxcXSM3kPCGDtlGI61oIuYevhPbbdpouZA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de Uso: Generar Reporte de Proyectos de Cultivo Nro. De Orden: 2
Prioridad: ☐ Alta ☒ Media ☐ Baja
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Proyectos (ADM) Actor Secundario: No Aplica
Tipo de Caso de Uso: ☒ Concreto ☐ Abstracto
Objetivo: Generar un reporte de los proyectos de cultivo en función de un conjunto de filtros aplicados.
Precondiciones: usuario logueado.
Post- Condiciones: Éxito 1: Reporte de Proyectos generado e impreso. Éxito 2: Reporte de Proyectos generado y visualizado en pantalla. Éxito 3: Reporte de Proyectos generado y archivo guardado. Éxito 4: Informe de Reporte de Proyectos sin datos encontrados para los filtros seleccionados.
Fracaso 1: El ADM no confirma los filtros aplicados. Fracaso 2: El ADM cancela la operación.
Curso Normal Alternativas
1. ADM: Comienza cuando selecciona la opción Generar Reporte de Proyectos.
2. Sistema: Busca los campos habilitados, los muestra, y solicita al usuario que seleccione los campos para los que quiere generar el reporte.
3. ADM: Selecciona los campos para los que se quiere generar el reporte (pueden seleccionarse todos los campos).
4. Sistema: Busca los lotes asociados a los campos seleccionados y los muestra, solicitando que se seleccionen los lotes para los que se quiere generar el reporte (pueden seleccionarse todos).
5. ADM: Selecciona los lotes para los que quiere generar el reporte.
6. Sistema: Busca los cultivos y tipos de suelos existentes y solicita que se seleccionen.
7. ADM: Selecciona los cultivos y tipos de suelo para los que quiere generar el reporte.
8. Sistema: Solicita el periodo para el cual se desea generar el reporte.
9. ADM: Ingresa el período.
10. Sistema: Valida que se ingrese un período y que sea válido (la fecha desde sea menor que la fecha hasta) y lo es.
10.A. Sistema: El período ingresado no es válido. 10.A.1. Sistema: Solicita se ingrese nuevamente el período. 10.A.2. ADM: Ingresa el período. 10.B. Sistema: Verifica que no se ingresó período. 10.B.1. Sistema: Solicita que se ingrese el período. 10.B.2. ADM: Ingresa el período.
11. Sistema: Solicita confirmación de los filtros aplicados.
12. ADM: Confirma la generación del reporte con los filtros aplicados.
12.A. ADM: No confirma la generación del reporte con los filtros aplicados. 12.A.1. Sistema: Se cancela el caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bwKLYTRfsf2rJ2K8nVzTMMgQW94J9B7wqBFz1SDjBF1DlLnKBxv9Q_y68v23-6gXeIR1vQr6cLJ2xmM9syJx_g9g8GSOcdlfUGQfOfdnsYlSJd2RCDv-75Jm0Eg9BctivhCwIHg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GyVKrtdkSggDcgqUVTzJXpHc--CFsXrmCQTjnnu9_SXmfEpIUm7w1wTCc-aJLZ6TSfbzE-ghjR2SmRHRDWyjMuwoqN6EwSy-uhoA5ek_ZSglakygbTKHMIUJaE5LqfEKgd5q-jA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv171usKebiq3PQdIFsLk1N0weV3xN48JoX6PCsUIUlHfx12HIuTqKkLH5_mtxw-d24u9nLwM5liO45CSWuXlgVL3fRQTtOt8OTm5ZFrraWar-l8MA4A_3SA77e6Coe2vr9AbLB4zA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
13. Sistema: Busca en función de los filtros y el período seleccionado la siguiente información: para cada lote del campo muestra el tipo de suelo, los cultivos de los proyectos de cultivo que se han aplicado en el periodo solicitado, el estado de cada proyecto de cultivo, la fecha de inicio y fin de cada proyecto de cultivo, y encuentra datos que cumplan el criterio.
13.A. Sistema: No encuentra datos que cumplan con el criterio. 13.A.1. Sistema: Genera el reporte sin datos e informa la situación. 13.A.2. Sistema: Fin del caso de uso.
14. Sistema: Solicita se seleccione la forma de visualización para el reporte.
15. ADM: selecciona la opción de visualización impresión en papel
15.A. ADM: Selecciona la opción de visualización por pantalla. 15.A.1. Sistema: Muestra la información. 15.A.2 Fin del caso de uso. 15.B. ADM: Selecciona la opción de visualización en archivo. 15.B.1. Sistema: solicita se ingrese el nombre para el archivo y seleccione el lugar para almacenarlo. 15.B.2. ADM: Ingresa nombre de archivo y selecciona el lugar para almacenarlo. 15.B.3 Sistema: genera el archivo. 15.B.4. Sistema: Fin del caso de uso.
16. Sistema: Imprime el Reporte de Proyectos.
17. Sistema: Fin de caso de uso.
Observación: El ADM puede cancelar la operación seleccionando la opción correspondiente en cualquier momento.
Asociaciones de Extensión, Inclusión y Generalización: No aplican
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3njY4olzqG_bzBIIJpuCqIUpT3dTrHfuFYgpogDwjVN8v-6FMzN_SvRJEXOrklONeoXtINJY4NNLEpUzPNPEw9CwDzS6KxU87VoEvTvwWOQqzE6MW9axHCrzDRCOnJbZmvBkimbA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SKJN5psqCurI8YubEFy_f7giu6Rb4jhjGPJYeptn-ccl1btdULk7XDEAFXfRWyXPXAKe-OSotYtAkEOLPu_DDjXQQqrkGUCaWAE5WavtXOVDPDnymNU6VqJcIloOY6ViByhRRmg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JnrIM8Zf7iNvelJyXlTH8rvXgkXaOB7KP-gnw3CtaXaax-FH_llOdgNmdC_5fsg3Pj-4VG1IefAisq8Lzl7hvHBTZbwLWJkfDZGKxTrSNf8w0apmTBPIz_oYSNQ1V9EUOJAbylA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Paquete: n/a
Nombre del Caso de Uso: Generar Reporte de Proyectos de Cultivo Nro. De Orden: 2
Prioridad: ☐ Alta ☒ Media ☐ Baja
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Proyectos (ADM) Actor Secundario: No Aplica
Tipo de Caso de Uso: ☒ Concreto ☐ Abstracto
Objetivo: Generar un reporte de los proyectos de cultivo en función de un conjunto de filtros aplicados.
Flujo Básico
1. ADM: Comienza cuando selecciona la opción Generar Reporte de Proyectos.
2. Sistema: Busca los campos habilitados, los muestra, y solicita al usuario que seleccione los campos para los que quiere generar el reporte.
3. ADM: Selecciona los campos para los que se quiere generar el reporte (pueden seleccionarse todos los campos).
4. Sistema: Busca los lotes asociados a los campos seleccionados y los muestra, solicitando que se seleccionen los lotes para los que se quiere generar el reporte (pueden seleccionarse todos).
5. ADM: Selecciona los lotes para los que quiere generar el reporte.
6. Sistema: Busca los cultivos y tipos de suelos existentes y solicita que se seleccionen.
7. ADM: Selecciona los cultivos y tipos de suelo para los que quiere generar el reporte.
8. Sistema: Solicita el periodo para el cual se desea generar el reporte.
9. ADM: Ingresa el período.
10. Sistema: Valida que se ingrese un período y que sea válido (la fecha desde sea menor que la fecha hasta) y lo es.
11. Sistema: Solicita confirmación de los filtros aplicados.
12. ADM: Confirma la generación del reporte con los filtros aplicados.
13. Sistema: Busca en función de los filtros y el período seleccionado la siguiente información: para cada lote del campo muestra el tipo de suelo, los cultivos de los proyectos de cultivo que se han aplicado en el periodo solicitado, el estado de cada proyecto de cultivo, la fecha de inicio y fin de cada proyecto de cultivo, y encuentra datos que cumplan el criterio.
14. Sistema: Solicita se seleccione la forma de visualización para el reporte.
15. ADM: selecciona la opción de visualización impresión en papel
16. Sistema: Imprime el Reporte de Proyectos. Fin del Caso de Uso.
Flujos Alternativos
A1. El período ingresado no es válido. A2. No se ingresó período. A.3 El Actor no confirma la generación del reporte con los filtros aplicados. A.4. No se encuentran datos que cumplan con el criterio de filtro aplicado. A.5. Opción de visualización del reporte por pantalla. A.6. Opción de visualización del reporte en archivo.
Observaciones: 1. El ADM puede cancelar la operación seleccionando la opción correspondiente en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NtY-6Q9R_OP3hfp4o0pXPysSdA6fWx2EqxfLi5MRP-2JtzBme-ZAAaFS2CJpNrx29X0eVV3U0XwbjpaVWBpdYU_zQSEiCPh9qOW9-9mry8LhR3rH_aYEROhvRGEei-mY-WFB_Cw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00Ma53OaWJoxzVA3QINKty_rEy2nOImz9hmIT-mnXmNsFxRlh4MOzPbzsk2fuUkvaLIssvSc2PNeQQ7jYcl0iCLPG-thM60EknEetDNLPlmbCYb-3UpuPtUJ5v_N3MdW7RLRwD=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv171aFMMkYDlDiPwtANYVf4BClqAMSodQgFfC6bQlW-8Fq0E0GRyti0Dv365aQeRqFkj56-UbvPvK7Z5YIAAH0QXyI-_xyaWXDVsKAMiMpAtJtZY_lpeP11o6warwZzhn8KrLXFsg=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de Uso: Registrar Campo Nro. De Orden: 12
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Campos (AC) Actor Secundario: No Aplica
Tipo de Caso de Uso: ☒ Concreto ☐ Abstracto
Prioridad: ☒ Alta ☐ Media ☐ Baja
Categoría: ☒ Esencial ☐ Soporte Significativo para la Arquitectura: ☒ Si ☐No
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Objetivo: Registrar los datos de un campo y todos los lotes que este contiene.
Precondiciones: Usuario logueado con perfil de administrador
Post- Condiciones: Éxito 1: Campo y al menos un lote registrados.
Fracaso 1: El AC selecciona la opción cancelar. Fracaso 2: El AC no confirma los datos.
Curso Normal Alternativas
1. El caso de uso comienza cuando el AC selecciona la opción “Registrar Campo”.
2. Sistema: Solicita se ingrese el nombre del Campo.
3. AC: Ingresa el nombre del Campo.
4. Sistema: Valida que el nombre del Campo no se repita para otro Campo ya registrado, y no se repite.
4.A. Sistema: Valida que el nombre del Campo no se repita para otro Campo ya registrado, y se repite. 4.A.1. Sistema: Informa la situación y permite el ingreso de otro nombre para el Campo.
5. Sistema: Solicita se ingrese la superficie del Campo (ver observación 2).
6. AC: Ingresa la superficie del Campo.
7. Sistema: Para cada lote solicita el ingreso de los datos del lote (ver observación 3).
8. AC. Ingresa el número de lote
9. Sistema: valida que el número de lote no se repita con otro ingresado previamente para ese campo y no se repite.
9.A. Sistema: valida que el número de lote no se repita con otro ingresado previamente para ese campo y se repite. 9.A.1 Sistema: Informa la situación y permite el ingreso de otro número para el lote.
10. Sistema: solicita se ingrese la superficie del lote.
11. AC: ingresa la superficie del lote. (ver observación 2).
12. Sistema: solicita se seleccione el tipo de suelo del lote
13. AC: selecciona el tipo de suelo
14. Sistema: Muestra los datos de cada lote registrado para ese Campo y solicita se informe fin de ingreso de lotes.
15. AC: informa fin de ingreso de lotes
16. Sistema: valida que la suma de todas las superficies de los lotes coincida con la superficie total del campo y coincide
18.A. Sistema: valida que la sume de todas las superficies de los lotes coincida con la superficie total del campo y NO coincide. 18.A.1. Sistema: informa la situación y permite se corrija la superficie de los lotes.
17. Sistema: solicita confirmación para registrar campo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24mrL-AJabVG8Ajzwse0kZr-KdTQIapmHj5zJ3lxMKD4x1_wvdKVIs0kzFj5qOumxfPStBhX0hMQdZ5eW_Snsw05HCH5O2OxKQ05Wzfnq96LtQI_tST4cjOZY41KTQwhaTsJpy_A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WbTC3BXe7FSt4icojLINeQlt33PwEuEltsEJzYTTS7NtBuREz7_e15Tp_ej6SfhGvvlJVb3WrLwFrntf3nQ9ymNYnTBIjuFQKyN6crERo9TDZRLf8fH0jLuh9Oi85lD6gw41DbQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eKbqh0OlrDZA1SH6cGHe_CVQcupYE1q4vLm1T16ZACAJoONutGu7fpud1QRb_2H3GKtMl6uvXJf4390J3LNzcysugq3cmEnAgAah8sGIYk43lNPUzfq8AEvTKFjefuOZq2x2o6w=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
18. AC: confirma el registro del campo y sus lotes 20.A. AC: No confirma el registro del campo y sus lotes. 20.A.1. Sistema: Cancela caso de uso
19. Sistema: Valida la existencia de los datos obligatorios y registra un nuevo Campo con los siguientes datos:
a. Nombre (obligatorio). b. Superficie (obligatorio). c. Lote/s (obligatorio al menos uno).
i. Número (obligatorio) ii. Superficie (obligatorio)
iii. Tipo de Suelo (obligatorio)
21.A. Sistema: valida la existencia de datos requeridos y falta alguno. 21.A.1. Sistema: informa la situación y permite se ingresen los datos obligatorios faltantes.
20. Fin del caso de uso.
Observaciones: 1. El AC puede cancelar la operación en cualquier momento. 2. La superficie está en hectáreas, no se aceptan nulos. 3. Se debe ingresar al menos un lote.
Requerimientos no Funcionales Asociados: No Aplica
Reglas de Negocio Asociadas: 6. Relación Campo/Lote 7. Lotes y tipos de suelo
Asociaciones de Inclusión: No Aplica
Asociaciones de Extensión: No Aplica
Use case donde se incluye: No Aplica
Use Case al que extiende: No Aplica
Use Case de Generalización: No Aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uV5XO29wHkdyz50x39xpyVrgnosdSbyY53USFVS6eZlBgl5mKonWMRMsKmG5WUWaSqf1AwQGqg5ItXXxvGNc6EtSnli20g9CYTWLioA7C2AGkPnvYYmygzBJo-P_eZaBJaRsnSg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vMJFNJuWvvG_0YwT575Avq8xH9aGijOoGnR7Nggj0Du3nqjcJerUmPQeRmBgLrLk0oVYT3J2DQrcmm1H8PAZTJSntbcCYfjt3V4oa8SI_CbAe62kwKumOD4-ni5JIBqxul3aO=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05MGylwWBY7GPIA8gI8JoOzt-TFVnJ0oqT2zIvMoE6rfeMlhmo2bPDp3R678Jqw97knbcS3PckAMnl83-wEzD9ghsYT2vWSGo9zGOM5sEHmiUYpSIf0hiTZaiWeRLbhoQBTKnh2g=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de uso: Registrar Campo Nro. de Orden: 12
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar los datos de un campo y todos los lotes que este contiene.
Flujo Básico
1. AC: selecciona la opción “Registrar Campo”.
2. Sistema: Solicita se ingrese el nombre del Campo.
3. AC: Ingresa el nombre del Campo.
4. Sistema: Valida que el nombre del Campo no se repita para otro Campo ya registrado, y no se repite.
5. Sistema: Solicita se ingrese la superficie del Campo (ver observación 2).
6. AC: Ingresa la superficie del Campo.
7. Sistema: Para cada lote solicita el ingreso de los datos del lote (ver observación 3).
8. AC. Ingresa el número de lote
9. Sistema: valida que el número de lote no se repita con otro ingresado previamente para ese campo y no se repite.
10. Sistema: solicita se ingrese la superficie del lote.
11. AC: ingresa la superficie del lote. (ver observación 2)
12. Sistema: solicita se seleccione el tipo de suelo del lote
13. AC: selecciona el tipo de suelo
14. Sistema: Muestra los datos de cada lote registrado para ese Campo y solicita se informe fin de ingreso de lotes.
15. AC: informa fin de ingreso de lotes
16. Sistema: valida que la suma de todas las superficies de los lotes coincida con la superficie total del campo y coincide
17. Sistema: solicita confirmación para registrar campo
18. AC: confirma el registro del campo y sus lotes
19. Sistema: Valida la existencia de los datos obligatorios y registra un nuevo Campo con los siguientes datos: 1. Nombre y Superficie (obligatorios). 2. Lote/s (obligatorio al menos uno) con: Número, superficie y tipo de suelo obligatorios.
Fin del caso de uso.
Flujos Alternativos
A1: El nombre del Campo se repita para otro Campo ya registrado. A2: El número de lote se repita con otro ingresado previamente para ese campo. A3: La suma de las superficies de los lotes no coincide con la superficie total del campo. A4: El AC no confirma la registración del campo y sus lotes. A5: Faltan datos mínimos requeridos.
Observaciones: 1. El AC puede cancelar la operación en cualquier momento. 2. La superficie está en hectáreas, no se aceptan nulos. 3. Se debe ingresar al menos un lote.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qmisaNA7gf2KLi9hxSIxtrJcgbx30jYk91dtZQ0BeCS6eBlUlR8IjnjtBRtGFbMSbFUaUbXbOFPMvi6v3WTq3LWRAplmBkoU05QU_OxLF_uYet3fEn_GjrYVuCZC_xjpZW_a2pw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MqGReIpEal6tLMCPCHPw87O2ZKIiUj1THAvvA8r7LrLhpnDpM4RYMhd4iPU3lWu_LGOLXZaNR0jYrLHyNjZN-TTEsHx9Pv2va8HAKi2R1zHZH8YP3i6VsmB_Pw9zusm8-2pvd=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SqE96BfQy3NOmTWYiJ-bQ7sRir-g43nTA6FH6tfczlhQzta8yzMYnPHVHNzcP5zBiLRIVdBcuc-_J5YseJqqbF_0_1JV7lVAHly0Nj4eqDCAQsMMCdBVZjv6ANZvjNpwybcdD=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de uso: Registrar Tratamiento para Plaga Nro. de Orden: 50
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar los datos de un tratamiento para una plaga en un cultivo determinado.
Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en formato PDF con los detalles del mismo.
1. AC: selecciona la opción “Registrar Tratamiento para Plaga”.
2. Sistema: Muestra los cultivos registrados y solicita la selección de un cultivo.
3. AC: Selecciona un cultivo.
4. Sistema: Muestra las plagas registradas y solicita la selección de una plaga.
5. AC: Selecciona una plaga.
6. Sistema: Valida la existencia de tratamientos registrados para el cultivo seleccionado y existen tratamientos; se verifica si alguno de ellos corresponde a la plaga seleccionada y no existe ninguno que cumpla esta condición.
7. Sistema: Solicita se ingrese nombre y descripción para el tratamiento que se desea registrar.
8. AC: ingresa el nombre del tratamiento y la descripción.
9. Sistema: Muestra los agroquímicos registrados, solicitando que para cada agroquímico que deba emplearse se seleccione el agroquímico correspondiente
10. AC: selecciona uno o más agroquímicos
11. Sistema: Para cada agroquímico seleccionado solicita que se ingrese la dosis y se seleccione la unidad de medida (litros, gramos, etc.).
12. AC: Para cada agroquímico seleccionado ingresa la dosis y selecciona la unidad de medida.
13. Sistema: solicita confirmación para registrar el tratamiento.
14. AC: confirma el registro del tratamiento
15. Sistema: Valida que se haya ingresado un nombre para el tratamiento y que se haya seleccionado al menos un agroquímico con su dosis y unidad de medida, y es correcto.
16. Sistema: Registra el nuevo tratamiento para el cultivo y plaga seleccionados con los siguientes datos: nombre, descripción y para cada agroquímico a aplicar registra la correspondiente dosis y unidad de medida.
17. Sistema: Permite las siguientes opciones de visualización del tratamiento registrado: formato PDF, Excel o impreso
18. AC: selecciona formato PDF
19. Sistema: Genera un archivo en formato PDF con los datos del tratamiento, detallando para cada agroquímico utilizado (nombre, dosis y unidad de medida) agregando la fecha y hora actual. Fin del caso de uso.
Flujos Alternativos
A1: El cultivo seleccionado no posee tratamientos asignados. A2: El cultivo seleccionado posee tratamientos asignados y por lo menos uno de ellos pertenece a la plaga elegida. A3: El AC no ingresa los datos mínimos. A4: El AC no confirma la registración del tratamiento. A5: El AC selecciona la opción de impresión. A6: El AC selecciona la opción de generación en formato Excel.
Observaciones: El AC puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36oABB5QlkIrMu93OAZiby90o6NXogbnEkIeT4DakrZ9vPZfLG7DyuqN0cCIz223hvZYugLbwfBE5Drvc_x8rdVmnyxrjfUvw4EeJZUGWj6wqrhFGoLCc1eneFQigl11m046s4AA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3i3iQabX485qHWj1CRFWbI9QEvjnYpBewJaUyD7iwCL1stqBGPiRznQuFhwoAH3qIx7dSo7k6gR_hecz8YypNpYYSf7SJxpxoUTcvz6qZnomUSBHNNW6fZ7TX7VxJDb1MvNF-w9w=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LPLl9KVDlCk_izvqBSEh_Huhyol_qgZ6G-nqpn1E8b8FJLzb0FnwbcMJUJyTATODWUBbdl1JgQPTgxeB6HHIcT-xfTMYOnwfCcOCwC4kyFoXmOruuRolkTR_qEO7R7OsDC6goSg=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de uso: Registrar proyecto de cultivo Nro. de Orden: 67
Prioridad: ☐ Alta ☒ Media ☐ Baja
Complejidad: ☒ Simple ☐ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Administrador de Campo (AC) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar un nuevo proyecto de cultivo para un lote determinado.
Flujo Básico
1. AC: selecciona la opción “Registrar proyecto de cultivo”.
2. Sistema: Muestra los campos habilitados y solicita la selección de un campo.
3. AC: Selecciona un campo.
4. Sistema: Muestra los lotes pertenecientes al campo elegido con su tipo de suelo y solicita la selección de uno.
5. AC: Selecciona un lote.
6. Sistema: Valida que el lote elegido no posea ningún proyecto de cultivo vigente (que no esté en estado final) y no existen proyectos vigentes.
7. Sistema: Solicita se seleccione la fecha de inicio y la fecha de fin del proyecto.
8. AC: selecciona las fechas requeridas.
9. Sistema: valida que la fecha de fin sea superior a la fecha de inicio y a la fecha actual y es correcto.
10. Sistema: permite ingresar observaciones para el nuevo proyecto.
11. AC: ingresa las observaciones correspondientes.
12. Sistema: muestra los cultivos que pueden plantarse en ese lote en función del tipo de suelo del lote elegido y solicita que se seleccione uno.
13. AC: selecciona un cultivo.
14. Sistema: solicita confirmación para registrar el proyecto de cultivo.
15. AC: confirma el registro.
16. Sistema: Valida que se hayan ingresado al menos las fechas de inicio y fin del proyecto y que se haya seleccionado un cultivo, y es correcto.
17. Sistema: Registra el nuevo proyecto de cultivo para el lote elegido con los siguientes datos: fecha inicio, fecha fin, cultivo, observaciones, en el estado “EnPreparación”. Fin del caso de uso.
Flujos Alternativos
A1: El lote seleccionado posee un proyecto de cultivo vigente. A2: Las fechas ingresadas no son correctas. A3: El AC no confirma la registración del proyecto. A4: Falta completar datos mínimos.
Observaciones: El AC puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gSlZjlhXkVsHvTXiotY47Nj-nM_rPt9P8K-ZLiOGk77CQUaSZ4HidBWoO7SNadxgi3O26yZPYILh3rF8WrTlLEdaS-R-WHR3dXUaSyKo04vS4yy6Tan7x4egojHmelpBO1uPw6Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yjnqjG20Aznd7h9pL_ZTRUqADIBY4sE6FVenNnBwiAcfxtQFE8NFSkeCgBU4E51BvllxrCK01NDFYZbrqdf2w-HfuyjcDSfKH2pjlF4UBLPDooOxeYbdsnwpkX9KVNGF4elbwvw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18JcXscneovdue_uH8f70scGrcr9TvBqVpoJ_nFiMYcshAu7LwGgFAEUW-mEsc_O_uymx76DlsguL4JDARsMXrTQwZaAOwHT1CI-r1D9U-_ADEzIrGxogFIwEiAyRu3IchNLZlFA=w163-h170-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Nombre del Caso de uso: Importar datos relevados por Monitor Nro. de Orden: 72
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Monitor de Rendimiento Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Importar y registrar los datos de cosecha relevados y enviados por un monitor de rendimiento en un instante de tiempo.
Flujo Básico
1. Monitor de Rendimiento: Comienza cuando un monitor de rendimiento ubicado en una cosechadora envía datos relevados de la cosecha que está realizando en un lote en un instante de tiempo.
2. Sistema: a partir de los datos recibidos busca el campo y el respectivo lote, y luego el proyecto de cultivo vigente (que no esté en estado final) de ese lote.
3. Sistema: busca el monitor al cual pertenece la identificación de monitor recibida con los datos.
4. Sistema: valida si ya existen datos relevados para este proyecto de cultivo vigente y monitor, para la misma fecha y hora, y no es así.
5. Sistema: Registra los datos recibidos para el proyecto de cultivo: fecha y hora de relevamiento, latitud, longitud, y para cada uno de los tipos de datos relevados registra el valor recibido con su respectiva unidad de medida. Se asigna fecha y hora actual y el monitor que envió los datos. Fin del caso de uso.
Flujos Alternativos
A1. Existen datos relevados para el proyecto de cultivo vigente y monitor desde donde se envían los datos. A2. Existen datos relevados para el proyecto de cultivo vigente, pero desde otro monitor. A3. No existe un monitor con la identificación recibida. A4. No existe un campo con el nombre de campo recibido. A5. No existe un lote con el número de lote recibido. A6. No existe ningún proyecto de cultivo para el lote referenciado. A7. No existe ningún proyecto de cultivo vigente para el lote referenciado.
Observaciones: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3muiSASn6QoS4D5QsqyBm5zd7rANJ6gq5uslWEvUB7Gs5vgFxfViaNIwFB9wnsd8-IMV2gNa3Ty2F5o3ZoxScULvF-GEfmEpdxVGrp78dpLwoDEnv9H2mZbBP5aux0QkYeV19dUw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01ZXOqHctQhRT0XCxUN3ETKqCGF86wYmrYa-9ndWuArgKCS7n7tPv53GY2XdKsMHeg9-htFf8ngJv8bNDNspHSt-xvuz_ytMi6K9odNnmbf_7wRxnt1XIrYGLYqEnUuwCc6s6u7w=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33p9JX-eGCN8eICcHc4rJGpq80M1RaxOGMxpy9UjfrFVoTE5hw0vyJmaD9qZPwqB8a86-IekXv-PpABgh5ZfzYOCHLk9bCimwhNwvWmclOIjVcNZBIRpLqslj6YAACnSuxI_gkCA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1beyby909CvDoApQMSFhPmSInnCeabdt7WzLCqBV7V7W7027KxRDD8uJt7IrznxL-ptfdCz6aAMaqy7WWFQNiD-r2ObzLxVFYe766dUZmT56NXCSIPWoKM7Ei2N0PjyqYovDG71Q=w942-h1280-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Modelo de Dominio:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zSmY0NEDFBAlQ8v3dhO2Acc3rYpgQt-0Q5I9ebRCxf0p3jcVCm9wbZNfgw1Z_sRwtmO48q-7jpoCq0VKLZ9fDSQqrTmHGwhZVOGhz6m96yeWJjMZREVIuq_SGA1zip3kd3wrC=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1s0gcvZy8_QCz6qDus6FnZL8OqhxzoYyXYAIDBkdNGq1nE9hUm-qvPJxiT9cGkBHoZTelzsJMpju05raZHIXsQR2tKQoEAm-BBhOjd5y3sIN4Db0177vUpHgqJtHAohOdrAiksdg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wftILFDkGexfg1990zTYtcm8dtQAFECxcgjUYhf08nQ4Naq6Ajs9MlRYS3ohdNsUMwkuAJEgvfmvADgnfadXFiAi3DGQ9cJPjYTV_LiVGEKvgFmtZVW1GuaF_7YIkX5wLbUZ1uQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28mD62qWdpled-VD-_O59Dx1ETmGZqrV3Ppw_Q-Jvqfl_GOodEQ8EgH5nxt3WqflaKp5ZEJkQlGBbjpLnKMZpv5-Os4CChKIhX_RyAinEIOAakjD08dbZfmFR4YnYICZ23VzzTUw=w1116-h1280-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Estructura de Análisis para la realización del Caso de Uso 01 Registrar Laboreos en Lotes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SjRhHCrDSf4tk6bJDkAQkESntGvI5su97FNTMddN86Npbg8KyQjVLaYEHZ4-Qx1pouRXsj9beulZLL4M4Fz7tQpJNqnBbyhXhhfRRk2TwNq3IxmyBAwBba22_r7dYp0a8XzyZMA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Msp7sutPlpxOu7XUlvZBGCWceDZE71ZqZxhdOglscyeYG7JOUu6B9gGVeAsx-lqd11VI8Xas5quh0HYnXA07pwvWdl0zsklm8aZFXSLp7KeTuc5ktLYt4K2qLoVWLD6tfw3hZdQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VxreAXxu7cwYzs7U7Q7Jboo4mJuPRSozcnJSHBrLXs80WfxuayZKHy_rP8SQCnU4VwOu28xdZzun3GlwB7wUpahrn-sHlkgiOAFMR8Ygtc3xoufrDfoYwDIJwEl7tYiEs42YHrg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05mHQPSazF3DUu5-sg5bEeqsRmjCKOxa1g5dkkszikRvitlYURpgtuV4lalNNJ1CDoOEJr5i4I1jqfAbvLhR4CsTgpuXMMCQT2e_1a-PD-N24WbgZ35AtrkwVH7tDuel-xlBfhNA=w1118-h1280-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - Escenario del Curso Normal o Flujo Básico – Parte 1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PXqBcL4ZMv3Ln5JZq39qF7jsKqcDvpxoBHtLHHwB1WNEl-Fg6vWG7-sPWkZlQv6x7lzYExyD-nEHl0enzkKWZt3Zsh0TwI_F0DuAzYsdTH9YnVmyoQdEcLSttEhASvSeIHGeVRw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NAfXDY1mHjvKkilclmFCjUS1U9rdTeFF_LmbRrgL18pAKiT76Izzmnl14OpH3VrFFgKTUd-BAxYrIfdqrPBTYkfABgTIeGPw4MemwAez9sot9nygeQfWf0nE21cewOvGQkxK1VQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vf_tGCb-yb6fBZ7mfkNhQQGArH2oa-UZjNrssIP6GeE9pHa6dYQMZfDY86hnRlKe6xBFpe6MO2PBsc8y0Xvc3sFHakk9Vt_7ao27P7GRp4c0NvWl9hi4NmWRaAZ7COySP7D4X=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VBi0VwpVeY1xvl8-TesEKbCQ15GUxVBQUP1qmXsOVZUJChCvEHf0b9bPxpEWw7lbAJoGe9w_EdjD-2zG5V4IVMId0QFzIST4AqzClUmN5ikaqIWea6fKCPL8kGKRFU5uROoauAA=w1280-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YBqZgqUzvO6KinnjPxNfQ1YvKfA0z4HOyqZ60JulspCv4Q4yzGbCaKiIThpfwVfKER2CHHt4PTdWgV05WxCUeAwFAlsDxm5tdS1kqK12NR616mU6439GHN-qysUWMsL74UA-moA=w1280-h906-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - Escenario del Curso Normal o Flujo Básico – Parte 2
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xi82LqZ9rY1w1xnDXavLfEY0UljOwRa9jfI7uVTnUeczYJNpUe_HZ82N8nju1zWIiQm9ShkZRHz9IPgtg0N_lHHoLPEsMNeLc2yJamZYwvq3LqvWN35rtpo9r4Xy77nsFdjg7sw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15D49YLOgrliI9hh2WVjJk2qo1TzGIexp8_UKDQ5fZULCv1uxn5ZI3vcXWBcxPjjrjtLutRn-q_OYhZdxRnS80FZGcDklhgjhPbcO4RT_e047A6nEOK621NRg5csYd42obNsD5jA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv277KAKuDignomLf3zLYQ6ZNzkgJ3gXxcirRSjCRONKhu4QWY-ZClWvHqXXzZasFlKZR0baxuAyiVVjus_jKoiuT-DhAeC9P9tPBpHekuAdJ6lnGvmp1cTRlTf6f5hpxJbDat303Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kRKMczj4IgE7V8dOWxd0bvZr1Sg40r-4R9jBl1VAYRVTkfaRa0OYir0LReQP3ZyutB5Dh_OW8uIs_dSqrDHuA3_En78c1sSH-DNZPrdwRZJ65Ba0zyDAeu58p_LZ5ilWiZ_IA=w1107-h1280-v0?authuser=0)
Administración de Campos
Diseño arquitectónico con Monolítico
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Análisis para la realización del Caso de Uso 02 Generar Reporte de Proyectos de Cultivo. Escenario del Curso Normal o Flujo Básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vf4BpkiMCWeQFSwhejYqOvDqm0J9E61t5Ll-PzOExKf8VTLQyWfOeZhhu8ZIMmskrssxI5RjJLuGid-kr8QTSzNjKgIo6DFMcCJvoB_iS7nvdRYPHa9JIf6vadpX1sd1RS4Jj4w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09dEijSqi0dNsYvr5rIDAGXCq8t1p1dQT_YQItseoq_lAyEZMKfkG0W4u5cn-bxyl3USAfK3C79nmdNzS-hECMI9laJShI909JbgLO-yW3zd84cNe7h3s8X10vazvyFRvE94h0NA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00ivjNE2QZiFgozo2SkKBC6NLD7uW51eFuLF1HzQPtx2p8vuTL86f6-em-TNPzpRatwwLcKKpbb4sZpU-WL2jppgBeHeekM4qZA9WNlqxvuR2WMUoolIhVjhty_WTX0LTrQh8E_g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rj-iCPzB9SnuQMK_apef4mFIhQAnPcncB1NhrNajDCZGu0s5S5UDvz5ONfM-H-04s_J7MWGT-gEPyroJlpQqoNISeOa24v0Tk8MIrWUYKj5ZGVl5wekUO_fT0qXRQc2k8WFYlMQ=w1280-h629-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 32
Realización de Análisis con Diagrama de comunicación del Caso de Uso 02: Generar Reporte de Proyectos de Cultivo- Escenario del Curso Normal o Flujo Básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ad8DP-W1Psec5Kwx0a37GdZUkct2fgn8pCsXhGuhm6p1t0BNXYe_Yu7ZC88GniNi5dnjf6M9z57LxS6B-IJPxjqJI9NiSZmis3_z1_jNMHF3gucd9Jm-MpqxA88St618toDu1mw=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HDZd6OiKeEJh5bEUzLLgQIWtSEKFfcRdV2IXNkujIHIpd0-YGU8T0vX9sqq0McwSCpeiht6gkiUH0GsCqLuvbf7Wj9fP1O6P4_evsaRP47w6wDzqNlSWEGI2OUIYSNdVdmmY7-Q=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Yw7Ec1kszczBntdpz5JdsCKtkLpUNF0Lmj7M6-5VBQBuUEOmkeSbRAX1spZ3tKapFMIcWShwquUtcO5_0HkEOuBTSjGtfJhet6OdvT2yjSsCCt-ZO_Guz0hx_Fk60bp45BNTtuQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k9UueZ6jO_mEhGSNa0y_k_7Mq1Z6X53NcRAy0ODxyofIk2N3tY8sikPFhJ1ywfdVm0hqaoWes8z7Ohc9mSKtOSwjbD4V-c5jy4q6_tI41AGOIO4Srt3Zb1auO7U215UbPTLe54Q=w1009-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Modelo de Clases de Análisis Administración de Campo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wOP2hr68xRUo3gIjZtYx0bYhA3isEdFKscDAye6z-qypWIG-A5tDwCaPvVwOC9k4uTVRzKajcfSnW8CjkLtgN4jhJ5uyhNRWFAhxfjBsyI-CUMlvcPb4tzOeh5eiqUzopFg7Z=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2E1qItrVZrcfV1IsHnpXIwgUFTaZWq7_1tG3kkRmHHOZYZSGWoJ3ZrQVSEq8OerDROjMWuX-IfuhmworoqfNlFinWj5eCKk-K7XrS1BDrnIbTkgojHc438nWMljnrbd5Wb7juZmw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06R0T8Ov3Y8mtAkqx-A7CkNSqEECZE5l1LK-QMRVczv6NYM4T75GTs0_5lG-1Pg_NGxdrrtHkiIBt8j52tU6COqAUU96SiRbA8GEJFXQrxMD26vdjQU5VlUzA1Sb_1cnEKxzV26Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tYetIcBU9UeNUfNIDmzp9filhJkTednBW-dTlMnVhsgNwt7QEZut5nLGmd63Lp1S7y62hQoQdZvtJDzh0qS5wL8iQDndl-dF5WpBt5bQ0zUvgkS2zzvGlN6EyNEiaw7e3Foeblg=w1280-h705-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de comunicación del Caso de Uso 12: Registrar Campo. Escenario del Curso Normal o Flujo Básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cXpe-6a0cbJKNjwn5_qEJ0fUj-3cJBr-CdBW0wHWYjlGdpGMqIxAUN19PdCVF4CMLFh31VD_7wT7I-DrZIeZEonyichdCCOOnuWQApjXYEGtopP3FSOAiZrRXFaHTKcRAdUfLCA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24zAT1l43fSjtacP4DxhKYFe0gFMo27RuqBwVbrSVagkk7ZFsjeLpJoYhaJb5sTdVQEz6USLc8J8PI3RbkFlrzjCLvlZhUoV_Dasnh_Q4FzhjRNaiqAZxCrG43xE6u0_3riPceeQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GisVtfNjyn6yZ0UQ_d3jhg271z5rxj0YbHu0xwJXYavahmmr1cGQR4erqm3DuS9OW0NHV_0x2k2zClHE1D1PY5Lwp22k1o6P8O-sL9wX2sqKY_eAT9QAnCNW7hkL8YWtMxTgwZQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HYrCRpcKkFrPR6U0L30yMZQqkhFJ6KK04_1ha4Fo6kS0_1ebmjDREaoW2OJa0YWdwBkX68yA_3Yb4hfxpGhBB-yEcqqaY27zF7qtLwbovwFN_TbAjfbhdZ2RntvtcvhOcwhtK=w1072-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de secuencia del Caso de Uso 12: Registrar Campo. Escenario del Curso Normal o Flujo Básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xw6ncagB17zphiryyfxbPcaM82BKX0b8kfr2Etg4EyTEhlpNu2SNbB3fYxUp5L9qPkixoFGkCHeYVTmR8D2jwehVI1rkXhvqHnzMsk3ZRP9cHVtxkxlIAj5mOwuQOZS9ErqNE=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37tG5KSz4jAsu2yuP1uq_uLthnL0-GvgNkMW1DhnhBzq1VOuT14XWZj3z7Zu3vb7B_Wqgz8niKaUOUT7OtnYq2PDOlPev0qJ6WT75yrmaGrIW6hY7UuJDzOiXNDf9PueOuUd_o8Q=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00jN5N23c10IDNx9sr4HkunsT2VG29c4bzfDOXVumTIO9gTn9XRO-C0em_Rpy5GutVsFZ74ik3htQTpo0hltGteEpGuKFzcS1mVunofpbbVQcORpMNvJvNcbTHrtDdskaKYmZu4g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv131myi41FJK8iwV4SAiLlukTjcUNB6AZBu-X79Wocec7bBZeviHucLvEJ12eGB-ljlUvnYvvDu3Lw7rZcyExM8BL2C866oqiVatETfRKHbyVqPEmsUKf_FwaLhIvuwM6opUPYdfg=w1280-h1098-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Análisis para la realización del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en formato PDF con los detalles del mismo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39QqRV1Ov2Oyo-8vPaDwLFUb3f-FbnebIxZ9nqZsDpH4teDmMqu3F5YMHsEyhLAPbT8KUYrk-igBaAt9LpdtNwqDTJjgIdH61W8FaDqlE-bhcLaDzsb75k7zsQDUBv7G9CjQ0tRw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PU91XIUmBErCBJwCMKcGTur_iKUoxmkGMMochnGtih8O-OYBJfQDSNVlJFixuxXEte_PmaKpXPQefoglwqLlkLWGkqjgzQLDUeu32WGHao-Qh8Menlpe5ksJw5_kHqJ9NfoN0zQ=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lL3ubWssudPL3AZruMAciPI8OFq2bboEDCElXKYh6UqazkP_Sm59EXoUh7PODWRI5sz1VeMFk7MbKZ-rdyK0HQznfYqCtNIUOmD6SdlMjbNDICgbkvHJ9ec8M_pyQ98g0UmJ9MQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Uatp_JUWw6vIYENQAz3GP8baebRXTXIlNlpHvj8qHH388St4A_MWMk3fOmJ98zAdOyOVbF2qaTdSRhFaQHq2X0mknMp5U4laiVVa_5u_JV7ONpzs4dBMNjOX3FMq6-89lhND6Vw=w1084-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de comunicación del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en formato PDF con los detalles de este.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CJ76vuPbG_B3tOSNdTVIpc2HRHl3DDeX8BzmX9C_fmNGAoCqz2AQzNd_r5S3K9HtDfUw9ELoKcO6pYhS4J3nQVMB_lTeg6Da3YmHtvetBtq8ZWPTbyOe5ut1puTyQug3cZKWeLQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YbQBzjeACjzln0leUdgyuwYMReAyWXwYfuZoXdhfRnFLQePPYeamQewhoH8W-IqIknDQOF24bscRHcuOMXHiItujtUtiBY5YPfrCAoxe1hiRexCYeYJKaTb-7KcTIZIEeWdtRbA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2b0U4t0RLomAVDT0c57M1jU2jlvahzkVxaBFHzdiE3V6hQaBCrmJUvTASO5iizDDbCc-91-PUB55rgxU0WGYw66kY890AmaEYU8cl8BT1bMU758wKioBFa069Nk2_QT-tVm2INjg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0v3381ruAFxlt9PttaLPi8LMPLKGcC6Tavypo7MxW4V74j4V_IzGA_-7picO0rp3Vzni6Hr4KbLGAEo_9jH9UgqiNP8QCkWvH1cGuSkM6S1YRv8Ix5QbNLJhLtq05gPNbKqlVDuQ=w1265-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Análisis para la realización del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0FM5vEwxf0NOJxtTaE2GMG1AaHpT78cXXwL2IWnCpH-RfC_BcOmkheK0unB9dH6eAm8Zl2TlDbG6pGJnmiiNj4_x3eL-vp5_ZuBIXFHpMKv3yt8ESsZWIpwgaup3rDtmQD6HnmEA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24eoTCoFeyIaVUoin1Z7hXr4eQ1lcHWIJG1qu2V3QwfdzIecIKDzyFn1eF0WWGMSk5gFdp81pOyEPEmY8EhVPXOzlBFw5WnResqlvYrF5tgyow6Mj5vfWQqqN5ZtaECi6sEYLm6g=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3I8ftxIaqJv-6WfwbWu2-FOUpt7FlAc0Ol6j4RhBdgiMC9xTej1wKc1U_wm2poHA-nI5LnnukwKCvEvS7ZdNjByndbRTLmjuMnsHEk9zckQyPOF0Dd59ta5CLeWAycuJ_rsWY4nw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LNQtBjsdpTa2DU8Kp5efWAbh4DXyKBf_y0TNqoCWqpugIGDX5yVdsStwIBPo56ZipH7IHSwHPHojYfUIp-9LpCUPBIhzq5WKIbclKW8KxrPllVdPB1TYtmioDtOvmH0IIJDDjQw=w1078-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de comunicación del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3414MUtvzBomIGycbwsLNKiNYy_WjTm_L0uOQ6hYQvalskjVM4Z1pE1iAMD1Tp5o9GXZaATc46FoebtuhvoPNrJ36RPN5jWTVj_ALvix41xGvcFcfMD3829dTWdjockN5IQePJXA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GdSpA1Mg_C2m4ggOx8W4AO384JYheKA1IRjmXFuXZhYKeT_EhT1yXlw5HZHkuMLAQpuZBfXC_HPMqu8tf32_iJZLThU1z4nFLNwEgj_uJ0LtS9swJ19HxPXSUbQLCod-6lW9S=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-qzt23ohi-r61CyG4UWV35rgeovN2759xNLtTuMkyb2iYgmWtVjf3LWO3VJMRHfCBy1mAUkvXDIcCBcqcn5UmYpVnmgtg-GOj6k1-pO3e68IIznw__QSNS6qaBlZuDzjUFsO9=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HCkT5JzkbBsbqcGu4UIKdF9Wjk36zTLLnq1q8yVxg79JAG6sp1wyfnwMKRfx6HwaIr4VVVs_0XSyo4rO4Ul8a9XuHYnIS-PzC8rk3lZsxuwwhBrzYCW9eDpxqjuzsROpxIQ0pcA=w1280-h1178-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Vista de Análisis para la realización del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: Se reciben y registran los datos relevados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02gtkSxDKSP_y-6Ae1daoT3DNrqgC1BxWiYCO8Wp6ohDzYyf6iucZdmMJiYcstfFHfiwGT5fAmGlF6ktJZHzSX4B0tH5dlP46Jg1iNYC7FMu-BIiM264I_tX2KVJvscYQJsCXDUg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17_Yx_W1_5R6_7W4QEKoUgf5ColV52m1YJzBBi6upG5YX2GQTrFDSWraA7AucwXtPxNqJ2hWhkryqsFYYlz3E0mAYJTQV14ys1FgkItypmdx1HExtuog_tIm3oahVPc0QKyQ956g=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yS34weMCA0qMstcNF0k3Vnx7oS0Z3PO5ppRIO40B72h3rMfpfaxCR1xrWWxxxrljHULn1d6Q7YmYOhi38E6rAck06JxWkILfzrGsCLX2LtO5eFx7OsyFhWqhJp7jCHg2fQkjFuw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Dmp1y0nTGgje5F1-HpoSg29yhwgnOukRO8B68BaM473j6zN8TLlCqRWcVPNSvTtJdoiTnxLPq5kZFNwsjjzlvoII1gEb7Vt35CQXlalJw1xVqraMfIcjUt4_W5CrKZfR1xt3p=w1162-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Realización de Análisis con Diagrama de Secuencia del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: Se reciben y registran los datos relevados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_Aj4oAubDZiMmrEzJNFXAxr65EdnBNvf2p4j2SKupObWXr--1XjYaA2HdMQXQjlixgPnQFGJEU-GargPKbwg2S-EIphFM61K0X5PS68v4ZNZSWJpAIXmcC6dd5jAni6tkYe9B=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qyjZxirSMe8Or4T9GsaPOsxUMRxi8dSRUPYJ_o9606KTIsrocskpW9Cy-hEDcqPsm9aIz1ED30yQnGA_tV6g9pECX9g-B-8B9MQoR33ihBdndhBwzbyT41M9tBZL8Twp-k16u5w=w1279-h581-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 42
Máquina de Estados para la Clase Proyecto de Cultivo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14ob9SFvtHyh2szMbzOa86-D3zv60iYPYOZTigoEQhKmSzI1bLxn0pqhI7p558siwejzSc3Q3J6j4WbnmDFH4ZdleMdhT4guqff7Wft15dZFzMV9WZU_BvZjPCaZQCKhPtywdi7w=w1187-h839-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 43
Requerimientos No Funcionales
Nº Nombre Descripción Características Sign. para
la Arq.
Prioridad Explicación
1 Comunicación mediante VPN
Se deberá utilizar una red privada virtual (VPN) para establecer la comunicación entre el campo en que funciona la Administración y los demás Campos
Compatibilidad NO No aplica.
Esta forma de comunicación no afecta la arquitectura del software.
2 Requerimientos para puestos de trabajo
El producto de software no debe demandar ninguna instalación en las máquinas de los puestos de trabajo. Únicamente deberán tener una conexión de internet.
Compatibilidad SI Alta La arquitectura del sistema debe ser distribuida de manera que los puestos de trabajo sean livianos es decir, no se deberá realizar ningún procesamiento vinculado a lógica de negocio y administración de datos. Se desarrollará un producto web.
3 Lenguaje de Programación
El lenguaje de programación debe permitir el desarrollo de productos utilizables en internet.
Compatibilidad SI Alta El lenguaje de programación a utilizar deberá soportar el desarrollo de componentes de software web.
4 Visualización de Reportes e Informes Estadísticos
Todos los reportes e informes estadísticos deberán mostrarse tanto en formato de grilla como en formato gráfico.
Usabilidad NO No aplica El formato de visualización no afecta la arquitectura del software.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h7xpii2sYhU3xxu03JPoUM_RM9e2OIr2SeZCkTsG4WTsx7ffK4rM6NzdXHMPopQ-umA1Of5mIJEQ78fDfSLoQJRymOVZB9mXV-ABkhGOf0h0J0DEFjuOzZ5X9Jg4AlT9cWNqZ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 44
5 Clave de acceso al sistema
La clave de acceso al sistema deberá contener como mínimo 6 caracteres alfanuméricos y estar encriptados.
Seguridad SI Baja Se deben desarrollar algoritmos de encriptación que contemplen las condiciones mencionadas.
6 Utilización de Dispositivos Móviles
Permitir la carga de proyectos de cultivo y la actualización de las labores realizadas mediante dispositivos Móviles: tablets y teléfonos inteligentes.
Compatibilidad SI Media Para ser compatible con dispositivos móviles, el desarrollo web debe realizarse en HTML5 que es un lenguaje de arquitectura web responsive y se adapta a las diferentes características de los dispositivos.
7 Importación de datos
Realizar la importación de datos de diferentes tipos de formatos desde los distintos Monitores.
Compatibilidad SI Media Debe construirse un componente de software para gestionar la importación de los datos de diferentes tipos de formatos registrados en los distintos Monitores.
8 Base de Datos La base de datos de la aplicación deberá ser en Oracle 12c.
Compatibilidad SI Alta La base de datos debe ser relacional y resolver el esquema de encriptación y las auditorías de transacciones.
9 Exportación de Reportes a PDF y Excel
Se debe permitir la exportación de los reportes y estadísticas a formato PDF y Excel (XLS y XLSX)
Usabilidad No No Aplica No se requiere ningún módulo o aspecto arquitectónico diferencial para resolver la exportación a formatos de archivo Excel y pdf.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1s5Dav1Z26m8ag63vLYy8vtno--Nf2XgIpcDjUu1kVOx_1jJKwdBq9n0PqqwwZuDj_-kbSwcsXTZhFK1CnHVreSQrY5Rk25fsbcpn6z4DUSZZY52S9uLd1CKW5PleRL-rMRm4quQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 45
10 Exploradores habilitados
El sistema se debe utilizar con alguno de los siguientes exploradores: Internet Explorer 11, Mozilla Firefox 51.0.1 y Google Chrome v56.0 (y versiones superiores)
Compatibilidad No No Aplica La utilización de un determinado explorador no define aspectos arquitectónicos del software.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZUoAT0xzG0lpCQm-FebSFUNwdvAWGP6IqZEK5dxoccK65NB-H5AbXNlLFnTqWhvoExMeYvdnAz2EdoJuiffnIXFx-ge9qlKcNOdqelVjOf9SrkncPoXIhQx90_vYlkKhdE6r5=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CP9IwiSKp2FM_8HUZSTusG7LV4wseqKKy0a0Pdm92wSk9kQ6v3kP0PFxzvQQI7eh6o-TgqhhgfvO-TZ8ZzE0sjwV9RN7Z061JOVNs1bBxIBk3yoTf_HwTncZOzkVTamt-ziHK=w1280-h568-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 46
Patrones Arquitectónicos
Estilo de Arquitectura en Capas (Layered)
Aplicación: Este patrón se corresponde con el tipo de vista de módulo, por lo tanto, es estático. Se utiliza el patrón para organizar la implementación de este sistema complejo en capas de servicios auto contenidas, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable. Motivaciones:
Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios de código a la capa a modificar.
Cohesión alta en las capas que contienen componentes relacionados a una única responsabilidad.
Reutilización de servicios brindados por la interfaz brindada por cada capa.
Mejorar la portabilidad. Los cambios de hardware, del sistema operativo, se puede modificar afectando
solamente a la capa afectada.
Estilo N-Tier Client Server
Aplicación: Se utiliza este patrón para implementar el sistema de administración de campos de AGRO SRL. Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de la arquitectura. Motivaciones:
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad
requerida.
Utilización de puestos de trabajo livianos (clientes web) que no tienen exigencias de hardware a excepción
de la conexión a Internet.
Capa Presentación Web
Capa Servicios Web
Capa Lógica de Negocios
Capa Acceso a Datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tV6Zme7bbCFgFPx8VWpUqFQjXn1csY-RftiDHWnL6lXMGIf8EvbibLTmjxqAcDtRT-cMipuG8zMNCgX3309pBxa2HLxerRGP5BTmWsky8tmyqgqCmoM04ta5tNqNP_A_X_m_6gA=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 47
Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y extensibilidad
del sistema.
Estilo Broker (Agente)
Aplicación: Este patrón pertenece a la vista de ejecución (runtime). Se utiliza para resolver el requerimiento no funcional de importar los datos en diferentes tipos de formatos (de acuerdo al Sistema de Monitor utilizado) y realizar la transformación de los mismos al formato específico que necesite la aplicación para la generación de informes. Motivaciones:
El Agente se ocupa de leer los datos recibidos y generar un formato adecuado que necesita el sistema de
administración de campos para procesar la información.
Monitor 1
BROKER
Sistema de
Administración de
Campos Monitor 2
Monitor n

### . . .

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26VwtAJs7R6wcSZwMMFwx_VVvoYFgRSPtbH1ZjVExCMYs0ARgOeTgY1Aw6C1JfffBCmJBCgfU_IV-idzll9nOQFEeubFWZIZTEBQBgoeq-hYBL4tBskphmCtrOnTlnUrSJ-Z1MCw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pbO6W8So4CwbNlD9SD2pw8VJRhenfBib7YZTDBdK_tJtdUOJEijLGv9EFHJL5ziIMqg83-0x5lD0yd9N9VEtsk9STYV8fl0cSKZZaLkb_zYxuShv99o3KdGj8qIiej0FGfRs4tQ=w1280-h1051-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 48
Vista Arquitectónica de la Funcionalidad
El Punto de Vista para la Vista Arquitectónica de la Funcionalidad define los casos de uso de la Administradora de Campos que son significativos para la arquitectura del software.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1luuszgohy3JhNuAf6sYmhVj4RpbLwmZ_snSzU3SlkUmzblmHiTSrCRKZd7vbRLijkWjpSrGrznLDGXmbOvCzOfHTxfH7pZoTL1hKCnRBHFhsA5wLShvNtJ4uPGN_wPJhzz0yVUg=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 49
Consideraciones para la inclusión de los casos de uso en la vista:
Número Nombre del Caso de Uso Justificación
1 Registrar Laboreos en un Lote Este caso de uso representa una transacción del sistema, con esta se resuelven también los RNF 1, 6 y 8
07 Iniciar Sesión Vinculado con la implementación de los permisos de usuario y los niveles de acceso de los mismos a las funcionalidades del sistema. Vinculado al RNF 5.
66 Generar Histórico de Proyectos de Cultivo por Campo/Lote
Representa la funcionalidad de generación de reportes y cómo resolver con componentes, los algoritmos de cálculo, paginación y visualización, así como también los requerimientos no funcionales de exportación y visualización. Vinculado al RNF 4 y 9
76 Importar datos relevados por Monitor
Vinculado al RNF 7
77 Generar Estadística de Rendimiento de Lotes
Vinculado al RNF 4 y 9 Representa la funcionalidad de generación de estadísticas y cómo resolver con componentes, los algoritmos de cálculo, paginación y visualización, así como también los requerimientos no funcionales de exportación y visualización.
12 Registrar Campo Representativo de las funciones de alta, baja, modificación y consulta de datos en el sistema. Elegido por ser considerado en más complejo de todos los ABMC que tiene la aplicación ya que debe resolver la creación de los lotes que integran el campo. Ejemplo de resolución del RNF 2, 3 y 10
13 Modificar Campo
15 Eliminar Campo
14 Consultar Campo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29y6gR1YTYK4a3ADRUWNvJ1oHQmRa3VNM-DL9tVOQi-r-W421y-4J0Z0iTYXdpDpFkzfo6QZ6J1JH4oenkcM-hwbDb8x28ahcH-cqVAdLsXyretJy_gZeGqdOa8Z0YfvFJXIjg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JgHqPc3DJT4D9Ab2T1L4Ic9gZUkZ7NGeEKTOp6e9-0Xn-Fqk3iQVzmsGxcwDbHppyONqzA_-4JVc61_IfJ7a85wCDG3U4KMKUmPDNsx62PHCgdhIBHCAEEHKYuaCxG0TZyStlEw=w1128-h1280-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 50
Vista Arquitectónica del Diseño: Subsistemas/ Interfaces
El Punto de Vista para la Vista Arquitectónica del Diseño comprende los Subsistemas que son significativos para la arquitectura del software de la Administradora de Campos y las relaciones que existen entre ellos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zFghZh-EzgiCPZZ3aV8P8BTWpIVNnm1cEdiHpiJMweHTG9RHsOzGKQUwXzGfH68FUesm_FgpdyioShk3WdRAkak7ir_gH2kIL3PIzUKTMB7n4ANmX7X9xphDnaSKnjp9QbbJ8Mg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EyPhm4Ui_WQA4ZyNPlgWCynE1uF8ttOHk7mQf7nVyvPr3X508v_pA364Y3HAgCiscFKm2VL_sgYq6IfwAK1MZm-VZFSsoL0KI_IAHVXMBQgXiHKfdjUwSirhaUCjVTph50DuW0w=w1280-h1155-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 51
Vista Arquitectónica del Despliegue: Nodos/ Componentes Principales
El Punto de Vista para la Vista Arquitectónica del Despliegue comprende los componentes que son significativos para la arquitectura del software de la Administradora de Campos y su distribución en los nodos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OFeVK17jDEQELCoGbcIKetZ4vrvcexKDuIYCVbe1nxLn-5y5lmuWiNhghYNQychCQL_eHEAwQXANq-hP5Kk5Z1eyj4YLyKj_uo2L8a8ufX4cTjvYXdtqwc3sCSa7lXAz7YqK6=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mrlbS37UQv2S8fXHguMP02fAH0v4P3DZqcZmXiSBL9K4OX0AjlC8d1xnVVb7L6txrfxf0kdEpzsJQ0diNZIv5V0fLl4djj96oRp7joQl5tSSuef-XCLgZtDOgpsdyvEFUqT68jg=w91-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2u6eCR1KtuCpL2c2SOq_aWcMhJP0E-yF9SHlidShXi_LfBxAC-hwKi4z8e1cm7NkEjBiKL3CviimNR9_0zbowNfotXZof0HhRN7vfWO7lIaUHhLz0ywiECHPCyflHq8W7l4zKhfg=w91-h62-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 52
Vista Arquitectónica del Despliegue 🡪 Niveles de Hardware
Internet
Dispositivo Móvil
Router en Campo Administración Central
Switch Intranet
Servidor Web
Servidor de Base de Datos
Servidor de Aplicaciones Estación de Trabajo 1
en Administración
Estación de Trabajo N
en Administración Giga Ethernet
Giga Ethernet
Giga Ethernet
Giga Ethernet
Router en Campo 1
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WWeDhag700dodpgA1YeElqVAIHjz1cAX7EzsvSsBh-UBuVqvSgHL_MsqcAXgEs0tecc_0P2UEptfpXty5hS2quSKy_kElQRlGvw0ARXa1BCJMaYgIyWxS6Ye0wJDh4c_Zqszakw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lqTiwHO00QCdzY0a2wyTqPManbEDU72P7w-GKg-0v3sz4WhlUz0OTnmBgnnqU5L68EWeMwF_4KuRllUPWxgSFsMy4OY9NVyaSs7IRMie99fGuB9vICnnDULFkaarx3ohfesmNQA=w1279-h655-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 53
Patrones de Diseño - Iterator: Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wd-l51Aro2maLBsOfyqp6CdbQMsNuziKC59fSTHa16EUVzw7zSlUkEwBIeNetH_bQYChToyVZP0X-1eJR6L--poTbqeeqj7Ss0Abco9-QenhzWr7XKfdRhtECzyT63BAZT91X3g=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Rdr0N7QafVN6kHlGiB6jkmSD4A9VrDGk6ak9cb05mlV_8YaKfX78vdb7p1vDNTUWXEOZ7lVV3MT6J3LS-Kur9t5gDafcGH_XrEQy4CFVov2EkWh_gAxp-0A5wFKJsXMCza21b=w1032-h1280-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 54
Iterator: Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j9LDx5sGwWtot0pVjSIgJH67XbhCf_JbGCJfihq_KIVPfyQ_EkOW4V_FV8rzKDGF3kIWb6QrI4Qylg73DL5jjs-qFWu2VhKFjhlIi0UM0c7f1dY6796mEGWllFBb_xJzFPxrouw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31OqlQUEVUbQ3q957MD7Lyh5evADO3PGrhW8pxtXmigMDx828zW33goBdrRG8e834sWrbfUoA2tCAPIvI48hSqyM8GPlZD3r3-Up7OWitYEVMkZDwrf2jLOkRkK8c8nuYhomct-g=w1280-h628-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 55
Builder: Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fUSRGAP0DPgHAGRbmr_ApdxCfKkBWfABbxYclocmt_qh9DjiSZ7DDmykwdMZLPWHD2ldb1S-dWR3x8h6cYH2nwksMfEEcS4r1Jht1QnOJWbdKH7LcjFDW10-rbd9Z7U7Tuf3f=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Yuj91oGGrInG8faHLMT3bNHpZ-pHqkGqf4GwGheLsK5XWdiwiVqUJF9LF_5D_AbSFlsGOfJl0kghoJ8RwNQm20X8QSbnlCTBxlGuXO4Y4zvqr7SAdFSHrHouGNRRNB-rPLKqo2w=w1280-h631-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 56
Builder: Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W-N2_dNf6rIJz2IR3gkMksxMWhDSDxjxm6ZJ7zjK-F-BVROFJPGNJO0QpArEnGemIsbuCtNhieKmM7HcjD9YDytMe9ax6yPEfsYgKBlYv6ctL-S4ZqVLgnz_AyXfca_55h2TRpA=w1187-h839-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 57
Explicación/Pseudocódigo GestorReporteProyectos tomarFormaDeVisualización(): de acuerdo a la forma de visualización seleccionada, la cual es un parámetro de este método, el gestor crea una instancia del ConstructorReporteProyectos. En este escenario se crea un objeto ConstructorImpresiónReporteProyectos. ConstructorReporteProyectos (interface) Se listan los métodos abstractos: construirReporteProyectos()
construirEncabezado(encabezado:String)
construirGrillaProyectos(proyectos: String)
construirPieDePagina(pieDePagina: String) DirectorConstructorReporteProyectos Construir(): este método va invocando a los métodos de construcción del Constructor que corresponda de forma ordenada como se muestra a continuación: construirReporteProyectos()
construirEncabezado(encabezado:String)
construirGrillaProyectos(proyectos: String)
construirPieDePagina(pieDePagina: String) ConstructorImpresiónReporteProyectos Los métodos a ejecutarse son los siguientes:
construirReporteProyectos(): para crear el producto, en este caso un ReporteProyectoImpreso. new(); al objeto ReporteProyectoImpreso
construirEncabezado(encabezado: String): para construir el encabezado con los filtros y período seleccionado.
construirGrillaProyectos(proyectos: String): para construir la grilla de los proyectos encontrados.
construirPieDePagina(pieDePagina: String): para construir el pie de página
obtenerReporteDeProyectos():object : este método permite al GestorReporteProyectos obtener el producto
(ReporteProyectoImpreso)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jkB0AU12iBhKOyw-vYU7cYsDV_lqObqve1SxWSkJ19i4yKt-xo2rfeSlgmruGjWUuZgpdrCaYeMQE_njCRcF8rT95rNpWkNuwzyKZ5IJHoaesWKnOq7NRTcmLNhcXkJ0voIiQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WvO6D3-dvzaOIbBpBfP7crJG9LCJQIIYRHZ29mc-SmPA2xQ5UFCvL9pBDs8USX8UMZOQTzZXQ744iazUxLz9BplofGOqB8yO-eKnjc6xDRTtt---LP8LNz-ZemLW8s4idgujm=w1280-h972-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 58
Resolver mediante la aplicación de un patrón de diseño, la forma de asegurar que exista una única cola de impresión en la Administración Central de Agro S.R.L para evitar problemas al imprimir los reportes de cultivo. Singleton: Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22YsPgfMMhSv6qb9vHMH64ud8jeMWcnYAk48_oKQdde6r3m-IGFUe44_etDv5XkS_OW5t0vRxTF5NWVVkuMt7NjHqrS9UYaexy9AxFaGWp0-evqtgtztznt_H8p9j2bnIjlLwreA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mbpBYVXflVfOaP-U57ZgyFJ60YywpfrXH1XcxsLkY275CwJPmi96sWVwtnmT11S4U9crwOSoK1kJ6GO7-mGn0AGO_-sGAdOMUIR32BZ8DBvSxvwJaBseHt_4R60u6lkd4soGL=w1033-h569-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 59
Singleton: Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zkbxzpvGpPN2O5sJn4qpNjUuXgjke8V1C8ibjZPeYsR-fZ7un0-TBP1mnXBXNnlJJYrfwaVOhvw6HpgBEMeTFGIT3qSvHq0xsj-Ase-rr4LNUn9Vq8zZIkpMhxv5XdtBEW_1fYA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qOueEDLIKahsoNqYucwzF7AHdhj2kQ0-NYl_jYkykEInKkWw0nPm4wvRornwiXVY39QS2kaEvuWrblUWGK4_51cXsIZhxcyKjEuNl_PBr1TcGZJVDuOruAHJvov_OnuGdA9ulSA=w1279-h657-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15 Autor/es: Mónica Lovay/Judith Meles / Cecilia Massano / María Sol Zanel Página 60
Adapter: Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aXUGkL2R9YlApwHI4bGo23FjRcMIJNJNharFstNiTT_qtAYx92uk35Lqd2iRsKZkUBHNPd9l-AW4M1c4l6UTdbuKDFzjkJXthN-2ARkM1SClRZsDrCXm7kVaAuwlqgZWASzxufg=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1E0wdB3jNLUN_Lc4nhPqDQO-oQC3mshORJRV-RVjKXbdLwJ-WeCriHiMwJ2-8TpC0bjXHam5PAUI2-HTeKLsSYEJeMrAL9NU7Yr9v8mUcqcXQLdhgJjrgvyQi4M3SKt4WHrZQB0A=w1280-h747-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Adapter: Dinámica
Pseudocódigo El servicio externo del monitor AGCO, es decir del monitor que envía el vector de datos de relevamiento, invoca el método enviarDatosRelevamiento() de InterfazMonitorRendimiento cuando tiene nuevos datos relevados para enviar. La InterfazMonitorRendimiento crea el adaptador concreto AdaptadorDatosRelevamAGCO, invocando el método new() y pasando como parámetro la clave API correspondiente al monitor que envía (en este caso la claveAPI del monitor AGCO). Cabe mencionar que la InterfazMonitorRendimiento tiene las claves API de los monitores en una cadena de string, con lo cual sabe qué clave API tiene que enviar como parámetro de creación del adaptador concreto. La InterfazMonitorRendimiento envía la clave API como parámetro de creación del adaptador concreto, AdaptadorDatosRelevamAGCO, porque después va a ser el adaptador concreto quien se va a comunicar con el servicio externo monitor AGCO para pedirle los nuevos datos relevados. La InterfazMonitorRendimiento delega al adaptador concreto AdaptadorDatosRelevamAGCO que se encarga de interactuar con el servicio externo de monitor AGCO para pedirle los datos relevados, los interprete y cambie el formato tal como lo necesita el gestor. El AdaptadorDatosRelevamAGCO implementa la Interface IAdaptadorDatosRelevamiento La InterfazMonitorRendimiento invoca el método polimórfico recibirDatosRelevamiento():String[][] del AdaptadorDatosRelevamAGCO que retorna los datos adaptados, es decir, retorna una matriz de String. El método recibirDatosRelevamiento(): String[][] invoca a:
solicitarDatosRelevamiento(): Método polimórfico que:
1. Recibe por parámetro la clave API en formato String y la transforma en código Binario tal
como la necesita el Servicio de Monitor AGCO.
2. Desencadena la llamada o comunicación con el servicio externo del monitor AGCO. Para
ello invoca el método enviarDatosRelevamiento(claveAPI:Varbinary): String[] del servicio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OHdw8tN_sdgopKh6_ZZbrtHDSAeNx8g1TJFr9fA1FggrOPf_bOTA8rOQfXAtyeQ0p3O2rxVzl-fSN3Jj4HUhnPcOzZDCfdfix7wrVFViecnh6n95liPa3ivrR753KIpBEBGYjVQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
externo del monitor AGCO, enviándole la clave API en binario, que es el dato que espera
recibir el servicio externo de monitor AGCO. El valor de retorno de este método es un
vector de String, que contiene los datos de relevamiento del monitor en un instante de
tiempo.
Luego el AdaptadorDatosRelevamAGCO, adaptador concreto, ejecuta:
El método adaptarValorRendimiento(): que convierte el valor de rendimiento recibido en toneladas por
hectárea a quintales por hectárea mediante el respectivo cálculo.
El método polimórfico adaptarDatosRelevamiento() que:
o Toma cada elemento del vector string recibido del servicio externo del monitor AGCO y comienza
a interpretarlos y adaptarlos para devolver una matriz de datos de relevamiento, que es lo que
necesita el gestor
▪ Transforma la fecha hora a formato datetime.
▪ Transforma la latitud y longitud a formato double.
▪ Transforma el nroLote a integer.
▪ Agrupa los datos relevados en una matriz String que contenga una fila por cada tipo de
dato relevado, asignando en la primera columna el nombre del tipo de dato relevado, en
la segunda el valor recibido y en la tercera la abreviatura de la unidad de medida.
Por último, la InterfazMonitorRendimiento envía los datos de relevamiento transformados y adaptados al gestor, invocando el método enviarDatosRelevamiento (identMonitor:String, fechaHora:Datetime, latitud:Double, longitud:Double, nombreCampo:String, nroLore:Int, datosRelevados:String[][]) pasándole los parámetros mencionados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XJQd8Qh0d1VAvAKom1EFV_Jzd8VLYuhLja6tnCLRR5LC1PswhbhZs-WfBy-KJfgwYokvugU2CiNRrNACoGvWIRAigezsPosiMk1OA37TRuGA6obv_MRSWWxkq5cX6YnT0INnVgA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IRKjCpeD3eJtLBBdzd1snf8gzrmReGPQ2Y4ci3HQUSsZ8eoHxMqNkGn-7-6uVYrK7GjMC0uoXH8JrLiAPw6bG_5KMZT87c7LPx7EiJVtfCpY3Sn326PGHakfa9BSDlKqCcrX-vQ=w1280-h984-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Mapeo de Clases a BDR - Diagrama de Entidad Relación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m9LDHBznOE9tx_TUI0FK37LG6npaN1A-SaBbJJo3MG6RR1rof8Qd_a_xVPmjG-ayETMANP8PysJVVyZjOMT_Ne4hmi86wsLWFVVQ2l2UfBiXtLB5P1Y1Exo31VR96BQEhglf5jw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Diseño de Interfaz de Usuario CU: Registrar Laboreo en Lotes
Registrar Laboreos en Lotes
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
Hora Fin 20:00 Empleado Responsable
López CancelarAgregar Laboreo
Seleccione un Campo ...
Sol de Mayo La Patriada Los Pinos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HygVxbK8d0SVEqjFOPrJ_t5a2OIB1MHoDfd_4P9P5dk5N33ExO74Fuz_cMejuBEwj4w8gXg3PJDx--PR1c9mq3__-r9p7jnuB3RO9cS0M0wL-grS8aa1LVrdcXf4_p1mT1VAxfg=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Laboreos en Lotes
El sistema no encuentra campos HABILITADOS para comenzar a registrar
laboreos en lotes
Aceptar
Laboreos en Lotes
El sistema no encuentra lotes que correspondan al campo seleccionado, que
tengan Proyecto de Cultivo VIGENTE.
Aceptar
Laboreos en Lotes
La Fecha de Inicio es mayor a la Fecha de Fin. Ingrese las Fechas nuevamente.
Aceptar
Laboreos en Lotes
La Hora de Inicio es mayor a la Hora de Fin. Ingrese las Horas nuevamente.
Aceptar
Laboreos en Lotes
¿Está seguro que desea CANCELAR la Registración de los Laboreos para los lotes
seleccionados?
Aceptar Cancelar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VeVzysLtOJ5x97z0lQtZCkTSLGVP6me00FvoOtpaDnRp4xPaIzfR2g5hBF6-ItNEmgBKIYOF5nsJ8w7JGXzeypptmF9pSlqSWdaTcLFqTGaRV5g-yLylPxfGVSzXLKwh4m8jvmA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Qt-MNwR4atSTEG-fzgQyheo0cOYDvTrqnGa0wPQuVlhYjN04ZDcIAMcUwB5xP-ccKR71vFtcwKeYU3d6cw_3gqQp-09Wv4NHw_IWZXhy0S2cKef3ZmjnlDDZhBCLad11832w8=w644-h44-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31iHeVzIHjr2ZRK6MJFz84r3d4dsdD7-RdAyvfZB3woJJzLyvDp8KZHL-hO-37AgYLm0k-JvsYFVp0N4tp0CNU3qJicyCKUSqHI92imG7MBIaEyn47InhTg8JLfC_ccpBAfbTK=w644-h44-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1676kPS81ioFwN62WLB_ejLV9_EYQd6dB-T5FL0tL0XY0LlinONSfXMBJ0-24cnvCsfgUwdUg6OUTW68003DZA8S4XJJbE1Ed_jiexhlc8TEORGkN2x1Hnf23YGQaieznx5M4xKQ=w644-h44-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Generar Reporte de Proyectos de Cultivo
Generar Reporte de Proyectos de Cultivo
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
Período Visualizar
Imprimir
Guardar
Reporte de Proyectos de Cultivo
El sistema no encuentra datos que cumplan con los criterios seleccionados.
Aceptar
Reporte de Proyectos de Cultivo
¿Está seguro que desea CANCELAR la Generación del Reporte de Proyectos de
Cultivos?
Aceptar Cancelar
Reporte de Proyectos de Cultivo
El período ingresado no es válido. Por favor reingrese las fechas.
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
Reporte de Proyectos de Cultivo
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
Reporte de Proyectos de Cultivo
Seleccione el nombre para el archivo y la ubicación para almacenar el Reporte.
Cancelar
Nombre Archivo: Ingrese un nombre para el archivo
EscritorioUbicación:
Guardar
Reporte de Proyectos de Cultivo
Seleccione la impresora en la que desea imprimir el Reporte.
Cancelar
Nombre ImpresoraNombre
Imprimir
Impresora
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ph5Q5S-CHAg7SNMw88YKT6HFgr3f0NqDWs7NSwWlbZefl9jl3rQBLr7PLBdp6ZxYFOwjwQe47rwkxVaEmzvJGjNejZBuL079WDX4AUOTzIGe0po1QwPiiKN4ji64M2lq6wXGvPQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Requerimiento de Cambio El cliente ha solicitado que el sistema:
administre las restricciones de siembra relacionadas con los cultivos y la cantidad y frecuencia de veces que un cultivo puede sembrarse en un mismo lote. También se debe registrar si existe alguna recomendación de que cultivos sembrar después.
informe de estas restricciones al momento de crear un proyecto de cultivo.
Generar un reporte de proyectos de cultivo que no cumplen con las restricciones de cultivo para un
período de tiempo. Regla de Negocio que se agrega:
Nº Nombre Regla de Negocio – Descripción
8 Restricciones de Siembra de Cultivos
Existen restricciones para algunos cultivos respecto de cuántas veces se puede sembrar de manera consecutiva el mismo cultivo en el mismo lote. Por ejemplo: se puede sembrar dos veces seguidas soja y luego hay que sembrar maíz.
Casos de Uso que se Agregan:
75. Registrar restricciones de siembra para el cultivo
Registrar las restricciones de temporalidad de siembra para un cultivo.
76. Modificar restricciones de siembra para el cultivo
Modificar los datos permitidos a las restricciones de temporalidad de siembra registradas para un cultivo.
77. Eliminar restricciones de siembra para el cultivo
Borrar las restricciones de temporalidad de siembra para un cultivo existentes en el sistema.
78. Consultar restricciones de siembra para el cultivo
Consultar las restricciones de temporalidad de siembra para un cultivo en función de criterios definidos.
79. Generar reporte de quebrantamiento de las restricciones de cultivo
Generar un reporte que informe las situaciones en las que uno o más proyectos de cultivo no han respetado las restricciones de temporalidad de siembra
Casos de Uso que se Modifican:
24. Registrar Cultivo Registrar las características de un cultivo
25. Modificar Cultivo Modificar los datos permitidos de un cultivo.
26. Eliminar Cultivo Eliminar un cultivo registrado.
27. Consultar Cultivo Consultar los datos de un cultivo.
67. Registrar Proyecto de Cultivo Registrar los datos de un proyecto de cultivo que se realizará en un lote de un campo.
68. Modificar Proyecto de Cultivo Modificar los datos permitidos de un proyecto de cultivo que se realizará en un lote de un campo.
69. Consultar Proyecto de Cultivo Consultar los datos de uno o más proyectos de cultivo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yoYH1VC3CUEzmjk_L2IJGKGv4O6zWaz-3LG2x5xB7J7eXEuusZ60NY6ZTxXLNm85ShxvQLBqeBGr-LzY69bhy2QrEdJMg4D_FcVz-QcXRYauMOKHp3niwvewtL66cq00QajREzw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PzBRNYOilI939ekJGNdxqyxRUwu_jr3RumJGb1BvFe4ldLZQOtFA1bRbg4FHFVOKvJDvJLXRjQcPBfMTB22NUUz47h_n_314uknxn1Qw5cyU685HWgbhrvNGGTRH_V3Ws8zX3Iw=w1206-h829-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UigOM7Bbc11mlOrr3ieGHUzcmoTGUcABfC2Xa65Lh8iwS0Yy57jXF6iciWyHoyGPVzdQ9rXxJ2uMVwPCcEsiNyqBwp_sOs9elDvF5AGOfA5Dj4GcusGM8Kpo8fV3KnDCOI5LVvg=w1280-h888-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Administración de Restricciones
Modelo de Dominio- Vista de Clases afectadas al requerimiento de cambio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jjjcBLp-h0MywtYjrPrpeCWz4WDBMO1a_CUBYLKwpURUTj0Xu-xiz8LObUSUmcmz5jxcwQpIvMeDdVYOk0rZGCEuHViDkMUTCP_-lVI7A3BbJj3JtA6LgXvvGEgi_Io7AUmka-g=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
Tabla de contenido
Contenido Proyecto Práctico de Aplicación ................................................................................................................... 1
Nombre del Proyecto Práctico de Aplicación: Administración de Campos.................................................. 1
Objetivo del Proyecto Práctico de Aplicación (PPA): ................................................................................ 1
Objetivos de la Asignatura con respecto al PPA: ...................................................................................... 1
Contenidos de la Asignatura que se abordarán en el PPA: ...................................................................... 1
Consigna asociada al Proyecto Práctico de Aplicación: ............................................................................ 2
Criterios de evaluación del PPA (Si aplica): no aplica ............................................................................... 4
Descripción del Dominio asociado al Proyecto Práctico de Aplicación .................................................... 4
Definición del Producto afectado al desarrollo del proyecto................................................................... 5
Vista de Análisis para la realización del Caso de Uso 01 Registrar Laboreos en Lotes. ......................... 28
Realización de Análisis con Diagrama de secuencia del Caso de Uso 01: Registrar Laboreos en Lotes - Escenario del Curso Normal o Flujo Básico ............................................................................................ 29
Vista de Análisis para la realización del Caso de Uso 02 Generar Reporte de Proyectos de Cultivo. Escenario del Curso Normal o Flujo Básico ............................................................................................ 30
Realización de Análisis con Diagrama de comunicación del Caso de Uso 02: Generar Reporte de Proyectos de Cultivo- Escenario del Curso Normal o Flujo Básico ......................................................... 32
Vista de Modelo de Clases de Análisis Administración de Campo ......................................................... 33
Realización de Análisis con Diagrama de comunicación del Caso de Uso 12: Registrar Campo. Escenario del Curso Normal o Flujo Básico ............................................................................................ 34
Realización de Análisis con Diagrama de secuencia del Caso de Uso 12: Registrar Campo. Escenario del Curso Normal o Flujo Básico ............................................................................................................. 35
Vista de Análisis para la realización del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en formato PDF con los detalles del mismo. ........................................................................ 36
Realización de Análisis con Diagrama de comunicación del Caso de Uso 50: Registrar Tratamiento para Plaga. Flujo: Nuevo tratamiento para un cultivo que no posee tratamientos para la plaga seleccionada, generando un archivo en formato PDF con los detalles de este. .................................... 37
Vista de Análisis para la realización del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico .. 38
Realización de Análisis con Diagrama de comunicación del Caso de Uso 67: Registrar Proyecto de Cultivo. Flujo básico ................................................................................................................................ 39
Vista de Análisis para la realización del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: Se reciben y registran los datos relevados. ............................................................................................ 40
Realización de Análisis con Diagrama de Secuencia del Caso de Uso 72: Importar datos relevados por Monitor. Flujo: Se reciben y registran los datos relevados. ................................................................... 41
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27fpjFODoX1W1PzsAoTIT3HgYFXHnPuenvF4gpfeAOAnQpX3mhrRgOwRrfYlaBSoW5AAxENK07YAGvjH51sbToqgkf4Mp0rWIlpjrQo-wZVZme5v6lLaXFddrUesX2eM9lA-XX=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.15
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rpgfUwmE8WMKDs3E3pYs0NPy-dJ79YORNiOYZTLfOL-en_gj4FBq-J_6_7NI-YwfAyTdYg2FK9pnwTto7Vh3CLvy8mAlSLYSvpT_JmNln-Sjn3l2zz4TC4z9skJg04YdKlBt2wg=w839-h1187-v0?authuser=0)
