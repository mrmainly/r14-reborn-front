import React, { useContext } from 'react';
import { Dialog, InputAdornment, Box, Typography, MenuItem, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'

import { ButtonCustom, Form, Input } from '../index';
import { StateContext } from '../../store';
import API from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    Box: {
        height: '100%',
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            width: 250,
            height: 280
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

export default function PaymentModal({ open, setOpen }) {
    const classes = useStyles()
    const state = useContext(StateContext)
    const handleClose = () => {
        setOpen(false);
    };
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        API.sendBalance({ ...data, owner: state.userId.id })
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className={classes.Box}>
                <Box className={classes.titleBox}>
                    <Typography variant="h6">Пополнить баланс</Typography>
                    <MenuItem onClick={() => handleClose()}>X</MenuItem>
                </Box>
                <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <Input
                        {...register('amount')}
                        id="amount"
                        type="number"
                        label="Сколько закинем?"
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={'/image/Frame3281.png'} style={{ width: 20 }} />
                                </InputAdornment>),
                        }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        color='primary'
                        aria-label="maximum height"
                        minRows={5}
                        placeholder="Ваше сообщение"
                        id="comment"
                        name={'comment'}
                        {...register('comment')}
                        required
                        style={{ marginTop: 10 }}
                    />
                    <Box style={{ marginTop: 10 }}>
                        <ButtonCustom text="Пополнить" />
                    </Box>
                </Form>
            </div>
        </Dialog>
    );
}