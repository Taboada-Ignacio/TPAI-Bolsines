---
id: DSI-00-IEEE830
titulo: Estándar IEEE 830 y Especificación de Requerimientos (ERS)
tipo: teoria
unidad: Metodologia
categoria: Catedra
tags: [ieee830, ers, requerimientos, casos-de-uso, reglas-de-negocio, rnf]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000, PPAI-CU-36, PPAI-DOM-ORGANIZACION]
depende_de: []
---

# Estándar IEEE 830 para Especificación de Requerimientos de Software (ERS)

La **ERS (Especificación de Requerimientos de Software)**, basada en el estándar **IEEE 830**, es el documento contractual y técnico que establece qué debe hacer el sistema (Requerimientos Funcionales) y bajo qué restricciones y cualidades operativas debe hacerlo (Requerimientos No Funcionales).

## 1. Características de una Buena ERS (IEEE 830)
1. **Completa**: Incluye todos los requisitos significativos (funcionalidad, desempeño, restricciones, interfaces externas).
2. **Consistente**: Ningún requisito entra en conflicto con otro ni con las reglas de negocio.
3. **No ambigua**: Cada requisito tiene una única interpretación posible (apoyada en un Glosario del Dominio).
4. **Verificable / Comprobable**: Existe un proceso finito y objetivo (test o inspección) para comprobar que el producto satisface el requisito.
5. **Trazable**: Cada requisito tiene un identificador único (e.g., `CU 36`, `RNF 5`) trazable hacia atrás (origen/regla de negocio) y hacia adelante (diseño, código, tests).
6. **Modificable y Clasificada**: Estructurada por prioridad (`Alta`, `Media`, `Baja`) y complejidad (`Simple`, `Mediano`, `Complejo`, etc.).

---

## 2. Estructura Estándar en la Cátedra DSI (UTN-FRC)

Según la plantilla aplicada en los documentos oficiales (como `2026 DSI Bolsines ERS V1-2.pdf`):
1. **Introducción**: Propósito, Audiencia, Alcance, Definiciones/Acrónimos/Abreviaturas (Glosario), Referencias.
2. **Presentación del Producto**:
   - Propósito del sistema (Objetivo, Alcances incluidos, Qué NO contempla).
   - **Reglas de Negocio (RN)**: Políticas, cálculos y restricciones invariantes del dominio (independientes de la tecnología).
   - Restricciones y supuestos.
3. **Requerimientos Funcionales (Visión General)**:
   - Tabla de **Actores** (Nombre, Descripción, Categoría `Persona`/`Software`/`Hardware`, Tipo `Abstracto`/`Concreto`).
   - **Vista de Casos de Uso Esencial** (Diagrama UML de casos de uso felices sin cancelaciones/ABMCs secundarios).
   - **Listado de la Funcionalidad del Sistema** (Tabla numerada con Nro., Nombre, Objetivo, Actores AP/AS).
4. **Descripción Detallada de Requerimientos**:
   - Fichas de **Casos de Uso** priorizados: Prioridad, Complejidad, AP/AS, Tipo, Objetivo, **Flujo Descripto** (numerado Actor/Sistema), **Flujos Alternativos (`A1..An`)**, **Observaciones** (donde suelen ubicarse variaciones tecnológicas como los 3 modelos de GPS en CU 36).
   - Tabla de **Requerimientos No Funcionales (RNF)**: Nro., Nombre, Descripción, Justificación arquitectónica.

---

## 3. Regla de Oro de Trazabilidad en DSI
- Todo **RNF significativo para la arquitectura** (ej. RNF 2 Mirroring, RNF 5 Microsoft Graph, RNF 6 GPS Tracker, RNF 7 Google Maps) debe verse reflejado explícitamente en:
  1. La **Vista Arquitectónica de Funcionalidad** (eligiendo el CU que lo ejercita, como CU 36).
  2. La **Vista de Componentes / Diseño** (interfaces y adaptadores).
  3. La **Vista de Despliegue** (nodos físicos/cloud, servidores espejo, nodos externos).
