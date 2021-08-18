import * as ac from './actions/actionCreators';
const axios = require('axios');

// THUNKS

//All ac units
export const fetchAllACUnitsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/acunits`);
    dispatch(ac.fetchAllACUnits(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const addACUnitThunk = (acunit) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/acunits`, acunit);
    dispatch(ac.addACUnit(res.data));
  } catch (err) {
    console.error(err);
  }
};


export const deleteACUnitThunk = ACUnitId => async dispatch => {
  try {
    await axios.delete(`/api/acunits/${ACUnitId}`);
    dispatch(ac.deleteACUnit(ACUnitId));
  } catch (err) {
    console.error(err);
  }
};

export const editACUnitThunk = acunit => async dispatch => {
  try {
    let updatedacunit = await axios.put(`/api/acunits/${acunit.id}`, acunit);
    dispatch(ac.editACUnit(updatedacunit));
  } catch (err) {
    console.error(err);
  }
};

//Single acunit
export const fetchACUnitThunk = (ACUnitId) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`/api/campuses/${id}`)
  //   .then((res) => res.data)
  //   .then((campus) => dispatch(ac.fetchCampus(campus)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`/api/acunits/${ACUnitId}`);
    dispatch(ac.fetchACUnit(res.data));
  } catch (err) {
    console.error(err);
  }
};

//All history
export const fetchAllHistoryThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/histories`);
    dispatch(ac.fetchAllHistory(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const addHistoryThunk = (history) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/histories`, history);
    dispatch(ac.addHistory(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// export const deleteStudentThunk = studentId => async dispatch => {
//   try {
//     await axios.delete(`/api/students/${studentId}`);
//     //delete succesful so change state with dispatch
//     dispatch(ac.deleteStudent(studentId));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const editStudentThunk = student => async dispatch => {
//   try {
//     let updatedStudent = await axios.put(`/api/students/${student.id}`, student);
//     dispatch(ac.editStudent(updatedStudent));
//   } catch (err) {
//     console.error(err);
//   }
// };

//Single student
export const fetchHistoryThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/histories/${id}`);
    dispatch(ac.fetchHistory(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchAllStatusThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/statuses`);
    dispatch(ac.fetchAllStatus(res.data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchStatusThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/statuses/${id}`);
    dispatch(ac.fetchStatus(res.data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchAllVendorThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/vendors`);
    dispatch(ac.fetchAllVendor(res.data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchVendorThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/vendors/${id}`);
    dispatch(ac.fetchVendor(res.data));
  } catch (err) {
    console.error(err);
  }
};

//
export const fetchAllManagementThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/management`);
    dispatch(ac.fetchAllManagement(res.data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchManagementThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/management/${id}`);
    dispatch(ac.fetchManagement(res.data));
  } catch (err) {
    console.error(err);
  }
};