import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    if (location.pathname === '/' || location.pathname === '/login') return null

    const handleLogout = () => {
    }

    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Inventario</Button>
                <Button color="inherit">Itens</Button>
                <Button color="inherit">Mapas</Button>
                <Button color="inherit">Personagens</Button>
                <Button color="inherit">História</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    )

}

export default NavBar