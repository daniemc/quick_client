import {
    START_LOADING,
    STOP_LOADING,
} from './../actions/types';

const initialState = {
    loading: false,
};

const app = (state = { ...initialState }, action) => {
    const {
        type,
        // payload,
    } = action;

    switch (type) {
        case START_LOADING:
            return {
                loading: true,
            }
        case STOP_LOADING:
            return {
                loading: false,
            }    
        default:
            return state
    }
}

export default app;
