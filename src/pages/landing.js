import React from 'react'
import { Link } from 'react-router-dom'



import Home from "./Home"
// import { useState } from 'react/cjs/react.development'
import { Redirect } from "react-router-dom";


 export default function Landing(props) {
    // console.log('LOGIN STATUS LANDING PAGE:');
    // console.log(props.isLoggedIn);

    // ---------------------------
    // if(!props.isLoggedIn){
    // return (
    //     <div>
    //         <h1>Landing Page</h1>
    //         <p><Link to="/Signup">Sign Up</Link></p>
    //         <p>Already have an account? <Link to="/login">login</Link></p>
    //     </div>
    // )
    // } else {
     // ---------------------------

        return(
            <>
                <Home />
                {/* <Redirect to="/small-wins" /> */}
            </>

        )
    // }
}