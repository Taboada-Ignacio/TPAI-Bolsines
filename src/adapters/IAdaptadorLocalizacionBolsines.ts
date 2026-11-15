export interface IAdaptadorLocalizacionBolsines {
  recibirLocalizacionBolsines(): Promise<string[][]>;
  solicitarLocalizacionBolsines(): Promise<void>;
  adaptarLocalizacionBolsines(): void;
}
