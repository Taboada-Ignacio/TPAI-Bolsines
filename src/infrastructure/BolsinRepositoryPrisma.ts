import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { Estado } from "@/domain/Estado";
import {
  hidratarComision,
  hidratarEmpleado,
  asociacionesEmpleado,
} from "./hidratarDominio";
import {
  mensajeBolsinDuplicado,
  type DatosBolsin,
  type RepositorioBolsin,
} from "@/domain/RepositorioBolsin";
import type { Prisma } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const comision = { id: true, codigo: true, nombre: true } as const;
const estado = { id: true, nombre: true } as const;
const ordenHistorial = [
  { fechaHoraInicio: "asc" },
  { id: "asc" },
] satisfies Prisma.CambioEstadoBolsinOrderByWithRelationInput[];
const campos = {
  id: true,
  fecha: true,
  numeroBolsin: true,
  numeroPrecinto: true,
  peso: true,
  cmOrigen: { select: comision },
  cmDestino: { select: comision },
} as const;

const resumen = {
  ...campos,
  cambiosEstado: {
    where: { fechaHoraFin: null },
    orderBy: [{ fechaHoraInicio: "desc" }, { id: "desc" }],
    take: 1,
    select: { estado: { select: estado } },
  },
} satisfies Prisma.BolsinSelect;

const detalle = {
  ...campos,
  cambiosEstado: {
    orderBy: ordenHistorial,
    select: {
      id: true,
      fechaHoraInicio: true,
      fechaHoraFin: true,
      estado: { select: estado },
      responsableCE: { select: { id: true, nombre: true, apellido: true } },
    },
  },
} satisfies Prisma.BolsinSelect;

function resumir({
  cambiosEstado,
  ...bolsin
}: Prisma.BolsinGetPayload<{ select: typeof resumen }>) {
  return { ...bolsin, estadoActual: cambiosEstado[0]?.estado ?? null };
}

function asociar({
  cmOrigenId,
  cmDestinoId,
}: Pick<DatosBolsin, "cmOrigenId" | "cmDestinoId">) {
  return {
    cmOrigen: { connect: { id: cmOrigenId } },
    cmDestino: { connect: { id: cmDestinoId } },
  };
}

const asociacionesSeguimiento = {
  cmOrigen: true,
  cmDestino: true,
  cambiosEstado: {
    where: { fechaHoraFin: null },
    include: { estado: true, responsableCE: { include: asociacionesEmpleado } },
  },
} satisfies Prisma.BolsinInclude;

function hidratarBolsin(
  fila: Prisma.BolsinGetPayload<{ include: typeof asociacionesSeguimiento }>,
) {
  return {
    id: fila.id,
    bolsin: new Bolsin(
      fila.fecha,
      fila.numeroBolsin,
      fila.numeroPrecinto,
      Number(fila.peso),
      hidratarComision(fila.cmOrigen),
      hidratarComision(fila.cmDestino),
      fila.cambiosEstado.map(
        (cambio) =>
          new CambioEstadoBolsin(
            cambio.fechaHoraInicio,
            cambio.fechaHoraFin,
            new Estado(
              cambio.estado.nombre,
              cambio.estado.descripcion,
              cambio.estado.ambito,
            ),
            hidratarEmpleado(cambio.responsableCE),
          ),
      ),
    ),
  };
}

export class BolsinRepositoryPrisma implements RepositorioBolsin {
  async buscarResponsable(id: number) {
    const fila = await getPrisma().empleado.findUnique({
      where: { id },
      include: asociacionesEmpleado,
    });
    return fila ? hidratarEmpleado(fila) : null;
  }

  async buscarIdPorOrigenYNumero(cmOrigenId: number, numeroBolsin: number) {
    const fila = await getPrisma().bolsin.findUnique({
      where: { cmOrigenId_numeroBolsin: { cmOrigenId, numeroBolsin } },
      select: { id: true },
    });
    return fila?.id ?? null;
  }

  async crear(
    bolsin: Bolsin,
    cambio: CambioEstadoBolsin,
    ids: Pick<DatosBolsin, "cmOrigenId" | "cmDestinoId"> & {
      estadoId: number;
      responsableCEId: number;
    },
  ) {
    const fila = await escrituraCatalogo(
      () =>
        getPrisma().bolsin.create({
          data: {
            fecha: bolsin.getFecha(),
            numeroBolsin: bolsin.getNumeroBolsin(),
            numeroPrecinto: bolsin.getNumeroPrecinto(),
            peso: bolsin.getPeso(),
            ...asociar(ids),
            cambiosEstado: {
              create: {
                fechaHoraInicio: cambio.getFechaHoraInicio(),
                fechaHoraFin: cambio.getFechaHoraFin(),
                estado: {
                  connect: {
                    id: ids.estadoId,
                    ambito: cambio.getEstado().getAmbito(),
                  },
                },
                responsableCE: { connect: { id: ids.responsableCEId } },
              },
            },
          },
          select: resumen,
        }),
      mensajeBolsinDuplicado,
    );
    return resumir(fila);
  }

  async listar() {
    const filas = await getPrisma().bolsin.findMany({
      orderBy: { id: "asc" },
      select: resumen,
    });
    return filas.map(resumir);
  }

  async listarEnviados(cmOrigenId: number) {
    const filas = await getPrisma().bolsin.findMany({
      where: { cmOrigenId },
      orderBy: { numeroBolsin: "asc" },
      include: asociacionesSeguimiento,
    });
    return filas
      .filter((fila) =>
        fila.cambiosEstado.some(
          (c) =>
            c.fechaHoraFin === null &&
            c.estado.nombre === "Enviado" &&
            c.estado.ambito === "BOLSIN",
        ),
      )
      .map(hidratarBolsin);
  }

  async buscarParaSeguimiento(id: number) {
    const fila = await getPrisma().bolsin.findUnique({
      where: { id },
      include: asociacionesSeguimiento,
    });
    return fila ? hidratarBolsin(fila) : null;
  }

  async buscarPorId(id: number) {
    const fila = await getPrisma().bolsin.findUnique({
      where: { id },
      select: detalle,
    });
    if (!fila) return null;
    const vigente = fila.cambiosEstado.findLast(
      ({ fechaHoraFin }) => fechaHoraFin === null,
    );
    return { ...fila, estadoActual: vigente?.estado ?? null };
  }

  async existe(id: number) {
    return (
      (await getPrisma().bolsin.findUnique({
        where: { id },
        select: { id: true },
      })) !== null
    );
  }

  async actualizar(id: number, datos: DatosBolsin) {
    const { fecha, numeroBolsin, numeroPrecinto, peso } = datos;
    const fila = await escrituraCatalogo(
      () =>
        getPrisma().bolsin.update({
          where: { id },
          data: {
            fecha,
            numeroBolsin,
            numeroPrecinto,
            peso,
            ...asociar(datos),
          },
          select: resumen,
        }),
      mensajeBolsinDuplicado,
    );
    return resumir(fila);
  }

  eliminar(id: number): Promise<void> {
    return escrituraCatalogo(
      () =>
        getPrisma().$transaction(async (tx) => {
          await tx.cambioEstadoBolsin.deleteMany({ where: { bolsinId: id } });
          await tx.bolsin.delete({ where: { id } });
        }),
      mensajeBolsinDuplicado,
    );
  }
}
