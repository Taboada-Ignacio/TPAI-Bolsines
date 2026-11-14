# TPAI Bolsines

Implementación del caso de uso 36 «Consultar seguimiento de bolsines» del Trabajo Práctico Integrador de Diseño de Sistemas de Información, 3.er año de Ingeniería en Sistemas de Información, UTN FRC.

La aplicación ofrece una página de inicio mínima y el endpoint técnico `GET /api/health`. El modelo inicial del dominio del CU 36 está definido en TypeScript.

## Estado de implementación

El trabajo de backend está en `feature/backend`. El alcance actual cubre la estructura en capas, la configuración de desarrollo, el endpoint de salud y las entidades del dominio. El inicio de sesión, las reglas de negocio, las migraciones y la integración externa del CU 36 quedan para etapas posteriores.

### Entidades del CU 36

En `src/domain` se encuentran `Sesion`, `Usuario`, `Empleado`, `Rol`, `ComisionMedica`, `Bolsin`, `CambioEstadoBolsin` y `Estado`. Cada clase declara atributos privados, un constructor y métodos públicos para leer y actualizar sus datos y asociaciones.

`Sesion` referencia a un `Usuario`. `Empleado` referencia a su `Usuario`, su `Rol` y su `ComisionMedica`. `Bolsin` referencia a las comisiones de origen y destino y conserva un historial de `CambioEstadoBolsin`. Cada cambio referencia a un `Estado` y al `Empleado` responsable.

`Bolsin.fecha` usa `Date`. `Sesion.fechaHoraFin` y `CambioEstadoBolsin.fechaHoraFin` aceptan `null` para períodos abiertos. El historial tiene multiplicidad UML `1..*`; el mínimo de un cambio se validará al implementar las reglas de negocio. El constructor, el getter y el setter copian el array del historial para evitar que se modifique por fuera de `Bolsin`.

Las pruebas de `tests/domain.test.ts` se ejecutan con `npm run test:run` y usan las entidades directamente en memoria. Se verificaron `typecheck`, `lint`, `format:check`, `test:run` y `build`. Vitest aprobó las nueve pruebas del dominio y la prueba del endpoint de salud.

### Verificaciones de la inicialización del 14 de noviembre de 2026

| Verificación                                       | Resultado                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entorno local                                      | Node.js 22.14.0 en el PATH y npm 10.9.2. También se encontró Node.js 24.22.1 y se usó directamente para la prueba aislada.                                                                                                                                                                                    |
| Registro npm e instalación                         | `npm.cmd ping --fetch-retries=0` y `npm.cmd install --fetch-retries=0` devolvieron `ENOTFOUND`. `Resolve-DnsName registry.npmjs.org` devolvió «Acceso denegado». npm usa el registro oficial y sus opciones de proxy estaban sin configurar. No se instaló el árbol de dependencias ni se generó el lockfile. |
| Prueba del handler de salud                        | Vitest 5.0.1 pasó 1 prueba desde una copia local previa con el mismo handler, prueba y configuración de Vitest. La prueba comprueba el estado 200, el tipo JSON y el cuerpo mediante invocación directa.                                                                                                      |
| Prisma, TypeScript, ESLint, Prettier y compilación | Pendientes de una instalación completa de dependencias.                                                                                                                                                                                                                                                       |
| Configuración de Docker Compose                    | `docker compose config --quiet` pasó con Compose v2.40.2-desktop.1.                                                                                                                                                                                                                                           |
| Arranque con Docker Compose                        | Pendiente. Se solicitó el inicio de Docker Desktop y el motor Linux siguió inaccesible. `docker info` y `docker compose up --build -d` devolvieron un error por ausencia de `dockerDesktopLinuxEngine`. Los diagnósticos de WSL devolvieron `Wsl/E_ACCESSDENIED`.                                             |
| Verificaciones en ejecución                        | Pendientes el healthcheck de PostgreSQL, la permanencia del backend, la solicitud HTTP a `/api/health` y la consulta `SELECT 1` desde el backend.                                                                                                                                                             |

