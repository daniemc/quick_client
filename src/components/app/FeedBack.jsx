import React from 'react'
import {
    Backdrop,
    CircularProgress,
    Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { hideMessage } from './../../store/actions/app';

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

export const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Message = () => {
    const {
        text,
        type,
        autoClose,
        open: isOpen,
    } = useSelector((state) => state.app.message);

    const dispatch = useDispatch();

    return (
        <Snackbar 
            open={isOpen} 
            autoHideDuration={autoClose}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                dispatch(hideMessage());
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <Alert severity={type}>
                {text}
            </Alert>
        </Snackbar>
    )
}
