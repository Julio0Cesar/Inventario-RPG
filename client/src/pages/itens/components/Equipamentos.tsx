import { Box, Button, Divider, Grid, LinearProgress, Link, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { nomeCategoriaMap } from "../components/interface/nomeCategoriaMap"

const Equipamentos = () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const [equipamentoData, setEquipamentoData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchData = async () => {
        setLoading(true)

        try {
            const equipamentos = await obterEquipamentos()
            await delay(100)
            setEquipamentoData(equipamentos)

            setError("")
        } catch (error) {
            setError((error as Error).message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <Box className="mb-4">
            <Box className="">
                <Typography variant="h4">
                    Equipamentos
                </Typography>
            </Box>
            <Divider/>
            {loading ?(
                <Box className="p-10 mx-20">
                    <LinearProgress />
                </Box>
            ):(
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    {Object.keys(equipamentoData || {}).map((categoria) => (
                        <Box key={categoria} className="m-5">
                            <Link href={`itens/equipamento/${categoria}`} underline="none">
                                <Button variant="outlined" className="capitalize !text-black rounded-2xl !border-black hover:!bg-gray-200">
                                    {nomeCategoriaMap[categoria] || categoria}
                                </Button>
                            </Link>
                        </Box>
                    ))}
                </Grid>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </Box>
    )
}

export default Equipamentos