# 14 Diseño de Persistencia.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento aborda los fundamentos del 
diseño de persistencia en sistemas orientados a objetos
, explicando cómo almacenar datos complejos en bases de datos relacionales. Se detalla el 
problema de impedancia
 que surge al traducir estructuras de objetos a formatos tabulares basados en tipos primitivos. Asimismo, se exploran las características principales de las 
bases de datos orientadas a objetos
 y los conceptos clave del mapeo estructural, como la 
identidad de objeto
 y los 
conversores de bases de datos
. Finalmente, se examina el funcionamiento de un 
framework de persistencia
, el cual facilita la materialización y desmaterialización de la información mediante herramientas eficientes como la 
materialización perezosa
 y el uso de 
proxies virtuales
.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wuvEuHZWKw4evt32QeOUoRr0HBa7anhcGHV6Hu2Gep0T8Ml780memsw7G9sSO3bAnMnyyQiIHFVmUhzzs0FurCK4IJBTfoSmn_cBELFm-CpuYbsnjG-QT93asi3HAfDKztL1hnA=w731-h345-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aKFU8mDJZXPxHkeebbtI6QMJqX0kDbOlx5a-haQr4BdNmv0_hv62geIYzDRvGFNZ23nAl9Pgf6LO8hK-1GeN3jkt5dH4FRpbMdnymqe2Ed-QUNvFHvYTmSAHlLgMz59iUzGmq1g=w330-h153-v0?authuser=0)
Diseño de Persistencia

#### Ingeniería en Sistemas de Información


#### Cátedra de Diseño de Sistemas de Información

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a-3LT0bwlzx2M70ysYbDCoy19yY9ailWRD9YZ19kF-Mkke1bAnPvW1XACJYZZSxp-QU4tkcKXLTljyudgZBPpDHOpa43rm2THs-P-JK3jnnbEdoOG3e9L2xbw0ykDGrRwTc6D=w904-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AuzI5bUdKVmrx0eSVY3f8qdC0eES4MI_NrzTUD3Mk_YCnGhyfA3pj4BwFpJw0mTA4pOpbuFE6re06rmbUYnnXuzCYfxWTXoUbinQWf3ad4cukpuuMPKem10v0LTKe-8SErwTTcQ=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08yf0PjcTPSxaEgYACKXOCBI77YPnx85fwJgwl-Z1bk7z36U1XrllnwhCzLTAPtMdBcqb8q_BdRV4iN0xB78jqGCc8Nu-RS0oOrcVn5VmPyCJsbW_r_h3J8sUdgCZfG_YG0378CA=w193-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dH19kwBXM81XsspaBLj4CYbienu0PV1tq_6nwmWjrjjnaRtvihy3YfADqEvdvvty4ytncCuI3K2e43pGC2dTBayvdaSAElazsXa8D9YCKuL5oJsmW4D6HzcrGc5QWAYEDLuYB=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1N5pDZ_yI9NfQyzC0jrBSkPeRACzSkq8eze8w873UEnf_g_K91cQWVkk46KiZI7QCmwE0MzyCfCmyIaimRlBhgpYDpI9GcJf_D3yhUDKT2KYcwqOBZ-HZRRVFEzQ6cvUkAz0n6Ag=w203-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J0Fob_6XeM4JUjFcBRvBKhtTBhAJDMi13UlcwVFdCu21Aects866VMfR1LZmrG10drFbWzkLEi3orW-5PxGLFOpawrg3dizJxLkuv0Hfve5X-Qz0fWXjbshvPXIm-Cs7G9-WaPw=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27ol0kkIp6gA-sHEVHFh9WhsekrKys1KTll7H1oFtqS7CpWMbGIaMWCo9mY6Z2QQutVtXcmUUGreO5gGoKxfmOiWPFSX-7MIbCc7OQlTacOqXJ56jkH_Rudcny2wiTXFVFA8YjNw=w186-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2REac8oQdJBdG-atu91sOJT425IHSUuYULng8wueYbsQGNtPlia9HmU5fm4P7J2dfmnTqiNojjNaGjHvsHRsVc-8SHd-iYiC9Me9ek_HAb61FXhwKYyjZ6V5vy7ePMR1DIvysHbw=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27MHn7l9_gK1fcrdhbRn5JcvVEk0GcswlxdlRvbR9SqMaE3YFwoU5eGNY56Bn_H_gofY82p6rqtx16RY5PnUrkvriXp6KweirZbQTWD2DZsxfVrphx-aahFPIag5JzZqWL9dyjNg=w237-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01TV0DauXe27IUvrMyF5Qjlk4bwIFtrJJK1PuWo_OJ3UBbNAymfYds_F4xgsNiCmYidYRuM0EkxoOqdGvA01kfTXlhctkyjtAT7eeqv6HvsC0U-cUsr9Kqs8JM4XWlL5lQL60B=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1BwNta6fpgZlqn6nGqDZF0R6-PUXFZqVT6xmcSfIMDi9CNsOvsuHEjJfwejYzEYQbsrM6xyQKzX2bEwuSRSHexfrNSe2SWVoKcl_eyQoa1cLz4_thg0SIbBXFI0gLaMgXlSqXD9w=w214-h120-v0?authuser=0)
Paradigmas

