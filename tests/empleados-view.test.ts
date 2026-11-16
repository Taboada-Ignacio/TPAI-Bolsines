import { describe, expect, it } from "vitest";
import {
  filtrarEmpleados,
  inicialesDeEmpleado,
  puedeEliminarEmpleado,
} from "@/components/empleados/EmpleadosView";
import type { RegistroEmpleado } from "@/domain/RepositorioEmpleado";
import { empleadoAltaSchema, empleadoEdicionSchema } from "@/dtos/empleado.dto";
import { getDestinosVisibles, ROL_ADMIN } from "@/lib/navigation";

const EMPLEADOS_MOCK: RegistroEmpleado[] = [
  {
    id: 1,
    nombre: "Sofía",
    apellido: "Acosta",
    email: "sacosta@bolsines.test",
    usuario: { id: 10, nombre: "sacosta" },
    rol: { id: 1, nombre: ROL_ADMIN },
    comisionMedica: { id: 1, codigo: "CM01", nombre: "Sede Central" },
  },
  {
    id: 2,
    nombre: "Martín",
    apellido: "Peralta",
    email: "mperalta@bolsines.test",
    usuario: { id: 11, nombre: "mperalta" },
    rol: { id: 2, nombre: "Operador" },
    comisionMedica: { id: 2, codigo: "CM05", nombre: "Rosario Norte" },
  },
  {
    id: 3,
    nombre: "Lucía",
    apellido: "Gómez",
    email: "lgomez@bolsines.test",
    usuario: { id: 12, nombre: "lgomez" },
    rol: { id: 3, nombre: "Auditor" },
    comisionMedica: { id: 3, codigo: "CM12", nombre: "Córdoba Capital" },
  },
];

describe("EmpleadosView — lógica de filtro, autoeliminación y guardia de rol", () => {
  describe("filtrarEmpleados", () => {
    it("devuelve todos los empleados cuando la búsqueda está vacía o tiene solo espacios", () => {
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "")).toHaveLength(3);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "   ")).toHaveLength(3);
    });

    it("filtra por nombre, apellido, usuario, email, rol o comisión médica sin distinguir mayúsculas", () => {
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "  sofía ").map((e) => e.id)).toEqual([1]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "peralta").map((e) => e.id)).toEqual([2]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "lgomez").map((e) => e.id)).toEqual([3]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "mperalta@bolsines").map((e) => e.id)).toEqual([2]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "auditor").map((e) => e.id)).toEqual([3]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "cm05").map((e) => e.id)).toEqual([2]);
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "córdoba").map((e) => e.id)).toEqual([3]);
    });

    it("devuelve lista vacía cuando no hay coincidencias", () => {
      expect(filtrarEmpleados(EMPLEADOS_MOCK, "inexistente")).toEqual([]);
    });
  });

  describe("puedeEliminarEmpleado (protección de autoeliminación)", () => {
    it("impide eliminar al empleado autenticado actualmente", () => {
      expect(puedeEliminarEmpleado(1, 1)).toBe(false);
    });

    it("habilita eliminar a otros empleados distintos al autenticado", () => {
      expect(puedeEliminarEmpleado(2, 1)).toBe(true);
      expect(puedeEliminarEmpleado(3, 1)).toBe(true);
    });
  });

  describe("inicialesDeEmpleado", () => {
    it("calcula iniciales en mayúscula y usa respaldo US si faltan datos", () => {
      expect(inicialesDeEmpleado("Sofía", "Acosta")).toBe("SA");
      expect(inicialesDeEmpleado(" ", "")).toBe("US");
    });
  });

  describe("guardia de rol para /empleados", () => {
    it("habilita el destino empleados solo para ROL_ADMIN", () => {
      const destinosAdmin = getDestinosVisibles(ROL_ADMIN);
      expect(destinosAdmin.some((d) => d.id === "empleados")).toBe(true);

      for (const rolNoAdmin of ["Operador", "Auditor", "Médico", ""]) {
        const destinos = getDestinosVisibles(rolNoAdmin);
        expect(destinos.some((d) => d.id === "empleados")).toBe(false);
      }
    });
  });

  describe("validación de formularios CRUD", () => {
    it("exige usuario y contraseña en alta atómica y los omite en edición", () => {
      const altaInvalida = empleadoAltaSchema.safeParse({
        nombre: "Sofía",
        apellido: "Acosta",
        email: "sacosta@bolsines.test",
        rolId: 1,
        comisionMedicaId: 1,
      });
      expect(altaInvalida.success).toBe(false);

      const altaValida = empleadoAltaSchema.safeParse({
        nombre: "Sofía",
        apellido: "Acosta",
        email: "sacosta@bolsines.test",
        rolId: 1,
        comisionMedicaId: 1,
        usuario: { nombre: "sacosta", contrasena: "secreta" },
      });
      expect(altaValida.success).toBe(true);

      const edicionValida = empleadoEdicionSchema.safeParse({
        nombre: "Sofía",
        apellido: "Acosta",
        email: "sacosta@bolsines.test",
        rolId: 1,
        comisionMedicaId: 1,
      });
      expect(edicionValida.success).toBe(true);
    });
  });
});
