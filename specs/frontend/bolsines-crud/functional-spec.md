# Functional Spec — Bolsines (Listado CRUD & Detalle con Historial)

**Feature ID:** `bolsines-crud`  
**Rol principal:** Encargado de Despacho y Logística de Bolsines (y Parametrizador / Operador de CM)  
**Contexto:** Gestión integral de los 35+ bolsines del sistema (`/bolsines` y `/bolsines/[id]`) conectada a la API real y base de datos en PostgreSQL, dentro del App Shell en islas con estética *Rumbo / Costado*, soportando tema claro y tema oscuro.

---

## 1. Aesthetic Persona & Tone

- **Arquetipo visual:** *Tablero Operativo Ferroviario / Rumbo en Islas* — precisión técnica, tipografía de alto contraste (`Space Grotesk` + `Plus Jakarta Sans` + `Instrument Serif` + `JetBrains Mono`), superficies planas separadas por bordes finos de `1px` sin sombras pesadas, tactilidad 3D en acciones principales (*Keycaps*) y señalización de estado en Lima Volt, Azul Élite y Ámbar.
- **Voz y tono:** Español rioplatense directo, operativo y sin jerga técnica (*"Nuevo bolsín"*, *"Buscar por N.º de bolsín, precinto o comisión…"*, *"Sin cambios registrados todavía"*, nunca errores crudos de servidor ni códigos HTTP).
- **Personalidad responsiva y densidad controlada:**
  - **En `/bolsines` (escritorio):** los bolsines se leen como un tablero continuo de partidas: identificador mecánico en tablero (`SplitFlap`) a la izquierda, ruta operativa (`CM Origen → CM Destino`), precinto/peso/fecha al centro, badge de estado actual y acciones discretas (ver detalle, editar, eliminar) a la derecha. Los formularios y confirmaciones emergen desde el costado derecho (*SideSheet*) manteniendo el listado visible.
  - **En `/bolsines` (móvil):** cada bolsín adopta forma de **tarjeta táctil** con jerarquía clara (N.º de bolsín y estado arriba, ruta Origen → Destino y datos de precinto/peso/fecha debajo), y los formularios/confirmaciones suben desde abajo (*BottomSheet*) con gesto de arrastre para cerrar.
  - **En `/bolsines/[id]` (detalle completo):** vista dedicada de ficha operativa + **línea de tiempo cronológica de cambios de estado**, diseñada para responder en 1 segundo qué es el bolsín, dónde está, quién lo despachó o recibió en cada etapa y cuánto tiempo permaneció en cada estado, con acceso directo a editar sus datos o darlo de baja sin volver atrás.

---

## 2. Visual Hierarchy & Scanning Pattern

### 2.1 Listado `/bolsines`
1. **Primer impacto (Encabezado y acción principal):** El ojo aterriza en el título *"Bolsines."* acompañado del rótulo superior *"Operación · Despacho y custodia"* y el botón primario **"Nuevo bolsín"** de bordes completamente redondeados tipo píldora.
2. **Segundo impacto (Controles de búsqueda y filtro):** Debajo del título, el buscador redondeado (por número de bolsín, precinto o comisión médica), un selector/filtro rápido por estado actual y el contador de resultados (`N bolsines · Página X de Y`) permiten acotar al instante los 35+ registros.
3. **Tercer impacto (Tablero / Tarjetas + Paginado):**
   - Cada bolsín se escanea de izquierda a derecha: **N.º de bolsín en tablero mecánico** → **ruta Origen → Destino y precinto/peso/fecha** → **badge de estado actual** → **acciones (ver detalle, editar, eliminar)**.
   - Toda la fila/tarjeta invita a entrar al detalle `/bolsines/[id]`, manteniendo botones explícitos e independientes para editar o eliminar.
   - Al pie, la barra de **paginado** cierra el recorrido con navegación anterior/siguiente, números de página y rango visible (ej. `1–10 de 38`).

