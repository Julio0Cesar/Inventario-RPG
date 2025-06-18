import { CardContent, Typography, TextField, Button, Box, FormControlLabel, Checkbox, InputAdornment, IconButton, CircularProgress } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { criarHandleChange } from '../../utils/formUtils'
import { autenticarLoginUsuario } from '../../services/users/authenticarLoginUserService'
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        lembrar: false
    })

    const { login } = useAuth()
    const handleChange = criarHandleChange(setFormData)
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await autenticarLoginUsuario(formData.email, formData.senha)
            await delay(500)
            login(response)
            
            navigate("/")
        } catch (error) {
            setError((error as Error).message)
        } finally{
            setLoading(false)
        }
    }

    return(
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CardContent>
        <div className='flex justify-between'>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
        </div>
          <Box component="form" onSubmit={handleLogin} noValidate autoComplete="off">
            <TextField
                required
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                required
                label="Senha"
                type={mostrarSenha ? 'text' : 'password'}
                fullWidth
                margin="normal"
                name='senha'
                value={formData.senha}
                onChange={handleChange}
                slotProps={{
                    input: {
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            onClick={()=> setMostrarSenha(!mostrarSenha)}
                            edge="end"
                        >
                            {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    ),
                    },
                }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                    name="lembrar"
                    checked={formData.lembrar}
                    onChange={handleChange}
                    />
                }
                label="Lembrar de mim?"
                />
            <Button
                variant="contained"
                loading={loading}
                loadingIndicator={<CircularProgress size={16} />}
                color="primary"
                fullWidth
                type='submit'
                sx={{ marginTop: 2 }}
            >
              Entrar
            </Button>
            <div className='mt-4'>
                {error && <p className="text-red-500">{error}</p>}
            </div>
          </Box>
        </CardContent>
    </Box>
    )

}

export default Login