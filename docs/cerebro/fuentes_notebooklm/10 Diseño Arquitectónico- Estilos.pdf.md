# 10 Diseño Arquitectónico- Estilos.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El material explora los conceptos fundamentales del 
diseño de arquitecturas de software
, contrastando la estructura ordenada mediante estilos con el caos de la 
Big Ball of Mud
. Se detallan enfoques modernos como los 
microservicios
, que dividen las aplicaciones en componentes independientes bajo la premisa de que los equipos construyen y operan su propia tecnología. Asimismo, se examinan estructuras específicas como la 
arquitectura hexagonal
, la cual aísla la lógica central utilizando puertos y adaptadores para interactuar con elementos externos de forma flexible. Finalmente, el texto aborda las ventajas y complejidades de los 
sistemas distribuidos y asíncronos
, resaltando la importancia de la escalabilidad, la automatización y la adaptabilidad frente a los requerimientos cambiantes del negocio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aBBZK2ANOvJA5HblBQEmUqwPoYFvkdTbaA7Aax1CmeDWK2_773FjLbVaqkpntlQL4vydP7Y4C0eM5lnvarDRn2CTxkJcmo_QUR2L32rUtcOOrpa8GGJedHcIJlnF3CnIAHKSxVg=w1024-h768-v0?authuser=0)
Diseño de Arquitecturas de Software

## Universidad Tecnológica Nacional- Facultad Regional Córdoba Cátedra de Diseño de Sistemas de Información

Aristóteles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04OhBlb8qVO7lxYXbpWmdFS0lucgwEpK_6p6vuEalWdJLE22K4rnTUuo5TAx_KVnPDwIaeBMM5xMMqKADfIlskbG1jy1upZ4dEcGcDApOv_wcGL7t90iZaWNQa2CrCNSG0uTer=w588-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2T_UTvMcKWMWL5A8NPE7P4W9UVsftbNSFoiOA8EYS2egHv2XB8o5J-75trB5o4btSUDVZyRlmBwPN7cu6WUuRU2n6MK2x0vCpO2j9f6U1ZXCBTyHCIyt6NNIDZlNigNB4iZymCww=w138-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WrD92dKQtWAHVQZHYEcI63t4t-KeSikgS30E9aeZD6v3YJrq_r8izshLxBqVwgnb-0zGPt5u3tRQRdM3IasScbrLN8_o4JsPPSTe5mOenVk60hhFWQK_GJe8s-PiqphnqA0u6yA=w432-h432-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eVhF2BjYZGhMLkgkZwJowsz90yP26X3W9e2g55GChWOWqpIj5bb1ZX_cwrka2jQl__Xq3oIzpOh-hgWUJiXnz8vC_R0by35EFCxWPCCXnQKSfG_aNvKr8NXjqIEDk8XEqPKBU-w=w521-h521-v0?authuser=0)
Arquitecto arquitecta arquitecturas
ROL PROCESO Producto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29wo14sm2AlwjxF0HaY6gamQFFWJ1m-JFO9n-7Dmxu5TISmX_RIKufTLBd57zTf1VcIgO64t6K5kQyynn8Iq-jUQTwAhIEeR-BIuvW16uy9_CcfnlxlhPVrbDudluL7qYd83hxrw=w1280-h718-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1R7WzlHu3UQOAgk5c0Z2QxQKjY9HdA2G0uFaYO9Gk85GjENuSOxKfVw4wCa7MXlRiSG_61dJHSrDZyPpmdNuR8Q0PvU9bcHncvNFfuus3jemLu8p-PQMVlC0EUy-vmjBDL2sF7CA=w376-h565-v0?authuser=0)
Arquitectura de Software

#### E s t i l o s y P a t r o n e s A r q u i t e c t ó n i c o s

Patrones Arquitectónicos vs. Estilos Arquitectónicos

### La distinción no es tajante y existen ejemplos donde es difícil distinguirlos. A veces se los ve como sinónimos.


### Los patrones están en una escala menor que los estilos. Múltiples patrones pueden aparecer en un mismo diseño.


### Un sistema suele tener un estilo arquitectónico dominante.

Platónicos vs. Embebidos

## Platónicos: idealizados, se los ve en los libros y rara vez de igual forma en el código.


## Embebidos: se los ve en sistemas reales y a menudo violan las restricciones estrictas de los platónicos. La violación generalmente implica una gran compensación.

Estilo Arquitectónico
Un estilo arquitectónico define cómo organizar
componentes y cómo interactúan.
Establece un marco de referencia a partir del cual es
posible construir aplicaciones que comparten un
conjunto de atributos y características mediante las
cuales es posible identificarlos y clasificarlos.
Sirven para nombrar un diseño arquitectónico recurrente.
No determinan tecnología ni detalles de Implementación.
Se elige con base en necesidades como: escalabilidad,
mantenibilidad, rendimiento, integración
Patrón Arquitectónico
Expresa una organización estructural fundamental o esquema para sistemas de software. Proporciona un conjunto de
subsistemas predefinidos, especifica sus responsabilidades e
incluye reglas y pautas para organizar las relaciones entre ellos.
Ayudan a definir características básicas y el comportamiento de una aplicación.
Mejora la partición y promueve la reutilización del diseño, dando solución a problemas recurrentes.
Comprende un conjunto de principios que dan forma a una aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kMU_cDH_LZDgvox01MiybNs_DHEzqb9VavxLBytZgKLpzA3wVrFCwfF5wUdeeXyW066FveJD7jEU17VIsNQ07lA7mKPmoyxhTSdf8lPGWxd3Wvo6JUi-9T5ZFyHr8XuNqrU_r4A=w616-h347-v0?authuser=0)
Cuando no se aplican estilos, o no se mantienen en el
tiempo…

### L A A R Q U I T E C T U R A D E L A N O


### A R Q U I T E C T U R A … .

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KEakCUZQMiVgeTXlAda_ZSPMohr3c8VEixGpGq2HMBH4mXGIZvv41c-ov3UM1dZ4bslvOdrjLEGcB5BZ-bR1XhHkcNPCrHB5WF3jPh3I_ihaAQBSaxd1Y-sPVmTvlwXfMHewj2w=w553-h553-v0?authuser=0)
Big Ball of Mud
También conocida 
como 
Spagueti Architecture.
Es el estilo arquitectónico que tiene un producto cuando no se define una arquitectura.
Surge de un equipo que no tiene un plan sobre cómo se va a construir su producto.
Las partes del sistema a menudo están altamente acopladas, el mantenimiento es muy difícil.
Explicar cómo encaja todo a alguien nuevo es casi imposible.
Taxonomía de los Estilos Arquitectónicos
¿En cuántas aplicaciones separo el sistema y cómo?
Escalabilidad organizacional y técnicaDescomposición
¿Cómo organizo el sistema por dentro?
¿Cómo se escribe el código? - MantenibilidadEstructura Interna
¿Cómo se organizan físicamente? – Topología física
¿Quién inicia comunicación? ¿Cómo se conectan nodos?Distribución
¿Cómo fluye la información?
¿Cómo interactúan entre componentes?Comunicación
¿Cómo fluye y se transforma la información internamente dentro de un componente?
Transforma datos.
Procesamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv371t_5Br0vvv_F16fTwWMNGAenMsMr_G_KF_FWvI9W0GD5GhpNs4IEx-5LYtyqK0shRKvzl1ia8a2QPQVlt41S4Yq63hopZhfPTx1WpXCalTHp7u5mz4UqOULoKm-VkBb-0rBH=w1280-h1153-v0?authuser=0)
Estilos Arquitectónicos: Mapa mental
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2a1klbCUD37w-GIXIWwYSnXxkUiqX0Y17Dp7LZ47__vpgyN-GTqiqy3GLu6-FIE1P4aHj2PFA9yln_yJYoGcEI2-iPQBgc1QhT2nL8KRVoxKf6rNHbkm-IU0qbqXXMyyRHUM7y=w1280-h1153-v0?authuser=0)

## Estilos Arquitectónicos para Descomposición que vamos a desarrollar

D es
co m
p o
si ci
ó n

## Monolítico


## Modulith (Modular Monolítico)


## Microservicios

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n6gwwFUUmm3R9ZF5-ZABaiLuUucIUpuyBfwzarP-YsBfcJIzJiTXVGgo77LcoqGe5RcKwk0HxlpAlm1GwQyf4tlJten3dTQ7Jlin6Ktt-hLfkt_blj9sXdaEjm4AmdFyh1RFR=w1200-h900-v0?authuser=0)
Arquitecturas Monolíticas

## Aplicaciones autosuficientes que contengan toda la funcionalidad necesaria para realizar la tarea para la cual fueron diseñadas, sin contar con dependencias externas que la complementen.


## La capacidad más notable que tiene es la INDEPENDENCIA

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PGYwtm_EPvkVUZJQpSiTfPE-yLz8Wf0hGZKC4p7BummH-Zy-RkfHmMJuo3J9VGsKd6P1GruRUnhfD-I8eMLuQ3xxGdAeQqwNl0y2GmBxH1AeK3YiXRg0WYKCFkDDdpZVa3Xb1QA=w188-h188-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38WzkNQrHuuUUDMSo22RflJALD9Ql5vBV43-DcJ7Lfdsm45d99pn8fTxSjhXn8u0r7o89JgkUQ-gUW3PKkOjiPw_7Vv0ehF9wKXZPjCF74Aky4HMyCkxVNpGEHZqtOOoP12ayT=w498-h156-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1f8x_MUGfT01p1swdH1zVzQlT8JLXgHogHZPBmvINgiXuHJ0jiOQd1I-of-9lcMmy7Q-npLkvXoOT5cdc2XH9iCzPa4V7QjGk85v2wlldGuTdK8jWpel92sYK-6CexZYgdtl_q2g=w356-h96-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kyJ9oWfHrCayr2KyR3i82efHS7IG2SHJHkB63ypTXHdHwZGFTPmO-2ksjN4v59cGMzFYB0mL9MKLrOb1vIJ9RnO-0EzwfXWff70S-hyGubH4o1P6RlRKBEOeDyXzxyhe2HeVsdA=w498-h156-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P2rupM7vxtgHFvB3k8GY4OsWUFZx9f3hCcWb1qdRCC9rIKYKU1cskv6SGuslrsDPtSfBU8esXQ9yzsBGb4XlMwdN4EeGaoIPe4V77FwlnYfn6CRa5lQG3kDBhW3wIQN2NnrdJWQ=w356-h153-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0K32bTCG1B3NaFsR4z2qrbVYe_P2T8E3w45IkXUasUzYlduN-EhBSZwwxc7bgATDlbgh28xNU1tU8pbLn5rqXZ2_RvdGESUurBF1-Ky-INI0T6W324bUXWOP3W1qm6xujNq2VJsQ=w498-h156-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23zgvipwOhqywga45XZzOaOE9dMcYqf62e3sdZsu3U4Qr8yNAJaR6jEHtbn7J5rTCsPL_5F68CdSAx4FrPLg0tctffE7ewSGtUxEv48Q5pteII5QedAULhJaLgyOa8gynd-2Ja=w342-h153-v0?authuser=0)
Arquitectura Monolítica

#### Mono significa único o uno, y lítico significa pétreo y rígido.


#### Crea aplicaciones en las que todos los componentes y módulos se empaquetan y se implementan como uno sólo.


#### Todos los módulos y niveles están unidos entre sí, actuando como un cuerpo singular.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sRqeqUzWBGz74BIl2oi99d7cUnGUgNEHxx83MPWv5YPaaH3Aq2pKwqcB1M8r7Rgy37CQWezGUyWRRwX71rmZ1q6LGlg7EdRL-J9erN-WFpePpGrFMm0M0y8lcedcVRu8ytRiKbA=w151-h382-v0?authuser=0)
Arquitectura Monolítica

## En un servicio monolítico, la mayor parte del código


## del lado del servidor está en un programa que se comunica con una o más bases de datos.


## Dentro de un servidor monolítico, el código aún


## podría dividirse en componentes y separarse en


## módulos individuales.


## Las únicas API definidas


## suelen ser:

A) Entre la interfaz de usuario y el servidor (en cualquier protocolo REST/HTTP )
B) Entre el servidor y las bases de datos (en cualquier lenguaje de consulta)
C) Entre el servidor y sus dependencias externas.
Arquitectura Monolítica
Pros
Fácil de desarrollar, especialmente desde cero.
Fácil de probar
Es simple escalar, utilizando un balanceador de cargas.
Pocos puntos de fallo, al no depender de nada más.
Autónoma
Performance: suelen ser más rápidas, procesamiento local y no necesita consumir procesos distribuidos.
Contras
Crea una aplicación más compleja.
Si falla, falla todo.
Difíciles de mantener y depurar.
El cambio en una característica o una parte de la aplicación requiere que la aplicación completa se despliegue nuevamente.
Un aumento en el tamaño de la aplicación aumenta la complejidad, lo que dificulta su escalado después de un tiempo.
La escalabilidad en un módulo requiere escalar toda la aplicación.
Anclado a un Stack tecnológico.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HdY9nmnerUUx-gBhF0igWYeLZKvbW1OHneS3yLhvh9zhGStUWY6VfYHbhxX2DuLcDebqKdNp_ITEs3UfdEc6gBrJzh0y54LXsfX_Wla69b3nxF0cNvrBDJjff9m5TR4TbRhJoyA=w1280-h1012-v0?authuser=0)
A R Q U I T E C T U R A D E M I C R O S E R V I C I O S

### J U D I T H M E L E S

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xy9AnhPwfGrhjXAFi8y5o03vbwW0A9OXL82zaWDzsxULLGyHOUkLVcJ8gvmOXNrnyd-gMOkdJmwVCh99_ns2td-pqP1oiACYfUnqX8ZDSllsrk3quqO3aFHjRXz16AnvLd2gsEQ=w800-h567-v0?authuser=0)
En un workshop de arquitectos de software en Venecia 2011 se discute y describe lo que los participantes veían 
como un estilo arquitectónico común 
que varios de ellos habían explorado recientemente.
En Mayo de 2012 el mismo grupo decidió que 
“Microservicios” era el 
nombre apropiado
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1G7gOR8VtqIKZbHlwjOCxF8rH6I5KkDraYF6ggCxpvTXl4uPn3RM4BEQYSSgf301RzIXsuyEz6hibKOsyQjytXoZfqb7XFWAo5ye94nsVmndCMJoVViUslZvixCy5MM8zwkYIeIw=w987-h862-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25jfqT_bhQjukjP2gfO7NL3P_REnLabYL30BWJxwuSHRCZp0LVjMKV-i0IsXzmSngzBoQfHgmtrfvRvIBZM_PB-o1Nk1itDjatBH3I21z0i1wb21a9DvDoiqZRF4umAVdNRo_jsg=w915-h895-v0?authuser=0)
Monolítica

## Comparte código, procesos e infraestructura

Microservicios

