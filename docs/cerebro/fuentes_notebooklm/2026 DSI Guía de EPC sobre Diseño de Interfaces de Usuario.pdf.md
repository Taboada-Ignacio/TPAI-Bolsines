# 2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presentado corresponde a una 
guía de ejercicios prácticos
 destinada a la materia de 
Diseño de Interfaces de Usuario
 de la carrera de Ingeniería en Sistemas de Información. Su propósito principal es brindar a los estudiantes herramientas teóricas y metodológicas para evaluar, analizar y proponer mejoras en la 
interacción humano-computadora
 a través de casos de estudio reales. Para lograr esto, el texto estructura diversas actividades basadas en marcos conceptuales reconocidos como las 
heurísticas de Nielsen
 y las 
reglas de oro de Shneiderman
. Asimismo, incluye la descripción detallada de distintos dominios de aplicación, tales como la gestión de festivales de folklore, tableros colaborativos y portales gubernamentales digitales.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ycoJXL_nc5_FNwX70cd7PxdRJ8rVAG59x0679fdDJ60ypdIotCG_eCP0WMcOrIG4EqN77oJppTqLwLxsTq71-9SfCMwYXzd8jwvbK3McUtJAZwo8ZpZ1O-U7heODmpvkJl-iq=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09sC0JtsrLgUkhDpJ3ONRMmiIhGg2Ey-WrWxDxwtkv3oovu7kxITxgPVyQdr6uvqDxB0kNlKdyc1GBf9uEAHKNiGLDk5X-LK9rupcrU0NvabAPv-YocMS_5L6mnZcvZ7iqQaoY=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario


## Guía de Ejercicios sobre Diseño de Interfaces de Usuario

Nombre del Caso de estudio: Festival del Folklore Consigna: Para la interfaz presentada realizar la consigna propuesta:
Interfaz Registrar venta de entrada
Temática a abordar Consigna
Contextualización 1. Identifique el idioma al que pertenece la interfaz presentada. 2. Defina qué Heurísticas de Nielsen que se cumplen y cuáles no,
justificando su respuesta. 3. Defina qué Reglas de Oro de Shneiderman que se cumplen y cuáles no,
justificando su respuesta.
Identificación de patrones 4. Defina qué patrones de las siguientes clasificaciones se utilizan en la interfaz presentada, y justifique su respuesta, utilizando la plantilla propuesta: a. estructura b. navegación c. layout d. acciones y comandos e. ingreso de datos
Aplicación de patrones 5. Aplique los patrones que crea convenientes para mejorar la interfaz, cumpliendo las heurísticas y reglas de oro. Para cada patrón: a. Describa la aplicación del patrón con la plantilla propuesta b. Diseñe la interfaz con la corrección a partir de la aplicación del
conjunto de patrones seleccionados
Plantilla: Clasificación: Patrón (cuál):
Motivación (porqué):
Reglas de Oro afectadas:
Heurísticas afectadas:
Aplicación (cómo):
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Anualmente la Dirección de Cultura de la Municipalidad de una localidad de la provincia, organiza uno o más festivales de folklore. Por lo general los festivales tienen una duración de cinco noches, aunque esto puede variar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yuP8nsvSTCfdgpCosMZ6XcdvP6FQAi1sCNJxuPnerix-dQimbn6zb6BVw60s3BccdWuJzgbIm2T0PHXGT_z7J_PRVdks3l4xc7LvColItmXIlehvJHddP63mT3GWOp5m4jgFdAA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R1im8ngQNPTgtGrHIcZ9WihJd3bG42YMifq_Vw2dKmxNKHfKAXccxrdVwxh06OB6hhSMRljfgiq6nuUqaUbyMTcmrHEw3x8GIcwChigAmH0KrsXFOuAXW5mEKhAVVld676VU-ig=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kSXXZvQNJXMh-jJlWhkM4b_T0LCJqEBAUMPkCXK5s0ugcgECO2IpM9fkEdSpt5tEoDqZ_Ue3aoTf-XsBgfAFC1g_tQEfTkw5V6X1uW7Ly07TzJ8VrYcCwUShF0kNS8mF9mvPm=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

de año en año. En cada una de las noches actúan distintos grupos folklóricos con reconocimiento regional, provincial y nacional. Cada festival se prepara con mucha anticipación y se realiza la diagramación para determinar qué grupos actúan en cada noche y el orden en el que los mismos realizarán sus presentaciones, teniendo en cuenta que los horarios de presentación de los grupos no pueden superponerse y que no pueden quedar espacios sin ninguna presentación entre medio de dos grupos. Considerar que no puede incluirse la participación de un grupo más de una vez para un mismo festival, en una misma noche. En cada noche se define la hora de inicio de esta, pero no se determina la hora de fin, ya que esta puede variar según si las presentaciones se extienden más de lo previsto. Los Festivales se realiza en un único Predio, que está dividido en sectores (A, B, C, etc.), que se identifican con colores diferentes, y cada sector se compone de filas (1, 2, 3, etc.), cada fila, a su vez, está conformada por butacas, las cuales están numeradas. La venta de entradas se realiza en cinco centros de venta (Predio donde se realizará el festival, tres centros comerciales de la ciudad capital y un centro comercial de la localidad donde se realiza el festival), cada uno de estos puede poseer hasta 3 puntos de venta para el expendio de las entradas que se encuentran en funcionamiento simultáneamente. No se debe permitir que se venda una misma entrada (una misma butaca de un festival en una misma fecha) en dos puntos de venta diferentes. Todas las entradas de un centro de venta se envían a imprimir en una misma impresora fiscal. Existen distintos tipos de entradas para el público (mayores, menores, jubilados, etc.). El precio de las entradas depende del tipo de entrada y del sector donde se encuentre la butaca, además puede variar de una noche a otra, dependiendo de los grupos musicales que actúan. Por ejemplo, una entrada para mayores en el sector A, que está cerca del escenario, será más costosa que una para mayores en el sector E que está más alejado del mismo y a su vez puede variar de noche en noche el precio de la entrada en la misma ubicación. Las butacas se venden para una noche en particular así es que una misma butaca puede estar disponible, por ejemplo, para la noche 1 y 3, y ocupada para la noche 2, 4 y 5. También se habilita la venta anticipada de las entradas a un precio menor, un porcentaje de descuento que la Dirección de Cultura determina, al igual que la fecha de vencimiento de ese beneficio, por ejemplo, venta anticipada con un descuento del 10 % hasta un mes antes del día del festival para el que se sea comprar la entrada. La forma de venta de entradas es únicamente de contado en efectivo. Si un cliente solicita la anulación de la entrada sólo se le reintegra el 50% del monto abonado. Esto se puede hacer hasta 10 días antes del inicio del espectáculo (día del festival), para el que se compró la entrada. La entrada tiene un código de barras para evitar falsificaciones. Además, hay que tener en cuenta que la misma entrada cumple la función de factura, por lo que debe tener los datos requeridos por la ley de facturación, y debe asegurarse de que el número de factura sea único. La Dirección de Cultura de la Municipalidad ha solicitado a su Área de Sistemas el desarrollo de un sistema de información que le ayude con la administración de los festivales que organiza, la diagramación de la programación y la venta de entradas y brinde información que ayude a la organización de próximos festivales. La Dirección de Cultura de la Municipalidad tiene licencias para realizar la aplicación con una base de datos Oracle. Debido a que en las horas pico se suele generar cola en los puntos de venta, es necesario que el sistema genere una entrada en no más de 6 segundos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10lqGiAxX35N9psFVbKy5ALj2-tJg1IJ8SXwvYg7BHqxJE_PZWMnaL7MWw5yQt9JmhIaY2DEUD8GntibMFt_6d27w4egMa0hMCA97hKIRokAUBUrzTRZo_cHAV1_Sg-bRgaYw41g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VZQJKYt9uSDJ1_a7rIgvCY2VxURr49-IRTeCJXw9pEeUpO3zoxy03w6HGGkuW7Z8tct0yziMQyWto9bvl-d3i-HBEfAPmeaPnL3o47U_qcH7hq3xqfUtB1gvK4gvctGzyxVRPOg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0goaZhMwEwIBGwnWemsoeQz4fa4I0g_KGM2TTy6_Qmmc3hVLLq9DHX0rHrlPrUtjtjKDe4e4CxNIfr3U6NLza4vXcKqtIWo_v5vLaZUIPY-YpniyzKwxE9PEmH98c72peGH4SH=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

