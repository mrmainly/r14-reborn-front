import React, { useContext } from 'react'
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { DispatchContext } from '../../store';

import themeMain from '../../theme'

const useStyles = makeStyles((theme) => ({
    link_Style: {
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            height: 50,
            fontSize: 12,
        },
        borderLeft: '2px solid  #FFEAF4',
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        width: 150,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    down_block: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',

    },
    header_down: {
        background: themeMain.palette.background.layoutBackground
    },
    up_block: {
        minHeight: 230,
        background: themeMain.palette.background.slogoBackground,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50
        },
    },
    line_box: {
        width: 2,
        height: 35,
        border: "1px solid #DCE0F3",
        [theme.breakpoints.down('xs')]: {
            height: 50
        },
    },
    link_box: {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer'
    },
    up_block__logo: {
        marginBottom: '-5px'
    },
    up_block_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        },
    },
    up_block__info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        [theme.breakpoints.down('sm')]: {
            marginTop: 30
        },
    },
    textStlye: {
        color: '#BEB5DA'
    },
    title: {
        marginTop: 30,
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            marginTop: 0
        },
    }
}))

const UnderHeader = () => {
    const dispatch = useContext(DispatchContext)
    const headersData = [
        {
            link: 'onstatus=false',
            title: 'Жду звонка'
        },
        {
            link: '#',
            title: 'Реальные фото'
        },
        {
            link: 'express=true',
            title: 'Экспресс(30 мин)'
        },
        {
            link: 'check_out_per_hour_bool=true&check_out_per_two_hours_bool=true&check_out_per_night_bool=true',
            title: 'По вызову',
            showLine: true
        }
    ];

    const classes = useStyles()
    return (
        <div >
            <Box className={classes.up_block}>
                <Container className={classes.up_block_container}>
                    <Box className={classes.up_block__info}>
                        <Typography variant="body2" className={classes.textStlye}>
                            +18 Если вы не достигли совершеннолетнего возраста, немедленно покиньте сайт!
                        </Typography>
                        <Typography variant="h2" className={classes.title}>
                            ЛУЧШИЕ. СЕЙЧАС.
                        </Typography>
                        <Typography variant="body2" className={classes.textStlye}>
                            Секс знакомства в Якутске
                        </Typography>
                    </Box>
                    <Box className={classes.up_block__logoBox}>
                        <img src={'/image/rabbit4.png'} className={classes.up_block__logo} />
                    </Box>
                </Container>
            </Box>
            <Box className={classes.header_down}>
                <Container>
                    <Box className={classes.down_block}>
                        {headersData.map((item, index) => (
                            <div className={classes.link_box} key={index} onClick={() => {
                                dispatch({ type: 'slogoDispatch', payload: { params: item.link } })
                            }}>
                                <div className={classes.link_Style} >
                                    {item.title}
                                </div>
                                {item.showLine &&
                                    <div className={classes.line_box}>
                                    </div>
                                }
                            </div>
                        ))}
                    </Box>
                </Container>
            </Box>
        </div >
    )
}

export default UnderHeader