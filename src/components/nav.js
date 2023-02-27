import React from "react";

import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

// import Home from "../pages/home";
// import Today from "../pages/today";
// import Past from "../pages/past";


const Nav = () => {

  const { logout, user, isAuthenticated } = useAuth();
  console.log(user);
  console.log(isAuthenticated)

  const handleLogout = () => {
    if(user){
    console.log("logged out clicked");
    sessionStorage.removeItem("userToken");
    sessionStorage.clear(); 
    logout();
    } else {
      console.log('user does not exist');
    }
    
  }


  return (
    <nav>
      <ul className="nav-links">
        <Link exact="true" to="/">
          <li>SmallWins</li>
        </Link>

        {/* <Link exact="true" to="/dashboard/past">
          <li>Past</li>
        </Link> */}

        {/* <Link exact="true" to="/dashboard/Today">
          <li>My Small Wins</li>
        </Link> */}

{/* if user exists, give option to logout, if not login */}

        {/* {user ? 
        <li onClick={handleLogout}>Logout</li> :        
         <Link exact="true" to="/login">
          <li>Login</li>
        </Link>
        } */}
         
         <Link exact="true" to="/login">
          <li>Login</li>
        </Link>

        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Nav;
