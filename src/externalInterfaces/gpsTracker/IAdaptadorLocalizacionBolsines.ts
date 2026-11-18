export interface IAdaptadorLocalizacionBolsines {
  recibirLocalizacionBolsines(
    apiKey: string,
    nrosBolsines: number[],
  ): Promise<string[][]>;
  solicitarLocalizacionBolsines(): Promise<void>;
  adaptarLocalizacionBolsines(): void;
}
