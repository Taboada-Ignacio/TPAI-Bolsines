# 2026 - Guia de Ejercicios para Mod Requerimientos CS.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Esta fuente consiste en una 
guía de trabajos prácticos
 académica de la Universidad Tecnológica Nacional (FRC) diseñada para enseñar el 
modelado de requerimientos
 en la carrera de Ingeniería en Sistemas de Información. El documento estructura el aprendizaje a través de 
casos de estudio del mundo real
, tales como un video club, una editorial y una secretaría de turismo, obligando al estudiante a transformar narrativas de negocio en especificaciones técnicas. Los alumnos deben cumplir con consignas precisas que incluyen la creación de 
diagramas de casos de uso
, modelos de dominio mediante 
diagramas de clases
 y el diseño de 
prototipos de interfaz de usuario
. El objetivo final es que los futuros ingenieros logren definir con exactitud la 
esencia funcional
 y las reglas de negocio de un sistema de información antes de su construcción técnica.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2w1mHcX2W4FhUtHFabDHy884HOzjkXSyWkWJveZQNaEWAezDup17eBpkYs8b00Qu-Nq-LyB-TtN2nlVgK9itc6RNbsUmJYJPPLbCcenjquKl9TybkoBd4eXRbroa7S5QBJwmqQZw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0G16x-6D35t99ofgomSflFbPAPP93sBfher_FJMHpdl_Y8b5lvbLd_jQPYwAIwjRCeV23XQdZyZJJX9Q6j7bI0mZqVQ_nQZ2oXKyxg9jLfOzx1AoFPeJ-VtCF2T86wHhIlOycaNQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 1

## Guía de ejercicios prácticos:


## “Modelado de requerimientos”

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3wC3aO0_6029TpNEiCWV1ata8tKZEFZmOjH_LfHCkKN-LYOreiEEZVAyv3cHzjJhZD6Dh9gsS4u_ThFgbPd6sjBgnADFHqxbOEk0AQWeMScP0myWRYOf-o-4BY4h3fvknFMBXCpQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tDMo0Cy3O90K4KzAPlmOlSoObl39yU4WAGnLc2OlY35TIA3rHu5ktg-aEcSLI6lKDqL87gh6Wlt-5rYwhzsTHPRDiIVRv28r8JA9DwkqXy0IDlfd0ZoSXWbH72H55B7ArNAJPUA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 2
Índice Objetivos Generales ............................................................................................................................................................... 4
Consignas ................................................................................................................................................................................ 4
Caso de Estudio N°1: Video Club ............................................................................................................................................ 5
Caso de Estudio N°2: Secretaría de Turismo de la Nación .................................................................................................... 6
Caso de Estudio N°3: Editorial ................................................................................................................................................ 7
Caso de Estudio N° 4: Torneo de Municipalidad ................................................................................................................... 9
Caso de Estudio N° 5: Control de Acceso a Country ............................................................................................................ 10
Soluciones Propuestas: ......................................................................................................................................................... 11
Solución propuesta: Video Club ........................................................................................................................................... 12
Definición del Sistema ....................................................................................................................................................... 12
Diagrama de CU- Vista esencial ........................................................................................................................................ 13
Descripción de Casos de Uso (trazo fino, medio y grueso) ............................................................................................ 14
Construcción de prototipos de interfaz de usuario ....................................................................................................... 20
Diagrama de clases ............................................................................................................. ¡Error! Marcador no definido.
Patrones Coad ...................................................................................................................................................................22
Solución Propuesta: Secretaría de turismo ........................................................................................................................ 23
Definición del Sistema ...................................................................................................................................................... 23
Diagrama de Casos de Uso esenciales ............................................................................................................................ 24
Descripción de Casos de Uso (trazo fino, medio y grueso) ........................................................................................... 25
Construcción de prototipo de interfaz de usuario ......................................................................................................... 30
Diagrama de Clases ............................................................................................................ ¡Error! Marcador no definido.
Patrones Coad .................................................................................................................................................................. 32
Solución Propuesta: Editorial .............................................................................................................................................. 33
Definición del Sistema ...................................................................................................................................................... 33
Diagrama de Casos de Uso esenciales ............................................................................................................................ 35
Descripción de Casos de Uso (trazo fino, medio y grueso) ........................................................................................... 36
Construcción de un prototipo de interfaz de usuario .................................................................................................... 40
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0o7sreMZtTJ5YNi9LlOEyPhQivSdrPEwzDvd9UzQitNIRJ0WxcLPHvaoh3korypHzYAXFV_gtw9x-SAhtDArPg_jPQt6VgbQrdyRa_L-03Uev0w6CEDT1E-bISd17vY9jBVS1GnQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Ubay_4Hh4T3VXL_C5Z4_VMVlgmgbu861MPbim6xFbEPoZyOPnoxRCwBhM6c1Z7qq-FOvkWCrdPbMLYoBGWkE2sGU9DxGnbryy7QeTal2tLFQ5YMk3kL2HsLXkih6Xaaxq0LNOTg=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 3
6. Diagrama de clases ....................................................................................................................................................... 41
Patrones Coad .................................................................................................................................................................. 42
Solución Propuesta: Torneo de Municipalidad ................................................................................................................... 43
Definición del Sistema ...................................................................................................................................................... 43
Diagrama de casos de uso esenciales ............................................................................................................................. 44
Descripción de Casos de Uso (trazo fino, medio y grueso) ........................................................................................... 45
Construcción de prototipo de interfaz de usuario ......................................................................................................... 49
Diagrama de clases ............................................................................................................. ¡Error! Marcador no definido.
Patrones Coad ................................................................................................................................................................... 51
Solución Propuesta: Control de Acceso a countries .......................................................................................................... 52
Definición del Sistema ...................................................................................................................................................... 52
Diagrama de casos de uso esenciales ............................................................................................................................. 53
Descripción de Casos de Uso (trazo fino, medio y grueso) ........................................................................................... 54
Construcción de prototipo de interfaz de usuario ......................................................................................................... 57
Diagrama de clases ............................................................................................................. ¡Error! Marcador no definido.
Patrones Coad .................................................................................................................................................................. 60
Historial de Cambios ............................................................................................................................................................. 61
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UMaqwwY7VCLinRfi7cNnGFyxnDHNwtAxwHxfLXOolvPKTg-_N0VGSHjPMGqVbK-SNG1aBsCaKSfAKkn3Sy8U_1Ea9POIvTxgdQFiFrVlk_eP2q9Wi6GPnuEeCsXEY5veHhtXSsA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3xw_p8VNQJoECRcFjuv-F4UabVlgB1ROd9apq8OWcljlu1t-mWuNAsX7GBecACUOVAiZsrP6_BNX4nmHRLTJLOI0s58Sdt5Lc-f_smtvLqhZ0s0PQh2W1IiwunbNtkQX7jG0br=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 4
Objetivos Generales Los ejercicios incluidos en la presente guía tienen por propósito:
un Modelo de Dominio, utilizando como herramienta el diagrama de clases.
modelado de casos de uso.
Consignas En cada uno de los casos de estudio que se plantean el alumno deberá:
1. Analizar la situación planteada y definir el sistema de información asociado en términos de objetivos, alcances
y reglas de negocio más relevantes.
2. Construir el Diagrama de Casos de Uso, vista esencial.
3. Describir un caso de uso a trazo fino, uno a trazo medio y uno a trazo grueso.
4. Construir prototipos de interfaz de usuario.
5. Construir el modelo de dominio, utilizando un diagrama de clases; identificando atributos, responsabilidades
y relaciones, indicando navegabilidad y multiplicidad.
6. Especificar los patrones Coad, utilizados para construir los modelos de dominio.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iCp-K3dSzE17Nq4igiMUbq9Zd0OO95lOE0Jy9MbDyxBxJl8-0iL9UqN_K5ytQ33wrMt47fvoP78bMrL-mGZVaLjEgf25-6QxOKsFpECoLSv4cn8fvCateG4Rn_OJ_GUaJgT1Myg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QSUH0ff4sCw2-BdCav2fK1ripuPTk0IegBlGxeP48Q7ciITRp4sI0zcXuzhFn1oglNCQvJCMJnczMwHXIv58CDqEt7oV2g9qScuK6rFOJ5vohMJxHaQAYPGmr_AZQbMFzdwWU9Q=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 5
Caso de Estudio N°1: Video Club Este video club se dedica al alquiler de películas y trabaja con un sistema de abonos. Existen dos tipos de
abonos: especiales (habilitan al socio a retirar cualquier tipo de películas incluido estrenos) y comunes (habilitan al socio
a retirar todas las películas excepto estrenos). Cada abono tiene como consecuencia un precio diferente. Todos los
abonos son por 25 películas que pueden alquilarse en el plazo máximo de un mes y medio.
Las películas pueden pagarse al momento de alquilarlas o al devolverlas, y dicho pago puede ser de contado o
de lo contrario, con abono (para los socios que lo posean). Se le entrega un ticket al socio en el momento del pago. En
el caso del abono, el socio se lleva el ticket en el momento de la compra de la chequera con los abonos, entregando
un abono por cada película que retira.
Es política del video que las personas deban registrarse como socios antes de alquilar la primera película.
Solamente se les requiere la presentación de una constancia de domicilio y una copia del documento de identidad.
Cuando se alquilan las películas, las mismas son registradas determinándose: fecha de alquiler, fecha en la que
las mismas deben estar devueltas. Los socios que tengan en su poder películas cuya fecha de devolución esté vencida
se encuentran inhabilitados para retirar nuevas, hasta tanto cumplimente la devolución de la película.
En el momento en que el Socio devuelve la película se controla si el alquiler ya está pagado, de lo contrario se
le cobra y se registra la devolución. En caso de demora en la devolución se le debe cobrar el recargo correspondiente.
Las películas están categorizadas de acuerdo a si son estrenos, clásicos, etc.; y su categoría determina el precio
del alquiler, la cantidad de días del préstamo y el precio de recargo por devolución fuera de término.
Las películas se clasifican por género. Los datos que se necesitan de las películas son: nombre, protagonista/s,
director, categoría, ubicación (lo cual permite localizarlas en las estanterías).
Pueden existir varios ejemplares por película, que se compran al mismo momento o no, es decir, si una película
es muy demandada puede que se pide una compra adicional posteriormente. El responsable del Video es el encargado
de realizar la administración periódica de las películas, que consiste entre otras cosas, en dar de baja películas rotas o
en mal estado y en re-categorizar las películas que dejan de ser estrenos.
El responsable del Video ha solicitado se diseñe el proceso de negocio que permita la reserva de películas por
parte de los socios (por teléfono o personalmente), contemplando como servicio adicional la entrega de películas a
domicilio. Para concretar la reserva se requiere fecha de la reserva, la película y el socio que realiza la reserva.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3L7cSH2QjUS9ZvMTJ9yN87GevpGEvq00azex0wWFlmYj6e8f2Ni3TPxxM46ALA_TpcFgvUEv-l19TAtTorQjpUg0eJ-cNvVxQNy_4JaLLb4dxqL1hNRoiiGpe1hdOlWk4Czpt2hA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv310SxOgFfz0niIp4wwHFSsTleSCQR0Q0xBwWwP9T647Sly8ZqGT2jUbugYmiTTFzoR5CqKimxA6MQ3x9GdpK6IYmNuGIOIexgeDABfNW0NqpUnsCcc04ue14QOw4yX-MIj1LGk=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 6
Caso de Estudio N°2: Secretaría de Turismo de la Nación La Secretaría de Turismo de la Nación ha decidido implementar un Programa de Promoción de los lugares
turísticos de la República Argentina. El programa incluye varios medios de difusión entre los cuales se encuentra
INTERNET. El Secretario de Turismo ha determinado que independientemente del medio elegido (Internet, Oficinas
de Promoción, etc.), los interesados deberán poder acceder al menos a la siguiente información, para cada lugar
turístico:
 Ubicación (provincia, localidad, kilómetros de distancia desde el lugar seleccionado hasta capital de la
provincia)
 Tipos de alojamiento disponibles (hoteles, hospedajes, cabañas, moteles, etc.) y comodidades ofrecidas por
cada uno de los alojamientos en función del tipo, régimen alimentario (si es pensión completa, media pensión,
desayuno, todo incluido, etc.), tipos de habitaciones (doble, triple, etc.)
 Lugares de interés que se pueden visitar con sus características y precios asociados.
 Los precios pueden tener variaciones en función de la temporada.
 Excursiones: si el Lugar Turístico tiene programadas excursiones, informar duración de las mismas, lugares que
se visitan durante la excursión, precios, desde dónde se la puede tomar.
 Sitios para comer con sus características, precios demostrativos, tipo de comida y ubicación.
 Precios de cada lugar en las distintas temporadas (alta y baja) y estaciones del año en que se recomienda más
visitarla, por ejemplo: VALLE DE LA LUNA, visitarlo en otoño o invierno.
 Medios de Transporte que pueden utilizarse para llegar a cada lugar turístico y precios asociados.
 Estadísticas de lugares más visitados en cada localidad, lugar de origen de los turistas y excursiones más
