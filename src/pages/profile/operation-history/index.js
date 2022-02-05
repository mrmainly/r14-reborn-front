import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

import TableTransaction from '../../../components/table/TableTransaction'
import TransactionTableData from '../../../formList/TransactionTableData'
import Layout from '../../../components/layout'

const useStyles = makeStyles(() => ({
    container: {
        padding: 20
    }
}))

const OperationHistory = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">История операций</Typography>
                <Box>
                    <TableTransaction tableData={TransactionTableData} />
                </Box>
            </Box>
        </Layout>
    )
}

export default OperationHistory