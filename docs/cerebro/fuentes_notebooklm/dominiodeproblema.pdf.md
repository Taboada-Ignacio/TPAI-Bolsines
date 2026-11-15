# dominiodeproblema.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto describe el 
sistema web para una trattoria o rotisería
, una aplicación diseñada para 
organizar la operación diaria del negocio y prevenir errores
. La plataforma se divide en tres accesos diferenciados: un 
portal administrativo
 con control total y métricas financieras, un 
espacio operativo para empleados
 enfocado en la gestión de cajas y estados de pedidos, y un 
catálogo público
 donde los clientes pueden armar sus carritos y enviar sus compras mediante WhatsApp. Asimismo, la herramienta regula de manera estricta el 
ciclo de vida de los pedidos
, los cuales no pueden editarse una vez creados, y automatiza el 
control de stock y materias primas
 mediante un sistema de movimientos y deducciones al finalizar cada venta. Finalmente, la plataforma centraliza la 
configuración general del local y los reportes de rendimiento
, proporcionando al administrador información estratégica para la toma de decisiones, aunque excluye temporalmente aspectos complejos como facturación fiscal, pagos en línea y seguimiento satelital de entregas.
🧭 00 — Dominio del Problema

## Dominio del problema


#### La trattoria es un negocio gastronómico orientado a la venta de comidas preparadas, con operación centrada en cocina,


#### pedidos, caja, stock e insumos. No cuenta con atención por mesas ni salón, sino que trabaja principalmente con pedidos


#### para retiro en local y pedidos con envío a domicilio mediante logística propia del negocio.


#### Actualmente, la operación diaria requiere controlar correctamente qué pedidos ingresan, en qué estado se encuentran,


#### quién los cobra, qué productos están disponibles, qué insumos se consumen y cómo se mueve el dinero dentro de cada


#### caja. Además, el administrador necesita información clara para tomar decisiones sobre ventas, compras, producción,


#### horarios de mayor demanda, productos más vendidos, costos e ingresos del negocio.


#### El problema principal no es solamente registrar pedidos, sino ordenar toda la operación para evitar errores, pérdidas de


#### stock, descontrol de caja, productos publicados sin disponibilidad y falta de visibilidad sobre el rendimiento real del


#### negocio.


## Dominio del sistema


#### El sistema Trattoria será una aplicación web destinada a administrar la operación diaria de una rotisería/trattoria. Estará


#### compuesto por tres experiencias principales: un portal para el administrador, un portal para el empleado y un catálogo web


#### público para clientes.


#### El administrador tendrá acceso completo al sistema. Desde su portal podrá controlar pedidos, cajas, productos, categorías,


#### promociones, insumos, stock, configuración del negocio, usuarios, reportes financieros y métricas operativas. Su objetivo


#### principal será supervisar el funcionamiento general del local y tomar decisiones a partir de información registrada por el


#### sistema.


#### El empleado tendrá acceso a un portal operativo limitado. Desde allí podrá abrir y cerrar su propia caja, registrar pedidos


#### internos, confirmar pedidos web, cambiar estados de pedidos, cobrar, registrar egresos, consultar información operativa


#### de insumos y modificar la disponibilidad de productos u opciones cuando algo ya no pueda venderse. El empleado no


#### deberá acceder a información financiera estratégica, ganancias, metas del negocio, cajas de otros usuarios ni


#### configuraciones generales del sistema.


#### El cliente web accederá únicamente al catálogo público. Desde allí podrá ver las categorías, buscar productos, seleccionar


#### productos y opciones, agregarlos al carrito, indicar sus datos, elegir retiro local o envío a domicilio, seleccionar método de


#### pago y enviar el pedido por WhatsApp. El cliente no tendrá acceso a ningún portal interno ni a información administrativa.


## Alcance funcional del sistema


#### El sistema permitirá gestionar pedidos internos y pedidos generados desde el catálogo web. Los pedidos internos serán


#### creados por un administrador o empleado desde la pantalla correspondiente y nacerán en estado confirmado. Los pedidos


#### creados desde el catálogo web nacerán en estado recibido web, ya que representan una solicitud enviada por el cliente


#### que debe ser revisada y confirmada por el negocio.


#### Los pedidos podrán avanzar por los estados recibido web, confirmado, en cocina, listo, finalizado y cancelado. El estado


#### en cocina representará que el pedido pasó a preparación. El estado listo indicará que el pedido ya está preparado para


#### retiro o envío. El estado finalizado indicará que la operación del pedido terminó. El estado cancelado se utilizará cuando el


#### pedido no continúe, conservando su registro dentro del sistema.


#### Una regla central del sistema es que los pedidos no se editan. Una vez creado un pedido, no deberá poder modificarse su


#### contenido, productos, cantidades, opciones, modalidad de entrega, datos del cliente ni método de pago. Si se necesita


#### hacer un cambio, el pedido original deberá cancelarse y se deberá crear un nuevo pedido con los datos correctos. La


#### cancelación podrá tener una observación o motivo, pero ese motivo será informativo y no cambiará la lógica principal del


#### sistema.


#### El sistema no gestionará clientes como una entidad independiente en esta primera etapa. Sin embargo, cada pedido


#### deberá guardar los datos necesarios del cliente, como nombre, teléfono, dirección si corresponde delivery, modalidad de


#### entrega y método de pago. Estos datos quedarán asociados al pedido como información operativa necesaria para


#### completar la venta.


#### El catálogo web deberá mostrar inicialmente un grid de categorías, un buscador y un acceso de inicio de sesión. Al


#### seleccionar una categoría, el cliente deberá ver los productos asociados a esa categoría. Las categorías deberán poder


