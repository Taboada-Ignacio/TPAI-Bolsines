# 12 Patrones de Diseño.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto presentado aborda el 
estudio de los patrones de diseño en la ingeniería de software
, estructurándose como un material didáctico de cátedra universitaria que vincula conceptos teóricos con un 
caso práctico de aplicación de venta digital
. Se examinan detalladamente soluciones arquitectónicas clásicas y de comportamiento, tales como 
State, Strategy, Observer, Adapter, Iterator, Singleton, Factory Method, Composite, Memento y Façade
, explicando su propósito, estructura de participantes y procedimientos de implementación. Asimismo, se profundiza en las 
ventajas y desventajas de cada patrón
, resaltando cómo facilitan la mantenibilidad del código y la resolución de problemas recurrentes mediante principios como la 
responsabilidad única
 y el 
diseño abierto/cerrado
.
Patrones de Diseño
Judith Meles
Cecilia Massano
Laura Covaro
Elizabeth Jeinson

### Universidad Tecnológica Nacional


### Facultades Regionales Córdoba


### Cátedra de Diseño de Sistemas


## Principios de Diseño que vimos…


## ◎ Don’t Repeat Yourself ◎ Tell don’t ask ◎ SOC (Separation of concerns) ◎ Principle of least knowledge (No hables

con extraños)

## ◎ Composite Reuse Principle ◎ Program to Interface Principle (PIP) ◎ YAGNI ◎ KISS


## ◎ SOLID

(SRP) Single Responsibility
(OCP) Open Closed (Encapsular lo que varia)
(LSP) Liskov Sustitution
(ISP) Interface Segregation
(DIP) Dependency Inversion

### Todos


### corolarios de


### los principios


### de diseño


### básicos:

Cohesión Acopla-miento
Interde-pendecia Funcional
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31JD7xy4ZjF5t61vRpCFjqdDGFDx4qhCjM-B-DhzPtY_V-KoHTIug99-O067umMYqqbyr4OuCge1KoQc_nbM8LAMo9x4oXu6cdwTAZ68Rw_DILc_krTEAOt1UtFDt_WcbOG153TQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PCEEwQ9_WPy3wNdRgXuM_qF2QKtaDuaHS244e1TNitWdhPCfKVJyllkaP1g1gkrVcIklfnFrYItD3Y2p-zQ7eQdlScFMtQ6RECK9dlBtGMYofOWOsaNSt6z6mwXb1XUDzYxYU=w134-h128-v0?authuser=0)
Patrones de Diseño

## ◎ Refinan un subsistema o componente de


### un sistema software.


## ◎ Describen una estructura a la cual muchas


### veces recurrimos para resolver problemas de diseño.


## ◎ Patrones de escala media. ◎ No afectan a la arquitectura de un sistema ◎ No dependen del lenguaje de


### implementación.


## ◎ Permiten resolver problemas complejos y


### direccionan la cooperación efectiva entre componentes

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VvjqR87TvN93_P13jlEn13bnPYyYjpTIQiIURtzJEsD8J_kyxwNuuJH9FegRQRU4El_bK0m03_vh_fnXUCxogZFuFft3dyhR-qW6nIxi2hZHTJcs4qTxGdXMSIGQ3CUP1LmdO1g=w449-h204-v0?authuser=0)
Patrones vs. Idiomas

## ◎ ¿Cuál es la diferencia entre un patrón de diseño y un idioma?

La diferencia es el alcance.
En general, tanto los patrones de diseño como

### los idiomas describen soluciones a problemas de diseño recurrentes.

En el patrón de diseño, tanto el problema como la solución son lo suficientemente genéricos como para ser independientes del lenguaje de programación.
Un idioma, por el contrario, es un patrón de bajo nivel que es específico a un lenguaje de
Patrones

## ◎ Describen un problema recurrente y una solución.


## ◎ Cada patrón nombra, explica, evalúa un diseño recurrente en sistemas OO.


## ◎ Elementos principales:

Nombre
Problema
Solución: Descripción abstracta
Consecuencias
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv362E0foVgJDYCk-T5Wca2hQPavLiwiY5MbQzh3QZxtxOoQmqY_wkt3a7WtfmPCGe4w2nDGnBzGmWgR_t0t8QDk0WpXd1b5U5ikaCwqvLop4fagHF92Q_NMrLoPTgrV_kp3nolO=w453-h292-v0?authuser=0)
El nombre

## ◎ Se debe poder describir con una o dos palabras un problema, sus soluciones y la consecuencia.

Nominar un patrón incrementa

## los vocabularios de diseño

Nos permite diseñar con
El problema

## ◎ Describe cuando se puede aplicar el patrón. Explica el problema y su contexto.

Puede ser problemas específicos tales como

### representar los algoritmos con objetos

Puede describir clases o estructuras de

### objetos que son sintomáticos de un diseño flexible

Puede incluir una lista de condiciones que se tienen que satisfacer antes de aplicar el patrón
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xPOmKG9eVqoGTmGgvxtV3rzOmg9sEt5i6hbw5ZxZf1hC1RTCcSH062qnvU_wcwPbkSbhg9a0Ws8Hlr6KRO0Uwu6yCrDAJ2bp32llKP3OOcxziZdTKkFN4YkKN9F3he-s26L320g=w440-h250-v0?authuser=0)
La Solución

## ◎ Describe los elementos que forman el diseño, sus relaciones, responsabilidades, y cooperaciones.

La solución no describe ningún diseño

### concreto

Un patrón es una plantilla para muchas

### situaciones diferentes

Un patrón dispone la descripción

### abstracta de un problema de diseño y cómo se resuelve con elementos (clases y objetos) generales

Las consecuencias

## ◎ Los buenos resultados e inconveniencia de aplicar el patrón

Son críticas para evaluar el patrón y entender los costos y beneficios de aplicar el patrón.
Suele relacionar con el equilibrio entre el espacio y el tiempo
Puede tratar asuntos de lenguajes e implementaciones
Para el diseño orientado a objetos particularmente: flexibilidad, extensibilidad y portabilidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wcG9q5svfW_oLxz4G3dsMCBWDolEwM8nVlfnkCrkxaIVGoTh1UoY5jy-R5Hq4bFm6Ems_SJV28IX6fjsRIEQHCh66ZxX6h6XwCJQtjf3bHoATvNG6WXjSQjMrqz4FFBO8__iq9g=w319-h205-v0?authuser=0)
Plantilla de definición
Nombre
Propósito
¿Qué hace? ¿Cuál es su razón y propósito?
¿Qué cuestión de diseño particular o problema aborda?
Sinónimos
Motivación
Escenario que ilustra un problema particular y cómo el patrón lo resuelve.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QERhj0pt5FYQsW2sJ7QRpeymO8HcxKQv7HGWYMpQXwDH4U5c5PxqSVhSHZWbSbxzkQ5DOrGQkOFvO8VQqXjh3bRIdk1jV7vMAeg2Kj6fRj8PZMfl8wm3tEfVVsBm0P4k-x8AraA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NAF5Aghut0qa0vC2QyCR69C4ZaVlvkBzb89bLcX87YRQRl-uXzlNdvyylOnQmlCFsTXzrHGmN9H4-WAdOfinpszXXDmiflT4QYWkxrwS7F2m_3GBNZzTX6rDi0tcXclLq-0p3=w319-h205-v0?authuser=0)
Plantilla de definición
Aplicabilidad
¿En qué situaciones puede aplicarse?, ¿Cómo las reconoces?,

#### ejemplos de diseños que pueden mejorarse.

Estructura
Diagramas de clases que ilustran la estructura
Participantes
Clases que participan y sus responsabilidades
Colaboraciones
Diagramas de interacción que muestran cómo colaboran los

#### participantes.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Yec6RpBIdExn038gpdbQnFswe5f459pg7bSmgFv1oop9iMv7NtDVWshlIrx09F6LwpEgX0lqYA8bZoB_k7v3jWtBcKV6mZCdagfcWBSZTnWlkqqLbX2sbnBmdP3ANbFUW6XOP=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0K8n5HfjbQ86a8vOaBJQUCvwbyUgl9Vdvp1jPwLAyTEVNikwyjinOaSnnpka5LsYNj3eZVcjF9eiZTO34VLchS6PrTM_yZ_4qgdUSstY_WQdRyWhTMSxvaGr1LYjyiqG9SWN2l=w319-h205-v0?authuser=0)
Plantilla de definición

## ◎ Consecuencias

¿Cómo alcanza el patrón sus objetivos?, ¿Cuáles son los

#### compromisos y resultados de usar el patrón?, Alternativas, Costes y Beneficios


## ◎ Implementación

Técnicas, heurísticas y consejos para la implementación
¿Hay cuestiones dependientes del lenguaje?

## ◎ Ejemplo de Código ◎ Usos conocidos ◎ Patrones relacionados

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mi6i089I6D_KxFyxTU_Mn_E68XF7K0EFZLiBsnynoB5u_fRs3T8aN2wviwhVoppf2bmH_RG-lM4Ok8ga2WTXgbu8W8hZQZLc4jVNsWTmrt6l49FUjgiSw7cE5hnBE6Sa0iprC1g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09Do4WvUdbSBQS3JYrSr3l_UgdiuP7yxY9hR7NTQIDoo2s0tqJ_mo3v0cjEvhKY2wOYHfWmU0mnff2saj2bVY-x6-HDm7xOFss1KzZRT0SNOiaxCDcQ9x4ti_h91SeNkATw1g1=w363-h298-v0?authuser=0)
¿Cómo seleccionar un patrón?

## ◎ Considera de que forma los patrones resuelven problemas de diseño


## ◎ Lee la sección que describe el propósito de cada patrón


## ◎ Estudia las interrelaciones entre patrones ◎ Analiza patrones con el mismo propósito ◎ Examina las causas de rediseñar ◎ Considera que debería ser variable en tu


## diseño

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EuAVbzbt0FH9eRapLymnNv7JAapuGRgMSaFBjN6hpXqEZUuq9c8NMeLvjeVPb13gEWP2ZCUd2mNVUNZeZZmkfIdxqyD2S29hWvS-ueBgu6XMbbvk4rE99BIOnmg3OoqVZ_GJ46w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_7bhb_eLEc04cR8xSGsSM4I-zwMgsXTZXeCDvUWV4FDTvlAYLk26Uu54VF5rJid3kD7X_JCHaERIH09EzS_w-GbX8EoMb4dJkGnCkErhr6XwXd5gecP6CSsSj2LPFcTQvuwWQmQ=w461-h259-v0?authuser=0)
¿Cómo usar un patrón?

## ◎ Lee el patrón, todos sus apartados. ◎ Obtenga una visión global. ◎ Estudia la Estructura, Participantes y Colaboraciones ◎ Mira el ejemplo de código ◎ Asocia a cada participante del patrón un elemento


## software de tu aplicación. ◎ Implementa las clases y métodos


## relacionados con el patrón.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zu1ERhyGDe6HKfMP8zIVforq3XZz258eQha3JwPLbV71KED2dZdhVCY5TC9hXsgm_Y7A8pf3toszwIxtrLfRmNxOuYVNlvuZp_2_ifQNpAW54QxdB8StWjvdfQkTJCeb-T6a_JQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1RRqzgKZiapf_h2bz1_tIujEjbiN2g5D_JC9IaXlUag0gDEiSmvIzQtvMvHjQ9o9kCdz47_klUc9s93rnMZ8G8dH8QjMhFNYYNOn9fIrM8Gz2esW4mWMimtOPRi67xVr8P2J3SEw=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01SIxZhM1FCeFHmC_dgA2u5Fw231X1B2TwXA2iuN07M9nEgFCI8zh-tYsJicMoq5QYh8oOjaxXvfQ-IjMd_1nVwBAu3qqbDKQdDGpu91oVps49Nn4D4vcc2OfNmZKI9g-E0JoANQ=w34-h34-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qimkTphssqMkNdUCzE0WHKleG3ChxFiBczRejvjrQaE46WdKaEEn2n8TwkADpzp_3rMoCbyb1iRC-yM0E-2Iqx-6D-V5FAr96YTjuCbZsuNq5-FxpzljrMjembZnO_D5lj7eWWQ=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jhg6hz9-Ekc57Q7EMa6LYpt8YSMTEe_ELjtqf4C5ov7U8YdYYql-kTB7tLjOWwJr4fhQ_DzptHdd849rDGa3b8kNz498HlO8Yo4CFXmLKT3bHUYhpZZ-JifYKvgYlvVrz9whp=w34-h34-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DtmZ01RXPgd8eid4lQh9_ojjiPdnjSsW_DxZJH0Zp2p0gCDDYSDdJjxFIevgmoccHYnTcbj8HUYTAqOetVIncOcQoxxYgZsUhh5dbBbth312n28hfoJZUm5-CoGehRTDJ3VLV7g=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv262k3m8LyN13ROkrT90DQVfxhVMsb1mJGJ3EP-whJQPh8pNpCZNk5-tyUWbaYoPBw-HFX0CokHk7pAagdDSYj5l6LakThNGxTuQxOjtdefEBB6G6ozoVZ8ClulKhwT54CZH634SQ=w34-h34-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27_lpNLrcjVyzOkP8ToHnQnmJo_BSunO6-O0-PFDGDVtv6bhu9IsjAAcyoPHcWI5RoKrQCodZWC1P_OeplQYnF3MiDJ66yqTBuOsuv4Jll3Cnr0LnZjxr3dxIuD3XMor-KOgI_=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Fb3JBKuJV5m3Kpco2MsNebEP3ZQry_1GHWN3PpFQwcnKLkLa-ptf_NPZ16ayVVTyn_e8Weo-0rF3h_JC7I0rLBY8NqWQpjgpLxgOKX_Ewz4IVyX3KT-diT0bEwfE8crGF_IhocA=w34-h34-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LKQzRYuTIEfB2fhNpmv-MKuV6KrzEu0jHlBelQ8r1HQG4GZqtCVZtVC4xdy_Yie44rtOi3nAyzXWn7P4v-jgzXjZN-oH2BarSbUoKkq7VDLT0_wQhuPsf9pKfy1Vd8dXfOISmMw=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bxs03BFSPnht9t6ydGnlV0I_5xuQ2ARcc1HMT8DlbSuFCaJTbQCISleg4MMNKzQNUHMNKFH_m1bsOWea4IarZAB3NMOnFswrV9CR3dfKM8pXwQvdPLP8HScTMLlH8RQlcSASr=w34-h34-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1v6P3RbUSJI-auJp6LYGokEopaExTC0HoklQFyJbBQdKuovTK24enH8iw_p-1QEkEElGOkS5GpZQYy-hcf1TOifURMLpjpFipRrgQc5Jj7qh7R545Q2Llw8FD-JihE1Fy1KBz_cA=w155-h97-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dptUTGmbaMgEoThfNy0sYRXZwfyNcF99ylCXolbOmlXOJSNjvQRbHEQKYd7hRp7TaveE_HkihN2lbvAUSUhbkM3QydJmzENjyGPdqe7rIAmEDmwuIma6PJuRJGSwy0cQNjZRr5A=w539-h377-v0?authuser=0)
¿A qué ayudan los patrones?
Encontrar objetos
Determinar granularidad
Especificar interfaces
Especificar implementación
Favorecer reutilizació n
Diseñar para el cambio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AOIJuAHxew9uJhT1rae7AOOxnpQ_-UNL8IKKmYZnjWTKQGOBLdrSTxMUlF4Tt03Fw7dY6aNpqWAcG7uqfR8adN7Wyl-6tES6B9FTIyQlye0kYD04xhic1m460tTDW9hkb88bLzg=w1015-h571-v0?authuser=0)

## ◎ Encontrar los Objetos

Tarea difícil
Debemos considerar: encapsulamiento, flexibilidad,

### dependencias, reutilización, extensibilidad, rendimiento,…

Clases del análisis vs. Clases del diseño
Clases del diseño no tienen contrapartida en el dominio ⇨

### Fabricación Pura

Clases del diseño son claves para hacer el sistema más

### flexible.

¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ssg_9aSRDc3qdAlxfUkdCJUhZFV_0uDCXo8-jJIO6LfJm3CV9IyhDcjytSD1hu5Ct3jwukZuhkkY84RsqKBbl9fWaDbHTWU-E9JHP4mPsMoEn374DW7ZFMghw-y9pEo3Rg0k=w1015-h571-v0?authuser=0)

## ◎ Determinar granularidad de los objetos

Facade, Flyweight, Builder, Visitor,..

## ◎ Especificar interfaces

Memento, Decorator, Proxy,..

## ◎ Especificar implementación de clases

Muchos patrones dependen de la distinción entre

### herencia de implementación y herencia de interfaces

Observer, State, Chain of Responsability,…
¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QZVVIENX_Tn7MhrTJ25uP4qEu-3OKys-nNK_yBaclGNaj2hM4peAPt6oHpeaqGKHw7Fyr2OgZ-p9mPXq4B4OgtrVKLPsWRKzML5sOheHicsbBDbyT3nxlrojCFS30twdMV0Rc=w1015-h571-v0?authuser=0)

## ◎ Especificar implementación de clases


#### “programar hacia la interfaz, no hacia la implementación”


## ◎ No declarar variables de clases concretas sino abstractas. ◎ Patrones de creación permiten que un sistema esté basado


### en términos de interfaces y no en implementaciones.


## ◎ Favorecer la reutilización ◎ Delegación

¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lg1g4bsDj7-6cAfCqXyKGgf8V44Wc1G77ML6le3Lb5PwqPjPzEBwwh-MlRan2LJ17wGLru5sURiK_gAFrPKCT3TY9DsuliaBQSDiXMBkLW53zgkVqTr4UPiBNAkTaA4DqH2HjWw=w1015-h571-v0?authuser=0)

## ◎ Favorecer la reutilización


### “Favorecer la composición sobre la herencia de


### clases”


## Herencia y composición trabajan juntas “Se suele abusar de la herencia. Los diseños suelen ser más reutilizables si dependen de la composición”.

¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20kbZSH8J7wYNBen3gRuihQNiXotlkICHtKi-hTW2v4TE6zfBdSds8OJErHbLI2PPHat9NJM-34Xy6OcRjcbc18prbbczFNGbpHdnFV0nLUwGsDbThuXv_r7xUbStf4Mi26qaSJw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CHJS70EYWv3xLQqTS7sSXX4uv_B39R5wYdSiZc8RXmthKat0FHQSXct_f6Tv0q7Ee15ZVfmoM2N5mOn4rA8DJEjafhjlPNs49QfLmuzzXuR0bQtC1s44dOwI2uEOmFF7zdms8=w372-h261-v0?authuser=0)

## ◎ La clave para la reutilización es anticiparse a los nuevos requisitos y cambios, de modo que los sistemas evolucionen de forma adecuada.


## ◎ Cada patrón permite que algunos aspectos de la estructura del sistema puedan cambiar independientemente de otros aspectos.


## ◎ Facilitan reuso interno, extensibilidad y mantenimiento.

¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VcIsre5fySdSOlmnK-SGxeOGEret6Nh9g5uAne2QhtNoI_5jP5Cezjek7YtIZqZe3xa1BxPSnAVJ_9jTvRI2L7CO2NWWAHuZeFwPQek3FB5eGwF_rvEcQMMtgFaRn5-fBaVXPoQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aYpu6BNnusqPqzzPzVgJWUcPpdSdP85tneu62zWQhqhBfb5DysLXqkmu9tsZ5Su8t1R7CVNp-O0igF_4Hx-4rvEUQZaz8SkoZKC_CbKciM1pYKquASiGk7WpTjyqVmyFgmgUfGw=w88-h82-v0?authuser=0)
Tipos de patrones de diseño (Gamma)

## ◎ Patrones de Creación ◎ Patrones de Estructura ◎ Patrones de Comportamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LflfOk_9978adRDF3e8N5WsXOb3luKWamjdKXkv4cKw8gavkUjmZNp4r44K7Jdarew9wyGovC2loBPvsy3IkD0zYM5B23P6mbQV-xagxGb0pPwjPZ77i3hpiP4Y1F5XgmZMcMPg=w1015-h571-v0?authuser=0)

