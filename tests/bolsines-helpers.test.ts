import { describe, expect, it } from "vitest";
import {
  bolsinAltaFormSchema,
  bolsinEdicionFormSchema,
  formatDuracion,
  formatPesoKg,
  getEstadoBadgeVariant,
} from "@/lib/bolsines";

describe("bolsines helpers", () => {
  it("valida edición sin requerir estadoId ni responsableCEId", () => {
    const ok = bolsinEdicionFormSchema.safeParse({
      fecha: "2026-11-15T10:30",
      numeroBolsin: 8420,
      numeroPrecinto: 99123,
      peso: 4.5,
      cmOrigenId: 1,
      cmDestinoId: 2,
    });
    expect(ok.success).toBe(true);

    const mismoDestino = bolsinEdicionFormSchema.safeParse({
      fecha: "2026-11-15T10:30",
      numeroBolsin: 8420,
      numeroPrecinto: 99123,
      peso: 4.5,
      cmOrigenId: 2,
      cmDestinoId: 2,
    });
    expect(mismoDestino.success).toBe(false);
  });

  it("exige estadoId y responsableCEId en alta", () => {
    const sinExtras = bolsinAltaFormSchema.safeParse({
      fecha: "2026-11-15T10:30",
      numeroBolsin: 8420,
      numeroPrecinto: 99123,
      peso: 4.5,
      cmOrigenId: 1,
      cmDestinoId: 2,
    });
    expect(sinExtras.success).toBe(false);

    const completo = bolsinAltaFormSchema.safeParse({
      fecha: "2026-11-15T10:30",
      numeroBolsin: 8420,
      numeroPrecinto: 99123,
      peso: 4.5,
      cmOrigenId: 1,
      cmDestinoId: 2,
      estadoId: 1,
      responsableCEId: 3,
    });
    expect(completo.success).toBe(true);
  });

  it("formatea duraciones y pesos de forma legible", () => {
    expect(
      formatDuracion("2026-11-15T10:00:00Z", "2026-11-15T10:45:00Z"),
    ).toBe("45 min");
    expect(
      formatDuracion("2026-11-15T10:00:00Z", "2026-11-15T12:30:00Z"),
    ).toBe("2 h 30 min");
    expect(
      formatDuracion("2026-11-14T10:00:00Z", "2026-11-15T13:00:00Z"),
    ).toBe("1 d 3 h");
    expect(formatPesoKg(12)).toBe("12 kg");
  });

  it("asigna variantes semánticas de estado", () => {
    expect(getEstadoBadgeVariant("Enviado")).toBe("lime");
    expect(getEstadoBadgeVariant("Recibido en destino")).toBe("primary");
    expect(getEstadoBadgeVariant("Con demora")).toBe("amber");
    expect(getEstadoBadgeVariant("Cancelado")).toBe("danger");
    expect(getEstadoBadgeVariant("En preparación")).toBe("neutral");
    expect(getEstadoBadgeVariant(null)).toBe("neutral");
  });
});
