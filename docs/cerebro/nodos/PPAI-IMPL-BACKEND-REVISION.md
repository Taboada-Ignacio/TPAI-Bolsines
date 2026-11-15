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

- CRUD de Empleado, creación automática de Usuario al registrar un Empleado e inicio de sesión.
- Repositorio específico de Bolsín, `GestorSeguimientoBolsines` y endpoints del CU 36.
- Adaptadores GPS e integración con Google Maps.
- Notificación de ubicación por correo (CU 30/31).
