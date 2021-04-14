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
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MouseIcon from "@material-ui/icons/Mouse";
import "../../assets/css/main.css";


import sliderImage from "../../assets/img/forpatient/Banners.png";

import doctorimageone from "../../assets/img/fordoctor/schedule3.png"
import doctorimagetwo from "../../assets/img/fordoctor/schedule1.png"
import doctorimagethree from "../../assets/img/fordoctor/schedule2.png"
import doctormedicaltwo from "../../assets/img/fordoctor/media_record_3.png"
import doctormedicalthree from "../../assets/img/fordoctor/media_record_2.png"
import doctormedicalone from "../../assets/img/fordoctor/media_record_1.png"
import doctorteleone from "../../assets/img/fordoctor/tele_3.png"
import doctortelethree from "../../assets/img/fordoctor/tele_2.png"
import doctorteletwo from "../../assets/img/fordoctor/tele_1.png"
import doctorpatientone from "../../assets/img/fordoctor/patient_3.png"
import doctorpatientthree from "../../assets/img/fordoctor/patient_2.png"
import doctorpatienttwo from "../../assets/img/fordoctor/patient_1.png"

import frontdesktop from "../../assets/img/fordoctor/front_desk.png"
import mediareporttop from "../../assets/img/fordoctor/media_report.png"
import teleconsultingtop from "../../assets/img/fordoctor/tele_consulting.png"


import aboutreddots from '../../assets/img/reddotsaboutus.png';
import quoteimg from '../../assets/img/quote.png'


import aboutImage from "../../assets/img/about.png";
import aboutImagetwo from "../../assets/img/about_two.png";

import waitingImage from "../../assets/img/waiting.png";

import Header from './common/Header';
import Footer from './common/Footer';

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';