## ◎ Se encapsula:

qué clases concretas usa el sistema
cómo se crean las instancias de esas clases

## ◎ El sistema conoce las clases abstractas ◎ Flexibilidad en qué se crea, quién lo crea, cómo se


## crea y cuándo se crea.

Patrones de Creación
Patrones de Estructura
¿A qué ayudan los patrones?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Wvm-rGTxPFizoRhUURC0dcenJ793T0PHwNR8RkMM-Go_FGiOrVbAG6zVupl-N_icwYt6Jv7o7NNGlbMqOC1FtiO8nS6iXxlAfkCTSrySjpjm2orRDDvXuygnFnRhqkLkYd6b8WA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dd0SaaDccROe1JuSZx0QYqrVySRb4BQyQyc5517ULoull6jOA74iLgT5hTdBKhDPG09tMzcQXeZ9vzm_IG744Ke_P4dVImyWt2DbJnY9TCBkjRA3kYWUJI8sdra_nFt0R3dxvkw=w206-h245-v0?authuser=0)
Patrones de Creación

## ◎ Abstraen el proceso de creación de objetos. ◎ Ayudan a crear sistemas independientes de cómo los


### objetos son creados, compuestos y representados.


## ◎ Dos tipos:

Clase: usa herencia para variar la clase que es

### instanciada.

Objeto: delega instanciación a otro objeto.
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38KaxUxCMffTaFflfzOxekhfKVJztD8scbaiJ01la1qTuBjvpktWjgb3GlDxMbOKlbrVLvKBsx1O4A7CCrqCnx_MgptVvD9ZTses4DWTLZ0FkhfYJHqq2yUhMGCQWHjo1MH0NWXQ=w1015-h571-v0?authuser=0)

## ◎ Abstract Factory (Fábrica Abstracta): Proporciona una interfaz para crear familias

de objetos relacionados o que dependen entre sí, sin especificar sus clases concretas.

## ◎ Factory Method (Método de Fabricación): Define una interfaz para crear un

objeto, pero deja que las subclases deciden que clase instanciar. Delega en las subclases la creación de objetos.

## ◎ Singleton (Único): Garantiza que una clase tenga una única instancia y

proporciona un punto de acceso global a ella.

## ◎ Builder (Constructor): Separa la construcción de un objeto complejo de su

representación, de forma que el mismo proceso de construcción pueda crear diferentes representaciones.

## ◎ Prototype (Prototipo):Especifica los tipos de objeto a crear por medio de una

instancia prototípica, y crea nuevos objetos copiando de este prototipo.
Patrones de Creación
Patrones de Estructura
Patrones de Creación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1l1iQSSn8crb2pJgoh6wChm89ye1BWozq_NrkBu_BWt-WxxgNMRjPcznB6e_r5G4HszCI2B37vGLit69Rk0O94elQhDHAblH0YHKaWry7ZrTEeWUhl1NKrgboRS1fAwN2unjQa-Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JnrNXlfq0MAQ06g6uByiOeAMzY2LTiu5fKe4QNWUJtePvDNkrc58WRBcvCvlEWsLCm_q9BJOlygWsg8ueC6UlUj-fNH6Hto0jHwW2N0Aymx0sF3B9kRcuIn0QxIoCgqptcWmNyg=w120-h120-v0?authuser=0)

## ◎ Determinan cómo combinar objetos y clases para definir estructuras complejas.

Comunicar dos clases incompatibles,
Añadir funcionalidad a objetos
Patrones de Creación
Patrones de Estructura
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rXdLQ5CsyUbzCtYsOnK4yGl4fjKdKynyCRQJHJLo2-bq3mkV5QGIGAUN8zfr-23cRI1Sa6xkla_rC-w8ncmnSuThfRtzmspJ8aNRt9JN2FqbDfzVpjENpYKugvERaS54LgM7iYg=w1015-h571-v0?authuser=0)
Patrones de Estructura

## ◎ Adapter (Adaptador): Convierte la interfaz de una clase en otra distinta que es la que esperan

los clientes. Permite que cooperen las clases que de otra manera tendrían interfaces incompatibles.

## ◎ Bridge (Puente): Desacopla una abstracción de su implementación, de manera que ambas

puedan variar de forma independiente.

## ◎ Composite (Compuesto):Combina objetos en estructuras de árbol para representar jerarquías

de todo-parte. Permite que los clientes traten de manera uniforme a los objetos individuales y a los compuestos.

## ◎ Decorator (Decorador): Añade dinámicamente nuevas responsabilidades a un objeto,

proporcionando una alternativa flexible a la herencia para extender funcionalidad.

## ◎ Façade (Fachada): Proporciona una interfaz unificada para un conjunto de interfaces de un

subsistema. Define una interfaz de alto nivel que hace que el subsistema sea más fácil de utilizar.

## ◎ Flyweight (Peso Ligero): Usa el comportamiento para permitir un gran número de

objetos de granularidad fina de forma eficiente.

## ◎ Proxy (Apoderado): Proporciona un sustituto o representante de otro objeto para controlar el

acceso a éste.
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0N931h91Hk7H21ricXKvCUyC4kyVom6ScB5U1ubYxM7qNxIEqfKUXzt4IcGmAR5XyNAQnk_dWCOzgxcgmDbmce2skB6kTU6Ia0CWllECgto8axjO_smmUCkXT2PZ4JztShYibJ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38UHllyyuFcZSPOTXpN2mkKisau8_S2meJn5HJcV2rMjUb6r83KsLqbIp_IE9CE5Psc06Gd4aUHIy1xt4QR2IfANMOMPaHFFniwfXhpxmoQlfzuiG7yzn4aK0BzUCAharG41M3sg=w120-h90-v0?authuser=0)

## ◎ Se ocupan de los algoritmos y reparto de responsabilidades. ◎ Describen los patrones de comunicación entre objetos y clases. ◎ Podremos definir abstracciones de algoritmos (Template Method) ◎ Cooperaciones entre objetos para realizar tareas complejas,


### reduciendo las dependencias entre objetos (Iterator, Observer, etc.)


## ◎ Asociar comportamiento a objetos e invocar su ejecución


### (Command, Strategy, etc.)

Patrones de Creación
Patrones de Estructura
Patrones de Comportamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kUYjZZjH3x9YLIYaORy_EEPwgZHNmP9wEoBtUiESG9ChMeO_4XOxEW6dHaDDwMxzqR26q-aj9s7WV5Pnc-Iva7vkShoh2cr2SkRdAeNmoPK7tuNUFf2btrPpu2N9LRv5snnW9=w1015-h571-v0?authuser=0)
Patrones de Comportamiento

## ◎ Chain of Responsibility (Cadena de Responsabilidad): Evitar acoplar el emisor de una

petición a su receptor, al dar a más de un objeto la posibilidad de responder a la petición. Crea una cadena con los objetos receptores y pasa la petición a través de la cadena hasta que ésta sea tratada por algún objeto.

## ◎ Command (Orden): Encapsula una petición en un objeto, permitiendo así parametrizar a los

clientes con distintas peticiones, encolar o llevar un registro de las peticiones y poder deshacer las operaciones.

## ◎ Interpreter (Intérprete): Define para un lenguaje dado, una representación de su

gramática junto con un intérprete que usa dicha representación para interpretar sentencias del lenguaje.

## ◎ Iterator (Iterador): Proporciona un modo de acceder secuencialmente a los

elementos de un objeto agregado sin exponer su representación interna.

## ◎ Mediator (Mediador): Define un objeto que encapsula cómo interactúan los objetos.

Promueve un bajo acoplamiento al evitar que los objetos se refieran uno a otros explícitamente, y permite variar la interacción entre ellos de forma independiente.
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ru0HHQdYaM53z2cUUPTQSNfM1k8M1lytv0NqKizPEYw88vscPcH8j5DvuSuIRgeEzI1-6VX2u2zMFRwtLxI5hmqG2C4b6eXRRKGgYYfiMrXT0hrU_m0_JNTjgcYVmIuofakwhsw=w1015-h571-v0?authuser=0)
Patrones de Comportamiento (cont.)

## ◎ Memento (Recuerdo): Representa y externaliza el estado interno de un objeto sin violar el

encapsulamiento, de forma que éste puede volver a dicho estado más tarde.

## ◎ Observer (Observador): Define una dependencia de uno a muchos entre objetos, de forma

que cuando un objeto cambie de estado se notifica y se actualizan automáticamente todos los objetos que dependen de él.

## ◎ State (Estado): Permite que un objeto modifique su comportamiento cada vez que cambie su

estado interno. Parecerá que cambia la clase del objeto.

## ◎ Strategy (Estrategia): Define una familia de algoritmos, encapsula cada uno de ellos y los

hace intercambiables. Permite que un algoritmo varíe independientemente de los clientes que lo usan.

## ◎ Template Method (Método Plantilla): Define en una operación el esqueleto de algún

algoritmo, delegando en las subclases algunos de sus pasos. Permite que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura.

## ◎ Visitor (Visitante): Representa una operación sobre los elementos de una estructura de

objetos. Permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera.
Patrones de Creación
Patrones de Estructura
Patrones de Comportamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aW4WegsNfzIVZLMl9srxot6nh2jT3pu8wWs0Dp_HXETx-BafvKEulUJzNowhq0oxxbi0p-SEHImGsjJM7bFQlpXhodhkoYiDakX9hunkMOFZRkOCXnV45gDDK2Brqh4aYp5lm=w1015-h571-v0?authuser=0)
Clasificación

### Ámbito


## Propósito


## Estructura ComportamientoCreación


### Clase


### Objeto

Factory Method Adapter Interpreter
Template Method
Abstract Factory
Builder
Prototype
Singleton
Adapter
Bridge
Composite
Decorator
Facade
Flyweight
Proxy
Chain of Responsability
Command
Iterator
Mediator
Memento
Observer
State
Strategy
Visitor

## Patrones que se pueden evaluar


## desde Noviembre de 2025


## ◎ 1. State ◎ 2. Strategy ◎ 3. Observer ◎ 4. Adapter ◎ 5. Iterator


### Objetivo: Dar soporte a los procesos de venta de artículos, cobranza, preparación y despacho de los pedidos a través de las empresas de transporte contratadas, brindando información vinculada a la gestión y a la toma de decisiones.


### Alcances:

Administrar artículos y kits de artículos con sus tipos y medios de soporte
Administrar catálogos de artículos
Gestionar pedidos en todo su ciclo de vida, incluida su preparación y envío,

### notificando cambios de estados del pedido

Caso de Estudio

## Alcances (continuación):

Administrar clientes y las tarjetas de crédito con las que operan
Administrar marcas de tarjetas de créditos
Gestionar la cobranza por tarjeta de créditos
Gestionar comentarios sobre artículos o pedidos
Administrar empresas de transportes y sus puntos de distribución
Administrar medios de transportes y formas de envío
Administrar usuarios y la personalización de sus perfiles
Administrar las ubicaciones geográficas y localizaciones
Gestionar la entrega de pedidos y la devolución de pedidos no entregados
Caso de Estudio

### Alcances (continuación):

Administrar motivos de no entrega
Brindar información sobre pedidos y su estado
Brindar información sobre los despachos de pedidos por forma de envío y por

### empresa de transporte

Brindar información de ventas por cliente y por tipo de artículo
Brindar información sobre frecuencia de compra por cliente y volumen de la

### operación

Brindar información sobre los artículos más vendidos
Caso de Estudio

### No Contempla:

Contratación y Pago a proveedores
Contabilización de las transacciones
Logística de distribución de los pedidos, está a cargo de las empresas

### de transporte contratadas

Gestión de Stock, sólo se descuenta del stock lo vendido.
Caso de Estudio

### Reglas de Negocio (de la funcionalidad afectada a este taller)

Costo de Envío: El precio de la entrega se determina para cada destino y varía

### según el medio de transporte y la forma de envío.

Opciones de Envío: Se dispone de 3 opciones de envío: un solo envío, los

### mínimos posibles, y tan pronto como tenga los artículos.

Único Catálogo Vigente: Sólo puede existir un único catálogo vigente.
Kits de artículos: Los kits sólo se pueden armar con artículos del mismo tipo.
Forma de Pago: La única forma de pago aceptada es tarjeta de crédito en un

### solo pago.

Caso de Estudio

### Reglas de Negocio (de la funcionalidad afectada a este taller)

Notificación del Estado del Pedido: Se notificará al usuario en cada cambio de

### estado que defina o afecte la fecha estimada de entrega

Cobertura de Entrega de Pedidos: Sólo se distribuirán a aquellos destinos

### donde alguna empresa de transporte tiene un Punto de Distribución.

Empresa de Transporte Asignada: Existirá una única empresa de transporte

### activa para un Destino, Medio de Transporte y Forma de Envío.

Caso de Estudio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ytucjKL07mzALxhTZa2E0_-zTydp8NUGNUeY7EN68mF_P6Ibo8V4oVOhfhX8TuBmODSFVUs6cdc_QbhYW3n876fs64_rN0BU5MNZe-oxijMrw8fBw9Q_bdbk6CG_utzuYzMPd=w1280-h673-v0?authuser=0)

## 38Caso de Estudio Venta Digital: Modelo de Dominio

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ozLvMKGt7DE2QYca0xMK0MiijBohPaqsY7jiM9yzhAD2c_Mt2QzLIJBfBLD7bV7pG9U18puwdipt0wvH-hwPe5bpV8try8BR_y-scNJckzi73KH4V8dsQ64lkBqrxfQelA0718Q=w1280-h789-v0?authuser=0)

## State

Pa tró
n d e C
re ac
ión P
atr ón
de Es
tru ctu
ra P
atr ón
de Co
mp or
tam ien
to
State (Estado)

## ◎ Propósito

Permite a un objeto cambiar su comportamiento cuando

### cambia su estado. El objeto parece cambiar de clase.


## ◎ Motivación

Una conexión TCP puede encontrarse en uno de varios

### estados, y dependiendo del estado responderá de un modo diferente a los mensajes de otros objetos para solicitudes tales como abrir, cerrar o establecer conexión.

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cX6bvhamLNrag9IG9NjQodXVuckSM3XMRTz6AgdurUBP3DxteQqtoZHlceAdYF8Kk5KxBciGtEaxZ0u4aU8sfwXfpsqf7wXImVrlcF5Hqhr-96FUMmJN0ax9gjpvHW7imtxWq=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2F1fPlSTzE6bPxJZtgB5WtjnLmLFqrrCmCAae5w7C238nLYpA1Et3rMQARKef66yMX24i4843XcM537s8SqA8Zjh8N4SJepkjR6tYLou3WMtKtn7JCpX673QpJ2c0jzwKlhRT7GQ=w1280-h360-v0?authuser=0)
State (Estado)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hw4LReISLnHO2Y8U12TfxW6XTh8VZsunKJkBjInlNXx8uNHmdIq3rBgsfi7jqjpnJkojgi4l7soLon7Fl0acerJOQzuInN7uw5yWqfKOjxDSzBmjbszvJ_NIiTaA0xPCmyLYN_w=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

El comportamiento del objeto depende de su

## estado, y debe cambiar su comportamiento en tiempo de ejecución dependiendo de su estado.

Las operaciones tienen grandes estructuras CASE que dependen del estado del objeto, que es representado por uno o más constantes de tipo enumerado.
Patrones de Creación
Patrones de Estructura
State (Estado)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06gelr9J9Tv8JL7TwPflsmc1pM23OAI92n05b6uyBluQVXINIpUOkZ01yy3qolXbtqL2fD4E0dJOIshFM3TMJNIvkfqVxtbLGoBeHv5wJ5U9pubztu-p8EZKx98ZqghbElyfyp0g=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Coloca todo el comportamiento asociado a un

## estado particular en una clase.

Subclases vs. Sentencias CASE.
Ayuda a evitar estados inconsistentes
Transiciones de estado son más explícitas.
Incrementa el número de objetos ￮ Posible solución: Los objetos ESTADO pueden ser

### compartidos.

Patrones de Creación
Patrones de Estructura
State (Estado)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3n9p4SWCOIbQz0nkXhpZfRxRkSXbgA5tWlUgxRooBrZ9mQg6ns5ECHhQIDmy7J0EpkBd9uKdJYElCqdgXPVjg4VPYynk5eS_DkWAbSjBwmfNhM0r2nT4fJBcBzc8ZPfaPWm_ENEg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iz3zEkGwuwk6H19uIPLZIjDbD3_gdjigZv1usczbarTIU8VELCLQxOtlBtTtLrigop02A4BmaFknSzBmRhWce3-yAZuPqfeic11x3vGR-jYcYsDuJJvq7gyyjWl3nHiSBzKBj=w1280-h705-v0?authuser=0)
Máquina de Estado de la Clase Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GQd4Rc7CtMMHBV_0kudQ285HvoMJt9jqppbOH6X_lB1lvIA4G-EphuP3XF5gS4Iy2TsUoAeDjRe5PfuG-DIMWq5LAsQpoMkAcE1VWPGG8KaRgkk7oGwz6NIAnkwEIFztdN1FR8g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Wim_uEzdsYi0vlgzSdj5SEo9rRTePqDKYlYd6f-0pQXehGa-0IeJeOLWVdD3CRCB7s3dqW876rQGE8SoKSXomkmmidL3oD0XiPBwVERYUfLtKdVX-zpmGu9lDP7bl5ZZBbiBx4Q=w1280-h701-v0?authuser=0)
DetallePedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JL7OKg0cgubONB1SJMt8NTEhDCPrVeTlY3HvsJvqqd6aQPo0W-2ZcZvy8i8Ssa_zPJ0Dtgi50uzFlapdrDgz7_pf6vzJvKqbfuIBDaC-r246e-UBEjIwTqR4AWDAQyp7AZez2mQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BFQkSktY6GUQXKafwLSszo6xGQF4RPnQ_U_alKEI91S0fxPA56A8lfe22sAzSTXyw3l-0z8IuXxyFRB50IwfmgMqgJfI-GDMNelYgQ5Tc86MudM5KBatRxpW00xnJn1QlSHjTTA=w1280-h529-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pKqeRmqCjPj6a0_BiYoLLoeUIs7B-wbuWtj9hLY9vs93m7teB3fWFfG2aoZZROFK4Uq1d-YfnzGFRS2CQ7Lsp8fHwbfx28m8Sj2jFGu7BGzo6Q1UfP0qFYziUSMla8OWYNGJq=w719-h895-v0?authuser=0)

## Vista parcial de la Realización de CU de Análisis del Caso de Uso Agregar Artículo al Carro de Compras

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OTNEPJO4x2fItORs2SEUnOQq3QzdrBfhRF5tFFy0fNdf0CKFLYLDQaYy-WHK738jYJFAImXQbKvNBvZHEu2Cjcl5nirkKDiBa6yWsVdZs1E7KnxThkdZdTFaSsHA0UkG_GsbbqA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24FrdPfFVyM_yR9EIR4TpFhDmMmiIXResDGjGcCfMg7QXTZ0QnCrgPm6H8CziqjZdJGD9Fb1n6P5j6UxJX7VXxbQomqSPuCbA1B5qRvXRYt3Do3O4tY3TvElogPuO1IgbQoniirw=w1280-h629-v0?authuser=0)
State: Aplicación ◎ Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UF_zYY-ACUH72xbbIqXDsqC73w4XwZHDun8kZUzYS0jBraH0rR1_YMwZp0p362Zf86Doi8nx3SKrXk--IdOzC_WvEUoR9U1HmoH4a_0CDXDYKpGejG4YaksdW0Rle31G4SrzLRg=w1015-h571-v0?authuser=0)

## ◎ Participantes

