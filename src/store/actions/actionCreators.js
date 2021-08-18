import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All units
export const fetchAllACUnits = (acunits) => {
  return {
    type: at.FETCH_ALL_ACUNITS,
    payload: acunits,
  };
};

//adding unit
export const addACUnit = (acunit) => {
  return {
    type: at.ADD_ACUNIT,
    payload: acunit,
  };
};

//deleting unit
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

//Single unit
export const fetchACUnit = (acunit) => {
  return {
    type: at.FETCH_ACUNIT,
    payload: acunit,
  };
};

//All history
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

// export const deleteHistory = (history) => {
//   return {
//     type: at.DELETE_HISTORY,
//     payload: history,
//   };
// };


// export const editHistory = (history) => {
//   return {
//     type: at.EDIT_HISTORY,
//     payload: history,
//   };
// };

//Single history 
export const fetchHistory = (history) => {
  return {
    type: at.FETCH_HISTORY,
    payload: history,
  };
};

export const fetchAllStatus = (statuses) => {
  return {
    type: at.FETCH_ALL_STATUS,
    payload: statuses,
  };
};
export const fetchStatus = (status) => {
  return {
    type: at.FETCH_STATUS,
    payload: status,
  };
};

export const fetchAllVendor = (vendors) => {
  return {
    type: at.FETCH_ALL_VENDOR,
    payload: vendors,
  };
};
export const fetchVendor = (vendor) => {
  return {
    type: at.FETCH_VENDOR,
    payload: vendor,
  };
};
//
export const fetchAllManagement = (managements) => {
  return {
    type: at.FETCH_ALL_MANAGEMENT,
    payload: managements,
  };
};
export const fetchManagement = (management) => {
  return {
    type: at.FETCH_MANAGEMENT,
    payload: management,
  };
};