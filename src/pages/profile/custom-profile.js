import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import { Form } from '../../components/customElements/Form'
import { Input } from '../../components/customElements/Input'
import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'
import API from '../../utils/api'
import { DispatchContext } from '../../store'

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
    },
    inputBox: {
        marginTop: 20
    }
}))

const CustomProfile = () => {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        API.changePassword(dispatch, data)
    }
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6">Редактировать профиль</Typography>
                <Form className={classes.inputContainer} onSubmit={handleSubmit(onSubmit)}>
                    <Box className={classes.inputBox}>
                        <Input {...register('old_password')} id="old_password" type="password" label="Текущий пароль" />
                    </Box>
                    <Box className={classes.inputBox}>
                        <Input {...register('new_password')} id="new_password" type="password" label="Новый пароль" />
                    </Box>
                    <Box style={{ marginTop: 20 }}>
                        <ButtonCustom text="Изменить" />
                    </Box>
                </Form>
            </Box>
        </Layout>
    )
}

export default CustomProfile