# 06 Tips para el Modelado de Realizaciones de Caso - Secuencias.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este material didáctico explica las pautas fundamentales para el 
modelado de realizaciones de casos de uso y diagramas de secuencia
, enfocándose en las operaciones críticas dentro de un sistema informático. El texto detalla el procedimiento para la 
creación de objetos únicos o múltiples
, resaltando la recolección previa de atributos propios y por referencia proporcionados por el usuario o calculados por el sistema. Asimismo, describe la 
gestión y actualización de estados
, ilustrando cómo modificar el ciclo de vida de una entidad mediante transiciones, incluyendo el manejo de estados actuales y anteriores. Su propósito principal es guiar a los estudiantes en la representación gráfica correcta de la 
lógica dinámica y las interacciones
 entre objetos, pantallas y gestores en el diseño de sistemas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wDZcW6s6g6Udx05YLXhKu0JR3qVaQH_MGbuz5P4LK6hvVNYdunqLj6g37LivVy61vpHlzujkiUGFVQSQ7_RCJhFoUa8EBzHaLr83H0gx6OLV6GppfYrpL1fW96VcdR7xl_UcuWA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fLjWkL45-bCfArrVvHlipA82KT9FH449KNrCjjB014W09D7ISufMjYHbumkbn5Gxn9v21vxUH1zZPR43bDAcSkdflOhkYpzbZejkFJL0R3FAHYUc6hAvBYXKQJ-Wh6dr7FSdakg=w1280-h719-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CA5HwIRGAreL27HY3t2YQeXSF69zKu54-Gdk_2DcwwNTWHLpa3vjbm2xGXg9cSL2TQD7-0tD-nkg0y-XIQfvgkLDZTPvWvaYOe4_jc0wZijy83niDWEwUjf_He5jBoDuuJbmp9g=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3owA-VMQwLxu5-Ryb0jLnKecQuhZ7tya2kPmgUKPH6ZnYJOdFwja564NsPr8bjcCAcHXlshFDfpcAERgmOtimU2qmA85dUgBAQCIH8iQFSKRbUm-m8UAOpZbUiZTIjmvlEsPMQew=w302-h406-v0?authuser=0)
Tips para la construcción de artefactos del Modelo de Análisis

## Judith Meles

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3f9taIzFJHPZXIpgPv1U-TgXSiNfYFjYj9MTxjmK1UzMDRqUQuaF2OWOQAilWJ-5d_ZOEuK57BaQ5KUEpPFYOq6DznVba1cKN5il5aIjmhla7sukiBS5R_iPihtAYgY9pngIwpOw=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rpqMvtiXh1laiJtHO_VrJ9lktpcAM_ninEtsDnQgzeHPfRqbfrSxfa6F5cMecXU80KcgRPDR9sWzefq5176Y3A3OPmku107oj7Rgua165H_xalDmrvtNNHOVkdzP32cULU6Fu=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jPjuUob9S7e46y8Y9MYCkQZhzIpC7uX2qWkCXPwOlibl2Rmi4TEPVdMJF5RJhI5SMIVIdQSbwOIkH6-f6-BnosAuZV8WqjSribOtiiyvgq9ITzyXRSMPuZ2M_VhjQhPUNZ9FzUg=w1280-h913-v0?authuser=0)
Creación de Objetos: Creación de un objeto
Vemos la estructura para analizarla e identificar el objeto a crear.
Objeto de la clase SolicitudDeRequerimiento

### ✔ Tiene atributos por valor (propios)

✔ Que el actor ingresa (descripción)
✔ Que asigna el sistema (fechaCreacion/número)

### ✔ Tiene atributos por referencia


#### ✔Que el actor elige (ProductoSW/TipoSR)


#### ✔Que asigna el sistema (Estado)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OvGAztgRnR5oWZ7pCvyZ_ifoIeEIwiwIZ0QOsVKq_bl99kjx3YyqEba5IRiHiLgEACVFPt8ggneN9IBhU_n1tBuNpZWm0cFSSeO9u3ZLPk41vlBz9p9NxdtieaLZgPVMYZXQG=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fPpuGmKuHy9dI9-WKb14b8LV7zDw_PI6uSOxR39s5klHrk5u5T3odWfNEqAtnJRae3s0HRY_D_TwmfLQxWrWpaJQlATPGHEhoX5StItxbYgOTJOUoEQgKadAT5vaq8ex0J4YR=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36Gid0oX_65-UZ4wv3S27jhrWzn-arvhBFQiLDs0NNSRzqRWX_IazlXCv5ZnoYbZv9aHPG4-qCw81SEHJEbzHVL3JKg114qd7rvpnEJKFjCfttM1gR7d68SHbhjMGxt6qWEbYZ2Q=w1280-h1037-v0?authuser=0)
Creación de Objetos: Creación de un objeto

#### En la dinámica simplificada, el Gestor se encarga primero de:


#### 1. Obtener los atributos que necesita


#### ✔Atributos por valor:


#### ✔Que ingresa el actor ✔Que obtiene el sistema


#### (Gestor)


#### ✔Atributos por referencia:


#### ✔Que el actor selecciona (ProductoSW/TipoSR)


#### ✔ Predefinidos en el sistema (Estado); en el caso de la creación no hay estado anterior.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k-IPHiweonmgYd_SqLegTohhLa97DqVoov2Sl0-y5YV6EbFrgLinmIfQ-2T2NltSCzEQxl0gJWMWNc5KGCST8iPoLKH13gWv2pmu-SmWHTGX9xX0cXccUYXWUYpC8W60H_xWlQg=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DyyUAj_mOG4mpO9XcUxq8pZGkIt7Sm0FK0X6THavW3vD80iFrMASRqzM_Gk6YjDIsel8E4C26vNmWqevXeEIKd43LASe5nSCwaLvp5mBRDpyB8noN-ACDRq0frVfPRcCUOhnF4A=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13rHZokzbVI5SRTpUMyjJi9Kyw_esaXtRgZFcEcMWRNuaMuegZt52w3pEJ47CzCYUeq6qjbG-v7TU0HJvhHh4W_Pmz7gVaaFKuqlOO0rkQfOVDQVbE5_GIqn_sprr97vOjrcGo_A=w85-h85-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ND6FhJf-zOQEC_3rGRwGdzSNHlivJmJxfdtBBIWrUkHcNXj6cx1EgyRyEmeMvlGDtDCdY_zGo7T4q3KO-FvOOubiSbHLIcNNwd-jkLfSbGeJQSMnOcWCIOz9Zdzl3o6sNQJQrFw=w85-h85-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HQC6KZEOBjv5gHNrgZuKUL7OrdGJQCy8qjURdzZAqBRFe-0i5h2BcAMu6lT1DrdJSgVxbbAnqGSxLOwIGhLDgVZzvPGscPcCLlJJGtXnfP6_GUgb5Tj4-xBTtdiCKWkUC5RO0dA=w85-h85-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0g_8PrF3S0jD8w64F5vIFF_s0C6M9BT_vfFwWI1nU4-Mf_nT6I1fbGmKlRjvvt9rf4BXMTHQ21XdsjcNinhP5IfZnCo9ilxU4MRPi7f4KkwS8LhmSVsNxQmJTQpF892o_eaU_6=w85-h85-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05NNPODx10asXQoYsDS4thv5ygtNIe4XHG3jpVOXADQ8jZ2wzslf8XckBA8YsYoeVVjjvoItkbqa6cNKfgpXgg7r3S9F-nxBV8-6TqZ74HlhGUCQ71pRiUFrAK44jjMUSbkGSz8Q=w85-h85-v0?authuser=0)
¿Qué vimos …?

#### Búsqueda de todos los objetos de una clase para pedir que el actor seleccione uno.


#### Búsqueda de un objeto con un criterio.


#### Obtención de fecha actual


#### Obtención del último número para asignar el siguiente al momento de creación del nuevo objeto


#### Creación de un objeto luego de tener todos los atributos (propios y por referencia) que necesitamos para crearlo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ynkPNg64ATH6Ms62lExWCEeFYzp2Bf_H__J-coN-QRSIRzQXZMMwlVC6oRa_-LxTVcSFB_fZynSGVBMAsXwpIrhsXEdFmHThiZYJY91xhCmpCLWzfuu_-IsCXQAP0bcIPsQoZvQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WZ7Bo-e_5TRl2KpSgdMWrkQi2HX4wj9P9LCWZZUcXkb7Vm6gZ_PawAhz86eUPARE40WfYKmZQb15RVadcVuU4CI0Z5pwDTXQKtNYWSmwZQWI6g7bQxFQX4y59MeYnQHSPodQF=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hazhaHZA5GH0PlMiSBN4YprJbVRP52YkG_jsSoqNTUp3BLTo9a8Bpio9TPqHCezdd7RDQl_koSD0tXUgXL9Z6kAOrQfI72ccKEgX19OND1Zu1aIn69mx2DGptxG46UQHGfQWacw=w1280-h685-v0?authuser=0)
Creación que implica crear objetos de más de una clase
Vemos la estructura para analizarla e

