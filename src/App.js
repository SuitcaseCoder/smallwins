import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// importing other tools

// importing components
import Nav from "./components/nav";
import Home from "./pages/home";
import Past from "./pages/past";
import Today from "./pages/today";
import GetStarted from "./pages/GetStarted";
// import Landing from './pages/landing';
import Login from "./components/Login";


//  importing test backend component
import TestBackend from "./components/testBackend";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header>
          <h1>Small Wins</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Past" component={Past} />
          <Route exact path="/Today" component={Today} />
          <Route exact path="/GetStarted" component={GetStarted} />
          <Route exact path="/Login" component={Login} />
        </Switch>
        <TestBackend />
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
