# DSI CONVENCIONES DE MODELADO V1-5.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento establece las 
normas y directrices técnicas
 que deben seguir los estudiantes y profesionales de la cátedra de Diseño de Sistemas de Información para garantizar la 
uniformidad y claridad
 en la creación de modelos de software. A través de un enfoque basado en el lenguaje 
UML y patrones de diseño
, el texto define criterios específicos para la nomenclatura, la estructuración de 
casos de uso
 y la representación de diagramas de dominio, análisis y arquitectura. Su propósito fundamental es construir un 
vocabulario común
 que optimice la comunicación entre los interesados, asegure la 
calidad del producto final
 y facilite el mantenimiento y la escalabilidad de sistemas complejos, incluyendo arquitecturas modernas de 
microservicios
. Al detallar desde la gestión de transacciones hasta el despliegue físico en servidores, la fuente actúa como un manual operativo que transforma conceptos teóricos en 
prácticas de modelado consistentes
 y profesionales.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0F3PrJtxiOm6BxDNC5w5gbqxpvdfyl9_SRGYgO88yBoOCNmm1NBDF9isIQcM-fzto7m6Yp6LACs2VunkQIBHqVt5xAsPPkzR1G0hFibQ4Nxr7CifXhPU1SLkbaDsqmV3bW4UIE8w=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HcpCsLYpXf_SW8ODAmENmr_z3SIrydwHyw4qIzPieu13gpHY-AOhy0xqWv2SbjCOywxV3OAeJYtrTHyzmCDNH5rohINJlET7bsJJO15RsxJbLS7typE05O-fbk4I5CZzWg2bj0A=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Convenciones de Modelado de la Cátedra de


## Diseño de Sistemas de Información

¿Qué son las convenciones de modelado?
Las convenciones de modelado en el software se refieren a un conjunto de reglas y pautas que quienes
integran un equipo de trabajo siguen al diseñar modelos de software, ya sea a nivel de requerimientos,
análisis, arquitectura, diseño y/o implementación.
Estas convenciones ayudan a establecer un vocabulario común entre los interesados, ya sea un equipo de
desarrollo, una cátedra, una organización, que facilita la comprensión, mantenimiento y colaboración en
el contexto del trabajo a realizar.
Se definen convenciones de modelado en el software, por ejemplo utilizando:
❖ Nomenclatura consistente: Utilizar nombres descriptivos y coherentes para clases, métodos,
variables, etc., de modo que sea fácil entender su propósito y función.
❖ Diagramas de UML: Seguir las convenciones establecidas para el UML (Unified Modeling
Language), como el uso adecuado de clases, interfaces, relaciones, etc.
❖ Patrones de diseño: Aplicar patrones de diseño reconocidos para resolver problemas comunes.
❖ Patrones GRASP: aplicar las tácticas recomendadas por los patrones GRASP a la hora de distribuir
las responsabilidades entre las clases.
❖ Buenas prácticas de estilo al utilizar UML para modelar software, por ejemplo, la cantidad de
elementos a incluir en una vista, el no cruzar líneas al modelar, etc.
¿Para qué sirven las convenciones de modelado?
La utilización de convenciones de modelado en el desarrollo de software proporciona una serie de
beneficios y utilidades importantes para las personas involucradas y para la calidad del producto final.
Algunas de las principales razones por las cuales es beneficioso usar convenciones de modelado son las
siguientes:
❖ Facilita la comprensión: Al seguir un conjunto de reglas y pautas comunes, se establece un
estándar que facilita la comprensión de los modelos creados tanto para los participantes
actuales del equipo como para participantes que requieran interpretar los modelos creados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SQfceVMUNlNjLfuFVXFIDMaquZXFRfe186DF0aFVc_z3RH_Z2HSIQ2_tuHPwPvRZxSJ1BjgDfA_IUvMwkB0TJ5G1xEIi-h4O3nY9tQvWrihWzEwVEcE2Ob5jPh6SrJCA31_PNqg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1q8VzIun3fe4kSLlvDhS_zF5RVpslBb49OOTtGw9imRuf8tPbleegK5wVkIE-sXVZy9zVBHypd2Psey6Y7W1IE2m7xekQflqL8HK2sjCoeuM9CQHZSlDm_a4_RdHNbNsV6teo9dg=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21y87qf6ewzY6q5MHhHvWKyPmi3HxjuX1qrl7a8wb_w9VxxqkWNlE0BGyTo9BZ2cfYTBIZprPSumLN62fPUDPQ-9YUWUS6HpANucPDUMFXbGGCnAfMzAUr8wLg8vK2llfWF1prIg=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
❖ Mejora la comunicación: Al adoptar convenciones de modelado, se establece un lenguaje común
y una forma consistente de representar el software, lo que facilita la comunicación entre los
miembros del equipo y con otras partes interesadas.
❖ Aumenta la productividad: Al seguir convenciones establecidas, se reduce la ambigüedad y se
evitan malentendidos, lo que conduce a una mayor eficiencia y productividad en el proceso de
desarrollo de software.
❖ Facilita el mantenimiento: La utilización de convenciones de modelado contribuye a la creación
de software más mantenible, ya que modelos claros y coherentes facilitan la identificación y
corrección de errores, así como la realización de modificaciones y actualizaciones en el futuro.
❖ Promueve la consistencia: Al mantener una estructura y estilo coherentes en los modelados del
software, se promueve la consistencia en todo el sistema, lo que contribuye a su integridad y
calidad global.
❖ Ayuda en la escalabilidad: Las convenciones de modelado bien establecidas pueden facilitar la
escalabilidad del software, permitiendo que el sistema crezca de manera sostenible y se adapte a
nuevas funcionalidades y requisitos sin comprometer su calidad.
En síntesis, el uso de convenciones de modelado en el desarrollo de software es fundamental para
promover la claridad, la coherencia y la eficiencia en el proceso de creación de sistemas de software, lo
que resulta en productos finales de mayor calidad y más fáciles de mantener y evolucionar.
¿Cuáles son las convenciones de modelado cubiertas en este documento?
Las convenciones de modelado que se presentan en este documento son las convenciones definidas por
los docentes de la cátedra, sobre aspectos que no están definidos explícitamente en la bibliografía de
referencia consultada.
En algunas ocasiones son simplificaciones adoptadas para modelar, en otras ocasiones el uso de
expresiones lingüísticas, no obstante en ningún caso entran en contradicción con el paradigma de
orientación a objetos, los principios de diseño, el UML, los lineamientos de estilo para el modelado con
UML.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PP3yTTAxcz32mX56qCPTmyRjx909vEELixdeLn7KcX6SFAeX16lLUqzSNAZdVB1mOITs8P7h80cvoWfumsUHyJMksl212HuutsfF2Z45Lxa7guiwHeDMXbu-BhBRawZpA7AkMOQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PFittdrm54cTNQSYYifVE254pOiMxo1wMw6Dj6BXGyJXRFM45gyKoa7hKkd2xj7mksqqUyaLzgldvQ_107CG2KSlHb66NHOUNjXVju-gHFOCD-OsWjPCPQHcxuR4dj_NcCc6V=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uw14VQLPJgfljKv5c1qVW3nOAy7tPJPwKi0YOzZJhQOuChE4Oh6uGTc3B0Ts7M9P-NF7oiut3_o4ukVCgL0719edeKnq-NVsd0Tu8ajykxrGIhZb4MBLYhZbc19Z-ThvSErwt=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Definición del Sistema de Información

