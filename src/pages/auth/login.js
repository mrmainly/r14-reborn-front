import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, TextField } from '@material-ui/core'

import { useHistory, Link } from 'react-router-dom'
import cookie from 'js-cookie'

import ButtonCustom from '../../components/customElements/ButtonCustom';
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

export default function Login() {
    const classes = useStyles();
    const router = useHistory()
    const dispatch = useContext(DispatchContext)
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()

    const sendLogin = () => {
        API.getToken({ phone, password }, dispatch, router)
    }

    return (
        <Layout>
            <div style={{ paddingTop: 60 }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="number"
                                    label="Телефон"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth label="Пароль" type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                            <ButtonCustom text="Войти" onClick={() => { sendLogin() }} />
                            <Box style={{ marginTop: 10 }}>
                                <Link to="/auth/forgot-password" >
                                    Забыли пароль?
                                </Link>
                            </Box>
                            <Box style={{ marginTop: 8 }}>
                                <Link to="/auth/register" >
                                    Зарегистрироваться
                                </Link>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
