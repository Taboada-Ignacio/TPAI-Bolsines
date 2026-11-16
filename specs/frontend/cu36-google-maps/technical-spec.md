# Especificación Técnica — Migración a Google Maps y Camión 3D (CU 36 + RNF 7)

**Feature ID:** `cu36-google-maps`  
**Rama:** `feature/frontend`  
**Referencias obligatorias:**
- Documentación DSI: `PPAI-CU-36.md`, `PPAI-CU-30.md`, `PPAI-UX-EMPATIA.md`, `PPAI-UX-MANUAL-MARCA.md`, `2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.pdf.md`, `2026 DSI Bolsines ERS V1-2.pdf.md` (RNF 7).
- Base actual de seguimiento: `specs/frontend/cu36-seguimiento-bolsines/technical-spec.md`, `src/app/globals.css`, `src/components/seguimiento/SeguimientoWorkspace.tsx`, `src/components/seguimiento/map/MarcadorCamion.tsx`, `src/components/layout/BolsinMini3D.tsx`, `src/lib/webgl.ts`.
**Estado:** Gate 2 — Especificación Técnica (Google Maps JS API + Camión 3D + Marca de agua oficial Google)

---

## 1. Sistema de Diseño y Tokens Semánticos

Se respetan estrictamente los tokens de `src/app/globals.css` (`@theme inline` + `:root` / `:root[data-theme="dark"]`) definidos en `PPAI-UX-MANUAL-MARCA.md` y `docs/brand-guidelines.md`. Ningún componente React/CSS ni capa de Google Maps debe hardcodear hexadecimales fuera de los tokens CSS leídos en runtime vía `getComputedStyle(document.documentElement)`.

| Rol visual | Token semántico | Uso en `cu36-google-maps` |
| --- | --- | --- |
| Fondo base del mapa | `--canvas` / `--raised` | Contenedor bajo Google Maps y fallback si falla la carga |
| Superficie de islas | `--glass` / `--surface` | Islas flotantes (`backdrop-blur-[16px]`), `AbanicoBolsines`, `PreviewBolsinCard`, `BolsinDetallePanel` |
| Borde de islas (sin sombra) | `--edge` / `--hair` | Borde `1px solid`, `box-shadow: none` |
| Texto principal / secundario | `--fg` / `--muted` | Títulos, `SplitFlap`, precintos, coordenadas (`JetBrains Mono`) |
| Acción primaria / ruta activa | `--primary` / `--accent` | Trazado de rutas nacionales (`RN7`, `RN9`, `RN40`), camión resaltado, CTA *"Avisar ubicación al gerente"*, foco |
| Señal GPS en vivo | `--lime` + `--lime-edge` | Halo del camión 3D en vivo, badge de cobertura, `SplitFlap` |
| Advertencia A3 (Sin cobertura) | `--amber` + `--amber-ink` | Ruta punteada (`A3`), halo ámbar del camión 3D, badge *"Sin cobertura · Última posición"* |
| Error crítico | `--danger` + `--danger-ink` | Estado de error al cargar el SDK de Google Maps o al notificar |

### Tipografía y Geometría del Shell
- **Fuentes:** `--font-display` (`Space Grotesk`), `--font-sans` (`Plus Jakarta Sans`), `--font-mono` (`JetBrains Mono`).
- **Geometría (`PageBody variant="bleed"`):** `--isle-gap` (`8px`), `--isle-r` (`24px`), `rounded-control` (`10px`), despejes `--shell-top`, `--shell-left` y `--shell-bottom`.

---

## 2. Integración con Google Maps JS API (RNF 7)

### 2.1 Carga del SDK y Política de Marca de Agua
- **Paquete:** `@googlemaps/js-api-loader` (ligero, tipado oficial de Google, compatible con React 19 y Next.js 16 en componente `"use client"` cargado con `next/dynamic(..., { ssr: false })`).
- **Variables de entorno:**
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: clave de Google Cloud (puede estar vacía o sin billing habilitado en entorno de desarrollo/evaluación).
  - `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` *(opcional)*: si está presente se pasa al inicializar `google.maps.Map` para habilitar estilos en la nube e inclinación vectorial en zoom cercano.
- **Comportamiento sin Billing (Marca de agua oficial):**
  - El contenedor del mapa **no bloquea** ni oculta el mapa cuando Google muestra el overlay estándar *"For development purposes only"* y el watermark de Google.
  - Se posicionan los controles propios de zoom/recentrado (`bottom-4 right-4`) respetando la atribución inferior de Google Maps sin tapar el logo oficial de Google.
