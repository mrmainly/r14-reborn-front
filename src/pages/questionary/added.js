import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'

import { ButtonCustom, Layout } from '../../components'
import themeMain from '../../theme'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            padding: 5
        },
    },
    textStyle: {
        marginTop: 5,
        fontSize: 18
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    copyright: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        [theme.breakpoints.down('xs')]: {
            padding: 15
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const Added = () => {
    const classes = useStyles()
    const router = useHistory()
    const textList = [
        'Чтобы иметь возможность добавлять анкеты на сайт, Вам нужно обязательно ознакомиться с условием размещения анкет:',
        '  На сайте разрешено размещать только анкеты типа девушки, парня и фирмы досуга! Анкеты с рекламой кукол, игрушек, контрацептивов, сдача квартир, поиск сотрудниц и тп будут навсегда заблокированы!',
        ' Одному рекламодателю запрещено регистрировать более одного аккаунта. При обнаружении нескольких аккаунтов, принадлежащих одному лицу - все аккаунты будут заблокированы;',
        ' Запрещено размещение анкет девушек, парней младше 18 лет;',
        ' Размещение анкет только платное (подробности в личном кабинете);',
        ' Запрещено размещать информацию или данные, которые являются незаконными, вредоносными, чужими, нарушают чьи-либо авторские права, содержат оскорбления в адрес третьих лиц;',
        ' Размещенная вами информация в анкете может быть проверена в любое время и в случае несоответствия действительности, может быть изменена администрацией сайта по своему усмотрению;',
        '  Запрещено размещать информацию о третьих лицах без их согласия;',
        '  Категорически запрещено использовать порно-фотографии! Фото должны быть хорошего качества, и не должны содержать посторонних значков, текста, номера телефона или адресов сайтов.',
    ]
    return (
        <Layout>
            <Box className={classes.container}>
                <Box>
                    <Typography className={classes.title} variant="h6">
                        Добавление анкеты
                    </Typography>
                    <ul>
                        {textList.map((item, index) => (
                            <li key={index} className={classes.textStyle}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Box>

                <Box className={classes.buttonBox}>
                    <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <ButtonCustom text={'Добавить анкету фирмы досуга'} onClick={() => router.push('/questionary/creating/creating-form-firms')} />
                    </Box>
                    <Box style={{ marginTop: 10 }} >
                        <ButtonCustom text={'Добавить анкету парня'} onClick={() => router.push('/questionary/creating/creating-form-guys')} />
                    </Box>
                    <Box style={{ marginTop: 10 }} >
                        <ButtonCustom text={'Добавить анкету девушки'} onClick={() => router.push('/questionary/creating/creating-form-girl')} />
                    </Box>
                </Box>

                <Box className={classes.copyright}>
                    <Typography>
                        Размещение анкет на сайте платное, подробности на странице стоимость и
                        <Link to={'/servic-cost-profile'} style={{ color: themeMain.palette.linkStyle.pink, marginLeft: 5 }}>
                            оплата услуг.
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Layout>
    )
}

export default Added