import React, { useState, useReducer } from 'react'
import { Box, Typography, TextField, Grid, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

import MainContentCard from '../../constructor/MainContentCard'
import API from '../../utils/api'
import { FiltersListFormFunc, FilterListFormTwoFunc } from '../../formList/FiltersListForm'
import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'
import { Input } from '../../components/customElements/Input'
import { Form } from '../../components/customElements/Form'

const useStales = makeStyles((theme) => ({
    drawerBox: {
        minHight: 1000,
        backgroundColor: '#fff',
        padding: 20
    },
    buttonFilter: {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        marginLeft: 10,
        paddingTop: 5,
        width: 'max-content',
    },
    drawerBox_form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    textFieldBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            width: 450
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'start'
        },
    },
    textFieldBox_labelBox: {
        display: 'flex',
        flexDirection: 'row',
        width: 150
    },
    TextFieldStyle: {
        width: 150,
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
            width: '100%',
        },
    },
    selectInputStyle: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    inputBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        width: 450,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))

const SelectionGirls = () => {
    const classes = useStales()
    const [stateList, setStateList] = useState([])
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        let params = ""
        Object.keys(data).forEach(el => {
            if (data[el] == '') {
                delete data[el]
            }
        })
        for (var key in data) {
            if (params != "") {
                params += "&";
            }
            params += key + "=" + data[key];
        }
        console.log(params)
        if (data.penis_length_max) {
            API.getSurveys('man', params).then((res) => {
                setStateList(res.data)
            })
        } else {
            API.getSurveys('woman', params).then((res) => {
                setStateList(res.data)
            })
        }
    }
    return (
        <Layout>
            <Form className={classes.drawerBox} onSubmit={handleSubmit(onSubmit)}>
                <Typography style={{ fontWeight: 'bold' }} variant="h5">Подбор анкет</Typography>
                <Box className={classes.inputBox}>
                    <Box className={classes.textFieldBox_labelBox}>
                        <Typography>Имя:</Typography>
                    </Box>
                    <Input
                        style={{ width: '50%' }}
                        name={'name'}
                        {...register('name')}
                    />
                </Box>
                <Box className={classes.inputBox}>
                    <Box className={classes.textFieldBox_labelBox}>
                        <Typography>Номер телефона:</Typography>
                    </Box>
                    <Input
                        style={{ width: '50%' }}
                        name={'phone'}
                        {...register('phone')}
                    />
                </Box>
                <Grid container>
                    <Grid lg={5} sm={12} md={5} xl={5} xs={12} item>
                        {FiltersListFormFunc ? FiltersListFormFunc().map((item, index) => (
                            <Box key={index} className={classes.drawerBox_form}>
                                <Typography style={{ fontWeight: 'bold' }} variant="h6">{item.title}</Typography>
                                {item.row.map((itemForm, index) => (
                                    <div key={index}>
                                        {itemForm.type == 'checkbox' ?
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label={itemForm.label}
                                                name={itemForm.fetchLabel}
                                                {...register(itemForm.fetchLabel)}
                                                key={index}
                                            />
                                            : ''
                                        }
                                    </div>
                                ))}
                            </Box>
                        )) : 'нет форм'}
                    </Grid>
                    <Grid lg={5} sm={12} md={5} xl={5} xs={12} item>
                        {FilterListFormTwoFunc ? FilterListFormTwoFunc().map((item, index) => (
                            <Box key={index} className={classes.drawerBox_form}>
                                <Typography style={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                {item.row.map((itemForm, index) => (
                                    <div key={index}>
                                        {itemForm.type == 'checkbox' ?
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label={itemForm.label}
                                                name={itemForm.fetchLabel}
                                                {...register(itemForm.fetchLabel)}
                                                key={index}
                                            />
                                            : itemForm.type == 'TextField' ?
                                                <Box className={classes.textFieldBox}>
                                                    <Box className={classes.textFieldBox_labelBox}>
                                                        <Typography>{itemForm.label}:</Typography>
                                                    </Box>
                                                    <Input
                                                        {...register(itemForm.fetchLabelMin)}
                                                        id={itemForm.fetchLabelMin}
                                                        type={'number'}
                                                        className={classes.TextFieldStyle}
                                                        label={'мин'}
                                                    />
                                                    <Input
                                                        {...register(itemForm.fetchLabelMax)}
                                                        id={itemForm.fetchLabelMax}
                                                        type={'number'}
                                                        className={classes.TextFieldStyle}
                                                        label={'макс'}
                                                    />
                                                </Box>
                                                : itemForm.type == 'select' ?
                                                    <div className={classes.textFieldBox}>
                                                        <Box className={classes.textFieldBox_labelBox}>
                                                            <Typography>{itemForm.label}:</Typography>
                                                        </Box>
                                                        <FormControl className={classes.selectInputStyle}>
                                                            <InputLabel id="demo-simple-select-label">Выберите значение</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                name={itemForm.fetchLabel}
                                                                {...register(itemForm.fetchLabel)}
                                                            >
                                                                {
                                                                    itemForm.selectArrey ? itemForm.selectArrey.map((itemOptions, index) => (
                                                                        <MenuItem key={index} value={itemOptions.optionValue}>{itemOptions.optionText}</MenuItem>
                                                                    )) : 'itemForm.selectArrey undefiend'
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </div> : ''
                                        }
                                    </div>
                                ))}
                            </Box>
                        )) : 'нет форм'}
                    </Grid>
                </Grid>
                <Box style={{ marginTop: 25 }}>
                    <ButtonCustom text={'Подобрать анкету'} />
                </Box>
            </Form>
            {stateList.length > 0 ?
                <Box style={{ padding: 20 }}>
                    <Typography variant="h6">По вашим указанным параметрам найдено анкет {stateList.length}</Typography>
                </Box>
                : ''}
            <MainContentCard cardsContent={stateList} gender={'woman'} showUnderButton={false} lg={6} xl={6} md={6} CardsIfNo={''} statusUser="anonim" />
        </Layout>
    )
}

export default SelectionGirls