# 11 Arquitectura de Microservicios.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto explora los fundamentos de la 
arquitectura de microservicios
 y el 
diseño guiado por el dominio (DDD)
, estructurando los sistemas en componentes manejables y especializados. Examina cómo los 
estilos arquitectónicos
 organizan las interacciones generales, mientras que los 
subdominios y contextos acotados
 dividen la lógica empresarial en áreas clave como núcleos estratégicos, soporte y funciones genéricas. Asimismo, detalla los 
patrones de implementación y almacenamiento
, destacando la estrategia de asignar una base de datos exclusiva por servicio y el uso de 
contenedores Docker
 para garantizar un aislamiento eficiente, escalabilidad rápida y un bajo acoplamiento tecnológico.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VKOeqv2csizlBV4UF5L9mVhKmWN9uGQpYyJp3W95QtFDX4YWPfHttbFukExLub8Vi9cjoKI-x8xEZj6p2WsIaU5x1cs71ZuyOqBdillF3J6Hy6X3rOpyu1BT5_tV_IuK4CRNRPA=w1024-h768-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35D2tQUjHBzTqzr3_2362ACelpQ2sQFRkdcQ7ataUF5cet4SI7qXMHtnE7bGLhl3362h9DZt4_NyYOgKAMCyLerKdmgZUTfvz-nNUGKHQcGh9LB8gcGwNTy1kpapxC_xHdI0o3TA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jWkiHxuLM7FogRIEUsNYoGe9HKqXiUBaHCaOHdi0omKp5JuLKRa8AupWPeD2q2ywrZSMUf1YPcm6ed2-M52ijjJCIzMM_NjAFNCzj0b_1YrUhTpryEHARnOzEXwutvHef2YFD6g=w493-h493-v0?authuser=0)
Diseño de Arquitecturas para el Software
Aristóteles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2I83ul4zAK6vaDdFYVP2iORZRcB7gZpcnFkjxBfRkcI2uh1mnc33lGs8YGmOwQ-dPc41HKt5h6Zt58AN1Kfz8-VfFdZnIRAWWfvTSLjwhoC1LZb_sBWXsa2ltAzLYpRItMCmrM=w1280-h720-v0?authuser=0)
PROCESO DE DISEÑO DE LA ARQUITECTURA DE SOFTWARE

#### Determinar los


#### requerimientos


#### arquitectónicos


#### Diseño


#### Arquitectónico


#### Validación

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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cNXgIgMM6JONpa6hCKd7HnBuPkjha-KFKhCFco1RTHe0lPFZza2niiR0s6tNIZ9EJJ9Nc-6vQokB5HsMROq7_RHclJutwPAhpwhBliZqfa3Kgc7rSMibqPHX6-t-nymtpudE7=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dhWsZk0ouiifiBIISzywG6swEmcZ5QYG5YVQvhaR1ms3r2dsbWjM--knSn04g2ygrCM4nwYJP1UAoTSDbT7oUi4-HWl7tXi77IF_tBOJfUeStM756fzeNx0pVRdugMS_wkhbV0A=w1280-h720-v0?authuser=0)
PROCESO DE DISEÑO DE LA ARQUITECTURA DE SOFTWARE ACTIVIDAD: DISEÑO ARQUITECTÓNICO

### Requerimientos


### de Arquitectura


### Vistas


### de Arquitectura


### Documento


### de Arquitectura

Elegir Framework
de Arquitectura
Distribuir
Componentes
Determinar los
requerimientos
arquitectónicos
Diseño
Arquitectónico
Validación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rC3zaxifJhV83nTjWYm7AmXONpaNVbT0hAzFweu_EpX8FBC98vB7WtnXff_Z9WxKQxaLXkidKK4lUPSRaW-Ofvb2oEYk_RY7B2rpY8WKYOkD5Im9Ub_E9SqA0hMB9eSPApFSW=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fpoDd6ViIw_z6FpNIrSP8vpg4-ijG-kE-qJ08bi_cwaNYgRJ1w17B6m887IjuIMdZVn11FFFV-NY1iWEQQburF--9mNSNfphqsmkV5RU5ZNJuT2VOI53gu3pMkUr4_rvaRj0Hhg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BS4H6CizS_mPxA-rtulh7ROQoVH1BUrYptNpWdGxQbQrjiWqjgpXu7mijaJZtNRsRdwpBajgAYjKAd7BrGq8QxrbApEXEcsODkPSB90c7nMzsxzdZVITPBYKX1Cm06nWsxN77Tg=w1280-h718-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2o5uD2FXQQcuyOVPjicuFUGHCpKG7z1Si-LK-49cTjK35u3CJA4vdgQzKusVK0zDXLi_ojm5M6WIpOIBramS0pYqmfAzGSi1NhgAzlhuNEF2vS9caFLJiiZBdq7RswL8wvolJepQ=w376-h565-v0?authuser=0)
Arquitectura de Software
Estilos y Patrones Arquitectónicos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3doExb3L1wHR7PXYttHldtv39gCWlJa_eFKmoP9exAiN_81SpAncnVlhIyvxcLeQfoZtO8pgnmEBkPmNWPQS0GnRTk3D6uWDjf7HPO3_lMrFOaZygZX7PLWJKIxyg6G58tyE9RuQ=w1280-h720-v0?authuser=0)
Patrones Arquitectónicos vs. Estilos Arquitectónicos

## La distinción no es tajante y existen ejemplos donde es difícil distinguirlos. A veces se los ve como sinónimos.


## Los patrones están en una escala menor que los estilos. Múltiples patrones pueden aparecer en un mismo diseño.


## Un sistema suele tener un estilo arquitectónico dominante.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3BD8dQRjt5Akz_jzN5FXsTid8JQ-jcrAOT0OrpMRyRgqV2fvW10FkrXxWqKHtgNazPF7WAOImKflv9hHYJpGQaXDd4jeAk6ySjFtGBrudZCqySicMlKhp5jGvP5XG1QfCuS8C2=w1280-h720-v0?authuser=0)
Platónicos vs. Embebidos

## Platónicos: idealizados, se los ve en los libros y rara vez de igual forma en el código.


## Embebidos: se los ve en sistemas reales y a menudo violan las restricciones estrictas de los platónicos. La violación generalmente implica una gran compensación.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vlN_KPmnmn4QQ3iTSt1DEMdjHZnjNAg61-3EHFR6nEVxn3dPFwXmzVn86YJRMmG6R0HF0YYm5c7nd3wRMqcKXzn9b9JJRrYM9JKbDLDn60cDhlaoxyFemLrPY_wUvGvHVN-r4=w1280-h720-v0?authuser=0)
Estilo Arquitectónico
Un estilo arquitectónico define cómo organizar componentes y cómo interactúan.
Establece un marco de referencia a partir del cual es posible construir aplicaciones que comparten un conjunto de atributos y características mediante las cuales es posible identificarlos y clasificarlos.
Sirven para nombrar un diseño arquitectónico recurrente.
No determinan tecnología ni detalles de Implementación.
Se elige con base en necesidades como: escalabilidad, mantenibilidad, rendimiento, integración
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05Mo7EGWxbRwYBjcZCfAD8oTthg5eKvDSTuZQ-R0pWKtUCIAfs-nrVZFc-bzC5RpRxZ2TbDz-b0GbqnsX2SFsdiIX83NUDcDGxsv6osIEoXYa7R1q7NKw3Y0zkg2qAAp_iDio3LQ=w1280-h720-v0?authuser=0)
Patrón Arquitectónico
Expresa una organización estructural fundamental o esquema para sistemas de software. Proporciona un conjunto de subsistemas predefinidos, especifica sus responsabilidades e incluye reglas y pautas para organizar las relaciones entre ellos.
Ayudan a definir características básicas y el comportamiento de una aplicación.
Mejora la partición y promueve la reutilización del diseño, dando solución a problemas recurrentes.
Comprende un conjunto de principios que dan forma a una aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y8q5bXs7jBqwq4Yj5m77mlJZ7l4agI5NqzAmXOK83xES_-RSfoQ6R5KAJbUtG3sb8g_a8W30YaiKbccyST7ncA5keD_OG9lZhYseKFZc3YM7rvvfja4BhPaLfJFQa_xCQaUENgA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PWzz7gYuDo2xaLR3WRYEuwFj_9rweSCgHAqr3LY-Hv9SYNZ1NRHBZqmHg8MV63atox00TR7_POgJcwqu4xzA0Aj-E00dwhfUAHmRYXjoMt2nuGqCfRhU5oK146iWaFzPVj2eI=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nKzW6f5dwqUM1val9fyKpR627ZVdXFa4_HioyrVpTtJC5bB908qSUsOTc3v80VvY_Lv5J0GadM4j35s5XdAtOhD06RKyoupcNxLWFQ8KoVJG5bOSSC10ck8APMaJf0U09Y3x0mA=w616-h347-v0?authuser=0)
Cuando no se aplican estilos, o no se
mantienen en el tiempo…
L A A R Q U I T E C T U R A D E
L A N O
A R Q U I T E C T U R A … .
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MIvCCW9kDgnXnMi-ucB-tk8ir53Updvrzq19zs8AxZsiQNzHB1N2BQ9OFzscfrEqXMMixQFKFUqXKUuiaVLs44N7gaFnCeunzj7alxoeZiX3xWhNmX_7ChgCb0K4-iaui2xIksw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3H-P1tYF35_relsTxIokFi8bBKQzEQERdxS4LtwUgSOmoRTJPyrAGJJFLybir_I58FtQOjNMl3TfSySy0PQRWmbFHULmyqfUQv_nAY84inXz4f-crNe95RCwgxDQP9WBV2-u3atg=w553-h553-v0?authuser=0)
Big Ball of Mud
También conocida 
como 
Spagueti Architecture.
Es el estilo arquitectónico que tiene un producto cuando no se define una arquitectura.
Surge de un equipo que no tiene un plan sobre cómo se va a construir su producto.
Las partes del sistema a menudo están altamente acopladas, el mantenimiento es muy difícil.
Explicar cómo encaja todo a alguien nuevo es casi imposible.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19JgElEW3mwRlMg_Y0-8XmGE01t214m7xoI2M5nLorhVJ3Wy9MpuFX1gtjGwiausH3xJato_1b3LPo4DIxAYrBffADSj8bT3yG18vd7oRW7g6GHOCZry61l7wzAbv9DFr0Aj1vhg=w1280-h720-v0?authuser=0)
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pE3L0xqzGprPBh98vlJEwDLD1uIX6aCPubr_F2BMKX3AMOrmBvw2eHHytan6q9uTrAkgsSPsEoecZauY36kxgiuVmDOp71PhVz8oTlOOJhL38G-s_VWGAWpN--EZPLT48HYFIvg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rbqJP7EAkGvEyRQx0-MvxQyAkIBIMuV8dCZ3gXi7Nm3i9_zdwIr7Kl4JU7duK4IGjbHECFbNK9PBO2J3ive3zEYU2vTnJ0qCI4iPD8pZkZ-DDrEPiKImE4X__VAYS2INbtsps-A=w1280-h1153-v0?authuser=0)
Estilos Arquitectónicos: Mapa mental
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jOygB6QfJszQo6Tp_aKLY-q8VlRRlvuX3Vw2iAwmbVmrjO7cc9ugIO3Xp3ROBR_tPYy0nElGh9JZ7813OSnCsAOHQqocTe2ALlQ5lW1y3ccsvZedKsEHujq948fRcY1ZxHeDm=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oCgrL97087DC911Bf1fn4GjwGFWtipqADvI2fDiLWBaQGBi2Y_heyRaZxmscqnkC-zejqVgAd81BNiqdP1YgASSDQ8FQ3TDLQOMbA6Dr0u1BAKw6R_01ZeaMIgqXsG9bI_uOn=w104-h489-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cNKHBMSe5zSwyfGjumKokdkFkTbgLbrrbvEtIMpdxqSOoD8-NkxPFOQXabOOQuexz_CZ2z_9NsZKmJIiFn9n2M94-tHw6FKN3P9sbNhA27kg2h9bbS6eCzFBDnK_WWVYUYwGW=w138-h552-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2G5CHfeoFnWzuco4aGsn-nDR61oQBzA4f2jHrn9rJanR4XrVjrNS-f6bQ-DMlMPXmoPhxUATpXQlhAvYaObN2Xt71tDJH499ZSlIMNG2YD9iLsv4uam61wTYonSsXWtJv51lh2tw=w310-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GjUjJc6ILxMHKE1ubPc5sGnxBIhb0PxquQ85M6-JmvX9CwK8PD1jsuO94vD_91oFbAPzev5yMmaC4DhcP_CCTFIzSJ8VDO0ibDIIFVyiAAA_g8qsq-wbvnfthZyb_yXkL0OWuug=w216-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27q_g47BdLLPsMmlBVxdkAc6QS-CAptPT45KplJETT3APpwGhPQOI493qHlDXZe15GqcxJqciVG0EQ3YLDzFE3hodzvBF21LY7x8uditjGEqRh9nlG9slWLPbNptj40YeuGluL4w=w310-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vvJ-OORGgr4pItqhh1oHBcE37hf3AJe6Ree9HACORvDXjhwRgUon3G1B6OTOGeGmzYmFhNn6Lzep8PX2HiPgGY8VLzH5MBPPmncBX6AF24HTSAjBgfMDWdMLsuFcRfhyTN1wJ=w350-h119-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39K6A3OTUj8pPuthzzC-wQi2rmLQWKwJCvc1kQ3Yw4h2XoRQDfQ_H3hCwDmCG5VpWztom-tgInp0id9ELSA3LQES17qYUdbIVvpoQFh1PPh-PkeW5OMd3Qqf8JTv2n1DIT1f9Z=w310-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0c-ZlRbAwi8WfopQNAyBB0Ot1YHaywTQAJhG30jELk96Ge8643LM1BpAqm70XTlIhTK3mKpteqE7XlCHbgcog5uBkAet0NWSIAj9neDOX7BoL8xUNz3e0SrbPZmvXFFFJmpmmXhQ=w280-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YCcof2mAOzQI5G4Z2ww3wPOprdCDzch4TPqJaFAIQFIn_IfjGNMbF6p9rAK40PNLlX1Z79paePnHILGQB-4ifb19z3fNVdWxh-pMFQ7zv0MZUkOgQwieLs51hY0iMvW1PyNo52A=w1280-h1153-v0?authuser=0)

