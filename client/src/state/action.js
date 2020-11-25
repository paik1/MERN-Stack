// UI state Actions
export const SET_SHOW_ADD_EMPLOYEE = 'SET_SHOW_ADD_EMPLOYEE';
export const SET_SHOW_EDIT_EMPLOYEE = 'SET_SHOW_EDIT_EMPLOYEE';
export const SET_SHOW_DELETE_EMPLOYEE = 'SET_SHOW_DELETE_EMPLOYEE';
export const ADD_EMPLOYEE_DATA = 'SET_EMPLOYEE_DATA';
export const SET_AUTHORIZED = 'SET_AUTHORIZED';

export const ActionAddEmployeeUI = (dispatch, show) => {
  return dispatch({
    type: SET_SHOW_ADD_EMPLOYEE,
    payload: {
      show,
    },
  });
};

export const ActionEditEmployeeUI = (dispatch, show) => {
  return dispatch({
    type: SET_SHOW_EDIT_EMPLOYEE,
    payload: {
      show,
    },
  });
};

export const ActionDeleteEmployeeUI = (dispatch, show) => {
  return dispatch({
    type: SET_SHOW_DELETE_EMPLOYEE,
    payload: {
      show,
    },
  });
};

export const ActionAddEmpData = (dispatch, data) => {
  return dispatch({
    type: ADD_EMPLOYEE_DATA,
    payload: {
      data,
    },
  });
};

export const ActionAuthorized = (dispatch, authorized) => {
  return dispatch({
    type: SET_AUTHORIZED,
    payload: {
      authorized,
    },
  });
};