- **Política de errores (E1):**
  - Si `gm_authFailure` o el rechazo de la promesa de `Loader.load()` impiden inicializar `google.maps.Map` (sin red o clave bloqueada), `MapaGoogleSeguimiento` renderiza un panel de estado informativo con botón **"Reintentar mapa"**, dejando intactos la lista lateral, los filtros y el modal CU 30/31.

### 2.2 Configuración de Cámara, Temas y Rutas GeoJSON
- **Vista inicial (sin planeta 3D):**
  - `center: { lat: -32.2, lng: -63.8 }` (centro de Argentina, o centrado en `cmOrigen` si no hay bolsines en A1).
  - `zoom: 5` (equivalente Mercator al encuadre nacional previo), `disableDefaultUI: true` (para mantener las islas propias del sistema y controles accesibles en español rioplatense), manteniendo la atribución oficial de Google.
  - Al seleccionar un bolsín: `map.panTo({ lat, lng })` y `map.setZoom(Math.max(map.getZoom() ?? 5, 9))` (con `tilt: 45` si `mapId` vectorial está activo).
- **Tema claro / oscuro en vivo:**
  - `MutationObserver` sobre `<html data-theme>` + `prefers-color-scheme`.
  - En modo estándar (sin `mapId`): aplica `styles` JSON minimalista (paleta arquitectónica claro/oscuro que hace armonía con `--canvas` y `--surface` de Rumbo/Costado) vía `map.setOptions({ styles })` en vivo sin destruir la instancia ni perder marcadores.
- **Rutas individuales por envío (`CM Origen → Posición actual → CM Destino`) y Modo Foco:**
  - En lugar de cargar un único GeoJSON estático con corredores fijos (`RN7/RN9/RN40`), el mapa construye la **ruta de cada envío de bolsín** a partir de las coordenadas de `CM Origen`, la `ubicacion` actual del bolsín y la `CM Destino` (usando `DirectionsService` cuando esté habilitado en la API Key, con **fallback inmediato** a trazado geodésico / waypoints intermedios sobre `google.maps.Polyline` cuando no haya Directions API o falle sin billing).
  - **Sin selección (vista general):** Cada envío activo muestra su `Polyline` base en `--primary` con baja opacidad (`0.28`, grosor `2px`) y todos los camiones 3D visibles (atenuados al `15%` si el filtro A2 los excluye).
  - **Con bolsín/camión seleccionado (Modo Foco):**
    - Se **ocultan del mapa** los demás camiones (`GoogleMarkerOverlay`) y las polilíneas de otros envíos para despejar por completo la lectura.
    - Se **resalta únicamente el camino del bolsín seleccionado**:
      - Tramo recorrido (`CM Origen → Posición actual`): `Polyline` sólida (`strokeColor: --lime` en vivo o `--amber` punteada en A3, grosor `4px`, `strokeOpacity: 0.95`).
      - Tramo restante (`Posición actual → CM Destino`): `Polyline` punteada en `--primary` (`strokeOpacity: 0.75`).
      - Marcadores discretos de origen y destino del recorrido (`CM Origen` y `CM Destino`).
    - Al cerrar el detalle (`seleccionadoNro === null`), se restauran automáticamente todos los camiones y rutas generales.

---

## 3. Arquitectura de Componentes y Camión 3D

### 3.1 Árbol de Archivos

```text
src/lib/seguimiento/
  ├── agrupador-unidades.ts             # (Existente) Agrupador UnidadTransporte por ruta y sentido
  └── google-maps-styles.ts             # Estilos minimalistas Claro/Oscuro para Google Maps

src/components/seguimiento/map/
  ├── MapaSeguimiento.tsx               # Adaptador público estable (dynamic ssr: false -> MapaGoogleSeguimiento)
  ├── MapaGoogleSeguimiento.tsx         # Instancia Google Maps JS API + Data/Polyline + OverlayView portals
  ├── GoogleMarkerOverlay.tsx           # Puente React Portal sobre google.maps.OverlayView (funciona con o sin mapId)
  ├── MarcadorCamion.tsx                # (Actualizado) Marcador con Camion3D + badge cantidad + AbanicoBolsines
  ├── Camion3D.tsx                      # Nuevo: Camión 3D procedural con @react-three/fiber + fallback SVG <Truck />
  ├── AbanicoBolsines.tsx               # (Existente) Abanico orbital GSAP
  └── PreviewBolsinCard.tsx             # (Existente) Tarjeta flotante de vista previa
```

