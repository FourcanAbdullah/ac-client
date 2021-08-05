import * as at from "../actions/actionTypes";

// REDUCER;
const allACUnits = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_ACUNITS:
      return action.payload;
    default:
      return state;
  }
};

export default allACUnits;