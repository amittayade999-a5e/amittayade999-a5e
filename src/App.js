import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adminsidebar from "./Pages/Common/Adminsidebar";
import { Context, domainAddress } from "./Pages/App/Config";
import axios from "axios";
import { CssBaseline } from '@material-ui/core'

import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


import Login from "./Pages/Common/Login";
import Homepage from './Pages/Homepage/Homepage';
import Doctor from './Pages/Homepage/Doctor';
import Patient from './Pages/Homepage/Patient';
import OTPVerification from './Pages/Common/OTPVerification';

function App() {

  
  //global axios setup
  axios.interceptors.request.use(
    config => {
      config.headers.authorization = document.cookie.split("; ").find(pair => pair.startsWith("atkn=")) &&
      `Bearer ${
        document.cookie.split("; ").find(pair => pair.startsWith("atkn=")).substring(5)
      }`;
      return config;
    },
    error =>{
      return Promise.reject(error);
    }
  );

  // axios.interceptors.response.use((response) => {
  //   return response;
  // }, (error) => {
  //   if(error.response.status === 401 || error.response.data.message === '401 Unauthorized'){
  //     document.cookie = `atkn=; path=/; priority=high; max-age=${0}`;
  //     // localStorage.removeItem("userNumber");
  //     // localStorage.removeItem("userEmail");
  //     window.location = "/login";
  //   }
  //   return Promise.reject(error);
  // });

/* useEffect(() =>{
  const token=document.cookie.split("; ").find(pair => pair.startsWith("atkn=")).substring(5)
  console.log(atob(token.split('.')[1]));
},[]); */

  //start of interval to identify cookie expire and handle redirection
  const [redirectLogin,setRedirectLogin] = useState(false);
  const [redirectDashbrd,setRedirectDashbrd] = useState(false);

  useEffect(()=>{
    if(!document.cookie.split("; ").find(pair => pair.startsWith("atkn="))){
      if(window.location.pathname.startsWith("/doctor") 
      || window.location.pathname.startsWith("/patient")){
        setRedirectLogin(true);
      }
    }
  },[]);

  const intervalLogic = () =>{
    if(window.location.pathname !== "/" &&
      document.cookie.split("; ").find(pair => pair.startsWith("atkn="))){
      if(!window.location.pathname.startsWith("/doctor") 
      && !window.location.pathname.startsWith("/patient")){
        setRedirectDashbrd(true);
        setRedirectLogin(false);
      }
    }
  }

  let intervalFunction = setInterval(intervalLogic,1000);

  function handleVisibilityChange() {
    if (document.hidden) {
      clearInterval(intervalFunction);
    } else  {
      intervalFunction = setInterval(intervalLogic,1000);
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange, false);
  //end of interval to identify cookie expire and handle redirection

  //context initializaition
  const [context,setContext] = useState({
    userClientPresence: false,
    id: undefined,
    doctorId: undefined,
    patientId: undefined,
    firstName: "",
    middleName: "",
    lastName: "",
    emailId: "",
    number: "",
    roleId: undefined,
    verified: false,
    clinicDetail: null,
    functionalityMaster: null,
    sortedClinicId: null,
    sortedFunctionalityId: null,
    themeMode: localStorage.getItem('themeMode') === 'true'? true:false
  });

  //userDetail fetch
  useEffect(() => {
    const token = document.cookie.split("; ").find(pair => pair.startsWith("atkn=")) &&
    document.cookie.split("; ").find(pair => pair.startsWith("atkn=")).substring(5);
    const payLoad = token && atob(token.split('.')[1]);
    payLoad && 
    axios.get(`${domainAddress}/user/detail?id=${JSON.parse(payLoad).sub}`)
    .then(res => {
      if (res.status === 200) {
        setContext({
          ...context,
          userClientPresence: true,
          id: res.data.id,
          doctorId: res.data.role.roleId===1 || res.data.role.roleId===3 ? res.data.doctorDetail.doctorId : undefined,
          patientId: res.data.role.roleId===2 ? res.data.patientData.patientId : undefined,
          firstName: res.data.firstName,
          middleName: res.data.middleName,
          lastName: res.data.lastName,
          emailId: res.data.emailId,
          number: res.data.number,
          roleId: res.data.role.roleId,
          verified: res.data.verified,
         
          });
      } else{
        throw new Error("Some error occured");
      }
    })
    .catch((error) =>{
      console.log(error);
    })
  }, []);

 


  const theme = createMuiTheme({
    palette: {
      primary: {
        dark: "#1c51a8",
        main: "#2874f0",
        light: "#538ff3",
      },
      type: context.themeMode ? 'dark': 'light',
    },
  });

  return (
    <div>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Context.Provider value={[context,setContext]}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/otpVerification">
                    <OTPVerification/>
                </Route>
                <Route exact path="/Doctor">
                  <Doctor/>
                </Route>
                <Route exact path="/Patient">
                  <Patient/>
                </Route>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/Admin">
                  <Adminsidebar />
                </Route>
              </Switch>
            </Router>
            </Context.Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