## Estilos Arquitectónicos para Descomposición que vamos a desarrollar

D e s c o m
p o s ic
ió n

## Monolítico


## Modulith (Modular Monolítico)


## Microservicios

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-OV147rzHzllActbAEGF4rCeliIk0boEo44_6qD9m8QPd-BSMS9AyAO3HjJMcw8ee5KvRD5NfFl39aAl2eO96Z3CHl9IdcTrkg5IbjYCd278pSNQ3lE3449qbrgBjfBaiLIU5SA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25TexMyejH4oQB9MRFgQpZ-zZ00FsR0QFrdLfB74sWI5doCKlPJV3cR-VTXP2fLHMIoAYdmejsZ0as7BksWSKhY4VJM50R6to-d9RR3vGZJwmdRTF1J8Okc9K4sh37dauzYRkk=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3P2c2KxQH_mOHh4ckR2rfAKw912x7MDI7gvqReireauNOjQ8f1kGnxkqdbmz_u-Pbr99C7sMupCKI0PhZ8d5t-9nfLx4K93k-N3Bg5xIOdRs_sRNHzw_aOcWOLKRKmZaDtFiFDuw=w1280-h1012-v0?authuser=0)
ARQUITECTURA DE MICROSERVICIOS

### Judith Meles

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nXWWVYziwtIOxnxg2ddqpr-_yQlF1ncYJ205u5tCIGIVp1aFIJei7ALcWDATY-2gpT5krxKsC8J0C23LgAUto4EfBb_zavxpsfkJgHDl-SlbresnX_vHzsqLy6hjSOpwxKkblpg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19fio_8BukehRPpRnyuTtXU93AVcV58Ip53HgUpu0rqrbPzHIxBoyiQYG1rPO_rTDZoAipSa8S91gVUnwhOYHiJ70M2-LfYFiCYCgKNtdjsw_Y59yGr7aG6v-hnzXC8F4_FMSbvA=w869-h409-v0?authuser=0)
Arquitectura de Microservicios
Una aplicación se crea con componentes pequeños, independientes y poco acoplados, donde cada módulo actúa como una aplicación o servicio independiente.
Cada servicio puede funcionar solo, pero interactuar con otro módulo cuando sea necesario.
La arquitectura de microservicios es una SOA. Los servicios se conectan a través de interfaces proporcionadas por SOA.
Cada servicio en una aplicación de microservicio controla una función única con sus datos. Cada servicio en una aplicación basada en microservicios tiene una base de datos separada.
Aunque esto puede causar datos redundantes, asegura un acoplamiento bajo.
Cada servicio puede estar escrito en un lenguaje diferente y puede usar un tipo diferente de base de datos para satisfacer sus necesidades.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MRzzObC01i3Sc7-Kedx73DIEGJSSxB6drnShN1N_H6LqYQdrc4REhrRH41VunxqvpvzfC6GO6hWnH_1C1iN6O7-4A316TwvnGztsuuOgDZLtCEiKJLSs6DmMQXW4rJyI9OvfkOw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ag0M7QzEPwOIObraU93pVOxVEOc9gjsr-TFJ4Ds1cVJ9E4_X_S8F2Jia_UnMR3havpmWlfXPczYrXvifViMMOXQCAWc5RRl41qSRqKB1kQIaj2Dxx4RtqLDTiBTnYX2NeweijKw=w987-h862-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e1Qnt9OiGAtTpcmTnrqLxsb-kIOqWmZuY5WR4bycytsH9xHE0EfQwNxIzgudLy4UtF7cJm-kWEFfpWIDfGNFhG7KHYbC2UZ6i69Wxoq_pvavqdueVXfSDe0yeSOIFWw7Sbild=w915-h895-v0?authuser=0)
Monolítica

## Comparte código, procesos e infraestructura

Microservicios

## Código, procesos e infraestructura independientes

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VsR8HMSCepuw-Tn7CE39yE-5pYBV82pGGWD8VwisiwGMoPN2SdpwISgP5NtTrhTqV3JpNunTLpXfnWIUg2E4N2zhcVUXXqsy47cMJKDgjS1iWMAwgYlCBzf98s-7NcPdA6p2kWw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vgiKIzvjbFFB-tGe1WIy8nwx-h2t4nuDVRbSFVif3-YHsywiw6j12rhivO-rZEYvSaw4Cdb5KmH5-kIBosEH52O8cSI99q2KDWHeHuIzLpQOeiX9BOBObm-LqGnDfbpuAWD4BKg=w1280-h928-v0?authuser=0)
Arquitectura de Microservicios
'Micro' proviene del hecho de que cada servicio debe enfocarse en hacer solo 1 tarea.
Se conectan entre sí a través de una interfaz de programación de aplicaciones (API), es decir, un conjunto de reglas estrictamente controladas que ambos pueden manejar.
Estas colecciones o programas se pueden desarrollar, implementar y mantener de forma independiente, siempre que se garantice que funcionan bien con la API.
Los servicios generalmente se comunican usando algo como REST (potencialmente a través de una puerta de enlace API), están escritos en diferentes lenguajes y tienen almacenamientos independientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1na06KmvIrjJkr-6Q628cy-pqRDCUbCwwnBb0sNYVEWHH00VShAFeASu4nfZkDzwy3ykr4LlTK-kduUzPupeT5xF62mGsK2wfPwys0nlGAExvSTbRI-lGepIdLlNQCigqYGNtJrw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZlD_FTxKExQeO9UGnDgP5xaQAHJSk-20h2zSbcAggae00po9-Pp604aLkiSgDB9NkP5Nnq0QGw6OGZBCgnOoul49PxKuVYEszKPP5VLmzkDDNLwalbE3nboNjb4gB6EmuNB-Wvg=w230-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2g1PXoQGr17gozajWGwgbDwuGBA1dyqPUbjlsQX9IbtflusSOfcEeTz0JxVlV_c-EogaPQgePr3zFJPMjA3AiKZp11-XeuLi02TD3T77EI4ESdTRYcMZYOzik0N7uLKdrj4ERu=w253-h229-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GFGw49c9F7Q0WFQDPZ6dErh0WHd7eTh-kL-fWgtLOIra4fw6E0mBXkAMYxuRT_us7qVXX2p1ndmNFwPOpTsFEhkveOD0rBntfeHUVEZ--iL4EHO0HI3UHujhDTPW6dbn_QXB90g=w767-h810-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vQDqDfIkUU2pQ1JwUqXVnIl_pL5gijUqPhloSKzeym2ZdS81gh9WcWnqCh7N5y2fCdMDDazd66W2W26BwXlEwSV_drBu1kYy_z6ALG92ESKpSNvSwzVJ6-_30MFSLDn8cJjQgKQ=w815-h832-v0?authuser=0)
18
Monolítica Microservicios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Hf6l5dxD9Kul-U2iLrl7S9_rXTlRzHj6MCujBI2xSJFmvSRaV0VxDB_n6Q85xVrnXrw2NNocWJMzbDnhpWr7ont-QD8fjhSBdTx-3s6GEqcOSr2Tl16VhWiq2wO0NaPTd4OLZIw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv149Dy9405HDYy8OzIC4ov5mfVj6UwSbu-HOLulPrKAe-EVzhaoIP5uj4sACepfsrgCeROi5NpKz2mMWA48re9Sus4w_lXSAqvHbOJfXCOh4o1IXNvGdX81xknzhiMxoSDRyV5lzA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3svvLo7eekwKe2oZlqU5p43PY1D__ij4K_RsTp0Uauv_diraw2gfMLHNpDOigey9DeMxc1fLWBLb5Ez-1uj5Wkxa3N6DHLQiqabTto9AQ-o9hneMI_VRZ3hr-ylE59KPrH5OeI=w1280-h719-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0S6ZNZdOcfVVW6M_2nI2KxOyDFKMvr2NQbZ3bywn7Q4qfsrY9AnAcb-JPG086CHUAec7IvKKuBK2HO509LDXMvmmsw0xtW_SoXBuQk3x1MTeT1Npgiip8j8tGSX1gARQ55VrPJVA=w1280-h720-v0?authuser=0)
TAMAÑO DE UN MICROSERVICIO
La definición dada de microservicios no dice nada sobre el tamaño de un microservicio.
El término “microservicio” sugiere que se refiere especialmente a servicios pequeños.
En la práctica, los microservicios pueden variar enormemente en tamaño.
Algunos microservicios mantienen ocupado a todo un equipo, mientras que otros comprenden sólo unos pocos cientos de líneas de código.
Aunque el tamaño de los microservicios figura como parte del nombre, no es adecuado para ser parte de la definición.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0n4cb_THeGqlG5LZJToUsLl4PE1g2kKq5uatsuFx8dPgacSPKZU3-fqa8BVWoh_JsadBJMZiIZICSSXDs9c7nMOu6rMuzlTYYbqokw7zjx36Jb3eh0BOdjQF0MUUenj-8oSqxBTQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1X0hdX7bAtjWkvAmPWDQGo1T4myS1hf1EPRmVY6WdRF5ziK0ZXTyFrU93wSsKnqwrHtav8v-ag-8B3rX1DCS9KsQzPRc5Y00a_dRYUwGAlLFmTqEf7EiqoHomMsP3mJ77Vlo6Gxg=w841-h1238-v0?authuser=0)
VENTAJAS Y DESVENTAJAS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ltFDvcXogb1o3wcFALLv4xt2Nv9mWRNtEktYteeCGhbtwLPLp9qfQFesmhHYZ4Id0q-jllTUGGcMixPK1_8HCi37Mpich9DXIrco7rJgjY-6ivQqchm2JMpyKbeqRJ5ushn7LRQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2o2EY-jrZe8y3CMt5CVttlnAacNUZnpCjuvBFdv8COmCOP2JN_G2t9Oz6dMJ19W5xHmvQAAD2fdliYVryAn2zMhh5EcARodn2I5HsgyYHPFT4OPBYHIXkjtQDIziOrJsE1-GEtlQ=w115-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qHezYK6aAWE4uybKja80JRHWEaoaFUELDg9D4CGoA9IVRGMu-2e1C_p4zuigWzU8tm5kRaz730EggRSxldKYYwFw7Py63x6nudoQCuhACoijAyWiFdxsJfFn-WOR-ljy9K9FPHQ=w115-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VhDCT0Ze7RfHf_zEFRR9MZOIvOfm7UkggbGHI4FFSQVBw1z9pyQ_9LxQ98Khzme3UjlAZA9djAO_NHM1VhUiqS1QwX08jwOMWFWTqVvC5DexD_FdmAzhdDfC41DYCPIe4BtF80Q=w115-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2C0zvTmS2Rj5lWu4R9onSBcy2FpovZzmhxVc-_XsjIP9of8i83dgydWMd47zrmgoGrty9Iezgx_kil5KyzAupXpNARUbPTUjuoM8XyQT2L7uGXdNS-NAT9048Lhz0FLi8AB7VSkQ=w115-h115-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-EylU-ihoZHB_2Th5OF7djH2HeiZhOn1sOk11Nb7QKDevV-xwRIl2OPoA5s9i93dJiJcEnhP5Fw55NwBcOfCtTQRrDR7QinKiyUJ-cUrMl95Y3ZXyqGdR1B9gd3tAblWEd6oj=w115-h115-v0?authuser=0)
VENTAJAS
Cada servicio es relativamente pequeño y fácil de entender para el desarrollador
Más sencillo escalar el desarrollo.
Mejora el aislamiento de las fallas.
Elimina los compromisos de largo plazo con una tecnología determinada.
Es posible liberar versiones más frecuentemente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cRSs2l9xhPSFsCDzSKKif1nhTscrhkCwn9iZPTdzCbxvC3NPn1AtGnDDOJwFIeKtFOFdeAypXHNHSEIkLjDWIfID0OUpiT8QMpaehJ_gkW-mejB8DHLD3-wH2W72HN7GQo54BjA=w1280-h720-v0?authuser=0)
DESVENTAJAS

