import React, { useState, useEffect } from 'react'
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    saveProduct,
    updateProduct,
    cancelEdit,
} from './../../../store/actions/products';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
    textField: {
        margin: theme.spacing(1, 2),
    },
    button: {
        margin: theme.spacing(1, 2),
    }
}))

export default function ProductsForm() {
    const classes = useStyles();
    const dispatch = useDispatch();  
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const editing = useSelector((state) => state.products.editing);
    const editingProduct = useSelector((state) => state.products.editingProduct);

    const measuresList = useSelector((state) => state.measures.measures)

    const [form, setForm] = useState(() => ({
        id: null,
        name: '',
        purchase_unit_measure: '',
        purchase_qty: '',
        sale_unit_measure: '',
        sale_qty: '',
    }));

    const cleanForm = () => {
        setForm({
            id: null,
            name: '',
            purchase_unit_measure: '',
            purchase_qty: '',
            sale_unit_measure: '',
            sale_qty: '',
        })
        // reset({
        //     id: null,
        //     name: '',
        //     purchase_unit_measure: '',
        //     purchase_qty: '',
        //     sale_unit_measure: '',
        //     sale_qty: '',
        // })
    };

    useEffect(() => {
        if (editing) {
            setForm({
                id: editingProduct.id,
                name: editingProduct.name,
                purchase_unit_measure: editingProduct.purchase_unit_measure,
                purchase_qty: editingProduct.purchase_qty,
                sale_unit_measure: editingProduct.sale_unit_measure,
                sale_qty: editingProduct.sale_qty,
            })
            // setValue('name', editingProduct.name);
            // setValue('purchase_unit_measure', editingProduct.purchase_unit_measure);
            // setValue('purchase_qty', editingProduct.purchase_qty);            
            // setValue('sale_unit_measure', editingProduct.sale_unit_measure);            
            // setValue('sale_qty', editingProduct.sale_qty);            
            return;
        }
        cleanForm()
    }, [editing, editingProduct]);
    

    const handleChangeData = (e) => setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });

    const handleSubmitForm = (data) => {                
        if(!editing) {
            dispatch(saveProduct(form));
            cleanForm();
            return;
        }
        dispatch(updateProduct(form));
    }

    console.log(errors)
    
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
            <FormControl 
                className={classes.formControl}
                error={!!errors.purchase_unit_measure}
            >
                <InputLabel id="und_med_comp">
                    Und Med Compra
                </InputLabel>
                <Select
                    {...register('purchase_unit_measure', { required: true })}
                    labelId="und_med_comp"
                    name="purchase_unit_measure"
                    label={<span>Unidad Med Compra</span>} 
                    value={form.purchase_unit_measure}
                    onChange={(e) => handleChangeData(e)}
                >
                    {measuresList.map((measure, i) => 
                        <MenuItem key={`pum-${i}`} value={measure.id}>
                            {measure.name}
                        </MenuItem>
                    )}
                </Select>
                {!!errors.purchase_unit_measure && 
                    <FormHelperText>Campo requerido</FormHelperText>
                }                
            </FormControl>
            {/* <TextField 
                name="purchase_unit_measure" 
                {...register('purchase_unit_measure', { required: true })}
                value={form.purchase_unit_measure} 
                className={classes.textField} 
                label="Unidad Med Compra" 
                onChange={(e) => handleChangeData(e)}
                error={!!errors.purchase_unit_measure}
                helperText={!!errors.purchase_unit_measure && 'Campo requerido'}
            /> */}
            <TextField 
                name="purchase_qty" 
                {...register('purchase_qty', { required: true })}
                value={form.purchase_qty} 
                className={classes.textField} 
                label="Cant compra" 
                onChange={(e) => handleChangeData(e)}
                type="number" 
                error={!!errors.purchase_qty}
                helperText={!!errors.purchase_qty && 'Campo requerido'}
            />
            <FormControl 
                className={classes.formControl}
                error={!!errors.sale_unit_measure}
            >
                <InputLabel id="und_med_sale">
                    Und Med Venta
                </InputLabel>
                <Select
                    {...register('sale_unit_measure', { required: true })}
                    labelId="und_med_sale"
                    name="sale_unit_measure"
                    label={<span>Unidad Med Compra</span>} 
                    value={form.sale_unit_measure}
                    onChange={(e) => handleChangeData(e)}
                >
                    {measuresList.map((measure, i) => 
                        <MenuItem key={`pum-${i}`} value={measure.id}>
                            {measure.name}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            {/* <TextField 
                name="sale_unit_measure" 
                {...register('sale_unit_measure', { required: true })}
                value={form.sale_unit_measure} 
                className={classes.textField} 
                label="Unidad Med Venta" 
                onChange={(e) => handleChangeData(e)}
                type="number" 
                error={!!errors.sale_unit_measure}
                helperText={!!errors.sale_unit_measure && 'Campo requerido'}
            /> */}
            <TextField 
                name="sale_qty" 
                {...register('sale_qty', { required: true })}
                value={form.sale_qty} 
                className={classes.textField} 
                label="Cant venta" 
                onChange={(e) => handleChangeData(e)}
                type="number" 
                error={!!errors.sale_qty}
                helperText={!!errors.sale_qty && 'Campo requerido'}
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
