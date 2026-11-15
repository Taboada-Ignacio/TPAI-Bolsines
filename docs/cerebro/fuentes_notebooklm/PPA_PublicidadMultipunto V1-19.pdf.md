# PPA_PublicidadMultipunto V1-19.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla la especificación técnica y de 
diseño de sistemas
 para un proyecto de publicidad digital en red, abarcando tanto los 
requerimientos funcionales
 como los no funcionales. Su propósito principal es guiar la implementación arquitectónica y el modelado orientado a objetos de una plataforma web que administra 
puntos de emisión
 remotos, agendas de contenidos multimedia y pasarelas de pago de terceros. Asimismo, se establecen los diagramas de clases, 
patrones arquitectónicos
 y la gestión de cambios de negocio necesarios para adaptar el cálculo de tarifas y la persistencia de datos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2s7cNF7pC080h-l08H007VgX7rpefgGrtKcorsGjyBruQJ_EjSOcw8rhDHzV5vONpUAPgfPoWYEdXmyL5P6CscGS2GQIz1Q3bf4u9qKGqKqer1Nr3e_r05LXdz2QoOycNeaVd6MQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Pgp1PpcStS7S2vd_GIXGjgdMoeeo816VnOejVUfZ9BtC_lAQsGsUUvcL0cS1yBHrYs5cK9rAaj7DzpEcZZF74wViR-lcaZSIMQQgRzgRZesJb13fbQY-YLfcXnKtO-uoGCxm_=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 1

## Proyecto Prá ctico de Aplicácio n

