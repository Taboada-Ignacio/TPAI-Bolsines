---
id: PPAI-IMPL-BOLSINES-CICLO-VIDA
titulo: Ciclo de vida en /bolsines — Remito, Documentación, Precintado y Reapertura
tipo: implementacion
unidad: PPAI
categoria: IMPL
tags:
  [
    bolsines,
    remito,
    documentacion,
    precinto,
    cierre,
    reapertura,
    frontend,
    backend,
  ]
conectado_con:
  [
    PPAI-DOM-BOLSIN,
    PPAI-DOM-REMITO,
    PPAI-DOM-PRECINTO,
    PPAI-PAT-STATE-BOLSIN,
    PPAI-IMPL-SEGUIMIENTO-CONTRATO-BACK,
  ]
depende_de: [PPAI-DOM-BOLSIN, PPAI-DOM-REMITO, PPAI-DOM-PRECINTO]
---

# Ciclo de vida en `/bolsines` — Remito, Precinto y Reapertura

Resumen breve del contrato que usa la UI de `/bolsines` (`BolsinesView`, `BolsinDetalleView`, `BolsinFormSheet`, `BolsinPrecintoSheet`) para que **Backend** pueda implementar los endpoints sin fricción.

## 1. Remito y documentación asociada en Alta/Edición

- `POST /api/bolsines` y `PUT /api/bolsines/[id]` envían opcionalmente:
  ```json
  {
    "remito": {
      "numero": "REM-4401",
      "asunto": "Dictamen Junta Médica #882",
      "tipoDocumento": "Expediente médico"
    }
  }
  ```
- Mientras Backend no lo persista en Prisma, Zod ignora la propiedad extra sin romper el alta/edición, y la UI conserva el remito en memoria hasta recibirlo en `GET /api/bolsines` y `GET /api/bolsines/[id]`.

## 2. Poner precinto (Cerrar bolsín: `Creado` → `Cerrado`)

- **Endpoint esperado:** `POST /api/bolsines/[id]/cerrar`
  - **Body:** `{ "numeroPrecinto": 940123 }`
  - **Regla ([[PPAI-DOM-PRECINTO]]):** Solo válido si el bolsín está en `Creado`. Si fue reabierto previamente, el nuevo `numeroPrecinto` debe ser **distinto** al precinto roto anterior.
  - **Respuesta `200 OK`:** `BolsinListadoItem` actualizado con `estadoActual: { id, nombre: "Cerrado" }` y `numeroPrecinto`.
- **Respaldo en UI:** Si devuelve `404`/`405`, la UI actualiza el precinto vía `PUT /api/bolsines/[id]` y transiciona el estado visualmente en cliente.

## 3. Abrir de nuevo (Reabrir bolsín: `Cerrado` → `Creado`)

- **Endpoint esperado:** `POST /api/bolsines/[id]/reabrir`
  - **Regla ([[PPAI-PAT-STATE-BOLSIN]]):** Solo válido si el bolsín está en `Cerrado`. Rompe el precinto actual (`numeroPrecinto: null` o marcado como roto) y vuelve a estado `Creado`.
  - **Respuesta `200 OK`:** `BolsinListadoItem` actualizado con `estadoActual: { id, nombre: "Creado" }`.
- **Respaldo en UI:** Si devuelve `404`/`405`, la UI registra `precintoAnterior` en memoria y pasa el estado visual a `Creado` para exigir un precinto distinto al volver a cerrarlo.