Requerimientos de Software para e l proyecto
Objetivo del sistema: Dar soporte a la diagramación de festivales, a la venta y cobro de entradas para los mismos, brindando información vinculada a la gestión. Requerimientos Funcionales (Alcances): ⚫ Administrar festivales ⚫ Administrar grupos musicales ⚫ Administrar puntos de venta ⚫ Administrar centros de venta ⚫ Gestionar la diagramación de la programación de los festivales ⚫ Administrar tipos de entrada ⚫ Administrar precios de entradas para el festival ⚫ Administrar ubicaciones ⚫ Gestionar venta de entradas ⚫ Brindar información relacionada a la venta de entradas. No contempla: ⚫ Control de entradas al ingreso de cada noche del festival. ⚫ Contratación y Pago a artistas y/o proveedores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36ylw8ljvml6Jo97rN08Uq7gHRY89x3ogCCfWXrf5sLaLibTVAmDGmdjVL62r-Ap6g2Kk6hfAVya2g0m1CfqtfKPqtlzUxUJy2FHq_FDk4M2jvstc5MQRzXv_ITp6Y_r6rH-HtQw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tXMRJqSzBJgf81FylTLGldkuHNHJDZZWX-7hKlJWMhJWVw2Kuu1TfTXydXIwpTKkn0JBIIdJD5Z6UBJbVvgtR3VL62WMzHoT6-ImHSubHmmc7a8Gs370O-EuAzr-N9UdQ-nvk=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KOh8oFu32BuxD8uuIDs6MHmwMlTzxBY3p4eSKS1Z_MAPAjWdrZGSBZuX_pBu7Y7T31WY8sKHqwyLOSOvATbP6MUikh4teZiDwJMKUc9DM08SNn9bkmpNjMq54-jrZaXUV34Es=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

