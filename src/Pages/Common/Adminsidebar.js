import React from 'react';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import TocIcon from "@material-ui/icons/Toc";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SubjectIcon from "@material-ui/icons/Subject";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import { Button } from "@material-ui/core";
import Addadmin from '../Admin/Addadmin';
import Drugs from "../Admin/Drugs";
import Tests from "../Admin/Tests";
import Diseases from "../Admin/Diseases";
import Symptoms from "../Admin/Symptoms";
import Allergies from "../Admin/Allergies";
import Doctor from "../Admin/Doctor";
import Emr from "../Admin/Emr";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            justifyContent: "space-between",
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            justifyContent: "space-between",
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-end',
        justifyContent: "space-between",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    space: {
        justifyContent: "space-between",
    },
    centerSpacing: {
        display: "flex",
        alignItems: "center",
    },
}));

function Adminsidebar() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.space}>
                    <div className={classes.centerSpacing}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            At Once Health
            </Typography>
                    </div>
                    <div>
                        <Button
                            component={Link}
                            size="small"
                            variant="outlined"
                            color="inherit"
                            edge="end"
                            to={"/Admin/Addadmin"}
                        >
                            Add Admin
              <IconButton color="inherit" size="small">
                                <GroupAddIcon />
                            </IconButton>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Main Menu
            </ListSubheader>
                    }
                >
                    <Link to="/Admin/">
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link to="/Admin/Drugs">
                        <ListItem button>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drugs" />
                        </ListItem>
                    </Link>
                    <Link to="/Admin/Tests">
                        <ListItem button>
                            <ListItemIcon>
                                <PlaylistAddCheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tests" />
                        </ListItem>
                    </Link>
                    <Link to="/Admin/Diseases">
                        <ListItem button>
                            <ListItemIcon>
                                <TocIcon />
                            </ListItemIcon>
                            <ListItemText primary="Diseases" />
                        </ListItem>
                    </Link>
                    <Link to="/Admin/Symptoms">
                        <ListItem button>
                            <ListItemIcon>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Symptoms" />
                        </ListItem>
                    </Link>
                    <Link to="/Admin/Allergies">
                        <ListItem button>
                            <ListItemIcon>
                                <SubjectIcon />
                            </ListItemIcon>
                            <ListItemText primary="Allergies" />
                        </ListItem>
                    </Link>
                </List>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Doctors Menu
            </ListSubheader>
                    }
                >
                    <Link to="/Admin/Doctor">
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Doctors" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <LocalHospitalIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pharmacies" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pathologies" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patients" />
                    </ListItem>
                    <Link to="/Admin/Emr">
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Emr" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <Switch>
          <Route exact path="/Admin">
            <Dashboard />
          </Route>
          <Route exact path="/Admin/Drugs">
            <Drugs />
          </Route>
          <Route exact path="/Admin/Tests">
            <Tests />
          </Route>
          <Route exact path="/Admin/Diseases">
            <Diseases />
          </Route>
          <Route exact path="/Admin/Symptoms">
            <Symptoms />
          </Route>
          <Route exact path="/Admin/Allergies">
            <Allergies />
          </Route>
          <Route exact path="/Admin/Doctor">
            <Doctor />
          </Route>
          <Route exact path="/Admin/Emr">
            <Emr />
          </Route>
          <Route exact path="/Admin/Addadmin">
            <Addadmin />
          </Route>
        </Switch>
            </main>
        </div>
    );
}

export default Adminsidebar;