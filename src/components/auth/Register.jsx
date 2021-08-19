import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { registerUser } from '../../store/actions/auth';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const isAuth = useSelector((state) => !!state.auth.token);
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const [form, setForm] = useState(() => ({
        username: '',
        password: '',
        password_confirmation: '',
    }));

    const dispatch = useDispatch();

    if (isAuth) {
        return <Redirect to={{ pathname: "/home" }} />;
    }



    const handleChangeData = (e) => setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });

    const handleSubmitForm = (data) => {                
        const {
            username,
            password,
        } = data;

        dispatch(registerUser({ username, password }));
    } 
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>                
                <Typography component="h1" variant="h5">
                    Nuevo Usuario
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth                        
                        autoComplete="deep-username"
                        autoFocus
                        {...register('username', { required: true })}
                        name="username" 
                        value={form.username} 
                        className={classes.textField} 
                        label="Nombre de Usuario" 
                        onChange={(e) => handleChangeData(e)}
                        error={!!errors.username}
                        helperText={!!errors.username && 'Campo requerido'}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth                       
                        
                        {...register('password', { required: true })}
                        name="password" 
                        value={form.password} 
                        className={classes.textField} 
                        label="Contraseña" 
                        onChange={(e) => handleChangeData(e)}
                        error={!!errors.password}
                        helperText={!!errors.password && 'Campo requerido'}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        {...register('password_confirmation', 
                            { 
                                required: true,
                                validate: value => value === form.password
                            })
                        }
                        name="password_confirmation" 
                        value={form.password_confirmation} 
                        className={classes.textField} 
                        label="Contraseña" 
                        onChange={(e) => handleChangeData(e)}
                        error={!!errors.password_confirmation}
                        helperText={!!errors.password_confirmation 
                            && (errors.password_confirmation.type === 'validate' ? 'Las contraseñas no coinciden' : 'Campo requerido')}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit(handleSubmitForm)}
                    >
                        Registrar
          </Button>
                </form>
            </div>
        </Container>
    );
}
