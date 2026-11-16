# Especificación Funcional — Seguimiento de Bolsines en Mapa 3D (CU 36 + CU 30/31)

**Feature ID:** `cu36-seguimiento-bolsines`  
**Casos de Uso:** CU 36 (Consultar seguimiento de bolsines) · CU 30/31 (Notificar ubicación de bolsín)  
**Actor Principal:** Encargado de Bolsines (EB)  
**Estado:** Actualización MapLibre 3D + Camiones → Bolsines + Visor 3D (Gate 1)

---

## 1. Persona Estética y Tono

- **Arquetipo visual:** Estética **Rumbo / Costado** sobre **islas flotantes sin profundidad** (borde de `1px`, radios generosos, sin sombras) apoyadas sobre un **mapa 3D interactivo a pantalla completa (*bleed*)** con proyección globo/perspectiva y trazado de rutas nacionales (`RN7`, `RN9`, `RN40`).
- **Personalidad:** Tablero operativo de logística sanitaria con precisión instrumental (solapas tipo tablero de partidas, etiquetas técnicas monoespaciadas, unidades de transporte agrupadas y visor 3D táctil del bolsín). Nunca un panel de administración genérico.
- **Temas:** Soporte nativo para **tema claro y tema oscuro** desde el primer boceto, cambiando el estilo cartográfico vectorial en vivo sin perder contraste ni legibilidad sobre las rutas y marcadores.
- **Voz y microcopy:** **Español rioplatense** directo, claro y **sin jerga técnica** (ej. *"Sin bolsines en viaje"*, *"Avisar al gerente"*, *"Última ubicación conocida"*, *"Bolsines a bordo"*).

---

## 2. Jerarquía Visual y Patrón de Escaneo

1. **Primer plano (fondo a sangre — Mapa 3D):** El **mapa 3D interactivo** ocupa toda la pantalla detrás de las islas de navegación, mostrando los corredores nacionales (`RN7`, `RN9`, `RN40`) y los marcadores de **unidades de transporte (camiones)** que agrupan a los bolsines `Enviado` de la Comisión Médica (CM) del empleado logueado según su corredor y sentido.
2. **Segundo plano (isla de control y listado):** Una isla flotante lateral (en escritorio/tablet) o superior/desplegable (en celular) reúne la **CM de origen**, el buscador por **N.º de precinto**, el filtro por **CM destino**, el selector de **modelo GPS** (`XTR-4500L`, `QX-7A`, `MTR-900`) y la **lista de bolsines en tránsito**.
3. **Tercer plano (interacción Camión → Bolsín e isla de detalle con visor 3D):**
   - **En escritorio (`>= 768px`):** Al pasar el cursor (**hover**) sobre un camión, el marcador se eleva y despliega un **abanico orbital** con los bolsines a bordo; al pasar el cursor sobre un bolsín del abanico, aparece una **tarjeta flotante animada** con vista previa (N.º de bolsín, precinto, destino y señal en vivo / A3) sincronizada con la lista. Al hacer **click** en el bolsín (del abanico o de la lista), el mapa vuela suavemente hacia esa ubicación y abre el **panel de detalle** con un **visor 3D interactivo del bolsín** y el botón principal **"Avisar ubicación al gerente"**.
   - **En celular (`< 768px`):** Sin hover y con área táctil mínima de `48x48px`. Al tocar (**tap**) un camión que transporta **1 bolsín**, se abre directamente la hoja inferior (**BottomSheet**) de detalle con su visor 3D; al tocar un camión con **N bolsines**, se abre una hoja inferior **"Bolsines a bordo"** con tarjetas táctiles para elegir el bolsín (o se desagrupa al hacer pinch-to-zoom).
4. **Cuarto plano (confirmación CU 30/31):** Un diálogo modal enfocado que muestra los datos exactos que se enviarán por correo al Gerente de la Comisión Médica (GCM) destino antes de confirmar el despacho del aviso.

---

## 3. Flujos de Usuario e Interacciones

### 3.1 Flujo Principal (Escenario Feliz — CU 36 + CU 30/31)

