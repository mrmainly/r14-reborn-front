import React, { useState, useContext } from 'react'
import { MenuItem, Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, Link } from 'react-router-dom'

import themeMain from '../../theme'
import ButtonCustom from '../customElements/ButtonCustom'
import { DispatchContext } from '../../store';
import API from '../../utils/api'
import PaymentModal from '../modal/PaymentModal';


const useStyles = makeStyles((theme) => ({
    side_bar_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: 500,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        width: 250,
        flexDirection: 'column',
        padding: 10,
        marginLeft: 10,
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            backgroundColor: 'white',
            top: 500,
            right: 40,
            zIndex: 1
        },
        [theme.breakpoints.down('xs')]: {
            top: 615,
            right: 25
        },
    },
    link_style: {
        color: themeMain.palette.linkStyle.pink,
    },
    title_style: {
        marginLeft: 15,

    },
    side_bar_box: {
        marginTop: 10,
    },
    buttonShow: {
        cursor: 'pointer',
        marginLeft: 10,
        paddingTop: 5,
        width: 'max-content',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'row',
        },
        [theme.breakpoints.down('xs')]: {
            top: 605,
        },
    },
    paymentBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 18
    },
    paymentBox_title: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    titleBox: {
        display: 'flex',
        flexDiraction: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        paddingLeft: 15,
        color: themeMain.palette.linkStyle.pink
    }
}))

const SidePanel = (props) => {
    const classes = useStyles()
    const router = useHistory()
    const [drawerState, setDrawerState] = useState(true)
    const [open, setOpen] = useState(false)
    const [balance, setBalance] = useState(0)
    const dispatch = useContext(DispatchContext)
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960) {
                setDrawerState(false)
            }
            if (window.innerWidth > 960) {
                setDrawerState(true)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        API.getBalance().then(res => {
            console.log('balance', res.data)
            setBalance(res.data.balance)
        })
    }, [])
    const objectBarContent = [
        {
            title: 'Мои анкеты',
            allLinks: [
                {
                    text: `Все анкеты`,
                    value: '',
                    type: 'button'
                },
                {
                    text: `Анкеты девушки`,
                    value: 'woman',
                    type: 'button'
                },
                {
                    text: `Анкеты парней`,
                    value: 'man',
                    type: 'button'
                },
                {
                    text: `Анкеты фирмы досуга`,
                    value: 'organisation',
                    type: 'button'
                }
            ]
        },
        {
            title: 'Меню пользователя',
            allLinks: [{
                text: `Стоимость услуг`,
                value: '/servic-cost-profile'
            },
            {
                text: 'Вопросы и ответы',
                value: '/faq-profile'
            },
            {
                text: 'Проверочные фото',
                value: '/verification-photo-profile'
            }]
        },
        {
            title: 'Мой профиль',
            allLinks: [{
                text: 'История операций',
                value: '/operation-history-profile'
            },
            ]
        },
        {
            title: 'Тех поддержка',
            allLinks: [{
                text: 'Написать в теx. поддержку',
                value: '/tech-support-profile'
            },
            ]
        },
    ]

    return (
        <div>
            <PaymentModal open={open} setOpen={setOpen} />
            <Box className={classes.buttonShow} onClick={() => { setDrawerState(!drawerState) }}>
                <Typography>Меню</Typography>
                {drawerState ?
                    <ExpandLessIcon />
                    : <ExpandMoreIcon />
                }
            </Box>
            {drawerState &&
                <div className={classes.side_bar_container}>
                    <Box className={classes.paymentBox}>
                        <Box className={classes.paymentBox_title}>
                            <Typography variant="body1">Баланс:</Typography>
                            <Box className={classes.titleBox}><Typography variant="body1" style={{ color: '#D959DC', marginRight: 5, fontWeight: 'bold' }}>{balance}</Typography> <img src="/image/Frame3281.png" style={{ marginTop: '-5px' }} /></Box>
                        </Box>
                        <Box className={classes.paymentBox_ActionBox}>
                            <ButtonCustom text="Пополнить баланс" onClick={() => { setOpen(true) }} />
                        </Box>
                    </Box>
                    {objectBarContent.map((item, index) => (
                        <Box className={classes.side_bar_box} key={index}>
                            <Typography variant="body1" className={classes.title_style}>
                                {item.title}
                            </Typography>
                            {item.allLinks.map((itemAllLinks, index) => (
                                <Box style={{ width: '100%' }} key={index}>
                                    {itemAllLinks.type == 'button' ?
                                        <Button className={classes.btn} onClick={() => {
                                            if (router.pathname == "/profile") {
                                                dispatch({ type: 'sideBarSearch', payload: { mode: itemAllLinks.value } })
                                            } else {
                                                router.push('/profile')
                                                dispatch({ type: 'sideBarSearch', payload: { mode: itemAllLinks.value } })
                                            }
                                        }}>
                                            {itemAllLinks.text}
                                        </Button> :
                                        <Link to={itemAllLinks.value} style={{ textDecoration: 'none' }}>
                                            <MenuItem className={classes.link_style}>
                                                {itemAllLinks.text}
                                            </MenuItem>
                                        </Link>
                                    }
                                </Box>
                            ))}
                        </Box>
                    ))}
                </div>
            }
        </div>

    )
}

export default SidePanel