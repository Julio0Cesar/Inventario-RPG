import type { IArma, IArmadura, IEquipamentos, IEscudo } from '../../../../configs/interfaces/IEquipamentos'
import { Box, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { nomeColunaMap } from './interface/nomeColunaMap'


type Props = {
  dados: IEquipamentos[] | IArma[] | IArmadura[] | IEscudo[]
  categoria?: string
  colunas?: string[]
}

const getRaridadeStyle = (raridade: string) => {
  switch (raridade?.toLowerCase()) {
    case "comum":
      return "border-gray-400 bg-[rgba(160,160,160,0.151)]";
    case "incomum":
      return "border-green-400 bg-[rgba(50,128,50,0.150)]";
    case "raro":
      return "border-blue-400 bg-[rgba(93,93,255,0.151)]";
    case "epico":
      return "border-yellow-400 bg-[rgba(255,255,93,0.151)]";
    default:
      return "border-white bg-transparent";
  }
}
const larguraColunas: Record<string, string> = {
  efeitos: "w-auto",
  encantamento: "w-28",
  preco: "w-28",
  peso: "w-28",
}

const sufixoMap: Record<string, string> = {
  peso: "Kg",
  preco: "PO",
}


const TabelaEquipamentos = ({ dados, categoria, colunas }: Props) => {
  const todasAsChaves = Object.keys(dados.reduce((acc, item) => ({ ...acc, ...item }), {}))
  const colunasBase = colunas || todasAsChaves.filter((key) => !["nome", "imagem", "descricao"].includes(key))
  const colunasParaExibir = colunasBase.filter((coluna) =>dados.some((item) => coluna in item))
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead className='bg-[rgba(15,15,15,1)]'>
          <TableRow>
            <TableCell align="center" className="capitalize !text-white">
              {categoria}
            </TableCell>
            {colunasParaExibir.map((coluna) => (
              <TableCell key={coluna} align="center" className="capitalize !text-white">
                {nomeColunaMap[coluna] || coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {dados.map((row) => (
            <TableRow key={row.nome} className='bg-[rgba(30,30,30,1)]'>
              <TableCell className="flex flex-col w-60">
                <Box className="flex flex-col justify-center items-center !shadow-none">
                  <img
                    className={`!w-auto object-cover rounded-lg border ${getRaridadeStyle(row.raridade)}`}
                    src={row.imagem}
                    alt={row.nome}
                  />
                  <CardContent>
                    <Typography className="text-white text-center">{row.nome}</Typography>
                  </CardContent>
                </Box>
              </TableCell>
              {colunasParaExibir.map((coluna) => {
                const valor = (row as any)[coluna]
                const texto = Array.isArray(valor) ? valor.join(", ") : valor

                const textoFormatado =
                  texto !== undefined
                    ? `${texto} ${sufixoMap[coluna] || ""}`.trim()
                    : "-"

                return (
                  <TableCell
                    key={coluna}
                    align="center"
                    className={`!text-white ${larguraColunas[coluna] || "w-32"}`}
                  >
                    {textoFormatado}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabelaEquipamentos