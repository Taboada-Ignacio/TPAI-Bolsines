# 2026 DSI Bolsines ERS V1-2.pdf

- **Ruta OneDrive:** `ppai\2026 DSI Bolsines ERS V1-2.pdf`
- **Páginas totales:** 15 (extraídas: 15)

---

## Página 1

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 1 de 16 
 
 
 
 
 
 
Especificación de Requerimientos de 
Software 
Bolsines

## Página 2

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 2 de 16 
 
Tabla de contenido 
Especificación de Requerimientos de Software .............................................................................................................. 1 
Bolsines ............................................................................................................................................................................. 1 
1. Introducción .................................................................................................................................................................. 3 
1.1 Propósito ................................................................................................................................................................. 3 
1.2 Audiencia................................................................................................................................................................. 3 
1.3 Alcance .................................................................................................................................................................... 3 
1.4 Definiciones, Acrónimos y Abreviaturas ................................................................................................................. 3 
1.5 Referencias .............................................................................................................................................................. 4 
2. Presentación del Producto ............................................................................................................................................ 4 
2.1 Propósito del sistema .............................................................................................................................................. 4 
Objetivo ..................................................................................................................................................................... 4 
Alcances del producto de software .......................................................................................................................... 4 
No contempla ............................................................................................................................................................ 4 
2.2 Reglas de Negocio ................................................................................................................................................... 5 
2.3 Restricciones y supuestos ....................................................................................................................................... 6 
3. Requerimientos Funcionales ......................................................................................................................................... 7 
3.1 Actores .................................................................................................................................................................... 7 
3.2 Vista de Casos de Uso Esencial ............................................................................................................................... 8 
3.3 Listado de la Funcionalidad del Sistema ................................................................................................................. 9 
4. Descripción Detallada de Requerimientos .................................................................................................................. 11 
4.1 Requerimientos Funcionales ................................................................................................................................. 11 
4.2 Requerimientos No Funcionales ........................................................................................................................... 14 
5. Requerimientos de Licencia ........................................................................................................................................ 15 
6. Perspectiva del Producto ............................................................................................................................................ 15 
7. Componentes Comprados .......................................................................................................................................... 15 
8. Observaciones ............................................................................................................................................................. 15

## Página 3

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 3 de 16 
 
1. Introducción 
1.1 Propósito 
El objetivo del presente documento es especificar los requerimientos de un sistema de información para la gestión del 
envío y recepción de bolsines que contienen documentación entre las distintas comisiones médicas de un Organismo 
Controlador, en el marco del Proyecto Práctico de Aplicación Integrador (PPAI), de la cátedra de Diseño de Sistemas 
de Información, Carrera de Ingeniería en Sistemas de Información en la FRC y la FRVM de la UTN. 
1.2 Audiencia 
A continuación, se enumeran los involucrados y destinatarios de la ERS:  
• Responsables de Confección: Valeria Abdala, Sol Vega 
• Responsables de Revisión: Germán Vélez, Inés Haefeli,  María Sol Zanel, Mónica Lovay,  María Sánchez , 
Georgina González, Federico Mizzau, Julieta Llanes, Juan Salvador Barbera. 
• Responsable de Aprobación: Cecilia Massano, Judith Meles 
• Destinatarios: Estudiantes de la Cátedra Diseño de Sistemas de Información de la Carrera de Ingeniería en 
Sistemas de Información, Universidad Tecnológica Nacional – Facultades Regionales Villa María y Córdoba y la 
Unidad Académica Bariloche, dependiente de la FRC. 
 
1.3 Alcance 
A partir de este documento de ERS los estudiantes deberán realizar la presentación de las entregas del Proyecto 
Práctico de Aplicación Integrador, cumpliendo con los lineamientos definidos para cada una. 
El listado de casos de uso no es exhaustivo, los casos de uso incluidos son los que se consideran necesarios y suficientes 
para el desarrollo del Proyecto Práctico de Aplicación Integrador. 
 
1.4 Definiciones, Acrónimos y Abreviaturas 
 
