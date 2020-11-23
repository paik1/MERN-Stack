import {
  ADD_EMPLOYEE_DATA,
  SET_SHOW_ADD_EMPLOYEE,
  SET_SHOW_DELETE_EMPLOYEE,
  SET_SHOW_EDIT_EMPLOYEE,
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
    employee: [
      {
        name: 'Abhin',
        email: 'abhin@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
      {
        name: 'Kiran',
        email: 'kir@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
      {
        name: 'Shivani',
        email: 'didi@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
      {
        name: 'Varun',
        email: 'vrn@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
      {
        name: 'Vaibhav',
        email: 'vbh@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
      {
        name: 'Balu',
        email: 'balu@mail.com',
        phone: '908928238',
        role: 'Manager',
      },
    ],
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
    default:
      return state;
  }
};

export default reducer;
