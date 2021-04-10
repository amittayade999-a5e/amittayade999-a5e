
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider, Link, Typography } from '@material-ui/core';
import { FolderSpecialOutlined } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),

      color: theme.palette.text.secondary,
    },
    breadcrumbs:{
        marginBottom : theme.spacing(2)
    },
    flexend:{
        textAlign:'right'
    }
  }));


export default function Emr() {

    
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
           <Grid container spacing={3} >
                    <Grid item md={8} xs={12}>
                    <Typography variant="h4" component="h" gutterBottom>Electronic medical records </Typography>

                    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
                        <Link color="inherit" href="/" >
                        Home
                        </Link>
                        <Link color="inherit" >
                            Admin
                        </Link>
                        <Typography color="textPrimary">Emr</Typography>
                        </Breadcrumbs>
                    </Grid>
                    
                </Grid>

                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        
                    </Grid>
                </Grid>
        </div>
    )
}
