import React from 'react';
import { useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { isAuthorized } from '../../service/authSvc';
import { ActionAuthorized } from '../../state/action';
import useData from '../../state/dataLayer';
import { CommonConstants } from '../../utils/constants';

const AuthRoute = ({ children, ...rest }) => {
  const [{ data }, dispatch] = useData();
  const history = useHistory();

  useEffect(() => {
    const isAuthorizedUser = async () => {
      if (!data.isAuthorized && sessionStorage.getItem(CommonConstants.TOKEN)) {
        let result = await isAuthorized();
        if (result) {
          ActionAuthorized(dispatch, true);
          history.push('/dashboard');
        }
      }
    };
    isAuthorizedUser();
  }, []);

  return (
    <Route
      {...rest}
      render={() => (data.isAuthorized ? children : <Redirect to='/' />)}
    />
  );
};

export default AuthRoute;
