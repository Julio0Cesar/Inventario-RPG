import { Box, CardContent, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import type { IArma, IArmadura, IEquipamentos, IEscudo } from '../../../../configs/interfaces/IEquipamentos'
import { nomeColunaMap } from '../../../../utils/tabelaParametros'
import { getRaridadeStyleListar } from '../../../../utils/getRaridadeStyle'
import type { IConsumiveis, IIngrediente } from '../../../../configs/interfaces/IConsumiveis'
import TabelaItensCell from './TabelaItensCell'
import type { IAutor, IDiversos } from '../../../../configs/interfaces/IDiversos'

type Props = {
  dados: IEquipamentos[] | IArma[] | IArmadura[] | IEscudo[] | IConsumiveis[] | IIngrediente[] | IDiversos[] | IAutor[]
  categoria?: string
  colunas?: string[]
}

const TabelaItens = ({ dados, categoria, colunas }: Props) => {
  const todasAsChaves = Object.keys(dados.reduce((acc, item) => ({ ...acc, ...item }), {}))
  const colunasBase = colunas || todasAsChaves.filter((key) => !["nome", "imagem", "descricao"].includes(key))
  const colunasParaExibir = colunasBase.filter((coluna) =>dados.some((item) => coluna in item))
  
  return (
    <TableContainer component={Paper} className='mb-5 border border-gray-300 dark:border-none'>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead className='dark:bg-[rgba(15,15,15,1)] bg-gray-100 !border-gray-300'>
          <TableRow>
            <TableCell align="center" className="capitalize dark:!text-gray-300">
              {categoria}
            </TableCell>
            {colunasParaExibir.map((coluna) => (
              <TableCell key={coluna} align="center" className="capitalize dark:!text-gray-300">
                {nomeColunaMap[coluna] || coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {dados.map((row) => (
            <TableRow key={row.nome} className='dark:bg-[rgba(30,30,30,1)]'>
              <TableCell className="flex flex-col w-60">
                <Box className="flex flex-col justify-center items-center !shadow-none">
                    <Link href={`${categoria}/${row.nome}`} underline="none">
                      <img
                        className={`!w-auto object-cover rounded-lg border ${getRaridadeStyleListar(row.raridade!)}`}
                        src={row.icone}
                        alt={row.nome}
                      />
                    </Link>
                  <CardContent>
                    <Link href={`${categoria}/${row.nome}`} color="inherit" className='text-black dark:!text-gray-300'>
                      <Typography className="dark:text-gray-300 text-black text-center">{row.nome}</Typography>
                    </Link>
                  </CardContent>
                </Box>
              </TableCell>
              {colunasParaExibir.map((coluna) => (
                <TabelaItensCell
                  key={coluna}
                  coluna={coluna}
                  valor={(row as any)[coluna]}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabelaItens