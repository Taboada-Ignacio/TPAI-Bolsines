# Tips para Diagramas de Secuencia y Estática

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento funciona como una guía práctica para el modelado en 
Diseño de Sistemas de Información
, enfocándose en alinear la 
vista dinámica
 de los diagramas de secuencia con la 
vista estática
 de las clases. Explica de manera detallada cómo resolver situaciones cotidianas del diseño orientado a objetos, tales como 
recuperar y filtrar información
, identificar al 
usuario activo en la sesión
 y aplicar correctamente el 
patrón creador
 para instanciar objetos dependientes. Asimismo, detalla la importancia de delegar responsabilidades mediante el 
principio de experto en información
, asegurar la 
visibilidad y navegación
 adecuada entre clases, y diferenciar con precisión las funciones que corresponden a las 
clases de control o gestores
 frente a las 
clases de entidad
. En definitiva, el texto ofrece reglas estandarizadas y criterios fundamentales para garantizar la 
consistencia estructural
 y el uso correcto de patrones de diseño en el desarrollo de software.
User
:
Necesito que me des todos los tips sobre hacer diagrama de secuencia y la vista estática necesito saber cómo identificar cómo buscar cómo sacar el usuario cuando una clase pertenece a otra clase cómo hacer para buscar la información cómo hacer para incrementar algo cómo hago para saber cuándo se crea una clase de la otra clase cómo saber qué métodos poner cuándo se ponen los métodos de control
Gemini
:
[cite_start]A partir de las guías de la cátedra de 
Diseño de Sistemas de Información
, te presento una recopilación estructurada con los mejores 
tips y reglas claras
 para modelar la vista dinámica (Diagrama de Secuencia) y su correspondencia con la vista estática (Diagrama de Clases de Análisis)[cite: 1, 2]:
--------------------------------------------------------------------------------

#### 1. ¿Cómo buscar información en el sistema?

Cuando el caso de uso requiere recuperar datos para mostrarlos o para que el actor seleccione algo, se aplican dos dinámicas simplificadas según el escenario:
[cite_start]
Búsqueda de todos los objetos para selección:
 * 
Dinámica:
 El 
Gestor
 (clase de control) envía un mensaje de búsqueda a la clase correspondiente (por ejemplo, 
buscarTiposSR()
)[cite: 58, 28]. [cite_start]Luego, itera sobre la colección de objetos pidiendo el atributo identificador mediante un mensaje repetitivo (indicado con un asterisco 
*getNombre()
) para que la pantalla los liste y el usuario pueda elegir uno[cite: 28].
[cite_start]
Vista Estática:
 El 
Gestor
 debe tener el método de búsqueda (
buscarTiposSR()
) y la clase Entidad el método descriptor (
getNombre()
)[cite: 28, 58].
Búsqueda bajo un criterio o filtro específico:
[cite_start]
Dinámica:
 Si necesitas buscar objetos que cumplan una condición (ej. buscar un 
Estado
 cuyo nombre sea "Pte. Análisis"), el 
Gestor
 interactúa con la Entidad enviándole el criterio (
buscarEstadoParaAsignar()
)[cite: 28]. [cite_start]Mediante un bucle o recorrido, se le pregunta polimórficamente a cada objeto si cumple la condición utilizando un método de validación (ej. 
*esPteAnálisis()
)[cite: 28].
[cite_start]
Vista Estática:
 La clase Entidad incorpora la responsabilidad de autoevaluarse con métodos booleanos del tipo 
esTuMarca()
 o 
esEstadoActual()
[cite: 19, 40].
--------------------------------------------------------------------------------

#### 2. ¿Cómo obtener el usuario logueado en la sesión?

[cite_start]El sistema frecuentemente necesita conocer qué usuario está operando para registrar auditorías, responsabilidades o asignaciones automáticas[cite: 19, 28].
La regla de oro:
 El 
Gestor
 no asume mágicamente quién es el usuario. [cite_start]Debe solicitárselo explicitamente a la sesión que se encuentra activa[cite: 28].
[cite_start]
Dinámica en el diagrama:
 1. El 
Gestor
 se envía un mensaje interno: 
obtenerUsuarioLogueado()
[cite: 28].
2. Inmediatamente, el 
Gestor
 le envía un mensaje al objeto de la clase de análisis 
Sesion
 (que represente la sesión activa): 
getUsuarioSesion()
 o 
conocerUsuario()
.
3. El objeto 
Sesion
 navega hacia el 
Usuario
 vinculado y de allí se obtiene el 
Empleado
 o rol correspondiente.
--------------------------------------------------------------------------------

#### 3. ¿Cómo saber cuándo se crea una clase a partir de otra? (Patrón Creador)

[cite_start]Para decidir qué objeto debe invocar el constructor (
new()
) de otro, debes aplicar estrictamente el 
Patrón GRASP Creador
[cite: 21, 28]. [cite_start]Asignamos a la Clase B la responsabilidad de crear a la Clase A si se cumple que[cite: 21]:
[cite_start]B agrega o contiene los objetos de A (Relación Todo-Parte)[cite: 21].
[cite_start]B tiene los datos de inicialización que serán transmitidos a A al momento de crearse (B es un experto en información respecto a la creación de A)[cite: 21].
Ejemplos típicos en los modelos de la cátedra:
1
.
[cite_start]
Estructura Todo-Parte (Composición/Agregación):
 Al registrar un 
Festival
 que contiene 
Días de Festival
, el 
Gestor
 crea primero el objeto "Todo" (
Festival
)[cite: 14, 15]. [cite_start]Luego, el 
Gestor
 le delega al propio 
Festival
 la responsabilidad de crear sus partes enviándole el mensaje 
crearDiaFestival()
, y es el objeto 
Festival
 quien ejecuta el 
new()
 de 
DiaFestival
[cite: 15, 28].
2
.
[cite_start]
Creación con Cambio de Estado:
 Al crear una nueva 
SolicitudDeRequerimiento (SR)
, esta nace con un estado inicial[cite: 7, 28]. [cite_start]El 
Gestor
 ejecuta el constructor de la 
SolicitudDeRequerimiento
 pasándole los parámetros[cite: 28, 29]. [cite_start]Inmediatamente, en el nacimiento, el objeto 
SolicitudDeRequerimiento
 asume la responsabilidad de crear su propio histórico invocando internamente el método 
crearCambioEstado()
, el cual hace el 
new()
 de la clase 
CambioEstadoSR
[cite: 28, 29].
--------------------------------------------------------------------------------

#### 4. ¿Cómo incrementar un valor o modificar información?

[cite_start]Las modificaciones sobre los atributos propios de las entidades siguen el principio de 
Experto en Información
: la clase que posee los datos es la que debe modificarlos[cite: 22].
Modificación masiva bajo un criterio (ej. Incrementar precios un 10% a una marca):
1
.
[cite_start]El 
Gestor
 recibe el porcentaje desde la pantalla (
tomar%()
) e inicia el proceso llamando a su propio método 
incrementarPrecio()
[cite: 40].
2
.
[cite_start]El 
Gestor
 abre un fragmento combinado de tipo 
Loop (Recorrer productos)
[cite: 40].
3
.
[cite_start]Para cada objeto que corresponde a la marca, el 
Gestor
 le ordena calcular el incremento enviándole un mensaje: 
calcularIncremento()
[cite: 40].
4
.
[cite_start]Finalmente, se invoca al método modificador (
setPrecio()
) sobre la Entidad para que actualice internamente el valor de su atributo[cite: 40].
[cite_start]
En la vista estática:
 Esto implica que la Entidad debe reflejar tanto el método de cálculo (
calcularIncremento()
) como el método de seteo (
setPrecio()
) en su sección de operaciones[cite: 40].
--------------------------------------------------------------------------------

#### 5. ¿Cuándo una clase pertenece a otra? (Visibilidad y Estática)

