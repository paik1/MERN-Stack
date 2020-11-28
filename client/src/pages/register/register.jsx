import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LandingModal } from '../../components';
import { ActionAuthorized } from '../../state/action';
import useData from '../../state/dataLayer';
import { CommonConstants } from '../../utils/constants';

function Register() {
  const [loader, setLoader] = useState(false);
  const [data, dispatch] = useData();
  const history = useHistory();

  const registerOwner = () => {
    Axios.get('https://ghcwhcww14.execute-api.us-east-1.amazonaws.com/dev/api').then(res => console.log(res))
    // setLoader(true);
    // setTimeout(() => {
    //   ActionAuthorized(dispatch, true);
    //   setLoader(false);
    //   history.push('/login');
    // }, 1000);
  };

  return (
    <LandingModal
      isLoading={loader}
      size='small'
      actionMethod={registerOwner}
      title={`Welcome to ${CommonConstants.APP_NAME}`}
      actionLabel='Register'>
      <input
        type='text'
        className='custom-inputs'
        placeholder='Enter phone No'
      />
      <input type='email' placeholder='Enter password' />
      <input type='tel' placeholder='Phone No' />
      <input type='password' placeholder='Password' />
    </LandingModal>
  );
}

export default Register;
