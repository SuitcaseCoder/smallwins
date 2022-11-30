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
// import Landing from "./pages/landing";

function App() {

  // const routes = useRoutes([
  //   {
  //     path: "/" ,
  //     element: <Home /> 
  //   },
  //   {
  //     path: "/login" ,
  //     element: <Login />
  //   }

  // ])

  return (
     <Routes>

      <Route>
        <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
      </Route>

       <Route path="/today" element={<Today />} />
     </Routes>    
  );
}

export default App;