Término Definición 
AP Actor Principal. 
Archivo Se puede asociar más de un archivo a la documentación admitiendo diferentes 
formatos como PDF o imágenes en formato BMP, TIFF, JPEG, PNG, GIF, entre otros. 
AS Actor Secundario. 
Asunto Descripción relevante de la documentación que se envía 
CM Comisión médica. 
Comisión Médica Destino CM que recibirá la documentación. 
Comisión Médica Origen CM que envía la documentación. 
CMC Comisión médica central. 
DSI Diseño de Sistemas de Información 
ERS Especificación de Requerimientos de Software

## Página 4

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 4 de 16 
 
Término Definición 
Fecha de Pase Es la fecha a partir de la cual la documentación deberá ser enviada. 
FRC Facultad Regional Córdoba 
FRVM Facultad Regional Villa María 
GCM Gerente de Comisión Médica 
PPAI Proyecto Práctico de Aplicación Integrador 
Sistema Término utilizado en forma indistinta con el término producto o producto de 
software, para referir al sistema de información que se espera que se diseñe. 
Tipo Documento Es el tipo de documento que se envía, como, por ejemplo: expediente, dictamen, 
estudio médico, carta documento, etc. 
UTN Universidad Tecnológica Nacional 
 
1.5 Referencias 
 
ID archivo de documento Título del documento Fecha de 
publicación 
Organización que lo publica 
2026 DSI PPAI Bolsines ERS.docx Especificación de Requerimientos de 
Software 
24/02/2026 Cátedra de DSI UTN - FRC 
 
2. Presentación del Producto 
2.1 Propósito del sistema 
Objetivo 
Gestión de envío y recepción de bolsines que contienen documentación, entre las distintas comisiones médicas del 
Organismo Contr olador, incluyendo la administración de la documentación y la gestión de los remitos asociados. 
Emisión de informes relacionados con bolsines y documentación. 
Alcances del producto de software 
• Administración de documentación. 
• Administración de Comisiones médicas. 
• Gestión de envío y recepción de bolsines. 
• Gestión de remitos de documentación. 
• Administración de usuarios. 
• Generación de reportes de trazabilidad de bolsines y la documentación contenida en ellos. 
 
No contempla 
• Gestión de convenios con el correo. 
• Gestión de extravío de Bolsines.

## Página 5

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 5 de 16 
 
2.2 Reglas de Negocio 
Regla de Negocio Descripción 
Empleados Responsables Los empleados que serán usuarios del sistema deben estar asignados a una comisión 
médica con los permisos correspondientes para poder operar el sistema. 
Manejo de un Bolsín El bolsín se registra en el sistema al momento de su armado; en ese momento se le 
asigna un número secuencial y único.  
Se puede modificar un bolsín eliminando uno o más de los remitos que contiene, o 
agregando remitos. Para agregar un remito a un bolsín, se debe crear el remito y 
posteriormente agregarlo al bolsín. 
El bolsín se cierra cuando se le coloca un precinto y se registra en el sistema el número 
de precinto. Si el bolsín tenía el precinto colocado y es necesario reabrirlo, ya sea 
para agregar o quitar remitos y la documentación  asociada a ellos, el precinto debe 
cambiarse por otro que tendrá un número diferente. En consecuencia , debe 
actualizarse en el sistema con el nuevo precinto que se cierra el bolsín. 
Al final de la jornada laboral el Encargado de Bolsines responsable debe separar los 
bolsines cerrados, debido a que a primera hora del día siguiente pasa el correo a 
retirarlos. 
Mientras un bolsín se encuentre en estado creado o cerrado puede eliminarse, 
actualizando su estado a De baja. 
Contenido de un Bolsín Un bolsín contiene documentación para una única CM destino. Se puede agregar al 
bolsín uno o más remitos que agrupan documentación. 
Un bolsín puede modificarse quitando remitos con toda la documentación asociada 
a dicho remito, es decir, se quita el remito completo. 
Mientras el bolsín está en la CM de origen , podrá eliminarse o modificarse , ya sea 
que esté cerrado o no. En este caso, el remito que se quita del bolsín vuelve al estado 
creado y la documentación asociada vuelve al estado en remito. 
Remito por CM Si se desea enviar documentación en distintos bolsines a distintas CM destino, se 
debe generar un remito para cada CM destino que describe la documentación 
dirigida.  
Los distintos remitos que componen un bolsín pueden generarse en distintos 
momentos, lo cual puede ocasionar que en un bolsín haya uno o más remitos.  
Un remito puede cancelarse mientras este en estado creado, en este caso la 
documentación asociada vuelve al estado Registrada. 
Movimiento de la 
Documentación 
Al registrar la documentación en el sistema, esta queda en estado registrada y luego 
cuando se la incluye en un remito, pasa al estado En remito.  
Al cancelar un remito, la documentación vuelve al estado registrada, hasta que vuelva 
a incorporarse a un nuevo remito. 
Al modificar un bolsín, la documentación asociada a los remitos que se quitan del 
bolsín pasa a estado en remito. Si los remitos se agregan al bolsín, la documentación 
pasa al estado En bolsín saliente. 
Al eliminar un bolsín, la documentación asociada a los remitos que contiene pasa al 
estado en remito. 
Agregar documentación a 
un Bolsín 
Cuando la documentación incluida en un remito se agrega a un bolsín se actualiza su 
estado a en bolsín saliente. 
Retiro de un Bolsín Cuando el correo retira el bolsín de la CM se actualizará: 
• El estado del bolsín de cerrado a enviado

