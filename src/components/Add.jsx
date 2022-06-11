import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyleModal = styled(Modal)({

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

})

const UserBox = styled(Box)({

    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})


const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClose={() => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: {xs: "calc(50% - 25px)", md: 30},
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>

            <StyleModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                    p={3}
                    borderRadius={5}>
                    <Typography id="modal-modal-title" textAlign='center' color='gray' variant="h6" component="h2">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/3071516/pexels-photo-3071516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{width: 30, height: 30}}
                        />
                        <Typography fontWeight={500} variant='span'>John</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: '100%',
                        }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder='What on your mind'
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        < EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <VideoCameraBackIcon color="success"/>
                        <PersonAddIcon color="error"/>
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{
                             width: '100px'
                        }}>

                            <DateRangeIcon/>
                            </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    );
};

export default Add;