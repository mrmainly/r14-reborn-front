import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, TextareaAutosize, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { ButtonCustom } from '../index'
import api from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 20,
    },
    textAreaStyles: {
        width: '100%',
        height: 150,
        marginTop: 20,
        marginBottom: 20
    },
    TextFieldStyle: {
        width: 300,
        marginTop: 10,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    reviewsBox: {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        width: '100%',
        minHeight: 150,
        marginTop: 10,
        padding: 10
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    reviewsSendBox: {
        marginTop: 20
    }
}))

const RateInfo = ({ id, reviews, statusUser }) => {
    const classes = useStyles()
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const router = useHistory()
    const sendReviews = () => {
        api("api/v1/surveys/review/create").post(null, {
            survey: id,
            text: text,
            name: name
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className={classes.container}>
            {reviews.reviews1.length >= 1 ? <Typography variant="h6">Отзывы и комментарии</Typography> : ''}
            {reviews.reviews1.length >= 1 ? reviews.reviews1.map((item, index) => (
                <Box key={index} className={classes.reviewsBox}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h6">{item.name}</Typography>
                    </Box>
                    <Typography variant="body1">{item.text}</Typography>
                </Box>
            )) : ''}
            {statusUser !== 'whore' ?
                <Box className={classes.reviewsSendBox}>
                    <Typography variant="h6">Добавить комментарий</Typography>
                    <TextField
                        size="small"
                        variant="outlined"
                        required
                        fullWidth
                        className={classes.TextFieldStyle}
                        label="Ваше имя"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <TextareaAutosize
                        className={classes.textAreaStyles}
                        aria-label="maximum height"
                        minRows={12}
                        placeholder="Оставляйте отзыв только если Вы пользовались услугами данной девушки! Оскорбительные, неинформативные отзывы и вопросы не публикуются!"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
                    <ButtonCustom text="Добавить комментарий" onClick={() => { sendReviews() }} />
                    <Box style={{ marginTop: 20 }}>
                        <ButtonCustom text="< Вернуться к списку" onClick={() => { router.push('/') }} />
                    </Box>
                </Box>
                : ''}
        </div>
    )
}

export default RateInfo