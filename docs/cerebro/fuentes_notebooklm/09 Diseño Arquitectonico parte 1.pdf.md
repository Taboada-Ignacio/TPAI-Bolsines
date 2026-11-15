# 09 Diseño Arquitectonico parte 1.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla los fundamentos del 
diseño arquitectónico de software
 y las responsabilidades clave del 
arquitecto
, quien debe colaborar estrechamente con el 
administrador del proyecto
 para planificar y garantizar que la estructura cumpla con los objetivos. Para asegurar el éxito del diseño, el texto explica que es indispensable realizar una 
validación rigurosa
 mediante el 
uso de escenarios
 y la 
construcción de prototipos
, lo cual permite anticipar fallas y verificar atributos de calidad como la seguridad y la modificabilidad. Asimismo, se examinan las características fundamentales de los 
sistemas distribuidos
, tales como la concurrencia y la escalabilidad, advirtiendo sobre las peligrosas 
falacias de la red
 que todo desarrollador debe evitar al diseñar arquitecturas complejas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nwpmO-g_xqThIMp1AjvEkiKApBOTKnhGI63w0dP-r9GlU4gzUkf-jcWtRE-VqSyiMv3UeGTm42cAHqh0cJY1qmGLFvOlERttnfswdSsnkq-_k5QhXmIscJ_3uJSWOXWXYaYLM4Q=w1024-h768-v0?authuser=0)
Diseño Arquitectónico ó Diseño de Arquitecturas
de Software

#### Universidad Tecnológica Nacional- Facultad Regional Córdoba


#### Cátedra de Diseño de Sistemas de Información

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RhXtURmtA3h9YhNQyuRmVZwDnGFoco14AgFG-QUWf-_n8eAMCtzO-lijNYl0PxOEeJmY7ws_c9c0pHuFwcVf8Fa6nfpKOPK6sQesBT8JCdcodcEfxFrAK0W_CB_AGOmTk9oEX=w1015-h571-v0?authuser=0)
¿QUÉ ASPECTOS DEL SISTEMA DE INFORMACIÓN SE DISEÑAN? Arquitectu
ra

### Datos

Procesos
Experien cia de
Usuario
Formas de E/S
Proc. Manuales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QI3eaXbd5qrL2pZIoOUMM31jFI2sbFHicpst2xs0tMoq-WVsD7QoypcmrnMSKC5z8sgjLEQ42zduxGW0WBRa272cTR475xEAtbP5wr4NonTPtsbwf5EJpComdALoaUL059k4xeg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aCLI5TLQWbL6rTtXOFR9WD6Cp-UygUDhCRcfIcLcLARWJlxUqj_EPrtvBp0jFCPqsl1utH_9JzzbQTRTpiDx9OWHhY6sognvz9tL1E2d6bG_9eqmyAo5ilLyl344nrM2bkCAqQQ=w588-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-uNP8ouPoq5ALURWXZxYsIyT5jRMN8xByqNYFpTzY9RqzEs4pQYcNHN_kX2fhARLq4Uirq_677ND0BSfWxeuPm8ZgcioPrP8IR56X-JsiIYpPW6vxrvgsySpdfWzNnH-TE5e2mw=w138-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PSlUWUVPXBDFUG25KaQXvkekCfUAX-PBqyvp9euS_a4VA5GYgGyyUdwge9MZUH8lN6PhNwOEn1wggLILfJ8F_XWVauqsayJYsmJsJLI_jfvTSuoKAekIBZKQsLCj73BkgAszY=w432-h432-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tPjY_XyMqjDKDq2FG5hIdKj_t9fminq6eEhMSzphOSVszU6xcJeB43u7bpSKS4YnSrJMO0Xl6zC8BiNyVxhwiZ_AaWOpVd0XymmONHoTWDL-WZ2HZpYRRJU6cmgvBLcgHiFF_=w521-h521-v0?authuser=0)
Arquitecto arquitecta arquitecturas
ROL PROCESO Producto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MA2Hw-CztLGdAO_ovrVHSU5jDwZJwS1rWEnJ5Vd1tsDwptXINZu1vSDKpweUmzlRKwcCVHPFPq-jo1c3HyLny2zdrIiZEp4uQfxxkrwvONH74DHisd1DqDXEpMIvr0hgl-I0STQ=w1015-h571-v0?authuser=0)

## El dominio de la Arquitectura

Cualidades de la Arquitectura
Procesos
Representación Arquitectura

#### El “que” El “porque”


#### El “como”El “quien”

Aspectos del Sistema
Arquitectura Requerimientos
de Sw
Atributos Calidad¨ del Sistema
Satisface
Restringe
Organización
Arquitecto
Habilidades
Involucrados
Define roles
Produce
sigue
DefineTecnología
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RViK8hgkTB_t8IirW8VHFCTPU11Kgu6_eQ7qBwvw4T8brVierH_VEaNasUwyA_InM4SPxz8wYsQBaQnlgopz2CXCeFJvJrstMXxc_erHx08dDd88EoSQWYRW9zoHO8muK49PaeA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gIpQFzBrGdK0a-dg4JkLttjzXI7on7I_-K-E9KvPGLotLZnySNIevRj4N_Ip3cd59PTHitF3RMkyZUk6Xb9yxS_405J7thVRgiEUdhoMlyQTZRmMTDgV3wg8ScXolJh7tJy-9FA=w588-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iZ4uDC-LZXvg-ytOT-Ev4z1Oa10A3sVRrqmDqddZibesdp7Yql3y56uO9o9AUrVys6M-uWnkTrIlPyyP2hkwvjLccwpUB0mgxoeAhcIZRGb4lYjLdSKlJLpVPm9az6DNeFBLJfg=w138-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MZl6AGNHAH-MSbsgYFHgNE8eMr9s3YBPKSa5R5Ighc1JWNXZ4FpF5WsHxoke-iWF4_JIC2ldo1wfqozY9AmlxOI8hIJ2dx4r2ZABCbSMdNH7MVEK6zOnjWWjd4vyXP-sHA6xK=w432-h432-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AbUIHffR3o1q55MZXjwyANaZJu0NdaZtX4IXdGepRRotAZbTRTFV7Dov7GUSBQOZ8bx8T7wqc2xHB76Exr9RBbbnMXDQJLPPEksswCx9MNa4sUlKtFeBKcNo19kS-JVlMyebjBA=w521-h521-v0?authuser=0)
Arquitecto arquitecta arquitecturas
ROL PROCESO Producto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DD05HoKBCO_H_EzU5xhyjJIzVRxjLvkKdpznW6G8PYH1brcUlIszqDSeh_OcBw2GlHaJFID4cgNXwcsVFK1ik-6IvixSYkVWYY1UpjjO5sWk0x_WS1Kdos63DQz7FyugxHdrc=w1015-h571-v0?authuser=0)
ROL DEL ARQUITECTO

### ▪ Revisa y negocia los requerimientos


### ▪ Documentar la Arquitectura


### ▪ Comunica la arquitectura, asegurándose que los involucrados comprendan.


### ▪ Direcciona requerimientos no funcionales a la arquitectura


### ▪ Configura la arquitectura de hardware


### ▪ Se asegura que la arquitectura es respetada


### ▪ Trabaja con el Administrador del Proyecto, ayudando en la planificación, la estimación la distribución de tareas y la calendarización del proyecto.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rWIGd1F-39s4M2XYhbrRqAduTlaJCYp8JTGUQQJhluk0hrs7kVAgcmOZcwtnzEN8E1nx-awCF2qqDdJh4kd2tfFYs0YSIu8LTcydd3KwCAcKkU_p9ixLMQzeJnLA9BK8NKiQntg=w1015-h571-v0?authuser=0)
REVISA Y NEGOCIA LOS REQUERIMIENTOS
Arquitecto
Arquitectura
Sistema
Software Architecture in Practice: L.Bass, P. Clements, R. Kazman, Addison-Wesley, 1998

#### Ciclo de Negocio de la Arquitectura

produce
conduce
Conductores/ Fuerzas de la
Arquitectura
Complejidad
Funcionalidad Tecnologí
a
Habilidades
Procesos
Organización y
cultura
Calidades
Consideraciones
de Negocio
ARQUITECTURA

#### Arquitecto

Documento de
Arquitectura
de Software
Modelo de Diseño
Modelo de
Implementación
Prototipo
Arquitectónico
Modelo de
Despliegue
Lineamientos
de Diseño
Lineamientos de
Programación

### Descripción


### De Arquitectura

