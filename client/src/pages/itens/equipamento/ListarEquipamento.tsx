import { useEffect, useState } from "react"
import { Box, Typography, Divider, LinearProgress, Grid, Link } from "@mui/material"
import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { useParams } from "react-router-dom"

const ListarEquipamento = () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const { categoria } = useParams<{ categoria: string }>()
    const [itens, setItens] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

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
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    {itens.map((item) => (
                        <Box key={item.nome} className="m-5">
                            <Link href={`${categoria}/${item.nome}`} underline="none">
                                <Typography variant="h6" className="capitalize text-black">
                                    {item.nome}
                                </Typography>
                            </Link>
                            <Typography variant="body2">{item.descricao}</Typography>
                        </Box>
                    ))}
                </Grid>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </Box>
    )
}

export default ListarEquipamento
