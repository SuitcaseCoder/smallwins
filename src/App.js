import React, { useState } from "react";
import "./App.css";

import {Routes, Route, useRoutes } from 'react-router-dom';


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
// import Landing from "./pages/landing";

function App() {

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="today" element={<Today />} />
        </Route>

      </Routes>    
     </>
  );
}

export default App;
