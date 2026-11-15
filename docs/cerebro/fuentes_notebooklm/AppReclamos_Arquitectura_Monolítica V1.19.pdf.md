# AppReclamos_Arquitectura_Monolítica V1.19.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento detalla el 
diseño arquitectónico de un sistema informático
 concebido como un software monolítico en la nube, destinado a que 
municipios y empresas de servicios públicos
 reciban, administren y resuelvan reportes ciudadanos en tiempo real. La solución se organiza mediante 
patrones estructurales en capas y cliente-servidor
 para garantizar la escalabilidad, el bajo acoplamiento y la independencia ante modificaciones técnicas. Asimismo, la propuesta abarca 
vistas funcionales, de diseño y de despliegue
 que especifican la interacción entre aplicaciones móviles, portales web, bases de datos y servicios externos como GPS y redes sociales. De este modo, la guía establece los lineamientos técnicos necesarios para 
automatizar la gestión operativa de incidentes
 y mantener informados a los usuarios mediante notificaciones push y correos electrónicos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vc9yI77Dp7xObWcOUuDQLuNKF8vkiaAReMhKOhMBJF_JQoOd7zFZ3xjNCpSQl3FMDrhNCN3a1C8_C2IalYcVu4QbIQzHwzSeOHHQi8DMW3zUun4g_z8I8OWpCMhL2tm4To4rI=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 1 de 17