## Página 6

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 6 de 16 
 
Regla de Negocio Descripción 
• El estado de los remitos de en bolsín saliente a en bolsín enviado 
• El estado de la documentación incluida en cada remito de en bolsín saliente 
a en bolsín enviado. 
Recepción de un Bolsín en 
una CM Destino 
Al momento de la recepción el bolsín se registra como recibido en CM destino. 
Pueden presentarse las siguientes situaciones: 
• El contenido del bolsín es igual al registrado:  
o Los remitos y la documentación asociada pasan al estado recibida y 
aceptada. 
• No se recibe toda la documentación asociada a los remitos que contiene el 
bolsín: 
o En este caso, la documentación que no llegó queda como no recibida.  
o Se notifica a la CM origen para que la documentación vuelva al estado 
registrada, y pueda vincularse nuevamente a un remito. También 
puede darse de baja porque se considera que ya no es relevante su 
envío.  
o En ambos casos (que la documentación vuelva al estado registrada o de 
baja), el remito queda en como recibido y aceptado parcial. 
• Documentación que no corresponde a la CM destino:  
o En este caso, la documentación s e marca como recibida y rechazada. 
Esta documentación debe ser enviada de vuelta al origen , para poder 
asociarse a un nuevo remito para enviarse a la CM correcta. 
• Documentación para redirigir a otra área:  
o Ocurre cuando la CM destino es la CMC que recibe documentación que 
debe ser enviada a un área dentro de la sede central . En este caso la 
documentación se actualiza al estado Para redirigir. 
Documentación para 
redirigir 
Cuando la CM destino es la CMC que recibe documentación que debe ser enviada a 
un área dentro de la sede central, el envío a las áreas correspondientes no se realiza 
a través de un Bolsín , sino que se realiza de manera interna.  Cuando el área dentro 
de la CMC  recibe la documentación verifica si es correcta . Si es así, la marca como 
recibida y aceptada . D e lo contrario, si  no corresponde al  área, se marca como 
recibida y rechazada. 
Trazabilidad de la 
documentación y del 
Bolsín 
Dada la importancia de la documentación que se manipula se debe poder informar 
en cada momento su situación y, por consiguiente, como se transporta en bolsines, 
se debe saber en qué estado está cada bolsín en todo momento y qué empleado es 
el responsable de efectuar cada actualización tanto del bolsín como de la 
documentación. 
 
2.3 Restricciones y supuestos 
No aplica.

## Página 7

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 7 de 16 
 
