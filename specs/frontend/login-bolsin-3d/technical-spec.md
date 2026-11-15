# Technical Spec — Login con Bolsín 3D (CU 5 Iniciar Sesión, mockeado)

> **Feature ID:** `login-bolsin-3d`
> **Flujo:** `spec-frontend-craft-flow` — Gate 2 (Especificación Técnica, 3D, Tokens y Coreografía GSAP)
> **Stack:** Next.js `16.4.6` (App Router, `proxy.ts`) · React `19.3.1` · TypeScript `5.9.3` · Tailwind CSS `4.3.5` · GSAP `3.15.1` + `@gsap/react` · Zod `4.6.7`
> **Nuevas dependencias:** `three@0.187.0`, `@react-three/fiber@9.8.2` (soporta React `>=19 <19.4`), `@react-three/drei@10.7.9`, `@types/three@0.187.0` (dev). Más adelante, `@gltf-transform/cli@4.5.1` (dev) cuando llegue el modelo GLB.

---

## 0. Investigación: cómo construir el bolsín 3D

Se evaluaron cuatro caminos (2026-11-15).

| Opción                                                                       | Qué es                                                                                                                                                                                                                 | A favor                                                                                                                                                    | En contra                                                                                                                                                                                                                            | Veredicto                                                                                            |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **vgpu** (`vgpu@0.6.0`, Vercel Labs)                                         | Framework de bajo nivel para **WebGPU + shaders WGSL**: contexto `Gpu`, `effect()`, `draw()`, `frameLoop()`. Se integra con three.js solo para pasarle funciones WGSL a materiales TSL (`tslExports` de `vgpu/three`). | Muy performante; ideal para efectos de pantalla completa (ruido, fondos generativos, transiciones por shader). Tooling para validar shaders sin navegador. | **No tiene escena, cámara, materiales PBR ni cargador de GLB**: habría que escribir todo el render del bolso a mano en WGSL. Solo WebGPU (sin fallback WebGL). Versión 0.x. Requiere configurar el loader de `.wgsl` en Turbopack.   | **No para el bolsín.** Queda anotado como opción para un efecto de shader de fondo en el futuro.     |
| **hairline-create** (skill de `lucasmarkes/hairline`)                        | Genera una figura **isométrica de líneas** (un solo trazo sobre sólidos redondeados) como un HTML autocontenido, con su propio `kernel.js`, que reacciona al puntero.                                                  | Estética muy cuidada; reacciona al puntero; liviano.                                                                                                       | **No es 3D real ni lleva relleno**: sus reglas prohíben color, relleno y brillo. No puede dar el bolsín Elite Blue de tela con volumen del moodboard ni abrirse con cámara. Corre como página HTML aparte, no como componente React. | **No para el bolsín.** Puede servir para ilustraciones lineales de estados vacíos (A1/A2 del CU 36). |
| **Three.js procedural** (React Three Fiber + drei)                           | El bolsín se arma en código con geometrías redondeadas, tubos y toros; materiales físicos.                                                                                                                             | Sin pipeline de assets; cada pieza es controlable; disponible hoy.                                                                                         | Las formas de tela orgánicas (pliegues, costuras, bolso "inflado") son difíciles de lograr en código; puede verse "de juguete".                                                                                                      | **Sí, como implementación de la fase 1** y como respaldo permanente.                                 |
| **Modelo GLB** (Blender, o generado con IA y retocado en Blender) + Three.js | El bolsín se modela como asset `.glb` con piezas separadas y nombradas; Three.js lo carga y GSAP anima sus piezas.                                                                                                     | Máxima calidad visual: tela, costuras, pliegues, el look _clay 3D_ del moodboard. Comprimido con meshopt pesa poco.                                        | Requiere modelarlo (1–2 días en Blender). Los generadores IA (Meshy, Tripo) devuelven una malla única: hay que separar tapa, cierre y correas a mano para poder abrirlo.                                                             | **Sí, como objetivo final (fase 2).**                                                                |

### Decisión

**Runtime: React Three Fiber sobre `WebGLRenderer` (three.js).** Asset: **GLB con contrato de piezas nombradas**, con un **modelo procedural que cumple el mismo contrato** mientras el GLB no exista.

