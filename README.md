# TPAI Bolsines

Implementación del caso de uso 36 «Consultar seguimiento de bolsines» del Trabajo Práctico Integrador de Diseño de Sistemas de Información, 3.er año de Ingeniería en Sistemas de Información, UTN FRC.

La aplicación ofrece una página de inicio mínima, el endpoint técnico `GET /api/health` y la API de catálogos para roles, comisiones médicas y estados. El modelo inicial del dominio del CU 36 está definido en TypeScript.

## Estado de implementación

El trabajo de backend está en `feature/backend`. El alcance actual incluye la infraestructura, el dominio, los CRUD técnicos y el inicio de sesión académico. Las reglas del CU 36 y su integración externa quedan para etapas posteriores.

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
| `Usuario`            | `usuario`              | `nombre`, `contrasena`                                                               | —                                                                                             | `nombre`                        |
| `Sesion`             | `sesion`               | `fecha_hora_inicio`, `fecha_hora_fin`, `usuario_id`                                  | `usuario_id` → `usuario.id`                                                                   | —                               |
| `Empleado`           | `empleado`             | `nombre`, `apellido`, `email`, `usuario_id`, `rol_id`, `comision_medica_id`          | `usuario_id` → `usuario.id`, `rol_id` → `rol.id`, `comision_medica_id` → `comision_medica.id` | `usuario_id`                    |
| `Rol`                | `rol`                  | `nombre`, `descripcion`                                                              | —                                                                                             | `nombre`                        |
| `ComisionMedica`     | `comision_medica`      | `codigo`, `direccion`, `email`, `nombre`, `telefono`                                 | —                                                                                             | `codigo`                        |
| `Bolsin`             | `bolsin`               | `fecha`, `numero_bolsin`, `numero_precinto`, `peso`, `cm_origen_id`, `cm_destino_id` | `cm_origen_id` y `cm_destino_id` → `comision_medica.id`                                       | `(cm_origen_id, numero_bolsin)` |
| `CambioEstadoBolsin` | `cambio_estado_bolsin` | `fecha_hora_inicio`, `fecha_hora_fin`, `bolsin_id`, `estado_id`, `responsable_ce_id` | `bolsin_id` → `bolsin.id`, `estado_id` → `estado.id`, `responsable_ce_id` → `empleado.id`     | —                               |
| `Estado`             | `estado`               | `nombre`, `descripcion`, `ambito`                                                    | —                                                                                             | `(nombre, ambito)`              |

Los textos usan `TEXT`, los identificadores y números de bolsín y precinto usan `INTEGER`, y el peso usa `DOUBLE PRECISION`. Todas las fechas usan `TIMESTAMPTZ(3)`. Solo `sesion.fecha_hora_fin` y `cambio_estado_bolsin.fecha_hora_fin` admiten `NULL`.

Cada sesión pertenece a un usuario. Cada empleado tiene un usuario, un rol y una comisión. Un usuario puede tener cero o muchas sesiones y, como máximo, un empleado asociado. Un rol y una comisión pueden corresponder a muchos empleados. Cada bolsín tiene una comisión de origen y una de destino, con asociaciones independientes. Cada cambio corresponde a un bolsín, un estado y un empleado responsable. Un estado o un responsable pueden aparecer en muchos cambios.

El nombre de usuario es único. Un mismo número de bolsín puede repetirse entre comisiones de origen distintas, y un nombre de estado puede repetirse entre ámbitos distintos. Todas las claves foráneas tienen `ON DELETE RESTRICT` y un índice propio o uno con la clave foránea como primera columna. La multiplicidad UML `1..*` del historial queda pendiente de una regla de negocio. La base permite insertar un bolsín sin historial y registrar varios cambios con fecha de fin nula.

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

Al ejecutar `docker compose up -d --build`, Compose espera a que PostgreSQL esté saludable. El servicio `migrate` ejecuta `prisma/seeds/run-init.mjs` y el backend espera su finalización exitosa. El script clasifica la base antes de ejecutar Prisma. En una base nueva registra la inicialización pendiente en `bolsines_bootstrap.inicializacion`, aplica y verifica las migraciones, y ejecuta `init.sql`. El seed, la verificación de las 24 comisiones con un GCM con usuario y correo por comisión y la confirmación del marcador se ejecutan en una sola transacción.

En los siguientes arranques se aplican las migraciones pendientes y se omite el seed. Una instalación anterior al marcador se adopta si tiene el esquema esperado, historial de Prisma válido y usuarios y empleados existentes. Esta evidencia permite reconocer instalaciones legadas sin exigir que los datos sigan iguales al seed. Las bases ambiguas, con tablas faltantes o con un marcador pendiente requieren diagnóstico. Revisá `docker compose logs migrate`, el historial de Prisma y el marcador antes de recuperar una primera carga fallida. El arranque se detiene y el seed fallido se revierte.

Para verificar los gerentes del seed, ejecutá esta consulta desde `psql` en la base de prueba. Debe devolver 24 filas con `gerentes = 1` y `con_usuario_y_correo = 1`. Un valor mayor que uno en `gerentes` indica duplicados.

```sql
SELECT cm.codigo, count(r.id) AS gerentes,
       count(u.id) FILTER (WHERE r.id IS NOT NULL AND btrim(e.email) <> '') AS con_usuario_y_correo
FROM public.comision_medica cm
LEFT JOIN public.empleado e ON e.comision_medica_id = cm.id
LEFT JOIN public.rol r ON r.id = e.rol_id AND r.nombre = 'Gerente de Comisión Médica'
LEFT JOIN public.usuario u ON u.id = e.usuario_id
GROUP BY cm.codigo
ORDER BY cm.codigo;
```

