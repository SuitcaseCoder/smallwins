import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

// import Home from "../pages/home";
// import Today from "../pages/today";
// import Past from "../pages/past";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link exact to="/">
          <li>SmallWins</li>
        </Link>
        <Link exact to="/Past">
          <li>Past</li>
        </Link>

        <Link exact to="/Today">
          <li>Today</li>
        </Link>

        <Link exact to="/Today">
          <li>Logout / Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
