import { FETCH_STATUS } from "../actions/actionTypes";

const initialState = {
    histories: [],
    Vendor: [],
    Status: [],
    ACUnits: [],
};

const status = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default status;