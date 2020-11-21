import React from 'react';
import { Link } from 'react-router-dom';
import { CommonConstants } from '../../utils/constants';

function Header() {
  return (
    <div className='header'>
      <h2>
        <Link to='/dashboard'>{CommonConstants.DEVELOPER_FIRM}</Link>
      </h2>
      <div className='header__avatar'></div>
    </div>
  );
}

export default Header;
