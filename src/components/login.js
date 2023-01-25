import {React, useEffect, useState } from 'react';
import axios from 'axios';
import '../css/getStarted.css';

import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
    const { login } = useAuth();
    console.log("login: ",login);

    // const 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        let username = e.target[0].value;
        let password = e.target[1].value;
         const loggedInUser = {username: username, password: password}
        console.log("us, pw: ", username, password);
        // console.log(`username: ${username}, password: ${password}`);
        login(loggedInUser)
    }

        return (
            <div>
                <div className="login">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                    <div>
                    <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        label="email address" 
                    />
                    </div>
                    <div>
                    <input type="password" placeholder="password"
                    name="password" label="password"/>
                    </div>
                    <button type="submit">log in</button>
                    </form>
                </div>
                <RouterLink to="/signup">
                    <p>Don't have an account yet?</p>
                </RouterLink>
                {/* <p>forgot password</p>
                <p>Don't have an account yet? <Link to="/Signup">Sign Up</Link></p> */}
            </div>
        )
    
    }


export default Login
