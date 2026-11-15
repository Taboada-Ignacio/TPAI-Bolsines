# 07 Principios de Diseño OO.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento de estudio aborda los 
fundamentos esenciales del diseño orientado a objetos
 y las buenas prácticas en la ingeniería de software moderna. Su propósito principal es guiar a los desarrolladores en la creación de 
sistemas limpios, modulares y resilientes
, utilizando principios clave como la 
responsabilidad única
 y el aprovechamiento de estándares industriales ya probados. Además, la fuente destaca la importancia de mantener una 
arquitectura basada en microservicios
, donde componentes como el monitoreo y la tolerancia a fallos garantizan una alta disponibilidad. Finalmente, fomenta la 
mejora continua del código
 a través de la conocida regla de los escultores, asegurando que cada intervención deje el entorno informático en mejores condiciones que al inicio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-WZ6UP_DGhVhlNN6LtWvNnYtIwkyi8Qx-GLuGGjCVI_F88xzfkS1D0uFV4LmKETor620m65ljm7GDLoAlY8Z1i6bCGJ1W98t8Gbe18omqGso1TCRHsjYxFx3kuY-r5ctLp_zU1g=w723-h569-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yLxoiJcHpCqyc72pdwghy1Iyeuc-YXSXTCMdJ4vWHB4HEUf5nWkTYeLYEO0lWXQBR8be1iNQpp7AMCi3WhxW0Epwtydj2PJJdssHB7hm5B7vFBe28nwA-x3WLpKc9XsAAVnnL=w327-h259-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ijr44pnOSchdmlSIRqmLep96wouXcOT5zQBXOkWu088axuF7J_Gb-Wrn55n4QdQXVmTZeGMCs2moB52IHB5MK7B0eOiBaHWomTF1jip6S0eaV6IUS-1RJl6yQFbhsFgZWFOPpsQ=w501-h100-v0?authuser=0)
Introducción al Paradigma de Objetos
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u5k49UiGyAnz6THvOFOhb3Hy1l-wFIJmc_KcbuD93pBUSFA_1jczvgGlmD027dDKzLwreur8pN9OUVUmHC9Fkpsnw9I28arBGJLV8YxUaX1j_l9wVfqZn1TG22TcfAcIXR7AxCA=w403-h167-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20CJdsM1BxBqwkvUnzNQ7r5JkkNltYVFym5X1dFSB2sCXQJILaWIb5cKyJhoBKjF-d_6ZjYbrtMYwNOcEHex5zBoHJac2sN5TqgL-hvyKetq7WPTUCveBKY_tA9627aumuYr9MIA=w269-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0FjVdKyYE2JTpyKAcSjYkTgdjSmHc25-rHtcm8NckgBeQt3MuOGFBFpuToB33HuFExjeb2nopWko-7urb-JrLC-KIxfbfL17wn0GfDOgy9x-wYToLujypvVzO6VXQqOGT4TR052w=w1280-h850-v0?authuser=0)

## ¿Qué es un Objeto ?

Representa un elemento, unidad o entidad individual e identificable, ya sea real o abstracta, con un rol bien definido en el dominio del problema”.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2itrDmRa2lRjChZw2y475eiPSu5SB9Y_3BNz8SVqbQCIwazQrpo-2LyiL34blNNP7avxvvSlm7pgQZ8NIEV-6uoh3BG_6dSdkNxYbyxDkYRUn2eFKONQc4EcWLHMbvg-1FOZo0uA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m68wofRSF6X0fYLprnalb-u6-fMe414a3lXiU_ivdh6Q297av3BAsaSWmacMxf-5gyOogvMir-l4Ev0LKuZ-kyireO4uzmem1Xjuu4ERlg1qhflElzjZwvG0j37_d5gYKHx9w=w573-h179-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1uawR5Z3JnlhXaHzuhkvj6n9oScQ9rqk2pjW33NUkdr2q0G8AgG9QPsPWeb_AQ7liNrCx_RGXqh-lszk0z13G7ta9oWs8MepW0B5E4OAtHxLQAoigB-7RkyxvVVHa2tcaUU40Bxg=w371-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ruoq16huruBLvvpcD8te0S0qxrZqcQSpg3oh0DhxlTI5QM_zowyeNmWF9wGN3h3U9EWKNPm3xHKrlYvQl6Nc-6pMr6-olOkLtlQTwVs_GNYQbpS8WuZc9TnVu8EUJociU7zoFjg=w384-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv333QBUF6sm1D8zR8__ytwOAMoLIZmIXwPeHatsme_YU9UeNy0T_-WMOyGlVOUidJOz8XGDy0Uw9m3l8xwWxcXtaykRJqDAHbtHcWXr2LrRbmlRtMlpf6C-TRE6rdeNv3Ta0GhX=w374-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aj7m3FKJoHBZiPNwNpEyb7b_5w4kAf7KQ9thR_jp1-47Dg4Exbswhl-ELtzzBh-TR9-fZED39uaLCwTjrwb4IkwOX1FToRjxhrZ4uqBsnWBatzfemdRyTwDkTNQzFtOmmUCtaig=w1227-h956-v0?authuser=0)
¿Qué es la Abstracción?

### La abstracción se centra en las características esenciales de un objeto en relación a la perspectiva del observador.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BlRGLkaHRdT7FH2ra9b9fUCafDL4fuQ6rE28GsTiIM7pz7pI3HpV9TN9_NYO5l_pY_LigiDUHvOHAucmGjEN_gvXU6dOyL_nEWUtPn1KjYIrcgtuz9AdUOa0OGLtIwOj3YBAEcQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PTo_KemsJMVTUL2e3u15fZ6fyZsBeSn0lijFu-nYHRsZ3t5BFmdRblVQQxg58Qzxkr0zh7NU-pRYvzy7Jdb-9DW8ypRgswvmr5wdFESjyQz6WitLzUuWIfP1PjbAUQ69AWQlfnA=w433-h197-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HM4EtH0nIAxugtBBucKCpvzYWCZ1jr9Z5yyz751PJJ14KNGh_1h1bscd79LMFTPMywTyC0IrWFKyNPGwMKr-eeyfc9_CmjpsZ_Ju92Boi76_6C_3DTdTFo5IlwqueTJ6NdK2NLA=w1195-h950-v0?authuser=0)
¿Qué es una Clase ?

### Una clase describe un grupo de objetos que comparten una estructura y un comportamiento comunes.

Molde para hacer galletas
(La Clase)
Cada una de las galletas
(Los objetos)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2i-en4YK48KCNwZFtP-B-kjD00CxU-pY5iFpmr4dB88DshNJWOPJcc1f5PmGFlJvK-k-cFYGb1NNDDuXE_af_0vbvUDnQcwllKUTm1oHqj7qdYSUDg6nQqzMdN0myxZ1PtVbee8g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bfUzdR8Yq2Nt1DNr7xNqFYUCLJC07FBLdkUf980s-6d_Yu_p-iJWtQmmExlrRYVPvrANpYzljxR4TLpQjgNhbhsunqIWxIrRFP7Ob126Xoa7ie4oK_gBHzFPxqHqLVmdLMbJP=w699-h527-v0?authuser=0)

#### Clases en el Dominio


#### del Problema

Roles desempeñados
por Personas
Humanos que llevan a cabo alguna función. 
Ejemplo: Madre,
profesor, político.
Lugares 
Denotan espacios geográficos o elementos para contención de
casas. 
Ejemplo: País, Barrio, Estantería.
Cosas 
Objetos físicos, o grupos de objetos, que son tangibles. 
Ejemplo:
Vehículos, libros, sensores de temperatura
Roles desempeñados
Organizaciones
Colecciones formalmente organizadas de personas, recursos,
instalaciones y posibilidades que tienen una misión definida, cuya
existencia es, en gran medida, independiente de los individuos.
Ejemplo: Banco, Ministerio, Administradora de Tarjeta de
Crédito
Conceptos 
Principios o ideas no tangibles, utilizados para organizar o llevar
cuenta de actividades de negocios y/o comunicaciones. 
Ejemplo:
Materia, Carrera, Tratamiento Médico.
Eventos o
Transacciones
Cosas que suceden, que habitualmente vinculan a clases de alguna
de las otras categorías, en una fecha y/u horas concretas, o como
pasos dentro de una secuencia ordenada. 
Ejemplo: Vuelo,
Inscripción, Venta, Reserva, Donación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hq-33xyQwZGtj_ZfGQptuQHkd6tSGb8nlCm6sq6PRai-4IjhUN9dLuIphD3HEFV34--o6qU6LHMVBfXte2-uvmFkSJQiL-QaeUNA0p4RY5tF2cj1h90mPZhNc_Q7IPIy5vHnf7Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g-NijJyCwgLQ-NXzZPK4Dgr9mn5_XIfwTi843tQIapOTQxS0oRDp6x1zwmcZdmJQpUHHIetMQBfKegm-Eag7IsAY_Ebp5X0QVYzPcVP4gNN7kw24dvKzeZUeyIBrtxwdNBMyUQg=w419-h63-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1k_31192cevIVOza3dzfJtJLrEpjinftsHcIs4fBcE1WM1gag9s5Wo9ohWinTh8YCPEXkRQ0p7bRmyYHDgMhk7GZBwl_tVH8h281HHGYV7kumMWLRRm9VZKQtNSvckxLacJ322=w722-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Z7sv8sKUS1r-NZkwEJ_i9mNKKDtv425BOWhsFG84RTEnmoZ8sQoMD_r5MrboWi2wbEAJzzD3fcSKN1plhjrr92gS2OT04Sa9VgUQ04jTROcrR2_uoKTub6TIl-uD8ev2kpxPfow=w640-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ze9e1HOJshP9sNNoxMIZQRJcfXbfaKjEqBhrTzRoBS56-hUZFpUoHt_YD4KntHYkrhXMLKU9NdDpupkd5-JXHOzW5ED2qtQ1fA-tvEoBVyzopME-2Q_q0Wq6mUEeD4L7QNcWRDg=w414-h45-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pSVj1yFOiRS7QMfI7UoISI8r_62s-kEk6KZ0_Atry8Wh-dsyNkonEb5g2k329IfuN7QasyAilre-1aF3XKMc53ck6toGDsoSR3aNk2Jrol35Xa59UcBJZHyEomqnSR0oyvCgA=w242-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YVKhTWdQczVYWAIzqbAAUqWjDcX_i3d3dNXi71NmBHEVwjJVH8pIHbOhvOewl00II6Z2g67fwE_lFNnQAAsBhA39lw72oMLGUo4goCdR3OackbnZuVpg3_7KHlkv-Qf8d4AHLeQ=w277-h213-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32Q18TJbOIUt1ycypUoXaKk5n3xgMSbN5DR6CKX5F6_a-3LTvj2vFBrSJAWje4wWXrEXejIjwm2wHcpGx2-K6lFOviHCr9Nb9uPzsZW_Aukfl6FMOKJxYNt1cMQRzWk9RptHX5=w559-h62-v0?authuser=0)
Es una unidad o entidad individual e identificable, ya sea real o
abstracta, con un rol bien definido en el dominio del problema
¿QUÉ SABE O
QUE TIENE EL
OBJETO? Identidad
Comporta-miento
Estado
¿QUÉ PUEDE
HACER EL
OBJETO?
¿QUÉ ES? ¿Qué lo
distingue de los
demás objetos?
Los objetos se crear a partir de las CLASES, esto suele
llamarse “instanciar un objeto”
Una clase es una definición de un conjunto de objetos que
comparten una estructura común y un comportamiento 
común.
Clase: Auto Objeto: Mi auto
Estructura Objeto 
La clase AUTO puede tener
(atributos):
marca
modelo
color
dominio
añoFabricación
Instanciado de la clase Auto, lo que significa que
asignamos un lugar: Identidad
y le damos valores a los atributos: Estado
marca: Chevrolet
modelo: Classic
color: Blanco
dominio: MBO056
añoFabricación: 2012
Comportamiento o
Responsabilidades
Comportamiento o
Responsabilidades
La Clase Auto puede:
encenderMotor
encenderLuces
avanzar
retroceder
estacionar
obtenerNivelCombustible
Lo que el objeto puede hacer lo
toma de la clase, es decir el objeto
puede hacer lo que está definido en
la Clase de la que se creó:
encenderMotor
encenderLuces
avanzar
retroceder
estacionar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jXSjynKLpLz5lODeqLS7J8E47c9iBx2LKR1iSY27JzzXnF8bCwWEaFFTatB1bmtj1waolkJmyulpUgSmGfWdXkO9TCo1_PDVo1KplJGUT4qqH1qhENmbuS2v4ZSpfnBQ-Ou7ZXg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17mIdrHO7HN5lkLWgKKFs90uYwGX9LRzyvkrOLCUopdqG-UgQrdIaC3Z5kJUhTqwxHuEScOr2JK-lL3PEg0j8YHS18gqO-DMhGkHCqSCKqJjNBPgfG2DLXLrI1jini4ReR5-P4=w405-h77-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-4aELPNCHzYn5r0PdrdUon3LSsREPtcIjGcpQdngyf33aNbgBmaPGgRtYZ7Ke5dopvL3gfphEi_REUNtHfZQ_LM9jxuMGStmfTo-JwEFzA6ClMqb8LHfelsn4hGVH8_m7lC7bHQ=w358-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tBu8DKyBtxSSxaMcxhPzuYMeAqAQ3FQEMrCFnoUx_V9MsZTORflnafXmdSdEWKvZjnr_2IJaE5F47gbCICZxQ-NTjklPWg90KSUFQX2FqAGx26jkblmK-f0ZzU82Shgj7h9MSWA=w1031-h65-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Gdhgs1eOOAg9_ZnZ6svu5ehZpKDjq3cDaMrILGBLu8C4r2EenDNs2WFYDpxbeXbK1cTahkKhnFbPaISdullv5RyTUKBXhb_HVBuWhCYwa4qTxG0lrZwoE4KGPnVpjkWG_kGuJ=w177-h98-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qku0BbxbwuJ9qK6Hd2WNQ8ECNCjnqwh4PkEVgzuTnGNV-TF4XV2yNSwL0RqFdMucj3bC-Wwr3135oCxxXNR1VUsfPvAyfKj6fHzZtn8hppqnNJmkNhw4p0zEeQIbk6yoqTVT9SA=w186-h105-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2akE6FGm7yMoLsq9jzwWFOezspLl6nFAMvZjDlt5XhGih8wEk7OpdzsQhtMIoiVhaxUhqVZFOAFXDZBYa-6Can2FlUSd7pP75tUol1cBPfxQVxkDvsTxUN3NfajwUvoFYQSrwQ=w177-h98-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09FTPeYa_ob05JQUAl3wwY82Fj8C-L9E5mENnmovHLU2yb2d-IWPpdbr6HYts2PVzyWBXr_pCciq41bWbzlcddt7FJcPTI99YlFLjn7-_Iji2Lmg_yeKuGIzJGLhXASiqG9eQsAw=w177-h105-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bAHXVtCd_4xpwQg2YJlqR4pa4aKhFz4H70k9YbaAsNIKuPODoR0fJxDXjt-ylaBeKBMmGhtBWjy1LWByQSatJyxwUfQ4teTaLN5CfMJpVnBOFrklHttYxcUxljNfOWmgncA933Q=w176-h105-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ylj3p8R4lDo6MHgjFDAkYKtoKiVS46eMv67apOXHWy7G5BmNCzHc24Fb0s67NLRWev2X_YWy0l-z_djf4RGxqvTb0HvAwt7FCX87T9aJpDW24IDfRBB8SJzFpqVCbU9hk38GUUw=w198-h98-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rc5Wne5NHDNimo2Ix6o0NT_TwCb4qmu0b1Y1ydEHcywsEsRlF6unbfH8slpnRISmkDLOke7Gtzg5C7Ri8vgNLHu6EOkLwljNSVXuElWEtKWUm_FSFz-qSrGR4-YGHWXVGlSLr=w189-h105-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1c3ProypnD0EY5ng9pUDAZvLt9rqVUqBy4z737kv-P8pnlNAGQ11eFOifQQ_WFG2Zxso0zkNzgiHrG18oxwgrnOD163tyIXJsO8jjYwdlyq6CbJ2NyHJMxzS8IOHhu1blnsk3bNg=w214-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zixnmPjxpKysq-lM8BAjuM9RJeVs2VtnsHfhkUtnOrJsWKJtd-WmbaKJq1C8X4WspsJsFmRg_YV_mHEP919Z0EB8m8D1l4lebf5GsgyYUiX6GFsfKpSzgR9zMq8EsN1yjhaXX=w312-h138-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3w7TAeB30R3EvaunSOSFY3JLLi6Z3FW1dOXqQIIenOPnVwpswnwuFAnszBqi7Ec14nxhoh6QwfL_BVrsPYnjfyNDemPBqBMCziAZI8GbhDJcvO-kmiva0RaZlmwUzYAuPOuSjA_g=w405-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10buhqL-dUTXnS2M1oE-7iul_tbLyXT7MnevGll0cAL8kQCWk4Y1B2Rh0swJee2TnG2zAwiSeciJJrFL7q0UhAe92eHJYnTYy5y4s9NhspLl0eh6odnrSF1ym01pi088dVZ7RoYQ=w403-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06a7Cz6NcHeGrtMhr9nEWPmvyz-YXflN867Ai0eyvLvsunt-X6tFFMK_TgypNyDdkwFCgcVpWCMzgYdogQKAC3HCARHBYTSAmfUkX3qFi-_qjLwNN5TNs9RJiyHDF2hNd4TKsQbA=w297-h139-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1j9RDrwOdt4yZxMaJNhlWjBn1YqyRyLA6wcJz3Mw9bioQWaoLtIioutRisjKdURwjgO0DSC2Jqsq-TwmU3JIfkHLh5vPTChQatH4VXCs9rQjcyhov-TWTvLcK53rNz5ydSztBwYA=w397-h109-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Cvat-oHPj5ak83AvWSpOEIkG-S2JVnRZ3hg3kHGV2Z6QVLLOL4AzBh4P7gXOJmm_WrQLXTPcwDNaJqtqA_NRFt1L3LUOJLABUUq_R6f9ueyz-VVCzVLhIZUMfhT7bHnlIqKiA4A=w404-h108-v0?authuser=0)