Contexto [Pedido]: recibe el método para agregar un producto al pedido.
Estado Abstracto [EstadoPedido]: define los métodos abstractos para cada estado diferente.
Estados Concretos [EnCarroDeCompras; PendienteDePreparación; Confirmado; Cerrado; Despachado…]: resuelven la petición del método en función del estado concreto que poseen.

## ◎ Procedimiento

El GestorPedido le pide al Pedido, que agregue un producto a la lista de los productos que contiene el pedido.
El Pedido delega la petición, en función de su estado actual a la instancia de estado concreto que corresponda: EnCarroDeCompras.
State: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cjesuQ2zOIA885TMicYtDzisJYdtmnqK0kXvY7UvWG9qErPMXYjx6JEFg9JWPJ4QdK93wTBrjeX9kclAyTwCKWClDGDPP2d8UR201jTM6hiPLpRc29reidvIRyn_5eFyp1bCcvQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-vkz3z-4jZ_Qafe4yvq_W17dmQoiCT-e29cZk4P9auRaw8-p3j0BWPR36PQrabLEp4lMhX7lK7kH6bBZAmcDBnM-L7GWmBaNqq8QlHZXWWfEjcYSyXPyXOH5mpNYb1dCgOyldaw=w1133-h528-v0?authuser=0)
State: Aplicación

## ◎ Dinámica:


## ◎ Ventajas:

Se eliminan las sentencias CASE utilizando Polimorfismo.
Permite crecimiento en la variación de la lógica de negocio en función de los cambios de
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qAUWF_zQpvum9Yz9_0_R9t9xx8eRuYll87mTegB0ibwBMbIpGhUvi2bi92TDjVqeDp1ANbyyMUL6pLn4MhqkN3t5WSe7Na7Hm4v_ooytkyZ9d5B0FX7GaCLHFkcreW4JhX15pTQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv391_axqSAXji3bmKVXmah0-jf9AngsdlMm2ggnonBLxpTnrrBSlB61XcfZMvimrjzRsDfuXZuTZD0xOeyrfWv3kDNTZMjSv49POoisIynLMoC6KMFQgq1_rlL2FekEbGrUGNXX=w1280-h824-v0?authuser=0)

## Strategy

Pa tró
n d e C
re ac
ión P
atr ón
de Es
tru ctu
ra P
atr ón
de Co
mp or
tam ien
to
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sky9N9b_wJOzOlo7lnxiLUyIRLz6uGAmzgHRPa1HY0uuVhfm8bSmQyve7DDzLAYB1-1z0tqVwpozftAjlWPkwUTgTmdm0NhdcWTpHDJUJ1Io1aD7bDzbv-6IRV90C2Vv4Xn0sng=w1280-h696-v0?authuser=0)
Strategy

## Strategy

Strategy/Policy (Estrategia)

## ◎ Propósito

Define una familia de algoritmos, encapsula cada uno, y

### permite intercambiarlos. Permite variar los algoritmos de forma independiente a los clientes que los usan


## ◎ Motivación

Existen muchos algoritmos para justificación de texto,

### ¿debe implementarlo el cliente que lo necesita?

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OSW_jWlGQjAbh5V27w-4_EOHwjv74lP7NdiodzuN74SKO3uIQozYoTsp6Uzovqr7DP7Uh5say3V8SDymkD4rs06_RNfRvKFhXz3b2z8e7PU7WrWl6u1xcpfvTSRTChdRAUSfurQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02B9JJG-WPP08DIsOnKud_6J1g7t7OXQZLCUkst0CbXJHOMvAwhJSBUOON5wVdLVOxldRMo8mmKdmYE-qMYqsYPB7Csgn4Wwyi0-Vh1OmbarYI-kS3pLACpk1WVrd7lN1SZvepbg=w1280-h354-v0?authuser=0)

## Estructura


## Herencia

Strategy
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31rlXuraeW71VsFo8MGykQSah4p94x812Xd1Ez6QpsQOL8F0xP8c_MBrT3JQMnRpcjllXVmxYLVSMQOlvt16iQwtIbeLoJAT7DlMmTRzAIX9uZ4T7qzftXC3Z77vUICUVZ_QkwWA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XXKYexk8Ac9r-4N8Q300xHOJKWfU5OfRn3cs4FRYRbcMLdN0RaoFaZ7WNGXvo9pJCxRNOdO0g9G63r8Fm0e_yCUF5CCVC1zeQpq6tXBi3kNx1RC7OE5AletI5Hot2E-6vLe9O=w1280-h309-v0?authuser=0)
Strategy

## Estructura


## Realización

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Jw-yT9qx5kdOIw7hbwLwAl6u1LtbyI8gLkvAyGiBTc8j37zlZn9zV020NDjB3thO6qHWz0iWJvWHnVzMuliCE5_54VnJtrcqQrfEVamA4_zo77s6VhYkFXjp1QUw1Ftxr_F6GmQ=w1015-h571-v0?authuser=0)
Strategy

## ◎ Aplicabilidad

Configurar una clase con uno de varios

## comportamientos posibles.

Se necesitan diferentes variantes de un algoritmo.
Una clase define muchos comportamientos que

## aparecen como sentencias CASE en sus métodos.

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rXbo2DsY1j9YYzQPrfFUCHjJ9agAra7-NVEB8MS5MadDaf4BP5dbG6V03Qs4-1BgQXErs0bvsWS0E5kQx61slNsVEkNGqFeJ_PbBqecgzI6syJ4Tvn_FgU2z2-aJrz4LDCsL-8g=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Define una familia de algoritmos relacionados.
Una alternativa a crear subclases de la clase Contexto.
Elimina sentencias CASE
El cliente puede elegir entre diferentes estrategias o

### implementaciones: debe conocer detalles

Se incrementa el número de objetos:

## ￮ Solución: usar Flyweight

State y Strategy son similares, cambia el Propósito
Patrones de Creación
Patrones de Estructura
Strategy
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35hSVeFcQo0t_IWV8p5tw5_SPXC78YPubIOZ3vxLav2u3yDYHCb0zfpwsfuXg9pSUHWz1j-6xRUyj8x8y52RV8qbT805ivfBKmLS0KX0T85nRa0x7eLxHIzW85x-jYUuIEIAoXMw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lV9JdGmvrzf5UHpKCihhm1JCmmji0LbtFeoLrlyC0hk4dJlbBq4Z2JvTEbiPuEQ0suN5sm8HDHCDiydLO9IUOM_iGC0U1d9pH3cG1Z18W5GPd9ByUIrlGSiLew7S_Lntj8qvivA=w1280-h1050-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Cr2RQSJ4X7aGyZKtZzeOziW2txHlirSoT9V1X6fOpa9_4o1XJthmWlwp5SCMza0Q6nE3cZu2NofQ8aSSNijGyPpWETwT9aPYu7PrNS7EMbgNbRTwNjK_glEn4eyqHqLoh4kMv-Q=w1280-h658-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ulOv0UEejZzOiWyKzMaHdPNwc-XF77grC7vi8PWrFzm3GR2siHs5cKUW68IA6dCIIdcbGZQJSHGjEwdNzHePrhQD4xdskq7AM62u3vdDr1axjQeuZ8KJbPoFBLij9q8HYfvVa=w720-h426-v0?authuser=0)

### Caso de Uso Generar Diagramación del Campeonato

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tlnKyesQATVMJXNG4H8Q849FWZmxgxaqLlvlDGdEGvzHChJXV7wZYOaQHJlvgiY8SQWqaYk7F3a6LkpTAfJ4zVNmEXPgoQGHLgdmsChmhjeLPhrxpU5g_C8K9dSh7EI3D179D=w1280-h603-v0?authuser=0)

### Caso Liga de Fútbol – Realización de CU de Análisis del


### Caso de Uso Generar Diagramación del Campeonato

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z6752_ZRE43sCSH2YkBvc92oMJwxcEmL1Dmlk3VsjGTKuNRGuwRooh3XoLpZx8_7UXb5WLNNNPQ_iw2qPchRtrJMGO26702IMFAJVRp3QxQMOOPO7fM2WAqCJQuDHsKbgbp7S9g=w669-h758-v0?authuser=0)

### Caso Liga de Fútbol – Realización de CU de Análisis del

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12e8cerMsqa45hI4G7kepub8CVIcWxOYDeM3D_u_EKRPqTAEC-mB7ix0ZmR7WZ2FyJV0ULK8RJZdoObywq2NGClv4ROPpAgFoDUQUR8qTfe4XNdFej2fhept-ZKt9mvxZnduZY4g=w1280-h650-v0?authuser=0)
Strategy: Aplicación 
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32clW7PLpjLsVkge_KXjEbWLFPTieTMI87yZ1_2x9jAH5NVrUgVPHDOobKvA6Bjs-FCOKl-NOaiENCqBlK3ogCab6eMCxoYSuBYaZ4Nt5dLjFFKD2IOk0Ww0uDZL_-mtWcCXNe=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uDeMsqdzLrabk_Dot391Rs_U0rivUFY_BPtPAnHbDLXOb-Ho6b4Bj4_vD9q0dkf858aC1pXOnXMAeVV4pCkKJkUl9_OBxZLhnQfIgGYeACiqcQaPr04cQaa65LHY2oO2Z-Y0R=w1280-h1016-v0?authuser=0)
Strategy: Aplicación
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20GyoECSaAUirXAc6aQ3GphhYwmSP11OZzw6akoKYviWouYRrrJN1L8fkI3OkN7IIa8ci10LEoNNKjfirsieYJojARvFpHzjf0OMhYXT7Rl3vH25XrTE4b4dEJdEoDXzGXXhw7rw=w1015-h571-v0?authuser=0)

## ◎ Participantes

Estrategia [IEstrategiaSistemadeCampeonato]:

## ￮ Declara una interfaz común a todos los algoritmos permitidos que define los métodos

disponibles para ser utilizados por el cliente.
Estrategia Concreta [Eliminatorias y TodosContraTodos]:

## ￮ Implementan las variantes de los algoritmos de las operaciones definidas en la interfaz

estrategia: calcularCantFechas() y calcularCantPartidos().
Contexto [SistemaCampeonato]

## ￮ Es la clase que utiliza las diferentes estrategias para ciertas tareas. Mantiene una

referencia a una o más instancias Estrategia Concreta, que podrán ser configurables en tiempo de ejecución.

## ￮ La configuración puede ser de una o varias estrategias, y debe realizarse antes de

invocarse el método de variación algorítmica de cada una de las Estrategias Concretas.

## ￮ El Contexto es responsable establecer la estrategia a utilizar y de ejecutar el o los

métodos polimórficos. En este caso
Strategy: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34qx9XnJjuH6egoMMmYjGMTjDIPLEjJ1LSfOPGiDiAHfWJnrhmp_8c0KtTsa5eGpQSbcnWtBMDpn3oo4O-MVj1MgWTLLIOz5xIc3MHzX_3mZuTvrBJEHo23kGHMDPPa3pIWSEiYw=w1015-h571-v0?authuser=0)

## ◎ Procedimiento

Identificar los métodos cuyos algoritmo posee diferentes variantes o implementaciones [calcularCantFechas() y calcularCantPartidos()].
Definir la interfaz Estrategia Abstracta IEstrategiaSistemadeCampeonato que define la interfaz común para las variantes.
Establecer en el Contexto [SistemaCampeonato] la referencia hacia la Estrategia Abstracta.
Definir como se configurará el Contexto con la/s estrategia/s deseada/s.
Reconocer las diferentes variantes de los algoritmos e implementar las clases EstrategiaConcreta [Eliminatorias y TodosContraTodos] para cada comportamiento específico.
Strategy: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XRXEoKQXIE00nyqy7W712Z98vdqwu_HbCFcaitQPG2RrH_SKoBqK_GKfiIwXbFcBdVdrovCjsk76jJqJJ-RgwGeZmz77O21uubC2sMGsp5ug2VvEvQI1dtFYXHUn_sWlwiLpiDQ=w1015-h571-v0?authuser=0)
State/Strategy

## ◎ El Patrón State permite a un objeto tener varios comportamientos diferentes que están

basados en su estado interno.

## ◎ A diferencia de una máquina de estados procedural, el patrón State representa un estado

como una clase completa.

## ◎ El “contexto” obtiene su comportamiento delegando al estado actual del objeto por el que

está compuesto.

## ◎ Encapsulando cada estado en una clase, localizamos cualquier cambio que sea necesario

hacer.

## ◎ Los patrones STATE/STRATEGY tienen el mismo diagrama de clases, pero con una intención

diferente.

## ◎ El patrón STRATEGY comúnmente configura la clase contexto con un comportamiento o

algoritmo.

## ◎ Las transiciones de los estados pueden ser controladas por las clases “estado” o por las

clases “contexto”.

## ◎ La utilización del patrón STATE resultará en un incremento en el número de clases de su

diseño.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Zgx9ogam5xbq0--dEqQHgZSaUWwmKLO6mWS1NKzsTh2ZDZVX8jCTvu08bZsDTwumvey1TBrZ_230TRcsiFPYx0XwVQ842uT9z6cbNTgmPVr8mU68p2fdJH1RF4_KsGg9sRW3V=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FE5y23A6jBHY30JxFkh_RuAKpcpLStmpzI8BfLOy3k_nNEwRqNUzqWVlWTxK2tkIFTkvc4jP37WUtyJf5D8OsaJPt26miClDEBi1kPuqAns_VmfBRm3kQf-N_TVx9HNbYt--d=w1280-h874-v0?authuser=0)

## Observer

Observer / Publish-Subscribe

## ◎ Propósito

Define una dependencia uno-a-muchos entre objetos, de

### modo que cuando cambia el estado de un objeto, todos sus dependientes automáticamente son notificados y actualizados.


## ◎ Motivación

¿Cómo mantener la consistencia entre objetos

### relacionados, sin establecer un acoplamiento fuerte entre sus clases?

Ejemplo: Separación Modelo-Vista
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3D_cGf1csHnUdff_hKZq8xTjvgBpy5ga0U0_hX9yDB8Db8QlnpJXd8FAgJ7lm1jl-703xJ6QNft02ESAwKANWeNtyy7ZPVAtODerVdbVOen6Y2cNASgnkL0GJNtPHcmlzf77hxAg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06A6O3bed0S-lumoqJZwsg89zatwKrvnckAEbflnlEzB9KgaUwOWcaom2u5agdxZYuQU61mQ9YLfQuEOSASm6T0fV4491oIyvxKOgUCOe2xTavKWDZjSSQGqr4Co31V3NapY4KZw=w367-h287-v0?authuser=0)
0 10
20
30
40
50
60
70
80
90
1er trim. 2do trim. 3er trim. 4to trim.
Este
Oeste
Norte

## 1tr


## 3tr


## 4tr 2tr


## 1tr. 2tr. 3tr.


## 4tr.


## Este 20 25 90 20


## Oeste 30 38 32 32


## Norte 47 47 45 45

Vistas

#### t1=20


#### t2=25


#### t3=90


#### t4=20

Modelo

## Motivación

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0U2ue_u2EJkspRPPR4RLQOZastYj1s2bB-0daUdmIVp_ebcEfG_pzFFKzq5V8CnAeMZ_JXl3EH5CiwUL6xnQ8877hQuw9XyjeldKKrbW98cFcDJbqrWtQq_wEHN5XFKX5DVGB3fA=w1280-h691-v0?authuser=0)
Observer

## Estructura Herencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OCgyQ1bj-CmjQt-1SbFvitkS7_idcvGtSqB0p7i2uxkziBadOvYH-tEd7lvJ3zd218Mhbcyme9TPOvxmjN4RJHplnsg4UKHRS18o_zmmiLkhocoJH0w-10fPPCzkBE0NY5YiRpw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pq2q1EivE7wIzMiF_ae-oVZUh6TvQHTL_l8ZvTxmfkcPp6AVdG4MYE-slFkxjE9cfV9B-pGed6irHA3Mq870pFAvhSwZ_gaHlUEPdB1Vd2z7euHghb5UEUuw_3F-NXz2IC1Z9jg=w1280-h676-v0?authuser=0)
Observer Estructura

## Realización

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bD8OJyQaeVet2m2sAtVPBGYx7FCsV4k2v7Z_JsvFQ_-95KeBhMw3B31bI4iQWhN5REankiJk5OiWBSt4EDT0ok8HMFNCb8pL0hNPOUZ3b0KkLaqZIiVW-2h2dwMQiLuZANDytKA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vp0yYnYMRzog0s3RAFOpYq0vx_cm1x707uxwKPLgMVSarm5eVah773ZNioHBWxFsvVXxZR8ihM9B6_GZxPTz9GBNc01jtebT0qb995n1B1jVR6SJ1UyMwxUffPEPbjYVsbwVzUA=w1280-h292-v0?authuser=0)

## Colaboración

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lJEtBjlEnktdvROH8raNepUGdaWk04-RRN1IY5nF3TlDcJnNIO39P-JWm0XFkdOhpRZUFguX0YGjiL62VTC-3ee1fb_6a9unE2whPibAk8bPTUqJ9JtaQqyigBNYSUEznS91k=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Cuando un cambio de estado en un objeto

## requiere cambios en otros objetos, y no sabe sobre cuántos objetos debe aplicarse el cambio.

Cuando un objeto debe ser capaz de notificar algo a otros objetos, sin hacer asunciones sobre quiénes son estos objetos.
Patrones de Creación
Patrones de Estructura
Observer
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MigdiGlsm_K7U6C73jVn4Ehms34AVNQt1Gfzt-oF0RvWcilh1Tmx1cLi98mrAWAwJBmNGoVJfENAd4EUXUDb3IplIlo7Mv8_W7cXqkjarP9jiAQrbLlphbykAou2YQrP0R_SR=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Permite modificar independientemente subjects y

### observers.

Acoplamiento abstracto y mínimo entre Subject y

### Observer:


## ￮ pueden reutilizarse por separado ￮ observers pueden añadirse sin modificar el subject ￮ Subject no necesita conocer las clases concretas de


### Observers

Patrones de Creación
Patrones de Estructura
Observer
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mF0LqaDbAp-N1wueA80i3LvbaJV1VFNaezE996eXTWKyaO4XWA9mOwefRaUFRuTpW6QOcJhu6xaJVp5w1mGBCVnPE-3Q_CRRbly6tBFk53hmvq8KYQrYTVjvbbTnQywxYllTs4Q=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Soporte para comunicación de tipo broadcast: ￮ el subject no especifica al receptor concreto de la

### notificación


## ￮ es posible añadir y eliminar observers en cualquier


### instante.

Actualizaciones inesperadas
Interfaz de Observer simple requiere que los

## observers tengan que deducir el ítem cambiado

Patrones de Creación
Patrones de Estructura
Observer
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HZAMliyc1ZWnUN5kQpP3zzkSAaghx9cdejRTMhhR9wwQGqZdqaf2VtjEHsfhU5FCVUlFF8PNHRASDfkrMo5u208BOPe_y7cF1Zxp_5pMa2fmP6Z1Gyor3Xk50I66A16tnoG-13w=w1015-h571-v0?authuser=0)

## ◎ Cuando la semántica de las actualizaciones es compleja, puede ser


#### necesario que un objeto mantenga esas relaciones, GestorDeCambios.


## ◎ El propósito del GestorDeCambios es minimizar el trabajo necesario


#### para lograr que los observadores reflejen el cambio en su sujeto.


## ◎ GestorDeCambios tiene las siguientes responsabilidades:

Corresponder a un sujeto con sus observadores.
Definir una determinada estrategia de actualización
Actualiza todos los observadores dependientes a petición de un

#### sujeto.


## ◎ El GestorDeCambios es una instancia del patrón Mediator y como


#### sólo hay un único GestorDeCambios el patrón Singleton es de utilidad aquí.

