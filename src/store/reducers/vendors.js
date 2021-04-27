import {
    SET_VENDORS,
    SAVE_VENDOR,
    EDIT_VENDOR,
    CANCEL_EDIT_VENDOR,
    UPDATE_VENDOR,
    DELETE_VENDOR,
} from './../actions/types';

const initialState = {
    vendors: [],
    editing: false,
    editingVendor: {}
}

const vendors = (state = { ...initialState }, action) => {
    const {
        type,
        payload,
    } = action;
    let newVendors;

    switch (type) {
        case SET_VENDORS:
            return {
                vendors: payload,
            }   
        case SAVE_VENDOR:
            newVendors = state.vendors.concat([{ ...payload }])
            return {
                vendors: [...newVendors],                
            }

        case EDIT_VENDOR:
            return {
                ...state,
                editingVendor: { ...payload },
                editing: true,
            }
        case CANCEL_EDIT_VENDOR:
            return {
                ...state,
                editing: false,
                editingVendor: {},
            }    
                   
        case UPDATE_VENDOR:
            newVendors = state.vendors.map((vendor) => {
                if (vendor.id === payload.id) {
                    vendor = { ...payload };
                }
                return vendor;
            })
            return {
                vendors: [...newVendors],
            } 
        case DELETE_VENDOR:
            newVendors = state.vendors.filter((_) => _.id !== payload.id)
            return {
                vendors: [...newVendors],
            } 
        default:
            return state;
    }
}

export default vendors;