- La coreografía GSAP no sabe de dónde viene el bolsín: anima nodos por nombre (`Lid_L`, `Zipper_Pull`, …). Cambiar el modelo procedural por el GLB es reemplazar un componente, sin tocar timelines.
- Se usa WebGL y no WebGPU porque el login tiene que funcionar en cualquier terminal del depósito. El `WebGPURenderer` de three puede evaluarse después sin cambiar la arquitectura.
- Siempre hay un **póster estático** (`.webp`) del bolsín: se muestra mientras carga la escena, si no hay WebGL (A4) y como imagen de primera pintura (LCP).

---

## 1. Design Tokens & System

Fuente de verdad: [`docs/brand-guidelines.md` v2.0 §10](../../../docs/brand-guidelines.md). Esta feature **aplica por primera vez** esos tokens en `src/app/globals.css` (bloques `@theme` y `@theme inline` completos, tal cual el manual).

### Tokens propios del login

| Token                    | Valor                  | Uso                                                    |
| ------------------------ | ---------------------- | ------------------------------------------------------ |
| `--login-stage-bg`       | `var(--color-canvas)`  | Panel del bolsín                                       |
| `--login-page-bg`        | `var(--color-surface)` | Fondo de página (como el blanco roto de la referencia) |
| `--login-form-w`         | `22rem`                | Ancho de la columna del formulario                     |
| `--login-stage-h-mobile` | `40dvh` (mín. `220px`) | Alto del bolsín en mobile                              |

### Colores 3D (materiales, en espacio sRGB → three los convierte a lineal)

| Pieza                              | Material               | Parámetros                                                                                                                                   |
| ---------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Cuerpo (`Body`, `Lid_L`, `Lid_R`)  | `MeshPhysicalMaterial` | `color #0251B0`, `roughness 0.78`, `sheen 1`, `sheenColor #4D8BE0`, `sheenRoughness 0.55` (el _sheen_ da el brillo aterciopelado de la tela) |
| Correas, cinta del cierre, parches | `MeshStandardMaterial` | `color #D1FF42`, `roughness 0.6`                                                                                                             |
| Tirador y hebillas                 | `MeshStandardMaterial` | `color #C7D1DD`, `metalness 1`, `roughness 0.32`                                                                                             |
| Interior (`Interior`)              | `MeshBasicMaterial`    | `color #0B1220` (sin luz: la "entrada" es un negro tinta limpio)                                                                             |

### Escena

- **Cámara:** `PerspectiveCamera`, `fov 32`, posición `[0, 0.35, 6.2]`, mirando a `[0, 0.1, 0]`. Encuadre del bolsín al ~62% del alto del panel.
- **Luz (sin descargas de red):** `Environment` de drei armado con `Lightformer` locales (luz principal arriba a la izquierda, contraluz frío a la derecha y relleno suave abajo). **No** se usan presets HDR de drei, que se descargan de un CDN.
- **Sombra:** `ContactShadows` de drei bajo el bolsín (`opacity 0.35`, `blur 2.4`, color `#0B1220`).
- **Canvas:** `dpr={[1, 2]}`, `gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}`, fondo transparente (el panel pone el color y el grano).
- **Frameloop:** `"always"` mientras la pestaña está visible y hay movimiento; `"demand"` con movimiento reducido o pestaña oculta (`document.visibilityState`).

---

## 2. Contrato del modelo 3D (`BolsinModel`)

Cualquier implementación del bolsín, procedural o GLB, expone estos nodos (`Object3D` con el nombre exacto):

| Nodo                                         | Rol en la animación                                                 | Pivote                    |
| -------------------------------------------- | ------------------------------------------------------------------- | ------------------------- |
| `Bolsin`                                     | Raíz: flotación, giro hacia el formulario, gesto de "no"            | Centro de masa            |
| `Body`                                       | Cuerpo inferior, fijo respecto de la raíz                           | —                         |
| `Lid_L`, `Lid_R`                             | Mitades de la boca; rotan hacia afuera para abrir                   | Sobre la línea del cierre |
| `Zipper_Track`                               | Cinta lima del cierre                                               | —                         |
| `Zipper_Pull`                                | Tirador; se desplaza a lo largo del cierre                          | Sobre el cierre, eje X    |
| `Strap_L`, `Strap_R`, `Buckle_L`, `Buckle_R` | Correas y hebillas (acompañan a `Body`)                             | —                         |
| `Patch`                                      | Parches lima y gris                                                 | —                         |
| `End_L`, `End_R`, `D_Ring`                   | Testas laterales y argolla (acompañan a `Body`)                     | —                         |
| `Pull_Tab`, `Pull_Cord`                      | Lengüeta lima y cordón del tirador (hijos de `Zipper_Pull`)         | —                         |
| `Interior`                                   | Volumen negro tinta, visible al abrir                               | —                         |
| `Camera_Target`                              | Empty en el centro de la abertura; destino de la cámara al "entrar" | Centro de la boca         |