## identificar los objetos a crear.

1 objeto de la clase Festival y al menos 1

## objetos de la clase DiaFestival.

Resto de las referencias tienen

## multiplicidad 0..*., no se las tiene en


## cuenta en la creación.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19kvrItExmhTNmGJaN5kBab9ajseaSP0RX4XJ1fIhFAcGGLRRF_yrnCK9JTU8qcKW0w32hA5G4utgkCt7Lxmmk6H1CObmkZb2Tzum2KQgKeWPRaykTg8vSmZGg6mI7GQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2waMgxm47mMlltyERQH4GmU_em30_Q0cJUEXCtZ2qt5Xc4UgGVcZJVVPePN8DZBzVKeFfZrqdNOCIefLM8vmMWWUCwoR461VRinAGOd7vT33_mu2Ka5oGQS4x5gRqfm5qfnXDF=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0me_Xd4QiY9zMXZEeflta0yhSCIGeIMinLDTsVua27YZlvGL4wyvqmnD9fhtrL6jZ5e1uoixlqwDgpvooxkYYerobIzzsZH1Mt7xXCvw8-19qFF82SZHjDiAI4TA7evhEp1v2bCA=w481-h614-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nca9sJnHoCL6ZGCyoFTfHh_KLBrtFoOYLCjX9Edc0RY-fuMI7vRYtkmxWymCsgewG8oiIvp4CEczuWbFFFjK6ELpAmRFVjxO1M2ZrPdPl-rUSGOYNZBN2hiE33lrX0m46ABHkqQ=w1169-h1280-v0?authuser=0)

## Creación que implica crear objetos de más de una clase

En la dinámica el Gestor se encarga primero de:
1. Obtener los atributos que necesitan para el todo y para las partes.
✔ Atributos por valor: los ingresa el actor
✔ Validar la existencia previa
2. Crear el objeto “Todo”
3. Delegar al objeto “Todo” la responsabilidad de creación de los objetos que agrega/contiene/conoce
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22FtRY18ry0H7ORuehKXllZPvIYXkBl-4rX9ulgVSh808diUzNc4aIgK-b_hbpfirjo3H4FkFnNwOHbP6rieINSVb1gzo8I91KgMVLzo2Y8UFK2g-67WYMCqZDGpmnpc9Xf5-dIQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-v1jQLK5cKuBmC_RUaKk2TZMl1u3t_K14o9NEXhGf49BBfv4-8BG7HnRtsjSX1p62gddh110oGoi07YUUK5XpdAv0oBt8ybFaLCVYJZj8Xf7bQViYbrvv2t1k5jds62vS8U8oyA=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rrLnoyzAX-S5nJ8DE7QOWOpph44c8JC6Q86-50-FjpgsSvV2ktthXe4nu42qA-0jroeEPtp_uA5yq5gcLif0kJRh84FqxCvju-hXyL45nio2qRj_zS3rAJ-Ny1ZE8GZRURdAWGA=w71-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rnWiYeFq5uAHDk34BD5QYaxFNSefjA3I94b-vhEN8IrTB5IFa7LR_64hvG2PPV4ZBZK-EBQLnzy-eY7ZeH9Q4rRv_byD-saFysLyClu2Kvi725Lpc8BGvpK5xPRQ9mKmz2COq=w71-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cIE_fyiFXt34GQEOnMgL22011aEqYA3vLaopHObYUtu_vnH8k6MhQfvLHRXJoreaOcrlDO37llBY7Wys5vytoLYZ_HQkwKp4gkHtpGgGdXiKzZFjoAJsVlkprY34jPn0beTE2Bg=w71-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yMdp5cgVvqu-6IKZ5DX5rjtqog9zJ6Q47WLBvwQKAUgz3JvqoJ58vocgqFPuxPrNereOg7ivJICA57WO0ZqrL1l_Y0bH8ssu7clH0YUQHJiD1P3uaNJjzcqiKUY-EVWJj9_fFzA=w71-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iw0GAvq2DzjgQTCSR2seITfnqzAgw3k2sTMnHBpQ4KFQieFYx2H_Wo7VQkGFFrtTesfuB3SuzSbijyQuf0G3IaVj64hm0n00S1lj1gNOlhgQ6HmoPqthyXsKwQ4_i9-c-eUEC=w71-h71-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qGtkJXHaS-rI2gJ42SMIXtdQPHer7w4MyZ9-O1xv0OftjKun2OzwNiQN7lucvJlJUwGZO5sT9g7qCQFSAB5oqUDweKt6dxwi-vNncw5CzfbQU98E3COgZLRtUKHCGFLL4I0J__w=w71-h71-v0?authuser=0)
¿Qué vimos hasta acá…?

#### Búsqueda de todos los objetos de una clase para pedir que el actor seleccione uno.


#### Búsqueda de un objeto con un criterio.


#### Obtención de fecha actual


#### Obtención del último número para asignar el siguiente al momento de creación del nuevo objeto


#### Creación de un objeto luego de tener todos los atributos (propios y por referencia) que necesitamos para crearlo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3FXeUSfuyOYV7VDEjMZhyNi86lDUvIh_gUnMOSlX1EElpt2-N8heWGo4Sf4RIPtyQgiWFFCbkN_CdgeIm9Q1eUUjxg5E9H_o2ZZDAl_q6-v3aK7JdXjqBzAz1V_RjWiXu7Gm8hFA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dBwuWE4vDQSxF_cQluhZU4knrRtvQJ2Oz70vfy-jWknMFZMwtQ3BoxxsSKK0ofgMTw4smWFJyJUY5wwJ7Y__6bChh4uMSNsy7QweNE6h-87EomBU-doNKkqNdPkWO_G5Nzkf4fg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KVz_E4cABYUEHlywi_p1DZrlhdDOGAlTZGsgnXqvfqYvgAcGlqBHXtSSjrCgehD84qofVjWhpE8BSRGz3skLyL7oB3LMfQGOfO_Qctf4dMRXeJnxk7hhdWAAGwd_Qa5dROSM-5Q=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-48XoaZPRViLrLz3c8Oh_mlA5b898UD1bElP3vGhhwlfdO2nOEUF2lrbAFah4b0X69BKpsyHavu8HGX44wdu9UUMxa6lyhQFIGD1qt4HKEfxYc9VmRGVYRutT8ofN3fhdhShe=w1280-h661-v0?authuser=0)

## Creación de objetos de más de una clase: Objeto con su cambio de estado

Vemos la estructura para analizarla e identificar el objeto a crear.
Objeto de la clase SolicitudDeRequerimiento y Objeto de la clase CambioEstadoSR
✔ Tiene atributos por valor (propios)
✔ Que asigna el sistema (FechaHoraInicio)
✔ Tiene atributos por referencia
✔ Que el actor elige (ProductoSW/TipoSR)
✔ Que asigna el sistema (Estado/Responsable)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UyK_7uXgyXHWV-2Uqoq4X7GS8lWCiuuBGCQrExQaG0wa37_yxtjh8T3AwJl0yIrjxm8J84HXlRIfAKclteoT0qayhGgP9fLHyUWs3rAT-vNiPGvp0KSgbFqZFWdjqtg9VIfHvHA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-22GVXHQ55n3VksQMPNP_yi7XoFdn2rFIm09mph0h75sMWwhtMJWr5caN9-2GkEFu-HC0awTfu_Oz8sgoI63YlexGA2LRTwvQtQSh2XTnqDaQJIzN6B9uxmrtKVreHQg-vgzN_Q=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NQF2xIqIbojXLUTa8zeHx03wLkuQFTA2j43X5szJN_FnSJkgmfqL_fhCB6BoUltMVKyiPk3T_SpJYZMinYfn0yOolw7CyW6u7iM0rBa7hsPFQKFjDoSqF_VOP4LJkTVr5Ntvpdw=w1127-h1280-v0?authuser=0)

### Creación de objetos de más de una clase: Objeto con su cambio de estado

