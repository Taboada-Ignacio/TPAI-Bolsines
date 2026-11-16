# Functional Spec — Seguimiento de Bolsines en Mapa (CU 36 + CU 30/31)

> **Feature ID:** `cu36-seguimiento-bolsines`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 1 (Especificación Funcional y Dirección Estética)  
> **Usuario Principal:** Marcelo Gómez (31 años), Encargado de Despacho y Logística de Bolsines (terminal de escritorio y tablet en depósito).

---

## 1. Aesthetic Persona & Tone

- **Arquetipo Visual:** *Industrial Editorial & Swiss Logistics Minimalism* — inspirado en tableros reales de despacho, papel técnico frío (*Blue Mist*) y teclados mecánicos táctiles.
- **Tono:** Directo, operativo, de alta certeza y cero relleno decorativo. Cada elemento en pantalla responde una pregunta operativa real del depósito: *"¿Qué bolsines salieron de mi Comisión Médica, dónde están ahora y cómo aviso al gerente de destino?"*
- **Sensación Física:**
  - Fondo *Blue Mist* tipo papel técnico frío (nunca blanco clínico), con textura sutil de grano analógico.
  - Contraste marcado entre tinta oscura para datos críticos, **Elite Blue** para confianza/rutas/notificaciones y **Volt Lime** para movimiento activo en tránsito.
  - Botones táctiles 3D que devuelven sensación física al clic o toque en tablet.
  - Paneles flotantes translúcidos (*frosted glass*) que dejan ver el mapa detrás sin perder legibilidad.
  - Cabecera de ruta y código con tablero mecánico tipo aeropuerto (*split-flap*) que refuerza el estado en tiempo real.

---

## 2. Visual Hierarchy & Scanning Pattern

El ojo del Encargado de Bolsines recorre la pantalla en un patrón en **"F" invertida / Maestro-Detalle**:

1. **Primer impacto (Cabecera Global):**
   - Identificación inmediata de la **Comisión Médica de Origen** del usuario logueado (ej. *CM Córdoba*).
   - Resumen numérico de bolsines actualmente en estado `Enviado` y botón de actualización manual de telemetría.
2. **Segundo impacto (Panel Izquierdo de Control y Lista):**
   - Buscador prioritario por **Número de Precinto** (con foco automático para escribir o escanear al instante) + selector de **Comisión Médica Destino** + acción rápida para limpiar filtros.
   - Lista ordenada de bolsines en tránsito, donde cada tarjeta muestra únicamente los 4 datos esenciales: número de bolsín, número de precinto, CM destino y estado de señal GPS.
3. **Tercer impacto (Escenario Principal — Mapa + Panel Lateral de Detalle):**
   - El **Mapa Interactivo** ocupa el área protagonista con marcadores diferenciados por estado de telemetría.
   - Al seleccionar un bolsín (en la lista o en el mapa), se despliega un **panel lateral de detalle** sin tapar la lista, mostrando la ruta (`ORIGEN → DESTINO`) en tablero mecánico, coordenadas, fecha/hora de última actualización, peso, lista de remitos y el botón principal para **Notificar ubicación al Gerente de Comisión Médica (GCM) destino**.

---

## 3. User Journeys & Interactions

### Flujo Principal (CU 36 + CU 30/31)
1. **Ingreso (`/login`):** El Encargado inicia sesión con sus credenciales y accede directamente a su vista de seguimiento ya filtrada por su Comisión Médica de origen.
2. **Exploración Inicial:** El sistema carga automáticamente los bolsines en estado `Enviado` de su CM, consulta sus ubicaciones normalizadas al servicio GPS y los ubica en el mapa.
3. **Filtrado Rápido:** Mientras un transportista o supervisor consulta, el Encargado escribe el número de precinto o elige una CM destino; la lista y los marcadores del mapa se filtran al instante.
4. **Inspección Maestro-Detalle:** El Encargado hace clic en un bolsín (o navega rápidamente entre ítems con atajos de teclado `j` / `k`). El mapa centra la posición y el panel lateral muestra el detalle completo sin perder la posición de la lista.
5. **Notificación al GCM Destino (CU 30/31):**
   - El Encargado presiona **Notificar ubicación al GCM**.
   - Se abre un diálogo de confirmación explícita mostrando: email del GCM destino, número de bolsín, coordenadas y marca temporal de última actualización.
   - Al confirmar, el sistema envía la notificación y muestra una confirmación visual clara. Al cancelar, retorna sin efectos secundarios.

---

## 4. Complete UI State Catalog

| Estado | Comportamiento Esperado en Interfaz |
|---|---|
| **Initial / Entrance** | Entrada limpia y ordenada: cabecera visible de inmediato, lista de bolsines entra de forma secuencial rápida sin bloquear la interacción, y el mapa se encuadra automáticamente en los marcadores activos. |
| **Populated** | Lista lateral con tarjetas compactas, mapa con marcadores interactivos y panel lateral disponible al seleccionar cualquier bolsín. |
| **Loading / Skeleton** | Esqueletos sobrios en las tarjetas de la lista y un indicador claro *"Consultando telemetría GPS..."* sin congelar los controles de filtro ni mostrar pantallas en blanco. |
| **Empty — Flujo A1 (Sin bolsines enviados)** | Estado vacío diseñado con propósito: mensaje claro indicando que no hay bolsines despachados en tránsito para la CM actual, manteniendo visible la CM de origen y botón de recarga. |
| **Empty — Flujo A2 (Filtro sin coincidencias)** | Aviso dentro del panel de lista (*"No hay bolsines que coincidan con el precinto o destino seleccionado"*) acompañado de un botón prominente para **Restablecer filtros** en un clic. |
| **Error / Edge — Flujo A3 (GPS sin respuesta)** | El mapa y el resto de los bolsines siguen funcionando normalmente. El bolsín afectado muestra una insignia ámbar explícita (*"GPS sin cobertura — última posición conocida"*) con su última marca temporal válida. |
| **Error de Notificación / Red** | Mensaje en lenguaje natural del dominio (nunca códigos técnicos crudos) indicando qué falló y permitiendo reintentar sin perder la selección actual. |
| **Interactive (Hover / Focus / Active)** | Hover sutil con elevación mínima en tarjetas y marcadores; anillo de foco visible de alto contraste para navegación por teclado; botones 3D con hundimiento táctil inmediato al presionar. |