**Interfaz TypeScript:**

```ts
type BolsinNodes = {
  root: Object3D;
  lidL: Object3D;
  lidR: Object3D;
  zipperPull: Object3D;
  interior: Object3D;
  cameraTarget: Object3D;
  zipperTrackLength: number; // recorrido del tirador en unidades de escena
};
```

`BolsinProcedural` y `BolsinGlb` reciben `onReady(nodes: BolsinNodes)`. La escena registra esos nodos y la coreografía trabaja solo con ellos.

### Referencia de fidelidad: el bolsín del moodboard

El bolsín es una **copia 3D del bolso del moodboard**, no una interpretación libre. Referencia recortada: [`docs/referencias/login/ref-bolsin-moodboard.png`](../../../docs/referencias/login/ref-bolsin-moodboard.png).

| Elemento              | Cómo es en el moodboard                                                                                                                                                                                      | Nodo                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **Silueta**           | Bolso tipo _camera bag_ / duffel corto: caja muy redondeada y acolchada (estilo _clay_), más ancha que alta. Proporción aprox. **ancho 1.45 : alto 1 : profundidad 0.9**. Base apenas más ancha que la tapa. | `Body`                                            |
| **Tela**              | Neopreno / felpa mate, sin brillo especular, con un microtexturado fino. Azul saturado.                                                                                                                      | material del cuerpo                               |
| **Tapa**              | Panel superior acolchado que **sobresale como alero** sobre el frente (labio redondeado a ~60% del alto) y sobre los laterales.                                                                              | `Lid_L`, `Lid_R`                                  |
| **Cierre**            | Cremallera **gruesa de dientes** que recorre la tapa por el centro **de atrás hacia adelante** y baja por el alero frontal. Dientes azules un tono más claro que la tela. Divide la tapa en dos mitades.     | `Zipper_Track` (geometría instanciada de dientes) |
| **Tirador**           | Cursor y lengüeta **metálicos plateados** colgando en el frente, con una **lengüeta de tela lima** debajo y un **cordón fino** que termina en una anilla.                                                    | `Zipper_Pull`, `Pull_Tab`, `Pull_Cord`            |
| **Correas**           | Dos cintas **lima** verticales en el frente: una bajo el tirador (centro-derecha) y otra cerca del borde derecho. Bajan desde el alero hasta la base.                                                        | `Strap_L`, `Strap_R`                              |
| **Hebillas**          | Remate superior de cada correa: hebilla de plástico **lima** (tipo _side-release_) a la altura del labio de la tapa.                                                                                         | `Buckle_L`, `Buckle_R`                            |
| **Parches**           | Abajo a la izquierda del frente, dos cuadrados apilados: **lima arriba, gris claro abajo**.                                                                                                                  | `Patch`                                           |
| **Lateral izquierdo** | Panel de testa separado por una costura con vivo, y una **argolla en D plateada** a media altura.                                                                                                            | `End_L`, `D_Ring`                                 |
| **Lateral derecho**   | Panel de testa igual al izquierdo (sin argolla visible).                                                                                                                                                     | `End_R`                                           |
| **Interior**          | No se ve en el moodboard; al abrir se ve negro tinta (`#0B1220`).                                                                                                                                            | `Interior`                                        |

**Color:** el azul del moodboard es algo más brillante que Elite Blue. Se usa **Elite Blue `#0251B0` como color base** (regla del manual) y el `sheen` `#4D8BE0` levanta las luces para acercarse al tono del moodboard sin salir de la paleta.