3. Requerimientos Funcionales 
3.1 Actores 
Nombre del 
Actor 
Descripción Categoría Tipo 
Usuario 
Persona que puede ingresar a la aplicación con un perfil y 
permisos asociados que le permitirán realizar acciones en el 
sistema. Las demás personas del sistema heredan de este rol 
las responsabilidades definidas para este. 
Persona Abstracto 
Parametrizador 
del sistema 
Persona responsable de la parametrización de usuarios, 
tipos de documento y comisiones médicas, y demás 
información de soporte de la aplicación. 
Persona Concreto 
Encargado de 
Documentación 
Persona responsable de realizar todas las acciones 
relacionadas con la gestión de la documentación y los 
remitos asociados al servicio de bolsines. 
Persona Concreto 
Encargado de 
Bolsines 
Persona responsable de realizar todas las acciones 
relacionadas con la gestión de bolsines, su estado, retiro, 
recepción, cierre y re-apertura, y su seguimiento.  
Persona Concreto 
Gerente de 
Comisión 
Médica 
Persona que puede generar reportes y estadísticas acerca 
del movimiento de bolsines entre comisiones médicas en un 
período de tiempo. 
Persona Concreto 
Servidor de 
Correo 
Software que representa el servidor de correo electrónico 
con el cual la aplicación debe establecer una interfaz para 
enviar e-mails de notificación. 
Software Concreto 
Servidor 
Google Maps 
Software que representa el servicio de Google Maps  con el 
cual la aplicación debe establecer una interfaz para visualizar 
en un mapa la ubicación de bolsines en tránsito. 
Software Concreto 
GPS Tracker 
Software que representa el dispositivo o servicio de 
geolocalización con el cual la aplicación debe establecer una 
interfaz para obtener la ubicación de bolsines en 
movimiento. 
Software Concreto 
Power BI 
Software que representa la herramienta Power BI con la cual 
la aplicación debe establecer una interfaz para la generación 
de reportes y estadísticas sobre la información gestionada 
por el sistema. 
Software Concreto

## Página 8

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 8 de 16 
 
3.2 Vista de Casos de Uso Esencial

## Página 9

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 9 de 16 
 
3.3 Listado de la Funcionalidad del Sistema 
 
Nro. Nombre Objetivo Actores 
1. Registrar usuario Registrar los datos de una persona para que pueda acceder al sistema . AP: Parametrizador 
del sistema 
2. Modificar usuario Modificar los datos permitidos de un usuario. AP: Usuario 
3. Eliminar usuario Dar de baja un usuario. AP: Parametrizador 
del sistema 
4. Consultar usuario Visualizar los datos de un usuario. AP: Usuario 
5. Iniciar sesión Registrar el inicio de una sesión por parte de un usuario registrado en el 
sistema, validando su password y permisos. 
AP: Usuario 
6. Cerrar sesión Cerrar la sesión actual del usuario en el sistema. AP: Usuario 
7. Registrar 
Documentación 
Registrar los datos asociados a la documentación que desea enviar una 
CM a través del servicio de bolsines. 
AP: Encargado de 
Documentación 
8. Modificar 
Documentación 
Modificar los datos permitidos de una documentación registrada . AP: Encargado de 
Documentación 
9. Eliminar 
Documentación 
Dar de baja una documentación validando que no se encuentre en un 
remito ni incluida en un bolsín. 
AP: Encargado de 
Documentación 
10. Consultar 
Documentación 
Visualizar los datos registrados respecto de una documentación. AP: Encargado de 
Documentación 
11. Registrar un Tipo 
de Documento 
Registrar un tipo de documento para que pueda asociarse a una 
documentación. 
AP: Parametrizador 
del sistema 
12. Modificar un Tipo 
de Documento 
Modificar los datos permitidos de un tipo de documento. AP: Parametrizador 
del sistema 
13. Eliminar un Tipo de 
Documento 
Dar de baja un tipo de documento validando que no tenga un 
documento asociado. 
AP: Parametrizador 
del sistema 
14. Consultar Tipo de 
Documento 
Visualizar los datos de uno o más tipos de documentos. AP: Parametrizador 
del sistema 
15. Generar Remito Generar un remito asignando la documentación que desea enviarse a 
una Comisión Médica, actualizando el estado de la documentación 
incluida. 
AP: Encargado de 
Documentación 
16. Modificar Remito Actualizar los datos de un remito, mientras no se encuentre asociado a 
un bolsín, quitando o agregando documentación. 
AP: Encargado de 
Documentación 
17. Cancelar Remito Anular un Remito, que no se encuentre asociado a un bolsín, 
actualizando el estado de la documentación para que pueda asociarse a 
otro remito. 
AP: Encargado de 
Bolsines 
18. Consultar Remito Visualizar los datos de uno o más remitos con los detalles de 
documentación que contienen. 
AP: Encargado de 
Documentación 
19. Generar Bolsín Generar un bolsín asignando los remitos que se incluirán para una 
Comisión Médica destino, actualizando el estado de los remitos y de la 
documentación asociada. 
AP: Encargado de 
Bolsines

