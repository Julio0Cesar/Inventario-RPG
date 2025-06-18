import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { IHomeCard } from "../configs/interfaces/IHomeCard"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"

const MultiAreaCard: FC<IHomeCard> = ({ imagem, titulo, descricao, link }) => {
  const navigate = useNavigate()
  const handleClick = () =>{navigate(link)}
  return (
    <Card elevation={20} className="m-4 max-w-lg p-4 !bg-gray-50 !rounded-lg !transition-all !duration-300 hover:-translate-y-0.5">
        <CardMedia
          className="aspect-video w-full object-cover rounded-lg"
          component="img"
          image={imagem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {descricao}
          </Typography>
        </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small" color="primary" variant="contained">
          Acessar
        </Button>
      </CardActions>
    </Card>
  )
}

export default MultiAreaCard