#### ordenarse desde el sistema mediante drag and drop, para que el administrador pueda definir qué categorías se muestran


#### primero según prioridad comercial o conveniencia operativa.


#### Los productos podrán tener grupos de opciones. Un grupo podrá representar, por ejemplo, tamaño, salsa o extras. Cada


#### grupo tendrá opciones asociadas. Algunas opciones podrán modificar el precio base del producto, como el tamaño de una


#### pizza, y otras podrán sumar un adicional, como un extra. Este modelo permitirá representar productos como pizzas


#### enteras o medias, pastas con distintas salsas y agregados configurables.


#### El sistema también permitirá gestionar promociones. Una promoción será un conjunto de productos existentes vendido


#### bajo una condición comercial particular. La promoción no deberá consumir stock como entidad independiente, sino que el


#### consumo de insumos deberá calcularse a partir de los productos que la componen.


#### El sistema permitirá gestionar insumos y stock. Los insumos representarán materias primas o recursos necesarios para


#### producir los productos. Cada producto podrá tener insumos asociados con cantidades determinadas. El stock se manejará


#### mediante movimientos, permitiendo registrar entradas por compras, ajustes y salidas por consumo. El descuento de


#### insumos se realizará cuando el pedido pase a estado finalizado.


#### El sistema deberá gestionar caja por usuario. Cada administrador o empleado abrirá su propia caja. El empleado solo podrá


#### ver y operar su caja, mientras que el administrador podrá ver su caja y las cajas de todos los usuarios. Para registrar


#### movimientos de dinero, como cobros o egresos, deberá existir una caja abierta. Los egresos se registrarán siempre como


#### salidas de caja, sin diferenciar si el dinero salió físicamente del empleado o de otro origen. Si es necesario aclarar una


#### situación particular, se podrá registrar una observación.


#### El sistema deberá permitir cobrar pedidos y registrar los movimientos de caja correspondientes. Los cobros deberán


#### asociarse a un pedido y a un método de pago. El efectivo será un método obligatorio del sistema, creado por defecto y no


#### eliminable. Además, el administrador podrá configurar otros métodos de cobro, como transferencia, Mercado Pago, QR,


#### débito, crédito u otros.


#### El sistema deberá contar con una configuración general del negocio. Desde allí se podrá definir el nombre del local, la


#### dirección, el número de WhatsApp receptor de pedidos, el mensaje prearmado que se enviará desde el catálogo web, las


#### zonas de delivery cercana y lejana con sus respectivos valores, el tiempo estimado de demora, las modalidades habilitadas


#### de retiro local y envío a domicilio, los horarios de operación del catálogo web, los métodos de cobro y la meta mensual del


#### negocio.


#### La meta mensual podrá configurarse como meta de ingresos totales o como meta de ganancia neta. Los ingresos totales


#### representarán el total facturado o cobrado en el período, mientras que la ganancia neta estimada se calculará


#### considerando ingresos menos egresos registrados. Esta información será parte del análisis financiero interno del negocio.


#### El sistema deberá incluir una página financiera y reportes del negocio. Esta sección estará orientada al administrador y


#### permitirá analizar ingresos, egresos, cajas, métodos de pago, productos más vendidos, productos por franja horaria,


#### insumos críticos, costos estimados, margen estimado, metas y recomendaciones operativas. Todos los indicadores


#### deberán poder filtrarse por períodos de tiempo, como día actual, últimos siete días, mes actual, últimos tres meses o rango


#### personalizado.


#### La finalidad de los reportes no será solamente mostrar números, sino ayudar al administrador a tomar decisiones. Por


#### ejemplo, detectar qué productos se venden más en determinados horarios, qué insumos conviene prever, qué productos


#### tienen mayor costo, qué método de pago se usa más, qué usuario registró determinados cobros y cómo evoluciona el


#### negocio frente a su meta mensual.


## Límites del sistema


#### El sistema no incluirá facturación fiscal, integración con AFIP ni contabilidad legal formal en esta etapa. La información


#### financiera será utilizada para control interno y toma de decisiones del negocio, pero no reemplazará un sistema contable o


#### fiscal.


#### El sistema no incluirá gestión automática de delivery, tracking de repartidores ni cálculo automático de distancia. Las zonas


#### de envío serán simples, divididas en zona cercana y zona lejana, con valores configurables por el administrador. Una


#### integración con Google Maps podrá considerarse como mejora futura, pero no forma parte del alcance inicial.


#### El sistema no incluirá pago online ni integración directa con pasarelas de pago. El cliente web podrá informar el método de


#### pago al hacer el pedido, pero la confirmación y gestión real del pago quedará dentro de la operación del local.


#### El sistema no será multi-tenant ni multi-sucursal en esta etapa. Estará orientado a una única trattoria, con un único


#### negocio, sus usuarios internos y su catálogo web público.


#### Tampoco se incluirá un módulo completo de clientes, cuenta corriente, fidelización o historial avanzado por cliente. Los


#### datos del cliente se guardarán dentro de cada pedido únicamente para poder operar la venta.


## Resumen del alcance


#### En síntesis, el sistema Trattoria será una herramienta web para operar y controlar una rotisería desde tres portales:


#### administrador, empleado y cliente web. Permitirá gestionar pedidos, caja, productos, categorías, opciones, promociones,


#### insumos, stock, configuración del negocio, catálogo web, cobros, egresos, reportes y análisis financiero interno. Su


#### objetivo será ordenar la operación diaria, reducir errores, mejorar el control de caja y stock, y brindar información útil para


#### la toma de decisiones del administrador.
