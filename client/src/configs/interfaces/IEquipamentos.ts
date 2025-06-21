export interface IEquipamentos {
  nome: string
  raridade: string
  peso: number
  preco: number
  efeitos: string[]
  imagem: string
  descricao: string
}

export interface IArmadura extends IEquipamentos {
  ca: number
  tipo: string
  desvantagem: string
}

export interface IEscudo extends IEquipamentos {
  bonusCa: number
}

export interface IArma extends IEquipamentos {
  tipo: string 
  modalidade: string
  alcance: string
  empunhadura: string
  dano: string  
  tipoDano: string
  encantamento: string[] 
}