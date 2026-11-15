# 2026 09 DSI P2 -Venta Cambalache Solidario Descripción del caso.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

El texto describe los lineamientos de un 
proyecto escolar solidario
 enfocado en la recaudación de fondos a través de una 
plataforma de compra-venta de artículos
. Su propósito principal es gestionar transacciones donde los miembros de la comunidad ofrecen productos nuevos o usados, aportando un porcentaje obligatorio destinado a 
ayudar económicamente a los estudiantes
. Este sistema organiza las ganancias por 
grados escolares específicos
 para asegurar que el dinero recaudado mensualmente se entregue a candidatos seleccionados, limitando a los alumnos a recibir 
un único beneficio anual
. Finalmente, las reglas establecen una 
jerarquía estricta en la distribución del dinero
, permitiendo cubrir gastos generales de la institución únicamente después de haber asignado por completo los fondos correspondientes a los beneficios de cada grado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31ANZo6437gQntReNzYrTINZKSIANQjcN7o1PKO6QFopivqWvmPV0M5a6qCfzpFmu_wwTC3cQJO59u-zoDb2_bZMfAMOZmh3P9MYXJoLBkSapkAaXoNHm7VmIYxcoqbbGhwhvT9w=w131-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gdzyO3bQcWe121EcxIPkHqSX3QMJrVBHdFr_YI8J9UrduDIIWe0oIGPc96u20Lx4BHslHlAWiZkpjlg9l4Z1aYQ9172qPIdgd6R3AWrjcsM9TUXUBCkxZ9-RLTJpduCbsZBA8Kg=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información
Diseño de Sistemas de Información Descripción del Caso de Estudio
26/09/2026
Ciclo lectivo: 2025 – Turnos Todos P á g i n a | 1 F0025-W-201102
DOMINIO: Venta Cambalache Solidario
Glosario
❖ MCC: Miembro de Comisión Cambalache ❖ Participante: persona que participa del proyecto para recaudar fondos, ya sea comprando productos, ofreciendo
productos para vender o cumpliendo ambos roles. 
❖ Compra-Venta de producto: transacción realizada por un comprador que puede incluir la adquisición de uno o
más productos, en una o más unidades por producto a un vendedor que lo ofrece. 
❖ Producto: artículo disponible para la compra-venta, publicado por un vendedor (oferente). ❖ Candidato: persona que se postula para recibir los fondos de un mes. ❖ Beneficio: otorgamiento de la recaudación de un mes asociada a los productos vendidos del grado al que
pertenece el candidato. 
❖ Donación: Porcentaje de dinero que recibe la escuela por la compra-venta de cada producto. Cuál es el porcentaje
específico está definido en las políticas de beneficios. 
❖ Gasto: Compra o servicio a pagar que tiene la escuela, y que puede cubrir con la rendición que no se utilice para
otorgar un beneficio a un candidato de un grado. 
❖ Presupuesto: Conjunto de gastos que tiene la escuela en un mes.
Descripción del Caso Una comunidad educativa ha desarrollado un proyecto para recaudar fondos solidarios que luego otorga a miembros de la comunidad que lo requieran para solventar los gastos para la realización de las actividades pedagógicas como parte de la comunidad. La escuela quiere desarrollar una plataforma de compra-venta solidaria en la que participan familias y miembros de la comunidad educativa ofreciendo productos a la venta. El objetivo del sistema es recaudar fondos solidarios que se donarán en primer término a la escuela; que luego se asignan como beneficios económicos a estudiantes de la escuela, respetando una serie de reglas de negocio claramente definidas.
El producto de software debe permitir gestionar esta recaudación realizada mediante la organización de una compraventa donde cada miembro de la comunidad y otras personas ofrecen sus productos, nuevos o usados, otra persona los compra y un porcentaje de la venta se dona y se va conformando el fondo solidario.
Los participantes que venden productos deben darlo de alta en una publicación, indicando el porcentaje de la venta que será donado al fondo solidario de la escuela. Dicho porcentaje debe cumplir con una política vigente que establece un porcentaje mínimo de donación según el rango de precios del producto ofrecido.
Cada producto publicado debe estar asociado a un grado específico de la escuela, ya que el monto solidario recaudado por su venta se acumula para ese grado en particular. Una venta puede incluir uno o varios productos, y cada producto involucrado puede beneficiar a grados distintos, por lo que el sistema debe ser capaz de distribuir correctamente los montos recaudados por grado, aun dentro de una misma operación de venta.
Mensualmente, el total recaudado por cada grado se utiliza para otorgar el beneficio a uno de los candidatos pertenecientes a ese grado, siempre que cumpla las condiciones establecidas.
Finalmente, una vez asignados los beneficios mensuales a los candidatos correspondientes, el saldo restante en el fondo solidario, si hubiera, puede ser destinado a cubrir gastos generales de la escuela. Bajo ninguna circunstancia se deben distribuir fondos a gastos antes de haber realizado la asignación de beneficios, lo que obliga al sistema a respetar un orden estricto en la distribución de los montos recaudados.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A4Xh8SDblqCuQsf9-sM578qRXEJO5LZj7qhrZ3RW_q5DHylZmZIY6Z8fg4STbtrMNIvS5gW9ihb6D2RCcRlgNnT_NGAtJbLEzR2UxKqBNmuF0PVb-NEJ1X_wc-p9Z2xTk4Udjjg=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JfuhAHpYQF_8aMxxLJ59kO8V373UTL8AXPSYGL0_PCmcHNG15DwvCqykJROzIpsgXZKPR1QqLUAcEZqcSD1gjNJev7-4VNry3Kp_7Db5k8vPRhpQoO4ZYj2rLv9BkNg6lHLHN8g=w131-h177-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UthD1KDoWSY3gEZ5rQEY3Cuj8-u0X73mKakJYRAaOD8fizFq23behIT8e8Q_LZ3bpA3REw3GoSlZhibMrEj73_BPOT8T2F692raP4LgGfddfWTQhw4nRA7Kyw16iFILj5PBg6=w41-h51-v0?authuser=0)
Universidad Tecnológica Nacional Facultad Regional Córdoba
Ing. en Sistemas de Información
Diseño de Sistemas de Información Examen Final
03/03/2026
Algunas Reglas de Negocio para la aplicación de Venta de Cambalache Solidario
Nombre de la RN Descripción de la RN
Candidatura a Beneficio Un candidato puede postularse varios meses en el año para recibir el beneficio, pero sólo 
podrá recibir un solo beneficio por año.
Política de venta Cuando un producto se da de alta para poner a la venta, el participante vendedor deberá 
indicar el porcentaje de la venta que donará al fondo solidario. Este porcentaje debe cumplir el mínimo definido en la política vigente. Una política define un porcentaje mínimo para un rango de precios ofrecido de un producto. De este modo, los productos de menor valor donan un porcentaje mayor que aquellos de mayor valor, garantizando equidad en las donaciones.
Rango de precios Porcentaje mínimo de donación
Hasta $20.000 15%
Mayor a $20.000 hasta $100.000 12%
Mayor a $100.000 10%
Otorgamiento de beneficio por grado
Las ventas recaudadas en un mes se distribuyen por los distintos grados de la escuela, en función a los productos que se vendieron en nombre de cada grado. Ese acumulado es el que se puede otorgar a uno de los candidatos del grado correspondiente.
Identificación de grado para cada producto
Cada producto debe identificar a qué grado beneficia si se realiza la venta del producto, momento en que el porcentaje correspondiente se asignará a dicho grado para poder ser entregado a un candidato.
Compra-Venta de Productos Una compra-venta puede ser por una o más unidades de uno o más productos, donde cada 
producto puede tener identificado un grado diferente.
Distribución de ventas a beneficiarios
Mensualmente, el total recaudado por cada grado se utilizará para otorgar el beneficio a uno de los candidatos pertenecientes a ese grado, siempre que cumpla las condiciones establecidas. Finalmente, una vez asignados los beneficios mensuales a los candidatos correspondientes, el saldo restante en el fondo solidario, puede ser destinado a cubrir gastos generales de la escuela. Bajo ninguna circunstancia se deben distribuir fondos a gastos antes de haber realizado la asignación de beneficios, lo que obliga a respetar un orden estricto en la distribución de los montos recaudados.
Distribución de ventas a gastos Luego de haber asignado montos a beneficios, si queda dinero se distribuirá el saldo de las 
donaciones recibidas por las ventas a gastos según la prioridad establecida en el presupuesto del mes.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TvlQCMM2nvk30SMozzibtCqnrZXgvfAEoCahKVKtzKNP-wNQVrlIcXmbVgTIoFimKbvg7g3oUowoEvlJdhGYky4RnHmJZtcOivpGsDlFnhKtw5n0b7L0AvBQrXw589zqe6XmAcQ=w839-h1187-v0?authuser=0)
