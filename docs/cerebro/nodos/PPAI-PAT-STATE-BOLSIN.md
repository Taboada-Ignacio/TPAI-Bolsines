---
id: PPAI-PAT-STATE-BOLSIN
titulo: Aplicación del Patrón State y Trazabilidad CambioEstadoBolsin en el PPAI
tipo: patron-gof
unidad: PPAI
categoria: Diseño
tags: [state, cambio-estado, bolsin, trazabilidad, prisma, domain]
archivos_back:
  - TPAI-Bolsines/src/domain/Bolsin.ts
  - TPAI-Bolsines/src/domain/CambioEstadoBolsin.ts
  - TPAI-Bolsines/src/domain/Estado.ts
  - TPAI-Bolsines/prisma/schema.prisma
modelos_db:
  - Bolsin
  - CambioEstadoBolsin
  - Estado
conectado_con: [DSI-U2-PATRONES-COMPORTAMENTALES, PPAI-DOM-BOLSIN, PPAI-DOM-PRECINTO, PPAI-CU-36]
depende_de: [DSI-U2-PATRONES-COMPORTAMENTALES, PPAI-DOM-BOLSIN]
---

# Patrón State y Trazabilidad (`CambioEstadoBolsin`) en el PPAI Bolsines

## 1. Mapeo con las Reglas de Negocio
La ERS exige que el sistema informe en todo momento en qué estado se encuentra cada bolsín y **qué empleado efectuó cada actualización** (*Regla de Negocio: Trazabilidad de la documentación y del Bolsín*).

En `TPAI-Bolsines`, el modelo de dominio y la base PostgreSQL ya reflejan este historial mediante la tríada:
- `Bolsin` (`src/domain/Bolsin.ts`)
- `CambioEstadoBolsin` (`src/domain/CambioEstadoBolsin.ts`): registra `fechaHoraInicio`, `fechaHoraFin` (null mientras está vigente), `estado` (`Estado`) y `responsableCE` (`Empleado`).
- `Estado` (`src/domain/Estado.ts`): distingue por `[nombre, ambito]` (`ambito = "Bolsin"`).

---

## 2. Cómo se Consulta el Estado Actual en el CU 36
Para el **CU 36 (Paso 3)**: *"Busca los bolsines en estado Enviado cuya CM origen es igual a la CM del usuario logueado"*:
- Un `Bolsin` determina si está en estado `Enviado` consultando su último `CambioEstadoBolsin` vigente (aquel con `fechaHoraFin === null` / `esActual()`) y verificando `estado.esEnviado()` (o a través de la delegación a `estadoActual` si se materializa el patrón State completo).
- Respetando **Experto en Información (GRASP)** y **Tell, Don't Ask**, la responsabilidad de saber si está enviado y pertenece a la CM origen reside en el propio `Bolsin`:
  - `bolsin.estaEnviado(): boolean`
  - `bolsin.esDeCMOrigen(cm: ComisionMedica): boolean`

---

## 3. Justificación de Cátedra para la Evolución del State de Bolsín
1. **Contexto (`Bolsin`)**: Mantiene la referencia a su estado actual y su historial `cambiosEstado[]`, delegando las transiciones (`cerrar()`, `reabrir()`, `retirarPorCorreo()`, `recibir()`, `darDeBaja()`) al objeto de estado vigente.
2. **Abstracción (`EstadoBolsin`)**: Define la interfaz común polimórfica de transición recibiendo al contexto y al empleado responsable.
3. **Estados Concretos (`Creado`, `Cerrado`, `Enviado`, `RecibidoEnDestino`, `DeBaja`)**: Implementan únicamente las transiciones válidas, cierran el `CambioEstadoBolsin` anterior (`setFechaHoraFin(ahora)`), crean el nuevo `CambioEstadoBolsin` con el responsable y actualizan el puntero de estado mediante `bolsin.setEstado(...)`.
