import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import LoginComponent from "./components/Login";
import RegisterComponent from './components/Register';
import"./components/App.css";

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState("");

  //

  const authenticateUser = (token) => {
    // Purpose: Save the JWT locally, and in the browser
    window.localStorage.setItem("authToken", token)
    changeAuthJWT(token);
  }

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginComponent authenticateUser={authenticateUser}/>
        </Route>
        <Route path="/register">
          <RegisterComponent />
        </Route>
      </Switch>
      <Note />
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;