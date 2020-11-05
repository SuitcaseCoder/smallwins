import React, { useState } from "react";
import "./App.css";

// importing other tools

// importing components
import Home from "./pages/home";
// import Getstarted from './pages/getStarted';
// import Landing from './pages/landing';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Small Wins</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