En la dinámica simplificada, el Gestor se encarga primero de:
1. Obtener los atributos que necesita
✔ Atributos por valor: los ingresa el actor
✔ Atributos que selecciona el actor
2. Gestor obtiene los atributos que necesita Estado/FechaHoraInicio/ Responsable.
3. Gestor crea la SR y le delega a esta la responsabilidad de crear su cambio de estado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34IZwgc2IsIeBux6xDPtWxZJfiG3LdrELeUq33VhMDWVjMPqIcukTydX2PmJ15DGgQgPybUTqfDdA_AdZeBudX4iAKxWYWPPXfv5YzE52zgTqnJh7YSM0S5f161vcCizxVLfK-2A=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wDXVuhPPCxaCJ6U4tE8nndTuRMWz0dL5nsL4ddRiLTS9sjR7CE5D1Vs66qVY96seOW67qrEDLRzX8xJjIDq_jzVR09siYwxFBeOH2nn7epg_QKYVkpiO1km8hFwaGfJ8J0HBq=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nAeI9kExWOYpK2YKU6wDCc86fXdUc08q2q_QhRQWd91QltcMapuO-blUzM3IdZmbNKm7tE-z2iDxy_qe2-OTYmWfjxvTRKLUS9mv0pxPRuk-9EYrripc5_w_UY4Z11oUYmdXMpA=w75-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fFfoTAzsIFD6ZqIQPLDx_ln92slLgpUJdCoxNsyHHDwBrghsjI9qaEIrGaFSB85onGj5rjdETxPeVXsFUfi5mpzc_2drFGfnIIlcOkiKrQdCq3a0u5RnThs84Hg6JslBOm2ig1A=w75-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mmRzWB3pkP8jxyMFCTXPA1-045PLOKz6UxpgqDeHecymePjSZ07po-ChdvMzk4RRlpbHOCNVkAnb0Yd8MFOko9SSg-NGOnE9LKq-JkiyhAYe5yS1JKqHi1yTvpMkr2rTVDp177w=w75-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aslWs9Maqfbs8AYiCu1MFPkdr_5BA4Pe3ERAv7zJNxZ7udz6AkZk88UiJYN_UV3ZyypwXqSRnCYFzVbT47KPFCOablWfTnSopPQHuND7VGU37WpeRFyjlkGI1Hd_wcpyuL_IjUg=w75-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jyzVJ_m0kBabMDNMsz30J5bsNVYAeRCv8570X90o3gJLyrOJCNn_LETk5JZFWPm8Q7X6G4f0lfETNPu4xRTEWplRtndEn9x5WqtkXfXTsS8GlihXwSKerWhkap82g-qeicyUlVg=w75-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10ROiayAbeGFW2p56C8JLor3n2VjZ-3M6xn1s_99F5Q4Nl7CgbdU2p_o2iajenV-1J_DSMQT6vbctDzINVXpxbTQ2wOVLrcjb5hcXuOS_PYKn-I4CEcuVGCWtKJAOiUaQRj9IRIg=w75-h75-v0?authuser=0)
¿Qué vimos …?

#### Búsqueda de todos los objetos de una clase para pedir que el actor seleccione


#### Obtención de fecha actual


#### Obtención del usuario de la sesión


#### Creación de un objeto luego de tener todos los atributos (propios y por referencia) que necesitamos para crearlo.


#### Creación de objetos de más de una clase (cuando hay una estructura tipo Todo-Parte)


#### Creación de objetos de más de una clase cuando el objeto crea su cambio de estado.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Er7bCvv1HNNE7q9lbWyh3TcdNYihFmd7l6aSvfX89a86A_ZQvQcqL-RJbCUxDd8uWPoiLzGfaGngbtmCEg7Od64QIy1i8eRguIQfB7ucukFUG7xLjpDFJ1zaTVXEh2XAYA0bnEw=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oFa7I7TsZRMQzLnpy1z7EtmLFAqzRWUsyYqmI1RJLSQgiQOvnXJO6vWeaL2XnOUVw83emVZJw5RAPAni3AepncOVdGHsJAySkojjDKVriP_SHerMxYFnHXf73x3CmoQGABdGT=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UKncObtv9u1zyqzaEM4TcfEut9RmlTIFaPBGEhQ4D8gRKsWnH0bnf7CzTzQM8UFqRwSyEy6WRkWHyV8MCOhp9HX3Rp1C0uB6X9Tj3xAQCOKDYQVN0GoUuERQSCgxnBpZBPWYI_w=w474-h507-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nRjaSMd6ZIPFbC6iPCFrNE1qzXR6EwnmTUYewDwAz58IWe-sne_iRrIF9hfVYbO725FGekBXSpHDqADgoZW3UTqo5tG504PltqwwcoXYbCtyOSt6goZEBZKMNxoQPjW4PVxfy=w837-h550-v0?authuser=0)
Modificación de objetos:
Modificación de atributos propios de un Objeto
Vemos la estructura para

#### analizarla e identificar el objeto a


#### modificar.

Objeto de la clase Producto
Vamos a modificar el precio

#### del producto cuyo código es


#### “3d4f6789”

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lExQsBAtHdW84llNzzOKnUuAITEfCzevuYyxi5_twX897mNGMiSHHUmylhC2WAz_LKtCe0ulFSKIQj4AIj8dhbPEdeGukzKiw8JzW8PIQxkYYonyto-r3cNrszKLFzs8QvUXcxQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nJKVEENAGc6VM-IvP7w4fiqcONySSV66xjTVYJ2hyw33aotBedYMbEDQnzpJEvSV2j5Wk9I82zUXYZeeEf1d4dxYNn91AbA1440hQeQKef9Zyv_qd58Tv6QyalcVvmmLqxBUdoA=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0B4OjYuzY1q-qdfC2xzxrS3C-_NpkT8vCs_u9GJUmfn1iI2IO5CdZIXMWh7V0P5lLVIUHD2RWqeT5zdiYhBtG67NPObu4LibVHs_mTce5Zh5KQ9A7aaKXeYc5udcoHf8oktqqQ=w641-h511-v0?authuser=0)

### Modificación de objetos:


### Modificación de atributos propios de un Objeto

En la dinámica simplificada primero:
Se ingresa el código para buscar el

#### producto

Gestor busca el producto muestra sus

#### datos.

Se ingresa el nuevo precio
Gestor invoca el método de seteo del

#### atributo precio, actualizando el valor.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CA_kVE2HSS235kyq2NE_C7JcApLbBIZ2j0qH3NBhe9KkVGoOgDmiNjzTD1z37QvSrZc_esMinpsWnVaq6889Mi_9Qwp7Zo-BQNuF3ZLtexilZCjFO3gEslGnEgbWs8LSnW6LVPg=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3h2SmnUaLfEEMeVpzss65HC1inNsltVjV5BHcQj3t5TxNs0fn5V9L6oDRITVoRH7hNdftjNecNJk5cKYjZMm1UtoOzI8Vn0AwxueJYlLyTQn1X7dVEwC2mI7Yxqk0eJMXteWty=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vI_55IFrqBatGddur5k4918vevA4F1TvsnJ9IHUGa_6YSrH6cuie7JAXJAWlIjCHY7ZOI4yrb9FSS5-gt_u9BFVfADFe8YD8N_wvznwpKW_scLaO9W1mwRMx-5pSAToGUpWWTPw=w837-h550-v0?authuser=0)
Modificación de objetos:
Modificación de atributos propios para todos los objetos de la clase.
Vemos la estructura para analizarla

## e identificar los objetos a modificar.

Todos los objetos de la clase

## Producto tienen un incremento del


## 10%.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OjNRniT02a2YWfZsBJlQ7uO2Xe9ipPYwr_XO0tKWfnX6iZQumnQEd1FoSrB5zobeZKeaXLfvbAyg1r5xJJJG6H6ofJ90cOiQZfYuQeMv9HZWGfMOfRydLg_a-FcRL7chaN22ReQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1L2fVxYYq-IR8Vrswrp5mtpURcQyt8nfvEGJwP8nFqjdmY-QjKYIs-ubaUxnal8K8qSlCwjZPxXFm9GvAUfOeAAWqdYGKfacN64_ZMtCL_XqrDmMvmGiYgS6PhTu2ZFNYRyzj2wg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yUSGprBECsWyE88zSFcTEJVbE2i8pGlEmSmuZUahBXmf72LfzheO1HMm_oeYkldkF5DB81FSCJZfG3t8ia_GELPSNKApp2Yi4S_UkAUKqvsgL02_CZGMUu01UZTmrxIDk1eYFVg=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22dzKCB8R6bs4AthdqaYzkruO8_DBSgxyEc1b2NYUs_lA3F37xSQ6HpzRt2kibcSEPEAiAhjAATAdG6C6AkWQD-anVpFk0FyV3HkMfJ0VE_ZXktKlgP4zbtA1GABYX7iVrGLOAnQ=w825-h538-v0?authuser=0)

