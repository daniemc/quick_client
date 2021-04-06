import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,    
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/auth';

const styles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'flex-end',
    },
}));

export default function NavBar() {
    const classes = styles();
    const isAuth = useSelector((state) => !!state.auth.token);
    const dispatch = useDispatch();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {/* <Button color="inherit">Registrarme</Button> */}
                {isAuth ? (
                    <Button 
                        color="inherit"
                        onClick={() => dispatch(logoutUser())}
                    >Logout</Button>
                ) : (
                    <Button href="/login" color="inherit">Login</Button>
                )}           
                
            </Toolbar>
        </AppBar>
    );
}