1. El EB ingresa a **Seguimiento**. El sistema identifica su **CM de origen** (la del empleado logueado) y la muestra en la cabecera y en la isla de filtros.
2. El sistema consulta los bolsines en estado `Enviado` cuya CM de origen coincide con la del empleado, y obtiene sus coordenadas y fecha/hora de última actualización desde el dispositivo GPS Tracker (usando el modelo seleccionado). Si el backend aún no expone `/api/seguimiento`, opera con respaldo controlado transparente sin errores de lectura.
3. El mapa 3D dibuja las rutas nacionales (`RN7`, `RN9`, `RN40`) y agrupa los bolsines en **marcadores de camión** por corredor y sentido; la lista lateral muestra las filas individuales correspondientes (N.º de bolsín, N.º de precinto, CM destino, última actualización y estado de señal).
4. El EB puede:
   - **Buscar por N.º de precinto** (filtrado inmediato con botón rápido para limpiar).
   - **Filtrar por CM destino** (desplegable con las comisiones destino presentes).
   - **Ver el impacto del filtro en el mapa:** Los camiones sin bolsines coincidentes se atenúan visualmente (opacidad `15%`), mientras que los que sí tienen coincidencias permanecen resaltados.
   - **Cambiar el modelo de GPS Tracker** (`XTR-4500L`, `QX-7A`, `MTR-900`) o **actualizar** manualmente desde las acciones de cabecera.
5. El EB explora y selecciona un bolsín:
   - **En escritorio (`>= 768px`):** Hace hover sobre un camión para desplegar el **abanico orbital** de bolsines a bordo; hace hover sobre un bolsín del abanico para previsualizar su tarjeta flotante y resaltar su fila en la lista; hace click en el bolsín (o en su fila de la lista) para centrar el mapa con vuelo suave y abrir el detalle.
   - **En celular (`< 768px`):** Toca un camión en el mapa. Si lleva 1 bolsín, abre el detalle directo; si lleva varios, abre la hoja *"Bolsines a bordo"* para elegir cuál inspeccionar (o hace zoom con dos dedos para desagrupar).
6. En el **Detalle del bolsín**, el EB visualiza:
   - **Visor 3D interactivo del bolsín** (modelo tridimensional con precinto e insignia de estado).
   - N.º de bolsín, N.º de precinto, estado `Enviado`, CM origen → CM destino, coordenadas (`lat`, `lng`), fecha y hora de última actualización y estado de señal GPS.
   - El botón principal **"Avisar ubicación al gerente"**.
7. El EB presiona **"Avisar ubicación al gerente"**.
8. El sistema abre el **diálogo de confirmación (CU 30/31)** consultando si desea enviar el correo electrónico al GCM de la CM destino, mostrando la vista previa de los datos obligatorios:
   - N.º de bolsín y N.º de precinto.
   - Fecha y hora de última actualización.
   - Coordenadas geográficas (latitud y longitud).
   - CM origen y CM destino (con dirección de correo del GCM destino).
   - Detalle de remitos y documentación asociada (si hay remitos cargados).
9. El EB confirma el envío. El sistema invoca la notificación (CU 30/31), muestra estado de envío y confirma con un aviso de éxito claro (*"Aviso enviado al gerente de [CM Destino]"*).

### 3.2 Flujos Alternativos

- **A1 — No hay bolsines en estado `Enviado`:**  
  El mapa 3D muestra el área general centrada en la CM origen con las rutas trazadas sin camiones en tránsito, y la isla principal presenta un estado vacío intencional informando que no existen bolsines despachados en viaje para la CM actual, con una acción para reintentar/actualizar o volver al inicio.
- **A2 — El filtro por precinto o CM destino no arroja coincidencias:**  
  El listado informa que ningún bolsín coincide con la búsqueda ingresada y ofrece un botón táctil **"Limpiar filtros"** para restablecer la vista completa de inmediato; en el mapa, todos los camiones quedan atenuados al `15%` hasta limpiar los filtros.
- **A3 — El GPS Tracker no responde o está fuera de cobertura:**  
  Para los bolsines sin respuesta actual del dispositivo, el sistema informa que el GPS está fuera de cobertura o sin respuesta, muestra la **última posición conocida** con indicador distintivo en **ámbar** (en el camión si todos o alguno está en A3, en el chip del abanico, en el listado y en el detalle). Si el usuario notifica al GCM en este estado, el correo advierte que corresponde a la última posición conocida.
- **A4 — El EB cancela la ejecución del caso de uso:**  
  Desde el shell o mediante el enlace de retorno, el EB puede volver a la pantalla de Inicio sin efectos secundarios.
