# Especificación Técnica — Seguimiento de Bolsines en Mapa 3D (CU 36 + CU 30/31)

**Feature ID:** `cu36-seguimiento-bolsines`  
**Rama:** `feature/frontend`  
**Referencias obligatorias:** `src/app/globals.css`, `PPAI-UX-APP-SHELL.md`, `PPAI-UX-MANUAL-MARCA.md`, `PPAI-IMPL-FRONTEND-HANDOFF.md`, `src/adapters/InterfazGPSTracker.ts`, `src/dtos/localizacion-gps.dto.ts`, `src/lib/gps-simulator/rutas-nacionales.geojson`, `src/components/login/bolsin3d/BolsinProcedural.tsx`.  
**Estado:** Actualización MapLibre 3D + Camiones → Bolsines + Visor 3D (Gate 2)

---

## 1. Sistema de Diseño y Tokens Semánticos

Todos los componentes UI consumen **tokens semánticos** definidos en `src/app/globals.css` (`@theme inline` + `:root` / `:root[data-theme="dark"]`). Queda prohibido usar colores hexadecimales fijos en componentes React/CSS; para capas WebGL de MapLibre (que requieren strings de color en runtime), se leen las variables CSS computadas desde `getComputedStyle(document.documentElement)` con correspondencia exacta a los tokens del moodboard.

| Rol visual | Token semántico | Claro | Oscuro | Uso en CU 36 |
| --- | --- | --- | --- | --- |
| Fondo de mapa base | `--canvas` / `--raised` | `#c7d1dd` / `#e1e8f0` | `#0a0f1a` / `#1b2433` | Contenedor base bajo el canvas MapLibre y fallback sin WebGL |
| Superficie de islas | `--glass` / `--surface` | `rgb(238 242 246 / 0.72)` / `#eef2f6` | `rgb(18 25 39 / 0.72)` / `#121927` | Islas flotantes de filtros, lista, tarjetas preview y detalle (`backdrop-blur-[16px]`) |
| Borde de islas (sin sombra) | `--edge` / `--hair` | `rgb(11 18 32 / 0.16)` | `rgb(238 242 246 / 0.14)` | Borde `1px solid` obligatorio; `box-shadow: none` en islas |
| Texto principal / secundario | `--fg` / `--muted` | `#0b1220` / `#475569` | `#eef2f6` / `#94a3b8` | Títulos, precintos, direcciones y timestamps |
| Acción primaria / foco / rutas | `--primary` / `--accent` | `#0251b0` | `#5b9bff` / `#7fb2ff` | Elite Blue: rutas nacionales GeoJSON, botón *"Avisar ubicación al gerente"*, foco |
| Señal GPS en vivo | `--lime` + `--lime-edge` | `#d1ff42` + `#0b1220` | `#d1ff42` + `transparent` | Volt Lime: indicador en vivo en camión/abanico/lista, `SplitFlap`, resaltado de ruta activa |
| Advertencia A3 (Sin cobertura) | `--amber` + `--amber-ink` | `#f59e0b` / `#92400e` | `#f59e0b` / `#fbbf24` | Amber A3: marcador, chip del abanico y badge *"Sin cobertura · Última posición"* |
| Error crítico | `--danger` + `--danger-ink` | `#be123c` / `#9f1239` | `#f43f5e` / `#fda4af` | Error de envío de correo o caída total de lectura |

### Tipografía y Geometría del Shell

- **Fuentes:** `--font-display` (Space Grotesk) para encabezados y códigos; `--font-sans` (Plus Jakarta Sans) para texto UI; `--font-mono` (JetBrains Mono) para `MicroLabel`, coordenadas (`lat, lng`), precintos y timestamps.
- **Geometría de islas (`PageBody variant="bleed"`):**
  - Margen respecto al borde: `--isle-gap` (`8px`).
  - Radios: `--isle-r` (`24px`) en islas principales; `rounded-control` (`10px`) en controles internos.
  - Despejes automáticos del shell: `--shell-top` arriba, `--shell-left` a la izquierda en `>= 768px` (sincronizado con `:has([data-side-island]:hover)`), y `--shell-bottom` abajo en `< 768px` para no superponerse con `DockPill`.