### 2.2 Detalle `/bolsines/[id]`
1. **Primer impacto (Cabecera de identidad del bolsín):** Botón de regreso a `/bolsines`, rótulo con fecha de despacho y estado actual destacado, título gigante con el número de bolsín y acciones de cabecera (**Editar** y **Eliminar**).
2. **Segundo impacto (Ficha operativa en grilla):** Resumen estructurado en bloques de alto contraste con los datos clave del bolsín: **Comisión de origen**, **Comisión de destino**, **N.º de precinto**, **Peso (kg)**, **Fecha** y **Estado actual**.
3. **Tercer impacto (Historial de cambios de estado):** Línea de tiempo vertical ordenada cronológicamente desde el alta hasta el estado vigente, diferenciando claramente el tramo **actual** (abierto, destacado en acento/lima) de los tramos **cerrados** (con fecha/hora de inicio, fecha/hora de cierre, duración calculada y nombre completo del empleado responsable).

---

## 3. User Journeys & Interactions

### 3.1 Explorar, buscar y paginar bolsines (`/bolsines`)
1. El usuario accede a `/bolsines` desde el rail lateral en escritorio, el menú **"Más"** en la píldora móvil o el tablero de Inicio.
2. El sistema carga los bolsines reales desde el servidor y muestra la página 1 ordenada de forma consistente junto con el total real (35+ registros).
3. El usuario escribe en el buscador redondeado (por número de bolsín, precinto o código/nombre de CM) o elige un filtro de estado actual: la lista se filtra en vivo y vuelve automáticamente a la página 1.
4. Puede limpiar la búsqueda o el filtro con un toque y navegar entre páginas desde el paginado al pie.

### 3.2 Dar de alta un nuevo bolsín (`POST`)
1. El usuario presiona **"Nuevo bolsín"** (o el botón `+` en la barra superior de acciones).
2. Se abre el Sheet adaptativo (*SideSheet* en escritorio / *BottomSheet* en móvil) en modo **Alta**.
3. Completa los campos requeridos por el alta:
   - **Fecha** (precargada con fecha/hora actual editable)
   - **N.º de bolsín**
   - **N.º de precinto**
   - **Peso (kg)**
   - **Comisión médica de origen**
   - **Comisión médica de destino**
   - **Estado inicial** (solo estados válidos para bolsines)
   - **Responsable del cambio de estado** (empleado que registra el alta)
4. Al confirmar, se envía la creación al servidor. Si es exitosa, el panel se cierra, el listado se actualiza con el registro real y el usuario recibe confirmación visual.

### 3.3 Editar un bolsín existente (`PUT`) — Diferencia explícita frente al Alta
1. El usuario presiona **Editar** desde una fila/tarjeta en `/bolsines` o desde la cabecera de `/bolsines/[id]`.
2. Se abre el mismo Sheet adaptativo precargado con los datos del bolsín.
3. En modo **Edición**, el formulario muestra únicamente los campos editables (`Fecha`, `N.º de bolsín`, `N.º de precinto`, `Peso`, `CM Origen`, `CM Destino`) y omite **Estado inicial** y **Responsable**, mostrando en cambio una nota breve indicando que el estado se gestiona mediante su historial de cambios.
4. Al guardar, se persiste la modificación en el servidor y tanto el listado como la vista de detalle (si está abierta) reflejan los datos actualizados sin perder el contexto de página o filtro.

### 3.4 Dar de baja un bolsín (`DELETE`)
1. El usuario presiona **Eliminar** desde una fila/tarjeta en `/bolsines` o desde `/bolsines/[id]`.
2. Se abre un Sheet de confirmación indicando el número de bolsín, precinto y ruta (`Origen → Destino`) que se va a eliminar de forma permanente.
3. Al confirmar:
   - Desde `/bolsines`: se elimina del servidor, se refresca el listado y, si era el último ítem de la última página, retrocede automáticamente a la página anterior válida.
   - Desde `/bolsines/[id]`: se elimina del servidor y redirige al usuario de regreso a `/bolsines`.

