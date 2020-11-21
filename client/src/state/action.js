// UI state Actions
export const SET_SHOW_ADD_EMPLOYEE = 'SET_SHOW_ADD_EMPLOYEE';
export const SET_SHOW_EDIT_EMPLOYEE = 'SET_SHOW_EDIT_EMPLOYEE';

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