---

## 2. Corrección del Bug `/api/seguimiento` y Contrato Backend

### 2.1 Diagnóstico del Bug Actual

Actualmente `/api/seguimiento` no existe en el servidor y el catch-all `src/app/(app)/[...resto]/page.tsx` responde con **HTTP `200 OK` y `Content-Type: text/html`** en lugar de `404` JSON. En `src/services/seguimiento/seguimiento-cliente.ts`, `consultarJsonConRespaldo()` solo verifica `respuesta.status === 404 || respuesta.status === 501` antes de ejecutar `respuesta.json()`, provocando un `SyntaxError` al intentar parsear HTML como JSON.

### 2.2 Solución en Dos Capas

1. **Blindaje en `src/services/seguimiento/seguimiento-cliente.ts`:**
   - Antes de llamar a `respuesta.json()`, inspeccionar `respuesta.headers.get("content-type")`.
   - Si el `content-type` **no** incluye `application/json` (por ejemplo `text/html` devuelto por `[...resto]/page.tsx`), activar el respaldo controlado `construirDemo()` sin lanzar error de parseo.
   - Mantener también el fallback para `404` / `501`.
2. **Route Handlers de respaldo controlado en Next.js (hasta que Nacho cierre `GestorSeguimientoBolsines`):**
   - `src/app/api/seguimiento/route.ts` (`GET`): valida `modelo` (`XTR-4500L` | `QX-7A` | `MTR-900`) y devuelve `NextResponse.json(...)` tipado con `seguimientoResponseSchema` usando los datos de corredor/simulador.
   - `src/app/api/seguimiento/notificar/route.ts` (`POST`): valida `notificarUbicacionRequestSchema` y devuelve `NextResponse.json(...)` con `notificarUbicacionResponseSchema`.
   - Cuando `GestorSeguimientoBolsines` esté integrado en backend, estos Route Handlers delegarán directamente al gestor sin cambiar la firma del cliente.

### 2.3 Contrato Esperado con Backend (`GestorSeguimientoBolsines` y CU 30/31)

1. **`GET /api/seguimiento?modelo=XTR-4500L|QX-7A|MTR-900`:**
   - Retorna `SeguimientoResponse` (`cmOrigen`, `modeloGps`, `bolsines[]` con `nroBolsin`, `numeroPrecinto`, `cmDestino`, `ubicacion: { latitud, longitud, fechaHoraActualizacion, estadoCobertura: "vivo" | "sin_cobertura" } | null`, `pesoKg`, `remitos[]`).
2. **`POST /api/seguimiento/notificar`:**
   - Body: `{ nroBolsin: number; modeloGps: ModeloGps }`.
   - Respuesta `200 OK`: `{ enviado: true; destinatarioEmail: string; destinatarioNombre: string; fechaEnvio: string }`.

---

## 3. Arquitectura de Componentes y Estado

### 3.1 Árbol de Archivos