## Página 10

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 10 de 16 
 
Nro. Nombre Objetivo Actores 
20. Modificar Bolsín Actualizar los datos de un bolsín, mientras no esté cerrado, quitando o 
agregando remitos y actualizando los estados de los remitos y la 
documentación según corresponda. 
AP: Encargado de 
Bolsines 
21. Eliminar Bolsín Dar de baja un Bolsín, mientras no se encuentre en estado enviado, 
actualizando los estados de los remitos y la documentación según 
corresponda. 
AP: Encargado de 
Bolsines 
22. Consultar Bolsín Visualizar los datos registrados de un bolsín AP: Encargado de 
Bolsines 
23. Registrar Comisión 
Médica 
Registrar los datos asociados a una comisión médica que permitan 
gestionar el intercambio de documentación. 
AP: Parametrizador 
del sistema 
24. Modificar Comisión 
Médica 
Actualizar los datos permitidos de una comisión médica. AP: Parametrizador 
del sistema 
25. Eliminar Comisión 
Médica 
Dar de baja una comisión médica validando que no se encuentre 
asociada a una transacción. 
AP: Parametrizador 
del sistema 
26. Consultar Comisión 
Médica 
Visualizar los datos de una comisión médica. AP: Parametrizador 
del sistema 
27. Registrar el retiro 
de bolsines 
Actualizar el estado de los bolsines que el correo retira, actualizando 
también el estado de los remitos y de la documentación que contienen.  
AP: Encargado de 
Bolsines 
28. Registrar recepción 
de bolsín 
Registrar la recepción de un bolsín actualizando el estado de los remitos 
y la documentación que contiene según la situación que corresponda  
AP: Encargado de 
Bolsines 
29. Notificar recepción 
de bolsín 
Notificar por email a la comisión médica origen la recepción del bolsín y 
la situación de la documentación correspondiente a la misma 
AS: Servidor de 
Correo 
30. Notificar ubicación 
de bolsín 
Notificar por email a la comisión médica destino la ubicación de un 
bolsín en particular. 
AS: Servidor de 
Correo 
31. Registrar Revisión 
de Documentación 
Registrar situación de documentación que ha sido rechazada o no 
recibida por una CM, para permitir su reenvío a otra CM o su baja 
AP: Encargado de 
Documentación 
36. Consultar 
seguimiento de 
bolsines 
Consultar en un mapa la ubicación de los bolsines que están en 
movimiento entre comisiones médicas. 
AP: Encargado de 
Bolsines 
AS: Servidor Google 
Maps 
AS: GPS Tracker 
37. Generar reporte de 
bolsines en tránsito 
Generar y visualizar un reporte que muestre los bolsines que están en 
tránsito entre una comisión médica de origen y una comisión médica de 
destino para un periodo de tiempo. 
AP: Gerente de 
Comisión Médica 
AS: PowerBI 
38. Generar estadística 
de movimiento de 
bolsines 
Generar y visualizar una estadística de cantidad de bolsines 
intercambiados entre comisiones médicas en un periodo de tiempo.  
AP: Gerente de 
Comisión Médica 
AS: PowerBI 
39. Cerrar Bolsín Registrar el número de precinto con el que se cierra el bolsín y 
actualizar el estado del bolsín a cerrado. 
AP: Encargado de 
Bolsines 
40. Reabrir Bolsín Borrar el número de precinto con el que se cerró el bolsín y actualizar el 
estado del bolsín a creado. 
AP: Encargado de 
Bolsines

## Página 11

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 11 de 16 
 
