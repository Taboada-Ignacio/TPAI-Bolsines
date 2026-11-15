---
id: PPAI-PAT-ADAPTER-GPS
titulo: Patrón Adapter para Modelos de GPS Tracker (XTR-4500L, NavTrack QX-7A, GeoPulse MTR-900)
tipo: patron-gof
unidad: PPAI
categoria: Diseño
tags: [adapter, gps, xtr4500l, navtrack, geopulse, patrones-gof, hardware-integration, nacho]
conectado_con: [DSI-U2-PATRONES-ESTRUCTURALES, PPAI-CU-36, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-U2-PATRONES-ESTRUCTURALES, PPAI-CU-36]
---

# Patrón Adapter Aplicado a los Dispositivos GPS Tracker (Observación 1 CU 36)

## 1. Problema de Diseño y Heterogeneidad de Interfaces

La Especificación de Requerimientos de Software (ERS) establece en la **Observación 1 del Caso de Uso 36**:
El Organismo Contralor utiliza 3 modelos de dispositivos GPS Tracker para rastrear los bolsines en ruta, cada uno provisto por un fabricante distinto con contratos de invocación y formatos de datos heterogéneos:

| Dispositivo GPS | Nombre del Endpoint | Parámetros Requeridos | Formato del Retorno | Estructura de Datos |
|---|---|---|---|---|
| **Modelo 1: XTR-4500L** | `getBolsinLocation()` | `apiKey: string`<br/>`nroBolsin: int`<br/>`codCMOrigen: string` | **JSON** (string) | Objeto JSON con campos: `numeroBolsin`, `latitud`, `longitud`, `fechaHoraActualizacion` |
| **Modelo 2: NavTrack QX-7A** | `retrieveTrackingData()` | `apiKey: string`<br/>`nroBolsin: int`<br/>`codCMDestino: string` | **CSV** (string) | Cadena de texto con valores separados por coma: `nroBolsin,latitud,longitud,fechaHora` |
| **Modelo 3: GeoPulse MTR-900** | `fetchCargoPositions()` | `apiKey: string`<br/>`nroBolsin: int` | **Matriz 2D** (Array / List) | Matriz donde la fila contiene: `[nroBolsin, latitud, longitud, fechaHora]` |

Sin un patrón de diseño, el cliente (`GestorSeguimientoBolsines`) se vería plagado de sentencias condicionales (`if/switch`) y parseos de cadenas dependientes de hardware de bajo nivel, violando los principios **SRP**, **OCP** y el patrón GRASP **Polimorfismo**.

---

## 2. Solución Mediante el Patrón Adapter (GoF)

Se introduce la interfaz unificada de dominio **`IGPSTrackerAdapter`** (Target) y tres adaptadores de objeto concretos:

### 2.1 Interfaz Target (`IGPSTrackerAdapter`)
```typescript
interface IGPSTrackerAdapter {
  obtenerUbicacion(
    nroBolsin: number, 
    codCMOrigen: string, 
    codCMDestino: string
  ): UbicacionNormalizada;
}
```

Donde `UbicacionNormalizada` es un Value Object estandarizado:
- `nroBolsin: number`
- `latitud: number`
- `longitud: number`
- `fechaHora: Date / string`
- `modeloDispositivo: string`

### 2.2 Adaptador 1: `XTR4500LAdapter`
Invoca al endpoint `getBolsinLocation(apiKey, nroBolsin, codCMOrigen)`, parsea la cadena JSON y mapea los campos a `UbicacionNormalizada`.

### 2.3 Adaptador 2: `NavTrackQX7AAdapter`
Invoca al endpoint `retrieveTrackingData(apiKey, nroBolsin, codCMDestino)`, realiza un `split(',')` de la cadena CSV, convierte las posiciones numéricas y genera `UbicacionNormalizada`.

### 2.4 Adaptador 3: `GeoPulseMTR900Adapter`
Invoca al endpoint `fetchCargoPositions(apiKey, nroBolsin)`, indexa los elementos de la matriz 2D `[0][0..3]`, parsea los valores y genera `UbicacionNormalizada`.

---

## 3. Factoría de Adaptadores (`GPSTrackerAdapterFactory`)
Para desacoplar al `GestorSeguimientoBolsines` de la instanciación de los adaptadores, se aplica el patrón **Factory Method**:
```python
class GPSTrackerAdapterFactory:
    @staticmethod
    def crear_adapter(modelo: str) -> IGPSTrackerAdapter:
        if modelo == "XTR-4500L":
            return XTR4500LAdapter()
        elif modelo == "NavTrack QX-7A":
            return NavTrackQX7AAdapter()
        elif modelo == "GeoPulse MTR-900":
            return GeoPulseMTR900Adapter()
        raise ValueError(f"Modelo GPS no soportado: {modelo}")
```

## [NACHO] Especificación aprobada del Adapter GPS

Esta sección documenta el contrato vigente para trasladar al diagrama editable v8. Las secciones anteriores describen el diseño de referencia del cerebro base.

