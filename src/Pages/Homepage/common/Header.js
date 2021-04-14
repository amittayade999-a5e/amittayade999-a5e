import React from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import MouseIcon from "@material-ui/icons/Mouse";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import "../../../assets/css/main.css";

import logo from "../../../assets/img/logo.png";

function Header(props) {
    
    
    


    const useStyles = makeStyles((theme) => ({
        navBar: {
            background: "#fff",
        },
      
        spacing: {
            marginRight: "10px",
        },
    }));

    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className="navbarTop">
                    <Toolbar className={classes.navBar}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <img src={logo} className="logo" />
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant="contained" color="secondary" size="small" className="menuToggle">
                                    <MenuIcon/>
                                </Button>
                                <ul className="listInline" className={this.props.showHideSidenav}>
                                    <li>
                                        <a href="" className="btn">
                                            Home
                    </a>
                                    </li>
                                    <li>
                                        <a href="#Doctor" className="btn">
                                            For Doctor
                    </a>
                                    </li>
                                    <li>
                                        <a href="#Patient" className="btn">
                                            For Patient
                    </a>
                                    </li>
                                    <li>
                                        <a href="#About" className="btn">
                                            About Us
                    </a>
                                    </li>
                                    <li>
                                        <a href="#Contact" className="btn">
                                            Contact Us
                    </a>
                                    </li>
                                    <li>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component={Link}
                                            to="/Login"
                                        >
                                            Login
                    </Button>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
        </div>
    );
}



export default Header;