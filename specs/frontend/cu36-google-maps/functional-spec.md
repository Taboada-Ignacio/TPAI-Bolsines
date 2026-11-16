# Especificación Funcional — Migración a Google Maps en Seguimiento de Bolsines (CU 36 + RNF 7)

**Feature ID:** `cu36-google-maps`  
**Casos de Uso y Requerimientos:** CU 36 (Consultar seguimiento de bolsines) · CU 30/31 (Notificar ubicación de bolsín) · RNF 7 (Visualización de bolsines en Google Maps)  
**Actor Principal:** Encargado de Bolsines (EB) · **Actor Secundario:** Servidor Google Maps  
**Estado:** Gate 1 — Especificación Funcional (Reemplazo de MapLibre/planeta 3D por Google Maps)

---

## 1. Persona Estética y Tono

- **Arquetipo visual:** Se conserva la estética **Rumbo / Costado** sobre **islas flotantes sin profundidad** (`1px` de borde, radios amplios, sin sombras proyectadas) apoyadas sobre el **mapa de Google Maps a pantalla completa (*bleed*)**, reemplazando la proyección de planeta/globo 3D por la cartografía oficial de **Google Maps**.
- **Personalidad:** Tablero operativo de logística sanitaria con precisión instrumental. En lugar de corredores fijos genéricos, el mapa muestra las **rutas reales de cada envío de bolsín** (`CM Origen → Posición actual → CM Destino`) con sus camiones en 3D, priorizando la claridad visual (*diseño estético y minimalista*, Heurística 8 de Nielsen).
- **Marca de agua y modo sin facturación (Billing):** Si el proyecto se ejecuta en entorno académico o sin clave con facturación activa en Google Cloud, el mapa muestra de manera transparente la **marca de agua oficial de Google (*"For development purposes only"*)** y el aviso estándar de desarrollo sobre las teselas, manteniendo **100% operables** los marcadores de camiones, el abanico de bolsines, las rutas, el zoom, el filtrado y la notificación al gerente (CU 30/31).
- **Temas:** Soporte para **tema claro y tema oscuro** sincronizado con la preferencia del sistema/aplicación, ajustando el esquema de color del mapa de Google Maps y manteniendo intacto el contraste de las rutas y los marcadores.
- **Voz y microcopy:** **Español rioplatense** directo, claro y sin jerga técnica (ej. *"Sin bolsines en viaje"*, *"Avisar ubicación al gerente"*, *"Última posición conocida"*).

---

## 2. Jerarquía Visual y Patrón de Escaneo

1. **Primer plano (fondo a sangre — Google Maps):** El lienzo de **Google Maps** ocupa toda la superficie detrás de las islas de interfaz, centrado inicialmente en los envíos activos desde la Comisión Médica (CM) de origen, mostrando **cada ruta de envío (`CM Origen → Posición → CM Destino`)** en trazo sutil junto con sus **camiones 3D**.
2. **Segundo plano (isla de control y listado):** La isla flotante lateral (en escritorio/tablet) o barra compacta superior + hoja desplegable (en celular) conserva exactamente la CM de origen, el buscador por **N.º de precinto**, el filtro por **CM destino**, el selector de **modelo GPS** (`XTR-4500L`, `QX-7A`, `MTR-900`) y la lista sincronizada de bolsines en tránsito.
3. **Tercer plano (interacción Camión → Foco aislado de ruta y detalle):**
   - **En escritorio (`>= 768px`):** Al pasar el cursor (**hover**) sobre un camión sobre Google Maps, el marcador 3D se eleva y despliega el **abanico orbital** con los bolsines a bordo; al hacer **hover** sobre un bolsín, aparece la tarjeta flotante de vista previa sincronizada con la lista. Al hacer **click** en un camión/bolsín (desde el mapa o la lista), **se ocultan los demás envíos/camiones** para despejar el mapa, **se resalta únicamente el camino completo de ese bolsín** (`CM Origen → Posición → CM Destino`), la cámara de Google Maps encuadra el recorrido y se abre el panel de detalle con el **visor 3D del bolsín** y el botón **"Avisar ubicación al gerente"**.
   - **En celular (`< 768px`):** Área táctil mínima de `48x48px`. Al tocar (**tap**) un camión con **1 bolsín**, aísla su ruta y abre directo el detalle; si lleva **N bolsines**, abre la hoja inferior *"Bolsines a bordo"* y al elegir uno aísla su recorrido y abre el detalle. Al cerrar el detalle (`X` o `Esc`), reaparecen todos los camiones y rutas activas.
