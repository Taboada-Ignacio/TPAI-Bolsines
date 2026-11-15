---
id: PPAI-DOM-PRECINTO
titulo: Dominio PPAI - Gestión de Precintos, Cierre, Reapertura y Trazabilidad
tipo: dominio
unidad: PPAI
categoria: Dominio
tags: [ppai, precinto, seguridad, cierre, reapertura, trazabilidad, bolsines]
archivos_back:
  - TPAI-Bolsines/src/domain/Bolsin.ts
  - TPAI-Bolsines/src/domain/CambioEstadoBolsin.ts
conectado_con: [PPAI-DOM-BOLSIN, PPAI-CU-36]
depende_de: [PPAI-DOM-BOLSIN]
---

# Reglas de Negocio sobre Precintos y Trazabilidad

## 1. ¿Qué es un Precinto?
Dispositivo físico numerado de un solo uso que se coloca sobre el mecanismo de cierre del bolsín de tela para garantizar inviolabilidad y detectar cualquier apertura no autorizada durante el traslado por correo.

## 2. Reglas Operativas (CU 39 Cerrar Bolsín y CU 40 Reabrir Bolsín)
1. **Cierre Obligatorio (`Cerrado`)**: Al finalizar el armado del bolsín, el Encargado de Bolsines coloca el precinto físico y registra el `numeroPrecinto` en el sistema, pasando el bolsín de `Creado` a `Cerrado`.
2. **Separación de Jornada**: Al final del día laboral, el EB separa los bolsines cerrados para que a primera hora del día siguiente los retire el correo.
3. **Reapertura (`Creado`)**: Si el bolsín ya estaba cerrado y se requiere agregar o quitar algún remito:
   - Se debe **romper físicamente el precinto**.
   - Se ejecuta `CU 40 Reabrir Bolsín` (borra el número de precinto activo y regresa el estado a `Creado`).
   - Luego de modificar los remitos, debe colocarse un **precinto nuevo con un número distinto** y volver a cerrar (`CU 39`).
4. **Identificación en Seguimiento y Recepción**:
   - Tanto en la recepción (**CU 28**) como en el mapa de seguimiento (**CU 36**), el número de precinto actúa como criterio principal de búsqueda y filtrado para el EB.
5. **Trazabilidad Completa**: Cada cambio de estado o actualización del bolsín/precinto registra el `Empleado` responsable y la marca temporal en `CambioEstadoBolsin`.