## Código, procesos e infraestructura independientes

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03nxizRmhJcr_3XF89BssKVZFizc98r6l6K4_c2tOhJARkubmwBQQA79U6a-iNrS3oSPaMp6-BClI3fFKoHRb9CuO-oztld5hTn7oaPnD4o4N0m4RJ61-bNNLvLM1Kz0qkjUEx=w230-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JF1m3SM8Fnn-NQa49TMySccNrlINgXmdgnrAZwo7IUS-Rt0QJckjTWXwRsdfBhz_Cst1X1NbYaddUmly9HvCuufBw_dvWC_mOjiqfX7iAiwQKBnSwwGfSER-7P7r57gShbRnxxA=w253-h229-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15noXMHS4L0MvNbcPw1GHGtRNVoNHGHaW2R2n6nNsrEB6THd-wxHPpnbLwSdMhHfLgqKKsmR3ES2rxBQ6FVtRD7Ew-JUR54oI7s-od1cOd54nDOSq3yb7jgDVrZDZhyg1VdlmHdQ=w767-h810-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BMAfjnrzC8pOZTLaxtqVr1-sPBA6mEldUSh2wz6v3z3llDEQfTb-R_OadA7KasooWZsqb4b0sVJiJpQt8AgPmPbBsKgfpb5b_uJNDiMdtfRk3bFsU6M7Q34F1EflLuO9ZK8StSA=w815-h832-v0?authuser=0)
20
Monolítica Microservicios
Arquitectura de Microservicios Microservice Architecture (MSA)

#### Elegido por las grandes empresas de tecnología como Amazon, Netflix, Spotify, Uber.

Utiliza alrededor de 700 microservicios para controlar cada una de las muchas partes de lo que constituye el servicio completo:
Un microservicio almacena todos los programas que miraste,
Uno deduce la tarifa mensual de tu tarjeta de crédito,
Uno proporciona a tu dispositivo los archivos de video correctos que puede reproducirse,
Uno echa un vistazo a tu historial de reproducciones y usa algoritmos para adivinar una lista de películas que te gustarán, y le proporcionará los nombres y las imágenes de estas películas para que se muestren en una lista en el menú principal, y más con otras funcionalidades.
Se pueden realizar cambios en cualquier parte de la aplicación y pueden introducir nuevos cambios rápidamente mientras se aseguran de que nada más en todo el servicio se afecte.

#### Netflix, un ejemplo:

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14-U-H5abS6ifFWB5BfLTPYd5AqRPEhjVDuE8JBKyY2qb-XjDFb-SStEhlfXo_194H6_iCbZ5QblMssWQuAm6mB6972dek9ccMwbbeHCG_sUYtZBEKUqryu82Uf-4AOs1N8P70=w869-h409-v0?authuser=0)
Arquitectura de Microservicios
Una aplicación se crea con componentes pequeños, independientes y poco acoplados, donde cada módulo actúa como una aplicación o servicio independiente.
Cada servicio puede funcionar solo, pero interactuar con otro módulo cuando sea necesario.
La arquitectura de microservicios es una SOA. Los servicios se conectan a través de interfaces proporcionadas por SOA.
Cada servicio en una aplicación de microservicio controla una función única con sus datos. Cada servicio en una aplicación basada en microservicios tiene una base de datos separada.
Aunque esto puede causar datos redundantes, asegura un acoplamiento bajo.
Cada servicio puede estar escrito en un lenguaje diferente y puede usar un tipo diferente de base de datos para satisfacer sus necesidades.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv149yGhjWP5t4d5JanbCbNY0LCwB1x_N_AVrn86T8FSMKu9g_27U7sFmXMDLXueYIuumfYkD4vFyi488uCvhimbppeP3k9pU73pH4S8OmsHdJ_zn5M0M-f0YbzkTzkM4i2wP0i4=w1280-h928-v0?authuser=0)
Arquitectura de Microservicios
'Micro' proviene del hecho de que cada servicio debe enfocarse en hacer solo 1 tarea.
Se conectan entre sí a través de una interfaz de programación de aplicaciones (API), es decir, un conjunto de reglas estrictamente controladas que ambos pueden manejar.
Estas colecciones o programas se pueden desarrollar, implementar y mantener de forma independiente, siempre que se garantice que funcionan bien con la API.
Los microservicios generalmente se comunican usando algo como REST (potencialmente a través de una puerta de enlace API), están escritos en diferentes lenguajes y tienen almacenamiento independiente.
Arquitectura de Microservicios: Características

#### Organizado en torno a las capacidades comerciales. El enfoque de división de microservicios se divide en servicios organizados por capacidad comercial.


#### Productos no Proyectos. Esta es la noción de Amazon de "usted construye, usted lo ejecuta", donde un equipo de desarrollo asume la responsabilidad total del software en producción.


#### Gobernanza descentralizada. Compartir código útil y probado como bibliotecas alienta a otros desarrolladores a resolver problemas similares de manera similar.


#### Gestión de datos descentralizada. Enfoque como Persistencia políglota o Bases de datos políglotas.


#### Automatización de Infraestructura. Automatizar la implementación en cada entorno nuevo y para cada microservicio por separado.


#### Diseño para el fracaso. Los microservicios se diseñan tratando fallas e intentan administrar fallas administrando errores con las acciones adecuadas.

COMPOSICIÓN VÍA SERVICIOS
Servicios vs. Librerías
⮚Los servicios se despliegan independientemente.
⮚Interfaces explícitas para evitar romper el encapsulamiento.
⮚Las API remotas de grano grueso

## Microservicios como una forma de Modularidad


## Chris Richardson

FILTROS INTELIGENTES Y TUBERÍAS TONTAS

## ⮚Microservicios lo más desacoplados y cohesivos posible.


## ⮚Peticiones-respuestas HTTP con recursos API y mensajería liviana.


## ⮚Utilizar un bus ligero de mensajes.


## ⮚Cambiar el patrón de comunicaciones.


### “Mantenerte sobre la web, no detrás de la


#### web”.


#### Ian Robinson

GOBIERNO DESCENTRALIZADO

## ⮚Utilización de patrones, prácticas open source y código y librerías compartidas.


## ⮚Evolución de los contratos de los servicios en forma independiente: Patrón Tolerant Reader y Consumer driven contracts.


## ⮚Ética de: “el que lo construye, lo ejecuta”


#### “No todo problema es un clavo y no toda solución es un martillo”

PRODUCTOS NO PROYECTOS

## ⮚Capacidades de negocio.


## ⮚El producto puede utilizarse para asistir e incrementar las capacidades del negocio


## ⮚El equipo es dueño de un producto durante todo su ciclo de vida, incluyendo la operación.


## “Tú lo construyes, tú lo ejecutas”


## Lema de Amazon

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Y3jir6wiN_ABgKYYllcIB3162A-T2t-4kgZJkM8XpMWpraMB3zcADAG4pOms4UBm1W_lpF3487DRnv-Uq0l_XfILu2AMvdPDJ8RcjJABV-2Mni3vYujVEpHaB-yUCXK5QEg2J=w758-h444-v0?authuser=0)
GESTIÓN DE DATOS DESCENTRALIZADA
⮚Persistencia políglota. ⮚No coordinación de transacciones entre servicios ⮚Operaciones compensatorias.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hefUQVyfwtg7rGAiRLXReNZWaPdRbYdIMUxs9IxaZ3wmtPaTF0FwQ6JAnMKddjg4BFK2C0m5DbsXhuQrJCOMwU_FSXDLjYpZmIs9yXA_QnZDpi4KUM6jHmY_FRHk4w3W_vfvQcw=w778-h363-v0?authuser=0)
AUTOMATIZACIÓN DE LA INFRAESTRUCTURA

## ⮚Pruebas automatizadas


## ⮚Despliegue automatizado e inversión en herramientas.


## ⮚Automatización de la infraestructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IHx3SwUclDDPxMVwDfVZV_rudf8DNkEc9yibpvJvg1xJq1-KwZ3SRomVpbGL0jckunEUOTLw-OQvuflQ-_7ACzW28BrhtRQR956M8t1QoJEqZhpo5YPv0pvfDiGv_PVOVe5h-Ow=w500-h297-v0?authuser=0)
DISEÑO PARA FALLAS
⮚ 
Indisponibilidad del proveedor
⮚Rastros para predicción de inconvenientes.
⮚Detectar fallas y restaurar automáticamente.
⮚Monitorización en tiempo real de la aplicación
Motivación

## ESCALAR LAS APLICACIONES


### Un modelo de negocio exitoso es el que tiene la capacidad de escalar a públicos masivos.


### El software que debe dar soporte a este tipo de negocios debe lograr:


### ✔ una aplicación robusta


### ✔ El desarrollo se de en los tiempos requeridos del negocio y


### ✔ Tener una operación segura.


### En términos de requerimiento de una arquitectura hablamos de “escalabilidad”.

MSA: Ventajas
Alta escalabilidad
Agilidad
Facilidad de despliegue
Testeabilidad
Fácil de desarrollar
Reusabilidad
Interoperabilidad
Diferencias entre arquitecturas monolíticas y de microservicios

## Aspectos Arquitectónicos


## Microservicios Monolítica


## Implementación Difícil Fácil


## Despliegue Fácil Difícil


## Escalabilidad Escalable fácilmente Difícil


## Administración Descentralizada Centralizada


## Orientada a Negocios Si Levemente

Diferencias entre arquitecturas monolíticas y de microservicios: 
Implementación

## Monolíticas Microservicios

Utiliza un enfoque descentralizado hacia la implementación. A pesar de la complejidad de la implementación en su conjunto, la implementación de un solo módulo no presenta problemas.
Los microservicios crean un sistema distribuido complejo, pero aún es fácil implementar
cada servicio por separado.
Sigue una implementación centralizada, que es más fácil de
implementar. Sin embargo, tiene el costo de la complejidad
y la dificultad para realizar cambios.
Fáciles de desarrollar desde cero, pero si el tamaño de la aplicación
supera cierto punto, se vuelven más complejas y difíciles de
implementar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CvAXOC72XBH-GDZHXP7XU-Qykrh4jtNTeR02VVFavLDAklFFPmzyKx0_VcI8dI4nksIqvy_uj5AFkjsmFrWXRfbYJulkWQy_9SJPDYZOw9KgwlIXX_W6IkZVm3G5RWvJNtzKj9w=w1152-h1152-v0?authuser=0)

## Diferencias entre arquitecturas monolíticas y de microservicios:

Despliegue
Las aplicaciones en arquitectura monolítica son fáciles de implementar, pero a medida que crece el tamaño, se vuelve difícil desplegar la aplicación. Además, incluso los cambios más pequeños requieren desplegar la aplicación completa.
Las aplicaciones de gran tamaño también se vuelven más lentas de desplegar. Por lo tanto, las aplicaciones monolíticas no pueden adaptarse a las secuencias de prácticas continuas.
Desplegar una aplicación en microservicios es fácil. Cada módulo puede desplegarse de forma independiente sin compilar toda la aplicación. Facilita la aplicación de prácticas continuas (CI/CD/CD).
Diferencias entre arquitecturas monolíticas y de microservicios: 
Escalabilidad

### Las aplicaciones monolíticas se pueden escalar, pero es


### difícil escalar aplicaciones grandes. La escalabilidad en


### un solo componente requiere escalar toda la aplicación.


### Las aplicaciones de microservicios tienen servicios


### independientes, que podemos escalar individualmente.


### No es necesario escalar toda la aplicación.


### La escalabilidad es la clave para incorporar servicios


### adicionales y agilidad en una aplicación.


### Resulta fácil incluir prácticas de DevOps y servicios web


### como AWS en aplicaciones de microservicios.

Diferencias entre arquitecturas monolíticas y de microservicios: 
Mantenimiento y Administración

#### Así como una función facilita el mantenimiento de un programa, los módulos más pequeños facilitan el mantenimiento de una aplicación completa.


#### En el caso de aplicaciones monolíticas, se vuelve difícil de mantener y administrar si el tamaño de la aplicación es extremadamente grande.


#### Las aplicaciones monolíticas están centralizadas y es fácil comunicar los problemas entre los desarrolladores. Aunque, el mantenimiento no es fácil.


#### Los microservicios crean una aplicación descentralizada que aumenta la complejidad, pero es más fácil de mantener.


#### La comunicación entre módulos puede convertirse en un problema en un sistema distribuido, pero los microservicios son mucho más fáciles de mantener y depurar.

Diferencias entre arquitecturas monolíticas y de microservicios: 
Orientación a Negocio

## Las empresas modernas están más alineadas con la idea de los microservicios.


## Dado que los microservicios se basan en SOA, que está diseñado específicamente para un sistema empresarial.


## Los sistemas monolíticos todavía se utilizan en gran medida o forman parte de los modelos de negocio existentes.


## La elección de la arquitectura depende del modelo comercial, pero las aplicaciones de microservicios están más orientadas a los negocios.

Diferencias entre arquitecturas monolíticas y de microservicios: 
Combinación con otros servicios
Las aplicaciones monolíticas están
completas y fuertemente
empaquetadas.
Actúan como una entidad única y
pueden interactuar con otros servicios externamente.
Sin embargo, es difícil hacer que se
comuniquen porque los servicios deben interactuar
con cada módulo de la aplicación juntos.
Esto se vuelve fácil en el caso de los microservicios, ya que las aplicaciones
y los servicios externos pueden interactuar fácilmente con módulos individuales en lugar de con toda la
aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0e380LUGCY4B0eWs99BsYzUQsXPR68ZJ43zb48eKBqC4r0Rlvtk_Ie7Q9pWg4Ok38oKSgS_jtwnLRfn0XxDLgaiL7uK73hWZV-6G-FXTij8NpBYSnkJqV26zRhnmzpaNDWPMLSZA=w1280-h719-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06BoLtQ2cketcuiJO5NBJGMr_jMu10p9-MvL2bwo6KLi-1FnBecI4ZkumMLXfqUrggIw45n5go00y5A_5rAIwuUzcIAa_zpIaTNw6xoUa628lYDqyXk_8bgTea70vUK2rIzCONvQ=w1280-h720-v0?authuser=0)
TAMAÑO DE UN MICROSERVICIO
La definición dada de microservicios no dice nada sobre el tamaño de un

### microservicio.

El término “microservicio” sugiere que se refiere especialmente a servicios

### pequeños.

En la práctica, los microservicios pueden variar enormemente en tamaño.
Algunos microservicios mantienen ocupado a todo un equipo, mientras que

### otros comprenden sólo unos pocos cientos de líneas de código.

Aunque el tamaño de los microservicios figura como parte del nombre, no

