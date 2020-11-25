import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Employee, Stats, Stocks, Suppliers, Transactions } from '../../pages';

const routes = [
  {
    path: '/dashboard',
    exact: true,
    main: () => <Stats />,
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
    main: () => <Transactions />,
  },
];

const Body = () => {
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
        <Route path='/'>
          <Redirect exact to='/dashboard' />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
