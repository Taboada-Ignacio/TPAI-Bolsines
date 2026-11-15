# PPA_Frigorífico V1-34.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El documento presenta un 
caso de estudio integral para un frigorífico
 en la provincia de Córdoba, diseñado como un proyecto práctico de la asignatura 
Diseño de Sistemas de Información
. Su propósito principal es detallar el análisis, los requerimientos funcionales y las 
especificaciones de arquitectura de software
 necesarias para modernizar las operaciones de la empresa mediante tecnología web y móvil. A lo largo del texto, se abordan procesos críticos del negocio como la 
trazabilidad del ganado mediante códigos CUIG
, la gestión de cámaras frigoríficas, la creación de pedidos, y la organización de planes de entrega con 
seguimiento geo-satelital y notificaciones automáticas
. Asimismo, el caso de estudio explora la implementación técnica utilizando patrones de diseño, bases de datos relacionales y 
requisitos no funcionales de seguridad y compatibilidad
, ofreciendo un panorama completo sobre cómo transformar un problema operativo real en una solución informática estructurada y robusta.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g6O6CcKQt4f86gVLS7TprOdLhby0xdEpDle_IVNdGIRg4ymP40JhKApgXWUCdbSKXmy1Yjy5_OcT2fw_KytTVuNtZz35RDkjQVAXVCawP7zYTjj7mGJdtLjFKqZ1F4Kkuslvh5w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01Lq_-aVvHeiBXNnGhB3-HDSIqKryr0wlOOAtKvp4EThb3mNQuQtQZ8i9aw3Oq8CfOmmOWQIO-RfMp7XWdeBI0_UsfO9txfpaf5I3Lve08RSOxvNXa43LkyVuiH-ddxNwxtrmN=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico

## Proyecto Prá ctico de Aplicácio n