### es adecuado para ser parte de la definición.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_oEdDw4Z0L8z0BWH8qVnAve0W43aSsPKj-ZKKsEl22s1_q8GUzOlYSi1CtZQeOvVbYKbsRd_xzkWjnlDZ6kD3lZN3NmDtqCa1l1ZjvmBctv4pc1d28zLCWdWZQTuVFO_p2bZe4g=w1024-h768-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pJaEeuDR0OOfHgl26chMgn4LUW0Cno2BhEZCUR2Gu92-DOsi5OXBA8PZgpKFU4MFpNacDpwu1vL4BxIBgYJ_QoqOkmfZgHY6uxsunSNdKEHzZUs7lm2FpfWQ_Ng37Ejby0DtgNw=w1280-h1012-v0?authuser=0)
¿CUÁNDO UTILIZAR MICROSERVICIOS?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vn_xoBibtIiKW3DdYxrfbz3umTYUE14Kvmvp58J2xdq2LEulfKqT98bxhjtM_20wFJHOTQJSNGOrBf8kmn79YCmMPwbkqxRa8FlqIK71fCMuIUSK2IhbVOWNnPdwl2hvHOKga0A=w88-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hxZHZ09pVyomLhi6Uf4wLMSm-dD72C7vEuitmJHno88-8VH9IyDi-k5FhaGt1_-srWiLGsaV4y8b7ZGJvlVtdU4q3qsQmCJmi8lB8cOW7H6ZG5oUVnlPeKGEg_TvRm6PsxqZFSQ=w88-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q5BJKKKzGn_VkyXyIwZuDIGNN9vRez7G6TRnstpYBNng_pdMLQW-YQB8cyKp0VAVY1PnAz6vq5cJJCB_xT4FVlz6PZKmBnqFwYnCWjSMUHDcBFcTSW0vjdphe_jR51M26PWn8Zg=w88-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mhW6KUqNQ3eo3HEkn-9Q7d-OsFbq7cGZF4ewixxio3TGivS94q3Zxf6ZOP-j6rZsYxu0PWw6cvRnJI8NFKbkUR1EGl4g__h2NDf3Oyw6zBMULjL_2CeLJHBoHnDxoIdzPtMcG=w88-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fzuK7mLp1B2sFDZuHoHnTmd4Ld7axJk7xSm5Y5Jxx86D73UW7QMjSR5Cgidd6OauYmEJjwrxUPtNJvKBXXuIIQRyx4yUm1eeDCDXup9xuwkhGF0oUxUYAG1gI7ue-6UHrmKVaUQ=w88-h88-v0?authuser=0)
¿CUÁNDO USAR MICROSERVICIOS?
Evolución a través de pequeños cambios. Comience con una aplicación monolítica de proceso único, beneficiándose de su topología de 
implementación sencilla. Refactorice iterativamente convirtiendo un módulo del monolito en un microservicio a la vez.
Necesidad de implementación independiente sin tiempo de inactividad: los microservicios se vuelven cruciales cuando es necesario 
introducir nuevas funciones e implementarlas de forma independiente sin afectar el resto del sistema. Esta capacidad es esencial para las organizaciones que buscan realizar cambios sin problemas.
Demanda de escalamiento independiente de segmentos de aplicaciones: los microservicios, con su persistencia de datos independiente, 
presentan desafíos para mantener la coherencia de los datos. En tales escenarios, adoptar un enfoque de consistencia eventual se vuelve esencial para abordar las complejidades asociadas con el escalamiento independiente de los segmentos de aplicaciones.
Utilización de diversas tecnologías de bases de datos para la partición de datos: cuando una organización busca almacenar y escalar datos 
para atender diferentes casos de uso. Esto permite a los equipos seleccionar tecnologías adecuadas para los servicios que están desarrollando, adaptándose con el tiempo para satisfacer los requisitos cambiantes.
Mejora de la autonomía de los equipos a través de la evolución organizacional: las organizaciones deben distribuir responsabilidades 
entre los equipos, empoderando a cada uno para tomar decisiones y desarrollar software de forma autónoma.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Z8YWT2YcWsV5Acl2_t36zEfJixgSNjKmfeLOHkOOCiK_gI2YOogJay2Ks8DaxkX1n2aPMu8OSCSigRBHYrPng-T5r1_TPRsT4ebZnnAL5Bd721Xdo8_uqqR_dkJl_DX_59YmvXQ=w245-h245-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HUdwcgi49yOXpirxaCfHS4R3evdcdicr9O5sKxFuD1AYsAg9LoFbTzU4hrtKIKPNKPYJIUzFsVOkhZDtJ__FG5pWHVne9aMf7HVKBVJtleBkPVuKfSRQ25sdhubZjZoGWagoYQw=w245-h245-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vb7NsIAC1mjvllf8qDjI0Ste-jwEpYgKgHcO3hUejGdTAg-3zRX8q7vDYU-2zA4ZTlQKD1CBGnVcAYblZpNEpL5KO09oatn2O5pwDwKItIpgVtSzL0jILVbcUafiYvqcy1NXxMQ=w245-h245-v0?authuser=0)
¿CUÁNDO CONVIENE UTILIZAR MICROSERICIOS?

#### UNA ARQUITECTURA ELABORADA Y DISTRIBUIDA RALENTIZA EL


#### DESARROLLO.


#### COMPLICA SI LA APLICACIÓN REQUIERE EVOLUCIÓN RÁPIDA.


#### CUANDO EL DESAFÍO ES ESCALAR, LA DESCOMPOSICIÓN FUNCIONAL,


#### ES MUY CONVENIENTE.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08Obpd96eiS9T4GF_cPy_HAobsDcXcAlbqvIPkbKRiS46QmdxZO3F5ha386wO92yA3kfOzLdOQNqw0t30vy9Bri2XvN8PJzDNYdM-X00WR09i_yYiBgCC67KcGc7FOIfXXFCOMFA=w1024-h768-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25fC0w8SBnPqzlNqgCcJG4_nazEgz8-VTE1vTcsbMhBnrqxSap4ZIIpqdIn0QO73P4KyoOu2HJcYB3FjMrLcTkGdvUlhKS2bCFrXPfL4cExZTFDyvUxpkSy_uqOIFdS5ld4oZohg=w1280-h1012-v0?authuser=0)
¿CUÁNDO NO UTILIZAR MICROSERVICIOS?
¿CUÁNDO NO USAR MICROSERVICIOS?
Evite la creación de un monolítico distribuido: garantice la descomposición adecuada de los servicios 
adhiriéndose a principios de desacoplamiento, como la aplicación de contexto limitado y capacidades de negocio. Crear un monolítico distribuido es perjudicial, ya que amplifica la complejidad arquitectónica sin aprovechar los beneficios de los microservicios.
Implemente microservicios con DevOps o servicios en la nube: los microservicios adoptan enfoques 
distribuidos y nativos de la nube, y sus beneficios solo pueden lograrse plenamente si se adhieren a los principios nativos de la nube. Esto implica implementar:
1) Pipelines de integración continua/despliegue continuo (CI/CD) con automatizaciones de DevOps.
2) Herramientas efectivas de despliegue y monitoreo.
3) Servicios en la nube administrados para respaldar su infraestructura.
4)Tecnologías y herramientas clave como contenedores, Docker y Kubernetes.
5)Adopción de comunicaciones asíncronas mediante servicios de mensajería y servicios de streaming de eventos.
Tamaños de equipo restringidos, equipos compactos: si el tamaño de su equipo carece de la 
capacidad para gestionar cargas de trabajo de microservicios de manera eficiente, inevitablemente se producirán retrasos en la entrega.
Desafíos para equipos pequeños: para equipos más pequeños, justificar una arquitectura de 
microservicios puede ser un desafío, ya que es posible que el equipo deba dedicar esfuerzos significativos para manejar la implementación y administración de los microservicios.
Inaplicabilidad para nuevos productos: cuando se trata de un producto nuevo que requiere cambios 
sustanciales durante el desarrollo y las iteraciones, iniciar con microservicios puede no ser el enfoque más adecuado. Los microservicios tienden a ser más costosos al rediseñar los dominios de negocio, incluso si la escalabilidad se convierte en un requisito crítico para el éxito.
Inconvenientes de rediseñar dominios de negocio: los microservicios pueden ser costosos, 
especialmente cuando se rediseñan dominios de negocio, incluso en escenarios donde el éxito conduce a la necesidad de una arquitectura altamente escalable.
Evitar el antipatrón de base de datos compartida: es esencial desalentar la adopción del antipatrón 
de base de datos compartida. Este patrón socava los principios de los microservicios y puede introducir complejidades que obstaculizan la eficacia de la arquitectura.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3s8q0giqbDWAz-mLta6pgwVaIjOFRJzCFIW7ZsaLpZxvY2IVteCic14E430-tVq3WyiqR5yPtRALanalGYD1sLk2808rOW8kQ_A4ayBsRomEBUVGvJyOIr2-3qe_qZFtskdfH4=w1280-h720-v0?authuser=0)

### A r q u i t e c t u r a M o d u l a r


### M o n o l í t i c a

F U E N T E : W H A T I S A M O D U L A R M O N O L I T H ? M I L A N J O V A N O V I Ć ( M A R 8 , 2 0 2 4 / M A R 3 1 , 2 0 2 5 )
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15Lgk55hWxpCVZl7es4PSygL4CR17nKb5bSGRhE1v7InJgTJAdtxZcPRlPAWi26x5DWrN_AXkuxN9WsyOOSop3A8E4td7Gq4001WdqEzMYxkS8q-m_8sT8vAtaSJa3uvK9vNNYOg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HQgYO3T9Ms34f6CO6RBGX_JLpROu9-RhlhssbuKwfK3LWDXkKYsQQDxuTxMFrFwIj-k69eF7H4TWjJWgZMLxlxPQJvLS54-Z_fxSQ_ySim13gRc6D4SWFNQXKtPKIa-VKFKIzXQ=w1280-h513-v0?authuser=0)
Arquitectura Modular Monolítica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NH3ci79HPy9Ft67ZEO2tQ8NKwpsMoY0v1t7zR8xKp3x64R5xfwmsSFewGZHrwpkC76noA9MX7b2UBJrPZIOG1YfmweCPKHCxUfHgHpkfBEEdLcqmEiz1r_BCr32aOIP2yLIq-dQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2z6I70z-7Do6s_NVsfS8w_h0ZcsqBzeouq-n327-wAlz7FJcZFnUycf5aAyb24w_MPd--0Mf8ErMFViiSWSp4qDjZHMYCB5-IMExs0zfKCB07TNe-A88__JedNmRRgFowaZdx0iw=w1280-h654-v0?authuser=0)
Monolíticos Modulares
El problema con la mayoría de los sistemas monolíticos es que con el tiempo se acoplan estrechamente.
Los componentes están profundamente entrelazados.
Hacer un cambio en un componente impacta a muchos otros. Introducir nuevas funciones es difícil y propenso a errores.

## Los monolitos modulares pretenden resolver estos


## problemas.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NsHRSQJ86SNsQXuyLpadGpU7nHoW_ITYAleDe1df-4nq0ZkBkUuB0LkF4oPVtYfUyfqRFwybOxXuUVMIgjVEGooVT8xE_pBAEPWTUjADfB65r2hsKlIkgh7Hj_W1RDS8iv8a6=w1280-h445-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dqbAw9TVWE3p7m2tXnoGTr3E0tTkeM7Fg7eTwGZvWHJ-FzD1RC6x9B9vsMSDtMr6i288GwEV8tRuZNhiS6k9d6lG3_fCCs1iFxNUIitGOcQxfpZvCE1K_cQRU6BOso0BZg-InCQ=w1280-h568-v0?authuser=0)

## Arquitectura Modular Monolítica: Principios clave de diseño

Encapsulamiento: Cada módulo encapsula una capacidad de negocio específica. Los módulos interactúan a través de interfaces bien definidas.
Desarrollo independiente: Los equipos pueden trabajar en módulos separados sin afectar a todo el código base.
Límites estrictos: Aunque comparten la misma instancia de base de datos, cada módulo mantiene sus tablas o esquemas, lo que impide el acceso directo a los datos a través de los límites del módulo. No hay acceso directo a la base de datos entre módulos; cada módulo tiene su propio repositorio y capa de servicio.
Contratos de interfaz claros: Los módulos se comunican a través de API’s bien definidas, de forma similar a como interactúan los microservicios, pero sin la sobrecarga de red.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0K8kXfvSI2T0spyCBC-LF8QuPVfXEEkfXFPZsUEHQkqGXgAj7U8PFBGEXI2gSK7ca8NUG6kP8T0u3VQHxi0wdLUuW9PqmkbjPKDQaxCrs9cVV1MlZDaQifoviedsiC-wNG_THZsw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv060X769KD73E1wtVq3FgkMsI7fWKDglUgqr2FTcJhwwbfMNcSD62wzU4bzaNSMpwg-t-tQVJh370Na3hoYsRR4ZREEx_Gz8uqTBNhF8ej5O3J8TIYJ8w9pys9aN8GyV3eh9mX5=w880-h442-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xGlrWhXpIrEORJQ2hvCsOLzkR0A0JfkTcM4xVNcU0fshDZwXJAtEF43jzWgxRwcO4fU18wRQX50M-WK6y7sML2I9ZYJ59qLPijAYllrn30RKdAIjdxpnDs-ZWSubKorONE_E-qg=w348-h404-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SuXtDbG0n3eHirN05F8ocUSyKc_Dm7nm6gHZpzUBqyFbW6rWzwfV9DqjTUz_C8Yt7rVLEldZKNnl6JCDgVYdCm-kl0xJeRx-xBuY2QGvaB7XxKV7HV9DaETO2-FyFKS1O_2hgeA=w184-h151-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27m25y1SWnGyrQJM4X53mN6ivGrZ9wip94bypPAb6DiecPbqhriEIDcMXi91-IhTHdh9sEIhjQ1Vno0N6wmRDomqWXYYasu93nwtgfbwyWkjHFKsH8zcb-G0-5QjrYh2DAhNOK=w184-h151-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BTQTokt_2K0FiDuCQVu5LHWnfoV_dh0Fik5E_Gd_vb-xkV3yIlTIuBYGmEfhjP9JA5j8bufQ62HA-Fein-kd-yrpSFF7nVFZ4ivp3h6t7p6FUZHQU9e6nxBs--o9EJAoLij8W6g=w184-h151-v0?authuser=0)
Arquitectura Modular Monolítica: Ejemplo:
Módulo Órdenes
Módulo Pagos
Módulo Inventario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UtusWOXRctwFV1Y-SAEaQxk3RasFWqArIstkaACPauX5o-lR4TS7MBjVoZqYnPK_1h1aMEh28lFTIiS-x47ObsF9nmAQw_IjfbeoNspfdF4-6gwXtoqZ-2z_pjeMoL2AcjgnhQQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p0-azuYP3_zyyxu0oRzs-NuFDgl7KPmKZ2htT5LE-KmuMiRJKY6e-b3SOYCWk_S8mP4CmTDg76uAmOeZeiYjdOzGEH3Y1mmvTYCz2ZRMOcjft-J27C4YzZghx_greklkgOO-6Pg=w752-h1280-v0?authuser=0)
Arquitectura modular Desafíos Técnicos

### Un módulo es una agrupación de funcionalidades relacionadas a las que se accede a través de una interfaz bien definida.


#### ❖ Los módulos deben ser independiente e intercambiable.


#### ❖ Los módulos deben poder proporcionar la funcionalidad requerida.


#### ❖ Los módulos deben tener una interfaz bien definida expuesta a otros módulos.


#### ❖ Los módulos deben estar débilmente acoplados y mantener baja la cantidad de dependencias.


#### ❖ Si dos módulos son muy “conversadores”, es posible que haya definido incorrectamente los límites. Debería considerar fusionar estos módulos.


#### ❖ Para mantener el acoplamiento bajo es necesario resolver cómo se comunican los módulos.


## Tener una arquitectura modular le permite extraer fácilmente módulos en servicios separados.