| Catálogo           | Cantidad | Datos iniciales                                                                                                                    |
| ------------------ | -------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| Roles              |        4 | Parametrizador del sistema, Encargado de Documentación, Encargado de Bolsines y Gerente de Comisión Médica.                        |
| Estados            |        5 | `Creado`, `Cerrado`, `Enviado`, `RecibidoEnCMDestino` y `DeBaja`, todos con ámbito `BOLSIN`.                                       |
| Comisiones médicas |       24 | Una sede ficticia por provincia y una para la Ciudad Autónoma de Buenos Aires, con correos de `example.com` y teléfonos de prueba. |

La carga es transaccional. Si se vuelve a ejecutar, inserta los registros faltantes y conserva los que ya existen con la misma clave única. Los CRUD permiten administrar los registros después de la carga. Si cambiás una clave única inicial o eliminás un registro inicial, el próximo arranque vuelve a insertar la clave faltante.

### Empleados de demostración

El seed crea cada empleado con su Usuario asociado en la misma transacción. Los correos se forman agregando `@example.com` al nombre de usuario. La contraseña ficticia es `123456` para los cuatro usuarios de desarrollo.

| Empleado          | Usuario               | Rol                        | Comisión médica    |
| ----------------- | --------------------- | -------------------------- | ------------------ |
| Martín Fernández  | `parametrizador.demo` | Parametrizador del sistema | CABA (`CM-CABA`)   |
| Lucía González    | `documentacion.demo`  | Encargado de Documentación | Córdoba (`CM-CBA`) |
| Nicolás Rodríguez | `bolsines.demo`       | Encargado de Bolsines      | Córdoba (`CM-CBA`) |
| Carolina Martínez | `gerente.demo`        | Gerente de Comisión Médica | Santa Fe (`CM-SF`) |

La carga comprueba cada correo de demostración antes de insertar su Usuario. Conserva los registros que ya tienen ese correo y resuelve las asociaciones nuevas por el nombre del rol y el código de comisión. Una base vacía recibe 4 roles, 5 estados, 24 comisiones, 4 empleados y 4 usuarios.

#### Verificación con PostgreSQL y la API

El script arranca Compose dos veces, vuelve a ejecutar `migrate` para garantizar una segunda carga, compara los conteos y las filas, y valida `GET /api/empleados` en UTF-8. Luego crea un empleado y una sesión temporales, comprueba el `409` y la permanencia de los tres registros relacionados, elimina la sesión y comprueba el `204` y la limpieza final.

```powershell
pwsh -File scripts/Test-EmpleadoSeed.ps1
# Con los puertos libres y un nombre de proyecto nuevo, usar un volumen independiente
pwsh -File scripts/Test-EmpleadoSeed.ps1 -Proyecto bolsines-empleado-qa -BaseVacia
```

Ambas variantes usan el backend publicado en el puerto 3000. Si configuraste `DOCKER_DATABASE_URL`, debe apuntar al PostgreSQL del proyecto Compose que se prueba.

Consultas de verificación de conteos y asociaciones

```sql
SELECT (SELECT count(*) FROM public.rol) AS roles,
       (SELECT count(*) FROM public.estado) AS estados,
       (SELECT count(*) FROM public.comision_medica) AS comisiones,
       (SELECT count(*) FROM public.empleado) AS empleados,
       (SELECT count(*) FROM public.usuario) AS usuarios;

SELECT e.nombre, e.apellido, u.nombre AS usuario, r.nombre AS rol,
       c.nombre AS comision, c.codigo
FROM public.empleado e
JOIN public.usuario u ON u.id = e.usuario_id
JOIN public.rol r ON r.id = e.rol_id
JOIN public.comision_medica c ON c.id = e.comision_medica_id
WHERE e.email IN ('parametrizador.demo@example.com', 'documentacion.demo@example.com',
                  'bolsines.demo@example.com', 'gerente.demo@example.com')
ORDER BY e.email;
```

La prueba transaccional y la segunda carga quedaron pendientes de ejecución contra PostgreSQL porque Docker Desktop denegó el acceso a su motor Linux.

### Bolsines de demostración

La carga inicial agrega 35 bolsines ficticios para el CU 36. Cada número reservado se identifica junto con su comisión de origen. El origen rota, en orden, entre `CM-CBA`, `CM-SF`, `CM-CABA`, `CM-MZA` y `CM-BA`. El destino es la siguiente comisión de esa lista, volviendo a Córdoba al final. Las fechas y los pesos varían y los precintos van de 936001 a 936035.

| Estado del ámbito `BOLSIN` | Números de bolsín | Cantidad |
| -------------------------- | ----------------- | -------: |
| `Creado`                   | 36001–36007       |        7 |
| `Cerrado`                  | 36008–36014       |        7 |
| `Enviado`                  | 36015–36021       |        7 |
| `RecibidoEnCMDestino`      | 36022–36028       |        7 |
| `DeBaja`                   | 36029–36035       |        7 |

Los responsables rotan entre Martín Fernández, Lucía González, Nicolás Rodríguez y Carolina Martínez, identificados por su correo ficticio. Cada alta genera un único cambio de estado abierto, con inicio 30 minutos después de la fecha del bolsín.

El seed usa la clave única de origen y número. Solo inserta el cambio inicial cuando PostgreSQL devuelve un bolsín recién creado mediante `RETURNING`. Una nueva ejecución conserva los bolsines y los historiales existentes, incluso si fueron editados. En una base vacía se esperan 111 registros iniciales, incluidos 35 bolsines y 35 cambios.

#### Verificar la carga con PowerShell 7

Desde la raíz del repositorio, con Docker Desktop disponible, arrancá Compose. Para verificar contra una base vacía usá un nombre de proyecto Compose nuevo, con los puertos libres y la conexión apuntando a su servicio `postgres`. Podés asignar `$compose = @('compose', '-p', 'bolsines-seed-qa')` en lugar de la primera línea.