**Criterio de fidelidad:** con la cámara en el ángulo de tres cuartos del moodboard (frente a la izquierda, lateral con argolla visible), una captura de la escena puesta al lado de la referencia muestra **todos** los elementos de la tabla, en el mismo lugar y con las mismas proporciones.

### Pipeline del GLB (fase 2)

1. Modelar en Blender (o generar con IA y separar piezas en Blender) respetando los nombres de la tabla; los pivotes de las tapas van sobre la línea del cierre.
2. Exportar glTF Binary (`.glb`), con Y hacia arriba, escala real ~`1` unidad = alto del bolsín, **sin animaciones horneadas** (las anima GSAP).
3. Optimizar: `npx @gltf-transform/cli optimize bolsin.src.glb public/models/bolsin.glb --compress meshopt --texture-compress webp --texture-size 1024`.
4. Presupuesto: **≤ 400 KB** el `.glb`, **≤ 30k triángulos**, texturas ≤ `1024px`.
5. Renderizar el póster desde la misma escena: `public/models/bolsin-poster.webp` (`1200×1200`, ≤ 60 KB).
6. `BolsinGlb` carga con `useGLTF("/models/bolsin.glb")` (drei incluye el decodificador meshopt) y valida que existan todos los nodos; si falta alguno, cae a `BolsinProcedural` y avisa en consola.

---

## 3. Component Architecture & State

```text
src/
├── proxy.ts                               # Protege rutas: sin cookie → /login; con cookie en /login → /inicio
├── app/
│   ├── globals.css                        # Tokens v2.0 completos (§10 del manual) + grano + keyframes
│   ├── layout.tsx                         # next/font (4 familias) + viewport interactiveWidget
│   ├── page.tsx                           # redirect("/inicio")
│   ├── login/page.tsx                     # Server Component: metadata + <LoginView />
│   ├── inicio/page.tsx                    # Temporal: muestra sesión (empleado, CM) + "Cerrar sesión"
│   └── api/auth/
│       ├── login/route.ts                 # MOCK del contrato POST /api/auth/login (lo reemplaza el backend)
│       └── logout/route.ts                # MOCK de POST /api/auth/logout (CU 6)
├── dtos/
│   └── auth.dto.ts                        # Zod: loginRequestSchema, loginResponseSchema, authErrorSchema
├── services/
│   └── auth/
│       ├── session-cookie.ts              # Nombre de cookie, serializar/leer sesión mock
│       └── mock-users.ts                  # Usuario demo mgomez + regla del usuario "error"
├── lib/
│   ├── cn.ts                              # clsx + tailwind-merge
│   └── webgl.ts                           # Detección de soporte WebGL
├── hooks/
│   └── useLoginFlow.ts                    # Máquina de estados del login (reducer puro + efectos)
└── components/
    ├── ui/
    │   ├── actions/Button.tsx             # Keycap 3D (primary/lime/secondary/ghost/danger, sm/md/lg, loading)
    │   ├── forms/Field.tsx                # Label micro-mono + control + error (aria-describedby)
    │   ├── forms/Input.tsx                # 44px, borde line, focus cobalt, invalid
    │   └── forms/PasswordInput.tsx        # Input + botón mostrar/ocultar (aria-pressed)
    ├── layout/
    │   └── BrandMark.tsx                  # Isotipo keycap "B" + wordmark
    └── login/
        ├── LoginView.tsx                  # Client: layout dividido/apilado, orquesta form + escena
        ├── LoginForm.tsx                  # Formulario controlado por useLoginFlow
        ├── LoginStage.tsx                 # Panel del bolsín: póster + carga diferida de la escena
        ├── EnterTransition.tsx            # Overlay tinta final + navegación a /inicio
        └── bolsin3d/
            ├── BolsinScene.tsx            # <Canvas>, cámara, luces, sombra, frameloop
            ├── BolsinProcedural.tsx       # Fase 1: bolsín armado en código (cumple el contrato §2)
            ├── BolsinGlb.tsx              # Fase 2: carga del GLB (cumple el contrato §2)
            └── useBolsinChoreography.ts   # Timelines GSAP sobre BolsinNodes + cámara
```

### Por qué el mock vive en una route handler

