BEGIN;

-- 1. Roles del sistema
INSERT INTO public.rol (nombre, descripcion)
VALUES
  ('Parametrizador del sistema', 'Administra los parámetros generales del sistema, usuarios y comisiones médicas.'),
  ('Encargado de Documentación', 'Gestiona la documentación y los remitos asociados a los bolsines.'),
  ('Encargado de Bolsines', 'Gestiona la creación, modificación, cierre, retiro, recepción y seguimiento de bolsines.'),
  ('Gerente de Comisión Médica', 'Consulta reportes, estadísticas e información de gestión de la comisión médica.')
ON CONFLICT (nombre) DO NOTHING;

-- 2. Estados del bolsín
INSERT INTO public.estado (nombre, descripcion, ambito)
VALUES
  ('Creado', 'El bolsín fue generado y todavía no se encuentra cerrado.', 'BOLSIN'),
  ('Cerrado', 'El bolsín fue cerrado y está pendiente de retiro.', 'BOLSIN'),
  ('Enviado', 'El bolsín fue retirado y enviado hacia la comisión médica de destino.', 'BOLSIN'),
  ('RecibidoEnCMDestino', 'El bolsín fue recibido en la comisión médica de destino.', 'BOLSIN'),
  ('DeBaja', 'El bolsín fue dado de baja.', 'BOLSIN')
ON CONFLICT (nombre, ambito) DO NOTHING;

-- 3. Comisiones médicas ficticias
INSERT INTO public.comision_medica (codigo, nombre, direccion, email, telefono)
VALUES
  ('CM-BA', 'Comisión Médica Buenos Aires', 'Sede ficticia - La Plata, Buenos Aires, Argentina', 'cm-buenos-aires@example.com', '0000000001'),
  ('CM-CAT', 'Comisión Médica Catamarca', 'Sede ficticia - San Fernando del Valle de Catamarca, Catamarca, Argentina', 'cm-catamarca@example.com', '0000000002'),
  ('CM-CHA', 'Comisión Médica Chaco', 'Sede ficticia - Resistencia, Chaco, Argentina', 'cm-chaco@example.com', '0000000003'),
  ('CM-CHU', 'Comisión Médica Chubut', 'Sede ficticia - Rawson, Chubut, Argentina', 'cm-chubut@example.com', '0000000004'),
  ('CM-CBA', 'Comisión Médica Córdoba', 'Sede ficticia - Córdoba, Argentina', 'cm-cordoba@example.com', '0000000005'),
  ('CM-COR', 'Comisión Médica Corrientes', 'Sede ficticia - Corrientes, Argentina', 'cm-corrientes@example.com', '0000000006'),
  ('CM-ER', 'Comisión Médica Entre Ríos', 'Sede ficticia - Paraná, Entre Ríos, Argentina', 'cm-entre-rios@example.com', '0000000007'),
  ('CM-FOR', 'Comisión Médica Formosa', 'Sede ficticia - Formosa, Argentina', 'cm-formosa@example.com', '0000000008'),
  ('CM-JUJ', 'Comisión Médica Jujuy', 'Sede ficticia - San Salvador de Jujuy, Jujuy, Argentina', 'cm-jujuy@example.com', '0000000009'),
  ('CM-LP', 'Comisión Médica La Pampa', 'Sede ficticia - Santa Rosa, La Pampa, Argentina', 'cm-la-pampa@example.com', '0000000010'),
  ('CM-LR', 'Comisión Médica La Rioja', 'Sede ficticia - La Rioja, Argentina', 'cm-la-rioja@example.com', '0000000011'),
  ('CM-MZA', 'Comisión Médica Mendoza', 'Sede ficticia - Mendoza, Argentina', 'cm-mendoza@example.com', '0000000012'),
  ('CM-MIS', 'Comisión Médica Misiones', 'Sede ficticia - Posadas, Misiones, Argentina', 'cm-misiones@example.com', '0000000013'),
  ('CM-NEU', 'Comisión Médica Neuquén', 'Sede ficticia - Neuquén, Argentina', 'cm-neuquen@example.com', '0000000014'),
  ('CM-RN', 'Comisión Médica Río Negro', 'Sede ficticia - Viedma, Río Negro, Argentina', 'cm-rio-negro@example.com', '0000000015'),
  ('CM-SAL', 'Comisión Médica Salta', 'Sede ficticia - Salta, Argentina', 'cm-salta@example.com', '0000000016'),
  ('CM-SJ', 'Comisión Médica San Juan', 'Sede ficticia - San Juan, Argentina', 'cm-san-juan@example.com', '0000000017'),
  ('CM-SL', 'Comisión Médica San Luis', 'Sede ficticia - San Luis, Argentina', 'cm-san-luis@example.com', '0000000018'),
  ('CM-SC', 'Comisión Médica Santa Cruz', 'Sede ficticia - Río Gallegos, Santa Cruz, Argentina', 'cm-santa-cruz@example.com', '0000000019'),
  ('CM-SF', 'Comisión Médica Santa Fe', 'Sede ficticia - Santa Fe, Argentina', 'cm-santa-fe@example.com', '0000000020'),
  ('CM-SDE', 'Comisión Médica Santiago del Estero', 'Sede ficticia - Santiago del Estero, Argentina', 'cm-santiago-del-estero@example.com', '0000000021'),
  ('CM-TDF', 'Comisión Médica Tierra del Fuego', 'Sede ficticia - Ushuaia, Tierra del Fuego, Argentina', 'cm-tierra-del-fuego@example.com', '0000000022'),
  ('CM-TUC', 'Comisión Médica Tucumán', 'Sede ficticia - San Miguel de Tucumán, Tucumán, Argentina', 'cm-tucuman@example.com', '0000000023'),
  ('CM-CABA', 'Comisión Médica Ciudad Autónoma de Buenos Aires', 'Sede ficticia - Ciudad Autónoma de Buenos Aires, Argentina', 'cm-caba@example.com', '0000000024')
