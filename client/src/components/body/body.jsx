import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Stocks, Employee, Suppliers, Transactions } from '..';

const routes = [
  {
    path: '/dashboard',
    exact: true,
    main: () => <Home />,
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
        <Route path='/'>
          <Redirect exact to='/dashboard' />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
