---
id: PPAI-IMPL-BACKEND-REVISION
titulo: Revisión Técnica Backend (feature/backend) y Ajustes Pendientes
tipo: arquitectura
unidad: PPAI
categoria: Implementacion
tags: [backend, nextjs, prisma, revision, cu36, ppai, tracking, nacho]
conectado_con: [PPAI-CU-36, PPAI-CU-30, PPAI-DOM-BOLSIN, PPAI-PAT-ADAPTER-GPS, DSI-U3-ARQ-MONOLITICA]
depende_de: [PPAI-CU-36, PPAI-DOM-BOLSIN, PPAI-PAT-ADAPTER-GPS]
---

# Revisión Técnica Backend (`feature/backend` — TPAI-Bolsines)

Registro compartido del estado de implementación del backend en el repositorio `Taboada-Ignacio/TPAI-Bolsines` (rama `feature/backend`) y los puntos de mejora/alineación detectados frente al diseño del segundo cerebro.

---

## 1. Stack y Arquitectura Confirmada

- **Framework / API:** Next.js `16.4.6` (`latest` estable) con App Router y Route Handlers (`src/app/api`).
- **Frontend:** React `19.3.1`, TypeScript `5.9.3` (strict).
- **Persistencia:** PostgreSQL `17.12-bookworm` + Prisma ORM `7.10.1` (`@prisma/adapter-pg` + `pg`).
- **Validación de contratos:** Zod `4.6.7` (`src/dtos/`).
- **Testing y calidad:** Vitest `^5.1.0`, ESLint `9.39.5`, Prettier `3.10.1`.
- **Contenedores:** Docker + Docker Compose (`postgres`, servicio `migrate`, `backend`).

La separación en capas (`domain`, `services`, `infrastructure`, `adapters`, `dtos`, `app/api`) es acorde al estilo monolítico en capas de DSI y mantiene el dominio desacoplado de Prisma y Next.js.

---

## 2. Lo Ya Implementado (Commits hasta `f82d933`)

- [x] Estructura base del proyecto, Docker Compose y migraciones automáticas.
- [x] Endpoint técnico `GET /api/health` + DTO Zod + test unitario (`tests/health.test.ts`).
- [x] Entidades del dominio en `src/domain/`: `Usuario`, `Sesion`, `Empleado`, `Rol`, `ComisionMedica`, `Bolsin`, `CambioEstadoBolsin`, `Estado` + 9 tests unitarios (`tests/domain.test.ts`).
- [x] Esquema relacional en `prisma/schema.prisma` (8 tablas `snake_case`, `ON DELETE RESTRICT`, índices y unicidades) y migración inicial `20261114202500_init_domain_entities`.
- [x] Singleton de Prisma Client en `src/infrastructure/prisma.ts`.

---

### [NACHO] Avances posteriores

- CRUD completos de Rol, Comisión Médica y Estado. Cada catálogo permite crear, listar, consultar por ID, modificar y eliminar mediante su API REST.
- Carga automática de `prisma/seeds/init.sql` después de las migraciones y de la verificación del esquema, antes de iniciar Next.js. Incluye cuatro roles, cinco estados del bolsín y veinticuatro comisiones médicas ficticias.

## 3. [NACHO] Decisiones definitivas P1–P5

### [NACHO] P1 — Pendiente por decisión de diseño

La primera etapa se concentró en representar el diagrama de clases de análisis con atributos privados, constructores, getters, setters y asociaciones. Esta estructura es intencional y adecuada para esa etapa. Se postergan `estaEnviado()`, `obtenerEstadoActual()`, `obtenerUltimoCambioEstado()`, la validación de multiplicidad `1..*` del historial y el patrón State.

### [NACHO] P2 — Resuelto: conservar Int

La descripción del caso define un dispositivo físico numerado, la ERS no especifica un formato alfanumérico y el diagrama de clases de análisis declara `numeroPrecinto: Int`. Se conserva `number` en TypeScript e `Int` en Prisma, obligatorio y no nullable. El CU 36 consulta bolsines ya despachados con precinto asignado. Registrar, cerrar (CU 39), reabrir (CU 40) y eliminar bolsines quedan fuera de este alcance.

### [NACHO] P3 — Selección del modelo GPS definida, implementación pendiente

Se podrá seleccionar uno de los tres modelos de GPS Tracker para cada bolsín. El modelo determinará qué Adapter utilizar. Cada Adapter convertirá el formato externo a una representación común para el CU 36.

| Modelo | Operación externa | Formato |
| --- | --- | --- |
| XTR-4500L | `getBolsinLocation()` | JSON |
| NavTrack QX-7A | `retrieveTrackingData()` | CSV |
| GeoPulse MTR-900 | `fetchCargoPositions()` | Matriz bidimensional |

Quedan por definir la persistencia de la selección, el uso de una entidad o un enum, la configuración de las conexiones y la factoría.

