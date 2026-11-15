# 2026 Guía de Ejercicios de Cambio de Requerimientos.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presentado por la 
Universidad Tecnológica Nacional
 funciona como una 
guía práctica de ejercicios sobre evolución del software y cambio de requerimientos
, diseñada para estudiantes de ingeniería. Su 
objetivo principal
 es enseñar a los alumnos cómo adaptar y modificar modelos de análisis, diagramas de clases y casos de uso frente a 
nuevas necesidades del negocio
 en diferentes escenarios reales. A lo largo del texto, se analizan diversos casos de estudio empresariales —como un centro de atención telefónica, una importadora de insumos, una agencia de turismo, una herramienta de evaluación de personal y un semanario de avisos clasificados— detallando los diagramas originales y las 
solicitudes de cambio específicas
. De este modo, la guía proporciona tanto los 
enunciados de los problemas
 como sus 
propuestas de solución
, ilustrando con precisión cómo impacta el mantenimiento evolutivo en la 
estructura lógica y funcional
 de los sistemas de información.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aYIFo9kJMetIhKcpR6RAGeiN9lUe5ZlcFKXeSF2BtQS3r0hRgB4v_PO8Ms84u9hShRCysf95GfU_j3xm4-UiyFWWS5mMmJEAsrWLLj6f7XENpz8AZPIDYzPa8yJfySAtpUFkDrQ=w139-h191-v0?authuser=0)
Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Consigna: Para cada uno de los siguientes casos de estudio se requiere que se implemente el cambio de requerimientos y en función de la s ituación planteada:
1. Enumere los casos de uso que se deberán agregar y/o modificar como consecuencia de la incorporación de los cambios requeridos.
2. Realice los cambios correspondientes en el Modelo de Dominio (Diagrama de Clases)
Contact Center
Se trata de una empresa cuyo objetivo es proporcionar un “centro de atención multimedia como único punto de contacto”, entre Clientes y consumidores. Contact Center ofrece diferente tipos de servicios tales como: Atención al Consumidor, Mesa de Ayuda (Resolución de los problemas referidos a Tecnologías de Información), Tele cobranzas (Gestión de cobranzas telefónicas a clientes morosos), Telemarketing (Promoción del portafolio de productos y/o servicios para realizar ventas o suministrar información de productos nuevos o existentes), Tele ventas (Venta y postventa de productos a través de llamadas telefónicas salientes o atendiendo llamadas específicas), Estudios de Mercados y Encuestas (Para conocer el posicionamiento de los Clientes en el sector o en la industria, la aceptación de sus productos, y el posicionamiento de la marca). A continuación, se describe la operatoria de “Atención al Consumidor”; la cartera de Clientes de Contact Center en este servicio incluye a empresas que fabrican o comercializan productos de limpieza, de consumo masivo (tales como jabones líquidos, en polvo o en pastillas, anti manchas, suavizantes de ropa, etc.). Contact Center cuenta con personal especialmente entrenado que brinda de manera oportuna respuestas correctas a las consultas realizadas por los consumidores, homogenizando el mensaje de comunicación y el tratamiento de la consulta. Cada Cliente de Contact Center tiene una línea telefónica gratuita (0800) a través de la cual, los consumidores pueden realizar consultas o solicitar información de un producto; es decir que cuando una persona se comunica telefónicamente, la llamada ingresa a la central telefónica de Contact Center y dependiendo del número entrante se deriva automáticamente a la célula de Representantes de Atención al Consumidor, capacitados para la atención de consultas de ese producto específico (componentes o ingredientes utilizados, dosis recomendadas, formas de uso, manera de eliminar manchas, etc.) Cuando el Representante de Atención al Consumidor atiende una consulta, la registra en el sistema ingresando los siguientes datos: tipo de consulta, criticidad, producto, nombre, apellido, domicilio y teléfono del consumidor, descripción detallada de la consulta. El Representante de Atención al Consumidor analiza el requerimiento y valida en la ayuda en línea la solución; en caso de poder solucionarlo comunica las acciones a realizarse al consumidor y las registra en el sistema, cerrando la consulta como resuelta. Si no puede resolver la consulta, la deriva al Grupo de Soporte de Producto (integrado por personal del Cliente) comunicando al consumidor: número de consulta, tiempo estimado en el que se comunicará telefónicamente la solución, el cual va a depender del tipo de consulta. Si existe algún problema técnico y no es posible derivar la consulta a alguno de los grupos resolutores (Representantes de Atención al Consumidor o Grupo de Soporte de Producto), se le debe asignar el estado Demorado (para evitar que siga sumando el tiempo de solución). Es relevante destacar, que una vez solucionado el problema, el recurso que demoró la consulta (independientemente del grupo al que pertenezca), debe volverlo al estado que tenía antes de demorarlo, para luego poder derivarlo. Cuando un Analista de Soporte de Producto -que pertenece al Grupo de Soporte de Producto- recibe una consulta, analiza si puede solucionarla. Si puede solucionarla responde la consulta registrando las acciones a implementarse; si no conoce cómo solucionar esta consulta específica, describe un mensaje comentando esta situación y reenvía en ambos casos, la consulta a los Representantes de Atención al Consumidor, para que se contacten telefónicamente con el consumidor. Con el fin de evaluar la calidad de atención y efectividad de las soluciones, Contact Center mantiene el detalle de todas las acciones realizadas asociadas a una consulta por cada uno de los recursos involucrados, desde su generación hasta su cierre. Asimismo, diariamente realiza el monitoreo de las llamadas de los Representante de Atención al Consumidor, el cual se sintetiza en Informes semanales que son enviados al Cliente. Periódicamente,
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05_KcEYlPEuoI-6IzOrn267PmR9ybfurcZR3YCxesVE_jdzJWgEeTFwcnxwOxFzxFiPf0F-QyRPsq74COjD-N5d-LSka6geIrQvOtXq7aSv6M7Nu-uDxFaKwCqaUJmalrN9Bpa=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18Vc8rnGn5oOr0l827uBxUoTQ4FJ8mbl_t1zF6MPsDANSfg0KGo7Kx7DOW3bjDubDcx1OyVFu8VaXE8P9k0d5a1rdGF-td_ARnbpJ1HttErXO7DQwURKeheFixoR724qpbwTX-=w139-h191-v0?authuser=0)
Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
también envía a cada Cliente un Reporte de Consultas de Consumidores, en el que se detalla los tipos de consultas realizadas, tiempo de resolución, soluciones brindadas, porcentajes de llamadas solucionadas por los Representantes de Atención al Consumidor y de llamadas derivadas al Grupo de Soporte de Producto. Pedido de Cambio
Se necesita incorporar a l software la funcionalidad re lacionada con la registración y posterior consu lta de respuestas y/o información predefinida que ayu darán a los empleados del Contact Center con las respuestas que deben dar a las personas que se comunican. Esta información y/o respuestas predefinidas dependen del t ipo de con sulta y del produ cto y el serv icio contratado por el cl iente.
Vista del Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1l_AzjKHsDluZUVjjgjtNeD1_Ok0Dffny1UV_8Wa0FoqlnjjouJycYZTu3G128Licvdw-apepkKqSkVYhnQoR51xySzKYI-np_EJC3WGM9lISlvHECnIgS5p4kx3uSM_K8LV2bNg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mJOaLJZzPXZ9tMBCS2HZ4clvJA3g_m1aPzy5jCoc9yu9FIFPjZDAseCf-Ft_H8yZQlLcDDLveFaUSNK_fUt_IAJJ2og4XwvgSXsuFGDYSGdG9b6lnaHBaSch70LF-elBw9Uf3dw=w139-h191-v0?authuser=0)
Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
class Modelo de Dominio
«entity» TipoServicio
descricpion nombre
getNombre()
«entity» Producto
descripcion nombre
getNombre() «entity»
NivelResolucion
descripcion nombre orden
getNombre()
«entity» Recurso
fechaIngreso legajo nombre
getNombre()
«entity» Accion
descripcion nombre
conocerTipoRespuesta() getNombre()
«entity» Estado
descripcion nombre
«entity» Actuacion
descripcion fechaFin fechaInicio horaFin horaInicio tiempoEstimadoResolucion
conocerAccion() conocerEstadoActual() conocerEstadoInicial() conocerRecurso() mostrarDatosActuacion()
«entity» Consulta
apellidoConsumidor descricpion direccionConsumidor fechaCreacion nombreConsumidor nroConsulta telefonoConsumidor
buscarActuaciones() cerrar() conocerActuacion() conocerCriticidad() conocerNivelResolucion() conocerTipoConsulta() demorar() derivarGrupoSoporte() derivarRep() guardarConsulta() informarCliente() new() resolver() retomar() sonTusParametros()
«entity» Criticidad
descripcion nombre
getNombre()
«entity» TipoConsulta
descripcion nombre
conocerTipoRespuesta() getDescripcion() getNombre() setDescripcion() setNombre()
«entity» ServicioContratado
fechaFin fechaInicio
concocerTipoRespuesta() conocerProducto() conocerTipoServicio() estaVigente() mostrarNombreProducto() tieneSACContrado()
«entity» Cliente
cuit domicilio razonSocial
conocerServicioContratado() getCliente() mostrarSACVigente()
producto
1
consulta
0..*
actuacion 1..*
nivelResolucion
1
criticidad
1
recurso
1
servicioContratado
1..*
tipoConsulta
1
accion 1
tipoServicio
1
estadoInicial
1
estado 1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv265WnjWUjzTXGeMDenkmMxK8IF_C3g03smPP-yv9yao9KWkSfiCW_OOW7I092HfgRQJjk0LacQeE1B3MDhJ0SQCdUtvDOL_1lGHrvfEr5Nu7WJemdf3hFD3-5yLaBdARbjHoxa=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Vr4wMXYhmCq2Ni14OgkJDDrwl1L2Lu84Lrh2sREY3vew__PrkqIx2PQnAMxoZMWqJpsuHP78gxT4BwNN4ozRB3GVchVTRhzOgMcPq6cM10a2J_j7ghp8YozDspP-OhDv8657IrA=w139-h191-v0?authuser=0)
Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Importador de Insumos de computación Arg-Computers es un a empresa que se dedica a la importación y venta de insumos de
computación en dist intas ciu dades del país. Las ventas se realizan exclusivamen te a mayor istas de la zona de cada sucursal.
La mecánica de la importación se da a partir de pedidos a prov eedores que se real izan cuando el stock de los produ ctos se encuentra cercano al n ivel mínimo.
Se real iza e l pedido al proveedor respectivo (proveedor of ic ial de cada marca de productos, por ejemplo, Hewlett Packard o Samsung). E l proveedor envía un acu se de recibo (generalmente vía e - mai l) para informar que el pedido ha s ido correctamente recibido.
El proveedor analiza e l pedido y luego envía un detalle de los productos que posee en ese momento para poder cumplimentar lo (por lo cual e l pedido real izado puede estar total o parcialmente con firmado de envío); los restantes productos del pedido son envia dos en el lapso de 15 días (parte del convenio entre Arg -Computers y sus proveedores). F inalmente, a l momento de la recepción de los productos enviados, se registra la cumplimentación total o parcial del pedido.
Un pedido realizado a los proveedores puede cancelarse en cualquier momento, sólo s i no se ha recibido n inguna entrega del mismo (es decir , no existe cumplimentación total o parcia l del pedido). Es necesario contar con información de todos los estados por los que transcurre el pedido y sus t iempos de permanencia asociados.
La venta a los distr ibuidores se in ic ia cuando éstos realizan solic itudes de reabastecimiento desde la página web de la empresa, donde también pueden consu ltar el nivel de stock de cada producto y la fecha de reposición de aquel los que están en falta. Los precios de venta a los distr ibuidores dependen de la categoría a la que están asociados, la cual a su vez depende del nivel de compras que realicen a la empresa. Estas ventas concluyen cuando Arg-Computers entrega la total idad de los produ ctos correspondie ntes a las sol ic itudes de reabastecimiento. La modal idad de entrega puede ser total o parcial , lo que implica en el pr imer caso que la sol ic itud de reabastecimiento se cumplimenta en una única entrega. En el caso de la entrega parcia l la solic itud de rea bastecimiento se cumplimenta en diferentes entregas conforme se tenga disponibil idad de los mismos, en este ú lt imo caso se incrementa e l costo de envío, dado que es más de uno. Esto es e lección del Distr ibuidor en función de la urgencia que tenga para recib ir los produ ctos.
Cabe aclarar que Arg -Computers vende tanto los productos que importa como equ ipos completos que arma a part ir de los mismos. Estos equ ipos armados son vendidos a un precio más bajo que s i se compraran los productos que los conforman por separado. En este c aso los equ ipos armados se consideran como otro producto diferente.
Pedido de Cambio Se solicitó que el stock se administre por sucursal para mejorar el tiempo de las entregas a los mayoristas de cada región del país. Por lo tanto, cada distribuidor dependerá de una única sucursal y la disponibilidad de productos a la hora de concretar una solicitud estará dada por el stock de esa sucursal.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1y9RILWat0jSjLxmQv0zvtDmyVUm9LI3MtnUjqQSbi3mEK2u9ygdO9xjDwkQ6nVwSgIypnpFhZBoCoKEGfbXnQEKil_JEqq7atZ4LHBVRFyG_33WoTpdXESFZq8V7uD_0nvSF6Sw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wW5BTKLi742PncWlBbwgcua_D-eu4LBwNKoFvrbqmToxaEHb7FYQXpL4smr_uwND3m58a75Z2R0InksHxAD7dEPCELAQ6EuTTfcSUgTDryej1Jn7uRe9E3fyH2iy53KVvY_xAZg=w139-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aM_ZfgzURbliKWIxQ1Qambk5d8m274eC9mE8Wy9G0o2qvxn7MTkiDSugaGehsRgSRhsGVDywUpWJSjIcglJ9EBqpi4Te0vD9kYfJGO95k6ZKvZefc7RoGAcyyQm68gwWEjb_4mA=w1280-h1222-v0?authuser=0)
Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Diagrama de Clases de análisis
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BvcXX7-rwBiJNoQbUEll25rVl--gjFzx7opJbpdkxKmsrG-hAQdQTT5xf-4P48XPfe-r9DwaMzspyPQapcP_Y3YUJfzC-BIJTqEdwaphtPghb6libyOknHL2Rb7FuhHSaRqvwqA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1INI2_YMXBsZoO8oG3QcvyejLadqE1U2mBV5TmDDFO-jY51kfVFqZChHEcfldb-28CN-b9gZeEtkqgmwtrGELa6uqK8Dx8kWQq0EQRFbaGepEqDuxb4iYGCAVSXcVs2kENml-j1Q=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Agencia de Turismo Una agencia de turismo se dedica a armar tours por Europa donde el traslado durante el tour y los hoteles en cada ciudad visitada. Además, se incluyen algunas excursiones para cada ciudad incluida en un tour. La agencia tiene definidos tours de una duración fija, a partir de los cuales se organizan viajes con diferentes fechas de salida. Un tour tiene previamente definidos un conjunto de hoteles que se pueden ocupar en cada ciudad. En el momento de definir un viaje se decide cuál de los hoteles disponibles será ocupado y en qué habitación se ubicará a cada pasajero. Para esto se tiene en cuenta si los pasajeros vienen en grupos de amigos y/o familiares, y qué capacidad de habitación solicitaron (una pareja con un hijo solicita una habitación triple, dos amigos solicitan una habitación doble con camas separadas, etc.). Cabe aclarar que en el caso de que un pasajero solicite una habitación simple, ésta tiene un costo extra. Para realizar un viaje se arman grupos de pasajeros a los cuales se les asigna un colectivo y un chofer. Puede ocurrir que se cambie de chofer y/o de colectivo en alguna ciudad del viaje. En el momento en que se diagrama un viaje de un tour se debe asignar un guía que acompañe a los pasajeros en cada ciudad a visitar. La diagramación de un viaje incluye además la asignación de guías locales (además del guía que acompaña a los pasajeros durante el viaje) en algunas excursiones de las distintas ciudades visitadas. Algunas excursiones requieren de recursos especiales como ser auriculares para escuchar a los guías o vestimenta particular. Puede ocurrir que ciertas excursiones no se puedan realizar si no se dan las condiciones necesarias (buen tiempo, disponibilidad de lugares ajenos a la agencia de turismo, entre otros).
Pedido de Cambio:
Se ha solicitado implementar un cambio para contemplar la definición de los restaurantes con los cuales se podrá brindar el servicio de media pensión. Se pide que el sistema permita establecer en la definición del tour para cada día, en cada ciudad; si la media pensión corresponde a almuerzo o cena y en qué restaurantes es posible comer.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv076S1QVG2-cFKNF5sWE_vWuy04luCBvXdgF2aWVO_AwX3Va9ec-BZ6ENKpkV_YKO1A0S3Qon3-G8XRgy6fy1Zlz0lwy3PrQaNbhPJf_aRei-7oGTFaXI68JbeAokqsYoRF9fPW=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AoDlh1NUXZoHQ4_0Mr2dRuOYgS63WJNTXazWJ-M-1patMYsaVMJ-3b0PxdJKHiCHfgxtCJGJCzJic4ZfrggC3Ec9BhL72Q-nmyvfJFgGTYE94GNXNwxYcRMrVz_6XHVbB8RmiQA=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Diagrama de Clases de Análisis
class Domain Model
«entity» Grupo
- asignado - fechaCreación
+ getDatosGrupo(): void + ocuparHabitaciones(): void
«entity» Pasajero
- dni - domicilio - esReferente - nombre - teléfono - tieneAcompañantes: int
+ contarHabitaciones(): void + getDatosPasajeroReferente(): void + ocuparHabitaciones(): void + tieneAcompañantes(): void
«entity» HabitaciónContratada
- cantidadCamasDosPlazas - cantidadCamasUnaPlaza - capacidad
+ esDeFechaDeTour(): void + getCapacidad(): void + ocupar(): void
«entity» HabitaciónHotel
- cantidadCamasDosPlazas - cantidadCamasUnaPlaza - capacidad
+ estáLibre(): void + getCapacidad(): void + ocupar(): void
«entity» Hotel
- descripción - nombre
+ buscarHabitacionesLibresParaFechas(): void + getHabitaciones(): void + getNombre(): String + ocuparHabitaciones(): void
«entity» Ciudad
- nombre
+ getNombre(): void
«entity» Tour
- fechaRegreso - fechaSalida
+ buscarHotelesDeViaje(): void + esMayorQueFechaActual(): void + getDatos(): void + mostrarFechasdeLlegadaViaje(): void + mostrarGrupos(): void + ocuparHabitaciones(): void + tienePasajeros(): void
«entity» DefiniciónTour
- duraciónDías - nombre - tour
+ buscarFechasDisponsibles(): void + buscarHotel(): void + getFechasDisponiblesConPasajeros(): void + getNombre(): void + mostrarFechasLlegada(): void + mostrarGrupoDePasajeros(): void + ocuparHabitaciónPorPasajeros(): void
«entity» DetalleTour
- fechaLlegada
+ getFecha(): void + getFechaLlegada(): void + getHotel(): String + ocuparHabitacionesDeHotel(): void
«entity» DetalleDefiniciónTour
- cantidadDías - orden
+ getCantidadDías(): void + getCiudad(): void + getHotel(): void
hotelReservado
0..1
tour
0..*
grupos
0..*
1..*detalles ciudad
1 hoteles
0..*
1..*
pasajeros
ocupaciónDeHabitaciones
0..*
1..*
detalles
definiciónTour
1
ciudadDeHabitación
1
habitaciónAsignada
0..1
1..*
habitaciones
pasajerosAcompañantes
0..*
detalleDefiniciónTour
1
habitación
1..*
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aqKaDjGOmmvMilyGF1CnC-XWR8nzZDlfzXE76xID1VRDK6rs-qDfBukHR-OO5rjjHcBB1lMhaWmqL0cpOOCf4pycw1TDgqyY248y9tzUpQNyL5opDizJiFjtaVM1bUnRJXlw50g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OuE5qusPchhDrX7AK8cGNQIGOtjUtgAn90gC-sTx9vTOhpet0PbtthqxMlP4dPD-N_7-0hc-OpcBqCP19ICV7Z4gGdUEu2ssZ8H6QVhsxlcLmyYnsuRT8F2DqP5qZk7xtOVbZ7g=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Software para la Gestión de Evaluaciones de Desempeño Una reconocida empresa de la ciudad de Córdoba necesita un software que le permita administrar las evaluaciones de desempeño que anualmente se le realizan a su personal. A continuación, se describe la operatoria de negocio para la cual se espera que el software satisfaga los requerimientos. Anualmente el Gerente de RRHH define la plantilla de evaluación a utilizar, pudiendo decidir continuar utilizando la vigente de años anteriores o bien definir nuevas. Esta plantilla contiene la información de cada una de las competencias a evaluar (por ejemplo, Trabajo en Equipo, Proactividad, Gestión del Capital Humano), las cuales pueden ser variables por puesto (por ejemplo, Jefe, Gerente, Analista) y pueden o no dividirse en Sub-competencias. Para cada competencia de menor nivel se definirán comportamientos posibles, cada uno de los cuales tendrá asociado un grado (valoración cualitativa) que se corresponderá con una valoración numérica para esa competencia. A continuación, se muestra un ejemplo: Competencia: Trabajo en Equipo
Comportamientos Grado Valoración Numérica
- Coopera y colabora con personas dentro o fuera de su área, buscando inducir el mismo comportamiento en los demás.
- Acepta todas las opiniones incluso las contrarias a la propia. Expone con respeto la suya.
- Ante una situación de divergencia, invita a transformar la disputa en una oportunidad de aprendizaje.
A 100%
- Coopera y colabora con personas dentro o fuera de su área.
- Intercambia opiniones e información con todas las personas con las que interactúa.
- Ante una situación de divergencia, mantiene el dominio de sí mismo y hace preguntas orientadas a compartir hechos, datos, intereses y expectativas sobre las que la otra persona basa su razonamiento.
B 75%
- A solicitud, coopera y colabora con personas dentro o fuera de su área.
- Selecciona con quién intercambia opiniones e información y ante una situación de divergencia le cuesta escuchar a la otra persona y controlar sus emociones, buscando hacer prevalecer su postura.
C 45%
- Aunque se lo soliciten no coopera ni colabora con personas dentro o fuera de su área.
- Ante una situación de divergencia no escucha a los demás, reacciona emocionalmente y no mide el impacto negativo que sus palabras y/o actitud causan en el trabajo del equipo.
D 15%
A su vez, cada competencia de menor nivel definida asumirá un peso dentro de la evaluación final, el cual también puede ser variable en función del puesto y de las competencias que la plantilla tiene asociadas para el mismo. Una vez definidas las plantillas y llegado el momento de realizar las evaluaciones de desempeño, el Responsable del Área de Desarrollo de RRHH genera las evaluaciones para todo el personal, informando el período a evaluar y el plazo de tiempo asignado para realizar las evaluaciones. En función de esta información el sistema deberá generar las evaluaciones de desempeño para todos los empleados, teniendo en cuenta que tanto el evaluado como los evaluadores deben tener una antigüedad mínima requerida en el puesto, para el Período de Evaluación que se está evaluando (caso contrario no puede realizarse la evaluación) Para cada evaluación se asociará la siguiente información:
Datos del Evaluado (cada uno de los empleados a los que se realizará la evaluación de desempeño): legajo, apellido y nombre y puesto en el que se lo evalúa (por ejemplo, Analista o Jefe), sector en el que se lo evalúa, antigüedad en el puesto, fecha de ingreso a la empresa)
Datos del Evaluador (superior inmediato del evaluado en el período en el que se lo evalúa): legajo, apellido y nombre y puesto.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv197RsuubwJKrclbWMdnQOGnAnTW6mpOT68Iv4Ac_kXmnzi-GkdKw36AppDhrBhFVjFBydVBKstmKmRyQMJ7f8jaYGKFJpqzbdAkhTrhlMcm8uAgfQlUmcp71wDzRFgJ-FFsAz_1w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_7PTSVDYXVLo6ePWY6TZwUqeBo3ULX43IaLIOz_uaBkvpXC2rRpEhTpGXETjVtW5X-8dIRtT668h-4cpZgLW5pif4xCaeOQqmKmBdNwXFA7QzYahluLIHCECIx-q-FriIIkQDDw=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Competencias y Sub-competencias a Evaluar y comportamientos posibles asociados a cada una de ellas Una vez generadas las evaluaciones, las mismas deberán ser realizadas por cada evaluador antes de su vencimiento. Esto implica que el mismo deberá completar en el sistema los resultados de cada evaluación a su cargo (grado para cada comportamiento en cada competencia y las secciones de comentarios). Con esta información el sistema deberá calcular la Evaluación Final, que surge de multiplicar las calificaciones numéricas asociadas a los valores seleccionados por el peso de incidencia de la competencia a la que dicho valor corresponde.
Pedido de Cambio Adicionalmente a la funcionalidad solicitada, se requiere ampliar las funcionalidades para la Gestión del Desarrollo del Personal. Para esto se solicita que al momento de definir un Puesto de Trabajo puedan especificarse los conocimientos y competencias requeridas u opcionales. Esto permitirá facilitar las tareas de selección de personal y mejorar la Gestión de las Evaluaciones de Desempeño. La nueva información a registrar asociada al puesto de trabajo se detalla a continuación: a) Conocimientos Generales y Específicos requeridos para el puesto y el nivel requerido de cada uno de ellos. b) Competencias requeridas para el puesto y el nivel requerido para cada una.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26fRLhCrGhgVOeBbjfB_Zjz40xDOqSS2757xiOVsVwoKMORyQZhrGaXsEFwNW548gnjYKU_t3l-dACmWET4xsXYXrycTHlhdtCA2oCrLPTTrsbrBMjioVIeN_SgDgbyc-4pve8eQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3n8F00_6Prl1X41V965XCPUGvUK-Y7-TCREenpLaLnUZA8gyxAg-g8j_m0ebYTyE42JMm7iPP3wLsn_BUIhCHXXs0ZrblT1HRO7jVxV4VpycM9xIm_doZ3Gx6K8WKJggghEsmzEw=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
class Modelo Analisis
«entity» Sector
- descripcion - nombre
«entity» OcupacionPuesto
- fechaOcupacion
+ conocerPuesto() + conocerSector() + getFechaOcupacion() + mostrarPuestoEvaluado()
«entity» Puesto
- descricpion - nombre - vigenciaDesde - vigenciaHasta
+ getNombre()
«entity» PlanillaEvaluacion
- descripcion - fechaAlta - nombre - vigenciaDesde - vigenciaHasta
+ conocerDetallePlantillaEvaluacion() + conocerPuesto() + mostrarCompetencias() + mostrarComportamientoCompetencias() + mostrarSubcompetencias()
«entity» DetallePlanillaEvaluacion
- ponderacion
+ conocerCompetencia() + conocerComportamientoPlantilla() + getValoracionNumerica() + mostrarCompetencias() + mostrarComportamiento() + mostrarComportamientoAsociado() + mostrarSubcompetencias()
«entity» Competencia
- descripcion - nombre
+ getDescripcion() + getNombre() + mostrarDatosCompetencia()
«entity» Evaluacion
- fecha - periodoAEvaluar - valorEvaluacionFinal - vencimiento
+ buscarEstadoActual() + conocerAprobador() + conocerEvaluado() + conocerEvaluador() + conocerHistorialEvaluacion() + conocerPlantillaEvaluacion() + conocerResultado() + esDeEvaluador() + estaPteCargaResultado() + getPeriodoEvaluar() + getVencimiento() + mostrarCompetenciasAEvaluar() + mostrarComportamientoCompetencia() + mostrarDatosEvaluacion() + mostrarDatosEvaluado() + mostrarDatosEvPtes() + mostrarPuestoEvaluado() + mostrarSubcompetencias() + registrarResultadosEvaluacion() + setEstado()
«entity» Resultado
- comentarios
+ new()
«entity» HistorialEvaluacion
- fecha - hora - observaciones
+ conocerEmpleado() + conocerEstado() + esEstadoActual() + new()
«entity» Empleado
- apellido - fechaIngreso - legajo - nombre
+ conocerLugarFisico() + conocerModalidadContratacion() + conocerOcupacionPuesto() + conocerTurno() + conocerUsuario() + getApellido() + getLegajo() + getNombre() + mostrarDatosLaborales() + mostrarLugarFisico() + mostrarTurno()
«entity» LugarFisico
- descripcion - nombre - telefono
+ getNombre()
«entity» Turno
- descripcion - horaEntrada - horaSalida - nombre
«entity» Usuario
- contraseña - nombre
+ obtenerEmpleado()
«entity» Sesion
- fecha - hora
+ conocerUsuario() + obtenerEmpleado()
«entity» Estado
- descripcion - nombre
+ esEstadoRegResultado() + esPteCargaResultados() + getNombre()
«entity» ComportamientoPlantilla
- valoracionNumerica
+ conocerComportamiento() + getValoracionNumerica() + mostrarComportamiento()
«entity» Comportamiento
- descripcion - grado
+ getDescripcion() + getGrado() + setDescripcion() + setGrado()
«control» GestorRegResultadoEvaluacion
- comentarioFinal - competenciaSeleccionada - comportamientoSeleccionada - estadoPteCargaResultado - estadoRegNvoResultado - evaluacionesPtes - evaluacionFinal - evaluacionSeleccionada - evaluado - evaluador - observaciones
+ buscarEstadoRegResultado() + buscarEvaluacionesPtes() + buscarEvaluacionesPtesEvaluador() + calcularEvaluacionFinal() + finCU() + mostrarCompetenciasAEvaluar() + mostrarComportamientosAsociados() + mostrarDatosEvaluacion() + nuevoResultadoEvaluacion() + obtenerEvaluador() + registrarEvaluador() + registrarResultados() + tomarComentarioFinal() + tomarConfirmacion() + tomarConfirmacionFinal() + tomarIngresoObservaciones() + tomarSeleccionCompetencia() + tomarSeleccionComportamiento() + tomarSeleccionEvaluacion() + validarCumplimientoObjetivos()
«boundary» PantRegResultadoEvaluacion
- comentarioFinal - evaluacionFinal - listadoCompetencias - listadoEvaluaciones - observaciones - opcionCancelar - opcionConfirmar
+ confirmarResultados() + confirmarResultadosFinal() + habilitarVentana() + ingresarComentarioFinal() + ingresarObservaciones() + mostrarEvaluacionFinal() + opcionRegResultadoEvaluacion() + pedirSeleccionCompetencia() + pedirSeleccionComportamiento() + pedirSeleccionEvaluacion() + seleccionarCompetencia() + seleccionarComportamiento() + seleccionarEvaluacion() + solicitarConfirmacion() + solicitarConfirmacionFinal() + solicitarIngresoComentarioFinalEv() + solicitarIngresoObservaciones()
«entity» ModalidadContratacion
- descripcion - nombre
-comportamiento 1
-usuario
1
-usuario
-lugarFisico
1
-turno
1
-ocupacionPuesto
-sector
1
-puesto
1
-puesto
1..*
-comportamientoPlantilla
1..*
-modalidadContratacion
1
-competencia 1
-resultado 0..*
-historialEvaluacion
1..*
1
-empleado
1
-evaluador
1
-aprobador 1
-ocupacionPuesto
1
-plantillaEvaluacion
1
-empleado
1
-detallePlantEvaluac
1..*
-detallePlantillaEvaluacion
1
-detallePE
0..*
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1drYa-8GMPZ7vYVqALtS-Bq1guO915VMcuArNEaZDLL1P1N5hj8d6cYSPf23Cmer2fSvgU5f07gnc4JgQvMQ6U4l5hnIC-tFNSkZC4tnFD5xLbCU79_hZAlFtsKULxHW5nltWGUg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36_eADjtvtZ3KEr_rfsEo-LfF6DwCH_GxJ66B_hhz1Y1RH4lE4lkIzuAEOgClNM0GK0FDPuzZuyGDTPtQ25mCAyrG56iXu3YpDrqexutMLVCLuq2Ufq_d1ctMpmux13iccqt__uw=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Avisos Clasificados En una localidad del interior de la provincia de Córdoba funciona desde hace más de 25 años un importante semanario llamado “Tribuna”. Dicho semanario sale a la calle los días sábados, cubriendo las noticias y sucesos de la localidad y región. El semanario está dividido en distintas secciones: Deportes, Regionales, Sociales, etc. Como es un semanario local y no se cuenta con una gran infraestructura y maquinaria, se imprime de a partes, comenzando con esta tarea los días miércoles, por lo que hay secciones que deben estar preparadas para éste día. A continuación, se describirá la gestión de clasificados. La recepción de clasificados puede ser vía telefónica, personalmente en las distintas receptorías de la localidad y región o, solamente para algunas empresas que hace bastante tiempo publicitan en el semanario, se hacen recepciones vía e-mail. Las publicidades pueden aparecer en la sección clasificados o en otra sección del semanario, como por ejemplo, una importante casa de venta de ropa deportiva puede elegir que su publicidad aparezca en la sección deportes. Los avisos que se publican en la sección “Clasificados”, están a su vez diferenciados en distintas categorías y a su vez cada categoría puede o no tener sub categorías. Por ejemplo, la categoría “Profesionales” se subdivide en Oncología, Abogacía, Odontología, etc.la de “empleos y ocupaciones” en pedidos y ofrecidos, pero la categoría de “Servicios” no tiene ninguna sub categoría. El orden de las categorías en la edición impresa tiene un orden establecido, pero, eventualmente éste orden puede alterarse. El aviso puede ser de texto plano o puede tener alguna imagen (en ese caso, el cliente debe enviar el diseño del aviso) y, por política del Semanario, no en todas las categorías y sub categorías se puede publicar cualquier tipo, por ejemplo, en la categoría “Empleos” no se admiten los avisos con el logo del comercio/empresa/organización que solicita. El precio del aviso varía según el tamaño, el tipo, el formato y la cantidad de sábados que aparecerá publicado, y esto está previamente definido. Los formatos están predefinidos, tienen un nombre distintivo y definen qué fuente tendrá el aviso y el tamaño, cuál será el espaciado (anterior, posterior, interlineado), cantidad de palabras en mayúscula, y otros efectos como cursiva, negrita y subrayado. No todas las combinaciones de espaciado, fuente, tamaño y efectos son posibles, debido a que hay fuentes que no admiten efectos o que dificultan la diagramación de la hoja con determinados interlineados. El mínimo es de dos líneas, con la primer palabra en mayúscula publicado dos sábados consecutivos. De allí existe muchas variantes, por ejemplo igual que el anterior pero con la primer palabra en mayúscula y negrita, o todo el aviso en negrita con tres líneas y publicado tres sábados consecutivos, etc. Un aviso como máximo puede publicarse 15 sábados consecutivos. Si algún cliente desea extender éste plazo, deberá presentarse nuevamente en la fecha correspondiente y volver a solicitarlo como si fuera un nuevo aviso. En el caso de los avisos con imagen o diseño, pueden ocupar una o dos columnas y en caso de que el aviso exceda éste tamaño, se considera como publicidad y se cobra como tal. Cada aviso tiene una fecha de vencimiento, que es publicada junto al aviso en cada edición. La fecha de vencimiento se calcula a partir de la cantidad de sábados por los que fue solicitado el aviso, y corresponde a la fecha del último sábado que el avisó aparecerá publicado. Cuando el receptor del aviso registra un nuevo aviso, debe registrar todas las características del aviso, incluido el texto, la fecha de recepción y fecha de vencimiento, forma de pago (tarjeta de débito, tarjeta de crédito o efectivo), y se imprime el ticket correspondiente. El director de Tribuna está interesado en implementar un sistema para la gestión de los clasificados para poder llegar sin problemas a la impresión del día miércoles, cumpliendo con el funcionamiento descripto anteriormente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZKjqD8eV18Ty61SMV-cMSdJoP9pRPmOlUChLNfjXszySb9Zx4-Ti6AbdQEFB_B2v_8_miWNhqBK9SAC3SbQiBQOfONyAFFo6AglAaDw3KRC7_HQ9BfoqbxT33Lc9NFfbzfYiR=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JDI0tLrVwd-g-lU12Bt8ofDpO8LILSVQ8MgdJUoAwtqvojlIjffPiJQAPHrjeKCuFJWWuvq-hJIDX5r8E2RDILNwQSYduUVaXYLrwcD7PErF1ENPfkKWT9brJhSEXwhRReT2fSA=w139-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14zHP-GGsHknmoacwJxRbgUkX0FZvUPPwHIBmpqFPaB0uAWSz0whXPQmMy4iJKJtvHS8psgi6RtjZo400AuPXKb2wSg3jfe7gheXSxgKFcP3WUWxfVVmDaZoytDUppGWyYfy5y2w=w1072-h1280-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Pedido de Cambio
Se ha solicitado implementar un cambio debido a que el dueño pretende implementar un sistema de promociones. Pueden existir promociones para: la categoría a la que pertenece el aviso, o según la receptoría a la que el cliente se dirige. Dichas promociones consisten en un porcentaje de descuento sobre el precio del aviso. Cabe aclarar que sólo se podrá aplicar una única promoción a la vez (las promociones no son acumulables).
a) Enumerar los casos de uso que se deberán agregar y/o modificar
b) Realizar los cambios correspondientes en el diagrama de clases
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DdCoeo_Ylu9PswHgQJKEIrGeGXy2_sjc2Nxtmwt18vaupw14Ce4IxRIB1-i_5AH195octB2eTHjCW6fMB-pviZa8BvUp3A-sFmD5VKn-bGWpGPnsX2g4psXBrpnx1wl9p-9I2tg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GdI0iSs2cAUU28vsXLo-kwOyPRFXTHsJDZicEoH72ruiwmkqdRhyuS9mW_9_ZZ7tJ5y16R5jQ6ZkJ6P82Eh3aSLXvr_0d_tjNUmsqOQofWoTz2vBlxJkh804griBk_HxVdDinew=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Propuestas de Solución: Contact Center Modelo de Dominio con cambio de requerimientos
Casos de uso que se agregan: Registrar Tipo de Respuesta Modificar Tipo de Respuesta Eliminar Tipo de Respuesta Consultar Tipo de Respuesta
Casos de uso que se modifican: Registrar servicio contratado Modificar servicio contratado Consultar servicio contratado Eliminar servicio contratado
class Modelo con Cambio REQS
«entity» TipoServicio
descricpion nombre
getNombre()
«entity» Producto
descripcion nombre
getNombre()
«entity» NivelResolucion
descripcion nombre orden
getNombre()
«entity» Recurso
fechaIngreso legajo nombre
getNombre()
«entity» Accion
descripcion nombre
conocerTipoRespuesta() getNombre()
«entity» Estado
descripcion nombre
«entity» Actuacion
descripcion fechaFin fechaInicio horaFin horaInicio tiempoEstimadoResolucion
conocerAccion() conocerEstadoActual() conocerEstadoInicial() conocerRecurso() mostrarDatosActuacion()
«entity» Consulta
apellidoConsumidor descricpion direccionConsumidor fechaCreacion nombreConsumidor nroConsulta telefonoConsumidor
buscarActuaciones() cerrar() conocerActuacion() conocerCriticidad() conocerNivelResolucion() conocerTipoConsulta() demorar() derivarGrupoSoporte() derivarRep() guardarConsulta() informarCliente() new() resolver() retomar() sonTusParametros()
«entity» Criticidad
descripcion nombre
getNombre()
«entity» TipoConsulta
descripcion nombre
conocerTipoRespuesta() getDescripcion() getNombre() setDescripcion() setNombre()
«entity» ServicioContratado
fechaFin fechaInicio
concocerTipoRespuesta() conocerProducto() conocerTipoServicio() estaVigente() mostrarNombreProducto() tieneSACContrado()
«entity» Cliente
cuit domicilio razonSocial
conocerServicioContratado() getCliente() mostrarSACVigente()
«entity» TipoRespuesta
descripcion nombre valida
esValida() getDescripcion() getNombre() setDescripcion() setNombre()
estadoInicial
1
consulta
0..*
tipoConsulta
1
nivelResolucion
1
tipoRespuesta
0..*
tipoRespuesta 0..*
estado
1
producto
1
tipoServicio
1
tipoRespuesta
0..1
accion
1
actuacion 1..*
servicioContratado
1..*
criticidad
1
recurso 1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pok2aUgtTO7HrMIwqKrrfEUo5EgeS8OA0I_CW7R0g_J8nxEh5Qx8aI8D90_4Jmb3FWeF0TnHjosyV-iuj42_BoeyHHrhGuYfi900NeoeVrOjPWfVOHey_uet80GZrF-4JJsNVGA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YLVnJIBwJvCTboucwoxHUutc_mWcVCbAcCzrgZ99h2rMVFQ-F6HOw1ZJHvm6EG-M9UZEOnXHXF4nSNeEhJFeLYtnpDjyJ8f5SB9B1qPv4hIGglhgj3DuKVHuPjcUmmp2PqMWrvg=w139-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2r1yWWuR_56P8Rod_g_ko5SmCTRhlSI4DF3uQ9wsgAzemmtllIGFUqWvmX5gpwAuC7W-V2e8haAjXblcX0ak9jGHDtP4Po8oIqa1bMHC3Q5H0GKxVStgWq1XvpVjg-FRifZ1dmmQ=w1280-h609-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Registrar consulta Brindar información de consultas
Importador de Insumos de Computación
Cambios en el Modelo de Casos de Uso
Casos de Uso Nuevos
Registrar Sucursal Modificar Sucursal Buscar Sucursal Consultar Sucursal Eliminar Sucursal
Casos de Uso Modificados
Registrar Solicitud de Reabastecimiento Registrar Distribuidor Registrar Remito de Proveedor
Cambios en la Estructura del Modelo Análisis
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UoQ7ojekDpUV5cYbCIfiRIxDeGEHhGwYwPeduYAhCssxaryDNnOZzLCN4_bqmqdsLXU8d-uG1X0sHIJlhEnmwH-fMdy5zsppKoPX91CI0HAtPbo--wForr0elQgvbmVwJ002DiA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19kZXY_aMmeelrMEvwKdv4JYpVsKxyCnrVd0jQHLq5LnnWaL1r60VjZw2x_IqWZh4bKSjH-wX4OmLLklMRtgWVZYqeCFPegQvDbKtc9_6fdrm6BqxmrTefYXYgqexUWJWMAwVWaA=w139-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VnoN7sEVsDrF0ZCumDnAYBaF2axM0PFISSWRhF9p-XUfaWMaUaOLHGMMGzTIOOQhSl9veqBPMqiqPYVcvb9KpNyXUYxeq-zgenurO_OeAOefN6pcisVMeSwPcw4nflYt673_fow=w1108-h579-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Sistemas de Órdenes de Trabajo de Cortes de Servicio
Cambios en los Casos de Uso
Casos de Uso Nuevos
Registrar Tipo de Tarea, Modificar Tipo de Tarea, Consultar Tipo de Tarea y Eliminar Tipo de Tarea
Casos de Uso Modificados
Registrar Resultado de OT de Corte
Registrar Resultado de Inspección
Registrar Resultado de Reconexión
Registrar Tipo de Orden de Trabajo, Modificar Tipo de Orden de Trabajo, Consultar Tipo de Orden de Trabajo y Eliminar Tipo de Orden de Trabajo
Cambios en la Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RR0gakHbLz2woRVXcg442eaiAeYZaQxFkslZHuxxPNuiJ_slIalDMKEQja68a331ynP6PS8OSqBe9Rn-FeBjkDBH6WPotRVn_yIjOH-SvgDCpLH6sqBx2o3j4S-PxxVaVn81JHw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kj1vJcA8g4_k0KFzv7ZgjIkU_01lFWYizCGsktfGSiSiS8nVt0-VwqJSJniAd6ugs1SgngmcBggBbxiYZVoslC3MPdXq5gP5XZn8F7rzkERtQY38xGkRH4-vEFRR3S4fVotfogw=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Agencia de Turismo Funcionalidad Casos de uso que se agregan: Registrar restaurante Modificar restaurante Consultar restaurante Eliminar restaurante Buscar restaurante (opcional) Diagramar Media Pensión de Tour Modificar Diagramación de Media Pensión de Tour Consultar Diagramación de Media Pensión de Tour Casos de uso que se modifican: Diagramar Tour (nota: si se modifica este caso de uso no se agregaría el caso de uso Diagramar Media Pensión de Tour) Modificar Diagramación de Tour (nota: si se modifica este caso de uso no se agregaría el caso de uso Modificar Diagramación de Media Pensión de Tour) Consultar Diagramación de Tour (nota: si se modifica este caso de uso no se agregaría el caso de uso Consultar Diagramación de Media Pensión de Tour) Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BrMM-O_CreycXIKFKrcTdUy0P2QFI0llmwZVxEDNM-ZbWwnEB6PbFd1T_QtOkfDARpq28fcQcafEIV-k1klG23WQE4cDDHK0sIjEP1BZ8kYyv0ov8sOR4QAlm8hwE3TcVER0_sw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KOy6gDoxx9OAwjNf9zuwxfilcbiCL9lCMeorzmOtmC_52qnfiI5shMKDZNnJYjvOm_rpAxO3DlXrt4aHtGaN7T3sFAVSEtfs_Hry_WpSVdy1CblgTyPAjdTHK0YdEcpFqgrM5HQ=w139-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3V0X6cjhpo96y6g8OKtPl08VFMvevJB74JiIt2HwzwlV937MhKNrSBSgSie8xreMZ4--fHRoDtDSeYOEG06TUv35FsTPCTGLrWtDNkxC5XHiMGaQJUBx49oVBWuEsZ7DJHna2gew=w1280-h853-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38v-krMTCJXOy8DR9RnY_0i5N0sEFfNT9DhRYy272xLthHCpXMRFClhrL9BF5a3O4egk2UrCqydvrXy77cyc8ZzDhY2TjHglXg4Z3zlHVRM-dxBtiDOgIVwa6V8G38DFUsmB6c2Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UD1r9OY2Xa0wjPBinntDE3IEVUHwxqlAINDXTH1Zmwjr4KjMAxI8UPABNJZJbmEt-6CZp0ibq9s21xKLeZYlRhnyYH9x6ngkwlfz6_8BO2nc7a8LkrtkfV9xgesQufFz_N5s-vQ=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Cambio de Requerimiento de Evaluación de Desempeño Funcionalidad Casos de Uso que se agregan: Registrar Conocimiento Modificar Conocimiento Eliminar Conocimiento Consultar Conocimiento Registrar Competencia Modificar Competencia Eliminar Competencia Consultar Competencia
Registrar Conocimiento Modificar Tipo de Conocimiento Eliminar Tipo de Conocimiento Consultar Tipo de Conocimiento Casos de uso que se modifican: Registrar Puesto de Trabajo Modificar Puesto de Trabajo Consultar Puesto de Trabajo
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0itAAdM-qZRJCDXnUX1fzQKK-WSPP4orOnNleR0SamwQX6nOpLRi5FjrjByz4Re2a2gTlsVgSUlxJGWbyBKkn9uZz8aAFq35U5X4maMdtz7RWp7D01aIqGg3yE9Ue_3dZaNGRFyg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37AHw3Umy1OkxK9W5MFNpXs7O0CfjTR28JqlAwY933KIVuIC6sQDaUOuzosURqvN4tLheRoeP3dB8BKONv2dQahElIP57xnmzUIQvT4YU_L_1sxgkHMQMrr_8utwOgqvqmSzTQiQ=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
class Cambio Rqs
Sector
nombre descripcion
OcupacionPuesto
fechaOcupacion
conocerPuesto() conocerSector() getFechaOcupacion() mostrarPuestoEvaluado()
Puesto
descricpion nombre vigenciaDesde vigenciaHasta
conocerCompetenciaPuesto() conocerConocimientoPuesto() getNombre() mostrarCompetenciasRequeridas() mostrarConocimientosRequeridos()
PlanillaEvaluacion
descripcion fechaAlta nombre vigenciaDesde vigenciaHasta
conocerPuesto() mostrarCompetencias() mostrarComportamientoCompetencias() mostrarSubcompetencias()
Competencia
descripcion nombre
getDescripcion() getNombre() mostrarDatosCompetencia()
ConocimientoPuesto
requerido
conocerConocimiento() conocerNivel()
Conocimiento
nombre descripcion
conocerTipoConocimiento()
TipoConocimiento
nombre descripcion
CompetenciaPuesto
requerido
conocerCompetencia() conocerNivel()
Nivel
nombre descripcion
nivel 1
conocimiento 1
nivel
1
competencia
1
conocimientoPuesto 0..*
puesto 1..*
sector 1
tipoConocimiento
1
competenciaPuesto 0..*
puesto
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ErYsDl5zil_D16yWza_Wo4LDPTrH81zZ9kf1yd0ZB15Dbt3DDrrfFoiJNnQNphDI7fQxDNg5tp5yI5H4t1TYr8TLb_SNiOS34Tp0CrI7rMWoaruKrXtw1K9SEC7w6eduugJSk5g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CB5NXuDuRcSK98yNBTrzoJFyCNDk8OyAlnJ880yuB3rRLSJAmr6rORxyUwPxflo13r39dg8VCQFNcH37J_Vta0GGbbg79ukVCSChfzsMg-kwnbTj_i1o2-clw3aPiAYNAkT_Oqw=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
Avisos Clasificados Casos de Uso que se agregan: Registrar promoción Modificar promoción Anular promoción Consultar promoción Casos de uso que se modifican: Registrar Aviso Modificar Aviso Registrar Cobro de Aviso
class Cambio de Requerimiento
Promocion
porcentajeDto
vigenteDesde
vigenteHasta
conocerCategoria()
conocerReceptoria()
«entity»
Receptoria
nombre
numero
ubicacion
«entity»
Aviso
estado
fechaDePrimerSabado
fechaDeRecepcion
fechaDeVencimiento
texto
buscarFormato()
calcularPrecio()
conocerDiseñoAdjunto()
conocerEstado()
conocerPrecioAviso()
conocerPromocion()
conocerReceptoria()
estaVencido()
getParametroOrdenamiento()
getTexto()
verificarTipoAviso()
verificarVencimiento()
«entity»
PrecioAviso
cantColumnas
cantLineas
fechaVigenciaDesde
monto
buscarFormato()
conocerCategoria()
conocerFormato()
conocerSubcategoria()
conocerTipoAviso()
esTipoDeAvisoDiseño()
«entity»
Categoria
descripcion
nombre
numOrden
ubicacion
buscarAvisos()
buscarDatosAvisos()
buscarFormartoAvisos()
buscarSubcategorias()
conocerAviso()
conocerSubcategoria()
conocerTipoAviso()
getNombre()
getNumeroOrden()
listarSubcategoria()
ordenarAvisos()
tieneSubcategoria()
verificarTipoAviso()
Se agrega el puntero a
"Promocion" y un método
calcular precio, que en
caso de tener
promociones, aplica el
descuento
correspondiente al precio
registrado
receptoria
1
promocion
0..1
0..*
aviso
precioAviso 1
categoria
0..1
categoria
0..*
receptoria 0..*
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MdlDf8tcxrXoaSNKOmfBaZ9-FnIZbYw_S6iUUWddvmjg6B2aw4F5jd0CA1E43iebQ8msLu4aJsK3WJAcgkAYQUJVPMzxTclfkmyFMWh3JkSPG06S_YmOPnmDuspbe4QMTkZzGxg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Qj9E_RBz0dP1lmPksvmfTYRNsVKQQmSndCrklY_j2w2lK8WUvN1145wQRIh6DOArzd6Mr815CSk_tzmpOfdec1MisjB8zRmdjukLjv18V0braBLjgipCXGtd_AVnYnZyDWcoX=w139-h191-v0?authuser=0)
Universidad Tecnológica Nacional – Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información TEMA: Evolución del Software – Cambios de Requerimientos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3d4P7ICFcmmsttz1BPT5HjlaAgSz64kUwMnGp9fQ8m6L4I3RjfVAyQSGxqVHB3ICPRmszNaDxOlyW0ONoA7zB_rc7cLtrxbPpgsgW8NkhPMCy15YGFhFdaKFlO7EhPjNpiEU97mg=w839-h1187-v0?authuser=0)
