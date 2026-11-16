# Plan de Tareas Frontend — Seguimiento Individual por Bolsín, 1 Ruta y 1 Remito

**Feature ID:** `seguimiento-bolsin-individual`  
**Alcance:** Solo Frontend (las tareas de backend quedan documentadas en `technical-spec.md` §4 para el compañero).

---

## Fase 1 — Contratos, DTOs y Cliente de Seguimiento
- [x] **T1.1** Actualizar `src/dtos/seguimiento-bolsin.dto.ts`: reemplazar `remitos: z.array(...)` por `remito: remitoSeguimientoSchema.nullable().optional()` en `bolsinSeguimientoSchema` y ampliar `cu36PuntoBackendSchema` con `destinoCodigo`, `emailGcm`, `pesoKg`, `remito`, `estadoCobertura` y coordenadas/fecha nullable.
- [x] **T1.2** Actualizar `src/services/seguimiento/seguimiento-cliente.ts`:
  - Enviar `?modeloGps=${modeloValidado}` en `obtenerSeguimientoBolsines()`.
  - Adaptar `adaptarCu36Backend()` para mapear `remito` único, `pesoKg`, `destinoCodigo`, `emailGcm` y `ubicacion: null` cuando falten coordenadas.
  - Actualizar `BOLSINES_DEMO` y `CM_ORIGEN_DEMO` a códigos reales (`CM-CBA`, `CM-SF`, `CM-BA`, `CM-MZA`, `CM-TUC`) y 1 solo remito por bolsín.

## Fase 2 — Reemplazo de Camión por Marcador Individual de Bolsín
- [x] **T2.1** Adaptar `src/components/seguimiento/map/MarcadorBolsin.tsx` para usarse dentro de `<GoogleMarkerOverlay>`: quitar `xPct`/`yPct`, sumar ícono SVG liviano de bolsín (sin WebGL), estados `atenuado`/`seleccionado`/`hovered`, área táctil `>= 48x48px` y soporte hover/focus para mostrar `<PreviewBolsinCard />` en desktop.
- [x] **T2.2** Actualizar `src/components/seguimiento/map/MapaGoogleSeguimiento.tsx`:
  - Quitar `MarcadorCamion`, `UnidadTransporte`, `agruparEnUnidadesTransporte`, `camionAbiertoId` y `desagruparMobile`.
  - En `itemsMarcadores`, renderizar 1 `<MarcadorBolsin />` por cada bolsín (en vista general y en Modo Foco), manteniendo 1 ruta/viaje por bolsín (`CM Origen → Posición → CM Destino`).
  - Actualizar la leyenda inferior para contar bolsines en lugar de unidades/camiones.
- [x] **T2.3** Actualizar `src/components/seguimiento/SeguimientoWorkspace.tsx`: quitar `agruparEnUnidadesTransporte`, `unidadMobileAbierta` y `<BolsinesABordoSheet />`; seleccionar el bolsín directamente al tocar su marcador en mobile.
- [ ] **T2.4** Deprecar/eliminar componentes obsoletos: `agrupador-unidades.ts`, `MarcadorCamion.tsx`, `Camion3D.tsx`, `AbanicoBolsines.tsx`, `BolsinesABordoSheet.tsx` (se mantienen sin uso activo hasta confirmar limpieza).

## Fase 3 — Remito Único en UI y Consistencia en `/bolsines`
- [x] **T3.1** Actualizar `src/components/seguimiento/detail/BolsinDetallePanel.tsx` para mostrar **"Remito asociado"** en singular (sin contador ni `.map()`).
- [x] **T3.2** Actualizar `src/components/seguimiento/notifications/ConfirmarNotificacionModal.tsx` para mostrar **"Detalle del remito"** en singular.
- [x] **T3.3** Actualizar `src/lib/bolsines.ts` y `src/components/bolsines/BolsinesView.tsx`:
  - Agregar `remito?: RemitoBolsinResumen | null` a `BolsinListadoItem`.
  - Agregar filtro por CM de origen en `BolsinesView.tsx`.
  - Ordenar por defecto mostrando `Enviado` y luego los más recientes (`id` descendente) para que los bolsines activos en seguimiento aparezcan desde la página 1.

## Fase 4 — Verificación Frontend
- [x] **T4.1** Actualizar tests unitarios de `seguimiento-dto.test.ts`, `seguimiento-cliente.test.ts`, `rutas-envio.test.ts` y `agrupador-unidades.test.ts` (Vitest) validando 1 solo remito y envío de `?modeloGps=`.
- [x] **T4.2** Ejecutar `tsc --noEmit` y `vitest run` en `TPAI-Bolsines` (40/40 tests de seguimiento/bolsines pasando).
