import React, { useContext } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'

import { DispatchContext } from '../../store';
import themeMain from '../../theme'
import ButtonCustom from '../customElements/ButtonCustom'
import API from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 20,
        borderRadius: 5,
    },
    cover: {
        height: 200,
    },
    fullCard: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px 10px 0px 10px',
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0
        },
    },
    phoneAndIdBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #B7B7B7',
        alignItems: 'start'
    },
    special: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #B7B7B7',
    },
    priceList: {
        display: 'flex',
        flexDirection: 'column',
    },
    descriptionBlog: {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
        height: 25,
        marginTop: 10,
        padding: 5,
        width: '100%',
        wordWrap: 'break-word',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        marginBottom: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    statusBlog: {
        minHeight: 20,
        padding: '5px 15px 5px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0px 10px 10px 10px',
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        },
    },
    secondCard: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
        },
    },
    fullContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        height: '100%'
    }
}));

export default function CardCastom(props) {
    const classes = useStyles();
    const router = useHistory()
    const dispatch = useContext(DispatchContext)
    const statusBlogBackground = (propsData) => {
        switch (propsData) {
            case 3:
                return themeMain.palette.statusColor.premium
            case 2:
                return themeMain.palette.statusColor.vip
            case 1:
                return themeMain.palette.statusColor.common
            default:
                return '#ccc8c8'
        }
    }
    const statusName = (propsData) => {
        switch (propsData) {
            case 3:
                return 'premium'
            case 2:
                return 'vip'
            case 1:
                return 'common'
            default:
                return 'Нет активности'
        }
    }
    const deleteSurvey = () => {
        API.deleteSurvey(props.gender, props.id)
    }
    return (
        <Card className={classes.root}>
            <Box className={classes.statusBlog} id="statusBlogId" style={{ background: `${statusBlogBackground(props.status ? props.status.name : 'Нету статуса')}` }}>
                <Typography variant="body1">
                    {props.name ? props.name : props.organisation}
                </Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="body1" style={{ textTransform: 'uppercase' }}>
                        {statusName(props.status ? props.status.name : 'Нет активности')}
                    </Typography>
                    {props.showUnderButton ?
                        <Box style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => { deleteSurvey() }}>
                            <DeleteIcon />
                        </Box>
                        : ''}
                </Box>
            </Box>
            <CardActionArea className={classes.fullCard} onClick={() => router.push(`/viewingPage/${props.id}`,
                { id: props.id, statusUser: props.statusUser, gender: props.gender },
            )}>
                <Grid container>
                    <Grid item lg={5} sm={12} md={5} xl={5} xs={12}>
                        <CardMedia
                            className={classes.cover}
                            alt="Contemplative Reptile"
                            image={props.main_photos ? props.main_photos.main_file : '/image/XVP.jpg'}
                            title="Contemplative Reptile"
                        />
                    </Grid>
                    <Grid item lg={7} sm={12} md={7} xl={7} xs={12} className={classes.mainContent}>
                        <Box className={classes.phoneAndIdBlock}>
                            <Typography variant="caption">
                                {props.status ? props.phone : 'Не активен'}
                            </Typography>
                            <Typography variant="caption">
                                ID: {props.id}
                            </Typography>
                        </Box>
                        <Box className={classes.fullContent}>
                            {props.gender !== 'organisation' ?
                                <Box className={classes.special}>
                                    <Typography variant="body1">
                                        Возраст: {props.age}
                                    </Typography>
                                    <Typography variant="body1">
                                        Рост: {props.height} см
                                    </Typography>
                                    <Typography variant="body1">
                                        Вес: {props.weight} кг
                                    </Typography>
                                    {props.breast_size ?
                                        <Typography variant="body1">
                                            Грудь: {props.breast_size} размер
                                        </Typography>
                                        : <Typography variant="body1">
                                            Длина члена: {props.penis_length} см
                                        </Typography>}
                                </Box>
                                : ''}
                            <Box className={classes.priceList}>
                                <Typography variant="body1">
                                    1 час: {props.apartment_per_hour ? props.apartment_per_hour : '-'} руб
                                </Typography>
                                <Typography variant="body1">
                                    2 час: {props.apartment_per_two_hours ? props.apartment_per_two_hours : '-'}  руб
                                </Typography>
                                <Typography variant="body1">
                                    Ночь: {props.apartment_per_night ? props.apartment_per_night : '-'} руб
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Box className={classes.descriptionBlog}>
                        {props.description}
                    </Box>
                </Grid>
            </CardActionArea>
            {
                props.showUnderButton ?
                    <Box className={classes.buttonBox}>
                        <Box >
                            <ButtonCustom text="Активировать анкету" onClick={() => {
                                props.setShowModal(true)
                                dispatch({ type: 'cardsId', payload: { id: props.id } })
                            }} />
                        </Box>
                        <Box className={classes.secondCard}>
                            <ButtonCustom text="Отключить комментарии" onClick={() => {
                                props.setShowModalRewiews(true)
                                dispatch({ type: 'cardsId', payload: { id: props.id } })
                            }} />
                        </Box>
                    </Box>
                    : ''
            }
        </Card >
    );
}