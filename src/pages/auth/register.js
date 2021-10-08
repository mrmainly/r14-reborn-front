import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonCustom from '../../components/customElements/ButtonCustom';
import { Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { DispatchContext } from '../../store';
import Layout from '../../components/layout/Layout';
import API from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    form: {
        width: 400,
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '60%',
        margin: '0 auto',
        paddingTop: 30,
        paddingBottom: 30,
        filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))",
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        borderRadius: 8,
    }

}));

export default function Register() {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState([])
    const [verPassword, setVerPassword] = useState([])
    const router = useHistory()

    const sendForCreateUser = () => {
        if (verPassword == password) {
            if (password.length >= 8) {
                API.register({ phone, password }, dispatch, router)
            } else {
                dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'пароль должен состоять минимум из 8 символов' } })
            }
        }
        else {
            dispatch({ type: 'notification', payload: { text: 'пароли не совподают', status: 'error', active: true } })
        }
    }
    return (
        <Layout>
            <div style={{ paddingTop: 60 }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Номер телефона"
                                    autoComplete="phone"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Пароль"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="проверить пароль"
                                    type="password"
                                    value={verPassword}
                                    onChange={(e) => {
                                        setVerPassword(e.target.value)
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                            <ButtonCustom text="Зарегестрироваться" onClick={() => sendForCreateUser()} />
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}