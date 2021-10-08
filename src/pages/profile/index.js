import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import MainContentCard from '../../constructor/MainContentCard'
import ModalProfile from '../../components/modal/ModalProfile'
import DisableRewiewsModal from '../../components/modal/DisableReviewsModal'
import { StateContext } from '../../store'
import api from '../../utils/api'
import Layout from '../../components/layout/Layout'

const useStyles = makeStyles((theme) => ({
    profile_content: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 20
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0
        },
    }
}))

const Profile = () => {
    const classes = useStyles()
    const [showModal, setShowModal] = useState(false)
    const [showModalRewiews, setShowModalRewiews] = useState(false)
    const [stateList, setStateList] = useState([])
    const state = useContext(StateContext)
    useEffect(() => {
        // api(`api/v1/survey/my/${state.search.mode == '' ? '' : `?mode=${state.search.mode}`}`).get(null).then((res) => {
        //     setStateList(res.data)
        // }).catch((error) => {
        //     console.log('error', error)
        // })
    }, [])
    return (
        <Layout>
            <Box className={classes.profile_content}>
                <MainContentCard cardsContent={stateList} setShowModal={setShowModal} setShowModalRewiews={setShowModalRewiews} showUnderButton={true} lg={12} xl={12} md={12} statusUser='whore' type={state.search.mode} />
                <ModalProfile showModal={showModal} setShowModal={setShowModal} />
                <DisableRewiewsModal showModal={showModalRewiews} setShowModal={setShowModalRewiews} />
            </Box>
        </Layout>
    )
}

export default Profile