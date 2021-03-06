import React, { useState, useEffect, useContext } from "react";
import {
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
    IconButton,
    InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DateFnsUtils from "@date-io/date-fns";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Context, domainAddress } from "../App/Config";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginBottom: "20px",
    },
    breadcrumbs: {
        marginBottom: theme.spacing(2),
    },
    flexend: {
        textAlign: "right",
    },
    formControl: {
        width: "100%",
    },
    margintop: {
        marginTop: "20px",
    },
    buttonSpacing: {
        marginRight: "10px",
    },
    fullWidth: {
        width: "100%",
    },
}));

export default function Addadmin(props) {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [context] = useContext(Context);


    //state logic start
    const initialState = {
        adminID: -1,
        isEditDisabled: true,
        showPassword: false,
        errorMessage: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: null,
        number: "",
        role: "",
        emailId: "",
        password: "",
    };

    const [state, setState] = useState([initialState]);

    const handleChange = (i, e) => {
        const inputName = e.target.name;
        const fieldValues = [...state];
        if (inputName.startsWith("firstName")) {
            fieldValues[i].firstName = e.target.value;
        } else if (inputName.startsWith("middleName")) {
            fieldValues[i].middleName = e.target.value;
        } else if (inputName.startsWith("lastName")) {
            fieldValues[i].lastName = e.target.value;
        } else if (inputName.startsWith("number")) {
            if (e.target.value.length > 10 || isNaN(Number(e.target.value))) {
            } else {
                fieldValues[i].number = e.target.value;
            }
        } else if (inputName.startsWith("role")) {
            fieldValues[i].role = e.target.value;
        } else if (inputName.startsWith("emailId")) {
            fieldValues[i].emailId = e.target.value;
        } else if (inputName.startsWith("password")) {
            fieldValues[i].password = e.target.value;
        }
        setState(fieldValues);
    };

    const addNewAssistant = (e) => {
        e.preventDefault();
        const fieldValues = [...state];
        fieldValues.push(initialState);
        setState(fieldValues);
    };

    //handling assistant edit
    const handleEditAssistant = (e, i) => {
        e.preventDefault();
        const fieldValues = [...state];
        fieldValues[i].isEditDisabled = true;
        setState(fieldValues);
    };

    //fetch initail data
  useEffect(() => {
      axios
        .get(`${domainAddress}/admin/users?roles`)
        .then((res) => res.data)
        .then((data) => {
          const dataArray = [];
          data &&
            data.forEach((obj) => {
              const splittedName = obj.name.split(" ");
              const fetchDOB = obj.dob ? obj.dob.split("-") : null;
              dataArray.push({
                adminID: obj.id,
                isEditDisabled: false,
                showPassword: false,
                errorMessage: "",
                firstName: splittedName[0],
                middleName: splittedName[1] ? splittedName[1] : "",
                lastName: splittedName[2] ? splittedName[2] : "",
                dob: obj.dob
                  ? new Date(fetchDOB[2], fetchDOB[1] - 1, fetchDOB[0])
                  : null,
                number: obj.number,
                roleId: obj.role,
                emailId: obj.emailId,
                password: obj.password,
                functionality: obj.functionalityMasterDTO.map((elem) =>
                  JSON.stringify(elem)
                ),
              });
            });
          setState(dataArray);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);


    const handleSubmit = (idx, e, adminID) => {
        e.preventDefault();
        const requestBody = {
           
            dob:
                state[idx].dob &&
                `${state[idx].dob.getDate() < 10
                    ? `0${state[idx].dob.getDate()}`
                    : state[idx].dob.getDate()
                }-${state[idx].dob.getMonth() + 1 < 10
                    ? `0${state[idx].dob.getMonth() + 1}`
                    : state[idx].dob.getMonth() + 1
                }-${state[idx].dob.getFullYear()}`,
            emailId: state[idx].emailId,
            roleId : state[idx].role,
            password : state[idx].password,
            firstName : state[idx].firstName,
            middleName :state[idx].middleName,
            lastName : state[idx].lastName,
            number: state[idx].number,
            ...(adminID === -1 && { password: state[idx].password }),
        };
        axios
          .post(
            `${domainAddress}/user/register`,
            requestBody
          )
          .then((res) => {
            props.history.go(0);
          })
          .catch((error) => {
            console.log(error);
            const fieldValues = [...state];
            if (error.message.includes("400")) {
              fieldValues[idx].errorMessage =
                "User already exists with same email / mobile number";
            } else if (error.message.includes("500")) {
              fieldValues[idx].errorMessage =
                "An error occurred. Please try after sometime";
            } else {
              fieldValues[idx].errorMessage = error.message;
            }
            setState(fieldValues);
          });
    };



    //handling assistant delete
    const handleDeleteAssistant = (e, i, adminID) => {
        e.preventDefault();
        if (adminID === -1) {
            const fieldValues = [...state];
            fieldValues.splice(i, 1);
            setState(fieldValues);
        } else {
            //hit api and delete
            //   axios
            //     .delete(
            //       `${domainAddress}/user/register/delete?assistant-id=${adminID}&doctor-id=${context.doctorId}`
            //     )
            //     .then((res) => {
            //       const fieldValues = [...state];
            //       fieldValues.splice(i, 1);
            //       setState(fieldValues);
            //     })
            //     .catch((error) => {
            //       console.log(error);
            //     });
        }
    };

    const handleClickShowPassword = (i, e) => {
        const fieldValues = [...state];
        fieldValues[i].showPassword = !fieldValues[i].showPassword;
        setState(fieldValues);
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <div>
                <Typography variant="h4" component="h4" gutterBottom>
                    Add Admin
        </Typography>
                {state.map((fieldValues, idx) => (
                    <Paper className={classes.paper} key={idx}>
                        <form
                            onSubmit={(e) => handleSubmit(idx, e, fieldValues.adminID)}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h6" gutterBottom>
                                        Add Details
                  </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.flexend}>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.buttonSpacing}
                                        onClick={(e) => handleEditAssistant(e, idx)}
                                        disabled={fieldValues.isEditDisabled}
                                    >
                                        <EditIcon></EditIcon>
                    Edit
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={(e) =>
                                            handleDeleteAssistant(e, idx, fieldValues.adminID)
                                        }
                                    >
                                        <DeleteIcon></DeleteIcon> Delete
                  </Button>
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        className={classes.formControl}
                                        id="First-Name"
                                        label="First Name"
                                        variant="outlined"
                                        name={`firstName${idx}`}
                                        value={fieldValues.firstName}
                                        onChange={(e) => handleChange(idx, e)}
                                        disabled={!fieldValues.isEditDisabled}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        className={classes.formControl}
                                        id="middle-Name"
                                        label="Middle Name"
                                        variant="outlined"
                                        name={`middleName${idx}`}
                                        value={fieldValues.middleName}
                                        onChange={(e) => handleChange(idx, e)}
                                        disabled={!fieldValues.isEditDisabled}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        className={classes.formControl}
                                        id="Last-Name"
                                        label="Last Name"
                                        variant="outlined"
                                        name={`lastName${idx}`}
                                        value={fieldValues.lastName}
                                        onChange={(e) => handleChange(idx, e)}
                                        disabled={!fieldValues.isEditDisabled}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            variant="inline"
                                            inputVariant="outlined"
                                            label="Date of birth"
                                            format="dd/MM/yyyy"
                                            fullWidth
                                            InputAdornmentProps={{ position: "end" }}
                                            name={`dob${idx}`}
                                            value={fieldValues.dob}
                                            onChange={(e) => handleDateChange(idx, e)}
                                            disabled={!fieldValues.isEditDisabled}
                                            allowKeyboardControl={false}
                                            disableFuture
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            type={fieldValues.showPassword ? "text" : "password"}
                                            label="Password"
                                            variant="outlined"
                                            required
                                            name={`password${idx}`}
                                            value={fieldValues.password}
                                            onChange={(e) => handleChange(idx, e)}
                                            disabled={!fieldValues.isEditDisabled}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={(e) => handleClickShowPassword(idx, e)}
                                                            onMouseDown={handleMouseDownPassword}
                                                            disabled={!fieldValues.isEditDisabled}
                                                        >
                                                            {fieldValues.showPassword ? (
                                                                <Visibility />
                                                            ) : (
                                                                <VisibilityOff />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Role
                    </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            onChange={(e) => handleChange(idx, e)}
                                            label="Role"
                                            name={`role${idx}`}
                                        >
                                            <MenuItem value="4">Admin</MenuItem>
                                            <MenuItem value="5">Super Admin</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        className={classes.formControl}
                                        id="Phone"
                                        label="Phone No"
                                         onChange={(e) => handleChange(idx, e)}
                                        variant="outlined"
                                        name={`number${idx}`}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        className={classes.formControl}
                                        id="Email"
                                        onChange={(e) => handleChange(idx, e)}
                                        label="Email"
                                        variant="outlined"
                                        name={`emailId${idx}`}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        type="submit"
                                    >
                                        <SaveIcon></SaveIcon> Save
                  </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                ))}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            className={classes.margintop}
                            color="secondary"
                            onClick={addNewAssistant}
                        >
                            <AddCircleOutlineIcon></AddCircleOutlineIcon> Add New
            </Button>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