## Crear un sistema


## distribuido es complejo


## Los IDE y herramientas


## Las pruebas distribuidas


## Mecanismos de comunicación inter servicios


## Transacciones distribuidas


## Se incrementa el consumo de


## memoria

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZdWrv8F14-ceCPxqTyd1Xp7vovBLIEWr-R7OWeec6jWZzSfXM7zAaF7wIUD1CGev0gzQuf5KYtHLX8WYM4O0uD33UwvcOl-D0Bd9awhGbZLQBROSpDotgltkQzyaFk9FphJFM=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xsLdV85dxGhZwO0ln9Oh-wqHiO3a0vLFagjQvUzRiWoVQLyvQj9CQWLCJQLSSghfhkjatRBFZJ3u6LTz7cwj1quL_aoyeIfgdcrdh_jop1ZccXgrOaz7uUcNhyPeSHaFuJaUMRQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vRIjEMF56u54Xb33qAJatGdf8_0KL0A8hYMXyidLbmcQc0wlv_TkzpHUGB-LjnsS0EbqweeAsholnxFSa_aoLBSd-TNnXPK2ac-QzdPhby3fWRCy8VlfdUyVXIn6cdrF8uTXWwg=w1280-h833-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hJmR5swmxMCQeIXioIKceXzU8FIUCqA5nPiKnR8PITmRykt5sqF9hjul3do6ALQO3tzuERYIObNoM_jQfstidjGGdr5tTzPPhWuVh599Q_WN8WpEfqai-RcgLFcUpPyaBzycYfQ=w982-h1280-v0?authuser=0)
PATRONES PARA MICROSERVICIOS Microservices Patterns –

### Chris Richardson

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GK0e_36OOmjK1lhceo1wG2yL9TBvtXlUwNl1QrCC_5BxTIbTE0zaLbD1YVZ36RW2x6485Rf99tRq32fer6AGb368xZWFyEBtIg2spzl0mz2trSL3HnyYBULhj1KQLbX17AiHr=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zmQWXsmeF0afR3qNRrXotCBHTbqLISwho5uEFNavzBwVh_uWyjVNgw3bl72gbGQ6I5qJH1I5moH6F3Wb_nLooUKYTtLVvPUcQGqLOp6ZEnuqE99JZ18UfRATvT3J480yVQgwC7A=w149-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2i0iHFb2taJETxa3YUiAP1aj7ex7SKOZ2CfGNK-MUFKe6u0nz7Ivu3jX1df41Q4BpBR7oOKMrsoy7n62v_ghh1dFXa_TOrNC2Detq8tBfLFxyiKz34KLklXIHE1lpcVyYVrqvfcQ=w149-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A6A7UJNNSiOgT4kgmNslewcy_nHbzgD026xvdRdjrml7k71V8bf5oXzVYxN--BL3t-FGIYjkRgzdK6jD4NtS842ztnaw5Tw0hGVvFj8f2Hg5xKE1_WkRFRLK5l_vDvgNjj15kMw=w149-h149-v0?authuser=0)
LOS PATRONES ESTÁN DIVIDIDOS EN TRES CAPAS

## Patrones de Infraestructura: aspectos por fuera del desarrollo.


## Aplicación de Infraestructura: aspectos de infraestructura que también impactan en el desarrollo.


## Patrones de Aplicación: problemas que enfrentan los desarrolladores

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3S43tYn4anRo98MY75x0XNIiUoMfnDCEqsA0tDyyNmE5kDd5HVKQd0XfcE2nrs4bwsO1XudwPS17pxr1GxdLQHVGX8XchW5mwPy8gBiMlNpMgXl0HKxR_WCQV3pnk-6GCYmqQp=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0koN2Ojr4OC09g68JRJfNgKfUaT34k1NaTaunHmkemALkaBdjZUKy1IgU-bVIJVNsXxDl_uiWawGs9gL40km7PcBeR19E-dqcAedxArvcShJyDUR0anvklmlxIOOtKnFOP94mh_Q=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aTCK5By4ut2dtPPGjfPBaQz080CiLWReu5N1e-cMO22N6eUVHiKaa5ZglTGAVWaVnKucMf1_DKqxyschj1MkWvjEHIaeG1-cVRg8vTu2rgCU6Won1FqoSbZUv7diF6ti37NhtCg=w1280-h995-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_eHa4VWYH4uVQ6KnGqK1dptVXQ_GZujRw1dsTW0KX2Ly0dj6pKWiu-EaMJ7Q30Z5AGgg9IG_1QH6hhPYRY7HOu9BaSiZX7gqnjiAnaCi9cnXXYf_rQhPz6Bv_FFhNODVyCwsDSQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2j4gq7Fc1T5_uX64kJ8sQQWfkcvKbiq_jfdb0xPNubjNLPiHCo8jc2dr3jbyU9rvfGP0lnyk3xl8NSvieo-aIoWaJQmFJrpdz2pLIXNnGE_glKqu4ZplJr0NmM9a7D_fNQ5cliGg=w1280-h943-v0?authuser=0)
Patrones para arquitectura de Microservicios que vamos a aplicar
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EXY3QRvRpyp67tRj69AaGsJspuGXHJDL2bjNIY-qzkzygJVJaDud-q7UxqFYI8eg_7CFtlKe-8EO7LinxsqV2bV1viy5e2sycigUA5XSzmnkgDQjVZtzjiEnwP6CgVHT-iCwDKw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_ZN_WUZWYisarapYIOhDkHtbIsfweXnwOblNKMqyMLwCBPPCAw-tiXdCJU7UiGTma5PcxmXu4tCwBIQpxHkZR4pKPSxE3hS5qrQlHw_BWPV5f0dhysy_V2AK6emKWc2emD29j5Q=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QQp6LWd7GdEN63pswF4QogEOjjQ8LyeLNJtOHNb-wGotq6mTfplJoc5FxrFWeri-DRnzKosAveK-DZAU0TWMiFQjtTjO8L_OP2vGDajz5GoUCzb1Dumzw56Bic1h8Yu9yXvjTEA=w947-h620-v0?authuser=0)
Patrón de Aplicación/ Descomposición:
Descomposición por Subdominios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vU5tQNwh3bRviAG5EUtj7GRN6Jj2PP3o0koVcZ4KyFBctibhCfPSQNYcCfoAC5XXZrmIiS0mQg4WxnraOav1C-GWAHKXctSwl1h0XBymP0WpTmD6qZgObpgNDGAbNEnTywPVbzg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2auHB55FLV-SEiPCb3V585Mnrx7r1utJ64l6_imCkf3hCL-uVh85Ju9T430Tlq9BYzmHDvsuejT5QCKQBwXOb1u61ZFM9hsY6MB_zp7HQb5v7aa4wEFfkSGAVVwPn1Rw_49dwlyA=w170-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iv3V7pYcVlyWFD1TSa6_h4uAPks3gDvv_ldAS6I5L4y5TqDHABp2wIFfUDvpueqi3H_k9M_6itu-mhqzrKHWUvNOhQezcjQbhuGrsrWjYZ5k3nKk2evhEhKrEhRTdyn7_SR817g=w170-h170-v0?authuser=0)
DESCOMPONIENDO UN DOMINIO COMPLEJO

## Contexto Acotado (Bounded Context): Definición operacional donde un modelo particular es aplicable y está bien definido. (Comúnmente un subsistema).


## Subdominio: parte de un dominio, basado en una descomposición conceptual particular del dominio.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-GOEYAXL9gk5ta2oN-oSji6katpKqNi9bs65BSttYhAxoGlAbTc_dvQsdm1oPHBWL8S4x5EA7HC0nHqmluOQsASFyJp8-ASy7EGasIgooPaICJ-tN_nCxEMUXKg1FSws71j9Tqw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2U8AFip-URw44IteY6mduIxX5VzT5DJRJwN1tQlWspn_vc2bavig-mr1rR5ky9mcola8dUXoK7e_sgyW08YHACkAiHr7c_lVgE9b9qTxuDQ2QFpopNvSrY8-VcHN5GR5Il2U9Cag=w576-h472-v0?authuser=0)
TIPOS DE SUBDOMINIOS

### Core Domain (Dominio núcleo): Donde se realiza


### una inversión estratégica, prioritario.


### Distingue a la organización de la


### competencia.


### Soporte: contribuyen al dominio core


### facilitando que se pueda llevar a


### cabo. Son necesarios y tienen sentido en relación con el core y en ese


### sentido son específicos.


### Genérico: son aspectos que no son centrales del


### negocio, de hecho, son comunes a


### muchos tipos de negocio, y podrían


### incluso ser subcontratados, externalizados o


### comprados.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M0_DvNVErZPJtZ9MTav9SDl4P6-eQBV26N4B6nJLnEohuXebDkjr0yN99GXeXENNN23NgCTpP1gFptNBjm4Gk4ZA0WgwVvK2BK278Kj-_IC_JZitVjVDbLuWZmZSouDYrnIZj=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FOouY5BklGzZ5ZfXcrqz0F-Md88GqlBHxtX1843xlBB6_vjb8zjXONVmojo6hvEMLYsQldE5FuLECVlcDjF_yzmBvuKMuHqrnM3tETZ4NuioFKwxSw01VevGuFNKJ_908BQ8LCw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2493eVlXCwCOo8MbDZci3PKNkcQrhQWgkHtI2yW23OxvDHh8m7Z7sHq52Xx_fu3aWdPXI50p5Lp5sG2OafO1A-ITwoLNem6JOd7tVIMh2TVpHZ61FiQjZK95Es_E2TqeYoANyGgQ=w1280-h956-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fZS7to3wzVCMKNBk6K7GWRp8a7LEWIwPxMK10Er8Fyp0JuDf5AyzJABafMR7n4KrDYcVXWT-vYjedA7_qdjrwHq_bxxep78tnyloJF414o9FSw_cPFiH0w-6KB-IPWBJk4dDbog=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HAdxzPlV7LXVeb_Ue05RmjIt2MkRgJUQhntSHI3RDscVcOj16VEqQd0HTmDNLd4QNGmTYwSwrCJ0zimVw99SLAqmTrnec8cWm5F2b88gVTzRx1sLOnz9DDFT0Y3aPVmrPC-Aq=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m24ixB2oes2zbKYdgZUzijLR6vgfrFMOnep-B-Xv7UDOUc1IUmvlzU3ZRwNyLVjqvGjnGIxPxVEFRXBLB5aAHrKOERdPXur6Go47akoQ502YUrdHlXiPFZzV_PzDuvmrS3lRv9w=w1280-h911-v0?authuser=0)

