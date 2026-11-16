import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { Estado } from "@/domain/Estado";
import { Remito } from "@/domain/Remito";
import {
  hidratarComision,
  hidratarEmpleado,
  asociacionesEmpleado,
} from "./hidratarDominio";
import {
  mensajeBolsinDuplicado,
  TransicionEstadoInvalida,
  type DatosBolsin,
  type RegistroBolsin,
  type RepositorioBolsin,
} from "@/domain/RepositorioBolsin";
import { catalogoNoEncontrado, ErrorCatalogo } from "@/domain/RepositorioCrud";
import type { Prisma } from "../../prisma/generated/client";
import { escrituraCatalogo } from "./escrituraCatalogo";
import { getPrisma } from "./prisma";

const comision = { id: true, codigo: true, nombre: true } as const;
const estado = { id: true, nombre: true } as const;
const remitoSelect = { numero: true, asunto: true, tipoDocumento: true } as const;
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
  remito: { select: remitoSelect },
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
  remito,
  ...bolsin
}: Prisma.BolsinGetPayload<{ select: typeof resumen }>): RegistroBolsin {
  return {
    ...bolsin,
    remito: remito ?? null,
    estadoActual: cambiosEstado[0]?.estado ?? null,
  };
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
  remito: true,
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
      fila.remito
        ? new Remito(
            fila.remito.numero,
            fila.remito.asunto,
            fila.remito.tipoDocumento,
          )
        : null,
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
    const remito = bolsin.getRemito();
    const fila = await escrituraCatalogo(
      () =>
        getPrisma().bolsin.create({
          data: {
            fecha: bolsin.getFecha(),
            numeroBolsin: bolsin.getNumeroBolsin(),
            numeroPrecinto: bolsin.getNumeroPrecinto(),
            peso: bolsin.getPeso(),
            ...asociar(ids),
            ...(remito
              ? {
                  remito: {
                    create: {
                      numero: remito.getNumero(),
                      asunto: remito.getAsunto(),
                      tipoDocumento: remito.getTipoDocumento(),
                    },
                  },
                }
              : {}),
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
    return {
      ...fila,
      remito: fila.remito ?? null,
      estadoActual: vigente?.estado ?? null,
    };
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
    const { fecha, numeroBolsin, numeroPrecinto, peso, remito } = datos;
    const dataBase = {
      fecha,
      numeroBolsin,
      numeroPrecinto,
      peso,
      ...asociar(datos),
    };

    const fila = await escrituraCatalogo(() => {
      if (remito === undefined) {
        return getPrisma().bolsin.update({
          where: { id },
          data: dataBase,
          select: resumen,
        });
      }

      return getPrisma().$transaction(async (tx) => {
        if (remito === null) {
          await tx.remito.deleteMany({ where: { bolsinId: id } });
        } else {
          await tx.remito.upsert({
            where: { bolsinId: id },
            create: { ...remito, bolsinId: id },
            update: remito,
          });
        }

        return tx.bolsin.update({
          where: { id },
          data: dataBase,
          select: resumen,
        });
      });
    }, mensajeBolsinDuplicado);
    return resumir(fila);
  }

  eliminar(id: number): Promise<void> {
    return escrituraCatalogo(
      () =>
        getPrisma().$transaction(async (tx) => {
          await tx.remito.deleteMany({ where: { bolsinId: id } });
          await tx.cambioEstadoBolsin.deleteMany({ where: { bolsinId: id } });
          await tx.bolsin.delete({ where: { id } });
        }),
      mensajeBolsinDuplicado,
    );
  }

  private async transicionarEstado(
    id: number,
    estadoEsperado: string,
    estadoDestino: string,
    opciones: {
      numeroPrecinto?: number | null;
      responsableCEId?: number;
      mensajeEstadoInvalido: string;
    },
  ): Promise<RegistroBolsin> {
    return escrituraCatalogo(
      () =>
        getPrisma().$transaction(async (tx) => {
          const actual = await tx.bolsin.findUnique({
            where: { id },
            select: {
              id: true,
              cambiosEstado: {
                where: { fechaHoraFin: null },
                orderBy: [{ fechaHoraInicio: "desc" }, { id: "desc" }],
                take: 1,
                select: {
                  id: true,
                  responsableCEId: true,
                  estado: { select: { nombre: true } },
                },
              },
            },
          });

          if (!actual) throw catalogoNoEncontrado();

          const vigente = actual.cambiosEstado[0];
          if (!vigente || vigente.estado.nombre !== estadoEsperado) {
            throw new TransicionEstadoInvalida(opciones.mensajeEstadoInvalido);
          }

          if (opciones.responsableCEId !== undefined) {
            const resp = await tx.empleado.findUnique({
              where: { id: opciones.responsableCEId },
              select: { id: true },
            });
            if (!resp) {
              throw new ErrorCatalogo(
                "NO_ENCONTRADO",
                "El empleado responsable no existe.",
              );
            }
          }

          const nuevoEstado = await tx.estado.findUnique({
            where: { nombre_ambito: { nombre: estadoDestino, ambito: "BOLSIN" } },
            select: { id: true },
          });
          if (!nuevoEstado) {
            throw new ErrorCatalogo(
              "NO_ENCONTRADO",
              `El estado ${estadoDestino} no existe.`,
            );
          }

          const ahora = new Date();
          await tx.cambioEstadoBolsin.update({
            where: { id: vigente.id },
            data: { fechaHoraFin: ahora },
          });

          const responsableId =
            opciones.responsableCEId ?? vigente.responsableCEId;

          const actualizado = await tx.bolsin.update({
            where: { id },
            data: {
              ...(opciones.numeroPrecinto !== undefined
                ? { numeroPrecinto: opciones.numeroPrecinto }
                : {}),
              cambiosEstado: {
                create: {
                  fechaHoraInicio: ahora,
                  fechaHoraFin: null,
                  estado: { connect: { id: nuevoEstado.id } },
                  responsableCE: { connect: { id: responsableId } },
                },
              },
            },
            select: resumen,
          });

          return resumir(actualizado);
        }),
      mensajeBolsinDuplicado,
    );
  }

  cerrar(id: number, numeroPrecinto: number, responsableCEId?: number) {
    return this.transicionarEstado(id, "Creado", "Cerrado", {
      numeroPrecinto,
      responsableCEId,
      mensajeEstadoInvalido:
        "Solo se puede cerrar un bolsín que se encuentre en estado Creado.",
    });
  }

  reabrir(id: number, responsableCEId?: number) {
    return this.transicionarEstado(id, "Cerrado", "Creado", {
      numeroPrecinto: null,
      responsableCEId,
      mensajeEstadoInvalido:
        "Solo se puede reabrir un bolsín que se encuentre en estado Cerrado.",
    });
  }

  enviar(id: number, responsableCEId?: number) {
    return this.transicionarEstado(id, "Cerrado", "Enviado", {
      responsableCEId,
      mensajeEstadoInvalido:
        "Solo se puede marcar como enviado un bolsín que se encuentre en estado Cerrado.",
    });
  }
}
