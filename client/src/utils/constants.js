export const CommonConstants = {
  APP_NAME: 'Application Name',
  DEVELOPER_FIRM: 'SimplyPai',
  API_BASE_URL: 'http://localhost:5000/v1/api',
  TOKEN: 'token'
};

export const EmployeeRoles = [
  { id: 'COOWNER', name: 'coowner' },
  { id: 'MANAGER', name: 'manager' },
  { id: 'WORKER', name: 'worker' },
];

export const MenuItems = [
  {
    iconPath: require('../assets/icons/people-group.svg'),
    activeIconPath: '',
    name: 'Employees',
    subText: '',
    link: 'employees',
  },
  {
    iconPath: require('../assets/icons/work_outline_24px.svg'),
    activeIconPath: '',
    name: 'Suppliers',
    subText: '',
    link: 'supplier',
  },
  {
    iconPath: require('../assets/icons/graph-line.svg'),
    activeIconPath: '',
    name: 'Stocks',
    subText: '',
    link: 'stocks',
  },
  {
    iconPath: require('../assets/icons/credit_card_24px.svg'),
    activeIconPath: '',
    name: 'Transactions',
    subText: '',
    link: 'transactions',
  },
];


export const ApiConstants = {
  'UNAUTHORIZED': 401,
  'ACCESS-DENIED': 403,
  'NOT-FOUND': 404,
  'SUCCESS': 200,
  'CREATED': 201,
  'BAD-REQUEST': 400,
  'INTERNAL-SERVER-ERROR': 500
}
