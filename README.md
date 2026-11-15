# TPAI Bolsines

Implementación del caso de uso 36 «Consultar seguimiento de bolsines» del Trabajo Práctico Integrador de Diseño de Sistemas de Información, 3.er año de Ingeniería en Sistemas de Información, UTN FRC.

La aplicación ofrece una página de inicio mínima, el endpoint técnico `GET /api/health` y la API de catálogos para roles, comisiones médicas y estados. El modelo inicial del dominio del CU 36 está definido en TypeScript.

## Estado de implementación

El trabajo de backend está en `feature/backend`. El alcance actual incluye la estructura en capas, el endpoint de salud, las entidades del dominio, la migración inicial del modelo de persistencia y los tres CRUD de catálogos. El inicio de sesión, las reglas de negocio y la integración externa del CU 36 quedan para etapas posteriores.

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

Desde la raíz del repositorio, con Docker Desktop iniciado, ejecutá en PowerShell:

```powershell
docker compose up --build -d
docker compose ps -a
docker compose logs migrate
curl.exe --fail-with-body -i http://localhost:3000/api/health
```

Compose espera a que PostgreSQL esté saludable. El servicio `migrate` aplica las migraciones pendientes, comprueba el historial y compara el esquema de PostgreSQL con el modelo Prisma. Next.js inicia después de que `migrate` termine con código 0. En `docker compose ps -a`, `Exited (0)` es el estado esperado para `migrate`. Si falla, revisá sus logs antes de iniciar el backend. Si Next.js todavía está arrancando, consultá `docker compose logs backend` y repetí la consulta HTTP.

Compose usa los valores de desarrollo por defecto en un clon nuevo. Para personalizarlos, copiá `.env.example` a `.env`. Para recargar cambios de código, ejecutá `docker compose watch` en otra terminal. Cuando incorpores migraciones nuevas, volvé a ejecutar `docker compose up --build -d` para reconstruir y ejecutar el servicio de migraciones. Si ya tenés un backend activo y querés detenerlo antes de validar un cambio de esquema, ejecutá `docker compose stop backend` antes del arranque.

Para detener el proyecto, ejecutá `docker compose down`. Los datos se conservan en el volumen `postgres_data` y Prisma omite las migraciones ya aplicadas al volver a iniciar.

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

`prisma.config.ts` carga `.env` para los comandos ejecutados en el anfitrión. Ejecutá `npm.cmd run prisma:generate` para generar Prisma Client en `prisma/generated`. Docker también lo genera durante la construcción. `getPrisma()` crea el cliente cuando se necesita y lo reutiliza durante la recarga en desarrollo.

### Modelo de persistencia del CU 36

Todas las tablas tienen una clave primaria `id` de tipo `INTEGER` autoincremental. Prisma usa PascalCase para los modelos y camelCase para los campos. PostgreSQL usa snake_case en tablas y columnas.

| Modelo Prisma        | Tabla                  | Columnas además de `id`                                                              | Claves foráneas                                                                               | Unicidad adicional              |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------- |
| `Usuario`            | `usuario`              | `nombre`, `contrasena`                                                               | —                                                                                             | —                               |
| `Sesion`             | `sesion`               | `fecha_hora_inicio`, `fecha_hora_fin`, `usuario_id`                                  | `usuario_id` → `usuario.id`                                                                   | —                               |
| `Empleado`           | `empleado`             | `nombre`, `apellido`, `email`, `usuario_id`, `rol_id`, `comision_medica_id`          | `usuario_id` → `usuario.id`, `rol_id` → `rol.id`, `comision_medica_id` → `comision_medica.id` | `usuario_id`                    |
| `Rol`                | `rol`                  | `nombre`, `descripcion`                                                              | —                                                                                             | `nombre`                        |
| `ComisionMedica`     | `comision_medica`      | `codigo`, `direccion`, `email`, `nombre`, `telefono`                                 | —                                                                                             | `codigo`                        |
| `Bolsin`             | `bolsin`               | `fecha`, `numero_bolsin`, `numero_precinto`, `peso`, `cm_origen_id`, `cm_destino_id` | `cm_origen_id` y `cm_destino_id` → `comision_medica.id`                                       | `(cm_origen_id, numero_bolsin)` |
| `CambioEstadoBolsin` | `cambio_estado_bolsin` | `fecha_hora_inicio`, `fecha_hora_fin`, `bolsin_id`, `estado_id`, `responsable_ce_id` | `bolsin_id` → `bolsin.id`, `estado_id` → `estado.id`, `responsable_ce_id` → `empleado.id`     | —                               |
| `Estado`             | `estado`               | `nombre`, `descripcion`, `ambito`                                                    | —                                                                                             | `(nombre, ambito)`              |

Los textos usan `TEXT`, los identificadores y números de bolsín y precinto usan `INTEGER`, y el peso usa `DOUBLE PRECISION`. Todas las fechas usan `TIMESTAMPTZ(3)`. Solo `sesion.fecha_hora_fin` y `cambio_estado_bolsin.fecha_hora_fin` admiten `NULL`.