### Dominios de Soporte Dominio Core


### Dominios Genéricos

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iO6eNBqqJB_nr-W5CU3PXSmGgeflhv0RBYKutDG2NiZB-FI0rq9EP16DaU6skAraNBk387uBj53i0GVVcl8zedQkKhKLmGRJGshG44_6mmBglGMLcKNbvB_n28-OA89oJXECp=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dPRYmhvCeE3Q8DfagzwakigHGT6y-b7qf0NJqnD8Msvmzxmr3MvHeH6h-UXXA4ToTULcp553e7Ccm30sEKeRjKQlErTiYXv4khSHS7ojDjNl5qJjzK-nLemiF-RLI3mzg64bp=w1280-h1020-v0?authuser=0)
Tipos de subdominios
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3C4h37bz-Qj54Mcw0WMM4V7UheA3S_3c691ojoLe-D6TKrRXFyK9_Yomk6UJGejsfpdk7raf5lbuf73UViZ2KJIuWUYgV2e7HJ7AWCiIAAchmc30cp99f4jD5WL1pXRQocMfPOWQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JYXJ-nkt09yi0QmrdRHVuOczv68-h6z7nzJnMHMrjFMxtV7xdczRXJzYNy7XtwCQAng8u7uJjIwcdVoaMyxAi29aPhnB5mVYTD3Lcvd4_ZMgOWbkzbRVipEESObBFmIyuEiOGRw=w1070-h450-v0?authuser=0)
DISEÑO ESTRATÉGICO CON SUBDOMINIOS
Alinear un Contecto acotado (Bounded Context) con un Subdominio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1x4mt04rZO2VR7uxy6dXCX089bFEuOEgUghHMuF5cG3ji7Tg7PwAn96q0ifeHmbyeg5FFL8UqfF1r1bK-VAboM7bwqZFgu_ZzfJNHSe2rlEcmJojRW0AecnBjziQWJ5DVedshwJw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0N_GB2GyhnTeHnaqSowUBDMYAKCjQucp7Ety23ZWcLZsKbqz5oznl8WqVcNxZKAgabYZww89Q6fnWqHg2rnS7G2aiTb8tJyObMxoWX-DYw_cDR2dRZAO92-I2X7MReajlCtKs4=w456-h761-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dMbsN-uSd9vjctqrgp82-KbiPbX6Wmq615H1-6V1a8qpDuEjrItXk_kc7VwfsFSYqJSWrx33oeTzKRzayMaztKO6NuOLpTJa_LhEhIEnfFatuNUFnfer_HItFUEmptI9znc2HaQ=w639-h238-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cFgfEM0gGvJ88xSeQGKGi3kQmUgaiwjEvCvd5unQBY7TL6ed-dTQuTsupro4XKvIrUt8kV74aQ9m0jE075wwxTBH0YLZ6QGrJLNmm4GRu1HfN0Eazu23rQNBnKspXjYypwaKXog=w408-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2V_6Z88aVh_KZWuCGopEotzaKu9vhAeacQsLLf8rEHGcwZDuR4TfEuJntXV3y9GrYTrdqDZJZ3Ih6Kzvuszj8T4dsxWcz5N9iHHNZkyNegYwjPGEzy7ZN9fMbKR_l96HfmKTqEaA=w150-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TPMVzv-Vt7pow-VGLgrwUvs6V6w8gscDnU-BqtWpXBO6P26-1tKf--20rfSyhkq8Kudv3AjrbiKsy2tZyySwEK8WT2yozdyPNDLVomifH1VpCehGfjozVQRxe-Sx3pO_Ht53s7g=w150-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lr9q9pqDl8AqhqJp1jPdW-VhUsDvIa3WWf7GTxaCwPlhENvwACeNx6ArenzFC_g3zILmRWVVnFrh1LaXH5uhF1W5Ph4VQHi0jxNWTuN8fK8SnSMnszS6k3u71aLcZKUdBS6ka5g=w150-h149-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EwWWlsguh-wyJFrJyWRCp_gCDcMGX23_wPVcEs7ftSAs6OF_J5nYV9pL8gGFRhjIHHp8DG1BYNre2n4lttnJEOsUARFvxiDOO-G2EYxONihO0VGTqzgtUx4u-6thV15peLJM-bg=w150-h149-v0?authuser=0)
GUÍA PARA TRABAJAR CON DDD
Identificar el dominio principal: El dominio principal podría ser “Gestión de 
catálogos de productos”
Definir los contextos acotados: identificar los distintos subdominios dentro 
del sistema. Por ejemplo, podemos tener "Gestión de inventario" para gestionar la disponibilidad de stock, "Procesamiento de pedidos" para gestionar los pedidos de los clientes y "Gestión de relaciones con el cliente" para gestionar las interacciones y los perfiles de los clientes. Defina límites claros para cada uno de estos contextos acotados.
La funcionalidad dentro de un servicio debe limitarse a un único contexto delimitado. Un contexto acotado demarca los límites de un modelo de dominio específico
Establezca un lenguaje ubicuo: cree un lenguaje compartido que unifique a 
las partes interesadas, los expertos en el dominio y los equipos de desarrollo. Por ejemplo, utilice términos como "SKU del producto", "Estado de disponibilidad", "Lista de deseos del cliente" y "Revisión del producto" para reflejar con precisión los conceptos y procesos dentro del ámbito de la moda de lujo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZHoBkxSKWz9axG3H835JatIO0ea0TPN1eAYg43drAr6maDlX--EZOb7R8UOpuYZYqlcmmhOngyCc3VxFfGGacbaseD0_0EPhuaeI1cFlqbXUIQRZOPJMahcAWU7opTDp3t-OX=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2A7TxdXFoQWD9XtWms051m9knXHvxYs6eYoDXbnK-nVnCfBLjeU5Yo3NbhCS3tYwTo5uNQmev3qFnRmazLeuukuEW_krDnmkIhmem1GcG-OZi6XKeRecTsLUnyeOGGRHph33_ZZA=w1280-h950-v0?authuser=0)

## MAPEO DE SUBDOMINIOS DE FTGO A SERVICIOS


## Cada subdominio de FTGO es mapeado a Servicio; cada servicio tiene su propio modelo de dominio; aplicando el patrón de Descomposición por subdominio.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qLsrH9ptMPoDHE5TxK2ZoHycQtWgshEpi1la5PHvYYaFvpR449neayu7RwbNplhbEXjuuE1SeVCwJt23sdfms1_Nw2byn0XHZ1_NYgWYExP4O5OtCH8fPMwp0dIqA427_VKYr5g=w1280-h720-v0?authuser=0)
Después de Identificar los servicios, validarlos según los siguientes criterios:

#### Cada servicio tiene una única responsabilidad.


#### Dividir la funcionalidad en dos servicios no debería


#### resultar en una comunicación excesiva. Si es así, podría indicar que


#### estas funciones pertenecen al mismo servicio.


#### Cada servicio tiene un tamaño manejable,


#### propicio para el desarrollo independiente por parte de


#### un equipo pequeño.


#### Ninguna interdependencia requiere la


#### implementación de dos o más servicios


#### simultáneamente.


#### Los servicios están débilmente acoplados y pueden evolucionar de forma independiente.


#### Los límites del servicio no comprometen la


#### coherencia o integridad de los datos.


#### Cuando no esté seguro, comience con microservicios más generales, ya que


#### dividir un servicio en servicios más pequeños generalmente es más fácil que


#### refactorizar la funcionalidad en los servicios existentes.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zP7Pj1fVQO16YAhsDn1momT7FpP1W3BPuY2oE9CyMlSmAs7zEq663OJ5dt3P1GHkZZFuf58Xe6J-Nb40C4tvlOKnB9Ut-diY3Y-9DGlJzGW329HF88UhFkOmftZgIU4o0t7cStg=w1024-h768-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1i7wHveTUx2RzeaaKDfOBQkjvaDrVWfiZ5u8hCWVU3D46hZ7eH5A1-LUVyjBr3SBg23p19IQwxm_IqIQUzyB_DNKVD90FCojnxnUmMbFnbK4byQ1nQgGXBZIaGAmlkw2uMD1-9KA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vzok_HOuaFigvV96CQd8wUxx4ec0ad0uagNfNqXnPKcAh51Rfq06B8mpk-9_6-FO7y3J5eaaiRAe7eRMSlGeuOmz8kwyMo3_K2nPUd96H_5_Phbnu4824Ltl2ABK16vwoWcNT=w1280-h1011-v0?authuser=0)
¿CÓMO DESCOMPONER LA APLICACIÓN EN MICROSERVICIOS?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nzU5sGpGX_McsWSVtBOn2qDbo86nMdAmnxO8jrI4FCvNxzm-apW4wdkliXtIAuG7FkaLdrMDf7MFaNTW7qEx22-17Jxsh5ndF2J7zO961pRd3d4qeh_kjDCIkkgLsbGydZ1lBQA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2x1lFWQEoPkDS6HbRba821fQX0Ney0Ger2V1tWbN_QDzafeF240OHCY_PnIUMy3m5WQgF9VZxP10AmeEO2efHzgHYN2R4wZ8NEF74Ds-2ECwN_f1cObvfGbNVCOmsR6zmZF6y2Ug=w970-h650-v0?authuser=0)
LA APLICACIÓN FTGO CON ARQUITECTURA DE MICROSERVICIOS
Una API Gateway rutea los requerimientos desde las aplicaciones móviles a los servicios. Los servicios colaboran entre sí mediante APIs
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0t4kKKomITQMKZmMFR9vknQpop3YY0cRAQcgTk9WejfACKVTzhb8Qmn4wSVncLccIIJB-4eT3sDB8csOcP-SubdCxRubmnXWgwd4Rb85AkEj5AmYynSwnKQwvM6wJIO27bvcMntg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mEKe8FZqBPk7vy5drEl0_tTU9_NMDBt04GQDa61ltaLgbAWqhRyVJSF6-JsSTrWh5TCxTYNbp7R4tjtte8ta9zFxYxVaHBMzv2bMxuD1dGi0cEef-lDPtWPHdi8NfeRqzwVXjdg=w752-h1280-v0?authuser=0)
¿QUÉ ES UNA API?
API: interfaz de programación de aplicaciones, es la parte de una aplicación que se comunica con otras aplicaciones en todos los ámbitos.
API es un protocolo específico y un grupo de métodos que define cómo dos aplicaciones diferentes pueden compartir y modificar los datos de entre sí.
Son importantes y bastante necesarias en una infraestructura digital moderna porque proporcionan la base para una comunicación eficiente y estandarizada entre dos aplicaciones construidas y que funcionan de manera diferente.
Una API normalmente se encuentra entre los componentes principales de un software y el público. Los desarrolladores externos a menudo pueden acceder a partes específicas del backend de una aplicación sin tener que aprender y comprender cómo funciona toda la aplicación. Esto es lo que hace que una API sea una interfaz de programador.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_bvagsfzx9gj6lY89hZDRyHDbdSorkbJeUHlXPepzxp5ZOgkBa81X3u3saIkhEboOCaP4EU-KP2DwvgoeJWTvMC7SCwA39D-BAlLcUgZ2i0ArMtJz1l60RrSpOd6yYa8oIFNdgQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3N22qsTfPzO16F6BrQ5BvolirEGoH_M1fSk8YV9_cRP8daQRWdACwyfcrT5-gjh6E4EzQa5N-pZNL3DaOn6GQCcfsvp3kvFKyUr6eMK9UxA18lXQ3LapfYmJcm_d-GsDAvdv7QTA=w752-h1280-v0?authuser=0)
¿QUÉ ES UNA API?
Las API son las que permiten las integraciones de software, o entidades de software separadas, para que funcionen entre sí y compartan información.
Algunos ejemplos:

