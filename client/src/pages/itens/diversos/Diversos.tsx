import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material"
import { obterDiversos } from "../../../services/items/obterDiversosService"
import { useFetch } from "../../../hooks/useFetch"
import { FetchLoader } from "../../../components/FetchLoader"
import { FetchError } from "../../../components/FetchError"
import { nomeDiversosCategoriaMap } from "../../../utils/nomeCategoriaMap"

const Diversos = () => {
    const { data, loading, error } = useFetch(obterDiversos)

    if (loading) return <FetchLoader />
    if (error) return <FetchError message={error} />
    return(
        <Box className="mb-4">
            <Box className="">
                <Typography variant="h4">
                    Consumíveis
                </Typography>
            </Box>
            <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                {Object.keys(data || {}).map((categoria) => (
                    <Box key={categoria} className="m-5">
                        <Link href={`/itens/diversos/${categoria}`} underline="none">
                            <Button  variant="contained" className="capitalize rounded-2xl">
                                {nomeDiversosCategoriaMap[categoria] || categoria}
                            </Button>
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default Diversos