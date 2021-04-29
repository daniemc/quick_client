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
import { useForm } from "react-hook-form";

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
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const editing = useSelector((state) => state.measures.editing);
    const editingMeasure = useSelector((state) => state.measures.editingMeasure);

    const [form, setForm] = useState(() => ({
        id: null,
        name: '',
        description: '',
        level: '',
    }));

    const cleanForm = () => {
        setForm({
            id: null,
            name: '',
            description: '',
            level: '',
        })
        reset({
            id: null,
            name: '',
            description: '',
            level: '',
        })
    };

    useEffect(() => {
        if (editing) {
            setForm({
                id: editingMeasure.id,
                name: editingMeasure.name,
                description: editingMeasure.description,
                level: editingMeasure.level,
            })
            setValue('name', editingMeasure.name);
            setValue('description', editingMeasure.description);
            setValue('level', editingMeasure.level);            
            return;
        }
        cleanForm()
    }, [editing, editingMeasure]);
    

    const handleChangeData = (e) => setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });

    const handleSubmitForm = (data) => {                
        if(!editing) {
            dispatch(saveMeasure(form));
            cleanForm();
            return;
        }
        dispatch(updateMeasure(form));
    }    
    
    return (
        <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
            <TextField 
                {...register('name', { required: true })}
                name="name" 
                value={form.name} 
                className={classes.textField} 
                label="Nombre" 
                onChange={(e) => handleChangeData(e)}
                error={!!errors.name}
                helperText={!!errors.name && 'Campo requerido'}
            />
            <TextField 
                name="description" 
                {...register('description', { required: true })}
                value={form.description} 
                className={classes.textField} 
                label="Descripción" 
                onChange={(e) => handleChangeData(e)}
                error={!!errors.description}
                helperText={!!errors.description && 'Campo requerido'}
            />
            <TextField 
                name="level" 
                {...register('level', { required: true })}
                value={form.level} 
                className={classes.textField} 
                label="Orden/Nivel" 
                onChange={(e) => handleChangeData(e)}
                type="number" 
                error={!!errors.level}
                helperText={!!errors.level && 'Campo requerido'}
            />
            {!editing ? (
                <Button 
                    className={classes.button} 
                    color="primary" 
                    variant="contained"
                    onClick={handleSubmit(handleSubmitForm)}
                >
                    Guardar
                </Button>
            ) : (
                <React.Fragment>
                    <Button 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={handleSubmit(handleSubmitForm)}
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
