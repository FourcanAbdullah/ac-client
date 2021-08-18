import * as at from "../actions/actionTypes";

// REDUCER;
const allManagement = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_MANAGEMENT:
            return action.payload;
        default:
            return state;
    }
};

export default allManagement;