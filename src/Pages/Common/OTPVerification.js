import React, { useState, useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import {
  Typography,
  Paper,
  Avatar,
  FormControl,
  Input,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
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
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
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
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
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
});

function OTPVerification(props) {
  const { classes } = props;

  const sessionProp =
    props.location.state !== undefined ? props.location.state : null;

  const initialState = {
    otp: "",
    errorMessage: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [context, setContext] = useContext(Context);
  const [showDialog, setShowDialog] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    sessionProp.otp = Number(state.otp);
    if (context.userClientPresence) {
      axios
        .post(`${domainAddress}/user/register/verify`, sessionProp)
        .then((res) => {
          if (res.status === 200) {
            setContext({ ...context, verified: true });
            document.cookie = `atkn=${
              res.data.jwttoken
            }; path=/; priority=high; max-age=${30 * 24 * 60 * 60}`;
            if (context.roleId === 1) {
              setShowDialog(true);
            } else if (context.roleId === 2) {
              props.history.replace("/patient/dashboard");
            } else if (context.roleId === 3) {
              props.history.replace("/doctor/dashboard");
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
              errorMessage: "Invalid OTP",
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
    } else {
      setState({
        ...state,
        errorMessage:
          "There's an issue in fetching the user data, please try to login or register again",
      });
    }
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          OTP Verification
        </Typography>
        <br />
        <form className={classes.form} onSubmit={onSubmit}>
          {state.errorMessage && (
            <span className={classes.errorMessage}>
              {state.errorMessage}
              <br />
              <br />
            </span>
          )}
          <Typography style={{ float: "left" }}>
            Please enter the OTP verification code recieved by you on your
            registered mobile number or email address.
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>OTP</InputLabel>
            <Input
              type="number"
              name="otp"
              value={state.otp}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={
              state.otp.length < 1 ? true : false || sessionProp === null
            }
          >
            Submit
          </Button>
        </form>
        <br />
        <Typography>
          <Link to="/login">Go back to Login</Link>
          {" | "}
          <Link to="/register">Go back to Register</Link>
        </Typography>
      </Paper>
      <Dialog disableBackdropClick disableEscapeKeyDown open={showDialog}>
        <DialogTitle>
          {"Navigate to? [Recommended navigating to Profile]"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Your otp verification was success, Would you like to navigate to
            profile setup page or wish to first explore the platform. Profile
            will navigate you to fill your basic details, clinic details where
            as navigating dashboard will navigate you to dashboard page.
            However, if you wish to fill profile details later you can do it
            later.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-around" }}>
          <Button
            color="primary"
            onClick={() => {
              props.history.replace("/doctor/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              props.history.replace("/doctor/dashboard");
              props.history.push("/doctor/profile");
            }}
          >
            Profile
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}

OTPVerification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OTPVerification);
