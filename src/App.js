import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adminsidebar from "./Pages/Common/Adminsidebar";

import Login from "./Pages/Common/Login";
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Admin">
            <Adminsidebar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