### 3.2 Estrategia de Marcadores (`GoogleMarkerOverlay` + `OverlayView`)
- En lugar de depender obligatoriamente de un `mapId` pago para `AdvancedMarkerElement`, se usa una clase liviana que extiende `google.maps.OverlayView` (`floatPane`), montando un `div` posicionado por `projection.fromLatLngToDivPixel(latlng)` y renderizado con `createPortal` de React.
- **Ventajas:**
  1. Funciona **con y sin `mapId`**, **con y sin Billing** (incluso con la marca de agua de desarrollo).
  2. Permite elevar `zIndex` al abrir `AbanicoBolsines` en hover/focus para que el abanico nunca quede recortado.
  3. Mantiene intactos `MarcadorCamion`, `AbanicoBolsines`, `PreviewBolsinCard`, GSAP, teclado y target táctil `>= 48x48px` en mobile.
- **Desagrupamiento en mobile (`< 768px`):** Al escuchar `zoom_changed` y superar `zoom >= 8`, los bolsines de una unidad pasan a mostrarse de forma individual exactamente como en la especificación previa.

### 3.3 Diseño del Camión 3D (`Camion3D.tsx`)
Siguiendo el mismo patrón de `BolsinMini3D.tsx` y `VisorBolsin3D.tsx` (`@react-three/fiber` + `isWebGLSupported()`):
- **Geometría procedural liviana (sin `.glb` externos que bloqueen carga):**
  - Chasis oscuro (`--fg` / `#121927`), cabina frontal con parabrisas tintado, caja térmica/logística en tono neutro (`--surface`), ruedas en eje delantero/trasero y un acento superior/lateral con el color de estado (`--lime` en vivo, `--amber` en A3 sin cobertura, `--primary` cuando está seleccionado/resaltado).
- **Orientación y cámara:**
  - Vista isométrica 3/4 (`rotation={[0.32, -0.62, 0]}`) con iluminación ambiental + direccional suave para leer volumen real del camión sobre el mapa.
  - Al hacer hover/selección, una rotación sutil (`y` ± `0.18 rad`) acompaña la elevación del marcador.
- **Rendimiento (múltiples camiones en pantalla):**
  - Canvas compacto (`52x52px` desktop / `56x56px` mobile) con `frameloop="demand"` para consumir **0% GPU en reposo** y evitar agotar contextos WebGL (`dpr={[1, 1.5]}`).
  - Si `isWebGLSupported()` es `false` o se dispara `webglcontextlost`, hace **fallback automático** al ícono `<Truck />` de Lucide sin romper la interfaz.

---

## 4. Coreografía GSAP (Motion Specification)

Se mantiene la arquitectura GSAP existente (`gsap.matchMedia()`) respetando estrictamente `prefers-reduced-motion: reduce`:

1. **Entrada de islas (`SeguimientoWorkspace`):**
   - `autoAlpha: 0 -> 1`, `y: 12 -> 0`, `duration: 0.48s`, `ease: "expo.out"`, `stagger: 0.08s`.
2. **Interacción Camión 3D (`MarcadorCamion`):**
   - Hover/Focus (desktop): elevación `y: 0 -> -6`, `scale: 1 -> 1.08`, `duration: 0.22s`, `ease: "power2.out"`.
   - Atenuación por filtro A2: `opacity: 1 -> 0.15` (`duration: 0.22s`).
   - Despliegue `AbanicoBolsines`: fan-out radial con `stagger: 0.04s`, `ease: "power3.out"`.
3. **Fallback `prefers-reduced-motion: reduce`:**
   - `duration: 0` en todas las transiciones GSAP y `panTo` inmediato sin animación de cámara prolongada.

---

## 5. Accesibilidad (a11y) y Cumplimiento de Heurísticas DSI

Alineado con `2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.pdf` (Heurísticas de Nielsen y Reglas de Oro de Shneiderman):
- **Landmarks y ARIA:** Contenedor del mapa con `role="region"` y `aria-label="Mapa de seguimiento de bolsines en Google Maps"`; botones de zoom (`Acercar`, `Alejar`, `Centrar en la comisión`) con `aria-label` claros y foco visible (`focus-visible:outline-accent`).
- **Visibilidad del estado del sistema (Nielsen #1):** Indicador de modo demo (si `/api/seguimiento` no está en backend), contador de resultados en `aria-live="polite"`, distintivo ámbar A3 en mapa/lista/detalle.
- **Prevención de errores y control (Nielsen #3 y #5 / Shneiderman #6):** Botón **"Limpiar filtros"** en un clic (A2), `Escape` para cerrar detalle/abanico, modal de confirmación explícito para CU 30/31 con opción de cancelar (A5).
- **Operabilidad sin mapa:** Todos los bolsines y acciones son 100% navegables desde teclado en la lista lateral aunque Google Maps esté cargando o falle (E1).
