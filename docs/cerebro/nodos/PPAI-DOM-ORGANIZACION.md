---
id: PPAI-DOM-ORGANIZACION
titulo: Dominio PPAI - Estructura Organizativa y Roles del Sistema Bolsines
tipo: dominio
unidad: PPAI
categoria: Dominio
tags: [ppai, organismo-contralor, cmc, cmj, roles, actores, sesiones]
archivos_back:
  - TPAI-Bolsines/src/domain/ComisionMedica.ts
  - TPAI-Bolsines/src/domain/Empleado.ts
  - TPAI-Bolsines/src/domain/Rol.ts
  - TPAI-Bolsines/src/domain/Usuario.ts
  - TPAI-Bolsines/src/domain/Sesion.ts
modelos_db:
  - ComisionMedica
  - Empleado
  - Rol
  - Usuario
  - Sesion
conectado_con: [DSI-00-IEEE830, PPAI-DOM-BOLSIN, PPAI-CU-36, PPAI-CU-30]
depende_de: [DSI-00-CONVENCIONES]
---

# Estructura Organizativa y Roles del Dominio Bolsines

Basado en `2026 DSI Bolsines Descripción del Caso V1.1.pdf` y `2026 DSI Bolsines ERS V1-2.pdf`.

## 1. Estructura del Organismo Contralor
- **Sede Central**: Ubicada en la Ciudad Autónoma de Buenos Aires (**C.A.B.A.**).
- **Comisión Médica Central (CMC)**: Funciona en C.A.B.A. Recibe documentación que puede requerir **redirección interna** hacia otras áreas de la sede central.
- **Comisiones Médicas Jurisdiccionales (CMJ)**: Más de **80 comisiones** distribuidas por todo el país con el nombre de su localidad (ej. *Comisión Médica Mendoza*, *Paraná*, *Córdoba*, *Villa María*, *Rosario*, *Tucumán*, *La Plata*).

---

## 2. Regla de Negocio Fundamental: Empleados Responsables
- Todo empleado usuario del sistema **debe estar asignado a una única Comisión Médica** con un rol/permisos específicos.
- Al iniciar sesión (`Sesion`), el sistema conoce la CM del usuario logueado (`ComisionMedica`), la cual restringe qué bolsines puede armar, consultar o recibir.
- Toda acción sobre un bolsín o documentación registra al **empleado responsable** en la trazabilidad (`CambioEstadoBolsin.responsableCE`).

---

## 3. Actores Persona (Roles) del Sistema

| Rol / Actor | Tipo | Responsabilidades en el Dominio | Casos de Uso Clave |
|---|---|---|---|
| **Usuario** | Abstracto | Base de autenticación, sesión y consulta/edición de perfil propio. | CU 2, 4, 5, 6 |
| **Parametrizador del Sistema** | Concreto | Administra usuarios, tipos de documento y comisiones médicas. | CU 1, 3, 11-14, 23-26 |
| **Encargado de Documentación** | Concreto | Registra, modifica, elimina y consulta documentación; genera/modifica remitos y gestiona revisiones. | CU 7-10, 15, 16, 18, 31 |
| **Encargado de Bolsines (EB)** | Concreto | Arma, cierra, reabre, despacha y recibe bolsines; **consulta el seguimiento en mapa (CU 36)**. | CU 17, 19-22, 27, 28, **36**, 39, 40 |
| **Gerente de Comisión Médica (GCM)** | Concreto | Genera reportes y estadísticas (Power BI) y **recibe notificaciones de ubicación (CU 30/31)**. | CU 37, 38 (y receptor en CU 30/31) |

---

## 4. Actores Software Externos (RNF 5, 6, 7, 8)
- **GPS Tracker**: Dispositivos embarcados en cada bolsín (`XTR-4500L`, `NavTrack QX-7A`, `GeoPulse MTR-900`).
- **Servidor Google Maps**: Servicio cartográfico para mostrar la ubicación geográfica de los bolsines en tránsito.
- **Servidor de Correo**: API expuesta de **Outlook de Microsoft Graph** para enviar mails de recepción y ubicación.
- **Power BI**: Herramienta externa de BI para reportes de tránsito y estadísticas de intercambio.
