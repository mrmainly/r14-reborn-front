import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CardsCastom from '../components/customElements/CardsCustom'

const useStyles = makeStyles((theme) => ({
    container_card: {
        display: 'flex',
        paddingBottom: 20,
    },
    inside_box: {
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
            paddingRight: 5
        },

    },
}))

const MainContentCard = ({ setShowModalRewiews, cardsContent, firmsLever, setShowModal, showUnderButton, xl, md, lg, type, statusUser, gender }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container_card}>
            {cardsContent.length >= 1 ? cardsContent.map((item, index) => (
                <Grid item lg={lg} sm={6} md={md} xl={xl} xs={12} key={index} className={classes.inside_box}>
                    <CardsCastom
                        {...item}
                        firmsLever={firmsLever}
                        showUnderButton={showUnderButton}
                        setShowModal={setShowModal}
                        type={type}
                        statusUser={statusUser}
                        setShowModalRewiews={setShowModalRewiews}
                        gender={gender}
                    />
                </Grid>
            )) : <div style={{ marginLeft: 20, marginTop: 20 }}><Typography variant="h6">Нету анкет</Typography></div>}
        </Grid>
    )
}

export default MainContentCard