demandadas. Para obtener esta información cada municipio debe comunicar a la Secretaría de Turismo al
finalizar cada temporada la información de los lugares turísticos más visitados y de las excursiones más
demandadas de cada lugar turístico. Respecto de los visitantes se requiere si son argentinos discriminar por
localidad, provincia y país; si son extranjeros discriminar sólo por país.
Además, se debe permitir a las personas interesadas realizar reservas, tanto vía Web como en las oficinas de
información turística, de hospedajes en cualquier tipo de alojamiento ubicadas en cualquier lugar turístico de los que
están registrados en el sistema. Las reservas deben ser confirmadas por cada lugar de alojamiento para hacerse
efectivas, y los turistas las podrán cancelar hasta tanto no hayan sido confirmadas.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pwDn_j7vi8d4LO6PT-tHQQKgG-QLABj_iFi_HFH3dUjdoZl1s-W075fUIiQoa2OzcTgC6eJ1R7QpSStXOdlAFA6zSUnKFWphIqw7cs3_ZmsBSgOFBwQXNyPN3jZxDw4Ld79bGAw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cP4IvrsEkoxzLv64MiP4l2xguV3HcRpI1m-gqufr02SIMxdwAyaP9n6xSZW5FTnw9i-r3kfpXMxbw2Z2xu2ResBjPwSQ3hQCCCt43AnMBc9Ti14351BUaAjTAR0ICqsMncDYmZQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 7
Caso de Estudio N°3: Editorial
Se describe el funcionamiento de una Editorial dedicada a la publicación de obras literarias de diferentes
géneros con el objetivo principal de obtener un rédito de la publicación y venta de libros, actuando como nexo entre
los autores y las imprentas.
Existen dos situaciones que dan inicio a la publicación de un libro:
1. Personas (autores) que se presentan a publicar un libro por primera vez: Se anuncian en la recepción y es la
recepcionista la que le asigna un editor en función de la disponibilidad del momento. El editor recibe al autor
y en función del tema de que se trata dará una aceptación preliminar, puesto que puede ocurrir el libro no se
encuentre dentro del ámbito de incumbencia de la Editorial.
2. Autores que ya han publicado anteriormente en la editorial: en este caso la recepcionista lo deriva
directamente con el editor asignado anteriormente. Salvo excepciones como que el editor ya no trabaje más
en la empresa o no esté disponible. Si esto ocurre, la recepcionista le asigna al autor otro editor.
En ambos casos, si el editor recibe el libro informa la fecha en la cual dará una respuesta, en caso contrario, le
devuelve el libro y el autor se retira. El editor que se queda con el libro lo lee y realiza una evaluación (positiva o
negativa) que se comunica al autor.
Si la evaluación es positiva lo cita para comenzar los trámites de contratación y el arreglo económico, que puede
ser por un porcentaje en función de las ventas o un monto fijo “tipo sueldo”. En el contrato también figura si el libro
es una novela y existe la posibilidad de continuidad en la historia (tal es el caso de las sagas como “Harry Potter”).
Cada autor tiene un contrato para cada libro, ese contrato tiene un tipo de liquidación asociada que puede ser
sueldo o comisión. Para los sueldos el contrato contiene el monto y para las comisiones el porcentaje. Las comisiones
dependen de las ventas informadas para el período a liquidar.
Si el libro decide publicarse, se asigna un revisor y un encargado de diseño gráfico. Finalizadas ambas actividades
el libro se envía a imprenta. La Editorial trabaja con varias imprentas y es el editor el encargado de la selección y luego
envío del original del libro, indicando la cantidad de copias y las características de impresión deseables. Una vez que la
imprenta finalizó el trabajo, le envía a la Editorial los libros que están listos para ser comercializados.
En forma paralela a las actividades de revisión del libro, el editor debe encargarse de registrar la propiedad
intelectual para proteger los derechos de autor y, una vez concluido este trámite el número de registro se incluye en
el material a enviar a imprenta.
La editorial realiza un seguimiento de libros que recibe y debe mantener un historial de su evolución. Además de
los estados descriptos con anterioridad vale remarcar que en los casos en que la evaluación del editor no es
satisfactoria se devuelve el libro en forma definitiva. Como resultado del proceso de revisión el libro puede estar en
condiciones y se lo envía a imprenta o necesita correcciones, para lo cual se envía el ejemplar al autor. El autor corrige
el libro que debe ser revisado nuevamente, con lo cual vuelve a estar pendiente de revisión. Al recibir las copias del
libro de la imprenta, el libro queda listo para distribución y así finaliza su ciclo de seguimiento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ATrfHvq1KQibS97LED9BlMls4oPMMe_eJ9ZL8WSdas2ndTyuqUAz-WdEO-vPjdqwt4S-LzKNfFAYchZT8ia-4s9JwFH64PiAOoNXVjPSr_TKtOQFQKQ5GIGRunXRkc1dFtDzF=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h8k0EmqMrQD3AxM4LAph9-HA4cX1WPBTNK-KSuKvzqUXC5c1uRDCRhsRmQHrOGYTZhTQWxCJ_TxKcZQEstvZ79dAXREjP4aSga853IZkLvIKuFVxX0Fk08welNpf-3OaOEePfVA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 8
Mensualmente, el Responsable de Liquidaciones debe liquidar las comisiones o sueldos de los autores según
corresponda. Las comisiones se calculan en función de las ventas de libros, informadas por las librerías. Si existen
adelantos se descuentan de las liquidaciones conforme se haya pactado en el momento del otorgamiento de los
mismos.
Dado que el proceso de liquidación es complicado, primero se obtiene una pre-liquidación de control con un listado
que permite realizar correcciones, de ser necesario, y luego se obtiene la liquidación definitiva que imprime cada uno
de los comprobantes de pago para los autores. Se genera un comprobante por cada tipo de liquidación, es decir si un
autor tiene más de un libro con la editorial se liquidan por un lado todos los que cobra por sueldo y por otro todos los
que cobra por comisiones. En ambos casos, cada comprobante describe lo que se está liquidando y los conceptos de
descuentos, si correspondieran. Para cada comprobante se imprime un cheque diferente. Esto último se puede hacer
en el mismo momento de la impresión de los comprobantes o en otro momento posterior.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-c6F27c6GKcyekwFQ--k4-E4j2sl3ylFWqdTcCptfVcKZm3QuHvi_9YC9MGXPuZynax4zWPeDEgfV9ycHE9EdMOCYLJu1BD87iJPb5gqhRL_0db8bFlMhratQ0ctFO-dxVw7Ugg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1X19cBFiAyX6mAzvDvUzsvm0UvV8oNRFo_M8DEKhrDk4DTay1gejhLn2yeZoVvEhVPySF8NGyla7RjBuvxwc7synyDP37diaqCHEjI1RFKGmmtGDFrBE4GPxKum7NgKrOsG4bbSA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 9
Caso de Estudio N° 4: Torneo de Municipalidad La Secretaría de Deportes de la Municipalidad de Villa María necesita un sistema de Información para llevar a
cabo la gestión de torneos de atletismo.
Trimestralmente, se organizan torneos que abarcan diferentes disciplinas (carreras, salto en largo, jabalina,
etc.), en los que pueden participar competidores de diferente sexo y categoría (clasificación de acuerdo a la edad).
Estos torneos se organizan solamente para alumnos de las escuelas de la zona. Y los competidores necesariamente
tienen que pertenecer a una escuela, que es quien debe presentar las inscripciones.
Las escuelas que desean participar deben inscribir a sus alumnos en la Secretaría de Deportes ó a través de la
página WEB de la Municipalidad.
La Municipalidad genera inscripciones independientes para cada participante en cada una de las disciplinas que
desea competir, y el procedimiento para aceptarlas es el siguiente: en el momento que se recibe la inscripción,
personal de la Municipalidad debe validarla con la demás documentación de los participantes para corroborar que los
datos sean correctos, en especial la categoría en la que se inscribió, si esta evaluación es aprobada, la inscripción queda
pre-aprobada, desde ese momento tienen plazo hasta cinco horas antes del inicio de la competencia, para realizar el
examen médico reglamentario. Recién después de superadas ambas instancias el participante está en condiciones de
competir. La falta de cualquiera de las instancias anteriores invalida la inscripción para la competencia.
Finalizado el torneo, se registran los resultados obtenidos en cada disciplina. Es un requerimiento de la
Municipalidad conocer la cantidad de participantes inscriptos que cumplieron con todos los requisitos y cuáles no, y
luego de los que estaban en condiciones cuáles efectivamente compitieron.
La Municipalidad ha planteado la necesidad de conocer los mejores competidores en cada disciplina
discriminados por categoría y sexo, para luego convocarlos a Torneos Provinciales.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ByjnUWiGf18WJzZrJdHpuOMMKkXO6FMtInYKoBG1K64ceZsXlMWtvgo3LjIQa4M1_psj1MN4yyyaKdZONZ6nDZ4RZ0rglXgbEh_ckzsHGNqgaju5Hrwmso5gProL8-P5y9DZ7ow=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0llarzoyVlr9H36wBXsY3JrcQAD2RE6OsoiVbUfKNqt1vVqhk3dlJm3VNUmlL_w4AUOSaxVrHAxOCdr9rYwr3YE_NUTVr9sOG7MAa9uT6KsYGy00zY2XxASHaXI55-RyzRZcM3=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 10
Caso de Estudio N° 5: Control de Acceso a Country GSP es una importante consultora de software de esta ciudad, dedicada a la construcción de sistemas
enlatados orientados a satisfacer las necesidades del mercado.
En esta ocasión, su objetivo es el desarrollo de un sistema de información que satisfaga una necesidad esencial
de las empresas administradoras de countries: “el control de accesos”.
Dentro del country se encuentran lotes de cierta superficie que pueden tener propiedades edificadas, obras
en construcción o estar vacíos.
En la entrada del country se encuentra un guardia que será el encargado de registrar los accesos al country de
las diferentes personas: propietarios, familiares de los propietarios, obreros y visitantes.
En el caso de los propietarios y sus familiares, ellos poseen una tarjeta de acceso que les permite el ingreso.
Para los visitantes el guardia debe llamar por teléfono al propietario del lote donde debe entrar el visitante para que
el propietario autorice el ingreso del visitante. En este caso se deberá registrar los datos del visitante (nombre, apellido
y dni) y la fecha y hora de la autorización.
En el caso de los obreros su ingreso se controla teniendo en cuenta su período de trabajo: días de trabajo,
horario de ingreso supuesto, horario de salida supuesto, fecha de inicio y de fin de la obra donde trabajará.
Aclaraciones:
En cualquiera de los accesos al country, no se debe permitir que una persona pueda ingresar dos veces sin
haberse registrado la salida, y viceversa.
Los obreros no pueden ingresar al country en días y horarios que no hayan sido autorizados previamente por
los propietarios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ef9pa8lPchBPLS6kzhi0Ej76aZpPmlSqTBCtvlMgbVj1mYLEZbeJhTgK3nHWHCdcTZJ5tn_8OS0lxDtOZLFwxAQy6YYXCNRB9gOzmrVMPUq2M7uwPPE8_YrNP-1DtXrhKXnbfZQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JFnv51czRcFAgX-Q5oZIVfBt3qq3uE3d-ZqTt8UsWdNdUY153bOo6e5hDa4mmuBOiXqwnt8ZMMY9ou1AGnEcLkrjGb7cX0ElapvJ3zJewBLcVw8kF9KquQZRRwJNvsRO27_Uffw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 11
Soluciones Propuestas: Las soluciones se presentan a nivel de Modelo de Requerimientos, con Diagrama de Casos de Uso (únicamente
para los casos de uso esenciales), descripción de algunos casos de uso como ejemplo, los prototipos de interfaces y
los diagramas de clases. Para el caso de los diagramas de clase se modela a nivel de Clases de Dominio, es decir la
primera versión de modelo que se realiza durante el workflow de requerimientos y que luego es refinada con el resto
de las clases, métodos y atributos que se incorporan durante los workflows de análisis y diseño.
En todos los casos de estudio se presenta una solución sugerida.
Se presentan dos formas alternativas de modelar los Diagramas de Clases, cada una expresa una forma
diferente que se puede utilizar para representar los atributos que referencian objetos de otras clases:
1. Se muestran las relaciones entre clases como atributos de referencia, asignando como tipo la clase que están
relacionando.
2. Se muestran las relaciones entre clases directamente asignándolas como “rol” en la relación correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gevuexAiCMAJjaYf9KLK2TJv2p_FKP_HjEceQvLUbliN3Ju0yAYsk4eCpqK3qASnnmaLYdhQZmRW-in57rrr2PN58e823Do7w4bgBuY1lkRRSyW4WKKGhO6oVTAATNEfb_LS1Mw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yZtDg0cZa0L5DJlcGDzREnKBmZxg6ysDltDj_4NvKK1T7e7vTxI4v-RCxLZFl29FDyb8NWz-VlomvdWDkWs-0dmYEwTrXJwfkJvbDf1rzjDT7yTh-BCAkTavCP5V3QiIbd3UhUw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 12
Solución propuesta: Video Club
Definición del Sistema Objetivo:
Administrar información de películas y sus ejemplares para alquiler; el cobro por el alquiler de películas ya sea de
contado o con abonos. Brindar información resultante de la gestión.
Alcances (Requerimientos Funcionales):
o Películas más alquiladas.
o Ingresos por período de abonos, alquileres.
o Porcentaje de Reservas canceladas, anuladas y confirmadas.
Reglas de Negocio:
Nro. Nombre Descripción
1. Tipos de Abonos Existen dos tipos de abonos:
especiales (habilitan al socio a retirar cualquier tipo de películas incluido estrenos).
comunes (habilitan al socio a retirar todas las películas excepto estrenos). Cada tipo de abono tiene como consecuencia un precio diferente.
2. Vigencia de los Abonos Todos los abonos son por 25 películas que pueden alquilarse en el plazo máximo de un mes y medio.
3. Cobro del alquiler de películas
Las películas pueden pagarse al momento de alquilarlas o al devolverlas, y dicho pago puede ser de contado o de lo contrario, con abono (para los socios que lo posean).
4. Inhabilitación de socios Los socios que tengan en su poder películas cuya fecha de devolución esté vencida se encuentran inhabilitados para retirar nuevas, hasta tanto cumplimente la devolución de la película.
5. Categorización de películas Las películas están categorizadas de acuerdo a si son estrenos, clásicos, etc.; y su categoría determina el precio del alquiler, la cantidad de días del préstamo y el precio de recargo por devolución fuera de término.
6. Ejemplares de películas Pueden existir varios ejemplares por película, que se compran al mismo momento o no, es decir, si una película es muy demandada puede que se pide una compra adicional posteriormente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bxUjcTEHsWo6C-k5WVkHEkOTyAEjBUgn9xO7X8v1aZpRTvdS-0u_JVhAjysP_hnamWOxRkqKveo-LZBv6tzLMCX1k9oSNuGlF1Gx1UIlnLOv9ih5uar-ds9MJUiwgJJ-SEweA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Me9wlg11YyHc7qQkBs-_pp4aszrc-QmPWXH61BTjSwVpgNQ-VY4c5pWuMlROHCNYAdvKNs36K15DNroR21TE75tfHpsnwGIrkVW3CanWtrl1L6FJ9JxA7OMa05cKqrFXQ1maM7A=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 13
Nro. Nombre Descripción
7. Administración de Películas
Periódicamente se controla el estado de los ejemplares de las películas, para dar de baja películas rotas o en mal estado y re-categorizar las películas que dejan de ser estrenos.
8. Reservas Para registrar una reserva se requiere fecha de la reserva, la película y el socio que realiza la reserva.
9. Política de registro de socios
Es política del video que las personas deban registrarse como socios antes de alquilar la primera película. Solamente se les requiere la presentación de una constancia de domicilio y una copia del documento de identidad.
Diagrama de CU- Vista esencial
uc Use Case View
Empleado de Video
Encargado de Video
Consultor de Películas
Registrar Socio
Registrar Alquiler
Registrar Reserva
Registrar Devolución
Registrar Cobro
Consultar Películas
Registrar Película
Registrar Recategorización
de Película
Registrar Tipo de Abono
Registrar Venta de
Abono
Generar Hoja de Recorrido
Registrar entrega de Películas en
domicilio
Generar reporte de películas más
alquiladas
Generar reporte de ingresos por tipo de
ingreso
Generar reporte de reservas por
estado
«extend»
«extend»
«extend»
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Wr1OlSZzpuOYRB1egOj887sZlMbGG9qCogd-Hj-T4e5Ahwc8NPaX1GRwTtVLJMGQi9YfX7k79I6U9DPqHGSyVlJ4MngoblPi9C4OlL_KUqjqstSzSZY2j_4Hnx4lqllG_o3OgwQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g8yuTX-YkZpJR3oHunvrbhQT1BPUisRMpfDc-5yL1Yz-ZLsObkVDpnpmTvLrVnzyNi89Wtcl1amSrjCm1bmPht3puJd8CzYw-v_yAI0UAF2q1Q5egf_b77Rcpf0QgLvAaF-03Aw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 14
Descripción de Casos de Uso (trazo fino, medio y grueso) Trazo fino: Registrar Alquiler
Nombre del Caso de Uso: Registrar Alquiler ID: 1
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Empleado de Video (EV) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar el alquiler de uno o más ejemplares de películas a un socio.
Precondiciones: usuario logueado.
Post- Condiciones
Éxito 1: Alquiler sin reserva previa, registrado y cobrado.
Éxito 2: Alquiler sin reserva previa, registrado.
Éxito 3: Alquiler con reserva previa registrado y cobrado.
Éxito 4: Alquiler con reserva previa registrado.
Fracaso 1: El EV no confirma el registro del alquiler.
Fracaso 2: No existen ejemplares disponibles de la película reservada y no se desea alquilar
otra.
Fracaso 3: No existen ejemplares disponibles de la película buscada y no se desea alquilar
otra.
Fracaso 4: El socio posee películas sin devolver, con fecha de devolución vencida.
Fracaso 5. El socio no está registrado.
Fracaso 6: No se pudo efectuar el cobro y el EV decide no continuar con el registro del
alquiler.
Fracaso 7: El EV cancela la ejecución del caso de uso.
Curso Normal Alternativas
1. EV: selecciona la opción “Alquilar Película”.
2. Sistema: solicita se ingrese nro. de socio.
3. EV: ingresa nro. de socio.
4. Sistema: valida existencia del socio y estado. El
socio existe y está en condiciones de alquilar
películas. (Observación 2)
4.A. El socio no está registrado.
4.A.1. Sistema: informa la situación.
4.A.2. Cancela el caso de uso.
4.B. Socio está inhabilitado para alquilar película.
4.B.1. Sistema: informa la situación.
4.B.2. Se cancela el caso de uso.
5. EV: Para cada película que desea alquilar, informa
que no existe reserva previa.
5.A EV: informa que existe reserva previa.
5.A.1. Sistema: solicita ingresar el número de reserva.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1SLKPLBuurkYUdhih12-cLTVEtgGqArpxrqUZI5mCApvvcD7Tf4vyH6MAWXqTzEMSLfZGI3YQz1Bik0TPVZC-vv6X_txvrDr1rvHvoJd_Cd_rUoBwovkGb-a4SjbPLh6E6V-aNMw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oMq2xij5oWMqLjsSjPWThyRk4PuFtHg53gFubvKxDC6pvT6l-vvMpndQFXmU3eRdFlEu8iMiVMbDS1cUWSlWGqnZPQUTd1zdpfPfG8LCVczACY5VZmzTi4JINtZRAZG9QKUSR7Q=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 15
5.A.2. EV: ingresa el número de reserva.
5.A.3. Sistema: busca la reserva, la encuentra.
5.A.3.A: Sistema: la reserva no existe
5.A.3.A.1: Sistema: informa la situación y solicita ingresar otro
número de reserva.
5.A.3.A.2. EV: ingresa otro número de reserva.
5.A.3.A.2.A EV: No ingresa otro número de reserva.
5.A.3.A.2.A.1. Sistema: informa que se deberá registrar el
alquiler sin reserva asociada.
5.A.4. Sistema: muestra los datos de la reserva: fecha,
película y fecha de vigencia (Observación 3).
5.A.5. Sistema: para cada película reservada verifica la
disponibilidad de al menos un ejemplar; y existe al menos un
ejemplar.
5.A.5.A. No existen ejemplares disponibles de una película
reservada.
5.A.5.A.1. Sistema: muestra un mensaje informando la
situación y pregunta si se desea realizar el alquiler de otra
película.
5.A.5.A.2. EV: desea realizar el alquiler de otra película.
5.A.5.A.2.A. EV: No desea realizar el alquiler de otra película.
5.A.5.A.2.A.1. Se cancela el caso de uso.
5.A.6. Sistema: muestra el ejemplar de la película a alquilar,
categoría y calcula la fecha de devolución y el precio del
alquiler. También calcula el precio total del alquiler.
5.A.7. Sistema: permite modificar los ejemplares de películas
a alquilar.
5.A.8. EV: no desea modificar los ejemplares de las películas
a alquilar.
5.A.8.A. EV: desea modificar las películas a alquilar.
5.A.9. Sistema: solicita confirmar el registro del alquiler.
5.A.10. EV confirma el registro del alquiler.
5.A.10.A. EV: no confirma el registro del alquiler.
5.A.10.A.1. Se cancela el caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RWuylpeRS87XjP_GgO0SN6THXH8bTVPVfJrLXN65kSfq380l4NSzJP3SCyUtjWtI8pKUstXdZKl-pvhEZWGYAZLQ7aixWo6LynWiCNLMtKSi_rAZtu1iWbSLQ9kCWIrlOI4BXWQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FtdAEN1NE9y3rLriUZhGrW8JrsjjXLQ3wHgW6666QwVeRoXb8K2RBIhujkBKlzXw9_fmGs1IgtV5LXxsGBGkgRodUeF80nPyqZRe-nM47xb_4pqtXCSsEeYzR6undTtsWeRMP=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 16
5.A.11. EV: no desea registrar el cobro del alquiler.
5.A.11.A: EV desea registrar el cobro del alquiler.
5.A.11.A.1. Sistema: llama al caso de uso Registrar Cobro de
Alquiler; y éste se ejecuta con éxito.
5.A.11.A.1.A. El caso de uso no se ejecuta con éxito.
5.A.11.A.1.A.1. Sistema: muestra un mensaje informando la
situación y pregunta si desea continuar con el registro del
alquiler.
5.A.11.A.1.A.2: EV: desea continuar con el registro del alquiler.
5.A.11.A.1.A.2.A: EV decide no continuar con el registro del
alquiler.
5.A.11.A.1.A.2.A.1: Se cancela el caso de uso.
5.A.11.A.1.A.3: Sistema registra el alquiler y actualiza el estado
de la reserva a “Finalizada” y el estado del ejemplar a
“Alquilado”.
5.A.11.A.1.A.4: Fin del caso de uso.
6. Sistema: Para cada película a alquilar solicita
ingresar su código.
7. EV: ingresa el código de la película.
8. Sistema: busca la película y la encuentra, muestra
el nombre de la película y todos los ejemplares con su
disponibilidad y existe al menos un ejemplar
disponible. Solicita seleccionar un ejemplar.
8.A. Sistema: busca la película y la encuentra, muestra el
nombre de la película y todos los ejemplares con su
disponibilidad y NO hay ejemplares disponibles.
8.A.1. Sistema: informa la situación y pregunta si se desea
realizar el alquiler de otra película.
8.A.2. EV: desea registrar el alquiler de otra película.
8.A.2.A. EV no desea registrar el alquiler de otra película.
8.A.2.A.1. Se cancela el caso de uso.
9. EV: selecciona un ejemplar.
10. Sistema: calcula según la categoría de la película
la fecha de devolución y el precio del alquiler.
11. Sistema permite quitar ejemplares de película de
los seleccionados para ser alquilados.
12. EV: no desea quitar un ejemplar de película. 12.A. EV: desea quitar algún ejemplar de película, lo
selecciona para quitar.
12.A.1. Sistema: solicita confirmación para quitar el o los
ejemplares seleccionados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J9v_Y1o1Ws0agky_FvHzXjIswPhNxk_wVVVWLtXIPLm240HIOjHOUyoE_izPDQD-Z6ii6NqW03S0e_6-Aoqru7f-ua76_bRK3BwNWbj_mApNjSskkFdcn0JKnZZfptgNgh5K6yA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hd0BD8fX5iRB_ancRX3hrZbaEFjx8l58Vr6HUEeBeyOkpAArM4EBOMfT88U2Pq9sP4kno-xWPJ1_hWiFgzVzGXF9RS2Htc-4rZuXOTYxYFzXmhCwacG1IOxdyPWOTwJZ08x4A=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 17
12.A.2. EV: confirma su eliminación.
12.A.2.A. EV: no confirma su eliminación.
13. Sistema: calcula y muestra el precio total del
alquiler y solicita se confirme el registro del alquiler.
14. EV: confirma el registro del alquiler. 14.A. EV: no confirma el registro del alquiler.
14.A.1. Se cancela el caso de uso.
15. Sistema: pregunta si desea registrar el cobro del
alquiler.
16. EV: no desea registrar el cobro del alquiler. 16.A. EV: desea registrar el cobro del alquiler.
16.A.1. Sistema: llama al caso de uso Registrar Cobro de
Alquiler; y éste se ejecuta con éxito.
16.A.1.A. El caso de uso no se ejecuta con éxito.
16.A.1.A.1. Sistema: muestra un mensaje informando la
situación y pregunta si desea continuar con el registro del
alquiler.
16.A.1.A.2. EV: desea continuar con el registro del alquiler.
16.A.1.A.2.A. EV: decide no continuar con el registro del
alquiler.
16.A.1.A.2.A.1. Se cancela el caso de uso.
17. Sistema: genera y muestra el número de alquiler
el alquiler, registra la película especificando: número,
socio, fecha de alquiler, fecha de devolución prevista,
monto del alquiler y estado del cobro y cada uno de
los ejemplares de película alquilado. Actualiza el
estado de cada ejemplar a “Alquilado”.
Fin del caso de uso.
Observaciones:
1. El actor puede cancelar la ejecución del caso de uso en cualquier momento.
2. El socio para alquilar películas no puede tener alquileres vencidos pendientes de devolución.
3. En este caso de uso se muestran sólo las reservas para mostrador. No las de entrega a domicilio.
Asociaciones de Extensión: Registrar Cobro
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AXyAMWrYnyBFKof5YF43mEtz8fvOnaNUsn8QZWP175P5wdWpKMqPQhj3uuXBrVxQMz2tIgzK0M8YjINyDfBx8gbfmVeJ0TVZoefRaeMNJZiSb5CNp_O7zKCkHEU4K9ztm3yDk=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pxIsOSRC19zg4xseIv9cRnSh0crg7yl6sRe79O0VVAIZK494rc7GAwqYxJq4ioAF-JsJ0v2lcWY4imxtV51gTxBBk-TyT1oB4IFKE6wF2W_J7LjYLANfutEYnf6zX1ufsz_Lvww=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 18
Trazo medio: Registrar alquiler
Nombre del Caso de Uso: Registrar Alquiler ID: 1
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Empleado de Video (EV) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar el alquiler de uno o más ejemplares de películas a un socio.
Flujo básico
1. EV: selecciona la opción “Alquilar Película”.
2. Sistema: solicita se ingrese Nro. de socio
3. EV: ingresa nro. de socio
4. Sistema: valida existencia del socio y estado. El socio existe y está en condiciones de alquilar películas.
(Observación 2) Muestra número de socio, nombre, apellido, dirección y teléfono del socio.
5. EV: Para cada película que desea alquilar, informa que no existe reserva previa.
6. Sistema: Para cada película a alquilar solicita ingresar su código.
7. EV: ingresa el código de la película.
8. Sistema: busca la película y la encuentra, muestra el nombre de la película y todos los ejemplares con su
disponibilidad y existe al menos un ejemplar disponible. Solicita seleccionar un ejemplar.
9. EV: selecciona un ejemplar.
10. Sistema: calcula según la categoría de la película la fecha de devolución y el precio del alquiler.
11. Sistema permite quitar ejemplares de película de los seleccionados para ser alquilados.
12. EV: no desea quitar un ejemplar de película.
13. Sistema: calcula y muestra el precio total del alquiler y solicita se confirme el registro del alquiler.
14. EV: confirma el registro del alquiler.
15. Sistema: pregunta si desea registrar el cobro del alquiler.
16. EV: no desea registrar el cobro del alquiler.
17. Sistema: genera y muestra el número de alquiler el alquiler, registra la película especificando: número, socio,
fecha de alquiler, fecha de devolución prevista, monto del alquiler y estado del cobro y cada uno de los ejemplares
de película alquilado. Actualiza el estado de cada ejemplar a “Alquilado”. Fin del Caso de uso
Alternativas
A1: El socio no está registrado.
A2: Socio inhabilitado para adquirir películas.
A3: El EV informa que existe una reserva previa para la película que quiere alquilar.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3y4vKatFnmdkEULRFL7z5LSulLEGS9DGVD4Zn4R7t8ouWxnOkht59WTa7YtDpZfXxEfGygGOdT8Ok9gqR0TQ5GYUYHQpazlvdlTRPPAulJ8m2s9OVpYfH57-SObXzEOZXWpomg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3u7eaFIWTy925NlrQ1Vuk2zQ2poxIw-HLJgvSg4V0Gaeng909r1qoOvqvFHhApfvyCtAUK2nYgcq1dxhG8unUAQZyld7r7ACr0fFH2kO6fbB7Bhpbnud_NWmA8R5EfpRMUKdrRKw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 19
A4: Reserva inexistente.
A5: No existen ejemplares disponibles de la película que desea.
A6: EV desea registrar el cobro del alquiler y el caso de uso se ejecuta con éxito.
A7: El caso de uso registrar cobro de alquiler no se ejecuta con éxito.
A8: EV desea quitar algún ejemplar de película.
A9: EV cancela el Caso de uso.
Observaciones:
1. El actor puede cancelar la ejecución del caso de uso en cualquier momento.
2. El socio para alquilar películas no puede tener alquileres vencidos pendientes de devolución.
3. En este caso de uso se muestran sólo las reservas para mostrador. No las de entrega a domicilio.
Trazo grueso: Consultar películas
Nombre del Caso de Uso: Consultar Películas ID: 15
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Consultor de Películas (CC) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Mostrar información de las películas existentes en el video club.
Descripción: El caso de uso comienza cuando el CC selecciona la opción “Consultar Películas”. El sistema muestra
todas las películas disponibles organizadas por categorías y, además, visualiza el precio y los días de préstamo
según su categoría. El CC puede consultar información detallada de la película deseada; para cada una se muestra:
nombre, género, categoría, calificación, país de origen, duración, cantidad de ejemplares disponibles y el elenco.
El sistema permite aplicar filtros de búsquedas por: categoría, nombre, género, calificación y país de origen. El CC
puede aplicar uno o más filtros y el sistema muestra las películas que cumplen con ese criterio de búsqueda. Fin
del caso de uso.
Observaciones: El actor podrá cancelar la ejecución del caso de uso en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv06eB3gaQNMfr4l-8LLhVQ0uz_ytQz41JBClrVJBi3ky4BwgLbM9nI7IVFuAQ0ePwY2SSzZ7puYnqM4qgA7XpE4oLv3PM4-t-spEbz_61ndN7jetbYpUpnPHJWVXnGNScjnhabFdg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Td3LEKDLnWV1Ihxheq_uqc3KGUFYOyronMlMa9CdodFtTk1LvPpaisygcs_H0KjP_NFjZdYBfCAn0L9LjneL4vVhUC0Nksa4x0gBPJfbn_5OoC5XS6gR3oaWRVJ55o4gjf9i01A=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sAWvsMk_ICeuijsS5rSrgUEJ6pTlqSJb9WZbT3i-NWWn4g6qBd0uglA2DdpugXSuuUzwBVYs-QeTK9LEy5iHxbjnixgWtL3tFEJX4bVCp26UWeSeumk2JARo-EY8nSB_lAIvTZg=w613-h519-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 20
Construcción de prototipos de interfaz de usuario Caso de uso: Registrar Alquiler
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hrzUV11CvH_9l8QghrLj6sg9KcpaFgDjdV2OZchgRVr8jFTA8srCNJUPGi2m15p0N6wB9Ts8nmURVdwmsB9PNcD6XjkLuMNdU9BIncMwnlz0c2RAIRCXOhC9v-CxgMtWB-AUE=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gEKB3439meUhodnxSBSNy9q4NtmU0eKn63SC2zewl9wqfDGiglSyJKmRuHs-QuG3RmkFz_xJPd4OdnnNkgXghFKYj8Xp-3YYcKZj7cAkuRvn1cjuJ1JTSh1_AB87f8eI5eDzy=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

