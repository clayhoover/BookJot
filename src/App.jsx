import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import LoginComponent from "./components/Login";
import"./components/App.css";

function App() {
  return (
    <div>
      <Header />
      <div id="wrapper">
      <LoginComponent />
      </div>
      <Note />
      <Footer />
    </div>
  );
}

export default App;