---
id: PPAI-IMPL-FRONTEND-HANDOFF
titulo: Traspaso Frontend - Estado, orden de implementación y reglas para el agente que codifica
tipo: referencia
unidad: PPAI
categoria: IMPL
tags:
  [
    frontend,
    handoff,
    traspaso,
    implementacion,
    specs,
    app-shell,
    login,
    estado-actual,
  ]
conectado_con:
  [
    PPAI-UX-APP-SHELL,
    PPAI-UX-LOGIN,
    PPAI-UX-MANUAL-MARCA,
    PPAI-IMPL-BACKEND-REVISION,
    PPAI-CU-36,
  ]
depende_de: [PPAI-UX-APP-SHELL, PPAI-UX-LOGIN]
---

# Traspaso Frontend — Para el agente que implementa

**Fecha del traspaso:** 2026-11-15 · **Rama:** `feature/frontend` · **Repo:** `TPAI-Bolsines`

## 1. Estado de las Features (dónde quedamos)

| Orden | Feature | Carpeta / Nodo | Estado real |
| ----- | ------- | -------------- | ----------- |
| 1 | **Núcleo de la app en islas** | [`specs/frontend/app-shell-core/`](../../../specs/frontend/app-shell-core/) · [`PPAI-UX-APP-SHELL`](./PPAI-UX-APP-SHELL.md) | **Implementado** (`S-01`–`S-13`). Islas flotantes sin sombras, tema claro/oscuro, `SplitFlap` breadcrumb, GSAP líquido y `EnterCurtain`. |
| 2 | **Login con bolsín 3D (mock)** | [`specs/frontend/login-bolsin-3d/`](../../../specs/frontend/login-bolsin-3d/) · [`PPAI-UX-LOGIN`](./PPAI-UX-LOGIN.md) | **Implementado** (`L-01`–`L-16`). Bolsín 3D procedural con transición continua estilo Rumbo (`0.54s`), auth mock + `src/proxy.ts`. |
| 3 | **CRUD Comisiones Médicas** | [`specs/frontend/comisiones-medicas-crud/`](../../../specs/frontend/comisiones-medicas-crud/) · [`PPAI-UX-COMISIONES-CRUD`](./PPAI-UX-COMISIONES-CRUD.md) | **Implementado** (datos seed locales en `src/services/catalogos/comisiones-medicas.ts`, `ResponsiveSheet` + `Pagination`, header/card mobile pulidos). Listo para conectar a `/api/comisiones-medicas` de `feature/backend`. |
| 4 | **Seguimiento CU 36** | [`specs/frontend/cu36-seguimiento-bolsines/`](../../../specs/frontend/cu36-seguimiento-bolsines/) | **Pendiente / Spec desactualizada**: en `/seguimiento` hay un placeholder visual a sangre (`"Acá va el mapa del CU 36"`). Falta rehacer spec + maqueta en islas y conectar con `GestorSeguimientoBolsines`. |

## 2. Leer antes de escribir código

1. [`PPAI-UX-APP-SHELL`](./PPAI-UX-APP-SHELL.md) — diseño aprobado y reglas del usuario.
2. La maqueta [`docs/referencias/app-shell/maqueta-aprobada-islas.html`](../../referencias/app-shell/maqueta-aprobada-islas.html): es la **referencia visual a igualar** (medidas, radios, colores y tiempos están en su CSS).
3. `specs/frontend/app-shell-core/technical-spec.md` completa.
4. [`PPAI-UX-LOGIN`](./PPAI-UX-LOGIN.md) y su spec, para la segunda feature.
5. [`docs/referencias/rumbo/`](../../referencias/rumbo/) — anatomía de Rumbo y `SplitFlap` de referencia.

## 3. Cómo levantar y usar lo implementado

```bash
npm install
npm run dev
```

- **Rutas activas:**
  - `/login`: acceso con bolsín 3D. Credenciales mock: usuario **`mgomez`**, contraseña **`bolsines`** (el usuario `error` simula HTTP `503`).
  - `/inicio`: tablero de bienvenida dentro del App Shell en islas (tema claro/oscuro desde la isla superior derecha).
  - `/comisiones-medicas`: CRUD completo de sedes (búsqueda, paginado, crear/editar en `ResponsiveSheet`, eliminar con confirmación). Actualmente opera sobre `COMISIONES_MEDICAS_SEED`; para conectar con PostgreSQL real, apuntar a `GET/POST /api/comisiones-medicas` y `PATCH/DELETE /api/comisiones-medicas/[id]` ya implementados por Nacho en `origin/feature/backend` (commits `0634975` y `42d5590`).
  - `/seguimiento`: placeholder visual a sangre esperando la nueva spec + maqueta del CU 36.
- **Checks locales:** `npm run typecheck`, `npm run lint`, `npm run test:run` (`31` tests en verde), `npm run build`.
- **Nota de integración con Backend (`feature/backend`):** ya existen CRUD + seeds de `roles`, `estados` y `comisiones-medicas`; siguen pendientes `/api/auth/login` (para reemplazar el mock de `src/app/api/auth/`) y `GestorSeguimientoBolsines` + endpoints del CU 36. Detail en [`PPAI-IMPL-BACKEND-REVISION`](./PPAI-IMPL-BACKEND-REVISION.md).

