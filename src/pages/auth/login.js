import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import ButtonCustom from '../../components/customElements/ButtonCustom';
import { DispatchContext } from '../../store';
import Layout from '../../components/layout/Layout';
import API from '../../utils/api'
import { Form } from '../../components/customElements/Form'
import { Input } from '../../components/customElements/Input'

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

const schema = yup.object().shape({
    phone: yup.string().required('обязательное поле'),
    password: yup.string().required('обязательное поле'),
})

// const normalizePhoneNumber = (value) => {

//     let phone = parsePhoneNumberFromString(value)
//     if (!phone) {
//         return value
//     }
//     return (
//         phone.formatInternational()
//     )
// }

export default function Login() {
    const classes = useStyles();
    const router = useHistory()
    const dispatch = useContext(DispatchContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        API.getToken({ ...data }, dispatch, router)
    }

    return (
        <Layout>
            <div style={{ paddingTop: 60 }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input {...register('phone')} id="phone" type="tel" label="Телефон" required />
                            </Grid>
                            <Grid item xs={12}>
                                <Input {...register('password')} required id="password" type="password" label="Пароль" />
                            </Grid>
                        </Grid>
                        <Box style={{ marginTop: 10 }}>
                            <ButtonCustom text="Войти" />
                        </Box>
                    </Form>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
        </Layout>
    );
}
