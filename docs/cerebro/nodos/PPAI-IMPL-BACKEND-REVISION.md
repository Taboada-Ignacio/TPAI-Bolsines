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
- [x] Singleton de Prisma Client en `src/persistence/prisma.ts`.

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
- [ ] Implementación de `IGPSTrackerAdapter`, adaptadores concretos (`XTR4500LAdapter`, `NavTrackQX7AAdapter`, `GeoPulseMTR900Adapter`) y `GPSTrackerAdapterFactory` en `src/externalInterfaces/gpsTracker/`.
- [ ] `GestorSeguimientoBolsines` en `src/services/` + endpoints del CU 36 en `src/app/api/`.
- [ ] Integración de notificación por email (CU 30/31 — Microsoft Graph o servicio equivalente).

---

### [NACHO] P3 — Selección explícita del modelo GPS implementada

`InterfazGPSTracker` selecciona uno de los tres modelos por consulta a partir de una entrada tipada. Cada adaptador convierte el formato externo a una representación común para el CU 36.

| Modelo | Operación externa | Formato |
| --- | --- | --- |
| XTR-4500L | `getBolsinLocation()` | JSON |
| NavTrack QX-7A | `retrieveTrackingData()` | CSV |
| GeoPulse MTR-900 | `fetchCargoPositions()` | Matriz bidimensional |

La selección es explícita y se mantiene en el ámbito de la consulta. Cualquier futura asociación persistida requiere una decisión de negocio.

### [NACHO] P4 — Fuera del alcance del trabajo práctico

La seguridad adicional de credenciales queda fuera del alcance académico. Argon2, bcrypt, hash de contraseñas, JWT y mecanismos adicionales de autorización o endurecimiento quedan fuera de los requisitos para completar el CU 36. El alcance académico comprende el seguimiento de bolsines, el patrón Adapter, la separación de responsabilidades, GRASP, SOLID, la persistencia y la integración entre componentes.

### [NACHO] P5 — Implementación del CU 36 pendiente

El desarrollo continúa por etapas. A partir de la infraestructura, el dominio, la persistencia, los CRUD de catálogos y la carga inicial descritos en la sección 2, quedan pendientes:

- Repositorio específico de Bolsín, `GestorSeguimientoBolsines` y endpoints del CU 36.
- Integración con Google Maps.
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

### [NACHO] Simulador local de los tres GPS

El backend ofrece tres endpoints en `/api/gps-simulator` con los formatos JSON, CSV y matriz de la ERS. Cada consulta selecciona un punto sobre la ruta nacional asignada al número de bolsín. El GeoJSON local incorpora los tramos oficiales de RN 7, RN 9 y RN 40 relevados por Vialidad Nacional. La fecha de última actualización se elige entre la hora del servidor y los 60 minutos anteriores. En desarrollo, `simularFallo=1` permite reproducir la falta de respuesta prevista en A3.

### [NACHO] Patrón Adapter para los tres GPS

`InterfazGPSTracker` crea el adaptador según el modelo recibido y usa `IAdaptadorLocalizacionBolsines`. La configuración por constructor conserva el polimorfismo y permite asociar el número de bolsín con su CM origen para XTR o con su CM destino para QX. MTR recibe únicamente los números. Los adaptadores consultan el simulador por HTTP y devuelven una matriz `string[][]` de filas con número, latitud, longitud y fecha ISO 8601 UTC. Los errores se propagan para su tratamiento posterior en el gestor del CU 36.

### [NACHO] Comparación inicial con el diagrama Adapter v8

