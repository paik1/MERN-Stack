import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Stocks } from '..';
import Employee from '../employee/employee';
import Suppliers from '../suppliers/suppliers';
import Transactoins from '../transactoins/transactoins';
import './body.scss';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/dashboard/stocks',
    main: () => <Stocks />,
  },
  {
    path: '/dashboard/employees',
    main: () => <Employee />,
  },
  {
    path: '/dashboard/supplier',
    main: () => <Suppliers />,
  },
  {
    path: '/dashboard/transactions',
    main: () => <Transactoins />,
  },
];

function Body(props) {
  return (
    <div className='content'>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </div>
  );
}

export default Body;
