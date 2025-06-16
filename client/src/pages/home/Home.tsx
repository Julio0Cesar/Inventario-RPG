import { Box, Container } from "@mui/material"
import type { IHomeCard } from "../../configs/types/IHomeCard";
import { getCardsData } from "../../configs/reqData";
import Grid from '@mui/material/Grid';
import MultiAreaCard from "../../components/MultiAreaCard"

const Home = () => {
    const cardsData = getCardsData()

    return(
        <Container className="min-h-screen !max-w-full flex items-center justify-center">
            <Box className="my-20">
                <Grid container spacing={8} justifyContent="center" alignItems="center">
                    {cardsData.map((item: IHomeCard, index: number) =>(
                        <MultiAreaCard key={index} imagem={item.imagem} titulo={item.titulo} descricao={item.descricao} link={item.link}/>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Home