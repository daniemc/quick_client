import axios from 'axios';
import store from './store';
import { 
    startLoading,
    stopLoading,
} from './store/actions/app';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((request) => {
    store.dispatch(startLoading());
    const token = store.getState('auth.token');
    if (!!token) {
        request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request;
});

axios.interceptors.response.use((response) => {
    store.dispatch(stopLoading());
    return response;
}, (error) => {
    store.dispatch(stopLoading());
    return Promise.reject(error)
});