## Modificación de objetos:


## Modificación de atributos propios para todos los objetos de la clase.

En la dinámica simplificada primero:
Se ingresa el % de aumento
Gestor con su método incrementarPrecio() invoca el método calcularIncremento() de todos los objetos producto de la clase.
Luego cada objeto producto se setea su nuevo precio calculado
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OmLckEcHxGYb9wVHR0wo1IdiPWOjU32RZXYvUqdN2rgsfAvlMLE8kcirfNlnErU2IiRaIFZIkcFqqRIKIKPgXlgbCHKIRrWP7CaSehvcxdddP22NRwSefALBP_2-1xWK7xURJ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hhLeOAi7ZH69dSp5UQPme2bTMY31D2jaS3hmfdu_vVcqul0S38RjiVdo3PmBGKK2hikNTTphkuNL3yiiskvZ0bdzh2Cuukb2XaIZagCBPkONs11RtbXGi8ANZvtGSNqB9g6uB=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GlpBNSFjz7MbJ5nCfcASo8z2QrZAaObSontRypFgod3SjtyXRfn6TZ64riIfQ3u7HAkiIQGpuWyvyE6SfNZOOrFhfc8z-cKi5USQu4qe-KBKYunvwnbx2Q6twT79AHbO9VGlfFw=w837-h550-v0?authuser=0)
Modificación de objetos:
Modificación de atributos propios para todos los objetos que cumplen un criterio
Vemos la estructura para analizarla

## e identificar los objetos a modificar.

Objetos de la clase Producto que

## tengan la marca “Sancor”, le vamos


## a incrementar el precio en un


## porcentaje.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LgqMN5THIFumdnMKq3edgY8cFJpDmVmt3_kMXUx_nhXwo7MAbMzmuTAfm0odYGtTi1DppvKDQex5iSm25gp8-A9E6atj7ZgEgqzsn2cHK3MkE3OEtBUV4C6WrH_YVFJ9lNxQ4Uw=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DXyIGKxO2KdHa_Va7KYzpZJR-ZzCPsVRWxCALnQX1sQdDMAA2e_QLTJXkF_0lZ4-jSPdns7q4VJtf36XUPPbYEnVkFKoiqOmQ0CHTWSCImFnbwOSh0vnh7fwWNjAhTzOpY51obw=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jty2GoUKjb6iDaPMizH6M8Mi84lT3NKzo1eYXuKNns5Op1LKg-9kweTBK-pSb-YR7-qnb4rZavqf1cUVXA3OPaMu4zO-fbNuPvGwCF6rbt55MM0WYiL2zIb9n88Qrbs-1Q4Qe8A=w955-h725-v0?authuser=0)

## Modificación de objetos: Modificación de atributos propios para todos los objetos que cumplen un criterio

En la dinámica simplificada primero:
Se selecciona la marca
Gestor busca todos los productos de esa marca, hacienda una validación con atributos de referencia.
Se ingresa el % de incremento.
Gestor invoca el método calcularIncremento() de los objetos producto de esa marca
Luego cada objeto producto se setea su nuevo precio calculado
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hG2csACdxwa4HvKeXl0blMcTHer9QaBPqqODUB2LRW-PTsXeE_D3ViDgQGsgqKvJP54KMTuVtc2hh5oJyQKdZ3g__y9z0tfpm9PP6BAnCDTfHeIQORj5Jh_2z1KGTHzWPoRbbqw=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p9uEyBxAxVyhOEbc-98Qf0Hx87-Lz79hprOhGVVmF00OarYejLQQ7KP-L08WfsxR538Y76u-ADUc5HUuAidehWdrRLOGhVGrUz5lXPFuoWXkINPPnExcf3NkTtPZGyzaDR17oeA=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yOAFN4m9cAcK8H3nh1OHDg3HoH_ui8ZMtRTB-gfDLKdzw37FYPjO-IujwRi-cdP2jke_yFArTJzartkC98WA05l3s5tlKKe87-xZLMtayMc_nfObCd3nWR1mhsb4UKmTigsSS=w837-h550-v0?authuser=0)
Modificación de objetos:
Modificación de un atributo de referencia para todos los objetos que cumplen un criterio
Vemos la estructura para analizarla

## e identificar los objetos a modificar.

Objetos de la clase Producto que

## tengan la marca “Sancor”, los


## vamos a cambiar de sector.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2tIGV9UqznIfMPQuQIRjgdCj95xB37Ise53FeWW1o_b86go-iW3MgY2YWLE2NgfyzOlooKI4oU85Q9vtfZLdH1nOfgOCNH0l0FkL2pNwS0H1oz1ErVPH5jHipvmd1Byc1yVPir=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1in58cV4I4hmzhmpmdqCVd-0iGlEqwYfAQ54QaUR2E1gKQR4fWIKTTMlIwi93odlCZl38yGRuGVM8pRR1YcoGTzOm72nMf8M1ThRP3zlVHglnP3uc0-YJoByYcJ8wLg9bOEpLCWw=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-is45ygRI2AyLCmB6SONd48NufDTKRpPnqo8qsqrfFCafL7tWN6f0vbIc2w_7P85WfIMXjoB2m815NFyeVWACFaBRA-Qadzc0ndscwro2aQydpQiL8gRpwOBu6Vc0mVnP-6JXQQ=w709-h545-v0?authuser=0)

## Modificación de objetos: Modificación de un atributo de referencia para todos los objetos que cumplen un criterio

En la dinámica simplificada, primero:
Gestor busca todos los sectores y los

### muestra.

Se selecciona sector destino para los

### productos.

Gestor busca los objetos producto de esa

### marca

Luego asigna el sector elegido a los objetos

### de la marca.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0G7Qvtv7tJ04SOFn_wl6AokUWD5mr3FFNaKSWXGA9kc6eaurempTWtbLkW1z_vQBFZLLa5-QhGv27JtoUiGrIFwyvPTddaH2uqboFT9oC3DB8NJYgNubg61cm2olbBcYYJlhbT0g=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oP9Qs0diSbKPeGiCL26YwOy6WyKe_hbO_pe5ekkUwkRAjlv6Ui_Qmsrc1CAPhty4_g0XMYa5-jPZMgpbJ4glzL3NtSSJQnQrDlpT2q3TDaCHG_Htxv5L_JTTHkLW5L3riw7Ds0w=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XvIKE64II7EAJ-hgVHBnQYgZ_o6QA1S7bM3ohrIEHWqph54wnqCmRAexB6Rgzl_PZbsaAHTIsGX9ND-AmatjA3cGatMdvX7zDNQ2t0H21o4lH1em8-Zamo9N9UQg_Tcq2YXVGnQ=w169-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VPR_FwBKdfl67GTa5e2SJRfJyOgINCNJfxjhLra33e7Cy4LURm3n1QpdIa5WPK5SdyEZ9O9035vdpa9lZGn0CZLJbGsB77YIA8JL5sPpVI4RqKFT7u09LhD5kX_l4nbuhM72hvw=w169-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Hz4txLniKBX1KBKi2xbbz57Gau5Jr34uGbzst4CeIP1eN8taLGAw8W-R2WOPkyUkgCccLWsb1q-yf2LSHn8VZbz87WrGqmW89OIPpm5Es5g3-4QLmhd50WX6exKge47Y3tE-rtQ=w169-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1I3VmMq5iLe9VqfDvZNJs-ihOiFn4QNpFERnOv_QBfKzKCYn987cqRr-IGwdQHzLtViM5z9Oj8-BO_5Ve-xo2x5LLi-mocHoB7mok2vZHbZhznoGAsFZn0wVlqdz8e2aN6vQqG5w=w169-h169-v0?authuser=0)
¿Qué vimos…?

### Modificación de atributos propios de un objeto


### Modificación de atributos propios para todos los objetos que cumplen un criterio


### Modificación de atributos propios para todos los objetos de la clase.


