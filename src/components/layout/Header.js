import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Drawer,
    MenuItem,
    Box,
    Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory, Link } from 'react-router-dom'
import cookie from 'js-cookie'

import themeMain from '../../theme'
import ButtonCustom from '../customElements/ButtonCustom'
import UnderHeader from './UnderHeader'

const headersData = [
    {
        title: 'Девушки',
        link: '/',
    },
    {
        title: 'Парни',
        link: '/mainListGuys',
    },
    {
        title: 'Фирмы досуга',
        link: '/mainListFirms',
    },
    {
        link: '/reviews',
        title: 'Отзывы',
    },
    {
        link: '/selectionGirls',
        title: 'Подбор анкеты',
    },
];

const useStyles = makeStyles((theme) => ({
    header: {
        "@media (max-width: 960px)": {
            paddingLeft: 0,
            background: themeMain.palette.background.layoutBackground,
        },
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
        },
    },
    drawerContainer: {
        padding: "20px 30px",
        color: 'white',
        height: '100%',
        background: '#FFEAF4',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            color: 'black'
        },
    },
    up_block: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #FFC2E7',
        paddingBottom: 10,

    },
    up_block__rightContent: {
        display: 'flex',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
        },
    },
    full_screen: {
        background: themeMain.palette.background.layoutBackground,
        paddingTop: 10
    },
    menuItem_style: {
        color: 'white',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 5,
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 4,
            color: 'black',
            background: 'white',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
        },
    },
    linkStyle: {
        textDecoration: 'none',
        marginRight: 10
    },
    down_block: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    drawerLink: {
        fontSize: 18,
        borderRadius: 4,
        marginTop: 10,
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
    },
    linkBlock: {
        display: 'flex',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-5px',
        },
    }
}));

export default function Header() {
    const classes = useStyles();
    const router = useHistory()
    let jsCookie = cookie.get('jwttoken')

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const rightBlock = () => {
        return (
            <Box className={classes.up_block__rightContent}>
                {jsCookie ?
                    <Box className={classes.linkBlock}>
                        <Link to="/profile" className={classes.linkStyle}>
                            <MenuItem className={classes.menuItem_style}>
                                Личный кабинет
                            </MenuItem>
                        </Link>
                        <MenuItem className={classes.menuItem_style} onClick={() => {
                            cookie.remove('jwttoken')
                            router.push('/')
                        }}>
                            Выйти
                        </MenuItem>
                    </Box>
                    :
                    <Link to="/auth/login" className={classes.linkStyle}>
                        <MenuItem className={classes.menuItem_style}>
                            Авторизация
                        </MenuItem>
                    </Link>
                }
                <ButtonCustom text="Добавить анкету" onClick={() => { jsCookie ? router.push('/questionary/added') : router.push('/auth/login') }} />
            </Box>
        )
    }
    const logo = () => {
        return (
            <img style={{ cursor: 'pointer' }} src={'/image/logo12.png'} onClick={() => {
                router.push('/')
            }} />
        );
    };
    const displayDesktop = () => {
        return (
            <div className={classes.full_screen}>
                <Container >
                    <Box className={classes.up_block}>
                        {logo()}
                        {rightBlock()}
                    </Box>
                    <Box className={classes.down_block}>
                        {headersData.map((item, index) => (
                            <Link to={item.link} key={index} className={classes.linkStyle}>
                                <MenuItem className={classes.menuItem_style} >
                                    {item.title}
                                </MenuItem>
                            </Link>
                        ))}
                    </Box>
                </Container>
            </div>
        );
    };


    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: 'white' }}
                >
                    <MenuIcon />
                </IconButton>
                <div onClick={() => {

                }}>{logo()}</div>
                <Drawer
                    {...{
                        anchor: "top",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer} >{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return (
            <>
                {headersData.map((item, index) => {
                    return (
                        <Link
                            href={item.link}
                            key={index}
                            className={classes.linkStyle}
                        >
                            <MenuItem className={classes.drawerLink}>
                                {item.title}
                            </MenuItem>
                        </Link>
                    );
                })}
                {rightBlock()}
            </>
        )
    };
    return (
        <header>
            <AppBar className={classes.header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
            <UnderHeader />
        </header>
    );
}