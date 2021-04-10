import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divider, Link, Select, Typography } from "@material-ui/core";
import { FolderSpecialOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
  flexend: {
    textAlign: "right",
  },
  imgFluid: {
    width: "50px",
    height: "50px",
  },
}));

function createData(
  ID,
  NameofDoctor,
  Qualification,
  Specailization,
  MedicalRegistrationNumber,
  Phone,
  Action
) {
  return {
    ID,
    NameofDoctor,
    Qualification,
    Specailization,
    MedicalRegistrationNumber,
    Phone,
    Action,
  };
}

const rows = [
  createData(1, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
  createData(2, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
  createData(3, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
  createData(4, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
  createData(5, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
  createData(6, "Frozen yoghurt", "MBBS", "Dentist", "ARF12346", "9856478569"),
];

export default function Doctor() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Typography variant="h4" component="h" gutterBottom>
            Doctor
          </Typography>

          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit">Admin</Link>
            <Typography color="textPrimary">Doctor</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5" gutterBottom>
              Pending Approvals
            </Typography>

            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell component="th">ID</TableCell>
                    <TableCell component="th">Name of Doctor</TableCell>
                    <TableCell component="th">Qualification</TableCell>
                    <TableCell component="th">Specailization</TableCell>
                    <TableCell component="th">
                      Images of latest degree
                    </TableCell>
                    <TableCell component="th">
                      Medical Registration Number
                    </TableCell>
                    <TableCell component="th">Phone</TableCell>
                    <TableCell component="th">Action</TableCell>
                    <TableCell component="th"> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.ID}
                      </TableCell>
                      <TableCell>{row.NameofDoctor}</TableCell>
                      <TableCell>{row.Qualification}</TableCell>
                      <TableCell>{row.Specailization}</TableCell>
                      <TableCell>
                        {" "}
                        <img
                          src="https://pbs.twimg.com/media/EassdOFWoAATSOM.jpg:large"
                          className={classes.imgFluid}
                        />{" "}
                      </TableCell>
                      <TableCell>{row.MedicalRegistrationNumber}</TableCell>
                      <TableCell>{row.Phone}</TableCell>
                      <TableCell>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select>
                            <MenuItem value="NotAvaliable">Approve</MenuItem>
                            <MenuItem value="Admin">Decline</MenuItem>
                            <MenuItem value="Sadmin">Hold</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="secondary">
                          Save
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5" gutterBottom>
              Active Doctors
            </Typography>

            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell component="th">ID</TableCell>
                    <TableCell component="th">Name of Doctor</TableCell>
                    <TableCell component="th">Qualification</TableCell>
                    <TableCell component="th">Specailization</TableCell>
                    <TableCell component="th">
                      Medical Registration Number
                    </TableCell>
                    <TableCell component="th">Last Active</TableCell>
                    <TableCell component="th">City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.ID}
                      </TableCell>
                      <TableCell>{row.NameofDoctor}</TableCell>
                      <TableCell>{row.Qualification}</TableCell>
                      <TableCell>{row.Specailization}</TableCell>
                      <TableCell>{row.MedicalRegistrationNumber}</TableCell>
                      <TableCell>24/02/2020</TableCell>
                      <TableCell>Thane</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
