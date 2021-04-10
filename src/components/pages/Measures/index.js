import React from 'react'
import MeasuresForm from './MeasuresForm';
import MeasuresList from './MeasuresList';
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
            <MeasuresForm />
            <br />
            <MeasuresList />
        </div>
    )
    
}


