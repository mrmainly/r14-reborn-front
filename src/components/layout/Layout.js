import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core'
import { useHistory } from "react-router-dom";

import themeMain from '../../theme';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SidePanel from '../layout/SidePanel'
import Notification from '../customElements/Notification';

const useStyles = makeStyles((theme) => ({
    main_content: {
        background: themeMain.palette.background.contentBackground,
        minHeight: 700,
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'none'
        },
    },
    contentProfileActive: {
        display: 'flex',
        flexDirection: 'row-reverse'
    }
}))

const Layout = ({ children }) => {
    const router = useHistory()
    const classes = useStyles()
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, [])
    const changeShowSideBar = (pathName) => {
        if (pathName.match(/profile/g) || pathName.match(/questionary/g)) {
            return true
        } else {
            return false
        }
    }
    return (
        <React.Fragment>
            <div style={{ background: themeMain.palette.background.default, overflow: 'hidden' }}>
                <Notification />
                <ThemeProvider theme={themeMain}>
                    <CssBaseline />
                    <Header />
                    <Container>
                        <div className={classes.main_content}>
                            {changeShowSideBar(router.location.pathname) ?
                                <Grid container className={classes.contentProfileActive}>
                                    <Grid item lg={3} sm={12} md={3} xl={3} xs={12} >
                                        <SidePanel />
                                    </Grid>
                                    <Grid item lg={9} sm={12} md={9} xl={9} xs={12}>
                                        {children}
                                    </Grid>
                                </Grid>
                                : children}
                        </div>
                    </Container>
                    <Footer />
                </ThemeProvider>
            </div>
        </React.Fragment>
    );
}


export default Layout