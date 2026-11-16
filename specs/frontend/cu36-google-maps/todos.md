# Plan de Ejecución — Migración a Google Maps, Camión 3D y Modo Foco (CU 36 + RNF 7)

**Feature ID:** `cu36-google-maps`  
**Rama:** `feature/frontend`  
**Referencias:** `functional-spec.md`, `technical-spec.md`  
**Estado:** Gate 3 — Plan de Tareas

---

## Capa 1: Dependencias, Tokens y Utilidades Base

- **`[F-01]` Instalar `@googlemaps/js-api-loader` y tipos de Google Maps**
  - **Archivos:** `TPAI-Bolsines/package.json`, `TPAI-Bolsines/package-lock.json`
  - **Depends on:** Ninguna
  - **Parallelizable:** `true`
  - **Criterio de salida:** `@googlemaps/js-api-loader` y `@types/google.maps` instalados y resolviendo en TypeScript sin errores.

- **`[F-02]` Crear estilos claro/oscuro y helper de rutas por envío para Google Maps**
  - **Archivos:** `TPAI-Bolsines/src/lib/seguimiento/google-maps-styles.ts`, `TPAI-Bolsines/src/lib/seguimiento/rutas-envio.ts`
  - **Depends on:** `[F-01]`
  - **Parallelizable:** `true`
  - **Criterio de salida:** Estilos minimalistas claro/oscuro alineados con `--canvas` y `--surface`, más función pura que calcula/resuelve los puntos de ruta (`CM Origen → Posición actual → CM Destino`) con soporte de `DirectionsService` y fallback geodésico sin billing.

---

## Capa 2: Camión 3D y Puente de Marcadores

- **`[F-03]` Implementar componente `Camion3D.tsx` con `@react-three/fiber`**
  - **Archivos:** `TPAI-Bolsines/src/components/seguimiento/map/Camion3D.tsx`
  - **Depends on:** Ninguna
  - **Parallelizable:** `true`
  - **Criterio de salida:** Camión 3D procedural (chasis, cabina, caja logística, ruedas, acento de estado `--lime` / `--amber` / `--primary`) con `frameloop="demand"`, `dpr={[1, 1.5]}` y fallback automático a `<Truck />` usando `isWebGLSupported()`.

- **`[F-04]` Actualizar `MarcadorCamion.tsx` para usar `Camion3D` y soportar Modo Foco**
  - **Archivos:** `TPAI-Bolsines/src/components/seguimiento/map/MarcadorCamion.tsx`
  - **Depends on:** `[F-03]`
  - **Parallelizable:** `false`
  - **Criterio de salida:** El marcador renderiza `Camion3D` conservando `AbanicoBolsines`, `PreviewBolsinCard`, hover/focus desktop, tap `>= 48x48px` mobile y elevación GSAP.

- **`[F-05]` Crear puente `GoogleMarkerOverlay.tsx` sobre `google.maps.OverlayView`**
  - **Archivos:** `TPAI-Bolsines/src/components/seguimiento/map/GoogleMarkerOverlay.tsx`
  - **Depends on:** `[F-01]`
  - **Parallelizable:** `true`
  - **Criterio de salida:** Renderiza portales React (`createPortal`) en `floatPane` con soporte de `zIndex` dinámico, funcionando con o sin `mapId` / Billing.

---

## Capa 3: Mapa Google Maps + Rutas por Envío + Modo Foco

- **`[F-06]` Implementar `MapaGoogleSeguimiento.tsx` y conectar `MapaSeguimiento.tsx`**
  - **Archivos:** `TPAI-Bolsines/src/components/seguimiento/map/MapaGoogleSeguimiento.tsx`, `TPAI-Bolsines/src/components/seguimiento/map/MapaSeguimiento.tsx`
  - **Depends on:** `[F-02]`, `[F-04]`, `[F-05]`
  - **Parallelizable:** `false`
  - **Criterio de salida:**
    - Carga segura en cliente (`dynamic(..., { ssr: false })`) sin proyección planeta 3D.
    - Muestra la marca de agua oficial de Google si no hay billing, y fallback operable (E1) si falla la red/script.
    - Dibuja las rutas individuales de cada envío (`CM Origen → Posición → CM Destino`).
    - Al seleccionar un camión/bolsín (`seleccionadoNro !== null`), **oculta los demás camiones y rutas** y **resalta únicamente el camino completo del bolsín seleccionado** (tramo recorrido en `--lime` o `--amber` punteado A3 + tramo restante en `--primary` punteado).
    - Sincroniza tema claro/oscuro en vivo y desagrupa en mobile a `zoom >= 8`.

---

## Capa 4: Pulido, Accesibilidad y Verificación

- **`[F-07]` Auditoría de a11y, `prefers-reduced-motion` y tests unitarios/build**
  - **Archivos:** `TPAI-Bolsines/tests/navigation.test.ts` (o test específico de rutas/seguimiento), `TPAI-Bolsines/src/components/seguimiento/map/MapaGoogleSeguimiento.tsx`
  - **Depends on:** `[F-06]`
  - **Parallelizable:** `false`
  - **Criterio de salida:**
    - Verificación de `aria-label`, foco visible por teclado y `gsap.matchMedia()` para `prefers-reduced-motion: reduce`.
    - `npm run typecheck`, `npm test` y `npm run build` pasando en `TPAI-Bolsines`.