```powershell
$compose = @('compose')
docker @compose up --build -d
if ($LASTEXITCODE) { throw 'Falló el arranque de Compose.' }
docker @compose ps -a
docker @compose logs migrate

$sql = @'
WITH claves AS (
  SELECT 36000 + n AS numero,
         (ARRAY['CM-CBA','CM-SF','CM-CABA','CM-MZA','CM-BA'])[(n-1)%5+1] AS origen,
         (ARRAY['CM-SF','CM-CABA','CM-MZA','CM-BA','CM-CBA'])[(n-1)%5+1] AS destino,
         (ARRAY['Creado','Cerrado','Enviado','RecibidoEnCMDestino','DeBaja'])[(n-1)/7+1] AS estado,
         (ARRAY['parametrizador.demo','documentacion.demo','bolsines.demo','gerente.demo'])[(n-1)%4+1]
           || '@example.com' AS responsable
  FROM generate_series(1,35) AS serie(n)
), verificacion AS (
  SELECT k.numero, k.origen, k.destino, k.estado, k.responsable, b.id,
         (SELECT count(*) FROM public.cambio_estado_bolsin h WHERE h.bolsin_id = b.id) AS historial,
         coalesce(d.codigo = k.destino AND e.nombre = k.estado AND e.ambito = 'BOLSIN'
           AND r.email = k.responsable AND b.peso > 0 AND b.numero_precinto IS NOT NULL
           AND h.fecha_hora_inicio >= b.fecha AND h.fecha_hora_fin IS NULL, false) AS valido
  FROM claves k
  LEFT JOIN public.comision_medica o ON o.codigo = k.origen
  LEFT JOIN public.bolsin b ON b.cm_origen_id = o.id AND b.numero_bolsin = k.numero
  LEFT JOIN public.comision_medica d ON d.id = b.cm_destino_id
  LEFT JOIN public.cambio_estado_bolsin h ON h.bolsin_id = b.id
  LEFT JOIN public.estado e ON e.id = h.estado_id
  LEFT JOIN public.empleado r ON r.id = h.responsable_ce_id
)
SELECT coalesce(json_agg(v ORDER BY numero), '[]') FROM verificacion v;
'@

function Consultar-BolsinesSeed {
    $resultado = $sql | docker @compose exec -T postgres sh -c 'exec psql -XqAt -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
    if ($LASTEXITCODE) { throw 'Falló la consulta SQL.' }
    $resultado | ConvertFrom-Json
}

function Huella-Bolsines {
    @'
SELECT (SELECT md5(coalesce(json_agg(b ORDER BY b.id)::text, '[]')) FROM public.bolsin b),
       (SELECT md5(coalesce(json_agg(h ORDER BY h.id)::text, '[]')) FROM public.cambio_estado_bolsin h),
       (SELECT md5(coalesce(json_agg(e ORDER BY e.id)::text, '[]')) FROM public.empleado e),
       (SELECT md5(coalesce(json_agg(u ORDER BY u.id)::text, '[]')) FROM public.usuario u),
       (SELECT count(*) FROM public.cambio_estado_bolsin h
        WHERE NOT EXISTS (SELECT 1 FROM public.bolsin b WHERE b.id = h.bolsin_id));
'@ | docker @compose exec -T postgres sh -c 'exec psql -XqAt -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
    if ($LASTEXITCODE) { throw 'Falló el cálculo de huellas.' }
}

$filas = @(Consultar-BolsinesSeed)
if ($filas.Count -ne 35 -or @($filas | Where-Object { -not $_.valido -or $_.historial -ne 1 }).Count) {
    throw 'La carga no coincide con las 35 claves y asociaciones esperadas.'
}
$filas | Group-Object estado | Select-Object Name, Count

$api = 'http://localhost:3000/api/bolsines'
$lista = Invoke-RestMethod $api
foreach ($fila in $filas) {
    $resumen = @($lista | Where-Object { $_.numeroBolsin -eq $fila.numero -and $_.cmOrigen.codigo -eq $fila.origen })
    if ($resumen.Count -ne 1 -or $resumen[0].id -ne $fila.id) { throw "Falta el bolsín $($fila.numero) en el listado." }
    $detalle = Invoke-RestMethod "$api/$($fila.id)"
    if (@($detalle.cambiosEstado).Count -ne 1 -or $detalle.cambiosEstado[0].estado.nombre -cne $fila.estado) {
        throw "Historial incorrecto para $($fila.numero)."
    }
}

$antes = Huella-Bolsines
if (($antes -split '\|')[-1] -ne '0') { throw 'Hay cambios de estado huérfanos.' }
docker @compose run --rm --no-deps migrate
if ($LASTEXITCODE) { throw 'Falló la segunda ejecución del seed.' }
if ((Huella-Bolsines) -cne $antes) { throw 'La segunda carga modificó registros.' }
```

Las comprobaciones de integración requieren PostgreSQL y los endpoints activos.

## Estructura

| Componente     | Ubicación            | Responsabilidad                                                                                    |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| Controller     | `src/app/api`        | Route Handlers de Next.js. Reciben solicitudes y construyen respuestas HTTP.                       |
| Service        | `src/services`       | Coordina los casos de uso mediante contratos de repositorios e integraciones.                      |
| Domain         | `src/domain`         | Aloja entidades, reglas e interfaces de negocio independientes del framework y de la persistencia. |
| Persistence    | `src/persistence`    | Prisma, pg-mem, repositorios y mapeo a entidades.                                                   |
| Integrations | `src/integrations` | Cartografía en `maps/`, correo SMTP en `mail/` y transporte GPS en `gpsTracker/`. |
| External Interfaces | `src/externalInterfaces` | Fronteras de GPS y cartografía, con los adaptadores GoF en `gpsTracker/`. |
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

## API de empleados

| Método | Ruta                  | Resultado                           |
| ------ | --------------------- | ----------------------------------- |
| POST   | `/api/empleados`      | 201, empleado y usuario creados     |
| GET    | `/api/empleados`      | 200, lista por ID ascendente o `[]` |
| GET    | `/api/empleados/{id}` | 200, empleado solicitado            |
| PUT    | `/api/empleados/{id}` | 200, empleado actualizado           |
| DELETE | `/api/empleados/{id}` | 204, sin cuerpo                     |

