# Especificación Técnica — Seguimiento Individual por Bolsín, 1 Ruta y 1 Remito

**Feature ID:** `seguimiento-bolsin-individual`  
**Alcance:** Cambios de **Frontend** + **Contrato Backend Esperado** (para implementación del compañero)  
**Referencias del código actual:**
- `src/components/seguimiento/SeguimientoWorkspace.tsx`
- `src/components/seguimiento/map/MapaGoogleSeguimiento.tsx`
- `src/components/seguimiento/map/MarcadorBolsin.tsx`
- `src/components/seguimiento/detail/BolsinDetallePanel.tsx`
- `src/components/seguimiento/notifications/ConfirmarNotificacionModal.tsx`
- `src/dtos/seguimiento-bolsin.dto.ts`
- `src/services/seguimiento/seguimiento-cliente.ts`
- `src/components/bolsines/BolsinesView.tsx` y `src/lib/bolsines.ts`

---

## 1. Cambios de Frontend — Contratos y DTOs

### 1.1 `src/dtos/seguimiento-bolsin.dto.ts`

Reemplazar el array `remitos` por un único objeto opcional/nullable para hacer cumplir la regla de **1 remito por bolsín**:

```ts
export const bolsinSeguimientoSchema = z.object({
  nroBolsin: z.number().int().positive(),
  numeroPrecinto: z.union([textoObligatorio, z.number().int().positive()]),
  cmOrigen: cmOrigenSeguimientoSchema.optional(),
  cmDestino: cmDestinoSeguimientoSchema,
  ubicacion: ubicacionBolsinSchema.nullable(),
  remito: remitoSeguimientoSchema.nullable().optional(),
  pesoKg: z.number().finite().positive().optional(),
});
```

Y actualizar `cu36PuntoBackendSchema` para que pueda recibir los campos completos del backend (manteniendo compatibilidad):

```ts
export const cu36PuntoBackendSchema = z.object({
  id: z.number().int().positive(),
  numero: z.number().int().positive(),
  precinto: z.union([textoObligatorio, z.number().int().positive()]).nullable(),
  destino: textoObligatorio,
  destinoCodigo: textoObligatorio.optional(),
  emailGcm: z.email().nullable().optional(),
  pesoKg: z.number().finite().positive().optional(),
  remito: remitoSeguimientoSchema.nullable().optional(),
  latitud: z.number().finite().min(-90).max(90).nullable(),
  longitud: z.number().finite().min(-180).max(180).nullable(),
  actualizado: z.iso.datetime({ offset: true }).nullable(),
  estadoCobertura: estadoCoberturaSchema.optional(),
});
```

### 1.2 `src/services/seguimiento/seguimiento-cliente.ts`

1. **Enviar `modeloGps` en la petición:**
   Cambiar `const url = "/api/auth/cu36/seguimiento"` por:
   ```ts
   const url = `/api/auth/cu36/seguimiento?modeloGps=${encodeURIComponent(modeloValidado)}`;
   ```
2. **Adaptar `adaptarCu36Backend()`:**
   - Si `punto.latitud !== null && punto.longitud !== null && punto.actualizado !== null`, construir `ubicacion` con `estadoCobertura: punto.estadoCobertura ?? "vivo"`. Si alguno es `null`, asignar `ubicacion: null`.
   - Mapear `remito: punto.remito ?? null` (en lugar de `remitos: []`).
   - Mapear `pesoKg: punto.pesoKg` si viene presente.
   - Usar `punto.destinoCodigo ?? destCat?.codigo ?? punto.destino` y `punto.emailGcm ?? destCat?.email ?? null`.
3. **Actualizar `BOLSINES_DEMO` y `CM_ORIGEN_DEMO`:**
   - Cambiar `remitos: [...]` por `remito: { numero, asunto, tipoDocumento }` (1 solo remito por bolsín; eliminar los segundos remitos de `#104` y `#112`).
   - Alinear códigos con el seed real: `CM_ORIGEN_DEMO.codigo = "CM-CBA"`, destinos `"CM-SF"`, `"CM-BA"`, `"CM-MZA"`, `"CM-TUC"`.

---

## 2. Cambios de Frontend — Mapa y Marcadores (Camión → Bolsín)

### 2.1 Nuevo marcador individual de bolsín (sin WebGL por marcador)

