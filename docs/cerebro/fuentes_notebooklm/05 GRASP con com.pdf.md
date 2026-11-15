# 05 GRASP con com.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto expone los lineamientos fundamentales de los 
patrones GRASP para análisis
, diseñados por Craig Larman para guiar la correcta 
asignación de responsabilidades a los objetos
 dentro de un sistema de información. Se detallan clases de análisis clave como las de 
entidad, límite y control
, las cuales estructuran la lógica de negocio y la interacción con los usuarios mediante una clara separación de capas. Asimismo, se profundiza en herramientas estratégicas como el 
patrón Controlador
 para gestionar eventos del sistema, el 
patrón Experto en Información
 que asigna tareas a quien posee los datos necesarios, y los criterios para elegir un 
creador
 que mantenga un 
bajo acoplamiento
 y fomente una 
alta cohesión
.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26rMNYvkksKHTDKwXAhFz07vBV3v_2KMJzn4kEh7HwMixrZvhU9z5tE0E2mbnUgqfH-jAhDX7lC4cHX34M_kDCRCL1NrG69OAC5yaczWcmIhJzOcufG-WpujlJo0h_eDKmN0c6zQ=w246-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26QcJ6BoVcvBNfvSYRMWad2eaIQVRUp68t8ZZzlJ3Cf1St2vy--mMdAqAxhuy58y_Y1N6iVXw_FJ_a71p34DVec64kwmYl2GQbUDJGYt2dzshq5xZUhhnQW16tHDDj234O3kVTcw=w501-h100-v0?authuser=0)
Asignación de Responsabilidades a los objetos

### PATRONES GRASP


### Para Análisis


### (Craig Larman)

CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E59oye6W4mblaUZSnOMiKA26FQnuJX5UlAwoo0AUKkssguqt_sifESqZYJFagYTBkRvOs1yE09ZUAO8XWjQrDp13KzxcLwYC5MeQj39Teey3a6MnaCcw8cep8NtcyNA=w320-h287-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D6cx6LMQtxNG-V15s7ffxPPaP4LszE76TqYGM_8xwFT850pzlrO5-JRy9FCGggVKCJilCYS3DZ29IxrYwWW9B5zOMN76O9FAMlJBCwZutCRRTEsbBl87nmat-NpYRykohFbzqQg=w225-h225-v0?authuser=0)
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pPWet8JpponO5HIjyrFUzpy1-2RVKRXDGcOKjOlOmKI--B6qfXQ3HwH51P1axp8TZVCQtebMC-yrLk_L60bburMVyfR8Zxi7YiqXyIhurBxh28Qw4_OkvWLkMMuQRcutuf3XIMw=w344-h335-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1c8myRdzs960oXfiIqeNDt56BDiAEsUjZFxZno0dtb_nJbu0N29YJ2dNlg5XB4QpL2kmgqlH0AeLahwbkDh9hAxDAj_rz3np6i6NnVR4q9BLSWtruerpdQhDw_1BitTPVXi3tCCg=w211-h205-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Co-B67rrjKIxRnS5r7VZJkmfND-K_9mKfOCHa57SUMiO_LVU5ZQKLivEEXjyOuHenBs84SYW3NpqQoAHULWptaiU6dj6A3vLfG93BWoVi1cRKH849lZBItqNDVt22uJ3oKZBiiQ=w230-h143-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2swVKFcPJ_HqU2U4QgBnCHr0GtMflUqcwaFSBF8HitwCgiEUCdzyysNlJQLcxqwL5JC6Cwj2smwkH2SkT6u19icSucYONQpupggow0v4dz8NS8LKBRf2LV7ROk7PzHdadh7mnS=w226-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cbfRXM9odwaCyTgohOZr7KcubqDNWzfdCNiOkN5NpS84b9zCN04Ek-PwWnr3_VL17ayPvcgKWx0DlEvShZ4Gt54G6gzDNbPPJ62IVP1C2DkB8xPeviDCspz8wFHCxojSLpxeivQ=w230-h143-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35F_HWghrhbtXmrHoowuC6INOaamGOCjgHogHVevhm3fcSxSRFN41JnTbWZhVbfEm-LV5zZFzs5IQghw6vKkQ6sirw6HyDkSxjxJVrO9xdrezoVC98G3OigPdTPrcJyo5BHMipLg=w168-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dkhy7-CCb0fhZ0R8wJ2CtW8oUo7uZUy5gUXyVSWEbixW0ldTv9_RqswydneW9nzD9c4Nl3tyaG3uZ5OPVG7CNKn-OvlZ2FWYoEsuT13sf4HmjdgG2qofNe4pmNUOZR6NAUPieTw=w230-h143-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2amsew8twSQxrn2kgygoo0YzkU6mlpqGjkytLRqT35bqpO5ab4sKxrgqRPMohPJrzADBKYZkA6WmWAFNqy5eylo_vBYKcyor8QqTawSyuPaCRSJBrBlbHpvQaBMVndoMFMbHK18A=w251-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rHNsxKVmXAvq1v5hJvIOpaBWYIS-th6VO2rtikwglC5YaEyOMGziZ0mgu7ejqpJZ4HhI6OIh6GFVVvJCLKxxXLWa4-EHZcaOgn9VyWIf7W1AugSKflKl1LlXLLZQ8bwbgCx93XQ=w230-h143-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n3l1fxHLbW3xd2xdfjNgnScuNupLaZjApqq4h7CE3vXJAxELHXoPZ-mqagkOtipmPmOqDV2L9kjD8lG2W30FJ9cfjNHm6-d3136ovb41ZYJr6W45BVZyz9fCvhwKiNHAjMxrZvA=w249-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2L-Q2pYwfCjdf9trNSQLr5EEoTaKNaU53o5aRsfL1Vm5nNqfZylh3UFXg0DVY5Z1XbyCdoKkKoQ6vssdWDH3T0xeaYPREAIk_zSNWTSbNB3Qt5BZc29dbeQ-GRUIG6RxSNPmcGOQ=w231-h143-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1F3jrT84loOCE08gPgRN5J864lFi-ipya35IKiRwHVtbGry_TbjeoACXGDhFh2efXYJBAv9vJnymw1MIWO9DIeKdVVIKFPMZRuAtfn5C3Srvs1_T0d-UPbVW-iipabNrflTCDL=w225-h87-v0?authuser=0)
Patrones Grasp para Análisis

## Experto en Información


## Creador


## Bajo Acoplamiento


## Alta Cohesión


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2adjeAxY3ATMzm2j6CftcBid6nxalcvnp1TE8A0KB4PTSSyFYW5A_UzscfJkAqtRIODJwxCobU5mb1YFcO6KeMz46xt0mPA5JicbcYDMSa6FqCauxYxYiVSmKUZ2WKKxvews0QGA=w88-h63-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iVPhoYI2fw59WHribwwbehR2fSyp9hLFLdQe7bmiXxVJlfFLhw0C3MQEy0EJ4ZBpaRW4P4c6AeQARN0mMbcZRAgIQHfYUu_ql3hEycgyw8IU1zIaXwjrq1D1Shp3nBtdcE20HnA=w102-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LOVeZR8-GXFOav9_x8JRIP2qWuN_LmQgqsK6omGUN7ehBZpllmfQlpOSpoLe4cqxEZURqM07wBK2Qo7yoMR4xvUh_jj-SSu-3mvAjhDrmi844KJXLDF3n_U32r2kARnU-bP3oYg=w90-h71-v0?authuser=0)
Clases del Análisis

## Clase de Entidad: modela información que podría ser persistente y que puede sobrevivir a una ejecución de un sistema.


## Clase límite o frontera (Boundary) modela el comportamiento e información que es dependiente de la frontera del sistema con el ambiente. Modela todo lo que concierne a cualquier vínculo sistema-actor


