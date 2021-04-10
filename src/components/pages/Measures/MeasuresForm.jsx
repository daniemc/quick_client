import React, { useState } from 'react'
import {
    TextField,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    useDispatch,
} from 'react-redux';
import {
    saveMeasure,
} from './../../../store/actions/measures';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
    },
    textField: {
        margin: theme.spacing(1, 2),
    },
    button: {
        margin: theme.spacing(1, 2),
    }
}))

export default function MeasuresForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [form, setForm] = useState(() => ({
        name: '',
        description: '',
        level: '',
    }));

    const handleChangeData = (e) => setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });

    const handleSubmitForm = () => {
        //TODO: Validate form
        dispatch(saveMeasure(form));
    }
    return (
        <form className={classes.form} noValidate>
            <TextField 
                name="name" 
                value={form.name} 
                className={classes.textField} 
                label="Nombre" 
                required 
                onChange={(e) => handleChangeData(e)}
            />
            <TextField 
                name="description" 
                value={form.description} 
                className={classes.textField} 
                label="Descripción" 
                onChange={(e) => handleChangeData(e)}
            />
            <TextField 
                name="level" 
                value={form.level} 
                className={classes.textField} 
                label="Orden/Nivel" 
                required 
                onChange={(e) => handleChangeData(e)}
            />
            <Button 
                className={classes.button} 
                color="primary" 
                variant="contained"
                onClick={() => handleSubmitForm()}
            >
                Guardar
            </Button>
        </form>
    );
}
