# Functional Spec — Alineación Completa del Frontend al CU 36 (`PPAI-CU-36`)

**Feature ID:** `cu36-alineacion-backend`  
**Actor Principal:** Encargado de Bolsines (EB)  
**Restricción absoluta:** Cambios **exclusivamente de frontend** (prohibido modificar rutas API, servicios de dominio, adaptadores GPS, repositorios o esquemas del backend).

---

## 1. Objetivo

Alinear la vista `/seguimiento` y sus componentes a cada paso del flujo principal (pasos 1–11) y flujos alternativos (`A1`–`A5`) definidos en `docs/cerebro/nodos/PPAI-CU-36.md`, consumiendo sin fricciones el backend real (`GET /api/auth/cu36/seguimiento` y `POST /api/auth/cu31/notificar-ubicacion`).

---

## 2. Requisitos Funcionales (Paso a Paso CU 36)

1. **Paso 1 — Guardia de Rol (`Encargado de Bolsines`):**
   - Solo el rol `"Encargado de Bolsines"` puede operar el seguimiento.
   - Si ingresa un usuario con otro rol (por ejemplo `"Parametrizador del sistema"`), `/seguimiento` debe mostrar una pantalla de **Acceso restringido** clara en voseo rioplatense con botón para volver a `/inicio` (y `navigation.ts` debe reflejar `roles: ["Encargado de Bolsines"]` o restringir su visibilidad).
2. **Paso 2 — CM Origen garantizada desde la sesión:**
   - La cabecera de la isla debe mostrar siempre la Comisión Médica real del usuario logueado (código, nombre y dirección), inyectada desde el Server Component (`getPerfilActual()`), incluso si falla la consulta al GPS (`503`) o no hay bolsines.
3. **Pasos 3–5 & Flujo A3 — Soporte real de `sinUbicacion`:**
   - `seguimiento-cliente.ts` debe conservar el campo `sinUbicacion` devuelto por `GET /api/auth/cu36/seguimiento`.
   - Si `sinUbicacion > 0`, mostrar un aviso visual claro (**A3**: bolsines enviados sin respuesta GPS actual).
   - Diferenciar **A1** (`puntos.length === 0 && sinUbicacion === 0`: *"No hay bolsines enviados para tu comisión"*) de **A3 total** (`puntos.length === 0 && sinUbicacion > 0`: *"Hay N bolsín(es) enviado(s), pero ninguno informó ubicación GPS"*).
   - El selector de modelo GPS en `SeguimientoFiltrosBar` debe reflejar que la consulta actual usa `XTR-4500L` (sin disparar recargas engañosas que devuelven el mismo resultado, o marcando `QX-7A` / `MTR-900` como no disponibles en el backend actual).
4. **Paso 6 — Precinto nulo y configuración de Google Maps:**
   - Si `precinto` es `null`, no inventar `"B-101"` como precinto: mostrar `"Sin precinto"` en fila y detalle, y permitir buscar igual sin romper el filtro.
   - Documentar `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=` en `.env.example`.
5. **Pasos 7–11 — Notificación CU 30/31 y Detalle:**
   - En `ConfirmarNotificacionModal`: si falta `cmDestino.emailGcm` o `ubicacion`, deshabilitar **"Confirmar y enviar"** y mostrar alerta clara indicando el dato faltante (sin enviar a un correo ficticio).
   - En `BolsinDetallePanel`: ocultar el bloque de remitos cuando `bolsin.remitos.length === 0` (el endpoint CU 36 no devuelve remitos).
6. **Flujo A4 — Cancelar ejecución del CU:**
   - Agregar un botón/enlace compacto **"Volver al inicio"** (`/inicio`) en `PageActions` o cabecera de la isla para salir explícitamente del caso de uso.