Definición de alcances:
🖌 Administrar: utilizamos es término para referirnos a la identificación a las funcionalidades relacionadas con
los casos de uso mantenedores de información del sistema, conocidos como ABMC, es decir Registrar,
Modificar, Consultar, Eliminar. Como ejemplo las clases de soporte son las que necesitan este tipo de casos
de uso para administrarlas: TipoSuelo, TipoLaboreo, VariedadPizza, País, Provincia, Ciudad. También se
utiliza el término administración para las clases de definición tales como: Cultivo, Agroquímico,
Tratamiento. Ejemplo:
o Administrar cultivos, que abarca los casos de uso:  Registrar Cultivo  Modificar Cultivo  Eliminar Cultivo  Consultar Cultivo
🖌 Gestionar: este término lo utilizamos para referirnos a los alcances asociados a las transacciones del dominio
del problema. Ejemplo de transacciones dependiendo el dominio pueden ser: Venta, Cobro, Reserva,
ProyectoDeCultivo, Pedido, etc. En este caso un alcance se escribiría:
o Gestionar reservas, que abarca los casos de uso:  Registrar Reserva  Modificar Reserva  Consultar reserva  Anular reservas no confirmadas  Cancelar reservas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X6MGBnFUVfZk8LMvJm0CnkgEXW0Qqnpce6sZLSco7P44rRWsGLKoply71Ue9_a_RgQLYG-13blKf0aVssKVjpe4-o5irpxgJer8MRO5urw3WH7pj2r38DR6FclcX2OqIqzJoT0g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv344gm8ucoPiq6qn903rmfEc5W9N_pf2ALsb4Izz3Ppy-J6JBJ4MXai6ezMPnXuUKblmx8KzaNQpQmTGXd6_9NumdYCRYVzYrjlMlzWNU6ssy3OvmoC2InUVjFgchceEaeRRUQA1Q=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17ILQBqKaKvXP-SJUasGNFnyuPgIdI0S64jVmmA-R3RFHf-j3kj0V9ueCg98llYRRU956jo8Fxy26DD3xsDcYcL0tgVgBFea20L2cfM5VfSfz8_NAv-KXBk6Bz53E6tm3gpfMJ1w=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Modelo de Casos de Uso

El modelo de casos de uso está conformado por varias vistas de casos de uso (construidas con diagramas de casos
de uso), que pueden variar de acuerdo a lo que se desea mostrar, descripciones de casos de uso y descripciones
de actores.
 Definición de caso de uso: cada caso de uso debe cumplir un objetivo y el nombre del caso de uso debe ser
representativo de lo que hace el caso de uso.
o Se debe respetar el vocabulario del dominio del problema, por ejemplo si en una pizzería el
empleado refiere como PEDIDO a la transacción ocurrida cuando el cliente llega a la pizzería y solicita
una o más pizzas, entonces los casos de uso asociados a la gestión del pedido se nombran usando el
término pedido, por ejemplo: Registrar Pedido, Modificar Pedido, Cancelar Pedido, Consultar Pedido.
o El nombre del caso de uso debe darse desde la perspectiva del sistema: es decir si estamos
modelando un sistema que vende y cobra insumos de impresión, los casos de uso podrán llamarse:
Registrar venta de insumo o Vender insumo; Cobrar insumos o registrar cobro de insumos que son os
casos de uso relacionados con el cliente. Para los casos de uso relacionados con el proveedor serán:
Registrar compra de insumos o Comprar insumos y Pagar insumos o registrar pago de insumos.
o El nombre debe ser claro, aunque para alcanzar la claridad sea largo. Por ejemplo:
▪ Para un caso de uso de reporte será: Generar reporte de cultivos con mayor rendimiento. Un
caso de uso que se nombre como Generar reporte, no dice nada, se pueden generar muchos
reportes en un sistema.
 Casos de uso temporales: pueden aparecer solos (sin actor) o identificar el tiempo como actor.
 Casos de uso para administrar las clases de soporte o definición, los casos de uso de tipo ABMC (altas, bajas,
modificaciones, consultas) tal como se indicó en el apartado de alcance por ejemplo:
o Administrar cultivos, que abarca los casos de uso: ▪ Registrar Cultivo ▪ Modificar Cultivo ▪ Eliminar Cultivo ▪ Consultar Cultivo
 Vista Esencial
