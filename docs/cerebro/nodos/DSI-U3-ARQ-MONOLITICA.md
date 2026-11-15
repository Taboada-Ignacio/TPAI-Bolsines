---
id: DSI-U3-ARQ-MONOLITICA
titulo: Estilo Arquitectónico Monolítico en Capas y Vistas de Despliegue
tipo: teoria
unidad: Unidad 3
categoria: Arquitectura
tags: [arquitectura, monolitico, capas, despliegue, mirroring, base-de-datos-espejada]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000, DSI-U3-ARQ-MICROSERVICIOS, PPAI-DIS-ARQUITECTURA]
depende_de: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000]
---

# Estilo Arquitectónico Monolítico en Capas

El estilo monolítico estructura la aplicación como una única unidad ejecutable desacoplada horizontalmente en capas lógicas de responsabilidad.

## 1. Organización en Capas Canónicas de DSI

```mermaid
flowchart TD
    subgraph Capa_Presentacion ["Capa de Presentación (UI)"]
        PresWeb["PresWebBolsines<br/>(React / HTML5)"]
    end

    subgraph Capa_LogicaNegocio ["Capa de Lógica del Negocio (Dominio)"]
        GestorCU["GestorSeguimientoBolsines"]
        Entidades["Entidades (Bolsin, Remito, ComisionMedica)"]
        Adapters["Adapters (GPS, Microsoft Graph)"]
    end

    subgraph Capa_Persistencia ["Capa de Persistencia / Acceso a Datos"]
        Repo["BolsinRepository / DBContext"]
    end

    subgraph Capa_Datos ["Capa de Datos (Base de Datos)"]
        BD_Ppal[("BD Principal (AWS RDS)")]
        BD_Mirror[("BD Espejo / Mirroring (AWS RDS Replica)")]
    end

    PresWeb -->|ILogicaBolsin| GestorCU
    GestorCU --> Entidades
    GestorCU --> Adapters
    GestorCU -->|IPersistenciaBolsin| Repo
    Repo --> BD_Ppal
    BD_Ppal -.->|Sincronización Transaccional| BD_Mirror
```

---

## 2. Convenciones para la Vista de Despliegue con Database Mirroring

Conforme al **RNF 2** y a las convenciones de cátedra DSI v1.5:
- Servidor de Aplicaciones (`<<device>> Servidor de Aplicaciones Web`).
- Servidor de Base de Datos Principal (`<<device>> Servidor BD Principal AWS`).
- Servidor de Base de Datos Espejo (`<<device>> Servidor BD Espejo AWS`).
- Conmutación automática: El servidor de aplicaciones mantiene configurada una cadena de conexión con el parámetro `Failover Partner` hacia la base de datos espejo para garantizar continuidad operativa 24x7x365.
