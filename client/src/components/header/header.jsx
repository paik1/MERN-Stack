import React from 'react';
import { CommonConstants } from '../../utils/constants';
import './header.scss';

function Header() {
  return (
    <div className='header'>
      <h2>{CommonConstants.DEVELOPER_FIRM}</h2>
      <div className='header__avatar'></div>
    </div>
  );
}

export default Header;