Consigna: 1. Definir los patrones arquitectónicos requeridos para conformar el framework que dará soporte al software. 2. Construir las vistas arquitectónicas:
a. De funcionalidad, justificando por qué se incluye cada CU. b. De Diseño: Subsistemas, Componentes e Interfaces c. De Despliegue: Distribución de software en hardware (Nodos y Componentes)
App Mobile para Reclamos
Glosario:
SaaS (Software como un Servicio): es un modelo de distribución de software donde el soporte lógico y los datos que maneja se alojan en servidores de una compañía de tecnologías de información y comunicación (TIC), a los que se accede vía Internet desde un cliente. La empresa proveedora TIC se ocupa del servicio de mantenimiento, de la operación diaria y del soporte del software usado por el cliente. Regularmente el software puede ser consultado en cualquier computadora, se encuentre presente en la empresa o no. Se deduce que la información, el procesamiento, los insumos, y los resultados de la lógica de negocio del software, están alojados en la compañía de TIC.
Tecnología Cloud: es tipo de implementación donde se ofrece servicio de procesamiento y almacenamiento, en servidores alojados en forma remota, a los que se accede través de una red, que usualmente es Internet.
Notificaciones push: La tecnología push es una forma de comunicación en la que una aplicación servidora envía un mensaje a un cliente-consumidor. Es decir, es un mensaje que un servidor envía a una persona alertándolo de que tiene una información nueva. Lo que caracteriza esta tecnología es que es siempre el servidor el que inicia esta comunicación, aunque el cliente no tenga interés en saber si hay algo nuevo. Lo comunica siempre. Lo que más destaca de las notificaciones push es su inmediatez, ya que no hace falta estar ejecutando la aplicación para que nos llegue. Aunque la tengamos apagada o en segundo plano, cada vez que el servidor reciba una información nueva nos avisará de su existencia, es decir, las notificaciones push despiertan al móvil esté o no ejecutando la aplicación.
Descripción del Domino
Una empresa dedicada al desarrollo de software quiere construir un producto destinado a Municipios y Empresas de Servicios Públicos que les permita recibir información organizada y en tiempo real de eventos reportados por sus clientes (reclamos, trámites, quejas, denuncias y/o consultas, comunicaciones), gestionarlos y comunicar su resolución. De cara al cliente brinda la posibilidad de generar eventos a todas las entidades adheridas y conocer en línea el estado de estos, a través de una única aplicación, disponible en dispositivos móviles y a través de su versión web. A partir de la carga del evento la organización a la que va dirigido lo gestiona y, una vez resuelto, el aplicativo comunica la solución y finalización al cliente, quien también puede monitorear desde la aplicación el estado de sus eventos cargados.
La aplicación permitirá al cliente interactuar con las organizaciones adheridas enviando avisos de una manera muy simple: Una vez descargada la aplicación, frente a un evento, el cliente podrá tomar una fotografía con su celular, geo-
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kJd6DN1RGRUnXgxkxVh7P0_SkTKslTZH4Jdsgu6gsrjqmCLEpJSAlV4hDnVLAZy2PGjgUZfN55xwfh7PqjuZLxBo3vPKhxsbvUdua2jI62czbC98txo6HTL2kuUfQVS3VCj1cuQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QV2hjtICjeueFc54MjXT0DarYq8jgFc_au8R-KnJYw-kep8ydgfJudNf5e0TbEwfsEyQOO51rH-KyLhwIQzTQCew_PNaDZktxfGnA9UKxplLi5YRcKuHlD2xlG_LoaAn_fc-ARQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aJxFEyPDATwqRrVhHMgXKmtUyLLrLyJTjmfzlTCzbEfM_CoT8B8chHFr9_78k2ILHkqDB6jyAbExSZM_SwsPq2bHMHbmuqMbq7bbJ_SC9C8e7k8UpYN4POUpb-ywmfd5-4UPIeg=w1280-h74-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zXrqJa4iVGW4fafFoBJUyFqNJErNKjcyK7qvzpbC9BLBcAr5dy6_tXIMLjP4zZ73tPzdH66fjbPphkgiiySkTepu4cO4INTJ5o0Qo2Tzgl7FDojwlaAhHKxKMBNXB6himb-cH=w261-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0o6e6emtsBubcOkUj2oymYU3xpUvNP0GHWkgGUjAJ3bQz7NJH01hLtnVjp8S-OY3A2joadlgOCfA5R1pgWkHy5SiXXu_9yp3SRoo0wFz8yE7481y_sIsOLuZU6Wy7XBvyk0dU5NA=w264-h119-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_vUzXYv_QbWCYuZkI7-OXi0bm4Z1qJLqEIbXx24WOIaJir5nQ--r3mate5jngh2OzmJk4WVMaHA9eIangJDYDn--hpFUXha1IGLWc7oSYlgUzDVMeQRyqmzxXqRsZ1Z2pY4lBuQ=w261-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WafXlVG-0xFZL8AR8p8TErOXHp1pR0r_MCAaA2gEffxgQD6zUBie8UA69adkD2ipRkmpv2y7MOPomC37ipN8Wsrje0EOQaqA6Z4HEPf7h_g205ApyN8bJli0QxIQgwx1Y0A1s=w264-h119-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jm1LgDPDeZj-c4oMP2yeoseBJUVkDSstGNmWDUCPMAL8RwzvulI7_l4LCxE44PJ_VhqAgTADSN_8pM6NqLTfcqaLJkarDDbu2ZQ-ju5fYE7qelWUSzFLArEmHzDh_vvKJCDAF=w261-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35Cmid3OI0tvTqZ0Q1-n1BG9pRGc9wSuJj3f5rzzRlmyGgk83eW-_bvFShz33c2lN-GW-Je7mW2jQ2MYCzDQUgNLVcyI2V81_QIxJL79HKUunr_sWxFOETfKgMuVxhjkuKOP3JMA=w264-h119-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3D6AKxJzn0xgQagt-ZdZLL2EODMZ39E06eqb5bEMNBL73eq70WCFw6PO8VU515X7fmBH-PyMZPdpBhWnd4NklAIR3pw7H-S9FTs8HDOvCu-hipvOkw3triI-QZmmYIDLghjF7f_A=w261-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0--DV33eZQ0b8ZKavzoCpq7slbg07l0TcwF2_lUXCNQMprYaxcvqiGEgiMMDO8I5neCMd15AvBytuBS-9TRF8qI3LDPybGRdpCp1eAkNejXdyWkojjylFoiv6W3VO0kGTYkHZdhg=w264-h119-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 2 de 17
referenciar 1el mismo, seleccionar el tipo de evento y describir el motivo de su reporte. Para aquellos que no posean un Smartphone, se puede ingresar desde la PC a la versión web.
La solución se ofrecerá como servicio “Saas” (Software as a Service) y Tecnología Cloud (la nube). La empresa u organismo público que contrata el producto recibirá información organizada y en tiempo real de los eventos que desea gestionar, pudiendo configurar cuáles son los tipos de eventos que gestiona y que datos solicitarle al cliente para cada uno de ellos. A su vez el sistema le permite configurar de manera simple y rápida el proceso interno de resolución por cada tipo de evento y una vez resuelto, la aplicación se encargará de informar la resolución al cliente.
Cualquier organización pública o privada podrá acceder ya que no requiere inversión previa. Gracias a la tecnología Cloud (la nube) tampoco demanda equipos especiales para su funcionamiento.
El aplicativo se integrará con las redes sociales Facebook e Instagram y contará con un módulo de notificaciones push a través del cual es posible enviar mensajes masivos a la comunidad de usuarios o delimitados por zona según el objetivo de la comunicación, informando la resolución de eventos o cualquier otro mensaje que se considere relevante para el público seleccionado.
El sistema deberá ser compatible con plataforma web HTML 5 y sistemas IOS, Android, últimas versiones liberadas al mercado. El despliegue será en la nube, la empresa que desarrolla el producto de software desplegará en un host todos los servicios.
Luego de que uno de los socios de la consultora (que es quién tiene la idea de negocio) bajó estos lineamientos, al equipo de trabajo le surgieron las siguientes preguntas:
¿Cómo carga un evento un cliente o usuario?
Para comenzar a utilizarlo sólo es necesario descargar la aplicación y registrarse como usuario, con una dirección de e-mail y una contraseña de al menos 6 caracteres. Para aquellos usuarios que no posean Smartphone, existe la posibilidad de poder registrar los eventos ingresando al sitio web de la aplicación mediante una PC, también a través de un usuario registrado. Si el cliente ya se registró como usuario y olvidó su contraseña, el sistema debe permitirle recuperarla.
Al instalar la aplicación, el usuario debe aceptar el acuerdo de usuario que define las condiciones del servicio y política de privacidad, permitiendo al sistema acceder a su ubicación por medio del GPS, conocer su IP, gestionar el uso de WIFI e intercambio de archivos (recibir y enviar datos). Un usuario puede darse de baja en cualquier momento que lo desee.
Frente a un evento, puede tomar una fotografía con su celular (opcional y no mayor a 3 Gb), georreferenciarla2, seleccionar un tipo de evento y describir el motivo del reporte, como se muestra a continuación:
1 La georreferenciación es la técnica de posicionamiento espacial de una entidad en una localización geográfica única y bien definida en un
sistema de coordenadas y datum específicos. 2
Log in y carga de
datos Captura de imagen
con una foto Georreferenciación Reporte del Evento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nn0ZBbSSn3-umelNESahYd32VBA98_BQ3WZMhuCw89SV-FC3rzor-lyRxm9EJ3YvAEKnsl14tuA1ikWTlWt0akyc1nx3BnAPSXlbfCsGnCPf8WL1i39jVzJm3muycJ5uHefPOfg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3d4hS4SPTqX9EeQ7Xoy0_GxSakOgtVbGapCrl__Q-TT8kZeuyQnCyMiZvw89acJbHxkV_cfl-0y3qXiaCuuFpbpLBKQ3eycMfgbvIRZopgTXESlSUwim-ruzVAlvRDElofSl8Kpw=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-9KfeAnPkXSUseCOUFNp1oh_tpe_VPUOpsKBT4hCx8789qLGNIQAEtu1RM6wSDJfVJCUakz6zlAbWI4R9LthCTMDPZfoUAGQNbR7f-7DzU2OEv5_N_F7tmVjtZQyafKUd8K3KOg=w196-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17nlX8cOAgkjEHa65fwiPnHC9UKSeMj0IvTcXgtVAEJy-IG4Z7WshfZUHGMrrB81dId-vcxSUHFBsy0C5GBQoHJMeAWmczIKEw1KJsDgdQtevTAa73dr6PmHFhttU10vy5z5Q9Og=w341-h540-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lsflciRztTOfnhNRH2PItBALng8Dm5ZEY-VID7RRJ8HYG9ihm-9GclfhNA3T7XaX8xsdUeTDxOsSxXfnjUN4QV37YbTfrqKABLnvaO19gdL3FWTpZxMQ12a8qMBWc7wccOHqk6A=w231-h237-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DcyL5srfFbOywR3obGKO921HZhjpZACxIIgf9ERvCmCnVRL8EFDFnYPqr7SGGCzTLwau6T7xmcV0I_F-1cHccGNBzhtiw5QMAlUhXIz_yLsqIGyx9SRtIor0P2MsWG6fhoDO_xQ=w178-h237-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wzG8UTvsV_a9juf3blF0AlAx8O5T2iBMm4futJp2TzrNCdAATCKTA71J2dE2KzhZE4S719P99hCjrNhIUCmXkCIvsToLkjvg0X--tsSHMjeaomXBW89GSBL4nX2RVNdIXvCAZFw=w180-h226-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2v1XG_X_HTN8Ifdv1FUOw5bCAmmMu-dgmSLfJcKTojB0V08Xp1TBd_glzl5Ipoq6Rkvfj_WyGnwJ1ybnSFeRe1j1C8ktmQANaIG3J8K_nY56FWFqJa3Fi9AwFYWAdpX2eIUBoxnA=w510-h105-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 3 de 17
Al momento de la carga de datos, el sistema solicitará ingresar primero la organización o entidad a la que se le desea enviar el evento y a partir de allí se mostrará la pantalla de carga, en donde el Tipo de Evento será definido por cada organización, pudiendo agregarse nuevos Tipos de eventos una vez que el aplicativo ya se encuentra en uso.
¿Cómo se entera la organización a la que va destinado el evento?
Las organizaciones adheridas a esta comunidad accederán a la aplicación en la nube, a través de un portal web que deberá funcionar en los navegadores web Microsoft Edge y Google Chrome últimas versiones liberadas al mercado.
Los colaboradores del área de Atención de Incidencias de la organización a la que está destinado el evento recibirán una notificación (por mail y un alerta visual y sonoro si están logueados en la aplicación) indicando que se ha generado un nuevo evento. Desde el área de Atención de incidencias se revisa el evento, determina si corresponde una acción y si este es el caso se asigna a un Resolutor; caso contrario se desestima indicando el motivo.
¿Cómo se gestiona la resolución del evento?
Los Resolutores que se encuentren en la vía pública contarán con un Smartphone en el cual instalarán una aplicación (distinta a la de los clientes) a través de la cual podrán recibir los eventos que les son asignados. El Resolutor recibirá una notificación sonora y podrá visualizar el evento en la pantalla, con información detallada para acudir a la dirección desde donde se reporta el mismo. Es importante destacar que los eventos estarán geo-referenciados, por lo cual el Resolutor tendrá la ubicación precisa del reclamo. Una vez en el lugar registrará el trabajo realizado mediante evidencias digitales como fotos y videos, que servirán para respaldar la resolución del evento. Finalizada la tarea del resolutor, la aplicación notificará al área de Atención de Incidencias, para que el personal valide los trabajos cargados y proceda registrar el cierre del evento. Al cerrar el evento, el sistema enviará automáticamente un e-mail informando la resolución al cliente que generó el evento y enviará una notificación a su Smartphone.
Esquema simplificado de la gestión del evento
Los colaboradores del Área de Atención de Incidencias podrán visualizar los eventos a través del mapa de reclamos. Allí podrán visualizarse todos los eventos georreferenciados, los cuales pueden filtrarse por diferentes criterios como: fecha, estado, tipo de evento, área geográfica específica. La ubicación del evento se visualizará a través de Google Maps, tal como se muestra a continuación:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BLk3gyRDYukBgXu-JLxgYt3KYEtL8ehyGrc35Ipb9d5hs30uwA_CNBOU7Eg0wRVr4uIVFKuLs3jQfox6aeOXsewlJXiikAobutUEBO_Kb4TzplMQOcyrFYeSaS8i5nqrBlpz-_w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2S3Vt3Au8Ob3XDRa_-o0gap9IIG49T5g-brKN3Wt3pvaHV1wAZGHP4mCDbafFHbCBXl8MzWdHDy0569-MCNP4SBNb4ogX2boKEOzHMLgt5HXAphPdQw9CcHpqI0IWips-WeUMv=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29aMDKfWZyI5fff9QtLcY3gMfHe-SKZ2a8VmK49pnMoM1yNZHYOlwnDU0QOXkQ-Fno4FI7y3PiiUXP7yJLk51sR9JZ7gHMJGeDeNRVzNR7RhWZMx-Fwi8z593WiXsACTJ2A1pZYQ=w474-h308-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fczYfb1QSW5881FpVCvPFiNET6AOBNHGTG-rWaZmiB8JnBeIKjsVA5wq9UHBp29ZGLehhFKAehHPqK_ZQtnkdjTZb8WjtaTR_dq6jpIbyNjVdla4DUdr4fwWunoqhlLZLxIY7=w643-h424-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 4 de 17
¿La organización puede emitir notificaciones acerca de un evento de manera “proactiva”?
El aplicativo permitirá comunicar a grupos de clientes sobre el estado o resolución de un evento generado desde la organización, como se muestra a continuación:
El sistema permitirá dibujar zonas dentro del mapa, agrupando reclamos a partir de una lógica determinada y enviar notificaciones push a los dispositivos móviles de los clientes. También existirá la posibilidad de publicar información sobre los eventos gestionados en las redes sociales (Instagram y Facebook)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ad0orASKbNQDw2I78pSRNQJmm13VgJYug1uf9oXFXnC2E83SmmiU22R05EYsAWEb04uIAK744lHtuiuO8S0EojBy7zQXdQnh4RriWo3l9PRsWo_iGBX27V90O8N5APWWm32RTjg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1RTat07nowcZAVv-uUk7LbZEQUwjVUBzMfOL1936dmbVxlsFYLdJ1_DXA-2f4HuSGk_MH8GNhr01NVRjin_n6yq2GYk0ZhHhsIyOPPuPToKrbrDXIHVgCdMqUCxsU4Bg0BJtHxTA=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 5 de 17
Otra de las alternativas es que el mismo cliente realice el seguimiento de los eventos reportados, pudiendo realizar filtros por organización a la que van dirigidos, por número de evento o por estado. El aplicativo podrá adaptarse a la imagen corporativa de cada organización (logo y colores).
Identificación de Casos de Uso: Nota: El listado de casos de uso no es exhaustivo, se incluye a los fines de una mejor comprensión de la funcionalidad del producto.
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
1 Seguimiento Móvil de Eventos
Registrar evento Registrar los datos de un evento, detectado por un cliente de una organización adherida al servicio, georreferenciándolo.
AP: Cliente AS: GPS
2 Seguimiento Móvil de Eventos
Modificar evento Modificar los datos permitidos de un evento por parte de un cliente de una organización adherida al servicio.
AP: Cliente AS: GPS
3 Seguimiento Móvil de Eventos
Consultar evento Consultar los datos de un evento por parte de un cliente de una organización adherida al servicio.
AP: Cliente AS: GPS
4 Seguimiento Móvil de Eventos
Eliminar evento Eliminar un evento por parte del cliente que lo solicitó siempre que aún no haya sido asignado para su resolución.
AP: Cliente
5 Administración de usuarios móviles
Registrar usuario móvil
Registrar un usuario del sistema para hacer uso del aplicativo móvil
AP: Usuario
6 Administración de usuarios móviles
Modificar usuario móvil
Modificar los datos permitidos de un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
7 Administración de usuarios móviles
Consultar usuario móvil
Consultar los datos de un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
8 Administración de usuarios móviles
Eliminar usuario móvil Dar de baja un usuario del sistema que hace uso del aplicativo móvil
AP: Usuario
9 Administración de usuarios móviles
Asignar perfil usuario móvil
Asignar datos del perfil al usuario móvil AP: Administrador de App Reclamos
10 Administración de usuarios móviles
Recuperar contraseña Informar a un usuario móvil su contraseña.
AP: Usuario
11 Gestión de organizaciones adheridas
Registrar organización Registrar los datos de una organización adherida al servicio.
AP: Responsable de Organizaciones
12 Gestión de organizaciones adheridas
Modificar organización
Modificar los datos permitidos de una organización adherida al servicio.
AP: Responsable de Organizaciones
13 Gestión de organizaciones adheridas
Consultar organización
Consultar los datos de una organización adherida al servicio.
AP: Responsable de Organizaciones
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03RFoieQ21-aFz9CIMtGZGjRxCsnoRcBuucyfF4OgKbPfsJ79V3MGYWZKuRzGmimu0VKkZNMYS_H-XxcsZxIF07StIsWtZ27GXiOW9W3LEH6cWF_NLE6bqOnoZWQKR75_Hj0-bxg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cdOP2zjdijTGcq305bjm5cM3LtUk2IDBK1K7be6BL7O2BfWPuLoqElvQKS4_cAxNXZj7P8mHKikj5bQWiTSRRknRuNF_2YJGbtAkSH7uUJgcMnoTnutE_HDIUZ0gGR75mdzhWIw=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 6 de 17
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
14 Gestión de organizaciones adheridas
Eliminar organización Dar de baja una organización que no desea estar más adherida al servicio.
AP: Responsable de Organizaciones
15 Gestión de organizaciones adheridas
Registrar tipo de evento
Registrar un tipo de evento para una determinada organización, indicando los datos que se solicitarán al cliente.
AP: Administrador de App Reclamos
16 Gestión de organizaciones adheridas
Consultar tipo de evento
Consultar los datos de un tipo de evento para una determinada organización.
AP: Administrador de App Reclamos
17 Gestión de organizaciones adheridas
Eliminar tipo de evento
Dar de baja un tipo de evento para una organización.
AP: Administrador de App Reclamos
18 Gestión de organizaciones adheridas
Modificar tipo de evento
Modificar los datos permitidos de un tipo de evento para una organización
AP: Administrador de App Reclamos
19 Gestión de usuarios de la organización
Registrar usuario web Registrar un usuario web para un colaborador de la organización.
AP: Responsable de Organizaciones
20 Gestión de usuarios de la organización
Modificar usuario web
Modificar los datos permitidos de un usuario web.
AP: Responsable de Organizaciones
21 Gestión de usuarios de la organización
Consultar usuario web Visualizar los datos de un usuario web. AP: Responsable de Organizaciones
22 Gestión de usuarios de la organización
Eliminar usuario web Dar de baja un usuario web AP: Responsable de Organizaciones
23 Gestión de usuarios de la organización
Registrar perfil Registrar un perfil de usuario organizacional.
AP: Administrador de App Reclamos
24 Gestión de usuarios de la organización
Modificar perfil Modificar los datos permitidos de un perfil de usuario organizacional.
AP: Administrador de App Reclamos
25 Gestión de usuarios de la organización
Consultar perfil Visualizar los datos de un perfil de usuario organizacional.
AP: Administrador de App Reclamos
26 Gestión de usuarios de la organización
Eliminar perfil Dar de baja un perfil de usuario organizacional.
AP: Administrador de App Reclamos
27 Gestión de usuarios de la organización
Asignar perfiles a usuario organizacional
Registrar la asignación de uno o más perfiles a un usuario de la organización.
AP: Administrador de App Reclamos
28 Gestión de usuarios de la organización
Iniciar sesión Iniciar una sesión de trabajo en el sistema ingresando un nombre de
AP: Usuario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1auh5QipM1TGd2gya_nizZmbahOJ4WsKC3UBnDiTWGcbe24uHcnzBKHHX-g4mVKYI-XTzLnbKZIBgRpWnNw-NJsUzz6WjGgWlMGp6-f9ix2Ar6VKzkmHe2m_ZMvuovRiPf9Wkkdg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24Md-OX-lOtoGlFzpAU3mKWiqi_B1nKwbERIXO-IeU1o_52d100BnSt_LSRiNQ_io8z1Nb30yyqsgoEY4QThsgijpqhOzciIbBmqlo4fOK0aaCG5YlYuOrHHcmNMGswp60SuKPgA=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 7 de 17
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
usuario y una contraseña y validando los permisos para ese usuario.
29 Gestión de usuario de la organización
Cerrar sesión Cerrar una sesión de trabajo en el sistema cuando el usuario así lo requiera
AP: Usuario
30 Gestión de usuario de la organización
Caducar sesión Cerrar una sesión de trabajo porque ha transcurrido el tiempo definido de inactividad.
N/A
31 Gestión de eventos
Visualizar mapa de eventos
Visualizar en el mapa eventos generados para la organización, aplicando filtros de estado, fechas, tipos de eventos y ubicación.
AP: Colaborador AS: Google Maps
32 Gestión de eventos
Asignar resolutor a evento
Asignar un evento en estado Pendiente de Asignación a un Resolutor de la organización.
AP: Colaborador AAI
33 Gestión de eventos
Desestimar evento Desestimar un evento al que no le corresponden acciones para su resolución, informando el motivo.
AP: Colaborador AAI
34 Gestión de eventos
Registrar trabajo realizado
Registrar el trabajo realizado para resolver un evento por parte del Resolutor, adjuntando fotos y/o videos si así se requiere. Utiliza el servicio de GPS para geolocalizar el evento y poder registrar el trabajo realizado.
AP: Resolutor AS: GPS
35 Gestión de eventos
Registrar cierre de evento
Registrar el cierre de un evento resuelto, con la opción de publicarlo en redes sociales y notificando por mail.
AP: Colaborador AAI AS: Facebook AS: Instagram
AS: Servidor de Correo
36 Seguimiento móvil de eventos
Realizar seguimiento de evento
Consultar los datos de un evento, los trabajos realizados y la fecha y hora de cada acción.
AP: Colaborador AAI
38 Gestión de eventos
Enviar notificaciones a clientes en forma masiva
Enviar notificaciones a los dispositivos móviles de grupos de clientes y notificaciones por mail, sobre un evento generado desde la organización.
AP: Colaborador AAI AS: Servidor de
Correo
39 Gestión de eventos
Enviar notificación a cliente acerca de la resolución de un evento
Enviar notificación al dispositivo móvil de un cliente sobre el estado o resolución de un evento.
N/A
40 Gestión de eventos
Enviar notificación a colaborador ante evento nuevo
Enviar notificación a los colaboradores de la organización ante un evento nuevo generado por el cliente.
N/A
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18POUye2-7hhHMGdWmJfL7nX44kShDORejiK-qwy-idQctCzzKCM8okqHpdMxHkwYFDdWDiDSZ156h5xm2lbmWGq-WziNux8up4JeBoF9CPrzY3FiWUiIhYVFsMbm0wTiLb7QS7Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qjYTWqhKljzn_pCjH4g90EhGO2t6qSKVRK3Zuy3fDEnxnWHzOC3t_93iGeAGmYGjbSTGtXT5c6TZ_xodH8WM8xhoEw27jXo9duBG9T5FfrbWfUS32UQqBMvCUsZjtIt45hIr53w=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qb4BABNrnt5O9E--Wp7v86dXOfZPE_DEAo31vrbsae-sdcu_GRxvmk-9_A1UjX1TnRM_w0p1RvCAtBkU34ooNqi5kEntKTQFC520gEFO_mI_naRy3kdxpu8UdOD6ehPRCCVdAoA=w244-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10azbSHflWN79JHK0HTJMrpcQM93WrUMqcgpz7LX6Q29IAy5QzeiHcmFfLNPdrwyULU-MD3dpKtf-ma52WJJqeJx8A5Xgp-SDEFE29888WRDbM-6rb__TVbIGhJ_wPWnQ_UuawCw=w256-h256-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H8XYQboauY8TvkX1oAee1XxCKuo1_010X5m63nrG0TsgyPeP3wRqViuTSfL169sYepoCGMLH0yGSEIDiPgdVjCIdrxjfcAnZ4zLUfndC2UU1wOWrN_keZExFXFzk2_znI2waQ=w180-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1G5bRMCzpTSi5iIImX4e9DB_q8pEj2G7ef1eYUFwsagGVEdN_PEMtEiThUWZa2_LB9exU3XTTAn8gNEWz5cMQYrKfdaWWQ38ucsEVqYF_gurq-3D11UlU45P6tu7rQDsocKVMPeg=w264-h241-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 8 de 17
Nro. Paquete Nombre del Caso de Uso
Objetivo/ Breve descripción Actor
41 Gestión de eventos
Enviar notificación a resolutor
Enviar notificación al dispositivo móvil de un cliente sobre el estado o resolución de un evento.
N/A
42 Gestión de organizaciones adheridas
Configurar imagen de aplicativo para organización
Configurar logo y colores del aplicativo para la organización.
N/A
43 Gestión de eventos
Generar Evento Masivo
Generar un evento que afectará a una cantidad de personas en una zona determinada de la ciudad. Se puede extender con otro caso de uso que enviará notificaciones masivas utilizando correo electrónico y enviará notificaciones push a los dispositivos móviles de los clientes.
AP: Colaborador AAI
Roles de usuario principales
A continuación se describen en términos generales las responsabilidades de los roles de usuario que se vincularán con el software:
Cliente
Persona que va a utilizar la aplicación para registrar un evento.
Está familiarizado con el uso de Smartphone y puede instalar la aplicación.
Su expectativa es que la organización responsable resuelva el evento lo antes posible y lo mantenga informado.
Administrador de
Aplicación Reclamos Persona de la consultora que va a configurar y personalizar el aplicativo para cada una de las organizaciones adheridas.
Debe estar familiarizado con el uso de aplicaciones WEB.
Colaborador de Área de Atención de Incidentes
Colaborador de la organización que va a gestionar los eventos reportados por los clientes, utilizando la versión web de la aplicación.
Debe interactuar con el sistema para asignar los eventos a los resolutores y validar los trabajos realizados para dar cierre al evento.
Debe estar familiarizado con el uso de aplicaciones WEB.
Resolutor
Está familiarizado con el uso de Smartphone.
Debe utilizar la aplicación (distinta de la del cliente) mientras está trabajando en la vía pública, por eso necesita recibir los eventos que se le asignan con notificaciones sonoras.
Necesita visualizar la geo posición del evento para poder localizarlo y necesita minimizar la cantidad de interacciones con el celular al momento de registrar los trabajos realizados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14GqehbDfyWhEHJxfLDEEBSNj6vohaUvE05LgjreG5mn8HX7RZ5CZhPbsvPlfRWgCTF2uTQ3m4Ei5LsQUC7msrD3T8zyadEUTaz84zKzuEPKSKRp2SJD6FhM8ID-fEQz_imUUM=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_FeUQTYCZ2LTj5XURz5eb4X7Di40u7Kk_DI9CXLyqfIqVPG14xmBqnxDgdxjhEop7CT2Be_MO6tG_mb6_QNSFHom_jGnxXDROiuG1wTt3778pFJ1zNODbCFxDpLH9Z-DztFRUOQ=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 9 de 17
Requerimientos No Funcionales
Nº Nombre Descripción SPA Prioridad Justificación
1 Aplicación Mobile
Los módulos para el cliente y el Resolutor deben poder ejecutarse en Smartphone con acceso a internet y al sistema de geoposicionamiento.
Si Alta La aplicación está pensada para ser ejecutada en dispositivos móviles compatibles con el uso de GPS.
2 Sistemas operativos móviles
La aplicación debe ser compatible con los sistemas operativos móviles IOS 17.3.1 y Android 14.
Si Alta El lenguaje de desarrollo de los módulos Mobile debe ser compatible con los sistemas operativos móviles solicitados. Los componentes de código serán los mismos que se especializarán al SO en el momento del despliegue.
3 Sistema Web
La aplicación debe ser programada con tecnología Web y compatible con HTML 5
SI Alta El Lenguaje de Programación a utilizar deberá soportar desarrollo web y ser compatible con plataforma HTML 5.
4 Navegador Web
El producto funcionará en los Navegadores WEB Microsoft Edge 120.0.2210.167 y Google Chrome 121.0.6167.139.
SI Alta Se considera significativo porque el uso del lenguaje de programación web puede tener variantes para distintos navegadores o distintas versiones del mismo navegador.
5 Servicio en la nube
La solución se ofrecerá como servicio SaaS y Tecnología Cloud
SI Alta Se requiere que el sistema se realice en un lenguaje web y distribuido para ser ejecutado en la nube y accedido desde cualquier ubicación con conexión a Internet.
El despliegue será en un único servidor.
6 Redes sociales
Integración con las redes sociales Instagram y Facebook
SI Media Se debe desarrollar web-services que permitan publicar contenidos en las redes sociales Instagram y Facebook.
7 Ubicación del evento
La ubicación de un evento debe poder visualizarse a través de Google maps.
SI Alta Se resuelve insertando una librería provista por Google Maps que se comunica con la API de Google Map que brinda el servicio.
Los aspectos arquitectónicos están cubiertos por el RNF 16.
8 Seguridad de usuarios
El sistema debe permitir la administración de usuarios y permisos vinculados a las acciones que pueden realizar los clientes y colaboradores de cada organización adherida así como también gestionar la seguridad de los usuarios móviles asociados a clientes.
Si Media Se debe desarrollar un módulo que permita autenticar usuarios y sus permisos, tanto de los usuarios de la organización como de los usuarios móviles asociados a clientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E8s7ErhVYjxyiDZt___FRQ6lal4y1rOqYAWjoYC_q7QpXfxegilftjTNR-SaXQ0ySElnfZIuphacYav6ZAoZKfXOCDwF8HBYx1j-Et_J8c8V7NNdNoxDbiQtvobaX5V2e2zYAuQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DgTBz4BvHH96spqv3d4RMIRR2GXj_yhLWnDYRnB6TGOO3Vqor4VMTKx4Jswm4WCJ822UY4AUu8JmH1Xb_fFDEIB-_brkwpOS1nqDqHTiltTK3iWzs5xEHSjlOcvvSIkxo5Y2Csw=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 10 de 17
Nº Nombre Descripción SPA Prioridad Justificación
9 Notificacion es sonoras
El sistema debe generar notificaciones sonoras al momento del ingreso de una evento para el resolutor y cuando el evento ha sido cerrado para el caso del cliente
NO -- N/A
10 Campos personaliza bles
Los campos personalizables de un tipo de evento para una organización son de tipo texto, numérico y lista de opciones.
SI Alta Se debe elegir un framework que permita la creación de estos campos dinámicos y un componente que resuelva la forma de almacenar estos datos dinámicos en las tablas.
11 Formato de fotos y videos
Las fotos a publicar en un evento pueden ser .jpg, .png o .gif y no pueden superar los 3 Gb.
Si Alta Al ser de hasta 3 Gb las imágenes o videos deberá analizarse el impacto en la arquitectura de la aplicación, debiendo decidirse si se almacenan en la BD o en un File Server.
12 Interface con GPS
El sistema utiliza el sistema de geoposicionamiento de los teléfonos para su funcionalidad.
Si Media Se debe desarrollar un componente que interprete las coordenadas del GPS.
13 Envío de notificacion es por mail.
El sistema debe poder enviar notificaciones por mail a los clientes.
SI Alta Debe existir un componente que genere y resuelva el envío de mails.
Para hacer el envío de mail se utilizará un servidor de Mail externo, Exchange.
14 Notificacion es push
El sistema permitirá dibujar zonas dentro del mapa, agrupando reclamos a partir de una lógica determinada y enviar notificaciones push a los dispositivos móviles de los clientes.
Si Alta Desarrollar componentes que permitan resolver el envío de notificaciones a un grupo de clientes en particular.
15 Logo y colores
El aplicativo podrá adaptarse a la imagen corporativa de cada organización (logo y colores).
No - La inclusión de imágenes con los logos y cambios de colores no condicionan la estructura de software.
16 Interfaz con Google maps
El sistema debe establecer una interfaz con Google maps para aplicaciones mobile y web
Si Alta Se utilizará una librería que provee Google Maps, que es la que se comunica con el servidor de Google Maps.
Esta librería provee el servicio de visualización, tomando las coordenadas de GPS para armar el mapa que se necesite.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W8jJuUBwfBRHh4ekuSOAfEcIISGCx3kWVW2bvoRKMGpY3TkS5rZLl57jiWbeMMp0RpvU71c-q-gLVb80f6Qo6kGRQcgW9-GqCinCInbyZAb0AMZpZLkisTwsKQFLNreKwOvfkEg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wjZ-VoPCHfHg10fUJGT4QZqCJ92O8qLJi8hDEv2Qc2x_MGnz-UuNhRdCvS5rIb0FngjevWwi5MQ6wyncbRip79IjcMfjiTZ6fKO6ps64HfI9wvkcMUMbVj6LY72DC6yW6wNor=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 11 de 17
Solución Propuesta 1. Estilos Arquitectónicos
Arquitectura en Capas (Layered)
Aplicación: Se utiliza el patrón para organizarla implementación de este sistema en capas de servicios auto-contenidos, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable.
Motivación:
Independencia antes los cambios. Las interfaces estandarizadas entre capas limitan el efecto de cambios de
código a la capa a modificar.
Reutilización de servicios brindados por la interfaz brindada por cada capa.
Mejorar la portabilidad. Los cambios de hardware, del sistema operativo y todo lo que afecta solamente a una
capa, se puede modificar sin alterar al resto de las capas.
Estilo Arquitectónico N-Tier Client Server
Aplicación: Se utiliza el patrón para implementar la App Reclamos. Corresponde a la vista de ejecución (runtime) que destaca sobre la estructura de capas del patrón layered las comunicaciones entre las capas y sienta las bases para la distribución de estas capas en los niveles de hardware de la arquitectura.
Motivación: Dividir el sistema de Gestión de Reclamos en capas que se comuniquen entre sí únicamente con las capas continuas, disminuyendo el acoplamiento y aumentando el encapsulamiento en cada capa.
Comunicaciones síncronas para manejar las transacciones respetando la performance y confiabilidad requerida.
Posibilidad de utilizar clientes Web delgados, que no requieran demasiado hardware.
Separación de los distintos intereses en varias capas lógicas, facilitando las modificaciones y extensibilidad del
sistema.
El patrón presenta una solución arquitectónica para toda la aplicación.
Capa Presentación Web - Mobile
Capa Servicios Web
Capa Lógica de Negocios
Capa de Persistencia
Capa Administración de Datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BgWWKkDxSBEGMUwpBbL8w_wEcoeT0GxvBu_2LJ9RgXZc-cQmMimoVUzq193Udv0O5PyZ0anjuh-bps-g2U8UxYrpOgh2qWgkeAIE766itez-ineV_vts5l0SmH5KAeTXZwj2m=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zjasNhTDfM4bgG-mCHD0-4jwdk4pgWQdTU2whF97pQMBZwd47bclRNmypAE-LZ_Ym_ESeCR8iS6MXzMX2CKss-coDFPWnBc-iBWkiLQ9nhKPrwvrUKlXChFIi5TwSE1P5x4rHkw=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3t9xJXknBQ8F1zM03eVuQHjD5A8DFrym3MVIM3__uXkdzTklI6pgeu6nduTSgoTZS2AWxAtIYpeO8X_IDdnlQSCIWypC0eE_BgAibJF9ndmcNjzMKbrVHPh4VWSdVzgopG9T6QCA=w1130-h216-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AjJrOgiNrs98t_IvvLtL7KNUKhgr4xqnG9b2fztCnFwXXfQXU--pIGdnismTgXUm589QGJ2tjvbT3GUGFUvu6701KXEtjWOu8ae0-YcL3YWovjyEUADi-GQB9uIzofQyXEvZq6A=w198-h78-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ufLghvWENzYOoieTSGIKd0PfT2ZSyblqdG3pRxd7Mq5aLxSfSRjWwUEnUTzqxKVYorlc7Uym0d4_2y_G1VJ6vWlPGA0C67QPSDk0d58mr6uJ07HwrjVMjMJsJSz0bm6o7ylCbgA=w251-h112-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-uKMcwW6Ve3h5uib068vH1-BjWOyzF_50Z089l8XV1QNvEFmGAgSlTZ4acHUI2BnEPdq63Tjyj1Mn9-dqitaYPeI6QcVvSfGipG_EhZ5d2SaBaNnwd7iA2INxDFSNeUj53Y_elw=w390-h70-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ThiDlUsDNlwCeT4ZfToaQWI5ktnbGYb3jmGQdvv3TdXFsy2znnja9kRPOyCAjFVtj5cv3cDU_8764oUA68LFJKTl3boczUjmL-nSgwq1gwbQW2KS7VxZq_BrWGLrlEIudS-buSg=w390-h69-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WChFQFjlHDRnpQCLkFLgSr2LdcynZx5l6Ncw9joaThRnD5ZL4EWgvMC--OmN8fBToVSBsH5rST9csBNd6sVxY6H7juCgveopnxl46LbnRI-j0_myVj7ixQweGGGeFgkDM_uMYiA=w1043-h403-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JYkD34Vrxec28OCyPwSZ5DKFEQq2G2wYhhuvvwcZ5FNQEh8Y_QZvBqvqP3r-z3ZL0yoDgI1kfZx4XEPOP1CTiGTLo9JKg7PFE3wK37-dnxPqm0VNm6b-JV-UqwSJIN_Mn2iI4=w246-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DhmpnKkXEOUou7bQdeLgJo2Ue2PagW1CTdzrpFfaPAmn0C_B6fVxwjxPHTVYS3t6x0e0GkMIcmmAqW5Xj9zZnYATyYE2AlFAYvCUGk-mQHIygmgPxptfCfTiCR3TbRj_4tgCxCA=w745-h49-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30AfJZiMT161M-wwj8aO2rkuZ6phUOw1cNJJ_zVPKRVGqgXTMqtm1IYdQc1oZ2KQuriCi_txEfkGYhDDeUI0i_8gA6vOTuOjOJ8mjq6BJAHmN_pSSw6hXvziXwooajIVjlAAbTwQ=w744-h49-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31gJVdtXQX_RyWLbJxWupwkYkDPIO9di1eeAXi3kZPu5sBEUScPkYbiWyPb8w_akXQ4x-oer998btpSPwiQSXAx9OK9BfTxxtZ62PorfU0NP-lsT14ZHBpXW4tJDfd2h9a3jA2=w744-h81-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1noSH0ebrnKLjyflKxWSFSW99XMbcEmR3fLbwgSfrrwguCAGZIajl_ivojWIrmtg04GHvLXbaF_kSxTLU_JwTB5e29du8NzJiJQjcuQO-LQwl4T8yZsckW7EPDCtMqfPjpG7oi-g=w239-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07hajoZKPmc9WMGxGtM3Kzv1iYmMA_YdOQlf3CoNs-Yi5KONitu74GrZBvg8lZYu723vqgCquYiFX9fTLuHMn-ej_-AyTY0BHbugt-1_rBu0URbIizPVX3XTjXscs8XkcCg5tgkw=w239-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fyvnKbcL92J5iXOOc7bKn9ahcmHoESqZe2Dg8lxsiril7pNC6ek63PUQnMVDDe8wIMEPB2u1eNEoFUIQtU3NAXFHW-o5391PMfyeYlRmQmbaBg9BbE7huUoJW-U5ztrGJ-Om4tw=w239-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SkqzKlvkiP-0S1hn-XzcV_ggFnGjAZknwU62stXTrCsXzOjIDQ-JS4JkgLt3Yam48jiGpteR6EZBV50ePAxzF6LfyatnKZ0ke6rLHRuJ6nTlCxzZ9TbWI6tfXp-ILncESoemL=w276-h87-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 12 de 17
Estilo Arquitectónico Publish and Suscribe
Aplicación: Se propone este patrón para resolver el envío de notificaciones por un evento generado por la organización a los Smartphone de un grupo de clientes. Los clientes destinatarios de las notificaciones serán seleccionados dependiendo de si son o no impactados por el evento que se notifica. Motivación:
La generación de un evento por parte de la organización que necesita ser comunicado a un grupo de clientes implicará el envío de las notificaciones al Smartphone de los clientes afectados.
El componente que contempla el envío de la notificación del evento actualiza el tópico correspondiente.
Los suscriptores son los smartphones de los clientes, que necesitan publicar la notificación para que cada
cliente pueda visualizarla.
En todos los casos, la notificación refleja la suscripción de los Smartphone de los clientes impactados por el
evento.
Componente Notificación Push
TÓPICO: Notificación de evento Suscriptor 1
Suscriptor N
Clientes Web
(Navegador)
Servidor Web
Servidor de Aplicaciones App Reclamos
Servidor de Bases de Datos App Reclamos
Capa de Presentación
Capa de Servicios Web
Capa de Lógica de
Negocio
Capa de Administración de
Datos
SW para Cliente
Mobile usuario
externo
SW para Cliente
Mobile Resolutor
interno
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UR9r5HAhkFMdgp2XJNkW1HZgdHU6dUfdxXfOlX2iCsdxv9pwE8ImJYibOSmuzhbzHuyiBlezwv0Eb1DNX-zZrR-9Wagt_wVFFWXtH9gKFZeeXRKDcwB5R1OQEv7CaVjZud92uOg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Nu2lb4bE56hHYeZ8TpD23bKRybnpwkrmByRGL8DiHVKeA3qkTBKZgcpEbysi97eN94F1V6EYrlF129r4NR1ubbAuqzS9OmfSsmlxWkZPkjwKRJBxz1c3fMTCvHLH4x8haPDMPFg=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k7vFQjE9M2xRU7Hymmu8OEN9jQ4blQxlDdmrhanarRnNBFXK8rAW50dNUGAiOm2cq35L-RNPGC9VgwB-eQaBGTtA0-rddkBAvTxEgwtlDt1T3Vp1yp3YxZIKUw7Gkkr9m91yI=w1280-h1166-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 13 de 17
Vistas arquitectónicas:
1. Vista Arquitectónica de la Funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PWB7GvNlwAuGRy-aRHR_xqXWJKBMHCowKKlzxtQeMdfY3ZOHYmL_1Sp_577GImJEJ1pJYi9fSVXUIQv9ckfr6I4waO0GOUdLA5FOPwPksPD7Rdr36MUvRQJS6DBfhger16UGG=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Pi_aHCUvG-2kH1F6aSAiOgBTDrMiDfQSCHWEuU6_y9WOYUlqeWAOlq_2u5YYpo2RnhDzWKd4h6bweS0wiJQtlum3FjpNUVcPhN15yN2FBgUXJdCVwdFTCp7oXLo5LucemeJXLTQ=w135-h181-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 14 de 17
Justificación de la inclusión de cada caso de uso en la vista: Casos de uso Justificación
15. Registrar tipo de evento, 16. Consultar tipo de evento, 17. Eliminar tipo de evento, 18. Modificar tipo de evento
ABMC representativo, elegido para resolver aspectos relacionados al acceso a base de datos, diseño de interfaz de usuario, algoritmos de programación, que define la arquitectura del resto de los ABMC. Vinculado al RNF 10 de Campos personalizables; al RNF 3 Sistema Web; al RNF 4 Navegador Web. También se asocia el RNF 15 Logo y Colores (aunque no sea SPA).
1. Registrar evento Transacción mobile compleja representativa, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario, implica la creación de un nuevo evento desde la aplicación móvil para uso de los clientes. Vinculada con los RNF1 Aplicación Mobile; RNF2 Sistemas operativos móviles; Vinculado con el RNF 11 Formato de fotos y videos, ya que el cliente puede subir fotos y videos y debe resolverse en la arquitectura como se realizará el almacenamiento de estos archivos. Resuelve el RNF 12 Interface con GPS, debiendo interpretarse las coordenadas del GPS para geo posicionar el reclamo al momento del alta. Se asocia también el RNF 5 Servicio en la nube.
28. Iniciar sesión Caso de uso donde se resuelve la problemática del manejo de sesión, validación de permisos de usuario, la seguridad de la información en la sesión, y la visualización de datos en función del usuario logueado, asociado al RNF 8 Seguridad de usuarios Autenticación de usuarios.
31. Visualizar mapa de eventos Representa los aspectos arquitectónicos tales como performance de acceso a los datos, tiempos de respuesta en la generación de reporte, formas de visualización, entre otros que hacen a la generación de los reportes. Resuelve la arquitectura para el RNF16 Interfaz con Google maps en su versión web.
34. Registrar trabajo realizado Transacción representativo de la aplicación móvil para la organización, donde se resuelven aspectos vinculados al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario. Vinculado con el RNF 11 Formato de fotos y videos, ya que el resolutor puede subir fotos y videos y se debe resolver en la arquitectura como se realizará el almacenamiento de estos archivos. Resuelve el RNF 12 Interface con GPS, debiendo interpretarse las coordenadas del GPS para geo posicionar el reclamo al momento de registrar el trabajo.
35. Registrar cierre de evento Registrar el cierre de un evento resuelto, con la opción de publicarlo en redes sociales, notificando por mail. Vinculado al RNF 6 Redes sociales, que permita publicar contenidos en las redes sociales; al RNF 13 Envío de notificaciones por mail. Implementa el RNF 9 Notificaciones sonoras, ya que al cierre del evento debe resolverse como enviar notificaciones sonoras a los clientes. Relacionado también al RNF 3 Sistema Web; al RNF 4 Navegador Web.
38. Enviar notificaciones a clientes en forma masiva
Se elige este caso de uso para resolver el RNF 13 Envío de notificaciones por mail, en donde debe enviarse notificaciones por mail a los clientes y al RNF 14 Notificaciones push, que se resuelve aplicando el patrón Publish and Suscribe.
43. Generar evento masivo Transacción web compleja representativa, donde se resuelven aspectos vinculados fundamentalmente al registro de logs, acceso a base datos, algoritmos de programación e interacción con el usuario, implica la creación de un evento masivo, que luego será notificada masivamente a un grupo de clientes, desde el caso de uso 38. Relacionado con los RNF3 Sistema Web, RNF4 Navegador Web y RNF5 Servicio en la nube, ya que la transacción debe ejecutarse en el entorno web y ofrecerse como un servicio en la nube.
Nota: se asocian más de una vez algunos RNF para dar opciones no es necesario que los estudiantes lo hagan.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZiVuEIGauagagyYVLDoRvQNSLFq1MWHT0DwFFzp4IFy5Ed0XHojmklynPNojG-d5Q6bGDLGTFvl-0MSmm7Xhab4017ZOB_kLMyuRZtxdfQufCQKcZnRswDnUGLPr7PCdSfZMvHg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LIxA0f1Er9RNmRRN3QCf5e0vLYJHRSrwVUKGa7ieShyOlmvplXm6BAObJItaPPB5KQcSCk7nKTlOc8xNnnmKRvJbIe63927wEROu2VG4O02ovFTD4tZ91MQ7VMBPXGKOx4SkJ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ncoy-N9fA8Hlp0jIawbpqiZqyAc5Ar6VBP3u9aZZFd2XEO5fEoagv5LmI--XrGSTuQrkSrGdoQdAu5La0PPSVD_jES2qKURv9zHGRTXj6mWDi4VBnV7TDc-MUpS_8KlbiImGt=w1280-h1107-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 15 de 17
2. Vista arquitectónica de Diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SgIapCvrtjO8HOrZPuyjRZ1zzhu5y83bIvEehtNSV2PaNFc7Wxfhpdfb1QVK-NsdLl6AgiduLgtZrRsISXPp1RdLjLH3bOQoDcOHPHJKfCAjf1xhKLlqHwinTAqU5mHA58KXp=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QMxRQHD0VcPHXFL23RSVZO92WJPjvwEa10paUnpYQ2Lz-37uh-v4af2upwd3vBaG8R_XQAifrbN3qQryth6czWONDjtHRXPsLF8G5_pp58ZP_OOJ3cPaJZs2PFpGPg5rMeDdPZQ=w135-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SzQ_8S9fFy_54986ipUnTai0ARgIj3rl47j9Rh2d7TxmwpxVwTQTKipJ5OPfw5emfA2r-sJo4lYXhgmrJdj5Eom2Qtm_swgOp-ZNUnGxKdg_t0o8qXDHIa8H4O7Zqke1HDyaRtA=w1280-h1143-v0?authuser=0)
Caso de Estudio: App Reclamos
Diseño Arquitectónico con Monolítico
Autor: Laura Covaro AppReclamos_Arquitectura_Monolítica.docx; Versión 1.19
Hoja: 16 de 17
2. Vista Arquitectónica de Despliegue: Nodos y Componentes
Nota:
- Se distinguen los clientes mobile (Android e IOS) dado lo aclarado en el RNF correspondiente. - Los servidores podrían unificarse considerando que están en la nube, por lo cual se desconoce su
distribución. - Es válido que el servidor de mail esté conectado al servidor web si el componente está en ese servidor. - La solución propuesta asume que la librería de Google se instala en el servidor web, y resuelve la conexión
con la API de Google maps. - Pueden no poner el componente de GPS.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fUL-AtJ6lmYMdpy0b3NAzR88cBbLkETedLHsqfbDAWY_r8kWfbUz-eWplFbVrl7_LQesofMLV-Ba0NxfpJJMzSjHlZu-3Rq17kYFs2ORVnCdyQq05RyqCPopoLvhpQR5N5iej_A=w839-h1187-v0?authuser=0)
