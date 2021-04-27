import {
    SET_VENDORS,
    SAVE_VENDOR,
    EDIT_VENDOR,
    CANCEL_EDIT_VENDOR,
    UPDATE_VENDOR,
    DELETE_VENDOR,
} from './types';
import axios from 'axios';

export const fetchVendors = () => (dispatch) => {
    axios.get('/api/vendors')
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: SET_VENDORS,
                    payload: response.data,
                });
            }
        })
}

export const saveVendor = (payload) => (dispatch) => {
    axios.post('/api/vendors', payload)
        .then((response) => {
            if (response.status === 201) {
                console.log(response.data)
                dispatch({
                    type: SAVE_VENDOR,
                    payload: response.data,
                });
            }
        });
}

export const editVendor = (payload) => (dispatch) => dispatch({
    type: EDIT_VENDOR,
    payload,
})

export const cancelEdit = () => (dispatch) => dispatch({
    type: CANCEL_EDIT_VENDOR,
})


export const updateVendor = (payload) => (dispatch) => {
    axios.put(`/api/vendors/${payload.id}`, payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: UPDATE_VENDOR,
                    payload: response.data,
                });
            }
        });
}

export const deleteVendor = (payload) => (dispatch) => {
    axios.delete(`/api/vendors/${payload.id}`, payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: DELETE_VENDOR,
                    payload,
                });
            }
        });
}