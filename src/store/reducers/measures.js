import {
    SET_MEASURES,
    SAVE_MEASURE,
    EDIT_MEASURE,
    CANCEL_EDIT,
    UPDATE_MEASURE,
    DELETE_MEASURE,
} from './../actions/types';

const initialState = {
    measures: [],
    editing: false,
    editingMeasure: {}
}

const measures = (state = { ...initialState }, action) => {
    const {
        type,
        payload,
    } = action;
    let newMeasures;

    switch (type) {
        case SET_MEASURES:
            return {
                measures: payload,
            }   
        case SAVE_MEASURE:
            newMeasures = state.measures.concat([{ ...payload }])
            return {
                measures: [...newMeasures],                
            }

        case EDIT_MEASURE:
            return {
                ...state,
                editingMeasure: { ...payload },
                editing: true,
            }
        case CANCEL_EDIT:
            return {
                ...state,
                editing: false,
                editingMeasure: {},
            }    
                   
        case UPDATE_MEASURE:
            newMeasures = state.measures.map((measure) => {
                if (measure.id === payload.id) {
                    measure = { ...payload };
                }
                return measure;
            })
            return {
                measures: [...newMeasures],
            } 
        case DELETE_MEASURE:
            newMeasures = state.measures.filter((_) => _.id !== payload.id)
            return {
                measures: [...newMeasures],
            } 
        default:
            return state;
    }
}

export default measures;