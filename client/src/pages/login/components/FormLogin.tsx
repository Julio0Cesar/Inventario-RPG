import { Box, Button, Checkbox, CircularProgress, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { criarHandleChange } from "../../../utils/formUtils"
import { autenticarLogin } from "../../../services/users/authenticarLoginService"

const FormLogin = () => {
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
            const response = await autenticarLogin(formData.email, formData.senha)
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
        <Box className='mt-4'>
            {error && <p className="text-red-500">{error}</p>}
        </Box>
        </Box>
    )
}

export default FormLogin