Nombre del Proyecto Práctico de Aplicación: Frigorífico
Objetivo del Proyecto Práctico de Aplicación (PPA): El Proyecto Práctico de Aplicación Frigorífico, tiene el propósito de desarrollar la especificación de un producto de software que dará soporte a los procesos de negocio principales de un Frigorífico.
Objetivos de la Asignatura con respecto al PPA: El Proyecto Práctico de Aplicación, tiene el propósito de reflejar cada una de las actividades de modelado requeridas para el desarrollo y construcción de un producto de software en función del proceso, las técnicas y las herramientas que se enseñan en la Materia Diseño de Sistemas de Información. Este PPA representa una simplificación de un caso real, en el cual los estudiantes podrán desarrollar las habilidades para aplicar los conocimientos adquiridos.
Contenidos de la Asignatura que se abordarán en el PPA:
⮲ Modelo de Requerimientos como punto de partida para el modelado de la solución.
⮲ Modelado del Comportamiento en el Análisis
⮲ Patrones de Principios generales para asignar responsabilidades (GRASP).
⮲ Modelado de la Estructura en el Análisis
⮲ Diseño Arquitectónico – Estilos y Patrones Arquitectónicos
⮲ Diseño de la Estructura del software.
⮲ Diseño del Comportamiento del Software
⮲ Mapeo de estructuras de clases a bases de datos relacionales.
⮲ Diseño de Interfaces de Usuario
⮲ Patrones de diseño
Consigna asociada al Proyecto Práctico de Aplicación: En el siguiente PPA se desarrolla:
1. Modelo de Requerimientos: a. Objetivo, alcances y reglas de negocio. b. Modelo de Casos de Uso del Sistema de Información (Listado de Casos de Uso, Diagrama de
Paquetes, Diagramas de casos de uso, descripción de actores y descripciones de algunos de los casos de usos a trazo medio.
c. Modelo de Dominio aplicando los patrones Coad. 2. Modelo de Análisis:
a. Realización de Análisis de los Casos de Uso la parte dinámica con diagrama de comunicación y/o secuencia, aplicando patrones GRASP) y la parte estática con diagrama de clases.
b. Máquina de Estados con diagrama de máquina de estados. 3. Modelo Arquitectónico
a. Análisis de RNF significativos para la arquitectura. b. Identificación y aplicación de Patrones Arquitectónicos Significativos. c. Realización de vistas arquitectónicas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NbbWVF13suNeOxsdbf9k_qr_cMw2S0Pouq_yhZqv_Batj4153AqwNw5zTuh3oscRrGCDkD-D5C4D9tdbDwDA1ByHUqsIYClhbXfoUfqQDoyP1ELAc-1XujFyUjLDd8v6Wyhz9zw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv355GFuSYEndt-Pr7CYvwWDyyIgww9qGoRhvnkU3JcBp172Tja4BgFuzPad8Zha5PKUgV2GoEOFSfzaB5nrCgs16RNpcHjS35CQKvnN8RJfot2BaXc_96IQhfHG2r1dRTZU_mIKeA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HC1kBEN-BICR-BVdYj6iDpwYPB0SGM3a7Rri5cn3JOD8LNwJpD5Ju7HHWJyNPX-Awxa3XS9lMJuZ7jomAf7PHFHZ283d-T4f_i3KI-Q8Hsep0LVF-Pfz3fBTGZh9xctVbQYl_7Q=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
4. Modelo de Diseño: a. Realizaciones de Casos de Uso de Diseño, parte estructural con diagrama de clases y parte
dinámica con diagrama de secuencia, aplicando los patrones de diseño más convenientes. i. Realizar el rediseño necesario para crear una solución que resuelva una forma de
flexibilizar el modelo permitiendo realizar notificaciones a los clientes vía email y sms al momento en que sus pedidos son incluidos en un plan de entrega.
ii. Realizar el rediseño necesario para modelar una solución que resuelva en forma flexible el cálculo por efectividad de las entregas de pedidos a los clientes de acuerdo con el método seleccionado por el actor.
iii. Rediseñar la estructura de forma de optimizar el manejo del comportamiento variable del remito y los cortes vacunos que lo componen, según la situación en la que se encuentre.
iv. Resolver el proceso de creación del Plan de Entrega en sus diferentes formas de visualización (impreso, PDF, o en formato Excel).
b. Prototipos de Diseño de Interfaces de usuario.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1S6wpBEjMAgGaYHRMejuGKV2AlZutSjFXZ4KZ-3VCyEc7-r20jueVnf5yFWSaIInQBVg2emWyziHJgE3PrryXa6HAW0sxar3vrWYcE_oMjzuuOpiVz5Y0DwazV7UKmL1OCLGn3vQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lWJGMMav7OL5xGv4wXx4pI-e5cNeAqmsWIo7Zah0Z9jbWsIRoxf5xInL5cbNz5qJy-PZgWREA9N0nzUnthlK2sk5aQOeog3QqaT509DD91rlwigZxDfpTAhdP0Kae7VD8n3eQ0w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1R4zkyGH45f0oJVZtMGeF7SHJt9cB_aOiO9L-eVbjLXt67IdIQAqVBjx3WT5SoNFP9KrGx1P3u6G8cO24UCdh385LFJiVYhfDj0Ic2QOVugMECAY_oL3-oR6YNJEE2sAAL8cza=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3seJVCboQXEFUtaGNLMn_uxWfRunG7Tk-AKWeafZQgyYcHrSXMPzT66E0O5vbra4Ajkr57ZYUuilxMDGaYbM6zp_BC5dExPcWCNhNc1qCu9fK884CJ2tjO14dPLjKXt-0PVbP6nA=w97-h97-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Frigorífico
Glosario
Término Definición
SENASA
Servicio Nacional de Sanidad y Calidad Agroalimentaria: organismo descentralizado, dependiente del Ministerio de Agricultura, Ganadería y Pesca de la Nación, encargado de ejecutar las políticas nacionales en materia de sanidad y calidad animal y vegetal e inocuidad de los alimentos de su competencia, así como de verificar el cumplimiento
de la normativa vigente, relacionada con la Agricultura, Ganadería y Pesca de la Nación.
CUIG Clave única de identificación ganadera
Despostar Proceso mediante el cual se divide una res en diferentes cortes vacunos y se separa la
merma.
Merma Huesos, grasa y desperdicios de una res que se desechan y no se comercializan.
Decomisar Apropiarse [la autoridad competente] de una mercancía por estar prohibida, no
cumplir estándares de salubridad o porque se comercia con ella de manera ilegal.
Web Responsive
Es una técnica de programación que permite adaptar la apariencia de las páginas web al dispositivo (tablets, pc, smartphone, etc.) que se esté utilizando para visualizarla. Se
pretende que, con un solo diseño web, tengamos una visualización adecuada en cualquier dispositivo.
Descripción del Caso de Estudio Un Frigorífico de la provincia de Córdoba se dedica a la comercialización de cortes vacunos envasados al vacío, proveyendo a los clientes el producto y la logística de entrega. La empresa necesita implementar un sistema informático de tecnología web, para optimizar sus procesos y mejorar el control del negocio. Se ha determinado la necesidad de que el sistema sea desarrollado con tecnología responsive web desing, lo que significa que al ser utilizado en dispositivos de hardware diferentes tales como tablets, computadoras y celulares, la visualización de las interfaces sea la adecuada. Además, como el cliente ha adquirido ya licencias de la base de datos Oracle, el desarrollo deberá utilizar la base de datos Oracle 12c. Otra solicitud del cliente está vinculada a los navegadores; el sistema deberá ser compatible con Mozilla FireFox versión 49.0.2 en adelante y para Google Chrome versión 49.0.2623.112, en adelante. Se describe a continuación y en términos generales el funcionamiento de algunos de los procesos de negocio, que serán a los que el sistema de información a construir dará soporte.
Tratamiento del animal: Periódicamente ingresan al frigorífico los camiones con el ganado vacuno proveniente de los campos, cada animal está identificado de acuerdo con el sistema Nacional de Identificación de Ganado Bovino con
una clave denominada CUIG (Clave única de identificación Ganadera), que define el SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria). Ésta es una clave de 5 dígitos formada por 2 letras y 3 números que debe solicitar cada establecimiento propietario de animales. Por ejemplo: “JC432”. Al llegar al frigorífico, se descargan los animales en un corral interno y se los registra con su clave CUIG, su
peso y su categoría.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zVXrK38wtxdhSpseJxIiWIBiA6VtKPJ2TeFg3_02khoo0xO4JN8gQnaWnFWkZfh4urjGZuXa2rXwAgd3o-f0bn9Rx62jWHz5nr_rSRJUEagqzdA1AbM7_qtbDt39wE5lwWd1H=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3t_8PfrU6RIQUbFL1HKrlk1HR_4iGG905p3_lDQIsemmOl-L7Afo4OxVgeIGRHIEBJgOB3jup_F38d_zlp6pyJh0EvmEU3DE6em47lSx7T2TcZEQcJSPOzHrVHmZVy7-E0S_7J-A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JhTdAjxfqP53owr5ORXnPb3N5TkBXxF3CB18j9Jqvn6yhQXtHO05n3m35KfAY4UKkM-bFFcwOYn-5RpOpNZsqNmXy6bCIrNLfOmgSpVDPJYc1R3ZJjw3SPsRAUl6iUFdAn0RQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0SNGMTUvUFED6P-rF4hL2OUwpJMs0oyPrrkSU0qaDgk6F5Wr0NZjlNTlced86pAf5FSejgTVHRPXhSuknoyddapao16_Qhqk7siFvTxMq1d-JtK2TdFKED3kSyNDohwKuXLD2grg=w134-h106-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
El animal tiene una etiqueta de plástico adherida a su oreja izquierda con su peso y CUIG. Dicha etiqueta se utiliza para agilizar el proceso de registro de entrada de los animales. El sistema deberá comunicarse con un dispositivo lector especial denominado lector baqueano, que captura los datos de cada animal en su ingreso. Además, cada vaca tendrá diferente categoría en función de su alimentación, método de crianza, edad, etc. Posteriormente, esta categoría determinará la calidad de la carne que se obtenga y permitirá obtener estadísticas del rendimiento de la carne en función de la categoría de animal.
Finalmente, los animales son sacrificados. La faena de los bovinos tiene un minucioso procedimiento orientado a evitar la contaminación de la carne. Una vez realizada la faena se realiza el desposte, el cual consiste en dividir la res resultante de la faena en cortes vacunos. Cada corte resultante de cada animal se pesa y empaca al vacío etiquetándolo con su peso, CUIG de su animal de origen, tipo de corte (lomo, falda, marucha, cuadril, etc.), fecha de envasado, fecha de comercialización (fecha límite hasta la cual se puede vender un corte a un cliente) y fecha de vencimiento (fecha límite para consumir el corte). Por definición del negocio, los clientes sólo podrán recibir mercadería que tengan fecha de comercialización mayor a la actual.
Además, el frigorífico tiene un acuerdo por medio del cual todos los cortes vacunos para los que expiró la fecha de comercialización, pero aún no han vencido, son donados al banco de alimentos y ya no es posible incluirlos en remitos. Por consecuencia es necesario realizar controles diarios de las fechas asociadas a los cortes vacunos y determinar el estado a asignar a cada corte vacuno según corresponda.
Almacenamiento de cortes vacunos: En cuanto un corte ha sido envasado y etiquetado se lo guarda dentro de las cámaras frigoríficas, para enfriarlos hasta tanto sean incluidos en alguna entrega a un cliente.
El frigorífico posee múltiples cámaras para almacenar los cortes, que están identificadas con números. Las cámaras poseen estantes también numerados y divididos en secciones que se asignan a un tipo de corte específico.
Cuando un carnicero guarda cortes dentro de la cámara deberá etiquetar el estante con la fecha de envasado del corte.
Por ejemplo, dentro la cámara número 1 se guardarán los tipos de corte: lomo, vacío y matambre. Esta cámara está formada por 5 estantes identificados con los números del 1 al 5. Los estantes dedicados a un tipo de corte específico están divididos en 3 secciones.
En el ejemplo de la imagen, el carnicero despostó un animal con CUIG SF542 el 15 de enero y guardó dentro del estante número 1, los cortes lomo, vacío y matambre que obtuvo, en sus correspondientes secciones y etiquetando el estante con la fecha de envasado de los cortes. Es importante aclarar que un carnicero sólo podrá utilizar un estante si este posee todas sus secciones libres para mantener la consistencia de fechas.
CÁMARA FRIGORÍFICA N°1: Lomo, vacío y matambre
LOMO VACÍO MATAMBRE
1 10 kg lomo
CUIG SF542-035 5 kg vacío
CUIG SF542-001 2 kg matambre CUIG SF542-025 15/01/2017
2 20 kg lomo
CUIG ER852-101 30 kg vacío
CUIG ER852-116 Sección libre 14/01/2017
3 Sección libre 5 kg vacío
CUIG GH654-067 Sección libre 13/01/2017
4 Sección libre Sección libre Sección libre Estante libre
5 Sección libre Sección libre Sección libre Estante libre
Se muestra el proceso gráficamente:
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hFKlsSQYZKXVpjXnJiR7B3WidfuC8qd1CT0mBshTZC6NdXxHWKHiolFYRSGDDbXPbWYQfZOGeAqlIO312oFtOTb_NjINnNEwHP1fBw1Z8NB5Sb2w3L9utRhMJBEc6gv8d-0cKRg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00JgI0wc7Sv7WFJ27GgdCdhHWMfY2-QPq0LpRxQnSfKXsff-TDTSuWQ0-yZoj3sVcR1-4zHGD_6lxWx6-SrgCzWSYhXMHPcNqoZr-ZrqrxvpjOimaf2wKdLCFPDnlX4tjbpT20=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Pdm_x3V4dTDLRyHkv3ZUNVCn_V7BKsW_5iHUGmhtUkY_RDkcMgzQTT2RS_zEi5l_7MDTmMlMmOGlw7mEaE5UwMUQ5hk5dcCJ4hukHBjxjI-Wau19iXsguHUPpEI-bKA7QeGkIww=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JNxQuPWC_WmcSpB2f3b8jbSWsU8PyNXz6JlvDbM8LnDpBzT8hpmXAHNGf1K3s1RNByFRsYMC9D6T68tNNsZFgKFdrRD9HbW3a4xTmodXzWJyoM08WUR9FwxnISAGfVHcTxVun=w1280-h81-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OzQIg902ogHfAB_UE6iduDSG3oju4v9XXBqn6krHLTHtWKO_h7i_ntHq31KmI86LUFnJz49KJP0eolsPa6rfFa41vzKbeH_pPO4dUv1RCaE7QXSzf9r09uIy4e4HsL8bc5Sm8vg=w1280-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv131fQmjxV8qmPYfxxAvmua1ZDQC5cBdUAGOMEONqGQb9lPe0xmQQr_50gelHgtbUAw0ZrjAPM7sLIRMc7NRgXEEHjG4D_19ivU_FED2MHNzmPhG0Bw-s1bSKyp8YIyqsJMA5Pi-Q=w1280-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0f-2Iq7022qsu5QF_EBbddiawa1BITn1F9p-lIJ2SMYM6ygg7LZvjo-To9AkeZFrgTr9Ar-1VucG3G7AI-Dh_l3qHnATDfCy2M5QBd9DVtmQ0IN8PbAjyvxZW4iTY16eewhTPfsw=w189-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hPLcPKZweTosdT3dGRKEl-3DBLIZdHTpTaBqfZFvuvGXjpKk2RZvkKnvC0Gd5DPMVerYjts8iHoy9JUVGXoZdSdto01ThzdasKZul6dCVPl6d5p2Da00nWI6AS35Ms6Ve7I0wRw=w194-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33jK9YAOIpcvR7PReo2xT9ZiiDt4WVoWFmGFKIUXEdxIi0u17_0pT_FNv9iG-MMNeV8MY2FU883VAmtlcv3APhqhMGZXOJ82whrprEC3GnX8cFU6_0KV-OUKbLO_x4ZIZTvSBbtg=w189-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04G9DM8-WP9laPJ5lUBB5tYRZkMgMiwwebUnjpDaOg2OvSIn6Kj3_s1eBGiIRPl9t-3pmNgOlCPQpula_Fgpbt_qOiC_3-5sJ3m2Avqamn_xrEtHLRMqFKPHM0l55spkLkl3kS=w194-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JRX2YCOPdctD8QgKvmLjS-uZCklj_lv656ziL7C67SmVGFn-7u4GGdQ_ip9iT-i1OAtyCR1R2TKhNT1uVV5KxEYHawVCTM3qPHm0fOaC5rduWjS15WPkHHannE54jn8PB6dx2Uw=w189-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14pJSf32l1iQcBHMHzf_XNbdBcko77cuMizWXUNgj5DkI3DuNjd4iNfMwMt_2pDTkbzYfKDhkelkYjafUO3EM8-MqX_KoD9h9i1-5Dbo2c2IVlapqOGHMsZPvO5AHuetbOlRTvsw=w194-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Upyuiuu9nNwz_kaTusJ4MbElXJZWq4J1LjwyITkjwKovlTYALDvWAf3I-NCYumPItxIOlpIBs4cjK6ZK2GQDAviQdvX10PQLY-8WT4YXo-dO_vBdTz2rcHJ9Xw4SmOPuPyvo2wg=w189-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Woni47szzp3s5Q4rh5S04w6DcnT0tn0wSghZHwT0LhGkKNIZ0Nrh5Tn7fGTIaqKjoV4VKyUZnVlwTVEDvI-WXSFuARZJ_R_mEzR7tekNU-Mm8u2CO3p2XMD7iCK4bs0WN0nxY8g=w195-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UMU_q5H1j5EEnz_ZLeyz7V8OkJq96PlKZI4fqeTqGPAHxKsaeIYxdD4pn_zCsbxttLzs1xDCIa6Hu8jwW1WmRwViT_OzEL_zxqn9J6dO67fh7mQFeRvyTQ03lAAqDro73sWn0=w189-h86-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LrkTLCb0kKmFBlR3h7Qmy_zqVB_SK2Bu_Z4hmR-duafVvG1pVHAmNo-PHKkAM8BdU9grM_019lrxVCoiTSwnjINvw6r2QPgHU9CdmaLxed415ybU1NyYf4yCC_icyYs1b2nli=w194-h125-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z4ArJhJO-GpWBQdin0ngWp4QgFVl14OkW38ighf7USM7-4yCYQLIInabfsmqze4P7MQUuMUDwwEfO29SIOTnDrEsp7OMKEija1CB2GIeVWNFzqd9cBnLUMYBAyZlEBAt4v3bDiA=w123-h124-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-alLi8obx-QUkLhwm_LnmGd2On6Tudl4aA63dJNB2fW-HcC7hj7z8oMfepsaEQrR3CK8f0ZS-939mi1IWdomAeHvrVoQE_-fcnJ3O8PpTrRCS9i4Oc48STNMHv-ChcEAV0ziVoQ=w108-h111-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de clientes: Cuando un cliente va a realizar un pedido por primera vez se registrarán sus datos: nombre, apellido, CUIT, domicilio, teléfono, mail y puntos de entrega que posea.
Se llama punto de entrega a cada carnicería, boca de expendio o centro de distribución que un cliente tenga. Para cada punto de entrega, se indicará nombre, domicilio, localidad y barrio. Utilizando Google Maps y la dirección de cada punto de entrega, se calcularán sus coordenadas geo-referenciales.
Gestión de pedidos y remitos: Para realizar un pedido el cliente deberá indicar el punto de entrega donde desea recibirlo y los kilos de cada tipo de corte que desea recibir. Además de registrar estos datos, el sistema deberá asignar un
número de pedido, el cual será secuencial y correlativo, la fecha en que se realizó el pedido, el cliente que lo solicitó y el estado que se le asigna al momento de crearlo: pendiente de preparación. Si el cliente tiene facturas sin abonar de más de dos meses no se le permitirá generar un nuevo pedido hasta que no regularice su pago.
La empresa tiene una política de entrega de los pedidos dentro de las próximas 48 horas de realizado el mismo, por lo que no se contemplan pedidos planificados para una fecha específica, al contrario, los pedidos se entregan lo más rápido posible. Los pedidos pueden cancelarse hasta tanto no se haya generado un remito para cumplimentarlo. Los pedidos, sin embargo, no pueden modificarse y se cumplimentar de forma completa en un único envío. Al momento de enviar los cortes vacunos que cumplimentan el pedido, se genera un remito. La aceptación total del remito cumplimenta el pedido; la aceptación parcial del remito deja el pedido en cumplimentado parcial; y los cortes que no se acepten, si el cliente aún los necesita se incluirán en otro pedido.
El responsable de pedidos accederá al sistema y consultará aquellos pedidos que estén pendientes de preparación, es decir aquellos que aún no tengan un remito asociado. Tomará aquel que tenga fecha de pedido más antigua y comenzará a prepararlo. Debido a que el corte vacuno tiene un peso ya determinado no siempre es posible cubrir de manera exacta la cantidad de kilos solicitada de cada corte.
Por ello para la preparación del pedido se trata de incluir los cortes vacunos con fecha de comercialización más cercana y redondeando el peso en forma aproximada. Para este proceso el sistema deberá mostrar los cortes vacunos disponibles para cubrir con el pedido con un semáforo que indicará qué tan conveniente es cada corte para completar con el pedido de acuerdo con la fecha de comercialización:
🡪 Verde: Dentro de los próximos 5 días
🡪 Amarillo: Dentro de los próximos 10 días
🡪 Rojo: Dentro de los próximos 15 días Al finalizar este proceso se emite un remito que incluye la fecha de preparación, un número de remito y el
detalle de cada uno de los cortes vacunos incluidos, asociados a cada detalle de pedido para un cliente y un punto de entrega en particular. Este remito quedará pendiente hasta tanto sea incluido en un plan de entrega. Deberá ser posible imprimir el remito por triplicado: uno para el chofer, uno para el receptor y uno para el frigorífico. También debe ser posible exportar el mismo a PDF o Excel, y enviarlo por email con formato HTML. El remito deberá ser el siguiente formato:
Entrada de una
vaca al frigorífico Desposte de la
vaca
Guardado de los cortes en las
cámaras, estantes y secciones
Asignación de un
corte a una entrega
Liberación de secciones y
estantes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27QDaqjtIQ_DNrWrvOQyydQsjrhBc9nIrqtJcaQ0A2T55W5RNXLVwvc2KBilA5TKHhwxtnFJ7lsVoDHHuCV9kRWllK00VCWEbr3d63l5ObJdyrgcosLtJF0wYlrZvttaALwSA8Bg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00Z7fXW5sw3AnMeMJ93-XEyGuJbGHbL5HCNF1yqgj-YuF2WqMqqbO3HgDDm7PorlJDpSeZAE3F-Qm1aA8T-3PLef7OVukwo_Cadhoj1kVA3V0mhDkY4d5ZiWpy6ExUh9NYCQvXkQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1q-789bhLEnjLnlAf1mCmSfN2X5nlkhj7KmpOrh0mTzgKRjd8PbsQevCVc2JCTQb0I_EmNFG2E61V9SaiaObB4YtDjUw_Ia3YCLqpzVsLjz7Nk_KO-mPNSGd7pdDdJSYb6aalg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y_2eNwMyTjsg3abmllQLyzxQAcJbmDh1O7VTKS8TSh4JhoQ97SOICEFOFgLujzdEVLsWa2ysRgQTxQ4okU1DBCONa-PflVFFwvh0UKeDX1tZxUIl_1TZIaa3GebW0EfJ0dsn3=w1280-h77-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13IlCkhIdqYujOr9LA9pyc0k9CyrgTv1NHyrMjspC9mToQdO042FlCb9tiriYV00_MI9zYwu2-NAKdxnNOnfg1uhJGjDDdhNafDucrlT8xhmmtgsBmgqPFohKRnRWOeWHsZoA97w=w1280-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11oSlQNoIr2meZtorbhM4PvfXFFw_tANMq01gY2JoF9MyOkZSPfWQmg9OipqtiKXX1AFsAJM45g_DhccbdSVOvs5x7emwHAY4ZKYu7ezxqp7cV4HKca9VfRD-y4FRFwBXfYK01=w1280-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UyIOph7PMdgJMZIO60E-KP8WtICHAZm74lGlTJOCuEcOe3P78uN4ldgYuzfv7C02OdK4V5KFtn9oasdzUawT9lO9gW3nqSAkYSQ9FykUWGSJYCZYi7K3Q-OGXxungUz3RbGKe6A=w192-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02PQiH_2x4Hv5tZNKWesXH8AeS38QwBCpz_E3ltTB8TJgL8IDTxPGI4w1qCcM9JGK34MAUhQ7LToJ-jEd8uXOATO5aITfgqcQNAjT4yW7leDn0Liop0gMZ91gOGcmBnip58tUKMg=w194-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TFGCFhdSAQdO83F-iYBsuTCeCi_EEN3te3xk_MKFEUkA3sYbnBwf97jtGsL3khvxWC90ko8zF2v0GIJfB7j131EJDins5x6FktA0GVCavQht9xzWgFvjOiRM65nkI5p9BHZy2cg=w192-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv251hAm_R-Gj4xa5Ex4YfYZjJu7X3o71axUxYPq4dAZSUnAYxYm4Gs82kWofWB--TKrvakgFoaKnJBfnlhKlShOnNwM9VqAQX2T84Zn4GjvgFVpLbXnHTZRnEJNbVzzZw2H23i0IQ=w194-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0h9dB30kPJktHBuGEhjrE1r4QZNLeBabGmG3GYmFECcnAzrafBMIJwl9LJl_x9CT1N6ht2RDV9zeR-cSwtcQIrRkCW-mdFfaVqgXwZLzKVb52iIyVuuqhjfeE7mrCj_7Hphz-k7A=w193-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PxNAFiEFcHsQPcUH_0-dMMiSZu9Y0Q5C7ghksfeJfXBQNCqIJvu3IoLepzA485G5BEcNWdniz-Z0LUzoMKeDVuF8-gYHgTKPzVd7_Sty-AC6W05HHp8E_lPBkSfAU25DwWYPo4A=w194-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Cpoo_ZFEaRyBzdKOgtbeM1wT1BtxqZKVEN19FiUqOIFBkfYxpS5cZF-wc1N2W4ppNkQb4GHNpfG7d3EioRcm1kVFTmdZrWv2m4u0Rh4Zcq-Va14Hnu-lR4GYEZ5lRzW9BzEhI=w193-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Oz0RZAdZZtb5H37V26QbpdZIxQCnYLHyyMKGzdOIfjdxozz9UL0d7h6LUbCa65HG9BP1tNK2LtTvs-npp6K361b_R9Sq9HZFoRaIg48wtspfyeXTAvMrAMJxU2Tf59xYrHnhF=w194-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2brV2G_go9NrYBuTsF28rs-f3plnjE-QY4FWtD5EjBGkr0l_uzSKgltgR4FYFiqSnkhQwZfyjkKvyHQyfff8T3Uv19PSdC9ny6pzy7LpIGOZpK0zgiwrznWXPGAV9ZJtmVUdv31w=w192-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23GEmiLvJbfuuofauRoKvT5Msd3ZEcWAS2o2pQHR3YvmjweiwRiSqrncJ4A_uwfHydvjq0cXsSIuoTovguaIHAGadtifhGe4vfL3R-HDAfmtfk4Gqx71xHFUFP5YVgMzcYV_5uKQ=w194-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YKr5YUVC2q_SlmZhE4KW4KSkBDWlyKcriMWtFDt3o__vP8j5HqBaywHHh7xyX6kPIgttnFYyVdtksknYQOo3SBqHDF-sPy2GWwULByr7BnkEjSqCqgVm5QbTK_XVbJb6OVJ_hOw=w92-h94-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
FRIGORÍFICO
CÓRDOBA
REMITO
Nº 00001-00001
Fecha: 01/03/2022
Cliente: Juan Gomez
Punto de entrega: Av. Andes 422 – La Carnicería de Juan
Remitimos a usted la siguiente mercadería:
KILOS TIPO CORTE CORTE P.KILO IMPORTE Conforme
1,3 Matambre SF542-025 $100 $130 SI NO
2,5 Matambre SF541-031 $100 $250 SI NO
1,0 Matambre SF547-065 $100 $100 SI NO
2 Marucha JV321-027 $50 $100 SI NO
TOTAL $600
Recibí conforme:
………………………………………….. ……..………………………………..
Firma Aclaración
Observaciones en caso de rechazo:
_________________________________________________________
Los remitos pueden modificarse o cancelarse hasta antes de ser incluidos en un plan de entrega. Si se los cancela, cada uno de los cortes vacunos que integraban el remito vuelven al estado creado, es decir disponible para su inclusión en otro remito. La modificación del remito implica que se agreguen cortes vacunos o se quiten cortes vacunos del remito, actualizando el estado de cada corte vacuno según corresponda. Se muestra a continuación el proceso descripto:
Registro de un pedido de un cliente
para un punto de entrega
Generación de un
remito para un pedido
DISTRIBUCIÓN
Aceptación/Rechazo total o parcial de un remito que contiene los cortes vacunos
Actualización del estado del remito, del pedido y de los cortes vacunos (si
corresponde)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08wDLriybJqtCl6-n2hglI6A6CnWdqZ2sKQ2o3CD1gK2rCsA504iZp0od6u9L4ZLkA-PYj3-Rl1_F05HQYWl-9lXpDNzgp9l9zHuyqKawZ5YQd6JbBzm3eZKl_xmrOG3ZYVGR1bg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0a2nE7vKFQZ9KkKUut0x75JWQvSIlJdkslGw2du1b0-MqLrctb26MRkIsWeQnUo_tEkwo7hHM7NB_Ainh_xabvEvrhCNHpBSYJ6VjYYQLds47ZnhQlxOunWzQZ1fAe4i2_1ZnP1Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zDa6Y88_yjdtEphqGdA-7HxgfZnR3Lsp4D591iYBdiwYUfc7kEf3ktuKDCBu79ZmPvRYNrFLFkiiAG3COmoPkGMKkMdUz280ZzE1CdcpcYWLrFvPZ0LV-nF1tdhEQp5JIVGcc=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GB6aT3INiLvYXOIjgphKhAAGLXcCseXCRuyTy7uGOBUodjQjTJ_pwyv722zRPP1kUr8rjytyMHMum8O1jnejHFmGqbajUkeaySh4IidRBr604patqrrq2GttdsKerfylqe3cmsA=w148-h123-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Logística de distribución: El frigorífico organiza la logística de distribución creando recorridos tipo indicando los puntos de entrega que se deberán visitar, el orden y la duración estimada total del recorrido. Cada vez que un cliente agrega un punto de entrega es necesario agregarlo a algún recorrido, para que sea posible
realizar la distribución de los productos que el cliente pida. Además, para realizar la distribución, la empresa cuenta con una flota de camiones con diferentes capacidades en kilos. Para organizar los recorridos genéricos se tiene en cuenta que los puntos de entrega que se van a incluir en un recorrido deben estar ubicados en la misma localidad.
Periódicamente se organizan planes de entrega indicando para cada uno, el camión que lo realizará, el recorrido que se hará, la fecha de salida y los remitos que deberían incluirse. Cuando se finaliza el armado del plan de entrega, se notificará la fecha y hora planificada de salida del camión mediante un mensaje de texto y email a todos los clientes que posean algún punto de entrega en el plan. Además, los camiones cuentan con un módulo de seguimiento satelital (GPS) que permitirán por medio del sistema web monitorear su recorrido en todo momento y se generarán alertas cuando el camión realiza paradas fuera de los puntos de entrega o se desvía del camino.
También, se ha pedido que los choferes, puedan disponer de una aplicación mobile que les permita:
consultar por medio de Google Maps el recorrido que deben realizar, mostrando en el mapa cada uno de
los puntos de entrega en los que deben descargar la mercadería
registrar el inicio del recorrido.
registrar el fin del recorrido.
Estos datos brindarán información para estimar la duración de los recorridos y para notificar vía SMS a los clientes cuando un pedido sea incluido en un plan de entrega próximo a ser enviado. Para todo esto, tanto el sistema web como la aplicación mobile deben establecer una interfaz con google maps para resolver la funcionalidad de seguimiento satelital (en el caso del sistema web) y para resolver la visualización de un recorrido y sus puntos de entrega (en el caso de la aplicación mobile). Hasta antes que el camión salga con la mercadería y su correspondiente plan de entrega, es posible modificar un plan de entrega o cancelarlo. La cancelación del plan de entrega deja todos los remitos que estaban incluidos en estado pendiente. La modificación del plan de entrega puede quitar algunos remitos e incluir otros, con las actualizaciones de estado correspondientes a cada remito. Cuando un camión llega a un punto de entrega y un cliente recibe su pedido se le entrega también el remito físico. En este punto el cliente constatará los cortes recibidos contra el remito y podrán ocurrir 3 situaciones:
1. Los cortes recibidos coinciden con el remito 2. Los cortes recibidos coinciden parcialmente con el remito 3. Los cortes recibidos no coinciden con el remito
Luego el cliente podrá firmar el remito indicando que está conforme con lo recibido en su totalidad o parcialmente (Situaciones 1 y 2). En el caso de que no esté no conforme no firmará el remito (Situación 3) y el chofer podrá escribir en el espacio de “Observaciones” el motivo del rechazo. Por ejemplo: Se recibió menos de lo solicitado, no se recibió el corte pedido, la carne se considera en mal estado, etc. Cuando el chofer finalice su recorrido, los remitos serán llevados nuevamente al frigorífico donde el administrador, se encargará de actualizar su estado en el sistema, según corresponda. La actualización de los remitos implicará la actualización de los pedidos asociados y eventualmente de los cortes vacunos; esto último en caso de que el cliente los haya devuelto. En el caso de que un remito haya sido rechazado el responsable de administración podrá generar un descuento para dicho cliente para su próxima compra. Los descuentos deberán estar tipificados por porcentajes. Por ejemplo: Descuento del 10%, Descuento del 20%, Descuento del 50%, etc. Al generar el cupón de descuento se le enviará un mail al cliente indicando que dispone de un cupón de descuento para su próxima compra. El mismo tendrá fecha de vencimiento pasados 31 días desde su generación. Por razones de salud pública tanto el frigorífico como los camiones de reparto tienen inspecciones que constatan la documentación sanitaria y el estado de los cortes vacunos. Si alguna autoridad considera que se incumple alguna de las normas establecidas para el almacenamiento y traslado de la carne, puede decomisar la
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dd3WifasQPEQVdPYqbFk3Mo4D4t5K8s-EBl2qA-1GMgwviAaw2eSN930TCAFbcna2LL24DQ3VmfARsUtlRJZGYmTPPd97kXYqhvWgWPVckdaO81wl3G3q60F_3HtjLOg0LzsX=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1iM44Lxid4bZOQvXE_MzI1YFo73JNeV1DaN5cGIhRe7tWRXHiDO-sYzfzpMLYSN3nCcoMfsH41oX3-ZNO2FZYyKls_PrPDOfWaYum9qn5RxkWHT9qEv0LTs6_-oymrCV0ABB_wJw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2glFRg4CMw40GL2Ao3BB3avNaaC6rrv6VEPL8a8JUY4jpQ3dba5jV5QWlCQPFIZ0EUAZDzQp3Fkl2bSlhA4IytZJ_LlkrZTSTzpbkWY5rIam7QbVNx7qSsfVMDczqK90MNqYcWbg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1coMc7a512E749kCpzJCqLxNygrcN2JfDf0KTDSEbEzPHgrTw2_wDIOddmIok387m80lRFaBu5B8FeVFxFXXgcdE9oQWJksR4Y3uvfRQIwoNCf0-7NFho915ypbqYRR3WSl5IN_w=w1280-h76-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PD3Z1qRimdvg-JXeF9OD25Tiiqp1of5-2zA6R4kU-mGx9jfQm4Hsfgy2ZRzrJG4UGdUMKLCRYgNBbg1MhGvAeTNWYEeYCCc7Vse9Kb8ROBjN_AOk_B9Kdg7r-nrzoWOrmTQWpJw=w1280-h75-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Co9LuOLIhSf-GB_5ljiCjx5fLOwGndS_rDBTltxFuBuPH8l89VCOPLwSyB1_0fNiC6sUCw1nIi8TaH2zNQMFk_U4ZF3yCziKAd40Twlgh7CCzC-CptTyNwaiEo4X6aREuJ-VhbQ=w1280-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3l2_OqeMxIN0GjihOWHfhZfVhBQPtfrRXtLR5kx7fO6QM20G2xiKMLjgSMH3uAaQ3pjtIFiR74Iiou_E3pyYxQraF4GPPGDi6ukP28N6gaPb8mCazb1gMM1LiT6XBioeCQ2HAGVQ=w193-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3I8rQceEeEWCjlACz0HKdGb8NHvekmVM-tE2SUpYH5cyc9Il3vJy-PLbHjACWDdSQQmNoLJykR3-_cRoLmGJblO3BM9ARHokQqqSgk8Ts95F1ro_X-m3JihnHHBBEEYRnNZC77-A=w194-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UFR0xZZWSE8s9qwYLbRfIi-ogDCGKt2ZlwZLaFItTfUnrYJ8VvMlmxW-UeYpft9x8BS4enCYAh9m9Qjbhrmf5VyyqHmjEEs6PzOlU4vNYIAMMB451Prgsf4CheCuvdIJOhJno=w194-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wnNcpQKxTlKvWPqyTeHennQLhZ53JqfMHiaLEdcbuNiMAe3YKkkgb3FvOvVrHkh-1DEuBjlZ2ENwUHddP_jrH7iUq57GE93LNSGT_1uGYK4v3ukIpLpTIx_2um1a9xd3wMV2JdA=w194-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0n5F-hpTYvyx0zBca2GpiVPJRHyZ4QRNQ6WAGhiwnDVN4_UX0aMCP1JUbHuelllR6BHnbW3BPyVY2dOekhE24QNU2aiw6BmqC8vXTkFSyNhOJy8eKxfsvGxoRDHbNHT0DtJPHl=w193-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28O153VQ2JWNUkICVRZ9bEFnb3AmlTgv5l5RESI5pDEoWBRWcgU1IM9EiQThWEFrFvnJhmDz_LoLHLQ_g0UvJXUTc2z1l05t9bvZFipDn6iDEP5SF-2uU-0bkVnglChVzJjPaA=w194-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2l49KobtIDGows6AILiQ64iixobryvTJqsXsbOIKOiC2DtNWaEEQ72IoNUPOcJvhcVhA0JaRiDWbjy7XZGM099bGiBRyKtWS8fZoGNO4ENRopoBVf8HOuTiVH_ENsTTZwtzozv=w193-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EASh6cmvTZHECTJhG955Jo8T8C5KTcVWOJ6pe5M-NpFmdbEG75QO5C-31LyAEW4KxuGIf8EwMtE7-xQ87Fz6fjdHKNEi6adGhC7dHLqshgoghAYIU-6vIQferaBCoVYouGZqMCQ=w194-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3q8CSm1NqdHOcUPbH0xKRTiqLQlIlbawLXYOjFqZ0PdJBaHC3ytMOxNM78zjLcU-TAVZg3wUB2Fj8lSsKGm4qqvTokWchlo3o281jqtUFIVqR1xkTOJI9aX6qYUzN2WHEmI8OVVA=w193-h82-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FRtntSV5mkr-n-tri1D1oRJ8pLIMA5_3Sn23I3pDQL5Get18hVszKMXrs5_d_kQ4_u4CSw_DALLOYfDXVAj1QGYC7PtvExCLy7SdaojD9Z-1vWmC6NDDdDWyi6_toyBVfNm3VEA=w194-h121-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PzIJqOTleDDhQlWrzemsV5iY8MwvPy0mk9Nlru_azc24d17_g7CfU1OIN8iFKRhWlqUgxR0ED3hTh1t4ouGXFKHBSpxhJOcDUwIvkbGNdgxmuJ9Egb8GhTIOW8CSP4ATbStTP3w=w1280-h59-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SwTw9ZGCZPIAVwj5vpviR2eHIjy0hzWJQemsx36Udl2Y_rqsUJ6q3sbQ0MnM0Df9gqzQHU0bJ3OB-_nC1Rm128-18FR0KZ_c4acl016yKTZtM4OkvZkvhxzLEKGlMZ_hlg1pmJg=w1280-h58-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38HBoBbq8HLfy7vb99uNnLdgOV0Xmrokh0YhOumn2wUgMhKlZ1wHnyEgdDDz3DrDJamqbv7G2AbW3TkM0AoEhnjhZiv-m1DaGUtTuxc1OGBBfuW1yHjwHUlmWvCXJjY6oMGGuLSg=w1280-h56-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Gu_0ZdUZR34ithk_PLJzW6foNNTjDGzNVhuQHyAyMX5jqBEB-oj7eOCBToDHE-kwo2p9Z7W6CuDpmTLt4NvAkvdTr-fPAOSShQoiBd2ytaNKTI8dD23XMo8K6q94c9VCeBaRhGQ=w421-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1T4RDYcbeKyf1xbTGnsiM--X_gQmOBL6EWAXTjILpNyE5R1ImDigXdc_g8v_JDH_WqBWERKJc_6-gIPFdc0GL8HfNaY_Yq8npWCUWA19aFsXSk3OEGYKhjb9Kx9Q-8InRF713yqg=w422-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39ModZGVSg40EFlhMFt7DFq7AuPXDbpTudMog6mkLgnRJEa23kP0x-FvTHZakE09Do3MNK2W-wt6P0GDZGtaBAPdrCQ03gj_pJz3AbWjhm8R5pbY_9-oKMp24wWHfMQmJnEy9afw=w421-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UbHidYPK_nzsc-5vKm4gNlFzAYCVmc_xuuYlEuepHQDY9dqaW90gCT1RSASMG1fZ-_bMl6b5hSNTGhrcmPSrlXsAqVNku-e0_YqGEuUdo6yFxfSOqx8dg9SWOr-PMr8OYxEbQ=w422-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SXPK0xGPMZ3zI-KMvShOD7e4_KscLHy2RBiN0akQaZmXahEcHA7RwVVKza3pkXQ1UYfFVmEiQKC_KMisHqG-_6-I4X0LwBacpmorcdCkJoWrfHuWpIK_PTMw26PZzbkKUYtmh8g=w422-h62-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DSYvsLBShseciD0yh1b4iY6eBLm1sgn0eVpqJboUYobWwtrMLkgOH3_laZFen0k-gY9WU8ibPdZCL_qiCoFJ2acFQnySDvAI0d2__BOB-txbm4vR8kAU7Yrtm0_9fR1QyzFuQ1w=w422-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HvRWcKZP9axd3_FPeLD89FobJALAH_s9p6HYbuG0FHXryRnuHBXGOjCGbfDdZQK9pzrW0koryfAse403i-2TT4C5y7xJpBkxs5APVtWa1s2btNbeDHDgyS7gZkQXGDFYcfwgDSA=w110-h119-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv113I2SrdGGXRBSvQfZGjeX2ejsgPSbiIncHaMspLptR5gr9rJ_O-meeVLcAQd_5mEvyNqUD-_m3eQf7bHYi_evrrehNwgJTq8gxw0rX7Jy5Z9GrD8NkCRCGYp1he2ruIt1RZfY=w126-h117-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SIIfpbwLAR2MmVJvzSRUyGGFoVSw4yStaEeJkuusSkWPgl136YvBObnH-h-wTYH5VXKCKcGXHVgZNWfJ04VMpJIcP-CAC2j7xr8OolRa2SumaT_SVqmqD5vxLA6iOFV40QoMR9Q=w121-h117-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
carga y en el sistema debe quedar registrada la razón del decomiso. Los remitos afectados quedarán en estado Decomisado. Se presenta el proceso y el momento en que se puede aplicar el descuento:
Facturación Cuando el administrador recibe los remitos físicos, registrará si han sido aceptados, rechazados o aceptados parcialmente en el sistema. Para aquellos que se encuentren aceptados o aceptados
parcialmente el administrador podrá generar una factura para el cliente y punto de entrega que corresponda incluyendo aquellos cortes que fueron aceptados. La factura deberá tener: número, fecha, CUIT y nombre del frigorífico, nombre y apellido del cliente y punto de entrega, los kilos de cada corte, precio por kilo y precio total. Al generar la factura, se calcularán los vencimientos, generalmente se tendrán hasta 3 vencimientos desde la fecha de emisión de la factura y cada uno con un porcentaje de aumento. En caso de que el cliente disponga de uno o más cupones de descuento que aún no ha utilizado se aplicará sobre el total de la factura aquel que tenga la fecha más antigua y se registrará que ha sido utilizado. También se indicará con una leyenda en la factura qué descuento se ha aplicado sobre el total. Luego de la facturación el remito pasará a estado Facturado. Las facturas serán enviadas a los clientes por email. Para poder procesar el envío, el sistema deberá comunicarse con un servidor de correo externo. Podrá suceder que una factura se genere de manera incorrecta en cuyo caso podrá ser anulada, registrando la fecha de anulación, el motivo y el empleado que realizó dicha anulación. Gráficamente:
Gestión de usuarios El sistema deberá mantener información sobre los empleados que usan el sistema. Se deberá asignar a cada uno un legajo y se guardará su nombre y apellido, CUIL y dirección. Cada empleado tendrá un
usuario y una contraseña de entre 8 y 16 caracteres y que incluya letras y números. Se solicitará al usuario que renueve la misma cada 30 días por motivos de seguridad. Cada usuario podrá tener uno o más perfiles asignados con diferentes permisos.
Por otro lado, el sistema deberá ser desplegado de manera que sea seguro y resguarde los datos ante acceso indebidos o malintencionados.
Reportes Se solicitará que el sistema pueda generar informes y estadísticas sobre:
Rendimiento de los cortes vacunos, que se determina a partir de la cantidad de kilos de cada corte
vacuno obtenidos a partir de una res.
Listado de clientes que más pedidos hacen.
Efectividad de entregas es el porcentaje de pedidos entregados y aceptados por los clientes sobre el total
de pedidos realizados por los clientes. Todos los reportes deberán visualizar la información tanto en listados como en gráficos (barra, torta, dispersión, etc.) y se debe permitir la exportación de los reportes y estadísticas a formato Excel (xls o xlsx) y a PDF.
Creación de plan de entrega con un recorrido, un camión y un
conjunto de remitos
Ejecución de un plan de entrega
Recepción de mercadería
Aceptación/Rechazo del remito
Generación descuento
Recepción de remitos y
actualización de estado de remito y pedido
Generación de factura para un
cliente Anulación de la factura, de ser
necesario
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DjVsGsQjkjB0zuT0X5A1iG0DZlg1ylWZtfH-SP90TDwh-C8tweW_pF9vW9wXLXmRTpPVwqigUsdGed_Ac5AVOdjURSCj6NGIPc1VW17lqSuqPne-CqZbSQmA4ZmIzuu0_yZ4RiQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3A-DIZxrsOtLJwr9IZbwcSjyUp7qkiCdvGBynRvU3MdBvRwwccyFYjPNqYWdAU3oxnWjm8uTiyh-G3FtA-kkLf6W0kx3g8EBm84n9nBDnMCdb7mVOCgkp7liJnpU36vvtku8Nl9A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv16q0DT3Zse4DYIUsozjtZu6vzEsRy0lkTXr8TpTPgEFYdULwh-uqx4UkUroPlbHk2PUhqJgTgsDXK6lnLiUUmeTrbQcY8ZZT3iwqlHG8TytjSJGCEJEJnarwrPeXdycd-JeRTcNA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Solución Propuesta
Propósito del Sistema Objetivo: Administrar los procesos de faena de ganado vacuno, almacenamiento de cortes vacunos y gestión de pedidos y entregas de un Frigorífico de la Ciudad de Córdoba brindando información vinculada a la gestión realizada. Alcance: El sistema deberá contemplar los siguientes alcances:
🢚 Administración clientes y puntos de entrega
🢚 Administración de empleados y usuarios
🢚 Administración de las cámaras para almacenamiento
🢚 Administración de camiones
🢚 Gestión de pedidos y remitos
🢚 Gestión de descuentos
🢚 Gestión de la facturación de los pedidos
🢚 Gestión de recorridos y planes de entrega
🢚 Gestión del almacenamiento de los cortes vacunos
🢚 Gestión de usuarios y empleados
🢚 Generación y emisión de estadísticas e informes vinculados cortes vacunos, pedidos y entregas.
No Contempla:
🢚 Gestión de Devoluciones
🢚 Gestión de Cobro por venta.
Reglas de Negocio
Nro. Nombre de la RN
Descripción de la Regla de Negocio (RN)
1 Identificació n del ganado
Cada animal está identificado con un código único llamado CUIG, de acuerdo con el Sistema Nacional de Identificación de Ganado Bovino que define el SENASA. Este es una clave de cinco dígitos: dos letras y tres números.
2 Puntos de entrega
Un cliente podrá poseer uno o más puntos de entrega. Un punto de entrega será cualquier domicilio donde el Cliente pueda recibir mercadería. Cuando realice un pedido deberá indicar para cuál de sus puntos de entrega se solicita el mismo.
3 Remito Un remito es un documento que comprueba el traslado de mercaderías. Se deben imprimir tres copias de este para entregar una a cada interesado: cliente, frigorífico y chofer que transporta la mercadería.
4 Descuentos En el caso de que un remito sea rechazado total, se le ofrecerá al cliente un cupón de descuento para su próxima compra con fecha de caducidad en los próximos 31 días.
5 Recepción de
mercadería en el cliente
Por definición del negocio, los clientes solo podrán recibir mercadería que tengan fecha de comercialización menor a la actual.
6 Donaciones Todos los cortes vacunos para los que expiró la fecha de comercialización, pero aún no han vencido, son donados al banco de alimentos y ya no es posible incluirlos en remitos.
7 Etiquetado de estantes
Se debe etiquetar el estante donde se guarda un corte con la fecha de envasado del corte.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23XDa2OJ6HjRPrP5-lJoQKm3DM5z8hlNOEwwD8IqUXBizv1kg_4ESDVZG1DsDbsFFfOnA5bEI9PVmN9yJFNjuBKoOlTyCr9vqkB9ZQUm8qEir-wSRDnFiZEwwKpqRU2-V_S1G14A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ra-vgMQWV6N0snGJBBKINI7hk3PjZj2SKmtSbKedJZXzbf9JDYlWqqGyQF-FXJCeikgFrMIT3FSbuPMBgf0lZiCLLxT0HnkoT2UOEe3zyvLeyprUR9Kd--z-DE5jdet_vHOGf3w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rLInjiQ-cThomc1ZoTSOdiIV6GMzZdVUCfTvO0fD37mu1XNes0B2Byp6qVGxh0a_UdTKSJWUgo0zlxFK4QPhVS-Tim_GRBIbUlfKDhxJp5cslYNIOMocPIb74WSJgpzAigh71pw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nro. Nombre de la RN
Descripción de la Regla de Negocio (RN)
con fecha de envasado
Sólo se podrá utilizar un estante si este posee todas sus secciones libres, para mantener la consistencia de fechas.
8 Estantes y secciones
Los estantes están divididos en secciones asignadas a un corte específico. En una sección puede haber un único tipo de corte vacuno.
9 Datos del cliente
Cuando un cliente va a realizar un pedido por primera vez se registrarán sus datos: nombre, apellido, CUIT, domicilio, teléfono, mail y puntos de entrega que posea.
10 Datos de puntos de
entrega
Para cada punto de entrega, se indicará nombre, domicilio, localidad y barrio.
11 Registro de pedido
Para realizar un pedido el cliente deberá indicar el punto de entrega donde desea recibirlo y los kilos de cada corte que desea recibir. Se debe guardar un número de pedido único, secuencial y correlativo, la fecha en que se realizó el pedido, el cliente que lo solicitó y el estado correspondiente. Si el cliente no ha abonado las facturas con antigüedad mayor a 2 meses, el cliente no podrá efectuar un nuevo pedido hasta que no regularice el pago.
12 Política de entrega en
48 hs
La empresa tiene una política de entrega de los pedidos dentro de las próximas 48 horas de realizado este, por lo que no se contemplan pedidos planificados para una fecha específica, al contrario, los pedidos se entregan lo más rápido posible.
13 Peso aproximado de pedidos
La preparación del pedido tiene en cuenta los cortes vacunos con fecha de comercialización más cercana y el peso, buscando redondear el peso lo más cercano al peso solicitado en el pedido, pero teniendo en cuenta que no siempre es exacto.
14 Datos del remito
Los datos del remito son: la fecha de preparación, número de remito y detalle de cada uno de los cortes vacunos incluidos, asociados a cada detalle de pedido para un cliente y un punto de entrega.
15 Recorrido Existen recorridos tipo donde se indican los puntos de entrega que se deberán visitar, el orden y la duración estimada total del recorrido. Cada vez que un cliente agrega un punto de entrega es necesario agregarlo a algún recorrido, para que sea posible realizar la distribución de los productos que el cliente pida.
16 Planes de Entrega
Periódicamente se organizan planes de entrega indicando para cada uno, el camión que lo realizará, el recorrido que se hará, la fecha de salida y los remitos que deberían incluirse. Cuando se finaliza el armado del plan de entrega, se notificará la fecha y hora planificada de salida del camión mediante un mensaje de texto y email a todos los clientes que posean algún punto de entrega en el plan.
17 Modificación y
cancelación de un plan de entrega
Hasta antes que el camión salga con la mercadería y su correspondiente plan de entrega, es posible modificar un plan de entrega o cancelarlo. La cancelación del plan de entrega deja todos los remitos que estaban incluidos en estado pendiente. La modificación del plan de entrega puede quitar algunos remitos e incluir otros, con las actualizaciones de estado correspondientes a cada remito.
18 Recepción de cortes vacunos
Podrán ocurrir 3 situaciones cuando un cliente recibe un pedido: 1. Los cortes vacunos recibidos coinciden con el remito 2. Los cortes vacunos recibidos coinciden parcialmente con el remito 3. Los cortes vacunos recibidos no coinciden con el remito
19 Factura La factura deberá tener: número, fecha, CUIT y nombre del frigorífico, nombre y apellido del cliente y punto de entrega, los kilos de cada corte, precio por kilo, precio total, vencimientos porcentaje de aumento por vencimiento, descuentos aplicados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3q-SgDSGi02o7P10qfW8vHwhT6_XfxsGxmCYdy7UXOcxbT70uWGeK9BznJgIaR6a335nIDEgvK6Vicab1F-G6vypuzMXAB0WKoxMcwE26xv__7YUqEAVx-lbW5kDZ8wYmH1Kvq=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SezIQZd1b-7CoaIryPpxU9ROoEPsf9oX7YEXDpcxYWG8mNEqBLrX3esNFOoano_QUinPBCWQYLm0IqpmGY23kVwTJY1XadekcjtXwI9I19xVdP68aAxk4TiM8mt04gAbNUaLqzw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv10Khpn94V-wqO0KECCFpEYfW5fDusftePL99wV1OQ3ix3klIc_mFuElapqBWHHzH-3WsSf1-Vr1NLaVJUr6gwszNIyqeeUey1abDrrDte1yo6FcL6-P-cNjhVs3yy-SR9k9r2tqw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nro. Nombre de la RN
Descripción de la Regla de Negocio (RN)
20 Anulación de facturas
Si una factura se genera de manera incorrecta puede ser anulada, registrando la fecha de anulación, el motivo y el empleado que realizó dicha anulación.
21 Usuarios y empleados
Cada empleado tiene legajo, nombre y apellido, CUIT y dirección. Además, si va a trabajar con el sistema de información, tendrá un usuario y una contraseña
22 Usuarios y perfiles
Cada usuario podrá tener uno o más perfiles asignados con diferentes permisos.
23 Cumpliment ación de Pedidos
Los pedidos tienen asociado un remito al momento de su preparación para enviar los cortes vacunos al cliente. No se realizan envíos parciales, se manda el pedido con todos sus detalles en un mismo momento.
24 Cálculo de efectividad
en la entrega de pedidos
Efectividad de entregas es el porcentaje de pedidos entregados y aceptados por los clientes sobre el total de pedidos realizados por los clientes.
25 Cálculo de rendimiento
de cortes vacunos
El rendimiento de los cortes vacunos que se determina a partir de la cantidad de kilos de cada corte vacuno obtenidos a partir de una res.
26 Recorridos para la entrega
Para organizar la definición de los recorridos se tiene en cuenta que los puntos de entrega que se van a incluir en un recorrido deben estar ubicados en la misma localidad.
Aclaración: Las reglas de negocio relacionadas a los estados y transiciones permitidas entre los estados para los objetos de la clases Pedido, Corte Vacuno, Remito y Plan de Entrega no están especificadas, porque se espera que los estudiantes las analicen e identifiquen cuando construyan las máquinas de estado correspondientes.
Listado de Actores
Nombre del Actor Descripción Categoría Tipo
Responsable de Administración (RA)
Encargado del área de administración que consultará reportes y registrará decomisos en el caso de que ocurran.
Persona Concreto
Responsable de Pedidos (RP)
Encargo del registro de pedidos de clientes y la generación de los remitos asociados.
Persona Concreto
Responsable de Facturación (RF)
Encargado de la generación de facturas. Persona Concreto
Responsable de Distribución (RD)
Empleado encargado de planificar las entregas que se realizarán y los recorridos.
Persona Concreto
Chofer (CH) Empleado encargado de la distribución de los cortes
vacunos a los diferentes puntos de entrega. Persona Concreto
Carnicero (CA) Empleado encargado de ingresar a los animales al frigorífico
y del proceso de desposte. Persona Concreto
Usuario (U) Empleado que utilizará el producto a través de un aplicativo
móvil o a través de la aplicación web. Persona Abstracto
Parametrizador de Sistema (PS)
Encargado de la configuración de parámetros del sistema. Persona Concreto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1u7UTat-z5oRgZBGge8AWsB3FW1rqx_wkyVxs-x4R3PF8TeyMLNpU4EGkQh5_IYbzI6Qos3gnIM6AdJtCsOlYTA4kQT4at1pKd-lrqTdCHidFkyTl0eXOUWkkQumA3q7bAtdNIGQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oSLrwJunXhKp65lDhTiVcONxZojYGDXIXivzwRq9UnX0xZ8VPoXkm1QxOukHKE0UHzRaRoUHcwHW4nly9itWW2wpl9VphDaNspQUp_nzIwuZzQMFA8fxJ7nPCC3nBM3UXCg7k=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DPYThJUSHgfav2YeMX2CdK7qpkRT7XVas_ff1nz5fWvyRDQCkuo4MD1guQvUh7huL6qeYUDAAD3notmunxw_wGA3WrfH1iSrUH4SryOETYeK-h6yaoQ95zH08H7iaxTRLUIdQFA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y9iw-NQ_CfFuGB6XOX4J9Cyq1Q3bW3qOWCzh4tlRGY1xE__sWM50v0CXwkr_JzDOimDgyq6tTJDEOFs9C0wmSgoaRuEl3pRErCgOgfRtDdo4mMmJn55JWnZhH-Mx6jouXZHOC3A=w1276-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de casos de uso esenciales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3C4PpcOKJvLgFWKg60T8ycCLCXzn8Vq3lY_FRH1PlxFX4YrzHLiv_BJ_qne3aDhKsWVT3eMNkq4JwgnjBMwnt7FJ-_-VnyJ7rTmdKrTbzfK1RpC0tnvbDQKShXabJ5Ofw6VeIGzA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aWoYfC2Y50odnTiPtInWLBF6HkVYO2hCgXRVWZO9rZL6uzx-2F4FcVGVhlw9RClf6mTycpTKyp24zpj0-9mFJmPWdhvzMsLzVsUzX-RfuDkEYaw39gXqtAw-hwZNAwLpYCFaeMQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bD1hfEgMsNyZ0GbxShA6xbbqsI7kcNICXfeDvhGT9EYr102hdzvOkDaCq0U05jdb7Bh0K-x-xqcKgniUogTuTvf8qX73lFei8YsrXUQwKuaRV_-RGZyErOdEEIK6Y6RLAZWU3QA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Listado de casos de uso
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
Gestión de clientes
1 Registrar Cliente Registrar los datos de un cliente. Responsable de
Pedidos
2 Modificar Cliente Actualizar los datos permitidos de un cliente registrado. Responsable de
Pedidos
3 Consultar Cliente Visualizar datos de uno o más clientes. Responsable de
Pedidos
4 Eliminar Cliente Dar de baja un cliente registrado del sistema, validando que no
tenga transacciones asociadas. Responsable de
Pedidos
5 Registrar Punto
de Entrega Registrar los datos un punto de entrega de un cliente y calcular sus
coordenadas georreferenciales utilizando Google Maps Responsable de
Pedidos
6 Modificar Punto
de Entrega Actualizar los datos permitidos de un punto de entrega.
Responsable de Pedidos
7 Consultar Punto
de Entrega Visualizar datos de un punto de entrega.
Responsable de Pedidos
8 Eliminar Punto de
Entrega
Dar de baja un punto de entrega registrado en el sistema, validando que no tenga transacciones asociadas.
Responsable de Pedidos
Gestión de localidades
9 Registrar localidad
Registrar los datos de una localidad. Parametrizador
del Sistema
10 Modificar localidad
Actualizar los datos de una localidad. Parametrizador
del Sistema
11 Eliminar localidad Dar de baja una localidad. Parametrizador
del Sistema
12 Consultar localidad
Consultar los datos de una localidad, validando que no tenga transacciones asociadas.
Parametrizador del Sistema
13 Registrar barrio Registrar los datos de un barrio. Parametrizador
del Sistema
14 Modificar barrio Actualizar los datos de un barrio. Parametrizador
del Sistema
15 Eliminar barrio Dar de baja un barrio, validando que no tenga transacciones
asociadas. Parametrizador
del Sistema
16 Consultar barrio Visualizar los datos de un barrio
Parametrizador del Sistema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DOR97QluNDZOO9LcEwdVIxMThVnJX5tdVrkruZ6ew6I-VDC-H9cGwRl7gTS-VI3dvD609zXJMqpHp8KwpmKQN82yy36Qx4Sf4CF3Bz06nTvJE2vaMqSHza947VzuJTZ6o0LWG=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cpo-MIgV3LMmCzG3Jdn2qK3DvSrX9LQgxVnvlkd_oNA7nb_qjNvzd3c6pLdA8ZREJMZzXJOLgtakyKSRTA8PAZyYnV9F7rjJ3DHx0YC70fxdL_lmwSev12BJxS75oYRlA-iYz=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gbcAvNwpEGvLndB_noyKExBeJzDC2xXrLY8EY6dx68INJq_nVp-8bLgI6GZwB8Lm0N17RJGzOaCexArMhHfFvjmvTL6-BVYSqXjGKVmyF9OSNFB_QnnDlLa4-wgdN0ZixkK-A-A=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
Gestión de Pedidos y Facturación
17 Registrar pedido Registrar un pedido de un cliente para un punto de entrega
indicando los kilos solicitados de cada corte. Responsable de
Pedidos
18 Consultar pedido Visualizar los datos de un pedido. Responsable de
Pedidos
19 Cancelar pedido Registrar la cancelación de un pedido realizado por un cliente. Responsable de
Pedidos
20 Generar
facturación de pedidos del mes
Generar una nueva factura para los pedidos realizados por todos clientes durante un mes determinado, siempre que no hayan sido
facturados previamente.
Responsable de Facturación
21 Generar factura para un cliente
Generar una nueva factura para todos los pedidos realizados por un cliente para un periodo de tiempo determinado. Debe generar una factura con los pedidos de todos los puntos de entrega del cliente.
Responsable de Facturación
22 Anular una
factura para un cliente
Registrar la anulación de una factura determinada, registrando motivo de anulación y responsable de la anulación.
Responsable de Facturación
88 Actualizar estado
de factura Modificar el estado de una factura determinada.
Responsable de Facturación
23 Registrar un
nuevo vencimiento
Registrar un nuevo vencimiento con número de vencimiento, porcentaje de aumento, cantidad de días a partir del cual empieza
aplicarse el porcentaje de aumento. Este vencimiento será asignado a las facturas posteriormente generadas, mientras no sea dado de
baja.
Responsable de Facturación
24 Modificar
vencimiento Actualizar los datos de un vencimiento existente.
Responsable de Facturación
25 Consultar
vencimiento Visualizar los datos de un vencimiento.
Responsable de Facturación
26 Dar de baja un vencimiento
Registrar un vencimiento como no vigente, esto implica que las facturas que ya tienen dicho vencimiento asociado quedarán como están, pero las próximas facturas no podrán estar asociadas a un vencimiento dado de baja.
Responsable de Facturación
90 Consultar factura
para un cliente
Visualizar los datos de una factura perteneciente a un cliente determinado.
Responsable de Facturación
91 Enviar factura por
email
Realizar el envío por email de una factura ya generada a un cliente.
Responsable de Facturación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oe3NrCV6igUfX857js84cx8rPkX6eZIrpbhA2Ky3YEM9_0Nia1wtnAkkZG2RzxKClypvsea5PEF6NG8y1RkJ7tNeL0S8FXXvFo5HJ9jzl-ZltVXPezPxellw6ZTF9EMDDeqEmvQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3k01ukc3K4OOW87SOd-sxpHdzu7OnXtrK4De5HjhZOCo_ecBGJX6d48GI-Hmt6dZERb9FrXXIDgehglKx9tyCYNwQcLDoPPYXFQEPi5WxzUFEjopdWtKa3omApzfOfU6-FoKon=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GfLotI9xzXp8ZedX3meNzj81jPsDbmgPCjQZ4j0Cudubp4rWzx1i4tzAVRK_wSyiVZ4QZwkaM1aGG2wDldCXt7heHLaDEve1C9-ohLSD2dIMvZfwlIBUpgxB-45v3R5UX6pRi=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
Gestión de recorridos y camiones
27 Registrar recorrido
Registrar un recorrido asociado a un conjunto de puntos de entrega. Responsable de
Distribución
28 Actualizar recorrido
Actualizar los datos permitidos de un recorrido registrado en el sistema.
Responsable de Distribución
29 Consultar recorrido
Visualizar datos de un recorrido. Responsable de
Distribución
30 Eliminar recorrido Eliminar un recorrido registrado en el sistema, validando que no
tenga transacciones asociadas. Responsable de
Distribución
31 Iniciar Viaje Registrar el inicio de un viaje para un plan de entrega, asignando el
valor de la fecha y hora de salida del plan de entrega correspondiente.
Chofer
32 Consultar mapa
de recorrido Visualizar en un mapa los puntos de entrega del recorrido que tiene
un plan de entrega asignado a un chofer determinado.
Chofer
AS: Google Maps
33 Finalizar viaje Registrar el fin de un viaje para un plan de entrega, , asignando la
fecha y hora de fin del plan de entrega correspondiente. Chofer
34 Registrar camión Registrar los datos correspondientes a un camión para ser asignado
a planes de entrega. Responsable de
Distribución
35 Modificar Camión Modificar los datos permitidos de un camión, Responsable de
Distribución
36 Consultar Camión Consultar los datos de uno o más camiones. Responsable de
Distribución
37 Eliminar Camión Eliminar los datos de un camión, validando que no tenga
transacciones asociadas. Responsable de
Distribución
38 Consultar
seguimiento geo-satelital
Consultar el mapa de visualización de los camiones que se encuentran en viaje, mostrando la posición real de cada uno.
Responsable de Administración
AS: GPS
AS: Google Maps
Gestión de Entrega
39 Generar Remito Generar un remito asignando los cortes vacunos necesarios para cumplir con un pedido pendiente de preparación de un cliente
cambiando el estado de los cortes a “Incluido en Remito”.
Responsable de Pedidos
40 Modificar Remito
Actualizar los datos permitidos de un remito, lo que implica que el mismo está en estado pendiente. Se pueden quitar cortes vacunos y/o agregar cortes vacunos, actualizando el estado de estos según
corresponda.
Responsable de Pedidos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2zvJCSwTRp_YSc68Ua67hT8ikuL2CeP7h4v5cDjdym-2shlRBxT7Itb-A7UVgwYqSkWqec2XCJURDk-ixqjwEY3ph5LYNTq_doGJTnVicgK6QHH6Aygmd-u5RMPVLzRl9iuC068w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PT1OBXtHpbfwv4ENE-WflQgw0vdSHCRzDm5Cdlex7fcc684qch5Xh4On3lNvhYVrYNsNemQssGHgUv7RlEplqXWuiZ5aI8XwqKlu5nHe2gZYyQW6JX4Jp3yRUIHztsv7v6S-OsA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jc564m0Cpblp8Z02CpjeYv3_TnPD7gGo2_RRhNnNCc2uFgIAsvsoWhXvoNnJFhklC5dUODV1jC_RSzqd-zLnG6IKXHeE4aVEt01rXF0NsQifaKkIto9rTjM492FTNH5z3-FTP9g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
41 Cancelar Remito Cancelar un remito asociado a un pedido y para cada corte vacuno que estaba incluido, cambiar su estado de “Incluido en Remito” a
“Creado”.
Responsable de Pedidos
92 Consultar Remito Visualizar los datos de un remito. Responsable de
Pedidos
42 Generar Plan de
Entrega Registrar la planificación de la entrega de pedidos a un conjunto de
puntos de entrega.
Responsable de Distribución
AS: Servidor SMS
AS: Servidor de Correo
43 Modificar Plan de
Entrega
Actualizar los datos de un Plan de Entrega mientras no haya iniciado el viaje de reparto. Esto implica quitar y/o agregar remitos actualizando los estados de los mismos según corresponda.
Responsable de Distribución
44 Cancelar Plan de
Entrega
Cancelar un plan de entrega registrado, mientras el mismo no haya iniciado el viaje de reparto actualizando el estado de los remitos a
pendiente.
Responsable de Distribución
45 Registrar entrega
realizada
Registrar a partir de un remito incluido en un plan de entrega, la aceptación o rechazo de sus cortes vacunos cambiando el estado de
los cortes a "RecibidoPorElCliente", "Creado" o “ParaDonación” según corresponda.
Responsable de Distribución
46 Consultar Plan de
Entrega Visualizar los datos de un plan de entrega.
Responsable de Distribución
47 Registrar motivo
de rechazo Registrar un motivo de rechazo.
Parametrizador del Sistema
48 Modificar motivo
de rechazo Actualizar los datos de un motivo de rechazo.
Parametrizador del Sistema
49 Consultar motivo
de rechazo Visualizar los datos de un motivo de rechazo.
Parametrizador del Sistema
50 Eliminar motivo
de rechazo Deshabilitar un motivo de rechazo.
Parametrizador del Sistema
51 Registrar tipo de
descuento Registrar un tipo de descuento con sus datos.
Parametrizador del Sistema
52 Modificar tipo de
descuento Actualizar los datos de un tipo de descuento.
Parametrizador del Sistema
53 Consultar tipo de
descuento Visualizar los datos de un tipo de descuento.
Parametrizador del Sistema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Kzl0YugDumuQRL1OhmaJ97dJMB7JHGy3JNYNCMUiZAyWHlNtM-L0UdM4Nvj-b5fAa02d1BaqrD_RqgFhKVs7U6o6LjoGmJ5kFvc9UrZJhz2JitF4BJL4F_mW7VLg9febLIw2bCA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BKA1CoUTBJAjTFRNj5Nff-ITAVc4j6RP6CxgAUuwzsf26GCq6tNn1SzCnWRvol9phqJTHSoLGERofBaVOstjeEmsFJ2zOk5BL66CJJ6McUva2UJESY3MjgL9phNYD47fVyT_dow=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2h4a_pNZQdF5vA42jg6iAxT__WqJP3MqOwlGp-MUld7fvM8BjTmXaPc3Fya9xksxBW-O6PaAgSTvxhZN37Bq-9fKf70ciNJXWnY5nlS-FqJNVs7rK2bhKBCSImejmd0RQw19Tv=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
54 Eliminar tipo de
descuento Deshabilitar un tipo de descuento.
Parametrizador del Sistema
93 Generar cupón de
descuento
Generar un cupón de descuento aplicable en pedidos futuros para un cliente que haya rechazado un remito por disconformidad, ya sea en forma total o parcial. Al crearse el cupón, este se envía por mail al cliente.
Parametrizador del Sistema
94 Registrar donación
Registrar la donación de un conjunto de cortes vacunos.
Responsable de Distribución
Gestión de animales
55 Consultar Corte
Vacuno Visualizar datos de un corte vacuno.
Parametrizador del Sistema
56 Eliminar Corte
Vacuno Dar de baja un corte vacuno, validando que no tenga transacciones
asociadas. Parametrizador
del Sistema
57 Registrar Tipo de
Corte Vacuno Registrar un nuevo tipo de corte vacuno con sus datos.
Parametrizador del Sistema
58 Modificar Tipo de
Corte Vacuno Actualizar los datos de un tipo de corte vacuno.
Parametrizador del Sistema
59 Consultar Tipo de
Corte Vacuno Visualizar los datos de un tipo de corte vacuno.
Parametrizador del Sistema
60 Eliminar Tipo de
Corte Vacuno Dar de baja un tipo de corte determinado, validando que no tenga
transacciones asociadas. Parametrizador
del Sistema
61 Verificar fechas
de Corte Vacuno
Controlar automáticamente las fechas de cada corte vacuno disponible para determinar si alguno debe enviarse a donación o
está vencido actualizando el estado de ser así. -
62 Registrar
decomiso de mercadería
Registrar uno o muchos cortes vacunos en mal estado o golpeados, dejándolos inhabilitados para su comercialización.
Responsable de Administración
63 Registrar
desposte de animal
Registrar para un animal todos los cortes vacunos generados, indicando para cada corte el CUIG del animal y el tipo de corte y
asignándolo a un estante y sección de una cámara. Carnicero
64 Registrar ingreso
de animal Registrar el ingreso ganadero al frigorífico registrando el animal con
su peso, CUIG y categoría. Carnicero
65 Registrar
categoría de animal
Registrar los datos de una categoría de un animal. Parametrizador
del Sistema
66 Modificar
categoría de animal
Actualizar los datos de una categoría de un animal. Parametrizador
del Sistema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H9NvjqAZyL7wy-ssIkcMEAHw4lm_7ASsaq5gjSGbVX_4N-FUcrbA7YS4BrJUacjlYuk7yvKhlT7VgPHfME--OkVdpzcke70qF2ipsZUZQhMtqujFNeud2hLBBbmvmz-FFtRs7=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1MtuECf7EGyPlcY5Q7MRIRB3g8dj_92ehl7VPMIZcZKybrt7IGshp_C0Z79214MQ9wcf3unklk0LMQ1lqO4AjaR-X9OSA_azm5f5Cdt7IaceRmZ8rjgS6cDCDMc-JmQs_PpO0QWw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ed9dCUrC-eTpw38uf1Mu6cPgrMmUpDlvBn84A1eaZuRAFNypgBfaTx9rRySnOf4e5CpfWDZZ76j6eikJawFBePAp8Bq-KTOQLDpty5M1qnFEVKg_K68uNyQ97CQ2LMk89vX7C=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
67 Eliminar categoría
de animal Dar de baja una categoría de un animal, validando que no tenga
transacciones asociadas. Parametrizador
del Sistema
68 Consultar
categoría de animal
Visualizar los datos de una categoría de un animal. Parametrizador
del Sistema
69 Registrar Cámara
Registrar una nueva cámara ingresando el nombre y número de la misma, indicando la cantidad de estantes de dicha cámara y para
cada estante sus datos: número y cantidad de secciones y asignándole a cada sección un tipo de corte.
Carnicero
70 Asignar fecha a
estante Registra la asignación de la fecha de desposte de los cortes vacunos
a guardar en un estante. Carnicero
71 Modificar Cámara Modificar los datos de una cámara existente, permitiendo cambiar su nombre y número y también todos los datos de los estantes y
secciones.
Carnicero
72 Consultar Cámara Visualizar los datos de una cámara, mostrando nombre y número de una cámara, la cantidad de estantes con sus datos y la cantidad de
secciones por estante con sus datos.
Carnicero
73 Eliminar Cámara Eliminar una cámara determinada del sistema, eliminando también
las secciones y los estantes asociados, y validando que no tenga transacciones asociadas.
Carnicero
74 Actualizar estantes y secciones
Registrar la asignación o vaciado de un estante y sección. Carnicero
Gestión de usuarios
75 Iniciar Sesión Registrar el inicio de sesión de un usuario que accede al sistema con
un nombre de usuario y contraseña, validando la contraseña y los permisos asignados a ese usuario.
Usuario
76 Cerrar Sesión Registrar el cierre de la sesión de un usuario logueado en el sistema. Usuario
77 Registrar Usuario Registrar un usuario con todos sus datos. Usuario
78 Modificar Usuario Actualizar los datos permitidos de un usuario. Usuario
79 Consultar Usuario Visualizar los datos de un usuario. Usuario
80 Eliminar Usuario Eliminar los datos de un usuario registrado en el sistema, validando
que no tenga transacciones asociadas. Usuario
81 Registrar empleado
Registrar los datos de un empleado. Parametrizador
del Sistema
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-cOXD7waNU6woM68DYTKUwwPvmZcxhAOmZjGHDTQZ6fDi-xeAq_r3BaYnzeT3H4vUzkUuZDB0sFTCPFKEpJJzxRU3X3sggIL8FWGu9OXwJEkvVEA8q3LIQnJvR0_8nBqPAP5mEA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SujiV5FaVRnjOv6-5OSPMPRrwvTeFq9yJUsc6EKmeuzSoOwyGh3s8Wcb9Ms_gbvDexVL5h-vBjeHwZwoqsN3lCFPchsSEl1Vg6CKBKbFQ9eHrAp54umX9jfNFLOhlwnb9g_gM7Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sqDe9sBvlj8FwpABnJsHjBU5_7sDrBtP6j3d8H6zPl558dU0qMb711cf_293POWlMcm_9duN99f5v4TNbngrKvw3zWUr6w1iyBorQmS9xDgvgiSOll809Irw0YLuftZ2_o6gybw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
N° Nombre del Caso
de Uso Objetivo / Breve Descripción Actor
82 Modificar empleado
Actualizar los datos de un empleado. Parametrizador
del Sistema
83 Eliminar
empleado Dar de baja un empleado, validando que no tenga transacciones
asociadas. Parametrizador
del Sistema
84 Consultar empleado
Visualizar los datos de un empleado. Parametrizador
del Sistema
Informes y Estadísticas
85 Generar informe de efectividad de
pedidos Generar informe de Efectividad de pedidos por cliente y localidad.
Responsable de Administración
86 Generar informe
de cortes vacunos Generar informe de kilos generados por corte vacuno por categoría
de animales. Responsable de Administración
87 Generar informes
de clientes Generar un listado de clientes que más pedidos realizan.
Responsable de Administración
89 Generar
estadísticas de pedidos
Generar una estadística de los pedidos realizados por los clientes en un período de tiempo
Responsable de Administración
Requerimientos no funcionales
Determinación de Requerimientos no funcionales significativos para la arquitectura
Nº Nombre del
RNF Descripción Característica ISO
25000 Impacto en la arquitectura
1 Tecnología
web
El sistema debe implementarse en tecnología
web
Compatibilidad Restricción técnica de implementación, que afecta a la arquitectura. Se debe
utilizar un lenguaje de desarrollo web.
2 Front End
Responsive
El sistema web deberá poder ser consultado por medio de tablets, computadoras y celulares, por lo tanto, las interfaces del sistema deben adaptarse a dispositivos con distintas resoluciones, es decir con distintos tamaños de pantallas.
Usabilidad o Portabilidad
Requerimiento de interfaz de usuario, se deberá desarrollar el Front-end del
sistema definiendo propiedades para que los elementos se adapten a los
distintos tamaños de pantalla o utilizar un framework de tecnología responsive.
3 Navegadores
El sistema debe ejecutarse en navegador Mozilla FireFox versión 49.0.2 en adelante y para Google Chrome versión 49.0.2623.112, en adelante.
Portabilidad No es significativo para la arquitectura en este caso dado que las restricciones
están definidas en los RNF 1 y 2.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dkOeDnon4XKO_qv4ZVO1oCH-3fsUrmtO1o6An77fMO3wGgo8fqJsO1XCZKo694NNHpL3C_w7UfXgpfPB1x_ozLtogHIIUE817K95RUStXwNtbCyA8xn3JFMXhC-9H67RBIY7Ubw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1H-OVfDkxMvEV3LBOpqJuoyo38R2T0fMNmnIim_xo0eitHoj3nT8zF22oNR5msAg5HaXyd0E9odi6ZiDM4i3pneVRvYMEh2ZOOwTR7T5DZ6ExG9unqamTwUE0muR-wWU7fix8NZA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ocovVIx7OJ2dIOe3cGgF40nNUpyIf2jIYPRIjqaGC4CCSzsgxw5QP5raZ4BJv6zfEjhy0ueR19IlAHWhfcLLHlxeARaptBPpeHDt5ZO3RvNL6AzEjIDMj1c095aCGBDZAx5R18g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nº Nombre del
RNF Descripción Característica ISO
25000 Impacto en la arquitectura
4 Lector
Baqueano
El sistema debe comunicarse con un dispositivo lector especial denominado lector baqueano, que captura los datos de cada animal. El animal tiene una etiqueta de plástico adherida a su oreja izquierda, que se utiliza para agilizar el proceso de registro de entrada de los animales.
Compatibilidad Requerimiento de interfaz de hardware que implica desarrollar un componente de software que resuelva la comunicación con el lector y la forma de tomar y almacenar sus datos. Para resolver dicho requerimiento es conveniente aplicar un patrón arquitectónico Broker para traducir los datos capturados por el lector baqueano en información interpretable por el lenguaje de programación seleccionado y la base de datos.
5 Seguimiento Geo-satelital de camiones
Se desea poder realizar seguimiento geo satelital de la posición de los camiones del frigorífico. El seguimiento se deberá poder visualizar desde un mapa de google maps.
Compatibilidad Requerimiento de interface de software, que afecta a la arquitectura: Se debe desarrollar una interface que resuelva la comunicación con los dispositivos GPS e interprete las coordenadas del GPS.
6 Recorridos en
aplicación Mobile
El sistema debe ejecutarse en un dispositivo tipo Tablet para que cada chofer consulte los puntos de entrega del plan de entrega del recorrido.
Compatibilidad o Portabilidad
Restricción técnica de implementación, que afecta a la arquitectura: se deberá desarrollar una aplicación mobile, utilizando el lenguaje de desarrollo Android para que el chofer del camión pueda consultar los puntos de venta a los que debe realizar entregas. La aplicación deberá ser instalada en las tablets que actualmente dispone el frigorífico.
Esta aplicación muestra en un mapa de Google maps los nombres y direcciones de los puntos de entrega asociados a sus coordenadas.
7
Interfaz con Google maps
Tanto el sistema web como la aplicación mobile deben establecer una interfaz con Google maps para resolver la funcionalidad de seguimiento satelital (en el caso del sistema web) y para resolver la visualización de un recorrido y sus puntos de entrega (en el caso de la aplicación mobile).
Compatibilidad Requerimiento de interfaz de software, significativo para la arquitectura. Es
necesario desarrollar un componente que resuelva la comunicación con el web
service que expone Google maps para posicionar coordenadas en sus mapas.
8 Seguridad en
Servidores
El sistema deberá ser desplegado de manera que sea seguro y resguarde los datos
Seguridad Requerimiento de seguridad lógica significativo para la arquitectura, se deberá desplegar el sistema distribuyendo las capas lógicas en 4
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20i2Ccx8h8eP-gVJNMTUGJvjSmI59t0pe20lbD_Fbh2JcVF_GAVCX3hV8L0MAVN6R0JmPeJ8i3hJCpT4vFF6MlSasxsz36vnmB1e8s2adICCWcElYgjO9qy46uvig_RdzEeGXasw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AunXSAE0Isl5sR9tqrdNapR5yb_sKS1FOUgEuA70dxU9IONiPKR22J_p4Wor8ATqwg7mlQwR07h3k0Ig9cLslsEDgqlGciZb9BpQirKTS3hM-YBeWymVJvSrLmwcL9JQqgU-h6A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01qk2p_50LGej4QYz1XotAXz_DZgazQnkK-NrmBwlurPfPi62NQvNh8v_Hhe30LN9wUoa3NtXeT5v0syY2Mtdqf0b9Ojqk2-My8Kxsnwoq5klNYLiA3Jc-uT7e_grj9xo8G8GBNA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nº Nombre del
RNF Descripción Característica ISO
25000 Impacto en la arquitectura
de posibles usuarios malintencionados.
niveles de servidores diferentes, facilitando la protección, la integridad y el acceso a los datos.
9 Base de Datos
El sistema deberá utilizar una base de datos de tecnología Oracle 12c.
Compatibilidad Restricción técnica de implementación, significativo para la arquitectura, que determina una arquitectura de datos
relacional, permite log de transacciones y el uso de funciones y procedimientos
almacenados.
10 Seguridad de
Usuarios
El sistema debe permitir la administración de usuarios y permisos vinculados a las acciones que pueden realizar los empleados del frigorífico.
Seguridad Requerimiento de seguridad lógica, significativo para la arquitectura, implica
desarrollar un módulo que permita autenticar usuarios y sus permisos y
controlar las sesiones, que sean únicas por usuario y su duración.
11 Notificación
vía SMS o EMAIL
El sistema debe permitir enviar notificaciones a clientes
vía sms o mail mediante un servidor de correo
electrónico, estableciendo las comunicaciones necesarias con los controladores para
enviar sms o e-mail.
Compatibilidad Requerimiento de Interfaz de Software, significativo para la arquitectura, que
implica el desarrollo de interfaces mediante servicios por ejemplo, para
enviar los datos a notificar vía sms o e-mail.
12 Generación de archivos pdf y
Excel
Tanto los reportes como los remitos deben exportarse a
PDF o Excel.
Compatibilidad Requerimiento que no afecta la arquitectura ya que se asume que el
framework de programación resuelve la exportación a pdf y Excel.
13 Remito en
HTML
El remito debe enviarse por email con formato HTML
Compatibilidad Requerimiento que no afecta la arquitectura ya que la generación de un
html está resuelta a partir de que se trabaja con un lenguaje web, y por
tratarse de un formato web estático.
14 Característica
s de contraseña
La contraseña de cada usuario debe tener entre 8 y 16
caracteres e incluir letras y números
Seguridad No significativo para la arquitectura ya que se resuelve funcionalmente a partir de la validación de estas características.
15 Gráficos para
reportes
Todos los reportes deberán visualizar en formatos de
gráfico (barra, torta, dispersión, etc.).
Usabilidad Afecta la arquitectura ya que requiere definición de librerías gráficas para la
generación de reportes.
Nota: puede asumirse que el lenguaje lo resuelve, pero se debe tener en cuenta en la explicación de la selección de CU de la
vista de la arquitectura.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Vm59d0f7Oj6IPCcToDrVP-Sht4l1_ehCGA3ve30jftSN3QBWarVh0gfAYZsyyEl9sy4WFNG70VXLEf4OpsQU48GqTQdgpML4PdQBcGAzSI34TWIBBAm2HxrQ7tBvvWibqWRJp9A=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2uhTItYHH28TmtythBQM1CJJVzvQxLxmvIyXDZNUjfa3F7AL9nLFJMe3tKE95AwPul7eBFfFk72def3sME-Xuxsce-HXJNVB1J00-hrYppk3E1_JM-7wGAqodcFzAlE-8t_OYWOQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SYxzTkAP0TYtnl7UboczRMpNjbhxDnfpJx0HMaPzgo16gHNJGRbqYUJn2KD9L_I5Rd_YMicG8Jgg71FBw6PN_CbpU9kWG5FiMe7zmlvTMoW3xY0ssjBaoNs1VbxSWgiiOg0I0cw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2s9hzvYVQ6YD1G91x9hUlf9Gy-0GM_VZ-mBEqswhsGTT7AqByRIN7SyY7ZgE3gKOD1EO-kuPBNk8sZW8zqmpbOktsNRARPyAEnukD8a849y0dhOV_CiRbnKONajas66XKDrWV5Lg=w1280-h1126-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Diagrama de paquetes de casos de uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NUpE0QW44qUDtitNqqvJAsv8_2syTQg8hyn-q_tglptGYYELSs9Hbh0QQzALDtn31qcrC8hZfaThW01ISRC8p6SEa9IXuhakLudmL2PhLndfyRTWCqQplDMay_1ZAHiKgESU8=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VKwEecy5raB9LT4xBrrn7E8c6GTfaMfyK3znDD5BpMANtAr8HU5iGRpxPAABwRfG506zMjnal_HYLmKTNTIReViO8EejuPIGUsx2rZnbQ2IfN2ntJruzBkZ7eG-Soxp5gQgs4QQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Gx3-tErsJhH1kVrBeLdDaJeIfCCIAXKPagVcRmjuIY7-3rpNiKYoEGIxpnkYCQKRBYN69vD6nl2aV1-J9kASRApI4ip0jnHNbHuKRKmml3TLfOC8gmKHzNST3nu8T6U1FrjU1Xg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv106Z_s5DNoLtT4X6BHGYTJ-xWSzww4hy83cBp5YqBYylQ9FkC7YmovJSD5C3gHb7H-jZTsXs9tVyD21-AXkGXxl2ScW2WDIxft5LIPc7UBGKpoNuwkJlp7WON6CbvYYM4acUGx=w1186-h843-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1w0wR0vBYyPe97Efdl9Mcy1RgeXOLlJhGm7yOubGJS8UpoZbEYHzFE2qTee7fKdtgSsUe_BZB6KWuKJBhaKPfeKpORFxRoFg0BWVg2bEt9JsCMJneD16-cfUyaNtJi2z1odM8g=w1197-h835-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de clientes
Gestión de localidades
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nPQ7l2-WOkbrrVUgJUaG4TtQVX8gFc7Bd599ddkEK1sfc6d-pb_4i27pqDvcWVr73sTmWbOpca5gN8xTsVs4pTjLsuVI8w48xqL-BGPWg1JGjQQZafFpCvuA3sHlvSA2SaNcEig=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1oIxRejEiA6RBjfTO5bFcoROksB8D7LswRczoa_aIu5LjmFLLw_lAKsar4VdyMu00EB962RKAZkISCVhowfU6QPsyDv7w4-DiAKJK0KNf26KcxuLjShdUsr18eNmkEqv-veE1G8Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22B_oTGi7ZGEOABl4CWCOJPlsIyX-10Fc3DcI3C7wgr2LLi4_MmwslOqakYdnE0ewNRdvLJHeEHnWjuRvXclsrAzeQeeIfW7KOQPNRrcSFyv59sNrQ8wGWeYHeavAUNPOLwvHl=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mSgRel8g0M2iWM38KJ6U4j7mkaBUaAeKcWGiSsAG_S2DUfboOVySdsbzciPgflYDnldvpm-mnKeIclCUx5a-tvjTI5r9cOcVh6C13jtvZEsphvvw5_t6BueUQ_pNrW5UgLvbdMg=w1280-h1213-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de Pedidos y Facturación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv24GMPxSqUSR-4VGW1DsHRcFC14oH3fK0tL_Y3K7hWBzVEEsN8HXCBvjBxxX6LxH5n-uTM5HAGyV6_ngwf_js0Kwp9S6wET8pM4gdFNjH0wicoE_TJqjdH8hjplySC3lga9J3E=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0u7GCQ7wFVLWqzU7vIaK_mf6gXpqGIvdTLQ-raiW3cvZ4oB59BZGuKwkKure_6xNWgxybISfWP3nidvZtd5Qk0bQlfT_iX6uX7_4yoIboZ1dBF6ELNjvj0DguohhRA3xzpd2Ys=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DzOPcyB3-HsYKOMFFx6JPKTE8c1NDWlEIi8JqrdHTXncmS8usyaf3W4aq9sC0MCoMXn5gOCi4fft8zvxMMjku4m4Ffot1MhBes_T8GOLiJPFUdAfexx8eI5Iny2E2mWT7oNTwKw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eX656GqIa_g-hGT3-RtfX_Kmncy7l6tKLeTinEpz9iE_EnXR0t0bDw25MAg89rDAnWVqMEo40m38k87t4XrB1aijAKi_fdjOWi1bniSRW2Kh-LNokhpJz9GU8_A2KBgovD1xesg=w1032-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de recorridos y camiones
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-aPkRIMcshq9RQuYRSSqZx-e1F1dW-Hz77HLEZiXhTP-wDIebtxDWUuhTqj06Xi82imt8jZxKQM0j1VO0Mc5q2_ZoeoTmH893QDdwLWehIbx0iN0EWo0jrwfz1XbY4ASdx7h1Cw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ovCbXQv90AFpQ1oxns94AEOAHDCuc7yqLifsJ0-ezv3RjknyirxDr3ktXlTfIAMHfasFCcwMEveJ-qVwE4Y6jQdHXG4VAlDaKFoBrF0XmbvPBcwd-80cjx7n95rl2JCeb6xza4w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3exMJ64Xwi4gw0pz6ivnG3nFpCJBNMIAYhyFacEiz-t5bCM7f7JXbUb5hpHr0_NNc-IwT2P1psZMN14hHftwH5VlrFN_JbXiQ_lMGbTFSvZjf9oHGL42WodAdbt-5B8YTL8XrTFA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qAylp6Iqag5VARvuW-X2PGpty70BS0cvPQO75qfpEilG5TvFbWz__3PR5lxd2hhbE1lHhgCEmnr8SgSpr4UNseFUrgK6YLfcqbwZD17cXTm8c_FOpPxClhX_wCM7kmy4kL-6itQ=w1280-h955-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de Entregas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0xrNgKFeTdFHuHB9cYZK-w_aKNnbMm3OZ5HXKbkTBaz23mmul0kHOob3_loviAdI3UP-cbeU5T54y3Yn_b7F2Qk83juasgP7oYMVNU17cn-8M4Hfi_VUjE6Gim5w5HjaCxyBNf=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0t-jFzT0qaShAhTVEHzgbkJRj1n2iRUkPSoPbGDu8Nv9vwySh5qspG2yoBLPD7dSCTBUc4d29jyZvciquazq4z14RFE9pQOfGQXzB5-NoqodjjXaTYl1YpUXF8NGMsXquOWdgmNQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18pdUfTl3gbbmSwBFO8RNjCtKEkBGmJIGbdQlRBAnmqdlNkGUTCagV3IR4p4XoV72QMmOZ0-9dZrMGtPS40hSmSJN6kstNTZO3acfYKtHXnDv7RAUyY4QceX7zwSfZgXKncaHMpQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0430wH9il2Lx6v1tHO3MygIv29TPOnF6pWup7BUOD2QtLmunpKj5yPBUNm9jhPTmCFyUQAu5zcc8UJfzvEymraKNPTVE_IHz7i7J1CAkOyDQ0wCO3xAVaHd-zeVOail1oiiV2a-w=w1280-h1040-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de animales
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2u5j7AbFD4Dj4EsHxdLyol27DP9ELKIV8myVw_1AF9PF6OZJHPaRuuDCk1F0cBAktzvnIbdRKZiJk7J0ZivguygEX1E1x1ZP5SmzYgb0-eBRjh_NcGFCdbg0Ve8NZQ1BED_8XYUw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dtQVAiJ-QU6GduUyDsv_7AEHEdqnG77PsDm8XbR01rMusVy_YgcCGOhJH-9scOi1Q2lw3Q-YGDS_1nMktr3YMAGNssUO3-WiHRhc-OMaUfBdytqlNpGtWtwN__QyOCCEP5LulzQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zLhMZ-TjPXYhPe9Q0htjvmFpASNviY6-3Srvgrujjh3k7mvxKXscAhcYqr4Ka5hWMf96TWvZJlTrnD1O2ebLQ2NjgJFwUg6KwIGQYF7R7-UfPYRWFKqTDj9f8hZnMhpsbIcj7=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv263--4wP6cmLVx3hVzCttDRRMh2UEqmQXmVLg20tMc1pXg5PzNc_fJb4i7Juaolg7IIFg75h5XSReSu_E94P6ZgzXQsF57aOVV-0KuACpq_ptfMVFF43kZa0bLDbST0c8ggDFFWw=w1214-h900-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ms_WLVU5hNGrexSzrqxbQo4SdtvI_VqrBK7wbMUsAZ8yotM4miWiagA2qUBN-KcxO0jo0-M7zdCtQD7_aQZgD7Xc2yE1AZvLAFyewZPmb_C8T0B-AWg0PKUU8b23o1gbGMDBKJQ=w895-h790-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Gestión de usuarios
Informes y estadísticas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21cNwvEpMb848JvvMKlnbS7wQ4AJL-_CkYoZ8mm8H8m8MyGeffjcIiBmom03s9p9P6jT399J9Gn8lEC2gi-VFm4JVJuBhYvehmmGOY1JGeh983SThlDtyIzbFoHS4Pun7LtjZC=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hHXYu8JxUZ4u3wzNx1IQlHmUPGO-UK_VjhPNhNNVBwILx6aSguJVhoJPO-jQVcsp2kgQV1ebdeO2FbfPzZ-ALIQhtBFaV78l_Rwii41VijknkoqPvK3o4_SjmafZTdSqSz3uL-Q=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EEMLZeg6IJKBxVN2jUP3Ge8sw4tESl1lwOfHsiB-pTcbwReIbx9paXmEShtofjsyfOwjnCPZixoOHeqEvqvcaEMqOzXsvYbSrJVzFu0sDwzR5hzC37qsNL1tnzoBdIh4WkFa8Fw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Descripción de casos de uso
Nombre del Caso de uso: Registrar Pedido Nro. de orden: 17
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Pedidos (RP) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar un pedido de un cliente para un punto de entrega indicando los kilos solicitados de cada tipo de corte vacuno.
Flujo Generación del Pedido para Cliente que no tiene facturas pendientes
1. RP: El caso de uso inicia cuando se selecciona la opción “Registrar Pedido”.
2. Sistema: El sistema busca y muestra el nombre de todos los clientes existentes y solicita que se seleccione el
cliente que está solicitando un nuevo pedido.
3. RP: Selecciona el cliente para el cual registrará un nuevo pedido.
4. Sistema: Busca y muestra para el cliente seleccionado, todos los puntos de entrega registrados. Muestra el
nombre y la dirección de cada punto de entrega y solicita que se seleccione el punto de entrega para el cual se
quiere registrar un pedido.
5. RP: Selecciona el punto de entrega para el cual registrará un nuevo pedido.
6. Sistema: Busca y muestra el nombre de todos los tipos de corte vacuno existentes. Solicita que se seleccionen
los tipos de corte vacuno a incluir en el pedido y que para cada tipo de corte vacuno se indique la cantidad de
kilos pedidos por el cliente.
7. RP: Selecciona los tipos de corte vacuno a incluir en el pedido y para cada tipo de corte vacuno indica la cantidad
de kilos.
8. Sistema: Para realizar un nuevo pedido el cliente no debe tener facturas pendientes de pago de antigüedad
mayor a 2 meses, por lo que el sistema busca las facturas del cliente que se encuentren en estado “Pendiente
de Pago” y valida si las mismas tienen fecha de facturación mayor a los últimos 2 meses y comprueba el estado
de estas e informa si el cliente tiene facturas pendientes de pagar.
9. Sistema: El sistema informa que el cliente no tiene facturas pendientes de pago.
10. Sistema: Solicita confirmación para la generación del pedido.
11. RP: Confirma la generación del pedido.
12. Sistema:
a) Genera un número secuencial para asignarle al pedido. b) Crea el pedido para el cliente y el punto de entrega seleccionado con el número de pedido generado, los
datos de los cortes y los kilos ingresados por el usuario, el estado “Pendiente” y el usuario que realizo el pedido.
Flujos Alternativos
A1: No existen clientes registrados.
A2: No existen puntos de entrega registrados para el cliente seleccionado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0a5l3u7991-cYTySkyTFhydNnkPk94g1_Q2mhYywr5h1Zpqm2WMwzNFTlTf5DEZuTwrK3bIjPjjzVL8_cEGtEhH2qp-eCVRAqyoiuvq7TJd1ljW7Dxps0PPhXmHR1jQBa0frXKzQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UJxaAc5oioeLPZr58DfcNXaib3QkUQR0Mm2nX5FWd49ovDB3wxQ5IZlZl4xW9UJ9Ade3DfoSRIYxelbZU1psgQSOh_-nCC6ZWMMeHI5EULmlmoflcUXygHgGa1DJl8XdZtePcHg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ys0NZBUwZIWIpJ23fN6Wyb_PFM2d9tBkTjLhilpswz2EDIGDsP_eGhPmHowlzh_PI91dnTGwqthkAICW5RF5Q3hdPMXvpId95tVabj3mzrVguxN43AwVBGNRaDgFLHcN5Ds5N0A=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
A3: No selecciona un punto de entrega.
A4: No selecciona cortes vacunos a incluir en el pedido.
A5: El cliente tiene facturas con antigüedad mayor a 2 meses, pendientes de pagar.
A6: No confirma la generación del pedido.
Observaciones:
Observación 1: El RP puede cancelar el caso de uso en cualquier momento.
Nombre del Caso de uso: Generar remito Nro. de orden: 39
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Pedidos (RP) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Generar un remito asignando los cortes vacunos necesarios para cumplir con un pedido pendiente de preparación de un cliente cambiando el estado de los cortes a “Incluido en Remito”.
Flujo Generación de remito por pedido e impresión en papel
1. RP: El caso de uso inicia cuando se selecciona la opción “Generar remito por pedido”
2. Sistema: Busca todos los pedidos que aún no poseen un remito, muestra los datos de los pedidos (número de pedido, nombre del cliente (razón social, teléfono, email), nombre del punto entrega y dirección del punto de entrega) ordenados por fecha ascendente. Solicita seleccionar el pedido para el cual se desea generar un remito.
3. RP: Selecciona un pedido.
4. Sistema: Busca para el pedido seleccionado y muestra los nombres de los tipos de cortes vacunos solicitados y los kilos.
5. Sistema: Busca y muestra los cortes vacunos candidatos para cumplir con el pedido, es decir: aquellos cortes vacunos que tengan un tipo de corte igual al tipo de corte de los detalles del pedido, que estén en estado creado, y que tengan fecha de comercialización más próxima. (Ver observación 2)
6. Sistema: Solicita se seleccione por cada tipo de corte pedido por el cliente, el o los cortes vacunos para cumplir con el pedido.
7. RP: Para cada tipo de corte vacuno pedido por el cliente selecciona uno o más cortes.
8. Sistema: Por cada corte que se seleccione, calcula y muestra la suma de kilos acumulados para dicho tipo de corte.
9. Sistema: Por cada corte vacuno seleccionado, muestra la ubicación de este: sección, estante y cámara donde se encuentra dicho corte.
10. Sistema: Por cada tipo de corte, valida que la sumatoria de kilos de los cortes vacunos seleccionados es igual o mayor a los kilos de dicho tipo de corte indicados en el pedido. Y sí se cumple dicha confirmación.
Solicita confirmación para generar el remito.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Qw5H12gP0cdSg5xjtgs64pKppXYG6GjZeqmIccRDab_WqF8y3oc6dQhZDU0kdfRk3dtB0yREzh5K3t2-xo6zXOym0tGpjr2kxICRSn-vRUCbqvpJuO9Cl6NC_twtbtI4C4oKJ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kWLEJUll7WPCZ3eZp1iXq9P4GTozF-RWJptuiDZyPJ44Zgb6v8j6IIYoZAZgj7WuYc5iwag2RxY5bqPhR_xObXEMUqArttUnbV-kP-majJGZY_XHZsYBTrlnrj4H12WaCvvfn=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2joBzgmCCIqO6eC544gfLjTk4sg9idPbJmzgqGebcUsxBwac6Zz0beR-VaAOV-3bKWj2ti3wTo4oJYUrBG4remN2wIVnlKJww5Yv3ez0aNjSXew-nXDtyR-gzIqDMSyXB-svphSQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
11. RP: Confirma la generación del remito
12. Sistema: Crea un remito en estado pendiente con los siguientes datos: nro. de remito (buscando el último nro de remito y sumando 1, fecha y hora de creación, el empleado que está usando el sistema y los cortes vacunos seleccionados. Actualiza el estado de los cortes vacunos a incluidos en remito. Llama al CU 74 Actualizar estantes y secciones y se actualizaron los estantes y secciones exitosamente.
13. Sistema: Solicita seleccione si desea imprimir el remito, visualizar en pantalla o exportarlo a Excel o pdf.
14. RP: Selecciona la opción de imprimir el remito.
15. Sistema: Imprime el remito con los siguientes datos: nro. de remito, fecha y hora de creación, nombre del cliente, nombre y dirección del punto de entrega, por cada tipo de corte: nombre, cantidad de kilos, precio por kilo, importe total (cantidad de kilos * precio por kilo) y por último el importe total del remito. Fin del caso de uso.
Flujos Alternativos
A1: El RP no confirma la generación del remito
A2: El RP cancela la operación
A3: El RP selecciona visualizar remito por pantalla.
A4: EL RP selecciona enviar remito por email.
A5: EL RP selecciona exportar remito a Excel.
A6: EL RP selecciona exportar remito a PDF.
A7: El CU 74 Actualizar estantes y secciones no finaliza correctamente.
Observaciones:
Observación 1: El usuario podrá cancelar el CU en cualquier momento.
Observación 2: Los cortes disponibles para incluir en el remito se visualizarán junto con un semáforo cuyos colores dependerán de qué tan conveniente sea el corte para cubrir el pedido:
Semáforo por fecha de comercialización:
▪ Rojo: Dentro de los próximos 5 días ▪ Amarillo: Dentro de los próximos 10 días ▪ Verde: Dentro de los próximos 15 días
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j96o-grBTTVIU9mVlv0cOYCKB4BiPqof8bxlrU5UYgIQ0K0s87ePAq7YHz3qK6_A1ulG3W0rU3FClpetlc9qtK76cUp8BvpkMtEjAnuEgKjTREJ6_MzedAtbWORurXi5vAlp3=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kF6RmXH04Yb_tFQgzdUQjYrm68au8IU7FGq4M4LMy6x6Ne8vL_hXTBjUx9kSOX5UKTMsQm_OT2F6loaPGB134qfLMPSZfnnUxhFaEhKmztJ7DjG0LT9Lm6jA1XoJMIf-sI4Layg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YobWTCgi8TnMqXlWeYP6ldY-C5gnMwrUX0kyCvigdmxl55CwE7JCexw8SvoZo9jWP_cbwNoOf-oKVl5KO2FBEaRu4UeBAjZxT_kBXCDOZ0eU7QgZ9WMi06bjd0YHfbRmUBKg-uw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nombre del Caso de uso: Generar Plan de Entrega Nro. de orden: 42
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Distribución (RD) Actor Secundario: Servidor de Correo
Servidor de SMS
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar la planificación de la entrega de pedidos a un conjunto de puntos de entrega, basados en remitos generados.
Flujo: Generación de Plan de Entrega en PDF
1. RD: El caso de uso inicia cuando se selecciona la opción “Planificar entregas”.
2. Sistema: busca los remitos en estado “Pendiente” y los muestra ordenados por fecha. Para cada remito muestra la fecha, el número, el cliente, el punto de entrega, y el total de kilos envasados por remito. Solicita que el usuario seleccione los remitos a incluir en el plan de entrega.
3. RD: Selecciona todos los remitos para ser incluidos en el plan de entrega.
4. Sistema: busca y muestra los recorridos que incluyen al menos uno de los puntos de entrega con remitos pendientes y solicita seleccionar uno.
5. RD: Selecciona un recorrido.
6. Sistema: resalta y marca los remitos cuyos puntos de entrega están en el recorrido seleccionado y sumariza los kilos de cortes vacunos de estos remitos.
7. Sistema: solicita indicar fecha y hora planificada de salida para el plan.
8. RD: Selecciona fecha y hora de salida.
9. Sistema: busca los camiones disponibles y operativos. (Ver observación 3). Para cada uno muestra capacidad y dominio (reflejado en la chapa y patente) y solicita seleccionar uno.
10. RD: Selecciona un camión.
11. Sistema: Solicita confirmar la planificación de la entrega.
12. RD: confirma la planificación de la entrega.
13. Sistema:
a) Genera un numero secuencial para asignarle al plan de entrega.
b) Crea el plan de entrega en estado “Creado”, con el número generado, con la fecha y hora asignada indicando los remitos a incluir, el camión que realizará la entrega y el recorrido que se hará.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yIq3wzRIlmh8J70UVQFBGzlUMCMyaXtCRwwM0w_nuGyv987xJEMPtil0YHcjv7uSVZTNO3QKorvopqAXSLAGGCaVecg3MtVHo1wwKzAxLdJromduEENkwT4zsOj9yFhiqEX_5bA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NcRJQSwc350KPtol-OIpSl0u14iOo_e4le0_xB5MCfCcq1uaysifaeLcJVCZy35XWMFpg--ZfQ9hSz2vb1iTSkX_yMAn-ffSQ8TRdiVwHry7U_Zj2LEzq08lfJFHHiJEiQRBnUg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YDQ1RYGx46MfKqmghzOnXX9uw1ylx-QMPCtshczZoyzfLMHysTvqQ8vltepxodBpyMuXrBBINyaVZ0o5kAqrFHV-_ArlZFLZ8KyqarSZ8-0iaxRrFLuCwsg2tCKiUYMdHNW7oYA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
c) Cambia el estado de los remitos incluidos a “Para Entregar” y de los cortes vacunos a “En Plan De Entrega”. Notifica mediante email y mensaje de texto a todos los clientes que posean algún remito en el plan. (Ver observación 2).
d) Solicita seleccionar forma de visualización
14. RD: selecciona la forma de visualización archivo PDF.
15. Sistema: Genera un plan de entrega en formato archivo pdf (Ver observación 4). Fin del caso de uso.
Flujos Alternativos
A1: No hay remitos en estado “Pendiente”.
A2: No se selecciona ningún remito a ser incluido en el plan de entrega.
A3: Se seleccionan algunos remitos a ser incluidos en el plan de entrega y otros no.
A4: No encuentra recorridos que incluyan el/los puntos de entrega de los pedidos pendientes.
A5: No confirma la generación del plan de entrega.
A6. El RD selecciona la opción para generar el plan de entrega impreso.
A7. El RD selecciona la opción para generar el plan de entrega en Excel.
A8. El RD quiere mandar notificaciones por SMS.
A9. El RD quiere mandar notificaciones por Email.
A10. El RD quiere mandar notificaciones por Email y SMS.
Observaciones:
Observación 1: El RD puede cancelar el caso de uso en cualquier momento.
Observación 2: La notificación debe incluir un mensaje informativo, la fecha y hora planificada de salida del camión y el dominio del camión.
Observación 3: El sistema busca todos los camiones registrados que estén operativos y disponibles, es decir que:
no estén asignados a algún plan de entrega que esté sin iniciar (sin fecha salida) y que tenga fecha planificada = fecha ingresada por el usuario
no estén asignados a algún plan de entrega que esté en curso (sin fecha de fin) y que tenga fecha de salida = fecha ingresada por el usuario.
Observación 4: El plan de entrega está compuesto por un Encabezado, con la fecha y hora de salida y nombre del recorrido. En el cuerpo están referenciados los remitos: fecha y número de remito, nombre del cliente y nombre del punto de entrega. En el pie figura la fecha de emisión del plan de Entrega y un texto para registrar una firma.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XmUd5vkY0imrMeoBuYFQCu-QHQAnLnyRNq5kmZE97-93PHBjQJ4mzs7Qwt_IBf3it0QsBVERDDxyFr77k6Cc2rZL2iuqHyzcQJ6liUpTw6QCyR7c5_civnh9DFoGjsJdyQq8RMg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lUMQCb8kI7IicOu9NjNKp2T2NL17REtbUC3Xkbq2kkwZrLnaHeWapoI79nbY6xKP5ts0EHgiZQZhV1cliILCpQvExggZdJGHKy1eBrfQ7MEnaKN68hbRYsWIC27m9gEbbaJb7kg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XTNu_jsgIgXk_p-klPyWYAX4PrI48xwPy2qt-frbhv0qFI_xbsAIjQWlYmqsW5tLePRdh5kfGg2HoT2iEDuKRM4pFU-vEVfcd_LLU07f8lWXRhkG4lPYf7-GpcOj5OBkcnk90lw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nombre del Caso de uso: Registrar entrega realizada Nro. de orden: 45
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☐ Mediano ☒ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Distribución (RD) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Registrar a partir de un remito incluido en un plan de entrega, la aceptación o rechazo de sus cortes vacunos cambiando el estado de los cortes a "RecibidoPorElCliente", "Creado" o “ParaDonación” según corresponda.
Flujo Registración de entrega con el rechazo del remito completo
1. RA: El caso de uso inicia cuando se selecciona la opción “Registrar entrega realizada”
2. Sistema: Solicita seleccione fecha desde y hasta.
3. RA: Selecciona fecha desde y una fecha hasta.
4. Sistema: Busca para cada cliente y punto de entrega los remitos en estado “Para entregar” cuyos planes de entrega se encuentren finalizados, es decir, que posean fecha y hora de fin y cuya fecha se encuentre dentro del periodo seleccionado. Para cada remito muestra: nro. del remito, fecha, nombre del cliente y nombre del punto de entrega.
5. Sistema: Solicita seleccionar uno o más remitos.
6. RA: Selecciona un remito.
7. Sistema: Muestra del remito seleccionado: fecha, número, cliente, punto de entrega y nombre de los cortes vacunos incluidos con sus pesos. Solicita indicar si se acepta el remito completamente, rechaza o si se aceptan sólo algunos cortes.
8. RA: Selecciona Rechazar el remito completo. Es decir, rechaza todos los cortes vacunos incluidos en el remito.
9. Sistema: Busca y muestra los motivos de rechazo posibles y solicita se seleccione uno.
10. RA: Selecciona un motivo de rechazo.
11. Sistema: Busca y muestra los tipos de descuentos posibles y solicita se seleccione uno.
12. RA: Selecciona un descuento.
13. Sistema: Solicita confirmación.
14. RA: Confirma la operación.
15. Sistema:
a. Cambia el estado del remito a Rechazado.
b. Valida que la fecha de comercialización de los cortes vacunos rechazados no esté vencida y no lo está. Actualiza el estado de cada corte vacuno rechazado a Creado.
c. Asigna el motivo de rechazo seleccionado al remito.
d. Genera un nuevo Cupón de descuento con el tipo de descuento seleccionado asociado al cliente del remito. Fin del caso de uso.
Flujos Alternativos
A1: El RA cancela la operación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0koFMwnoBiQhUIIBnmepatogWcW3arGPf_FeRk2tIgA39jlu0M1iOR6kDA9lvOsvbNNfGRTxM3UIkpUIL2MHyZQJU11CxLkESaCPRM7BGZswlE5gltOCRABdFUIeG0M8jw7PgmQw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eRJKiKUJIwiucaQ0_dntOH1SK4QyiCJpjNavHM0iRFllZ39TThLW24IvosCEYeJ8ZyysAF_3K9vY2L02GJ0rJvoKPVolqpCrTW0U89uXp1cxCCyMzEbVNI8JXDfRXWd9nQRD8=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vnm9FB3ti2dSqE_jMtK13MGKZL1PFv8WGoZIxYeFCR6c8mlnY6Bt4aJV8MfTkkkD23NpUDatyoU6k6mFiAV332TeYsGO0Knj80OL_ElLv_6xnoWgcfJDqj7fOIje0FvYJvMWayg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
A2: El RA acepta el remito.
A3: El RA acepta parcialmente el remito.
A4: La fecha de comercialización de uno o más cortes rechazados se encuentra vencida. Se actualiza el estado de dichos cortes a: “Para donación”.
A5: El RA selecciona más de un remito.
Observaciones:
Observación 1: Un periodo será correcto si la fecha hasta es mayor a la fecha desde, y ambas con formato de fecha válido.
Observación 2: El usuario podrá cancelar el CU en cualquier momento.
Nombre del Caso de uso: Generar informe de efectividad
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Administración (RA)
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Generar informe de Efectividad de pedidos por cliente y localidad
Flujo: Generación de informe de efectividad con método por pedidos recibidos impreso en papel
1. RA: El caso de uso inicia cuando se selecciona la opción “Generar informe de efectividad”
2. Sistema: El sistema solicita se seleccione la fecha desde y fecha hasta para el informe.
3. RA: Selecciona fecha desde y hasta.
4. Sistema: Valida que el periodo seleccionado sea correcto. (Ver observación 1)
5. Sistema: Busca todas las localidades existentes y solicita se seleccionen una o más localidades.
6. RA: Selecciona todas las localidades.
7. Sistema: Solicita se seleccione el método de cálculo de efectividad.
8. RA: Selecciona método por pedidos recibidos. (Ver observación 2)
9. Sistema: Solicita confirmación para generar el reporte.
10. RA: Confirma la generación del reporte.
11. Sistema: Busca para cada cliente que tenga algún punto de entrega en alguna de las localidades seleccionadas todos los pedidos que haya solicitado cuya fecha de pedido se encuentre dentro del periodo seleccionado.
12. Sistema: Busca para cada cliente que tenga algún punto de entrega en alguna de las localidades seleccionadas todos los pedidos cuya fecha de pedido se encuentre dentro del periodo seleccionado y que tengan un remito aceptado por el cliente.
13. Sistema: Calcula y muestra por cliente y por localidad el porcentaje de efectividad: total de pedidos aceptados por el cliente / total de pedidos realizados.
14. Sistema: Muestra dos gráficos con efectividad por localidad y efectividad por cliente y consulta por la impresión del informe.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EaJOi9gPJlCmG2dc-3pz0MiYcK7lYcFXDoC2fXW5RBN6-k0RKiu13Oulwo1rXEZUlie5cARBBYJDdZ-u6QyE42LxVdUQFAJ2mivmbmJNmvIyBF4SrqjgIUW1bbtC6xDnSULK0=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00l53_EpKK7jfu5cnfmM-gzYjS6jjrjs_x9GB-SgRXRkieoEXu66xEyyqrCB1lVrDAAhDUUM2TbReyw7xyMvyFJmlw_xNI_cGuIzmVncl1r82Blkr6ASChE7U60Jf0sXO2Pe_nSg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2osFeRmArwc-y1-qlE2cmo4q-lqUG-lBPVCqjYnrVWal7V_QYMmVTcgGwXNufwb_Mz67lfKL1nLWg5zrdjakc4S6f2K-DwfRK6EPFTZ-stQY3b8urva_a7TH9ViflDvmV-hA6MOg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
15. RA: Sí desea imprimir el informe.
16. Sistema: Imprime el informe. Fin del Caso de uso.
Flujos Alternativos
A1: El RA no selecciona ninguna localidad
A2. El RA selecciona algunas localidades
A3: El RA cancela la operación
A4: El RA selecciona exportar a Excel el reporte
A5: El RA selecciona exportar a PDF el reporte
A6: El RA selecciona método de cálculo de efectividad por pedidos cumplidos parcialmente
A7: El RA selecciona método de cálculo de efectividad por pedidos no realizados
A8: El RA selecciona visualizar por pantalla el informe.
Observaciones:
Observación 1: Un periodo será correcto si la fecha hasta es mayor a la fecha desde, ambas con formato de fecha válidas.
Observación 2: Los métodos de cálculo de efectividad podrán ser:
A. Por pedidos recibidos: Se calcula como:
B. Por pedidos cumplidos parcialmente: Se calcula como:
C. Por pedidos no realizados: Se calcula como:
Observación 3: El usuario podrá cancelar el CU en cualquier momento.
Nombre del Caso de uso: Generar informe de cortes Nro. de orden: 86
Prioridad: ☒ Alta ☐ Media ☐ Baja
Complejidad: ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo ☐ Extremadamente Complejo
Actor Principal: Responsable de Administración (RA) Actor Secundario: no aplica
Tipo de Caso de uso: ☒ Concreto ☐ Abstracto
Objetivo: Generar un informe que muestre los kilos y los montos de cada tipo de corte vacuno generado y entregado por categoría de animal.
Flujo Generar informe de cortes con visualización en PDF
1. RA: El caso de uso inicia cuando se selecciona la opción “Generar informe sobre cortes”
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YDaRk5LAOr8r6Ys_shxREPp-LIk3W5kb7vPusCiu9qbBpSDGn6aj5Ts8mdYONPYBVXaQv_kX94CR2jDT2gHBvR-Su4xxsKju_CrCy72ID7SciOdDmjsqn9__GARhaMWjBPvna=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21e_lhFn9mqZlxbdnrbwHhcKIkWHX6a20lGnTb9HUl9CwrZNOLu2ug2EWU6Bwqt0kVX5WHPXxIvezLmBm_qLdE9odkudfNxtkLxbYc-YTTZx5xCPTDOyt5QN4ewG8TNjiLURgWsg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3z39MBLXMI9tFiRXZAII0R-cTpqe_dQkaS4kFHj2VaoGVaXjSrGQbYgXkfMgU7fIME2DxM2IhsiAo3xvnuo0V1GLgd4YpVrKlpvbfazdgpuXdbree4efabrwA2_YfxinempzTDSA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
2. Sistema: El sistema solicita se seleccione la fecha desde y fecha hasta para el informe.
3. RA: Selecciona fecha desde y hasta.
4. Sistema: Valida que el período seleccionado sea correcto. (Ver observación 1)
5. Sistema: Busca todas las categorías de animales existentes y solicita se seleccionen una o más. (Ver Obs. 3)
6. RA: Selecciona todas las categorías de animales
7. Sistema: Busca y muestra todos los tipos de cortes existentes y solicita se seleccionen uno o más.
8. RA: Selecciona más de un tipo de corte.
9. Sistema: Solicita confirmación para generar el reporte.
10. RA: Confirma la generación del reporte.
11. Sistema: Busca todos los remitos que se encuentren dentro del periodo seleccionado en estado “Facturado”, que posean algún corte vacuno de los seleccionados y de las categorías seleccionadas, de ser así suma su peso.
12. Sistema: Busca las facturas asociadas a los remitos filtrados y calcula el total facturado por tipo de corte.
13. Sistema: Genera y muestra un gráfico de barras para los kilos vendidos por corte y categoría y otro para el dinero recibido por corte y categoría.
14. Sistema: Solicita seleccionar tipo de visualización.
15. RA: Selecciona generar como PDF.
16. Sistema: Publica el informe. Fin del caso de uso.
Flujos Alternativos
A1: El RA cancela la operación
A2: No existen cortes o categorías
A3: El RA desea imprimir el informe.
A4: El RA desea exportar a Excel el informe.
A5: El RA selecciona visualizar por pantalla el informe.
Observaciones:
Observación 1: Un periodo será correcto si la fecha hasta es mayor a la fecha desde, y ambas con formato de fechas valido.
Observación 2: El usuario podrá cancelar el CU en cualquier momento.
Observación 3: Ejemplos de categorías de animales: terneros hasta 140 kg, terneros de más de 140 kg y novillos. vaquillonas
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1G-3DcCdGocroGtlQYhjV-6nqgCGly_dAt55nhzhxHabLRVClhIxeat5Um0rmwRZJfXoDoczHV9F6pMVPAX5dHbio8Vy7B9Ph6RiUX1rLptbeXKwCsxU-0F88aSNYIshnJu7uDPg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ESDdz_Z_h0xgxBtvlQ6NeKLgchdyeQN_SmRN6cl8kE9qzQzy2c934Pwg3W5S7e5A7JtEYFYgTXMlFuV0T13pFYLgqtHnGukNziu_yOy95S8Nnck6IP-a7k3sWmNSm9kke8htUyg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0AJuH3K2CEXhIYnlbdtpEZ-i2Sj4NjMpKc56iVEFNxmbSss-T_yExBBzcGOwgbhPtfJ900UcERdn7JvsvujPNXJzffYQebL7pM9ME3Jmfq63Ca8Az3XYFi4takZ2JGdOJM83fauA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lOoXPCUt9Ok5-LxQWJlv8xkmR2eGOl-dNYodqjRCXDI6xUfwmKzLF7gvja1AnP8y9j_1iUqvSt35h75CCPE1cnaNw6p-YIH-HHCO1zwOB3GvcQSVrLtdi1zG3GQEsQEeXzf5zQQ=w1248-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yAA_UfdcUGGdDqDO9ygiV2AElta9_q-cXGe-yJFgiO0GRcqAiDrepEnms-TuLDOtuoIgETGPwdj50Al9qFGkFe6wl1R8eo2dGd3TnFvaza9CbMAYz0hWSAPeer5ViBAqg92wx=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gKeBPTbP26tmAjEgdLaO880RkwuLYQJSfg_ZOwzYIT4qNfmLCEwEH6UGxdBPSifP66bnrrY9fcO6CHvZNEWhJnvkzGyiEWVIUnktpWPC2V1xQU2jVREH4u5F8BRXGVDsG4bqbnw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07SSifrOXtt_mxS-tDnqp-MDupiZRY2ddRGyR3_5zVQhOR3NhykdIrVdH7R8_vpi71gAO01bPzztFiSQJjgSCHkwE3nVTMEn5ze3zMaIXbqOTfwyexQA9uEznHTHAzyO_4sAXG=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Requerimientos no funcionales
Nº Nombre del RNF Descripción
1 Tecnología web El sistema debe implementarse en tecnología web
2 Front End Responsive El sistema web deberá poder ser consultado por medio de tablets, computadoras y celulares, por lo tanto, las interfaces del sistema deben adaptarse a dispositivos con distintas resoluciones, es decir con distintos tamaños de pantallas.
3 Navegadores El sistema debe ejecutarse en navegador Mozilla FireFox versión 49.0.2 en adelante y para Google Chrome versión 49.0.2623.112, en adelante.
4 Lector Baqueano
El sistema debe comunicarse con un dispositivo lector especial denominado lector baqueano, que captura los datos de cada animal. El animal tiene una etiqueta de plástico adherida a su oreja izquierda, que se utiliza para agilizar el proceso de registro de entrada de los animales.
5 Seguimiento Geo-
satelital de camiones Se desea poder realizar seguimiento geo satelital de la posición de los camiones del frigorífico. El seguimiento se deberá poder visualizar desde un mapa de google maps.
6 Recorridos en
aplicación Mobile El sistema debe ejecutarse en un dispositivo tipo Tablet para que cada chofer consulte los puntos de entrega del plan de entrega del recorrido.
7
Interfaz con Google maps
Tanto el sistema web como la aplicación mobile deben establecer una interfaz con Google maps para resolver la funcionalidad de seguimiento satelital (en el caso del sistema web) y para resolver la visualización de un recorrido y sus puntos de entrega (en el caso de la aplicación mobile).
8 Seguridad en
Servidores El sistema deberá ser desplegado de manera que sea seguro y resguarde los datos de posibles usuarios malintencionados.
9 Base de Datos El sistema deberá utilizar una base de datos de tecnología Oracle 12c.
10 Seguridad de Usuarios El sistema debe permitir la administración de usuarios y permisos vinculados a las acciones que pueden realizar los empleados del frigorífico.
11 Notificación vía SMS o
EMAIL
El sistema debe permitir enviar notificaciones a clientes vía sms o mail mediante un servidor de correo electrónico, estableciendo las comunicaciones necesarias con los
controladores para enviar sms o e-mail.
12 Generación de
archivos pdf y Excel Tanto los reportes como los remitos deben exportarse a PDF o Excel.
13 Remito en HTML El remito debe enviarse por email con formato HTML
14 Características de
contraseña La contraseña de cada usuario debe tener entre 8 y 16 caracteres e incluir letras y
números
15 Gráficos para reportes Todos los reportes deberán visualizar en formatos de gráfico (barra, torta,
dispersión, etc.).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TeSZbNg2f9nQA7u8mhGXwKztg-S5RZXP4WmJf8wr-XgL7krtsXDFGrE_twK935V5ye0-QXCPgGw6I68V42i_fVKjHKD7lmu4z9Vue33N1qZdDB0xnmAwmx7w03NHyc-1HOUvJGg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27wQMYDytMD2RG8VVJC_HFJkmnDUbqv0GGFCQzKGcqVb6o5vPg0KSfF84Lm9f0YH2XB18RKT8pLP5gbudE14oD8J7hzlZNt41EgwMH6dZeV9TahYY_snj0Mvs5RCof5yDPJJtVWA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TWJgg682W7p_UahmwXH8V8zustewdNnAZA4oSFUgECBaThh7dmZtOAqctbQBddvUwWLHn_A-vofbsU4fp8p4RIoJUPpR4a9wldoa683lOg8sm4glYHyAsWXqLhg7ld9xSkzd84g=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2T-D09u2yQZudz6846t0RPeO3zbvmMb9xOPJrilOOpshF7gGGwUduJ3OCiZuz_iba3x_gTV6ABo4WQeDyCcuoDnkEjYlhGKeGYKlpwRCKXp3k4CmPIquyQwNcUY8OgtcgPfNw3=w1280-h1008-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Modelo de Análisis
Vista de clases de análisis para la realización del CU 17 Registrar Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CCM0wK8bl7-QuEBI-yslgaHqfKZQAFKhExPlirLmw1CjuFo6B7WBjuvlf6R8HQNuB0fYB_ARdN_C3yokG-x327LAleX8oI7f-tHdZaxArEmeF-EcPBTKoPOiyMqDjDeBPaqzZYQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mzVksdxqU4iWAqCFT_vPM3G80UJdlaB8fKS4Xv_a67kzhOfuVrYn-IWRmzs-dxb7lhH4sFYZejtcWOnsBNaNj0F7wgRWELq1uwRTwyJX8S4wTDneIXQgmv0wr7NYNZNCGn0Ha=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Vw8lfhqQK2eTdUya-8jmA8Wb3HNSK9LqDSuBOes_Qi_H9c5N8xh6hwjOwNI_WtGEJX4vq1GC98lmfTdASR5yA-kUqNqcg2OmdyoCKJ3LN510xd9sXMlWq69p0SEL-SltkgKcpkA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0n_NKlrw9a35ZwaMGO5ZtewS0ugc4l0LTGZ17jAUn03kk9vBE1BbkC-bFlB72HluHcbVp2Kw7HU9dx_RpCs93G3P8V2u2gNo0TVCw73Dn4u9P2yyvzR2qubP0YXWAO05TinRbRKg=w1280-h991-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del CU 17 Registrar Pedido – Con diagrama de comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0twe1mZ-zNo0T7miflAgfZtzJWFmIZHWhGPp-DKjgonnC47BD3sSLfQ0QliWy-2uC51EYIhhYurVBYM5VUSET5Qx5Mb2d9maV5gj9PVxQfdSHdFnt5h8CiXgRMNkHxx_subWz5Lw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xnp0mEOy7GPYLzfNTMA9Kz0q5KtqS4vBu9bJFdj6--Y3F1QM15TcbjYw2fHQDwRGose4vzjAtd1IZZu1iK2g-rWY_XxS-EeOLYvVeIXjIYWMMp3mzbC2xG4yhEewZBAuxUPJH=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1I2S1AJUl0sr_PO6HIFxvQRZbiT0Y72OpxnmH6H_xP6SBPTOFb-NPl0_tgKblH-qBRT3qUvdSGO-uYNF2gsyyhg7wshZKBQtsLGaW0p7Qs9AkofJB7twGSxdnuFHucZw34Bg51HA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yzS2T8RmU5Myjr-GWFApEMkdCa6syiBlf5JvNMkeWy7rxtZafaD5tSp2_WOHrLYte6bubWGADWE4nTZH3OFUGD2CiY702XfL-mbvH_bBNOt-WasvkzwMnahir1yAd7f-k33pkoQ=w1104-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del CU 17 Registrar Pedido – Con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Yx8vMnykiA5zjB3EUShqeBYtSzDB6S5ELBcUTAuxug7yUUcmbxc8ED-rWjaYnbNlIo8u4A0z3v5BSyMLGKXywjrHgVLX0AbVL-aBe73pUMaVvIUOKqziwkiTKdH5kglxXY9AbMw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nwnxf4I4BFgQCF_IqtcUul-Cy8scY9sLso5eRZ0UPVgqC_y4gzukcmEreNbf-dt8V9r5BqZdBu1i0RhBCfiQOCFkOz49g_r1EQys6XkFxUZDjVD6WfGJnU9HaU30nEiUn1MpSWA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vWp_90ApFxlyhAauyaR4YWHxdtYElrAlkCLtDaEp4MaJGsGoTOefvdwvuNWiiwI7BhrPN1SUPifkQmFXtYtf3Mwb9InN-ecp7WlCYYUJSViZ6MN4td0XvQEOleHP2ptBNvqrGdQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39aF5fxQ0fmwrWkHTiC0d94-mJLCXTiI0dsizz7YnbphV0WPR7woJzOZaWJjb6fvW0jSK3XJtRuGCkcpGKyCshVB_uWYd4tiDhjiN5igYe-9rwND1TWSRka-jeW7Hlc7U0wrSR0A=w1280-h1174-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de clases de análisis para la realización del CU 39 Generar remito
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1s8yt-LBuiKBiJKn3dkHi9QO4f3EwN5xsXFyBVytIxTORZZE1GBlZPWv5U1-xRnKnU8eZu6zyA3T9vIExWuebjPHiS25yvweKb2a_IljwxdijwXtqDwng5LQ_EIBXCIuUCN1diQg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tpYHwn6Ymw9xI1ZdA4VGuY2NX06aOtVjVw3aojnSbEOJ24gN6qXNJfbPWGe2vNA-DLEF6XzmddLBlKqmZ42waui_DNQQ85xU3jcIQor5WT-prmWk6lm3Gad-romZH4L0-DUfz=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sDk0zzTCM_XGsvXKV4ixBlAcFEcqVJ0xCfYmjOzEK7H8yj5DBoQ7MF04QISEphQ6JHGJJ4LUlPRgBIOciRPrhf5Tr91HSSjLOF4aHrHk58n6Z5IEak241aQsBrmwMhQ1rOK66Kw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Qib3FHzewsSx5OHVByZQFRPODZjCpVkoIkbE4YnAribduvdPAPII1QlO1Fcidb6lrZxLf8eNCd84yWtJHDwui8gK7s9msXDjA4TcbI-12BDzp9Ga42KJbKK2-eEj4O6GcKpo7kg=w1280-h846-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del Caso de Uso 39 Generar Remito con Diagrama de Comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n3YcYwNltv0gYq_RfXsQ9oDz2nBe5g-HBwyrpjQPMKZ8gZNtUcWNL7i_AGX6-yDaCeX_QTzYTWdJ-28l0ZdqfCsGMzxwtzRZetK3NMMxYkVgmEJPRUyq208_LRL8vrXJs_avIZQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0H9AnbOPgc89n1wYHvvQwKq9G5fz243V4b-zK8RFX-zkqHcThyCnV2Km6CHejot6Jg7A4Rnqt8GZ-Cd6oA_jcREKfIl7h9AHnZeWknzMOzGtoR5PT2BgJkn5FVh3c2mq2-oT0_=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1axWXj4ad5J6JTLy9CkbTNTpkA8TgmnlEOvPlSKm0r1E2zKUrUQZgQ1C-T7kxOPFbiMXHAj7heMrCKh54-1P_Npk0NcuxWRR5KpYVEjXz-RxMfWffrCE-oIfISCEUCfb6GJ3Z3wA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DmbgKNqLgvs3aKU_NZoCMhydyHByajiXN3NZ9Ca4aEeahqDWbJ3lwcAz77uehsgviCqP5BT53yhgdYBg2WAs6rJrCfV-pvYLzePT2poTQUwOX2rFMPHN6LhDt_KoV5BIdgoz0Fg=w1095-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del Caso de Uso 39 Generar Remito con Diagrama de Secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06Ma7Kji4AM8QBtrlQMnAWjt3rw44uyy8JQk79DrCLxqAzC11mhBqiasJEEt0c7s4zXrCqQfl-EbJaF4m3t7LTbtjSkFDNl1cp5YoX1IevSZqIkJg-TkIBTEtQKBiukR8vw3PB=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_XcTl2EKI1XiydKcjKiVlJMwHEFNYJVG1GTjMX6eT3zzpdFNKKgFM0nZAsVtSXKeRQod_vIZEgxxpnLZPnjX7fS-DQmmjH1KJL9fjdsEJoZPMkMF-5o8WYfx_mOv4k3toaEzW-w=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37KbcWb26HOReHnL8cbEboAi4D5AbHnMyCbg3AT_GlUGvU-_j4qml5rDkK5xYveItwsd5le0PE2RzwwFPlpoAtdWY1jug9xIna0_jgEhaYAw7hmhHZOcLatsM2ky3erGz3_qaIsA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DA6NENiv77C9tJQ0-IR4Md-Hwxq-mfRL_ur4teJOcveQOAzy4Z_NJwFEQi1i9REY-hRlxprnR3oZuEmpKGQ_dh-pxN5TccRMWTTQixrC8QgCNixKfKGJBX-i8mR1ueXJxNFhKTw=w1280-h1229-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de clases de análisis para la realización del CU 42 Generar plan de entrega
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GsgmM42YWX86bzSH9EYn6cFiDC5VgsVqXwhFUXA_KoSKLT2pPN-_fmfIt0SFgYX94sIdGssExFgB-xTcjr9jp618V7KIeCUgiijI0pM1UCH11vaWjzJ__fJFLYYR0FgO7Po4p=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-9cLCFYT57EIRIpqTy3loL4TNz3gvkVzZ5FQ8FxpXNO37XhP3bl1wDB80IP_qsIIhk-VIzxWvHW8kzrmhUII2UgroEWsDAOX3HEpJfy117oVenpRo9-9ZN2IbThKjC4lF1WM_Yw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kBueiD9_ewxm2hTD_Rvd0OZ6TslBpmuvGMSCaWMpDfVZQmhbNfBFSUI-5BoNDV3MFwkVdDIQy5zxon-FrjKru9XeKDsgYZhu6xTByJeHgWCLUZ53qBomaq37JOIjUy_NOKiYx=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pL2jPmLTVUfsE28Z_GrWcA5wi_iofRjfBFQInUNxoBQllj01Aj_6if2E9oE5BK_chnqGlMwAR9UVY0Y0Z6VKfpGpuFfPXl0grU75Y_l74l-sSyfQPKeZM-_4nly218pl1AqZw=w1280-h1278-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del 42 Generar plan de entrega – Con diagrama de comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bUSmPOxUS2fwHXV_2bPMBon-fNHl_ac264yaO4_D3kzqnPyFMUX6_awSmclncR3l0-DD1NC0TLXAMeSYoHMMzZ2vy3HEs8tCED1s-xXbgTAIWKlb2SLnqnmLhYinvHPUqGiPBRw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2x-T7WA7tQdovuXiPBLKbnDRi6Ajoltj1Vh1_AkKJY8ZPV8SC6091nkdptvVeVi1t35UDo1p1GJlZsj1TsDHn56zXDWO00IOSdkTR1-GdR2pebK9KeUndme46J7Fav27b2s6XbEA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3321sATUvFN8Zs_yFFiV7kgrcxI0lqN3cKSBr6hbItAixroz0ClPYMmyV3Wy2_JCa-QltlxFTXzBdU91NHXk9yzQapGwdjhjxbmDiW3gWx6FMbXImcrZFwpUeBB6cfyE4JKy5a=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3XxOrQW_M1uqbLOM7dRZzysLj7rKgtou-oUfW33SiK2N4fRwsRvenihZr1tRbMVi8gQ-JbbTbEXGOMzlXhnE6prijT3TVgtW5TLTEwzEFVoihYbyXi37caSdHsXCUycGPfcWZ9=w1100-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis del 42 Generar plan de entrega – Con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g0jifWjiTyckjxSJjagvPX4-jYMShcMP5IT7ftZlJZQD-GMUDMfRuS3FCdTVZQ3W1qbA-li-4xQVPPclLJ4x0sVmo-TkLNJ_OOs9WsAtV1YmB0aukDJ-AtZd_vDjw2ZQCf336bw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1apfW1QE74nb7YgueTB98nH14MVnutWF-akPX0pO5q_G-4VF6GNwVxKpiUrMW35GGP_kczF9mgcGukqkdHz3JyRsTKP1eoYz0z_ohmEezy9QCJzpIVS2XKyWh9ZlasDSekvUUPjA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J-frJ-5Q4olictfkWmiyKtNwYxBH0srok9ikD75LF8gngKw5MqdeR61awJf8V-hFS1RtJY69xwBKqa3SGEZ_gJjQb-w5fsEyVN7XxAJkyloEna2pE7hjRIEkc1HmF_e8GDAM3VQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00wJChVgnOGURpVYK7-5Y1uOtoLj-U81yazSz-aDgGyNHjGSO4SGyoHIqD1JRX1O-_YMbwlrE1yFWd3wBayvHQ1n8KMsrNa12JvBzL8FvH5Fz9ExudjWKC0ZwG0ZiRiSv4P7J44w=w1211-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de clases de análisis para la realización del CU 45 Registrar entrega realizada
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iJew1Og5ErxfVCiJicaHCwgd9S0FXYLH3evHVRGA3RvTQRl2aLt6nvfoJJXnztkC_8pQUcuocVWZG_pHeX8YQ2CelzI1-MXrGJAC19Trgua_t9VpI9E2sO6NKeyRyNq8oPtTadA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1cpTgCek8-8L9X-i4Oj3_usDRfBdyuD2fMK7MNfvuREG0hhYl3PF74Y8ROMw1c6Whtvf4y7HFm-TcOm4FmnVnToilT4ZmTVDulBqk0HEYNrV28hMiokjiQWm6nlTbMtoWAwhRVAQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3CjWmYOCQEpFMU0CsHOLGIRQpFZZfkAdBacP3ISsgyVTeFCq-nucFBIcyZfIufBujv19DPx9-lamX9labwYrcvufqdARV-xWbnWDbOg8ek1BAtUf0wE18DLWjIsw0813fePug1=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Bh2eRBf7zI5MHLXnHgFMRV8V8auDSwDy_2Rf6R62853xHL6c5ktzVuY2OS99y6nQQpvfA4hc8oyyzb_U035YqwvNuKKvZ-YeBhgQO09vQALBHB8ZQEaNAkhpw95owrATWLSuo1w=w1104-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis de CU 45 Registrar entrega realizada con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YdskUlYIylD-oCs_YBCw72EestD13cN-Yh92HiMvuuCL2hmfg2o3PVWq_RC9_SC-lamPuvMcIi6STohYk9OokiEEEuDf8y2SLACX06TAKtwMrh6Db8j4RP82drnSvvYeiLylqyA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1677S5LJfZC58VtqSCflm-jyySUhjF4tQWvgwf56w_vTl20mRk8mk8fM_B1uNaJ0NP0hIRPWqNWi3_O_4lDHRjPuf3qMyGQmZpDZcPi5Gfo7vLtkfEkC5w4xbdYw8vvd5D4b5k=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IdUFH9mHg3685U_B_ClZhZ49-lJChnSQo-k7kbAt7rKp1m9jKETYuikIpghyyIbASSPVrf2cX3Nbir_jmlMYcnUUZ65OJJRRR7bTebx29cpkvtpBMHUgwTifQO6KVC_tv7cfJfA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HDpj8sqUS4jvCVJ7Rgv4nneFKzNwAqSvroAIDIKHVrFS2YpIy-gzpv6BSmYqPXk5GFkbPPtsPCjB70i1GKvfNihsAw0iSmSRhVaxAaInXGJ2bYPLA_oox6UuRvqCEsdfoPNZ8Yg=w1280-h925-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis de CU 45 Registrar entrega realizada con diagrama de comunicación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1drdFafvyAgg5M8IduGbdvoRaGKfXwHttGnA15rzXkrq_vdjRp4S9H0Th6FqVXCDqFpMRqrrEwhtUuto7li4z_ZkJNl0lTBB_CuFZHTUBWOSUUA_DJggx7wHBqrz3l56Iw8F1YAA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LkYOIOA8RpoCxQtkXCtR-FbDsNgPGhnko4YbW_Kt71cyZRbxad4ZYwyUhjqU_qwTkzAdJ4SgZytdJyXhiLh3ihsF29fpKaWKcQXT9qT2gYocK2gbdZjZfTp2SJl0tCNVksWtkbQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20g7nppiQwTPwsfvBWbacdnuLpaBfpsHIv0PgU8EktafJXc9Vfff1OmJ_tGJZimPdV23MsIGiY5tCOumrxU8zMZ4fXvPwc7iLHfMJtR5Q15dJT6JQU3eoGJ2ruVPu4m4ZOxNpbhg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FA3_jWCrh7HUL_cfjQHv_YRKZvBhnFmWYDl7-Dl2RNn94A6H69hDE1PPRnfMYjzswUvcdxfx9DpWP5aLWBMko-bU5DiaZJkiLKfyhs8FMFMo9KZ8_TNvTm1MNXKnkTCvnBTr8BQ=w1068-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de clases de análisis para la realización del CU 85 Generar informe de efectividad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OdYUJSgy53xb1SE2lIXGc5kbQ7S4rc55FtrsGYqim8uhWRpR1iXQMoZR79zIFEeRwQSvNKan6lRpU5ic3aranRwW-ZzXgXlD1jbuB4vyWJidx1q_o_4B18ufQN6cSDYRB4Y2FAA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mGgqNpBM4tbZei-xL5Ma6km7jjlg3D6fD5obpZOfOo7X9JR1hohFKgFoA2PhpbnxIV8X__9w_eeL_Z0ljsTzX_GJ3FN1LvyihO5qFuv8JIWLse-r11PGuIktYJ8PJqqgazOy_qg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zpt1L0hfBUWM3YCnFY1UdVF78zyzFeRKiwLmpZHRYuhrBsRV_gWVQAGwMpJoloZrw2dnGfSVEZfUeHPLXury0KMZ9-pCGspELDEbNBI6EKQMmJxGW4FHbYZqQ--iQqZwGPXdl7Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EM46mTOT7L8BPSEdoS_Z44srHft418dCFu2-M1rT7Ifta18g-CJ2M8kC-9UdRZBLqcpmkyrEMbIozgTS2Q6Iih1KT8kU2Jg7YUH2xc7PmP3EnGl1xv_t_VAgGTAUryyqeZAglzA=w1148-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis de CU 85 Generar informe de efectividad con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06aMTakQ9yLBSw83LCwahYYFW7QvUVzMtmXaiWaGnZ_8znrAX5gP6JdkVnz-2wvqVzcaRclLm0PJr-upDdoc22vY5qAzyl642TBEh-k0hjTzubisWcqifV8zyvrv7GA2LhHPFbtQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wIfy_1hSKMILhUR9nR2slO7D9jkEzz9giAUN2rqmXbe8lEVpbsoTdX5C4cp0npVCaaAEqYKSKRr-l-Pj_OKy_BfjvlY-LLGHGxZ_YgieXNWTv-Wn6lqQpF_lP6s8mfwJDodNM8A=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sYAFW78pcdAXcLfjKda63pEAGFphIjmafs7mXkGCXKGywz7azaBlasKQUVmFlNVxIcO3bL5OIGEKWpLDYUZn14QNN21jDK5DnoAmTp3GAKDmINPrEsCtvWNUmNkfh55BTSbyCqg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XFaKeSU_fzSi6C2_Troe35uZrOxjlsQmiiJTq9scQrH3AeqFWu_Kh3BtdNRVZNAmW90CGaZA0-O1xBUP7KAHdzmKXAq62zdalIhhT9TCtX6nfzbgVhZ3CIMMaz36P57e8KBOj=w1125-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista de clases de análisis para la realización del CU 86 Generar informe de cortes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DsE5_IcvA2U6SICXZRRKs2msX9m4VE3pQ6_jS4zAIy30_d5cWRUMfGZiKvn-yMhOdSqE4y0gJkWHiOcoQAXqs4u6bq8G6k5VcwJbOW-YqGzgtqgg3IjX7lJ1S-HvolPY57Hlhnw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08G72C1GMnd7a2BbGG9EY_7Cg_azsPQBjslKGaWUIUp2oAEYFISoayPR6HfXlSxjNFfJAkuTDRVSyHd1VdcqTnkYog9kvjbF7xqOyYgdVNcb-kxkzQxClp6IrdnoU9nBD-Nm_fDg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2IjHg7AyNG-wNqRJoKVJAD_9eWQOaMYAlZ0wX7MCoidVDTxyRrKEndQKj2vYb96nNT9TpwuLDmvtG3comAUgan4lSloMp43bShZh5ovKgY3FfPAHyk-WICm1PZF_Cx9iWwBcYu-g=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02DeU53TL7B8vtEiSoVH-XPQYJoPa4KNkCN8tbmUAFXnduqZueB3EZODIEldA3sptB4bOL2O53nJUsIe-C-ca56dDat28gqA8VEdYe03izb5p4_WEXhkgXTzQnWKn7BUNKDcs4og=w1095-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Realización de Análisis de CU 86 Generar informe de cortes con diagrama de secuencia
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0h9csX5hiQ13hSKruhfUy69j2Fz2KIc9wAXlUcW9uYuGMsM9ftVbRZ4p5OrWv849g4z283PrKvkRgC8AZtacZD4HpKWHDLfnFm9DBxhnBRavI6QjNQGcuPT9GfZfyy4mBIjuBe=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1L5WHKA-6ubB2BxUQVA_dgnCsp_Ajls1qjM37_uBey0elHAe-vZbhPzhHYDDD7JZOkfzEaoqvkt8u17apXGJtFY5lmH5frvdHkx9VvgsYJr50w90QDzJT6Oos0QkSwOu5Bx_aAvw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3B-dyqJ9AEjOwme9RhwM0EXypYVUC5XNzrbUf42XZ9fXxLce3qRT0PV0_x9ZExQgJJIKci22r5O-O8DU0YF9wvLC_uBf8dvTEvxzirByHYFp25hX8WFGUvxD_kxHsIhfgYgZKJ_Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20xSt7KmV6od2ZmSFaWQl-wFiU7tkA7R3tUzlsEj2z_WL7tmaOXJrPiI_YR73GdeMoWFbttSuX_x_OhQqqtQvI5m3zgnkJNZPyr2gc_bDztrnHx7HqBUxDtIEdkJG_ituckdgsAg=w1280-h906-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Máquina de estado del Corte Vacuno
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JKUJL-dHfQm7vRRCfbnXCr18eBmakaqWvD15GdDhKJAulPvu7QyNvgA4lVHPISUHGYZzaMnvT2UIVeS1LiFpEdQUE59FVV6WEpXk1vGUD59eqCa6THT-wMurEJjMowUu2aic5ug=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gOt8Ot_idu-wJGZg9-AkV0CLlaGqhHY911OH-g0Xo8Ja447dRj0K9N9hB4dVDdDXGzzoEagFnsYJ6h86ouiXZAJasEQbqK3Atwb7fa2nwxUmCjeyuStteKUbu76w9fIBH4I77qw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ME9eX-fUv73djmqqntydF81GCZjol5GQLj7Rb5pBFIVlwWoy4o5QRvk6FFs02agWQmHxA5VgSJZ4TcNXhuWcsY9Olqpq6i-kRIhlsK7_WnzO4mE1ckRfm0xtuOJadmp4XNr7UVg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wNN1F0uX6CmzQ3xCKLlwAOhqyOmX2L_zTGSg2eCNG5jCqeds708ZCxjqFYDA6L6VIS8weraaG7cxOHfQ2x3W89-R3RsAWjV9ptDAGZDeWw1uL_Tbr37jDWJA_K-6NI1HXzS1_AA=w1280-h679-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Máquina de estado del Remito
Análisis de RNF y su significancia para la arquitectura
Nº Nombre del RNF
Descripción Característica ISO 25000
Impacto en la arquitectura
1 Tecnología web
El sistema debe implementarse en tecnología web
Compatibilidad Restricción técnica de implementación, que afecta a la arquitectura. Se debe utilizar un lenguaje de desarrollo web.
2 Front End Responsive
El sistema web deberá poder ser consultado por medio de tablets, computadoras y celulares, por lo tanto, las interfaces del sistema deben adaptarse a dispositivos con distintas resoluciones, es decir con distintos tamaños de pantallas.
Usabilidad o Portabilidad
Requerimiento de interfaz de usuario, se deberá desarrollar el Front-end del sistema definiendo propiedades para que los elementos se adapten a los distintos tamaños de pantalla o utilizar un framework de tecnología responsive.
3 Navegadores
El sistema debe ejecutarse en navegador Mozilla FireFox versión 49.0.2 en adelante y para Google Chrome versión 49.0.2623.112, en adelante.
Portabilidad No es significativo para la arquitectura en este caso dado que las restricciones están definidas en los RNF 1 y 2.
4 Lector Baqueano
El sistema debe comunicarse con un dispositivo lector especial denominado lector baqueano, que captura los
Compatibilidad Requerimiento de interfaz de hardware que implica desarrollar un componente de software que resuelva la comunicación con el lector y la forma
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1O4ZzwpEzpref3p1ZQZspXhkkqBZrtizHO2WpkjtPsnTJZNcgXyJvxjO8f2d_cjoeKtaow3XFzUyKjP49gtM6omWdMQFu0gHA1XWtnzAE9PMatt6WFrNUOLykJo0dGQqCUvWvG4Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pH1xdBupRdVRqa_WDUQl26PthxSf1tRJB2tDSj2nuevcKCcqoBZW8jdyskIh29oeU4oA3n-WSCodEN8ECNQ-h31Svuy0YQpg6z47f0SYji0HPG-z6h1N59Ca6ZIaZT6nsXYdjQg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Zgw_4KFJDOjOsznUcbbZiFWS15EBGEvFwzoKa_QBxz4Oonkr57QlgRp6EK3AsPMdMOBkKk9La_1S8uYVBgGXR99hXeAQBmKcQYRmyxG4lAZJup4mf6aB6JaxNyQv0ikShyLEm5A=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nº Nombre del RNF
Descripción Característica ISO 25000
Impacto en la arquitectura
datos de cada animal. El animal tiene una etiqueta de plástico adherida a su oreja izquierda, que se utiliza para agilizar el proceso de registro de entrada de los animales.
de tomar y almacenar sus datos. Para resolver dicho requerimiento es conveniente aplicar un patrón arquitectónico Broker para traducir los datos capturados por el lector baqueano en información interpretable por el lenguaje de programación seleccionado y la base de datos.
5 Seguimiento Geo-satelital de camiones
Se desea poder realizar seguimiento geo satelital de la posición de los camiones del frigorífico. El seguimiento se deberá poder visualizar desde un mapa de google maps.
Compatibilidad Requerimiento de interface de software, que afecta a la arquitectura: Se debe desarrollar una interface que resuelva la comunicación con los dispositivos GPS e interprete las coordenadas del GPS.
6 Recorridos en aplicación Mobile
El sistema debe ejecutarse en un dispositivo tipo Tablet para que cada chofer consulte los puntos de entrega del plan de entrega del recorrido.
Compatibilidad o Portabilidad
Restricción técnica de implementación, que afecta a la arquitectura: se deberá desarrollar una aplicación mobile, utilizando el lenguaje de desarrollo Android para que el chofer del camión pueda consultar los puntos de venta a los que debe realizar entregas. La aplicación deberá ser instalada en las tablets que actualmente dispone el frigorífico. Esta aplicación muestra en un mapa de Google maps los nombres y direcciones de los puntos de entrega asociados a sus coordenadas.
7
Interfaz con Google maps
Tanto el sistema web como la aplicación mobile deben establecer una interfaz con Google maps para resolver la funcionalidad de seguimiento satelital (en el caso del sistema web) y para resolver la visualización de un recorrido y sus puntos de entrega (en el caso de la aplicación mobile).
Compatibilidad Requerimiento de interfaz de software, significativo para la arquitectura. Es necesario desarrollar un componente que resuelva la comunicación con el web service que expone Google maps para posicionar coordenadas en sus mapas.
8 Seguridad en Servidores
El sistema deberá ser desplegado de manera que sea seguro y resguarde los datos de posibles usuarios malintencionados.
Seguridad Requerimiento de seguridad lógica significativo para la arquitectura, se deberá desplegar el sistema distribuyendo las capas lógicas en 4 niveles de servidores diferentes, facilitando la protección, la integridad y el acceso a los datos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ti0YNTxfsdqMq-pJaZJk4C3_zl2rVt1aMm36hAS1tN7wNIsoY1u8qucddu1FGwIXVt4PGw0tbwKNhLRnFjjfFLqk7MNK5oyDFXzivR6tuWfk2ovOvi_NA8ah2arq1Y6G56fXk=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P-PzXsFHLOfGe2vbTHJ_IVcVX5laEtkUnxN1L4h8QHQj99xW7ElxsKm17uaPNWXLTTFPF8L3dRCICkAxbmUZwibbwtIDmwNr4UOhO06N8gELg21a5y2g3u0M9sQ8wKdaPQnyxoA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22NrBXzb5Iu2CK0GxqgmVtAXs23Gday_WmRW64US-hiQsQrFCErYSOkG_2je3nsBkJ_9LW9v22Yg9y-JE-ZCmich4juS7nt_7JMnJcFnNtvtb_r74iU8Lb1flDVSiet8tyvNRzdQ=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Nº Nombre del RNF
Descripción Característica ISO 25000
Impacto en la arquitectura
9 Base de Datos
El sistema deberá utilizar una base de datos de tecnología Oracle 12c.
Compatibilidad Restricción técnica de implementación, significativo para la arquitectura, que determina una arquitectura de datos relacional, permite log de transacciones y el uso de funciones y procedimientos almacenados.
10 Seguridad de Usuarios
El sistema debe permitir la administración de usuarios y permisos vinculados a las acciones que pueden realizar los empleados del frigorífico.
Seguridad Requerimiento de seguridad lógica, significativo para la arquitectura, implica desarrollar un módulo que permita autenticar usuarios y sus permisos y controlar las sesiones, que sean únicas por usuario y su duración.
11 Notificación vía SMS o EMAIL
El sistema debe permitir enviar notificaciones a clientes vía sms o mail mediante un servidor de correo electrónico, estableciendo las comunicaciones necesarias con los controladores para enviar sms o e-mail.
Compatibilidad Requerimiento de Interfaz de Software, significativo para la arquitectura, que implica el desarrollo de interfaces mediante servicios por ejemplo, para enviar los datos a notificar vía sms o e-mail.
12 Generación de archivos pdf y Excel
Tanto los reportes como los remitos deben exportarse a PDF o Excel.
Compatibilidad Requerimiento que no afecta la arquitectura ya que se asume que el framework de programación resuelve la exportación a pdf y Excel.
13 Remito en HTML
El remito debe enviarse por email con formato HTML
Compatibilidad Requerimiento que no afecta la arquitectura ya que la generación de un html está resuelta a partir de que se trabaja con un lenguaje web, y por tratarse de un formato web estático.
14 Características de contraseña
La contraseña de cada usuario debe tener entre 8 y 16 caracteres e incluir letras y números
Seguridad No significativo para la arquitectura ya que se resuelve funcionalmente a partir de la validación de estas características.
15 Gráficos para reportes
Todos los reportes deberán visualizar en formatos de gráfico (barra, torta, dispersión, etc.).
Usabilidad Afecta la arquitectura ya que requiere definición de librerías gráficas para la generación de reportes. Nota: puede asumirse que el lenguaje lo resuelve, pero se debe tener en cuenta en la explicación de la selección de CU de la vista de la arquitectura.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ktPfnetDsEirC7ghOifmB1QhfWtcaAiHwn5diN8cXXb5sqE9VsR9QKZGkq2CcaR9ZDRLo0pWdfRow6DsFNttdSzv9Ez8dZhvNRdAnccBVgHJu_6nL1RYzERbpQrBZ6K9HSE0Uhw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nQyeashtrEP2eYKAklECN4tJFJGOSorunSzHPLquFInAZFp67Lm5R5HZGvAgGu2KEcOA_P-K7o6ulwPu9h9oCk8yMUR_ThigjlkVDhO2256AMoEJVlTRqeUiJFBwvVF60p8UhBw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xtdRB64H1HXyojRweZJQm2_koN6BEu8ZBOsIoiOX4yDLXS_VrN_DdehuInIOxw4FbtbBltC1_2devCBQBZwEPnCSNU08XaapqrjIVSCoLfyfXjIKnBz-YR-a-hwIEcnAKfS7xIw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Estilos/Patrones Arquitectónicos
Layered Aplicación: Ordenamiento del software del sistema del Frigorífico en capas independientes
Capa de Presentación Web de Frigorífico
Capa de Presentación Mobile de Recorridos del Frigorífico
Capa de Servicios del Frigorífico
Capa Lógica de Negocios de Frigorífico
Capa de Persistencia
Capa de Administración de Base de Datos del Frigorífico
Motivaciones:
- Lograr bajo acoplamiento entre los componentes de software que resuelven diferentes problemáticas (presentación, lógica de negocio, administración de datos).
- Lograr alta cohesión de los componentes que forman cada capa. - Asegurar la comunicación entre las distintas capas de forma adyacente, evitando la comunicación entre
capas que no es necesaria (por ej: capa de presentación con capa de administración de datos) - Se cuenta con una capa de presentación web para resolver el front end del sistema para gestionar pedidos
en el frigorífico y una capa de presentación mobile para resolver el front end de la aplicación Android a construir para los choferes y el seguimiento de los recorridos en los camiones.
N-Tier Aplicación: Asignar roles a los componentes en función de si serán cliente y/o servidores y su comunicación. Motivaciones:
- Separación de los distintos componentes de las capas, asignando los roles de cliente y/o servidor según corresponda, facilitando las modificaciones y extensibilidad del sistema y la organización de una arquitectura distribuida.
- Sentar las bases para la distribución en los diferentes niveles de servidores de hardware. - Establecer una única forma de acceder a los datos para asegurar la integridad y consistencia de la
información contenida.
Cliente Web (Frigorífico)
Cliente Mobile (Chofer)
Lector Baqueano
Servidor Web
Servidor de Aplicaciones del Frigorífico
Servidor de BD del Frigorífico
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vLpI1CJrVTzbbHZKn0DpSZ6y630tI76cLGlVZlZEZyoIVnGDizD6yIb2OstmOrzf0FMZCuFoK3LACZCPwOyrcFYk7XB3wZg98_OBwDv38xhvV_iHLMQTFcI0wUBZ5a7x9F79q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HDCM7qKwve6HiFUsw9d3_cCsoCtIoybBv67KGXfzxwrW1DWFu3A9emqxW_odClhoTITdIXiJyBVk1NtchBMO0Q4ufzB8TUT_j5VlEQuYtzC6OCR_EoWw-lQUBSw0SsndAifiYkQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nvNjDaa2Ebi420MNUEc7foWLoQAO-wwuA3c4ktwBjFSpNwTTSUzMmmSs3VY3NAIaBvyHNKVevwVcPS2ViDvfcCU2WOCAhuO3XntlZJZE41TB-M6dbOsEz_Yd7WnAzkwNyqMkV=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Broker Aplicación: Resolver la interpretación de los datos que se generen con el lector baqueano para que puedan ser utilizados con el lenguaje de programación web y guardados en la base de datos Oracle elegida. Motivación:
- Resolver la transformación de los datos del lector baqueano para que el subsistema de Cortes pueda interpretarlos y registrarlos
Lectura de CUIG (Software Lector
Baqueano) Broker de lecturas Subsistema de Cortes
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JUwhd_GGt7viRpgwt-r5y0X0FItsZS9MszHaSdMXEap8VPi2H57GVgwN5A8SMmVHBFnDgNDq3fF2v8GtBrOhf6wQgkkhwIAw0utjVxdWG0pDz97dk9fLqACqlqdALhLTHQETeGA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bjRKY8mfaRTECTmuIWMaUW9s6yWSaFxM5FaK5KU-riTHrKC2mnlURCf80bgMHDHpo8D6M6F3hFB5XGjrQu48rJAtDKdTRL1d067h5FVrTrixzcub5ntpaDpPiShrNRlW6F5HQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06REdqqjRsohD8XSq5hUHQKBlu6H_OPDlCe_XV_Qj-dFgb4IeQU_YUdC-HoK9L_Qwp0ipk-fcZAY_DXHrpEv4cXIqoAVGp6Kcs94QiDb5gRpbklTg8WJEFWdZEOUWaTai4tIkkfA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nWQ7s5DSjoZwFhzLnE-jPMJCIk8nb7mvcBQr8RtY03CU9dciWf6EDp-npI_0UsnNxYQu2mEg5q5jZjusjqazoD3Zdr0ztETItvnGKdYIvF8fI602Wlix3aYlcIttC_copJ3z8VQ=w1280-h1179-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista arquitectónica de la funcionalidad
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZuUcskwEDOS_U-HtyYSn9vbZeECWbXCWkdlwaaZYZwlYO0r4IGvdOh2fIjfYnnixw2uQoHRIL7EMIXz19QF6qiEdSdfthvmVPpZ8RaTmGdlfxd3B0PPMRahI937U6IJymGnQcWA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05zyREHoXa2e-tTJ8pHimE4q3h5b3E3pmLHKnXhJYAx2DQ9ixnVckdYWL6q2i-ISt3tvYD-Q8jS7oD4zQ9WKTR_oaERbOoGqRF4nYd7H45mHEW80utfqJO-eG-QhL6UB8GMHJ-=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3OQpbiXaPV-hjGTmFXEIlCr3fQHHefWIs8Q4OtRweDUchemArOvlSrq0L0MBvbnUxekqjpmY5y1xoRNOqzLilQteBD26Hu0veTl_92WH6SMZsCfoFt0nDyGgyZMdPgpmWtAq1ZXw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Justificación de los casos de uso incluidos en la vista funcional:
Casos de Uso Justificación
5. Registrar punto de entrega
6. Modificar punto de entrega
7. Consultar punto de entrega
8. Eliminar punto de entrega
Representa un ABM del módulo web para definir cómo resolver aspectos arquitectónicos tales como forma de búsqueda, inserción y actualización de datos, visualización de datos, conexión de datos.
Deben resolverse aspectos vinculados a los RNF 1 Tecnología Web, RNF 2 Front-End Responsive y RNF 9 Base de Datos.
75. Iniciar sesión Caso de uso afectado por el RNF 10 Seguridad de usuarios. Se debe resolver el problema de seguridad de la información en la sesión, y la visualización de datos en función del usuario logueado.
64.Registrar ingreso de animales Caso de uso vinculado al RNF 4 Lector Baqueano donde se debe resolver la forma de comunicación entre la aplicación y el dispositivo de lector baqueano.
38. Consultar seguimiento geo-satelital
Caso de uso vinculado a los RNF 5 Seguimiento Geo-satelital de camiones y RNF 7 Interfaz con Google maps. Se deben resolver la forma en que se establecerá la interfaz con Google maps, realizar el desarrollo del módulo que resuelva la comunicación los GPS de los camiones y tome las coordenadas para mostrarlas en el mapa de Google maps.
32. Consultar mapa de recorrido Caso de uso vinculado a los RNF 6 Recorridos en aplicación Mobile y RNF 7 Interfaz con Google maps. Se deben resolver la construcción de una aplicación Mobile para las Tablets de los choferes y resolver la forma en que dicha aplicación mobile toma los datos del sistema web referidos a los recorridos y a los puntos de entrega. También se deberá definir la forma en que se establecerá la interfaz con Google maps.
También este caso de uso se vincula con el RNF 8 Seguridad en servidores, ya que el sistema deberá estar distribuido en diferentes capas y la aplicación mobile sólo se comunicará con la capa web y está será la encargada de brindar servicio a la aplicación mobile, pidiendo servicio a la capa de lógica de negocios.
42. Generar Plan de Entrega Caso de uso que representa una transacción compleja del sistema, donde se establecen aspectos arquitectónicos vinculados a definiciones respecto a la baja de una transacción, algoritmos de programación para gestión de transacciones, log de transacciones.
Además, representa el RNF 11 Notificación vía SMS o EMAIL, ya que se envía email y sms a los clientes que estén incluidos en el plan de entrega.
85. Generar informe de efectividad
89.Generar estadísticas de pedidos
Casos de uso que representan toda la lógica de reportes y estadísticas, que implican el acceso a la base de datos, el tratamiento de muchos registros y la visualización por pantalla de todos estos datos.
61. Verificar fechas de corte vacuno Caso de uso que representa una funcionalidad que se ejecuta con el tiempo como disparador y desde el punto de vista arquitectónico es necesario definir cómo se realizará.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31DbDOIGK7l_YNi7iLWjP6Uh5h_dKY9MH9F49k-xy7UZRR3ByfFQ3kmOBotQkEmGeu5FXCc4gUajuDqTHnT-2xwEK62ewxXDRD1-Oj7Z9KcOuZTBu6X8TJuULexeF5ZDTtuj1r=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0phWjHLa6ufMMcfOBLtf-OsRAY2Eo356Q91BN28V6NSw41r5HNj-8LGJ9LLnEQOnLZeNda7Nc0rO99k85BqhSl2it9bVXZdPQLNjCdkYnznufdloud6-aiLFvwZkpjl7cDBCjM=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EVTodw2QoOXtngH9cdEDpcBHtoKOwL-osEdFxD03PZLS6HRRPSdie3pKdjsJT3Q4atMmBHmv0hD-0E1MZrHUBkKzZXsD_yTwnJA-Uk0kboYNC8NAhC4R2Bb3twwMHYYBI-oBVaA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv11wAGBOM-cUcZNdvyyvHvZbJffzPb--Ttk2qOHkYmFCNWZkC4H68dv7aemD4dnbWmT14AHDMpsrN8kHEvjIjGw-sym5quas6FIibu2A5SRuahOVuWwcNlAdlo-pOi6VOe88L3e=w1280-h967-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista arquitectónica de diseño
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3YOtSTPLr7aoOinTY0sMrYdeWGb2R-OcYl_85f50pYfZP1eM1XsLzuOgvHQKs_dDtTAAXzjz95J3QFEjGH9B-7wrxuhVCis-uvIHG9ZNd9CdLl4ZfPj9QY-Ga9GKIvCz5_Q0jIGw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2da7D_bGYofpk5uTQWEADzF4gbSoIBWg5mN77snOaF_LmOBCyshYTm8F75OjQHeyJApk-akd_BiGZobTa_fdzHoU6pGnT7eO2ca6AZaHk6peP8y43Tjo0oJnm28anzDMxhQY7Mug=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3G-sfJ_CsfP8ZFW5VEiSyYj5FyLl2Ac27KotqOWQbS4Wg4wMPWzeO7fnbR9P3QQMAnIlLHhSEmsN1Ijhnfq7LElwIDUFKROgUm1muZs1aNAly6Musi9UTGmsv3odV0ckgIe8Ol7Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KN_enhUlHJ_1lS2m9kcp50lk_Cm4JIV9IN9XNhBq7QVdAczcbMF0oSSoJ4-BMR-AC-QpysK7GE6M1MMjz4EzEHgmzdDMlCnOxYfrif10IGGR4O6Xrh2s38LzJiVqS5pEa_RSp_g=w1249-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Vista arquitectónica de despliegue
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BLe_EQ2fPI5XGsT2jOL1uLDeMqxoYrPQ-Z5HuXjnEMcvQ0eDtz5WAynL0NsQ7NiB9nvkb3fkL_iP6ae9I1679nThSLJpJP0IXM9WjKFNa531gaWNToJF4iybEYkJo2WPnuDVPfg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mHHksmjw2K9LjvCJOEtCv5TT-sLd-4DO0Zwe9KAAm9pTW6EuG6URf2zbw1_r75FfH3o1Q1X2COATLOkbOMbJjDvhmLj64Z6IqqAcWepyXZ0yMRK0bHuFQUtVRBix-0AeqHEbFPQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2r3kTLr4YP7JHOy_mLXYdb3MMxOsrqDBV5sRBdjZKhtbIgP7qjEfaoWSo7tAJF1hZ_yQmRULfyVSGD5TaaLKtVf227wh3mXXYWI07WNK69WZbJ15mTLJ0ED17Cr1Znq56_hF7ufA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1B2HQ5t8L0N9d8Xe_BXi9jphJ5bOmJiGGbmQSBoUuI-9Hi2yA_PO3vmgwbqqAWX8ufnG1LlNsrg806g0aLo1Pf7VyfAw8P9mNUg03XQcMnc6VS-1UpQKKtBTKxAYKpgiDUHBAapg=w1103-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de Diseño: Builder
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0a42Zmz7eIJNA5_3let1Dr9wqZZ1ICoGYZ7Jjg9kYZwu-Bqpb6Dk2ki0peETJQiNoIrZCB8BxVtIuzX_d2_HoTGtvNkO8kV3Tgnx2LsnDV_Z5jH8Kn3UWtLo3D8UlvNe0Jd1IVlA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bBeqTY47S3XEVPySZv_KT1yvDdugOerR_ZAlmK2VSW2kJr8eYmhKNdIoV07tvD8admb91egzPAfT0viOkJEqmlMOPVCTjdNKl-CbpEQzqVTC3h6kOeLypSajdPsSBEshjzpl2=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YXjwFsgm3NUV1rEWPN-j4m0RpB5kmwnYmtEZW-CLWtnQzEKz-2ACCUzRvyagDp6BRLTda2J_zJuCK0phE0l7DDiXEdF4BEfBXj_SWaitR10RqegYO5TjiPtT-8z_6-RbsbSnTzg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3h3dyZ2wfXCc3lBfDtcncR3gfQXJL_bDReUBrpFWNLV7z2Y3W1ZSsVhVxvJAliWjPjrDl5JxKTlfElshMnrtvqAzSL7Sm9HWO0hNeiWN7ulv-V3O6sgXHKS2VojZMwS1cbaNXI=w1280-h1240-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de Diseño Builder (Dinámica): Rediseño de la realización del CU 42 Generar plan de entrega
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tv2MNg7babx_2AthQ1weR8JQjorvaFax4k8a2Mm5xzpsI7Jg8hmN3JlJQ-bQFSCiJWGxyT_No34QbKf0DUDSc1_JADvYF7boEnjT7_LM3n1b9FxF8cB57eKFnkSCYjQyWKKAZ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LDqR9GdGQOurwyyvKq3Vb4bitmQvAtjl6FNVtDL3RJ5u8LH6Z8XpRUcKflihILBpoGky1woMaSdueC7_-H8Gd3l97BxGwIU-2oONF0Jp1gReSAGbbjRkf7N4_ZGifhkP-DhLx=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sezWzpr_jgiVm1KTMAfi8seUvujl3dXNrlndn9-tYpCu0wgJ7q7nnjUqoycThrQOA0u-e8VX0Z11U7ElRNgLHbVrjdivIG3e3d38oqv-FnK1YNic9_OFnB74W3o0A84fKv-XT_g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Explicación GestorPlanDeEntrega seleccionArchivoPDF(): a partir de la aplicación del patrón este método crea una instancia del ConstructorPlanDeEntrega según la forma seleccionada, en este escenario se crea un objeto ConstructorPlanDeEntregaPDF.
ConstructorPlanDeEntrega (clase abstracta) Se listan los métodos abstractos: construirProducto(); construirCuerpo(remitos: String[], nombreCliente: String[], ptoEntrega: String[]): void; construirEncabezado(fecha: String, datosFrigorifico: String); construirPieDePagina(nroPagina: String, firma: String); calcularNroPagina(); DirectorConstruccionPlanDeEntrega construir(): va llamando a los métodos de construcción del Constructor que corresponda de forma ordenada, según se muestra a continuación: construirProducto(); construirEncabezado(); construirCuerpo(); construirPieDePagina(); ConstructorPlanDeEntregaPDF Los métodos a ejecutarse son los siguientes:
construirProducto(): para crear el producto, en este caso un Plan de Entrega en versión PDF.
construirEncabezado(fecha: String, datosFrigorifico: String): para construir el encabezado con el
detalle de los datos solicitados en el caso de uso.
construirCuerpo(remitos: String[], nombreCliente: String[], ptoEntrega: String[]): para construir la
carta de porte con el detalle de la mercadería trasladada. Mediante un control y un loop se
controla un máximo de 20 filas.
construirPieDePagina(nroPagina:int;firma: String): construye el pie de página con datos fijos y el
número de página.
for(int i=0; i<datos[j].size()/50; i++){ nroPagina = calcularNroPagina(); setPieDePagina(textoPie; nroPagina); }
calcularNroPagina(): calcula el número de página siguiente.
PlanDeEntregaPDF Los métodos a ejecutarse son los siguientes:
new(): para crearse cuando es llamado por el método
setEncabezado(): llama a los métodos de seteo de cada dato a mostrar en el encabezado.
iniciarFila(): se coloca al inicio de cada página para agregar la primera fila de 20.
agregarFila(): setea cada nueva fila a incluir en la carta de porte llamando al método
correspondiente.
setPieDePagina(): setea el número de página y el texto del pie llamando a los métodos de seteo
correspondientes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XqyK5EGg8MCNo6v5nimxQTfXW7STD6Jtwm_AV2fmsR7ACZUuWY5b2fhaB4ETPd9RurLHO_p726n8EdfY0mha-faEpN0Zaso6JxMdNnT57rynugoNNPm7p7Yfdps8IUW29jvoG=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0knX0dIZAqRgOLNEBaES0GqPO_5LCI2zrR7z8nbTpeJNoGv0OPSn2j2lVReuFoyykFY8gk26imF8HWowCZksZjkIzi2qqgug60BmsxNW_MuNu_stKbcAH57byTfsz_vuxsTrS1ZQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jhUP-VJPiU2AieFgDkb3DVL3QZs1OnJmHHycep1ODuuibbnmEdUCIyR8pRcqZFJi1ta2trnHxxB3FdQi_UFHTaEBqj1DvtDlJ0UcOzdQpfb9fZv-XAlYXoTxf808qDhSLpp1IQQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0VcMsW-Wnbr38AO6sJNAMExiL7HUGdgwGKo2aCb7NqzXy9CHCLKziBlfOfWb45LjKCS03lfhKEH8_XYxOrKIowOyCTfO1MdITIAOJfy6Hr2jR6-YyoQXIuANNjidr7b0VqLQ3QvA=w1255-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso 42 Generar plan de entrega
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kae12-hggmaXo4nuy0bpojzYQyUAj0Urp49ujsgj6uot4t8hsNM_2NitIxYRAyR5XxyItrNEuiggoeLYafV8g7xA1tpv1kXn2hZaW7Ny3SfAqIbEbVY-hfuz4NFh62ZgSrwBp=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W9qlZ1iVlSMe3tfhMGCGXgJtPAyAGMP_xeM9VNQ2-eAasYK8bfxmn8Bv2v6G6CxLhNpgI7_Bbw-aRGUb_u8YU36AEbmzzxUkOkbjhv8jOvvEDVnijwzigrIDvvOePzP4A9VkOnQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-u-ddHXK7i30B3k_q3OGKgmc88sSyjM48nKDHCznb_47Jbg4mLA5UqbPSVdSqR200C3-09Lw8aNS4yA62SPThu_K3BZi0gm-BTEMwqh_a2GOpQprHdGHG9zjU7sGrNEONBaFBSQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YRU45RkGuW2_bZqkPLtJIhmNkeajI4uB-hkiQBRiPusqLrpYEqnvz4UjXmbxA2GhOVjRBqVnygC_ycT7BSlKQmMvpWeOFBm1IDEWADH1SuNEZF2eAZeUoE1a9e1aCXiKys2-i=w1280-h902-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso 42 Generar plan de entrega
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_N55ZuUC051GZDzEOJFeBa31wfWZk-aoEpS6MJfDni9tFH7gRzVSJrNydIs1MiAjRymaJSKha-xlEy5zN-1qPU7X5O00uG5PD2kLBBhgjJ98R4WLRhagDnUwGBje9ISVJkj_M6Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fnROSCwB06BZPoLhqo7nMM2nEq1dbDAzR20jIj7wgbaDVY9IbtGzhxs1LtkKf2osQUhxV7BX_eDZgIgMJtRobX1cqmLjF1xHAbiHNIsUPqvLCDSLunl2cUFgRL1OG7GMsS2H8=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kmAC0RHmVHyzQ5ocA84mQjF-HCNj6uI8Iu7Bj7pQIn7YSBb_BT8OAVbcQxyPAK72pSlr8W2PJK6QTdkPQXUsnjH83RtBsqRCE_R2AqCfoRHujdBOy6V09VAswhg-JPiwqugUD6g=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Explicación GestorPlanDeEntrega
notificarClientes(): Método que dispara la ejecución del patrón, primero creando las interfaces que serán
observadores, y luego llamando en un loop al método suscribir() del SujetoConcreto (el mismo
GestorPlanDeEntrega), para que uno a uno vaya suscribiendo los observadores. El loop finaliza cuando no hay
más interfaces creadas.
suscribir(): suscribe al observador enviándolo por parámetro, en este caso la InterfazSMS y la IntefazEmail.
notificar(): llama al método actualizar (enviarNotificacion() en este patrón), para cada interfaz suscripta.
ObservadoresConcretos
enviarNotificación(): Reemplaza al método actualizar() propuesto genéricamente por el patrón. Se envía la
información necesaria para generar la notificación a las interfaces. En el parámetro formaNotificacion se envía la
colección de E-mail o números de celular según sea pertinente a la interfaz, para realizar el envío de la
notificación al email o teléfono correspondiente.
enviarMjeTexto(): Se encarga de realizar el envío del sms. El código contiene un loop para enviar el mismo texto,
fecha y hora de planificación de entrega y dominio a cada uno de los teléfonos celulares recibidos por parámetro.
enviarEmail): Se encarga de realizar el envío del email. El código contiene un loop para enviar el mismo texto,
fecha y hora de planificación de entrega y dominio a cada uno de los emails recibidos por parámetro.
La aplicación del patrón es con una solución tipo Push, enviando por parámetro el identificador para establecer la
interfaz (teléfono o email), el texto del mensaje, el dominio del camión y la fecha y hora planificada de entrega.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HReCwKKzhYHjCsRA4ErE5q7aYl-Hr7_2O4cJkfcrVi0nG-IrbFm83iuSh7MMwx8TaFkIhWUfgB-7PgRo_C8fD1fC1XrfWrzLapAhqv7b3AvCpprzQ4zNkcFapgDyjFXZmPzqKKw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mXA8Dost34hgYaaaZRC_ZkxuK3gAUzkEvvvcp_CBK0xLG0X6lnbTT0eOUOwdQ-qtf-bhW4PVBgU-klyv16R6aUvrCPerH-2foc_5SaqgYK-Z9hENIvTWZ-lUxRzo2dGROjQORcg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_W9_0SEd0dexcEoRYCRdRkFsUvqoq_hiTBUnmHBoEB_oyYHyDtdNKYG8ovkfgTF2Leb-mp-O8SQwYeqrULn5DdIPU5FrauBv5VCiHnOBwdAaYuxTHjzPv1in5BUZ3yEC4d-f8Iw=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0tVc7fge3kjRsnz5m4e9wD7pbx7VSMiGMdqMg4rJPMMbEeMM_POHLXPpcF2-VNP_9Ze8Krnmn_2Qms05Q3Z8MYQh5-ZP223cVp88pOAbVTOzIrLm5084WgpRlAc0yAHnUUVX7QZA=w1280-h1128-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de diseño: State– Rediseño de la realización del caso de uso 42 Generar plan de entrega
Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EaN1U2sJgftUVZUxh9GoeAetyPPbi3u4Lwvz2RRk8WMiEiSyib9i0gGOaUOODK15fwkt8IBUsl3ofqXuoUOryu_8JnZHxpxr_50sTs_ZNXI14pVRP0aDFVMonBL7GnUBM6Te5GA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xYQLLjTFwo-88PGs2oKFCJTOryaYB0zuUtCFcUW1c_rm3a42Uu-Eb6vOzJ0DJDDpjedKiHlTSMxuQHWMxqwYjAx3Gs_YEeJyO2Of3JTTXD8S3O-h9WgF02dIt12jl5kIOqhOTiQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2x6U15yf-JSwUkgx-cgxotCsPVxt5Aezt4JkPV6KeOiN-sZb0x794DhXIEJrP4xgWpDQd1jGDLVda7mP9YYK27Y7EyLdnMpQ8wpwoIuEJZtwiGH80yOq8Xmiae8u2zJP0TBlQG0Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ImshnIMvlXzK05ddqhtmIcOQ-5pMuQPip81Mf41__QxFpDKwdbNCZEZ8NWliRJLcjz3JB3rN43rhTYvouywcaRzYBh9B2RVvwwGicO-5sRPTW2g4zHZosNvw4y41TwLTXtEtU-Q=w1280-h961-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Patrón de diseño: State– Rediseño de la realización del caso de uso 42 Generar plan de entrega
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3uEsepj3YKmLnn79v6p4StY-8tEaCPGfxkWoF5JbORam1YNOGbRP4Q-oIynpclnp6DB8CgaOQwh2lyh4ufXhJZC64lTvRMQ5JrbiyF-tejCM81FE8dYWFSfxgtMVMmr8qp0eu61w=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qp6n9o2uvz6S5qDGlcE4LWJa1CRCC7Y39cYyqpfP2rn3i-pGHnRNBYCZGMh0cst-Z-cRqksK6S2gSNnmdRe57Irm2JHrDjqoHGf7K0yoH0NBpa7-cyUYso5GyZYcNVi-RcjNk=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34gqBOryTyYKgHS2FfUzYzOH_F625-DLyE_oZZAG9kWsBcnRDPpA89qY_ULtGQP-tt0zRnEDfpoSwk29HcHy-CxYmU4dcDRwpy9sfIT0vx9RN8v4dyDWR_Qzen3N0UjOerj2GEZw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
Explicación Remito ParaEntregar(): Delega al estado en que se encuentra actualmente el remito (Pendiente) la actualización del estado de los cortes que lo componen y del remito mismo al estado ParaEntregar. setEstado(Estado): recibe un objeto ParaEntregar como parámetro y lo setea para dejar al remito en el estado correcto, luego de la creación del Plan de Entrega.
CorteVacuno enPlanDeEntrega(): Delega al estado en que se encuentran los cortes (IncluidoEnRemito) la creación del nuevo estado EnPlanDeEntrega y el seteo del mismo al objeto corteVacuno. setEstado(Estado): recibe un objeto EnPlanDeEntrega como parámetro y lo setea al atributo de su clase. Estado Pendiente (clase concreta)
Se listan los métodos concretos polimorficos:
paraEntregar (this: Remito, cv:CorteVacuno[]): se encarga de la creación del nuevo estado
ParaEntregar y de setearlo al objeto remito. Además, recibe la responsabilidad de setear en cada corte
vacuno del remito actual su nuevo estado.
crearEstado(): crea una instancia del objeto estado que será seteado al objeto según corresponda. El
tipo de retorno depende de qué estado haga uso de este método. Para este escenario se crean los
estados ParaEntregar, y EnPlanDeEntrega.
Estado IncluidoEnRemito (clase concreta)
enPlanDeEntrega(this: Corte): se encarga de la creación del nuevo estado EnPlanDeEntrega y de
setearlo al objeto corteVacuno.
Estado (clase abstracta)
enPlanDeEntrega(this: Corte) método polimórfico. No tiene comportamiento, puede lanzar una
excepción
paraEntregar() método polimórfico. No tiene comportamiento, puede lanzar una excepción
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PO0yFPLNgdE16pnpn3ART86_6w-EFKixlv3KqBXXGwTpmEolOXfZrThEQQm1jcv6OY-fwKrxGth1Cq9O2FfdvISu7wDlw4ULHfWah7eaCfrr5lIepm8CrdK_X_X-_-R8kPGUEzQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14OquLTCW7qhUOtkELXjxVilFP2Yi0ksjCGaKFNAe0bbM1W4ut5X4kzeQshhpz4pk9fhxbp7zmmA1KFDc1Q-LDCUOCSV6gCpMN8uDhkAx97Yr9mFYHpP0tq_aYiud68AqzUqeb=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2g5tWZAK-DJt4aKadihSJtmRcP0w0QXBnP4ak31LXZcPGkJzD-yndsuldOtLBrXnvrX6sdinqeAJFs_dajcKcjIDYmnsErBdA1PjQgQ41asfkCpdT1VOdE5-RORJf52MqoSR5L=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34 Autor: Giuliana Belli Página 78
Patrón de diseño: Strategy – Rediseño de la Realización del CU Generar informe de cortes con diagrama de secuencia - Estructura
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Gq2dawYjP4jARNNc5ZyaaLUvVBdy3DchSz_DCmWkekHQdNsoo2qsqLlEP3ti9gR-MlmOJkg30xw7xkErrRuruN5PiZGzTmfXyR6ICBYgTFYtwM8vTSR7q9lboMDxeoFRq0vgDlw=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vlXXUrQJ9IoxoDIGLe4wcEuK_24_2KJIv2zZSdapzB6-9sG6Eh_60tLbTUBr758HuiuZzqNEAGHqd6qtOUlVMvu1QnJwKDQ4pa73Jk_Sps5Gpoxyp9ATqDUL7ySq8I3F4dZ4=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YEdppYawVI_kGbvIwc1a0F0JkPrkXoYpYSfDQoLllI3x_ujKeviG2maHwpXCsUa9zWShRC_73-aBgvwp9guxTIo1HleUI--KUGRibvn20PIlSjBRX79yW68-caFXjQnjOxbQrmQ=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07m78d7AVjNATBwTlNjyHfVSLkcurB-7Po0avfBPXOviY47vEPcZZjGfrWJuaJLgPWpCoUKCIEZkzzmYD4uXhOQJc-cpKoXS4CpjQbJGeAmrSs2O-if4xOd8upBaLEjmqrplMnCw=w1280-h629-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34 Autor: Giuliana Belli Página 79
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hG9jungxoOBoxjBIYauZZLmhQyykAkcjAvfxWXOxsmTGqqgZYgULCRabeWtmgY2z9-CQy5ld4NKv6H65CN_DmxcMgCFnHa0EcrALEVwIfBQlGHsQKBZqoE1fHZ_-e0BKv9ROsnQ=w1187-h839-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0akFAxTqswgM6lniMp-8Rm_IXGkyj0h9at2pl_T-YcXMOVg9dourzW8GCDmMugIdv4q_irPAPK0FwuZHPsTrmR5JqiDehEYWxnoKLLtFhlNcfSveWHy7laoD8Cj9rcnvtQoFZZpg=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1a3wtsmQcXx52-lOzQqZuh1KKQZccf2ewqetQKAt9OONWzUDIHqMXEWy4HhfzUbRbcoEsp_I13Vpd4vnshloxIG4zhFhu2n3572gOQnUFA_0LlXqr1-9pQw66IApT-iebuukg-=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv04mVA9z8wzUrZyD8PlUBdL-VFmzCW9Xwrui0AV64gZdkMKBaveCe6ZEPOUkHXC8obJeeWEKUbvNcB5E-tLzXtOJWD3N_0Ifb405KMdWLelS4jFBTBVYXhP94yw8Yt5K5BjJI3d=w914-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
Dinámica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2W6cZV-C1OeDgscjh7BlEE_-Bsi6PX2tmLsOrVgRfhMS4rfnu5O-1Qs7tj2IEUmVqVc10NlvjZ9rqoYWgNV7NzccJlOc-6ISMS_G6HI7bhKvFTdj115PJm7owLdEXCEOhr9hrfWw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jaIcFdyNRFfIx6622VCif-ICOyxvwrgvQCYjjNiUFXkeVU-QjTTq9RzSBPv6w4-t62cLXYXVforP-5cZ2RRKDEF4v9R5hc1Va5-g1tqzpS7Zt3Kdvdl6LXOVU8BHYSeC71UcJZA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LjiBr-fUS55KddsNe8ZCZX0QzYUl89lNl9_9eJ3-2FDqhm4dRxt9NFvM7sgX-OlkPrJAsfalJEoZ5qaZ7INf8KtBmBH4eF2vlXcSk9OSj5x3ZdKTjf0DXhHR33ZOhC2Uq3BVKkg=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
Explicación
Al momento de la selección del método de efectividad el gestor se encargará de crear la estrategia que
corresponde “PedidosRecibidos”
Al confirmar la generación del informe el gestor delega la responsabilidad del cálculo a la estrategia.
El método polimórfico es el calcularEfectividadLocalidadCliente(fechaDesde, fechaHasta, localidad,
clientes, this), que recibe el período para filtrar los pedidos de este rango de fechas, las localidades
seleccionadas para filtrar los remitos de puntos de entrega de estas localidades, todos los clientes para
poder recorrerlos y el puntero al contexto (El gestor) para que la estrategia pueda devolverle el resultado.
Se logra cuando dispara el método del contexto denominado
mostrarEfectividadPorClienteYPorLocalidad(efectividadCliente: String[][], efectividadLocalidad: String[][]).
Dentro del mismo se realizan los mismos métodos que se hacían en el análisis y finalmente la estrategia se
encarga de realizar los cálculos de efectividad por localidad y por cliente para devolverle el resultado al
gestor que luego mostrará el reporte y continuará con la creación de los gráficos y el resto de los métodos
del análisis.
Los métodos para contar los pedidos por localidad y cliente y los métodos self de cálculo de efectividad
también son polimórficos, ya que se delegan a las estrategias concretas y requieren los mismos parámetros
para cualquiera de los métodos de cálculo.
Los métodos de contabilización cuentan los pedidos delegando a las clases de dominio de la misma manera
que lo hacían en el análisis, para contar los pedidos en función del período seleccionado (fecha del pedido),
y las localidades seleccionadas a las que corresponde el punto de entrega de cada remito asociado a un
pedido.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34i5Pv9JXFyP6COtbWJmFftP8HoDbUF4OOnjJjnjb1NyyjOrgnLC1WcR9JjAXUrMOTYsW5YvrOBcXbAtOYLTzeN30Xhfvrggko7xPtpCf_noMnst24pHa1qWUgtV493zNTwO5P=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EXj7m9HCOCGsXjwiY4QM9PWyF7CiE6t4adzISPkwvuTDvBG_eM9PpN8Op_C4Dgnd2Bvlmi3Wwub0n7YlkKzlmwuI4MMU2ZPZySfPtGv9ke7tFu97UtkcFxYQTrrrjQ7x24glByw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ivvpeu8XyUfpe7lm4esC-k79hM2EZkuiYhUXA_tzESQOYVyVPCcDptnqsTPA7MXC6gDlebtZUxHx14wZCkGXKhO80aw4VoZ4jLOSnDEbsstLftizn3Rml6zisMKkoXDF0o6hmvA=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
Tabla de contenido
Contenido Nombre del Proyecto Práctico de Aplicación: Frigorífico ............................................................................................ 1
Objetivo del Proyecto Práctico de Aplicación (PPA): .............................................................................................. 1
Objetivos de la Asignatura con respecto al PPA: .................................................................................................... 1
Contenidos de la Asignatura que se abordarán en el PPA: ..................................................................................... 1
Consigna asociada al Proyecto Práctico de Aplicación: .......................................................................................... 1
Frigorífico ................................................................................................................................................................ 3
Glosario ............................................................................................................................................................... 3
Descripción del Caso de Estudio ......................................................................................................................... 3
Solución Propuesta .................................................................................................................................................. 9
Propósito del Sistema .......................................................................................................................................... 9
Listado de Actores ............................................................................................................................................. 11
Listado de casos de uso ..................................................................................................................................... 13
Requerimientos no funcionales ............................................................................................................................ 19
Determinación de Requerimientos no funcionales significativos para la arquitectura .................................... 19
Diagrama de paquetes de casos de uso ............................................................................................................ 22
Descripción de casos de uso .............................................................................................................................. 29
Modelo de Dominio ........................................................................................................................................... 38
Requerimientos no funcionales ......................................................................................................................... 39
Modelo de Análisis ................................................................................................................................................ 40
Vista de clases de análisis para la realización del CU 17 Registrar Pedido ........................................................ 40
Realización de Análisis del CU 17 Registrar Pedido – Con diagrama de comunicación .................................... 41
Realización de Análisis del CU 17 Registrar Pedido – Con diagrama de secuencia ........................................... 42
Realización de Análisis del Caso de Uso 39 Generar Remito con Diagrama de Comunicación ......................... 44
Realización de Análisis del Caso de Uso 39 Generar Remito con Diagrama de Secuencia ............................... 45
Vista de clases de análisis para la realización del CU 42 Generar plan de entrega ........................................... 46
Realización de Análisis del 42 Generar plan de entrega – Con diagrama de comunicación ............................. 47
Realización de Análisis del 42 Generar plan de entrega – Con diagrama de secuencia .................................... 48
Vista de clases de análisis para la realización del CU 45 Registrar entrega realizada ....................................... 49
Realización de Análisis de CU 45 Registrar entrega realizada con diagrama de secuencia .............................. 50
Realización de Análisis de CU 45 Registrar entrega realizada con diagrama de comunicación ........................ 51
Vista de clases de análisis para la realización del CU 85 Generar informe de efectividad ................................ 52
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sDc1CNQpLESOVxCu_EDRQNhcgaw-w3E8p-LwA-8_QNmbRwK1lEi3cU29ddfFCCMhgc3qwSI0WABbZRa3kuFMBY_sA7Gep0HOoDv4mA_BPfnWQzx7wLHtreE6jJ-rHLsMlYwkumg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BoTrCeIQkY5zpP7BnOQOS7tEntotEptaKleYBmXDHfOx5ErX0NSXwD6L15etwk5MyG383L0QawC_oBzy1tuu58wh09TQ0kJLtB9bDvdUn3y2z_mxO3U9y2SUmDkrjJ6dJxvRdmA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wV-4_7-Nf9DA3DNzwSvnx_om6_LJukv7gZGw-fNKZZBqJyO9eu7lavchosnutcRvV7liYc6mUdgwtJf3on8Tc2GYjKLbpfHgse8K0YjjEJKD02AW41GidVISbOe-1ZJKHvxAqKg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nPetr3itAUQAa3wFAnXB7drGtkD42iYqOd5KEfoxSnFTojh6sNLMIBZRZGqObB4RdKfeOEXaLot3iSwydwCF_0JCWsupI27dEVHMfF21gvaVUqLSWtF-PmA2V0cc6fuOwG6cxTQ=w1068-h1280-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3eMvPaFwPoLZyBuD9jlCdc7ImJO_9Yt2JmL94xBGeUkfULmAOoiOwT8cg1zZr0S1_N9Un9C5P6Nv7EqihNo9-T_LQAbf8ZY9xDcT-KkmEdEFEFE5a9vJidw_GGlOclWH3bBJcxAg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P_V82i2uHiD1FpZr9ZZ8g302tPELp0hWE7OtX6L9dSu0t392gXNo4jnd_DPHEcl41Rpn21YK_mGQeJqFdOVeo62Z7G6MCJCyUKzFAI2M3gRuMibH4Mgu5HpcA_fpICvpelcs_XA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27IeveJo15PIz5fnhFutvwE0bVtTxNAWn_ZHxY7uQMiIUmJKiJsCnAFSjK23ssn5D_92yhW9wUyAhcQuxQaNzz4D9dZxgiQgxBkJ9LV23cr0pxumopcDsZdhlUVEWiQ-bHiJ9anw=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
........................................................................................................................................................................... 52
Realización de Análisis de CU 85 Generar informe de efectividad con diagrama de secuencia ....................... 53
Realización de Análisis de CU 86 Generar informe de cortes con diagrama de secuencia ............................... 55
Máquina de estado del Corte Vacuno ............................................................................................................... 56
Máquina de estado del Remito ......................................................................................................................... 57
Análisis de RNF y su significancia para la arquitectura ......................................................................................... 57
Estilos/Patrones Arquitectónicos ...................................................................................................................... 60
Vista arquitectónica de la funcionalidad ........................................................................................................... 62
Vista arquitectónica de diseño ......................................................................................................................... 64
Vista arquitectónica de despliegue .................................................................................................................. 65
Patrón de Diseño: Builder .................................................................................................................................. 66
Patrón de Diseño Builder (Dinámica): Rediseño de la realización del CU 42 Generar plan de entrega ............ 67
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso 42 Generar plan de entrega .......... 69
Patrón de Diseño: Observer – Rediseño de la realización del caso de uso 42 Generar plan de entrega .......... 70
Patrón de diseño: State– Rediseño de la realización del caso de uso 42 Generar plan de entrega ................. 72
Patrón de diseño: State– Rediseño de la realización del caso de uso 42 Generar plan de entrega ................. 73
Patrón de diseño: Strategy – Rediseño de la Realización del CU Generar informe de cortes con diagrama de secuencia - Estructura ....................................................................................................................................... 78
Tabla de contenido .................................................................................................................................................... 81
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QNQ94gr7FQ3tSfg2VGKSZAvE2YUwcNkNWawcG7jHQeDXTvOMmNKSoM01Ct_WHY5f1LP2vZCPnbAt4sWCnGP59Yx8iLn6k4ePVah6Jmxxl6TSOt2gtjtbfUJcGl3pTiEzkkTFqxA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qsvVWsdrrWS0CesN4voHOLwXh9zZibPddy-cIWMkE2VVNNSU7JwKfgHDo9Ww8XXeV64POkaq6dV7qlSMsuqDUhtFkz998lh4h1MqvlVVp_pg77ph7Q3CISTf7Oeo4DnRSYPHA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KjCev7KungKrYTMrwHuGzXlnVQoIG7IXGJUnwzCKmnMaW-fdJ6iCEYvCCKC4d8tzg2sAehVclPmSN-EQvzVq7el_Ly2QL0RQ2rifbiZLAJOOe0J2prBGiZGwaUZ2sN18eqMll6Q=w188-h235-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Frigorífico
PPA_Frigorífico.docx – V 1.34
Historia de Cambios
Nro. Versión
Fecha Descripción Autor
Versión inicial recuperatorios y luego PPAI y exámenes finales
Giuliana Belli
Candelaria Fey
1.0 06/03/2020 Compaginación y armado de PPA Giuliana Belli
1.1 16/03/2020 Agregado de realizaciones con diagrama de secuencia, corrección de consignas.
Judith Meles
1.2 02/04/2020 Se agrega la regla de negocio 26 Judith Meles
1.28 06/08/2023 Se agrega capa de persistencia en el Layered Judith Meles
1.29 12/09/2023 Se corrige la vista arquitectónica de la funcionalidad y consistencias de nombres en la vista de diseño
Judith Meles
1.30 13/03/2023 Se reorganiza el PPA y se arregla la consigna Judith Meles
1.31 23/04/2024 Se corrige la realización de casos de uso del caso de uso 39 Generar Remito
Maru Sánchez
Vale Abdala
Judith Meles
1.32 28/06/2024 Se agregan los actores secundarios al caso de uso 42. Generar Plan de Entrega y se agregan escenarios
alternativos para generación de SMS y Emails, para que quede consistente con lo que modela la arquitectura.
Se corrigen nombres en componentes e interfaces de la vista arquitectónica de diseño.
Se agregan interfaces requeridas con los servidores de SMS y Correo.
Judith Meles
1.33 30/09/2024 Se corrige la aplicación del patrón Strategy para la Realización de CU 85 Generar Informe de Efectividad. Se agregan parámetros al método polimórfico: el array de
clientes y el puntero al gestor. Se quita el retorno.
María Sánchez
Valeria Abdala
1.34 24/03/2026 Se actualizan las RCU de análisis con la notación de creación de objetos de fabricación pura según UML 2.0.
Se pegan los modelos que se veían mal
Judith Meles
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mge3jBT1Ii8YTqQqCuOOw77mFGki6byeCNO2SRXcKtw62XZs_cn3Z6Jh6juDuMWGxc5EJAktE_o8NShWiP-yikr1pRe3_Afvg-Dx1IHmhlwadCwF967L4tHnwP43meFWysAtzGA=w839-h1187-v0?authuser=0)
