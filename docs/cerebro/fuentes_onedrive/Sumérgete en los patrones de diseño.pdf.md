# Sumérgete en los patrones de diseño.pdf

- **Ruta OneDrive:** `Sumérgete en los patrones de diseño.pdf`
- **Páginas totales:** 437 (extraídas: 30)

---

## Página 1



## Página 2

SumérSumérggeette en loe en loss
PPAATRTRONEONESSDEDE
DIDISEÑOSEÑOv2021-1.7
Comprado por Andy Jesus Macias Gomez
xandyx2014@gmail.com (#44357)

## Página 3

Unas palabras sobre
derechos de autor
¡Hola! Mi nombre es Alexander Shvets.
Soy el autor del libro Sumérgete en los
patrones de diseño y del curso online
Dive Into Refactoring.
Este libro es para tu uso personal. P or
favor, no lo compartas con terceras pe-
rsonas, a e xcepción de los miembros de tu familia. Si deseas
compartir el libro con un amigo o colega, compra y envíale una
nueva copia. También puede comprar una licencia para todo su
equipo o para toda la empresa.
Todas las ganancias de las v entas de mis libros y cursos se
dedican al desarrollo de Refactoring.Guru. Cada copia vendida
ayuda inmensamente al proyecto y acerca un poco más el mo-
mento del lanzamiento de un nuevo libro.
 Alexander Shvets, Refactoring.Guru, 2019
 support@refactoring.guru
 Ilustraciones: Dmitry Zhart
 Traducción: Álvaro Montero
 Edición: Jorge F. Ramírez Ariza

## Página 4

Dedico este libro a mi esposa, Maria. Si no hu-
biese sido por ella, lo habría terminado unos
30 años más tarde.

## Página 5

Índice de contenido
Índice de contenido............................................................................................... 4
Cómo leer este libro.............................................................................................. 6
FUNDAMENTOS DE LA POO .................................................................................. 7
Conceptos básicos de POO ...............................................................8
Los pilares de la POO ...................................................................... 13
Relaciones entre objetos................................................................ 21
INTRODUCCIÓN A LOS PATRONES DE DISEÑO............................................... 27
¿Qué es un patrón de diseño?...................................................... 28
¿Por qué debería aprender sobre patrones? ........................... 33
PRINCIPIOS DE DISEÑO DE SOFTWARE .......................................................... 34
Características del buen diseño................................................... 35
Principios del diseño..................................................................................... 39
§ Encapsula lo que varía................................................................ 40
§ Programa a una interfaz, no a una implementación ........ 45
§ Favorece la composición sobre la herencia......................... 50
Principios SOLID ............................................................................................ 54
§ S: Principio de responsabilidad única.................................... 55
§ O: Principio de abierto/cerrado................................................ 57
§ L: Principio de sustitución de Liskov...................................... 61
§ I: Principio de segregación de la interfaz............................. 68
§ D: Principio de inversión de la dependencia....................... 71
4 Índice de contenido
#44357
xandyx2014@gmail.com (#44357)

## Página 6

EL CATÁLOGO DE PATRONES DE DISEÑO ........................................................ 75
Patrones creacionales ................................................................................. 76
§ Factory Method / Método fábrica ............................................. 78
§ Abstract Factory / Fábrica abstracta........................................ 95
§ Builder / Constructor...................................................................111
§ Prototype / Prototipo ..................................................................132
§ Singleton / Instancia única .......................................................148
Patrones estructurales.............................................................................. 158
§ Adapter / Adaptador....................................................................161
§ Bridge / Puente.............................................................................175
§ Composite / Objeto compuesto................................................192
§ Decorator / Decorador ................................................................206
§ Facade / Fachada.........................................................................226
§ Flyweight / Peso mosca .............................................................237
§ Proxy................................................................................................252
Patrones de comportamiento................................................................... 266
§ Chain of Responsibility / Cadena de responsabilidad ......270
§ Command / Comando .................................................................289
§ Iterator / Iterador .........................................................................310
§ Mediator / Mediador ...................................................................326
§ Memento / Recuerdo...................................................................340
§ Observer / Observador................................................................358
§ State / Estado................................................................................374
§ Strategy / Estrategia ...................................................................391
§ Template Method / Método plantilla.....................................406
§ Visitor / Visitante..........................................................................420
Conclusión ......................................................................................................... 436
5 Índice de contenido
#44357
xandyx2014@gmail.com (#44357)

## Página 7

Cómo leer este libro
Este libro contiene las descripciones de 22 patrones de diseño
clásicos formulados por la “banda de los cuatro” (o simpleme-
nte GoF, por sus siglas en inglés) en 1994.
Cada capítulo explora un patrón par ticular. Por lo tanto, pue-
des leerlo de principio a fin, o ir eligiendo los patrones que t e
interesan.
Muchos patrones están relacionados, por lo que puedes saltar
fácilmente de un t ema a otro utilizando varios punt os de en-
lace. Al final de cada capítulo hay una lista de enlac es entre
el patrón actual y otros. Si v es el nombre de un patrón que
aún no habías vist o, sigue le yendo, este patrón apare cerá en
alguno de los capítulos siguientes.
Los patrones de diseño son universales. Por ello, todos los eje-
mplos de código de este libro están escritos en un pseudocódi-
go que no restringe el material a un lenguaje de programación
particular.
Antes de estudiar los patrones, puedes refrescar tu memoria
repasando los términos clave de la programación orientada a
objetos. En ese capítulo también se e xplican los fundamen-
tos de los diagramas UML (lenguaje unificado de modelado ),
lo que resulta de utilidad porque hay un mont ón de ellos en
el libro. Por supuesto, si ya sabes t odo esto, puedes proceder
directamente a aprender sobre patrones.
6 Cómo leer este libro
#44357
xandyx2014@gmail.com (#44357)

## Página 8

FUNDAMENTOS
DE LA POO
#44357
xandyx2014@gmail.com (#44357)

## Página 9

Conceptos básicos de POO
La Programación orientada a objetos (POO) es un paradigma ba-
sado en el concepto de envolver bloques de inf ormación y su
comportamiento relacionado, en lotes especiales llamados ob-
jetos, que se construyen a partir de un grupo de “planos” defi-
nidos por un programador, que se denominan clases.
Objetos, clases
¿Te gustan los gat os? Espero que sí, porque v oy a int entar
explicar los c onceptos de P OO utilizando varios ejemplos
con gatos.
Esto es un diagrama de clases en UML. Encontrarás muchos diagramas
como éste en el libro. Los nombres de las cosas en los diagramas están en
inglés, como lo estarían en un código real. Sin embargo, los comentarios y
las notas pueden estar en español.
8 Fundamentos de la POO / Conceptos básicos de POO
#44357
xandyx2014@gmail.com (#44357)

## Página 10

Digamos que tienes un gato llamado Óscar. Óscar es un objeto,
una instancia de la clase Gato . Cada gato tiene varios atribu-
tos estándar: nombre, sexo, edad, peso, color, comida favorita,
etc. Estos son los campos de la clase.
En este libro puedo referirme a los nombres de las clases
en español, aunque apare zcan en diagramas o en c ódi-
go en inglés (como hice con la clase Gato ). Quiero que
leas el libro c omo si tuviéramos una c onversación hab-
lada entre amigos. No quiero que t e topes con palabras
extrañas cada v ez que t enga que hac er referencia a al-
guna clase.
Además, todos los gatos se comportan de forma similar: respi-
ran, comen, corren, duermen y maúllan. Estos son los métodos
de la clase. Colectivamente, podemos referirnos a los campos
y los métodos como los miembros de su clase.
La inf ormación almac enada dentro de los campos del
objeto suele denominarse estado, y t odos los mét odos
del objeto definen su comportamiento.
9 Fundamentos de la POO / Conceptos básicos de POO
#44357
xandyx2014@gmail.com (#44357)

## Página 11

Los objetos son instancias de clases.
Luna, la gata de tu amigo, también es una instancia de la clase
Gato . Tiene el mismo grupo de atribut os que Óscar. La dife-
rencia está en los valores de estos atributos: su sexo es hemb-
ra, tiene un color diferente y pesa menos.
Por lo tanto, una clase es como un plano que define la estruc-
tura de los objetos, que son instancias concretas de esa clase.
Jerarquías de clase
Todo va muy bien mientras hablamos de una sola clase. Natu-
ralmente, un programa real c ontiene más de una clase. Algu-
nas de esas clases pueden estar organizadas en jerarquías de
clase. Veamos lo que esto significa.
10 Fundamentos de la POO / Conceptos básicos de POO
#44357
xandyx2014@gmail.com (#44357)

## Página 12

Digamos que tu v ecino tiene un perro llamado Fido . Resul-
ta que perros y gat os tienen mucho en c omún: nombre, sexo,
edad y color, son atributos tanto de perros como de gatos. Los
perros pueden respirar, dormir y correr igual que los gatos, por
lo que podemos definir la clase base Animal que enumerará
los atributos y comportamientos comunes.
Diagrama UML de una jerarquía de clases. Todas las clases de este
diagrama son parte de la jerarquía de clases Animal .
Una clase padre, c omo la que acabamos de definir , se deno-
mina superclase. Sus hijas son las subclases. Las subclases he-
11 Fundamentos de la POO / Conceptos básicos de POO
#44357
xandyx2014@gmail.com (#44357)

## Página 13

redan el estado y el c omportamiento de su padre y se limitan
a definir atributos o comportamientos que son diferentes. Por
lo tanto, la clase Gato contendrá el mét odo maullar y, la
clase Perro , el método ladrar .
Asumiendo que t enemos una tarea relacionada, podemos ir
más lejos y e xtraer una clase más genérica para t odos los
Organismo vivos, que se c onvertirá en una superclase para
Animal y Planta . Tal pirámide de clases es una jerarquía.
En esta jerarquía, la clase Gato lo hereda todo de las clases
Animal y Organismo .
En un diagrama UML las clases se pueden simplificar si es más importante
mostrar sus relaciones que sus contenidos.
Las subclases pueden sobrescribir el c omportamiento de los
métodos que heredan de clases padre. Una subclase puede su-
stituir completamente el comportamiento por def ecto o limi-
tarse a mejorarlo con material adicional.
12 Fundamentos de la POO / Conceptos básicos de POO
#44357
xandyx2014@gmail.com (#44357)

## Página 14

Los pilares de la POO
La programación orientada a objet os se basa en cuatro pi-
lares, c onceptos que la dif erencian de otros paradigmas de
programación.
Abstracción
La mayoría de las v eces, cuando creas un programa c on POO,
das forma a los objet os del programa c on base a objet os del
mundo real. Sin embargo , los objetos del programa no repre-
sentan a los originales con una precisión del 100 % (y rara vez
es necesario que lo hagan). En su lugar, tus objetos tan solo co-
pian atributos y comportamientos de objetos reales en un c o-
ntexto específico, ignorando el resto.
Por ejemplo, una clase Avión probablemente podría e xistir
en un simulador de vuelo y en una aplicación de reserva de
vuelos. Pero, en el primer caso , contendría información rela-
13 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 15

cionada con el propio vuelo, mientras que en la segunda clase
sólo habría que pre ocuparse del mapa de asient os y de los
asientos que estén disponibles.
Distintos modelos del mismo objeto del mundo real.
La Abstracción es el modelo de un objet o o f enómeno del
mundo real, limitado a un contexto específico, que representa
todos los datos relevantes a este contexto con gran precisión,
omitiendo el resto.
Encapsulación
Para arrancar el mot or de un aut o, tan solo debes girar una
llave o pulsar un bot ón. No ne cesitas conectar cables bajo el
capó, rotar el cigüeñal y los cilindros, e iniciar el ciclo de po-
14 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 16

tencia del motor. Estos detalles se esc onden bajo el capó del
auto. Sólo tienes una int erfaz simple: un int erruptor de ence-
ndido, un volante y unos pedales. Esto ilustra el modo en que
cada objeto cuenta con una interfaz: una par te pública de un
objeto, abierta a interacciones con otros objetos.
La encapsulación es la capacidad que tiene un objet o de es-
conder partes de su estado y c omportamiento de otros obje-
tos, exponiendo únicamente una interfaz limitada al resto del
programa.
Encapsular algo significa hac erlo privado y, por ello , acce-
sible únicamente desde dentro de los mét odos de su propia
clase. Exist e un modelo un poc o menos restrictiv o llamado
protegido que hace que un miembro de una clase también
esté disponible para las subclases.
Las interfaces y las clases y mét odos abstractos de la may o-
ría de los lenguajes de programación se basan en c onceptos
de abstracción y encapsulación. En los lenguajes modernos de
programación orientada a objet os, el me canismo de la int er-
faz (declarado normalmente con la palabra clav e interface
o protocol ) te permite definir contratos de interacción entre
objetos. Ésta es una de las raz ones por las que las int erfaces
sólo se interesan por los comportamientos de los objetos, y ta-
mbién el motiv o por el que no puedes de clarar un campo en
una interfaz.
15 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 17

El hecho de que la palabra interfaz se refiera a la par te
pública de un objeto, mientras que también existe el tipo
interface en la mayoría de los lenguajes de programa-
ción, resulta muy confuso. Estoy contigo.
Imagina que tienes una interfaz TransporteAéreo con un mé-
todo vuelo(origen, destino, pasajeros) .
Diagrama UML de varias clases implementando una interfaz.
Al diseñar un simulador de transporte aéreo, puedes restringir
la clase Aeropuerto para que sólo funcione c on objetos que
16 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 18

implementan la int erfaz TransporteAéreo . Después de est o,
tendrás la certeza de que cualquier objet o pasado a un obje-
to del aeropuerto, ya sea un Avión , un Helicóptero o hasta
un maldito GrifoDomesticado si quieres, podrá aterrizar o de-
spegar de este tipo de aeropuerto.
Puedes cambiar la implementación del mét odo volar en
esas clases del modo que quieras. Siempre y cuando la firma
del método sea la misma que se de claró en la int erfaz, todas
las instancias de la clase Aeropuerto pueden funcionar bien
con tus objetos voladores.
Herencia
La herencia es la capacidad de crear nuevas clases sobre otras
existentes. La principal v entaja de la herencia es la reutiliza-
ción de código. Si quieres crear una clase ligeramente diferen-
te a una ya existente, no hay necesidad de duplicar el código.
En su lugar, extiendes la clase existente y colocas la funciona-
lidad adicional dentro de una subclase resultant e que hereda
los campos y métodos de la superclase.
La consecuencia del uso de la herencia es que las subclases
tienen la misma interfaz que su clase padre. No puedes escon-
der un método en una subclase si se declaró en la superclase.
También debes implementar todos los métodos abstractos, au-
nque no tengan sentido en tu subclase.
17 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 19

Diagrama UML de extensión de una única clase en comparación con la
implementación de múltiples interfaces al mismo tiempo.
En la mayoría de los lenguajes de programación una subclase
puede extender una única superclase. Por otro lado, cualquier
clase puede implementar varias int erfaces al mismo tiempo .
Pero, como expliqué antes, si una superclase implementa una
interfaz, todas sus subclases deben implementarla también.
Polimorfismo
Veamos algunos ejemplos c on animales. L a may oría de los
Animal puede emitir sonidos. P odemos anticipar que t odas
las subclases ne cesitarán sobrescribir el mét odo base
emitirSonido para que cada subclase pueda emitir el soni-
do correcto; por lo tanto, podemos declararlo abstracto directa-
mente. Esto nos permite omitir cualquier implementación por
defecto del mét odo en la superclase, pero fuerza a t odas las
subclases a establecer las suyas propias.
18 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 20

Imagina que ponemos varios gat os y perros dentro de una
gran bolsa. Después, con los ojos tapados, vamos sacando los
animales de la bolsa, de uno en uno . Al sacar un animal, no
sabemos con seguridad lo que es. P ero si lo abrazamos lo su-
ficiente, el animal emitirá un sonido espe cífico de alegría, de-
pendiendo de su clase concreta.
19 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 21

El programa no c onoce el tipo c oncreto del objet o contenido
dentro de la variable a , pero, gracias al mecanismo especial
llamado polimorfismo, el programa puede rastrear la subclase
del objeto cuyo método está siendo ejecutado, y ejecutar el co-
mportamiento adecuado.
El polimorfismo es la capacidad que tiene un programa de de-
tectar la verdadera clase de un objet o e invocar su impleme-
ntación, incluso aunque su tipo real sea desc onocido en el
contexto actual.
También puedes pensar en el polimorfismo c omo la capaci-
dad de un objeto para “fingir” ser otra cosa, normalmente una
clase que extiende o una int erfaz que implementa. En nuest-
ro ejemplo, los perros y gat os de la bolsa fingen ser animales
genéricos.
bag = [newnew Cat(), newnew Dog()];1
2
foreachforeach (Animal a : bag)3
a.makeSound()4
5
// ¡Miau!6
// ¡Guau!7
20 Fundamentos de la POO / Los pilares de la POO
#44357
xandyx2014@gmail.com (#44357)

## Página 22

Relaciones entre objetos
Además de la herencia y la implementación, que ya vimos, hay
otros tipos de relaciones entre objet os de las que aún no
hemos hablado.
Dependencia
Dependencia en UML. El profesor depende de los materiales del curso.
La dependencia es el tipo de relación más básica y débil entre
clases. Existe una dependencia entre dos clases cuando ciertos
cambios en la definición de una clase puede pro vocar modifi-
caciones en otra. La dependencia ocurre normalmente cuando
utilizas nombres de clases concretas en tu código. Por ejemp-
lo, al especificar tipos en las firmas de un método, al instanciar
objetos mediant e llamadas al c onstructor, et c. Puedes hacer
más débil una dependencia haciendo que tu c ódigo dependa
de interfaces o clases abstractas en lugar de clases concretas.
Normalmente, un diagrama UML no muestra t odas las depe-
ndencias; hay demasiadas en cualquier c ódigo real. En lugar
de contaminar el diagrama c on dependencias, debes ser muy
selectivo y mostrar únicamente aquellas que son impor tantes
para lo que sea que estás comunicando.
21 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 23

Asociación
Asociación en UML. El profesor se comunica con los estudiantes.
La asociación es una relación en la que un objet o utiliza o in-
teractúa con otro. En diagramas UML, la relación de asocia-
ción se muestra mediante una flecha simple desde un objeto y
apuntando hacia el objeto que utiliza. Por cierto, es totalmen-
te normal tener una asociación bidire ccional. En este caso, la
flecha tiene una punta en cada e xtremo. La asociación puede
verse como un tipo espe cializado de dependencia, en la que
un objeto siempre tiene ac ceso a los objet os con los que in-
teractúa, mientras que la dependencia simple no establece un
vínculo permanente entre los objetos.
En general, se utiliza la asociación para representar algo como
un campo en una clase. El vínculo siempre está ahí, en cuan-
to a que siempre puedes pedir una orden para su cliente. Pero
no siempre tiene que ser un campo . Si estás modelando tus
clase desde una perspe ctiva de int erfaz, puede simplement e
indicar la presencia de un método que devolverá el cliente de
la orden.
Para asentar tu comprensión de la diferencia entre asociación
y dependencia, v eamos un ejemplo c ombinado. Imagina que
tenemos una clase Profesor :
22 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 24

Observa el método enseñar . Toma un argumento de la clase
Curso , que después se utiliza en el cuerpo del mét odo. Si
alguien cambia el mét odo obtenerConocimientos de la clase
Curso (es decir, si cambia su nombre o añade algún paráme-
tro requerido, etc.) nuestro c ódigo se desc ompondrá. Esto se
llama dependencia.
Ahora observa el campo Estudiante y cómo se utiliza en el
método enseñar . Podemos afirmar con seguridad que la clase
Estudiante también es una dependencia para el Profesor :
si el mét odo recordar cambia, el c ódigo de Profesor se
romperá. No obstant e, como el campo Estudiante siempre
está accesible para cualquier mét odo de Profesor , la clase
Estudiante no es sólo una dependencia, sino también una
asociación.
classclass ProfessorProfessor isis1
fieldfield Student student2
// ...3
methodmethod teach(Course c) isis4
// ...5
thisthis.student.remember(c.getKnowledge())6
23 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 25

Agregación
Agregación en UML. Los departamentos contienen profesores.
La agregación es un tipo especializado de asociación que rep-
resenta relaciones “uno a muchos”, “muchos a muchos” o “todo
a parte” entre múltiples objetos, mientras que una asociación
simple describe relaciones entre un par de objetos.
Normalmente, con la agre gación, un objet o “tiene” un grupo
de otros objetos y sirve como contenedor o colección. El com-
ponente puede existir sin el c ontenedor y puede vincularse a
varios contenedores al mismo tiempo . En UML, la relación de
agregación se muestra por una línea con un diamante vacío en
el lado del contenedor y una flecha en el extremo apuntando
hacia el componente.
Mientras hablamos de relaciones entre objetos, ten en cuenta
que UML representa relaciones entre clases. Esto significa que
un objeto universidad puede consistir en varios departamentos
aunque solo v eas un “bloque ” por cada entidad en el diagra-
ma. La notación UML puede representar cantidades en ambos
lados de las relaciones, pero no hay problema en omitirlas si
están claras por el contexto.
24 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 26

Composición
Composición en UML. La universidad consta de departamentos.
La composición es un tipo espe cífico de agre gación en la que
un objeto se compone de una o más instancias del otro. La di-
ferencia entre ésta y otras relaciones está en que el compone-
nte sólo puede e xistir como parte del contenedor. En UML, la
relación de composición se representa igual que la de agrega-
ción, pero con un diamante relleno en la base de la flecha.
Observa que muchas personas utilizan a menudo el t érmino
“composición” cuando en realidad se refieren tant o a la agre-
gación como a la composición. El ejemplo más notorio es el fa-
moso principio “escoge composición antes que herencia”. No es
que la gente ignore la diferencia, sino más bien que la palabra
“composición” (por ejemplo , “composición de objet os”) suena
más natural en el idioma inglés.
La visión global
Ahora que conocemos todos los tipos de relaciones entre ob-
jetos, veamos cómo se conectan entre sí. Esperemos que est o
te ayude a responder pre guntas como: “¿cuál es la dif erencia
entre agregación y composición?” o “¿la herencia es un tipo de
dependencia?”.
25 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 27

• Dependencia: La clase A puede v erse afectada por cambios en la
clase B.
• Asociación: El objet o A c onoce el objet o B. L a clase A depende
de B.
• Agregación: El objeto A conoce el objeto B y consiste en B. La clase
A depende de B.
• Composición: El objeto A conoce el objeto B, consiste en B y ges-
tiona el ciclo vital de B. La clase A depende de B.
• Implementación: La clase A define métodos declarados en la inte-
rfaz B. Los objetos A pueden tratarse c omo B. La clase A depende
de B.
• Herencia: La clase A hereda la int erfaz y la implementación de la
clase B, pero puede extenderla. El objeto A puede tratarse como B.
La clase A depende de B.
Relaciones entre objetos y clases: de la más débil a la más fuerte.
26 Fundamentos de la POO / Relaciones entre objetos
#44357
xandyx2014@gmail.com (#44357)

## Página 28

INTRODUCCIÓN
A LOS PATRONES
#44357
xandyx2014@gmail.com (#44357)

## Página 29

¿Qué es un patrón de diseño?
Los patrones de diseño son soluciones habituales a problemas
que ocurren con frecuencia en el diseño de software. Son como
planos prefabricados que se pueden personalizar para resolver
un problema de diseño recurrente en tu código.
No se puede elegir un patrón y copiarlo en el programa como
si se tratara de funciones o bibliot ecas ya preparadas. El pa-
trón no es una porción espe cífica de código, sino un c oncep-
to general para resolver un problema particular. Puedes seguir
los detalles del patrón e implementar una solución que encaje
con las realidades de tu propio programa.
A menudo los patrones se c onfunden con algoritmos porque
ambos conceptos describen soluciones típicas a problemas co-
nocidos. Mientras que un algoritmo siempre define un grupo
claro de ac ciones para lograr un objetiv o, un patrón es una
descripción de más alt o nivel de una solución. El c ódigo del
mismo patrón aplicado a dos programas distint os puede ser
diferente.
Una analogía de un algoritmo sería una re ceta de c ocina:
ambos cuentan con pasos claros para alcanzar una meta. P or
su parte, un patrón es más similar a un plano , ya que puedes
observar cómo son su resultado y sus funciones, pero el orden
exacto de la implementación depende de ti.
28 Introducción a los patrones de diseño / ¿Qué es un patrón de diseño?
#44357
xandyx2014@gmail.com (#44357)

## Página 30

¿En qué consiste el patrón?
La mayoría de los patrones se describe c on mucha formalidad
para que la gent e pueda reproducirlos en muchos c ontextos.
Aquí tienes las secciones que suelen estar presentes en la de-
scripción de un patrón:
• El propósito del patrón e xplica brevemente el problema y la
solución.
• La motivación explica en más detalle el problema y la solución
que brinda el patrón.
• La estructura de las clases muestra cada una de las par tes del
patrón y el modo en que se relacionan.
• El ejemplo de código en uno de los lenguajes de programación
populares facilita la asimilación de la idea que se esconde tras
el patrón.
Algunos catálogos de patrones enumeran otros detalles útiles,
como la aplicabilidad del patrón, los pasos de implementación
y las relaciones con otros patrones.
Clasificación de los patrones
Los patrones de diseño varían en su c omplejidad, nivel de de-
talle y escala de aplicabilidad al sist ema completo que se di-
seña. Me gusta la analogía de la c onstrucción de carret eras:
puedes hacer más segura una intersección instalando semáfo-


29 Introducción a los patrones de diseño / ¿Qué es un patrón de diseño?
#44357
xandyx2014@gmail.com (#44357)
