import { FETCH_HISTORY } from "../actions/actionTypes";

const initialState = {
  ACUnit: [],
  Status: [],
  Vendor: [],
};

// REDUCER;
const history = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return action.payload;
    default:
      return state;
  }
};

export default history;