import type { IArma, IArmadura, IEquipamentos, IEscudo } from "./IEquipamentos";

export interface IEquipamentosData {
  amuleto: IEquipamentos[]
  armadura: IArmadura[]
  capa: IEquipamentos[]
  calcado: IEquipamentos[]
  chapeu: IEquipamentos[]
  luva: IEquipamentos[]
  instrumento: IEquipamentos[]
  anel: IEquipamentos[]
  escudo: IEscudo[]
  arma: IArma[]
}
