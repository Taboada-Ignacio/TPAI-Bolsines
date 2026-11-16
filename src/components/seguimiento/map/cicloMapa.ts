export function programarMontajeMapa(
  montar: (estaDescartado: () => boolean) => void,
  desmontar: () => void,
) {
  let descartado = false;
  const cuadro = requestAnimationFrame(() => {
    if (!descartado) montar(() => descartado);
  });
  return () => {
    if (descartado) return;
    descartado = true;
    cancelAnimationFrame(cuadro);
    desmontar();
  };
}
