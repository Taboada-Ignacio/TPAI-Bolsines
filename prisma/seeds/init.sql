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

-- 3. Comisiones médicas de la API GPS oficial
INSERT INTO public.comision_medica (codigo, nombre, direccion, email, telefono)
VALUES
  ('CM-CBA-01', 'CM Cordoba Centro', 'Sede ficticia - Cordoba Centro, Argentina', 'cm-cba-01@example.com', '0000000025'),
  ('CM-CBA-02', 'CM Cordoba Norte', 'Sede ficticia - Cordoba Norte, Argentina', 'cm-cba-02@example.com', '0000000026'),
  ('CM-ROS-02', 'CM Rosario', 'Sede ficticia - Rosario, Argentina', 'cm-ros-02@example.com', '0000000027'),
  ('CM-MDZ-03', 'CM Mendoza', 'Sede ficticia - Mendoza, Argentina', 'cm-mdz-03@example.com', '0000000028'),
  ('CM-BA-01', 'CM Buenos Aires', 'Sede ficticia - Buenos Aires, Argentina', 'cm-ba-01@example.com', '0000000029'),
  ('CM-TUC-01', 'CM Tucuman', 'Sede ficticia - Tucuman, Argentina', 'cm-tuc-01@example.com', '0000000030'),
  ('CM-SLA-01', 'CM Salta', 'Sede ficticia - Salta, Argentina', 'cm-sla-01@example.com', '0000000031'),
  ('CM-JUJ-01', 'CM Jujuy', 'Sede ficticia - Jujuy, Argentina', 'cm-juj-01@example.com', '0000000032'),
  ('CM-NQN-01', 'CM Neuquen', 'Sede ficticia - Neuquen, Argentina', 'cm-nqn-01@example.com', '0000000033'),
  ('CM-MDQ-01', 'CM Mar del Plata', 'Sede ficticia - Mar del Plata, Argentina', 'cm-mdq-01@example.com', '0000000034'),
  ('CM-LPL-01', 'CM La Plata', 'Sede ficticia - La Plata, Argentina', 'cm-lpl-01@example.com', '0000000035')
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
      ('Martín', 'Fernández', 'parametrizador.demo', 'Parametrizador del sistema', 'CM-BA-01'),
      ('Lucía', 'González', 'documentacion.demo', 'Encargado de Documentación', 'CM-CBA-01'),
      ('Nicolás', 'Rodríguez', 'bolsines.demo', 'Encargado de Bolsines', 'CM-CBA-01'),
      ('Carolina', 'Martínez', 'gerente.demo', 'Gerente de Comisión Médica', 'CM-ROS-02')
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

-- 4a. Gerentes de demostración para las comisiones que todavía no tienen uno.
-- Usa el bloqueo de empleado adquirido en la sección anterior.
WITH gerentes_faltantes AS (
  SELECT cm.id AS comision_medica_id, cm.codigo, r.id AS rol_id,
    'gcm.' || lower(cm.codigo) AS usuario
  FROM public.comision_medica cm
  CROSS JOIN public.rol r
  WHERE r.nombre = 'Gerente de Comisión Médica'
    AND NOT EXISTS (
      SELECT 1 FROM public.empleado e
      WHERE e.comision_medica_id = cm.id AND e.rol_id = r.id
    )
), usuarios_nuevos AS (
  INSERT INTO public.usuario (nombre, contrasena)
  SELECT usuario, '123456' FROM gerentes_faltantes
  RETURNING id, nombre
)
INSERT INTO public.empleado (nombre, apellido, email, usuario_id, rol_id, comision_medica_id)
SELECT 'Gerente', g.codigo, g.usuario || '@example.test', u.id, g.rol_id, g.comision_medica_id
FROM gerentes_faltantes g
JOIN usuarios_nuevos u ON u.nombre = g.usuario;

-- 5. Bolsines ficticios para el CU 36 (números reservados 36001 a 36035)
DO $bolsines$
DECLARE
  demo record;
  id_origen integer;
  id_destino integer;
  id_estado integer;
  id_responsable integer;
