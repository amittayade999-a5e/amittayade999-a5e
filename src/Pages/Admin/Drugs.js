import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { Divider, Link, Typography } from "@material-ui/core";
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
import Badge from "@material-ui/core/Badge";

function createData(ID, CurrentEntry, CorrectedEntry) {
  return { ID, CurrentEntry, CorrectedEntry };
}

const rows = [
  createData(1, "Frozen yoghurt", 159),
  createData(2, "Ice cream sandwich", 237),
  createData(3, "Eclair", 262),
  createData(4, "Cupcake", 305),
  createData(5, "Gingerbread", 356),
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  review: {
    // background : 'blue',
    // color : '#fff',
    // padding : '10px',
    // width : '100px'
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
  formControl: {
    width: "100px",
  },
}));

function Drugs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} j>
        <Grid item md={8} xs={12}>
          <Typography variant="h4" component="h" gutterBottom>
            Drugs
          </Typography>

          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit">Admin</Link>
            <Typography color="textPrimary">Drugs</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item md={4} xs={12} className={classes.flexend}>
          <FormControl
            className={classes.root}
            noValidate
            autoComplete="off"
            fullWidth
          >
            <TextField
              id="outlined-basic"
              label="Search Here"
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell component="th">ID</TableCell>
                  <TableCell component="th">Current Entry</TableCell>
                  <TableCell component="th">Action</TableCell>
                  <TableCell component="th">Corrected Entry</TableCell>
                  <TableCell component="th">Temporary</TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.ID}
                    </TableCell>
                    <TableCell>{row.CurrentEntry}</TableCell>
                    <TableCell>
                      {/* <Button variant="contained" color="primary">Edit</Button> */}

                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select>
                          <MenuItem value="NotAvaliable">
                            Not Avaliable
                          </MenuItem>
                          <MenuItem value="Admin">Reviewed</MenuItem>
                          <MenuItem value="Sadmin">Hold</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <TextField
                        id="outlined-basic"
                        size="small"
                        label=" Spelling of the drug."
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select>
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained">Save</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Drugs;
