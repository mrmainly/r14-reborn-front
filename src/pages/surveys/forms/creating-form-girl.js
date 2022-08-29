import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Typography,
    Grid,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import GirlsFormListFunction from "../../../formList/GirlsFormList";
import { DispatchContext } from "../../../store";
import API from "../../../utils/api";
import { Form, Input, ButtonCustom, Layout } from "../../../components";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: 25,
    },
    formBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        marginTop: 20,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    textFieldBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "start",
        },
    },
    TextFieldStyle: {
        width: "50%",
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
                display: "none",
                margin: 80,
            },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    TextFieldNumber: {
        width: "40%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    textFieldBox_labelBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkBoxStyle: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
        width: "max-content",
    },
    textAreaStyles: {
        width: "60%",
        height: 100,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    checkBoxSurchargeContainer: {
        display: "flex",
        flexDirection: "column",
    },
    titleBox: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
    },
    fileChooseBox: {
        width: "60%",
        marginTop: 20,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    fileChooseContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    btnBox: {
        display: "flex",
        float: "left",
        marginTop: 20,
    },
    surchargeBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    textFieldSurcharge: {
        width: 300,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    textFieldSur: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    selectInputStyle: {
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    titleSurcharge: {
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

const CreatingFormGirl = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        defaultValue: {
            classic_sex: null,
        },
    });
    const dispatchNoti = useContext(DispatchContext);
    const router = useHistory();
    const classes = useStyles();
    const onSubmit = (data) => {
        // if (data.age < 18) {
        //     dispatchNoti({
        //         type: "notification",
        //         payload: {
        //             text: "Вам меньше 18",
        //             status: "error",
        //             active: true,
        //         },
        //     });
        // } else {
        //     API.sendSurveys("woman", router, data, dispatchNoti);
        // }
        console.log(data);
    };
    return (
        <Layout>
            <Form
                className={classes.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h6" style={{ margin: "0 auto" }}>
                    Создание анкеты девушки:
                </Typography>
                {GirlsFormListFunction
                    ? GirlsFormListFunction().map((item, index) => (
                          <Box className={classes.formBox} key={index}>
                              <Box className={classes.titleBox}>
                                  <Typography
                                      variant="body1"
                                      style={{ fontWeight: "bold" }}
                                  >
                                      {item.title}
                                  </Typography>
                                  <Typography
                                      className={classes.titleSurcharge}
                                  >
                                      {item.titleSurcharge}
                                  </Typography>
                              </Box>
                              {item.row.map((itemForm, index) => (
                                  <Grid key={index} style={{ width: "100%" }}>
                                      {itemForm.type == "input" ? (
                                          <Box className={classes.textFieldBox}>
                                              <Box
                                                  className={
                                                      classes.textFieldBox_labelBox
                                                  }
                                              >
                                                  <Typography>
                                                      {itemForm.label}
                                                  </Typography>
                                                  {itemForm.must && (
                                                      <Typography
                                                          style={{
                                                              color: "red",
                                                              marginLeft: 5,
                                                          }}
                                                      >
                                                          *
                                                      </Typography>
                                                  )}
                                              </Box>
                                              <Input
                                                  {...register(
                                                      itemForm.fetchLabel,
                                                      {
                                                          required:
                                                              itemForm.must ==
                                                              true
                                                                  ? true
                                                                  : false,
                                                      }
                                                  )}
                                                  id={itemForm.fetchLabel}
                                                  aria-invalid={
                                                      errors[
                                                          itemForm.fetchLabel
                                                      ]
                                                          ? "true"
                                                          : "false"
                                                  }
                                                  type={itemForm.typeInput}
                                                  className={
                                                      classes.TextFieldStyle
                                                  }
                                                  helperText={
                                                      errors[
                                                          itemForm.fetchLabel
                                                      ] &&
                                                      errors[
                                                          itemForm.fetchLabel
                                                      ].type == "required"
                                                          ? "обязательное поле"
                                                          : ""
                                                  }
                                                  error={
                                                      !!errors[
                                                          itemForm.fetchLabel
                                                      ]
                                                  }
                                              />
                                          </Box>
                                      ) : itemForm.type == "checkBox" ? (
                                          <Box
                                              className={classes.checkBoxStyle}
                                          >
                                              <Typography>
                                                  {itemForm.label}
                                              </Typography>
                                              {itemForm.list.map(
                                                  (itemCheckBoxList, index) => (
                                                      <FormControlLabel
                                                          control={<Checkbox />}
                                                          label={
                                                              itemCheckBoxList.labelCheckBox
                                                          }
                                                          name={
                                                              itemCheckBoxList.fetchLabel
                                                          }
                                                          {...register(
                                                              itemCheckBoxList.fetchLabel
                                                          )}
                                                          key={index}
                                                      />
                                                  )
                                              )}
                                          </Box>
                                      ) : itemForm.type == "textArea" ? (
                                          <div
                                              style={{
                                                  display: "flex",
                                                  alignItems: "start",
                                                  marginTop: 20,
                                              }}
                                          >
                                              <TextField
                                                  id="outlined-multiline-static"
                                                  multiline
                                                  fullWidth
                                                  variant="outlined"
                                                  color="primary"
                                                  aria-label="maximum height"
                                                  minRows={10}
                                                  error={
                                                      !!errors[
                                                          itemForm.fetchLabel
                                                      ]
                                                  }
                                                  placeholder="Ваше сообщение"
                                                  name={itemForm.fetchLabel}
                                                  {...register(
                                                      itemForm.fetchLabel,
                                                      {
                                                          required:
                                                              itemForm.must ==
                                                              true
                                                                  ? true
                                                                  : false,
                                                      }
                                                  )}
                                                  helperText={
                                                      errors[
                                                          itemForm.fetchLabel
                                                      ] &&
                                                      errors[
                                                          itemForm.fetchLabel
                                                      ].type == "required"
                                                          ? "обязательное поле"
                                                          : ""
                                                  }
                                              />
                                          </div>
                                      ) : itemForm.type == "select" ? (
                                          <div className={classes.textFieldBox}>
                                              <Box
                                                  className={
                                                      classes.textFieldBox_labelBox
                                                  }
                                              >
                                                  <Typography>
                                                      {itemForm.label}:
                                                  </Typography>
                                                  {itemForm.must && (
                                                      <Typography
                                                          style={{
                                                              color: "red",
                                                              marginLeft: 5,
                                                          }}
                                                      >
                                                          *
                                                      </Typography>
                                                  )}
                                              </Box>
                                              <FormControl
                                                  className={
                                                      classes.selectInputStyle
                                                  }
                                              >
                                                  <InputLabel id="demo-simple-select-label">
                                                      Выберите значение
                                                  </InputLabel>
                                                  <Select
                                                      labelId="demo-simple-select-label"
                                                      id="demo-simple-select"
                                                      aria-invalid={
                                                          errors[
                                                              itemForm
                                                                  .fetchLabel
                                                          ]
                                                              ? "true"
                                                              : "false"
                                                      }
                                                      name={itemForm.fetchLabel}
                                                      defaultValue={
                                                          itemForm.default
                                                      }
                                                      {...register(
                                                          itemForm.fetchLabel,
                                                          {
                                                              required:
                                                                  itemForm.must ==
                                                                  true
                                                                      ? true
                                                                      : false,
                                                          }
                                                      )}
                                                  >
                                                      {itemForm.selectArrey
                                                          ? itemForm.selectArrey.map(
                                                                (
                                                                    itemOptions,
                                                                    index
                                                                ) => (
                                                                    <MenuItem
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            itemOptions.optionValue
                                                                        }
                                                                    >
                                                                        {
                                                                            itemOptions.optionText
                                                                        }
                                                                    </MenuItem>
                                                                )
                                                            )
                                                          : "itemForm.selectArrey undefiend"}
                                                  </Select>
                                              </FormControl>
                                          </div>
                                      ) : itemForm.type == "inputGirl" ? (
                                          <Box className={classes.textFieldBox}>
                                              <Box
                                                  className={
                                                      classes.textFieldBox_labelBox
                                                  }
                                              >
                                                  {/* {itemForm.checkBoxType !== "notCheckbox" ?
                                                                <FormControlLabel
                                                                    control={<Checkbox value={null} />}
                                                                    label={itemForm.labelCheckBox}
                                                                    name={itemForm.fetchLabel}
                                                                    {...register(itemForm.fetchLabel)}
                                                                />
                                                                : ''} */}
                                                  <Typography>
                                                      {itemForm.label}
                                                  </Typography>
                                                  {itemForm.must && (
                                                      <Typography
                                                          style={{
                                                              color: "red",
                                                              marginLeft: 5,
                                                          }}
                                                      >
                                                          *
                                                      </Typography>
                                                  )}
                                              </Box>
                                              <Input
                                                  type="number"
                                                  className={
                                                      classes.TextFieldStyle
                                                  }
                                                  name={itemForm.fetchLabel}
                                                  {...register(
                                                      itemForm.fetchLabel
                                                  )}
                                                  InputProps={{
                                                      startAdornment:
                                                          itemForm.manyType !==
                                                          "notMoney" ? (
                                                              <InputAdornment position="start">
                                                                  <img
                                                                      src={
                                                                          "/image/Frame3281.png"
                                                                      }
                                                                      style={{
                                                                          width: 20,
                                                                      }}
                                                                  />
                                                              </InputAdornment>
                                                          ) : (
                                                              ""
                                                          ),
                                                  }}
                                              />
                                          </Box>
                                      ) : itemForm.description ? (
                                          <Box>
                                              <Typography
                                                  style={{
                                                      color: "#FF0000",
                                                      marginTop: 10,
                                                  }}
                                              >
                                                  {itemForm.description}
                                              </Typography>
                                          </Box>
                                      ) : (
                                          ""
                                      )}
                                  </Grid>
                              ))}
                          </Box>
                      ))
                    : ""}
                <Box className={classes.btnBox}>
                    <ButtonCustom text={"Создать анкету"} />
                </Box>
            </Form>
        </Layout>
    );
};

export default CreatingFormGirl;
