import * as at from "../actions/actionTypes";

// REDUCER;
const allStatus = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default allStatus;