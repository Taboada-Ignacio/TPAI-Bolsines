# PPA_Peaje V1-27.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento presenta el 
Proyecto Práctico de Aplicación (PPA)
 para la asignatura de Diseño de Sistemas de Información en la 
Universidad Tecnológica Nacional
, centrado en el desarrollo de un sistema integral para la 
gestión automatizada de peajes
. El texto funciona como una guía académica detallada que establece tanto los 
objetivos pedagógicos
 —como la aplicación de patrones GRASP y diseño arquitectónico— como los requerimientos funcionales y reglas de negocio de un caso de estudio real. A través de su estructura, se definen los procesos críticos de 
cobro mediante débito automático
, la administración de cuentas de clientes vinculadas a obleas electrónicas y la implementación de un 
esquema de tarifas y descuentos
 progresivos. Finalmente, la fuente detalla aspectos técnicos de la solución, incluyendo el manejo de la 
infraestructura de servidores redundantes
, la integración con administradoras de tarjetas de crédito y la gestión operativa de empleados y turnos de atención.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wtwBZDGLD9IvrmlDTjuDLBG7CBBqpG7WwHSi7yLjBass3NNgkmf75fwVQ878we3z5oeQE7aWu-PpLmwxVw_HKPxAD0-tR1H7mN5F3Xngo7nxMiiW4wnxGWfeEORFWQTExv-MciQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ftJUKpG2Jd-0m3FlFOP_7CEWw5UY5kBiiiOBCwSmunXWZ06VSZTxoVa6iyM0Bw9_Lj1tPSSNEIon75PaId7R4_rf4B9_sND2DOjN25Bo2ZM2nJ2CQbB8VYBU7dY5G43gBNk-1=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 1

## Proyecto Práctico de Aplicación

Nombre del Proyecto Práctico de Aplicación: Peaje
Objetivo del Proyecto Práctico de Aplicación (PPA): El Proyecto Práctico de Aplicación denominado Peaje, tiene el propósito de desarrollar la especificación de un producto de software que dará soporte a los procesos de negocio principales de una empresa concesionada para el cobro de peajes en ciertas rutas. Se desarrollan vistas de los modelos de Requerimientos, Análisis, Diseño, e Implementación. Es importante destacar que las vistas que se desarrollan no están completas, ni son exhaustivas, se toma de cada uno de los modelos, elementos referenciales con la intención de reflejar ciertos aspectos destacables del producto de software que se está construyendo.
Objetivos de la Asignatura con respecto al PPA: El Proyecto Práctico de Aplicación, tiene el propósito de reflejar cada una de las actividades de modelado requeridas para el desarrollo y construcción de un producto de software en función del proceso, las técnicas y las herramientas que se enseñan en la Materia Diseño de Sistemas. Este PPA representa una simplificación de un caso real, en el cual los estudiantes podrán desarrollar las habilidades para aplicar los conocimientos adquiridos.
Contenidos de la Asignatura que se abordarán en el PPA:
 Modelo de Requerimientos como punto de partida para el modelado de la solución.  Modelado del Comportamiento en el Análisis  Patrones de Principios generales para asignar responsabilidades (GRASP).  Modelado de la Estructura en el Análisis  Diseño Arquitectónico – Patrones Arquitectónicos  Diseño de la Estructura del software aplicando patrones de diseño.  Diseño del Comportamiento del Software en función de la estructura rediseñada con los patrones de diseño.  Mapeo de estructuras de clases a bases de datos relacionales – Patrones de Persistencia.  Diseño de interacción humano-máquina  Patrones de diseño  Mapeo del Diseño aplicando patrones, a la implementación  Incorporar pedidos de cambio al Modelo de Requerimientos.
