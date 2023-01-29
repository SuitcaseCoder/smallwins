import React from "react";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Item from '@mui/material/Item'


import Container from '@mui/material/Container';


import Nav from "../components/Nav";
import Today from "./today";
// import SignUp from "../components/SignUp";
import { useAuth } from "../hooks/useAuth";



export const Home = () => {
  const { user, isAuthenticated } = useAuth();
  // console.log(user);

    return(
      <div>
        <h1>Small Wins</h1>
        <h4>Celebrate your small wins daily and keep track of them forever!</h4>
        <h5> You've been tracking for X days </h5>
      </div>
    )
}

export default Home;
