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

  it("rechaza usuario o contraseña vacíos", () => {
    expect(
      loginRequestSchema.safeParse({ usuario: "   ", contrasena: "bolsines" })
        .success,
    ).toBe(false);
    expect(
      loginRequestSchema.safeParse({ usuario: "mgomez", contrasena: "" })
        .success,
    ).toBe(false);
  });

  it("valida LoginResponse completo", () => {
    const result = loginResponseSchema.safeParse({
      sesion: { fechaHoraInicio: "2026-11-15T03:00:00.000Z" },
      empleado: {
        nombre: "Marcelo",
        apellido: "Gómez",
        rol: { nombre: "Encargado de Bolsines" },
        comisionMedica: { codigo: "COR", nombre: "CM Córdoba" },
      },
    });
    expect(result.success).toBe(true);
  });

  it("valida los códigos de AuthError", () => {
    for (const codigo of [
      "CREDENCIALES_INVALIDAS",
      "DATOS_INVALIDOS",
      "ERROR_INTERNO",
    ]) {
      expect(authErrorSchema.safeParse({ codigo }).success).toBe(true);
    }
    expect(authErrorSchema.safeParse({ codigo: "OTRO" }).success).toBe(false);
  });
});