. . .
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv271PYWKpalJCxVZW5CJvHWdynml9gRxNKc0wM6imugEGVYkglBDKuPAPZ_iY8qmYEOToI0G6yrJCX1Gzu6DpRU5kcYSKst5OSvS0yGQiixZNehH-srLESQcdYsJMfYobHrihcBYg=w1015-h571-v0?authuser=0)
COMUNICA LA ARQUITECTURA
Usuario Final
Desarrollador
Ventas y Soporte
de Campo
Jefe de
Desarrollo
Administrador
del Sistema
Funcionalidad
Arquitecto
Facilidad de uso
Performance and Carga de Trabajo
Confiabilidad
Faciliad de Personalización
Precio
Costos de Desarrollo, Habilidades
Entrega a Tiempo
Estabilidad y Mantenibilidad
Facilidad de Integración
Facilidad para diagnosticar problemas
Facilidad de Introducir Modificaciones
Facilidad de Prueba and Maleabilidad
Estructura de Dependencias entre partes
Facilidad de Instalación
Cliente
Responsable
de
Mantenimiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12XGaEvwTuZ_NGTCctGPRtXO3j2vc_cdQndzv6z0x2y9NGVG6gi6Q_YRNHeX7Ol6jUc9g4X1GTSn5jmWUcWJmCan87RzdrYDDACT9EoL6Kp0o1Fqh5PV-HJuMsivThWjMMn8i_=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pTNCRUtee3YifNT0l-uRq1NxRANqntS5bTn0PKQ_67US7ci0ZGmY88T9nbkTynaFVwYFQXlrX1-ulfNmsieQcIbwl3TYaBe63udZkk4R4JTsCcflLyLqtB54zwI37Yc7jajer=w225-h225-v0?authuser=0)

## ARQUITECTURA (BASS)


## ▪Comunicación con los involucrados


## ▪Análisis del sistema


## ▪Reutilización a gran escala

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Nd9ws4T7loWbXm7GkNiXpjkhn0rnymR_ZJ5lh2YyC2X0v_Zla7PDi7P0OqtKnohl8KxUpOZZPLNybZldLjvibuy7tZMiRdHW4z1VJ77Z7sIc04pD52y_FTR2PeA6U97-Nskqc=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1v5s1iRByZAc1pFe7FVogtEdPeFDVDgQ7yHmhJiF8EV8MSpJLHDZIcu5v3RhZ5oosg5-QsHXScpm67BY_AvCmR8-g7RLCsAXGQ-7kp2OGrSg8f1iagipJ3sLlfnT5brKCuBrHXOQ=w588-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tRrbZYP_4SAf8BqyKEqRSxUYDyyv4aWwJvv4HkiDoy7L5pEuCy20rb6I92JRzpKUyoLL6Z6mSWkqafIWtlPwFun1IKLY76rBLwRepfHr8gHWM8TL4OT_O56Lm30dhYKmGMfmxzw=w138-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3x83vsatyAiO0EWx074iYUnj-osC0eo5MI99hpanKD9WfsstcNQeJkzPTFmN8xju39wlBa6mNYYes5fhGmkxSrnmua4QaeJJIAbJI3flk9lHcFU7rKLt4kJQeFp-DQujH4e4PRJA=w432-h432-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jl9t-GuoV16vZ_rgwuXSIsLP0SZZDr2RSZ74yex_KclDGTGqhHXXUIHjaOv3USCeJRGFjimXPHz43sJc7ZMpvEhUhnjiI0cClOO0_8vnAz1aKCyvdSU1hRV3ZEFonqeVx4RwZ=w521-h521-v0?authuser=0)
Arquitecto arquitecta arquitecturas
ROL PROCESO Producto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_OXbeEBjSl_BXja8eVLcHpz12wQNHB_owaiq6PeEEnnK4PlDbNZNz04gHvcYjc9xwem8D8WiqE9kFTGtmGN_bkBj_m8f7_UaVdSbVWIaQvhiGGQneIy4k66YC-H1IjYJ8xle0zQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3u6IoDWVJ5LstZqUZ0QUA-gQH6mD2FlMwltSXSbLUUJzuKQKfWcKPtAB1gfMlV3iN6lNvcTyW3wAB3LaM-55xdcTmCHv34lO6EusqtHy9ho6RLc6xVyQLn0s-BGygFTCcBEKD7rw=w206-h118-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z4o096Y2n1zQFDpiE1sbi4uDAWinRYHxmB13FED_q6u0hAcvVce0DcsCv2S5opvw6lzGLFvJFt37Btgo9bygsXI-rZN7-Tr7sf_V8Ix8yBaRetkUTa0gheNMduQfunY-v6QR6lQ=w206-h118-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LMq7d4ldO60oNpkp0OUPnDVzyXMVcbW-j8EeLA0nMg39Brg9V1J3VbU9hpbOrRJDR-i62Qbzrl4wjvPQ3l9YDGwzwqXtaWKQCuUR06_93MAV2qmED8XNIdzgGadijo8CtKPLO=w206-h118-v0?authuser=0)
ARQUITECTURA EN CONTEXTO
Análisis de dominio, análisis de
requerimientos análisis de riesgos
Req., calidad
Modif. Req.
Diseño de Arquitectura de
Software
Diseño de Arquitectura de
Hardware
Arq. Software
Modif.
Arq. Hard
Restricción
Diseño Detallado, Codificación, Integración
Testing
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv102TgBH1Nkt1_Y0CC-qmNbEOaRaq8UdA-bo_ckvqGq_YvFLtZVsgsyd9kT0n9xQVQ-f-Xsr4_qwJe-Bk4IvSUqJAAR1kyUGamzFPck5Xz-2PeLLn1qPM_9joVEY0A93m3V2Lwgeg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ifzUos7G-SyyfAaO_079W9o3kbbgC9Q__HVK_ier7VHgZZXrK_bmw0bzicTVHwYTPgq5JMXwsQH1Jmo7jy62kiUAypOEnxhBqm3iS47JzCyvYVhcv0y16hdMAYEQmLOQrU0vLNw=w416-h234-v0?authuser=0)
PROCESO DE DISEÑO DE LA ARQUITECTURA DE SOFTWARE

## 13

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Vq1-asRtkKvuXmYHekoLBqrIILWEQhDSDjNy87nU_KfMCl937wLv_AF__Vv5pJhHFVHTVwAwsLO-PHrRscnVODBPwFIj84_ejDkvNQG6XaiDHuqTsrOU3OBb8RAp2fDw4WpPA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dB7oXZfGpzbcs47u0Qs2TYGmL3-6zfXZ0jeTBkgk9HGm7jgV9iO3fKLcpQLRSi7MEdWeIeYbq4r67RoXELLlvJa7EFmDvBZR9hxGQDrUJXJZaDJlPCOWW6Z5QRwKCx5-IgISJIg=w866-h396-v0?authuser=0)
¿QUÉ ES EL DISEÑO ARQUITECTÓNICO?

## Es la asignación de modelos de


## requerimientos esenciales a una


## tecnología específica.


## Es el plan del Diseño

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PGMAtwhUFJIFa_4ehz0N32PQezj9RFH0dkOFNIk0bA1PFGE3San9HkNX1Tj-sY4IhsRWkl83B7s6OVD_OBfUzTMS8P-5LY7QppMqGNL5DJYQpxgwqzGbVdE02p2yP6q1D6jdvLw=w1015-h571-v0?authuser=0)
PROCESO DE DISEÑO DE LA ARQUITECTURA DE SOFTWARE
Determinar los requerimientos arquitectónicos
Diseño Arquitectónico
Validación
Implica la creación de una definición
o modelo de los requerimientos que
conducirán el diseño arquitectónico
y su priorización
Implica la definición de la estructura
y las responsabilidades de los
componentes que constituirán la
arquitectura
Implica “probar” la arquitectura,
comúnmente recorriendo el diseño,
contra los requerimientos existentes
y cualquier requerimiento futuro,
posible o conocido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2js08EdqNGlCSO-XvFF_li5X-MMKxLc8Lx0n6x6KEbUgtO4lkjkoKmSFrbMKBdPJAovUstFlaT6xaP0ZW3F-Ft80jEyr104ey6-6lJpFkPbx4G0aqJMxKudRU6Bjhas4tWKFfA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27V7qscUS6JhyVk6q-hzs7RmaK4ZUzZosCUM_ETSJHbE4jT5quYBLr7bQnve7xZqEXzmTkk6Rf2mthSaA5srPA_26KgISRX0zZnkkPCZumJCdGMwnocT5s_wGUDyksqhArA117=w1280-h720-v0?authuser=0)

## ELECCIÓN DEL MODELO ARQUITECTÓNICO Y LOS REQUERIMIENTOS NO FUNCIONALES


#### ▪ Desempeño (Performance): Si es un requerimiento crítico, esto sugiere que la arquitectura se debe diseñar para localizar operaciones críticas dentro de un número reducido de subsistemas con poca comunicación (hasta donde sea posible) entre estos subsistemas, es decir componentes de granularidad gruesa para reducir componentes de comunicación.


#### ▪ Seguridad: Si es un requerimiento crítico, esto sugiere utilizar una estructura en capas para la arquitectura con los recursos más críticos protegidos con capas internas y un alto nivel de validación aplicado a esas capas.


