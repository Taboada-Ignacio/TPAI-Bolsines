import { describe, expect, it } from "vitest";
import { parseTema, THEME_COOKIE_NAME } from "@/lib/theme";

describe("parseTema", () => {
  it("acepta 'light' y 'dark'", () => {
    expect(parseTema("light")).toBe("light");
    expect(parseTema("dark")).toBe("dark");
  });

  it("devuelve undefined para valores inválidos o ausentes", () => {
    expect(parseTema(undefined)).toBeUndefined();
    expect(parseTema(null)).toBeUndefined();
    expect(parseTema("")).toBeUndefined();
    expect(parseTema("system")).toBeUndefined();
    expect(parseTema("DARK")).toBeUndefined();
  });

  it("usa el nombre de cookie esperado", () => {
    expect(THEME_COOKIE_NAME).toBe("bolsines_tema");
  });
});
