# Functional Spec — Núcleo de la App en Islas (navegación, cabecera y área de pantallas)

> **Feature ID:** `app-shell-core`
> **Flujo:** `spec-frontend-craft-flow` — Gate 1 (Especificación Funcional y Dirección Estética) — **versión 2**
> **Fuentes:** [`brand-guidelines.md`](../../../docs/brand-guidelines.md) · Rumbo (`rumbo.iman.ar/demo`, kit `UI-05`) · píldora inferior de `Proyecto-Seminario` (`BottomNav.tsx`) · moodboard [`docs/referencias/`](../../../docs/referencias/)
> **Usuario principal:** Marcelo Gómez, Encargado de Bolsines. Terminal del depósito, tablet y celular.
> **Alcance:** el marco donde vive cada pantalla del sistema. Las pantallas (Seguimiento, Recepción…) se especifican aparte y se enchufan acá.

**Cambios respecto de la versión 1 (rechazada):** se abandona el panel clásico (riel oscuro pegado al borde + barra de header de lado a lado). El núcleo pasa a ser un conjunto de **islas flotantes** sobre el contenido, con la estética de Rumbo adaptada al moodboard, y **todo funciona en tema claro y oscuro**.

---

## 1. Aesthetic Persona & Tone

- **Arquetipo visual:** _Tablero de salidas_ — la estética de Rumbo (tinta profunda, lima eléctrico, bordes finos, tipografía enorme y mecánica de aeropuerto) llevada al mundo del bolsín: Elite Blue para rutas y acciones, Volt Lime para lo que está vivo, Blue Mist como papel técnico.
- **Tono:** seguro y con carácter. Menos "sistema de gestión", más instrumento de precisión.
- **Sensación física:**
  - **Islas, no barras.** La navegación y la cabecera son piezas sueltas con esquinas muy redondeadas, pegadas a los bordes de la pantalla (separación mínima). Sin sombras ni relieve: solo un borde fino de 1px y un leve translúcido.
  - **El contenido pasa por debajo.** Las pantallas ocupan todo; las islas flotan encima. En el mapa de Seguimiento esto hace que el mapa llegue hasta los bordes.
  - **Una gota de lima** marca dónde estás. Al cambiar de pestaña no salta: viaja hasta el nuevo destino estirándose como algo líquido.
  - **Títulos gigantes y condensados**, con una palabra resaltada con marcador lima. Rótulos chiquitos en monoespaciada.
  - **Tablero mecánico:** el código de la Comisión Médica (`COR`) se muestra en solapas de aeropuerto que giran al cambiar de pantalla.
  - **Grano analógico** vivo sobre todo, muy sutil.
- **Dos temas:**
  - **Oscuro:** tinta azulada casi negra, islas apenas más claras, lima a pleno. Es el que más se parece a Rumbo.
  - **Claro:** fondo Blue Mist, islas en blanco azulado, texto tinta, lima con borde tinta para que se lea.
  - Arranca con el tema del dispositivo y Marcelo puede cambiarlo cuando quiera; la elección se recuerda.
- **Qué se evita:** sombras difusas, relieve, barras de lado a lado, ítems deshabilitados o "próximamente", tarjetas con sombra, gradientes.

---

## 2. Visual Hierarchy & Scanning Pattern

1. **El contenido** de la pantalla, a todo el ancho y alto.
2. **El título gigante** de la pantalla (en pantallas con márgenes) o el mapa (en Seguimiento).
3. **La gota lima** en la isla de navegación: dónde estoy.
4. **La isla de identidad** arriba a la izquierda: solapas `COR`, rótulo de la Comisión Médica y nombre de la pantalla.
5. **La isla de acciones** arriba a la derecha: acciones propias de la pantalla, cambio de tema y usuario.

---

## 3. Estructura por tamaño de pantalla

| Tamaño         | Navegación                                                                                                                                                      | Cabecera                                                                     | Contenido                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| **Celular**    | **Píldora flotante** abajo, centrada: cada destino con ícono y nombre; el activo relleno en lima. Último ítem: **Más** (usuario, tema, cerrar sesión).          | Isla de identidad a la izquierda e isla de acciones a la derecha, compactas. | Pantalla completa, por debajo de las islas. |
| **Tablet**     | **Isla lateral** angosta a la izquierda, solo íconos. Un botón al pie la deja abierta con los nombres.                                                          | Las dos islas superiores.                                                    | Pantalla completa.                          |
| **Escritorio** | La misma isla lateral, que **se abre sola al pasar el mouse** o al navegar con teclado, mostrando los nombres. Se abre por encima del contenido, sin empujarlo. | Las dos islas superiores.                                                    | Pantalla completa.                          |

**Dos tipos de pantalla:**

- **Con márgenes:** el contenido deja libre la zona de las islas y arranca con su título gigante.
- **A sangre:** el contenido usa toda la pantalla (mapa) y cada pantalla suma sus propias islas (lista, detalle).

---

## 4. Destinos de navegación

Solo se muestran pantallas que existen.

