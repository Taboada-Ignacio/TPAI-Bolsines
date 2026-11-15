# 04 GRASP con secuencia.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto aborda la 
asignación de responsabilidades a los objetos
 mediante el uso de los 
patrones GRASP
, herramientas clave de análisis diseñadas por Craig Larman para el diseño de sistemas de información. Explica cómo clasificar las tareas en 
hacer y conocer
, estructurando la arquitectura del software a través de clases de 
entidad, frontera y control
. Asimismo, detalla la aplicación práctica de patrones específicos como el 
controlador
, el 
experto en información
 y el 
creador
, destacando cómo estas estrategias fomentan un 
bajo acoplamiento
 y una 
alta cohesión
 entre las diferentes capas de la aplicación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fpned9bxHd1YPvlgEQDot4MPgFHKQRZR-ZkWwuo43ZA5sDleM1CQ_AVuIgbkJV_1XQn0DphDH2Ff1UzV6flA64nFwA89SCM7twsv6wWMI1U_vmZtHUSIBkepn_4B--sTty2XP9w=w246-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LBFXU9yI2-Lkk_Df3KGT0ci-m8Bn88_VL5SpIc6swJ9v4nNr1xKBbnfRz3-JNAG5CBh6neJRd-38960_7ROuYMHVTeBorJvs_O9L0GRaiVc6l5t7WbmxsMzT4h0wabHGrMF6ZLw=w501-h100-v0?authuser=0)
Asignación de Responsabilidades a los objetos

### PATRONES GRASP


### Para Análisis


### (Craig Larman)

CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KQKXwOQvnzmeNtFPzcQxrhB7AuaMQV6m4JXNm2S635m6aEDfpiHornNncf08FOL45wnxjyX5Ry3HWtDc1ZGn7763RCQAJHQ4a1iO2qGB4Y2z54jrpvkUxe4MDx50f-V5vGe0Pqw=w320-h287-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JwF5xXFM8xk2Cs7YKi6n1MqSRYNC99WI1wkfmhIbXM4kri7eugFJbliJl__yQ3tv_Gl27XLWgi23XrcxLaU9g0I0W7t3vj6Q3AklvKJRTdK9To7uFpEeB7sxgBlPed7hko_az=w225-h225-v0?authuser=0)
Patrones GRASP: Responsabilidades relacionadas con: Hacer - Conocer
Hacer algo en uno mismo.
Iniciar una acción en
otros objetos.
Controlar y coordinar
actividades en otros objetos.
Estar enterado de los datos privados
encapsulados.
Estar enterado de la existencia
de objetos conexos.
Estar enterado de cosas que se pueden derivar
o calcular.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mnpg-YTESGkcMDiYMOuiJXG4jHWRMl382EOWu_E8vAC5sDONW_M4M_RiYLBv_-ueAwpWOlJapFbB-pJZPNW9g9wJxBHKW2ALlnBbYHC47QCoTDcpzm-odBiFXv5eY6dY3UN8r=w344-h335-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33VNLpyg4KAMxKOyKYdHm5-r6yfwbhijwmSogg7TJ4srNSUtac35tj0ZSij03R7prUxFLBlnjmsyCzDfedQSp2DqQWqKgydk_FUduO40bPCPuC9qpFgyxXmqIwnTcLMe7bZPFpMQ=w211-h205-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1crc9qgOLxk_VXsThOIYS5o2iMYdb9qVp7geTuG9UCwgb0LV4zxqJC8Ytak2DSlLDs6vphUUcZ4BQLhfcGDaizEGZuvFhxci9laGP2j-eO8RiWH-7d-VMIfJK_0Ag2EsheJNFc=w230-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08bTRkvWdtkXar7GxYE9WBuIx9q_AIxhcEtTH_ZCvVhF6z7U7g6s2_iguiNFwpaGCchUNRTi8IKu_c8DPziymaYwb0VxH_-IbrxHGa1hcfT0sE6qkjkGonqjeRZ-6RpqbuUNRGLA=w226-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WWw6V4oKEBy3nUPkwTAn6BGCGUCjF481lnPSEgmIXTovpT86n4Zzlo2iZ95ky5_KUTKePwLPZ5_MoUpOsxwPGhmNyDzeDJMT6hogqMvaDDbyCov2HIgAghHVTtY41th3-4TDr6A=w230-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lgdYkU6hso02yOij9gmYd7RP_rY14wZ-0-ANPCdVQOoeoUEWvDhgqFbCBQG5PhSJWkdNEuh7LP6MPdDw2-npMJOIenCAquS0pPHTI4mqGGWKzNJqQau3hL_w9qBd6j5YOqdfSUQ=w168-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12Guy_nPGHYv87pIeZ4po5xeolpdrw_fWHyDPPfXPUWm1bFJ4RXIyy7ZvwBRvQSFR3S1pt4CHofN3U850bT9PfzpGEYrDcd9EYfCEjb_nWZdXozcuhgz4RBHA0rgYysRiDdyu2Nw=w230-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HSNXKiEWiK3g6qrj_1rjZotCGrziLCDn2VIwD8lZaxzz4MCfqFO-ej6uV-EceACHj1S9ceOzexv_PfFTaE1K7N4lvK7eE_8eJYheUo1rmIbabC4CAItcSR_oqnmLvcQLV0FOw=w251-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Fdvg4aLNfo88MYbR9oLDCGRsysCsFS7fkKWJWAeKinCYvw0eO8b0NR1_jewXn4_7SAXLRp4tUza6huNBoTOeCkn4XGUKZ2NGcq3nHOtn7lCUMgFzionqmM7A3hVxz9MraTE5y=w230-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bC02c2sFSlO1HG0wDzGf6oWBizrXXoUPrcLYaCx3N1pn7RAHggYAaZGxWVuODAL972xPmdF1UkpJqGmXMdumN69CFRDXuQVMSFWQYvbdveMVs4pNHImEag43XazYQnlwVlUHA=w249-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2y9cP3oJUcOITeu4mej0GkLCa8CPSU31-OR9nHPaiPxS08xfdTiV-scKrEVGdkwbuBVRzLfAnQszcDn6uLVA9Y9UD9gRfl1URZ1VDYd7UqptKEtULfg9wXWWaQIJwpbENXBGnGDw=w231-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-VmIA-UBJNEFkrPSkyXkSPduW25k6plU1SAjmgnZq_5vIJV7KrO0o6Ix9GDQWcZysNwqcgmHtYmN--7HrWzatb98HWwpCZhuoAjanuNkbJTNqQ8j3ePn3ptuqn1vlgTH2vvEBow=w225-h87-v0?authuser=0)
Patrones Grasp para Análisis

## Experto en Información


## Creador


## Bajo Acoplamiento


## Alta Cohesión


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wLPU14UPI0Z5Mgn4oLWTnVj7wNq3_2Ouaw7YVy0HzOxFTyi9SX5w9Bc27W-XcZfztdTm_WSKLs5C000DgDe4neYpkRkuKGv3O4-M_rZh8kMbqBXITwsLxKAW277dCE29zj2WPcA=w88-h63-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ih3zR0B0InwXwUpoJZx7yH3NAFtCceb2PCciBqiWfiEiIqKQs_Af2vVMfzwuqNHdDJEwtBYG-HbNqupQXlNgUV98ByXODXopopw22MDMztN6BW4Uvvxr57lWNsHEYOYmO2vgerQ=w102-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gT0atHbuQc68Yzj8C6RTHIIhKBQlM-rf-fBTkLYTOEUq_u3WGYLC0ckHfrY4joR25oFmfVw_hQG6HoFnROke5-tq7un__koZ7aqo8bsSCCUuYeiXCvI1iEAfcQTO3T9WgLajWcg=w90-h71-v0?authuser=0)
Clases del Análisis

## Clase de Entidad: modela información que podría ser persistente y que puede sobrevivir a una ejecución de un sistema.