ON CONFLICT (codigo) DO NOTHING;

-- 4. Empleados y usuarios ficticios
-- La comprobación por email y el alta deben serializarse incluso sin UNIQUE.
LOCK TABLE public.empleado IN SHARE ROW EXCLUSIVE MODE;

DO $seed$
DECLARE
  demo record;
  id_usuario integer;
  id_rol integer;
  id_comision integer;
BEGIN
  FOR demo IN
    SELECT * FROM (VALUES
      ('Martín', 'Fernández', 'parametrizador.demo', 'Parametrizador del sistema', 'CM-CABA'),
      ('Lucía', 'González', 'documentacion.demo', 'Encargado de Documentación', 'CM-CBA'),
      ('Nicolás', 'Rodríguez', 'bolsines.demo', 'Encargado de Bolsines', 'CM-CBA'),
      ('Carolina', 'Martínez', 'gerente.demo', 'Gerente de Comisión Médica', 'CM-SF')
    ) AS datos(nombre, apellido, usuario, rol, comision)
  LOOP
    IF EXISTS (
      SELECT 1 FROM public.empleado WHERE email = demo.usuario || '@example.com'
    ) THEN
      CONTINUE;
    END IF;

    SELECT id INTO STRICT id_rol FROM public.rol WHERE nombre = demo.rol;
    SELECT id INTO STRICT id_comision FROM public.comision_medica WHERE codigo = demo.comision;

    INSERT INTO public.usuario (nombre, contrasena)
    VALUES (demo.usuario, '123456')
    RETURNING id INTO id_usuario;

    INSERT INTO public.empleado (nombre, apellido, email, usuario_id, rol_id, comision_medica_id)
    VALUES (demo.nombre, demo.apellido, demo.usuario || '@example.com', id_usuario, id_rol, id_comision);
  END LOOP;
END;
$seed$;

COMMIT;