### ⮚ Pagar desde una página de e-commerce con MODO.


### ⮚ Un sitio web de viajes que utiliza la API de una aerolínea para ver los


#### horarios de los vuelos y los precios de los billetes.


### ⮚ Sitios que utilizan las API de Facebook o Google para permitir el


#### inicio de sesión.

Hay dos tipos de API’s

#### ➢ API web. Estas API facilitan la comunicación entre servidores web. Los ejemplos que detallamos anteriormente también son ejemplos de API abiertos, lo que básicamente significa que están disponibles para que cualquiera los use.

API internas, interfaces que se utilizan para la comunicación dentro de una aplicación, con acceso restringido. Por lo general, las organizaciones utilizarán este tipo de API y otorgarán acceso a desarrolladores y empleados autorizados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38X8rp4rAsQvWOIOXK5vVKQpLacXtyByYG53Pea9ihBgw8aIuOw0fgUltNJuGnt_D8vSoFk7taQTGvRdPSfsID_FZT88PB3QYwAy1kLFJr-RT8Lq0UfNPwtQnORZMQAdc-wZdHRA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KfU5hCswxNT5_ERWcGCBOzz8Pqipf-FQWinC3JFNLTc19hMcmTyxPmTUhw6_hvwDOJEF-3KWLxLkmhLIPbZlzWAnyGue5E4ic9-6psKi594qKRTpOL7uUDr7hGKR7en91991F=w143-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qugzCG8kiVb74hxByJVKXYUeRWWnJWG_sdZscFOp25_Mb9qi6F5PHOSPZCdjjCt69OhxKxfzfLsa-3OVdtWCwVmy2Uqt3VYcVbTkZNNpFTCyCRCzI0ZzH13omSOdEfbiRM97IBw=w143-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OJLT7VvhwVzLsS8t9JJIY6_khw8fRoQZDkWbZ8E3ngiwgyYjkAn4z-QXPpCWejeK_h8oc0mm0h2r7YRwpSrnc5evVWur6YHheREibD3BjafT46n4fPDR7pAy_41D2rM9AL4p4Xg=w143-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iYYL-45Djng3ZXzYotvgRaSVqAdRDE3shTn6qD9tb2vEiOKowYxRS_T8WbPtxn9IBszmPItu6vqTxV0P-Y6QouQX796tPq8Q-9mPRVsTCjZhkL9jRCJZ4clw2ZZFBcfAhmEE_kQ=w143-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MKoj0ne6GCpgPn88mbDkK8H3miH8jASW1eP9XWpN9tk_bie5c7sqsYiGI_5iL-kYZYkwIuuzXsWevYz6dtDck3MxSR0XDOXHXr4YbNUAQ3vA7PU4kmxXCrqWnYXOyo9Cb0ijr=w143-h123-v0?authuser=0)
¿QUÉ SON LAS API REST?

#### La mayoría de los programadores dependerán de frameworks para crear API’s.


#### REST significa Transferencia de Estado Representacional, creado específicamente para el desarrollo de API.


#### Las API’s que se ajustan a REST son lo que los programadores llaman API REST. Estos son los tipos de API más comunes para integraciones multiplataforma y también se usan con bastante frecuencia en microservicios.


#### Básicamente REST describe un grupo de restricciones para crear estas API que las hacen seguras y eficientes.


#### Las API REST generalmente funcionan mediante el envío de solicitudes HTTP y la devolución de respuestas en formato JSON (o notación de objetos JavaScrip). El Protocolo de transferencia de hipertexto (o HTTP) ya es el

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MkyOZMtZk17NbRVkBmE7x0pw6qopOzAWswlhoNcDz6SUp5C-iMfY-2KDzbvwrFYncA-AM1YwEYVpu-BVskkYt1bXfh4EPg2u9tjip5zjeWu3mVuD89-FfXkPZYA-FsDoiKC9hIg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hVz08aiBisn-DDRjnkM5xg52zaF9RCMzr2d2H8Go8zdu3mZss0hHdTLYJnjvg13v3w77EL92esq4C0QwmH5lrKZBc_GXjICGj9Xv-r0efaLdwTt31IIUYcCaviO4iFSTUFEFf=w456-h761-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rQg79LA8DYToV1HeBrDbbLENstceRfgZcgh3N81G6jM-D8TTCgrMRJOVmzi7ZSZyI9HVA3TjtKgVDYAhpwl2u7yiMdgF2hSbBxqTwFDmzZBXVv_jgWUB9W-ZO0eLU5xMdSqkiUQ=w639-h238-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1m9JMfopNGyePu4MUy7zOt5cc3-fBD0my_YYvgIuoOkRI9yYH4B-GFQzkRbcTS7lzVyAQbXf3ugTrwRwczeEF6fAujiEyJJCau0SPEYDfpnb1dvu67S9aaZE4oJ_xNtnWlU4dL=w408-h141-v0?authuser=0)
¿QUÉ SON LAS API RESTFUL?
Una API REST (también llamada API "RESTful") es un tipo específico de API que sigue estas pautas:
Cliente: una persona o programa que utiliza la API. El cliente realiza solicitudes a la API para recuperar alguna información o cambiar algo.
Recurso: cualquier dato que la API puede proporcionar al cliente. Cada recurso tiene un nombre único, llamado identificador de recurso.
Servidor: lo utiliza la aplicación que recibe las solicitudes del cliente y contiene los recursos que el cliente desea.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HIM_vXJElpWmTQpU5SWwO2dt0ZB3VLDJgoexwvQ8q0e5LuEr56XItX7V4qNHXIpZuydcNm1gBOYYCkoj2ycCq3KyGXZQhnRBsv5pppjKWFgdRGuzdExmCrxRmD6_tGcxbyW7n=w1280-h720-v0?authuser=0)

## API VS. MICROSERVICIOS


## Los microservicios son estilos de arquitectura de software que dividen las funciones específicas de la aplicación en "servicios" o componentes más pequeños. Cuando los desarrolladores crean una aplicación de esta manera, dirán que sigue una arquitectura de microservicio.


## Para evitar confusiones, usaremos el término "servicios" cuando describamos los componentes y usaremos "microservicios" cuando hablemos de toda la arquitectura del sistema.


## Una API es la parte de la web app que le permite comunicarse con otras aplicaciones. Una API de software define un conjunto de solicitudes aceptables para otras API junto con las respuestas a dichas solicitudes.


## Un microservicio es un enfoque que normalmente define cómo los desarrolladores crean una aplicación. Divide todas las funciones de la aplicación en programas modulares independientes. Como tales, facilitan tanto el proceso de desarrollo como el mantenimiento.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nPdEJdfTnFGig0UKbOAHsLz0YmPyOxjmrRVFNVGq3ZnudOyNGjItVp68RKKZ9_dt0pf5IKuhuNY0hGqz5f1joGSpcnbUKqf0ohw43x5AkTHAN7lJbnWqlIroGIVkuwGcxx404=w1280-h720-v0?authuser=0)

## API VS. MICROSERVICIOS


### Si bien son bastante diferentes, las API y los microservicios se usan frecuentemente juntos; porque los servicios dentro de la arquitectura de microservicios generalmente usarán API para comunicarse entre sí. Así como las aplicaciones usan una API pública para integrarse con diferentes aplicaciones, un componente (o servicio) dentro de un microservicio usa una API privada para acceder a un componente diferente dentro del mismo microservicio.


### En dicho microservicio, cada servicio tiene su propia API que determina las solicitudes que puede recibir junto con las respuestas. Estas API normalmente seguirán los principios REST.


### Los microservicios utilizan las API de manera diferente. Algunos pueden asignar varias API a un solo servicio o utilizar una API para acceder a varios servicios. No todas las aplicaciones siguen un emparejamiento uno a uno de API y servicio.


### Las API prácticamente tendrán usos más allá de los microservicios. Las API web permitirán el intercambio de datos entre diferentes sistemas, lo cual es necesario para que muchas aplicaciones web funcionen de manera eficiente. Además, las API también se pueden utilizar para fines internos sin necesidad de implementar un sistema de microservicio.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0epAaPkAF6lH8ECB-lkiPvLntvK3jdV3sdEWrKZCqozoP-2ATs3XP_YggGPcnZlMtFxS9U0dY95DtjcL1pZJ34Qi163Wkr22UjdRbN0E8dlS0eBkBEke2Wmuj-_k1w_RgcTG6IFA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0X4tW-hTtciWKAEKsilIhV8-alKSn4AR26Pzu0KhMZ7RntuGTYiBZdUusv6ODBWZUwAZVi4y6wEBUs4rcGr_JE2Pjj45TL0S33Ec7meKnmFhdGVY4RN_hqsv6gHDACIZGSLrKzaQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13fngDcKYNE95NmBRAVeEzU4GeQCQoKFZixlVn-wAmj7FBWsyALD1aXSzLXONOVX9vXMunFPLazRKZ4Pi5lAHAbohXxsdE3BNOYaDnJnUhjAoGl-r3SBxc-Eln_X0H_Ibf7Enj3g=w1228-h686-v0?authuser=0)
Patrón de Infraestructura de
Aplicación/ Patrones de
Comunicación / API Externas: 
API gateway
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DDerfc7QJUtNVSVYIkz-kZB9unoPqKMLjBRgXJtm0rLofl7kxcSpLJq7ZDX6d5onDZSPa1g60mfbVor-fwebScyJLGSl6ioQyqIttstD4ocm5i0uRLvtkgZIbXrrAIgjZYupiUQ=w1280-h720-v0?authuser=0)
PATRÓN API GATEWAY
Contexto

#### ▧ Supongamos un producto de tienda en línea, con una arquitectura de microservicio, que debe mostrar detalles del producto. Se deben desarrollar varias versiones de la interfaz de usuario que muestra los detalles del producto.


#### ⮚ Interfaz de usuario basada en HTML5/JavaScript para navegadores de escritorio y móviles: HTML se genera mediante una aplicación web del lado del servidor.


#### ⮚ Clientes nativos de Android y iPhone: estos clientes interactúan con el servidor a través de API REST.


#### ⮚ Además, exponer los detalles del producto a través de una API REST para que la utilicen aplicaciones de terceros.


#### ▧ Los datos de detalles del producto se distribuyen en múltiples servicios. En consecuencia, el código que muestra los detalles del producto debe obtener información de todos estos servicios. Por ejemplo:


#### ⮚ Product Info Service: información básica sobre el producto, como título, autor. ⮚ Pricing Service: precio del producto. ⮚ Order service: historial de compras del producto. ⮚ Inventory service: disponibilidad de productos. ⮚ Review service: reseñas de clientes...

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QgiZ1vcI_x17ciJYXrLbNWuvn91obyKhTiYMQKLZwQk0-BS5vn12u96UPnEgdE6-hqH8YmyLsRhu1THL4naehRXShPZHIzvyuqFbC3vWEz6McQb5QeUnmv4WB3GN2axxSfpNH=w1280-h720-v0?authuser=0)
PATRÓN API GATEWAY
Problema

#### ¿Cómo acceden los clientes de una aplicación basada en microservicios a los servicios individuales?

Desafíos

#### ▧La granularidad de los microservicios suele ser diferente de la que necesita un cliente.


#### ▧Diferentes clientes necesitan datos diferentes.


#### ▧El rendimiento de la red es diferente para diferentes tipos de clientes.


#### ▧La partición en servicios puede cambiar con el tiempo y debe ocultarse a los clientes.


#### ▧Los servicios pueden utilizar un conjunto diverso de protocolos, algunos de los cuales pueden no ser compatibles con la web.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05S__6RLXjMqbSZS7o31oJvVsIUiq72nezSrW5BJTSw_LYNHyr2Cr2ipbi7U6BiKRWVy1x1J6C3BWS5k6uQvVsNDrLIhHfZwvVm1W61LWgbI6cODqTm2im9V8ThkhAf3uHS_e7UA=w1280-h720-v0?authuser=0)
PATRÓN API GATEWAY

## Solución


### ▧ Implementar una API Gateway que sea el punto de entrada único para todos los clientes.


### ▧ La API Gateway maneja las solicitudes de dos maneras.


