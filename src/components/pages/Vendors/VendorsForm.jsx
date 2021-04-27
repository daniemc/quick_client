import React, { useState, useEffect } from 'react'
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    saveVendor,
    updateVendor,
    cancelEdit,
} from './../../../store/actions/vendors';
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

export default function VendorsForm() {
    const classes = useStyles();
    const dispatch = useDispatch();  
    const { register, handleSubmit, formState: { errors } } = useForm();

    const editing = useSelector((state) => state.vendors.editing);
    const editingVendor = useSelector((state) => state.vendors.editingVendor);

    const [form, setForm] = useState(() => ({
        id: null,
        name: '',
        active: false,
    }));

    const cleanForm = () => setForm({
        id: null,
        name: '',
        active: false,
    });

    useEffect(() => {
        if (editing) {
            setForm({
                id: editingVendor.id,
                name: editingVendor.name,
                active: editingVendor.active,
            })
            return;
        }
        cleanForm()
    }, [editing, editingVendor]);
    

    const handleChangeData = (name, value) => setForm({
        ...form, 
        [name]: value,
    });

    const handleSubmitForm = (data) => {                
        if(!editing) {
            dispatch(saveVendor(form));
            cleanForm();
            return;
        }
        dispatch(updateVendor(form));
    }
    
    return (
        <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
            <TextField 
                {...register('name', { required: true })}
                name="name" 
                value={form.name} 
                className={classes.textField} 
                label="Nombre" 
                onChange={(e) => handleChangeData(e.target.name, e.target.value)}
                error={!!errors.name}
                helperText={!!errors.name && 'Campo requerido'}
            />
            <FormControlLabel
                control={
                    <Checkbox 
                        name="active" 
                        variant="primary"
                        {...register('active')}
                        checked={form.active} 
                        // className={classes.textField}                         
                        onChange={(e) => handleChangeData(e.target.name, !!e.target.checked)}
                        // error={!!errors.active}
                        // helperText={!!errors.active && 'Campo requerido'}
                />} 
                label="Activo" 
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
