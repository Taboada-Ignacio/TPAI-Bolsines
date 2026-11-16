# Technical Spec — Alineación Frontend CU 36 (`cu36-alineacion-backend`)

**Feature ID:** `cu36-alineacion-backend`  
**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Zod, Vitest.

---

## 1. Contratos y DTOs (`src/dtos/seguimiento-bolsin.dto.ts`)

- En `bolsinSeguimientoSchema`: permitir `numeroPrecinto: z.union([textoObligatorio, z.number().int().positive()]).nullable()` para representar fielmente `precinto: null` sin fabricar códigos `B-XXX`.
- En `seguimientoResponseSchema`: agregar `sinUbicacion: z.number().int().min(0).optional().default(0)`.

## 2. Cliente de Seguimiento (`src/services/seguimiento/seguimiento-cliente.ts`)

- En `adaptarCu36Backend`:
  - Preservar `numeroPrecinto: punto.precinto` (puede ser `null`).
  - Propagar `sinUbicacion: backend.sinUbicacion`.
- En `notificarUbicacionGerente`:
  - Requerir `emailDestino` válido cuando se llama contra el backend real (si falta `emailDestino`, lanzar `ErrorSeguimientoCliente` en lugar de usar `"gcm.destino@art-bolsines.gob.ar"`, manteniendo compatibilidad con modo demo cuando el servidor responde `404`/`501`/HTML).

## 3. Navegación y Guardia SSR

- `src/lib/navigation.ts`:
  - Exportar `ROL_ENCARGADO_BOLSINES = "Encargado de Bolsines"`.
  - Asignar `roles: [ROL_ENCARGADO_BOLSINES]` al destino `seguimiento` (y actualizar `tests/navigation.test.ts` si corresponde).
- `src/app/(app)/seguimiento/page.tsx`:
  - Consultar `getPerfilActual()` (como ya hacen `/empleados` y `/perfil`).
  - Si `perfil.sesion.rol !== ROL_ENCARGADO_BOLSINES`, renderizar vista de **Acceso restringido** con botón hacia `/inicio`.
  - Pasar `cmOrigenInicial={{ codigo: perfil.comisionMedica.codigo, nombre: perfil.comisionMedica.nombre, direccion: perfil.comisionMedica.direccion }}` como prop a `<SeguimientoWorkspace />`.

## 4. Componentes UI (`src/components/seguimiento/`)

- `SeguimientoWorkspace.tsx`:
  - Aceptar `cmOrigenInicial?: CmOrigenSeguimiento`. Usar `cmOrigen ?? cmOrigenInicial ?? null` en cabecera y mapa.
  - Guardar estado `sinUbicacion` (`number`).
  - En `PageActions`, agregar enlace/botón **"Volver al inicio"** (`href="/inicio"`) para flujo **A4**.
  - Pasar `sinUbicacion` a `BolsinesTransitoList` y ajustar `filtrarBolsinesSeguimiento` para manejar `bolsin.numeroPrecinto === null` (`String(bolsin.numeroPrecinto ?? "")`).
- `SeguimientoFiltrosBar.tsx`:
  - En el `Select` de **Modelo GPS**, mantener `XTR-4500L` habilitado y marcar `QX-7A` / `MTR-900` como `disabled` con texto informativo `(próximamente en backend)` o nota breve, evitando llamadas redundantes.
- `BolsinesTransitoList.tsx`, `BolsinTransitoRow.tsx`, `BolsinDetallePanel.tsx`, `PreviewBolsinCard.tsx`:
  - Mostrar `"Sin precinto"` cuando `numeroPrecinto === null`.
  - En `BolsinesTransitoList`: si `sinUbicacion > 0`, mostrar banner ámbar **A3** (*"N bolsín(es) enviado(s) sin respuesta GPS actual"*), y si `totalGeneral === 0 && sinUbicacion > 0`, mostrar estado vacío **A3** en vez de **A1**.
  - En `BolsinDetallePanel`: renderizar sección de remitos solo si `bolsin.remitos.length > 0`.
- `ConfirmarNotificacionModal.tsx`:
  - Verificar `Boolean(bolsin?.cmDestino.emailGcm && bolsin?.ubicacion)`. Si falta alguno, mostrar alerta `role="alert"` y deshabilitar el botón de envío.
- `.env.example`:
  - Agregar `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=` comentado/opcional para documentar la variable del mapa.
