import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { StateContext } from '../../store/index'
import axios from 'axios'

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
    const removePhoto = () => {
        const urlCommon = '/api/photoRemove'
        const urlMain = '/api/photoMainRemove'
        axios.post(state.photo.type == 'main' ? urlMain : urlCommon, {
            photo: state.photo.id,
        }).then((res) => {
            // location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className={classes.Box}>
                <img src={state.photo.name} className={classes.img} />
                {statusUser == 'whore' ?
                    <Button variant="contained" onClick={() => { removePhoto() }}>Удалить фото</Button>
                    : ''}
            </div>
        </Dialog>
    );
}