```text
public/maplibre/
  └── maplibre-gl-worker.mjs            # Worker estático copiado de maplibre-gl/dist/ para Next.js 16

src/app/api/seguimiento/
  ├── route.ts                          # GET respaldo controlado JSON (CU 36)
  └── notificar/route.ts                # POST respaldo controlado JSON (CU 30/31)

src/dtos/
  └── seguimiento-bolsin.dto.ts         # Contratos Zod alineados con filaGps y CU 36 / CU 30

src/services/seguimiento/
  ├── seguimiento-cliente.ts            # Cliente HTTP con chequeo de content-type application/json + fallback
  └── agrupador-unidades.ts             # Agrupador UnidadTransporte (por ruta RN7/RN9/RN40 y sentido)

src/components/seguimiento/
  ├── SeguimientoWorkspace.tsx          # Orquestador de estado (filtros, hover/selección, A1/A2/A3, modal CU 30/31)
  ├── filters/
  │   └── SeguimientoFiltrosBar.tsx     # Búsqueda por N.º precinto, Select CM destino, selector ModeloGPS y limpiar
  ├── list/
  │   ├── BolsinesTransitoList.tsx      # Lista escaneable con estados Loading (Skeleton), A1 y A2
  │   ├── BolsinTransitoRow.tsx         # Fila interactiva sincronizada con hover/selección en mapa y abanico
  │   └── BolsinesABordoSheet.tsx       # Sheet mobile (< 768px) "Bolsines a bordo" al tocar camión con N bolsines
  ├── map/
  │   ├── Mapa3DSeguimiento.tsx         # Wrapper dynamic(..., { ssr: false }) + instancia MapLibre GL 3D
  │   ├── MapaSeguimiento.tsx           # Adaptador público estable hacia Mapa3DSeguimiento
  │   ├── MarcadorCamion.tsx            # Marcador HTML/SVG de UnidadTransporte (elevación hover / tap >= 48px)
  │   ├── AbanicoBolsines.tsx           # Abanico orbital (GSAP fan-out) al hacer hover en camión (desktop)
  │   └── PreviewBolsinCard.tsx         # Tarjeta flotante animada al hacer hover sobre un bolsín del abanico
  ├── detail/
  │   ├── BolsinDetallePanel.tsx        # Panel de detalle (VisorBolsin3D + SplitFlap + coords + remitos + CTA CU 30/31)
  │   └── VisorBolsin3D.tsx             # Canvas R3F con frameloop="demand" reutilizando BolsinProcedural.tsx
  └── notifications/
      └── ConfirmarNotificacionModal.tsx # Modal (<dialog>) de confirmación CU 30/31 con preview de email y feedback

src/app/(app)/seguimiento/
  └── page.tsx                          # PageBody variant="bleed" + PageActions + SeguimientoWorkspace
```

### 3.2 Mapa 3D con `maplibre-gl` (`^6.11.1`, patrón `Proyecto-Seminario`)

- **Carga segura en Next.js 16:**
  - `Mapa3DSeguimiento.tsx` se importa mediante `next/dynamic(..., { ssr: false })` desde `MapaSeguimiento.tsx` para evitar ejecución en SSR.
  - Se configura `maplibreGl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs")` usando el worker estático en `public/maplibre/maplibre-gl-worker.mjs`.
  - Se importa el CSS de MapLibre (`maplibre-gl/dist/maplibre-gl.css`) en el componente cliente del mapa.
- **Estilos vectoriales gratuitos sin API key y cambio de tema en vivo:**
  - Tema claro: `https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json`
  - Tema oscuro: `https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`
  - Al cambiar `data-theme` en `document.documentElement`, se invoca `map.setStyle(nuevoEstilo, { diff: false })` y en el evento `style.load` se re-inyectan las fuentes y capas GeoJSON de rutas.
- **Proyección 3D, fallback y dimensionamiento:**
  - Inicialización con `projection: "globe"` (o `setProjection({ type: "globe" })` en `style.load`) y `pitch` inicial entre `35` y `45` grados.
  - Detección de capacidades WebGL; si el contexto WebGL falla o no está disponible, hace fallback automático a `mercator` / vista vectorial plana sin romper la pantalla.
  - `ResizeObserver` sobre el contenedor del mapa llamando a `map.resize()` ante cambios del viewport o expansión de `SideIsland`.
- **Capas GeoJSON de rutas (`src/lib/gps-simulator/rutas-nacionales.geojson`):**
  - Se cargan los trazados `RN7`, `RN9` y `RN40` como fuente GeoJSON (`rutas-nacionales`).
  - Estilizado de línea con colores leídos de tokens CSS: trazo base en `--primary` / `--accent` (Elite Blue), resaltado de corredor activo en `--lime` (Volt Lime) y estado A3 en `--amber` (Amber A3).

### 3.3 Agrupador en Cliente `UnidadTransporte` (`agrupador-unidades.ts`)

- Agrupa los `BolsinSeguimiento[]` por corredor nacional (`RN7`, `RN9`, `RN40`) y sentido de circulación (ej. `RN9 · Ida` / `RN9 · Vuelta` inferido por `cmOrigen` → `cmDestino` o proximidad geográfica al trazado de `rutas-nacionales.geojson`).
- Cada `UnidadTransporte` expone:
  - `id`: identificador estable (`"${ruta}-${sentido}"`).
  - `ruta`: `"RN7" | "RN9" | "RN40" | "OTRA"`.
  - `sentido`: `"ida" | "vuelta"`.
  - `coordenadas`: centroide o posición representativa `[lng, lat]` del camión sobre el corredor.
  - `bolsines`: lista de `BolsinSeguimiento` a bordo.
  - `coincidenciasFiltro`: cantidad de bolsines que cumplen el filtro actual de precinto y CM destino (si es `0` con filtro activo, el marcador se atenúa a `opacity: 0.15`).
  - `tieneA3`: `true` si al menos un bolsín a bordo está en estado `sin_cobertura`.

### 3.4 Estrategia Camión → Bolsines → Detalle 3D (Desktop vs Mobile)

- **Desktop (`>= 768px`):**
  - `MarcadorCamion` renderiza el icono del camión, insignia de cantidad de bolsines y punto de estado (`--lime` / `--amber`).
  - **Hover sobre camión:** El camión se eleva (`y: -6`, `scale: 1.08`) y despliega `AbanicoBolsines` en arco orbital alrededor del marcador mediante GSAP.
  - **Hover sobre un bolsín del abanico:** Se actualiza `hoveredBolsinNro` (sincronizado con `BolsinTransitoRow` en la lista) y se anima `PreviewBolsinCard` (tarjeta flotante con N.º de bolsín, precinto, CM destino y badge vivo/A3).
  - **Click en bolsín (del abanico o de la lista):** Ejecuta `map.flyTo({ center: [lng, lat], zoom: 8.5, pitch: 45, duration: 900 })` y abre `BolsinDetallePanel` en `MasterDetailSplit` / isla derecha.
- **Mobile (`< 768px`):**
  - Sin interacciones dependientes de hover; cada `MarcadorCamion` garantiza área táctil mínima de `48x48px`.
  - **Tap en camión con 1 bolsín:** Selecciona directamente ese bolsín y abre `ResponsiveSheet` (`BottomSheet`) con `BolsinDetallePanel` (incluyendo `VisorBolsin3D`).
  - **Tap en camión con N bolsines:** Abre `BolsinesABordoSheet` (`ResponsiveSheet` titulado *"Bolsines a bordo"*) con tarjetas táctiles animadas con GSAP; al elegir uno, pasa al detalle. Adicionalmente, al hacer **pinch-to-zoom** por encima de un umbral de zoom (ej. `zoom >= 7.5`), los marcadores se desagrupan automáticamente en marcadores individuales.

### 3.5 Visor 3D Procedural en Detalle (`VisorBolsin3D.tsx`)

- Reutiliza `src/components/login/bolsin3d/BolsinProcedural.tsx` dentro de un `<Canvas frameloop="demand" dpr={[1, 2]}>` acotado al header del panel de detalle (`h-44` / `h-48`), minimizando consumo de GPU junto al mapa WebGL.
- Permite rotación suave con arrastre/hover (`OrbitControls` o rotación controlada) e invalida el frame solo cuando cambia la interacción o el estado (`invalidate()`), con fallback estático si no hay contexto WebGL disponible.

---

## 4. Coreografía de Motion (GSAP + `gsap.matchMedia`)

Toda animación se registra dentro de `useGSAP` usando `gsap.matchMedia()`:

