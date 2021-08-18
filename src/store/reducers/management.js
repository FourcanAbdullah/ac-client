import { FETCH_MANAGEMENT } from "../actions/actionTypes";

const initialState = {
    histories: [],
    Vendor: [],
    Management: [],
    ACUnits: [],
};

const management = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MANAGEMENT:
            return action.payload;
        default:
            return state;
    }
};

export default management;