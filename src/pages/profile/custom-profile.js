import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, TextField } from '@material-ui/core'

import CustomProfileList from '../../formList/CustomProfileList'
import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20
    },
    textFieldBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'start'
        },
    },
    TextFieldStyle: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    textFieldBox_labelBox: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))

const CustomProfile = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">Редактировать профиль</Typography>
                <Box className={classes.inputContainer}>
                    {CustomProfileList ? CustomProfileList().map((item, index) => (
                        <Box className={classes.textFieldBox} key={index}>
                            <Box className={classes.textFieldBox_labelBox}>
                                <Typography>{item.label}</Typography>
                            </Box>
                            <TextField
                                size="small"
                                className={classes.TextFieldStyle}
                                name={item.fetchLabel}
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </Box>
                    )) : ''}
                </Box>
                <Box style={{ marginTop: 50 }}>
                    <ButtonCustom text="Сохранить" />
                </Box>
            </Box>
        </Layout>
    )
}

export default CustomProfile