| Clase | Atributos privados | Constructor público |
| --- | --- | --- |
| `InterfazGPSTracker` (`«Boundary»`) | `apisKeys: string[]`, `listadoBolsines: string[][]`, `nrosBolsines: number[]`, `codigosCMOrigen: string[]`, `codigosCMDestino: string[]`, `modelo?: ModeloGPSTracker`, `adaptador?: IAdaptadorLocalizacionBolsines` | Sin argumentos para el uso habitual. Permite inyectar servicios concretos y la clave para pruebas. |
| `AdaptadorXTR4500L` | `apiKey: string`, `nrosBolsines: number[]`, `codigosCMOrigen: string[]`, `jsonBolsines: string[]`, `datosLocalizacionAdaptado: string[][]`, `servicio: ServicioGPSTrackerXTR4500L` | `(apiKey, nrosBolsines, codigosCMOrigen, servicio)` |
| `AdaptadorQX7A` | `apiKey: string`, `nrosBolsines: number[]`, `codigosCMDestino: string[]`, `stringBolsines: string[]`, `datosLocalizacionAdaptado: string[][]`, `servicio: ServicioGPSTrackerQX7A` | `(apiKey, nrosBolsines, codigosCMDestino, servicio)` |
| `AdaptadorMTR900` | `apiKey: string`, `nrosBolsines: number[]`, `matricesBolsines: string[][]`, `datosLocalizacionAdaptado: string[][]`, `servicio: ServicioGPSTrackerMTR900` | `(apiKey, nrosBolsines, servicio)` |

La frontera declara `crearAdaptador(): void` y `obtenerLocalizacionDeBolsines(modelo: ModeloGPSTracker, nrosBolsines: number[], codigosCMOrigen: string[], codigosCMDestino: string[]): Promise<string[][]>`. `ModeloGPSTracker` admite `XTR-4500L`, `QX-7A` y `MTR-900`. `apisKeys` sigue ese orden y usa la clave configurada del simulador en las tres posiciones. El modelo determina qué arreglo de CM debe tener un código por bolsín. Cada arreglo ajeno al modelo debe quedar vacío. Usar una frontera por consulta independiente.

`IAdaptadorLocalizacionBolsines` (`«Interface»`) y los tres concretos declaran directamente `recibirLocalizacionBolsines(): Promise<string[][]>`, `solicitarLocalizacionBolsines(): Promise<void>` y `adaptarLocalizacionBolsines(): void`. Representar las tres realizaciones mediante línea discontinua y triángulo hueco hacia la interfaz. Retirar la superclase de la implementación. La frontera conserva `0..1` adaptador mediante la interfaz. Cada concreto navega a exactamente `1` instancia de su servicio inyectado.

| Servicio concreto | Operación pública |
| --- | --- |
| `ServicioGPSTrackerXTR4500L` | `getBolsinLocation(apiKey: string, nroBolsin: number, codCMOrigen: string): Promise<string>` |
| `ServicioGPSTrackerQX7A` | `retrieveTrackingData(apiKey: string, nroBolsin: number, codCMDestino: string): Promise<string>` |
| `ServicioGPSTrackerMTR900` | `fetchCargoPositions(apiKey: string, nroBolsin: number): Promise<string[][]>` |

Cada servicio mantiene una dependencia de infraestructura con `TransporteHTTPGPS`. La frontera crea el concreto y llama a `recibirLocalizacionBolsines()`. El adaptador llama a `solicitarLocalizacionBolsines()`, conserva las respuestas crudas en orden y llama a `adaptarLocalizacionBolsines()`. MTR exige una fila por consulta individual y las acumula en `matricesBolsines`. La salida tiene cuatro cadenas por fila y conserva la fecha ISO 8601 UTC. Un fallo se propaga como `ErrorGPSTracker`, incluido el estado HTTP cuando corresponde.

La propiedad privada `solicitudEnCurso?: Promise<void>` comparte la solicitud HTTP entre llamadas simultáneas sobre el mismo adaptador. El atributo técnico `servicios` permite inyectar dependencias concretas en la frontera. En la vista de implementación, UML `Int` corresponde a `number`, `String` a `string` y las operaciones que esperan HTTP devuelven `Promise`. La futura integración del CU 36 contempla los tres modelos.

### [NACHO] Métodos de dominio y alcance GPS vigente

El alcance futuro del CU 36 contempla los tres proveedores de la frontera genérica.

### [NACHO] Migración al GPS Tracker oficial

La frontera configura una clave por modelo en `apisKeys`, en orden XTR, QX y MTR. Cada adaptador conserva su asociación con un único servicio y las operaciones de `IAdaptadorLocalizacionBolsines`. Los servicios reutilizan `TransporteHTTPGPS`, que envía `X-API-Key` y conserva el estado HTTP de error, con tipos separados para timeout y conexión. XTR valida un elemento en `items`, QX procesa CSV y MTR valida la matriz numérica oficial antes de convertirla a cadenas. La fecha sin zona se interpreta como hora argentina (UTC−03:00). Las tres salidas mantienen `Promise<string[][]>`. La inyección TypeScript del constructor de la frontera recibe ahora tres claves; las operaciones UML y asociaciones documentadas se conservan.

### [NACHO] Validación de apisKeys en la frontera GPS

`InterfazGPSTracker` guarda una copia privada de tres claves en orden XTR-4500L, QX-7A y MTR-900. Por defecto las lee de las variables `GPS_TRACKER_*_API_KEY` del backend. El constructor rechaza claves ausentes o en blanco con `ErrorGPSTracker` de tipo `CONFIGURACION` sin revelar valores. `crearAdaptador()` selecciona por modelo y entrega la clave al adaptador por constructor. Se conservan las asociaciones del UML, las firmas y la salida común `string[][]`.
