import { ADD_EMPLOYEE_DATA, SET_SHOW_ADD_EMPLOYEE } from './action';

export const initialState = {
  uiStates: {
    employee: {
      addEmpDrawer: false,
      editEmpDrawe: false,
    },
  },
  data: {
    employee: [1],
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
    case ADD_EMPLOYEE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          employee: [...state.data.employee, action.payload.data],
        },
      };
    default:
      return state;
  }
};

export default reducer;
