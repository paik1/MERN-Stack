import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className='landing__body__btns__btn'>Register</div>
          <div className='landing__body__btns__btn'>
            <Link to='/dashboard'>Login</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
