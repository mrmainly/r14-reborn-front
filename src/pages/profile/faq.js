import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Box } from '@material-ui/core'

import FaqContent from '../../arraysObjects/FaqContent'
import Layout from '../../components/layout'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        padding: 20
    },
    textBox: {
        marginTop: 10
    }
}))

const Faq = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container className={classes.container}>
                {FaqContent ? FaqContent.map((itemFaq, index) => (
                    <Grid item key={index} item lg={11} sm={11} md={11} xl={11} xs={11} className={classes.textBox}>
                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                            {itemFaq.title}
                        </Typography>
                        <Typography variant="body2">
                            {itemFaq.text}
                        </Typography>
                        {itemFaq.li ?
                            <Box style={{ marginTop: 5 }}>
                                <Typography variant="body2">
                                    {itemFaq.li.titleLi}
                                </Typography>
                                {itemFaq.li.ContentLi.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </Box> : ''}
                    </Grid>
                )) : 'faq is not def'}
            </Grid>
        </Layout>
    )
}

export default Faq