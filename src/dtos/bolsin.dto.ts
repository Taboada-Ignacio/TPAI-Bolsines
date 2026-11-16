import { z } from "zod";

const entero = z.number().int().min(-2_147_483_648).max(2_147_483_647);
const id = entero.positive();
const textoObligatorio = z.string().trim().min(1);

export const remitoBolsinSchema = z.object({
  numero: textoObligatorio,
  asunto: textoObligatorio,
  tipoDocumento: textoObligatorio,
});

const bolsinBaseSchema = z.object({
  fecha: z.iso.datetime({ offset: true }).transform((fecha) => new Date(fecha)),
  numeroBolsin: id,
  numeroPrecinto: id,
  peso: z.number().finite().positive(),
  cmOrigenId: id,
  cmDestinoId: id,
  remito: remitoBolsinSchema.nullable().optional(),
  remitoNumero: z.string().trim().optional(),
  remitoAsunto: z.string().trim().optional(),
  remitoTipoDocumento: z.string().trim().optional(),
});

function refinarYNormalizarBolsin<
  T extends z.infer<typeof bolsinBaseSchema>,
>(schema: z.ZodType<T>) {
  return schema
    .superRefine((data, ctx) => {
      if (data.cmOrigenId === data.cmDestinoId) {
        ctx.addIssue({
          code: "custom",
          path: ["cmDestinoId"],
          message:
            "La comisión médica de destino debe ser distinta a la de origen.",
        });
      }

      if (data.remito === undefined) {
        const hayCamposPlanos =
          data.remitoNumero !== undefined ||
          data.remitoAsunto !== undefined ||
          data.remitoTipoDocumento !== undefined;
        if (hayCamposPlanos) {
          const algunoNoVacio = Boolean(
            data.remitoNumero || data.remitoAsunto || data.remitoTipoDocumento,
          );
          if (algunoNoVacio) {
            if (!data.remitoNumero) {
              ctx.addIssue({
                code: "custom",
                path: ["remitoNumero"],
                message: "El número de remito es obligatorio.",
              });
            }
            if (!data.remitoAsunto) {
              ctx.addIssue({
                code: "custom",
                path: ["remitoAsunto"],
                message: "El asunto del remito es obligatorio.",
              });
            }
            if (!data.remitoTipoDocumento) {
              ctx.addIssue({
                code: "custom",
                path: ["remitoTipoDocumento"],
                message: "El tipo de documento del remito es obligatorio.",
              });
            }
          }
        }
      }
    })
    .transform((data) => {
      const {
        remitoNumero,
        remitoAsunto,
        remitoTipoDocumento,
        remito,
        ...resto
      } = data;

      let remitoNormalizado = remito;
      if (remitoNormalizado === undefined) {
        const hayCamposPlanos =
          remitoNumero !== undefined ||
          remitoAsunto !== undefined ||
          remitoTipoDocumento !== undefined;
        if (hayCamposPlanos) {
          remitoNormalizado =
            remitoNumero && remitoAsunto && remitoTipoDocumento
              ? {
                  numero: remitoNumero,
                  asunto: remitoAsunto,
                  tipoDocumento: remitoTipoDocumento,
                }
              : null;
        }
      }

      return {
        ...resto,
        ...(remitoNormalizado !== undefined
          ? { remito: remitoNormalizado }
          : {}),
      };
    });
}

export const bolsinEdicionSchema = refinarYNormalizarBolsin(bolsinBaseSchema);

export const bolsinAltaSchema = refinarYNormalizarBolsin(
  bolsinBaseSchema.extend({
    estadoId: id,
    responsableCEId: id,
  }),
);

export const cerrarBolsinSchema = z.object({
  numeroPrecinto: id,
  responsableCEId: id.optional(),
});

export const transicionBolsinSchema = z.object({
  responsableCEId: id.optional(),
});