## Clase de control modela funcionalidad que operar sobre varios objetos diferentes de entidad, haciendo algunos cálculos y retornando el resultado al objeto de boundary. Contiene comportamiento de la lógica de negocio definida en un caso de uso. Tiene responsabilidades de coordinación de la ejecución de un caso de uso y funciona como intermediario entre las clases de interfaz y las de entidad.


## Clases de Fabricación


## Pura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uWexcBJ_sdW3emPlcF6Pu2tkXjTGB2hwE4Es5NMvTsc0u4WmFUZEz0kpRrT8RhBBLTR54S3vgJ6iO9ImzxfDP7sd8rGz-aUd5AlWsoVmBj9UQY3gxOjUFC6RNsxSrglh7rmrzlA=w1078-h617-v0?authuser=0)

## Sin aplicar el patrón


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gn_bA6gabyC-vLUn8H-JuGYD7ypVd1cP81qSSWexk45XXIMX5WRni2aVeNjwsB4VIFEcANuo0APiGklYtbxRoVj0sGLjWiEfOvQBgZ5JnjiAUys4b4DH9b3qIpz2UV_FdrcLDCw=w1151-h796-v0?authuser=0)

## Aplicando el Patrón


## Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sB80KSa8OoltIO2loasv5joqVCspqRKj4POBXk2FHzG8eOCc8UoA7_5Za0ahHhIj-yFb6MWIud8dISCiTRH5bikqsvRvcXMSAjzhJ5FglJ6pXVLfM4iu-uFTjWf0ImKB4DWdtNg=w1280-h1240-v0?authuser=0)

### Caso de Estudio: Festival de Folklore – CU Registrar Festival

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hPssm9Ry6OmT7rQANXUyEj6J7fdYl1V4AWUfLyqAVyHw9Az3b5alCplV1z1uFPbo9KaBm7toJqsr3GYSMrAfJiprkPEujMLF2CHQ-5rCcu0swqrnByv5naN6JIayb8qQCTsQg=w1280-h213-v0?authuser=0)

## Estructuramos la realización del caso de uso con un Controlador de caso

Patrón Controlador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15CMBafWghdsJXuR_yBClyGXyV5swSYWDBypHtt0difKvVhN84RtmoBZZkLWDwMCM_AUCJpGMHyHfiAB_2YN4c8PC8XkF421krPafq-95gUBTuV9Q-p3ZQp-H467EUPl3FBu1Z=w1280-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16NFjwbqCewzQUmjN6UDJ0Cao7ZRNiQgCaLw0R-gYN8mWyzIJ9hH0h8r48aIfSRanQkfP4KqXznpOAgr1Pbcyjk_7nJv-vH6dPn4AjsOddF1BM30T7zYxWaTb_x1-2DTsaJwS-CQ=w255-h290-v0?authuser=0)

#### Necesitamos validar si existe unFestival con esos datos, ya registrado en el sistema…

El Experto nos dice que: “Lo hace quién conoce” Patrón Experto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0aDkouZjdczohGUcZSvZcP1iDX4TLyq4klIvdoLqbOtv2FA4whUphJ_wGwdrWUd8x1ZLjulRCMpdd79jNpNIzENVOcp5hQJesLzaQL9fLUyLJY_K3hmln3fzRqoCBjOJApAEpjWA=w1280-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nS3FR_rCY5FFD3f0vu8-WhH4SMfAotT-UdUTxtgay35jz56eeHYKozwM1wFMgb1L4B-NHubkWGQZnfC2k12U7vyKIs6ZixCk6ZM5MtuVhCMmIlFyzKXcdZ4Hg0NGXMTc3S9suMQ=w1280-h216-v0?authuser=0)
¿Qué clase tiene la Información para validar si hay un festival registrado con esos datos?

#### Acá aplicamos el patrón Experto