Cada sesión pertenece a un usuario. Cada empleado tiene un usuario, un rol y una comisión. Un usuario puede tener cero o muchas sesiones y, como máximo, un empleado asociado. Un rol y una comisión pueden corresponder a muchos empleados. Cada bolsín tiene una comisión de origen y una de destino, con asociaciones independientes. Cada cambio corresponde a un bolsín, un estado y un empleado responsable. Un estado o un responsable pueden aparecer en muchos cambios.

El nombre de usuario admite duplicados. Un mismo número de bolsín puede repetirse entre comisiones de origen distintas, y un nombre de estado puede repetirse entre ámbitos distintos. Todas las claves foráneas tienen `ON DELETE RESTRICT` y un índice propio o uno con la clave foránea como primera columna. La multiplicidad UML `1..*` del historial queda pendiente de una regla de negocio. La base permite insertar un bolsín sin historial y registrar varios cambios con fecha de fin nula.

### Verificar y crear migraciones

Para verificar el historial desde la red interna de Compose, ejecutá:

```powershell
docker compose run --rm --no-deps migrate npx --no-install prisma migrate status
```

En una base vacía, el arranque aplica `20261114202500_init_domain_entities` y registra el resultado en `_prisma_migrations`. Para una base con migraciones aplicadas, Prisma ejecuta solo las pendientes. Si hay tablas sin historial compatible, una migración fallida o diferencias en el esquema que Prisma puede comparar, revisá `docker compose logs migrate`. La inicialización automática deja el diagnóstico para revisión y evita reiniciar o marcar migraciones por su cuenta.

Para **crear** una migración, configurá `DATABASE_URL` en `.env` con el puerto publicado en Windows, editá `prisma/schema.prisma` y ejecutá `npm.cmd run prisma:migrate:dev -- --name nombre_de_la_migracion` contra tu base de desarrollo. Guardá el esquema y los archivos de `prisma/migrations` en Git para que los demás integrantes reciban el mismo historial. Para **aplicar** esas migraciones versionadas en otro equipo, basta con `docker compose up --build -d`.

### Inspeccionar PostgreSQL

Abrí `psql` desde PowerShell con `docker compose exec postgres sh -c 'exec psql -X -U "$POSTGRES_USER" -d "$POSTGRES_DB"'`. Las siguientes consultas de solo lectura muestran los objetos existentes, los tipos y la nulabilidad, las claves y los índices. Verificá que el contenedor corresponda a la base indicada en `DATABASE_URL`. Después de aplicar la migración deben aparecer las ocho tablas del modelo y la tabla técnica `_prisma_migrations`.

```sql
SELECT c.relname AS objeto, c.relkind AS tipo
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname = 'public' AND c.relkind IN ('r', 'p', 'v', 'm', 'S', 'f')
ORDER BY c.relname;

SELECT table_name, column_name, data_type, datetime_precision, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name <> '_prisma_migrations'
ORDER BY table_name, ordinal_position;

SELECT t.relname AS tabla, c.conname AS restriccion, pg_get_constraintdef(c.oid) AS definicion
FROM pg_constraint c
JOIN pg_class t ON t.oid = c.conrelid
JOIN pg_namespace n ON n.oid = t.relnamespace
WHERE n.nspname = 'public' AND c.contype IN ('p', 'f', 'u')
  AND t.relname <> '_prisma_migrations'
ORDER BY t.relname, c.conname;

SELECT tablename, indexname, indexdef
FROM pg_indexes
WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'
ORDER BY tablename, indexname;
```

## Datos iniciales de la base de datos

Al ejecutar `docker compose up --build -d`, Compose espera a que PostgreSQL esté saludable. El servicio `migrate` aplica las migraciones de Prisma, valida el historial y compara el esquema. Después, `prisma/seeds/run-init.mjs` usa el cliente `pg` y la conexión `DATABASE_URL` para ejecutar `prisma/seeds/init.sql`. Next.js inicia cuando `migrate` termina con código 0. Si la carga falla, revisá `docker compose logs migrate`.

| Catálogo           | Cantidad | Datos iniciales                                                                                                                    |
| ------------------ | -------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| Roles              |        4 | Parametrizador del sistema, Encargado de Documentación, Encargado de Bolsines y Gerente de Comisión Médica.                        |
| Estados            |        5 | `Creado`, `Cerrado`, `Enviado`, `RecibidoEnCMDestino` y `DeBaja`, todos con ámbito `BOLSIN`.                                       |
| Comisiones médicas |       24 | Una sede ficticia por provincia y una para la Ciudad Autónoma de Buenos Aires, con correos de `example.com` y teléfonos de prueba. |

La carga es transaccional. Si se vuelve a ejecutar, inserta los registros faltantes y conserva los que ya existen con la misma clave única. Los CRUD permiten administrar los registros después de la carga. Si cambiás una clave única inicial o eliminás un registro inicial, el próximo arranque vuelve a insertar la clave faltante.

## Estructura

