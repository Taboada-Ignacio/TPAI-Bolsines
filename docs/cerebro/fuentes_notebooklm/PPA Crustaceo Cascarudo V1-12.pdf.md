# PPA Crustaceo Cascarudo V1-12.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto describe el 
Proyecto Práctico de Aplicación
 para una materia de 
Diseño de Sistemas de Información
, centrado en automatizar la gestión operativa y comercial de un local de comida rápida llamado 
Crustáceo Cascarudo
. El sistema abarca tanto la atención presencial de clientes al paso mediante 
pedidos en mostrador
 como la administración corporativa de 
pedidos semanales
 para empresas, contemplando además el flujo completo de 
facturación electrónica con la AFIP
 y los pagos a través de 
Mercado Pago
 o transferencias. Asimismo, la arquitectura del software implementa 
patrones de diseño
 y capas web y móviles para optimizar funciones logísticas como el 
reparto de pedidos con cadetes
, la 
gestión de reclamos
 y la generación de 
reportes estadísticos
.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y2cw5YOr9A2VtlqOgCj0PEziQM7g20nSR7GDGapmxBymoeNAGFPbD7Vv9pWavsgOEnQjaFMe8tGuAKUOODgFtNR0OF71fjd_VSbTnKmZFm4t5KF2GKZcLwgxCmv1qLNZ-h0JK1A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_J0BGJK1e-_3hFiczCHYIeKKbtQpVCiCzYydDdsGE4bKYxx5qhsbPErOvgdAHU2GOH9uO6QL_BlfQlibIfbC5YVUwcfDxxaEZTOjFCUVjjJl--scIvz5Fxu1ukq5tMtRCqNFhlg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12

## Proyecto Prá ctico de Aplicácio n