Requerimientos No Funcionales:
Requerimientos No Funcionales Clasificación
Nº Nombre Descripción Categoría Subcategoría
1 Simultaneidad de puntos de venta Funcionamiento simultáneo de hasta 15puntos de venta
Producto Performance/Concurrencia
2 Código de barras Código de Barras en la entrada que permita identificarla unívocamente Restricciones Técnicas Implementación
3 Ley de facturación Entrada que contenga los datos requeridos por la ley de facturación y número de factura sea único
Restricciones de Negocio Legales
4 Base de datos Base de datos de la aplicación en Oracle 8i Restricciones Técnicas Implementación
5 Generación de entradas Generación de entrada en un máximo de 6 segundos Producto Performance/Tiempo de
Respuesta
6 Manejo de Concurrencia
Manejo de concurrencia de puntos de venta bloqueando la butaca para un festival en una fecha en el momento en que se está realizando la venta, liberando la misma si la venta no se concreta y ocupándola si la venta se realiza.
Producto Performance/Concurrencia
7 Colores de sectores
Visualización de los sectores en la interfaz gráfica de usuario, con un color diferente para cada uno, asociado el nombre del sector al color correspondiente
Producto Interfaz/Usuario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a63poYxmLkng0r9-XIj2j5hzfvYo0UpFDmomdNj_t1Aqf4zFmG87fuYukiadyBpZNxObmBQkSrdzK-eXR1FUdpsgnqouBno4I6pZZMzI6Es9WaNVvav146sukvBwh52k-QJd4=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0x-9kycwkRvk_W9qWfaYbLcmViVS3kBATAzMiT0zEx0AUKoAu0Vfr9vgez6E-iI7d7w63jo8zX1K53B3WaiW_POataeERZvi9rofWlxS-8hLZFJ2i8LFQg2Rin8_9lDVoaKakiFg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3smZXf-3RqdJT59uoT38jJTTW-DdV15FcaRQr3ttPwjcn4b8mrOJ525waXUO_t5sGJeDeLLtuO8SY5Hxc1VAxhhABWvnQm3mZkeLfQsSaoeu8kFQRWzcWIjG5BqynsgMxH8UDnyA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 5
Especificación de los Casos de Uso esenciales
Diagrama de Casos de Uso del Sistema de Información – Vista de Casos de Uso esenciales
uc Casos de Uso Esenciales
EncargadoDeVenta
ResponsableDeFestival
ResponsableDeInfraestructura
1- Registrar Venta De Entradas
8- Registrar Ubicaciones del
Estadio
2- Registrar Grupo Musical
3- Generar Diagramación
4- Generar Reporte De Venta De Entradas
5- Registrar Festival
6- Generar Estadísitica de Asistencia por Día de
Festival 7- Registrar Precios de Entradas
9- Actualizar Disponibilidad
de Butacas
«extend»
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RQU2hg1ibAbsDTf_pxKGgJX9lufhSIOtAjQ8ZeAEjTku_hA3dR6cT4b6q8cyM9g6BLRZ4BTX71RjxBkPY5_dENue7tSAKUrZ9EJplvrKhcQef4P-ZC5krTXh60j6NcsADIP--=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YMyhuVBZU2dzsoyeQIQMRsuPk237oj0HNLwo5m0lmquAHsweZSNg_HFvBglVoKoP5Kurujo1BOohg8mlK4OLarzbFOjzqvO2RpNc5GMGoUqLLah_3DPnkJh_Q0Fy_nhdq_NzLVA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 6
Descripción de Casos de Uso– Trazo 2.0
Nombre del Use Case: Registrar Venta de Entradas ID: 01
Prioridad: Alta Media Baja
Complejidad: Simple (1) Mediano (3) Complejo (5) Muy Complejo (8) Extremadamente Complejo (13)
Actor Principal: Encargado de Ventas (EV) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
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
9. SI: validar si aplica venta anticipada.
10. SI: calcular y visualizar subtotal por tipo de entrada y el importe total de la venta.
11. SI: solicitar confirmación para generar cada una de las entradas.
12. EV: confirmar la generación.
13. SI: generar e imprimir cada una de las entradas con la siguiente información: Nº entrada, fecha de venta, tipo de entrada, precio, sector, fila, nº butaca, fecha del Evento, punto de venta y centro de venta
14. SI: actualizar la disponibilidad de cada una de las butacas a VENDIDA.
Flujos Alternativos
A1. No hay festivales vigentes A2. No hay butacas disponibles para las fechas del festival ingresadas A3. No hay butacas disponibles en los sectores elegidos. A4. No se confirma la generación de las entradas.
Observaciones: 1. RF puede cancelar la operación en cualquier momento seleccionado la opción correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xuoCoLRp6FLAf3sAXDVVxFNuKEwKqsTnxMPq4yKTbLkuW3AhU5FLKMg7w1wp1bNmSqebkhXkPO3J2eGSj_cnh7vXDgjOGRBufTKs6KRrQI1DhQ8yyzjKIyCYdH0D0b1qTM6m9Eg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VLjfJ060Ki6B6G2f1nB6HpR0tuCxH2QFgr8umzZ-e1HgpPZKTuYO7H_rZWxP3sF-trlskKp5_QvEVqOuc1QC_oSpQeu8VBvJiQqq65wg3nWqirI-Bt7ni6kJy4Fyo_utblMezwQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pOC6WLaScIdL6B1tTt_BIdQ6sGVAhBKzSq4BmCyNi6yoRgnJlRjfJQm4KDmOUbo2BdtixBc2rQxVojWCKC6AYtnWWQMnXpdkaJeBEkG3B74dSzCasyCSCC-m7u8FYwxjFjemngg=w741-h725-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 7
Diseño de interfaz de usuario
Tipo de Entrada Precìo
Entradas
Cantidad Descuento SubTotalFecha
Total:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TqjmUJSozShGdw9iresXTC7JSwiEPf8P5zraTngpIoW9iRqb6AL_VbvTS6N8KCqA12oOHgKSmFHIC6Szk3D8k6VrNmSpE7kamaX1YPp8ptFXfYz9YbpUwYV1J25RvnxrPFbPfOQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TJnfugRpKZz5V_a5UfYLcPch7_SozSB0lvtOBkIQ83Da-prZYY1gmWNuo01_FqrTPOskn1K7qj9qroBWHTH2EQqT-7xacLdPTgIkPKWJ9kjVO4-JWrsnaba9EH8rsOPdVoslrKg=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0f20jAbBMoyjbPJPumcFG534iuPekQIpifUlv3-NH_h-ca0e3nqsNLLe7R3tgC7SWf4-tnEVU9ca_h-fVPRpCnZJribH3Q91upv37bbk2oE49mqvl3le1ZmwKImSaDuNOEFJe88A=w418-h127-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 8
Ubicación seleccionada
EstudiantesIndique el tipo de entrada:
A – F2 - 15
Interfaz Registrar venta de entrada Idioma
Heurísticas de Nielsen
1. Visibilidad del estado del sistema
2. Correspondencia entre el sistema y el mundo real
3. Control y libertad del usuario
4. Consistencia y estándares
5. Previsión de errores
6. Reconocimiento antes que re-llamada
7. Flexibilidad y eficiencia de uso
8. Diseño estético y minimalista
9. Ayudar al usuario a reconocer, diagnosticar y recuperarse de errores
10. Ayuda y documentación
Reglas de Oro de Shneiderman
1. Busca la consistencia
2. Permite que los usuarios frecuentes utilicen accesos directos
3. Ofrece retroalimentación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wjjiQmhdqHUTGzcADw7IhLR-XrBJYk_bUCYZ-6AMO-EIpSlZk3ei0fowOAnK8b-CMGNwqllum5d3k-KI2b-efoX93_LovOAhf9Uwh983IM6Zii2lA7J0UEl8-_inyFc7TmilSYg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yfQq6wll814Z_BCeudbbIn28cQ3c4Avh-Z2jUsllzEQUpBkoRVrcY-QtOutIv2UO8eINLiVXsrWfTWpbsZzcN7KpAtDr0j9A2lBdqnd7BvHPQ1Ha2D5QRv3v8RXzOUreR93CH=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 9
informativa
4. Diseña acciones secuenciales
5. Errores Simples
6. Fácil reversión de las acciones
7. Apoya al usuario con una interfaz amigable
8. Reduce la carga de memoria
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Mc2lEbZgQ9zt1GwhGQKazsmc5aHhgA9Q3YLQFh_V_pk0E1Lia79UHu6E-BgzdPTUOBRSXF_PzxVklaieOzY4WuucheiovKmA_X2xjMCQS00JwtDsqoTg1k4S6RdAEpd_6wpx3uw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uF-ucqt7f_45pkxerT2-4qpYEZxnvy56bgjKz4TO_qYdmzq3OiGbBQx05bKrMP4h8y3S95JaZSggrQ3JHvhZhu_C1LvCVUzgMZyavF4-jaHIPp_DAbDoyVmnURapfYOlzHktwZw=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XPq9ET9PM1VVywNx3X7bIdkgW50CFW2xG7HkILc6hQTrBdknhgY-JGwJQJEjQmimmCN5kGBBjFXBzAIpLHUkRAvABjjU1el6T8J5GFhkc0fZkPo7ecMeUMmZW5VmSfh7ixyibWg=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3G5Jqgqc9OZHX1jt0f6KPrxU8ndnCx9wfuM0p0svdohxO6o8K84SvH4eXZrFTsbT-kc5mu6jSYnj7SaFT94-wEn0m9Xs5ETE5AzWp4Z9fE7XbMdEBPHpUTWKLhP7a17nK3my_1=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cIOLvaYaA18g1p-ceOv4PLgErib4xM9qbVhYwFaTVE-QbGA2E1sw5vzEsZfytiArLZ2G_XHS4NR1rKumEhjowFsE0Uww48ydgry1c5XEobZxRoju8kPmiii2MIx8zZl-F8WKTkg=w73-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KdT2oEUs67IFdXpX8Klk2Y02SgiyeAN9yteOhQV0rL3bggIcrxyCrOyrLok_T-nUODdvThjGqjOx_hmieyDpLQZubpNAPykSkEFzeHzwFiR4Ao5wMl9J3OxTl8f_iqtfju5HR3w=w39-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BZv6XZPHHS0DfmhWlPNsnGLX9maFs5rwMbA3VYMgpTAPkPWW3ShGsBfVFqi79EWg_5g5ZBbd41zNhDZv3YkyTeJUP5HBwUV6O3bBXkmJxiKu6A4rlDpU7nU4PixhTVlx-hRcGiw=w73-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uPz9U7nTPBGWOBAOUtxTRLT6u6udrXjoZetA3ostflyrYon67WUO_VpgBxusVRPNXS1tlr0lhcnlJ4IGQtH7DCU6EJUdmgEX907N3C64A97flUJhbiv7qkYoopQaoQDk3xrhQHQ=w39-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bC3TOaTS4lTdFPr4a5TOGaLEoVmPaC2FAS2gsrurzK4diJRzqKhqwzGVrxv-2nDBiIKSm9a9ksAilEx6uHebLUvxRCHvSGl5Z2YWQH59zs__UEFpnoPJYhk3VXJiRgwHex8Ss=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iJ-mvj2xAjDMNfBpVZ5-NxAKn5ecIj7zkgfACmbXS6hrfQUvhpF5e6KxaT8tqRNPJZK0CtY0SwXT7bORCeMTQMgjX2aJkK-cO7eQd4aFKLtBWK3BCxTkE3kxeBK0vVjiqlPpl=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rIyHcFFocCem-5OZLiK-xxiTTCToOngnEYf3qP3IdBAa_rHgX4AKZMjpzmdVA2DY63ylswM90Y0DSehZ3-pWc57kIqEU8DfSCPfVXQ3lAsAbsl27S6TfTnsG49ReS9WL1IIHb=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XTM-RD9nCGZBC-W6Cydh-Kv9_ScfLF65SQ6ywDWilAwcV4Vl741QgxeSMl5kO19rMjiilIk9n1oIGYx_-qIuc3FgPTNheiLdxF37WLU6mlLLjuiEZio9EqacHz2VmcidHMLrY=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fGL_HP0zgFHyLJSUGOO-5p5aIykfPdGJOO_e0mNxufIm-UTcH8ltvhtKK_t4JotJdUR6cmoPLAmH8JUUueLzga6K9sH8r2d-BhxNh7CNlOZY_9jSy3XKQ_gQlTs4H3jYl6rB4=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-IGceX1heyf1sQdqL25AT28-pz48OS1I30AsBZa4fX-PAyG04GUaZo2xKAzh_pGrNAu8qapGe-aRd-kFaiBVfkqwgfbQ_hprY3I84glXJ6ZKj2_BNm5FkKzpUHvjLd_6fy02HUA=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0FjURK57b52vYNZNykV033-Y7pS972uZ7iyX-V2-QOaghqc6U8M7snX-gYgQhQChIRIFH_Eyl0vU2-cQbESDomcB6xzvGlpxxrpFS9ThRFIfRip4HDxpobA75Onr6rAY3tpdSafg=w73-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hBEV2h8E_awlob4AYgNe7ekATLfEE6qN8uDUit1awhTgKAanh10fP2dzW1bGn0TdZE7JSCS2Wns_dGurkbXjfkqFGxKDZw5LSZRM3mNUbfvKIX5nLwvOJAzSvTsLQO-2lsq3_-A=w39-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vOIOnTZhwtWutAjesZ2w6PdOw-3pksGOzOE8273Sq0woBaqDJFNc9vdIUtlLpwTLiE1xJYlEfto3ZeKkxLqnGS49sMUXENeh-TCVu9EjbKGKbTK4_jMLSyksVKRnmTFub8PwJkQ=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ecfbhQqQ-LBQjvrm3KY0lnYvA3kQMhidVN1hh2sH9KWu_nMPZS3RUIGN-Guf5iXMGgVbvrZZPPisCdi5MSCvcCjAGUmUWYZxyqNTIXqzntFEq4qiZJvlBENXQlv5Fm_D5Ffz0=w35-h32-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 10
Solución Propuesta
Interfaz Registrar venta de entrada Idioma Forms
Heurísticas de Nielsen
1. Visibilidad del estado del sistema No se muestra el total y subtotales de venta, señalando cada butaca a vender.
2. Correspondencia entre el sistema y el mundo real
Festival, fecha, sectores, tipo de entrada, son conceptos del dominio.
3. Control y libertad del usuario El usuario puede cancelar la operación en cualquier momento con el botón
Cancelar.
El pop-up para la selección del tipo de entrada no permite ser cerrado o cancelada la operación.
4. Consistencia y estándares
No puede comprobarse(sería necesario ver el diseño de interfaz de otros CU/funcionalidades)
5. Previsión de errores
No se explican todos los errores. Faltan mensajes de error para cuando no es posible bloquear una butaca y cuando no hay disponibilidad de butaca.
6. Reconocimiento antes que re-llamada No se muestra el total y subtotales de venta, señalando cada butaca a vender.
7. Flexibilidad y eficiencia de uso
No puede comprobarse(tendría que verse el menú y las posibilidades de configuración)
8. Diseño estético y minimalista No se presenta información que no sea relevante.
9. Ayudar al usuario a reconocer, diagnosticar y recuperarse de errores
No se explican todos los errores. Faltan mensajes de error para cuando no es posible bloquear una butaca y cuando no hay disponibilidad de butaca.
Ayuda y documentación No puede comprobarse(el dominio no explica si se cuenta con documentación)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cmzyNSB4bwaMU8P-_zQhNpukcC1zVYUcgKIAdjN4nmuZFrHhGqM7YHTJeXxE1fG0GOLca3vy_kjnUR0J9nQ37wUTaUtGi82K1T2qYQPZLoObHrXLv5X2oQd4zsvJgECsMNROjzQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UrCqBKIVbHIYM_LmuOODMv3pCPZ0KIU81mICGvXq-pXDoZJ9OETsmqMjb4ppj9cJQj-Q_ZeaBcfJ4W-MJB4NnVKpYAROhtWdfLhZx7r7TF8vYrGZMd5jgrvVFEAWvh-mekxXq2w=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ca7WxjcBZI6H7yVOobyFSng9g2cpHtoE7N2ZNkJSWFb354Rk0M8OKtG86MvLI_Qu4Vvb1ZMPXCZuKUbHKO3cw33YwwBAZd3jepkvhJZYK-dK-odFjgULFpHe6JN_454Nl-n0VRw=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2V5HmTFE9jaHkPt-OSYnnoAVxK6d-Qt44pACkOCRmZSBGONNAwXFP0QAJcEITG66O99XXm2mMNG9WegNNvmJZ3dqv2MiKJEtWj4vOKiZQ0WliKfC2FP2enZE5aJzPpWNswwH4A=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1x3Ky4FZCvctJXzNeoLYdXWV0CTKAuRuY0zstDOtYfbvXdX0xVkYgTn8n6guYdQ_vkTpK1-hnRRvqmVm94Zm1tRH-aBaCcNQIUgEcOOH47vdv9iGChC9CjeeOyAwciY-fvBVmvuw=w73-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Nd-eINwr5CwxDCiF_EQ17F0C5hsGHW-whuQ6aeJ2cuPQGihMgF6eXOMxhTYv0egMz_VlC7ifxyyTc-9hD257Laiegqi34NW7o7tTlHpNqXqxia2TIoZQqTkWwI1Yh3pT6JPO05w=w39-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xb6Gx-Dq9OMbu_frJOOUBMkL2xGMI_40O_TSNsuvHPzR9UyA-ZLlnTao8fJ04zXRLdNUh0000pCy1UAKzT1-H2ckYPJuXHbBR3nd1HuOgSKylOqKKr-sdVXUhe4aF_xomNVmf3A=w67-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sdHWSkTFq7kIDSzsr8YtoUMgQ4gb-206HJUrZcsP6IyNVP8WniDyC8AALRCxmdEc-IMWdEi2T-AIeHZL9R4ysJUGwosz8OTCy6wMQnG4Is-xwcoiCw10WvswDoB4JutKG2JL8=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vRh-9nG9DhG-JU-sEUsXNnNcs-BQdZFCNK4nBZ8UlQnmG7cVMUxTDgZhou4W9U2u5twR6um5jWQO2_Zyg0YxW3cIDuEusPyk2mVvKmdmsUmDznQzj8qhmiOUsMdpLTKa5lHvB1A=w73-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_C4QUm3TRjWzagxFuo7sXRVbKcqDXtRVfekiswodjnDBnqRPF7UpWofQGPqWNMmp8y_Toou5hMIR2_FMVLi6hWOPWZN6J1Y0zpeP8UgaprqyAdWwVgPdpEImSXwLb-vFX5DYnCw=w39-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EpQ6PlhDeueudBikmXfJAH9QxdYcnEBj7hnA5zL3gZwzrq-rlVSayV1_mCqkql0uMZIj1MWkGdhrcb12tEELDBsjDV6EViCPQEH1bH2rXHuefa1XLb61NOuPcaEaGiKyV2Ygn=w67-h37-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WOcMxXKnX3gx1dayYQfFtTHlMudX_8V8bK7rx-JfK2Vad25GqXvr-PWCAsb-M4jbxj9UBNFfzdnFK5G4R86swQ1djgiSjqGJVsaBlHAhFbEq24TUw9_QtfqlBIYS7ieb4pF69_w=w35-h32-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20B0oiBYXVjb9FMqGJS8qxladjjU0dzLzx7j5hNiAxkOhx-yM4dh1HeiJX79EC-95mjGWp884h49rEJmsAijwYqbzi9bKw5XV--iskMNF6CXdtRYU8GEifenO0H1zugSCJ7FrE=w67-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv170uko8MT_oAd3tqdGx6A0D-Nb5S984n0Cl6Gdq0ktk2hfTcb55kmESK26Dl2H0GsK1k-mPH4U0EY5DNjcQ1pjJ8BP4Ggp6pS2Avpo3qROf_pjIxC0vsCpLXkjqT6VhJr3xIGLMg=w35-h32-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 11
Reglas de Oro de Shneiderman
1. Busca la consistencia No puede comprobarse(no se cuenta con otras pantallas para comprobarlo)
2. Permite que los usuarios frecuentes utilicen accesos directos
No puede comprobarse(no se muestra el menú)
3. Ofrece retroalimentación informativa
No se muestra mensaje de confirmación de la venta.
4. Diseña acciones secuenciales La pantalla está organizada secuencialmente
5. Errores Simples
No se explican todos los errores. Faltan mensajes de error para cuando no es posible bloquear una butaca y cuando no hay disponibilidad de butaca.
6. Fácil reversión de las acciones El botón cancelar se encuentra disponible en todo momento.
7. Apoya al usuario con una interfaz amigable No están claros los colores de las butacas. No existen referencias.
8. Reduce la carga de memoria No se muestra el total y subtotales de venta, señalando cada butaca a vender
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cLKMRcVysdcyaOewtfPBkz-nCjHtgaN0XdVSo860ySBUI-AB2fmVbOaWGBTW8L2DVhR__9cbIGe4wK1JxxcrLi8bZxOlwnhpcqyU39D82wc4ZRdhqNutcGloT-3whzvgOmYEpaA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hXjtbvCQYn7RNHcD2OTrBCaDA3lQG-mEFGkKJCn6a0ntyKHZEg1P1ooMAjBgXDBaDf41coTgFPC4-Uk8rP8eYSp4_8eB5ycyGXkqmPaQfHhXFaXpjrCMeSZXFw-7K7ztLCTbFMg=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 12
4. Identificación de patrones
Clasificación: Patrones de estructura Patrón (cuál): Two panel selector Motivación (porqué): Para organizar la información para el usuario, ordenada de forma tal que arriba
visualice aquello que afecta sus primeras acciones.
Reglas de Oro afectadas:
7. Apoya al usuario con una interfaz amigable 4. Diseño de acciones secuenciales
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo): En la parte de arriba se selecciona el festival y la fecha, para luego mostrar la información respecto a la disponibilidad de butacas.
Clasificación: Patrones de layout Patrón (cuál): Center Stage Motivación (porqué): La información principal de la venta corresponde a la butaca que se vende, por lo que
se coloca en la parte más visible de la pantalla.
Reglas de Oro afectadas:
7. Apoya al usuario con una interfaz amigable
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo):
Los datos de las butacas se encuentran en la parte central de la pantalla.
Patrón (cuál): Right/left aligment Motivación (porqué): Se adecua a la forma en que los usuarios “leen” la pantalla
Reglas de Oro afectadas:
7. Apoya al usuario con una interfaz amigable 4. Diseño de acciones secuenciales
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo): Se encuentran alineados los datos a la derecha.
Clasificación: Patrones de entrada de datos Patrón (cuál): Ilustrated choices Motivación (porqué): Proporcionar al usuario una forma de identificación apropiada para reconocer una
funcionalidad, una metáfora adecuada.
Reglas de Oro afectadas:
7. Apoya al usuario con una interfaz amigable
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo): Las sillas son una forma ilustrada de indicar la disponibilidad de butacas
Patrón (cuál): Imput promt Motivación (porqué): Ayudar al usuario a identificar qué dato debe ingresar/seleccionar.
Reglas de Oro 7. Apoya al usuario con una interfaz amigable
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mO16knuRaR1fSicqGnKdPEyoialF-hkTk_aR8bT8sUuTK-MzUbtvhqkXI0FDspAbUJ-FWjm0EPxnd1dnn2kedBi37-pnq9RaF6eL3zjWMnBk_HQdL8ENXWf3x83zL7HqfXyOL8w=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CTM-b9pfMBG6oc0sStrfv1RFoEGmjpZZvh1l7Vc8RMXEnj3hqYBdV7Mr8-DRMUyK7KfS1LfwP8coqnJKAcoabQaCrLRsu6_wTkwTZr4fluHJiMbDdlpIOef1xs1f0clQ9FY0T=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 13
afectadas:
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo): En la selección del festival y la fecha se indica esto con un texto
Clasificación: Patrones de acciones y comandos Patrón (cuál): Promminent done button Motivación (porqué): El botón de confirmación debe ser fácilmente accesible para el usuario, y debe
visualizarse rápidamente.
Reglas de Oro afectadas:
7. Apoya al usuario con una interfaz amigable
Heurísticas afectadas: Diseño estético y minimalista
Aplicación (cómo): El botón de confirmación se encuentra al final de la pantalla, donde el usuario está habituado a encontrarlo.
Patrón (cuál): Cancelability Motivación (porqué): El usuario debe poder deshacer sus acciones en cualquier momento.
Reglas de Oro afectadas:
6. Fácil revisión de las acciones.
Heurísticas afectadas: Control y libertad del usuario
Aplicación (cómo): Se encuentra disponible en todo momento el botón Cancelar, para cancelar la operación.
5. Patrones a aplicar: Clasificación: Patrones de acciones y comandos Patrón (cuál): Preview
Motivación (porqué): El usuario no puede saber qué butacas ya incluyó en la venta, ni que tipos de entrada.
Reglas de Oro afectadas:
8. Reduce la carga de memoria
Heurísticas afectadas:
Visibilidad del estado del sistema Reconocimiento antes que re-llamada
Aplicación (cómo): Agregar grilla donde se muestren las butacas y tipos de entrada ya seleccionados para la venta, con el subtotal y el total de la venta.
Clasificación: Patrones de Navegación Patrón (cuál): Modal Panel Motivación (porqué): El usuario no debe realizar otras operaciones ante situaciones de error y ante la
confirmación de la venta.
Reglas de Oro afectadas:
3. Ofrece retroalimentación informativa 5. Errores Simples
Heurísticas afectadas: Ayudar al usuario a reconocer, diagnosticar y recuperarse de errores
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22mKZN1cflK8tUpalce8QYNl0bTkxMZfGHGbC-xr0yLBNDtSfjzJ50luJe2JWPcU5diNZK2Oy9pSWc9hbYcVnyJq-n9s_dePdXo423wzWeII1wsLAzOV-bk6v91IZSD_IzsV7r=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_wPPu28WUQ3aOkrfmt60pMtq6Z61YVWWDev1yX_b0AAiVirGGJwckbl2b23TpjNP0jzi52DYTAU3WwPdSq17dD2CwcQ4P6c6pKidBlevMOGkJgnJlcBdi_wSAyvGfT5Orlhs31A=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sMvz4jMXGOtNAGQG_AazCU95TEQ91taL0pZnUbIMUNgoLFJP3IXsQMtO34GE84VnIRwRXoW2DnT3w2bA3m9aWOIJ7c4lqwgLXz7DkiwOulkqWPhByf0I-GhKi4kJFm4cl-BUS=w741-h725-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 14
Previsión de errores
Aplicación (cómo): Para los mensajes de error y la confirmación de la venta de entradas, asegurando que el usuario deba responder a la consulta antes de continuar la operación
Prototipos de Interfaz de Usuario completa
Tipo de Entrada Precìo
Entradas
Cantidad Descuento SubTotalFecha
Total:
Ubicación seleccionada
EstudiantesIndique el tipo de entrada:
A – F2 - 15
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2W-HiuphSQpIT2aIj-QPaqg204AGgqGdPNXE3binICwr-Q7RaRQL4-UuQ6o7GdgWMxa-0rW7uGxBEbPaAWmijXfFZolVwnZKsO67jtgbOHIZobZOUT9AIf-2TtTqVPHSXCSb8V=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Gb-I9KFdW8KPPNLb2RwcOaRAoRoIUs1VaLJaX4yIKMJBXi4ZbK79ILvy5nc1Jforo3kKjck1P6e-fAPCSiN1r7iX278IvoI2zInkV8TkyJ52d2_b61Mh4x0oYKEhCyHaoDiR2=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZGRPoxaMAvQUfMc7O3dl_SlMPeZyJxzJGl4Zq3ypUH536pDJnZCjX1Q9vNixXVSKaAAf7M60YOxsx2RjyeaxO_p3AUI6JKgqtcZBkvqqBRJ3irH8Jvt26tSq_FO1Bm1ABffPyXw=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yTMmBl7QVC7U7en4w83WFrgHcpSn2duaLxmK690rwpYzKufQPLy85aIn_zbONa2WIc-3SwZ-DvWezenUvlk9BYOBgtDVt6E3MOdDAdDI8lQlCE5MqL4svwKZO1YpUqLWm8QUC4g=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q8OtC0BIJQckN5o3cohEu3bHkWkX5Xv4sqZrafRGMlk4WczMCT9ETicn-VZgW3GU1aFwC1jG0g_JqTRFNLZRpU0fj17VDeiMJmPKZ8HcYIXsGC7SdY_MXEQu5mwkxdphFYRZ2qQ=w418-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uFmrXk4HLWh2eTCIunSlTz6qWZiC64_WEocPSmI8OL1LWuIep1V_Ndos5N1sf6DvzecGfucT9h-i9y7G9wMpZUriX-C_Cl2vtnub1-dvRi0hk7qNB1bJ3Y6-gq_6BtQSQ5ZPYmA=w418-h127-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 15
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qH39gij04ifc4j9djclnRY8BhqVXDta27dkQepHZTRrcw4uC0JjftwnJ6a49dWbZwkwCTzgBkIELccHzTyACEkESOgvzLYDGIMyG-07P9AAykhnC3Y6YDciOIv-no1eJaLqWbbg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09XK-n20CjBVucfR3eKQwVdOXx9gJKgrcR-2ejVIWeyf33hDwxG_8XaFmO2gqkIhZEQgx9uQf2qAfBY_JYBG1MrQvVDIfeBCC4WrdPf8G3bfg8DfOgn4rTDrSt2xY87hlgpe1QSg=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 16
Nombre del Caso de estudio: Gestión de Tableros - Trello (Versión Web) Consigna: Para la interfaz presentada realizar la consigna propuesta:
Interfaz Generar Board de Proyecto
Temática a abordar Consigna
Contextualización 1. Identifique el idioma al que pertenece la interfaz presentada. 2. Defina qué Heurísticas de Nielsen se cumplen y cuáles no, justificando su
respuesta. 3. Defina qué Reglas de Oro de Shneiderman se cumplen y cuáles no,
justificando su respuesta.
Identificación de patrones 4. Defina qué patrones de las siguientes clasificaciones se utilizan en la interfaz presentada, y justifique su respuesta, utilizando la plantilla propuesta: a. estructura b. navegación c. layout d. acciones y comandos e. ingreso de datos
Aplicación de patrones 5. Aplique los patrones que crea convenientes para mejorar la interfaz, cumpliendo las heurísticas y reglas de oro. Para cada patrón: a. Describa la aplicación del patrón con la plantilla propuesta b. Diseñe la interfaz con la corrección a partir de la aplicación del
conjunto de patrones seleccionados
Plantilla: Clasificación: Patrón (cuál): Motivación (porqué):
Reglas de Oro afectadas:
Heurísticas afectadas:
Aplicación (cómo):
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Esta aplicación permite gestionar tareas de un proyecto colaborativo, donde varios usuarios trabajan en conjunto para lograr ejecutar una serie de tareas. Cada proyecto se gestiona a través de un tablero (board) en donde se visualizan las tareas organizadas en listas que se corresponden con un estado de la tarea, las tareas pueden mover en el tablero cambiándose entre las distintas listas haciendo drag and drop. Los fondos de los tableros pueden personalizarse con una imagen. Cada tarea se categorizan según un color, pueden incluirse imágenes y fotos de
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pfJOgYGWkVyZUUdCnAnkusbQk9guXoy7X6AD2nzt_Uvb3XFVFGUJqdzqDodfrg47W5rXxNWGgY0bpbr2XUmv5PEe2PjBbSLjpQOFAXvpERHB3ie-qunQeBrm5qbBuvhstFHE0eg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10zAwL9FmD0wAa2BEVUPrEujJ7Cv6tlKbVewjVTw-dcB2iQLMcw1_XZTN9K02Quu4odVA_OfxwYyRgiZq6dPlzxJ1GdWZG8uKS3XO0EOWTgVtTz5001dhTFLIi5s2OCP5_fytMuQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Tnfx3w9gAVL2uAIe5JUhpXlTfyYzYIPJv_ze_qAxMCz_UrsaMpDQ27BL9DpFKEEm3CRFlbKmbOCg7DWR4svvry6uTQsUJRUgKg4wTVuKjLZjpoqKQ82GSATaSR08RcTqRyqX4Gg=w1280-h509-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Kdu8bQ8-CXdRSu2BGib-m1MnVSkgTsltXP2Dzv4n-dnY-gaWua3e3sNu1GXFUUSYfnk7hV7-I3_ymTVQB2iuGxUCWvqV_IFrYxxcF-ryqgRK4kNQntb7t7zjw2-6xlYUdqo84Vg=w1280-h598-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 17
usuarios para asignar las responsabilidades. Las tareas tienen fechas de vencimiento y según esta fecha pueden visualizarse en un calendario. Los usuario realizan comentarios sobre las tareas que serán vistos por los demás usuarios. El usuario podrá marcar con una estrella que indique favorito a aquellos tableros que desee acceder de manera más rápida.
Drag and drop: Se refiere a la acción de mover con el ratón objetos de una ventana a otra o entre partes de una misma ventana. Board: Tablero gráfico que representa un proyecto.
Diseño de interfaz de usuario Visualizar Tablero de Proyecto (vista tablero de tareas):
Visualizar Tablero de Proyecto (vista calendario):
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0638bUgGA7g-r-uhs_xV_1eWi2cur6-B6Z89A0Dw2UNssuVR36xdCu9UvrscJhTf-pNJVYO4A466zThxe3UFkO3W4VRh0fklNGLdo5omL0Xr2-ZV0lzJuoMX3SHFjgNnF3Erh3dA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oBBS2_khINYlW1_NvAWFuQYRrg-xfiu6_ylgPs5YE3mJUDugaz5FvIbBS2ZdctCcbMlo1-3Kk-z-4Os8p9iqSoPqoh5xpQYYWErgWU173Ce97ae_so1uO4kg2enU04eVsX8q3xw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 18
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gN7di8S5bFSZV2wRWFy7wQlkwzlcGdWgDTZEsosQWf3QgljjBN8NCOsS4tIZXe2ZPhSXGtEfn3iYCeZ-RsLD9YO81qmMiY31Z1diRUxjA7tfRZHUu3oge4pU1RAa3FPpafvpsKw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X_klsDOc7m1Nb8O-QXLEUmCj1k0yNnd5EnSIlnwsuj5LwBnA02Lq1xIf2mB6ZDzsQCM9Cp8zWItOTAMrww38iQtX07UhuuZvOceXfWvrtsty7nmsOxYzJhKb3TyBwuma2nfnR=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HO0TS9W9vEI4R8Lli3RYPZJldGPnnWJefPLEzr-CtHrlaTc8WSjSFnSrYpn5IGn26_tyd_q6mo_JbfpH18wn23hs58Bf3lTef5WJo0qEV4glCK-9HzQaXKTjvdqu-Zh-_PXoR=w956-h538-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 19
Nombre del Software a Evaluar: Ciudadano Digital – Gobierno de la Provincia de Córdoba
Consigna: Realizar la evaluación de la interacción del usuario del Producto de Software Ciudadano
Digital, del Gobierno de la Provincia de Córdoba (https://cidi.cba.gov.ar).
Objetivo: Realizar un informe de evaluación de la interacción usuario-software, con la intención de identificar oportunidades de mejora y analizar idioma y patrones utilizados en el diseño de la interacción. Verificar la aplicación de heurísticas y reglas en el diseño de la interacción de usuario del producto evaluado.
Entradas: ▪ Reglas de Oro de Schneiderman ▪ Heurísticas de Nielsen ▪ Libro Tidwell, Jenifer: “Designing Interfaces” 2da. Edición (Editorial O´Reilly Media,
Inc., 2006) ▪ Nielsen Norman: Evidence-Based User Experience Research-
http://www.nngroup.com/articles/ ▪ Producto de Software a Evaluar Ciudadano Digital del Gobierno de la Provincia de
Córdoba (https://cidi.cba.gov.ar).
Salida: Cada grupo presentará un reporte que contenga la evaluación realizada.
Instrucciones: 1. Dividirse en grupos 2. Realizar una evaluación de la interacción con el producto de software indicado. 3. Construir el reporte de evaluación considerando las plantillas que se adjuntan a
continuación. 4. Presentar el trabajo realizado, de manera grupal.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NfLjEFJy1eH7VxbKISkh2GQidbaKM98cEDkQat_Wg3X3dqtD6U_ZQvMaWZplpNG-SXBvfXODC1jqehG1lPcfrr-uo7KDlgIBrCMu21b4AZuoG0uCphHtopgnjYQXjCeBsT6CaZQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QTQr-tgfnwLKSMzyO7w14CXD76MeLzz5zz7ZE6IYPkDqvZFAamYCq6wthP1JCQC2kg1RpGgeONIdq_jGy-ZG7gbM-3jEJ6ApdmX8CKgzhxpR6enHZiOym-JRn7jXQuW96UKLxpQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 20
Para las interfaces del producto analizar:
Interfaz <<Nombre de la Interfaz evaluada>>
Temática a abordar Consigna
Contextualización 1. Identifique el idioma al que pertenece la interfaz presentada. 2. Defina qué Heurísticas de Nielsen que se cumplen y cuáles no,
justificando su respuesta. 3. Defina qué Reglas de Oro de Shneiderman que se cumplen y cuáles no,
justificando su respuesta.
Identificación de patrones 4. Defina qué patrones de las siguientes clasificaciones se utilizan en la interfaz presentada, y justifique su respuesta, utilizando la plantilla propuesta:
a. estructura b. navegación c. layout d. acciones y comandos e. ingreso de datos
Aplicación de patrones 5. Aplique los patrones que crea convenientes para mejorar la interfaz, cumpliendo las heurísticas y reglas de oro. Para cada patrón:
a. Describa la aplicación del patrón con la plantilla propuesta b. Diseñe la interfaz con la corrección a partir de la aplicación
del conjunto de patrones seleccionados
Plantilla: Clasificación: Patrón (cuál): Motivación (porqué):
Reglas de Oro afectadas:
Heurísticas afectadas:
Aplicación (cómo):
Descripción del Dominio asociado al Proyecto Práctico de Aplicación
“CiDi” es un portal web que permite gestionar digitalmente todos los trámites y servicios que brinda el Gobierno de la Provincia de Córdoba. Entre ellos, como empleado provincial, se pueden conocer/modificar datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cm5hs2Jd_GaL4axVzF7Jgol9IwASRLgoLEeIX_nwT_AdbBCuEqwzLoI6R-cX27FZe8d8peN75-6vEa3PlmohdPYw1iF-JyMXT99BwOzGbTpZCGouxRkUw1LmR2NzOmKZCWrxopg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iFdUnhlSMdqWdiPAPnis94Ecd0CD7ipBo5DySwwg90hxxSqPJ70EDXnU-0Kd_NEUhZ2RBLjVYf3NFse9mGfaKgr4U9t6vs4C9CmCBgPONg1wE35ToyTmaE9fGlIml6y4hVEcE=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Diseño de Interfaces de Usuario

2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.docx, Versión 1.0 Página 21
personales, gestionar recibos y solicitar licencias. Además, se puede administrar el Boleto Educativo Gratuito, o pagar servicios de manera electrónica.
Le permite al ciudadano crear su propio escritorio virtual para sus servicios más utilizados, teniendo acceso entre otros, a todos sus datos y trámites dentro de la Administración Pública Provincial.
Asimismo, permite guardar la documentación de los requisitos de los trámites de tal manera que la próxima vez que necesite realizar un nuevo trámite que entre sus requisitos, requiera dicho documento, el mismo no sea necesario ser presentado nuevamente.
El ciudadano cuenta a su vez con un centro de comunicaciones digitales que le informará a través de correo electrónico o mensaje de texto, de forma inmediata, del estado de sus tramitaciones.
Aclaración: el portal no es de carácter transaccional, ya que sólo permite visualizar los servicios del ciudadano y modificar algunos datos básicos. Cada servicio se gestiona mediante el acceso directo a los mismos, pero esto implica ingresar a una página web diferente que provee funcionalidades distintas a la del portal.
