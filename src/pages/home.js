import React from "react";

import Nav from "../components/Nav";
import Today from "./today";
// import SignUp from "../components/SignUp";


export const Home = () => {
  console.log("HOME PAGE");

    return(
      <div>
        {/* <Nav /> */}
        <h4>Home page</h4>
        {/* <h3>Welcome back {user}!</h3> */}
        <h5> You've been tracking for X days </h5>
        {/* <Today user_id={props.currUser.user_id}/> */}
      </div>
    )
}

export default Home;