### Modificación de un atributo de referencia para todos los objetos que cumplen un criterio

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zmkgCDxGIfvivgnssGFNpKoapkCdjE-DEsXI3Tbaqj5pkuB1qLrfFft84__boA6BTFtn5jii8AaZ9bKscDTNyg8iOrjz48TOIyA0FXjVLW2sk-T1LyrI1HQCOG611zrjFzWpeDg=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23A6AEsRfZiaqcNSbyeJNLizyFfPzbqg6cu7NxJPVOeePRKXRVanhD6e1VU_b74myc2cGhXZUOtRmsBdY39AGrjfiUMFlKUq9LtX1a6YsgDIhuDPZi8oABsoxlbln1kR_sz6RpQQ=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12Gh8Y0Iu0NuprVUcMpIfsvpkzWXD-SzolZzvBySF5UkpzP5ZAjY82XuXlluGdq7c8Jw1jQR253LQF92II_tiEGsJoJa2_IvfOfNNMSJZ3nYQXo6-ef3sXNNDR2ZfNqTiX3bIxgw=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25952dxJJ1ZFdpyIfiA5SmMlzxirxAXZDH_EiX3W9GuhFpNICqSiRIA5Fc1b3JOtCqCLtGAjP_2AUifQCq-bHHO6Pk1pSU4EM0HDxangJtawjl19v1lcgaGBt3mUG-bLjUqMeYew=w768-h656-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rHbE_LwC_WXz14vEz1lRhQuzcLC5vfHOQixu_ja9Lk-E_wwdx2kIjzkDp2QVmxa1CGzopAAt-LSmoKZgiAWwR6zI-JoMa5fo8liER-SXsK-A0BnVY5nXT6Rk9XWpH3cuSPrnt=w783-h693-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Tfq58_n0hf9ChQ5R-7oirJeV76KplAdc0UReELmwJbcZpWY0dSL_jUWwdsAn2ZvJcZooI_xGZ9RzEjI2pdFUZ8xbCq2Ha8cBiLcFQAkbKUYEglPlTH11xPRJ3sMUlvL7awZMYEA=w783-h667-v0?authuser=0)

## Manejo de Estados: Actualizar el estado de un objeto

Por ejemplo: Queremos cancelar un pedido y por

### consiguiente cancelar sus detalles de pedido.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AtK-nDcMqvHdF1jMBjX9xZzGQYYHhN-1Vx3xaICVNMtBWpRSRnfJlYAO_cSq3GlVk_gBmHgrOSENjHX55XezZylLtOaLZM_b1dFZhoT4PsGq333pgQcefZNasc596gwba6UVJ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1s2auXUAldCujhFayyGY2wvrYKiVnT648ZlIXQRP_DGEaTfU9BRGOGRrb_TaqiBTzJsUHvRwa3X3Y6UrNzbc_Ms5Q3J_9ggXjNUvI2_RMFdmv6MHUBe0BHlLczDJTMDEcOHj3F=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ItBwt9F6XvFdlnYxPaPlQ-iulcab8iUXN1aKLtmLQc4SnC056dOr_2DOcODSM1Ol-yNNExoFlX7WfHWnSkxzvsPk8WR5AXYo1zgYt7hMtM-Syq1jqoQXK-cFcOSnZBo1V8EzqcQ=w1100-h680-v0?authuser=0)

## Manejo de Estados: Actualizar el estado de un objeto

En la dinámica simplificada, el GestorPedido

#### busca el estado que necesita asignar al


#### pedido y sus detalles; en este caso el estado


#### “cancelado”.

Se usa el método modelado en la transición

#### de correspondiente de la máquina de


#### estados, en este caso “cancelar()” con la


#### referencia al objeto cancelado como


#### parámetro del método.

Luego el pedido cancela del mismo modo sus

#### detalles de pedido.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv387xlBR_SQwVSdocHOEnbtYiprD4d7mrSlHkZsr5ijQphKZUHH0Z-JASiuh-B64gnkPSEIkM112nliXbTpj_S5tnyloTnZrOFC9-ekhwp8eLYa39kMi85ZI4HRADCVgJu_GA_Q4w=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ggzqJIyJtOWEXvRTuuacBOIkp2sCQbJWa-r48jYm3yjkOhuQ4m5cJnYjlrO-0g-gltm0wgLdH9Ez1lCffXBe9ZmH80y507ln6DeBHbcMR8iSwcH4L1QAawrFfuOXYUCQfh6phXA=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hS7cQNJlq7TYBRsTG0DwCMXgAbH-N09wIC9D6BFg0exjf9kdMstX6okc5If5adrDeqRMiBngKC6iS1nfWg5Iqwv5YD2Qe0-Jun0e_sMIeQW3Pjeb96N4aUwwTAiUSF2N3ksi7Ew=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xaYNv42ihIfBGJIuFAv0YNOXgu2iMTmNffkWb94J51u40woxFNyL0xZBD8yShRL-Qn4Y_m8wcSCuwPwH4uU213m5Zshd0EEvEo8bLyNzUpdXFlamOC5-q-r4B-47SXfW7K2LlCQ=w1280-h931-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hykPLHGfhSCqJMszub1UigHO1HHrgBru7ZPwRhzAPNpKLWH51EScw0yxkjdZEvQEE9cx4K0M4CL1JOykcJdM6Q9EdW6_7aSRtx1qj7qul1sPkhM93VEK3QP0CvEg-OrWK0UwHow=w1280-h869-v0?authuser=0)

## Manejo de Estados: Actualizar estado cuando hay estado actual y anterior

Por ejemplo: Queremos cambiar el

## estado de la solicitud elegida de


## EnAnálisis a Suspendida.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3j3EKf09WnY87CWOrKt6JqweoVyVclqNH-UiVm1rhvZCgSrxe89d0j9354qJLFsH7Cl6uOA-t9D0JbpEtYOlFKIADPmAP9Rww53JFn_ia-joLaf4vL4KLqZtyUi1W5ix3zPl-Vwg=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qdccXZl6w-aLcRAJEHpTkdUzOT3b63jmzSEAe9rcY1Z-S2SFUOYIpQfUaWqBZGBbbttGu0jmO6vitfEXTCi2S31fCJ8Djj-68oN1k3orNbxiU_0wk2uIXCbhB9CWOS2jqE40D-w=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3G5da-c2qTyrH-pJcatA24NUvNrBSsS3o5cJDOwVdfm60MH1Fp0qzwt4HxiNue9lmhZqezSe4baX2Ecp97f3BEkSHu1200HD2gWy_DlWpVJ8tY4ZHz_DcNQ5Pi_WhxqVPV2OoX1g=w1280-h665-v0?authuser=0)

### Manejo de Estados: Actualizar estado cuando hay estado actual y anterior

En la dinámica simplificada, primero:
Gestor busca las SR que pueden ser suspendidas y las muestra.
Actor selecciona la SR que desea suspender.
Gestor busca el estado a asignar, en este caso “Suspendida”.
Se suspende la SR, lo que implica setear el estado anterior con el estado actual y el estado actual con “Suspendida”.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Crze4Nnk-5UlG3DXSdwWAlfqi8x1wvvb_SthVqi_icebFlETbPXHSbYwY-VZk4kdky1u3zaBcWXynn8nG7unpxHExLTqVO54XanKqZdvUIwfRKnRvv6XQEkOYMqzag85KkW_s9Q=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HJxWGHSwvQVy81R3Vx17yR2ij-6ariHDXi4oGxrsixWNL5-29fvKVzQNc9hWU_ZkWM9TTsf-6Ux9T0HXmTvyvp4zi_8QtUBpVPklT-kZaBdpwj6jfYKyGZMMQHbUlav66A_WAbg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uzMriJScfmhd-WsBaSg1EMNEVo6C_Nlptv8wThLq7xzGr7WtieK9EY0P9FhTb9xt3XOZA1IpJNrm7aGL39gvWoCgX2nSKC6AUXwcpJWB5d4iBvFQArf8TxQhuV7a8ItLqLRPpXA=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AHzEAHZjeuVGoTexMtpifhJ0S9-nyQYEA8P3DBTDiLnoK-kkQFcTX4B74GFcyTuQUp6r4f4wLeIN1vzs9PczvNTMMFiOwRo7RMZ5mPW6pqnaNvxTOtLgROKUhfUDpqxuEtbto=w1280-h931-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Eq-BAU5z_EfquznguyP4T4FIIzg8W4k5aPhCTXGqkWFraukC_22kTkwTWAXSlkyX5d5hT4NuOgWEdZ8TUVdJhMdlglsMceLrWBSgbMNRXNHHO_DOWH9PSqBLpn8rX5Q1AySyyRw=w1280-h715-v0?authuser=0)

## Manejo de Estados: Actualizar estado cuando se mantienen los cambios de estado

Por ejemplo: Queremos cambiar el estado de la solicitud

### elegida de EnAnálisis a Suspendida.

Queremos saber quién hizo el cambio de estado y