4. **Cuarto plano (confirmación CU 30/31):** Diálogo modal enfocado con los datos obligatorios antes de enviar el correo al Gerente de la Comisión Médica (GCM) destino.

---

## 3. Flujos de Usuario e Interacciones

### 3.1 Flujo Principal (Escenario Feliz — CU 36 sobre Google Maps)

1. El EB ingresa a **Seguimiento**. El sistema carga la vista cartográfica de **Google Maps**, identifica la **CM de origen** del empleado logueado y solicita la ubicación de los bolsines `Enviado` al GPS Tracker seleccionado.
2. Sobre el mapa de Google Maps se dibujan las **rutas individuales de cada envío** (`CM Origen → Posición actual → CM Destino`) en tono suave y se posicionan los **camiones 3D** correspondientes. En la esquina inferior derecha se mantienen los controles de zoom/recentrado y la atribución oficial de Google.
3. El EB filtra por **N.º de precinto** o **CM destino**, o cambia el **modelo GPS**: los camiones/rutas sin coincidencias se atenúan visualmente (`15%`) sobre Google Maps mientras los coincidentes permanecen resaltados.
4. El EB selecciona un bolsín desde un camión en Google Maps (click en el camión o en su abanico en escritorio, o desde la hoja en celular) o desde la lista lateral:
   - **Modo Foco:** Se ocultan del mapa todos los demás camiones y rutas de otros envíos para que el EB se concentre en un solo recorrido sin ruido visual.
   - Se **resalta el camino completo del bolsín seleccionado** (`CM Origen → Ubicación actual → CM Destino`, diferenciando el tramo recorrido del tramo pendiente).
   - La cámara de Google Maps encuadra el recorrido o centra la posición del bolsín y se abre el **panel de detalle** con el visor 3D del bolsín, precinto, coordenadas, última actualización y remitos.
   - Al cerrar el detalle (`X` o `Esc`), el mapa vuelve a mostrar todos los camiones y rutas activas.
5. El EB presiona **"Avisar ubicación al gerente"**, revisa el resumen en el diálogo de confirmación (CU 30/31) y confirma el envío del correo al GCM destino.

### 3.2 Flujos Alternativos y Casos Borde

- **A1 — No hay bolsines en estado `Enviado`:**  
  Google Maps se muestra centrado en la CM de origen sin camiones en tránsito y con las rutas base visibles; la isla lateral muestra el estado vacío intencional con acción para reintentar o volver al inicio.
- **A2 — El filtro por precinto o CM destino no arroja coincidencias:**  
  Todos los camiones sobre Google Maps quedan atenuados al `15%` y la lista ofrece **"Limpiar filtros"** para restaurar la vista completa en un clic.
- **A3 — El GPS Tracker no responde o está fuera de cobertura:**  
  Los marcadores afectados y su tramo de ruta se distinguen en **ámbar** (línea punteada en el mapa e insignia *"Sin cobertura · Última posición"* en abanico, lista y detalle).
- **A4 — El EB cancela la ejecución del caso de uso:**  
  El EB puede regresar al tablero principal (`/inicio`) desde la navegación del shell sin efectos secundarios.
- **A5 — El EB cancela el envío de correo:**  
  Al cerrar o cancelar el modal de notificación, se conserva la vista actual de Google Maps y el bolsín seleccionado.
