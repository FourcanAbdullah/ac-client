import { FETCH_ACUNIT } from "../actions/actionTypes";

const initialState = {
  histories: [],
};

const acunit = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACUNIT:
      return action.payload;
    default:
      return state;
  }
};

export default acunit;