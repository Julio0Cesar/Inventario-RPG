import { Box, Container, Typography } from "@mui/material"
import React from "react"

const Error404 = () => {

    return(
        <React.Fragment>
            <Container maxWidth="sm" className="min-h-screen flex items-center justify-center">
                <Box>
                    <Typography variant="h1" gutterBottom>
                        Erro 404
                    </Typography>
                    <Typography variant="h5" gutterBottom className="text-center">
                        Página não encontrada
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )

}

export default Error404