| Componente     | Ubicación            | Responsabilidad                                                                                    |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| Controller     | `src/app/api`        | Route Handlers de Next.js. Reciben solicitudes y construyen respuestas HTTP.                       |
| Service        | `src/services`       | Coordina los casos de uso mediante contratos de repositorios e integraciones.                      |
| Domain         | `src/domain`         | Aloja entidades, reglas e interfaces de negocio independientes del framework y de la persistencia. |
| Infrastructure | `src/infrastructure` | Centraliza Prisma Client y aloja las implementaciones de repositorios.                             |
| Adapter        | `src/adapters`       | Aloja los futuros adaptadores GoF para transformar contratos de sistemas externos.                 |
| DTO            | `src/dtos`           | Aloja esquemas Zod y tipos para los contratos HTTP.                                                |

La página mínima y el layout viven en `src/app`. `prisma/` contiene el esquema y las migraciones. `tests/` contiene las pruebas de los endpoints, los servicios de catálogos y el dominio. El alias `@/*` apunta a `src/*` tanto en Next.js como en Vitest.

## API de catálogos

| Recurso         | Crear                          | Listar                        | Consultar                          | Modificar                          | Eliminar                              |
| --------------- | ------------------------------ | ----------------------------- | ---------------------------------- | ---------------------------------- | ------------------------------------- |
| Rol             | `POST /api/roles`              | `GET /api/roles`              | `GET /api/roles/{id}`              | `PUT /api/roles/{id}`              | `DELETE /api/roles/{id}`              |
| Comisión Médica | `POST /api/comisiones-medicas` | `GET /api/comisiones-medicas` | `GET /api/comisiones-medicas/{id}` | `PUT /api/comisiones-medicas/{id}` | `DELETE /api/comisiones-medicas/{id}` |
| Estado          | `POST /api/estados`            | `GET /api/estados`            | `GET /api/estados/{id}`            | `PUT /api/estados/{id}`            | `DELETE /api/estados/{id}`            |

Enviá los cuerpos como JSON con `Content-Type: application/json`. Todos los campos de cada ejemplo son obligatorios en `POST` y `PUT`. Las cadenas se recortan y deben contener texto. `PUT` reemplaza todos los campos editables y conserva el ID de la URL. El parámetro `{id}` admite enteros entre 1 y 2147483647.

### Rol

El campo `nombre` es único. El rol de un empleado no se puede eliminar mientras exista la asociación.

Creación con `POST /api/roles`

```json
{
  "nombre": "Administrador",
  "descripcion": "Rol con permisos administrativos"
}
```

Modificación con `PUT /api/roles/1`

```json
{
  "nombre": "Administrador general",
  "descripcion": "Rol con permisos administrativos sobre todos los catálogos"
}
```

### Comisión Médica

El campo `codigo` es único y `email` debe tener formato de correo electrónico. La eliminación se rechaza si la comisión está asociada a empleados o figura como origen o destino de un bolsín.

Creación con `POST /api/comisiones-medicas`

```json
{
  "codigo": "CM001",
  "nombre": "Comisión Médica Córdoba",
  "direccion": "Calle 123",
  "email": "cordoba@example.com",
  "telefono": "3511234567"
}
```

Modificación con `PUT /api/comisiones-medicas/1`

```json
{
  "codigo": "CM001",
  "nombre": "Comisión Médica Córdoba",
  "direccion": "Avenida 456",
  "email": "cordoba@example.com",
  "telefono": "3517654321"
}
```

### Estado

La combinación `nombre` y `ambito` es única. Un mismo nombre puede usarse en ámbitos distintos y el ámbito acepta texto libre. La eliminación se rechaza si el estado figura en algún cambio de estado de un bolsín.

Creación con `POST /api/estados`

```json
{
  "nombre": "En tránsito",
  "descripcion": "El bolsín se encuentra en traslado",
  "ambito": "BOLSIN"
}
```

Modificación con `PUT /api/estados/1`

```json
{
  "nombre": "En tránsito",
  "descripcion": "El bolsín salió de origen y todavía no llegó al destino",
  "ambito": "BOLSIN"
}
```

### Respuestas

`POST`, `PUT` y `GET` por ID devuelven un objeto con el ID persistido y los campos del recurso. Por ejemplo, una creación de rol puede devolver `{"id":1,"nombre":"Administrador","descripcion":"Rol con permisos administrativos"}`. Los listados devuelven un arreglo de estos objetos, ordenado por ID ascendente. Una colección vacía devuelve `[]`.

| Código                      | Respuesta                                                    |
| --------------------------- | ------------------------------------------------------------ |
| `200 OK`                    | Listado, consulta por ID o modificación exitosa.             |
| `201 Created`               | Registro creado con el ID generado por PostgreSQL.           |
| `204 No Content`            | Registro eliminado. La respuesta no contiene cuerpo.         |
| `400 Bad Request`           | Campos inválidos, ID inválido o JSON malformado.             |
| `404 Not Found`             | El ID solicitado no existe.                                  |
| `409 Conflict`              | Clave única duplicada o eliminación impedida por relaciones. |
| `500 Internal Server Error` | Error inesperado.                                            |

Los errores devuelven un objeto JSON con una propiedad `error`. PostgreSQL aplica las restricciones de unicidad y `ON DELETE RESTRICT`. Las eliminaciones no modifican los registros relacionados.

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