#### Estado = Atributo + Valor

En un momento de tiempo
¿QUÉ SABE
O QUE TIENE
EL OBJETO?
Identidad
Comporta-miento
Estado
¿QUÉ PUEDE
HACER EL
OBJETO?
¿QUÉ ES? ¿Qué
lo distingue de
los demás
objetos?
Atributos
Valores Invariables
DNI
Legajo Alumno
Valores Variables
Estado Civil
Situación Académica
Métodos
No afectados por el estado
getDni
setLegajo
Si afectados por el estado
inscribirmeACursar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv365fBKb9jLIwzC9mAg4tWNMo8bBegEaZOAsTsrAL6F9G4pCutpSKXzMsE0rI884E6kVycH40rs-UUlia_4HGy8-WVF4pGNqbz-3r6vpMjZGTOKhqD6DzQbHh4yv7Z6nn7Uje7q7Q=w762-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h9RIlq_4Nv9Qrzq06jzMZY_n7H9SbyYeIeMQmkPQhL2SRW_F0pKidXl3oPFRRVsuhDN3qVys46E4bnAbDXM8XpgZHQlNlg2yCHH5jFhfbjlaOj7fuEiGvDD6chHutQyDWBn5CnQ=w864-h65-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0r8knNC3FpTI8w_Vx8GGNxjSvSzEsw8XtR4Q1uMzjX25yBi0cjCOcdm-MsmK0Jf6XfOREpaPr-r1gIA-w3iiT9xaDImcYGPZBJDBnI9cf1AqwzB145ng-YK03a2EcHK4ndyU__xg=w858-h817-v0?authuser=0)
Modificador
setDNI() – Junto con el selector se llaman métodos de seteo
Cambia el estado de un objeto
Selector
getDNI() - – Junto con el modificador se llaman métodos de seteo
Accede al estado del objeto pero no lo altera.
Iterador
buscarPersonaPorDni()
Permite acceder al estado del objeto o parte de un objeto en algún orden perfectamente establecido.
Constructor
new()
Crea un objeto y/o inicializa su estado
Destructor
delete()
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37buQElZ9HDXKKnXkM8tgwdsoNX9b_CtvtYXGXZoblxDV1UPg_tVSxkuJi_ZP8Tz0Pkj0uAuvaE8eYwS93anL4FYiw3G-DPeQ-SKns4gmLjwU7rqex95xt_-5VE3CD7y1UxyQQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15D0GaYZW6l1nvgi0RbLYE-GPygEyKey_tSUMG2wDNwxi5Chs8Xc5_eGrGRvapcEDhHPpqVvapv1_fJLT19eXm4_w0UguXRLOjskP1wF6alF0LeXidyQUC6r_URk-jpu8srh619A=w1177-h672-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NplaH-p8SGIN5WczBnxer6St5d3DQpdlQ35IhI8iGeg5a3eplEwApI48WZKA9e3h8bjGFLMQ5doI0BhVMG4A9UEt9Tz4LyqLzpDmv0ApRO75givMDKIx9cthbxXghfGTGObw-jg=w863-h197-v0?authuser=0)

#### El encapsulamiento permite el ocultamiento de información

¿Qué es el Encapsulamiento?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fiPCY8uEMtgUQF-MOP27HZjwLpVdE9Mx0_EfYRyfA5VHPaVTnWdY7CbRTtI3m4jSFgfiREboA4sKlrL6TxZ-IJf4lUtcyg5HXHmzNGwU2vt7i1BKV8PwqRynM-poBVtegFx7-=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2csbQg-k84T4DqazKUHTS_Gqxb_zSG1mGC0_AlLa8w5hPyUDiOVP8UNicPDetbHQLJAWMdZsxzjxslfshI9s2QHeRh5cC3p5mqBLpFYJ33nyvyWmjODSkr_6MwVLQwwBnAXdQvrw=w421-h260-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3n5DXfqR-gF-YWuAhFlNtIkOqjAYPb_C_u60GLEs1WNpk9CuHvqpDwxKd7vJQ-gF66ITNqnv-gbQX6GS7Gf6m-O0TJAW_JpWo8qMrmymdgw_82mYJWz0vRoyrSb4ugDWiO039wEg=w395-h380-v0?authuser=0)
Ocultamiento de Estado
Ocultamiento de Implementación

## Ocultamiento de


## Información

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PeC8UUty4ppidc_9v56rPsl7OmGVsSCyF7o_MwFw6h-_6lZUjHMV5izPxi93VoVy5TzERmlit1sBrolo-EJ3r4TVnV3aW68j4PIXuPNa9qycO6qpFkKzEZxOYIIfSDg0jODyR=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K3uDZYRABSGb1hy7jShVTaN_gOglMuXkuFuu0_Kl9RjCiGUBxentNgM5ufsuQ2Vtaw8bdMYZegiGDxG-98UFC3hrssOjHEBsLHv6uL8ktmXJ7z20MYjPnNa4PQEh3R3FdBLrs=w232-h217-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kbOq45n7-K674gczaO8_SDWZEgcfBRj7qL0q3u4y988fdKKbembDWOn0iOQ_mJN-XV6S8zl4Oq3lQ7dHa_XEkTA2D9OyKzihNevPt4Ddqiku3YUUYaIm77nur-6lPzFfv5aUyqg=w216-h221-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XmfsW6OPJk2TPWpFLCdXnjOliA-4VUtyGqa15b0bT0P6FDeHvfy0rqjFO0zhyjwk8eXr_040r9eHn9yIFUh-SHJhOGOylm2d6wVhHF1sf3tEaSr5Fp7Hfsg_lJcMZwfV5N69SIg=w328-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Sr9sI73cC0PC7MAUVolYWkX9Ka9MI63GDmB-Ng-iJJrRbXUxM7p_UX7sF6PIRSHyS95cZa44C7lTT-f4PjUZD-e9Z8dcGzYhPT4zPGFwo5gEynv5UVCBivW6bOG6BfiSGV3or=w82-h173-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv056GqidtcGChnb8vKTS5WdqJPCqkbWlDc16BzXrLwt3zxW3PGoS4m7CJqdCwc4zoJXaSGHI6MeXDWkWlatQjpo56OwnYoncXM_YSocy-SuXGT1pDCk33XRFZK61FeqUGD01tvhng=w88-h174-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2557ReZWjhiUfOsOyxGoD8friXJbjogpyOn0xv3NzrXmAmexJx2vGmCjRiAydFWJ8H2UQMMPAQwpiHQPxKduT55FroimNL7VM5oagDXTDPMim6E1O4zli5Wg4bGxLKpuU19REG=w43-h193-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3L85I747lTPIyRl29vZyvAIVxnODGwt_nXmHhv6SdP3ZKU8qwnWqwal5MVnUMx3Hpz74m6Q04iQkPajWWy2lXdtEqoA5Qqg9OuNv3Dz30e1i5MBtAX5WiHX4h_WbcwsztIVzWgdw=w341-h166-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LOOmDh_n3E0w6m2Ie2cZEA7H_iZGAyiP-n0tZo455jWhn1EOgpXiJnhsy-re3HRK-zZ-yu3kvMQtVNHu4am8jePePcD2YCtj_9Fw14QGhq80JsET-G0CD1A8A42GTHFjwbcYyhA=w1000-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BdC311F5DwCAgKPHd_tmBG4AgLvZ8UKrnclVVEEWLeE1VtBYMIbRq5IG1bk8p9syLqO7SvRAN1okd7F1i8ciL7uWodjIfrJjM4te5WWV9HkzZYtwNd_lRIciGcXZUmfBILqKwLA=w48-h186-v0?authuser=0)

## ¿Qué es un sistema Orientado a Objetos?

Conjunto de objetos que colaboran entre sí para lograr algo que solos no podrían.
Si está bien diseñado hay una relación directa entre los objetos y los conceptos del mundo real
Realidad
Modelo
Jane Pearson
Audi Rojo
Yrigoyen 45 Comprobante de Alquiler
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MraBkyuBsraubGVtT4-Eu0i9g1B_d9mMs_UTu6fiMskHRMYm7SZG49Psd6QCTOR5tq5H65hbEev575zc6xrrUrkqSB3xDU6Q9ETxkeScIw9eep5xbRdvOTK7IqL9N8mLJHHRlBw=w1015-h571-v0?authuser=0)
Relaciones entre clases

## Relaciones entre clases


## Jerárquicas


## Generalización


## Agregación


## /Composición


## Realización


## No Jerárquicas


## Asociación


## Dependencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YO2eRft-Et9WKyn0nVlmcixHb-xilxme39GIo4u7qOMgdZWb_FP0vz6Em9Fr0OcPgsjkO6jEndsEhmMsIUoCOxwUhONM_rQqINXZ5RYu_J1OQQeu4vrH26LFoVOM8SMXlEcU6ZQ=w1280-h117-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Ihe_k0KkI-ZsMSe_7WvZlJRZLBjp3MAhRRaYXmlVnCtbZ8pQF3OHV4Wp0nFgPZGy9pmccTf-OfG7S90_MUANnrGt1ZKnH5OMCRCbjS0soZnydNnjiRcCBzMVH21YQiZD3d1ZGIw=w815-h593-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Xu2lANkHeD7dJBhKbSyYamTI57FFAW5muX1L1IOzhzJV51ruWQZBKUKvwimoGQERkzSNY7g11y1P6GkWIW1-D0_tl0ILBDsqwjHGc6Vp2YN2-spAvOJ7cd6KJawNEx86P95Trww=w1018-h649-v0?authuser=0)

## Jerarquía de Clases: Generalización (Herencia)


#### Nos permite definir nuevas clases en base a otras clases existentes.


#### El propósito de la herencia es el reuso de comportamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jTPLQwG4puOOHsyLMKnCuYLCGFsYJg019atKfP2jQImL8l9xe9Li7jN4GlD67Pl2riPrdLGA76CvBGcIlC26ilwJs1u__I-TnNjxmxmtQ1Ste8hbPBUXjU1K6ZKc6IlDHfAK-mA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xwOizk20MU6khvuU0AfgJwvgk7IpOwi2XpOjfcuJRo6cSp4bSFByqhECuaiyGviLz1TwA9fE0OgLZ0bTsoSA0YDmPGuy0ws8sRTeM7pri6cd1wZaHFVkSsXZxd9qfGzLsVwATyg=w956-h149-v0?authuser=0)
Es una relación entre un elemento general (superclase o padre) y un tipo más específico de ese elemento (subclase o hijo). El hijo puede añadir nueva estructura y comportamiento, o modificar el comportamiento del padre.
herencia simple
herencia múltiple
CuentaBancaria
CuentaCorriente CuentaDeAhorro
ElementoConInterés ElementoAsegurable

## Relaciones: Generalización

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3D_YKAv0bKwQrK9o40DTNLLrAp4z23PAVUXBeICk6vm83J9FXb3iK-U_qMMf9-sutpUXNMzSTYLG1cmG22O_yAp1kVnVFexorcSlvqZcs4sZ2fxg4NeNK1dPH49Fs9Er0YkGGvXA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aRSMiQ0qPMI8CT234ejOhRUXrSzqeMaCWa4ZpuaD_YQxZIWzSHob18re1I9IHUfgEOEK99Ya-u629AZief4gABZ0yeaheV-aQOB9vijVdNphPSxCHUPhrbgUiH2lELBh0OD8Jqw=w1280-h166-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tylKGIAC8eUSL-3JqEykTxuSj0h81tyN1hBTOx82yzWuAyEe2mMiMtZ8Vr2nLujLDlAZNnD6jwP-FerZxU-XrlyX0uRvSr8Q561kuFfpAm1uSh_xgnqA7CWGVYlbEdRm6xSLM7w=w545-h780-v0?authuser=0)

## Jerarquía de Partes: Agregación

todo parte
agregació n
1..* Factura DetalleFactura
composició n
todo parte
Estantería Estante
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OHncgSNnmAY5GbkSjyRC46zPShpc8zAlVqu00rLXFRwbfQ2R76-Ak7bzhXLT8XL1e24_jb9vIzbicZ_D1DvYtbws40asHMD9Wms07RrLd2v1COJNyrKL4uDDlUFxhE2qlCHdZvg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Z1dZo-xlnS8QmbYnigMsp_f7ZaPBEgFqgrQ1BNLRG0uEfSVF_K9rS4wEQ0h02Ok4p6E2Y_FE7ujybsDp7KZ4HFnEf3Adh32YXTL1y05ryYc0ZV9cnvFnKskOklboKkw-uSKPOYQ=w837-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SKPRjb6hfvkCeCyqAmPsF2ZnhPCTbrmYnHG_m9RXAKsYLS91geREPMaf6T_sGvPjYsxDeYOyGoijT-ELqmPAH4VlaXr61zwZcEXS9SJANRjtEPMZtkOz2WyCnceqloZueNEU-=w560-h896-v0?authuser=0)
Es una relación estructural que especifica que los objetos de un elemento se conectan a los objetos de otro.

## Relaciones: Asociación

Navegabilidad
multiplicidad Rol
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gDsbwjs-mVgstPr16sz-n-CkxxTZT-Yjep-bOtaxXonrEslnmoE4rBWG2RAxeW0Dd2tApZtuaIYkTQ_K_wD8jB0n-LSDxbI8YnBNhvVj1DYdAKpRSh-IS9ILBsvByob69AAiJhg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gJ1zUsU31I1MVByy5v3mQOv_9xHa-65o9me9VWAXu83GxHIjzdIQW7B5wKG-nO7svD0YQwUylR4-4VqYRSqC7ACMOVp77NpEkQow7ee9YcxOvLTBol066YQpQ1un0t5DVrsNjCQ=w1193-h197-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QmAV8n7gL1Dvs6s6SGad7BxkAOncrJ2NlQ30eJ5WizrcL3wBtYSwuojpEUxAYsEcUTHqWNEF1ofEQdZEHFYZ_AgpGGwS0oy8zo46QzqhqVtKd8OK_NHclLR9fy-IwHTR4jPALcg=w1280-h304-v0?authuser=0)

### Es una asociación de uso, la cual especifica que un cambio en la especificación de un elemento puede afectar a otro elemento que


### lo utiliza, pero no necesariamente a la inversa.

Relaciones: Dependencia
dependencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Q1q38uTN9pwLFJzLB_YYgqJcFEg4RZTnRy1dQOgLcr2LlpWBofbRdTXaZcIgrVSMl9azznjfvmSrpC7BwZwCFLuCP-NOX4Q1FPQuFPFCewk3mFJATZP_y3GRsQ7JBzRebnC16=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YRS6eIx41oX66-GcwKJPuCVMnSlS_WzeKc6ABoFhjv5QNTvIXI_B1cFJ4WalfLq5tMRITc0NgYxGpy7FiV1kvM3-shDf6n2jyIRrs8npOVhJNVtEcF5JG_1GPh04k2bsEv1GO1Q=w1129-h197-v0?authuser=0)

### Es una relación que especifica que una clase es la encargada de implementar el comportamiento especificado en otra.

