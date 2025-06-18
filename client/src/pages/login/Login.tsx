import { CardContent, Typography, Box } from '@mui/material'
import FormLogin from './components/FormLogin'

const Login = () => {

    return(
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CardContent>
        <Box className='flex justify-between'>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
        </Box>
        <FormLogin/>
        </CardContent>
    </Box>
    )

}

export default Login