import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'

import themeMain from '../../theme'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 20,
    },
    RateBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15,
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto'
        },
    },
    RateBox__item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        marginTop: 10,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    RateBox__elementValue: {
        color: '#00C366',
    },
    RateBox__title: {
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
    }
}))

const SexualPreferenceList = (props) => {
    const classes = useStyles()
    console.log(props)
    const arrayRate = [
        {
            title: 'Основные:',
            elements: [
                {
                    elementName: 'Секс классический',
                    elementValue: props.classic_sex,
                },
                {
                    elementName: 'Минет в презервативе',
                    elementValue: props.blowjob_in_a_condom,
                },
            ]
        },
        {
            title: 'Дополнительные:',
            elements: [
                {
                    elementName: 'Куннилингус',
                    elementValue: props.cunnilingus
                },
                {
                    elementName: 'Глубокий минет',
                    elementValue: props.deep_blowjob
                },
                {
                    elementName: 'минет без презерватива',
                    elementValue: props.blowjob_without_an_elastic_band
                },
                {
                    elementName: 'Секс в позе 69',
                    elementValue: props.pose_69
                },
                {
                    elementName: 'Окончание на грудь',
                    elementValue: props.cunnilingus
                },
                {
                    elementName: 'Окончание на лицо',
                    elementValue: props.cum_on_the_face
                },
                {
                    elementName: 'Окончание в рот',
                    elementValue: props.cum_in_the_mouth
                },
                {
                    elementName: 'Секс игрушки',
                    elementValue: props.toys
                },
                {
                    elementName: 'Ролевые игры',
                    elementValue: props.role_playing_games
                },
                {
                    elementName: 'Секс в семейной паре',
                    elementValue: props.role_playing_games
                },
                {
                    elementName: 'Эксорт услуги',
                    elementValue: props.escort
                },
                {
                    elementName: 'Стриптиз',
                    elementValue: props.striptease
                },
                {
                    elementName: 'Лесби-шоу',
                    elementValue: props.lesbian_show_is_easy
                },
                {
                    elementName: 'Фото и видео съемка',
                    elementValue: props.photo_and_video_shooting
                },
                {
                    elementName: 'Секс анальный',
                    elementValue: props.anal_sex,
                },
                {
                    elementName: 'Секс втроем',
                    elementValue: props.threesome_sex
                },
                {
                    elementName: 'Секс лесбийский',
                    elementValue: props.lesbian_sex,
                },
                {
                    elementName: 'Секс в машине',
                    elementValue: props.sex_in_the_car
                },
            ]
        },
    ]
    const arraySecond = [
        {
            title: 'Массаж:',
            elements: [
                {
                    elementName: 'Классический',
                    elementValue: props.classic_massage,
                },
                {
                    elementName: 'Расслабляющий',
                    elementValue: props.relaxing_massage,
                },
                {
                    elementName: 'Эротический',
                    elementValue: props.erotic_massage,
                },
                {
                    elementName: 'Профессиональный',
                    elementValue: props.professional_massage,
                },
                {
                    elementName: 'Урологический',
                    elementValue: props.urological_massage,
                },
                {
                    elementName: 'Боди массаж',
                    elementValue: props.body_massage,
                },
                {
                    elementName: 'Ветка сакуры',
                    elementValue: props.sakura_branch,
                },
            ]
        },
        {
            title: 'Садо-мазо:',
            elements: [
                {
                    elementName: 'Госпожа',
                    elementValue: props.madam,
                },
                {
                    elementName: 'Рабыня',
                    elementValue: props.slave_girl
                },
                {
                    elementName: 'Лекгая доминация',
                    elementValue: props.easy_domination
                },
                {
                    elementName: 'Бандаж',
                    elementValue: props.bandage
                },
                {
                    elementName: 'Порка',
                    elementValue: props.spanking
                },
                {
                    elementName: 'Фетиш',
                    elementValue: props.fetish
                },
                {
                    elementName: 'Трамплинг',
                    elementValue: props.trampling
                },
            ]
        },
        {
            title: 'Экстрим:',
            elements: [
                {
                    elementName: 'Страпон',
                    elementValue: props.strap_on,
                },
                {
                    elementName: 'Делаю анилингус',
                    elementValue: props.i_do_anilingus
                },
                {
                    elementName: 'Выдаю золотой дождь',
                    elementValue: props.golden_rain_issue,
                },
                {
                    elementName: 'Принимаю золотой дождь',
                    elementValue: props.golden_rain_reception
                },
                {
                    elementName: 'Копрофагия выдача',
                    elementValue: props.coprophagia_issue
                },
                {
                    elementName: 'Копрофагия прием',
                    elementValue: props.coprophagia_reception
                },
                {
                    elementName: 'Фистинг анальный',
                    elementValue: props.anal_fisting
                },
                {
                    elementName: 'Фистинг классический',
                    elementValue: props.classic_fisting
                },
            ]
        },
    ]

    const checkExistElements = (elements) => {
        let status = elements.some((item) => {
            return item.elementValue !== null
        })
        return status
    }

    return (
        <div className={classes.container}>
            <Typography variant="h6">Сексуальные предпочтения:</Typography>
            <Grid className={classes.RateBox} container>
                <Grid lg={6} sm={12} md={6} xl={6} xs={12} item>
                    {arrayRate.map((itemRate, index) => (
                        <Box style={{ width: '100%' }} key={index}>
                            {checkExistElements(itemRate.elements) ?
                                <Box className={classes.RateBox__title}>
                                    <Typography style={{ fontWeight: 'bold' }}>{itemRate.title}</Typography>
                                    {itemRate.elements.map((itemElem, index) => (
                                        <Box style={{ width: '100%' }} key={index}>
                                            {itemElem.elementValue !== null ?
                                                <Box className={classes.RateBox__item}>
                                                    <Typography variant="body2">
                                                        {itemElem.elementName}
                                                    </Typography>
                                                    <Typography variant="body2" className={classes.RateBox__elementValue}>
                                                        {itemElem.elementValue} руб
                                                    </Typography>
                                                </Box>
                                                : ''}
                                        </Box>
                                    ))}
                                </Box>
                                : ''}
                        </Box>
                    ))}
                </Grid>
                <Grid lg={6} sm={12} md={6} xl={6} xs={12} item>
                    {arraySecond.map((itemRate, index) => (
                        <Box style={{ width: '100%' }} key={index}>
                            {checkExistElements(itemRate.elements) ?
                                <Box className={classes.RateBox__title}>
                                    <Typography style={{ fontWeight: 'bold' }}>{itemRate.title}</Typography>
                                    {itemRate.elements.map((itemElem, index) => (
                                        <Box style={{ width: '100%' }} key={index}>
                                            {itemElem.elementValue !== null ?
                                                <Box className={classes.RateBox__item} >
                                                    <Typography variant="body2">
                                                        {itemElem.elementName}
                                                    </Typography>
                                                    <Typography variant="body2" className={classes.RateBox__elementValue}>
                                                        {itemElem.elementValue} руб
                                                    </Typography>
                                                </Box>
                                                : ''}
                                        </Box>
                                    ))}
                                </Box>
                                : ''}
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default SexualPreferenceList