Relaciones: Realización
Realización
PersistenciaBDR IPersistencia <<Interface>>
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VLmCszqiObztx3C0a0JWoCg_9o1uxnu_Nx_V71HpWM5sv_fboJb7pMnYYvheqgQf_GfmXU6BpboIxsIdZVaoGRLAj5W53LlfBqr8QgZ0lpzhU3JI2g-uWOjAazLoDPBT-fIlKZw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k77sJQQ5BdxZhEMmCkHP4kjUBmhPGTDhhn0oxozvQtRJ8KBtiQu_8Yrh5lB_jEVgTC68lY_Yn69M0qnGsG9Go2Kmx-a69WFKBa9ie1sljCCBojU3ydCYIWHgxEuaA8Yaaqb0X=w580-h176-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0s4CAfIE0dW-pendEZPHbTPdz_evDyHNZF8xqiRHEupEnUcEREOuBz6uK1ZVz_VW-ZR3gU8blKjh1UGlwmtuB6s9XmE4ZDminjKlkk9bfu5gyIfk_hXkw3ybA48XvEv8MjxmBZ=w1280-h815-v0?authuser=0)
Polimorfismo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KbWUEzhtVU7gC08XVl5Wx5crsuYe41NLo7WqsjX_J-ZiFwrPhXEtiDYe_EZCWkiOcIHw8IKCpiD3dHZVLOMf2BOS-a9EBZNu0wOycDbovjCbFRFnjvevLYDpP7T4mFaD1XAfHqg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv302NsGHgNJ12UD-G7gyRtJTpAqJjBNJWXMi76HVdgwo_Ce0owUWd5yEMEqN-dMT0chOgYLOZFCRLixKQuSmj8eIhGEr9zikpLgarTk39f0KGvjnjSsht-wBIR-cQQOtvn8qKeb=w580-h176-v0?authuser=0)
Polimorfismo
public class 
CuentaCorriente 
extends 
CuentaBancaria {
private float 
rojoPermitido;
@Override
public boolean puedoExtraer(float 
monto) {
return this.saldo + this.rojoPermitido 
>= monto;
}
@Override
public void realizarExtraccion(float 
monto) {
this.saldo 
-= monto;
}
public float 
getRojoPermitido() {
return 
rojoPermitido;
}
public void setRojoPermitido(float 
rojoPermitido) {
this.rojoPermitido 
= rojoPermitido;
}
}
protected float 
saldo;
public void 
depositar 
(float 
monto) {
this.saldo 
+= monto;
}
public void 
extraer 
(float 
monto) {
if 
(puedoExtraer(monto)) {
realizarExtraccion(monto);
}
}
public abstract boolean 
puedoExtraer 
(float 
monto);
public abstract void 
realizarExtraccion 
(float 
monto);
}
public class 
CajaDeAhorro 
extends 
CuentaBancaria {
private int 
extraccionesDisponibles;
@Override
public boolean puedoExtraer(float 
monto) {
return this.extraccionesDisponibles 
> 0 &&
this.saldo 
>= monto;
}
@Override
public void realizarExtraccion(float 
monto) {
this.saldo 
-= monto;
this.decrementarUnaExtraccion();
}
public int 
getExtraccionesDisponibles() {
return 
extraccionesDisponibles;
}
public void setExtraccionesDisponibles(int 
extraccionesDisponibles) {
this.extraccionesDisponibles 
=
extraccionesDisponibles;
}
private void 
decrementarUnaExtraccion () {
this.extraccionesDisponibles--;
}
}
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ef51W7XyvR0uFLK8hGjpNSoBIynsgDCgI9_fldxaTKner72Ib3BDlXpu-hE9w-D9eUO8tQkya4GdrRcD0ViNHVjX7uBWFk4Roqh115s11-P-aLP1UTs5lK43-pk9s3T47-czHkQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wxcgXDFp11TXPfJOeTZqgi0qc4oNj-LG2RLkJ5X0aaTibRPg5JNLLoFgAunjet_XvLcv_2x1t4ykc9IFefJaNaeL7VvrsMXEmGfUO-j_U1irq8lzzu2WNUlgH4imUkAw0pb-9cw=w931-h736-v0?authuser=0)
Principios de diseño básicos
Para un software de calidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Dct5stPdnBRaX5kuBLifOdoffCnLyif9Iz5Zt0XmyLZVVdlMx8A9BpsClOi9RxtMJNrINU4RRaj_o_WJXq9ZZAarlv-j6AWKmVmxa5k0EpqR7w3TOiakWGZw2oW9b-muL8HnzQg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35kJ6ea7pkSFHN7LXd__XNr4HCEMKTMq6u9lvcVB3XX1OmjMbtX--b8EisaWEwuiQkRU5U4RLiKrS_LCCkWRoBCoqghjX7sLXHAwAgIdF8TgvA5anuLjiVF68C9BfAPTgqyxcG=w1280-h750-v0?authuser=0)
Cohesión
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h6i7D_Gr5V20MWQSQxcw_xxX1a5hWRh32YAyNeXSiJyydggkZFGDrJ0Ry7T_nmKjT9-q0PxYCkm4uGNvkVwvLrHRienq5Mq8iDPv0Rpl7cKE7bfM3cLHGvXPhd6WngY082KC2=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YNVeyGZYShvKk5q89zqY_VS3qmVQajLO-XNdpKmzvt79U6gN4qEZa_0dm19m_Eip704MkWMvB-T7ahUEomndOnXm77O0Rscsyxm1eAf-UsoX3IxjLwjvuxpuUUPUiLgvYyYfT=w1280-h471-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IG6jSuO4FNNv13ZTOp7YAjsJPCCtxQJ8IT6-1N91txMhK-m4KRv3RhlB9lrUF5gOFA_OV8AHVJxIdF3bF7xgB6OzUx2QN5Sd0ooFzjYKu6nbDc2YiXGEzPtWOYhSVgOV7qfG9=w464-h271-v0?authuser=0)
Acoplamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01SPPTVjqszwAaO1PQKGIOxMDlXztyo-_Egb6BLGcnhS_Vycw-nhjxJZ1ku2wesjszNjXzQkQ0EUnRm-t_boX86RSHxa2v_lNbuBgpjkkS8kfKoa1hJIROQly5vgjRmqj6KX1Biw=w1015-h571-v0?authuser=0)
Cohesión
Acoplamiento

#### Independencia de


#### Componentes

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ypmVuZrY_Vu2ZZHrQ-5IWu89i7sZQWC8lpz-BNkXm_T3Ckt6ZVIx0cGYF3ODxkv1DPMeqpQ_dxbGVpEzL4sJ2AU3KWEh07e8h4rr6_2oPjl5VQVsj8A9Wi-qo497a5rfZkpgj=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nBJt2Cf2G--pUP6uKT-QZqoGNcHwdbA2Z27BGFeAF3aH5PJ-yzS5Q8pzGw99zWcAlsEqVsB240C88l6TIvJDI2BBoiM6InO42s0ggmX8ATePHAdcYei3lOnd0axG9IFT99Hmsxw=w694-h649-v0?authuser=0)
Principios de Diseño

#### Para software orientado a objetos

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BhOOSIYLMOr2wUmjRoIs1WEcbHr2AH4xLmvhNQx-KI5QruqXdze7Gc2NG-r_G8ORUPrKC7CwMoXhEidfS8ttcBnXLBqMq5JjUYOPufpLbxI7XcZasW0cKqn6n-bc_CBJm-k0M=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HGilHuLj7mG-0ylbSl9U51F9kNbgdseMjRxHnrNzfncPzkT519XbgTSX2pbnYgiEDQi_IY9WsdjY0mOgBAf0uQEVsD_zLjRupD6dvbTEGYpn8wj-2GDCYf5GfwUTJdzBu_Xnf=w681-h484-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21gEA1ro4SzB79UO_4xNvb9SlPAXoatD8piN0o6mgwnXL62Q7-a7Zk7f-KcqLerGvwhd4TMEL9X-DW4too2XFU-pg-TPZHrGnDNF9hNKZDyiu9vRAeI6oqJJmK3fp_1TLuyJ6dVw=w273-h183-v0?authuser=0)

## Principio: Separación de Intereses (Separation of Concerns -SoC)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CUWirMXe1goWLD5QYre9s3NHw1k9S_mOmOGpRmStl44jfh_l6kMhHnIreTCvi04Gt_HfcseROjffu8KBsav3VZV_DcJcJTs0nFkAHV9G-nHhsXGa4IquwssrIcVdVkpOOfKjWVw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zu4LLZl66Y6trHDlZtGonC3-Vkkvr_VT8EDti-RYkAgS80c9ww3YbXWUWrvxm61PivgDs1VXTMv0rrhnY3A-rSgOtlCtF-AhtrQn1SvLbatBIDIB-Epjc60IqHxZ-E3dqwbtv=w378-h386-v0?authuser=0)

## Principio de Separación


## de Intereses (Separation of Concerns)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GQVHL7WBPJZtmr4AUknqf7frA8iNwoWKXAl8MgKiTeOu35aMtL3KJH5Q5PbS2NfV_fkVJnYdwxPfQWFug1DuGdEuNkl7OGBbLch3sOn0mU584P-PccewQlGcxR_1zuTcdyzNJCw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uqI2diVUOPAB55rhj082BFWIDOMKrJl_srDMfwIxSe_fpAUkp_CLlcGBjc4WoHe4NnHJpnlragERpvjqLYvvauQnnGJU5mpjWzelg_jlrnIFas1gqACgeTsrL_so_m_sGhA0U=w912-h420-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04w027WoGWO2zDqSGEZQ1Z29PY6PlXaiid2LbEG-IeykQ6g3iQXI-xylgljyUxsqpLsbo-zOJi0uCOekEA8MkT968a5vkBSS5T-yydTe5s7h-WOkli8p-4Gt-6TGoElpHAYDi06A=w750-h345-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2so8gVwqfsNBY_Eacei2lL5GC2Lt6cYwUtW_cPUveU_oLTNR5mSTjHFB5NYuum7vOhkOrygBKTKEQKIpL74KQqyfwQifgQc4Gc52DuiyOW73q7nUlLe6v-Wvn7ibmcKj7Osh_DSA=w116-h574-v0?authuser=0)

### Principio de Separación de Intereses (Separation of Concerns)

Aislar la aplicación de software en secciones separadas. Cada sección debe abordar una preocupación distinta que tenga poca superposición con otras secciones.
La separación de intereses se puede aplicar principalmente en 2 niveles:
Nivel arquitectónico: separar en varias capas.
Nivel de programación: servicios se pueden separar en diferentes niveles.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aGiLdivCbnjSXd4IISD9fUQIgs6YgJo-3xYU9HV3ty8SFEgopURcFBaxVOpSY17OceUl_7Y67aH479XXfKA0A7YMGUatokgtZUfx2zdaLg7sSmi2Tw-HT6Jh6Ao-Vj4qBHFP8kw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27_j-UkMnee4H9yjuThhkNP2HHmU-tvE6seHWSsRrjkPkoTXH-8mJ-ehkQuVQOu7RBj6vsl0pVxcSnz1ZOe7ZYsuVfMTXvMspPIeAGckx3WG2s7E56vNRB7ldk2SLwotbDUdOYiA=w965-h601-v0?authuser=0)

## Principio de Separación


## de Intereses (Separation of Concerns)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YqCuJFXQcmdNGtg2vYlus7ixuzT31j8j7SdiSLFyNL4hd80C3zKUmLHbV3Zhg4lE-WF6nu0myf5YYxV5GyAEMp7MK5myfXnOrn7usw3EAyTBBSykvolk8i2moInxTwrhzQ6Cx0Q=w1015-h571-v0?authuser=0)
Principio de Separación
de Intereses (SoC)
Beneficios

#### Gestiona la complejidad y aumenta la mantenibilidad


#### Mejora la cohesión y reduce el acoplamiento


#### Facilita la extensión (OCP)


#### Permite la reutilización


#### Reduce la fragilidad de los módulos

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XAaQJjNK2uDDB2b541N_1jjBekU35YCxDNtz4aJQZ-2jqxSTqCdop0q6tz7n7u1zAok2Cm86_U5qFw7NzztFw-ZMq2rhi_LRk2nvlEhBwydGxfWaMUENyCSFhYNfvuIyc7Y5KVA=w179-h158-v0?authuser=0)

## Principle of least knowledge / Law of Demeter Principio de Menor Conocimiento/Ley de Demeter

Cada unidad debe conocimiento limitado sobre
otras unidades; unidades "estrechamente" relacionadas
con la unidad actual.
Cada unidad debe hablar con sus amigos; no hables con
extraños. Solo habla con tus amigos inmediatos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Tuetd7_iwY_yyuxBP1fRY1JxibYAdVGT396Jo9WWZXrEjW9M5gHNLyOnzfkyO8Mr_cuBvRYkDOnchX1uPpvvqk6wwaXkpWIADtDPC0XSVZ7YrCTF3EQYX4Dw9rN4sz4v4rGu5Ug=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HinDPEQYPTln7oeT8IwQMivZpJGAcHQR_3o3pkq2bDjxJpKXPY7gbs164Z3uGUdSvkg0fFyf-l110FDquO10A42ZmtZdmxt06IYVABrinKBHQ_nQeWQbPXIGmDZljb1AMFw7C5Q=w179-h158-v0?authuser=0)
El método M de un objeto O puede
invocar el método de O mismo.
El método M puede llamar a
métodos de cualquier
parámetro P.
El método M puede llamar a objetos creados
dentro de M.
El método M en el objeto O puede invocar métodos de cualquier tipo
de objeto que sea un componente
directo de O.

## Principle of least knowledge / Law of Demeter Principio de Menor Conocimiento/Ley de Demeter

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2b_j-KtZsPC1cjLi4aM8quG_8UTZevi2Rc0b7SdVAiEhVDKRZRF_4qqtNB2WXzMco_qCcKtZckLFfCcLhrqYmpT-td31UFQmDC7OEHlp3CSOMLL9M_HvRgMANCBjTsr0pXJghQVw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Z0e5Ah5wF5q-0KC7OYH8k3zy_giNHP23o8SZKsRIb-iIBM9tDloYJV8SJR1JSLeBL4KwCNp3h0ySvSubqf38U9_KhUGTIPv57ft2Jk3WnayYB8ZzZpgGU6UaTSVUb4rR8wg-X3A=w600-h159-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MxYztzf1iuTAhXo6EzJjVzwGwqc7pawTn4VjWRrWP0jB8QjhUhjUuh5Dm-3FTcJ3VaSfxeaLZhXbdVcLUC1ysUU03AO6Me1L3OVOU-wDoOHrivOu0mqoeJsGH8I4D3gc17JMB6g=w1264-h587-v0?authuser=0)
Principle of least knowledge / Law
of Demeter Principio de
Menor Conocimiento/Ley
de Demeter
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Cmqp8K1-s-M-I_YTjNvg_yAPrTT8bTvxzAR6Tis3MN7IGV9VcRPYgjL36zVJhWRdetfqiOXW1HKKWnFLMJ3mkzMQoXzhztbXJQPlk7UOcLIviUDhgIfSROrEtGx1jfGfj7-dgIA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qhNI45WHSIQBRSt-aVKIH4JNtObYK8O2yfA-YD-zpzGWUv1iNISmoNyL94WugOxq2qcnRzp7QpIzA-1-V5HRqXe5W-bnJs4ONWmNTFWUe8QJc239WQVRkMSAHcgNA1hfHpGb3MA=w600-h159-v0?authuser=0)

## Principle of least knowledge / Law of Demeter Principio de Menor Conocimiento/Ley de Demeter

Propósito: producir objetos que estén débilmente acoplados.
Los objetos fuertemente acoplados dependen en gran medida unos de otros y requieren una gran cantidad de información entre sí para que los métodos funcionen.
Los objetos débilmente acoplados tienen un número mínimo de dependencias y saben poco sobre los métodos de otras clases.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H8epbe5IYjSBvEvqo5TwCPEJ47QS7rEOR_MSPf1OgX47Cmnn2aV7KGLdy0Bq5hOj8XmpQX9dJbEz4tiiCRIFq_iimLvbSUhA0K4lQJmgwafS4WiWpSucatYq_mc34ceJVFs0yAg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iXJxNZDoXChUVBhTnjJAI7LvSMaj1kP4z3zLJR6mqvNEifI1y5ozRKCDMY4TD5BPgMFYWJU9sdagD-3_rY5NFNq0j6zk-WvkudccWXitqCXz2NXvMVozNiFIiV0lhiMRu0xr7Mw=w600-h159-v0?authuser=0)

## Principle of least knowledge / Law of Demeter Principio de Menor Conocimiento/Ley de Demeter

Ventajas:
Mayor legibilidad/cohesión, lo que aumenta la capacidad de mantenimiento y la

#### adaptabilidad.

Reduce el riesgo de que los métodos no revisados pasen desapercibidos en otra parte del código.
Si los objetos están demasiado acoplados y el orden en que los métodos reciben los argumentos se altera, los argumentos deben cambiarse en cualquier otro lugar donde se llame al método dentro del código.
Desventajas:
Requiere una gran cantidad de métodos de envoltorio para transportar

#### información entre objetos distantes, ya que la información no se puede recuperar de otra manera.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LoGWsBJMP52pvxLBZwQgIHCOwaRcMV8jA1ZrHYvLeQLYt0bsrNiu4Ix5-PRuE6if-hHQUaUY6zpe289yTvLjM6O9w05QZsoXiTNdr6AIJXrkYNulZ45rdB8g730c-IX6knCje=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WELoCbWH4iGY_N9P_lxC7DKiCVCC4M-Rx80dsdeUyQKEeAFXQ6NFB2o3zVifpDRsFCvJfI66KsYk2EP6sMc49f7oLY3Ht9YMtZTr4csImesppNaas4ILNtXjaWoUdXVyWRTvU2Q=w354-h202-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Qrs6Dqd23_kRZWl_VSi-atdVTKBvJl7ra-wK_gAOfiK3-EtOJt-mxfvIONVbooKsVaI5mXL31GyKIakTPdMv_jyFTApETo8LxGGSuvGVIS435AZmxZxV3XQxZzCBnQE6sowlMyQ=w341-h188-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3g0no-ZxYaqn2QBZGeIgFPL4ThngzLpgV21ecVvIYFbSkXihsLG4NGQxI2WFHIWSXT0vsLuseD0iDvs9HdLCF0eemSIV5Zk8k3fTegwSvGTDSMQhEUuajzKvkDMgSvbXfkN8jx=w142-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3b4ra70CKfxpqLxfgNQU3xJfpbJZ9evYOAw-T8KJufld4_LrdWAgeKX0mEXcQLJbLA3EBJHWgZktaj7KIv4m35iU2okGzZbcM2rp4hK-7Iwr2Sgu46fSjEs6INizPGjeROVd67Bg=w144-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01fBwU_8vtfsY41547-AOZioKBUErhPZNvOzoydLdbNgZhJ_ZFyWa2YAndCcmMh_e9gI7kU59PnpTGFvT_Jrs4Oh3c-9z_XEqjh_qnRBMI_spB63axicoJ_rw9N02RMPHcWlBz7g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iOe9I26HGwkXcI0gi64JfGhnieRw58lVTGaJF3INAmC90D5Fx--gkg4wi6EcSm-mzLZs31kDym4Y1sn4c3qu8ZfVbEhl5ID83W-rfuupq4iXm52fcCfbhedCQMnUaXjwXC9m18Q=w354-h202-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Bl-P47z_UizpvkLnXwMj_BO9bAwupwqqVd_vnLiBuqiOpqhuqzY5r0LvUnp-178fE6xZyNF8kd6t2QGpiRC5vy-ibEkVkekjhgogHJzqAO-EQ5CdACQJPtuf9KA6-ocvWDjLkfw=w341-h188-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34CqTlq-WvOZKmkuJW0yjyyqtxCe70nQft4tuh49lIuW_ab5cRgDzG7ksBKPnGDFbtsQm7RhgQqMWSclVEsj99jcF7Hx7nFE9YKSz3JTIt16WoAd2nM8KabFHFkjP413XWBqIRvw=w142-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r5R-0mrDLBWh9qRMmcNtupR2wIWkCfyNwoGPB9qrAH7PQ1Y1tf3GTRNnco4txqJjqw0yGm6g2-ChUsIL5XLhS5JQ9IdmZiBXDFDYCc6DTM9bQJ3nhAmepSgFrdzK0Sxst_DSweg=w144-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gW0eCM3pJATyEHWeYdFTffbNyZACw_x8jaCKqya1yKyok2CwCmiNgkEuIH5Mifl2YS3CUpV6ZxaO0wGVfHXB9fyeLgLuvprRa137MiCGRirZDmC17i7jT87a0OblEcXdf_zAEPg=w1015-h571-v0?authuser=0)
Tell, don´t ask…!!!