Consigna asociada al Proyecto Práctico de Aplicación: En el siguiente PPA se desarrolla:
1. Modelo de Requerimientos: a. Objetivo, alcances y reglas de negocio. b. Modelo de Casos de Uso del Sistema de Información (Listado de Casos de Uso, Diagramas de casos
de uso y descripción de un caso de uso a trazo medio). c. Modelo de Dominio aplicando los patrones de Coad. d. Especificación de Requerimientos No Funcionales.
2. Modelo de Análisis:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv274RCmFxZ2RkiNQGo6g7f0-6BEjPwURcvAVHj0bS0QsZI62hf-5TB2Y1B8xs0vlDXXdYxZIijSCuqO0wWo6uNlU6yiCe8x3SS2Bw-kgSOHAnn1YeLnX3MDQqNBbgmNEtBCB9tREg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yuMW7F444dqTgReYOayi3BTw8L2mNrb9BDvMazdlvQgOtbwsKjhWBI10EK4RdNKOjIwTIZL8LVYcy0Y_mLyq153wzFc-aiVPWz0EyIdcf8L4CiD4B5rc86Jbx65cx9ja3S7Mf=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fOLFiKpLwtRyTEqSwQH31XOd480-Ybxeol8pJc0_SXOQ5BYQERxIKvdVuzpCLRDyrE8MEDLlwPG03cbEQ-jhkfzNpD9mD61rPWFfSunpFSqsAOWrRbLeu42cN9clEIHLpfFUo=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 2
a. Realice el diagrama de comunicación del flujo descripto en el caso de uso 4 Registrar cobros por débito automático, aplicando los patrones GRASP para análisis.
b. Realizar la máquina de estado de la clase Cuenta, especificando métodos, casos de uso y condiciones de control.
c. Realice el diagrama de clases de análisis incluyendo las clases que son requeridas para dar soporte consistente a los dos modelos construidos en los puntos anteriores. Incluir atributos y métodos de las clases, y navegabilidad y multiplicidad en todas las relaciones.
3. Modelo de Diseño: a. Diseño Arquitectónico
i. Identificación y aplicación de Patrones Arquitectónicos Significativos. ii. Realización de vistas arquitectónicas
1. Construir la vista arquitectónica de la funcionalidad. Justificar la elección de los casos de uso que incluye en la vista.
2. Construir la vista arquitectónica del diseño. Modelar el diagrama de componentes para visualizar los subsistemas, componentes e interfaces.
3. Construir la vista arquitectónica del despliegue – Nodos y componentes. b. Rediseño aplicando parones de diseño
i. Rediseñar la estructura, utilizando el patrón de diseño que permita resolver de una manera flexible el comportamiento de la cuenta, de acuerdo con como varía según la situación en la que se encuentre.
1. Construir la vista dinámica, utilizando un diagrama de secuencia, del escenario en el que una cuenta pasa a estar no cobrada.
2. Describir con pseudocódigo, código o descripción textual los métodos utilizados en la implementación de la solución pedida.
ii. Rediseñar la estructura, utilizando el patrón de diseño que presente una solución que permita receptar los lotes de cobros de las distintas tarjetas de crédito, asegurando que será posible interpretar la información sin importar si el formato de los lotes de cobro es diferente para cada administradora de tarjeta de créditos con la que trabaja el peaje.
Servicio de Visa: enviarLoteDeCobros() - recibe una fecha de inicio y fin de liquidación con formato mm/dd/aaaa y devuelve una matriz de objects con los nombres y pagos de los clientes. En la posición 0 los nombres y en la 1 los montos. Servicio de MasterCard: enviarCobros() – no recibe parámetros ya que siempre devuelve los pagos de la última liquidación y devuelve un vector de String con los nombres y pagos de los clientes. Servicio de Amex: enviarCobrosProcesados() – recibe por parámetro un booleano para indicar si se quiere la última liquidación y devuelve un vector de objects con los nombres y pagos de los clientes concatenados.
1. Construir la vista dinámica, utilizando un diagrama de secuencia, del escenario en el que una cuenta pasa a estar no cobrada, parla tarjeta Visa.
2. Describir con pseudocódigo, código o descripción textual los métodos utilizados en la implementación de la solución pedida.
4. Solicitud de cambio a requerimientos funcionales Se solicita incluir los siguientes pedidos de cambio:
En la página web en la que se pueden consultar los tarifas y descuentos, también se debe permitir a los clientes consultar el gasto correspondiente al período de liquidación actual y a períodos de liquidación anteriores. Para ello se debe asignar un usuario a cada cliente, con los permisos correspondientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv144XcLWDicEr0eToJVoSVX2zhtg1lcDV5qHMRUmZ61UJLidch2oMpJWXodKJSHGI-6kzZefVNjqwa56UliOJ-z05SUd1RWb2IDHdpYGgsGmkpkbXK64ecN2UbihU0P-ihUQ8FTeA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LQ5oSVz7xNnc8sxNWuXZn5PvS4xUKIUZRrOdQfkIurnueZUR5arjgNh1x-jL_OW7h7Fc3eXFBo_UPqINQHEszbR-snPIjqYosnRt_sbqdNIh2DshEw7p5jNps-lbi8jOQidQqmQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H15emjOinqvTwSPNzC_6cXXknw_yMakAtSmash9r7r25SDEYYHr-Q3DIXTnV-hPP5KPbMzM-dDMbeLyHfERfK-Z42QKEQjEnMKqLdLST1kCvPfaa9XO8ZvSplJgBiqVxHX9C2=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 3
El sistema debe permitir la gestión de suplencias de cajeros en casillas de peajes. Cuando un cajero suplente inicie su sesión, el sistema debe validar que no se trata del empleado asignado al turno, por lo que debe solicitarle indicar si el motivo es una suplencia. En caso afirmativo registra el empleado suplente, el turno asignado al empleado suplido, y la fecha y hora de inicio de suplencia. Al cerrar la sesión registra como fecha de fin de suplencia la fecha de cierre de la sesión. Posteriormente, el Responsable de Recursos Humanos deberá indicar el motivo de suplencia a todas las suplencias realizadas, señalando también si es una suplencia con o sin descuento de sueldo para el empleado suplido. El cajero podrá consultar sus propias suplencias.
Para ello deberá:
a. Enumerar los casos de uso que se deberán agregar y/o modificar. b. Realizar los cambios correspondientes en la estructura de dominio a partir del diagrama de clases
provisto. 5. Realice el diseño de la interfaz gráfica propuesta para la interacción del caso de uso 15 Consultar tarifas
por categoría y ruta.
6. Construya el modelo de datos derivado de las clases contenidas en el modelo de dominio, utilizando un Diagrama de Entidad Relación (DER).
Criterios de evaluación del PPA (Si aplica): n/a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JvEzjOQjDhRV93Y9hm5z4aANEnK0JKCrIdUx_P7UqzKrJBscB13QrGNQ_B5tLIRadYShbbo-LtV__RJcHXD_882gqlMscAEricr_i4UjKW4u31AXssOR1jSR8o9xYoSmeZqOFnw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Q_dTBuAW7OadC4poG0zXqZxjFdzJ5lUhLN-mKI6haGY7KFaJO-SbvIy18I-0Ulc6VqtGClhsgGuIiMxH1dnUzUu4B5xtn8TW3Nz_S8JXr5I1LCjHgvMtugzDXG3VcG4Jp9zkMEQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2e33aZl3vcep_G8ssxrV3oIfmFw1W19HtOslvZlz2zRPMCV-hKXCjXdDRm5OkhXhGL8EXE2EX9UshcNmkFCx_Jf0vZpKNE1zGx5m7BqGi9ZWed6LztJcBLdk4RfFAuFCTEOne6ng=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 4
Glosario:
Sistema de nombres de dominio (DNS, por sus siglas en inglés, Domain Name System) es un sistema de
nomenclatura jerárquico para dispositivos conectados a redes como Internet. Este sistema asocia direcciones ip con nombres de dominios. Su función más importante es "traducir" estos nombres con el propósito de poder localizar y direccionar distintos equipos en Internet, para el caso particular mencionado en este enunciado.
Web service (servicio web): es una tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones. Distintas aplicaciones de software desarrolladas en lenguajes de programación diferentes, y ejecutadas sobre cualquier plataforma, pueden utilizar los servicios web para intercambiar datos en redes de computadoras como Internet.
ATC: Administradora de Tarjeta de Crédito.
HTTPS: Hypertext Transfer Protocol Secure (en español: Protocolo seguro de transferencia de hipertexto), más conocido por sus siglas HTTPS, es un protocolo de aplicación basado en el protocolo HTTP, destinado a la transferencia segura de datos de Hipertexto, es decir, es la versión segura de HTTP.
Descripción del Dominio asociado al Proyecto Práctico de Aplicación Una empresa de mantenimiento de caminos, concesionada para cobrar el peaje en algunas rutas que les fueron asignadas; ha decidido incorporar un sistema que permita el cobro automático de peaje a los automovilistas que circulen por las rutas que la empresa mantiene. El funcionamiento esperado del sistema consiste en que se instale en las casillas de peaje un dispositivo electrónico inalámbrico que detecte la pasada de un vehículo, le permita el acceso y le cobre el monto correspondiente. Para esto el vehículo debe tener pegado en el parabrisas una oblea asociada a la cuenta de un cliente, dueño del vehículo. De esta forma el sistema comenzará a contarle cada pasada a ser cobrada con tarjeta de crédito, únicamente mediante el servicio de débito automático. Un cliente puede contar con varios vehículos, pero cada uno de ellos será asociado a una cuenta diferente. El dispositivo inalámbrico se conecta vía Wifi a una PC asociada a una casilla de peaje. En esta PC se instala un componente que permite la interpretación de la oblea leída por el dispositivo inalámbrico. El dispositivo no cuenta con ningún software más que su driver (controlador) que permite la lectura de la oblea. El cobro de cada pasada está definido en base a una tarifa básica, y según cómo está categorizado el vehículo a pasar y la ruta por la que está pasando el vehículo, como se muestra en el cuadro tarifario continuación. Por ejemplo: para los automóviles de la ruta E53 la tarifa es $20, mientras que para una motocicleta la tarifa es $12,5. En la aplicación se debe mostrar una imagen representativa de cada categoría (debe ser de extensión png y no ocupar más de 300 mb), y resalta la categoría base por cada ruta (categoría sobre la que se definen el resto de las tarifas):
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3l1p-wmxhdQ95THIv4Qvu0EfzqafCWexnA58GO7M102d5zsvOS6taj08IOwhZez5jMaFVgh5tutEhB3-YygmI0l20jSWR3t1b-OSU2wZd1yBapgXkgTcjaftJk2aTjVGAK0znY=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QlgC3_1nwsl953iQ9ujISrOidjgH1PR4DAhIhvUlN8rE2OTzmud1z8I4iwhLUXuPoQC60RV2gW7Xo6xyrPCcuhuWiFqTFIR4dWwESNP09mtT8HJmcVQ5rAyPsPuLDDwdPmKqw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nvYh-7z7xzZfLbsydudgO-PShxHv43vc_p2pwLPw_q5fyll6Th1jH_jyUNFDBohUAHRUSv8AqytcarT8a-86BShm0_lr6W-WmFJ3Kkr1FiK9vWB30SJiYiVdcIGN3OFBpPTp5=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MqDtGN2PLB2C9lFFyZ77rq_YxykYHi5yqZWGeaGkQulIkbrFDfTS_UeW1Z6T_McBgSf8i2oOqFAjaIFTHxpeN0gAZLDv9n3L6M40ZoocRPpMNdQfPn0a1lG85VOJzVQNb15aHzA=w171-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PsrZ06X5liSIn4zM5D9HpbV_i3Lk8NWGLMS7Wb5117SWhA5F60Lni-raED7168CQ6y6RxfWz8zYL2IQWOq3OxFxVuIGnLHY47OXM6HRMsvADn1U1sWSJPndYZYwS_ZzUwmoudIA=w732-h317-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 5
Las tarifas tienen un período de vigencia definido por la tarifa base, y es el mismo para todas las categorías. Para promover la utilización del servicio de registro automático de pasadas se ha dispuesto un sistema de promociones en función de la cantidad de pasadas en un período de cobro mensual:
Hasta 9 pasadas se realiza un 10% de descuento por pasada
Desde la pasada 10 a la 20 se realiza un 20% de descuento por pasada (a partir de la pasada 10)
Desde las 21 pasadas, se realiza un 30% de descuento por pasada (a partir de la pasada 21) Toda la gestión de casillas, categorías, rutas, tarifas y descuentos debe ser web, con excepción del componente de las PCs asociadas a cada casilla de peaje, como se explicó anteriormente. Para ello se debe publicar vía DNS la aplicación, para que tenga salida a Internet, es decir, salida fuera del dominio de la empresa de peaje. Para asegurar la confidencialidad de la información se trabaja con el protocolo https, que encripta los paquetes que viajan desde cada casilla de peaje hacia un servidor central de bases de datos. La empresa cuenta con servidores centralizados para todas las casillas de peaje de todas las rutas. Se compró una base de datos Oracle 12c. También se cuenta con un servidor de aplicaciones y un servidor web. Debido a que la empresa de peaje no deja de trabajar en ningún momento, todos los servidores deben ser redundantes (es decir, cada servidor está duplicado), para asegurar el funcionamiento de la aplicación 24 hs. y en horas y fechas pico. Para las fechas pico debe poder soportar la pasada de vehículos en simultáneo por las 10 casillas de cada una de las rutas donde se encuentra un peaje de la empresa (son 9 rutas en total). Además, debe trabajar eficientemente con este tráfico considerando que en un minuto pueden pasar hasta 10 vehículos. Se considera que el sistema es eficiente si procesa una pasada en hasta 4 segundos. El servicio de registro automático de pasadas funciona de la siguiente manera: Cada cierto período de tiempo se generan las obleas y se les asigna un número único. Cuando una persona solicita el servicio, se lo registra como cliente, se registra el vehículo y se asocia al vehículo una cuenta. También se vincula a la cuenta una de las obleas disponibles, es decir que no ha sido asignada. El cliente debe presentar una tarjeta de crédito, que debe ser la misma para todas las cuentas que posea, a la que se le debitará mensualmente el costo de todas las pasadas realizadas con un vehículo vinculado a una cuenta, en un período, en función de lo explicado anteriormente. El cliente puede solicitar un cambio de tarjeta de crédito asociada a todas las cuentas que tiene, cuando así lo requiera, por ejemplo, por extravío, robo o vencimiento de la misma. Una vez que se le asignó una cuenta y oblea al cliente, se pega dicha oblea en el parabrisas de su vehículo. Debido que a veces la validación de datos de la tarjeta de crédito del cliente se demora, puede ocurrir que se le cree la cuenta y luego sea dada de baja, porque exista algún inconveniente con su tarjeta de crédito. Si el cliente tuviera más de una cuenta, todas las cuentas son dadas de baja.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DgCsWoO3mTf8ybqlvnbCMMKR3l2wE7Lh3btqiOImy9va3sYKQV6TecVJvL1UScCka-SA5j-NVpfebqJnv29Ltln0lFAo6pUI8I5FNWXLsVwTn1qk4KW5t4xFXQ92jQtS_GbA06g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HVwX9fOu44zRm44E95CIxtvXRIWuITYEY4PgiibApEIExCSS5Xxk4yvwgLYCZB9YKJON-Ks2sX4MDgeC95iWNF1ZouUfQfhQdF1MrdAu0SIjuwUNgS4mw9V3xK5kwg5jKTKtXzw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ra-jSbvnns0KH8bReiQz2BXDI1jygHW-zxJr5cZfIKsaNJ45vJUfMxK7vmdLWuDELQja-oM4DeANBJ6neJMu-uA5c2k3dV38zS0CxOjhtvOpHuzdhPj23DV4BTa_D9RqZQ3U5hQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-ZIw4VQuF-p0xfF6n9F1FBW4Rx_WJUokgdj09crtEBsi7aeRuqkdYzzA3WRqVHjumdOdxiiv3a2zgVWDPaMXvPOoYHCVFXMXTYNe3zqDhjAs8yQfmFKAMvJRxYnz74EYteXQE=w58-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13Yn80nXJfjn6d8YEcf0CgscKuUkiXygOBV99XQb-hfW0ni5fY8wsiJFXQ4E5YX0FQWNXE8avn3efzJ5-hYA0Vt0iiG7XOvA39P6mNgeCTDsatfYlLKOl6-BpuXxo01OlhR1Rccw=w58-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LmD0VKK7AEWJMKBJ51HQNM1GCyjB-dwfc25wMkh29r-hBqagz_l82FNkddQmM09h9bip0RSbAf_zuwOqmiMWHkFBuhsadc_il4vIJmnnSdIXzD5C6NML38mny5vqoYGZgzKFC7Q=w58-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c6S3bkYaFtqHrbXFrSF6e0RQLUWQ-Dp0wMB4WFdnPPYLNoUsRCY0bN8TgnN-yPRFez6hDk7bjC4720aAUk9Nwdcaepgxhvk2m_3bggSxGBZa4nj5iAWfqR_eiCChUxK2hvPKzOw=w58-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oZ__tPtDotmTKBek0SpMWYq1LsWvBaNhSNgzr27Hu7twk-8xp8OBKwGMWLS6lqva7O_jM4HqZBYvWDRM0AeZIlyHC6Mrdf8HwetYpvX3Y32kBM37WjTYnOhogz271k3bXIBLQ=w58-h46-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2u4Elmv4DMk7YUFws6mOfl2zJEdf9no1HmiFd6R4XsIrQuUqTdfWNclnoQTsutE_GW8LvPHjIHKZGnJAJp1RrIT25QxUBLJMl8q7FuB_Om5rpF9L9PnszR4wl0n6AE7fg0pdyUhQ=w40-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JyuOBiuyceOnqRkGZpqDr0ChNBmiw2MLuJ5j1w68qLclVJnMl1UN1mnQPZ31dbstUaV72Pl6TRMs_XW3My5bG9rt1zxfcJDVxCVDzc28ZJGBVAyR9NwTs8WgFi9mov2wgNSGq=w181-h65-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1heSU_-zi8DLPcxOiycppS6SAmLzn0lhbAXfBkqcbC2tVH4_u9-Wa7hylgpvfgHH0P32iJaAyq68uEP94t-xoI9p8Y4w9lU8RYDtUeXBxMJWHVwZMqydR8hTKiQhzIrY1oZr-c=w41-h47-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Knp_rHC8xaTVxp0ebcltDdNbkB4cNbzzGoKsKg17tMQ12svepS02lRDgykgeIR2Q-o2hM-5s1xeYRCSd-qAEJVq-apLz4Vy7j5YmCjOLiBgDpRRlq1WOIlY7Xb-UG-36kbT4P=w61-h35-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 6
El cliente puede perder la oblea del peaje, en tal caso puede solicitar una nueva y asociarla a la misma cuenta, inhabilitándose la oblea previamente otorgada. Una vez que la cuenta está en uso se comienzan a contabilizar los viajes para registrar el descuento correspondiente. El sistema deberá tener actualizada la situación respecto a cuántas pasadas lleva el vehículo. Cuando el vehículo pasa por la casilla de peaje, el dispositivo electrónico inalámbrico instalado del lado del conductor, muestra en su visor el monto a debitar, asociando un color en función del descuento aplicable a cada vehículo en particular, según el siguiente criterio:
Si el monto a debitar es por menos de 10 pasadas el visor muestra la información en rojo.
Si el monto a debitar es por 10 a 20 pasadas el visor muestra la información en azul.
Si el monto a debitar es por más de 20 pasadas el visor muestra la información en verde. Cuando llega el cierre del período de liquidación, se reinicia la situación de la cuenta para comenzar a contar nuevamente la cantidad de pasadas y determinar así el estado de la cuenta asociado al descuento que corresponde aplicar. Luego del cierre del período, se debe informar a las diferentes administradoras de tarjeta de crédito (ATC), utilizando una comunicación vía archivo ftp, cuál es el monto por cobrar con débito automático a cada cliente. Para esto se generará un proceso de ejecución automática que asocie las pasadas de los clientes al período a liquidar, y las resetee, realizando el cálculo de deuda de los clientes por tarjeta de crédito y generando los archivos correspondientes. Está previsto que este proceso no demore más de 5 horas procesando un promedio de 20 pasadas por cliente, con una gestión de 3000 clientes promedio por cada una de las rutas en donde se cuenta con casillas de peaje. Este procesamiento debe aprovechar la existencia de los dos servidores de aplicaciones para distribuir la carga. Periódicamente cada tarjeta de crédito debe enviar el conjunto de cobros por débito automático, formando un lote de cobros a informar mediante un web service. La administradora de una tarjeta de crédito siempre enviará el lote de cobros correspondientes al período del mes anterior al actual (período vigente). En el momento en que una administradora de tarjeta de crédito envía el lote de cobros, un web service del sistema de peaje obtendrá la información y se validará que el monto de cada cobro coincida con el monto adeudado, registrándose el cobro correspondiente. Si faltara algún cobro de un cliente, la cuenta se considera no cobrada, por lo que el servicio queda suspendido para ese cliente hasta que regularice la situación, indicando el motivo por el que la cuenta pasa a estar no cobrada (débito no ingresado, cliente no identificado, u otro motivo). Ejemplo de un cliente con una de sus cuentas no cobradas:
Cuenta Pasada Tarifa Subtotal Cuenta
Tarjeta Galicia Visa
23.456 23.456
1 25 $ 50 Nro: 1111 4567 1234 8888
2 25 Cobro por Debito: $87,5
89.341 89.341 89.341
1 12,5 $ 37.5
2 12,5 Las 3 cuentas asociadas a la
3 12,5 Debito no ingresado Tarjeta:1111 4567 1234 8888
12.234 1 25 $25
Si se identifica que una cuenta de un cliente se encuentra más de dos veces no cobrada, se da de baja la cuenta. Se ha requerido que el sistema genere un reporte que informe para cada cliente, cuánto tiempo pasa una cuenta no cobrada y cuántas veces ha estado en esta situación. Si la cuenta está no cobrada y luego del procesamiento del lote de cobros, se determina que se imputó todo el monto correspondiente, la cuenta vuelve a estar en uso, debiendo mantener la cantidad de pasadas registradas desde el último cierre del período de liquidación y por consecuencia su estado asociado y descuento aplicable. Cabe aclarar que un cliente podrá solicitar la baja del servicio en cualquier momento, indicando el motivo (por ej: tarjeta de crédito no habilitada, mudanza de cliente, inconformidad con servicio, servicio impago).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17p-sVMvf_01vEUQ4zD7gwZIVqi_yP-IVY8GydRwaE5nodjqWtNla6k-LTixwUhqd9lXCdJeWK99L-jQO7jNuyDYbkamBwqTbjJwmIr-a3zbx4GvfZQv9Fv6w1vav83Qm_lxI3gw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GvHoUNhD0WPycdYfJRjXVJwoB1dus_LKBW1SnxuyAxr7EG5Q6V27MMayPpZNuLvPloOy45oCHJeC5aYApaMCpHe3cnkGtrzVyqlBqOU1X0H2kOjr8e-L0FEC9mqB6pH2vsz-dFA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2al3-yq2GxKCuKA09EDhAxroQQ7BHXVqpwDJYcSTcbHVJbvR3E95Ojf4Q44dZMRF2lMQtexfkmmruURAh1aSOj6TMX-8nUqPDi8K3NmAFn2mX-I88Spfr0IMuLcNXw2_ju94YqYg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 7
Se ha solicitado contar con información de la cuenta, manteniendo registro del histórico de situaciones por los que va pasando la cuenta de un cliente particular a lo largo del tiempo. Existe también la forma de cobro en efectivo. Para esto un automovilista debe acercarse a una casilla de peaje que no tenga el sistema de cobro automático. En la casilla un empleado del peaje le recibirá el dinero y le entregará el vuelto si correspondiera. En este caso se entrega un ticket al automovilista únicamente indicando la categoría del vehículo y ruta, el monto abonado (sin descuento) y el empleado que realizó el cobro. No se registran los datos del cliente ni del vehículo. Existen casillas especiales donde se debe abonar el monto exacto. Esto implica que no se le entregará vuelto al automovilista, en pos de agilizar el movimiento de vehículos. Para establecer cuál es el empleado de peaje que recibe un pago, existen definidos turnos de atención. Cuando un empleado comienza su turno de trabajo se deberá loguear en la aplicación, para ser identificado en cada cobro que realice. El sistema contará con un módulo de gestión de usuarios y perfiles para toda la aplicación. Para que los usuarios de peaje puedan consultar las tarifas y descuentos, se publicará una página web con toda esta información. Se han solicitado un ranking de clientes con mayor cantidad de pasadas, y un reporte que detalle la situación de cada cuenta.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FDj3WLd-kG5GrKBFLon-Oy9gtfVxxAYEE-7HOrzpy_entvIviX0tbTiRCPHnqL24Wkf2Q-I9AVOmUIC7EKVDY3J0ZGVit60D1sRN7jsRjP1K_q3aHRKtfB8lEj-vRGdolbrtELg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M8wKD2VNPFb7X1ZolnE9fsG7OE4xiiAX2a3h8akx5R9dHYUVm-JmwYKYILNrVHaUao-0yQYSMyj42qNYX5OHQ5mV1lW7B9-am0XPOajtI-bA0Q-K4czItVvea5GyuM4lcmvnTJQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IDiGV-jFNx7mLi6dfczoWtdJoy7UNdab2n4_01lJEUl8NkvECl04UhV59tFKSPt4Hm_rCo2tZHkFP1I4yoGfHlrWPxfV75JmpEa2QxVO3KMfBLc7h17ZHZG4i5E9oLDeGLJiFgA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 8
Solución Propuesta
Propósito del Sistema: Objetivo: gestionar pasadas de usuarios de un peaje y el cobro correspondiente según la definición de tarifas y las formas de pago vigentes, generando información resultante de la gestión. Alcance: El sistema deberá contemplar los siguientes alcances:
 Administración de usuarios y roles.  Administración de tarifas en función de categorías de vehículos y rutas.  Administración de clientes y de sus vehículos.  Administración de casillas de peaje.  Gestión de pasadas de vehículos por las casillas el peaje.  Gestión del cobro en efectivo y con tarjeta de crédito.  Administración de empleados y turnos de atención.  Generación de reportes resultantes de la gestión de peaje.
No Contempla:
 Gestión de pagos a empleados  Gestión de reparación de rutas realizadas por la empresa de peaje
