import { Box, Divider, Fab, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from "@mui/material"
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import TuneIcon from '@mui/icons-material/Tune'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from "react-router-dom"
import menu from '../../public/icons/menu/weapon.png'

const NavMenu = () => {       
    const navigation = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const { logout } = useAuth()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget)}

    const [isDark, setIsDark] = useState(
        () => localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {
        if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        }
    }, [isDark])


    return (
        <Box className="fixed bottom-10 right-10 ">
            <Fab color="primary" aria-label="add" onClick={(handleClick)}>
                <img 
                    src={menu}
                    alt="menu"
                    className=''/>
            </Fab>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={()=> setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}>
                <MenuList className="dark:!bg-[rgba(35,35,35,1)] dark:!text-gray-300">
                    <MenuItem onClick={()=> navigation("/")}>
                        <ListItemIcon>
                            <ArrowBackIosNewIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Início</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => setIsDark(!isDark)}>
                        <ListItemIcon>
                            <TuneIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>{isDark ? 'Modo Claro' : 'Modo Escuro'}</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={()=> logout()} className="group !text-red-400 hover:!text-red-600">
                        <ListItemIcon className="!text-red-400 group-hover:!text-red-600">
                            <LogoutIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText >Logout</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NavMenu