La vista que se usa por lo general es la vista esencial, que es la vista que muestra los casos de uso que representan
en forma directa a los objetivos del sistema de información y que consideran los alcances desde una perspectiva
de escenario principal o feliz. Es decir sin considerar excepciones, errores o alternativas. Es decir:
▪ Si el alcance es Administrar cultivos, que abarca los casos de uso: Registrar Cultivo, Modificar Cultivo, 
Eliminar Cultivo, Consultar Cultivo; el caso de uso que se incluye en la vista esencial es el Registrar Cultivo, 
únicamente.
▪ No se incluyen casos de uso que representen cancelaciones, modificaciones. ▪ No se incluyen casos de uso genéricos como Iniciar sesión. ▪ Respecto a los reportes y/o estadísticas se incluyen algunos casos de uso representativos relacionados a los
alcances. ▪ Pueden no estar los relaciones entre casos de uso (extensiones y/o inclusiones) ▪ No se incluyen los actores secundarios en especial si son de categoría software y/o hardware.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2W0nXSELgAuVhR31Yxtp8u6uurmdjmsIwVTtto0nDN5qERZ56ufXxw6tmjm7sJnhgf81pRQkUknHJyeL5zWJEOOX49J9JlkCAtM_0347AGJFWB6dzGZ8oljG4UkaZgj2NinAUsqg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2g7cS5w7z54nOsYu14SEUY6K4whJr2iQsmGMYfqsSgKhGaeQ3pAOhf0IlCQtIRlxPOOntQDSEFee3Jj21lrF5yvywWkd6dPZN-ngJll6lbQ0N5FbblmCTBrb2Joqwo-r6T2gDw6g=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_VxMItqALme9i5XsmlFd5_8O2wnw1PjyQnXH9p736MIs2euvMrpwgpPiGifap-1uf4KM-NrncBPHPafjqFDAsEn092qGYbS-zEAVWrUkQEn4LIEZ6fiyWZ9xi6xqRwJ6cXoYG3w=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zsJ_A5L0KtC_gqlT8sQ_9kjWyiACTvudKJwZGCfCLSt6hfCNULAjVee5KOm07OqAqYUHyNCo7RccYAFjeA8JpbhDooMJOepPrW1NtBRK3QE-3ZkgFRnAp2LW_Qy75VusUWlad=w562-h830-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Modelado de Dominio

El modelo de dominio o modelo de dominio del problema lo construimos utilizando la herramienta diagrama de
clases del UML.
Para esta vista que elegimos mostrar:
🖌 Atributos, sin visibilidad ni tipo.
🖌 Métodos, sin visibilidad, ni parámetros, ni retornos
🖌 Atributos de referencia los modelamos sobre la relación en lugar de declararlo como atributo dentro de la
clase.
🖌 Respecto de los métodos de acceso o métodos de seteo, es decir get() y set() para cada atributo, al igual
que el constructor al que denominamos “new()” y el destructor de objetos, que denominados “delete()” se
especifican en una única clase, aclarando con una nota que es la clase donde se muestran estos métodos.
Para el resto de las clases se asume que van, pero no se muestran.
Un ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WBXivZvxc4LT5gdFcc9ksrfiuDgJJSpmgi2ARVEfQfeiFYKdok0N1pNYysTnEn8s4INDFoQPRIWO1W55hZu9adl8Thiy6ApS917rY1Fmyk22MoiSCLzFeYvEznvNaXjNQ_UxGFg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BFFBi_durOJrQyPAP1xZKNl1_iUZDOHBbIIQQqtxGCOiCkpUuAPtwkLd8H10AwrH6jzAWWpP7okIH9GdQdHIyeACsdyOjwl08SvBISG16XqgEve9H0K7Mch47DSBgThOV-xFldw=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A0GEsTAIbwXSjOl7Nqe_Jk1E2iHg5r8tdafslnAEANb5UwCv6YQIJU_ujdS7MQqlrNTAql8HW3uXSyEFd3hT2vWswy7Wcl9cub4rvvwWgwap6vDagvnwryo0sLd8MEVna9jUsGg=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17_fJQG1wf6q-y7zoO8Z0C203aiq3Sfmpaly2EJy99cWVQhPuikplWnX8oskZTIZnlCzvB2iDBRdKdxEDl4X_w3p6EJmRjXDy6Fb98FyO-jKaQbff0sl7Gg7b1eXQKjxzITjK2SQ=w1280-h946-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Realizaciones de Casos de uso de análisis

