import React, { useReducer, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid, TextField, FormControlLabel, Checkbox, TextareaAutosize, FormControl, InputAdornment, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import surveyReducer from '../../../reducer/surveyReducer'
import GuysFormListFunction from '../../../formList/GuysFormList'
import ButtonCustom from '../../../components/customElements/ButtonCustom'
import { DispatchContext } from '../../../store'
import Layout from '../../../components/layout/Layout'
import API from '../../../utils/api'
import { useForm } from 'react-hook-form'
import { Form } from '../../../components/customElements/Form'
import { Input } from '../../../components/customElements/Input'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: 25,

    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
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
            width: '100%',
        },
    },
    TextFieldNumber: {
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    textFieldBox_labelBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        width: 'max-content'
    },
    textAreaStyles: {
        width: '60%',
        height: 100,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    checkBoxSurchargeContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    fileChooseBox: {
        width: '60%',
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    fileChooseContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnBox: {
        display: 'flex',
        float: 'left',
        marginTop: 20,
    },
    surchargeBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textFieldSurcharge: {
        width: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    selectInputStyle: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}))

const CreatingFormGuys = () => {
    const classes = useStyles()
    const router = useHistory()
    // const sendSurvayGays = () => {
    //     api('/api/surveys/').post(null, {
    //         ...formState,
    //         mansurvey: {
    //             ...formStateMan
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //         dispatchNoti({ type: 'notification', payload: { status: 'success', active: true, text: 'анкета создана' } })
    //         router.push('/profile')

    //     }).catch((e) => {
    //         console.log(e)
    //         dispatchNoti({ type: 'notification', payload: { status: 'error', active: true, text: 'ошибка в анкете' } })
    //     })
    // }
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        // API.sendSurveys('woman', router, { ...formState, womansurvey: { ...formStateGirl } }, dispatchNoti)
        console.log('sendData', data)
    }
    return (
        <Layout>
            <Form className={classes.container} onSubmit={handleSubmit(onSubmit)} >
                <Typography variant="h6" style={{ margin: '0 auto' }}>
                    Создание анкеты парня:
                </Typography>
                {GuysFormListFunction ? GuysFormListFunction().map((item, index) => (
                    <Box className={classes.formBox} key={index}>
                        <Box className={classes.titleBox}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.title}</Typography>
                            <Typography style={{ fontWeight: 'bold' }}>{item.titleSurcharge}</Typography>
                        </Box>
                        {item.row.map((itemForm, index) => (
                            <Grid key={index} style={{ width: '100%' }}>
                                {itemForm.type == 'input' ?
                                    <Box className={classes.textFieldBox}>
                                        <Box className={classes.textFieldBox_labelBox}>
                                            <Typography>{itemForm.label}</Typography>
                                            {itemForm.must &&
                                                <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                            }
                                        </Box>
                                        <Input
                                            {...register(itemForm.fetchLabel, { required: itemForm.must == true ? true : false })}
                                            id={itemForm.fetchLabel}
                                            aria-invalid={errors[itemForm.fetchLabel] ? "true" : "false"}
                                            type={itemForm.typeInput}
                                            className={classes.TextFieldStyle}
                                            helperText={errors[itemForm.fetchLabel] && errors[itemForm.fetchLabel].type == 'required' ? 'обязательное поле' : ''}
                                            error={!!errors[itemForm.fetchLabel]}
                                        />
                                    </Box>
                                    : itemForm.type == 'checkBox' ?
                                        <Box className={classes.checkBoxStyle}>
                                            <Typography>{itemForm.label}</Typography>
                                            {itemForm.list.map((itemCheckBoxList, index) => (
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label={itemCheckBoxList.labelCheckBox}
                                                    name={itemCheckBoxList.fetchLabel}
                                                    {...register(itemCheckBoxList.fetchLabel)}
                                                    key={index}
                                                />
                                            ))}
                                        </Box>
                                        : itemForm.description ?
                                            <Box>
                                                <Typography style={{ color: '#FF0000', marginTop: 10 }}>
                                                    {itemForm.description}
                                                </Typography>
                                            </Box>
                                            : itemForm.type == 'select' ?
                                                <div className={classes.textFieldBox}>
                                                    <Box className={classes.textFieldBox_labelBox}>
                                                        <Typography>{itemForm.label}:</Typography>
                                                        {itemForm.must &&
                                                            <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                                        }
                                                    </Box>
                                                    <FormControl className={classes.selectInputStyle}>
                                                        <InputLabel id="demo-simple-select-label">Выберите значение</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            aria-invalid={errors[itemForm.fetchLabel] ? "true" : "false"}
                                                            name={itemForm.fetchLabel}
                                                            defaultValue={itemForm.default}
                                                            {...register(itemForm.fetchLabel, { required: itemForm.must == true ? true : false })}
                                                        // helperText={errors[itemForm.fetchLabel] && errors[itemForm.fetchLabel].type == 'required' ? 'обязательное поле' : ''}
                                                        // error={!!errors[itemForm.fetchLabel]}
                                                        >
                                                            {
                                                                itemForm.selectArrey ? itemForm.selectArrey.map((itemOptions, index) => (
                                                                    <MenuItem key={index} value={itemOptions.optionValue}>{itemOptions.optionText}</MenuItem>
                                                                )) : 'itemForm.selectArrey undefiend'
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                </div> : itemForm.type == 'textArea' ?
                                                    <div style={{ display: 'flex', alignItems: 'start', marginTop: 20 }}>
                                                        <Box className={classes.textFieldBox_labelBox}>
                                                            {itemForm.must &&
                                                                <Typography style={{ color: 'red', marginRight: 5 }}>*</Typography>
                                                            }
                                                        </Box>
                                                        <TextField
                                                            id="outlined-multiline-static"
                                                            multiline
                                                            fullWidth
                                                            variant="outlined"
                                                            color='primary'
                                                            aria-label="maximum height"
                                                            minRows={10}
                                                            error={!!errors[itemForm.fetchLabel]}
                                                            placeholder="Ваше сообщение"
                                                            name={itemForm.fetchLabel}
                                                            {...register(itemForm.fetchLabel, { required: itemForm.must == true ? true : false })}
                                                            helperText={errors[itemForm.fetchLabel] && errors[itemForm.fetchLabel].type == 'required' ? 'обязательное поле' : ''}
                                                        />
                                                    </div> : ''}
                            </Grid>
                        ))}
                    </Box>
                )) : ''}
                <Box className={classes.btnBox}>
                    <ButtonCustom text={'Создать анкету'} />
                </Box>
            </Form>
        </Layout>
    )
}

export default CreatingFormGuys