import { useEffect, useState } from "react"
import { Box, Typography, Divider, LinearProgress } from "@mui/material"
import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { useParams } from "react-router-dom"
import TabelaEquipamentos from "./components/TabelaEquipamentos"
import ItemContainer from "../components/ItemContainer"

const ListarEquipamento = () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const { categoria } = useParams<{ categoria: string }>()
    const [itens, setItens] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    const palavrasMasculinas = ["anel", "amuleto", "calcado", "chapeu", "instrumento", "escudo"]

    if (!categoria) return <p>Categoria não encontrada</p>
    const anterior = palavrasMasculinas.includes(categoria) ? "Lista de todos os " : "Lista de todas as "
    const posterior = "s"

    const nomeCategoria = categoria === "anel" ? "anei" : categoria

    const fetchData = async () => {
        setLoading(true)

        try {
            const data = await obterEquipamentos(categoria)
            if (!Array.isArray(data)) throw new Error("Dados inválidos: esperado um array")
            await delay(100)
            setItens(data)

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
        <ItemContainer destino='/itens/'>
            <Typography variant="h4">
                {anterior}{nomeCategoria}{posterior}
            </Typography>
            <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
            {loading ? (
                <Box className="p-10 mx-20">
                    <LinearProgress />
                </Box>
            ) : (
                <TabelaEquipamentos 
                    dados={itens} 
                    categoria={categoria}
                    colunas={["encantamento", "ca", "bonusCa", "desvantagem", "dano", "tipoDano", "peso", "preco", "efeitos"]}
                />
            )}
            {error && <p className="text-red-500">{error}</p>}
        </ItemContainer>
    )
}

export default ListarEquipamento