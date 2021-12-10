import React, { useEffect, useState, useContext } from 'react'

import MainContentCard from '../../constructor/MainContentCard'
import API from '../../utils/api'
import SideBarAnonim from '../../components/layout/SideBarAnonim'
import { StateContext } from '../../store'
import Layout from '../../components/layout'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    contentProfileActive: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
}))

export default function Girls() {
    const state = useContext(StateContext)
    const classes = useStyles()
    const [stateList, setStateList] = useState([])
    const [loading, setLoading] = useState(true)
    const getListGirls = (param) => {
        console.log(param)
        API.getSurveys('woman', param).then((res) => {
            console.log(res)
            setStateList(res.data)
        })
    }
    useEffect(() => {
        getListGirls(state.slogo.params)
    }, [state.slogo.params])
    console.log(loading)
    return (
        <Layout>
            <Grid container className={classes.contentProfileActive}>
                <Grid item lg={3} sm={12} md={12} xl={3} xs={2} >
                    <SideBarAnonim getListGirls={getListGirls} />
                </Grid>
                <Grid item lg={9} sm={12} md={12} xl={9} xs={12} className={classes.mainContentCards}>
                    <MainContentCard gender="woman" cardsContent={stateList} showUnderButton={false} lg={6} xl={6} md={6} statusUser="anonim" loading={loading} />
                </Grid>
            </Grid>
        </Layout>
    )
}