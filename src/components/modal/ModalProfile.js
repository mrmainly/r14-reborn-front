import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';

import StatusCards from '../cards/StatusCard'

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
    },
    cardsBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',

        },
    },
    cards: {
        marginLeft: 10,
        marginRight: 10,
        [theme.breakpoints.down('xs')]: {
            marginTop: 10

        },
    }
}));

export default function SimpleModal({ showModal, setShowModal }) {
    const classes = useStyles();

    const handleClose = () => {
        setShowModal(false);
    };
    const arrayStatusCard = [
        {
            status: '1',
            price: '5',
        },
        {
            status: '2',
            price: '7',
        },
        {
            status: '3',
            price: '9',
        }
    ]
    return (
        <div>
            <Dialog
                open={showModal}
                onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
                className={classes.paper}
            >
                <Typography variant="h6" style={{ margin: '0 auto' }}>Активирование анкеты</Typography>
                <Typography variant="body1" style={{ margin: '0 auto' }}>Выберите статус</Typography>
                <DialogActions>
                    <Box className={classes.cardsBox}>
                        {arrayStatusCard.map((item, index) => (
                            <div className={classes.cards} key={index}>
                                <StatusCards price={item.price} status={item.status} />
                            </div>
                        ))}
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}