| Participante UML | Contrato y estado que muestra v8 | Código antes de la refactorización |
| --- | --- | --- |
| `InterfazGPSTracker` (`«Boundary»`) | `apisKeys`, `listadoBolsines`, `nrosBolsines`, `codigosCMOrigen`, `codigosCMDestino` y `adaptador` privados. `crearAdaptador(): void` y `obtenerLocalizacionDeBolsines(nrosBolsines, codigosCMOrigen): String[][]` públicos. | Mantiene un adaptador común opcional, un cliente y una clave. Ambas operaciones reciben `SolicitudLocalizacionGps`, que aporta el modelo y, para QX, CM destino. La primera devuelve el adaptador. |
| `IAdaptadorLocalizacionBolsines` (`«Interface»`) | Tres operaciones sin argumentos. `recibirLocalizacionBolsines(): String[][]`, `solicitarLocalizacionBolsines(): void` y `adaptarLocalizacionBolsines(): void`. | Las tres operaciones existen. Recibir y solicitar retornan `Promise` para esperar HTTP. |
| `AdaptadorXTR4500L` | Atributos privados `apiKey`, `nrosBolsines`, `codigosCMOrigen`, `jsonBolsines` y `datosLocalizacionAdaptado`. Operación pública `new()` sin argumentos y recepción pública con clave, números y códigos de origen. Asociación hacia el servicio XTR. | Hereda la implementación común. El constructor recibe clave, lote de pares y una operación del cliente compartido. |
| `AdaptadorQX7A` | Atributos privados `apiKey`, `nrosBolsines`, `codigosCMDestino`, `stringBolsines` y `datosLocalizacionAdaptado`. Recepción pública con clave, números y códigos de destino. Asociación hacia el servicio QX. | Hereda la implementación común. El constructor recibe clave, lote de pares y una operación del cliente compartido. |
| `AdaptadorMTR900` | Atributos privados `apiKey`, `nrosBolsines`, `matricesBolsines: String[][]` y `datosLocalizacionAdaptado`. Recepción pública con clave y números. Asociación hacia el servicio MTR. | Hereda la implementación común. El constructor recibe clave, lote y una operación del cliente compartido. La base conserva una respuesta matricial por consulta. |
| `ServicioGPSTrackerXTR4500L` | `getBolsinLocation(apiKey, nroBolsin, codCMOrigen): String` público. | Operación en `ClientesGPSTracker`. |
| `ServicioGPSTrackerQX7A` | `retrieveTrackingData(apiKey, nroBolsin, codCMDestino): String` público. | Operación en `ClientesGPSTracker`. |
| `ServicioGPSTrackerMTR900` | `fetchCargoPositions(apiKey, nroBolsin): String[][]` público. | Operación en `ClientesGPSTracker`. |

Un método declarado sin parámetros en una interfaz TypeScript no admite una implementación que exija parámetros adicionales. Además, la firma de la frontera en v8 solo recibe origen y no especifica de dónde salen el código de destino ni el modelo. Estas decisiones afectan el contrato público y quedan pendientes de aprobación. La separación de los servicios y las referencias unidireccionales puede implementarse de forma independiente.

### [NACHO] Servicios concretos y asociaciones del Adapter v8

Cada adaptador tiene una referencia privada a exactamente una instancia de su servicio, inyectada por constructor. Los servicios exponen únicamente su operación de proveedor y reutilizan `TransporteHTTPGPS`. La dirección implementada es `InterfazGPSTracker → IAdaptadorLocalizacionBolsines → adaptador concreto → servicio del proveedor → transporte HTTP → simulador`. La asociación adaptador–servicio usa composición de objetos.

`Int` y `String` se representan como `number` y `string`. El guion de los nombres del modelo se omite en los identificadores TypeScript. Las firmas de servicios conservan los parámetros de v8 y envuelven su retorno en `Promise` para esperar HTTP. La frontera y el Target conservan provisionalmente sus firmas de código previas. Los concretos conservan la clase base compartida del código, que no figura en v8. Queda pendiente decidir las firmas de recepción, cómo se suministran el modelo y CM destino a la frontera, y cómo representar los atributos de los lotes directamente en las clases UML, incluido `matricesBolsines`.

### [NACHO] Adapter finalizado según el UML corregido