Modelo de Dominio
class Domain Model
Alquiler
fechaAlquiler fechaDevPrevista fechaDevReal precio recargo
calcularMonto() calcularRecargo() conocerEjemplar() estaDevuelto() estaDevueltoEjemplar()
Ejemplar
estado fechaAlta fechaBaja
conocerEstante()
Socio
dni domicilio estado fechaAsociacion fechaBaja fechaNacimiento numero
abonosVigentes() conocerAbono() conocerAlquiler() conocerReserva() cuantasReservasPeriodo() cuantosAlquileresPeriodo() imprimirCarnet() quePeliculasAlquilo() reservasNoConfirmadas()Pe licu la
duracion nombre tituloOriginal
conocerCalificacion() conocerCategoria() conocerEjemplar() conocerElenco() conocerPaisOrigen() hayEjemplaresDisponibles() mostrarUbicacionEjemplares()
Calif icacion
descripcion nombre
Genero
descripcion nombre
PaisDeOrigen
nombre
getNombre() setNombre()
Reserva
domicilioEntrega estado fechaPedido fechaReserva
conocerAlquiler() conocerPelicula()
Elenco
nombre personaje
conocerRol() esPersonaje()
Rol
descripcion nombe
Categoria
descripcion diasPrestamo nombre precio recargo
Estante
capacidad lugaresDisponibles numero
hayLugaresDisponibles()
Estanter ia
capacidad numero
detCapacidadDisponible() hayLugaresDisponibles()
Abono
fecha fechaVto numero precio
conocerDetalleDeAbono() conocerEmpleadoVendio() conocerTipoAbono() estaCompleto() estaVencido()
DetalleDeAbono
estado
conocerCategoria()
TipoAbono
descricpion nombre precio
conocerDetalleTipoA()
DetalleTipoAbono
cantidad
conocerCategoria()
Cobro
fechaCobro horaCobro nroTicket
calcularTotal() conocerDetalleCobro() imprimirTicket()
DetalleDeCobro
cantidad precio
calcularTotalLinea() conocerAbono() conocerAlquiler()
HojaRecorr ido
fecha numero
conocerDetalleHR() conocerRepartidor()
DetalleHojaRecorr ido
entregado
conocerReserva()
Empleado
apellido dni domicilio fechaNac nombre password
conocerCargo() validarPassword()
Cargo
descripcion nombre
getDescripcion() getNombre() setDescripcion() setNombre()
genero
1
abono
0..1
empleadoReservo
1
abono
0..*
empleadoCobro
1
empleadoAlquilo
1
pelicula
1
categoria 1
estante
1
empleadoVendio
1
reserva
0..* detalleHR
1..*
empleado 1
elenco
1..*
tipoAbono
1
rol
1..*
alquiler
0..*
cargo
1
1..*
detalleAbono
categoria
1
0..1
detalleTipoAbono 1..*
estante
1..*
paisDeOrigen
1
categoria
1
ejemplar
1
reserva
1
calificacion
1
detalleCobro
1..*
ejemplar
0..*
alquiler
0..1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2EeICR2FWJd7jVT3465ZQhY8hKGmZBe9HC2z4987TKx2vV6J83k6QympBNFz897ZzKYbrx3EcXpsayQ0JxKeK3st8Ivv8qYOTj5yp4mUga9oibwP3ChyoVEk3TZvrIY6H-T-b1=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VqqYH3gsSptBMdzpf_fIvxmAu4Ew8GNJs03Sjt0Xv3OVvQJY5ul-Qim408x9B8bUDIe6Hc3GcCLDjzKkr9IfowWIsVub41bBQkaDxLWxw_3qqg-MjP1MP1wh60cQXp1oDH1nOGQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 22
Patrones Coad
Patrones Utilizados Clases
#12 Asociación – Otra Asociación Película – Género
Película – Categoría
Película - Calificación
Elenco – Rol
# 3 Participante – Transacción Empleado - Hoja Recorrido
Socio – Alquiler
Socio – Reserva
#6 Transacción – Detalle de Transacción Hoja Recorrido – Detalle Hoja Recorrido
Abono – Detalle Abono
#11 Ítem – Ítem Específico Película – Ejemplar
Tipo Abono - Abono
# 5 Ítem Específico–Transacción Ejemplar- Alquiler
#9 Ítem -Detalle de Transacción Reserva - DetalleHojaRecorrido
Alquiler – DetalleDeCobro
Abono - DetalleDeCobro
#7 Transacción –Transacción Subsiguiente Reserva-Alquiler
#15 Contenedor – Detalle Contenedor Tipo Abono – Detalle Tipo Abono
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3z3kwspMPow23c54B3-TA9BfEanyme-C-TI4eDc4dQvmm1dnZtO8zaNUotDG9JaxDOefsF-qWFLZ0D9A_QJaMs81Tp4slWR3OOmROu16ciGL4c6P8yuEY2GD9NRLj3YIA5MN6E=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JfgbqrBbA8EWASdWFMyScRap-dYG3ltacHISZO6h37OfElAZtMGQCfnteKnASvtQXT14UwvkE0pvcCyQvrXnnGNcFWNxjI61uHaaZTn6p2OxQ3wdzcpCHrdybUNSDntBZWAYKKA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 23
Solución Propuesta: Secretaría de turismo
Definición del Sistema Objetivo del SI:
Administrar información sobre lugares turísticos y sus excursiones, alojamientos y lugares de interés, gestionando
reservas de alojamiento. Emitir informes y estadísticas relacionadas a turistas y lugares de interés turístico.
Requerimientos Funcionales
 Administrar lugares turísticos y sus lugares de interés
 Administrar excursiones para lugares turísticos
 Administrar alojamientos para lugares turísticos
 Administrar lugares de comida
 Administrar medios de transporte
 Gestionar reservas de alojamientos
 Registración de información de turistas que visitan los lugares
 Registrar información de excursiones realizadas por turistas
 Generación de informes de:
o Excursiones más requeridas.
o Cantidad de turistas que visitan cada lugar turístico.
o Comparativo de turistas por año por lugar turístico
Reglas de Negocio:
Nro. Nombre Descripción
1. Información de Visitantes Se registra de los visitantes si son argentinos, información sobre localidad y provincia de procedencia; si son extranjeros sólo se registra el país de procedencia.
2. Reserva de hospedajes Se puede registrar reservas para hospedajes en cualquier tipo de alojamiento ubicadas en cualquier lugar turístico de los que están registrados en el sistema.
3. Variación de Precios Los precios pueden tener variaciones en función de la temporada.
4. Cancelación de reservas Se puede cancelar una reserva siempre que aún no haya sido confirmada por el alojamiento.
5. Confirmación de reservas Las reservas realizadas por el sitio web deben ser confirmadas por el alojamiento correspondiente.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38M_Sgg2xwcfpojyTERXiiW8IWP88Bl7JuLfborCas8xKYDcbzlthf3yVmAWk2z6LilMXd4FZx4_HhWXdRUeqG6CavUvBRT_OmBwjSuBRUfhe3bs0YM9COcVisChwwdZ_HcvvZZQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HoyMRRmO4vFbmyTry5LMjnI6WqWw2Z_FpcRbBQfS0koMP0N6pkyWvJe6l6GGwvva5avvzA64V3Y3LzqKtDOWmz7qhqg-JXVCwekBg7fl5vsCZ-9Zf0hc4Qzc2iRCQ7VavTwDF=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 24
Diagrama de Casos de Uso esenciales
uc Use Case Model
Turista
Operador de Reserva
Responsable Atención al Turista
Encargado Secretaría Turismo
Registrar información de turistas que visitan Lugares
Turísticos
Registrar información de excursiones realizadas por
turistas
Generar Informe de excursiones más
requeridas
Generar estadísitcas de turistas que visitan cada
lugar turistico Generar comparativo de
turistas por año en lugares turísiticos
Generar comparativo de turistas entre lugares turisticos
Registrar Reserva de
Alojamiento
Consultar Lugar Turístico
Cancelar Reserva de
Alojamiento
Usuario
Registrar Excursión
Registrar Lugar Turístico
Registrar Lugares de
Interes
Registrar Empresa de Transporte
Registrar Alojamiento
Registrar Restaurante
Consultar Medio de Transporte
Consultar Excursión Consultar Lugar
de Interés
Consultar Restaurante
Consultar Alojamiento
Administrador del Sistema
Registrar Medio de Transporte
«extend»
«extend»
«extend»
«extend»
«extend»
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3166pLA92YSWfy0xrxSvkmF4tcLv6VkwOCeIIY8uBE6LcxeNsqxH56ToHbTOvVMj7ZopZ2EfOX-XbSSH1UKeRjcbPrzSBK56p9ajgJRVWvUR_DLdJRCdxnTFhq4P2_v4fAxEuCPA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09-yXX_scGFXvFlDvCZvjXwHyRcIKCqyjp_kBuKEP3E6IFtvRoFn_jnGK9t1lYVfsKXZXosLQfLG61sjn4nF7t_oAWssLm54mXhXZ1CyDA2-8O-ZAvJOo_NeNQEgvl4wCOO8AR=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 25
Descripción de Casos de Uso (trazo fino, medio y grueso) Trazo fino: Registrar reserva de alojamiento
Nombre del Caso de Uso: Registrar Reserva de Alojamiento ID: 8
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Operador de Reserva (OR) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar una reserva en un alojamiento en un determinado lugar turístico (LT).
Precondiciones: usuario logueado
Post- Condiciones
Éxito: reserva registrada.
Fracaso 1: No existen alojamientos en ese LT, para el tipo de alojamiento elegido.
Fracaso 2: El OR no confirma la reserva.
Fracaso 3: El OR cancela la ejecución del caso de uso.
Fracaso 4: El OR no ingresa los datos mínimos solicitados.
Curso Normal Alternativas
1. OR: elige la opción “Registrar Reserva de
Alojamiento”
2. Sistema: muestra los lugares turísticos y solicita se
seleccione uno.
3. OR: selecciona un lugar turístico.
4. Sistema: muestra los tipos de alojamientos
registrados para ese lugar turístico y solicita
seleccionar uno.
5. OR: selecciona un tipo de alojamiento.
6. Sistema: muestra todos los alojamientos disponibles
en el lugar turístico para el tipo de alojamiento
seleccionado.
6.A. No existen alojamientos disponibles para el tipo
de alojamiento elegido.
6.A.1. El sistema muestra un mensaje informando la
situación.
6.A.2. Se cancela el caso de uso.
7. OR: selecciona un alojamiento.
8. Sistema: muestra las comodidades ofrecidas y los
regímenes alimentarios disponibles en el alojamiento
elegido, y solicita seleccionar un régimen alimentario.
9. OR: selecciona un régimen alimentario.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36azrqh3YLOzcUF05hxnxB349ptFjcsfH3w0LUNSLfuXjG09GsvU9ujP6Vy6T9TtebVmbsWPXZbgEIWOSxguV9onbZiBB_glsC8SjWAFb7hDP3I8CVU5MuYHzVcASffoRukHDz=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3USg5uv627fsAbTnHQA_ElKJfagzswWKtNRTzHYZM0vA_z3PvojEHGgRYoFBbB69xe7E15eR25bKcgN2hyRSu7hogsCXRNz2fHjxro_tWBhyybrRRQTRw04iygrjN8EIAr3HId=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 26
10. Sistema: solicita ingresar la fecha de reserva y la
cantidad de días que se alojará el turista.
11. OR: ingresa la fecha de reserva y la cantidad de días.
12. Sistema: para cada habitación a reservar muestra
los tipos de habitaciones y solicita seleccionar uno.
13. OR: selecciona un tipo de habitación.
14. Sistema: muestra el precio de la habitación según el
régimen alimentario elegido y la temporada.
15. Sistema: solicita confirmar la habitación a reservar.
16. OR: confirma la habitación. 16.A. El OR no confirma la habitación.
16.A.1. Permite seleccionar otra habitación.
17. Sistema: agrega la habitación a la reserva
18. Sistema permite quitar una habitación de las
indicadas para incluir en la reserva.
19. OR: no desea quitar una habitación reservada. 19.A. OR: desea quitar una habitación reservada.
19.A.1. Sistema: solicita seleccionar la habitación.
19.A.2. OR: selecciona la habitación a quitar de la
reserva.
19.A.3. Sistema: solicita confirmar la eliminación de la
habitación.
19.A.4. OR: confirma la eliminación.
19.A.4.A. OR: no confirma la eliminación.
19.A.5. Sistema: quita la habitación de la reserva.
20. Sistema: calcula y muestra la fecha de retiro y el
costo total del alojamiento.
21. Sistema: solicita confirmar la reserva.
22. OR: confirma la reserva. 22.A. OR: no confirma la reserva.
22.A.1. Se cancela el caso de uso.
23. Sistema: verifica que los datos mínimos requeridos
para crear la reserva (lugar turístico, alojamiento,
régimen alimentario, fecha de reserva, cantidad de
días, al menos una habitación) y han sido ingresados; y
es así.
23.A. Falta ingresar datos requeridos.
23.A.1. Sistema: muestra un mensaje solicitando
ingresar los mismos.
23.A.2. OR: ingresa los datos solicitados.
23.A.2.A. OR: no ingresa los datos solicitados.
23.A.2.A.1. Se cancela el caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv08zGyF3EkfgTz8Juh_Wcgu_6elDrdgpljG02oB-F4RaKukCjP0aW6iZdMdEcdoUIxX5croji6HtYpPI8bXLnmAQKi5i6jLoNsWVUFdH8Vt5OJ9rfry9oEZabNbNfjcG3D7AONN=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv120nMl4LVSBJ07Av4tntau4sBnTsI5jfJRXxqS9OrB2qwzH6-lrFnZu2aoNSfEo_4ZCo14blXfKyPRv1NAtYaVY9n7mRAuoncyHNKysbBdV10y3ZbdJaXcU_KGEdM8G1G46sVD8Q=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 27
24. Sistema: registra la reserva al turista en estado “A
Confirmar”, informa que la reserva se registró con
éxito y muestra el número de la misma.
24.A. La reserva no se registró con éxito.
24.A.1. Sistema: muestra un mensaje informando la
situación.
24.A.2. Se cancela el caso de uso.
Fin del caso de uso.
Observaciones: El actor podrá cancelar la ejecución del caso de uso en cualquier momento.
Requerimientos no Funcionales Asociados: no aplica
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
Trazo medio: Registrar reserva de alojamiento
Nombre del Caso de Uso: Registrar Reserva de Alojamiento ID: 8
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Operador de Reserva (OR) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar una reserva en un alojamiento en un determinado lugar turístico (LT).
Flujo básico
1. OR: elige la opción “Registrar Reserva de Alojamiento”
2. Sistema: muestra los lugares turísticos y solicita se seleccione uno.
3. OR: selecciona un lugar turístico.
4. Sistema: muestra los tipos de alojamientos registrados para ese lugar turístico y solicita seleccionar uno.
5. OR: selecciona un tipo de alojamiento.
6. Sistema: muestra todos los alojamientos disponibles en el lugar turístico para el tipo de alojamiento
seleccionado.
7. OR: selecciona un alojamiento.
8. Sistema: muestra las comodidades ofrecidas y los regímenes alimentarios disponibles en el alojamiento
elegido, y solicita seleccionar un régimen alimentario.
9. OR: selecciona un régimen alimentario.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aZ4jKFNxieFYiYX2xyeVLpD_0P1Sw_0DChmuvK3LFDAxawt92nXjjVYvrFgKXcUMQOtKtox-mRvkCMeArzAv2RJ2HzKI-VJkoNSTjYH0xHLkUbRBhmDb0PLIER7HPiKLShzmrxw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AAvi3Px_3f3Q82BaKbkbbRhaEOQ12sr3PCQPIWB00gbXEmRj8d7rMn0_aqhM0WC4E32Mhq2_TxrIV4RHN71OOFY5dLvo6Yl2Urzq3gGkYQ1KM-k7TFgp9xLJGMWnnK7vs-3LwPQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 28
10. Sistema: solicita ingresar la fecha de reserva y la cantidad de días que se alojará el turista.
11. OR: ingresa la fecha de reserva y la cantidad de días.
12. Sistema: para cada habitación a reservar muestra los tipos de habitaciones y solicita seleccionar uno.
13. OR: selecciona un tipo de habitación.
14. Sistema: informa el precio de la habitación del alojamiento según régimen alimentario elegido y la
temporada.
15. Sistema: solicita confirmar la habitación a reservar.
16. OR: confirma la habitación.
17. Sistema: agrega la habitación a la reserva
18. Sistema permite quitar una habitación de las indicadas para incluir en la reserva.
19. OR: no desea quitar una habitación reservada.
20. Sistema: calcula y muestra la fecha de retiro y el costo total del alojamiento.
21. Sistema: solicita confirmar la reserva.
22. OR: confirma la reserva.
23. Sistema: verifica que los datos mínimos requeridos han sido ingresados: lugar turístico, alojamiento,
régimen alimentario, fecha de reserva, cantidad de días y al menos una habitación; y es así.
24. Sistema registra la reserva al turista en estado “A Confirmar”, informa que la reserva se registró con éxito
y muestra el número de la misma.
Fin del caso de uso.
Alternativas
A1: OR no confirma la habitación
A2: OR desea quitar una habitación reservada
A3: OR no confirma la reserva
A4: Falta ingresar datos requeridos
A5: La reserva no se registró éxito
Observaciones: El actor podrá cancelar la ejecución del caso de uso en cualquier momento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3faDe4B8uwYjkJnx918uoycCd_hy6c4MhTKwxcls0YIBT1cfA7smrnHIrvhuubft92-4Em5L782CXW4HdPVyWtENCfdLAPcLqV5B90cFLMHTVVX95bGa8g-Mrp2BA61Z6d2cT2jA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2H7aAHgwITTdj4MWwsZtZoia0nuN2rZ6Q4sIzb4H9WftgufJM71DQStq6BIBYziFE6afwt8kXzNgy-Zm9OyFnBIQLAR5GgaiYNDWQdDqSIHACEWlm7wGz8E77tFN4ObSm7vn9U=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 29
Trazo grueso: Cancelar reserva de alojamiento
Nombre del Caso de Uso: Cancelar Reserva de Alojamiento ID: 10
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente
Complejo
Actor Principal: Turista (TUR) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar la cancelación de una reserva a confirmar de un cliente.
Descripción: El caso de uso comienza cuando el TUR selecciona la opción “Cancelar Reserva”. El sistema
muestra todas las reservas en estado “A Confirmar” y solicita seleccionar la que será cancelada. El TUR
selecciona la reserva e ingresa un motivo y, al confirmar la cancelación, el sistema la registra, actualizando
su estado. Fin del caso de uso.
Observaciones: El actor podrá cancelar la ejecución del caso de uso en cualquier momento mediante la
opción “Cancelar”.
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DL1otTUQ1V03yTYKQQ1bczXrNg3RkuRpD6Ug5baYKCdJE3er53zDhcwL1Kk-O4FebqAAfcvPtSJjrdLyviYwt39qIp5tn96wgPh55GLyGug2qIHNITys3ahXwh_jdj3MAz09uXQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17FqJ4gW4gLhPeo3L8lob7_lKVN9qnIs3WZBK9qeUu6iJ5yKn8aP35teXyuUh8HwqFjcAupnKAudGUzMSFyE3JlZlvb_oVm8gvxu3LOuWKno9YlBsjtMHeYOlHwJZ2QI4ZpHu1=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1O3Sjl4e4r-DnTS-vinBpnXaMpETZYLw2_3IP6uZQVVSHZmVQW5grPHYblo9n702BGvLd01Ma1tmnHrn2jOkkxSAelQIhGFxE5MTTMQ1eisVCzEDKhedXSJbOAaehTtfEibgNZ6g=w1104-h1054-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 30
Construcción de prototipo de interfaz de usuario Caso de uso: Registrar reserva de alojamiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EanSgb2wk9mG0QT79UHMCt2E8o-e_I2nCGl__t--WuwM6tbJUUDaSxmLrKlzye-XVxN7di-ybEwl7sFnANADOiDPFMuVImZW0t9sdPaCo_QD9XEveGkJtB2Pzm2J4J4ww9f2zHw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gO7SVhvCY5T-Qnp9BlFzW2fvQ9SV0nv-S_PhT-O-HxivcnBTRYYXHTeb0cQntwiBa0OCbmkXLexSUTppNXF0lKV70wJkSEHnJn5Wo4dasSVg2Cvm38fJFFMU1rwGNZmoUoUQF=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 31
Modelo de Dominio class Domain Model
Pais
nombre
conocerProvincia()
Provincia
esCapitalPais nombre
conocerLocalidad() esCapital()
Localidad
esCapital nombre
conocerLugarTuristico() esCapital()
LugarTuristico
descripcion kmDistanciaDesdeCapital nombre
conocerAlojamiento() conocerEpocaDeVisita() conocerExcursion() conocerLugarDeInteres() conocerMedioTransporte() conocerVisitante() excursionMasDemandada()
MedioTransporte
precio
conocerEmpresaTransporte()
EmpresaTransporte
mailContacto razonSocial telContacto webInstitucional
EpocaVisita
mesFin mesInicio nombre
Visitante
año cantidad finPeriodo inicioPeriodo
conocerLocalidad() conocerPais()
{mutuamente
excluyentes}
Excursion
dondeParte nombre
calcularDuracionEstimada() conocerDemandaExcursion() conocerDetalleExcursion() conocerPrecio()
LugarInteres
caracteristicas nombre precio
conocerLocalidad()
DetalleExcursion
orden tiempoEstimadoPermanencia
conocerLugarInteres()
DemandaExcursion
año cantidadVisitantes finPeriodo inicioPeriodo
SitioParaComer
domicilio nombre
conocerCategoriaRestaurante() conocerPrecio() conocerTipoComida()
Categor iaRestaurante
cantTenedores nombre
TipoComida
descrpcion nombre
Precio
montoReferencia
conocerRegimenAlimentario() conocerTemporada()
Temporada
descricpion nombre
Alojamiento
domicilio nombre
TipoAlojamiento
cantidadEstrellas caracteristicas nombre
RegimenAlimentar io
descripcion nombre
Estre lla
cantidadEstrellas descripcion
Habitacion
numero
conocerPrecio() conocerTipoHabitacion()
TipoHabitacion
caracteristicas nombre
Reserva
fechaReserva fechaVto numero
conocerDetalleReserva() conocerEstado() conocerTurista() estaCancelada() estaVigente()
Tur ista
apellido celular mail nombre telefono
conocerLocalidad() conocerPais()
DetalleReserva
estado precioHabitacion
conocerHabitacion() estaCancelada()
regimenAlimentario
0..1
reserva
1
detalleExcursion
1..*
medioTransporte
0..*
habitacion 1..*
localidad
1
demanda
0..*
precio
1..*
lugarInteres
0..*
tipoComida
1..*
regimenAlimentario 1..*
empresaTransporte
1..*
estrellas
1
precio
1..*
pais
0..1
localidad
0..1
temporada
1
lugarInteres1
categoriaRestaurante
1
provincia
1..*
epocaVisita
0..*
tipoHabitacion
1
precio
1..*
excursion
0..* demanda
0..*
detalleReserva 1..*
pais
0..1
visitante
0..*
regimenAlimentario
1..*
tipoAlojamiento 1
localidad
0..1
localidad 1..*
habitacion
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0p3txduVmop1vxso-sWk18XthF2cc9fq5oTK4ycwr133xxWHw1FK8FCPRMWthlKGvKGxeHh1_FUvM3TwnB5ecOxAcmNsJaJDF6mnrCN9G-GTYNi-r_ch8WK6EHkwOL69PYpG7pVA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HFjfZr4nHUS9t_mdmXKCAo5i44BpmgzmHqdxSdFzOF5AEWF6U1p7EFB_rLlVzOCx8mQqgRtJtzKFDutbgnZmoXlTcCQAfRZa-xhwNqPZ3zv3uv6NTfOn-yi4VpDSOZ1ynBa-Z0w=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 32
Patrones Coad Patrones Utilizados Clases
#12 Asociación – Otra Asociación Habitacion – TipoHabitación
SitioParaComer – TipoComida
SitioParaComer – CategoriaRestaurante
Alojamiento – Estrella
Alojamiento – TipoAlojamiento
#3 Participante – Transacción Turista - Reserva
#6 Transacción – Detalle de Transacción Excursión – DetalleExcursión
Reserva – DetalleReserva
#9 Ítem -Detalle de Transacción DetalleExcursion – LugarInteres
DetalleReserva - Habitacion
#4 Lugar – Transacción LugarTuristico – Excursión
#17 Todo-Parte Pais – Provincia
Provincia – Localidad
Alojamiento - Habitación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3otRqf0WaXxhe-5RchSfYqzPUddc5_wd7EqCa1EnYVe-hRdhuYheuu6fH1qBUsVqWwj6D2vTuSsbhZVHoCadeqIKVF4vw8OKvXloaGPR2f7sAZm8R1R0dQ1qKnxUJODZDd7hpyPg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32lhx2rSYr5mONFzqDcikVuJnUFZONObJX4Be7tswylJgmcySkisNCkvpP-x-NPL5Bd_ddvzLZDyDwoREmP5aCKJqtPrDgnUvMzn-Y1m8EJqPTVBYfju4l119juA4Z01niuTvOow=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 33
Solución Propuesta: Editorial
Definición del Sistema Objetivo del SI:
Administrar la publicación de obras de diferentes géneros y gestionar el vínculo contractual con los actores, incluyendo
los pagos correspondientes, brindando información resultante de la gestión.
Requerimientos Funcionales
 Administración de autores
 Administración de editores
 Administración de los trámites de contratación
 Gestión de la información sobre imprentas
 Registración y seguimiento del estado y evolución de los libros
 Gestión de la liquidación de sueldos
 Gestión de la liquidación de comisiones
 Generación de informes de:
o Diez autores más populares
o Libros aceptados vs rechazados
o Libros más vendidos y libros menos vendidos
Reglas de Negocio:
Nro. Nombre Descripción
1. Asignación de Editores Si el autor no tiene editor asignado, o el que tiene asignado no está disponible, se le asigna un editor en función de la disponibilidad del momento.
2. Forma de contratación de autores
Se puede contratar a los autores por un porcentaje en función de las ventas o un monto fijo “tipo sueldo”.
3. Contratos Cada autor tiene un contrato para cada libro, ese contrato tiene un tipo de liquidación asociada que puede ser sueldo o comisión. Al renovarse un contrato asociado a un libro, se pueden cambiar las condiciones de contratación, por ejemplo, el monto o el porcentaje de comisión según corresponda.
4. Criterios para liquidaciones Al liquidar se consideran los siguientes criterios: para los sueldos el contrato contiene el monto, y para las comisiones el porcentaje. Las comisiones dependen de las ventas informadas para el período a liquidar.
5. Adelantos para autores Si existen adelantos se descuentan los montos prestados de las liquidaciones conforme se haya pactado en el momento del otorgamiento de los mismos.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gPLFhkq0CB3mmn6r0q6NMPLGGwrlDXq03vBnyewyCvHiHmJpXRjSoZkSEbXbbPujh1nZaahWcK7Bvj6KsjjKfXla1YLYZOxFrGDfEIPY0sAEzmsHo6fyoY33iczOeGSMVNnWT=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NThJsqMP1IDCvv9J0n2syChMMpha-zISq6_OuwMYDJaBkALX7qLHb9QKGatAhToB2k0Of-l2Vce7S7obBusgD7N88Z-9_T0hAF7dL6JfcYkahIfAloy-FlqvbLUj2xJLNGgSlnw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 34
Nro. Nombre Descripción
6. Liquidación por tipo de liquidación
Se genera un comprobante por cada tipo de liquidación, es decir si un autor tiene más de un libro con la editorial se liquidan por un lado todos los que cobra por sueldo y por otro todos los que cobra por comisiones.
7. Cheques de pago de liquidaciones
Para cada liquidación generada, se imprime un cheque diferente.
8. Ventas en Librerías Las librerías deben informar la venta de libros discriminadas por cada sucursal que posea. Por ejemplo: Libro: Las venas abiertas de América Latina Sucursal Nuevo Centro: $ 10.000 Sucursal Nueva Córdoba: $7.800 Libro: El libro de los abrazos Sucursal Nuevo Centro: $ 20.000 Sucursal Nueva Córdoba: $9.800
9. Asignación de Imprenta Un libro se asigna a una imprenta y mientras la imprenta trabaje con la editorial, no se cambia la asignación.
10. Vigencia de contratos No puede haber más de un contrato vigente al mismo tiempo, para el mismo libro.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WKGYI_-k3uj3KU8rLAgD83GtXmCUX0amSCvLRrJ9-2tMdGKsBUllj7bN7z0j_Ak7bkFmdB0A804cnire0s6tLkRzv0ycLFiBzVgJELYifwxqvv5eVQdPz3niiMAMIW1IMGpw5GQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KCaZ9B2CiMz5gqAJSmq6T1YTKbMpZWcd9wTqL_5dfsZRCBik92ILjeMAfvyKHR13Wzkjs84BSx4k3oe7uJKFOGnffu_7ouL0GI2Ps0MBWtyrbWS5j5FZmtbYxKDEYBfer2KKg5A=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 35
Diagrama de Casos de Uso esenciales
uc Modelo de casos de uso
Recepcionista
Registrar autor
Asignar Editor
Editor
Registrar contrato
Asignar Revisor
Asignar encargado de
diseño gráfico
Asignar imprenta
Responsable de Liquidación
Generar preliquidaciones
Liquidar comisiones
Liquidar sueldos
Registrar libro
Registrar resultado de
evaluación
Registrar resultado de
revisión
Registrar ingreso de ejemplares
desde la imprenta
Revisor
Imprimir listado de
control
Supervisor de Editores
Generar Reporte de
Autores más populares
Generar Reporte de Libros más vendidos
«extend»
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RDG4QENlrkY44xrqWPcaxfIPe4-9e0-y4CWqJBeBd4z1nuMxhufzxfY6cjhTPQY-M8NUvy05jo2zg58JHToBywMOlEWlHkb_seCsZvWRzFuRJkvr8idRbzeGg3tHFBAwCe0awWw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TbP8MjxhzjcAU1R9f-F38TspT3lGSVGfgvyeK8o6a6E3F71MPb1wWOL5NSz3GXNwUmQSRMETxaWXplc6vT3od1BhrGxIjG4f22Dn4yZFJSq0OR9u1q1XteX4TGt6APeH2bOBDSQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 36
Descripción de Casos de Uso (trazo fino, medio y grueso) Trazo fino: Generar pre-liquidaciones de pagos para autores
Nombre del Caso de uso: Generar pre-liquidaciones de pagos para
autores
ID: 1
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Responsable de Liquidaciones (RL) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: obtener las pre-liquidaciones de los pagos mensuales correspondientes a cada autor que tenga
contratos vigentes.
Precondiciones: usuario logueado con permisos de Responsable de Liquidaciones.
Post- Condiciones
Éxito 1: Pre-liquidaciones generadas.
Éxito 2: Pre-liquidaciones generadas y listado de control impreso.
Fracaso 1: Existe liquidación para el mes seleccionado y el RL no selecciona otro mes.
Fracaso 2: No hay contratos vigentes para los autores seleccionados.
Curso Normal Alternativas
1. RL: selecciona la opción Generar Pre-liquidaciones
de Pagos.
2. Sistema: Solicita se seleccione el mes que se va a
liquidar.
3. RL: selecciona el mes/año.
4. Sistema: valida que no existe liquidación generada
para el mes/año y no existe.
4.A. Sistema: valida que no exista liquidación generada y
existe.
4.A.1. Sistema: informa la situación y solicita se seleccione
otro mes/año.
4.A.2. RL: selecciona otro mes/año.
4.A.2.A. RL: No selecciona otro mes/año.
4.A.2.A.1. Se cancela el caso de uso
5. Sistema: solicita se seleccionen criterios para la
liquidación (tipos de liquidación a incluir y autores a
incluir).
6. RL: selecciona criterios. 6.A. RL: No selecciona criterios
6.A.1 Sistema: toma todos los tipos de liquidaciones y
todos los autores.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Gfvze-GRzRFb-2tgupjPaYFO_KELirR5HXHAAmFZ41HIxLyQEnx0L3wH92uvzWtLd5GTf9kf91mN0r765M2aFiEDcc4h1dZDSC0nrW8MNxIEMeu5IluBbgapwet5VUuXOAN87EQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2w1s9LvOVITQx3JBty_9pq70vKigbBA8sACxz1OKLrarRGKxm8ywTGgf4ZlUvMSlpw8fO0pKK1ui4eP6y-YBdRa4zbRxGbomKhXQBHJTnJ_GU9l2ByM9uZeZBc6-3hw6VLJZ5aBg=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 37
7. Sistema: busca para los autores seleccionados los
contratos asociados que estén vigentes y encuentra
al menos uno.
7.A. Sistema: busca para los autores seleccionados los
contratos asociados que estén vigentes y NO encuentra
ninguno.
7.A.1. Sistema: informa la situación.
7.A.2. Se cancela el caso de uso.
8. Sistema: para cada autor y contrato vigente
determina el tipo de liquidación y es “Sueldo”, por lo
que determina el monto que corresponde liquidar en
función de lo especificado en el contrato.
8.A. Sistema: para cada autor y contrato vigente de cada
libro determina el tipo de liquidación y es “Comisión”.
8.A.1 Sistema: busca las ventas registradas para el libro en
el período y el porcentaje de comisión acordado con el
autor.
8.B. Sistema: para cada autor y contrato vigente de cada
libro y determina el tipo de liquidación y es “Comisión” +
“Sueldo”
8.B.1 Sistema: determina el monto que corresponde
liquidar en función de lo especificado en el contrato.
8.B.2 Sistema: busca las ventas registradas para el libro en
el período y el porcentaje de comisión acordado con el
autor.
9. Sistema: busca conceptos de descuento y no
encuentra.
9.A. Sistema: busca conceptos de descuento y encuentra
al menos uno.
10.A.1 Sistema: toma cada uno de los conceptos de
descuento y los montos asociados.
10. Sistema: Calcula el monto que corresponde
liquidar por cada contrato que tiene el autor.
11. Sistema: Agrupa para cada autor y tipo de
liquidación lo que corresponde liquidar en el mes.
12. Sistema: Genera una liquidación por autor y tipo
de liquidación, muestra el listado de control y solicita
confirmación para imprimir listado de control.
13. RL: no confirma impresión del listado de control. 13.A. RL: confirma impresión del listado de control.
13.A.1. Sistema: Para imprimir se llama al caso de uso
Imprimir Listado de Control.
13.A.2. Sistema: El caso se uso se ejecutó con éxito.
13.A.2.A Sistema: El caso se uso NO se ejecutó con éxito.
14.A.2.A.1. Sistema: Informa la situación.
14. Fin del caso de uso
Observaciones: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1d4Jslyt7fsaWowv3CoH9OhuHsTk6N26qXijGv9_Dq4zpXggv9Y5-XiITasQYCC6RNo7wanjqSpV6mKPhuL08XYvKO7XPkDMdJntW4Qc4hBtWzVQWgd9c9IxilgDDK2gGcb_5WGA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1STemR1z9n_Hit7R5afM9YF3da0zaDYVp8lpO0DIe8oaeL1lmZOVm_d3kdY7LI89Z_F6sOXwVVk6BorhDjF82f8CN6pR1E45rgvBTS9oC8CIqn3VqO8goKeJBsw7CNGnlfXrGOKA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 38
Asociaciones de Extensión: Imprimir listado de control
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
Trazo medio: Generar pre-liquidaciones de pagos para autores
Nombre del Caso de uso: Generar pre-liquidaciones de pagos para
autores
ID: 1
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Responsable de Liquidaciones (RL) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: obtener las pre-liquidaciones de los pagos mensuales correspondientes a cada autor que tenga
contratos vigentes.
Curso Básico
1. RL: selecciona la opción Generar Pre-liquidaciones de Pagos.
2. Sistema: Solicita se seleccione el mes/año correspondiente a la liquidación.
3. RL: selecciona el mes/año.
4. Sistema: valida que no existe liquidación generada para el mes/año y no existe.
5. Sistema: solicita se seleccionen criterios para la liquidación (tipos de liquidación a incluir y autores a incluir).
6. RL: selecciona criterios.
7. Sistema: busca para los autores seleccionados, los contratos asociados que estén vigentes y encuentra el
menos uno.
8. Sistema: para cada autor y contrato vigente determina el tipo de liquidación y es “Sueldo”.
9. Sistema: determina el monto que corresponde liquidar en función de lo especificado en el contrato.
10. Sistema: busca conceptos de descuento y no hay descuentos para realizar.
11. Sistema: Calcula el monto que corresponde liquidar por cada contrato que tiene el autor.
12. Sistema: Agrupa para cada autor y tipo de liquidación lo que corresponde liquidar en el mes.
13. Sistema: Genera una liquidación por autor y tipo de liquidación, muestra el listado de control y solicita
confirmación para imprimir listado de control.
14. RL: no confirma impresión del listado de control. Fin del caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2QRuEehB2zbVkiFNPtigcUkoTHG9ftnTkwoQV6Njt6ueUHJOsv3f2ze0P17rTcJVOT2im17RP5DZivzCJimtihV5C1FFZl4AV26f-9t0KdhyZX2POG6NvkT71D4MXbPWMHo0N9iA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RPOXAjHZKNbsuMhzKbx6Ulb7_crNjGtFM6PWIM2jN4xMIca_YmG7erPv2NW0bBLaJH4-4ZDFwhRvLz5gztuE4r-25F-XJhE6Ls57you25D4Kevd4kDr9PioLXOy_3JvguE-2sDQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 39
Alternativas
A1: Ya hay pre-liquidación generada para el mes/año ingresado.
A2: RL no selecciona criterios para la liquidación.
A3: No hay contratos asociados que estén vigentes para el período mes/año ingresado.
A4: Se determina el tipo de liquidación para cada autor y contrato vigente y es “Comisión”.
A5: Se determina el tipo de liquidación para cada autor y contrato vigente y es “Comisión” + “Sueldo”.
A6: Hay al menos un descuento aplicable, para el período mes/año a liquidar.
A7: RL confirma la impresión del listado de control, se llama al caso de uso Imprimir Listado de Control.
Observaciones: no aplica
Trazo grueso: Asignar revisor
Nombre del Caso de Uso: Asignar revisor ID: 2
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Editor Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Asignar un revisor a un libro con evaluación positiva.
Descripción: El caso de uso comienza cuando el Editor selecciona la opción “Asignar revisor”. El sistema muestra
los libros cuya evaluación sea positiva y sus correspondientes autores y solicita seleccionar cual será asignado. El
Editor selecciona el libro al cual desea asignarle un revisor. El sistema muestra los revisores disponibles y solicita
seleccionar un revisor. El Editor selecciona el revisor deseado y confirma la selección. El sistema registra la
selección. Fin del caso de uso.
Observaciones: El actor podrá cancelar la ejecución del caso de uso en cualquier momento mediante la opción
“Cancelar”.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QBYaAQgzYv2DGqzvzpIu3gB6YYrazEVIxL7yRgoy8uoLbdKPWF8iQ0ZaOHvR53McGig_fyVRsaJyHgJVfSmQqBiF6fOcy0E6h4OJPhPbxK5y8vyGJHAzWUqZrj2X4mOXfFdJ8kw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2aww5zp6ZYr9DBpc4jGimMDOSXnlDjkbAPLtPmWsMDmrkizBvLYd-a-JYH3GzZm29R9T_0W2J6hpCzK9-6KpIrxvhKcfchg1GNHyOcfXiVh8600GV_BV2eb_03L4WCoqNT3aD0Ow=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sak45koMCJxmqs6-3xhTpgB0jg6ks1TfqlXH65lQ5ii2abhb1V-Vuhul1Tkg6wXFxIufxBHiNSB7iyHp5wwZzukFO5dp0c5z7VDwViV3sCwRBERQ8l4tIGRDq00Z0j5i7wZq77g=w804-h646-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09oZuFF-cCyFYlfflFDFQ36SdiQT6I75dvuOqtSoz3QXCsuwTRm3OcWnYKBUUk6lRYX2_eRpVHLt2Hr5Gr8B2rBoec2Vc32vDBU5ldqUYvmwPEpZwZMVG51TWbkKGlcx0B3elpTg=w450-h134-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ict9reC7zhgvOx13kjhIDoIgwa6YzAajwLm6uEvNbvtUodUVQ-72jP38v-UUgEaBrxq7K8lqN0KLqTqfyC-jTb4hmKyserJ_GPd3UhpwEiQnAV8s19ArQukmeFj19eVRjBAdYlA=w450-h140-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 40
Construcción de un prototipo de interfaz de usuario Caso de Uso: Generar pre liquidación
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SPii1WZ329BcTGeMNtSLAsy4IIGvv2E69HmQna7ltRZVp-hVzJBBmCGya49huDfQm72HlbOoxzJvtSkb96ZNGYqxiCIg76_H848I3wt83eDF5TtlJAFB2B1xXqP16b4oo03hAfw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lY-Y4c46PjAaSDaFQfYK-zg0WZJIWCmN7IgfzdESBvL-nfe9gq-rp3VEElo5Z4PhHSWk6OopjY8WFYOPkHlX_raK-R3ONMsii8Cu7UMlmvgb52qy9ZYM_2kN760tLadNnPewYmA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 41
6. Modelo de Dominio
class Modelo de dominio
Contrato
fechaCreacion fechaVencimiento montoSueldo porcentajeComision
buscarConceptoDto() calcularMontoALiquidar() calcularMontoDtoPeriodo() conocerDescuento() conocerEditor() conocerImprenta() conocerTipoLiquidacion() estaVigente() mostrarMontoSueldo() mostrarTipoLiquidacion()
Empleado
apellido dni fechaBaja nombre
estáActivo()
Libro
añoPublicacion esTomoUnico nombre nombreOriginal
conocerContrato() conocerEstado() conocerGenero() conocerImprenta() conocerLibroRelacionado() obtenerContratoVigente() obtenerHistorialEstados() obtenerTipoLiqDelContrato()
Imprenta
domicilio nombre
Descuento
fechaOtorgamiento liquidado monto
conocerConceptoDescuento() estaLiquidado()
Venta
cantidadLibrosVendidos fechaFin fechaInicio monto
conocerContrato()
Sucursal
domicilio numeroSucursal
conocerVenta() cuantosLibrosVendio()
Libreria
cuit nombre
conocerSucursal() cuantosLibrosVendio() obtenerSucursales()
TipoLiquidacion
descripcion nombre
mostrarNombre()
Liquidacion
esPreLiquidación fechaCreacion mesAñoLiquidado nroCheque nroLiquidacion
calcularMontoLiquidacion() conocerAutor() conocerDetalleLiquidacion() conocerTipoLiquidacion() crearDetalleLiquidacion() new()
Autor
domicilio mail nombre telefono
buscarConceptosDto() buscarContratosVigentes() buscarMontoALiquidar() buscarTipoLiquidacion() calcularMontoALiquidarPorContrato() conocerLibro() cuantosLibrosPorEstado() cuantosLibrosPublicados() ingresosObtenidosPorLibro() mostrarNombre()
DetalleLiquidacion
orden
calcularMontoDetalleLiq() concerConceptoLiquidado() conocerLibro() crearConceptoLiquidado() new()
Concepto
descripcion nombre
HistoriaEstadoLibro
descripcion fechaFin fechaInicio
conocerEmpleado() conocerEstado()
Estado
descripcion nombre
ConceptoLiquidado
monto
calcularMontoConcepto() conocerConcepto() conocerDescuento() conocerVenta()
Genero
descripcion nombre
getDescripcion() getNombre() new() setDescripcion() setNombe()
Los métodos de
seteo y el
constructor,
especificados en la
clase Genero, son
aplicables a todas
las clases
ConceptoDescuento
descripcion nombre
Rol
descripcion nombre
ImpresiónLibro
cantCopias
característicasImpresión
fechaEnvío
fechaFinalización
conocerImprenta()
libroRelacionado
0..*
1..*
sucursal
conceptoDescuento 1
impresión
0..1
tipoLiquidacion
1
1
libro
1..*
rol1
libro
1
contrato
0..*
venta
0..*
venta 0..*
responsableEstado
1
tipoLiquidacion
1
1..*
detalleLiquidacion
imprenta
1
descuento
0..*
historial
1..*
estado
1
descuento
0..*
editor 1
genero1
concepto
1
autor
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0geyRy6g1c-smqltdq5Ix6ykvKASJPx7ATa3HZFYbZiS4RlMk7uuaM68DmsFj4ddL7Of-VgYddI1RnPkqYvI5_ckt92jtYeF9gbZZ6VmN5ZBdazSMtiPeqfeBWRngkOmdVq1qVLQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pkVslzJPUiqDFFQZgduAH1LDXmZ8Y1rHtWvsOk0SKGTKXDJLaIob245MNOekdDeAja42vFVftkpeZQXbTdkPLNg0VWhAcRyr_eKd4ePZsg5y3HYet6rlDd2oJo-JOB_EFBs0MhA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 42
Patrones Coad Patrones Utilizados Clases
#12 Asociación – Otra Asociación Liquidación - TipoLiquidacion
#3 Participante – Transacción Contrato – Editor
Liquidacion - Autor
#6 Transacción – Detalle de Transacción Liquidacion - DetalleLiquidacion
#9 Ítem -Detalle de Transacción DetalleLiquidacion – Libro
#14 Contenedor – Contenido Librería - Sucursal
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FgiODkyvstFm9P5uNnCVWQUXGWWwdxQlA5PNtO0gdGgKKbECvminyvQU3qDlgfD06_x0hrK2otUOpk37whuw7FbzM_0e3xdv_6TcOB5fu3X4YCbYM2y4Cxuu6NW7gjYORwgS7Ow=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rlaf25d-hDNoJ0vXbmRskRQafug5cUAdpEcsz1sYbO2oe4mojXa3amN5GPROtE1sdEf2EYFRd-ufv61NO8kTG3X4DlS6lTYZ6z4VNQWUXUGoQUtXLgOKVxni44EY0qNG0QM_OFQ=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 43
Solución Propuesta: Torneo de Municipalidad
Definición del Sistema Objetivo del SI:
Gestionar la información sobre los torneos de atletismo organizados por la secretaría de deportes de la Municipalidad
de Villa María, administrando la información sobre las diferentes disciplinas, los competidores y las categorías.
Resolviendo, además, el procedimiento de inscripción de los alumnos a los diferentes torneos.
Requerimientos funcionales (Alcances)
o Cantidad de inscriptos que cumplieron los requisitos y compitieron.
o Mejores competidores por categoría, disciplina, sexo.
o Escuelas que más premios obtienen.
o Comparativos de resultados obtenidos en las competencias.
Reglas de Negocio:
Nro. Nombre Descripción
1. Organización de torneos Los torneos se organizan por disciplinas (carreras, salto en largo, jabalina, etc.), en los que pueden participar competidores de diferente sexo y categoría (clasificados de acuerdo a la edad)
2. Participantes de torneos Los torneos se organizan solamente para alumnos de las escuelas de la zona.
3. Pertinencia de los competidores Los competidores necesariamente tienen que pertenecer a una escuela, que es quien debe presentar las inscripciones.
4. Inscripción de participantes Las escuelas que desean participar, deben inscribir a sus alumnos.
5. Creación de inscripciones Se generan inscripciones independientes para cada participante en cada una de las disciplinas que desea competir,
6. Estados de la inscripción Se evalúa si los datos de la inscripción son correctos, si esta evaluación es aprobada, la inscripción queda pre-aprobada, desde ese momento tienen plazo hasta cinco horas antes del inicio de la competencia, para realizar el examen médico reglamentario, recién después de superadas ambas instancias el participante está en condiciones de competir.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_G8eVUe7NfFCzhUZt7_cHnraISwZDl-xCRcn72Y53eIy8H2pvvpqknHvxc89vLvU9yzA2H4LQ4r_LqHBURmrpYArcAv1xaJ0OzMOrGlIS-9E1PBtGs_FZmtB11ikj1pKaAxB9Hw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2jK0V0_lIzYrAdTiqrQZGrDv8UKsAaMIwqDIhqQSNWCoKp0sPOcapv9IZfjqvGtwuDowna5r3TAcBw3AGfvzS81TsaOjTwaoUcbsoVETIo6-IweSqM7yb8N7Pm_FwD9VM7iXac=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 44
Diagrama de casos de uso esenciales
uc Use Case Vista Esencial
Administrador de Torneo
Evaluador de Inscripciones
Responsable de Competencia
Responsable de Inscripciones
Responsable de Secretaría de
Deportes
Registrar Escuela
Registrar inscripción de
Aspirantes
Registrar resultado de
examen médico
Generar Listado de mejores
competidores
Generar Reporte de resultados de competencia
Registrar Resultado de competencia
Registrar Evaluación de
inscripción
Registrar CompetenciaRegistrar
Categoría
Registrar Disicplina
Generar Informe de mejores
competidores
Generar Reporte de Escuelas más
premiadas
Registrar Torneo
Registrar Sede
Generar Informe de inscriptos que
compitieron
Generar Comparativo de resultados de
competencias
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SrKUFKHsBX-_ah_sue9J4pwIlz7tE59BsYYGObu9B3La4KxvynNge6MGKtch2fVieArLSSl9vBSw_YlLHqzyqqBED3JAiwTzyr0poEKhO2Dd-dog9mjeFt0M4MTYKWn4TrNsW9w=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zB9DocS_ElO-EYhAnEgm66kuT6zdYkUmwOrcNW8OZOjZL7cBbBA-oh8gGIS53LgLhekialXTBvRU3_EU44aZu1jKh9oMR_O8Jy6EvnzxkmI9kXGNRcnMfyOiqXojjB9fZFKKeGA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 45
Descripción de Casos de Uso (trazo fino, medio y grueso) Trazo fino: Registrar aspirante
Nombre del Caso de Uso: Registrar inscripción de aspirantes ID: 1
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Responsable de Inscripciones (RI) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar a uno o más aspirantes de un colegio en una o más competencias, dentro de la categoría
correspondiente.
Precondiciones: usuario logueado con permisos de Responsable de Inscripciones.
Post- Condiciones
Éxito: Se inscribió a o los aspirantes en la competencia.
Fracaso 1: El RI no encuentra la Escuela a la que pertenece el aspirante.
Fracaso 2: El RI no corrige los datos incorrectos del/los aspirante/s.
Fracaso 3: El RI decide cancelar el caso de uso.
Curso Normal Alternativas
1. RI: selecciona la opción Registrar aspirante.
2. Sistema: muestra un listado con las Entidades
Educativas registradas de la zona y solicita selección de
una.
3. RI: selecciona la Escuela. 3.A. RI no encuentra la Escuela buscada.
3.A.1. Se cancela el caso de uso.
4. Sistema: solicita se ingresen datos personales del
aspirante (nombre, apellido, dirección, fecha de
nacimiento, sexo, DNI).
5. RI: ingresa los datos personales del aspirante.
6. Sistema: muestra los datos del aspirante recién
ingresado y solicita se informe si desea ingresar otros
aspirantes.
7. RI: no desea ingresar otro aspirante. 7.A- RI: desea ingresar otro aspirante.
7.A.1. RI selecciona la opción correspondiente.
7.A.2.Sistema: habilita el ingreso de datos personales
del aspirante.
7.A.3. RI ingresa los datos personales del aspirante.
7.A.4. Sistema: muestra datos del aspirante.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3o4od8cmUk6LHp-PfhXjsVwKtZcsopXRbK9CwPBqaBUr3O9wUKnDMeGIlkg6tBGjBs44XBzqGIeE5CKIdsODPQ4SA427wOhyPjaXwu4SLfHvJlL_JEJ2Uy_Ua2y1itsAwfbq2FQw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3vXUu6lcKjUZMSyLg3IBqNU2Ymy1XCJ64Vw4uMkPzqj_YIP8H_Vj2BJ7X2-t3DxvInu4DlZc9AwISr7FLlQwIlJmHC1GkekfLD-eNAd3LSJqz7loKi9PjF4cyApp6PZUfnh_zAbw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 46
8. Sistema: Para cada aspirante ingresado, solicita se
seleccione las competencias a inscribirlo.
9. RI: Para cada aspirante, selecciona la/s competencia/s.
10. Sistema: solicita se seleccione la categoría para cada
competencia de cada aspirante, proponiendo una
categoría según la edad y el sexo del aspirante.
11. RI: no desea modificar la categoría propuesta por el
sistema.
11.A. RI: desea modificar la categoría propuesta por el
sistema.
11.A.1. RI: selecciona la categoría correspondiente para
cada competencia de cada aspirante.
12. Sistema: solicita confirmación para registrar la
inscripción de los aspirantes.
13. RI: confirma la operación.
14. Sistema: valida que todos los aspirantes ingresados
estén vinculados al menos a una competencia en una
categoría dada, y lo están.
14.A. Sistema valida que todos los aspirantes
ingresados estén vinculados al menos a una
competencia en una categoría dada, y no lo están.
14.A.1. Sistema: informa la situación.
14.A.2. RI vincula a los aspirantes al menos a una
competencia en una categoría.
14.A.2.A. RI: no corrige los datos ingresados.
14.A.2.A.1. Sistema: cancela el caso de uso.
15. Sistema: registra la/s inscripción/es del/los
aspirante/s a las competiciones especificas del torneo
vigente.
Fin del caso de uso
Observaciones: En cualquier momento el actor puede cancelar el caso de uso seleccionando la opción definida
para tal fin.
Requerimientos no Funcionales Asociados: no aplica
Fuente: no aplica Referencia Fuente: no aplica
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Op7UlvDFwVz1mAcq5MWJl9fSsJnd-0IhD6giPZsX88oCpG97_ozGcYn-c57UrJ1zbVYiiYQhR_r1yDM8sbklY1v8cjGcQ4LzbGPOCd8IoPtCGtK7JblvvEB8sNUy7JCYjzM997A=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UNYDDkYBE88U1gh3Hq14TcipOEVsF_2n3ZSiNq-IbSRCcAy0cZilPncqYoYbJVr6FOfkgRf5U0XDYRTAdmNjckvliUscYGcaobSHRNajtPAdwgKsvVUmF2QjFP8-OCH-US_b8=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 47
Trazo medio: Registrar aspirante
Nombre del Caso de Uso: Registrar inscripción de aspirantes ID: 1
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Responsable de Inscripciones (RI) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar a uno o más aspirantes de un colegio en una o más competencias, dentro de la categoría
correspondiente.
Flujo Básico
1. RI: selecciona la opción Registrar aspirante.
2. Sistema: muestra un listado con las Escuelas registradas de la zona y solicita selección de una.
3. RI: selecciona la Escuela.
4. Sistema: solicita se ingresen datos personales del aspirante (nombre, apellido, dirección, fecha de nacimiento,
sexo, DNI).
5. RI: ingresa los datos personales del aspirante.
6. Sistema: muestra los datos del aspirante recién ingresado y solicita se informe si desea ingresar otros aspirantes.
7. RI: no desea ingresar otro aspirante.
8. Sistema: Para cada aspirante ingresado, solicita se seleccione las competencias a inscribirlo.
9. RI: Para cada aspirante, selecciona la/s competencia/s.
10. Sistema: solicita se seleccione la categoría para cada competencia de cada aspirante, proponiendo una
categoría según la edad y el sexo del aspirante.
11. RI: no desea modificar la categoría propuesta por el sistema.
12. Sistema: solicita confirmación para registrar la inscripción de los aspirantes.
13. RI: confirma la operación.
14. Sistema: valida que todos los aspirantes ingresados estén vinculados al menos a una competencia en una
categoría dada, y lo están.
15. Sistema: registra la/s inscripción/es del/los aspirante/s a las competiciones especificas del torneo vigente.
Fin del caso de uso
Alternativas
A1: RI no encuentra la Escuela buscada.
A2: RI desea ingresar otro aspirante.
A3: RI desea modificar la categoría propuesta por el sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DiiluQkNzFMGoYI-PvwtjwiHZ2vD3Y37zllhS6chpLXwbM-3AzlOPxOn2sKA5SiUq_slbTdW3iQvKbtLLXA3BtRv0Iu7Xilt4YkdAggPDtFLY1ntvDXuATY4DHhnQYC2Mr5KTAg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0m65JBM1sb1uuSOgaIIsTQ_FPKJKkQhMeLgm2j6ochSAxFLiqSHvm1hy15jTaC5YWrD7T0AJ21ALHWeNbkO0LTYBPXb549MPTGD8ZweeZExuRkXpsUkvOa5rM-lkXI2rQIGi8DVA=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 48
A4: Sistema valida que todos los aspirantes ingresados estén vinculados al menos a una categoría dada y no lo
están.
Observaciones: En cualquier momento el actor puede cancelar el caso de uso seleccionando la opción definida para
tal fin.
Trazo grueso: Registrar resultado de competencia
Nombre del Caso de Uso: Registrar Resultado de competencia ID: 2
Prioridad: Alta Media Baja
Categoría: Esencial Soporte Significativo para la Arquitectura: Si No
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Responsable de
Competencia
Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar los resultados de cada competidor en una categoría de una competencia determinada.
Descripción: El caso de uso comienza cuando el Responsable de competencia (RC) desea registrar los
resultados de una competencia. El sistema solicita se seleccione la competencia y la categoría a considerar.
El RC las selecciona, y registra para cada aspirante inscripto que haya aprobado el examen físico el resultado
en la competencia (si compitió o no, la posición en la que resultó, el tiempo cronometrado y faltas si las
hubiera). El caso de uso finaliza cuando el RC confirma el registro de los resultados.
Observaciones: no aplica
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cE4iFsvbLlZwf6FPWH2cd8ZBRlBycpz0pJDBA-dyKQhKdq5BcS8gLWwqoMdhtCGwbt6sqsVwHF9Tx-v2J-KsLDYuifRgK78mCJuyPs_wsLk1MUY8s7hSJFiexyIwThoXg80gy5Q=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0F_HUtWfpGwGKQH7Z3ZdbPI9vhEhH6i4KW7gRTiAcuO60G1rLgXVWcMiRiGbRQ0-zxVcA_hocPSgOvkzsNceRe3Ti46RIRHek1WdU5EciKwwOwyKktSPVDVrjKqKd-AKy-EKUJCg=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21aVZOSG9XZ3J-1Zvv0Ez7oI4Vz5_hBfv7vVGOGy63qU8Inln-Ixpoeo2kr1OfixOF9LwHoVD3GkzXxG_S_T1vFymWNAHUeRSiDD2mQxQKrJRUJNMbav5w6MFrlsyYdeCAseaW8w=w870-h471-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Gn4_gztdu27x9-n54kpAvpP2Ws1IiCMYhxteXYuzdje7NgMo9KqsooNgIu407oikpeJ4cEE1f0qRPEXUmn2qhdDQwByvLoBZz6xRN4SUj3CtUzktoASZ1merIFfHoFYUK4wGA=w448-h273-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 49
Prototipo de interfaz de usuario Caso de Uso: Registrar aspirante
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PKJxD0DAs9WmpttHVOQakpD0NQ11xkphaEf3C9xFqZUdec4BGTRJ37oFMqKJJRDcsFmnNcx7J094SEoXInqygyeupXC3-TpT9a4d8Qf1Wf-rCfWt8sDejKTgHiH8nlMzBU7Ya=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0D2-ETWogqfEvAz4s8mUzMiMwvegz0gjAsxLlMUag3p5PH-ZVmOQupke-HU1fnFoofEuAAiTv_E27gh1ilX3q3rHk_QPf4b0rO-HO2kQkfDF9dcO158pnsV76RsMI3h0lwGyFBQQ=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2NjLgB4MgJznSJBGq4SG9noi4Fz9UU7TVe14FhEVAK1tr5-KMHGMEyrioOjpGRFDqI-WEkbJETQKue0I8CAJqQEBG_Q9m7cZUz1gAojEvlclhVxIcpoHFv5fq2ImKy3jwDpMH0Sg=w1280-h1278-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 50
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0W-NotE0nziFmI1tV36kQ7bBShRMXpAgzIQOHufPm5KzfHCeCOlExVchrHObkh_UXblId6s0AY_V531TFWawBW7zZKzxQRFN18GzsneOT1U1wu7HGR68bRJ0IpPnT58WBHV7IihQ=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34bKYsSmJugAp516c2DJtfFaFNWg5w_qpz0Z_CEqAYwi8PoyqwgLln-dzbyk8SW3E7QfxbzQ54E9KVMSbR2uGkNnjGePYil4ZtjiKRC-c4fSpn2yUTaHS1DTrI1N0JFePIDf0Q6w=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 51
Patrones Coad Patrones Utilizados Clases
#12 Asociación – Otra Asociación Inscripcion-EstadoInscripcion
Competencia-Disciplina
Competencia-Categoria
# 3 Participante – Transacción Competidor-Inscripcion
# 4 Lugar-Transacción Sede- Competencia
#6 Transacción – Detalle de Transacción Torneo-Competencia
#16 Grupo-Miembro Escuela-Competidor
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sdReX5dMRjVkyCYZvDTeriEMXnreiSHwiFfTiV1VF_VMD9djzaOTU74LZ73PIWvHCqD5k5qC1AWyIei1bVfGbXQNMQAL3qghyNMjhMQkYw1Of9x3NJ9hjJ2lXHtE0b1fmrNXTXg=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mjNDVgyXMB-fViklhhmLNVROT4f2vaoWnEJwKuwJXUr0j-ZiCv0iZ3BnLviR4TVOQeH283Wb2Krr0EPWouoEjLxEBWVF0ASZAUsKf92QhAX43myacC2DDoWJGImU5tqtaxoEY=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 52
Solución Propuesta: Control de Acceso a countries
Definición del Sistema Objetivo del SI:
Gestionar la información de los lotes, propiedades y obras de un country. Además, administrar el proceso de ingreso
y egreso de personas (propietarios, familia de los propietarios, obreros, visitantes) del country, gestionando las
tarjetas de acceso.
Requerimientos funcionales
 Administración de lotes, propiedades y obras en construcción.
 Administración de obreros asignados a obras y su horario laboral.
 Administración de propietarios y de su familia.
 Administración de visitantes autorizados por propietarios.
 Generación y emisión de tarjetas de acceso.
 Registración de entrada y salida de todas las personas al country.
 Generación de informes de:
o Accesos por cada tipo de persona.
o Momentos de día que ingresa más gente.
o Personal (obreros) asignados a una obra en particular.
o Nómina de Propiedades y Obras de un Propietario.
o Cantidad de Visitas por período de tiempo para cada propiedad.
o Administración de inicio y fin de obras.
OBSERVACIÓN: Cuando se menciona a la “familia” del propietario se hace referencia a aquellas personas que viven
con él.
Reglas de Negocio:
Nro. Nombre Descripción
1. Personas que pueden ingresar Podrán ingresar al country las siguientes personas: propietarios, familiares de los propietarios, obreros y visitantes.
2. Tarjetas de acceso Únicamente los propietarios y sus familiares poseen una tarjeta de acceso que les permite el ingreso.
3. Ingreso de visitantes Para que los visitantes puedan ingresar, el guardia debe llamar por teléfono al propietario del lote donde debe entrar el visitante para que el propietario autorice el ingreso del visitante.
4. Ingreso de obreros Se controla el ingreso de los obreros, teniendo en cuenta su período de trabajo (días de trabajo, horario de ingreso supuesto, horario de salida supuesto, fecha de inicio y de fin de la obra donde trabajará). Los obreros no pueden ingresar al country en días y horarios que no hayan sido autorizados previamente por los propietarios.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1T05QJDgZkl0dj9rC8J1DjgN4NEnJEDid0P9x81y4e9m87L75QrnSfOdiCoY5r0ro5aZ1f0wwnEZN1_mfQLblwcl3ZnA2CgoMyEEYDzomt-35-TegsMlLh_9rjj4mtSfLWgps3=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1e6-HcRP4rLTaPchxwi_FnR5atcPfQ8U9DqksRes40XJWfXi49OKMJnrJIRqI9IBVvCPMOmxxOijC2u_oxrq5KJarFr1iXAxDHPXgcapG-520AGzv6LF12wAfY9HcA0cow_q-I=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 53
5. Control de ingresos/egresos En cualquiera de los accesos al country, no se debe permitir que una persona pueda ingresar dos veces sin haberse registrado la salida, y viceversa.
Diagrama de casos de uso esenciales
uc Use Case Model
Empleado de Control de
Acceso
Administrador del Country
Encargado de Obras
Registrar ingreso de
persona
Registrar Egreso de
Persona
Generar Tarjeta de
Acceso
Registrar Obra
Registrar Obrero
Registrar Turno de
Trabajo de Obrero
Registrar Fin de Obra
Registrar Autorización
para Ingreso de Persona
Consultar Ingresos de
Personas
Registrar Guardia
Registrar Propietario
Registrar Propiedad
Registrar Familiar
Registrar Lote
Generar Informe de Ingresos por tipo de
Personas
Generar Informe de
Ingresos por Horarios
Generar Reporte de Propiedades
Generar Reporte de Obreros y sus
asignaciones a Obras Generar Informe de
Visitas a Propiedades en un
Período
«extend»
«extend»
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3SRmS4nqJ381w3Pvc5-7rbks0XvaC1VhYB5j6uE35n5u3ubcxvNcP2jPvzjQ2CFcLB4xx8zZf510mu7ay5KzPOHYaHtSvei9hXrUJOHjeJavsYwuvwbJvJVY59vNIvGsPuGlb4=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iqVja-aMUiv-EGBsWNYiso9U87G8rwYtf7EJeScB4w9m48xkEEX1JSEcY56a0yxH0YQuWdiKRg9gUDQJ0uR5hg4tZwJqd9Of5X8fFgPm4bz8a1-vb8e7qkZb9VdZnkMdxiZy4=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 54
Descripción de Casos de Uso (trazo fino, medio y grueso) Trazo fino: Registrar egreso de persona
Nombre del Caso de Uso: Registrar Egreso de Persona ID: 4
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Empleado del Control de Accesos (EC) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar la salida de una o más personas que han ingresado previamente al country.
Precondiciones: usuario logueado con permisos de Empleado de Control de Accesos
Post- Condiciones
Éxito: Egresos de las personas registrados correctamente.
Fracaso 1: El EC no desea corregir la fecha y hora de egreso.
Fracaso 2: No hay ingresos sin egreso registrado.
Fracaso 3: El EC no confirma la operación.
Fracaso 4: El EC decide cancelar el caso de uso.
Curso Normal Alternativas
1. EC: selecciona la opción Registrar egreso
de persona
2. Sistema: solicita se ingrese fecha y hora de
egreso, proponiendo la fecha y hora
actual.
3. EC: no modifica la fecha y hora propuesta. 3.A EC: modifica la fecha y hora propuesta.
3.A.1- Sistema: valida que la fecha y hora sea válida, y lo es.
3.A.1.A- Sistema: valida que la fecha y hora sea válida, y no
lo es. (Ver Observación 2)
3.A.1.A.1- Sistema: informa la situación y solicita se corrija la
fecha y hora.
3.A.1.A.2- EC: corrige la fecha y hora.
3.A.1.A.2.A- EC no corrige la fecha y hora.
3.A.1.A.2.A.1- Sistema cancela el caso de uso.
4. Sistema: busca los ingresos sin egreso
registrado y muestra los datos de las
personas (Propietarios, Familiares,
Obreros y visitantes) que ingresaron y
solicita se seleccione quienes egresan del
country.
4.A- Sistema: busca ingresos sin egreso registrado y no
encuentra ninguno.
4.A.1- Sistema informa la situación y cancela el caso de uso.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ru49CqDq9-ZFmxcoXSQSBlZ9DnXP-sXqcsfVmYEoDnrzQE7B68SYxHGifVPOwP-9k4_3seSa45aISEwA9uvoUgQ-lK_BT5wmoYJBbu1gumcjDJxpl4jq0uyYz-zofOumspw3s=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3oDBYu4d2jYyV13ICtAaar_aJrqcpbj4Z3zyz1cIXo0DOSyQwuH_ZbW8mO0JhLrwXwUihG-MTWzjnF1hHrgo-41OufjKr2FUoODHvZi1Zp587F6cAdM0ZYZAIC7A_NtTm7z2Lxiw=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 55
5. EC: selecciona las personas que desean
salir.
5.A- EC: no encuentra todas las personas que ingresaron.
5.A.1. EC: Encuentra al menos una persona, selecciona la/s
persona/s que encuentra.
5.A.1.A EC: NO encuentra ninguna persona.
5.A.1.A.1. EC: Registra observación informando la
situación.
5.A.1.A.2. Sistema: cancela el caso de uso.
5.A.2. Registra observación informando la situación.
5.A.3 Se cancela el caso de uso.
6. Sistema: solicita confirmación para
registrar el egreso de las personas
seleccionadas.
7. EC confirma la operación. 7.A- EC no confirma la operación.
7.A.1- Sistema: cancela el caso de uso.
8. Sistema: registra la salida del country de
cada persona seleccionada, indicando
fecha y hora de salida.
Fin del caso de uso
Observaciones:
1. En cualquier momento el actor puede cancelar el caso de uso.
2. La fecha y hora de salida no debe ser mayor a la fecha y hora actual.
Asociaciones de Extensión: no aplica
Asociaciones de Inclusión: no aplica
Use Case donde se incluye: no aplica
Use Case al que extiende: no aplica
Use Case de Generalización: no aplica
Trazo medio: Registrar egreso de persona
Nombre del Caso de Uso: Registrar Egreso de Persona ID: 4
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Empleado de Control de Acceso
(EC)
Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Yld9ZdbuUg1Gjzp7-hdjAOIHEMpG4_4ZY5C5N88FIDEKpI0IgEEXyoFqyNA6DEA8VPxa8228NUen5fZMFAG1SixAvs7W5x3_CQWS8zDxxWSd4GOU_ghE_0D6Fynq7Yqfbu4t4ew=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Tx9Q2SdlKXqw5pzC2vOSs8FjKFCeGZ50YSNfYL_ZDYPMAa7gZxYtWN6bCB2uIuYBuG_zO1Pts6dC1t5ia7g3zMvwnO-CLGC9rTqdsf5_HaVdYc6oKAy_mNw9oMGF0DaWBS_Ix2Q=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 56
Objetivo: Registrar la salida de una o más personas que han ingresado previamente al country.
Flujo Básico
1. EC: selecciona la opción Registrar egreso de persona
2. Sistema: solicita se ingrese fecha y hora de egreso, proponiendo la fecha y hora actual.
3. EC no modifica la fecha y hora propuesta.
4. Sistema: busca los ingresos sin egreso registrado y muestra los datos de las personas (Propietarios,
Familiares, Obreros y visitantes) que ingresaron y solicita se seleccione quienes egresan del country.
5. EC: selecciona las personas que desean salir.
6. Sistema: solicita confirmación para registrar el egreso de las personas seleccionadas.
7. EC confirma la operación.
8. Sistema: registra la salida del country de cada persona seleccionada, indicando fecha y hora de salida.
Fin del caso de uso
Alternativas
A1: EC modifica la fecha y hora propuesta
A2: El sistema busca ingresos sin egreso registrado y no encuentra ninguno.
A3: EC no encuentra todas las personas que ingresaron.
A4: EC no confirma la operación.
Observaciones:
1. En cualquier momento el RC puede cancelar el caso de uso.
2. La fecha y hora de salida no debe ser mayor a la fecha y hora actual.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R7-pgyccADUUt2k60bbfkBL2mo1pVrKxVO1vb9iRvEG5bjmgkAJkeLTpGvF1cdPpI8fcxJ82ZvLGw6qnxQJX_8ZZDyckKC5tYN7YF3RNO4yIwKKQrCXEYP6A9CB4fB7xI53mpMw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ooc8b09LJBPX_eZu_p-2N9W7SGuGN_iTM99nK1CvtmoEqrlhNsfrNfo3B5wb-7dSvozIt3OZ7R-6VmFLC8bRVy-HnwSprtLxJ_KTUALZ_9aGRobYZvl1R2zyWbTpQu3O9uE7ysA=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0I4e0kNANtdIpxkWbSXsZpUp7FJO9y4kUnGYmwgxKs7BFE1CLVbw7C-GJXAx8jTrmeKZu-XjQUCxia4zh4apfrKYqLF0E6ag-qz-5Dv_d0MnoTwWuco0GwMT7-HTdSd0WOmHyw=w670-h299-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 57
Trazo grueso: Registrar turno de trabajo de obrero
Nombre del Caso de Uso: Registrar Turno de Trabajo de Obrero ID: 12
Categoría: Esencial Soporte Prioridad: Alta Media Baja
Complejidad: Simple Mediano Complejo Muy Complejo Extremadamente Complejo
Actor Principal: Encargado de Obras (EO) Actor Secundario: no aplica
Tipo de Use Case: Concreto Abstracto
Objetivo: Registrar horarios y días de trabajo de un obrero en una obra que está en ejecución dentro del
country.
Descripción: El caso de uso comienza cuando el Encargado de Obras del Country (EO) desea registrar el
turno de trabajo a un obrero. El sistema muestra las obras iniciadas, y el EO selecciona una obra. El sistema
muestra una lista de los obreros registrados, y el EO selecciona el obrero en cuestión, asignándole un horario
de entrada, horario de salida y días de la semana de trabajo. El caso de uso finaliza cuando el EO confirma la
registración del turno de trabajo al obrero elegido.
Observaciones: no aplica
Prototipo de interfaz de usuario Caso de Uso: Registrar egreso de persona
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2xtE72sS_vZ2yd6bcQjSGAiaIcL-E5hMGxdzXytbXE1J2p-O9pwunmqjfz96UT9QUI0mBLAr9zW04Qr5J8n-ciBgWSAr7FXcpLbMfwPGKK5L6FVSYHvp5Cy2a7BjeGWu3CPw3GSA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3epTfMeN8NfAMBv3FMVWgqyORHYNnjkP6DqfJLbWDNJoV-Jxg9NE7mnZA_N0OBJHu6gvPUQ-5ozURkZY76WyIFewYm2mwmyK7n1obyzSk3Au7DTcI_dLGCRJmh2lNASQaJymDf=w41-h51-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36EQ3EYLMfn9NG5MnDAPvSbvnOhbip1UDlyeh9khCUNpyeKccpzOpbaOv1PStnlZDR4ye3TFwvcgzZl7u1RCkj5Qv-ERo1Q82vZ1NIV1HX_r29dG9QlRNx0qw6DLdhbOroLqstxQ=w457-h119-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 58
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Q7z4A78_iUxRV8Ec1sD6tURGVPKRr8LNfvtrnE_mTgkVOQGqdds8d6lo3ohgzDOlwbxDsGOl20eWHvwa7Tpl-XZ-gdk4bInF2TL5GlV6sRAKhi0KQP_4YQFpp0RZ7uQMjWAS5=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3X3oT-hijCAwY0JnvzoZGwodXbW0fnKljpUv7YLT-KPrqtpom5LI-yI-41o2kZgd6oAMLUuYosuuwXDEOTL3Z8uyr0NaLT3bsP5Wls8z9dbDup-jMt7cQddirCcqejQZ5V_or3=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 59
Modelo de Dominio
class Modelo de dominio
Propietario
apellido dni nombre
aQuienAutorizo() cantidadLotes() cantidadPropiedades() conocerAcceso() conocerAutorizacion() conocerFamiliar() conocerLote() conocerTarjetaAcceso() cuantasAutorizaciones() tieneObras()
Familiar
apellido dni nombre
conocerAcceso() conocerParentesco() conocerTarjeta() getApellido() getDni() getNombre() new() setAcceso() setApellido() setDni() setNombre() setParentesco() setTarjetaAcceso()
Guardia
apellido dni domicilio fechaBaja fechaIngreso legajo nombre
Obrero
apellido dni nombre
calcularTiempoTrabajadoObra() conocerAcceso() conocerPeriodoTrabajo() estaTrabajando()
Visitante
apellido dni nombre
PeriodoTrabajo
diasDeTrabajo fechaFin fechaInicio horaEntrada horaSalida
calcularDuracionTurno() conocerObra() estaVigente()
Obra
fechaFinReal fechaInicio fechaPrevistaFin
calcularDuracionEstimada() conocerAutorizacion() finalizarObra() tieneAccesos() tieneAutorizaciones()
Acceso
fechaIngreso fechaSalida horaIngreso horaSalida
conocerTurnoTrabajo() cuantoTiempoEstuvo() obtenerGuardiaQueTrabajo()
TurnoDeTrabajo
fechaFin fechaInicio horaFin horaInicio
conocerGuardia()
Lote
numero superficie ubicacion
conocerObra() conocerPropiedad() cuantasObras() cuantasPropiedades() tieneObra() tienePropiedad()
Propiedad
caracteristicas superficieEdificada
conocerAutorizacion() tieneAccesos() tieneAutorizaciones()
Autorizacion
estado fecha hora
autorizarIngreso() conocerAcceso() conocerVisitante()
TarjetaDeAcceso
estaHabilitada fechaOtorgamiento fechaVencimiento numero
deshabilitar() estaHabilitada() habilitar()
Paretesco
descricpion nombre
Métodos de seteo y
constructor se
especifican en
todas las clases
como están en la
clase Familiar
acceso
0..*
tarjeta 1
acceso
0..*
0..*
obra
lote
1..*
propiedad
0..*
parentesco
1
tarjeta
1
periodosDeTrabajo
0..*
visitante
1
acceso
0..*
turnoTrabajo
1
0..*
propiedad
acceso
0..*
guardia
1
autorizacion
0..*
autorizacion
0..*
familiar
0..*
obra
1
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qiRXLq6Ik4b7pHvAzpZTbucc5QI8EkQoz1drKYucYoOmW-rKFcVeIwtxGPXUqiVGdM0qMnrYBORFODWUzgPSEo9dR9hZRQnl8EhzrL7zjaAXBhC8xD7seMzCnCblHR2qUU5snyw=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SWk7FYPrDZ9zLbPkKqx0sT2EDFU3olAJ08mEhI0SYQq6YKLJN1wzg35xmsM8msQG8nQnNcq4QJaRDFCdeBO2DJ09DP2VU_AKokGKgRlfwswX1kAcyhU4pkyn-b3k0q_ZaYmsT=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 60
Patrones Coad Patrones Utilizados Clases
# 3 Participante – Transacción Guardia – Acceso
Obrero – Acceso
Propietario – Acceso
Familiar - Acceso
Propietario – Autorización
Guardia – Autorización
Visitante – Autorización
#7 Transacción- Transacción Subsiguiente Acceso - Autorización
# 4 Lugar – Transacción Propiedad – Autorización
Obra – Autorización
# 14 Contenedor – Contenido Lote – Propiedad
Lote – Obra
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pNb0gv7Koe5-bRdVF7HfCfJLaaOlJKaW4floQXISpAdki1GHmDbjIJfNxh_pIg8vHoitGLkivHvVrLqOxF8OEdavVEwTrkltbNM3wcvH2_rBryWct9hrrrJ2SMryAD14K4-3sYA=w143-h192-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17cnVT52-nUjG_5gMCzZiR1-d1cpadasapzwl9E2CZKTM3kZyRWK6Yb114XkuL30UMHE8uKpAqZEf4rta1Plmorh3gv_OfD0dLFzNK5vJqJRy0cMzmGntK2KVnLRhn_dsGgYebag=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información