Patrones de Creación
Patrones de Estructura
Observer
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ls-G47IStviV7bSKBA1iBxJMPBwP-rU19CwW5iLKy0U8yvepcvjCzwX_XCZdiMQI1otBiGa7B5Z0XIKzgUD7kavJVpathiV6zHwTCGGu7Kliq0mo_IsmDdODM9GPqZQzyUz2ViA=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Reusabilidad: Al separar el Sujeto de sus Observadores se permite reutilizar sujetos y observadores independientemente.
Flexibilidad: Se pueden agregar y quitar observadores en cualquier momento sin afectar al sujeto ni ha otros observadores, ya que el Sujeto siempre ejecuta el método notificar() para todos los observadores existentes.
Disminuye el Acoplamiento: el sujeto conoce a sus observadores en las clases Madre, lo cual reduce el acoplamiento entre las clases instanciables, ya que la relación es abstracta.
Es posible asegurar la consistencia entre Sujeto y Observadores aplicando el patrón Template Method, haciendo que al finalizar la actualización del Sujeto se llame al método notificar(), evitando el riesgo de llamarlo cuando aún no se ha producido la actualización.
Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2obpM6pNRGDL3_qLInpPzRcSUVhl3A_ZFJA-Dyc2TTaVyevOssFGgXOC4sJK0SvrcIzdDqu8YPBZH3Uc9Gl8VumPzs3lKG5VkuuNe3aUP6agfNR5uk9uZsJzB9qnTRMjv7g-M8uw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tcFGmLgbEkbkVSIL3Xng7hHp_y_9EJUvB7f-p4SYUg_DuuylavCiS1346Xm1dqMYnv7uVP5q_ssVzPsQm-T6Znf14X345vH9_GPRFfE_h93Ydk3ctUYa48XNsdKddhKcaOL4VEQ=w1280-h456-v0?authuser=0)

## Estructura con Gestor de Cambios


## Herencia

Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37uLu7v_nEp2bJRQmc4QhID-vzayYKfvLA_q60XfmsSdQW3Y-RjgMXue1PmoOWOh1CsQOL0IqopkRTAAQ42ZscDCXfdAXuCgPnlfJ1Zdri4OqCAnac1RwXJXVkyPkNdLMIQvEHVg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KHu5a6NdgQbHypdt_NWOveQLH7kdtFfS4cvJhi1ohAErTbU0ZQ6k-YyoAjZ28b3MRLUUxjN3yA9mm29L8i0Asq6QU-uF5YgeybBk_Yot4XPw-jQlFF9bHZAy6VQtSN5hNYrRH_A=w1280-h705-v0?authuser=0)

## Estructura con Gestor de Cambios


## Realización

Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UJnB_LJkKTwxc4onmnE2wvHifvJ6BiNaZwbWYlioHXbDwbwyMOnHiW8gLuu6Vpynx4XTL2DscArvlI_APdcLp8iFEQkg7EQuthS3hF-ViGfbuSFWf85SKEjLps1Ad3U09mM7q4g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LdpG4cxrDHpFzMnFZUGLijGoT7t7kknrmBRqt5SID8TrnWlkDB00nfoXsLb9N22zAWeFOg4ojhMlaXqJNgwhEfZ5mDR21OWJR9Zr3KKc2Ua_U6AY1F3GzsQCUDt9ySOvgcRGVFg=w1280-h608-v0?authuser=0)

### Estructura (PULL)

Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0d1JDu7IXSX9QjW-zvVSaUYSFUmsFI5PJubU7S_XlXJKyv8Al-8RB8bB6jCgT_HLm_DOFlK2DkuAEo0bei4s9K8pyMbpqm-TDdhK7P9tZxKbL3RPS0UU4to0E4eRXYXAmEU-Yd=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0q3RDDtMWQX1ViWqjDBcuMDpRqKaL4JF5rlYg9xBJZgD9PUcViFZsr9lfFN5ztCjs5U-yvmESMUgM6Ms7fNpqO01eTWjtPqehGgT_tZob06AtZI_anaBmpI3eXNnK9KnVPRu5n=w1280-h705-v0?authuser=0)
Máquina de Estado de la Clase Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-vfkUlwzZdnBdBm2KjEE9CH2n4gk5jHUlHKaLg83xeRXFDMAyHzvISWwFL1AcE0XOC8GgHYuZEyE5-vLWLbjHwNNyZV58TA_Kb9kBUnGI9qSbimizcxiGuAUpOg0Jqta_h8ZS6w=w1015-h571-v0?authuser=0)

## ◎ Participantes

Sujeto [ISujetoNotificacionPedido]: Proporciona una interfaz

### para notificar a sus Observadores de sus modificaciones.

Observador [IObserverNotificacionPedido]: Proporciona una

### interfaz para actualizar los objetos que deben enterarse de cambios en el Sujeto.

SujetoConcreto [GestorEnvio y GestorPedido]: Almacena el estado (valor de los atributos) que importan a los Observadores y notifica a los mismos sobre cambios ocurridos.
ObservadorConcreto [NotificacionConfirmacionPedido, NotificacionDespachoRetrasado, NotificacionEnvioParcial]
Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-uPlzWV5abKVMOSLnHvduAkL3_7li2L3tO_UnbyA3HhMa5IHFHXNliG_rki0KzYCDt6Qt11_tCnu2z0gCB6aRj9LuB5cz4Q3wBeBv1ELKprEcX4-Al-KniFAWV31I6niikflueg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2T5lu7xK4pSxxgSjj-9fh0iSrHaA3UstZqxqI7rS6urGeu9XiKbD_WP_tJdlUnJtN15uRrxHJ7IsiA0tI0P49dK4e20HFTgZid9HRo1PSHQoSK0Cqz9p5jb9ssQCs9T_lXEJHHDQ=w1280-h1007-v0?authuser=0)
Observer : Aplicación 
Dinámica (Pull)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AxEY-TXG2sRg__zYXisq_Xl5aeAXi1hbxJ8rA-BObJlcPG_JXwvY2ceVC8sMkgEtesNi_5e7yKrD8m0yPFKpTdcJeHwthpS02cwGYlt1qwCuvIBPksgjix9sIlBvPAdGiQ7Cm_g=w1015-h571-v0?authuser=0)

## ◎ Procedimiento

Cuando se produce un cambio en el estado del pedido, el se deberá notificar a todos los suscriptos (InterfazNotificacion), para que realicen la notificación correspondiente en función del estado del Pedido.
El GestorPedido corrobora que el estado del pedido se ha modificado, por lo que llama a su método notificar() e informa a las Notificaciones.
En función del estado del pedido se analiza que Notificación corresponde que ejecute el método enviarMail() declarado en la interfaz IObserverNotificacionPedido.
El método generarMail() que se implementa en cada Notificación concreta que corresponda, pide las actualizaciones que corresponden, en este caso al objeto Pedido.
Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37qlABhqTNEkwB19k1gpCBZR9YWxq5XUvHS6-Xts8-Zi9Kuxe0VsyaN8Jyzga-leiDbfQFeXk5_GAG0ts7ldWYi7Fznm1woRQ_8J69FbJh1GsQlbpdIXg7GT-SAVPpbnB8ltOv=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3m6MmZVXxtw2UboR7pqPdyTShjL3HV2ykgmA7XiRZpi8s-b2GtQ7NEEUYXS1v2fuxHR-cSXIRuxRAjpSggGG9415gnpRlIXTPI-fq1XoYj36Z_MKhoRDCg5ZBirKDCu10ddi9Uxg=w1280-h597-v0?authuser=0)

### Estructura (Push)

Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fxsfAF2kj5oOxSCdfd_ELSS6jxyNXUKeYQLyedE067RQiAitTaJ3zAeUPnh5HoyyVhzKoPUOrrwYM4ZIg5ODG11xSrHDde3NHycEV8Gc9JT98HE-OxoqYiOeH4DDo6nfxT9MVog=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2s_pk8UgUKuz7OLiNhARpO6fksOuy7TekXAjZfwPrSfqmNsk7TrGigNbRMuz9pAd32ZbvQZASZEn0aY9cLICveME081bScz3oVGohaPbsuucCrW28_iffxoy3wMAuALkJHXCLE=w1225-h926-v0?authuser=0)
Observer : Aplicación 
Dinámica (Push)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vj3OW0WyFWp1c2ny7Iy1fBinQKXT0fSCoJF2X4ZdK-4D56GQsoPbXHzkT1FpkFGYQ3IJ15Qzr0ncyGlXq6iUOY9dkwXV1ce9ILXIiFCTsUCI1SQZwHVNM8GwpdT9XQC2BoBBr=w1015-h571-v0?authuser=0)

## ◎ Participantes

Sujeto [ISujetoNotificacionPedido]: Proporciona una interfaz para

#### notificar a sus Observadores de sus modificaciones.

Observador [IObserverNotificacionPedido]: Proporciona una interfaz

#### para actualizar los objetos que deben enterarse de cambios en el Sujeto.

SujetoConcreto [GestorEnvio y GestorPedido]: Almacena el estado (valor de los atributos) que importan a los Observadores y notifica a los mismos sobre cambios ocurridos.
ObservadorConcreto [NotificacionConfirmacionPedido, NotificacionDespachoRetrasado, NotificacionEnvioParcial]: Debe mantener su estado consistente al del sujeto concreto, para lo cual implementa el método actualizar().
Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0URz6pTLFubMZlaDXP_kTTAljegdNs0WJTlb2CqZRnD3pCXV3yLDzZ2ySLjRjGDAZM6_-BtEASWBeANIUBUyW25t-USegoBSPqHdO_5iX2se-SJrrcNdxwu1_dMBtcmBREokdRHA=w1015-h571-v0?authuser=0)

## ◎ Procedimiento


### Notificación de que el pedido ha sido registrado

El GestorPedido manda la confirmación al Pedido, el Pedido delega esa confirmación al estado que se encuentra Carrito.
El Carrito crea el nuevo estado Confirmado y se lo devuelve al Pedido.
El GestorPedido debe notificar el cambio de estado y llama a su método notificar() y actualiza las pantallas de Notificacion.
En función del estado del pedido se analiza que Notificacion corresponde que ejecute el método actualizar() declarado en la interfaz IObserverNotificacionPedido.
La pantalla NotificacionConfirmacionPedido, es quien debe hacer algo en este caso, el método actualizar() llama al método concreto generarMail() de la Notificacion concreta que
Observer: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32mg0IXOHEVUAeW6pK7_qYN7THVuxU9IVviRgjMLoO2yriMN8qLz9j2S04saJONHGSFUeXMGi6-s04U5E-uKOa59plQ8azg2iNYZWuBQQVbU45dxFIBDjUU_d-Um3TLKbXNrfR=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NzCkEG92UIzYAImS1AES3v68Fd3ooEUmFI1bS6Thfsb1xd5am5aBDeMZ5zhhwnCjDKbr0a-_eMb2AUSCpC9LAg5KUG6huSTyBfBppuGsuVZ25YdaMbxRql64QZHjtCHPKDmigcQ=w533-h300-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xg4ngZYhV2Q_naTHFmPlonNBkh0we8VUIaxsRN_WOKnbdjSWoEeV7ryixY_CMOR3tC_l6DFAulxgxkyt9FoYl7rhvO-8CpT7j1qvXngCtvwatPZIqL505JAg_JN5o4REFPM_A=w888-h554-v0?authuser=0)
Adapter/ Wrapper

### (Adaptador/ Envoltorio)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03_5IhAWpivOKHOd_4oT4oxdHuW8yXtEhndNpLl_2WfLsKhGqwGPxKWNTMbaGTONW7kDTKFfTvCrWljMbMwC7-vqAMoD4jepEBWIJWsB910efl60doiUTMTkweXRaFB4dvPJ7Z7Q=w530-h220-v0?authuser=0)

### 89Adapter

¿Qué problema resuelve?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ubf5DcSFqd535eyb2ioY8dtXt8Prttwj2Y61QvB0bMMdTHGg6W0ZqlbQ81dUJeTzFKeHT6k1WiJz_8cdmUuY_XCV0RglfsvRMFM8ql4rNbY1WjIxWpb3fuD6yGfJtd-sb2OApVA=w663-h368-v0?authuser=0)

### 90Adapter

Solución: Patrón Adaptador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bzVIS8b5JYLxv8g2AycmmE64wGz6tdTogRAlA3RfnMPODnlPgZuOwtyB0bujBsxlw5wNt4L2EMB25A_f2WIU_ANEjnkjS3i3xnS5Vc1QkJqJtk1OvyzYheYR2VTy--tdbP8u_zw=w388-h412-v0?authuser=0)

### 91Adapter

Solución: Patrón Adaptador

#### Propósito


#### Convertir la interfaz de un objeto para que otro pueda comprenderla.


#### Se dice que el Adaptador “envuelve” uno de los objetos para ocultar la complejidad de la conversión. El objeto “envuelto” no necesita conocer que se realiza una conversión.


#### Ámbito


#### De clases y de objetos


### 92Adapter

Solución: Patrón Adaptador

#### Aplicabilidad

Cuando queremos usar alguna clase existente, pero su interfaz no es

#### compatible con el resto de su código.

Cuando queremos crear una clase reutilizable que coopere con clases

#### no relacionadas o que no han sido previstas (que no tienen porqué tener


#### interfaces compatibles)

Cuando queremos usar varias subclases existentes, pero no resulta

#### práctico adaptar su interfaz heredando de cada una de ellas.

Como buen patrón estructural, el cometido del patrón adapter está

#### relacionado con la forma en la que los objetos interactúan entre ellos.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1E1r1rB5ODLcIgGmgCAUt2ayfOvIAWcMvFRRD4AASZ7XYNUOtKZQ1LWtNMYR5pxaRjDGzlGATfWrs-MVkxUrtZq1b9Y3i1ncmDDn8MLLAVRfqypQfjlAGN9hgK4qWvzM17lpKpbw=w484-h191-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qoXvxZxxKVrd4I-rvwf1VcomnFxFYCbZ2is7SHjWGU3USo0crj2cF_DYzZHJazdt34_unccsHf0EJM4PnEKZPrngE5O1ZL5-mhdkgesByB__Pj7dIQVeZD3gCWiC_Wv56hxiahQ=w500-h217-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30-67oYYPSFsNVHVUhmioXnub2lOM3cCdgVWWrm3MJwPjMCWHp8fN64t5zydQ4ZDnlqaaud9eFc-jm8sW27rnBG_P_ruSKz110rDQzMw_h44LnoGfDG4nL6Kl7ulPVFTnXh7WcJw=w343-h206-v0?authuser=0)

### 93Adapter

Solución: Patrón Adaptador

#### Aplicabilidad


### 94Adapter

Solución: Patrón Adaptador

#### Implementación


#### 1. Identificar a los actores: Esto sería determinar quién es el cliente y quiénes la parte a “adaptar”.


#### 2. Diseñar una interfaz común, una que conozca el cliente y que todos los futuros adaptados puedan implementar.


### 95Adapter

Solución: Patrón Adaptador

#### Implementación (Continuación)


#### 3. Crear un adaptador que implemente dicha interfaz. Esto se haría para cada una de las partes a adaptar. Cada uno de estos adaptadores contendrá una instancia de la clase adaptada y “forzará” su uso para que se adapte a la nueva interfaz.


#### 4. Desacoplar el cliente de la clase concreta. En lugar de recibir una clase concreta, a partir de ahora recibirá un objeto cualquiera que implemente la nueva interfaz.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rUnjuSIFSvPG8WTR_z3Bsz5SRPp4K10MHPlOeL0ucSFEnh4TnniZ3I9VCWNSZDWmoKhobF1NNf-3Oh6wSOsrCYmWDuMOn0tr-RW9VX9CCdpe389XScdd2AJVx6_Th8pf8AnZN3w=w1280-h571-v0?authuser=0)

### 96Adapter


## Estructura – Adaptador de Objeto

Esta implementación utiliza el principio de composición de objetos: el adaptador implementa la
interfaz de un objeto y envuelve el otro. Se puede implementar en todos los lenguajes de programación populares.

### 97Adapter

Aplicación Venta Digital

#### Implementar la integración con los sistemas de autorizaciones de pago propio de


#### cada marca de tarjeta de crédito. Esta integración implica gestionar los mensajes de


#### requerimientos de solicitud financiera (venta) y de reversa de operación (anulación


#### de venta) respetando el estándar de transacciones financiera ISO 8583.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QCMAreTLzefanpxFryc-ndzsj1AI2vUy3sB-YEWbDiry8j7gw6IXVzEclr0_j_Y7kspUB9B_TFuOaefV_o2VMfEJG7H92ERhshbplgMNVbYDKEtHKaGqM7I5I3vhcWx_6ytwsiw=w1280-h523-v0?authuser=0)

### 98Adapter

Aplicación Venta Digital

#### ¿Y si miramos la arquitectura?

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ceYz92CbxT5gZ4EYu_3vs8HoT0Q2QteinCEqzMwlilSxSYEC-rSksoduc-TiwaT9nmOkCnVnpjIl3hom4Vb2vb6j5mtHrnoBjLsMP2z8R18bBtgRuSM2hAZlerHR2WSrFE8VgwQ=w1280-h841-v0?authuser=0)

## Vista parcial de Casos de uso para la Compra de artículos

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WOnT6mZahbZotv0nXbuWbI0HH5iDO70qdxHyXmZdbiNVYrditJyHwrhEe0ejTQuBckeRJ9aR9M4YrVI9u2rt_gfJg-ADTR-3KnPmeltserOKIk_REFAmuc61LDBw8vl-M1PhJkw=w1004-h932-v0?authuser=0)

### 100Adapter

Aplicación Venta Digital

## Estructura Análisis – CU Autorizar Venta con Tarjeta de Crédito

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11sm3fFdhp3AA8_Vjbg94WxtJS0rh2dvm7Q_OfIezB0y4XBjEeOatFX_H6v1m-DYChSdM3xtep27kOXMk_qg3J2zT6tmQQPXloZpadzsIMpEZTTsoizpTs9PCEXqywuS0TQ3N3tg=w1280-h874-v0?authuser=0)

### 101Adapter

Aplicación Venta Digital

## Dinámica Análisis – CU Autorizar Venta con Tarjeta de Crédito

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Dxnbd_koqJIUOvQwhN3iA0u4DwGnagP1yUWh9HtSW3GWtz1KlDLnxjrU4An_1MWFTs_V61N-5OGDerOqdOTAGizSYYlv8af-uWwP0IMF8AofFwCvT2zyom-eP68Z5rz9CeDrCsw=w1280-h541-v0?authuser=0)

### 102Adapter

Aplicación Venta Digital

## Estructura Diseño – CU Autorizar Venta con Tarjeta de Crédito

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_z444zBLOr5mgpJPTc6X8uFaLhXddhdTgFBDDjmohrynvwRCKxZ9hI46P06CnE-U2R8peEYTY660GUGwe77bLFgj6rJRmn4OFXywEIvULSIHFZDSP7LnKWF5CIYg62vavf-aCPA=w1280-h749-v0?authuser=0)

### 103Adapter

Aplicación Venta Digital

## Dinámica Diseño – CU Autorizar Venta con Tarjeta de Crédito


### 104Adapter

Aplicación Venta Digital 
Participantes
Cliente 
– clase que contiene lógica de negocio de la aplicación. En el ejemplo es el 
GestorAutorizaciónVenta.
Objetivo 
– Interfaz de la clase cliente que deben utilizar otras clases para colaborar con Cliente. En el ejemplo es 
IAutorizadorTarjetaDeCrédito
Adaptable 
– una clase (normalmente de terceros) que no puede ser utilizada por Cliente por tener una interfaz incomplatible. En el ejemplo es la clase, la API o el servicio provisto por la Administradora de la Tarjeta de Crédito 
(ServicioAutorizadorOperacionesTarjetaVisa)
Adapter 
– implementa la interfaz del Cliente “envolviendo” el Adaptable. Traduce la llamada del cliente de manera que el Adaptable la pueda entender. En el ejemplo es 
AutorizadorTarjetaDeCreditoVisa.
Ventajas – Adaptador de Objeto

#### ❖ Principio de responsabilidad única . Puede separar la interfaz o el código de conversión de datos de la lógica comercial principal del programa.