- **A5 — El EB no desea enviar el correo electrónico:**  
  Al cancelar o cerrar el diálogo de confirmación, el sistema omite el envío y mantiene la visualización actual del mapa y del detalle del bolsín seleccionado.

---

## 4. Catálogo Completo de Estados de Interfaz

| Estado | Disposición y comportamiento esperado |
| --- | --- |
| **Inicial / Entrada** | El mapa 3D aparece a sangre con inclinación y proyección globo (o plano si no hay WebGL) y las islas flotantes se revelan ordenadamente junto con las solapas de la CM origen. |
| **Cargando / Esqueleto** | La isla de listado muestra filas esqueleto con pulso sutil; el botón de actualizar gira suavemente y el mapa muestra un indicador discreto de lectura GPS sin bloquear la navegación. |
| **Poblado** | Camiones agrupados por ruta y sentido sobre `RN7`, `RN9` y `RN40`, con distintivo de cantidad a bordo, señales en **lima** (en vivo) y **ámbar** (A3 última posición conocida), lista con filas escaneables y panel de detalle con visor 3D listo al seleccionar. |
| **Hover Camión / Abanico (Desktop)** | Al pasar el cursor sobre un camión, el marcador se eleva y despliega un abanico orbital con los bolsines a bordo; al pasar por un bolsín del abanico, se muestra su tarjeta flotante y se resalta su fila en la lista. |
| **Tap Camión (Mobile)** | Toque con target `>= 48x48px`: abre detalle directo si lleva 1 bolsín, o la hoja *"Bolsines a bordo"* si lleva varios. |
| **Vacío A1 (Sin enviados)** | Ilustración geométrica minimalista + mensaje claro: *"No hay bolsines en viaje desde [CM Origen]"* + botón para actualizar o volver al inicio. |
| **Vacío A2 (Sin coincidencias)** | Mensaje dentro de la lista: *"No encontramos ningún bolsín con ese precinto o destino"* + botón **"Limpiar filtros"**. Camiones del mapa atenuados al `15%`. |
| **Advertencia A3 (Sin cobertura GPS)** | Indicador y etiqueta en ámbar (*"Sin cobertura · Última posición"*), manteniendo visible la última fecha/hora y coordenadas registradas. Si falla la consulta completa del lote o el endpoint devuelve HTML inesperado, se activa el respaldo controlado o franja reintentable sin romper la pantalla. |
| **Diálogo CU 30/31 — Confirmación** | Ventana modal con resumen de destinatario (GCM destino), coordenadas, hora y documentación. Acciones: **"Confirmar envío"** y **"Cancelar"**. |
| **Diálogo CU 30/31 — Enviando / Éxito / Error** | Botón con estado de carga mientras se despacha el correo; al completar, notificación de éxito con cierre del modal; ante fallo del servidor de correo, mensaje claro con opción de reintentar sin perder la selección. |
| **Estados interactivos** | Hover y foco visible con anillo de alto contraste en filas, marcadores de camión, chips del abanico, tarjetas de vista previa, visor 3D y botones; estado activo sincronizado entre mapa y lista. |

---

## 5. Criterios de Aceptación Funcional

- El empleado logueado ve únicamente los bolsines `Enviado` cuya CM origen corresponde a su propia CM.
- La búsqueda por N.º de precinto y el filtro por CM destino funcionan combinados, se limpian en un clic (A2) y atenúan al `15%` los camiones sin coincidencias en el mapa.
- En escritorio (`>= 768px`), el hover sobre un camión despliega su abanico de bolsines y el hover sobre un bolsín muestra su vista previa sincronizada con la lista; el click vuela al punto y abre el detalle con visor 3D.
- En celular (`< 768px`), los marcadores tienen área táctil `>= 48x48px` y el tap abre el detalle directo (1 bolsín) o la hoja *"Bolsines a bordo"* (N bolsines).
- El estado A3 distingue visualmente la última posición conocida (ámbar) de la posición en vivo (lima) en camiones, abanico, lista y detalle.
- El flujo de notificación al GCM destino exige confirmación explícita (CU 30/31) y permite cancelar sin enviar (A5).
- Todo texto de interfaz usa voseo rioplatense natural y evita términos técnicos de desarrollo.