## Estructurado


## Orientado a Objetos


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-sIbrv496Tgqogjlw8zMtbrHehER5jij3ulZ_wDJKppFtoXqR1OtIgLeqzMIk6W2Py7ywClwH8Gvd1C7USp902GS6shoY8Agu7c9COGhYT8HoA64VyBE37KekFTIclxAcupbHGA=w1208-h911-v0?authuser=0)
Paradigma de Objetos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2a_NIWY5HGosbQX2nHsA3VOiJBhSBE4cWn3rbackYH6OCjOEut13wzvg9z6zz1FkKh6UMoOwUZgmM4Z0tRtqfkFXa6DUyHyW1m2ApDNhj2YQt-9hw2dNXnDl6RDWCl0DARCZwDNA=w562-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Of2ioMsfDaOIS900E3uQs0xebtiRLFmtA3HGWMgJlxsnqQ5-Sw8ZReADczB8AlP1JSRMx-hPDreLQ6nNTqTqnJcyFo0a7rkIe9CC9p8n8tUQj791iJ5gn3Lm7lnZIH-8kCdvmNw=w880-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UPh7pzecKCA07eTJHtV5dHupUmnqcROx-X8iqUAO3P1ulM-LnlBqKfrlvy_UQYWgJq_BPmtMGyCDoE8cDWhT5BDI90ASQS5VaXHykevS4lec_gCZf1Of_vwjaervsuCitYE-r4A=w481-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14sEJhsEaLl2jP6eQdIbMpold59YnCaN8EwMp5GetEG-kwfxlX-QgajfYS5aEFEbKhBIZofYqHJ4h-IqT1cbpWZrwWEN70GkSYZluKZMCPPlI1asuFIyjoZDHWJzhv2K9Nr5rUBQ=w323-h240-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Kd6feRc68Zpjgh8-19SpJ2Ozp_UhgI_wYXr44BjODkW6jMZyiPBZbN39Iva9T-GBobGZxlvB3MC098ZJVmSc8GlP-D_GP-xbokYzlkrUgIxjCUDVzMxUYaRV-D1uBlVfHCer4mw=w369-h285-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vs15xpbSPSS_6Pi0jszVyfbh9vggSqh-xR-5bC_gA8qssUj0Xwm9HJBuLXsdc-IbBN_sKDD7s9PAkJKJnH-XI8tTiXZ0-_Kwk2aVGyaOSU-IQpfyezP5G12odZsjWuB465s_w=w695-h79-v0?authuser=0)
¿QUÉ SABE O
QUE TIENE EL

## OBJETO? Identi dad


### Comporta miento


## Esta do

¿QUÉ PUEDE
HACER EL
OBJETO?
¿QUÉ ES? ¿Qué lo
distingue de los
demás objetos?

#### Una clase es una definición de un conjunto de objetos que comparten una estructura común y