## Clase límite o frontera (Boundary) modela el comportamiento e información que es dependiente de la frontera del sistema con el ambiente. Modela todo lo que concierne a cualquier vínculo sistema-actor


## Clase de control modela funcionalidad que operar sobre varios objetos diferentes de entidad, haciendo algunos cálculos y retornando el resultado al objeto de boundary. Contiene comportamiento de la lógica de negocio definida en un caso de uso. Tiene responsabilidades de coordinación de la ejecución de un caso de uso y funciona como intermediario entre las clases de interfaz y las de entidad.


## Clases de Fabricación


## Pura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mVS2nDpPnnvdEEzXcoT91_Wc5ygFnIYc9l6o7d2CC_HC07xVl_JZYzFXcHmJyyIFP0uebaX8wpdp4xzWIHI0ZLKzJvOl3KTfThcIhabIkPG7t6SMKZ8-ruDA1tQm_skq5xNBwQQ=w1078-h617-v0?authuser=0)

## Sin aplicar el patrón


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lG7V1jGQqqSWLyIug0YUw-6WkJ4vJxeBfSvCUWGnpYIiSdA2AxiuBosW5oQf9bhmxGqbZgT6C63wi6kn-Ki_ZL4ta6a5Y2NgIYrfUgfFfhlpZgwue-Dnh0enLo2nlMFr3OY63=w1151-h796-v0?authuser=0)

## Aplicando el Patrón


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv311svDDhP0zsQtuqVqgt-bD96P1yerFhoSXxmzyB2CRyzRetJQ0Ke_K6LbKrIfukt32CR-1djYhLXVvK2BosIoyGh2gkbyVrOs6mF_ebPM6ll-3gVZQWHbFkPGf5co0MM4_w-saQ=w1280-h1240-v0?authuser=0)

### Caso de Estudio: Festival de Folklore – CU Registrar Festival

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11rM624xH_8r1WLl_QrHwFGyNWOT6GIGdVCC4NRFgCMEczKCU3O9Y-OnrY7rqz3TrCjQ2fJHkBsJKKtHRDcOUaHx6PnVUTKOa0P15XlPoghu4VX408hIAFqNPBWNY-yvWFzWJr6w=w787-h305-v0?authuser=0)

## Estructuramos la realización del caso de uso con un Controlador de caso

Patrón Controlador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03KwrdcuXsuNiRnhAI2pPHsDElazzALB54WvC_PQqmPWZBNE_wJW88StMcgfDOAk_lLqovg0AaF2Gh89OtPJaK0Bj3g3ky0Fw2GDV-KNwM7g8b-dift7mWz5yomsqQjYoRJL5UBA=w255-h290-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VA6MIQrdzo7mo_o7D89yIqkCftUCAuV_pjL3qFb4bESl7hzEx6zw0-hMRf2qIO3vUAdUDcdxNCqTGaCdedELtFeZbYZJX7imrAuC6DRSNQLjs2DeUe33Zy5TLA037PxXaIU2VnA=w1280-h593-v0?authuser=0)

#### Necesitamos validar si existe unFestival con esos datos, ya registrado en el sistema…


#### El Experto nos dice que: “Lo hace quién conoce”

Patrón Experto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MnqfgwTv1LXN9Fsyk95l1b23EVdE2S_Sp9Mhd1IxO3l6VK_wDKnW0shMFCgL8hDI2KYYQxGoEC26KelpkTzxIwA7-QMi6ccSlYzBrTqcS7WnIc803ZSgBG9TmHvlZS4bP9-msCQ=w1280-h607-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mugGbMfNitgjnVBr6UHxHhMjaGdmlK5HCqOr-xvh_k66pXcqS2Mt5EaNhDPgqPDJfXYtF_LL6nEQTSi9qIEaFWyEw3ntSLn5qoYoylmvMKrZPhkPux2QyGnk_EUpGeqGkT1kW=w1280-h1211-v0?authuser=0)
¿Qué clase tiene la Información para validar si hay un festival registrado con esos datos?
Acá aplicamos el patrón Experto
Acá NO aplicamos el patrón Experto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00u33A-JXd4zzDWZFf0PhcrUB0e7PyK_qdzRx61MikIkYI6QK1nJ6mz4x6Eh4jxtzq8ol-QwhdD2sqKWPd14X0LrbPUHzXZ6QGq4J105B8Uq4fzhYfS7g0p6sZ3EeAn1isQ8gajQ=w1169-h1280-v0?authuser=0)