El backend es un monolito Next.js en el mismo repo. El front llama a `fetch("/api/auth/login")` **igual que lo hará con el backend real**. Cuando tu compañero implemente el login, reemplaza `src/app/api/auth/login/route.ts` (y `logout`) por la versión con Prisma + hash, y el front no cambia. El contrato está en `src/dtos/auth.dto.ts`, compartido por ambos lados.

### Contrato (`src/dtos/auth.dto.ts`)

```ts
export const loginRequestSchema = z.object({
  usuario: z.string().trim().min(1),
  contrasena: z.string().min(1),
});

export const loginResponseSchema = z.object({
  sesion: z.object({ fechaHoraInicio: z.iso.datetime() }),
  empleado: z.object({
    nombre: z.string(),
    apellido: z.string(),
    rol: z.object({ nombre: z.string() }),
    comisionMedica: z.object({ codigo: z.string(), nombre: z.string() }),
  }),
});

export const authErrorSchema = z.object({
  codigo: z.enum([
    "CREDENCIALES_INVALIDAS",
    "DATOS_INVALIDOS",
    "ERROR_INTERNO",
  ]),
});
```

| Respuesta mock                                          | Caso                             |
| ------------------------------------------------------- | -------------------------------- |
| `200` + `LoginResponse` + `Set-Cookie: bolsines_sesion` | `mgomez` / `bolsines`            |
| `400 { codigo: "DATOS_INVALIDOS" }`                     | El body no pasa Zod              |
| `401 { codigo: "CREDENCIALES_INVALIDAS" }`              | Cualquier otra combinación       |
| `503 { codigo: "ERROR_INTERNO" }`                       | Usuario `error` (para probar A3) |

- Latencia simulada de `600–900ms`.
- Cookie: `httpOnly`, `sameSite: "lax"`, `path: "/"`, `secure` en producción. El valor es la sesión en JSON codificado en base64url **sin firmar**: alcanza para el mock, pero **no es seguro**; el backend real debe usar un id de sesión opaco (punto P4 de [`PPAI-IMPL-BACKEND-REVISION`](../../../docs/cerebro/nodos/PPAI-IMPL-BACKEND-REVISION.md)).

### `proxy.ts`

- `matcher`: todas las rutas excepto `_next/static`, `_next/image`, `favicon.ico`, `models/`, `api/auth/`.
- Sin cookie y ruta ≠ `/login` → `redirect("/login")`.
- Con cookie y ruta = `/login` → `redirect("/inicio")`.

### Máquina de estados (`useLoginFlow`)

```ts
type LoginState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "invalid"; campos: { usuario?: string; contrasena?: string } } // A1
  | { status: "rejected" } // A2
  | { status: "unreachable" } // A3
  | { status: "entering"; sesion: LoginResponse }; // éxito → transición
```

- El reducer es puro y se testea solo.
- `submit()` valida con `loginRequestSchema` antes de llamar a la red; usa `AbortController` para no tener dos envíos en vuelo.
- `rejected` → limpia la contraseña y devuelve el foco a ese campo.
- `entering` → dispara la timeline de éxito; al terminar, `router.replace("/inicio")`.

### Carga diferida y respaldo

- `LoginStage` muestra siempre el póster (`next/image`, `priority`, mismo tamaño que el canvas).
- Si `lib/webgl.ts` detecta soporte, carga `BolsinScene` con `next/dynamic({ ssr: false })` y, cuando la escena avisa `onReady`, hace un fundido cruzado póster → canvas (`0.2s`).
- Sin WebGL (A4) se queda el póster y la transición de éxito es solo el overlay tinta.
- Si el GLB no existe todavía (`public/models/bolsin.glb` ausente), `BolsinScene` usa `BolsinProcedural`. Lo decide una constante `BOLSIN_MODEL_SOURCE: "procedural" | "glb"`.

---

## 4. Layout responsive

| Rango                   | Disposición                                                                                                                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `≥ 1024px`              | Grid de 2 columnas `minmax(0, 0.9fr) minmax(0, 1.1fr)`. Izquierda: `LoginStage` con margen `16px`, `rounded-card`, alto `calc(100dvh - 32px)`. Derecha: formulario centrado vertical, `max-w-[var(--login-form-w)]`; `BrandMark` arriba a la derecha. |
| `< 1024px`              | Columna única: `BrandMark` arriba a la izquierda, `LoginStage` `h-[var(--login-stage-h-mobile)]` sin bordes, título y formulario debajo con gutter `16px`, CTA `lg` a todo el ancho.                                                                  |
| Teclado virtual abierto | `viewport.interactiveWidget = "resizes-content"` en `layout.tsx`; con alto disponible `< 560px` el stage pasa a `24dvh` (container query sobre la vista). La escena reencuadra por `resize` de R3F.                                                   |

