import { describe, expect, it } from "vitest";
import {
  authErrorSchema,
  loginRequestSchema,
  loginResponseSchema,
} from "@/dtos/auth.dto";

describe("auth.dto", () => {
  it("acepta credenciales válidas y recorta espacios en usuario", () => {
    const result = loginRequestSchema.safeParse({
      usuario: "  mgomez  ",
      contrasena: "bolsines",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.usuario).toBe("mgomez");
      expect(result.data.contrasena).toBe("bolsines");
    }
  });

  it("rechaza usuario o contraseña vacíos o solo espacios", () => {
    expect(
      loginRequestSchema.safeParse({ usuario: "   ", contrasena: "bolsines" })
        .success,
    ).toBe(false);
    expect(
      loginRequestSchema.safeParse({ usuario: "mgomez", contrasena: "" })
        .success,
    ).toBe(false);
    expect(
      loginRequestSchema.safeParse({ usuario: "mgomez", contrasena: "   " })
        .success,
    ).toBe(false);
  });

  it("valida LoginResponse completo del backend", () => {
    const result = loginResponseSchema.safeParse({
      usuario: { id: 31, nombre: "bolsines.demo" },
      empleado: { id: 19, nombre: "Marcelo", apellido: "Gómez" },
      rol: { id: 21, nombre: "Encargado de Bolsines" },
      comisionMedica: { id: 42, codigo: "COR", nombre: "CM Córdoba" },
      sesion: { id: 73, fechaHoraInicio: "2026-11-15T03:00:00.000Z" },
    });
    expect(result.success).toBe(true);
  });

  it("valida el formato de error del backend", () => {
    expect(
      authErrorSchema.safeParse({ error: "Credenciales o sesión inválidas." })
        .success,
    ).toBe(true);
    expect(authErrorSchema.safeParse({}).success).toBe(false);
  });
});