4. Descripción Detallada de Requerimientos 
4.1 Requerimientos Funcionales 
Nombre del Caso de uso: Registrar recepción de bolsín Nro. de orden: 28 
Prioridad:                   Alta                                 Media                                    Baja            
Complejidad:    Simple     Mediano      Complejo    Muy Complejo     Extremadamente Complejo   
Actor Principal: Encargado de Bolsines (EB) Actor Secundario: no aplica 
Tipo de Caso de uso:                    Concreto                                          Abstracto 
Objetivo: Registrar la recepción de un bolsín actualizando el estado de los remitos y la documentación que 
contiene según la situación que corresponda. 
Flujo Descripto:  
1. EB: selecciona la opción para registrar la recepción de un bolsín. 
2. Sistema: busca y muestra la CM del usuario logueado. 
3. Sistema: busca los bolsines en estado enviado para la CM del usuario logueado, y encuentra al menos uno.  
4. Sistema: muestra de cada bolsín su CM origen y número de precinto, habilitando la selección de uno por 
listado o filtrando por alguno de estos datos. 
5. EB: selecciona un bolsín del listado. 
6. Sistema: para cada remito asociado al bolsín, muestra el número de remito y para cada documentación 
contenida en el remito muestra el asunto y el tipo de documentación. 
7. Sistema: muestra las opciones de recepción del bolsín, y solicita que se seleccione la opción correspondiente:  
1. El contenido del bolsín es igual al registrado 
2. No se recibe toda la documentación asociada a los remitos que contiene el bolsín 
3. Existe documentación que no corresponde al destino (CM del usuario logueado) 
4. La documentación se debe redirigir a otra área. 
8. EB: selecciona la primera opción: El contenido del bolsín es igual al registrado. 
9. Sistema: pide confirmación de la selección para el registro correspondiente. 
10. EB: confirma la selección. 
11. Sistema: actualiza: 
• el bolsín al estado Recibido en CM destino, registrando el empleado responsable,  
• los remitos al estado Recibido y Aceptado 
• la documentación asociada al estado Recibida y Aceptada, registrando el empleado responsable. 
12. Sistema: para enviar notificación a cada CM de origen que envió documentación, sobre la recepción del bolsín 
y la situación de la documentación recibida (leer Obs. 2), se incluye al caso de uso 29. Notificar recepción de 
bolsín. Informa de la ejecución exitosa del caso de uso. Fin del caso de uso. 
Flujos Alternativos 
A1: No se encuentra bolsín con el número de precinto ingresado. 
A2: No se encuentra bolsín con la CM de origen ingresada. 
A3: El EB selecciona la opción No se recibe toda la documentación asociada a los remitos que contiene el bolsín. 
A4: El EB selecciona la opción Existe documentación que no corresponde al destino 
A5: El EB selecciona la opción La documentación se debe redirigir a otra área. 
A6: El EB no confirma la selección de la opción de recepción a registrar.

## Página 12

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 12 de 16 
 
Observaciones: 
Observación 1: El EB puede cancelar el caso de uso cuando lo decida, seleccionando la opción para tal fin. 
Observación 2: La situación de la documentación recibida se explica con detalle en la regla de negocio Recepción 
de un Bolsín en una CM Destino. 
 
