import { z } from "zod";

const textoObligatorio = z.string().trim().min(1, "Este campo es obligatorio.");

export const comisionMedicaEntradaSchema = z.object({
  codigo: textoObligatorio,
  nombre: textoObligatorio,
  direccion: textoObligatorio,
  email: textoObligatorio.pipe(z.email("Ingresá un email válido.")),
  telefono: textoObligatorio,
});

export type ComisionMedicaEntrada = z.infer<typeof comisionMedicaEntradaSchema>;
export type ComisionMedica = ComisionMedicaEntrada & { id: number };

export const COMISIONES_MEDICAS_SEED: ComisionMedica[] = [
  { id: 1, codigo: "CM-BA", nombre: "Comisión Médica Buenos Aires", direccion: "La Plata, Buenos Aires", email: "cm-buenos-aires@example.com", telefono: "0221-400-0001" },
  { id: 2, codigo: "CM-CAT", nombre: "Comisión Médica Catamarca", direccion: "San Fernando del Valle de Catamarca", email: "cm-catamarca@example.com", telefono: "0383-400-0002" },
  { id: 3, codigo: "CM-CHA", nombre: "Comisión Médica Chaco", direccion: "Resistencia, Chaco", email: "cm-chaco@example.com", telefono: "0362-400-0003" },
  { id: 4, codigo: "CM-CHU", nombre: "Comisión Médica Chubut", direccion: "Rawson, Chubut", email: "cm-chubut@example.com", telefono: "0280-400-0004" },
  { id: 5, codigo: "CM-CBA", nombre: "Comisión Médica Córdoba", direccion: "Córdoba Capital, Córdoba", email: "cm-cordoba@example.com", telefono: "0351-400-0005" },
  { id: 6, codigo: "CM-COR", nombre: "Comisión Médica Corrientes", direccion: "Corrientes Capital, Corrientes", email: "cm-corrientes@example.com", telefono: "0379-400-0006" },
  { id: 7, codigo: "CM-ER", nombre: "Comisión Médica Entre Ríos", direccion: "Paraná, Entre Ríos", email: "cm-entre-rios@example.com", telefono: "0343-400-0007" },
  { id: 8, codigo: "CM-FOR", nombre: "Comisión Médica Formosa", direccion: "Formosa Capital, Formosa", email: "cm-formosa@example.com", telefono: "0370-400-0008" },
  { id: 9, codigo: "CM-JUJ", nombre: "Comisión Médica Jujuy", direccion: "San Salvador de Jujuy", email: "cm-jujuy@example.com", telefono: "0388-400-0009" },
  { id: 10, codigo: "CM-LP", nombre: "Comisión Médica La Pampa", direccion: "Santa Rosa, La Pampa", email: "cm-la-pampa@example.com", telefono: "02954-40-0010" },
  { id: 11, codigo: "CM-LR", nombre: "Comisión Médica La Rioja", direccion: "La Rioja Capital, La Rioja", email: "cm-la-rioja@example.com", telefono: "0380-400-0011" },
  { id: 12, codigo: "CM-MZA", nombre: "Comisión Médica Mendoza", direccion: "Mendoza Capital, Mendoza", email: "cm-mendoza@example.com", telefono: "0261-400-0012" },
  { id: 13, codigo: "CM-MIS", nombre: "Comisión Médica Misiones", direccion: "Posadas, Misiones", email: "cm-misiones@example.com", telefono: "0376-400-0013" },
  { id: 14, codigo: "CM-NEU", nombre: "Comisión Médica Neuquén", direccion: "Neuquén Capital, Neuquén", email: "cm-neuquen@example.com", telefono: "0299-400-0014" },
  { id: 15, codigo: "CM-RN", nombre: "Comisión Médica Río Negro", direccion: "Viedma, Río Negro", email: "cm-rio-negro@example.com", telefono: "02920-40-0015" },
  { id: 16, codigo: "CM-SAL", nombre: "Comisión Médica Salta", direccion: "Salta Capital, Salta", email: "cm-salta@example.com", telefono: "0387-400-0016" },
  { id: 17, codigo: "CM-SJ", nombre: "Comisión Médica San Juan", direccion: "San Juan Capital, San Juan", email: "cm-san-juan@example.com", telefono: "0264-400-0017" },
  { id: 18, codigo: "CM-SL", nombre: "Comisión Médica San Luis", direccion: "San Luis Capital, San Luis", email: "cm-san-luis@example.com", telefono: "0266-400-0018" },
  { id: 19, codigo: "CM-SC", nombre: "Comisión Médica Santa Cruz", direccion: "Río Gallegos, Santa Cruz", email: "cm-santa-cruz@example.com", telefono: "02966-40-0019" },
  { id: 20, codigo: "CM-SF", nombre: "Comisión Médica Santa Fe", direccion: "Santa Fe Capital, Santa Fe", email: "cm-santa-fe@example.com", telefono: "0342-400-0020" },
  { id: 21, codigo: "CM-SDE", nombre: "Comisión Médica Santiago del Estero", direccion: "Santiago del Estero Capital", email: "cm-santiago-del-estero@example.com", telefono: "0385-400-0021" },
  { id: 22, codigo: "CM-TDF", nombre: "Comisión Médica Tierra del Fuego", direccion: "Ushuaia, Tierra del Fuego", email: "cm-tierra-del-fuego@example.com", telefono: "02901-40-0022" },
  { id: 23, codigo: "CM-TUC", nombre: "Comisión Médica Tucumán", direccion: "San Miguel de Tucumán", email: "cm-tucuman@example.com", telefono: "0381-400-0023" },
  { id: 24, codigo: "CM-CABA", nombre: "Comisión Médica CABA", direccion: "Ciudad Autónoma de Buenos Aires", email: "cm-caba@example.com", telefono: "011-4000-0024" },
];