#### ❖ Principio abierto / cerrado . Puede introducir nuevos tipos de adaptadores en el programa sin romper el código del cliente existente, siempre que funcionen con los adaptadores a través de la interfaz del cliente.


### Adapter

Desventajas

## ◎ La complejidad general del código aumenta porque necesita introducir un conjunto de nuevas interfaces y clases. A veces es más simple cambiar la clase de servicio para que coincida con el resto de su código.

Adapter
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3U71rKUsl7LA6IyqHBe961I41vLVO490hFDpPx7mARsWYKF2a2fj2fTpW_O5UIpwRc6xNCy-WWTdFJFjKvnLD9RbeV_YQfAFX5qN6iyasQJ0fEmtT1FsgfC0Py_QZvBW1tf4idVw=w976-h385-v0?authuser=0)

### 107Adapter

Estructura – 
Adaptador de Clase
Esta implementación utiliza la herencia: el adaptador hereda las interfaces de ambos objetos al mismo tiempo. Tenga en cuenta que este enfoque solo se puede implementar en lenguajes de programación que admitan herencia múltiple.

### 108Adapter

Participantes – 
Adaptador de Clase
Cliente 
– clase que contiene lógica de negocio de la aplicación.
Objetivo 
– define las operaciones que requiere el cliente para interactuar con otras clases.
Adaptable 
– una clase (normalmente de terceros) que no puede ser utilizada por Cliente por tener una interfaz incomplatible.
Adapter 
– redefine los comportamientos de Objetivo y de Adaptable de manera que se puedan entender.
Desventajas - Herencia

## ❖ Esta implementación sólo es posible con lenguajes que soporten herencia múltiple.


## ❖ La redefinición en Adapter sólo puede hacerse para un Adaptable concreto.


## Adapter

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iBkdJhCjO-J-H4lhqnBBl95DtUg0G4pesWu_whmp5ugVEb3lPL53wy9ZVXYr_UK_lvG0e_w_tddSha43NLVbnVElXsJdHDy-y6AAVHbt_ybbjhlKF-ouHp_9htZlSO_in-G6cpA=w1280-h834-v0?authuser=0)

## Iterador (Iterator)

Pa tró
n d e C
re ac
ión P
atr ón
de Es
tru ctu
ra P
atr ón
de Co
mp or
tam ien
to
Iterator

## ◎ Consecuencias

Simplifica la interfaz de un contenedor al

## extraer los métodos de recorrido

Permite varios recorridos, concurrentes
Soporta variantes en las técnicas de

## recorrido

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HDSQ-j9nXoDqUWRo28-B2xbmg0KCdRgYFJzdf9L6OYyqEutZBJy_aF5ZJndCS3aXCOoviTlT6H3-r5QTO_MUQ005D1wS05DU2GheKPtoYs5OvcShZdelE97ktKp1x6D-aelYw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yX7TTD9zo2reEJNN591cmHXwofUi7tq-tGuqDRIoTKAaRF4hFvHc-zHd8HCe6F1ml9DFZW2vd9dp81zRkXDGb5j1FPBUlpoZD3lwXvw417ODyCOo_fjkIgUl44aMUjQoopwxfCg=w1280-h632-v0?authuser=0)
Iterador Externo Polimórfico

## Herencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22K_12CaUP9bPNS2bwzbvXXYKEJL0i4s8jGrFXd7mZwKFp2uYodEdk3sbOao_vk3r5ypH4lS_hXng2LQgY7MJjSPBeVGmNj1LcxCobUpEdwWWE1Y0BNjlRGzaGBASI1lxdpCO04g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00U78jLAmZEAcogCmElpV49L4IDORhBQcJQf1vrCctNVuXa4gdB6I_eOXpgsbxRB4bBHz60DIx91je-fD6BsydFXDJ3_f2wUfmDDnmVtczmW7HmFw7MVj72V8eKewGosU5P68z=w1280-h552-v0?authuser=0)
Iterador Externo Polimórfico

## Realización

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GbWLouYh2iVhxtuEC9eqqAoz2L5QwiGnze2mcTv_3TnRgcbb52Ud7_QcHSk6c6OWuBMyfLzWelT64dnSyBFnbLYMZjiXV2-4US8TJ1J6mgXMTwLSohhFuFlZk_VkjQw-JvIQZ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Z7NBbY56jQTiMzdQXHPgB2jMjvc-_gW8cEw8ZTPJNMJ3gUDcB9ul1FJFVraoEVilmGrSGE4iP8W-y7S2oDao_w0o4n_ZoSSshpSJV5yRCetU2pyafyIdFDAb_3ybn7vmWW9d5hQ=w1280-h963-v0?authuser=0)
Iterator: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nfCZHf3ivOQVaFnvkDZL9tjk5Aib8OTtYcqQmFALLHRJN-FVkjxqAnO-N6I4TqUre-S9AnL7P89EkIxl0xXSuh5S4hLZmdBb6Xi4nUKVqqyCme6PaxD6ukEd8C1DT76GDegla=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GrI0b9rFtBZWK2y11Yq71ET-ZBYMyC4rDe98E9vCuji-74rHITa9qyjf4Ksf_V37dd50dHWe59cOdzgMzAKcpyKllOMIZPD_S8XHew_F5KtFpExCiiUiIGLbNYIQXZDGLwc8t=w937-h604-v0?authuser=0)
Iterator: AplicaciónDinámica:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pNDUO0vTssrkLO25cmZvLcLGJf2SfxrMcs_HPX-zOo9YGsc8qn3FHdFIrMMfl7f5nTNZOw2HGzx70Gdf-gFgx_-2Cccf5FHOi9vqw1q1wUNcTgWN7GbgQINRgUacmkZEsBQWs=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qIWKKZIekjlA-5jZzbJKa3aOC8BddbPzsAWb2wc3nvApKyO2fGKHIDdrNXdlrOxd7Gr4a1ofLVSsppGAJPPnHL9Xt4fnAEPWTLj8pKnqdSuT6koLEXCD94g41BiFQSm2BmX7i=w1280-h1106-v0?authuser=0)
Iterator: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W-X0uCdepabht5IHgWh_0FJGAIpnAdtYXVorBKfJC0Cgf4fgbcEPrnwGrCOGrFnvod2rg-pRVcRahZkOn2dTb3P46zxc_JeZ9rWkNnti8giTQOcPLkVHRVP0CaEs3Z2Pir508=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19wf1RCc840Yk2utkzyKlFtPAt9I_ADFurEfDTDgiCSKvs1OlNLYvUX17xkhRFaRLPPGAeYXl5bThqfCH98mpMeWosSmJXppHP-ZMNH2MusaqIfV1do_0Joa2-9out1SAruMPU=w1280-h732-v0?authuser=0)
Iterator: AplicaciónDinámica:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r3R7flqF2KDvy6UtCEg2VKX0GFgreXH3HuoRc5RbzYK9ALd0XnorjY_eclSUQnt2VU8H4TU8jromVI_yXRMvFvzfCsOFOK7YY_pCVf0DFK4H8piwtkGwLwAEw-k5Iaj4e3tfq=w1015-h571-v0?authuser=0)
Iterator: Aplicación

## ◎ Participantes

Iterador [IIterador]: interfaz que permite recorrer los elementos y acceder a
ellos.
IteradorConcreto [IteradorArticulos, IteradorSecciones]: implementa la
interfaz Iterador y mantiene la posición actual en el recorrido del Agregado.
Agregado [IAgregado]: define una interfaz para crear un objeto Iterador
AgregadoConcreto [Catálogo, SeccionCatalogo]: implementa la interfaz de
creación de Iterador para devolver una instancia de un Iterador concreto (IteradorArticulos o IteradorSecciones).

## ◎ Procedimiento

Cuando necesitamos recorrer o mostrar los artículos (libros, películas, música
o juegos) o secciones del catálogo se invoca a los métodos listarArticulosActivos() y listarNombreSecciones(), respectivamente.
En la dinámica se mostrará el ejemplo con JuegoVideo.
Este método invoca a crearIterador() para establecer el Iterador.
Finalmente se definen los métodos necesarios para realizar el recorrido de
los elementos: haTerminado(), siguiente(), cumpleFiltro(), etc.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UTTn1Fc1NLlH6iTDvYWXx83AhPndrpzBve4gTVCpbtBVPv4DJrt5kM1Fy4Il5RETnMra_wzxTEcshKtXba5ZFWVRvp_XnN97EMzgG-svB2YAMDt_reNLTP4zeSBsmueBjQQ1vSQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rJpcmYIuHBy5WgvY2E-PdYbb6Q_EHbSU8oZ-8ExFjcVXTIlJ34MxN-dHe5ovclRCFRzqpeDYrJGUz0xHMszFhW4oCocpR6-8wzPLidOmwa4_sMTcewDp8WsDfuAYXRvyq2jnY=w1280-h707-v0?authuser=0)
Iterator: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qGDZl8aUckBTDnsyncdvA-BL2VRoZDr5k1wJTWDjQqAshxpBSZXImuUTV0iO6LKugLFKYMu4GcIFuyXwm1Z9Ca1xXAsH7sVbXxmuXjvdMmmmKQg415iaggWsa2nqJ5Etn_0QfwQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DqwlqDC2Sdl5ggMWG2AK-YJTMwpJPONUL0_8pkM9YQVCj17ctbLZUV-naf3n2u6B9bwrNENLXGFLsLv9EBwjF6eKc61jzKgaiZy67W92UpfZnAsFoXdrhkaMOx1BLJuy3703y2Q=w1280-h636-v0?authuser=0)

## Iterator: Aplicación sobre el composite Dinámica:

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sU3OxbkuGPuWJLkQpAerZek7a8VeqTNgpdhb_TlKDU105z8IIam9B-UH7R3EM4hiRJJwpyfHir95U7DSwsxhrJU1hd66NSzVcJmlKJpM4XQ-LIz2W0D9ieXV4erPxPRZs7b5Bwg=w1015-h571-v0?authuser=0)
Iterator: Aplicación conjunta con Composite

## ◎ Participantes

Iterador [IIterador]: interfaz que permite recorrer los elementos y acceder a
ellos.
IteradorConcreto [IteradorArticulos, IteradorCompuesto]: implementa la
interfaz Iterador y mantiene la posición actual en el recorrido del Agregado.
Agregado [IAgregado]: define una interfaz para crear un objeto Iterador
AgregadoConcreto [GestorCatálogo, CompuestoCatalogo]: implementa la
interfaz de creación de Iterador para devolver una instancia de un Iterador concreto (IteradorArticulos o IteradorCompuesto).

## ◎ Procedimiento

Cuando necesitamos recorrer o mostrar los artículos (libros, películas, música
o juegos) de un catálogo se invoca a los métodos listarCatalogo() y listarArticulosActivos(), respectivamente.
En la dinámica se mostrará el ejemplo con JuegoVideo.
Este método invoca a crearIterador() para establecer el Iterador.
Finalmente se definen los métodos necesarios para realizar el recorrido de
los elementos: haTerminado(), siguiente(), cumpleFiltro(), etc.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uc3ey_qqJpmFaI_c89kPy6faeeAVey4bAaB3v5qJy1vCWnAgYwxLIO1YnloZcuP3XqccQHGEKsXfnjwXjMNGvE0IArc97J3atRavPltf6W6rnAd_MPPQhf6AoHGJuzLJtpZx_Ew=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HPguI3Ww-2GGQgeBm5c0kkPib794wZAfr5sRs05hhnIFn8fKdV7UZw7NeorMFJr87n_SegeHwDib0fQtn4QAKy8RZWXbGoF5O7E0mluE_1YlhPccnjkOIZHSh02rkE_3v093XOg=w1280-h802-v0?authuser=0)

## Template Method

Pa tró
n d e C
re ac
ión P
atr ón
de Es
tru ctu
ra P
atr ón
de Co
mp or
tam ien
to
Template Method

## ◎ Propósito

Define el esqueleto (esquema, patrón) de un

### algoritmo en una operación, difiriendo algunos pasos a las subclases. Permite a las subclases redefinir ciertos pasos de un algoritmo sin cambiar la estructura del algoritmo.


## ◎ Motivación

Fundamental para escribir código en un framework.
Clase Aplicación que maneja objetos de la clase

### Documento: método openDocument

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_Og_jebep-g2VkEp6GUYpPM3chTGhtIU_94vgVS0zE8RXz9ufmWUTxuiKv28TFuv9DJE13eLSk-qd8dBwYVIH8SKMh0EmZZ1fkLVaeaasDNOeIMJQ_R1DIc5e4J7DWfD32WrE4A=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LsS2IZ1Ixa82dhQjXlW17ynwglXMz8Y50Wxx8FAty-bUZQBE8OHJ5nxyMPJsRuhsYzyMxq9UUfwzEYRZy7FGHGnwmvW8N1TIKPm6zHR7I3avgfs7o0hFs1hEbgFWyjuXNYDZQ=w1212-h825-v0?authuser=0)
Template Method
Patrones de Creación
Patrones de Estructura

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iqldGdLcfgnx4N1azOVl_bLu-b9h9qX5pCXU10aoiMOuqO3nE89UM7f9-A3v1VIv1SWhqqOwNsaVg9nmPu6kgedTrJPqs_02yCu7rC95GAC_gyV_5f6pANc8tQESx7krzvDU5Mw=w1015-h571-v0?authuser=0)
Template Method

## ◎ Aplicabilidad

Implementar las partes fijas de un algoritmo y dejar que

### las subclases implementen el comportamiento que puede variar.

Cuando el comportamiento común entre varias subclases debe ser factorizado y localizado en una superclase común.
Controlar extensiones de las subclases: algoritmos con puntos de extensión
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1i_oQ2__qlntjdHVdlt9bBR0ginMY-EodwF2Ll6ejxA1twfubz7QqsGLomgSFCkL4L7yevIT8g9iPOr9y2NqDhgSorroJXJV1qAqVf38N6fkZuPvsZvDMe0NqEK28x4M9i44jNaA=w1015-h571-v0?authuser=0)
Template Method

## ◎ Consecuencias

Técnica fundamental para la reutilización: factorizar comportamiento común en librerías de clases
Estructura de control invertida conocida como “Principio de Hollywood”: “No nos llames, nosotros te llamaremos”.
Un método plantilla (template) invoca a los siguientes tipos de métodos:

## ￮ operaciones concretas en la subclase concreta o en clientes ￮ operaciones concretas en la clase abstracta ￮ operaciones abstractas (primitivas) ￮ métodos factoría (uso combinado con el Factory Method) ￮ métodos hook que proporcionan comportamiento por defecto que

se implementa en la clase abstracta y que las subclases pueden utilizar o ignorar en función de lo que necesiten. También puede estar vacío.
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bj1fn96bPYXuKYpsNGrBrQ2xE-Ahc3gX-S2qDKcS1vAcZ1TKVUVjsFtP9sQZrPIkxT13jLEi9r58WElJPcBZt0YDmPPjb0ikcbjaoVniRZt1uSbE0CqpSCTk8ngAf5V5nJV8aIA=w1015-h571-v0?authuser=0)
Template Method

## ◎ Implementación

Minimizar el número de métodos que es necesario

### redefinir en las subclases.

Nombrar a los métodos que se deben redefinir

### añadiéndole cierto prefijo, p.e. “do”.

En C++, métodos a redefinir son protegidos y

### virtuales, el método plantilla no será virtual.

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BHomekXyaJBusXGV7-tjpbTrCpStoj9yF8LfR2hIt2Hl2alxZPY3663c24DHimngEUcela87BRS6LgtwJqo6QiD0pdumnMWaWSF9s_xSe3jiLlTyPgv2-KLdc0iNB5zpUQhhPSg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pMcfuAKXCjsjRD2LHyIMUFzVwvVwgb_5Fm6iolzMrZNFCXcmL0YB1usrppZmU04Yu_XrkNLkvIaubDv9zoLZVoN8zkh02kcmnYIdV526yF-_iOe3Eo8mCxkgOXIiEZ2T1FPoJkQ=w1174-h851-v0?authuser=0)

## Template Method: Aplicación


## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YfGo3jiGnVVIhWOlGeEcrYJxQODz7jCy8ZpZKNy3hCHuAXnQFmYatCSgG7lUe0Zdc4Vd8tDQnPJFRM1rSSptuRLKqDOAcPQUw0ELpOlSLUKA6m-3zqgsK4JC106OYYeYlcmZePw=w1015-h571-v0?authuser=0)

## ◎ Participantes

Clase abstracta [Articulo]:

## ￮ implementa un método plantilla [mostrarInfoProducto()] que


#### define el esqueleto de un algoritmo, que llama a las operaciones primitivas y a las definidas por la clase abstracta o a la de otros objetos


## ￮ define las operaciones primitivas abstractas que son definidas


#### por las subclases para implementar los pasos de un algoritmo [conocerTraducciones(),mostrarInfoEspecífica(), etc.]


## ￮ Define los métodos de enganche con la implementación trivial


#### que usarán las clases concretas si lo deciden: getTitulo(), conocerProductora(), conocerIdiomaOriginal().

Clases Concretas [Pelicula, Musica, Libro y Juego]:

## ￮ implementan la operaciones primitivas para realizar los pasos del


#### algoritmo especifico de las subclases (mostrarInfoEspecifica(),


## Template Method: Aplicación

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XMl0fmllNuuN7VvL2CV727cxBC7Os4hcofhkc8jmO5rCODZ2lUzZ8OxYNLTHB7cvnK2_1iZjbjeZUZqz5sf3V7WiXsdc81t11ReE4f0OlQJ230qEZ2Hsaw-u2Y6f7ZiVQp6GdBQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-mJfzzM9wdUx18m1dYdIHKid17GBLz4T9X7F2lmRgCiQ9S71QPVOak5s6xD0ejQxAsI8hGcvktLYAZlx965XRK2wfBuSPargyYec0RC5JI4BTqcxKJQWGfuduQs1fryBfvs1C3Q=w1199-h834-v0?authuser=0)

## Dinámica


## Template Method: Aplicación

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UQPgcGrs4mz07iIYbp0oyqCZ4u2-oCQIgqngyBoTYl8bkCOcSSWvAnXfr1GOj6bjsMDADKmDzmlxDz4oZqhegGQxti4K9XEU2OXoB1p7CfnIfnIgW92ct3WRMjgEP_xouVIlw3Q=w1015-h571-v0?authuser=0)

## Template Method: Aplicación


## ◎ Procedimiento

Articulo necesita definir un método que permita mostrar toda la información de cada artículo, de modo de hacerlo lo más independiente posible de las clases que lo heredan
Para eso define el método plantilla mostrarInfoProducto() que contiene la estructura de lo que debe hacerse al momento de mostrar la información de un articulo concreto; y define, además las operaciones necesarias para poder “ejecutar” el método. Estas operaciones pueden ser :

## ￮ Concretas de la clase abstracta: conocerIdiomaOriginal()… ￮ Operaciones primitivas: mostrarTraducciones(), mostrarInfoEspecífica()… ￮ Operaciones enganche: : getTitulo(), conocerProductora(),

conocerIdiomaOriginal().
En las subclases se definen las operaciones concretas para cada una de

#### ellas, y se sobreescriben las heredadas (mostrarInfoEspecifica(), mostrarTraducciones()…)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0v57ahmGzuQ2imd5ea62cHsTUqI6WF6oKxzW5JsGe9igWD1XtIQ7LyPWAvjphEEeqVOqPd1RQbg7edHiyaxUZggu47aCBbOLSIsUhqvKYF5wrppT-Rp7R7wpHHomeV4i2yeWdoqw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2V0zBQ4JlvqbgpXWmkZKOz-kRM1deeq3fO5fjruXXbkRRfCG1ascgKet2x5tRBw4kLgYudKSPZmsQLkzqz-CaKRul3t4qM-WMsvFRE2OexKVoL3kfRVRp_eLAvAuis8w-WPTT0gw=w531-h256-v0?authuser=0)

