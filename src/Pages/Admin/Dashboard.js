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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';
import { deepOrange } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';



import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    SplineSeries,
  } from '@devexpress/dx-react-chart-material-ui';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
   
      color: theme.palette.text.secondary,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
      pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
      },
      green: {
        color: '#fff',
        backgroundColor: green[500],
      },
    breadcrumbs:{
        marginBottom : theme.spacing(2)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  }));

  const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];
  

 function Dashboard() {
   
    const classes = useStyles();


        return (
            <div className={classes.root}>
                
                <Typography variant="h4" component="h" gutterBottom>Dashboard</Typography>

            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
                <Link color="inherit" href="/" >
                   Home
                </Link>
                <Link color="inherit" >
                    Admin
                </Link>
                <Typography color="textPrimary">Dashboard</Typography>
                </Breadcrumbs>
                
            <Grid container spacing={3}>

            <Grid item xs={12}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
          <Badge variant="dot" color="error"> Pending Approved  
           
            </Badge>  
            </Typography>
            </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.orange} >
                                                    20
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Drugs</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.deepPurple}>
                                                    12
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography alignCenter  noWrap variant="h6" component="h6"  gutterBottom>Tests</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.pink} >
                                                    5
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Diseases</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.green} >
                                                    14
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Symptoms</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.orange} >
                                                    30
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Allergies</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.deepPurple} >
                                                    120
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Doctors</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.pink} >
                                                    25
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Pharmacies</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item sm={4} xs={3}>
                                                <Avatar className={classes.green} >
                                                    32
                                                </Avatar>
                                            </Grid>
                                            <Grid item sm={8} xs={9}>
                                                <Typography noWrap alignCenter  noWrap alignCenter variant="h6" component="h6" gutterBottom>Pathologies</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>
                     <Badge variant="dot" color="error">
                     Total Users
                        </Badge>  
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
              

                    <Grid container spacing={3}>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item  xs={3}>
                                                <Avatar className={classes.orange} >
                                                    32
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Doctor</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item  xs={3}>
                                                <Avatar className={classes.deepPurple}>
                                                    12
                                                </Avatar>
                                            </Grid>
                                            <Grid item  xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Pathologies</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item  xs={3}>
                                                <Avatar className={classes.pink} >
                                                    5
                                                </Avatar>
                                            </Grid>
                                            <Grid item  xs={9}>
                                              
                                                <Typography   noWrap alignCenter variant="h6" component="h6"  gutterBottom>Pharmacies</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                            <Grid item  xs={3}>
                                                <Avatar className={classes.green} >
                                                    14
                                                </Avatar>
                                            </Grid>
                                            <Grid item  xs={9}>
                                              
                                                <Typography alignCenter  noWrap alignCenter variant="h6" component="h6"  gutterBottom>Patients</Typography>
                                            </Grid>
                                        </Grid>
                            </Paper>
                        </Grid>
                      
                        </Grid>
                    
                       

                  
                    </AccordionDetails>
                </Accordion>
                
            </Grid>
             
              
              
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12}>

              <Paper className={classes.paper}>
                <Typography variant="h5" component="h5" gutterBottom>Total Visitors</Typography>
                <Chart
                data={data}
                >
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries valueField="value" argumentField="argument" />
                </Chart>
                </Paper>
                </Grid>
              </Grid>

            
          </div>
        )
    }



export default Dashboard;