Clase: Auto Objeto: Mi auto
Estructura Objeto 
La clase AUTO puede tener (atributos):
marca modelo color dominio añoFabricación
Instanciado de la clase Auto, lo que significa que 
asignamos un lugar: Identidad y le damos valores a los atributos: Estado 
marca: Chevrolet modelo: Classic color: Blanco dominio: MBO056 añoFabricación: 2012
Comportamiento o Responsabilidades
Comportamiento o Responsabilidades
La Clase Auto puede:
encenderMotor encenderLuces avanzar retroceder estacionar obtenerNivelCombustible
Lo que el objeto puede hacer lo toma de la clase, es decir el objeto puede hacer lo que está definido en la Clase de la que se creó: encenderMotor encenderLuces avanzar retroceder estacionar obtenerNivelCombustible

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AphABW4U3aMgHUYFr2or3ne7qsoVO3pXpMCEZj3MN8qnUz3JThh4MrTTWTkKvFNQG9XY3i3dxA-aYdIM2l2Z074J_Cahf-Sa2GE2iKKF8d2gw8kFdTGShc5M7HLhyij5KdqGG=w904-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yX6OB4AKjkwmIvYdsam_iC8a9UsQP63QHAbdlqExrnT328qveJTmc7eAFirTTLhV1ltfOWizW7E94RfZZO-bpa5o-DrNatfv8SkLwMUx6yc8teVjHGSYUQDn73pB6s7tvPnWXRg=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11risC9s-ly1HQxtd2RJn_MIG66okqUToQrejiYS0jXoOgKPY-H-bzROC_jl5JmAIsvfg8FD1QL5--c8jP4Emweaoe4Jr6FeGYwfPrOfUo_6C8WOpNlcd2n0tjbr6T4YygJyck4w=w193-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ne8dN5jqllJ7VgHQjT7Q8kf12kywfREMtBfmliQpa8qduMVcwH0UQu8G8JRCHNo8aGsnGYGpaXTEWpvGbzbQY0e4ASN_mR-ztowl1U0xG1eln1ahj0jIGTU6l_qaFK28Dhpq5jg=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25TVxRhw_MsW7uqyFg0Wm0UEqf69_NrxRMZa0OZPa8wUU8Rv_9aVF-Ho0mrKnoxkGBA9cCgBMZEgStGQ8rU4R8enMVfwc1u7k60_oaBMOcAbsO0-qhu5tGnMPwYxFMa3vAxP8Vkw=w203-h88-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qrhqHp-LqlTP0wQSrat-2zuysyLQ0depwMRl474bWKMT1VVT8viZ4a2T5Tvh5jjeqfCHasAn9iHwDdKn883ybGLMG688ZASj-evjM4yHGQKJR2Ep8GN5sNCsfv_qsOv5zEMI3gA=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_T4EKd7pe0JoNZKh0lm1n-gGRb142ExootoglN5TP_h4LlGodBp_r4DsDylLstm3AeeH9TsQyunaD0mjbE8qsGwZJTg5Q3iAP009V2PwEhoMn_N0acXoC9cmwfxXmElcuQEy8Wg=w186-h87-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Np0qJEIees2rdLjtfBFZiDdol9i6y21V-J3Kva2qGJiQS5WOfqM11C7TU1W2ctizQwJ-gNqHjsHJxN7H5j7f4PEp2EogPmc4xUFDds3WuYSGD1QUeQGI5_99XJcpMjS3okpV2fQ=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YETdr_KcQ86zXRBQzZ1mL3jYLHAuaWZvxg7nYyyAhWtyis_UkljEmxrmp8U52ruYbm8wXam_U-3D-Xgvt3yWlQlCwrCmdguCvY5Q4NcMaDLyMF8HhuUzeN5AZTpqinAxl9mY-_A=w237-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0C2_zKbtnOmwtWdAaFuJV2-K3OJ3g0Hb9vQ42NMAf8jlfJotTE-1Q1M4OHLCMmrYfUJhCS5Ecgf2xcmwUphnV4EuxdnEQV4WRZj2oQ_AK4Rd7WWf4an31W17j-GWIqgddLrbthPg=w230-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OW3qNYEQdRgkwBh56txw6CC2FmMWK_5myexI-bcZGLtTh7-trtvZVLEt7rK3vOkZIizGgxpWrWCwFKaOaScKkv_bN4x-Sq2TxbNFcVn4PcIuVbd3mPAdLa8j2Bb5ssHvj0HjY2A=w214-h120-v0?authuser=0)
Paradigmas

