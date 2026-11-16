# Functional Spec — Comisiones Médicas (CRUD) & Sheets Reutilizables

**Feature ID:** `comisiones-medicas-crud`  
**Rol principal:** Parametrizador del sistema  
**Contexto:** Gestión de sedes (Comisiones Médicas) dentro del sistema en islas con estética *Rumbo / Costado*, soportando tema claro y tema oscuro.

---

## 1. Aesthetic Persona & Tone

- **Arquetipo visual:** *Tablero Operativo Ferroviario / Rumbo en Islas* — precisión técnica, tipografía de alto contraste, superficies planas separadas por bordes finos de `1px` sin sombras pesadas, y acento único en Lima Volt para la acción principal.
- **Voz y tono:** Español rioplatense claro, directo y sin jerga técnica (*"Nueva comisión"*, *"Buscar por código, provincia o dirección…"*, *"Guardar cambios"*).
- **Personalidad responsiva:**
  - En **escritorio**, las sedes se leen como un tablero continuo de partidas (código mecánico a la izquierda, sede y contacto al centro, acciones discretas a la derecha), y los formularios/confirmaciones emergen desde el costado derecho (*SideSheet*) manteniendo el contexto de la lista visible.
  - En **móvil**, cada sede toma forma de **tarjeta táctil** con jerarquía clara y separación cómoda entre ítems, y los formularios/confirmaciones suben desde abajo (*BottomSheet*) con gesto de arrastre para cerrar.

---

## 2. Visual Hierarchy & Scanning Pattern

1. **Primer impacto (Encabezado y CTA):** El ojo aterriza en el título *"Comisiones médicas."* acompañado del rótulo superior *"Parámetros · Sedes"* y el botón primario **"Nueva comisión"** con bordes completamente redondeados tipo píldora.
2. **Segundo impacto (Control de filtrado):** Justo debajo, la barra de búsqueda con bordes igualmente redondeados y el indicador de resultados (`N sedes` / `Página X de Y`) permiten acotar las 24+ sedes al instante.
3. **Tercer impacto (Lista / Tarjetas + Paginado):**
   - Cada ítem se escanea de izquierda a derecha: **código en tablero mecánico** → **nombre de la sede** → **dirección, email y teléfono** → **acciones (editar / eliminar)**.
   - Al pie de la lista, el **paginado** cierra el recorrido visual con controles claros de página anterior, números de página y página siguiente.

---

## 3. User Journeys & Interactions

### 3.1 Explorar y buscar sedes
1. El usuario ingresa a `/comisiones-medicas` desde el rail lateral, la píldora inferior o el tablero de Inicio.
2. Ve la primera página de comisiones médicas cargadas (ordenadas de forma consistente) y el total de sedes.
3. Escribe en el buscador redondeado (por código, provincia, dirección o email): la lista se filtra en vivo y vuelve automáticamente a la página 1.
4. Puede limpiar la búsqueda con un botón rápido dentro del mismo campo.
5. Navega entre páginas usando los controles del paginado al pie.

### 3.2 Crear una nueva comisión médica
1. El usuario presiona el botón **"Nueva comisión"** (o el botón `+` en la barra superior).
2. Se abre el panel de carga: **SideSheet** desde la derecha en escritorio, **BottomSheet** desde abajo en móvil.
3. Completa los 5 campos obligatorios: **Código**, **Nombre**, **Dirección**, **Email** y **Teléfono**.
4. Al confirmar, si los datos son válidos y el código no está repetido, el panel se cierra y la nueva sede aparece en la lista.

### 3.3 Editar una comisión médica existente
1. El usuario presiona el ícono de **Editar** en una fila (escritorio) o tarjeta (móvil).
2. Se abre el mismo panel (**SideSheet** en escritorio / **BottomSheet** en móvil) precargado con los datos actuales de esa sede.
3. Modifica uno o más campos y guarda; el registro se actualiza en su lugar sin perder la página ni el filtro activo (salvo que ya no coincida con el filtro).

### 3.4 Eliminar una comisión médica
1. El usuario presiona el ícono de **Eliminar** en la sede deseada.
2. Se abre un panel de confirmación (**SideSheet** en escritorio / **BottomSheet** en móvil) indicando el nombre y código de la sede a dar de baja y advirtiendo que no podrá eliminarse si tiene usuarios o bolsines asociados.
3. Al confirmar, la sede se quita de la lista; si era el único ítem de la última página, el paginado retrocede automáticamente a la página anterior válida.

---

## 4. Requerimientos de Componentes Generales

- **BottomSheet general reutilizable:** Contenedor modal anclado al borde inferior para pantallas móviles, reutilizable en cualquier flujo de la app (menú "Más", formularios, confirmaciones), con manija superior, cierre por deslizamiento hacia abajo, clic en el fondo o tecla `Escape`.
- **SideSheet general reutilizable:** Contenedor modal anclado al costado derecho para pantallas de escritorio, coherente con la estética de islas (`1px` de borde, superficie sólida/translúcida del sistema, sin sombras pesadas), con cabecera limpia, área de contenido scrolleable y cierre por fondo o tecla `Escape`.
- **Contenedor adaptativo (Sheet responsivo):** Capacidad de usar *BottomSheet* en móvil y *SideSheet* en escritorio para un mismo contenido sin duplicar formularios ni lógica.
- **Buscador y botón primario redondeados:** Ambos controles principales adoptan bordes bien redondeados (estilo píldora) para diferenciarse visualmente de los inputs internos del formulario y reforzar la unidad entre búsqueda y creación.
- **Paginado:** Barra de paginación limpia con navegación anterior/siguiente, páginas visibles y resumen de rango actual (ej. mostrando ítems `1–8 de 24`).

---

## 5. Complete UI State Catalog

| Estado | Comportamiento visual y de interacción |
| --- | --- |
| **Entrada inicial** | El encabezado, buscador, filas/tarjetas visibles de la página 1 y barra de paginado entran con secuencia escalonada suave (respetando movimiento reducido). |
| **Poblado y paginado** | Muestra un bloque acotado por página (ej. 8 sedes por página) en formato fila de tablero (escritorio) o tarjeta con borde `1px` y radio generoso (móvil). Controles de página anterior/siguiente deshabilitados en los extremos. |
| **Cargando (Skeleton)** | Bloques esqueleto con la misma silueta del código mecánico, título y dos líneas de contacto mientras se obtienen datos del servidor. |
| **Vacío por búsqueda** | Cuando el filtro no arroja coincidencias, se muestra un mensaje claro con el término buscado y un botón **"Ver todas"** para limpiar el filtro en un toque. |
| **Catálogo vacío** | Si no existieran sedes cargadas, mensaje explicativo invitando a crear la primera con CTA directo **"Nueva comisión"**. |
| **Error de validación / duplicado** | Mensajes puntuales debajo de cada campo inválido (ej. campo obligatorio o email inválido) y aviso específico si el código ya existe (`409` al integrar backend). |
| **Error al eliminar en uso (`409`)** | Si el backend impide borrar una sede porque tiene bolsines o usuarios asociados, el panel de confirmación muestra el mensaje de error sin cerrarse ni perder contexto. |
| **Estados interactivos** | Hover sutil en filas/tarjetas; enfoque visible con anillo de alto contraste en botones, inputs, links de página y botones de acción; estado activo presionado en botones táctiles. |
