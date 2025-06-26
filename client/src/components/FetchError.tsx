import { Typography } from "@mui/material"

export const FetchError = ({ message }: { message: string }) => (
  <Typography color="error">{message}</Typography>
)
