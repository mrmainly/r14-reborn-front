import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'

import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'

const useStyles = makeStyles(() => ({
    container: {
        padding: 20
    },
    verBox: {
        padding: 20,
        boxShadow: '1px 2px 12px rgba(0, 0, 0, 0.25)',
        minHeight: 300,
        width: '100%',
        borderRadius: '15px 0px',
        marginTop: 20
    }
}))

const VerificationPhoto = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">Проверочные фото</Typography>
                <Box className={classes.verBox}>
                    <Typography variant="body1">Александр Рапира</Typography>
                    <Grid container>
                        <Grid item>

                        </Grid>
                    </Grid>
                    <Box style={{ marginTop: 20 }}>
                        <ButtonCustom text="Отправить запрос на проверку" />
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default VerificationPhoto