## (Pedir, no preguntar!!!)


#### POLIMOR-FISMO

Distribu-ción de
Responsabili dades
Un objeto se define por
su comporta-
miento
Decirle a los objetos que hagan cosas
No usar los objetos
para pedirle cosas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zqJOjvLrb25cwsTDw5VKc0H9sD-mLrkQvInrqWull0s-W5ouU1Zlh_VJ4SbzjSRKQWMOxLFwmbO7z6nfjOpN57HKzjYyieT45KNTF6AgMp8bfs7BJYlVXbm-WCFsXc2aKXFMc=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OJxGVkYadG4j1r-HGrYhXQ0YkNQcYwZZgN4rCbFy-1u1OyplFbExevscy1tK4eMM2CrbW0v6LDPfglXSIXUUtw2v8MUpU7HufDuvjWsTFM2VAZKroWNPL57CQM1QKtH5gETvaVQ=w240-h147-v0?authuser=0)

## Pieza de código que tiene dos roles:


## * Definir comportamiento que aplica a múltiples tipos. * Hacer foco principal en las clases que usan esos tipos.


#### Interface

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SfBd5zESIvIzbSDvNRvjAjlTaL-mkmIB3qD7AJM1Sei1YU4rk5GAjYa8ijvU4HOo1dVzuTKeZNhJ25JUBxfFt-1tXCT--3Ai8hkzGhhwpWDIEuxZLq4XKrzlbpQ1Nh-HpTvuo=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lKkp6wzsSPJ_FxRaGuzSUGoM6zg_V3j2V-OCZvbfajYGUN6U9tF8ia32cjrnug7NNPuIhotDlaXDns2bi7ag5AkN3g9bnovaUBRVSc4W2cqZFmeRhlDNBCjOFgNba0k5VAGIXLw=w476-h428-v0?authuser=0)
Program to Interface Principle
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KKS_hd2Tk07YCaNzTNJsMUVYr18vb8w7FLSsHxp3U_eTjL9aPnOGaxI40ZB5s5fRrD1X0A5cucZ77GOdXGETRNxQ87IXOq2cV9Y0i_bpRUR33_KTUhU27yvwfs2psU6b6bQLhFg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J_5uO4eHpEWqYd_x5WD3MQNFJ6ss6Ak3S7i_6cmD5CVTBMOE5GhfQQ5WmRQNf5vM1FHDPWqOHcnICDmoY2tGe0NWtwUgQan0M2oQIFTwYqs8o9pMs0RlEddNX1XcMdS7B8VAxlA=w1280-h609-v0?authuser=0)
¿Qué tipo debería tener este método?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CyqWCDK5nGnXm9Yu46IwOWPPIIqs1MPDsi_HPE_x4Qj4X7atiN6aKwbNPB4XuPnwSnYXsdxKJWwqPYlH0HxjGMTf4xuWmzcxi2rrtfleBDjNq8wqpE7mmJAF5MRTK3GmEDmunmQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XrKvVUTpd-hlPiOBDQukcDh0IC-D8jT0aDByE3JDPmmIbK0xuXU6Dwubw_Xs_e4gkjFHtimwWA3GRIcKIl7h5btEadKXhDQQk6YYZf7aoFy_DPiSZmgigpL6FLRJOFeTSCt5DYw=w1280-h607-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MWQiMxicZQlRxD_ebL1rjTpfI_RPSQMzht2lrSr3va08bXiYYaczVKgwxhepgmebAdz7t33lLAdYOhDwSoEpi4_RNh5Oy7X-4T1MBq4SkMGWVh5StNswtinQ4pTNcCqtI07HOVw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IjR_batuciORRfY7oPys6xJ9v5TVVCQa8Yt3JPZQYMlk89x8SUz5huMMCGEciK7Oc5yk9qWrZd5U6vmFfJMXiQGz8stqBsb0HR-gTCS41rwTG3tkx9glLdBFdIRbfiI3_fpneGA=w1244-h705-v0?authuser=0)
✓
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06Z9g_UB_1pVrLQ-_dnSoQZWf-hNxuErAg9EQVG9HqTX09YMLCR86c6eOik4lS1zVgGf5gGTr_1CfAftBjvArlRfZB0FYQRu42R-7DJ_n082pZKnlmoYBcilHX2BFrX75jucZA_Q=w1015-h571-v0?authuser=0)
Trampas con el Principio de Programar hacia la interfaz
#1: Usar una interfaz, pero no programar para
una interfaz
#2: Una interfaz para todo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Au6O-IHPQaKErhs48L94TowW_J25jklGNcAvov96VdcE34JTRuo2kHjs1FWlRcirTismX8mxCoajrlhiwl2oJxXp9TSlFIt9L_3OsvrTyxx_CmuvYNczic-voUBxI-qdKhZG2ew=w1015-h571-v0?authuser=0)
Dos reglas para pensar

## Use interfaces si tiene múltiples implementaciones concretas.


## Utilice interfaces (el principio de diseño) para desacoplar su propio sistema de un sistema externo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0F2hnBAdA2Dg0VR144c-URIC49hoF_7dlAN5nhX1WS4gNXJqljk7nGNp1vNTCGW2kitHvhgHfcjgWUiDpacTudwGMbp0fDy8bYqzXNStnM_g-bOi1vnrK3xmO6qcPBf8czoO0zHQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DIycGsviehYHsqfs36CuOLP0LWJWpn3XEq76IGv-o_qAS977Karj7AuG3Cm_kIukiOxFmsmLJJHjTpvt3s_ksfLUdohODS7spuL1eHQxiLbYCGdDMFxps12_N8KlQfnTVdHcjrw=w1125-h779-v0?authuser=0)
✓
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10AUrCq2w9BTU5YbUk_G8whWS-35imOtFB_vy1hsjo83zNccuJKcZXdqEd7Af0zichktAiEdJPqYjSh4C8URHvtYwwy1qKsjupwQXez2HEmkg5H45cNtj8jGtu-UvVuG7wDoqn=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3x0FhMnjP9FGTrdcBK7ua6vvckJbbdRuN_bbNXZ32wQNn044RDoQ3VLQXX31-Y_hM_du-HMxBapvkdA4IQKI6sQAUsorkd3a27woND9YAE1RoTwqiPDRIDqu-zTlz-wtQEZdyy1w=w347-h145-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aNC1mWl4G5kEMpQteDGXd1E25k-2YWAinUOfh63CFTMFtv2UgfWelZJCs4ZW0KIcejOFHZRI87EASxHgJTwwafkwH_nYxXPJeOWmzxOlxxEfCwKVMpJdCm_67o0glosNju5GJBw=w285-h151-v0?authuser=0)

## Herencia Composición

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1G-akYsy1TalgrG8ct7o2hsOFWHLhYFPlXARKNOw-UYa1vl40KKE5DW87ieIuLy4vrLacQvM_WZ77QpvgeGc97IvBUIaACKLmu58ijXlmugp9bxcWFEtogEMxXBOkvlAe1-fEO4Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02tfhOTAVnGQ3ieNPL8xd5uIY2hlmilg03KaybXHjE_M4y1Mpryps4w2MASzRRgcs4ZaHsix8gtvqfMgtWhMTIHoe8q2f9GY3yCz8COWhVtW3KL_Jt1ozkgGijN5QQkNVQqYoNWQ=w1280-h464-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EElJbwZmzO_CwZLCGraM9u0dzyQMU7DikT8S-jo4d1GO4gD_1xi8tud2rClBpwKR_OlexHrzgXBaFUG2xIHiJ-FLh-1GJprVh7TUco4QoLnlLXOQfdOoxDQD-ttH3l-apBtsVWA=w200-h215-v0?authuser=0)
Delegación
Composite Reuse Principle
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_1QzkA6GcgAHpXj3B879dHWwG4g8DlV-0g1_WP0OdsP9_94EZLO5YDMqXzhaC6T3elhys7TpDEMKdt9xTN0OAMiiJoLqfoxSslxiD7qQrdduahmjJSunwuBJPyV5W6HFecllGIQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kCn-oMEU_Dz3AYbIs2E7CI-veprUwuSbUQiSrC13KJbeWytMEU6bE2KULe6xiWWI46UkoN17Q8ywRJMjIyEiU_Q8rsFteLsGSBER_cY9c3_pZFBI7CQkycacwcm7qLNxsRTiI0A=w1280-h904-v0?authuser=0)
Composite Reuse Principle
Si necesitas usar funcionalidad de otra clase sin cambiar esa funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv280UbYIbypBdngOq5ZpE-3AwMlrdryFqHjpmKa0yabdcxTgnc7quz_xLvkzLFeDtgWmfcFzwJv2QfQ2q2ng9J4Rt8CTCuBEuern6WzH143jErpDXVgvImu82br_HNZD6xN-Sk5gQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yjR5GXtEZzqkI0wLS7Zh2nQyb967RY66Gl5vzfBBzxsaWSIyYNTQ8apIt6zIH5D_vWr6NzYtAAenznESU2Avt7jDo3BBtrLpTV_ai2caPAu_DM77WpbH3KfNOaimS74dXXlVdxA=w1280-h904-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OGFLXiqjB1CiIRMnXZ6I14GvNpYP1wsSjCu0khLFuA05lcl8kg1CnL_CT29Y6pd29Idm8zPdqrJFmRbEZZxR0yTDCZC3WZZ6AHi9gkxKGTsxNtoUY09PLcB7QB7ENMVOYRpm3Bg=w348-h145-v0?authuser=0)
Composite Reuse Principle
Si necesitas usar funcionalidad de otra clase sin cambiar esa funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KU9Qc5zIJcWN-PMMx6zBP6PcpbyMRGA-fGoV43RIUIaauxMPaidMjILVCqU8iPsLSH4RqX09h2qtStb87GpB_tVTMnN6XvzjbvxGsQmYiT4nV0JOMTeGeHAF5tq8JC1Fsk1h84Q=w1015-h571-v0?authuser=0)
Delegación
Agregación / Composición
Asociación/ Dependencia
Flexibilidad, Mantenibilidad, Reusabilidad y Extensibilidad
La Herencia no es la única opción
Composite Reuse Principle
La delegación es un mecanismo de reuso a nivel de objetos.
La herencia es un mecanismo de reuso a nivel de clases.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KPXihaC3AGAk-bVX3ogHDJ_Ux30xsF36nSm5ziRh3sgOuN6dYKKjV6GVCyrCBwZ3tx4Fa4KcIpmFojBlLA6k_IevhDACqemgdMwuYlkHA3oDpyHC96GRwn-R5I7cDScgPIvlo6g=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AmBwJHFShDbDbxbm0OswoPXFPvbHEghNVBUsoXaKeSEXPWcjZuurkr5NVJ_30nKgpQc4zKogmLcV2VdYvzaAo66Ijin7AxGYgruVIqGtk5qItmoMFzIRCnY72IIqby9tHTkgeRQ=w1280-h1163-v0?authuser=0)
Principios SOLID
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nWLBLypk0jlhJnOxL5xmj1Whe64611an_4cYuR-uuqQ12duH3e5wyo21q8adlQuJkZ45umsjWh-3ZQpfvK2WP6oSTEavxsSd_wZuU9kfgbBUt49zYKXTagJR84RI39o2LvwUS=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xc9kP-XvzrekZVclsBuAVCo9CxTwtvPvglz6Lono07AfFZN5T5iwOD0KSFj4q9pMPEkCWH6X9xen5TrJdJfSXYC5f9iR9uZRklvCgI8nYbZzgd3KnccQGobKc_TWovGMWi9_y=w1280-h818-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Zz3qRfbgQpyEsz6_P_Vsa6M_5WqnTI15TyMcslS6Uh7TpnDSAHOnjW5lE1SzLjos51eK5dpp5wEvYKDw_ILHfQWihlMGBjvzMt3b5vHPvbtjvED8IGEddZUj8_dnNUQq3-YVevA=w340-h338-v0?authuser=0)

#### SOLID: Single Responsability (Responsabilidad única)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OBj7dzezrDU6dwUJu2sqV6kcEYVmBD3ISPkoCzi3loSIZt8j7pHk0rmVEJN3xUkLBEGdCE08ZfdPtc4FLqE1LuZ4TYJ2UeqpZ2yMB-dZ90OecCISvRRM13WHdpOJSzmzzSMzFqA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dlp8zXmuGWY2dlrI0P0pCxwouBWiTRaBBAGnsAbEZg5uWUPvhTEzdbgKWPd99eR4DYUlDxiHYKi7E1D4ZVbKIfnPsFopaUOIyplMrls_K1boVMxZvMUHZOmKqDtDvOXMfeofa=w1143-h630-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iwrWvhcXKQhR_GMSvoLVqHVdHsGD9JQtJC_PYoOvlD2c8SjJLemMbbObPkg9A67BljY9sUqhzwnIgdYMOKkf4a1DVc9Z75GdhpNF-Det8uWMHA1nKGo4I3PmDULuIHZbRYKFW=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zeZdAB6dUA1oENhpwRjSEUXoI9Vs_0Axd66SWlnA0MCknpXlW15FzE7wMOjdFJK8rNVIYqNoyt5omIPyEz17hhZBTLOUK_IbNhNr2159D6Wy_KHrGcyt-f9AVWk9V6o__O2tsQw=w1280-h497-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VojyqvUrLkK5VbK735xYki9PMro6CnM79nh7VEP-_uZ81rloukC07vy0klHV9DLnKAzBH9CRI6mdazuEpqcY3wtdY6HT5gGfe5WyUw3Ds20WNBPOME70blPykhAwv2dHD9xn7lQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VFvU8YEeFxLxvOqXhkr7pZ0Vw9ChRcE8sfdG6526jOnCbQ_HeYpIesTMrWNiNWBhmeyjPY3_lJhof27466UMZA3hK12Oc-asuf95He5RJ9eRJDWLKh4-wo0j-aixNd5BdDXlPwA=w1280-h497-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2k1cnnF5WRAamTbeCA1POvEypQ36dmd9md6HNuIk9trgpJNNrNGj5jR8TMEMeABSjk1LR_SWWwoajWBjzjKNb80TTQZ5wL0Uxd6xV8PzrMkmI4f8oLuk7_sP_2LHeBD0z8DvxI=w238-h212-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WIR9OtRANEJ1GanVbJgef69C9mjsw2gYZ90jMBcw8oyS7vGu9qP3VdQS3RDUeer-fjana8TLn6qVZVlRE__RZLIRc0gOR2HPMMj3jiTk0Fd5035kz8pCorT6jOYL0-T9KwYQ2=w1015-h571-v0?authuser=0)
Ejemplo: Clase Automóvil
Responsabilidades Sigue el Principio
Viola el Principio
El automóvil se inicia a sí mismo 🗹 ❑
El automóvil se detiene a sí mismo 🗹 ❑
El automóvil se cambia el neumático a sí mismo ❑ 🗹
El automóvil se conduce a sí mismo ❑ 🗹
El automóvil se lava a sí mismo ❑ 🗹
El automóvil se obtiene su nivel de aceite a sí mismo 🗹 ❑
Análisis del Principio de responsabilidad única
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03Gr4AsxX1ES2AIyRj8pMZQBeoyKwppd6X3-8XB3AMLF-0uye1u9318Huo52FhYctndNBxl7rWpZ26l1E3I38hr7CKL8PaECprNojEt0r1Qetvy05ahswZJzWTlgWSikwuiafDCw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AyebG6p4uRYe2MkN3A5Qc9Odzbp-sYco8XI9tvdi7e5a49gKQurd5v1W8FMZfsU_6xdhQG0qVzM0U1f54OENtv4poTK-ouujd5APR1D6JXu6pXdyBFLWLFS-ugT5Dz-SH5Hd2YA=w1280-h520-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32R_0ltIPeUP9Tc4FeCJ1pGH_EXTBOrNk3fNhtF9DCkn-o-DX_9Ms0ovms5p_7dcOPRVcaZsTn990TEFq2PT4bOFRD63shyS8TCausuv198yKYXyvzrNZJZKR7rVYxPniXjIk4zA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2z5wGiknIzbTWZ364HTKewmQBFnRUuyavvN31Kb28YuKzdEmeHSZnDLg35CnkDIMbKN1do-yXyjy9ukOaCABA3vPFZelPIix63SBxL_8KlwpTDJQslBJGFK2INTLy6wHSMQ27lwA=w1280-h210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iflq4L2h50TYL2FBbQEOCnxr5AiCmoof_djcbpQD3AtHgBGA4UDHEYhFL-0vZh4j3Ybznn7ecIrMZNrMMCzBQ4qyVyldxhetPuxMxbzVQeeBT0ylgvHOEA5GnEdTZytl6cGc2WA=w783-h409-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VHEHC6daKi9Bv84BptHR2hUqcPWQ98_NrbNFisoU_cIySM_IVil6PXXsGm2SmTcmuje17cctfa2JwUBEDR7z-_RH6DRm5YzAzRVsRczTn2bpwuR_P6E-lYzYfSzfvkY9ib7-xUw=w629-h539-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Qtg5PMFH0ye7xXd1QR7e7XxORWRQBvfhBjV49WsOSBRiRbwDpaafcDRyd6EQZhDzcZDVN6j9PR4sNVFp8va7sHza25MY1MuhHiTxhsuS6ja8Zm4E9xKPLcUoFHeyv2kwqu_1MJg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2O044JXWw1IHALZZ58f7i0BrxtN96IQIt464PKcQEcrew9yY-msyxLONrl-h0Tqcjik0vhZAMtME4CltjASp9oMwcY5elcbEBfpgdBT5CdYXH7Je76kRu3kIYLws3Ws-6dvyMoSA=w1280-h210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30sGJlbUmjuP-sGA57dF_gdgFRcRGYVTcbo-FuYK7z-4ZP09bvZAyDJ0FzG4eJ-TooJTcpp5uA1efkCWXe0WGzVi1A-bGrQXpv2tI9Tl5NSK3MYTlUAqTHa0eVxAskbDDEtP4hKg=w783-h409-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A6ehdXVfT8QzJkezLLg73BPMP1cknCgD6DXPd-_k7KUS1vMlR0HCLJ5AK1lm-P1mSf9JpBEHGFw_pN2aA-ksSaewh_Kg_NuJc52gdPO-Dyjeszt_dOfEojmJC9EcuNzabd1pD=w629-h539-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lNNfF4LalAFXcabWY47kL455oYTGZ-wvG_LFALsbEIF1mHM8e4mnUBDALxShGPUguhEz08Kc9D2QjGblFL5ajxBBCCfpjnGmaHyagVhRP7CekarV0edcKfURwLJ45DHlyApU_Sg=w238-h212-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MEaciVdIlNphkHrUP7DoJVYSKlzVyvWo_9GzCW3A1RRceRiXPI1w6iMaYSqDzf8ustHN9NdMtDJouXu6iMrQWXtSog0jTGQIfIxyxOMuYoYUln3sQkMRh78Dsm1rRlg2QVy93BQ=w225-h225-v0?authuser=0)
SRP: Principio de responsabilidad única
Única responsabili
dad

