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

### [NACHO] Ubicaciones GPS y cartografía

`AdaptadorXTR4500L.adaptarLocalizacionBolsines()` interpreta y valida el JSON de XTR-4500L y normaliza sus filas. El gestor recibe esas filas mediante `InterfazGPSTracker`, las asocia a los bolsines y entrega los puntos a la frontera cartográfica. MapLibre GL JS representa los puntos sobre los recursos de OpenFreeMap. Los dos componentes cartográficos intervienen en la visualización y la API GPS oficial aporta la ubicación.

### [NACHO] Reinicio de la implementación del Adapter GPS (2026-11-18)

Se retiraron `IAdaptadorLocalizacionBolsines`, los adaptadores XTR-4500L, QX-7A y MTR-900 y sus tres servicios TypeScript. El diseño y las relaciones UML de las secciones anteriores quedan como referencia para reimplementarlos. En el código, `InterfazGPSTracker` conserva las firmas de consulta y creación, valida la correspondencia de códigos por modelo y devuelve una lista vacía para un lote válido sin bolsines. La creación y cualquier consulta con bolsines fallan con `ErrorGPSTracker("NO_IMPLEMENTADO")`. La frontera ya no selecciona adaptadores ni lee claves.

El transporte HTTP común y la API oficial en Compose se conservan. Las suites anteriores se guardaron como `tests/gps-adapter.test.ts.disabled` y `tests/gps-adapter-http.test.ts.disabled`, fuera de Vitest y TypeScript mientras falten las clases. Queda pendiente reconstruir el Adapter y adaptar y reactivar esas pruebas.

### [NACHO] Carpeta de integración GPS

`TransporteHTTPGPS.ts` vive en `src/integrations/gpsTracker/`. Los imports de las suites desactivadas apuntan allí para el transporte y los futuros servicios. La frontera y el diseño de los adaptadores corresponden a `src/externalInterfaces/gpsTracker/`.

### [NACHO] Reimplementación según UML actualizado

`IAdaptadorLocalizacionBolsines` declara `recibirLocalizacionBolsines(apiKey, nrosBolsines)`, `solicitarLocalizacionBolsines()` y `adaptarLocalizacionBolsines()`. XTR recibe los códigos de origen por constructor y adapta JSON; QX recibe los de destino y adapta CSV; MTR valida y normaliza la fila de la matriz del servicio. Las clases implementan la interfaz directamente. El flujo de XTR encadena creación, recepción, solicitud y adaptación como en la secuencia. Cada fila conserva el número solicitado, las coordenadas y la fecha ISO UTC.

La frontera expone la firma UML de dos argumentos para XTR y conserva la sobrecarga previa con modelo y códigos de origen y destino. Las operaciones de red devuelven Promise en TypeScript y los constructores permiten inyectar servicios para pruebas. El lote vacío válido devuelve una matriz vacía. Los errores HTTP, incluidos los 404, se propagan al consumidor. Una respuesta inválida o asociada a otro bolsín también rechaza el lote.

Los tres servicios y `TransporteHTTPGPS` viven en `src/integrations/gpsTracker/`. El transporte centraliza credenciales, timeout y errores de comunicación. XTR y QX devuelven el cuerpo como texto; MTR entrega la matriz del contrato. La integración con el gestor del CU 36 queda pendiente.

### [NACHO] Selección explícita del modelo en las sobrecargas

La frontera sustituye las firmas anteriores por tres sobrecargas. La primera posición identifica el modelo y las siguientes contienen el lote y, cuando corresponde, sus códigos de CM.

- XTR-4500L: `obtenerLocalizacionDeBolsines("XTR-4500L", nrosBolsines, codigosCMOrigen)`.
- QX-7A: `obtenerLocalizacionDeBolsines("QX-7A", nrosBolsines, codigosCMDestino)`.
- MTR-900: `obtenerLocalizacionDeBolsines("MTR-900", nrosBolsines)`.

Este cambio aprobado agrega el modelo explícito a la firma XTR del UML. Las tres sobrecargas comparten implementación, conservan `Promise<string[][]>` y seleccionan el adaptador y la clave por modelo. La integración del gestor del CU 36 sigue pendiente.

### [NACHO] Adaptación del JSON dentro de la operación XTR

`AdaptadorXTR4500L.adaptarLocalizacionBolsines()` interpreta el JSON, valida el esquema, construye la fila y valida su correspondencia con el bolsín. Se eliminó el método privado `adaptarRespuesta()` para alinear las operaciones de la clase con el UML. Se conservan el contrato y los errores del adaptador. Vitest aprobó 276 pruebas y omitió las 12 del gestor.