1. **Entrada de pantalla (`(prefers-reduced-motion: no-preference)`):**
   - Islas flotantes (filtros/lista y leyenda): `gsap.from` con `autoAlpha: 0`, `y: 12`, duración `0.48s`, `ease: "expo.out"`, `stagger: 0.08`.
   - Marcadores de camión en el mapa: `scale: 0.6`, `autoAlpha: 0` → `1`, duración `0.42s`, `stagger: 0.05`, `ease: "power3.out"`.
2. **Abanico orbital y tarjetas (`(min-width: 768px)` y `no-preference`):**
   - **Fan-out del abanico (`AbanicoBolsines`):** Cada chip de bolsín se anima desde `(x: 0, y: 0, scale: 0.4, autoAlpha: 0)` hacia su coordenada polar `(cos(θ)*R, sin(θ)*R)` con `duration: 0.28`, `stagger: 0.04`, `ease: "back.out(1.4)"`.
   - **Tarjeta de vista previa (`PreviewBolsinCard`):** Entrada `autoAlpha: 0 -> 1`, `y: 8 -> 0`, `duration: 0.22`, `ease: "power2.out"`.
3. **Sheet Mobile (`(max-width: 767px)` y `no-preference`):**
   - Tarjetas dentro de *"Bolsines a bordo"* (`BolsinesABordoSheet`): `gsap.from` con `autoAlpha: 0`, `y: 10`, `stagger: 0.05`, `duration: 0.28`, `ease: "power2.out"`.
4. **Microinteracciones (nivel Control `100–280ms`):**
   - Selección de bolsín: vuelo suave `map.flyTo`, flip de `SplitFlap` en el detalle (`45ms` por paso), y entrada del panel de detalle (`autoAlpha: 0 -> 1`, `x: 16 -> 0`, `0.26s power2.out`).
   - Atenuación de camiones sin coincidencia de filtro: transición suave a `opacity: 0.15` (`0.22s`).
5. **Movimiento reducido (`(prefers-reduced-motion: reduce)`):**
   - Todas las propiedades aparecen con `duration: 0`, `autoAlpha: 1`, sin pulso infinito ni desplazamientos orbitales animados (el abanico aparece desplegado al instante), y el centrado del mapa usa `jumpTo` en lugar de `flyTo`.

---

## 5. Accesibilidad (a11y) y Semántica

- **Landmarks:** `PageBody variant="bleed"` provee `<main id="contenido">`. La isla de filtros/lista usa `<aside aria-label="Bolsines en seguimiento">`; el mapa usa `role="region" aria-label="Mapa 3D de seguimiento de bolsines"`.
- **Regiones vivas (`aria-live`):**
  - Contador de resultados filtrados y mensajes A1/A2/A3 en `aria-live="polite"`.
  - Errores de red o confirmación de envío CU 30/31 en `aria-live="assertive"`.
- **Navegación por teclado y targets táctiles:**
  - Los marcadores de camión (`MarcadorCamion`) y los chips del abanico (`AbanicoBolsines`) son `<button>` nativos con `aria-label` descriptivo (ej. *"Camión RN9 sentido ida, 3 bolsines a bordo, 1 sin cobertura"*). En mobile tienen área táctil mínima `48x48px`.
  - El foco por teclado sobre un camión en desktop también despliega el abanico para permitir operar sin mouse.
  - La lista soporta navegación con flechas y `Enter`/`Space`; el panel de detalle soporta `Esc` para cerrar y atajos `Anterior`/`Siguiente` de `MasterDetailSplit`.
  - `ConfirmarNotificacionModal` usa `<dialog>` nativo (`showModal()`), atrapa foco y devuelve el foco al botón disparador al cerrar.
- **Contraste:** Todos los pares sobre `--glass`, `--surface`, `--lime` (con `--lime-edge` en claro) y `--amber` (`--amber-ink`) cumplen WCAG 2.2 AA en ambos temas.
