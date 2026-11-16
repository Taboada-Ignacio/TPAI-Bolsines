---
id: PPAI-UX-LOGIN
titulo: UX PPAI - Pantalla de Login con Bolsín 3D (CU 5 Iniciar Sesión, mockeado)
tipo: convencion
unidad: PPAI
categoria: UX
tags:
  [
    ux,
    ui,
    login,
    cu5,
    sesion,
    bolsin-3d,
    gsap,
    three,
    mock,
    frontend,
    primera-pantalla,
    nacho,
  ]
archivos_front:
  - TPAI-Bolsines/src/app/login/page.tsx
  - TPAI-Bolsines/src/components/login/LoginView.tsx
  - TPAI-Bolsines/src/components/login/LoginStage.tsx
  - TPAI-Bolsines/src/components/login/LoginForm.tsx
  - TPAI-Bolsines/src/components/login/EnterTransition.tsx
  - TPAI-Bolsines/src/components/login/bolsin3d/BolsinScene.tsx
  - TPAI-Bolsines/src/components/login/bolsin3d/useBolsinChoreography.ts
conectado_con:
  [
    PPAI-UX-MANUAL-MARCA,
    PPAI-UX-EMPATIA,
    DSI-00-UX-INTERFACES,
    PPAI-DOM-ORGANIZACION,
    PPAI-CU-36,
    PPAI-IMPL-BACKEND-REVISION,
  ]
depende_de: [PPAI-UX-MANUAL-MARCA, PPAI-UX-EMPATIA]
---

# Pantalla de Login con Bolsín 3D — Primera pantalla del frontend

Primera pantalla que se implementa en `feature/frontend`. Es la puerta de entrada al sistema y presenta la marca: un **bolsín 3D en Elite Blue** como el del moodboard. **Al iniciar sesión, el bolsín se abre y la cámara entra en él** para pasar a la aplicación.

La autenticación queda **mockeada en el front** detrás de un contrato estable, para enchufarla después al login real que implemente el backend (`feature/backend`).

## 1. Origen en la ERS

- **CU 5 — Iniciar sesión:** _"Registrar el inicio de una sesión por parte de un usuario registrado en el sistema, validando su password y permisos."_ Actor: Usuario.
- **CU 6 — Cerrar sesión:** cierra la sesión actual (se resuelve desde el pie del `SideNav`, no en esta pantalla).
- **RNF 4 — Seguridad de usuarios:** módulo que autentica usuarios y controla sesiones.
- **Dominio en backend:** `Usuario(nombre, contrasena)` → `Sesion(fechaHoraInicio, fechaHoraFin, usuario)`; `Empleado(nombre, apellido, email, rol, comisionMedica)`. **El login es por nombre de usuario, no por email.**

## 2. Referencias visuales

| Referencia                    | Archivo                                                                                                 | Qué tomamos                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Moodboard _Sistema de Envíos_ | [`docs/referencias/moodboard-sistema-bolsines.jpeg`](../../referencias/moodboard-sistema-bolsines.jpeg) | El bolsín: bolso de tela **Elite Blue**, cierre con tirador y correas **Volt Lime**, parches lima, hebillas grises, volumen redondeado tipo _clay 3D_. |
| Login desktop                 | [`docs/referencias/login/ref-login-desktop.png`](../../referencias/login/ref-login-desktop.png)         | Layout dividido: panel de ilustración redondeado a la izquierda (~45%), formulario angosto y centrado a la derecha, título grande, un solo CTA ancho.  |
| Login mobile                  | [`docs/referencias/login/ref-login-mobile.png`](../../referencias/login/ref-login-mobile.png)           | Ilustración arriba, título grande, controles anchos apilados abajo, mucho aire.                                                                        |

**Lo que NO se copia de las referencias:** botones de login social (Google, Apple, Facebook) y "Sign up". El sistema es interno: los usuarios los da de alta el Parametrizador (CU 1). Un único formulario usuario + contraseña.

## 3. Composición

### Desktop (`≥ 1024px`)

```text
┌─────────────────────────────┬──────────────────────────────┐
│ ┌─────────────────────────┐ │                    [isotipo] │
│ │                         │ │                              │
│ │      BOLSÍN 3D          │ │  Ingresá al                  │
│ │   (escena, canvas       │ │  sistema de bolsines (serif) │
│ │    Blue Mist + grano)   │ │                              │
│ │                         │ │  USUARIO   [_____________]   │
│ │                         │ │  CONTRASEÑA[__________ 👁]   │
│ └─────────────────────────┘ │  [ Ingresar ] (primary, lg)  │
│  panel rounded-card ~45%    │  ayuda: credenciales demo    │
└─────────────────────────────┴──────────────────────────────┘
```

