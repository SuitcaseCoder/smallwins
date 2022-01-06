import React from "react";

import { BrowserRouter as Link, NavLink } from "react-router-dom";

// import Home from "../pages/home";
// import Today from "../pages/today";
// import Past from "../pages/past";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink exact to="/">
          <li>SmallWins</li>
        </NavLink>
        <NavLink exact to="/Past">
          <li>Past</li>
        </NavLink>

        <NavLink exact to="/Today">
          <li>Today</li>
        </NavLink>

{/* add logic to toggle these */}
        <NavLink exact to="/login">
          <li>Login</li>
        </NavLink>

        <NavLink exact to="/logout">
          <li>Logout</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
