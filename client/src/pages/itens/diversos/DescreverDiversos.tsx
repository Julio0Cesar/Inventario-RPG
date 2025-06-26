import { Box, Divider, Typography } from "@mui/material"
import { obterDiversos } from "../../../services/items/obterDiversosService"
import { FetchLoader } from "../../../components/FetchLoader"
import { FetchError } from "../../../components/FetchError"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemContainer from "../components/container/ItemContainer"
import { getRaridadeStyleDescrever } from "../../../utils/getRaridadeStyle"
import { citacao } from "../../../utils/Icons"
import ItemDetalhes from "../components/detalhes/ItemDetalhes"

const DescreverDiversos = () => {
    const { categoria, item } = useParams()
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const [itens, setItens] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchData = async () => {
        setLoading(true)

        try {
            const data = await obterDiversos(categoria)
            if (!Array.isArray(data)) throw new Error("Dados inválidos: esperado um array")
            await delay(100)
            const encontrado = data.find((i: any) => i.nome.toLowerCase() === item?.toLowerCase())
            if (!encontrado) throw new Error("Item não encontrado")
            setItens(encontrado)

            setError("")
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [categoria])

    if (loading) return <FetchLoader />
    if (error) return <FetchError message={error} />
    if (!item) return null

    return (
        <ItemContainer destino={`/itens/diversos/${categoria}`}>
            <Box>
                <Typography variant="h4">{itens.nome}</Typography>
                <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
                <Box
                    className={`
                        p-5 rounded-xl border-2 border-yellow-600 
                        bg-gradient-to-t dark:from-[rgba(51,38,61,1)] dark:via-[rgba(20,20,20,1)] dark:to-[rgba(20,20,20,1)] from-[#b99ece] via-[#ffffff]
                        ${getRaridadeStyleDescrever(itens.raridade)}
                    `}
                    >
                    <Box className='flex flex-col-reverse sm:flex-row justify-between items-center w-full'>
                        <Box>
                            <Box className='flex items-start'>
                                <img src={citacao} alt="citacao"/>
                                <Typography variant="h5" className="sm:w-2/3 w-full text-start" style={{ fontFamily: "'Carattere', cursive" }}>
                                    &nbsp;&nbsp;{itens.descricao}
                                </Typography>
                            </Box>
                            <Box className='w-full my-4'>
                                <ItemDetalhes item={itens} />
                            </Box>
                        </Box>
                        <Box className='w-full !mb-auto'>
                            <img
                                src={itens.imagem}
                                alt={itens.nome}
                                className="sm:ml-auto sm:mb-auto sm:m-0 m-auto !min-h-30 !min-w-30"
                            />
                        </Box>
                    </Box>
                    <Box className='w-full mb-4'>
                        <Typography variant="h6">
                            Propriedades
                        </Typography>
                        <Divider sx={{ borderStyle: 'dashed', borderColor: '#ca8a04'}} />
                        {itens.propriedade &&
                            <Box>
                                <Typography variant="body1">{itens.propriedade}</Typography>
                            </Box>
                        }
                        {itens.acao &&
                            <Box>
                                <Typography variant="h6">
                                    Ações
                                </Typography>
                                <Divider sx={{ borderStyle: 'dashed', borderColor: '#ca8a04'}} />
                                    <Box>
                                        <Typography variant="body1">{itens.acao}</Typography>
                                    </Box>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </ItemContainer>
    )
}

export default DescreverDiversos