import { FETCH_VENDOR } from "../actions/actionTypes";

const initialState = {
    histories: [],
    Vendor: [],
    Status: [],
    ACUnits: [],
};

const vendor = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VENDOR:
            return action.payload;
        default:
            return state;
    }
};

export default vendor;