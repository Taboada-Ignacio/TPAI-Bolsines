import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { newDb } from "pg-mem";
import pg from "pg";
import { PrismaClient } from "../../prisma/generated/client";

function cargarDdlBase(): string {
  const migrationPath = join(
    process.cwd(),
    "prisma",
    "migrations",
    "20261114202500_init_domain_entities",
    "migration.sql",
  );
  const raw = readFileSync(migrationPath, "utf8");
  return raw
    .replace(/^\s*BEGIN;\s*/i, "")
    .replace(/\s*COMMIT;\s*$/i, "")
    .replace(/TIMESTAMPTZ\(3\)/gi, "TIMESTAMPTZ");
}

const SEED_SQL = `
INSERT INTO "public"."rol" ("nombre", "descripcion") VALUES
  ('Parametrizador del sistema', 'Administra los parámetros generales del sistema, usuarios y comisiones médicas.'),
  ('Encargado de Documentación', 'Gestiona la documentación y los remitos asociados a los bolsines.'),
  ('Encargado de Bolsines', 'Gestiona la creación, modificación, cierre, retiro, recepción y seguimiento de bolsines.'),
  ('Gerente de Comisión Médica', 'Consulta reportes, estadísticas e información de gestión de la comisión médica.');

INSERT INTO "public"."estado" ("nombre", "descripcion", "ambito") VALUES
  ('Creado', 'El bolsín fue generado y todavía no se encuentra cerrado.', 'BOLSIN'),
  ('Cerrado', 'El bolsín fue cerrado y está pendiente de retiro.', 'BOLSIN'),
  ('Enviado', 'El bolsín fue retirado y enviado hacia la comisión médica de destino.', 'BOLSIN'),
  ('RecibidoEnCMDestino', 'El bolsín fue recibido en la comisión médica de destino.', 'BOLSIN'),
  ('DeBaja', 'El bolsín fue dado de baja.', 'BOLSIN');

INSERT INTO "public"."comision_medica" ("codigo", "nombre", "direccion", "email", "telefono") VALUES
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
  ('CM-CABA', 'Comisión Médica Ciudad Autónoma de Buenos Aires', 'Sede ficticia - Ciudad Autónoma de Buenos Aires, Argentina', 'cm-caba@example.com', '0000000024');

INSERT INTO "public"."usuario" ("nombre", "contrasena") VALUES
  ('parametrizador.demo', '123456'),
  ('documentacion.demo', '123456'),
  ('bolsines.demo', '123456'),
  ('gerente.demo', '123456');

INSERT INTO "public"."empleado" ("nombre", "apellido", "email", "usuario_id", "rol_id", "comision_medica_id") VALUES
  ('Martín', 'Fernández', 'parametrizador.demo@example.com', 1, 1, 24),
  ('Lucía', 'González', 'documentacion.demo@example.com', 2, 2, 5),
  ('Nicolás', 'Rodríguez', 'bolsines.demo@example.com', 3, 3, 5),
  ('Carolina', 'Martínez', 'gerente.demo@example.com', 4, 4, 20);
`;

type MemRow = Record<string, unknown>;

interface MemClientLike {
  query: (
    query: unknown,
    ...rest: unknown[]
  ) => Promise<{
    rows?: MemRow[];
    fields?: Array<{ name: string; dataTypeID?: number }>;
  }>;
  release?: (...args: unknown[]) => unknown;
  on?: (...args: unknown[]) => unknown;
  removeListener?: (...args: unknown[]) => unknown;
}

interface MemPoolLike {
  query: MemClientLike["query"];
  connect: (...args: unknown[]) => Promise<MemClientLike> | unknown;
  end: (...args: unknown[]) => unknown;
  on: (...args: unknown[]) => unknown;
}

function inferirOid(valor: unknown): number {
  if (typeof valor === "number") return Number.isInteger(valor) ? 23 : 701;
  if (typeof valor === "boolean") return 16;
  if (valor instanceof Date) return 1184;
  return 25;
}

function crearEjecutorQuery(rawQuery: MemClientLike["query"]) {
  return async (query: unknown, ...rest: unknown[]) => {
    if (
      query &&
      typeof query === "object" &&
      "rowMode" in query &&
      (query as { rowMode?: string }).rowMode === "array"
    ) {
      const sinRowMode = {
        ...(query as Record<string, unknown>),
        rowMode: undefined,
        types: undefined,
      };
      const res = await rawQuery(sinRowMode, ...rest);
      const rows = res.rows ?? [];
      const firstRow = rows[0];
      const fields =
        res.fields && res.fields.length > 0
          ? res.fields
          : firstRow
            ? Object.keys(firstRow).map((name) => ({
                name,
                dataTypeID: inferirOid(firstRow[name]),
              }))
            : [];
      const colNames = fields.map((f) => f.name);
      return {
        ...res,
        fields,
        rows: rows.map((row) => colNames.map((name) => row[name])),
      };
    }
    return rawQuery(query, ...rest);
  };
}

function envolverMemPoolParaPrisma(memPool: MemPoolLike): pg.Pool {
  const wrapper = Object.create(pg.Pool.prototype) as pg.Pool;
  const ejecutarQuery = crearEjecutorQuery(memPool.query.bind(memPool));

  Object.assign(wrapper, {
    query: ejecutarQuery,
    connect: async () => {
      const memClient = (await memPool.connect()) as
        | Partial<MemClientLike>
        | undefined;
      return {
        query: memClient?.query
          ? crearEjecutorQuery(memClient.query.bind(memClient))
          : ejecutarQuery,
        release: (...args: unknown[]) => memClient?.release?.(...args),
        on: (...args: unknown[]) => memClient?.on?.(...args),
        removeListener: (...args: unknown[]) =>
          memClient?.removeListener?.(...args),
      };
    },
    end: (...args: unknown[]) => memPool.end(...args),
    on: (...args: unknown[]) => memPool.on(...args),
  });

  return wrapper;
}

export function crearPrismaEnMemoria(): PrismaClient {
  const db = newDb({ autoCreateForeignKeyIndices: true });

  db.public.none(cargarDdlBase());
  db.public.none(
    'CREATE UNIQUE INDEX "usuario_nombre_key" ON "public"."usuario"("nombre");',
  );
  db.public.none(SEED_SQL);

  const { Pool } = db.adapters.createPg() as {
    Pool: new () => MemPoolLike;
  };
  const pool = envolverMemPoolParaPrisma(new Pool());
  return new PrismaClient({ adapter: new PrismaPg(pool) });
}
