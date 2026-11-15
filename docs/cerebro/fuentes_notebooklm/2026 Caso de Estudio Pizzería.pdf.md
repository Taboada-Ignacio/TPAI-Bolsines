# 2026 Caso de Estudio Pizzería.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento presenta el 
diseño de un sistema informático
 para gestionar las operaciones cotidianas de una pizzería de mostrador, abarcando desde la oferta de productos hasta la facturación. El texto detalla los 
requerimientos globales y reglas de negocio
, especificando cómo se deben manejar los catálogos de pizzas, los cambios en las solicitudes de los clientes y los cobros correspondientes. Asimismo, incluye un 
modelo de dominio estructurado mediante un diagrama de clases
 que interconecta entidades fundamentales como pedidos, facturas, estados y tipos de productos. Finalmente, la propuesta se complementa con una 
vista esencial de funcionalidad a través de casos de uso
 y la generación de reportes analíticos para optimizar la administración del establecimiento.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2YEXrbyfxfQSyUtFQqpkTg-JRKvrr7AXv1tJNkoy3KnnjFBP-sCAepw8_eENqqfVOvdQ5TDmqByj17cb55G77G11j1jbUPNqCbq2oTUpKwdbcj8O_qsz-T8uDz-D8BxuwHg5ng=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ABLRmRUrLBAz3qmJ5Y9_7xnARtBtAWXfMerBLrcxLlPyB0STtk0z29IBvFpanozdG27FEvKDjWGQ1E1IRLsdyTygQxnYp7siXd5Fw_Ka_oUm3YN5sBKZLUQwWtKtWS0MAx65v8w=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Fc2NXquWzQIA--lCe2Fxf6cSImU5bK44fL-f7qONvDw7tX3QsFm5CTxrN0XyA0Pr2hyrJwZ89gd1Rko-xtSir0pTqnNIr_Q0yx5U76J05rl6WYpIfM3aTrFOCnVeYTGWScciCXg=w91-h95-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Caso de Estudio: Pizzería de Venta en Mostrador