### ⮚ Algunas solicitudes simplemente se envían/enrutan al servicio apropiado.


### ⮚ Otras solicitudes las distribuye a múltiples servicios.


### ▧Puede exponer una API diferente para cada cliente. ▧También podría implementar seguridad, p. verificar que el cliente está autorizado a realizar la solicitud. ▧API Gateway es responsable del enrutamiento de solicitudes, la composición y la traducción de protocolos. Proporciona a cada uno de los clientes de la aplicación una API personalizada. ▧API Gateway también puede enmascarar fallas en los servicios backend al devolver datos almacenados en caché o predeterminados.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IfGDRIV3dgQYdjBdX92VTXQbGi-HDUuoWeQxk7drCPPNHsfWcCn8wVanLh1GtOfrOJL7qqvXdp6Nvj1aJuJN4VGmiyZXvj48rCZICJ9WAL9Gc22a8WE5zQEortz1USWGBLoZD=w1280-h720-v0?authuser=0)
PATRÓN API GATEWAY
Desventajas:

#### ▧ Mayor complejidad: la API Gateway es otra parte que debe desarrollarse, implementarse y gestionarse.


#### ▧ Mayor tiempo de respuesta: debido al salto de red adicional a través de la API Gateway.

Beneficios:

#### ▧Aísla a los clientes de cómo se divide la aplicación en microservicios.


#### ▧Aísla a los clientes del problema de determinar las ubicaciones de las instancias de servicio.


#### ▧Proporciona la API óptima para cada cliente.


#### ▧Reduce el número de solicitudes/ida y vuelta.


#### ▧Menos solicitudes también significan menos gastos generales y mejoran la experiencia del usuario.


#### ▧Una API Gateway es esencial para las aplicaciones móviles.


#### ▧Simplifica el cliente al mover la lógica para llamar a múltiples servicios desde el cliente a la API Gateway.


#### ▧Se traduce desde un protocolo API público "estándar" compatible con la web a cualquier protocolo que se utilice internamente.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_SvH8zYw9lIpJ2C3fN9DgO9oFKS2x95I65HXUtOgfiHUxto31qFGESdSlCPwN5WkVzQpyPTPiSDnX1UxweO5_MfAKN52qC5b2ut2nc6wTDjrtVIlNoaoyoe8ZFABvjmQBd9KX=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WcDL5TeNBCJAGQXZbNhVCE2Vx6IDrx1rc5BoOkjcjPTtFFvL2E1KnyqPwbBCT8I5thDSt3TypO8BVqN9a-6SaPP5x1M5kuOL6333XJGhmttaf0HMUfV7K6mgRq9ESZP58muVj=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nPjGTAPWx3M1rbPby9bJaG8vuoUMCtyZE9aaxmHFls4DoEpFrWTDfkoaSvi1xberSrNYGhJQGY1DI-tqFyKzil9eI2LdFQzSFOOQLMIJuTYjWyTDN6a-FNJiZwSNuY39xFwqisA=w905-h387-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Xn09qnAxOgqB4a-BKaZWqHDCArSrvMcDmcqaTHW6AWrqV6krqoKonoW_KFIEl1MkVo3uXC8sPlq1nIEoegp4SOqz3pR3CGf5VlLFwFlAKUarJ7kio3_ptVakP0JpfxM_JHF3u0w=w916-h466-v0?authuser=0)
PATRÓN API GATEWAY

## Microservicio sin API Gateway Microservicio con API Gateway

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1M9iHJUPGMcVoxx7lmIytcjjw8iI6RW6prrID2HmPGL0JwDCtVGEL0ZLbRqxYI2YHpoXl70C_9S_6P3er-dzqTKX837AQMoiCSyK_t93hOe6oe4Q7VDxE7Ow7KbesutXWXRBeaGw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02JVbPG5A7FahSFF3UVSTvUDbUs-lt655b8wkwZi2JH-g1CRG3rc9hMD78SgEHaCqBOMtTCVVD3Vdsqzdqa0DOhhJdTCHs-DqXZ1FDT5thMZt3T0mTdaSROvcHAYlJzB2NGkqy=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X54jm22D5_EULDOAY8usAoXV_kJCPBMnCqCbaJwKL1_Dv6tOwJDSR2VlgB5-SsWN43kvQGGtBPpvRqUrtlY1zm0GQmdRDT7wSXy22VGPcWvNizbs8BEbpc3hx2hAgxKRKVqYd=w484-h480-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zxFn4fq82dFmQ8yY_nfgHXyEJn5-gZPKd7g1ONPdWhKtr3femosT7rI7lFcS98QON34dHmO_TyI_joWsx4b5H4yiyNSGOC42uquN7oGw6z4k1wwiQvVlvWvaqOroSHLsX9-QdBA=w484-h480-v0?authuser=0)
PATRÓN API GATEWAY

## Microservicio sin API Gateway Microservicio con API Gateway

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nwj0iy884m3wPyoKjPpZwrxTCGk0JVvTvkH_qcYFtLRJfKv-b2t-G3mYSYZSSEDBBwJPT4K1CSX5ScWAkiQGKHR3Jk8K1qUXemeUIO2SsOhit6NNKZoi3z5mEroIzobP_yCr6gA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19RF8f48eoGNO-VEIvMNTgaLStZxz3MjarfED7dBpeOj-6M7dLF29JEhlSTgn-NnIp8aLzY-XeovBTBKPVNC5NY1WjmnE59HPyUVWACh0LAgjwhOoR4Iju-n1Be_l0o7puMr1n=w1228-h686-v0?authuser=0)
La API Gateway cumple la función crucial de ocultar la ubicación y los detalles de implementación de los servicios vinculados a los endpoints de la API Gateway.
API Gateway de microservicios se abstiene de albergar lógica de negocios, orquestación o mediación, defendiendo el principio sagrado de un "contexto limitado“ (Bounded context (DDD)).
PATRÓN API GATEWAY
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Xw9kiC7UCzli_k7YKy0WfvWmU4aWhFYCXRyyfOI3XyjV8w0clJIw0kD0uqZXz9HBibnZ_k51YpJdSIYzGXk0EVD9MQEiUOTBHb_aL-OmwfjGAxxMV3Y1p1zcjMra7oa_nma96tw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xgiRX0HiXX8f_qmZ0Mb4kwtLtbS3pHJrUtR2R4P1TJ0i8Ivq5dJz4xbBekEs-Ki7ki835yP84M00VSxtRytTUm-WUw1J-Ha3gT7UC5V7dTgC-RH_DsQ9HzXZU8IfhJ_xwv03n8A=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xJG5ugkeFdzfWagD32ikp66sOZkRp3GEyH6mB2MMhwAm3gAURD9pCptXug3dgTFcC-dktXwiOd-M99XsU7fM1ksj8M_762Bm4zGiZZ6AwcYSAZbDvMK8MyI6Pu1c70lsI7p5ALQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11x6TCXl7O68f3xmzQGNS7JPi4Jg1zQxeVM7P9YVK3k2Oj_I9RATTVgbAxCr2kJYFHCC7xN9_aH43P0ZFl1T4K4XwGU6uf5K7vFrt4bB12Uocz7vYMwaH_LC-oEUNLfPn_9moXtA=w456-h761-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ld87vNOXp5j8GK_W51EVxlZ5v0LTmF6GQQkWZOwpPDhNlHq5sB88ow_uysG2LO4fyu8CJ8HM3vewS13D-S1S6JuNUmtJKuBmX5BPUSmNVeJLiw8XNhwCIua72ZXme6NJ0sBXs6w=w639-h238-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e5N_kXmJyjxcLhZmnItcY8H5wBFoLyz8BbtERnlKYYKj0hrF9UFU-9_NYrXkVWXb6cSiYPfMdhPOva95LB-stuBsi7iP80jGjcwQ5_2lSltYj2Yq0900cw5avPp1K3TFc-XOlYw=w408-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QHcG4kVMmFuwE8VVq8AF9l_Jb73mzHkJJHrhbkLFYmO1kQiLSaEXNX9lO0ecmhfjM-8ByJ5hvO5q01JqOchNOcq6dMKldu4h-erNPi8JJneSXOVmOjpKHJYUGdLhGKBP3hv9Eyg=w107-h107-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Er1OXA_EwxVl6aOVEOnqRBk9oTUZZoj1C08Q5UshKRyH8qVSmR0RcDlB6bRWfOwpZ7OqytkbnLFNgYyJ834C_CDGoOC1Tn83U59X6IiSgoSDGzS5pBcys87BdqWVkh4WfIiQ-=w107-h107-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21aTnQjoCU4o9_MMIRtd1Oy5sOVL46RVz0HCaJicXtID1B1ByfQsn2PnhPmnqOi_Xqe5z_n4Y_-vT6fmX3Zr0FFYOvwbo367YkPUoWVwNwK7mfUnjtPxbTiQh5a_vQzjENe_H99Q=w107-h107-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wBEvpP5pcK6j2WLq1EsrI4we6ZlH2IA3HrnCrpDxwgVGHwjaGeaQp3De2sIB1cFonXHwufubVVi66xA1vtZyKvqnvYWfJFoeElrZsp7PmYePUM5xWZBAz09M5hCEj93IJQl_b=w107-h107-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rt4QqlWcBW8FvryXmtWSe8tB9vVGBCLFLYfxBpEIxLgBQbhIoEBMpeHOzwq3z5I4jtNBEb8U_sp89BMYYQT3bJven28YKs5qNSA2DMFbHlD_q-TaUlHLe9XNEeT02AK8exXXMKA=w107-h107-v0?authuser=0)
PATRÓN API GATEWAY: ¿POR QUÉ USARLO?

#### Seguridad: cuando necesita asegurarse de que sus AP’s protejan los datos confidenciales de manera confiable


#### Escalabilidad: cuando necesita mejorar el rendimiento de su API mediante la implementación de funciones de rendimiento, como gestión del tráfico, almacenamiento en caché de datos, etc.


#### Interoperabilidad: cuando dedica demasiado tiempo a las necesidades de mediación y transformación de datos para solicitudes entrantes y salientes para admitir diferentes formatos y requisitos de datos.


#### Monitoreo y registro: cuando necesita una cabina central para el registro, auditoría y monitoreo de sus API’s.


#### Monetización: cuando necesita una manera sencilla de empaquetar, fijar precios, promocionar y monitorear sus API durante todo su ciclo de vida.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NxaVvRRlUiiMlHDB-M71vqTnKRMivvBokmqZ-mEGQwY74c1mkqwEww5uLwEP5qwk8p_ekd8F3iBNZvfsYFEmb41GDwU3NuKpHZCPTmLgN8KMF8Iiin7NpIk6yBCjCD8x7ITunIQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ziWMNIhbH-eQe0dIuM5QD-ID_kB1Fwf_g8hBEAlrFRQ5P7PvVIr2maP5tC2tya5eFV16yD1BlXq4XMsrXxCfqktyyW9jx2K0nyOFm-nfPgrt5B5MmIBkb36x9B3oabUd2MqH-=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mn1K2jz3E6T3zSVnPYe6DKUIHWtkbShCwn-5VdV-C7-LuuGJEfp0op1nmq-ZwHlSQbIbbneRGYlOICQT-jAeuQ9GVkb-la8IKsIPjJGIVxPux1s8O1NhOZGw6KttnaZLqu-vEEA=w1280-h464-v0?authuser=0)
FTGO: API GATEWAY CON REST
Una API gateway debe protegerse de servicios que no responden como el OrderService del ejemplo
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DPWt5zm-rSY14H7RjtwOE59E3jAa71V3Ztw0F-UUwS6Jcy-4l_JKFg2Fx_u8QGm6uZu9p0FCS3DeY93WV7bi4F0EKrq-DW8TQaSRrQVKYj4T5IMPOZm360iFWzR2s2Y3Gma0w=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kMesFMgVRKaiDVPIe1WnfDhKS_n7BvQMiQCLoPlLIyRTsxAqOHx21L9hoUnghIApTeFcsptqPMV_NffYUiYnsNZtLRLZ1pX36C-kPeU45KKMudntm2k6wqrrW_XhcUkVpqPmoxw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cwoLqzJtgQfYC8GHWpg7_yLqmfoI5zK2nnXlCWCnSCeK99F2izfx2rYDUsDqyguaslNqTGJaSQUEyYf8h_xuzEfy1P1hAQGXyYmBZy8EakcS6PsMg_13MSUMDvzNKaSkME4QJOw=w1280-h656-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CPxmhexbG8j1icHo5RkEE6PjyNJ3dBXXw0yg9w2n6QbNAZM2cRnikJID-52P9txjor8YlFTWtY3o4oeKrZx7ebbFB8bvLw_1PgTE9XA_dC8_JDdG_Z09G5KGXC22PZEP7fx0pyA=w1280-h720-v0?authuser=0)
Una API gateway implementa el