## Stack y requisitos

- Next.js 16 con App Router y Route Handlers, React 19 y TypeScript estricto.
- PostgreSQL 17.12, Prisma ORM 7.10.1 con `@prisma/adapter-pg` y el driver `pg`.
- Zod para DTOs, ESLint y Prettier para calidad de código, y Vitest para pruebas.
- Docker Desktop en modo de contenedores Linux y Docker Compose v2. Para sincronizar cambios con Compose Watch, se requiere Compose 2.32 o posterior.
- Para ejecutar comandos en el anfitrión, instalá Node.js 24 LTS y npm 10 o posterior. El archivo `.node-version` indica la versión de Node.js usada en Docker.

## Iniciar y detener Docker Compose

Desde la raíz del repositorio, con Docker Desktop iniciado, ejecutá estos comandos en PowerShell. Si todavía falta el lockfile, el segundo comando lo genera antes de construir la imagen.

```powershell
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
if (-not (Test-Path package-lock.json)) {
    npm.cmd install --package-lock-only
    if ($LASTEXITCODE -ne 0) { throw "No se pudo generar package-lock.json." }
}
docker compose up --build -d
docker compose ps
curl.exe --fail-with-body -i http://localhost:3000/api/health
```

El Dockerfile usa `package-lock.json` con `npm ci` para instalar las mismas versiones en cada construcción. Incorporá el lockfile a Git cuando se genere correctamente. Si Next.js todavía está iniciando al consultar el endpoint, mirá `docker compose logs backend` y repetí la consulta cuando esté listo.

El endpoint responde con HTTP 200 y el siguiente JSON cuando Next.js está atendiendo solicitudes. La respuesta verifica la disponibilidad del servidor HTTP.

```json
{
  "status": "ok",
  "application": "TPAI-Bolsines"
}
```

Para recargar en desarrollo cuando guardás cambios, ejecutá `docker compose watch` en otra terminal. Compose sincroniza `src` en el contenedor y Next.js recarga el código. Los cambios en Prisma, su configuración, `package.json` o el lockfile reconstruyen el backend. Cada imagen tiene su propio `node_modules` de Linux.

Para detener ambos servicios, ejecutá `docker compose down`. Los datos de PostgreSQL permanecen en el volumen `postgres_data`.

## Variables de entorno

| Variable              | Uso y valor de ejemplo                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `POSTGRES_USER`       | Usuario de desarrollo. `bolsines`.                                                                                    |
| `POSTGRES_PASSWORD`   | Contraseña de desarrollo. `bolsines_dev`.                                                                             |
| `POSTGRES_DB`         | Nombre de la base de datos. `bolsines`.                                                                               |
| `POSTGRES_PORT`       | Puerto publicado en el anfitrión. `5432`.                                                                             |
| `DATABASE_URL`        | URL para el anfitrión. `postgresql://bolsines:bolsines_dev@127.0.0.1:5432/bolsines`.                                  |
| `DOCKER_DATABASE_URL` | URL interna opcional. Por defecto, Compose la construye con las credenciales de desarrollo y el host `postgres:5432`. |

Si el puerto local 5432 está ocupado, modificá `POSTGRES_PORT` y el puerto de `DATABASE_URL`. Dentro de Docker se sigue usando `postgres:5432`. Si las credenciales contienen caracteres reservados en una URL, codificalos en las cadenas de conexión y mantené su valor original en las variables `POSTGRES_*`. PostgreSQL usa las credenciales y el nombre de la base al inicializar un volumen nuevo.

## PostgreSQL y Prisma

Compose espera a que el healthcheck de PostgreSQL indique que la instancia acepta conexiones TCP antes de iniciar el backend. Para verificar desde el contenedor del backend que resuelve `postgres`, se autentica y puede ejecutar una consulta:

```powershell
docker compose exec backend node -e "const { Client } = require('pg'); const client = new Client({ connectionString: process.env.DATABASE_URL }); (async () => { try { await client.connect(); console.log((await client.query('SELECT 1 AS ok')).rows); } finally { await client.end(); } })().catch((error) => { console.error(error.message); process.exitCode = 1; });"
```

