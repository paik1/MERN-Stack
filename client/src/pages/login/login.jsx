import React from 'react';
import { useHistory } from 'react-router-dom';
import { LandingModal } from '../../components';
import useData from '../../state/dataLayer';
import { CommonConstants } from '../../utils/constants';
import { ActionAuthorized } from '../../state/action';
import { useState } from 'react';
import { login } from '../../service/authSvc';

function Login() {
  const [credential, setCredential] = useState({
    phone: null,
    password: null,
  });

  const [loader, setLoader] = useState(false);
  const [, dispatch] = useData();
  const history = useHistory();

  const loginUser = async () => {
    setLoader(true);
    let result = await login(credential);
    setLoader(false);
    if (result) {
      ActionAuthorized(dispatch, true);
      history.push('/dashboard');
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