#### Única razón para


#### cambiar

Alta Cohesión
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ifEKBmu4ch8MuKrOLf5UwLy7EIladLBQo7m4b-PsjGi-Lwj7VLvD27c73d5VAICkuLdvE5lWN3arnKdXRajQnIhgF8cX7lZaSCE9_3zy0B1fcyvO1AA81VMdaq5fbvDZO_HYT=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3G-H3Ucsh-ULH82a2HdLt2fdHnjeckUgZI0LfRG7V5AzvN_-d5hu6rZtmCsf3OCDL-qic8hFLA5p6hVmGmK9J49BEOBwAQpmpl6FpyFg1q7pqJspW-g2UZxYRPO77kymNrXOVL5w=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ul-WvGPHOBPUrUxxC9EobpM4bEKdZ-ptXE251hT4IIgWmm5lgPqWKXXZt-zMOrPx83f0QlpLaXeeBA5Yh4rnIw-tR_KzGkB3ErKpp6C4EkVjc6LhI097qCZLkuKehJM-wzc3dBg=w1280-h730-v0?authuser=0)
SOLID: Open Close (Abierto-Cerrado)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36PJGR1a1zrILkKYuDt7ekuQu5c1Whsh2_YkMXIXCUbQ18IfLbsN8FghAbJxXghCv6QaM03xLglO888hk2XI29dCW-Ha1oIB8MFsarjMJYsSLAdV9jxYSII7Wzu0CxqmBz10dN=w1015-h571-v0?authuser=0)
OCP- Principio Abierto - Cerrado

#### Permitir el cambio


#### No modificar


#### lo existente

Flexibilidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RkS4lcxpzJ3QAa1nIFtwNqKgIj5DFDsKlGeXOWbO8fNumG4PmEJAWdJaxhyXbwVXwdHZ0LrAS-TFMT8NhY_e3CZcdpJoH3euOiBwcAYlJya9fm24D41Jf0loc3VR3VhhQMad5mQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cJHSeotRwsx8NAKHS3FOKdPlnY6cZZYOF6lpAST7vg_CzC9TlYz4MaixHiyT-lnQjJ5EvmxbmPzbuPIDl-qHdUWfO65cVfuoGWvwOFD5prqXkkziY30RVhKDtNZ0JhTHMfhxM=w1280-h426-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jZGUGuHIMhMqLY0O6W-uvo7Up4oVAxMctd_UYSRx6YJegdX2X9vzh8cwes98itV3ob95cTPCNtWJcLT_XnVkzVWVb7fur7SczEUrxg3BQFEHMZneq4g83Eu4bp-SZeICnju_3nw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OSzF14x_AQTlTzNagRQ1eDFO8uiJ1LRvRylRYTv_WQ1b-gXYEO-f4OPRKlNWJCL9wxAUqbauYGgsy8pphPkpioA6DWu8TGcGddxgpvmR9x9OtSK6ncVntEY0ite_MXa8sGqKnog=w1280-h299-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CG1iNDwT3Fa-Xy0jXxWlwJGX-2IxQR7COWsAk_9tLowBe34PqDOJEVSu4M_wgxUBRwf0-HBckUpgUNLNiT_BZu4W2dFDbqk5vHqjaoMeKz9-WiN5j-CMNpRBOd1GcRBIIp7kOCA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ILVBsEGo8vi9reKmFWgjljx4deM-Abm_1nMmMzwx_eT0xWEtNY6iRBrA-HkcNk03u1tBjkF8KMgukdj84ZRG_ps3_RUP6qGmmm2IylOkUhduqpvzHOmw5knl8LKszkWBShyCYHA=w1280-h299-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0plCVX5AjUJ-ma7KAVqcdQfBRxqgjo2Jaz68-tQd7G-CNdO7ISw_l35z9xZNUSgS4hWr5-RYEzy21fUlddW0GAf6ruMelvFGZj9aZyxTjWS_F4tAU4lRpzkCG70at68BtMsS0z5w=w259-h194-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0e9UE8H0Vu9DWjEpysjqpLUmUxINq9ASjq6YyO0mSJvKvRjMGxDYoNIiknG26vPc5hpjMuLmMu8bOBiwBTthC2vJXzsdwLYg1EFvY0zgPiVBqbargVhjQyepvs0j60Iw5HuU-vVg=w1015-h571-v0?authuser=0)
Principio: Encapsular lo que varía
Separar lo que cambia

### Ubicarlo en otra


### clase

Maneja la variabilidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02ZDqQLKYHhkd-6Dsos4EbynmuU029uP9SVJ8c4CJZc3wMOJ0iQYm1JZb8kUPzI4gbQpCZnh-zKMmSw1J645mfPH6w21PjV47AP6DpgUk2paS4QOn0C3THT-3V-Tl8-43CTN5z=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aou33bYZ67JQmFJmo6aYYFOaTYPH2Hcmkem2TniPw9uvzVnU68njiH1cjdTnC07Hutf2PclrfFqog1vW3KLV3rxJbswf0BthchnQulHCIabdrSt8PU_98NO0NSmui0pes6MYzpA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sRxCRDqzm_z7Yprb_u2LtG5GKG_Q1PKPw8261CuC_m9f-exTu8RhOpBKMMxfxvYweSv424gIgByYt80iFneaEokrGcjnKtCG_0tCiQoRCZV-ievpuLkgbISoCfTEsj2VRQfxXbQ=w1280-h1095-v0?authuser=0)
SOLID: Liskov Sustitution (Sustitution de Liskov)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_NiU0WOzz0y4_k8pxY0EGuD9hPBi_Hy-mGPv61BJ_4YjaAKTGTcGv_C-kDYHthbjqsoBZVMM4U__IwopM-nqKJptkv8WtN25_0fj9r5EXswZOba5v08Cji6JOndIKZkoBd5th6w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2x9bfsycxn4FLIDY5nqJ3ExvJBHta0Ox5YXYCIZOeqDTM9XohbEEc8ZInxf8VL5SZ5rtdy8MaM9UyahRXPIVKjdd_I-f9LJleSqYCxpPCRA1Px0NG1t1mGksV8VVpkT9UL5iu8Lw=w464-h401-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VxNitUp7eQ_fWfMTtMjRL6nYps5uuIUBh10aiVQ0lq_zdZSRw-iBPHSvBMmVUHm7RKLevpxv6LfyPsj_eaMQhrHF5XIuU91cGkjg2Me-D8G8Qr2Rcsqj4o6BMfIqp_nuqVsmj=w200-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0R26bKmjMb4S3J_H9FaNtqhowpsOsD9u0V3-LgtuCvFdLCQdcOp3r7x3BlaYVfJLJD4-4MkKEQw7T6FSYxaYYwzLGTCL75XR_nDJkvr1aJuELBKrQhffFbV4lxOETCQNxK4Gp_7w=w783-h592-v0?authuser=0)

## Típico ejemplo inicial de herencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QvFE8hHGxB8J0X13b5kRGe8rlilzXJQ5vW0lvUri5QYXNvcn8svlWRvtgmRfqE0xhZu-urIxqtPQlWvyOhS42gK3J6Ko8NrIvKErs002uHUeMy3084c9AneVVMkYMZxejXXjxZA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wkQTJhA7uUbkLKPqQt9_gippTnnE7bsx0Ou3UJwtOf4Airn2og5Znucmd0mNqx3DUByoob7n_vzW3E7n5i_0bKTEsJrsMj0tALxELgOIQMgpR83pUibUs--C8aT2wDx59qcqi1Q=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2j-ngUrwoPp344eqeSjPQTLurivUJSqrUdIOZpBPtKBV8abAwXWsZcdGz2BIAUfKPAYbzR6l1y4V1kgE7yOZL8mmE8klFCYwOcPV9ANdH6E06Xa_Xtrmfj8PqX2b2jG-cvBaA_Yw=w382-h307-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RkRy0nzqOexGpJLFRQ0zcorcA_-5LGbaWklmq1cGre19GOwjD3BX8FINf1078eCZbfi0m7puMdu21_p_Rm6UOZbiyq7M0dBS_md2KbR1ay9Vo8DfEvnkMwk4vc0b0_nsJyOhhIA=w816-h651-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UdujB2iPqPqWosufIA90OD9WuFs5bjyY9oYLphqTMOjAKLl9Rui0WKi_xqPqB7V3o_8ArGqA10pq7zBMCgQ85iFdZbg6V2b4vtRzvaL8VSQnA0DvEAs91ETwhgZazByt9PD32=w462-h378-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3e6F-jrSp3pLpuBFj2QqvHFc9SYo6gDRnzFtqb8fUIdhb2le38xO1gE_0YFj4ZxUCIpO8NHmGF_iztP-vpnKcB4E154nfjhzRkJbX642qI7km59ydicfqkdjOMI1v9ysrnW8efsA=w650-h477-v0?authuser=0)

## Ejemplo de herencia de comportamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv239HaAM8WI75JZIZKAjEHz7OBameYnSel-OB2aiin1XBgpSie540GTMX1MK9KVCeiMDH6Abcxf1_zy0tmhs3H_v5Y1paba1PTZblc-EIistW442tv6RVQrXZtt2OoGAa5FSj4huA=w1015-h571-v0?authuser=0)
LSP- Principio Sustitución de Liskov
Tipos sustituibles
por sus tipos Base
Revela problemas de estructura si
existieran
Herencia bien
diseñada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OEWarP2-PsjCVSzK_KLh5Q3GVP2c1gfBmBNJA8-1Z-1e6VjArMbLbTWasESYQdKGrAFzk4AilEgabhHqZGeH5ffUfrM8w2wPt8bODlJRV12UeNg6k7bUKVez04KAD7EAu559vbQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BuDFmFzu6OtMXQuNbfQiDCk2mMU9lJCc06RxHgmmn8TFdyjtKCuiYzLF4qkxYI0Kt-wldX2cUjYhHygzXxjxzoR8UmQplj_qC6N2ZVrUcafAWsdS8wizZZJuRtM-fVbjq6RM3nw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Q8QKD6JAC6YaDehjewzW7V3uhvZNrJMA71bdb6qVRHaPNBqta6kUuYTjndzRSCqCBafGJEoZFzN3jEAIz0QFJi-aEvxzguZcwqMOy1S2QGIWVwiXCfl-QJHl015GAJFB1gOseCg=w1008-h493-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BCteZ3NXH9t5b02cPW_MBhLu6cyy2LP1zqMYJ6wDShnpPC1iKTXSLg0UtQyIXrU2ah_N0FkwMhyz7N4N_rKCK4r4b2fpemNcOhcWEpKNj9DiL7efs0hKh64pSgJtxHOdC0MGw=w1280-h620-v0?authuser=0)

#### Interface Segregation (Segregación de Interfaces)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bsNAJjSTdKR9zR148xyzK8RHtlwiCwvbRI4mI4pYBlesoMyrDzOrbc_KRSGQLxdoHThjjzs9vDxxR0iE3vEgES_tuBPfR0WtC_uGRpk9f2ZUDF5s1JkQLSEpsvL0YeYRFSeTWKg=w1280-h525-v0?authuser=0)

## Lógica de


## Negocios

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UmdOhIUhSpq4Q7uDA6Az3o7JFD3iuIBJTCdn9JWNjSundTgkgi_VZigAk_PkpZEPrS2L0LwwF4mY_RV8GZ15G0IlY-bD6iZBEftN05tzk3r86lDfLGRTU7UNs7jYfitzoWuJ9bw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oVZCk65vC7P5gKTKQWJPzzzHPWW-4_IxGqNg1PoktDk-9NBEoN5O_7qzSQcbdPAgv0L0IGf7eIf2rMVtC1cuwgV4OzvdnR1QYlUeViVyXHujA7rCeH7PLVDoycCTgWFAMKeBz1w=w1280-h517-v0?authuser=0)

### Lógica de


### Negocios

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QvnV4i7rMbpLxFX7udTGVO_pY6HmUCPLGO15Tokg_q-IDU1LMs5Ix8V6cn15E24wvg4F_v3yhqmOjX4uLu4QtrnINnsnHnR2GSHLNpJDdo9P5GmR6mhWzekdFsFYvdSGn_gZXnA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2f_TO0ZkH9UZYZ2mBRc4EGyj9vD62pAqpT2aVAsInSR7K8QZlOcsDao1-H79j6NYEbgfHPp6g-coQ4ppLG8viE-FpSYkuXYq3T-eXAjzpyY7aAYnek7qCyK7fHaMdkahxIweYrPA=w1280-h517-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OzABdlXtAAYwgt1OOjKr-IXNoHWjihBFNWDTnFM0uYJ-kBW3CoCUA9935LeFfaoWy1T1EbQOP2-YqTpNRFcjOR9dn8xF6l63MDhQ-X_lt1BEXl3yac87UWJDKOjQGxHEPYpFpOA=w291-h173-v0?authuser=0)

### Lógica de


### Negocios

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-YsZgsV6UHxDFv9OFta8E3oM6W_eGK9pbIxLzw9W1U89kaIQBb3L5YquNQz4fIrCf_QUXGKzAKm80zGsvZ5XzcKiOUUDuuxQhqwkaKbCmAR7LkuMMdouIk3pbJQ50LzA1LPVeTg=w1015-h571-v0?authuser=0)
ISP- Principio Segregación de Interfaces
No obligar a los clientes a
depender de métodos que no
utilizan.
No obligar a las clases a
implementar interfaces que no necesitan
Bajo acoplamiento, facilidad de
implementación y

#### prueba.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23VVShzyhqKiqLcxkccex7ijP5U6Lmley7wDTysAr-XVwI9Kw_V0ooXTN6f8Jj-vY-ibmDNaGcoqkxgIqGA1Jgizjoh8W75ji0VXxXDnOPdjw3nhWvuCsK12n9HFq7vRrm6YEqrw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0R3DcOV5nQpRhp_73AmYmS11ug7KqheFJ2ucUIwmO7Wnm-YrvE6U578TpJgZuhHWrVDH_2gh4qwyLXs_QWc2PnwzugLYTkXvR4e82kFYtQesZTsgIbeEEPzn-dR_5RAbmUBUpQqQ=w580-h584-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07EH3_8_ns340LQ8fRJJraZNZhGu78w94-KKKxoE8sL5V6fDEb3zpLG8VClNLtuOVnG8HLqlLaj6LEMR-0TSculAvPcnWMlzrhaB0A6ctL-nODyWSRwGnKCLsdIi7kMeWw9xcWnA=w626-h417-v0?authuser=0)

## SOLID: Dependency Inversion (Inversión de Dependencias)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MCScwOwRdHqGh9dvwkITNBDARvVfItxHDQ7CCH2M2XpMSCykkGKa3BnrMwJWvGeIpJMWdqX3r8d8GTMaxfmTCUL1WI8_QpcfnmM3FiYeLAwHnwNHAQ7DIfQZCBITDxCzLEHDFtw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MsyIssITVu-MCGLJestVTjMEfitk_GxtQs3y-GShbFRkw09OOVE_ggP84c7lypzQLy5_rOexs3jd_M_pLeTWkbyn2Ut75B1JsPL7UrdpQUrLTuAjMeSQsiAhBW_HX-Dh3uYojaA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2r0RrTAL7hAK4hIn5tFc3uQ_jfiGP2MOA9Mleb4xI57-KClvGYYqSM4xDKYQPo7UUt2LiRhUuiPZrfV6WdOSqDlN5knKQInz4j83ZjWrtivLuTlT-v8PJT6RL_ArkgPnCbaGeY=w1280-h690-v0?authuser=0)

