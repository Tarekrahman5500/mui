import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import Mail from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyleToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    width: '40%',
    borderRadius: theme.shape.borderRadius,
}))

const Icons = styled(Box)(({theme}) => ({
    padding: '0 10px',
    display: 'none',
    gap: '20%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    }
}))

const Users = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: '10%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
}))


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyleToolBar>
                <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>
                    MUI
                </Typography>
                <PetsIcon variant='h6' sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search><InputBase placeholder='Search'/></Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail color='acton'/>
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <NotificationsIcon color='acton'/>
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}}
                            onClick={e => setOpen(true)}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

                </Icons>
                <Users onClick={e => setOpen(true)}>
                    <Avatar sx={{width: 30, height: 30}}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <Typography variant="span">Sourov</Typography>
                </Users>
            </StyleToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;