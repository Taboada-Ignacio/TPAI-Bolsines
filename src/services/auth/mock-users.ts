import type { LoginResponse } from "@/dtos/auth.dto";

export type MockAuthOutcome =
  | { status: 200; data: LoginResponse }
  | { status: 401; codigo: "CREDENCIALES_INVALIDAS" }
  | { status: 503; codigo: "ERROR_INTERNO" };

export function authenticateMockUser(
  usuario: string,
  contrasena: string,
): MockAuthOutcome {
  const normalizedUser = usuario.trim().toLowerCase();

  if (normalizedUser === "error") {
    return { status: 503, codigo: "ERROR_INTERNO" };
  }

  if (normalizedUser === "mgomez" && contrasena === "bolsines") {
    return {
      status: 200,
      data: {
        sesion: {
          fechaHoraInicio: new Date().toISOString(),
        },
        empleado: {
          nombre: "Marcelo",
          apellido: "Gómez",
          rol: {
            nombre: "Encargado de Bolsines",
          },
          comisionMedica: {
            codigo: "COR",
            nombre: "CM Córdoba",
          },
        },
      },
    };
  }

  return { status: 401, codigo: "CREDENCIALES_INVALIDAS" };
}
