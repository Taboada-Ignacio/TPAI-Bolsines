---
id: PPAI-PAT-ADAPTER-GPS
titulo: Patrón Adapter para Modelos de GPS Tracker (XTR-4500L, NavTrack QX-7A, GeoPulse MTR-900)
tipo: patron-gof
unidad: PPAI
categoria: Diseño
tags: [adapter, gps, xtr4500l, navtrack, geopulse, patrones-gof, hardware-integration]
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
