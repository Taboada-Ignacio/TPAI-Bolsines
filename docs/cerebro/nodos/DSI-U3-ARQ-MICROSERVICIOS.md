---
id: DSI-U3-ARQ-MICROSERVICIOS
titulo: Arquitectura de Microservicios y Domain-Driven Design (DDD) en DSI
tipo: teoria
unidad: Unidad 3
categoria: Arquitectura
tags: [microservicios, ddd, subdominios, api-gateway, bff, database-per-service, shadow-db]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000, DSI-U3-ARQ-MONOLITICA, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000]
---

# Arquitectura de Microservicios en DSI

Basado en `11 Arquitectura de Microservicios.pdf` y la sección de Microservicios de `DSI CONVENCIONES DE MODELADO V1-5.pdf`.

## 1. Descomposición por Subdominios (DDD)

Para aplicar el patrón **Decompose by Subdomain**, el dominio del negocio se clasifica en tres categorías usando el elemento *Business Domain* (SOMF):

1. **Dominios Core (Nucleares)**:
   - Representan la ventaja competitiva y el corazón estratégico del negocio.
   - *En PPAI Bolsines*: `Gestión de Bolsines y Seguimiento`, `Gestión de Remitos y Documentación`.
2. **Dominios de Soporte (Supporting)**:
   - Específicos de la organización y necesarios para que funcione el Core, pero sin ser el diferencial estratégico.
   - *En PPAI Bolsines*: `Administración de Comisiones Médicas y Tipos de Documento`.
3. **Dominios Genéricos (Generic)**:
   - Capacidades transversales comunes a cualquier sistema (autenticación, notificaciones, mapas, reportería). Pueden subcontratarse o externalizarse.
   - *En PPAI Bolsines*: `Seguridad y Usuarios`, `Notificaciones (Email / Microsoft Graph)`, `Geolocalización y Rastreo GPS`, `Reportes (Power BI)`.

---

## 2. Patrones Arquitectónicos Obligatorios de Cátedra

- **Database per Service**: Cada microservicio posee su propia base de datos aislada (`Repository` SOMF) y su propio componente de persistencia. Nunca dos servicios comparten directamente tablas de la misma BD.
- **API Gateway / Backend for Frontend (BFF)**:
  - Punto único de entrada para los clientes (`PresWeb`).
  - Las interfaces en los Gateways son **requeridas** hacia los servicios internos y externos.
  - Los servicios internos y frontends tienen interfaces **provistas** mediante **API REST** (privilegiando comunicación desacoplada/asincrónica).
  - En la **API Gateway Pública** se ubican las interfaces requeridas hacia sistemas externos (Servidor de Correo Outlook, Google Maps, GPS Trackers).
- **Alta Cohesión y Servicios de Conversión**:
  - Los componentes que manejan lógica de conversión de protocolos externos o adaptadores de hardware (como los 3 modelos de GPS Tracker) **no deben colocarse dentro de los servicios Core**, sino en un servicio de dominio Genérico/Integración.
- **Despliegue y Mirroring (RNF 2)**:
  - **Single Service per Host** vs **Multiple Services per Host**.
  - Si hay RNF de base de datos espejada (*Mirroring*), se modela réplica por servicio o una **Shadow Database (Base de Datos Sombra)** sincronizada vinculada al servidor del servicio y al servidor del Gateway.

---

## 3. Vistas a Construir en Microservicios
1. **Vista Arquitectónica de Funcionalidad** (CU representativos + justificación frente a RNFs).
2. **Vista de Diseño Global** (aparecen los servicios internos, Gateways y sistemas externos de terceros).
3. **Vista de Diseño Detallada** (subsistemas/servicios con componentes internos, persistencia, API REST y sin los nodos externos directos).
4. **Vista de Despliegue** (nodos físicos/AWS, Web Servers, Gateways, Servicios, BDs y BDs Espejo/Sombra).