#### Guía de ejercicios prácticos Modelado de Requerimientos

2026 - Guia de Ejercicios para Mod Requerimientos CS.docx, Versión 2.5 Página 61
Historial de Cambios
Versión Fecha Descripción Autor
2.0 20/04/2015 Se replantean globalmente todos los ejercicios y se cambia el ejercicio de telecentro por el de Lavado de Vehículos y el de Venta de CD por el de Taller de Autos. Se quitan las historias de cambio de cada caso de uso para manejarlas desde un sólo lugar.
Judith Meles Florencia Bene Candelaria Fey
2.1 18/04/2016 Se reemplazan algunos ejercicios, se mejora la redacción y el formato, se agregan las reglas de negocio.
Judith Meles Giuliana Belli
2.2 29/04/2016 Video Club: se agregan datos de socio al CU. Se quita la consulta por elenco y se agrega patrón 15. Secretaría de turismo: Se quitan CU de soporte y sesión de la vista de CU. Se agrega el concepto del tipo de habitación en el enunciado, se realizan correcciones de redacción y se agregan RN de reserva. Se indican los flujos básicos de trazos medios. Se quitan precondiciones de trazo grueso. Se corrige diagrama de clases de Editorial agregando la impresión.
Cecilia Massano
2.3 29/04/2016 Se corrige el diagrama de clases del Control de Accesos del Country
Judith Meles
2.4 10/04/2017 Se corrige consistencia de plantilla de trazo medio y grueso Judith Meles
2.5 16/03/2026 Ajustes de formato y consistencia Judith Meles