### Ahora necesitamos crear una nueva instancia de Festival, ¿quién tiene la


### responsabilidad de hacerlo?

Patrón Creador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aIhBMENzxjwDYN0dJCxizxAiJz9-3Eo9jNc2jztDHz8M1UC0q7Pg17EqrgybSP4QG5CY6v6-IyfvVc1Z_TNs6pUc4VWCQC4XyjHA1dudNG8VwEX2KYSMNU6ub1CuxhGPksOOayg=w1169-h1280-v0?authuser=0)
Patrón Creador

## Asignar a la clase B la responsabilidad de crear una instancia de la clase A en uno de los siguientes casos:


## * B agrega los objetos de A. * B contiene los objetos de A. * B tiene los datos de inicialización que serán transmitidos a A cuando sea creado (así B es un experto respecto de la creación de A).

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZhSa-Pza6KVcxDd-AX9oPrD8mf5iNRgcBcftkR8eai8FASHw0Prm-HIaySpyfZJR5E6YBMlsSXhmACCJzkWAs7ImbeVv7Vd5d5-vZLgdEhNZGXzP2j7PPzFXeLrnphiEqUpuNXw=w187-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0V_hSSCgLqcxT65Ulmz_HKdZomQ8tuPCqD6kmUsUZBqKISYyK86PIFYq0uqNhMVZE77lLbWfpa72ywcNBAXVUR25PFEvZjycCGHkY7POLWuKCaG_Kf00QCp0DtSATuJ9WdrThy=w465-h399-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BqSiwDjOW0z2KMePipWnYNNc-tEH0ansC8oxUyCra7dr5ydHbfKkRSuUimcEVfcwivnkPusttbQhLq2VOSzmuawT66agbeIiAdzXUDVpV0cbvBR-AFo4ut_lYS4AhludealWplw=w1137-h650-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DBjWopoFVo0OC43o7bKIv4pLNP0KpT6s6RfKKg4MMucJAkt6u35Wcivc-m1PXy9j67rIjrn4MDlB0p-80p9Xj4amYGmFkBiTvQVEwZ3IKSc5kMs3igNONpzBhFUg8kJ8_fXeO=w551-h421-v0?authuser=0)

#### Ahora bien, cómo se vería si aplicáramos en los dos casos el patrón Creador con la opción: * B tiene los datos de inicialización que serán transmitidos a A cuando sea creado (así B es un experto respecto de la


#### creación de A).


#### Alto Acoplamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TPseAVG6oWKHP40iepDRPq7WYLmR2BpKgtrVLkpSQconD1fkcvg6_BR4nNI3nZ8AnyzYP0oUSd4TfYPssbRGW_LZIg2G7-QUEEILq0TG4_OuVbw4Mc2ijq0PtqNAQx9YLz_8Sow=w208-h243-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14ht8a3hp-U9uWx8kjrpj0oUzYD3jvolgm4V6ZZrlQSOMskGBVw3tcI1ycDCOUA0ChXvEMDgkKkTnz2_N7v12BFSApfUtjj3oXlCyAP25erw4cTuOFIFm77EWZAxNxi6gLzHcMgA=w1280-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ov1Wf94SIYQRoWGVcUMVSpaD_br2gV78Qvsldaab3Lr6HP6PBh44bEYojT-C3Rw2TRuObEsS8v5esg8MlT_bHg3jzVtoL9wspn6Ix-FQM8GYFUrcwiBFdrzr74tnKWXEuxCElLw=w1169-h1280-v0?authuser=0)

## Pasando en limpio… Esta solución aplica los patrones:


