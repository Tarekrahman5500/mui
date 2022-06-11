import React from 'react';
import {
    Avatar,
    AvatarGroup,
    Box, Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from "@mui/material";

const Rightbar = () => {
    return (
        <Box
            flex={2} p={2}
            sx={{display: {xs: 'none', sm: 'block'}}}>
            <Box position='fixed' width={300}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup total={24} max={4}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/11590842/pexels-photo-11590842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/6078242/pexels-photo-6078242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/6911651/pexels-photo-6911651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/11590842/pexels-photo-11590842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/6911651/pexels-photo-6911651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2}>Latest Chat</Typography>
                <List sx={{ width: '100%', maxWidth: 360, color: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/10084505/pexels-photo-10084505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3713743/pexels-photo-3713743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2914002/pexels-photo-2914002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>

        </Box>

    );
};

export default Rightbar;