| Destino         | En esta entrega                                                                                                                                                                 | Después            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **Inicio**      | Saludo gigante y un **tablero de destinos**: una fila por pantalla disponible, numerada, con flecha lima; debajo, tres datos de la sesión (comisión, usuario, hora de ingreso). | Resumen del turno. |
| **Seguimiento** | Pantalla a sangre con su zona lista para recibir el mapa.                                                                                                                       | CU 36.             |

Agregar Recepción, Bolsines o Remitos es sumar una línea a la lista de destinos: aparecen en la isla, en la píldora y en el tablero de Inicio.

---

## 5. User Journeys & Interactions

### 5.1 Llegar desde el login

1. El bolsín se abre y la pantalla queda en Tinta.
2. La Tinta **se levanta como una persiana** y descubre la app.
3. Las islas entran desde sus bordes (la lateral desde la izquierda, las de arriba desde arriba, la píldora desde abajo) y las solapas `COR` giran hasta fijarse.
4. El contenido de Inicio se revela con el efecto cortina, fila por fila.
5. Todo dura menos de un segundo y nada queda bloqueado mientras tanto.

### 5.2 Entrar directo o recargar

La app aparece armada, sin la secuencia de entrada.

### 5.3 Cambiar de pestaña

1. Marcelo toca un destino.
2. **La gota lima viaja** al nuevo destino estirándose y recuperando su forma.
3. Las **solapas giran** y el nombre de la pantalla cambia.
4. El contenido nuevo **se descubre con una cortina** de izquierda a derecha; en pantallas con filas, las filas entran una tras otra.
5. Las islas no parpadean ni se redibujan.
6. Tocar el destino actual lleva el contenido arriba de todo.

### 5.4 Isla lateral

- **Escritorio:** se abre al pasar el mouse o al recibir foco de teclado; se cierra al salir.
- **Tablet (o si se prefiere):** el botón al pie la **fija abierta**; otro toque la cierra.
- Abierta, muestra además el nombre del sistema y los datos de Marcelo al pie.

### 5.5 Usuario, tema y cierre de sesión

- **Cambio de tema:** botón de sol/luna en la isla de acciones. El cambio es inmediato y suave.
- **Usuario:** en escritorio y tablet, al pie de la isla lateral (iniciales; abierta, nombre y comisión). Al tocarlo se abre un menú con **Cerrar sesión** (CU 6).
- **Celular:** **Más** en la píldora abre una hoja inferior con los datos de Marcelo, el cambio de tema y **Cerrar sesión**.

### 5.6 Teclado

- Primer `Tab`: enlace **Saltar al contenido**.
- Orden: saltar → isla de navegación → islas superiores → contenido.
- `Esc` cierra lo que esté abierto y devuelve el foco a quien lo abrió.

### 5.7 Sesión vencida

Lleva al login; al volver a entrar, regresa a la pantalla donde estaba.

---

## 6. Complete UI State Catalog

| Estado                           | Comportamiento esperado                                                                                                                                           |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entrance (desde el login)**    | Persiana de Tinta que se levanta, islas que entran desde sus bordes, solapas girando, contenido en cortina. Menos de un segundo, sin bloquear nada.               |
| **Entrance (directa o recarga)** | Todo armado al instante.                                                                                                                                          |
| **Populated**                    | Islas visibles, gota lima en el destino activo, contenido debajo.                                                                                                 |
| **Cambio de pestaña**            | Gota que viaja, solapas que giran, cortina del contenido.                                                                                                         |
| **Loading de una pantalla**      | Las islas quedan intactas y usables. En el contenido: esqueleto con la forma de la pantalla (título y filas), sin spinners a pantalla completa.                   |
| **Empty**                        | Lo define cada pantalla. La base de Seguimiento muestra una isla chica avisando que el mapa se conecta ahí.                                                       |
| **Error de una pantalla**        | Islas intactas. En el contenido: título _"No pudimos cargar esta pantalla."_ y la acción **Reintentar**; se puede navegar a otra parte.                           |
| **Pantalla inexistente**         | Dentro del núcleo: _"Esta pantalla no existe."_ con **Ir a Inicio**.                                                                                              |
| **Isla lateral abierta**         | Más ancha, con nombres; flota sobre el contenido sin velo y sin desplazarlo.                                                                                      |
| **Hoja "Más" (celular)**         | Sube desde abajo sobre un velo; se cierra con el velo, con `Esc` o arrastrando hacia abajo.                                                                       |
| **Tema claro / oscuro**          | Todas las piezas tienen sus dos versiones, con contraste verificado en ambas. El cambio no produce parpadeos ni al recargar.                                      |
| **Interactive — destinos**       | Mouse encima: fondo apenas marcado. Activo: gota lima con el ícono en tinta. Presionado: se achica apenas. Foco de teclado: anillo bien visible en los dos temas. |
| **Interactive — acciones**       | Botones de ícono que se achican al presionar; foco visible.                                                                                                       |
| **Movimiento reducido**          | Sin persiana, sin viaje de la gota, sin cortina, sin giro de solapas y con el grano quieto: todo cambia al instante.                                              |
| **Teclado del celular abierto**  | La píldora se oculta mientras se escribe.                                                                                                                         |

---

## 7. Fuera de alcance

- El contenido real de las pantallas (mapa del CU 36, resumen del turno).
- Notificaciones y buscador globales.
- Cambio de Comisión Médica (un empleado pertenece a una sola).
