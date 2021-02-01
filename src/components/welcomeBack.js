import React, { Component, useState } from 'react'
import axios from 'axios';
import '../css/getStarted.css';


const WelcomeBack = () => {


        return (
            <div>
                <h3>Welcome Back {userLogin}!</h3>
            </div>
        )
}

export default WelcomeBack