[cite_start]Para que en el Diagrama de Secuencia un objeto pueda enviarle un mensaje a otro, 
debe tener visibilidad sobre él
 (debe "verlo")[cite: 5].
[cite_start]
En la vista dinámica:
 Si el objeto 
X
 le envía un mensaje a 
Y
, significa que existe un canal de comunicación[cite: 5].
En la vista estática (Diagrama de Clases):
 Esto se traduce obligatoriamente en una 
relación de asociación, agregación o composición
 dirigida desde la clase X hacia la clase Y, definiendo explícitamente la 
multiplicidad
 y la 
navegabilidad
 (flecha que indica que X conoce a Y). Si la multiplicidad es 
0..*
, el objeto origen maneja una colección o arreglo de objetos del destino.
--------------------------------------------------------------------------------

#### 6. ¿Qué métodos poner y cuándo usar métodos de control?


#### Métodos de Control (Clases Gestor)

[cite_start]Las clases de control (
Gestor
) actúan como mediadoras entre la interfaz de usuario y el dominio (entidades)[cite: 58]. [cite_start]Se encargan de coordinar y dirigir el flujo del caso de uso[cite: 7].
[cite_start]
¿Cuándo se ponen?
 Se colocan al inicio del diagrama de secuencia para recibir los estímulos del actor a través de la pantalla[cite: 28].
Nombres estándar:
 Utilizan verbos de acción y control del flujo de la interfaz:
[cite_start]
opcionReg...()
 / 
habilitarVentana()
 / 
nuevo...()
 (Inicio del CU)[cite: 28].
[cite_start]
tomarDatos...()
 / 
tomarSeleccion...()
 (Cuando el actor ingresa o elige datos)[cite: 28].
[cite_start]
validar...()
 (Para coordinar reglas de negocio complejas antes de guardar)[cite: 28].
[cite_start]
tomarConfirmacionRegistro...()
 y 
finCU()
 (Para el cierre y persistencia)[cite: 28].

#### Métodos de Entidad (Clases de Negocio)

Representan el comportamiento intrínseco de los conceptos del negocio.
[cite_start]
¿Cuándo se ponen?
 Se añaden a las entidades cuando el 
Gestor
 les delega una responsabilidad porque ellas tienen la información (Patrón Experto)[cite: 22].
Nombres estándar:
 Verbos que describen comportamiento interno:
Consultores/Filtros:
esEstadoActual()
, 
esTuMarca()
, 
validarFecha()
.
[cite_start]
Acceso/Getters:
getNombre()
, 
getPrecio()
, 
obtenerEstadoActual()
[cite: 28, 40].
[cite_start]
Modificadores/Setters:
setPrecio()
, 
setFechaHoraFin()
, 
setEstado()
[cite: 19, 40].
[cite_start]
Operacionales:
calcularIncremento()
, 
crearCambioEstado()
, 
validarDuplicación()
[cite: 14, 28, 40].
--------------------------------------------------------------------------------

#### 💡 Resumen de Tips Clave para el examen o entregas:

1
.
[cite_start]
Consistencia Estricta:
 Todo mensaje que llegue a una línea de vida de una clase en el diagrama de secuencia 
DEBE
 figurar como un método con la misma firma en esa clase dentro del diagrama de clases[cite: 26, 28].
2
.
[cite_start]
Atributos vs. Referencias:
 Al modelar la creación, diferencia los atributos 
por valor
 (los que digita el usuario, como un DNI o nombre) de los atributos 
por referencia
 (vínculos con otros objetos existentes que el usuario selecciona, como una categoría o marca)[cite: 7, 19].
3
.
[cite_start]
No saltes pasos de navegación:
 Si la clase 
A
 conoce a 
B
, y 
B
 conoce a 
C
, el 
Gestor
 no puede enviarle un mensaje directo a 
C
 a menos que esté asociado a él en el diagrama de clases[cite: 5]. [cite_start]Respeta la cadena de mensajes pidiéndole la información al experto intermedio[cite: 22].
