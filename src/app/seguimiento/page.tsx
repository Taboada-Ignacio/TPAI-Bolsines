"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import { MapaBolsines } from "./MapaBolsines";
import estilos from "./seguimiento.module.css";

type Consulta = {
  comision: string;
  puntos: PuntoBolsin[];
  sinUbicacion: number;
};
type Estado =
  | { tipo: "cargando" | "sesion" }
  | { tipo: "error"; mensaje: string }
  | { tipo: "listo"; datos: Consulta };
const horaLocal = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

export default function SeguimientoPage() {
  const [estado, setEstado] = useState<Estado>({ tipo: "cargando" });
  const [consulta, setConsulta] = useState(0);
  const [seleccionado, seleccionar] = useState<number | null>(null);
  const [iniciando, setIniciando] = useState(false);
  const [errorIngreso, setErrorIngreso] = useState("");

  useEffect(() => {
    const control = new AbortController();
    async function cargar() {
      try {
        const respuesta = await fetch("/api/auth/cu36/seguimiento", {
          signal: control.signal,
          cache: "no-store",
        });
        if (respuesta.status === 401) {
          setEstado({ tipo: "sesion" });
          return;
        }
        const datos = await respuesta.json();
        setEstado(
          respuesta.ok
            ? { tipo: "listo", datos }
            : { tipo: "error", mensaje: datos.error },
        );
      } catch {
        if (!control.signal.aborted)
          setEstado({
            tipo: "error",
            mensaje: "No se pudo consultar el seguimiento.",
          });
      }
    }
    void cargar();
    return () => control.abort();
  }, [consulta]);

  function actualizar() {
    seleccionar(null);
    setEstado({ tipo: "cargando" });
    setConsulta((anterior) => anterior + 1);
  }

  async function iniciar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const campos = new FormData(evento.currentTarget);
    setIniciando(true);
    setErrorIngreso("");
    try {
      const respuesta = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(campos)),
      });
      if (!respuesta.ok) {
        setErrorIngreso("No se pudo iniciar sesión. Revisá tus credenciales.");
        return;
      }
      actualizar();
    } catch {
      setErrorIngreso("No se pudo conectar con el servidor.");
    } finally {
      setIniciando(false);
    }
  }

  const datos = estado.tipo === "listo" ? estado.datos : null;
  const detalle = datos?.puntos.find(({ id }) => id === seleccionado);

  return (
    <main className={estilos.pagina}>
      <header className={estilos.cabecera}>
        <div>
          <Link href="/">TPAI Bolsines</Link>
          <h1>Seguimiento de bolsines</h1>
          {datos && <p>{datos.comision}</p>}
        </div>
        {(datos || estado.tipo === "error") && (
          <button className={estilos.accion} onClick={actualizar}>
            Actualizar ubicaciones
          </button>
        )}
      </header>
      {estado.tipo === "cargando" && (
        <p role="status">Consultando ubicaciones…</p>
      )}
      {estado.tipo === "error" && <p role="alert">{estado.mensaje}</p>}
      {estado.tipo === "sesion" && (
        <form className={estilos.ingreso} onSubmit={iniciar}>
          <h2>Iniciar sesión</h2>
          <label>
            Usuario
            <input name="nombre" autoComplete="username" required />
          </label>
          <label>
            Contraseña
            <input
              name="contrasena"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button className={estilos.accion} disabled={iniciando}>
            {iniciando ? "Ingresando…" : "Ingresar"}
          </button>
          {errorIngreso && <p role="alert">{errorIngreso}</p>}
        </form>
      )}
      {datos && (
        <>
          {datos.sinUbicacion > 0 && (
            <p role="status">
              Bolsines enviados sin ubicación GPS: {datos.sinUbicacion}.
            </p>
          )}
          {datos.puntos.length === 0 ? (
            <p>
              {datos.sinUbicacion
                ? "No hay ubicaciones para mostrar."
                : "No hay bolsines enviados desde tu comisión."}
            </p>
          ) : (
            <div className={estilos.distribucion}>
              <MapaBolsines
                puntos={datos.puntos}
                seleccionado={seleccionado}
                seleccionar={seleccionar}
              />
              <aside
                className={estilos.panel}
                onKeyDown={(evento) => {
                  if (evento.key === "Escape") seleccionar(null);
                }}
              >
                <h2>Bolsines ubicados ({datos.puntos.length})</h2>
                <ul className={estilos.listado}>
                  {datos.puntos.map((punto) => (
                    <li key={punto.id}>
                      <button
                        aria-pressed={punto.id === seleccionado}
                        onClick={() => seleccionar(punto.id)}
                      >
                        <strong>#{punto.numero}</strong>
                        <span>{punto.destino}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {detalle && (
                  <section
                    className={estilos.detalle}
                    aria-label="Bolsín seleccionado"
                  >
                    <h3>Bolsín #{detalle.numero}</h3>
                    <dl>
                      <dt>Precinto</dt>
                      <dd>{detalle.precinto ?? "Sin precinto"}</dd>
                      <dt>Destino</dt>
                      <dd>{detalle.destino}</dd>
                      <dt>Última ubicación</dt>
                      <dd>{horaLocal.format(new Date(detalle.actualizado))}</dd>
                      <dt>Coordenadas</dt>
                      <dd>
                        {detalle.latitud}, {detalle.longitud}
                      </dd>
                    </dl>
                    <button onClick={() => seleccionar(null)}>
                      Cerrar detalle
                    </button>
                  </section>
                )}
              </aside>
            </div>
          )}
        </>
      )}
    </main>
  );
}
