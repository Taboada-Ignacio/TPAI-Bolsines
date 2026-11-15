# DSI 2026 Parcial 1 - CreditIn - Caso de estudio.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este documento presenta un caso de estudio académico sobre 
CreditIn
, una entidad financiera dedicada a la gestión de 
préstamos y créditos
 para clientes registrados. El texto detalla los componentes esenciales del sistema, abarcando desde el 
proceso de solicitud y acreditación
 de fondos hasta la estructuración de la deuda en 
cuotas mensuales
. Se pone un énfasis particular en el manejo del incumplimiento mediante el cálculo de 
recargos por mora
 y la posibilidad de negociar 
planes de pago
 que incluyan la condonación de intereses. En última instancia, la fuente funciona como una base lógica para diseñar un sistema de información que regule la interacción entre los distintos 
tipos de préstamos
, los medios de pago y los acuerdos de cancelación.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03ry32sizyCZ6qu4O0PNAgYXi-MKIX--WO1cTZd3pX_s5cCxXd7FtrWFECxdKllM1LZf5vMszIUAQwQOOn2EWMXTYnMhaZKSeRFR-OG7usEwY4jr7zVCyV0l4cWUWmPhWu8xl_=w144-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kW29kEAf6EREoZUWw6ab-7aaWy4N-TG2hym9JNbiXJTLSZbYJqpOfuCuUSrF0y3W6fF1o4ZSBHkcIyOU58VQQnl4S1OayLWWJMQP-HymgMIcj4m1NwjxHh7sOUQ-xYflUR7AS5Q=w41-h51-v0?authuser=0)
Facultad Regional Córdoba
Ing. en Sistemas de Información
PRIMER PARCIAL DESCRIPCIÓN DE CASO DE ESTUDIO
Dominio: CreditIn Sistema de Gestión de Préstamos
Glosario ▪ Acreditación: momento en el cual el cliente puede disponer de los fondos otorgados por el préstamo. ▪ Cliente: persona que solicita y/o posee uno o más préstamos otorgados por la empresa. ▪ Condonamiento: es la reducción o eliminación parcial o total de una deuda, generalmente aplicada sobre los
intereses, como parte de un acuerdo entre la empresa y el cliente para facilitar su cancelación. ▪ Cuota: obligación de pago en la que se divide un préstamo. ▪ Mora: situación en la que se encuentra un préstamo cuando alguna de sus cuotas no ha sido abonada en término. ▪ Plan de Pago: acuerdo de cancelación asociado a un préstamo que establece condiciones particulares para el pago
de una o más cuotas. ▪ Préstamo: es el otorgamiento de una suma de dinero a un cliente, quien se compromete a devolverla en cuotas en
un período determinado bajo ciertas condiciones financieras. ▪ Recargo: importe adicional que se genera sobre una cuota vencida. ▪ Tasa de interés: es el porcentaje que se aplica sobre el dinero prestado y que el cliente debe pagar como costo por
utilizar ese dinero durante un período de tiempo. ▪ Tipo de Préstamo: modalidad de préstamo ofrecida por la empresa que define sus condiciones generales.
Una empresa financiera denominada CreditIn, se dedica al otorgamiento de préstamos. La operatoria de la empresa se basa en la relación con clientes previamente registrados en el sistema.
Clientes Un mismo cliente puede poseer múltiples préstamos asociados a lo largo del tiempo y de manera simultánea. Los clientes pueden registrarse en la página web de la empresa en cualquier momento, deben estar registrados para
poder operar. Para cada cliente se almacenan sus datos personales: nombre, apellido, documento de identidad, correo electrónico y teléfono de contacto.
Préstamos Un préstamo representa el otorgamiento de una suma de dinero a un cliente, quien asume el compromiso de
devolverla en cuotas bajo determinadas condiciones. Un cliente puede solicitar un préstamo. Un equipo financiero contratado por la empresa evalúa el historial crediticio
del cliente, para determinar si es factible prestarle el dinero o no. En caso positivo, el préstamo será acreditado en la cuenta bancaria del cliente.
Existen distintos tipos de préstamos los que representan las modalidades ofrecidas por la empresa, pudiendo diferir en sus condiciones financieras y en la forma en que se gestionan los incumplimientos. CreditIn ofrece préstamos personales, hipotecarios, prendarios, así como préstamos de corto o largo plazo.
Cada tipo de préstamo define un conjunto de características generales.
Cuotas Las cuotas constituyen las obligaciones de pago en las que se divide un préstamo. Para aquellas cuotas que no hayan
sido abonadas en término se registra la cantidad de días de atraso. El incumplimiento de las obligaciones provoca el cálculo de recargos por mora. Según el tipo de préstamo, existe una
definición de mora la cual establece las reglas mediante las cuales se calcularán los recargos en caso de atraso en el pago de las cuotas. El recargo representa el resultado concreto de aplicar las reglas definidas por la definición de mora sobre una cuota determinada.
Por ejemplo, un préstamo personal puede definir una mora del 2% diario sobre el monto de la cuota, de modo que cuanto mayor sea el atraso, mayor será el recargo acumulado. En otro caso, un préstamo podría definir una mora fija de $500 por cada día de atraso, aplicándose dicho importe por cada día que la cuota permanezca impaga.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qOe0uQQdm5cwRBkrhxJ2aEiVDe6ATMkVUhnSbqvKj_a1uaN0s9G5ma6q4sT34EaKjjtYScrMCofT5nOhNQqxAen032SnTpFS0hPOddBABhHsH27WH2cA4PQaypLPn4m9McPHdLA=w839-h1187-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ZvcBNjYGGqOFkK2LhEPgyneCFYepHQsjCr_TOSIFa3XLuU1-4H9k0Jky-jWkYWvNPTV7ml2h85PD3mLOZYbeEnjlz2M03YBBV0pmrPViNgyQQ8hqYRApCYJSzZ4YJi6VSul-2Pg=w144-h144-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28EUdSHeadyf7uqzHqghD4u5EFJdS9j9iNNVyykUbVJYLmGsX4ZDvuDqc7Rjrk1cjJaU5T62ecJ8F6I-LX6KVDUh97A8pQMdoqsRwsUuhEmRew3Pxc6bAPoU5LSX0nj2iGlPSV4g=w41-h51-v0?authuser=0)
Facultad Regional Córdoba
Ing. en Sistemas de Información
PRIMER PARCIAL DESCRIPCIÓN DE CASO DE ESTUDIO
Pago de cuotas Los pagos de una cuota de un préstamo se pueden realizar únicamente en días hábiles, de 9 de la mañana a 8 de la
noche. Cada pago efectuado por un cliente corresponde a una cuota específica y se realiza mediante un único medio de
pago. Los medios de pago representan las distintas formas disponibles para cancelar una cuota, tales como transferencias bancarias o pagos con tarjeta.
El monto abonado podrá incluir los recargos asociados a la cuota al momento de su pago.
Planes de pago Cuando un préstamo alcanza un estado de mora tal que representa un riesgo de incobrabilidad para la empresa, la
empresa podrá proponer al cliente un acuerdo de pago que contemple la reducción o condonamiento de un porcentaje de los intereses adeudados, a cambio de la cancelación de un monto convenido.
Este plan representa un acuerdo que establece condiciones particulares de cancelación, las cuales pueden diferir del esquema de cuotas y fechas originales del préstamo. El plan establece qué cuotas del préstamo forman parte del acuerdo, el monto a abonar y las fechas límite para la cancelación de una o más cuotas del préstamo original.
Por ejemplo, puede establecer que en una fecha determinada se cancelen dos cuotas en conjunto, o que varias cuotas vencidas se abonen en una única instancia bajo nuevas condiciones acordadas. El monto a pagar por una cierta cantidad de cuotas puede diferir del monto original de las cuotas y su recargo, ya que se le perdona o condona al cliente ese porcentaje de intereses.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0RuIBtAGNtOF-FVhx8BvW16k0DeigxmxLt1Mg8iQXogBpamoNUmcid_m4ekl9SSi88My9bhJyLcuFPpjXOp_SbBHJhLb_j9oAAimFRqvghW1S4aIrLrtWujaGBc-xh6skNpKzn8w=w839-h1187-v0?authuser=0)