#### Acá NO aplicamos el


#### patrón Experto

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DURJQ0mAuLNvOrykLT0eTzMsGfmkhxk1uXUjGgsWe6HGlqO_C-zZZZIxqdXQXN3sd_f5cIWxpBYC3ld82-JQ6h7LvnMBXVI8GpWwpuZD-XxWH0cop6en1nVn70_BUpvSUUfRM=w1280-h687-v0?authuser=0)

### Ahora necesitamos crear una nueva instancia de Festival, ¿quién tiene la


### responsabilidad de hacerlo?

Patrón Creador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TRXd90xfYy3uS62NL5PyuF8YZXOD7g_BGgO_uF5MBs--fXxG0dQHAldlWRKZ-JufJF-8SWI1YEl8FHwKS4Q1Dymnl_5VGawBf3hhrCihApOIT5pJfe186HCnVw8So4t1zOMS0EA=w1280-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SyDaL6rj4N_DGfQLYdhQJqWadYIFeHhyFcWzgMeVgek7GoQWC4w_ZzP8rfmD_FI80452TfSB_XwSg381arNXYwssPoLG2osOazHI938wmRLc-ZS0dNlOO022eply1LEJ6ttwKVg=w1280-h687-v0?authuser=0)

## Asignar a la clase B la responsabilidad de crear una instancia de la clase A en uno de los siguientes casos:


## * B agrega los objetos de A. * B contiene los objetos de A. * B tiene los datos de inicialización que serán transmitidos a A cuando sea creado (así B es un experto respecto de la creación de A).

Patrón Creador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WLnS1Vck4eF0cXhFhsf63Kj19yWc1WwdodyDkMDL4N0-HU7OeH6U8sph3_c0clEv_PLq2lQr2YFGqKyyLG5kOMZODzdjnh57apJo13st0QrSYk4uXDN1ZJhFrK_PLiqjPvcVZdw=w1137-h650-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Rvtyns6j2lWHrGgaSWbIgbFRZebQXq2h8vzBKlG94O9i34_lgE4ihU3RYJf4NAul6DJ0pWT_ZeAb-2oRNcUTGfWfQTYx-PPRMDuXhLYk2aDS6K2Ic8hRW-po6gReJEJtRW6cJ=w1246-h983-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k4YEUMfe71c-otDm9MIZovRr8e6Adg3Q8bNhhJfNXUKvRT9W3efNt5sySv5ZEJOp1B-9JnIwat1iljikP2Nr9Iu2vYlPUva5-BtNbIzyGg5f48TKquxB0hSIr4MDUQh5Hc0agTw=w551-h421-v0?authuser=0)

#### Ahora bien, cómo se vería si aplicáramos en los dos casos el patrón Creador con la opción: * B tiene los datos de inicialización que serán transmitidos a A cuando sea creado (así B es un experto respecto de la


#### creación de A).


