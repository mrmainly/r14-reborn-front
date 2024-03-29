import React from "react";
import { Grid, Typography, CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MainCard } from "../components";

const useStyles = makeStyles((theme) => ({
    container_card: {
        display: "flex",
        paddingBottom: 20,
    },
    inside_box: {
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
            justifyContent: "center",
        },
    },
    Circular: {
        marginLeft: 10,
        marginTop: 10,
    },
}));

const MainContentCard = ({
    setShowModalRewiews,
    cardsContent,
    firmsLever,
    setShowModal,
    showUnderButton,
    xl,
    md,
    lg,
    statusUser,
    gender,
    loading,
}) => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container className={classes.container_card}>
                {cardsContent.length ? (
                    cardsContent.map((item, index) => (
                        <Grid
                            item
                            lg={lg}
                            sm={6}
                            md={md}
                            xl={xl}
                            xs={12}
                            key={index}
                            className={classes.inside_box}
                        >
                            <MainCard
                                {...item}
                                firmsLever={firmsLever}
                                showUnderButton={showUnderButton}
                                setShowModal={setShowModal}
                                statusUser={statusUser}
                                setShowModalRewiews={setShowModalRewiews}
                                gender={gender}
                            />
                        </Grid>
                    ))
                ) : loading ? (
                    <CircularProgress
                        style={{ marginTop: 10, marginLeft: 10 }}
                    />
                ) : (
                    <div style={{ marginLeft: 20, marginTop: 20 }}>
                        <Typography variant="h6">Нет анкет</Typography>
                    </div>
                )}
            </Grid>
        </Box>
    );
};

export default MainContentCard;
