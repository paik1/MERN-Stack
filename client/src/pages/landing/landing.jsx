import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CommonConstants } from '../../utils/constants';
import Login from '../login/login';

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
          <div className='landing__body__btns__btn'>Register</div>
          <Link to='/login'>
            <div className='landing__body__btns__btn'>Login</div>
          </Link>
        </div>
      </main>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default Landing;
