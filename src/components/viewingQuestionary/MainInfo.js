import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import axios from 'axios'

import { DispatchContext } from '../../store'
import themeMain from '../../theme'
import ButtonCustom from '../customElements/ButtonCustom'
import ImgModal from '../modal/ImgModal'
import API from '../../utils/api'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    statusBox: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%'
    },
    phoneAndIdBlock: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    InfoBox: {
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
    },
    InfoBox_mainText: {
        height: 210,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
    },
    fileChooseContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    fileChooseBox: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    boxButton: {
        marginLeft: 15,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginTop: 10
        },
    },
    img: {
        width: '100%',
        height: 380,
        objectFit: 'cover',
        cursor: 'pointer',
    },
    imgContainer: {
        marginTop: 16,
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    soImgBox: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: 3,
            marginRight: 3
        },
    },
    soImg: {
        width: '90%',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))

const MainInfo = (props) => {
    const classes = useStyles()
    const [photo, setPhoto] = useState()
    const [open, setOpen] = useState(false)
    const dispatch = useContext(DispatchContext)
    const statusBlogBackground = (propsData) => {
        switch (propsData) {
            case 3:
                return themeMain.palette.statusColor.premium
                break;
            case 2:
                return themeMain.palette.statusColor.vip
                break;
            case 1:
                return themeMain.palette.statusColor.common
                break;
            default:
                return '#ccc8c8'
        }
    }
    const statusName = (propsData) => {
        switch (propsData) {
            case 3:
                return 'PREMIUM'
                break;
            case 2:
                return 'VIP'
                break;
            case 1:
                return 'COMMON'
                break;
            default:
                return 'Нет активности'
        }
    }
    const sendPhoto = async (type) => {
        var formData = await new FormData();
        await formData.append("image", 'hop');
        API.sendPhoto('man', {
            id: props.id,
            formData,
            is_main: type == 'mainPhoto' ? true : false,
            survey: props.id
        })
        console.log(formData)
    }
    const fileSelectHandler = (e) => {
        setPhoto(e.target.files[0])
    }
    return (
        <div className={classes.container}>
            <ImgModal setOpen={setOpen} open={open} statusUser={props.statusUser} />
            <Box className={classes.statusBox} style={{ background: `${statusBlogBackground(props.status ? props.status.name : 4)}` }}>
                <Typography variant="h6">{statusName(props.status ? props.status.name : 'Нет активности')}</Typography>
            </Box>
            <Grid container>
                <Grid item lg={4} sm={5} md={4} xl={4} xs={12}>
                    <img src={props.mainPhoto ? props.mainPhoto.main_file : '/image/XVP.jpg'} className={classes.img} onClick={() => {
                        setOpen(true)
                        if (props.mainPhoto) {
                            dispatch({ type: 'photo', payload: { name: props.mainPhoto.main_file, id: props.mainPhoto.id, type: 'main' } })
                        }
                        else {
                            dispatch({ type: 'photo', payload: { name: '/image/XVP.jpg' } })
                        }
                    }} />
                </Grid>
                <Grid item lg={8} sm={7} md={8} xl={8} xs={12} className={classes.InfoBox}>
                    <Typography variant="h6">{props.name}</Typography>
                    <Box className={classes.phoneAndIdBlock}>
                        <Typography variant="body1" style={{ color: '#302DD2' }}>
                            {props.status ? props.phone : 'Не активен'}
                        </Typography>
                        <Typography variant="body2">
                            ID: {props.id}
                        </Typography>
                    </Box>
                    <Box className={classes.InfoBox_mainText}>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                    </Box>
                    <Grid container className={classes.imgContainer}>
                        {props.photos.map((itemImage, index) => (
                            <Grid key={index} item lg={3} sm={3} md={3} xl={3} xs={5} className={classes.soImgBox}>
                                <img src={itemImage.file} className={classes.soImg} onClick={() => {
                                    setOpen(true)
                                    dispatch({ type: 'photo', payload: { name: itemImage.file, id: itemImage.id, type: 'common' } })
                                }} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <div style={{ width: '100%' }}>
                    <div className={classes.fileChooseBox}>
                        <Typography variant="h6">Обычное фото</Typography>
                        <div className={classes.fileChooseContent}>
                            <TextField
                                size="small"
                                variant="outlined"
                                required
                                fullWidth
                                type='file'
                                accept=".png, .jpg"
                                onChange={(event) => {
                                    fileSelectHandler(event)
                                }}
                            />
                            <div className={classes.boxButton}>
                                <ButtonCustom text="Закачать" onClick={() => { sendPhoto() }} />
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Typography variant="h6">Главное фото</Typography>
                            <div className={classes.fileChooseContent}>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type='file'
                                    accept=".png, .jpg"
                                    onChange={(event) => {
                                        fileSelectHandler(event)
                                    }}
                                />
                                <div className={classes.boxButton}>
                                    <ButtonCustom text="Закачать" onClick={() => { sendPhoto('mainPhoto') }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Grid>
        </div>
    )
}

export default MainInfo