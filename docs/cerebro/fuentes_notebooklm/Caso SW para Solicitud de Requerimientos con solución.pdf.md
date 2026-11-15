# Caso SW para Solicitud de Requerimientos con solución.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta un 
caso de estudio académico sobre el diseño de sistemas de información
 enfocado en automatizar la 
gestión de solicitudes de requerimientos
 para una compañía de desarrollo de software a medida. A través de sus distintas secciones, el texto explora la 
lógica del negocio
 y el 
ciclo de vida de los proyectos
, detallando cómo interactúan los clientes, analistas y consultores desde la creación inicial de una petición hasta su eventual despliegue o cierre. Asimismo, la fuente utiliza 
diagramas de máquinas de estados y modelos de clases
 para ilustrar de forma práctica los cambios de condición de las solicitudes, la trazabilidad de los responsables y la necesidad fundamental de 
mantener la consistencia
 entre todas las perspectivas del diseño a lo largo del desarrollo de la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uMjlL_r2hqNG9MONvX8ZyDQjpzSwUCanw6b028JFbKhAq24-Ep7kzeTO_RixEOtLiXW-8YZIpXKWGOXs2ZoTUPg1NyUXUy4cYV6xRO-rIqKvhQbT11LryD94Vz2eBs1RlLIorww=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1v15RqYMJ9MwjqNax8Y0DxYfYnLIBVG0C-US7zIPmjw2zoOeAO-KQGt-0ZPpd6gP7PG597s8Zfh9GqSncnn19QOvvzZKsqqvlhD64a8xd0DQmBdZiNYzqZ8NKPbdBLCyO7XTnzGg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
