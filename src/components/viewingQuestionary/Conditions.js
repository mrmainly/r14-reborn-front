import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'

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
    RateBox__box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    RateBox__item: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    }
}))

const Conditions = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant="h6">Условия:</Typography>
            <Grid container className={classes.RateBox}>
                <Grid item lg={7} sm={12} md={9} xl={9} xs={12} className={classes.RateBox__title}>
                    <Box className={classes.RateBox__box} >
                        <Typography variant="body2">
                            Выезжаю:
                        </Typography>
                        <div className={classes.RateBox__item}>
                            {props.check_out_apartment &&
                                <Typography variant="body2" >
                                    На квартиру,&nbsp;
                                </Typography>
                            }
                            {props.check_out_hotel &&
                                <Typography variant="body2" >
                                    в гостиницу,&nbsp;
                                </Typography>
                            }
                            {props.check_out_house &&
                                <Typography variant="body2" >
                                    в загородный дом,&nbsp;
                                </Typography>
                            }
                            {props.check_out_office &&
                                <Typography variant="body2" >
                                    в сауну&nbsp;
                                </Typography>
                            }
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Conditions