#### SOLID: Dependency Inversion (Inversión de Dependencias)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yOY08W0tR_EwiOapzq6riDs4rciR2gQhuFVSH8P2GOMqv5kMWi0jfO_OrBsKgL9jNmQOPe-_ysuyiZbhhdUHB1DtUijTKQFaUnTBcZfLiLOrTMkbZbF4D-3uU2Dbys40haaT_rw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2goNHngZBUcru7xduiuEX3OunkuAHrjj2TbZY8H61guspEfYmgduwlAP5ZcUztzpTQlxpb4EGPt-QY2mzuJFgpNOYFazbH82-fKDVC4CRtsAHsj3gVZpxB7fcib1S4xUbt24rRUQ=w1134-h708-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35GdV46rJTz30OXtbHNY0NTd53UGOElvljXvwdxdwQhXsKzUzUfCnzESfsohkaZ_jF90_7nHJx0VB_d7R2OK07E2ycopmzOtCS6ud6c2P7Dkzs6RgKuqUAvwqsWZHltZJeGwTJlQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03wxqkMKCWL7dW2g9WNgdag9Eaqn3bXRcjdHp2SEI_6x_4deu2c_h4gZFvwvmyqciF1nztwOMQzTiByq6WutgleqeCZAG8eUiEfb27k6sjkQsPL2wzQtlVYWXd5FZSLQQBp0l86g=w1008-h856-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03s8M7bBAXmhJcfnmmslThQdiCpY7zdBgG7rTs5VJJsbAklwtS2rqdnO5OPkE1bVDJgSDPu5eB2IBb-Eql_REPstz7RgIZsT0YGKL7S7gCj3-QnbEo4o4ASiRbGNMqEfYKgpfn=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cw08ULs8JL_tHHuxZP3ttsDlhkJH1nhiJwXqvzQnxuxCicrMzMVt_0-4uhU94PncOqsQtRud01lf9OnBOES1mQyxUNdWkZ49t6CNebG-6GEs4ygSNKUn7-L6lntbnLZqkHlOdHw=w1112-h809-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zQXS7ouH8yjbU6rd_5_QtLXhyn6PKewprb92IVHcRMauoArwZCqGCG9_VT2GXThAE0ZOxpI6jMplypiXxBIgW8Y1gav_MQvSsdTLy3Lug4lLDnF7ZtOzEBKt5h7sezCT9NSdi=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Jgrpmq11x5LMfsc16boaz_a3lYuJO8kStTihuDMnsFUIHgvIoLsRzuutVUcQbcbSZO9Yrft81pO4gjxohIcFBh42BXHL8XvPi4UMwFoFpdEJO9M8VzNurOMDvLIdSuB_KF1IhLw=w467-h237-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qvL9AvKav0BcZQeHWViRoW5sIkLo0Iee2NHywsF4jhhbEv36ZJn6B4daTI8rKcsQYl5830A1Gd-Ls6yEvfd9ovvy7VegxknHCCDO6HKbsRob4pL4YbaVoTC52C0yUmorx6UQYjw=w423-h201-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dcxQymOQCgggSf7cptGJBviS-bSObJ5xu2X6K3MAR4W-B4lmeTqmZQacjO41PwYB9W4SXOUBcX91aekCMIFZjwViGZxL8NHaxwR3-BLrJmdjVNFz4CulSgKzXU_eVPgqEglbo=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fsm3I14n43E10eAw5-HSLCYjjfOooNHjyiwUGo8_c_x40yRcyBa41Nv620fTEcsR7Ru0JWZDZKmLBoElBnhRKY94-9ypvTexeJfhDK-W9RCNJTo4cJymTRYKezqbDUryDRY32qg=w423-h283-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AmX87Y6WFEidNMm_xDqA7eDEraQNghRnBlylE16yXgzzbGunJYrPryNGHJnvoTV9kEcVTuJ3uPr1DRZ-raiwOfgOLHpejpoZRAkAHXR1WcxDk-EUtQBz63yvilT5LbJFJpvtCXg=w276-h182-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ojolrWBVl-5xUgefFv21znTnaQIY9Wiv_mY89HaehmtZQNwLr6DDSJ3oV8GtILQzgtjwlibeLLfcMPKlZOQgGRacNXr6WCsMUMepdxxKg7lserQ4NWRAe2fQLZIvKHc6jiiOSyg=w1015-h571-v0?authuser=0)
ISP- Principio de Inversión de Dependencias
Los módulos de alto nivel no
deben depender de los módulos de menor nivel
Ambos deben depender de sus abstracciones.
Las abstracciones no deben
depender de los detalles.
Flexibilidad, Robustez, Movilidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ugY6cF2zIs91uEB7Ulh8_fjEmvBQjZa926Y_NBZxBKpmSXoFo5DX-KISiv3LmoxJvVBt6MPRgMBBQOSCElKBe3MusU8Mv9N_86iTeRc-WT78l8THrJBR04w36GK8Ek2z73be3=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv235Rn0PRghrqNdG3U_xenKtQAecoQDmZYA51pU5FotZCFYdiTCRQW1OgxdV-Q5H-1xf8kuSdLLy8fnceMi1eMAUICohEw5R7kn0Fcylb6ziw9d24E58Texf6eMhyDpjCNfwlYq=w240-h216-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GLNfKzoEIJ0cJpp1n8iGphqXX9LYcukIRR27PYadbLRn3m_VpVrtBEdDj2eaDX-V6F7D7HthkkzL_Z6Kj5nvkwTGCpLpTP9gLajxW0DFiceAHv3QSEWmPXYmZxdWZBRQgz9PN0A=w117-h110-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3W0hyMoK2aWOL6ZKydQeg9iVQVXIAM3DLhsGmVTQu2MO8-C2CMTWsD1KSUzseHrW8heB_Y7CKT4VPE1U_YaASrjtDwFoXu9FFPiQ_5l3i66Jd61muz4qn-k6_w-r0O72PTI9aquw=w151-h171-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hrtiKFGoMobbiyFqvjtBicaB1hPp-JHlqg2zba44mPpJfdB3BNIwf5yXTEg-C1CPBZpw10sTXQyFTcwZFhlpQT0skBFmxz7IlXp2qqx3-cM2uT8fKhUR89yZj2v59KT5KWLI-=w213-h194-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XV-B9jwaz-O6Kn3g7qejQqiDotjeT5TgtLirhTZWmpk4HVQ0mPHWDUUFBd3-g5AQ3buL9h_8eIXWVvPM8hjWBuabuNLIqB2lJNhWT1fe8SZ4nyAb9QilX5gsPNW1swCyfJVOJTA=w159-h180-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kfumwFB14wlBscoW1UHGwQA2Xxu-vB6EfIxp92ozbytX2iSUkawZtAe6MSdba5Zd1n7hG7P9t43u22qtqdcECy8A5ooMwfQnjiuEu3TKNX3gMAzgoqoNHTiT_M6jIpdh4IhtK=w124-h114-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q1zaXcgdpl43RgWZ0HVJ-6sGX2SKslSx-sIPzrhei0O9-TpNQhzZPas3ge58bZVajlMMway9Oqkb9swYltI36ZFRAZh0f8Zp6IjoMtRHlA9v8YS67uOKXsO4W4CRrdGJa5y_R=w64-h86-v0?authuser=0)
S O L I D

### El desarrollo de Software no es un juego de JENGA

Single
Responsibility 
Sólo por que se pueda
no significa que debas!!!

#### Open Closed

La cirugía de
cerebro
no es necesaria
para
usar un sombrero!!!

#### Liskov Sustitution

Si luce como un pato,
grazne como un pato,
pero necesita baterías,
Tal vez es la
abstracción

#### Interface Segregation

Quieres que coloque
esto?,
Dónde??
Dependency
Inversion 
Soldarías una lámpara
directamente a los cables
de electricidad en una
pared??
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XKT7Ah-H70lmxW_KUSrAsxNAHuz5XoVnF-XFlXIOR1kSrO-IaubtfnIIDcQw1DEDtaK05lc3Ki8UEAkz-Vc2jkvwoc_AYTeiHawIPrjvSDbblF1-D_d4PhUFDgP32e6ZV6V3A=w1015-h571-v0?authuser=0)
Principios de Diseño que vimos…
Don’t Repeat Yourself
Tell don’t ask
Principle of least knowledge
Composite Reuse Principle
Program to Interface Principle
YAGNI
KISS
SOLID
Single Responsability
Open Closed (Encapsular lo que

### varia)

Liskov Sustitution
Interface Segregation
Dependency Inversion

### Todos corolarios de los principios de diseño básicos:

Cohesión Acopla-miento
Interde-pendecia Funcional
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Hsu-isq7fXDNhxwJrA_VBi4Z6SsmIp1cPbycXO1imlmYxEjfy-scPP4CRM4UUmb2Eravg66YwUs_8PnVFN23M5j5FOR5FRkcIRvZuhCW9F3F7hxjDxHIXXgRU-glzV14zyAyT=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv074Cw-K0E1iifMxVhotijl8TNT9uzFh0y32qBxvC7IaEbRh75yZs129UUHQ-ikUfshYWK_5spaAQFVrB-TEhdNDCuObO6G4P6qbOvZiI8pxjS16zhUmxGnWXBBJUB7C75W2S3UqA=w1280-h720-v0?authuser=0)
Principios de diseño para microservicios
Alta cohesión y bajo acoplamiento
Límites Discretos Principio de
responsabilidad única
Diseño para fallas Capacidades de
Negocio
Descentralización Automatización de
Procesos Comunicación entre servicios
Monitoreo
Segregación de responsabilidades
de consulta de comandos (CQRS)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Q4s_qwo-cUB9QpL-tTsJJfg9A_s5xzKC1ikYWDnFy1zweUdk3y2i6vSo4-MqjwT05aIEYToKx2Ae3wORxyMt_ck2b9mOEMNa-mfZ3DOAEiDtscKHB5wGKXT4EHDOVXsy1Zw8k=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3C8s9G-ut0KvY5c1k7fFyHUR9K1YbpvmuJFUHfEEL75zNNJVbgeXOrfraK9gL67h8KgBQLuFpAaNDTxTVdQPvNRSbJRtMZ-y07IuVpMekTTWPM49h3EPLMa9j8KxLmMovTOeSSpQ=w1280-h720-v0?authuser=0)
Alta cohesión y bajo acoplamiento
Alta cohesión implica que los componentes dentro del servicio colaboran estrechamente para lograr una funcionalidad o un objetivo específico.
Un bajo acoplamiento indica dependencias mínimas entre los servicios, lo que les permite operar de forma independiente sin afectarse entre sí.
Ejemplo: una plataforma de comercio electrónico, con una arquitectura de microservicios, donde el servicio de pago maneja todas las funcionalidades relacionadas con el pago, como procesar pagos, aplicar descuentos y actualizar el estado del pedido. Este servicio exhibe una alta cohesión ya que todos sus componentes trabajan juntos para completar el proceso de pago. Al mismo tiempo, tiene un bajo acoplamiento con otros servicios como la gestión de inventario o la autenticación de usuarios, lo que les permite funcionar de forma autónoma.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CcPn0tyfssktRjAIvG0IfqbILYWgW8vPfBNL82jF2NzZ2AMl8X14OjbHfhNKGX2gfnN5HjN1yzwFYOGiAqZ7W4Pn6I63bt8l5Sr7wbyVxuQVKglyUPJUhduHbS_AxPspfGRSIyQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tHkUYAi36K8dBb-oyIciqIV0qTnpEPaW-BkM29NabEObOD0ClzmUSOaIzVR1g9fYPQzswfD7M4RDK2oPYzbplIhnxwFLJIUE7xgp0qrWBmQrCXiRxt5tG7GD2UkjWEAxeBNIvaA=w1280-h720-v0?authuser=0)
Límites discretos
Los servicios son unidades encapsuladas con límites claros que definen sus responsabilidades e interacciones. Estos límites garantizan que cada servicio sea autónomo y se centre en un dominio o una funcionalidad empresarial específicos.
Por ejemplo, en una aplicación de redes sociales con arquitectura de microservicios, el servicio de perfil de usuario administra los perfiles de usuario, incluida información como el nombre de usuario, la biografía y la foto de perfil. Su límite discreto garantiza que los cambios realizados en el sistema de perfil de usuario no afecten a otros servicios, como la generación de noticias o las funcionalidades de mensajería.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IYdv3InkVrvloQZ8upApEmWTTVD40RiO8C33vKCPUOK3QbeETMQSbUB1dMmyEsOcTKbZuSNk7X3U02xf1Kv1mXU2UKL4UjLYMFvGHRzd5KHYm23l12lHHzvII-BKv0Z9pv7jV=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qkMpwIMl-AWqG-gQ9HsrqB4TYFwlg4-yhcf2j0pnP4oj9LiZ0D_0xgrsgGnBX5hYcOQm8xR8lgw9sl0HeTy39FJqQGxxZRnZLLXf75_5zybMxpDgbKVLr-iSXm31TYAYVEjTPUw=w1280-h720-v0?authuser=0)
Responsabilidad Única
El SRP promueve la simplicidad, la capacidad de mantenimiento y la modularidad al garantizar que cada servicio aborde una función o capacidad de negocio específica.
Por ejemplo, en una aplicación bancaria con arquitectura de microservicios, el servicio de gestión de cuentas es responsable de gestionar la creación de cuentas, actualizar la información de las cuentas y gestionar las transacciones. Según el SRP, este servicio se centra únicamente en las operaciones relacionadas con las cuentas sin mezclar funcionalidades como el procesamiento de pagos o las aprobaciones de préstamos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0O773zi5Hb-cXttzDe834flX8oUtSw3yKqsOXIAFYTh3cgbfJNx_ajz3EDxTWnGMtV1dmtjqmTBVYseGFz0270qt0pbOZ4GtmK2dCG-ULigNz3b87GQZJsF7ZveldvShHIXIz2=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_PHLhr2TP0kv9ccLNRxy4-5e0snnhXpJu5oJEtPdCu61GRlapZAo5aFgJB-899EtZ9xSc7QuIVRpj4zFxKzcxg1monrfW6EFyR_y7oIIPctEJ9OeZ282OW3Zpn-MzIzx4ex4PYQ=w1280-h720-v0?authuser=0)
Diseño para Fallas
Los servicios están diseñados para aceptar las fallas y manejarlas con elegancia. Esto implica implementar patrones de resiliencia, como reintentos, disyuntores y mecanismos de respaldo para mitigar el impacto de las fallas y garantizar la disponibilidad del sistema.
Por ejemplo, un servicio de mensajería con arquitectura de microservicios utiliza un patrón de disyuntor (circuit braker) para administrar la comunicación con servicios externos. Si se produce una interrupción del servicio, el disyuntor deja de enviar solicitudes para evitar la sobrecarga del sistema e implementa un mecanismo de respaldo para notificar a los usuarios sobre la interrupción temporal.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lPog1CBnrpienZkbAZZX_qy31X1P-pDIG-DPQKUF_vwAr7EcqUn4v-jtCDYQwlKKgZjCZb2l-bx46uB1CNEwLAiq1Njre9KvYl_-aP3iF2GRf_CUtWuEYmBIqZ6sPCeBvBIt6jw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23rqNHztpI41Z43Vso1MexoKEHPJySKH60sJ0E6hjCdJ2hQlERI_PU_r6b4XkcA8GhhAumJtUjYCWep8rScp7pwWPc1bF_wJrBf1nYZd8eBrBEmL_S4-kMtyvjP4sN2YMU_bsx=w1280-h720-v0?authuser=0)
Capacidades de Negocio
Los servicios están alineados con funciones o capacidades de negocio específicas, centrándose en ofrecer valor a los usuarios y respaldar operaciones de negocio específicas. Esta alineación mejora la agilidad, la escalabilidad y la alineación de negocios dentro de la arquitectura de microservicios.
Por ejemplo, en una plataforma de reserva de viajes, los servicios se organizan en función de las capacidades de negocio, como la reserva de vuelos, la reserva de hoteles, el alquiler de coches y la gestión de itinerarios. Cada servicio encapsula la lógica y los datos relacionados con su respectiva capacidad de negocio, lo que permite un desarrollo y un mantenimiento eficientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SJ4vSSJlHgnJCbzV7qJ-7m-0EsNW4DEuodDC0J4gTY7enVAzvUbNtpKjAhQshvzsJ7Ew5ZmwWxBPt3wjCExI5Wnk2NH-Ya5pi9U6lcRyMt4qoqboFPDXWNJ6Cc4mL1bMO1gnjRw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IlCjzjJ5Q8O2TWMK4WpvQ_MJ-689jQaG13B1dtKWAoctd9BytXP9VuiDfJhm2EdFKl4Whv30OxYgRqrFfZ6j-8u-l0NR8SkygLtccCl2bmAvM4aHZo80eUksSIngNUdWIjASmZg=w1280-h720-v0?authuser=0)
Descentralización
Los servicios promueven la descentralización al distribuir la toma de decisiones y la autonomía entre los servicios individuales. Esta descentralización fomenta la agilidad, la innovación y un tiempo de comercialización más rápido al permitir el desarrollo, el despliegue y el escalamiento independientes de los servicios.
A modo de ejemplo, una plataforma de transmisión de video con arquitectura de microservicios emplea servicios para la recomendación de contenido, la autenticación de usuarios, la transcodificación de videos y el procesamiento de pagos. La descentralización permite que cada equipo de servicios tome decisiones de manera autónoma, se adapte a los requisitos cambiantes e innove sin depender de otros equipos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jqS3nefkPNoCdZqSNlWt8YTCAKIHJbf_mmGHtG8Vh_iHTjxz0I-QRxX1JgWdabJqyvm6CrCYLWyp43YX_YJ7D8gglVLpVl38xL8E3qFFrFjo0k00_DztnSdxKgq3j0ftpcViI=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_kA2MALLRdJ0zrmP_Btsj3a0KN1OlBaZv6rXaRYh4pWzzSWeWrXtPX349Yu56GeANLNu8KhToPaffZvEcvb9UVo4TJLWnUohDIJeWKQ_bBLNhYd-sUxwvHXnCmJNN4f6REOz5=w1280-h720-v0?authuser=0)
Automatización de Procesos
Los servicios aprovechan la automatización para diversos procesos, como el despliegue, las pruebas, el monitoreo y el escalamiento. La automatización optimiza las operaciones, reduce el esfuerzo manual y mejora la eficiencia y la confiabilidad en la gestión de sistemas basados ​​en microservicios.
Por ejemplo, una plataforma de microservicios basada en la nube utiliza canales de implementación automatizados con prácticas de integración continua y entrega continua (CI/CD). Los frameworks de prueba automatizados garantizan que los cambios de código se prueben exhaustivamente antes del despliegue, lo que minimiza los errores y acelera el ciclo de release.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3--ukK7uMQ9PyzQ7gegD0I7IWVXnnmZvDQVVC3ssaXK-x_bTd7vloBBA-rF6qFIMaWyim8oSTFnvMkUFUertlC2hWA8yBCp3qJtdcXtzGoC-3susEF7IfCZLh0b_aBSIG0Eh4N=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38Oh4zbefnnb2FhfvsC_C76xrmCfD00nGkVn0317bk3G0qI4XcG6-gM6pZatULX--dV2qWPvlfaceQSnGEqwe0v1QJ2Frxr086NRm7u2TFKu6RkbKQ6QTjsWUNZjOgBzowCfo0=w1280-h720-v0?authuser=0)
Comunicación entre servicios
Los servicios se comunican entre sí a través de API (interfaces de programación de aplicaciones) bien definidas, lo que permite un intercambio de datos y una colaboración sin problemas entre servicios. Las API funcionan como contrato de comunicación, ya que especifican los protocolos, formatos y puntos finales (end points) para la interacción.
A modo de ejemplo, en un sistema minorista con arquitectura de microservicios, el servicio de gestión de inventario expone API para verificar la disponibilidad de productos, actualizar los niveles de existencias y procesar pedidos. Estas API permiten que otros servicios, como la gestión de pedidos o la logística de envío, interactúen e intercambien datos de manera eficiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WPQz0ChqFseKwuVjZ9_IPXqsdwzguomCUOIoVOrsu2W4s5nNfm-HEZvE5quhWLL79nTYFWhXkbJ8KxUj_LOMLC2Fp8c03pdFiqUFfX8q2yqCn2YZ6u5mUF8HowCV3ijMyxs34xw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3m6LcaXRB2u_4VotzkJeF3m5gTxT3PpKmTB3nUgi25J27BI7jACZhFNBhmfYNzWRwKEVv6rEhQTZp_b0olWr1qW66WcR8Jftu9omGvBRF1UtBUPJSvHDhuuBWcRT-fo2n7d35nLA=w1280-h720-v0?authuser=0)
Monitoreo
El monitoreo es esencial para realizar un seguimiento del rendimiento, el estado y el comportamiento de los servicios en tiempo real. Las herramientas de monitoreo brindan visibilidad de las métricas de servicio, detectan anomalías y activan alertas para la optimización y la resolución de problemas proactiva.
Por ejemplo, una aplicación de atención médica con una arquitectura de microservicios, monitorea los servicios que manejan citas de pacientes, registros médicos y procesos de facturación. Las herramientas de monitoreo rastrean métricas como los tiempos de respuesta, las tasas de error y la utilización de recursos, lo que permite a los administradores identificar cuellos de botella, garantizar la confiabilidad del sistema y optimizar el rendimiento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1RbHVo_WzzWwao9CvcQIYuwXhl_CwkwjuTOy-IHLCZ1nak-2T8hbS7klTRCA3pXkzN5u6FR8J3cTEDBy6XvJrCljRNuhxWBSpgQD7JH6VXvQ6OShAzLOUZdKfYfr4N85Elg4vi5Q=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TPJLixz9EzhKtoGJLUaMu3BB2wYLzxpgj_1PYT1Jb830u82_hTPs8HeU594mJ0i1PWok-JU43MnCmxNE2U6_f2wbo0pQt9BjQXH21sG_62kbaopXemCqhy2oue4EAcaACEfRyrQ=w1280-h720-v0?authuser=0)
Segregación de responsabilidades de consulta de comandos (CQRS):
CQRS separa las operaciones de lectura (consulta) de las operaciones de escritura (comando), lo que permite que los servicios optimicen el manejo de datos en función de diferentes casos de uso. Esta separación mejora la escalabilidad, el rendimiento y la flexibilidad al adaptar los patrones de acceso a los datos a requisitos específicos.
A modo de ejemplo, en una plataforma de comercio electrónico, con arquitectura de microservicios, el servicio de catálogo de productos sigue a CQRS al separar las operaciones de lectura para mostrar listados de productos de las operaciones de escritura para actualizar la información de los productos. Esta separación permite que el servicio optimice los flujos de trabajo de lectura y escritura de forma independiente, lo que mejora la eficiencia y la capacidad de respuesta generales del sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pGnIg9qo33J0hG7dCt6K25EhFJf3G9_lxv4dbFzPDDiWbWveXy6KZxsp-INhrP5OwHZDPNQ9ZvqcR4LBNEYvXSZAWDPnYnEMKAXaYGHdaBbeKDob6xnYmCsfOzGrd--OtGsmnvA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1o_1-La6Tc3ZZA2TIgRsLuCqtdtEN1VKi20H7rX4NCSNsVFJU9ZL9L9NTRIyf5-xfE0-XSvdxdYBIpND-0dycdmVWE4yKOfhs6OIyCsIx5q9raZEQ8UZFF7KczmsxIAfO2beULxg=w1280-h720-v0?authuser=0)
Principios de programación
Haz que funcione
No lo vas a necesitar - YAGNI
Mantenlo simple, estúpido -KISS
No te repitas - DRY
Código limpio - Clean Code
Pararse en los hombros de gigantes
Regla de Boy Scout
Hazla rápida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BCFfZtc9IXX0wrkg_gP7hTDfj6ayvQ0XBKknGyQDeM91PgQOi6h1hlbPx1EsBNzpRRLKcl7i34rTd4SK7ACQTGFZ5qm4yFlzcO2tttQDZH0p4HxI8Ia-DI_4XAgoRUNGVY0g7=w1015-h571-v0?authuser=0)
Haz que funcione
La primera regla antes de implementar cualquier principio es que debemos asegurarnos de que nuestra aplicación funcione primero como una aplicación completamente funcional.
¿De qué sirve tener una base de código completamente mantenible si los usuarios no pueden usar la aplicación?
Al usuario solo le importa si la aplicación funciona o no para satisfacer sus necesidades.
Una vez que la aplicación funcione, entonces podemos comenzar a trabajar en la implementación de cualquier principio de codificación que se adapte a nuestras aplicaciones.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pi8DF1rLeueS0SZf1qFhXlZkts2b-RmwGGsQFUz9T5o4NJD9WQU-VQA3Fa61328TP6K7MqUqAGaDhcOsajeDUtUG0SWFIicpxLoLWXdA-FeyyI6dtt4a1psgnpH6bAhb2ALoF=w1280-h478-v0?authuser=0)
0

