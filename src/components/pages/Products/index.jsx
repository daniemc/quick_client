import React from 'react'
import ProductsForm from './ProductsForm';
import ProductsList from './ProductsList';
import {
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    fetchProducts,
} from './../../../store/actions/products';
import {
    fetchMeasures,
} from './../../../store/actions/measures';
import {
    useDispatch,
} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    productsContainer:{
        margin: theme.spacing(10),
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

export default function Measures() {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch(fetchProducts());
    dispatch(fetchMeasures());

    return (
        <div className={classes.productsContainer}>
            <Typography variant="h4" gutterBottom>
                Productos
            </Typography>
            <br />
            <ProductsForm />
            <br />
            <ProductsList />
        </div>
    )
    
}