### cuándo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UtXXHhHx8nzHW91XvV10XHfbWv1yVDwmuJks_WZCJ7rZuvLZAjl1pBEf_C-CgSIRQeZNyLfz-jIV_JwTvrOtYMCrxmJJXwbm0TnuBRAFctx3vagyiOzGApKxIWU3gsN3DYDdKKQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ci71vcvZAofTMnm6xuWfh7UnthZIZLBDIM0XFmQsLBbBhWaR3UqDf4Q5O8wmhy9FGTjrZdzLiLDSXam8I2_-HL7JHZM13sBH-KhYlS9JWU-OvBJDGg8ipj7SDf9EYt96uQKeY=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22LhV3snGzf67rMXYtZ33QY_IEcU_tWzsDf4XPHSE98WWMq8Bqb70eR5iXVWF3SJvUozkA2XACNUrBJx-9t4L191MBrNE_3dIFoeguLq_ZPy2nENvYXtU-vV8evntgrK2idhAM8w=w481-h614-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25TVAvtRriZ7Qv1SuI3Ar2lPbH8xivpqNrYRmXCnHgXppfzVV-Zrq3W6HpPpHkZgbSJH7q3Q5rvZ_OIsw2gElfmzQElozdbMDt5Q_HKOMaMe9_KGTUdSMIHtpnGVxI3eOV_da4=w1280-h746-v0?authuser=0)

### Manejo de Estados: Actualizar estado cuando se mantienen los cambios de estado

En la dinámica simplificada, primero:
Gestor busca las SR que pueden ser suspendidas y las muestra.
Actor selecciona la SR que desea suspender.
Gestor busca el estado a asignar, en este caso “Suspendida”.
Gestor obtiene fecha y hora actual y obtiene el responsable desde la sesión de usuario activa, utilizando el atributo de referencia. En este caso no se requiere pedirle nada al objeto Responsable.
Gestor suspende la solicitud.
La SR busca el estado actual para cerrarlo y luego crea el nuevo cambio de estado, en este caso Suspendida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zucIIQtaPQgx9GkRXx24VgWvOpL-KEcSl5K2kqJVdYO-UhKq6N7XsKsXVIg1NoJaq3YKI5IyR-4O1nbVG4wjPOJOxtQDNhb7xUl8GejrG2qAs1YiL-HHPdX0CbWp8_N0M_sc5UA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AXIUWvHnDdfqaipt9a4tzLhBwNmg_tEPHBllzX1lJsvdHFlv_uAVyM-6eHKAi5-zlAGlxSNtwpcKd2xzpLh5mg5zMr2xRMn4y5U9jYC9D4kIoQJcSwPKslU7D_zHOA-Rnw-k2=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u6B5s-QcL7B56zkofhHeHqiB2JKmA5YbXoAQG8awEafykSxbWdIAmyrUbroLoJvrk4MoqwdMqw60J5oKyVIzta8fG9J4N5DWxKNRFlzZXYedO-auSQLvm3bKGb46H88YKspiX=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19VghHMCbjd1OeWNMbS0AEDofE9DPOsFArhvrQt-gLfwEnhdnuaKs3kgt1QA0Yk13_fX7y5rbrmxROGNr_QTdqV00ULpEatN7RWoY_MQtMk_9OmX2DGusTbCTR6eW_G5HPqhoBmQ=w1010-h965-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rd_uatKdGIfLA7AXGjriF0lzzPTzXZNaKo1cauJSki0r_eXrCM3P5SasEi_qs4GLJnfN9GqaM-HL5BtTz11uyVIEtZKVP3qXpqOoCO6EqGMJ_cFGvcmvRQjF7nsf_iLCNEX1aSA=w1280-h480-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RW_KsyZFr5UxvwXOq7tVapKdL0gdnWA0s7_PkZLkqKZGMzPMe_GcKHPc4WrPpOPeOr_kwVeqIyIpWOGX-rlFzJ-4FKHOkKv2RiLXFFFEiAxW6rsfC8S6Dy_ldjyHfyj712ZXvqA=w1280-h158-v0?authuser=0)

## ¿Cómo se modela cuando tenemos un atributo ámbito en la clase Estado?

Queremos modelar varias clases que tienen

#### comportamiento dependiente del estado utilizando una


#### sola clase Estado

Una forma es con un atributo ámbito
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VM0J55p03oN36gD0EsCZDYDHQD0Ak5n49exxNeWbnYSNXOLh5z5K5J341GgeNG4uKO0mKrpFBSBbsQBQaiGL794JHSW6bPZQ_M8VwoJrLQLMhtzLTM6KDHTJGzga2ikOwmXDQQA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OFvZKjGe62KQ6ZvPjNzug5KKTZQKi28ziKkRIlNW1k_6TmP_BuAUZlr1FEcV_G7FLU_-070fyXpoXEm_ivijY1R0nScaUgpVw6sxG6Zp_D8RfCyram2_vsu27Y81sX3Uhw76kqw=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0L-i9i0yaOb9RRtSNz9AC8YUJzZBCe1RIlNbo9YVQvg6WAWzVJDs17wOnxiKorJuilgJR6TvdTe2Hw4gtYjNh0MCG14A-o4k6DvFb3nm7nx7WUscFmRx8wDrrpCl1mQYxtsX_0=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YTjH8OyftAEbjQ9Gxw0NDXTgXBqS-5dQSI2NIxeKnceXb4f48_CHwnxn-8ijYvyebX8bAqNbnj_vntM6hnqh2GlB2zOz1ejS_EqWtlwWKx-Th9NQqQQu73nzQEdddWDHA-AugMw=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21QV7fyOugwJz-wi5doSD32P-S97nBYlSXVgwuDFfWXLa9k9gdX9w5io9NN2buvzI4fK0s3GhwrSklGzYFj0C3vTMm8NxwiRREYAPEAGF2geizde7C9cwGbRCeA2Mwr68iGIph8A=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wUXpP4u2geaoSMWNmNx4aLHePdSaVY6lJ_xDnapFoq9kIjLen766l__YFD6gQcuV2HntdxWzNYgFlPFd-N5VlAqio8l-QSfgcIoboStVr2LCs-HUR1msz9aF3Pgr0tbOxgArW0A=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Z0Lb7TsXEr3isKkXlxyU_vwCIIWD5nZRE1ybji3JQtga_hHFL5h4D2CkkPATPExodUKI-MpcaUQ3Z2Tio188GV6WrMfjio2eJ75DHpT3NntpbcrC5rodEishFlKYZUWZdqB2A-g=w95-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0US9QrdtZZ3eRLvNVUNUjAG3jfufGhFZw3tasb7LlcPr63weFudTGlfObGuh9QfltspRJqNC2PtiCfEkihUw0bkgk-wedP6sdmJTBMOFpwZbr0NGIS6TErorQBdjD-MBvDlMg6=w95-h95-v0?authuser=0)
¿Qué vimos…?

#### Manejo de Estados: Actualizar el estado de un objeto


#### Manejo de estados: Actualizar estado cuando hay estado actual y anterior en la estructura.


#### Manejo de Estados: Actualizar estado cuando se mantienen los cambios de estado, (historial de estados).


#### Manejo de Estados: Cómo se modela con el atributo ámbito dentro de la clase estado.


#### Obtener usuario logueado


