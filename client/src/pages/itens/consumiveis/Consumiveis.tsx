import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material"
import { obterConsumiveis } from "../../../services/items/obterConsumiveisService"
import { useFetch } from "../../../hooks/useFetch"
import { FetchLoader } from "../../../components/FetchLoader"
import { FetchError } from "../../../components/FetchError"
import { nomeConsumiveisCategoriaMap } from "../../../utils/nomeCategoriaMap"

const Consumiveis = () => {
    const { data, loading, error } = useFetch(obterConsumiveis)

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
                        <Link href={`/itens/consumiveis/${categoria}`} underline="none">
                            <Button  variant="contained" className="capitalize rounded-2xl">
                                {nomeConsumiveisCategoriaMap[categoria] || categoria}
                            </Button>
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default Consumiveis