Beneficios de un
Monolítico Modular
Implementación simplificada: a diferencia de los microservicios, que requieren estrategias de 
implementación complejas, un monolítico modular se puede implementar como una sola unidad.
Rendimiento mejorado: la comunicación entre módulos se produce durante el proceso. Esto 
significa que no hay latencia de red ni sobrecarga de serialización/deserialización de datos.
Velocidad de desarrollo mejorada: hay una única base de código para administrar, lo que 
simplifica la depuración y la experiencia de desarrollo general.
Gestión de transacciones más sencilla: gestionar transacciones en un sistema distribuido es 
un gran desafío. Los monolíticos modulares simplifican esto ya que los módulos pueden compartir la misma base de datos.
Menor complejidad operativa: los monolitos modulares reducen la sobrecarga operativa que 
conlleva la gestión e implementación de un sistema de microservicios distribuidos.
Transición más sencilla a los microservicios: un monolito modular bien estructurado ofrece 
un camino claro hacia una arquitectura de microservicios. Puede extraer módulos gradualmente en servicios separados cuando surja la necesidad.
Desventajas de un
Monolítico Modular

### Unidad de despliegue única: Un solo error o fallo puede afectar al sistema.


### Limitaciones de escalabilidad: Si bien es modular, se ejecuta como un solo proceso, lo que limita la escalabilidad independiente de los módulos.


### Creciente complejidad: Sin disciplina, los monolitos modulares pueden degradarse con el tiempo y convertirse en sistemas estrechamente acoplados.


### Limitaciones de la pila tecnológica: Las decisiones sobre la pila tecnológica afectan a toda la aplicación.

Monolítico tradicional vs modular

#### Característica Monolítico Tradicional Monolítico Modular


## Estructura Código fuertemente acoplado; las

funciones están mezcladas.
Código dividido en módulos
independientes por dominio (ej. Pagos,
Usuarios).

## Dependencias Cambiar una parte puede romper otra

inesperadamente.
Límites claros; los módulos se comunican
mediante APIs internas bien definidas.

## Mantenimiento Tiende a convertirse en una "bola de

lodo" difícil de entender.
Alta cohesión y bajo acoplamiento,
facilitando el mantenimiento a largo plazo.

## Escalabilidad Difícil de separar si el equipo crece. Paso intermedio ideal

hacia microservicios si el proyecto lo
requiere.

## Despliegue Una sola unidad (un solo archivo

ejecutable/binario).
Una sola unidad (igual que el tradicional).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zmBSrDJPNlN-7MgwOjYiU6Mzu_iR5A3njSWoNDdF6Hi1jbYE9ZQLAvd94mGs4COoL9J3rDj7Fy02vHNDij5CL8BRu4j1-rpbowc5OtN-xC4QpgfE94j7iXtk5sG6mqMtaWd0y=w1040-h1040-v0?authuser=0)
¿Cuándo elegir a cada uno?
Monolito Tradicional: 
Ideal para 
prototipos rápidos (MVP) o aplicaciones 
muy pequeñas donde la velocidad inicial es prioridad sobre la arquitectura.
Monolito Modular: 
Recomendado para sistemas que crecerán en complejidad pero no quieren lidiar con la dificultad técnica de gestionar múltiples servidores (como ocurre en los microservicios).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1S7kilU6C-aJz3rHsKcU0QlzCKWZzihLpGCOqEcW9ygnLscymy-sG3MlmDtZnp7sxYERyQJnN8f198Kv9n_zHzbBQtkwnxK9N_oEkWX7YP0MU31XT74JVky9FrBWlrr-493mxKTQ=w1280-h693-v0?authuser=0)
M I C R O S E R V I C I O S
V E R S U S M O D U L A R
M O N O L Í T I C O
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2275Wa1-w9IT4f374sVc_3qOSX81039A0o5fGH7ZFo0FNNjLL84TckRpSnkURLNZlCknWbhJrbgvqHWQmNJgXFaVSZk8v-ZaHzlk_5cEsemhGnSZaqgY4q7UwLk3JNaxBXoPbOSw=w1280-h720-v0?authuser=0)
Modular Monolítico vs Microservicios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BV53rAwYerrDS7oc7mWrAWk1RJiZ9__13homMGsjZ0RJx1nmWlDdb44pQ7k0tdz9xdZ7fLSlbOpoa6NWh0KIHL9EYCvzVDXC3Q6gLjGtxzwH6TL5kyTYrApcA38fyZjToKaKPWQ=w1280-h1122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LT_XpLajAFOhyA5p41tQPks2b4MuIUHelZFaxPSutYZyWiSqZswpYGqGHg07PmuIHFX7CmYypkSuqC3XxHlInpUjr1AY7LXOhxRXJXHGnwU20gTw4Y6H1BPunRctY94RqpiRJpg=w487-h603-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J1DjSDmQnOOA8J3Tnlo3bkNnwblfXNkPWyimMbzcljTIkX9e_vbTFPtg-mF39hH-BqQs4s-1WbDI_4umNU2TcwcP9zi3XIq89NJt1ynkb4niyHWqZ9DK-KrU7zPul0jRjOIsrwg=w1280-h720-v0?authuser=0)

## Modular Monolítico vs Microservicios


#### La mayor diferencia entre monolitos modulares y microservicios es cómo se implementan. Los microservicios elevan los límites lógicos dentro de un monolito modular a límites físicos.


#### Los microservicios representan servicios autónomos que encapsulan un conjunto de funcionalidades de un sistema más grande, como módulos en un monolito modular.


#### Los microservicios le brindan una estrategia clara para la modularidad y la descomposición de los contextos acotados.


#### También puedes lograr esto sin construir un sistema distribuido. El problema es que la gente acaba utilizando microservicios para hacer cumplir los límites del código.


#### Se puede construir un monolito modular para obtener la mayoría de los mismos beneficios. Los monolitos modulares le brindan alta cohesión, bajo acoplamiento, encapsulación de datos, enfoque en funcionalidades de negocio y más.


#### Los microservicios le brindan todo eso, además de implementaciones independientes, escalabilidad independiente y la capacidad de utilizar diferentes pilas de tecnología por servicio.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KRd0sMILWsj4UOyKLfTGSZQg7I21yFgd2lGW3rO9PshrUaZw38YTtkZf5yvQRdZNXJ5S8GTozYfO3udDCbtgYRCDikIRqueSkx8S9U47MHp4xC1LUcK2LlxA_bb41M3rnB-jRAg=w1280-h720-v0?authuser=0)
Modular Monolítico vs. Microservicios
Despliegue Unidad única. Múltiples servicios independientes.
Complejidad Complejidad más baja. Mayor complejidad debido a las demandas de distribución.
Performance Más rápido (comunicación en memoria).
Más lento (llamadas entre servicios).
Escalabilidad Limitada a escalamiento vertical. Altamente escalable con escalamiento horizontal.
Sobrecarga Operacional
Más baja. (Monitoreo e infraestructura más simple).
Más sobrecarga (necesidad de orquestación, monitoreo y descubrimiento de servicios).
Gestión de datos Una sola base de datos. Bases de datos distribuidas.
Velocidad de Despliegue
Más rápido en etapas tempranas. Inicialmente más lento por el setup de infraestructura y la separación de servicios.
Flexibilidad Puede evolucionar a microservicios si fuera necesario.
Difícil transicionar hacia atrás a monolítico.
Aislamiento de fallas
Estructura de Equipos Funciona bien para equipos pequeños.
Requiere fuerte cultura de DevOps y propiedad del servicio.
Comunicación Llamadas a funciones internas. API’s basadas en red (REST, gRPC)
Mantenibilidad Más fácil de mantener en etapas
Más desafiante sin fuertes prácticas de
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Sx7PeIG8lTt5rHd9Et-YYZYxBlf1s4uY2Lizz2rxfIHENjIy2cCBGsIcjB1D18uH1y7fcJfVEBopRNUjlK2_Q_joSclDOx0Am-tiMkViIJG662buA2B6kYr7Ebd_ddd2kWICw9Q=w1280-h1153-v0?authuser=0)

## Estilos Arquitectónicos para Estructura Interna que vamos a desarrollar

E st
ru ct
u ra
In te
rn a
Layered
Hexagonal
Arquitectura Estratificada o en capas (Layered Style)
Es tal vez el más común, tanto que muchos desarrolladores asumen que todos los sistemas deberían ser estratificados.
Se encuentran sistemas forzados a ser estratificados.

## Capa 3


## Capa 2


## Capa 1


## Capa 0

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jT-PBWULi3nJuuLsG0gbsO_kkM-cvLwqBlzj0KaLVyLrtU_BY3I83f3ueGzIN-jBn_7Vuzf7e5uTENsQYdkoApI1jX2jCPrtLvOLA8jmgf0_Hj-3HFAmT4WFt6kGxF50IqLnQ3Q=w843-h528-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Z92RYFkj4S8QC8kWokQgzIsFi9nyjmnB0VevxIgrDCo9I4im4vbnWKeA707oCxRs3niTlklF-txWGBVpa-AQ8rpMjhroJfienCK1Vr53O6BDhAzIYsa8jedhh-kw8ntymivz2=w750-h500-v0?authuser=0)
¿Cómo se estructura el estilo Layered?

## Principio SoC Presente!!!

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Y0CcDrrbAEJQgS8VfJQQSDkBWOCisMeXWNsiMJcObeVWsIHuCTVElf-ZSZbSuvISyr7HoJwc_EXpDNpNX6p1hWgiX3swrECZQgzwprK5WhOzyL8GahTZ-JBzI-5kqZ29yKL1wPQ=w490-h1280-v0?authuser=0)
Arquitectura Layered
Organiza los componentes de una aplicación en una serie de capas, cada una con una responsabilidad específica.
Las capas más comunes son:

#### ➢Capa de presentación: responsable de manejar la entrada y salida del usuario y de mostrar la interfaz de usuario.


#### ➢Capa de Lógica de Negocio:


#### ❑Capa de aplicación: contiene la lógica de negocio de la aplicación, incluidas las reglas y procesos que gobiernan el comportamiento del sistema.


#### ❑Capa de dominio: representa los datos y los conceptos de negocio de la aplicación, y es responsable de gestionar los datos y las reglas de negocio.


#### ➢Capa de acceso a datos: responsable de acceder y manipular datos, generalmente a través de una base de datos.


#### ➢Capa de infraestructura: incluye los sistemas y tecnologías subyacentes que respaldan la aplicación, como el sistema operativo, el sistema de gestión de bases de datos y los protocolos de red.

Arquitectura Estratificada o en capas (Layered Style)

#### Variantes: evitan la restricción de modo que las capas puedan comunicarse con capas de más abajo. Otras variantes usan capas compartidas, donde cada capa puede usar estas capas verticales o compartidas. Este uso tensiona la definición de capas hasta el límite. No obstante, si interpretamos esas capas compartidas como una conveniencia visual para mostrar dependencia sobre un módulo compartido, esta variante tendría más sentido.


#### Notas: El estilo estratificado puede variar considerablemente en su forma platónica de su forma embebida, en la práctica se pueden saltar capas hacia capas inferiores, lo cual provoca negar los atributos de calidad que son su beneficio. Aun así, es beneficiosa dado que las capas agrupan módulos en funcionalidad coherente.

Capas Genéricas de una Aplicación
Presentation layer
Application processing layer
Data management layer

## Capa d Presentación


#### C p de Administración


#### de Datos


#### Capa de Lógica


#### de Negocio

Capa de Administración de Datos
Capa de Lógica de Negocios
Capa de Servicios Web
Capa de Presentación
Arquitectura Estratificada o en capas (Layered Style) Ventajas

## Fácil de desarrollar: fácil de implementar, es muy conocido y una gran mayoría de las aplicaciones la utilizan.


## Fácil de probar: permite probar por separada cada capa.


## Fácil de mantener: fácil detectar el origen de un defecto para corregirlo, o identificar donde se debe aplicar un cambio.


## Seguridad: la separación de capas permite el aislamiento de los servidores en subredes diferentes, lo que hace más difícil realizar ataques.


#### Performance: La comunicación por la red o internet es una de las tareas más lentas de un sistema, incluso, más que el mismo procesamiento de los datos, por lo que el hecho de tener que comunicarnos de capa en capa genera un degrado significativo en el performance.


#### Escalabilidad: al ser monolíticas, son difíciles de escalar, aunque es posible replicar la aplicación completa en varios nodos, lo que provoca un escalado monolítico.


#### Complejidad de despliegue: es necesario desplegar los componentes de abajo arriba, lo que crea una dependencia en el despliegue. Un pequeño cambio puede requerir el despliegue completo de la aplicación.


#### Anclado a un Stack tecnológico


#### Tolerancia a los fallos: Si una capa falla, todas las capas superiores comienzan a fallar en cascada.

Arquitectura Estratificada o en capas (Layered Style) Desventajas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p6dD51lYqNCPVvXKsVpNONBLelhOrvvvh5BiG1ZviB8d8wxguAqpFYduJmXDsAfpWKTiemztNIQoLrtr-yk9tma_ph_kFJvaPcrypBp8eDxkPdi1MGZ6BysLvcrN5VVVY4ZbcpQ=w1280-h580-v0?authuser=0)
Variantes de despliegue de la arquitectura en capas
Estilo Arquitectónico: Partición de Dominio

## Separan los componentes de nivel superior por flujos de trabajo y/o dominios.


## Ventajas:

Modelado más de cerca de cómo funciona el negocio en lugar de hacia detalles de implementación.
Se alinea más estrechamente con el monolítico modular y la arquitectura de microservicios.
El flujo de mensajes coincide con el dominio del problema
Fácil de migrar datos y componentes a la arquitectura distribuida

## Desventaja

El código de personalización aparece en varios lugares
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j4ZdV0Fq_gzGQi4WgVX7e__N5ITcqddQEhS6BKZoBqHmmXIhioITdKSQ8KjxEgET0TbYrDPXPCv4z7JE4ryMLc0mj9feyoOnQdwvKZmBWjevLBxgDVDaQYOE10ITjgDGNh7_G=w611-h775-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y-W7OnCwO0oAKKdAkODVk5cTREOdWt559-lvcnyysZR6g-jyRE54uBrmdniCvh8pDS0Ym8qidvqLpBfVS-YNNnv_H2v397bM-muGkaZKGGt93EPhB88-xSOEOGqtmOxDn1rSGbQ=w920-h812-v0?authuser=0)
Ejemplo de Particionamiento de Alto Nivel de la Arquitectura
Particionamiento Técnico • Particionamiento de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3S22ndllLEbe7QHPIz9nDv28veCkqHzAJo7hNKAQR-XyC2X0lWrVPUOCBDUK4uY-QBRLs3T2AkIx7_jxSJRgMMg_L5soih8jurXV1r0jkRN-uxcc5zyS4AGwY8zbtYRmFCCKfZ=w1280-h1207-v0?authuser=0)
ARQUITECTURA HEXAGONAL

## Hexagonal conocida también como Arquitectura de Puertos y


## Adaptadores

La lógica de negocio crea puertos que se pueden

#### conectar a varios adaptadores de forma


#### intercambiable.

Las interfaces creadas por el código de negocio se

#### denominan puertos, que se consideran internos tal


#### como los define el negocio.

Los adaptadores representan código externo que

#### cierra la brecha entre el puerto y el resto del código


#### del lado del usuario o del servidor.

La arquitectura está simbolizada por un hexágono,

#### que proporciona un amplio espacio para representar