#### Obtener fecha y hora actual del sistema.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fWbvGHki4Wob7HYy30s38V94FGrgRCXF2IjzEhFlPgfmRqMpDnoknVBpCeErd8wC2HLGG66dZKA0B-eBdcgeSYVpjFiJg08zpCwBHZBerQq9jp3ZlUOL3zfoyzLxA6gheiciAnQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Zz45hZBabDUjS9Gc7cgj56sExtdfCS-5sVuMR2rz8IM6UEdp_ngujPu_7fjDlsji9tym9Q-00uR1rrt6bBD_kefdDuZDJuY1wMbYk8LEaBgl7MsgY8ZMwsNxzkHLCmUdDfd0S=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3U7AsAKBkzYlr4XBUr4VAJrpTnj83exITp-LWwg-L6_2YzVYKJyUFiG3y0fP4RvVcWOLOi5-5AV_Hn2bp3JVqtPHZjDuFFvFdyxv_0qJG5uzxxHdMYmo8ca2FhvnD1nNPQtN_f6g=w1234-h242-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wtZ_3I-dfl147v2tn4z0UuQB8lNb97r8j_LN1n8uD_fJMpaY2TRGnKj6sSu2FbP3Ju1EKe4kTVX9MGnAlt-6u1g9qplu000Sd6kKvMmH3tBwcfCXobLlJLVWuGkHBTGBeGPE_Jw=w978-h891-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QzTAnGpRgTnhtGj9wCmEOk5yY1EsCw7ANKejC8ozRabq4PacUAAEbD0kXNacUOfs1_TZxCo2z8rHkXEZqSo9u8qsCTFK1ejAoR7scMurftd8NsRXRdHfT5hmwHlSm10zgKmvHBw=w870-h547-v0?authuser=0)
¿Cómo funciona la colaboración entre los objetos?
El Gestor necesita mostrar la información sobre las reservas y pide colaboración, utilizando el patrón experto a quién tiene la información.
¿Puedo yo responder a esté mensaje solo? Si no, pido colaboración… así hasta llegar al objeto que puede, porque tiene la información.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u4CXiA-qX2AdfY2ZmAwQNVbK1Kj2dHICQJKkwg5CEsBlJOVLhC2hDYebTIm9lgkohXXQ7nQZt5oozlFSjWuYZAiVhDXqmEue1ReIdiFtqtsaYbAZizWlNofTCvxoAMmUutpVuNQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ENRAWO-vmhm3z4rTu0gCjvdVXpeChm9CVTUPLEvbnYpRFQXRMz89HxW0JvTXCESa05nr8qvaxMiMkoJcysnJ7Ju1eWSrZYSaxEW_QRcR3kUU2B5tg3Z1G8vTKVzZsHwVr7PiAJg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KyKpFGH7IqkNRKN4QwubX7rfPqHozwYWeZ735-FS0-u7X_9NTNfHAspEvZk8aZ8zJwlEIWX8nQTM9MCJ-OsT9DKzsDqs9ELn7j9DpqIIFTDo6ZG9nsq4IbldFc8sUDrQIr0Oaxw=w1227-h185-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv326wMDpNWL0jlTARaA7rLwGPyYT0qH5H_Z4mHURQTrjyZYyUjBcQRS2Q5gWuoK9sC6MILtqtfYP8jkxsjGQVZClATSfUvAyEqRV7T9WGd7gPK8JraNaJFw0rwflKF63mgj_nAtrw=w1280-h924-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QsKxWOgwxAZ7sciljJdj-Y5euk_n2VuSJ-7aYjAsWON3mLumreO0ta3bHev9F0muVdQob69Cy_Kfax9l4tG8mYYCzF2MIQUXFvRuJchspP18eJPfUC_BAi_bRMeuextSnvGlu=w1180-h325-v0?authuser=0)
¿Todas las realizaciones de casos de uso tienen un objeto Boundary?
Queremos modelar un caso de uso o temporal
No hay actor, no hay objeto boundary
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-acpEEF-WLu67hGGgezTnZEU74VbvWIfKaE4RMT-P6ezXJYvELblXaxoln0l0AqBr0acA50l66g-K28Wp4lRhVAAtejJPLVfnNvis3h-U6iFCmsXKRTYoLUdi6VSqJguHiehR=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0I5NGLAdIl2bG5wyoC7FvjTISF-Vtu_oShjzvPxtpn9A5Dt2AkL_Z68yfI2k-HfmdI1ReZdvAxqmk4j7aQuFwaHQswN8Ieb4aQFvr7FeJdPsaRA2w_Bk7z6wCY5sD6gkLX7UdjlQ=w1230-h842-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VHDPMgLnIG6cw8ZOiVIlop_NHqm_5PuypAWellQ2XPZc9mlEAm-01lCynQ0aXhA_vsWgI0gSVlwSrVJX4NcE8LmJ13csGVetK7vCqR1oyzfMSg-3V_pn0BsYsa-hIhEqvC_Y-oA=w1225-h730-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lCfSeQSRBKQzHy_XzmOS-uEUiiXV2htYKuL7EEfeasLTKh3Stfn6qq-KNiCnV-0kbdRIlY-e5GbrnkkC2AMvC6uww23darnRnlJLzfkReCclixwxR6_lEufR4oeYkz0oqy3lznQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VOcG9Ye_N6tcdMl4eCqVcvrLPNL4TZymdOgFr89ONclNYdKBki5RUx5r_s_khtaRA6wJGDnf8vGqQIa9pAab2Z6vk7EUOI_r_PTXX_dUrTPmoVDgI_OO-6aQ534q8dYfxI9MGnA=w422-h521-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J3bp2CSC9pGnBwdIitWpvvgMk8vbC9n6IKXuJOhoidy6YG6GfPTsFy1FHHb5xlFjZJMWkX6QZHr7sXfCrDyFwmjbfqJZuZbpBWvnAudMVwXklIRQHpQW4irFImnENB6y3Y_lR=w1280-h232-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dEHufcf47t2A2cXo2BONICq_-jkiHiQusldTIIUdEIJznXJQm58DN7B_fzwbJLkyxTmPH-kFpHol_djLRBfZtqGJ8Mb36HrDc000uCHN9PPwgfNf7cNrUCs-9rjD02n4iqiXl=w490-h275-v0?authuser=0)
¿Cómo reflejamos acciones opcionales?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35Y8CR9YdKxWjBDyyPsEP0QpK8Czb0ZshYip02yDBadJhYyCWhBEmgMK_KSLZ7Jdr-ciOH7bAwxoZCvrkVYYWQvuEeBAkp249uLk0nv3eQ9SYexwYydXy_t104VTeBkNWZn3ejEw=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rLXUiEcdPGbN2B_svhVKprdPZ1yRBre_c0bxZvlvJv3NuaKYuMWex-TtPp2_nPcxNtTzvYrKfoYGy5wcO-U4tbqkEvG0q3Yylxx0cYoGZPLWzdsHdnF_WSkPipGpi11xZjVme=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ba9Zu_3x0iDq7yxAEvUNB48Z4B521fnbqxEmG59gxayCS2NtLAOpi54eeoEAtepPGC4cWiYjFt6an_OjBVOwAOeotfbklu_lqmoGSk37M6fBiKMlRJiMvxj5d-Nom4DyyvuWV=w1280-h70-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KO_T1CO6PQE11z1mwVtcL0XCnK0_y-1RA9u0OPWChgA-RjFLaiGXqNhJrjwp6wLHtx4Zoc3Xkjxi8Mh5Bdxx8Zx4ydZGsTMOlTsWHSxueDvX1Vnz00nHCL8Kk_d2e5W7-Kmck2w=w977-h230-v0?authuser=0)

## ¿Cómo reflejamos acciones alternativas?

9. Sistema: Envía a la opción registrada por defecto

#### (mail, sms, WhatsApp) de cada Consultor el aviso del


#### nivel actual asignado. Fin del caso de uso.


#### (Observación 3 y 4)

Observación 3: Los Consultores
al registrarse eligen una
opción de notificación por
defecto para recibir
información.
Observación 4: En el aviso se
notifica la cantidad de
puntos obtenidos como
resultado del procesamiento
y el nivel actual.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JYiDCgkSl4VVHrjEFvhk0bI9fE6mshQdq7OkGRX84eUgnLKX4_5wF_SPq_K9jmP-PIEkq2nd8Fdif5dM9Kw7ZhBK0nTDKXFck34oNUiZY6Zd_uKfmoGn3XddFE8YMZ7BFn79jyg=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0my3ewebd070zPBkKc0pJ7hTIn5zq_u7vVQ-71FqMl_He9lbp7G9dwnzENpfaEcd5taqVpchHtJcXi-9MZDZ2aMKi7AOf1INJtXNUTgcXIvSJdM4TvRocK0NSytbUix5axlkPkew=w1063-h1280-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cVkhLaYS7DXmcz1B-mmJ1kgIAdLBGnax9HaUxP3QctXNG4Gep3qFj33MMEqg7L7HTkKjF-Lq6fiSGYsH_3Zhzy50KuGiEch2XrIaPuIR0yuNdqigmFppjtkSicsHMICH_DJx7CA=w1280-h70-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1huOrDZSx2W5YZEYaYZLWGupdFiiI4tkaiSsFEkG5LfEt6GBn5QZm2YyOq3XrKfpoXlBui3o16lhbUwzKpmAnhVhy7_Wdy9w_q0pqZ3lgsLdV7jtPPDDaouIbOYwWrqfSSG-sQ5w=w1280-h1254-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23nTfhhf7QVs0F_xDEOWApSbjJ_y8RGuopKCYmafS7FBTiMHZ709PyEiCixGiw4Z41aqh79fvQpx18Bj4daTwVHDb9aO21HahBxYka0Ja9s3nb_EM5dRY7i1XVWZWHd5Fy7jzjcA=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02g23omBIyVysd7oKaTGqTKcaEu7HNjCfYiip5NzkXhSz8xOse71a6bNfXy-0jJCYKxgiKheS0LVfdL1CJWkNXQjQW1UVqsgvDNi097ax1wEVa0tXvj9gVDAS6w1o4dV7y_uAASg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gUZU48RDtlYlH8xS2H3Cg2YV9fG_L82RldDT0c9YcM9Z7SuXd-5i_TsyqcCMTzuhCZCz6PGPcXherBIp-ZzCUaFhX2JYX4u6EqL9ywtnJbJArPu74lJbS6JY1m_j-bLZXMKraIQ=w930-h159-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PirPvRa5WXVOBMkrBixo_oIihMZL-9vBobaGsQOIBQ-zxo4FvcCnslAzovI1_G78Z9l3FcwF34f7AoRREGrCiYPJe0zYvvqBYUsF838yxwRGOrjpmr_-aMSO2-5FQkmwRIYt-uw=w1099-h801-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qy9GH7WSv6gbEY8vn9MldEaHOHcTv3yoFf5X1Ne3jGQe0uoVxCiphJt09Et0LbWeM_auhkq4T1AiUrD-HpIV_1CwNQa0ZVHMcmn_C0qhgt5Jq5o2jQ9nhRyik-r9tCNZoBJV8ZQ=w730-h586-v0?authuser=0)

