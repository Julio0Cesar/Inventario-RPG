const palavrasMasculinas = ["anel", "amuleto", "calcado", "chapeu", "instrumento", "escudo"]

export function useCategoriaFormatada(categoria?: string) {
  if (!categoria) {
    return {
      nome: null,
      frase: "Categoria não encontrada",
    }
  }

  const anterior = palavrasMasculinas.includes(categoria)
    ? "Lista de todos os "
    : "Lista de todas as "

  const posterior = "s"

  const nome = categoria === "anel" ? "anei" : categoria

  const frase = `${anterior}${nome}${posterior}`

  return { frase }
}
