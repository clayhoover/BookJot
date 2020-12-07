import React from "react";
import { Link } from "react-router-dom";
import Header from './Header';

function Tabs() {
    return (
      <div>
        <div>
          <Header />
        </div>
      
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/library"
            className={window.location.pathname === "/library" ? "nav-link active" : "nav-link"}>
            Library
          </Link>
        </li>
        <Link to="/Notes" className={window.location.pathname === "/notes" ? "nav-link active" : "nav-link"}>
            Notes
          </Link>
        <Link to="/Register" className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
            Login / Register
          </Link>
      </ul>
      </div>
    );
  }

export default Tabs;