🖌 En el contexto del análisis se modelarán los atributos, sin visibilidad ni tipo al igual que en el modelo de
dominio.
🖌 En el contexto del análisis se modelarán los métodos, sin visibilidad, ni parámetros, ni retornos.
🖌 Se incluyen en la vista de estructura de la realización de CU de análisis lo siguiente:
o Métodos en todas las clases únicamente los que se utilizan en la vista dinámica de la realización
o Atributos en las clases de fabricación pura, si tiene, se incluyen al menos 5 que sean representativos
de la realización que se está modelado.
o Atributos de las clases de entidad: todos los que sean necesarios para el dominio planteado.
🖌 Relaciones de dependencia: entre las clases de fabricación pura se modelará con relaciones de
dependencia, al igual que entre las clases de control y las clases de entidad.
🖌 En la vista estática de las realizaciones se modela con la representación etiquetada de la clase, según se
muestra en la siguiente imagen:
🖌 En la vista dinámica se muestra la representación icónica de los objetos, a saber:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YHT3fD8iGS4vgJPri-yqNwH9__M14iFnUXTtVp9342OrcB486JonW3CIT54rDlO3m-Ai-1DMtye-3iThigtYAYXcSleCssglZRjnNGiKhzGpqxUd1kkDF0X0YVaQ7gxNJ3UIYaA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DGqmB-EBHmKexvRfhorwnOk5205l_T4n1gO_FJxF2LIUyxWo2j_ru9qrPPq-fitXQrXzpNtNmvubjXWxihlMtTcRdu7o3yN23D7hd9PvX_oNjUyHg7n3LnP9WJ_1W7tm2L1lsZQ=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06kBcvgVAn-SzLIhTakHjmIl78uJ6HQSPBT-ftwaRYkPnavKUe_yhdJ9J8eb3UZRotglNg9hSbSE93NtUNMnn4nAHtAd1ueBiB4voaxW9t1zutNJDbmQMuaWmqxiEaokMKe1zFPQ=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qvmAPmbPkB6sgNaKScfn77WQIitx_iiR4oneHtxfQaIwbtfCC0yFz-jnSIsh5SXR7yNXk0K5RR68_6x9jN5kc1UUrk2BM3y0y3fOWu3BmAGdPSCoAJfqTMfJlen5xHm5xVfQg=w1280-h703-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h24mmB5hXx_BNhdDlFOo3jFilVuUIY12eHJ_peuiS_nzDdJVqyxsqX212s6YGZm4Nm0L79rhUay07N_1jLNeAiZbYyLiENO45-Dd4yO1E9fJj9H2WX3oY6xuA24vyj_XYtZDe=w612-h545-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
🖌 Nombrado de objetos: el nombrado de los objetos en UML se realiza poniendo un valor delante de los dos
puntos, se recomienda que sea un valor significativo para lo que ese objeto representa. No es obligatorio nombrar a los objetos, en la cátedra lo hacemos cuando eso aporta información que mejora lo que el modelo quiere comunicar. Sí es importante recordar que solo se nombran instancias únicas, es decir cuando el objeto representa una única instancia. En el ejemplo que se muestra a continuación, está nombrado el objeto campo como ”nuevo” porque se crea un campo, las instancias de lote no se nombran porque representa a todos los 
objetos lote que se crean, que pueden ser más de uno.
🖌 Métodos iteradores: los asteriscos se utilizan en el modelado dinámico asociado a los métodos para indicar
que ese método itera por todos los objetos a los que llega ese método. Se utiliza especialmente en el diagrama
de comunicación, dado que en el diagrama de secuencia se utiliza para modelar fragmentos, con el operador

## de fragmento “loop”. Como convención en la cátedra se modelará de la siguiente forma:

o Se utilizará el mismo objeto para representar todos los objetos de una clase, que para representar
a un subconjunto que cumple con un criterio de selección.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0apcqWqi7cQFGGiIFG5-7B94mbnSyyyYcS94_g_dhS5skiS1-XnfssVdVFMFQwHCmV22TMo7F_4lZtd-J4sddaXugKVowYNtkqWzvAnUjsAm3eTJ8S_Loqxq4Y60NvMLki2Hy3Vg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-J_CCUOT902IT_elZFuoyUO2Jgy8_VqC1jRHz2vVhnM9Y_Q5ONGQcz6u81athzhS7c_F5wGNjoH0TYpz0BrtAyPrUbs-Q4D0KeQkTstzTFlJ_ZNfNW5C6xCZUuOJ6rCX8yon8KQ=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08h7-4syPtYUAnyN-sA1FYv5mUipSJimtFb-lZJ_lUhtbdyQweE_h5_xT5A-J9hvgphwg59i4r9V1RFZEKGg7jycBW0Q_YGl-u5YDMAMLAZajRhOj7ZnhhL4qgrCHn17BPE2DrMg=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J2whgLY8Qf_Im2Xs5jxdB99gkx9TNJQtJ3qn2ieUoW4JraYyVaG4Dq-BsLA-_MynFavGQ60RnMbsNmrxpuj2cxPSvlOcHqyD8c3q7dlLgEbx5QJmgQUtdH1D5yeI6wMT26V1ztg=w1280-h974-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
o Los asteriscos en el diagrama de secuencia se utilizarán si es un único método el que forma parte de la iteración, de lo contrario se utilizará el fragmento de loop.
o Se recomienda utilizar un color diferente para los objetos que representan a todos los objetos de 
una clase o a un subconjunto. NO ES OBLIGACIÓN es una sugerencia.
En la siguiente imagen se muestran lo explicado:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19aLfj4nqnrbpGRq6ZfijUqvb9a0_iQEGOjD5VaVD2AED5wXH3-gB2ANGG5VGPfvIqwakjA6_aTUuyhWxIe6Tcn1vX8O8ryHUyBBnmWxrAEk51QVmKbF79k1vTznBTLRgZnPQ0sA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LRSjb8D8B0E5StJCQZ2XRQ2VysOaDHmoiKeeY6clRYBHgVehHDsm_VFcARiftb6vvByX9E9ZiROufa590M_jC_ACkcC4TyaDKEoLc81t5MKLFubYksocfIlHpxZWRwhXPXi2E2g=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xANXiIMkCAGEQ8D1borGDLhuryIyuhPe9XqzAOyewxORV_PUPIomQedjwA7PNFK0n74nLxDXg1qQtiygSpqjZEY-oCCPQYR6rXh8Z6AFYV7N2PI_bOgbn589_PfIo0KregqGvFg=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QeaQSUx5e-f2IMQLGMzj-guppRJUniA2djMvmnqhuW4ikd0w1XN3olJjFN9LUntP1MyynQOxByvrTiFSaEX_WZvwLrX2Mmm2pHDH6ZeiKUfMpEzM7dxD3cJAittbN1rW4FC5l=w415-h495-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uOOy1So4lVuYDo7IvV_1IUs8KR8IizL7jY79QBgpd0ZSC7S2pPXQNmzmGNBOz6xarrD5B2A-Zab54Q8aJPj7pE9Px3duCLAD92xAvvN7gdlaAtXLZpnkNzM3IlsLRDoNpT-Spuw=w777-h360-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10Y2d2svYwQCUAkV2VxcVFa4sT4Lf92EGOlBjhokiVvA72Z9MsGDdu7MW4eJSJrZJdfQvCT2IUdila5XLLvJhAATBFNzvT4pFi__D89MtdnpcB1Bfj5quD3eMizQUszqo0AA_HOA=w372-h265-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zTLUQ0N4mVoihsUpppMqFUs1c899uXuLtRRSfDFWgx3dt3muXqgzWdHPw_PNCGyVDyuS9iqcnaTyJzHiV1bci5TxL4RyQMzTomNKFNtOJhAvaVIhmZD8Gd29zyrp3PDgLC6KaUQ=w242-h260-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Arquitectura Monolítica

