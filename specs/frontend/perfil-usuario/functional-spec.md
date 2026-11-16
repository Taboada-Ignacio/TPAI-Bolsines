# Especificación Funcional — Perfil de Usuario (`/perfil`)

**Feature ID:** `perfil-usuario`  
**Idioma de interfaz:** Español rioplatense (voseo, sin jerga técnica).

---

## 1. Persona Estética y Tono

- **Arquetipo:** *Minimalismo Arquitectónico en Islas* (estética Rumbo adaptada al sistema de Bolsines).
- **Tono visual:** Sobrio, táctil y estructurado en dos islas flotantes contenidas dentro del lienzo principal, sin sombras de elevación ni profundidad artificial; la jerarquía se construye exclusivamente mediante bordes finos (`1px`), radios amplios, tipografía contrastada (display geométrica, serif editorial en subtítulo y monoespaciada en rótulos técnicos) y un único acento de alta visibilidad.
- **Tema:** Soporte nativo para **tema claro y tema oscuro**, heredado del selector global del núcleo de la aplicación.
- **Voz y microcopy:** Directa, cercana y en voseo rioplatense (*"Tu perfil"*, *"Ingresá un email válido."*, *"No pudimos guardar los cambios."*). Sin tecnicismos ni jerga de sistema.

---

## 2. Jerarquía Visual y Patrón de Escaneo

1. **Primer punto de atención (Cabecera):** Rótulo superior con el rol y contexto de cuenta, seguido por el título principal *"Tu perfil"* con marcador de acento y el subtítulo editorial en itálica (*"datos de usuario y sesión activa"*).
2. **Segundo punto de atención (Isla de identidad y sesión):** Bloque de lectura rápida con avatar tipográfico de iniciales, nombre completo, identificador de usuario (`@usuario`), lista de metadatos clave-valor (Comisión médica, Rol asignado, Ingreso de turno) y acción secundaria de salida (*"Cerrar sesión"*).
3. **Tercer punto de atención (Isla de edición):** Formulario limpio con encabezado propio (*"Datos del empleado / Actualizar información"*), campos agrupados por afinidad (Nombre y Apellido; Email; Rol y Comisión médica), zona de retroalimentación contextual y acción primaria (*"Guardar cambios"*).

En pantallas anchas, las dos islas conviven en una grilla asimétrica (columna de identidad más angosta a la izquierda, formulario más amplio a la derecha). En pantallas medianas y móviles, las islas se apilan verticalmente manteniendo primero la identidad/sesión y luego la edición.

---

## 3. Flujos de Usuario e Interacciones

### Flujo A — Consulta de sesión activa y datos personales
1. La persona autenticada ingresa a `/perfil` desde la navegación principal o el acceso de cuenta.
2. Visualiza de inmediato su resumen de sesión (iniciales, nombre, usuario, comisión médica, rol e ingreso de turno) y sus datos precargados en el formulario.

### Flujo B — Actualización de datos del empleado
1. La persona edita uno o más campos: Nombre, Apellido, Email, Rol o Comisión médica.
2. Al presionar **"Guardar cambios"**:
   - Si algún campo obligatorio está vacío o el email tiene formato inválido, cada campo afectado muestra su mensaje de error inline y el envío se detiene.
   - Al corregir un campo con error, su alerta inline se limpia de forma inmediata.
   - Si la validación es correcta, el formulario entra en estado de guardado, bloquea ediciones simultáneas y envía los datos al servidor.
   - Si el servidor responde con éxito, aparece un aviso positivo (*"Datos actualizados."*) y el resumen de sesión refleja los valores vigentes.
   - Si el servidor devuelve un error de negocio o falla la conexión, se muestra un aviso de error claro y el formulario permanece editable con los datos ingresados intactos.

### Flujo C — Cierre de sesión
1. La persona presiona **"Cerrar sesión"** en la isla de resumen.
2. El botón indica progreso (*"Cerrando sesión…"*) y deshabilita clics repetidos.
3. Al finalizar (incluso ante fallos de red para no atrapar a la persona en la sesión), se redirige a la pantalla de acceso (`/login`).

---

## 4. Catálogo Completo de Estados de UI

| Estado | Descripción visual y comportamiento esperado |
| --- | --- |
| **Entrada / Inicial** | El encabezado y las dos islas aparecen mediante una secuencia escalonada fluida y sobria. En dispositivos con preferencia de movimiento reducido, todo el contenido es visible de inmediato sin desplazamientos. |
| **Cargando (Navegación / SSR)** | Mientras se resuelven los datos de sesión y catálogos en el servidor, la pantalla presenta esqueletos estructurales que respetan la silueta de cabecera y ambas islas en tema claro y oscuro. |
| **Poblado** | Isla izquierda con iniciales, nombre, `@usuario`, tres filas de metadatos con divisores finos y botón de cierre de sesión; isla derecha con los cinco campos precargados y botón de guardado habilitado. |
| **Guardando (Submitting)** | El botón primario muestra indicador de carga y texto *"Guardando…"*; los campos de texto pasan a solo lectura y los selectores se deshabilitan para evitar cambios concurrentes. |
| **Cerrando sesión** | El botón *"Cerrar sesión"* muestra indicador de carga y texto *"Cerrando sesión…"*, bloqueando múltiples envíos. |
| **Validación inline (Error de campo)** | Borde de peligro en el control inválido y mensaje de alerta debajo del campo específico (*"Completá este campo."* o *"Ingresá un email válido."*). |
| **Éxito al guardar** | Cápsula informativa con ícono de confirmación y mensaje *"Datos actualizados."* debajo de los campos. |
| **Error de servidor / Red** | Cápsula de alerta con ícono de advertencia y el mensaje devuelto por el servidor o el texto de respaldo (*"No pudimos guardar los cambios."* / *"No pudimos conectar con el servidor. Probá de nuevo."*). |
| **Error crítico de carga** | Si falla la obtención inicial de la sesión o catálogos, se presenta una isla de error recuperable con opción para reintentar o volver al inicio, sin pantalla en blanco. |
| **Vacío (Catálogos)** | Si no existieran roles o comisiones disponibles en los selectores, se comunica explícitamente la ausencia de opciones sin romper el diseño del formulario. |
| **Interactivos (Hover / Focus / Active)** | Hover sutil sobre controles y botones respetando el contraste en tema claro y oscuro; anillo de foco visible de alta precisión para navegación por teclado; retroalimentación táctil breve al presionar. |
