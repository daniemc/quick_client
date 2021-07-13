import {
    SET_PRODUCTS,
    SAVE_PRODUCT,
    EDIT_PRODUCT,
    CANCEL_EDIT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
} from './types';
import axios from 'axios';

export const fetchProducts = () => (dispatch) => {
    axios.get('/api/products')
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: SET_PRODUCTS,
                    payload: response.data,
                });
            }
        })
}

export const saveProduct = (payload) => (dispatch) => {
    axios.post('/api/products', payload)
        .then((response) => {
            if (response.status === 201) {
                console.log(response.data)
                dispatch({
                    type: SAVE_PRODUCT,
                    payload: response.data,
                });
            }
        });
}

export const editProduct = (payload) => (dispatch) => dispatch({
    type: EDIT_PRODUCT,
    payload,
})

export const cancelEdit = () => (dispatch) => dispatch({
    type: CANCEL_EDIT,
})


export const updateProduct = (payload) => (dispatch) => {
    axios.put(`/api/products/${payload.id}`, payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: response.data,
                });
            }
        });
}

export const deleteProduct = (payload) => (dispatch) => {
    axios.delete(`/api/products/${payload.id}`, payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: DELETE_PRODUCT,
                    payload,
                });
            }
        });
}