## endpoint GET /orders / {orderId}


## utilizando API Composition.

Llama varios servicios, agrega sus

## respuestas y envía una respuesta


## a la App Mobile.

El endpoint debe tener una

## estrategia para manejar las fallas


## de cada servicio que llama.

FTGO: API GATEWAY CON REST
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3C7sIMvT_SNXxKC2N61DWYcf19HjVsNhVDf0mjXtUhFZfq1KdrWJzL5PbJXLgPXIwiTg68gw2YeorHJqnslctI0VmJCvw4NKDGMmNLaHD01LwCfY3hDZUFpb4ELdKLzleeEDFP=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1c0lmdbh2gqBI18rMvpkOpELkCvcuJYiHJW3F9K7UjqLl63pL5LuaYjtbxIs7gZDwOO0JdM_lh1Douix800YGkpQ7w-J_DrgtymPz6EGHCdq514ecP4jdp1rGsg8Sg332i1zDyvw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GkQspTz1Beq4L6TUph3uETeiaTrP4GylfSZWa4mp-N6UpDPGQKji3ngZSIQvHTZYyNJ0khwtnKE8ZTgXJ9c1tNwoW8LI4ZmZ3a2LKw-VLcvqRTQSSfUyJ09rzgoSa7f-dWqUHrA=w765-h399-v0?authuser=0)
Patrón de Infraestructura de Aplicación/
Patrones de Comunicación / API Externas:
Backend for frontends
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XLrxSHQdxo1ibiFZfzIT8JyEqDWGWZGd6WkYFDLD8o5dipxqc-Iq38J_ImxOrUsVkCu7GIA5NNOZw2pWTOm1LrAaBayoQdz0-XmWbfRUPdNmDekyGIRnBggfdi15xLB1HrG-Anw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Z7Uyzur-kHvHaAfnNBZ5dWcyupDFIx3nfiEPYoA3Dfcb1qIxauYlmH6xDGZ44GfLkZ_xaXjRG4jaQtPjnsf0c3DBlOU4Dq8AAsmPyvgpThYUeeJ3IX9fzy5lgWWUh1GFUY7U4ig=w1024-h642-v0?authuser=0)
PATRÓN BACKENDS FOR FRONTENDS VARIACIÓN DEL PATRÓN API GATEWAY

### ▧ Define una API Gateway separada para cada clase de cliente.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ge5jY4liErv1P7nhqGOPMvvvxjxj63b1k_kSaRyJHPz6LuUJFgwQqG1PtxGS6XpsaUXYyZwolgSGmvrlNn0iEePcHnAQopbX5eej22HC9Mx2JCzYLQoHYQgL2OuTwVVWDXYtxzA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eBraZDk68uEdmmO7zCgDewt9MSY_6f6dU4iX9jXy5rFdqhXrx2PIZPF6cu4BO0izP6a7Rdk4ggeCIDmCn8nrQz7K921cahzJAfZ2LgNI3-SjxA3Xw7QEqbk5FQipgdt22my39Ng=w1235-h507-v0?authuser=0)
PATRONES CAPA DE APLICACIÓN/ DATOS: ARQUITECTURA DE BASE DE DATOS
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fUWLag6KSxonSX7wkbFtZL3K1SMZpMvaUjWs08bLqtlKnyRTiYFFGAGuk1nPBoVn3PpvI-ClJWu6jp8Fw8UreWWqbZJMTjhFyFKADdcDX7m8cgMqYe2xo-82Dq7e1F_Ktl8lzuQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nHtxMg442i8fkvhZ46Sjt54ZQhaZUUzX_Gp5gO4v-qnGZ6zdLLFB8GYCwyG2VOWr2BglWesLDlZgoRBLzP7Q9-4eJCsVs8GeuqZQPzlSIhH8uQS1kHHM32iheFHCvLOf-OUIB_w=w514-h514-v0?authuser=0)
Contexto

#### Necesidad de persistencia de los microservicios

PATRÓN UNA BASE DE DATOS POR SERVICIO
Problema

#### ¿Cómo manejar la base de datos para microservicios?

Solución

#### Cada microservicio debe manejar sus datos en forma privada y sólo acceder a ellos a través de su API. La base de datos del servicio es parte efectiva de la implementación del servicio. No puede accederse directamente por otros servicios..

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32i3g14SBb6BA2r5m-z_R4mBJkfV3rHOyRV-PJl7KLvHv7gZ0yWWSyM2PhO30F5XYP8DjlaCDRgqErtWuc-KJZgX0n-s2R2f1N6hOLNUvzB6P4vJPQSeQRsLJJlN_u5NSIHwZbUg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HklMta-XgXIOWY3_Q4hDD28RHUekzNiR8Z7mmGW8CbWomPS4HYOWEdL7fnh-GPAoX2fXC6SBzCfmKFfUym8FKScfko72wo-Bs60UkDrB72ynGs9jfirAW3C4MNhF-LuPmZDz-lQ=w1098-h310-v0?authuser=0)
Se requiere actualizar continuamente el estado del pedido considerando los procesos que suceden en el flujo del pedido.
Los servicios están conectados a través de múltiples fuentes de datos.
Asegurarse de actualizar los datos precisamente para completar un pedido con éxito.
PATRÓN UNA BASE DE DATOS POR SERVICIO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RsNGj1JxqRwkjS6YjdMjvW4fJ3_-UzgEzlQHd-IiCGHLrZ-eoBFnC4WX6-Ooi6G-PifNT7gAG9S9Q309NjwTTngQeA9j-nIjKdh6fMF8pItJoUtmG5ohp8D8FFlCyw6iY5uo8eA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Gu0wV5NkMmvJZsgCq9c3PwlY02yyWsXLIj2jFd-gqjXS_WIyCY8GyMD4rot1aLCNhDzKdnTXMzCaT9NU3IypJOn8O72MgJlJb0PorVFcXEOSav1NhO_sLkeggo8dXwGJvdhxcpA=w1133-h568-v0?authuser=0)

### 1. Realizar el pedido por parte de un cliente. 2. Crear el pedido por el servicio de pedido y proceder al pago. 3. Procesar el pago mediante el servicio de pago y enviar el acuse de recibo al servicio de pedidos + proceder a la preparación del pedido. 4. Preparar el pedido mediante el servicio de restaurante y enviar el acuse de recibo al servicio de pedido + proceder a la entrega. 5. Organizar la entrega del pedido mediante el servicio de entrega y envíe el acuse de recibo al servicio de pedidos cuando se complete la entrega.

PATRÓN UNA BASE DE DATOS POR SERVICIO
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30c6dtQ3RrcWjpzAuhmwAcVAfSvTUdJX5OpMBFykdgVgdsr-4GIrK7jUn23uTAsCgIcNBwOXJOTOt72ENqYW-9a2mmqlJzgejBUC1m2mJqMLBsFfNCnKVEgABCg18CW64jhTRmGA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n9HBeD-h0vAwzcMsYonHj_38WkdqnefxtPLJX795p2uFvuY_FUrCYx1tGGTu681bf03Tbhz-xr4xybM7TGe4bsWxLAwVcI4ekI_UbLb-_ctyxUw9LuEsb4hAu81kxkLiuzfoEcQ=w1253-h883-v0?authuser=0)
ACID en Bases de Datos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mD9u7K2omVSeY4qwrQDlGmQ3B9QMczNzOrPKItc272ajgh999QbO2OFJBXSl3HfjJLQMj3odeRaaeuQZLrY6O3NxsSsT4zyyRqa9PIF5D5_5DuJV7O4ngtu_z_aaDZ_k916dPJw=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qXi_GPBXwUZ-n1LPAoM3F8sw9pJA1pniHtv_O9y_7cY1k0agntIg51f3MazY7VXLTy3jUZmQwHxXQPglbyDZVsuN5t6uSwbMUKySWqpBVSQItpvfbLdiAQYGWVADAvviMW70L=w830-h283-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rlRPjVgvuvBJKweztPk20iRTR8cYwfuHfDW4ZgS5bLvVAwX9Kkhc7ZQnmy0YowgZ7F8RI7a8WhIzifiyCdwZbFT8nfk5NSnrh9YaclndQ_cZHcnK1y75G7CrVvxR_7HBSDgIJQQ=w830-h429-v0?authuser=0)
PATRÓN UNA BASE DE DATOS POR SERVICIO 
Gestionar el nivel de aislamiento de transacciones: define

## el alcance de la visibilidad de los datos en una transacción cuando se produce el acceso simultáneo de otros servicios. Dicho de otra manera, cuando un microservicio mantiene


## un objeto en la base de datos mientras otra solicitud lee los datos, surge la pregunta: ¿debería el servicio proporcionar


## los datos antiguos o actualizados?


## Mantener ACID: para garantizar la precisión de una transacción, debe cumplir con los principios de Atomicidad,


## Consistencia, Aislamiento y Durabilidad (ACID).

La atomicidad garantiza que se completen todos
los pasos de una transacción o ninguno.
La consistencia garantiza la transición de datos de un estado válido a otro.
El aislamiento garantiza que las transacciones
simultáneas produzcan los mismos resultados que las transacciones
secuenciales.
La durabilidad garantiza que las transacciones comprometidas no se
vean afectadas por fallas del sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1EvMCQywzu7D6E-EDqzEMgjHddzGXimwSZsoD0xWWuAsprIzQkBY6m-ciDGpqi7Q7ccIRd1FPINOdXoaTAtR8JvqGWzyUYdPL-5m1ekZ6PIk51nOnQea8qsFJtG17dimZevr7i=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QeBVM6dLOFzb3XZ2nsjTI9OG_QWxRTC7vNrt0TwcBU9wZ58lqo8BbQ5LTvd1kls0ObWcovhAXxqgj41brtCWOXc3JEX27VE3gTxAh0UaP2Jp3cBOke6H0v21jZ5mJrQkrilKDBw=w514-h514-v0?authuser=0)
Beneficios

#### ▧Bajo acoplamiento. ▧Utilizar la base de datos más conveniente.

PATRÓN UNA BASE DE DATOS POR SERVICIO
Desventajas

#### ▧Implementación compleja. ▧Complejidad de manejar Bases de datos SQL y NoSQL.

Recomendaciones

#### ▧Composición de API ▧Segregación de responsabilidad con una o más vistas.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3O11JOVyAlIk06lEg_Gc8_p-Fwp77NyLoHsT3ZgSTIWBOCorOMfligLOjARlyglPdaSoQvLWYpJMvhplPlb-t9doGat5xzdQV4Eq548vbeBv43_oz480_yHrfIXa_rEsEp5AtT=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-e4YaMAH7Hya-xkLg02VBr-Mf0yZD9Ho7ezlbFccHWIXbyrbvfu41jRBySHHolw2lvQ-KKorzTcmCSjCrMlFehhF9OY8Y8V4CViqzjMmIc6X8RJyPZSgBzKXUefLvhDvVIpgjug=w760-h650-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nXnm7rNgcIdUqXzmhL3y5NXRlLGwWma6CJjysEClnrDn2gFMtfNiQBk8Wg_iHTYxcZOIJMuLI1UjULP1cptiAqiVYn6UEw_NX5XBLyg1sZXNOgDOUjmtPqmMTBZrfdF8_oGDZEw=w1280-h785-v0?authuser=0)
CAPA DE INFRAESTRUCTURA PATRONES DE DESPLIEGUE

#### Tendencia a eliminar las máquinas físicas pesadas y de larga duración por tecnologías cada vez más ligeras


