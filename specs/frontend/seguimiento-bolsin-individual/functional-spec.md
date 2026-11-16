# Especificación Funcional — Seguimiento Individual por Bolsín, 1 Ruta y 1 Remito (CU 36 + CU 30/31)

**Feature ID:** `seguimiento-bolsin-individual`  
**Casos de Uso:** CU 36 (Consultar seguimiento de bolsines) · CU 30/31 (Notificar ubicación de bolsín) · Consistencia CRUD `/bolsines`  
**Actor Principal:** Encargado de Bolsines (EB)  
**Alcance:** **Solo Frontend** + Contrato de API esperado para implementación en Backend  
**Estado:** Listo para revisión e implementación (Gate 1)

---

## 1. Motivación y Reglas de Negocio

Esta especificación actualiza el módulo de Seguimiento y su consistencia con el listado de Bolsines a partir de tres decisiones funcionales:

1. **Un bolsín = un viaje/ruta = un marcador (sin camiones ni agrupación):**
   - El sistema ya no agrupa bolsines en camiones (`UnidadTransporte`) por corredor nacional ni muestra abanicos orbitales o listas "a bordo".
   - Cada bolsín en estado `Enviado` representa su propio viaje individual (`CM Origen → Posición actual → CM Destino`) con su propio marcador de **bolsín** en el mapa.
2. **Limitación a un único remito por bolsín:**
   - Por regla de negocio, cada bolsín transporta **como máximo un (1) remito** asociado (relación `0..1`, nunca múltiples remitos).
   - Toda la UI (detalle en seguimiento, modal de confirmación de correo, datos de demostración y ficha de `/bolsines`) pasa a singular (**"Remito asociado"**).
3. **Consistencia entre `/seguimiento` y `/bolsines`:**
   - Los bolsines visibles en `/seguimiento` deben corresponderse con los bolsines reales en estado `Enviado` de la Comisión Médica (CM) del usuario en `/bolsines`.
   - En `/bolsines`, el usuario debe poder ver rápidamente los bolsines en viaje (`Enviado`) y filtrar por CM de origen sin que queden ocultos en páginas posteriores por orden ascendente.
   - En modo demostración (cuando el backend aún no responde JSON en `/api/auth/cu36/seguimiento`), los datos de respaldo usan códigos reales de CM (`CM-CBA`, `CM-SF`, `CM-BA`, `CM-MZA`, `CM-TUC`) y un único remito por bolsín.

---

## 2. Jerarquía Visual en `/seguimiento`

1. **Fondo a sangre — Mapa interactivo:**
   - Ocupa toda la pantalla detrás de las islas flotantes.
   - **Vista general:** Dibuja la ruta individual suave de cada bolsín en tránsito (`CM Origen → Posición actual → CM Destino`) y un **marcador individual de bolsín** por cada bolsín con ubicación disponible.
   - **Modo Foco (al seleccionar un bolsín):** Resalta únicamente la ruta de ese bolsín diferenciando tramo recorrido (Volt Lime `#d1ff42` si tiene señal en vivo; Ámbar punteado si está sin cobertura) y tramo restante (Elite Blue `#0251b0` punteado), muestra el marcador de ese bolsín y los badges de CM Origen y CM Destino.
2. **Isla lateral (Desktop `>= 768px`) / Barra + Sheet (Mobile `< 768px`):**
   - Muestra la CM de origen del empleado logueado, buscador por N.º de precinto, filtro por CM destino, selector de modelo GPS (`XTR-4500L`, `QX-7A`, `MTR-900`) y la lista de bolsines en tránsito.
   - En los contadores (`SplitFlap` y leyenda inferior del mapa) se contabilizan **bolsines en tránsito** (ya no "unidades" ni "camiones").
3. **Isla de Detalle (`BolsinDetallePanel`) + Visor 3D:**
   - Al seleccionar un bolsín desde el mapa o desde la lista, se abre el panel con `VisorBolsin3D`, datos de origen/destino, coordenadas, última actualización, **el remito único asociado** (o estado vacío si no tiene) y el botón **"Avisar ubicación al gerente"**.
4. **Confirmación CU 30/31 (`ConfirmarNotificacionModal`):**
   - Muestra los datos exactos a enviar por correo al Gerente de la CM destino, incluyendo la ficha del **remito único** (singular).

---

## 3. Flujos de Usuario e Interacciones

### 3.1 Exploración en Mapa y Lista (Desktop y Mobile)

1. El EB entra a `/seguimiento`. El frontend solicita `GET /api/auth/cu36/seguimiento?modeloGps=<MODELO>`.
2. Cada bolsín recibido se renderiza en la lista lateral y, si tiene ubicación (o fallback de ruta), como **un marcador individual de bolsín** en el mapa.
3. **Desktop (`>= 768px`):**
   - **Hover / Focus** sobre un marcador de bolsín: eleva el marcador, resalta su fila en la lista lateral y muestra la tarjeta flotante `PreviewBolsinCard` (N.º bolsín, precinto, destino, estado en vivo / sin cobertura).
   - **Click** sobre un marcador o fila de la lista: entra en **Modo Foco**, encuadra la cámara en la ruta completa del bolsín y abre `BolsinDetallePanel`.
4. **Mobile (`< 768px`):**
   - **Tap** sobre cualquier marcador de bolsín (área táctil mínima `48x48px`): selecciona directamente ese bolsín y abre la hoja inferior (`BottomSheet`) con el detalle. Ya no existe el paso intermedio de "Bolsines a bordo".
5. **Filtros en vivo:**
   - Al buscar por precinto o filtrar por CM destino, los marcadores que no coinciden se atenúan (`opacity: 0.15`) y los coincidentes permanecen resaltados.

### 3.2 Cambio de Modelo GPS

1. El EB cambia el selector de modelo GPS (`XTR-4500L` | `QX-7A` | `MTR-900`).
2. El frontend vuelve a consultar `GET /api/auth/cu36/seguimiento?modeloGps=<MODELO>`, enviando el parámetro al backend para que consulte el adaptador correspondiente.

### 3.3 Consistencia en `/bolsines`

1. Al ingresar a `/bolsines`, el EB puede:
   - Buscar por número de bolsín, precinto o CM.
   - Filtrar por **Estado** (ej. `Enviado`) y por **CM de origen**.
   - Ver los bolsines ordenados de forma que los recientes / activos (`id` descendente o `Enviado` primero) aparezcan desde la primera página.
   - Visualizar el **remito único** asociado en la fila y en `/bolsines/[id]`.

---

## 4. Casos Borde y Estados

- **Sin bolsines en tránsito:** El mapa se centra en la CM origen del empleado y la lista muestra *"Sin bolsines en viaje"*.
- **Bolsín sin señal GPS (`ubicacion: null` o `estadoCobertura: "sin_cobertura"`):** Aparece en la lista con badge ámbar *"Sin cobertura"* y en el mapa en su última posición conocida (o sin marcador si `ubicacion` es `null`), sin romper el resto del lote.
- **Bolsín sin remito cargado:** En detalle y en el modal de notificación se muestra *"Sin remito asociado"* sin errores.
- **Modo Demo activo:** Si `/api/auth/cu36/seguimiento` devuelve `404`/`501` o HTML, se muestra un indicador discreto de modo demostración usando códigos reales de CM y 1 remito por bolsín.
