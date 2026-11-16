import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL es obligatoria para cargar los datos iniciales.",
  );
}

const client = new pg.Client({
  connectionString,
  connectionTimeoutMillis: 10_000,
});

const tablasIniciales = [
  "bolsin",
  "cambio_estado_bolsin",
  "comision_medica",
  "empleado",
  "estado",
  "rol",
  "sesion",
  "usuario",
];

function prisma(...args) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["node_modules/prisma/build/index.js", "migrate", ...args],
      { stdio: "inherit" },
    );
    child.once("error", reject);
    child.once("close", (code, signal) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(`Prisma migrate ${args[0]} falló (${signal ?? code}).`),
        );
    });
  });
}

async function crearMarcador(estado) {
  await client.query(`
    CREATE SCHEMA bolsines_bootstrap;
    CREATE TABLE bolsines_bootstrap.inicializacion (estado text NOT NULL);
  `);
  await client.query(
    "INSERT INTO bolsines_bootstrap.inicializacion VALUES ($1)",
    [estado],
  );
}

async function transaccion(operacion) {
  await client.query("BEGIN");
  try {
    await operacion();
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

async function cargarSeed() {
  const sql = await readFile(new URL("./init.sql", import.meta.url), "utf8");
  const cuerpo = /^\s*BEGIN;\s*([\s\S]*)\bCOMMIT;\s*$/i.exec(sql)?.[1];
  if (!cuerpo)
    throw new Error("init.sql debe estar delimitado por BEGIN y COMMIT.");

  await transaccion(async () => {
    await client.query(cuerpo);
    const { rows } = await client.query(`
      SELECT cm.codigo, count(r.id)::int AS gerentes,
        count(u.id) FILTER (WHERE r.id IS NOT NULL AND btrim(e.email) <> '')::int AS con_usuario_y_correo
      FROM public.comision_medica cm
      LEFT JOIN public.empleado e ON e.comision_medica_id = cm.id
      LEFT JOIN public.rol r ON r.id = e.rol_id AND r.nombre = 'Gerente de Comisión Médica'
      LEFT JOIN public.usuario u ON u.id = e.usuario_id
      GROUP BY cm.id, cm.codigo
    `);
    if (
      rows.length !== 24 ||
      rows.some((cm) => cm.gerentes !== 1 || cm.con_usuario_y_correo !== 1)
    ) {
      throw new Error(
        "El seed debe generar 24 CM con exactamente un GCM con usuario y correo por CM.",
      );
    }
    await client.query(
      "UPDATE bolsines_bootstrap.inicializacion SET estado = 'completa'",
    );
  });
  console.log("Carga inicial completada: 24 comisiones y 24 GCM verificados.");
}

async function inicializar() {
  // Mantener el bloqueo durante la detección, las migraciones y el seed.
  await client.query("SELECT pg_advisory_lock(360031, 1)");
  const {
    rows: [estado],
  } = await client.query(`
    SELECT to_regnamespace('bolsines_bootstrap') IS NOT NULL AS espacio,
      to_regclass('bolsines_bootstrap.inicializacion') IS NOT NULL AS marcador,
      to_regclass('public._prisma_migrations') IS NOT NULL AS historial,
      ARRAY(SELECT tablename::text FROM pg_tables WHERE schemaname = 'public'
        AND tablename <> '_prisma_migrations') AS tablas
  `);

  const nueva =
    estado.tablas.length === 0 && !estado.historial && !estado.espacio;
  if (nueva) {
    await transaccion(() => crearMarcador("pendiente"));
  } else {
    const faltantes = tablasIniciales.filter(
      (tabla) => !estado.tablas.includes(tabla),
    );
    if (
      faltantes.length ||
      !estado.historial ||
      (estado.espacio && !estado.marcador)
    ) {
      throw new Error(
        `Inicialización incompleta. Tablas faltantes: ${faltantes.join(", ") || "ninguna"}. Revisá el historial de Prisma y el marcador.`,
      );
    }
    if (estado.marcador) {
      const { rows } = await client.query(
        "SELECT estado FROM bolsines_bootstrap.inicializacion",
      );
      if (rows.length !== 1 || rows[0].estado !== "completa") {
        throw new Error(
          "Inicialización incompleta: la carga inicial todavía no fue confirmada.",
        );
      }
    } else {
      // El seed anterior era transaccional. Adoptar bases con evidencia de uso,
      // sin exigir que conserven los datos originales ni reinsertarlos.
      const {
        rows: [datos],
      } = await client.query(`
        SELECT EXISTS (SELECT 1 FROM public.usuario)
          AND EXISTS (SELECT 1 FROM public.empleado) AS existentes
      `);
      if (!datos.existentes)
        throw new Error(
          "Esquema legado sin evidencia de carga inicial. Revisá los datos antes de continuar.",
        );
    }
  }

  await prisma("deploy");
  await prisma("status");
  await prisma(
    "diff",
    "--from-config-datasource",
    "--to-schema=prisma/schema.prisma",
    "--exit-code",
  );
  if (nueva) await cargarSeed();
  else {
    if (!estado.marcador) await transaccion(() => crearMarcador("completa"));
    console.log("Base existente verificada. Se omite init.sql.");
  }
}

try {
  await client.connect();
  await inicializar();
} finally {
  await client.end();
}