Convenciones para modelar la vista arquitectónica de la funcionalidad
🖌 Se incluirán la menor cantidad de casos de uso que contemplen los requerimientos no funcionales
significativos para la arquitectura y los requerimientos funcionales que la arquitectura debe resolver.
🖌 Se complementará con una justificación de la inclusión de cada caso de uso.
Convenciones para modelar la vista arquitectónica del diseño
🖌 En esta vista se incluirán únicamente los componentes que se desarrollarán, no los componentes de
terceros.
🖌 Se incluirán componentes representativos necesarios para resolver la funcionalidad expuesta en la vista
arquitectónica de la funcionalidad.
🖌 Se utilizará la letra “I” delante del nombre de cada interfaz, por ejemplo: ILogicaUsuario; IAutenticacion.
🖌 Interfaces se asocian al subsistema completo si es más de un componente el que provee o requiere lo
expuesto en la interfaz, de lo contrario se asocia con el componente específico. El primer caso son las
interfaces: ILogicaUsuario y IAutenticacion. El segundo caso son las interfaces IMaterialización y
IDesmaterialización.
Por ejemplo:
🖌 Con respecto a los componentes de presentación, se identificará un componente de presentación para
cada tecnología por subsistema. Cada componente de presentación tendrá una interfaz requerida para
acceder a la lógica del subsistema asociado, que es la que tendrá la interfaz provista, que debe tener el
mismo nombre. Por ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IbZJjxG3io61iwhdwzept5wFC9gHZ-3ZBH9bFF3KSq_pBxeBsyiorbMcLpokVd9UHyLUttGudA25X6WkIHXR8qH-rOv2ooBbFGIGgs4f94oGZfQRB2gpHgpqzEyrIPtD4ML9oKQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hZIQ79MMlY294T3zSbfFFXv_HKA0LA2Cg8pavVol8KtRKlhcpEF7GR7A2xtHSqFQJqizy1HjM9DMx-x4SAKD_QA9cM9eXWAM8QDa7oYi0wFoO0dC5PU_YXBjuPfTb22qzZojtEA=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dA96Y9NMrZS7CBb0kpweO_jEM86yQDRFOQhPyL3V8sHt4YDfu4b7PRaTpRzZ82pWViOjWMjyjX8btER74QdCicJJm304n9l5-0Tluptn5km8uCZ1xWCqCCKJQi8tBRotFEgkNyw=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GimtFImeJ9o8OHc7thDR1hbuXaxAaXj8J6vzP7pH-ra0EfAZ0ey4em0D_Lhy41qlL7maNe8Ol3LkuV7eBMJduQVx9jz7W207kO9fIikvNCdFPZoY8y6NGfBlZyXmzvpCNzbEBvA=w435-h110-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ktKv-faWGnCF7f_V4492mfNhFYQ7CPikrv7Vu0Pa0oowYVsR8aBKSiNFLsazTzV82So1tL7Q0o21OlJ2GNVxg-Su_Dk-FvVGmJU56uR7tjfU9oW6HFEtn_nJ83SibkoQgj4WKow=w1055-h670-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
🖌 Al modelar con interfaces expuestas debe coincidir el nombre de la interfaz provista con el de la interfaz
requerida y en el único caso que puede haber una interfaz esté sola es cuando requiere servicios provistos
por sistemas/servicios externos, por ejemplo:
Convenciones para modelar la vista arquitectónica del despliegue
🖌 La cantidad de servidores para hacer el despliegue será la que esté explicitada, si no está explicitado, entonces
se recomiendan las buenas prácticas de separar las capas de software en niveles de hardware diferentes.
🖌 Para los nodos que representan servidores externos se espera que se identifiquen los componentes que se
deducen explícitamente del enunciado, de lo contrario los servidores externos podrán quedar sin
componentes.
🖌 Despliegue vinculado al RNF de Base de datos espejada (Mirroring). Si hubiera un RNF vinculado a espejar
bases de datos, eso se ve reflejado en la Vista de Despliegue y la base de datos espejo debe estar en otro
servidor diferente del que está alojada la base de datos y estar vinculada con el servidor de aplicaciones.
Ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14OhCH5Qqne62WhwEaDGqyQkfwcNUFlpmEbPtRLqS9gLS4iYmWfpxaMTFDMW7931sm2sszXs10I2fMDKIU6-TBEYMXYuKsf0R0LvIDgbLou8D4tcbcOzbSMoK-Ngh9-AN9IrPkmQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ecT6Kg6I0N_WAEvTFzfPDywiLL5yE4K3QSTITSS31kDvc9DTIyOsfJ-kJvvuMwQLju7KBISuz-D_n2iGAK5CZ3OutOxZO2Za03g0IInBMAVOwD50UAqP0rdRf6IOuxZsiKn-OIw=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-0nQbl4k0p7nqCLpExNIOle3_WeAuoYpYKUV_F_IHx1-V3eGD-vV08zjJ3jwxuNXslCZTbVP0wVvr7342SNXRO5J-tPS9UvkRFpoO-JfLskEbgINM_algIADoLrr0f31aVvxTYQ=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado

