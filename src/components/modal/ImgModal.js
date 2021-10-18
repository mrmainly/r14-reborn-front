import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core'
import { StateContext } from '../../store/index'
import API from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    Box: {
        height: '100%',
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
    },
    img: {
        width: '100%',
        height: 500,
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            height: 300
        },
    }
}))

export default function ImgModal({ open, setOpen, statusUser }) {
    const classes = useStyles()
    const state = useContext(StateContext)
    const handleClose = () => {
        setOpen(false);
    };
    console.log('id', state.photo.id)
    const removePhoto = () => {
        API.deletePhoto(state.photo.gender, state.photo.id)
    }
    const setMain = () => {
        API.setMainPhoto(state.photo.id, state.photo.gender)
    }
    console.log('for', state.photo)
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className={classes.Box}>
                <img src={state.photo.name} className={classes.img} />
                {statusUser == 'whore' ?
                    <Box>
                        {state.photo.name == '/image/XVP.jpg' ? '' :
                            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                                <Button variant="contained" onClick={() => { removePhoto() }}>Удалить фото</Button>
                                {state.photo.type == 'main' ? '' : <Button variant="contained" onClick={() => { setMain() }}>Сделать его основным</Button>}
                            </Box>
                        }
                    </Box>
                    : ''}
            </div>
        </Dialog>
    );
}