## Singleton

Pa tró
n d e C
re ac
ión P
atr ón
de Es
tru ctu
ra P
atr ón
de Co
mp or
tam ien
to
Singleton

## ◎ Propósito

Asegurar que una clase tiene una única instancia y asegurar un acceso global

## ◎ Motivación

La clase se encarga de asegurar que exista una única instancia y de su acceso.
Hay muchas circunstancias en las cuales es necesario esto:

## ￮ Caches ￮ Cajas de Diálogo ￮ Objetos que manejan preferencias y configuraciones de registros. ￮ Objetos utilizados para logueo ￮ Objetos manejadores de dispositivos como impresoras o tarjetas gráficas.

Para estos objetos, instanciar más de uno provocaría toda clase de problemas como: funcionamiento incorrecto, sobreuso de recursos, resultados inconsistentes.
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P-nPDOsthPlKRt6udlaLl6WW1k-PE32WZETJCtO_JEqvIUCWDTTJ5t9sEaOdtQuDDqWYiGfw8fBSBr4XEVbmDBxQgZyFQCpkihfU8HQCDLSx2LHFPvMumeZeWi_tmCIZuHMvIyw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1StjWpq8a_si4o0t_XRaWbBLpyUWxTKZsQfizlOPSq2INItFlZ4C07CAQGd64NYgEhc-9pPxpOCmzESbqoqz4KdjdanppuBSTz0jxf6zT2jSRzEui-_Na4KyQwP2HzWCnwFK2_-A=w1280-h267-v0?authuser=0)

## Estructura

Singleton
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rwbyEEdqBGNOYYHWC2Vcra_C--IocnSjSMs4o0syiTA5fA0A7nqWhwrDx_RcSIS45x3rxGqkB8fy8AsVjp8BKAxjX-6rCxr4JXmfEZnpqyFLpocBRpIK2_bqynuPLKixYTkDrFg=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Debe existir una única instancia de una clase, accesible globalmente.

## ◎ Consecuencias

Acceso controlado a la única instancia
Evita usar variables globales
Generalizar a un número variable de instancias
Manejar subclases de clase Singleton

## ￮ Debe validarse que haya una única instancia y que la instancia


#### sea la que queremos

Patrones de Creación
Patrones de Estructura
Singleton
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30Xst5JgnqHYHDrS0LtBMpGJnkapJW6Kie7OYSGSR_ItKebqiVYPoiIULWawPvSx20NMlls2_xDlhXLDgY6NKtUZ57Mo2EnMPLPLPQ_OytR7HTYL_xhgjWl1p20aJ86-XDT7p3rw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16ND9CBZLzZSMuwren5mMZRz_3g47xWoU8vGn8-1k2qCl8frFFb7hlWdHT3Ed5JR2kNHE3Eq2CQhbD4ispOJmku8SgZAR8yWSmclwrTRixlQ8SQG3-qdUm4XGRjcdn-h0v2Uss=w1280-h570-v0?authuser=0)
Singleton: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V40cuOgKch3EdzeCFxIPWERldhIjZtVa4g7QLVrpi0NrFnWO3IjAk8YvC1_myxE5AmQGV-VVWaU_bG5DM_f6Ogjc1ixvxB2GsXzMR6LhSkBXKSj7hMeHWdcx00ipI9qlqZl87Tw=w1015-h571-v0?authuser=0)

## ◎ Participantes

Singleton [NumeroPedido]: proporciona un constructor privado, mantiene una referencia estática a la única instancia de la clase, y proporciona un método estático de acceso -getInstancia()- para devolver una referencia a la misma, permitiendo que los clientes accedan a la única instancia de la clase.

## ◎ Procedimiento

Cuando necesitemos crear un nuevo pedido y por lo tanto asignarle su correspondiente número, el gestor de pedido le pediría al Singleton (NumeroPedido), el número de pedido que debe asignar al nuevo pedido.
El Singleton tiene un atributo estático para mantener la referencia a la instancia única y uno o más atributos que guardan el estado relevante del objeto -el último número asignado. Crea la instancia única y le devuelve al Gestor el número.
El gestor de pedido invoca el método new() del pedido pasándole como parámetro entre otras cosas el número de pedido que corresponde y luego
Singleton: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EX7iDnVQBuSOWZAAkWtdQWMxDv0s5QTeiSuoz_MdNBfFJ4FvDGXfdAbrWMQjQzXChZm7_LLOpymJOlmNmqjbjxx7PEM9cUjfCElgRB7GwUO1aIRWBHAlurqDPeolyG2Xf8nW1=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv229kyiqMF-bc45uZP7U1yM6OZk-gWAgYQy3vpB_SYLKCtpXN469BtgbGBKX8lpUQUyWniLzDCZSor16FJg8sg98-lAjCjpVdUWWQtYHmIVN4UGszQfkNzxDodVYsB04hAiuYMlnA=w888-h681-v0?authuser=0)
Singleton: Aplicación

## ◎ Dinámica


## ◎ Ventaja

Permite un acceso controlado a la única instancia ya que posee un control estricto sobre cómo y cuándo acceden a ella.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vBRMD6L1lMuXb4Jq0c6rAH-S2j4Uy2egsWzzyoYrBx2aLkEc6zX571rTTF4d5PSD3OQ08kTcDQIUWhlANka9bzB17OscObGmjbPlpTmEJWVyDcmba8VP0P5AClbFHMvpXeGVftQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Y0g7s3MNI4f2dxjzzv5DMQuNvSwQHixLHtuZ2iQcpB2w0nr4ANTxASeb5bw2XeYvso0cSUfEG8ubBl7KRoMy5Bx1yL-QDrW0WK8zC79N5cHlufhmGlTjxAFYfYw6-4wHUbOfohw=w1280-h838-v0?authuser=0)
Builder
Builder (Constructor)

## ◎ Propósito

Separa la construcción de un objeto complejo de

### su representación, así que el mismo proceso de construcción puede crear diferentes representaciones.


## ◎ Motivación

Un traductor de documentos RTF a otros

### formatos. ¿Es posible añadir una nueva conversión sin modificar el traductor?

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vd2d6ONY5GPMgjCcYORTYMB7mGmNu19AO4cIGtfHHo6m5eEtv52_47Js0s3rJXFRGm5F88qPMHYqBSdHBiR7hnz8KzkvTP7ysh28o3HXhdtfH8GvrJsoKTpg51beGFJZJIH6FzA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P9Njd2bNEbenB3ypEmrv2cIbqq1zN9eCSVGm6LiW9pjTAqGujWqsf_huvpOpH8gUbm6wcF9Fq08zC05aYqy1qvsAVHFWeuQNs2qEEZ3NkjEdZTtpSCFOvUneuQ2CKkUSmHAU=w1280-h310-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nJSbaMPFYBb6eZ1ody_KYGJL0UdOshE3W22FJnxf2oEIdUQ3qw5hIguXocx_hbVo-_ANjqTGRW_kJVc614etrAu0Nx7MwFNfoTD6ld8rhIRRScyn14QAlhpKhJj1DikjhPziJuw=w1280-h334-v0?authuser=0)

## Realización


## Herencia

Builder (Constructor)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jjIZo2_NgR5VwbFSNNaJJHkyBWWc6qJ7iP9Tq-zFAOE-oZ0OzugD53__xL11xnYFN3t40Y4QJGnH_MXJ17jVI0AG9PidXIMxCzbrNthZnkCSagfBQlC4hleFD7l4Di--O8EAhPQ=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Cuando el algoritmo para crear un objeto complejo debe ser independiente de las piezas que conforman el objeto y de cómo se ensamblan.
El proceso de construcción debe permitir diferentes representaciones para el objeto que se construye.
Patrones de Creación
Patrones de Estructura
Builder (Constructor)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10hXXhSO5PMt3X7Jv0VntQvQMXwuRO9Orn-KmdRvbB80R3VNq0gb7csurlr1dsMMAuiiqi-f8cDrrlZn8WEPKUjg1SgpRYf8CCbirZTCozZ7UWdiDwvhkZjO1zDR0bJXTZTf5NWA=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Permite cambiar la representación interna del

## producto.

Separa el código de la representación del

## código para la construcción.

Proporciona un control fino del proceso de

## construcción.

Patrones de Creación
Patrones de Estructura
Builder (Constructor)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ybvewlmtpPN6B3jI5CLh0TdE5i53O5C3QB8v0UE408KGTmMXOJC6rrrMAyOlhZXMteOto6k1IT6Vq2PoMoQ1VepDnFMQESyZ5bv6rvUq5SA-5MSkCnNnuLOL-HbfLktZ5qTnEew=w1015-h571-v0?authuser=0)

## ◎ Implementación

La interfaz de Builder debe ser lo suficientemente general para permitir la construcción de productos para cualquier Builder concreto.
La construcción puede ser más complicada de añadir el nuevo token al producto en construcción.
Los métodos de Builder no son abstractos sino vacíos.
Las clases de los productos no tienen una clase abstracta

### común.

Patrones de Creación
Patrones de Estructura
Builder (Constructor)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32vzUlEOVCmj5zNuJlOH11uYuf_gak1kG8wFHfKqHDLWXBwZBhLV16AcfBlaBW7vsQaIfhgxERweyTWrHrms4JNEaDGgb6sv8lGWhxEsMt3hbbvgdFktLHuRCxvqab4VisWEP1fg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GH2YZrKMLn3iO9dFtSDabTq5l2tbSMB3dMhJpf5Eumfpi1TEF6MgKmi4CXhHlaiNy4rWWLungAap8nrMh0wlVTWiuBnbkgNjBG-avOhDniWS_sWcnZKaZEGC_yzTf83s9lbNNYA=w1280-h605-v0?authuser=0)
Builder: AplicaciónEstructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eLaT_VTQXVClZg98zMATlJ60Axz3wMQbO3eUKzf6KKB0pCzyh2sQirthztXDqyPN0UsRVy2SqgqderzYBYrAHWu4sMV7jmhEW8TGOkBNiggC65UByBC9yfBLGV8W5Zaxe4VwO=w1015-h571-v0?authuser=0)
Builder: Aplicación

#### ◎ Participantes

Constructor [ConstructorCatalogo]: especifica una interfaz abstracta

#### para crear las partes de un objeto complejo.

Constructor Concreto [ConstructorCatalogoWeb,

#### ConstructorCatalogoResumenWeb, ConstructorCatalogoImpreso ]: implementa la interfaz Constructor para construir y ensamblar las partes del objeto producto; define la representación a crear.

Director [DirectorConstruccionCatalogo]: es el encargado de crear un objeto usando la interfaz Constructor.
Producto [PantallaCatalogoWeb, PantallaCatalogoResumenWeb, CatalogoImpreso]: representa el objeto complejo que es construido.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dVOX3zdAHHz4j_gmNMg4gPH7szxqp-5HUhh_TioyFmxrveCDS0jZKKaODvGQQQThTaNt_ld_IF-JbCKdB_akoZQp1v2rLJE_kKZuh5ziFgMRxxgFvg7a_9HFQHwWmlYT5kcDa_A=w1015-h571-v0?authuser=0)
Builder: Aplicación

## ◎ Procedimiento

Definir las diferentes partes que deberán construirse para

### obtener el objeto completo.

Especificar la interfaz Constructor que define los métodos

### para construir cada una de las partes detallada anteriormente.

Establecer la clase responsable de dirigir, coordinar y controlar

### la construcción, clase Director.

Crear la o las clases que serán los constructores concretos de

### los productos a ensamblar, las cuales implementan la interfaz Constructor.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uU87bp26foiKiReAR8lyArsm45cN8a9NRDiNiSCMSFDf3I0Ugk68zPsnGkq2Y8Ymzx2YKd9T1-iyJpQC9N7BHuTlvJ0VN-C8JHr3YT9rSfdcxkrCrmCEI1dTgTsnVPvyJJQfV-g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Aj_qgpcdDZiQeepwcb8og_hh_FXlCKjwApsNMQ4CPqXQ2ffUcPiGVKMxOYreqrkqT6Ryx6p5x52q-im-uM-09QJW6esSvBnteIJPf2lqIpX7GabOeyyAHINcOHWv6AqcmAmjIjA=w1280-h1108-v0?authuser=0)

## Dinámica:

Builder: Aplicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17catYUgiylpeWisWIaaq7FXp6FBDjOxkh_-0yOhqlsz1A9Mkh6fVFaXF0EMcV8K9vVMWFOTJ2q5Dpm1LfpKwWIQw7R-R_YSfIzGmOdPeDtq6iqIrig2K_RbmDF8mRS9uiYhz_cA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZbvLsmMhSMCSl1_MebzDRxnTo38UaN-O_1NtWdw3-Pjat8-s9vE9jPhivIGVrjLYh-7cMhZPtCbKBEY67dUGqmkv7swT90wv9YLUDfOgj-Qd4hO3CyA16X8mmSnttPnXRv2_KlQ=w640-h400-v0?authuser=0)
Factory Method/ Virtual Constructor

### (Método de Factoría/ Constructor Virtual)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24oBgnm6lBcsxcum0eUhKbBPFygOf5x4CC0DanOy9-wic9_16kXUufCNsqSbWGhFhujeZ5lpk8p_pAxpcFAwG2qAOZj6ec2eCmSic6dEki08bCVJCV2wRAnH9Avj28wcMsZu76Mw=w678-h298-v0?authuser=0)

### 150Factory Method

¿Qué problema resuelve?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-X6I5eQ-Zzz0uHqtShANPL5SqAV5a7UF8gaMdaPV8MV_hwMZNsoQ_fQ7E57weEi8rnXp0Szfi8dIuSXTVSljHjAAmz49NRyGsQnpd7rlBRoTYFlpui36aqKXiRo0pq803cHW8DA=w694-h379-v0?authuser=0)

### 151Factory Method

Solución: Patrón Factory Method
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Y7IawVqmikX0h9trUe2PiO3-iNR-IK5AoU-RkcO9Zzrbd9kjk1aFWt-AOa43JD5J7CzlQu4V9fPS2E7m6ATsuzuV-svmoE77yuwleNhcDcHRVSi9RLFRQ9ctbJWaYrqB0Y6FC=w696-h325-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WBS5jSuUPhWmqICwX0xBC0L4Yz5jm0Pv3nEAawgBcsxi4X4OsJNcIok1fKQBelJck2zcftpqXQM2PdTZo42uobTpe_6jxbDrOSzmKkwG0DMdFw8mCbjQvDUAYtyOjgI6wlyW7=w598-h274-v0?authuser=0)

### 152Factory Method

Solución: Patrón Factory Method

### 153Factory Method

Solución: Patrón Factory Method

#### Propósito


#### Define una interfaz para la creación de objetos delegando en las subclases la decisión de qué clase instanciar.


#### La intención del Factory Method es tener una clase a la cual delegar la responsabilidad de la creación de los objetos, para no decidir en tiempo de compilación que clase instanciará, si no que delegará esta responsabilidad al Factory confiando en que este le regresará la clase adecuada para trabajar.


#### Ámbito


#### De Clase


### 154Factory Method

Solución: Patrón Factory Method

#### Aplicabilidad

Para casos en los que no se sabe en tiempo de diseño que subtipo vamos a necesitar
Cuando una clase desea que sus subclases especifiquen los objetos que debe crear.
Cuando se desea crear tipos de objetos relacionados por una base común sin preocuparnos de los detalles de creación del objeto. La finalidad es que los

#### mismos puedan variar sin afectar la forma en que el cliente interactúa con ellos.


### 155Factory Method

Solución: Patrón Factory Method

#### Implementación


#### 1. Haga que todos los productos sigan la misma interfaz. Esta interfaz debe declarar métodos que tengan sentido en cada producto.


#### 2. Agregue un método de fábrica vacío dentro de la clase creadora. El tipo de retorno del método debe coincidir con la interfaz de producto común


#### 3. En el código del creador encuentre todas las referencias a los constructores de productos. Uno por uno, reemplácelos con llamadas al método de fábrica, mientras extrae el código de creación del producto en el método de fábrica.


### 156Factory Method

Solución: Patrón Factory Method

#### Implementación (Continuación)


#### 4. Si, después de todas las extracciones, el método de fábrica base se ha quedado vacío, puede hacerlo abstracto. Si queda algo, puede convertirlo en un comportamiento predeterminado del método.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1L-v_Mgn2KMhQV43JaXV2xDulcRY1wFEqLwYBZd2vEKaW1S6l9LKmku2AhJoRc0wE2-JG7w5VSIgXVmEzm6wtj2WLFh_kzbAicTM_-AGUthYS25xnbxGZMDf6gKGGCRXg5J60DjA=w1280-h501-v0?authuser=0)

### 157Factory Method

Estructura - 
Realización
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ezlKQn4I7XEYeCvydXk4OE9fWeUoEL6GM0hWMdoQnp2NDlxgEUVBqywa8-ZBs6VeaX3BcohKrK_OwUtLJHs2pE0KUq9IPoTJ_-tLdBUaAP6PxV9CWDG3SlRCepVZ4A7RGBMlOFQ=w1098-h396-v0?authuser=0)

### 158Factory Method

Estructura - 
Herencia

### 159Factory Method

Aplicación Venta Digital

#### Implementar la creación de un nuevo artículo sin que en tiempo de compilación sea necesario determinar cuál es el tipo de artículo que se va a crear. Deben evitarse condicionales que cambian el comportamiento de la


#### aplicación según el tipo de artículo que desee crearse.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ei_JI_SMM_tEV2Lt0f8HmIbk4MrZLEKl5AZXa5SR9DNRRpCTRnk7tt_kpqeoTcWlmrseWIGfhE2i7-TKZp61D28JCcSaknBI5jC9SPqgX1GRWSFe0YFAj_YIuA2YYJnvpwSePcA=w1267-h1280-v0?authuser=0)

### Factory Method

Aplicación Venta Digital

## Estructura Análisis – CU Registrar Artículo

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oyfEgm3kZOkd4nCA8U7hsqA1lf7wuxJ6TyT2Ce2RQUgmRpvinbuG012knVbk_bSgoyCrK_06-HU5b7ezMI2wnglviCrk2XW8uLFn_2uSW0GqGmp5M704qnvYEcf7Y8uEAT0HHsQ=w1280-h564-v0?authuser=0)
161Factory MethodAplicación Venta Digital

## Dinámica Análisis – CU Registrar Artículo

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00ZnOLxI4Y1NynoGOhxjbmc1s8XPt6ieFTWTqCyaUBq9u_O0slGrA-7-8Hh1Ni9MLtDTCmz2tHySGMiI2aPp39hMpm2EZhx-7N6rTumFeVhDqTNtIvE8Jam0WW5ARU9dZ5Yqhz_w=w1031-h1280-v0?authuser=0)

### 162Factory Method

Aplicación Venta Digital

## Estructura Diseño – CU Registrar Artículo

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DwQcjAoZdRUvqlTykutgN4XI4A1sZ5T-1xv2WMpLb8SaW-BUOo4q3GuR_JnYDZXiEBncuuVzRI3KWtBBIa30ghprlXyYVhKMohk2gJisTRf4ZRCWWdH2hA3i2Oh3B7mkLjfFvfA=w1280-h578-v0?authuser=0)
163Factory MethodAplicación Venta Digital

## Dinámica Diseño – CU Registrar Artículo


### 164Factory Method

Aplicación Venta Digital 
Participantes
Producto [Articulo]: 
Declara una interfaz de los objetos que crea el método de Fabricación.
ProductoConcreto 
[Libro, JuegoVideo, Pelicula, Musica]: Implementa las operaciones 
declaradas en la interfaz de producto.
Creador [IGestorArticulo]: Declara el método de fabricación, el cual devuelve un 
objeto de tipo Articulo.
También puede definir una implementación predeterminada del método de fabricación que devuelva un objeto del producto concreto ( si fuese herencia).
Puede llamar al método de fabricación para crear un objeto Articulo.
Creadores Concretos 
[GestorLibro, GestorPelicula, GestorMusica, GestorJuegoVideo]:

