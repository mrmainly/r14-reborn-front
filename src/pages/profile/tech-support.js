import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, TextareaAutosize } from '@material-ui/core'

import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    textAreaStyles: {
        width: '100%',
        marginTop: 10,
        '&:focus': {
            outline: "none",
        },
    }
}))

const TechSupport = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">Редактировать профиль</Typography>
                <Box className={classes.inputContainer}>
                    <Typography variant="body1">Сообщение</Typography>
                    <TextareaAutosize className={classes.textAreaStyles} aria-label="maximum height" rowsMin={18} placeholder="Уважаемый рекламодатель! Задавайте свой вопрос максимально подробно! Если ваш вопрос касается анкеты, то обязательно указывайте ее номер!" />
                </Box>
                <Box style={{ marginTop: 20 }}>
                    <ButtonCustom text="Отправить" />
                </Box>
            </Box>
        </Layout>
    )
}

export default TechSupport