Ejemplo de alta con `POST`

```json
{
  "nombre": "Ana",
  "apellido": "Pérez",
  "email": "ana@example.com",
  "usuario": { "nombre": "ana", "contrasena": "prueba123" },
  "rolId": 1,
  "comisionMedicaId": 3
}
```

Ejemplo de modificación con `PUT`

```json
{
  "nombre": "Ana",
  "apellido": "Pérez",
  "email": "ana@example.com",
  "rolId": 2,
  "comisionMedicaId": 5
}
```

Ambos métodos exigen todos los campos de su ejemplo, con textos no vacíos, un email válido e IDs enteros positivos de catálogos existentes. El alta crea el usuario asociado mediante una escritura anidada atómica y devuelve `409` si el nombre de usuario ya está en uso. El PUT conserva el usuario asociado. Las respuestas incluyen los datos del empleado y un resumen de su usuario, rol y comisión médica. La contraseña queda excluida.

La eliminación borra el empleado y su usuario en una transacción. Una sesión del usuario o un cambio de estado del que el empleado sea responsable impiden la operación y se conservan ambos registros.

La API responde con `400` por datos inválidos, `404` por un empleado o catálogo inexistente, `409` por un conflicto de persistencia y `500` por un error inesperado. Los errores tienen la forma `{"error":"mensaje"}`.

Ejecutá `npm.cmd run test:run -- tests/empleados-api.test.ts` para probar los cinco endpoints con Prisma simulado.

## API técnica de bolsines

Estas rutas permiten preparar bolsines ficticios para las pruebas del CU 36.

| Método | Ruta                 | Resultado                                |
| ------ | -------------------- | ---------------------------------------- |
| POST   | `/api/bolsines`      | 201, bolsín con cambio de estado inicial |
| GET    | `/api/bolsines`      | 200, lista por ID ascendente o `[]`      |
| GET    | `/api/bolsines/{id}` | 200, bolsín e historial completo         |
| PUT    | `/api/bolsines/{id}` | 200, datos editables actualizados        |
| DELETE | `/api/bolsines/{id}` | 204, sin cuerpo                          |

Ejemplo de alta con IDs ilustrativos

```json
{
  "fecha": "2026-11-15T12:00:00.000Z",
  "numeroBolsin": 1001,
  "numeroPrecinto": 50001,
  "peso": 850.5,
  "cmOrigenId": 8,
  "cmDestinoId": 23,
  "estadoId": 3,
  "responsableCEId": 5
}
```

Ejemplo de edición con IDs ilustrativos

```json
{
  "fecha": "2026-11-15T13:30:00.000Z",
  "numeroBolsin": 1001,
  "numeroPrecinto": 50002,
  "peso": 900.5,
  "cmOrigenId": 8,
  "cmDestinoId": 23
}
```

Todos los campos de cada ejemplo son obligatorios. La fecha debe incluir zona horaria, los números de bolsín y precinto son enteros, el peso admite decimales y los IDs deben ser enteros positivos. El número de bolsín es único dentro de su comisión de origen.

El alta guarda el bolsín y su cambio inicial en una única escritura. El cambio usa la hora del servidor como inicio y tiene fecha de fin nula. Puede iniciarse en cualquier estado del ámbito `BOLSIN`, incluidos `Creado`, `Cerrado`, `Enviado`, `RecibidoEnCMDestino` y `DeBaja`.

El resumen devuelve ambas comisiones y el estado del cambio vigente más reciente. Si no hay cambios abiertos, `estadoActual` es `null`. La consulta por ID incluye el historial con estado y responsable, ordenado por fecha de inicio e ID. El PUT conserva el historial. El DELETE elimina primero los cambios del bolsín solicitado y luego el bolsín dentro de una transacción Prisma.

La API responde con `400` si la entrada es inválida o el estado pertenece a otro ámbito, `404` si falta el bolsín o una asociación, `409` si se repite un número para el mismo origen o hay un conflicto de persistencia y `500` ante un error inesperado.

#### Prueba manual con PowerShell 7

```powershell
docker compose up --build -d
docker compose ps -a
$api = 'http://localhost:3000/api'
$comisiones = Invoke-RestMethod "$api/comisiones-medicas"
$estados = Invoke-RestMethod "$api/estados"
$empleados = Invoke-RestMethod "$api/empleados"
$origen = $comisiones | Where-Object codigo -eq 'CM-CBA'
$destino = $comisiones | Where-Object codigo -eq 'CM-SF'
$estado = $estados | Where-Object { $_.nombre -eq 'Enviado' -and $_.ambito -eq 'BOLSIN' }
$responsable = $empleados | Where-Object email -eq 'bolsines.demo@example.com'
$numero = Get-Random -Minimum 100000000 -Maximum 2147483646
$datos = @{
    fecha = [DateTime]::UtcNow.ToString('o')
    numeroBolsin = $numero
    numeroPrecinto = $numero
    peso = 850.5
    cmOrigenId = $origen.id
    cmDestinoId = $destino.id
}
$alta = $datos + @{ estadoId = $estado.id; responsableCEId = $responsable.id }
Invoke-RestMethod "$api/bolsines"
$creado = Invoke-RestMethod "$api/bolsines" -Method Post -ContentType 'application/json' -Body ($alta | ConvertTo-Json)
$id = [int]$creado.id
try {
    Invoke-RestMethod "$api/bolsines/$id" | ConvertTo-Json -Depth 8
    $datos.peso = 900.5
    Invoke-RestMethod "$api/bolsines/$id" -Method Put -ContentType 'application/json' -Body ($datos | ConvertTo-Json)
    Invoke-RestMethod "$api/bolsines/$id" | ConvertTo-Json -Depth 8
} finally {
    (Invoke-WebRequest "$api/bolsines/$id" -Method Delete).StatusCode
}
"SELECT (SELECT count(*) FROM public.bolsin WHERE id = $id), (SELECT count(*) FROM public.cambio_estado_bolsin WHERE bolsin_id = $id);" |
    docker compose exec -T postgres sh -c 'exec psql -XAt -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
```