1 | P á g i n a
Caso de Estudio: Software para gestión de requerimientos en una empresa de Software.
Una empresa dedicada a ser productos de software a medida ha decidido construir un producto que permita administrar
las solicitudes de requerimientos que los clientes realizan.
El producto será construido con tecnología web responsive, dado que la intención es que los clientes ingresen las solicitudes
de requerimientos ellos mismos.
Las solicitudes de requerimientos (SR) pueden ser de diferentes tipos, según sea:
Desarrollo de un nuevo producto de software.
Agregado/modificación de características a un producto de software existente.
Defectos asociados a un producto de software para el que la empresa tiene contrato de mantenimiento vigente.’
La primera versión del producto deberá dar soporte a la gestión de los requerimientos, desde que se crean hasta que se
les da un cierre por el motivo que fuere.
Seguidamente se describe el funcionamiento esperado para el sistema:
Las SR las crea el cliente ingresando los siguientes datos: Cliente (si no está registrado como cliente, primero deberá
registrarse); producto de software asociado (si existe), tipo de SR (selección de uno de los indicados anteriormente)
y una descripción de lo que necesita. Al crearse la solicitud se le asigna un número y se registra la fecha y hora de
creación.
La SR creada por el cliente queda pendiente de análisis por parte de un Analista de Requerimientos de la empresa
que será el responsable de evaluar la pertinencia y factibilidad de lo requerido. Del análisis de factibilidad realizado,
puede resultar que la SR sea desestimada, o derivada para que sea preparada una propuesta que responda a lo
pedido por el Cliente.
Para derivarla, el Analista de Requerimientos deberá asignarle una prioridad.
Luego, un Consultor asignado toma la SR y prepara un Propuesta de Servicios y se la envía al cliente para su
consideración
El Cliente recibe la propuesta de servicio asociada a la SR y pueda aceptarla o rechazarla.
Si el Cliente acepta la propuesta, la SR queda en estado pendiente de inicio del proyecto. Dado que la empresa
necesita un tiempo para armar el equipo de desarrollo realizará el trabajo.
Para realizar el trabajo, se inicia un proyecto de desarrollo, que pasará por diferentes etapas (Requerimientos,
Análisis & Diseño, Implementación, Prueba y Despliegue); el proyecto de desarrollo termina con la aceptación del
despliegue por parte del Cliente.
Con la aceptación del despliegue por parte del cliente se cierra la SR que dio origen al proyecto de desarrollo de
software.
Independientemente de las razones y los aspectos contractuales, un Cliente puede cancelar la SR en cualquier
momento anterior a la aceptación del despliegue del producto de software.
También debe contemplarse la situación de interrupción del trabajo en cualquiera de las etapas en las que personal
de la empresa esté dedicando tiempo a una SR, para que el tiempo no sea computado como esfuerzo asociado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JrVlja8Do8meJb3CuKyNZfSEAno-BEEHNSXm6O51yK3jwCKzlMNhg_G1fcRc6XCY6qRsj8xMvOHjr7v7AguHW3R_N5YUE8RU8WZdghOZO4gyCVADSMK7zP99HZo94qdplz-brUQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GEOjSH_GApvT0r3bgXorkiJGCI38erMG5i4DKrZO59Nh5bIoTowwL6noslb7Fpg7euHkPxlcCHUh7bP0U1YqxNLSGwA0SCNjREjtxpqpBDOolk77HT7WR_avs1NYWcl4Z9K7XxA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EYyky69UqxyeBlc9eEBRs9vboEzgrB5wjf3qVFqKszIkKxp6XUq-RSov2EK1a_LkDlfRw4LObQi3UatPEKkpvU2M5Y10jNIdJcmcwFieSEN_Vckx55qBdJJVrvKPZy9KWjAfxpA=w1280-h1085-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
2 | P á g i n a
Cuando se retoma el trabajo, la SR vuelve al estado en el que estaba al momento de la interrupción; a partir de ahí
seguirá con la evolución correspondiente a ese estado.
Es necesario poder informar a los clientes del estado de la solicitud de requerimientos en todo momento y del
avance del proyecto de desarrollo asociado a la SR.
También es necesario poder informar cuánto tiempo permanece una solicitud en cada estado y quién es el
responsable de cada intervención (cambio de estado).
Nota: el caso se ha simplificado para fines académicos.
Máquina de Estados de la SolicitudDeRequerimientos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_qwoijGgALKBY_I9csUpHzPCQuO_FbWuhGfj3s9w2AJQfq9klEwMoZKESg91ueAEl6z7MXeykjJrfzdFA9RFg6a-hntBd134LTgzVWZlo7tyMUeB6zXDX7YkqnL7yNA3ni15-dA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rkxlZid6TyGMmvqUi6SBvYX0z213LxHXfvBg2kOoFWFNC40HugbBOn7s6lFRhupiXcfyygWYlqcIDhrN_agWRmfylWMhUDTl5YVX5dIywmT8ig-m3LDA_oWe7pqmeS8LV0BNTBQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cTDO3In8e4_plN2gdrJnp5pMnztQiBzYeRtjHuQ8F4ff0CucJureAWAkk3dCqmpHOVKgHFcuubteSJLNzUj7q4H7zw5vs_qadPvGpEqTYvBcXCOINHDbyaxwv0y8_IJ_36F40CQ=w1172-h620-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
3 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00c99Tey2qNqaYZP55gHQh0GzQ1D2_G04P1VM4ZLPdfrooAFWTNs4qXhHf2KAceF3EdqijISVKvkJTWS6l4kaKTojgMpl0nw6XptLLfJ43QX8ezFThgB-7w7o4ejNOWT49YtfV=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QzhamNNvegztzoUtkwQvwjkPcyx4ofuFUGK1uFaSBgZYip-HLoQSA7Um8_AVfz8WBydjx6AffS3ZZRBw4MjQduR8xOm13gzLuAofHqzZqIklkfNqJW4RB5xx523Xq2QJCiA8QBw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bkmQe6Hg1S-dVPdBF5icxEEP53N6tgbxJkM94BDrXZtaekrRMPEiWJlnkuPPR20CiphNAkwuvBwz3VahVX3zsCYQmfsh0jK0cHmys4jof0BIerV1y0sCeCgEsZXl5CbErx2q1AA=w1280-h723-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
4 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gjeIfuiUUjg2T2Q2l_AasMOgt9_zAYZc7VN8M0PGP27pSoI-SnHMWtAu-zYI75DfH40jWRhnYm_Mcy5l7iiArqeia9BKzAQCMX9tsgIjD5olRFu8z7vF0tCiKUNQfiuk6-2x0OA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Dk7RJgbTAAjWr5aG9zsx_7vUFoIS4T1BMc06iT0lu0RYxnd9XuXgpjCpv_X0gsR5hhyrtGE_u2VOAGk0qk8dN6cbQJEpfxhS8hzsWWvZeJBb03mVIEdhvWK4zc8DNsp0M2w_hMg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_8kBgXYcRB2hplznLeyTR2FxrkO66Ku950cm2gT51fOv6Hb7JRAr5c7p87t6ZrriLmawvPFsaX7UcZFIDA7lRODbB6IR12iSw4pT6mmix_d0lJkn4FmNAQrBqr7jVDG3g7-BaLQ=w1190-h697-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
5 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv366Rj-DqECMaaBwuH1xD7YSDXmV6fg7haVIyTWJMslfsv1S8TTQDzJG9q_r-yBTNI4O-t0Wfs5HhV6evvWk6v98ZMb7DD_OTmCUxwPdPhtcrxNggypu79auX5iwE_RjMcBL2XVcA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21xh5O_bj6PaMlvDM4otcIAnYP_8TtOaZQCmQ0Zygnvq9K0E6UVRglZY4eDFQNYGQmRJuHWauEpnpCapqhaZV4bxbbs0w3PN9atxfZHYN4wa3F5wdgwwjj6J6qhwe7ZgtV94F8CQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38tOestkabhsIzH2TPHTFKhdL4ouDlZdVlE5tuei4kSlPecnIV0HUQawEPEA3PSSPTWpNVCBzxwTBwA2wiGz-1MRn-F8Y6_5q3B_vcchu2e4sqZ6wo63a8CfnEMBurHtsWyoctTg=w1280-h719-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
6 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07P_827eOnt597l73VITy_o_Zunhi2m6ZT5SxU5-6ltfPEOow11w72LjoO1IvRvklvOnkjzCxlvikjHVE2Gr3XdzaW8nKFRBZ6iIDPUzMOVHfQ7zm2jVS8IfwKiy8i2Sz-dUpPVw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20BVAW8Fk0c4NLBUBPIWDzaZGsvw60sP2hOOCo40EGvv90Lyrsrlthrx89vXGT6zyjoybbBAP9uUgJQBGFo3qle4Ko62_A0Spdl3mHobR461W00V6fZdAREUPCq6wD6Z1DKKa-Qw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oHeGyr3dOE47ab4e5EhoTeEb-Rl7ukOSWHaHjUBvmH5z3fn8IAZcK7RKA7dy4d_FbBaVhY6LnSWZ4OShBEBqiwtkBgVCESaJ4Q8N9bqEhx2N5-lCn3nPzHCG2w5NFabKWQX_xiA=w1280-h1081-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
7 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1o2n1IufqQB7rtMgPCitdUsPjxMIKC6Bq2PPUNthr3YaJyRYRQAcHB3Nwuvgyo6HkdDiyKqqn5513FzugVI10sIXz2HUTkLlH3QiGrYb5JU_9f-SCYAaZbcmLHaFTpuTmXNNH8=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DmvSTr14TDvo6EP6iHKECv22w8EvYfBkxPqhBQIlGUlA662XjUV6R1yzNtpIKGmElpGragQW7f6cTZ7v9ahq1i4Jyk-VO8c62_lqIFzvIN9J-0RbSdqbIKaS_vfRPXu5m9qJLWg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv349DJdTXlQhUwPXg6Ci9dcsTf9aE-iF0ouLD2HRP8iw_NXz85ovQ7trW5pwLQo1gITumqA7BS5iZo0XZNnEDppRu7CrYNE8fk2gPQya3HyDi27U823qJtu1XSg_TUk0diq6H3dog=w1205-h705-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
8 | P á g i n a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tJP4peDPLCTWK5H13vwPm6pS6einuzAjYLQPAzzMCnSEZDyutMVESEd2i2NyE8PRaf96-rY0hxC_VeItYdDYGuCpiKh1Xo_1guRQ5qp-rgDtfZ5SKc-sAam9u3nxQ4sIadP4qug=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_cWYUu4uwzPC4JcXjD3wsMmCPudOJcw0QmWnzk38rr_0NbHtFTO-Vn8S2VGHfl3Hm_oB330hd_8_BNbRJN9FxBrVKGZANXnBOG4Jm9vsEYJ0MTigCx-mX4lmG2GY-8FWiLVnkBg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IKjVHVPKqQgMHOiEwYBg0tVLXdpsrXoN7CQfEXvytOGvF75wHwqEe01F1mIKR_NY4tmhT-rxSlPD7oAKB2sbz3-A9SchEXcTTa9d5iiNig1P4WX-o6I8zm7haIiubHmnyJ9ZX8g=w1280-h1087-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Software para gestión de requerimientos en una empresa de Software
9 | P á g i n a
Velar por la consistencia entre todas las vistas mientras avanzas en la creación del
software!!!