`prisma.config.ts` carga `.env` para los comandos ejecutados en el anfitrión. El esquema inicial solo declara PostgreSQL y el generador. El script `prisma:generate` usa `--allow-no-models` para generar el cliente mientras el esquema está vacío. Docker ejecuta este script durante la construcción y deja el cliente en `prisma/generated`, un directorio excluido de Git. `getPrisma()` crea el cliente cuando se necesita y lo reutiliza durante la recarga en desarrollo.

Cuando incorpores el primer modelo, ejecutá `npm run prisma:migrate:dev -- --name nombre_de_la_migracion` desde el anfitrión con PostgreSQL iniciado. Luego ejecutá `npm run prisma:generate` y guardá en Git los archivos de `prisma/migrations`. Para aplicar migraciones existentes desde Docker, ejecutá `docker compose exec backend npm run prisma:migrate:deploy` con el backend construido a partir del código que las contiene. La ejecución de migraciones es un paso explícito del flujo de trabajo.

## Estructura

| Componente     | Ubicación            | Responsabilidad                                                                                    |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| Controller     | `src/app/api`        | Route Handlers de Next.js. Reciben solicitudes y construyen respuestas HTTP.                       |
| Service        | `src/services`       | Coordina los casos de uso mediante contratos de repositorios e integraciones.                      |
| Domain         | `src/domain`         | Aloja entidades, reglas e interfaces de negocio independientes del framework y de la persistencia. |
| Infrastructure | `src/infrastructure` | Centraliza Prisma Client y aloja las futuras implementaciones de repositorios.                     |
| Adapter        | `src/adapters`       | Aloja los futuros adaptadores GoF para transformar contratos de sistemas externos.                 |
| DTO            | `src/dtos`           | Aloja esquemas Zod y tipos para los contratos HTTP.                                                |

La página mínima y el layout viven en `src/app`. `prisma/` contiene el esquema y alojará las migraciones. `tests/` contiene las pruebas del endpoint y del dominio. El alias `@/*` apunta a `src/*` tanto en Next.js como en Vitest.

## Comandos npm

Para trabajar desde el anfitrión, instalá las dependencias con `npm ci` después de obtener el lockfile. Para levantar únicamente la base de datos, usá `docker compose up -d postgres`. Para arrancar Next.js desde una instalación local nueva, ejecutá `npm run prisma:generate` y luego `npm run dev`.

| Comando                                       | Uso                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `npm run dev`                                 | Inicia Next.js en desarrollo.                                                              |
| `npm run build`                               | Genera Prisma Client y compila Next.js para producción.                                    |
| `npm run start`                               | Sirve la compilación de producción.                                                        |
| `npm run typecheck`                           | Genera Prisma Client y los tipos de Next.js, y comprueba TypeScript sin emitir JavaScript. |
| `npm run lint`                                | Ejecuta ESLint.                                                                            |
| `npm run format`                              | Aplica el formato de Prettier.                                                             |
| `npm run format:check`                        | Comprueba el formato.                                                                      |
| `npm run test`                                | Ejecuta Vitest en modo observación.                                                        |
| `npm run test:run`                            | Ejecuta las pruebas unitarias y termina.                                                   |
| `npm run prisma:validate`                     | Valida el esquema de Prisma.                                                               |
| `npm run prisma:generate`                     | Genera Prisma Client.                                                                      |
| `npm run prisma:migrate:dev -- --name nombre` | Crea y aplica una migración local.                                                         |
| `npm run prisma:migrate:deploy`               | Aplica migraciones existentes.                                                             |

## Verificar la instalación local

Con `.env` y `package-lock.json` disponibles, ejecutá los siguientes comandos en PowerShell. Después, usá los pasos de arranque y la consulta a PostgreSQL de las secciones anteriores para verificar el entorno completo.

```powershell
npm.cmd ci
npm.cmd run prisma:validate
npm.cmd run prisma:generate
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run format:check
npm.cmd run test:run
npm.cmd run build
```