## Estructurado Orientado a


## Objetos


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vTn_FPQHF-7KMiZglRQqnMftOioLGkgnbJ74oi6xOOkfve6ikj5uGfBSvMYdXqEX4_AlPP_zBRQSFv4F0eLOGIl4LYNye38V6vylOSpl_I7juL9UqnpIOXsq1Pn1KcAb3TfbtRw=w787-h987-v0?authuser=0)
Paradigma Estructurado

#### Diseño de Persistencia


## Modelo Entidad Relación


### RELACIONES

Una relación es la abstracción de un conjunto de asociaciones que existen entre las instancias de dos entidades.
Tienen sentido bidireccional.

### CARDINALIDAD

Indica para una instancia de una entidad A con

## cuántas instancias de la entidad B se relaciona.


### OPCIONALIDAD

Indica para una instancia de una entidad A, si la

## relación con instancias de la entidad B, es opcional u obligatoria.


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06_D8GOdLKU5QrhatyMbzHMOmRD8y2hRhf73ox6-bI3ywGTmwCsQ7GaZENCTkNoRxYKqNNbq-v32SKvPNnDf9AtSmmITzPEbE4qGny-tiTXmBkJMGrNFMBX9jqR1fh1KSOvfnPQw=w256-h256-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RnCbPTcbkgs1OyJ7nUPVDTXfg-3EyPMklNLLvTWdQI-EOq6HCE3DrG6jwNxEq3JIq5U2ZYD4LaPHosaGfOR5vw4p_eWEdU7dexhSO6rRVOrFw0YfveKfKK9jQcAE3x_bg7qouYg=w197-h197-v0?authuser=0)

## Modelo Entidad Relación


### REGLAS DE INTEGRIDAD


## 1. Integridad Relacional: Ningún componente del atributo identificador en una entidad


## aceptará NULOS


### Película: {NULL, 2014, true, 122, 01/08/2014, "Relatos Salvajes", "Relatos Salvajes”,1}


### Película: { 2, 2014, true, 122, 01/08/2014, "Relatos Salvajes", "Relatos Salvajes",1}


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mZm7wcjqTjk8ZkIdErwmg8sxZZ3icyvmWG3SD7qam42fTc_uBnN0rYlVpXTS7HXkXCDEg8f-CBedon6YQiPaksHFYLr49az9ZQUbCcCYDUomzfbDPY3aOJNZkLfpiTpa5E-k=w411-h136-v0?authuser=0)

## Base de Datos Relacional


## Un atributo a (posiblemente compuesto) de la relación R es una clave candidata de R, sí y solo sí satisface las siguientes propiedades:


### REGLA DE INTEGRIDAD


### Clave Primaria

Unicidad: no existen dos tuplas de R con el mismo valor de a, en un 
momento dado.
Minimalidad: si a es un atributo compuesto, no puedo eliminar un componente de a sin 
destruir la propiedad de unicidad.

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XmjssfRpAKyb92vQ07qKTGZqhWXZPiWKH4B7jxajgLSlFwJiwyX6iZSqpyZXBOlmVYHKJ_Bnv3AGcfN48zeMd0AGavrT2mG0cUw6OD2cW9OHwsU-31z7cNyHL6Ei3oX66zAAB=w256-h256-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QAzh0GTuoO8vSotQNcdBWDIu0Y1UBnfSyUjVLGMP0Y_L9LLfDd9fXiYpHWoSq2TxMNoDlKrWH6_8Ibt1Z8Xb6Xkg1fvjWXdHYP5j_DS3XlzgD9bGAfy2ysGfMSZJRmxPI0QFCKw=w197-h197-v0?authuser=0)

## Modelo Entidad Relación


### REGLAS DE INTEGRIDAD


## 2. Integridad Referencial: Un modelo de datos no debe contener valores en sus atributos


## referenciales para los cuales no exista un valor concordante en el (ó los) atributos