---

## 5. GSAP Motion Choreography

Todo se crea dentro de `useGSAP` con `gsap.matchMedia()`:

```ts
mm.add({ motion: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" }, (ctx) => { … });
```

GSAP anima directamente las propiedades de los `Object3D` (`gsap.to(nodes.lidL.rotation, { z: … })`). Con `frameloop="demand"`, cada `onUpdate` llama a `invalidate()`.

> **Excepción del manual:** el login es la pantalla firma. La caída inicial del bolsín (`0.7s`) y la entrada al bolsín (`≤ 1.4s`) superan los `280ms` del sistema. El formulario y los controles respetan los tiempos normales.

### 5.1 Entrada (al montar `/login`)

| t (s)  | Elemento             | Animación                                                         |
| ------ | -------------------- | ----------------------------------------------------------------- |
| `0`    | Panel `LoginStage`   | `autoAlpha 0 → 1`, `scale 0.985 → 1`, `0.4s`, `expo.out`          |
| `0.1`  | `Bolsin` (raíz 3D)   | `position.y +0.6 → 0`, `rotation.z -0.08 → 0`, `0.7s`, `expo.out` |
| `0.15` | Título (2 líneas)    | `y 12 → 0`, `autoAlpha`, `stagger 0.06`, `0.28s`, `power3.out`    |
| `0.27` | Campos + CTA + ayuda | `y 10 → 0`, `autoAlpha`, `stagger 0.05`, `0.24s`, `power2.out`    |

Los campos son usables desde `t = 0` (solo se anima opacidad y transform; nunca `pointer-events`). El foco inicial en **Usuario** se aplica al montar, sin esperar la animación.

### 5.2 Reposo

- Flotación: `Bolsin.position.y` `±0.06` con `sine.inOut`, `2s`, `yoyo`, `repeat: -1`.
- Giro: `Bolsin.rotation.y` `-0.12 ↔ 0.12`, `6s`, `sine.inOut`, `yoyo`, `repeat: -1`.
- Se pausan con la pestaña oculta.

### 5.3 Micro-interacciones

| Disparador           | Animación                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foco en un campo     | Se pausa el giro de reposo; `Bolsin.rotation.y → 0.35` en desktop (mira al formulario) o `rotation.x → 0.15` en mobile (mira hacia abajo), `0.4s`, `power2.out`. Al perder el foco se retoma el reposo. |
| Envío (`submitting`) | `Zipper_Pull.position.x` va y viene `±12%` del recorrido, `0.35s`, `sine.inOut`, `yoyo`, `repeat: -1` hasta la respuesta.                                                                               |
| `rejected` (A2)      | `Bolsin.rotation.y` `+0.07 → -0.07 → 0` (keyframes, `0.3s` en total, `power2.out`) + error `autoAlpha 0 → 1`, `y 4 → 0`, `0.16s`.                                                                       |
| `unreachable` (A3)   | Sin gesto del bolsín; solo el mensaje (`0.16s`).                                                                                                                                                        |
| Botón keycap         | CSS del manual (`100ms`, `-1px` hover, `+2px` active).                                                                                                                                                  |
| Mostrar contraseña   | Cambio de ícono `Eye`/`EyeOff` instantáneo.                                                                                                                                                             |

### 5.4 Éxito: entrar al bolsín (timeline `enter`, ≤ 1.4s)

