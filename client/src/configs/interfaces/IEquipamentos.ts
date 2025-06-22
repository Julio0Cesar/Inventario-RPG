export interface IEquipamentos {
  nome: string
  raridade: string
  peso: number
  preco: number
  efeitos: string[]
  icone: string
  imagem: string
  tipo: string
  descricao: string
}

export interface IArmadura extends IEquipamentos {
  ca: number
  desvantagem: string
}

export interface IEscudo extends IEquipamentos {
  bonusCa: number
}

export interface IArma extends IEquipamentos {
  modalidade: string
  alcance: string
  empunhadura: string
  dano: string  
  tipoDano: string
  encantamento: string[] 
  propriedade: string  
  acao: string
}