## identificadores en la entidad objetivo.


### Película: { 2, 2014, true, 122, 01/08/2014, "Relatos Salvajes", "Relatos Salvajes",4} No existe en la tabla PaisDeOrigen una instancia con id_pais_de_origen = 4.


### Película: { 2, 2014, true, 122, 01/08/2014, "Relatos Salvajes", "Relatos Salvajes",1}


#### Diseño de Persistencia

Problema de Impedancia
Los tipos a ser usados en las tablas son mayormente los tipos primitivos
La información se almacena en los objetos. Por lo tanto necesitamos transformar nuestra estructura de información de objeto a una estructura orientada a tablas
Crea un fuerte acoplamiento entre la aplicación y el DBMS
Memoria Volatil
Memoria Persistente

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nasPlw38-n1LEioYpd5859KN-dtBzl0UYCn1io96OXJIKyT_YifpWOB3zqXVDrGGVVhpSMDERFZC7MscG0MCpfLkPCMEZlzyEkiPEEDAyrVo3G9hMYf7rflct_rW0pa9O3wCE=w1280-h244-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2LgsuRwwvwbVoX1mFSI7yqd47V1kpdJBggDba-pfOW42sZZwvO5FfkRU5FJKeIDlDIbXw86jOZURIApDsNts3KS7j-gAFMbHouUlTi0i7VUfk6ScaI9FD7ITcYNVl_--TQXPoZJQ=w1280-h274-v0?authuser=0)
Mapeo de Clases a Bases de Datos Relacionales
Mapeo de Clases/Objetos en Tablas
(1) Asignar una tabla para la clase.
(2) Cada atributo (primitivo) se transformará en una columna en la tabla. Si el atributo es complejo (es decir, debe componerse de tipos de DBMS), o agregamos una tabla adicional para el atributo, o distribuimos el atributo en varias columnas de la tabla de la clase.
(3) La columna de la clave primaria será el identificador único de la instancia, llamado identificador.
(4) Cada instancia de la clase ahora será representada por una fila en esta tabla.
(5) Cada asociación de conocimiento con una cardinalidad mayor que 1 (por ejemplo, [0..N]) se transformará en una nueva tabla. Esta nueva tabla conectará las tablas que representan los objetos que van a ser asociados.

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34rPnUgYARmYs3X7TiFUXiEeg6yn_MbGTNHHqLwyg4dZWtzz6K5qjCQ8pIwZc_djH2RAQsKhQlr1hYUtHwrCbd4RauQ-yOlAj0ogM4qZDBcETOGIXC243nH1UpkvSFcrzUsLHaCw=w916-h855-v0?authuser=0)
Relaciones entre clases que requieren persistencia

### Asociación

Agregación
Composición

### Generalización


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gkIllHMj2mOx8ScNwDR8fb7T_xtlmpw6dgZxew2OW-bhf79SaPmPLamNrKK28zTpBWzK3meRTTHfPdNMfoOCUukhuLtFJWiNhr39FGk7-eZD_f9UIbGFR6XVjZetysEKsZn5nDQ=w1111-h197-v0?authuser=0)

### Es una relación estructural que especifica que los objetos de un elemento se conectan a los objetos de otro.

Relaciones: Asociación
asociación
navegabilidad
multiplicidad
TipoDeGasto1Gasto .

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13mJIcuzknBDifieP1eIYZBJJwG0JD0gJGhe9_eY0ZjGTVB5oZ-eosJXMS5dgPIFxhW2Uz8GPVMZ-E2Zxds9aiJ7KVXz3B8P5rzY7gtQCDPEpLnOuwoofAwcr7tVqIaTl4-ObwXQ=w1280-h141-v0?authuser=0)

### Es un tipo especial de asociación, que representa una relación completamente conceptual entre un “todo” y sus “partes”.

todo parte
agregación

### Es una variación de la agregación simple, con una fuerte relación de pertenencia y vidas coincidentes de la parte con el todo.

todo parte

## Relaciones: Agregación y Composición