| t (s)  | Elemento                                                 | Animación                                                                                                               |
| ------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `0`    | Loops de reposo y envío                                  | `kill()`; `Bolsin.rotation` → `0`, `0.25s`, `power2.out`                                                                |
| `0`    | `Zipper_Pull`                                            | Recorre el cierre de punta a punta, `0.45s`, `power2.inOut`                                                             |
| `0.3`  | `Lid_L` / `Lid_R`                                        | Rotan hacia afuera `±1.1 rad`, `0.4s`, `power3.out` (el interior tinta queda a la vista)                                |
| `0.35` | Columna del formulario                                   | `autoAlpha → 0`, `x → -16`, `0.2s`, `power2.in`                                                                         |
| `0.5`  | Cámara                                                   | `position` → `Camera_Target` + `[0, 0.25, 0.35]`, `fov 32 → 20`, `lookAt` al target en cada update, `0.6s`, `power3.in` |
| `0.5`  | `LoginStage` (DOM)                                       | `scale 1 → 1.04` y radios a `0`, `0.6s`, `power3.in` (el panel "se traga" la vista)                                     |
| `0.95` | `EnterTransition` (overlay `bg-ink` a pantalla completa) | `autoAlpha 0 → 1`, `0.25s`, `power2.in`                                                                                 |
| `1.2`  | —                                                        | `onComplete` → `router.replace("/inicio")`                                                                              |

- **Salteable:** durante `enter`, un `pointerdown` o `keydown` en la ventana ejecuta `tl.progress(1)`.
- La página `/inicio` entra desde el negro tinta: contenido `autoAlpha` + `y 8 → 0`, `0.22s` (regla general del manual).
- **Prefetch:** `router.prefetch("/inicio")` al montar el login para que la navegación final sea instantánea.

### 5.5 Reduced motion (`reduce`)

- Sin caída inicial, sin flotación ni giro; los elementos DOM aparecen con `duration: 0`.
- El canvas usa `frameloop="demand"` y renderiza un único cuadro.
- Foco, envío y error: sin movimiento del bolsín; mensajes con `duration: 0`.
- Éxito: overlay tinta `autoAlpha 0 → 1` en `0.2s` y navegación.

---

## 6. Accessibility (a11y) & Semantic Markup

- **Landmarks:** `<main id="contenido">` con dos hijos: `<section aria-hidden="true">` (stage visual) y `<section aria-labelledby="login-title">` (formulario). Título `<h1 id="login-title">`.
- **Canvas y póster:** decorativos (`aria-hidden="true"`, `alt=""`). No aportan información.
- **Formulario:** `<form noValidate>` con `<label>` explícitos; `autoComplete="username"` / `"current-password"`; `autoCapitalize="none"`, `spellCheck={false}` en usuario.
- **Errores:** por campo vía `aria-invalid` + `aria-describedby`; error general en un contenedor `role="alert"` (se anuncia al aparecer). Al fallar, el foco va al primer campo con error (A1) o a Contraseña (A2).
- **Carga:** `aria-busy="true"` en el form y botón con texto "Ingresando…" (no solo un spinner).
- **Mostrar contraseña:** `<button type="button" aria-pressed aria-controls aria-label="Mostrar contraseña">`.
- **Foco visible:** `outline-2 outline-offset-2 outline-cobalt` en todos los controles; nunca `outline: none` sin reemplazo.
- **Teclado:** Tab recorre Usuario → Mostrar → Contraseña → Ingresar; Enter envía; durante la transición, cualquier tecla la completa.
- **Contraste:** todos los pares salen de la tabla §2.3 del manual (texto `ink` sobre `surface` 12+:1, error `danger-ink` 7.13:1, botón primario 6.65:1).

---

## 7. Rendimiento

- Three.js + R3F + drei se cargan solo en `/login` y después del primer render (dynamic import). El póster es el LCP.
- Presupuesto de la escena: ≤ 60 draw calls, ≤ 30k triángulos, sin postprocesado.
- Dispose automático de R3F al desmontar (la escena desaparece al navegar a `/inicio`).
- Si el primer frame tarda más de `2.5s` (equipo muy lento), se mantiene el póster y no se monta la escena.

---

## 8. Testing

| Qué                                                             | Tipo                                           |
| --------------------------------------------------------------- | ---------------------------------------------- |
| `auth.dto.ts` (casos válidos e inválidos)                       | Unit (Vitest)                                  |
| Reducer de `useLoginFlow` (todas las transiciones de estado)    | Unit                                           |
| `api/auth/login/route.ts` mock (200 / 400 / 401 / 503 y cookie) | Unit (llamando al handler con `Request`)       |
| `proxy.ts` (redirecciones con y sin cookie)                     | Unit                                           |
| Login visual, transición y reduced motion                       | Manual en navegador (desktop + mobile emulado) |
