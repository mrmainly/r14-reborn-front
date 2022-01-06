import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, CircularProgress } from '@material-ui/core'

import MainContentCard from '../../constructor/MainContentCard'
import ModalProfile from '../../components/modal/ModalProfile'
import DisableRewiewsModal from '../../components/modal/DisableReviewsModal'
import { StateContext, DispatchContext } from '../../store'
import API from '../../utils/api'
import Layout from '../../components/layout'

const useStyles = makeStyles((theme) => ({
    profile_content: {

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
    const [loading, setLoading] = useState(true)
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    useEffect(() => {
        API.getSurveysMe().then(res => {
            dispatch({ type: 'changeUserId', payload: { id: res.data.id } })
            switch (state.search.mode) {
                case 'woman': setStateList(res.data.womans);
                    break;
                case 'man': setStateList(res.data.mans)
                    break;
                case 'organisation': setStateList(res.data.organisations)
            }
            setLoading(false)
        })
    }, [state.search.mode])
    return (
        <Layout>
            <Box className={classes.profile_content}>
                <MainContentCard cardsContent={stateList} setShowModal={setShowModal} setShowModalRewiews={setShowModalRewiews} showUnderButton={true} lg={12} xl={12} md={12} statusUser='whore' gender={state.search.mode} loading={loading} />
                <ModalProfile showModal={showModal} setShowModal={setShowModal} />
                <DisableRewiewsModal showModal={showModalRewiews} setShowModal={setShowModalRewiews} />
            </Box>
        </Layout>
    )
}

export default Profile