import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material"
import { nomeEquipamentoCategoriaMap } from "../../../utils/nomeCategoriaMap"
import { FetchLoader } from "../../../components/FetchLoader"
import { FetchError } from "../../../components/FetchError"
import { useFetch } from "../../../hooks/useFetch"

const Equipamentos = () => {
    const { data, loading, error } = useFetch(obterEquipamentos)

    if (loading) return <FetchLoader />
    if (error) return <FetchError message={error} />
    return(
        <Box className="mb-4">
            <Box className="">
                <Typography variant="h4">Equipamentos</Typography>
            </Box>
            <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                {Object.keys(data || {}).map((categoria) => (
                    <Box key={categoria} className="m-5">
                        <Link href={`/itens/equipamento/${categoria}`} underline="none">
                            <Button  variant="contained" className="capitalize rounded-2xl">
                                {nomeEquipamentoCategoriaMap[categoria] || categoria}
                            </Button>
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default Equipamentos