#### Alto Acoplamiento

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2loqSCAXju5EEcdhGke0jDaQhbrZ24_pybpU5bJesryhcE2z0i7ZZEGeLdybtCahI3-djpsNB9tG2pSDd-yxwzJxK5Q-PZyaNL47zRK11YkF0JzCn8HpdgxqAoniLixP_LOoSG=w280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UQLS6YF6O_JOJ1pk0maWRho3IUzRXXcWU6CQp7C0jYnl4M_MERKGQZ0-QztSrKaKu2GMdba5psw49DUIm04rXMPT0xlrDYy_jBJ0F0qM7RFek6FvLygqDW1yPT9offEQQ0TrtAw=w280-h178-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2t4MYco5pVoQUXm5bWGrgOty7rQWXdHil2-g3hPck06F2SlWSSKEn9I7wp4HzESU7XDWr7Yql8AM6g1gjvmn5u7PnvmS3mSe4atk3y23D1ohtZKfXVLcZAyYsUozzLBVDaKV2P-w=w1280-h239-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29s84VpW2bMxel6obKAczABaABNeOar5WgXrdDBHvZp-cI5hNJToG0_K3j_POiMcMKHQvRLAEUkJr6mUjvc0GhsTl61-tshdV-BagHogpxUDzzNgKP7wr2uFPPLb3DBWJIaFDlAw=w208-h243-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mTeIyzbvxwuYbf5yiggGZTa7EvQ8ctKayWz-miQxHGJicr-SXaXbzurac8XxXXBaoSLtq0N8uXcT0cTUokYiIzHG3X_ddZzM1caNW6pyVqSVmDa-B5OYRAsTa9cTFccyoUNueeA=w1280-h687-v0?authuser=0)
Pasando en limpio… Esta solución aplica los patrones:
 Creador  Bajo Acoplamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vYUV340FGX9atHzRDn67aiQiiqDA6mfb86tHjqtVGHih1WuzuU9q-M_KIjungGZV0ni8_MSu0auIwtldgwEnFbbY7d5spvNpxO1Nfb9vhim007HkRVCnFHapOPP1g2wbiLf3K=w671-h586-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zAv6uFoAxLgMFj-Kzv8noZSb1pkuDmHyCglNyG5G1aE6pC93d7M7jLqDFMDhxoDrX_CPAWkAQ9dD4US6i2-0QWYOb8AqslXOqgXPOws3qZPESSAYE1W_Aly9CArlkjSH6h33_ng=w1137-h650-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JJ9kQbaDyFtzFxDnj_csG-0r0wBDpOhHyfgUXmiJd43L7pmm-yAt9cOFsqmqpCSQLBada6nOkY4nArKFzZVIoI3TYujuFoLvIJ3W0VB762IEvjBelJ4eWIUbM6IGS9gRSQ6a0nw=w1246-h983-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_lFcCXwSoTJoi-ryGKzxoko0QBdxsHJ3HavJ7ZtTKT0_4ompGwAmW6Ch_VokMpTVHUNO8Z7g-4yyUhOd5qjfpL5LREFCeMjGROQIurXY65TZCm0mwh8d6a3SNMCw5im1B1klmdg=w551-h421-v0?authuser=0)
Mientras tanto…
¿Cómo se ve la clase GestorFestival con esta solución?

#### Baja Cohesión

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19oF04HTmVtdKTMryjBfl3IkEtg1dbMttL8lZuEFgm8xKhlVN-if_YZL2VRAKyx_xKoalpPfChCDg_-3m7Yl3RdsTtjoqzO8ob87dcAZQusWcqbMYKrDA9D44smduqLVtF8RjrbA=w208-h243-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Hirm-CCAxl1LYB2aNcLbxeq40DJOmbvT4Zj1CpTtyInIdSFPfWPjQe-bnFzIWNcWs4fDNhSFwKhMcegimQVkMS9g8AIZaOjuA9ZbXUJ3-Xig67UfaIxbfEWassjdukvC7H6Fx=w1280-h687-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1E0NZHsQZW1EHDDy1EjA1oKPbV0ucxucHVPNdbDlOf-ckGffagujWN5fDza_tnZG6et8ThBF7WNlDy7huwI_RrJW_SfGIwC90tOdmXLVdpSSOJP29tS2tG8dq4jtxh0zVhRH8f=w1242-h776-v0?authuser=0)
Entonces la solución elegida aplica los patrones:  Controlador  Experto  Creador  Bajo Acoplamiento  Alta Cohesión
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dPtBU0WDZPQWdHK8e_1mtD_m9S0D3FbkJ0ymjtEZxCqUbx1e--lHj-dSy_nKWDty0yTH1lheEwjRZAnxl16KpyOplYnbmSzwRSVBzjJ-irrE2uqN9rkWhWvjWb-NLIoej2kq4=w1052-h487-v0?authuser=0)
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fjzejKb4_ABVLplXvewhR6hFmvl3S6qiWq_nkIGDa1dfUnGCJGZHCD9BiYPx-t0ASjD3ewzqoYLdGWhC4gFdblLxMJrQxlp7nM9o8kp265iGO1f3oJycz4EAH_-1K7mXAxFWfUg=w1280-h207-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R0FGXnIOCFAvTP9Pj0afUn7h4b7WXHxgwR2Vuyvw6qAqTmW1ZJkrB_Xj2UZS5rBBHe5KJCqNO8Hj566338ZbJPThLO-fdyiHJWI-KheIc7JZIaQPgX0qMZzvekGCqVIUyfXvKJA=w1052-h487-v0?authuser=0)
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
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2C2dh2POh9UHBPyrcVIpN0LtC8HdgJZHaTldvjZPxh8EgDJKuboSImEVLOWrv-58cgTzaZGCxuS8RR-ahOUGhzNliBuTqMgd4nJ_ph5JXRLrAn06sstaDITMWneh-N5S_5FzI0=w1280-h687-v0?authuser=0)
Patrón Creador Problema

