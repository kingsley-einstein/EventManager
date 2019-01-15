import { Switch, Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from '../../home/Home';
import Login from '../../login/Login';
import Registration from '../../registration/Registration';

const GuestRoutes = () => {
    return(
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Registration}/>
        </Switch>
    );
}

export default GuestRoutes;