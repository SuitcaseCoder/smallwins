import React from "react";

import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

// import Home from "../pages/home";
// import Today from "../pages/today";
// import Past from "../pages/past";


const Nav = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    console.log("logged out clicked");
    sessionStorage.removeItem("userToken");
    sessionStorage.clear(); 
    logout();
  }


  return (
    <nav>
      <ul className="nav-links">
        <Link exact="true" to="/">
          <li>SmallWins</li>
        </Link>

        <Link exact="true" to="/dashboard/past">
          <li>Past</li>
        </Link>

        <Link exact="true" to="/dashboard/Today">
          <li>Today</li>
        </Link>

{/* add logic to toggle these */}
        <Link exact="true" to="/login">
          <li>Login</li>
        </Link>

        {/* <Navigate exact="true" to="/"> */}
          <li onClick={handleLogout}>Logout</li>
        {/* </Navigate> */}
      </ul>
    </nav>
  );
};

export default Nav;
