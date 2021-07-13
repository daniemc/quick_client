import {
    SET_PRODUCTS,
    SAVE_PRODUCT,
    EDIT_PRODUCT,
    CANCEL_EDIT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
} from './../actions/types';

const initialState = {
    products: [],
    editing: false,
    editingProduct: {}
}

const products = (state = { ...initialState }, action) => {
    const {
        type,
        payload,
    } = action;
    let newProducts;

    switch (type) {
        case SET_PRODUCTS:
            return {
                products: payload,
            }   
        case SAVE_PRODUCT:
            newProducts = state.products.concat([{ ...payload }])
            return {
                products: [...newProducts],                
            }

        case EDIT_PRODUCT:
            return {
                ...state,
                editingProduct: { ...payload },
                editing: true,
            }
        case CANCEL_EDIT:
            return {
                ...state,
                editing: false,
                editingProduct: {},
            }    
                   
        case UPDATE_PRODUCT:
            newProducts = state.products.map((measure) => {
                if (measure.id === payload.id) {
                    measure = { ...payload };
                }
                return measure;
            })
            return {
                products: [...newProducts],
            } 
        case DELETE_PRODUCT:
            newProducts = state.products.filter((_) => _.id !== payload.id)
            return {
                products: [...newProducts],
            } 
        default:
            return state;
    }
}

export default products;