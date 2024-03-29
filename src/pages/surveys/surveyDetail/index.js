import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, LinearProgress } from "@material-ui/core";
// import { useHistory } from 'react-router-dom'

import Layout from "../../../components/layout";
import MainInfo from "../../../components/surveysDetailScreen/MainInfo";
import RateInfo from "../../../components/surveysDetailScreen/RateInfo";
import DataInfo from "../../../components/surveysDetailScreen/DataInfo";
import Conditions from "../../../components/surveysDetailScreen/Conditions";
import SexualPreferenceList from "../../../components/surveysDetailScreen/SexualPreferenceList";
import Reviews from "../../../components/surveysDetailScreen/Reviews";
import API from "../../../utils/api";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px 40px 40px",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            padding: 10,
        },
    },
}));

const QuestionnaireDetail = ({
    location: {
        state: { statusUser, id, gender },
    },
}) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        API.getSurveyDetail(gender, id).then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);
    return (
        <Layout>
            {data ? (
                <Box className={classes.container}>
                    <MainInfo
                        name={data.name}
                        phone={data.phone}
                        id={data.id}
                        description={data.description}
                        photos={data.photos}
                        mainPhoto={data.main_photos}
                        statusUser={statusUser}
                        priority={data.priority}
                        gender={gender}
                    />
                    <RateInfo
                        apartment_per_hour={data.apartment_per_hour}
                        apartment_per_night={data.apartment_per_night}
                        apartment_per_two_hours={data.apartment_per_two_hours}
                        check_out_per_hour={data.check_out_per_hour}
                        check_out_per_night={data.check_out_per_night}
                        check_out_per_two_hours={data.check_out_per_two_hours}
                        express={data.express ? data.express : null}
                    />
                    {gender !== "organisation" ? (
                        <div style={{ width: "100%" }}>
                            <DataInfo
                                age={data.age}
                                weight={data.weight}
                                breast_size={data.breast_size}
                                penis_length={data.penis_length}
                                height={data.height}
                                hair_color={data.hair_color}
                                nationality={data.nationality}
                                body_type={data.body_type}
                                orientation={data.orientation}
                            />
                            <Conditions
                                check_out_apartment={data.check_out_apartment}
                                check_out_hotel={data.check_out_hotel}
                                check_out_house={data.check_out_house}
                                check_out_office={data.check_out_office}
                                check_out_sauna={data.check_out_sauna}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                    {data.breast_size ? <SexualPreferenceList {...data} /> : ""}
                    {/* <Reviews id={data.id} reviews={data.reviews} statusUser={statusUser} /> */}
                </Box>
            ) : (
                <LinearProgress style={{ height: 5 }} />
            )}
        </Layout>
    );
};

export default QuestionnaireDetail;
