import { SET_SHOW_ADD_EMPLOYEE } from './action';

export const initialState = {
  uiStates: {
    employee: {
      addEmpDrawer: false,
      editEmpDrawe: false,
    },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SHOW_ADD_EMPLOYEE:
      //   let x = (uiStates['employee']['addEmpDrawer'] = action.payload.show);
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
    default:
      return state;
  }
};

export default reducer;
