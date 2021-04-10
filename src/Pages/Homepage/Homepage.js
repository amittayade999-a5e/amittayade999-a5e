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
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/css/main.css";

import logo from "../../assets/img/logo.png";
import logoFooter from "../../assets/img/logowhite.png";
import sliderImage from "../../assets/img/banner/Banner-1.png";
import doctorBigimage from "../../assets/img/fordoctor/illustration.png";
import doctorThumbnailone from "../../assets/img/fordoctor/1.png";
import doctorThumbnailtwo from "../../assets/img/fordoctor/2.png";
import doctorThumbnailthree from "../../assets/img/fordoctor/3.png";
import doctorThumbnailfour from "../../assets/img/fordoctor/4.png";

import patientBigimage from "../../assets/img/forpatient/illustration.png";
import patientThumbnailone from "../../assets/img/forpatient/1.png";
import patientThumbnailtwo from "../../assets/img/forpatient/2.png";
import patientThumbnailthree from "../../assets/img/forpatient/3.png";
import patientThumbnailfour from "../../assets/img/forpatient/4.png";

import aboutImage from "../../assets/img/about.png";
import aboutImagetwo from "../../assets/img/about_two.png";

import waitingImage from "../../assets/img/waiting.png";




function Homepage(props) {

    const useStyles = makeStyles((theme) => ({
        navBar: {
            background: "#fff",
        },
        listInline: {
            display: "flex",
        },
        spacing: {
            marginRight: "10px",
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="md">
                <AppBar position="fixed" className="navbarTop">
                    <Toolbar className={classes.navBar}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <img src={logo} className="logo" />
                            </Grid>
                            <Grid item xs={8}>
                                <ul className={classes.listInline}>
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
            </Container>

            <section className="toppartmain">
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid xs={6} item>
                            <Typography variant="h3" component="h3">
                                All Your <span>Health</span> Needs <span>At Once</span>
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Get More
              </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={sliderImage} className="headerSlider" />
                        </Grid>
                    </Grid>
                </Container>

                <a href="" className="fixedbottom">
                    <MouseIcon />
                    <Typography component="p" variant="p">
                        Scoll Down
          </Typography>
                </a>
            </section>

            <section className="doctorssection" id="Doctor">
                <Container maxWidth="md" className="gradientrelative">
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="middleAbsolute">
                            <Typography variant="h3" component="h3" className="headerInfo">
                                For Doctor
              </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Paper className="paperStyling">
                                        <img src={doctorThumbnailone} className="spaceimages"></img>
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Create EMR
                  </Typography>

                                    <Paper className="paperStyling">
                                        <img src={doctorThumbnailthree} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Multiple Clinic / Hospital Management
                  </Typography>
                                </Grid>

                                <Grid item xs={6} className="extraSpace">
                                    <Paper className="paperStyling">
                                        <img src={doctorThumbnailtwo} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Consult Both Online and Offline
                  </Typography>

                                    <Paper className="paperStyling">
                                        <img src={doctorThumbnailfour} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Manage assistant and control access
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={doctorBigimage} />
                            <Button variant="contained" color="secondary">
                                Know More <ArrowRightAltIcon></ArrowRightAltIcon>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="doctorssection" id="Patient">
                <Container maxWidth="md" className="gradientrelative">
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="middleAbsolute">
                            <Typography variant="h3" component="h3" className="headerInfo">
                                For Patients
              </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={patientBigimage} />
                            <Button variant="contained" color="secondary">
                                Know More <ArrowRightAltIcon></ArrowRightAltIcon>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Paper className="paperStyling">
                                        <img src={patientThumbnailone} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Book Appointment
                  </Typography>

                                    <Paper className="paperStyling">
                                        <img src={patientThumbnailtwo} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Download Previous EMR
                  </Typography>
                                </Grid>

                                <Grid item xs={6} className="extraSpace">
                                    <Paper className="paperStyling">
                                        <img src={patientThumbnailthree} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        View History
                  </Typography>

                                    <Paper className="paperStyling">
                                        <img src={patientThumbnailfour} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                        Consult Online and Offline
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="aboutussection" id="About">
                <Grid container>
                    <Grid item xs={6} className="aboutinfo">
                        <Container maxWidth="md">
                            <Typography varient="h1" component="h1">
                                About Us
              </Typography>
                            <Typography varient="p" component="p">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                used in laying out print, graphic or web designs. The passage is
                                attributed to an unknown typesetter in the 15th century who is
                                thought to have scrambled parts of Cicero's De Finibus Bonorum
                                et Malorum for use in a type specimen book.
              </Typography>
                            <Typography varient="p" component="p">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                used in laying out print, graphic or web designs. The passage is
                                attributed to an unknown typesetter in the 15th century who is
                                thought to have scrambled parts of Cicero's De Finibus Bonorum
                                et Malorum for use in a type specimen book.
              </Typography>

                            <Link to="">
                                Read More <DoubleArrowIcon></DoubleArrowIcon>
                            </Link>
                        </Container>
                        <img src={aboutImagetwo} className="aboutsmallimage" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={aboutImage} className="aboutImage" />
                    </Grid>
                </Grid>
            </section>

            <section className="waitingsection">
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography varient="h3" component="h3">
                                No More Waiting For Your Health
              </Typography>
                            <Button variant="contained" color="secondary">
                                Get Started
              </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={waitingImage} />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="testimonialssection">
                <Container maxWidth="md">
                    <Typography component="h1" varient="h1" className="whiteOpacitytext">
                        Testimonials
          </Typography>
                    <img src="" />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className="spacingWhite">
                                <Typography varient="h6" component="h6">
                                    Incredible Experience
                </Typography>
                                <Typography varient="p" component="p">
                                    We had an incredible experience working with Landify and were
                                    impressed they made such a big difference in only three weeks.
                                    Our team is so grateful for the wonderful improvements they
                                    made and their ability to get familiar with the concept so
                                    quickly. It acted as a catalyst to take our design to the next
                                    level and get more eyes on our product.
                </Typography>
                            </Paper>

                            <Grid container flex className="flexCenter">
                                <div>
                                    <Avatar className="avatarSpacing" />
                                </div>
                                <div>
                                    <Typography varient="h6" component="h6">
                                        Jane Cooper
                  </Typography>
                                    <Typography varient="p" component="p">
                                        CEO, ABC Corporation
                  </Typography>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper className="spacingWhite">
                                <Typography varient="h6" component="h6">
                                    Incredible Experience
                </Typography>
                                <Typography varient="p" component="p">
                                    We had an incredible experience working with Landify and were
                                    impressed they made such a big difference in only three weeks.
                                    Our team is so grateful for the wonderful improvements they
                                    made and their ability to get familiar with the concept so
                                    quickly. It acted as a catalyst to take our design to the next
                                    level and get more eyes on our product.
                </Typography>
                            </Paper>

                            <Grid container flex className="flexCenter">
                                <div>
                                    <Avatar className="avatarSpacing" />
                                </div>
                                <div>
                                    <Typography varient="h6" component="h6">
                                        Jane Cooper
                  </Typography>
                                    <Typography varient="p" component="p">
                                        CEO, ABC Corporation
                  </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="contactsection" id="Contact">
                <Container maxWidth="md">
                    <Paper className="contactblur">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography varient="h3" component="h3">
                                    Contact Us
                </Typography>

                                <TextField
                                    id="outlined-search"
                                    label="Enter Your EmailID"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    className="formControls"
                                />

                                <TextField
                                    id="outlined-search"
                                    className="formControls"
                                    multiline
                                    fullWidth
                                    rowsMax={4}
                                    rows={4}
                                    label="Enter Your Message"
                                    type="text"
                                    variant="outlined"
                                />

                                <Button variant="contained" color="secondary">
                                    Submit
                </Button>
                            </Grid>
                            <Grid item xs={6} className="leftLine">
                                <Typography varient="h4" component="h4">
                                    <RoomOutlinedIcon></RoomOutlinedIcon> Address
                </Typography>
                                <Typography varient="p" component="p">
                                    A-118,First Floor,Lodha Supremus II, Road no.22,Wagle
                                    Estate,Thane West, Thane,Maharastra 400604
                </Typography>

                                <Typography varient="h4" component="h4">
                                    <PhoneOutlinedIcon></PhoneOutlinedIcon> Phone
                </Typography>
                                <Typography varient="p" component="p">
                                    +91 9127375935
                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </section>

            <footer>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <img src={logoFooter} />
                        </Grid>
                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
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

export default Homepage;