Reglas de Negocios Nro. Nombre Descripción
1) Oblea con cobro por débito automático
Para que un cliente puede utilizar el servicio de oblea, debe tenerla pegada en el parabrisas del vehículo. Esta oblea debe estar asociada a la cuenta de un cliente, dueño del vehículo. De esta forma el sistema comenzará a contarle cada pasada a ser cobrada con tarjeta de crédito, únicamente mediante el servicio de débito automático.
2) Cuentas de clientes Un cliente puede contar con varios vehículos, pero cada uno de ellos será asociado a una cuenta diferente.
3) Tarifas de peaje El cobro de cada pasada está definido en base a una tarifa básica, y según cómo está categorizado el vehículo a pasar y la ruta por la que pasa.
4) Sistema de promociones
Sistema de promociones en función de la cantidad de pasadas en un período de cobro mensual:
Hasta 9 pasadas se realiza un 10% de descuento por pasada
Desde la pasada 10 a la 20 se realiza un 20% de descuento por pasada (a partir de la pasada 10)
Desde las 21 pasadas, se realiza un 30% de descuento por pasada (a partir de la pasada 21)
5) Tarjeta de crédito del cliente
El cliente debe presentar una tarjeta de crédito, que debe ser la misma para todas las cuentas que posea. En esta tarjeta de crédito se le debitará mensualmente el costo de todas las pasadas realizadas con un vehículo vinculado a una cuenta, en un período.
6) Cambio de tarjeta de crédito
El cliente puede solicitar un cambio de tarjeta de crédito asociada a todas las cuentas que tiene, cuando así lo requiera, por ejemplo, por extravío, robo o vencimiento de esta.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1l62keMY8QSbAfEGO5LMLb4S7IMk1ZoUhg0IoAtVtGpo0ebGbyHbWhaseQjO6_rdE4ms-Tq8jUHbVF7I21ch4evehaaigN4ExqRrTESiLcxDZ4Pt7TKrB7uUFDlioff4abVD5n=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12ovWkoTWmrWIPM9of2213GrbK_dDGLPxb0iESAMR8LlnbU9ZKpkTY_BMjL-qIQibfSX8YvG2I_imqA5Mn3Gg9_UtegNitUNzdKYV_Egy0zVakfhORlBTpt6dye4r3TNXYEZNQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qAO-ZecP-BcUpOGmgUWEEB3s9SRFXvZCCKDlV78RLoK6r_mXX1_Us5X5o8EWmC42EGm1s3yoTFOESNAb20-tl1RyFkNAtPHlQvVlzq2gzEtZQFFM44Zm_UX-H_AX7SGc2QrHYQQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 9
Nro. Nombre Descripción
7) Baja de cuenta del cliente por inconveniente con tarjeta de crédito
Debido que a veces la validación de datos de la tarjeta de crédito del cliente se demora, puede ocurrir que se le cree la cuenta y luego sea dada de baja, porque exista algún inconveniente con su tarjeta de crédito. Si existiera más de una cuenta, todas las cuentas son dadas de baja.
8) Pérdida de oblea A lo largo del tiempo el cliente puede perder la oblea del peaje. En tal caso puede solicitar una nueva y asociarla a la misma cuenta, inhabilitándose la oblea previamente otorgada.
9) Cierre de período Luego del cierre del período, se debe informar a las diferentes marcas de tarjeta de crédito cuál es el monto a cobrar por débito automático a cada cliente.
10) Lote de cobros por tarjeta de crédito
Periódicamente cada tarjeta de crédito debe enviar el conjunto de cobros por débito automático, formando un lote de cobros a informar. La marca de una tarjeta de crédito siempre enviará el lote de cobros correspondientes al período del mes anterior al actual (período vigente). En el momento en que una administradora de tarjeta de crédito envía el lote de cobros, se validará que el monto de cada cobro coincida con el monto adeudado, registrándose el cobro correspondiente.
11) Cuenta no cobrada y suspensión del servicio
Si faltara algún cobro de un cliente cuando se realiza la validación de un lote de cobros, la cuenta se considera no cobrada, por lo que el servicio queda suspendido para ese cliente hasta que regularice la situación, indicando el motivo por el que la cuenta pasa a estar no cobrada (débito no ingresado, cliente no identificado, u otro motivo).
12) Situaciones de baja de cuenta de cliente
Una cuenta de un cliente se da de baja cuando:
Se identifica que se encuentra más de dos veces no cobrada.
El cliente solicita la baja del servicio, indicando el motivo (por ej: tarjeta de crédito no habilitada, mudanza de cliente, inconformidad con servicio, servicio impago). Esto lo puede realizar en cualquier momento.
13) Cobro en efectivo Existe la forma de cobro en efectivo del servicio de peaje. Un empleado recibe el cobro y entrega el vuelto si correspondiera.
14) Ticket de cobro en efectivo
El ticket de cobro en efectivo debe incluir los siguientes datos: categoría de automóvil, monto abonado (sin descuento) y empleado que realizó el cobro. No se registran los datos del cliente ni del vehículo.
15) Cobro exacto Existen casillas especiales donde se debe cobrar el monto exacto. Esto implica que no se le entregará vuelto al automovilista.
16) Turnos de atención Para establecer cuál es el empleado de peaje que recibe un cobro, existen definidos turnos de atención. Cuando un empleado comienza su turno de trabajo, se deberá loguear en la aplicación, para ser identificado en cada cobro que realice.
17) Categoría base Se define una categoría base por cada ruta sobre la que se establecen todas las tarifas de peaje en un período de vigencia definido. El periodo de vigencia es igual para todas las categorías base.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lJczdY_31Ajk2ExkqPTuRBaVCKx73-y6ex58sfQcMlaA3c1ctvyIaBGX-tPlni1McdlJ1XQRF-6ZLuXjdUvyJd3YtOhgVKH5Vr9ZxcbGk1NwGzCUsYlEVTgBxiwInOGJ1hmCj_g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09Ukk0_kAaplNqm3aJHLHmSAc9eMcQrdvx2cM9a_SLWxu3vW4WKhrYm4JKNVY_It3ddpKNIGWpzwO6wowEjbf-CzcxM6De2dqDUbb665YxR3YeTkTxaiRzLAxBg6Wg6tP_KjqV=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1B67n2cS7V5BG0UuKrzHKpBfoAVCFwzbWVUtZYWt0w0Vrl3Sc-PBBqv6eG1FnFBp3Tbh2Yu4aBn1HoJ6p8sr0ygQSTCEGqYxg3sWAO0iWFxoHrFdIwIbn19G7zqNwY8UcDnUu4UQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Nsbk2J32th1BtVO6oz4rs-bOj1RChBFZvbwrwl1ORPbZ0N5W4PK1621GSziYD9GRswWf5uZBt3AARdd4u-DwYrZDxn5uc8q__Iz9tlKJKtuIaMsfnjr-NMBmihiqxblWU8hmb=w1280-h1048-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 10
Diagrama de Casos de Uso – Vista de Casos de Uso Esenciales
Listado de Casos de Uso A continuación, se presenta un listado incompleto de casos de uso del sistema:
Actor Nro. Nombre del Caso de Uso Objetivo / Breve Descripción
Responsable de liquidaciones (RL)
1. Registrar cierre de período de liquidación
Registrar el cierre de un período de liquidación, calculando la deuda de cada cuenta en función de las pasadas y descuentos aplicados, y reseteando las cuentas para que comiencen a contarse las pasadas desde cero en el nuevo período.
Dispositivo inalámbrico de peaje
2. Registrar pasada por peaje Registrar la pasada de una oblea vinculada a una cuenta, registrando la fecha y el monto a debitar, en función de los descuentos y categoría correspondiente a la cuenta.
RL 3. Registrar cobro de deuda Registrar el cobro de una deuda asociada a una cuenta de un cliente, regularizando la situación de la cuenta, para que
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YTD6JdyeBNZsYed6dkfiA9kIdWlPp6-zzRc6_h6pCnol3-mDhqIzlc95FtrlgbJ_GghswFydrsz8DERTvuxk_YQzHM8l_YOnMWAyhduDIdCQxrW7PbQn2lt16S4b8_T4ncm1-yg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m7GerLZ8miF9OLuXfgapg8t1-rhJEhiiquIVF7EyhVD5hNWzZCnCn9gIjwcQL7YYH0TNKLbN997hDF7R0mTiH0ZrblOUPZoNXZ39sRN0i-eMP2oxh17827LZXqdI_SK6leIYYqA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0V-BzTY_nn804Rv_GwpTu05YSQlBV6fYrMpLvL2w4QiUqkrHyDPZrqkrWF1o5y4U-2yp_u-UAia7M_y0RvvCBhBrch9vwRD1iocBTuOErPCmDu1LCIuvDkVpQJbsEAOxyBGC_KIQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 11
Actor Nro. Nombre del Caso de Uso Objetivo / Breve Descripción
el cliente pueda pasar por las casillas con un dispositivo inalámbrico.
Administradora de tarjeta de crédito (ATC)
4. Registrar cobros por débito automático
Registrar los cobros realizados por los clientes que realizaron al menos una pasada por el peaje en el período, y que tienen una determinada marca de tarjeta de crédito, asociada para cobro con débito automático.
Responsable de atención al público (RAP)
5. Registrar cuenta Dar de alta una cuenta a un cliente, asociándola a un vehículo del cliente, y asignándole una oblea.
RAP 6. Cancelar cuenta Cancelar una cuenta de un cliente indicando el motivo de la cancelación.
RAP 7. Registrar oblea Dar de alta una oblea habilitándola para ser asignada a una cuenta.
RAP 8. Modificar oblea Actualizar los datos permitidos de una oblea.
RAP 9. Eliminar oblea Dar de baja una oblea, inhabilitándola para su uso.
Usuario 10. Consultar oblea Visualizar los datos permitidos de una oblea determinada.
Usuario 11. Consular cuenta Visualizar los datos permitidos de una cuenta determinada.
RL 12. Registrar tarifas por categoría y ruta
Registrar las tarifas asociadas a cada categoría de vehículo y ruta.
RL 13.
Actualizar tarifas por categoría y ruta
Modificar las tarifas de una o más categorías de vehículos, registrando la fecha de actualización, la fecha de vigencia, y la forma de actualización (por monto fijo o porcentaje).
RL 14.
Inhabilitar tarifa de categoría y ruta
Inhabilitar la tarifa de una categoría y ruta en particular, para que no se registre más una pasada con esa tarifa.
Cliente 15. Consultar tarifas por categoría y ruta
Visualizar las tarifas correspondientes a cada categoría y ruta.
RL 16. Registrar descuentos Registrar los descuentos aplicables en función de la cantidad de pasadas de una cuenta.
RL 17. Actualizar descuentos Actualizar los porcentajes de descuentos aplicables en función de la cantidad de pasadas de una cuenta.
RL 18. Inhabilitar descuentos Inhabilitar descuentos para que no sean más aplicables a partir del momento definido.
Cliente 19. Consultar descuentos Visualizar los descuentos vigentes.
Usuario 20. Iniciar sesión Iniciar una sesión validando los permisos de usuario.
Usuario 21. Cerrar sesión Cerrar la sesión de un usuario.
N/A 22. Caducar sesión
Cerrar la sesión automáticamente luego del paso de un tiempo sin actividad del usuario.
RAP 23. Registrar cliente Dar de alta un cliente y los datos de su tarjeta de crédito.
RAP 24. Modificar cliente
Actualizar los datos permitidos de un cliente, incluyendo los de su tarjeta de crédito.
RAP 25. Consultar cliente
Visualizar los datos de un cliente, incluidos los de su tarjeta de crédito.
RAP 26. Eliminar cliente
Dar de baja un cliente e inhabilitar su tarjeta de crédito para no realizar más débitos en liquidaciones posteriores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13g-9jC5GKbQlumhuKnA_pss1ZXNdQe_41SWJn8iCxVnBSmQFhrkH5bvrd3er7G_NMkP3GqpnLOtYkFMjqhiRLd79-OvcfcRZ1eInsdloJ1r6O9VsFpdd1D1-j7gjyeF2q9ouzbw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FQ4_aLzoDr4Bbn7Ol1hCFiP6ueUIkHTk21wQs37cprWqcYRngsGpK9G5FQMq85SrhAMnJQa8J0YzkW8uRbr5TGrRhnIz3kzZo0yr2k81KU3WrlveoqZzFiWkJZNM6RFlFjAOGIQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IgizTqBDZHIUtx8v2dfpIVbloc_oSOXop9IruDYL7tMuEDOc9Q6xk_aZWaz0HygyumiU1m-m26HpbIFvUcDJS0L8qFbnyaraQgNJG5F--sHrhvJOYn8iv2uBTB5TIyoryLY0aig=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 12
Actor Nro. Nombre del Caso de Uso Objetivo / Breve Descripción
Responsable de recursos humanos (RRHH)
27. Registrar turnos de cajeros Registrar los turnos asignados a cada cajero para un período, indicando la casilla correspondiente.
RRHH 28. Modificar turnos de cajeros
Actualizar los turnos de cajeros para un período, pudiendo modificar la casilla de peaje a la que cada cajero se encuentra asignado.
RRHH 29. Consultar turnos de cajeros
Visualizar los turnos vigentes de cajeros asignados a las casillas de peaje.
RRHH 30. Anular turnos de cajeros
Anular una asignación de turnos de un conjunto de cajeros a las diferentes casillas de peaje.
RRHH 31. Registrar empleado Registrar los datos de un empleado y asignarle un cargo.
RRHH 32. Modificar empleado Actualizar los datos permitidos de un empleado.
RRHH 33. Consultar empleado Visualizar los datos de un empleado.
RRHH 34.
Eliminar empleado Dar de baja a un empleado para que no pueda asignársele un usuario ni un turno.
RAP 35.
Registrar vehículo Registrar los datos de un vehículo asociado a un cliente y su cuenta.
RAP 36. Modificar vehículo Actualizar los datos permitidos de un vehículo.
RAP 37. Consultar vehículo Visualizar los datos de un vehículo.
RAP 38.
Eliminar vehículo Dar de baja un vehículo de un cliente asociado a una cuenta.
RRHH 39. Registrar usuario Registrar los datos de un usuario y asociarlo a un empleado.
RRHH 40. Modificar usuario Actualizar los datos permitidos de un usuario.
RRHH 41.
Consultar usuario Visualizar los datos de un usuario, incluyendo su perfil y permisos asignados.
RRHH 42.
Eliminar usuario Dar de baja a un usuario para que no pueda iniciar sesión en el sistema.
RRHH 43.
Registrar perfil Registrar los datos de un perfil, incluyendo los permisos asociados.
RRHH 44.
Modificar perfil Actualizar los datos de un perfil, agregando o quitando permisos.
RRHH 45.
Consultar perfil Visualizar los datos de un perfil, incluyendo los permisos asociados.
RRHH 46. Eliminar perfil Dar de baja a un perfil.
RRHH 47. Asignar perfil a usuario asignar un perfil a un usuario determinado.
Usuario 48.
Modificar password Permitir a un usuario que modifique su password, validando se cumplan los criterios establecidos para la configuración de la misma.
RL 49. Registrar categoría
Registrar los datos de una categoría para permitir la definición de tarifas asociadas.
RL 50. Modificar categoría Actualizar los datos permitidos de una categoría.
RL 51. Consultar categoría Visualizar los datos de una categoría.
RL 52. Eliminar categoría
Dar de baja una categoría, inhabilitándola para la posterior definición de tarifas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QwhH6_w_4ce3WaT5sQtl2fkrEyxZYR_kAaBvIYeh-EmkZ_Qk4Z6lxi6hnUaL53iR4ez03f9XYkiVYFJ-Gvku3yIU0RkBovjSS5Ac6jqH6XPZm8T4f4k3yO-FItoFOeoo1SNnE=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LZboWlNUdLGurWR8R0Nwd0WN7IFFy2n__O-DqaHT1ZW6FQCU4jmuJq9RsNR4dzpEaKCeqOwK_OjOfD9lDKBbA4DVbFppUiek46D0oA3UISWSTXK8Cu2EIMfOAeE_m6stpheNsSQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BhhxF5t5EgJR5vDcW3KaZ9gPv9fc3Qx637VIJlUHvn_5rL5vheS-DtoMcqBwtWosPiYMWsTnuV52LlLL2_FLlk0eCBF2OGIds_sgOsqQuyayl8J1KWVKERj0VVVoLfX_eoU59KA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 13
Actor Nro. Nombre del Caso de Uso Objetivo / Breve Descripción
RL 53. Registrar ruta
Registrar los datos de una ruta para permitir la definición de tarifas asociadas.
RL 54. Modificar ruta Actualizar los datos permitidos de una ruta.
RL 55. Consultar ruta Visualizar los datos de una ruta.
RL 56. Eliminar ruta
Dar de baja una ruta, inhabilitándola para la posterior definición de tarifas.
RRHH 57. Registrar cargo Registrar los datos de un cargo a asignar a un empleado.
RRHH 58. Modificar cargo Actualizar los datos permitidos de un cargo.
RRHH 59. Consultar cargo Visualizar los datos de un cargo.
RRHH 60. Eliminar cargo
Dar de baja un cargo, para que no pueda ser asignado a un empleado.
RRHH 61. Registrar casilla de peaje
Registrar los datos de una casilla de peaje para permitir la asignación de turnos a cajeros y habilitarla para el cobro de peajes.
RRHH 62. Modificar casilla de peaje Actualizar los datos permitidos de una casilla de peaje.
RRHH 63. Consultar casilla de peaje Visualizar los datos de una casilla de peaje.
RRHH 64. Eliminar casilla de peaje
Dar de baja una casilla de peaje, inhabilitándola para ser asignada a un turno de un cajero.
RL 65.
Generar reporte de cuentas no cobradas Generar reporte de clientes con cuentas no cobradas.
RL 66.
Generar ranking de clientes con mayor cantidad de pasadas
Generar reporte con ranking de clientes con mayor cantidad de pasadas en un período.
RL 67.
Generar reporte de estado de cuentas
Generar reporte detallando el estado de cada cuenta de cada cliente para un momento dado.
Cajero (CAJ) 68. Registrar cobro en efectivo
Registrar el cobro en efectivo de una pasada por el peaje, ya sea por cobro exacto o con vuelto, generando el ticket correspondiente.
CAJ 69. Anular cobro en efectivo
Registrar la anulación de un cobro realizado en efectivo de una pasada por el peaje.
RL 70.
Generar reporte histórico de cuenta de Cliente
Generar un reporte permitiendo visualizar el historial de estados por los que pasó una cuenta de Cliente en particular.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3s57vaNvJjN6LYnMW9K4usxfgigKMUdlSoH6aQergU5BGMCFhe2fmqb3IpuAaJskLAba6t0UfxsiNdS86Wy5O2pxgDHIHbbspd3dICRxixQJoTEBI48jUiZte99giP6m05xSW-vQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14SSKZe8nxMrdk0g400EjB3v0e7d1FqAVdNbZgRUwpOS6OfjyfAXi7_ihF0ryqRo2lQYSU2cLkUjPz7SljlwSTYiBH-8vYQrMH5jMDhpXI_49nVGuq7RfdVnHIPoFn7qDa7ANPgA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36l8t-0L-sQAAaApt8OiFQlq5eJL-B_vkpbTGqBLj21Twyo8DK13_loWZLtSGXgHwb3TPvw4FAJP6C4LQdNiuCFl-GoIKsiht_n87RxkWus-AbsXoFHv4z4jK2KKY1fOeuNHJYjg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 14
Descripción de Casos de Uso Descripción del CU 4 Registrar cobros por débito automático
Nombre del Caso de uso: Registrar cobros por débito automático Nro. de Orden: 4
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Administradora de Tarjeta de Crédito (ATC) Actor Secundario: No Aplica.
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Registrar los cobros vinculados a clientes que realizaron al menos una pasada por el peaje en el período, y que tienen una determinada marca de tarjeta de crédito.
Flujo básico
1. ATC: Comienza cuando envía el lote de cobros de un período.
2. Sistema: Busca el período a liquidar (ver Observación 3), verifica que el archivo de lote de cobros enviado por la ATC corresponde al período, y determina cuál es la marca de tarjeta de crédito para que la debe procesar los cobros.
3. Sistema: Busca las cuentas de los clientes que tengan asignada la marca tarjeta de crédito de la ATC.
4. Sistema: Para cada cliente que tenga una tarjeta de crédito de la marca de la ATC, valida que la tarjeta de crédito esté habilitada, y todas las cuentas tienen tarjeta de crédito habilitada.
5. Sistema: Para cada cuenta identificada, busca las pasadas pendientes de cobro para el periodo y valida si el monto del lote de cobros coincide con la suma de todas las pasadas pendiente de cobro de cada cuenta y es así.
6. Sistema: Registra el cobro de cada cuenta, la fecha de pago, y vincula el cobro con todas las pasadas incluidas, registrando las pasadas como pagadas.
7. Sistema: Informa a la ATC la finalización exitosa del procesamiento del lote de cobros. Fin del CU.
Alternativas
A1. Se detecta que se han enviado cobros asociados a tarjeta de crédito no habilitadas, por lo que informa esta situación a la ATC y cancela el procesamiento de todo el lote de pago.
A2. La suma de las pasadas pendientes es mayor al informando en el lote, es decir que hay cuentas no cobradas. A3. La suma de las pasadas pendientes es menor al monto informando en el lote. A4. El proceso se corta, por lo que se anulan todas las transacciones de pago realizadas hasta el momento para ese
lote de cobros y se informa a la ATC que el procesamiento no fue exitoso.
Observaciones
Observaciones 1. Si no hay cuentas de clientes asociadas a la marca de tarjeta de crédito, la marca de tarjeta de crédito no envía
ningún lote de cobros, por lo que el caso de uso no se ejecuta para esa marca de tarjeta de crédito. 2. Si el proceso se corta por algún inconveniente se anulan todas las transacciones de pago para iniciar
nuevamente el proceso completo y se informa al servicio de débito automático que el procesamiento no fue exitoso.
3. El período a liquidar es el período del mes anterior al mes en curso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VtEJCmiJunH0Dqhm1TKhesPffvCM79uzxasbARNtTeM53dgq1Q1rCGqOcFGRn4mlwtr_vSPtOrudfj2WQIUR2ZPaDXsa_qUVHEdfOnuAuMxhZCZnedgLVhrxikverctKEmyuzdw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-LpP36Hbc5erQ4e6KEJRXbjyylh0BaNJj-DLHRSK2oONHOXFa5UT1WduDEZjNAyKGv2WUPQ1eRo7iAMp23YB0af_B_2iPG2Tz-7mhuoP4kjHECyazeL85yP9f3KzmnejGQdHP9A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30hO0Nynb5LaAb8v6aX7wjLfyNuCX-yxA5Hq3JjSd1xgK_kqGYfRsfGvp82jnWT50KylbcMq3Z8M-A3_osFwVa5Y_OMjgrWBlObowHyamSkBy4o7RF84c3d1F0zIcY9UIJ7iQ-gg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 15
Nombre del Caso de uso: Registrar cobros por débito automático Nro. de Orden: 4
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Administradora de Tarjeta de Crédito (ATC) Actor Secundario: No Aplica.
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Registrar los cobros vinculados a clientes que realizaron al menos una pasada por el peaje en el período, y que tienen una determinada marca de tarjeta de crédito.
Flujo que describe procesamiento de lote con cuentas no cobradas
1. ATC: Comienza cuando envía el lote de cobros de un período.
2. Sistema: Busca el período a liquidar (ver Observación 3), verifica que el archivo de lote de cobros enviado por la ATC corresponde al período, y determina cuál es la marca de tarjeta de crédito para la que debe procesar los cobros.
3. Sistema: Busca las cuentas de los clientes que tengan asignada la marca tarjeta de crédito de la ATC.
4. Sistema: Para cada cliente que tenga una tarjeta de crédito de la marca de la ATC, valida que la tarjeta de crédito esté habilitada, y todas las cuentas tienen tarjeta de crédito habilitada.
5. Sistema: Para cada cuenta identificada, busca las pasadas pendientes de cobro para el periodo y valida si el monto del lote de cobros coincide con la suma de todas las pasadas pendiente de cobro de cada cuenta. Identifica que para al menos una cuenta el monto de las pasadas es mayor al informado en el lote de cobros, por lo que:
se registra la cuenta como no cobrada con el motivo débito no ingresado.
se registra la fecha actual como fecha en la que cada cuenta identificada deja de estar en uso por pasar a estar no cobrada.
6. Sistema: Registra el cobro de cada cuenta, la fecha de pago, y vincula el cobro con todas las pasadas incluidas, registrando estas pasadas como pagadas (únicamente las efectivamente pagadas).
7. Sistema: Informa a la ATC la finalización exitosa del procesamiento del lote de cobros. Fin del CU.
Alternativas
A1. Se detecta que se han enviado cobros asociados a tarjeta de crédito no habilitadas, por lo que informa esta situación a la ATC y cancela el procesamiento de todo el lote de cobros.
A2. La suma de las pasadas pendientes es igual al monto informando en el lote. A3. La suma de las pasadas pendientes es menor al monto informando en el lote. A4. El proceso se corta, por lo que se anulan todas las transacciones de pago realizadas hasta el momento para ese
lote de cobros y se informa a la ATC que el procesamiento no fue exitoso.
Observaciones
Observaciones 1. Si no hay cuentas de clientes asociadas a la marca de tarjeta de crédito, la marca de tarjeta de crédito no envía
ningún lote de cobros, por lo que el caso de uso no se ejecuta para esa marca de tarjeta de crédito. 2. Si el proceso se corta por algún inconveniente se anulan todas las transacciones de pago para iniciar
nuevamente el proceso completo y se informa al servicio de débito automático que el procesamiento no fue exitoso.
3. El período a liquidar es el período del mes anterior al mes en curso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KDM5EoglnhKJtJvaJXqpYv_kdCGa3EPeVlMgM9m8p3oKRnCDEcDp3CW7_P45Bsfdqs8d-CcxoHrYMw4ymNm7YQN1z6oHB7NeFMvgKPGZGsQCTQPmshmhI_lvKLPZhfrFEFdiT-g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36acFTfeOWGpgxK5eANHlZbjjLCpr9YuETi95gNZDxPEDRQPZHCuhNHzsTVNHtKGppAMBRGezO17CzRIaRDNUfsXvl74BEOPT9eljvNhF6IjH7A1c9VZ1uJNeqmpMZnyLCBKAJ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eBnn0a3e2CKoKVf2LuZhCPdKpR0hpuq39IWgyq1M4lid3GAh1a_Hdylep8Pq2pz_Zy1_QfZTcZdh98Nnf4bfYItdP9MwLQnA7igVhzzQPHfmCgEp5q2_DSWPx_st1Aw4yo-wb=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 16
Nombre del Caso de uso: Consultar tarifas por categoría y ruta Nro. de Orden: 15
Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Cliente Actor Secundario: No Aplica.
Tipo de Caso de uso: Concreto Abstracto
Objetivo: Visualizar las tarifas correspondientes a cada categoría y ruta.
Flujo básico
1. Cliente: Comienza cuando selecciona la opción Consultar tarifas.
2. Sistema: Busca las tarifas vigentes para todas las categorías y rutas, y las muestra, incluyendo una imagen representativa de cada categoría, resaltando aquellas tarifas de la categoría base.
3. Sistema: Informa el período de vigencia de las tarifas informadas, en función de la categoría base (Ver Observación 1).
4. Sistema: Permite consultar tarifas de períodos anteriores, mostrando los últimos 5 períodos.
5. Cliente: No desea modificar los períodos anteriores que desea consultar. Fin del caso de uso
Alternativas
A1. No existen tarifas vigentes para el período actual. A2. El Cliente desea visualizar tarifas de períodos anteriores. A3. No es posible visualizar alguna imagen asociada a una categoría. A4. El Cliente desea modificar el período de vigencia. A5. El Cliente cancela la operación.
Observaciones
Observaciones 1. Existe una categoría marcada como categoría base para cada ruta (categoría sobre la que se definen el resto
de las tarifas). Todas las categorías base tienen el mismo periodo de vigencia. 2. El Cliente puede cancelar la operación en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01RdKlNwrHtVJ9vohZh8QzguOy1iuP7KS36kGAmapQVUGQ3AhbPFgiNxvQdLxdvH3BJ31OCxmSyB2VWN2J-5qjHub2LD7nwlGmQzyzqjv_y8SmxO8kIskYF08Ph4sOpQjS3sg5iA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rf5FEBEW98dolysIDnUQ8WhIkqyYx8PxCFVlmKTpxZrZiqwxOWClxrySI6ELc-PKyc67HapD_PYqNCfgUG3kAH6kKEIDUScJl0POBiDx7rezIjl1QgE8F8CgPe41v8MQxEIRb=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HIA7pIGdPxF56_pa3aWG-cx4HQx7K3Utn2vU9AoQPDQNlXUvwUAg2uGVuU6xs5Un6mpk47w7phuAHcAfmNtn4yFSP_KzxuObWNtiKCY-02CeS2_0YoXS2lK7vUXvMVlUA-u2F=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1b1e37GlDXMNL53LEgQGmDtuKd5K6T0QPDhZDQTqzOtJ5zUEf9X5tFadq8L5PqtvSNLS6pciJR_VPfyTiBsqKUJHfP8xIbpo_z5U6MIyWW7I8Z8hc_l7dFVTI0BlvSdTTUM3xL=w1280-h587-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 17
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ax-nVIRvXx83HDkHz2Ng-PGHrq4iwIG1OSzZy1aZZyXfpZAcx5H0xwuHp-9jCMhNXzKKzHCwZgDBjn6mmeVzZp5WHNDTEwmzLShbqRvoQU9ySPcBBcOdPPsBEISxepTZrEj2suQ=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TNJ87i40jOEhsxlYB7vNRibAj_pl0ytIPsWFrdktpba-6cutn2F20uMggA0Cs3xKdvhu2fJp7G6GvzeXj-nIPMml1sUtyI5p2bP4PrdeZdo6Mkn3eNOTcvcBc50qHUnHLC_Uf_w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hAsS-DeZLn2HhMpncUufeMaeU0DJCnd7njHfcnNla9MnO0DqJHKEKtFCmh4mBF3IH_tp7gyHCrGE863IyK6vFPhzhPbAKJzhfWntbidk5U06rLaAdAuWvX5F73cdsBmqOwwbO=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 18
Realizaciones de casos de uso de análisis
Vista de Estructura del Caso de Uso 15 Consultar tarifas por categoría y ruta
class 15 Consultar tarifas por categoría y ruta
«control» GestorConsultarTarifa
tarifas periodoVigencia periodosVigencia
opcionConsultarTarifas() obtenerFechaActual() buscarTarifasVigentes() buscarPeriodosAnteriores() finCU()
«boundary» PantallaConsultarTarifa
grillaTarifas lblPeriodoVigencia btnCancelar comboPeriodos btnAceptar
tomarOpcionConsultarTarifas() mostrarGrillaTarifasVigentes() habilitarPantalla() mostrarPeriodoDeVigencia() mostrarUltimosPeriodos()
«entity» Tarifa
precioPorPasada fechaFinVigencia fechaInicioVigencia
esTarifaVigente() esTarifaDeRutaYCategoría() mostrarDatos() esDeCategoriaBase() obtenerPeriodoVigencia()
«entity» CategoríaAutomovil
nombre base urlImagen
esCategoríaBase() getNombre() getUrlImagen()
«entity» Ruta
nombre
getNombre() ruta 1
categoría
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_p2iJqKZnr3e6tcjdkB0BA7pfcH0VUIYcAO-US5nj_8whAJrrjUn-esp7GjIRFHFqq_XPL24Y-W9XLbx4YFaTb613h7rsI8WftIz75EfEI1czLRkVEQ0_kOSx2gBNELMJrbqclA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_YuSxew0pkvhecnPzSNsly3k51yQaM_QKRouVVXdgMDZoE5bquyu2R_0MnwVc8pKD6hpXfkcVRRAwX6-uOuYxluElEbQZJNA9qoJE1DmrNtL3z41DJIHLJEqhH41j06nIO7GKxQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xmwLxpWMQ_e2TbLo0Gk1x3JosSVrAq442sqEOYGynE5eGL27Tgw3p0uDpnFRzXKB968GQJsM1aakRBCKQFG8dIrOpUmlTba-af0MQI9usRN3AkY87aMtGciBSRFAOpkOEvMQuEQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MrDpra5L9kEze8MXVjxVKLNq2PG5f7x6_vOiTrnhIVtZ1wf13f1pUNPJQaTABs4k29AmoC6CCkzSd_-U2pULjUaEeMHBzDRQE-iryaFlo2V7eZYhhl6kdY_CNVv-8VK4mIH4jLg=w1280-h859-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 19
Vista Dinámica del Caso de Uso 15 Consultar tarifas por categoría y ruta
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RsIrdcYIcbZwXNIOrqp-TI4_BnDFILnbJOHBoqTNTE1Mn6-DlZ_4Wzclhq0ya0uDOEjCF-UC5ujHcIceEAY6UuolhnmHAvFpBDrA_y5jnHhhtHW9hW8KVpGW16riBBc4xMpo1eg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TPc_OiYn4WGjQmMYdyT7j-pOBJOrRoO63as4JdsZ-0xdiz_dsDl9KXtQTQYEC8P-1SICrTrgXT29Fmz5Oe5vmXRV_VP11vbRt2EMllyBC68r2ffln8KahDT2EOtGhwophPTKJ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wpzp_U9BBCEbxGc81gPciu5woOoSG_57BbVP73G_8p2uwMYtToHo88ynYJrOgeAWznrcSPS2b08PGcRWvRDkNFx7qi0932gF_BHjxMU64-qCeCYvSIZaI04ih4d6-bDSDD-NEKA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Vf2PiyL0CQGM6dw_g_kqAGuRF8QN2PTwT-gz_KU3ze7_Xyp6kkY8UqNGCS90zIhaKEjp5xQjelz4jFCelwTzMDxIuqN74Q4S8MaxVvV1__28inpwlw_Y-ag_yHlgck7aY3Xakxw=w1280-h1191-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 20
Realización de CU de Análisis - Vista de Estructura del Caso de Uso 4 Registrar cobros por débito automático
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22nqTW42u85wnbr_zi5zOc9k1ZsjXirKPQ0Zcs4J6t8lfCKDGT0JEoaUhQGdK7KZH9Whux9v3cUmhhvADgMxbwZm8t_d-Z5rMADOXfdFUAsjf3Ft0ttgxAqS2sq1GMtpFHoL-NHA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qXW0mfuBBt5UtZBAEO7s63ekdVKteYYnfYsg4nT1o0Chf2yJ0E82KoRNYD7nTNERuwLHWX_QI2hxMD8lUVyg2_DAyVVLUBDtGbdGDmQnlVOmCT6Q8UKcDXe4-ouWnKXwKtfGE=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lbMns1ntmeNMle_ytKmcryvJaDoxuMbJbFSHEnAr4IgixnaDM6x-7KRm128SdqCFbarlnYv_g7-Wbz6ihgYVFjaRE8tOvf0wa2DAPofVLLbMH3kX63cueb7kYkNfR4W7b8cIk8w=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 21
Realización de CU de Análisis - Vista Dinámica CU 4 Registrar cobros por débito automático – Flujo básico
sd 4 Registrar cobros por débito autom ático - cam
ino básico
:InterfazD A
:G estorD
A :A
TC :Cuenta
: M
arcaTarjetaCrédito nuevoPago:
Cobro
: PeríodoLiquidación
: TarjetaCrédito
:Cliente
: PasadaPeaje
Para validar la M arcaTarjetaCrédito se
puede hacer por el valor del puntero, com
o en esta solución, o por el nom bre,
llegando al objeto M arcaTarjetaCrédito
desde la TarjetaCrédito del cliente
1: nuevoLotePagosDA() 2: nuevoLoteCobrosDA()
3: obtenerFechaActual()
4: validarPeriodo()
5: *esPeríodoVigente()
6: validarM arca()
7: *esM arcaDeTC()
8: buscarCuentasDeTC()
9: *esCuentaDeTC()
10: tieneEstaTC()
11: *esM arcaTC()
12: validarHabilitaciónDeTC()
13: *esTCHabilitada()
14: esTCHabilitada()
15: *esTCHabilitada()
16: validarCobros()17: *sum arCobrosPendientes()
18: *estáPendienteDeCobro()
19: *getIm portePasada()
20: crearCobros()
21: *crearCobro()
22: new ()
23: *actualizarCom oCobrada()
24: inform arProcesam
ientoExitosoLotePagos() 25: lotePagosProcesadoExitosam
ente()
26: finCU()
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NEjzKl82Y_c4DRDxXYgbOTzqK_Z5neQxFitzUY2JDgDlJjc1FdhWSz4iq2K-9TydUWUAkVsn-9XLdbz9G6rUZw_3dT2qj7h0zgfUR_MBXj001s_nHxA-uUmT_t5-Av2JgMcHCEw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36j-LxKavS4X04AdzQqotf_9nYr3DQJq3b2GpjkD60tS7Ul_PE91F20fL6zcJ37cyailg8qRTLpO9PLjSIgkgGzzjDGuevVCn56GmvQiz3i2OG06EqWfbEt_2WA2AFJ70Y4KGgUg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ltHpJYF1ueggAhf-VnBUzAVPslSZSwIcxjTKDWJHcs7b6rY7JjBaGkMy1CUftQv2pJqd6-E2ZBjn_tLsvi3TGyYrvbkrlzFo7EU8kFaq9-uYUkcVUV7NQbrA7ZPHHe-0THkIz=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X0Yqg23QTry0EAZYlKJyciUr7qSq_omqkk_WigzbPWWY3I28IHUivGkod9OhWLIKOeuvKnqnnSUYgqi6kNps4qpYBkQdhbuBSM-UFdlGSOtHoS0LjBC-GLWj00KLJqJ9tQTw6QA=w1280-h718-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 22
Realización de CU de Análisis - Vista Dinámica CU 4 Registrar cobros por débito automático Flujo que describe el procesamiento de lote con cuentas no cobradas con diagrama de comunicación:
Vista Dinámica CU 4 Registrar cobros por débito automático -Flujo que describe el procesamiento de lote con cuentas no cobradas con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Age2TJEkUg9EQerHMWMUIxYD25nrHiXjOTepF9uKaLuayP4KcMhfTXP0DcTug5p0b5i3iYi0h0n8WQvhFhc0DySR3KmhtNjvLaS6v-4p-z0496IEaSqQRPlooaFIlL5t6Koe_nA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30XV_n6SoDaFhJlTu00u5_ttkAEvSxd712iJkXF039pRV39tJdCgE7k4UH3cpSWSowy8BaBMbNkfDFMlHkK8MyC5KVs8Rx-ChfD2cDxUlTR7dLPmi-QXrnwwCmWUzHodY8haBN=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kkR7c2j6cdJHNJob0CJ-Fe0xOB-gbWJY_t-PK12mCMcmR2gWx90AdcTEmAHN0wuwoqGyJmr4yvtBjLszwtFrTuLuWUN1KuvC_ruR7G-in8UJ52f_4MEgIjT1LyWKNIAuZ0P-7=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37DRNvlcCuCu8eiHzz1Uabu8MUGZWKSiTUQoNF2mflhTFvgPQJeAcMFq_ZDy6q2qYz2p2hB9xrl87tNIz0nUNRuNJ4OP5FcyI14CezC0Nc2OVHuzax6RQEH2d-t90ggWQeB7gG=w1139-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 23
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c4dM37EMhpEJ_W6mHGsMlV4-zFKaeo2Lje2myj-vF972wPMRv-ghlkKKsFo2NswfgYnIjRmEPPtWqiOAfsQN8BbsTysnULzwpD33tpgb9UEB82BKwFhdgDC2y2TA8Bxi1sqDXHg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wY2NlVlXkXOQuq6baghRPPUgrkL_lFLdLvthC2_dxz_vmX5yYXzmvNHmx9xli_ATK6C47TRBZpH9HlqjwPWl5t_jYLQ7lza92lS4Qdpx79iQ4ym8byQK-jRo9pB1AprJRi_nOAA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IIqWwRP7xF2D7ToQ9YGnDn19l3DoBwd6xkITqoKHzeXIW4KXQaxM542jWz8R13hY2KI5CiKS6RaFGLwOXxyE-moae6-B8nGES6UGbBNYNPW2awxoNcZRcFx2fZ45fjpWfj1N4kg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1M1R0siJbe5KtXz-ju72629FAa-oWS06qsJpQ_aDzsnqu5m2SZ3CiSyc09QtszeOBgUORokHYy8GZYGycpOU8P3uooih8O4AjWPBIiDzrYcH6qVsAQBznBVvwsF4ab8HWCGKpzTg=w1280-h1070-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 24
Máquina de Estado Clase Cuenta
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1j5qrNAl9hFdZKvKp7tK0ODk8CQDMQVasZsRy92aXkkstkFcYshRg_AfKww4lxCBpJaAJ_Ni9r3Y30wVDSG2d-FAFvDQlGqsBnz9zBu8CufYsb64L6-kZ94YWXM1XT6VrGCmSt-g=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dG9hBxRyiNNe2IDgaAFzZ0AVC6PafeWggxCkyVhf6NXBH6ae83MoAPWpOyp5x5Hr_T8rF5ddIlpemoOaUrW-UtSSrptl02snv7b-iDAKx1jRoKUUP687FYtj9QqRLVJxjt5X_xA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12omvERwaPsshqAb9nV8alb3xToTNWVtRskUWz8rGzbx-ajYZPm3IEPSFOvGrCxrfsS35gAHw6-PTuivaEdzbDswv1VFoa4nHutdjkpzfBbF0Qu20xCpxsa54nhKHoZ0YkmU7BcA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NIZrOlIzxCU4RzWI9XtHZxOxlK6aWpn1HnOo-QAyuwsUxh3wPs2Ust1b-UxWvBXtfp8NUFMgjI8lw0rRnH3JKpKVFF2bBAmg39hZgvjHyhEfn8f8UrSqRSPJA4IDDPr6nMUZjcg=w1224-h835-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 25
Máquina de Estado del estado compuesto EnUso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LTe4hpjnaImFjeoISqOoAZjz9yxTPx02l9n2SUXzyOauoPEeUxDGEQ965R-oWeE90FXlOYjytF7pETLP1EaRxE0U5dgv_3q0ztmO1cKT21_tRgnmK3_G7XJCMWMb2mSJ06ob65Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zo7mil6X76KlZZNRoc59N9JoPMIHIh-UqI6zUf5yPbukAUEYWnC85K6n719Oa-nEz-mFyhBLkds5v3GcVq28Od_fJvvUvDyQ1YsNWvOUBdZ2IXDIOg2f4CMMmpbujW7johpyEZw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34XAr8P9VZaQD-bJ3jW2TvJ2gbX9DR0bYJvJpuH_0LPRarNoW0S1UH5ODwoD8tjIU0y3ed5LZDhDkYwZLGQg_jpbD64tD3XghsUMy7ERfRc71YHQa4dOaE5TXprFKe5QEqT8zA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 26
Requerimientos No funcionales y su impacto en la Arquitectura
Nro Nombre del RNF
Característica ISO 25000
Descripción Impacto en la arquitectura y justificación (indicando
patrones a utilizar si corresponde)
1
Base de datos Compatibilidad La base de datos debe ser un Oracle 12c
Restricción técnica de implementación que determina una arquitectura de datos relacional, permite log de transacciones y el uso de funciones y procedimientos almacenados
2 Implementación Web
Compatibilidad Todo el sistema debe ser de tecnología web, a excepción del componente a instalarse en las PC de las casillas de peaje automáticas.
Restricción técnica de implementación que determina el uso de un lenguaje de programación web, afectando la arquitectura del software con esta definición.
3
Protocolo HTTPS Seguridad El sistema web debe funcionar con protocolo HTTPS.
Requerimiento de seguridad lógica e interfaz de comunicación que afecta la arquitectura, requiriendo la configuración del DNS y archivos de configuración de la aplicación. No deben existir links en la aplicación que indiquen el protocolo (http o https).
4
Publicación vía DNS a internet
Compatibilidad El sistema debe estar publicado en el DNS permitiendo el acceso fuera del dominio de la empresa de peaje.
Requerimiento de interfaz de comunicación o inter-operatividad que no afecta la arquitectura ya que esto depende de la configuración del DNS. No deben existir links relativos donde se indique el puerto de salida.
5 Envío vía FTP a Administradoras de Tarjetas de Crédito
Compatibilidad
El sistema debe enviar vía FTP a cada Administradora de Tarjeta de Crédito un archivo que contenga los débitos pendientes de pago para un período.
Restricción técnica de inter-operatividad que no afecta la arquitectura ya que el envío vía FTP implica únicamente la generación del archivo en una ubicación que funciones como servidor FTP.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Qwo0yNNFPlN0puk1nx_a-6OsfqYCc3BudzT2p-qBEUgWLklGzFpOTM_6S-IB3xdsyvLr61Ha1PqMx-5pq-SeYnZOnrlN0v0S_gAV6OvO9dMhjE9MA00-mKP__vBQhn694nFlW=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SPMM3XSvTH-tKGsYdBklEe50TTKKLRVJ1mKFSlPBeJeCt4KKIrRod_b7mYCLsh6lOqT9x5NfaaqrAVU6js90pfxkPfnmeW2o6OebNgDTFo7Rv-6ql_LQ6i8ei0OWgPul60BaroA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37z8lf8Qp78wQkaSlECEcyK4uNqitlL_-qWcn39UjWFuipxcnT60h-SesMCYZtQTgtS1CTcBQP-qnwGVHc29OeesA73KSZBzQ9vnzlBV2cHdrk6dw_YVdbgAPW9-Kt8fngkNkTHw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 27
Nro Nombre del RNF
Característica ISO 25000
Descripción Impacto en la arquitectura y justificación (indicando
patrones a utilizar si corresponde)
6
Web service de recepción de débitos automáticos
Compatibilidad El sistema debe poder comunicarse con un web service de cada Administradora de Tarjeta de Crédito para procesar los cobros realizados
Restricción técnica de inter-operatividad que afecta la arquitectura ya que requiere el desarrollo de un web service que “escuche” e interprete mediante un xml los cobros enviados por cada Administradora de Tarjeta de Crédito, el período correspondiente, las tarjetas de crédito asociada y los montos. Se resuelve con un patrón arquitectónico Messaging para encolar los lotes de cobros y procesarlos de forma asíncrona
7
Dispositivo inalámbrico
Compatibilidad
El sistema debe permitir leer información de un dispositivo que lee cada oblea y envía la información a un componente de software instalado en una PC asociada a una casilla de peaje
Requerimiento de interfaz de hardware que afecta la arquitectura ya que implica desarrollar el componente vinculado al dispositivo inalámbrico, capaz de comunicarse con el driver del dispositivo e interpretar la información leída por este. Se resuelve con un patrón arquitectónico Messaging para encolar las pasadas y procesarlas de forma asíncrona sin perder información de la oblea. También aplica un patrón arquitectónico Broker para traducir los datos encolados que envía el dispositivo inalámbrico en información interpretable por el lenguaje de programación seleccionado y la base de datos.
8 Performance de procesamiento en horario pico
Eficiencia de desempeño
Para las horas pico el sistema debe poder soportar el procesamiento en simultáneo de 90 transacciones, procesando cada transacción en
Requerimiento de concurrencia y tiempo de respuesta que afecta la arquitectura ya que requiere el desarrollo del módulo de lectura y procesamiento de
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bCL6FAwRuH7-vNBmkvowz7qObsJDcxKLyYrWx3juLu30cuILFu0uPwul53OqgdlsK1Q26iRwyRvQ5jDiI2QKtrz4DG-KMpGpOys-haW9cyEUXZBTlw14OJSNNENgbbxaevxpbZA=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KkUbTHgcraKLdM6DHLkwp_2QzXAVHGvNZ95eGXfJptm0UVeiMFKEcayWB3X71yXCKR5xcU20h1-oIeQd9FRnkiJVNDkwCsvK9iDsB10GzSKBTGA0gPjFqg_YJL1rTK9_nXMnyrg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zAnQTWAa5osq6vrXxL8_KaOQiWmoKexZ5UfXPJkQygfm9ttbx5e2LVDWCJuhPwItMaRMSeJ2bDcwjuLaN6GFnX4w9sgTclGlCpNK_ObvRbyhDIPGujdkQjbvu9v13CZ70OUnacA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 28
Nro Nombre del RNF
Característica ISO 25000
Descripción Impacto en la arquitectura y justificación (indicando
patrones a utilizar si corresponde)
hasta 4 segundos considerando que en un minuto pueden pasar hasta 10 vehículos. Nota: este requerimiento puede ser dividido en un requerimiento de performance y otro de concurrencia.
pasadas debe cumplir con este requerimiento de performance. Se resuelve con un patrón arquitectónico Messaging para encolar las pasadas y procesarlas de forma asíncrona asegurando la performance indicada.
9
Disponibilidad 24 hs.
Confiabilidad El sistema debe estar disponible las 24 hs.
Requerimiento de disponibilidad que afecta la arquitectura de software. Para resolverlo se contará con servidores redundantes de base de datos, aplicaciones y web. Los archivos de configuración de la aplicación deben estar parametrizados de forma tal que la aplicación no requiera conocer en qué servidor está trabajando.
10
Performance de cierre de liquidación
Eficiencia de desempeño
El sistema debe procesar 540000 transacciones en menos de 5 horas.
Requerimiento de Performance/Tiempo de respuesta que afecta la arquitectura ya que implica el desarrollo del proceso de cierre de liquidación mediante algoritmos eficientes que impliquen el cumplimiento de la performance requerida, minimizando el acceso a base de datos y priorizando la utilización de chaches de alta velocidad. Se resuelve con un patrón arquitectónico Messaging para encolar las pasadas y procesarlas de forma asíncrona, asegurándose de no perder información, y distribuyendo la carga de procesamiento en los dos servidores de aplicaciones disponibles.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UrCtnJbQwy0Xotnq3K2gCcNXF0G3Yg24QXxhLvEYc0RusBk_3iyGareohJz9fNhcJxXAhpjWWR19qYd9BAhp_doQRO3Nn_r8iy6-OKd-LFjwqpiUg6xn7fKmfI_F4rST1VDqF9w=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TGrANAha9Ejas7RD-ctPRFhYXze6TpIT0JnjFwTTkKdcbxFBAWq3jSM5f9N6Iz0wH1tbDHNA2lnRcKd5wPzls-uMxrs9QrE6rgD0q6bAFnIEyjwxJyAHs4ggu-ip5Sge1gJqdQA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yAtVlzKXpQvTbtP_-H0-y13vrbsXllVIWLmi2uhWwLT3VXTOSbyIxW8auVj51n9_yQXnxET2Wt4qKRwNxXeEqyLMHtb1i-GvLbRhAlsMHJK7TFq-cb-9OM7-zKe-zKnvjcqRTLQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 29
Nro Nombre del RNF
Característica ISO 25000
Descripción Impacto en la arquitectura y justificación (indicando
patrones a utilizar si corresponde)
11 Imagen de Categoría de Automóvil
Usabilidad
El sistema debe permitir incluir una imagen para identificar cada categoría de automóvil. La imagen debe ser de extensión png y no ocupar más de 300 mb.
Restricción Técnica de implementación que no afecta la arquitectura dado que el framework de trabajo para generar el código ya contempla la posibilidad de adjuntar imágenes png.
12
Colores informativos de cantidad de pasadas
Usabilidad
Cuando el vehículo pasa por la casilla de peaje, el dispositivo electrónico inalámbrico instalado del lado del conductor, muestra en su visor el monto a debitar, asociando un color en función de la categoría y el descuento aplicable a cada vehículo en particular, según el siguiente criterio:
Si el monto a debitar es por menos de 10 pasadas el visor muestra la información en rojo.
Si el monto a debitar es por 10 a 20 pasadas el visor muestra la información en azul.
Si el monto a debitar es por más de 20 pasadas el visor muestra la información en verde
Requerimiento de interfaz de usuario que no afecta la arquitectura dado que el visor de pasada soporta el uso de colores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ts8NSMNNZ7TySfGJMV0XOHUUkTmPARrzEi730RnnIi3dsR7XWqjgTFeCSyO8JrBQyTgae1pr35w1kystFtLBz4wAoGc_d7NfLCGlbdv8PYplfd0T5Nng2LFPlG_Z0YWq3DHHi=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2P3aI433RWA87539oz1jVMFBbggZOvg7oyJCHDKg5tHCX1M2oKNfmlv6ex2XT3Cz_GENuZCzNW3LhnvtaGKQ9cN-pnSviI4M5N2W86t7fOHDMSf6jHyo95xn0iA7n6N568nFbgtQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qAST8Eo4lTe_d2wiWVpYGhT29XFcjnp3LwSXSH5GGhn45FbxktSPalCvt5HtjHEoavG-FinmRkqou6qEdx3F3mFqYwVVktyNWO4iebZFS1lf9bje8xi_jpN1iaIffE32Qo2_wkg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 30
Estilos Arquitectónicos: Layered Aplicación: Se aplica el patrón para organizar el software de peajes en capas independientes. Motivaciones:
Lograr bajo acoplamiento entre los componentes de software que resuelven diferentes problemáticas (presentación, lógica de negocio, administración de datos).
Lograr alta cohesión de los componentes que forman cada capa.
Asegurar la comunicación entre las distintas capas evitando la comunicación entre capas que no es necesaria, y genera mayor acoplamiento (por ej: capa de presentación con capa de administración de datos)
Se cuenta con una capa cliente web y otra en tecnología de escritorio, para resolver los problemas arquitectónicos vinculados al Frontend de la aplicación, por un lado, y la comunicación con los dispositivos inalámbricos de lectura de obleas, por otro.
Se trabaja con una única base de datos por lo que se requiere una única capa de gestión de datos.
El patrón presenta una solución arquitectónica para toda la aplicación.
N-Tier Aplicación: Resolver la forma de distribuir los componentes de software en diferentes niveles de servidores para lograr la performance y disponibilidad esperadas. Motivaciones:
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad requerida.
Separación de los distintos intereses en varios niveles lógicos, facilitando las modificaciones y extensibilidad del sistema y la organización de una arquitectura distribuida.
El patrón aplica una solución para toda la aplicación.
Distribuir las cargas en los diferentes niveles de servidores.
Resolver los requerimientos no funcionales: Implementación web, al incluir el cliente web y el servidor web con comunicación síncrona, y Dispositivo Inalámbrico, al incluir el cliente correspondiente comunicado con el servidor de aplicaciones.
Resolver el requerimiento no funcional de Performance del cierre de liquidación, repartiendo las cargas en diferentes servidores (de aplicaciones y base de datos).
Capa Presentación Web Peaje
Capa Servicios Web Peaje
Capa Acceso a Datos Peaje
Capa Lógica de Negocio Peaje
Capa Presentación Dispositivo Inalámbrico (Interfaz con dispositivo inalámbrico)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zE6Keg4KZLFdDuEhMjLVPOfsZG2nZdpcE08b5UdlbtYAEPqt7OFmmHbzfiThrOA7hQBM9V2eZCyQRF1bhEUpGfS0q4HgH6jRP7lUCxsuPVvnsrbjwpcSQVCg3dJDED0emXG8EKA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3h-WslzXnwOXZizzs6SdkAAsIE7W3VajgbylhICU1Y7thjlZu5-keio3gctBJzZ08SfV1Uh0LvySzxTEoM10J7MJvWjXsX9m1rg9MwNnHYV0P-iGxxmBt_bC5H0DrlgvR2-nUP=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RC2m67jd0YLksSWMoV_duVSgI4rrA4IrLlQeIXtzkTxV4T3xenjJ1a8fZJ-X_lDC5GP47SKkcOshNHfJsDMSxFPSuaxF3syR2vyaMNFUbRugnbPuhch401tAm_1MdybFJz3mskg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xKupxckCdCAiKkSjAn7P7tD4rN_FkdgQ10AZFnrWUZ2_2_0kehh54CGa8SL-srOkJkhpRTQFfyIpjmB0n2PzLohJs2Qn9g3ARMEk_XOOkWY_LSEbVjEPcqbcMMhtn7Ls19xMqNw=w314-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2upj8pTx2LMWZfhtBHPSSZC5Hi3uRbYXQrO35VrHbJhQOgQnvRoyIjvN-jg2K3vIhzdnupvxFncjk7avAm1tghkL99fI3HqROcEoeNOSLM-iyrSA1NZHGPzg--MMNJJ5E4Bi3egw=w162-h148-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2duc6MvEYcxtKHsPx74fa9NJmLE9r5KQlhd-3eKtqgD3sgHW-U1Kfw09p0X_yZntRTYcEVd0deRWp4ke8YdMUQjB_0ZJYw3ZNns6Vp5xfpl0gRe44nu6c96vOjFC5dSAP3x9D71g=w314-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MphSfTwpuyDCs035XWspIoQRX3XneKTVIN671YhoHGbEf9Y-jlhE0MjHjdKJtokadn3CiOZn4RRr8sWaE8OGqa3Ab_j4HMQ1b69Ad3x9LpNOWdXtlj5xFuBcsi-CQ5VSBgurlTA=w127-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dz6d9qdMYGErC4xBJOsbiePZSzhXO1OC7BKQhfwvk8UX5Wa_l_H3bk8t8an_I0bICW5b0diJGMEmE5mNNMcTa2Su-gUOa42EC8xlB50YRwdjK880PvMXlb9lhBolvPZ8EskL6vg=w160-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tHBytu0Mx9k-7hXvC6poXAvvBw93mQIqktk8vBQS0aRSL9wO_a9Wi7ENslJurCMLBSdD78lqjv2VWxat4ls5VS0SDFX8xRwdjxLpxz1VPYfcIrKW3lIdj0jq8HFokCA4wmYti=w370-h61-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 31
Establecer una única forma de acceder a los datos para asegurar la integridad y consistencia de la información contenida.
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad
requerida.
Messaging Aplicación: Se utiliza el patrón para encolar los lotes de cobros y procesarlos de forma asíncrona. Motivaciones:
Ordenar en una cola los xml de cobros enviados por cada Administrador de Tarjeta de Crédito, que se escucha mediante un web service xml de cobros, el período correspondiente, las tarjetas de crédito asociada y los montos.
Trabajar con una cola asincrónica para asegurar que no se pierdan lotes ante posibles cortes.
deployment N-Tier
Software Presentación
Cliente Web Peaje
Software controlador
del Dispositivo
Inalámbrico
Servidor Web Peaje
Servidor de Aplicaciones Peaje
Servidor de Base de Datos Peaje
Capa de Cliente
Capa de Servidor Web
Capa de Lógica de Negocio
Capa de Administración de Datos
Web Service Administradora de Tarjeta de Crédito N
Cola de lotes de cobros
(InterfazCobros)
Componente Procesamiento
Cobros
Escribir lote de cobros de TC N
Leer lote de cobros de TC N a procesar
Criterio de ordenamiento: orden de llegada al web service
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hkRKNfbvFiMxXkOlR9qqoBv6dh2yvol0qoR0UrLXYtfqEE-0oYqnggFgLO3vb5LzkfzxLQglSK-GZIX1d245tUrOEQSnREKoVnIDfjVHWOcaDen_8q0XT17OLgF0B0JVmafYt=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vbtQYmhnG-mIk1MBe63BnaBxR3QwL-l9SdIRGMEaIJVThh6MSy3qprOXsri1iYhfGvODPz2jnvegJc6gBEw7QLDNTfGwUcdus1UzFCc0YgqnPGPzKMw_LLYG33nUdChHFbM0Fyw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nOf5i5WASlOMduNpNVRAZOmFMmzhMkRf7X1OuNtCvFaC2YTjJxh0k5vDuv6wGzvYRSqeBbg6Ou23njbhjZutl2FLpeajXo78RYLDkRW8JiB7R4tHisRxWNuVrybpJwlVHll_GUQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29XAKtweihw1EaxeiEI3epK7Q-jaL-pkvxJ4JNyJuEUGj4Ew5cob_1LicOsRhvtEayntKNBQUnKUigxjvymebWsXK_cK9ovBcjLNhC4Hg0E6aKD-V5Br5piY2s6uje10FnZiWV=w152-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04IaeFo1jcRbenS1Ilivn52aHxpm6sC8-FdWf1yb1e11scRnDVDlbDRuJEwI_PtTlWvuYHnnTA6F00kgbUrsMMOYzeqw6OF3dU_W_A5nG8VxB5y8R5-LpqjGAiQHqjRlel9hcuEw=w204-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jm_BdxZ1yXICGZdsvNN0zpMenzbrKi1YPi4s5Wm2ytpDTeQDnY8c3g79KC8K_DxKmCCddXr4NNLDrpdqk588PIJBocHDBTjsmmKf8L7HozzEjvrkz7Z68h6ZqRslJ28w0Z8rq=w119-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tmJpuh4z91EEkH-HOHQwdy6Fr-aA3loAoG4lC7fnCkCdTeJet1Sg20-lsBp9rDqI_z-czNCwv4UaJOp0IryY54CeFbJFahz4aSIGNmRr-3oleTThwHoeaBwmIlkj4dcUjG1EzVg=w152-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MQo8EloCHykNGN1ImPNfKH4tP9-kx6Qrm_y3xYJGhq9g3wX-uYzpuN94KGtxMgnnG5j9RmkCd0-avsSHqD2wT9pZUKGbbuodJaiF_Yh4BX-MH8cuqyEcYzmILaYC9Jpl4UL6P3A=w437-h61-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jIxzYY8UE_YdSD8svycXcn7P3gkSN9JZ4T-Uhx7AZm2BMQwFSGN2l47d_QYYpdVXrw8m82tknVapmSPl8k9wiEKlv9cXOz4b5sWHtO8E3V8NrsWXzSNOgS6f5Pi6h_Ao3VM6sWg=w153-h110-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yrSYOltEDJQN53rGUAu3ywg67GSz8avsgme8Fx3PQ-LV9058sTY6j1Vuk8Bl6cBUsH2wtLti2aQ2rdugCUBT8k_kQiSxllLdDmAyiFMAN7w4Sz_s2wRkgoLmRitAoFIyfJLNuvA=w119-h59-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28BVwf-WMgITne9Gdm1S0u45yb5T-awjk_7W_-zGKmwUhxn3XtUx8HlLmqj_7vuOvFw0gsZeAQ5qnQL2wDy1cGKIpFXElnd9y-PxIEDcgTTsU7jyOxt8iHmG9fANGy3IWv2w7T2g=w161-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2w5zOLIPzmoIGAMcd2Sa-UHwANCIrlW8LQWssbFSlUaMDzciPwQBrk2rqC6aXusPVF4pNV-IznhzDTkTczUHWDs6lqLYbJIisN4EvPhvXX2gRAkdB_s2zej9WxHoj9k5GPkxLo=w130-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hiqqL5cnhm8ks-ZWxrBWFS4BjgNxviuJo_qFQn_CfxOjaheeh1HECsjKi3uLPR4ZnzhT3J4FYpQyXa5g7picSAAHoPJV_l72nam9NTGc7QB7H6AIFOam0hKtqrPTsRw9-8p_7=w119-h59-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cIPNtkp03-8myvbdVfdvluxTbHtpByUYeCvqXv6teGb7kZt_QphKrdG97ADI7m3ZqOnVzFM7XKkzpjM7Z2uBzbfjPM8uklcDH5u7qGcfs62mC3uD-4Liu1FZmWiXpiycYPMPVlA=w119-h59-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SDMCP5VdYhlrGlhxw8TLpZLKCCHJ2fJ1snw2O9b-3YDhRZVzV5Q97EuE_LAEMn2EG-gd2EhOIBkpJAvp6jhW67HImPb4ywiRRWe2ekwMTLlUud093ymMoTol17YC7X52jrxGaww=w161-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oN3r3ZcejARJ9tCzYuu5KHUEjpin3W0rzHF6l6pM7ERRvrx1djxtKRjrp4ypWRP_bW1Ok3DaeC_cz78o5CWPPATGqurXUInmAkcRuEYQAN1jeQ21HpImCp1CDlVEL2g7yyitF=w130-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c8ovtsvqdoHfbLRi_AzfuxOybEGn93aFOhmgpjUZYLgdppFF1S0-GAolvQdfKfj2YtSafBmyMKA2Tf-NtHiOouazJEioB6qS57VXK43xG5sSQsMpdaxapyocZEthyk-rU8hAbxw=w119-h59-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 32
Nota: también aplica un patrón Broker para transformar los web services de lotes de lotes de cobros que envía cada Administradora de Tarjeta de Crédito en cobros. Broker Aplicación: Traducción de los datos que envía el dispositivo inalámbrico en información interpretable por el lenguaje de programación seleccionado y la base de datos. Motivaciones:
Resolver la forma de realizar una transformación para que el subsistema de Gestión de Cuentas pueda interpretar las pasadas, luego de recibir las pasadas transformadas y encolada.
Resolver el requerimiento no funcional Dispositivo Inalámbrico. Messaging Aplicación: Se utiliza el patrón para encolar las pasadas previamente transformadas y procesarlas de forma asíncrona sin perder información de la oblea. Motivaciones:
Ordenar en una cola lecturas de obleas que pasan por el peaje.
Trabajar con una cola asincrónica para asegurar que no se pierdan pasadas.
Asegurar el requerimiento no funcional de performance de procesamiento en horario pico, ya que las pasadas se pueden encolar esperando ser procesadas de forma asíncrona.
Messaging Aplicación: Se utiliza el patrón para encolar las pasadas y procesarlas de forma asíncrona. La aplicación de este patrón depende de la tecnología con la que se resuelva este requerimiento. Puede evitarse la aplicación del patrón si se resuelve a través de herramientas que brinda la base de datos, automatizando la ejecución. Motivaciones:
Ordenar en una cola las pasadas pendientes de liquidar, asegurándose de no perder información al trabajar con una cola asíncrona para distribuir la carga entre los dos servidores.
Cola de
pasadas
Componente Pasada (registrada)
Escribir pasada de oblea N
Leer pasada N a procesar
Criterio de ordenamiento: orden de lectura de la oblea desde dispositivo inalámbrico
Lectura Pasadas (en dispositivo
inalámbrico)
pasadas Componente Pasada (sin registrar)
Broker
Pasadas
pasadas
Lote de cobros
Componente Procesamien to de cobros
Broker TC cobres Web Service Administradora
de Tarjeta de Crédito N
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QXHOVwZGzSI3AJ6yZKI_JEXononw4o8tlGiyN04xY7zU_pYzeAMZqGou2gg_iI1Om0KkNWwHnZ9CGn-L-j8zE4RvyBCGairdECFqXZtD0VzVfcsN2UVxoxfOzakhVYMiSIQKVNg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NvO3M_m751ZETexEpHqb452pIHWiVPf3H6zqJk4AeoKfxcMmUWrcHxZspErNKJEKKJiK22Pq-VOX-wc6DZSwfP5vDz5o7AKOAbc615Zi9VvnNcfBLAABTJYl9B9fCQWbuOoHnug=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hrEoqdhPeXerT2zmjGU_KVZf__cQf_U9EGTMHyZGRT1B3VL_9Apk43Mt2ND5uXs4sko3rcdE9YtdIjMu1s_NagtWt1LFexAlNlHkEED3mJdB13A3C8vhe52wwGslFdjF61aRFsA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34K47tYk2Bs62zqh7lhRnXHwtXE4Wd1IxlpEx2Gn5Sqtf4MPSUeBUPQku1z2V17B8fmxx52AcyppCbM2pqMl5IwcV5tWk0F7DKRGDsPMiilspgVwzxIPCcva1cyLVpiXdmHzB4=w296-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LwRGZw0aU6-0Hqcn7csNP_wyTh7tZlGv-ex0biXDttsda0JhtSqxwEsD2tAtSubkRiCwDahW3EmlhJpGoL1dXfqI7qY_7JfSp5f3VWlz_MKpSF-5CMYiN3jcPRwQP6a1hgaD0Fw=w152-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-EqyjeDQlt5VvFKj0WjWQpdxVe6Q4uAH8QxKdSGdihdBbSmZ_6MQhrgBQ-SD4RDHvVwrt7eszHp_O3UNEIceZXR0_hZOj0yGJMrg6Efesmw32RzfgeFhyrzWUCoTUZerUOyXX=w296-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MwwYUFje8SygNvJtcn61T5aC83EnTKx9whabLdEPl2drj7ERxic5z67ltnrHlaNFb5SMmd9UAYsuoPEtOArp9Tv_SIG157Xl20uAvjONBOa7uWHRwtpklAD-tER4NsuSPOgGm4w=w119-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ey3H22kH105WAt2tqNlnDYZEPXg2hyWMfV07cSnF3h8fjOYuERNkeqm-FKPLnHnuEr9R5069qzCeYKMBgi4kWb9Bg5tLr6c2QvgIL0GauVpeD9CVxph83v4YRU_njEHfWP7x3lA=w152-h146-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04rHPHt3M5mlvtEmbw9msnjvRafbzrKO6Nj_Zz-MmTUmEH9me2ywS6oH41AG-IyHnNrkLkYa727CUxnAju_rn-_3kYg3BbbGWDz4yn7qeHni9FaSG06kYxpi4fVjg8f6AwlU3s=w350-h61-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 33
Distribuir la carga de procesamiento en los dos servidores de aplicaciones disponibles.
Trabajar con un proceso tipo batch para el procesamiento del cierre de liquidación de cobros, utilizando caches de memoria de alta velocidad, y minimizando el acceso a base de datos.
Nota: El patrón más adecuado para este problema es el que resuelve procesos batch. El patrón de colas puede aplicarse pero al tratarse de un registro en base de datos no es conveniente resolverlo de forma asíncrona, exceptuando la situación planteada respecto a distribuir la carga entre servidores.
Pasadas Cola de
pasadas
Componente CierreLiquidación
Escribir pasadas pendien tes de liquidar
Leer pasadas a liquidar
Criterio de ordenamiento: número de pasada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35eoKn31sKNH3OansIOGWw-wcU2aAOIoieVKsX7upNSK6kVUfATgzpiHH3R1WQvyyPXVpkDhEufKXkpcjpvo685k1Yormv4chQrW3Fthnou0LIcf2OrNHxCFug9xT-qOmEJHLIow=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LvzG672lf5vCXzwtitMXosKoW3TrcBMN1QGIBV_xVyTgaKSU8hjmhDx914WhqkPcrhT09rIdit1wM6iTjIcP89uT5EGG3eYHa9P0KbyO14zwdPN54F7Jx0Z38RT-HtVD4Sx_xFA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bj_yTdCrLNwXwzw-oXcWpNmTEq3-rCXDT4-pjaoXruZq0T7JBb2gjFzcffHcWXAua9ww19nWrp5pNYNhKBiGsSCvzjrmQiweidIko8UevE9wJq0zV83HbixqoV1le0wrMfVzntA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nwwELR_C8x6-glJwI3GKa76AZJlTsMF68bwFg6BZxHRVpEAAkApbfbS_eAR_O3DyIjLeQ3nfjftZMMIRn4somVxW85oE4e7PwAMh0M551Tw9h5fPAbn349Ltq5jzJLmaIUVrw_w=w1203-h909-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 34
Vistas Arquitectónicas Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xKStTrwuiieP8-zK69S4d_ZYDR51aFyc3DoVz56bSSzICa8D0uuyj160ixyBlU7tP7zNmfB2IYAQ2FiJWSxGRza0AWbXcw7n10wXMMkq1Rv4JyTwN4RhOxdBvRPv7eevSIrzoAA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yrSzVlkrzwJv0hqz6Y1NVjMXrzbmGpOvXTAd08h8OPVCzzYrhx-HH76KIr_QBESvcL37GTIboOqznipvxD9ejKti_MyWRpPcHLQ17xLYnh2-G4q4dQbah72ENvij0YLXVMKL1vg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p3flKIxMgkmFvKHjDTZeD6U9WL3fAmAT0Aql_P92UeHPHqPHW0_hVlt9yvuSfk_ZjdKAEXuBwNaTPhYu_fRzj-YvggMNHS4kBNvpsXGEjc-RQE7KKYgQHmvBytkGHwPYFfu5c=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 35
Caso de uso Justificación
7 Registrar oblea 8 Modificar oblea 9 Eliminar oblea 10 Consultar oblea
Casos de uso que representan un ABM de una entidad de negocio relevante para el dominio, donde se resuelven aspectos arquitectónicos referidos a diseño de interfaz (utilización de frameworks de diseño, ubicación y nombre de botones, distribución de campos, tipos de campos, formato de grillas), accesos a base de datos (consultas y actualizaciones de datos, gestión de bajas lógicas o físicas, trabajo con procedimientos almacenados o funciones, utilización de frameworks de persistencia), algoritmos de programación. Se resuelven los RNF 1 Base de datos y 2 Implementación web, que establecen la base de datos y características del lenguaje a utilizar. También se resuelve el RNF 3 Protocolo HTTPS.
1 Registrar cierre de periodo de liquidación
Caso de uso vinculado al RNF 10 Performance de cierre de liquidación, por lo que debe resolver los algoritmos eficientes para cumplir con el requerimiento, y la forma en que se distribuirá la carga de procesamiento. Además, representa una transacción compleja del sistema, donde se establecen aspectos arquitectónicos vinculados a definiciones respecto a la baja de una transacción, algoritmos de programación para gestión de transacciones, log de transacciones. Este caso de uso está vinculado al RNF 5 Envío vía FTP a Tarjetas de Crédito. Este RNF no es significativo para la arquitectura, pero requiere de un desarrollo particular diferente a otras funcionalidades. Para resolver esta funcionalidad se utiliza un patrón messaging.
4 Registrar cobros por débito automático
Caso de uso vinculado al RNF 6 Web service de recepción de débitos automáticos, que requiere el desarrollo de dicha funcionalidad para establecer la forma de comunicación con las diferentes tarjetas de crédito, utilizando un patrón messaging.
2 Registrar pasada por peaje
Caso de uso vinculado al RNF 7 Dispositivo inalámbrico, donde se debe resolver la forma de comunicación entre la aplicación y el dispositivo inalámbrico. También se resuelve el RNF 8 Procesamiento de pasadas en hora pico ya que se debe tener disponibilidad para todas las pasadas. También está afectado por el RNF 9 Disponibilidad 24 hs, ya que se trata de la principal funcionalidad que requiere dicha disponibilidad. Para resolver ambos requerimientos se utiliza un patrón broker y messaging.
20 Iniciar sesión Resuelve los aspectos referidos a tratamiento de la sesión, datos asociados (puede ser mediante cookies), gestión y validación de permisos.
66 Generar ranking de clientes con mayor cantidad de pasadas
Casos de uso que representan toda la lógica de reportes, que implican el acceso a la base de datos, el tratamiento de registros masivos, ordenamiento y visualización por pantalla de todos estos datos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mUgXahCUml_Lnfow742tW1RXsi4qfEIcr5vpdjRYH4Wh96xzEkHNVO8O1BjWQUQv3uRRtrDPCZ_Kspb1Zaxj9tSoh5O5tbyW14DpRGF8zlrfqfyOjcKry9fiYGniNeC1e7mjpqA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_GeaI0EESc1FrnZUY6ykLrJrB32s4H9TdU0Fx_cyN0KD-IQIWrzZS5Iq_q1JxRsti3LW9DrgDSpequwln-cxM0i5pJjLnvm1PHjN-gcMb_ZVvXeDHPvWN9mln9LSu6pD1RCkhIA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lpjpQLdH85nwxhlhDji0387z-ElX48X5BHLmNGk0jajgRsAusrYPKL3-1LwpW74XoIzWQGe5UUTdHDa1ta_P0rWCCKsKPjBLPOcQeU076NIrH5xwxY1UGQGI3kzYpTF90C_c2=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3obL213f9Jh9xskE1DlYaS9KFaLsj9HQFdD8sECwf83WtcKZsMZFKrdmtrC40Ea7X6r2w6fY1v0w6dydMUwzLSPhkvm6ZlQZ6WZoQDYG5Q8gxxTFegaF7dTxevczZ-IOelat2BYA=w1280-h933-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 36
Vista Arquitectónica del Diseño: Subsistemas e Interfaces
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Gd1bd_QAO6CGJP9t-w3fPGZKbp2F9F5NndEnCBz-Cmi5Bp5dwlI6oMlceMpFPlbm3fvOROWKkv1tupCtSUKFWyadK-asLdZk9061b6t9VmUzJ8xfBuJlTxWvWKJGtMimj7sFQiA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bErh8eyxFUMDhqedQdrcM1_zrMBu_ZIDhgAbZJENPZNtS1ok4oHVpzvwckODmmjKo407Rw3T3BBOLkEU2Pbntv08nlkcJdb2lywofo64yvYzH-DITjk6qMt1BuMTMVUupPeaJKA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bQtfws2kcrBFFPdIbKxCvFpgLNHKecwJjO6se2Iv6U1NIlZj6XhCEX9vbfDj_bCkKIDh8OSLwshJ9fFBkrwTkAC_XEzb36lgB00R3FB4NIsWE7EHyyAeQt-pJ69sB2BV7PF9l3g=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fJS5fAXU09KL5WbsYkPjKVsKhJ5dlMMeVZ_vq0Xc1aRt7-OQ9PrNV51X03fLLc-f5tOBPTu6q8r6rX55TEtBmFgi9--hyY2Adsf5U5xdmdNRpWcDb2NgexeItHxL6-MfMsxDMlw=w1280-h871-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 37
Vista Arquitectónica de Despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ixZKKzIOxc4XXiXkueXkzLgpCeJ1CbGANOM_gPrXD94-nz8LX-tGeNEPdv2boZ6oLjXdqVtkwHcPSf3gVUrXlfbrDqwqFTENVWJhaEMtb-IWGFOl9iITe1FoAe3pwoHzXB7ZD=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0p-yLoLYCQ3PtghyWRfmYHgVnBhe-JNWoP4qY-t6oGpsjKx5JKTRpgWoT8N3LjBCovJrfx89sPwwVbHB5wU60PmiaKXz7j16f-SgXjBExDBLgVVRLDp_LyVepLBqONFG0sSgDE=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1us3bzFfgzBiuX-1i8piKxhW9l9AVxXBKwcXMtrx7ZPb-Z1u7a2P9XosDa_3U6SsHK615NqCNY63-HOmOqIKhcmZmH802_4P1mnyN8Oe79sZ_DwGpGudqXF1ysHIOeWvegvMe4VQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 38
Patrones de Diseño – State Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TCC65emEiQXlNxP5G2gSE-eNLFqCtWlU2ijdUSWd5i053tFSPNWrQcie2Ces_ZU1HM4UTBXboMALP8aca1oWgAb2UGT_xlbSpLoi7WZde9A4srrtBEaWkvh8hox7-wbp1s4kWAg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gMga_GObfjhcR_qyW-UYHUoYekgqCrl2gf2wbhpFqnXadZobZV0WTBl12J15SYEKBnk39jISMh_MyCVUIbj7k4Kfk55vfsl8bG-VEtjR5VYSYxGu1PiBXE0UdPH3az1HRAucnlQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 39
class Estatica Sta...
«control» GestorDA
- marcaDeLote: MarcaDeTarjetaCrédito - cuentasSeleccionadas: Cuenta - pagosCreados: Pago - período: PeríodoLiquidación - montoTotalLote: Double - fechaActual: Date
+ marcarCuentasComoNoCobrada(cuentaNoCobrada[] :Cuenta) + validarPeriodo() : void
«entity» Cuenta
- número: int
+ marcarNoCobrado(motivo :Motivo, fechaActual :Date) + crearHistorial() + reactivar() + sumarCobrosPendientes() : Double + agregarHistorial(historial :HistorialEstadoCuenta) : void + darDeBaja() : void + pasar() : void + liquidar() : void + mostrarPasadasSinCobrar() : void + contarPasadasSinCobrar() : int + contarPasadasPorPeríodo() : int + mostrarPasadasPorPeríodo() : void
«entity» Estado
- nombre: String - color: String
+ getNombre() : String + setNombre(nombre :String) : int + esNoCobrada() : Boolean + marcarNoCobrado(motivo :Motivo, fechaActual :Date) : void + reactivar() : void + darDeBaja() : void + pasar() : void + liquidar() : void + crearCobro() : void + esCreada() : boolean + esDeBaja() : boolean + es10A20Pasadas() : boolean + esMasDe20Pasadas() : boolean + esMenos10Pasadas() : boolean + crearProximoEstado() : void
«entity» HistorialEstadoCuenta
- fechaInicioEstado: Date - fechaFinEstado: Date
+ new(estado :Estado, fechaInicio :Date, motivo :Motivo) + setFechaFinEstado(fechaActual :Date)
Creada
- nombre: String - color: String
+ darDeBaja() : void + pasar() : void + esCreada() : boolean
DeBaja
- nombre: boolean - color: String
+ esDeBaja() : booelan
NoCobrada
- nombre: String - color: String
+ reactivar() : void + darDeBaja() : void + new() : void
MenosDe10Pasadas
- nombre: String - color: String - esEnUso: boolean
+ marcarNoCobrado(motivo :Motivo, fechaActual :Date) : void + darDeBaja() : void + pasar() : void + crearPago() : void + esEnUso() : boolean + esMenos10Pasadas() : boolean
10A20Pasadas
- nombre: String - color: String - esEnUso: boolean
+ marcarNoCobrado(motivo :Motivo, fechaActual :Date, this :Cuenta, h :HistorialEstadoCuenta[]) : void + esEnUso() : boolean + es10a20Pasadas() : boolean + crearProximoEstado () : void + crearHistorialEstadoCuenta() : void + buscarHistorialActual() : void
masDe20Pasadas
- color: String - nombre: String - esEnUso: boolean
+ marcarNoCobrado(motivo :Motivo, fechaActual :Date) : void + darDeBaja() : void + liquidar() : void + crearPago() : void + esMasDe20Pasadas() : boolean
«entity» Motivo
- motivo: String
+ esMotivoDébitoNoIngresado() : Boolean
estadoActual
1
historial
1..*
motivo
0..1
estado 1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nKSeJFLnmmO-9d8MmGHDLwl3LjxxbDwvky70vNTfmKoRUd2wQHzaW8mWiqq8L-60OXuph0PVP65qvJlP64kN90F0T_Rw-NE07pB0TmUgm6GK7I-SkGS2edMs2LMFZv3pOL5MmQA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38KfTL8cYvE3sHP-FAOBzV_y2JGa6IZGljjOQG2fE9LRqKLYv3HWT0EgbkKyWAKlPoD_SD02O9uS6qTZeXv90UUKhWgBHpCaLcYLijlxoXJrrPoCnlEaGFiMb3Dy124cvQWGYO=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 40
Nota: tener en cuenta que para que el patrón sea aplicable se agrega el puntero al EstadoActual de la cuenta.
Dinámica
Aclaración: se elige es estado concreto 10A20Pasadas como ejemplo, dado que es lo mismo cualquiera de los estados del estado compuesto EnUso, ya que al no tener estado final, cualquiera de los 3 puede salir al estado siguiente que es NoCobrada.
Explicación/Pseudo-código Cuenta marcarNoCobrado (): Delega al estado en que se encuentra actualmente (10A20Pasadas) las responsabilidades que previamente tenía la cuenta, lo hace invocando al método del mismo nombre de su estado actual. setEstadoActual(Estado): recibe un objeto No cobrada como parámetro y lo setea para dejar a la cuenta en el estado correspondiente. Estado 10A20Pasadas marcarNoCobrada(): método polimórfico (en la clase padre Estado tiene un comportamiento por defecto que devuelve una exepción) al que se le delega el comportamiento de la Cuenta. Se encarga de buscar el historial actual
sd Dinamica Sta...
:GestorDA :Cuenta
:10A20Pasadas
ultimo :HistorialEstadoCuenta
:NoCobrada
nuevo :HistorialEstadoCuenta
:HistorialEstadoCuenta
loop CuentasImpagas
[mientras existan cuentas no cobradas]
marcarCuentasComoNoCobrada(cuentaNoCobrada[] :Cuenta)
marcarNoCobrado(motivo :Motivo, fechaActual :Date)
marcarNoCobrado(motivo :Motivo, fechaActual :Date, this :Cuenta, h :HistorialEstadoCuenta[])
buscarHistorialActual()
*esEstadoActual() :Boolean
setFechaFinEstado(fechaActual :Date)
crearProximoEstado () new()
crearHistorialEstadoCuenta()
new(estado :Estado, fechaInicio :Date, motivo :Motivo)
agregarHistorial(historial :HistorialEstadoCuenta)
setEstadoActual(estado :Estado)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eTrVfXqWvXK6OXbgCLHjtFPpUdomNAkhtR3-O8DLb6xMpGv1HizqmJ9zhVkyGRJSWu9zLxd-Q41qEvVyT_zysXNx8i81QJOb7Inu4Z2t0cRhaXUbRPLOJqEc3AHOu4zVaRpYKWg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ticcw_QmDChD2kxm0yDL5_bCEmey14fJizcMjQYYFnPUkZoo1GImHBv34UWXBYuZQwuiZREvaP1Z_1iA3RNl5OLqdfUVeTx_xxF9lkDQvXJbW_IZP0KIERfgdCsSc6-tJ6AZJLA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv024a4TyQH-zuNsXfviCybopBz1UNH7EWB59_udA-Z_OfjaCcUKZv9JYwtqsLwHflYmlDjQAlDqfQDIYf-Ntnlo_5tO_D7FluA6jOcnGvAv0QF_zqEyKqrZt-nmPTtKDdPGrX_t=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ABqdQpORd7ceZg8yQLlWQ304shpxLrImVx8RlZzsMtX2sOkw_tgCYkSIamQZZeBN9i3nfovoHFWl-YZc719llb-ttndV8r7AGDoBfTdcF4nnwt0_uBbN2E7Igc7Q3h2e8pAHu=w1147-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 41
y setearle su fecha de fin, crear el estado No cobrada y crear el nuevo HistorialEstadoCuenta, agregarlo a la Cuenta y finalmente setearle el puntero al estado actual que acaba de crear.
Adapter Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv282Q-4BFfVgvcQPsysHj1k0w-Ux-UNKzyfVaKA2n7lKB5gIZGyVEqZDLLD1PhaziVtQt2P-Mo1dvxSODp9TUQkUjifag_hTooXRxasaVJd_9EwyV--2GHS2ETMqGTcYp-MUDBMUg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24nNdgIumT7CEM_JbFkwRKovfl4vF4MVQl81hfmbYQmOKPk7NsjJZsU9P6k7tKy59aRfi_ngsMvhOEgDpzKushiZBtMlX4PvJmpko2OHqFn3p4MlzDmjGWa3C5CQaJY3jS3ZbQlg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09lqSqBgC4e6XM6U5hHNgP-v3EGIuclYbCP7h8ntTMxiYRampFMtaBw9kUa1NT-yZbtqAR2rVXcdCSFbYR10D48YoFMXCaNXpXibtNxVjWva6LB9JT95kbPHC4cZdU0jHL078m_Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NL2rIYohmpnWXhkpEsdncdE2roija7zhs2Lkv7eelQpg9TqdqRnwFSzibL_3WqzGt27mEb_SNkajw1MOq72qj0C85SlKmvT00ZQOb4I-5fcqJ1oIu9AG9It_6EViLHG9rabfq0Q=w1280-h750-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 42
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-cZUfPajq3QHX1PXdFDSP17OtvroYH9_vU336TzC6oJ-4hBQWOsGLSlXkef_YwBNOOGrNhXkoHiaQW5cVIAVJ6dXIU4aAFehA_FXwe2iDXfZjQu_zy0MQeb8GRmaweN80MyF-Ag=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CnHw2xAdO-RC0f_1mBEajY78bJX0Y18qJdrNtH3pNPDNqo0ln4XHEMRB53Sj7wJyYxogU9uKXzIWBqDHWGXLonGF8QDCyjbTxw9Oyfxl3mS45Xslyk0JhrLJKs7K0EmXmpyegeg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JiH2U6N4xwzRE9jFE7CRLBZlDTjVWnKKAGlbUGX2nuakwTIjfQ81JItNuWqdGvTvOF38IA4yGCo8hhYvaUkARUW0myDZiAYq4LmuuDMad38jV_KPvFMQQXYkfA4NvWAB_-iGWZA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cuvYi5RUQM0JYmVPKCyUo7f2fIVBHAnhZoIxZG0N5iPqJyrkhsln1LKkALqvwjCBZnXjWAGbC7pt9yFJqMEU6BMUuRYfn8Hyqq1Jycr_BT3B2AhwyR_83X2EwdDWEu_uJ3BlN=w1054-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 43
Solicitud de requerimiento de cambio Cambio de Requerimiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RSSyuCeRwe8yIq-hwfvrup1kT6ZPdA8vYC46IpY_uVNxARwHC_FDSkucZqJkxi-Avej1nXg9PPRHGWkpWoJuKfQF_kUlyX1lJbkzTDnnTJcYl4d2TtVK6wItlhVkaM5_rn4SpjA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cgahUxp236BWZDhRf82qQBkHmEqNDH3OitHydRvI7vLkQdnxIubAYhIxRWLVehTEmHv6PJaRrr6oua5-9OWW9usN39Yf17ic4BcAy4LPozkeHIxoMCB6QXnD27EUf_bs146m_bg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MZ4ysMpXuszIik36HlaWNZaHAO_JGiqLoJM9H3Mz761ystGaDWKey2WQb08_lh9zSytXd4ux6XiDWBuqOq3TVW5LJGH9x2KoVWGmy19DLwLUnMmiRzrS1h7Os1tiHQw1HMwUlWA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2y0zTfU_wRnUUL_1rMPvYu20LLGZCDgt_CWVgA_n5LbuUES4fLGZqSevhsxjprTS_wVLtCfu2XFFTLvR0KpkY_AFFEFm_tWTuS7ASnIofdySBfVL8-9xalpzvViql2KGTL6-H2iQ=w1280-h1087-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 44
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Qeb-4Wifz1ovOeKWx4NcO0-7inCnnNHtuBrTZPwF319VltW1W0aBdNlBDCMjmPqycY8tCFtTY0lU6bCLRGuR88JzHFFk-z-bPZKFVlCY88y-HgOuiegW7wf7Hh02TI-wWeY4Esg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mn8OEEaS3XpXTYl7G_y7qUPAuG4NtMcReCXJ-NfM3tlayHE2x4_XZ8Y3q5Z59okfUjhg_W-VcPz3kiKE0GwSf-D03lB3x8LRg60QXAU6YfzXLQ3iwCgW0JKdXwzUqJVIEqDIf=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CSfNhaj4XZrIJswoz9bFx6BXbhBcdM95gye4WqhQZVhMuDSuG-u8DKisQqy2Bw7qnIOlF00mB52jG957TNQyL5656pkXMApA5AlcChhcHdKeGU8LRYpBRHIZveaVOB8A3P0jcMA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2a45TCASDtzn83EvTR_mexthmD9sbN8a3puoV1Vdg1m_SGm9eH6eifGlQ7RU6iVlSlbY726ThVSJDULn9b6x_GGPjzUEn5qDyohqOYGY5uen-kBk-1bomb_5QatHpZfGNGXd09=w688-h436-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 45
Diseño de Interfaz del Caso de Uso 15 Consultar tarifas por categoría y ruta
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VIhRG31hbp9ji7btSB_8AqC1c2lingD7ejmoBp-iCDIq2oO7hEEeCGh7rd0xM0mvaFND87SnUtlXedmyxw3qWsmtcXgFFsn1-z67-EZwNyNk8ymK9tZRpV5p-6LvacdeEHUmSZA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xxBitMV3F3Mqq4lhFPtzVgbMxT_4gls64xZCpMgVI6ozM4akUweOOs6PxxVDmEkA_jVxyqlc4STqOYJfI1WUA0BCi5qe3BdOvL8xiJG6ta9mf3qTOmz5_sENSxPXKEnYHF0R2=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mhnLSviMKnaN6Y-wa2914nccyQoU4Fy7L7WcHriuewbRYF78NjLXVNaaydCzxqYMG5CGI3zLI92G5QKLGx405nI0Ovk8A6DM6HvYBe4E0YFhvXjvQNNAajWf3uhxZ_bv7yyVECg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio: Peaje
PPA_Peaje.docx – Versión 1.27 Autor/es: Cecilia Massano / Florencia Bene Página 46
Modelo de Datos derivado del modelo de Dominio.
dm DER
Cuenta
*PK NÚMERO_CUENTA *FK DNI *FK DOMINIO
Cliente
*PK DNI * NOMBRE * APELLIDO
Oblea
*PK NÚMERO_OBLEA * FECHA_INICIO_VIGENCIA FECHA_FIN_VIGENCIA *FK NÚMERO_CUENTA
Motivo
*PK ID_MOTIVO * NOMBRE
Historial_Estado_Cuenta
*pfK NÚMERO_CUENTA *PK FECHA_INICIO_ESTADO FECHA_FIN_ESTADO *FK ID_ESTADO FK ID_MOTIVO
Estado
*PK ID_ESTADO * NOMBRE COLOR
Vehículo
*PK DOMINIO MODELO *FK DNI *FK ID_CATEGORÍA
Categoría_Automovil
*PK ID_CATEGORIA * NOMBRE * PRECIO_POR_PASADA * BASE URL_IMAGEN
Tarifa
*PK ID_TARIFA FECHA_FIN_VIGENCIA * FECHA_INICIO_VIGENCIA * PRECIO *FK ID_CATEGORÍA *FK ID_RUTA
Ruta
*PK ID_RUTA * NOMBRE
Descuento
*PK ID_DESCUENTO *FK ID_TARIFA * PORCENTAJE_DESCUENTO * CANTIDAD_MÁXIMA_VIAJTE * FECHA_INICIO_VIGENCIA FECHA_FIN_VIGENCIA
Tarjeta_Crédito
*PK NÚMERO_TC * HABILITADA * CÓDIGO_SEGURIDAD * FECHA_EXPIRACIÓN MOTIVO_TC_INHABILITADA *FK DNI * ID_MARCA_TARJETA_CREDITO FK ID_TARJETA_CREDITO
Marca_Tarjeta_Crédito
*PK ID_TARJETA_CREDITO * NOMBRE
Pasada_Peaje
*PK NRO_TICKET FK NÚMERO_CUENTA * MONTO_PASADA * FECHA_HORA_PASADA * PAGADO * TICKET_MANUAL FK ID_TARIFA FK FECHA_HORA_INICIO FK FECHA_HORA_FIN FK ID_USUARIO FK ID_PAGO
Sesión
*PK FECHA_HORA_INICIO *PK FECHA_HORA_FIN *pfK ID_USUARIO
Usuario
*PK ID_USUARIO * NOMBRE * PASSWORD * ACTIVO *FK ID_PERFIL
Perfil
*PK ID_PERFIL * NOMBRE
Permiso
*PK ID_PERMISO * NOMBRE
Permiso_Asignado
*pfK ID_PERFIL *pfK ID_PERMISO
Empleado
*PK LEGAJO * NOMBRE * APELLIDO * FECHA_INGRESO *FK ID_USUARIO *FK ID_CARGO
Turno
*PK FECHA_HORA_INICIO *PK FECHA_HORA_FIN FK LEGAJO *FK NÚMERO_CASILLA * ID_RUTA
Casilla_Peaje
*PK NÚMERO_CASILLA * PAGO_EXACTO * AUTOMÁTICA FK ID_RUTA
Pago
*PK ID_PAGO * MONTO * FECHA_PAGO *FK NÚMERO_TC *FK ID_PERÍODO
Cargo
*PK ID_CARGO * NOMBRE
Período_Liquidación
*PK ID_PERÍODO * FECHA_INICIO_VIGENCIA * FECHA_FIN_VIGENCIA
PerfilDeUsuario
*pfK ID_PERFIL *pfK ID_USUARIO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ubxBtLhULQLNUzWJyFNvVQdET0lsu8G6X_y5X73vUA-QMlfnmkQMzXaFOk4iktowvvUdLE9KUViOhTbtbETbtzVeqqFRhqlutZYMAaWIojA6HIVOGzliXX-av9Rg2D4Yuya9MZQ=w839-h1187-v0?authuser=0)
