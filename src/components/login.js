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

        // to handle onclick for login
        const login = () => {
            console.log('login clicked');
            axios.post('/login', {
                username: userLogin,
                password: passLogin,
            }).then((response) => {
                console.log(`response after sending post request to login (react):`);
                console.log(response);
                if(response.data.message){
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data[0].username)
                }
                
            })
        }

        useEffect(() => {
            axios.get("/login").then((response) => {
                console.log(response);
                if(response.data.loggedIn ===  true)
                setLoginStatus(response.data.user[0].username)
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
