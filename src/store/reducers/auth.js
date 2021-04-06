import {
    REGISTER_USER,
    LOGIN,
    LOGOUT,
} from '../actions/types';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || null,
}

const auth = (state = { ...initialState }, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case REGISTER_USER:
            
            break;
        case LOGIN:
            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: {
                    ...payload.user
                },
                token: payload.token
            }   
        case LOGOUT:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                ...state,
                user: {},
                token: null,
            } 
        default:
            return { ...state }
    }
}

export default auth;