##  Creador  Bajo Acoplamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39xAdVqAPUD94Y4IzTDUQ2Wm2WNCpPc5qfAjPo3vof43Ubupkz_6SeoLc9PEfmMMh9V4xLqtCbov1edaUHUDb97vLECP4FGhFLR4q0k4oNzWvQfnJq14PEfQvzcQ2-CkYxMgL1iw=w671-h586-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2664izXY47935Bo21Fb71yxN-jojjK-5uR3yPVar0bGvvvkhSaVQuNb6U4_CHTLTIe1AYLzWgU_3vRrUXA8jSggRQoseGMhoKeA6XufDoRVz7mOK0_Eep3WE064Ig7OJpbZF75=w1137-h650-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jvKU65w2zjSWoTC0ifP8ZdA0uaiLa7z4ujkTi58a_HUSrUPb01MVMJID8OnEdjnRyGCyQYPDjR3HZh3eTyHza6mxPw7FbpC-qnHyI4uOduCjETsow_s_0Gl6-kAC0E0AgU_4qxg=w551-h421-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02Zip8z-TBXRWh0glBug689lGTHYn7tzjy7PKrONJ-lzaP5v2D7irnKmjm06AJd-ksdd5-JdZuA57YrSQMFeewRQykfSuKJZYrcW6plU7SBiyc0tmeEKLxOWCjZQvNkD94nG1arg=w187-h123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qDLdMGeYPGCtjjCOiw0PxzMkXAgf7-OY035OdRhgFkFIo5e2HhDYRg1Fe-dRsoa-Y4yhMCr_OhmdBnJZvA19AZVikysYZHQXXoIuztf-1WJNEKOHrkLrAizGFh6Zk4EAx0Buo-Q=w465-h399-v0?authuser=0)
Mientras tanto…
¿Cómo se ve la clase GestorFestival con esta solución?

#### Baja Cohesión

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38b_7bzwIRIapzuHSEr9SsUW0Xm_RtV7DZEHKbMM4ymYzhWLHAlOZ66aWYyeGcUB2ZWJhEWtfmDhCUBPF-3uO_SzbSEVucIuBYSflmwlove9YBL1A7P2zUAKhLajcO4_27FAWL=w1232-h1095-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06bgyhQLxVDzcXgOqi28ln3tZMK9YX5gZ4b9NGyl9sKb0ijRwLdtbK_vuAfF__4QZjslypJRnc4VotbnUvInx-l7RPaN5z_mX46Nhg28i_SMkwyHPdhTAfGY7Mrw06gVh4GIhL3A=w188-h243-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34oytmWTAWnVAMJ5caLQ1IViXsS5my9YuaD29BaNXbxUNOBGF7aKk_MIVJCGVBRK0B7TqNLB598aChmds1N76qD8na8g9I9UvlqoiH3usr1h6NzU_ylnBPvq_FwY1vsQEQ4EDd=w1169-h1280-v0?authuser=0)

