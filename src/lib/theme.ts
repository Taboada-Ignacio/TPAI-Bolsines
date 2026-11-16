export const THEME_COOKIE_NAME = "bolsines_tema";

export type Tema = "light" | "dark";

export const THEME_COLOR_BY_TEMA: Record<Tema, string> = {
  light: "#C7D1DD",
  dark: "#0A0F1A",
};

export function parseTema(value: string | undefined | null): Tema | undefined {
  if (value === "light" || value === "dark") {
    return value;
  }
  return undefined;
}
