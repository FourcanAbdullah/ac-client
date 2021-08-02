import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All campuses
export const fetchAllACUnits = (acunits) => {
  return {
    type: at.FETCH_ALL_ACUNITS,
    payload: acunits,
  };
};

//adding campuses
export const addACUnit = (acunit) => {
  return {
    type: at.ADD_ACUNIT,
    payload: acunit,
  };
};

//deleting campus
export const deleteACUnit = (ACUnitId) => {
  return {
    type: at.DELETE_ACUNIT,
    payload: ACUnitId
  }
}

//editing a campus
export const editACUnit = (acunit) => {
  return {
    type: at.EDIT_ACUNIT,
    payload: acunit
  }
}

//Single campus
export const fetchACUnit = (acunit) => {
  return {
    type: at.FETCH_ACUNIT,
    payload: acunit,
  };
};

//All students
export const fetchAllHistory = (histories) => {
  return {
    type: at.FETCH_ALL_HISTORY,
    payload: histories,
  };
};

export const addHistory = (history) => {
  return {
    type: at.ADD_HISTORY,
    payload: history,
  };
};

// export const deleteStudent = (studentId) => {
//   return {
//     type: at.DELETE_STUDENT,
//     payload: studentId,
//   };
// };


// export const editStudent = (student) => {
//   return {
//     type: at.EDIT_STUDENT,
//     payload: student,
//   };
// };

//Single student
export const fetchHistory = (history) => {
  return {
    type: at.FETCH_HISTORY,
    payload: history,
  };
};