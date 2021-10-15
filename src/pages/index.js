import React, { useEffect, useState, useContext } from 'react'

import MainContentCard from '../constructor/MainContentCard'
import API from '../utils/api'
import SideBarAnonim from '../components/layout/SideBarAnonim'
import { StateContext, DispatchContext } from '../store/index'
import Layout from '../components/layout/Layout'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  contentProfileActive: {
    display: 'flex',
    flexDirection: 'row-reverse',
  }
}))

export default function Home() {
  const state = useContext(StateContext)
  const classes = useStyles()
  const [stateList, setStateList] = useState([])
  // const getListGirls = (params) => {
  //   api('api/v1/surveys/list?mode=woman&order=-status__name&' + params).get(null).then((res) => {
  //     setStateList(res.data)
  //   }).catch((error) => {
  //     console.log('error', error)
  //   })
  // }
  // useEffect(() => {
  //   getListGirls(state.slogo.params)
  // }, [state.slogo.params])
  const getListGirls = () => {
    API.getSurveys('woman').then((res) => {
      setStateList(res.data)
    })
  }
  useEffect(() => {
    getListGirls()
  }, [])
  return (
    <Layout>
      <Grid container className={classes.contentProfileActive}>
        <Grid item lg={3} sm={12} md={12} xl={3} xs={12}>
          <SideBarAnonim getListGirls={getListGirls} />
        </Grid>
        <Grid item lg={9} sm={12} md={12} xl={9} xs={12} >
          <MainContentCard gender="woman" cardsContent={stateList} showUnderButton={false} lg={6} xl={6} md={6} statusUser="anonim" />
        </Grid>
      </Grid>
    </Layout>
  )
}