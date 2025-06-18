import { Box, Divider, Fab, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../../../hooks/useAuth"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import AddIcon from '@mui/icons-material/Add'
import TuneIcon from '@mui/icons-material/Tune'
import LogoutIcon from '@mui/icons-material/Logout';

const MenuFlutuante = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const { logout } = useAuth()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget)}

    return (
        <Box className="fixed bottom-10 right-10">
            <Fab color="primary" aria-label="add" onClick={(handleClick)}>
                <AddIcon />
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
                <MenuList>
                    <MenuItem onClick={()=> setAnchorEl(null)}>
                        <ListItemIcon>
                            <LibraryAddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Criar Personagem</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={()=> setAnchorEl(null)}>
                        <ListItemIcon>
                            <TuneIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Configurações</ListItemText>
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

export default MenuFlutuante