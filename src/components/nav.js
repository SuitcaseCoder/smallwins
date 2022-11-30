import React from "react";

import { Route, Routes, Link } from 'react-router-dom'

// import Home from "../pages/home";
// import Today from "../pages/today";
// import Past from "../pages/past";

const logout = () => {
  console.log("logged out clicked")
  sessionStorage.removeItem("userToken");
  sessionStorage.clear(); 
  
}

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link exact="true" to="/">
          <li>SmallWins</li>
        </Link>
        <Link exact="true" to="/Past">
          <li>Past</li>
        </Link>

        <Link exact="true" to="/Today">
          <li>Today</li>
        </Link>

{/* add logic to toggle these */}
        <Link exact="true" to="/login">
          <li>Login</li>
        </Link>

        <Link exact="true" to="/logout">
          <li onClick={logout}>Logout</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
