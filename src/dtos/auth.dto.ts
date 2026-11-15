import { z } from "zod";

export const loginRequestSchema = z.object({
  usuario: z.string().trim().min(1, "Ingresá tu usuario."),
  contrasena: z.string().min(1, "Ingresá tu contraseña."),
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;

export const loginResponseSchema = z.object({
  sesion: z.object({
    fechaHoraInicio: z.iso.datetime(),
  }),
  empleado: z.object({
    nombre: z.string(),
    apellido: z.string(),
    rol: z.object({
      nombre: z.string(),
    }),
    comisionMedica: z.object({
      codigo: z.string(),
      nombre: z.string(),
    }),
  }),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

export const authErrorSchema = z.object({
  codigo: z.enum([
    "CREDENCIALES_INVALIDAS",
    "DATOS_INVALIDOS",
    "ERROR_INTERNO",
  ]),
});

export type AuthError = z.infer<typeof authErrorSchema>;
