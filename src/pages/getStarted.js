// login and registration

import React, { Component } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import LoggedOut from '../components/LoggedOut';

export class GetStarted extends Component {
    render() {
        // if(!this.state.loginStatus){
        return (
            <div>
                <SignUp />
            </div>
        )
    // } else {
            // return (
            //     <div>
            //         <LoggedOut />
            //     </div>
            // )
    // }
    }
}

export default GetStarted;
