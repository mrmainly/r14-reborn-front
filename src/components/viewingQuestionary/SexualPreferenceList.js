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
    const womansurveyData = props.womansurvey
    const arrayRate = [
        {
            title: 'Основные:',
            elements: [
                {
                    elementName: 'Секс классический',
                    elementValue: womansurveyData.classic_sex,
                },
                {
                    elementName: 'Минет в презервативе',
                    elementValue: womansurveyData.blowjob_in_a_condom,
                },
            ]
        },
        {
            title: 'Дополнительные:',
            elements: [
                {
                    elementName: 'Куннилингус',
                    elementValue: womansurveyData.cunnilingus
                },
                {
                    elementName: 'Секс в позе 69',
                    elementValue: womansurveyData.pose_69
                },
                {
                    elementName: 'Окончание на грудь',
                    elementValue: womansurveyData.cunnilingus
                },
                {
                    elementName: 'Окончание на лицо',
                    elementValue: womansurveyData.cum_on_the_face
                },
                {
                    elementName: 'Окончание в рот',
                    elementValue: womansurveyData.cum_in_the_mouth
                },
                {
                    elementName: 'Секс игрушки',
                    elementValue: womansurveyData.toys
                },
                {
                    elementName: 'Ролевые игры',
                    elementValue: womansurveyData.role_playing_games
                },
                {
                    elementName: 'Секс в семейной паре',
                    elementValue: womansurveyData.role_playing_games
                },
                {
                    elementName: 'Эксорт услуги',
                    elementValue: womansurveyData.escort
                },
                {
                    elementName: 'Стриптиз',
                    elementValue: womansurveyData.striptease
                },
                {
                    elementName: 'Лесби-шоу',
                    elementValue: womansurveyData.lesbian_show_is_easy
                },
                {
                    elementName: 'Фото и видео съемка',
                    elementValue: womansurveyData.photo_and_video_shooting
                },
                {
                    elementName: 'Секс анальный',
                    elementValue: womansurveyData.anal_sex,
                },
                {
                    elementName: 'Секс втроем',
                    elementValue: womansurveyData.threesome_sex
                },
                {
                    elementName: 'Секс лесбийский',
                    elementValue: womansurveyData.lesbian_sex,
                },
                {
                    elementName: 'Секс в машине',
                    elementValue: womansurveyData.sex_in_the_car
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
                    elementValue: womansurveyData.classic_massage,
                },
                {
                    elementName: 'Расслабляющий',
                    elementValue: womansurveyData.relaxing_massage,
                },
                {
                    elementName: 'Эротический',
                    elementValue: womansurveyData.erotic_massage,
                },
                {
                    elementName: 'Профессиональный',
                    elementValue: womansurveyData.professional_massage,
                },
                {
                    elementName: 'Урологический',
                    elementValue: womansurveyData.urological_massage,
                },
                {
                    elementName: 'Боди массаж',
                    elementValue: womansurveyData.body_massage,
                },
                {
                    elementName: 'Ветка сакуры',
                    elementValue: womansurveyData.sakura_branch,
                },
            ]
        },
        {
            title: 'Садо-мазо:',
            elements: [
                {
                    elementName: 'Госпожа',
                    elementValue: womansurveyData.madam,
                },
                {
                    elementName: 'Рабыня',
                    elementValue: womansurveyData.slave_girl
                },
                {
                    elementName: 'Лекгая доминация',
                    elementValue: womansurveyData.easy_domination
                },
                {
                    elementName: 'Бандаж',
                    elementValue: womansurveyData.bandage
                },
                {
                    elementName: 'Порка',
                    elementValue: womansurveyData.spanking
                },
                {
                    elementName: 'Фетиш',
                    elementValue: womansurveyData.fetish
                },
                {
                    elementName: 'Трамплинг',
                    elementValue: womansurveyData.trampling
                },
            ]
        },
        {
            title: 'Экстрим:',
            elements: [
                {
                    elementName: 'Страпон',
                    elementValue: womansurveyData.strap_on,
                },
                {
                    elementName: 'Делаю анилингус',
                    elementValue: womansurveyData.i_do_anilingus
                },
                {
                    elementName: 'Выдаю золотой дождь',
                    elementValue: womansurveyData.golden_rain_issue,
                },
                {
                    elementName: 'Принимаю золотой дождь',
                    elementValue: womansurveyData.golden_rain_reception
                },
                {
                    elementName: 'Копрофагия выдача',
                    elementValue: womansurveyData.coprophagia_issue
                },
                {
                    elementName: 'Копрофагия прием',
                    elementValue: womansurveyData.coprophagia_reception
                },
                {
                    elementName: 'Фистинг анальный',
                    elementValue: womansurveyData.anal_fisting
                },
                {
                    elementName: 'Фистинг классический',
                    elementValue: womansurveyData.classic_fisting
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