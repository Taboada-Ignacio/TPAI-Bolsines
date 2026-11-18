import { ComisionMedica } from "@/domain/ComisionMedica";
import { Empleado } from "@/domain/Empleado";
import { Rol } from "@/domain/Rol";
import { Usuario } from "@/domain/Usuario";
import type { Prisma } from "../../prisma/generated/client";

export const asociacionesEmpleado = {
  usuario: { select: { nombre: true } },
  rol: true,
  comisionMedica: true,
} satisfies Prisma.EmpleadoInclude;

export function hidratarComision(cm: Prisma.ComisionMedicaGetPayload<object>) {
  return new ComisionMedica(
    cm.codigo,
    cm.direccion,
    cm.email,
    cm.nombre,
    cm.telefono,
  );
}

export function hidratarEmpleado(
  fila: Prisma.EmpleadoGetPayload<{ include: typeof asociacionesEmpleado }>,
) {
  return new Empleado(
    fila.nombre,
    fila.apellido,
    fila.email,
    new Usuario(fila.usuario.nombre, ""),
    new Rol(fila.rol.nombre, fila.rol.descripcion),
    hidratarComision(fila.comisionMedica),
  );
}
