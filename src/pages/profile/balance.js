import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, TextField, Button, Grid, Checkbox } from '@material-ui/core'

import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'

const useStyles = makeStyles(() => ({
    continer: {
        display: 'flex',
        alignItems: 'start',
        padding: 15,
        flexDirection: 'column'
    },
    title: {
        marginBottom: 25
    },
    textFieldBox_labelBox: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 15
    },
    TextFieldStyle: {
        width: 150,
    },
    priceBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        margin: '0 auto'
    },
    cardBox: {
        marginBottom: 25
    },
    boxRadius: {
        width: 50,
        height: 50,
        backgroundColor: '#C4C4C4',
        borderRadius: 25
    },
    cardBox_inside: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: 70,
        boxShadow: '1px 2px 12px rgba(0, 0, 0, 0.25)',
        borderRadius: 8
    }
}))

const Balance = () => {
    const classes = useStyles()
    const arrayCards = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ]
    return (
        <Layout>
            <Box className={classes.continer}>
                <Box className={classes.titleBox}>
                    <Typography variant="h6" className={classes.title}>Пополнение баланса</Typography>
                    <Typography variant="body1">текстописание что делае переводит и пр наверн</Typography>
                </Box>
                <Box className={classes.priceBox}>
                    <Box className={classes.textFieldBox_labelBox}>
                        <Typography>Сумма:</Typography>
                    </Box>
                    <TextField size="small" variant="outlined" placeholder="0" type="number" className={classes.TextFieldStyle} />
                </Box>
                <Box>
                    <Typography variant="h6" className={classes.title}>Выберите способ оплаты:</Typography>
                </Box>
                <Grid container>
                    {arrayCards.map((item, index) => (
                        <Grid key={index} item lg={4} sm={12} md={4} xl={4} xs={12} className={classes.cardBox}>
                            <Box className={classes.cardBox_inside}>
                                <Checkbox />
                                <Box className={classes.boxRadius}></Box>
                                <Typography variant="body2">
                                    Карта
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <ButtonCustom onClick={() => { window.open('https://payeer.com/merchant/?m_shop=1497036404&m_orderid=12345&m_amount=1.00&m_curr=RUB&m_desc=VGVzdCBwYXltZW50IOKEljEyMzQ1&m_sign=B84D6D238D1334817F938EC33F344C72B9A2FEF70F5E122B1D7FA96BC49E3C96&lang=ru') }} text="Сформулировать счет" />
            </Box>
        </Layout>
    )
}

export default Balance
