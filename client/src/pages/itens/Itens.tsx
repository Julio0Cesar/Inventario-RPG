import { Box, Container } from "@mui/material"
import Equipamentos from "./components/Equipamentos"
import Consumiveis from "./components/Consumiveis"
import Diversos from "./components/Diversos"

const Itens = () => {
    return(
        <Container className="min-h-screen !max-w-full flex items-start justify-center">
            <Box className="my-20 flex flex-col w-full lg:w-2/3">
                <Equipamentos/>
                <Consumiveis/>
                <Diversos/>
            </Box>
        </Container>
    )
}

export default Itens