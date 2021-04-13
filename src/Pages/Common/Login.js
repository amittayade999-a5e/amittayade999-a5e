
import React, { useState, useEffect, useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import {
  Typography,
  Paper,
  Avatar,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context, domainAddress } from "../App/Config";

const styles = (theme) => ({
    main: {
      flexGrow: 1,
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: "0",
      left: "0",
      overflowX: "auto",
    },
    paper: {
      position: "relative",
      top: "50%",
      left: "0%",
      transform: "translate(0%,-50%)",
      marginRight: "3rem",
      float: "right",
      minWidth: "250px",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
        theme.spacing.unit * 3
      }px`,
      webkitBoxShadow: "0 0 0 4px rgba(245, 0, 87, 0.2)",
      boxShadow: "0 0 0 4px rgba(245, 0, 87, 0.2)",
      [theme.breakpoints.between(0, 700)]: {
        float: "initial",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    avatar: {
      margin: theme.spacing.unit,
      width: 100,
      height: 100,
      backgroundColor: theme.palette.secondary.main,
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    errorMessage: {
      color: "red",
      float: "left",
    },
    leftTitle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",
      top: "40%",
      left: "10%",
      transform: "translate(-10%,-40%)",
      fontSize: "3rem",
      [theme.breakpoints.between(700, 940)]: {
        maxWidth: "30%",
        left: "5%",
        transform: "translate(-5%,-40%)",
      },
      [theme.breakpoints.between(0, 700)]: {
        display: "none",
      },
    },
  });

function Login(props) {
    const { classes } = props;

    const initialState = {
      isPhone: false,
      emailPhone: "",
      password: "",
      showPassword: false,
      isDisabled: true,
      errorMessage: "",
    };
  
    const [state, setState] = useState(initialState);
  
    const handleChange = (e) => {
      if (e.target.name === "emailPhone") {
        if (/^\d+$/.test(e.target.value)) {
          setState({
            ...state,
            isPhone: true,
            [e.target.name]: e.target.value,
          });
        } else {
          setState({
            ...state,
            isPhone: false,
            [e.target.name]: e.target.value,
          });
        }
      } else {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      }
    };
  
    useEffect(() => {
      const emailValidationPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
      if (state.isPhone) {
        setState({
          ...state,
          isDisabled: state.emailPhone.length === 10 ? false : true,
        });
      } else if (!state.isPhone) {
        setState({
          ...state,
          isDisabled: state.emailPhone.match(emailValidationPattern)
            ? false
            : true,
        });
      }
    }, [state.emailPhone]);
  
    const handleClickShowPassword = () => {
      setState({ ...state, showPassword: !state.showPassword });
    };
  
    const handleMouseDownPassword = (e) => {
      e.preventDefault();
    };
  
const [context, setContext] = useContext(Context);
  
    //Extract functionality ids
    const sortFunctionalityMaster = (data) => {
      const functionalityObject = { emrIds: [], ids: [] };
      data.forEach((obj) => {
        obj.emrFieldMaster
          ? functionalityObject.emrIds.push(obj.emrFieldMaster.id)
          : functionalityObject.ids.push(obj.id);
      });
      return functionalityObject;
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      const userCrendentials = {
        username: state.emailPhone,
        password: state.password,
      };
      axios
        .post(`${domainAddress}/user/login`, userCrendentials)
        .then((res) => {
          if (res.status === 200) {
            setContext({
              ...context,
              userClientPresence: true,
              id: res.data.userdto.id,
              doctorId:
                res.data.userdto.role.roleId === 1 ||
                res.data.userdto.role.roleId === 3
                  ? res.data.userdto.doctorDetail.doctorId
                  : undefined,
              patientId:
                res.data.userdto.role.roleId === 2
                  ? res.data.userdto.patientData.patientId
                  : undefined,
              firstName: res.data.userdto.firstName,
              middleName: res.data.userdto.middleName,
              lastName: res.data.userdto.lastName,
              emailId: res.data.userdto.emailId,
              number: res.data.userdto.number,
              roleId: res.data.userdto.role.roleId,
              verified: res.data.userdto.verified,
              clinicDetail: res.data.userdto.clinicDetailDTO,
              functionalityMaster: res.data.userdto.functionalityMasterDTO,
              sortedClinicId:
                res.data.userdto.role.roleId === 3
                  ? res.data.userdto.clinicDetailDTO.map((obj) => obj.id)
                  : null,
              sortedFunctionalityId:
                res.data.userdto.role.roleId === 3
                  ? sortFunctionalityMaster(
                      res.data.userdto.functionalityMasterDTO
                    )
                  : null,
            });
            document.cookie = `atkn=${
              res.data.jwttoken
            }; path=/; priority=high; max-age=${30 * 24 * 60 * 60}`;
            // localStorage.setItem("userNumber", res.data.userdto.number);
            // localStorage.setItem("userEmail", res.data.userdto.emailId);
            if (res.data.userdto.verified) {
              if (
                res.data.userdto.role.roleId === 1 ||
                res.data.userdto.role.roleId === 3
              ) {
                props.history.push("/doctor/dashboard");
              } else if (res.data.userdto.role.roleId === 2) {
                props.history.push("/patient/dashboard");
              }
            } else if (!res.data.userdto.verified) {
              props.history.push({
                pathname: "/otpVerification",
                state: res.data.userdto,
              });
            }
          } else {
            setState({
              ...state,
              errorMessage: "Some error occured",
            });
            throw new Error("Some error occured");
          }
        })
        .catch((error) => {
          if (error.message.includes("400")) {
            setState({
              ...state,
              errorMessage: "Invalid Email/Phone number or password",
            });
          } else if (error.message.includes("500")) {
            setState({
              ...state,
              errorMessage: "Problem connecting to server",
            });
          } else {
            setState({
              ...state,
              errorMessage: error.message,
            });
          }
          console.log(error);
        });
    };


    return (
        <div>
            <main className={classes.main}>
      <div className={classes.leftTitle}>
        <Typography
          variant="h2"
          color="secondary"
          style={{ fontFamily: "monospace" }}
        >
          At Once Health
        </Typography>
        <Typography
          variant="h6"
          style={{ fontFamily: "monospace", color: "black" }}
        >
          One stop app for all your health needs
        </Typography>
      </div>
      <Paper className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          {state.errorMessage && (
            <span className={classes.errorMessage}>{state.errorMessage}</span>
          )}
          <FormControl margin="normal" required fullWidth>
            <TextField
              name="emailPhone"
              label="Email / Phone number"
              required
              value={state.emailPhone}
              onChange={handleChange}
              InputProps={
                state.isPhone
                  ? {
                      startAdornment: (
                        <InputAdornment position="start">+91 </InputAdornment>
                      ),
                    }
                  : {}
              }
              inputProps={state.isPhone ? { maxLength: 10 } : {}}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              type={state.showPassword ? "text" : "password"}
              name="password"
              value={state.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={
              state.isDisabled || state.password.length === 0 ? true : false
            }
          >
            Login
          </Button>
        </form>
       
      </Paper>
    </main>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);