import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import LoginComponent from "./components/Login";
import RegisterComponent from './components/Register';
import Tabs from "./components/Tabs"
import Library from "./tabs/Library";
import Search from "./tabs/Search";
import Notes from "./tabs/Notes";
import"./App.css";

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState("");

  //

  const authenticateUser = (token) => {
    // Purpose: Save the JWT locally, and in the browser
    window.localStorage.setItem("authToken", token)
    changeAuthJWT(token);
  }

  return (
    <Router>
    <div>
      
      <Switch>
      <div>
        <Tabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/notes" component={Notes} />
      </div>
      <Footer />
      </Switch>
      <Switch>
        <Route path="/login">
          <LoginComponent authenticateUser={authenticateUser}/>
        </Route>
        <Route path="/register">
          <RegisterComponent />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default App;