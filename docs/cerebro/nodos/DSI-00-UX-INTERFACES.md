---
id: DSI-00-UX-INTERFACES
titulo: Diseño de Interfaces de Usuario (UX, Nielsen, Shneiderman y Empatía)
tipo: teoria
unidad: Metodologia
categoria: Catedra
tags: [ux, ui, nielsen, shneiderman, mapa-empatia, interfaces, epc]
conectado_con: [DSI-00-CONVENCIONES, DSI-U3-RNF-ISO25000, PPAI-UX-EMPATIA, PPAI-CU-36]
depende_de: [DSI-00-CONVENCIONES]
---

# Diseño de Interfaces de Usuario (EPC Cátedra DSI 2026)

Basado en `2026 DSI Guía de EPC sobre Diseño de Interfaces de Usuario.pdf` y los lineamientos de UX de la cátedra, una interfaz en DSI no solo cumple la función técnica del Caso de Uso, sino que debe responder al perfil cognitivo y operativo del usuario real.

## 1. Herramientas de Descubrimiento UX
- **Proto-Persona**: Arquetipo del usuario principal del caso de uso (edad, rol, contexto físico, nivel tecnológico, metas, presiones operativas).
- **Mapa de Empatía**: Matriz de 6 bloques sobre el usuario:
  1. ¿Qué piensa y siente?
  2. ¿Qué ve en su entorno y pantalla?
  3. ¿Qué escucha de supervisores, pares y clientes?
  4. ¿Qué dice y hace?
  5. **Dolores / Frustraciones (Pains)**: Puntos de fricción que el diseño debe eliminar.
  6. **Necesidades / Ganancias (Gains)**: Mejoras tangibles que espera del nuevo producto.

---

## 2. Las 10 Heurísticas de Usabilidad de Jakob Nielsen
1. **Visibilidad del estado del sistema**: El usuario debe saber siempre qué ocurre mediante feedback inmediato e inequívoco (ej. estados en colores semánticos, spinners de consulta GPS, confirmación de email enviado).
2. **Coincidencia entre el sistema y el mundo real**: Usar el vocabulario exacto del dominio (*Bolsín*, *Precinto*, *CM Origen/Destino*, *Remito*) en lugar de jerga técnica.
3. **Control y libertad del usuario**: Salidas de emergencia claras (*Cancelar*, *Limpiar filtros*, *Volver*) ante errores de selección.
4. **Consistencia y estándares**: Mismos colores, tipografía, ubicación de botones y convenciones en todas las pantallas.
5. **Prevención de errores**: Validar filtros antes de consultar, deshabilitar acciones inválidas según el estado del bolsín, pedir confirmación antes de acciones irreversibles (como enviar mail a un GCM).
6. **Reconocimiento antes que recuerdo**: Mostrar listados seleccionables de CM Destino y precintos disponibles en vez de obligar al EB a recordar códigos de memoria.
7. **Flexibilidad y eficiencia de uso**: Atajos de teclado, enfoque automático (`autofocus`) en buscadores/escáneres de precinto, filtros combinables rápidos.
8. **Diseño estético y minimalista**: Mostrar solo la información relevante para la tarea del CU sin ruido visual ni tablas sobrecargadas.
9. **Ayudar a reconocer, diagnosticar y recuperarse de errores**: Mensajes en lenguaje natural (nunca `"Error 500"` ni `"NullReferenceException"`), indicando qué falló y cómo proceder (ej. si el GPS no responde en el Flujo Alternativo A3).
10. **Ayuda y documentación**: Tooltips claros, leyendas de colores en el mapa y guías contextuales breves.

---

## 3. Reglas de Oro de Ben Shneiderman (Aplicadas al PPAI)
- Permitir la **reversibilidad sencilla** de acciones (deshacer selecciones o cancelar antes de confirmar).
- Mantener al usuario en **control** (el sistema inicia acciones por confirmación explícita del usuario, no de forma sorpresiva).
- **Reducir la carga de memoria a corto plazo** manteniendo visible la CM del usuario logueado y los datos del bolsín seleccionado junto al mapa.
- **Patrones de Layout recomendados**: *Two-Panel Selector* (listado/filtros a la izquierda + mapa/detalle a la derecha), *Center Stage* (mapa protagonista) y *Wizard* para flujos secuenciales.
