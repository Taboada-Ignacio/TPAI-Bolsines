# Especificación Funcional — Gestión de Empleados (CRUD)

> **Feature ID:** `empleados-crud`  
> **Flujo:** `spec-frontend-craft-flow` — Gate 1 (`functional-spec.md`)  
> **Ruta:** `/empleados`  
> **Acceso:** Exclusivo para el rol **`Parametrizador del sistema`**

---

## 1. Persona Estética y Tono

- **Arquetipo visual:** *Editorial Técnico en Islas* (estética Rumbo adaptada al moodboard del sistema). Superficies planas tipo isla con bordes finos de `1px`, radios generosos y cero sombras de elevación.
- **Tema dual obligatorio:** Funciona íntegramente en **tema claro** y **tema oscuro**, conservando legibilidad, contraste y jerarquía cromática en ambos modos.
- **Voz y microcopy:** Español rioplatense con voseo directo, claro y sin jerga técnica (*"Nuevo empleado"*, *"¿Querés eliminar a…?"*, *"No encontramos empleados con ese criterio."*).
- **Densidad editorial controlada:** Combina tipografía de título geométrica, subtítulo en itálica editorial, etiquetas técnicas en monoespaciado para usuarios (`@usuario`), códigos de sede y correos, y un único acento de alta visibilidad para las acciones principales.

---

## 2. Jerarquía Visual y Patrón de Escaneo

1. **Primer impacto (Cabecera de acción):** Rótulo de sección (*"Administración · sistema"*), título principal (*"Gestión de empleados"*) con marcador visual en la palabra clave, subtítulo descriptivo (*"alta de usuarios, roles y comisiones médicas"*) y botón primario **"Nuevo empleado"** alineado a la derecha en escritorio o debajo en móvil.
2. **Segundo impacto (Filtro e inventario):** Barra de búsqueda tipo píldora a la izquierda y contador en vivo de resultados a la derecha (*"N empleado(s)"*).
3. **Tercer impacto (Patrón Maestro-Detalle):**
   - **Listado maestro:** Tabla/tarjetas dentro de una isla contenedora con nombre completo, distintivo **"Vos"** para el usuario autenticado, `@usuario`, rol, código de comisión médica, correo y acciones rápidas (**Editar** / **Eliminar**).
   - **Panel de detalle integrado (escritorio) o hoja inferior (móvil):** Al seleccionar un empleado, se despliega su ficha con iniciales, nombre, `@usuario`, lista de definiciones (*Email*, *Rol asignado*, *Comisión médica* con código y nombre), navegación secuencial (*Anterior* / *Siguiente* con indicador de posición) y acciones directas.

---

## 3. Recorridos de Usuario e Interacciones

### 3.1. Guardia de acceso por rol
- Si la persona autenticada **no** posee el rol `Parametrizador del sistema`, la pantalla bloquea el listado y muestra una vista de **Acceso restringido** (*"Solo administración"*) explicando qué rol está habilitado y ofreciendo un enlace **"Volver al inicio"**.

### 3.2. Exploración, búsqueda e inspección
1. El administrador ingresa a `/empleados` y ve el listado completo cargado desde el servidor.
2. Puede escribir en el buscador para filtrar en tiempo real por nombre, apellido, correo, nombre de usuario, rol o código/nombre de comisión médica.
3. Al hacer clic (o activar con teclado) sobre una fila, se abre el panel de detalle con la ficha completa del empleado. Desde allí puede recorrer el listado con los botones *Anterior / Siguiente* o cerrar el detalle.

### 3.3. Alta atómica de Empleado + Usuario
1. El administrador pulsa **"Nuevo empleado"**.
2. Se abre un panel lateral (escritorio) o hoja inferior (móvil) titulado **"Nuevo empleado"** con subtítulo *"Alta de usuario"*.
3. Completa los campos obligatorios: **Nombre**, **Apellido**, **Email**, **Usuario**, **Contraseña inicial**, **Rol** y **Comisión médica**.
4. Al confirmar **"Crear empleado"**:
   - Si hay campos inválidos o vacíos, se marcan debajo de cada campo con mensajes claros en voseo.
   - Si el nombre de usuario ya existe, el error se asocia directamente al campo **Usuario**.
   - Si la creación es exitosa, se crea de forma atómica el registro de empleado junto con su cuenta de usuario, se cierra el panel y la lista se actualiza con el nuevo integrante.

### 3.4. Edición de Empleado
1. El administrador pulsa **"Editar"** en una fila o **"Editar datos"** en el panel de detalle.
2. Se abre el panel con los datos precargados (**Nombre**, **Apellido**, **Email**, **Rol**, **Comisión médica**). Los campos de credenciales (**Usuario** y **Contraseña inicial**) no se editan desde esta vista.
3. Al confirmar **"Guardar cambios"**, se validan los campos, se persiste la actualización, se cierra el panel y la lista y el detalle reflejan los datos actualizados.

### 3.5. Baja de Empleado (con protección de autoeliminación)
1. El sistema oculta la acción **Eliminar** en la fila y en el detalle del empleado que corresponde a la sesión actual (identificado con el distintivo **"Vos"**).
2. Para cualquier otro empleado, al pulsar **"Eliminar"** se abre una hoja de confirmación (*"Confirmar baja"* / *"Eliminar empleado"*) indicando nombre, apellido y `@usuario`, aclarando que la acción no se puede deshacer.
3. Al confirmar **"Eliminar"**, si el empleado no tiene actividad asociada que lo impida, se elimina el registro, se cierra la hoja y se actualiza el listado. Si el servidor rechaza la baja por integridad referencial u otro motivo, el mensaje de error se muestra dentro de la misma hoja sin cerrarla.

---

## 4. Catálogo Completo de Estados de UI

| Estado | Comportamiento visual y funcional |
| :--- | :--- |
| **Inicial / Entrada** | Los datos iniciales llegan renderizados desde el servidor sin parpadeo en blanco. La cabecera, barra de búsqueda e isla del listado aparecen con transición coreografiada suave (o de forma instantánea si el usuario prefiere movimiento reducido). |
| **Poblado (Listado + Detalle)** | Lista en isla con filas separadas por líneas sutiles. Al seleccionar una fila, el borde izquierdo toma el color de acento, el fondo de la fila se eleva levemente y se muestra el panel de detalle con avatar de iniciales y ficha técnica. |
| **Cargando / Guardando** | Durante alta, edición o eliminación, los botones muestran estado de carga (*"Guardando…"*, *"Eliminando…"*), los campos pasan a solo lectura/deshabilitados y se bloquea el cierre accidental de la hoja. |
| **Vacío (sin resultados o sin registros)** | Cuando el filtro no coincide con ningún empleado (o no hay registros), la isla muestra un mensaje centrado claro (*"No encontramos empleados con ese criterio."*) con opción de limpiar la búsqueda cuando corresponda. |
| **Error y casos borde** | Errores de validación por campo debajo del control afectado; conflicto de usuario duplicado (`409`) en el campo **Usuario**; errores de red o servidor en alerta visible dentro de la hoja activa; intento de acceso sin rol `Parametrizador del sistema` redirigido a pantalla de acceso restringido. |
| **Interactivos (Hover, Focus, Active)** | Filas con realce sutil al pasar el cursor; botones con transición de superficie; anillo de foco visible de alto contraste en controles, filas seleccionables y separador redimensionable; las acciones de fila no disparan ni bloquean la selección de forma ambigua. |
