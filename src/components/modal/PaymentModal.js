import React from 'react';
import { Dialog, FormControlLabel, Checkbox, InputAdornment, Box, Typography, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Form } from '../customElements/Form'
import { Input } from '../customElements/Input'

import { useForm } from 'react-hook-form'
import ButtonCustom from '../customElements/ButtonCustom';

const useStyles = makeStyles((theme) => ({
    Box: {
        height: 350,
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            width: 250,
            height: 280
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

export default function PaymentModal({ open, setOpen }) {
    const classes = useStyles()
    const handleClose = () => {
        setOpen(false);
    };
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        console.log(data)
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
                        {...register('cost')}
                        id="cost"
                        type="number"
                        label="Сколько закинем?"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={'/image/currency.png'} style={{ width: 20 }} />
                                </InputAdornment>),
                        }}
                    />
                    <FormControlLabel
                        style={{ marginTop: 10, marginBottom: 10 }}
                        control={<Checkbox />}
                        label={'Банковская карта'}
                        name={'BankCard'}
                        {...register('BankCard')}
                    />
                    <Box>
                        <ButtonCustom text="Пополнить" />
                    </Box>
                </Form>
            </div>
        </Dialog>
    );
}