import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="bar">
                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link to="/" className="link">Home</Link>
                <Link to="/login" className="link">Login</Link>
                <Link to="/register" className="link">Register</Link>
            </div>
        );
    }
}

export default Header;