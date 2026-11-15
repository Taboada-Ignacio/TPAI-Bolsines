---
id: DSI-U2-PERSISTENCIA
titulo: Diseño de Persistencia y Mapeo Objeto-Relacional (ORM, Repositorios y Herencia)
tipo: teoria
unidad: Unidad 2
categoria: Diseño
tags: [persistencia, orm, repository, dao, tph, tpt, tpc, materializacion, desmaterializacion]
conectado_con: [DSI-00-CONVENCIONES, DSI-U2-PRINCIPIOS-SOLID, DSI-U2-COMPONENTES, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-U2-PRINCIPIOS-SOLID]
---

# Diseño de Persistencia en DSI

Basado en `14 Diseño de Persistencia.pdf` de la cátedra DSI (Judith Meles). Aborda la brecha (*impedance mismatch*) entre el paradigma Orientado a Objetos (herencia, polimorfismo, referencias en memoria) y las Bases de Datos Relacionales (tablas, filas, claves primarias/foráneas).

## 1. Conceptos Fundamentales
- **Materialización**: Proceso de leer registros desde la base de datos relacional y reconstruir los grafos de objetos en memoria.
- **Desmaterialización**: Proceso de traducir el estado de los objetos de dominio en memoria a operaciones SQL (`INSERT`, `UPDATE`, `DELETE`) para persistirlos.
- **Identidad de Objeto vs Identidad Relacional**: En OO dos objetos se distinguen por referencia en memoria; en RDBMS por Clave Primaria (OID / PK).

---

## 2. Patrones de Acceso a Datos
1. **DAO (Data Access Object)**: Encapsula el acceso a una fuente de datos específica exponiendo operaciones CRUD orientadas a la tabla/entidad.
2. **Repository (Repositorio)**: Media entre el dominio y la capa de mapeo de datos ofreciendo una interfaz con semántica de colección en memoria (ej. `BolsinRepository.buscarEnviadosPorCMOrigen(cmId)`), manteniendo el dominio agnóstico del motor SQL/ORM (ej. Prisma en `TPAI-Bolsines`).
3. **Data Mapper**: Capa de mapeadores que transfiere datos bidireccionalmente entre objetos de dominio ricos y la base de datos manteniendo ambos completamente desacoplados (como implementa el schema Prisma + entidades de dominio puras en `TPAI-Bolsines`).
4. **Interfaces en Componentes DSI**: Según las convenciones de cátedra, los componentes de persistencia exponen/utilizan interfaces como `IMaterializacion` y `IDesmaterializacion` (o `IPersistencia...`).

---

## 3. Estrategias de Mapeo de Herencia a Tablas Relacionales

| Estrategia | Nombre | Descripción | Ventajas / Desventajas |
|---|---|---|---|
| **TPH** | *Table Per Hierarchy* (Tabla Única por Jerarquía) | Toda la jerarquía comparte una sola tabla con una columna `discriminador` (`tipo`) y columnas nullables para cada subclase. | Consultas polimórficas rápidas sin `JOIN`s; desperdicio de espacio con `NULL`s. |
| **TPT** | *Table Per Type* (Tabla por Clase / Subtipo) | Una tabla para la superclase y una tabla por cada subclase unidas por PK/FK. | Normalización pura, sin `NULL`s; requiere múltiples `JOIN`s al materializar. |
| **TPC** | *Table Per Concrete Class* (Tabla por Clase Concreta) | Cada clase concreta tiene su tabla con todos sus atributos (propios + heredados). | Sin `JOIN`s para consultas concretas; consultas polimórficas requieren `UNION`. |

---

## 4. Aplicación en el PPAI Bolsines (`TPAI-Bolsines`)
- Motor Relacional: **PostgreSQL** (con requerimiento **RNF 2 & RNF 3**: Database Mirroring en Amazon AWS RDS).
- Schema mapeado en [`schema.prisma`](../../../TPAI-Bolsines/prisma/schema.prisma):
  - `usuario`, `sesion`, `empleado`, `rol`, `comision_medica`, `bolsin`, `cambio_estado_bolsin`, `estado` (con clave única compuesta `[nombre, ambito]` para distinguir estados de `Bolsin`, `Remito`, `Documentacion`).
