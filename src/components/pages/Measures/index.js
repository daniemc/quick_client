import React from 'react'
import MeasuresForm from './MeasuresForm';
import MeasuresList from './MeasuresList';
import {
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    fetchMeasures,
} from './../../../store/actions/measures';
import {
    useDispatch,
} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    measuresContainer:{
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
    dispatch(fetchMeasures());

    return (
        <div className={classes.measuresContainer}>
            <Typography variant="h4" gutterBottom>
                Unidades de Medida
            </Typography>
            <br />
            <MeasuresForm />
            <br />
            <MeasuresList />
        </div>
    )
    
}


