import React from 'react'
import {
    Backdrop,
    CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStylesLoader = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const Loader = () => {
    const classes = useStylesLoader();
    const loading = useSelector((state) => state.app.loading);
    return (
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export const Message = () => {
    return (
        <div>

        </div>
    )
}
