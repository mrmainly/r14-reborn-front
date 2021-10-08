import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Dialog, DialogActions, Button } from '@material-ui/core';
import axios from 'axios'

import { StateContext } from '../../store'


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    },
}));

export default function SimpleModal({ showModal, setShowModal }) {
    const classes = useStyles();
    const state = useContext(StateContext)
    const handleClose = () => {
        setShowModal(false);
    };
    const sendDisableReviews = () => {
        axios.post('/api/reviews/reviewsDisable', {
            reviews: state.cardsId.id,
        }).then((res) => {
            console.log('reviewsDisable', res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <Dialog
                open={showModal}
                onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
            >
                <div className={classes.paper}>
                    <Typography variant="h6" style={{ margin: '0 auto' }}>Отключение анкеты</Typography>
                    <Typography variant="body1" style={{ margin: '0 auto' }}>Вы уверены?</Typography>
                    <DialogActions style={{ marginTop: 20 }}>
                        <Button variant="contained" color="primary" onClick={() => { sendDisableReviews() }}>Отключить</Button>
                        <Button variant="contained" color="secondary" onClick={() => {
                            handleClose()
                        }}>Закрыть окно</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}