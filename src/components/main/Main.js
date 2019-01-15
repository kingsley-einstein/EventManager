import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/Header';
import { GuestRoutes } from '../routes';

class Main extends Component {
    render() {
        return(
            <div>
              <Header/>
              <GuestRoutes/>
            </div>
        );
    }
}

export default Main;
