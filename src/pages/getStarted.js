// login and registration

import React, { Component } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import LoggedOut from '../components/LoggedOut';

export class GetStarted extends Component {
    render() {
        console.log(this.state);
        // console.log(this.state);
        if(!this.state.loginStatus){
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
}

export default GetStarted;
