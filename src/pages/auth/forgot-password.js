import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Grid } from '@material-ui/core'

import ButtonCustom from '../../components/customElements/ButtonCustom';
import Layout from '../../components/layout/Layout';

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
        minHeight: 100
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
    },
    captchaBox: {
        height: 50,
        width: '100%',
        backgroundColor: '#C4C4C4',
        paddingLeft: 15,
        display: 'flex',
        alignItems: 'center'
    },
    inputStyle: {
        marginTop: 10
    }

}));

export default function ForgotPassword() {
    const [newPassword, setNewPassword] = useState('')
    const [currentPassword, seCurrentPassword] = useState('')
    const classes = useStyles();

    return (
        <Layout>
            <div style={{ paddingTop: 60 }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Восстановление пароля
                    </Typography>
                    <div className={classes.form}>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Ваш логин, номер телефона или электронная почта</Typography>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="телефон"
                                        className={classes.inputStyle}
                                    />
                                </Grid>
                                <Grid item>
                                    <ButtonCustom text="Выслать новый пароль" />
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}