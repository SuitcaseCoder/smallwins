// delegating component views

import React from 'react';

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// importing other tools

// importing components
import Nav from "../components/nav";
import Home from "../pages/home";
import Past from "../pages/past";
import Today from "../pages/today";
import GetStarted from "../pages/GetStarted";
import Landing from '../pages/Landing';
import Login from "../components/Login";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";

export default function Routes() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currUser, setCurrUser] = useState(null);
    console.log("isLoggedIn @ Routes: ", isLoggedIn);

    function AuthenticatedRoute({ children, ...rest }) {
      // let auth = isAuthenticated()
      console.log("isLoggedIn @ Routes / AuthenticatedRoute: ", isLoggedIn);
      let auth = isLoggedIn;
      return (
        <Route
          {...rest}
          render={({ location }) =>
            auth ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }

    return (
        // <div>
    <Router>
      <div className="App">
        {/* <Nav />
        <header>
          <h1>Small Wins</h1>
        </header> */}
        {/* <Landing /> */}
        <Switch>
        <AuthenticatedRoute path="/small-wins">
              <Home currUser={currUser} 
                  isLoggedIn={isLoggedIn} 
              />
          </AuthenticatedRoute>
          {/* TODAY */}
          <AuthenticatedRoute path="/Today">
              <Today />
          </AuthenticatedRoute>

          {/* PAST */}
          <AuthenticatedRoute path="/Past">
            <Past />
          </AuthenticatedRoute>

          {/* GET STARTED */}
          <Route exact path="/GetStarted" component={GetStarted} />


          <Route exact path="/login">
              {isLoggedIn ? 
              <Redirect to="/small-wins" currUser={currUser} /> 
              // <Home currUser={currUser}/>
              : <Login 
                currUser={currUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                setCurrUser={setCurrUser}   
              />}
          </Route>

          {/* <Route 
            exact path="/Login" 
            render={(props)=>
              <Login 
                currUser={currUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                setCurrUser={setCurrUser} 
              />
            }  
          /> */}
          

          <Route exact path="/Signup" component={SignUp} />



          <Route exact path="/">
              {isLoggedIn ? 
              <Home currUser={currUser}/>
              // <Redirect to="/small-wins" /> 
              : <Landing />}
          </Route>

          {/* <Route 
            exact path="/" 
            render={(props)=>
              <Landing 
                isLoggedIn={isLoggedIn}
              />
            }
          /> */}
        </Switch>

        <Footer />
      </div>
    </Router>

        // </div>
    )
}