#### y efímeras.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13ibT392gtbaUXukknG5upEkykHxeonE-nVZuU39N0i7A8cVYjfC-fsf5ROfQk1vvaoW5WgUQ1ho6JqNIIpcEgncdNsb8TMocJmFufy4tILtfupdfKSzMUQfk80hbojVVcK1MrPg=w1280-h720-v0?authuser=0)
Contexto

#### ▧ Ha aplicado el patrón de arquitectura de microservicio y ha diseñado su sistema como un conjunto de servicios. Cada servicio se despliega como un conjunto de instancias de servicio para lograr rendimiento y disponibilidad.

PATRÓN SINGLE SERVICE PER HOST
Problema

#### ▧¿Cómo se empaquetan y despliegan los servicios?

Motivación

#### ▧ Los servicios se escriben utilizando una variedad de lenguajes, marcos y versiones de marcos. ▧ Cada servicio consta de múltiples instancias de servicio para rendimiento y disponibilidad. ▧ Escalar e implementar el servicio de forma independiente. ▧ Aislar las instancias de servicio unas de otras ▧ Crear e implementar rápidamente un servicio. ▧ Poder limitar los recursos (CPU y memoria) consumidos por un servicio. ▧ Monitorear el comportamiento de cada instancia de servicio. ▧ Que la implementación sea confiable ▧ Implementar la aplicación de la manera más rentable posible.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39y0za_7gJ3B7TyQCiXqUV_KgdVmek-tR5XsHtkwOnHyRhAOekCedEC1Nck5AwPsRYPp_k_bGno1_d5F3eU_b4MTVkjncwdi7QeneyYDfyA1XJjzFU4N_FTZKNnWB5rOmDSdc5qQ=w1280-h720-v0?authuser=0)
Solución

#### ▧ Despliegue cada instancia de servicio única en su propio host.

PATRÓN SINGLE SERVICE PER HOST
Beneficios

#### ▧Las instancias de servicios están aisladas unas de otras. ▧No hay posibilidad de que entren en conflicto requisitos de recursos o versiones de dependencia. ▧Una instancia de servicio solo puede consumir como máximo los recursos de un único host ▧Es sencillo monitorear, administrar y volver a implementar cada instancia de servicio.

Desventajas

#### ▧ Utilización de recursos potencialmente menos eficiente en comparación con servicios múltiples por host porque hay más hosts.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mciNZSvtEx-G793UwhJPN1TY2zRmC9Hr2Tby5LlNWm7cLGmVr47n1DxCS3Ec6vH4lIT0A7K81FwI8bepbukifVr20EnC35rfKERe-WDDyLR_ABG1qNpBYtvbiSLDI42FgqxNA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rW_jwSzOPF5tVdhR1NO1mo44ZXZda1mQ0dYhB_UTvdpdKgvMslZPTryAYLF1glW5DMBusQb7viXk29wVT99_9xyfnZpFDljEoa4Sco12rcspiJvADCMwe4MqpSo16hph1zE3wHg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EXPa4q830jl274lWaatkhYiSRRiE1zaVtmP_Bjy5KQ7muN2u3eEjRAFjip3EBA9azqyrtH0mPz9HvTk5B52ONmTwen6jD8ewMDMTJCiH4FR9AeAZJYhQMkQx0mdMT1akE-vQt=w1024-h861-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rqGOnwkJmrq_ROZBF2cZc0NfGDDWWZzOcm-jAgtalEAcNWXF5kkcwnNWD6TgpW5ZHt_nC6nAXvJmvcnjlBPMJ_y-gINxLvXULrOsVe5Y_0C8nvUgViJcuPFmqiutU-ffSzIE38A=w1024-h939-v0?authuser=0)
PATRÓN SINGLE SERVICE PER HOST: VARIANTES

## Service Instance per Virtual Machine


## Service Instance per Container

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H-IxiSkh3wWe9Vwa-OuM8NZjXvAq98fIKMDK-WIbrkRrW2RZWvt-o3cJUrl_E8CyWmFIpk7IgwTISTmTpW5_0ltuMc90uDoi80dMtCHWeFkLtlWhgJgfTMRA0q8DlqqOvMX3FOA=w1280-h720-v0?authuser=0)
Solución

#### ▧ Empaquete el servicio como una imagen de máquina virtual y despliegue cada instancia de servicio como una máquina virtual separada.

PATRÓN SINGLE SERVICE PER HOST SERVICE INSTANCE PER VIRTUAL MACHINE
Beneficios

#### ▧ Es sencillo escalar el servicio aumentando el número de instancias. ▧ La VM encapsula los detalles de la tecnología utilizada para crear el servicio. ▧ Cada instancia de servicio está aislada. ▧ Una VM impone límites a la CPU y la memoria consumidas por una instancia de servicio ▧ Las soluciones IaaS como AWS proporcionan una infraestructura madura y rica en funciones para implementar y administrar máquinas virtuales. Por ejemplo, ⮚ Balanceador de carga elástico -⮚ Grupos de escalado automático

Desventajas

#### ▧ Construir una imagen de máquina virtual es lento y requiere mucho tiempo.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JuhV0mWIRFgfpsWJHJZKrZBsu8Hk30Q7GVuWVIdLJH8oS_ogI-yWTT2e9guwTNgVgfPexxL734ynutuAv2SwyMbgt9LTThTEgnL1YCElcU5YYXNOVrQp6etdxI3Y1m5oOiOgJ=w1280-h720-v0?authuser=0)
Solución

#### ▧ Empaquete el servicio como una imagen de contenedor (Docker) y despliegue cada instancia de servicio


#### como un contenedor.

PATRÓN SINGLE SERVICE PER HOST SERVICE INSTANCE PER VIRTUAL CONTAINER
Beneficios

#### ▧ Es sencillo ampliar y reducir un servicio cambiando la cantidad de instancias de contenedor. ▧ El contenedor encapsula los detalles de la tecnología utilizada para crear el servicio. ▧ Cada instancia de servicio está aislada. ▧ Un contenedor impone límites a la CPU y la memoria consumidas por una instancia de servicio. ▧ Los contenedores son extremadamente rápidos de construir e iniciar. Los contenedores Docker se inician mucho más rápido que una VM, ya que solo se inicia el proceso de la aplicación en lugar de un sistema operativo completo.

Desventajas

#### ▧ La infraestructura para implementar contenedores no es tan rica como la infraestructura para desplegar máquinas virtuales.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0he1kCZMyO4HwRnUBHII1iurJIRZTmaU-tWO_Gl9LAqrigT_CVD4HoY0xK9nsQbfcwMdjfs6c9LHwr51zYNq9AlgxGic1Fd_joRCZzxugrTfzE8VAFEmBnnCBJk3ex5z4xErBA=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3L_pUHeDEeH8_MFkcZ5fubiW2Db81gMqO6PR_OLO66ntkSLRIYckBj8wEHIclgwwHd7xW5GEhpNyazTE3IFBWxzEk-T_lDqt1-CLYaG9iPEi7VxS9V-3NQdHtUK1IaW7duurF8dw=w970-h987-v0?authuser=0)
PATRÓN MULTIPLE SERVICE PER HOST
Motivación

#### ▧ Los servicios se escriben utilizando una variedad de lenguajes, marcos y versiones de marcos. ▧ Cada servicio consta de múltiples instancias de servicio para rendimiento y disponibilidad. ▧ Escalar e implementar el servicio de forma independiente. ▧ Aislar las instancias de servicio unas de otras ▧ Crear e implementar rápidamente un servicio. ▧ Poder limitar los recursos (CPU y memoria) consumidos por un servicio. ▧ Monitorear el comportamiento de cada instancia de servicio. ▧ Que la implementación sea confiable ▧ Implementar la aplicación de la manera más rentable posible.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HOSQ7aT8KQWQqtxIxEc5fGRVByUKSQXPXagspXw2zLJ-faKZrSPsnBoN0meArOzdE_ICQM43LQ5UeAeFgJaMbvNG2gJYaChWPj25CpVK9UUUypqCTVMp3JMohyadCLB61n4BlpQ=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15RCjqiQeOfLMexAUYqp8CEe7Hq4n31usWD_n3h2dDiwtKZh0WDf0gF5qThOZisUIsXus7oj_YH9nSibqv77UfLsOacOeRUjSJL0ZsjnF5SZ0zojjoXPmnI-Ekbtg7V0u-wjFR=w769-h351-v0?authuser=0)
Contexto

#### ▧ Ha aplicado el patrón de arquitectura de microservicio y ha diseñado su sistema como un conjunto de servicios. Cada servicio se implementa como un conjunto de instancias de servicio para lograr rendimiento y disponibilidad.

PATRÓN MULTIPLE SERVICE PER HOST
Problema

#### ▧¿Cómo se empaquetan y despliegan los servicios?

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NWKWvrLvRC4NhB2SL457mY06J9CJ2sVKRBpJBG73TI6zg1FH4wtPfA2dFaJa9wFrwmz_NLLMNddee4fCtCUeUktcejjZwVVeHFv7VqzrLhRZ0KKvki4F2Bmc30Rbn5rYe4ktv=w1280-h720-v0?authuser=0)
Solución

#### ▧ Ejecute múltiples instancias de diferentes servicios en un host (máquina física o virtual). ▧ Existen varias formas de implementar una instancia de servicio en un host compartido, entre las que se incluyen: ⮚ Implemente cada instancia de servicio como un proceso JVM. Por ejemplo, instancias de Tomcat o


#### Jetty por instancia de servicio. ⮚ Implemente varias instancias de servicio en la misma JVM. Por ejemplo, como aplicaciones web o


#### paquetes OSGI.

Ventajas

#### ▧ Utilización de recursos más eficiente que el patrón una instancia de servicio por host. ▧ Es aún más eficiente si un proceso o grupo de procesos ejecuta múltiples instancias de servicio, por ejemplo, múltiples aplicaciones web que comparten el mismo servidor Apache Tomcat y JVM. ▧ La implementación de un servicio es

PATRÓN MULTIPLE SERVICE PER HOST
Desventajas

#### ▧ Riesgo de requisitos de recursos contradictorios. ▧ Riesgo de versiones de dependencia conflictivas. ▧ Difícil limitar los recursos consumidos por una instancia de servicio. ▧ Si se implementan varias instancias de servicios en el mismo proceso, entonces es difícil monitorear el consumo de recursos de cada instancia de servicio. ▧ Es imposible aislar cada instancia.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1D_OyFiVc4AOyhHG8krbBk0kHkazBq61x3SpU89q7Ok1WqPC4N763UEImMIevj6WU5XuG8iGoqou-pRhkpEnFoxQvn6lmszuZ4n_Ncajo6Poc-VfypoR4UA_TQxvZjUYN9okwB=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05jNEpbjfRemMi73tamI9uG9O7-zWPR_lvUM9pzUkpQtCL3yIjfX_PSDstRWrTcc-yFkOvzfmiuT05eh0Y_hHMjeaTsryN6elP2o02kc2Px785JfHsFbjy01dYVFcjHuv4NaoESg=w1280-h720-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KMCSTNrbNZQ84_sM-sUY6bJkY17o566PF7Eek-t1g67L5MwsNwK2MvtrStzwDyGSL_ikvOOKe1EtlezwbCuWiNI7hRTnbSYgdxFI4etlPPG2KjH6Jnueu3PZ0AGjbyp5CfLB7Jg=w1280-h719-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-6OT5XWJY38zkr-wI-p0Gmv4lBb-MvHfM-eM70cSRQKmBP6AeKli7lW8wo9_9oBXlPQRuBSE4PMWXxRDi4h9vxYw49ZoayFUo1x_mgSHzjZoXO6kEVE-oy2Ze0LcqTB2Y_2EdLw=w455-h677-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vrO404XvdrNWY8eSGv4XErKzSvdhnL7h0Vqu8sQQQ2Wo6511pCmzHQ3MoHlginIVJDb2hQHwBXf1WQa30y6EXCmWDF-k8Rwf0r0pFtwCrfTn9oDes6PlXsR3T_QdSEydOPr6t=w490-h677-v0?authuser=0)
Bibliografía