#### ¿Quién debería ser el responsable de crear una nueva instancia de alguna clase?

Solución
Asignar a la clase B la responsabilidad de crear una instancia de la clase A cuando:
B agrega/ contiene los objetos de A; B utiliza específicamente los objetos de A; B tiene los datos de inicialización que serán transmitidos a A cuando sea creado
Explicación
Encontrar un creador que debemos conectar con el objeto producido, esto soporta el bajo acoplamiento. El agregado “agrega” la parte, el contenedor “contiene” el contenido, el registro “registra”.
Beneficios
Ayuda al bajo acoplamiento, supone menos dependencias. Como la clase creada tiende a ser visible al creador (razón por la cual se la eligió).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MBj_KN62zOpt6bwSaf5BYsCVsFe0A22DuXFiEDL9oFYi-lraPxX82Fga-cH5dLTtwRwrVirUL0re2xR9s3qnXuVmtfcV-qy_shEg7PnMB8OBzZrAK1d812Mkbh6u_dynRMHwoOQ=w1280-h239-v0?authuser=0)
Patrón Bajo Acoplamiento Problema

#### ¿Cómo dar soporte a una dependencia escasa y a un aumento de reutilización?

Solución

#### Asignar una responsabilidad para mantener bajo el acoplamiento.

Explicación
Clases más independientes, que reducen el impacto de los cambios, y también más reutilizables. Un grado moderado de acoplamiento es normal para crear un sistema OO, donde los objetos colaboran entre sí.
Beneficios
No se afectan componentes por cambios de otros componentes. Fáciles de entender por separado. Fáciles de reutilizar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h7l_4-NRANpYgNE1hQ245e4lXYrw-ogOFPKM4bMhsSjWdVdVEGurYDzN5XNUoyHMq42_3OgkccidtAP85ZkZedcsrSGg0aK4-FbHddVsByG-n1ZXTaZW7z3pySCrwpvABawfuXQ=w1259-h1129-v0?authuser=0)
Patrón Alta Cohesión Problema
Las clases con baja cohesión a menudo representan un grado de abstracción alto o han asumido responsabilidades que deberían haber delegado en otros objetos.
Solución

#### Asignar una responsabilidad de modo que la cohesión siga siendo alta.