#### Nunca desarrolle código que crea que será beneficioso en el futuro pero que ahora no tiene valor. El futuro siempre está cambiando. Es una pérdida de tiempo.


### YAGNI – You ain’t gonna need it

(No lo vas a necesitar)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ScPrPmBwBCsPJ0r57s8O9jaTrNMTwmH87vw5B1SyeVfCa2MZM3k93SmMgC7Z88-YLnpQKgk6CmqEWe3PBDs_I5r12YbaH0hurB2QGdSqWsv7vIemRl8bPHquJC-b93jGozaIW=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RBwQjKtMUCF3NoCpj3tmT6Yy9wsd4JgkCGv3B4R7zUtemYhV9utzV3qW9GwKG_3Xpf3t1sprcnQBaUiDgxfLZqLLHvWBZ0_SD3q98nSZ30IRHIEGRvOI6CSOZsNQbZ9X72f3H=w269-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1szu4GihXTwDSRdm6r_phHEo1p4bwkCG7snxX2pf5Of_l-NrbI213evQ6iWzrWkCsZrq34THluR5A99Tn_C9EUDcSCgixGOuAzG7ZVapYCyFydXUAjZASG5sNLaysSNQMiZqlsxA=w1017-h597-v0?authuser=0)
1

### YAGNI – You ain’t gonna need it (No lo vas a necesitar)

Encarna la filosofía de la simplicidad y el pragmatismo en el desarrollo de software.
Prioriza simplicidad sobre complejidad.
Ofrece soluciones funcionales sobre características especulativas.
Mantiene flexibilidad sobre arquitecturas rígidas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zTZ0ixEp030gY5ujVe4Pmb3BQOhCKYtHpjuUH6I7TXcMM4jBZ5zy9ZCwpifaGK_OyHqZJeHTiFs6oxSpDbeMnGLZSR9oMY_no9jI1q8EjbOS7ucGOei-ogcQXWZihb5A2bKoSUA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18mS9_wRdv1VIz2PhAZ9ULAm6mzcTtdzXEBVoo-z5gWhH0nZy3dMIRCy2-qIBGpbuGCAAfsD1mNsyddiVdkxJwObYIwW4HrPHEHGmeGEPFQdWwLVoEVv9WoKAPhe8l19rVvFbukg=w72-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bcT82q-8yk8xz4yaI1NyjBjo0dbKowBbi1qudHmRprcAJ9Y75JXfVcKWD_oAnZjEH4afSL3DlPW-lITw5-aJvzz7HHABfeFqqVmlZPqzRCVbCQGT9y7uWCkx-s0RYNjJ-k57DZw=w72-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dKjXVqhvq93RhXmk-xV-0zHvcJ4fLrAVG41Dwvt1feUHUrNpugxMNRYjU161ZUrQmzIVHomH_ciolSyvFEc32zq6XCjg5BpShJbRc3hZKpnEOCFmk7HyEfAe4cjdZXAIBi04Q=w72-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wXHYIRB1Dk58wSNLE-cxWlRdV7qNmUEYnYzn8sF3xlKS6Y-VlpY_adknD3j4CVXppRRwiFwhBTnYOeOXVoDR-3vjbKfGj2q1uON0AaPXu9IW1I4V4tUQrqzsl6rvUYZDtNl54wg=w72-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qxbb3ozy2CJhUjZeUcdDlnYNL-Y8mQmpCovQkEMelm30lTX9NA_5xoGNlohcXZtZq3vtjX3fQv_lKDVnhLiRyupfWSc-JgrJDYefqszYSqenyERDcR1n2tTDDQmzrExie_j_h=w72-h72-v0?authuser=0)
2
YAGNI: Principios clave
Enfoque en las necesidades inmediatas: priorizar la entrega de valor a los usuarios ahora.
Evite la ingeniería excesiva: advierte contra la adición de complejidad, capas de abstracción o funcionalidades innecesarias. 
Se debe resistir la tentación de anticipar los requisitos futuros y, apuntar al diseño más simple que satisfaga las necesidades actuales.
Mantenga la base de código ágil y mantenible: Las características y funcionalidades innecesarias introducen complejidad, 
aumentan el área de superficie para errores y hacen que la base de código sea más difícil de entender y mantener con el tiempo.
Iteración: fomenta un enfoque iterativo e incremental para el desarrollo. Hay que centrarse en ofrecer mejoras pequeñas e 
incrementales, recopilar comentarios de los usuarios e iterar en función de las necesidades reales.
Refactorización: La refactorización del código para eliminar la duplicación, mejorar la claridad y mejorar la capacidad de 
mantenimiento es una parte integral del proceso iterativo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HBZkJ-fm8NBx8EgOhW1U7VEWsUTKisbxFz_LCUJt1uODsBWMyywxTC35zPMkb7_rPaWo3VyBmKvZ_5FjpGunG9ICxdPhhjWHqX9STqxMzwXr2z8MzM-lZjT9NDMTj06HBCZb62w=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R5t-I8b_F6hrYBGCWlO32XPJDBuT3aRMApy6grpErSrqpGN-IWBxbyWphR3OCtwbTJMrmkoX3bczi__lFsQBgeosraT_JugZrmf22NGIt3MbDad1XXx28yYTS7AJbhzUFYPe2WA=w1280-h719-v0?authuser=0)
3
YAGNI: Aplicaciones clave
Desarrollo de un producto mínimo viable (MVP): al crear un 
MVP, priorice las características
esenciales que aborden las necesidades básicas de los
usuarios.
Evite características "agradables de tener" que se puedan
implementar más adelante en función de los comentarios de los
usuarios y la validación del mercado.
Diseño justo a tiempo: donde las 
decisiones de diseño se toman de manera incremental a medida que
surgen nuevos requisitos.
Evite sobre especificar los 
requisitos o diseñar arquitecturas
demasiado complejas por adelantado.
Refactorización para la simplicidad: 
revise y refactorice regularmente la base
de código para eliminar la duplicación, eliminar el código no utilizado y
simplificar las soluciones demasiado complejas. Concéntrese en mantener la base de código limpia, modular y fácil de
entender.
Entrega y retroalimentación continuas: 
adopte prácticas de entrega continua para entregar rápidamente software funcional a los usuarios y recopilar
comentarios. Utilice esta retroalimentación para fundamentar
futuras decisiones de desarrollo y priorizar las características en función del
uso en el mundo real.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31XUHms_xc6lpes-WOZG8-gdieLRaHnL-4jlktdX25uFB45pWhgjWT6utkBMwWHhRAr5eTIkz9PB5TRguel8T-G7TBSnCY07iqrs858h9eCF6VL4PHNM3iSTMmL-5spezrIrrGJw=w391-h400-v0?authuser=0)
4
Principio KISS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1v_xURfiNPWaWhJM7pg-KywlfhvvHJWnMYe1xtQtbgpaS96pGE7YWQ7aoObmmV_kr3QOSiwM-hRc2RwWYNwboOJ65fMPYGLBQbFL3_AXfN8tqloVfsr-7ZKVExFqHwiMJndtcMjg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IzlYA-rIWAXTYDERNVdG8RHKNptnQRD6_5KEN8qenmrkUoB5v5ACsut8oWIER4F-sUbhhSXSFXjUSBVOQ8m1qVuaN2bv49a656n267v2eDClOppfmdbPRrvJPRspTeosIKzEJVQ=w800-h400-v0?authuser=0)
5
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qYglRyszpqXrrd0ULRz3ETmPZX-axR_PB3zsDsYOp4w290yK4G3yqjPQ9NikZp8HNqqFgLXOymFMboEMOGnaH0wule7tsYdutVdy7JdeZhsoKkI8xD5zwHyoXgjvFG37EMStJeg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dGPRP3ebj3DIlQJeDc6rc6srxha_8wsv4I4byptFkuUjR_OXExjGkMs7RnrQDELz2TJ-rJAu_4y7Y0XA5uq_72ZofSCm2La1nveWYvYGMpdjRQnZ_I5ELxV9pU5u9WhK7bw4kYw=w711-h400-v0?authuser=0)
6
No aumentar infinitamente el nivel de abstracción ⇨ incrementa mucho la complejidad.
No tiene sentido incluir funciones «en reserva» por si algún día alguien pueda necesitar (aquí el enfoque según el principio YAGNI es más correcto).
Para qué incluir una librería enorme si solo se necesita un par de funciones de ella.
La descomposición de algo complejo en componentes simples es un enfoque arquitectónicamente correcto (aquí KISS se hace eco de DRY)
No siempre se necesita precisión matemática absoluta o detalles extremos: Los datos pueden y deben procesarse con la precisión suficiente para una solución de alta calidad del problema, y los detalles se dan en la cantidad necesaria para el usuario, y no en el volumen máximo posible.
¿Qué implica KISS en el software?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VvG-jgmD0TxKWz_IyCuw2dVZ94djLqgXy2fIU6IBfxSB7NRJLrRRzkMc89IqqqZM5nKNn2FZquO7sFJ0fVeujvWPqqBoRIzNuE7AnWsTNSb1fsgMMOVYkjoBnfv2YlBxFFDNUiA=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SjuzZ49QJDvTHUTqDiZWzq6L5iFu_Tq4XMryo80WLqCAjxBsgQlPOyjeeJajO0M00ouVkRTToltnuMKNR8PTgwvuF149rTgkzdHmSZNKUF4lBpaRsWV-fV56JE-ShU7gQEOxfTw=w711-h400-v0?authuser=0)
7
Mayor calidad del código
Código más simple de mantener
Más flexible y fácil de ampliar, modificar, mejorar.
¿Qué implica KISS en el software?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SkhIyKuxIU3ScvrNCJSQFEWNjkihvZH2IhNNc2uvRKJyQqiQaXCmwmtmQKCAl2TuDVStHfJA-GpulJAmhMQ5V_i6eHl6w5qT9nbyvYC9fm6XIgKAiOf9vQOTtVFR6hoyvc9rh=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06-K3HcrIthbVjGybaX95DRojf-k2TtLYtYKPUgagrvAS9XffMNMc2QgaOXvlbrwdQMXTdyiYiZshwyh-_q4Rk6ABNc2KTbGRg02S7u2e__mrikUoe9qLju-czVo6vQPw6Tih4=w1145-h646-v0?authuser=0)
8
DRY- Don’t repeat yourself (No te repitas)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aF2svR7uxUPuoOC4MkxZMdlaxi7OqiUIvJzSgkpEzSg8GlhO267eZItM7aBFQhOokgKdu4lLtR538gqPOBxvbBAVVBqB32AW1xcFfu2xkvklo9p6ST7Fm-nGf0_JOsfl7ETSQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wjuaFTC--Jk09kWhxHjLOvj05JApgtrv_o4MUJ-MHcZt2B7C4-qNI1CErkg1EzksxjTmouI0AB0qB62IIDT3MnfvqBOxSTZkLSutL5ApQGgFc3cpQQdrtgUPMoHz8wfSSbyKo7Q=w685-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-2wAMhgZ8Eobqcew1rZGG8i0XeHhtnbpcTSXaPVodGc3RU03LECm1MfDrNApvzydHAVIjvvVHM-Qq0zKfFeLeyqTgCTzeU9mjXHSWKnIiMjfdeUaQ5AfwIYWFC5uVy8TkRlUY=w247-h300-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17pr_wJ0OWUk1yh3rpqSgjYD_1oB08OFg2X5Eu4r3LItk1XX51TWFgRmV_sAX5lkPPwFL0QuxDagBFGmaIM97s4NsI1FZ8ccIk-9A8B-PrDc72tjNFIATvo3kCmRiakX5KVpaI=w395-h332-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tdoZ7HDs-nzm-D4ltsdGlI-GWoGNVw4yay-2FO1KfV7SY_657e6IKBETiPFn0NFK5vpEaZ_nuy0yRBPurJ9RLKJNbn-gMKiMhdL0gKKZKQzCyiSCpfyH910t0I9GK1RqtiqKPug=w450-h450-v0?authuser=0)
9
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bYmNriC-4ZkTXtT--p4OHJw3BEuqe3Ee39NSew3UOWe91C3Yo7MPThGqe4BXIkR8ewkGai0tVs4OQkPzNfcij9y2d9ipttYZqXgJmU7SgzRsGIGmd9fT-Jk7uCI2uHT1xPL78=w685-h417-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29Vo6KkQ4GeHyy-HJ-x9Cg1hM-dMvXvtoFXEPsdVZM0onfoNpF_8UuvA12gajQgljZNo3ofQ_Xpontdm28Xt0mHALjfDP4OdHXWZ4-D4tkQ84WoCUol39nvTDxiiUqLoZWsQ95ig=w182-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EmbsbeuDCogpY2DUBqkI5-4ZzMWy29EMP7p08HvCVPnfruR9VTafJoFUadi36HXty6aoNQXfyXLnV3IxILaK3g-XvARF61lsJxiiP5UeJwO8tTDaY0zr74QkYQxzynetJpbzmIg=w225-h225-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bjBuQSgvX2JqvKz_Z2uBc4u-G6jegWNRMN3vhALvSXcDXghdKF53ME0mn3MO3Rr-ZOc7Hs6SX-bg6vOnP5EqhnOBj9SblS2Xe6dikl6QkQ72qoiOIqsarjeP13zISSsMzw6mhAQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wAs8erxf_fG-HhPdgEyrByV4aN3sad55F9mpGQJHcRy8Ewry3zXJp8pDGCSeXkIdndO45fw3ER8aiO0TrVVF_y8Ge9Z3jYqxaZW75tmK78WmpwjZ2c7sjHOq9ccL8ABvJRUL5=w223-h212-v0?authuser=0)
Principio: No te repitas

