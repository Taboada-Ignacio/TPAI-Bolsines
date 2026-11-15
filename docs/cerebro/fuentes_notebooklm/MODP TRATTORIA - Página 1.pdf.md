# MODP TRATTORIA - Página 1.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento presenta el 
diseño estructural de un sistema de gestión para un restaurante
, detallando cómo se organizan lógicamente los datos operativos del negocio. Su propósito principal es 
mapear las entidades fundamentales
 que van desde la toma de pedidos y el catálogo de productos hasta el control de inventarios, pagos y registros de caja. A través de este esquema, se definen con claridad las 
relaciones entre clientes, comandas, empleados y finanzas
, ofreciendo una visión integral de la arquitectura de información necesaria para automatizar las operaciones diarias de una trattoria.

## Pedido


## + numeroPedido


## + fechaPedido + fecha


## + total


## + motivoCancelacion + fechaCancelacion


## Cliente


## + nombre


## + direccion


## + telefono


## 1


## cliente


## Producto


## + nombre


## + precio: f loat


## + imagenUrl


## + disponible


## + nombre


## + descripcion


## + orden: int


## + activa: boolean


## 1


## categoria


## Grupo


## + nombre


## + descripcion


## + obligatorio: boolean


## +


## +


## 0..*grupo


## DetallePedido


## + precioUnitario


## + cantidad


## + observacion


## +


## 1..*


## detallePedido


## 0..1Producto


## Opcion


## + nombre


## + precio


## + activa: boolean


## +


## opcion


## 1..*


## TipoOpcion


## + nombre


## + descripcion


## 1


## tipoopcion


## CambioDeEstado


## + fechaHoraInicio + fechaHoraFin


## + CambioEstado


## 1..*


## + precio


## + imagenUrl


## + disponible


## + fechaInicio


## + fechaFin


## 1..*


## Producto


## 0..1


## promocion


## producto o


## promoción tiene


## que ir si o si uno al


## de5alle de pedido


## TipoEntrega


## + nombre + descripcion


## + costoEnvio


## + requiereDireccion + activa


## t ipoEntrega


## 1


## Estado


## + ambito + nombre


## + descripcion


## 1


## estado


## categoría 1


## sesion


## + fechaYHoraInicio fechaYHoraFin


## usuario


## + nombre


## + email


## +


## rol


## + nombre


## + descipcion


## 1


## usuario


## insumo


## + nombre


## 1


## categoria


## categoriaInsumo


## + nombre DetalleReceta


## + nombre + cantidad


## + unidad


## 0..*


## detallereceta


## insumo 1


## movimientoStock


## MovimeintoStock


## + fechaHora + +


## t ipomovimiento


## 1


## TipoMovimiento


## + nombre + descripcion


## UnidadMedida


## 1


## rol


## unidadmedida


## 1


## unidadmedida


## 1


## unidadmedida


## 1


## MetodoPago


### + nombre


### + requiereMontoRecibido


#### metodoPago


#### 1


## Caja


## + nombre + fechaYHoraApertura


## + fechaYHoraCierre + montoefectivo


## moviemintoCaja


## + importe


#### t ipoMovimiento


## TipoMovimientoCaja


## + nombre + descripcion


#### 1..*


#### movimeintoCaja


#### pedidos


#### 0..*


#### MovimientosCaja


#### 0..*


#### cobro


#### 1


## Cobro


## + fechaHora + montoTotal + montoRecibidomovimientoCaja1


#### metodoPago
