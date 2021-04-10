import axios from 'axios';
import store from './store';
import { 
    startLoading,
    stopLoading,
    showMessage,
} from './store/actions/app';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((request) => {
    store.dispatch(startLoading());
    const token = store.getState()?.auth?.token;
    if (!!token) {
        request.headers.common['Authorization'] = `JWT ${token}`
    }
    return request;
});

axios.interceptors.response.use((response) => {
    store.dispatch(stopLoading());
    return response;
}, (error) => {
    let errors = [error.message];
    store.dispatch(stopLoading());
    const errorMessages = error?.response?.data?.non_field_errors;    
    if (errorMessages) {
        errors = errorMessages.map((err) => err)
    }
    store.dispatch(showMessage({
        type: 'error',
        text: errors.join('\n'),
    }));
    return Promise.reject(error)
});