- Fondo de página `surface`; panel izquierdo `canvas` con grano, `rounded-card`, margen `16px` (como la referencia).
- Columna de formulario `max-w-sm`, centrada vertical.

### Mobile (`< 1024px`)

```text
┌───────────────────────┐
│ [isotipo]             │
│                       │
│     BOLSÍN 3D         │  ~40dvh
│                       │
│ Ingresá al            │
│ sistema de bolsines   │
│ USUARIO   [_______]   │
│ CONTRASEÑA[_______]   │
│ [     Ingresar     ]  │  CTA lg, ancho completo
└───────────────────────┘
```

- El bolsín queda **encima del formulario y de los botones**, como en la referencia mobile.
- Respeta `safe-area-inset` y teclado virtual (el bolsín se reduce cuando el input toma foco, para que el CTA no quede tapado).

## 4. El bolsín 3D

**Anatomía (del moodboard):**

- Cuerpo: bolso tipo _duffel_ redondeado, tela **Elite Blue `#0251B0`** con sombreado propio (zonas oscuras hacia `#01397D`).
- Cierre superior a lo largo con tirador metálico y **cinta lima `#D1FF42`**.
- Dos correas verticales **lima** con hebillas grises.
- Parches lima pequeños en el frente (detalle del moodboard).
- Interior: **Tinta `#0B1220`**, que es el color al que se "entra".

**Estados y coreografía (Rumbo: rápido y firme, salvo el momento de entrada):**

| Momento                  | Comportamiento                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reposo                   | Entra con peso (`expo.out`) y reposa quieto a **0% GPU** (`frameloop="demand"`, `ContactShadows frames={1}`, `dpr={[1, 1.5]}`); solo se mueve con causa real (parallax del puntero).                                                                                                                                                |
| Foco en un input         | El bolsín gira unos grados hacia el formulario (`0.45s`, `expo.out`).                                                                                                                                                                                                                                                              |
| Enviando (mock)          | El tirador del cierre empieza a moverse; el botón muestra `loading`.                                                                                                                                                                                                                                                                |
| Error de credenciales    | Un sacudón corto de "no" (`±4°`, `0.3s`) + mensaje en `danger-ink`. Sin sacudir el formulario.                                                                                                                                                                                                                                      |
| **Éxito**                | **1)** `[data-login-stage]` mide su `DOMRect` y hace breakout desde `position: fixed` a `100vw × 100dvh` (`borderRadius: 0`, `z-40`) en mobile, tablet y desktop para no recortar el bolsín. **2)** El cierre y las mitades se abren. **3)** La cámara entra al interior negro (`#05080F`). **4)** Overlay final y transición. |
| `prefers-reduced-motion` | Bolsín estático; al ingresar, fundido directo a la app (`≤ 200ms`).                                                                                                                                                                                                                                                                 |

La entrada al bolsín es la **única animación de más de 280ms** permitida en el sistema: ocurre una vez por sesión y es la firma de la marca. Debe poder saltearse (cualquier clic o tecla la completa al instante).

**Técnica (decidida en `specs/frontend/login-bolsin-3d/technical-spec.md` §0):** React Three Fiber sobre WebGL. El bolsín cumple un contrato de piezas nombradas (`Lid_L`, `Lid_R`, `Zipper_Pull`, `Interior`, `Camera_Target`…): fase 1 modelado en código (procedural), fase 2 un GLB hecho en Blender y comprimido con meshopt (≤ 400 KB). Siempre hay un póster `.webp` como respaldo. Se evaluaron y descartaron para el bolsín: `vgpu` (WebGPU/WGSL de bajo nivel, sin escena ni carga de GLB) y `hairline-create` (líneas isométricas sin relleno).

## 5. Formulario y estética `stageshow` (actualizado 2026-11-15)

- **Restraint:** se eliminaron badges/pills del escenario (`REMITO`, `DESPACHO`, `BrandMark` flotante) y textos auxiliares al pie (soporte y credenciales demo) para dejar solo el escenario limpio con grilla sutil + grano y el formulario.
- **Mobile / Tablet (`< 1024px`):** el formulario sube como hoja táctil (`-mt-5 rounded-t-[24px] border-t border-edge`) sobre el escenario 3D.
- **Título:** **"Iniciar sesión"** en display grande (`clamp(2.25rem, 4vw, 3.1rem)`).
- **Controles `rounded-full`:** botón **"Continuar con Google"** (pill con ícono oficial y aviso inline hasta habilitar OAuth), separador `o`, campos **Usuario** (`autoComplete="username"`, `autoCapitalize="none"`) y **Contraseña** (`autoComplete="current-password"`, botón mostrar/ocultar `rounded-full` con `aria-pressed`), y CTA **Ingresar** (`Button primary lg rounded-full`, ancho completo). Enter envía.
- Validación al enviar (no mientras se tipea): campos vacíos → mensaje bajo el campo.
- Error de credenciales: mensaje único arriba del CTA (_"Usuario o contraseña incorrectos."_), sin decir cuál de los dos falló. Foco vuelve a Contraseña.
- Error de red: _"No pudimos conectar con el servidor. Probá de nuevo."_

