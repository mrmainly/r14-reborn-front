import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import MainContentCard from '../../constructor/MainContentCard'
import ModalProfile from '../../components/modal/ModalProfile'
import DisableRewiewsModal from '../../components/modal/DisableReviewsModal'
import { StateContext } from '../../store'
import API from '../../utils/api'
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
    const [gender, setGender] = useState()
    const state = useContext(StateContext)
    useEffect(() => {
        API.getSurveysMe().then(res => {
            switch (state.search.mode) {
                case 'woman': setStateList(res.data.womans);
                    break;
                case 'man': setStateList(res.data.mans)
                    break;
                case 'organisation': setStateList(res.data.organisations)
                    break;
                default: setStateList(res.data.womans)
            }
        })
    }, [state.search.mode])
    return (
        <Layout>
            <Box className={classes.profile_content}>
                <MainContentCard cardsContent={stateList} setShowModal={setShowModal} setShowModalRewiews={setShowModalRewiews} showUnderButton={true} lg={12} xl={12} md={12} statusUser='whore' gender={state.search.mode} />
                <ModalProfile showModal={showModal} setShowModal={setShowModal} />
                <DisableRewiewsModal showModal={showModalRewiews} setShowModal={setShowModalRewiews} />
            </Box>
        </Layout>
    )
}

export default Profile