import { useEffect, useState } from "react"
import { Box, Typography, Divider, LinearProgress, Grid, Link } from "@mui/material"
import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { useParams } from "react-router-dom"

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
        <Box className="mb-4">
            <Typography variant="h4" className="capitalize">
                {categoria}
            </Typography>
            <Divider />
            {loading ?(
                <Box className="p-10 mx-20">
                    <LinearProgress />
                </Box>
            ):(
                <Box>
                    <Typography variant="h4">{itens.nome}</Typography>
                    <Divider />
                    <Typography variant="body1">{itens.descricao}</Typography>
                    <Typography variant="body2">Raridade: {itens.raridade}</Typography>
                    <Typography variant="body2">Peso: {itens.peso}</Typography>
                    <Typography variant="body2">Preço: {itens.preco}</Typography>
                </Box>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </Box>
    )
}

export default DescreverEquipamento
