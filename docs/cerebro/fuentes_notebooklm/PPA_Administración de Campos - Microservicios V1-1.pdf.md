# PPA_Administración de Campos - Microservicios V1-1.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta el 
diseño arquitectónico basado en microservicios
 para un sistema de 
administración de campos agrícolas
, detallando tanto las necesidades operativas de la empresa como sus especificaciones técnicas. Su objetivo principal es 
gestionar parcelas, cultivos, laboreos y tratamientos de plagas
, incorporando además la capacidad de 
procesar datos en tiempo real
 provenientes de cosechadoras y dispositivos móviles. Para cumplir con estos requerimientos de manera eficiente y escalable, la solución tecnológica se estructura en 
módulos independientes alojados en la nube
, garantizando así una operación fluida y un mantenimiento simplificado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Npdz1cCLGeZMJ75Ei5UPqMHsDhJDqVYnQ854IlaaIM0XVHLgSOGciGBsCK0XQyzxxU_kF-abbXXpBg2GRh0t9NtK1VPlOyMd3nXr4WTvXj6D0fcloiotrmmyXG4tZSgEwJVej=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01UYEb6Yzgga0iR9jX3wUN634pb6rZAbVo27ONRluehZsKrQyHB392DklsWzx-Uh0Zhsr-BldPbiqqgngof9yeMY8to2a292dlr5wvo4gCoeONwwrlXFWhaxUH8lBEQ2ZWUnP7=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Consigna de trabajo:
1. Identificar los subdominios en los que se descompone el dominio del problema 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. b. De Diseño utilizando un estilo arquitectónico de microservicios. c. De Despliegue: Distribución de software en hardware (Nodos y Componentes).
3. Mencionar los patrones arquitectónicos para microservicios aplicados.

#### Proyecto Práctico de Aplicación

Nombre del Proyecto Práctico de Aplicación: Administración de Campos
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Agro SRL es una empresa que tiene varios campos ubicados en la zona de la provincia de Córdoba. La Administración central de la empresa está localizada en uno de esos campos, donde deberá instalarse el servidor del sistema, y los demás campos funcionarán como estaciones de trabajo remotas. Para establecer la comunicación entre el servidor y las estaciones de trabajo de deberá realizar una red privada virtual (VPN). Se requiere para los puestos de trabajo en los campos que cuenten únicamente con una conexión de internet y que la aplicación, desarrollada con tecnología Web, pueda operar bajo cualquiera de los siguientes navegadores: Internet Explorer 11, Mozilla Firefox 51.0.1 y Google Chrome v56.0 (y versiones superiores).
Cada uno de los campos de la empresa está compuesto por lotes que se identifican con un número de lote y cuya superficie se expresa en hectáreas (has.). Cada lote tiene asignado un Tipo de Suelo. Los Tipos de Suelo se identifican con números (desde el 1 al 5) y están definidos a nivel nacional (de acuerdo con los porcentajes de minerales, existencias de lagunas, etc.). De acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 apto para Soja, Maní, Girasol). Cuando se decide sembrar un cultivo en un lote (comienza un nuevo proyecto de cultivo para ese lote) deben realizarse una serie de laboreos en éste, antes y después de efectuar la siembra hasta el momento de la cosecha. Tanto los laboreos como los momentos de laboreo y el orden en el que los momentos de laboreo se realizan, dependen del cultivo (Ej.: para Soja los laboreos son Arar, Rastrillar, Sembrar, Escardillar, Cosechar). La división del campo en lotes puede modificarse, es decir subdividir en más lotes un campo o unir lotes en uno sólo, esto último siempre que tengan el mismo tipo de suelo.
Una de las necesidades que plantea la empresa respecto del software que se debe construir es que debe permitir visualizar para cada cultivo cuales son los laboreos ideales que deben llevarse a cabo y el momento en que deben realizarse. Para los cultivos que necesitan fumigaciones el sistema debe sugerir posibles tratamientos a aplicar de acuerdo con la plaga (langosta, hongo, etc.) que se quiere combatir. Estos tratamientos pueden incluir uno o más agroquímicos indicando para cada uno la dosis a aplicar por hectárea.
Otro de los requerimientos planteados apunta a que se pueda saber para cada lote cuáles fueron los proyectos de cultivo efectuados y los laboreos realizados en cada uno.
Cuando se inicia un proyecto de cultivo en un lote se realizan una serie de laboreos (arar, rastrillar, rolar, fumigar, dependiendo del cultivo), en ese momento el proyecto está en preparación. Luego se realiza la siembra del cultivo. Si por alguna razón el cultivo no nace, puede sembrarse nuevamente o bien abandonarse (cancelarse) el proyecto de cultivo. Luego de que el cultivo ha nacido, también deben efectuarse una serie de laboreos (fumigar, escardillar, etc.), se dice que el proyecto está en la etapa de laboreo post siembra. Cuando el cultivo está maduro, se lo cosecha, de este modo finaliza el proyecto. En cualquier momento, por alguna
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32ypmsBCqPMsUXVF87RmorPtMN0k08ouHD8b8hVf4-YXAwP3ztcRF3EsGvq_fXDCLHUHerBeccxf7-Hfrj1s3pZIukPWIj95E4yOSoSe2YCXmswnhwTrWFTGa0uTgsLlOPv1WU=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J1G38mjAxx_i1bXj0jZR-v26AnNG16p9_4pxJo1CV6WyMxZKu0amDbL4ye7DiVY1uKdtBK4X3iXLE11GhxlmLPbACpSCNtujEMZPORnPqX2-8ztanuLUzProbnbRfxcqCO022AA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05KjJKxQvdk3eCCziCFUN6OBszDkeSBKuyrR_jfLigGjwsSPbugUsFLEtEEDSpIiHW8GCvnL4Oy4z_USxIKYtrWXLvvLamufmx860B7ojBMOa_LJCj9Ii4St06nQnwIRo2L2Z0vg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16zEF8lv5HZcYD0pz10wBTIOiXYBDbNkk4r9CyBFV4r3DunsBxv-jZnyH4-32gcU0Vdg2X-QB9ombkE7cYgm3eqHyEbhe8b2pcRZikLjkeYaqRSefSgDmu936s7-f-xLr97G4a=w462-h689-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
situación anormal (incendio, inundación, piedra, sequía) el cultivo puede llegar a dañarse al punto de tener que cancelar el proyecto de cultivo.
Para todos los reportes e informes estadísticos que emitirá el sistema, se requiere que sean visualizados tanto en formato de grilla como en formato gráfico, y que puedan ser exportarlos a Excel y Archivo.
El sistema deberá contemplar que cada usuario acceda mediante una clave, la misma deberá contener como mínimo 6 caracteres alfanuméricos y deberá estar encriptada.
A los usuarios se les asignarán perfiles que determinarán a qué funcionalidades tendrá acceso y esto debe verificarse en el momento del logueo.
Se deberá desarrollar un Módulo Mobile que permita enviar información de los proyectos de cultivos a dispositivos móviles (tablets y smartphones) y también mediante los mismos actualizar el estado de las labores realizadas. El Módulo Mobile deberá comunicarse con el Servidor Web de las Administración Central mediante el protocolo de comunicación HTTP, como si fuera un sitio WEB. Además, el sistema deberá procesar diferentes tipos de datos de rendimientos enviados en tiempo real desde los monitores de rendimiento (AGCO, Case IH, Topcon), ubicados en las cosechadoras. Estos dispositivos pueden enviar, a una determinada frecuencia (que es configurada desde el monitor) datos acerca del rendimiento, humedad y porcentaje de impurezas del cultivo, como así también del estado actual de la cosechadora (nivel de combustible, presión del motor, porcentaje de aceite, etc.). Estos datos permiten generar mapas de rendimiento de cada lote, en los cuales se resaltan con diferentes colores las zonas que más producen y las que están dando peor resultado. Con esta información es posible tomar acciones correctivas para mejorar el rendimiento en próximas campañas, por ejemplo, colocando mayor cantidad de abono en las zonas donde el rendimiento ha sido más pobre.
Agro SRL ha requerido que la base de datos de la aplicación sea desarrollada en Oracle 12c debido a que cuentan con licencias de ese motor de base de datos.
Glosario Término Definición
Sistema Término utilizado en forma indistinta con el término producto o producto de software, para referir al sistema de información que se espera que se diseñe.
Tipo de Laboreo Define cada uno de los trabajos que deben realizarse para poder obtener la cosecha de un cultivo durante la vigencia de un proyecto de cultivo iniciado en un lote. Los tipos de laboreos dependen del cultivo.
Momento de Laboreo
Instante de tiempo en el que se recomienda realizar un tipo de laboreo. Los tipos de laboreo pueden variar de momento y orden, de acuerdo al cultivo. (Ej.: para Trigo escardillar a 1 mes de sembrado)
Proyecto de Cultivo
Conjunto de actividades coordinadas y organizadas con fechas de inicio y fin definidas cuyo propósito es la obtención de la cosecha de un determinado cultivo en un lote determinado.
Quintal (qq) Unidad de medida que se utiliza en la agricultura, 1 quintal equivale a 100 kilos.
Monitor de rendimiento
Dispositivo instalado en la cosechadora que mide el rendimiento y la humedad del grano a medida que se va cosechando un cultivo. También puede proporcionar datos sobre el estado de la cosechadora (cantidad de combustible, presión del motor, temperatura del motor, etc.).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sqJ9mKCY6VmzRJPndrB-cHVQZUjuCTDTnI2QWK1YKRCSc8pMyWvVvHfJe7e7HasYPn70A6O9RNFMhKSOIVlNcyls-ZWO4KFOL04HdTHDb43xWqNDqcjmsrpOW-8VQ0EJ1zczLug=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MdPyYJ3Rc7frQymoLThvWeKIkoQ8-UcnPQ28NCZTezuseaAqtaATWZPyzsVx4kL2UVY8Z4M2WjhB4GdZbMuHepb3uZeXdsU_E_N5gqcfIVpldgzEGTOt4YKxt_kgKzv4SWZF3=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37W3kJ8eG5yvFboVD4L6lTDvR1Dx5HkTOk89AH4OYc04gdi7PvLnztjCdxw2-M0TnpLMmq1heQXU2HYlB7NrHFeVsxsfdmtmrqWzyQU1gQzPazj9LoXkgBxqNZSPFDxqsjEIVtuQ=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Término Definición
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
Un proyecto de cultivo está asociado a un único lote.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1S1a8TmM_MX6MhkvXE9tX0qDn5LPYctl_TlQgDQF97Du-5V7PYLRMwQnCYdmJCdBNs0k9y893eM6Kk0EmAqkkcnnhb2kVASgh3ZVu0WMivcuDYj0m4gK6orYrPcP3VUS6VF8jtcw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mLYT_MNGs033HPAEDOWQc2diMhkKMISwP2kn4XlVT-dNgFc14l4y100bSTjvq02lh0v9IA0-bH29nwi6VE53JaIb8E7MfwyqauNvAregQWCs5Quk4XjMocMcbiBnd1h945D8I1Q=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv160nZJm4EAae9kgi0eSySB_4r9x03nzMsxWYVHdIz1YYiZLgjzXo0jfrIh7wL1dNF3aTlZiAbejkrRvKigq341DiE0MxzdyvOL1a2yAnazix4-jn_PHbMHuesiPKizUbvl0jQldQ=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Reglas de Negocio
Nº Nombre Regla de Negocio – Descripción
6 Relación Campo/Lote
Un campo está compuesto por uno o más lotes. Los lotes pueden cambiar su configuración uniéndose unos con otros o dividiéndose. Se debe controlar que la superficie del campo sea la correcta al momento de la creación y/o modificación de los lotes que lo componen.
7 Lotes y tipos de suelo
Un lote tiene un único tipo de suelo.
8 Tipos de Suelo
Los Tipos de Suelo se identifican con números (desde el 1 al 5) y están definidos a nivel nacional (de acuerdo con los porcentajes de minerales, existencias de lagunas, etc.). De acuerdo al tipo de suelo varían los cultivos que se pueden aplicar (Ej.: Suelo Tipo 1 apto para Soja, Maní, Girasol).
Listado de Casos de Uso
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3O52CD8Jofaa2SNV7BhRBCElA90w_bb-PDDfXD4VHL8vw3ZWdv1eVQJ1DyyEN3JHoQgm1I9o2lp6QlxY0ue7x9TjUXjMj79kT_6SXIcznWBC6Bal2vl4GH5e8kgF92CI8WsAT_yA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3r9H-UMQUR2et5xXLUcIdJOKY1keqULj6Dp5UhMjQL6auk--vdy5WQIK7hfffa11uiuS628DOa6kZSG86Uc69KBLG6Q1-F5ZfkeHw2VKAjZwuZM56pWIp0DfbLU4CvD4kSjWULrg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HwW9mC8v4_XSlxzjqIBeOT9sACZxND6eqVmJbZdz1vZdvG7VICy0h3paiKlcP3xmv7q_bqtXZfHrhkAWG9EUt5ChvIIHNDNa_GSlhFETuEu2ETZ6i-AJTDnr-MjYR9t2hF6xdeA=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Nro. CU Nombre Objetivo
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LwciSfra1hwdF5qbrvl8lADYJ0PtCSq6Ys78VPKfq2oXVWVDhU37ZtVCFMAa5S6KIehb4Q5Mmqwd1rv31WOp60_1TAb1huI-ieTKMvlri4KeA161URhmjIncQ9Rsh_Tp6IyrlkQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Daq0SRGq7Vq0CKsUUanYdehgffjzxply9Gm1nSt0wtWNmt4w9l0aDUIEyIbKeMKMubHxyaNIdneXfuZfsjawTDh5cAhHeYwfZ-pfUlRboWcce4nozMR1rYfxbF7ALbZvZuudj=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TiX2ZQERJKE1z6XVriumggPjKHGQOvM7LlM48GPn_clf60nIXjQayAV4sgsuoGNMYxO43EGlkLuXTvsLSg_-ujrZKG9GMSl5N6paDx64mnvZPr0Gj4uMfAzVH5Mo3bKOPiWta=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Nro. CU Nombre Objetivo
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
66. Consultar Rol Consultar información sobre uno o más roles registrados en el sistema.
67. Registrar Proyecto de Cultivo Registrar los datos de un proyecto de cultivo que se realizará en un lote de un campo.
68. Modificar Proyecto de Cultivo Modificar los datos permitidos de un proyecto de cultivo que se realizará en un lote de un campo.
69. Consultar Proyecto de Cultivo Consultar los datos de uno o más proyectos de cultivo.
70. Cambiar Password Registrar un cambio de palabra clave realizado por un usuario.
71. Cancelar Proyecto de Cultivo Registrar la situación de abandono de un proyecto de cultivo.
72. Importar datos relevados por Monitor
Importar y registrar los datos de cosecha relevados y enviados por un monitor de rendimiento en un instante de tiempo.
73. Generar Estadística de Rendimiento de Lotes
Generar estadística comparativa que muestre para un período de tiempo, el rendimiento de los cultivos cosechados en los campos/lotes.
74. Generar Reporte de Laboreos en Proyectos
Generar un reporte de laboreos realizados en uno o más proyectos de cultivo.
Definición de Requerimientos no funcionales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_P-EP-U_J71AgFQ_6WET5GNxOzudBwr1mat13Y5F3ps4DWKFiezh1dcDfedplXYBUdWm5B9V8EyZ-OAlEjjBEmrbjiFQI3BfdrBtJr6MjL4GoShkvIcqOuwOCGPjYpx1itCzH=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26r22DAJfPJU_kcWmYj0VnXdsia9bSrTLZQG_I9ciaJztgyjuY5qBfqrMPKOzR6Ao5d9lm9rBUYYUMDQ6So6s90Q6FiMNgAqHiUtftTxkvrD0-NS0_pY3h-v8VtBOJWXOcfij3xw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31a83U5HPvTSHVFaOGWdzZ59ckt8JD_TmhYOZCShaucECHS3hha8tQdKTmsAa6CFZOZmdMPUGEezat89fi4W1LVqdZS1iB9ZcQvLiUEv8s0EX24mxACuJdgjXiCpDEORR0RTDr7g=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Nº Nombre Descripción Características SPA Prioridad Explicación
1 Comunicación mediante VPN
Se deberá utilizar una red privada virtual (VPN) para establecer la comunicación entre el campo en que funciona la Administración y los demás Campos
Compatibilidad NO No aplica. Esta forma de comunicación no afecta la arquitectura del software.
2 Requerimient os para puestos de trabajo
El producto de software no debe demandar ninguna instalación en las máquinas de los puestos de trabajo. Únicamente deberán tener una conexión de internet.
Compatibilidad SI Alta La arquitectura del sistema debe ser distribuida de manera que los puestos de trabajo sean livianos es decir, no se deberá realizar ningún procesamiento vinculado a lógica de negocio y administración de datos. Se desarrollará un producto web.
3 Lenguaje de Programación
El lenguaje de programación debe permitir el desarrollo de productos utilizables en internet.
Compatibilidad SI Alta El lenguaje de programación a utilizar deberá soportar el desarrollo de componentes de software web.
4 Visualización de Reportes e Informes Estadísticos
Todos los reportes e informes estadísticos deberán mostrarse tanto en formato de grilla como en formato gráfico.
Usabilidad NO No aplica El formato de visualización no afecta la arquitectura del software.
5 Clave de acceso al sistema
La clave de acceso al sistema deberá contener como mínimo 6 caracteres alfanuméricos y estar encriptados.
Seguridad SI Baja Se deben desarrollar algoritmos de encriptación que contemplen las condiciones mencionadas.
6 Utilización de Dispositivos Móviles
Permitir la carga de proyectos de cultivo y la actualización de las labores realizadas mediante dispositivos Móviles: tablets y teléfonos inteligentes.
Compatibilidad SI Media Para ser compatible con dispositivos móviles, el desarrollo web debe realizarse en HTML5 que es un lenguaje de arquitectura web responsive y se adapta a las diferentes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37PBmgexQNo6254xApMMto2_1sJ9JyBJCdnm05oNE1dth9T0t7pX8xEECr2G6IEmmN9Czkx_qKdo4k2ip21-bWuZJ8H3zEyFPlx4Nw9jpNUgnJhgTqLCzFBAnsaimSTs7AP1YC=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LcW1mtz4H5tqTmnH_Aza6kmqAiKkkaz_dJcC6tIN5DheIrke-3oGobfRgKfVT-rDQnQNeLgA3LUxCEvJ4THmtVPgLe_pvg874OVeifzatQAiPqioQXoaWxtEFbWw3RXGBhD1T=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CFhiLax47vbGDlQRe1Om8XRjf06_gfLYookdd9CnMx8Ux_W5p6WHaYA6sYs9Vm9AHWXFfsgweMMboorVZ85KXX61oIqOweK5bBl5C2JzzpVTSZ_N1U0ScZgAT-0HzwMbC5sQfrQ=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Solución Propuesta
Descomposición del dominio del problema:
características de los dispositivos.
7 Importación de datos
Realizar la importación de datos de diferentes tipos de formatos desde los distintos Monitores.
Compatibilidad SI Media Debe construirse un componente de software para gestionar la importación de los datos de diferentes tipos de formatos registrados en los distintos Monitores.
8 Base de Datos La base de datos de la aplicación deberá ser en Oracle 12c.
Compatibilidad SI Alta La base de datos debe ser relacional y resolver el esquema de encriptación y las auditorías de transacciones.
9 Exportación de Reportes a PDF y Excel
Se debe permitir la exportación de los reportes y estadísticas a formato PDF y Excel (XLS y XLSX)
Usabilidad No No Aplica No se requiere ningún módulo o aspecto arquitectónico diferencial para resolver la exportación a formatos de archivo Excel y pdf.
10 Exploradores habilitados
El sistema se debe utilizar con alguno de los siguientes exploradores: Internet Explorer 11, Mozilla Firefox 51.0.1 y Google Chrome v56.0 (y versiones superiores)
Compatibilidad No No Aplica La utilización de un determinado explorador no define aspectos arquitectónicos del software.
11. Despliegue en la nube
Para lograr un despliegue más rápido y sencillo, y también poder reducir los costos de despliegue, es necesario que los servicios sean desplegados en un solo servidor en la nube.
Mantenibilidad Si Alta Se deberá hacer uso del patrón Multiple Service Per Host para garantizar el despliegue de los servicios deseado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rxQlRUC1hMiYFoumPntSbLSrTHef7meYFOZOl5K3J9_O3wNIeHvwObS2DPVE4BC3YFMs3Kl-NUT27ig08GckP9rOLpHTsHYjz-k63y1mrhAKCdasmIzj8hoJu6g5wqmg-PFpLxQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zGGWovGohi2vcQMRxkZRa3Or3leNYHdLg3fReTkSfr5MTb5Ym2PgTUy_iOsCGLN_Ny9iy2TSJ-SMf5mW7jYdQ4lKiH2_xHi8Lqe8t2IZmC8VnkoClN_Pg3X94TgcX0HonkNAKBg=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QaQgAqPe6sDlmYvu1vGRnyWSX2Z0I96bV5pUNvsu99_UENgPsni70D2LBUbah_bXtNvf6w5vPULLpNh0dxMNCWdwdTQ8Uh2kpQnCdkxL2bztg4hJsqcSwA6lXYuj5C3JjknB8zA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2edD0LJwHB3Gq4FK28Z5ZDOeA08CjqBOQA7rC-aNBjTe7dCpOkmBMp0RodUgph3PQDov9QgkrjtMs-Sd5kuYsUTyLeYvqyNJ8ITKJH9JqumTiKl5ia9dZo9xAsht3Z3PS96LIpUg=w1280-h869-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bASzjX8L9fsDjn6H8nxo5-z9ZV9P8p8ZzSdvVEIDMvErvbj8UkVKd3x9oOKW3k_KMiLcdAklNRvqXKkroBgYDEpu8tJiCbJMg5FV1LJR_O3JMKrH6gAOhu0ZkDwwD56U_EBpe=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QW1prGkTpLyOEq6z5HgQQYMTh_gRWC5t3X0UzXxWgd1fhiUPHrveOnysuO5cfoGydVoVhQFhUr2WGkTtPlweG9qzgpsh6Lz3q6fhDkgpBvwnJRheWexEyYVudjAjXUYFte_zQOA=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HYnAV65EPHcQy6iOwRwjkuxLGvBWaHfmDPEjN_rmLxPpTlCz4lqSOSltD1Q-OnjeRDYcpuFhhuLbE_IjMvWqn18Sn34V0PRfQnvNA7glTnuGKv0s_aKhnRIs2qpcLZkmu_Zpw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3crBZkqwuG8-D1k1y5DBmbrQEiiF9eb0nUeRUwQRiDoEmrkIGjifuXHwlJ3YkCgnTFC-XIs5EvRCYkogMOGiY8Q0iLa_NK6c5ptPI-UnhNxDqxrKUFGcJvhcwrIQlwN2H1DwWt=w1280-h1051-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Vista Arquitectónica de la Funcionalidad
El Punto de Vista para la Vista Arquitectónica de la Funcionalidad define los casos de uso de la Administradora de Campos que son significativos para la arquitectura del software.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QDxsSTQ4anfCsew1aq57qjxxLRF67p_tCjxgVBE9EMSZdlTLVHgmnGjvyAI0ta9iBs_mNyfKY6F5mdvRc-NDXGkgzrU4ZP6oOkiIuJ-0Dli3LH2MMY-d0gB1jw013-xPPVyPjzA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GshnDqWfF2GWzrGzTbpF1iR1B4iaDXts8qVVqwtiMj4ITbzUR4zdB720PLAB4o5_UYZ0RLsCtaguB_AHAogxIbljUE8n_VaKjSxn6pX2evkK8eJdhK52g6TIzUoiZ-fBVsVaU5g=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vz7QtwdAiaCHuhIzV4ldIxtSP2p742Fs0r7lcU5B-Wpsy5mARk12CskRk-dOgKQ746TCw3RQXLbXk00Dkykepv7U7RL66b86HI5sBDR6RwRlhb0bdlsU05Q1G6yJqd1aXMa-jiA=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kdGDlTQuHwupf8q35NJ74YRlGRKWEFpr_pDJ062qS7oUckL2XBHYkRnNDn4plM8aKXdhYf5hJK1N77thAMa1qq_pW3tCj6xNg9ybACsD41LpsChMtlzHZ64xRpWQcDQt3YfIo0g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jq3gGRydgTSaVedG61uyi1NLovW-LjOjem7F3RZTKfLjD25u60u_oaY98N-jYqKK2hlqBd2Nl1JXXK36N7ms7R9dkZUWJRO34NqAq_U2n48YGQeuEyhpaKnJgjm9tpHi2jQAaLw=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fAbzc57fHFfDT4FLvwQsDRdk8eA9Cf767xOzPt-4YmLwmakbmOWlbayk-rWSEVEOJlBmRpj_4sW7iWOVy99RRh0aoH4_p_pEDB2oRo9XcaL4Sw_88f0Tb_SRaiENK5E1vXMa6mg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aaoqnB7dt0l1OTKaliD4QrsZ-SqdnezeBCcZ7fmevZZSmUACuh_CpCYsWwuV1XVEi_3mpoZPJNkDpzz0rFLEV-bT4_Nkj713vLaeKdJLSMe78WwOTzRgydqqwi-WAuKWOPhxyAQ=w1224-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Vista de Diseño global
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Dq7GiTnMC8KRZs3KfZvYel0IN2cn7aoZyOzbom49mybyzP_s98fR3DkH4REm3vxso9NAcIF0hZPZ21DHp0v5OdSvIDvfu02OTmqQePxJJqVSY6xnORAjk2Jm8hoNo_30JlkkeYw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LAZSP1-gmMKW8KPpGl4eHjnyQKfXfu7FrZ0p1Iu4YEXv6e0W3MlIPVAZ6G8mua0SRTEagtBRMwJzNdV3leHu9U5ZczCiZQWeCeOFOQftTDdCpZuEgI0vkh9QQ-WRXEEsJ0AkK=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-VGCHOZnuDWNw2E0KHwfGTK5uhbvE3XMIZOirh2HVUhlZ54FHiu3leTfuy2zW-cWM4SgUJj45sUyJkIH796MCdjjk7EgfkCgXXtkaoc75e4UMaL_o-SM5e5TlPEViGu5OxY_RJQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sDAU2w0KsOKh7uIjLm2oBJSkTOlNxtthG2hBw7fBAA_2hKWurnZ1Y__7KJRuGib7d6dpKCkfFA25s2qBVXIWxv1mOQaPqpV7v8eA8223w9D-yqoKEn1ePtHyGJT2sNmQLrLZl=w1280-h835-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Vista Arquitectónica del Diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QkzrrineBh1Bxg27D-iE1Fes2BHp8ATnj_qQSgUAmbSwESykyNI3PJvbPFyukDtF43ph4-KqjKcZf__qxdx5T_3kUbw7MOCqKSqb1rQ289nFy6JbQmO8XYEH_OwmsP_oqNyBCLw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wJtuepvp-g_lhJnKG_4rjOyoGKfxZD73W1jK-r4Jp5NLkSH7p3UULZo9BD_NU1B7QNEkPmzxrzEWMAC3svDtbqARLhs9RBvv0UA6ppFnO-DTy7__AyX-FHYZUoJUDa0gkA5h33A=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YyetX7gaGEsaFT-FLiGLBuPuIhpPCvq2wuxVduif0K1yU_zPIYg-3YBQk1nTnRupWefP2O9-NiuYKuoeOaQDhF_vFomv4D-wwnScg04e4IuazmAEAPjqsOQ1ldNEAYQOiucXzkg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WBTY0eLVmd4HKB12WOHnWOFdbOGCsRTwOtKbKjQEFEaeqZBuJQ8dwjLjzrikylIEtuPbrYSsDohrBE8gvlXmHJ_Stnp0RSeM751zAed1dvBfpprHpQ0GzkLOPMQJuh-oJtkc_gw=w924-h1280-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Vista Arquitectónica del Despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10aktv2ShnUS1002wYDwcsDLC0y1oWxFnKw3VTmP7aEifJwgY7p3GWoa2Q-Dcx456fvT_3yMDsDP77ECe3dcj3oH9PTeIE9cQT0vfv0_ST6UCeFGfZgi2Xq_V7n6vm7rAZVDGzqQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yDjbTbFC2vvaGQu4FtA53oWWYMnLJn9un8-4apQQwR-73pE1GjZy72cYFWi3w-w3UpokCMdACr-ghNYFBZhoBmLZ71I7E_yfYjMuf6lpWtAXyhSMy6i7pnnTCKMyLSJMRgiJ4=w162-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ek6QtL5OaCA55ojMdC-JoRRHTQaxGH3aUaCJoTprlrPBplic74-O17Fpc7bNdUJ4VIT91f2O_NQLa1FdEPt2rbvgjiK_wjGENbbsqy0mIMUvx8lne8v8UUuPySzqfcBsqNIgT9g=w163-h170-v0?authuser=0)
Proyecto Práctico de Aplicación Administración de Campos
Diseño arquitectónico con Microservicios
Nombre del Documento: PPA_Administración de Campos.docx – Versión 1.1
Historia de Cambios
Fecha Versión Descripción Autor
26/05/2025 1.0 Versión Inicial para microservicios Marcos Pomenich Judith Meles
26/08/2025 1.1 Se cambia la interfaz de reporte al servicio ProyectoDeCultivo.
Judith Meles Sol Vega
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36laLVG7htXd79-1p-UvhqvIOWEHGnsS-ZHbI0XKgC1rK8mH1ZHc8Lp5UYWpyY5xeF4V6VsjTzzQ5ynGusToYu-9VjdF4OVDTLj-q7i-DiNceRnCz10ARXaV3MdcfcTVrWARPvLQ=w839-h1187-v0?authuser=0)