Nombre del Proyecto Práctico de Aplicación: Publicidad Multipunto
Objetivo del Proyecto Práctico de Aplicación (PPA): El objetivo del proyecto es desarrollar el modelado de un software de gestión de tandas publicitarias en diferentes puntos emisión, como galerías o centros comerciales, a partir de una descripción del dominio. Sólo se muestran algunas vistas de los procesos de requerimientos, análisis y diseño del software, que se consideran prioritarias para destacar ciertos aspectos del producto que se construirá.
Objetivos de la Asignatura con respecto al PPA:
Analizar los sistemas de información mediante el paradigma de Orientación a Objetos.
Realizar la construcción de un Modelo de Análisis como base para la construcción de una arquitectura robusta del sistema.
Manejar las herramientas de modelado que brinda UML para la construcción de Modelos de Solución (Análisis y Diseño) a partir del Modelo de Requerimientos
Identificar requerimientos no funcionales y su impacto en la arquitectura.
Modelar la arquitectura del producto utilizando patrones arquitectónicos.
Resolver situaciones problemáticas del diseño con patrones de diseño.
Mapear la estructura de clases a bases de datos relacionales.
Analizar y modelar cambios en los requerimientos y su impacto en el modelo de dominio.
Contenidos de la Asignatura que se abordarán en el PPA:
Modelado de Dominio.
Modelado del Comportamiento en el Análisis
Modelado de la Estructura en el Análisis
Modelado del Comportamiento en el Diseño
Modelado de la Estructura en el Diseño
Diseño Arquitectónico – Patrones Arquitectónicos
Mapeo de clases a BDR
Requerimientos de Cambio.
Consigna asociada al Proyecto Práctico de Aplicación:
1. Construya el modelo de dominio utilizando un diagrama de clases, especificando clases con sus atributos, métodos y relaciones con su multiplicidad y navegabilidad.
2. Identifique los alcances y reglas de negocio del dominio descripto. 3. Construya las realizaciones de casos de uso de análisis considerando los casos de uso descripto.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sFsYbgPW1DX_QN7FL0_iNM0a4Bi8lLLSG_MxtIJUMv7qKDKX7CYQiRUF881c0mygttg-HfbZQZfpZIiisiiSG0xZkkLGbYHJR5DplcBDRGG7lRzn71z-O7yDzMoYKHhWKsgm-=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a7O8oG2Rcn2dJrpqwOk_T73lrE-Ottr9LZqQAhNrBEuwRfkhQe1uEUtl7BgTz_NP5aMIWoUD44yMqpRVmJomCo3rrDklgI46qW6Zzta6l0waCT07fqwFsSo1rkaoJc9rypKfb=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 2
4. Construya la vista del diagrama de clases de análisis, incluyendo las clases que son requeridas para construir el diagrama de comunicación del caso de uso descripto. Incluir atributos y métodos de las clases, y navegabilidad y multiplicidad en todas las relaciones.
5. Mencione los patrones de asignación de responsabilidades utilizados, identificando los números de los mensajes que intervienen en la aplicación del patrón. Justifique la elección cada patrón.
6. Realizar el DTE de la clase Punto de Emisión, identificando estados, transiciones, métodos, casos de uso y condiciones de control.
7. Identificar los requerimientos no funcionales y analizar su significancia para la arquitectura. 8. Identificar los patrones arquitectónicos relevantes y construir una representación gráfica de los
mismos. 9. Construir las siguientes vistas arquitectónicas, definiendo para cada vista el punto de vista asociado:
a. Vista Arquitectónica de la funcionalidad. b. Vista Arquitectónica de Diseño: Componentes e Interfaces. c. Vista Arquitectónica del Despliegue: Nodos y subsistemas principales.
10. Realice la vista de estructura (diagrama de clases) y la vista dinámica (diagrama de secuencia) de los dos patrones de diseño que resuelvan las siguientes consideraciones. Especificar el comportamiento de cada uno de los métodos utilizados en la dinámica, mediante una descripción textual o pseudocódigo:
a. Implementar un mecanismo que permita recorrer los puntos de Emisión y a su vez sus programaciones. Modelar la dinámica para encontrar los puntos de emisión que tienen la tanda actualizada.
b. Resolver la forma en que el sistema notificará la modificación de una tanda publicitaria a los distintos puntos de emisión y a la pantalla de vista previa de una programación que posea esa tanda publicitaria. Modelar la dinámica que muestra la modificación sobre ambas pantallas (Punto de emisión y Vista Previa).
11. Mapear las clases a un modelo de datos relacional. 12. Enumerar los casos de uso que se deberán agregar y/o modificar para contemplar la nueva
funcionalidad detallada a continuación: Dado que la empresa desea cambiar la definición de la tarifa de los servicios, se deberá adecuar el sistema para que se pueda realizar el cálculo del costo de los servicios contratados. Las necesidades del negocio a cubrir son:
Definir el nivel de afluencia de público según la ubicación del punto de emisión (en base al promedio de cantidad de personas por hora)
Agregar Categorías al punto de emisión según la descripción de características de la pantalla física tales como dimensiones de la pantalla, definición y visibilidad.
La tarifa del servicio ahora es dependiente de ambas cosas mencionadas anteriormente.
Además, debe manejar 3 fechas de vencimientos con porcentajes de aumento diferenciado para cada uno, según una cantidad determinada de días desde la fecha de fin del periodo de reproducción.
13. Realizar los cambios correspondientes en el diagrama de dominio provisto.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m8a0Ex25OfqTBKnuF9nUE8Lnd_-zq5O_FasVUvR37dhTnVcc6X4uz68Ykicc_r9IjC-SBqGS0fDVyDkKg2GaIWt0bmXTJcnemmBnyaI187zlgYL5lzuzpohBCriNYq_5UzzyweA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PY3W4F58mUSA55gzCQ50lAZJ30LdEvmHNFqZ8yHThcborjHTa5sslfK8iMDsmerS-if4pmZg-gEMA8RT95-YuPIfhcbFt6oKBnD2OuvvTkOPW6Lg8VUASw2kh_B3Mg9PEK7X2Tw=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 3
Criterios de evaluación del EPA (Si aplica): Sobre los prácticos que la cátedra utilizará se evaluarán los siguientes aspectos, vinculados al cumplimiento de los objetivos de la asignatura:
1. Trabajo acorde a las consignas presentadas 2. Que resuelva correctamente el problema que el Ejercicio presenta y cumpla los objetivos definidos para éste 3. Consistencia de cada uno de los modelos que se van desarrollando 4. Aspecto formal de la presentación del práctico 5. Cumplimiento de la fecha acordada 6. Integración del grupo en la realización del trabajo
Descripción del Caso de Estudio Una empresa que opera en la ciudad de Córdoba se dedica a la comercialización de publicidad Multi-Punto. Es decir, posee en diferentes ubicaciones del país puntos de emisión, que son pantallas con conexión a internet que reproducen tandas publicitarias. Con el fin de simplificar el dominio planteado, asumimos que en una ubicación geográfica particular (local comercial, gimnasio, farmacia, etc.) solo puede haber un único punto de emisión. Se necesita conocer la dirección, razón social, nombre, teléfono de la persona de contacto y rubro asociado al lugar en donde se encuentra instalado el punto de emisión. La empresa necesita un software construido con tecnología web que permita la gestión de la programación y reproducción de las publicidades en los diferentes puntos de emisión y la gestión del cobro del servicio de publicación. Para la implementación de este software la empresa posee un sólo equipo (hardware) que será utilizado como servidor, con Ubuntu Linux Server 21.04 LTS open source. Los puntos de emisión deben tener un nombre, una descripción y un precio por segundo de publicidad. Los clientes que deseen publicar en los puntos de emisión de la empresa, deben contratar un servicio de publicación, donde se acuerda la cantidad de veces que será reproducida una publicidad durante un periodo definido de tiempo, para un punto de emisión determinado. El servicio contratado puede ser de tipo periódico o por única vez. Si el cliente acepta el precio del servicio, el administrador le asignará un usuario con el cual operar el sistema. Entre otras cosas el cliente como usuario, podrá subir sus publicidades. Las publicidades deben tener nombre, descripción, código autogenerado que la identifique, duración y la fecha de creación. Los formatos de publicidad permitidos son .flv (Flash Video), .AVI o .MPG. El administrador es el responsable de crear las tandas publicitarias, para lo cual agrupará las publicidades cargadas por los clientes según algún criterio (rubro, público dirigido, marca; y teniendo en cuenta el punto de emisión donde se reproducirá). En cada tanda publicitaria se debe indicar el orden de reproducción para cada publicidad. De esta manera las publicidades serán reproducidas secuencialmente según el orden indicado en la tanda publicitaria. Una vez creadas las tandas publicitarias, el administrador periódicamente se encargará de generar las programaciones de las tandas publicitarias para cada punto de emisión. En cada programación indica la fecha Inicio, fecha de fin, el conjunto de tandas publicitarias, el orden en que éstas se reproducirán, un nombre descriptivo de la programación y una fecha de creación. Cabe aclarar que las diferentes programaciones de un punto de emisión no pueden superponerse, es decir un punto de emisión en un momento de tiempo sólo tiene una programación vigente. Aun así, es posible generar varias programaciones para un mismo punto de emisión respetando esta restricción. Cada punto de emisión debe tener instalado un módulo que resuelva la forma de comunicarse con la aplicación central para descargar actualizaciones de las programaciones y otro módulo que se encargue de reproducirlas en la secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lLMY1dnFY_hdYeq4f8Y1U0vbLwnkNPp5dF29XhcfkzJTb0f50Eky8XIs6njkUs2fSMszCDMIqROI7aF8hqdDWzcw9YpVNugvklH2D2oAYwQVqn1TNbtkKgdKi5uOa6MnwZ-wU4A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ndr8LR7LO_El8UVXqYfQxpQkvI6DQ0YH3c7kQgNyPOZ3in0d-V4YPzcqlYPuOHKb6HK9Q2IjVZAuaeJH4tnLe74nnZKGgCXWmCvIaqeGug321k9p69cko8cN73Tuoz6fIBgTT=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 4
indicada por la programación asignada al punto de emisión. La conexión a internet que utilice el punto de emisión debe ser banda ancha de al menos 3Mbps. Una vez instalado el punto de emisión en el local donde se ubicará, se le da de alta en el sistema como habilitado para poder asignarle programaciones. A partir de esto, si el punto de emisión posee internet deberá conectarse al servidor y descargar las programaciones que debe emitir. Si por algún motivo no posee conexión a internet, deberá verificar el estado de esta cada 5 minutos. Una vez completa la descarga, el punto de emisión comenzará a reproducir secuencialmente las publicidades. Cada hora, al mismo tiempo que en pantalla del punto de emisión se reproducen las publicidades, el software del dispositivo debe sincronizarse con el servidor central para descargar actualizaciones en el caso de que existan. El momento de sincronización puede durar varios minutos. También puede ocurrir que, al intentar la sincronización, el punto de emisión no pueda conectarse al servidor por problemas en la conexión, en este caso mientras continúa reproduciendo la programación actual, verificará cada 5 minutos el estado de la conexión para poder iniciar la sincronización. Puede suceder que el punto de emisión sea apagado cuando termine el día o cuando el dueño del local lo decida. Cuando se encienda, deberá reproducir la última programación que tenía descargada. Es posible deshabilitar un punto de emisión durante un período de tiempo, por ejemplo, si está roto o si el local donde se ubica el punto de emisión entra en periodo vacacional. Mientras el punto de emisión se encuentre deshabilitado no se le podrá asignar programaciones. Una vez que se lo habilite, deberá conectarse para descargar la nueva programación, siempre y cuando el administrador le haya asignado una programación. Existen casos en los cuales se le debe dar la baja al punto de emisión y dejarlo en desuso, esto ocurre cuando el local donde está ubicado se cierra, decide quitar el punto de emisión, o no se rompe el dispositivo y no se puede reparar. Para que un cliente se asegure que sus publicidades se reproduzcan en los puntos de emisión es necesario generar un reporte que contenga la hora de inicio de reproducción, el nombre de la publicidad y el id del punto de emisión que la reprodujo, para esto, cada punto de emisión debe enviar al servidor una notificación al reproducir una publicidad. El servidor recibirá todas las notificaciones de cada punto de emisión y las ordenará según el orden de llegada y el punto de emisión. El formato del reporte tiene que ser Excel (xls o xlsx) o pdf. El sistema además debe gestionar los pagos de los clientes, que pueden ser abonados en efectivo o a través de los medios de pago permitidos por Cuenta Digital. Si el pago es en efectivo, el área de administración se encarga de generar el comprobante de pago y registrar el cobro. En los demás casos se utiliza el web service de CuentaDigital. Cuenta Digital es un sitio web que permite tercerizar las operaciones de cobro de servicios y productos ofreciendo múltiples medios de pagos a los clientes, automatizando el proceso de cobro. Para utilizar este servicio, es necesario contar con una interfaz que se pueda comunicar con el web service de cuenta digital, con el fin de permitir la generación de cupones de pago con un código de barras para utilizar en cualquiera de los medios permitidos por CuentaDigital y actualizar el estado de los pagos una vez que se registre el mismo en Cuenta Digital. El administrador del sistema debe poder consultar en cada momento si un servicio contratado está pendiente de pago, si ya se efectuó el pago o si se encuentra vencido. Además de poder visualizar los comprobantes de pago de los servicios contratados para cada cliente. El cliente tiene acceso a su estado de cuenta al igual que la administración. Cada vez que se consulte el estado de cuenta para un determinado período el sistema mostrará un listado con todos los cupones de pago por cliente. Cuando un cupón de pago se encuentra vencido se debe visualizar en color rojo para denotar el incumplimiento, si se efectuó el pago debe figurar en color verde, y si aún no ha vencido en color negro. Al ser un sistema web es necesario administrar los usuarios junto a sus permisos y mantener el control de la sesión, con un time-out de 10 minutos. El protocolo de transmisión de información a utilizar para la plataforma web será HTTP, y HTTPS según corresponda (en función de la sensibilidad de la información).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06relDWRdTWgKHs-QF1tUxayhkCm9_SkxAdacb4P6GMuOvcMjhcEHyRQ7UyKUPP8Ps7CzcCz0QJbgyI4iD6hw8QKdH1QOamn5-Md-cOBTt7LEg1S7vr_D2ywkv0fcKi0-qtoN5=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Bl2sM9GSQ3kSx6KD8AoI6E0kNM1Tkg2n1Ztmtph0_-haR1E6gt3VI6Vfc3rSGRySAjzkCzKvZ5iesubMRoCvOizGXlhTJ_Hp8hdNnUL5TUFk6AFSeAeMG_lAn-JWU7C40Syuu=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 5
Para evitar costos de licenciamiento el cliente solicita que los lenguajes utilizados para el desarrollo del software sean Open Source, y la base de datos que se utilizará para la persistencia debe ser MariaDB GPL 10.6.3, además debe ser compatible con Microsoft Edge 92, Mozilla Firefox 90 y Google Chrome 92. Ejemplo de una programación:
Punto de emisión: Gimnasio VitalFem
Programación Mujeres Otoño (19/04/16 al 20/05/16)
Glosario
Término Significado
Punto de Emisión
Monitor o pantalla LCD conectada a la red que puede reproducir videos e imágenes en un formato especificado; con una ubicación geográfica conocida.
Publicidad Un archivo digital multimedia (video o imagen animada), susceptible de ser publicado en un punto de emisión, que integra una tanda publicitaria.
Tanda Publicitaria
Agrupación arbitraria de publicidades ordenadas que pueden asignarse a una o varias programaciones.
Web service Servicio web: es una tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones. Distintas aplicaciones de software desarrolladas en lenguajes de programación diferentes, y ejecutadas sobre cualquier plataforma, pueden utilizar los servicios web para intercambiar datos en redes de ordenadores como Internet
01. Corto Ossira Otoño
02. Wanama Nueva Temporada Abril01. Tanda Ropa Femenina
01. Botas Cuero 100% argentino
02. Zapatos Fiesta
03. Publicidad carteras y cintos 50 % descuento.
02.Tanda Batistella
01. Makeup Dior tonalidades otoño 2013
02. Julieraque descuentos abril03.Tanda Perfumeria
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02geKmwEwTal30i09e3DY-f_EjRsUOEkd__qI_CLRmTGtgIM3yUC-zwzvlE-if3Mb1bcdcWldzFE5589gtoY54hw4flqIjN4Y0xQGe42i6Yp1W_-mUtuHRyRDZcHXKxidVSQIenA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3M2siQ4SDWyBmFz1MLL2giZ-6WUkiNA0DFFXz7v5XaPs8RMgibZYxbT_5jtDvheJmjmc4c9MR_6VoknvcK_PlfW8jfUJlwM8QyMZYy_3z62eHGlhbSFEApcAx0OVcchtCpxpuq=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 6
Solución Propuesta
Objetivo Gestionar la programación y reproducción de tandas publicitarias en diferentes puntos de emisión de Clientes, así como la gestión y cobro de servicios de publicación. Obtener información resultante de la gestión.
Alcances El sistema comprenderá el desarrollo de las siguientes áreas de funcionalidad:
❖ Administrar Clientes ❖ Administrar Usuarios y Permisos ❖ Administrar Puntos de Emisión ❖ Gestionar Programación por Punto de Emisión ❖ Gestionar Contenidos Multimedia ❖ Gestionar Pagos de los clientes ❖ Gestionar cuentas corrientes de los clientes ❖ Generar reportes relacionados con publicidades emitidas en los puntos de emisión ❖ Generar reportes del estado actual de los puntos de emisión
No contempla
❖ Gestión de la contratación de ubicaciones en Puntos de Emisión.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rmna-PeSWcr1B4tJuzRbGBDkWpz_vo9XqwoY085UzGDcbkJElKjtDz8uD1-7gJpO5yNj6kVGJnb1A9sZH-ZizkQd2zthLBo8235o3XJO0CuwPXCYpn_4BVSw9Kgr0zhaVG2xnrA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wU_Jyx11ijYFNAYdW_iMQRgzRhoIpPTAo0bgPgxcPdI-eFzl8UKWNjFjp1gjXjRrU2DwdqZOyeSNQLVZuzeWpG-Tps2g86XNvFM3cFhW5ux6WNLqGqPnF2lrim98RmAoairFjhw=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 7
Reglas de negocio
Reglas de Negocio
Nº Nombre Regla de Negocio – Descripción
1 Puntos de emisión únicos
En una ubicación geográfica particular (local comercial, gimnasio, farmacia, etc.) sólo puede haber un único punto de emisión.
2 Validación Periodo Programación
El período de programación no debe superponerse ni total ni parcialmente. Por ejemplo: si la programación tiene definida una fecha de inicio 10/03/2016 y una fecha de fin 20/03/2016, se superpone con el período: 13/03/2016 hasta 22/03/2016.
3 Tipos de servicio El servicio contratado puede ser de tipo periódico o por única vez.
4 Programación vigente Un punto de emisión en un momento de tiempo sólo tiene una programación vigente.
5 Punto de emisión deshabilitado
Mientras el punto de emisión se encuentre deshabilitado, no se le podrá asignar programaciones.
6 Formas de pago Las formas de pago pueden ser en efectivo o a través de los medios de pago permitidos por Cuenta Digital.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rUpNLqPIecu0kDvH1sjcqcI-r0hvbhoSDc2dKcmUsA6NYbEzpkbdMMonmMYFxGkgmOhQlcgdXkARVGqmW1zOvQKYW1ttfzHc_mWZgAxuBsdKhpWuzxjjjibpBgVO9t75qA3i0ng=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aIrDA4piH1JZcJgv4r490DeRRPuQ6NfBaKQfozHVf3Cwox8wBACXjsw7GJ8tgQiR0_XIhiX3htS7msUcdoTewIO1Dihk2jT_CTilacZu8YyZBaS1dubRGQDHgrtblD0THCSYCKA=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 8
Casos de Uso Esenciales
uc Casos de Uso Escenciales
1 Registrar Punto de Emisión
14 Generar Programación de
tandas publicitarias
42 Actualizar Programación
9 Cargar Publicidad
10 Registrar Tanda Publicitaria
22 Registrar Cliente 25 Generar Orden de
Pago en Efectivo
27 Registrar Cobro
28 Registrar Servicio de Publicación
40 Notificar Reproducción de
Publicidad
43 Reproducir Programación
Administrador
Cliente Punto de Emisión
51. Procesar Cobros efectuados a través de
cuenta digital
26 Generar Orden de Pago en Cuenta
Digital
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eZ7VCcKTB1eurqg-5OYsFOF-MbW-XqLzXvO0wNVBtgBRFJPLFnQ1tvqTf2J5eUbosH87BsGQgSSbHvu4k0jIZ0lPQN6dd9gY8H-LMpHZRv9CEbqt92kx1omt7EyuCHtdC0tOJzg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Mz_JH5ys_3INGFxHoTTY_0jWTIdqoxvTWKE8vHas43I_4ark20AYM1Qjb_OPeopl5Hmb8m30rAxjjIWu2GeZQy3IiJ9gBULRLVu0ofCXcx2cNu3GapY3_F1iwDl5rpgg-sVuw=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 9
Listado de CU
Nº CU Nombre del Caso de Uso Objetivo
1 Registrar punto de emisión. Registrar los datos de un punto de emisión y su ubicación.
2 Modificar punto de emisión. Modificar los datos de un punto de emisión.
3 Consultar punto de emisión. Visualizar los datos de un punto de emisión.
4 Registrar Baja de punto de emisión. Dar de baja un punto emisión que no tenga asignada una programación.
5 Registrar Ubicación. Registrar los datos de una ubicación en donde se instalará un punto de emisión con su localidad y provincia.
6 Modificar Ubicación. Modificar los datos permitidos de una ubicación.
7 Consultar Ubicación. Visualizar los datos de una ubicación.
8 Eliminar Ubicación. Eliminar una ubicación cuando no esté siendo referenciada desde un punto de emisión.
9 Cargar Publicidad. Cargar un archivo multimedia (video, foto, etc.).
10 Registrar Tanda Publicitaria. Registrar los datos de una tanda publicitaria y sus publicidades asociadas.
11 Actualizar Tanda Publicitaria. Modificar los datos permitidos de una tanda publicitaria y actualizar los Puntos de Emisión que la estén reproduciendo.
12 Consultar Tanda Publicitaria. Visualizar los datos de una tanda publicitaria.
13 Anular Tanda Publicitaria. Registrar la fecha de baja de una tanda publicitaria cuando no esté siendo utilizada en ninguna programación.
14 Generar Programación de Tandas Publicitarias.
Generar la programación de tandas publicitarias para un punto de emisión en base a los servicios contratados para un determinado periodo.
15 Modificar Programación de Tandas Publicitarias.
Modificar los datos permitidos de una programación.
16 Consultar Programación de Tandas Publicitarias.
Visualizar los datos de una programación.
17 Anular Programación de Tandas Publicitarias.
Anular una programación cuando no se encuentre asignada a un punto de emisión.
18 Registrar Estado. Registrar las características de un estado.
19 Modificar Estado. Modificar los datos permitidos de un estado.
20 Consultar Estado. Consultar información sobre uno o más estados registrados.
21 Eliminar Estado. Eliminar de un estado registrado.
22 Registrar Cliente. Registrar los datos de un cliente que podrá contratar un servicio de publicación.
23 Modificar Cliente. Modificar los datos permitidos de un cliente.
24 Consultar Cliente. Visualizar los datos de un cliente.
25 Generar Orden de Pago en Efectivo. Generar un ticket de pago para cobrarse en efectivo en la administración.
26 Generar Orden de Pago en CuentaDigital.
Generar un ticket de pago para ser cobrado por cualquiera de los medios permitidos por cuenta digital.
27 Registrar Cobro. Registrar el cobro de una Orden de Pago por un cliente por medio del pago directo en la empresa.
28 Registrar Servicio de Publicación. Registrar los datos de un servicio de publicación para un determinado cliente durante un periodo y para ciertos puntos de emisión.
29 Modificar Servicio de Publicación. Modificar los datos de un servicio.
30 Consultar Servicio de Publicación. Visualizar los datos de un servicio determinado.
31 Anular Servicio de Publicación. Anular un servicio de los existentes.
32 Iniciar Sesión. Habilitar el inicio de sesión de un usuario en el sistema, validando sus permisos.
33 Cerrar Sesión. Cerrar la sesión de un usuario en el sistema cuando el usuario así lo indique
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3j-ej2PJ9GfnmE6hZS_VboQ144S-hiPyVrQ-zXFhdthLVtW4P3qM3BqVRUaZeCggsGABImsOqvvyQrqdzSaP2UBj9oD8yDvXiC5Re19uD5jPvZ8xvn8iAOwqkNXcyWC919oIeUcg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Mo4x2LOukda2f4MGHCNpGhDB46vIr9kI8LDzGRDK7gAq5Zj6U1KCb2Ge5J0sioDETkJU_1fPw5RhYyOe7j-9Ar6zva6FGcGRhrnBvmoKm-V4EfIwVrMwhKWzjCS6sL6qBrEeZ=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 10
Nº CU Nombre del Caso de Uso Objetivo
34 Caducar Sesión. Cerrar la sesión de un usuario por el paso del tiempo con el sistema inactivo
35 Registrar Usuario. Registrar los datos de un usuario del sistema.
36 Modificar Usuario. Actualizar los datos de un usuario del sistema
37 Consultar Usuario. Visualizar los datos de un usuario del sistema
38 Eliminar Usuario. Eliminar los datos de un usuario del sistema
39 Actualizar Asignación de Permisos a Usuario.
Registrar la actualización de los permisos asignados a cada usuario
40 Notificar Reproducción de publicidad. Enviar al servidor principal una notificación al comenzar a reproducir una publicidad en un punto de emisión.
41 Controlar Disponibilidad de Punto de Emisión.
Verificar periódicamente si el punto de emisión se encuentra en reproducción y actualizar el estado actual del punto de emisión si no se encuentra disponible.
42 Actualizar Programación. Descargar una nueva programación desde un punto de emisión cuando exista una programación más actual.
43 Reproducir Programación. Reproducir las publicidades en el punto de emisión según el orden indicado en la programación actual descargada y el periodo de reproducción de esa programación.
44 Generar Reporte de Estado de Punto de Emisión.
Generar un reporte que indique el estado actual de diferentes puntos de emisión.
45 Generar Reporte de Estado de cuenta de un cliente.
Generar un listado de los pagos y su estado para un cliente determinado en un periodo específico de tiempo.
46 Generar Reporte de Reproducción de publicidades en punto de emisión.
Generar un listado de las notificaciones de reproducción hechas por los puntos de emisión para las publicidades de un determinado cliente.
47 Listar las publicidades cargadas por un cliente.
Generar un listado de todas las publicidades con sus datos que han sido cargadas en el sistema por un cliente en particular.
48 Deshabilitar Punto de Emisión. Establecer un punto de emisión como deshabilitado para la asignación de
programaciones.
49 Habilitar Punto de Emisión. Establecer un punto de emisión como habilitado para la asignación de programaciones.
50 Eliminar Cliente Eliminar los datos de un cliente que no tenga servicios vigentes.
51 Procesar Cobros efectuados a través de cuenta digital.
Registrar la información de los cobros que se realizaron a través de cuenta digital.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Rn-SbI14Ko7XGBYdpy1f0ORXMwI2Jrgs6EHAJJ22k_91K2KmwjZtksBVWNLoYyCULnp-frP-ICKpQqy8LMlgPO5b_xiRbDdg-oSkuuu6_q8hE315NYLZ66n35yvCULvwJPuZIrQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0txbU-EUiqnMt6dd-r8Rfqa2zpnGvxl7pcuVyfXSB_u8ybfVujnG_sKqU-DqS28_lVBer-Ug4suW3wDhW4x_OTRNSKpB04M8NRVqxFxGbKrLb_Qv9x9xosIy1CbFVaaQZkoN8f2w=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 11
Especificación de los Casos de Uso afectados al desarrollo del Ejercicio
Nombre del Caso de uso: Generar programación de tandas publicitarias
Nro. de Orden: 14
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Administrador de Programación (AP) Actor Secundario: No Aplica
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Generar la programación de tandas publicitarias para un punto de emisión en base a los servicios contratados para un determinado periodo.
Flujo Básico
1. AP: El caso de uso comienza cuando selecciona la opción “Generar Programación”.
2. Sistema: Busca y muestra todos los puntos de emisión que se encuentran habilitados y solicita se seleccione el punto de emisión para el cual se generará la programación.
3. AP: selecciona el punto de emisión para el cual desea generar una programación.
4. Sistema: Solicita se ingrese el período para el cual se quiere generar la programación
5. AP: Ingresa la fecha de inicio y la fecha de fin para la programación.
6. Sistema: valida que el punto de emisión no posea una programación asociada para el periodo ingresado y no existe. (Ver RN Validación Periodo Programación)
7. Sistema: Busca todos los servicios contratados para el punto de emisión seleccionado, cuyo período de reproducción coincida con el período ingresado y encuentra al menos uno. (ver observación 2) Por cada servicio contratado muestra el nombre, el código y la duración de la publicidad asociada al servicio, las fechas en que debería reproducirse, el tipo de servicio y el cliente asociado, y solicita se seleccionen las publicidades que se desean incluir en la programación.
8. AP: Selecciona las publicidades a incluir en la programación.
9. Sistema: Busca y muestra el nombre y descripción de todas las tandas que contengan las publicidades seleccionadas y no hayan sido dadas de baja y encuentra al menos una, por lo cual solicita se seleccionen las tandas a incluir en la programación y el orden en el cual se van a reproducir.
10. AP: Selecciona las tandas que desea incluir y el orden de reproducción de cada tanda.
11. Sistema: Solicita se ingrese el nombre de la programación.
12. AP: ingresa el nombre de la programación a crear.
13. Sistema: Solicita confirmar para generar la programación.
14. AP: Confirma la generación de la programación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tTz7495CPy7RsWPG2EA_-lAMvxe2TVwWxVTLtQRQ9XRCb8nv6OqiM_xNMbEecRyC8cq4vswYQoyRsWQM70xUwVQtoDOjxmUtaoFbIwTMC5vRcTltdpLPvrsUk8LxujijzpCmeoQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dJubQ_FDG1j3_mND3uSWNCxqHtYcwfoVilgdQ79Wb3yt0cMhI3ge5nUcsbKtkiVRhaNAR_dNT3ymKN0Zmn9hFAS1Bwr5m--1ijnbKuD09WBhq-TikO9ELOAZngMOW-4jr1Q1JmQ=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 12
15. Sistema: Genera la nueva programación para el punto de emisión seleccionado, con fecha de inicio y de fin igual al período ingresado, con fecha de creación igual a la fecha actual, con las tandas seleccionadas en el orden de reproducción indicado.
Flujos Alternativos
A1. Sistema: No encuentra puntos de emisión habilitados. A2. Sistema: No encuentra ningún servicio contratado cuyo período de reproducción coincida. A3. Sistema: El punto de emisión ya tiene una programación para el período ingresado. A4. Sistema: El punto de emisión no posee servicios contratados para el período ingresado. A5: Sistema: No existen tandas que contengan las publicidades seleccionadas. A6. AP: No confirma la operación. A7: AP: Cancela el caso de uso.
Observaciones: 1. El AP puede cancelar la operación en cualquier momento. 2. El periodo de reproducción del servicio concuerda con el periodo seleccionado o coincide al inicio o al final del mismo.
Nombre del Caso de uso: Actualizar tanda publicitaria Nro. de Orden: 11
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Administrador de Programación (AP) Actor Secundario: No Aplica
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Actualizar una tanda publicitaria incorporando o quitando detalles de tanda publicitaria.
Flujo Básico
1. AP: El caso de uso comienza cuando selecciona la opción “Actualizar Tanda publicitaria”.
2. Sistema: busca y lista por nombre todas las tandas publicitarias existentes que no hayan sido dadas de baja y permite se seleccione una para actualizarla.
3. AP: Selecciona la tanda publicitaria que desea actualizar.
4. Sistema: Muestra para la tanda publicitaria seleccionada el nombre, la descripción y lista todos sus detalles con cada publicidad y su número de orden, permitiendo agregar o eliminar detalles de publicidades.
5. AP: Selecciona la opción Agregar Publicidad.
6. Sistema: Solicita se ingrese el periodo dentro del cual se contrató la publicidad a incluir en la tanda publicitaria.
7. AP: Ingresa la fecha desde y la fecha hasta para buscar las publicidades.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Civzp6DQQ5MIAalh4WR_nIMVVkZxm_1X0DhOMbNkdmAWDjWnujE8yO2utiroCasTa71wAW8-PcaAmJF7w6kpifF6SNwRO0GJeStTghaIGNUIfYHaELtIoZOrn3aaT-8vT1yeZsA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Il5XgeJDAt_cC_RpeUUo4FM6IVDjlHwCSpD_MkynEFGE1KBbS-vfnimoRp0lisxuFH-cHDGpHzbNW-rSawiIO4zw16npnU-BJL4Yt2xP6aHO_h3B83TtU0SllyhTlh19KQqul6w=w188-h235-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 13
8. Sistema: Busca todos los servicios contratados cuyo período de reproducción coincida con el período ingresado y encuentra al menos uno. (ver Observación 2) Por cada servicio contratado busca todas las publicidades que fueron contratadas, mostrando el nombre, el código y la duración para cada publicidad. Además, muestra el cliente que contrató el servicio y solicita que se seleccione la/s publicidad/es que se desea incluir en la tanda publicitaria y el orden de cada publicidad en la tanda.
9. AP: Selecciona la/s publicidad/es a incluir en la tanda publicitaria y el orden.
10. Sistema: verifica que el/los orden/es ingresados no coincidan con el orden de algún detalle existente en la tanda publicitaria y no coincide.
11. Sistema: Solicita confirmación para las modificaciones de la tanda publicitaria.
12. AP: Confirma las modificaciones de la tanda publicitaria.
13. Sistema: Agrega el/los detalle/s de tanda publicitaria. Además busca para cada punto de emisión "habilitado" si la tanda publicitaria actual se encuentra en alguna programación vigente y se encuentra en una o varias programaciones vigentes, por lo cual notifica a las pantallas de los puntos de emisión y a la pantalla de vista previa web de la programación según corresponda, sobre la modificación de la tanda publicitaria. Fin del CU.
Flujos Alternativos
A1. Sistema: No encuentra ningún servicio contratado cuyo período de reproducción coincida. A2. Sistema: El orden ingresado coincide con el de una tanda publicitaria existente. A3. AP: Elimina alguna tanda publicitaria. A4. AP: No confirma la actualización de la tanda publicitaria. A5: Sistema: Ninguna programación vigente de un punto de emisión “habilitado” contiene la tanda. A6: AP: Cancela el caso de uso.
Observaciones: 1. El AP puede cancelar la operación en cualquier momento. 2. El periodo de reproducción del servicio concuerda con el periodo seleccionado o coincide al inicio o al final del mismo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qbHMg9A9KWgKPXjl0Zd2qPjnNTjEoLJrUUiGrJUkKy3rntNYbwswDVhBm23L1oewXUeNaBhzDSJ4PFDagBILFOUXQIm9-KRppXTXLYrKOPw7WT64x-LJJACFULNDDiu9EnRVNpg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nnqGg5dkQ0p1nkaimF6E4QunrVl-L-fEcEfxSocIi7_tEPzLycNLAkDNAqQxmwyUK_typ65uc1Gx2eJap1veGtEBspWa5RYP31IjhcmFiSNdwi09gDt7L417dIFD792pVkuIP=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Efelx60Gj6bxnUTyOH6MDeJskKrkrwLI097ctGgPt9kJgOqY6-zkpE4F7PiLxZxfoMI3sbHYl25qSvrfdU__9D8CkptS2wIhz81QpnGlC4zEbZF9ZKOmOxk8PEhC7huMIyPODAw=w1251-h1280-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 14
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RPhPurUwVmTwLHv2JXQBdy93xMwi04cu7R0L7z6qnpTp5xSeH6lXjOu4mhC1PBBh7lybdjSnI1MhljLHWKqjm4jrw1W88RB6gMn1hYNSv1Fq3i3s_rjJ3Wh_x14drJ0Jiaec3QA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uq9wSpE1E5SUn3qzV_GEijl6zDm_SlSt8ae5I4BS8HBZ0LNTg6rDyTQlF_n9RcpL5ulZYcMJQ5K13L9RkY5meF8Nd24t6lOp1RsVJMzoeB038INlMMwPo0RSNLCAoSAzR-Z1W9w=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vsHBroebSiDbebqAtZIvDsq8Unt80Nwbr-P9MbhmJ3hAhhAPHGAbrfNvv0saXjwJZH_7XaDYR11go2I9WOL0_V2JAQ8biYeq8CTG3ARAZlGxoJodX5Qc1Rd7I5MzcXW005QU7Eg=w1280-h1015-v0?authuser=0)
Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 15
Realización de Análisis del Caso de Uso 11: Actualizar Tanda Publicitaria
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Kt7qL_oLB3vy49k2ZVMBdptO-yz8-2BLg5-MUo0h-OJdNihsgaik9iPks40dBZUs6w5cP7CKUyEZMXT7BTgT3OkgWSOievc6wH_4sehVl32kNtZgKy-_ZEABxDBXLNbM6euORjQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21_aK_IVzffw6Z1u613XjA-iWrps82Idxy5PapBYJjWSY3ecsp2nWHeB3S76UUgJlQ1vTD1_pDgFGnJIOosTApHI3i1ZPPQD4j98NxJQjwuzmNfTI533JL5Qfmie78-DmuPF6e=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vzwum0-RYJMrL9ZU87Naa5AZEfFEIA2oWtYo-oREY04KBScrFeFs_EnrNKNgSjBtvaiBN2kKlH39_HumH1q8P9bvEudtRhQBRvTdQaSBTIGFfrXl_JSADPe7sGzUkM8rTNSfPAA=w1280-h675-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
PPA_PublicidadMultipunto.docx – Versión 1.19 Autor: Florencia Bene Página 16
Diagrama de comunicación del CU 11: Actualizar tanda publicitaria – Escenario en que sólo agrega publicidades a una Tanda y luego notifica las modificaciones realizadas a los interesados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sCTMynIbv7DIA6Zx0t2fnG2gEV_HfaUFFg7pPZv5FjjgCu_H86OKLyg9wJcS2d0VuY__KA5f3wqCtmhx3SaucO1qAgP6ASr5gfev2lHhuBH0A12fibrz4THrGbD8Z7qyLnwYyYg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aBNZu_9ONkUMSpe1OS8ex_c1JNthxQaB83TwOnjNUEABw41AYGBMkVadxQaWmSIxc96Vwwd97JqHoqZKmpSophEaIAN31VPAiCPk8dtLMXmvT3vgBNFh2-cdNvyIKUOUEZW09sQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oHSgRgJGZkj2HmGAhabG3UC9MlvSf1R541ldb_yUHv487hDDvG4-_TsD8Op0MA5wg0pLn44JXlIiUMHmIlhg6VjbYGWvzjqzY-MWsqRfkychycD7zSRZvTdNoeygsDQ88o78m=w1280-h1233-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Realización de Análisis – CU 14 Generar Programación de Tandas Publicitarias
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bhBWF5Tn8CYG-9qHoA90ZwcR4EmJ8kjjTFCgCPXajHNqPL-gI_ksezwXgErJOzR-Yt3xWBfsnYdwYJOk-Eb5sY8s77dup9N1jV1y0cgwAEvDML1JGkVJ1NEjOpsgw9O-DyYOJuA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TaMC9o6ZI-EvmuQvHOsWTc3XGnuHyDXPqgfiLS5ubO6rjLJLCl5FW1XA1IID-SIUnm0qHxxsmsizG8K3CoFFT_a30NzquCzTDWuEJrLwcJt2qSyRAHa_df6fz5V6__3BLRxKPMQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dp5yCLX8JTx7iruv1C8IxwgHTfojmpeULa5VltfueTMNiYZNLQqDkdg5ROy7HpAitkY18UTqtP7DKJuOHAz2rkJKUsWEzqdBdymJYWGr-GGRPdf9JyX2OLmxOxsNRi-RUFYgUAA=w1280-h580-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19 Autor: Florencia Bene Página 18
Diagrama de comunicación del CU 14: Generar Programación de Tandas Publicitarias– Escenario en que sólo agrega publicidades a una Tanda y luego notifica las modificaciones realizadas a los interesados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QKVhFJYft1u3tzTN3nGKRUuZUWvOVGQXSe2GD35oODr-vMFjljgqJWtcFMDDnG5DfscXO1e0l0crQ7lxZOByecbg7DG5AFzI1A18nhqXlg3n318n1Qc8gbnWjnvxkbAbgZlIKSg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1H0XTtxGjKyWpyE6QpIjgKpJNlwYyJtqJN0n4iAjCL2PNrbWTx2W_KhPanku2EdDzdrua-anMKL36F2RrzOhmJz9i-5VLtzkW1MXfiW-AM4JV8_tYschWGdbYTHgkLKeOQMCxJrQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Máquina de estados de la clase PuntoDeEmision
stm StateMachinePuntoEmisión
Habilitado
SinConexión EnDescarga
EnDesuso
Apagado Deshabilitado
EnReproducción
CU 11. Actualizar Tanda Publicitaria CU 42. Actualizar Programación
CU 40.Notificar Reproducción de publicidad /reproducirPublicidades()
CU 41. Controlar Disponibilidad de Punto de Emisión /apagar() [esta apagado]
CU 4. Registrar Baja Punto de Emisión /cerrarPuntoDeEmisión()
CU 49. Habilitar Punto de Emisión /habilitar()
CU 4.Registrar Punto de Emisión /cerrarPuntoDeEmisión()
CU 48 /deshabilitar()
CU 48.Deshabilitar Punto de Emisión /deshabilitar()
CU 1.RegistarPuntodeEmisión /new()
CU 48 Deshabilitar Punto de Emisión /deshabilitar()
CU 11 - CU 42 /descargarProgramación() [sinConexion]
CU 11 - CU 42 /descargarProgramación() [hay conexión]
CU 11 - CU 42 /descargarProgramación() [sinConexion]
CU 48. Deshabilitar Punto de Emisión /deshabilitar()
CU 11 - CU 42 /descargarProgramación() [Hay Conexión]
CU 40. Notificar Reproducción de publicidad /encender()
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZNW2zKNr56G_Oxn0184_Y_1nK7Q_AOaLs5f4GGxLKPfyklwD3FiyvbgTf79Mbj9l0mvbba1QBpNQG8LGMPb9pv49qsMUeIWsh2-PyXhgMokuMEaUrqg_iPJYDsflXSrI8BYYp=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1M5Qt1tsa5PsDEybCFzbjv_pL5QbmcYVQo87VYh0YfGvzjkGX0nHRa8Npy_N_h1yTgliI_XWUQ9uyTzdSkM-MmCT7asjXRwj9yIz8ohQHHGlZ64sR1IuEdEGKneKA_dXDqDgL95g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Máquina de estado del estado compuesto EnReproduccion
Aclaraciones de la máquina de estados:
Habilitado: es el estado cuando el punto de emisión ha sido creado y se le puede asignar una programación.
Habilitado a SinConexión: es cuando el punto de emisión no tiene programaciones para reproducir y no hay
conexión de internet. Por lo tanto no se va a poder descargar la programación.
SinConexión a EnDescarga: hay internet, entonces se puede descargar por primera vez la programación.
EnDescarga: (ocurre por primera vez, cuando el punto de emisión no tiene ninguna programación) se le
asigna una programación al punto de emisión y está descargando las publicidades a reproducir.
EnDescarga a EnReproducción: el punto de emisión tomas las publicidades y las reproduce, según lo indique
la programación que se descargó y notifica cada vez que inicia la reproducción de cada publicidad.
EnReproducción a EnReproducción: notifica que reproduce una publicidad y ya se encontraba en este estado.
EnReproducción a Apagado: cada día el punto de emisión a determinada hora se apaga para dejar de
reproducir. (ejemplo: cuando está el local cerrado, este estado depende del local.)
Apagado a Deshabilitado: cuando el punto de emisión se rompe o el local donde se encuentra de vacaciones,
es temporal este estado.
Deshabilitado a Habilitado: cuando se arregla el PE, o vuelve de vacaciones el local y se pone en habilitado
para asignarle una programación.
stm EnReproducción
EnSincronización
EnReproducciónSinConexión
CU 11. Actualizar Tanda Publicitaria CU 42. Actualizar Programación
CU 42 - CU 11 /descargarProgramación() [No hay conexión]
CU 42 - CU 11 /descargarProgramación() [Hay Conexón]
CU 42 - CU 11 /descargarProgramación() [SinConexión]
CU 42 - CU 11 /descargarProgramación() [Hay Conexión]
CU 42 - CU 11 /descargarProgramación() [Hay Conexión]
CU 42 - CU 11 /descargarProgramación() [SinConexion]
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CpM3vsbXNMX6zwhM5MPYRXLovBLiNNDWF94sR6tmg2sTUcbfnodosVGLGP0h6gP0paBsXGnJlXUBYw2w4GgDt5TRT-r1NbZ_KUpenVt7-yMo5D42_pdFg_ZkdSCmBz3jnTv2Y=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hcHdj6uyrP3Kj-UBCTq5F61MTu76R4bmFcYZ_Ry0KxO17tRmrAezNmkxwEul5zKcg7GMJhdbApunCge0OKWQylH4Y0Pr3UGHLdWLRSYimFYjYy_IQy_srCxJc3dDGtEXKKsOxrQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Apagado a EnReproducción: es cuando se prende el punto de emisión y reproduce la última programación
que tenía asignada. Ademas notifica cada vez que inicia la reproducción de cada publicidad
(Deshabilitado/ Apagado) a EnDesuso: cuando el punto de emisión se da de baja. Ejemplo: se cierra el local
donde estaba el punto de emisión, o se decide quitar la pantalla del punto de emisión. (este estado es
final)
Subestados de En reproducción:
Cada una hora el punto de emisión mientras reproduce la programación actual, se conecta con el servidor
para preguntar si hay una nueva programación asignada a sí mismo, si esto es así la descarga para luego
reproducirla. Si no, continúa con la reproducción actual.
EnSincronización: el punto de emisión se conecta con el servidor para preguntar si hay una nueva
programación asignada a sí mismo, si esto es así la descarga para luego reproducirla.
EnReproduccionSinConexión: cuando el punto de emisión no tiene conexión a internet, entonces no puede
bajar las nuevas programaciones.
Diferencia entre Apagado y Deshabilitado es que cuando está apagado al punto de emisión se le pueden
asignar programaciones.
Cuando esta deshabilitado no se puede seleccionar el punto de emisión para asignarle programaciones.
Análisis de los requerimientos no funcionales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DA5_shCXVMR1M0ndqQYYOS0W5AWfWV6POnEw-AMfgUsfKaOsyaDVC1hKIb8T7JV_mbg4hUjd80g9yTASg95syY3hOhfos9iGEckK5MPTb2BR2f9KLtva5-cZU32vAZqMhmddG=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gvmBOGJC075XlXDDW8Pa_uVdzu9owfncBhaQqoWp7cGKDISC61luQGdtSiZqk1ffGsIdK6vsQHkXtibaF--PcReeyIfF0ZypB-BxixMxnwj9Lgk4dh6rLnFv5TAhSBeZO4hoqXg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Nº Nombre Descripción Característica según ISO
25000
Sig. p/arq
Justificación
1 Navegador Web El sistema deberá ser compatible con Microsoft Edge 92, Mozilla Firefox 90 y Google Chrome 92.
Compatibilidad No El producto se programará de tal forma de evitar problemas de incompatibilidad de navegadores, con componentes básicos de html. Respecto a que sea web se incida en el RNF 9 las implicancias de esto en la arquitectura del producto.
2 Protocolo de transmisión
El protocolo de transmisión de información a utilizar para la plataforma web será HTTP y HTTPS.
Seguridad No No es significativo ya que se resuelve el creando un certificado de clave pública para el servidor web.
3 Motor de Base de datos
La base de datos que se utilizará para la persistencia debe ser MariaDB GPL 10.6.3.
Compatibilidad Si La base de datos a utilizar debe ser la definida.
4 Formatos de publicidad
Los formatos de publicidad permitida son .flv (Flash Video), .AVI o .MPG.
Compatibilidad Si Los videos se almacenarán en el mismo servidor Web y deberán ser accedidos a través de un esquema de nombrado. Cabe aclarar que este tipo de formato no es soportado por el motor de base de datos definido, por lo que se debe tener en cuenta esto ya que no es factible acceder a los archivos como si fueran un dato más en una tabla. En la base de datos deberán estar indexados los nombres de los archivos según el esquema de nombrado definido.
5 Conexión a
internet
La conexión a internet que posea el
punto de emisión debe ser banda ancha de al menos 3Mbps.
Requerimiento
de Producto Hardware/ Comunicación
No Se resuelve a través de la
contratación del servicio de banda ancha en cada punto de emisión.
6 Cierre de sesión Time-out de 10 minutos. Requerimiento de Producto Seguridad /Lógica
No Se resuelve configurando el time-out del sitio web.
7 Leguaje de Programación Open Source
Open Source Compatibilidad No La elección del lenguaje de programación está limitada por el RNF 9, que tendrá en cuenta este requerimiento, pero sin afectar decisiones arquitectónicas relevantes para el producto.
8 Sistema Operativo
La empresa posee un solo servidor web con Ubuntu Linux Server 21.04 LTS open source
Compatibilidad Si Sistema operativo que utilizará el servidor web, debemos tenerlo en cuenta para saber qué base de datos y que lenguaje de programación utilizar para que sean compatibles.
9 Producto web El producto de software a construir deberá funcionar en una plataforma web.
Compatibilidad Si Definición de un lenguaje web para la codificación del sistema. Considerando que debe dar soporte a n clientes web y un servidor web independiente
10 Colores de estados de la cuenta
Cuando un cupón de pago se encuentra vencido se debe visualizar en color rojo para denotar el incumplimiento, si se efectuó el pago debe figurar en color verde, y si aún no ha vencido en color negro.
Usabilidad No Se resuelve utilizando el estándar RGB ya que cualquier monitor actual soporta esta utilización de colores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j358zhDplt5eGN5KTZpfbWAfyMIkCExHPHb4rxf0NIYzW4sU4DS4IxEc6ygdEepF0FCvOlzOl0486d1g-lcG2-Gfv989mfIrJ8Cv55DZ7CLebQJXywcB9N6ImEDModsiwYoZ3=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BEFg2vjTxKJssQwj0a6y_hImA5mH6w9ViZzV0E066ek3V5jBTtsXuS3vIc99ESxJFKSXiUxFQImoJNvTR_zbcRiCK2f2sP4WSFJYhbwiDSkx7M7r11GlWbYlXD8bOVa-uqcZs=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
11 Exportación de reportes
Se debe permitir la exportación de los reportes a formato Excel (xls o xlsx) y pdf
Compatibilidad No Se utilizan convertidores provistos por el sistema operativo.
12 Conexión con el webservice de CuentaDigital
La generación de un talón de pago se hace a través de un webservice de CuentaDigital
Compatibilidad Si Se debe desarrollar un componente que se comunique con el web service para la generación de los talones de pago.
13 Disponibilidad El Punto de Emisión verificará cada 5 minutos el estado de la conexión
para poder iniciar la descarga de las publicidades.
Confiabilidad No Se debe configurar el periodo de actualización, pero no implica el
desarrollo de un componente adicional.
14 Conexión bidireccional entre los puntos de emisión y el servidor web
Debe existir comunicación bidireccional entre los puntos de emisión y el servidor web: -Desde el servidor web a los puntos de emisión para notificar las actualizaciones de programaciones. -Desde los puntos de emisión al servidor web para notificar respecto al inicio de la visualización de una tanda publicitaria.
Compatibilidad Si Se debe implementar una solución para asegurar que todos los puntos de emisión afectados a una programación se actualicen ante cambios en ésta. Para esto es factible resolverlo con un patrón arquitectónico Publish and Suscribe. Por otro lado, se debe resolver la forma en que todos los puntos de emisión notificarán al servidor web el inicio de una tanda publicitaria sin que se pierda ningún mensaje si existe mucho tráfico. Para esto se puede implementar un patrón Messaging.
15 Cobros a través de CuentaDigital
Cuenta Digital debe informar los cobros efectuados a través de este medio.
Compatibilidad Si Se debe tener en cuenta la generación de un módulo que se comunique con el web services de cuenta digital para recibir el estado de los cobros y actualizar los servicios correspondientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0o0stWezzrhhdiWWA7sXtM7w4cjVNKnsB6mo94G4vna4Clxx3m3JKFUt_TknwlzLmj9TVfY_9GH6udH2I9GoBt2IcXD9mRPgevUj6Bnp_3C289gwbkvryIam8X5KunWtOC9YSpbw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H-4qC6d7sBjYr60SwUSh6KskFuG1BDeV7Lw_FsuMgEe7-jLI1o21gW5CU18t5-16Gr4OY8pUtc35d40QQ0meWm0-YeewxmjWHSD2wEl_BpLRZRvfNzDZNaL8Bf_-FibGpQ1hk=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Estilos Arquitectónicos: Layered
Aplicación: Ordenamiento del software del sistema de Publicidad Multipunto, en capas independientes y
cohesivas
Capa de Presentación Web de Publicidad
Multipunto
Capa de Presentación de Escritorio para
Publicidad Multipunto
Capa de Servicios Web de Publicidad
Multipunto
Capa Lógica de Negocios de Publicidad Multipunto
Capa de Persistencia
Capa de Administración de Base de Datos de Publicidad Multipunto
N-Tier:
PE1 PE2 PEN
Cliente Web
Servidor Web
Servidor de Aplicaciones
Servidor de Bases de Datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aGsvKnHIt8sz4vidbLG-piFtoxU9gpppyOtgNWD28WRa62Iw3GUSSIwjB88tichBBYbnRHgDzehJYCnDVYg5MTCbVGH38CnAQlwwTJ8h7SJudOxpxjIIBL24dtZQfRUSW0yxe8Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16aAWxaAp4wL7LDaUNiuRXjAQALpArN7T-Fk5vbCltnC-ffSRlUOy0nnY3rFpG1mujHYFAUJHi8lv28K9MJ2fVCUYU_eU4rjACerlY9kpt-8NiVVBqq8TV2EkHY_Fuabyuf2m5Nw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3W2DQokeFVfK7Mk2XT4xvYVLLjNcJ-4_aD0wmO_CxBOcsAizhw43EXKYxisgYVeooX5_Hj43yQr2sf_mqFE5bJEERzHc_gE0tv9GVAeMO2ohtvNUNXojQctYo_oDe8UlCdXaV4nQ=w138-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qsOSz101FRxCYKurDD5Nl8kSzovwIhk2HYmJO7DVB4_1_llztw1DEY2cZXfDPCJo5qJeF--LMX7APgmC2VZ53DMfRZ7FZOBn2Z2u9CLKv-gXwkVOkWM3sScDBKwwPWahhwAuw=w178-h50-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38Pt--vl-xSbo4cstfVLFYjNQNetNMM3hl6h1hbi0S70MCaq_b6EXD__xA7K0htgVOpucEf4zg1X1t8u_NC-Wx-bgIsg6M0rvHnOfntiB91M8nuVFNABjh-KH3pZ9HGsI40hGPKA=w213-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tV80WiAbXlgJTqH6hz9WNbUOT0Kxc4XDkIg1lgvWvUWihANcTNWrfj1jHu1muDsNYJIuNpPt42DkUBkgIBWntCOhPzrAB2O3MN1tQibFpj0tsCopDC-IT05chLFxcAQCexrgI=w131-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bzFyoNv2YbYP-xgCD6P_6-draKeNe5OyKGoH425tJUcr4Oy_WQspStrVXRyNEpGITmM7BnuDRdO1gLxMJbTSYWFVrwlC8LGu2-HhMpXFDy_9z0Tqv8ZjiuO83X6lySib_PKZKgw=w108-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TS_-sqpCUCvi1VXq17-8BvcAzWOsEusZMdtVvCutKeDqzQYR7G0aP__VwFPk-tDe5vnZREpJqjutNMcp27YutU34y6SJaZGTI8rzK3roYowEKtUKsEKAXGSzqRmyWzWxF1f45ew=w228-h44-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qfbsOOG78o2p6web0Pf0wNm9VF92niGH3U1Y_f7dEh8Sv7eSte5xpG_l-a4Myg5nWhlFsE9N7-9PHKN-BstrYrDHjAK1B13BEn9hhY_-8XySm0Htr-YArxDLTxkWw1PwPM4DzgA=w131-h44-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0taayiY4CdHfmnFrwWUlUCgXXRiHyU43fM-0ek5--r0IrFpyoyrBENV0v5_rCGbsZeko8ZsbMaXaD8kDi7s52VxcjOHYXXBM6UIb_lssB7U8b38qmfKRGjpQujUvQ0wuBLCQoLug=w131-h39-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09yOIcUbuiNJ7E6J9cGY8yj9MhPx3UCCgIRa6_T9CCNFheQmWvnzt5MXWwjgs-N9YA35v_aII18nb6mCYNyRTpITlBRJedHwc7gB9aoBLNZWcWwtDbGpJGs1dih1Z7og_ft3ux=w245-h90-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3V_xse0uCVNDXglpjvbRLvyAqxmEvwarudIeLb7RLTqHe1rIBpPuXclY4QYp9bNBHpi-9-ahoIlJcin5tGVq_8TO9FHrfPgwmkrVKB_jV12p5IM_ZtLBoChhGZfHWs74Z7ebgNBA=w244-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uadrDSTGfDaFUrZE_rCv4_dYTxtNNoQFQ9kkv2YollqJyB759ATL9jErWiwuVtdM6LcyKo-mklBZ5XQNqoIu5Zf-2uk9EO6XalWvv8nZLucsBLqwVf9PZH6FCI0KH8jdGWPjxjw=w172-h47-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h62pZY_JzpdxkrPswuBhBg8_ezBvDqtNY_c3_XhHvJd4ac-KRpwFlr7WwUgcEbPrf4T1SK1KaYcvC3etR-G8qLop9Obp6OvRrRhiVYj7vrPC70fovFc2dXsZVeu--6g_0a3qOQw=w173-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CW8KWTbKQ8zHH96jEdUNrEZDhf-hbGC-38ziI4enDeFxIYpJygQuTSnTxWdcjR0SVRIcPHLVdFaFtZa-RnAhKL5L6MaKFU9LW5O9M3mkDgOm-ECnzRi2j027TV4qJMsktHESIPg=w173-h79-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lEWyaB5-QCiDmWq9hjMx9uM2FATLL70VLuIkxZb95WNrfQ0qg_IFJ5GgRw5GN10vJbX2qwcLKuFJbwB4WNfjvSeqMIJ-KPaF1elxqGq6UIC_Rc1ag_4Smjmv2XBLBzIJsR2n2kg=w296-h133-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Messaging: los puntos de emisión envían notificaciones al servidor cada vez que comienza la reproducción
de una publicidad. Estos datos se colocan en una cola antes de ingresar al servidor (porque todos los
puntos de emisión envían las notificaciones simultáneamente). Entonces el servidor luego saca esa información
para hacer un reporte de reproducciones de publicidades por cada punto de emisión.
Publish and Suscribe: para que el punto de emisión se descargue las nuevas programaciones.
Enviar
Notificación
Cola de
notificaciones
Verificar Notificaciones
pendientes
PE1
Cola Servidor PE2
PEN
Realizar Reporte de reproducciones de
publicidades
Subsistema de
Programación TÓPICO
Punto de
Emisión
Punto de
Emisión Actualizaciones en
la programación
de Publicidades
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qkDvkcYc8zHN8pte14L8i40xRt_H89zDjtNjXGqrRibE6UtTByCz7aKCzecD7N6Bpbabn6L51eYWlC2WFwV970e6yuBCSs3i731YbL48P_gbYhNtkSmnbJPjR2zWFWZoP_d-ncw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0h7NXIJKxptPERnYuqA3bOGWWt9EvvzUSilbqayIkhQXBFics0EP3GhPmI0qYkHE0xYCVMRleUmzRQk2aVe4PVejWMlXsk2421rq5nWeCHj9PWPaBRBLFPptQyad9MGi5JkBPTwg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14skRTbOI9w5dy7xIQdmC5Cu9kVpJRBongVm5otqMKSo8TElVFCsuSfv4Wa2NzfTQckCr7ytopFWSR-U_eYLlabfvYcZRwkyiuTauu3BOXP6_ZkLpNID0_w1j7-yl8PJqif7zV=w1280-h1103-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Vistas Arquitectónicas
Vista Arquitectónica de la funcionalidad:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W2sk46b9ZrDWGqeHOH38-QlipLauPgV9sS93S2sk609shYwwtqrDtPY0eEeIaXmlES9wkmF71kFC4iUWs9RMy-qSBjQMebMZ69R-I8lXzl8CdHgMSCikj-6MKo5pDCbcgYcQd=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gqMMuIVaNN1OoLv-BVfXHowkJJaOKPOEtUrHK2sCZJ-opcIcZzPDFD1y9AG5DQPl85GfQQlvu7hFtljZk_23hniI-1XwyHiT6_WmZdxw1dEqbUDwInoGe3eB89et7-VIMzHMP=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Justificación de los CU
Casos de uso Justificación
1 Registrar punto de emisión, 2 Modificar punto de emisión, 3 Dar de baja punto de emisión, 4 Consultar emisión
ABMC complejo para resolver aspectos de acceso a base de datos, interfaz de usuario, algoritmos de programación básicos. Abarca la resolución del RNF 9 Producto web, 3 Motor de Base de datos, 8 Sistema Operativo.
9 Cargar publicidad Al momento de cargar las publicidades, la forma de resguardo del archivo será parte de lo que se deba resolver según la base de datos y la ubicación definida en el servidor web, por lo que este CU se ve afectado por la manera de trabajar en el RNF 4 Formatos de Publicidad.
14 Generar programación de tandas publicitarias
Transacción más compleja donde se resuelven aspectos vinculados a las transacciones del sistema como ser: registro de un log, acceso a base datos, algoritmos de programación. Además, debe resolver la forma en que se notifica a los diferentes puntos de emisión respecto a la existencia de una nueva programación. Esto puede resolverse con el patrón arquitectónico Publish and sucribe y está vinculado al RNF 14 Conexión bidireccional entre los puntos de emisión y el servidor web.
26 Generar Orden de Pago en CuentaDigital
Resuelve el RNF significativo para la arquitectura 12 Conexión con el webservice de CuentaDigital.
34 Caducar sesión Caso de uso donde se resuelve la problemática del manejo de sesión en un sistema web y se trata de un proceso automático. Debe resolver el momento de ejecución, asegurar una buena performance, minimizar acceso a base de datos y afectación a usuarios que estén utilizando la aplicación.
40 Notificar Reproducción de publicidad
Resuelve parte del RNF significativo para la arquitectura 14 Conexión bidireccional entre los puntos de emisión y el servidor web, en lo que refiere a la comunicación de los puntos de emisión al servidor web sin pérdida de mensajes. Se implementa el patrón Messaging.
44 Generar Reporte de Estado de Punto de Emisión
Funcionalidad vinculada a la resolución de la forma de generación de reportes, por ejemplo, formatos de archivo permitidos, librerías a utilizar, disposición de datos, algoritmos de búsqueda y forma de acceso a la base de datos.
43 Reproducir Programación
Funcionalidad que se resuelve en el Punto de Emisión, por lo que debe definirse particularmente cómo se comunica con el servidor web, es decir resolver el RNF 14 Conexión bidireccional entre los puntos de emisión y el servidor web, así como tener en cuenta cuestiones de espacio y performance del punto de emisión.
42 Actualizar Programación
Casos de uso que resuelve parte del RNF 14 Conexión bidireccional entre los puntos de emisión y el servidor web, en lo que respecta al código del punto de emisión y cómo recibe la información de las programaciones para luego visualizarlas.
51. Procesar Cobros efectuados a través de Cuenta digital
Caso de uso resuelve la interfaz con cuenta digital para recibir y procesar cada actualización de estado del cobro de servicios a través de cuenta digital. Resuelve el RNF 15.Cobros a través de CuentaDigital
32. Iniciar sesión Caso de uso donde se resuelve la problemática del inicio de sesión y validación de permisos de acceso para los usuarios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38kiH0OANQbkxslaFlq9olnBDiIKXDooH_u6FavDDEWR_YjH9lcfbzSCzyPSnff85CrBKSBukelI-KpUQeVxfOHFKHG3CYmt7VCevuJuXgyb2uHixHxr7DuHX_hJ3uZO8kI3s5hA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bwcRHk18EDQflB7B6jnjj0O0SHY4eHH47sqslG9Nm9P6AcFoXSNEZnqVNnWj5-PTe15mIw9gnVyc4EluvHfsq6Yzbcq-h7X5IB6fkyZ2VmfGb1NK2FMPpzqUz-ljh1iO44Ocr2g=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j5ZKRWumA_2tNmzZduIPWNQd7KdxvYIFW3J6EBUM1NvqLTk5JgS3wrRsOFH-gzLGbSFBQM9yzZQCkDTH2u4msE_7y2WgtGJiTWYrzwQbhEmZtJujWbGTz5QAWyRK9UcAL705iOg=w1280-h1122-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Vista Arquitectónica de Diseño: Subsistemas e Interfaces
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21BhT3s-6FDHtydZ03WtkJXLQ6hYeRw7BESOAsIVkOOlYlnhFNYhVJ6aTuulU8iI4wWFsf5Xf34pQOMYmKSMHX39ydA44kJiL0to_Pjq_UmB3QK_oZ4fUxgjPj-xx-VCoRQvEN=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DgGTg-dJe9WA8UIgsUJ8RLDk9jT0lFdrcsR-twDT6gg_c5MngCZawfuaEVub55FWm9YCMhYwYMmP57bm2JhjJKCyj1U8pVRFzKvpZKfdaTZD-ccNIaYIq4cs_kdpoXrKT5bp1JQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21GVVQPm08EBOqn4a76ijdfU6VH4y1JRaNjiRjhgF8I4hIR-hWLOGaiWG7SaMzruB-jp2TiUWIxjTWCBhjrpAKA7YyxeFgOSUukxlEucQwQBFHHS8q3K5EgX2FkDcpWeKm2i-O=w1280-h1074-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Vista de Despliegue: Distribución de software en hardware
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fcyh0IvUusLd2UzBOHbNmmtPOwQATh85VEvoXy9LBkUwcEMc6LyIrFA5MY4Aw8qRXDA_O6l4bi57WJjxMkLJM-1ivCa8HUfcBJ4IuzyKVKOJ920cpzQ40dMEEJScrcwnouPYi=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_n1BNb4IMpN0anWt9Ccw3Nig1UIpHUfo6Gwc6mpiBaFbPySMNawn12P3WUByJhGtqXP7Ksyp5GGNVmicL3ldq__Vk1VebsJxXPIJ5Zf5piruaGYr3IATndfQ_t4JpmV9hacntqA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19 Autor: Florencia Bene Página 30
Patrones de Diseño
a. Implementar un mecanismo que permita recorrer los puntos de Emisión y a su vez sus programaciones. Modelar la dinámica para encontrar los puntos de emisión que tienen la tanda actualizada.
ITERADOR (Es un iterador anidado que recorre los puntos de emisión y a su vez las programaciones filtrando ambos objetos)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rJrhJgDriyDYIsBcCFUlCrQokQ844kfOpo3yDcJ13CVvYstY137CG6aracZ8H4ECt73R1hFhF1Hs_gC1tv8-C9vSlHGBRfkFeJbppZNpla3-nx9rojRKAcYpU368i9SHBSiQbGg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XXGUgpJFMkB8AL-4dEUeEbMfPmijwWne_gzQ4GV-VsHdNV1z-YgQVk7XU7GKWth9kjNcK2MOgHzo1neD-ZQvWp8ikxWnE9d6g28_r0__wLBFhpAtVxcV95rpXh-SyBIoMKoVS=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eBLDu1sdOihjqEuv8OiR3xjzUDgRnfk1SdG3D0VnB-NPcjEbq4VsnNipn05XocHppiyDuTMpKLlwWcccR207v4AQsYCruDv3fJ3DqvKneioVbUaZSd-N9sqk8CDeVTNaB99tJ=w1280-h652-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19 Autor: Florencia Bene Página 31
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07Ea9bIody8UZns0F6SbFP6xUgYoXqLM-CmsIx9PSe8mCtao0puVUOyBia7ANP4Z6IuhHSdO6ddWEZmy56LOs6G4PeIdGewSTWeko3AbtzlCAONa4uOz2GZrMTw170VAheec7S=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26ORPy0PPnRyXyaXT1N621__MDkITtxrDQzBkRIXIIcau-MFCWmSKvjXI9-DXvRDZoGJgQ7IakLpQxXhNVtBqHQufceqsJPWXtkJkbd3vwTzuHo-mUg5073it4b153OmkHIdz7ug=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ttXDkH2YgUT3KsJ_XoWXodZxMW-SJJom_wH8nyUZpisNusKc--B69dE3uEYgV4_mOlbY1sKBPXISDp6NuXjcsqbuR1UdfzegXlEuBeM20j5WyszvjwMQZ7ABrLldKDOboQst_ug=w1273-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yLOOYaDDjIl_P3po6HT8HJqX23djozH0jBe-xySWIn1oXtL7i8PTZc3iX17Yg1zkxerWMk3mqAeAVyUrtO1tpYy-3TEdtiQH1k6E19rioA9yh3K_rdQbYSUx6IFajHnOWlie0=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26NlCn1_JQ2GS9UUaCfRCk1gbYqra1QgyJbfKNbmtIYm0c48EmTXYMcgtBubnLEYKPphk7d4kFpfSktoGjPO9egsGB9SnpT8YFRZfLlNbbtGzlGawPva5Voi3EQaoLTYc1ZPlPUA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
b. Resolver la forma en que el sistema notificará la modificación de una tanda publicitaria a los distintos puntos de emisión y a la pantalla de vista previa de una programación que posea esa tanda publicitaria. Modelar la dinámica que muestra la modificación sobre ambas pantallas (Punto de emisión y Vista Previa)
OBSERVER Estructura
class Observer
«interface» ISujeto
- observadores: IObservadorTanda[]
+ notificar() : void + suscribir(observador :IObservadorTanda) : void + quitar(observador :IObservadorTanda) : void
«interface» IObservadorTanda
+ actualizarProgramacionConTanda(nroTanda :int, nombre :String, nroPublicidad :int, publicidad :String) : void
«control» GestorTandasPublicitarias
- seleccionadaTanda: TandaPublicitaria - seleccionada: Publicidad - servicios: ServiciosContratados[] - fechaDesde - fechaHasta - nroOrden - puntos: PuntosEmision[]
+ notificar() : void + suscribir(observador :IObservadorTanda) : void + quitar(observador :IObservadorTanda) : void + conocerPEConTandaActualizada(fechaActual :Date, tandaActualizada :TandaPublicitaria) : PuntoDeEmision[] + notificarActualizacionTanda() : void + tomarPublicidades() : void
«boundary» PantallaPuntoEmision
- nombrePuntoEmisión: String
+ actualizarProgramacionConTanda(nroTanda :int, nombre :String, nroPublicidad :int, publicidad :String) : void + esTuPuntoEmision(punto :PuntoDeEmisión) : boolean + actualizarTanda(nroTanda :int, nroPublicidad :int, publicidad :String) : void
«boundary» PantallaVistaPreviaProgramacion
- grillaTandas: String[][]
+ mostrarActualizacion(publicidad :String) + actualizarProgramacionConTanda(nroTanda :int, nombreTanda :String, nroPublicidad :int, publicidad :String)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uoFrxhA1CsQgMW-i9M6yopAtXS3gZlikx3-UGSLXXJd8CR7-2bPHfJRxScON71Z4N0IVRygCIakCBWGyC02N-pst2WYKAUQ3WX6QJ7P5OF6Doc2zpALuhq47wyFzlKW8L0xVhTA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2B6nkA9ckpQBUKY2DNS2Pdx_IW27_LeNNDZy7zswQhI2MKSXaZEhePAvmm_IIdkuZZQ_rrrFJkLHQGhv8tDXih4Iqx7Tty8WUPrAOlWy4kWKFPv1y02vLXloMljEhb8hW3saNUDg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DXhgsOObApjRgTEIKzhjfRt2C_ZGRI37E9E_5PSAA1aEwvkL3g8_GkBpwjLahevkXmZgxtT5uIdEk4WEjVSYGm8uG1GzVZ_V0feRuguIzJRTmGH5ZDPtqwpCyo7xb6hnfEmnT=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Dinámica
Nota: El sujeto también puede ser la Tanda Publicitaria ya que es la entidad que cambia. El gestor en este caso le debería pasar los observadores que deben suscribirse a la Tanda Publicitaria
sd Observer
:GestorTandasPublicitarias :PantallaVistaPreviaProgramacion:PantallaPuntoEmision
Método 44 a 52
Método 43
Método 52
loop Por cada PantallaPE
[Mientras Existan PantallasPE]
Clase GestorTandasPublicitarias observadores IObservadorTanda[];
Public suscribir(observador:IObservador) void{ observadores.add(observador) }
Public suscribir(observador:IObservador) void{ observadores.delete(observador) }
Public notificar() void { for(int i=0; i > observadores.size(); i++) { observadores[i].actualizarProgramacionConTanda(nroTanda: int, nombre: String, nroPublicidad: int, publicidad: String);} }
Clase PantallaPuntoEmisión
Public void actualizarProgramacionConTanda(nroTanda: int, nombre: String, nroPublicidad: int, publicidad: String) { this.actualizarTanda(nroTanda:int, nroPublicidad: int, publicidad: String) } ----------------------------------------------------------------------------------------------------------------------------------------------------------Clase PantallaVistaPreviaProgramación grillaTandas String[][]; { Public void actualizarProgramacionConTanda(nroTanda: int, nombre: String, nroPublicidad: int, publicidad: String) grillaTanda[nroTanda][nroPublicidad].mostrarActualizacion(publicidad);}
Se suscribe la única pantalla de Vista Previa Programacion
conocerPuntosEmisionConTandaModificada()
esTuPuntoEmision(punto :PuntoDeEmisión) :boolean
suscribir(observador :IObservadorTanda)
suscribir(observador :IObservadorTanda)
notificarActualizacionTanda()
notificar()
*actualizarProgramacionConTanda(nroTanda :int, nombre :String, nroPublicidad :int, publicidad :String)
actualizarTanda(nroTanda :int, nroPublicidad :int, publicidad :String)
actualizarProgramacionConTanda(nroTanda :int, nombreTanda :String, nroPublicidad :int, publicidad :String)
mostrarActualizacion(publicidad :String)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1D2zgJwxxWa3MN0uRa0XdkAN9VkWxJlg0AIMh4_RwTRwHNe8bFZxCwbmc9om0u6UTmyVtL9Jk-W404aIBXNG5_iUQTseRNfhMcdDDhrc3uTskRSmEIuiq_SLsLqvBr4whB_5fC=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Bmc6yYMxKirqzfLTcUw2Jcb7RaOo7lOCuyZdy7ta62Vx59C-yOsGyb1Wj61bXinNjT2mm_hbW7ftCD1hTT8ee_SkZWCPkk3RkGYWQB0n5ewZ1bXOb57jThmHY1azo0TJewBsD=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sl05TDSprdAh4U44rAyV5_IMHJ4PaZ5b4UNFibGU5MFIwRhu5OssH_X6n6ThBDhy5_XSxS9PeTQwyfJxhhATfl6llSEmfSbOCAZhb35A8fuwJqDTm7t3MHRXujk1NczTjz7GL0A=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-wW7vSbO2DTPucSCke51HgwMn10J2rp2qLn6gxBAa7dxQ0_B20qodQn4fKC-vpSL1xibH3Y2jkLSI45sp3VFwc7iOWLMD01qrmO_dat_VM4bLl2PCHtZ9WnHJ4S3tf_KpEbNDBg=w1280-h917-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Publicidad Multipunto
Nombre del Documento – Versión 1.19
Cambio de requerimiento:
Cu que se agregan: Registrar Nivel de Afluencia Modificar Nivel de Afluencia Consultar Nivel de Afluencia Eliminar Nivel de Afluencia Registrar Categoría Modificar Categoría Consultar Categoría Eliminar Categoría Registrar Tarifa de Servicios Modificar Tarifa de Servicios. Consultar Tarifas de Servicios. Dar de baja Tarifas de Servicios. Registrar Vencimiento Modificar Vencimiento Consultar Vencimiento Eliminar Vencimiento.
Cu que se modifican: Registrar Servicio de Publicación. Modificar Servicio de Publicación. Consultar Servicio de Publicación Anular Servicio de Publicación. Registrar Ubicación Modificar Ubicación Consultar Ubicación Eliminar Ubicación Registrar Punto de Emisión Modificar Punto de Emisión Consultar Punto de Emisión Registrar Baja Punto de Emisión Generar Cupón de Pago.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sPZafHXSUOhkZqYbhsA3bbd4S3Q8ZsIYhQEUaT31_pcHITLwb7Hqp39jCMNzLbt05PNcPg_510vZ_KudJRicH8zDhgOJxYQ7tQpQZiWqLz18ToTmJkUaxcgPK6gTBJtQHijpamw=w839-h1187-v0?authuser=0)
