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

import logoFooter from "../../../assets/img/logowhite.png";


function Footer(props) {
    return (
        <div>
             <footer>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <img src={logoFooter} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography varient="h6" component="h6">
                                LINKS
              </Typography>
                            <ul>
                                <li>
                                    <Button component={Link} to="">
                                        <ArrowRightOutlinedIcon />
                    Home
                  </Button>
                                </li>
                                <li>
                                    <Button component={Link} to="">
                                        <ArrowRightOutlinedIcon />
                    For Doctor
                  </Button>
                                </li>
                                <li>
                                    <Button component={Link} to="">
                                        <ArrowRightOutlinedIcon />
                    For Patient
                  </Button>
                                </li>
                                <li>
                                    <Button component={Link} to="">
                                        <ArrowRightOutlinedIcon />
                    About Us
                  </Button>
                                </li>
                                <li>
                                    <Button component={Link} to="">
                                        <ArrowRightOutlinedIcon />
                    Contact Us
                  </Button>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography varient="h6" component="h6" guttrBottom>
                                NEWSLETTER
              </Typography>

                            <Grid container spacing={1} className="topSpacing">
                                <Grid item xs={10}>
                                    <TextField
                                        variant="outlined"
                                        fullwidth
                                        label="Enter Your EmailID"
                                        size="small"
                                        className="footerForm"
                                        fullWidth
                                    ></TextField>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="contained">
                                        <ArrowForwardIcon></ArrowForwardIcon>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Typography varient="h6" component="h6" className="footerLine">
                                Social
              </Typography>

                            <ul className="list-inline">
                                <li>
                                    <Link to="">
                                        <FacebookIcon></FacebookIcon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <InstagramIcon></InstagramIcon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <YouTubeIcon></YouTubeIcon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <TwitterIcon></TwitterIcon>
                                    </Link>
                                </li>
                            </ul>
                        </Grid>

                        <Grid item xs={12} alignCenter>
                            <hr></hr>
                            <center>
                                <Typography varient="p" component="p">
                                    At Once 4 Health,All Rights Reserve
                                </Typography>
                            </center>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;