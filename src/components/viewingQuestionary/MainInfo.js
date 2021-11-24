import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography, TextField } from '@material-ui/core'
import axios from 'axios'

import { DispatchContext } from '../../store'
import themeMain from '../../theme'
import ButtonCustom from '../customElements/ButtonCustom'
import ImgModal from '../modal/ImgModal'

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
        height: '100%',
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
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    soImg: {
        width: '96%',
        height: 230,
        cursor: 'pointer',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: 190
        },
        [theme.breakpoints.down('xs')]: {
            height: 160,
            width: '95%',
        },

    }
}))

const MainInfo = (props) => {
    const classes = useStyles()
    const [photo, setPhoto] = useState()
    const [open, setOpen] = useState(false)
    const MainPhoto = props.photos.filter(e => e.is_main == true)[0] ? props.photos.filter(e => e.is_main == true)[0].image : ''
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
                return 'PREMIUM'
            case 2:
                return 'VIP'
            case 1:
                return 'COMMON'
            default:
                return 'Нет активности'
        }
    }
    const sendPhoto = (type) => {
        let formData = new FormData()
        formData.append('image', photo)
        formData.append('is_main', false)
        formData.append('is_verify', true)
        formData.append('survey', props.id)
        axios.post(`https://rabbit14.site/api/surveys/${props.gender}/photos/load_photo/`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((res) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const fileSelectHandler = (e) => {
        setPhoto(e.target.files[0])
    }
    return (
        <div className={classes.container}>
            <ImgModal setOpen={setOpen} open={open} statusUser={props.statusUser} idSurvey={props.id} />
            <Box className={classes.statusBox} style={{ background: `${statusBlogBackground(props.status ? props.status.name : 4)}` }}>
                <Typography variant="h6">{statusName(props.status ? props.status.name : 'Нет активности')}</Typography>
            </Box>
            <Grid container>
                <Grid item lg={4} sm={6} md={4} xl={4} xs={12}>
                    <img src={MainPhoto ? MainPhoto : '/image/XVP.jpg'} className={classes.img} onClick={() => {
                        setOpen(true)
                        if (MainPhoto) {
                            dispatch({ type: 'photo', payload: { name: MainPhoto, id: props.photos.filter(e => e.is_main == true)[0].id, type: 'main', gender: props.gender } })
                        }
                        else {
                            dispatch({ type: 'photo', payload: { name: '/image/XVP.jpg', type: 'main', gender: props.gender } })
                        }
                    }} />
                </Grid>
                <Grid item lg={8} sm={6} md={8} xl={8} xs={12} className={classes.InfoBox}>
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
                </Grid>
            </Grid>
            <Grid container className={classes.imgContainer}>
                {props.photos.map((itemImage, index) => (
                    <Grid item key={index} lg={3} sm={3} md={3} xl={3} xs={6} style={{ display: itemImage.is_main ? 'none' : 'block' }}>
                        <img src={itemImage.image} className={classes.soImg} onClick={() => {
                            setOpen(true)
                            dispatch({ type: 'photo', payload: { name: itemImage.image, id: itemImage.id, type: 'common', gender: props.gender } })
                        }} />
                    </Grid>
                ))}
            </Grid>

            {props.statusUser == 'whore' ?
                <div style={{ width: '100%' }}>
                    <div className={classes.fileChooseBox}>
                        <Typography variant="h6">Добавить фото</Typography>
                        <div className={classes.fileChooseContent}>
                            <TextField
                                size="small"
                                variant="outlined"
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
                    </div>
                </div>
                : ''}
        </div >
    )
}

export default MainInfo