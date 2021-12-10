import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid, TextareaAutosize } from '@material-ui/core'

import Layout from '../../components/layout'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20
    },
    contentBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardBox: {
        display: 'flex',
        flexDirection: 'space-between',
        minHeight: 200,
        border: '0.4px solid #000000',
        padding: 20,
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    cardBox_title: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 200
    },
    content: {
        width: '90%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: '100%',
        },
    },
    textAreaStyles: {
        width: '100%',
        marginTop: 5,
        '&:focus': {
            outline: "none",
        },
    },
    img: {
        width: 150,
        marginRight: 20,
    }
}))

const Reviews = ({ data }) => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">Отзывы и комментарии</Typography>
                <Grid container>
                    {data ? data.map((itemReviews, index) => (
                        <Grid key={index} item className={classes.cardBox} lg={12} sm={12} md={12} xl={12} xs={12}>
                            <img src={'/image/R.png'} className={classes.img} />
                            <Box className={classes.content}>
                                <Typography variant="body1">{itemReviews.name}</Typography>
                                <Box className={classes.cardBox_title}>
                                    <Typography variant="body2" >{new Date(itemReviews.date).toLocaleDateString()}</Typography>
                                </Box>
                                <TextareaAutosize className={classes.textAreaStyles} aria-label="maximum height" rowsMin={7} value={itemReviews.text} />
                            </Box>
                        </Grid>
                    )) : ''}
                </Grid>
            </Box>
        </Layout>
    )
}

export default Reviews