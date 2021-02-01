import React, { Component, useState }  from 'react'
import axios from "axios";
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


    const register = () => {
        axios.post('/register', {
            firstName: firstNameReg,
            lastName: lastNameReg,
            username: userReg,
            email: emailReg,
            password: passReg
        }).then((response) => {
            console.log(response)()
        })
    }

        return (
            <div>
                <div className="registration">
                    <h2>Register</h2>
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
                <p>already have an account? log in</p>
            </div>
        )
    
}

export default SignUp