La decisión aprobada resuelve los puntos provisionales anteriores. Los tres adaptadores declaran directamente sus atributos y las tres operaciones de `IAdaptadorLocalizacionBolsines`. Se eliminó la clase base. `InterfazGPSTracker` conserva el estado del lote y crea el concreto con `crearAdaptador(): void`. Cada asociación adaptador–servicio tiene navegabilidad hacia exactamente un servicio concreto. La tabla de clases y las firmas para trasladar a draw.io están en [PPAI-PAT-ADAPTER-GPS.md](PPAI-PAT-ADAPTER-GPS.md#nacho-especificación-aprobada-del-adapter-gps).

La suite habitual pasó 212 pruebas. Las cuatro pruebas HTTP también pasaron contra Next.js en desarrollo mediante un canal local de Windows, con casos para XTR, QX, MTR y el `503`. Pasaron TypeScript, ESLint, la validación de Prisma y Prettier para el código, las pruebas y el README. Los tres nodos editados ya tenían diferencias de formato respecto de Prettier en `HEAD`. El build de producción pasó con `npm run build -- --webpack` tras un `EPERM` de Turbopack al crear el enlace de Prisma. `docker compose config --quiet` pasó. El entorno denegó el acceso al motor Linux de Docker, por lo que el arranque y las consultas desde el contenedor quedan por verificar.

La implementación de los métodos pendientes de las entidades, la integración con el gestor, y el desarrollo y la verificación del CU 36 quedan para la etapa siguiente. El [tramo GPS previsto](PPAI-CU-36.md#nacho-tramo-gps-del-cu-36-con-cm-origen) usa XTR-4500L con CM origen y conserva el uso posterior de CM destino para el correo.

### [NACHO] Métodos de dominio y alcance GPS vigente

`Bolsin.obtenerCodCMOrigen(): string` y `Bolsin.obtenerCodCMDestino(): string` delegan en sus respectivas comisiones. `Empleado.esTuCM(cm: ComisionMedica): boolean` compara por código. `Empleado.sosGCM(): boolean` delega en `Rol.esGCM(): boolean`, que reconoce el nombre exacto del catálogo. Las pruebas cubren asociaciones distintas, identidad lógica y delegación. Queda pendiente integrar los tres recorridos en el gestor.

---

## 4. Modo en memoria con `pg-mem` (y cómo desactivarlo para Docker)

Para desarrollar y testear el frontend sin depender de Docker ni de una instancia externa de PostgreSQL, en `feature/frontend` se agregó soporte opcional de PostgreSQL en memoria (`pg-mem`):

- **Archivos:**
  - `src/persistence/prisma.ts`: `getPrisma()` revisa `process.env.USE_PG_MEM === "true"`.
  - `src/persistence/pg-mem-prisma.ts`: `crearPrismaEnMemoria()` levanta una instancia `pg-mem`, ejecuta el DDL de `prisma/migrations/20261114202500_init_domain_entities/migration.sql` y carga los seeds iniciales (`rol`, `estado`, `comision_medica`, `usuario`, `empleado`).
  - `tests/pg-mem-integration.test.ts`: test de integración que valida tablas, seeds, login, registro y actualización de perfil sobre `pg-mem`.
- **Cómo desactivarlo para correr con Docker + PostgreSQL real (como antes):**
  1. En `.env` (o en el entorno del contenedor), **no definir `USE_PG_MEM`** o dejar **`USE_PG_MEM=false`** (en `docker-compose.yml` no está seteada, así que por defecto ya usa PostgreSQL real).
  2. Asegurar que `DATABASE_URL` apunte al servicio `postgres` (en Docker Compose ya se arma con `DOCKER_DATABASE_URL` / `POSTGRES_*`).
  3. Con `USE_PG_MEM` ausente o distinto de `"true"`, `getPrisma()` instancia `new PrismaClient({ adapter: new PrismaPg({ connectionString }) })` y se conecta normalmente a PostgreSQL.

---

### [NACHO] Inicialización automática de PostgreSQL

El servicio existente `migrate` clasifica la base antes de aplicar Prisma. Una base nueva registra un marcador pendiente en el esquema técnico `bolsines_bootstrap`. La carga, la comprobación de un GCM con usuario y correo por cada una de las 24 comisiones y la confirmación del marcador son atómicas. Una base completa aplica las migraciones pendientes y omite el seed. Para adoptar una base legada se exige el esquema, el historial y evidencia de datos. Las bases parciales bloquean el arranque dependiente.

Pasaron 213 pruebas de Vitest, TypeScript, ESLint, la validación de Prisma y `docker compose config --quiet`. Cuatro pruebas HTTP quedaron omitidas. Siete escenarios con dobles verificaron el orden de inicialización, la omisión del seed, la adopción legada y el rollback. Las pruebas de primer arranque, reinicio, conservación de datos e inicialización incompleta con PostgreSQL quedan pendientes por acceso denegado al motor de Docker.

### [NACHO] CU 31 disponible para prueba independiente

El Route Handler autenticado delega en `PantNotificarUbicacionBolsin`, que invoca al gestor. Se conserva el prefijo `/api/auth` del endpoint. La sesión también se usa en el layout moderno mediante una cookie con alcance `/`. El gestor valida el DTO y depende de `ServicioCorreo`. Nodemailer envía a Mailpit por SMTP local. Las pruebas cubren validación, composición, aceptación y rechazo SMTP, errores HTTP y sesión. La futura integración con CU 36 aportará el destinatario y la ubicación preparados.

Pasaron 230 pruebas de Vitest, incluidas 17 del CU 31. Cuatro pruebas HTTP de GPS quedaron omitidas. Pasaron TypeScript, ESLint, Prisma, el build de producción con Webpack y la validación de Compose. El envío real a Mailpit queda por verificar porque el entorno denegó acceso al motor de Docker. El README incluye la prueba manual con sesión y datos ficticios.

### [NACHO] Migración al GPS Tracker oficial

Los endpoints y datos del simulador interno descriptos arriba se retiraron. Compose construye `gps-tracker` con Java 17 desde la revisión oficial `bd457ed8349a08dad9f3533dd93530aebf844204`. El backend espera su health check y consulta `http://gps-tracker:8080`. El [nodo del Adapter](PPAI-PAT-ADAPTER-GPS.md#nacho-migración-al-gps-tracker-oficial) describe el contrato. PostgreSQL, el seed, el CU 31 y Mailpit se conservaron.

Pasaron TypeScript, ESLint, el build con Webpack y la validación de Compose. Vitest ejecutó 219 pruebas con éxito y omitió las seis que requieren el GPS oficial. El motor de Docker denegó acceso al intentar levantar el stack. Queda pendiente la verificación del servicio Java 17 y de la red interna de Compose.

### [NACHO] Configuración de claves en InterfazGPSTracker

Compose comparte las claves por modelo entre el backend y el GPS oficial mediante las variables de Spring correspondientes. La frontera valida las tres claves al construirse y conserva la selección por modelo documentada en [el nodo del Adapter](PPAI-PAT-ADAPTER-GPS.md#nacho-validación-de-apiskeys-en-la-frontera-gps). Vitest pasó 223 pruebas y omitió seis de integración HTTP que requieren el GPS oficial.

### [NACHO] Primera pantalla de consulta del CU 36

El endpoint autenticado de seguimiento conecta una consulta de bolsines Enviados por CM origen con `GestorConsultarUbicacionDeBolsin` y el Adapter XTR. La asignación de sede oficial está limitada a los diez fixtures del seed. La pantalla proyecta todas las posiciones recibidas y comparte la selección entre mapa y lista. La prueba de gestor cubre las dos sedes de Córdoba en un mismo lote y la consulta vacía. La prueba en vivo del mapa y los contenedores quedó pendiente por acceso local restringido.

Pasaron TypeScript, ESLint y 225 pruebas de Vitest. Se omitieron las seis pruebas HTTP que requieren el GPS oficial. El build con Webpack falló con EPERM al crear un directorio bajo .next/static.
---

## 4. Modo en memoria con `pg-mem` (y cómo desactivarlo para Docker)

Para desarrollar y testear el frontend sin depender de Docker ni de una instancia externa de PostgreSQL, en `feature/frontend` se agregó soporte opcional de PostgreSQL en memoria (`pg-mem`):

- **Archivos:**
  - `src/persistence/prisma.ts`: `getPrisma()` revisa `process.env.USE_PG_MEM === "true"`.
  - `src/persistence/pg-mem-prisma.ts`: `crearPrismaEnMemoria()` levanta una instancia `pg-mem`, ejecuta el DDL de `prisma/migrations/20261114202500_init_domain_entities/migration.sql` y carga los seeds iniciales (`rol`, `estado`, `comision_medica`, `usuario`, `empleado`).
  - `tests/pg-mem-integration.test.ts`: test de integración que valida tablas, seeds, login, registro y actualización de perfil sobre `pg-mem`.
- **Cómo desactivarlo para correr con Docker + PostgreSQL real (como antes):**
  1. En `.env` (o en el entorno del contenedor), **no definir `USE_PG_MEM`** o dejar **`USE_PG_MEM=false`** (en `docker-compose.yml` no está seteada, así que por defecto ya usa PostgreSQL real).
  2. Asegurar que `DATABASE_URL` apunte al servicio `postgres` (en Docker Compose ya se arma con `DOCKER_DATABASE_URL` / `POSTGRES_*`).
  3. Con `USE_PG_MEM` ausente o distinto de `"true"`, `getPrisma()` instancia `new PrismaClient({ adapter: new PrismaPg({ connectionString }) })` y se conecta normalmente a PostgreSQL.

### [NACHO] Integración con el layout del frontend

La raíz redirige a `/inicio` y el proxy redirige a `/login` si falta una sesión. El grupo de rutas protegido valida la sesión persistida y comparte la cookie de alcance `/` con los endpoints. `/seguimiento` vive en ese grupo y usa `MapaBolsines` con MapLibre y OpenFreeMap. La pantalla consume `GET /api/auth/cu36/seguimiento`, mantiene el encuadre del lote, la selección por marcador o lista y la actualización manual. Se conserva un solo proceso Next.js en Compose con PostgreSQL, GPS oficial, migraciones, seed y Mailpit. Los filtros y la confirmación de notificación quedan pendientes.

ESLint, Prisma validate y Compose config pasaron. Vitest registró 250 pruebas aprobadas, seis omitidas y tres suites bloqueadas por dependencias locales ausentes. TypeScript encontró módulos ausentes y tipos de Next generados antes de retirar la ruta duplicada. El build falló por DNS de Google Fonts y por permisos de escritura bajo `.next`. La instalación de las dependencias faltantes quedó bloqueada por DNS del registro de npm.

### [NACHO] Seguimiento y cancelación al salir del mapa

La corrección se limita al ciclo de vida de la pantalla y de MapLibre (ver nodo CU 36). La suite local registró 260 pruebas aprobadas y seis HTTP contra el GPS omitidas. El motor de Docker denegó acceso.

ESLint pasó. El typecheck estándar detectó referencias generadas obsoletas bajo `.next/dev/types`. El build con Webpack quedó bloqueado por DNS de Google Fonts y por permisos de escritura bajo `.next`.

### [NACHO] CU 36 y delegación al CU 31

La pantalla de seguimiento delega la consulta, la selección y la confirmación en `PantallaConsultarUbicacionDeBolsines` y `GestorConsultarUbicacionDeBolsin`. Se reusan la sesión persistida y el envío del CU 31. Los repositorios hidratan entidades para aplicar las reglas de origen, estado y rol en el dominio. El [nodo del CU 36](PPAI-CU-36.md#nacho-consulta-selección-y-aviso-al-gcm) registra la correspondencia UML, los contratos y las diferencias entre vistas.

Verificaciones de esta entrega: Vitest pasó 269 pruebas con un worker y omitió las seis pruebas HTTP del GPS. ESLint, Prisma y la validación de Compose pasaron. El typecheck estándar tropieza con referencias obsoletas de `.next/dev`; la comprobación que excluye esa salida generada obtuvo cero diagnósticos. El build con Webpack quedó bloqueado por DNS de Google Fonts y por permisos en `.next`. El acceso denegado a Docker impidió comprobar el mapa con GPS real y la recepción en Mailpit.

### [NACHO] Formato del correo de ubicación

`ServicioCorreoSMTP` acepta el HTML opcional del CU 31 y conserva el cuerpo en texto plano. El [nodo de notificación](PPAI-CU-30.md#nacho-correo-con-la-identidad-visual-de-bolsines) detalla la presentación. Vitest pasó 270 pruebas y omitió seis HTTP contra el GPS. ESLint y la configuración de Compose pasaron. Una prueba con el transporte en memoria de Nodemailer confirmó las dos alternativas MIME. El typecheck estándar encontró referencias obsoletas en `.next/dev`; al excluir esa caché, TypeScript obtuvo cero diagnósticos. El build con Webpack quedó bloqueado por DNS de Google Fonts y por permisos de escritura bajo `.next`. La entrega visual en Mailpit quedó pendiente por acceso denegado al motor de Docker y falta de conexión a la bandeja local.

### [NACHO] Integración cartográfica efectiva

El backend devuelve el estilo de OpenFreeMap y los puntos normalizados por el Adapter XTR. MapLibre GL JS renderiza `/seguimiento` en el navegador. Las referencias anteriores a Google Maps describen el UML o decisiones históricas. El mapa implementado prescinde de su API y SDK. El [nodo del CU 36](PPAI-CU-36.md#nacho-tecnologías-cartográficas-del-cu-36) registra la elección estética y distingue el enlace público del correo.

### [NACHO] Reinicio del gestor del CU 36 (2026-11-18)

A pedido del usuario se retiró toda la lógica de `GestorConsultarUbicacionDeBolsin` para reprogramarlo desde cero. Esta sección reemplaza las descripciones anteriores del gestor como funcional: consulta, selección y confirmación están pendientes. Se eliminaron métodos privados, mapeos de fixtures, construcción de DTOs, consultas GPS y delegación al CU 31 dentro del gestor.

Se conservan la clase, el error exportado, los argumentos del constructor y las firmas de los tres métodos públicos para mantener compatibles los consumidores existentes. El constructor no guarda ni utiliza dependencias; el proveedor GPS es opcional y no se instancia. Cada operación rechaza con `ErrorSeguimientoBolsines(503, "Gestor pendiente de implementación.")`, que la Boundary transforma en HTTP 503. No se devuelve una consulta vacía como si hubiera sido exitosa. El Adapter, entidades, repositorios, pantalla y CU 31 independiente siguen en sus archivos existentes.

El UML aprobado se conserva como objetivo de reimplementación; el esqueleto actual no implementa sus responsabilidades ni colaboraciones. Las 12 pruebas anteriores de `tests/seguimiento-bolsines.test.ts` se preservan en una suite `describe.skip` y deben revisarse y reactivarse durante la reimplementación.

Verificación: Vitest con un worker pasó 307 pruebas y omitió 18 (12 del gestor y 6 HTTP GPS). ESLint de los archivos modificados pasó. El typecheck no pudo aprobarse por referencias obsoletas en `.next/dev`, ausencia de `maplibre-gl` y tipos `google` en archivos ajenos al cambio. Pendiente: reimplementar el gestor según UML, reactivar sus pruebas y verificar CU 36 completo con GPS y correo.

### [NACHO] Reinicio de los adaptadores y servicios GPS

La frontera GPS quedó sin implementaciones de proveedor. Véase el [nodo del Adapter](PPAI-PAT-ADAPTER-GPS.md#nacho-reinicio-de-la-implementación-del-adapter-gps-2026-11-18) para el comportamiento provisional y las suites pendientes.

Verificación del reinicio GPS: Vitest pasó 272 pruebas y omitió las 12 del gestor. ESLint de los archivos TypeScript editados pasó. El typecheck sigue bloqueado por las referencias obsoletas de Next y las dependencias y tipos faltantes de mapas ya registrados. El grafo se regeneró con 37 nodos y 184 aristas válidas.

### [NACHO] Capa de persistencia

Se movieron los seis repositorios Prisma, la conexión Prisma, la implementación pg-mem y los dos auxiliares de mapeo y escritura a `src/persistence/`. Los archivos conservan su contenido. Se actualizaron los imports y mocks en los consumidores. Los contratos del dominio, el UML y los endpoints conservan sus responsabilidades.

Vitest pasó 272 pruebas y omitió las 12 del gestor. ESLint pasó para los archivos de la reorganización. Typecheck continúa bloqueado por los errores previos de tipos generados de Next y dependencias de mapas.

### [NACHO] Capa de integraciones externas

Se movieron ServidorGoogleMaps a `src/integrations/maps/`, ServicioCorreoSMTP a `src/integrations/mail/` y TransporteHTTPGPS a `src/integrations/gpsTracker/`. Se actualizaron los imports de las fronteras y rutas de CU 36 y CU 31 y de sus pruebas. El cambio conserva el comportamiento, las relaciones del UML y la persistencia en `src/persistence/`.

Vitest aprobó 272 pruebas y omitió las 12 del gestor. ESLint pasó para los archivos TypeScript de la reorganización. TypeScript sigue reportando referencias obsoletas en .next/dev y dependencias o tipos faltantes de MapLibre y Google. Sigue pendiente reimplementar el gestor y los servicios GPS.

### [NACHO] Adapter GPS implementado de forma independiente

Volvieron los tres adaptadores y sus respectivos servicios en `src/integrations/gpsTracker/`. La frontera admite la firma XTR del UML actualizado y la sobrecarga anterior. Se contrastaron las operaciones con los diagramas de clases y secuencia. El gestor, las pantallas y rutas del CU 36 quedaron fuera de esta tarea. Véase el [nodo del Adapter GPS](PPAI-PAT-ADAPTER-GPS.md).

Vitest aprobó 276 pruebas y omitió las 12 del gestor. Las cuatro pruebas nuevas usan respuestas HTTP simuladas. ESLint y Prettier pasaron para los archivos del patrón y su prueba. TypeScript reportó errores previos en los tipos generados de Next, MapLibre y tipos de Google. El build genero Prisma Client y luego fallo porque no pudo descargar las fuentes de Google Fonts ni resolver maplibre-gl.

### [NACHO] Fronteras externas agrupadas por proveedor

`src/externalInterfaces/gpsTracker/` contiene la frontera GPS, el contrato, los tres adaptadores y la validación de localizaciones. `src/externalInterfaces/maps/` contiene la frontera cartográfica. Se actualizaron las referencias de los consumidores, pruebas y especificaciones. Las clases conservan sus firmas y relaciones UML. Los servicios concretos siguen en `src/integrations/`.

Vitest aprobó 276 pruebas y omitió las 12 del gestor. ESLint y Prettier pasaron en los archivos TypeScript afectados. El chequeo global de tipos sigue bloqueado por las referencias generadas de Next y los tipos o dependencias de mapas ya registrados.

### [NACHO] Sobrecargas GPS con modelo explícito

La frontera selecciona XTR, QX o MTR mediante el primer argumento. XTR toma códigos de origen, QX de destino y MTR requiere solo los números además del modelo. Se actualizaron el ejemplo del README y las expectativas de llamada en las pruebas. El gestor sigue pendiente de integración.

Vitest aprobó 276 pruebas y omitió las 12 del gestor. ESLint y Prettier aprobaron los archivos TypeScript afectados. El chequeo de tipos conserva los errores previos de Next y mapas.

### [NACHO] Consulta de mapa disponible en el GET de seguimiento

El GET conecta la sesión, el Adapter GPS y la frontera cartográfica mediante una consulta de lectura en la composición de la ruta. La identificación del Encargado y el listado de envíos del CU 36 mantienen su criterio de visibilidad. La búsqueda cartográfica posterior es global, y la ruta verifica que los identificadores enriquecidos pertenezcan al lote autorizado antes de devolverlos. El gestor permanece como esqueleto para sus métodos propios y la confirmación del correo sigue pendiente. Esta composición difiere del diagrama histórico, donde el gestor invoca la frontera; `obtenerMapaConPosicionDeBolsines()` y `getMapaLocation()` conservan su delegación.

Las consultas GPS distinguen los 404 individuales y evitan inventar coordenadas. La respuesta conserva el total sin ubicación y agrega los datos serializables de recorrido. La persistencia incorpora `buscarParaMapa(numeros)` con una consulta por lote y las dos relaciones de comisión, sin cambios en el esquema.

Vitest aprobó 280 pruebas y omitió 12 del gestor. Las pruebas nuevas cubren la búsqueda por número y sus ambigüedades, el cálculo compartido, el flujo HTTP con datos simulados y la adaptación de la respuesta en el cliente. El chequeo de tipos reportó los errores previos de Next y mapas. La prueba visual y contra los proveedores en vivo quedó pendiente por falta de MapLibre instalado, resolución DNS de npm y disponibilidad del motor de Docker.

### [NACHO] Gestor CU 36 conectado al Adapter XTR, mapa y CU 31

El GET deja la composición provisoria y pasa por el gestor. Se implementaron las operaciones de consulta, selección y confirmación mediante repositorios y servicios existentes. XTR-4500L es el único recorrido GPS del CU 36. El parámetro histórico `modeloGps` conserva la validación de valores conocidos y la elección del modelo se determina en el gestor. QX y MTR conservan sus contratos independientes. El método de selección revalida acceso y estado por solicitud. La confirmación resuelve el gerente y su email en servidor y entrega los datos al CU 31. Véase el [flujo del CU 36](PPAI-CU-36.md#nacho-ejecución-del-cu-36-por-el-gestor-con-xtr-4500l).

Vitest aprobó 293 pruebas, incluidas las 12 pruebas reactivadas del gestor, la ruta GET con sesión firmada y dependencias simuladas, y la propagación de errores en la confirmación. ESLint y Prettier aprobaron los archivos de la tarea. ESLint global conserva un error en `MarcadorMapa.tsx` y dos advertencias previas. El typecheck global conserva referencias obsoletas de Next y la falta de MapLibre y tipos de Google. El build generó Prisma Client y se detuvo por MapLibre y la descarga fallida de Google Fonts. La prueba integral con los servicios en vivo queda pendiente.

### [NACHO] Sedes oficiales desde init.sql

Se retiró origenesGpsDelSeed. init.sql incorpora las sedes oficiales y, al reaplicarse, actualiza los fixtures anteriores identificados por número, precinto y origen anterior. Los remitos y el mapa referencian las nuevas sedes. La verificación en PostgreSQL queda pendiente porque el motor de Docker no está disponible.