## 4. Reglas del usuario (obligatorias)

1. **Tema claro y oscuro en todo componente.** Tokens semánticos; ninguna tarea está terminada si falla en un tema.
2. **Vista previa antes de implementar** cada pantalla nueva: mostrar una maqueta y esperar aprobación. El núcleo ya la tiene aprobada; el login todavía no.
3. **Islas sin profundidad:** borde de `1px`, radios grandes, pegadas al borde, sin sombras.
4. **Estética Rumbo adaptada al moodboard**, nunca panel de administración genérico.
5. **El bolsín 3D es una copia del bolso del moodboard** ([`ref-bolsin-moodboard.png`](../../referencias/login/ref-bolsin-moodboard.png)), no una interpretación libre.
6. **Sin jerga en los textos de la interfaz**; voseo rioplatense.
7. El usuario escribe rápido y con errores de tipeo; interpretar la intención y, si una decisión es suya, preguntar.

## 5. Contradicciones conocidas entre documentos

| Documento                           | Dice                                                                               | Vale                                                                                                                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/brand-guidelines.md` v2.0 §1  | "Modo oscuro: no se implementa"                                                    | **Sí hay tema oscuro** (spec `app-shell-core` §1).                                                                                                                               |
| `docs/brand-guidelines.md` v2.0 §5  | SideNav riel Tinta pegado + Header barra                                           | **Islas** (nodo `PPAI-UX-APP-SHELL`).                                                                                                                                            |
| `docs/brand-guidelines.md` v2.0 §7  | Máximo `280ms`                                                                     | Navegación y revelado hasta `600ms` (nivel "firma").                                                                                                                             |
| `docs/brand-guidelines.md` v2.0 §10 | Tokens `canvas`, `ink`, `cobalt`… de un solo tema                                  | Tokens semánticos claro/oscuro de la spec `app-shell-core` §1.2.                                                                                                                 |
| `login-bolsin-3d/technical-spec.md` | Aplica los tokens de la §10 del manual y crea `/inicio` fuera de un grupo de rutas | Usar los tokens del núcleo; `/inicio` vive en `src/app/(app)/inicio/`; el login debe verse bien en ambos temas. Las tareas `L-02` y `L-03` quedan cubiertas por `S-02` y `S-03`. |
| `login-bolsin-3d`                   | El login guarda la sesión en la cookie `bolsines_sesion`                           | El núcleo usa `getSesionActual()` con sesión demo hasta que exista; al implementar el login, conectar ambos y sumar la cookie efímera `bolsines_entrada`.                        |

La tarea `S-01` corrige el manual. Hasta entonces, **manda la spec más nueva**.

## 6. Datos técnicos que ahorran tiempo

- **Next 16:** el archivo de middleware se llama `src/proxy.ts` y exporta `proxy()`. La documentación de la versión instalada está en `node_modules/next/dist/docs/`; consultarla antes de usar una API.
- **Tailwind v4:** las fuentes de `next/font` van en `@theme inline`. Instrument Serif exige `weight: "400"`.
- **React Three Fiber `9.8.2`** es la versión compatible con React `19.3`.
- **Node:** el proyecto pide `24.x` (`.node-version` = `24.22.3`). Con otra versión, npm muestra `EBADENGINE` (solo aviso).
- **Build:** `npm run build` puede fallar por memoria dentro de un sandbox restringido; fuera del sandbox compila.
- **Prettier:** `npm run format:check` falla por los `.md` de `docs/cerebro` y `specs` que ya existían; el código propio debe pasar. No reformatear en masa los documentos del cerebro sin preguntar.
- **Archivos de referencia:** todo lo de `docs/referencias/` es material de consulta, no código del proyecto (por eso `SplitFlap.reference.txt` no tiene extensión `.tsx`).
- **Checks de cada tarea:** `npm run typecheck`, `npm run lint`, `npm run test:run`, `npm run build`.
- **Después de tocar nodos del cerebro:** `python scripts/generate_graph.py`.

## 7. Mensaje listo para pegarle al agente

```text
Trabajás en el repo TPAI-Bolsines, rama feature/frontend. Antes de escribir código leé AGENTS.md
y el nodo docs/cerebro/nodos/PPAI-IMPL-FRONTEND-HANDOFF.md completo, y seguí sus enlaces
(PPAI-UX-APP-SHELL, la maqueta aprobada y la spec técnica).

Tu tarea: implementar la feature specs/frontend/app-shell-core siguiendo su todos.md, de S-01 a
S-13, en orden y respetando las dependencias. La estética ya está aprobada: la referencia visual
a igualar es docs/referencias/app-shell/maqueta-aprobada-islas.html.

Reglas: todo componente funciona en tema claro y oscuro con tokens semánticos; islas con borde
de 1px y sin sombras; animaciones con GSAP según la spec y con respaldo para movimiento reducido;
textos en español rioplatense. Al terminar cada tarea corré typecheck, lint, tests y build, marcá
la tarea con [x] en el todos.md y contame qué quedó. No hagas commit ni push sin que te lo pida.
Si algo de la spec contradice al manual de marca v2.0, vale la spec.
```