### 3.5 Consultar el detalle e historial de un bolsín (`/bolsines/[id]`)
1. El usuario hace clic/tap en un bolsín del listado (o accede directamente por URL `/bolsines/[id]`).
2. Ve la ficha completa del bolsín (número en tablero mecánico, precinto, peso, fecha, origen, destino, estado actual) y la línea de tiempo completa de `cambiosEstado`.
3. Cada hito del historial muestra:
   - **Estado** (badge semántico según estado: ej. *En preparación*, *Enviado*, *Recibido*, etc.).
   - **Vigencia**: marca visual de *"Estado actual"* cuando no tiene fecha de fin, o rango `inicio → fin` más duración cuando ya cerró.
   - **Responsable**: nombre y apellido del empleado que registró ese cambio.
4. Desde la misma página puede abrir el Sheet para **Editar** los datos del bolsín o **Eliminarlo**.

---

## 4. Requerimientos de Componentes y Navegación

- **Integración en la navegación global:** Agregar **Bolsines** como destino de primer nivel en el sistema de navegación (visible en la isla lateral de escritorio, en el tablero de Inicio y accesible desde **"Más"** en móvil al superar los 3 accesos directos de la píldora), manteniendo el estado activo tanto en `/bolsines` como en `/bolsines/[id]`.
- **Reutilización de `ResponsiveSheet` y `Pagination`:** Utilizar las superficies adaptativas existentes (*SideSheet* / *BottomSheet*) para Alta, Edición y Confirmación de baja, y el componente de paginación existente para las páginas del listado.
- **Selector estilizado (`Select`):** Incorporar un control de selección consistente con los inputs existentes (borde `1px` de alto contraste, foco visible, estado inválido y soporte claro/oscuro) para elegir Comisiones Médicas, Estado inicial y Responsable.

---

## 5. Complete UI State Catalog

| Estado | Comportamiento visual y de interacción |
| --- | --- |
| **Entrada inicial** | El encabezado, barra de búsqueda/filtros, filas/tarjetas visibles de la página 1 y el paginado (o ficha + hitos del historial en el detalle) entran con una secuencia escalonada suave, respetando la preferencia de movimiento reducido. |
| **Poblado y paginado** | Muestra un bloque acotado por página (ej. 10 bolsines por página) en formato fila de tablero (escritorio) o tarjeta con borde `1px` (móvil). Controles anterior/siguiente deshabilitados en extremos y resumen de rango visible. |
| **Cargando (Skeleton)** | En `/bolsines` y `/bolsines/[id]`, bloques esqueleto con la silueta exacta del número mecánico, ruta y metadatos (o cabecera + línea de tiempo en detalle) mientras responden las peticiones al servidor. |
| **Vacío por búsqueda o filtro** | Cuando la búsqueda o el filtro de estado no arrojan coincidencias, muestra un mensaje claro con los criterios aplicados y un botón **"Limpiar filtros"** para restaurar el listado en un toque. |
| **Catálogo vacío** | Si no existieran bolsines en la base de datos, estado vacío ilustrado/tipográfico con llamado directo **"Nuevo bolsín"**. |
| **Detalle inexistente (404)** | Si se navega a `/bolsines/[id]` con un identificador inválido o inexistente, pantalla de estado amigable dentro del shell con enlace directo **"Volver a bolsines"**. |
| **Error de red / servidor** | Si falla la carga inicial o una mutación (`500` / red caída), aviso claro en tono operativo con botón **"Reintentar"** sin dejar la pantalla en blanco ni cerrar el formulario con datos cargados. |
| **Error de validación o duplicado (`400` / `409`)** | Mensajes puntuales debajo de cada campo inválido (ej. peso positivo, origen y destino válidos) y aviso específico si ya existe un bolsín con ese número en la misma comisión de origen (`409`). |
| **Estados interactivos** | Hover sutil en filas/tarjetas y botones; enfoque visible de alto contraste en controles, links al detalle y botones de paginado; estado de envío (`loading`) en los botones del Sheet bloqueando doble envío. |
