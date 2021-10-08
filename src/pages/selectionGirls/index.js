import React, { useState, useReducer } from 'react'
import { Box, Typography, TextField, Grid, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MainContentCard from '../../constructor/MainContentCard'
import api from '../../utils/api'
import { FiltersListFormFunc, FilterListFormTwoFunc } from '../../formList/FiltersListForm'
import ButtonCustom from '../../components/customElements/ButtonCustom'
import Layout from '../../components/layout/Layout'

import surveyReducer from '../../reducer/surveyReducer'

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

const initialFormState = {
    name: '',
    phone: ''
}

const SelectionGirls = () => {
    const [data, setData] = useState([])
    const [formState, dispatch] = useReducer(surveyReducer, initialFormState)
    const classes = useStales()
    const handleTextChange = (e, type) => {
        dispatch({
            type: type,
            field: e.target.name,
            payload: e.target.value
        })
    }
    const getListGirls = () => {
        let params = ""
        console.log(params)
        for (var key in formState) {
            if (params != "") {
                params += "&";
            }
            params += key + "=" + encodeURIComponent(formState[key]);
        }
        console.log(params)
        api('api/v1/surveys/list?mode=woman&' + params, null).get(null).then((res) => {
            setData(res.data)
        }).catch((error) => {
            console.log('error', error)
        })
    }
    return (
        <Layout>
            <Box className={classes.drawerBox}>
                <Typography style={{ fontWeight: 'bold' }} variant="h5">Подбор анкет</Typography>
                <Box className={classes.inputBox}>
                    <Box className={classes.textFieldBox_labelBox}>
                        <Typography>Имя девушки:</Typography>
                    </Box>
                    <TextField
                        size="small"
                        variant="outlined"
                        required
                        fullWidth
                        style={{ width: '50%' }}
                        onChange={(e) => { handleTextChange(e, 'input') }}
                        value={formState.name}
                        name={'name'}
                    />
                </Box>
                <Box className={classes.inputBox}>
                    <Box className={classes.textFieldBox_labelBox}>
                        <Typography>Номер телефона:</Typography>
                    </Box>
                    <TextField
                        size="small"
                        variant="outlined"
                        required
                        fullWidth
                        style={{ width: '50%' }}
                        onChange={(e) => { handleTextChange(e, 'input') }}
                        value={formState.phone}
                        name={'phone'}
                    />
                </Box>
                <Grid container>
                    <Grid lg={5} sm={12} md={5} xl={5} xs={12} item>
                        {FiltersListFormFunc ? FiltersListFormFunc(formState).map((item, index) => (
                            <Box key={index} className={classes.drawerBox_form}>
                                <Typography style={{ fontWeight: 'bold' }} variant="h6">{item.title}</Typography>
                                {item.row.map((itemRow, index) => (
                                    <div key={index}>
                                        {itemRow.type == 'checkbox' ?
                                            <FormControlLabel
                                                control={<Checkbox
                                                    value={itemRow.value}
                                                    name={itemRow.fetchLabel}
                                                    onChange={(e) => handleTextChange(e, 'check')}
                                                />}
                                                label={itemRow.label}
                                            />
                                            : ''
                                        }
                                    </div>
                                ))}
                            </Box>
                        )) : 'нет форм'}
                    </Grid>
                    <Grid lg={5} sm={12} md={5} xl={5} xs={12} item>
                        {FilterListFormTwoFunc ? FilterListFormTwoFunc(formState).map((item, index) => (
                            <Box key={index} className={classes.drawerBox_form}>
                                <Typography style={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                {item.row.map((itemRow, index) => (
                                    <div key={index}>
                                        {itemRow.type == 'checkbox' ?
                                            <FormControlLabel
                                                control={<Checkbox name="checkedA" />}
                                                label={itemRow.label}
                                            />
                                            : itemRow.type == 'TextField' ?
                                                <Box className={classes.textFieldBox}>
                                                    <Box className={classes.textFieldBox_labelBox}>
                                                        <Typography>{itemRow.label}:</Typography>
                                                    </Box>
                                                    <TextField
                                                        size="small"
                                                        onChange={(e) => handleTextChange(e, 'input')}
                                                        value={itemRow.valueMin}
                                                        variant="outlined"
                                                        label="От"
                                                        required
                                                        fullWidth
                                                        className={classes.TextFieldStyle}
                                                        name={itemRow.fetchLabelMin}
                                                        type='number'
                                                    />
                                                    <TextField
                                                        size="small"
                                                        onChange={(e) => handleTextChange(e, 'input')}
                                                        value={itemRow.valueMax}
                                                        variant="outlined"
                                                        required
                                                        label="До"
                                                        fullWidth
                                                        className={classes.TextFieldStyle}
                                                        name={itemRow.fetchLabelMax}
                                                        type='number'
                                                    />
                                                </Box>
                                                : itemRow.type == 'select' ?
                                                    <div className={classes.textFieldBox}>
                                                        <Box className={classes.textFieldBox_labelBox}>
                                                            <Typography>{itemRow.label}:</Typography>
                                                        </Box>
                                                        <FormControl className={classes.selectInputStyle}>
                                                            <InputLabel id="demo-simple-select-label">Выберите значение</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                name={itemRow.fetchLabel}
                                                                value={itemRow.value}
                                                                defaultValue={itemRow.default}
                                                                onChange={(e) => handleTextChange(e, 'input')}
                                                            >
                                                                {
                                                                    itemRow.selectArrey ? itemRow.selectArrey.map((itemOptions, index) => (
                                                                        <MenuItem key={index} value={itemOptions.optionValue}>{itemOptions.optionText}</MenuItem>
                                                                    )) : 'itemRow.selectArrey undefiend'
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
                    <ButtonCustom text={'Подобрать девушку'} onClick={() => { getListGirls() }} />
                </Box>
            </Box>
            {data.length > 0 ?
                <Box style={{ padding: 20 }}>
                    <Typography variant="h6">По вашим указанным параметрам найдено анкет {data.length}</Typography>
                </Box>
                : ''}
            <MainContentCard cardsContent={data} showUnderButton={false} lg={6} xl={6} md={6} CardsIfNo={''} statusUser="anonim" />
        </Layout>
    )
}

export default SelectionGirls