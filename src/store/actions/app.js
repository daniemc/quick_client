import {
    START_LOADING,
    STOP_LOADING,
    SHOW_MESSAGE,
    HIDE_MESSAGE,
} from './types';

export const startLoading = () => (dispatch) => dispatch({
    type: START_LOADING,
});

export const stopLoading = () => (dispatch) => dispatch({
    type: STOP_LOADING,
}); 

export const showMessage = (payload) => (dispatch) => dispatch({
    type: SHOW_MESSAGE,
    payload,
});

export const hideMessage = () => (dispatch) => dispatch({
    type: HIDE_MESSAGE,
})