#### ▪ Protección: Si es un requerimiento crítico, sugiere que la arquitectura debe diseñarse para incluir operaciones relacionadas con la protección se localicen en un solo subsistema o en un número reducido de subsistemas. Esto reduce costos y problemas de validación. 16

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3k_rKRYslRSZ9KK6j7mjg4AiN09jBptR2pW9Mbn1pXkocK8lReMUsvDek1oIVjqjqjhqNmNydH9JU6Aq4zKnZBFD-b7k7Y4n8kHXw95rCVGWPHcih6_0vfGHmPxiRKs_iUQLvP=w781-h1152-v0?authuser=0)

## ELECCIÓN DEL MODELO ARQUITECTÓNICO Y LOS


## REQUERIMIENTOS NO FUNCIONALES


#### ▪ Disponibilidad: Si es un requerimiento crítico, debe diseñarse una arquitectura que incluya componentes redundantes de tal forma que puedan reemplazarse y actualizarse sin detener el sistema.


#### ▪ Mantenibilidad: Si es un requerimiento crítico, la arquitectura debe diseñarse utilizando componentes autocontenidos de granularidad fina que puedan cambiarse con facilidad. Los productores de datos separados de los consumidores y las estructuras de datos compartidas deben evitarse.

17
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GLTvbtdsc2LR0P3dt8Xt2PRINn0iDoaAXMzYjD7w_HkWdTwA2V-7veYBtamXjp3BH8lb5GFXMYhFc7wIExFToEpG4ShjgRONcNQhslO6T58hUfiVAmGLVEaJDcBFl2MtAhE5BVg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aEH0gXY3ihW0Em4D1Ac3-xzmjvFa6qhMS5F7hmqfJgKvTpZVuxeTBJgP8h4C-Yw5Clhkc59GccoqkJoHozQynbFj1Dzgm4FwvaA-zd-sTLMHZlr6uA0Etw8Djme5OWcuOSg6Jew=w91-h91-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iE6KHVix76LBMCoZ5hldulLSQBHkcnjpU7eWlLADdjfVj9Hn9HhR27UGfbjcuVHbkxQyCIh_g5qAGioYFCOJvkONaxsIvqM3YujIGXXGm2ZHnHvlVpdYk7s6HkojNGKnh-GJo7Q=w91-h91-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv062I06cp2eSN0eE4QL3D39jJmB-BaDpv4bnLVG-RtQeyB4OFjAwMr4RP8gTj0kSJMX8sLLC4BlimLBUV6-z7A7DQRJLoGsPX4fF9yhhwaFyCgFenRkOEd0jDxnc9FaIyNJ2o-S_w=w91-h91-v0?authuser=0)
CONFLICTOS ARQUITECTÓNICOS

#### Utilizar componentes de granularidad alta mejora la performance, pero reduce mantenibilidad.


#### La introducción de datos redundantes mejora la disponibilidad peor hace la seguridad más difícil.


#### La localización de aspectos de seguridad relacionados usualmente significa más comunicación por lo tanto degrada la performance.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kb2pH0jZLTtIXTa4SCPKqDyxGsllIWpaTMx1laHFH1BkW8bSPujRaCH53fEBmLbcA4mCYQftzN4McPJrDbYsbazvKuNr43oag-SYJLtV5CnkCPnHR649vFKS0fbh1KPK7Q1-BXA=w1015-h571-v0?authuser=0)

## PRIORIZACIÓN DE REQUERIMIENTOS ARQUITECTÓNICOS


### ▪ Inicialmente es suficiente ubicar los requerimientos en tres categorías


#### ▪ Alto: la aplicación debe soportar este


#### requerimiento. Conducen el diseño de arquitectura.


#### ▪ Medio: necesitará ser soportado en alguna etapa, pero no necesariamente en el primer release.


#### ▪ Bajo: estos son parte de la lista de deseos. Las soluciones que los incluyen son deseables,


#### pero no son conductores del diseño.


### ▪ La priorización es engañosa dado que los requerimientos entran en conflicto entre sí.

Determinar los requerimiento s arquitectónico s
Diseño Arquitectónic o
Validació n
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1i2wQMDFWgQjls7Z1fUN2DCAyxbhnw5ykZKk9zEBEJ9GYfX7GdkDG5coJ1rTspzzskUe5tQ_rHizhTa1uZeOLcQXCiqmala38dX_ZnyL9aTm-FwYvXO1FDOyMzFl1Z1_CDzK1zuA=w1015-h571-v0?authuser=0)

### PROCESO DE DISEÑO DE LA ARQUITECTURA DE SOFTWARE ACTIVIDAD: DISEÑO ARQUITECTÓNICO

Requerimientos de Arquitectura
Vistas de Arquitectura
Documento de Arquitectura

## Elegir Framework de Arquitectura


## Distribuir Componentes

Determinar los requerimientos arquitectónicos
Diseño Arquitectónico
Validación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WjAZX92Mw65P2eMTVg5BoJG7XOAMUnGB7P-Atda6t0bhf9ZQGf6yellJuZZfEaM5uYN03qibM2cep7XbOSWvA87fDd14XxUxRqufkNiTP8xRRoeUTQRVhyNkgEKIsXABT4jEx-g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lGSezrRgkhslAPZLJ_udHXXW_xWwsYDqW6JB9AVx0hpTOMaX9692DAEKofLcuE_7LVh4uPZqFWF2rh9PjOy3C_sRrG5Xr4Yp_ttaaFd3MDVnz5PMxWs2Bnt8--zBDHbcQQp0IVA=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01fgmUFAvWNYTigTclIjMfPUD60Ju1ylUV5xEpM6wTjcIt3TNN3JNiLTnOPrB22rarKcES9qSwOOuDooRikWJdQed0JSDPuacfeEglNirgjNbTtD185ujcPVo-qlkC-M5joR-w4Q=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24eOOtA9b2AIfsQDNTZ31o3HpceUDZol9EW1mzO2pBpbQl7AoFID_eEUt3kMsCscKm2f7eYdPVKufe5D89bT7rwx_2FJ9zKkXofBuuEYktyrDXPTtcHlvv-ZH1_gNHBUu7QfEQYw=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00ewB4PufCtARkr1UHQxrNg4YiQ8A2rGC1KBEaapQnOLDj_VBeKRUOHHXD3J85RSsklJ9G0RxtAmV839Lq2Akrnixsxbos9mCA79aqt5hyKytbHuGcuDPIaf9iXneZR1tOkoQx=w140-h140-v0?authuser=0)
ELEGIR EL FRAMEWORK DE ARQUITECTURA
La mayoría de las aplicaciones
responden a un pequeño
número de arquitecturas
probadas y bien
comprendidas.
Utilizar soluciones conocidas
minimiza los riesgos.
No hay una fórmula mágica
para diseñar un framework de
arquitectura.
Un pre-requisito: conocer los
estilos arquitectónicos
principales para abordar
ciertos atributos de calidad.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YC9wrb_s-7nj0-IkTezFGLuFK99Er2iANZQhGvKRi_32dGl93c1zmkwck6l9Og33l9S-LOrX8_t6lTV-VAela1NUAmae2bdrd1KwaFm2-Bb2esfil5PIxwWPnu-c-bCNR3VZPVA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iFNrgUx5k2U_31fzg9PGcyKeycu8YoQ0_fayFpji4i0_XpSIg4oRAf-GTPzoOcUu-665x1gP1R_lIGPWhhnhau_9NqvcHyg-h3R4CCr6j93YKS56viEj02U16lPTwqGQi3NhaXA=w781-h1152-v0?authuser=0)
DISTRIBUIR COMPONENTES
▪ Ya se ha seleccionado el framework arquitectónico, basado en uno o más patrones arquitectónicos.
▪ Seguidamente se deben definir los componentes principales que
comprenderán el diseño.
▪ El framework define comunicación general para los componentes,
además, debe identificarse lo siguiente:
▪ Componentes principales de la aplicación y como se insertan en el framework.
▪ Servicios o interfaces que cada componente soporta.
▪ Responsabilidades del Componente, definiendo que será invocado para hacer cuando reciba un pedido.
▪ Dependencias entre componentes.
▪ Particiones en la arquitectura que son candidatas para distribución entre servidores de la red.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cUhtQFmFa0ybmcMZjJFOsCS1zOGBGNNzqU7IF7JDM-gR5ZwqXJ7reL4yHUL51t_h-cKyewmDbVO6lZOECTpiIUNrtFtNynD--SxHuG_pX2Tvo9qfM09xGoSLH0e-A97HEzexJ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J2radiH8nTejt6xxLAzGdjyZjy33tTGMs7mCRHtp9DuU_CXdz1kLC7HlJnFITRGoAPZcFs9jz5INNzTswtLggXvsMet-91NtBRgjnz5mQuDjXCwkvDy1MO-WGeNbze_7w4M0K=w781-h1152-v0?authuser=0)
LINEAMIENTOS PARA EL DISEÑO DE COMPONENTES
▪ Minimizar las dependencias entre componentes.
▪ Recordar: si lo cambias debes re-testearlo
▪ Diseñar componentes que encapsulen un conjunto de responsabilidades altamente cohesivas.
▪ Esto limita los tipos de cambios y reduce esfuerzo de mantenimiento y testing.
▪ Aislar dependencias entre el middleware y cualquier COT de infraestructura tecnológica.
▪ Es más difícil de construir, pero introduce penalidades de performance.
▪ Utilizar la descomposición para estructurar componentes jerárquicamente.
▪ Minimizar las llamadas entre componentes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26VOg4gz2YI6wS3-dDvv7AgdmCS--cvDQ-vV0flEUYnID7_bT3IhyDnbPODIpmxy2DOVEvMtQxuEjibshnPDmj22MAYvk358AElS9c5a2LHQtzdeFgG7Mj9DZFWeObq3Cteunv-A=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_mSAG-uy6hD4jqpX0GGA5Sx-RmJ_N7Y4KH2GNqnsA9ABRuxn2yk4aswHe3lR-WjsOuRWrFsjTOEO3yqblaIWVgWeSA5PLbzGP3bpqWX8bDQj24FOKSTMVhN9yjSSkuHNmjUOk_A=w1280-h720-v0?authuser=0)
VISTAS 
MISMO OBJETO, DIFERENTES MODELOS PARA DIFERENTES PROPÓSITOS

