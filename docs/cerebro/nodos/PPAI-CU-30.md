---
id: PPAI-CU-30
titulo: Caso de Uso 30/31 - Notificar Ubicación de Bolsín (API Microsoft Graph)
tipo: caso-de-uso
unidad: PPAI
categoria: CU
prioridad: Media
complejidad: Simple
actor_secundario: Servidor de Correo (Outlook Microsoft Graph)
tags: [cu30, cu31, notificacion, email, microsoft-graph, outlook, rnf5]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000, PPAI-CU-36]
depende_de: [PPAI-CU-36]
---

# Caso de Uso 30/31: Notificar Ubicación de Bolsín

## 1. Contexto y Requerimiento No Funcional Asociado

El **RNF 5** de la ERS especifica taxativamente:
> *"Se debe notificar vía email al momento de recibir un bolsín a la CM destino, y al momento de consultar la ubicación de bolsines, detallando toda la documentación enviada en cada Bolsín. Debe existir un componente que permita la generación y comunicación con la solución de envío de mails a través de la **API expuesta de Outlook de Microsoft Graph**."*

El caso de uso es invocado como inclusión (o paso final) desde el **CU 36: Consultar seguimiento de bolsines** cuando el Encargado de Bolsines (EB) decide informar la posición en ruta del bolsín al Gerente de la Comisión Médica (GCM) de destino.

---

## 2. Contrato de Notificación y Datos Enviados

La notificación enviada al correo corporativo del GCM destino incluye los siguientes datos obligatorios:
1. **Número de Bolsín**: Identificador único del bolsín en tránsito.
2. **Fecha y Hora de Última Actualización**: Timestamp reportado por el dispositivo GPS Tracker.
3. **Coordenadas Geográficas**: Latitud y Longitud actuales (o enlace dinámico a la visualización satelital).
4. **Comisión Médica Origen**: Nombre de la CM que efectuó el despacho.
5. **Comisión Médica Destino**: Nombre de la CM receptora.
6. **Número de Precinto de Seguridad**: Código del precinto cerrado.
7. **Detalle de Remitos y Documentación**: Asunto y tipo de cada documento contenido en los remitos asociados al bolsín.

---

## 3. Integración con Microsoft Graph API

Se implementa a través de la interfaz **`IServidorCorreo`** y el adaptador **`MicrosoftGraphEmailAdapter`**:
- Endpoint de Graph: `POST https://graph.microsoft.com/v1.0/users/{user-id}/sendMail`
- Autenticación: OAuth 2.0 Bearer Token (Azure Active Directory / Microsoft Entra ID).
- Payload JSON con `message.subject`, `message.body.contentType: "HTML"` y `message.toRecipients`.
