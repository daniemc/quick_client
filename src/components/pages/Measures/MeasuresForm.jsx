import React, { useState, useEffect } from 'react'
import {
    TextField,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    saveMeasure,
    updateMeasure,
    cancelEdit,
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

    const editing = useSelector((state) => state.measures.editing);
    const editingMeasure = useSelector((state) => state.measures.editingMeasure);

    const [form, setForm] = useState(() => ({
        id: null,
        name: '',
        description: '',
        level: '',
    }));

    useEffect(() => {
        if (editing) {
            setForm({
                id: editingMeasure.id,
                name: editingMeasure.name,
                description: editingMeasure.description,
                level: editingMeasure.level,
            })
            return;
        }
        setForm({
            id: null,
            name: '',
            description: '',
            level: '',
        })
    }, [editing, editingMeasure])

    const handleChangeData = (e) => setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });

    const handleSubmitForm = () => {
        //TODO: Validate form
        if(!editing) {
            dispatch(saveMeasure(form));
            return;
        }
        dispatch(updateMeasure(form));
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
            {!editing ? (
                <Button 
                    className={classes.button} 
                    color="primary" 
                    variant="contained"
                    onClick={() => handleSubmitForm()}
                >
                    Guardar
                </Button>
            ) : (
                <React.Fragment>
                    <Button 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => handleSubmitForm()}
                    >
                        Actualizar
                    </Button>
                    <Button 
                        className={classes.button} 
                        color="secondary" 
                        variant="contained"
                        onClick={() => dispatch(cancelEdit())}
                    >
                        Cancelar
                    </Button>
                </React.Fragment>
            )}            
        </form>
    );
}
