import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Login, Register } from '..';
import { Notification } from '../../components';
import { CommonConstants } from '../../utils/constants';

function Landing() {
  return (
    <div className='landing'>
      <header className='landing__header'>
        <h1>{CommonConstants.DEVELOPER_FIRM}</h1>
      </header>
      <main className='landing__body'>
        <h1>{CommonConstants.APP_NAME}</h1>
        <p>Some puch word about the application and its usage</p>
        <div className='landing__body__btns'>
          <Link to='/register'>
            <div className='landing__body__btns__btn'>Register</div>
          </Link>
          <Link to='/login'>
            <div className='landing__body__btns__btn'>Login</div>
          </Link>
        </div>
      </main>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
      <Notification />
    </div>
  );
}

export default Landing;
