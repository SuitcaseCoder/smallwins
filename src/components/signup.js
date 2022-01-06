import React, { useState }  from 'react'
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";
import { Redirect } from "react-router";

import '../css/getStarted.css';


const SignUp = () => {

    // first name registration
    const [firstNameReg, setFirstNameReg] = useState('');

    // last name registration
    const [lastNameReg, setLastNameReg] = useState('');
    
    // username registration
    const [userReg, setUserReg] = useState(''); 

    // email registration
    const [emailReg, setEmailReg] = useState('');
    
    // password registration
    const [passReg, setPassReg] = useState('');


    axios.defaults.withCredentials = true;

    const getStarted = () => {
        console.log('getStarted fn');
        axios.get('/createdb', {
        }).then(res => {
        console.log(res.status);
        })
    }

    // THIS WORKS  ✅
    // if registered, re-route to home
    const register = () => {
        axios.post('/register', {
            first_name: firstNameReg,
            last_name: lastNameReg,
            username: userReg,
            email: emailReg,
            password: passReg
        }).then((response) => {
            console.log('user registered');
            console.log(response);
        })
    }


        return (
            <div>
                <button onClick={getStarted}>click to create db / table</button>
                <div className="registration">
                    <h2>Register to Start Tracking your Small Wins</h2>
                    <div>
                    <input 
                        type="text" 
                        placeholder="first name" 
                        onChange={(e) => {setFirstNameReg(e.target.value)}}
                    />
                    </div>
                    <div>
                    <input type="text" placeholder="last name" onChange={(e) => {setLastNameReg(e.target.value)}} />
                    </div>
                    <div>
                    <input type="text" placeholder="username" onChange={(e) => {setUserReg(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="text" placeholder="email" onChange={(e) => {setEmailReg(e.target.value)}}/>  
                    </div>  
                    <div>  
                    <input type="password" placeholder="password" onChange={(e) => {setPassReg(e.target.value)}}/>
                    </div>
                    <button onClick={register}>Sign Up</button>
                </div>
                <p>already have an account? <Link exact to="/Login">Log In</Link></p>
            </div>
        )
    
}

export default SignUp
