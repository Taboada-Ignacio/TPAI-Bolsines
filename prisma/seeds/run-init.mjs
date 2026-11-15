import { readFile } from "node:fs/promises";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL es obligatoria para cargar los datos iniciales.",
  );
}

const sql = await readFile(new URL("./init.sql", import.meta.url), "utf8");
const client = new pg.Client({
  connectionString,
  connectionTimeoutMillis: 10_000,
});

try {
  await client.connect();
  await client.query(sql);
  console.log("Carga de datos iniciales completada.");
} finally {
  await client.end();
}