Se espera un único cambio en ambas consultas por ID, `204` al eliminar y `0|0` en PostgreSQL.

## Inicio de sesión académico

| Método | Ruta               | Resultado                                                                                |
| ------ | ------------------ | ---------------------------------------------------------------------------------------- |
| POST   | `/api/auth/login`  | `200`, perfil y cookie. `400` para entrada inválida o `401` para credenciales inválidas. |
| GET    | `/api/auth/me`     | `200`, perfil de la sesión abierta. `401` si la sesión es inválida.                      |
| POST   | `/api/auth/logout` | `204`, sesión cerrada y cookie invalidada. `401` si la sesión es inválida.               |

Solicitud de inicio de sesión con un usuario ficticio del seed

```json
{ "nombre": "bolsines.demo", "contrasena": "123456" }
```

Respuesta ilustrativa de `login` y `me`

```json
{
  "usuario": { "id": 3, "nombre": "bolsines.demo" },
  "empleado": { "id": 3, "nombre": "Nicolás", "apellido": "Rodríguez" },
  "rol": { "id": 3, "nombre": "Encargado de Bolsines" },
  "comisionMedica": {
    "id": 5,
    "codigo": "CM-CBA",
    "nombre": "Comisión Médica Córdoba"
  },
  "sesion": { "id": 1, "fechaHoraInicio": "2026-11-15T12:00:00.000Z" }
}
```

Cada alta de sesión registra la hora del servidor y admite varias sesiones por usuario. `Sesion.getUsuario()` devuelve el usuario asociado. `Empleado.esTuUsuario()` verifica la identidad mediante el nombre único. El cierre registra la fecha de fin y conserva el historial.

La cookie `bolsines_sesion` es `HttpOnly`, `SameSite=Lax`, tiene alcance `/` y usa `Secure` bajo HTTPS. Contiene el identificador de sesión con firma HMAC-SHA256. Generá una clave local con `[Convert]::ToHexString([Security.Cryptography.RandomNumberGenerator]::GetBytes(32))` en PowerShell 7 y guardala como `SESSION_SIGNING_KEY` en `.env`. Compose la suministra al backend.

Las contraseñas de demostración se almacenan en texto plano según el modelo académico. Este manejo de credenciales no es adecuado para producción.

### Verificar duplicados y probar con PowerShell 7

Si la base ya existe, iniciá solo PostgreSQL y verificá duplicados antes de desplegar. La propia migración repite la comprobación bajo un bloqueo y aborta si detecta duplicados. Si la consulta devuelve filas, resolvelas manualmente antes de aplicar la migración.

```powershell
docker compose up -d --wait postgres
"SELECT nombre, count(*) FROM public.usuario GROUP BY nombre HAVING count(*) > 1;" |
    docker compose exec -T postgres sh -c 'exec psql -X -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
```

En una base nueva se puede iniciar Compose directamente. Después de configurar la clave:

```powershell
docker compose up --build -d
docker compose ps -a
docker compose logs migrate
$api = 'http://localhost:3000/api/auth'
$body = @{ nombre = 'bolsines.demo'; contrasena = '123456' } | ConvertTo-Json
$login = Invoke-WebRequest "$api/login" -Method Post -ContentType 'application/json' -Body $body -SessionVariable navegador
$perfil = $login.Content | ConvertFrom-Json
$cookie = ($login.Headers['Set-Cookie'][0] -split ';')[0]
try {
    Invoke-RestMethod "$api/me" -WebSession $navegador
} finally {
    (Invoke-WebRequest "$api/logout" -Method Post -WebSession $navegador).StatusCode
}
(Invoke-WebRequest "$api/me" -Headers @{ Cookie = $cookie } -SkipHttpErrorCheck).StatusCode
$id = [int]$perfil.sesion.id
"SELECT id, usuario_id, fecha_hora_inicio, fecha_hora_fin FROM public.sesion WHERE id = $id;" |
    docker compose exec -T postgres sh -c 'exec psql -X -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
```

Se esperan `204` al cerrar, `401` al reutilizar la cookie y una fecha de fin no nula en PostgreSQL.

`Empleado.obtenerCM()` devuelve el nombre y la dirección de la comisión médica asociada en el formato `Nombre de la Comisión Médica - Dirección`. En el CU 36, el gestor lo invoca sobre el empleado identificado como logueado.

### Consultas de dominio para el CU 36

- `Bolsin.esCMOrigenIgualCMLogueado()` compara el código de la comisión de origen. `buscarEstadoActualBolsin()` devuelve el único cambio vigente, `null` si no hay ninguno o un error si hay varios.
- `CambioEstadoBolsin.sosActual()` verifica que la fecha de fin sea nula. `esAmbitoBolsin()` y `esEnviado()` delegan en el estado asociado.
- `Estado.esAmbitoBolsin()` y `Estado.esEnviado()` comprueban por separado el ámbito exacto `BOLSIN` y el nombre exacto `Enviado`.

- `Empleado.esTuCM()` compara el código de su comisión con el de destino. `Empleado.sosGCM()` delega en `Rol.esGCM()`, que comprueba el nombre exacto `Gerente de Comisión Médica`.

El gestor coordina la consulta, la selección y el aviso opcional. El aviso al gerente se procesa mediante el CU 31 al confirmar.

## GPS Tracker oficial de la cátedra