## Arquitectura de Microservicios

Acuerdos y Convenciones para el modelado Los acuerdos y convenciones propuestos en este documento son el resultado del trabajo realizado para la
preparación del taller de Microservicios y surge como necesidad de acotar los contenidos que se abordarán en esta
primera etapa de modelado en la cátedra y además la necesidad de tomar definiciones sobre aspectos de modelado
que no están resueltos explícitamente en la bibliografía que se consultó.
🖌 Patrones para microservicios: vamos a comenzar utilizando algunos, que los aplicaremos al diseño de las
vistas.
🖌 Terminología:
o Microservicio se llama el estilo arquitectónico. Cada una de las unidades funcionales dentro del
producto es un “servicio” que lo representamos en UML con la notación de
subsistema/componente con el estereotipo de microservicio.
o Estilos vs. Patrones: En la bibliografía que hemos tomado como referencia se menciona como
Estilos a Monolítico y a Microservicios y patrones por ejemplo a estos que son los que vamos a
utilizar para modelar por ahora:
▪ Decompose by subdomain
▪ Database per Service
▪ API gateway
▪ Backends for frontends
▪ Single service per host
▪ Multiple Services per host
🖌 Identificación de subdominios: vamos a trabajar con el patrón de descomposición por subdominios,
basado en DDD (Domain Driven Design) y vamos a modelar los subdominios clasificando por tipos de
dominios, y esta identificación de dominios la usaremos de base para definir los servicios que tendrá el
producto.
Los tipos de dominios son:
o Dominios Core: donde se realiza una inversión estratégica, prioritario. Distingue a la organización
de la competencia.
o Dominios de Soporte: contribuyen al core facilitando que se pueda llevar a cabo. Son necesarios y
tienen sentido en relación con el core y en ese sentido son específicos
o Dominios Genéricos: son aspectos que no son centrales del negocio, de hecho, son comunes a
muchos tipos de negocio, y podrían incluso ser subcontratados, externalizados o comprados.
🖌 Modelado de los dominios en el EA: para modelar los subdominios en el EA utilizamos dentro de la barra
de herramientas la notación SOMF – Conceptual Architecture Assets, el elemento Business Domain:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1d5NNfysHl6w71uhAUOUKWskjkKTooopGD8nxC5Dq1pLorwfkQwEHoZqk0u-i_FMfw2wY9t7tppSo1SwKf7MtHERuWh5N2KNzcEMbHT9JZul0QywEHswq2Q3XUsLU1rl8NwwRc=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15umanCwPI4qGCB-egUM4FPCghQ0yNM6afX48ffzhTbm7ME46gqpeCNYC-Njp9UzkUUUu3Tpo7ikWftm7-a0xMtV7xX3Z8oolLCBhPuawY0cwpa-M0O-nMeSRY1y7mCKpoxuOo=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ess2Ao7fJgu7Z--2uqv-Z1D4t9xU2VH2wv8IdJgsXinWvhort6EO8hrH1814gYQMMWq-dkVl_VHzEdGNOA-pOuEoWmMXANuDy6NNFOsmib0kWdDLR70WvXfclIou-dvTWNufIiQ=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lEaHIQR_JDeeGKg0kSwzGSvd6VOgZTECNKn1bQzT16e83OxlAmWi6LhwqTSptrkqk4lD5rAI_wFnw3uDTnC-ih0tegJ5_bK0k8pLIHxpdMfE1ujXtoB8LQXpJRF8hRWzSmN9w=w915-h295-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q8kXUCT093IVMdmYqnaCwBuEDm7LfiTF8ems2X6ehYpDAX82NaT9jyMqA66CWZUo4CIYAAxbGp1EDO2jCBe0MT7N47TS8lSMrMsm5Vr8ZN-ebQs7E7bll-ZBegtTtFhwl5q6GnA=w902-h560-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
🖌 Modelado de las bases de datos en el EA: para modelar las bases de datos en el EA utilizamos dentro de la
barra de herramientas la notación SOMF – Reference Architecture Building Blocks, el elemento Repository.
🖌 Vistas a construir:
o La vista de funcionalidad tal como se venía trabajando.
o Se agrega la vista de diseño global para tener una imagen más general de la estructura de la
aplicación.
o La vista de diseño y de despliegue son las que se van a ver modificadas como resultado de este
estilo arquitectónico y que se verán en detalle más adelante.
🖌 Convenciones para modelar en la Vista de Diseño Global
o Los servicios provistos por terceros, externos, aparecen en esta vista y luego en la vista de
despliegue, en la vista de diseño detallada no aparecen:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06IOLdetjx5WuCLIsHi1Uy64zAne3cmkxAklStfu_D0TYbN0UgeNu6OtxYTh7vjF2-HBeLmEziEb9AxIaXXm5M_csja4zSWt4mAogfFw3-iGFqWS6UKi7jzyVJOjhuT1Y92d6A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0auE6n269kFCK2JqFcrZ_8Uo4konzNgQ4WdBm3oKyH-1ViVNGckjz_v23nf9TCzLYIwCXnhpxGZlaif42s-Y10gIc7_6ystIcMotTNsyZiMnnwfMyr7Azg1mByDtZUHhvY6NPOMA=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vSgyy7uju426tK6jhJbwUsRPaME3-Jt4uRNpOx6Xn9uaTI7JVbjtiYX7fveAqVbjcGD5j2HKsTTD6FHcZRL52ycB1fhXCMQ6VXx3HjHt3G9mh52OZx296F2S6iEG7fXCCMsTxFA=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26OlxcCfkQamfpGh9VYc2qU3i7bbeKEz1s4Ixitj49cx6Fy2t0xsFxevfLpmRXBSpOuY-y9AARDkQm9E-zpNMY6NW0_slnlIeTHUxujiJZ6_tt6zUZmwvkdPGAGWrPipePfNQ7Qw=w965-h610-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
🖌 Convenciones para modelar la Vista de Diseño:
o Uso de API y/o API REST: en el glosario de la Cátedra en la UV hay definiciones respeto de estos
recursos, la convención acordada en la cátedra es que cuando se necesita explicitar que se trabaja
con comunicaciones asincrónicas optamos por API REST. Si no se explicita se puede usar API. Si bien
la tendencia actual es hacia el uso de API REST.
o Vamos a trabajar microservicios para el backend con un único front, por ahora, micro front ends lo
trabajaremos más adelante.
o Las interfaces de comunicación de los servicios que se comunican con el API Gateway o con el
Backend for Frontend será por medio de API Rest. Esto privilegia las comunicaciones asincrónicas.
o Las interfaces de comunicación en los gateways son requeridas y la parte de front y los servicios
tanto internos como externos tienen las interfaces provistas.
o Para la comunicación entre servicios internos del producto consideramos que los servicios de
dominio genéricos son los que ofrecen, es decir tienen las interfaces provistas y analizamos quienes
necesitan y ubicamos las interfaces requeridas.
o Para la comunicación con los servicios externos en la API Gateway Pública se ubican las interfaces
requeridas, una por cada servicio externo, por ejemplo Servidor de Correo, Google Maps,
MercadoPago, etc.; que en este caso quedarán sin interfaz provista. A su vez cada uno de los
servicios que interaccionan con los servicios externos (que por lo general son servicios de domino
genérico se integrarán también a la API Gateway Pública.
o Las interfaces salen del servicio, que está encapsulado, no desde los componentes que hay dentro
del servicio.
o La comunicación entre servicios de dominios core y dominios de soporte por intercambio de
información o actualización de datos en las respectivas bases de datos no los vamos a modelar por
ahora, se asume que la comunicación es por la API Rest de cada servicio que se conecta al API
Gateway. Esto es una simplificación, de lo contrario deberíamos incorporar otros patrones (SAGA,
CQRD, Messaging) y sería muy complejo.
o Respecto a la forma de estructurar cada servicio, recordar que la modularización de los servicios
debe mantener la cohesión lo más alta posible. En ese sentido se recomienda que los componentes
que manejan lógica de conversión o que dependen de sistemas externos no se ubiquen dentro de
los servicios de tipo core.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0W0Ln8fEk8UXCvbqmScD8lNHUehnNNcTcxq2qTNlOjlEIDuO1KVzhXdlUW16pajhzhNZ1DXmQUbcJx3T7aa7gD5spvQnDt_SWTIsKEfCVYbskoK9UvBkweIB3jzFfQN2I-wI6-qQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Tt-5t2Ve9xNpoEs9tBXrQh4SLrUc4s_HNmbk6ZC4PcR0DUzT2MQSXf-0lZX2VI9MMdYZfRJjHgeAa3rBUCfAkt91WGrspbmYJqa_dUB3akEmF0QbbLQQj7AllV5Fg8fHHjA8BOw=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n5dmWx52m3Bs9OeN3TGt0WyIkb_18D2cwemSgSr-KPh1X4ede68fWzKU_g_4yYNQe63ci3AUb7i34LSSKNd2QH_1ZHIm6G_xYqkPJUbkTf0rWpDBIpcxvzf7xJeCPVwJg45SojQ=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CT_1R3KTyeRlgUckr5rTdRkChXgZJrchAMOHnTteKiz6r506wzrkq2aZq46Ogk-_SMJ6yClpQ0yYQKyW0tqAWInZbPWMhmlUPuMRVgLuuMJvQxAH-RViURcLzvn3P5ZC3tnKu3w=w347-h587-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
o Base de Datos y persistencia: Vamos a trabajar con el patrón de una base de datos por servicio y
cada servicio tiene se componente de persistencia que depende de los componentes que tiene que
persistir y de la base de datos, por ejemplo:
🖌 Convenciones para modelar reportes y/o estadísticas: se acordaron dos opciones:
o Opción 1: Integración con una herramienta de reporteria externa como por ejemplo PowerBI, en
este caso:
▪ Debe estar especificado explícitamente como RNF.
▪ Se definirá como un dominio genérico.
▪ En la vista de diseño global incluirlo como componente externo y además un servicio de
integración.
o Opción 2: Desarrollar los reportes yo estadísticas internamente, en ese caso:
▪ No aparece como dominio
▪ No hay un servicio en la vista de diseño global.
▪ En la vista de diseño aparecen interfaces desde los servicios core donde están los datos
necesarios y la lógica de negocio desde donde generar los reportes y/o estadísticas.
▪ Agregar componente de presentación para cada tecnología (Web/Mobile) según
corresponda.
🖌 Convenciones para modelar la Vista de Despliegue:
o Despliegue de las páginas web, es decir los componentes del tipo “PresWeb” y el servidor web, se
desplegarán:
▪ Si usamos el patrón múltiples servicios por host, en el único servidor que tendremos. Por
ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06469MzI_ZSBobKEMCFKhAPbgQiSlOfccyq56onOc095N0k8Bpfh-0uUijAgUzfGViiQgbm0MkXio6g5QOQmfGiZj3Tk45YPevgstrKiPEidvCukrx-MN2EBjNvJ8Mnsd_hUZWRg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_SsmFkUf17E3J6XCGeUn4fiqAFD1Vhj6upfknlZuUC5sjR9HuC_Yw8r9QTaMfK-ptYj4OcK0uQyLQTNF8kXDGG9dxcVATOnfF6jk_e5chUA9eMtNYEj146DswupupU854AvmN=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tFz4fgS7GCtH8Gxj_uPz8aXhvkfztK5ynAYr7uN0OW2Nn9SfkSXDZQLAL3WC6RDrfbByPIVcBbepGmImMJZg8F9cjiNU7axtp_iHOzUB1aBtBRCK83NM8P1d6Xy_tAGPpUkjcCA=w160-h190-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mwVywP2IuTGV9wSOOvWZIVw7ejZnEXVOdeeE94mMkzbgw_Qnj1yJLcHXFrY9iFQwCtRpvnwKmX-9umqu6_YzTuO4WPOXc0sUcIwDrhBJbxtrZv82l9eME9esO6eDqV2bRhSYehQ=w958-h624-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AZ_WIRvpe6v9UlQqIPXVgX-8e4SAKRHOp59mpB3Al7AeTjUQ3pueopxx3pJFhGGvGd3Z191uZJS90iM_RzDdoBrUcOr15X4__TKBnLNuuSx1pTrLpO7_NIZugrKI-35FxgJgy=w1167-h996-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
▪ Si usamos el patrón un servicio por host, en el mismo servidor que alojamos el componente
servidor web y el o los api gateways. También se requiere desplegar el servidor web cada
host que contiene servicios de dominios genéricos. Por ejemplo:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3G5kEZOtJooE7JM7Fzuwg-VY1DVQBMETrIYQBuFih8H8bk7N13ItpQseGCrrjCScfIA4JQmWHs-dk7Y14db-k4uYloWUOoxccQUQK3je9YziPZrikxiOWI6QAo0FYYJrD2QsIb1Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-hNpunNrs9btU4K2E8AHUWnoIe__8irrGCahNja9WecYFckOZSE8J3yFyXgi2OUrk9V2_UTWgsdfPdpBm6sDC40V8kzbfH4EARYwgjwCZuPEnPElna5cw2GjM7L-Ik_u6DBF7JA=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36aTxPYZ4tj7mpl5H1OF5mnyZ8I0tVBEk9keNg-W-aB1gTaSzuH0Oo6DYwL_DL1a1J69RnFngFfMlPUvBICKog4hfEywtRKBO4wiqbeS1tF10TE_EjM7j0kDOKKZWq8T6q422SrQ=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
o Despliegue de componentes de UI Mobile, en la vista de diseño se identifican los componentes
(los mismos) y si se despliegan en SO Android y SO IOS, aparecen los dos clientes con los
componentes repetidos.
o Despliegue vinculado al RNF de Base de datos espejada (Mirroring)
▪ Replicación a nivel de la base de datos de cada servicio. Se puede configurar una réplica
en cada servicio para garantizar disponibilidad sin depender de otro microservicio. El
servidor que contiene la BD Espejo debe vincularse con el servidor del servicio a espejar y
con el servidor del Gateway (API / BFF).
▪ Base de Datos Sombra (Shadow Data bases): la otra opción es utilizar una base de datos
de sombra para almacenar una copia sincronizada de las bases de los servicios que se
necesita replicar.
▪ Respecto a qué bases de datos se van a espejar: depende de lo que plantee el
requerimiento no funcional. Si explicita el o los servicios que necesitan base de datos
espejada, se respeta eso, de lo contrario si no dice nada se espejan las bases de dato de
todos los servicios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oLudUy5sOxt-RSNf0e5Pwwr9NQ9rWiqFLIURB0hxSAdXvpVOwpvkvxx2HQ7cCHvQGfSSZqQv2Gewzk-RBklVM8z3gMCsn8vf4voHwz4bzoIoN1JzBxFeNJxRFidaHgTT9GyGBRg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2S7pvlL4aVGArkAwKCblk7vWg7vlAZnpV9CsO1YWHbZJxq2UqKG7e2fl01ltofDuT9PhLd8cykajx3eE1dnygbRco-NMxdAwqG6WJAxnrCfxm3b9Epg0804Kv3wLrkgnmdQHLR4Q=w147-h147-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2arWsneux_bqEv-nqvhWYRp2VeAFwdxyZXxZEK1y74TErO9l17qIJBquEosXZ405j_WKmuW_aAyp-T4VTfAchshftALOw1ZgS1DlXXX8Y5slzEGlzylsrq5qBqPJn9cL6klN3f_A=w160-h190-v0?authuser=0)
ING. EN SISTEMAS DE INFORMACIÓN
Convenciones de Modelado
Historia de Cambios
Fecha Versión Descripción Autor
30/03/2024 0.9 Versión inicial Judith Meles
30/03/2024 1.0 Se agregó la convención respecto al nombrado de los 
objetos en las realizaciones de casos de uso
María Sanchez Judith Meles
06/04/2024 1.1 Se agregan ejemplos para despliegue de microservicios. 
Se agregan convenciones para modelado con casos de uso.
Judith Meles Cecilia Massano
27/07/2024 1.2 Se agregan convenciones para la vista de diseño de 
microservicios.
Judith Meles Cecilia Massano Elizabeth Jeinson
07/6/2025 1.3 Se agregan convenciones para la base de datos espejada Judith Meles
08/04/2026 1.4 Se reemplazan las imágenes con la creación de objetos 
de fabricación pura, según UML 2.0
Judith Meles
07/09/2026 1.5 Se agregan convenciones para arquitectura monolítica Judith Meles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22dFWxtskwsm6iorOIMEeXxpCEq6M_pKCzYzUIAN5YIwqXrJXgtW5nR4fAlid9iNJ3rZWG_3Z6A73FwXK-G-gMMkm8mupwxTYyr_uSozKLcI0jWB5m1g1A8QUMHgcwjSInLD77=w839-h1187-v0?authuser=0)