1..* Factura DetalleFactura
Estantería Estante

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1U3IvQaRdBbZtnWaLDQHU3dk9hYQfAL1v-UBFEEdyT2L3EX2sYdy2c6WDXMY1dWu9gAmIfRCTqOBq_tZUpmfd429uYRhOWfDJbkq0K_gug4Ox5VhXvjwlmGfQpTT4l8np-M3klKg=w1268-h197-v0?authuser=0)

### Es una relación entre un elemento general (superclase o padre) y un tipo más específico de ese elemento (subclase o hijo). El hijo puede añadir nueva estructura y comportamiento, o modificar el comportamiento del padre.

CuentaBancaria
CuentaCorriente CuentaDeAhorro
ElementoConInterés ElementoAsegurable
Relaciones: Generalización

#### Diseño de Persistencia

Opciones para el Mapeo de Asociación

### Mapeo de la Asociación/Agregación/Composición


## Muchos a


## Muchos


## Muchos a 1


## 1 a Muchos


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ghv5Oauys4liOCdVADAc0WmXEejmYf75B1-OEraiWVUbY4BH7B5agDQaVeVhG7-UmNKiLpbDDQ5gb433Ut-ntoAOHPgTMP_9MaSDofnZ5PKSIBJSXX5-zCRgMJ_Iyo31GgOUFag=w241-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CPF40zTFuBfTQVeZY6m9YWt4F2ixw6J8EMl1g64WDPQvsLMw9nRf9TOFihaHpNEmcJ3Pk17_NsD9oiVerpPmURIQSnNSiyNaxay0g7cw1Rh4nSzrEjaMFlWtxBpG3kx6iK7PF=w291-h269-v0?authuser=0)

## Modelo Entidad Relación


### Cardinalidad


### /Opcionalidad


## Uno a uno


## Uno a Muchos


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PzT_bZOHOgfuZetKIAeILIB9X1h7hbwguJ35oOdAdunPmJ82Rr8Py2vXXSY_9znmkk594yq9UIs0R8oQwjPzdMQnBykoyn2y3gE0iXNXN847-c95vccJYZpq4m4Hr7z7ozXjZVQ=w298-h283-v0?authuser=0)

## Modelo Entidad RelaciónCardinalidad


### /Opcionalidad


#### Muchos a muchos


## Muchos a Uno

dm DER Complejo de Cines
Pelicula
«column» NOMBRE TITULO_ORIGINAL AÑO_ESTRENO DURACION DISPONIBLE *PK ID_PELICULA
Elenco
«column» NOMBRE_EN_PELICULA *pfK ID_ELENCO FK ID_PELICULA
Rol
«column» *pfK ID_ROL NOMBRE DESCRIPCION
RolDelElenco
«column» *FK ID_ROL *FK ID_ELENCO

#### Diseño de Persistencia


### En una base de datos relacional, nunca registraremos información de algo que no podamos identificar.

Para las claves primarias compuestas: cada valor individual de la

### clave primaria debe ser no nulo en su totalidad.

Esta regla se aplica a las relaciones base únicamente.
Se aplica sólo a las claves primarias.

### REGLA DE INTEGRIDAD Relaciones


## Base de Datos Relacional


#### La clave ajena (FOREIGN KEY, en inglés) es un atributo (quizás compuesto) de una relación R2 cuyos valores deben concordar con los de la clave primaria de alguna otra relación R1.


### REGLA DE INTEGRIDAD Claves Ajenas


#### Diseño de Persistencia

Opciones para el Mapeo de la Herencia

### Eliminar los hijos


### Simularla


### Eliminar el padre


