import { afterEach, expect, it, vi } from "vitest";
import { programarMontajeMapa } from "@/components/seguimiento/map/cicloMapa";

afterEach(() => vi.unstubAllGlobals());

it("cancela el montaje descartado por Strict Mode y limpia una vez el mapa real", () => {
  const cuadros: FrameRequestCallback[] = [];
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) =>
    cuadros.push(callback),
  );
  const cancelar = vi.fn();
  vi.stubGlobal("cancelAnimationFrame", cancelar);
  const montar = vi.fn();
  const limpiar = vi.fn();

  programarMontajeMapa(montar, limpiar)();
  const desmontar = programarMontajeMapa(montar, limpiar);
  for (const cuadro of cuadros) cuadro(0);

  expect(montar).toHaveBeenCalledTimes(1);
  const estaDescartado = montar.mock.calls[0][0] as () => boolean;
  expect(estaDescartado()).toBe(false);
  desmontar();
  desmontar();
  expect(estaDescartado()).toBe(true);
  expect(limpiar).toHaveBeenCalledTimes(2);
  expect(cancelar.mock.calls).toEqual([[1], [2]]);
});