### [NACHO] P4 — Fuera del alcance del trabajo práctico

La seguridad adicional de credenciales queda fuera del alcance académico. Argon2, bcrypt, hash de contraseñas, JWT y mecanismos adicionales de autorización o endurecimiento quedan fuera de los requisitos para completar el CU 36. El alcance académico comprende el seguimiento de bolsines, el patrón Adapter, la separación de responsabilidades, GRASP, SOLID, la persistencia y la integración entre componentes.

### [NACHO] P5 — Implementación del CU 36 pendiente

El desarrollo continúa por etapas. A partir de la infraestructura, el dominio, la persistencia, los CRUD de catálogos y la carga inicial descritos en la sección 2, quedan pendientes:

- Repositorio específico de Bolsín, `GestorSeguimientoBolsines` y endpoints del CU 36.
- Adaptadores GPS e integración con Google Maps.
- Notificación de ubicación por correo (CU 30/31).

### [NACHO] CRUD de Empleado

El CRUD de Empleado incorpora el alta atómica del Usuario asociado y la asignación de un Rol y una Comisión Médica existentes. La modificación conserva el Usuario. La eliminación borra ambos registros en una transacción, salvo que una restricción referencial impida la operación. Las respuestas excluyen la contraseña. Los cinco endpoints se verificaron con Vitest y Prisma simulado.

### [NACHO] Empleados de demostración y prueba transaccional

El seed incorpora cuatro empleados ficticios, uno por rol, con sus cuatro usuarios. Usa el correo de demostración del empleado para conservar los registros existentes en ejecuciones sucesivas. La idempotencia y la reversión real del DELETE ante una sesión vinculada quedan pendientes de ejecución en PostgreSQL. Docker Desktop denegó el acceso al motor Linux. El script `scripts/Test-EmpleadoSeed.ps1` reproduce ambas verificaciones y limpia los registros temporales de la prueba.

### [NACHO] CRUD técnico de Bolsín

Se incorporaron cinco endpoints REST para preparar bolsines ficticios para las futuras pruebas del CU 36. El alta crea atómicamente el bolsín y su cambio de estado inicial a partir de un estado existente del ámbito `BOLSIN`. La consulta por ID muestra el historial. La edición conserva ese historial y la baja elimina explícitamente los cambios del bolsín dentro de la misma transacción.

El ciclo de vida, el patrón State, el seguimiento GPS y los casos de uso de armado, cierre y recepción siguen pendientes. El CRUD se limita a la preparación de datos ficticios.

### [NACHO] Carga inicial de bolsines ficticios

`prisma/seeds/init.sql` define 35 bolsines de demostración, siete por cada estado del ámbito `BOLSIN`. Resuelve las comisiones por código, los responsables por email y los estados por nombre y ámbito. Cada inserción nueva crea un único cambio abierto dentro de la transacción del seed. Las claves existentes y sus historiales se conservan en ejecuciones sucesivas. Esta carga no implementa lógica de transiciones.

### [NACHO] Inicio de sesión académico y nombre de usuario único

`Usuario.nombre` identifica al usuario de forma única. La migración comprueba duplicados sin modificar nombres existentes, y el alta de Empleado mantiene su escritura atómica y devuelve `409` ante un nombre repetido. `Sesion.getUsuario()` conserva su asociación. `Empleado.esTuUsuario()` compara el nombre único.

Los endpoints `login`, `me` y `logout` usan una cookie HTTP-only firmada y sesiones persistidas. El cierre conserva el historial. El almacenamiento académico de contraseñas queda sujeto a P4. La implementación específica del CU 36 continúa pendiente.

### [NACHO] Método Empleado.obtenerCM()

`Empleado.obtenerCM()` devuelve el nombre y la dirección de su Comisión Médica, separados por ` - `. Reutiliza `getNombre()` y `getDireccion()` de la comisión asociada, sin consultas de persistencia. El gestor del CU 36 lo invocará sobre el empleado logueado.

### [NACHO] Consultas de dominio para bolsines enviados

Como avance parcial de P1, `Bolsin.esCMOrigenIgualCMLogueado()` compara el código único de origen y `buscarEstadoActualBolsin()` consulta `CambioEstadoBolsin.sosActual()` para identificar un único cambio sin fecha de fin. La ausencia se representa con `null` y varios cambios vigentes generan un error. `CambioEstadoBolsin` delega `esAmbitoBolsin()` y `esEnviado()` a `Estado`, que comprueba ambos criterios por separado. El gestor del CU 36 queda pendiente.

### [NACHO] Consultas de dominio para identificar al gerente de destino

`Empleado.esTuCM()` compara el código de la comisión asociada con el de destino. `Empleado.sosGCM()` delega en `Rol.esGCM()`, que reconoce el nombre exacto `Gerente de Comisión Médica`. Estas consultas son independientes y preparan la selección del gerente por el futuro gestor del CU 36.
