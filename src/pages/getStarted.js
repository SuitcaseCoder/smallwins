// login and registration

import React, { Component } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export class GetStarted extends Component {
    render() {
        // if(this.state.loginStatus){
        return (
            <div>
                <SignUp />
                <Login />
            </div>
        )
    // } else {

    // }
    }
}

export default GetStarted;
