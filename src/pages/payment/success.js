import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import { ButtonCustom, Layout } from '../../components'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'column'
    }
}))

const Success = () => {
    const classes = useStyles()
    const router = useHistory()
    return (
        <Layout>
            <div className={classes.container}>
                <Typography variant="h5" style={{ marginBottom: 20 }}>Оплата прошла успешно</Typography>
                <ButtonCustom text="Перейти на главную страницу" onClick={() => { router.push('/') }} />
            </div>
        </Layout>
    )
}

export default Success
