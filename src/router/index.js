import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import NotFound from '../components/app/NotFound';
import Login from '../components/auth/Login';
import Home from '../components/app/Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