Nombre del Caso de uso: Consultar seguimiento de bolsines Nro. de orden: 36 
Prioridad:                   Alta                                 Media                                    Baja            
Complejidad:    Simple     Mediano      Complejo    Muy Complejo     Extremadamente Complejo   
Actor Principal: Encargado de Bolsines (EB) Actor Secundario: GPS Tracker, Servidor Google 
Maps 
Tipo de Caso de uso:                    Concreto                                          Abstracto 
Objetivo: Consultar en un mapa la ubicación de los bolsines que están en movimiento entre comisiones médicas. 
Flujo Descripto: Búsqueda de bolsines y visualización en el mapa con GPS Tracker modelo XTR-4500L 
1. EB: selecciona la opción para consultar la ubicación de uno o varios bolsines. 
2. Sistema: busca y muestra la CM del usuario logueado. 
3. Sistema: busca los bolsines en estado Enviado cuya CM origen es igual a la CM del usuario logueado. 
4. Sistema: solicita al dispositivo GPS Tracker los datos de localización de los bolsines. 
5. Sistema: recibe del dispositivo GPS Tracker los datos de localización de cada uno de esos bolsines (ver 
observación 1). 
6. Sistema: muestra sobre un mapa la posición de los bolsines, habilitando la opción de seleccionar un bolsín del 
mapa o filtrar por número de precinto o CM destino. 
7. EB: selecciona un bolsín del mapa. 
8. Sistema: consulta si se desea enviar un correo electrónico al Gerente de Comisión Médica destino para informar 
la ubicación del Bolsín. 
9. EB: confirma el envío del correo electrónico. 
10. Sistema: busca la dirección de correo electrónico del GCM destino. 
11. Sistema: para informar número de bolsín, fecha y hora de última actualización, y las coordenadas del bolsín, se 
incluye al Caso de Uso 31 Notificar ubicación de bolsín. Informa la ejecución exitosa del caso de uso 31. Fin del 
caso de uso. 
Flujos Alternativos 
A1: No se encuentran bolsines en estado enviado. 
A2: No se encuentra bolsín con el número de precinto ingresado. 
A3: El GPS Tracker no pudo informar ubicación del bolsín. 
A4: El EB cancela la ejecución del caso de uso. 
A5: El EB no selecciona la opción para enviar un correo electrónico. 
Observaciones: 
Observación 1: Los modelos disponibles de GPS Tracker son XTR-4500L, NavTrack QX-7A y GeoPulse MTR-900: 
1) El modelo XTR-4500L tiene un endpoint llamado getBolsinLocation() que recibe una API Key identificatoria, un 
número de bolsín en formato entero y un código de comisión médica origen en formato String. Devuelve un JSON

## Página 13

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 13 de 16 
 
en formato cadena de caracteres que contiene para cada ítem el número de bolsín, la latitud, la longitud y la fecha 
y hora de la última actualización de ubicación. 
2) El modelo NavTrack QX -7A tiene un endpoint llamado retrieveTrackingData() que recibe una API Key 
identificatoria, un número de bolsín en formato entero y un código de comisión médica destino en formato String. 
Devuelve un único String con sus ítems separados por comas con el número de bolsín, la latitud, la longitud y la 
fecha y hora del último reporte. 
3) El modelo GeoPulse MTR -900 tiene un endpoint llamado fetchCargoPositions() que recibe una API Key 
identificatoria y un número de bolsín formato entero. Devuelve una matriz con el número de bolsín, la latitud, la 
longitud y la fecha y hora de la última actualización de posición. 
En todos los casos se debe procesar la información y recuperar el listado de bolsines con su número, su ubicación 
actual (latitud y longitud) y la fecha y hora de la última actualización de posición. 
 
Nombre del Caso de uso: Generar bolsín Nro. de orden: 19 
Prioridad:                   Alta                                 Media                                    Baja            
Complejidad:    Simple     Mediano      Complejo    Muy Complejo     Extremadamente Complejo   
Actor Principal: Encargado de Bolsines (EB) Actor Secundario: No aplica 
Tipo de Caso de uso:                    Concreto                                          Abstracto 
Objetivo: Dar de alta un bolsín asociando los remitos y la documentación correspondiente a enviar. 
Flujo Descripto:  
1. EB: selecciona la opción para registrar un bolsín a enviar. 
2. Sistema: busca y muestra la CM del usuario logueado. 
3. Sistema: busca las comisiones existentes y solicita que se seleccione la comisión médica destino. 
4. EB: selecciona una comisión médica destino. 
5. Sistema: busca y muestra todos los remitos con su documentación, que estén en estado creado, de la comisión 
médica seleccionada y por lo menos existe uno. Solicita se seleccione aquellos remitos que desea incluir en el 
bolsín. 
6. EB: selecciona los remitos que desea incluir en el bolsín. 
7. Sistema: solicita que se ingrese el peso expresado en gramos del bolsín. 
8. EB: ingresa el peso. 
9. Sistema: muestra los datos del bolsín: cantidad y números de los remitos a incluir, y tipo de la documentación 
asociada, fecha y usuario logueado. Pide confirmación para registrar el bolsín. 
10. EB: confirma la registración. 
11. Sistema: genera un número único secuencial correlativo para el bolsín y lo registra con el estado creado y  el 
empleado responsable, actualiza el estado de los remitos a en bolsín saliente y la documentación asociada con 
el estado en bolsín saliente y el empleado responsable.  
Fin del caso de uso. 
Flujos Alternativos 
A1: No existen remitos en estado generado para la comisión médica seleccionada. 
A2: El EB no confirma la registración. 
A3. El EB cancela la ejecución del CU.

