# 2026 Guía de Ejercicios sobre Máquina de Estados.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta una 
guía de ejercicios académicos
 centrada en el 
modelado con diagramas de máquina de estados
 para el diseño de sistemas de información. A lo largo de sus páginas, se detallan 
diversos casos prácticos del mundo real
 —como la gestión de puntos fijos de agua, la auditoría de órdenes médicas, congresos de tecnología, cadenas de pastelería, compras y cupones de descuentos— donde cada escenario describe detalladamente los 
requisitos funcionales y los listados de casos de uso
. Finalmente, se exponen las 
soluciones propuestas
 que incluyen tanto las 
máquinas de estados detalladas con sus transiciones y condiciones
 como las 
estructuras de clases de soporte
 necesarias para la implementación técnica de los modelos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nSCUF9tLfp159am5xsyvrXgci7vFpzzU_KoZgY_TCOep2kkGAYwE3zN2KdYCKVeADUmVn6RLSSQKZDVsvCZP-C2ADS2H6ygYo2AjFA_-lvSNP09-89a7DWx0gzxnkMJd4Y1y4Hg=w591-h300-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Cátedra de Diseño de Sistemas de Información

## Guía de Casos Prácticos sobre Modelado con Diagrama de Máquina de Estados

Edición y compilación: Judith Meles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3r8-42sgihzHzfvAXdQmXxvhHAqN6Pfhb1N38138ZI9yjl8pWxnUDuZ0VjEz4z0mR6qHbZDsG2rQ1L3ejUzf7jTvNv3VYPFZxPsL8y7BxSrXt-6eb7wUjdwzu6kj755b3iATKRVw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 2
Contenido
Agua Puntos Fijos ........................................................................................................................................ 3
Consigna: ................................................................................................................................................... 3
Presentación del caso: ............................................................................................................................ 3
Solución propuesta .............................................................................................................................. 8
Auditoría Médica de Órdenes ................................................................................................................... 10
Consigna: ................................................................................................................................................. 10
Presentación del caso: .......................................................................................................................... 10
Congreso de Informática y Tecnología ................................................................................................... 14
Consigna: ................................................................................................................................................. 14
Presentación del caso: .......................................................................................................................... 14
Cadena de Pastelería ................................................................................................................................ 19
Consigna: ................................................................................................................................................. 19
Presentación del caso: .......................................................................................................................... 19
Sistema de Compras y Proveedores ...................................................................................................... 24
Consigna: ................................................................................................................................................. 24
Presentación del caso: .......................................................................................................................... 24
Cupones de Descuentos ........................................................................................................................... 29
Consigna: ................................................................................................................................................. 29
Presentación del caso: .......................................................................................................................... 29
-
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VrBExff4E4R-hjYgPhn1L6TtBxx9w2pNFHw6VxvQsu6P5Oz7YmvMsk5iLsimmmja3m3v2P2o93lxJIFFaMnhQ7Gqq-fFSNQrQuqHLuHmT7m0E4vwTpuomCChuYcJNxNHglZyF8A=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 3
Agua Puntos Fijos Autor: Laura Covaro
Consigna:
1. Modele los estados de la clase “Medición”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados definida en el punto anterior.
Presentación del caso: Una empresa privada se dedica a prestar el servicio de agua potable a una ciudad del interior de la provincia de Córdoba. Una de sus obligaciones como prestador de servicio es asegurar que la provisión del servicio se realice bajo los parámetros de presión y caudal establecidos contractualmente y regulados por el Organismo de Control. Para determinar las condiciones de presión y caudal con las que se está suministrando el servicio, el Organismo de Control ha definido un conjunto de puntos dentro del radio servido por la Concesionaria, denominados Puntos Fijos. Un Punto Fijo es un punto de la red de agua potable que se toma como referencia para medir la presión y el caudal del suministro. Tiene una dirección (calle, altura, barrio) asociada. En cada Punto Fijo se toman permanentemente mediciones de presión y caudal, las cuales deben encontrarse dentro de un rango de valores válidos, de acuerdo a lo que establece el contrato de concesión. A su vez, la empresa tiene sus propios Puntos Fijos definidos, a fin de realizar un control más minucioso sobre la provisión del servicio, siendo importante discriminar cuáles son los definidos por el Organismo de Control y cuáles no. Las mediciones de presión y caudal son monitoreadas permanentemente por el Área de Gestión Hidráulica de la empresa para asegurar que los valores se mantienen dentro de los rangos definidos como válidos. Además, las mediciones realizadas deben ser informadas mensualmente al Organismo de Control. Para medir la presión de los distintos Puntos Fijos distribuidos en la ciudad, existen componentes electrónicos, llamados data logers, instalados de manera permanente en los Puntos Fijos, los cuales capturan los datos de las mediciones (presión y caudal) y los convierten a datos digitales en formatos de texto plano. Dependiendo la marca del data loger variará el formato del archivo generado. Actualmente las mediciones son realizadas cada 5 minutos, pero esa periodicidad puede variarse. La empresa necesita un sistema que permita gestionar las mediciones de cada Punto Fijo, debiendo poder importarse las mismas tal como son informadas por los distintos data loger, sin aplicar ningún tipo de operación de sumarización o promedio al momento de almacenar la información y sin importar la marca del data loger ni el formato del archivo plano que dicho data loger genera. Para esto es necesario que el sistema se conecte a los data loger instalados en cada Punto Fijo y capture las mediciones registradas en los archivos que los mismos generan. Los datos de las mediciones se enviarán al software a través de un módem GSM. Está previsto que cada 1 hora se realice la importación de los datos de los distintos archivos planos generados por los data loger (en el cual se van adicionando las nuevas mediciones) pero este lapso de tiempo puede ser variable (no pudiendo nunca ser superior a 2 horas). El sistema deberá permitir importar los datos de hasta 50 Puntos Fijos en simultáneo y la importación de cada archivo no debe demorar más de 10 segundos para 12 mediciones (ya que las mediciones se toman cada 5 minutos y la importación de las mismas se hace cada hora)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04kOH6oky8ZjusTqlwt4QEhplgIZRhwH7qmFUP-BPGHViuvILRrQpt-EGxjPIJceyQKVAXN5pW15oh87PXIsf2RkoOjmr_3BpkRji4TamfM4FoRWSRsTLcO9JJae4T7j0lkr6iMw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 4
Al momento de importar cada una de las mediciones de un determinado Punto Fijo, desde el archivo plano, puede ocurrir que la misma se realice en forma exitosa o que por algún inconveniente la importación de una medición no pueda realizarse. Cuando la importación se realiza en forma exitosa el sistema deberá borrar del archivo plano las mediciones importadas. En caso de que la importación de alguna medición sea errónea (por no importarse todos los datos correctamente o porque la medición fue registrada de manera incompleta por el data loger) se vuelve a intentar realizar la misma y luego de 2 intentos fallidos se la identifica como errónea y se continúa con las siguientes mediciones del archivo. El software a construir deberá permitir al Área de Gestión Hidráulica de la empresa la gestión de las mediciones diarias de cada Punto Fijo, pudiendo visualizar las mediciones en forma de distintas vistas, a fin de detectar los valores que queden fuera de los parámetros definidos. Estas vistas deberán mostrar tanto las mediciones diarias para un día de particular como la tendencia de varios días consecutivos. Las vistas posibles para la visualización de los resultados deberán ser las siguientes:
Tabla de resultados: Mostrará cada una de las mediciones realizadas en una grilla, indicando momento
de la medición y presión o caudal (ya que hay Punto Fijos que miden presión y otros que miden caudal). Deberán resaltarse en la tabla los valores que se encuentran fuera de los rangos considerados como aceptables. El resultado de la ejecución del reporte deberá poder imprimirse o exportarse a un archivo Excel.
Gráficos: Mostrarán cada una de las mediciones realizadas en un gráfico de líneas que permita observar tendencias de las mediciones a lo largo del tiempo. Deberán resaltarse los valores que se encuentran fuera de los rangos considerados como aceptables. El resultado de la ejecución del reporte deberá poder imprimirse o exportarse a un archivo Excel. Se necesita que se visualicen en una misma pantalla los gráficos de 2 puntos fijos, para facilitar su seguimiento.
Comparativa: Deberá poder realizarse la comparación de las mediciones diarias de distintos puntos fijos.
Además, deberán existir reportes mensuales en donde se visualicen valores máximos, mínimos y promedios. Deberá contemplarse la posibilidad que la aplicación sea accedida desde una PC que se encuentre fuera de la empresa (ya que el control se realiza las 24 horas todos los días del año) sin que se requiera realizar ninguna instalación especial para acceder al software. Lo mismo vale para cuando el acceso se hace desde dentro de la empresa. Para ello se pensó en utilizar una página Web para visualizar las mediciones, a la que se tendrá acceso utilizando una identificación de usuario y una palabra clave de al menos 8 caracteres. El navegador a utilizar deberá ser Internet Explorer 7 o superior, ya que es el navegador utilizado en la empresa definido por política. Por otra parte se requiere que el sistema emita alertas cuando los valores de las mediciones de los Puntos Fijos estén fuera de los rangos establecidos o cuando se detecten caídas abruptas en la medición de la presión o el caudal, aun cuando los valores se encuentren dentro de los rangos válidos. Las alertas deberán enviarse utilizando diferentes medios: mail y mensajes de texto a celular. Los alertas deberán proveer información del Punto Fijo, la medición que se encuentra fuera de rango y la fecha y hora de dicha medición. Una vez finalizado el análisis de las mediciones, el Operador de Gestión Hidráulica debe registrar el análisis realizado sobre las mismas. Como resultado de ese análisis las mediciones pueden encontrarse dentro del rango definido como aceptable, en los límites (consideradas como Observaciones) o fuera del rango (consideradas como No Conformidades si el Punto Fijo es de los definidos por el Ente de Control y como Observaciones si es un Punto Fijo definido por la empresa). Si la medición se encuentra dentro de los valores aceptables se actualiza el estado de esta a Aceptada. Si en cambio el valor de esta se encuentra en los límites o fuera del rango, la misma deberá ser tratada como Observación o No Conformidad, respectivamente. El Analista de Gestión Hidráulica será el encargado de generar Acciones Preventivas para las mediciones en estado Con Observaciones y Acciones Correctivas para las mediciones en estado No Conforme, actualizando el estado de la medición una vez
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pxKGU-9Wn8cAnQj0L_wtlez4y7HM-iL5sXTWmQw09_W7UQ89kTxLR3fhgJIRIZwICnMB0j9lGX3METWmi_w2LigaNkKUULGuaX_TBVA79S7qP2bIiAkh267PWv4de-oHlmZNaWg=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 5
generada la acción. El Supervisor del Área de Gestión Hidráulica es quien realizará el seguimiento de dichas acciones y el sector de Auditoría y Control el que realiza el cierre de dicha acción una vez que la misma ha sido cumplimentada. En el informe que se envía al Ente de Control se deberá mostrar el historial de estados de las mediciones identificadas como No Conformidades (ya que son incumplimientos a lo establecido en el contrato), desde su registro inicial y hasta el cierre de la Acción Correctiva. El sistema debe mantener la gestión de los usuarios y permisos de estos en la aplicación. Glosario Radio Servido: Es el área geográfica a la cual provee el servicio la empresa concesionaria del servicio de agua potable Data Loger: Dispositivo que se instala en los Puntos Fijos para medir presión y caudal. Organismo de Control: Ente regulador de servicios públicos que controla el cumplimiento del Contrato de Concesión por parte de la empresa concesionaria.
Listado de Casos de Uso
Nº CU Nombre del Caso de Uso Objetivo
1 Registrar Punto Fijo Registrar un Punto Fijo de la red de distribución de agua potable, con su dirección asociada
2 Modificar Punto Fijo Modificar los datos de un Punto Fijo definido en la red de distribución
3 Consultar Punto Fijo Consultar los datos de uno o varios Puntos Fijos definidos en la red de distribución
4 Eliminar Punto Fijo Eliminar los datos de un Punto Fijo definido en la red de distribución
5 Registrar Data Loger Registrar un Data Loger
6 Modificar Data Loger Modificar los datos de un Data Loger
7 Consultar Data Loger Consultar los datos de uno o varios Data Loger
8 Eliminar Data Loger Eliminar los datos de un Data Loger
9 Registrar marca de Data Loger Registrar una nueva marca de Data Loger y sus características asociadas
10 Modificar marca de Data Loger Modificar los datos de una marca de Data Loger
11 Consultar marca de Data Loger Consultar los datos de una o varias marcas de Data Loger
12 Eliminar marca de Data Loger Eliminar los datos de una marca de Data Loger
13 Registrar rangos de mediciones aceptables
Registrar los rangos aceptables de presión y caudal
14 Modificar rangos de mediciones aceptables
Modificar los rangos aceptables de presión y caudal
15 Consultar rangos de mediciones aceptables
Consultar los rangos aceptables de presión y caudal
16 Eliminar rangos de mediciones aceptables
Eliminar los rangos aceptables de presión y caudal
17 Importar datos de mediciones Obtener los datos de las mediciones de un Punto Fijo, registradas por el Data Loger en un archivo plano.
18 Emitir reporte con tabla de resultados para un Punto Fijo
Emitir un reporte de cada una de las mediciones realizadas en una grilla, indicando momento de la medición y presión o caudal
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2e4SIVQO33ngwsO4NouLVF3jER5efC1l-zsPOgnpuKwig-jddQuPOsLezkBD0psXw3Oa6ubj_0SIpibGlLcCrODkLiEDu3Z2OTGZcbBInbK1MfDO58Sp_YTXE6FkH1iFW2NXpOCA=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 6
Nº CU Nombre del Caso de Uso Objetivo
19 Generar reporte de evolución de mediciones para un Punto Fijo
Visualizar las mediciones de un Punto Fijo en un gráfico de líneas que permita observar tendencias a lo largo del tiempo.
20 Mostrar comparativa de las mediciones de un conjunto de Puntos Fijos
Mostrar la comparación de las mediciones diarias de distintos Puntos Fijos seleccionados por el usuario
21 Emitir reporte mensual de mediciones
Generar un reporte en donde visualicen valores máximos, mínimos y promedios para un determinado conjunto de Puntos Fijos en un determinado período de tiempo.
22 Enviar alerta por medición fuera de rango
Emitir alerta para mediciones fuera de los rangos establecidos o cuando se detecten caídas abruptas en la medición.
23 Registrar análisis de medición Registrar el análisis de cada medición de un Punto Fijo en un determinado período de tiempo, actualizando el estado de las mismas.
24 Modificar análisis de medición Modificar el análisis asociado a una medición registrado siempre que aún no se haya generado la acción asociada.
25 Eliminar análisis de medición Eliminar el análisis asociado a una medición siempre que aún no se haya generado la acción asociada.
26 Consultar análisis de medición Consultar los análisis asociados a las mediciones de un Punto Fijo.
27 Generar acción Generar una acción correctiva o preventiva asociada a una medición que se encuentre en los estados “Con Observaciones” o “No Conformidad”
28 Modificar acción Modificar una acción generada siempre y cuando la misma no se encuentre en estado “Cerrada”.
29 Eliminar acción Eliminar una acción generada siempre y cuando la misma no se encuentre en estado “Cerrada” ni tenga seguimientos asociados.
30 Consultar acción Consultar una o más acciones generadas.
31 Registrar seguimiento de acciones
Registrar el seguimiento de las acciones generadas, asociadas a mediciones con valores no aceptables.
32 Modificar seguimiento de acciones
Modificar los seguimientos registrados para una acción generada siempre y cuando la misma no se encuentre en estado “Cerrada”.
33 Modificar seguimiento de acciones
Eliminar los seguimientos registrados para una acción generada siempre y cuando la misma no se encuentre en estado “Cerrada”.
34 Consultar seguimiento de acciones
Consultar los seguimientos registrados para una acción generada.
35 Registrar cierre acción Registrar cierre de acción correctiva o preventiva.
36 Emitir informe de mediciones No Conformes
Generar informe de las mediciones identificadas como No Conformidades, desde su registro inicial y hasta el cierre de la Acción Correctiva
37 Registrar Empleado Registrar un empleado en el sistema
38 Modificar Empleado Actualizar los datos de un empleado
39 Consultar Empleado Visualizar los datos de un empleado
40 Eliminar Empleado Eliminar los datos de un empleado del sistema
41 Registrar asignación de Data Loger en Punto Fijo
Registrar la asignación de un Data Loger disponible a un Punto Fijo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DyLDStGfu1W4mCTJzIdn0q8MaQ85D0YJmFoJifj5vLdbPnziu6UUgUROHeT5y8sCTkh-Q_jhZ8rxr-rtISw3qjpgy1d7ktEPBC15NlTjcgw98K6i6uK-ZypvKN0-d3bvXKDwEQQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 7
Nº CU Nombre del Caso de Uso Objetivo
42 Iniciar Sesión Habilitar el inicio de sesión de un usuario en el sistema
43 Cerrar Sesión Cerrar la sesión de un usuario en el sistema cuando el usuario así lo indique
44 Caducar Sesión Cerrar la sesión de un usuario por el paso del tiempo con el sistema inactivo
45 Registrar Usuario Registrar un usuario del sistema
46 Modificar Usuario Actualizar los datos de un usuario del sistema
47 Consultar Usuario Visualizar los datos de un usuario del sistema
48 Eliminar Usuario Eliminar los datos de un usuario del sistema
49 Actualizar Asignación de Permisos a Usuario
Registrar la actualización de los permisos asignados a cada usuario
50 Registrar Cargo de Empleado Registrar un cargo en el sistema
51 Modificar Cargo de Empleado Actualizar los datos de un cargo
52 Consultar Cargo de Empleado Visualizar los datos de un cargo
53 Eliminar Cargo de Empleado Eliminar los datos de un cargo del sistema
Nota: Tener en cuenta que el listado de casos de uso no está completo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PJPB02vLFQX8vRpcicxqGZYvbCXevwSx8s3kqhkrdwPYBZS7JGopTNAZKAcmCXyMR2A123FD2iWZfBMGDtt6b10Onk2qAIuVUq7qwWFmfrgKxPvoOJZ7SwziujN2PPrWSusqaOw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 8
Solución propuesta Diagrama de Máquina de Estados: Clase Medición
stm DTE Medición
Registrada ImportadaConError
Erronea
Aceptada
ConObservaciones NoConforme
ConAccionCorrectivaGenerada
ConAccionFiinalizada
ConAccionPreventivaGenerada
35. Registrar cierre de acción /cerrarAccion()
27. Generar Acción /crearAccion()
23. Registrar análisis de medición [la medición está fuera de los límites del rango y es un PF definido por la empresa] /registrarAnalisisMedicion()
17. Importar datos de mediciones [y no se pudo importar la medición] /registrarMedicion()
35. Registrar cierre de acción /cerrarAccion()
17. Importar datos de mediciones [no se pudo importar la medición y es el segundo intento fallido] /registrarMedicion()
17. Importar datos de mediciones [no se pudo importar la medición y es el primer intento fallido] /registrarMedicion()
23. Registrar Análisis de Medición [la medición está dentro de los valores aceptables] /registrarAnalisisMedicion()
27. Generar acción /crearAccion()
17. Importar datos de mediciones [y se pudo importar la medición] /registrarMedicion() 17. Importar datos de
mediciones [y se pudo importar la medición] /registrarMedicion()
23. Registrar análisis de medición [la medición está en los límites del rango o está fuera del rango pero es un PF definido por la empresa] /registrarAnalisisMedicion()
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QZIuEcwN9MqmdgS9EX7LDVIRIHjg2IwWEagvk8i0k0G-ub9jMDrDxVoDxY_JOTPSmJQmjIMYyky1KVB1Mu8xc3hrSTL0PUUN0MXo7qV5HLgEusXkU1Xx1gaynSfqA3gv7eNL1EA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sOq0TTcj8nLJwSR1EhzL3aTv3Y0Q2A8grm-8MnJm4EPN4PKJstUBn8ewUUGbsztGy7hNPGI5XeEdd65PnGuwULHWHTAmR90r8-WlEYDIghb0jyfIod4zzzkdc8ZBn-xsSX0ktZg=w988-h769-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 9
Estructura de soporte de la Máquina de Estado para la clase Medición
Se muestra una vista incompleta de las clases, sólo haciendo foco en lo requerido para dar soporte a la máquina de estados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1naD8BubtZZEdGF5Y5vu_x1R2Jsme-Y1EI6rt8Qjge8kNBDJQvn7vO70190kKeEozY7kWiKqVciBdHD8gfnHOBU3UmksKkiPODTOlEXkC_ShvgTcECijz_arrEpopgNW2QR1iarg=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 10
Auditoría Médica de Órdenes Autor: Gerardo Boiero
Consigna:
1. Modele los estados de la clase “OrdenMedica”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados construida.
Presentación del caso: El área de Auditoría Médica de una importante Obra Social tiene por objetivo realizar las autorizaciones de las órdenes médicas y de las prácticas médicas prescriptas en ellas. Las prácticas médicas están definidas en el nomenclador de los planes asistenciales que pueden tener los afiliados. La Obra Social quiere establecer un nuevo proceso de autorizaciones de las órdenes médicas que permita agilizar los trámites al afiliado. De acuerdo a la complejidad de las prácticas médicas solicitadas en la orden, la autorización puede ser efectuada: por Auditoría On-Line (vía Internet), por Auditoría Interna en las instalaciones de la obra social o por un Comité Médico designado para analizar el caso. Según lo definido anteriormente, la relación entre la complejidad de las prácticas médicas y los niveles de autorización son:
Práctica Simple: corresponde a consultas médicas, prácticas odontológicas simples, estudios de
rutinas, etc. La autorización debe ser realizada por Auditoría On Line.
Práctica Semi-compleja: corresponden a estudios o consultas a especialistas, ecografía, etc. La
autorización debe ser realizada por un Auditor Interno, que es una persona designada por la Obra Social para analizar la situación del afiliado.
Práctica Compleja: implican prácticas médicas tales como tratamientos oncológicos, trasplantes, etc. La autorización es efectuada por un Comité Médico que analiza el caso del afiliado.
El proceso a seguir para realizar la autorización de una orden médica se describe a continuación: Antes de atenderse el afiliado, debe presentar su carnet y la orden médica con las prácticas solicitadas por el médico prescriptor. El Responsable del Centro Médico (RMC) solicita la autorización de la orden médica ingresando al Sitio Web de la Obra Social. En dicha solicitud ingresa el número de afiliado, plan asistencial, matrícula del médico, diagnóstico presuntivo o definitivo, las prácticas y/o estudios solicitados, número de orden médica y la fecha de prescripción. Al confirmar la solicitud, se envía la misma para que sea procesada por el módulo de auditoría on line. Como respuesta se obtiene el resultado de la evaluación de la orden médica. Si está autorizada la orden médica se muestra la fecha de validez (30 días corridos) y el código de autorización que asegure la legitimidad de la operación. En cambio, si está rechazada, se notifica el motivo por el cual se rechazó la misma. Por ejemplo, una solicitud puede ser rechazada, cuando se envía a autorizar una práctica que no puede ser realizada porque el paciente requiere un determinado tiempo mínimo de asociación (carencia). Las solicitudes de autorización deben enviarse encriptadas al servidor mediante el algoritmo RSA, al igual que las respuestas. Cuando se envía una solicitud de autorización de orden médica se verifica la validez de los datos del médico prescriptor por medio de un web service del Ministerio de Salud de la Nación para evitar órdenes adulteradas, médicos inhabilitados, y cualquier otra irregularidad. El resultado de la auditoría debe obtenerse en menos de 10 seg. Al excederse ese tiempo se debe informar al usuario de la demora, para que éste tenga una sensación de control sobre la aplicación. Cabe aclarar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3511DFJDIQnhsbTuow9cQD5hMo3oaiIsuLMj6MTj6c8zAnmHtlisVSPH7e_tAO08hY3pZlT0BE81oW97VtLL8nF1sEwpfsVFKAA4jkR1gmhKxKsgySO4hWCvcFQjPLHA8P0ZqO=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 11
que la autorización es realizada por orden médica. Por lo tanto, si una práctica no fue autorizada queda rechazada la orden. El sitio web debe ser soportado por el navegador Microsoft Internet Explorar 6.0 o superior con una resolución de pantalla de 1024 x 768. Los fondos y textos de la interfaz deben seguir la gama de colores azules institucionales, cuya degrades se mantenga dentro de los 256 colores. El módulo encargado de la Auditoría On-Line debe verificar la validez y completitud de los datos ingresados por el RMC en el formulario de solicitud de autorización. Si existiese un error, la solicitud es devuelta para que el RMC realice la corrección y pueda enviarla nuevamente para su autorización; o bien, anularla. Una vez anulada, no podrá solicitarse una autorización para la orden médica. Si la orden llega a ser devuelta más de 2 veces se rechaza automáticamente. Esta aplicación web debe tener una capacidad de atención de 100 solicitudes simultáneas. Puede ocurrir que determinadas prácticas de la orden médica, en función de su complejidad, requieran aprobación de Auditoría Interna o de un Comité Médico. En ambos casos, la respuesta de la evaluación indica que está derivada para la revisión del afiliado. Cuando el usuario se presenta en la Obra Social para la evaluación del Auditor Interno o el Comité Médico, éstos autorizan o rechazan la orden médica. El afiliado tiene 7 días hábiles para realizarse la revisión en la Obra Social; de lo contrario, se invalidará automáticamente la orden. Para evitar fraudes en la realización efectiva de las órdenes médicas la autorización de las órdenes tienen una fecha de validez. Superada la misma existe un tiempo de prórroga de 20 días corridos para que el afiliado pueda solicitar una reautorización en la oficina de la Obra Social, en caso contrario, se invalidará. La reautorización se puede realizar por única vez, extendiendo la validez por 10 días corridos. Se debe contar con el registro de las situaciones por las cuales atravesó una solicitud de orden médica en el tiempo y, cuando corresponda, el código de la autorización. Por otro lado, la base de datos debe tener habilitada la función de log para dejar pistas de auditoría de las operaciones realizadas sobre los datos. Los accesos a la base de datos deben realizarse únicamente con procedimientos almacenados. El Centro de Cómputos de la Obra Social requirió el uso de tres servidores: un servidor que gestione la base de datos, otro que contenga toda la lógica de la aplicación, y un tercer servidor para alojar el servidor web (apache). Los componentes de presentación de las funcionalidades para administración y auditorías internas deben ser instalados en las computadoras de los usuarios, ya que se ejecutan localmente. Listado de Casos de Uso
Caso de Uso Objetivo 1 Solicitar Autorización de Orden Médica On Line Registrar una orden médica y notificar el
resultado de la autorización on line. 2 Autorizar orden médica por auditor Registrar la autorización de una orden médica
efectuada por el Auditor Médico.
3 Autorizar orden médica on line Auditar la orden médica y autorizarla, derivarla o rechazarla.
4 Validar Matrícula Profesional Comprobar la validez de la matrícula del profesional médico, estableciendo la comunicación con el Ministerio de Salud de la Nación para obtener esta información
5 Registrar Centro Médico Registrar los datos de un centro médico 6 Modificar Centro Médico Actualizar los datos de un centro médico 7 Consultar Centro Médico Visualizar los datos de un centro médico 8 Eliminar Centro Médico Dar de baja un centro médico 9 Buscar Orden Médica Aplicar un conjunto de filtros para obtener
como resultado los datos de las prestaciones que cumplan con los filtros aplicados
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-dbiML0SsuGi53gKbXQCMuhv8uGXhvzYIKAWqNXC-DGtA0FWvUzG9BY3seCPWeN6QGusPrQHqKy2VuzZBKgMbs2fO6SW2V6zksbenWTxr02xlzCHuNbBfxhpqR-z45dDiu7IZ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 12
Caso de Uso Objetivo 10 Autorizar Orden Médica por Comité Médico Registrar la autorización de una orden médica
que debe efectuarse un afiliado en un centro de salud, cuando se trata de una prestación compleja que debe realizar un comité médico
11 Anular Orden Médica Anular la orden médica por parte del centro médico.
12 Verificar Autorizaciones Caducas Verificar si se ha llegado a la fecha en que caduca la autorización de la orden médica
13 Registrar ejecución de orden médica Registrar la presentación de una orden médica una vez cumplimentada la práctica
14 Registrar reautorización de orden médica Registrar la reautorización de una orden médica que había sido caducada
15 Registrar Médico Registrar los datos de un médico para la obra social
16 Modificar Médico Actualizar los datos de un médico para la obra social
17 Consultar Médico Visualizar los datos de un médico para la obra social
18 Eliminar Médico Dar de baja un médico para la obra social 19 Iniciar sesión de usuario Habilitar el ingreso del usuario al sistema. 23 Buscar Afiliado Aplicar un conjunto de filtros para obtener
como resultado los datos de los afiliados que cumplan con los filtros aplicados
24 Buscar Médico Aplicar un conjunto de filtros para obtener como resultado los datos de los médicos que cumplan con los filtros aplicados
25 Verificar Autorizaciones Fuera de Prórroga Verificar si se ha llegado a la fecha en que se debe invalidar la autorización debido a que queda fuera del período de prórroga permitido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UHUGPhrMCLJ43idnqBekd1lws5dXADg3AUp_NSV3Yf2k0G7Nxi0LLCgPY91JGvARL09DFwcHIb4hubF4JPzVD7rMAZMg0p5pMER2r346Q15pld56BvRmz6BNcvv137bt2Wj3g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tu8WfN1P9KEj3v6_K5xDWplk1OhKvy0DIk82foShbMbBGiQVyqg4Vev4oSadW1wNS8VYgUCy0T9n1e51Qhm3JxCRokweLg8aKdmwQYoyNDmZyWh3d99wcU-9YyBcpkZTGhK3XYQ=w1280-h779-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n6rcrTrYtweUxOB30rV7OfHmiMChNQsWTtk6WnOUe2c8ahjkTzRmnLpvE77zACTJtD7RLEv_X3w6hfGuCUC_-ss3Q-V7lAoM1tCyOcNNkC7qAimHRSbrtUHgqheehv2655sKx=w1280-h660-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 13
Solución Propuesta Máquina de Estados de la clase: Orden Médica
Estructura de soporte para la Orden Médica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GODcWdeA5xw3yZ1F2DBhRILggCQAV8aFrjRpIum4ZAp7pAws-4p0-TgpsOThOAM_0jQddWZ1W7A1g8Lbsw2Edly7YDv-KkVlunr6rCh8suwCmwZxUcNHShJQaKnIixahL9zOmJA=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 14
Congreso de Informática y Tecnología Autores: Mónica Lovay y Sol Zanel
Consigna:
1. Modele los estados de la clase “TrabajoDeInvestigacion”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados construida.
Presentación del caso:
La SAAII (Sociedad Argentina de Apoyo a la Investigación en Informática) organiza anualmente el Congreso de Informática y Tecnología (CIT). Cada año se realiza una nueva edición del mismo en la cual se organizan varios simposios que están abocados a diferentes áreas de investigación. Entre los mismos, pueden mencionarse, el Simposio de Tecnología, el Simposio de Inteligencia Artificial, el Simposio de Ingeniería de Software, etc. Cada año la SAAII elige una Facultad de una Universidad diferente como sede. Para el próximo Congreso se han decido algunos cambios para su funcionamiento que implican realizar cambios al sistema de información que le da soporte. A continuación, se explican las características a las que se les deberá dar soporte:
Cada edición del CIT se definir un grupo de chairs (organizadores) para cada simposio, que estarán encargados de la organización del simposio.
Para poder ser Chair un docente debe investigador y pertenecer a un grupo de investigación de una facultad, correspondiente a una universidad. Por ejemplo: el chair N°1 del Simposio de Ingeniería de Software es Luis Sánchez, perteneciente al grupo de investigación LABSOFT, Facultad Regional San Francisco, de la Universidad Tecnológica Nacional.
Cada simposio debe contar con evaluadores, los cuales son también docentes investigadores que tendrán a su cargo la evaluación de los trabajos presentados. Tanto en los grupos de evaluadores como en los grupos de chairs de cada simposio, los integrantes (evaluadores y chairs) tienen asignado un número de orden. Este número es utilizado en el orden de aparición de sus nombres en las publicidades del congreso.
Cada simposio define la fecha límite para la recepción de trabajos.
Los trabajos que pueden presentarse en este congreso pueden ser individuales o grupales. En
este último caso, los autores de un trabajo pueden ser docentes pertenecientes a facultades y/o universidades diferentes. Cada autor pertenece a un único grupo de investigación.
El envío de los trabajos debe realizarse por los autores a través de una página web en la cual debe seleccionarse el simposio en el que se desea presentar el trabajo y luego para cada autor del mismo se debe especificar: orden de aparición, apellido y nombre, grupo de investigación, facultad y universidad.
Respecto del trabajo de investigación se debe registrar: el título, un resumen del mismo (el cual no debe superar las 150 palabras) y una lista de por lo menos cinco palabras claves. El trabajo de investigación debe estar en formato pdf. En este momento, se registra la recepción del mismo y se asigna un número de orden y el estado pendiente de asignación de evaluador.
Pasada la fecha límite de recepción de los trabajos, los chairs deben asignar tres evaluadores a cada uno de los trabajos. Estos evaluadores se seleccionan aleatoriamente entre los evaluadores designados para cada simposio. En ese momento, el trabajo queda en estado pendiente de primera evaluación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uTArOHqBgtc1VgJbUeXywmgFDfoVIaSQAF-4PA6OnivRWUsp5_EqlTiejeWHAMiIgn5H628wQTglkjLR8yQ2pwP2Jrs8TahqDBXIOuQUv1vWpBzDjVDOMS_ko1FzzLDNfZnfWdQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 15
Cada evaluador debe revisar los trabajos que le fueron asignados y registrar para cada uno el resultado de su evaluación. Para ello, el evaluador asigna un puntaje (que es un valor entero entre 1 y 5, donde 1 significa “insuficiente” y 5 significa “excelente”) y un comentario a cada uno de los aspectos que deben evaluarse, los cuales se encuentran predefinidos (contenido técnico, lenguaje y estilo, pertenencia al simposio, novedad y contribuciones, etc.). Por ejemplo: el Evaluador XX asigna al Trabajo N° 23 un puntaje de 5 en el aspecto contenido técnico, un 3 en lenguaje y estilo, un 4 en pertenencia al simposio, y un 5 en novedad y contribuciones. Además de estos puntajes, el evaluador debe indicar su decisión global acerca del trabajo, la cual puede ser: aceptado o rechazado.
Cuando el trabajo ha sido evaluado por al menos uno de los evaluadores pero todavía no ha sido evaluado por los tres, se considera que se encuentra en el estado en evaluación inicial, pasando al estado pendiente de evaluación por chairs, cuando efectivamente los tres evaluadores lo hayan revisado.
Luego, los chairs deben analizar para cada trabajo estas evaluaciones y en función de las mismas tomar una decisión final, la cual puede ser que el trabajo sea aceptado, aceptado sujeto a correcciones o rechazado. En el último caso, ya no existen posibilidades de reformularlo para volver a presentarlo.
Si el trabajo es aceptado sujeto a correcciones, los autores tendrán una única instancia y una determinada cantidad de días (dependiendo del simposio) para realizar las correcciones solicitadas y volver a presentarlo. Si transcurrido este tiempo los autores no envían una versión corregida del trabajo, el mismo se considera anulado. Si por el contrario, es enviada la versión corregida, los chairs serán los encargados de revisar estos trabajos para cotejar que se hayan efectuado las correcciones solicitadas. Como resultado de este análisis puede resultar que el trabajo sea rechazado o que sea aceptado.
Una vez concluido el congreso, todos los trabajos que fueron aceptados son publicados en los proceedings (actas) pertenecientes a cada simposio, asignando a cada trabajo su correspondiente ISSN.
Los autores pueden retirar por razones particulares y personales sus trabajos del congreso, sólo si los mismos todavía no han sido aceptados.
Es necesario conocer para cada trabajo, el tiempo de permanencia en cada uno de los estados transitados.
Listado incompleto de CU de la aplicación descripta:
N° Nombre del Caso de Uso Objetivo del Caso de Uso 1 Registrar Edición de Congreso Registrar los datos de una nueva edición del congreso. 3 Consultar Edición de Congreso Consultar la información de una edición del congreso. 5 Registrar Investigador Registrar los datos de un docente investigador. 6 Modificar Investigador Modificar los datos de un docente investigador.
7 Consultar Investigador Consultar los datos de un docente investigador. 8 Eliminar Investigador Dar de baja a un docente investigador. 9 Registrar recepción de trabajo Registrar la recepción de un trabajo para un determinado
simposio. 10 Registrar Facultad Registrar los datos de una facultad. 11 Modificar Facultad Modificar los datos de una facultad. 12 Consultar Facultad Consultar los datos de una facultad.
13 Eliminar Facultad Dar de baja a una facultad. 14 Registrar Universidad Registrar los datos de una universidad. 15 Modificar Universidad Modificar los datos de una universidad. 16 Consultar Universidad Consultar los datos de una universidad.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VSqsabvu-ybEFRFKetKyc0fFkidxjk2m8SRgpBFjDDPUTEgYP7mhRSKGChX7Wog0R-FwI-okI9HbQc0480gxwHKVMjFPrUfvVz2q0vWpoISVsl2RUnqDDmW_J0xKuXjDL1Fe2nw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 16
N° Nombre del Caso de Uso Objetivo del Caso de Uso 18 Asignar evaluadores a
trabajos Registrar la asignación de tres evaluadores a cada uno de los trabajos recibidos para cada simposio.
19 Registrar evaluación realizada por evaluador
Registrar la evaluación efectuada a uno o más trabajos por un evaluador asignado.
20 Registrar resultado de evaluación
Registrar el resultado de la evaluación de la versión inicial o corregida de uno o más trabajos.
21 Registrar Grupo de Investigación
Registrar los datos de un grupo de investigación.
22 Modificar Grupo de Investigación
Modificar los datos de un grupo de investigación.
24 Consultar Grupo de Investigación
Dar de baja a un grupo de investigación.
25 Retirar trabajo Registrar el retiro voluntario de un trabajo presentado en un simposio.
26 Registrar recepción de trabajo corregido
Registrar la recepción de la versión corregida de un trabajo.
27 Asignar chairs a simposio Registrar para cada simposio la asignación de los docentes investigadores que se desempeñarán como chairs.
28 Asignar evaluadores a simposio
Registrar para cada simposio la asignación de los docentes investigadores que se desempeñarán como evaluadores.
29 Registrar publicación de trabajos
Registrar la publicación de todos los trabajos aceptados en cada simposio con su correspondiente ISSN.
30 Anular trabajos Registrar la anulación de aquellos trabajos que se encuentran aceptados sujetos a correcciones para los cuales no se ha recibido la versión corregida, transcurrido el lapso de presentación definido por el simposio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PluBM4bCAgdg1wiuhMPZcCYLsYF2kTJ9JhOjocaKSclsu_aSLYd1ZKTG41p0Z31tMvo6vAU1Q0p4ALx7p2LKw8PThicsNQNr9yxusE5SkO6ysrlxlggebFTMRjyteiKsYofMa=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 17
SOLUCIÓN PROPUESTA 1. Máquina de estados para la clase “TrabajoDeInvestigación”.
stm DTE_TrabajoDeInvestigación
PendienteDeAsignación DeEvaluador
PendienteDe PrimeraEvaluación
PendienteEvaluación PorChairs
Rechazado
AceptadoSujeto ACorrecciones Aceptado
PendienteDe SegundaEvaluación Publicado
Retirado EnEvaluaciónInicial
Anulado
25 Retirar trabajo /retirar()
18 Asignar evaluadores a trabajos /asignarEvaluador()
25 Retirar trabajo /retirar()
19 Registrar evaluación realizada por evaluador /evaluar() [y es la primera evaluación]
25 Retirar trabajo /retirar()
20 Registrar resultado de evaluación /evaluarChairs() [y se rechazó]
20 Registrar resultado de evaluación /evaluarChairs() [y se aceptó sujeto a correcciones]
20 Registrar resultado de evaluación /evaluarChairs() [y se aceptó]
25 Retirar trabajo /retirar()
09 Registrar recepción de trabajo /new()
30 Anular Trabajos /anular() [y no se recibió corrección]
29 Registrar publicación de trabajos /publicar()
20 Registrar resultado de evaluación /evaluarCorrección() [y se rechazó]
20 Registrar resultado de evaluación /evaluarCorrección() [y se aceptó]
25 Retirar trabajo /retirar()
19 Registrar evaluación realizada por evaluador /evaluar() [y no es la última evaluación]
19 Registrar evaluación realizada por evaluador /evaluar() [y es la última evaluación]
25 Retirar trabajo /retirar()
26 Registrar recepción de trabajo corregido /recibirCorrección() [y se recibió corrección]
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JYRqnBhzUbqEzmBBdjg4XeYvepu-pSdki6Z4Wq3DrSJDczz1n_XWRDOP2nQBLNS8UndDULmKggAHoRQl0m_EU5sMyT38YAHzzM8qaSrKZ4NYEu1sknUzabBln65u7cZe0iwxbAQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0y8iCZYOuE3uXp45E18ZqTqNDTxoUhOgdAJu7KLw62RcpOYj-4mkIK45VwSakHa91VWdH9x2i8RhdUbOfdGTOzzXqVNupFj_8lpSWCcs4RDIST_JAJpJ1vA4_5m9SNq2MiJ6wm=w1126-h795-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 18
Estructura de soporte para el Trabajo de Investigación:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0S93TS-S1OZEpq5YZrtpR4kV1FCxWzrdxQHyqVWiC4xCAqtateFGVPqvzAwyOvpDs9wVO_lUWzJHUQIR_-eOj7SFQNyjzlvap8Ke7V-22LKh4R2dv5wOyeowzH-ot8lWASEOpeyw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 19
Cadena de Pastelería Autor: Gerardo Boiero
Consigna:
1. Modele los estados de la clase “Pedido”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados construida.
Presentación del caso: Una importante cadena de pastelería se dedica a fabricar tortas, turrones y dulces de altísima calidad y a enviarlos a cualquier lugar del mundo. Esta cadena desea contar con una plataforma que le permita mejorar la comunicación con sus clientes e incrementar la cantidad de pedidos de sus productos a nivel mundial. Esta plataforma virtual estará disponible tanto para la web como para smartphones Android. El cliente podrá acceder a todas las noticias, novedades de la cadena, visualizar videos publicitarios, y disfrutar de cientos de beneficios exclusivos que están disponibles sólo para quienes se suscriban a estos contenidos virtuales. Con esta herramienta de comunicación, el cliente podrá realizar sus pedidos de compras y saber en qué situación se encuentran desde cualquier lugar del mundo. El cliente puede consultar el catálogo de productos de la cadena, y agregar los productos con sus cantidades al carro de compras. Una vez seleccionados todos los productos deseados, el cliente debe proceder a crear el pedido indicando el nombre del destinatario y la ciudad de entrega. Si el destino elegido está dentro del país o de países limítrofes (Brasil, Chile, Paraguay, Bolivia o Uruguay) se calcula automáticamente el monto total del pedido incluidos los gastos de envío y los impuestos, y se espera la confirmación del pedido. En cambio, si el destino es otro, el pedido debe ser analizado por un encargado de ventas de la cadena para calcular el costo del envío, ya que es un destino no frecuente. Una vez evaluado, de igual manera, se informará el monto total del pedido y se esperará la confirmación. Si el cliente no está conforme con cualquier aspecto del pedido, puede cancelarlo. Recién cuando el cliente confirma, se realiza el cobro del pedido a través de entidades de cobro online (Mercado Pago, PayPal, Visa, Mastercard) que disponen de un web service para tal fin. A fin de simplificar la solución asumiremos la representación de un web service único, independientemente de la entidad. Una vez que se concreta el cobro, se procede a preparar el pedido con todos los productos solicitados. Si la entidad rechaza el cobro, se da por extinguido el pedido; de igual manera, si no se realiza el cobro luego de 2 intentos de autorización. Después de preparado el pedido, debe ser inspeccionado por el personal de control de calidad para asegurarse que los productos sean correctos, no estén vencidos ni dañados y estén correctamente embalados. Si cumple los criterios de calidad, el pedido queda listo para ser despachado. El despacho comienza cuando se envía a la empresa de correo que corresponde a ese destino. En caso de que no cumpliere con los criterios de calidad establecidos, retorna nuevamente a preparación para que se lo prepare y embale correctamente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2930qW-5qht5z5TxGfOMDznzghXQFdNB3WwG59zXELASjTZ_pGgf9RSKFjhYXxoU-VsZI5MYGqncsjRQ_mgHOgi0LuBmD8TGU3LK4cnPzmj4sdx4m_EQ9obGZaoUk3qePeUq48hw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 20
Esta cadena trabaja con empresas de correo contratadas para cada destino. Estas empresas envían los pedidos a sus centros de distribución y, luego, se los entregan a uno o más repartidores para que ellos realicen el reparto del pedido al destinatario final. Una vez entregado, se da por finalizado el pedido. Si el repartidor no puede entregar el pedido porque el destino es incorrecto o el destinatario no está en su domicilio, lo informan a la cadena para que se comunique con el cliente. El cliente podrá decidir si se cancela el pedido o corrige/cambia el domicilio de entrega para que sea nuevamente despachado. Las empresas de correo informan la situación de envío del pedido diariamente a través de archivos con diferentes formatos y tipos (XML, CSV o TXT). Cada vez que ocurre un cambio en el estado del pedido es enviado un email al cliente y al destinatario si desean ser notificados sobre la situación del mismo. Como la plataforma maneja dinero, es necesario que el esquema de seguridad de los usuarios cuente con una clave de acceso de 8 caracteres a 16 caracteres alfanuméricos, y que se utilice un protocolo de transferencia de datos seguro -conocido como HTTPS. El sistema debe soportar 1.500 accesos y operaciones en simultáneo. La aplicación deberá ser desarrollada en HTML5 y en Android para los teléfonos móviles. La aplicación Android será un cliente liviano que no requiera programaciones complejas, y permitirá consultar las publicaciones, consultar el catálogo y crear pedidos de igual manera que la aplicación web. La empresa ya dispone de una licencia de Oracle 11g para utilizar como motor de base de datos, que además ya posee configurado un esquema de auditoría que permite registrar toda operación (creación, actualización y borrado) que se realicen sobre los datos. Glosario:
Carro de compras: es un complemento del catálogo web que facilita la selección de los productos (y sus cantidades) a incluir en el pedido.
Nro Nombre del Caso de Uso Objetivo / Descripción breve
1 Publicar contenido Registrar el contenido (noticia, novedad, beneficios, videos) de la cadena a publicar para los clientes.
2 Consultar contenido Visualizar los datos e imágenes/videos de las publicaciones.
3 Cancelar publicación de contenido
Registrar la cancelación de una publicación a un cliente.
4 Registrar producto Registrar los datos de un producto de la cadena.
5 Modificar producto Cambiar los datos de un producto de la cadena.
6 Eliminar producto Dar de baja los datos de un producto de la cadena.
7 Consultar producto Visualizar los datos de un producto de la cadena.
8 Registrar catálogo de productos
Registrar los datos del catálogo de productos y definir los productos que contiene.
9 Modificar catálogo de productos
Editar los datos del catálogo de productos y modificar la definición de los productos que contiene.
10 Consultar catálogo de productos
Buscar y visualizar los productos disponibles en el catálogo vigente
11 Agregar producto a carro de compras
Registrar la incorporación de un producto a la lista de productos seleccionados del cliente con la cantidad deseada.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1T9ZiYIJ2PM08uxIabIQlbWKJqSmJmTPGxvSZoCIBcPhUyTPGGcR15NrIec627AtCRa-WReEV1OE6EQ92S2V8G94sL6AFCzaJXzZC35XSI5nFS3YYnD9KfjkyHTmmY5HQw9aEjoQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 21
Nro Nombre del Caso de Uso Objetivo / Descripción breve
12 Quitar producto de carro de compras
Eliminar un producto de la lista seleccionada por el cliente.
13 Crear pedido Registrar el pedido del cliente con los productos incorporados al carro de compra, junto al cálculo del monto total (si el destino no requiere análisis).
14 Consultar pedido Visualizar los datos específicos del pedido, su situación actual y el historial de estados.
15 Cancelar pedido Registrar la cancelación del pedido del cliente, generándose la devolución del cobro si el mismo ya fue cobrado.
16 Confirmar pedido Registrar la confirmación del pedido realizado por el cliente para iniciar el proceso de cobranza online.
17 Registrar autorización online de cobro
Solicitar la autorización de cobro a las entidades de cobranza online y, si es autorizado, registrar el cobro realizado.
18 Registrar devolución de cobro Solicitar la anulación de un cobro realizado en la entidad de cobranza online.
19 Registrar análisis de destino Registrar el resultado del análisis del destino del pedido con sus correspondientes costos de envío e impuestos.
20 Iniciar sesión Permitir el ingreso del usuario al sistema y registrar la sesión del usuario.
21 Cambiar contraseña Registrar el cambio de la contraseña actual por una nueva contraseña.
22 Registrar resultado de inspección a pedido
Registrar el resultado (aprobado o rechazado) de la inspección realizada sobre la preparación del pedido.
23 Registrar preparación de pedido
Registrar el comienzo de la preparación del pedido de un cliente.
24 Registrar finalización de preparación de pedido
Registrar la finalización de la preparación del pedido de un cliente.
25 Actualizar estado de despacho Procesar automáticamente los archivos de seguimiento enviados por la/s empresa/s de correo y actualizar la situación de envío de cada de pedido.
26 Enviar notificación a interesado
Generar el contenido del email de acuerdo al tipo de notificación/contenido y enviarlo al correo del interesado
27 Registrar despacho de pedido Registrar el envío del pedido a la empresa de correo que lo enviará al destino.
28 Registrar destino Registra los datos de un destino y de la empresa de correo que reparte.
29 Modificar destino Editar los datos de un destino y de la empresa de correo que reparte.
30 Eliminar destino Dar de baja un destino.
31 Consultar destino Visualizar los datos de un destino y de la empresa de correo que reparte.
32 Registrar adhesión a recepción de publicaciones
Registrar la adhesión del cliente a determinados contenidos que son publicados.
33 Cancelar adhesión de recepción de publicaciones
Registrar la cancelación de la adhesión realizada por un cliente a un tipo de contenido.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sArCyUA3ZXWhkySH5-S3JSdTMB7KwZhK1onyEDDfVxTZh6zD1kBVukqn8kueQnnKOgecMFe48pMAUsoFW9ttQ0Elo4NqiiKVM95FYQnL31g6OPhDN-AyuPvdDDNfm7ODm_6qC=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 22
Solución Propuesta
1. Máquina de Estado: Clase Pedido
stm StateMachine
EnAnálisisDestino
Cancelado
CobroRealizado
Finalizado
EnDespacho NoEntregado
EsperandoAceptación
Confirmado
EnPreparaciónPedido
EnControlDeCalidad
PendienteDeDespacho
CobroRechazado
27. Registrar despacho de pedido /despachar()
24. Registrar finalización de preparación de pedido /finalizarPreparacion()
22. Registrar resultado de inspección [cumple] /inspeccionar()
25. Actualizar estado de despacho [NoFueEntregado] /repartir()
17. Registrar autorización online de cobro [cant. intentos <= 2] /autorizarCobro()
13. Crear pedido [Destino frecuente =NO] /new()
15. Cancelar pedido /cancelar()
22. Registrar resultado de inspección [no cumple] /inspeccionar()
15. Cancelar pedido /cancelar()
17. Registrar autorización online de cobro [trx aceptada] /autorizarCobro()
25. Actualizar estado de despacho [SeEntregó] /repartir()
17. Registrar autorización online de cobro [trx rechazada o cant veces > 2] /autorizarCobro()
19. Registrar análisis de destino /analizarDestino()
27. Registrar despacho de pedido /despachar()
13. Crear pedido [Destino frecuente =SI] /new()
16. Confirmar pedido /confirmar()
23. Registrar preparación de pedido /preparar()
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jIoRafDPV6zlq3AIv1iu9xjR8zKwSLcDTiOHv5FhW_cyRxxBwfXCDBqshB7pTluzQhOd5rVhSMZvuCJHVE-DV9kiknH9GJnx7ZfLPfdU9-Rr87ORDwLRBdNhXM6g0wy4I-PwFsw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 23
Estructura de soporte de la Maq. de Estado
NOTA: Con esta estructura básica ya se resuelve la solución, porque no hay un requerimiento de llevar un historial de estado.
stm EnDespacho
EntregadoACorreo
EnDistribución EnReparto 25. Actualizar estado de despacho /iniciarReparto()
25. Actualizar estado de despacho /enviarACentroDist()
27. Registrar despacho de pedido /despachar()
class Logical View
Pedido
- estado :Estado
+ new() + analizarDestino() :void + confirmar() :void + autorizarCobro() :void + inspeccionar() :void + registrarCobro() :void + despachar() :void + finalizarPreparacion() :void + devolver() :void + repartir() :void + cancelar() :void + finalizar() :void + preparar() :void + iniciarReparto() :void + enviarACentroDist() :void
Estado
- nombre
A fines de simplificar la solución, se
muestran sólo los atributos y
métodos utilizados por la maq. de
estado.
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EItP5b5NXjQaRVJ-Fzzjlzz2rj43HESi-B6cw5BXf5FBWxA71cmBjHsKOGd02Erkf394kmeQaBq1Xuok1IBnPZInvxNsKm2oNAJlmyxwpSpPbzkHoX6onmQDrKMMOnisSk56-BQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 24
Sistema de Compras y Proveedores Autor: Elizabeth Jeinson
Consigna:
1. Modele los estados de la clase “PedidoDeCompra”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados construida.
Presentación del caso:
Una Cooperativa de Obras y Servicios públicos del interior de la Provincia de Córdoba desea desarrollar un sistema para administrar las compras y los proveedores de la organización. El sistema en cuestión deberá dar soporte a los circuitos de compras definidos en la organización y que funcionan de la siguiente manera: cada área dentro de la Cooperativa realiza un presupuesto anual en el que tienen contemplados todos los gastos para uso interno y para obras que realizarán. El sistema de compras debe controlar que las compras se mantengan dentro del presupuesto estipulado por área y que se siga todo el circuito de aprobaciones necesarias para liberar una orden de compra. Cada área tiene asignado un centro de costos y puede manejar uno o varios presupuestos. Por ejemplo, el área de operaciones administra el mantenimiento de la red de agua potable con un centro de costo específico y un presupuesto dado y a su vez administra una obra de cloacas con un centro de costo diferenciado y a la que se le ha asignado un presupuesto por separado. El procedimiento de compras estipula que de acuerdo con el monto de la compra cuál es el circuito de aprobación y los requisitos:
Tipo de Compra Rango Aprobación Nivel
Directa $ 1 a $500 Jefe Evaluación de Primer Nivel
Directa $501 a $1000 Jefe y Gerente del área Evaluación de Segundo Nivel
Compulsa de precios (al menos tres presupuestos
$1001 a $ 5000
Jefe y Gerente del área Evaluación de Segundo Nivel
Licitación pública o privada
Más de $5001 Jefe, Gerente del área y Gerente General
Evaluación de Tercer Nivel
El sistema tiene un Ranking donde los proveedores están ponderados por actuaciones anteriores. Cuando son nuevos proveedores o se trata de una compulsa de precios o licitación, la ponderación se realiza de acuerdo con la oferta. Algunos proveedores envían a la cooperativa en forma periódica sus ofertas y lista de precios en formato digital. El sistema deberá importar esos datos y tenerlos en cuenta como referencia de precios. Cualquier persona del área o proyecto puede hacer un pedido de compra. Cuando lo carga al sistema, éste toma como valor, el último valor de compra. Si no existe en el sistema, se puede valorizar en forma manual haciendo referencia de la fuente del precio indicado. También puede sugerir proveedor y agregar alguna observación o justificación. Se adjuntan al pedido los requisitos y luego de creado el pedido de compra, se deriva al jefe (primer nivel) para su autorización y se indica la prioridad de la compra con la siguiente escala: urgente, alta, mediana y baja.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jiKk8L2o8teo8PWSpd1ddsbg9bIxLhPAWhzOEQvTe4Od9IQ7KkVvea-5oIfNEE5zvIo5ai-9O4V83vCNgOqVAwE6K-lDaA0k1rTqJ6_X8zpcCOR_34lox0I6ZX5eMlMkftxTj=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 25
Un pedido de compra puede estar formado por varios ítems de productos y/o servicios, no obstante, al aprobarlo y o rechazarlo, se lo hace en forma completa; no hay manejo independiente de los ítems que integran un pedido de compra. Cada nivel de aprobación en el circuito puede aprobar, pedir cambios o rechazar. Si rechaza este rechazo es definitivo por lo que cierra el pedido de compra. Si se solicitan cambios, que pueden ser por falta de cumplimiento de alguno o varios de los requisitos necesarios para la aprobación. Una vez que el solicitante corrige lo que se le pidió, puede seguir el circuito de aprobaciones en el mismo punto donde se interrumpió. El solicitante puede cancelar el pedido de compra, que no haya sido rechazado, en cualquier momento antes de que el proveedor haya enviado los productos o haya prestado el servicio Se solicita que el sistema envíe un mail al solicitante notificando cuando hay rechazos, cuando está emitida la orden de compra y cuando se puede cerrar el pedido de compra. El sistema deberá también ordenar los pedidos por prioridad dentro de un rango de fechas determinado para que los niveles gerenciales puedan realizar las aprobaciones de acuerdo con las necesidades de la organización y permitir aprobaciones en lote. Una vez que está aprobado en el nivel requerido, se emite la orden de compra al mejor proveedor. El monto de la compra se descuenta del presupuesto del centro de costo en forma provisoria. Cuando la mercadería es enviada por el proveedor o se ha provisto el servicio, se completa un Informe de Satisfacción indicando un puntaje que asigna el solicitante respecto de la adquisición para nutrir el Ranking de Proveedores de la Cooperativa y de esta manera se cierra el incidente del pedido de compra. Además, se descuenta la compra del presupuesto en forma definitiva. El sistema de compras debe relacionarse con el sistema contable para que se realicen todos los asientos correspondientes a los movimientos contables y también con el sistema de Planificación del que obtiene los montos de los presupuestos anuales. El sistema debe ser multimoneda ya que hay algunas compras que deben hacerse en moneda extranjera. Listado de Casos de Uso Nro. Nombre del Caso de Uso Objetivo 1. Registrar proveedor Registrar los datos de un proveedor. 2. Modificar proveedor Actualizar los datos de un proveedor. 3. Consultar proveedor Mostrar los datos de un proveedor. 4. Eliminar proveedor Dar de baja un proveedor. 5. Registrar tipo de compra Registrar un tipo de compra utilizado en la cooperativa. 6. Modificar tipo de compra Actualizar un tipo de compra utilizado en la cooperativa. 7. Consultar tipo de compra Mostrar un tipo de compra utilizado en la cooperativa. 8. Eliminar tipo de compra Dar de baja un tipo de compra utilizado en la cooperativa. 9. Actualizar ponderación
proveedor Actualizar el puntaje asignado a un proveedor en el ranking de proveedores.
10. Registrar pedido de compra Registrar un nuevo pedido de compra. 11. Modificar pedido de compra Actualizar datos en un pedido de compra existente. 12. Derivar a evaluación pedido
de compra Derivar un pedido de compra creado para que sea evaluado por el primer nivel de autorización.
13. Cancelar pedido de compra Registrar la cancelación de un pedido de compra. 14. Controlar límite de compra Verificar si el pedido de compra sobrepasa el límite establecido
por el presupuesto del área. 15. Evaluar pedido de compra Evaluar si un pedido de compra puede ser aprobado o
rechazado. 16. Emitir orden de compra Generar e imprimir una orden de compra a un proveedor
seleccionado de acuerdo a uno o más pedidos de compra aprobado/s.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1U1IghM5Hp6r_FF7pBc7Aw3ccINsqEm7f2nMPTWz60t8uHP0xAJI1_bBQg_cYojW4RzKF4A3xg0yck8VROWog2zsYEF13zuBgJ78qLHmilhjZnJ-dhmV2MOdG4HVRsc9-NZS4H=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 26
Nro. Nombre del Caso de Uso Objetivo 17. Modificar orden de compra Actualizar una orden de compra existente. 18. Cancelar orden de compra Cancelar una orden de compra existente. 19. Generar Ranking de
Proveedores Obtener un reporte de Ranking de Proveedores de la Cooperativa en función de criterios predefinidos y para un período de tiempo especificado.
20. Registrar conformidad de compra
Registrar satisfacción de compra, indicando un puntaje que asigna el solicitante respecto de la adquisición, para luego cerrar el incidente del pedido de compra.
21. Registrar ítem de escala de prioridades
Registrar un ítem correspondiente la escala de prioridades.
22. Modificar ítem de escala de prioridades
Actualizar un ítem correspondiente la escala de prioridades.
23. Consultar ítem de escala de prioridades
Mostrar un ítem correspondiente la escala de prioridades.
24. Eliminar ítem de escala de prioridades
Dar de baja un ítem correspondiente la escala de prioridades.
24. Importar lista de precios Importar archivo con precios de ítems enviados por un proveedor.
Nota: Tener en cuenta que el listado de casos de uso no está completo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tPPBMuHDwpR4J3nyqcN91XBVxuBqCtTSerLKsu2wdANtqh-yWzz1DB7aH7XSwbXdY1S0nx-Z3968d-8ctV5-TWC_aLb5M5a6XDYZu54Un5NyPanKTKbUI-yBIM1fe-dUM9D3b=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KEaLE-wC4CQLZn-jluIl2DvE6JXR-u9W2Thyrs5eYuWJa0qoLUjSjUJhObeCqNiZHdwtTVt0FrJ4R1banmfdLF0A5o1cOFBCn8yMhBLaKRxrYAqZp8-imyy1WaqppIfRoKxAL3A=w1280-h806-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 27
Solución Propuesta 1. Máquina de Estado: Clase Pedido de Compra
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LoJDj0fn3koBfJHrAQ4H8iHtlrD4HBx0TS3DZbg8L-cgcl_srN2KRZXAQN7PX3pTNWgYON3-3eWK5hnK-MWCnaD7n-Wjo4cAsgLRp_zD3RaDZKuYaBj_fZACJPRmXceSG7p0XTw=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 28
Estructura de soporte de la Máquina. de Estado
class Modelo de Dominio
«entity» PedidoDeCompra
fechaCreacion numero
aprobadoPrimerNivel() aprobadoSegundoNivel() aprobadoTercerNivel() cambioRealizado() cancelar() cerrar() crearDetallePedidoCompra() derivar() emitirOrdenCpra() new() pedirCambios() rechazar()
«entity» Estado
descripcion nombre
getDescripcion() getNombre() new() setDescricpion() setNombre()
«entity» DetallePedidoCompra
anterior
0..1
actual
1
detallePedidoCompra 1..*
Se muestra una vista incompleta de las clases, sólo haciendo foco en lo requerido para dar soporte
a la máquina de estados. En el dominio se aclara que el
estado el para el pedido en forma completa, por eso no se
requiere estado para cada detalle de Pedido de Compra. El puntero anterior es
principalmente, para manejar la historia del estado “EnCorreccion”
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YER6g-yQ2k-t3AzUl-0Ttorol9AMdNedtt5HXvoYd5pAWlGVkSjKwCeBaTbnS7V5CkjW4Go_kvVp3tprs90LktcGcWRqvUGXUiB7vC1Js5AkhIG9t5iSNoxUQD_XUB0NEh71K=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 29
Cupones de Descuentos Autor: Gerardo Boiero
Consigna:
1. Modele los estados de la clase “CuponDeDescuento”, utilizando un diagrama de máquina de estados. Especifique asociado a las transiciones los casos de uso, los métodos y las condiciones de control, cuando aplique.
2. Construya la vista de análisis que incluye las clases necesarias para dar soporte a la máquina de estados construida.
Presentación del caso: Una empresa desea implementar un portal web a nivel nacional para permitir a quienes se suscriban al mismo, obtener grandes beneficios al adquirir productos y/o servicios de diferentes rubros: gastronómico, fotografía, deporte, gimnasio, spa, etc. con precios bonificados. Esos beneficios se materializan adquiriendo cupones de descuentos que pueden ser canjeados por productos o servicios en los comercios adheridos. La empresa también actúa como comercio adherido, ofreciendo productos que se entregan en sus sucursales distribuidas a lo largo del país. Cada cupón contendrá un código QR que al ser leído dirigirá a una página de confirmación provista por este portal web para validar si el cupón es original, evitando posibles falsificaciones. Los comercios adheridos que ofrecen productos y/o servicios deberán tener un dispositivo (Smart pone, PC o similar) que tenga instalada una aplicación lectora de código QR, por ejemplo, QuickMark Reader. Los comercios adheridos que deseen publicar sus ofertas a través del portal web, deben registrarse en el sistema como empresa publicante, podrán registrar ofertas que serán comunicadas vía e-mail a los usuarios suscriptos. Las ofertas se emiten para una o más ciudades, tienen una fecha de fin de vigencia, un rubro, un importe (precio final), un cupo mínimo (que representa la cantidad de suscriptos que se requiere hayan adquirido la oferta para que este sea válida), una fecha y hora de cierre, y una descripción de las condiciones referentes a la prestación de la misma. Al registrar una oferta, el comerciante debe elegir una imagen que sea representativa de la oferta; el sistema debe manejar un banco de imágenes de alta definición en formato .png libres de derecho de autor sin restricción de tamaño (organizadas por rubro) para que al momento de publicar la oferta el comerciante elija la que lo represente mejor o, adicionalmente cargue una nueva imagen. A continuación, se muestra un ejemplo de oferta del comercio “Foto Express” para la ciudad de Córdoba:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kFei00mmt9gOJ2PLGysPH5-4_jQnC2lqC4WHWP5Ysk2MxwxwTaAXGohmhlee7VHFdezXd34AgR8RI9zvSWy__Fz3clhiFBTANfqTq81eBVhuJr6Sjj7YkvKBbLExhRdmxvn8f=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11XiDOg1anT5sI2K8hpkyfvfz5cyOpiqC-IWB-kGACDYAVG8Fr_5M9SMdHZjwTfRtmfMhO6_xxv9qmrf_aJd5gLxEwPm8hI-_PEp0vfijw8CdJj2CyZJzimTWJYH6fxDJgceUpdQ=w320-h153-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JzJ3PtpFpGcti_JhRMxymLZO2G6aWhnRrZIvTirqm4iI1MRWhQVZbuj7-LJ1xqH8eBO2j2y9nys5VlODizDv8j5rKPqxjVJ5nigbU7bjmD3Hl1l79TMRLEKi9enmG-7r1fgBogg=w148-h47-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 30
CÓRDOBA – Fotografía - Oferta de hoy: 21/05/2014
Pagá $45 en vez de $124,50 por la impresión digital de 50 fotos en 13x18 en Foto Express.
Cupo mínimo: 100 compradores
Condiciones: Cupón de descuento válido del 01/06/2014 al 31/08/2014. No acumulable con otras promociones. Se puede adquirir hasta 2 ofertas por suscriptor.
Para que los comercios adheridos puedan promocionar sus ofertas, el sistema expone una API (Interfaz de programación de aplicaciones que proporciona un conjunto de funciones de uso general que definen cómo invocar un servicio, es una interfaz de comunicación entre componentes software) que permite a los comercios adheridos incrustar en sus páginas un componente visualizador de las ofertas disponibles, ese componente obtendrá las ofertas actuales -a través de un webservice desarrollado por la empresa- y redirigirá al portal web en el caso que se desee adquirir un cupón. Para suscribirse en el portal web y comenzar a recibir las novedades de ofertas diarias, el usuario debe completar sus datos personales, la ciudad donde vive y los rubros de interés (gastronómico, fotografía, deporte, gimnasio, spa, etc.) sobre los cuales le gustaría recibir ofertas. Cuando se registra una oferta el sistema las agrupa según su rubro y ciudad, luego genera las novedades diarias combinándolas. Las ofertas permanecen disponibles como novedad hasta que se cumple la fecha de cierre. Todos los días se envían una o más ofertas al e-mail del Suscriptor. Si éste desea adquirir algún producto/servicio ofertado debe loguearse en el portal web, si aún no posee usuario puede completar el formulario de registración. Para efectuar una compra debe dirigirse a la opción Comprar, indicar la cantidad a adquirir, la tarjeta de crédito (marca de tarjeta, número, fecha de vencimiento y código verificador (cvc)con la cual realizará el pago, y confirmar que acepta las condiciones de compra del producto/servicio ofertado. El sistema generará un cupón de descuento como pendiente hasta cumplirse la fecha de cierre de la oferta adquirida. Por ejemplo, para la oferta anterior, el suscriptor puede realizar la compra de la oferta de las 50 fotos impresas pagando tan sólo $45. Si lo desea, el suscriptor puede adquirir 2 ofertas pagando $90 que podrá canjear por 100 fotos impresas. Dado que se trata de una metodología de compra colectiva, recién se concreta la compra de la oferta del producto/servicio cuando se cumple la fecha y hora de cierre establecida y se ha alcanzado el cupo mínimo. Si no se alcanza este cupo se cancelarán todos los cupones de descuento generados. Al concretarse la compra se enviará un mail informando que el cupón ya fue cobrado y está disponible para usar; si por alguna razón el cobro no puede concretarse, se le notificará mediante mail al comprador para que regularice la situación y el cupón permanecerá en espera de que se concrete el cobro o hasta cumplirse un periodo de 48hs hábiles, en cuyo caso será cancelado. Cuando el Suscriptor quiera hacer uso de los cupones de descuento, deberá imprimirlos y canjearlos en el comercio adherido que lo ofreció. Así, el comerciante recibirá el cupón y podrá validar el código a través de la página web. Una vez validado el cupón y registrado como usado, no podrá ser usado nuevamente. Si el Comercio Adherido es la misma empresa, el producto que se adquiere deberá ser retirado en cualquiera de las sucursales habilitadas para tal fin. Una vez retirado de la sucursal se marcará el cupón como entregado. En caso de que el producto retirado presente defectos o fallas el usuario podrá reclamarlo dentro de los 5 días hábiles posteriores a su retiro, si pasa ese periodo el cupón se considerará usado. En caso de reclamar un cupón, el usuario deberá devolver el producto en el mismo
Finaliza en
Finaliza en
DíasHoras
Finaliza en
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 31
lugar donde lo retiró, la empresa decidirá si rechaza el reclamo (según las condiciones en que se devuelve el producto), o lo acepta. En caso de aceptar el reclamo puede proceder de dos maneras: generando un cambio de producto, si se contara con stock disponible, o en caso contrario, realizando el reembolso del importe del cupón de descuento. La empresa sólo recibe reclamos por productos que ella misma comercializa, en caso contrario los clientes deben dirigirse al comercio adherido que publicó la oferta. El usuario podrá logueándose en el portal web, consultar todos sus cupones y visualizar el historial de estados por los que pasó cada cupón de descuento. Durante la noche a las 04:00 AM, el sistema verificará la fecha de vencimiento de todos los cupones disponibles, si alguno vence dentro de las 48hs, enviará un mail alertando a cada dueño del cupón sobre esta situación y marcará todos los cupones próximos a vencer con color rojo (código RGB: #FF0000). Aquellos para los que se haya cumplido la fecha de vencimiento y no hayan sido usados serán marcados con color gris (código RGB: #585858). El portal web también brinda la posibilidad de manejar una cuenta de créditos a cada usuario, de forma tal que, a la hora de comprar una oferta, permita descontar el costo de esa cuenta. El usuario podrá cargar saldo en su cuenta a través de su tarjeta de crédito o medios de pago en efectivo como RapiPago o PagoFácil. El saldo de la cuenta también se puede incrementar con los rembolsos por cupones devueltos. A fin de simplificar la solución, se considera que las devoluciones de cupones se pueden hacer únicamente con reembolsos que se acreditarán a la cuenta del cliente. Para conseguir más suscriptores, el portal web deberá permitir que los usuarios registrados recomienden ofertas a personas no registradas actualmente, enviándoles un link exclusivo generado para cada oferta. El sistema debe hacerle seguimiento a ese link de manera que si el nuevo usuario hace click en el link dentro de las siguientes 72 horas, se registra en el sitio web y realiza una compra de una oferta, se le depositará en la cuenta del usuario que lo recomendó $10 de crédito, que se acumularán en la cuenta. La empresa dispuso que la base de datos a utilizar debe ser MySQL 5.6 y se instale en un servidor dedicado. Además, el banco de imágenes también se instalará en otro servidor dedicado. Adicionalmente el sistema debe permitir a los comerciantes generar un reporte de la cantidad de cupones comprados y usados por cada oferta publicada, además de los montos totales ganados por cada oferta. Para el usuario suscriptor debe permitir visualizar un reporte del importe ahorrado anual, además de los movimientos de créditos en su cuenta.
Nro Nombre del Caso de Uso Objetivo / Breve Descripción
1 Registrar Oferta. Registra una oferta con todos sus datos y la foto representativa incluyéndola en el listado de publicación.
2 Consultar Oferta. Visualizar todos los datos de la oferta con el contador de tiempo restante.
3 Cancelar Oferta. Cancelar la oferta y todos sus cupones pendientes por no llegar a la cantidad mínima de suscriptores.
4 Recomendar Oferta. Recomendar ofertas a través del envío de un link de recomendación. Se llama al caso de uso de realizar seguimiento al link de recomendación.
5 Ejecutar Cierre de Ofertas. Procesar el cierre de las ofertas de productos/servicios llamando a los casos de uso de cobro de todos los cupones asociados en caso de haber alcanzado el cupo mínimo.
6 Registrar Comercio Adherido Registrar los datos de un comercio adherido al portal web.
7 Modificar Comercio Adherido Modificar los datos de un comercio adherido al portal web.
8 Consultar Comercio Adherido Visualizar los datos de un comercio adherido al portal web.
9 Eliminar Comercio Adherido Eliminar un comercio adherido siempre que no tenga ofertas publicadas.
10 Adquirir Cupón de Descuento Adquirir una oferta a través de un cupón de descuento con una forma de cobro.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aCrIFd1dk2Og_NxblOauKMyjUvS1kBYxu2yhIuQ-5uNANLtGUlGV3NdrmffXfOgiXmuCmRITboIj_jLJrcRuraX2IMEaD9nLOzoRI23Mk2AHsa55gbWa7XPAUzgDF-RwgFPbEgQ=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 32
Nro Nombre del Caso de Uso Objetivo / Breve Descripción
11 Consultar Cupón de Descuento.
Consultar los datos de un cupón de descuento con su historial de estado.
12 Imprimir Cupón de Descuento. Imprimir un cupón de descuento y su código QR.
13 Validar Código de Cupón de Descuento.
Validar que el código QR de un cupón de descuento corresponda a un cupón válido.
14 Registrar Uso de Cupón. Registrar la fecha de uso de un cupón de descuento de forma que no pueda ser utilizado nuevamente.
15 Validar Vencimientos Cupones.
Validar diariamente el vencimiento de los cupones de descuento.
16 Validar Periodo de Cobro. Validar periodo de 48hs para regularizar situación de cobro de cupones de descuento.
17 Registrar Cobro con Tarjeta de Crédito.
Registrar el cobro de un cupón de descuento con tarjeta de crédito.
18 Registrar Cobro con créditos. Registrar cobro con créditos de la cuenta, debitando el importe del producto/servicio.
19 Enviar aviso de cobro fallido. Enviar mail al recibir un rechazo en el cobro del importe de un cupón.
20 Registrar ingreso de créditos a cuenta.
Acreditar el ingreso de un importe a una cuenta de créditos.
21 Registrar Cobro a través de medios de pago en efectivo.
Registrar el cobro a través de medios de pago en efectivo como RapiPago o PagoFácil.
22 Reclamar Cupón de Descuento.
Registrar el reclamo de un suscriptor por un producto adquirido con un cupón de descuento.
23 Generar novedad de ofertas. Generar una novedad agrupando ciertas ofertas según su rubro y ciudad, que luego serán enviadas a los suscriptores.
24 Enviar e-mail de novedad. Enviar los e-mails de novedad a los suscriptores según el tópico y rubro.
25 Registrar suscriptor. Suscribir interesado para recibir ofertas según un rubro y ciudad.
26 Iniciar Sesión. Iniciar sesión habilitando los permisos predefinidos para cada usuario.
27 Registrar comercio adherido. Registrar los datos obligatorios de un comercio.
28 Registrar entrega de producto importado.
Registrar la entrega de un producto comercializado por la empresa.
29 Reembolsar Importe de Cupón.
Realizar la devolución del importe del cupón reclamado, con créditos en la cuenta del usuario que reclama.
30 Validar Periodo de Reclamo de Cupón.
Validar si el cupón de descuento puede ser reclamado y marcarlo como usado en caso de que se cumpla el periodo.
31 Solicitar Cambio Producto. Solicitar el cambio de un producto entregado por medio de un cupón de descuento.
32 Registrar Resolución de Reclamo de Producto.
Registrar la resolución del reclamo de un cupón de pago, indicando si se rechaza, se reembolsa o se solicita el cambio del producto.
33 Generar Reporte de Cupones usados por oferta.
Listar todos los cupones usados para una oferta.
34 Generar Reporte de Ahorro Anual.
Generar un reporte que muestre el total de ahorro obtenido por el uso de los cupones de descuento en un periodo anual.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lceUZRQfX7VLYEF4Y0vxwdXx1R4vjuryFgnG-1sWWsfJA58WgugAFmMZuKcUjwFfNhVwfaqvYMQvdmxqS-L0-UB6pL-csxZ-4fu8zenj2uQPlmOEKViyjwAHwmq9EJPe7j7WAxg=w839-h1187-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 33
Nro Nombre del Caso de Uso Objetivo / Breve Descripción
35 Generar Reporte de cobros por ofertas.
Generar un reporte de las ganancias obtenidas por cada oferta para un comercio adherido.
36 Generar Reporte de Movimientos de Cuenta.
Generar un reporte de todos los ingresos y egresos de una cuenta para un suscriptor.
37 Obtener Ofertas Vigentes. Obtener la información de las ofertas vigentes para que sea expuesto por la API en los sitios webs de los comercios que deseen mostrarlas.
38 Realizar Seguimiento de Link de recomendación.
Al enviarse una recomendación, se realiza seguimiento al link enviado para saber a través de un número de transacción si se efectuó una compra por medio del link.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r7I3efqDzmwuTxcXau29Yez-G-ZI6TmQdPMeVMF1vIHWU_rOJfzfEkbYDlCQiPizZ508e1kaInMIXcn1LRl-D1_Y3AdlACGTuEUomcfn4PB8qksCEcuLXrSU5QJScadCcMOxI3A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15cjtdFUKEmLJcP7yM54-Aj5FnSNjcstDfbXTeECF2HzsDyay4oHORVqjDtQMnTy1EjqYvvmpfwtKn3uoPZdyy4OmNZHMppSP0xfbg-IT7BhjSOYsB0LD-z3CqXOETQyIQM6iNWg=w1217-h651-v0?authuser=0)
Universidad Tecnológica Nacional – Facultades Regionales Córdoba y Villa María Cátedra de Diseño de Sistemas de Información
2026 Guía de Ejercicios sobre Máquina de Estados.docx – Versión 1.5 Página 34
Solución Propuesta 1. Máquina de Estado: Clase Cupón de Descuento
Estructura de clases que soporta la máquina de estados.
stm Statecharts
Proximo a Vencer
Disponible
Cancelado
Vencido
Pendiente
EnEsperaCobro
Entregado
Usado
Reclamado
PendienteCambio
ConReclamoRechazado
Reembolsado
Cobro Rechazado
28 Registar Entrega en Sucursal /entregar()
17 Registrar Cobro con Tarjeta de Crédito 18Registrar Cobro con Créditos /cobrar() [y se autoriza]
5 Ejecutar Cierre de Ofertas /validarCierre() [y no es fecha de cierre]
17 Registrar Cobro con Tarjeta de Crédito 18 Registrar Cobro con Créditos /cobrar() [y se autoriza ]
14 Registar Uso Cupón /usarCupon()
15 Validar Vencimiento Cupon /validarVto() [y faltan 48hs]
15 Validar Vencimiento Cupon /validarVto() [y faltan mas de 48hs]
14 Registrar Uso Cupón /usarCupon()
28 Registrar Entrega en Sucursal /entregar()15 Validar Vencimiento Cupon
/efecturarVto() [y hoy es fecha de vto]
22 Reclamar Cupón de Descuento /reclamar()
32 Registrar Resolución de Reclamo de Producto /cambiar() [aceptar y hay stock]
10 Adquirir Cupon de Descuento /new()
32 Registrar Resolución de Reclamo de Producto /rechazarReclamo() [y se rechaza]
19 Enviar Aviso de Cobro Fallido /avisarCobroFallido()
30 Validar Periodo Reclamo /permiteReclamo() [y no se cumple periodo]
5 Ejecutar Cierre de Ofertas /cancelarCupón() [y no se alcanzó el cupo minimo.]
16 Validar Periodo de Cobro /validarCobro() [y se cumplen 48hs]
30 Validar Periodo de Reclamo de Cupón /permiteReclamo() [y se cumplio periodo]
16 Validar Periodo de Cobro /validarCobro() [y no se cumplen 48hs]
28 Registrar Entrega en Sucursal /entregar()
17 Registrar Cobro con Tarjeta de Crédito 18Registrar Cobro con Créditos /cobrar() [y no se autoriza]
32 Registar Resolución de Reclamo de Producto /reembolsar() [aceptar y no hay stock]
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pgGjUXVcjfxi5YouR6rEIb-GQ419ESiwQQOpZbS0S3n9QBbvlnjLF6Fk_RcpXq8JqKqFADXRhCYHyn_q3i_IZzp47h162bqvWg4lsNMWes4eKMiS3WzM6i_TO5dp07NHRfaGL=w839-h1187-v0?authuser=0)
