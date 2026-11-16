# Plan de Ejecución — Seguimiento de Bolsines en Mapa (CU 36 + CU 30/31)

**Feature ID:** `cu36-seguimiento-bolsines`  
**Orden estricto:** Respetar dependencias. No escribir código de aplicación hasta aprobar `[SEG-01]` (regla #2 de `PPAI-IMPL-FRONTEND-HANDOFF.md`).  
**Checks por tarea de código:** `npm run typecheck`, `npm run lint`, `npm run test:run`, `npm run build` (con `--webpack` si Turbopack falla por permisos de enlace en Windows).

---

## Capa 0 — Maqueta Visual Previa (Gate Obligatorio)

- [x] **[SEG-01] Crear maqueta HTML previa en islas para aprobación visual**
  - **Archivos:** `docs/referencias/seguimiento/maqueta-seguimiento.html`
  - **Depends on:** Ninguna
  - **Parallelizable:** false
  - **Detalle:** Maqueta autocontenida en HTML/CSS/JS fiel a `maqueta-aprobada-islas.html` y tokens de `globals.css`. Incluye selector de tema **Claro / Oscuro**, selector de estados (**Poblado**, **A1 Sin bolsines**, **A2 Sin coincidencias**, **A3 Sin cobertura GPS**, **Modal CU 30/31**), selector de modelo GPS (`XTR-4500L`, `QX-7A`, `MTR-900`), `SplitFlap` en detalle, islas con borde `1px` sin sombras y voseo rioplatense sin jerga.
  - **Criterio de salida:** El usuario revisa la maqueta en navegador y aprueba explícitamente la estética y disposición antes de pasar a `[SEG-02]`.

---

## Capa 1 — Contratos DTO y Cliente de Datos CU 36

- [x] **[SEG-02] Definir DTOs Zod y cliente de seguimiento alineado a `InterfazGPSTracker`**
  - **Archivos:** `src/dtos/seguimiento-bolsin.dto.ts`, `src/services/seguimiento/seguimiento-cliente.ts`, `tests/seguimiento-dto.test.ts`
  - **Depends on:** `[SEG-01]`
  - **Parallelizable:** false
  - **Detalle:** Validar `ModeloGPSTracker` (`XTR-4500L` | `QX-7A` | `MTR-900`), `filaGps` de `src/dtos/localizacion-gps.dto.ts`, respuesta de listado CU 36 (incluyendo estado `vivo` / `sin_cobertura` para A3) y payload/respuesta de notificación CU 30/31. Implementar `seguimiento-cliente.ts` con lectura a `/api/seguimiento` y `/api/seguimiento/notificar` (con respaldo controlado si el endpoint aún no existe en backend).
  - **Criterio de salida:** Tests unitarios de validación Zod en verde; `typecheck` y `lint` sin errores.

---

## Capa 2 — Componentes de UI en `src/components/seguimiento/`

- [x] **[SEG-03] Implementar filtros (`filters/`)**
  - **Archivos:** `src/components/seguimiento/filters/SeguimientoFiltrosBar.tsx`
  - **Depends on:** `[SEG-02]`
  - **Parallelizable:** true
  - **Detalle:** Buscador por N.º de precinto con botón rápido de limpieza, `Select` de CM destino, selector de modelo GPS (`XTR-4500L`, `QX-7A`, `MTR-900`) y contador de resultados con `aria-live="polite"`. Funciona en tema claro y oscuro con tokens semánticos.
  - **Criterio de salida:** Filtrado reactivo por precinto y destino, accesible por teclado, `typecheck` en verde.

- [x] **[SEG-04] Implementar listado de bolsines en tránsito (`list/`)**
  - **Archivos:** `src/components/seguimiento/list/BolsinesTransitoList.tsx`, `src/components/seguimiento/list/BolsinTransitoRow.tsx`
  - **Depends on:** `[SEG-02]`
  - **Parallelizable:** true
  - **Detalle:** Lista de bolsines `Enviado` de la CM origen; estado de carga con `Skeleton`; estado vacío **A1** (sin bolsines enviados para la CM actual); estado vacío **A2** (sin coincidencias + botón *"Limpiar filtros"*); insignia ámbar **A3** cuando no hay cobertura actual.
  - **Criterio de salida:** Todos los estados (cargando, poblado, A1, A2, A3) renderizan correctamente en ambos temas.

- [x] **[SEG-05] Implementar mapa interactivo y marcadores (`map/`)**
  - **Archivos:** `src/components/seguimiento/map/MapaSeguimiento.tsx`, `src/components/seguimiento/map/MarcadorBolsin.tsx`
  - **Depends on:** `[SEG-02]`
  - **Parallelizable:** true
  - **Detalle:** Mapa vectorial interactivo a sangre (`--canvas`, `--raised`, `--surface`) con rutas, marcadores sincronizados (`--lime` en vivo, `--amber` en A3 última posición conocida), centrado al seleccionar un bolsín, controles de zoom/recentrado y leyenda en isla compacta.
  - **Criterio de salida:** Marcadores accesibles con `<button>` y `aria-label`, sincronización bidireccional lista ↔ mapa, legible en claro y oscuro.

- [x] **[SEG-06] Implementar panel de detalle (`detail/`)**
  - **Archivos:** `src/components/seguimiento/detail/BolsinDetallePanel.tsx`
  - **Depends on:** `[SEG-02]`
  - **Parallelizable:** true
  - **Detalle:** Muestra N.º de bolsín con `SplitFlap`, N.º de precinto, CM origen → CM destino, coordenadas (`lat`, `lng`) en `font-mono`, fecha/hora de última actualización, aviso A3 si corresponde, listado de remitos/documentación y botón táctil primario **"Avisar ubicación al gerente"**.
  - **Criterio de salida:** Diseño limpio en isla/sheet, sin jerga y con voseo rioplatense.

- [x] **[SEG-07] Implementar diálogo de confirmación y feedback CU 30/31 (`notifications/`)**
  - **Archivos:** `src/components/seguimiento/notifications/ConfirmarNotificacionModal.tsx`
  - **Depends on:** `[SEG-02]`
  - **Parallelizable:** true
  - **Detalle:** Modal sobre `<dialog>` nativo que consulta confirmación al EB antes de enviar el correo al GCM destino, previsualiza los 7 datos obligatorios de `PPAI-CU-30.md`, gestiona estados enviando/éxito/error y permite cancelar sin enviar (flujo **A5**).
  - **Criterio de salida:** Foco atrapado en `<dialog>`, cierre con `Esc`, aviso `aria-live="assertive"` al completar o fallar.

---

## Capa 3 — Ensamblaje, Integración y Coreografía GSAP

- [x] **[SEG-08] Ensamblar `SeguimientoWorkspace` y página `/seguimiento`**
  - **Archivos:** `src/components/seguimiento/SeguimientoWorkspace.tsx`, `src/app/(app)/seguimiento/page.tsx`
  - **Depends on:** `[SEG-03]`, `[SEG-04]`, `[SEG-05]`, `[SEG-06]`, `[SEG-07]`
  - **Parallelizable:** false
  - **Detalle:** Reemplazar el placeholder actual de `src/app/(app)/seguimiento/page.tsx` usando `PageBody variant="bleed"`, `PageActions` (botón Actualizar), islas flotantes respetando `--shell-top`, `--shell-left` y `--shell-bottom`, `MasterDetailSplit` en desktop/tablet y `ResponsiveSheet` en mobile.
  - **Criterio de salida:** Flujo completo navegable de punta a punta sin superposición con `SideIsland` ni `DockPill`.

- [x] **[SEG-09] Integrar endpoint/gestor CU 36 y CU 30/31 cuando backend esté disponible**
  - **Archivos:** `src/services/seguimiento/seguimiento-cliente.ts`, `tests/seguimiento-cliente.test.ts`
  - **Depends on:** `[SEG-08]`
  - **Parallelizable:** false
  - **Detalle:** Conectar llamadas reales a `GestorSeguimientoBolsines` (`/api/seguimiento` y `/api/seguimiento/notificar`) manteniendo compatibilidad con `InterfazGPSTracker` (`XTR-4500L`, `QX-7A`, `MTR-900`) y manejo de `ErrorGPSTracker` / A3.
  - **Criterio de salida:** Pruebas de integración con respuestas reales y simuladas (incluyendo `simularFallo=1` para A3) en verde.

- [x] **[SEG-10] Añadir coreografía GSAP con `gsap.matchMedia()`**
  - **Archivos:** `src/components/seguimiento/SeguimientoWorkspace.tsx`, `src/components/seguimiento/map/MapaSeguimiento.tsx`, `src/components/seguimiento/detail/BolsinDetallePanel.tsx`
  - **Depends on:** `[SEG-08]`
  - **Parallelizable:** false
  - **Detalle:** Entrada escalonada de islas (`0.48s expo.out`), aparición de marcadores, pulso sutil del pin seleccionado y transición de detalle usando `useGSAP` + `gsap.matchMedia()` con fallback instantáneo (`duration: 0`) para `(prefers-reduced-motion: reduce)`.
  - **Criterio de salida:** Animaciones fluidas e interrumpibles; cero movimiento bajo `prefers-reduced-motion: reduce`.

---

## Capa 4 — Verificación Visual, Responsiva y Accesibilidad

- [x] **[SEG-11] Revisión visual claro/oscuro en 3 breakpoints (`360px`, `768px`, `1280px`) y auditoría a11y**
  - **Archivos:** `specs/frontend/cu36-seguimiento-bolsines/todos.md` (registro de verificación)
  - **Depends on:** `[SEG-09]`, `[SEG-10]`
  - **Parallelizable:** false
  - **Detalle:** Verificar contraste WCAG 2.2 AA en tema claro y oscuro, ausencia de sombras en islas, bordes `1px`, alineación con `--shell-left` al expandir `SideIsland`, `DockPill` en `360px`, navegación completa por teclado (Tab, Enter, Flechas, Esc) y lectores de pantalla (`aria-live`). Ejecutar `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build`.
  - **Criterio de salida:** Todos los checks en verde y verificación visual aprobada en los 3 breakpoints y ambos temas.
  - **Nota de verificación manual pendiente en navegador:** Los checks automáticos (`typecheck`, `lint`, `test:run`, `build --webpack`) se ejecutan en CLI; queda pendiente la inspección visual interactiva en navegador real (claro/oscuro en `360px`, `768px`, `1280px`, expansión de `SideIsland` sobre `--shell-left`, despeje de `DockPill` y recorrido con lector de pantalla).

---

## Capa 5 — Evolución MapLibre 3D + Camiones → Bolsines + Visor 3D + Fix `/api/seguimiento`

- [x] **[M3D-01] Corregir error `/api/seguimiento` (HTML 200) e instalar `maplibre-gl` + worker estático**
  - **Archivos:** `package.json`, `public/maplibre/maplibre-gl-worker.mjs`, `src/services/seguimiento/seguimiento-cliente.ts`, `src/app/api/seguimiento/route.ts`, `src/app/api/seguimiento/notificar/route.ts`, `tests/seguimiento-cliente.test.ts`
  - **Depends on:** `[SEG-11]`
  - **Parallelizable:** false
  - **Detalle:** En `seguimiento-cliente.ts`, verificar `content-type` (`application/json`) antes de invocar `respuesta.json()` para evitar `SyntaxError` cuando `src/app/(app)/[...resto]/page.tsx` devuelve HTML `200`, activando el respaldo controlado. Exponer Route Handlers de respaldo `/api/seguimiento` (`GET`) y `/api/seguimiento/notificar` (`POST`) hasta que `GestorSeguimientoBolsines` esté listo. Instalar `maplibre-gl@^6.11.1` y copiar `maplibre-gl-worker.mjs` a `public/maplibre/maplibre-gl-worker.mjs` para Next.js 16.
  - **Criterio de salida:** `/seguimiento` no arroja error de parseo JSON sin backend; tests de `seguimiento-cliente.ts` cubriendo respuesta HTML `200` y JSON en verde; worker accesible en `/maplibre/maplibre-gl-worker.mjs`.

- [x] **[M3D-02] Implementar agrupador en cliente `UnidadTransporte`**
  - **Archivos:** `src/services/seguimiento/agrupador-unidades.ts`, `tests/agrupador-unidades.test.ts`
  - **Depends on:** `[M3D-01]`
  - **Parallelizable:** true
  - **Detalle:** Agrupar `BolsinSeguimiento[]` por corredor nacional (`RN7`, `RN9`, `RN40`) y sentido (`ida` / `vuelta`), calculando posición representativa, conteo a bordo, bandera `tieneA3` y conteo de coincidencias contra los filtros activos (precinto y CM destino) para atenuar camiones sin coincidencias al `15%`.
  - **Criterio de salida:** Tests unitarios del agrupador (1 bolsín, N bolsines por corredor/sentido, A3 y filtros) en verde; `typecheck` sin errores.

- [x] **[M3D-03] Implementar `Mapa3DSeguimiento` con MapLibre GL 3D y capas GeoJSON de rutas**
  - **Archivos:** `src/components/seguimiento/map/Mapa3DSeguimiento.tsx`, `src/components/seguimiento/map/MapaSeguimiento.tsx`
  - **Depends on:** `[M3D-01]`
  - **Parallelizable:** true
  - **Detalle:** Cargar `Mapa3DSeguimiento` con `next/dynamic(..., { ssr: false })` y `maplibreGl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs")`. Configurar estilos Carto sin API key (`voyager-gl-style` claro y `dark-matter-gl-style` oscuro) con cambio en vivo vía `map.setStyle(..., { diff: false })` y re-inyección de fuentes/capas GeoJSON (`src/lib/gps-simulator/rutas-nacionales.geojson` para `RN7`, `RN9`, `RN40`) usando tokens del moodboard (Elite Blue / Volt Lime / Amber A3) en `style.load`. Activar proyección `globe` + `pitch: 35–45`, fallback automático a `mercator` si WebGL falla, y `ResizeObserver`.
  - **Criterio de salida:** Mapa 3D renderiza en claro/oscuro sin errores SSR ni de worker, cambia de estilo en vivo y muestra las rutas `RN7`, `RN9` y `RN40`.

- [x] **[M3D-04] Implementar `MarcadorCamion`, abanico hover desktop (`AbanicoBolsines`) y flujo tap mobile (`BolsinesABordoSheet`)**
  - **Archivos:** `src/components/seguimiento/map/MarcadorCamion.tsx`, `src/components/seguimiento/map/AbanicoBolsines.tsx`, `src/components/seguimiento/list/BolsinesABordoSheet.tsx`, `src/components/seguimiento/map/Mapa3DSeguimiento.tsx`
  - **Depends on:** `[M3D-02]`, `[M3D-03]`
  - **Parallelizable:** false
  - **Detalle:** Renderizar marcadores de `UnidadTransporte` en MapLibre con atenuación (`opacity: 0.15`) cuando no hay coincidencias de filtro. En desktop (`>= 768px`), al hacer hover/focus en el camión, elevar el marcador y desplegar `AbanicoBolsines` en arco orbital; click en bolsín ejecuta `map.flyTo(...)` y abre detalle. En mobile (`< 768px`), target táctil `>= 48x48px`: tap en camión con 1 bolsín abre detalle directo en `ResponsiveSheet`; tap con N bolsines abre `BolsinesABordoSheet` (*"Bolsines a bordo"*) o desagrupa al hacer pinch-to-zoom.
  - **Criterio de salida:** Interacción fluida Camión → Bolsín diferenciada por desktop/mobile, accesible por teclado y táctil `>= 48x48px`.

- [x] **[M3D-05] Implementar `PreviewBolsinCard` en hover y visor 3D procedural `VisorBolsin3D` en detalle**
  - **Archivos:** `src/components/seguimiento/map/PreviewBolsinCard.tsx`, `src/components/seguimiento/detail/VisorBolsin3D.tsx`, `src/components/seguimiento/detail/BolsinDetallePanel.tsx`, `src/components/seguimiento/list/BolsinTransitoRow.tsx`
  - **Depends on:** `[M3D-04]`
  - **Parallelizable:** false
  - **Detalle:** Al hacer hover sobre un bolsín en `AbanicoBolsines`, animar `PreviewBolsinCard` (N.º bolsín, precinto, CM destino, badge vivo/A3) y sincronizar el resaltado con `BolsinTransitoRow`. En `BolsinDetallePanel`, incorporar `VisorBolsin3D` reutilizando `src/components/login/bolsin3d/BolsinProcedural.tsx` dentro de `<Canvas frameloop="demand">` (con fallback si WebGL no está disponible), manteniendo `SplitFlap`, remitos, A3 y el CTA hacia `ConfirmarNotificacionModal` (CU 30/31).
  - **Criterio de salida:** Hover en abanico sincronizado con la lista; visor 3D renderiza en detalle con `frameloop="demand"` sin degradar el mapa.

- [x] **[M3D-06] Integración completa, coreografía GSAP `matchMedia()`, tests y build**
  - **Archivos:** `src/components/seguimiento/SeguimientoWorkspace.tsx`, `tests/seguimiento-workspace.test.tsx`, `specs/frontend/cu36-seguimiento-bolsines/todos.md`
  - **Depends on:** `[M3D-05]`
  - **Parallelizable:** false
  - **Detalle:** Integrar estados A1, A2, A3, A4, A5, modal `<dialog>` CU 30/31, abanico orbital, preview y sheet mobile dentro de `SeguimientoWorkspace.tsx`. Registrar animaciones de abanico, tarjetas y elevación en `useGSAP` + `gsap.matchMedia()` respetando `(prefers-reduced-motion: reduce)` (`duration: 0` y `jumpTo`). Ejecutar `npm run typecheck`, `npm run lint`, `npm run test:run` y `npm run build` (con `--webpack` si aplica).
  - **Criterio de salida:** `typecheck`, `lint`, `test:run` y `build` en verde sin regresiones.
