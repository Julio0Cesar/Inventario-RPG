export interface IConsumiveis {
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

export interface IIngrediente extends IConsumiveis {
  ingredientes: string[]
}
