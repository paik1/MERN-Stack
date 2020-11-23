import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { LandingModal, Loader } from '../../components';
import useData from '../../state/dataLayer';
import { CommonConstants } from '../../utils/constants';
import { ActionAuthorized } from '../../state/action';
import { useState } from 'react';

function Login() {
  const [loader, setLoader] = useState(false);
  const [data, dispatch] = useData();
  console.log(data);
  let history = useHistory();

  const loginUser = () => {
    setLoader(true);
    setTimeout(() => {
      ActionAuthorized(dispatch, true);
      setLoader(false);
      history.push('/dashboard');
    }, 1000);
  };

  return (
    <LandingModal
      isLoading={loader}
      size='small'
      actionMethod={loginUser}
      title={`Welcome to ${CommonConstants.APP_NAME}`}
      actionLabel='Login'>
      <input
        type='text'
        className='custom-inputs'
        placeholder='Enter phone No'
      />
      <input type='email' placeholder='Enter password' />
    </LandingModal>
  );
}

export default Login;