#### Redefine el método de fabricación para devolver una instancia de un producto concreto.

Ventajas

#### ❖ Evita el acoplamiento estrecho entre el creador y los productos concretos.


#### ❖ Principio de responsabilidad única . Puede mover el código de creación del producto a un lugar en el programa, haciendo que el código sea más fácil de soportar.


#### ❖ Principio abierto / cerrado . Puede introducir nuevos tipos de productos en el programa sin romper el código de cliente existente


### Factory Method

Desventajas

### ❖ El código puede volverse más complicado ya que necesita introducir muchas subclases nuevas para implementar el patrón.


### ❖ El mejor de los casos es cuando se introduce el patrón en una jerarquía existente de clases de creadores.


### 166Factory Method

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0re_4-qq6pCF4YbudpLa3QXLYtJ1ZK74QzujkEBH0JXUF924-BDVyD9r0U5Z0gQbjXtBNpxS8Q3gJxOE7KCumNFGsJMDgq6VVAwtnoA6qBzrqr27o6gEcW4H6t9RQPUrOwByQgEQ=w1280-h824-v0?authuser=0)

## Composite

Composite

## ◎ Propósito

Componer objetos en estructuras jerárquicas para representar

### jerarquías todo/parte. Permite a los clientes manejar a los objetos primitivos y compuestos de forma uniforme.


## ◎ Motivación

Modelar figuras compuestas
Modelar paquetes de valores (acciones, bonos,..)
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J3Ss3ov6Ws6AqsHFWcDtZ2frg_jI_4IrGG0k2MrUgUdJkv39iiErsVwbMXA0N7PkqY7Cz1CegD7N6IRaKBMOyZMco3Yup13UywuyplrIvgyQWXnQMxZbZnAPZMYr1ZvTPiP7MRw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2oo9Ile0jJlREReFRHWJ-7n9ItzWjxdgbVE2CniXsSaOuboOCiNu-MwKLDnHUWPcqbJ7rMWv7LVrwyYO5fk9dP35-aDWUxycKBXpMi4xPihqJ41qh8wSa23LLee76ceZws4uooWg=w1280-h609-v0?authuser=0)

## Estructura

Composite

## Herencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OR00aR6oQ6QzfHHtG8al6GYirjf_XPfI5qvxWWuysV_YYY2NuxDs_IiyrsGJmFjv9Q5hSn-JxSVw7XQei3fDGTmemj8dQihI8YV6aP3MuYCMvZihf5mkPsRHYL52YfmJPAgSD_A=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V0yT54T632FN_IZqyfauxRPqRJj4SbYU-ebhJGd96IVzz9S-Jm5D3rc7uLNIM3cW06eyQBZVetqnyfg3uRAiJoKL8s7zLaLSelEt6D_6i5QwMopxrYrZJd2mecq8J2dIYGpmc7A=w1172-h853-v0?authuser=0)

## Estructura


## Realización

Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fdqXpyv6B5txX3TLy0aC_7gG5Uc6m-YtK7ptlkNHdfvniT3cadkLLatYrKp9zNxFGDgjMH6hGMCK6ZK5YByXNLPSHKwlYG_4PKvyT7M9Fq0Q2DmQecXHDcuhDBD8__ypgAFY09w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YGkG-OaVzWRj25eP-GA5tvWLLMRRJns8p-a85-nrUHDkKm2umjKpheggrXN31dOCWghFxFWPPdqAq68aVv0cBCddy8WLWMOKCK7Kk4qU24MYhklOdy2mj0zgn16kyabTYibM_jg=w355-h1280-v0?authuser=0)

## ¿Cómo se afecta la estructura al aplicar el patrón Composite? Un ejemplo con la estructura geográfica

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2e_U5AgMBSNaJQ_JC1o-xBE8LX6hGA3PEVq5R-3EDozElsyt5LQQhMifoZdr2-eAFva0-mJ4b2dr84rbvUlRHAOPqvCPHhEC1R0CPbHEgN_MCHKi5nLuMwNyjkmKTn31MzTeU9mQ=w355-h1280-v0?authuser=0)

## ¿Cómo se afecta la estructura al aplicar el patrón Composite? Un ejemplo con la estructura geográfica

Hoja
Com-puesto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H7OoI2bSd-ez-twOPSO0eZFDiyRJVChSwESZ45Kdy1DiEEIM3Q25oVYv5wzr9PTZfSRMyfQuf87U2OIWdAC-I34wVQsuHFpbCtiOLaw39lIWGm51oLC9ykKRi6DlGT8hj1pk_=w355-h1280-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Rg-Y-NxqzHnN7oxyvIX9CvNCK517fykrtVTVGRCl0dCqUTw_MWblTo5gS4DK5f3EnrgG86x81Xnzoe0vNwk6cr-xJYcE0PZHFkS4y6cAqH3wB6BsEBNJrY-qKsklu4kvhRZYR=w690-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LQJRLBERSR4oJBWPLxKTcIR-SG2mYUnatZGj4qrQhf6tz2URaqU6FTw8FZSXaGsIKOo9WEDhbXRnpXcBIzwQFadGRBzSPmBa8XFlo9XUzrmj06aBUmI_3keG9Jv3tqtfUO3hMPQ=w114-h199-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mEv7UbDk4sfZIxknXUJSAcJXqhUlyz9Uf2qets_3e4XBrDlrWJbR6dJ-_CqZ6ZeFBSWA-zp82fGuwaLlahYetvGtFICKqi01W9SJMM0kNPlAqFSZvrlGDQyNBWLGOr3Ry7IGIcw=w463-h66-v0?authuser=0)

#### ¿Cómo se afecta la estructura al aplicar el patrón Composite?


#### Un ejemplo con la estructura geográfica


## ◎ Aplicabilidad

Se quiere representar jerarquías todo/parte
Se quiere que los clientes ignoren la diferencia

## entre objetos compuestos y los objetos individuales que los forman.

Patrones de Creación
Patrones de Estructura
Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FtyANwqjQZO-n-uLyHVzGYhN8dLmp-LAy3Iqv1d5NzwEIyeEbb4NXd6HDYb67vqhAnOmGGXAJup62Y9_pksAMz49jbsDBUhEA0MDSVhkn9VXlaTD30wbTfZOsofNCbvMyEdRwQw=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Jerarquía con clases que modelan objetos primitivos y objetos

### compuestos, que permite composición recursiva.

Clientes pueden tratar objetos primitivos y compuestos de

### modo uniforme.

Es fácil añadir nuevos tipos de componentes.
No se puede confiar al sistema de tipos que asegure que un

### objeto compuesto sólo contendrá objetos de ciertas clases, necesidad de comprobaciones en tiempo de ejecución.

Patrones de Creación
Patrones de Estructura
Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3h1pGgqFG8DzUDrc1u2Ytp5phXFBGbWQJTdgXLKiBpzu80N87yGT8H29pdcyrGP_fzZEeF-jG_oBAoIPMyPXlcgpR_Lm3lw20VCy2YpWAVApdVLCFu4kSs4GHz-m1GJ56ND4Yq=w1015-h571-v0?authuser=0)

## ◎ Implementación

Identificar clases de agregación
Identificar componentes y hojas.
Referencias explícitas al padre, para simplificar el recorrido y la

### gestión de una estructura compuesta.

Maximizar la interfaz Componente, para que los clientes se

### despreocupen de las clases Hoja o Compuesto.

Declarar las operación de gestión de los hijos: equilibrio entre

### seguridad y transparencia.

Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JRe1OhBhBpSbGAwCaQ4FEzA5hHG0Ke8M6FaKwOJmy0oIZNzci2efYS2mmzIlSvNI1fe952EIMWkJwtGcFuqluplqeEBU_J2su4Ua6l7n1zd7oYvhQYBQbJsHTwnCF-M1mXqIrmQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3eGHHCiZShQOsYEYvnoC9O6s4pVXUwhf2unqoO9rrP8wjkQX-edvZXZtderPxRMsnXJIEp_fNDhICvPVI-vsLiYISSLC0jLHYe-R_7zLVxcxTVjrjwHeIOpRPS1cVIZA3f9aV3=w1280-h673-v0?authuser=0)

## 177Caso de Estudio Venta Digital: Modelo de Dominio

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rikIjQSWEQyUveHanq8RpU4jYf4LnofuH41814Wn2oYFKSIS_EkgNgVXYVnRjanP2XLNtRrdefVIqOtlPRBCKNTanUh_UAHIroYL1jS8pJ3IK0lWmQFygsrrLCrMaLBm_X1Djuw=w1280-h708-v0?authuser=0)

## Aplicación: Composite


## Estructura:

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35uOh6N7lbaZrQUJ4_DQ_UrGs-KrT3xxA-2lpgnOfcJHsrlTtKJeIs8X0IrDTO0pRKdOiKdGbynqR_XtDcJ596BgNyrPl5TP7HpXVRzSY1zTizdJCey5v5AIdIMmWtaQhtpJobwg=w1015-h571-v0?authuser=0)

## ◎ Participantes

Componente (IComponenteCatalogo)

## ￮ Declara la interfaz de los objetos de la composición.

Hoja (Articulo: Libro, Película, Música, JuegoDeVideo)

## ￮ Implementa la operación getDescripciónJerarquía() que es


#### uniforme a toda la jerarquía.

Compuesto (CompuestoCatalogo)

## ￮ Implementa todas las operaciones definidas en el Componente


#### (IComponenteCatalogo) y las operaciones específicas para la administración de los elementos que lo componen.

Cliente (GestorCatalogo)

## ￮ Realiza la petición al objeto que implementa la interfaz


#### Componente

Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tdPQ75QjyrGEQFYhfKE09cyYgbaWruC2ndpGqhPGhqRd1TF1sAETumFcFAWTgIH-5Xd_4hSKeNI-BOBYHFkS8sxo2JVdDkUC3b5ccww3dqVCNCblsGgB3rRQygDNGAxlbooZn=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eoU6Sc2vwonSzM66X32MEjBymUjVmXGuX0NCXTu-Dt5Cxbv4x9oBGdHpUBBriRNj8tAjpAAlRwOxce9mTrmc-lVp-rDTh7iCJCIR1ozw8z3h_VrXZtK6XPSHDtWiZv2YL7xsaoQ=w1280-h886-v0?authuser=0)
Aplicación

#### Catálogo

Secciones (donde está Música Internacional)
Subsecciones (donde está The Beatles)
Artículos entre los que está el álbum Let
it Be
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nRvoS9coNZ7mOotg7rTVlekBKEKAELijEndlZiNlsLYk838pToBJSLWkwIZInkAWpXfAvq1M5c6ofoJsOvMKzduDaElchhAZbh4-7m64W06H_iLXtJ9LqmJn5e8HxDe7Sodd0Zg=w1015-h571-v0?authuser=0)

## ◎ Procedimiento

El GestorCatalogo debe armar y mostrar toda la jerarquía del catálogo activo (X secciones, Y subsecciones y Z artículos) cuando el usuario desea consultarlo, para lo cual le pide a la interfaz (IComponenteCatalogo) que lo resuelva a través del método: getDescripciónJerarquía().
Las clases (Artículo y CompuestoCatalogo) implementan la interfaz IComponenteCatalogo.
Para el caso de Articulo (hoja) los métodos de manipulación de hijos
agregarComponente(),quitarComponente() y obtenerHijo() se implementan VACIOS.
El Compuesto (CompuestoCatalogo), es quien resuelve la petición recursivamente hasta
armar todo el árbol.
En el caso del ejemplo, el Catálogo está compuesto por Secciones entre las cuales está
Música Internacional, Subsecciones entre las subsecciones de la sección Música Internacional está The Beatles y debe recorrer los artículos que la componen entre los cuáles está el álbún Let It Be.
En la segunda parte del ejemplo, se debe recuperar el nombre de un artículo (hoja), para ello no es necesario que intervenga el objeto Compuesto.
De esa manera el GestorCatalogo obtiene el nombre de cada elemento del catálogo y su ruta
Composite
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lVyu9nBvsIYB9KYf6qvIZAzp-33VYKjrv9GVEbipcWwXXWidu2djBBKbfn5pcR0uk-QekSpSQanaf9n_U55Y4z06JVxyXP0Cc24h88QKJWIW7jfswnbtQ2EH9Chv0wtJ505bSkw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Fr60mJ3qk1T8EYTlZ4wHO_F_PC8M9cDXnQFSt_tJ0RJyTYHyzzIRrbnuwGsUBSDpKb3TONuQYE4ut1hYcRbSwZJZMTdZTY7kLWSMPda-RUX1dKddRs8iBraxtqXiUrnFOFUKQ=w1280-h853-v0?authuser=0)
182Memento/ Token

### (Recuerdo)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-YDIM5Sa5utcSxrGrAkW_KeGgCEwhWdyx9ZeWcQILAaKEnqHtADD30LyupueUENTvoDqDpb7MGfIzCGyxWlYPq2VpIr5smgTQkSTsJQV5Rfc-Gx9Fdb7JDxYsdi0I7WL4vP-HcQ=w613-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h9cZedSislEmzATr6Uh0u18SEbflR4iuIuzHcWL-rWWse4PUSuJUv3yrtkWAeV6tpYSarWvQV0rSMfDwKniuK0U_psrmjLcgcaGjQYHStTpcvgOG9A4A4Lzk4117O2JLQ_SWkzg=w179-h235-v0?authuser=0)

### 183Memento

¿Qué problema resuelve?
Antes de ejecutar una operación, la aplicación guarda una instantánea del estado de los objetos, que luego se puede utilizar para restaurar los objetos
a su estado anterior.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cpe0iXnTUN7fRTc2zdE2v8R3XD3WXIMkcRoyBB9F0RYdmrFfODklcGg2k4hpHQo-jtGDhHa5IXoiNj4gE2jQPW0r6exDwNf_CQ8QtuUC-W70vas5PmddP_C-6K86Ds0X3jqg7sw=w644-h465-v0?authuser=0)
Solución: Patrón Memento

### Memento

Memento

## ◎ Propósito

Captura y exterioriza el estado interno de un objeto, sin

### violar el encapsulamiento, de modo que el objeto puede ser restaurado a ese estado más tarde.


## ◎ Motivación

Algunas veces es necesario registrar el estado interno de

### un objeto: mecanismos checkpoints y deshacer cambios que permiten probar operaciones o recuperación de errores.

Mecanismo de transacciones
Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CFiV2rBNwM1BmwXswYC3QVHB5U3DRsNB9ehbl3SnU_HDKmzebHPt2xH5JA1SG5UFqfVeL6XIE-p9BHdoR8YDYJcUl5ey8MYVjqTIZOPRDgikm5JuExFb4WeAeUEWzYh12pIgxUA=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Una parte del estado de un objeto debe ser

## guardado para que pueda ser restaurado más tarde.

Una interfaz para obtener el estado de un objeto podría romper el encapsulamiento exponiendo detalles de implementación.
Patrones de Creación
Patrones de Estructura
Memento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0r0_vBuC9UYPQS16jXwp8HWFtpbD82SiN_oAn5vuqfff6486eucSfoHDUQhZLVL_sSQSEJFUo87X3HgWhAjHeyq1R6foO503Vnh258EMx5ygh-ZOvCkh4Vru1N_TdTqbP4mAn6iQ=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Mantiene el encapsulamiento
Simplifica la clase Creador ya que no debe

### preocuparse de mantener las versiones del estado interno.

Podría incurrir en un considerable gasto de memoria: encapsular y restaurar el estado no debe ser costoso.
Puede ser difícil en algunos lenguajes asegurar que sólo el Creador tenga acceso al estado del Memento.
Patrones de Creación
Patrones de Estructura
Memento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ct1dxZf04NLFso_y1DVpdPQlshfqyAmM4rXAYv157JiXrLf7JIBFIIR1BOBnwhYz60KU7wEaElvmYkURngKSnKBD3uc2eGJMGzESiYFeD68sKYVriLRrvOsWLXEQhiPMHoCLiTg=w1015-h571-v0?authuser=0)

#### Aplicabilidad

Use el patrón Memento cuando desee producir instantáneas del estado del objeto para poder restaurar un estado anterior del objeto.
Cuando una interfaz para obtener el estado de un objeto podría romper el encapsulamiento exponiendo detalles de implementación.

### Memento

Solución: Patrón Memento
Solución: Patrón Memento

#### Implementación


#### 1. Determine qué clase desempeñará el papel del Creador.


#### 1. Crea la clase Memento. Uno por uno, declare un conjunto de campos que reflejen los campos declarados dentro de la clase Creador.


#### 1. Haz que la clase Memento sea inmutable. Un Memento debe aceptar los datos solo una vez, a través del constructor. La clase no debe tener métodos de seteo.


### Memento

Solución: Patrón Memento
Implementación (Continuación)
4. Agregue un método para producir recuerdos a la clase Creador y otro para restaurar el estado del originador a su clase. Debe aceptar un objeto de Memento como argumento.
4. El Guardián, ya sea que represente un historial o algo completamente diferente, debe saber cuándo solicitar nuevos recuerdos al Creador, cómo almacenarlos y cuándo restaurar el Creador con un recuerdo particular.
4. El vínculo entre los Guardianes y los creadores puede trasladarse a la clase Memento. En este caso, cada Memento debe estar conectado al creador que lo creó. El método de restauración también pasaría a la clase memento

### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0u77opq8dDWraQO8f5UQ1jYEvXrT-fEj1oMGLF5eJZOiS4ReNFRecLLUZk27g-XKEvxmDB2ashGk7iKLsdfLyFQqFn6QQO5YMNf2oqLzrdNlwWW6K_EqAx6Uw_83yOHnwoWYU5ag=w933-h411-v0?authuser=0)
191Estructura 
Memento
Aplicación Venta Digital

#### Permitir guardar en el sitio las preferencias del cliente y restaurarlas en el


#### momento en que el cliente lo desee sin revelar los detalles de su


#### implementación


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WWxWGxNnGj_tpQHp6mDjlCPbK5b-yxaosEyZ3aELw_Q0dDXRiJCY2LEKKkiwV_3e333_pKhXNh9j-ZNFJiL7n3bOJ-T0Q6qa3w8kchSM-tnYzzaRK2ZeW5xqPQmx6kr5epe3xow=w952-h1050-v0?authuser=0)
Aplicación Venta Digital

## Estructura Análisis – CU Personalizar sitio web


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RPbiweJFRk56u5tufxscsWq8ocL46L7Ea8ih51lyhmZZZUA54XMEiV23GUj5XjHd29iOuXIVWXxl1ARIBVXPOXqamcFM9OFFHyA1Zu3QaQHrAtVVaR8_ZrBPOaBHUhBsI4O1hIQ=w1280-h457-v0?authuser=0)
Aplicación Venta Digital

## Dinámica Análisis – CU Personalizar sitio web


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LUu8cHwzvcZd6kG4bxFGHZ0iP6Gip7PuhTAVXfCWlaR0f9D9xdQBDN8ujUHMCFeS36c4bnKrd-SUHBRIOisUlC5tS27omFZfUumxBQfJruhQ4efv1oYq7SChUFgu6Gra3LYsV-w=w1280-h934-v0?authuser=0)
Aplicación Venta Digital

## Estructura – CU Personalizar sitio web


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Cm_QgFb8OkQfgEQVE9M9AyHMqTPaZOaXs8QuY1Gvu4hm7XmS-tJ4-I1jMG0I4OduwotUufWPTQS-YCmnWaEiRu04Q-xcx6nEGLXcASwgt45cFdA3Mya7wZmhw5CMP1V9X-MkkhA=w1280-h563-v0?authuser=0)
Aplicación Venta Digital

## Dinámica – Mostrar Preferencias Actuales


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38rvkYf42mRK143J07Mhmuzxm-Qi2lRvclSjsv8KZ19bCoogfxudzNGb03krdiC6mHhZjnHgij56r3nvOfAhaQDDTDhy3sqzNboZm7vSvJJ9If17S1jJhIqaNCuQoCaF8GrTnK=w1280-h666-v0?authuser=0)
Aplicación Venta Digital