## Página 14

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 14 de 16 
 
Observaciones: 
Observación 1: El EB puede cancelar el caso de uso cuando lo decida, seleccionando la opción para tal fin. 
 
4.2 Requerimientos No Funcionales 
Nro. Nombre Descripción Justificación 
1 Tecnología web El sistema será desarrollado 
completamente con tecnología Web. 
El lenguaje de programación a utilizar deberá 
soportar desarrollo web. 
2 Alta 
Disponibilidad 
A los fines de asegurar alta 
disponibilidad (7x24x365) solicitada 
para el sistema se requiere la 
utilización de bases de datos 
espejadas (Database Mirroring). 
Deben utilizarse 2 servidores diferentes para 
alojar cada una de las bases de datos para 
asegurar que, ante la caída eventual de uno de 
ellos, el otro pueda brindar el servicio. 
3 Despliegue 
espejado de la 
base de datos en 
la nube 
La base de datos debe alojarse en 
servidores Amazon en la nube 
Restricción técnica de implementación ya que se 
debe asegurar que las comunicaciones entre el 
servidor de aplicaciones y la base de datos sea 
performante y segura, siendo transparente para 
el usuario que se está utilizando una base de 
datos en la nube. 
4 Seguridad de 
usuarios 
El sistema debe preservar la 
seguridad de los datos de los usuarios 
y sus transacciones, permitiendo la 
administración de usuarios y 
permisos  
Requerimiento de seguridad lógica, significativo 
para la arquitectura, implica desarrollar un 
módulo que permita autenticar usuarios y 
controlar las sesiones para los módulos de 
administración y turnos. 
5 Envío de 
notificaciones 
por mail. 
Se debe notificar vía email al 
momento de recibir un bolsín a la 
CM destino, y al momento de 
consultar la ubicación de bolsines, 
detallando toda la documentación 
enviada en cada Bolsín. 
Debe existir un componente que permita la 
generación y comunicación con la solución de 
envío de mails a través de la API expuesta de 
Outlook de Microsoft Graph. 
6 Dispositivo GPS 
Tracker 
Cada bolsín debe contar  con un 
dispositivo GPS Tracker que le 
permite al Encargado de bolsines de 
cada CM poder realizar el 
seguimiento de los bolsines. 
Se debe desarrollar una interface que resuelva la 
comunicación e interprete las coordenadas del 
dispositivo ubicado en cada bolsín. 
7 Visualización de 
bolsines en el 
mapa 
El sistema permite al Encargado de 
bolsines visualizar en un mapa la 
ubicación de los bolsines que envía. 
Se utilizará una librería que provee Google Maps, 
que es la que se comunica con el servidor de 
Google Maps, a través de la API que provee el 
proveedor. 
Esta librería provee el servicio de visualización, 
tomando las coordenadas de GPS para armar el 
mapa que se necesita visualizar. 
8 Generación de 
reportes y 
estadísticas 
Para la generación de reportes y 
estadísticas el sistema utilizara la 
herramienta Power BI 
Se debe desarrollar una interface que resuelva la 
comunicación con la herramienta para generar 
los reportes y estadísticas

## Página 15

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de Aplicación Integrador 
 
 
2026 DSI Bolsines ERS.docx – Versión 1.2  Hoja: 15 de 16 
 
 
5. Requerimientos de Licencia 
No aplica. 
6. Perspectiva del Producto 
No aplica. 
7. Componentes Comprados 
No aplica. 
8. Observaciones 
No aplica.
