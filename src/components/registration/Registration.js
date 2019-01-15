import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor() {
        super();
        this.state = {

        }; 
    }
    componentDidMount() {
        console.log('Registration.componentDidMount()');
    }

    render() {
        return(
            <div>
                Hello registration!
            </div>
        );
    }
}

export default Registration;