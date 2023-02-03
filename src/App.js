import React, { useState } from "react";
import "./App.css";

import {Routes, Route, useRoutes } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// importing other tools

// importing components
// import Routes from "./components/Routes";
import Nav from "./components/Nav";
import Login from './components/Login'
import Today from "./pages/today";
import Home from "./pages/Home";
import SignUp from './components/SignUp'
import { ProtectedLayout } from "./pages/ProtectedLayout";
import { HomeLayout } from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Past from './pages/past'
import DB from "./pages/DB";

function App() {

  return (
    <>       
      <Routes>
 
        <Route element={<HomeLayout />}>
          <Route path="/createdb" element={<DB />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>


        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="today" element={<Today />} />
          <Route path="past" element={<Past />} />
        </Route>
      
        </Routes>   
     </>
  );
}

export default App;