#### múltiples puertos y adaptadores.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iTVMB2Vlc_q7ypfh3gtbA4p970Aat7Ym55ziHv3SY66hpc-3sVfKn11GMRCePvk1WOt1b5ovI2ZLD_yg6fU0XxbfGZyR016-85rbUAdam8jav_ts-OLrPLjm-cOTd9IBqEcfaeg=w1184-h1280-v0?authuser=0)
Permite que la entrada de usuarios o sistemas 
externos llegue en un Puerto a través de un Adaptador, y permite que la salida se envíe desde la Aplicación a través de un Puerto a un Adaptador.
Esto crea una capa de abstracción que protege el núcleo de una aplicación y la aísla de herramientas y tecnologías externas
Puertos: punto de entrada independiente de la 
tecnología, determina la interfaz que permitirá a los actores externos comunicarse con la Aplicación, independientemente de quién o qué implementará dicha interfaz. Los puertos también permiten que la Aplicación se comunique con sistemas o servicios externos, como bases de datos, intermediarios de mensajes, otras aplicaciones, etc.
ARQUITECTURA HEXAGONAL
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1az_AgNN-HsGkNMlexXeWQ9zYJVq0RUKjoxHrTsMrxXx7hHGMLSkcfOdZM0Pr4kY5k3a9Zv7OBC_3Mr1E0pfABOYKjz-DBnhNtCQIhi2sxJgsVkIQNnUClj6eX3DPrZKr5NpOK9w=w1184-h1280-v0?authuser=0)
Adaptadores iniciará la interacción con la

## Aplicación a través de un Puerto, utilizando


## una tecnología específica, por ejemplo, un


## controlador REST representaría un adaptador


## que permite a un cliente comunicarse con la


## Aplicación. Pueden existir tantos


## Adaptadores para un mismo Puerto como


## sean necesarios sin que esto represente un


## riesgo para los Puertos o la propia


## Aplicación.

Aplicación: representada por un hexágono

## que recibe comandos o consultas en los


## Puertos y envía solicitudes a otros actores


## externos, como bases de datos, también a


## través de los Puertos.

ARQUITECTURA HEXAGONAL
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ptxBuwEd8UTObCI5SvvtnxTrgMqCglqc693OgZewgsEBzcsauZ3dW_XLdtF7bjhwGMbq8vE023iTBC458aBD3Gjlm8FV9btpuvEd95c6TKneL7ivqA72nhmawlnmpcupRhY2Vnw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3r9SjuMMjpQVDCFAARH4BtmVqbMHFWMgfnKGtIS3AeNWTuqP3lbquyjcHqn8gR0I7982V5Qc5YpuBhFXuAVD8ZhPWI2_GYdGSUecBPHQI3QAbKOXvE80CpDqvfJciDQ5wezIQHZg=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Tj3Yp8blR3zjdsEL2oE2YfZ6EJQiTVyLSD9db5WRkH6Csxxa-XE_K2TpVBucFAk35K9axkFHun6s608mg6-CVngUmys0fhiEFz07h31K9CPPqWOtMWvpvdxBJjC7uWEh4REz7=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IZIShRnAQ1SmTVHMeOC_huBWKDkpyThXvCuYG7ln1WlxfdRyVfEYCf_I4sQrT3O8SSboY7ZXzswJM5DgTa1lZpFq5k3PpOTvTYdATDftcy_wIotIrM4YjneDdy70cgnCIT5AD=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ycerILL1wbDeG0V5FeZwcuzbT-A_Ud2t9ag6iqgvgaIwmuRyFo68wSeVYO8izCoI8vuE8UtZs49yFkOJth70cNn38uMn0b_uhbYGfTR1g2lV1-HMzpgnwg-J3zAtzUXXvGEHWWA=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qpK_6J-Z93QLz-OcrouM0lSrRtq6ecHgk3Hfwp7QmRZ8koImEzZmvr_6pM0HqJDGV0m6hWBOZwJNx7BmJQ_iuQmt1q21HY6zszqDWLd9Ur27O9sYWY7WdfXT3jCA9xIxeHdoq=w95-h95-v0?authuser=0)
DRIVING SIDE VS. DRIVEN SIDE

### (LADO DE CONDUCCIÓN VS LADO CONDUCIDO)


#### Los actores conductores (o primarios) son los que inician la interacción y siempre están representados en el lado izquierdo. Por ejemplo, un adaptador de conducción podría ser un controlador que es el que toma la entrada (del usuario) y la pasa a la Aplicación a través de un Puerto.


#### Los actores conducidos (o secundarios) son aquellos a los que la Aplicación “impulsa a comportarse”. Por ejemplo, la aplicación llama a un adaptador de base de datos para que obtenga un determinado conjunto de datos de la persistencia.


#### Los puertos estarán (la mayoría de las veces, dependiendo del lenguaje que elija) representados como interfaces en el código.


#### Los Adaptadores de conducción utilizarán un Puerto y un Servicio de Aplicación implementará la Interfaz definida por el Puerto, en este caso tanto la interfaz como la implementación del Puerto están dentro del Hexágono.


#### Los adaptadores conducidos implementarán el Puerto y un Servicio de Aplicación lo utilizará; en este caso el Puerto está dentro del Hexágono, pero la implementación está en el Adaptador, por lo tanto, fuera del Hexágono.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TolkSVEczIn-ky5x0AyOpA6V5hb4nwj4hKljr2eWpKTDj12a19hFEUROwA1k_d0aRRyijt9MeN8CF5fB6weXOJ2vYL52uTgDrnI_ye4-atXKhumNBObhLLSIKIaF0vjV04_EUaQ=w1280-h986-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34m_VptQ9o8F30bty24U7447u8kNdzKWO-ZA2RV46A714Hw8MQYOPOGoH2ZOCz4rMxUs_BYs7_yIsmy-GGlZs-owmznMKrKQUkJmb3jZwm2OPtH2leBmCpBWL3YemyxAj4jsiaAw=w1280-h658-v0?authuser=0)
Arquitectura Hexagonal
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y6axhLItl2oIHnp3qq70nxQYNkeidWJJHfv-JQo77YOPQObi0dbsevaaNYwjVdLVhkCFv1ZOw8lw8boZOaK2ljdznyGrS5G5LG7FaHUTns5FzZi26Vp2MVqleLGmh1uZtoEchlQ=w1280-h714-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VIq_8H59zKnnS63xLvHQaYf2KDAnkhrgeGySZQfjUScQ6z-0P7uIW_HTsUNJpiDnKoWr7F2PUh_XIS5BQ-XMyzmWFdd0b4Zucvc59-gviO2MQvy0ItL5z-b9HeNcVxmTdJrJs=w1280-h714-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y6t0RWmTcTEz8JX4BsEaBik6UrFGVxFhjUpVhvp4-fHGktdAQTwDYBhNMNdx4MTS9Vzzz_KYFE8Rthp34IsC6pf5-5bCOOfo7wAj_HWAdD5bpzeBVn_V96E9-NqDmdWzHV4SXhg=w1280-h869-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37wg1FjbjFPMDBFDWwKNrdCJq4LDrZPzQDqqV-Lfu7OPzTHe1iVneGoP4WHNLjj89h_P7Yd32S7UGFXDz4K9XiyfNOLFc6TP_pFIsqRwxW6Os9wLyRTeTaDM-kk6g01z_D1QcCtg=w227-h226-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fxhZ3o79VckcJDdVelcxmZmD600l54Jcmgk9uxE2zbSu7kLZ683FjuURS_xDp0TjuMAw0YB7NLStyN2at9hpsUnDYWvK2m5LrU-TA7JM5H-GpU4A-6Z7ufgsl_DUxaK0C3tv94g=w227-h226-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18aVyCDEBUx6t186i83ttLgCGV8APNZSBzBS4zrY8gIjeSSGJ1f0tccooSmEEwtWXvZepM66odlRcCd4RuxO7Ws9LqYXn6kZBEb40RwITMW1_-iqZNbPZvPfgn1hb9Gvs1OQH6=w227-h226-v0?authuser=0)
INVERSIÓN DE DEPENDENCIA EN EL CONTEXTO DE LA ARQUITECTURA HEXAGONAL

### Como se mencionó anteriormente, los lados izquierdo y derecho del Hexágono contienen 2 tipos diferentes de actores, Conductor y Conducido, donde existen puertos y adaptadores.


#### En el lado de conducción, el Adaptador depende del Puerto, que es implementado por el Servicio de la Aplicación, por lo tanto, el Adaptador no sabe quién reaccionará a sus invocaciones, sólo sabe qué métodos están garantizados que estarán disponibles, por lo tanto, depende de una abstracción.


#### En el lado Conducido, el Servicio de Aplicación es el que depende del Puerto, y el Adaptador es el que implementa la Interfaz del Puerto, invirtiendo efectivamente la dependencia ya que el adaptador de 'bajo nivel' (es decir, el repositorio de la base de datos) se ve obligado a implementar la abstracción definida en el núcleo de la aplicación, que es de "nivel superior".

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27qjaTsPBZrzt4ooSHVIeMCLRAev4M1aT2chaHjGlX4nOlSEZkJva6XuEk86sPUtIZtmcfLjUZ3Otl1PJYpIEv3vDq0xM0P8Z_G0zUM4MzUye39Z6FsNIbpVGaio8kQPCQ0rnJjA=w1280-h960-v0?authuser=0)
INVERSIÓN DE DEPENDENCIAS
¿Cómo evitar que los detalles técnicos y las librerías se infiltren en la aplicación?
La "regla de dependencia" proporciona una solución al garantizar que todas las dependencias del código fuente apunten hacia adentro, hacia el núcleo de la aplicación.
La dificultad surge al implementar puertos y adaptadores secundarios, donde la dependencia del código fuente debe ser opuesta a la dirección de invocación. Por ejemplo, ¿cómo puede el núcleo de la aplicación acceder a la base de datos si la base de datos está fuera del núcleo y la dependencia del código fuente debe dirigirse hacia el centro?
El "principio de inversión de dependencia". El puerto todavía está definido por una interfaz, pero las relaciones entre clases se invierten. Esto permite controlar la dirección de una dependencia del código; para puertos secundarios y adaptadores, es opuesta a la dirección de llamada.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JUrvuAxh6gpfD2hRbrPxrTvlApjSWyXyKmD4hpWPkaqGVyxyos6HG5ULC0ntXLRcHELYbF5_hGDBN9c3uFIGhMH9ptCyeYLbzoNmr2sk7qAIEsFWRHzSBWicJT60twQBdJas-ow=w1280-h613-v0?authuser=0)
Inversión de Dependencia en Layered y en Hexagonal
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BZoaIT83aTUKR0q49_u8eO_ANp9YRaS8xnWoDshY4BHTQH6v6WLLrrNQtNnuE3_5TbzPeRjezdWCiZ_gj9tU_MWGEIuosXeIdeKbr8ED4vACgfLQoxK8VnMeDP0pUjgW_Ejht=w1280-h564-v0?authuser=0)
Un ejemplo para procesamiento de pagos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sMFKStUi1w76PUfeh-2MHMWhaDPrhFp-2B1mjtBwjIirt6rU3WU5WsZzEFBA_5kjV2P6-wSevAHclGL_OnEwKK9o0TXym_2m8MRRSUUiGdiIWYf9aCdjLtAXoSEAkVTJ-X9Padw=w456-h761-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12Xq1JrngoXQPHf0RRXsLdvNewttDagt6Kk0CQLdtEwAmYq9XDz9ktKbTLJ1cplE9Jq-A3uVisAVdYTuJmbmtL3bOBkhNM2mXdmKob4hI9Knsy6l4hMRQKkXHkftp8LAsyIhS8DA=w639-h238-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KJS46o8wjpi3EANhE82z7LNGB5w48AX09_RqZSx2bi1vt-YkURxXvHsy1K-LotY3T7ct-m1lK2GIfdSfe2CzBGOCA4CNISe_v1N63AHdBrqUPMrXun7FSSIlhKpJTbb5prtcGqg=w408-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QnJ7wfisLblpJBTwNLxp-YI4TP6ueUqQNYo2BGlhdwRS7qie0JemuBQf68OAgeq3n0LyvQnvhgnV36-eDDLtdmB6WtWiIBpdpv_UkupVIKngaz53GBQVTK0cqOSP9YicrsXdb=w130-h130-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AahcheDEfkOxXhIzlhqiS3GD7UmgsHbliNRCYs1bjvLi-MiTw4J8nJcBloSHiZlpR0lwnPqoAxagmoCnYyzq86et4zGYT2erFT6ZgYWIX9ZqGD6ULqpoJPqDEq9fh9-FUP8ZQQA=w130-h130-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Eb1UTyWkzhIjXP6f_3jS9reu80umhvhHjL2qusgPvZhm0CgwwXjMSIn7DAiJWREn5iYjar8KA3GYoSHERDvg4u3GPxpIxiZcgULTACWDNMcfHbQzi0uEl_SuaV0_3Sg2-42IO2A=w130-h130-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BZANaq-lo83_ibfZC1vRNlh7ZaM8klVyU8vRdZ9lmWmBCPutsyyCI0yN-owSUGae6DS6daB3gXeWvy5JkIsJajZjONfRTn9pUOYaqruNGim8-bMXMpkvmZhfQAsgXAxpGOQ2WtA=w130-h130-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SfzYQ8wJMTN7E9o5eojb48Mc_i8Y8Zr_E4C4PReS4juTwOQVmVEGEw-kf4-CI8qJIpBth5vrQsNRbBtg-UVO9fEbHm0AU626GjezPKsyvXHfI04uaROrhjDyvhvp1Yzx3RiQi=w130-h130-v0?authuser=0)
¿CÓMO FUNCIONA LA ARQUITECTURA HEXAGONAL? DESCRIPCIÓN GENERAL:

### Núcleo de la aplicación: contiene la lógica de negocio y los algoritmos que resuelven el problema.


### Puertos: define las interfaces que utiliza la aplicación para comunicarse con los sistemas externos.


### Adaptadores: implementan los puertos y proporcionan un puente entre la aplicación y los sistemas externos.


### Edge: maneja la comunicación entre el núcleo de la aplicación y los sistemas externos.


### Sistemas externos: interactúa con la aplicación a través de los puertos y adaptadores

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zEiNV9NJsVggFZ09wyzXIuQ-mlcvSv9yJ1bG2oZFhy0B41efimZVBo4zNg2TDmLLitzdASCHGTqFqz75H40Ca8LMjzXaLsvHGnQJXt8fnPDCf_f7CGsdM3SWLe77pRPF-UJE88g=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XJvmnV3U4yGprtES5pcpvbqHuAeP4QSx1yaMp4YoWVcUTbCYtFPuuu_SFIZhyknylDwuXDz6fyF86ihThkH6bkziOvDaxL7LNulBL8MbTXOBXArGSC5UBaBDy1P3Uxe1f9bflnQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv198-hA8m8geZMXF-gn_zyK6_XSNJTt74GCt82AwPppSEy_UOYKuuVvohIdeQO_5CuUj9MEpVecgnETaWI62VLSowm-yRdVDeDBP3qxe5B1rz6JybFOB6dsm_pRUgzT8VpCacX_=w58-h66-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rBNGN79jrA7qS_dJRVjqiuJDN99Jxgjd_Kpup7rSH8sah0HPbFlrWBoWgjZmalR5OilkZx20nVjGkajFQh_1z0IkHBKy7ap24XRezPIZT3pUTTVLfvzEEmO88klD3TRKMyBtGBg=w58-h66-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DghMihpXUlmjUprXV4sQVZGEDJh9CPf6SKWTDxBepULdBRWNUW4-x2f-o9PPu3odb-vslse0yjiCOTVq50cIA6CV8JkHqbX5sycCab_LDS1zgtPs_GDz_Yz6Ht1LvGWo6UtXRIQ=w58-h66-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Px8pabdEvCX0XLUrUz5fo74U0wQWPJM1IEJX1qZRc7395ETJIZCOuoO6aXyo8HBicNJgtcPFOH7LmCz3BqJ0-BVW35NHm88HuD86txiwwoyjdU78zsU26PwShogWMW2WqlkFw=w58-h66-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13WKBCwy2PgGJiQHtq9by80aKNFK1KasUJbA1vnFFNS0fDU8H06Vd_jFLN3GKdFpshkb5JwmEnPE5SxHkbOHadeNcJCvFAx4OU6BmhSnIUemmVAuPp9OFXu3k1evQwdB9tCljA3w=w58-h66-v0?authuser=0)
PASOS PARA APLICAR LA ARQUITECTURA HEXAGONAL

