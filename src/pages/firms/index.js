import React, { useState, useContext, useEffect } from 'react'

import MainContentCard from '../../constructor/MainContentCard'
import API from '../../utils/api'
import { StateContext } from '../../store'
import Layout from '../../components/layout'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    contentProfileActive: {
        display: 'flex',
        flexDirection: 'row-reverse',
        minHeight: 600
    }
}))

export default function Firms() {
    const classes = useStyles()
    const state = useContext(StateContext)
    const [stateList, setStateList] = useState([])
    const [loading, setLoading] = useState(true)
    // const getListFirms = (params) => {
    //     api('api/v1/surveys/list?mode=organisation&order=-status__name&' + params, null).get(null).then((res) => {
    //         setStateList(res.data)
    //     }).catch((error) => {
    //         console.log('error', error)
    //     })
    // }
    // useEffect(() => {
    //     getListFirms(state.slogo.params)
    // }, [state.slogo.params])
    useEffect(() => {
        API.getSurveys('organisation').then((res) => {
            setStateList(res.data)
            setLoading(false)
        })
    }, [])
    return (
        <Layout>
            <Grid container className={classes.contentProfileActive}>
                <Grid item lg={12} sm={12} md={12} xl={12} xs={12}>
                    <MainContentCard gender="organisation" cardsContent={stateList} showUnderButton={false} lg={6} xl={6} md={6} type={'organisation'} statusUser="anonim" loading={loading} />
                </Grid>
            </Grid>
        </Layout>
    )
}