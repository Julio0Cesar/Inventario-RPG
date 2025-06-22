import { Button, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

type Props = {
  destino: string
}

const RetornoButton = ({destino}: Props ) =>{
    return(
        <Button href={destino} variant="contained" className="hover:!bg-[rgba(35,35,35,1)] !bg-[rgba(35,35,35,0.7)]">
            <Typography variant="h6" className="flex items-center !text-gray-300 hover:!text-white">
                <ArrowBackIcon/> Retornar
            </Typography>
        </Button>  
    )
}

export default RetornoButton