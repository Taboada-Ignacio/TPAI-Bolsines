/**
 * Estilos minimalistas claro/oscuro para Google Maps JS API,
 * alineados con la paleta Rumbo / Costado de `src/app/globals.css`.
 */

export const GOOGLE_MAP_STYLES_LIGHT: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#dfe6ee" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#475569" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#eef2f6" }, { weight: 3 }],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#94a3b8" }, { weight: 1.2 }],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [{ color: "#cbd5e1" }, { weight: 0.9 }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#e5ebf2" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#eef2f6" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#cbd5e1" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#f8fafc" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#94a3b8" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c7d1dd" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#64748b" }],
  },
];

export const GOOGLE_MAP_STYLES_DARK: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#121927" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#94a3b8" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#0a0f1a" }, { weight: 3 }],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#475569" }, { weight: 1.2 }],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [{ color: "#273449" }, { weight: 0.9 }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#0f1624" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1b2433" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#0a0f1a" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#273549" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#334155" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0a0f1a" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#475569" }],
  },
];

export function obtenerEstilosGoogleMaps(
  temaOscuro: boolean,
): google.maps.MapTypeStyle[] {
  return temaOscuro ? GOOGLE_MAP_STYLES_DARK : GOOGLE_MAP_STYLES_LIGHT;
}
