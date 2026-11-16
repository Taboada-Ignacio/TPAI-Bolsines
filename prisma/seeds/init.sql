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
      (ARRAY['CM-CBA', 'CM-SF', 'CM-CABA', 'CM-MZA', 'CM-BA'])[(serie - 1) % 5 + 1] AS origen,
      (ARRAY['CM-SF', 'CM-CABA', 'CM-MZA', 'CM-BA', 'CM-CBA'])[(serie - 1) % 5 + 1] AS destino,
      -- Los originales no tienen ubicacion en el GPS oficial; solo 101-110 se siembran Enviados para el CU 36.
      (ARRAY['Creado', 'Cerrado', 'Cerrado', 'RecibidoEnCMDestino', 'DeBaja'])[(serie - 1) / 7 + 1] AS estado,
      (ARRAY[
        'parametrizador.demo@example.com',
        'documentacion.demo@example.com',
        'bolsines.demo@example.com',
        'gerente.demo@example.com'
      ])[(serie - 1) % 4 + 1] AS responsable
    FROM generate_series(1, 35) AS numeros(serie)
    UNION ALL
    -- Fixtures del GPS oficial (bd457ed8349a08dad9f3533dd93530aebf844204).
    -- Las CM locales son correspondencias geográficas. Para XTR y QX se
    -- deben enviar los códigos oficiales indicados en cada fila.
    -- Bolsin no persiste el modelo GPS. Los modelos comentados son para pruebas.
    SELECT numero, 940000 + numero, 600,
      TIMESTAMPTZ '2026-03-07 09:00:00-03',
      origen, destino, 'Enviado', 'bolsines.demo@example.com'
    FROM (VALUES
      (101, 'CM-CBA', 'CM-SF'),  -- CM-CBA-01 -> CM-ROS-02 / XTR-4500L
      (102, 'CM-SF',  'CM-MZA'), -- CM-ROS-02 -> CM-MDZ-03 / NavTrack QX-7A
      (103, 'CM-MZA', 'CM-BA'),  -- CM-MDZ-03 -> CM-BA-01 / GeoPulse MTR-900
      (104, 'CM-BA',  'CM-CBA'), -- CM-BA-01 -> CM-CBA-01 / XTR-4500L
      (105, 'CM-TUC', 'CM-SAL'), -- CM-TUC-01 -> CM-SLA-01 / NavTrack QX-7A
      (106, 'CM-SAL', 'CM-JUJ'), -- CM-SLA-01 -> CM-JUJ-01 / GeoPulse MTR-900
      (107, 'CM-NEU', 'CM-BA'),  -- CM-NQN-01 -> CM-MDQ-01 / XTR-4500L
      (108, 'CM-BA',  'CM-BA'),  -- CM-MDQ-01 -> CM-BA-01 / NavTrack QX-7A
      (109, 'CM-BA',  'CM-CBA'), -- CM-LPL-01 -> CM-CBA-01 / GeoPulse MTR-900
      (110, 'CM-CBA', 'CM-SF')   -- CM-CBA-02 -> CM-ROS-02 / XTR-4500L
    ) AS gps(numero, origen, destino)
  LOOP
    SELECT id INTO STRICT id_origen FROM public.comision_medica WHERE codigo = demo.origen;

    IF EXISTS (
      SELECT 1 FROM public.bolsin WHERE cm_origen_id = id_origen AND numero_bolsin = demo.numero
    ) THEN
      CONTINUE;
    END IF;

    SELECT id INTO STRICT id_destino FROM public.comision_medica WHERE codigo = demo.destino;
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
  (101, 'CM-CBA', 'REM-4101', 'Dictamen Junta Médica #101', 'Expediente médico'),
  (104, 'CM-BA',  'REM-4104', 'Oficio judicial SRT 104/26', 'Nota legal'),
  (110, 'CM-CBA', 'REM-4110', 'Historia clínica certificada #110', 'Documentación clínica')
) AS rem(numero_bolsin, origen_codigo, numero, asunto, tipo_documento)
JOIN public.comision_medica cm ON cm.codigo = rem.origen_codigo
JOIN public.bolsin b ON b.cm_origen_id = cm.id AND b.numero_bolsin = rem.numero_bolsin
ON CONFLICT (bolsin_id) DO NOTHING;

COMMIT;
