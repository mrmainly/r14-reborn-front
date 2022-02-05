import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

import { Layout, ButtonCustom } from '../../../components'

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

export default function Verification() {
    const classes = useStyles();
    const [showText, setShowText] = useState(false)
    return (
        <Layout>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Письмо с логином и паролем отправлено
                </Typography>
                <div className={classes.form}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                        <ButtonCustom text="Вход в личный кабинет" />
                    </Box>
                </div>
            </div>
        </Layout>
    );
}