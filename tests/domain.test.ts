import { describe, expect, it, vi } from "vitest";
import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Empleado } from "@/domain/Empleado";
import { Estado } from "@/domain/Estado";
import { Rol } from "@/domain/Rol";
import { Sesion } from "@/domain/Sesion";
import { Usuario } from "@/domain/Usuario";

describe("Entidades del CU 36", () => {
  const inicio = new Date("2026-11-14T12:00:00Z");
  const fin = new Date("2026-11-14T13:00:00Z");

  const crearUsuario = () => new Usuario("ana", "clave-de-prueba");
  const crearRol = () => new Rol("GCM", "Gerente de comisión médica");
  const crearComision = (codigo: string) =>
    new ComisionMedica(
      codigo,
      "Av. Colón 100",
      "cm@example.com",
      "Córdoba",
      "0351-5550100",
    );
  const crearEmpleado = () =>
    new Empleado(
      "Ana",
      "López",
      "ana@example.com",
      crearUsuario(),
      crearRol(),
      crearComision("01"),
    );
  const crearEstado = () => new Estado("Enviado", "En tránsito", "Bolsin");

  describe("Consultas de dominio para el CU 36", () => {
    const origen = crearComision("CM-CBA");
    const destino = crearComision("CM-SF");
    const crearBolsin = (cambios: CambioEstadoBolsin[]) =>
      new Bolsin(inicio, 100, 200, 2.5, origen, destino, cambios);
    const crearCambio = (fechaFin: Date | null, estado = crearEstado()) =>
      new CambioEstadoBolsin(inicio, fechaFin, estado, crearEmpleado());

    it("compara el código de origen incluso entre instancias distintas", () => {
      const bolsin = crearBolsin([]);
      expect(bolsin.esCMOrigenIgualCMLogueado(origen)).toBe(true);
      const mismaComision = crearComision(origen.getCodigo());
      mismaComision.setNombre("Otro nombre descriptivo");
      expect(bolsin.esCMOrigenIgualCMLogueado(mismaComision)).toBe(true);
      expect(bolsin.esCMOrigenIgualCMLogueado(destino)).toBe(false);
      expect(bolsin.esCMOrigenIgualCMLogueado(crearComision("CM-MZA"))).toBe(
        false,
      );
    });

    it("determina la vigencia únicamente por la fecha de fin", () => {
      expect(crearCambio(null).sosActual()).toBe(true);
      expect(crearCambio(fin).sosActual()).toBe(false);
    });

    it("encuentra un cambio vigente posterior al histórico sin filtrar nombre ni ámbito", () => {
      const actual = crearCambio(null, new Estado("Creado", "", "OTRO"));
      const bolsin = crearBolsin([crearCambio(fin), actual, crearCambio(fin)]);
      expect(bolsin.buscarEstadoActualBolsin()).toBe(actual);
    });

    it("devuelve null sin un cambio vigente, incluso con historial vacío", () => {
      expect(
        crearBolsin([crearCambio(fin)]).buscarEstadoActualBolsin(),
      ).toBeNull();
      expect(crearBolsin([]).buscarEstadoActualBolsin()).toBeNull();
    });

    it("informa la inconsistencia de varios cambios vigentes", () => {
      const bolsin = crearBolsin([crearCambio(null), crearCambio(null)]);
      expect(() => bolsin.buscarEstadoActualBolsin()).toThrow(
        "más de un cambio de estado actual",
      );
    });

    it("reconoce solo el ámbito exacto BOLSIN, independientemente del nombre", () => {
      expect(new Estado("Creado", "", "BOLSIN").esAmbitoBolsin()).toBe(true);
      expect(new Estado("Enviado", "", "OTRO").esAmbitoBolsin()).toBe(false);
      expect(new Estado("Enviado", "", "Bolsin").esAmbitoBolsin()).toBe(false);
    });

    it("reconoce Enviado independientemente del ámbito", () => {
      expect(new Estado("Enviado", "", "OTRO").esEnviado()).toBe(true);
    });

    it.each(["Creado", "Cerrado", "RecibidoEnCMDestino", "DeBaja", "enviado"])(
      "no reconoce %s como Enviado",
      (nombre) =>
        expect(new Estado(nombre, "", "BOLSIN").esEnviado()).toBe(false),
    );

    it("delega el ámbito y el nombre al estado asociado", () => {
      const estado = new Estado("Creado", "", "OTRO");
      const ambito = vi.spyOn(estado, "esAmbitoBolsin").mockReturnValue(true);
      const enviado = vi.spyOn(estado, "esEnviado").mockReturnValue(true);
      const cambio = crearCambio(null, estado);
      expect(cambio.esAmbitoBolsin()).toBe(true);
      expect(cambio.esEnviado()).toBe(true);
      expect(ambito).toHaveBeenCalledOnce();
      expect(enviado).toHaveBeenCalledOnce();
    });

    it("consulta el origen y el estado sin modificar las entidades", () => {
      const cambio = crearCambio(null, new Estado("Enviado", "", "BOLSIN"));
      const bolsin = crearBolsin([crearCambio(fin), cambio]);
      const antes = structuredClone(bolsin);
      bolsin.esCMOrigenIgualCMLogueado(origen);
      bolsin.buscarEstadoActualBolsin();
      cambio.sosActual();
      cambio.esAmbitoBolsin();
      cambio.esEnviado();
      expect(structuredClone(bolsin)).toEqual(antes);
    });
  });

  describe("Consultas de dominio para identificar al gerente de destino", () => {
    const gerente = "Gerente de Comisión Médica";

    it("compara la comisión del empleado por código sin modificar los objetos", () => {
      const empleado = crearEmpleado();
      const original = empleado.getComisionMedica();
      const equivalente = crearComision(original.getCodigo());
      equivalente.setNombre("Nombre descriptivo distinto");
      const diferente = crearComision("02");
      const antes = structuredClone({ empleado, equivalente, diferente });

      expect(empleado.esTuCM(original)).toBe(true);
      expect(empleado.esTuCM(equivalente)).toBe(true);
      expect(empleado.esTuCM(diferente)).toBe(false);
      expect(structuredClone({ empleado, equivalente, diferente })).toEqual(
        antes,
      );
      expect(empleado.getComisionMedica()).toBe(original);
    });

    it.each([
      [gerente, true],
      ["Encargado de Bolsines", false],
      ["Encargado de Documentación", false],
      ["Parametrizador del sistema", false],
      ["Gerente de Comision Medica", false],
    ])("evalúa el rol %s sin cambiar sus atributos", (nombre, esperado) => {
      const rol = new Rol(nombre, gerente);
      const antes = structuredClone(rol);
      expect(rol.esGCM()).toBe(esperado);
      expect(structuredClone(rol)).toEqual(antes);
    });

    it("reconoce al gerente en distintas comisiones y conserva sus datos", () => {
      const empleado = crearEmpleado();
      const rol = new Rol(gerente, "Rol del catálogo");
      empleado.setRol(rol);
      const antes = structuredClone(empleado);
      expect(empleado.sosGCM()).toBe(true);
      expect(structuredClone(empleado)).toEqual(antes);
      expect(empleado.getRol()).toBe(rol);
      empleado.setComisionMedica(crearComision("02"));
      expect(empleado.sosGCM()).toBe(true);
      empleado.setRol(new Rol("Encargado de Bolsines", gerente));
      expect(empleado.sosGCM()).toBe(false);
    });

    it("devuelve el resultado de Rol.esGCM mediante delegación", () => {
      const empleado = crearEmpleado();
      const esGCM = vi
        .spyOn(empleado.getRol(), "esGCM")
        .mockReturnValueOnce(true);
      expect(empleado.sosGCM()).toBe(true);
      expect(empleado.sosGCM()).toBe(false);
      expect(esGCM).toHaveBeenCalledTimes(2);
    });
  });

  it("inicializa y actualiza los datos de Usuario", () => {
    const usuario = crearUsuario();
    expect(usuario.getNombre()).toBe("ana");
    expect(usuario.getContrasena()).toBe("clave-de-prueba");

    usuario.setNombre("ines");
    usuario.setContrasena("otra-clave-de-prueba");
    expect(usuario.getNombre()).toBe("ines");
    expect(usuario.getContrasena()).toBe("otra-clave-de-prueba");
  });

  it("inicializa y actualiza los datos de Rol", () => {
    const rol = crearRol();
    expect(rol.getNombre()).toBe("GCM");
    expect(rol.getDescripcion()).toBe("Gerente de comisión médica");

    rol.setNombre("Operador");
    rol.setDescripcion("Operador de comisión médica");
    expect(rol.getNombre()).toBe("Operador");
    expect(rol.getDescripcion()).toBe("Operador de comisión médica");
  });

  it("inicializa y actualiza los datos de ComisionMedica", () => {
    const comision = crearComision("01");
    expect(comision.getCodigo()).toBe("01");
    expect(comision.getDireccion()).toBe("Av. Colón 100");
    expect(comision.getEmail()).toBe("cm@example.com");
    expect(comision.getNombre()).toBe("Córdoba");
    expect(comision.getTelefono()).toBe("0351-5550100");

    comision.setCodigo("02");
    comision.setDireccion("Av. Vélez Sarsfield 200");
    comision.setEmail("destino@example.com");
    comision.setNombre("Córdoba Sur");
    comision.setTelefono("0351-5550101");
    expect(comision.getCodigo()).toBe("02");
    expect(comision.getDireccion()).toBe("Av. Vélez Sarsfield 200");
    expect(comision.getEmail()).toBe("destino@example.com");
    expect(comision.getNombre()).toBe("Córdoba Sur");
    expect(comision.getTelefono()).toBe("0351-5550101");
  });

  it("inicializa y actualiza los datos y las asociaciones de Empleado", () => {
    const usuario = crearUsuario();
    const rol = crearRol();
    const comision = crearComision("01");
    const empleado = new Empleado(
      "Ana",
      "López",
      "ana@example.com",
      usuario,
      rol,
      comision,
    );
    expect(empleado.getNombre()).toBe("Ana");
    expect(empleado.getApellido()).toBe("López");
    expect(empleado.getEmail()).toBe("ana@example.com");
    expect(empleado.getUsuario()).toBe(usuario);
    expect(empleado.getRol()).toBe(rol);
    expect(empleado.getComisionMedica()).toBe(comision);

    const nuevoUsuario = new Usuario("ines", "clave-de-prueba");
    const nuevoRol = new Rol("Operador", "Operador de comisión médica");
    const nuevaComision = crearComision("02");
    empleado.setNombre("Inés");
    empleado.setApellido("García");
    empleado.setEmail("ines@example.com");
    empleado.setUsuario(nuevoUsuario);
    empleado.setRol(nuevoRol);
    empleado.setComisionMedica(nuevaComision);
    expect(empleado.getNombre()).toBe("Inés");
    expect(empleado.getApellido()).toBe("García");
    expect(empleado.getEmail()).toBe("ines@example.com");
    expect(empleado.getUsuario()).toBe(nuevoUsuario);
    expect(empleado.getRol()).toBe(nuevoRol);
    expect(empleado.getComisionMedica()).toBe(nuevaComision);
  });

  it.each([
    [
      "Comisión Médica Córdoba",
      "Av. Ejemplo 123",
      "Comisión Médica Córdoba - Av. Ejemplo 123",
    ],
    [
      "Comisión Médica Santa Fe",
      "San Martín 456",
      "Comisión Médica Santa Fe - San Martín 456",
    ],
    ["Á É Í Ó Ú Ñ", "á é í ó ú ñ", "Á É Í Ó Ú Ñ - á é í ó ú ñ"],
  ])(
    "devuelve el nombre y la dirección de %s",
    (nombre, direccion, esperado) => {
      const empleado = crearEmpleado();
      empleado.setComisionMedica(
        new ComisionMedica(
          "02",
          direccion,
          "cm@example.com",
          nombre,
          "0351-5550100",
        ),
      );
      expect(empleado.obtenerCM()).toBe(esperado);
    },
  );

  it("obtiene la comisión sin modificar al empleado ni a su comisión", () => {
    const empleado = crearEmpleado();
    const comision = empleado.getComisionMedica();
    const antes = structuredClone(empleado);

    empleado.obtenerCM();

    expect(structuredClone(empleado)).toEqual(antes);
    expect(empleado.getComisionMedica()).toBe(comision);
  });

  it("inicializa y actualiza las fechas y el usuario de Sesion", () => {
    const usuario = crearUsuario();
    const sesion = new Sesion(inicio, null, usuario);
    expect(sesion.getFechaHoraInicio()).toEqual(inicio);
    expect(sesion.getFechaHoraFin()).toBeNull();
    expect(sesion.getUsuario()).toBe(usuario);

    const nuevoInicio = new Date("2026-11-14T12:30:00Z");
    const nuevoUsuario = new Usuario("ines", "clave-de-prueba");
    sesion.setFechaHoraInicio(nuevoInicio);
    sesion.setFechaHoraFin(fin);
    sesion.setUsuario(nuevoUsuario);
    expect(sesion.getFechaHoraInicio()).toEqual(nuevoInicio);
    expect(sesion.getFechaHoraFin()).toEqual(fin);
    expect(sesion.getUsuario()).toBe(nuevoUsuario);

    sesion.setFechaHoraFin(null);
    expect(sesion.getFechaHoraFin()).toBeNull();
  });

  it("inicializa y actualiza los datos de Estado", () => {
    const estado = crearEstado();
    expect(estado.getNombre()).toBe("Enviado");
    expect(estado.getDescripcion()).toBe("En tránsito");
    expect(estado.getAmbito()).toBe("Bolsin");

    estado.setNombre("Recibido");
    estado.setDescripcion("Recibido en destino");
    estado.setAmbito("Remito");
    expect(estado.getNombre()).toBe("Recibido");
    expect(estado.getDescripcion()).toBe("Recibido en destino");
    expect(estado.getAmbito()).toBe("Remito");
  });

  it("inicializa y actualiza las fechas y las asociaciones de CambioEstadoBolsin", () => {
    const estado = crearEstado();
    const responsable = crearEmpleado();
    const cambio = new CambioEstadoBolsin(inicio, null, estado, responsable);
    expect(cambio.getFechaHoraInicio()).toEqual(inicio);
    expect(cambio.getFechaHoraFin()).toBeNull();
    expect(cambio.getEstado()).toBe(estado);
    expect(cambio.getResponsableCE()).toBe(responsable);

    const nuevoInicio = new Date("2026-11-14T12:30:00Z");
    const nuevoEstado = new Estado("Recibido", "Recibido en destino", "Bolsin");
    const nuevoResponsable = crearEmpleado();
    cambio.setFechaHoraInicio(nuevoInicio);
    cambio.setFechaHoraFin(fin);
    cambio.setEstado(nuevoEstado);
    cambio.setResponsableCE(nuevoResponsable);
    expect(cambio.getFechaHoraInicio()).toEqual(nuevoInicio);
    expect(cambio.getFechaHoraFin()).toEqual(fin);
    expect(cambio.getEstado()).toBe(nuevoEstado);
    expect(cambio.getResponsableCE()).toBe(nuevoResponsable);

    cambio.setFechaHoraFin(null);
    expect(cambio.getFechaHoraFin()).toBeNull();
  });

  it("inicializa y actualiza los datos, las comisiones y el historial de Bolsin", () => {
    const cmOrigen = crearComision("01");
    const cmDestino = crearComision("02");
    const cambio = new CambioEstadoBolsin(
      inicio,
      fin,
      crearEstado(),
      crearEmpleado(),
    );
    const nuevoCambio = new CambioEstadoBolsin(
      fin,
      null,
      crearEstado(),
      crearEmpleado(),
    );
    const bolsin = new Bolsin(inicio, 100, 200, 2.5, cmOrigen, cmDestino, [
      cambio,
    ]);
    expect(bolsin.getFecha()).toEqual(inicio);
    expect(bolsin.getNumeroBolsin()).toBe(100);
    expect(bolsin.getNumeroPrecinto()).toBe(200);
    expect(bolsin.getPeso()).toBe(2.5);
    expect(bolsin.getCmOrigen()).toBe(cmOrigen);
    expect(bolsin.getCmDestino()).toBe(cmDestino);
    expect(bolsin.getCambiosEstado()[0]).toBe(cambio);

    bolsin.setFecha(fin);
    bolsin.setNumeroBolsin(101);
    bolsin.setNumeroPrecinto(201);
    bolsin.setPeso(3.75);
    bolsin.setCmOrigen(cmDestino);
    bolsin.setCmDestino(cmOrigen);
    bolsin.setCambiosEstado([cambio, nuevoCambio]);
    expect(bolsin.getFecha()).toEqual(fin);
    expect(bolsin.getNumeroBolsin()).toBe(101);
    expect(bolsin.getNumeroPrecinto()).toBe(201);
    expect(bolsin.getPeso()).toBe(3.75);
    expect(bolsin.getCmOrigen()).toBe(cmDestino);
    expect(bolsin.getCmDestino()).toBe(cmOrigen);
    const historial = bolsin.getCambiosEstado();
    expect(historial).toHaveLength(2);
    expect(historial[0]).toBe(cambio);
    expect(historial[1]).toBe(nuevoCambio);
  });

  it("protege el array del historial al construir, leer y actualizar Bolsin", () => {
    const cambio = new CambioEstadoBolsin(
      inicio,
      fin,
      crearEstado(),
      crearEmpleado(),
    );
    const nuevoCambio = new CambioEstadoBolsin(
      fin,
      null,
      crearEstado(),
      crearEmpleado(),
    );
    const historialInicial = [cambio];
    const bolsin = new Bolsin(
      inicio,
      100,
      200,
      2.5,
      crearComision("01"),
      crearComision("02"),
      historialInicial,
    );

    historialInicial.push(nuevoCambio);
    const historialLeido = bolsin.getCambiosEstado();
    expect(historialLeido).toHaveLength(1);
    historialLeido.pop();
    expect(bolsin.getCambiosEstado()).toHaveLength(1);

    const nuevoHistorial = [nuevoCambio];
    bolsin.setCambiosEstado(nuevoHistorial);
    nuevoHistorial.pop();
    expect(bolsin.getCambiosEstado()).toHaveLength(1);
    expect(bolsin.getCambiosEstado()[0]).toBe(nuevoCambio);
  });
});
