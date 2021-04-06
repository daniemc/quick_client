import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function PrivateRoute(props) {
    const { component: Component } = props;
    const isAuth = useSelector((state) => !!state.auth.token);    
    return isAuth ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    )
}