#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12SU6vCDVJdO9u93FYXFvYsujPrMX6s-roSw4BDy-IbDd3qyVG4qFP1aF4ZFow8iy64yy43w_O9_DcmgyEyWLPqrKPNcY12_gFB5r2ve4RzDW4SLHzABkucvDOMDz41Sv72kYhxg=w432-h310-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05cn4rfW-4IDCgUa651ir18vfYfUqUGzgGFEpA3QKtAjleogQPwiRH8J8cLa0s0zFrpcTIr5tuXyauTZ9CvKmo_bMxsohBe0ie7iSWOxazUDYrsdxugrPiBC40HEyWf854hY-tew=w312-h352-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vGgARoAVICg7wmqWcqpR2Bsv-wK-uQTbmP-a4BYhXIhnodpPliF1BLSiDa8KfR68XLxIukBrEzd0Qb5wKlqOtQOsL5gg85tpGbFWE6P0FAWI-kpul1QY3jDPl3tQubg2ll4JwDQ=w307-h276-v0?authuser=0)
¿Qué pasa con la Herencia?
class Domain Model
«entity» 
AutoridadConstatacion
legajo nroPlaca
«entity» 
Conductor
«entity» 
Persona
apellido dni fechaNac nombre sexo
Simular la herencia Eliminar la herencia – eliminando al padre Eliminar la herencia – eliminando los hijos
¿Cómo sería?
dm INFRACCIONES TRÁNSITO herencia
Conductor
«column» *PK idConductor FK dni
AutoridadConstatación
«column» FK dni *PK legajo
Persona
«column» *PK dni apellido nombre fechaDeNacimiento sexo

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xMGnMDKl1k3I03RrfYA7IAYEl_1ZobXsL7PUWaYhf_8u0_Gp_ECSKeVkpvmmruN02vhlq0sLhot5AioWU22izY7ILeYjubccLuSsifEHZHDujO_Db0K-K8otV7fhqs4fHpU-6=w400-h200-v0?authuser=0)
Caso de Infracciones de Tránsito Policía Caminera

#### Diseño de Persistencia

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qO9smHFtcESpYXZ5V7ZT0mZMQzwemAbdtul67r12zltTwQOqa7ixfwrkTETsI9x3X2splRG8aVfUDhc5cX9dqXH2T3O7aI_GBnK_3ZztQTFlMlIgMV9vzxuzPlHE5RNBaYaz-nw=w1280-h1093-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RqEHQvkEjC8fc6cZwvuFim-OdZndHjsaTAcZl_8AHyRxfGtuHweyR6jExWNTynoF64rGFSvzZnvlj7icNOvya9JrPU8FWhsGyhGrO1XuFgo9Qkm_veGw93flVa7WqCeBfoEwsbA=w1280-h1093-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_veA6ZRAq2D1gf7Aadn47M_Z6FvdSLB6zX00MLwSBnxU_d91DZP_uTNgE0UFqhGoDdb1Bt2uFbvIttIyUKlUFtDFCEM_7RjXlT6QrslHYmEbAhcGI9R8l22zJv1lfg49LtlB6=w1280-h1093-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RqKHUB5fqZuVrPYRLxeqHRsxyP-iA_FDGLoXQgAmb1d5OkLHTjCL-Sfkdpi5EEnBWX_STjGVGtXnc1gzV5P1Mf98AavGV6QK30SoXgIywfcsj21YUMX_aXOMWOWzt7VItDQ4e=w1280-h1237-v0?authuser=0)
Diagrama de Entidad Relación resultante del Mapeo
Modelos de Persistencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TB5VpS83yRNvCL76_ecdkClcNmknyX_l77OKt-0fFD9nC2qpxpfqBjM6is12xfEJ1WU5BS5V96SqEkvssXm80B6ecZIjCbA93o526a54K7A6idIwloJjOKZjqoCaYWrUstQ3KEw=w1280-h671-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3W92lpKtreGL9wwUdjRLuE1KJclbMc9jsDgT5vbFFXdRPkH3J89mCNqPn9bfMza_a3zhhyBK3vD1A3HxjaDJms1KdlzWKPya0-pxt7wGRgPDAm0QeBmsPTcryksj0h_72gFfvq=w988-h759-v0?authuser=0)
Modelos de Persistencia
SuperObjeto Persistente Esquema de Persistencia
Object
PersistentState
ObjectState
PersistentObjectAdministrador
ObjectToStore
Item
PersistentItemState
ItemState
PersistentItemAdministrador
Item de Depósito
hereda
Port
RDBPort
Super Objeto Persistente
SuperObjeto Persistente desde la Arquitectura
BD
Relacional
GUI
Modelo
Objetos
Negocio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fx2JL54R67tOHI5hLBj_SdHmXqsaQp3B8RXQO37_2n4f07H50CGJbebkk4u_UlriQ7qGZweADGIorcqecNVPlqksx-OxMlZgK1BZ73IbJoLK7VgQYw7RUyxBJCn5sMSiMVgo20w=w475-h554-v0?authuser=0)
Esquema de Persistencia desde la Arquitectura
GUI
BD
Relacional
Modelo
de
Negocio
Esquema de Persistencia
Modelos de Persistencia

