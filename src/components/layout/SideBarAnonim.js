import React, { useState } from 'react'
import { Box, Typography, Button, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'

import themeMain from '../../theme'
import MenuAnonimList from '../../formList/MenuAnonimList';

const useStyles = makeStyles((theme) => ({
    side_bar_container: {
        display: 'flex',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        width: 280,
        flexDirection: 'column',
        padding: 10,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
        },
    },
    link_style: {
        color: themeMain.palette.linkStyle.pink,
    },
    title_style: {
        fontWeight: 'bold'
    },
    side_bar_box: {
        marginTop: 10,
        width: '100%',
    },
    buttonShow: {
        cursor: 'pointer',
        display: 'none',
        width: 'max-content',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row',
            float: 'right',
        },
    },
    titleBox: {
        display: 'flex',
        flexDiraction: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        width: '100%',
        marginTop: 10,
        border: '0.5px solid rgba(0, 0, 0, 0.25)',
        borderRadius: 4
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
}))

const SideBarAnonim = ({ getListGirls }) => {
    const classes = useStyles()
    const router = useHistory()
    const [drawerState, setDrawerState] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1280) {
                setDrawerState(true)
            }
            if (window.innerWidth > 1280) {
                setDrawerState(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])
    const body = () => {
        return (
            <div className={classes.side_bar_container}>
                {MenuAnonimList.map((item, index) => (
                    <Box className={classes.side_bar_box} key={index}>
                        <Typography variant="body1" className={classes.title_style}>
                            {item.title}
                        </Typography>
                        <Box className={classes.buttonBox}>
                            {item.row.map((itemRow, index) => (
                                <Box style={{ width: `${itemRow.width}%` }} key={index}>
                                    <Button className={classes.btn} onClick={() => {
                                        getListGirls(itemRow.value)
                                    }}>{itemRow.label}</Button>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </div>
        )
    }
    return (
        <div>
            <Box className={classes.buttonShow} onClick={() => { setDrawerOpen(true) }}>
                <Hamburger toggled={drawerOpen} />
            </Box>
            {drawerState ? <Drawer  {...{
                anchor: "left",
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            }}>{body()}</Drawer> : body()}
        </div >

    )
}

export default SideBarAnonim