- **Por qué no usar `BolsinMini3D` ni `VisorBolsin3D` en el mapa:** ambos instancian un `<Canvas>` WebGL propio por cada marcador, lo que agotaría el límite de contextos WebGL del navegador (~8–16) al haber varios bolsines en mapa.
- **Solución:** Adaptar `src/components/seguimiento/map/MarcadorBolsin.tsx` para funcionar dentro de `<GoogleMarkerOverlay>`:
  - Eliminar las props `xPct` / `yPct` y el posicionamiento `style={{ left, top }}` (ya lo posiciona `GoogleMarkerOverlay` en `floatPane` con `translate(-50%, -50%)`).
  - Incorporar el ícono SVG liviano de bolsín (reutilizando el SVG de `BolsinMini3D.tsx` L99-112) junto al chip `#${bolsin.nroBolsin}` y el punto de estado (`--lime` en vivo / `--amber` sin cobertura).
  - Agregar soporte de **hover/focus** (en desktop `>= 768px`) para mostrar `<PreviewBolsinCard bolsin={bolsin} />` flotando sobre el marcador, y estados visuales `atenuado` (`opacity-15` cuando `filtroActivo && !coincideFiltro`) y `seleccionado` (`scale-110`, `outline-primary`).
  - Área táctil mínima `min-h-12 min-w-12` (`48x48px`) en mobile.

### 2.2 `src/components/seguimiento/map/MapaGoogleSeguimiento.tsx`

1. Eliminar imports y uso de `agruparEnUnidadesTransporte`, `UnidadTransporte`, `MarcadorCamion`, props `unidades` y `onTapUnidadMobile`, estado `camionAbiertoId`, y `ZOOM_DESAGRUPAR_MOBILE` / `desagruparMobile`.
2. **Rutas (`useEffect` de polilíneas):**
   - Mantener exactamente **1 ruta por cada bolsín** (`CM Origen → Posición actual → CM Destino`) tanto en vista general como en Modo Foco.
3. **`itemsMarcadores`:**
   - En **Modo Foco** (`bolsinSeleccionado !== null`): renderizar únicamente el marcador individual del `bolsinSeleccionado` (si tiene `ubicacion`, usarla; si no, usar `rutaFoco.posicionActual`) más los badges de CM origen y CM destino.
   - En **Vista general**: mapear directamente `bolsines` (los que tengan `ubicacion !== null`, o usando `ruta.posicionActual` si se decide mostrarlos en última posición) a marcadores `<MarcadorBolsin />`, pasando `coincideFiltro`, `seleccionado`, `hovered`, `onHoverBolsin` y `onSeleccionar`.
4. **Leyenda inferior:** Mostrar conteo de **bolsines** visibles/en vivo (en lugar de unidades/camiones).

### 2.3 `src/components/seguimiento/SeguimientoWorkspace.tsx`

- Eliminar `agruparEnUnidadesTransporte`, `UnidadTransporte`, `unidadMobileAbierta`, `unidadFoco` y `<BolsinesABordoSheet />`.
- Dejar de pasar `unidades` y `onTapUnidadMobile` a `<MapaSeguimiento />`.
- En mobile, tocar un marcador en el mapa llama directamente a `onSeleccionar(bolsin.nroBolsin)` y abre el `BottomSheet` de detalle.

### 2.4 Limpieza / Deprecación

Los siguientes archivos dejan de usarse en el flujo activo de `/seguimiento`:
- `src/lib/seguimiento/agrupador-unidades.ts`
- `src/components/seguimiento/map/MarcadorCamion.tsx`
- `src/components/seguimiento/map/Camion3D.tsx`
- `src/components/seguimiento/map/AbanicoBolsines.tsx`
- `src/components/seguimiento/list/BolsinesABordoSheet.tsx`

*(Se recomienda eliminarlos o marcarlos como deprecados junto con `Mapa3DSeguimiento.tsx` si no se mantiene la variante MapLibre).*

---

## 3. Cambios de Frontend — Remito Único y Consistencia en `/bolsines`

### 3.1 Remito único en UI de Seguimiento

- **`BolsinDetallePanel.tsx`:** Reemplazar la sección `"Remitos asociados ({bolsin.remitos.length})"` y su `<ul>` / `.map()` por una tarjeta única **"Remito asociado"** que muestre `bolsin.remito.asunto`, `bolsin.remito.tipoDocumento` y `bolsin.remito.numero`, o el mensaje vacío `"Este bolsín no tiene remito asociado."`.
- **`ConfirmarNotificacionModal.tsx`:** Actualizar `aria-label` y título a `"Detalle del remito"` (singular), eliminando el contador y el `.map()`, mostrando la ficha del remito único o el estado vacío.

### 3.2 Consistencia en `/bolsines` (`BolsinesView.tsx`, `src/lib/bolsines.ts`, `BolsinDetalleView.tsx`)

