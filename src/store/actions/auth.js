import {
    LOGIN,
    LOGOUT,    
} from './types';
import axios from 'axios'
import {
    showMessage
} from './app';

export const registerUser = (payload) => (dispatch) => {
    return axios.post('/api/create-user', { ...payload })
        .then((response) => {            
            if (response.status === 201) {
                dispatch(showMessage({
                    type: 'success',
                    text: 'Usuario creado correctamente',
                }))
            }
        })
}


export const loginUser = (payload) => (dispatch) => {
    return axios.post('/api/login', { ...payload })
        .then((response) => {
            if (response.status === 200 && !!response.data.token) {
                dispatch({
                    type: LOGIN,
                    payload: response.data,
                })
            }
        })
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}