## 6. Mock y contrato para el backend

Contrato pensado para coincidir con las entidades que ya existen en `feature/backend`:

```ts
// POST /api/auth/login  (hoy: mock en el front)
type LoginRequest = { usuario: string; contrasena: string };

type LoginResponse = {
  sesion: { fechaHoraInicio: string };
  empleado: {
    nombre: string;
    apellido: string;
    rol: { nombre: string };
    comisionMedica: { codigo: string; nombre: string };
  };
};

// Errores: 401 { codigo: "CREDENCIALES_INVALIDAS" } · 5xx / red
```

- El mock vive detrás de una interfaz `AuthService` (`login`, `logout`, `getSesion`); cambiar a la API real es reemplazar la implementación, no la pantalla.
- Usuario demo: `mgomez` / `bolsines` → Marcelo Gómez, Encargado de Bolsines, CM Córdoba. Latencia simulada `600–900ms` para poder ver el estado de carga.
- La sesión mock se guarda en una cookie para que el middleware de Next pueda proteger las rutas de la app y redirigir a `/login`.

## 7. Pendiente para el backend ([[PPAI-IMPL-BACKEND-REVISION, PPAI-UX-APP-SHELL, PPAI-IMPL-FRONTEND-HANDOFF]])

- Endpoint `POST /api/auth/login` con el contrato de §6, creando `Sesion` y validando `Usuario.contrasena` con hash (punto P4).
- Endpoint `POST /api/auth/logout` (CU 6) que cierra la `Sesion` (`fechaHoraFin`).
- Mecanismo de sesión (cookie httpOnly) que el front pueda leer en el middleware.

## 8. [NACHO] Estado implementado (`login-bolsin-3d`, Fase 1)

Implementado en `feature/frontend` siguiendo `specs/frontend/login-bolsin-3d/` (`L-01` a `L-16`, quedando `L-17` modelo `.glb` para Fase 2):

- **Bolsín 3D procedural fiel al moodboard (`BolsinProcedural.tsx`, `bolsin-nodes.ts`):**
  - Proporción camera bag (`1.45 : 1 : 0.9`), micro-textura procedural de neopreno (`CanvasTexture` sin red), `MeshPhysicalMaterial` con `sheen` en Elite Blue `#0251B0` / `#4D8BE0`, cremallera instanciada de 36 dientes de atrás hacia adelante, tirador plateado con lengüeta lima (`Pull_Tab`) y cordón (`Pull_Cord`), dos correas y hebillas lima, parches apilados lima/gris, testas laterales al ras con costura y argolla en D (`D_Ring`).
  - **Apertura real desde el centro:** pivotes de `Lid_L` / `Lid_R` en los hombros externos (`x = ±0.66`) para abrir la boca hacia afuera sin puente flotante; `setZipperProgress()` oculta progresivamente los dientes y desvanece la cinta central al abrir.
  - **Póster estático:** `public/models/bolsin-poster.webp` (`1200×1200`, `~14 KB`) + detección WebGL y timeout de `2.5s` en `LoginStage.tsx`.
- **Físicas con gravedad y coreografía (`BolsinScene.tsx`, `useBolsinChoreography.ts`):**
  - Seguimiento intenso del puntero en toda la pantalla (`THREE.MathUtils.damp`).
  - Simulación física en `useFrame` con gravedad real: al pasar el mouse por encima del bolsín, el tirador sube por el cierre contra la gravedad abriendo parcialmente los dientes y cae con pequeño rebote al soltar; `Pull_Cord`, `Pull_Tab` y `D_Ring` oscilan como péndulos amortiguados acoplados a la inercia del cuerpo y al roce del cursor.
  - Secuencia `enter` (`≤ 1.3s`, salteable): inclinación hacia cámara, apertura completa del cierre y de ambas tapas (`back.out`), inmersión de cámara directo al interior `#0B1220` y overlay tinta hacia `/inicio` (rama `prefers-reduced-motion` en `0.2s` sin movimiento 3D).
- **Auth mock, rutas y tests:**
  - `src/dtos/auth.dto.ts`, `src/app/api/auth/login/route.ts` (`200`/`400`/`401`/`503` con latencia `600–900ms` y cookie `bolsines_sesion`), `src/app/api/auth/logout/route.ts`, `src/proxy.ts` y `src/hooks/useLoginFlow.ts`.
  - Verificado con `npm run typecheck`, `npm run lint` y `npm run test:run` (`30/30` tests en verde).
