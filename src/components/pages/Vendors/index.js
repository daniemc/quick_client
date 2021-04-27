import React from 'react'
import VendorsForm from './VendorsForm';
import VendorsList from './VendorsList';
import {
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    fetchVendors,
} from './../../../store/actions/vendors';
import {
    useDispatch,
} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    vendorsContainer:{
        margin: theme.spacing(10),
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

export default function Vendors() {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch(fetchVendors());

    return (
        <div className={classes.vendorsContainer}>
            <Typography variant="h4" gutterBottom>
                Proveedores
            </Typography>
            <br />
            <VendorsForm />
            <br />
            <VendorsList />
        </div>
    )
    
}


