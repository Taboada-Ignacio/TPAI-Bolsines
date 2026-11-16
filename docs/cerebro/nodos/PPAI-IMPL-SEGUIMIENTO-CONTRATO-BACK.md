---
id: PPAI-IMPL-SEGUIMIENTO-CONTRATO-BACK
titulo: Contrato Backend y API GPS para Seguimiento Individual (1 Bolsín = 1 Ruta = 1 Remito)
tipo: implementacion
unidad: PPAI
categoria: IMPL
tags:
  [
    backend,
    frontend,
    contrato-api,
    cu36,
    cu31,
    seguimiento,
    gps-tracker,
    remito-unico,
    bolsines,
  ]
conectado_con:
  [
    PPAI-CU-36,
    PPAI-CU-30,
    PPAI-PAT-ADAPTER-GPS,
    PPAI-DOM-BOLSIN,
    PPAI-DOM-REMITO,
    PPAI-IMPL-BACKEND-REVISION,
    PPAI-IMPL-FRONTEND-HANDOFF,
  ]
depende_de: [PPAI-CU-36, PPAI-CU-30, PPAI-PAT-ADAPTER-GPS]
---

# Contrato Backend y API GPS — Seguimiento Individual por Bolsín

**Rama origen:** `feature/frontend` · **Spec completa:** [`specs/frontend/seguimiento-bolsin-individual/`](../../../specs/frontend/seguimiento-bolsin-individual/technical-spec.md)

Este nodo resume los cambios aplicados en el frontend para que **Backend** pueda comparar con lo que está desarrollando en `feature/backend` y decidir si alinea los contratos.

---

## 1. Decisiones Funcionales Ya Aplicadas en Frontend

1. **1 Marcador = 1 Bolsín = 1 Viaje/Ruta (sin camiones):**
   - Se eliminó la agrupación en camiones (`UnidadTransporte`, `MarcadorCamion`, `Camion3D`, `AbanicoBolsines`, `BolsinesABordoSheet`) en favor de `MarcadorBolsin` individual.
   - Cada bolsín dibuja su propia ruta (`CM Origen → Posición actual → CM Destino`).
2. **Máximo 1 Remito por Bolsín (`0..1`):**
   - El DTO [[PPAI-DOM-BOLSIN]] en seguimiento (`bolsinSeguimientoSchema`) pasó de `remitos: RemitoSeguimiento[]` a **`remito: RemitoSeguimiento | null | undefined`**.
   - Tanto `BolsinDetallePanel`, `ConfirmarNotificacionModal` y `BolsinListadoItem` operan en singular.
3. **Consistencia `/bolsines` ↔ `/seguimiento`:**
   - `/bolsines` (`BolsinesView`) ahora filtra por **CM de origen** y prioriza bolsines `Enviado` y más recientes (`id` descendente) para que coincidan a primera vista con `/seguimiento`.
   - El respaldo demo (`BOLSINES_DEMO`) usa códigos reales (`CM-CBA`, `CM-SF`, `CM-BA`, `CM-MZA`, `CM-TUC`) y 1 remito por bolsín.

---

## 2. Contrato Esperado en Backend (`feature/backend`)

### 2.1 `GET /api/auth/cu36/seguimiento?modeloGps=XTR-4500L|QX-7A|MTR-900`

En [[PPAI-CU-36]] (`src/app/api/auth/cu36/seguimiento/route.ts` y `GestorConsultarUbicacionDeBolsin.ts`):

1. **Leer `?modeloGps=`:** Validar con `modeloGpsSchema` (default `"XTR-4500L"`, `400` si es inválido) y pasarlo a `InterfazGPSTracker.obtenerLocalizacionDeBolsines(...)`:
   - `XTR-4500L`: enviar `codigosCMOrigen`.
   - `QX-7A`: enviar `codigosCMDestino`.
   - `MTR-900`: sin códigos de CM.
2. **Eliminar el `Map` estático `origenesOficiales`:** Consultar todos los bolsines en estado `Enviado` de la CM del usuario logueado (sin limitarse a los 10 IDs del seed).
3. **Aislar fallos por bolsín (sin `503` global si falla uno solo):** Si un bolsín puntual no tiene señal o el tracker devuelve `404`, incluirlo en `puntos` con `latitud: null, longitud: null, actualizado: null, estadoCobertura: "sin_cobertura"` e incrementar `sinUbicacion`. Reservar `503` para errores globales de configuración (`CONFIGURACION`) o caída general de red.
4. **Payload esperado por cada punto en `puntos[]`:**
   ```json
   {
     "id": 36,
     "numero": 101,
     "precinto": 940101,
     "destino": "Comisión Médica Santa Fe",
     "destinoCodigo": "CM-SF",
     "emailGcm": "gcm.cm-sf@example.test",
     "pesoKg": 600,
     "remito": {
       "numero": "REM-4401",
       "asunto": "Dictamen Junta Médica",
       "tipoDocumento": "Expediente médico"
     },
     "latitud": -32.9468,
     "longitud": -60.6393,
     "actualizado": "2026-11-16T00:00:00.000Z",
     "estadoCobertura": "vivo"
   }
   ```
   *(Nota: `remito` puede ser `null` si todavía no está modelado en Prisma; el frontend lo tolera sin fallar).*

### 2.2 `GET /api/bolsines` y Prisma (`Bolsin` + `Remito`)

- Modelar [[PPAI-DOM-REMITO]] único (`0..1`) asociado a `Bolsin` en `prisma/schema.prisma` y proyectar `remito` en `BolsinRepositoryPrisma.listar()`, `buscarPorId()` y `listarEnviados()`.
- Ordenar `listar()` por defecto de más reciente a más antiguo (`id: "desc"`).

### 2.3 `POST /api/auth/cu31/notificar-ubicacion`

- Mantener el contrato actual de [[PPAI-CU-30]] (`{ emailDestino, nroBolsin, latitud, longitud, fechaHoraActualizacion }`) e incluir el detalle del `remito` único en el correo al GCM destino (recibiéndolo opcional en el body o consultándolo por `nroBolsin`).

---

## 3. Referencia Rápida de los 3 Proveedores GPS ([[PPAI-PAT-ADAPTER-GPS]])

- **`XTR-4500L`:** `GET /api/xtr-4500l/getBolsinLocation?numeroBolsin=...&codigoComisionMedicaOrigen=...` → `{ items: [{ numeroBolsin, latitud, longitud, fechaHoraUltimaActualizacion }] }`
- **`QX-7A`:** `GET /api/navtrack-qx-7a/retrieveTrackingData?numeroBolsin=...&codigoComisionMedicaDestino=...` → CSV `"nroBolsin,lat,lng,fecha"`
- **`MTR-900`:** `GET /api/geopulse-mtr-900/fetchCargoPositions?numeroBolsin=...` → `[[nroBolsin, lat, lng, fecha]]`
