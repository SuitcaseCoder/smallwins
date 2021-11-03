import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Redirect } from "react-router-dom";

// importing other tools

// importing components
import Nav from "./components/nav";
import Home from "./pages/home";
import Past from "./pages/past";
import Today from "./pages/today";
import GetStarted from "./pages/GetStarted";
import Landing from './pages/Landing';
import Login from "./components/Login";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currUser, setCurrUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Nav />
        <header>
          <h1>Small Wins</h1>
        </header>
        {/* <Landing /> */}
        <Switch>

            <Route 
              exact path="/small-wins"
              render={(props)=>
                <Home 
                  currUser={currUser} 
                  isLoggedIn={isLoggedIn} 
                />
              }  
            />
          



          <Route exact path="/Past" component={Past} />

          <Route 
            exact path="/Today" 
            component={Today}
          />

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
  );
}

export default App;
