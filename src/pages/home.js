import React from "react";

import Nav from "../components/Nav";
import Today from "./today";
// import SignUp from "../components/SignUp";
// import { Redirect } from "react-router-dom";

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
  // } 
  // else {
  // return (
  //   <div>
  //     <Redirect to="/" />
  //     {/* <h4>home component</h4>
  //     <div>{props.loginMsg}</div>
  //     <p>Please try <Link to="/login">logging in</Link></p> */}
  //   </div>
  // );
  // }
}

export default Home;
