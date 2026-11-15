---
id: PPAI-IMPL-BACKEND-REVISION
titulo: Revisión Técnica Backend (feature/backend) y Ajustes Pendientes
tipo: arquitectura
unidad: PPAI
categoria: Implementacion
tags: [backend, nextjs, prisma, revision, cu36, ppai, tracking]
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

## 3. Cambios y Puntos a Revisar para Nacho (Backend)

### P1 — Evitar modelo de dominio anémico (`src/domain/`)
- **Situación:** Las entidades actuales solo exponen constructor, getters y setters.
- **Acción sugerida:** Incorporar métodos de comportamiento del dominio según GRASP (Experto en la Información), por ejemplo:
  - En `Bolsin`: `estaEnviado()`, `obtenerEstadoActual()`, `obtenerUltimoCambioEstado()`.
  - En `Bolsin`: validar la multiplicidad UML `1..*` de `cambiosEstado` al construir o mutar el historial.
  - En `ComisionMedica` / `Empleado`: helpers de consulta necesarios para `GestorSeguimientoBolsines`.

### P2 — Tipo de dato de `numeroPrecinto`
- **Situación:** En `src/domain/Bolsin.ts` y `prisma/schema.prisma`, `numeroPrecinto` está definido como `number` (`INTEGER`). En `PPAI-DOM-BOLSIN` figura como identificador alfanumérico.
- **Acción sugerida:** Verificar en la ERS oficial si el precinto puede contener letras o ceros a la izquierda; de ser así, migrar a `string` / `TEXT` antes de poblar datos reales.

### P3 — Asociar el modelo de dispositivo GPS al `Bolsin`
- **Situación:** `Bolsin` y `bolsin` todavía no registran qué modelo de GPS Tracker (`XTR-4500L`, `NavTrack QX-7A`, `GeoPulse MTR-900`) tiene asignado el bolsín.
- **Acción sugerida:** Agregar el atributo/relación `dispositivoGPS` (o `modeloGps`) en `Bolsin` y `schema.prisma` para que `GPSTrackerAdapterFactory` pueda instanciar el `IGPSTrackerAdapter` correspondiente sin condicionales hardcodeados en el servicio.

### P4 — Seguridad de credenciales en `Usuario`
- **Situación:** `Usuario` almacena `contrasena: string`.
- **Acción sugerida:** Al implementar el login y la creación de `Sesion`, almacenar siempre hash seguro (ej. `crypto.scrypt` o `argon2`/`bcrypt`) y nunca devolver `contrasena` en DTOs ni respuestas HTTP.

### P5 — Capas pendientes para completar el CU 36 y CU 30/31
- [ ] Repositorios concretos en `src/infrastructure/` que mapeen entre modelos Prisma y entidades de `src/domain/`.
- [ ] Implementación de `IGPSTrackerAdapter`, adaptadores concretos (`XTR4500LAdapter`, `NavTrackQX7AAdapter`, `GeoPulseMTR900Adapter`) y `GPSTrackerAdapterFactory` en `src/adapters/`.
- [ ] `GestorSeguimientoBolsines` en `src/services/` + endpoints del CU 36 en `src/app/api/`.
- [ ] Integración de notificación por email (CU 30/31 — Microsoft Graph o servicio equivalente).

---

## 4. Modo en memoria con `pg-mem` (y cómo desactivarlo para Docker)

Para desarrollar y testear el frontend sin depender de Docker ni de una instancia externa de PostgreSQL, en `feature/frontend` se agregó soporte opcional de PostgreSQL en memoria (`pg-mem`):

- **Archivos:**
  - `src/infrastructure/prisma.ts`: `getPrisma()` revisa `process.env.USE_PG_MEM === "true"`.
  - `src/infrastructure/pg-mem-prisma.ts`: `crearPrismaEnMemoria()` levanta una instancia `pg-mem`, ejecuta el DDL de `prisma/migrations/20261114202500_init_domain_entities/migration.sql` y carga los seeds iniciales (`rol`, `estado`, `comision_medica`, `usuario`, `empleado`).
  - `tests/pg-mem-integration.test.ts`: test de integración que valida tablas, seeds, login, registro y actualización de perfil sobre `pg-mem`.
- **Cómo desactivarlo para correr con Docker + PostgreSQL real (como antes):**
  1. En `.env` (o en el entorno del contenedor), **no definir `USE_PG_MEM`** o dejar **`USE_PG_MEM=false`** (en `docker-compose.yml` no está seteada, así que por defecto ya usa PostgreSQL real).
  2. Asegurar que `DATABASE_URL` apunte al servicio `postgres` (en Docker Compose ya se arma con `DOCKER_DATABASE_URL` / `POSTGRES_*`).
  3. Con `USE_PG_MEM` ausente o distinto de `"true"`, `getPrisma()` instancia `new PrismaClient({ adapter: new PrismaPg({ connectionString }) })` y se conecta normalmente a PostgreSQL.
