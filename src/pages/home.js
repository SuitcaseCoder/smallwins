import React from "react";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";

import Today from "./today";
// import SignUp from "../components/SignUp";
// import { Redirect } from "react-router-dom";

function Home(props) {
  console.log("HOME PAGE PROPS");
  console.log(props.currUser);
  console.log(props.isLoggedIn);

  if(props.isLoggedIn){
    return(
      <div>
        <h4>Home page</h4>
        <h3>Welcome back {props.currUser.first_name}!</h3>
        <h5> You've been tracking for X days </h5>
        <Today user_id={props.currUser.user_id}/>
      </div>
    )
  } 
  else {
  return (
    <div>
      <Redirect to="/" />
      {/* <h4>home component</h4>
      <div>{props.loginMsg}</div>
      <p>Please try <Link to="/login">logging in</Link></p> */}
    </div>
  );
  }
}

export default Home;
