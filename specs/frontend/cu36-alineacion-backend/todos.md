# Plan de Tareas — Alineación Frontend CU 36 (`cu36-alineacion-backend`)

**Feature ID:** `cu36-alineacion-backend`  
**Regla:** Solo tocar archivos de frontend (`src/app/(app)/seguimiento/`, `src/components/seguimiento/`, `src/dtos/seguimiento-bolsin.dto.ts`, `src/services/seguimiento/`, `src/lib/navigation.ts`, `.env.example`, `tests/`). **NO modificar ningún archivo del backend.**

---

- [x] **`[CU36-01]` DTOs y `seguimiento-cliente.ts`: `precinto: null`, `sinUbicacion` y validación de `emailDestino`**
  - **Archivos:** `src/dtos/seguimiento-bolsin.dto.ts`, `src/services/seguimiento/seguimiento-cliente.ts`, `tests/seguimiento-dto.test.ts`, `tests/seguimiento-cliente.test.ts`
  - **Detalle:** Permitir `numeroPrecinto` nullable en `bolsinSeguimientoSchema`, agregar `sinUbicacion` en `seguimientoResponseSchema` y propagarlo desde `adaptarCu36Backend`, evitar inventar `"B-..."` cuando `precinto === null`, y validar `emailDestino` real al llamar a `/api/auth/cu31/notificar-ubicacion`.

- [x] **`[CU36-02]` Guardia de rol `Encargado de Bolsines` y `cmOrigenInicial` desde sesión**
  - **Archivos:** `src/lib/navigation.ts`, `src/app/(app)/seguimiento/page.tsx`, `tests/navigation.test.ts`
  - **Detalle:** Restringir `seguimiento` a `ROL_ENCARGADO_BOLSINES = "Encargado de Bolsines"`, mostrar pantalla de acceso restringido si no coincide el rol en `seguimiento/page.tsx`, y pasar `cmOrigenInicial` desde `getPerfilActual()` a `SeguimientoWorkspace`.

- [x] **`[CU36-03]` Flujos A1, A3 (`sinUbicacion`), A4 (Volver al inicio) y modelo GPS en `SeguimientoWorkspace`, `SeguimientoFiltrosBar` y `BolsinesTransitoList`**
  - **Archivos:** `src/components/seguimiento/SeguimientoWorkspace.tsx`, `src/components/seguimiento/filters/SeguimientoFiltrosBar.tsx`, `src/components/seguimiento/list/BolsinesTransitoList.tsx`, `src/components/seguimiento/list/BolsinTransitoRow.tsx`, `src/components/seguimiento/map/PreviewBolsinCard.tsx`
  - **Detalle:** Mostrar `cmOrigenInicial` de respaldo, botón **"Volver al inicio"** (`A4`), banner/estado **A3** cuando `sinUbicacion > 0`, `"Sin precinto"` cuando `numeroPrecinto === null`, y marcar `QX-7A`/`MTR-900` como no disponibles en el backend actual.

- [x] **`[CU36-04]` Detalle, Modal CU 30/31 y `.env.example`**
  - **Archivos:** `src/components/seguimiento/detail/BolsinDetallePanel.tsx`, `src/components/seguimiento/notifications/ConfirmarNotificacionModal.tsx`, `.env.example`
  - **Detalle:** Ocultar remitos cuando `remitos.length === 0`, bloquear envío en `ConfirmarNotificacionModal` si falta `emailGcm` o `ubicacion` mostrando alerta clara, y documentar `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` en `.env.example`.

- [x] **`[CU36-05]` Verificación final (`typegen`, `tsc`, `eslint`, `vitest`)**
  - **Archivos:** `specs/frontend/cu36-alineacion-backend/todos.md`
  - **Detalle:** Ejecutar `npx next typegen`, `npx tsc --noEmit`, `npm run lint` y `npx vitest run` con todo en verde.