function Patient(props) {

   
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jlsqboj', 'template_lmop3e5', e.target, 'user_aNf3TpSn1i7EodrhsbKk0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
 
 
    
    
        return (


        <div>
            <Container maxWidth="md">
                <Header/>
            </Container>

            <section className="toppartmain">
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid md={6} xs={12} item className="flexCenter">
                            <div >
                            <Typography variant="h3" component="h3">
                                All Your <span>CONSULTATION</span> Needs <span>At Once</span>
                            </Typography>
                            <Button variant="contained" color="secondary">
                            Get Started
                            </Button>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
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

            <section className="topdetailsbanners">
                <Container maxWidth="md">
                    <Typography varient="h2" component="h2">
                        FEATURES FOR DOCTOR
                    </Typography>
                    <Grid container spacing="3">
                        <Grid item sm={4} xs={12}>
                            <div className="blurBox">
                                <img src={frontdesktop}/>
                                <Typography component="h6" variant="h6">
                                Front Desk Management
                                </Typography>

                            </div>
                        </Grid>

                        <Grid item sm={4} xs={12} >
                            <div className="blurBox">
                                <img src={mediareporttop}/>
                                <Typography component="h6" variant="h6">
                                Eelectronic Medical Report 
                                </Typography>
                                
                            </div>
                        </Grid>

                        <Grid item sm={4} xs={12}>
                            <div className="blurBox">
                                <img src={teleconsultingtop}/>
                                <Typography component="h6" variant="h6">
                                Tele Consultation
                                </Typography>
                                
                            </div>
                        </Grid>
                       
                    </Grid>
                </Container>
            </section>

            

            <section className="doctorssection" id="Doctorsections">
                <Container maxWidth="md" className="gradientrelative">
             
                    <Grid container spacing={3}>
                        
                        <Grid item md={6} xs={12}>
                        <Typography variant="h4" component="h4">
                            Book Appointment 
                            </Typography>
                            
                        </Grid>
                        <Grid item md={6} xs={12} >
                        <Grid container spacing={3} className="alignCenteritems">
                                <Grid item md={6} xs={12}>
                                   

                                    <Paper className="paperStyling">
                                        <img src={doctorimageone} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    Schedule and cancel appointments with specialist you want to visit.

                                    </Typography>
                                </Grid>

                                <Grid item md={6} xs={12} >
                                    <Paper className="paperStyling">
                                        <img src={doctorimagetwo} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    Book appoitment for both in patient and tele consultation

                                    </Typography>

                                   
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        
                       
                        <Grid item md={6} xs={12}>
                        <Grid container spacing={3} className="alignCenteritems">
                                <Grid item md={6} xs={12} >
                                    <Paper className="paperStyling">
                                        <img src={doctormedicaltwo} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    Fully secured EMR.


                                    </Typography>

                                    
                                </Grid>
                                <Grid item md={6} xs={12}>
                                   

                                    <Paper className="paperStyling">
                                        <img src={doctormedicalone} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    No more medical file maintenance required.
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item md={6} xs={12}>
                        <Typography variant="h4" component="h4">
                        Medical Record
                            </Typography>
                            
                        </Grid>

                    </Grid>

                    <Grid container spacing={3}>
                        
                        <Grid item md={6} xs={12}>
                        <Typography variant="h4" component="h4">
                        Tele -Consultation
                            </Typography>
                            
                        </Grid>
                        <Grid item md={6} xs={12}>
                        <Grid container spacing={3} className="alignCenteritems">
                                <Grid item md={6} xs={12}>
                                   

                                    <Paper className="paperStyling">
                                        <img src={doctorteleone} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    No app required to get started.


                                    </Typography>
                                </Grid>

                                <Grid item md={6} xs={12} >
                                    <Paper className="paperStyling">
                                        <img src={doctorteletwo} className="spaceimages" />
                                    </Paper>
                                    <Typography variant="h5" component="h5">
                                    Use our best-in-class tele-consultation platform to connect with doctors staying far away.
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </section>

            

            

            <section className="aboutussection" id="About">
                <Grid container>
                    <img src={aboutreddots} className="aboutreddot"/>
                    <Grid item md={6} xs={12} className="aboutinfo">
                        <Container maxWidth="md">
                            <Typography varient="h1" component="h1">
                                About Us
              </Typography>
                            <Typography varient="p" component="p">
                            Coming from the third generation of the doctor's family, we understand the finer nuances of the medical ecosystem and how it works. We always imagined and wondered how we can bring a paradigm shift of transforming this ecosystem into a collaborative one by bringing PATIENT, DOCTOR, PHARMACY and PATHOLOGY on a single platform with the help of technology. We at 'At-Once Health' thrive to significantly enhance the experience of each of these 4 stakeholders by acting as a digital bridge between them thereby digitizing the entire value chain of healthcare in India.
              </Typography>
                            <Typography varient="p" component="p">
                            Furthermore, our software platform enables doctors and patients to book appointments, manage prescriptions and avail all health services in a faster and easier manner. Using our template-based, customisable and intelligently built EMR (Electronic Medical Record) system, doctors can give prescriptions to patients online; doctors and patients can maintain the precious medical history in an accurate, easy and seamless manner.
              </Typography>

                            <Link to="">
                                Read More <DoubleArrowIcon></DoubleArrowIcon>
                            </Link>
                        </Container>
                        <img src={aboutImagetwo} className="aboutsmallimage" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={aboutImage} className="aboutImage" />
                    </Grid>
                </Grid>
            </section>

            <section className="waitingsection">
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Typography varient="h3" component="h3">
                                No More Waiting For Your Health
              </Typography>
                            <Button variant="contained" color="secondary">
                                Get Started
              </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={waitingImage} />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="testimonialssection">
                <Container maxWidth="md">
                    <img src={quoteimg} className="quoteimage" />
                    <Typography component="h1" varient="h1" className="whiteOpacitytext">
                        Testimonials
          </Typography>
                    <img src="" />
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
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

                        <Grid item md={6} xs={12}>
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
                            <Grid item md={6} xs={12}>
                                <Typography varient="h3" component="h3">
                                    Contact Us
                                    </Typography>
                                    <form className="contact-form" onSubmit={sendEmail}>
                                <TextField
                                    id="outlined-search"
                                    label="Enter Your EmailID"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    className="formControls"
                                    Name="from_name"
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
                                    name="message"
                                />

                                <Button variant="contained" color="secondary" type="submit">
                                    Submit
                </Button>
                </form>
                            </Grid>
                            <Grid item md={6} xs={12} className="leftLine">
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

           <Footer/>
        </div>
    );
}

export default Patient;