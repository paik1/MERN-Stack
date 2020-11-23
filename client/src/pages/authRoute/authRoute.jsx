import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useData from '../../state/dataLayer';

const AuthRoute = ({ children, ...rest }) => {
  const [{ data }] = useData();
  return (
    <Route
      {...rest}
      render={() => (data.isAuthorized ? children : <Redirect to='/' />)}
    />
  );
};

export default AuthRoute;
