import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import NotFound from '../components/app/NotFound';
import Login from '../components/auth/Login';
import Home from '../components/app/Home';
import Measures from '../components/pages/Measures';
import Vendors from '../components/pages/Vendors';
import Products from '../components/pages/Products';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/unit_measures" component={Measures} />
            <PrivateRoute path="/vendors" component={Vendors} />
            <PrivateRoute path="/products" component={Products} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
