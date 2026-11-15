# Crustáceo Cascarudo - Microservicios V 1-2.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta el 
proyecto práctico de aplicación para el sistema de una hamburguesería
 llamado Crustáceo Cascarudo, enfocado en estructurar una 
arquitectura basada en microservicios
. Detalla la lógica de negocio necesaria para gestionar 
pedidos al paso y empresariales
, el manejo de menús con variantes e ingredientes, y el cumplimiento de 
regulaciones fiscales obligatorias
 como la emisión de facturas electrónicas validadas con un código CAE. Asimismo, abarca la integración con servicios externos esenciales como 
pasarelas de pago, mensajería y mapas
, organizando la solución en 
vistas arquitectónicas globales, de diseño y de despliegue
 para asegurar su correcto funcionamiento en la nube y en diferentes dispositivos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JwIadIyNa5IlBpTicgw9nTcSlQqq1X6WvFgHl1uKQ_TI1Z4DTIfP-GEhAPH6_T8J9uHMeYYDdiXulDGKYKRc9gBujED449wVd2d2Gy3Yk8C6b1JkZsx-hAR8hygE4uJojVLDA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30MIh-ENXpCXF1qcxu7YTrEvuc5QN6R5f_-JvX8pV64hcYQtuQRTZOCSXd7aLsZbdKLEvuoNni4jfTH53mk8ycMjCaTtKlQ-LT-v8v6Qj_NY7VLtf-tpM79Cq-chbEoE8FJZ7E=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información

## Proyecto Práctico de Aplicación

