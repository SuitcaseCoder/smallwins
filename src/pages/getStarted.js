// login and registration

import React, { Component } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export class GetStarted extends Component {
    render() {
        return (
            <div>
                <SignUp />
                <Login />
            </div>
        )
    }
}

export default GetStarted;