#### Evitar duplicacio


#### nes


#### Crear abstraccio


#### nes


#### Cada requerimiento


#### en un único lugar

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oEPTsaugJAPDaiG7MIA_YS-ylq2JhU2qwW9RAkwxQ8rqQOnTbYCDwqamoj6_PpQlBID_b2c6p61v-OT6LoE9ZJ2b0iC604pmiddcguPEtRs-WkOPH9sn1aRqC4QQzVKy1_t6LXg=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gbM9q8Ei9dz1PZkSHntBwiljLpkqJRC5MKIckyQccFF3AeCnBn1RLtlEyWEDYbJvdxR90paaqe9t-uMTKNh-Un2SSKn4Jvf8_umKQpHes9EwqlkY5HX90Ow5FvMryAel513Cr-A=w266-h270-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OL0erPa7yiaJgrHgYwT3JEFDYqiDo0OduigqxBr_iIcbJuFQPJvCHFQbzddsKbjyFqXL_jsCOCN-IyygoPnapG6JKscH2_0N9gvHun2JR34bXvoaL8U1NBXN5H1g6iscII7MRHg=w500-h453-v0?authuser=0)
Clean code

#### Un código limpio no es un conjunto de reglas estrictas, sino un conjunto de principios para escribir código


#### que sea fácil de comprender y modificar.


#### “Comprensible” significa que cualquier desarrollador


#### experimentado puede entender el código inmediatamente.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LRI6bg4ip_WfNxwabMOPQnkvwL3KW8sFTOd5Q7KXT1n-SLuNrhIkbtZ3LLV14FTXRtbV2owV7Uni9DCncy5_E3Ce0qWsw9Z7u-KJd3M4JR6MVi3BXevJO8Wnr6iHBNWh3D_Y29Q=w262-h255-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1f4IsF3wSpzr81IdJ-y8fKusohfr2TF6xlLcAugAw_VBwl3-ZmaI6ZUdBS9SrOs0kevLsEpGvMilQbdqlit_RFrqmpPNl-WzKE6VMENLr9FWoPGvN947uU4UrJq0rGsEXbE21--Q=w1024-h993-v0?authuser=0)

## Clean Code (Código limpio)

Elegante: el código limpio debe ser agradable 
de leer. Leerlo debería hacerte sonreír.
Enfocado: cada función, cada clase, cada 
módulo expone una actitud de un solo objetivo que permanece completamente libre de distracciones y no contaminada por los detalles circundantes.
Cuidado. Alguien se ha tomado el tiempo de 
mantenerlo simple y ordenado.
Minimiza los errores que pueden ocurrir: te 
ocupaste de todos los casos que solicita tu empleador, hiciste una prueba automática que lo verifica.
No tiene duplicaciones.
Es simple.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jTsMWbWxynYybuSN-4XN6r43DgIZk6k-C9l1XJse9hUbAXH0nEm2TEnr3Z-HzPRcwxAYgsQrG2IXmwWnGvPbXGTYfqtp5sRZokTV5XuF1qIN8xWNj8F1P8ngyisXGynE03gTiBQ=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11vophKAplfG5ipg5_72pCZW_KR0zNl_UG70fhxaVr5RmYaR-GKizmBBW-MJnsg7s51r2fmG7JlfWKik2z6JlSDWeiehOPaWWasDbR8rwgefvQTOK0QaifjD8R0dYfTbCQ1E1mUw=w580-h603-v0?authuser=0)
Características de Clean Code (Código limpio)
El orden de ejecución de toda la aplicación es lógico y está claramente estructurado.
La conexión entre las diferentes partes del código es bastante obvia.
La tarea o rol de cada clase, función, método y variable es inmediatamente comprensible.
El código es fácil de modificar si se puede adaptar y ampliar. Esto también facilita la corrección de errores en el código. Por lo tanto, el código limpio es muy fácil de mantener.
El código fácilmente modificable tiene las siguientes características:
Las clases y los métodos son pequeños y solo tienen una única tarea.
Las clases y los métodos son predecibles, funcionan como se espera y están disponibles públicamente a través de API (interfaces) bien documentadas.
El código utiliza pruebas unitarias para describir su comportamiento y contrato.
El código limpio no depende del desarrollador original.
Es más fácil mantener el código porque los errores se pueden identificar y corregir más
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ljnja3hOE9OHJY_OA4cw7ML7_n14oV3M7KfD0lq3z_dB-Mpi37I1uYf9fzJ9iBCMXy1z8kDS8o-HQoGLXsWMWcTHQJ6bQ0EomlQLTqcnNjAe8or1jEelCWWXyVTLzkCGfomtFVA=w1015-h571-v0?authuser=0)
Los mantras para un código limpio
Nombres significativos: Utilice nombres que revelen la intención. Elegir buenos nombres lleva tiempo, pero 
ahorra más de lo que requiere. Debe indicar por qué existe, qué hace y cómo se utiliza. Si un nombre requiere un comentario, entonces el nombre no revela su intención (p. ej. int d; // tiempo transcurrido en días). Un nombre mejor sería: int elapsedTime.
Nombres de clase: las clases y los objetos deben tener nombres de sustantivos o frases nominales como 
Cliente, WikiPage, Cuenta y AddressParser. Evite palabras como Gerente, Procesador, Datos o Información en el nombre de una clase. Un nombre de clase no debe ser un verbo.
Nombres de método: los métodos deben tener nombres de verbos o frases verbales como postPayment, 
deletePage o save. Los descriptores de acceso, mutadores y predicados deben tener el nombre de su valor y el prefijo get, set.
Funciones definidas: La primera regla de las funciones es que deben ser pequeñas. La segunda regla de las 
funciones es que deben ser más pequeñas que eso. Deben ser cortas y solo hacer una cosa. Si su función está haciendo más de "una cosa", es un momento perfecto para extraer a otra función.
Evitar comentarios si es posible:. Si alguna parte de tu código necesita comentarios, es probable que estés 
haciendo algo mal. Nuestro código debería explicarlo todo. Los lenguajes de programación modernos son como el inglés, con el que podemos explicar fácilmente nuestro punto de vista leyéndolo en un momento. La denominación correcta puede evitar los comentarios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3p60B_JyaWwgdNXCUVWbtXoNIrqb88RrEbtSV-7a5NgsOp_LdaP_kTZsoCjNXZJ3-nLcfhBEe2ZbxO-S_56F0TNjQl0odzNwbvXlslmpXmt8JRDFluEHY3BUbhnqBWSVo2Z877bQ=w1015-h571-v0?authuser=0)
De pie sobre los hombros de gigantes
Utilice estándares de la industria y tecnologías maduras en lugar de crear nuestros propios estándares.
Existen muchos recursos que ya analizan cómo crear un código repetitivo con algunas herramientas, cómo codificar con las mejores prácticas con una herramienta específica, etc.
Le recomiendo encarecidamente que siga las convenciones, las mejores prácticas y la estandarización existentes porque no deberíamos crear ninguna solución sobre la base de dichos estándares a menos que nos brinde una ventaja competitiva.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dnG6zAqlnj0F3PVErwLgD4N7rXYBmDpa_rER1jPijPWpR8VFQ3ITg1Kj5vKP4rQszTP5WFvPsPdYQtos9LLBvCjTYLjAmUT_xBgVRnpOvHHBTka_Q1Xg7omFBjFXVbOLWJs_X=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nwXwSK8xhzrWMH0zxVcOYGbON2DZldznZwl27u7MrfZdp8O8eC0310EfCUvzw6yW3oNXR7zslf-2AA3HLEOZGedJNSpPQ6WxGv6P-lCn64hjLJfeWPMASnzWgVNZgt2M1wngB=w646-h671-v0?authuser=0)
La regla del Boy Scout
La principal razón de nuestra disminución de la
productividad a medida que pasa el tiempo es cuando tenemos que mantener o continuar el desarrollo de un proyecto que está construido con un código desordenado.
Seguramente nos ralentizará cuando tengamos que lidiar con el código desordenado de otra persona o incluso con nuestro propio código desordenado (qué vergüenza).
La “Regla del Boy Scout”, como dijo el tío Bob en su libro “Siempre deja el campamento más limpio de lo que lo encontraste”.
Por lo tanto, siempre que tengamos que desarrollar nuevas características o mantener las características existentes, siempre tenemos que agregar alguna mejora a nuestra base de código. No tiene que ser una solución importante, también podemos hacer una solución menor. Por ejemplo, renombrar variables, eliminar espacios en blanco, hacer que el código tenga la misma sangría, etc.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18qdTRCUwgPLxOUeKLvpWL9Ae8kgMF2hL1vybMI47hQh3GzqDlkIdIofBA9T67IQPLP590Gwr2uuu6Sirn0VWXBfEUE-2DywRh8jm0OCrbQ8_aMSnNA2p2KL9pD-kP49w71kSC=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3chhMZORbXO6BXoVURo2QrS_E3CpAmuApOzY0pJwyD8I5qW7DjvKdO2rNPGfec43dfeQCZ92WRQiQ05Rj4Jr5S81RYKV336_8H3mtaLcXvOs6OULaineLG8OMi8iIaaggGdV5lkw=w269-h258-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wBAtO1hmA7psG9Ja1gpcdTjImWI9KG40oKUsUPr_RUBXUpvK4N6vRhkLmVJKFe9m7axoxbl4Zt5OnsgfTwULHGC5lPuCD_7UAS_DnsrZZUS0ttMWzbZ0CuviF7Pu47Iyf3J3qtQ=w1024-h1024-v0?authuser=0)

## Hazla rápida

Después de afrontar el desafío de hacer que nuestro código sea más fácil de mantener, optimizado y legible, podemos centrarnos en hacer que nuestra aplicación sea más rápida.
Ya sea optimizar la indexación de la base de datos, agregar una estrategia de caché, etc.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1b4Ki-bwOJ7dFt4VVLhfQMI1mFQzXUiQ3WLcdu9zveVM-t7BPiXkpyiKAqVu5RhLqtCkhvBFg4O4DT5MgHt3YIyTQQe90k8Y0QXou_Ty5MfXV-nOuhxUz2kT1lSQaYtYYXBFMl=w1015-h571-v0?authuser=0)
Tips finales
Comprender que la refactorización cuesta tiempo y que es mejor equilibrar todos los principios al mismo tiempo.
No te limites a hacer YAGNI solo para la fase 1.
Usar estos principios al mismo tiempo dentro de cada iteración/hito, pero asignar el menor tiempo/cuidado a los elementos en la base de la pirámide.
De lo contrario, terminarás con una montaña de deuda técnica incluso antes de darte cuenta.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1b53mi2bmRp17F9pvLfYAGbV3TNw50VUxEX4Am3gRdFuhxWsSNYcUXvTuFwwYsuLf3LlES-5koZgokBjaNGhcdpYM9RwJUyEl4Gbx8tGZBCHUWn6zCp0dG2z04AL_4jmOrQfuGIw=w1015-h571-v0?authuser=0)
0
Principios de Empaquetamiento

#### The Release Reuse Equivalency Principle


#### (Principio de Equivalencia de Reuso de Release)

REP

#### The Common Closure Principle


#### (El principio de cierre común)

CCP

#### The Common Reuse Principle


#### (El principio de reuso común)

CRP
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11dbl5sI1B35QhPVhylTpSRXf_s1uv01RmekPLoJzkK7tp5_zLug0q9FhyT8wnNXQl6o5nNSdzA0nPHAFzMM7kVZlf0IZNNk408QM-13AzTGK_gh-VmTkR2ylwV2SYMnj2T6YnvQ=w1015-h571-v0?authuser=0)
1
Principios de Empaquetamiento

### The Release Reuse Equivalency Principle


### (Principio de Equivalencia Reuso Release)

REP

### The Common Closure Principle


### (El principio de cierre común)

CCP

### The Common Reuse Principle


### (El principio de reuso común)

CRP
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gBVxDsHN4sSHGf6hUHBI39jwwwRwqmqtXaQz58aHc-_5KQYogaf3HA0LsCeuTNBG_Bzj9-joenSUT8T1CbbKhbtHw-4oygn8myS_4Q_xlFQQlQMS8R20BJsBnj1QbyObao4L97w=w1015-h571-v0?authuser=0)
2
Principios de Empaquetamiento

### The Acyclic Dependencies Principle


### (Principio de Dependencias acíclicas)

ADP

### The Stable Dependencies Principle


### (Principio de Dependencias Estables)

SDP

### The Stable Abstractions Principle


### (Principio de Abstracciones Estables)

SAP
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BwHIFeXB_7bVPYLF9Yt23f7ZkoNz7jttc9_nwRBFUT0rYMFS1hc7fD0UF4ywU3JX7zoiB6N00lHA4Nmoc0THsr4c6HVD_evVDCcXTTWq_JtjdPxGc1temF1UpgU4gGE3AaBVu=w1015-h571-v0?authuser=0)
3
Principios de Empaquetamiento

### The Acyclic Dependencies Principle


### (Principio de Dependencias acíclicas)

ADP

### The Stable Dependencies Principle


### (Principio de Dependencias Estables)

SDP

### The Stable Abstractions Principle


### (Principio de Abstracciones Estables)

SAP
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lU_r7VvNs6KX0KXyWO2WHgLVQ2FbE9xwQKSYQqlO35SzM8Wcc357Av8TRfV0bCVxqbTeReS56LbW5_zyupM8m3CLUnJgm6qoWtS_pK07qDQFLuRcpR_ieGrXOiiqUovCVlV_tuw=w1015-h571-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tjJ9vHimFmSeYG0xTm2cJXjFlH9wwjCR5XxqcGEJGpQuNBQOMBnwQQV9sdfW_1d9K8kXDEacYGiVOVHBwa_tjnHtxK_IjjSaxPCDTrpol_5jVLGx-okh6nswCjclKB19CkOdL=w266-h270-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YSA8Q4cZ6UuFDWM510bVqOVo0wthcwlqFNAxXz70tlSsJ-1UJNLm4rb8OgE7oMgtLU0wtndX_xOm1Mj7GUoFUFW7YNxOQo18s3I1sLCxg4stNwWqSeBV1p53PASLFKs2OKm-Iyw=w1200-h1200-v0?authuser=0)
4
10 buenos principios de codificación

#### https://blog.stackademic.com/1


#### 0-good-coding-practices-24db5de47717

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ipGEhv_FL2rC9BeP9I-nOyHk7kNrbsaiNq7OxD8YjatwIuXenEeUCtZSWndBlFKlHufBBPLEon-F6xoAS4KaK5Q7aJXw0pgAXKY6Jrsq4IBPzEYKfr-20pG41g-g4XYbP2dW-xw=w259-h194-v0?authuser=0)
5
Bibliografía
Design Patterns: Elements of Reusable Object-oriented software. Gamma, Helm, 
Johnson, Vlissides
Head First Design Patterns. Freeman & 
Freeman
Head First Object-Oriented Analysis & Design. 
McLaughlin, Brett, Pollice Gary & West David.
https://medium.com/@thakurnitika/top-10-microservices-design-principles-a691df23af19
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fbC87gUU9nnDZi1WInsbLWTBzwSdSyvA-blg0fdchF6nuG0zNVVTLd8i52q6DRScyh4G73_r9WkSkv-O8AzVTBjXrCTHIbwJzCyiBDA02xSfG110u0_jgxED1XmLjG8JuUm40DA=w1015-h571-v0?authuser=0)
