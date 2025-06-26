import { TableCell } from "@mui/material"
import { larguraColunas, sufixoMap } from "../../../../utils/tabelaParametros"

type Props = {
  coluna: string
  valor: any
}

const TabelaItensCell = ({ coluna, valor }: Props) => {
  const texto = Array.isArray(valor) ? valor.join(", ") : valor
  const textoFormatado =
    texto !== undefined
      ? `${texto} ${sufixoMap[coluna] || ""}`.trim()
      : "-"

  return (
    <TableCell
      align="center"
      className={`dark:!text-gray-300 ${larguraColunas[coluna] || "w-32"}`}
    >
      {textoFormatado}
    </TableCell>
  )
}

export default TabelaItensCell