## 24

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n2Qo7zWMU7yUQuRVbaLIsHUF3pnw6Ri0Ww0KyjP1cAs94sPZE2NbJ9xmPbTsKm0LG5r6Hqb42Fqp5cWCVxqfsO1xa3Xr5P0cazpSH0ntqKsVQO4C2UviJofLil8Npqjdw-kNVYw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3awVdtp7HFku0y3aKTduSXj3LW1d0dxYAP31LyuXVk93GjMnu_9hdIAeeTpoCdwU34ihJfVprPYOZXCA3jekGsjYTrL7BI-V-wXlHdaONefsCopycZ5MGT_aXlPjh-3NPcQs9C=w605-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oLsX5jwSaWuFFBxub2ZrUcESatyuKBOtwgSvfZedrCuiz7kPqIInsbDgQwTXFyV_7wlTVFb7Hhtf84V3VXCpN-Q_LJlcGj6NGBe_vc6cRsBPAxlbk_dNyKzJfnxXu_I60Y--aeg=w591-h135-v0?authuser=0)
…

### Vista Modeloi


## Involucrado


### Las vistas son proyecciones de uno o más


### modelos para un involucrado en particular y


## Punto de Vista


#### <<define>>


### Modelok

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37vv1zCuJotKKBM_DeshkiS9zF4JimWWZpijAR2W11VIclaGIYyeXK9OORFRGwZhx0JqC7aSPD_KQqy88CnBmm3ehK1N6gDwXoDJUuFh-aepC3DBMRuQNzGfHLwpTLonxnEJqdCw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZkCnJcYKO8ws5qMqf_Akp0b7QkPvN-nJwGMel9--WEhpBzGseDwFobhuxxFuWsujWlJBmP584m8t5cG2toIacGGM-MHdfEeR_OBYu96yqZuVGqgxjd8h2Joqfzv2OV8ehxTPYrg=w171-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23kcxjDii3b_-NUJJ_GxP11DKiWA77CoFH9tpn-WhYV7C_tQoOHC4dLwfJLJSr_BgEXCMP5NraH_6-vbG2PQO4F_D6Av0wtMuPiZ9PbRE1kA0nhXFyYjOUqtk7aGJlGr348eo9=w171-h158-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jCPrw5fD5pN4uF2M01N1xnNkrJVzkRZsHBEXewpn5pjXVQFeofyz4zZO7FTdCwKAxLjywcIPGSLCNk2A5nJfZyoHEkPtMTxJOgh8XTEX7PMq9WN8rzodfePfs-D8nmXofzRAR3w=w171-h158-v0?authuser=0)
MODELOS, PUNTOS DE VISTA Y VISTAS

## Modelo


#### Una descripción completa de un


#### sistema desde una perspectiva particular


#### y a un nivel de abstracción específico.


## Vista


#### Una proyección de un modelo (o modelos),


#### el cual es visto de una perspectiva o punto


#### de ventaja particular , que omite entidades


#### que no son relevantes para esta perspectiva.


## Punto de Vista


#### Una definición (o


#### descripción) de una vista


#### Contenido, significado y


#### representación (lenguajes, técnicas


#### de modelado)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YWdC9rMphkTIkyf8NjBYb8ObueJ9GK1XbK5bkGas5QYovNYRcHMu5ZY0eAIx2W4EB2btjXIq1gySHBUwA1kPP5eSOjLmwPBMo6LJ-tW6UOpzFVQzeFYz2d9vrO84J1Ota7mP32Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_KaUWmVpvinxBCfaW2ElpUDgTMjVx8GiiRsQvVrxDpL6qj6fyLF-6fQTwzhgaIW6ygAOdBK43s94ovE10Eqs8OTxkBF4GGLczmXIZsUVut8tq3YGxblGqpuGgyf4-oYN7mSfn9Q=w992-h727-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YMPH9O5pMWSoUwOmhdXUHoVi6_ub2qPSx6FdxHfvupZl2JZuuDLLjrqjNNJmvQFof36JDdbmD4dwD4mU8MSHvO_wVsyQJKif0F6_S0N4ucO3WNfRfFqbRA5Vc0T2Zceu2nlUU6w=w72-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CUqvA7okxCtIfECE6TjH4aSS21Fy3Dbn0eMgcVTDfLq8ClQUTX1leFFJn3vpmQYb3vgFxTdP6T6SDM_H78dNh6FwqoObXYgR24rA5T4YuhxVG42hBPnzguRgJ4_DBFrv19Ijf-A=w68-h65-v0?authuser=0)

## Vistas de UML 2

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2am8mIaXWjqdmybgpJDaYPnqquZnvfrPIAvnIanOePjat09AOBFsSZEkvkvG1oHFwBtxsqONjOTNvRISOvH8jlbh_qRfB7SbWeg00BMpzjKZbVr1IOMbnYDQAS58Iba2nTyjpfDA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PwLuAuUXoqTxDJA65WP7PFhFYOKv1N1o4GwfKma2I_3V-fyIr9cr1X6of1pO3XnYNDCcw4Yp6hrzYpjGK8xhEYridQFZE0xyx5jA8_QukcWOw0vbc9BnX5OFIrDnrVQnJz1wuDg=w820-h462-v0?authuser=0)
VISTAS ARQUITECTÓNICAS
Ing. Judith Meles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YjOBtpJG0N-taKHRjLr3S7fEvqkvOz_sK-dgXLS8_EBk7ANqPrC5Ae2geaLGnH31I-NF0b1O3rlxHkHFm40YeYzDLLs5G8nJg2MghU9kPl4wO9PF8e_lrnW6H9tMhx8Jyt0wkjQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Qhl0xIHu7wafuevM2vRVjTGDT82w5T_sw2k5dP1udqd8ILzwZYdIgk1C1jpgNXUU2guV1l3B8p-RPfafTihTG78URBlyScPwnSLCm8q2oBVL6qpJhvLwizkKrC2CdbQjwMduu=w227-h134-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OmJIlgRydPWkQ1_Bai56wood77YDP7OpxjuypejMCcbpKLbN-a1ELMulFdpIAwFTFLOEjCbO5zdKL9WRqaTkMd1Q7cp2fwX0ob0a5HnatiTAe2QX9PvvsGCntRcc8S1WwgdPzzA=w210-h128-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv028UBlPJfVtRn28RwF072Y5u-lteUTsP8EEVhQgeLpPCgKvCi78G5vCo-77vdH8owixdnNKd7aUpL8KkcOwXXcSIPZPw-Bt8CPC3QNiCNfvlJzBqqDy-ExAWMAtUSNY07A7wuWmg=w227-h134-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UJBZLyscyUospyGOtALsnb4N83A1YAf8PEK-cj9UYFxiEQakJNiTrLjmm7Vd5tlOx7web3snDueu4M-0h32PUC2VHpNG7r0fXM7as126xE0XolQZgvGQqYR7ZIdr7n2EjllQw=w261-h121-v0?authuser=0)

### Vista de Diseño


### Vista de Implementación


### Vista de Proceso

ComponentesClasses, interfaces, collaborations
Clases Activas

### Vista de Despliegue

