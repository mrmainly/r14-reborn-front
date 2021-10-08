import React from 'react'
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
        alignItems: 'center',
        flexDirection: 'row',
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
}))

const DataInfo = (props) => {
    const classes = useStyles()
    const arrayRate = [
        {
            elements: [
                {
                    elementName: 'Возврат:',
                    elementValue: `${props.age} лет`,
                },
                {
                    elementName: 'Вес:',
                    elementValue: `${props.weight} кг`,
                },
                {
                    elementName: 'Рост:',
                    elementValue: `${props.height} см`,
                },
                {
                    elementName: props.mansurvey !== null ? 'Длина члена' : 'Грудь',
                    elementValue: props.mansurvey !== null ? `${props.mansurvey.penis_length} см` : `${props.womansurvey.breast_size} размер`,
                },

            ]
        },
        {
            elements: [
                {
                    elementName: 'Волосы:',
                    elementValue: props.hair_color,
                },
                {
                    elementName: 'Национальность:',
                    elementValue: props.nationality,
                },
                {
                    elementName: 'Фигура:',
                    elementValue: props.body_type,
                },
                {
                    elementName: 'Ориентация:',
                    elementValue: props.orientation,
                }
            ]
        }
    ]
    return (
        <div className={classes.container}>
            <Typography variant="h6">Данные</Typography>
            <Grid container className={classes.RateBox}>
                {arrayRate.map((itemRate, index) => (
                    <Grid item lg={6} sm={12} md={6} xl={6} xs={12} key={index} className={classes.RateBox__title}>
                        {itemRate.elements.map((itemElem, index) => (
                            <Box style={{ width: '100%' }} key={index}>
                                {itemElem.elementValue !== null ?
                                    <Box className={classes.RateBox__item} key={index}>
                                        <Typography variant="body2">
                                            {itemElem.elementName}
                                        </Typography>
                                        <Typography variant="body2" >
                                            {itemElem.elementValue}
                                        </Typography>
                                    </Box>
                                    : ''}
                            </Box>
                        ))}
                    </Grid>
                ))
                }
            </Grid>
        </div>
    )
}

export default DataInfo