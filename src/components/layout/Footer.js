import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Box } from '@material-ui/core'

import themeMain from '../../theme'

const useStyles = makeStyles((theme) => ({
    footer_container: {
        background: themeMain.palette.background.layoutBackground,
        minHeight: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    under_footer_container: {
        borderTop: '1px solid #FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        width: '100%'
    },
    up_footer_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    img_box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 10
        },
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer_container}>
            <Container>
                <Grid container className={classes.up_footer_container}>
                    <Grid item lg={2} sm={12} md={2} xl={1} xs={12} className={classes.img_box}>
                        <img src={'/image/Frame182.png'} />
                    </Grid>
                    <Grid item lg={10} sm={12} md={10} xl={11} xs={12}>
                        <Typography>
                            ДАННЫЙ САЙТ ПРЕДНАЗНАЧЕН ДЛЯ ОБЩЕНИЯ И ПОИСКА ЛЮДЕЙ ПО ИНТЕРЕСАМ, И ТОЛЬКО ДЛЯ ЛИЦ СОВЕРШЕННОЛЕТНЕГО ВОЗРАСТА!<br /> Администрация сайта не размещает анкеты и ответственности за их содержание не несет!
                        </Typography>
                    </Grid>
                </Grid>
                <Box className={classes.under_footer_container}>
                    <Typography>
                        2021 © yakutsk14.biz — Дырявое Племя Якутска
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Footer