## ¿Cómo se modelan las llamadas a otros casos de uso?

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hEayIcYi_ReycCZ801PDFEsLTkgNL0kEaqKuEfBReUtLtdFkfqpdN94PixpJRtWCGGcb5Ex1RRhCPJZI1xr7O9EVqldrF8xUJCMPj6vz0CWU_iMTk8bHHmyDXz_BIBbq_VhpebQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1F1b8YcXSN-HUd6gjIfNL1eikRBkpXZK3qx63LiigiK4MRGqDRQz8i9krvOVn5q8xRR10e8Tbt6b3psCbhoxNvUqRt6h_RdnoD11tb5ovPUHUWzSb0X11bp56ZNoBcGXrCiqYFUg=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IO58hzVmZtcDvZgSo6ypBtgyrKoBCD2IDSjFRCGr5U895_aXg0nSI-X61XjrhzLGBA2jOCImFBrkyDdHElrXuA4u5i_pCeGFppr2Hx6WRrsYUxc1kJBVxaB-h-CdfBYSe8RmLxg=w114-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XOHxV60Gk2vVDH0s1XBC9lOnlgBcNQcgM3JNxA3v0Yt1RHo834AO_W5mFbzDfYAzzUUraxyqpbcOEjv4KZLFyAoYtY_xhd7vkbJjxAQL9EE4whF2fR3M1o6mOmb_EleSlu68jWw=w114-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03OuCBkGuvDeUowt4KWkP4bg2EYtZNV-npLk8UjwuY7QEOECiWNd-v5goUeet3tkmu6FftSrMkF4EOMtYW9rKXUk3jhLPkr0BCadMpCDtrFBwpX_JgA7B2kmS3DrBLPN1PF0jK3A=w114-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jTft_oJ4BgD-adG_DqGE-nrDJU1CLf6EiL_D9PQ17UQyJ1yigINGnr2wKF4vOqh5BDdCvtLXIgI24Dl_DcC_8yYQJ_n7NV083MU4Ek95ln9zjHByeZ5Sg7zcWWzVs9KuiS0shbw=w114-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2i1T1ZRB5AiiFLpn0nqLVAcOK3ekPX8nsON6ItlnD2fYN5_6UGWRmQ4vs-sPauVhjFE0DUoa67eLqjnXriHANa2oXymUBVMboAEnzS0VLIlseg3AQlCJ0KwvUUu2EjNyFsNSVg1g=w114-h122-v0?authuser=0)
¿Qué vimos…?

#### Cómo funciona la colaboración entre objetos


#### Cómo se modelan los casos de uso abstractos


#### Cómo se modelan las llamadas a casos de uso de inclusión y/o extensión con el diagrama de comunicación y de secuencia


#### Cómo se modelan situaciones alternativas y opcionales con fragmentos en el diagrama de secuencia.


#### El constructor es un método estático (método de clase)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fxGPC46-ZVmpG-VNx8bdwkT8k844vlczvfWcVPc0mY2tU9DFy7wAePopaXmNDxP96AYj2QOZsazdp1lMMPg0cDOH5WrAXF1oHCwlsG0qDNrdWcfZTsdWhMOb3w13IWEHRO9XK=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2i4Zr6aIRkbYq88OYIVNtU63twwbtR6G3twgm2U_-U70k_XO9p-qx5YdwpfNrLhGKF-DwpvShCUIRYn8B-ff3T8WjoPXk-jbGSyxOaSEp-PFEBS5UBDWWToTTrE7cWoFNU2-xVwQ=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1woEofnV7MXAAioIMobeep_6d3zNoLRGogkUJWdWcXi9cUD7d5WwMX5BpXmzy_2s4boMJqLcFFeTrn9K9M7Br7vk2MnFGRxE5IW_I2NDeACvlgoXGuJCyKDmuku8tM0NpE-aUKdA=w384-h384-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YHsKFTH9vIBJC6CBftti3iRsOcFX1iIw2k5VZSho7jUKPcWPlwKr3keGDKJfC4lhES06Qcv-V8YYVbe2oDWOvsdX412rC1T3awD_3Ff65QHeUY8rTeRHlE5EHolEHq80qErdJLg=w384-h384-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WbTLCOtihtvUkKPWIo7EbsuzuBcU-AdAppyVRzs5L4xZqHGfVLrO5QobCYDsEjNOPgt0c_tV4BkBg38EHlQkXUU63bqUF8G_Z4k_irMGm3bS_MD4tjuui1viQDUkYFXTZsL1c_Q=w384-h384-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv384400DaNpIgzDd3E9sTQmjvbf7qM7DfN-22orPuG1t77U5-dbpF5pwZ6vSu27hFr2uOcdh8I7uTmgHrXn16jkgsskkoB2-UrKlsQutr47XHnV1xXEj8wojvs5U7Z3RilXRbcKTw=w384-h384-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3E4RyYsqUmCx-pKP6tcsoLcMQMnOFi7NyVA8GQCd0CkCflUFZO-vNA7h1_I1w0Y6w3G6HF2swfcvcc1Q9zmL-nL_R-75Nk-pVg-huIHXxohBdBUiePTOqhyMtINaNDD45omu0_0A=w199-h199-v0?authuser=0)
Las acciones sobre los objetos se resumen a:
Tener todos los atributos (por valor o por referencia), necesarios
Decidir quién crea

## Crear objetos

Localizar el o los objetos a modificar.
Tener en cuenta las reglas de Negocio.
Obtener los nuevos valores (puede ser calculándolos o recibiéndolos como parámetros).
Asignarlos a los atributos correspondientes
Modificar valores de atributos permitidos
Saber que queremos mostrar.
Pedir filtros de consulta si hace falta.
Iterar para buscar
Mostrar.
Decidir quien tiene la
responsabilidad
Mostrar valores de atributos
Localizar el o los objetos a eliminar/anular/cancelar.
Validar las reglas de Negocio.
Pedir confirmación
Decidir quién debe hacerlo.
Anular/Cancelar

#### Eliminar/Anular/ Cancelar

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OoGOK_XzMJkF2EAkNHU61aQ69nJ0rN3WgMz7wo62QuDHCHtJMFnxeNue8uCccwMOjRWO1ib2LhTAB2HWZve8dacsjr735HSFKMBqBmmpYUP0bh5FSQy8Q7v_zeuzvnrf1eJ6yQQ=w173-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DwQk8Mp6dBnj61AdsjguZizw7dCbSPqFfDBzQKmlGTS6fZ2HuKDQn5jRclX05OpVTCIRMYgBfBwV3NR1BYs2irqxnjIi7qAbOk79wzLh3ZRTIdxIMuP6ZeSZfdcWO34x7ELKz=w422-h521-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h68gL3gzOWEl9bjFbZNJToq7YCztEjN9sw10y7byDT_uFuKq79k5uYmp_o4efFdWUZVndMjQHHewOgFm0UVoH3iGwAcSFcU9us10auGMcYXthjNAlev2sJreVNiH5ARB4frHx6A=w1234-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00WSWVJpA2v5VJ8J827hP3L5SlGqAY3pnngbusY6tWeE3qAo8RVBKpNfzigCuiPjTh7lgkbwu8fdernG6DM4dglhEmSK0i3uvVpF6ysMP0GeXPlMap9c-IdS3-h7RJpqNKf_kZRw=w1234-h234-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12RUtEJSBL4lTfOmoedGS7tNIxA8hDu1jFC3VP53IWTEbdIqTBYD0s0wW3OH0tKTUQ3Xo4ODOwTi77n0fnvGnsUqC5ljiHVHTeevKzRHVlbQ-1WvFMNLYtBf6MkUATYnfZUueUJA=w273-h168-v0?authuser=0)
Dudas, consultas….

## Finalmente…


## Muchas Gracias!!!
