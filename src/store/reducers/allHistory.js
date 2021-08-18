import * as at from "../actions/actionTypes";



// REDUCER;
const allHistory = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_HISTORY:
      return action.payload;
    case at.ADD_HISTORY:
      return [...state, action.payload]

    default:
      return state;
  }
};

export default allHistory;