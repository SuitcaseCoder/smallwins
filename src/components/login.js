import {React, useEffect, useState } from 'react';
import axios from 'axios';
import '../css/getStarted.css';

import { Redirect, Link } from "react-router-dom";




const Login = ({
    currUser,
    isLoggedIn, 
    setIsLoggedIn, 
    setCurrUser, 
}) => {
    console.log("isLoggedIn? @ login ", isLoggedIn);

        // username check
        const [userLogin, setUserLogin] = useState('');

        // password login check
        const [passLogin, setPassLogin] = useState('');

        const [loginStatus, setLoginStatus] = useState(false);

        const [loginMsg, setLoginMsg] = useState('');

        // to handle onclick for login
        const login = () => {
            axios.post('/login', {
                username: userLogin,
                password: passLogin,
            }).then((response) => {
                // if there's an error with login, set loginStatus to false and mark message as a 'try again'
                if(!response.data.isLoggedIn){
                    // props.setIsLoggedIn(response.data.isLoggedIn)
                    setLoginStatus(response.data.isLoggedIn);
                    setLoginMsg(response.data.message);
                    setIsLoggedIn(false);
                    console.log("should be false @ login after click: ", isLoggedIn)

                } 
                // if there's no error with login, set login status to true and message with user's first name
                else {
                    // props.setIsLoggedIn(response.data.isLoggedIn);
                    setLoginStatus(response.data.isLoggedIn);
                    setCurrUser(response.data.result[0]);
                    setIsLoggedIn(true);
                    setLoginMsg("you're logged in")
                    console.log("should be true @ login after click: ", isLoggedIn)

                }
                
            })
        };

        const handleUserChange = (e) => {
            setUserLogin(e.target.value);
        }

        const handlePassChange = (e) => {
            setPassLogin(e.target.value);
        }
    
        // // what about using useEffect to cleanup after username and pass are collected?
        useEffect(()=>{
            setIsLoggedIn(loginStatus);
        })

        // useEffect(() => {
        //     axios.get("/login").then((response) => {
        //         console.log(typeof response.data.isLoggedIn);
        //         console.log(typeof props.isLoggedIn);
        //         if(!response.data.isLoggedIn){
        //             console.log('SHOULD BE FALSE')
        //             console.log('PROPS.isLoggedIn <-----> response.data.isLoggedIn');
        //             console.log(props.isLoggedIn + " " + response.data.isLoggedIn);
        //             props.setIsLoggedIn(response.setIsLoggedIn)
        //             console.log("should be FALSE: " + props.isLoggedIn);
        //         } else {
        //             console.log('SHOULD BE TRUE')
        //             console.log('PROPS.isLoggedIn <-----> response.data.isLoggedIn');
        //             console.log(props.isLoggedIn + " " + response.data.isLoggedIn);
        //             props.setIsLoggedIn(response.setIsLoggedIn)
        //             console.log("should be TRUE: " + props.isLoggedIn);
        //         }

        //         // if(!response.data.message){
        //         if(response.data.loggedIn ===  true){
        //         //     console.log(response.data.user);
        //         props.setIsLoggedIn(response.data.loggedIn);
        //         props.setCurrUser(response.data.user);
        //         console.log(props.isLoggedIn);
        //         // props.setLoginStatus(true);
        //         // props.setLoginMsg(response.data.user[0].first_name)
        //         } else {
        //             props.setIsLoggedIn(!response.data.loggedIn);
        //             props.setCurrUser(!response.data.user);
        //             console.log(props.isLoggedIn);
        //             // props.setLoginStatus(false);
        //             // props.setLoginMsg(response.data.message);
        //         }
        //     })
        // });

// console.log(props.isLoggedIn);
    // if(!props.isLoggedIn){
        return (
            <div>
                <div className="login">
                    <h2>Login</h2>
                    <div>
                    <input type="text" placeholder="username" onChange={handleUserChange}/>
                    </div>
                    <div>
                    <input type="password" placeholder="password" onChange={handlePassChange}/>
                    </div>
                    <button onClick={login}>log in</button>
                </div>
                <p>forgot password</p>
                <p>Don't have an account yet? <Link to="/Signup">Sign Up</Link></p>
            </div>
        )
    
    }


export default Login