Nodos
Vista de Use Case
Use cases
montaje del sistema administración de la configuración
Topología, distribución Entrega e instalación
performan ce escalabilid
vocabulario funcionalid ad
Comportamien to
Vistas en el PUD
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XCJfaXyGrO08XO1g5YlKIzyX_cNH6Q2-gdgagkufj7Nbj6qZeTKg79jMwW9I4GK6oOgie6BjTuTO2A2Q5HtnGOks70pZCt2ii0EjvIwuuAKUEzGNA4yEVfOxOGfJaqEwXbrbXug=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RzVI1S4j5Z1p6SwiOFIugCTbgslgcGBqSlrKOuyye6CYoxj1K1uBtrGhsBUXv-IZE1vctDvy0hizLtxBaewO8oMfZf-0sN0O8Jp8MU4zh35u7VGomNqDQRaZrwPUYOb4O6Fbq=w106-h106-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wzIGYraiu3sx2T2PDfboXieRQZ9SlnLcXTAmeRvlFiwo1BSL1oj1ZCu7seUSI0w9t8OjRHH7aFf0CEQ8xg-zSzUaRPDKoj5tDgK2NJA4Bq7UudhmvAG3mNB6LZcNuQe_ww7eq=w106-h106-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SWrk1Vr--e6-sipU_gvsYHRZweXTAjI45skC_EWd3lT-RTrmClFVpHFcSmcNieWfscnHC2y1eyQBzWa8lE5KXkockphagDScuULoy_n3EYn7OkfrWnFMbJNsOUAL61R3n_lp0_g=w106-h106-v0?authuser=0)
¿CUÁNTAS VISTAS?

### Modelos simplificados para mostrar el contexto


### No todos los sistemas requieren todas las vistas:

Procesador Único: saltear la vista de despliegue
Procesos Simples: saltear vista de proceso
Programas muy pequeños: saltear la vista de implementación.

### Otras Vistas que se pueden agregar:

Vista de los datos, vista de seguridad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Prr9l7g2GqVi5sFieM7vVO8bmaiqkAY2FhmvytW1d5IPOKCLF42CELtW4FPT5prdBaX9eTvnr72LjYKrZ-dMtyfAjMjnZs7n4BEL6hugcwuiqBp5AiVImOSssRMaDT-ppxhRBDA=w1015-h571-v0?authuser=0)

### Determinar los requerimientos arquitectónicos


### Diseño Arquitectónico


### Validación

Implica “probar” la arquitectura,
comúnmente recorriendo el diseño,
contra los requerimientos existentes
y cualquier requerimiento futuro,
posible o conocido

## Proceso de Diseño Arquitectónico: Actividad: Validación

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bPIGWUlGgDx4W3dZHhxDkHKsOLo9m_AHHoRBoLqr2l2wuqz-PopKNB7TN7KQ-SXpsVTf3GiNogHB65E7oIgCaSGSFrMbERBIir7od9uzuPAmbriUJ6X81sEE8K9gzG993JhvL=w1015-h571-v0?authuser=0)

## PROCESO DE DISEÑO ARQUITECTÓNICO: VALIDACIÓN

▪ Ayuda a incrementar la confianza del equipo de diseño en que la arquitectura cumpla con su propósito.
▪ Debe realizarse con las restricciones de tiempo y presupuesto del proyecto.
▪ El truco es ser tan riguroso y eficiente como sea posible.
▪ Es un desafío validar la arquitectura ya que finalmente es un diseño y no puede ejecutarse ni probarse para ver su cumple los requerimientos.
▪ 
Existen dos técnicas principales que tienen un uso probado. Ambas 
ayudan a identificar fallas y debilidades, áreas de riesgo potencial para las posteriores actividades de construcción.
▪ 
1) Probar Manualmente la Arquitectura utilizando escenarios.
▪ 
2) Construir prototipos que crea un arquetipo de la aplicación deseada.
Determinar los requerimientos arquitectónicos
Diseño Arquitectónico
Validación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2U8cibadFIWx9k9MzvMC15tSOEwEy_l0G8E6Tmfkt9CeD-lmJmnUFURe3oQOugCFQG6EJl8xmsA8aCx1SRu-Qw-da5ZrHBZlKqdmGdj0N6L11vRnIxV-f2i-CPVn9qsXI6vnA=w1015-h571-v0?authuser=0)

## VALIDACIÓN: USO DE ESCENARIOS

Técnica desarrollada por el SEI.
Los escenarios están relacionados con aspectos arquitectónicos

### tales como atributos de calidad, y ellos ayudan a destacar


### consecuencias de las decisiones arquitectónicas que están


### encapsuladas en el diseño.

Los escenarios son artefactos simples.
Implican la definición de estímulos que tendrán impacto en la
arquitectura.
Se trabaja la respuesta de la arquitectura a esos estímulos.
Destacan las implicancias de la arquitectura en las decisiones de diseño.
Dos técnicas de validación:
1) Uso de Escenarios.
2) Construcción de Prototipos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zBma6MOmDCaEwJWe77v0zN8aAl-9ilHYw4kHlnl8xsl_LQ70WnOxICy4931scMhyjR4g-fyxJmbqPSjuOKOoz-fxHc4baumV8Zk_p2NtVJFAJeoT54GpCWlHfPOgGJwR-pfzBPQ=w1015-h571-v0?authuser=0)

## EJEMPLOS DE ESCENARIOS

Atributo de Calidad Estímulo Respuesta
Disponibilidad La conexión de red para
los mensajes de los
clientes falla.
Los mensajes son almacenados en el
servidor MOM hasta que sea
restablecida la comunicación.
Modificabilidad Un conjunto nuevo de
componentes de análisis
de datos debe estar
disponible en la
aplicación
La aplicación debe reconstruirse con
librerías nuevas y los archivos de
configuración deben actualizarse en
cada escritorio para que sean visibles en
la barra de herramientas de GUI.
Seguridad No se recibieron
pedidos en una sesión
de usuario por 10
minutos
El sistema trata la sesión como
potencialmente insegura e invalida las
credenciales asociadas a la sesión. El
usuario debe registrarse nuevamente en
la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv247bWwewMho_8_NFv6ku2gCy2kmLUKvl3chCYrAXrREGNcIMlwJT4v0AA2MNFMYp4uKY9P--axRAQhwqBmGPllVnNZTjezQtM6-vuYviHv6ghkjFRLlt2VEWU5_xso0-o6DuLm=w1015-h571-v0?authuser=0)

## ESCENARIOS

Atributo de
Calidad
Estímulo Respuesta
Modificabilidad El proveedor del motor
de transformaciones se
retiró del negocio
Debe comprarse un motor de
transformación nuevo. La capa de servicio
abstracto que envuelve el componente del
motor de transformación debe re-
implementarse. Los clientes del
componente no se ven afectados.
Escalabilidad La carga de usuarios
concurrentes se duplicó
durante el período de
inscripción de 3
semanas
El servidor de aplicaciones es escalado a
un cluster de dos máquinas para manejar el
incremento de la carga de trabajo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bgIzxW84qZwntc0fNE0a46fk13s7SGOj7NHt0XzeKArCO3O7dS-QBJqDw421BA2F0zMb6uB7XOYLqdMKF7BNP_EdIEPVR9Em1vNuy9eJeqf69D7G1Y6yRg7NgUGnupEuKbrltqQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mir528zbV9XoSiHP3cttrIXeHFkvxyQ-BFEoL9Djv0npXc3Hm9QH5KGob0bcttQyCWAlJd2kvGQqB4oU2lZ8do4BCL8bVqHHqUF4qwRkHF8sjFpFxYe9faNg0VPi2PlK1qmt-Gw=w1024-h768-v0?authuser=0)

## VALIDACIÓN: CONSTRUCCIÓN DE PROTOTIPOS


### ▪ Los escenarios son una técnica útil para validar la arquitectura, sin embargo, algunos escenarios no son tan simples.


#### ▪ Ejemplo: “Hay que procesar 500 órdenes en 5 minutos”


#### ▪ La pregunta es simple: ¿Se podrá?


#### ▪ La única forma de contestar esta pregunta con algún grado de confianza es construir un prototipo.


### ▪ Los prototipos son versiones mínimas, restringidas de la aplicación, creadas específicamente para probar algún aspecto riesgoso o pobremente comprendido del diseño.

Dos técnicas de validación:
1) Uso de Escenarios.
2) Construcción de Prototipos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PbWu6YPIxFG6MbjKKfbo_1sDyrLusSRdtMtRD4EiaxvpmWrAX1N2g2Odo33kQV4C3GtTCky59u4YO4sByaulM0bHjNIgvi_V1IwEL0O6pJEfz8yAA75m9GjQIRMmk0JoQPkSngQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hZLSST8twigb3vb7UBTn9hbeJCziU5RMZ3MAbk_6j2NE5ZQCP58MLpvJfeaW4BIJcI7NMngB4eyPyAwKnCn6M1NsbSxQkJWV6jusYVgBTqApRuYb7aqCAZOf3XVUfoVgq1oH1=w1024-h768-v0?authuser=0)

## VALIDACIÓN: CONSTRUCCIÓN DE PROTOTIPOS


### ▪ Los prototipos son utilizados comúnmente para dos propósitos.


#### ▪ Prueba de Conceptos:¿Puede la arquitectura como fue diseñada