####  Controlador  Experto  Creador  Bajo Acoplamiento  Alta Cohesión

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SDu9jv0UYdPLCo0mwQ00P04wdNt6gNDbMMD8ht5qjKvOz4Tq0IN9ncIrTpCs8xx7A5A97g53Gaxn_RvgWNAi4kltpLbDLIF5uUnkWL1DvkaRfGNXMKJE2FeLMkJ0bE63Y1r065Q=w1280-h1070-v0?authuser=0)
Patrón Controlador
Problema
¿Quién debería encargarse de atender un evento del sistema?
Un evento del sistema es un evento de alto nivel generado por el actor externo.
Solución
Asignar la responsabilidad del manejo de un mensaje de los eventos de un sistema, a una clase controladora de esos eventos
Explicación
Un controlador de caso de uso es una buena alternativa cuando hay muchos eventos del sistema entre varios procesos: asigna su manejo a clases individuales controlables
Beneficios
Garantiza que los procesos del dominio sean manejados por la capa del dominio y no por la de interfaz. Reflexionar sobre el estado de un caso de uso: asegurar que las operaciones ocurran en una cierta secuencia o saber el estado
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3o3DjhRRoeYEX7k9FT-1EJLWHrIpUZOo5dTGXH8nvBpQIXc408li7wch779h4Rv0gFSgMuDafpa76CHmP1r4cTq9wQUr1yBCY9FRRVgcTZNMw5X4C0-P3gVVJSlOFoQFStm4xTdw=w1280-h1070-v0?authuser=0)
Patrón Experto Problema
¿Cuál es el principio fundamental en virtud del cual se asignan las responsabilidades en el diseño orientado a objetos?
Solución
Asignar una responsabilidad al experto en información: la clase que cuenta con la información necesaria para cumplir con la responsabilidad.
Explicación
Los objetos hacen cosas relacionadas con la información que poseen.
Puede haber expertos parciales
Beneficios
Bajo el acoplamiento
El comportamiento se distribuye entre las clases que cuentan con la información requerida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31t2nRKtx0VOyeA53300OkagVkt3DiHfeOcuYkY3AWDD9bRKFHDdmcD8nlMM1PJNdh0sI2DqGs0x4L0UgLWQtN1_eVRfsrXN_Cr6NujKM_TWeji8j6_kDEFhWLQnLMvcjgUjDmSg=w1169-h1280-v0?authuser=0)
Patrón Creador Problema

#### ¿Quién debería ser el responsable de crear una nueva instancia de alguna clase?

Solución
Asignar a la clase B la responsabilidad de crear una instancia de la clase A cuando:
B agrega/ contiene los objetos de A; B utiliza específicamente los objetos de A; B tiene los datos de inicialización que serán transmitidos a A cuando sea creado
Explicación
Encontrar un creador que debemos conectar con el objeto producido, esto soporta el bajo acoplamiento. El agregado “agrega” la parte, el contenedor “contiene” el contenido, el registro “registra”.
Beneficios
Ayuda al bajo acoplamiento, supone menos dependencias. Como la clase creada tiende a ser visible al creador (razón por la cual se la eligió).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vC3lHL1XiPoOapYGbNOHGQfxRNTFVbGUSfj-PgiUFWnDnjj_qoPuRIAS4cXdzzvNGV_3R4uIdqgROgCjaMg5OvFDXNRz3Hhj586pDmsKX3JLHjLeYJMH0-7xNx5Gj9FeqnfJiPw=w1280-h239-v0?authuser=0)
Patrón Bajo Acoplamiento Problema

#### ¿Cómo dar soporte a una dependencia escasa y a un aumento de reutilización?

Solución

#### Asignar una responsabilidad para mantener bajo el acoplamiento.

Explicación
Clases más independientes, que reducen el impacto de los cambios, y también más reutilizables. Un grado moderado de acoplamiento es normal para crear un sistema OO, donde los objetos colaboran entre sí.
Beneficios
No se afectan componentes por cambios de otros componentes. Fáciles de entender por separado. Fáciles de reutilizar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UjVYmykXzU6jWTlVQ-c7Dph5ud2Zdo1In9ew0_GQfvJ_imGu5QjyALEIoCCmnQe_ti9WRGlSf_0mEmf6ZLOeOoue2_tdq1j1Z6G7B725HPgbDheQNw3wI2Tv7_jzLpJPnZqeU=w1280-h1075-v0?authuser=0)
Patrón Alta Cohesión Problema
Las clases con baja cohesión a menudo representan un grado de abstracción alto o han asumido responsabilidades que deberían haber delegado en otros objetos.
Solución

#### Asignar una responsabilidad de modo que la cohesión siga siendo alta.

