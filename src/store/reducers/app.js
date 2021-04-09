import {
    START_LOADING,
    STOP_LOADING,
    SHOW_MESSAGE,
    HIDE_MESSAGE,
} from './../actions/types';

const initialState = {
    loading: false,
    message: {
        text: '',
        type: 'info',
        autoClose: 3000,
        open: false,
    }
};

const app = (state = { ...initialState }, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            }    
        case SHOW_MESSAGE:
            return {
                ...state,
                message: {
                    ...initialState.message,
                    ...payload,
                    open: true,
                }
            }
        case HIDE_MESSAGE:
            return {
                ...state,
                message: {
                    ...initialState.message,
                }
            }
        default:
            return state
    }
}

export default app;