#### ser construida de manera tal que satisfaga los requerimientos?


#### ▪ Prueba de Tecnología: ¿La tecnología elegida (middleware, aplicaciones integradas, librerías, etc.) para implementar la arquitectura se comporta como es esperado?


### ▪ En ambos casos proveen una evidencia que de otra forma no se puede validar.

Dos técnicas de validación:
1) Uso de Escenarios.
2) Construcción de Prototipos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1N8bxFHpusIYJT9rrZ5Z2Kz0uTd0_xmPqDf7hd3qB8gDQhXhL6cDs1fcFegzNQcljBFkihblPn2_JrucPE6T5WtT2Hp_VQtk_7k7OFq7wQ0BAE81Ba431CxQDi8hfLyOuC4xgFqA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vosgBqlpRsIhhbXJsV1LtWCGhxzoRxzU6BsDI1KC0IlfxSD_GXzRPtehIyYHriah6V5CUyMAkcK4X1gKD6ouDQ_b8l3ZyLI7XLpy-d352OD6T82WxEKRGxfWTXffzsjYe1vro=w1023-h1080-v0?authuser=0)
MODELADO DE LA ARQUITECTURA
▪ El modelo arquitectónico mapea los
requerimientos funcionales del análisis a una arquitectura tecnológica.
▪ Debe tratar con los requerimientos no funcionales.
▪ No existe la solución “perfecta”, el modelado arquitectónico debe escoger la solución óptima para el conjunto de circunstancias existentes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IDJ52ThaIlrIC7GrUQFCADw5thnLRq3CRs_Si4mJTNlqrwxSivDRP4ZMzYWa3Medu4vVa04Q9XS9MIN5JQolCEBivS4Zeu37Jajgl3BqSP0n8kSQQmlMJk3MJ0iYnI9Ge_TUrrg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ioFABfdU9qmnyaZkoI-HX5Q-T7Hyj8H0Nn0SxFdlAH03Jl5Oe21Z2gb6P4z8JpGZsKUqRExZJBtklMr1KNm-JJyc406hISDi9wxKTh6VeqlpMcPs-jyaabS7Iwd1-Q2PBy5ukTA=w1019-h1152-v0?authuser=0)
MODELADO DE LA ARQUITECTURA

#### Debe considerar información sobre:


#### ▪ Volúmenes de Datos.


#### ▪ Funcionalidad más demandada


#### en el negocio.


#### ▪ Distribución geográfica.


#### ▪ Distribución del Procesamiento


#### de datos.


#### ▪ Dónde se guardarán los datos.


#### ▪ Cuáles procesos se ejecutarán


#### en qué procesadores y que tanta comunicación se requerirá entre ellos.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_oUO5kW2yf0JwmeMxDvifxr4VjmV_-h82L8QlVQDHTwVtwFaM_0NJO4wiwu3Gd9HBaTuQI3B6ra8d-pRYXKAfpux9uU5yJxwZsOCOuV15rhAdw0399usPDCyC6NkU7BZoGjHhog=w1015-h571-v0?authuser=0)
SALIDAS DEL MODELO ARQUITECTÓNICO
Distribución geográfica de los
requerimientos de computación.
Componentes de hardware para las
máquinas clientes y para los servidores.
Configuración y cantidad de niveles
de hardware.
Mecanismos y lenguajes de
comunicación de la red.
Sistema Operativo.
Paradigma de Desarrollo.
Lenguaje de Presentación (Front
end)
Lenguaje de fondo (back end)
Sistema de Administración de
Base de Datos.
Ubicación/nes de los procesos.
Ubicación/nes de los datos físicos.
Estrategias de sincronización de los
datos distribuidos físicamente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YoC3l_KKKMQRovhJfrbdMnAhY6VVEDMOaPlj9pgBeTA-yxcnacOYyH2yB4SNbr1ZmikJcRf1cELY7TsB-ARrjimN41U538WLXd-WkMMtc4PDaTYuoxGxQkJMnVbo5E3TGL9wy=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Sc4chwM3KvMBXbR-LSZvHTJaA6OqB_K1GZDzbynkvbwmFDKAvqDrZigCETC_m3b7avEScc7VKr2sxW2aSOiDsAARJRbhHNuRTH5eiDhqcaV3pdVyAngUyBV7kvOOcwMAwNg6YJw=w395-h313-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yzd21lz4fe7fRWiuUPsF8j3FfTdp3xZebtzUSeXK0aQlCuiab8g7h__kbT4yCVbnFlJsOo1BNbTf6tjLoIT_MTtscH5fnUr1xEHdW2H3_KpbW8V1S7gMwDbp4m3mdBZm1ztIF6Q=w408-h290-v0?authuser=0)
¿CÓMO DOCUMENTAR LA ARQUITECTURA?
42
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rhOJ6Hkz22zW0SoDxT7cQ3YhY0sSfaCk-IRoeOZWAXWfUA_2zIti6pcm-trXuW1cVqWQl7UTV3YMdX6mm89J2jU_ET9AJPfZYbk0-aYYiPG2tCchRxHHBj0IaxDNQ0mWZhTfmYw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eccCVzfjfK29zp6CNCmfLZhUq6AYqP_MJlfegBmJIBw9SKN4ULvBJpTeC9Y33eZLZyrLKUtvu9HNlWE9SlkrOlxmM7sRHI2jd812WzjqwAYXA1FW6LVy5cuc530Hp1SHef8axjw=w94-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iV_v8YZyMfHZ-xsSAdPSjFMwFfsU_JaqvlBOYeGfb54UV6bKdR1x-q4DjXyuDEz2u1t2vS_z09HLk6cmCy8aM65VpSHQTjvsTQ-_DeEH6r0ha8vF5sDdsk6fPe8TJFgPBYSe2zA=w94-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Z4s5gBvGh7BGerZt7igKPrl92Wnh-8k7ZIjg0gUdjAau9ZV6d2T1SGAaIulKzqDQ6EMZqB7DaivgsEoeixm7kLJoFznpc8V6frCekOi0LA2uSqHkrxOJVjTC1LHhPT19EADbz=w94-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28kNfdVpSbCpuw9YjQR3PskJOQKSMweZuAFVhLkti6trnfAPKYOyDCTT7csExejXwmXEksQQb3u1ePNYTf7k-obtx4e__xp5bv17EhwjNvvLYlQFrY13BBeOu4SdS2wFZk0opd9A=w94-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mYuiNgzxa4P2zvqHeHtcZrUuXDjf315vz1XYoKXh4J8lZhYKrme2VuWj3MihktR9gyda8LQhu-kuZVw76Nui60anuFbYb6ZAqr6yewWfMmKASPxsnrXv9ha_fGnikERPwskB5Gw=w94-h94-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33jsI4_514ZMFLXAKqCuYOyua2O-TWa0fly_WwmBfZwE4hHV5muAkQeuLm2CFQOlO3wRK-gv2RXOPnKfZ9uP41OJVZqs520mtyOzP-KHatYalOYspMmB7GZ5Hh-LMMSZFdSKjmag=w94-h94-v0?authuser=0)
¿PARA QUÉ SE USA?
Expresión del sistema y su
evolución
Comunicación entre
involucrados
Evaluación y comparación de arquitectura de
una forma consistente
Planificación, administración y ejecución de las actividades del desarrollo del sistema-
Expresión de las
características persistentes y soporte de los principios que
guían un cambio
aceptable.
Verificación de la
implementación del sistema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DY_oybAyfzzywP2tTMP5jKUQCts4pAPhdJt8p4pgIYjw6qa_r2Pepbh6xVVYKaeezjUFVrJIm3E0d9E5nSiAsnHdwiULG5wx2YAfu8AGFJzHZUjkQ0XISem1h43YIY8J0BodyHA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DOhbpzxiMSNqzW91JIt83ALBbtQIsIHP32WlpLJfSedL8n8JBZZj50rc_KrJsIxjCKJblMwF31na9BM74w7RSkAa90zxR3SEXzV6Hz_n0h6dkbG4ci9NX8KTKcOCybTu0VnlDVg=w552-h866-v0?authuser=0)

## TEMPLATE PARA DOCUMENTAR LA ARQUITECTURA

