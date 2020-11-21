import React from 'react';
import { ActionAddEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';

function AddEmployee() {
  const [, dispatch] = useData();

  return (
    <div className='action-drawer'>
      <div className='action-drawer__div'>
        <div className='action-drawer__div__header'>
          <h2>Add Employee</h2>
          <img
            src={require('../../assets/icons/cross.svg')}
            onClick={() => ActionAddEmployeeUI(dispatch, false)}
            alt='close-drawer'
          />
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
