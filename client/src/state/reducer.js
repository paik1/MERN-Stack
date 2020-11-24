import {
  ADD_EMPLOYEE_DATA,
  SET_SHOW_ADD_EMPLOYEE,
  SET_SHOW_DELETE_EMPLOYEE,
  SET_SHOW_EDIT_EMPLOYEE,
  SET_AUTHORIZED,
} from './action';

export const initialState = {
  uiStates: {
    employee: {
      addEmpDrawer: false,
      editEmpDrawer: false,
      deleteEmpModal: false,
    },
  },
  data: {
    isAuthorized: false,
    employee: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SHOW_ADD_EMPLOYEE:
      return {
        ...state,
        uiStates: {
          ...state.uiStates,
          employee: {
            ...state.uiStates.employee,
            addEmpDrawer: action.payload.show,
          },
        },
      };
    case SET_SHOW_EDIT_EMPLOYEE:
      return {
        ...state,
        uiStates: {
          ...state.uiStates,
          employee: {
            ...state.uiStates.employee,
            editEmpDrawer: action.payload.show,
          },
        },
      };
    case SET_SHOW_DELETE_EMPLOYEE:
      return {
        ...state,
        uiStates: {
          ...state.uiStates,
          employee: {
            ...state.uiStates.employee,
            deleteEmpModal: action.payload.show,
          },
        },
      };
    case ADD_EMPLOYEE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          employee: [...state.data.employee, action.payload.data],
        },
      };
    case SET_AUTHORIZED:
      return {
        ...state,
        data: {
          ...state.data,
          isAuthorized: action.payload.authorized,
        },
      };
    default:
      return state;
  }
};

export default reducer;
