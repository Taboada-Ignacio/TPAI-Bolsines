---
id: DSI-U3-RNF-ISO25000
titulo: Atributos de Calidad y Requerimientos No Funcionales (ISO/IEC 25000 SQuaRE)
tipo: teoria
unidad: Unidad 3
categoria: Arquitectura
tags: [rnf, iso25000, square, calidad, arquitectura, metricas]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-ARQ-MONOLITICA, DSI-U3-ARQ-MICROSERVICIOS, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-00-CONVENCIONES]
---

# Requerimientos No Funcionales y Calidad de Software (ISO/IEC 25000)

La norma **ISO/IEC 25000 (SQuaRE)** proporciona un marco estandarizado para evaluar la calidad del producto software a través de características y subcaracterísticas cuantificables.

## 1. Características Principales de Calidad de Producto (ISO/IEC 25010)

1. **Adecuación Funcional**: Grado en que el conjunto de funciones cubre todas las tareas y objetivos especificados (Completitud, Corrección, Pertinencia).
2. **Eficiencia de Desempeño**: Comportamiento temporal, utilización de recursos y capacidad de carga.
3. **Compatibilidad**: Coexistencia e Interoperabilidad con otros sistemas (e.g., intercambio de datos con Google Maps y Microsoft Graph).
4. **Usabilidad**: Facilidad de aprendizaje, operatividad, protección contra errores de usuario, estética de interfaz.
5. **Fiabilidad (Reliability)**: Grado en que un sistema ejecuta funciones específicas bajo condiciones determinadas durante un período de tiempo (Madurez, Disponibilidad, Tolerancia a fallos, Capacidad de recuperación).
6. **Seguridad**: Confidencialidad, Integridad, No repudio, Responsabilidad, Autenticidad.
7. **Mantenibilidad**: Modularidad, Reusabilidad, Analizabilidad, Modificabilidad, Comprobabilidad (Testability).
8. **Portabilidad**: Adaptabilidad, Instalabilidad, Reemplazabilidad.

---

## 2. RNF Críticos del PPAI Bolsines 2026

En la Especificación de Requerimientos de Software (ERS) del PPAI Bolsines, los siguientes RNF conducen la arquitectura:

| Nro | Nombre RNF | Categoría ISO 25000 | Justificación y Decisión Arquitectónica |
|---|---|---|---|
| **RNF 1** | Tecnología Web | Portabilidad / Compatibilidad | Arquitectura Cliente-Servidor accesible mediante navegador web. |
| **RNF 2** | Alta Disponibilidad (7x24x365) | Fiabilidad / Disponibilidad | Requiere bases de datos espejadas (**Database Mirroring**) en 2 servidores independientes para failover automático. |
| **RNF 3** | Despliegue en la nube AWS | Portabilidad / Entorno | Base de datos alojada en Amazon Web Services (AWS RDS con réplica multi-AZ). |
| **RNF 4** | Seguridad de Usuarios | Seguridad / Autenticidad | Módulo RBAC para autenticación de usuarios y control de sesiones por rol y CM. |
| **RNF 5** | Envío de notificaciones por mail | Interoperabilidad / Comunicación | Integración obligatoria mediante API expuesta de **Outlook de Microsoft Graph**. |
| **RNF 6** | Dispositivo GPS Tracker | Compatibilidad / Hardware | Interfaz/Adapter para interpretar las coordenadas de 3 dispositivos GPS en los bolsines. |
| **RNF 7** | Visualización en el mapa | Usabilidad / Interoperabilidad | Integración con API de Google Maps / mapa interactivo con coordenadas GPS. |
| **RNF 8** | Generación de reportes | Adecuación funcional | Integración externa con Microsoft Power BI. |
