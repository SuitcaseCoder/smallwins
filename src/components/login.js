// import { React, useState, useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input]) } from 'react';

import {React, Component, useState, useEffect} from 'react';
import axios from 'axios';
import '../css/getStarted.css';



const Login = () => {

        // username check
        const [userLogin, setUserLogin] = useState('');

        // password login check
        const [passLogin, setPassLogin] = useState('');

        // add a login state to our state
        const [loginStatus, setLoginStatus] = useState('');

        // add a login message for UI
        const [loginMsg, setLoginMsg] = useState('');

        // to handle onclick for login
        const login = () => {
            console.log('login clicked');
            axios.post('/login', {
                username: userLogin,
                password: passLogin,
            }).then((response) => {
                console.log(`response after sending post request to login (react):`);
                console.log(response);
                // if there's an error with login, set loginStatus to false and mark message as a 'try again'
                if(response.data.message){
                    console.log(loginStatus);
                    setLoginStatus(false);
                    setLoginMsg(response.data.message);
                } 
                // if there's no error with login, set login status to true and message with user's first name
                else {
                    console.log(response.data[0].first_name);
                    setLoginStatus(true);
                    setLoginMsg(response.data[0].first_name);
                }
                
            })
        }

        useEffect(() => {
            axios.get("/login").then((response) => {
                console.log(response);
                if(response.data.loggedIn ===  true){
                    console.log('user logged in')
                setLoginStatus(true);
                setLoginMsg(response.data.user[0].first_name)
                console.log(loginStatus);
                console.log(loginMsg)
                } else {
                    console.log('you are not logged in');
                    setLoginStatus(false);
                    setLoginMsg(response.data.message);
                }
            })
        }, [])


        return (
            <div>
                <div className="login">
                    <h2>Login</h2>
                    <div>
                    <input type="text" placeholder="email/username" onChange={(e) => {setUserLogin(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="password" placeholder="password" onChange={(e) => {setPassLogin(e.target.value)}}/>
                    </div>
                    <button onClick={login}>log in</button>
                </div>
                <p>forgot password</p>
            </div>
        )
}

export default Login
