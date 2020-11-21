import React from 'react';
import { ActionAddEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';
import './employee.scss';

function AddEmployee() {
  const [, dispatch] = useData();

  return (
    <div className='manage-emp'>
      <div className='manage-emp__drawer'>
        <div className='manage-emp__drawer__header'>
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