U n a pizzería de la ciudad ofrece a sus clientes una amplia variedad de pizzas de fabricación propia, que vende en mostrador. El dueño de la pizzería ha solicitado la construcción de un sistema informático que ayude a la comercialización de sus productos. Se describe a continuación las características del negocio a las que se deberá dar soporte:
Administración de las pizzas para la venta:
o Las pizzas que venden son de dos tipos: a la piedra y de molde.
o Las pizzas pueden tener varios tamaños (4, 8, 10 y 12 porciones).
o Existen variedades de pizza en función de los ingredientes que se utilizan para prepararlas, de las que sólo se requiere la descripción para informar a los clientes que ingredientes tiene una pizza en particular.
o El precio de las pizzas depende de la variedad, el tipo y el tamaño.
Gestión de pedidos de los clientes y su facturación y cobro.
o Se registran los pedidos que los clientes realizan en el mostrador, informando, el nombre del cliente (para llamarlo cuando el pedido esté listo), la fecha y hora de creación, la cantidad de pizzas de cada variedad, tipo y tamaño. Por ejemplo: 2 pizzas de molde de 8 porciones de jamón y morrones y 1 pizza a la piedra de 4 porciones de palmitos). El pedido tiene un total para cada ítem y un total del pedido.
o Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.
o Cuando el maestro pizzero va a iniciar la preparación del pedido debe informarlo actualizando el estado, también debe informar que el pedido está preparado para que se lo pueda entregar al cliente y facturarlo.
o Un pedido puede cancelarse inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.
o Cuando el pedido está preparado se genera una factura para su cobro y se entrega la o las pizzas al cliente.
o En el momento de la entrega se registra la hora de entrega y se cierra el pedido. Cuando el cliente paga se actualizada el estado de la factura a cobrada.
o Es necesario poder anular la factura en caso de que así se requiera.
Generación y emisión de reportes de:
o Variedades y tipos de pizzas más pedidas por los clientes.
o Ingresos (recaudaciones) por períodos de tiempo.
o Pedidos (cantidad y monto) por día de la semana.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05AgynJGcMGod1mPouSd93YlAch6cuX8JKYAAQPva05YMVmv95qYlIqZm5yRm1LNWQylRwJdOu-pKVP9qXiXhFjW8TCOgKb2tMimzqaheGr8HhtzwRQ6XJPBDLjUWJkMHrCJszqA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HgMJqvKpvcuPgZ2bhHHOj49gRRJ3XCXFX3nZagP8wNtvIrALLpeT3QNCEtHo81bSfWNEhWRC6w8SMVMxqYtS-sZ5J8tChKC3_P7Rhx07ZYW0XE980LGYzXGHyQa5DFpFJDWaWDA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RIbMrKdC_GduxUxrjQxrwiCgqxzcnqgxmHbcmSJ-RKpjx3xpR8n1-GCCytGnaCPWFiPvhtOWbqjsK9vxekrKNtit6IJ_N9FxTlJ5SYZ1C2z4TfSyVKU9HW1UzYPe7-UY_4C_I=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CsOrsgXggT4lKe-B3D1a4YpzUcP4OL4Es0E2EImkhne2PUHUH5bnHb8udSIfhLaUvS_vZyepNVHg9Dfq56EYgvsvw0lHR6NKGu1IHCNTnfNjjAQNZ7frAKOuwYWabdMDyjMse=w91-h95-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Se pide:
1. Definir el sistema de información utilizando: objetivo, alcances y reglas de negocio.
2. Construir el Modelo de Dominio utilizando un diagrama de clases, especificando atributos y métodos para las clases y navegabilidad y multiplicidad para las relaciones.
3. Construir la vista esencial de la funcionalidad, utilizando un diagrama de casos de uso, describiendo el objetivo de cada caso de uso identificado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1V2CXJWf_u413-KpDQth2QiIfNgnSSXvbFsW1kodH2Be9yT5VHW1llIW-rK5iJLni9Yh_8D3fq1pDjirzLCvMSKGZkpN4_--DFAl-8YMfdyFCjRDzIIo8885RhtaH5dE49ekJVxw=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Mzozno8uWaBWCIAjO1d76qciTIe37si8yvdxGwHTynCxwCpfZDTB-4JzjoWRHAvLK9lfB-veBEOO4tcXOA5Qhql8n_kRUZxhfRpBhHlVtDTK-7M_PEp5c9BD99aKmwwKT960mUw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3szSdfj2kz7RCJHTP5LbsM4is-ivd1syDuSB5kdrhiktRiJNOJwGTj1sQSg7Lm46fKjOYCLI9fR7Yv2lLnPOsiaKZpiPuudWQBa14A6EapV4zxvz-Yh4QaKt6JdLV2RzDwgHc-5Q=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_obOVdbalkwoQ_sPSTGzZbJiLuHPzwj5D80DWaoJ-proGS7smw-N5Rj5-4P67bOQfETlaDaIZPcj-lLK-dJ9h3O-Sj4N2WL9dVJNWAMv2jSFfK7-ZxJwhQTma64tedzGT110CeQ=w91-h95-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Solución propuesta: Objetivo:
Administrar los pedidos de venta de pizza y el cobro de estos, brindar información resultante de la gestión.
Alcances o Requerimientos Globales:
Administrar pizzas con sus precios
Administrar variedades, tamaños, y tipos de pizzas
Gestionar pedidos de pizzas
Gestionar la facturación de los pedidos y el cobro
Generar reportes relacionas con la venta de pizzas. Reglas de Negocio
Reglas de Negocio para el Sistema de Pizzería de Venta en Mostrador
Precio de las pizzas El precio de las pizzas depende de la variedad, el tipo y el tamaño.
Creación del Pedido. Se registran los pedidos que los clientes realizan en el mostrador, informando, el nombre del cliente (para llamarlo cuando el pedido esté listo), la fecha y hora de creación, la cantidad de pizzas de cada variedad, tipo y tamaño. Por ejemplo: 2 pizzas de molde de 8 porciones de jamón y morrones y 1 pizza a la piedra de 4 porciones de palmitos).
Modificación de un pedido
Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.
Cancelación de un pedido
Un pedido pueden cancelarse inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.
Cierre y Facturación del Pedido.
En el momento de la entrega se registra la hora de entrega y se cierra el pedido. Cuando el pedido está preparado se genera una factura para su cobro y se entrega la o las pizzas al cliente.
Cobro Cuando el cliente paga se actualizada el estado de la factura a cobrada.
Anulación de Factura Se debe poder anular la factura en caso de que así se requiera.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19gQoTStoEzAFf0TBcNzNo7xEPQASnxNoLMvnkGX3OUnGUj7CCvbKvFVuNBYiXMckNtKJV231MrIw4R3xoX6rbH9GaqML64PL1Zck5d8CY-2bRVJTU0l79aSC6kzYb83TAKSOAJA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20k1Mj18QMR3JzbPi9odEKyS0Cj0-Y9SfZ0g6xC8gA0M9QP4y2DCDqrd0Ap7SpIM1UHyBzKcQFM8ocOTFd6catVp1oMEUK4gKyqyK_hHtJ8LxMzbgYunI7taRfBjNl2atBS7TQYA=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3RegDJZ6TumgnSfWY8RU4vCxgU3NlEapWCr1k304daqrCGsOLsTIJg0oan7M-i6zx6XuivXuPvCNRVHgKC9kvKzBnHNQvDy8Z6paD2mEUn8ZVZbcf_ADuIwWHU3rA0jTAvrvb_=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Vk5crmqZgLwllrPJZso5twxlALtTD0gsxol82JQL453DUIm8e_thHuL03KvV0l1PqLJRhvjeGtep1saQLyvfwqjgMDEN4AJTqXWkvxOMdMkzJ_mnsOd8juluhBlxJ6rrc0_9BMQ=w91-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2RLlp0Jf3aC632ZtyMV-oEkh7hwm5-KZkdU5u8Bqidctq46_aDurArfqeFPy2DXRxquzAa2d-Wi4F7lsxjzzVSvNcAptLUUyOIR_arcym_qkHHyYglgR9xpKaweihJ-jBE1g6E=w1280-h1011-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Modelo de Dominio
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv27lu1SYDcTiH_z18XXpmE3PGzsobJUkO8RzbCOEZ0k36-61vxMASFZUdNOQH1cbfmbnViaQ4OCsDMzaY3_aCc7ukdqhikCRsCZcTLrNh4_VBcF77o-mCtGvMlAeC7AsQnrlMIPIA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26VfaQSOx1N5LYzPN7pkrVrdjKKGdNc_MX6DDyFr6zZnVgbgrr3bLGihdQXbxqI0pYl5t_RX23VeKMTs2TLjjVafnfyQ1UdUkUUyc_3hi4jFbyA0PxGv1HqrC52gSqdcQY3kcPmQ=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3e9hdTtIDQcMot_gpQWYhwKMldBtcvvIadRaL4Aia7nfe4hovpwGwDVjp0nEMD4sm130L4vs_CDkkoaxi9g3gzSJfoJK8lt7yR9IHTNmCI5PVhaoicwyLDHq_5YXMX2HC6oCErag=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WUt4BI8wf1-CY3nAQtgbQrKlkLQ08mTFj2TIKHVNWER2367l_3GXsejtlg_tjZjdjj_9k2EKreJok1-8jwEcFstl1i6GgRSSPYTT2hPvlAr-m9yhJswPORTTlqDsHdV5kQHO5mA=w91-h95-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Diagrama de Casos de Uso: Vista Esencial
uc Primary Use Cases
EmpleadoPizzería
Administrador
10 Registrar Pedido
1 Generar Factura
2 Registrar Pizza
3 Registrar Variedad de
Pizza
4 Registrar Tamaño
5 Generar reporte de pizzas más demandadas
6 Generar reporte de ventas por día de la
semana
7 Generar reporte de ingresos por período
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2htXtGalywU3Zpnb6xL5WSsn67ZPxxp8yISOY62DxzYIMO9M_jGgcF937-HyLyHd-IN6iQj1oEPjoVexVboiahJJwk-PnE-19e2MAY0wIj-GFuE5xGayW7BgyFt0NmRDu2ZYP-DQ=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jMosQlXwZaSwHLlE-RwiIK7Fe62PWd6J4Mqqu4r5kIFnYUhvge23zsVYZVWhKzPkO68ZN9v4aE82vumoCJBwZXl1anLoT-TjpeRZzwReFhRjMwO25ZtneHGznk-T0TplRUVEbdw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ico1bniSJQu8qDP0r65CONqndkhN5BhvDT62PjGDoD_-0TcGBnQgHDhZeVF9cKumB4-IgUjBZdB2n3dOsHeYOIT_oQr5S2f02izTD4mMhsB9MY8ZFSy22zdhSKa8AN2mlin1nTA=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eskK_Zr044fYgt35mDzdyKq6MUpJpwb7TgcySzumMNra88TtyuOQ24bIBjr_C8JpBEAZIL1YHRKFHBudRAFKaHUWZH6GwEWZdFimZmPrm82Z1ywGKLpiJk7MPopjEzauyhMg=w91-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gRZ4ffMflLDM_va4vz3_bwaeXx6WXOoy5ztKILLo8SYxYyrTzCf1fiH0sbh7lqlcKIMHKHnxCQ-BNK_E75_wvtTq4t5nolAzTOOWF0canp94IP01I-7gPxelVoZogMrosSFoEow=w1280-h490-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WqpTKuGCLOAF0B68qYerBMwVbSvidDyVgR_V7a943OmYBMvolbB_CgVhF5ye9ELZi5kSLBtyYeNhjEvEuMGZKSCYptep6mgSlhFOWzfqs4OsPqkpWG1YWLL6jWbK1tPGsxuWo6w=w1280-h526-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
Máquina de estados del Pedido
Máquina de estados del Detalle de Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2rWdqYACCNuoEOTykW8kKEwM_SkAsBv7ZJlR4biVhsUBnzKLIAEMmTVufuTuXJt_6ELR7FHAnsb3PSGCqkcjA9_6Pq7aTaU5BfQbYiJV0PFu43I0id7NMBnOBoo-cjZxOvljv_9Q=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vVuKYsOu0N_nzLVH_lKQJIIxotUUrkV71hd3Sz0bMcLZjUi8EHlSdWWpM6y80fEdQ7ss4kIUvnYA2o_GifsLKDxx7p7HLkIgDVaxCm04P-k0MFHzreSj4wF0g3yvDHtCF9bInVw=w163-h170-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0lsON4vB80MCp5XVQ_5xfuuxW52MjW3EEp-PHZKO8I505LBGuWzg7v971qn8b3kkzSwe6KtcKAkME0hTb5iqWlKP8SoTPoBX9GIlb2EdQQ3_giKuw9OfQFzLQehhptlxXKy7Xdhg=w188-h235-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_UwGST2f6zQHgB6mU0G7VbIlI-9IdNHJ-qMYI-Sr6nFh7MuFZaIZE4wjeUiLqw5d4vyeKpIUq-pVbLocA6U9fELzCNugglusD0CsnZ2xXkg_SjWvEdC8mlD9GIZBA_UdeLV4M=w91-h95-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WSGjWAIn_h6195pwzZDkdK0HeBQhA31EQuS0xIUDdWfZVGJv-uZF_5fSyrWSwfwcbz88oUVF3b7_d-0Txt5QC8rpHWDqryZFWH0kAOzA7YCE3gIIERnQWqffO08AOQHWHndTy=w1280-h725-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv26bJ-k-rqwtLmD09oy8rOXrS64uIBALINp5RoyNibc32ck2vGPf245b985d5CL8uF_b8XSSU-XjXD7kpZ4D9pUeywiq4bfdbVHbZbR9tw-dmu7GeVYabcP4NDr9YQAxfvXuSmj=w1280-h726-v0?authuser=0)
Diseño de Sistemas de Información Caso de Estudio:
Pizzería de Venta en Mostrador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2F38fdJS0m94OaCWnIU1x-XId5Rbf3ALU-7eDhgV9OSR8OWEA2AFJRD1QVStuenQl-Fk6qpZX82CnLjWpiVn3eUc46a10MfK3oY5ffGsWXJIJn03WH9QvSMdRPOWOp1reTOXyX=w839-h1187-v0?authuser=0)
