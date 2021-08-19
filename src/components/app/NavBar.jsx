import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,    
    Typography,
    Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/auth';

const styles = makeStyles((theme) => ({
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    logout: {
        margin: theme.spacing(1, 5),
    },
}));

export default function NavBar() {
    const classes = styles();
    const isAuth = useSelector((state) => !!state.auth.token);
    const dispatch = useDispatch();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    DEEP BAR
                </Typography>                
                {/* <Button color="inherit">Registrarme</Button> */}
                {isAuth ? (
                    <React.Fragment>
                        <nav>
                            <Link variant="button" color="inherit" href="/unit_measures" className={classes.link}>
                                Unds de Medida
                            </Link>
                            <Link variant="button" color="inherit" href="/vendors" className={classes.link}>
                                Proveedores
                            </Link>
                            <Link variant="button" color="inherit" href="/products" className={classes.link}>
                                Productos
                            </Link>
                            <Link variant="button" color="inherit" href="/customers" className={classes.link}>
                                Clientes
                            </Link>
                        </nav>
                        <Button 
                            className={classes.logout}
                            color="inherit"
                            variant="outlined"
                            onClick={() => dispatch(logoutUser())}
                        >Logout</Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Button href="/login" color="inherit">Login</Button>
                        <Button href="/register" color="inherit">Registro</Button>
                    </React.Fragment>
                )}           
                
            </Toolbar>
        </AppBar>
    );
}
