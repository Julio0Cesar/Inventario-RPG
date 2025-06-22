import { useEffect, useState } from "react"
import { Box, Typography, Divider, LinearProgress } from "@mui/material"
import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { useParams } from "react-router-dom"
import citacao from '../../../../public/icons/itens/descrever/citacao-icon.png'
import raridade from '../../../../public/icons/itens/descrever/raridade-icon.png'
import peso from '../../../../public/icons/itens/descrever/peso-icon.png'
import preco from '../../../../public/icons/itens/descrever/preco-icon.png'
import alcance from '../../../../public/icons/itens/descrever/alcance-icon.png'
import empunhadura from '../../../../public/icons/itens/descrever/empunhadura-icon.png'
import encantamento from '../../../../public/icons/itens/descrever/encantamento-icon.png'
import tipoDano from '../../../../public/icons/itens/descrever/tipoDano-icon.png'
import d20 from '../../../../public/icons/itens/descrever/d20-icon.png'
import sword from '../../../../public/icons/itens/descrever/sword-icon.png'
import amuleto from '../../../../public/icons/itens/descrever/amuleto-icon.png'
import anel from '../../../../public/icons/itens/descrever/anel-icon.png'
import luva from '../../../../public/icons/itens/descrever/luva-icon.png'
import calcado from '../../../../public/icons/itens/descrever/botas-icon.png'
import armaduraLeve from '../../../../public/icons/itens/descrever/armadura-leve-icon.png'
import armaduraMedia from '../../../../public/icons/itens/descrever/armadura-media-icon.png'
import armaduraPesada from '../../../../public/icons/itens/descrever/armadura-pesada-icon.png'
import chapeu from '../../../../public/icons/itens/descrever/chapeu-icon.png'
import escudo from '../../../../public/icons/itens/descrever/escudo-icon.png'
import capa from '../../../../public/icons/itens/descrever/capa-icon.png'
import ItemContainer from "../components/ItemContainer"

const iconesPorTipo: Record<string, string> = {
  rapieira: sword,
  amuleto: amuleto,
  escudo: escudo,
  capa: capa,
  anel: anel,
  luva: luva,
  capacetes: chapeu,
  botas: calcado,
  "Armadura Leve": armaduraLeve,
  "Armadura Media": armaduraMedia,
  "Armadura Pesada": armaduraPesada,
}

const definirIcon = (tipo: string) => {
  return iconesPorTipo[tipo] 
}

const getRaridadeStyle = (raridade: string) => {
  switch (raridade?.toLowerCase()) {
    case "comum":
      return "dark:to-[rgba(20,20,20,1)] to-[rgba(200,200,200,1)]";
    case "incomum":
      return "dark:!to-[#064200] to-[#5eff5e]";
    case "raro":
      return "dark:to-[#001244] to-[#9db7ff]";
    case "muito raro":
      return "dark:to-[#3e0f2b] to-[#ff4d65]";
    case "lendario":
      return "dark:to-[#4d2b00] to-[#ffb24d]";
    default:
      return "";
  }
}

const DescreverEquipamento = () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const { categoria, item } = useParams()
    const [itens, setItens] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchData = async () => {
        setLoading(true)

        try {
            const data = await obterEquipamentos(categoria)
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

    return (
        <ItemContainer destino={`/itens/equipamento/${categoria}`}>
            {loading ?(
                <Box className="p-10 mx-20">
                    <LinearProgress />
                </Box>
            ):(
                <Box>
                    <Typography variant="h4">{itens.nome}</Typography>
                    <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
                    <Box
                        className={`
                            p-5 rounded-xl border-2 border-yellow-600 
                            bg-gradient-to-t dark:from-[rgba(51,38,61,1)] dark:via-[rgba(20,20,20,1)] dark:to-[rgba(20,20,20,1)] from-[#b99ece] via-[#ffffff]
                            ${getRaridadeStyle(itens.raridade)}
                        `}
                        >
                        <Box className='flex flex-col-reverse sm:flex-row justify-between items-center w-full'>
                            <Box className=''>
                                <Box className='flex items-start'>
                                    <img src={citacao} alt="citacao"/>
                                    <Typography variant="h5" className="sm:w-2/3 w-full text-start" style={{ fontFamily: "'Carattere', cursive" }}>&nbsp;&nbsp;{itens.descricao}</Typography>
                                </Box>
                                <Box className='w-full my-4'>
                                    <Box className='my-5'>
                                        <Typography variant="h6">Detalhes</Typography>
                                    </Box>
                                    {itens.tipo &&
                                        <Box className='flex mb-1'>
                                            <img src={definirIcon(itens.tipo)} alt="tipoIcon"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;{itens.tipo}</Typography>
                                        </Box>
                                    }
                                    <Box className='flex mb-1'>
                                        <img src={raridade} alt="raridade"/> 
                                        <Typography variant="body1" className="capitalize">&nbsp;raridade: {itens.raridade}</Typography>
                                    </Box>
                                    {itens.alcance &&
                                        <Box className='flex mb-1'>
                                            <img src={alcance} alt="alcance"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;alcance: {itens.alcance}</Typography>
                                        </Box>
                                    }
                                    {itens.empunhadura &&
                                        <Box className='flex mb-1'>
                                            <img src={empunhadura} alt="empunhadura"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;empunhadura: {itens.empunhadura}</Typography>
                                        </Box>
                                    }
                                    {itens.encantamento &&
                                        <Box className='flex mb-1'>
                                            <img src={encantamento} alt="encantamento"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;encantamento: {itens.encantamento == '' ? 'Nenhum' : itens.encantamento}</Typography>
                                        </Box>
                                    }
                                    {itens.tipoDano &&
                                        <Box className='flex mb-1'>
                                            <img src={tipoDano} alt="tipoDano"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;tipo de dano: {itens.tipoDano}</Typography>
                                        </Box>
                                    }
                                    {itens.dano &&
                                        <Box className='flex mb-1'>
                                            <img src={d20} alt="d20"/> 
                                            <Typography variant="body1" className="capitalize sm:whitespace-nowrap">&nbsp;dano: {itens.dano}</Typography >
                                        </Box>
                                    }
                                    {itens.modalidade &&
                                        <Box className='flex mb-1'>
                                            <img src={encantamento} alt="modalidade"/> 
                                            <Typography variant="body1" className="capitalize">&nbsp;modalidade: {itens.modalidade}</Typography>
                                        </Box>
                                    }
                                    <Box className='flex mb-1'>
                                        <img src={peso} alt="peso"/> 
                                        <Typography variant="body1" className="capitalize">&nbsp;peso: {itens.peso} Kg</Typography>
                                    </Box>
                                    <Box className='flex mb-1'>
                                        <img src={preco} alt="preco"/> 
                                        <Typography variant="body1" className="capitalize">&nbsp;preco: {itens.preco} PO</Typography>
                                    </Box>
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
                            <Typography variant="h6">
                                Ações
                            </Typography>
                            <Divider sx={{ borderStyle: 'dashed', borderColor: '#ca8a04'}} />
                            {itens.acao &&
                                <Box>
                                    <Typography variant="body1">{itens.acao}</Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </ItemContainer>
    )
}

export default DescreverEquipamento