#### Identificar la lógica de su dominio principal y encapsúlela en una o más clases o módulos. Este es el núcleo de tu aplicación.


#### Identificar sus actores externos y sus interacciones con su sistema. Estos son sus puertos primario y secundario


#### Definir interfaces abstractas para cada puerto que especifiquen qué métodos u operaciones están disponibles para la comunicación.


#### Implementar adaptadores concretos para cada puerto que manejen la comunicación con los actores externos. Por ejemplo, puede utilizar un framework web para implementar un adaptador web o un controlador JDBC para implementar un adaptador de base de datos.


#### Conecte sus adaptadores a su núcleo mediante inyección de dependencia o inversión de control. De esta manera, puedes cambiar o reemplazar fácilmente tus adaptadores sin afectar tu núcleo

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BD2pgjxwjIG9iFUqDxeMBq0YB0IjPjACgRY9hqvQVtoMub6t-IWiXRZrQnUOzkuBJccV5kepxeNKE82EDAXl3t0XRlyMrz-92eLAjpNWNdfkysBa9HmbcDggRr6hOi1a1c0uo=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ycjR9Na34GaUDm6xmpPIljA4eTdXDAfLRQL5uka6AUIq22MJF5srmnP4unK4dc2BvC33wP9lnyy_06CPoozIkfvtO-n5JknLXAgkYZaph6tCPDqFRjoatNm3_LINiYg2c7Z9U5g=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31kVq0B70dN5o75V4c7w1ZFYTGnEnglearZEOhUakrCcHlSy4RctxZ2CE3yHUhFXSTCd6fgyr8LVXqvnXD57t3OxIB_CUOIrs2UWFtueciu15PdtD5jKPdna3-nrQJitD_3u-ErA=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0slFLIje-00AJmFRRieBad3BJsDKwgT9uaC31_M36kHAvm33TSQu8apLn_67NYJ9yR6tdeUBd2OdEFOLast1A8BquUk-ERdc39ZYg17jUSHJ7UFpUsyIEni7B0HKS3qgtrUaxa=w121-h121-v0?authuser=0)
EJEMPLO: APLICACIÓN WEB QUE PERMITE A LOS USUARIOS CREAR Y GESTIONAR PUBLICACIONES DE
BLOG.

#### La lógica central (core) de la aplicación es responsable de validar y almacenar publicaciones de blog, así como de recuperarlas según varios criterios.


#### Los componentes externos son un navegador web que proporciona una interfaz de usuario para crear y ver publicaciones de blog y una base de datos relacional que conserva las publicaciones de blog en tablas.


#### Los puertos son una API HTTP que define cómo se crean y recuperan las publicaciones de blog mediante solicitudes y respuestas HTTP en formato JSON, y una interfaz de repositorio que define cómo se almacenan y consultan las publicaciones de blog mediante operaciones CRUD en entidades.


#### Los adaptadores son un controlador web que implementa la API HTTP usando el marco Spring MVC y un repositorio JDBC que implementa la interfaz del repositorio usando consultas SQL en una base de datos MySQL.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jTJtlWCs_hU-mIV1i0F3tvYyGZn3hI43UT8-cVXfleVMWHXKvG0kea_bp8AK7kw68ulGGsWYQtu75KsZPLENGtna70Y5xfAJItKPqUvzE1ABmgpTvCQvMmHcMT-zLWoUdRz_C=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IlfooV79LWxgnqJCYBdT1obtVrAa1-Gmo0XrtzDVKzHuLFqnZGID6Yaw9n5CXrYSIu2lIi8v2-M4T4KmEDD-bhxTtqWH0rJ_RU8xYQbB6xd-sgW76UQmTEr3OfgJQRq-cxVxc=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pA2UE7iVN-h_77dm-sHYzWUx04FUCiLyAFHNsnB5n9riA_goemrlRKB5bxqP6LCPp5RtB0mjDidaE7Qq_7OxOZOJaJJ5i8qjY7SHJpg_V9rDzYm6Qndh2Kq20nJHjkzdciaa2=w121-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xi-IHCOkHTCdInBTcLzl1YMOnqQgtJQ7ZuQgJTGALse07dLAnM045VV0ETHkqgQju2S-0L7HFT7Er84q8luEHhpmhRGnjOs7hexv08EEE9_QZQKcn-RPDB0qyUXWoVdavp78iiA=w121-h121-v0?authuser=0)
EJEMPLO: APLICACIÓN DE LINEA DE COMANDOS (CLI) QUE PERMITE GENERAR Y ANALIZAR INFORMES.

#### Aplicación de línea de comandos (CLI) que permite a los usuarios generar y analizar informes a partir de fuentes de datos. La lógica central de esta aplicación es responsable de generar y analizar informes, así como de formatearlos en varios formatos.


#### Los componentes externos son una interfaz de línea de comandos que proporciona una interfaz de usuario para especificar parámetros y opciones de informes, y varias fuentes de datos que proporcionan datos para los informes, como archivos CSV, servicios web o bases de datos.


#### Los puertos son una API CLI que define cómo se analizan y validan los parámetros y opciones del informe mediante opciones y argumentos de línea de comandos, y una interfaz de fuente de datos que define cómo se recuperan y consultan los datos mediante consultas e identificadores de fuente de datos.


#### Los adaptadores son un analizador CLI que implementa la API CLI utilizando la biblioteca CLI Apache Commons y varios adaptadores de fuente de datos que implementan la interfaz de fuente de datos utilizando diferentes tecnologías, como Apache Commons CSV, Apache HttpClient o JDBC.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33d8-X9CQ0dA5rsbsrjwdokidiHBl-IhaGicZqnopkZwHQOjKobM2duRub3cuoH-v4Zo9HxoI5fNIfWoJFxCdEI_OgoCdgokQtUZ4RM-gGYL8-kMNod8H86JhfkJNvhUrPzgvE0Q=w140-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jws8E8P1qF7iL4fPZAqiWzz6lz768P_iuCFCxvrO75g0QSUjqhUBOWbJWIIDCF-41y0zduZ9j8jZkdAB5QkOaFvTn5e9ZdHSl_BIxLtO4qtArgEn_xN2k7JASR0Z9zX3PsjUeTQ=w140-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15VikNASgw8FYd5P8KseArr7uh7YRaX27VHBq5cDHd2D3KkpyDXxJ0tZdJULWB4QZk2c17sngRHrowDuEcAPOO4C6uMyN2gmY2I47aGkI3hIMRc4r3m9bIKPxhGM51ppY_fuVt=w140-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2B0TPyEGQ84Yiefh9n1j_7FHtv67o6QRHNfcnlcLCoVHOkGfKSzp3L9ibLpYfcTWFXWQeRbgwprx1XpRgdR37ZIV3LiOZxqUuXWufAJJsdMDx7lpMTEpTwFdZ4_9d4GfK97PA4=w140-h165-v0?authuser=0)
¿POR QUÉ DEBERÍA UTILIZAR LA ARQUITECTURA HEXAGONAL?
Se puede aislar completamente la lógica de la aplicación y la lógica de dominio de una manera totalmente comprobable. Dado que no depende de factores externos, probarlo se vuelve natural y burlarse de sus dependencias es fácil.
Permite diseñar todas las interfaces de su sistema "por propósito" en lugar de por tecnología, evitando que se quede bloqueado y facilitando que la pila tecnológica de su aplicación evolucione con el tiempo.
Si necesita cambiar la capa de persistencia, o necesita permitir que los robots de Slack en lugar de los humanos llamen a la aplicación, todo lo que necesitas hacer es implementar nuevos Adaptadores y listo.
También combina muy bien con DDD; la principal ventaja que aporta es que protege la lógica del dominio para que no se escape del núcleo de la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QvZ0T2ahVxD_RHLxyTycOK-kpGLBCsj22Axt3_6aPKJYo-K2mUdqQ9Tr4jMXQoqvsXQsUTFtDVNYX0LjLcAsmrpT1w6_uk9gLFmVSjKdyU2iX-dCu5jTkBwRKzv3F7MliT5wqyQ=w1185-h1280-v0?authuser=0)
Acoplamiento bajo al desacoplar el núcleo de los sistemas externos y sus detalles técnicos.
Alta cohesión al manejar las inquietudes técnicas con los adaptadores y mantener el enfoque en la lógica de negocio y de aplicaciones dentro del núcleo.
Capacidad de prueba mejorada.
Mantenimiento más fácil.
Mejor modelado de dominio.
Escalabilidad.
Intercambiabilidad cambiando adaptadores sin cambiar el núcleo.
Reusabilidad mediante el uso de diferentes adaptadores.
Legibilidad mejorada
BENEFICIOS DE LA ARQUITECTURA HEXAGONAL
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GYMaYd9ZdpoIHSlLz-BddshtudfJL41qjtpI3E_Z86_EXJ8setMPGTzdShqn8kGRIU6yVdDfNAhGpHcQvc5rgnTC_c7gRUbF08XT7A0FAYJozLfZrBCNJSfvC9l7X5mxWXD23=w967-h1260-v0?authuser=0)
UTILIZAR UNA ARQUITECTURA HEXAGONAL CUANDO SEA NECESARIO:
integrar con múltiples sistemas externos
manejar un gran volumen de datos
escalar la aplicación horizontalmente
probar la aplicación exhaustivamente
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0848seU_1OnXeCgHWFavz6ejYSoGIFPFSbKDT7cO1YhZrbg9O0eAkpU8k6no-xuLVc9QUpeVqXt1Gd4x8oJvN_5YQEinM-5InmIK7Iaczi0z3VFGLKL-ymL2OEthmj4Yw8rEVT2g=w1280-h717-v0?authuser=0)
C O M P A R A C I Ó N D E E S T I L O S
A R Q U I T E C T Ó N I C O S

## L AY E R E D / H E X A G O NA L

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hJlzIEKxOUxTPFqCoUCT31xxlPzLYjcBDGkpfIGynD8wgfBG_uXtXOIaGmip6OvzpDZJ60NZxoUnyk3Z6plnGF4974CgPd73BSMXAN4Ip-ndXOqIX2btncmQDn9TdLGae14sK-w=w1280-h574-v0?authuser=0)
ARQUITECTURA HEXAGONAL VS. LAYERED
ARQUITECTURA HEXAGONAL VS. LAYERED
Layered
Es criticada por su enfoque en la base de

### datos, lo que genera problemas como


### dependencias transitivas, límites de capas


### borrosos, aislamiento deficiente de los


### componentes y dificultades para probar,


### mantener e intercambiar componentes de


### infraestructura.

Este enfoque se conoce como diseño basado

### en bases de datos, donde la aplicación se


### planifica en torno a una base de datos.

La arquitectura en capas a menudo da como

### resultado mayores dependencias y una


### posible duplicación de la lógica de negocio.

Hexagonal
Enfatiza la lógica de negocios sobre el diseño de

### bases de datos. Es más lógico planificar y desarrollar


### primero el lado de negocio de una aplicación y


### considerar la persistencia de los datos más adelante.

Los cambios en la lógica de negocios deberían

### impulsar cambios en la persistencia de los datos, no


### al revés.

A medida que las aplicaciones se vuelven más

### complejas e incorporan componentes adicionales


### como API REST y servicios de terceros, la arquitectura


### hexagonal proporciona pautas claras sobre dónde


### pertenecen estos componentes.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VMsDYhrXUzCei4cdfVc3P_ogp2pRm6yXUL6YlFhplVeoyeOq608GSo_IregSduw3JpuejAR3l10MFLM6hyt6R8sxnh3BoEKQeLIfiCOwTFvg-p2Dum2qhnkqgHSuzaXi1KxcPYQ=w1280-h1153-v0?authuser=0)

## Estilos Arquitectónicos para Distribución que vamos a desarrollar

D is
tr ib
u ci
ó n
Cliente Servidor
N-Tier
Cliente/Servidor: Variantes

#### Client Server


#### Two-tier


#### Three-tier


#### N-tier client-server


#### The master-slave pattern


#### The peer-to-peer pattern

Cliente Servidor: Dos capas
cmp Client Server
«request»
:Client
«request»
:Client 
«reply»
:Server
La aplicación es modelada como un conjunto de servicios que son provistos por servidores y un conjunto de clientes que usan esos servicios.
Los clientes conocen a los servidores y deben saber cómo buscarlos, pero los servidores no necesitan conocer a los clientes.
Clientes y Servidores son procesos lógicos.
Los clientes inician la comunicación.
Los servidores no conocen la identidad de los clientes hasta que se han contactado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14KfSfAj0csdS95VjjXQg-5iLn9TLiKre-YUT-wuGzCCMxyUaAJnYr2Lj71Q-8lrN7yWUA6w6aUi3rZBaHiI_MaFZOs7mqLuIjZWnYvsLpm2Oy9TzmVjTVBPf-LkhNs1CwEz6adA=w782-h485-v0?authuser=0)
Cliente Servidor
Como los servidores se pueden replicar, se usa cuando la carga de un sistema es variable
Si bien es una arquitectura distribuida, puede implementarse también en una sola computadora.
El uso más común es para explotar la capacidad gráfica de la PC y al mismo tiempo proteger los datos en un host central.
Cliente Servidor & N-Tier
cmp Ntier
«request»
:Component
«request»
:Component
«reply» «request»
:Component
«reply»
:Component
«reply»
:Component
«reply»
:Component
Propiedades clave :
Separación de Intereses: capas diferentes y claramente divididos para 
presentación, negocios y manejo de datos.
Comunicaciones sincrónicas: la comunicación entre niveles es 
pedido-respuesta sincrónica. Los pedidos emanan en una única dirección del nivel del cliente a los niveles web y de lógica de negocio al nivel EIS. Cada nivel espera la respuesta del otro nivel antes de proseguir.
Distribución flexible: no hay restricciones para la distribución multi- 
capas de la aplicación. Todas las capas pueden correr en la misma máquina o en su propia máquina. En aplicaciones WEB, el cliente usualmente corre en un browser de una PC de escritorio de un usuario, comunicándose remotamente con Internet con componentes a nivel web.
Arquitecturas Cliente Servidor & N-Tier
Ventajas
Centralización: lo que impide que los clientes conserven información
desactualizada.
Seguridad: El servidor por lo general está protegido por firewall o
subredes que impiden acceder a la base de datos o los recursos sin pasar
por el servidor.
Fácil de instalar (cliente): El cliente es por lo general una aplicación
simple que no tiene dependencias, por lo que es muy fácil de instalar.
Separación de responsabilidades: La arquitectura cliente-servidor
permite implementar la lógica de negocio de forma separada del cliente.
Portabilidad: Una de las ventajas de tener dos aplicaciones es que
podemos desarrollar cada parte para correr en diferentes plataformas,
por ejemplo, el servidor solo en Linux, mientras que el cliente podría ser
multiplataforma.
Desventajas
Actualizaciones (clientes pesados): Una de las complicaciones es gestionar las 
actualizaciones en los clientes, pues puede haber muchos terminales con el cliente instalado y tenemos que asegurar que todas sean actualizadas cuando salga una nueva versión.
Concurrencia: Una cantidad no esperada de usuarios concurrentes puede ser 
un problema para el servidor, quien tendrá que atender todas las peticiones de forma simultánea, aunque se puede mitigar con una estrategia de escalamiento, siempre será un problema que tendremos que tener presente.
Todo o nada: Si el servidor se cae, todos los clientes quedarán totalmente 
inoperables.
Protocolos de bajo nivel: Los protocolos más utilizados para establecer 
comunicación entre el cliente y el servidor suelen ser de bajo nivel, como Sockets, HTTP, RPC, etc. Lo que puede implicar un reto para los desarrolladores.
Depuración: Es difícil analizar un error, pues los clientes están distribuidos en 
diferentes máquinas, incluso, equipos a los cuales no tenemos acceso, lo que hace complicado recopilar la traza del error.
Cliente/Servidor según la época y las capacidades
Escritorio + servidor de base de datos: Esta arquitectura coincidió con la aparición de bases 
de datos independientes y servidores que podrían conectarse a través de protocolos de red estándar. La presentación reside en el escritorio, mientras que la acción computacionalmente más intensa (tanto envolumen y complejidad) ocurrieron en servidores de bases de datos más robustos.
Navegador + servidor web: Una vez que llegó el desarrollo web moderno, la división común 
se convirtió en navegador web conectado al servidor web (que a su vez estaba conectado a un servidor de base de datos).
Tres niveles: proporciona aún más capas de separación. Se comenzaron a construir aún más 
capas en su topología: un nivel de base de datos que usa un servidor de base de datos, un nivel de aplicación administrado por un servidor de aplicaciones, frontend codificado en HTML, y cada vez más, JavaScript, a medida que se expandieron sus capacidades.
Cliente/Servidor
Muchos estilos de arquitectura se ocupan de cómo separar eficientemente las partes del sistema.
Un estilo fundamental en la arquitectura separa la funcionalidad técnica entre frontend y backend, denominada arquitectura de dos capas o cliente/servidor.
Formas destacadas de implementar el estilo C/S:
Cliente-servidor de acceso a datos remoto
Cliente-servidor de presentación remota
Cliente-servidor de datos de lógica dividida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LhIZDRLKlFR_5tesS4ybcM4QmBlvgjYCcbQ62j7vOF4D6yi9T9Ypzde6Jbtbrxlwa3p_Eno8O7ZXSIe5pfLuM8WSsh1CADZ4Ix4Q4Lq8-QFe1jwC0Fk3_TSJu-NwvVsYl3zLj=w455-h244-v0?authuser=0)
C/S de acceso a datos remoto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JUmwR5Di3rgamtL8odSn6cuXwGqYblVa1KYgSNoqHv6MEHWm4qCi7HZ_83YDj8ln5enP8qCtFItzZDzMZhRrb1Rz_OYvX6CPGCTG0p2l5C6qoT5ZzUpAG3zPJH4dT7fA9N4nK=w525-h301-v0?authuser=0)
C/S de presentación remota
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YmrDLNkQRlJWZVXHHdey1KfI2sarQKRwbN63ATy3-7ejub-tPxSrb1u2xXUnPlh5WErLHvhEnnnrXYCt-k2XG6DrP-cgZ0HPxezRoWQO1wXXWUlNAOnpqPn9XEf1oOT9-djbLTQ=w450-h267-v0?authuser=0)
C/S de datos de lógica dividida
La funcionalidad de la aplicación se divide en dos partes:
Una implementada del lado del cliente
La otra del lado del servidor.
Este estilo es muy complejo en comparación con los otros dos, porque tanto el cliente como el servidor necesitan programas de aplicación compilados por separado para su funcionamiento.
Es importante para los desarrolladores identificar las funciones que se implementarán en el lado del cliente y del servidor y enumerar los tipos de diálogos de comunicación que deben ocurrir entre los programas de aplicación ejecutándose en el lado del cliente y del lado del servidor.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FGpB9CSddjdoQEwL56kM13oW4UiqliUxnsTBmJmkcdld4FAMsXlviVsMR94jObWvESs2xyc_cTTUgIjU_tyLUj1lJQB_V4Hl8it6issQhNSb2-gL-qEP4vX6hiRlOw9-UFB4vMw=w1280-h1153-v0?authuser=0)

## Estilos Arquitectónicos para Distribución que vamos a desarrollar

C o
m u
n ic
a ci
ó n
Even Driven Architecture
Publish & Subscribe
Broker
Messaging
Process Coordinator
Request – Response REST (Representational
State Transfer)
Event Driven Architecture (EDA)

#### Un evento lo podemos definir como un cambio significativo en el estado de la aplicación, ya sea por un dato que cambio o alguna acción concreta en el sistema que merece la pena ser observada


#### para tomar acciones en consecuencia.


#### En una arquitectura EDA se espera que las aplicaciones lancen diversos “eventos” para que otros componentes puedan


#### reaccionar a ellos, procesarlos y posiblemente generar nuevos eventos para que otros componentes continúen con el trabajo.


#### Arquitectura asíncrona y distribuida, pensada para crear aplicaciones altamente escalables.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yAJajhdDbu4n_ny0w1FS1YWcVRPEjpN6RoGNCgFG4qv3O0l1qF5wzPdSqThildQlVsen0r7nRHwLuIR5ValhB7wMxQCjytaQ2yNkQWoguG_1uPL2cgFqNv0OA0o07o-o8rYF9OQ=w1057-h414-v0?authuser=0)
Event Driven Architecture (EDA)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MNg8r0I4D00Tkk50QqUvI99iDMVIXRkBQnIqGxQFgihVa8KMwNZQuB62CfktEDUgSsMgYFEiXtkZ1-62rXCZ_OvqNEhSF6cMCpnMxpVVOOyeUIQ0trWLA6pPHQHoCc6lnPmn4rg=w1280-h734-v0?authuser=0)
Event Driven Architecture (Con topología Broker)
Un sistema controlado por eventos "reacciona" a los eventos que ocurren en una interfaz de usuario o internamente.
Se basa en procesadores de eventos. El flujo de eventos a través del sistema puede tener lugar de dos maneras diferentes. (Broker o Mediator)
Bajo la topología de Broker, no existe un control 
centralizado del procesamiento de eventos.
Cada procesador puede transmitir eventos propios para activar otro procesador formando una cadena de eventos.
No es necesario administrar las conexiones entre procesadores de eventos específicos o pasos de ejecución.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02WHK-cjLHHlwrukJdNrarBi3kVLTdQv0jLzPjSxErn1qu9m2-tBu1FGBiuG9yeMJNGNFIMWWLqIZ2FZtWU8EYIFVUmCL6IP-yHHLXKSbEFjwD_BkMKxOQMJNfxEF1mIo1NEJ-1A=w1280-h648-v0?authuser=0)
Event Driven Architecture (Con topología Mediator)
Bajo la topología del Mediator hay 
algún control central.
Los mediadores de eventos controlan qué procesadores se llaman y en qué orden cuando un evento ingresa al sistema.
Puede haber múltiples mediadores de eventos que trabajen en paralelo o de forma jerárquica.
EDA: Ventajas

#### Escalabilidad: permite que cada consumidor (Event Consummer) puede escalar de forma independiente y reduce al máximo el acoplamiento entre los componentes.


#### Despliegue: Debido al bajo acoplamiento entre los componentes, es posible el despliegue sin preocuparse por dependencias o precondiciones, al final, los componentes solamente se suscriben para recibir eventos y reaccionar ante ellos.

Performance: EDA necesita pasar por una serie de pasos para completar una tarea, agregando 
retrasos en cada paso, desde colocar el Evento por parte del productor, esperar a que el consumidor lo tome, y generar nuevos Eventos, sin embargo, la naturaleza asíncrona de EDA hace que esta desventaja se supere mediante el procesamiento en paralelo.
Flexibilidad: EDA permite responder rápidamente a un entorno cambiante, debido a que cada 
componente procesador de eventos tiene una sola responsabilidad y está completamente desacoplado de los demás, de esta forma, si ocurre un cambio, se puede aislar en un solo componente sin afectar al resto, además, si un nuevo requerimiento es requerido, solo es necesario regresar un nuevo tipo de procesador de eventos que escuche un determinado tipo de evento.
EDA: Desventajas

### Testabilidad: Una arquitectura distribuida y asíncrona agrega cierta complejidad a las pruebas, pues no es posible generar un evento y esperar un resultado para validar el resultado, en su lugar, es necesario crear pruebas más sofisticadas que creen los eventos y esperen la finalización del procesamiento del evento inicial más toda la serie de eventos que se podrían generar como consecuencia del evento inicial para validar el resultado final.


### Desarrollo: Codificar soluciones asíncronas es complicado, pero aún más, es la necesidad de crear manejadores de errores más avanzados que permitan recuperarse en una arquitectura asíncrona, donde la falla en un procesador no significa la falla en el resto, lo que puede ocasionar la inconsistencia entre los sistemas.

Variantes de Event Driven Architecture
Publish & Suscribe
Broker
Messaging
Process Coordinator
Arquitectura Publicar-Suscribir (Publish-Suscribe)
Publicante
Suscriptor
Tópico Suscriptor
Suscriptor
Crear/publicar
Registrar/
Suscribir
Arquitectura Publicar-Suscribir (Publish-Suscribe)
Componentes independientes publican eventos y otros se suscriben a ellos.
Los publicantes ignoran el motivo global por el cual el evento es publicado, los suscriptores ignoran porque o quien publica el evento y dependen sólo del evento no de quien lo publica.
Cada tópico puede tener más de un publicante y los publicantes pueden aparecer y desaparecer dinámicamente, lo que le da flexibilidad sobre configuraciones estáticas.
Los suscriptores pueden suscribirse y des-suscribirse dinámicamente a un tópico.
Aplica a elementos de tiempo de ejecución, es parte de la vista de ejecución (runtime)
cmp Publish & Subscribe
«publish»
:Component
«subscribe»
:Component
«publish»
:Component
«subscribe»
:Component
«publish»
:Component
Arquitectura Publicar-Suscribir (Publish-Suscribe)

## Propiedades clave del estilo: Mensajería Muchos a muchos: los mensajes publicados son enviados a


### todos los subscriptores que están registrados en el tópico. Muchos publicantes pueden publicar en el mismo tópico, y muchos suscriptores pueden escuchar en


## el mismo tópico.


## Calidad de Servicio (QoS) Configurable: Además de mensajes seguros/no


### seguros, el mecanismo de comunicación subyacentes puede ser punto-a-punto o multicast/broadcast. El primero un mensaje distinto para cada suscriptor del tópico, el último manda un mensaje que todo suscriptor recibe.


## Bajo acoplamiento: No hay vínculo directo entre publicantes y suscriptores.


### Los publicantes no saben quien recibe su mensaje y los suscriptores no saben que publicante envía el mensaje.


## Consideraciones: Arquitecturas muy flexibles y adecuadas para aplicaciones que requieren mensajes asincrónicos uno-a-muchos, muchos-a-uno, muchos-a-muchos entre componentes.

Arquitectura Publicar-Suscribir (Publish-Suscribe)
Arquitectura Publicar-Suscribir (Publish-Suscribe)
El principal beneficio es desacoplar los componentes que producen los eventos de quienes los consumen, lo que hace la arquitectura mantenible y evolucionable.
El bus de evento agrega una capa de indirección entre productores y consumidores, lo que podría dañar la performance del sistema. No obstante, existen recursos reusables que hacen ajustes a la performance.
Los canales (buses) de eventos varían en las propiedades que soportan:
Durables: garantizan que cualquier mensaje que aceptan no se perderá durante una falla.

#### Usualmente la durabilidad se logra escribiendo los eventos en un almacenamiento confiable, al menos temporalmente, lo que trae aparejada cierta latencia.

Entrega en orden: garantizan entrega en orden o priorizada de eventos.
Entrega en lotes: los eventos se acumulan en lotes para evitar cúmulos de eventos similares.
Remitente -1 Broker
Remitente -2
Receptor-1
Receptor-2
Puerto de
entrada 1
Puerto de
entrada 2
Puerto de
salida 1
Puerto de
salida 2
Arquitectura Agente (Broker)

## Propiedades clave del estilo:


### Arquitectura Hub-and.spoke: El agente actúa como concentrador de mensajes y los remitentes y receptores se conectan como rayos. Las conexiones al agente son por medio de puertos asociados a un formato específico de mensaje.


### Realiza ruteo de mensajes: el agente incrusta la lógica de procesamiento para entregar un mensaje recibido en un puerto de entrada en el puerto de salida. La entrega


### Realiza transformación de mensajes: el agente lógico transforma el tipo de mensaje de origen recibido en el puerto de entrada en el tipo de mensaje de destino requerido por el puerto de salida.


## Consideraciones:


### Los agentes son adecuados para aplicaciones en las cuales los componentes intercambian mensajes que requieren grandes transformaciones entre los formatos de origen y destino


### El agente desacopla el remitente del receptor, permitiéndoles producir o consumir su formato nativo, y centraliza la definición de la transformación lógica en el agente para facilitar la comprensión y modificación.

Arquitectura Agente (Broker)
Arquitectura Comunicando (Messaging)
Cliente ServidorCola
Arquitectura Comunicando (Messaging)

## Esta arquitectura desacopla emisores de receptores utilizando una cola de mensajes intermedia.


## El emisor envía un mensaje al receptor y sabe que eventualmente será entregado, aunque la red esté caída o el receptor no esté disponible.


## El estilo tiene inherentemente bajo acoplamiento, esto promueve alta modificabilidad, dado que emisores y receptores no se conectan directamente.


## Los cambios en los formatos de los mensajes de los receptores pueden causar cambios en las implementaciones de los emisores.


## Los formatos de mensajes auto-descriptivos reducen esta dependencia.


## Propiedades clave del estilo:


### Comunicaciones asincrónicas: clientes envían pedidos a una cola, donde se almacenan hasta que una aplicación los remueve. Luego el cliente continua sin esperar la respuesta.


### Calidad de Servicio (QoS) Configurable: la cola es configurable para una entrega de mayor velocidad, no confiable o de menor velocidad, confiable. Las operaciones de la cola pueden coordinarse con transacciones de base de datos.


### Bajo acoplamiento: no hay vínculo directo entre clientes y servidores. El cliente es inconsciente de cual servidor recibe el mensaje. El servidor es inconsciente de que cliente vino el mensaje.


## Consideraciones:


### Provee una solución resistente para aplicaciones en las cuales la conectividad es transitoria, tanto debido a la red como a la poca confiabilidad de los servidores.


### Se puede implementar para pedido-respuesta sincrónico utilizando un par de colas pedido-respuesta.

Arquitectura Comunicando (Messaging)
Arquitectura Coordinador de Proceso (Process Coordinator)
Servidor 1
Coordinador
de
Proceso
Servidor 2 Servidor 3 Servidor 4
Inicio del Pedido de
Proceso
Resultado del
Proceso
Paso 1 Paso 2 Paso 3
Paso 4

### Propiedades clave del estilo:


#### Encapsulamiento de Proceso: El coordinador de proceso encapsula la secuencia de pasos necesarios para completar un proceso de negocio. La secuencia puede ser arbitrariamente compleja. El coordinador es un único de definición para el proceso de negocio, haciendo más fácil de comprender y modificar. Recibe un requerimiento de inicio de proceso, llama a los servidores en el orden definido por el proceso y emite los resultados.


#### Bajo Acoplamiento: Los componentes del servidor son inconscientes de su rol en el proceso de negocio general, y del orden de los pasos del proceso. Los servidores simplemente definen un conjunto de servicios que pueden ejecutar y el coordinador los llama cuando es necesario como parte del proceso de negocio.


#### Comunicaciones Flexibles: Las comunicaciones entre el coordinador y los servidores pueden ser sincrónicas o asincrónicas. Para las comunicaciones sincrónicas, el coordinador espera hasta que el servidor responda. Para las comunicaciones asincrónicas, el coordinador provee una llamada o respuesta cola/tópico, y espera hasta que el servidor responde utilizando

Arquitectura Coordinador de Proceso (Process Coordinator)
Consideraciones:

## El estilo coordinador de proceso es utilizado comúnmente para implementar procesos de negocio complejos que deben publicar requerimientos a algunos componentes servidores diferentes. Encapsulando la lógica de proceso en un lugar, es más fácil cambiar, administrar y monitorear la performance del proceso.

Arquitectura Coordinador de Proceso (Process Coordinator)
Request-Response

#### El modelo de solicitud-respuesta define un patrón de comunicación en el que un cliente envía una solicitud a un


#### servidor, y este responde con una respuesta correspondiente.


#### Permite el intercambio fluido de datos o información entre clientes y servidores.


#### Define interacción entre Sistemas.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P6y7LpgRBs28gZ-Iw8tQuPuN6hk8Avm7CZ4b_M_-t5FZzW6NN4Ni_kedmSWivstC5ZiMuf1aHT8gioOgItMuHnbt-4IX9XcmLDVUfokpE3ZofZd5cRTwHdgvMZiksnsML939lIQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25ydwye8o3inlR9pM_1qlCqa3h18CWTIwrgmwEPp2-isQjUDqXImby6av2iytxmoHt1rX7U3kptlPoylJUTjMj5k7AvbzJkOBKKIeaHlY8IxKVn_vpKIPU9VAOBSb2S7_Xski4=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Jwzfj_GPiqacXUF978UgVHR47qbrqV6nr6goRZveEefOgR1yc0PJOSk7scy5IsjeMsRJOWSpNrUs-Vx3o8QWN9nXN5Zlj2pYymrkM2pbrYA7V49-msl67n9GRbLrjH_JCHXrXeQ=w340-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27RZcGLEup-W665MSIHpZoqbIm7VSswu_DcVEMtHMcnfeG56jJa9BKMaubRY6CbcS7sZP7N4jAY_iLYX885WD0a08KKSOxpFCrHO1JirQ7QXnecuwZkZUlhXSba7zHADpAPwq_UA=w155-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IAL8emtNRD3xC2IkAkCU0xo7q4Gxy1S_ykvpJI4iiax1nOPNOD1Fdalt83iKA9DXE705Q0vEgRSaGBWX48OsmwC0_vaX_QBgME-vDNbQMJRwc4D7E-I50kEtbGonGfkuI3709aw=w1280-h515-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aEdkBRsTuWOQLNr1iR84K1xpaIGiy3bPcXJujHYsdciYEDuJmCeU6kyw2qGZe3abRK5nGOo4aynuHwAZdufQx3H36gsJ2zfTMzUwi7bgRguIaHZA_FR8GYA3S8ZXdGozc1HuP=w506-h409-v0?authuser=0)
REST
REST (REPRESENTATIONAL STATE TRANSFER)

### ¿Qué es?: REST es un conjunto de restricciones arquitectónicas que crean un estilo arquitectónico utilizado para sistemas distribuidos.


### Es una estructura de servicio que permite comunicación fácil y rápida entre cliente y servidor.


### Fue desarrollado como alternativa a SOAP y web services basados en WSDL (Web Services Description Language o Lenguaje de Descripción de Servicios Web)


### Casi todas las aplicaciones tienen un API REST que nos permite interactuar con ellas por medio de servicios.


### REST ignora los detalles de implementación del componente y la sintaxis del protocolo para enfocarse en los roles de los componentes, las restricciones sobre su implementación con otros componentes y la representación de los datos.

¿CÓMO SE ESTRUCTURA REST?

### Datos: deben de ser transmitidos a donde serán procesados, en lugar de que los datos sean transmitidos ya procesados.


### Conectores: encapsulan la actividad de acceso a los recursos y transferencia, de esta forma, los conectores son interfaces abstractas que permiten la comunicación entre compontes, mejorando la simplicidad al proporcionar una separación clara de intereses y ocultando la implementación subyacente de los recursos y los mecanismos de comunicación. Las solicitudes son sin estado.


### Componentes: utilizan los conectores para consultar los recursos o servirlos, ya sea una aplicación cliente como lo son los navegadores (Chrome, Firefox, etc.) o Web Servers como Apache, IIS, etc. También existen los componentes intermedios, que actúan como cliente y servidor al mismo tiempo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CuLkF0DRRRny61thkX1u2o4XBESbTEUF3_iOAn9LsUTUGP29FGpgrQA-lyQYho0rGBEYKaVIWGhLpnBttLBGqMsC7PV-j6evCytX2rZGhppseLY_W7q8ER3h4PBRUmfvl1LivZQ=w163-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MYOCi4SPoTjIWQUKxh9JGCCi7126x2pZf9Iqrs2bPqTnRvGTwi_05dpq74s8w5zLultMdQIgffKeklTJ31X-EzpSgdIy9bN3BvzS5NP1CJVVazkQKtQBaGKnMTlRcJN6PkQjxsQ=w163-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pbrorDCuJtrjzTt9xbGXYD_BYEg4bTVcnOpTGn9ttiYEVK5R_IUrIN1xSB3SZ8-QXdA1LHJJgVpW7ber8LrMjm4gH2pMDvQ20V3M76LhU3DgBGHafiBP8M_scTS6cfFu7uB9Wdg=w163-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16u0Gi8Pxti7Pq8nssUQYIr2k8y6uQNrCDHquzEB-YdEbmc9qgnCyB4n7Zh7vapewXjFZZkqpUArRV7uZHFgs5o2dH5bjABCq3dG32VScBMy2UbrbFz9TAXqjyYP82KWHPMsSDWQ=w163-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sorF3LRsBjrw-E8nyd5MTc90TIxeNQLOUAkIg0VdoWc75RHKhuuYuZaLV39ULWLxF2HxAeFiUkz3c1TM3vVs-N8lMngW6RlGqpfi1HoNtw1jJMNV77hpLYyBmg_GLNXczlwreyw=w163-h161-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rF3sO1Uyxee6fNUTyT1nQcWob0Of82lxiHCD0qjCVgwsH1dALTw02e1UsluuizJT2lfYEtagzPCnMOt_8pB3aB1RtrAWBRcUOvGs8zq5N28I1GdhZpsTV7cDi4M9XVqpkLEXzJw=w163-h161-v0?authuser=0)
PRINCIPIOS RECTORES DE REST

#### Sin estado: La apatridia exige que cada solicitud del cliente al servidor debe contener toda la información necesaria para comprender y completar la solicitud. El servidor no puede aprovechar ninguna información de contexto previamente almacenada en el servidor.


#### Interfaz uniforme: al aplicar el principio de generalidad a la interfaz de los componentes, podemos simplificar la arquitectura general del sistema y mejorar la visibilidad de las interacciones.


#### Almacenable en caché: la restricción de almacenamiento en caché requiere que una respuesta se etiquete implícita o explícitamente como almacenable en caché o no almacenable en caché.


#### Cliente-Servidor: este estilo impone la separación de intereses, lo que ayuda a que los componentes del cliente y del servidor evolucionen de forma independiente.


#### Layered: este estilo permite que una arquitectura esté compuesta de capas jerárquicas restringiendo el comportamiento de los


#### Código bajo demanda: REST también permite ampliar la funcionalidad del cliente mediante la descarga y ejecución de código en forma de subprogramas

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Zu7EUD5IsugN_UcTLaUER5KDa9Sf8q8vX50lKVhKajHFj2ja59uspk_5280TCwpOcQJ0RovnCY5-wOJDKukGenu4-UV1hlKpbSP4C7FrnLkvcU-LrAO6xDjH6ZdIksVVEO3UOWA=w642-h427-v0?authuser=0)
REST
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Sx6gLCEQx4fvi_5p6ssrwNBO4gcOXot-Ezc6dg-uEFf13-duOgFc8uRi9cQdgkkxLnfvzBgMNmxc4N3utyIPdi6scpeN2m8eBWVqQqtcOirxmZzWDkPavGvrCojjCePSGadbgmg=w1280-h776-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12WseyncUVFAnN12rSlS5-4kfZRiB6fOykS7OH9W9Hqc4kMaI8UIehdadwVo5D82tzLEj-BUioM-W1I_orRkpK3A2M4E6iD7fC4FDA3wXdU7W7Fo3I5Fr_83fOP3OQzWkbGYqgEA=w642-h427-v0?authuser=0)
PROCESAMIENTO DE LOS DATOS

## Del lado del servidor Del lado del consumidor

REST: VENTAJAS

### Interoperable: REST es posible implementarla en cualquier lenguaje de programación.


### Escalabilidad: Debido a todas las peticiones son sin estado, es posible agregar nuevos nodos para distribuir la carga entre varios servidores.


### Reducción del acoplamiento: Debido a que los conectores definen interfaces abstractas y que los recursos son accedidos por una URL, es posible mantener un bajo acoplamiento entre los componentes.


### Testabilidad: Debido a que todas las peticiones tienen toda la información y que son sin estado, es posible probar los recursos de forma individual y probar su funcionalidad por separado.


### Reutilización: REST lleva los datos sin procesar al cliente, para que sea el cliente quién decida cuál es la mejor forma de representar los datos al usuario, por este motivo, los recursos de REST pueden ser reutilizados por otros componentes y representar los datos de diferentes maneras.

REST: DESVENTAJAS

## Performance: el costo de performance es una constante, ya que cada solicitud implica costos en latencia, conexión y autenticaciones.


## Más puntos de falla: ya que al haber múltiples componentes que conforman la arquitectura, multiplica los puntos de falla.


## Gobierno: Hablando exclusivamente desde el punto de vista de servicios basados en REST, es necesario mantener un gobierno sobre los servicios implementados para llevar un orden, ya que es común que diferentes equipos creen servicios similares, provocando funcionalidad repetida que tiene que administrarse.

Elección de un framework arquitectónico
Los estilos arquitectónicos son 
herramientas, no decisiones exclusivas.
Se combinan porque cada uno: resuelve un problema diferente; opera a distinto nivel
Las arquitecturas reales son 
híbridas por diseño

## Determinar los requerimientos arquitectónicos


## Diseñar la Arquitectura

Elegir el Framework Arquitec-tónico
Distribuir componentes

## Validar la arquitectura

Framework Arquitectónico para APP FF: elección de Estilos Arquitectónicos

#### Descomposición Microservicios


#### Estructura Interna Hexagonal


#### Distribución C/S N-Tier


#### Comunicación Rest EDA: Broker

(Importación de Minuto a Minuto e importación del cobros off line)

#### EDA: Publish & Suscribe

(Notificaciones de Eventos del Partido y Información del Club)

#### Descomposición Monolítico


#### Estructura Interna Layered – Partición Técnica


#### Distribución C/S N-Tier


#### Comunicación EDA: Broker

(Importación de Minuto a Minuto e importación del cobros off line)

#### EDA: Publish & Suscribe

(Notificaciones de Eventos del Partido y Información del Club)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Dw19pAtye1m-zfpOMvm4OTDI2ClVOMo1WmpL9ua66wDgfz0RAFJ3RpgUi6YqFQAf1NxY7EqDnPVyhIuQVONrNzcBe5XuOBfnaj_YmNpPF5SkWvOAzNPlnh8GxSKGLv0_0jkEZBw=w164-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1twiKemyZpJe-dP2_KEqQcjbZxzXfIiNcANnhtFGJEPBlPG42c7LMVGQUC-CW-pkJJeqD4eBPP1FObifYtHE-cr9MGm0SknoZZAtC86AlUtutuGPaw24E4jgi2G5NDq_p3nyL5dg=w254-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10WtyR-hLgaEqts4EYoQuZo1TPxG5hqBwsMTFeZEeGy-6BPg59tLTVJh1E7QqSUGxpblmh15qvn5NMpdc41ZzzAEfZODQPhrB-JbKpctIaDPk5wJN302ysIiEUfQy6JKtjIZMz=w696-h841-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27WkuPtltfsf45OCRwsGHyMH1Jz3Bnr0hK4WVXkAlKD_2CW67ucsKPM5nJqFL0_vgDCTjnD1jy75eVo5OZBIc_SiMpcCNcgOYN-je1-aZDjnBWjeH0yyAFiBn82f9WCzJTIgnu=w450-h574-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NbQMO6zuQcXIbn1id6b_7BBcEvkfH-0eKqtR5stGqIvnaFnsMmpMWSi82OjKpXR6_Rq3t6S_xMB3DJrcCPrceIEDHURt50z_xp52W8qDm3owwQfWcSPXVEA7msZ0b010ZJD0W=w435-h574-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25YuUCHm8Jr4UStJ3DMC-kSL7XX8JtObkAfIbcIdy-s8bqKFvCwaaZBv9lwwZcuy-L1AHkFry-MrQk0Ep21k2BIIp3r1aYIF3k2ucZUyJcAcTNJ47CdQTs-4tKtEy83l787Ws1zg=w476-h567-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WXCliYyYiYegyWzLUhLulifZtet1-bjvVcUGNlQ8sOLfc-e9idKlqFNhm_ZJvPvvfhHg8xXam-s0Zbgug7HPWTnMV8XwJYucY3ETLbtspqLQ_d9-8yKB4gLhNdntQ8dwayyR5=w420-h534-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2srjLR2fHhVoQ9gQxJgqagcaIPiJRv2KRLaPOcS2yXDqd7ljp8JUB6N7H1v1U7tP-09ea5p8X56N8FwYWx5tjB776W972OXPO5drhFbqyG13Az8F2jGCY4YsF3HTSvL5q5A0n9=w378-h564-v0?authuser=0)
Referencias
The Ultimate Guide to Microservices Vs. Monolithic – Neeraj Agarwal, Octubre 2021.
https://reactiveprogramming.io/blog/es/es tilos-arquitectonicos
Understanding Hexagonal, Clean, Onion, and Traditional Layered Architectures: A Deep Dive- Roman Glushach- Oct 9, 2023.
Hexagonal Architecture: The Secret to Scalable and Maintainable Code for Modern Software -Roman Glushach -Oct 7, 2023.
https://alistair.cockburn.us/hexagonal-architecture/
