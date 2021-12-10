import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'

import TableCustom from '../../components/table/TableCustom'
import TableContent from '../../arraysObjects/TableContent'
import Layout from '../../components/layout'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    tableContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    }
}))

const ServiceCost = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid className={classes.container} container>
                {TableContent ? TableContent.map((item, index) => (
                    <Grid key={index} item lg={11} sm={11} md={11} xl={11} xs={11} className={classes.tableContainer}>
                        <Typography >{item.title}</Typography>
                        <TableCustom rows={item.row} />
                    </Grid>
                ))
                    : 'нет таблиц'
                }
            </Grid>
        </Layout>
    )
}

export default ServiceCost