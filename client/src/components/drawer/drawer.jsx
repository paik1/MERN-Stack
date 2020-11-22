import React, { useEffect } from 'react';
import {
  ActionAddEmployeeUI,
  ActionEditEmployeeUI,
  SET_SHOW_ADD_EMPLOYEE,
  SET_SHOW_EDIT_EMPLOYEE,
} from '../../state/action';
import useData from '../../state/dataLayer';

function Drawer({ header, actionType, btnLabel, btnAction, children }) {
  const [, dispatch] = useData();

  useEffect(() => {
    document.getElementById('action-drawer').style.marginRight = '0';
  });

  const closeDrawer = () => {
    document.getElementById('action-drawer').style.marginLeft = '-50rem';
    switch (actionType) {
      case SET_SHOW_ADD_EMPLOYEE:
        ActionAddEmployeeUI(dispatch, false);
        break;
      case SET_SHOW_EDIT_EMPLOYEE:
        ActionEditEmployeeUI(dispatch, false);
        break;
      default:
        return;
    }
  };

  return (
    <div className='action-drawer'>
      <div id='action-drawer' className='action-drawer__div'>
        <div className='action-drawer__div__header'>
          <h2>{header}</h2>
          <img
            src={require('../../assets/icons/cross.svg')}
            onClick={closeDrawer}
            alt='close-drawer'
          />
        </div>
        <div className='action-drawer__div__body'>{children}</div>
        <footer className='action-drawer__div__footer'>
          <div onClick={btnAction}>{btnLabel}</div>
        </footer>
      </div>
    </div>
  );
}

export default Drawer;
