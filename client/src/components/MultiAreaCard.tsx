import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { IHomeCard } from "../configs/types/IHomeCard"
import type { FC } from "react"

const MultiAreaCard: FC<IHomeCard> = ({ imagem, titulo, descricao }) => {
  return (
    <Card elevation={20} className="m-4 max-w-lg p-4 !bg-gray-50 !rounded-lg !transition-all !duration-300 hover:-translate-y-0.5">
        <CardMedia
          className="rounded-lg"
          component="img"
          height="140"
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
        <Button size="small" color="primary" variant="contained">
          Acessar
        </Button>
      </CardActions>
    </Card>
  )
}

export default MultiAreaCard