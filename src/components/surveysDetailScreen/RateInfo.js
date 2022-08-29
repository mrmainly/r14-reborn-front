import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";

import { useLocation } from "react-router-dom";

import themeMain from "../../theme";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: 20,
    },
    RateBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        [theme.breakpoints.down("sm")]: {
            margin: "0 auto",
        },
    },
    RateBox__item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginTop: 10,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    RateBox__elementValue: {
        color: "#00C366",
    },
    RateBox__title: {
        [theme.breakpoints.down("sm")]: {
            marginTop: 20,
        },
    },
}));

const RateInfo = (props) => {
    const classes = useStyles();

    const location = useLocation();

    const arrayRate = [
        {
            title: "Апартаменты:",
            elements: [
                {
                    elementName: "1 час",
                    elementValue: props.apartment_per_hour,
                },
                {
                    elementName: "2 часа",
                    elementValue: props.apartment_per_two_hours,
                },
                {
                    elementName: "Ночь",
                    elementValue: props.apartment_per_night,
                },
                // location.pathname === '' ?
                {
                    elementName: "Экспресс-программа (30 минут):",
                    elementValue: props.express,
                },
            ],
        },
        {
            title: "Выезд:",
            elements: [
                {
                    elementName: "1 час",
                    elementValue: props.check_out_per_hour,
                },
                {
                    elementName: "2 часа",
                    elementValue: props.check_out_per_two_hours,
                },
                {
                    elementName: "Ночь",
                    elementValue: props.check_out_per_night,
                },
            ],
        },
    ];
    return (
        <div className={classes.container}>
            <Typography variant="h6">Тарифы</Typography>
            <Grid container className={classes.RateBox}>
                {arrayRate.map((itemRate, index) => (
                    <Grid
                        item
                        lg={6}
                        sm={12}
                        md={6}
                        xl={6}
                        xs={12}
                        key={index}
                        className={classes.RateBox__title}
                    >
                        <Typography>{itemRate.title}</Typography>
                        {itemRate.elements.map((itemElem, index) => (
                            <Box className={classes.RateBox__item} key={index}>
                                <Typography variant="body2">
                                    {itemElem.elementName}
                                </Typography>
                                {itemElem.elementValue !== null ? (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            className={
                                                classes.RateBox__elementValue
                                            }
                                        >
                                            {itemElem.elementValue}
                                        </Typography>
                                        <img
                                            src="/image/Frame3281.png"
                                            style={{
                                                marginTop: "-5px",
                                                marginLeft: 10,
                                            }}
                                        />
                                    </div>
                                ) : (
                                    "-"
                                )}
                            </Box>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default RateInfo;
