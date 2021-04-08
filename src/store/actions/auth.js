import {
    LOGIN,
    LOGOUT,
} from './types';
import axios from 'axios'


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