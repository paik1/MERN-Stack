import React from 'react';
import { useHistory } from 'react-router-dom';
import { errorToast, LandingModal } from '../../components';
import useData from '../../state/dataLayer';
import { CommonConstants } from '../../utils/constants';
import { ActionAuthorized } from '../../state/action';
import { useState } from 'react';
import { login } from '../../service/authSvc';
import { nullOrUndefinedObject } from '../../utils/helper';

function Login() {
  const [credential, setCredential] = useState({
    phone: null,
    password: null,
  });

  const [loader, setLoader] = useState(false);
  const [, dispatch] = useData();
  const history = useHistory();

  const loginUser = async () => {
    console.log(nullOrUndefinedObject(credential));
    if (!nullOrUndefinedObject(credential)) {
      setLoader(true);
      let result = await login(credential);
      setLoader(false);
      if (result) {
        ActionAuthorized(dispatch, true);
        history.push('/dashboard');
      }
    } else {
      errorToast({
        title: 'Invalid input',
        message: 'Please enter all fields to login',
      });
    }
  };

  return (
    <LandingModal
      isLoading={loader}
      size='small'
      actionMethod={loginUser}
      title={`Welcome back to ${CommonConstants.APP_NAME}`}
      actionLabel='Login'>
      <input
        onChange={e => setCredential({ ...credential, phone: e.target.value })}
        type='text'
        className='custom-inputs'
        placeholder='Enter phone No'
      />
      <input
        onChange={e =>
          setCredential({ ...credential, password: e.target.value })
        }
        type='email'
        placeholder='Enter password'
      />
    </LandingModal>
  );
}

export default Login;