Compose compila con Maven y Java 17 la [revisión fijada de la API oficial](https://github.com/LiberaeMentis/dsi-api-bolsines/tree/bd457ed8349a08dad9f3533dd93530aebf844204). El build requiere acceso a GitHub y Maven Central. El backend espera el health check de `gps-tracker` y se conecta a `http://gps-tracker:8080` por la red interna. `GPS_TRACKER_PORT` configura el puerto publicado en loopback.

```powershell
docker compose config --quiet
docker compose up -d --build
$gps = "http://$(docker compose port gps-tracker 8080)"
Invoke-RestMethod "$gps/health"
```

| Modelo           | Ruta GET                                    | Parámetros                                    | Respuesta                                                      |
| ---------------- | ------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| XTR-4500L        | `/api/xtr-4500l/getBolsinLocation`          | `numeroBolsin`, `codigoComisionMedicaOrigen`  | JSON con `items`                                               |
| NavTrack QX-7A   | `/api/navtrack-qx-7a/retrieveTrackingData`  | `numeroBolsin`, `codigoComisionMedicaDestino` | Texto CSV                                                      |
| GeoPulse MTR-900 | `/api/geopulse-mtr-900/fetchCargoPositions` | `numeroBolsin`                                | Matriz JSON con número, coordenadas numéricas y fecha de texto |

Las tres variables `GPS_TRACKER_*_API_KEY` de `.env.example` controlan ambas puntas: Next.js las envía en `X-API-Key` y el contenedor oficial recibe `GPS_API_KEYS_XTR4500L`, `GPS_API_KEYS_NAVTRACKQX7A` y `GPS_API_KEYS_GEOPULSEMTR900`, respectivamente. Compose usa las claves públicas de demostración por defecto. Si tu `.env` conserva valores de una configuración anterior, actualizalos con los de `.env.example` para consultar con las claves de demostración.

Con `$gps` definido como arriba y las claves de demostración del ejemplo de integración de abajo:

```powershell
curl.exe -i -H "X-API-Key: $env:GPS_TRACKER_XTR_API_KEY" "$gps/api/xtr-4500l/getBolsinLocation?numeroBolsin=101&codigoComisionMedicaOrigen=CM-CBA-01"
curl.exe -i -H "X-API-Key: $env:GPS_TRACKER_NAVTRACK_API_KEY" "$gps/api/navtrack-qx-7a/retrieveTrackingData?numeroBolsin=101&codigoComisionMedicaDestino=CM-ROS-02"
curl.exe -i -H "X-API-Key: $env:GPS_TRACKER_GEOPULSE_API_KEY" "$gps/api/geopulse-mtr-900/fetchCargoPositions?numeroBolsin=101"
```

| Escenario | HTTP esperado |
| --- | --- |
| Clave y parámetros válidos | 200 |
| Parámetro obligatorio omitido | 400 |
| Clave incorrecta o de otro proveedor | 401 |
| Bolsín inexistente o comisión incompatible | 404 |

La prueba previa con una instancia temporal confirmó HTTP 200 para XTR al pasarle explícitamente su variable de entorno. En esta revisión, Compose validó la configuración y la coincidencia de las tres claves entre servicios. El motor Docker denegó acceso y el entorno también bloqueó la consulta al puerto local. Las respuestas de los tres proveedores y los errores de la tabla quedan por verificar en el stack definitivo.

El catálogo oficial contiene los bolsines 101 a 110. El seed local usa 36001 a 36035 y códigos propios como `CM-CBA` y `CM-SF`. La prueba usa el fixture oficial 101, origen `CM-CBA-01` y destino `CM-ROS-02`, directamente en los adaptadores. Para una futura prueba con persistencia se propone cargar el fixture y sus comisiones oficiales en una base aislada, con sesión y estado Enviado si el recorrido lo requiere. Los números inexistentes y los códigos de comisión incompatibles devuelven 404.

## Implementación del patrón Adapter para GPS Tracker

`InterfazGPSTracker` es el **Client** del patrón. Recibe el modelo y los bolsines de la consulta, crea el adaptador correspondiente e invoca el **Target**, `IAdaptadorLocalizacionBolsines`. Cada **Adapter** conserva por constructor una referencia privada al **Adaptee** de su modelo. Los tres servicios usan `TransporteHTTPGPS` para consultar la API oficial. La frontera recibe la matriz normalizada.

| Adapter             | Adaptee                      | Operación pública                                                        |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------ |
| `AdaptadorXTR4500L` | `ServicioGPSTrackerXTR4500L` | `getBolsinLocation(apiKey, nroBolsin, codCMOrigen): Promise<string>`     |
| `AdaptadorQX7A`     | `ServicioGPSTrackerQX7A`     | `retrieveTrackingData(apiKey, nroBolsin, codCMDestino): Promise<string>` |
| `AdaptadorMTR900`   | `ServicioGPSTrackerMTR900`   | `fetchCargoPositions(apiKey, nroBolsin): Promise<string[][]>`            |

Los nombres TypeScript omiten los guiones de los identificadores UML. `Promise` permite esperar el resultado HTTP y conserva el tipo de dato del v8.

```typescript
interface IAdaptadorLocalizacionBolsines {
  recibirLocalizacionBolsines(): Promise<string[][]>;
  solicitarLocalizacionBolsines(): Promise<void>;
  adaptarLocalizacionBolsines(): void;
}
```

Cada concreto implementa directamente la interfaz y declara sus propios atributos. `crearAdaptador(): void` asigna el adaptador concreto a la referencia común. La frontera guarda el modelo, el lote y la matriz resultante. Usá una instancia de `InterfazGPSTracker` por consulta independiente. Los arreglos de códigos se alinean por índice con los números de bolsín y los que el modelo no utiliza se pasan vacíos. Un lote vacío devuelve `[]`. La [especificación UML corregida](docs/cerebro/nodos/PPAI-PAT-ADAPTER-GPS.md#nacho-especificación-aprobada-del-adapter-gps) detalla los atributos, las operaciones y las relaciones.

| Modelo      | Datos por bolsín            | Operación y formato del proveedor                                |
| ----------- | --------------------------- | ---------------------------------------------------------------- |
| `XTR-4500L` | `nroBolsin`, `codCMOrigen`  | `getBolsinLocation` · JSON                                       |
| `QX-7A`     | `nroBolsin`, `codCMDestino` | `retrieveTrackingData` · CSV                                     |
| `MTR-900`   | `nroBolsin`                 | `fetchCargoPositions` · matriz JSON con tres números y una fecha |

```typescript
import { InterfazGPSTracker } from "@/externalInterfaces/gpsTracker/InterfazGPSTracker";

const tracker = new InterfazGPSTracker();
const localizaciones = await tracker.obtenerLocalizacionDeBolsines(
  "XTR-4500L",
  [101],
  ["CM-CBA-01"],
);
```

Cada fila tiene cuatro cadenas en orden `[nroBolsin, latitud, longitud, fechaHoraActualizacion]`. Las consultas se esperan de forma asíncrona en el orden del lote. Cada adaptador valida el número devuelto, la cantidad de campos, los rangos geográficos y la fecha ISO 8601 en UTC. Las fechas oficiales sin zona se interpretan como hora argentina (UTC−03:00) y se convierten a UTC. Un error interrumpe el lote y se propaga como `ErrorGPSTracker`, con `tipo` y, para errores HTTP, `estadoHttp`. El transporte preserva estados como `400`, `401` y `404` y distingue errores de conexión y timeout.

El CU 36 fija `MODELO_GPS_TRACKER = "XTR-4500L" as const` y consulta el Adapter con números y códigos de CM origen alineados por posición. La CM destino se usa en el mapa y para buscar el gerente al confirmar el aviso. QX-7A y MTR-900 siguen disponibles en el Adapter para otros consumidores. El [tramo GPS de la secuencia](docs/cerebro/nodos/PPAI-CU-36.md#nacho-tramo-gps-del-cu-36-con-cm-origen) documenta los mensajes de ese recorrido.

Al construir `InterfazGPSTracker`, se copian y validan exactamente tres claves en `apisKeys`, en orden XTR-4500L, NavTrack QX-7A y GeoPulse MTR-900. Si alguna falta o está en blanco, se lanza `ErrorGPSTracker` de tipo `CONFIGURACION` sin incluir valores. `crearAdaptador()` entrega por constructor únicamente la clave del modelo solicitado.

El transporte usa `fetch` del lado servidor, envía `X-API-Key` por modelo y aplica cinco segundos de timeout por consulta. Compose comparte entre Java y el backend las tres claves de `.env.example`. Para ejecutar Next.js desde el anfitrión configurá esas mismas claves y ajustá `GPS_TRACKER_BASE_URL` si cambiaste el puerto publicado.

La suite `tests/gps-adapter.test.ts` verifica el contrato con dobles. Para probar por HTTP real los tres adaptadores con el bolsín 101, `/health`, `401` y `404`, ejecutá en PowerShell con las claves configuradas en Compose. Este ejemplo usa los valores predeterminados de desarrollo:

```powershell
$env:GPS_ADAPTER_TEST_BASE_URL = "http://$(docker compose port gps-tracker 8080)"
$env:GPS_TRACKER_XTR_API_KEY = "sk_xtr_9F3a7C21bE6d4A10f2c8e5b7d913"
$env:GPS_TRACKER_NAVTRACK_API_KEY = "sk_nav_7b61d9e4c3a2485fae10c77d5b2f"
$env:GPS_TRACKER_GEOPULSE_API_KEY = "sk_geo_f2d84a1c9e7345b8a6d1c3f0972e"
npm.cmd run test:run -- tests/gps-adapter-http.test.ts
```

## CU 31 — Notificar ubicación de bolsín

`POST /api/auth/cu31/notificar-ubicacion` permite probar la notificación con una sesión válida. La ruta usa la misma cookie `bolsines_sesion` que el login y el layout protegido.

| Participante                            | Operación                                                                              | Responsabilidad                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `PantNotificarUbicacionBolsin`          | `atender(request: Request): Promise<Response>`                                         | Lee el JSON, llama al gestor y traduce su resultado a HTTP.                    |
| `GestorNotificarUbicacionBolsin`        | `notificarUbicacionDeBolsin(solicitud: SolicitudNotificacionUbicacion): Promise<void>` | Valida el DTO, prepara el mensaje en HTML y texto plano y delega en `ServicioCorreo`. |
| `ServicioCorreo` y `ServicioCorreoSMTP` | `enviarCorreo(destinatario: string, asunto: string, contenido: string, html?: string): Promise<void>` | La implementación usa Nodemailer y espera la aceptación SMTP.                  |

El Route Handler autentica antes de llamar a la pantalla. El gestor recibe el correo del GCM y la última ubicación por DTO, incluida la fecha original del GPS. El gestor del CU 36 resuelve esos datos antes de invocar este flujo. El correo HTML usa la identidad de Bolsines y un botón para abrir las coordenadas en Google Maps. La misma notificación incluye una versión en texto plano.

Compose configura `SMTP_HOST=mailpit`, `SMTP_PORT=1025` y `SMTP_FROM=notificaciones@bolsines.test`. `SMTP_FROM` se puede configurar desde `.env`. El SMTP queda dentro de la red de Compose y la bandeja de Mailpit se publica en [http://localhost:8025](http://localhost:8025). En `/inicio`, **Abrir Mailpit** abre la bandeja en otra pestaña y **Seguimiento** muestra la descripción «Consultar ubicación de bolsines».

### Prueba manual desde PowerShell

```powershell
# Si el entorno de prueba todavía no tiene SESSION_SIGNING_KEY, configurala una vez:
# $env:SESSION_SIGNING_KEY = node -p "require('node:crypto').randomBytes(32).toString('hex')"
docker compose up -d --build
docker compose ps -a

$base = 'http://127.0.0.1:3000'
$login = @{ nombre = 'bolsines.demo'; contrasena = '123456' } | ConvertTo-Json
Invoke-RestMethod "$base/api/auth/login" -Method Post -ContentType 'application/json' -Body $login -SessionVariable sesion | Out-Null
$datos = @{
  emailDestino = 'gcm.cm-cba@example.test'
  nroBolsin = 36001
  latitud = '-31.4201'
  longitud = '-64.1888'
  fechaHoraActualizacion = '2026-11-15T17:35:00.000Z'
} | ConvertTo-Json
Invoke-RestMethod "$base/api/auth/cu31/notificar-ubicacion" -Method Post -ContentType 'application/json' -Body $datos -WebSession $sesion
```

Usá la clave de sesión vigente si querés conservar sesiones existentes. Con el usuario de demostración de `init.sql`, la respuesta esperada es `200` con `{"aceptada":true}`. En Mailpit, abrí el mensaje para verificar el destinatario, el asunto, la fecha GPS y el enlace de Google Maps. Los errores esperados son `400` para JSON o datos inválidos, `401` para sesión ausente o inválida, `503` para un fallo SMTP y `500` para otros errores internos.

```powershell
npm.cmd run test:run -- tests/notificar-ubicacion.test.ts
```

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

## Seguimiento de bolsines en el mapa (CU 36)

El servicio `backend` de Compose sirve la interfaz y los endpoints en una sola aplicación Next.js. La raíz redirige a `/inicio`; sin sesión, el proxy lleva a `/login`. La pantalla de seguimiento usa el layout protegido.

Abrí [Seguimiento de bolsines](http://localhost:3000/seguimiento) e iniciá sesión con el usuario Encargado de Bolsines de la base de demostración. Para usar los fixtures 101 y 110 de Córdoba se requiere una base que ya los contenga. El seed aplica a bases nuevas y no agrega esas filas a una base inicializada.

`GET /api/auth/cu36/seguimiento` consulta los bolsines Enviados de la comisión de la sesión y obtiene sus ubicaciones mediante el adaptador XTR. Para los fixtures traduce el par comisión local y número de bolsín al código oficial de sede. El mapa de OpenFreeMap usa MapLibre GL JS 5.6.1 y requiere acceso a jsDelivr y `tiles.openfreemap.org`. Al entrar, el zoom se calcula para incluir todos los puntos recibidos con margen. Se puede seleccionar desde un marcador o la lista y recuperar el encuadre con **Ver todos los puntos**.

La Boundary `PantallaConsultarUbicacionDeBolsines` delega en `GestorConsultarUbicacionDeBolsin`. `InterfazGoogleMaps.obtenerMapaConPosicionDeBolsines()` llama a `ServidorGoogleMaps.getMapaLocation()` para preparar el estilo OpenFreeMap y las posiciones que consume MapLibre. Los nombres de ambas clases corresponden al UML.

Filtrá por precinto o comisión de destino. Al seleccionar un bolsín, elegí **Confirmar notificación** o **No enviar correo**. Para verificar el envío en desarrollo, abrí [Mailpit](http://localhost:8025) y comprobá el destinatario, el número de bolsín, las coordenadas y la fecha GPS.

| Operación | Contrato |
| --- | --- |
| `GET /api/auth/cu36/seguimiento` | Devuelve `{ comision, mapa: { estilo, puntos }, sinUbicacion }`. |
| `POST /api/auth/cu36/seguimiento/seleccion` | Recibe `{ bolsinId }`, valida origen y estado, y devuelve la selección habilitada para confirmar. |
| `POST /api/auth/cu36/seguimiento` | Recibe `{ bolsinId }`. Vuelve a validar sesión, rol, origen y estado, obtiene el GCM y el GPS, e invoca al CU 31. Devuelve `{ aceptada: true }` si el SMTP aceptó el envío. |

La confirmación requiere exactamente un GCM para la CM destino. Si el GPS o el correo fallan, se informa el error. La matriz de correspondencia UML y las diferencias entre las vistas están en [el nodo del CU 36](docs/cerebro/nodos/PPAI-CU-36.md#nacho-consulta-selección-y-aviso-al-gcm).

### Tecnologías cartográficas utilizadas en el CU 36

El mapa interactivo de `/seguimiento` no utiliza la API ni el SDK de Google Maps. El equipo eligió MapLibre GL JS y el estilo **Bright** de OpenFreeMap por la estética buscada para la pantalla de seguimiento.

| Componente | Responsabilidad |
| --- | --- |
| API GPS oficial de la cátedra | Proporciona las coordenadas y la fecha de actualización de los bolsines. |
| `AdaptadorXTR4500L` | Interpreta, valida y normaliza la respuesta JSON de XTR-4500L en `adaptarLocalizacionBolsines()`. |
| `GestorConsultarUbicacionDeBolsin` | Recibe la matriz normalizada de `InterfazGPSTracker`, asocia las ubicaciones a los bolsines y prepara los puntos para la pantalla. |
| `InterfazGoogleMaps` | Frontera cartográfica definida en el UML. `obtenerMapaConPosicionDeBolsines()` delega en `ServidorGoogleMaps`. |
| `ServidorGoogleMaps` | `getMapaLocation()` devuelve los puntos y la URL del estilo de OpenFreeMap. |
| MapLibre GL JS | Renderiza el mapa y los marcadores y controla la interacción en el navegador mediante `MapaBolsines.tsx`. |
| OpenFreeMap | Proporciona el mapa base y los recursos cartográficos que carga MapLibre. |

Los nombres y las operaciones de `InterfazGoogleMaps` y `ServidorGoogleMaps` proceden del diseño original y se conservan para demostrar ante la cátedra la correspondencia entre el UML aprobado y las clases implementadas, incluida la relación de delegación entre ellas. El análisis del JSON del GPS ocurre en el adaptador XTR; el gestor trabaja con las ubicaciones ya normalizadas.

El botón **Ver ubicación en Google Maps** del correo del CU 31 abre una URL pública con las coordenadas. Ese enlace es independiente del mapa interactivo de `/seguimiento`.
