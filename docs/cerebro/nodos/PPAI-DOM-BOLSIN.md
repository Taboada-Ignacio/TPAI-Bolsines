---
id: PPAI-DOM-BOLSIN
titulo: Dominio PPAI - Entidad Bolsín y su Ciclo de Vida
tipo: dominio
unidad: PPAI
categoria: Dominio
tags: [ppai, bolsin, ciclo-de-vida, precinto, estados, seguimiento, nacho]
archivos_back:
  - TPAI-Bolsines/src/domain/Bolsin.ts
  - TPAI-Bolsines/src/domain/CambioEstadoBolsin.ts
  - TPAI-Bolsines/prisma/schema.prisma
modelos_db:
  - Bolsin
  - CambioEstadoBolsin
conectado_con: [DSI-U1-MAQUINA-ESTADOS, PPAI-DOM-REMITO, PPAI-DOM-DOCUMENTACION, PPAI-DOM-PRECINTO, PPAI-PAT-STATE-BOLSIN, PPAI-CU-36]
depende_de: [DSI-00-CONVENCIONES, DSI-U1-MAQUINA-ESTADOS]
---

# Entidad del Dominio: Bolsín (PPAI 2026)

## 1. Definición Conceptual
Un **Bolsín** es una bolsa o saco de tela resistente y duradero utilizado para transportar de forma segura remitos y documentación física entre las diferentes comisiones médicas del Organismo Controlador a través del servicio de correo nacional.

## 2. Atributos Principales de la Clase
- `numero`: Entero secuencial y único asignado automáticamente por el sistema al crearse.
- `fechaCreacion`: Fecha y hora de armado del bolsín en la CM de origen.
- `peso`: Peso expresado en gramos (ingresado por el Encargado de Bolsines al momento del armado).
- `numeroPrecinto`: **[NACHO]** Identificador numérico entero del precinto de seguridad. En el CU 36 es obligatorio y no admite nulos, de acuerdo con `numeroPrecinto: Int` en el diagrama de clases de análisis. Los bolsines que se consultan ya fueron despachados y tienen un precinto asignado.
- `comisionMedicaOrigen`: Referencia a la CM que arma y despacha el bolsín.
- `comisionMedicaDestino`: Referencia a la CM destinataria (un bolsín viaja a una **única** CM destino).
- `estadoActual`: Referencia al estado vigente dentro de su máquina de estados.
- `remitos`: Colección de 1 a N remitos que agrupan los documentos transportados.
- `dispositivoGPS`: Dispositivo rastreador asignado al bolsín durante el tránsito.

---

## 3. Máquina de Estados del Bolsín

| Estado | Descripción y Condiciones | Transición Saliente / Evento |
|---|---|---|
| **Creado** | El bolsín ha sido armado en el sistema, asociándole remitos de una misma CM destino y su peso en gramos. | `cerrarBolsin(nroPrecinto)` $\rightarrow$ **Cerrado**<br/>`eliminarBolsin()` $\rightarrow$ **De baja** |
| **Cerrado** | Se ha colocado el precinto físico numerado y se registró su número en el sistema. Al final de la jornada se separa para el retiro. | `retirarCorreo()` $\rightarrow$ **Enviado**<br/>`reabrirBolsin()` $\rightarrow$ **Creado** (rompe precinto)<br/>`eliminarBolsin()` $\rightarrow$ **De baja** |
| **Enviado** | El correo físico retiró el bolsín de la CM origen. El bolsín está en tránsito por las rutas del país monitoreado por GPS Tracker. | `recibirBolsin()` $\rightarrow$ **Recibido en CM destino** |
| **Recibido en CM destino** | El Encargado de Bolsines de la CM destino recibe el bolsín, valida el precinto y realiza el control del contenido físico. | Estado final operativo. |
| **De baja** | El bolsín fue cancelado antes de su retiro por el correo. Los remitos contenidos vuelven a estado `Creado`. | Estado terminal destructivo. |

---

## 4. Reglas de Negocio Clave
- **Destino Único**: Un bolsín solo puede contener remitos con la misma Comisión Médica Destino.
- **Modificación y Precintado**: Si se necesita agregar o quitar remitos de un bolsín que ya está en estado `Cerrado`, se debe **romper el precinto**, pasar el estado a `Creado`, realizar las modificaciones, colocar un **nuevo precinto** con número diferente y volver a cerrar.
- **Trazabilidad Continua**: El sistema debe registrar en cada cambio de estado la fecha/hora y el empleado responsable (Encargado de Bolsines).

### [NACHO] Métodos de dominio y alcance GPS vigente

`obtenerCodCMOrigen(): string` y `obtenerCodCMDestino(): string` delegan en `getCodigo()` de la asociación correspondiente. La prueba de dominio usa códigos distintos en ambos extremos.