▪ 
Nombre del Producto
▪ 
Contexto del Producto
▪ 
Requerimientos Arquitectónicos
▪ 
Descripción de Objetivos Clave
▪ 
Casos de Uso Arquitectónicos
▪ 
Identificación de Involucrados
▪ 
Usuarios del Sistema
▪ 
Compradores del Sistema
▪ 
Desarrolladores del Sistema
▪ 
Mantenedores del Sistema
▪ 
Requerimientos arquitectónicos de los involucrados
▪ 
Consideraciones del Arquitecto
▪ 
El propósito o misión del sistema.
▪ 
La apropiación del sistema para cumplimentar su misión.
▪ 
La factibilidad de construir el sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KQZichhUuqAi2qH0BAXMhNFWvKMMkgkYuoL105yKF3GeObqSfpyqpk01ZgrWJfu_WhWVlQYn8auUOLe1i_rUe3rWLS_ZpHCkjtJF4u9X4_oH10zdJOXUTDq4gYB2Pn2SPAHQaWA=w1015-h571-v0?authuser=0)
TEMPLATE PARA DOCUMENTAR LA ARQUITECTURA
▪ 
Solución
▪ 
Patrones arquitectónicos relevantes
▪ 
Selección de puntos de vista arquitectónicos, para cada punto de vista especificar:
▪ 
Nombre del punto de vista
▪ 
Involucrados
▪ 
Consideraciones a desarrollar en el punto de vista
▪ 
El lenguaje, las técnicas de modelado o los métodos de análisis a ser usados en la construcción de la vista basada en el punto de vista.
▪ 
Pruebas de consistencia y completitud, formal e informal
▪ 
Técnicas de análisis o evaluación a ser aplicadas a los modelos
▪ 
Heurísticas, patrones, u otros lineamientos para asistir en síntesis de una vista asociada.
▪ 
Vistas de Arquitectura, cada viste se corresponde con un punto de vista. Para cada vista especificar:
▪ 
Identificador y otra información introductoria conforme use la organización.
▪ 
Representación del sistema construido, con lenguajes , métodos y técnicas analíticas o de modelado del punto de vista asociado.
▪ 
Información de configuración que utiliza la utilización.
▪ 
Consistencia entre vistas arquitectónicas
▪ 
Razón de la Arquitectura
▪ 
Aspectos de Implementación
▪ 
Análisis de Arquitectura
▪ 
Análisis de Escenarios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Wt5vTZAfpId4mZqtZFTv_f5qGsNqVHx8mGucdmMq3ROhPos_26qkA5APcrB6orDvYpl5jf3CVUhPEt9wWBhZqxFbs4aaN6WodxbLeXGJSiLgBjNMIOjaw2m5DmOgmZrfFpdaXUA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PmSWatD3i1pqdpMAwDkWxByDrvU8dfInbZvzzKcleHnM297Fh0-vHNuqZIamc7irFDLQ9XsXVI0VPI0mhOj8-mMX1b6XOb7HjyyOvRW4TSi-DrWZ1Mt3j_-3aZZ02TPLgSU0kQw=w588-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oSAqFc6ga3ZEtGaSNJHLD2NMpIdzSNGW4znUDIKbg3QPLHKJPV8uRhxIg7c9gmgOh0WKUPTix3VZkD26yqzq0RDQmdwI7TUmBJuoEHAhMB-8uFh4JfP7M0s6BhqViWcUajXlo=w138-h250-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fogyzFSJXfWsz1iU82paQWdU59dwWB8HqBkXKM5xaRjpeRrTCPV6QyvYcHggKjkmBi8We6GSKEyYro77N91tAd0t9w-BuX6Px36zob1_Dj1PqYYO3esrsnuTmPA_zfu0JN-So=w432-h432-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XcF_SYFiY9RHB19mrn3yZH-8Tko1lGcoiwGhqqnJ0l1cYE4hMlkgvIs14UA6rARodJiiYseN4QDKKzpnrDPahYSMHZIAQpeVBdKcD26WBMx1ZeaGx8VqtUJcGgb9X09lxMAHC=w521-h521-v0?authuser=0)
Arquitecto arquitecta arquitecturas
ROL PROCESO Producto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26c5fXAk_PcTFretfkleH9l9mAoCY1pnV8d3Om8in30vV-X53C3w9bAAz3p-ef6qFIwyviDD8yfGfpYY2dPxtINVjQ7Z4fh-m2UQY0OhpwPY_WGzveCd-FgC99pvxO0WNgHIFgMQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv343lF41IkjcRQwFEoiNJXeWnZIjz-Lf8x7rXjF-0owMXWXdf6RoMYS4IynYcga5JMIqtgTl6Vwe8aqS055XhCynaS_qQDkfsHWnfrj9_gnAuwZzLpNOqfeqjDv0cvKd2D2GA8I_w=w1000-h668-v0?authuser=0)
SISTEMAS DISTRIBUIDOS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r7Y0TmPjyKDU6YEPjl6R88dcp4xCr-7-cLg2ej4ZltE7rWXgDRcBiEtli_0fbArHISyt30st2M-YuO_x5HprL68uxpvWBpTd_sPt3zGUfVO2YljD0PZouA3ORF9diq4BObqNO=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3t0ozG2uD86FAFu3B5JjKsKFfPhHNapcnmBXZKfcHtbklF9gLYPkG-sHHOHvF3xoSh8nKRii_o0nbYginoB-lp-Mcs39v_G2KXHUF_4HKJEaPunAZVK1k1hR4xgckiklF-bSCs=w780-h780-v0?authuser=0)

## SISTEMAS DISTRIBUIDOS


### ▪ Virtualmente todos los sistemas grandes basados en computadoras son ahora sistemas distribuidos.


### ▪ El procesamiento de información está distribuido en varios procesadores.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Av2-FU06lx6lK0Jr4KR3Sg_CI_defg4N-STAqPVjwIsJOXa44FbMNRs0Zm98KzkoN5xSy-y5UCVEmOv2a7P1b5icHlfl37e5MZhdoaNPNTPw63yCFnWkkMYSJh_P4GWa6uZY9=w1015-h571-v0?authuser=0)
TIPOS DE SISTEMAS

### ▪ Sistemas Personales: no son distribuidos y han sido diseñados para ejecutarse en una computadora personal o estación de trabajo.


### ▪ Sistemas Embebidos: se ejecutan en un único procesador o en un grupo integrado de procesadores.


### ▪ Sistemas Distribuidos: donde el sistema de software se ejecuta en un grupo de procesadores cooperativos integrado conectados por una red.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26847vJ-y74LJtztSxSYDfdyfTec351UIQ3YdeB5DW2GMCPYQut6cwgNgCwg4PVyfy-g97mXCTgswQvLGzjPfwY6Ot2d6o7bWiZb-YYkgHGrQtc4F84qjP6rvL0YLXEghMLqGpJg=w1015-h571-v0?authuser=0)

## Características de los


## Sistemas Distribuidos

Compartición de Recursos: recursos de hardware y software 
asociados por una red.
Apertura: son abiertos, se diseñan sobre protocolos estándar 
que combinan equipamiento y software de diferentes vendedores.
Concurrencia: varios procesos operando al mismo tiempo 
sobre diferentes computadoras de la red.
Tolerancia a Fallas: la disponibilidad de varios recursos 
permite esta capacidad.
Escalabilidad: los sistemas pueden crecer incrementando 
recursos para cubrir demandas nuevas. Tres dimensiones de la escalabilidad:
Tamaño: debe ser posible agregar más recursos. Expandir vs Ampliar
Distribución: dispersar los recursos sin reducir su rendimiento.
Manejabilidad: debe poder administrarse un sistema conforme aumenta su 
tamaño, incluso si partes del sistema se ubican en organizaciones diferentes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13CVWgeZQ3iLn4llJcBW6_gb0JVbLlRM622OXCmWWuFwnnZJ-JYl51c6XU4kyEesQBg4QsdHY8Urpt3wnHIl8jm1H9_2JQXR99jehiCkfW2xZPym_Y847bYIguUfj1395lmTkZ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30AdpAFesqmVL8ZqFzwXj8yPvLWpqjuWgEpxXer4nUWUjXaepRZ35Rx8mc-HTD6F5YA0gxApTv2ZQj-V3ktyhhjhGVn0UhfKItCv0uSqfQddvCE_MaVrEZVYm6yfgNi7smtun_lQ=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ca6QYbMRQIn3fcHcUtKChAQASdOn_ZlZhUzV1K-HWx0Nd_gKtKMIQlX_FmDXMOUP0dJhZHkhzFjttvpP5d7oQf0qlmaM5TkqKBpmcfAhgt5XXsIFar3ga4iwMMdI4hbRuQrfz-A=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZkLGTsiG_2jDC-cDtxzh9aInN9RS78r2Z_9qh8Jq3mi_kINBiOsOpGhzSaNBdzZkbdtyt__Tk9WormGHFCljFn_lMZXRL5ohCEF88hv9NnIRziShrGXf3ccEDoGpGol9XkFfO1w=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RmLdZlCeSf7EOcLnTOgUE2itf8PGND0nvh4Y3Hcz2Dmnszwwh6pif1bg5yeoXfkUP3RY-ipkvJVPALqzqnAzCFygogu5O-bzsNfxkGDNBkNpE-KDhV1mbagHDDwSpPxWGT3iN1A=w140-h140-v0?authuser=0)

## DESVENTAJAS DE LOS SISTEMAS DISTRIBUIDOS