Nombre del Proyecto Práctico de Aplicación: Crustáceo Cascarudo
Objetivo del Proyecto Práctico de Aplicación (PPA):
El Proyecto Práctico de Aplicación denominado Crustáceo Cascarudo, tiene el propósito de desarrollar la especificación de un producto de software para dar soporte a los procesos de negocios vinculados a la gestión de un restaurante de comida rápida. Se destaca que las vistas que se desarrollan no están completas, ni son exhaustivas, se toma de cada uno de los modelos, elementos referenciales con la intención de reflejar ciertos aspectos destacables del producto de software que se está construyendo.
Objetivos de la Asignatura con respecto al PPA: El Proyecto Práctico de Aplicación, tiene el propósito de reflejar cada una de las actividades de modelado requeridas para el desarrollo y construcción de un producto de software en función del proceso, las técnicas y las herramientas que se enseñan en la Cátedra Diseño de Sistemas de Información. Este PPA representa una simplificación de un caso real, en el cual los estudiantes podrán desarrollar las habilidades para aplicar los conocimientos adquiridos.
Contenidos de la Asignatura que se abordarán en el PPA:
⮲ Modelo de Requerimientos como punto de partida para el modelado de la solución.
⮲ Modelado del Comportamiento en el Análisis
⮲ Patrones de Principios generales para asignar responsabilidades (GRASP).
⮲ Modelado de la Estructura en el Análisis
⮲ Diseño Arquitectónico – Patrones Arquitectónicos
⮲ Diseño de la Estructura del software.
⮲ Diseño del Comportamiento del Software
⮲ Mapeo de estructuras de clases a bases de datos relacionales – Patrones de Persistencia.
⮲ Diseño de Interfaces de Usuario
⮲ Patrones de diseño
Consigna asociad al Proyecto Práctico de Aplicación:
En el siguiente PPA se desarrolla: 1. Modelo de Requerimientos:
a. Objetivo, alcances y reglas de negocio. b. Modelo de Casos de Uso del Sistema de Información (Listado de Casos de Uso, Vistas de
casos de uso, descripción de actores y descripción de algunos de los casos de usos. c. Prototipos de Interfaz de Usuario. d. Modelo de Dominio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rlMJal2OgFmA3Otrr_lyeYH6NQDdccoagYfvEI88ATRWxXTe1aszcuF8QtBNazaSz5KaIAycch5AHyQZNnnWV0vGb4y3YWa4Q4jdCBCEKcpc_nHqKDysuCj_mywkQnPnQyZoT=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NfUee1JJrzQSpSbfskxGnLbNop-N9YYU0gb2Fo510AAkvdzP5SYxyNpKJOOgwLzd2qy_gUV5pneC4-6EvAUBszZGLqsMXZllHkNzp_wSt0iBcKlg6XFY3VNvc7I-UDXEYi-jT3g=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
e. Especificación de Requerimientos No Funcionales.
2. Modelo de Análisis: a. Realización de Análisis de los Casos de Uso, aplicando patrones GRASP b. Máquina de Estados.
3. Modelo Arquitectónico a. Especificación de RNF b. Identificación y aplicación de Patrones Arquitectónicos Significativos. c. Realización de vistas arquitectónicas.
4. Modelo de Diseño:
a. Realizaciones de Casos de Uso de Diseño, parte estructural con diagrama de clases y parte dinámica con diagrama de secuencia, aplicando los patrones de diseño más convenientes.
i. Realizar el rediseño necesario para modelar una solución que resuelva de forma flexible el cálculo de la tasa de reclamos a los pedidos realizados por los clientes de acuerdo con el método seleccionado por el actor.
ii. Resolver el proceso de creación de los reportes de tasa de reclamo en sus diferentes formas de visualización (Por Pantalla, PDF, Excel).
iii. Resolver de forma eficiente la obtención del número secuencial que corresponde asignar al Pedido al momento de su creación.
iv. Resolver de forma flexible la búsqueda de pedidos que correspondan a los filtros seleccionados por el usuario para la generación del reporte de tasa de reclamo.
v. Resolver de forma flexible la búsqueda de combos de productos, productos y sus variantes para mostrar durante la creación de pedidos.
b. Mapeo de clases a BDR. c. Diseño de Interfaces.
Criterios de evaluación del PPA (Si aplica): Sobre los prácticos que la cátedra utilizará se evaluarán los siguientes aspectos, vinculados al cumplimiento de los resultados de aprendizaje:
1. Trabajo acorde a las consignas presentadas 2. Que resuelva correctamente el problema que el proyecto presenta y cumpla los objetivos definidos
para éste 3. Validar la consistencia de cada uno de los modelos que se van desarrollando. 4. Respetar los aspectos formales de la presentación del práctico. 5. Cumplir con la fecha de entrega acordada 6. Integración del grupo en la realización del trabajo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0afp3ofmiUuQzLYtR4zNRpx3QLiyotoLbliGEH8Kkc5tevCR7g0P3RQffErQE7ja4OsA_xKb--FZRNX7tuRbCi0GirI-jUakwKtdnX1qMkzAH9CH6roEa618pY2e6M3weeA2fqGQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KqlwvyVOrkaQ5-jkf47R9pkTSjmklKFDgD_WpSzqUZeMZzUDb8-LpTztsCCDfKgri_M6nwDSdwgZd_ySluKoRDxnMV8tDmhzOT6SNQuyI6oY9KOGR3s3j_cawzuOVjY0neLFh=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Glosario
Glosario
Web Service Tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones.
SOAP Protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.
Tipo de IVA
La Administración de Federal de Ingresos Públicos (AFIP) define distintos tipos de Impuesto al Valor Agregado (IVA). Todos los productos tienen un tipo de IVA que puede ser:
IVA General del 27,5%
IVA General del 21%
IVA Reducido del 10%
IVA Superreducido del 4%
Actividad exenta del 0%
Base Imponible
La base imponible es el monto sobre el cual se calculan los impuestos. Este monto no contempla ningún tipo de impuesto. Es equivalente al costo de fabricar o comprar un producto al proveedor más el margen de ganancia. Si se vende un producto al público a $121 con un IVA General del 21% entonces la base imponible es de $100.
CAE
El C.A.E. (Código de Autorización Electrónico) es un número que otorga la AFIP al autorizar la emisión de un comprobante por web service, aplicativo RECE o por el servicio por clave fiscal "Comprobantes en línea" ("facturas electrónicas"). Sin CAE, la factura no tiene validez fiscal.
AFIP Administración Federal de Ingresos Públicos
Descripción del Dominio asociado al Proyecto Práctico de Aplicación
Rodrigo es el dueño del Crustáceo Cascarudo, un local de comida rápida al paso que vende comida como hamburguesas o paninis a personas que pasan por su local, en un área muy transitada de la ciudad. El Crustáceo Cascarudo se encuentra cerca de una zona de muchas oficinas, así que Rodrigo hizo un contrato con las empresas que trabajan cerca para proveer el almuerzo a sus empleados.
Rodrigo vende en su local distintos tipos de sándwiches, hamburguesas y panchos, así como también papas fritas o ensaladas. Cada uno de estos productos tiene un nombre especial, un precio y un conjunto de ingredientes para su preparación. Además de esto, la mayoría de los productos tienen variantes, esto quiere decir que para un determinado ingrediente puede haber más de una opción (como el tipo de pan o el tipo de carne). La variante elegida para un ingrediente en un producto no altera su precio, Ves necesario identificar cual es el ingrediente con variantes para un producto y poder enumerar todas las variantes para ese ingrediente, algunos productos tienen ingredientes por defecto en las variantes. Un ejemplo es la hamburguesa Cangreburger, que cuesta $1200 y se prepara con lechuga, tomate, pepinillos, queso, mayonesa, kétchup, el ingrediente secreto y además tiene variantes en el tipo de pan (que puede ser brioche, pan mollete o pan cristal kornisptiz) y el medallón (que puede ser de carne de vaca, cerdo, pollo o pescado). En la cangreburger los ingredientes por defecto son el pan brioche y el medallón de carne de vaca en caso de que el cliente no especifique la variante. No todas las variantes son mutuamente excluyentes, puede ocurrir que para unas papas la variante sea el aderezo y se desee elegir mayonesa y kétchup. Algunas variantes pueden hacer referencia a ingredientes Premium o ingredientes que normalmente no son parte
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fzDOwUE9yI1pzlhjX8iiNHlLOUD1EP6eMlazK2UeuhmMEDtj9p9fSG2nuRzjE76Xn26Vcrzjq3iijA2ZNNK7xZZVpDqv43R5FrQJJzpqX6Tg9J3EGa5mYYntW2EqKrfpPxrGhIA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HiVhTyOCKIj0Y9bgyOLOCgVnFQPRVcMd9so8ixse2pr6PESPr1oWL7Sl26CTMrfGgqYpZz_LevSoFpWQvMdeRySphYirHM1NzIdBjP2VyqU_Hs2nAHUKHDyiVDvogNq-e5YNYCw=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
del producto, pero se pueden agregar. Estas variantes tienen un costo extra al agregarlas independientemente del ingrediente elegido. Por ejemplo, agregar guacamole o mostaza de Dijon a una cangreburger.
Los clientes del Crustáceo Cascarudo pueden comprar los productos de manera individual o en combos. Rodrigo arma estos combos con sus productos más vendidos y sus combinaciones de productos más pedidas. Los combos son armados al principio del mes y se pega el listado con imágenes representativas en la puerta del negocio. Los combos generalmente llevan algún tipo de sándwich, un acompañamiento y una bebida. Para cada sándwich y acompañamiento se puede pedir cualquiera de las variantes del producto individual; para la bebida se ofrecen 3 variantes: Coca-Cola, Coca-Cola light y agua. Cada combo tiene un precio particular y un nombre por el cual se lo puede identificar. Un ejemplo es el Combo Crustáceo que cuesta $1600 e incluye una Cangreburger, unas Papas Marinas y una gaseosa a elección.
Rodrigo atiende el mostrador tomando los pedidos de las personas que pasan por el frente de su local. Desea poder registrar el pedido en un producto de software, incluyendo todas las variantes que el cliente pida. Rodrigo debería poder agregar alguna observación en el pedido para registrar si el cliente no desea alguno de los ingredientes.
Un cliente podría pedir un Combo Crustáceo donde la Cangreburger tenga pan brioche, un medallón de pollo, Mostaza de Dijon (Ingrediente Premium no incluido en el combo) y sin pepinillos. Las Papas Marinas del combo con Kétchup y la gaseosa una Coca-Cola Light. Además del Combo Crustáceo el cliente puede pedir un Perro Marino (un tipo de pancho) con el ingrediente Premium Salsa Picante Calamardo y como acompañamiento los Trocitos de Coral sin salsa tártara. Rodrigo tendría que poder registrar los 3 ítems (El combo, el Perro Marino y los Trocitos de Coral) registrando los ingredientes extra de cada uno y el precio de cada uno.
Según una regulación de AFIP es obligatorio aceptar tarjetas de débito como medio de cobro en cualquier local comercial, razón por la cual Rodrigo ha decido utilizar la pasarela de pagos Mercado Pago. Si el cliente quiere pagar con tarjetas de débito o crédito, Rodrigo les pide que escaneen con la aplicación de Mercado Pago el código QR del local. Cuando los clientes hacen esto aparece en sus celulares el logo del Crustáceo Cascarudo, el nombre del local y el monto a pagar. Los clientes eligen dentro de la aplicación de Mercado Pago la tarjeta con la que desean pagar y confirman el pago. A Rodrigo le llega la confirmación de Mercado Pago indicando que el proceso se completó de manera exitosa. Los clientes pagan su pedido una vez que reciben su pedido.
En cuanto a los clientes empresariales, en cada empresa habrá un responsable de ingresar y/o modificar los pedidos para toda la semana, los lunes; es por esto por lo que se acordó la necesidad de un producto de software web.
El responsable de pedidos de cada empresa registrará los pedidos con todos los detalles y requerimientos especiales y el día de entrega de cada pedido; que estarán disponibles para que Rodrigo consulte. Se genera un pedido para cada día de la semana.
Rodrigo tiene un acuerdo con sus clientes empresariales en donde los pedidos pueden ser editados hasta un día antes de su fecha de entrega o hasta que se facture el pedido; ya que cada responsable de pedidos de cada empresa puede elegir el momento en el que se facture un pedido (opciones: al crear el pedido o en cualquier momento posterior, hasta el día de entrega del pedido). Si el responsable de pedidos de la empresa no lo factura hasta la fecha de entrega ese pedido se factura automáticamente. Por ejemplo, un cliente empresarial puede pedir 5 combos Cangreburger para el lunes, 5 combos Cangreburger para el martes y 4 combos Cangreburger para el miércoles, y puede editar el pedido del miércoles agregando o quitando combos Cangreburger hasta el martes a las 23:59 horas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UrikT91LKghDG_MGYu7KzOrYX7AKSkPu2zppGE72EDEtogE47oMaatybuLCatXbYqHJfEyI8N5gPNYdUiBSBW0bE9E-X-LsTshS-I76WUer2OlA1HbXXUccT-4IGuMXN2cRoRlg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1N15-KyhJu3H1uwakuJjGLOC6waZj3ztDiOFvRVcYgtgyTGujPkuNRcKg5WrzRgtzuL2lleg57xUINCM8FMpJrKOgFBZAR-cFcWtZ-KqV_W33ZfZo9U6lKvmkAKUh2HG77w5GHcA=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Los clientes empresariales pagan todos los pedidos a fin de mes mediante una transferencia bancaria,
al recibir la notificación del banco de que ingresó una transferencia a la cuenta, el sistema con esos datos actualizará los pagos de los pedidos del mes. Todos los pedidos realizados en mostrador y los pedidos empresariales para ese día deberían mostrarse en una Tablet con sistema operativo iOS que Rodrigo compró para la cocina, el software a desarrollar deberá ser compatible con el navegador Safari 14. Es importante saber si un pedido es al paso o empresarial para que el cocinero pueda saber la hora de entrega de cada uno. Cuando un pedido ingresa a cocina para ser preparado debe sonar una alerta para llamar la atención del cocinero, Bob. Al mostrar el pedido en la Tablet se debería mostrar las especificidades del pedido junto con cualquier observación que pueda tener. A medida que Bob comienza la preparación de los pedidos, lo indicará en el producto en su Tablet. Cuando Bob termina de preparar un pedido actualiza la situación del producto en su dispositivo mobile, del mismo modo que cuando inició la preparación. Su asistente, Patricia, los envuelve para llevar y los lleva al mostrador, marcando en la Tablet que el pedido está Listo para entregar, y haciendo que suene la alerta sonora. Los pedidos al paso son entregados en el momento y se los marca de esa manera, mientras que los pedidos empresariales son guardados en un lugar aparte.
A las 12:30 el cadete sale con todos los pedidos empresariales y Rodrigo indica para cada empresa que sus pedidos ya se enviaron, esto dispara un mensaje de WhatsApp a cada uno de los clientes que están esperando su pedido. Cuando el cadete entrega el pedido debería poder informarlo, utilizando una aplicación en su teléfono celular, el cadete de rodrigo tiene un smartphone con Android 12. En su aplicación el cadete debe poder ver un mapa utilizando Google Maps que le indique la ruta mas corta a seguir para llegar a todos los clientes. En la aplicación debe poder ver también que pedido le corresponde a cada cliente empresarial.
También se debe dar soporte desde el producto la posibilidad de que un cliente empresarial que tenga una queja o un problema con un pedido pueda registrarlo, y hacer seguimiento de la evolución de su reclamo. La gestión del reclamo es independiente del pedido y no afecta su evolución.
Según la nueva regulación de AFIP todas las facturas que hace el Crustáceo Cascarudo deben estar homologadas en el sistema de AFIP. Para esto AFIP provee un web service de tipo SOAP al cual se debe enviar la información de la fecha y la hora, tipo de factura, cliente, monto total de la factura, los ítems vendidos y el detalle del monto de cada ítem vendido. AFIP procesa cada factura y devuelve un numero de CAE identificador de cada factura.
Dado que Crustáceo Cascarudo está registrado ante la AFIP como responsable inscripto, puede emitir facturas de tipo A y/o B. Las facturas de tipo A sólo pueden hacerse cuando el cliente está registrado en el sistema y su condición tributaria es Responsable Inscripto. Las Factura B se hacen a clientes registrados con condición tributaria de Monotributista o a consumidores finales no registrados en el sistema. Para los clientes cuya condición es “consumidor final” en el apartado de cliente se debe enviar “CONSUMIDOR FINAL” a AFIP sin informar el CUIT. Mientras que si se hace una factura a un monotributista o responsable inscripto debe enviarse el nombre o razón social y su CUIT.
Es necesario cumplir con las regulaciones de facturación que dicta AFIP. En el caso de las facturas de tipo A, el IVA debe ser discriminado. Es decir que cada ítem de la factura debe mostrase en la impresión sin el IVA. Y al pie de la factura debe mostrarse, en el orden indicado, la base imponible totalizada, el monto a cobrar por cada tipo de IVA y el monto total de la factura. Por otro lado, para las facturas de tipo B no es necesario discriminar el IVA. Esto quiere decir que los ítems deben mostrarse con precio después de impuestos y al pie de la factura debe mostrarse el monto totalizado de la factura. Cuando se envía la información a AFIP para homologar la factura se debe enviar respetando el formato por tipo de factura.
Todos los reportes deberán visualizar la información tanto en listados como en gráficos (barra, torta, dispersión, etc.) y se debe permitir la exportación de los reportes y estadísticas a formato Excel (xls o xlsx) y a PDF.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Mk8Ev9ldoNt5SjIVlSG8kW7019rDB61vjmNH0rMZqsO8Dps-rXjPD2xFgn6DY1L7E_0vpEtZUlLjpbElZ9fH3UsxV1qIkZhyoo20_h7VruG8S0_wGjs2ZkOyoOdBF1dARaoHSpA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VAiDL_cVGlNmVT74AT8ESbzCHsLdEWJaVO33-qP-TeB_dv7ujjD9g_aJaLEdIQiijpMR9x1iAyoMhv7rUHjpsQE4Y6flvAbz7q_OtlnPbesgeUbTIVFC7zT6cmgB9MBPXr4Q5=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Solución Propuesta
Definición del Producto de Software:
Objetivo del Producto de Software: Gestionar la venta, facturación y cobro de productos individuales y combos de comida rápida, generando información relacionada a los pedidos, cobros y reclamos. Alcances del producto de software:
Administración de productos individuales y combos
Administración de clientes
Gestión de pedidos
Gestión de facturación de pedidos
Gestión de cobros mediante transferencias bancarias para Clientes Empresariales y con Mercado
Pago para Clientes al paso.
Gestión de reclamos
Administración de usuarios
Generación de reportes de pedidos, facturación, cobros y reclamos.
No contempla:
Gestión de empleados
Reglas de negocio
Nombre de la RN Descripción de la RN
Cambios a pedidos empresariales
Los pedidos empresariales pueden cambiarse hasta un día antes de su fecha de entrega. El día que deben ser entregados no pueden ser editados.
Facturación AFIP Tipos de facturas que la empresa genera son: Tipo A: para clientes responsables inscriptos; Tipo B para monotributistas.
Reclamos Únicamente para clientes empresariales, se debe crear un reclamo por pedido. La gestión de reclamos es independiente de la gestión del pedido.
Tipos de Clientes Clientes Empresariales y Clientes al paso.
Cumplimentación de pedidos
Los pedidos se preparan completos, todos los detalles de pedido juntos, no se hacen entregas parciales.
Relación Pedido Factura
Un pedido debe facturarse todo junto, no hay facturaciones parciales. No deben facturarse múltiples pedidos juntos.
Facturación de pedidos
Todos los pedidos deben ser facturados antes de comenzar su preparación, sin excepciones. Los pedidos por mostrador son facturados por el cajero una vez que se registró en el sistema y el cliente decide que no cambiará su orden. Los pedidos empresariales pueden ser facturados en cualquier momento desde su creación por el encargado de pedidos. Si el encargado no lo hiciera de forma manual, el día de la entrega el software lo debe facturar de forma automática.
Preparación del pedido
En la cocina deben informar cuando el pedido está en preparación y cuando está listo para ser entregado al cliente al paso o al cadete para su distribución.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3STPjOAV8i2WNilbjiEI6Ft4uIQ7D_j7DW3DgEFoKiDvs83r5EhpNjWzPGHXYIWO2PfaiDJlFX1JzWT4_liLNb-AnqqBLC6bukcqGqfFPVK1fR9Vdbq_84kFxxzGePLQ5dJnsf=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dtaFEAlPh-OB-thzeWyTw_oEakNftm2QqzrkRP-5HQ9jMHmR49DROVLL6JTm1kHNthWdbWnqxZPHOiijHdyodNuar2UR-EOpH9cwuYnJSk6JqgAbOp0_I4QCHVOYJEyAsBB3u=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Nombre de la RN Descripción de la RN
El cadete debe informar los pedidos que están en reparto y los que ya entregó al cliente empresarial.
Cancelación de un pedido
Un pedido puede cancelarse antes de que empiece su preparación, si ya estuviera facturado, la cancelación del pedido implica además la anulación de la factura asociada.
Entrega a domicilio La entrega a domicilio de productos sólo aplica a pedidos de clientes empresariales. El cadete debe informar a los clientes empresariales cuando su pedido va en camino y debe informar al Crustáceo Cascarudo cuando ya ha sido entregado.
Cobros a Clientes Los clientes empresariales pagan con transferencia bancaria a fin de mes y los clientes al paso pagan con Mercado Pago luego que se les ha entregado el pedido. Todos los pedidos pagados deben marcarse como tales.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qWXt7Zz2pYHrgEIpacsOLkKDjGI8w5snH_drIJkE2nLceNC31GnyaWYXVbaMnLk9Ogzz7tMahiIMXf-CrjK88frr-OXiB8vznvUvmoYdGfCmBJEWVV7HXkMjg3sEDFk9yw00sog=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TWTI1SNzfsqSTJduX5a1m3G-xc2OmTvQEL59_wtMQqDmp7PPQ06V_CVZeerUdV1HG9Y6KTE8B3sN0AJ9Xoc8rrnGdDNTICzlvBZLtiKvFVoICq7tIRqEWny_Sn1AtkU1Fl81SfA=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BjBMqUh8ksBcVY6e0jbOQVHhXSwoi82tmuZqtpXbbRwIIMCg36ZWoOGjLjtNIj7FcfrOegKskW9BQOm80r0JN7t3cTETqlhL96BMDdPddSJdWxaPWrnIp7qkTXElDSml6xxNb7Q=w1280-h1011-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista de Casos de Uso Esenciales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VLkSpHzBUlXZfpFTyqbzJAWw7znFMcao-fMrPywthag-zyM1X_Ytz2u2kPD_sGpgcprMXAFecsLjp22CI0Z7UsdcGf7WdcBHOCDPUNYBdKSb0qdA34ADRCvAVIhncw2fQeqBB=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yyN_cgkFhNJiBwh6Z2rt2MHf5fnQZTJdgMvOWIWzWy8Uoy8Po_D9DDpGtILmAOLj3DSF1jcBGOhcaMLFzVyMNEg3eOE9BYouxGZQjfW7zHxyUvUIm6UmPkn_jUOW5OJ0M45PJwg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Listado de Casos de Uso
A continuación, se muestra un listado incompleto de CU de la aplicación descripta:
Nro. Paquete Nombre del Caso de Uso Objetivo/ Descripción Actor
1. Gestión de pedidos
Registrar pedidos de la semana
Que un cliente empresarial registre uno o más pedidos para una semana determinada.
Encargado de pedidos del Cliente AFIP (Secundario)
2. Gestión de Informes
Generar reporte de tasa de reclamos
Generar un reporte estadístico que muestre la tasa de reclamos sobre pedidos de los clientes, para un período de tiempo, en función de criterios predefinidos.
Responsable de Reportes
3. Gestión de Informes
Generar estadísticas anuales de ganancias
Generar estadísticas de ganancias brutas anuales del año en curso y estimar los valores estimados de ganancia bruta, extrapolados, para el año próximo.
Responsable de Reportes
4. Administración de clientes
Registrar cliente Registrar los datos de un cliente que será usuario de la aplicación.
Responsable de Clientes
5. Administración de clientes
Modificar cliente Modificar los datos permitidos de un Cliente. Responsable de Clientes
6. Administración de clientes
Consultar cliente Consultar los datos de un Cliente. Responsable de Clientes
7. Administración de clientes
Eliminar cliente Dar de baja un Cliente. Responsable de Clientes
8. Administración de Usuarios
Iniciar sesión Iniciar una sesión en el sistema, validando los permisos y accesos a las funcionalidades de la aplicación según su rol.
Usuario (Abstracto)
9. Administración de Usuarios
Cerrar sesión Cerrar una sesión en el sistema cuando el usuario así lo requiera.
Usuario (Abstracto)
10. Administración de Productos
Registrar producto Registrar los datos de un producto que se ofrecerá para la venta.
Responsable de Carta
11. Administración de Productos
Modificar producto Modificar los datos permitidos de un producto que se ofrecerá para la venta.
Responsable de Carta
12. Administración de Productos
Eliminar producto Dar de baja un producto. Responsable de Carta
13. Administración de Productos
Consultar producto Consultar los datos de un producto. Responsable de Carta
14. Administración de Productos
Registrar variante Registrar los datos de variantes para un producto que se ofrecerá para la venta.
Responsable de Carta
15. Administración de Productos
Consultar variante Consultar los datos de variantes para un producto.
Responsable de Carta
16. Administración de Productos
Modificar variante Modificar los datos permitidos de variantes para un producto.
Responsable de Carta
17. Administración de Productos
Eliminar variante Dar de baja una variante de un producto. Responsable de Carta
18. Gestión de pedidos
Registrar pedido en mostrador
Que el cajero registre un pedido de un cliente en mostrador para ese momento de tiempo.
Cajero
19. Gestión de pedidos
Modificar pedido en mostrador
Consultar los datos de un pedido realizado en mostrador.
Cajero
20. Gestión de pedidos
Modificar pedidos de la semana
Que un cliente empresarial modifique uno o más pedidos para una semana determinada.
Encargado de pedidos del Cliente
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17EZKbB-_Ly6s7A_NTAJXRBuatdrbO_MGYfWrBsE8X1fefQcpiEt5LwWPWt6oL8yXxahN0OBNv5T-AdreRqL3MgIhyh2HIj8HVPu-ha_svEYaFvC5mhc3QfS4fZV29OhCm6FnN=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Gbb82horK-d7Dg-MBbjpNKG869zTVoUIb_v_mjtIvZqFnmR7cR8fKEsWb3Kb9TwYe0JMqXoqdXh6m90nl73akJgF-k8W0EpAErfYYBBfB-0z68vMBzxAtbbZnm7XF3ZMQ6X9HMg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Nro. Paquete Nombre del Caso de Uso Objetivo/ Descripción Actor
21. Gestión de pedidos
Consultar pedidos de la semana
Consultar uno o más pedidos realizados para un periodo determinado
Encargado de pedidos del Cliente
22. Gestión de pedidos
Cancelar pedido Registrar la cancelación de un pedido Creador de Pedido (Abstracto)
23. Gestión de pedidos
Consultar pedido Consultar uno a más pedidos según criterios predefinidos.
Encargado de Pedidos
24. Gestión de pedidos
Iniciar preparación de Pedido
Registrar que se inicia la preparación de un pedido con todos los detalles de pedido que contiene.
Responsable de Cocina
25. Gestión de pedidos
Finalizar Pedido Actualizar el estado del pedido informando que está preparado
Responsable de Cocina
26. Gestión de pedidos
Registrar entrega de pedido Registrar la entrega de un pedido a un cliente, actualizando el estado del pedido.
Liberador de Pedido (Abstracto)
27. Gestión de pedidos
Generar hoja diaria de visita para cadete
Generar hoja de visita diaria ordenada según dirección de los Clientes empresariales para optimizar la distribución de los pedidos.
Encargado de Pedidos
28. Gestión de pedidos
Iniciar reparto de pedidos Registrar el inicio del reparto de pedidos, actualizando el estado de los pedidos y Notificando por WhatsApp a los encargados de pedidos de clientes cuyos pedidos estén incluidos en la entrega para alertarlos de que recibirán su pedido en las próximas horas.
Cadete WhatsApp
(Secundario)
29. Gestión de pedidos
Consultar ruta Consultar en la hoja diaria de visitas la ruta para la entrega de los pedidos a los clientes empresariales
Cadete Google Maps (Secundario)
30. Gestión de facturación y cobros
Generar factura para pedidos semanales
Generar la factura para un pedido realizado por un cliente empresarial, eligiendo el pedido que desea facturar.
Encargado de pedidos del Cliente AFIP (Secundario)
31. Gestión de facturación y cobros
Validar facturación de pedido empresarial
Validar si existen pedidos empresariales con entrega el día de la fecha que no han sido facturados
Tiempo
32. Gestión de facturación y cobros
Generar factura automática Generar factura para pedidos de clientes empresariales pendientes de facturación cuya fecha de entrega es la fecha del día.
AFIP (Secundario)
33. Gestión de facturación y cobros
Generar factura Generar factura para pedidos de clientes al paso. Cajero AFIP (Secundario)
34. Gestión de facturación y cobros
Procesar pago con transferencia bancaria
Procesar los pagos, que los clientes empresariales realizan por transferencias bancarias cuando el banco envía la información.
Banco
35. Gestión de facturación y cobros
Registrar pago con Mercado Pago
Registrar el pago de un pedido que se efectivizó con la plataforma de mercado de pagos
Creador de Pedido (Abstracto)
Mercado Pago (Secundario)
36. Gestión de Reclamos
Registrar tipo de reclamo Registrar los datos de los tipos de reclamos, indicando si es un tipo de reclamo crítico o no lo es.
Responsable de Clientes
37. Gestión de Reclamos
Consultar tipo de reclamo Consultar los datos de un tipo de reclamo Responsable de Clientes
38. Gestión de Reclamos
Modificar tipo de reclamo Modificar los datos permitidos de un tipo de reclamo
Responsable de Clientes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0U9SWysRu8kQ5z30gzKZmc8skgb3nLuP_9HyaPfg_fTsNsga9eh7IFiBf6URW_o4KJrKE5cC6oB6JGiHqL3s4cmaWLjsCtJ9C6GWqrWx3EOR--u3GJ6S_VgsVuy96XEdbNuygO=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PQJ1AW6YWUPcYXE4xyEPMH8osYO22K-7da4l6W7wKTvdd6qP7Oz-EdLJQraEdOFjKQyiZUfe3miy9VIIrRvompHxlHjGv4V-uLtHv7JuS82bBFEcbmidJtYJb4NDO24GeG6XAQA=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Nro. Paquete Nombre del Caso de Uso Objetivo/ Descripción Actor
39. Gestión de Reclamos
Eliminar tipo de reclamo Dar de baja un tipo de reclamo. Responsable de Clientes
40. Gestión de Reclamos
Registrar un reclamo Registrar un reclamo por un pedido indicando los detalles del reclamo, la fecha y asociando el tipo de reclamo.
Encargado de pedidos del Cliente
41. Gestión de Reclamos
Consultar reclamos propios Consultar la situación de uno o más reclamos realizados, en función de criterios determinados.
Encargado de pedidos del Cliente
42. Gestión de Reclamos
Consultar reclamos Consultar la situación de uno o más reclamos realizados, en función de criterios determinados.
Responsable de Clientes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SDsS6xY4CKwmjah5JsYF-SbjEC5lKgeH7cYxIX5KBvTsHBMjrGV4BjMtanbJetckMPUqJ99FQd_48QtaLSgV8t_4MpQwzoUSC8k353V8wDv-Akx6ILHX1tAHdIB5f-SCNMSiC=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36Euolmnv4aoyKGIft2Q_MfrJv7GN3Y_ZyXEOl9nFueu4PWzTpDghvpwvGTnlT_mtiPlTGyfK97s-Fkf6Gkp1qErV8PYjwf28kLjsHmrzZjO89CPipG-dJVw2l8S_pYhNbGXZVVQ=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Listado de Actores
Nombre del Actor Descripción Categoría Tipo
Cadete Empleado de la empresa responsable de llevar el pedido al cliente y notificar al misma de la entrega del pedido.
Persona Concreto
Encargado de pedidos Encargado de diagramar las hojas de ruta de los cadetes y de registrar los pagos de los pedidos de clientes empresariales.
Persona Concreto
Encargado de pedidos del cliente
Responsable de realizar los pedidos semanales del cliente y de registrar reclamos en caso de que los pedidos no sean cumplidos de forma satisfactoria.
Persona Concreto
Responsable de carta Responsable de registrar, modificar y dar de baja los productos y los combos que ofrece el crustáceo cascarudo.
Persona Concreto
Responsable de clientes Responsable de registrar y dar de baja a los clientes corporativos que deseen hacer pedidos al crustáceo cascarudo. Responsable de ver los reclamos de los clientes.
Persona Concreto
Responsable de cocina Responsable de preparar los pedidos y actualizar su estado de preparación en el software.
Persona Concreto
Responsable de reportes Responsable de la generación de los reportes necesarios para las decisiones empresariales.
Persona Concreto
Cajero Responsable de registrar los pedidos por mostrador y cobrarlos.
Persona Concreto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LYfU20lp5uH3D2-017wYqxObRREtO8uQUTDbMeziml4i-B6aXpCEwc5AfUZ_90ZmKk7GgtuJNjT_KuqjP6jDRlNXB4YV9PSdlsUl_Nzwp4jZ2V1DUOPdCqlw7Z2QlujNI-C7olw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38_jqhm-M_4vuykIHahkyx9SQq9NhDU-nIynRPXHhpZbP-1u8WX0IStOOuaAErJUFSHdno5ucwGSfyerbjMcB9N2nooOE6_1Tw8U9a8UqetFrQisTs4fm03oG4TxkswQ40gBzwqg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Descripción de Casos de Uso
Consideración: Este caso de uso se planteó en estos términos a los fines de ser utilizado para una instancia de evaluación. La forma óptima de modelarlo sería con una llamada a otro caso de uso que resuelva la facturación.
Nombre del Use Case: Registrar pedidos para la semana Número: 1
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☐ Esencial ☒ Útil ☐ Deseable
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Encargado de pedidos del Cliente (EP) Actor Secundario:
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: que un cliente empresarial registre uno o más pedidos para una semana determinada.
Flujo Descripto: Registro de varios pedidos y facturación en el momento.
1. EP: Selecciona la opción para hacer los pedidos de la semana.
2. Sistema: Solicita que se seleccionen los días de la semana en los que se hará pedidos.
3. EP: Selecciona la opción “Toda la semana”.
4. Sistema: Busca y muestra todos los productos y combos disponibles para esa semana. Para cada producto muestra su nombre, precio, las variantes con sus ingredientes posibles y para cada variante nombre y su costo adicional si lo tuviera. Para los combos muestra su nombre, su precio, su foto representativa y los nombres de los productos que incluye.
5. Sistema: Solicita que se seleccione los productos con sus variantes y/o combos a pedir.
6. EP: Para cada día de la semana selecciona los productos con sus variantes y/o combos a pedir junto con sus cantidades por cada uno de los días.
7. Sistema: Solicita que se confirmen los pedidos.
8. EP: Confirma los pedidos.
9. Sistema: Para cada día de la semana registra un pedido con un numero secuencial único, fecha de creación y de entrega correspondiente. Para cada uno de los pedidos registra los productos y combos elegidos junto con las variantes elegidas de cada producto. El pedido se crea en estado “Realizado.
10. Sistema: Solicita que se seleccionen los pedidos a facturar.
11. EP: Selecciona al menos uno de los pedidos realizados.
12. Sistema: Revisa el estado tributario del cliente y es Responsable Inscripto.
13. Sistema: Envía una petición al Web Service de AFIP informando el número de CUIT, para generar una Factura A y es exitosa.
14. Sistema: Registra la Factura A con su número, fecha y hora, el número de CAE y el total facturado, cambiando el estado del pedido a Facturado. Fin del caso de Uso.
Flujos Alternativos
A1. El EP selecciona algunos días puntuales de la semana. A2. El EP decide no facturar ningún pedido. A4. El cliente es Monotributista. A5. La petición al Web Service de AFIP falla. A6. El EP selecciona la opción para generar un PDF con la factura generada.
Observaciones 1: Para generar una factura con el web service de AFIP es necesario enviar el monto total de la factura, los detalles a facturar con su monto, el tipo de factura a generar y el CUIT del cliente. La autorización de la AFIP está formada por el número de CAE y el número de factura.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09r3_EWd2mJ3Y4x-3DqbrjXvvRgIS-F-mRVBImpivcXfZFv2buWPQzeKoScicq91YaLk_SlNiaaGYGqGM_rMmwmO6tfQrKkhjHbexqFpabMycX6HS9wRWerGEAcmI7FzQaUMHk6w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m57dme6YyY6Q9PFTZV8rANGcsPdMZa54gmFuLV8xXP68aAVCMTBoyioHmjiAUgA8hpEbP1klbSDafdpWv0u_Vaw3AGxnlhdn3_peLMLRSePLzdM2TgYhOouc548nkH-1ijhr_Ng=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rghEQ29zyvhaxAu7NzUFHMlpxY78cyr9fYQb1padABXs6q9CySn_tnjydGygp_osMnJdzP3dDM4H1yGmpGETTal7OVnlCxI8FKWK0sB2qC8unbT-ZS4ETlGQiOzZbf5TRVNer2A=w584-h1280-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qAk4y8i657w-G2_ayaM0UaVS-MNCaQZsYLqHS8a5YVQhaes-35bv9qmIvP0vrGAzfrHYfIgDhzJI7skcZrmiZgiGEUm4KDigAHI8s7b6jjjAatBvm7F5gm01h0ckxkeFkYQJIMw=w636-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Se presentan prototipos de las facturas de tipo A y B:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y_CPOI0aA7edQtk-pvVjnn31WuXDD_7cCOwQQ26vwW5zf_K782zfnLsDUF83XFx6SrkgzdSkSPjcdCy1AyydRhTf7KSjU2cIsp1J0XJkVYeu4P3FCnf5vzdEFzyZkpvJIW3Zl-Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZltVQwJIBKrNXCzJcBcaKFbQc_8lMCKvdwMVtNC3LUIcPQOMYcDl7sixerqeNCUe3Xyj8bwzq0qUO1ELOabcttXaYO8HP_zESe2WfbYEQpclxUgbYhc-RBPMykN7bEmnr-i5R9A=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jI8vbIjTqT3JMP1QWym2MKMP2OFCXYoCMzgZvnmjmxk4dQPBqWN3LDtx-_m-cuu0GNHXOqVMrVtfuFX9B329eJZBFKQJQuC4DW_LckEur4GuSmQkwAgbd0ujUOIjUSWG8alAi=w335-h36-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Nombre del Use Case: Generar reporte de tasa de reclamo Número: 2
Categoría: ☒ Esencial ☐ Soporte Prioridad: ☐ Esencial ☒ Útil ☐ Deseable
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Reclamos (RR) Actor Secundario:
Tipo de Use Case: ☒ Concreto ☐ Abstracto
Objetivo: generar un reporte estadístico que muestre la tasa de reclamos sobre pedidos de los clientes, para un periodo de tiempo, en función de criterios predefinidos.
Flujo Descripto: Flujo básico.
1. RR: Selecciona la opción “Generar reporte de estadísticas de reclamos”
2. Sistema: Solicita se seleccione la fecha desde y fecha hasta para el informe.
3. RR: Selecciona fecha desde y hasta.
4. Sistema: Valida que el periodo seleccionado sea correcto. (Ver observación 1)
5. Sistema: Busca y muestra los clientes empresariales y solicita se seleccione uno o más.
6. RR: Selecciona todos los clientes.
7. Sistema: Solicita se seleccione el tipo de tasa de reclamos para el reporte. (Ver observación 2)
8. RR: Selecciona “Tasa de reclamos críticos”.
9. Sistema: Solicita se seleccione la forma de visualización. (Ver observación 3)
10. RR: Selecciona la opción “Por pantalla”.
11. Sistema: Solicita confirmación para generar el reporte.
12. RR: Confirma la generación del reporte.
13. Sistema: Para cada cliente seleccionado busca los pedidos en estado “Entregado” o “Cobrado” con fecha de entrega en el periodo seleccionado y los cuenta. Para cada pedido busca si tiene o no un reclamo generado del tipo “Crítico” y lo cuenta.
14. Sistema: Para cada cliente calcula la tasa de reclamos críticos.
15. Sistema: Calcula la cantidad total de reclamos críticos y cantidad total de pedidos (tasa de reclamos críticos totalizada)
16. Sistema: Muestra por pantalla el reporte (ver Observación 4). Fin del Caso de uso
Flujos Alternativos
A1. El RR selecciona tasa de reclamos bruta A2. El RR selecciona tasa de reclamos no críticos A3. El RR elige exportar el reporte a PDF A4. El RR elige exportar el reporte a Excel A5. El RR no confirma la generación del reporte.
Observaciones: Observación 1: Un periodo será correcto si la fecha hasta es mayor a la fecha desde, ambas con formato de fecha válidas. Observación 2: Los métodos para calcular la tasa de reclamos pueden ser:
A. Tasa de reclamos bruta:
B. Tasa de reclamos críticos:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YscjSbnYbsboVYTDDSyZLXfkn1tzxrP51uEeSmSsy32hPLNdZxveKmidacnZY4raDdaLtWIaSR9OeyfB0DjA23LfHMTVz6QxygYAcXmchrllSmLtveZWP1OVWclzgDmgFHSXX_w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PVJqeIOEWqGl8IZX5TId_tHbdjIzazfBGEZVsppsW-iZPRvCsVNUV-lDdMoO34G4ldUUalEmIr9rYuH-nOT7d3O-Yrbl_tGQwOQMunDO7Ig05WwK_kMgMcWPUqUIhmgiJwgys=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cOJMJHzqpgyb6S1DsxqfzTffJudOo2gETmzKbnetMtUAwPmkJo0a6GxGZM1EMEarhOT-aUgMk9eipMuikzBL0F6tv5AdVI0cmDGTeYWWqfa6cX5Ipji01zMPkap8WSdplQg3gaw=w390-h36-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q7ISw_nzQBkpiQLYZ-053qaIoOAcvl6aHchjAZMG_3eStE8-pCI9pxc8FPyDIUqr8EUxnDiakaFk1SL6BoFJ7aueSDQuRTEcIVSvgoyoIxR8zOR2oqOp_V-e-y2g9arHXBpWApQ=w412-h36-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
C. Tasa de reclamos no críticos:
Observación 3: El reporte puede imprimirse por pantalla, exportarse a PDF o exportarse a Excel. Observación 4: La estructura del reporte es la siguiente:
Encabezado: Incluye el período de tiempo para el cual se generó el informe Cuerpo: Incluye una grilla con el detalle por cliente y el total:
Cliente Reclamos Críticos
Pedidos Tasa de reclamos
críticos
Empresa 1 1 1000 0,1%
Empresa 2 5 60 8,33%
Empresa 3 6 100 6%
TOTAL 12 1160 1,03%
Pie: Fecha de generación del reporte
Observación 5: El RR podrá cancelar el CU en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eltL8Y73dhdPpGreVhhIJNhCzH0obQcJT0dEcgo69Op7KSmi82yYRSpjjYWKEYHsmGWYt_D69_stsM_pdDwEu7gj4hrT2zpFO8u0YYDrhZwUH--aTYFGa3SXgLMl4KTn-azWY=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hIR7uB89zmn7Zx-gtMxDLqqvbqjMmcWRhd3eiKL7atZjVTf-egztdkYdgpJ8CZHLsNlodJGNRE1YzS3tb6k_7MN5LEArdUht7mnwg9-QeOWpnRVeXtwUXNYf8ni7GSpFAYLrZlg=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SKEh3mjbekW4R7Cpvd1GVma0QcjvceBwdGhBmvr556itanY4_d21hX4WQ-hKf4aikKzotXU9V0KVIjyGE7q39f3g-zViF3T7D8Mi20-a7HCydWL2u5sLml40AsF0h3gYTtYGFXg=w814-h795-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Prototipo para el caso de uso : Generar reporte de tasa de reclamo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2g3w3XVmfIH7w__t-OLy5upoM4eWxsl9s6zUI-DA1Fwhk01PXxQOflLKk2tdE4CYUlZavTwiFHUV1xyBx0HkuduYgTHNmUrDyQWjwalWID-dWVKy6-fhBUhk39tCT5vYrYI5B3=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jqjArnIK7Ho6RSeTJUgXFpAjKCppI7EIatdPSK3JnYJC571wcsnzkV6THyRIcokyshKAzsgw9S-vjStgoSz2gBlFQQZRLrqvRQK93Knnx3ghisw2L0k2gK73XJBD2k9rNB3PM=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OmlrkRk1unmybH_CacRLo2JBAftYRYzqAIITxcC2p8FzKjY2exQOSfg3iAY55j56f3Uk5GAqGZNG52QbO5lonXCEAJm6DbDs1PYYnx5Q7DiRdo-IKZRdpkyvIxs1e4HtpA-nn=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MemLhfyxhxc_ngJvH2NOTfQzeRqGK545S6B788ghCTZSZCyXJ4bp0wy9KTT4xHSZHiRHLK4oi9F0jRPa0FiPKQOH65E1Pi7dXW8u3j-h_5hHy4KeBu6pQvTGpY5ZSW-Xyc7mm7Q=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35AkIZNM9WlyM8iOFXy9fRRxQs_fPRKy_UcrTuAf04CRdUMbL1CqMua8T1OleMOwDNkm1UViu-QvwTvLl2eMu0DjCKZMZuVdJZA7OJOcyIWEUYENaz1pRNCrRZtXwE3x8E1XQpiw=w1150-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_ztIJujErEfzKOxCheouQoaR48-Fhgf0bF7UlO9nFXaOuJrWGV3jvxkbvOFVSfiTtfiTw2ZRezpyFBdMkVh0PAqgFxhq6UR0Irh5tH5zTladR2wi5ImBH5ABWkcARS6zVwhFS=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Nv_HqCfHRdZRoC88K3VFGfQh69qHkKLUV3sTqPqYkXTEPq5DxiZ_q99ORNJH-URpVOh-kGcSrZpdtMCvcz5hCVRkp4-r9l1Od3wGLWtrEVuYHTLrPaTAblq61mlJqJDAe9nHJnQ=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vhVDPN-I7Z5YWpBs-J9ej1V2PD0vG5QOJOHxJFjFjqgKWUJ94eV9aIguVO2X5BAcW5ysDoZqhdKtvoWl_tf-nctkrOnQFLtRD3T9zy608FdTH81JDcMeyIC5ibur5Lzha_UsrKw=w1280-h800-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Máquina de Estado Clase: Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gWxlsQq5c72Ab2Ad1G8rPZ1u9JMue573VctPl44JdaCyDeb4r77xno_UPK7mDvckB6vJdHUFA-PdRGJoNZeKMoUAtsuqjiHLDju8omtYpGrxRSg0iqa_YImMuIqx1vNX3dyv7fA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H3JC8RO5yckukRBw51UrKEWn6-aV_13c2YNUQebHsKn3G2muTWTK_m5r0r3rT98wuZnItHASVcofvpvZ8bJ77BNwFDGuxikB2bcFCkQN0qafo46lJ2r8Lb507NizGYOpkBlPo9g=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Modelado de Análisis para la realización del Caso de Uso 1. Registrar pedidos para la semana
Vista estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15KuLkj8A-DCbMhbjeJV5ETJP06E95ytCmLO3UTDqV5EnX0FzDbRw1Ng1WbpgtdSLQ7UhP4QnqoNwd1esHvkSLPjtOlVyoi7sBEjbun3JhRHRkV4xHzWxRNKzU_XIUJUCUc2ipXQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CACvu0Fw6BO25njRuJW0vUegj4URoD6_ZBVhoKXI3d2l5dHalO9CH_s98ia2IV7aL-wWbYS3ch76fQP9ido0aIAsLm-rKfmHtr4KyIljLEUpAa6kEydHo6Y1Mcw6O1evIi-_X=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WRFqeHYZscnNpKhus8g6E2hRMxQudbfmHGuaQJ1ydsIYgDcar3qUNIkP_QKM-ywJbooLbeupmZjywIRlMkxTOsn4WnCKUlpRmQyyhQLulb35LGzV2KO4pNlS2OpGJINZGglXy4w=w1195-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aqZQvICfU9iWryVrquIBFaSdccaCiKpw6GKJBw6_tuXP8WU4TfthX_C_qWIvAzxQrU4yhcYjqYht_dHZ8ZCDAMMP2F4s6cp01iSEYBIXV_sD_-lMs1zuTWuuu6e8zIyrhtU6kGQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XffCPr6k8J8atbiQTODzRRMtMucKjq1ri554jG5t9sVDWonGyGPZRgRGLa_RjfVm4UCQIBcjJZwfQ2nM79Cg-06wo7y_LH5VgqVR3kQ_IRKOW08pu0xM1Ot5lGxp2p1fOG089=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KsJ9yW21QF2cHoKnGnbxVEZAdNNS6qg45kfKb9wB_eA6eYoh5RQARHtamTDBei8k4mQAQ_khPb9QIjlX_4lBKWHKHTAUERHwVt9Krs-cNBnuEAUYm8JGQT9JjuNthQTOUlAug=w1175-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Modelado de Vista dinámica utilizando diagrama de secuencia – Escenario con registro de varios pedidos y facturación en el momento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1B1s1kqRSQ5vKac0c-39cY3U0yVhB7EI-ntlUMOP8gV8jdd0t9Am8zr944At1mZ1-QcqdI6Q2WI7M4jecooTal03T2qkap4iBHhKzBpAnj6DoIRz7ESV56h5EvLLMAIFUh3xfkbw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dIt4RbVfTvnFNskJ89_urE3_1keP7q28j28ZIe52ph_dcYzvZl1KtHNJFfiU_M3R_Aupx8zYTu_1OiF4c18HoEZTiFnwny5ZTS4Fl8QqroMXWKqFwwYlnA58n06uaavFQZ5k44A=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2L3PIrudD60iMQZFUghhObPWodwyqLu8VH-jT27Mirks_AtslAxydBXwyyfyukNa5zZApiGgDTETYDOrswXtSaKK7O47vzGiXacATk_I6RDL5tgVZiGOIOAY3mW9IyaPqTWBDLig=w1280-h1203-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Modelado de Análisis para la realización del Caso de Uso 2. Generar reporte de tasa de reclamo
Vista estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xwIp8AXEkkxRIuhuC4l3fBtgh2Q0jBxEQhCYehAkibdgIa6XaYgp-O0-Q4u3RCO277Pngh-6hlPsIObtELyLqOtmlwndEk6X4c3THKkJdatr33bMGV-b-RX1yZhkFZ6X5PlWlSw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00Ru-dt5TPN60W_EwKV72zGjYENfg_GmGiCOWJNkT-e8baVmInVoQAqpEWmGg2XOeQMCVkqoNzQfHbXW-kF6SQx9dEAAhLBVVPQNsqxhbc3f7nRw8aXj-_odntCnk8IE5yLn6hOQ=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oDR14Pd2J9aForOUceV2nqO6AbRs5YhOrS8bXmMlA-man1PNEK0fOAzYQiJCe_ruyXEJBPgG7hSaX1QIvbONbEHhbobb5JnpNJ-jUc5r6qhMFqVyJnQ6rxhKXfBILEAzHZiZeSA=w1163-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Modelado de Vista dinámica utilizando diagrama de secuencia – Escenario que usa la “Tasa de reclamos críticos” y forma de visualización en pantalla
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XmHi9SV3iP8DwvhQqxoh2-LRb8BAZHqMncC2RSaPd1X72qkib-L0maxLQphUnHHqvUQ7_q8BFFQ8qcMJ_NFzyakClfaJhVtX9poY0raD2_by9KfHyuueQ_pS9isMRvkVPxU_jUg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bx9zj8PP6r6ivX4GjQGjhGtFOu3mIMqEuqI4DeuOK7m3GhPrX1d46EbbiyclNq_2QWOCQMRohy7aPH_XDPHZ9Dtczy0DLhGNd8Fb6MUJGaL8ZifRgOWK3B1UMncbTIfH99d-BWw=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Requerimientos No funcionales y su impacto en la Arquitectura
Nro. Nombre Descripción Característica según ISO 25000
SPA Explicación
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
4 Conexión con Web Service de AFIP
AFIP provee un web service de tipo SOAP al cual se le debe enviar la información de la fecha y la hora, tipo de factura, cliente, monto total de la factura, los ítems vendidos y el detalle del monto de cada ítem vendido. AFIP procesa cada factura y devuelve un número de CAE identificador de cada factura.
Compatibilidad SI Afecta la arquitectura ya que se debe desarrollar un componente que resuelva la conexión con el Web Service de AFIP para poder acceder al CAE que se necesita para facturar.
5 Aplicación Mobile para el cadete
Se requiere una aplicación móvil para gestionar la entrega de pedidos a clientes empresariales, que realizará el Cadete utilizando su teléfono celular.
Compatibilidad o Portabilidad
SI Restricción técnica de implementación, que afecta a la arquitectura: se deberá desarrollar una aplicación mobile, utilizando el lenguaje de desarrollo mobile para que el cadete pueda consultar la ruta a seguir y marcar los pedidos como entregados.
6 Interfaz con Google maps
El cadete puede ver en un mapa en su aplicación la ruta más corta a seguir para llegar a todos los clientes.
Compatibilidad SI Requerimiento de interfaz de software. El producto integrará una API que provee Google que se comunica con el servidor de Google Maps, que presta ese servicio.
7 Alarma Sonora
Es necesario alertar cuando un pedido cambia al estado finalizado y/o cuando un pedido ingresa a la
Usabilidad NO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1N8Hm9dY7KaTlbbqm2wYISxbegfYs40rRXte4yBd0JEBEVApgrvhH5B8kAd5DCI10GqAoFal2T4Uvo7ldI7buZoUJGwUo3HNzwdHk94B-_uvUMQTkhbxUp_DL0fpJpz77tHsCQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WZ3w65KlQUH3kEC4CHouMlgzkrmka2g8dTKWI2XMYqc4xokjvXanBFejtPuyy3gZWQIr6VjxojO2EecAgm4QH3sVPpcmnlsXKMAWKY0HTRDER9s7rJEeVXGP3ET-XhZB5CrUs6A=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Nro. Nombre Descripción Característica según ISO 25000
SPA Explicación
cocina, utilizando una alerta sonora.
8 Mercado Pago
Para los clientes al paso se permite el cobro a través de la aplicación de Mercado Pago, escaneando el código QR del local.
Compatibilidad SI Se debe desarrollar un componente que permita la comunicación de la aplicación del Crustáceo Cascarudo con la pasarela de pagos de Mercado Pago
9 Cuenta Bancaria
Los clientes empresariales deberán pagar todos los pedidos de un mes mediante una transferencia bancaria, al recibir la notificación del banco de que ingresó una transferencia a la cuenta, el sistema con esos datos actualizará los pagos de los pedidos del mes.
Compatibilidad SI Se desarrollará un componente que comunique la aplicación con los sistemas bancarios para la actualización del estado de cuentas del cliente.
10 Notificación Via WhatsApp
El cadete deberá poder enviar mensajes de WhatsApp a los clientes cuyos pedidos estén incluidos en la entrega del día, para alertarlos de que recibirán su pedido en las próximas horas.
Compatibilidad SI Para implementar este RNF, se utilizará la API que provee WhatsApp para brindar el servicio. Esta API se comunica con el Servidor de WhatsApp (externo). Esta API se integra a nuestro producto.
11 Gráficos en las Estadísticas
Se deberán generar estadísticas varias mostrando los datos con gráficos de diferentes tipos.
Usabilidad SI Requiere la importación y uso de la librería estadística JMSL de Java para resolver los cálculos.
12 Generación de archivos pdf y Excel
Los reportes y estadísticas deben poder exportarse a PDF y/o Excel.
Compatibilidad NO Se asume que el framework de programación resuelve la exportación a pdf y Excel.
13 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos
Seguridad SI Requerimiento de seguridad lógica, significativo para la arquitectura, implica desarrollar un módulo que permita autenticar usuarios y controlar las sesiones.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1T5hbSd1ZgMU1LNrvJZmBdOHQA-PfE6NQPSHeBCGHudEHFHPsmmRCiSQqP-aqeLpcybZ9E0OLMqBMPZ6OjiccNSQ1S0mPpVE-yEGkomiDWdH-qAFVpigak0TzJVkjlyPzBAvHW7g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IKZDrk7yPjl-h_gLYlXvC2yemeE0cHOzd3Yp46R3s6nI5-vES7PEQBNIza6ngtQl_liUoRxaNxz4mmt03UJLR-PQmgGL1_5i5jSkSNmmPhhxMsuCoudmh_l4mDFjCM-oO3TTNug=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0T0OP1fOZVv2ONzEsudBJ_gtfJezR0fTKsaWVpANcmmGePn2kH6F2vYqqYlctdu0PHcKR4z7E927LwVHrU-LwA69DYMxiYHsUamHDTi0-tGMmTTwxz-aH2J3v4_dfe18TeqOkoCQ=w1176-h298-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZSnHUdLo8xVLgwkSdfccnUaK_PXgZLu7Z0pJ5UNxALc628EioFxz3Yj9wUAGtEMV0wQgTBaBsYluu3CEPqRHhr-5BMyfXi4n4Mh048ahHy1mJfoI_VI04bLpk4-iK3kA0Cr3Img=w241-h70-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rx7gks0MZfnTR3WdpkyrzHWRQ4-gUDnpbSLMoEYMNK2BJKCUb_oMCtb10XQYlU4M24BNanC81DMbhTyajoib7xSfYSsxtD6XIw_0tXhL8cgyIcWNhWUQRBUKjBYa1ELbrkvEtmw=w242-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u_rWsbj4ft8hFVDeAykkM4p26YW-_Mf2C4yJwab_YyHNg1zv4r2nnVGgClQujLqDcExttFgvYxcI7RfklUAxkCMbLjrI_ME3m6RQXaubUniONVaYf6dbykPQiEh0WiKg8J24isQ=w242-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aXEUJoGI33UC9X7LgJ_fdnO2TylXMjSncT_7jpwMM_BnRbpLE0mvuvE7S2IUJUvY0OHlYMTreldARpFaRIeqkgha0j3ahc9_PKY02e08Vu5tCL1QwL36YyDEcGMhZ6eLm49Gz=w538-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ckcmAJU5AGKPS1UcMh0Bc6xbtQ9NcHr04AYE-0psHDJlp56rnmKbmBS5JPkNpXzEm-IxDLyEfT9_PU2GiDTtn0LFcS94CqUrGX66ypY2urta3SMDWLSg4okuSW1YIiYbWIqlFuQ=w936-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-Smjr61Ui1jsW6Zkc-FAOJegHfi-CLSLP0ePYdWq0PSJXpX28AC73oXwRhEjxMXXE5NChn2Ka2t4G3bTbzi2LZOiv0Atp4g5hfMHHakBCAhCgjiCiwCEN7ddFLICIsxlqh6ye=w936-h38-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MQDYKVvCLjgl5nGwm8L-26Ye8g_D7g1JDdk5IBC3uCemNMVrOGsYkFwaTpVkmTqyiiNR9bGURoREBArqsZvCG17nmcbZnohlnVjvdXkOQmyqBFd-zCCHLV0uS6TGKUnixX_vrzw=w450-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0a_sZZQ6nuQqP-O6cL9VDk6dFDuQzfn89kHhY03UZRQSihjDf2wLj__7W-B3MNYyUdPf4vIar7MePbIindkshNaKRo2QumI67DJ4p-xH5BipQ9rxigcRZIdQ1WFK5FKwiKZBqq=w1050-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3e32Y00ckT8hX0IyZ1jmMKGAAKvHbeR6PYR4U-BBruyiizoRukSba4U2wBsVB8d8CFt5YDNMhcvoMujauIsqLyvaFqK1BoJoVatwzwIpICWH6KuHe5RfIYqfefdLyIUNlvnQqNqg=w1050-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dKgi5hlox-PkKThJqHugGrFkCMIAvJHM_rkUj0kTJG80waKpupfzVP4TyxspV8vvCgt9dVNxpezmUUfo_yqN5mdMZuHeuuukSfqai4ShbYfWQAKVkOVDJ2Wx6NEYsR-wZBhxiVg=w1050-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1P7r8msko744GDqjV8MWrHtcllJdcxvfrmsHjg-M0HEhgM3g9dQdw7LDtlmIhaP38D1mOkYJbxUNo0CvAE47hCLUHj46BiN0OpJ5z4uvmSmcmg4VpFbJ6Tn2g11ZpPQxYsbl0i=w1050-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QBlK6PMhiZDZWhoTnohKLYJphVWjkcDdpmqCetl18KzaYDyWCxR_6u4149x9SWDMLMblFGUf1n2NF4t6--mUMmUgZg_keAnUf_dV91RZFk3EivJ2P5yAQZ3pIq-YXSnS0t4Ak=w1050-h56-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Patrones Significativos para la Arquitectura
Capas (Layered) Aplicación: Se aplica el patrón para organizar el software del Crustáceo Cascarudo en capas independientes. Motivaciones:
Lograr bajo acoplamiento entre los componentes de software que resuelven diferentes problemáticas (presentación, lógica de negocio, administración de datos).
Lograr alta cohesión de los componentes que forman cada capa.
Asegurar la comunicación entre las distintas capas evitando la comunicación entre capas que no es
necesaria, y genera mayor acoplamiento (por ej: capa de presentación con capa de administración de datos)
N-Tier Aplicación: Implementar un sistema web y mobile para el crustáceo cascarudo. Motivaciones:
Resolver el requerimiento no funcional Tecnología Web y Aplicación Mobile para el cadete.
Establecer una única forma de acceder a los datos para asegurar la integridad y consistencia de la
información contenida.
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad
requerida.
Posibilidad de utilizar clientes Web delgados, que no requieran demasiado hardware.
Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y
extensibilidad del sistema.
Capa de Adm. de Datos
Capa de Lógica de Negocio
Capa de Presentación
Cliente Web (Navegador)
Servidor de Negocios de Crustáceo Cascarudo
Servidor Administración de Datos Crustáceo Cascarudo
Cliente Mobile (Celular)
Capa de Servidor Web
Servidor Web de Crustáceo Cascarudo
Capa Cliente Crustáceo Cascarudo
Capa Web Crustáceo Cascarudo
Capa Lógica de Negocios Crustáceo Cascarudo
Capa de Persistencia
Capa Administración de Datos Crustáceo Cascarudo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YCAuY5ZOGAJuuwb-jFj42k1jOMUZZ9DMAG0CvVMxrKP2mFMTw7IUiLHe9k4ZT3DFAiEGPMKhovstoOBANi95dY-y74T7jm_DcuK-C1mjjPnjNI3wGXCm4w_KLJ_xI_Rg_IbxXQQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16oe1SFtXVBwhAfb7Jjla5zOu8MJmFrx_oKsaQKJ4fqsQwCzbcILL1CygPQGRN5Bbqn-68Tk24sWHsEKd5TUu3GrGYpOepFGc1rzmpIUbc_dDCam9Bj8tLHd2kW2tHcd92tOPt=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1T7IPhu0KodgwJP0qADUvA76_mCMzPQel_1jYfXhddF6hn_uy6RIM7wZtoV05L9dy9vZrYuA9rvHPG3WN0F62A3SZFiPCq-zuTjCZAapjG9ZsYlWX1LdC4tlVBbp8CeGuamkDnRA=w1280-h961-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vistas Arquitectónicas
Vista arquitectónica de la funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0N_gj81HzrRRDmUQKeY1_luDz3igUAmKkdNOY5muGJze3no_uUZ9CRiLtPFBE8qdt9BcQcP8WGC_xyhhS6Vc7iC3REQwYN-mNPXT5l1NwsLyR0HQafpqV82Z4eZYf6lQXyFMWo=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07yYcR1IUlWuUDFALzhBp3SNWF124ly9tYi50GvnLMlLwwTiQq7Wvnp_Pb0-eSbTnl-MNuJBxImXrM5RxQuPvvyW9tskSoT8Wov6t2C1PmUXDazMUWdp0aGNbaOTQVmQR20szY=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Justificación
Caso de uso Justificación
10. Registrar producto 11. Modificar producto 12. Eliminar producto 13. Consultar producto
Casos de uso complejos que resuelven la lógica de ABMC de una entidad de negocio y definirán por lo tanto:
- algoritmos de alta, baja, modificación y consulta de entidades - accesos para consulta, inserción y actualización de la base de
datos - diseño de la interfaz de usuario
Además resuelven el RNF 1 Tecnología Web y RNF 2 Front End Responsive.
30. Generar factura para pedidos semanales
Transacción representativa que resuelve la lógica de transacciones y define estrategias de commit y rollback de transacciones, diseño de la interfaz, acceso a la base de datos de manera encapsulada. También resuelve el RNF 4 Conexión con web service de AFIP
36. Registrar pago con mercado pago Caso de uso que resuelve la comunicación con la pasarela de pago de Mercado Pago. Resuelve el RNF 8 Mercado Pago
8. Iniciar sesión Caso de uso que resuelve la lógica de sesiones, perfiles de usuarios y permisos en función del usuario logueado. RNF 13 Seguridad de Usuario
2. Generar estadísticas anuales de ganancias
Caso de uso que resuelve la lógica para el cálculo y generación de estadísticas basado en grandes cantidades de datos y utilizando gráficos para visualización de resultados. RNF 11 y RNF 12
28. Iniciar reparto de pedidos Caso de uso que resuelve el envío del mensaje de WhatsApp al cliente cuando el pedido está en camino. Resuelve el RNF 10 Notificación vía WhatsApp.
29. Consultar rutas Caso de uso que resuelve la implementación mobile de la aplicación para el cadete y la visualización de los puntos de entrega en un mapa de Google maps. Resuelve los RNF 5 Aplicación mobile para el cadete y RNF 6 Interfaz con Google Maps
31. Validar facturación de pedido empresarial
Caso de uso que se ejecuta automáticamente para validar la facturación de pedidos empresariales. Se deberá definir cómo se disparará automáticamente, bajo qué control, en qué momento se ejecutara para que no baje la performance del sistema.
34. Procesar pagos con transferencia bancaria
Resuelve el RNF 9 Cuenta Bancaria ya que debe resolver como se hará la conexión con el sistema del banco para poder recibir la información de los pagos realizados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qiFMdHCjpl7lYidB8SpvWakjDgw109_iJbuJF8b5cI664aUPJ9yPGoAUuk83C5fyrbgWMmEmpoRQzozMh7Lc2Ims1IlHrg-xzMMt9Im46uuHbsafcH4pWKPGopbwE6kN9ytWA0g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3g4y5IXEp_lW9omqx3ETNN8b0vB55vCK1m6vaMV3NWy9NU-zfUiZEof19ZW_BEf6ia70yNouZnVpKxIlkU3M4IBwkHg5hSzDnFO5NGIeRF0jDzRvVNSTHKCeBTfkVuw5ex5sTx=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-To9CR96iymAHTkFi_PxIT4JhHa6Rx_jDfa9i1GJ91zsw31-sRMzxnqTUz-m9CNByEwpSao6hPH_UsU4BdGJrpFyGPnC5uSI7DW0MkFlNrHDEAgVhDc7m17cg3XnmR-BooZRBFQ=w1280-h833-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista arquitectónica de diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03lpPvSqjAlbD2ElHrowxD5dceszisThfcz3HS9tsIsKZgplL6IDx2F0kubD1ikIwESA9oL6TWV-o50DnZj2JVKitSw0QMcCYWdZoyTuq33jLlKA90_UR_9qMmboejoTCmB7lF6g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m6ebfCwkYt3ldyQ-g96FHaFzktE3DrE4t5eC88lpCDQ_2QkmKdmJNN8D5Js3YMvdUIo0cmbVTIhxxmbdkALQyN9BPUn0SBGyzUTDDCNn1uMhZl7yd4G5v8X0Cxc20xucqCQwkPQ=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zeMpXyZQJ_IO_uAUorQEvlIup6aaekpBVtZ2FoyI6KmsxBlXOflKNWzyJYISvwubvPnrIDkOeA9vyKk0vm6Hiz1A_ZKQCXnoEBOpnBnPKzXeujHCp6DhHzNGeNIqWe7leibvW=w1155-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista arquitectónica de despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HbsIH3UXQdGWYxC9DNANxUp1bCpMl1Z1DOknJOqngQ764UkrLtI_nz3zfPR2cuDyPuYS9vN0KA5A0IKwAYyIInAnv-i9viIFK1e4KMIl_o4XhOVUK_YtNZpVmRedobKc55Ai7=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HMdY4PK6QEF2b_5DNEvyuIHIsuh-KP2NlD7lZwJ8rFewLzFRdHpVk1I04Eg57NDHKHp3cpFpdwpQpEcRj4ZKrJwHEhc9wBYRkCOgeq92pubBzgclKK-qXhvzI_F-Ih4vDOnq8Bg=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jU5W2UlQ3Ljf8hvdD_ac-oAW9hX3mtxP4Y0ASaxwk92cQKgGSv2l44qIsPXU-J1YMEdGL9jdZgase7tSwALpPbLHgqvSktG66LyAOEyUX9Ko5l2Nk_0alMKavi8ebigrIbuHqEA=w1280-h593-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12 Autor: Mickaela Crespo Página 33
Patrones de diseño
Patrón Builder
Vista de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0S_5bfNFuuNVonQlxs_kCK52ojwGDzZnFPlh03QThPjJN3gehngPS4IBIkoX6l5q9h1zl0yFdX1mzSZglm6yBXrEvjsiUw466tZbla14eHCK8HW3FSxZKOcTrJASbz-p8_NX3D0A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dDF4YAV5RcMvebPkcpVljZ9EPrPPqPnK3z1ufs3sTgQre6ZLRyYz0YXIVRjMJ3gCUxclLyzCCivsrPFxEbolBXl2SNYhZsK0vAeVOeS7c7E0pX5htxikx8TA7_jKoHJ_TW917YQ=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e6TfVuviimvKtma5moDzFszSx9BUMKn-z89oJ-SpQfUHNoJXC-xmr8_T1hMUZErWX5bMmdjO0BtdAZEYQuLXsNClLuDPllpnQBUb3UrVJW1zVTcBz9JUY3DvSDZlJAzVdYPtxNw=w1280-h591-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12 Autor: Mickaela Crespo Página 34
Visa Dinámica – Aplicación para visualizar reporte por pantalla
Pseudocodigo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hpTqAt12Mn1gEJUlaCchXReYHBIw30c-lSWKHmGPg1UY9N9Z5zPgqXdRI9dZgd7nuFylxHisNzxavVuxq_ZZocWvXeq7sId8W8XS1yhqnWHE7_o-xc7IhT-5hyuZete-3adbv=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sSL8-xo_QFqS-sipuM7dWjYLOgOXtlqnYvJcuSk41X2HRypqVIj0kIttV5m7Un0M92p7SRMYJW9GHj4Pk7WyeWbwIJMBcPxMdabcN-3peAsXkmDnaENEvGpQ0Bl2s9RDS_y8Gvw=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12 Autor: Mickaela Crespo Página 35
#-----------------------------------------------------------# class GestorReporteReclamos(): date fechaActual string formaVisualizacionSeleccionada def generarReporte(): fechaActual = obtenerFechaActual() constructor = new ConstructorPantallaInformeReclamos() # El constructor a crear depende de formaVisualizacionSeleccionada director = new DirectorInformeReclamos(constructor) director.construir(fechaDesde, fechaHasta, clientes, valores, totales, fechaActual) #-----------------------------------------------------------# class DirectorInformeReclamos() IConstructorInformeReclamos constructor; def DirectorInformeReclamos(constructor IConstructorInformeReclamos): this.constructor = constructor def construir(fechaDesde date, fechaHasta date, clientes string[], valores float[], totales float[], fechaActual date): constructor.construirProducto() constructor.construirEncabezado(fechaDesde, fechaHasta) constructor.construirCuerpo(clientes, valores, totales) constructor.construirPie(fechaActual) #-----------------------------------------------------------# class ConstructorPantallaInformeReclamos implementes IConstructorInformeReclamos: PantallaReporteReclamos producto def construirProducto(): producto = new PantallaReporteReclamos() def construirEncabezado(fechaDesde date, fechaHasta date): producto.setEncabezado(f"Periodo del informe entre {fechaDesde} y {fechaHasta}") def construirCuerpo(clientes String[], valores float[][], totales float[]): producto.crearGrilla() for (int i = 0; i < clientes.lenght(); ++i) producto.iniciarFila() produto.agregarFila(clientes[i], valores[i][0], valores[i][1], valores[i][2]) producto.agregarFilaTotales(totales[0],totales[1],totales[2]) def construirPie(fechaActualDate):
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cLEPiXMQ4Vdlefxl6MSPa2p8xWQmzRfwVtmMuZyQ6PwCmel9kIfCqYtJeTwGU3FQHIOLDQVwouINRWVa5ZMXN6hh1xzSl9cyQtbVvVbU3CuGmmq8low8mSTTBAMps4vCaitl-=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rbAK6r6ByTY6c0PkpO5vTjTFIMDm2rv1cecXh03wOpi3K-CaDnZbZ87ORLjp4g5OrB6UXN8h4xZnelVDcsbXcWHlyWbCkVyOU6muhbWIIRcP4ZMF9Rr0DGVbratNzg1VrqXM35Q=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12 Autor: Mickaela Crespo Página 36
producto.setPie(fechaActual) def obtenerProducto() -> PantallaReporteReclamos: return producto #-----------------------------------------------------------# class IConstructorInformeReclamos(): # Solo definicion de la signatura de los metodos def construirEncabezado(fechaDesde date, fechaHasta date): def construirCuerpo(clientes String[], valores float[][], totales float[]): def construirPie(fechaActualDate) #-----------------------------------------------------------# class ConstructorExcelInformeReclamos() implementes IConstructorInformeReclamos: def construirEncabezado(fechaDesde date, fechaHasta date): # implementacion de la construccion del encabezado para excel def construirCuerpo(clientes String[], valores float[][], totales float[]): # implementacion de la construccion del cuerpo para excel def construirPie(fechaActualDate): # implementacion de la construccion del pie para excel #-----------------------------------------------------------# class ConstructorPDFInformeReclamos() implementes IConstructorInformeReclamos: def construirEncabezado(fechaDesde date, fechaHasta date): # implementacion de la construccion del encabezado para PDF def construirCuerpo(clientes String[], valores float[][], totales float[]): # implementacion de la construccion del cuerpo para PDF def construirPie(fechaActualDate): # implementacion de la construccion del pie para PDF
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20EOiJmJYQ5LT-r0IdKruC7EuCoTsThiUyGIKaiArTugzObV57892OIK5SzLtXTdUTElAONJVe5XB_00Y147l4fPsCZxYDHlBhbKBgZDKhB2lgdgtpopW83SoceamSpmUakVPmrQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XOivsAV4mIJoASVL4oRjC_1u6Pw2jG7zlnGCMzoj22r4w4CWKhZXUETRWGfPmJi8Sp8r0DsaeB0Y0XK5N45SjItT_PrVd6CDQxlkA2xpgaFyeZqOfG1th4sfDk5bNciPgPFhmkA=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_6cJ8twkVwcMpp1K3-r_Sh_uFSaTZ_0Kr8sc0pYYwlLGMTOU0GH2ZADCLZQ2OQgoYqc2PJfeHzxlHwAZbrbBlw5gKmegIgUtJiEE_IUUsTr58ce05Q1ZREV5FWygCcwA9AW_8uA=w1280-h490-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12 Autor: Mickaela Crespo Página 37
Patrón Strategy
Vista estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18L2OmjBn7OkY_cz0AqWAm47C-EyBHf_Tuja13CYYrFgEF7_TX96qvbJ4D722FyghEmu2VtwazFLbBfJufsA9EwnI9A0gCAu3f8WWmB1ShSPQ6gCcjt2biiseEnVFMkGkuIiKaEg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3T9XaZ4So1U23--_iioGoWNxQ7uAdQjyiVTmkF8rhERYvFXUVUktimHp5bwyX4fTGlXTGufo9-nILg-GFqXwxhEalBtDqj9lTGaHXvKQbD0FQ-ga7onyVS6NHKYAFjl6vnZ-y8YQ=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24UY_fz6PDHrH28xtt-LkArW7SVGtxUYagq2V6A6FZSQ8vPFAKgs6_VFybaL1FWuOfk7M4buciJjVnpk1tpJKhSku-YZ2W460O3kFy69TjByEFtL8uSwtFK6FVnMEsnU5eKZkFmQ=w1280-h1113-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista dinámica – Aplicación para selección de tasa de reportes críticos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02k8BK4T3_TSF7N5UUA5yTSKhEsLdaAXD6Qso7qFO9m9sgQHzIhZy0XMeavsBJ2yiDrMKb0GA6wQ0ph28bCPsqnHOgn3Q59MK8JUKhVwi4F0Rflr0FfjoCjK3wztNhVb0b0QqAtw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nQN0dbGe7fm6hvf9QMknKqPNgwELBa7bXVKVMSgaLv-uJdnkpE-HfxML24HFOCG0wz2MWL-2P-I1PxNzq5fbScw0YCW7BnMW3HQzxIYcroFzJ4Ub9T7fxHLpPhfDCNzbosUa-Wg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Pseudocódigo #-----------------------------------------------------------# class GestorReporteReclamos: Cliente[] clientesSeleccionados; fechaDesde date; fechaHasta date; String[][] tasaPorCliente = new String[][] def tomarSeleccionTipoTasa(tipoTasaSeleccionado): crearEstrategia(tipoTasaSeleccionado) def crearEstrategia(tipoTasaSeleccionado): IEstrategiaTasaReclamo estrategia = new TasaCriticos() # La estrategia depende del tipo de tasa que viene por parámetro def calcularTasaClientes(): tasaPorCliente = estrategia.calcularTasaClientes(fechaDesde date, fechaHasta date, clientesSelecionados Cliente[], pedidos Pedido[]) #-----------------------------------------------------------# class TasaCriticos implements IEstrategiaTasaReclamo: def calcularTasaClientes(fechaDesde date, fechaHasta date, clientesSeleecionados Cliente[], pedidos Pedido[]) ->String[][]: String[][] tasaPorCliente = new String[][] for c in clientesSeleccionados: float cantidadPedidos = 0 float cantidadReclamos = 0 float tasaReclamoCritico = 0 List<float> valores = new List<Float> for p in pedidos: if p.esDeCliente(c) and p.esDePeriodo(fechaDesde,fechaHasta) and p.esRecibido: cantidadPedidos++ if p.tieneReclamoCritico: cantidadReclamos++ tasaReclamoCritico = cantidadReclamos/cantidadPedidos valores.add(cantidadReclamos) valores.add(cantidadPedidos) valores.add(tasaReclamoCritico) tasaPorCliente.add(c,valores) return tasaPorCliente #-----------------------------------------------------------# class TasaNoCriticos implements IEstrategiaTasaReclamo: def calcularTasaClientes(fechaDesde date, fechaHasta date, clientesSeleecionados Cliente[], pedidos Pedido[]) -> String[][]: # Implementación de la lógica de calculo de tasa para reclamos no críticos #-----------------------------------------------------------# class TasaBruta implements IEstrategiaTasaReclamo: def calcularTasaClientes(fechaDesde date, fechaHasta date, clientesSeleecionados Cliente[], pedidos Pedido[]) -> String[][]: # Implementación de la lógica de calculo de tasa bruta de reclamos #-----------------------------------------------------------# class IEstrategiaTasaReclamos: # Solo define signatura del método def calcularTasaClientes(fechaDesde date, fechaHasta date, clientesSeleecionados Cliente[], pedidos Pedido[]) -> String[][]: #-----------------------------------------------------------#
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AlSZF53f-G1VqYcWMQsFQHpBXq1qUydWZqvarnc4DC_PrgaHIPCkUvSlntXm1AUxDuY3NuvtodOgbSZCS36xj1bn7ZbqlmVXY0b5uydl-Whjw5AZLML0seqaxkSX8XB3EV_SsCw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-VK0g7QwOAj2N7hzPkeQACLbn9cUfRRlsuC6eueOmSpa3FW2u_phR6-KQopeUMPR2iBHT-J02eKptiimPntxjUuU-yxX0_mzqrpTiIfByjgQKkpwp9hRRdruI2HIe6b6lP_3VwA=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11H8rVTCgFW67gu2xzyu8vgoPZp6wZAl8qTQ0e9_XzUjr6XZRNhl8R5kg8SXMvCL3Sf0gkHObJBeiaSDXShvMLPFn6V6Hl_fMJjuz8pzX59qqE2_zJ85Dt-6UaJzeEVciawOrplw=w1280-h769-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.11 Autor: Mickaela Crespo Página 40
Patrón Singleton
Vista de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16BlRoOLGwxGuQaVeHji6MpvqyTAOnbFVMzWlLX8_FPfLyqIgUIGIpSlWEFktkBeeX9ROZkuCH_69L8NrrAyrDTIVxHj2CqBISyQ3kCSpN983eQktm8kchEDyBKh1IiK0-Jz4K=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nluGyn-npRxxjGkf4_RRUMwYuZAVuHyiO03-azAtgY27W84QbUu0WdeaEeJA6bCHVHvYi-d8w5FF9e3FITTRVb1WHcG8z5bT3LfRqoBVkzzUYZXHAgMT7o8Tne4Y_Pac3WeOo6g=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nEPw0lWpTdehFI-Lwg5neyVoPVpXcSlmAVLnV_4jXd3y660_XyueqFgzNfnpTZfuuHJdjPJJG2pUwfFArg5R1dbe-aQxCaSaUK4iETFeyl848pVhbW2rDF6eeX3A-NJahE7iF=w1280-h553-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.11 Autor: Mickaela Crespo Página 41
Vista dinámica – Aplicación para creación de los pedidos de la semana
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UJh8m1uTreXqF45LVgQ-OuPeW4-g8mBIUieWl0kX128Y9Z9wFDY6ana4Gl7x3OplIvGnJnxvAhvvXbnfqgRWsClrJKku1bj6JBG7B5-WAIfJfmvYYBbR_qhFQIuSBCMfMRw2Yyw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv028cqM1IkB6bL-ckTtZAtX2Bd91R_ruv56gSe3dGb1PpGKdToGwwCIZEGNne2Gc9-htnv7P3Emim668sEaDmuPwyaeFt077QaJoNyWdVjL4GPyEmC5gFzm2ZvDU9Fd1JoHRUtdPw=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Pseudocódigo Para crear un nuevo pedido y por lo tanto asignarle su correspondiente número, el gestor creación de pedidos le pediría al Singleton (NroPedido), el número que debe asignarle al nuevo pedido. La clase Singleton tiene un atributo estático para mantener la referencia a la instancia única y uno o más atributos que guardan el estado relevante del objeto en este caso, el último número asignado. El NorPedido entonces la primera vez crea la instancia única y le devuelve al Gestor el número. El gestor de pedidos invoca el método new() de la clase Pedido pasándole como parámetro el número de pedido que el Singleton le acaba de enviar, las fechas correspondiente, los estados a asignar al pedido y sus detalles, los combos y productos seleccionados así como las variantes para cada uno. Luego de esto, el Gestor pide al Singleton que actualice el valor del atributo número de pedido para mantener la secuencia. El método de la clase Singleton se ve así: public static getInstancia() if (instancia == null) NroPedido.instancia = new NroPedido() return NroPedido.instancia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2oD4m2uFK-v0HOi6QSUXFDj3ZPoXcKsLDvogtD5H3a_UvgdjodhqUyg-GboTVkm1_aacLN7nZPA4TCvE6-OVynR9eHVwAYrgLMQwQseGoK2TJECXRIcfjLwtYrGhmVRMI0DPvDnA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EPMYlFVQAsOxq6MORIb-2hxYInx89AOEni1ucb0NtqzmSIb3ghIM8C7XmEASupQlIq4fsfEF9o0oy4wm_NBGY3GtnaGem6_e1jMX8SVdTbfv4jP034R6ALJiD7zXWbxEx86OB=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rEXgfmDrtO0lw6S78W3Uu-QVzGKfmTyzufU01vtNDAiv5PpnVx952Z9zYfrV_SiobcpTvpD1FrEaBvOn_V3VPN_YHjyLQXpDIZ6XC5sHsClC9CUBWbZMBzuwmUvsOlhjXm-F0Gg=w1280-h1215-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Patrón Iterator – CU 2 – Iteración de pedidos
Vista estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14DpkeDwzfL2c3pnYNaXuoyDgebEH0KNj0aX99brAMCtREdvHHm2wg9UfpV-NESTqZtb6rbQl8CyFwgGzhk98Nr7rh94e30on9TmstnIWxhdxDDvq-EKFYLlpKdz7lfbrd5r4m0g=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DiYbPhlMXrHmVVAZBsUw26fr8HJnGukHCWODqNs7Yd9cDROMIJ1tOGpxEPhvWfV1GgbQ4TqIPpzo7c9Iyo0E30x9OLs6z88ZbdhwV_t6PjnkQ6pJML5qAPNmgPYTiLk4XngZpow=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hVvaizfBKxQyr4DbkDU5EdcdQP3dm-2b13nZ2jDCXbLF6CFDobKnLlF5dzPTawgPFWTs7mgEqgBmC-LRySlIjxMvfqj78OElJZqZ7vJtIXdoGE9QvF7heypf3g7be1dcNaQeI=w1253-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista dinámica – Aplicación para selección de tasa de reportes críticos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JaMtYnX1j4LsUiRwkMGKpGV3Mdm0oH5F8HBpCtNkVnSLEJcRF2QmSEGA7ldbul3IU3zzygd7Zl8S2yuKS-0GqBJxAO5Gjx1FMuKPbv6FUNHnDWfP9lYQKZxIphWrEvKLn_GRe3Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25mKbXTGImd0isMRrj9vYq4dWo6JkevOC8vM5RipkFJBqn6Pb7FPULj3Gi8ZP-gcnA3v6zAUFBCGyDVCmv-VOzfJTzLHaSLl2mvIF_3SSLRDqS20ArgxDBvNnOfLcOxLNi32UnCw=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Pseudocódigo
Clase IteradorPedidos implements Iterador private Pedido[] pedidos; private int posicionActual; public void primero(){ posicionActual = 0; } public boolean haTerminado(){ if(lista[posicionActual] == null) return true; } public Object elementoActual(){ if(lista[posicionActual].comprobarFiltros()) return lista[posicionActual]; }

#### public void siguiente() {posicionActual ++;}

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_YfKe1au6ldlT9WF0mlY3QGbgBvI4jYvQ3awbJdjZysqrna7_ddTPof-bsKShFvseG0GEuIJXztJdQ22m9zLYo21kDiSnS8u1PRoV5vNVJ38h-bnbDJ-dCi3XU05Gku4QQqjF=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ds0tt4uJsJ3cGuk59lQ7qtCsgwec1EQAxpJgxoYys3bWE6MS-Oi_wpdxbxV1o3B2No7UK4sbbINdya4RlaBOWy7LiYwRpCNN22M53AJ1adgJ6M2o-0_78dcxPE74i_iceV0Ok3A=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eqL3u9Hi3ajW8H3nqmz18hCGwAJu0bSKNv9J3ea-mGvfTcITPLyux5y25a2h6TxdmJMfBxztK6xudAsDrXUXNhw1t5iE3D7KP1jqU7ykSti1dp7vAK_c4afOto9NDySVNyD1Olw=w1280-h1136-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Patrón Iterator – CU 1 – Iteración de productos y combos
Vista estática
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2v0C_PKQ3Ekcw0AEdRntoA3miamFt3XzYW1DRtsvD_ZBw9bd9vGTNXo95mnwjNTSvGMyUTSpnFN9vk5Y3aTRhd3y0b3DQLBcCb9hWSXX5jICg2spnpSAiKpbpWa7_OGT3ofTo_gQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dv_YaiVBU-2Bmbesi0ruhG8a_DDm9k3kz0gF02lql1rJexXUr3tCXRo4faGHB4sSvLohZVasLtYJ6SzPFrIkUSaeyMOj50JdFLtI26PZhIvbVBhb5zYrEV_Ka3Xx3Yz1p4mG4=w139-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sYBUgno55pBdN7y3ClP4zGp5Mm6IfPr2xwDAxo6Vhdyxsf_A0fZVQo1MvW7bcfnMuXAZCf7SR7lJNfo_34nPWtDhZYkvEd6WcQBOUMCrfS3j-Y3wAyZbXf7bZhn7Y-s_AEJqt=w1280-h1161-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12
Vista dinámica – Aplicación para iteración de productos y combos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25FOlMAcJvvzBUyxJzKaxhcarsocRR0STjo7612NfVxFmcLLCatSimtcqBKxGAKSjGRXgwothEQsff9l6LrlYxUUNYHBFo-Hs4adcx1cbla8tNX2hM3lu5EJTKCAFtGGN-5mdK=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Lww4N_TW94HbQLazSPqt10aAo2GineH1iAP4w8iaf_rPQELirVd2mrsi5az_kOvp5uDyj_6EokuCd0UnRBj1TwlkyFLobUEvP24iixavbiH85t6tpfHulNlC2n-5nMrDhZWuNDg=w139-h174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Crustáceo Cascarudo
PPA Crustáceo Cascarudo – V 1.12

#### Pseudocódigo

#-----------------------------------------------------------# Clase IteradorCombos implements Iterador private Combo[] combos; private int posicionActual; public void primero(){ posicionActual = 0; } public boolean haTerminado(){ if(lista[posicionActual]== null) return true; } public Object elementoActual(){ if(lista[posicionActual].estaDisponible()) return lista[posicionActual]; } public void siguiente() {posicionActual ++; }
El método crearIterdor() de la clase Gestor define que Iterador crear en base a la lista de objetos que recibe. Si recibe una lista de productos, crea un iterador de productos, si recibe una lista de combos, crea una lista de combos.