BEGIN
  FOR demo IN
    SELECT
      36000 + serie AS numero,
      936000 + serie AS precinto,
      500 + serie * 17.5 AS peso,
      TIMESTAMPTZ '2026-11-01 09:00:00-03' + serie * INTERVAL '11 hours' AS fecha,
      (ARRAY['CM-CBA-01', 'CM-ROS-02', 'CM-LPL-01', 'CM-MDZ-03', 'CM-BA-01'])[(serie - 1) % 5 + 1] AS origen,
      (ARRAY['CM-ROS-02', 'CM-LPL-01', 'CM-MDZ-03', 'CM-BA-01', 'CM-CBA-01'])[(serie - 1) % 5 + 1] AS destino,
      -- Los originales no tienen ubicacion en el GPS oficial; solo 101-110 se siembran Enviados para el CU 36.
      (ARRAY['Creado', 'Cerrado', 'Cerrado', 'RecibidoEnCMDestino', 'DeBaja'])[(serie - 1) / 7 + 1] AS estado,
      (ARRAY[
        'parametrizador.demo@example.com',
        'documentacion.demo@example.com',
        'bolsines.demo@example.com',
        'gerente.demo@example.com'
      ])[(serie - 1) % 4 + 1] AS responsable,
      false AS gps_oficial
    FROM generate_series(1, 35) AS numeros(serie)
    UNION ALL
    -- Fixtures del GPS oficial (bd457ed8349a08dad9f3533dd93530aebf844204).
    -- Número, origen y destino coinciden con InMemoryBolsinRepository.
    -- La fecha del bolsín es local al sistema. La posición y su última
    -- actualización se consultan a la API GPS.
    SELECT numero, 940000 + numero, 600,
      TIMESTAMPTZ '2026-03-07 09:00:00-03',
      origen, destino, 'Enviado', 'bolsines.demo@example.com', true
    FROM (VALUES
      (101, 'CM-CBA-01', 'CM-ROS-02'),
      (102, 'CM-ROS-02', 'CM-MDZ-03'),
      (103, 'CM-MDZ-03', 'CM-BA-01'),
      (104, 'CM-BA-01', 'CM-CBA-01'),
      (105, 'CM-TUC-01', 'CM-SLA-01'),
      (106, 'CM-SLA-01', 'CM-JUJ-01'),
      (107, 'CM-NQN-01', 'CM-MDQ-01'),
      (108, 'CM-MDQ-01', 'CM-BA-01'),
      (109, 'CM-LPL-01', 'CM-CBA-01'),
      (110, 'CM-CBA-02', 'CM-ROS-02')
    ) AS gps(numero, origen, destino)
  LOOP
    SELECT id INTO STRICT id_origen FROM public.comision_medica WHERE codigo = demo.origen;
    SELECT id INTO STRICT id_destino FROM public.comision_medica WHERE codigo = demo.destino;

    -- Corregir el destino del fixture aunque ya tenga el origen oficial.
    IF demo.gps_oficial THEN
      UPDATE public.bolsin
      SET cm_destino_id = id_destino
      WHERE cm_origen_id = id_origen AND numero_bolsin = demo.numero
        AND numero_precinto = demo.precinto AND cm_destino_id <> id_destino;
    END IF;

    IF EXISTS (
      SELECT 1 FROM public.bolsin WHERE cm_origen_id = id_origen AND numero_bolsin = demo.numero
    ) THEN
      CONTINUE;
    END IF;

    SELECT id INTO STRICT id_estado FROM public.estado WHERE nombre = demo.estado AND ambito = 'BOLSIN';
    SELECT id INTO STRICT id_responsable FROM public.empleado WHERE email = demo.responsable;

    WITH nuevo_bolsin AS (
      INSERT INTO public.bolsin (fecha, numero_bolsin, numero_precinto, peso, cm_origen_id, cm_destino_id)
      VALUES (demo.fecha, demo.numero, demo.precinto, demo.peso, id_origen, id_destino)
      ON CONFLICT (cm_origen_id, numero_bolsin) DO NOTHING
      RETURNING id
    )
    INSERT INTO public.cambio_estado_bolsin (fecha_hora_inicio, fecha_hora_fin, bolsin_id, estado_id, responsable_ce_id)
    SELECT demo.fecha + INTERVAL '30 minutes', NULL, id, id_estado, id_responsable
    FROM nuevo_bolsin;
  END LOOP;
END;
$bolsines$;

-- 6. Remitos ficticios para los bolsines en tránsito (101, 104, 110)
INSERT INTO public.remito (numero, asunto, tipo_documento, bolsin_id)
SELECT rem.numero, rem.asunto, rem.tipo_documento, b.id
FROM (VALUES
  (101, 'CM-CBA-01', 'REM-4101', 'Dictamen Junta Médica #101', 'Expediente médico'),
  (104, 'CM-BA-01', 'REM-4104', 'Oficio judicial SRT 104/26', 'Nota legal'),
  (110, 'CM-CBA-02', 'REM-4110', 'Historia clínica certificada #110', 'Documentación clínica')
) AS rem(numero_bolsin, origen_codigo, numero, asunto, tipo_documento)
JOIN public.comision_medica cm ON cm.codigo = rem.origen_codigo
JOIN public.bolsin b ON b.cm_origen_id = cm.id AND b.numero_bolsin = rem.numero_bolsin
ON CONFLICT (bolsin_id) DO NOTHING;

COMMIT;