Nombre del Proyecto Práctico de Aplicación: Crustáceo Cascarudo Considerando la situación planteada, se pide: 1. Identificar los subdominios en los que se descompone el dominio del problema 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. (Esta en este caso ya está hecha) b. De Diseño global presentando la estructura general basada un estilo arquitectónico de
microservicios c. De Diseño utilizando un estilo arquitectónico de microservicios. d. De Despliegue: Distribución de software en hardware (Nodos y Componentes).
3. Mencionar los patrones arquitectónicos para microservicios aplicados.
Dominio: Hamburguesería “Crustáceo Cascarudo”
Glosario Término Definición
Web Service Tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones.
SOAP Protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.
Tipo de IVA
La Administración Federal de Ingresos Públicos (ARCA) define distintos tipos de Impuesto al Valor Agregado (IVA). Todos los productos tienen un tipo de IVA que puede ser:
IVA General del 27,5%
IVA General del 21%
IVA Reducido del 10%
IVA Superreducido del 4%
Actividad exenta del 0%
Base Imponible
La base imponible es el monto sobre el cual se calculan los impuestos. Este monto no contempla ningún tipo de impuesto. Es equivalente al costo de fabricar o comprar un producto al proveedor más el margen de ganancia. Si se vende un producto al público a $121 con un IVA General del 21% entonces la base imponible es de $100.
CAE El C.A.E. (Código de Autorización Electrónico) es un número que otorga la ARCA al autorizar la emisión de un comprobante por web service, aplicativo RECE o por el servicio por clave fiscal "Comprobantes en línea" ("facturas electrónicas"). Sin CAE, la factura no tiene validez fiscal.
ARCA Agencia de Recaudación y Control Aduanero.
SPA Significativo para la arquitectura.
AP Actor Principal.
AS Actor Secundario.
N/A No aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XLnLXLFWlY0nDUyzAz6Mo3teobsuWv0KHBCCfhtXILVFw1GPhzYIhgHkBgbqG672xaG-dNre6eRUsMegp7SqyaHm0ZyBXFJgBxN8GxKzHr3xwsvnm9nOttdNXvxo6gw4k4STPZg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2o_bgAW0kGqPBWOAQDNgKk4BaRHqCAwPjXNx9ZhVk8o_Bz_pRzc8mJiQVNHJKQsaPDMnlpBfQRIoaTOViyATj1DVOamGMAVwFN8veax_OHk09HG1Ra6GljOXSRCy9qHySiqMfHaA=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Descripción del Caso
Rodrigo es el dueño del Crustáceo Cascarudo, un local de comida rápida al paso que vende comida como hamburguesas o paninis a personas que pasan por su local, en un área muy transitada de la ciudad. El Crustáceo Cascarudo se encuentra cerca de una zona de muchas oficinas, así que Rodrigo hizo un contrato con las empresas que trabajan cerca para proveer el almuerzo a sus empleados.
Rodrigo vende en su local distintos tipos de sándwiches, hamburguesas y panchos, así como también papas fritas o ensaladas. Cada uno de estos productos tiene un nombre especial, un precio y un conjunto de ingredientes para su preparación. Además de esto, la mayoría de los productos tienen variantes, esto quiere decir que para un determinado ingrediente puede haber más de una opción (como el tipo de pan o el tipo de carne). La variante elegida para un ingrediente en un producto no altera su precio, Ves necesario identificar cual es el ingrediente con variantes para un producto y poder enumerar todas las variantes para ese ingrediente, algunos productos tienen ingredientes por defecto en las variantes. Un ejemplo es la hamburguesa Cangreburger, que cuesta $1200 y se prepara con lechuga, tomate, pepinillos, queso, mayonesa, kétchup, el ingrediente secreto y además tiene variantes en el tipo de pan (que puede ser brioche, pan mollete o pan cristal kornisptiz) y el medallón (que puede ser de carne de vaca, cerdo, pollo o pescado). En la cangreburger los ingredientes por defecto son el pan brioche y el medallón de carne de vaca en caso de que el cliente no especifique la variante. No todas las variantes son mutuamente excluyentes, puede ocurrir que para unas papas la variante sea el aderezo y se desee elegir mayonesa y kétchup. Algunas variantes pueden hacer referencia a ingredientes Premium o ingredientes que normalmente no son parte del producto, pero se pueden agregar. Estas variantes tienen un costo extra al agregarlas independientemente del ingrediente elegido. Por ejemplo, agregar guacamole o mostaza de Dijon a una cangreburger.
Los clientes del Crustáceo Cascarudo pueden comprar los productos de manera individual o en combos. Rodrigo arma estos combos con sus productos más vendidos y sus combinaciones de productos más pedidas. Los combos son armados al principio del mes y se pega el listado con imágenes representativas en la puerta del negocio. Los combos generalmente llevan algún tipo de sándwich, un acompañamiento y una bebida. Para cada sándwich y acompañamiento se puede pedir cualquiera de las variantes del producto individual; para la bebida se ofrecen 3 variantes: Coca-Cola, Coca-Cola light y agua. Cada combo tiene un precio particular y un nombre por el cual se lo puede identificar. Un ejemplo es el Combo Crustáceo que cuesta $1600 e incluye una Cangreburger, unas Papas Marinas y una gaseosa a elección.
Rodrigo atiende el mostrador tomando los pedidos de las personas que pasan por el frente de su local. Desea poder registrar el pedido en un producto de software, incluyendo todas las variantes que el cliente pida. Rodrigo debería poder agregar alguna observación en el pedido para registrar si el cliente no desea alguno de los ingredientes.
Un cliente podría pedir un Combo Crustáceo donde la Cangreburger tenga pan brioche, un medallón de pollo, Mostaza de Dijon (Ingrediente Premium no incluido en el combo) y sin pepinillos. Las Papas Marinas del combo con Kétchup y la gaseosa una Coca-Cola Light. Además del Combo Crustáceo el cliente puede pedir un Perro Marino (un tipo de pancho) con el ingrediente Premium Salsa Picante Calamardo y como acompañamiento los Trocitos de Coral sin salsa tártara. Rodrigo tendría que poder registrar los 3 ítems (El combo, el Perro Marino y los Trocitos de Coral) registrando los ingredientes extra de cada uno y el precio de cada uno.
Según una regulación de ARCA es obligatorio aceptar tarjetas de débito como medio de cobro en cualquier local comercial, razón por la cual Rodrigo ha decido utilizar la pasarela de pagos Mercado Pago. Si el cliente quiere pagar con tarjetas de débito o crédito, Rodrigo les pide que escaneen con la aplicación de Mercado Pago el código QR del local. Cuando los clientes hacen esto aparece en sus celulares el logo del Crustáceo Cascarudo, el nombre del local y el monto a pagar. Los clientes eligen dentro de la aplicación de Mercado Pago la tarjeta con la que desean pagar y confirman el pago. A Rodrigo le llega la confirmación de Mercado Pago indicando que el proceso se completó de manera exitosa. Los clientes pagan su pedido una vez que reciben su pedido.
En cuanto a los clientes empresariales, en cada empresa habrá un responsable de ingresar y/o modificar los pedidos para toda la semana, los lunes; es por esto por lo que se acordó la necesidad de un producto de software web.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xYYqSk7z0Ix8Xoz9FZDT_9RsMEP4HfOMCGPQEurHPlkZ34k_vKPTa46cI9uDdFDg9_RtBiz06Rdf4gO72WNE9Ysu4gBNQNrcmxPMhpKNSB4usRJi_Ml-W7flDAKRyFTbLtlv1=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xyOmbJuFd-SjdpO_hirzcffwyCqBd8Hilv1PoCgHhPsM-yc7Oa5H0eZFVj3PfU37owNvSfx2JUXgSI1p9gQnM3jTjtc7RoLK36FFVuZ-JSTFCVseK8D833oBESsAVwApJ-PJ0=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
El responsable de pedidos de cada empresa registrará los pedidos con todos los detalles y requerimientos especiales y el día de entrega de cada pedido; que estarán disponibles para que Rodrigo consulte. Se genera un pedido para cada día de la semana.
Rodrigo tiene un acuerdo con sus clientes empresariales en donde los pedidos pueden ser editados hasta un día antes de su fecha de entrega o hasta que se facture el pedido; ya que cada responsable de pedidos de cada empresa puede elegir el momento en el que se facture un pedido (opciones: al crear el pedido o en cualquier momento posterior, hasta el día de entrega del pedido). Si el responsable de pedidos de la empresa no lo factura hasta la fecha de entrega ese pedido se factura automáticamente. Por ejemplo, un cliente empresarial puede pedir 5 combos Cangreburger para el lunes, 5 combos Cangreburger para el martes y 4 combos Cangreburger para el miércoles, y puede editar el pedido del miércoles agregando o quitando combos Cangreburger hasta el martes a las 23:59 horas.
Los clientes empresariales pagan todos los pedidos a fin de mes mediante una transferencia bancaria, al recibir la notificación del banco de que ingresó una transferencia a la cuenta, el sistema con esos datos actualizará los pagos de los pedidos del mes.
Todos los pedidos realizados en mostrador y los pedidos empresariales para ese día deberían mostrarse en una Tablet con sistema operativo iOS que Rodrigo compró para la cocina, el software a desarrollar deberá ser compatible con el navegador Safari 14. Es importante saber si un pedido es al paso o empresarial para que el cocinero pueda saber la hora de entrega de cada uno. Cuando un pedido ingresa a cocina para ser preparado debe sonar una alerta para llamar la atención del cocinero, Bob. Al mostrar el pedido en la Tablet se debería mostrar las especificidades del pedido junto con cualquier observación que pueda tener. A medida que Bob comienza la preparación de los pedidos, lo indicará en el producto en su Tablet. Cuando Bob termina de preparar un pedido actualiza la situación del producto en su dispositivo mobile, del mismo modo que cuando inició la preparación. Su asistente, Patricia, los envuelve para llevar y los lleva al mostrador, marcando en la Tablet que el pedido está Listo para entregar, y haciendo que suene la alerta sonora. Los pedidos al paso son entregados en el momento y se los marca de esa manera, mientras que los pedidos empresariales son guardados en un lugar aparte.
A las 12:30 el cadete sale con todos los pedidos empresariales y Rodrigo indica para cada empresa que sus pedidos ya se enviaron, esto dispara un mensaje de WhatsApp a cada uno de los clientes que están esperando su pedido. Cuando el cadete entrega el pedido debería poder informarlo, utilizando una aplicación en su teléfono celular, el cadete de rodrigo tiene un smartphone con Android 12. En su aplicación el cadete debe poder ver un mapa utilizando Google Maps que le indique la ruta más corta a seguir para llegar a todos los clientes. En la aplicación debe poder ver también que pedido le corresponde a cada cliente empresarial.
También se debe dar soporte desde el producto la posibilidad de que un cliente empresarial que tenga una queja o un problema con un pedido pueda registrarlo, y hacer seguimiento de la evolución de su reclamo. La gestión del reclamo es independiente del pedido y no afecta su evolución.
Según la nueva regulación de ARCA todas las facturas que hace el Crustáceo Cascarudo deben estar homologadas en el sistema de ARCA. Para esto ARCA provee una API a la cual se le debe enviar la información de la fecha y la hora, tipo de factura, cliente, monto total de la factura, los ítems vendidos y el detalle del monto de cada ítem vendido. ARCA procesa cada factura y devuelve un número de CAE identificador de cada factura.
Dado que Crustáceo Cascarudo está registrado ante la ARCA como responsable inscripto, puede emitir facturas de tipo A y/o B. Las facturas de tipo A sólo pueden hacerse cuando el cliente está registrado en el sistema y su condición tributaria es Responsable Inscripto. Las Factura B se hacen a clientes registrados con condición tributaria de Monotributista o a consumidores finales no registrados en el sistema.
Para los clientes cuya condición es “consumidor final” en el apartado de cliente se debe enviar “CONSUMIDOR FINAL” a ARCA sin informar el CUIT. Mientras que si se hace una factura a un monotributista o responsable inscripto debe enviarse el nombre o razón social y su CUIT.
Es necesario cumplir con las regulaciones de facturación que dicta ARCA. En el caso de las facturas de tipo A, el IVA debe ser discriminado. Es decir que cada ítem de la factura debe mostrase en la impresión sin el IVA. Y al pie de la factura debe mostrarse, en el orden indicado, la base imponible totalizada, el monto a cobrar por cada tipo de IVA y el monto total de la factura. Por otro lado, para las facturas de tipo B no es necesario discriminar el IVA.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hmqto2IbEw6zBCJQkBdu2uzOJVzH-uIo7DIOlwsnuEBpPUkGV3jtV4VBsGvyKfmHnohXRHt7c2WiuFEcvIjxoSCdwfU9hnE1VHiuz9Aad-4KoJfWGG8sclMhYiDa3RV79bbkT2g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Myxke5umJuiHx0lExd1BVP44mF0a1OyP_e8lu9lYEQ2BGdWNEafg9x6j6LAx-dGW5-TH7i8YBrnxHu2ztQ3qPTl_pJITGamFaQfisI3g_EfCfi8Iom6PoIe3yXYRj1gBBys_uxQ=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Esto quiere decir que los ítems deben mostrarse con precio después de impuestos y al pie de la factura debe mostrarse el monto totalizado de la factura. Cuando se envía la información a ARCA para homologar la factura se debe enviar respetando el formato por tipo de factura.
Todos los reportes deberán visualizar la información tanto en listados como en gráficos (barra, torta, dispersión, etc.) y se debe permitir la exportación de los reportes y estadísticas a formato Excel (xls o xlsx) y a PDF.
Definición del Producto de Software a construir: Objetivo del Producto de Software:
Gestionar la venta, facturación y cobro de productos individuales y combos de comida rápida, generando información relacionada a los pedidos, cobros y reclamos.
Alcances del producto de software:
Administración de productos individuales y combos
Administración de clientes
Gestión de pedidos
Gestión de facturación de pedidos
Gestión de cobros mediante transferencias bancarias para Clientes Empresariales y con Mercado Pago
para Clientes al paso.
Gestión de reclamos
Administración de usuarios
Generación de reportes de pedidos, facturación, cobros y reclamos.
No contempla:
Gestión de empleados Reglas de Negocio
Nombre de la RN Descripción de la RN
Cambios a pedidos empresariales
Los pedidos empresariales pueden cambiarse hasta un día antes de su fecha de entrega. El día que deben ser entregados no pueden ser editados.
Facturación ARCA Tipos de facturas que la empresa genera son: Tipo A: para clientes responsables inscriptos; Tipo B para monotributistas.
Reclamos Únicamente para clientes empresariales, se debe crear un reclamo por pedido. La gestión de reclamos es independiente de la gestión del pedido.
Tipos de Clientes Clientes Empresariales y Clientes al paso.
Cumplimentación de pedidos
Los pedidos se preparan completos, todos los detalles de pedido juntos, no se hacen entregas parciales.
Relación Pedido Factura
Un pedido debe facturarse todo junto, no hay facturaciones parciales. No deben facturarse múltiples pedidos juntos.
Facturación de pedidos
Todos los pedidos deben ser facturados antes de comenzar su preparación, sin excepciones. Los pedidos por mostrador son facturados por el cajero una vez que se registró en el sistema y el cliente decide que no cambiará su orden.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37KGXN1MybaZUjn1MaxKe4Kjx0Grj8scPs3e2ixT_I25TK4z0sEykBEONdQyeIdwor6hpckqH_8iIh0zYXsD0nVvTzAbCvIMZgv1GhTbqTaoq2szHogeexYuGkJMQZpvraagAXZA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V0-1Zjs4Aqeme7DqzSyWsjH7GthkApEcjKcvQmxl0g6jeLPYRdiTKK3o5a_AehuHU0Gw9nTImWU4IAdrVicr10f9IEv9fr2ATGa4e0IYBi7fr28HgM3_-GJmSzsh17nDlofljhg=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Nombre de la RN Descripción de la RN
Los pedidos empresariales pueden ser facturados en cualquier momento desde su creación por el encargado de pedidos. Si el encargado no lo hiciera de forma manual, el día de la entrega el software lo debe facturar de forma automática.
Preparación del pedido
En la cocina deben informar cuando el pedido está en preparación y cuando está listo para ser entregado al cliente al paso o al cadete para su distribución. El cadete debe informar los pedidos que están en reparto y los que ya entregó al cliente empresarial.
Cancelación de un pedido
Un pedido puede cancelarse antes de que empiece su preparación, si ya estuviera facturado, la cancelación del pedido implica además la anulación de la factura asociada.
Entrega a domicilio La entrega a domicilio de productos sólo aplica a pedidos de clientes empresariales. El cadete debe informar a los clientes empresariales cuando su pedido va en camino y debe informar al Crustáceo Cascarudo cuando ya ha sido entregado.
Cobros a Clientes Los clientes empresariales pagan con transferencia bancaria a fin de mes y los clientes al paso pagan con Mercado Pago luego que se les ha entregado el pedido. Todos los pedidos pagados deben marcarse como tales.
Requerimientos No Funcionales Nro. Nombre Descripción Característica
según ISO 25000 SPA Explicación
1 Tecnología web
El producto de software se construirá con tecnología web para los clientes empresariales y para el manejo de pedidos en el local.
Compatibilidad SI Restricción técnica de implementación, que afecta a la arquitectura. Se debe utilizar un lenguaje de desarrollo web.
2 Front End Responsive
Todos los pedidos realizados en mostrador y los pedidos empresariales deben poder gestionarse utilizando dispositivos de un rango de 10 a 28 pulgadas.
Usabilidad o Portabilidad
SI Requerimiento de interfaz de usuario, se deberá desarrollar el Front-End del sistema definiendo propiedades para que los elementos se adapten a los distintos tamaños de pantalla o utilizar un framework de tecnología responsive.
3 Navegadores web
El software debe correr en el navegador Safari 14.0
Compatibilidad NO
4 Conexión con API de ARCA
ARCA provee una API a la cual se le debe enviar la información de la fecha y la hora, tipo de factura, cliente, monto total de la factura, los ítems vendidos y el detalle del monto de cada ítem vendido. ARCA procesa cada
Compatibilidad SI Afecta la arquitectura ya que se debe desarrollar un componente que resuelva la conexión con la API de ARCA para poder acceder al CAE que se necesita para facturar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jmsAyYF-OtwXsLxw19wviPJpJ2kcl1kwtvh7IFZC18JZ-WY4ckn-rX5TCTDG9qSQ3l9jH5otXjVxivZHJo_ZhZC1N1ibDdi5312A7OK5eiZICKXq_6mXGBHOQ9KgKCqp-wBaeTg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jsTjTOLu0iG_nFwkrl3Je8Ey87Vd9xKWasSV87IJE2uBDv5i3ISo21pFB02gCjNNJh8gtOa5vRKTuOuY6x5RS11uBgGm5JQoZH01zgXQ4AZh-sEKPvy2z89i6-y-6zFzrCpcz=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Nro. Nombre Descripción Característica según ISO 25000
SPA Explicación
factura y devuelve un número de CAE identificador de cada factura.
5 Aplicación Mobile para el cadete
Se requiere una aplicación móvil disponibilizada en Android y en iOS para gestionar la entrega de pedidos a clientes empresariales, que realizará el Cadete utilizando su teléfono celular.
Compatibilidad o Portabilidad
SI Restricción técnica de implementación, que afecta a la arquitectura: se deberá desarrollar una aplicación mobile, utilizando el lenguaje de desarrollo mobile para que el cadete pueda consultar la ruta a seguir y marcar los pedidos como entregados.
6 Interfaz con Google maps
El cadete puede ver en un mapa en su aplicación la ruta más corta a seguir para llegar a todos los clientes.
Compatibilidad SI Requerimiento de interfaz de software. El producto integrará una API que provee Google que se comunica con el servidor de Google Maps, que presta ese servicio.
7 Alarma Sonora Es necesario alertar cuando un pedido cambia al estado finalizado y/o cuando un pedido ingresa a la cocina, utilizando una alerta sonora.
Usabilidad NO
8 Mercado Pago Para los clientes al paso se permite el cobro a través de la aplicación de Mercado Pago, escaneando el código QR del local.
Compatibilidad SI Se debe desarrollar un componente que permita la comunicación de la aplicación del Crustáceo Cascarudo con la API provista por Mercado Pago que ofrece una pasarela de pagos.
9 Cuenta Bancaria
Los clientes empresariales deberán pagar todos los pedidos de un mes mediante una transferencia bancaria, al recibir la notificación del banco de que ingresó una transferencia a la cuenta, el sistema con esos datos actualizará los pagos de los pedidos del mes.
Compatibilidad SI Se desarrollará un componente que comunique la aplicación con una API provista por los sistemas bancarios, para la actualización del estado de cuentas del cliente.
10 Notificación vía WhatsApp
El cadete deberá poder enviar mensajes de WhatsApp a los clientes cuyos pedidos estén incluidos
Compatibilidad SI Para implementar este RNF, se utilizará la API que provee WhatsApp para brindar el servicio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv327v5aHsNdiVTo07oCjH2R_3uHAK1LLnHOsi8EpiLFM391sRMBO4Xh6CXzz8H2hZjr7P2X72n0PKI4Q_dDcFJXrXvawHnB2sL6Tk5L0jGHL8FhFAL7Mq71m8ZhIwSuiBEH_HqH=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZH7NSpaMNuObiyF4wrLozhWwPmlghabZpCiZQ9y4gHK7Pe_YImWR2cVcvnm_NecglSDVlZSn2nllzTOkfDmkRtwpZbhIGKdn4f0Bis2fbUhJ9p9Gk9pftJaL8XqKAATtlKFjhlA=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Nro. Nombre Descripción Característica según ISO 25000
SPA Explicación
en la entrega del día, para alertarlos de que recibirán su pedido en las próximas horas.
11 Gráficos en las Estadísticas
Se deberán generar estadísticas varias mostrando los datos con gráficos de diferentes tipos.
Usabilidad SI Requiere la importación y uso de la librería estadística JMSL de Java para resolver los cálculos.
12 Generación de archivos pdf y Excel
Los reportes y estadísticas deben poder exportarse a PDF y/o Excel.
Compatibilidad NO Se asume que el framework de programación resuelve la exportación a pdf y Excel.
13 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos
Seguridad SI Requerimiento de seguridad lógica, significativo para la arquitectura, implica desarrollar un módulo que permita autenticar usuarios y controlar las sesiones.
14 Base de datos La base de datos debe ser PostgreSQL versión 17.
Compatibilidad SI La base de datos debe ser relacional y resolver el esquema de encriptación y las auditorías de transacciones para todos los servicios que requieren persistencia.
15 Despliegue en la nube
Para lograr un despliegue más rápido y sencillo, y también poder reducir los costos de despliegue, es necesario que los servicios sean desplegados en un único servidor en la nube.
Mantenibilidad SI Se deberá hacer uso del patrón Multiple Service Per Host para garantizar el despliegue de los servicios deseado.
Listado de Casos de uso del sistema. (La lista no es exhaustiva, no obstante los casos de uso listados alcanzan para desarrollar la consigna pedida).yo
Nro .
Paquete Nombre del Caso de Uso
Objetivo/ Descripción Actor
1. Gestión de pedidos
Registrar pedidos de la semana
Que un cliente empresarial registre uno o más pedidos para una semana determinada.
AP: Encargado de pedidos del Cliente
2. Gestión de Informes
Generar reporte de tasa de reclamos
Generar un reporte estadístico que muestre la tasa de reclamos sobre pedidos de los clientes, para un período de tiempo, en función de criterios predefinidos.
AP: Responsable de Reportes
3. Gestión de Informes
Generar estadísticas anuales de ganancias
Generar estadísticas de ganancias brutas anuales del año en curso y estimar los valores estimados de ganancia bruta, extrapolados, para el año próximo.
AP: Responsable de Reportes
4. Administración de clientes
Registrar cliente Registrar los datos de un cliente que será usuario de la aplicación.
AP: Responsable de Clientes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08280vVKxJnoE71fNkqjiEv64_sB5V9-CSSwCMhK6Z8cmMLM3iEZv_5T1DzYwRIyER5IgJW_BrU7V5YSSiZ8p2PochbuwenaumnFtajben8kMjB6uNCUJTH8UOAt7b7a5qa-I-=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SzNzUpMNpjYGP1hsqh42QIKsddwRFUNvt7oC_Ed8jOcCDAdLRdppoLeVqWseauhK881RJ4mLIU_ruOlRfE4GVd4Wcr54gvHmKmS3xka-LArwd2PNmJtRMToy5sBK99GPEcrhWHw=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Nro .
Paquete Nombre del Caso de Uso
Objetivo/ Descripción Actor
5. Administración de clientes
Modificar cliente Modificar los datos permitidos de un Cliente. AP: Responsable de Clientes
6. Administración de clientes
Consultar cliente Consultar los datos de un Cliente. AP: Responsable de Clientes
7. Administración de clientes
Eliminar cliente Dar de baja un Cliente. AP: Responsable de Clientes
8. Administración de Usuarios
Iniciar sesión Iniciar una sesión en el sistema, validando los permisos y accesos a las funcionalidades de la aplicación según su rol.
AP: Usuario
9. Administración de Usuarios
Cerrar sesión Cerrar una sesión en el sistema cuando el usuario así lo requiera.
AP: Usuario
10. Administración de Productos
Registrar producto Registrar los datos de un producto que se ofrecerá para la venta.
AP: Responsable de Carta
11. Administración de Productos
Modificar producto Modificar los datos permitidos de un producto que se ofrecerá para la venta.
AP: Responsable de Carta
12. Administración de Productos
Eliminar producto Dar de baja un producto. AP: Responsable de Carta
13. Administración de Productos
Consultar producto Consultar los datos de un producto. AP: Responsable de Carta
14. Administración de Productos
Registrar variante Registrar los datos de variantes para un producto que se ofrecerá para la venta.
AP: Responsable de Carta
15. Administración de Productos
Consultar variante Consultar los datos de variantes para un producto. AP: Responsable de Carta
16. Administración de Productos
Modificar variante Modificar los datos permitidos de variantes para un producto.
AP: Responsable de Carta
17. Administración de Productos
Eliminar variante Dar de baja una variante de un producto. AP: Responsable de Carta
18. Gestión de pedidos
Registrar pedido en mostrador
Que el cajero registre un pedido de un cliente en mostrador para ese momento de tiempo.
AP: Cajero
19. Gestión de pedidos
Modificar pedido en mostrador
Consultar los datos de un pedido realizado en mostrador.
AP: Cajero
20. Gestión de pedidos
Modificar pedidos de la semana
Que un cliente empresarial modifique uno o más pedidos para una semana determinada.
AP: Encargado de pedidos del Cliente
21. Gestión de pedidos
Consultar pedidos de la semana
Consultar uno o más pedidos realizados para un periodo determinado
AP: Encargado de pedidos del Cliente
22. Gestión de pedidos
Cancelar pedido Registrar la cancelación de un pedido AP: Creador de Pedido
23. Gestión de pedidos
Consultar pedido Consultar uno a más pedidos según criterios predefinidos.
AP: Encargado de Pedidos
24. Gestión de pedidos
Iniciar preparación de Pedido
Registrar que se inicia la preparación de un pedido con todos los detalles de pedido que contiene.
AP: Responsable de Cocina
25. Gestión de pedidos
Finalizar Pedido Actualizar el estado del pedido informando que está preparado
AP: Responsable de Cocina
26. Gestión de pedidos
Registrar entrega de pedido
Registrar la entrega de un pedido a un cliente, actualizando el estado del pedido.
AP: Liberador de Pedido
27. Gestión de pedidos
Generar hoja diaria de visita para cadete
Generar hoja de visita diaria ordenada según dirección de los Clientes empresariales para optimizar la distribución de los pedidos.
AP: Encargado de Pedidos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3l7YVxdSpMs_PL0EeIdNpWYKf52aPqSZVJnZZGproUKJtWaxbtRrLmpiNHYowgYTTh0XJbs9FtlkyxedkdXU7XfTOB9j3V5wIsIKtsCPErg5X7obLujGKCC-ad-DY8QbuUJ-sS2A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0B4ga0PJ2GSvj2NUyz4Q_Ap5-Py2G_WaBBUy97xXKFOAdJHYXM0_ELpx818IY09kfy_GUu70H_aULv6BHupsHnLDU7--5-cOQCmxHvhX96SdQo3VyOlwcVetuEqPPuKgdr6ZjjQw=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Nro .
Paquete Nombre del Caso de Uso
Objetivo/ Descripción Actor
28. Gestión de pedidos
Iniciar reparto de pedidos
Registrar el inicio del reparto de pedidos, actualizando el estado de los pedidos y notificando por WhatsApp a los encargados de pedidos de clientes cuyos pedidos estén incluidos en la entrega para alertarlos de que recibirán su pedido en las próximas horas.
AP: Cadete
29. Gestión de pedidos
Consultar ruta Consultar en la hoja diaria de visitas la ruta para la entrega de los pedidos a los clientes empresariales
AP: Cadete
30. Gestión de facturación y cobros
Generar factura para pedidos semanales
Generar la factura para un pedido realizado por un cliente empresarial, eligiendo el pedido que desea facturar.
AP: Encargado de pedidos del Cliente AS: ARCA
31. Gestión de facturación y cobros
Validar facturación de pedido empresarial
Validar si existen pedidos empresariales con entrega el día de la fecha que no han sido facturados
N/A
32. Gestión de facturación y cobros
Generar factura automática
Generar factura para pedidos de clientes empresariales pendientes de facturación cuya fecha de entrega es la fecha del día.
AS: ARCA
33. Gestión de facturación y cobros
Generar factura Generar factura para pedidos de clientes al paso. AP: Cajero AS: ARCA
34. Gestión de facturación y cobros
Procesar pago con transferencia bancaria
Procesar los pagos, que los clientes empresariales realizan por transferencias bancarias cuando se accede a la información que disponibiliza el banco.
AP: Banco
35. Gestión de facturación y cobros
Registrar pago con Mercado Pago
Registrar el pago de un pedido que se efectivizó con la plataforma de mercado de pagos
AP: Creador de Pedido AS: Mercado Pago
36. Gestión de Reclamos
Registrar tipo de reclamo
Registrar los datos de los tipos de reclamos, indicando si es un tipo de reclamo crítico o no lo es.
AP: Responsable de Clientes
37. Gestión de Reclamos
Consultar tipo de reclamo
Consultar los datos de un tipo de reclamo AP: Responsable de Clientes
38. Gestión de Reclamos
Modificar tipo de reclamo
Modificar los datos permitidos de un tipo de reclamo AP: Responsable de Clientes
39. Gestión de Reclamos
Eliminar tipo de reclamo
Dar de baja un tipo de reclamo. AP: Responsable de Clientes
40. Gestión de Reclamos
Registrar un reclamo Registrar un reclamo por un pedido indicando los detalles del reclamo, la fecha y asociando el tipo de reclamo.
AP: Encargado de pedidos del Cliente
41. Gestión de Reclamos
Consultar reclamos propios
Consultar la situación de uno o más reclamos realizados, en función de criterios determinados.
AP: Encargado de pedidos del Cliente
42. Gestión de Reclamos
Consultar reclamos Consultar la situación de uno o más reclamos realizados, en función de criterios determinados.
AP: Responsable de Clientes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zXhtYfQu-2y-yZ_BKtiHel2VGOkD0lX9ET63nANCmwn6UPGq8rHs3F6DDSYIqGoAgcf0v8zdj3RQ-7p-LlK4Bw2Nq7UYt1Oa1nJ53PHibtIZBI8k_Y1-Em1XHRKP5nZ6PtHUtkw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KsyO0vG3L0SRdjNTSW97iSgu7i9te3WI1ZIyZFt7MBWKjt220KJ7BkEikf_AvhhURuamFVGRtZjOW1w-A02o0cwzyLTtgZ2LtF2_SDAc2xl1YkFHrWzHa03-kGKRDdvwWRS9v=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cm5QYhjVKH3tAK7gl3P9YOVNJZYD8UI5LCM31pxX7rDR-GPGDnI6lTTGPY2DDk7vlhhzNh6SY_CS4UttgkpxJxD1iMXYVSyFOyoixm0o8UjNH3sIs7w5X8CLdDCCuvmH-Uul5=w1217-h1280-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
SOLUCIÓN PROPUESTA: VISTA ARQUITECTÓNICA DE LA FUNCIONALIDAD:
Justificación de la inclusión de los casos de uso en la vista:
Caso de uso Justificación
10. Registrar producto 11. Modificar producto 12. Consultar producto 13. Eliminar producto
Casos de uso complejos que resuelven la lógica de ABMC de una entidad de negocio y definirán por lo tanto:
- algoritmos de alta, baja, modificación y consulta de entidades
- accesos para consulta, inserción y actualización de la base de datos
- diseño de la interfaz de usuario Además resuelven el RNF 1 Tecnología Web, RNF 14 Base de Datos y RNF 15 Despliegue en la nube
1. Registrar pedidos para la semana Transacción compleja representativa que resuelve la lógica de transacciones y define estrategias de commit y rollback de
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mGrci8gJZoOkBysdG7qZ7H1V-F32vwcs5Gy4AFUrL_GSYuquuSXmtvQgxbN-H5ljdCtra_l2yV3YkO3cIoGsXdPnGUnSp6tq66ZEDmHda0dhf9balN0p8QejGkSc49bZuIqiI=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rxIX5dK7Rdz7Tqx57_lX7RscUk_DS1CtF9ksppefh_2fIp0ojY-Xb4-MbCygDW8MAY2jAqs1C3HBZNtbc6jVqW1twkKuT76jNwXNRe6hY_nY1lufcrnmLJfuOXvBEkQ6oYavrYA=w188-h235-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
Caso de uso Justificación
transacciones, diseño de la interfaz, acceso a la base de datos de manera encapsulada.
28. Generar factura para pedidos semanales Transacción del sistema elegida para resolver el RNF 4 Conexión con web service de ARCA
32. Registrar pago con mercado pago Caso de uso que resuelve la comunicación con la pasarela de pago de Mercado Pago. Resuelve el RNF 8 Mercado Pago
8. Iniciar sesión Caso de uso que resuelve la lógica de sesiones, perfiles de usuarios y permisos en función del usuario logueado. Resuelve el RNF 13 Seguridad de Usuarios
23. Finalizar pedido Caso de uso que resuelve la generación de una alerta sonora. Resuelve el RNF 7 Alarma Sonora. Caso de uso que resuelve la implementación del front end responsive para la consulta de pedidos desde dispositivos con diferentes resoluciones. Resuelve el RNF 2 Front End Responsive. Aclaración: Se puede considerar que este RNF se resuelve en otro caso de uso, si aclarar eso no hay problemas y este CU puede NO estar
1. Generar reporte de tasa de reclamos Caso de uso que resuelve la lógica de reportes. Define el acceso a base de datos para consultas masivas y algoritmos para el tratamiento de grandes cantidades de datos. RNF 12
2. Generar estadísticas anuales de ganancias Caso de uso que resuelve la lógica para el cálculo y generación de estadísticas basado en grandes cantidades de datos y utilizando gráficos para visualización de resultados. RNF 11 y RNF 12
26. Enviar notificación de pedido Caso de uso que resuelve el envío del mensaje de WhatsApp al cliente cuando el pedido está en camino. Resuelve el RNF 10 Notificación vía WhatsApp.
27. Consultar rutas Caso de uso que resuelve la implementación mobile de la aplicación para el cadete y la visualización de los puntos de entrega en un mapa de Google maps. Resuelve los RNF 5 Aplicación mobile para el cadete y RNF 6 Interfaz con Google Maps
34. Procesar pagos con transferencia bancaria Caso de uso que se ejecuta automáticamente para el procesamiento de las transferencias bancarias. Se deberá definir cómo se disparará automáticamente, bajo qué control, y cómo comunicarse con el sistema bancario. Resuelve el RNF 9 Cuenta Bancaria
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3D7GBJrzmjVRZB6C52yqfyzBNbJ-dWaMg6iTo_6-VCRLixhzgAhGyv4inSmhWmDVxU6WxMT3hZc73q0C8r_rJRUbJUFHCvtN-SKk7a1w4ngbmhTmUj5nOvlEuRSkCtgT7SJJ7GKg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tTfP78XxDORNQQr8SCXanUGcD8fnj1VW7a5G-9prZBF8c7w0leUSQafm40fVO4CpTqL8jkniboVqUE5RSvkkshsBYwLgXiqPhwojBOshYqSXepfcyjzUP71breuHU5FCRLnj5=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UMn5JysTEGwaIFetxkbH743jToQHKB59Qbrm2EohbefGcY07Ylz5454LYlsSA1p_U9_p9vpJJnHykH2NI3c9xbvMqnPThSdu2_wjyHCvQ6j5fBbW9fHE1zg9tD5IRcs_lRKWNUA=w1280-h1066-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
DESCOMPOSICIÓN EN SUBDOMINIOS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1plXjnfy4ldq01rLUdzsCQMJtoyrtZwGsDCGINCWB8oxhctczNdgbTrqZoZH_uLLksfkXny5jIKWdRycR2AfCIai_JER2xMbEspdANpStm_5fcIWNF5vu3VvIeb8-jCVgUYe4Ivg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2anc956iQqJSc1DxTFrchtPExMj9meSNV_MvETGknrfdCepwp7Tr1EVAdnDEbfLCn_ZeW3FKzYP1ECVEMNMPQINC1PtT1Wecx5s-w2YwQ5llvIj3xOZgu5gQ7aHGSUT4S5rmjSmQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NBFo_Rp7FUa42PH8n_eU8YlpVbMMMO-FLjY0N-vUO4NxmsarNCf5PJDGWypRC3rMwtxs3GRlY6oWmsOcMnVldkcr9ZKlkREcQPZzLUs7wa0NFqArg5BmsTuc7bQHoGkPAM8WalA=w1280-h1159-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
VISTA GLOBAL DE DISEÑO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jbwfcxM4hAPv6d63eD5QotYKcKGK_O_BtWUmWce37wRFjEAhFKwyIXn9lDhZps23PYF6GzQ0M0bDGXjf9eE58o3Tj9gzk-wt1zsasWOyXe0oSZqfvx2jV3xG8i1zevTAkXHI8KA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NDIICYllfEsYuJsIDG2P0dkOA0NbCCESsF6xukID4gVp7V0h8q1GBkgy3wTUanLC92fllJkHGl1QnYLD23GZbUkr7KmW8SV_otJfv1F8qp87CgINhv0h7mbQLzdW6bcydFEyh=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3venJT7WUS9GgvbPyeImfCIU-mreV4V3vyt39QJ_XwAAqqazop50YX-3Cvo_x7prAxcRqGbbembx6ulIcbYD4c4PmNvIht0gfH9AFYM2dXYDG9UgQGJGOIbP4f_sdPEYBRLeRjdw=w1280-h772-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información
Cátedra de Diseño de Sistemas de Información
VISTA ARQUITECTÓNICA DEL DISEÑO – SUBSISTEMAS, COMPONENTES E INTERFACES
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nbQvxk9Qs6eut1Lefrzv7nSv_gmkLZe_fTBEkuvDTvGMwoWNC1jfDkZxJPqK8l_V2QorsHH1m1pWHDVtzFq7TGk3DQ_VSH_z0pncN6ASjkapZKPq143R-Nht7LQ27niP9QtBk=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WPd7JTls_5XYR9Sx2CnysuNsbIcsU95cysd0pKTZeqpSNJ3kgqyyz3dbRN9i3C7cz4kV4OPQ_mdHqz3m7VlE1WSPRa2L2Rj8-S-PM_UX6p3ji6gvXI1gyW4Q3dFR8eD4E3iAWvw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fmRJyGsckf8wB_6M67Puzc6Ii0W3qHzDOk7z2q6i8pcLckRbnaiRGpTBCI4S8Mzrg0YA9xgWOzc3ru8oOw4exXfTKABzUD3EzmjLaHuKY6S9nh1reHfkzxqXLgIXi2MKOo7tQ-g=w1280-h966-v0?authuser=0)
Universidad Tecnológica Nacional - Facultad Regional Córdoba Ingeniería en Sistemas de Información Cátedra de Diseño de Sistemas de Información
VISTA ARQUITECTÓNICA DEL DESPLIEGUE – DISTRIBUCIÓN DE SOFTWARE EN HARDWARE
