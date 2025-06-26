export interface IDiversos {
  nome: string
  raridade?: string
  peso: number
  preco: number
  icone: string
  imagem: string
  tipo: string
  descricao: string
}

export interface IAutor extends IDiversos {
  autor: string
  texto: string
}
