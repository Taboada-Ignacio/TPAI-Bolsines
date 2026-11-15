# Auditoría de Modelo de Dominio Trattoria

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este texto presenta una 
auditoría detallada del modelo de dominio
 para un sistema de gestión gastronómica, orientada a estudiantes de ingeniería de software. Su objetivo principal es guiar al alumno en la 
identificación de clases ocultas y patrones de diseño
 necesarios para cumplir con las reglas de negocio, como la gestión de pedidos mediante estados, el manejo de catálogos configurables, el cálculo indirecto de stock a través de recetas y el control financiero de las cajas. Para lograrlo, la guía estructura el análisis en 
módulos estratégicos
 que examinan los atributos y relaciones indispensables que suelen omitirse en los diagramas iniciales.
User
:
chat mira este es mi modp para tratoria, em recomendas agregar clases?? tenes en las fuentes del cuaderno el link a la docuemntacion en notion, igual te pso el link por aca, https://www.notion.so/Trattoria-ERS-y-Documentaci-n-Base-del-Sistema-365693af570981cc9ccfe94912703940?source=copy_link
Gemini
:
¡Hola! Estuve analizando el documento de la documentación base (
dominiodeproblema.pdf
) que subiste al cuaderno para extraer todas las reglas de negocio y restricciones de la 
Trattoria
.
Como no tengo la capacidad visual de leer directamente las flechas y cajitas de la imagen que compartiste (
image_c4562c.png
), te preparé una devolución detallada basada en los estándares de la cátedra de 
Diseño de Sistemas de Información (DSI)
.
Para este dominio en particular, hay varias clases "ocultas" o de comportamiento que suelen olvidarse y que son críticas para que el modelo esté completo. Revisá si en tu diagrama incluiste los siguientes pilares:

#### 1. El Bloque de Pedidos y el Patrón Estado

El enunciado menciona que se debe controlar 
"en qué estado se encuentran"
 los pedidos. En DSI, esto nunca es un simple atributo de texto. Necesitás:
Pedido
: Con atributos como 
numero
, 
fechaHoraCreacion
, 
fechaHoraEntrega
, 
tipoEnvio
 (si es retiro o delivery) y 
montoTotal
.
DetallePedido
: Clase intermedia imprescindible para la relación muchos a muchos entre Pedido y Producto, que guarda la 
cantidad
 y el 
subtotal
.
Estado
 e 
HistorialEstadoPedido
: Para implementar el patrón Estado. El historial te permite saber cuándo entró a la cocina, cuándo salió a reparto, etc., registrando 
fechaHoraDesde
 y 
fechaHoraHasta
.

#### 2. El Catálogo, Promociones y Opciones Configurables

Producto
 y 
Categoria
: Relación estándar (un producto pertenece a una categoría).
Agregado
 o 
Opcion
: El texto dice 
"pastas con distintas salsas y agregados configurables"
. Necesitás una clase 
Opcion
 o 
Salsa
 relacionada con el 
Producto
 (o con el 
DetallePedido
 si el cliente las elige al momento de comprar) para estipular la variabilidad.
Promocion
 y 
DetallePromocion
: El enunciado aclara que una promoción 
"es un conjunto de productos existentes"
. Por ende, requerís la clase intermedia 
DetallePromocion
 con el atributo 
cantidad
 para asociar cuántos productos de cada tipo lleva la promo.

#### 3. Gestión de Stock e Insumos (La Receta)

Una regla crítica del texto es: 
"la promoción no deberá consumir stock como entidad independiente, sino que el consumo de insumos deberá calcularse a partir de los productos que la componen"
.
Insumo
: Con atributos de control de stock (
stockActual
, 
stockMinimo
, 
unidadMedida
).
ProductoInsumo
 (o 
Receta / DetalleComponente
)
: Clase asociativa entre 
Producto
 e 
Insumo
. Contiene la 
cantidad
 de materia prima que consume cada plato. Cuando se rinda un pedido, el 
Pedido
 le pedirá a sus 
Productos
 que calculen sus insumos consumidos para rebajar el stock de la clase 
Insumo
.

#### 4. Caja y Movimientos de Dinero

El sistema exige controlar 
"cómo se mueve el dinero dentro de cada caja"
.
Caja
: Debe tener un ciclo de vida (Abierta, Cerrada), por lo que también podría requerir su propio 
EstadoCaja
 e 
HistorialEstadoCaja
. Atributos: 
fechaHoraApertura
, 
montoInicial
, 
fechaHoraCierre
, 
montoFinal
.
MovimientoCaja
: Cada vez que se cobra un pedido o se registra un gasto, se crea un objeto de esta clase asociado a la 
Caja
 activa, con atributos 
monto
, 
tipoMovimiento
 (Ingreso/Egreso) y 
fechaHora
.
--------------------------------------------------------------------------------
Para ayudarte a auditar tu diagrama de clases de forma exacta, diseñé este 
Asistente de Verificación del Modelo de Dominio
. Podés navegar por cada módulo estratégico de la Trattoria, chequear los atributos y métodos obligatorios según la lógica de DSI, y marcar cuáles ya tenés para descubrir qué clases te están faltando agregar:
