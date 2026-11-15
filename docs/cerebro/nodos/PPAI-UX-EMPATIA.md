---
id: PPAI-UX-EMPATIA
titulo: UX PPAI - Mapa de Empatía del Encargado de Bolsines y Diseño de Mapa CU 36
tipo: convencion
unidad: PPAI
categoria: UX
tags: [ux, mapa-empatia, proto-persona, nielsen, shneiderman, cu36, bolsines]
archivos_front:
  - TPAI-Bolsines/src/app/page.tsx
conectado_con: [DSI-00-UX-INTERFACES, PPAI-CU-36, PPAI-DOM-ORGANIZACION]
depende_de: [DSI-00-UX-INTERFACES, PPAI-CU-36]
---

# UX del PPAI Bolsines: Mapa de Empatía y Lineamientos de Interfaz (CU 36)

Síntesis de los criterios de `2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.pdf` y el análisis UX realizado para el **Encargado de Bolsines (EB)** en el marco del **CU 36: Consultar seguimiento de bolsines**.

## 1. Proto-Persona del Caso de Uso 36
- **Rol**: Encargado de Bolsines (EB) asignado a una Comisión Médica (ej. *CM Córdoba*).
- **Contexto operativo**: Trabaja en el sector de expedición/despacho de la CM. Gestiona envíos físicos de expedientes médicos urgentes hacia la CMC (C.A.B.A.) u otras 80+ CMJ del país. Recibe consultas constantes de supervisores y otras comisiones sobre dónde está un bolsín despachado.
- **Nivel tecnológico**: Medio. Necesita visibilidad inmediata en una sola pantalla, filtros rápidos por precinto/destino y cero pasos redundantes.

---

## 2. Mapa de Empatía Resumido

| Dimensión | Qué experimenta el Encargado de Bolsines |
|---|---|
| **Piensa y siente** | Preocupación por extravíos o demoras en documentación médica crítica; presión para responder rápido ante reclamos de destino; tranquilidad cuando ve el estado y la coordenada exacta en tiempo real. |
| **Ve** | Pilas de bolsines con precintos numerados, remitos impresos; pantallas heredadas con tablas densas sin mapa ni feedback claro de estado. |
| **Escucha** | *"¿Dónde está el bolsín con el precinto 4589 para Buenos Aires?"*, *"Avisale al gerente de la CM destino por dónde viene"*. |
| **Dice y hace** | Filtra por número de precinto o CM destino, verifica última actualización del GPS y dispara la notificación por correo al GCM con un clic confirmado. |
| **Dolores (Pains)** | No saber qué dispositivo GPS falló o si un bolsín quedó sin actualizar (Heurística 1 Nielsen); mensajes de error técnicos crípticos (Heurística 9); tener que buscar a mano el email del GCM destino. |
| **Ganancias (Gains)** | Diseño **Two-Panel Selector / Center Stage** (lista filtrable a la izquierda + mapa interactivo protagonista a la derecha), código de colores claro, datos del bolsín + remitos visibles al seleccionar un pin, y modal de confirmación limpio para notificar al GCM. |

---

## 3. Reglas de Diseño Aplicadas a la Pantalla del CU 36
1. **Visibilidad del Contexto**: Mostrar siempre en cabecera la **CM del usuario logueado** (Paso 2 de CU 36).
2. **Filtros Instantáneos**: Filtrar en vivo por `Nro. de Precinto` y `CM Destino` con botón visible de limpieza (Heurística 3 y 7).
3. **Estados Semánticos y Fallback GPS**: Si un dispositivo GPS no responde (Flujo Alternativo A3), indicarlo explícitamente en la tarjeta del bolsín sin romper el mapa de los demás bolsines.
4. **Confirmación Explícita (Prevención de Errores)**: Antes de invocar al **CU 30/31** (envío de correo vía Microsoft Graph al GCM destino), mostrar un diálogo con el email destinatario, número de bolsín, coordenadas y última actualización para que el EB confirme (Pasos 8 y 9 de CU 36).
