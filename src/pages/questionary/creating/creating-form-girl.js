import React, { useReducer, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid, TextField, FormControlLabel, Checkbox, TextareaAutosize, FormControl, InputLabel, Select, MenuItem, InputAdornment } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import surveyReducer from '../../../reducer/surveyReducer'
import GirlsFormListFunction from '../../../formList/GirlsFormList'
import ButtonCustom from '../../../components/customElements/ButtonCustom'
import { DispatchContext } from '../../../store'
import Layout from '../../../components/layout/Layout'
import API from '../../../utils/api'

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
    textFieldSur: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    selectInputStyle: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    titleSurcharge: {
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))

const initialFormState = {

}

const girlsurvey = {

}

const CreatingFormGirl = () => {
    const [formState, dispatch] = useReducer(surveyReducer, initialFormState)
    const [formStateGirl, dispatchGirl] = useReducer(surveyReducer, girlsurvey)
    const dispatchNoti = useContext(DispatchContext)
    const router = useHistory()
    const handleTextChange = (e, type) => {
        dispatch({
            type: type,
            field: e.target.name,
            payload: e.target.value
        })
    }
    const handleTextChangeGirl = (e, type) => {
        dispatchGirl({
            type: type,
            field: e.target.name,
            payload: e.target.value
        })
    }
    const sendSurvayGirls = () => {
        API.sendSurveys('woman', router, { ...formState, womansurvey: { ...formStateGirl } }, dispatchNoti)
    }
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Typography variant="h6" style={{ margin: '0 auto' }}>
                    Создание анкеты девушки:
                </Typography>
                {GirlsFormListFunction ? GirlsFormListFunction(formState, formStateGirl).map((item, index) => (
                    <Box className={classes.formBox} key={index}>
                        <Box className={classes.titleBox}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.title}</Typography>
                            <Typography className={classes.titleSurcharge}>{item.titleSurcharge}</Typography>
                        </Box>
                        {item.row.map((itemRow, index) => (
                            <Grid key={index} style={{ width: '100%' }}>
                                {itemRow.type == 'input' ?
                                    <Box className={classes.textFieldBox}>
                                        <Box className={classes.textFieldBox_labelBox}>
                                            <Typography>{itemRow.label}</Typography>
                                            {itemRow.must &&
                                                <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                            }
                                        </Box>
                                        <TextField
                                            size="small"
                                            onChange={(e) => handleTextChange(e, 'input')}
                                            value={itemRow.value}
                                            variant="outlined"
                                            fullWidth
                                            className={classes.TextFieldStyle}
                                            name={itemRow.fetchLabel}
                                        />
                                    </Box>
                                    : itemRow.type == 'checkBox' ?
                                        <Box className={classes.checkBoxStyle}>
                                            <Typography>{itemRow.label}</Typography>
                                            {itemRow.list.map((itemCheckBoxList, index) => (
                                                <FormControlLabel
                                                    control={<Checkbox name={itemCheckBoxList.fetchLabel} checked={itemCheckBoxList.checked} onChange={(e) => handleTextChange(e, 'check')} />}
                                                    label={itemCheckBoxList.labelCheckBox} key={index} />
                                            ))}
                                        </Box>
                                        : itemRow.type == 'textArea' ?
                                            <div style={{ display: 'flex', alignItems: 'start', marginTop: 20 }}>
                                                <Box className={classes.textFieldBox_labelBox}>
                                                    {itemRow.must &&
                                                        <Typography style={{ color: 'red', marginRight: 5 }}>*</Typography>
                                                    }
                                                </Box>
                                                <TextareaAutosize className={classes.textAreaStyles} aria-label="maximum height" minRows={10} placeholder="Напишите подробное описание о себе и о своих улсугах." value={itemRow.value} onChange={(e) => handleTextChange(e, 'input')} name={itemRow.fetchLabel} />
                                            </div>
                                            : itemRow.type == 'select' ?
                                                <div className={classes.textFieldBox}>
                                                    <Box className={classes.textFieldBox_labelBox}>
                                                        <Typography>{itemRow.label}:</Typography>
                                                        {itemRow.must &&
                                                            <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                                        }
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
                                                </div>
                                                : itemRow.type == 'inputGirl' ?
                                                    <Box className={classes.textFieldBox}>
                                                        <Box className={classes.textFieldBox_labelBox}>
                                                            {itemRow.checkBoxType !== "notCheckbox" ?
                                                                <Checkbox checked={itemRow.value ? true : false} name={itemRow.fetchLabel} value={'0'} onChange={(e) => { handleTextChangeGirl(e, 'input') }} />
                                                                : ''}
                                                            <Typography>{itemRow.label}</Typography>
                                                            {itemRow.must &&
                                                                <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                                            }
                                                        </Box>
                                                        <TextField
                                                            size="small"
                                                            onChange={(e) => handleTextChangeGirl(e, 'input')}
                                                            value={itemRow.value}
                                                            variant="outlined"
                                                            type="number"
                                                            required
                                                            fullWidth
                                                            className={classes.TextFieldStyle}
                                                            name={itemRow.fetchLabel}
                                                            InputProps={{
                                                                startAdornment: (
                                                                    itemRow.manyType !== "notMoney" ?
                                                                        <InputAdornment position="start">
                                                                            <img src={'/image/currency.png'} style={{ width: 20 }} />
                                                                        </InputAdornment>
                                                                        : ''
                                                                ),
                                                            }}
                                                        />
                                                    </Box> : itemRow.type == 'number' ?
                                                        <Box className={classes.textFieldBox}>
                                                            <Box className={classes.textFieldBox_labelBox}>
                                                                <Typography>{itemRow.label}</Typography>
                                                                {itemRow.must &&
                                                                    <Typography style={{ color: 'red', marginLeft: 5 }}>*</Typography>
                                                                }
                                                            </Box>
                                                            <TextField size="small"
                                                                onChange={(e) => handleTextChange(e, 'input')}
                                                                value={itemRow.value}
                                                                variant="outlined"
                                                                type={itemRow.type}
                                                                required
                                                                fullWidth
                                                                className={classes.TextFieldStyle}
                                                                name={itemRow.fetchLabel}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        itemRow.manyType == "currency" ?
                                                                            <InputAdornment position="start">
                                                                                <img src={'/image/currency.png'} style={{ width: 20 }} />
                                                                            </InputAdornment>
                                                                            : ''
                                                                    ),
                                                                }}
                                                            />
                                                        </Box> : itemRow.description ?
                                                            <Box>
                                                                <Typography style={{ color: '#FF0000', marginTop: 10 }}>
                                                                    {itemRow.description}
                                                                </Typography>
                                                            </Box>
                                                            : ''}
                            </Grid>
                        ))}
                    </Box>
                )) : ''}
                <Box className={classes.btnBox}>
                    <ButtonCustom text={'Создать анкету'} onClick={() => sendSurvayGirls()} />
                </Box>
            </Box>
        </Layout>
    )
}

export default CreatingFormGirl