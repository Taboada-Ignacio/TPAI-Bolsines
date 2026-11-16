# Functional Spec — Login con Bolsín 3D (CU 5 Iniciar Sesión, mockeado)

> **Feature ID:** `login-bolsin-3d`
> **Flujo:** `spec-frontend-craft-flow` — Gate 1 (Especificación Funcional y Dirección Estética)
> **Fuentes:** nodo [`PPAI-UX-LOGIN`](../../../docs/cerebro/nodos/PPAI-UX-LOGIN.md) · [`brand-guidelines.md` v2.0](../../../docs/brand-guidelines.md) · referencias en [`docs/referencias/`](../../../docs/referencias/)
> **Usuario principal:** Marcelo Gómez, Encargado de Bolsines. Entra varias veces por día, desde la terminal del depósito o desde la tablet.
> **Alcance:** autenticación **simulada en el front** con un contrato listo para conectarse al login real de `feature/backend`.

---

## 1. Aesthetic Persona & Tone

- **Arquetipo visual:** _Tactile Object Showcase_ — una pantalla casi vacía, ordenada como una ficha técnica suiza, donde el único protagonista es **un objeto físico creíble**: el bolsín del moodboard, en 3D, como si estuviera apoyado en el mostrador del depósito.
- **Tono:** sobrio y seguro. El formulario no compite: es corto, alineado y silencioso. La personalidad la pone el bolsín.
- **Sensación física:**
  - El bolsín se ve como un objeto de tela con volumen _clay 3D_: Elite Blue con cierre, tirador y correas en Volt Lime.
  - Flota apenas, como respirando; reacciona cuando Marcelo escribe.
  - Al entrar, **el bolsín se abre y la cámara entra en él**: la app "sale de adentro del bolsín". Es la firma de la marca y pasa una sola vez por sesión.
- **Qué se evita:** login social (Google, Apple), "Crear cuenta", fondos con gradiente, ilustraciones genéricas, textos de bienvenida largos.

---

## 2. Visual Hierarchy & Scanning Pattern

### Desktop (pantallas anchas)

Composición dividida, como la referencia de desktop:

1. **Primer impacto — el bolsín (izquierda, ~45%):** panel redondeado en Blue Mist con grano, el bolsín 3D centrado y flotando.
2. **Segundo impacto — el título (derecha):** _Ingresá al_ / _sistema de bolsines_, grande, alineado a la izquierda de la columna del formulario.
3. **Tercer impacto — el formulario:** Usuario, Contraseña e **Ingresar** (CTA Elite Blue a todo el ancho de la columna).
4. **Periferia:** isotipo keycap "B" arriba a la derecha y una línea de ayuda discreta debajo del CTA.

### Mobile y tablet en vertical

Composición apilada, como la referencia de mobile:

1. **Bolsín arriba** (~40% de la altura), encima del título y los controles.
2. **Título** grande.
3. **Campos y CTA** anchos, al alcance del pulgar.
4. Cuando el teclado del celular se abre, el bolsín se achica para que el botón **Ingresar** siga visible.

---

## 3. User Journeys & Interactions

### Flujo principal (CU 5 — Iniciar sesión)

1. Marcelo abre el sistema. Si no tiene sesión, cualquier ruta interna lo lleva a `/login`.
2. La pantalla entra en orden: aparece el panel, el bolsín "cae" suavemente a su lugar y después el título y el formulario. El foco queda en **Usuario**.
3. Al tocar un campo, el bolsín gira levemente hacia el formulario, como si mirara.
4. Escribe usuario y contraseña. Puede mostrar u ocultar la contraseña.
5. Presiona **Ingresar** (o Enter). El botón pasa a "Ingresando…" y el tirador del cierre empieza a moverse.
6. **Credenciales válidas:**
   1. El cierre se abre de punta a punta.
   2. La boca del bolsín se abre y deja ver el interior oscuro.
   3. El formulario se retira y la cámara entra en la abertura hasta que la pantalla queda en Tinta.
   4. Aparece la app (pantalla de seguimiento) con su propia entrada.
   - Cualquier clic o tecla durante la animación la completa al instante.
7. Si Marcelo ya tenía sesión y entra a `/login`, se lo lleva directo a la app sin pasar por el formulario.

### Flujos alternativos