Explicación
Una clase de alta cohesión tiene un número relativamente pequeño de operaciones con funcionalidad relacionada y poco trabajo por hacer. Colabora con otros objetos para compartir esfuerzo si la tarea es grande.
Beneficios
Mejoran la claridad y la facilidad de comprensión Simplifican la evolución.
A menudo se genera el bajo acoplamiento. Soporta una mayor capacidad de reutilización, porque una clase muy cohesiva puede destinarse a un propósito muy específico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RUycgIXTSd98s_gK2fq28V8M0Dk2rTi7-hkZ3ywKCSBpZdVPrrqmek064NhLLn0MTezPCAbdUS0GO9D71VMueu4DrrrHs8gBk72MoUrltidhq118FR8kSGLainV-qThJxr3-csg=w1280-h863-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xsA7qaB8_2_7DY9xboDD-mjfbz1JKQTgE2QYomnaP5GENVUR3PPX0IDKdyo3rvp5WtmKLILxQuDLWIXgc48Rw8AwR0OTGTk-xBSTGVqvkl6Ze7Bvliu-brY5JuaNzUvBNTpzmBQ=w1169-h1280-v0?authuser=0)
Realización de Análisis del Caso de Uso Registrar Festival

## Vista Dinámica con Diagrama de secuencia para el escenario del Curso Normal


## Vista de Estructura de Clases de análisis con Diagrama de Clases

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MqW9xo1-FAd_XbNJ1m7gaxVkHxpjuDVCAUR3BK2zYLgSpnoHSsm4me43-LjJdi3uM__Mk8DkAUY_CaLQXAZqsSxAWro_CIqNCJj4euRxP2C_ODoKc7CPWoPpu2lyjtFFcCxtOIQ=w729-h469-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1D2wldzu8uC2c7tmg13engpl-AnhBQ3o48l8lfnknR2LBJY8HhyawjsLsnvlVu3H5P9rqdxPvPXNHsbMNRn3pXT0R0hT8UbT-_hqICCqQ64kitzqQ5aYDFmLjgTOGP491__lcBGA=w966-h446-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1k-Brqg57JWmyj_plZKAw5mvIPfQX1GP9G5lsKyqumhU3-ypMMEpMIar03i9P8sIdbhhlzQbHVfXiYR6SOaATQa9kW2EyiPaqkBxy6-CJ_0cvrSiZIaFp7tU-0dr7c3As_J0QQnA=w730-h371-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01mItxo9PW55WH-ya36d6jID5tuMEvEgAst2Z0_k0pHe9jL6fDfN88D0D6aX70t_5UBgjiGimXN3-4Cpyapjgo5mKeV55oxov7JZgHIpvmSZPWt0t_7Fwjlff2y7UVsib9E9jz8w=w246-h205-v0?authuser=0)
Repasando lo que vimos…

## Modelo de Análisis Clases de Análisis Realizaciones de


## CU de Análisis


## Patrones GRASP

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3J0DwmZYZBRxh60XH_p8bzFEyz8lcziVYctQQGmGxq2xcuHnTC0ZW-s8BnahygRODK7jkWYcMjGXbjUBIvyljBys4dPzv1l4v1mlgVlJk0vgvPFTElO0OsWf0BFaPdwPl5vTss=w344-h335-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h3spJcIP268vxBAJl2lqu0m2xVqk-sEErUo2c8J_yszSDtaC-AH2NBu9lK8XfjKZ3vzZRlXEkbqWBp9_g4nfqGVxhxdgfph3EKwQ1gyqoRTjICFWS9Ih8_EQUmRRB74sEtMDw-w=w211-h205-v0?authuser=0)
Patrones Grasp para Análisis

#### Experto en Información


#### Creador


#### Bajo Acoplamiento


#### Alta Cohesión


#### Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hcsuF9EoYEJdShRkl9-5_Mz3pAUomUkmss8aqAt9oD05Oo5KuzBn0tFZqVAYE1ehjixn17d_B3XOS9JUusx1mpTpaLya5gqFi5zSov6nq2_9rRTL2bHX72NDlRGIW1Pt0VWVF=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yg4Wv2a9MUE-2ouGR6Xy4rb_bdFl6K74DGkF6jHDLaOaVhn7Nsad2X6IB1NQSEcLyDh5qAX6vAZACnp-ClN-SoZjxPyAQtcxb3kq2SkjTPogRE0JbUmYw9bfJKHn_GERVEMmIuQ=w291-h200-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Finalmente…
Muchas Gracias!!!
