import * as at from "../actions/actionTypes";

// REDUCER;
const allHistory = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_HISTORY:
      return action.payload;
    case at.ADD_HISTORY:
      return [...state, action.payload]
    // case at.DELETE_STUDENT:
    //   return state.filter(student => student.id!==action.payload);
    // case at.EDIT_STUDENT:
    //   return state.map(student => { 
    //     return (
    //       student.id===action.payload.id ? action.payload : student
    //     );
    //   });
    default:
      return state;
  }
};

export default allHistory;