## Dinámica – Recuperar Preferencias anteriores


### Memento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2INFkU6stu-kZIjikHQsl9V5YQjrwO3Z94QAqLyBAZ_EWcYOVKC7Dw2XKzsIUGD_A7cVCzUfkED80DTkgwk69R1QE-Szt3EQw_nHecbfNCv5LsKYHsFV8TLBbSRNQqzTcBZgfg4Q=w1280-h477-v0?authuser=0)
198Aplicación Venta Digital

## Dinámica – Creación del Memento


### Memento

Aplicación Venta Digital 
Participantes - 
Realización
Creador [PreferenciasCliente]: es quien va a crear y/o restaurar el Memento de 
preferencias del cliente.
Memento [MementoPreferencia]: cada instancia contiene las preferencias de un 
cliente, en cuanto a color, links, etc. que tuvo el cliente en un momento determinado.
Guardián [Cliente]: Es quien contiene a todas las instancias de 
MementoPreferencia.
Cliente [GestorPersonalizacionSitioWeb]: Es quién solicita las preferencias 
actuales o anteriores del cliente y también la creación de las mismas.

### Memento

Ventajas

## ❖ Puede producir instantáneas del estado del objeto sin violar su encapsulamiento.


## ❖ Puede simplificar el código del autor dejando que el cuidador mantenga el historial del estado del autor.


### 200Memento

Desventajas

### ❖ La aplicación puede consumir mucha RAM si los clientes crean recuerdos con demasiada frecuencia.


### ❖ Los guardianes deben rastrear el ciclo de vida del creador para poder destruir recuerdos obsoletos.


### ❖ Puede ser difícil en algunos lenguajes asegurar que sólo el Creador tenga acceso al estado del Memento.

201

### Memento

Façade / Fachada

## ◎ Propósito

Proporciona una única interfaz a un conjunto de interfaces de un

### subsistema. Define una interfaz de más alto nivel que facilita el uso de un subsistema.


## ◎ Motivación

Reducir las dependencias entre subsistemas.
Un entorno de programación que ofrece una librería de clases

### que proporcionan acceso a su subsistema compilador: Scanner, Parser, ProgramNode, ByteCodeStream y ProgramNodeBuilder. Clase Compiler actúa como fachada.

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28xPckyVE_G2kLM90SidW-LwwZoyZhywPdE-hHa3I4WUxsvsM4DSCgoIAEVfJVt5gXPc3WPPbH_IyP4yQnSAYk6E8YhuGRiY6_ydwN2wxVqzPu9YA2UeocMFCZrXm6f8PaRS2zvQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MMI88lDv-H0QV8ym7kwReiIbdeu6AseCyDCjFhij0hfk8PkZJ0_-MgQYIRbST7a8dZQlrnc59lPD4SpdqwmVpRplaXzQCMTl4Gb9PfJZZI9nKkg5KGTAVWbauQslQ1eTRoEMt=w1280-h419-v0?authuser=0)

## Estructura Fachada

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10hzXFGtDAp3pbicW2dybfQvIjMF0cHnFX-EcDkt5-Zc7cfPh2wwxADmxRLaAKefQ3ohAVkWZbvtT9PRGvnMnUAvjUs5H4uu74LN1_xiaw5evT9bnaj79j6MDk1zE5_s05BcRssg=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Proporcionar una interfaz simple a un

## subsistema.

Hay muchas dependencias entre clientes y las

## clases que implementan una abstracción.

Se desea una arquitectura de varios niveles: una

## fachada define el punto de entrada para cada nivel subsistema.

Patrones de Creación
Patrones de Estructura
Façade / Fachada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37peEj6DI1HHGj75utj9ZfLQ2pdJfZM7lhU3fscqS66sXEhcRa2KbikoZ9gxbon4AQC--b7Zo_t7T1saSYEOVV8_kVnPgcINY9as2OZ5Y1IzSTAF-rrWT2c_ojMqmy5Kxk5JGvPA=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Facilita a los clientes el uso de un subsistema, al

## ocultar sus componentes.

Proporciona un acoplamiento débil entre un

## subsistema y los clientes: cambios en los componentes no afectan a los clientes.

No se impide a los clientes el uso de las clases del subsistema si lo necesitan. Se puede elegir entre facilidad y funcionalidad
Patrones de Creación
Patrones de Estructura
Façade / Fachada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Izrn57fZPJdrJn5-FLqf4U--oqUq54rqyIxwwrHRAGvbnklhRVad83lJ5iV_yrW1asKaYyV8EpeEeIq1ETXWoEd3hF1yDujt_2zfs4Q5oiV0queLSGuOXPh7MxIBMHhkLISTE0w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SWrgaivndyfkqjtl2UhWyBeLMYcxFM4o6QGURfdvo1eYDerkc-DuC1tnm9JfGxbp-PiCG7BZBIWyO1JhGMUjSpDdzV_MSLUc4UrEHBPV2-WEpgfWNpxtbztVD8OWTgm7uLVBfxw=w1151-h868-v0?authuser=0)
Façade: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yZHRZJULP2MxlYuxqn8kqEys5HEW96V9qe5Pv35IiHOXoWmR6Hqr9MpS5LE0Ft6qt9NEyNxZzRWd4vF-a0k2ZKxSvchV1rPNv1zU5t6xfcXIGugXFBGY64a6g0CjGWl_e4KlVTg=w1015-h571-v0?authuser=0)

#### ◎ Participantes

Fachada [FachadaEnvio]: Conoce las clases del subsistema que son responsables ante una petición. Se ocupa de delegar las solicitudes de los clientes en los objetos apropiados.
Clases del Subsistema: implementan la funcionalidad del subsistema y realizan las tareas solicitadas por la fachada.

## ◎ Procedimiento

Definir los servicios que serán brindados por la Fachada.
Crear una clase de fabricación pura de acceso público que

#### proporcione a los clientes los servicios definidos (FachadaEnvio).

Implementar los métodos que realizan la petición a las clases del

#### subsistema.

Establecer las relaciones requeridas con los objetos propios del
Façade / Fachada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AjiqlyXGuCHjUbCgIoQU0JArF6wmX-OAcnF57CbZm0ZMucFcI-0Q4DHi8R68RF6R-C-FMx1kEJaDXQmEOR0ZWjvaOgWo5eHkZAMl4HDWRTZl99Gwm4NwtgdFdsnoNzwyHFAqo0Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1faPdVLlzOz40VLClnGimSSNcZj7RI8YUBR4t-ChGtFb61R3HnkqxwlPLXILsKCr8rb8U2Jb8wc6vBClLbaDAtE_xzfBdZrEhfisz2golDaoqe-Xwk8k_DNnSpSlp5vIA6jkMj=w1268-h788-v0?authuser=0)
Façade: Aplicación

## ◎ Dinámica:


## ◎ Ventajas:

Disminuye el acoplamiento entre un subsistema y sus clientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3reAqKr5Gj98TFuHOZnHBAZFup2enW-HVzfX7k0Q3XA7mU8bTeqcEbyPscbyfXikVjWEsEKiM1twcCNbb9mn-ezgEmUG9SM6IQNDmz0KScdMsOq2dZFNc7Q2x0_CGJxQiAFS6e_A=w1015-h571-v0?authuser=0)
Abstract Factory (Factoría Abstracta)

## ◎ Propósito

Proporcionar una interfaz para crear familias

## de objetos relacionados o dependientes sin especificar la clase concreta


## ◎ Motivación

Un toolkit interfaz de usuario que soporta

## diferentes formatos: Windows, Motif, X-Windows,..

Patrones de Creación
Patrones de Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0y5ISnt8Zr6cp5Z1V7uxLt7pAuCSqe2XbdKAuqliOHfMJ4b3IiK0OO1Yey6mzVgED83O-fCvV2PFLlm8YvZK5HG1FY01e8tv8UAkxjBtrzIfCsjopJ4y0su0ju1fj85XnD2ogolw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wg7fvIN6z2CFsetz6-ibkSmLdwyBIFaJ__LtyB4VmodFYDrMPxcS12PgdanLFI881FWTjdEn0rKq6zCr6N_qfofVso6P8wo26FdvEH_rLnQP8hEPawjQM6zaoK-oToaKEmrWlfA=w1124-h889-v0?authuser=0)
Abstract Factory

## Estructura Realización

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DHtWK9ZmLOk2nRIx_D00jaKAkFDQCHkDL7FuBexPv84z9F64PMy-sAiBZeYLxEWcJ4nTHQbB-6o9mSfRfV-NuVI8qavFGjSaWJqG3VPfyQ67nj6ddJJ7_S8-fNmN3Alhd77I3_A=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05oos8cJ-VbmgexJdcZYr-akcH-ZCGykwmd0e9LcWs_0DUKxaKn_oi5YhLXCCUl5ghabQiDm91_8dv2ZKn8lDwG0l230taFcGOKH8Ht18X2__VcZdWIamTDmgyjWjVToHsI8xp=w1162-h860-v0?authuser=0)
Abstract Factory

## Estructura


## Herencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00ewv7r0E4LhVbFoqJmXwk9sNLrcw0wXdkLu3XY02Zt_0ZERON771xIrbzshBnzmFTtn4FAkoIbUulyzLnrACeNEoFtEde83cfUDHhpBkqZ2SYb2rJhXY33wkinyZrxJjbGWzLRQ=w1015-h571-v0?authuser=0)

## ◎ Aplicabilidad

Un sistema debería ser independiente de cómo sus

### productos son creados, compuestos y representados

Un sistema debería ser configurado para una familia de

### productos.

Una familia de objetos productos relacionados es diseñado

### para ser utilizado juntos y se necesita forzar la restricción.

Se quiere proporcionar una librería de clases de productos y

### se quiere revelar sólo la interfaz, no la implementación.

Patrones de Creación
Patrones de Estructura
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k3ouWkLmdZXhbORYwRkrhNXA5-xRoQpSYbmWP7B9GIU0AvKukNTOvRt0HejpEm2E4t06Az4hzVtOg4zs0CukEqfigMeNqZPG1c6Tl7P3AfNvRvSTSGNz8wUBm19uwybpgYSCDmg=w1015-h571-v0?authuser=0)

## ◎ Consecuencias

Aísla a los clientes de las clases concretas de

## implementación.

Facilita el intercambio de familias de

## productos.

Favorece la consistencia entre productos
Es difícil soportar nuevas clases de productos.
Patrones de Creación
Patrones de Estructura
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2U6eQvbpI2qMr9o3bjYAnW3XfcQfMo8-0XODSPr4cW_l7FMJHWVUjEhUGYrBETCisK-WwA_QHxcIrmuzG9HWCrYyFi6Z1sEkLRHJZZ2_Y1MHl-JbRfStcXpAYWzEH7nL9z3M-43w=w1015-h571-v0?authuser=0)

## ◎ Implementación

Factorías como singleton.
Se necesita una subclase de AbstractFactory por cada

### clase de producto que redefine un método factoría.

Posibilidad de usar el patrón Prototype.
Definir factorías extensibles: AbstractFactory sólo

### necesita un método de creación. DEPENDE DEL LENGUAJE

Patrones de Creación
Patrones de Estructura
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QDwmhS3oCyPdlmGXDf_mlMnkSoMokpHxtTxl6oKNm4QKcr2X2PoTi6-5QST4s8RkEJElaKVKpbunGIxBmr_i9zZ_HyZFgnn2YjV6GpKWqdRl96n5phc9f77QGxgY3OSQd_9HVLw=w1015-h571-v0?authuser=0)

## ◎ Procedimiento

Analizar la situación determinando elementos que siendo del mismo tipo varían en su comportamiento (Productos).
Identificar el patrón que da origen a las variaciones en los productos (fábricas).
Implementar las características que varían de los productos es decir: implementar los productos concretos.
Implementar las fábricas concretas que crean los productos concretos.
Establecer en el cliente la relación de conocimiento con la fábrica abstracta y el producto abstracto.
Entendemos que el cliente recibirá por parámetros la identificación de la fábrica concreta. Y a partir de esta última se determinarán los productos concretos que corresponda.
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv205UJqkO6HB0tVzsWat_-cXxEewgyLaOpi39b-74Wwx4Q9KpaOCKSvbDkBLnv49HgN98fFy_dvFnQ6CtDrawooD_Lk3S1-OvVWcCxqdsjj0NPLoiDjY6rENf_IU1poK6HcBxpu=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZQ3AW7VfL-DJAgeDtHL_reuroWvB0A_OZtAESzacBXD_pTVNGkmRJaK0Bz99r4GHNROK94hf6XXVVeTa2PyTrXZpdze7PJyZWuA5dErd3nZ7I2eGp5WkLV4YWfRJ-CaoAQ86EbA=w1280-h618-v0?authuser=0)
Abstract Factory: Aplicación

## Estructura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hBJJ09EdJGmzPuPEcKCyGJzXB_5xogY_KqAsPOn8TtfqOngY1Kajywb9lqBwKa5AqLCteBFCMGGw5VIaC23Unbm1g0CjozW_q700N-eMqAX97RutgEOdmDA0VcLIhgVgr_7YM=w1015-h571-v0?authuser=0)

## ◎ Participantes

Fábrica Abstracta [IFabricaPais]:

## ￮ Declara una interfaz para las operaciones que crean los objetos que

determinar las preferencias de los usuarios para moneda, fecha y hora.
Fábricas Concreta [FabricaArgentina y FabricaChile]:

## ￮ Implementa las operaciones que crean los objetos que definen las

preferencias concretas de cada país.
Producto Abstracto [ICalendario, IInfoPersonal]:

## ￮ Declara la interfaz para un crear cada producto determinado.

Producto Concreto [CalendarioArg, CalendarioChile, InfoPersonalArg, InfoPersonalChi]

## ￮ Define un objeto para que sea creado por la fábrica correspondiente al país.

Cliente [GestorCliente]

## ￮ Sólo usa interfaces declaradas por las clases fábrica abstracta y producto

abstracto.
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3eQzNRpqgYI7X6E_jaOoBg3dmiHhhuORW3BDovWi3nwECRzFf4GHx039u4qVvMbOMEkOHgyyKa5Z7g4wVFu_jngIOZ0rghfar_vz2Dy_J0PlKHwU15HUb4p48faMIJHneUDmkmDA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04KUD2-YR-F0AczIUxcCyNRLLw44oXwOOIh8DZ_Gv7In_r9uL_CifydW9v1LC9focqqybzM8JHUMtp5yPb9IF5URWKiZ_GiPAFjwj419Z9-kkAliU-pOgoTomeHBtPgy2_5zLRNA=w1256-h654-v0?authuser=0)
Abstract Factory: Aplicación

## Dinámica

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VbC_XXiMM9xi0j884bFmKWSwwS8EUk1M9WACWV53nOJFBXhuAWTVExvaSfoiw-JhUaCkicKPErybxL9oRfQyFuenMj4AHDjRHR7iLLmZFd4X8osJ_w-43CAsarNKT_OsFbCHV=w1015-h571-v0?authuser=0)
Abstract Factory: Aplicación

## ◎ Procedimiento


## Obtener Formato Fecha

El GestorCliente necesita configurar el formato de fecha en función del país, para ello le pide al Cliente la referencia del país al que pertenece.
Luego le pide a la FabricaArgentina que cree la InfoPersonalArg y que obtenga la máscara de teléfono.
Luego el GestorCliente le envía a la PantallaCliente la información para configurar campo de número de teléfono, según el país.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zr2ZcLNDPrBdKRC-fFoIdATgA4jSrZbauPBnL1j5q4eb5POQ8cki3wMkxe-jZYnOO8RD5dwTbrTZFNTjC7qMjCiOCwd4hFd0SWXCosqm9vnEopk5AWd_-caWQ0bf5TQXwa7uevQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32OWPym5y3jFKhhvifvQyA1FzP43_bAFsM_Fw1l6JIrarzLu5GSShlV2J9B918HgiOGWG1biGlC8gapCU-FE0MipPZ5UfjAfcjvCYT2jdNSc9ehdt5xAw_3BoSussS65yHb4YK_Q=w1149-h606-v0?authuser=0)
Abstract Factory: Aplicación

## Dinámica

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HwljGHAB9g4RrOKIxNu1-ekz22_dy8qVxgwn0ItI1ddACGZsorwfsyJ3YDOz99vplRctlKf1e0aA8TORGVhM2cfjX9HATl-FcWIr5ENUstzIFl4guEMUjkv10WUdE62R5esln3w=w1015-h571-v0?authuser=0)

## ◎ Procedimiento


## Obtener Número de Teléfono

El GestorCliente necesita configurar el formato del número de teléfono en función del país, para ello le pide al Cliente la referencia del país al que pertenece.
Luego le pide a la FabricaArgentina que cree el CalendarioArg y que obtenga el formato de fecha.
Luego el GestorCliente le envía a la PantallaCliente la información para configurar campo de fecha según el formato elegido.
Abstract Factory
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1crsKn1pC9-nRFr2y5r6cfFqmMWCUcAaRSbsngtA4Ye0hbmgxYn3Pv1h4GTxBgnaEUdl45uTbOGI0pVt-xQIVqNLftC7jGUit1AYDSAmp_UMn6Ytc9j7_47IEqajWQ2RoLsUnk=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eO8E_lspJmarhIy0yNoYBN5oEcpi6bxszoRAMawNuoBvK_rv9aah8X9PsYcVR97DdJ6fTfjkW0iuusKcP6FprGk0i7LPoX2KFMxAc7K95uKYKTZJvxyFrXmF7FcRcGf2qkLnmvQ=w1280-h644-v0?authuser=0)

## Vista Parcial del Modelo de Diseño Resultante

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25UbvkuMMm9wTNqVTamME8WRRIHyhfG3hkG0a-su7tX-2kwRn_My0ux35y36l4J6iwTerTrGhPL0UnC9UBE_xtJqo5MNuCUdJXfx2WO7xBgQfR4tb3HtXgIsVw7dXNJZUprfu0Wg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KK87M0Q9kmF9KAy-caSTIolSBdh3Cw4uBB49n21F1Ro9dF4e25jS3zyB9GwF13GomtwUNol53r173UjGKm_miE7xY66f254Mzgn-mReLSgzXd4mX9_woE-LVbIRce2AMDL4EFjg=w1280-h727-v0?authuser=0)
Relaciones entre los patrones
Causas comunes de rediseño
Crear un objeto indicando la clase. 
Abstract factory, Factory Method, Prototype
Dependencia de operaciones específicas 
Chain of Responsability, Command
Dependencia de plataformas Hw o Sw 
Abstract Factory, Bridge
Dependencia sobre representación de objetos. 
Abstract factory, Bridge, Memento, Proxy
Dependencias de algoritmos 
Builder, Iterator, Strategy, Template Method,
Visitor
Acoplamiento fuerte entre clases 
Abstract factory, Bridge, CoR, Command,
Facade, Mediator, Observer
Extender funcionalidad mediante subclases 
Bridge, CoR, Composite, Decorator,
Observer, Strategy, State
Incapacidad de cambiar clases convenientemente 
Adapter, Decorator, Visitor
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hKSt-TG9B1ANMXaCc69F8ErJ_Gb9CeFzwjLg0flRxEfVg-SX3STfzAMWSWRh2xdfq7_9Z3wj-MIF53odcGgR8ldvsiKzINCUBqWLRsXASKprSO3Xfzt8c3zJ75pzkdNTHBGdJKA=w259-h194-v0?authuser=0)
“

## ◎ Design Patterns: Elements of Reusable Object-


### oriented software. Gamma, Helm, Johnson, Vlissides


## ◎ Applying UML and Patterns. Craig Larman ◎ Head First Design Patterns. Freeman & Freeman ◎ Dive into Design Patterns. Alexander Shvets ◎ https://refactoring.guru/

Bibliografía
