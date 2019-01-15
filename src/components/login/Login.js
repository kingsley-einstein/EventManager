import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    componentDidMount() {
        console.log('Login.componentDidMount()');
    }
    render() {
        return(
            <div>
                Hello Login!
            </div>
        );
    }
}

export default Login;