- **A1 — Campos vacíos:** al enviar, se marca el campo vacío con un mensaje debajo y el foco va a ese campo. No se llama al servicio.
- **A2 — Credenciales incorrectas:** el bolsín hace un gesto corto de "no"; aparece un único mensaje arriba del botón (_"Usuario o contraseña incorrectos."_) sin decir cuál falló; la contraseña se vacía y recibe el foco; el usuario se conserva.
- **A3 — Sin conexión / servidor caído:** mensaje _"No pudimos conectar con el servidor. Probá de nuevo."_; los datos se conservan y el botón vuelve a estar disponible.
- **A4 — El dispositivo no soporta 3D:** se muestra una imagen estática del bolsín con la misma composición. El login funciona igual; la entrada a la app es un fundido.
- **A5 — Movimiento reducido activado en el sistema:** el bolsín queda quieto, sin flotación ni giros; al ingresar, la app aparece con un fundido corto.

### Cierre de sesión (CU 6)

Fuera del alcance de esta pantalla, pero el mock lo soporta: al cerrar sesión desde la app se vuelve a `/login`, y el bolsín aparece cerrado otra vez.

---

## 4. Complete UI State Catalog

| Estado                         | Comportamiento esperado                                                                                                                                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Initial / Entrance**         | Panel y fondo visibles al instante. El bolsín entra cayendo unos píxeles y asentándose; después título y campos aparecen en secuencia corta. El formulario es usable desde el primer momento: ninguna animación bloquea escribir. |
| **Carga de la escena 3D**      | Mientras se carga el bolsín 3D se ve su imagen estática en el mismo lugar y tamaño; el cambio a 3D es un fundido imperceptible, sin saltos de layout.                                                                             |
| **Idle (reposo)**              | El bolsín flota lento y gira apenas. Campos vacíos con su label visible arriba.                                                                                                                                                   |
| **Foco en un campo**           | Anillo de foco Elite Blue en el campo; el bolsín gira hacia el formulario.                                                                                                                                                        |
| **Populated**                  | Campos con datos; el botón de mostrar contraseña disponible.                                                                                                                                                                      |
| **Loading (enviando)**         | Botón en estado "Ingresando…" con spinner, deshabilitado para evitar doble envío; campos en solo lectura; el tirador del cierre se mueve.                                                                                         |
| **Error de validación (A1)**   | Borde rojo y mensaje debajo del campo vacío.                                                                                                                                                                                      |
| **Error de credenciales (A2)** | Gesto de "no" del bolsín; mensaje único arriba del CTA, anunciado a lectores de pantalla.                                                                                                                                         |
| **Error de red (A3)**          | Mensaje de conexión arriba del CTA con la acción de reintentar en el mismo botón.                                                                                                                                                 |
| **Success / Transición**       | Secuencia de apertura y entrada al bolsín (≤ 1.4 s), salteable. Termina en la app.                                                                                                                                                |
| **Sin 3D (A4)**                | Imagen estática del bolsín; transición final con fundido.                                                                                                                                                                         |
| **Movimiento reducido (A5)**   | Todo estático; transiciones instantáneas o fundido corto.                                                                                                                                                                         |
| **Interactive**                | Botón keycap 3D: se eleva al pasar el mouse y se hunde al presionar. Inputs: borde más oscuro al pasar el mouse. Foco visible en todo control al navegar con teclado.                                                             |

---

## 5. Datos del usuario demo (mock)

| Usuario        | Contraseña | Resultado                                                              |
| -------------- | ---------- | ---------------------------------------------------------------------- |
| `mgomez`       | `bolsines` | Ingresa como **Marcelo Gómez**, Encargado de Bolsines, **CM Córdoba**. |
| `error`        | cualquiera | Simula servidor caído (A3), para poder probar ese estado.              |
| cualquier otro | cualquiera | Credenciales incorrectas (A2).                                         |

La respuesta simulada demora un poco menos de un segundo para que los estados de carga se puedan ver y probar. Las credenciales demo se muestran en la línea de ayuda solo en modo desarrollo.

---

## 6. Fuera de alcance

- Login real contra el backend (se conecta cuando exista `POST /api/auth/login`).
- Recuperar contraseña, alta de usuarios, login social.
- La pantalla de seguimiento: después del login se llega a una página temporal de la app que confirma la sesión (CM y nombre del empleado) con opción de cerrar sesión.