- **E1 — Google Maps en modo desarrollo / sin clave configurada o sin billing:**  
  - Si se provee clave de Google Maps sin billing activo, se renderiza el mapa de Google Maps normalmente mostrando la **marca de agua oficial de Google (*"For development purposes only"*)** y todas las interacciones de seguimiento siguen funcionando sin bloqueos.
  - Si falla la carga del script de Google Maps (ej. sin conexión a internet o clave ausente/inválida que impide inicializar el mapa), se muestra un estado de respaldo claro informando que no se pudo conectar con Google Maps, manteniendo la **lista lateral y el detalle del bolsín 100% operables** para consultar coordenadas y notificar al gerente.

---

## 4. Catálogo Completo de Estados de Interfaz

| Estado | Disposición y comportamiento esperado |
| --- | --- |
| **Inicial / Entrada** | El mapa de Google Maps aparece a sangre centrado en Argentina / CM origen (sin proyección esférica de planeta) mientras las islas flotantes se revelan de forma escalonada. |
| **Cargando / Esqueleto** | Mientras se inicializa el SDK de Google Maps o se consulta la telemetría, el fondo muestra el lienzo neutro del tema activo con un indicador discreto de carga y la lista muestra filas esqueleto. |
| **Poblado (con o sin marca de agua Google)** | Google Maps activo con controles de zoom/recentrado, atribución de Google (y marca de agua oficial si no hay billing), rutas individuales por envío en trazo suave, camiones 3D y lista sincronizada. |
| **Foco en envío seleccionado** | Al hacer click en un camión/bolsín, los demás camiones y rutas se ocultan temporalmente del mapa; queda visible únicamente el camión seleccionado con su camino completo (`CM Origen → Posición → CM Destino`) resaltado. Al cerrar el detalle vuelve la vista general. |
| **Hover Camión / Abanico (Desktop)** | El marcador sobre Google Maps eleva su prioridad visual (`z-index`) y despliega el abanico orbital sin quedar recortado por el contenedor del mapa; el hover en el abanico resalta la fila en la lista. |
| **Tap Camión (Mobile)** | Toque con área `>= 48x48px`: abre detalle directo (1 bolsín) o *"Bolsines a bordo"* (N bolsines); al hacer zoom `>= 7.5` en Google Maps, los camiones con múltiples bolsines se desagrupan. |
| **Vacío A1 (Sin enviados)** | Mapa centrado en la CM origen sin camiones; isla lateral con mensaje *"No hay bolsines en viaje desde [CM Origen]"* y botón de actualización. |
| **Vacío A2 (Sin coincidencias)** | Camiones atenuados al `15%`; lista con mensaje de búsqueda sin resultados y botón **"Limpiar filtros"**. |
| **Advertencia A3 (Sin cobertura GPS)** | Distintivo ámbar en camión, abanico, lista, detalle y ruta punteada sobre Google Maps. |
| **Error de carga de Google Maps (E1)** | Si el script de Google Maps no puede cargarse (sin red o clave faltante), se muestra un estado informativo claro con botón **"Reintentar mapa"**, sin bloquear la lista lateral, los filtros, el detalle ni la notificación al GCM. |
| **Estados interactivos** | Foco visible por teclado en controles de zoom/recentrado, marcadores y chips del abanico; sincronización bidireccional de selección y hover entre Google Maps y la lista. |

---

## 5. Criterios de Aceptación Funcional

- El mapa de `/seguimiento` utiliza **Google Maps** (cumpliendo RNF 7 de la ERS), eliminando el globo/planeta 3D de MapLibre.
- En ausencia de facturación en Google Cloud, el mapa funciona mostrando la **marca de agua oficial de Google** sin romper la interacción ni ocultar marcadores, abanico o rutas.
- Se conservan íntegros todos los flujos de **CU 36** (CM origen, filtros por precinto y CM destino, selector de modelo GPS, flujos alternativos A1–A5) y **CU 30/31** (confirmación y envío al GCM destino).
- La interacción **Camión → Abanico → Bolsín** en escritorio y **Tap → Hoja "Bolsines a bordo"** en celular funcionan exactamente igual sobre los marcadores de Google Maps.
- Si falla la carga externa de Google Maps, el Encargado de Bolsines puede seguir operando mediante la lista y el panel de detalle.
