# 2026 DSI Bolsines Descripción del Caso V1.1.pdf

- **Ruta OneDrive:** `ppai\2026 DSI Bolsines Descripción del Caso V1.1.pdf`
- **Páginas totales:** 4 (extraídas: 4)

---

## Página 1

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de  
Aplicación Integrador  
 
 
Ciclo lectivo 2026  Hoja: 1 de 5 
 
 
 
 
 
 
Descripción del Dominio 
Bolsines

## Página 2

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de  
Aplicación Integrador  
 
 
Ciclo lectivo 2026  Hoja: 2 de 5 
 
Glosario: 
• EB: Encargado de Bolsines 
• CM: Comisión médica. 
• CMJ: Comisión médica jurisdiccional. 
• CMC: Comisión médica central. 
• C.A.B.A.: Ciudad autónoma de Buenos Aires 
• Bolsín: bolsa o saco de tela utilizado para transportar documentos de un organismo a otro. Estas bolsas suelen ser 
resistentes y duraderas, diseñadas específicamente para proteger los documentos que contiene durante el 
transporte. 
• Precinto: dispositivo físico numerado  que se coloca sobre mecanismos  de cierre para asegurar que éstos no se 
abran sin autorización. 
 
 
Descripción del Dominio 
Un organismo controlador que depende del Estado Nacional, cuya sede central se encuentra en la Ciudad Autónoma 
de Buenos Aires (C.A.B.A.), necesita enviar, a través del servicio de correo y en bolsines, documentación entre las 
diferentes comisiones médicas ubicadas en distintos puntos del país. Se ha solicitado el desarrollo de un producto de 
software que gestione el registro, envío y seguimiento de dicha documentación en bolsines. 
Estructura del Organismo Controlador 
El Organismo Contralor tiene la sede central en C.A.B.A. y tiene más de 80 comisiones médicas jurisdiccionales (CMJ) 
distribuidas por todo el país, y una comisión médica central (CMC) que funciona en C.A.B.A. 
Las CMJ llevan el nombre de la localidad en la que se encuentra, por ejemplo, Comisión Médica Mendoza, Comisión 
Médica Paraná, Comisión Médica Córdoba, Comisión Médica Villa María, Comisión Médica Rosario. 
Documentación 
La documentación se envía en bolsines, entre las distintas comisiones médicas ( CM’s). Para poder enviar la 
documentación física desde una CM a otra, primero debe poder registrarse en el sistema los siguientes datos referidos 
a la documentación, además de un número secuencial y único que debe generar el sistema: 
Tipo Documento Es el tipo de documento que se envía, como, por ejemplo: expediente, dictamen, estudio 
médico, carta documento, etc. 
Fecha de Pase Es la fecha a partir de la cual la documentación deberá ser enviada. 
Comisión Médica Origen CM que registra la documentación. 
Asunto Descripción relevante de la documentación que se envía 
Archivo Se puede asociar más de un archivo a la documentación admitiendo diferentes formatos 
como PDF o imágenes en formato BMP, TIFF, JPEG, PNG, GIF, entre otros. 
 
Remitos  
En el bolsín junto con la documentación se debe enviar un remito que describe 
la documentación que se enviará. Cuando desde una comisión médica se desea 
enviar documentación  a otra comisión médica , el trabajador de la CM debe 
generar un remito que contenga el detalle de la documentación que se envía, la 
que debe estar previamente registrada en el sistema para que sea incluida en el

## Página 3

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de  
Aplicación Integrador  
 
 
Ciclo lectivo 2026  Hoja: 3 de 5 
 
remito. Se debe generar un remito por cada comisión médica destino. Si se desea enviar documentación a tres 
comisiones médicas diferentes (por ejemplo, CM Tucumán, CM Rosario, y CM La Plata), el sistema deberá generar 3 
(tres) remitos distintos con la documentación correspondiente según el destino , siempre teniendo presente que 
deberán enviarse en bolsines diferentes. 
Bolsines 
La documentación junto al remito generado se envía en bolsines los cuales deben registrarse en el sistema, tanto al 
enviar el bolsín como al recibirlo. Esto es, el sistema debe permitir registrar envío y recepción de bolsines en cada CMJ 
y en la CMC.  
Registro de bolsines salientes 
El Encargado de Bolsines de cada CM debe armar el bolsín con la documentación que desea enviar y el o los remitos 
correspondientes. Si decide modificar el contenido de un bolsín , debe quitar 
documentación por remitos completos, esto es, se quita del bolsín un remito y 
toda su documentación asociada. Si el remito es uno solo, puede optar por 
cancelar dicho remito y generar uno nuevo con solo la documentación que 
decide enviar.  
El bolsín saliente se registra en el sistema con los datos  que se muestran en la 
siguiente tabla, además de un número secuencial y único  que debe generar el 
sistema. El bolsín se cierra con un precinto . Si por algún motivo se desea 
modificar el contenido del bolsín luego de haberse cerrado con un precinto, se 
rompe el precinto y luego de realizada la modificación se debe cerrar con un nuevo precinto y actualizar el nro. de 
precinto con el que se cerró el bolsín en el sistema. 
 Fecha Fecha de generación de Bolsín. 
Comisión Médica Origen CM que genera el bolsín a enviar. 
Comisión Médica Destino CM que recibirá el bolsín. 
Peso Peso expresado en gramos. 
Nro. precinto Número del precinto con el que se cierra el bolsín. 
Remitos que contiene Nro. de los Remitos que contiene el bolsín. 
 
Al final de la jornada laboral el Encargado de Bolsines es el responsable de separar los bolsines cerrados, debido a que 
a primera hora del día siguiente pasa el correo a retirarlos.

## Página 4

Universidad Tecnológica Nacional 
Facultad Regional Córdoba 
Ing. en Sistemas de Información 
Diseño de Sistemas de Información 
Proyecto Práctico de  
Aplicación Integrador  
 
 
Ciclo lectivo 2026  Hoja: 4 de 5 
 
Recepción de bolsines 
Cuando el Encargado de Bolsines (EB) de una CM recibe del correo los bolsines, debe registrar dicha recepción. Para 
ello, buscará cada bolsín por el número de precinto y/o comisión médica de origen/destino. El EB debe corroborar que 
el contenido físico del bolsín recibido sea igual al registrado en el sistema. Cuando el EB realiza el control, p ueden 
presentarse las siguientes situaciones: 
▪ El contenido coincide con lo registrado en el sistema.  
▪ El contenido no coincide con lo registrado en el sistema.  
▪ Se recibe documentación que no corresponde al destino. 
▪ Se recibe documentación para redirigir a otra área: ocurre cuando la CM destino es la CMC que recibe 
documentación que debe ser enviada a un área dentro de la sede central.
