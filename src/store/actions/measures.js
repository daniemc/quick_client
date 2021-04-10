import {
    SET_MEASURES,
    SAVE_MEASURE,
    UPDATE_MEASURE,
    DELETE_MEASURE,
} from './types';
import axios from 'axios';

export const fetchMeasures = () => (dispatch) => {
    axios.get('/api/measures')
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: SET_MEASURES,
                    payload: response.data,
                });
            }
        })
}

export const saveMeasure = (payload) => (dispatch) => {
    axios.post('/api/measures', payload)
        .then((response) => {
            if (response.status === 201) {
                console.log(response.data)
                dispatch({
                    type: SAVE_MEASURE,
                    payload: response.data,
                });
            }
        });
}

export const updateMeasure = (payload) => (dispatch) => {
    axios.put('/api/measures', payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: UPDATE_MEASURE,
                    payload: response.data,
                });
            }
        });
}

export const deleteMeasure = (payload) => (dispatch) => {
    axios.delete(`/api/measures/${payload.id}`, payload)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                dispatch({
                    type: DELETE_MEASURE,
                    payload,
                });
            }
        });
}