Explicación
Una clase de alta cohesión tiene un número relativamente pequeño de operaciones con funcionalidad relacionada y poco trabajo por hacer. Colabora con otros objetos para compartir esfuerzo si la tarea es grande.
Beneficios
Mejoran la claridad y la facilidad de comprensión Simplifican la evolución.
A menudo se genera el bajo acoplamiento. Soporta una mayor capacidad de reutilización, porque una clase muy cohesiva puede destinarse a un propósito muy específico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c_qy8HRIkYdyIUJ5B3LqCFN0Q3dEAXAXhyow3vu3NiT_Pj5YEk96bZ2Fvq_kWHJb4jha6wMS_tlQelHCccjBG_RDqu_LPYEu66T48d7M3LXOTVapuIbRceqzXbYuyp8UOT2aqIg=w1280-h687-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HhQwC5UELz8cq1CvN-L1SYs81LkL_hr8tvvWMjOw5uFmXTHB1oCCTZkTjkyHujmAUbgbTlEvpClQtq7w1S8Gr76dmvv-Yz5eBte7_Y9BDCqPzXTpEMtp-JL4BpAIPyQvLYbiM=w1280-h863-v0?authuser=0)
Realización de Análisis del Caso de Uso Registrar Festival

### Vista Dinámica con Diagrama de comunicación para el escenario del Curso Normal


### Vista de Estructura de Clases de análisis con Diagrama de Clases

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ewkn3q4rVCYia4E3ctRN9wZzEr4-QMqy8yBgLPU4CHwZpUCrrrDuH4nqCYullFj045kxFJmoqoiabLMqIm2qCwmwvN4M_2sUhgVV8ZjKUmYtFLUgKPIHut21eLm-WxKIEbrE3uw=w729-h468-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IUD-QmSMLL66bANp02GxO-XnxzwPSIB0vQtOjaRwvCYImWPHjdNhWF6hCtXWEuJIlQjy-sEiqmQSGcBVlJaI5I_HR5vYO_c1ZaYOrcqPLdbTkpplfDxNTI-WXxJt6z2fDQazRCA=w966-h446-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Vl21oiplFPGQdQyXj2ezlue8vP0PtNHbPLtcQjDM7J7NEJmSC_r6CTk2qq3R4AhKqGP60G00_28Oct8veqghG_L2mQHnonhJ2BSi97ldr1mXHiEREfA_v5fH0se-ePwzISUfxHg=w730-h371-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r6_ZXdlJDQr-HdXdbJqBYdFGfM9oOADe1xmv7FXrYpawFS4B2eAsplNXPNYL5_exyzv9feW1jb6rGmCB7zr1Rrq4mC8gKO7P_vVIaAPqaj816Ah9REnVwwAEyW3Qb4ubSJDsNYg=w246-h205-v0?authuser=0)
Repasando lo que vimos…

## Modelo de Análisis Clases de Análisis Realizaciones de


## CU de Análisis


## Patrones GRASP

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ly1V9aw49cGoQK7lSb6aRuojSE6nBXgCfh8LwmI6Y0dJSGp29GsTfhzHChhHPIvFEak0McAACs_kMCUvLMEeUray-AGbb4ENC18ZrlTRxhxp0faaK8X_NfdA2i_fPmF9EsUXwFQ=w344-h335-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EWbr1maS_bfNNNuI9WQv0Y3K4022O_jAJPHtvcIfiHTbl4gfXvVXftjHGC82LIVxcVIE_rTtMJvo7QQtC16AiyFXqqymEqJRFgaDANReUiF2u019Il4gHy0DJ4E-rFNNIqmX81g=w211-h205-v0?authuser=0)
Patrones Grasp para Análisis

#### Experto en Información


#### Creador


#### Bajo Acoplamiento


#### Alta Cohesión


#### Controlador

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NIXuuAKPx-f8Y4YctxNe8ks0tijVK-pk0UzJw561JHVY7wIjAIzKUBok0229Zsz3IZdUs9UVkm1nHPm1vK3RIYiZrzbV5NhqvT0uaTtlylZv66rIzEyuU1EYj8pMVCg15YXfcww=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rrYJVSisGgURDCorMMYS8BliqkQGp5rimwKrHgncuvP_Rqz50XOXSFtBGyoRFvIiKvys3BpoHAbvQGPMiv9ifcu374yMFwtnjmGvb3MKIKs2M9CSXp4CAfw6XTnW0QlQAQ_KB-g=w291-h200-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Finalmente…
Muchas Gracias!!!
