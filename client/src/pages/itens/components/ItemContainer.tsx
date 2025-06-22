import { Box, Container } from "@mui/material"
import RetornoButton from "../../../components/RetornoButton"

type ItemContainerProps = {
  children: React.ReactNode
  destino: string
}

const ItemContainer = ({ children, destino }: ItemContainerProps) => {
    return(
        <Container className="min-h-screen !max-w-full flex items-start justify-center">
            <Box className="my-20 flex flex-col w-full lg:w-2/3">
                <Box className="mb-6">
                    <RetornoButton destino={destino}/>
                </Box>
                <Box className="rounded-xl p-5 bg-gray-50 text-black dark:!bg-[rgba(35,35,35,1)] dark:!text-gray-300 border border-yellow-600 shadow-2xl">
                {children}
                </Box>
            </Box>
        </Container>
    )
} 

export default ItemContainer