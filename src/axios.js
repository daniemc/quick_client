import axios from 'axios';
import store from './store';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((request) => {
    const token = store.getState('auth.token');
    if (!!token) {
        request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request;
});

axios.interceptors.response.use((response) => {
    return response;
});