1. **`src/lib/bolsines.ts`:** Agregar `remito?: { numero: string; asunto: string; tipoDocumento: string } | null` a `BolsinListadoItem` (opcional para no romper mientras el backend no lo devuelva).
2. **`BolsinesView.tsx`:**
   - Agregar un `<Select>` de filtro por **CM de origen** junto al buscador y al filtro de **Estado**.
   - Agregar un ordenamiento por defecto en cliente que priorice **más recientes / estado `Enviado` primero** (o selector de orden: `Recientes` / `N.º de bolsín`), evitando que los bolsines `101..110` queden ocultos en las páginas 4–5 detrás de `36001..36035`.
   - Mostrar el número de remito único (`b.remito?.numero ?? "Sin remito"`) en las filas cuando esté disponible.

---

## 4. Contrato Backend Esperado (Para Implementación del Compañero)

> Esta sección documenta exactamente qué necesita el frontend que implemente el backend para que el flujo funcione 100% con datos reales (sin caer en `BOLSINES_DEMO`).

### 4.1 API Externa GPS (ya integrada en `src/adapters/`)

El servicio externo `gps-tracker` (`GPS_TRACKER_BASE_URL`, `X-API-Key` por proveedor) tiene 3 contratos:

1. **`XTR-4500L`**: `GET /api/xtr-4500l/getBolsinLocation?numeroBolsin={n}&codigoComisionMedicaOrigen={cod}`  
   Respuesta: `{ items: [{ numeroBolsin, latitud, longitud, fechaHoraUltimaActualizacion }] }`
2. **`QX-7A`**: `GET /api/navtrack-qx-7a/retrieveTrackingData?numeroBolsin={n}&codigoComisionMedicaDestino={cod}`  
   Respuesta CSV: `"nroBolsin,lat,lng,fecha"`
3. **`MTR-900`**: `GET /api/geopulse-mtr-900/fetchCargoPositions?numeroBolsin={n}`  
   Respuesta matriz JSON: `[[nroBolsin, lat, lng, fecha]]`

### 4.2 Cambios requeridos en `GET /api/auth/cu36/seguimiento` (`GestorConsultarUbicacionDeBolsin`)

1. **Leer query param `modeloGps`:**
   - Aceptar `?modeloGps=XTR-4500L|QX-7A|MTR-900` (default `"XTR-4500L"`, responder `400` si es inválido).
   - Pasar el modelo elegido a `InterfazGPSTracker.obtenerLocalizacionDeBolsines(modelo, nros, codigosOrigen, codigosDestino)` enviando `codigosCMOrigen` para `XTR-4500L` y `codigosCMDestino` para `QX-7A`.
2. **Eliminar el `Map` estático `origenesOficiales`:**
   - Hoy solo consulta los 10 pares hardcoded (`CM-CBA:101`, etc.). Debe consultar todos los bolsines en estado `Enviado` de la CM del usuario logueado usando sus códigos reales de CM origen/destino (o un mapeo configurable si el simulador externo usa sufijos `-01`).
3. **Aislar fallos por bolsín (no abortar todo el lote con `503`):**
   - Si un bolsín puntual no tiene señal o el GPS devuelve `404` / respuesta inválida, devolver ese bolsín igual en `puntos` con `latitud: null, longitud: null, actualizado: null, estadoCobertura: "sin_cobertura"` e incrementar `sinUbicacion`, reservando el `503` únicamente para fallos globales de configuración (`CONFIGURACION`) o caída de red (`CONEXION`/`TIMEOUT` general).
4. **Completar campos del payload por bolsín:**
   - Incluir `pesoKg` (`Bolsin.peso`), `destinoCodigo` (`cmDestino.codigo`), `emailGcm` (email del Gerente de la CM destino), y `remito` (objeto único `{ numero, asunto, tipoDocumento } | null` una vez modelado en Prisma).

### 4.3 Cambios requeridos en `POST /api/auth/cu31/notificar-ubicacion`

- Mantener el contrato actual (`{ emailDestino, nroBolsin, latitud, longitud, fechaHoraActualizacion }` con `latitud`/`longitud` como strings numéricos) y, opcionalmente, aceptar `remito` (o resolverlo en backend por `nroBolsin`) para incluirlo en el cuerpo del correo enviado al GCM destino.

### 4.4 Cambios requeridos en `GET /api/bolsines`

- Ordenar por defecto de más reciente a más antiguo (`id: "desc"` o `fecha: "desc"`) o permitir `?orden=` para que los bolsines activos/nuevos aparezcan primero.
- Incluir `remito: { numero, asunto, tipoDocumento } | null` en la proyección de `BolsinRepositoryPrisma.listar()` y `buscarPorId()` una vez agregado al schema de Prisma.
