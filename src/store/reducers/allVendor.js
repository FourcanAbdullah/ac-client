import * as at from "../actions/actionTypes";

// REDUCER;
const allVendor = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_VENDOR:
            return action.payload;
        default:
            return state;
    }
};

export default allVendor;