## Super Objeto Persistente


## Esquema de Persistencia

Características de las BDOO
Objetos complejos. Debería soportar la noción de objetos complejos.
Identidad de Objetos. Cada objeto debe tener una identidad independiente de sus 
valores internos.
Encapsulamiento. Debe soportar el encapsulamiento de datos y comportamiento en 
los objetos.
Tipos o Clases. Debería soportar un mecanismo de estructuración, en forma de tipos o 
clases.
Jerarquía. Debería soportar la noción de herencia.
Ligadura Tardía. Debería soportar sobreescritura y ligadura tardía.
Completitud. El lenguaje de manipulación debería ser capaz de expresar cada función 
calculable.
Extensibilidad. Debería ser posible agregar nuevos tipos.
Beneficios de Usar ODBMS :
Los objetos como tales pueden almacenarse en la base de datos (frecuentemente las operaciones no son almacenadas, solo están presentes en la librería de clases en la memoria primaria).
No se necesita ninguna conversión del tipo de sistema de DBMS; las clases definidas por el usuario se usan como tipos en el DBMS.
El lenguaje del DBMS puede integrarse con un lenguaje de programación orientado a objetos. El lenguaje puede ser exactamente el mismo que se usó en la aplicación, lo que no fuerza al programador a tener dos representaciones de sus objetos.
Frameworks
Es un conjunto extensible de clases e interfaces que colaboran para proporcionar servicios de la parte central e invariable de un subsistema lógico.
Contiene clases concretas y (especialmente) abstractas que definen las interfaces a las que ajustarse, interacciones de objetos en las que participar, y otras variantes.
Puede requerir que el usuario del framework defina subclases de las clases del framework para utilizar, adaptar y extender los servicios del framework.
Tiene clases abstractas que podrían contener tanto métodos abstractos como concretos.
Confía en el Principio de Hollywood: “No nos llame, nosotros lo llamaremos”.
Ofrecen un alto grado de reutilización, mucho más que con clases individuales.
Framework de Persistencia
Debería proporcionar funciones para:
Almacenar y recuperar objetos en un mecanismo de almacenamiento persistente.
Confirmar y deshacer (commit y rollback) las transacciones
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04Tp00QLrak8mkf3rKVj8pByaf3ivXAlfMVljB-2kvI6MyyoQ1Q4_iDnpQ3SN-Y3lSAyXqEenoyQ2Jh5_NfmP3LBiQmQ2eaHDwIYpdb9VRcUSc2I3E1p27xgcwcYm34jHjYxj1ZQ=w475-h554-v0?authuser=0)
dd Deployment Model
Ventana
CoordinadorDeAplicaciones
Dominio
EsquemaPersistenciaRelacionalObjetos

#### Base de Datos


#### Relacional

Framework de Persistencia
Ideas a desarrollar…
Correspondencia (Mapping): entre clases y tablas; entre atributos y campos. Es decir correspondencia de

### “esquemas”.

Identidad de Objeto: identificador único que vincula objetos con registros.
Materialización: transformar un registro en objeto
Desmaterialización: transformar un objeto en registro.
Conversor de Base de Datos: es el responsable de la materialización y desmaterialización de los objetos.
Caché: Almacén de objetos materializados en esta memoria por cuestiones de rendimiento.
Estado de Transacción de los objetos: El estado de los objetos para saber si se modificaron en función de 
su estado almacenado.
Operaciones de Transacción: confirmar y deshacer
Materialización Perezosa: no todos los objetos se materializan a la vez, se hace bajo demanda, es decir, 
cuando se lo necesita.
Proxies Virtuales: Referencia inteligente utilizada para la materialización perezosa.
