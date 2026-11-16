import { z } from "zod";

export const loginRequestSchema = z.object({
  usuario: z.string().trim().min(1, "Ingresá tu usuario."),
  contrasena: z
    .string()
    .refine((valor) => valor.trim().length > 0, "Ingresá tu contraseña."),
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;

export const loginResponseSchema = z.object({
  usuario: z.object({
    id: z.number(),
    nombre: z.string(),
  }),
  empleado: z.object({
    id: z.number(),
    nombre: z.string(),
    apellido: z.string(),
  }),
  rol: z.object({
    id: z.number(),
    nombre: z.string(),
  }),
  comisionMedica: z.object({
    id: z.number(),
    codigo: z.string(),
    nombre: z.string(),
  }),
  sesion: z.object({
    id: z.number(),
    fechaHoraInicio: z.iso.datetime(),
  }),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

export const authErrorSchema = z.object({
  error: z.string(),
});

export type AuthError = z.infer<typeof authErrorSchema>;