Complejidad: los hace más 
difíciles de comprender y probar.
Seguridad: dificulta asegurar 
la integridad y la degradación del servicio.
Manejabilidad: Los defectos 
pueden propagarse de una máquina a otra, esto implica que es más difícil de gestionar y administrar.
Impredecibilidad: la 
respuesta depende de la carga total en el sistema, de la organización y de la red.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00P0OmvVdMtdc3TSwgvKcx3OKtje7L-oUv0rRnPjOVphZXMWPuxkOVxfSK0cS8Ccl-bMEeNFfBzR1O8-YfK0RIh4b9JrT6FZ-PQDivcCiWwCPjtBkQJOGIfitYb2JpAuaxrYvNPQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3THJeJ06x-3wl_a0lQgr7_GJOdus0pXmk09woKd9KR46EpP1E943FfnkYTplrOLW6-daZv7D1C3XI9dH223Pnmj-2EsN7AoMaAv3qMRiSS4o7tMmDv65pUXz_yOLjxUCD2Dur-8g=w137-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Z7-0urLMiVAlGTMLqhF9RCtyMuqdKyqGAzySjqBgA9raiO7QD853koPGlEKRJKLbDlWK2x7wiQDRTM7Wntq0k_FOz9GTHD21i1C1jm_JYJtqa-wwmWJvU-b6LnDRHPe1wYErzIQ=w137-h137-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HGBp5oLmAtCaQVcPQIX_3V1fhMI0LG_h1FawPS6jOUJ2FdQC02Exjjpy7wOf1ycChfzhtCnvXEySeE-rFHMTOoUrSh2DwvK_OY1BPi7ZNyi8RfIuRF4MuVxYi1CECyvpfrFWq4Q=w140-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mh5BuIYaXssm9jYn3pVmwIcIyQYFG4OOWw6Tdm65_crOaibH0VEo3zi4TEI6vYOg93Re1ga-GHnYdk1ng1w8XtjdC_l1YXFVDK-IWXH75F92ww1JByZz-7WmO_EYAUxAYfatu=w137-h137-v0?authuser=0)
ATAQUES DE LOS QUE DEBEN DEFENDERSE LOS SISTEMAS DISTRIBUIDOS
Intercepción: un 
atacante intercepta
comunicaciones entre partes del sistema, para
que haya poca confidencialidad.
Interrupción: los 
servicios son atacados y no pueden entregarse
como se esperaba. Implica bombardear el servicio con peticiones ilegítimas para que no
pueda atender las legítimas.
Modificación: el 
atacante cambia los
datos o el servicio del sistema.
Fabricación: el atacante 
genera información que
no debe existir y luego la usa para conseguir ciertos privilegios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_7otHT9tdUWUpEzXOhGvjWxO8YZc8vS9K0_AtsflmXq0e2gRkFFrJ2x94R51phstdpoXWz7JudKtERU-gRcXDFXIiLXzfHk0Ev2dpTD-isSlvXrzy_Vdw7wSTBQO8qq7rAUYcZA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H0reWMOFauEy-Fr1B32Obk9imnC8tXeyopBo_mTXNv-XCZ5F1oAgNpJKVR2YhoQw_W34Un3VpFZb1tHRQ3rpJ9n-sMQ1VlN10_vv1TdRdCgXS8V4QQ-1vNdgDAsnv_MrJFoVx=w1280-h719-v0?authuser=0)
FALACIAS DE LOS SISTEMAS DISTRIBUIDOS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wcDwTOPhX2uDx5LKowgR5g0ZTLn5Mzt48kZclP5QJmBLTLZwGpzkGimPBP8HlAZHv2KMiuD-hmoNInZ43iJW_I8hVyLrQpICqaP4KZlIEfmuMBkFQh-KSGuCnzFEe0DI7D99M=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AhLyYxUZ89O9vL82tz_Qx18PWPV73_oRJwTWJSTm_aA5YUB1dtsHKckqp1k64_kd_hh2VuXqM-b6SpnrGaxnhcnsEoRQT3-9xenRzqsdWDVkztw1VsvFKzc-1fzeJXcjJZe6n0A=w1280-h381-v0?authuser=0)
FALACIA NRO. 1: LA RED ESTÁ DISPONIBLE
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19jJx7HCenlII4EsNMwqnTgLGdPttF8RLoEcrPY9EA96-B9A-kYFH4QQQBL2bqeybgxhYsGzZ937th8B9pxzIOVYKv7sFnuJQnIssNZVkzcnPWosoGcHOwtVv95yKwFLikNZ_bQw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TeltgvgiIAWkuuCpIUHM2IlLPU0_EZOVXFA2ZtcN1oFNo83D_weEQRHNfHSdIKQK4EkI8YIaw1lJtwFKDoTRthqDjWNWuopbg5Rp_fZ_4HGCfducgiRBWH3JLGrBHxsKd7znG=w1280-h532-v0?authuser=0)
FALACIA NRO. 2: LA LATENCIA ES CERO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10541K_OOTlBNujSTOMEwS81NImuAX44SRyIddQMzltVV-fUnZwWf5qfDxstku4RPKNC-tkihKwf4WU2uC2o-9ug1NdpOTD52vZwh2nrajHNuo_6dhAF2oAj_Wk5k-XXZ3WMeg0w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MtSZFgCNsUrnEKzKwWJ4zScbedMGIQQ-SqDcTl7-8Pmfb-0CXOwFYTtLdeJZb7ew-b5ugYX21aBxIZFIiYuuQG_P8qZ3sUje2JhPqG7wGhknHyjkjtYEPw_JgGFf7bczNyH0yiw=w1280-h358-v0?authuser=0)
FALACIA NRO. 3: EL ANCHO DE BANDA ES INFINITO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iVekSsqmna49G9M-IV7s6_xnP3b5Z_m2e_oRViy0UZUni42Gc1Fmk512QabkL6XdchEG6epMwHa2oIgGwX-SMH-oJ3rSYH00TNW3prKsTpL_R8Q2ewV3W9mPNgZdliX9O-YEbRQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ziwalBSIoh7LZyFgVSh8D6lLrBn6kdWWB0Zl5d9oV7vC2qLeAZLFXaq-AiQJKwSI8GOw4wsQhd80RAut1E42955KUPXBIek4FAlUpZUcO0R_lBR1sl1JTwHlFlHO_v85TiCI8GQ=w1280-h365-v0?authuser=0)
FALACIA NRO. 4: LA RED ES SEGURA
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XCq2EbC-OeIE1CbQ7tt6mC5dqmUVZDSkJphDnWuNgh3X79BW9AeEpxzJIL0TqO5VrxYgBJ3GyuyYRKzUYX90knigE9pODF8g3dTPUr3Nz3dqG1xhnQERtKsy3BJJQzXLLEx-j6g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1odGnaLdiy98n1NK_bl8hmydd4osN_VFvFl-tkiOrAiuGgmMwtkwQdrFLHTI_nK-lBOB73EWIRVHrHqjLgmqSMIA4--HdQ8wOhFP3ga7toSMWYlQgAHPs35G2ws0CDkrRtrNNU=w1280-h493-v0?authuser=0)
FALACIA NRO.5: LA TOPOLOGÍA NUNCA CAMBIA
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Uwh5qwI0-ow-bvzDaXaCPo8-feMAGdygrpiVKCZm1vCqV9uGwT5ZheIMDHS3eTe-bKa2O-Bly_bXOmcEUsnKSWY81FOy0J81uH4kcXjM2wSDLap3Jw23wNgYfV8b3LKm_-3fX0w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kyptfMrpPLLsOdUQV1kGzrOv5A2Q8SSnNXLvL1HM9q2YsxphC78uHLNJ3nqLvXq_byqbxdU9N0QC8KVeqodbwS2vL0v6j9w6RR2MlzAZX5QW7DxMjbDwd8-TOHTwzmTS4tx_J=w1256-h796-v0?authuser=0)
FALACIA NRO. 6: HAY UN ÚNICO ADMINISTRADOR
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YppDRC2s5kJqI65iTJJMffz_mmvsG1ZbsVooGZ5vC6Gt0OFNz_YO9_pOAVHUt46OPYN6SI4K3hi709bV254SRcVv1hbfF7SKtwJnBcGfIblA9hi-fTDCGX1csoUkE7EsuARqmMQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20Tipf7UowduOYyAllqWo72SIY648Pjl6FRkMHz_3PLA7Qx8bW58EzbV4zxyhzlNIzIdwthVbJfrTMmLnKHdiWBtjxFjpmOcJA8_iigPDfeTiyNtt4m4AFVBhLmkN84L1ix-MX=w1280-h358-v0?authuser=0)
FALACIA NRO. 7: EL COSTO DE TRANSPORTE ES CERO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HcEaH6NWYxUnul4ieiSfEl6-TR1Qbxx3EdCsOPi8obHL6dUXpb2EhE874-0aYsM6tcybOkfB4Kkw4V17qNbeLfivHTlAJ0IUqdOW-ZTvUO4ypnWlubyc1jlC88ggUqVyrNpqcow=w1015-h571-v0?authuser=0)
